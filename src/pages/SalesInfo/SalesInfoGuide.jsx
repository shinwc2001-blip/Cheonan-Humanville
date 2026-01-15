import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/guide/page1.jpg";

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
        <title>천안 휴먼빌 퍼스트시티 - 인터넷청약</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 인터넷 청약 안내 페이지입니다. 온라인으로 간편하게 청약 절차를 진행할 수 있으며, 신청 전 반드시 확인해야 할 자격 요건, 절차 및 유의사항을 정리하여 제공합니다. 인터넷 청약 방법을 확인하고 천안 휴먼빌 퍼스트시티의 기회를 준비해 보세요."
        />
        <meta
          name="keywords"
          content="천안 휴먼빌 퍼스트시티, 천안 휴먼빌 퍼스트시티 인터넷청약, 천안 휴먼빌 퍼스트시티 청약안내"
        />
        <link
          rel="canonical"
          href="https://modellhouse.ai.kr/SalesInfo/guide"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="천안 휴먼빌 퍼스트시티 - 인터넷청약"
        />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 인터넷 청약 절차와 신청 방법을 한눈에 확인할 수 있는 안내 페이지입니다. 온라인으로 간편하게 청약을 진행하기 전에 필요한 정보를 꼼꼼히 확인해 보세요."
        />
        <meta
          property="og:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://modellhouse.ai.kr/SalesInfo/guide"
        />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="천안 휴먼빌 퍼스트시티 - 인터넷청약"
        />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 인터넷 청약 안내 페이지에서 신청 절차, 자격 요건, 유의사항을 미리 확인하고 청약을 준비해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://modellhouse.ai.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://modellhouse.ai.kr/SalesInfo/guide"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                 {
             "@context": "https://schema.org",
             "@type": "WebPage",
             "name": "천안 휴먼빌 퍼스트시티 - 인터넷청약",
             "description": "천안 휴먼빌 퍼스트시티 인터넷 청약 안내 페이지로, 온라인으로 청약을 진행하기 위한 절차, 신청 자격, 준비 서류 및 유의사항을 정리하여 제공합니다.",
             "url": "https://modellhouse.ai.kr/SalesInfo/guide"
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
        천안 휴먼빌 퍼스트시티 - 인터넷청약
      </h1>
      <p className={styles.screenReaderOnly}>
        천안 휴먼빌 퍼스트시티의 인터넷 청약은 온라인을 통해 간편하게 신청할 수 있는
        청약 방법입니다. 예비 입주자는 청약 전 자격 요건, 신청 절차, 준비
        서류 및 유의사항을 충분히 확인한 뒤, 정해진 기간 내에 인터넷 청약을
        진행하실 수 있습니다. 본 페이지를 통해 관련 정보를 사전에 숙지하여
        청약 기회를 놓치지 않도록 준비해 보시기 바랍니다.
      </p>

      <div className={styles.textBox}>
        <div>인터넷 청약 절차와 방법을 확인하세요</div>
        <div>천안 성성지구 더블역세권, 천안 휴먼빌 퍼스트시티</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="천안 휴먼빌 퍼스트시티청약안내-image1"
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
