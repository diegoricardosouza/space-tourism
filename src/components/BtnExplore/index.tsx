import Link from 'next/link'
import * as S from './styles'

const BtnExplore = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <a>EXPLORE</a>
      </Link>
    </S.Wrapper>
  )
}

export default BtnExplore
