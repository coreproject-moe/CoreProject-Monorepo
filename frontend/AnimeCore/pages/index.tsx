import type { NextPage } from 'next';
import { MainHero } from '../components/swiper/MainHero';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Autoplay,
    EffectFade,
    Mousewheel,
    Navigation,
    Pagination as SwiperPagination,
} from 'swiper';
import { Grid, Title } from '@mantine/core';

const Home: NextPage = () => {
    return (
        <>
            <Swiper
                speed={600}
                spaceBetween={0}
                direction="vertical"
                slidesPerView="auto"
                modules={[Mousewheel]}
                mousewheel={{ sensitivity: 0.001 }}
                simulateTouch={false}
            >
                <SwiperSlide>
                    <Swiper
                        modules={[
                            EffectFade,
                            Autoplay,
                            Navigation,
                            SwiperPagination,
                        ]}
                        autoplay={true}
                        navigation={{
                            nextEl: '.mainhero__next__el',
                            prevEl: '.mainhero__previous__el',
                        }}
                        pagination={{
                            enabled: true,
                            el: '.swiper__mainhero__pagination',
                        }}
                        effect="fade"
                        direction="horizontal"
                    >
                        {Array(10)
                            .fill(1)
                            .map((el, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <MainHero backgroundImage="/images/Hyouka-poster.png" />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </SwiperSlide>
            </Swiper>
            <Title
                sx={(theme) => ({
                    minHeight: '10vh',
                    backgroundColor: 'rgb(7, 5, 25)',
                    display: 'flex',

                    [theme.fn.smallerThan('md')]: {
                        minHeight: '0vh',
                        display: 'none',
                    },
                })}
            >
                <Grid
                    sx={(theme) => ({
                        width: '100%',
                    })}
                >
                    <Grid.Col
                        span={3}
                        offset={3}
                        sx={(theme) => ({
                            display: 'grid',
                            justifyContent: 'flex-end',
                        })}
                    >
                        <div className="swiper__mainhero__pagination"></div>
                    </Grid.Col>
                    <Grid.Col span={3} offset={3}>
                        2
                    </Grid.Col>
                </Grid>
            </Title>
        </>
    );
};

export default Home;
