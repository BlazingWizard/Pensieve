package controllers

import (
	"encoding/json"
	"net/http"

	"BlazingWizard/Pensive.Auth/app/data"
	"BlazingWizard/Pensive.Auth/app/services"

	"go.mongodb.org/mongo-driver/mongo"
)

type Signup struct {
	userService *services.UserService
}

func NewSignup(db *mongo.Database) *Signup {
	return &Signup{
		userService: &services.UserService{
			Repository: &data.UserRepository{
				Db: db,
			},
		},
	}
}

type SignupResponce struct {
	User string `json:"user"`
	Err  string `json:"error"`
}

func (s *Signup) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
	case http.MethodPost:
		// TODO error handling
		user, _ := s.userService.Create()
		resp := SignupResponce{user, ""}

		j, err := json.Marshal(resp)
		if err != nil {
			http.Error(w, "", http.StatusInternalServerError)
			return
		}

		w.Write(j)
	default:
		http.Error(w, "", http.StatusMethodNotAllowed)
	}
}
