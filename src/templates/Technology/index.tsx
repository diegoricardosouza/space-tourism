import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'

import 'swiper/css'
import 'swiper/css/pagination'
import ContentTech from 'components/ContentTech'
import Image from 'next/image'
import mock from './mock'

const Technology = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    }
  }

  return (
    <Base
      image="/img/bg-technology.jpg"
      imageTable="/img/bg-technology.jpg"
      imageMobile="/img/bg-technology.jpg"
    >
      <S.Wrapper>
        <>
          <S.WrapperContainer>
            <Container>
              <Breadcrumb number="03" title="SPACE LAUNCH 101" />
            </Container>

            <S.WrapperSlider>
              <Swiper
                direction={'vertical'}
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
              >
                {mock.map((item, index) => (
                  <SwiperSlide key={index}>
                    <S.WrapperContentSlider>
                      <S.WrapperContent>
                        <ContentTech
                          title={item.name}
                          subtitle={item.subtitle}
                          content={item.content}
                        />
                      </S.WrapperContent>

                      <S.WrapperImage>
                        <Image
                          src={item.img}
                          alt={item.name}
                          title={item.name}
                          width={515}
                          height={527}
                          loading="lazy"
                          objectFit="cover"
                        />
                      </S.WrapperImage>
                    </S.WrapperContentSlider>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.WrapperSlider>
          </S.WrapperContainer>
        </>
      </S.Wrapper>
    </Base>
  )
}

export default Technology
