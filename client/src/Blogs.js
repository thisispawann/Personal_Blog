class Blogs {
    api() {
        return fetch("http://localhost:8080/api/blogs")
        .then(res => {
            return res.json();
        })
    }
}

export default Blogs;