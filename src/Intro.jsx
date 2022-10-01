import React from "react";
import "./Intro.css";
import blob1 from "./blob1.svg";
// import bg_blob1 from "./bg_blob1.svg";
import Laptop from "./Laptop.gif";
const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="blob1">
          <img src={blob1} alt="" />
        </div>
        <div className="name">
          <div className="subname1">Hey! I am....</div>
          <div className="subname2">Saurabh Soni</div>
          <div className="subname2">I Build Things For The Web!</div>
              </div>
              <div className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum quod voluptatem. Doloribus error deserunt quod dignissimos sed incidunt! Sapiente necessitatibus tempore aperiam odio perferendis, dolor pariatur, illum saepe corporis praesentium labore fuga reprehenderit incidunt, eaque a cumque. Rerum rem maiores voluptatibus dolore et, perspiciatis temporibus vel consequatur sed sunt molestiae vitae facilis quam tenetur! Fugit reiciendis dolores obcaecati quaerat?
              </div>
        <div className="img">
          <img src={Laptop} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
