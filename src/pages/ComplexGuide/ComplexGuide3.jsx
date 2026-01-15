import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
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
        <title>천안 휴먼빌 퍼스트시티 - 커뮤니티</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 커뮤니티 페이지에서는 단지 내 다양한 커뮤니티 시설을 소개합니다. 피트니스, 스터디·독서 공간, 어린이·가족 커뮤니티룸 등 입주민의 라이프스타일을 고려한 시설들이 마련되어 있어 일상 속에서 여가와 휴식을 풍부하게 누릴 수 있습니다."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 휴먼빌 퍼스트시티 커뮤니티, 천안 휴먼빌 퍼스트시티 커뮤니티시설"
        />
        <link
          rel="canonical"
          href="https://modellhouse.ai.kr/ComplexGuide/community"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="천안 휴먼빌 퍼스트시티 - 커뮤니티"
        />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 단지 내 커뮤니티 시설을 한눈에 확인할 수 있는 페이지입니다. 입주민의 건강, 휴식, 소통을 위한 다양한 커뮤니티 공간들이 삶의 질을 한 단계 높여줍니다."
        />
        <meta
          property="og:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://modellhouse.ai.kr/ComplexGuide/community"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 커뮤니티"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티의 다양한 커뮤니티 시설을 소개합니다. 피트니스, 독서·스터디 공간, 가족 커뮤니티 공간 등 입주민을 위한 생활 특화 시설을 만나보세요."
        />
        <meta
          name="twitter:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://modellhouse.ai.kr/ComplexGuide/community"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
					{
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "천안 휴먼빌 퍼스트시티 - 커뮤니티",
						"description": "천안 휴먼빌 퍼스트시티 커뮤니티 페이지는 단지 내 피트니스, 독서실·스터디룸, 라운지, 키즈·가족 커뮤니티룸 등 입주민의 생활 편의와 소통을 위한 다양한 커뮤니티 시설을 소개합니다.",
						"url": "https://modellhouse.ai.kr/ComplexGuide/community"
					}
					`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="단지안내" />
      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 커뮤니티
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 커뮤니티 페이지에서는 단지 내 입주민을 위한 다양한
        커뮤니티 시설을 안내합니다. 피트니스 시설, 독서 및 스터디 공간,
        라운지와 가족 커뮤니티룸 등 일상 속 여가와 휴식을 돕는 공간들을 통해
        입주민의 삶의 질을 높이고, 풍부한 공동체 문화를 형성하는 것을 목표로
        합니다.
      </p>

      <div className={styles.textBox}>
        <div> 넓은 집 프리미엄의 가치 위에</div>
        <div>천안 휴먼빌 퍼스트시티 커뮤니티가 새로운 일상을 완성합니다.</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="브레인시티커뮤니티안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <Footer />
    </div>
  );
};

export default ComplexGuide3;
