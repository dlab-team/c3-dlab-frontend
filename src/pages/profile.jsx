import React, { Fragment } from "react";
import Target from "../components/componentsProfile/Target";
import {
  faBlockQuote,
  faHandsHolding,
  faLayerGroup,
  faPersonChalkboard,
  faBook,
  faHive,
} from "@fortawesome/free-solid-svg-icons";
import Name from "../components/componentsProfile/Name";
import { Card } from "semantic-ui-react";

export function Profile() {
  return (
    <Fragment>
      <Name></Name>
      <Card.Group itemsPerRow={3}>
        <Target
          icon={faHandsHolding}
          titulo="Estado"
          activo={true}
          response="JobReady"
        ></Target>
        <Target icon={faLayerGroup} titulo="Stack" response="Front"></Target>
        <Target icon={faBook} titulo="Test Rendidos" response="5"></Target>
        <Target
          icon={faPersonChalkboard}
          titulo="Show the Code"
          response="3"
        ></Target>
        {/* <Target icon={faHive} titulo="blog" response="dashboard"></Target>
        <Target icon={faBlockQuote}titulo="ver mi Perfil completo"></Target> */}
      </Card.Group>
    </Fragment>
  );
}

export default Profile;
