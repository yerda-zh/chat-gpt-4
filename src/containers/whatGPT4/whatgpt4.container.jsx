import './whatgpt4.styles.css';
import Feature from '../../components/feature/feature.component.jsx';

const WhatGpt4 = () => {
  return (
    <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
      <div className="gpt4__whatgpt4-feature">
        <Feature
          title="What is GPT-4"
          text="GPT-4 is a large multimodal model that exhibits human-level performance on various
          professional and academic benchmarks."
        />
      </div>
      <div className="gpt4__whatgpt4-heading">
        <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt4__whatgpt4-container">
        <Feature
          title="Longer context"
          text="GPT-4 is capable of handling over 25,000 words of text, allowing for
            use cases like long form content creation, extended conversations,
            and document search and analysis."
        />
        <Feature
          title="Knowledgebase"
          text="GPT-4 can solve difficult problems with greater accuracy, thanks to
          its broader general knowledge and problem solving abilities."
        />
        <Feature
          title="Creativity"
          text="GPT-4 is more creative and collaborative than ever before. It can
          generate, edit, and iterate with users on creative and technical
          writing tasks, such as composing songs, writing screenplays, or
          learning a user’s writing style."
        />
      </div>
    </div>
  );
}

export default WhatGpt4;