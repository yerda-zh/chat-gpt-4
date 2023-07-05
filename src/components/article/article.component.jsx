import './article.styles.css';

const Article = ({imgUrl, date, text, url}) => {
  const handleLinkClick = () => {
    window.location.href = `${url}`;
  };
  return (
    <div className="gpt4__blog-container_article">
      <div className="gpt4__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt4__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3 onClick={handleLinkClick}>{text}</h3>
        </div>
        <p onClick={handleLinkClick}>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;