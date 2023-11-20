import React from "react";
import "./Movies.css";
import Tiger from "./Tiger-3.jpg";
import Killing from "./The-Killing-Vote-2023.jpg";
import img1 from "./uZJGMFgE1Q9xpncVAu1G3Vce4nP.jpg";
import img2 from "./uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg";
import img3 from "./vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg";
import img4 from "./xzlMB1nGJtMhr2GnecpHIh7XUZe.jpg";
import img5 from "./vN0rKik0oCSfFmMFoH7qicPhcHj.jpg";
import img6 from "./t3ZFXwFiyOobmE2GVEE5TrRdGAn.jpg";
import img7 from "./bshCGAHZRldAfdxXDX3637PW9cR.jpg";

export default function () {
  return (
    <div className="m-main">
      <br />
      <h2>Movies</h2>
      <div class="card">
        <img src={Tiger} />
      </div>
      <div className="card2">
        <img src={Killing} />
      </div>
      <div className="card3">
        <img src={img1} />
      </div>
      <div className="card4">
        <img src={img2} />
      </div>
      <div className="card5">
        <img src={img3} />
      </div>
      <div className="card6">
        <img src={img4} />
      </div>
      <div className="card7">
        <img src={img5} />
      </div>
      <div className="card9">
        <img src={img7} />
      </div>
      <button class="btn"> More</button>
    </div>
  );
}
