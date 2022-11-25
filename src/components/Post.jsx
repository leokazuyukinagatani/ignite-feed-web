import styles from "./Post.module.css";
import { useState } from "react";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns/esm";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(event) {
    setNewComment(event.target.value);
  }

  function handleCreateNewComment(event) {
    event.preventDefault();
    console.log("oi");
    setComments([...comments, newComment]);
    setNewComment("");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
        />
        {newComment && <button type="submit">Publicar</button>}
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment content={comment} />
        ))}
      </div>
    </article>
  );
}
