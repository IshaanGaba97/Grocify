const User = require('../models/userModels');
const { hashPassword, comparePassword } = require('../helpers/authHelper');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        //validations
        if (!name) {
            return res.send({ message: "Name is required" });
        }
        if (!email) {
            return res.send({ message: "email is required" });
        }
        if (!password) {
            return res.send({ message: "password is required" });
        }
        if (!phone) {
            return res.send({ message: "phone is required" });
        }
        if (!address) {
            return res.send({ message: "address is required" });
        }
        if (!answer) {
            return res.send({ message: "Answer is Required" });
        }

        //check users
        const existingUser = await User.findOne({ email });

        //existing user
        if (existingUser) {
            return res.send({
                success: false,
                message: "Already registered, please login"
            })
        }

        //register user
        const hashedPassword = await hashPassword(password);
        const user = await new User({ name, email, phone, address, password: hashedPassword, answer }).save();
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in registeration",
            error
        })
    }
}


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validations
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            });
        }
        //check user 
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "email is not registered"
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.send({
                success: false,
                message: "Invalid password"
            })
        }

        //token create
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        // send success response and token and user details
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })
    }
}

//forgotPasswordController
const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;

        //validations.
        if (!email) {
            res.status(400).send({ message: "Email is required" });
        }
        if (!answer) {
            res.status(400).send({ message: "answer is required" });
        }
        if (!newPassword) {
            res.status(400).send({ message: "New Password is required" });
        }

        //check
        const user = await User.findOne({ email, answer });
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Wrong Email Or Answer",
            });
        }
        const hashed = await hashPassword(newPassword);
        await User.findByIdAndUpdate(user._id, { password: hashed });
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
}
const testController = async (req, res) => {
    res.send('protected test route has been hit');
}
module.exports = { registerController, loginController, forgotPasswordController, testController }