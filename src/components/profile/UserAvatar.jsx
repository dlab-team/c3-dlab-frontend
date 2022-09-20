import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Header } from "semantic-ui-react";

//avatar y nombre
export default function UserAvatar({ userData }) {
  // const [NameUser, setListUser] = useState([]);
  //
  // useEffect(() => {
  //   const getUser = async () => {
  //     const BaseURL = "http://jsonplaceholder.typicode.com/users/5";
  //     const result = await axios.get(BaseURL);
  //     console.log(result.data);
  //     setListUser(result.data);
  //   };
  //   getUser();
  // }, []);
  return (
    <>
      <Header as="h6">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNmljavKvHbdBoK4xr27-45JKFmjVmpYaGA&usqp=CAU"
          avatar
        />
        Hola { userData.email }
      </Header>
    </>
  );
}
