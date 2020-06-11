package foodtruck

import (
	"context"
	"sort"
	"strconv"

	"github.com/pkg/errors"
	"github.com/umahmood/haversine"
	"go.uber.org/zap"
)

// FoodTruck represents a physical food truck and it's location
type FoodTruck struct {
	ObjectID            string `json:"objectId"`
	Applicant           string `json:"applicant"`
	Facilitytype        string `json:"facilitytype"`
	Cnn                 string `json:"cnn"`
	Locationdescription string `json:"locationdescription"`
	Address             string `json:"address"`
	Blocklot            string `json:"blocklot"`
	Block               string `json:"block"`
	Lot                 string `json:"lot"`
	Permit              string `json:"permit"`
	Status              string `json:"status"`
	Fooditems           string `json:"fooditems"`
	X                   string `json:"x"`
	Y                   string `json:"y"`
	Latitude            string `json:"latitude"`
	Longitude           string `json:"longitude"`
	Schedule            string `json:"schedule"`
	Received            string `json:"received"`
	Priorpermit         string `json:"priorpermit"`
	Expirationdate      string `json:"expirationdate"`
	Location            struct {
		Type        string    `json:"type"`
		Coordinates []float64 `json:"coordinates"`
	} `json:"location"`
}

type NearbyFoodTruck struct {
	FoodTruck
	SourceLat float64
	SourceLng float64
	// The distance from the source in miles
	SourceDistance float64
}

type Service interface {
	Nearby(ctx context.Context, lat, long float64) ([]NearbyFoodTruck, error)
}

type service struct {
	logger  *zap.Logger
	sLogger *zap.SugaredLogger
	repo    Facade
}

func NewService(logger *zap.Logger, repo Facade) Service {
	return &service{
		logger:  logger,
		sLogger: logger.Sugar(),
		repo:    repo,
	}
}

/* ---------- interface implementations --------- */

// Nearby implements the Service interface
func (s *service) Nearby(ctx context.Context, lat, lng float64) ([]NearbyFoodTruck, error) {
	foodTrucks, errFoodTrucks := s.repo.GetAll(ctx)
	if errFoodTrucks != nil {
		return nil, errFoodTrucks
	}

	nearByFoodTrucks, errNearby := transformFoodTrucksToNearby(foodTrucks, lat, lng)
	if errNearby != nil {
		return nil, errNearby
	}

	sort.SliceStable(nearByFoodTrucks, func(i, j int) bool {
		return nearByFoodTrucks[i].SourceDistance < nearByFoodTrucks[j].SourceDistance
	})

	return nearByFoodTrucks, nil
}

func transformFoodTrucksToNearby(foodTrucks []FoodTruck, sourceLat, sourceLng float64) ([]NearbyFoodTruck, error) {
	nearbyFoodTrucks := []NearbyFoodTruck{}
	for _, v := range foodTrucks {
		vLat, errVLat := strconv.ParseFloat(v.Latitude, 64)
		vLng, errVLng := strconv.ParseFloat(v.Longitude, 64)

		if errVLat != nil || errVLng != nil {
			return nil, errors.Errorf("invalid lat and long for object %v", v.ObjectID)
		}
		src := haversine.Coord{Lat: sourceLat, Lon: sourceLng} // user location
		dest := haversine.Coord{Lat: vLat, Lon: vLng}          // foodtruck location
		mi, _ := haversine.Distance(src, dest)

		nearbyFoodTrucks = append(nearbyFoodTrucks, NearbyFoodTruck{
			FoodTruck:      v,
			SourceLat:      sourceLat,
			SourceLng:      sourceLng,
			SourceDistance: mi,
		})
	}
	return nearbyFoodTrucks, nil
}
