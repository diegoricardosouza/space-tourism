import * as S from './styles'
import Base from 'templates/Base'
import Container from 'components/Container'
import Breadcrumb from 'components/Breadcrumb'
import * as Tabs from '@radix-ui/react-tabs'
import Moon from 'components/Moon'
import TabContent from 'components/TabContent'
import FooterTab from 'components/FooterTab'

const Destination = () => {
  return (
    <S.WrapperBase>
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

              <Tabs.Content value="tab1">
                <S.WrapperContentTabs>
                  <Moon img="/img/moons/moon.png" name="Moon" />

                  <S.WrapperContent>
                    <TabContent
                      title="MOON"
                      content="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                    />

                    <S.Line />

                    <FooterTab
                      distanceTitle="AVG. DISTANCE"
                      distanceContent="384,400 km"
                      timeTitle="Est. travel time"
                      timeContent="3 days"
                    />
                  </S.WrapperContent>
                </S.WrapperContentTabs>
              </Tabs.Content>

              <Tabs.Content value="tab2">
                <S.WrapperContentTabs>
                  <Moon img="/img/moons/mars.png" name="Moon" />

                  <S.WrapperContent>
                    <TabContent
                      title="MARS"
                      content="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                    />

                    <S.Line />

                    <FooterTab
                      distanceTitle="AVG. DISTANCE"
                      distanceContent="225 MIL. km"
                      timeTitle="Est. travel time"
                      timeContent="9 months"
                    />
                  </S.WrapperContent>
                </S.WrapperContentTabs>
              </Tabs.Content>

              <Tabs.Content value="tab3">
                <S.WrapperContentTabs>
                  <Moon img="/img/moons/europa.png" name="Moon" />

                  <S.WrapperContent>
                    <TabContent
                      title="EUROPA"
                      content="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                    />

                    <S.Line />

                    <FooterTab
                      distanceTitle="AVG. DISTANCE"
                      distanceContent="628 MIL. km"
                      timeTitle="Est. travel time"
                      timeContent="3 years"
                    />
                  </S.WrapperContent>
                </S.WrapperContentTabs>
              </Tabs.Content>

              <Tabs.Content value="tab4">
                <S.WrapperContentTabs>
                  <Moon img="/img/moons/titan.png" name="Moon" />

                  <S.WrapperContent>
                    <TabContent
                      title="TITAN"
                      content="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                    />

                    <S.Line />

                    <FooterTab
                      distanceTitle="AVG. DISTANCE"
                      distanceContent="1.6 BIL. km"
                      timeTitle="Est. travel time"
                      timeContent="7 years"
                    />
                  </S.WrapperContent>
                </S.WrapperContentTabs>
              </Tabs.Content>
            </S.Tabs>
          </S.Wrapper>
        </Container>
      </Base>
    </S.WrapperBase>
  )
}

export default Destination
