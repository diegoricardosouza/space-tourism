import * as S from './styles'

export type ContentTechProps = {
  title: string
  subtitle: string
  content: string
}

const ContentTech = ({ title, subtitle, content }: ContentTechProps) => {
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

export default ContentTech
