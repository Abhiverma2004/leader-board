// backend/controllers/userController.js
const User = require('../models/userModel');
const History = require('../models/historyModel');

// Seed initial users if the collection is empty
const seedUsers = async () => {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const initialUsers = [
        { name: 'Rahul' }, { name: 'Kamal' }, { name: 'Sana' },
        { name: 'Amit' }, { name: 'Priya' }, { name: 'Vikram' },
        { name: 'Anjali' }, { name: 'Rohan' }, { name: 'Neha' },
        { name: 'Deepak' },
      ];
      await User.insertMany(initialUsers);
      console.log('Database seeded with 10 users.');
    }
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

// GET /api/users - Get all users ranked by points
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 });
    // Assign ranks dynamically
    const rankedUsers = users.map((user, index) => ({
      ...user.toObject(),
      rank: index + 1,
    }));
    res.json(rankedUsers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST /api/users - Add a new user
const addUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST /api/users/claim - Claim points for a user
const claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { points: randomPoints } },
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a history record
    const historyRecord = new History({
      userId: user._id,
      pointsClaimed: randomPoints,
    });
    await historyRecord.save();

    res.json({ message: `Awarded ${randomPoints} points to ${user.name}.` });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET /api/history - Get claim history
const getHistory = async (req, res) => {
    try {
        const history = await History.find()
            .populate('userId', 'name') // 'name' is the field from User model
            .sort({ timestamp: -1 })
            .limit(20); // Get latest 20 claims
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
};

module.exports = { seedUsers, getUsers, addUser, claimPoints, getHistory };