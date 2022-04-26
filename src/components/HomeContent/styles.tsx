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

    @media (max-width: 767px) {
      font-size: ${theme.font.sizes.small};
      text-align: center;
      line-height: 1.9rem;
      letter-spacing: 0.27rem;
      margin-bottom: 1.6rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 2.4rem;
      text-align: center;
      line-height: 2.4rem;
      letter-spacing: 0.33rem;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.white};
    line-height: 17.2rem;
    font-weight: ${theme.font.normal};
    margin: 0 0 2.4rem 0;

    @media (max-width: 767px) {
      font-size: 8rem;
      text-align: center;
      line-height: 10rem;
      margin-bottom: 1.6rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      line-height: 15rem;
    }
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.barlow};
    color: ${theme.colors.secondary};
    line-height: 3.2rem;
    font-size: 1.8rem;
    max-width: 44.4rem;
    margin: 0;

    @media (max-width: 767px) {
      font-size: 1.5rem;
      text-align: center;
      line-height: 2.5rem;
      margin-bottom: 8.1rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: ${theme.font.sizes.small};
      line-height: 2.8rem;
      text-align: center;
      margin-bottom: 15.6rem;
    }
  `}
`
