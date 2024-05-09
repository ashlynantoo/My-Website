import styled from "styled-components";

const Wrapper = styled.section`
  .contact-section {
    flex-direction: column;
    align-items: center;
  }

  .contact-container {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    text-align: center;
  }

  .form-control {
    background-color: var(--color-primary-light);
    border: 1px solid var(--color-primary-light);
    border-radius: var(--border-radius);
    display: block;
    font-size: var(--text-sm);
    letter-spacing: var(--spacing-sm);
    margin: 1rem auto;
    max-width: 40rem;
    padding: 0.375rem 0.75rem;
    width: 100%;
  }

  .reaptcha {
    margin: 1rem auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .contact-footer-container {
    background-color: var(--color-primary);
    color: var(--color-white);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  .contact-footer-container h3,
  .contact-footer-container p {
    margin: 0;
  }

  .contact-footer-container p {
    color: var(--color-white);
    text-align: center;
  }
`;

export default Wrapper;
