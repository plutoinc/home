import React from 'react';
// styles
import styles from './platformSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const PlatformSection = () => {
  return (
    <div className={styles.platformSectionContainer}>
      <div className="container">
        <div className={styles.title}>
          학술 정보를 탈중앙화하여 학술적 커뮤니케이션이 자율적으로 이루어지는 플랫폼을 구축합니다.
        </div>
        <div className={styles.description}>
          플루토는 학술저널 출판사라는 기존의 중앙화된 매개체가 하는 역할을<br />
          블록 체인상에서 Autonomous하게 구현하여 학술 정보의 탈 중앙화 (Decentralized Academia)를 실현함으로써,<br />
          ‘연구자의 연구 성과 공유와 접근에는 장벽이 존재하지  않아야 하며, 저작물에 대한 권리는 연구자에게 있어야 한다.’<br />
          라는 연구자 위주의 Scholarly Communication platform을 제공합니다.
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PlatformSection);
