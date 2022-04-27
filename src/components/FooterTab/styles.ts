import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
`

export const DistanceWrapper = styled.div`
  width: 22.1rem;
  padding-right: 1.5rem;
`

export const TimeWrapper = styled.div``

export const Title = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family.barlow};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.7rem;
    text-transform: uppercase;
    letter-spacing: 0.236rem;
    margin-bottom: 1.2rem;
  `}
`

export const Content = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    line-height: 3.2rem;
    text-transform: uppercase;
  `}
`
