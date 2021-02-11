# DoctorFinder
Health Shield helps patients connect to doctors belonging to the Health Shield group. The patient can setup his account, and sunsequently login. He is given the ability to select a doctor he wants to connect to.
A doctor can be registerd with details such as his name, address, email, phone. The doctor also has a single distinct speciality that he can choose. 
The application is located at : https://mydoctorfinder.herokuapp.com. The doctors landing page is at: https://mydoctorfinder.herokuapp.com/doctors

## Links
The github repo : https://github.com/PallaviKadwe/DoctorFinder



## Technical Details
* This is a full stack application build using **Node.js, Postgres, Express and EJS**
* It adheres to the **MVC** file structure: Models, Views, Controllers and has 4 models **Doctor, Patient, Speciality, DoctorPatient** 
* The Doctor to the Speciality is a **one to many relationship** wherein the SpecialityId is stored in the Doctor table. The Doctor to Patient is a **many to many** relationship.
* The application includes a Patient **sign up/log in** functionality, with encrypted passwords & an authorization flow

## User Stories
Given below are the user stories that outline the nuances of the DoctorFinder application

#### User Story 1
The landing page gives a short description of Health Shield and how it services patients by helping them connect to doctors in the health shield network. This page contains links titled 'signup' and 'login'. 

#### User Story 2
As a patient, on the landing page, he can navigate via the 'signup' link to set up an account.  

#### User Story 3
As a patient, on the landing page, he can navigate via the 'login' link to to logon to Health Shield if he has an account that has been setup previously.  

#### User Story 4
As a patient, on signup page, he enters details such as First Name, Last Name, Address, Phone, Email, Username and Password

#### User Story 5
Features on Patient Profile Screen:
As a patient, after successful signup, is navigated to his profile screen where he can view:
* Name, Username, Password, Address, Phone, Email. He can edit these details. 
* The doctors from Health Shield are displayed in a dropdown. The patient can select a doctor from this list to connect to. 
* The patient can click on the 'save' button to save his profile details and doctor he selected from the dropdown.
* The list of doctors he is connected to are displayed

#### User Story 6
Deelte and View Doctors on Patient Profile Screen:
On the Patient profile page the user can delete Patient Profile and can also view all doctors on Health Shield.
* He can click on the delete button to delete his profile
* He can click on a link labeled "View All Doctors" to navigate to the doctor listing screen

#### User Story 7
A user can navigate to the doctors landing page by clicking on the link titled "View All Doctors" on the patients details screen. The doctors landing page has the following features:
* List of doctors on Health Shield are displayed. Clicking on the name navigates the user to the doctor's details page
* Each doctor has a delete button adjacent his name
* A link titled "Register a new doctor" is displayed.

#### User Story 8
On the doctor landing page the user can click on hte delete button adjacent to the doctor name to delete the doctor from Health Shield

#### User Story 9
Doctor Details page. As a user, the profile details of the doctor, such as his First Name, Last Name, Address, Phone, Email and Speciality can be edited here. The speciality is displayed in a dropdown and can be changed on this page if desired. Click of hte save button saves htet user's changes and navigates the user back to the doctor landing page.

#### User Story 10
Doctor Registration page.
Clicking on hte link "Register a new doctor" on the doctor landing page navigaets the user to a details page. The user can enter doctor details such as his First Name, Last Name, Address, Phone, Email and Speciality. The speciality is displayed in a dropdown and can be selected here.




