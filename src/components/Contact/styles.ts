import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  animation: go-back 1s;
  width: 100%;
  max-width: 1080px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--white);
  margin: 1rem 0;

  h1 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1rem;
  }

  form {
    margin: 1rem auto;
    width: 100%;

    div {
      margin: 1rem 0;

      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      input {
        width: 100%;
        padding: 1rem;
        border-radius: 0.25rem;
        border: 1px solid var(--text);
      }

      textarea {
        width: 100%;
        padding: 1rem;
        border-radius: 0.25rem;
        border: 1px solid var(--text);
      }
    }

    button {
      padding: 1rem 3rem;
      background: var(--blue);
      color: var(--white);
      border: 0;
      border-radius: 0.25rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

`;