const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/weCare', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Booking DB connection successful!'));

const BookingSchema = new mongoose.Schema(
  {
    BookingId: {
      type: String,
      required: true,
    },
    UserId: {
      type: String,
      required: true,
    },
    CoachId: {
      type: String,
      required: true,
    },
    AppointmentDate: {
      type: Date,
      required: true,
    },
    Slot: {
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

// Model

const BookingModel = mongoose.model('booking', BookingSchema);

module.exports = BookingModel;
