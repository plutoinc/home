import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import MainSection from './components/mainSection';
import Navbar from '../components/navbar';
import ScholarCarousel from './components/scholarCarousel';
import CriticismSection from './components/criticismSection';
import PlatformSection from './components/platformSection';
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
    const { homeState } = this.props; 

    return (
      <div>
        <Navbar />
        <MainSection
          email={homeState.get('email')}
          subscribeEmail={this.subscribeEmail}
          handleEmailChange={this.handleEmailChange}
        />
        <ScholarCarousel />
        <CriticismSection />
        <PlatformSection />
        <ResearchSection />
        <BlogSection />
        <MailSection
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

export default connect(mapStateToProps)(HomeContainer);
