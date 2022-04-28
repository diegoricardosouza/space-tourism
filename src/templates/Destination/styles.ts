import styled, { css } from 'styled-components'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export const WrapperBase = styled.div``

export const Wrapper = styled.section`
  margin-top: 5rem;

  @media (max-width: 767px) {
    margin-top: 2.5rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 4rem;
    padding-bottom: 4rem;
  }
`
export const WrapperContentTabs = styled.article`
  display: grid;
  grid-template-columns: 1fr 44.5rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`

export const WrapperContent = styled.div`
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 57.5rem;
    margin: 0 auto;
    text-align: center;
  }
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.1rem;
    background: ${theme.colors.blueLight};
    margin-top: 5.4rem;
    margin-bottom: 2.8rem;

    @media (max-width: 767px) {
      margin-top: 3.2rem;
      margin-bottom: 3.2rem;
    }
  `}
`

export const WrapperNavTab = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

const StyledTabs = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (max-width: 767px) {
    margin-top: 3.2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 6rem;
  }
`

const StyledList = styled(TabsPrimitive.List)`
  display: flex;
  margin-bottom: 2.5rem;
  width: 44.5rem;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    justify-content: center;
  }
`

const StyledTrigger = styled(TabsPrimitive.Trigger)`
  ${({ theme }) => css`
    border: 0;
    font-family: ${theme.font.family.barlow};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    text-transform: uppercase;
    color: ${theme.colors.secondary};
    background: transparent;
    cursor: pointer;
    letter-spacing: 0.27rem;
    line-height: 1.9rem;
    margin-right: 3.6rem;
    transition: all 0.2s ease-in;

    &:last-child {
      margin-right: 0;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.3rem;
      background: transparent;
      margin-top: 1.2rem;
      transition: all 0.2s ease-in;
    }

    &[data-state='active'],
    &:hover {
      color: ${theme.colors.white};
    }

    &[data-state='active']::after,
    &:hover::after {
      background: ${theme.colors.white};
    }
  `}
`

export const Tabs = StyledTabs
export const TabsList = StyledList
export const TabsTrigger = StyledTrigger
