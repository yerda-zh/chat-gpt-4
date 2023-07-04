import './features.styles.css';
import Feature from '../../components/feature/feature.component';

const featuresData = [
  {
    title: "GPT-4 Can Understand More Complex Inputs",
    text: "One of GPT-4's biggest new features is its ability to understand more complex and nuanced prompts.",
  },
  {
    title: "Multimodal Capabilities",
    text: "one of GPT-4's newest features is its multimodal capabilities. The model can accept both text and image prompts.",
  },
  {
    title: "Greater Steerability",
    text: " has also made it harder for the AI to break character, meaning it's less likely to fail when implemented in an app to play a certain character.",
  },
  {
    title: "Performance Improvements",
    text: "Outside of evaluating the model's performance on human exams, OpenAI also evaluated the bot on traditional benchmarks designed for machine learning models.",
  },
];

const Features = () => {
  return (
    <div className="gpt4__features section__padding" id="features">
      <div className="gpt4__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt4__features-container">
        {featuresData.map((feature, index) => (
          <Feature
            title={feature.title}
            text={feature.text}
            key={feature.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;