import React from "react";
import { Image, Header } from "semantic-ui-react";

//avatar y nombre
export default function UserAvatar({ userData }) {//Borrar linea 29 a 35 una vez que data venga de back end
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
