import React from "react";
// components
import AnswerItem from "./answerItem";
import faqContent from "./faqContent";
// styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./answerSection.scss";

class AnswerSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };

    this.selectAnswerItem = this.selectAnswerItem.bind(this);
  }

  render() {
    return (
      <section className={styles.answerSectionContainer}>
        <div className={styles.innerContainer}>
          {faqContent.map((item, idx) => {
            return (
              <AnswerItem
                key={idx.toString()}
                index={idx}
                isOpen={idx === this.state.selected}
                question={item.question}
                answer={item.answer}
                selectAnswerItem={this.selectAnswerItem}
              />
            );
          })}
        </div>
      </section>
    );
  }

  selectAnswerItem(idx) {
    this.setState({ selected: idx });
  }
}

export default withStyles(styles)(AnswerSection);
