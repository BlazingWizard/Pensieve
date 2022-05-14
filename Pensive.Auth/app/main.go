package main

import (
	"net/http"

	"BlazingWizard/Pensive.Auth/app/controllers"
	"BlazingWizard/Pensive.Auth/app/middleware"
	"BlazingWizard/Pensive.Auth/app/pkg"
)

func main() {
	mux := http.NewServeMux()

	mux.Handle("/signup", controllers.NewSignup())

	http.ListenAndServe(":8090",
		pkg.ApplyMiddleware(
			mux,
			middleware.SayHello,
			middleware.Logger,
		),
	)
}
