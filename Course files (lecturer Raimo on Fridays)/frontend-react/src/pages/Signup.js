import { Form, Input, Button, notification } from 'antd'
import { useHistory } from 'react-router-dom'

function Signup() {
  // How to redirect in React: https://www.youtube.com/watch?v=tiAlSpyWIDs
  let history = useHistory();
  const [form] = Form.useForm();


  const redirectToHomePage= () => {
    history.push("/");
  }

  const handleSignUp = (e) => {
    // It seems that this preventDefault is not required :)
    // e.preventDefault();

    const newUser = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: e.password
    };

    if(e.password === e.confirmPassword) {
      addNewUser(newUser)
    } else {
      notification.error({
        message: 'Passwords do not match!',
        duration: 2,
      })
    }
    
  }

  const addNewUser = async (user) => {
    const response = await fetch('http://localhost:8081/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(response.status === 200) {
      notification.success({
        message: 'User Created. You may Log In now :)'
      })

      form.resetFields()
      redirectToHomePage();

    } else {
      notification.error({
        message: 'Something went wrong!',
        duration: 2,
      })
    }
  }


  return (
    <>
      <h1>Sign Up</h1>
      <Form 
        form={form}
        onFinish={handleSignUp}
        autoComplete='false'
        style={{ display: "grid", placeItems: "center"}}
      >
        <Form.Item 
          name='firstName'
          rules={[
            {
              required: true,
              message: 'Please enter your first name!'
            }
          ]}
        >
          <Input placeholder="First Name" onFocus/>
        </Form.Item>
        <Form.Item 
          name='lastName' 
          rules={[
            {
              required: true,
              message: 'Please enter your last name!'
            }
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item 
          name='email' 
          rules={[
            {
              required: true,
              message: 'Please enter your email!'
            }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item 
          name='password' 
          rules={[
            {
              required: true,
              message: 'Please enter your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item 
          name='confirmPassword' 
          rules={[
            {
              required: true,
              message: 'Please enter your password again!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button 
          htmlType="submit" 
          className="submitBtn">Sign Up
        </Button>
      </Form>
    </>
  )
}

export default Signup