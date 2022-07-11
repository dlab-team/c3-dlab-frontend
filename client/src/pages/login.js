import React from "react";
import {Container, Form, Button} from "semantic-ui-react";
import {useFormik} from "formik";
import '../Pages/Login.css'


function login() {

    const formik = useFormik({
        initialValues: {    // initial values for the form
            email: "",
            password: ""
        },
        onSubmit: (forminfo) => {
            console.log(forminfo);
        }
    });



  return (
    <Container className ="Container.Login">
      <Form className="Form.Login" onSubmit={formik.handleSubmit} >
        <Form.Input type="email" className="Form.Input.Email" name="email" onChange={formik.handleChange}  >
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Input>
        <Form.Input type="Password" className="Form.Input.Password" name="password" onChange={formik.handleChange} >
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Input>
        <Button className="Button.Login"  type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default login;