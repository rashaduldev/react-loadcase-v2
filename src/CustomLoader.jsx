import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const CustomLoader = ({ image, text, color, bgColor }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) return 100;
        return oldProgress + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container" style={{ backgroundColor: bgColor }}>
      <img src={image} alt="Loading" className="loader-image" />
      <p style={{ color }}>{text}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
      <p style={{ color }}>{progress} %</p>
    </div>
  );
};

CustomLoader.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

CustomLoader.defaultProps = {
  text: "LOADING",
  color: "#00bfff",
  bgColor: "#000",
};

export default CustomLoader;