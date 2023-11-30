import React, { useState } from "react";
import "./styles.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img15 from "./images/img15.jpg";
import img16 from "./images/img16.jpg";
import img17 from "./images/img17.jpg";
import img18 from "./images/img18.jpg";
import img19 from "./images/img19.jpg";
import img20 from "./images/img20.jpg";
import img21 from "./images/img21.jpg";
import img22 from "./images/img22.jpg";
import img23 from "./images/img23.jpg";
import img24 from "./images/img24.jpg";
import img25 from "./images/img25.jpg";
import img26 from "./images/img26.jpg";
import img27 from "./images/img27.jpg";
import img28 from "./images/img28.jpg";
import img29 from "./images/img29.jpg";
import img30 from "./images/img30.jpg";
import img31 from "./images/img31.jpg";
import img32 from "./images/img32.jpg";
import img33 from "./images/img33.jpg";
import img34 from "./images/img34.jpg";
import img35 from "./images/img35.jpg";
import img36 from "./images/img36.jpg";
import img0 from "./images/img0.jpg";
import logo from "../Pictures/gallerylogo.png";
export default function Gallery() {
  const imageArray = [
    {
      src: img0,
      alt: "Description for Image 0",
    },
    {
      src: img1,
      alt: "Description for Image 1",
    },
    {
      src: img2,
      alt: "Description for Image 2",
    },
    {
      src: img3,
      alt: "Description for Image 3",
    },
    {
      src: img4,
      alt: "Description for Image 4",
    },
    {
      src: img5,
      alt: "Description for Image 5",
    },
    {
      src: img6,
      alt: "Description for Image 6",
    },
    {
      src: img7,
      alt: "Description for Image 7",
    },
    {
      src: img8,
      alt: "Description for Image 8",
    },
    {
      src: img9,
      alt: "Description for Image 9",
    },
    {
      src: img10,
      alt: "Description for Image 10",
    },
    {
      src: img11,
      alt: "Description for Image 11",
    },
    {
      src: img12,
      alt: "Description for Image 12",
    },
    {
      src: img13,
      alt: "Description for Image 13",
    },
    {
      src: img15,
      alt: "Description for Image 15",
    },
    {
      src: img16,
      alt: "Description for Image 16",
    },
    {
      src: img17,
      alt: "Description for Image 17",
    },
    {
      src: img18,
      alt: "Description for Image 18",
    },
    {
      src: img19,
      alt: "Description for Image 19",
    },
    {
      src: img20,
      alt: "Description for Image 20",
    },
    {
      src: img21,
      alt: "Description for Image 21",
    },
    {
      src: img22,
      alt: "Description for Image 22",
    },
    {
      src: img23,
      alt: "Description for Image 23",
    },
    {
      src: img24,
      alt: "Description for Image 24",
    },
    {
      src: img25,
      alt: "Description for Image 25",
    },
    {
      src: img26,
      alt: "Description for Image 26",
    },
    {
      src: img27,
      alt: "Description for Image 27",
    },
    {
      src: img28,
      alt: "Description for Image 28",
    },
    {
      src: img29,
      alt: "Description for Image 29",
    },
    {
      src: img30,
      alt: "Description for Image 30",
    },
    {
      src: img31,
      alt: "Description for Image 31",
    },
    {
      src: img32,
      alt: "Description for Image 32",
    },
    {
      src: img33,
      alt: "Description for Image 33",
    },
    {
      src: img34,
      alt: "Description for Image 34",
    },
    {
      src: img35,
      alt: "Description for Image 35",
    },
    {
      src: img36,
      alt: "Description for Image 36",
    },
  ];

  const [selectedImage, setSelectedImage] = useState("");
  const [model, setModel] = useState(false);
  const openModal = (src) => {
    setSelectedImage(src);
    setModel(true);
  };
  const closeModal = () => {
    setSelectedImage("");
    setModel(false);
  };

  return (
    <>
      <img src={logo} className=" d-flex mx-auto" />
      <div
        style={{
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "3%",
          padding: "3%",
          backgroundColor: "#FDFBF7",
        }}
      >
        <div className={model ? "model open" : "model"}>
          <img src={selectedImage}></img>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>

        <div className="container gallery-container">
          <div className="row">
            {imageArray.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  onClick={() => openModal(image.src)}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
