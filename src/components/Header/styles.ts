import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: var(--white);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  nav {
    ul {
      list-style: none;
      display: flex;

      li {
        a {
          text-decoration: none;
          font-size: 1.25rem;
          margin-right: 2rem;
          color: var(--text);
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.1);
          }
        }
      }
    }
  }
`;