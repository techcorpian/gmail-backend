import { createApp } from './config/express.js';
import { connectDB } from './config/database.js';
import InboxRoutes from './routes/InboxRoute.js';
import SentRoutes from './routes/SentRoute.js';
import DraftRoutes from './routes/DraftRoute.js';
import AuthRoutes from './routes/auth/AuthRoute.js';
import SnoozeRoutes from './routes/SnoozeRoute.js';
import TrashRoutes from './routes/TrashRoute.js';

const app = createApp();

// Connect to MongoDB
connectDB();

// Define routes
app.use('/inbox', InboxRoutes);
app.use('/sent', SentRoutes);
app.use('/auth', AuthRoutes);
app.use('/draft', DraftRoutes);
app.use('/snooze', SnoozeRoutes);
app.use('/trash', TrashRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
