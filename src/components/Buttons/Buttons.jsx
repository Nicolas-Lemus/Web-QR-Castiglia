import React from 'react';
import "./Buttons.css"

const Button = ({ namber, address, image, animationClass }) => {

  return (
    <>
        <a href={address}>
            <div className={`button__component ${animationClass}`}>
                <img 
                    src={image}
                    alt={namber}
                />
                <span>
                    {namber}
                </span>
            </div>
        </a>
    </>
  );
};

export default Button;
