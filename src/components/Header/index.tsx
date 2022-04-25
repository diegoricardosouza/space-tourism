import * as S from './styles'
import Container from 'components/Container'
import Logo from 'components/Logo'
import Menu from 'components/Menu'

const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.WrapperHeader>
          <S.WrapperLogo>
            <Logo />
          </S.WrapperLogo>

          <S.LineMenu />

          <Menu />

          <S.BgMenu />
        </S.WrapperHeader>
      </Container>
    </S.Wrapper>
  )
}

export default Header
