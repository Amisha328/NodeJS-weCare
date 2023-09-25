const repo1 = require('../Model/UserSchema');
const repo2 = require('../Model/CoachSchema');
const repo3 = require('../Model/BookingSchema');

exports.generateUserId = async () => {
  const user = await repo1.find({});
  const Id = 1001 + user.length;
  return `UI-${Id}`;
};

exports.generateCoachId = async () => {
  const coach = await repo2.find({});
  const Id = 1001 + coach.length;
  return `CI-${Id}`;
};

exports.generateBookingId = async () => {
  const appointment = await repo3.find({});
  const Id = 1001 + appointment.length;
  return `AI-${Id}`;
};
