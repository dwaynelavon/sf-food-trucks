package foodtruck

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"

	"go.uber.org/zap"
)

type Facade interface {
	GetAll(context.Context) ([]FoodTruck, error)
}

type facade struct {
	logger  *zap.Logger
	sLogger *zap.SugaredLogger
}

func NewFacade(logger *zap.Logger) Facade {
	return &facade{
		logger:  logger,
		sLogger: logger.Sugar(),
	}
}

/* ---------- interface implementations --------- */

// GetAll implements the Facade interface
func (f *facade) GetAll(ctx context.Context) ([]FoodTruck, error) {
	// This would be better off in a config in real life
	url := "https://data.sfgov.org/resource/rqzj-sfat.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		f.sLogger.Error(err)
		return nil, errors.New("unable to create food truck data request")
	}

	client := &http.Client{}

	resp, err := client.Do(req)
	if err != nil {
		f.sLogger.Error(err)
		return nil, errors.New("unable to fetch new food truck data")
	}

	defer resp.Body.Close()

	foodTrucks := []FoodTruck{}
	if errJSON := json.NewDecoder(resp.Body).Decode(&foodTrucks); errJSON != nil {
		f.sLogger.Error(err)
		return nil, errors.New("unable to unmarshal request body")
	}

	return foodTrucks, nil
}
