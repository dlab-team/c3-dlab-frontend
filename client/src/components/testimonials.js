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
            <Comment.Text>
              I loved this workshop! It's incredible how in 3 weeks I learned so
              much about HTML, CSS and JavaScript! I now have not only a skill
              that will make me stand out in the market, but also the motivation
              and basic knowldge to deepen my coding skills. I would like to
              thank Matt for the SheCodes Express (that's why I applied!), and
              for the SheCodes team that were true lifesavers when I had doubts!
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  );
};

export default Testimonials;
