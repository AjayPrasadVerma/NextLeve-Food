"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInpRef = useRef();

  const handleClick = () => {
    imageInpRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image selected bythe user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/jpg, image/jpeg, image/png"
          name={name}
          ref={imageInpRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} onClick={handleClick} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
