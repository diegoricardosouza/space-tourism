import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: center;
  }
`

export const DistanceWrapper = styled.div`
  width: 22.1rem;
  padding-right: 1.5rem;

  @media (max-width: 767px) {
    width: 100%;
    padding-right: 0;
    text-align: center;
    margin-bottom: 3.2rem;
  }
`

export const TimeWrapper = styled.div`
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 3.2rem;
  }
`

export const Title = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family.barlowCondensed};
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
