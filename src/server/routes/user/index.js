const {getUserHandler, setUserHandler} = require("../../service/user");

const getUser = async (req, res) => {
    const data = await getUserHandler({
        document: "piIuEmSySWFoKtH2kFDU"
    });
    return res.status(200).send(data);
}

const setUser = async (req, res) => {
    const data = await setUserHandler({
        nome: "Yuri",
        email: "yuri@gmail.com"
    });
    return res.status(200).send(data);
}

module.exports = [
    {
        path: "/user",
        method: "get",
        handler: getUser
    },
    {
        path: "/user/set",
        method: "get",
        handler: setUser
    }
]