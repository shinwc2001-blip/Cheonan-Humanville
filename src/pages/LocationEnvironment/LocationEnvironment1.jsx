import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "빠르게 성장하는 천안 성성지구 중심<br />살수록 높아지는 미래가치",
    contentText:
      "도시개발과 함께 가치가 높아지는 성성지구<br />천안의 핵심 신흥 주거지로 미래가치 기대",
  },
  {
    img: section2Image2,
    titleText: "도보로 누리는<br />성성호수공원과 생활 인프라",
    contentText:
      "단지 인근 성성호수공원에서 누리는 여유로운 자연생활<br />대형마트·병원·은행 등 풍부한 생활편의시설 가까이",
  },
  {
    img: section2Image3,
    titleText: "쾌속 더블역세권 교통환경<br />1호선+KTX 천안아산역 인접",
    contentText:
      "천안 1호선 직산역 도보 이용 가능<br />KTX·SRT 천안아산역과 인접한 광역교통망",
  },
  {
    img: section2Image4,
    titleText: "모두 가까운 원스톱 생활권<br />교육, 쇼핑, 문화까지",
    contentText:
      "초·중·고 도보 통학 가능한 학세권<br />쇼핑몰, 영화관, 복합문화시설까지 가까운 위치",
  },
  {
    img: section2Image5,
    titleText: "고급스러운 주거 특화 설계",
    contentText:
      "전세대 남향 위주의 배치와 효율적인 평면 설계<br />넉넉한 수납과 통풍·채광을 고려한 쾌적한 공간",
  },
  {
    img: section2Image6,
    titleText: "공원과 단지가 어우러진 특화 입지",
    contentText:
      "성성호수공원과 연결되는 산책로, 힐링 공간 설계<br />자연과 함께하는 프리미엄 라이프 실현",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지환경", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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
        <title>천안 휴먼빌 퍼스트시티 - 입지안내</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티는 성성지구 중심에 위치해 성성호수공원과 더블역세권의 가치를 동시에 누릴 수 있는 입지를 자랑합니다. 입지안내를 통해 교통, 교육, 공원, 생활 인프라와 함께 미래가치까지 확인해 보세요."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 퍼스트시티 입지, 천안 성성지구 아파트, 성성호수공원 아파트"
        />
        <link rel="canonical" href="https://www.model-house.co.kr/LocationEnvironment/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="천안 휴먼빌 퍼스트시티 - 입지안내"
        />
        <meta
          property="og:description"
          content="천안 성성지구의 핵심 입지에 위치한 천안 휴먼빌 퍼스트시티! 성성호수공원과 더블역세권의 입지 프리미엄을 지금 확인해 보세요."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 입지안내"
        />
        <meta
          name="twitter:description"
          content="성성호수공원과 도보권 1호선 직산역, 천안아산역의 더블역세권 프리미엄까지! 천안 휴먼빌 퍼스트시티의 입지 가치를 살펴보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
				 {
					"@context": "https://schema.org",
					"@type": "WebPage",
					"name": "천안 휴먼빌 퍼스트시티 - 입지안내",
					"description": "천안 휴먼빌 퍼스트시티 입지안내 페이지는 성성지구에 위치한 단지의 교통, 공원, 교육, 생활 인프라 정보를 종합 제공합니다. 성성호수공원, 1호선 직산역, 천안아산역 등 더블역세권 입지로 주목받는 위치입니다.",
					"url": "https://www.model-house.co.kr/LocationEnvironment/intro"
				 }
				 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 입지 안내 페이지는 천안 성성지구에 위치한 단지의 입지와
        주변 인프라 정보를 제공합니다. 도보권에 위치한 성성호수공원과 직산역,
        천안아산역을 중심으로 한 교통 환경, 인근 초·중·고 학세권,
        대형마트와 상업시설 등 풍부한 생활 인프라를 종합적으로 소개하여,
        실제 거주 시 누리게 될 생활 환경과 미래 가치를 확인할 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>천안 성성지구 중심 입지에서</div>
        <div>공원·교통·교육·생활이 모두 연결되는 프리미엄</div>
        <div>천안 휴먼빌 퍼스트시티가 미래의 중심을 완성합니다</div>
      </div>



      <img
        src={page1}
        className={styles.image2}
        alt="천안 휴먼빌 퍼스트시티 입지안내-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>


      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
