import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";

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
        <title>천안 휴먼빌 퍼스트시티 - 체크포인트</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 청약·계약 전 반드시 확인해야 할 체크포인트를 안내합니다. 청약 자격, 서류 준비, 일정, 유의사항 등 절차 전반에서 놓치기 쉬운 핵심 사항을 정리하여 보다 안정적인 청약·계약 진행을 돕습니다."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 휴먼빌 퍼스트시티 체크포인트, 천안 휴먼빌 퍼스트시티 청약안내"
        />
        <link
          rel="canonical"
          href="https://modellhouse.ai.kr/SalesInfo/SubscriptionGuide"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="천안 휴먼빌 퍼스트시티 - 체크포인트"
        />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 청약·계약 전 필수 체크포인트를 한눈에 확인해 보세요. 청약 자격, 서류 준비, 일정과 유의사항 등 중요한 정보를 정리한 안내 페이지입니다."
        />
        <meta
          property="og:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://modellhouse.ai.kr/SalesInfo/SubscriptionGuide"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 체크포인트"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 분양·청약 전 확인해야 할 핵심 체크포인트를 정리한 안내 페이지입니다. 자격, 일정, 서류, 유의사항을 꼼꼼히 확인해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://modellhouse.ai.kr/SalesInfo/SubscriptionGuide"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                 {
                     "@context": "https://schema.org",
                     "@type": "WebPage",
                     "name": "천안 휴먼빌 퍼스트시티 - 체크포인트",
                     "description": "천안 휴먼빌 퍼스트시티 청약 및 계약 전에 확인해야 할 청약 자격, 서류 준비, 일정 및 유의사항을 정리한 체크포인트 안내 페이지입니다.",
                     "url": "https://modellhouse.ai.kr/SalesInfo/SubscriptionGuide"
                 }
                 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="체크포인트" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 체크포인트
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 분양·청약 전 필수 체크포인트를 안내하는 페이지입니다.
        청약 자격, 일정, 준비 서류, 유의사항 등 절차 전반에서 반드시 확인해야 할
        내용을 정리하여, 예비 입주자가 보다 정확하고 안정적으로 청약 및 계약을
        진행할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>천안 휴먼빌 퍼스트시티 청약·계약 전 반드시 확인해야 할 핵심 정보</div>
        <div>체크포인트를 통해 하나씩 점검해 보세요.</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="천안 휴먼빌 퍼스트시티 청약체크포인트-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
