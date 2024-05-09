import styled from "styled-components";

const Wrapper = styled.section`
  .social-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .social-links a {
    color: var(--color-white);
    font-size: 1.4rem;
    transition: var(--transition);
    width: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social-links a:hover {
    font-size: 1.6rem;
  }
`;

export default Wrapper;
