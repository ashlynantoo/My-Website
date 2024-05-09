import styled from "styled-components";

const Wrapper = styled.section`
  .skills-tools-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding-top: 1rem;
  }

  .skill-container p {
    margin: 0;
    width: 7rem;
    height: 3.5rem;
  }

  .skill-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: var(--color-secondary);
  }

  .skill-icon:hover {
    color: var(--color-primary);
  }

  .skill-name {
    display: flex;
    justify-content: center;
    text-align: center;
    color: var(--color-primary);
  }
`;

export default Wrapper;
