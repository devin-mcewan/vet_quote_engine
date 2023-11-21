# Vet Quote Engine: A simple quote generator and sales tool.

Welcome to Vet Quote Engine, a full-stack quote generator app that integrates React for the frontend, express for the backend, and Massive to connect to a PostgreSQL database. 
This README will guide you through the setup process. 

---

## Front End

<!-- The user should be routed to this app via an external link on 'veterandetail.com" - (For real world useability) -->
[X] The user should land on the landing page
[X] The user should be prompted to "Get quote now" on the landing page
[X] The user should be able to click on "Get Quote Now" and be routed.
[X] The user should be routed to a Quote Generator Page, showing the first page of a form.
The user should be able to insert their first name, last name, phone number, and email. 
The user should be able to insert their vehicle Year, Make, and Model.
The user should be able to select desired services from a list of services provided by the database
the user's selected services should remove them from the services list, and present them in a 'selected services' list.
The user should be able to navigate to previous page of the form. 
The user should be able to submit this form.
The user should see a brief animation letting them know the quote is being generated. 
The user should see a generated quote, with sum of all service costs, add sales tax, and have a Final Total. 
The user's generated quote should be saved to a database where an admin can view all quotes. 

The admin should be able to select 'admin login'
The admin should be able to login using a username and password stored in the database. 
The admin should be able to see all quotes generated. 
The admin should be able to click on a single quote. 
The admin should be able to see all the information relating to the single quote they selected.
The admin should be able to set status of the quote from 'New' to 'Contacted' and 'Scheduled'
The admin should be able to use a 'delete' button to 'remove' the quote from the database.


---

### Routes
https://localhost:XXXX

"/" - Home
"/quote_generator/" - Page 1 of Form - Contact Information
"/quote_generator/:id" - Page 2 of Form - Vehicle Information
"/login" - Admin Login - Username and Password validation
"/admin" - Admin Home - Displays all Quotes - Requires Auth

## Back End - these get things
### Routes (endpoints)
'/v1/login' - POST
'/v1/quotes' - GET (get all quotes)
'/v1/quotes' - POST
'/v1/quotes/:id' - GET, PUT, DELETE

## Database
Users
- ID
- Username
- Password

Services
- ID
- Name
- Description
- Price

Quote Services
- ID
- service_id
- quote_id

Quotes
- ID
- Tax 
- Total 
- first_name
- last_name
- year
- make
- model
- vin - optional
- phone_number
- email
