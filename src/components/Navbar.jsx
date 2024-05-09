import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { SocialLinks } from "../components";
import { pageLinks } from "../utils/data";
import logo from "../assets/images/logo.png";
import Wrapper from "../assets/wrappers/Navbar";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height + 20;
    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = `0px`);
  }, [showLinks]);

  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-header">
            <img src={logo} alt="Logo" className="logo" />
            <SocialLinks />
            <button
              className="navbar-toggle"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              <FaBars />
            </button>
          </div>
          <div ref={linksContainerRef} className="links-container">
            <ul ref={linksRef} className="links">
              {pageLinks.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a
                      href={url}
                      onClick={() => {
                        setShowLinks(!showLinks);
                      }}
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
export default Navbar;
