# Vet Quote Engine: A simple quote generator and sales tool.

Welcome to Vet Quote Engine, a full-stack quote generator app that integrates React for the frontend, express for the backend, and Massive to connect to a PostgreSQL database. 
This README will guide you through the setup process. 

---

The user should be routed to this app via an external link on 'veterandetail.com" - (For real world useability)
The user should land on the landing page
The user should be prompted to "Get quote now" on the landing page
The user should be routed to a Quote Generator Page, showing the first page of a form.
The user should be able to insert their first name, last name, phone number, and email. 
The user should be able to navigate to the next page of the form
The user should be able to insert their vehicle Year, Make, and Model.
The user should be able to navigate to the next and previous page of the form
The user should be able to select desired services from a list of services provided by the database
the user's selected services should remove them from the services list, and present them in a 'selected services' list.
The user should be able to navigate to previous page of the form. 
The user should be able to submit this form.
The users information from all pages should be saved to state/context.
the user should see a brief animation letting them know the quote is being generated. 
The user should see a generated quote, with sum of all service costs, add sales tax, and have a Final Total. 
The user's generated quote should be saved to a database where an admin can view all quotes. 

The admin should be able to select 'admin login'
The admin should be able to login using a username and password stored in the database. 
The admin should be able to see all quotes generated. 
The admin should be able to click on a single quote. 
The admin should be able to see all the information relating to the single quote they selected.


---

## Routes
https://localhost:XXXX

"/" - Home
"/quote_generator/:PAGE1" - Page 1 of Form - Contact Information
"/quote_generator/:PAGE2" - Page 2 of Form - Vehicle Information
"/quote_generator/:PAGE3" - Page 3 of Form - Selecting/Selected Services
"/quote_generator/SUBMIT" - Submit Form 
"/admin_login" - Admin Login - Username and Password validation
"/admin" - Admin Home - Displays all Quotes - Requires Auth

