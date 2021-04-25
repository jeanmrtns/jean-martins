import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Content = styled.div`
  border: 1px solid ${darken(0.1, '#f9f9f9')};
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
  border-radius: 0.25rem;

  h1 {
    font-size: 2rem;
  }

`;

export const SocialMedia = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin: 2rem 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    li {
      a {
        text-decoration: none;
        font-size: 1.25rem;
        color: var(--blue);
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }

        span {
          margin-left: 1rem;
        }
      }
    }
  }

  img {
    border-radius: 50%;
    width: 100%;
  }

`;