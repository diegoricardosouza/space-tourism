import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const WrapperTitle = styled.header``

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    line-height: 6.4rem;
    color: ${theme.colors.white};
    margin: 0 0 1.7rem 0;
  `}
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.barlowCondensed};
    font-size: ${theme.font.sizes.small};
    line-height: 1.9rem;
    letter-spacing: 0.27rem;
    color: ${theme.colors.secondary};
    display: block;
    margin-bottom: 1.1rem;
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    margin: 0;
    max-width: 44.5rem;
    font-family: ${theme.font.family.barlow};
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: ${theme.colors.secondary};
  `}
`
