import styled, { css } from 'styled-components'

export const Wrapper = styled.header``

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 1.4rem 0;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    line-height: 11.5rem;
    text-transform: uppercase;
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-family: ${theme.font.family.barlow};
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: ${theme.colors.secondary};
  `}
`
