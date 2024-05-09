import styled from "styled-components";

const Wrapper = styled.section`
  .navbar {
    background-color: var(--color-primary);
    box-shadow: var(--shadow-light);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
  }

  .navbar-container {
    width: var(--min-width);
    margin: 0 auto;
  }

  .navbar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
  }

  .logo {
    width: 10rem;
  }

  .navbar-toggle {
    font-size: 1.5rem;
    background-color: transparent;
    border-color: transparent;
    color: var(--color-white);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: var(--transition);
  }

  .navbar-toggle:hover {
    transform: rotate(180deg);
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .links a {
    color: var(--color-white);
    font-size: var(--text-sm);
    display: block;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    transition: var(--transition);
  }

  .links a:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
    padding-left: 1.5rem;
  }

  @media (min-width: 850px) {
    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .navbar-header {
      gap: 2.5rem;
    }

    .navbar-toggle {
      display: none;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
    }

    .links a {
      padding: 0.5rem 1rem;
    }

    .links a:hover {
      padding: 0.5rem 1rem;
    }
  }
`;

export default Wrapper;
