import React from "react";

function Article(props) {
  const date = props.date || "January 1, 1970";
  const minutes = props.minutes;

  function getReadingEmoji() {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5));
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10));
    }
  }

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{getReadingEmoji()} {date} min read</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;
