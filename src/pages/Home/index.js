
import Navbar from 'components/Navbar';
import AppleImage from 'assets/images/apple.png'

import './styles.scss'
import HowTo from 'components/HowTo';
import Lessons from 'components/Lessons';
import Testimonials from 'components/Testimonials';
import Team from 'components/Team';
import Download from 'components/Download';
import Footer from 'components/Footer';

function Home() {
  return (
    <div className="home-container">
      <div className="graphic-top">
        <Navbar />
        <div className="top-content">
          <div className="top-text">
            <div className="title">What if a tutor and an app had a baby?</div>
            <div className="content">
              Kleo captures the magic of learning from a person - in your phone. 
              A friend that guides you through a world where you can learn without limits and practice without judgement. 
              Talk with Kleo anywhere, be understood everywhere</div>
          </div>
          <div className="apple-get">
            <div className="title">Get the App</div>
            <img src={AppleImage} alt="apple-link" />
          </div>
          <div className="signup-form">
            <div className="title">
              Sign up to get announcements: like new language or the Android release
            </div>
            <div className="input">
              <input type="text" />
              <button type="button">Meet Kleo</button>
            </div>
          </div>
        </div>
      </div>
      <HowTo />
      <Lessons />
      <Testimonials />
      <Team />
      <Download />
      <Footer />
    </div>
  )
}

export default Home;