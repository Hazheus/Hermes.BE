const postAuth = async (req, res) => {
    const {
        name,
        password
    } = req.body;

    return res.status(200).send(":)");
}

module.exports = [
    {
        path: "/auth",
        method: "post",
        handler: postAuth
    }
]