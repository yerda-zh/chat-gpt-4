import './blog.styles.css';
import Article from '../../components/article/article.component';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt4__blog section__padding" id="blog">
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="April 24, 2018"
            text="How artificial intelligence is transforming the world"
            url="https://www.brookings.edu/articles/how-artificial-intelligence-is-transforming-the-world/"
          />
        </div>
        <div className="gpt4__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="August 16, 2022"
            text="Samsung Research: Artificial Intelligence"
            url="https://research.samsung.com/artificial-intelligence"
          />
          <Article
            imgUrl={blog03}
            date="December 10, 2019"
            text="Transforming On-device Intelligence with Qualcomm Snapdragon"
            url="https://www.einfochips.com/blog/transforming-on-device-intelligence-with-qualcomm-snapdragon/"
          />
          <Article
            imgUrl={blog04}
            date="November 30, 2021"
            text="How we can leverage Artificial Intelligence to Automate Software Application Testing"
            url="https://cloudqa.io/how-we-can-leverage-artificial-intelligence-to-automate-software-application-testing/"
          />
          <Article
            imgUrl={blog05}
            date="February 20, 2020"
            text="Introducing Udacity’s First Executive Program: AI for Business Leaders"
            url="https://www.udacity.com/blog/2020/02/introducing-udacitys-first-executive-program-ai-for-business-leaders.html"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;