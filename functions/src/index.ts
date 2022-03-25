import * as functions from "firebase-functions";

const admin = require("firebase-admin");

const { initializeApp } = require("firebase-admin/app");

initializeApp();

// {
//   "to": "<token>",
//   "time_to_live": 86400,
//   "collapse_key": "new_message",
//   "delay_while_idle": false,
//   "notification": {
//     "title": "title",
//     "body": "this is a noisy test",
//     "tag": "new_message",
//     "icon": "new_message",
//     "color": "#18d821",
//     "sound": "default"
//   }
// }

exports.sendRemoteNotification = functions.https.onCall((request) => {
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
