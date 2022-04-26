import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      display: flex;
      width: 27.4rem;
      height: 27.4rem;
      border-radius: 50%;
      background: ${theme.colors.white};
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 3.2rem;
      color: ${theme.colors.primary};
      letter-spacing: 0.2rem;
      transition: all 0.2s ease-in;
      position: relative;
      flex-direction: column;

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        background: ${theme.colors.white};
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.1;
        transform: scale(1);
        transition: all 0.2s ease-in;
      }

      &:hover::after {
        transform: scale(1.64);
      }

      @media (max-width: 767px) {
        width: 15rem;
        height: 15rem;
        font-size: 2rem;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        width: 24.2rem;
        height: 24.2rem;
      }
    }
  `}
`
