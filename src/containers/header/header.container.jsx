import './header.styles.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Chat GPT4: Elevating Conversations to New Heights!
        </h1>
        <p>
          Chat GPT4 is the next-level conversational AI by OpenAI. Powered by
          advanced technology, it delivers human-like conversations and a wealth
          of knowledge. From answering questions to sparking creativity,
          ChatGPT4 is your ultimate virtual companion.
        </p>

        <div className="gpt4__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt4__header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt4__header-image">
        <img src={ai} alt='ai'/>
      </div>
    </div>
  );
}

export default Header;