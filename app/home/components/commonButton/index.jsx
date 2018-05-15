import React from "react";
import { trackLink } from "../../../helpers/handleGA";
// styles
import styles from "./commonButton.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const defaultButton = props => {
  const { url, text, from } = props;
  return (
    <a
      href={url}
      target="_blank"
      className={styles.defaultButton}
      onClick={() => trackLink(url, from)}
    >
      {text}
    </a>
  );
};

const headerButton = props => {
  const { url, text, from } = props;
  return (
    <a
      href={url}
      target="_blank"
      className={styles.headerButton}
      onClick={() => trackLink(url, from)}
    >
      {text}
    </a>
  );
};

export const DefaultButton = withStyles(styles)(defaultButton);
export const HeaderButton = withStyles(styles)(headerButton);
