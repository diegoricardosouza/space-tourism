import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 767px) {
      max-width: 17rem !important;
      margin: 0 auto;
      text-align: center;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      max-width: 30rem !important;
      margin: 0 auto;
      text-align: center;
    }
  }
`
