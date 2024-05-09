import styled from "styled-components";

const Wrapper = styled.section`
  .hero-container {
    color: var(--color-white);
    text-align: center;
    width: var(--min-width);
    max-width: var(--max-width);
  }

  .hero-text-title {
    font-size: 5rem;
    font-weight: 700;
  }

  .hero-text-desc {
    color: var(--color-white);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 1023px) {
    .hero-text-title {
      font-size: calc(1.8rem + 4.27vw);
    }

    .hero-text-desc {
      font-size: calc(1.2rem + 1.07vw);
    }
  }
`;

export default Wrapper;
