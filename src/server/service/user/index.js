const {dbGet, dbSet} = require("../../config/firebase");


const getUserHandler = async ({
    document,
    filter
}) => {
    try{
       const data = await dbGet({
           collection: "users",
           document,
           filter
       });
       return data;
    }catch(error){
        console.log("[service][user][getUserHandler] error on get user", error);
        return false
    }
}

const setUserHandler = async ({
    data
}) => {
    try{
        dbSet({
            collection: "users",
            document: "",
            data
        });
        console.log("[service][user][getUserHandler] set user");
        return true;
    }catch(error){
        console.log("[service][user][getUserHandler] error on set user", error);
    }
}

module.exports = {
    getUserHandler,
    setUserHandler
}