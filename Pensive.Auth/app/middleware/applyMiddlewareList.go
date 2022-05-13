package middleware

import "net/http"

type Middleware = func(next http.Handler) http.Handler

func Apply(mux *http.ServeMux, middlewares ...Middleware) http.Handler {
	var handler http.Handler = mux;

	for _, middleware := range middlewares {
		handler = middleware(handler)
	}

	return handler;
}
