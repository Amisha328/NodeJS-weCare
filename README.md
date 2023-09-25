# weCare Capstone Project on NodeJS

WeCare is an online Life Coaching application that helps its users to sign up and log in to seek the guidance of famous Life Coaches. Users can search for a Life Coach based on specialty and can book an appointment within seven days. They can also see upcoming appointments and can reschedule or cancel the appointments. Similarly, Life Coaches can also sign up, login, and can see their upcoming schedule. 

### **User Registration:**

Register a user to the application as a user for the post request at /users. The JSON sent in the request body is described in the table.

A user ID should be generated and stored in the database when a user registers with the application.

**Validations:**

<> The name should have a minimum of 3 and a maximum of 50 characters.

<> The password should have a minimum of 5 and a maximum of 10 characters.

<> Age should be greater than 20 and less than 100 years.

<> Gender should be a single character: ‘F’ or ‘M’.

<> PhoneNo should have 10 digits.

<> City, State, and Country should have 3 to 20 characters.

<> If the user provides an email ID that is already used, it should not allow the user to register.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/8d2ba025-5037-475c-9f90-6e6c7017f4bf)

### **User Login:**

This service should enable a user to login into the application by using the post request at /users/login. The JSON sent in the request body is described in the table.

On successful login, it will return true.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/620f56e1-8061-4e31-a0e3-53f16ee71fba)

If the user is not registered, then the below response has to be sent:

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/aede4fb7-f0b2-4a99-a7a3-7540544b6ea0)

### **Get User Details:**

Get the user details using the userID for the get request at /users/userID.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/fdfc0db7-e7f5-4f0d-9314-067a737d7599)

### **Coach Registration:**

This service should be able to register a user to the application as a coach for the post request at /coaches. The JSON sent in the request body.

A coach Id should be generated and stored in the database when a coach registers to the application.

Validations:

<> The name should have a minimum of 3 and a maximum of 50 characters.

<> The password should have a minimum of 5 and a maximum of 10 characters.

<> Age should be greater than 20 and less than 100 years.

<> Gender should be a single character: ‘F’ or ‘M’.

<> PhoneNo should have 10 digits.

<> Speciality should have 10 to 50 characters.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/7821c344-c517-4726-9409-241c53b50b80)

### **Coach Login:**

This service should enable the coach to login into the application by using the post request at /coaches/login. The JSON sent in the request body.

On successful login, it will return true. 

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/c955d678-50b9-4771-bd92-db62771dfe15)

### **Get All Coaches:**

This service should be able to get all available coaches for the get request at /coaches/all.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/f997f63d-15fb-4719-9c06-6877fb9790a8)

### **Make an appointment:**

This service should enable the user to make an appointment for the post request at /users/booking/:userId/:coachId

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/3e5254d3-8394-4ba3-81ce-16d6a225745f)

If someone else has a booking on the same slot and date or if the user has another appointment on the same date and slot, then an error should be thrown:

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/5e4440e6-ae65-45d2-8f51-ec8b3d382607)

The date of the appointment should be any of the upcoming 7 days.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/00df652c-f0f2-4ce9-914e-97ac5a6a7140)

### **Reschedule an appointment:**

This service should enable the user to reschedule an existing appointment for the put request at /booking/:bookingId.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/c1e17743-8ef2-4f90-adc9-f56207d463ca)

### **Cancel an appointment:**

This service should enable the user to cancel an existing appointment for the delete request at /booking/:bookingId.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/44400a0d-2352-448b-a5b9-c4dd38d3887a)

### **Get appointments corresponding to the coach:**

This service should enable the coach to get all appointments corresponding to the coachId for the get at /coaches/booking/:coachId.

![image](https://github.com/Amisha328/NodeJS-weCare/assets/58816552/248675b0-42ca-4103-9471-2c04e6d4b2b3)

### **Note:**

Software Requirement:

1) MongoDB
2) Postman
3) Node JS
4) Visual Studio Code


Steps to run a Node JS application in VS Code:

* Open Your Node.js Project.
* Install Dependencies using `npm i`
* Run your Node.js Application using `node app.js`
* Run the MongoDB server using `mongod`
* We are using the Postman application to hit the API endpoints.

