import styled, { css } from 'styled-components'

export const Wrapper = styled.header``

export const WrapperNumber = styled.h1`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.barlow};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    line-height: 3.4rem;
    text-transform: uppercase;
    letter-spacing: 0.47rem;

    @media (max-width: 767px) {
      font-size: ${theme.font.sizes.small};
      line-height: 1.9rem;
      letter-spacing: 0.27rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 2rem;
      line-height: 2.4rem;
      letter-spacing: 0.33rem;
    }
  `}
`

export const Number = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    opacity: 0.25;
    margin-right: 2.8rem;

    @media (max-width: 767px) {
      margin-right: 1.9rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin-right: 1.9rem;
    }
  `}
`

export const Title = styled.span``
