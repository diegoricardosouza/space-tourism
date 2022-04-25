import { IconWrapper } from 'components/Menu/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
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
`

export const LineMenu = styled.div`
  ${({ theme }) => css`
    width: 47.3rem;
    height: 0.1rem;
    background: ${theme.colors.white};
    opacity: 0.25;
    position: absolute;
    z-index: 1;
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
`
