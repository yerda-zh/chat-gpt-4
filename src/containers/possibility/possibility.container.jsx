import './possibility.styles.css';
import possibilityImage from '../../assets/robot.png';

const Possibility = () => {
  return (
    <div className="gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt4__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Roughly 44 percent of companies are looking to make serious
          investments in AI and integrate it into their businesses. And of the
          9,130 patents received by IBM inventors in 2021, 2,300 were
          AI-related.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;