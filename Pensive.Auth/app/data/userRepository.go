package data

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserRepository struct {
	Db *mongo.Database
}

// TODO Error handling
func (u *UserRepository) GetByName(email string) {

}

func (u *UserRepository) Create() {
	newUser := bson.D{{"name", "hello_world!"}, {"password", "12345"}}

	users := u.Db.Collection("user")
	users.InsertOne(context.TODO(), newUser)
}
