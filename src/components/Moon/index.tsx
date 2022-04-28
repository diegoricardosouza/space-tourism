import Image from 'next/image'
import * as S from './styles'

export type MoonProps = {
  img: string
  name?: string
}

const Moon = ({ img, name }: MoonProps) => {
  return (
    <S.Wrapper>
      <Image src={img} alt={name} width={445} height={445} quality="100" />
    </S.Wrapper>
  )
}

export default Moon
