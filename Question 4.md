The go file below has a few error, can you spot and fix them?

```go
package models

import (
	"database/sql"
	"time"

	_ "github.com/lib/pq"
)

type Tasks struct {
	ID         int
	Title      string
	Done       bool
	UserID    int
	CreatedAt time.Time
}

var Db *sql.DB

func main() {
	var err error

	Db, err = sql.Open("postgres", "user=postgres dbname=go_app sslmode=disable")
	if err != nil {
		panic(err)
	}
}

func (task *Tasks) Create() error {
	query := "insert into tasks (title, user_id) values ($1, $2) returning id, done"

	stmt, err := Db.Prepare(query)

	if err != nil {
		panic(err)
	}

	stmt.Close()
	err = stmt.QueryRow(task.Title, task.User_id).Scan(&task.Id, &task.Done)

	if err != nil {
		return err
	}
	return
}

```
