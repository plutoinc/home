import React from "react";
// styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./answerItem.scss";

class AnswerItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen,
    };
  }

  render() {
    const isOpen = this.state.isOpen;

    return (
      <div className={`${styles.answerItem} ${isOpen ? styles.open : ""}`}>
        <div className={styles.itemContainer}>
          <div
            className={styles.itemTitle}
            onClick={() => {
              this.setState({
                isOpen: !this.state.isOpen,
              });
            }}
          >
            {this.props.question}
          </div>
          <div className={styles.itemContent}>{this.props.answer}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AnswerItem);
