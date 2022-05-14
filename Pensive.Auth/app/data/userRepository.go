package data

import (
	"context"

	"BlazingWizard/Pensive.Auth/app/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserRepository struct {
	Db *mongo.Database
}

// TODO Error handling
func (u *UserRepository) GetByName(email string) *models.User {
	nameFilter := bson.D{{"name", "hello_world!"}}

	var user models.User
	users := u.Db.Collection("user")
	users.FindOne(context.TODO(), nameFilter).Decode(&user)

	return &user
}

func (u *UserRepository) Create() {
	newUser := bson.D{{"name", "hello_world!"}, {"password", "12345"}}

	users := u.Db.Collection("user")
	users.InsertOne(context.TODO(), newUser)
}
