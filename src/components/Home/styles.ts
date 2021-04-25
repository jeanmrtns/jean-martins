import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 2.5rem auto;
  padding: 2rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;

  animation: go-back 1s;
`;

export const Profile = styled.div`
  border: 1px solid ${darken(0.1, '#F0F2F5')};
  padding: 2rem 3rem;
  border-radius: 0.25rem;
  background: var(--white);
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;

  ul {
    list-style: none;
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  img {
    margin: 1rem 0;
    width: 20rem;
    border-radius: 50%;
  }

`;
export const About = styled.div`
  border: 1px solid ${darken(0.1, '#F0F2F5')};
  padding: 2rem;
  border-radius: 0.25rem;
  background: var(--white);
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 5rem;
  
  h2 {
    display: block;
  }

  h3 {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    display: grid;
    gap: 2rem;

    li {
      font-size: 1rem;
    }
  }
`;