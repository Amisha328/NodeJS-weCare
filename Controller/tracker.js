const UserModel = require('../Model/UserSchema');
const CoachModel = require('../Model/CoachSchema');
const BookingModel = require('../Model/BookingSchema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.addUser = async (req, res) => {
  try {
    if (
      validator.ValidateName(req.body.Name) &&
      validator.ValidatePassword(req.body.Password) &&
      validator.ValidateEmail(req.body.Email) &&
      validator.ValidateAge(req.body.DateOfBirth) &&
      validator.ValidateGender(req.body.Gender) &&
      validator.ValidatePhoneNo(req.body.MobileNumber) &&
      validator.ValidateAddress(req.body.City) &&
      validator.ValidateAddress(req.body.State) &&
      validator.ValidateAddress(req.body.Country) &&
      validator.ValidatePincode(req.body.PinCode)
    ) {
      // console.log('Data Validated');
      const Id = await helper.generateUserId();
      const email = await UserModel.findOne({ Email: req.body.Email });
      if (email) {
        res.status(401).json({
          message: 'User exists with this email id',
        });
      }
      const user = await UserModel.create({
        UserId: Id,
        Name: req.body.Name,
        Password: req.body.Password,
        Gender: req.body.Gender,
        DateOfBirth: req.body.DateOfBirth,
        Email: req.body.Email,
        MobileNumber: req.body.MobileNumber,
        PinCode: req.body.PinCode,
        City: req.body.City,
        State: req.body.State,
        Country: req.body.Country,
      });
      res.status(201).json({
        message: Id,
      });
    } else if (!validator.ValidateName(req.body.Name)) {
      res.status(400).json({
        message: 'Name should have minimum 3 and maximum 50 characters',
      });
    } else if (!validator.ValidatePassword(req.body.Password)) {
      res.status(400).json({
        message: 'Password should have minimum 5 and maximum 10 characters',
      });
    } else if (!validator.ValidateAge(req.body.DateOfBirth)) {
      res.status(400).json({
        message: 'Age should be greater than 20 and less than 100',
      });
    } else if (!validator.ValidateGender(req.body.Gender)) {
      res.status(400).json({
        message: 'Gender should be either M or F',
      });
    } else if (!validator.ValidatePhoneNo(req.body.MobileNumber)) {
      res.status(400).json({
        message: 'Mobile Number should have 10 digit',
      });
    } else if (!validator.ValidatePincode(req.body.PinCode)) {
      res.status(400).json({
        message: 'Pincode should have 6 digits',
      });
    } else if (!validator.ValidateEmail(req.body.Email)) {
      res.status(400).json({
        message: 'Email should be a valid one',
      });
    } else if (!validator.ValidateAddress(req.body.City)) {
      res.status(400).json({
        message: 'City should have minimum 3 and maximum 20 characters',
      });
    } else if (!validator.ValidateAddress(req.body.State)) {
      res.status(400).json({
        message: 'State should have minimum 3 and maximum 20 characters',
      });
    } else if (!validator.ValidateAddress(req.body.Country)) {
      res.status(400).json({
        message: 'Country should have minimum 3 and maximum 20 characters',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      message: err,
    });
  }
};
// Coach Registration:
exports.addCoachDetails = async (req, res) => {
  try {
    if (
      validator.ValidateName(req.body.Name) &&
      validator.ValidatePassword(req.body.Password) &&
      validator.ValidateGender(req.body.Gender) &&
      validator.ValidateAge(req.body.DateOfBirth) &&
      validator.ValidatePhoneNo(req.body.MobileNumber) &&
      validator.ValidateSpeciality(req.body.Speciality)
    ) {
      // console.log('Data Validated');
      const Id = await helper.generateCoachId();
      const name = await CoachModel.findOne({ Name: req.body.Name });
      if (name) {
        res.status(401).json({
          message: 'Coach exists with this name',
        });
      }
      const coach = await CoachModel.create({
        CoachId: Id,
        Name: req.body.Name,
        Password: req.body.Password,
        Gender: req.body.Gender,
        DateOfBirth: req.body.DateOfBirth,
        MobileNumber: req.body.MobileNumber,
        Speciality: req.body.Speciality,
      });
      res.status(201).json({
        message: Id,
      });
    } else if (!validator.ValidateName(req.body.Name)) {
      res.status(400).json({
        message: 'Name should have minimum 3 and maximum 50 characters',
      });
    } else if (!validator.ValidatePassword(req.body.Password)) {
      res.status(400).json({
        message: 'Password should have minimum 5 and maximum 10 characters',
      });
    } else if (!validator.ValidateAge(req.body.DateOfBirth)) {
      res.status(401).json({
        message: 'Age should be greater than 20 and less than 100',
      });
    } else if (!validator.ValidateGender(req.body.Gender)) {
      res.status(401).json({
        message: 'Gender should be either M or F',
      });
    } else if (!validator.ValidateSpeciality(req.body.Speciality)) {
      res.status(401).json({
        message: 'Speciality should have 10 to 50 characters',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      message: err,
    });
  }
};
// Get Coach Details
exports.getCoachDetails = async (req, res) => {
  try {
    const coach = await CoachModel.find(
      { CoachId: req.params.coachId },
      { _id: 0, __v: 0 }
    );
    if (coach.length > 0) {
      res.status(201).json({
        coach,
      });
    } else {
      res.status(400).json({
        message: 'Coach Id does not exist',
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
// Get User Details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await UserModel.find(
      { UserId: req.params.userId },
      { __v: 0 }
    );
    if (user.length > 0) {
      res.status(201).json({
        user,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
// Make Appointment
exports.makeAppointment = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-destructuring
    const userId = req.params.userId;
    // eslint-disable-next-line prefer-destructuring
    const coachId = req.params.coachId;
    const user = await UserModel.findOne({ UserId: userId });
    const coach = await CoachModel.findOne({ CoachId: coachId });
    const date = new Date(req.body.AppointmentDate);
    const slot = await BookingModel.findOne({
      Slot: req.body.Slot,
      AppointmentDate: date,
    });
    // console.log(slot);
    if (
      user &&
      coach &&
      !slot &&
      validator.ValidateSlot(req.body.Slot) &&
      validator.ValidateAppointmentDate(date)
    ) {
      const Id = await helper.generateBookingId();
      const appointment = await BookingModel.create({
        BookingId: Id,
        UserId: req.params.userId,
        CoachId: req.params.coachId,
        AppointmentDate: req.body.AppointmentDate,
        Slot: req.body.Slot,
      });
      res.status(201);
      res.send(true);
    } else if (!user) {
      res.status(400).json({
        results: 'User Id does not exist',
      });
    } else if (!coach) {
      res.status(400).json({
        message: 'Coach Id does not exist',
      });
    } else if (slot) {
      res.status(400).json({
        message: 'There is an appointment in this slot already',
      });
    } else if (!validator.ValidateSlot(req.body.Slot)) {
      res.status(400).json({
        message: 'Slot should be a valid one',
      });
    } else if (!validator.ValidateAppointmentDate(date)) {
      res.status(400).json({
        message: 'Date should be any upcoming 7 days',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      message: err,
    });
  }
};
// User Login
exports.loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne(
      { UserId: req.body.userId },
      { _id: 0, Password: 1 }
    );
    // console.log(user);
    // console.log(user.Password);
    const { password } = req.body;
    if (user && password === user.Password) {
      res.status(200);
      res.send(true);
    } else if (!user || password !== user.Password) {
      res.status(400).json({
        message: 'Incorrect user id or password',
      });
    }
  } catch (err) {
    // console.log(err.message);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
// Coach Login
exports.coachLogin = async (req, res) => {
  try {
    const coach = await CoachModel.findOne(
      { CoachId: req.body.coachId },
      { _id: 0, Password: 1 }
    );
    // console.log(coach);
    // console.log(coach.Password);
    const { password } = req.body;
    if (coach && password === coach.Password) {
      res.status(200);
      res.send(true);
    } else if (!coach || password !== coach.Password) {
      res.status(400).json({
        message: 'Incorrect coach id or password',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      message: err,
    });
  }
};
// Get All Coaches
exports.getAllCoaches = async (req, res) => {
  try {
    const coach = await CoachModel.find({}, { _id: 0, __v: 0 });
    if (coach.length > 0) {
      res.status(200);
      res.send(coach);
    } else {
      res.status(400).json({
        message: 'No coaches available',
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
// Reschedule an appointment
exports.rescheduleAppointment = async (req, res) => {
  try {
    const booking = await BookingModel.findOneAndUpdate(
      { BookingId: req.params.bookingId },
      req.body,
      {
        new: true, // to return new doc back
        runValidators: true, //to run the validators which specified in the model
      }
    );
    if (booking != null) {
      res.status(200);
      res.send(true);
    } else {
      res.status(400).json({
        message: 'Booking Id does not exist',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
// Cancel an Appointment
exports.cancelAppointment = async (req, res, err) => {
  const delAppointment = await BookingModel.deleteOne({
    BookingId: req.params.bookingId,
  });
  if (delAppointment.deletedCount === 0) {
    res.status(400).json({
      message: 'Could not delete this appointment',
    });
  } else {
    res.status(200);
    res.send(true);
  }
};
// Get appointments corresponding to coach
exports.getCoachAppointment = async (req, res) => {
  try {
    const coach = await BookingModel.find(
      { CoachId: req.params.coachId },
      { _id: 0, __v: 0 }
    );
    if (coach.length > 0) {
      res.status(200);
      res.send(coach);
    } else {
      res.status(400).json({
        message: 'Could not find any bookings',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
//  Get appointments made by a user
exports.getUserAppointment = async (req, res) => {
  try {
    const user = await BookingModel.find(
      { UserId: req.params.userId },
      { _id: 0, __v: 0 }
    );
    if (user.length > 0) {
      res.status(200);
      res.send(user);
    } else {
      res.status(400).json({
        message: 'Could not find any appointment details',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
// Default
exports.invalid = async (req, res) => {
  res.status(404).json({
    message: 'Invalid path',
  });
};
