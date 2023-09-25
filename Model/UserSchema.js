const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/weCare', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('User DB connection successful!'));

//Schema
const Schema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      unique: true,
      required: true,
    },
    Name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    Password: {
      type: String,
      required: true,
    },
    DateOfBirth: {
      type: Date,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    PinCode: {
      type: Number,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

//Model
// repo is collections object
// user is collection
const repo = mongoose.model('user', Schema);

module.exports = repo;
