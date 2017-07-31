import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { changeEmailInput } from '../../actions';
// styles
import styles from './mainSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

function mapStateToProps(appState) {
  return {
    homeState: appState.home,
  };
}

class MainSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.subscribeEmail = this.subscribeEmail.bind(this);
  }

  render() {
    const { homeState } = this.props;

    return (
      <div className={styles.mainSectionContainer}>
        <div className="container">
          <div>
            <div className="row">
              <div className={`col-md-8 col-xs-12 ${styles.headline}`}>
                Decentralized Scholarly Communication
                Platform, Pluto
              </div>
              <div className={`col-md-8 col-xs-12 ${styles.subTitle}`}>
                학술정보를 블록체인상에 구현하여 연구자가 연구에만 집중 할 수 있는 세상을 만듭니다.
              </div>
            </div>

            <form
              onSubmit={this.subscribeEmail}
              className={`form-inline ${styles.emailWrapper}`}
            >
              <input
                onChange={this.handleEmailChange}
                placeholder="Enter your email"
                className={`form-control ${styles.emailSubmitInput}`}
                value={homeState.get('email')}
                type="text"
              />
              <button className={`btn ${styles.emailSubmitButton}`}>
                구독하기
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  handleEmailChange(e) {
    const { dispatch } = this.props;

    e.preventDefault();
    dispatch(changeEmailInput(e.currentTarget.value));
  }

  async subscribeEmail(e) {
    const { homeState } = this.props;

    e.preventDefault();
    const emailInput = homeState.get('email');
    // e-mail validation by regular expression
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(emailInput)) {
      alert('Please input valid e-mail');
    } else {
      try {
        await Axios.post(`https://gesqspxc8i.execute-api.us-east-1.amazonaws.com/prod/subscribeMailingList?email=${emailInput}`);
        alert('You are on the subscribe list now');
        this.emailInput.value = '';
      } catch (err) {
        alert(`Failed: ${err.response.data.error}`);
      }
    }
  }
}

export default connect(mapStateToProps)(withStyles(styles)(MainSection));
