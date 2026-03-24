// controllers/userController.js
import User from '../models/User.js';

// Fetch logged-in user's profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// // Get all users (admin only)
// export const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}, '-password');
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch users' });
//   }
// };
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // exclude password
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// Assign seller role (admin only)
export const assignSeller = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.role = 'seller';
    await user.save();

    res.status(200).json({ message: 'User assigned as seller successfully', user });
  } catch (error) {
    console.error('Error assigning seller:', error);
    res.status(500).json({ message: 'Error assigning seller' });
  }
};


// // Add this to controllers/userController.js
// export const updateUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.name = req.body.name || user.name;
//     user.phone = req.body.phone || user.phone;

//     // Handle file uploads
//     if (req.files?.profilePhoto) user.profilePhoto = `/uploads/${req.files.profilePhoto[0].filename}`;
//     if (req.files?.aadharCard) user.aadharCard = `/uploads/${req.files.aadharCard[0].filename}`;
//     if (req.files?.panCard) user.panCard = `/uploads/${req.files.panCard[0].filename}`;

//     await user.save();
//     res.status(200).json({ message: "Profile updated", user });

//   } catch (err) {
//     console.error("Update error:", err);
//     res.status(500).json({ message: "Error updating profile" });
//   }
// };




export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update basic fields
    user.name = req.body.name || user.name;
    user.phone = req.body.phone || user.phone;

    // Upload files if they exist
    if (req.files?.profilePhoto) {
      user.profilePhoto = `/uploads/${req.files.profilePhoto[0].filename}`;
    }
    if (req.files?.aadharCard) {
      user.aadharCard = `/uploads/${req.files.aadharCard[0].filename}`;
    }
    if (req.files?.panCard) {
      user.panCard = `/uploads/${req.files.panCard[0].filename}`;
    }

    await user.save();
    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ message: 'Server error while updating profile' });
  }
};




import Subscription from '../models/Subscription.js';

// Controller to get subscriptions for the logged-in user
export const getUserSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(subscriptions);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: "Failed to fetch subscriptions" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    res.status(200).json([]); // Currently no Order model, returning empty list
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
