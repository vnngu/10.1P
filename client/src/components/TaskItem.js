import React from "react";

const TaskItem = ({ image, name, description }) => {
  return (
    <div className="taskitem-container">
      <div className="taskitem">
        <img src={image} alt="requester" />
        <div className="info">
          <span className="name">Requester's: {name}</span>
          <span className="desc">Description: {description}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
