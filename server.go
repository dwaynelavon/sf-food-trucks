package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/dwaynelavon/sf-food-trucks/app/foodtruck"
	"github.com/dwaynelavon/sf-food-trucks/graph"
	"github.com/dwaynelavon/sf-food-trucks/graph/generated"
	"go.uber.org/zap"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	logger, errLogger := zap.NewDevelopment()
	if errLogger != nil {
		panic("unable to instantiate logger")
	}

	// manual dependency injection
	foodTruckRepo := foodtruck.NewFacade(logger)
	foodTruckService := foodtruck.NewService(logger, foodTruckRepo)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{
		Service: foodTruckService,
	}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
