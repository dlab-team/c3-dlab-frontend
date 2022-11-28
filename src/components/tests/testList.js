import React from "react";
import OneTest from "./oneTest";
import { Card } from "semantic-ui-react";
import "../../assets/styles.css";

export default function TestList() {
  return (
    <>
      <Card.Group stackable container itemsPerRow={4} className="mentor-card">
        <OneTest />
      </Card.Group>
    </>
  );
}
