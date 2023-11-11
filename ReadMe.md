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











