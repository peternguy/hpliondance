import React from "react";
import Marquee from "react-fast-marquee";

const ImageMarquee = () => {
  return (
    <Marquee speed={60} gradient={true} gradientColor={"black"} autoFill={true} pauseOnHover={false}>
        <img src="/img/V5_logo.webp" alt="1" style={{ width: '200px', height: 'auto', margin: '0 20px' }} />
        <img src="/img/TC_logo.png" alt="2" style={{ width: '200px', height: 'auto', margin: '0 20px' }} />
        <img src="/img/H_logo.png" alt="3" style={{ width: '200px', height: 'auto', margin: '10px 20px' }} />
    </Marquee>
  );
};

export default ImageMarquee;
