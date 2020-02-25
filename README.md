# burger

## The Assignment
To create a burger logger using npm packages. This application will allow the user to add a burger and devour it. This will be dynamically
generated.

## How It Works
This app uses four npm packages: mysql, express, express-handlebars, and body-parser. The user will be given a text box to input the name of a burger and when the submit button is clicked, the name will be stored in the MySQL database. Everytime the page renders or when the submit button is clicked, the app makes a query to MySQL to retrieve all the names stored. This will dynamically generate the burgers in both the left and right tables, depending on whether the burger has been devoured, indicated by a boolean value corresponding to each burger.
Note: This app uses MVC

## Demo
![demo](./public/assets/img/demo.gif)

## MVC Filing System
![mvc](./public/assets/img/mvc.png)

## Screenshots of Code

### server.js
![server1](./public/assets/img/server1.png)

### Config

#### connection.js
![connection1](./public/assets/img/connection1.png)

#### orm.js
![orm1](.public/assets/img/orm1.png)

### controllers

#### burgers_controller.js
![controllers1](./public/assets/img/controllers1.png)

### db

#### schema.sql
![schema1](./public/assets/img/controllers1.png)

#### seeds.sql
![seeds1](./public/assets/img/seeds1.png)

### models

#### burger.js
![burger1](./public/assets/img/burger1.png)

### public/assets

#### burger_style.css
![style1](./public/assets/img/style1.png)

####  burgers.js
![burgers1](./public/assets/img/burgers1.png)


### views

#### main.handlebars
![main1](./public/assets/img/main1.png)

#### index.handlebars
![index1](./public/assets/img/index1.png)
