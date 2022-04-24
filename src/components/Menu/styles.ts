import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      margin-right: 5rem;
      &:last-child {
        margin-right: 0;
      }

      a {
        display: flex;
        text-decoration: none;
        color: ${theme.colors.white};
        font-family: ${theme.font.family.barlow};
        font-size: ${theme.font.sizes.small};
        align-items: center;
        line-height: 1.9rem;
        letter-spacing: 0.27rem;
        text-transform: uppercase;
        position: relative;
        height: 9.6rem;

        span {
          font-weight: ${theme.font.bold};
          margin-right: 1.2rem;
        }

        &::after {
          content: '';
          width: 100%;
          height: 0.3rem;
          background: ${theme.colors.white};
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 0.2s ease-in;
          opacity: 0;
          transform: scale(0);
        }

        &:hover::after {
          opacity: 1;
          transform: scale(1);
        }
    }
  `}
`
