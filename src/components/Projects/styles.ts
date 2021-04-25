import styled from 'styled-components';
import { darken } from 'polished';

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
  margin: 2.5rem auto;
  padding: 2rem 1.5rem;

 

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media(max-width:920px) {
      grid-template-columns: 1fr;
      text-align: center;
    }

    li {

      border: 1px solid ${darken(0.1, '#f9f9f9')};
      padding: 1rem;
      border-radius: 0.25rem;
      background-color: #f9f9f9;

      h2 {
        font-size: 1.5rem;
      }

      a {
        display: inline-block;
        text-decoration: none;
        color: var(--white);
        border-radius: 0.25rem;
        padding: 1rem 2rem;
        margin-top: 1rem;
        background: var(--blue);
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;