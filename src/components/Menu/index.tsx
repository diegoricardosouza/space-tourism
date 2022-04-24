import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper
        aria-label="Abrir Menu"
        onClick={() => setIsOpen((prevState) => (prevState ? false : true))}
        isOpen={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </S.IconWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <li>
          <Link href="/">
            <a>
              <span>00</span> Home
            </a>
          </Link>
        </li>

        <li>
          <Link href="/destination">
            <a>
              <span>01</span> Destination
            </a>
          </Link>
        </li>

        <li>
          <Link href="/crew">
            <a>
              <span>02</span> Crew
            </a>
          </Link>
        </li>

        <li>
          <Link href="/tecnology">
            <a>
              <span>03</span> Technology
            </a>
          </Link>
        </li>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
