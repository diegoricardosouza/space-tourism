import styled, { css } from 'styled-components'

type BaseProps = {
  bgImage: string
  bgImageTablet: string
  bgImageMobile: string
}

export const Wrapper = styled.div<BaseProps>`
  ${({ theme, bgImage, bgImageTablet, bgImageMobile }) => css`
    background: url(${bgImage}) no-repeat center center fixed
      ${theme.colors.primary};
    width: 100%;
    min-height: 100vh;
    background-size: cover !important;

    @media (max-width: 767px) {
      background: url(${bgImageMobile}) no-repeat center center
        ${theme.colors.primary};
    }

    @media (min-width: 768px) and (max-width: 991px) {
      background: url(${bgImageTablet}) no-repeat center center
        ${theme.colors.primary};
    }
  `}
`
