import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Table, Button, Space, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function Posts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  // I removed the "key" field, which used to be in my tableColumns,
  // because my data has rowKey attribute, not column key :)
  // That smart info came from: https://github.com/ant-design/ant-design/issues/7623
  const tableColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Post',
      dataIndex: 'body',
    },
    {
      title: 'Author',
      dataIndex: 'authorName',
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      
    },
    {
      title: 'Updated',
      dataIndex: 'updatedAt',
    },
    {
      title: 'Actions',
      render: (record) => (
        <>
          <Space size="middle">
            <Button 
              type="link" 
              className="editAndDeleteBtn"
              onClick={() => handleDelete(record._id)}
            >
              <DeleteOutlined style={{ color: "red" }}/>
            </Button>

            <Button 
              type="link" 
              className="editAndDeleteBtn"
              onClick={() => handleUpdate(record)}
            >
              <EditOutlined style={{ color: "blue", fontSize: "17px" }}/>
            </Button>
          </Space>
        </>
      ),
    }
  ];

  // To get rid of "React Hook useEffect has a missing dependency: 'dispatch'" warning...
  // I added one extra comment line - 1 line before the Array
  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(response => {
      return response.json();
    }).then(async (data) => {
      await dispatch(updatePosts(data))
    })
    // eslint-disable-next-line
  }, [])


  const handleUpdate = (record) => {
    console.log(record)
    // TODO: finish this...
  }


  const handleDelete = async (id) => {
    const response = await fetch('http://localhost:8081/api/post/delete/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const returnedData = await response.json()

    if(response.status === 200) {
      dispatch(removePost(returnedData));
      notification.success({
        message: 'Post Deleted!',
        duration: 2,
      })
    } else {
      // console.log(returnedData)
      notification.error({
        message: returnedData,
        duration: 2,
      })
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // For testing purpose only - when the log In wasn't built yet
    // if(state.auth.user === null) {
    //   const newPost = {
    //     title,
    //     body,
    //     authorName: "Guest",
    //   };
    //   addNewPost(newPost)
    // } else {
    //   const newPost = {
    //     title,
    //     body,
    //     authorName: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
    //   };
    //   addNewPost(newPost)
    // }

    const newPost = {
      title,
      body,
      authorName: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
    };

    addNewPost(newPost)
    setTitle("");
    setBody("");

    if (inputRef.current) inputRef.current.focus();
  };

  // Salvestame andmebaasi ja kui on edukas,
  // siis teeme dispatchi ja uuendame state lokaalselt
  const addNewPost = async (post) => {
    const response = await fetch('http://localhost:8081/api/post/create', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const returnedData = await response.json()
    // console.log(response.status)

    if(response.status === 200){
      dispatch(addPost(returnedData));
      notification.success({
        message: 'Post Submitted!',
        duration: 2,
      })
    } else {
      // console.log(returnedData)
      // TODO: change the BE logic to see error messages. Nothing is sent back at the moment
      notification.error({
        message: returnedData,
        duration: 2,
      })
    }
  };

  // It's a great way to console log something. {} makes it an object and therefore shows the object's name
  // console.log({ inputRef });

  return (
    <>
      <h1>Add post</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="Add title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          required
        />
        <br/><br/>

        <input
          // ref={inputRef}
          placeholder="Add text"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br/><br/>
        <Button 
          htmlType="submit" 
          className="submitBtn">Submit
        </Button>
        <br/><br/><br/>
      </form>

      <Table 
        pagination={{ pageSize: 5 }} 
        columns={tableColumns} 
        dataSource={state.posts.data} 
        rowKey='_id' 
        style={{ display: "grid", placeItems: "center" }}
      />
    </>
  );
}

export default Posts;