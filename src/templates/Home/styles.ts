import styled from 'styled-components'
import { Wrapper as W } from 'templates/Base/styles'

export const Wrapper = styled.main`
  display: flex;
  align-items: flex-end;
`

export const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`
export const WrapperBase = styled.div`
  ${W} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 13.1rem;

    @media (max-width: 767px) {
      padding-bottom: 4.8rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      padding-bottom: 9rem;
    }
  }
`
