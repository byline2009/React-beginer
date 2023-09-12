import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import ConfirmAlert from "../../components/ConfirmAlert";

const arrayBlogsInit = [
  { name: "Reading book", id: "1" },
  { name: "fixing bugs", id: "2" },
  { name: "developing project", id: "3" },
];
const Blogs = () => {
  const [nameBlog, setNameBlog] = useState("");
  const [arrayBlogs, setArrayBlog] = useState(arrayBlogsInit);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [nameButton, setNameButton] = useState("Add");
  const [deleteId, setDeleteId] = useState(-1);
  const [show, setShow] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");

  useEffect(() => {
    if (indexEdit !== -1) {
      console.log("check", arrayBlogs[indexEdit]);
      setNameBlog(arrayBlogs[indexEdit].name);
      setNameButton("Edit");
    }
  }, [indexEdit]);

  const handleDelete = () => {
    if (deleteId !== -1) {
      console.log("deleteId", deleteId);
      const arrayBlogsCopy = arrayBlogs.filter((item) => item.id !== deleteId);
      console.log("arrayBlogsCopy", arrayBlogsCopy);
      setArrayBlog(arrayBlogsCopy);
      toast(` Bạn đã xoá thành công  `);
    }
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    setArrayBlog([...arrayBlogs, { name: nameBlog, id: new Date().getTime() }]);
  };
  const onChangeInput = (event) => {
    setNameBlog(event.target.value);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const arrayBlogsCopy = Object.assign(arrayBlogs);
    arrayBlogsCopy[indexEdit].name = nameBlog;
    setArrayBlog(arrayBlogsCopy);
    setNameButton("Add");
    setNameBlog("");
    setIndexEdit(-1);
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
            <button
              type="submit"
              onClick={(e) => {
                nameButton == "Add" ? handleAddBlog(e) : handleEdit(e);
              }}
            >
              {nameButton}
            </button>
          </form>
        </div>
        {/* {arrayBlogs.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })} */}
        <Table className="blog-table">
          <thead>
            <tr className="header-table">
              <th>id</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
            </tr> */}
            {arrayBlogs.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <th>{item.name}</th>

                  <th>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        console.log("check", index);
                        setIndexEdit(index);
                      }}
                    >
                      Edit
                    </Button>
                  </th>
                  <th>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        setDeleteTitle(item.name);
                        setShow(true);
                        setDeleteId(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <ToastContainer />
      <ConfirmAlert
        show={show}
        setShow={setShow}
        handleDelete={handleDelete}
        deleteTitle={deleteTitle}
      />
    </div>
  );
};

export default Blogs;
