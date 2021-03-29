import React from "react";
import images from "../imageData";

const testimonials = [
  {
    id: 0,
    name: "Nuzhat Tabassum",
    body: ` Words are great, and they look even better when they're fully
     resolved on your 3D printed part! Read this guide to learn how to
     design text on 3D printed parts.`,
    img: images.mypic,
  },
  {
    id: 1,
    name: "Nuzhat Tabassum",
    body: `  Words are great, and they look even better when they're fully
     resolved on your 3D printed part! Read this guide to learn how to
     design text on 3D printed parts.`,
    img: images.mypic,
  },
  {
    id: 2,
    name: "Nuzhat Tabassum",
    body: ` Words are great, and they look even better when they're fully
      resolved on your 3D printed part! Read this guide to learn how to
      design text on 3D printed parts.`,
    img: images.mypic,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">
          {testimonials.map((t) => (
            <div key={t.id} className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>{t.body}</p>
              <div className="rating">
                <i className="fa fa-heart"></i>
                <i className="fa fa-heart"></i>
                <i className="fa fa-heart"></i>
                <i className="fa fa-heart"></i>
                <i className="fa fa-heart-o"></i>
              </div>
              <img src={t.img} />
              <h3>{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
