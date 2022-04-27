import * as S from './styles'

export type TabContentProps = {
  title: string
  content: string
}

const TabContent = ({ title, content }: TabContentProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.Wrapper>
    </>
  )
}

export default TabContent
