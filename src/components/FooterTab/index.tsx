import * as S from './styles'

export type FooterTabProps = {
  distanceTitle: string
  distanceContent: string
  timeTitle: string
  timeContent: string
}

const FooterTab = ({
  distanceTitle,
  distanceContent,
  timeTitle,
  timeContent
}: FooterTabProps) => {
  return (
    <S.Wrapper>
      <S.DistanceWrapper>
        <S.Title>{distanceTitle}</S.Title>
        <S.Content>{distanceContent}</S.Content>
      </S.DistanceWrapper>

      <S.TimeWrapper>
        <S.Title>{timeTitle}</S.Title>
        <S.Content>{timeContent}</S.Content>
      </S.TimeWrapper>
    </S.Wrapper>
  )
}

export default FooterTab
