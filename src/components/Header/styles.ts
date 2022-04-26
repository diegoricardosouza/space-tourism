import { IconWrapper } from 'components/Menu/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding-top: 4rem;

  @media (max-width: 767px) {
    padding-top: 2.4rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 0;
  }
`

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${IconWrapper} {
    top: -1rem;
    right: 1rem;
  }
`

export const WrapperLogo = styled.div`
  margin-left: -11.05rem;

  @media (max-width: 767px) {
    margin-left: 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 0;
  }

  @media (min-width: 992px) and (max-width: 1330px) {
    margin-left: 0;
  }
`

export const LineMenu = styled.div`
  ${({ theme }) => css`
    width: 47.3rem;
    height: 0.1rem;
    background: ${theme.colors.white};
    opacity: 0.25;
    position: absolute;
    z-index: 1;

    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }

    @media (min-width: 992px) and (max-width: 1330px) {
      display: none;
    }
  `}
`

export const BgMenu = styled.div`
  width: 830rem;
  height: 9.6rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  position: absolute;
  top: 0;
  left: 44.3rem;
  z-index: 0;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    left: 29rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    left: 36rem;
  }
`
