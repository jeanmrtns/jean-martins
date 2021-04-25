import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: var(--white);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1150px;
  padding: 1rem 1.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      a {
        display: inline-block;
        text-decoration: none;
        color: var(--text);
        font-size: 1rem;
        transition: brightness 0.2s;
        margin-top: 0.5rem;

        span {
          display: inline-block;
          margin-left: 0.5rem;
        }

        &:hover {
          filter: brightness(0.5);
        }
      }
    }
  }
`;

export const WebDev = styled.section`
  h5 {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  p {
    margin: 0.25rem 0;
  }
`;