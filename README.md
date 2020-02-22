# Policies-List
Web application to show customers’ policies.

## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/nupurshinde9/Policies-List.git
```
and install the dependencies
```
npm install
```

### Prerequisites
A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb, mongoose and Angular CLI.

#### MongoDB
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

### Start the MongoDB server
First we need to create the `db` directory where the database files will live in. In your terminal navigate to the `root` of your system by doing `cd ..` until you reach the top directory. You can create the directory by running `sudo mkdir -p /data/db`. Now open a different tab in your terminal and run `mongod` to start the Mongo server.

To make your database ready to consume, open new terminal window and run
```
mongoimport --db policylist --collection policies --file <--path to the db.json--> --jsonArray
```
This will import policies in the database named `policylist`.
You can find the `db.json` in the project folde.

### Start the node server
Star node server to activate your web API. Open new terminal window. Go to the root folder and run
```
node app.js
```

### Run the Application

Open new terminal window. From the project root folder, go to `PolicyClient`, which is our Angular application. 
To install the dependencies run `npm install`
To make the application up in browser run
```
ng serve
```
    
And now you should be able to see the app at http://localhost:4200

## Later improvements

* Unit/integration testing
* Separation of modules
* API authentication

