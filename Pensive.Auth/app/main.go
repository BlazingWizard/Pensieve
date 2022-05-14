package main

import (
	"net/http"

	"BlazingWizard/Pensive.Auth/app/controllers"
	"BlazingWizard/Pensive.Auth/app/data"
	"BlazingWizard/Pensive.Auth/app/middleware"
	"BlazingWizard/Pensive.Auth/app/pkg"
)

func main() {
	mux := http.NewServeMux()

	db := data.Connect("mongodb://root:example@localhost:27017/")
	defer data.Disconnect(db)

	mux.Handle("/signup", controllers.NewSignup(db))

	http.ListenAndServe(":8090",
		pkg.ApplyMiddleware(
			mux,
			middleware.SayHello,
			middleware.Logger,
		),
	)
}
