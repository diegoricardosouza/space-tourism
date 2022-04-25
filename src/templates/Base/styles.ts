import styled, { css } from 'styled-components'

type BaseProps = {
  bgImage: string
}

export const Wrapper = styled.div<BaseProps>`
  ${({ theme, bgImage }) => css`
    background: url(${bgImage}) no-repeat center center ${theme.colors.primary};
    width: 100%;
    height: 100vh;
  `}
`
