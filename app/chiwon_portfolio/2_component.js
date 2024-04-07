import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const WorkItem = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.workItem}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} width={600} height={300} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;

// 2번 컴포넌트화 실패 - 시간 부족

// import React from 'react';
// import Image from 'next/image';
// import styles from './page.module.css';

//   const WorkItem = ({ items = [] }) => {
//   return (
//     <section className={styles.workItemsSection}>
//       <h2 className={styles.marginb}>My Work Experience</h2>
//       {items.map((item, index) => (
//         <div key={index} className={styles.workItem}>
//           <div className={styles.imageContainer}>
//             <Image src={item.imageUrl} alt={item.title} width={600} height={300} />
//           </div>
//           <div className={styles.content}>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default WorkItem;
