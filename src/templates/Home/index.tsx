import Container from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'

const Home = () => {
  return (
    <Base
      image="/img/bg-home.jpg"
      imageTable="/img/bg-tablet.jpg"
      imageMobile="/img/bg-mobile.jpg"
    >
      <S.Wrapper>
        <Container>Home</Container>
      </S.Wrapper>
    </Base>
  )
}

export default Home
