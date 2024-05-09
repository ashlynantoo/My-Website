import styled from "styled-components";

const Wrapper = styled.div`
  .projects {
    display: grid;
    gap: 2rem;
  }

  .project-container {
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-light);
    text-align: center;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-container:hover {
    transform: scale(1.025);
  }

  .portfolio-img {
    width: 100%;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .project-container h4 {
    margin-bottom: 0;
  }

  .project-container p {
    font-size: var(--text-sm);
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0.5rem;
    text-align: center;
  }

  .description {
    color: var(--color-secondary);
  }

  .skills,
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .skills p {
    background-color: var(--color-primary-light);
    color: var(--color-primary);
    border-radius: var(--border-radius);
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    transition: var(--transition);
  }

  .links {
    margin-top: 0.25rem;
    margin-bottom: 1.25rem;
  }

  .links a {
    color: var(--color-secondary);
    font-size: 1.75rem;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links a:hover {
    transform: scale(1.1);
  }

  @media (min-width: 800px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1280px) {
    .projects {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
