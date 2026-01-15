import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>천안 휴먼빌 퍼스트시티 - 홍보영상</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 홍보영상은 성성호수공원과 천안 서북 신도시 중심의 자연친화 입지, 1,500세대 브랜드 대단지의 가치와 미래 비전을 감성적 영상미로 담아냅니다. 교통, 설계, 인프라가 조화를 이루는 새로운 주거 기준을 영상으로 확인하세요."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 홍보영상, 천안 모델하우스, 성성호수공원 아파트"
        />
        <link rel="canonical" href="https://www.model-house.co.kr/Brand/video" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="천안 휴먼빌 퍼스트시티 - 홍보영상" />
        <meta
          property="og:description"
          content="천안 서북구 부대동에 위치한 천안 휴먼빌 퍼스트시티의 핵심 가치, 자연과 교통, 생활 인프라를 입체적인 영상미로 표현한 홍보영상을 통해 프리미엄 대단지의 매력을 만나보세요."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/Brand/video"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 홍보영상"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 홍보영상을 통해 성성호수공원 중심의 자연과 교통, 대단지 프리미엄이 어우러진 미래 주거 비전을 지금 만나보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/Brand/video"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
												{
													"@context": "https://schema.org",
													"@type": "WebPage",
													"name": "천안 휴먼빌 퍼스트시티 - 홍보영상",
													"description": "천안 휴먼빌 퍼스트시티의 홍보영상은 성성호수공원과 함께하는 자연친화 입지, 미래가치를 담은 브랜드 대단지의 비전과 특장점을 고화질 영상으로 소개하는 콘텐츠입니다.",
													"url": "https://www.model-house.co.kr/Brand/video"
												}
												`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="홍보영상" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 홍보영상
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티의 홍보영상은 성성호수공원 인근 자연과 도시의 균형 속에서 탄생한
        1,541세대 브랜드 대단지의 핵심 가치와 특장점을 시각적으로 표현한 콘텐츠입니다.
        쾌적한 입지, 교통, 단지 설계, 생활 인프라, 브랜드 가치를 영상으로 소개하여,
        입주를 고려하는 고객에게 직관적이고 감성적인 정보 전달을 제공합니다.
        천안의 미래를 이끄는 휴먼빌 퍼스트시티의 프리미엄을 영상으로 만나보세요.
      </p>

      <div
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      >
        <div>천안 휴먼빌 퍼스트시티가 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>


      <div className={styles.videoContainer}>
        <YouTube
          videoId="ZJPUKJqQm5M"
          opts={{
            width: isMobile ? "400" : "1300",
            height: isMobile ? "300" : "500",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0); // 비디오 종료 시 정지
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Brand2;
