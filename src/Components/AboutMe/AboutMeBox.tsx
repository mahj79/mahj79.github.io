import { useState } from "react";
import { isFunctionLike } from "typescript";

export const AboutMeBox: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  const cardFlip = () => {


    const handleClick = () => {
      setIsFlipped(!isFlipped )
    }
    return <div>Hi</div>;
  }

  return (
        <div className='AboutMeContainer'>
          <div className='AboutMeBox'>
            <h1>About Me</h1>
            <img className="AboutMeImage" src="HawaiiVolcano.jpg" alt="Me in Hawaii!" />
            {visible && (
              <div className="AboutMeBoxText">
                <p>
                  Hello, my name is Jack Mahoney and I'm a web developer based in Chicago.
                  I specialize in building responsive and user-friendly websites
                  using the latest web technologies.
                </p>
                <button>Download Resume</button>
              </div>
            )}
            <button onClick={toggleVisibility}>
              {visible ? "Hide" : "Show More"}
            </button>
          </div>

          <div className="northernTrustContainer">
              <h1>Northern Trust</h1>
              <img className="northernTrustLogo" src="ntlogo.png" alt="Northern Trust Logo"/>
          </div> 

          <div className="optivContainer">
              <h1>Optiv</h1>
              <img className="optivLogo" src="optivlogo.png" alt="Optiv Logo"/>
          </div>

          
          <div className="deloitteContainer">
              <h1>Deloitte</h1>
              <img className="deloitteLogo" src="deloittelogo.png" alt="Deloitte Logo"/>
          </div>
        </div>

        
  );
};

export default AboutMeBox;
