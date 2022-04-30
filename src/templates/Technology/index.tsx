import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'

const Technology = () => {
  return (
    <Base
      image="/img/bg-technology.jpg"
      imageTable="/img/bg-technology.jpg"
      imageMobile="/img/bg-technology.jpg"
    >
      <S.Wrapper>
        <Container>
          <S.WrapperContainer>
            <Breadcrumb number="03" title="SPACE LAUNCH 101" />
          </S.WrapperContainer>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default Technology
