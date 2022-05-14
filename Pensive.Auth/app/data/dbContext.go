package data

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Connect(uri string) *mongo.Database {
	options := options.Client().ApplyURI(uri)
	client, _ := mongo.Connect(context.TODO(), options)

	return client.Database("auth")
}

func Disconnect(db *mongo.Database) {
	db.Client().Disconnect(context.TODO())
}
