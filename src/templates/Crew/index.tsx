import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import ContentSlider from 'components/ContentSlider'
import Base from 'templates/Base'
import * as S from './styles'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import ImageSlider from 'components/ImageSlider'

const Crew = () => {
  return (
    <Base
      image="/img/bg-crew.jpg"
      imageTable="/img/bg-crew.jpg"
      imageMobile="/img/bg-crew.jpg"
    >
      <S.Wrapper>
        <Container>
          <S.WrapperContainer>
            <Breadcrumb number="02" title="Meet Your Crew" />

            <S.WrapperSlider>
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <S.WrapperContentSlider>
                    <ContentSlider
                      title="Douglas Hurley"
                      subtitle="Commander"
                      content="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                    />

                    <ImageSlider
                      img="/img/crew/douglas.png"
                      width={454}
                      height={654}
                      name="Douglas Hurley"
                    />
                  </S.WrapperContentSlider>
                </SwiperSlide>

                <SwiperSlide>
                  <S.WrapperContentSlider>
                    <ContentSlider
                      title="MARK SHUTTLEWORTH"
                      subtitle="Mission Specialist"
                      content="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                    />

                    <ImageSlider
                      img="/img/crew/mark.png"
                      width={454}
                      height={654}
                      name="MARK SHUTTLEWORTH"
                    />
                  </S.WrapperContentSlider>
                </SwiperSlide>

                <SwiperSlide>
                  <S.WrapperContentSlider>
                    <ContentSlider
                      title="Victor Glover"
                      subtitle="PILOT"
                      content="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                    />

                    <ImageSlider
                      img="/img/crew/victor.png"
                      width={454}
                      height={654}
                      name="Victor Glover"
                    />
                  </S.WrapperContentSlider>
                </SwiperSlide>

                <SwiperSlide>
                  <S.WrapperContentSlider>
                    <ContentSlider
                      title="Anousheh Ansari"
                      subtitle="Flight Engineer"
                      content="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
                    />

                    <ImageSlider
                      img="/img/crew/anousheh.png"
                      width={454}
                      height={654}
                      name="Anousheh Ansari"
                    />
                  </S.WrapperContentSlider>
                </SwiperSlide>
              </Swiper>
            </S.WrapperSlider>
          </S.WrapperContainer>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default Crew
