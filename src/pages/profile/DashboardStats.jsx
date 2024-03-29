import React from "react";
import Target from "../../components/profile/Target";
import {
  faClipboardList,
  faLayerGroup,
  faBook,
  faCode,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "semantic-ui-react";

export function DashboardStats() {
  return (
    <>
      <Card.Group
        className="dashboard-stat-wrapper"
        itemsPerRow={3}
        stackable
        style={{ marginTop: "20px" }}
      >
        <Target
          icon={faClipboardList}
          titulo="Estado Perfil"
          activo={true}
          response="Job Ready"
        ></Target>
        <Target
          icon={faCode}
          titulo="Show The Code Realizados"
          response="3"
        ></Target>

        <Target
          icon={faLayerGroup}
          titulo="Stack Principal"
          response="Front"
        ></Target>
        <Target
          icon={faBook}
          titulo="Test Técnicos Rendidos"
          response="5"
        ></Target>
        <Target icon={faGlasses} titulo="Blog" response="Medium"></Target>
      </Card.Group>
    </>
  );
}

export default DashboardStats;
