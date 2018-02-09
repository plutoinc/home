import React from "react";
import EnvChecker from "./envChecker";

export const css = new Set(); // CSS for all rendered React components

class CssInjector extends React.PureComponent {
  getChildContext() {
    return {
      insertCss(...styles) {
        if (
          styles.length === 1 &&
          Object.getOwnPropertyNames(styles[0]).length === 0
        ) {
          return [{}];
        }
        styles.forEach(style => {
          css.add(style._getCss());
          if (!EnvChecker.isServer()) {
            style._insertCss();
          }
        });
      }
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

CssInjector.childContextTypes = {
  insertCss: React.PropTypes.func.isRequired
};

export default CssInjector;
