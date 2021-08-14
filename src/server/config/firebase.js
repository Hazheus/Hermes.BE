const admin = require("firebase-admin");
const serviceAccount = require("../../../secrets/firebasekey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

const dbGet = async ({ collection, document, filter }) => {
    const ref = db.collection(collection).doc(document);
    const doc = await ref.get();
    return doc.data();
}

const dbSet = async ({ collection, document, data }) => {
    try {
        const ref = (document) ? db.collection(collection).doc(document) : db.collection(collection).doc();
        const doc = await ref.set(data).then(async () => {
            return await ref.get();
        });
        return { document: doc.id, data: doc.data() };
    }
    catch (err) {
        console.log(`[error] when setting document [${document}] in collection [${collection}]: ${err}`);
    }
}

const dbQuery = async ({ collection, filterFieldPath, filterOperator, filterValue, selectFieldpath }) => {
    //TODO: deixar a função de query dinamica
    const collectionRef = await db.collection(collection);
    const query = await collectionRef.where(filterFieldPath, filterOperator, filterValue).select(selectFieldpath).get();
    query.forEach(doc => {
        console.log(doc.data());
    })
}

module.exports = {
    dbGet,
    dbSet,
    dbQuery
};