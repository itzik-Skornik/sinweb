const jwt = require("jsonwebtoken");
const checkout = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "your_secret_key")
        next();
    } catch (error) {
        res.status(401).json({ message: "שגיאה" })
    }
}
module.exports = checkout