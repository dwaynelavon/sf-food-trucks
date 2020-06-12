package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/dwaynelavon/sf-food-trucks/app/foodtruck"
	"github.com/dwaynelavon/sf-food-trucks/graph"
	"github.com/dwaynelavon/sf-food-trucks/graph/generated"
	"github.com/go-chi/chi"
	"github.com/gorilla/websocket"
	"github.com/rs/cors"
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

	router := chi.NewRouter()

	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{
		Service: foodTruckService,
	}}))

	srv.AddTransport(&transport.Websocket{
		Upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				// Check against your desired domains here
				fmt.Printf("%v", r.Host)
				return r.Host == "http://localhost:3000"
			},
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
		},
	})

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)

	err := http.ListenAndServe(":8080", router)
	if err != nil {
		panic(err)
	}
}
