import styled from "styled-components";

const Wrapper = styled.div`
  .skills-category-container {
    margin-bottom: 2rem;
  }

  .btn-filter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dropdown-icon {
    font-size: 2rem;
    display: flex;
    align-items: center;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }

  .skills-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .btn-skills {
    background: transparent;
    border-bottom: 1px solid var(--color-primary);
    box-shadow: none;
    color: var(--color-secondary);
    font-size: var(--text-sm);
    letter-spacing: var(--spacing-sm);
    text-transform: uppercase;
  }

  .btn-skills:hover {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }

  @media (min-width: 768px) {
    .btn-filter {
      display: none;
    }

    .skills-container {
      height: auto !important;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
    }

    .btn-skills {
      border: 1px solid var(--color-secondary);
    }
  }
`;

export default Wrapper;
