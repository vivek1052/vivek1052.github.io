import CardLineItem from "./cardlineItem";
import { calendarIcon, linkIcon } from "./icons";

const ArticleItem = (article: {
  title: string;
  link: string;
  date: string;
}) => {
  return (
    <CardLineItem
      timeline={false}
      heading={<div>{article.title}</div>}
      subHeadingIcon={calendarIcon}
      subHeading={<div>{article.date}</div>}
      line2Icon={linkIcon}
      line2={<a href={article.link}>{article.link}</a>}
      body={<div></div>}
    />
  );
};

export default function Articles({
  articles,
}: Readonly<{
  articles: {
    title: string;
    link: string;
    date: string;
  }[];
}>) {
  return (
    <div id="articles" className="card">
      <div className="card-title">Articles</div>
      <ul className="list">
        {articles.map((article, i) => {
          return (
            <li key={i} className="list-item">
              <ArticleItem
                title={article.title}
                link={article.link}
                date={article.date}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
