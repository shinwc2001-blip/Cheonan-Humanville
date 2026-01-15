import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

import Ready from "../../components/Ready/Ready"

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    // { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "계약안내문", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
  const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

  // 이미지 표시 여부를 변경하는 로직 추가 (예시)
  useEffect(() => {
    const handleImageVisibility = () => {
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려갔을 때
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener("scroll", handleImageVisibility);

    return () => {
      window.removeEventListener("scroll", handleImageVisibility);
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
        <title>천안 휴먼빌 퍼스트시티 - 계약서류안내</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 계약서류안내 페이지에서는 분양 및 입주 계약 체결 시 필요한 서류와 제출 방법을 명확하게 안내합니다. 계약 단계별로 필요한 문서, 제출 기한, 유의사항 등을 상세히 정리하여 입주자와 예비 계약자의 원활한 절차 진행을 돕습니다."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 계약서류 안내, 천안 계약 절차, 분양 계약서류"
        />
        <link rel="canonical" href="https://modellhouse.ai.kr/BusinessGuide/documents" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="천안 휴먼빌 퍼스트시티 - 계약서류안내" />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 계약 단계별 제출 서류, 기한, 준비 방법 등을 안내합니다. 계약 체결에 필요한 모든 정보를 한눈에 확인해보세요."
        />
        <meta
          property="og:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://modellhouse.ai.kr/BusinessGuide/documents"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 계약서류안내"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 계약서류안내 페이지에서 분양 및 입주 계약을 위한 필수 서류와 유의사항을 꼼꼼히 확인하세요."
        />
        <meta
          name="twitter:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://modellhouse.ai.kr/BusinessGuide/documents"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
								{
									"@context": "https://schema.org",
									"@type": "WebPage",
									"name": "천안 휴먼빌 퍼스트시티 - 계약서류안내",
									"description": "천안 휴먼빌 퍼스트시티 계약서류안내 페이지에서는 계약 진행 시 필요한 서류, 제출 방법, 제출 기한 및 유의사항을 상세하게 안내합니다.",
									"url": "https://modellhouse.ai.kr/BusinessGuide/documents"
								}
								`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="계약서류안내" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 - 계약서류안내
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티 계약서류안내 페이지에서는 분양 및 입주 계약 시 필요한 각종
        서류와 제출 방법을 상세히 안내합니다. 계약 과정에서 혼선을 방지하고,
        정해진 기한 내 정확하게 준비할 수 있도록 도움을 드립니다. 단계별로
        필요한 문서와 준비 절차를 이 페이지에서 확인해보세요.
      </p>

      <div className={styles.textBox}>
        <div>성성호수공원과 함께하는 천안 신도시 프리미엄 위에</div>
        <div>천안 휴먼빌 퍼스트시티가 새로운 자부심으로 찾아옵니다.</div>
      </div>


      {/* 이미지에 isImageVisible 상태 적용 */}
      <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="천안 휴먼빌 퍼스트시티 계약서류안내-image1"
      />
      <Footer />
    </div>
  );
};

export default BusinessGuide2;
