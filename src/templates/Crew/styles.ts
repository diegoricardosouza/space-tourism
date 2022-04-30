import { Wrapper as W } from 'components/ContentSlider/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 5rem;
`

export const WrapperSlider = styled.div`
  ${({ theme }) => css`
    @media (max-width: 767px) {
      margin-top: 3.2rem;
    }

    .swiper {
      width: 100%;
      height: calc(100vh - 220px);

      @media (max-width: 767px) {
        height: auto;
      }

      @media (min-width: 1400px) {
        height: calc(100vh - 27.6rem);
      }

      @media (min-width: 768px) and (max-width: 991px) {
        height: auto;
      }
    }

    .swiper-pagination {
      text-align: left;
      bottom: 9rem;

      @media (max-width: 767px) {
        text-align: center;
        bottom: 20rem;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        text-align: center;
        bottom: 57rem;
      }
    }

    .swiper-pagination-bullet {
      width: 1.5rem;
      height: 1.5rem;
      background: ${theme.colors.white};
      opacity: 0.17;
      margin: 0 2.4rem 0 0 !important;

      @media (max-width: 991px) {
        width: 1rem;
        height: 1rem;
        margin: 0 1.6rem 0 0 !important;
      }
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  `}
`

export const WrapperContentSlider = styled.article`
  display: grid;
  grid-template-columns: 1fr 45.3rem;
  align-items: center;

  img {
    min-height: auto;
    max-height: 72vh;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    img {
      max-height: 30vh !important;
    }

    ${W} {
      margin-top: 7.4rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: 1fr;

    img {
      max-height: 52vh !important;
    }

    ${W} {
      margin-bottom: 9rem;
    }
  }
`

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 18.6rem);

  @media (max-width: 767px) {
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: calc(100vh - 14.2rem);
  }
`
