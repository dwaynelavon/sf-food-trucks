package graph

import "github.com/dwaynelavon/sf-food-trucks/app/foodtruck"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	Service foodtruck.Service
}
