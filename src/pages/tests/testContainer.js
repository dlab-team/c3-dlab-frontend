import React from "react";
import { Container } from "semantic-ui-react";
import TestExpectations from "../../components/tests/testExpectations";
import TestList from "../../components/tests/testList";

const TestContainer = () => {
  return (
    <>
      <Container>
        <TestExpectations />
        <TestList />
      </Container>
    </>
  );
};

export default TestContainer;
