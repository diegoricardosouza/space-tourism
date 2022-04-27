import * as S from './styles'

export type BreadcrumbProps = {
  number?: string
  title: string
}

const Breadcrumb = ({ number, title }: BreadcrumbProps) => {
  return (
    <S.Wrapper>
      <S.WrapperNumber>
        <S.Number>{number}</S.Number>
        <S.Title>{title}</S.Title>
      </S.WrapperNumber>
    </S.Wrapper>
  )
}

export default Breadcrumb
