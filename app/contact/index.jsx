import React from "react";
import classNames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import BusinessContactForm from "./components/businessContactForm";
import PersonalContactForm from "./components/personalContactForm";
import Header from "../components/header";
import Footer from "../components/newfooter";
import styles from "./contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <Header />
        <div className={styles.container}>
          <h1 className={styles.title}>Contact us</h1>
          <div className={styles.greeting}> Thanks for reaching out!</div>
          <div className={styles.formWrapper}>
            <div className={styles.formTitle}>
              Contact Form for corporate/university
            </div>
            <BusinessContactForm />
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.formTitle}>
              Contact Form for researchers/anyone
            </div>
            <PersonalContactForm />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.bottomContainer}>
            <div className={styles.leftBox}>
              <div className={styles.bottomSubtitle}>Are you a researcher?</div>
              <div className={styles.bottomTitle}>Try scinapse now!</div>
            </div>
            <div className={styles.rightBox}>
              <a
                href="https://scinapse.io"
                target="_blank"
                className={styles.scinapseLink}
              >
                Go to Scinapse
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
