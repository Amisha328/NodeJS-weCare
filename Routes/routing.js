const express = require('express');

const routing = express.Router();
const tracker = require('../Controller/tracker');

routing.post('/users', tracker.addUser);

routing.post('/users/login', tracker.loginUser);

routing.post('/coaches', tracker.addCoachDetails);

routing.post('/coaches/login', tracker.coachLogin);

routing.get('/coaches/all', tracker.getAllCoaches);

routing.get('/coaches/:coachId', tracker.getCoachDetails);

routing.get('/users/:userId', tracker.getUserDetails);

routing.post('/users/booking/:userId/:coachId', tracker.makeAppointment);

routing.put('/booking/:bookingId', tracker.rescheduleAppointment);

routing.delete('/booking/:bookingId', tracker.cancelAppointment);

routing.get('/coaches/booking/:coachId', tracker.getCoachAppointment);

routing.get('/users/booking/:userId', tracker.getUserAppointment);

routing.all('*', tracker.invalid);

module.exports = routing;
