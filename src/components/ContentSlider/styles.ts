import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  @media (max-width: 767px) {
    order: 2;
  }
`

export const WrapperTitle = styled.header``

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 2.7rem 0;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    line-height: 6.4rem;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 2.4rem;
      line-height: 2.8rem;
      text-align: center;
      margin-bottom: 1.6rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin-bottom: 1.6rem;
      font-size: 4rem;
      line-height: 4.6rem;
      text-align: center;
    }
  `}
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    line-height: 3.7rem;
    opacity: 0.5;
    text-transform: uppercase;
    margin-bottom: 1.5rem;

    @media (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 1.8rem;
      text-align: center;
      margin-bottom: 0.8rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 2.4rem;
      line-height: 2.8rem;
      text-align: center;
      margin-bottom: 0.8rem;
    }
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family.barlow};
    font-size: 1.8rem;
    line-height: 3.2rem;
    max-width: 44.5rem;

    @media (max-width: 767px) {
      font-size: 1.5rem;
      line-height: 2.5rem;
      text-align: center;
      max-width: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 1.6rem;
      line-height: 2.8rem;
      text-align: center;
      max-width: 59rem;
      margin: 0 auto;
      min-height: 8.4rem;
    }
  `}
`
