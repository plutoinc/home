import React from "react";
// styles
import Icon from "../../../components/icons";
import styles from "./scinapseFeatureInfoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

class ScinapseFeatureInfoSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      featureStep: "publishedDate"
    };
  }

  render() {
    const { featureStep } = this.state;
    return (
      <section className={styles.ScinapseFeatureInfoSectionContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>
            Save research time, Save screen time.
          </div>
          <div className={styles.subTitle}>
            Intuitive interface provides everything you need to know about a
            paper in one look
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.tabWrapper}>
              <div
                className={`${styles.tabItem} ${featureStep ===
                  "publishedDate" && styles.active}`}
                onClick={() => this.onClickTab("publishedDate")}
              >
                Published date
              </div>
              <div
                className={`${styles.tabItem} ${featureStep === "author" &&
                  styles.active}`}
                onClick={() => this.onClickTab("author")}
              >
                Author +<br />
                Affiliation +<br />
                H-index
              </div>
              <div
                className={`${styles.tabItem} ${featureStep === "abstract" &&
                  styles.active}`}
                onClick={() => this.onClickTab("abstract")}
              >
                Appropriate
                <br />
                abstract
              </div>
              <div
                className={`${styles.tabItem} ${featureStep ===
                  "citationCount" && styles.active}`}
                onClick={() => this.onClickTab("citationCount")}
              >
                Accurate citation
                <br />
                count
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src="https://assets.pluto.network/pluto_team_hompage/paper-item%403x.png"
                className={styles.paperItemImg}
              />
              <img
                src={this.getFeatureByStep()}
                className={styles.focusedImg}
              />
            </div>
            <div className={styles.tabWrapper}>
              <div
                className={`${styles.tabItem} ${featureStep === "journal" &&
                  styles.active}`}
                onClick={() => this.onClickTab("journal")}
              >
                Journal / Conf
                <br />
                Impact Factor
              </div>
              <div
                className={`${styles.tabItem} ${featureStep ===
                  "correspondingAuthor" && styles.active}`}
                onClick={() => this.onClickTab("correspondingAuthor")}
              >
                Corresponding
                <br />
                Author
              </div>
              <div
                className={`${styles.tabItem} ${featureStep === "collection" &&
                  styles.active}`}
                onClick={() => this.onClickTab("collection")}
              >
                Add to your
                <br />
                personal
                <br />
                collection list
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  onClickTab(nextStep) {
    this.setState({ featureStep: nextStep });
  }

  getFeatureByStep() {
    const { featureStep } = this.state;
    if (featureStep === "") return null;

    switch (featureStep) {
      case "publishedDate":
        return "https://assets.pluto.network/pluto_team_hompage/published-date%403x.png";
      case "author":
        return "https://assets.pluto.network/pluto_team_hompage/author%403x.png";
      case "abstract":
        return "https://assets.pluto.network/pluto_team_hompage/abstract%403x.png";
      case "citationCount":
        return "https://assets.pluto.network/pluto_team_hompage/citation-count%403x.png";
      case "journal":
        return "https://assets.pluto.network/pluto_team_hompage/journal%403x.png";
      case "correspondingAuthor":
        return "https://assets.pluto.network/pluto_team_hompage/corresponding-author%403x.png";
      case "collection":
        return "https://assets.pluto.network/pluto_team_hompage/collection-focus%403x.png";
      default:
        return null;
    }
  }
}

export default withStyles(styles)(ScinapseFeatureInfoSection);
