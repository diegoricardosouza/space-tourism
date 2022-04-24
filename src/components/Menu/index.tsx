import Link from 'next/link'
import * as S from './styles'

const Menu = () => {
  return (
    <S.Wrapper>
      <ul>
        <li>
          <Link href="/">
            <a>
              <span>00</span> Home
            </a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>
              <span>01</span> Destination
            </a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>
              <span>02</span> Crew
            </a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>
              <span>03</span> Technology
            </a>
          </Link>
        </li>
      </ul>
    </S.Wrapper>
  )
}

export default Menu
