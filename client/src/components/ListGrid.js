import React from "react";
import TaskItem from "./TaskItem";
import faker from "faker";
const requesterList = [];
for (let i = 0; i < 6; i++) {
  requesterList.push({
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    image: faker.image.image(),
    description: faker.lorem.sentence(),
  });
}

const ListGrid = () => {
  return (
    <div className="list-grid-container">
      {requesterList.map((requester) => (
        <TaskItem
          key={requester.id}
          image={requester.image}
          name={requester.name}
          description={requester.description}
        />
      ))}
    </div>
  );
};

export default ListGrid;
