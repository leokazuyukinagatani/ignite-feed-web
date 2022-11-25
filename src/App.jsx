import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/leokazuyukinagatani.png",
        name: "Leo Kazuyuki Nagatani",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
        { type: "link", content: "#novoprojeto" },
        { type: "link", content: "#nlw" },
        { type: "link", content: "#rocketseat" },
      ],
      publishedAt: new Date("2022-11-03 10:24:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO @ Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
        { type: "link", content: "#novoprojeto" },
        { type: "link", content: "#nlw" },
        { type: "link", content: "#rocketseat" },
      ],
      publishedAt: new Date("2022-11-10 10:24:00"),
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (<Post author={post.author} content={post.content} publishedAt={post.publishedAt}/>);
          })}
        </main>
      </div>
    </>
  );
}
