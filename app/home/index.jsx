import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import MainSection from './components/mainSection';
import Navbar from '../components/navbar';
import ScholarCarousel from './components/scholarCarousel';
import CriticismSection from './components/criticismSection';
import PlatformSection from './components/platformSection';
import RoadMapSection from './components/roadMapSection';
import ResearchSection from './components/researchSection';
import BlogSection from './components/blogSection';
import MailSection from './components/mailSection';
import Footer from '../components/footer';
import { changeEmailInput } from './actions';

function mapStateToProps(appState) {
  return {
    homeState: appState.home,
  };
}

class HomeContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.subscribeEmail = this.subscribeEmail.bind(this);
  }

  render() {
    const { intl, homeState } = this.props;

    return (
      <div>
        <Navbar intl={intl} />
        <MainSection
          email={homeState.get('email')}
          subscribeEmail={this.subscribeEmail}
          handleEmailChange={this.handleEmailChange}
          intl={intl}
        />
        <ScholarCarousel intl={intl} />
        <CriticismSection intl={intl} />
        <PlatformSection intl={intl} />
        <RoadMapSection intl={intl} />
        <ResearchSection intl={intl} />
        <BlogSection intl={intl} />
        <MailSection
          intl={intl}
          email={homeState.get('email')}
          subscribeEmail={this.subscribeEmail}
          handleEmailChange={this.handleEmailChange}
        />
        <Footer />
      </div>
    );
  }

  handleEmailChange(e) {
    const { dispatch } = this.props;
    dispatch(changeEmailInput(e.currentTarget.value));
  }

  async subscribeEmail(e) {
    const { homeState, dispatch } = this.props;
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
        dispatch(changeEmailInput(''));
      } catch (err) {
        alert(`Failed: ${err.response.data.error}`);
      }
    }
  }
}

export default injectIntl(connect(mapStateToProps)(HomeContainer));
