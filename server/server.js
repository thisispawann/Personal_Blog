const express = require("express");
var bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const blogs = [
    {
        id: 1,
        title: "First Blog",
        Summary: "My First Blog",
        author_name: "Joe",
    },
    {
        id: 2,
        title: "Second Blog",
        Summary: "My Second Blog",
        author_name: "Root",
    },
    {
        id: 3,
        title: "Third Blog",
        Summary: "My Third Blog",
        author_name: "Alex",
    },
   
]

app.get("/api/blogs", (req, res) => {
    res.status(200).json(blogs);
});

app.post("/api/postBlogs", (req, res) => {
    // console.log("POST reached");

    // console.log(req.body);
    const blog = req.body;

    blogs.push(blog);
    res.send(`Blogs with title ${blog.title} added to the database...`)
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})