package middleware

import (
	"fmt"
	"net/http"
)

func SayHello(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Hello")

		next.ServeHTTP(w, r)
	})
}
