import styled, { css } from 'styled-components'

export const Wrapper = styled.article``

export const TitleWrapper = styled.header`
  margin-bottom: 2.4rem;
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family.barlow};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    line-height: 3.4rem;
    letter-spacing: 0.47rem;
    margin-bottom: 2.4rem;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.white};
    line-height: 17.2rem;
    font-weight: ${theme.font.normal};
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.barlow};
    color: ${theme.colors.secondary};
    line-height: 3.2rem;
    font-size: 1.8rem;
    max-width: 44.4rem;
  `}
`
