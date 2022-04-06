import * as functions from "firebase-functions";

const admin = require("firebase-admin");

const { initializeApp } = require("firebase-admin/app");

initializeApp();

exports.sendNotificationNewChatMessage = functions.https.onCall((request) => {
  let payload = {
    data: {
      type: "new_chat_message",
    },
    notification: {
      title: request.postTitle,
      body: request.textMessage,
      sound: "default",
      badge: "1",
    },
  };

  return admin.messaging().sendToDevice(request.token, payload);
});

exports.sendNotificationNewOffer = functions.https.onCall((request) => {
  let payload = {
    data: {
      type: "new_offer",
    },
    notification: {
      title: request.postTitle,
      body: request.textMessage,
      sound: "default",
      badge: "1",
    },
  };

  return admin.messaging().sendToDevice(request.token, payload);
});

exports.sendNotificationReviewOffer = functions.https.onCall((request) => {
  let payload = {
    data: {
      type: "review_offer",
    },
    notification: {
      title: request.postTitle,
      body: request.textMessage,
      sound: "default",
      badge: "1",
    },
  };

  return admin.messaging().sendToDevice(request.token, payload);
});
