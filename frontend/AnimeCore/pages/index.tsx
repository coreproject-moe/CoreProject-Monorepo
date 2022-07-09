import {
    ActionIcon,
    createStyles,
    Grid,
    Progress,
    Text,
    Title,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import {
    Autoplay,
    EffectFade,
    Lazy,
    Mousewheel,
    Navigation,
    Pagination as SwiperPagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCountdownTimer } from 'use-countdown-timer';

import GenreSlide from '@/components/swiper/GenreSlide';
import MainHeroSlide from '@/components/swiper/MainHeroSlide';
const useStyles = createStyles((theme) => ({
    swiper__mainhero__pagination: {
        display: 'flex',
        justifyContent: 'center',

        [theme.fn.smallerThan('md')]: {
            width: 150,
        },
        [theme.fn.largerThan('md')]: {
            width: 270,
        },
    },
}));
const Home: NextPage = () => {
    const SWIPER_DELAY = 5 * 1000; // Miliseconds

    const { classes } = useStyles();

    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [mainHeroSwiper, setMainHeroSwiper] = useState<SwiperType | null>(
        null
    );
    const [sliderProgress, setSliderProgress] = useState<number>(0);

    // Expire after 10 seconds
    const { countdown, start, reset, pause } = useCountdownTimer({
        timer: SWIPER_DELAY,
        interval: 200,
        autostart: true,
        onExpire: () => {
            mainHeroSwiper?.slideNext();
        },
    });

    useEffect(() => {
        const value = Math.round(
            (100 / SWIPER_DELAY) * (SWIPER_DELAY - countdown)
        );
        setSliderProgress(value);
    }, [SWIPER_DELAY, countdown]);

    useEffect(() => {
        setTimeout(() => {
            showNotification({
                title: 'This site is still WIP',
                message: `Thanks for visiting AnimeCore.This site is still a work in-progress,so there's quite a bit of limited functionality.Feel free to check us over at Github - https://github.com/baseplate-admin/coreProject`,
                styles: (theme) => ({
                    root: {
                        '&::before': { backgroundColor: theme.colors.blue[4] },
                    },
                }),
            });
        });
    }, []);

    const data = [
        {
            animeStudio: 'Kyoto Animations',
            animeTitle: 'Hyouka',
            animeAirTime: 'Spring 2012',
            animeEpisodeCount: 22,
            animeSummary: `High school freshman Houtarou Oreki has but one goal:High school freshman Houtarou Oreki has but one goal: to lead a gray life while conserving as much energy as he can. Unfortunately, his peaceful days come to an end when his older sister, Tomoe, forces him to save the memberless Classics Club from disbandment.\n\nLuckily, Oreki's predicament seems to be over when he heads to the clubroom and discovers that his fellow first-year, Eru Chitanda, has already become a member. However, despite his obligation being fulfilled, Oreki finds himself entangled by Chitanda's curious and bubbly personality, soon joining the club of his own volition.\n\nHyouka follows the four members of the Classics Club—including Oreki's friends Satoshi Fukube and Mayaka Ibara—as they, driven by Chitanda's insatiable curiosity, solve the trivial yet intriguing mysteries that permeate their daily lives.`,
            backgroundImage: '/images/Hyouka-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/6686/large.jpg',
        },
        {
            animeStudio: 'Studio DEEN',
            animeTitle: 'KonoSuba',
            animeAirTime: 'Spring 2012',
            animeEpisodeCount: 10,
            animeSummary: `After dying a laughable and pathetic death on his way back from buying a game, high school student and recluse Kazuma Satou finds himself sitting before a beautiful but obnoxious goddess named Aqua. She provides the NEET with two options: continue on to heaven or reincarnate in every gamer's dream—a real fantasy world! Choosing to start a new life, Kazuma is quickly tasked with defeating a Demon King who is terrorizing villages. But before he goes, he can choose one item of any kind to aid him in his quest, and the future hero selects Aqua. But Kazuma has made a grave mistake—Aqua is completely useless!\n\nUnfortunately, their troubles don't end here; it turns out that living in such a world is far different from how it plays out in a game. Instead of going on a thrilling adventure, the duo must first work to pay for their living expenses. Indeed, their misfortunes have only just begun!`,
            backgroundImage: '/images/Konosuba-poster.png',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/10941/large.jpg',
        },
        {
            animeEpisodeCount: 13,
            animeStudio: 'Polygon Pictures',
            animeAirTime: 'Winter 2016',
            animeTitle: 'Ajin',
            animeSummary: `Mysterious immortal humans known as "Ajin" first appeared 17 years ago in Africa. Upon their discovery, they were labeled as a threat to mankind, as they might use their powers for evil and were incapable of being destroyed. Since then, whenever an Ajin is found within society, they are to be arrested and taken into custody immediately.\n\nStudying hard to become a doctor, Kei Nagai is a high schooler who knows very little about Ajin, only having seen them appear in the news every now and then. Students are taught that these creatures are not considered to be human, but Kei doesn't pay much attention in class. As a result, his perilously little grasp on this subject proves to be completely irrelevant when he survives an accident that was supposed to claim his life, signaling his rebirth as an Ajin and the start of his days of torment. However, as he finds himself alone on the run from the entire world, Kei soon realizes that more of his species may be a lot closer than he thinks.`,
            backgroundImage: '/images/Ajin-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/11368/large.jpg',
        },
        {
            animeEpisodeCount: 24,
            animeStudio: 'MAPPA',
            animeAirTime: 'Fall 2020',
            animeTitle: 'Jujutsu Kaisen',
            animeSummary: `Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."\n\nYuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.`,
            backgroundImage: '/images/Jujutsu-Kaisen-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/manga/40815/poster_image/large-236780bcf03f1ae4155741f0b7f2910e.jpeg',
        },
        {
            animeEpisodeCount: 12,
            animeStudio: 'SILVER LINK',
            animeAirTime: 'Spring 2020',
            animeTitle: 'Hamefura',
            animeSummary: `Most people would prefer being the protagonist of a world full of adventure, be it in a game or in another world. But, unfortunately, a certain girl is not so lucky. Regaining the memories of her past life, she realizes that she was reborn in the world of Fortune Lover—one of the games she used to play.\n\nUnfortunately, the character she was reincarnated into—Catarina Claes—is the game's main antagonist, who faces utter doom in every ending. Using her extensive knowledge of the game, she takes it upon herself to escape from the chains of this accursed destiny.\n\nHowever, this will not be an easy feat, especially since she needs to be cautious as to not set off death flags that may speed up the impending doom she is trying to avoid. Even so, to make a change that will affect the lives of everyone around her, she strives—not as the heroine—but as the villainess.`,
            backgroundImage: '/images/Hamefura-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/43238/large.jpg',
        },
        {
            animeEpisodeCount: 25,
            animeStudio: 'Kinema Citrus',
            animeAirTime: 'Winter 2019',
            animeTitle: 'Tate no Yuusha no Nariagari',
            animeSummary: `The Four Cardinal Heroes are a group of ordinary men from modern-day Japan summoned to the kingdom of Melromarc to become its saviors. Melromarc is a country plagued by the Waves of Catastrophe that have repeatedly ravaged the land and brought disaster to its citizens for centuries. The four heroes are respectively bestowed a sword, spear, bow, and shield to vanquish these Waves. Naofumi Iwatani, an otaku, becomes cursed with the fate of being the "Shield Hero." Armed with only a measly shield, Naofumi is belittled and ridiculed by his fellow heroes and the kingdom's people due to his weak offensive capabilities and lackluster personality.\n\nWhen the heroes are provided with resources and comrades to train with, Naofumi sets out with the only person willing to train alongside him, Malty Melromarc. He is soon betrayed by her, however, and becomes falsely accused of taking advantage of her. Naofumi then becomes heavily discriminated against and hated by the people of Melromarc for something he didn't do. With a raging storm of hurt and mistrust in his heart, Naofumi begins his journey of strengthening himself and his reputation. Further along however, the difficulty of being on his own sets in, so Naofumi buys a demi-human slave on the verge of death named Raphtalia to accompany him on his travels.\n\nAs the Waves approach the kingdom, Naofumi and Raphtalia must fight for the survival of the kingdom and protect the people of Melromarc from their ill-fated future.`,
            backgroundImage: '/images/Tate-No-Yuusha-No-Nariagari-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/13593/large.jpg',
        },
        {
            animeEpisodeCount: 13,
            animeStudio: 'A1-Pictures',
            animeAirTime: 'Spring 2022',
            animeTitle: 'Kaguya-sama: Ultra Romantic',
            animeSummary: `The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.`,
            backgroundImage: '/images/Kaguya-Sama-Ultra-Romantic-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/43691/poster_image/large-6fff692359faff490ba00d72fb48b9a3.jpeg',
        },
        {
            animeEpisodeCount: 12,
            animeStudio: 'MAPPA',
            animeAirTime: 'Fall 2014',
            animeTitle: 'Shingeki no Bahamut: GENESIS',
            animeSummary: `Thousands of years ago, the ancient dragon Bahamut wrought havoc upon the land of Mistarcia, a world where both gods and demons live amongst mankind. Working together to prevent the world's destruction, the rival deities barely managed to seal Bahamut, agreeing to split the key between them so that the dragon would remain eternally imprisoned.\n\nWith the world safe from the destruction of Bahamut, it is business as usual for bounty hunters like Favaro Leone. Living a laid-back, self-serving lifestyle, the amoral Favaro goes about his work while on the run from fellow bounty hunter Kaisar Lidfard, a righteous man who swears vengeance upon Favaro. However, Favaro's carefree life is thrown into chaos when he meets Amira, a mysterious woman who holds half of the key to the world's fragile peace.\n\nShingeki no Bahamut: Genesis tells the story of a group of unlikely heroes who find themselves caught in the middle of an epic clash between gods and demons, forced to carve their own path in the face of the imminent storm.`,
            backgroundImage: '/images/Shingeki-No-Basamut-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/13013/large.jpg',
        },
        {
            animeEpisodeCount: 12,
            animeStudio: 'A1-Pictures',
            animeAirTime: 'Winter 2016',
            animeTitle: 'Boku dake ga Inai Machi',
            animeSummary: `When tragedy is about to strike, Satoru Fujinuma finds himself sent back several minutes before the accident occurs. The detached, 29-year-old manga artist has taken advantage of this powerful yet mysterious phenomenon, which he calls "Revival," to save many lives.\n\nHowever, when he is wrongfully accused of murdering someone close to him, Satoru is sent back to the past once again, but this time to 1988, 18 years in the past. Soon, he realizes that the murder may be connected to the abduction and killing of one of his classmates, the solitary and mysterious Kayo Hinazuki, that took place when he was a child. This is his chance to make things right.\n\nBoku dake ga Inai Machi follows Satoru in his mission to uncover what truly transpired 18 years ago and prevent the death of his classmate while protecting those he cares about in the present.`,
            backgroundImage: '/images/Boku-dake-ga-inai-machi-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/11110/large.jpg',
        },
        {
            animeEpisodeCount: 12,
            animeStudio: 'bones',
            animeAirTime: 'Spring 2016',
            animeTitle: 'Bungou Stray Dogs',
            animeSummary: `For weeks, Atsushi Nakajima's orphanage has been plagued by a mystical tiger that only he seems to be unaware of. Suspected to be behind the strange incidents, the 18-year-old is abruptly kicked out of the orphanage and left hungry, homeless, and wandering through the city.\n\nWhile starving on a riverbank, Atsushi saves a rather eccentric man named Osamu Dazai from drowning. Whimsical suicide enthusiast and supernatural detective, Dazai has been investigating the same tiger that has been terrorizing the boy. Together with Dazai's partner Doppo Kunikida, they solve the mystery, but its resolution leaves Atsushi in a tight spot. As various odd events take place, Atsushi is coerced into joining their firm of supernatural investigators, taking on unusual cases the police cannot handle, alongside his numerous enigmatic co-workers.`,
            backgroundImage: '/images/Bungou-Stray-Dogs-poster.jpg',
            backgroundBanner:
                'https://media.kitsu.io/anime/poster_images/11339/large.jpg',
        },
    ];

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
                onSwiper={setSwiper}
            >
                <SwiperSlide>
                    <Swiper
                        modules={[
                            EffectFade,
                            Autoplay,
                            Lazy,
                            Navigation,
                            SwiperPagination,
                        ]}
                        pagination={{
                            el: '.swiper__mainhero__pagination',
                        }}
                        effect="fade"
                        direction="horizontal"
                        navigation={{
                            nextEl: '.mainhero__next__el',
                            prevEl: '.mainhero__previous__el',
                        }}
                        onInit={() => {
                            // Start
                            start();
                        }}
                        loop
                        lazy
                        preloadImages={false}
                        onSwiper={setMainHeroSwiper}
                        onSlideChange={() => {
                            // Restart
                            reset();
                            start();
                        }}
                        className="hero"
                    >
                        {data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <MainHeroSlide
                                        animeTitle={item.animeTitle}
                                        animeSummary={item.animeSummary}
                                        animeEpisodeCount={
                                            item.animeEpisodeCount
                                        }
                                        animeStudio={item.animeStudio}
                                        animeAirTime={item.animeAirTime}
                                        backgroundImage={item.backgroundImage}
                                        backgroundBanner={item.backgroundBanner}
                                        pause={pause}
                                        start={start}
                                        swiper={swiper}
                                        sliderProgress={sliderProgress}
                                        mainHeroSwiper={mainHeroSwiper}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Home;
