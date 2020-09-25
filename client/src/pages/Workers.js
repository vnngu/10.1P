import React from "react";
import { Container } from "semantic-ui-react";
import ListGrid from "../components/ListGrid";
import MenuTask from "../components/MenuTask";

const Workers = () => {
  return (
    <div className="worker-task-container">
      <MenuTask />
      <Container>
        <ListGrid />
      </Container>
    </div>
  );
};

export default Workers;
