import React from "react";
// styles
import styles from "./blogSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const blogCards = posts => {
  if (!posts || posts.isEmpty()) {
    return null;
  }

  return posts.map(post => {
    let previewContent = "";
    let previewImage =
      "https://d2vo77dayzjoat.cloudfront.net/mailSection-background.jpg";
    let targetUrl = "https://medium.com/pluto-network/latest";
    try {
      previewContent = post.getIn(["virtuals", "subtitle"]);
      previewImage = post.getIn(["virtuals", "previewImage", "imageId"]);
      targetUrl = `https://medium.com/pluto-network/${post.get("uniqueSlug")}`;
    } catch (err) {
      console.log(err);
    }

    return (
      <a
        href={targetUrl}
        key={post.get("id")}
        className={styles.blogCard}
        target="_blank"
      >
        <div className={styles.blogImageWrapper}>
          <img
            alt={post.get("title")}
            className={styles.blogImage}
            src={`https://cdn-images-1.medium.com/max/1200/${previewImage}`}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.blogCardTitle}>{post.get("title")}</div>
          <div className={styles.blogCardDescription}>{previewContent}</div>
        </div>
      </a>
    );
  });
};

const BlogSection = ({ posts, intl }) => (
  <div className={styles.blogSectionContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.blogTitle}>
        {intl.formatMessage({ id: "BlogSection.blogTitle" })}
      </div>
      <div className={styles.blogCardWrapper}>{blogCards(posts)}</div>
      <a
        className={styles.blogButton}
        href="https://medium.com/pluto-network"
        target="_blank"
      >
        {intl.formatMessage({ id: "BlogSection.blogButton" })}
      </a>
    </div>
  </div>
);

export default withStyles(styles)(BlogSection);
