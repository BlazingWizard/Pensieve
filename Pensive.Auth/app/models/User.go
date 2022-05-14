package models

type User struct {
	Name     string `json:"name" bson:"name"`
	Password string `json:"password" bson:"password"`
}
