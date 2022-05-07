import Head from 'next/head'
import * as Tabs from '@radix-ui/react-tabs'

import Base from 'templates/Base'
import Container from 'components/Container'
import Breadcrumb from 'components/Breadcrumb'
import Moon from 'components/Moon'
import TabContent from 'components/TabContent'
import FooterTab from 'components/FooterTab'
import mock from './mock'

import * as S from './styles'

const Destination = () => {
  return (
    <S.WrapperBase>
      <Head>
        <title>Destination | Space Tourism</title>
      </Head>

      <Base
        image="/img/bg-destination.jpg"
        imageTable="/img/bg-destination.jpg"
        imageMobile="/img/bg-destination.jpg"
      >
        <Container>
          <S.Wrapper>
            <Breadcrumb number="01" title="Pick your destination" />

            <S.Tabs defaultValue="tab1">
              <S.WrapperNavTab>
                <S.TabsList aria-label="tabs">
                  <S.TabsTrigger value="tab1">MOON</S.TabsTrigger>
                  <S.TabsTrigger value="tab2">MARS</S.TabsTrigger>
                  <S.TabsTrigger value="tab3">EUROPA</S.TabsTrigger>
                  <S.TabsTrigger value="tab4">TITAN</S.TabsTrigger>
                </S.TabsList>
              </S.WrapperNavTab>

              {mock.map((item, index) => (
                <Tabs.Content value={item.tab} key={index}>
                  <S.WrapperContentTabs>
                    <Moon img={item.img} name={item.title} />

                    <S.WrapperContent>
                      <TabContent title={item.title} content={item.content} />

                      <S.Line />

                      <FooterTab
                        distanceTitle={item.footer.dTitle}
                        distanceContent={item.footer.dContent}
                        timeTitle={item.footer.tTitle}
                        timeContent={item.footer.tContent}
                      />
                    </S.WrapperContent>
                  </S.WrapperContentTabs>
                </Tabs.Content>
              ))}
            </S.Tabs>
          </S.Wrapper>
        </Container>
      </Base>
    </S.WrapperBase>
  )
}

export default Destination
