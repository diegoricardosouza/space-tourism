import Header from 'components/Header'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  image?: string
  imageTable?: string
  imageMobile?: string
}

const Base = ({
  children,
  image = 'none',
  imageTable = 'none',
  imageMobile = 'none'
}: BaseTemplateProps) => {
  return (
    <S.Wrapper
      bgImage={image}
      bgImageTablet={imageTable}
      bgImageMobile={imageMobile}
    >
      <Header />
      {children}
    </S.Wrapper>
  )
}

export default Base
