const user=require("./model")
exports.contactUser = async (req, res) => {
    try {
        const result = await user.create(req.body)
        console.log(result);
        res.json({
            message: "connect Success",
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "unable to connect", error
        })
    }

}
exports.getContactUser = async (req, res) => {
    try {
        const result = await user.find(req.body)
        console.log(result);
        res.json({
            message: "contacts find success",
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "unable to connecting", error
        })
    }

}