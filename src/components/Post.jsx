import styles from "./Post.module.css";
import { useState } from "react";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  const[comment, setComment] = useState('');
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/leokazuyukinagatani.png"/>
          <div className={styles.authorInfo}>
            <strong>Leo Kazuyuki Nagatani</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de novembro ás 15:15h" dateTime="2022-11-11 15:15:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        {
          comment && 
          <button type="submit">Publicar</button>
        }
      </form>
      <div className={styles.commentList}>
        <Comment/>
      </div>
    </article>
  );
}
