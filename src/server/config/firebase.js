const admin = require("firebase-admin");
const serviceAccount = require("../../../secrets/firebasekey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

const dbGet = async ({collection, document, filter}) => {
    const ref = db.collection(collection).doc(document);
    const doc = await ref.get();
    return doc.data();
}

const dbSet = async ({collection, document, data, callback}) => {
    const ref = db.collection(collection).doc(document);
    const doc = await ref.set(data).then((res) => {
        console.log(res);
        if (callback)
            callback();
    });
}


module.exports = {
    dbGet,
    dbSet
};