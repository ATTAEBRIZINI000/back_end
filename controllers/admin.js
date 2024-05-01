const Admin = require('../models/admin');

// Authenticate admin
exports.authenticateAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.authenticate(email, password);

    if (admin) {
      res.status(200).json({ message: 'Authentication successful', admin });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Authentication error', error });
  }
};
