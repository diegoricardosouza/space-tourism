import Base from 'templates/Base'
import BtnExplore from 'components/BtnExplore'
import Container from 'components/Container'
import HomeContent from 'components/HomeContent'

import * as S from './styles'

const Home = () => {
  return (
    <S.WrapperBase>
      <Base
        image="/img/bg-home.jpg"
        imageTable="/img/bg-tablet.jpg"
        imageMobile="/img/bg-mobile.jpg"
      >
        <S.Wrapper>
          <Container>
            <S.WrapperContent>
              <HomeContent />

              <BtnExplore />
            </S.WrapperContent>
          </Container>
        </S.Wrapper>
      </Base>
    </S.WrapperBase>
  )
}

export default Home
