import Image from 'next/image'
import * as S from './styles'

export type ImageSliderProps = {
  img: string
  name?: string
  width: number
  height: number
}

const ImageSlider = ({ img, name, width, height }: ImageSliderProps) => {
  return (
    <S.Wrapper>
      <Image
        src={img}
        alt={name}
        title={name}
        width={width}
        height={height}
        loading="lazy"
      />

      <S.Line />
    </S.Wrapper>
  )
}

export default ImageSlider
