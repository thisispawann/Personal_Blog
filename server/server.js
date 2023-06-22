
const express = require("express");
var bodyParser = require('body-parser');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const blogs = [];

app.get("/api/blogs", (req, res) => {
    res.status(200).json(blogs);
});

app.post("/api/postBlogs", (req, res) => {
    // console.log("POST reached");

    // console.log(req.body);
    const blog = req.body;

    blogs.push({ ...blog, id: uuidv4() });
    res.send(`Blogs with title ${blog.title} added to the database...`)
});

app.get('/api/blogs/:id', (req, res) => { // accepts anything after the : [colon] and this route will hit
    // console.log(req.params);
    const { id } = req.params;

    const foundBlog = blogs.find((blog) => blog.id === id);
    res.send(foundBlog);
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})