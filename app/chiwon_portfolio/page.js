import Image from "next/image";
import styles from "./page.module.css";
import Timeline from './1_component.js';
import WorkItem from './2_component.js';

const timelineItems = [
  { year: '2024년 3월', event: '가천대학교 미래자동차학과 3학년 재학 중 & MORAI Test Engineer 2년차' },
  { year: '2023년 3월', event: '(주) 모라이 - MORAI 입사' },
  { year: '2022년 3월', event: '가천대학교 미래자동차학과 입학 & 미래자동차학과 22학번 과대 당선' },
  { year: '2022년 2월', event: '서전고등학교 졸업' },
  { year: '2021년 5월', event: '회사 창업 및 교내 온라인 매점 결제 서비스 런칭' },
  { year: '2019년 3월', event: '서전고등학교 입학' },
  { year: '2016년 3월 ~ 2019년 2월', event: '미덕중학교 입학 및 졸업' },
  { year: '2010년 3월 ~ 2016년 2월', event: '국원초등학교 입학 및 졸업' },
  { year: '2007년 3월 ~ 2009년 2월', event: '성모유치원 입학 및 졸업' },
  { year: '2003년 9월', event: '송치원 출생' },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.toolbar}>
        <div>
          <Image
            src="/chiwon_name.png"
            alt="chiwon_name picture"
            className={styles.vercelLogo}
            width={100}
            height={20}
            priority
          />
        </div>
        <nav>
          <a href="/">Home</a> | 
         <a href="/#bottom">Contact</a> |  
          <a href="/app">Portfolio Page</a>
            </nav>
        </div>
        <section className={styles.introduction}>
        <h2 className={styles.margina}>송치원의 포트폴리오 페이지</h2>
          <div className={styles.profile}>
            <Image
              src="/profile_picture.jpg"
              alt="Profile Picture"
              width={125} 
              height={150}
              className={styles.profileImage}
              priority
            />
            <div className={styles.profileInfo}>
              <h2>송치원</h2>
              <p>가천대학교 미래자동차학과 재학 중</p>
              <p>MORAI Test Engineer</p>
              <p>Email: cwsong@morai.ai 
                <a href="mailto:cwsong@morai.ai"> <span  pan>-&gt;</span> </a>
              </p>
            </div>
          </div>
        </section>
        <div className={styles.center}>
          <div className={styles.customTextContainer}>
            <h2> ────────────────────────────────────────────────────── </h2>
          </div>
        </div>
        <section className={styles.skills}>
          <h2 className={styles.margina}>자동차 관련 직무 소개</h2>
          <ul>
            <WorkItem
              title="Quality Assurance Test Engineer"
              description="MORAI의 QA팀 (Quality Assurance Team)에 속하여, MORAI SIM의 안전성과 품질을 보증하기 위해 Test Engineer로 일하고 있습니다."
              imageUrl="/skill0.png"
            />
            <WorkItem
              title="Digital twin virtual environment validation"
              description="Digital Twin 기술로 구축 된 MORAI SIM의 'Digital Twin 가상 환경'의 Issue를 찾고 검증하여 안전성과 신뢰성을 높이고, 보증해주는 업무를 진행하고 있습니다."
              imageUrl="/skill1.png"
            />
            <WorkItem
              title="Digital twin environmental sensor data verification"
              description="Digital Twin 기술로 구축 된 MORAI SIM의 환경에서 구축 된 '가상 환경의 Sensor'에서 추출하는 Data를 검증하여 안전성과 신뢰성을 높이고, 보증해주는 업무또한 함께 진행하고 있습니다."
              imageUrl="/skill2.png"
            />
            <WorkItem
              title="Participate in certification acquisition testing"
              description="자율주행 시뮬레이터 기술의 안전성을 평가 받기 위해 국제 인증인 ISO26262 취득 Testing에 참여 중입니다."
              imageUrl="/skill3.png"
            />
            <a
              href="https://www.morai.ai/ko"
              className={styles.center}
              target="_blank"
              rel="noopener noreferrer"
            >
          <h2>
            More About MORAI ?! <span>-&gt;</span>
          </h2>
        </a>

          </ul>
        </section>
        <div className={styles.center}>
          <div className={styles.customTextContainer}>
            <h2> ────────────────────────────────────────────────────── </h2>
          </div>
        </div>
        <section className={styles.timeline}>
          <Timeline items={timelineItems} />
        </section>
    </main>
  );
}
