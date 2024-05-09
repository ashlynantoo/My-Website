import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <div className="footer">
        <p>
          <em>
            Whatever you do, do from the heart, as for the Lord and not for
            others (Colossians 3: 23)
          </em>
        </p>
        <p className="copyright">
          Copyright © <span id="year">{year}</span>. All rights reserved.
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
