import styled from "styled-components";

const Wrapper = styled.footer`
  .footer {
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 2rem 0;
  }

  .footer p {
    color: var(--color-white);
    margin: 0;
    text-align: center;
    width: var(--min-width);
    max-width: var(--max-width);
  }

  .footer p em {
    font-size: var(--text-sm);
  }
`;

export default Wrapper;
