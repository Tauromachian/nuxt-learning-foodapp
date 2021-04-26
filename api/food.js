const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("./node-firebase-example-eb809-firebase-adminsdk-mz5sq-82770d65a0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-firebase-example-eb809.firebaseio.com"
});

const db = firebaseAdmin.firestore()

export default async function getFood() {
  const fooddata = await firebaseAdmin.firestore().collection('fooddata').get
  return fooddata.docs.map(doc => doc.data())
}
