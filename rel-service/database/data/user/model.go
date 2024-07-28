package user

type User struct {
	Id       uint   `json:"userId"`
	Username string `json:"username"`
}

// Faking data
var userList = []User{
	{
		Id:       1,
		Username: "issichik",
	},
	{
		Id:       2,
		Username: "checkers",
	},
}
