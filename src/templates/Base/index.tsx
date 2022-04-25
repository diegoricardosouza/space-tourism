import Header from 'components/Header'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  image?: string
}

const Base = ({ children, image = 'none' }: BaseTemplateProps) => {
  return (
    <S.Wrapper bgImage={image}>
      <Header />
      {children}
    </S.Wrapper>
  )
}

export default Base
