# To-Do-List WebApp with JWT/Auth 
   As the title says this is a to-do list, with todos organized in folders and user authorization which allows each user to have their own folders and tasks. 
   It's connected to a mongo database!. 
   This project was built using: -ReactJS (v18.0.0) -NodeJS (v16.14.2 ) -Express(v4.17.3) -MongoDB
   
   The mongo database is set to be Mongo Atlas (cloud) but you can change the DB_URI var on the .env to be anything you want even a local db.

   The server is connected to a Slack channel to send all the errors there. The database is set to be MongoDB but by changing ENGINE_DB to mysql (and a few lines of code) you can use a sql database. 
   Each user has a default "user" role. Although there is a page for an admin, it is empty, so currently it doesn't matter whether your role is.
   
   In the .env file, you can find all the key variables, feel free to change them. 


# Client Commands
    npm install
    npm start

# Server Commands
    npm install
    npm run dev

# Heroku Link to see this project fully working

    https://todo-auth-mern.herokuapp.com/login