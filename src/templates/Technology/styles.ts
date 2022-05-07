import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 5rem;
`

export const WrapperContainer = styled.div``

export const WrapperSlider = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    margin-left: calc((100vw - 108rem) / 2);

    @media (max-width: 767px) {
      margin-left: 0;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin-left: 0;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      margin-left: 0;
    }

    @media (min-width: 1400px) {
      margin-top: 2.6rem;
    }

    .swiper {
      width: 100%;
      height: 50rem;

      @media (max-width: 767px) {
        height: calc(100vh - 17rem);
      }

      @media (min-width: 768px) and (max-width: 991px) {
        height: calc(100vh - 17rem);
      }

      .swiper-slide-active {
        z-index: 2;
      }
    }

    .swiper-pagination {
      left: 0;
      right: auto;
      transform: translateY(-50%);

      @media (max-width: 767px) {
        width: 100%;
        display: flex;
        justify-content: center;
        top: 44%;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        width: 100%;
        display: flex;
        justify-content: center;
        top: 52%;
      }

      .swiper-pagination-bullet {
        width: 8rem;
        height: 8rem;
        background: transparent;
        border: 0.1rem solid rgba(255, 255, 255, 0.25);
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.large};
        line-height: 3.7rem;
        transition: all 0.2s ease-in;
        margin: 3.2rem 0;

        @media (max-width: 767px) {
          width: 4rem;
          height: 4rem;
          font-size: 1.6rem;
          line-height: 1.8rem;
          margin: 0 0.8rem;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          margin: 0 0.8rem;
          width: 6rem;
          height: 6rem;
          font-size: 2.4rem;
          line-height: 2.8rem;
        }

        &:hover {
          border-color: ${theme.colors.white};
        }
      }

      .swiper-pagination-bullet-active {
        background: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  `}
`

export const WrapperContentSlider = styled.article`
  display: flex;
  align-items: center;
  height: 50rem;
  overflow: hidden;

  @media (max-width: 767px) {
    flex-direction: column;
    height: calc(100vh - 17rem);
    padding-top: 3.2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    height: calc(100vh - 17rem);
    padding-top: 5rem;
  }
`

export const WrapperContent = styled.div`
  margin-left: 16rem;

  @media (max-width: 767px) {
    order: 2;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    order: 2;
    margin: 0 auto;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-left: 9.5rem;
  }
`

export const WrapperImage = styled.div`
  position: absolute;
  right: 0;
  height: 50rem;
  overflow: hidden;

  @media (max-width: 767px) {
    position: relative;
    left: 0;
    order: 1;
    height: 17rem;
    width: 100%;
    margin-bottom: 10rem;

    span {
      display: block !important;
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    position: relative;
    left: 0;
    order: 1;
    height: 31rem;
    width: 100%;
    margin-bottom: 16rem;

    span {
      display: block !important;
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 40rem;
  }
`
