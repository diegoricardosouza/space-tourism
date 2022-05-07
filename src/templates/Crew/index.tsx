import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import Base from 'templates/Base'
import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import ContentSlider from 'components/ContentSlider'
import ImageSlider from 'components/ImageSlider'

import mock from './mock'

import 'swiper/css'
import 'swiper/css/pagination'
import * as S from './styles'

const Crew = () => {
  return (
    <>
      <Head>
        <title>Crew | Space Tourism</title>
      </Head>

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
                  {mock.map((item, index) => (
                    <SwiperSlide key={index}>
                      <S.WrapperContentSlider>
                        <ContentSlider
                          title={item.title}
                          subtitle={item.subtitle}
                          content={item.content}
                        />

                        <ImageSlider
                          img={item.img}
                          width={454}
                          height={654}
                          name={item.title}
                        />
                      </S.WrapperContentSlider>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </S.WrapperSlider>
            </S.WrapperContainer>
          </Container>
        </S.Wrapper>
      </Base>
    </>
  )
}

export default Crew
