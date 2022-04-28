import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
`

export const Moon = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 767px) {
    max-width: 17rem;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 30rem;
    margin: 0 auto;
    text-align: center;
  }
`
