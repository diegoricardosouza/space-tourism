import * as S from './styles'

export type ContentSliderProps = {
  title: string
  subtitle: string
  content: string
}

const ContentSlider = ({ title, subtitle, content }: ContentSliderProps) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Title>{title}</S.Title>
      </S.WrapperTitle>

      <S.Content>{content}</S.Content>
    </S.Wrapper>
  )
}

export default ContentSlider
