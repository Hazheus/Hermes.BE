const { dbGet, dbSet, dbQuery } = require("../../config/firebase");

const getUserHandler = async ({
    document
}) => {
    try {
        const data = await dbGet({
            collection: "users",
            document
        });
        return data;
    } catch (error) {
        console.log("[service][user][getUserHandler] error on get user", error);
        return false
    }
}

const setUserHandler = async ({
    name,
    email,
    password
}) => {
    try {
        const doc = dbSet({
            collection: "users",
            data: { name, email, password }
        });

        return doc;
    } catch (error) {
        console.log("[service][user][getUserHandler] error on set user", error);
        return false;
    }
}

module.exports = {
    getUserHandler,
    setUserHandler
}