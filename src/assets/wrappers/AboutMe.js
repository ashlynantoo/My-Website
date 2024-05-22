import styled from "styled-components";

const Wrapper = styled.section`
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .profile-img {
    width: 80%;
    max-width: 13rem;
    border-radius: 50%;
    border: 5px solid var(--color-secondary);
    padding-top: 0.3rem;
    padding-right: 0.3rem;
  }

  .profile-img:hover {
    box-shadow: var(--shadow-light);
  }

  .about-desc p {
    margin-top: 0;
  }

  .btn-container {
    text-align: center;
  }

  .btn a,
  .btn a:active,
  .btn a:visited {
    color: var(--color-white);
  }

  @media screen and (min-width: 850px) {
    .about-container {
      flex-direction: row;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .profile-img {
      margin-top: 0.5rem;
    }

    .btn-container {
      text-align: justify;
    }
  }
`;

export default Wrapper;
