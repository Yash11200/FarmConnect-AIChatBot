const user = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getAllUser = async (req, res) => {
    try {
        const users = await user.find({}, 'name email password'); // Select only required fields
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
}

exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await user.findOne({ email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new user({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

