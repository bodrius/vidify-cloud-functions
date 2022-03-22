import * as functions from "firebase-functions";

const { initializeApp } = require("firebase-admin/app");

initializeApp();

exports.sendRemoteNotification = functions.https.onRequest(
  (request, response) => {
    response.send(request.body);
  }
);
