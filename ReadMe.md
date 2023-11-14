# Vet Quote Engine: A simple quote generator and sales tool.

Welcome to Vet Quote Engine, a full-stack quote generator app that integrates React for the frontend, express for the backend, and Massive to connect to a PostgreSQL database. 
This README will guide you through the setup process. 

---

## Running the app

`cd api`
`npm i`
`npm start` -- script will run "nodemon index.js"

new terminal

`cd vet_quote_engine`
`npm i`
`npm start`

---

## Part 1 - Setup

### 1. Database (DB) Setup

- **Connection String:** 

- **Tables:** Here are the tables to be set up:
  - `services` table:
    - Fields: `id`, `name`, `description`, `price`
  - `users` table:
    - Fields: `id`, `username`, `email`
  <!-- - `workout` table:
    - Fields: `id`, `user_id`, `name`
  - `workout_exercises` table:
    - Fields: `workout_id`, `exercise_id`
  - `workout_history` table:
    - Fields: `workout_id`, `user_id`, `start_date`, `end_date` -->

### 2. Backend Setup

- **Folder Structure:**
  - Create a main project folder.
  - Inside this folder, set up a directory for the Express API app.

- **Express App:**
  - Set up the Express app.
  - Connect to the database using Massive.
  <!-- - Create endpoints to fetch `user`, `workout`, and `workout_history`. Ensure that fetching `workout` also retrieves its exercises. -->

### 3. Frontend Setup

- **Folder Structure:**
  - Inside the main project folder (at the same level as the Express API directory), create a new React directory using the command: `npx create-react-app`.

- **State Management:**
  - Set up an App-level context provider.
  <!-- - Within this provider, establish a `user` state. -->

- **Routing and Pages:**
  <!-- - In `app.js`, if there's no user in the provider, display the login page. Otherwise, display the app's main router.
  - Create a login page:
    - This page will take a user's email.
    - Using this email, retrieve the corresponding user.
  - With the user loaded, utilize a `useEffect` in the provider to fetch the user's workouts. -->
  - Create a page to display all the workouts:
    - Each workout should be clickable, leading to a pop-up page.
    - This pop-up page will display all the exercises associated with the clicked workout.
  - Finally, add a 'History' tab/page that shows the user's workout history.


<!-- PREVIOUS WRITE UP -->
Create - 
Customer creates a new user
Customer creates a proposal

Read - 
Quotes are fetched to user's home after they have been created
All quotes created are fetched to the admin's account

Update - 
Admin can update the status of the quote from "New" to "Contacted" to "Scheduled"

Delete - 
Users can use "Delete" button to delete proposal from the proposal table, and remove the information from other tables (kill all orphans)
Admin can ^


Routes
Landing 
 - Sign up
 - Login

Sign up
- Checks to see if Email exists
- Creates new user if Email does not already exist
Login
- Validates username and password
 - Login Persists throughout site

Logged In User Home
- "My Vehicles"
- "My Quotes"

My Garage 
- Vehicle Cards
  - "Generate Quote"
  - "Quotes for this Vehicle"
  - "Delete this Vehicle"
  - "Edit This Vehicle" 

Logged in Admin Home
- 

Quote Generator
 Form
 - Page 1 - Contact Info 
  -First Name
  - Last Name
  - Phone Number
  - Email
 - Page 2 - Vehicle Info
  - Select from "My Vehicles"
 - Page 3 - Services
  - Selected Services
  - 3 Sections
  - Interior
   - With interior addons
  - Exterior
   - With Exterior addons
  - Ceramic Coatings
   - With * Addons
 - Submit
  - selected services
  - tax
  - Sum of Total 

Specific Proposal
proposal_id
user_id
status

Back End Routes
POST api/

Front End
User should be able to select Sign Up or Login
User should be able to sign up as a new user
User shouldnt be able to create duplicate users under the same email. 
User should be able to login if they have an account
User should have login persist after refresh

User should be able to create a vehicle in their garage
User should be able to create a quote 
User should be able to select one of their cars in the quote
User should be able to select their desired services. 
User should be able to see the final total after tax 
User should be able to save the quote to their account
User should be able to Cancel a quote after it has been created


Database: 

Users
Primary Key
Username
Password

Vehicles
Primary Key INT
user_id INT
data {filtered(res.data)} OBJ

Quotes
Primary Key INT
user_id
vehicle_id
service_id
service_price


Services
Primary Key
Name
Price
Category (interior, washing, polishing, Ceramic Coating, Tint, PPF)
is_addon T/F
img_url











