import Wrapper from "../assets/wrappers/SocialLinks";
import { socialLinks } from "../utils/data";

const SocialLinks = () => {
  return (
    <Wrapper>
      <ul className="social-links">
        {socialLinks.map((socialMedia) => {
          const { id, url, icon } = socialMedia;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export default SocialLinks;
