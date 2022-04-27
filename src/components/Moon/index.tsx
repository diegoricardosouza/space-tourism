import * as S from './styles'

export type MoonProps = {
  img?: string
  name?: string
}

const Moon = ({ img, name }: MoonProps) => {
  return (
    <S.Wrapper>
      <S.Moon src={img} alt={name} title={name} />
    </S.Wrapper>
  )
}

export default Moon
