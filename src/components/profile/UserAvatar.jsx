import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Header } from "semantic-ui-react";

//avatar y nombre
export default function UserAvatar() {
  const [NameUser, setListUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const BaseURL = "https://thronesapi.com/api/v2/Characters";
      const result = await axios.get(BaseURL);
      console.log(result.data);
      setListUser(result.data);
    };
    getUser();
  }, []);
  //Borrar linea 29 a 35 una vez que data venga de back end
  return (
    <>
      {/* {NameUser.map((usuario, i) => {
        return (
          <Header as="h6" key={i}>
            <Image src={usuario.imageUrl} avatar />
            Hola {usuario.fullName}!
          </Header>
        );
      })} */}
      <Header as="h6">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNmljavKvHbdBoK4xr27-45JKFmjVmpYaGA&usqp=CAU"
          avatar
        />
        Hola Usuario de Testing!
      </Header>
    </>
  );
}
