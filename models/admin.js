const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Static method to check if the provided email and password match
adminSchema.statics.authenticate = async function(email, password) {
  const admin = await this.findOne({ email });

  if (admin && await bcrypt.compare(password, admin.password)) {
    return admin;
  }

  return null;
};

// Pre-save hook to hash the password before saving
adminSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
