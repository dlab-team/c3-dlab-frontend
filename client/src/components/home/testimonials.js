import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const Testimonials = () => {
  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Text>testimonial</Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  );
};

export default Testimonials;
