import { useCallback, useEffect, useRef } from "react";
import { title, desc } from "../utils/data";
import Wrapper from "../assets/wrappers/Hero";

const Hero = () => {
  let titleIndex = 0;
  let descIndex = 0;
  const titleContainer = useRef(null);
  const descContainer = useRef(null);

  const typeWriter = useCallback(() => {
    if (titleIndex < title.length) {
      titleContainer.current.innerHTML += title.charAt(titleIndex);
      titleIndex++;
      setTimeout(() => {
        typeWriter();
      }, 150);
    } else if (titleIndex === title.length && descIndex < desc.length) {
      descContainer.current.innerHTML += desc.charAt(descIndex);
      descIndex++;
      setTimeout(() => {
        typeWriter();
      }, 100);
    }
  }, [descIndex, titleIndex]);

  useEffect(() => {
    typeWriter();
  }, [typeWriter]);

  return (
    <Wrapper id="home">
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-text-title" ref={titleContainer}></h1>
          <code>
            <p className="hero-text-desc" ref={descContainer}></p>
          </code>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
