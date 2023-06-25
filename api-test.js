import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { v4 as uuidv4 } from "uuid";
import App from "./App";

describe("API Testing", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should fetch and render all blog posts", async () => {
    const mockBlogs = [
      { id: uuidv4(), title: "Java", content: "Java is a high-level programming language" }, // mocking the data
      { id: uuidv4(), title: "Blog 2", content: "Content 2" }, // mocking the data
    ];

    mock.onGet("/api/blogs").reply(200, mockBlogs);

    render(<App />);

    const blogs = await screen.findAllByTestId("blog");

    expect(blogs).toHaveLength(2);
  });

  it("should add a new blog post", async () => {
    const mockBlog = {
      title: "New Blog",
      content: "New Content",
    };

    mock.onPost("/api/postBlogs").reply(200);

    render(<App />);

    userEvent.type(screen.getByLabelText("Title"), mockBlog.title);
    userEvent.type(screen.getByLabelText("Content"), mockBlog.content);

    userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(await screen.findByText("Blog added successfully!")).toBeInTheDocument();
  });

  it("should delete a blog post", async () => {
    const mockBlogId = uuidv4();

    mock.onDelete(`/api/blogs/${mockBlogId}`).reply(200);

    render(<App />);

    userEvent.click(screen.getByRole("button", { name: "Delete" }));

    expect(await screen.findByText("Blog deleted successfully!")).toBeInTheDocument();
  });

  it("should update a blog post", async () => {
    const mockBlogId = uuidv4();
    const mockUpdatedBlog = {
      title: "Updated Blog",
      content: "Updated Content",
    };

    mock.onPatch(`/api/update-blogs/${mockBlogId}`).reply(200);

    render(<App />);

    userEvent.click(screen.getByRole("button", { name: "Edit" }));
    userEvent.type(screen.getByLabelText("Title"), mockUpdatedBlog.title);
    userEvent.type(screen.getByLabelText("Content"), mockUpdatedBlog.content);

    userEvent.click(screen.getByRole("button", { name: "Update" }));

    expect(await screen.findByText(`Blog with id ${mockBlogId} has been updated.`)).toBeInTheDocument();
  });
});