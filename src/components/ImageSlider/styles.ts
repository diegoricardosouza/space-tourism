import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  position: relative;
`

export const Line = styled.div`
  @media (max-width: 767px) {
    ${({ theme }) => css`
      position: absolute;
      left: 50%;
      bottom: 0.3rem;
      width: 95%;
      height: 0.1rem;
      background: ${theme.colors.blueLight};
      transform: translateX(-50%);
    `}
  }
`
