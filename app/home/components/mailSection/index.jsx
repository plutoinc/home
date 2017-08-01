import React from 'react';
// styles
import styles from './mailSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const MailSection = ({ email, subscribeEmail, handleEmailChange }) => {
  return (
    <div className={styles.mailSectionContainer}>
      <div className={styles.title}>
        플루토와 함께 혁신에 동참하세요
      </div>
      <div className={styles.subTitle}>
        지금 메일을 등록하고 플루토 소식을 받아보세요.<br />
        업데이트 사항 및 ICO 정보등 유용한 정보를 보내드립니다.
      </div>
      <div className={styles.emailInputWrapper}>
        <form onSubmit={subscribeEmail} className={`form-inline ${styles.emailWrapper}`}>
          <input
            onChange={handleEmailChange}
            style={{ width: '300px' }}
            placeholder="Enter your email"
            className={`form-control ${styles.emailSubmitInput}`}
            value={email}
            type="text"
          />
          <button className={`btn ${styles.emailSubmitButton}`}>
            구독하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(MailSection);
