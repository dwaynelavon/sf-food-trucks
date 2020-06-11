// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type FoodTruck struct {
	ObjectID            *string   `json:"objectId"`
	Applicant           *string   `json:"applicant"`
	Facilitytype        *string   `json:"facilitytype"`
	Cnn                 *string   `json:"cnn"`
	Locationdescription *string   `json:"locationdescription"`
	Address             *string   `json:"address"`
	Blocklot            *string   `json:"blocklot"`
	Block               *string   `json:"block"`
	Lot                 *string   `json:"lot"`
	Permit              *string   `json:"permit"`
	Status              *string   `json:"status"`
	Fooditems           *string   `json:"fooditems"`
	X                   *string   `json:"x"`
	Y                   *string   `json:"y"`
	Latitude            *string   `json:"latitude"`
	Longitude           *string   `json:"longitude"`
	Schedule            *string   `json:"schedule"`
	Received            *string   `json:"received"`
	Priorpermit         *string   `json:"priorpermit"`
	Expirationdate      *string   `json:"expirationdate"`
	Location            *Location `json:"location"`
	SourceLat           *float64  `json:"sourceLat"`
	SourceLng           *float64  `json:"sourceLng"`
	SourceDistance      *float64  `json:"sourceDistance"`
}

type Location struct {
	Type        *string    `json:"type"`
	Coordinates []*float64 `json:"coordinates"`
}
