import React from "react";
import "./user.css";
var Output = props => {
  return (
    <div className="output">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ad
        aperiam dolor quae eum beatae hic sequi dicta illo sint nihil sed
        corporis asperiores doloribus eligendi explicabo, voluptate deleniti.
        Debitis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        optio eius error assumenda soluta illum consectetur enim, dolores
        explicabo corporis. Impedit iusto nesciunt maiores facilis commodi, eum
        rem facere ea.
      </p>
      <h2>{props.name}</h2>
    </div>
  );
};
export default Output;
