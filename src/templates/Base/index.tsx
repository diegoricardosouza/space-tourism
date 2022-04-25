import Header from 'components/Header'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Base
