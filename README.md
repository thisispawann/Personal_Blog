# Personal Blog API Documentation:

The Node, Express and React JS blog application provides backend and frontend for blogging API and User Interface respectively. This documentation emphasizes the guidance of available endpoints and their functionalities that serves as a backend for blogging API.
Prerequisites:
Before using the API, ensure that we have the following dependencies installed:
-	Node.js
-	Express.js
-	‘cors’ package
-	‘body-parser’ package
-	‘uuidv4’ package

Installation:
1.	Install the required dependencies by running the following command:

       npm install express body-parser cors uuid

2.	Create a file named ‘server.js’ and put all the code into it.
3.	Run the server using the following command: cd server then

       npm run dev
      
      Or
      
       node server.js

The server will start listening on port 8080.
Endpoints:
The API provides the following endpoints to manage blog posts with http:localhost:8080/

GET:  ‘/api/blogs’
Retrieves all the blog posts stored in the blogs array.

-	Method: GET
-	Path: ‘/api/blogs’
-	Response: An array of blogs posts in JSON format
-	Status Codes:
•	200: Successful operation


POST ‘/api/postBlogs’
Adds a new blog post to the blogs array.
-	Method: POST
-	Path: ‘/api/postBlogs’
-	Request Body: A JSON object representing the blog post with the following properties:
•	title [string]: The title of the blog post
•	Summary [string]: The summary of the blog post
•	author_name [string]:: The name of the author
-	Response: A success message.
-	Status Codes:
•	200: Successful operation



GET ‘/api/blogs/:id’
Retrieves a specific blog post by its ID.
-	Method: GET
-	Path: ‘/api/blogs/:id’
-	Request Parameter:
•	‘id’ : The ID of the blog post to retrieve
-	Response: The blog post matching the provided ID in JSON format
-	Status Codes:
•	200: Successful operation
Example URL: ‘/api/blogs/68344d88-7e36-4255-87c5-959a98b9bb7f

 
DELETE ‘/api/blogs/:id’
Deletes a specific blog post by its ID.
-	Method: DELETE
-	Path: ‘/api/blogs/:id’
-	Request Parameter:
•	id: The ID of the blog post to delete
-	Response: A success message
-	Status Codes:
•	200: Successful operation
Example URL: ‘/api/blogs/247ea6c3-2264-4728-a7f3-c782a4c9cfec’
 


PATCH ‘/api/update-blogs/:id’
Updates a specific blog post by its ID with new values for the title, summary and author name.
-	Method: PATCH
-	Path ‘/api/update-blogs/:id’
-	Request Parameters:
•	id: The ID of the blog post to update
-	Request Body: A JSON object representing the updated values for the blog post with the following properties:
•	title: [Optional] The new title of the blog post
•	Summary: [Optional] The new summary of the blog post
•	author_name: [Optional] The new author name of the blog post
-	Response: A success message
-	Status Codes:
•	200: Successful operation

Example URL: ‘/api/update-blogs/:id’
 
 
Overall, the server application implements a simple API for managing blog posts. It exposes several endpoints for creating, retrieving, updating and deleting blog posts. The server listens on port 8080 and serves CRUD functionality for handling blog posts.

