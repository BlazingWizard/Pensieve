package services

import (
	"BlazingWizard/Pensive.Auth/app/data"
	"BlazingWizard/Pensive.Auth/app/models"
)

type UserService struct {
	Repository *data.UserRepository
}

func (u *UserService) Get() *models.User {
	user := u.Repository.GetByName("hello_world!")
	return user
}

func (u *UserService) Create() (string, error) {
	u.Repository.Create()
	return "Ok", nil
}
