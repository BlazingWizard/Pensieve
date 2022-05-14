package services

type UserService struct{}

func (u *UserService) Get() string {
	return "Ivan Ivanov"
}

func (u *UserService) Create() (string, error) {
	return "Create success", nil
}
