/* eslint-disable camelcase */
exports.ValidateName = function (name) {
  if (name.length >= 3 && name.length <= 50) return true;
  return false;
};

exports.ValidatePassword = function (password) {
  if (password.length >= 5 && password.length <= 10) return true;
  return false;
};

exports.ValidateAge = function (dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const diff_ms = Date.now() - birthDate.getTime();
  const age_dt = new Date(diff_ms);
  const age = Math.abs(age_dt.getUTCFullYear() - 1970);
  // console.log('age: ', age);
  if (age > 20 && age < 100) return true;
  return false;
};

exports.ValidateGender = function (gender) {
  if (gender === 'M' || gender === 'F') return true;
  return false;
};

exports.ValidatePhoneNo = function (mobileNumber) {
  if (mobileNumber.length === 10) return true;
  return false;
};

exports.ValidateEmail = function (email) {
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email.match(/^[\w]+@[a-z]+\.(com|in)$/)) return true;
  return false;
};

exports.ValidatePincode = function (pincode) {
  // console.log('Pincode: ', pincode.toString());
  if (pincode.toString().length === 6) return true;
  return false;
};

exports.ValidateAddress = function (address) {
  if (address.length >= 3 && address.length <= 20) return true;
  return false;
};

exports.ValidateSpeciality = function (speciality) {
  if (speciality.length >= 10 && speciality.length <= 50) return true;
  return false;
};

exports.ValidateSlot = function (slot) {
  if (
    slot.match(
      /^(1[012]|[1-9])(\s)?(AM|PM)(\s)?(to)(\s)?(1[012]|[1-9])(\s)?(AM|PM)/
    )
  )
    return true;
  return false;
};

exports.ValidateAppointmentDate = function (date) {
  const currDate = new Date();
  const nextDate = currDate.getDate() + 7;
  if (date.getDate() <= nextDate && date.getDate() > currDate.getDate())
    return true;
  return false;
};
