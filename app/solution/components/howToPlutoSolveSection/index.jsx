import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./howToPlutoSolveSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const HowToPlutoSolveSection = () => {
  return (
    <section className={styles.howToPlutoSolveSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.subTitle}>HOW PLUTO SOLVES</div>
        <div className={styles.title}>
          More power to libraries,
          <br />
          More access for researchers
        </div>
        <div className={styles.description}>
          In order to create a scholar-friendly environment that efficiently
          provides resources to scholars and researchers, Pluto has developed
          the following features on a cloud-based platform to better meet the
          needs of both universities and researchers.
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentTitle}>
            <div className={styles.number}>01</div>
            <div className={styles.titleContext}>
              Scinapse Search Engine
              <br />
              via IP & Remote Access
            </div>
          </div>

          <div className={styles.firstContent}>
            <div className={styles.longBox}>Discovery Service</div>
            <Icon icon="PLUS" className={styles.plusIcon} />
            <div className={styles.smallBox}>
              Metadata
              <br />
              <b>Indexing</b>
            </div>
            <div className={styles.smallBox}>
              Metadata
              <br />
              <b>Aggregating</b>
            </div>
            <div className={styles.smallBox}>
              Metadata
              <br />
              <b>Standardizing</b>
            </div>
          </div>

          <div className={styles.firstContentDesc}>
            for all subscriptions and licensed journals regardless of vendor
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentTitle}>
            <div className={styles.number}>02</div>
            <div className={styles.titleContext}>
              Journal Subscription/User Data Analytics
              <br />& Resource Management
            </div>
          </div>
          <div className={styles.cardContents}>
            <div className={styles.card}>
              <Icon icon="PIE_CHART" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Analytics & Reporting</div>
                <div className={styles.cardContext}>
                  Provide data analytics by users and help identify unnecessary
                  and duplicate subscriptions, research patterns, paper
                  requests, and more.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="OPTIONS" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Customization</div>
                <div className={styles.cardContext}>
                  Customized version of scinapse for your institution with their
                  respective subscriptions and online resources. Enable on&off
                  campus access of subscriptions and papers via existing
                  university portal.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="BAR_CHART" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Assess True Usage</div>
                <div className={styles.cardContext}>
                  Provide management and data analysis support for libraries
                  based on their users’ activity as well as millions of other
                  user activity. Help track on & off-campus usage
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="MESSAGE_SQUARE" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Consultation</div>
                <div className={styles.cardContext}>
                  Provide data-driven suggestions to cut subscription costs and
                  meet budget reduction targets. Provide insights to user
                  behavior, unindexed metadata, user support, and more.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="FILE_TEXT" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Indexing</div>
                <div className={styles.cardContext}>
                  Proper indexing of all available journals on scinapse as well
                  as all subscriptions licensed for the university - no
                  duplicate search result ensured.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="CLOUD_UPLOAD" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Cloud</div>
                <div className={styles.cardContext}>
                  Our solution indexes and processes everything on the cloud. We
                  help migrate ERP & current system to the cloud. All your
                  subscriptions are carefully indexed.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentTitle}>
            <div className={styles.number}>03</div>
            <div className={styles.titleContext}>
              Journal subscription market place
              <br />
              <small>*coming soon</small>
            </div>
          </div>
          <div className={styles.cardContents}>
            <div className={styles.card}>
              <Icon icon="OPTIONS" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  Select Your Subscriptions
                </div>
                <div className={styles.cardContext}>
                  "Unbundle" existing subscription plans and only select
                  journals that are necessary for your institution. Most OA &
                  free publications will be updated to our database.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="PERSON_DONE" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  Library/Researcher-friendly
                </div>
                <div className={styles.cardContext}>
                  Provide clear data on how your researchers search for papers
                  and access journals. Know your researchers' needs by
                  discipline and department.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="TRENDING_DOWN" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Reduce Your Cost</div>
                <div className={styles.cardContext}>
                  Identify and end unnecessary subscriptions. Purchase requested
                  individual papers and journals at low cost and keep processing
                  fees at minimum.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="FILE_TEXT" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Indexing</div>
                <div className={styles.cardContext}>
                  Easily add and end subscriptions to journals and index your
                  resources in no time to add to your customized search
                  database.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Icon icon="CREDIT_CARD" className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Payments* (2021)</div>
                <div className={styles.cardContext}>
                  Allow individual users, authors, institutions, corporate, and
                  publishers to make and accept payments on our platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(HowToPlutoSolveSection);
