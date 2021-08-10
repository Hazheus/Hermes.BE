const getHealthStatus = async (req, res) => {
    return res.status(200).send("Alive");
}

module.exports = [
    {
        path: "/health",
        method: "get",
        handler: getHealthStatus
    }
]