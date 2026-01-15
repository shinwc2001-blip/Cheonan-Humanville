import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/FloorPlan/FloorPlan1/page1.jpg";

const FloorPlan1 = () => {
  const menuContents = [
    { title: "84A", url: "/FloorPlan/59A" },
    { title: "84B", url: "/FloorPlan/59B" },
    { title: "84C", url: "/FloorPlan/84A" },
    { title: "84D", url: "/FloorPlan/84B" },
    // { title: "세대안내영상", url: "/FloorPlan/videos" }, // 세대안내영상 링크
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

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
        <title>천안 휴먼빌 퍼스트시티 - 평면도</title>
        <meta
          name="description"
          content="59타입 평면 안내 페이지는 천안 휴먼빌 퍼스트시티의 전용 59㎡ 타입 평면 정보를 제공합니다. 고객이 세대 구조를 정확히 이해하고, 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 공간 구성과 수납 계획을 확인하고 나에게 맞는 최적의 공간을 찾아보세요."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 휴먼빌 퍼스트시티 평면도, 천안 휴먼빌 퍼스트시티 59타입"
        />
        <link
          rel="canonical"
          href="https://www.model-house.co.kr/FloorPlan/59A"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="천안 휴먼빌 퍼스트시티 - 평면도" />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 평면 안내 페이지에서 전용 59㎡ 타입의 구조와 공간 구성을 확인해 보세요. 실용적인 설계와 효율적인 수납 계획을 한눈에 살펴볼 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/FloorPlan/59A"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 평면도"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 평면도를 통해 세대 구조와 공간 활용 계획을 확인하고, 나에게 잘 맞는 타입을 선택해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/FloorPlan/59A"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
					{
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "천안 휴먼빌 퍼스트시티 - 평면도",
						"description": "천안 휴먼빌 퍼스트시티 평면 안내 페이지는 전용 59㎡ 타입의 세대 구조와 공간 구성을 제공하여, 고객이 자신의 생활 패턴에 맞는 평형을 선택할 수 있도록 돕는 정보 페이지입니다.",
						"url": "https://www.model-house.co.kr/FloorPlan/59A"
					}
					`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="세대안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 평면안내
      </h1>
      <p className={styles.screenReaderOnly}>
        평면 안내 페이지는 천안 휴먼빌 퍼스트시티 전용 59㎡ 타입의 세대 구조와
        공간 활용 방식을 제공합니다. 고객이 방 배치, 거실·주방 구성, 수납 계획
        등을 미리 확인하고 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록
        돕습니다. 다양한 평면 설계를 비교하며 가장 적합한 공간을 찾아보세요.
      </p>

      <div className={styles.textBox}>
        <div>천안 도심 생활의 중심에서</div>
        <div>휴먼빌 퍼스트시티의 효율적인 공간 설계를 만나보세요.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="천안 휴먼빌 퍼스트시티의평면안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 전시품목과 유상옵션이 포함된 견본주택을 촬영한 것으로
          타입별 유상옵션 적용학몽, 특화범위 및 위치는 상이하며 실제 시공시
          차이가 있을 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlan1;
