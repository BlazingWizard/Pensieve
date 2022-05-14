package services

import "BlazingWizard/Pensive.Auth/app/data"

type UserService struct {
	Repository *data.UserRepository
}

func (u *UserService) Get() string {
	u.Repository.GetByName("hello_world!")
	return "Ivan Ivanov"
}

func (u *UserService) Create() (string, error) {
	u.Repository.Create()
	return "Ok", nil
}
