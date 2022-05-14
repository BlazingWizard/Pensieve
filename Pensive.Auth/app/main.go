package main

import (
	"fmt"
	"net/http"

	"BlazingWizard/Pensive.Auth/app/middleware"
	"BlazingWizard/Pensive.Auth/app/pkg"
	"BlazingWizard/Pensive.Auth/app/services"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/signup", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "", http.StatusMethodNotAllowed)
			return
		}

		fmt.Fprint(w, services.GetHelloText())
	})

	http.ListenAndServe(":8090",
		pkg.ApplyMiddleware(
			mux,
			middleware.SayHello,
			middleware.Logger,
		),
	)
}
