import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/SalesInfo/SalesInfoAnnouncement/page1.jpg";
import pdfIcon from "../../assets/icons/pdf-icon.png"; // PDF 아이콘 이미지 임포트

import Ready from "../../components/Ready/Ready"

const ComplexGuide1 = () => {
  const menuContents = [
    // { title: "인터넷 청약", url: "/SalesInfo/guide" },
    // { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const { pathname } = useLocation();

  // 페이지 로드 시 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤 이벤트로 헤더 상태 변경
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

  // PDF 새 창으로 열기 함수
  const openPDF = () => {
    setIsLoading(true); // PDF 로딩 시작
    const pdfUrl = "/announcement.pdf"; // 실제 PDF 파일 경로로 수정
    const newWindow = window.open(pdfUrl, "_blank");

    // PDF 로딩 후 로딩 상태 해제
    newWindow.onload = () => {
      setIsLoading(false);
    };
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
        <title>천안 휴먼빌 퍼스트시티 - 모집공고안내</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 입주자 모집공고 안내 페이지입니다. 모집공고에 포함된 접수 일정, 신청 자격, 제출 서류 및 유의사항을 명확하게 안내하여 예비 입주자가 혼선 없이 절차를 준비할 수 있도록 돕습니다. 공고문을 통해 필수 정보를 빠짐없이 확인해 보세요."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 휴먼빌 퍼스트시티 모집공고, 천안 휴먼빌 퍼스트시티 청약안내"
        />
        <link
          rel="canonical"
          href="https://www.model-house.co.kr/SalesInfo/announcement"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="천안 휴먼빌 퍼스트시티 - 모집공고안내" />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 입주자 모집공고에 포함된 일정, 자격 요건, 제출 서류 및 절차를 한눈에 확인할 수 있는 안내 페이지입니다."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/SalesInfo/announcement"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 모집공고안내"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 입주자 모집공고를 통해 신청 일정, 자격 조건, 제출 서류 및 유의사항을 꼼꼼히 확인해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/SalesInfo/announcement"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                 {
                     "@context": "https://schema.org",
                     "@type": "WebPage",
                     "name": "천안 휴먼빌 퍼스트시티 - 모집공고안내",
                     "description": "천안 휴먼빌 퍼스트시티 입주자 모집공고 안내 페이지로, 모집 일정, 신청 자격, 제출 서류 및 유의사항을 명확하게 안내하여 예비 입주자가 절차를 정확히 준비할 수 있도록 돕습니다.",
                     "url": "https://www.model-house.co.kr/SalesInfo/announcement"
                 }
                 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="모집공고안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 모집공고안내
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 입주자 모집공고 안내 페이지입니다. 모집공고에 포함된
        접수 일정, 신청 자격, 제출 서류 및 유의사항을 정리하여, 예비 입주자가
        혼선 없이 청약 및 신청 절차를 준비할 수 있도록 돕습니다. 공고문을 통해
        반드시 확인해야 할 핵심 정보를 빠짐없이 체크해 보시기 바랍니다.
      </p>

      <div className={styles.textBox}>
        <div>천안 휴먼빌 퍼스트시티 입주자 모집공고를 확인하세요</div>
        <div>청약·신청 전 꼭 필요한 핵심 정보 안내</div>
      </div>



      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="천안 휴먼빌 퍼스트시티모집공고안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      {/* 입주자 모집공고 PDF로 보기 버튼 */}
      <button onClick={openPDF} className={styles.pdfButton}>
        <img src={pdfIcon} alt="PDF 아이콘" className={styles.pdfIcon} />{" "}
        <span>
          모집공고 PDF
          <br />
          확인하기
        </span>
      </button>

      {/* 로딩 중일 때 표시할 스피너 */}
      {isLoading && (
        <div className={styles.loader}>
          <p>파일을 로딩 중입니다...</p>
          {/* 여기에 스피너 아이콘 추가 가능 */}
          <div className={styles.spinner}></div>
        </div>
      )}

      <div className={styles.commonBox}>
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
