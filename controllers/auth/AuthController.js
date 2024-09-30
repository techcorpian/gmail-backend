import User from '../../models/auth/AuthModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { firstname, lastname, gender, month, day, year, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ firstname });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstname, lastname, gender, month, day, year, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // res.json({ token, user: { id: user._id, username: user.username, email: user.email } });

    res.status(200).send({
      id: user.__vid,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      accessToken: token
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
