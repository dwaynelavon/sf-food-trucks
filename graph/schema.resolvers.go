package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/dwaynelavon/sf-food-trucks/graph/generated"
	"github.com/dwaynelavon/sf-food-trucks/graph/model"
	"github.com/jinzhu/copier"
)

func (r *queryResolver) FoodTrucksNearby(ctx context.Context, lat float64, lng float64) ([]model.FoodTruck, error) {
	nearBy, errNearby := r.Service.Nearby(ctx, lat, lng)
	if errNearby != nil {
		return nil, errNearby
	}

	res := []model.FoodTruck{}
	errCopy := copier.Copy(&res, &nearBy)

	return res, errCopy
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
