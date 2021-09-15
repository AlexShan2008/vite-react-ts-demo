import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: var(--grey);

  .logo {
    width: 60px;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      padding: 10px;
      display: flex;
      justify-content: center;

      a {
        color: var(--black);
      }

      &.active {
        a {
          color: var(--primary);
        }
      }
    }
  }
`;
