const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};


const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.signup(username, email, password);

        
        const token = createToken(user._id);

        res.status(201).json({ userId: user._id, username: user.username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        
        const token = createToken(user._id);

        res.status(200).json({ userId: user._id, username: user.username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser, loginUser };
