import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  position: relative;
  z-index: 1;
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.ul<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    transition: all 0.2s ease-in;

    li {
      margin-right: 5rem;
      &:last-child {
        margin-right: 0;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        margin-right: 3.8rem;

        &:last-child {
          margin-right: 2.8rem;
        }
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
          width: 1.8rem;

          @media (min-width: 768px) and (max-width: 991px) {
            display: none;
          }
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
          transform: scale(0);
        }

        &:hover::after {
          transform: scale(1);
        }

        @media (min-width: 768px) and (max-width: 991px) {
          font-size: ${theme.font.sizes.xsmall};
        }
      }
    }

    @media (max-width: 767px) {
      opacity: ${isOpen ? '1' : '0'};
      pointer-events: ${isOpen ? 'all' : 'none'};
      height: 100vh;
      position: fixed;
      overflow: hidden;
      flex-direction: column;
      top: 0;
      right: ${isOpen ? '0' : '-100%'};
      background: rgba(11, 13, 23, 0.95);
      width: 25.4rem;
      padding-left: 3.2rem;
      padding-top: 11.8rem;

      li {
        margin-right: 0;
        margin-bottom: 3.2rem;

        a {
          height: 3.1rem;

          &::after {
            width: 0.4rem;
            height: 100%;
            left: auto;
            right: 0;
            top: 0;
            bottom: auto;
          }
        }
      }
    }
  `}
`

export const IconWrapper = styled.div<MenuFullProps>`
  @media (max-width: 767px) {
    ${({ theme, isOpen }) => css`
      display: block;
      position: absolute;
      top: 3.2rem;
      right: 2.7rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      z-index: 2;
      width: 2.4rem;
      height: 2.1rem;

      span {
        display: block;
        width: 100%;
        height: 0.3rem;
        background: ${theme.colors.secondary};
        margin-bottom: 0.6rem;
        transition: all 0.2s ease-in;

        &:nth-child(1) {
          position: absolute;
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
          top: ${isOpen ? '0.8rem' : '0.1rem'};
        }

        &:nth-child(2) {
          top: 1rem;
          position: absolute;
          opacity: ${isOpen ? '0' : '1'};
        }

        &:last-child {
          margin-bottom: 0;
          position: absolute;
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
          top: ${isOpen ? '0.8rem' : '1.9rem'};
        }
      }
    `}
  }

  @media (min-width: 768px) {
    display: none;
  }
`
