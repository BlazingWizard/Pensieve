package main

import (
	"fmt"
	"net/http"

	"BlazingWizard/Pensive.Auth/app/middleware"
	"BlazingWizard/Pensive.Auth/app/services"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "", http.StatusMethodNotAllowed)
			return
		}

		fmt.Fprint(w, services.GetHelloText())
	})

	http.ListenAndServe(":8090",
		middleware.Apply(
			mux,
			middleware.SayHello,
			middleware.Logger,
		),
	)
}
