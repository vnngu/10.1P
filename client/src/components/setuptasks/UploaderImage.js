import React, { useState } from "react";

const ImageUploader = ({ setTask, task }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const handleChange = (e) => {
    setError(null);
    const imagesList = document.querySelector(".upload-images .name-list");
    if (imagesList.childElementCount !== 0) {
      imagesList.innerHTML = "";
    }

    let imageNames = [];
    let imageArr = [];
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (types.includes(file.type)) {
        setImages((images) => [...images, file]);
        imageArr.push(file);
        imageNames.push(file.name);
      } else {
        imageArr = [];
        setError("Please provide .png, .jpeg, .jpg files");
        break;
      }
    }
    setTask({ ...task, images: imageNames });
  };
  return (
    <div className="upload-images">
      <input type="file" multiple onChange={handleChange} />
      <div className="error">{error}</div>
      <div className="name-list">
        {images.map((image, index) => (
          <span key={index} className="image-name">
            {image.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
