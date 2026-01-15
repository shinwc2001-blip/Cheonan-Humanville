import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";

import Ready from "../../components/Ready/Ready"

const ComplexGuide1 = () => {
  const menuContents = [
    // { title: "인터넷 청약", url: "/SalesInfo/guide" },
    // { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

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
        <title>천안 휴먼빌 퍼스트시티 - 인지세안내</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 인지세 안내 페이지는 계약 체결 시 발생하는 인지세 관련 정보를 제공합니다. 인지세의 개념, 적용 기준, 세액 및 납부 방법을 알기 쉽게 정리하여, 예비 입주자가 세금 부담을 미리 파악하고 준비할 수 있도록 돕습니다."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 휴먼빌 퍼스트시티 인지세, 천안 휴먼빌 퍼스트시티 세금 안내"
        />
        <link rel="canonical" href="https://www.model-house.co.kr/SalesInfo/stampTax" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="천안 휴먼빌 퍼스트시티 - 인지세안내"
        />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 인지세 안내 페이지에서 계약 시 부과되는 인지세의 기준, 세액 및 납부 절차를 간편하게 확인해 보세요."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/SalesInfo/stampTax"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 인지세안내"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 인지세 안내 페이지는 계약 시 발생하는 인지세의 개념, 세액 및 납부 절차를 정리해 입주 예정자의 세금 준비를 돕습니다."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/SalesInfo/stampTax"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                 {
             "@context": "https://schema.org",
             "@type": "WebPage",
             "name": "천안 휴먼빌 퍼스트시티 - 인지세안내",
             "description": "천안 휴먼빌 퍼스트시티 인지세 안내 페이지는 주택 계약 시 부과되는 인지세의 개념, 적용 기준, 세액 및 납부 절차를 쉽게 설명하여 입주 예정자가 정확하게 준비할 수 있도록 돕습니다.",
             "url": "https://www.model-house.co.kr/SalesInfo/stampTax"
                 }
                 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 인지세안내
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 인지세 안내 페이지는 주택 계약 체결 시 발생하는 인지세에
        대한 정보를 제공합니다. 인지세의 의미와 적용 기준, 금액 산정 방식 및
        납부 절차를 정리하여, 예비 입주자가 계약 단계에서 필요한 세금 부담을
        미리 파악하고 정확하게 준비할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>인지세 납부 기준과 절차를 확인하세요</div>
        <div>천안 휴먼빌 퍼스트시티 계약 준비에 필요한 핵심 세금 안내</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="천안 휴먼빌 퍼스트시티 인지세안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />


      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
