import Wrapper from "../assets/wrappers/Heading";

const Heading = ({ heading1, heading2 }) => {
  return (
    <Wrapper>
      <h2 className="section-title">
        {heading1} <span>{heading2}</span>
      </h2>
    </Wrapper>
  );
};

export default Heading;
