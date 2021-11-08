import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Table, Button } from 'antd';

function Posts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  const tableColumns = [
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
    },
    {
      key: 'body',
      title: 'Post',
      dataIndex: 'body',
    },
    {
      key: 'authorId',
      title: 'Author',
      dataIndex: 'authorId',
    },
    {
      key: 'createdAt',
      title: 'Created',
      dataIndex: 'createdAt',
    },
    {
      key: 'updatedAt',
      title: 'Updated',
      dataIndex: 'updatedAt',
    },
  ];

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja

  // Test data
  // useEffect(() => {
  //   dispatch(updatePosts([
  //     {
  //       id: 1,
  //       title: "Test-prefetched-array-1"
  //     },
  //     {
  //       id: 2,
  //       title: "Test-prefetched-array-2"
  //     },
  //     {
  //       id: 3,
  //       title: "Test-prefetched-array-3"
  //     },
  //     {
  //       id: 4,
  //       title: "Test-prefetched-array-4"
  //     },
  //   ]))
  // }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(response => {
      return response.json();
    }).then(async (data) => {
      await dispatch(updatePosts(data))
    })
  }, [])

  const handleSubmit = (e) => {
    // Commented e.preventDefault(); out - because new post wasn't on the page
    // I had to refresh the page by hand to finally see the newPost.
    // https://reactjs.org/docs/lists-and-keys.html#keys
    // e.preventDefault();

    // I think the ID, createdAt and updatedAt fields are not neccesary to post,
    // because Mongo DB will do it :)
    // See newPost oli loengu lõpus handleSubmiti
    const newPost = {
      title,
      body,
      // Becacuse I don't have signup and login jet, then user.id is null
      // authorId: state.auth.user.id
      // So next line is just for testing purposes
      // authorId: 2


      // authorId: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
      authorId: "Mari Murakas",
    };

    setTitle("");
    setBody("");

    addNewPost(newPost)

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
    dispatch(addPost(returnedData));
  };

  // console.log({ inputRef });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
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
          ref={inputRef}
          placeholder="Add post text"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br/><br/>
        <Button htmlType="submit" type="primary" ghost="true">Submit</Button>
        <br/><br/><br/>
      </form>

      {/* {state.posts.data.map((e) => (
        <li key={e.id}>
          {e.id} {e.title}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(e.id))}
          >
            &#128540;
          </span>
        </li>
      ))} */}

    <Table pagination={{ pageSize: 8 }} columns={tableColumns} dataSource={state.posts.data} rowKey='_id' />
    </div>
  );
}

export default Posts;