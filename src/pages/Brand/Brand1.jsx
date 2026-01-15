import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

import Ready from "../../components/Ready/Ready"

const Brand1 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
  const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
      // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
      if (window.scrollY > 200) {
        setIsImageVisible(true); // 이미지가 보이도록
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
    }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

    return () => clearTimeout(timer);
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
        <title>천안 휴먼빌 퍼스트시티 - 브랜드 소개</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티는 천안 서북구 부대동 성성호수공원 인근에 위치한 신도시 핵심 대단지입니다. 수도권 1호선 두정역과 예정된 부성역, 천안IC 등 뛰어난 교통 프리미엄과 자연친화 입지를 동시에 갖춘 브랜드 아파트로, 1,541세대 규모의 미래가치 높은 주거공간을 제공합니다."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 모델하우스, 천안 아파트 분양, 성성호수공원, 부성역 예정, 천안 대단지"
        />
        <link rel="canonical" href="https://www.model-house.co.kr/Brand/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="천안 휴먼빌 퍼스트시티 - 브랜드 소개"
        />
        <meta
          property="og:description"
          content="천안 서북구 성성호수공원 중심의 자연과 도시가 어우러진 프리미엄 주거 브랜드, 천안 휴먼빌 퍼스트시티를 소개합니다. 수도권 전철과 고속도로 접근성, 쾌적한 생활 인프라, 브랜드 대단지의 가치를 모두 갖춘 미래형 주거단지입니다."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/Brand/intro"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 브랜드 소개"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티는 성성호수공원과 연결된 자연친화 입지에 조성되는 1,500세대 규모의 프리미엄 대단지입니다. 전철과 고속도로가 인접한 뛰어난 교통환경과 함께, 장기적 가치 상승이 기대되는 신흥 주거 타운의 중심에서 새로운 주거 패러다임을 제시합니다."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/Brand/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                                        {
                                            "@context": "https://schema.org",
                                            "@type": "WebPage",
                                            "name": "천안 휴먼빌 퍼스트시티 - 브랜드 소개",
                                            "description": "천안 휴먼빌 퍼스트시티는 천안 서북구 부대동 성성호수공원 인근에 들어서는 자연친화형 신도시 주거단지입니다. 수도권 전철 1호선과 고속도로 접근성, 브랜드 대단지의 프리미엄과 미래가치를 동시에 갖춘 새로운 라이프스타일을 제안합니다.",
                                            "url": "https://www.model-house.co.kr/Brand/intro"
                                        }
                                        `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="천안 휴먼빌 퍼스트시티" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 브랜드소개
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티는 성성호수공원과 도시 인프라를 동시에 누릴 수 있는 천안 서북부의 신흥 주거 중심지에 위치한 1,541세대 대단지입니다.
        자연 친화적 설계와 브랜드 프리미엄을 바탕으로 장기적 미래가치를 갖춘 안정적인 주거 공간을 제공합니다.
        수도권 전철과 고속도로 접근성, 다양한 생활 편의시설과 함께 새로운 기준의 라이프스타일을 제시하는 천안 휴먼빌 퍼스트시티의
        브랜드 철학을 경험해보세요.
      </p>

      <div
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      >
        <div>생활의 모든 것을 한걸음에</div>
        <div>천안 휴먼빌 퍼스트시티, 성성호수공원 신도시의 중심에 서다</div>
      </div>


      <img
        className={`${styles.image} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="천안 휴먼빌 퍼스트시티brand-Image1"
      />

  
      <Footer />
    </div>
  );
};

export default Brand1;
