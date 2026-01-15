import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

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
        <title>천안 휴먼빌 퍼스트시티 - 프리미엄</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 프리미엄 페이지에서는 숲세권 입지와 특화 설계, 커뮤니티·조경·보안 시스템 등 단지가 제공하는 다양한 프리미엄 요소를 소개합니다. 장기일반민간임대 구조와 더불어 주거 품질을 높이는 차별화된 가치를 확인해 보세요."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 휴먼빌 퍼스트시티 프리미엄, 천안 더블역세권 아파트"
        />
        <link
          rel="canonical"
          href="https://modellhouse.ai.kr/LocationEnvironment/primium"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="천안 휴먼빌 퍼스트시티 - 프리미엄"
        />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티의 특화 설계, 숲세권 조경, 커뮤니티 시설, 보안·관리 시스템 등 프리미엄 요소를 한눈에 확인해 보세요. 장기 안정 거주와 쾌적한 생활 환경을 동시에 갖춘 단지입니다."
        />
        <meta
          property="og:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://modellhouse.ai.kr/LocationEnvironment/primium"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 프리미엄"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 프리미엄 페이지에서 숲세권 입지, 특화 설계, 커뮤니티·조경·보안 시스템 등 차별화된 주거 가치를 확인해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://modellhouse.ai.kr/LocationEnvironment/primium"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
				 {
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "천안 휴먼빌 퍼스트시티 - 프리미엄",
						"description": "천안 휴먼빌 퍼스트시티 프리미엄 페이지는 홍골공원 숲세권 입지, 특화 설계, 조경 및 커뮤니티 시설, 보안·관리 시스템, 장기일반민간임대 구조 등 단지의 차별화된 프리미엄 요소를 종합적으로 소개합니다.",
						"url": "https://modellhouse.ai.kr/LocationEnvironment/primium"
				 }
				 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 프리미엄
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 프리미엄 페이지는 단지가 제공하는 특화 설계와
        커뮤니티·조경·보안 시스템 등 다양한 프리미엄 요소를 소개합니다.
        성성지구 중심 입지와 더블역세권 교통환경, 호수공원 인접이라는 이점을 바탕으로,
        입주민이 누리게 될 쾌적한 주거 환경과 차별화된 가치를 객관적으로 확인할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>천안 성성지구 중심 더블역세권과 호수공원 프리미엄 위에</div>
        <div>천안 휴먼빌 퍼스트시티만의 프리미엄 라이프가 펼쳐집니다.</div>
      </div>

      <img
        src={page1}
        className={styles.image3}
        alt="천안 휴먼빌 퍼스트시티프리미엄안내-image1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
