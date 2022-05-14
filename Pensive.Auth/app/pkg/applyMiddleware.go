package pkg

import "net/http"

type Middleware = func(next http.Handler) http.Handler

func ApplyMiddleware(handler http.Handler, middlewares ...Middleware) http.Handler {
	chain := handler
	for _, middleware := range middlewares {
		chain = middleware(chain)
	}

	return chain
}
