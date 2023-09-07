import React, { useState } from "react";
const arrayBlogsInit = [
  { name: "Reading book", id: "1" },
  { name: "fixing bugs", id: "2" },
  { name: "developing project", id: "3" },
];
const Blogs = () => {
  const [nameBlog, setNameBlog] = useState("");
  const [arrayBlogs, setArrayBlog] = useState(arrayBlogsInit);
  const handleAddBlog = (e) => {
    e.preventDefault();
    setArrayBlog([
      ...arrayBlogs,
      { name: nameBlog, id: Math.random().toString() },
    ]);
    console.log("check");
  };
  const onChangeInput = (event) => {
    setNameBlog(event.target.value);
  };
  return (
    <div className="blogs">
      <div className="container-blogs">
        <div className="add-blog">
          <form>
            <input
              type="text"
              value={nameBlog}
              onChange={onChangeInput}
              placeholder="moi ban nhap ten blog"
            />
            <button type="submit" onClick={handleAddBlog}>
              Add
            </button>
          </form>
        </div>
        {arrayBlogs.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Blogs;
