# Hackathon: Trashbot 

Fullstack app to integrate a slackbot to capture time wasted by employees held up by blockers and turn this waste paper into meaningful data to consume in a beautiful chart form clientside application.

## Prequisites:

### Pipedream

Use Pipedream to temporaily recieve POST requests for testing Slack Apps ahead of Firebase functions

[https://requestbin.com](https://requestbin.com/)

### Firebase

Enable the database (firestore) to store info from slack

Allows creation of cloud functions to handle slackbot requests

* Firebase CLI `npm install firebase-tools -g` : then login with creds below in terminal
* Firebase User Account - use for online access to firestore db
  * vf.six.fingers@gmail.com
  * vf-sixfingers

Create a new firebase project including hosting / functions / firestore

Firebase Functions reference guide: https://itnext.io/working-with-firebase-functions-http-request-22fd1ab644d3

### Slackbot local server

Faster way to create a Slackbot (local) server rather than hosting one with an Express server...

Using https://github.com/mishk0/slack-bot-api for methods reference.

Create `package.json` to install from:

```
{
  "name": "wastebot",
  "version": "1.0.0",
  "description": "automating the things",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "moi@me.com",
  "license": "MIT",
  "dependencies": {
    "axios": "^0.19.0",
    "slackbots": "^1.2.0"
  }
}
```

### Client React App

Local React app to consume updates from the firestore and represent the available data using Charts.js

* ReactApp `npx create-react-app my-app`
* ReactFire (Consume Firebase) `npm install reactfire` Guide: https://github.com/FirebaseExtended/reactfire
* Charts.js `npm install chart.js --save`  Guide: https://www.chartjs.org/docs/latest/

### Slack App installation

1. Goto https://api.slack.com/apps and create new app
2. ![Screenshot 2019-10-17 at 16.24.08](Screenshot 2019-10-17 at 16.24.08.jpg)

3. ![Screenshot 2019-10-17 at 16.23.18](Screenshot 2019-10-17 at 16.23.18.jpg)
4. ![Screenshot 2019-10-17 at 16.24.21](Screenshot 2019-10-17 at 16.24.21.jpg)
5. ![Screenshot 2019-10-17 at 16.22.57](Screenshot 2019-10-17 at 16.22.57.jpg)

Once set up - you should see your app in Slack!![Screenshot 2019-10-17 at 16.30.54](Screenshot 2019-10-17 at 16.30.54.jpg)

(it show as green if running)

And Grab the `Bot User oAuth Access Token` and pass it to your **Slackbot app's token config**

Like so:

```
const bot = new Slackbot({
    token: 'xoxb-308639523303-793474530389-U2njXbyqDipcOUkJSFY3O2gw',
    name: 'trash' // app name
})
```



## Build prep

Break out into 3 initial teams with following tasks:

1. Frontend App - Create a react app with ReactFire Wrapper ready to capture data from Firestore
2. Firebase Backend
   1. Setup the Database with simple test structure for Frontend to recieve payload from connection.
   2. Write simple cloud function (CF) to recieve data from Slack or any POST
   3. Scaffold CF to handle pushing data to Firestore
3. Slackapp
   1. Trigger onLoad broadcast to Slack
   2. Trigger test callback request to `Pipedream` endpoint
   3. Create Interactive Slack message using Slack "Blocks"

This should effectively be all the app glue neccessary to connect the stack.

## The Hack

Going forwards as 2 teams, we need to act upon the following stories: 

* Define a Firestore data shape to make that can be created by the Slackbot server and consumed usefully by the Frontend
* Integrate the meaningful data into the Frontend using Chart.js
* Create more CF's to enable data to be pushed into the Firestore from (Postman?) so that we can create _past_ data - or manually edit the Firestore directly
* Prepare Slides!
