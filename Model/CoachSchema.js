const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/weCare', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Coaches DB connection successful!'));

const CoachesSchema = new mongoose.Schema({
  CoachId: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  MobileNumber: {
    type: Number,
    required: true,
  },
  Speciality: {
    type: String,
    required: true,
  },
});

// Model

const CoachModel = mongoose.model('coaches', CoachesSchema);

module.exports = CoachModel;
