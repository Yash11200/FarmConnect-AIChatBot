const question = require('../models/question')

exports.getAllQuestion = async (req, res) => {
    try {
        const questions = await question.find().sort({ createdAt: -1 }); 
        res.status(200).json({ message: 'Questions fetched successfully', questions });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.postQuestion = async (req, res) => {
    try {
        const { title, description, tags} = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const newQuestion = new question({
            title,
            description,
            tags,
        });
        await newQuestion.save();

        res.status(201).json({ message: "question post's successfully", question: newQuestion });
    } catch (error) {
        res.status(500).json({ message: 'Error creating question', error });
    }   
}

exports.findById = async (req, res) => {
    try {
        const questions = await question.findById(req.params.id);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.status(200).json({ message: 'Question fetched successfully', questions});
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}