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

    @media (max-width: 767px) {
      font-size: 2.4rem;
      line-height: 2.8rem;
      text-align: center;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 4rem;
      line-height: 4.6rem;
      text-align: center;
    }
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

    @media (max-width: 767px) {
      font-size: ${theme.font.sizes.xsmall};
      line-height: 1.7rem;
      text-align: center;
      margin-bottom: 0.9rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin-bottom: 1.6rem;
      text-align: center;
    }
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

    @media (max-width: 767px) {
      font-size: 1.5rem;
      line-height: 2.5rem;
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      max-width: 45.8rem;
      font-size: ${theme.font.sizes.small};
      line-height: 2.8rem;
      text-align: center;
      margin: 0 auto;
    }
  `}
`
