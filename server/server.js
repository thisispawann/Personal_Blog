
const express = require("express");
var bodyParser = require('body-parser');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let blogs = [
    {
        "title": "Java Spring Boot",
        "Summary": "As we know, Spring is widely used for creating scalable applications. For web applications Spring provides Spring MVC which is a widely used module of spring which is used to create scalable web applications.",
        "author_name": "Pawan",
        "id": "1234"
    }
];

// GET
app.get("/api/blogs", (req, res) => {
    res.status(200).json(blogs);
});

// POST
app.post("/api/postBlogs", (req, res) => {
    // console.log("POST reached");
    // console.log(req.body);
    const blog = req.body;

    blogs.push({ ...blog, id: uuidv4() });
    // res.send(`Blogs with title ${blog.title} added to the database...`)
    res.send("Blog added successfully!");
});

app.get('/api/blogs/:id', (req, res) => { // accepts anything after the : [colon] and this route will hit
    // console.log(req.params);
    const { id } = req.params;

    const foundBlog = blogs.find((blog) => blog.id === id);
    res.send(foundBlog);
})

// DELETE
app.delete('/api/blogs/:id', (req, res) => {
    const { id } = req.params;

    blogs = blogs.filter((blog) => blog.id !== id);

    // res.send(`Blog with id ${id} deleted from the database.`)
    res.send("Blog deleted successfully!");
});

// PATCH
app.patch('/api/update-blogs/:id', (req, res) =>{
    const { id } = req.params;
    const { title, Summary, author_name } = req.body;

    const blog = blogs.find((blog) => blog.id === id);

    if(title) blog.title = title;
    if(Summary) blog.Summary = Summary;
    if(author_name) blog.author_name = author_name;

    res.send(`Blog with id ${id} has been updated.`);
})


app.listen(8080, () => {
    console.log("Server started on port 8080")
})