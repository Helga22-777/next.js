import Image from "next/image";
import myImg from "./photo1.jpg";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
  <article className={styles.root}>
    <Image className={styles.myImg} src={myImg} alt="my-photo" loading="eager"/>
    <div className={''}>
      Let me introduce myself. My name is Olga Ignatenko. I was born on the 15th of December 1997 in Moscow. I’m fifteen years old. I’m at 10-th grade.
      I have got some hobbies. I’m always very busy but when I’m free I like to read books. I think books help me to continue my education. In my opinion, books are a source of new and useful information. I enjoy reading books about life of famous people, but I hate reading detectives. I think it’s just a waste of time. I also love music. My favorite types of music are dance music, hip-hop and rock. I like to draw. I study at art school and take lessons of painting there. I’m also a photographer. I like to take photos.
      Sometimes I play different sport games. My favorite games are basketball, tennis and volleyball. I don’t like to watch TV, but I do it from time to time. I often go for a walk or to the cinema with my friends or my boyfriend.
    </div>
  </article>
  )
}