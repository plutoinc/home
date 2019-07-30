import React from "react";
// styles
import Icon from "../../../components/icons";
import styles from "./productSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { DefaultButton } from "../commonButton";
import { PRODUCT_URL } from "../../../routes";

class ProductSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemShown: false
    };
  }
  render() {
    const { shown } = this.props;
    return (
      <section
        className={`${styles.productSectionContainer} ${
          shown ? styles.shown : ""
        }`}
      >
        <div className={styles.innerContainer}>
          <div className={styles.contentsWrapper}>
            <div className={styles.subTitle}>SCINAPSE</div>
            <div className={styles.title}>
              {`Researcher's favorite`}
              <br />
              search engine
            </div>
            <div className={styles.description}>
              Your true search experience begins here.
            </div>
            <DefaultButton
              url={PRODUCT_URL}
              text="Try Scinapse"
              from="productSection"
            />
            <a className={styles.learnMoreButton}>
              Learn more
              <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
            </a>
          </div>
          <div className={styles.mokeupContainer}>
            <img src="https://assets.pluto.network/pluto_team_hompage/scinapse-mock.png" />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(ProductSection);
