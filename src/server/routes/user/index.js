const { getUserHandler, setUserHandler } = require("../../service/user");

const getUser = async (req, res) => {
    const {
        document
    } = req.params;

    const data = await getUserHandler({
        document
    });

    return res.status(200).send(data);
}

const setUser = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    const data = await setUserHandler({
        name,
        email,
        password
    });

    return res.status(200).send(data);
}

module.exports = [
    {
        path: "/user/:document?",
        method: "get",
        handler: getUser
    },
    {
        path: "/user",
        method: "post",
        handler: setUser
    }
]