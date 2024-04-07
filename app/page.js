import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <div className={styles.leftContent}>
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
              <a href="#">Home</a> | 
              <a href="#bottom">Contact</a> |  
              <a href="/chiwon_portfolio">Portfolio Page</a>
            </nav>
          </div>
              <div className={styles.customTextContainer}>
                <h1>Chiwon's</h1>
                <h1>Portfolio</h1>
              </div>
          </div>

        <div className={styles.rightContent}>
          <h1>송 치 원 / ChiWon Song</h1>
          <h2>QA Test Engineer</h2>
          <h3 className={styles.learnMore}>
              <a href="/chiwon_portfolio">
                Learn More <span>-&gt;</span>
              </a>
          </h3>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.customTextContainer}>
          <h2> ────────────  Contact With Me  ──────────── </h2>
        </div>
      </div>
      
      <div className={styles.grid}>
        <a
          href="tel:+82 01048098358"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Phone <span>-&gt;</span>
          </h2>
          <p>
            Let's connect on Phone!
          </p>
        </a>

        <a
          href="mailto:cwsong@morai.ai"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            E-Mail <span>-&gt;</span>
          </h2>
          <p>
            Let's connect on Email!
          </p>
        </a>

        <a
          href="https://open.kakao.com/o/sHwGHcQd"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            KakaoTalk <span>-&gt;</span>
          </h2>
          <p>
            Let's connect on KakaoTalk!
          </p>
        </a>

        <a
          href="https://www.instagram.com/nowihc.py/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Instagram <span>-&gt;</span>
          </h2>
          <p>
            Let's connect on Instagram!
          </p>
        </a>
      </div>
      <div id="bottom"></div>
    </main>
  );
}