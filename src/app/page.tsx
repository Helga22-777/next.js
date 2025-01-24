import styles from "./page.module.css";
import course from "../../course.json";
import { Lesson } from "./lesson";

async function getAllCourses(): Promise<typeof course> {
  return new Promise((resolve) => {
     setTimeout(() => resolve(course),1000)
  })
}

export default async function Home() {
  const courses = await getAllCourses()
  return (
      <main className={styles.main}>
        <h2>test</h2>
          <ul>
          {courses.lessons.map((item)=> {
            return  <li key={item.title}><Lesson title={item.title} shortSummery={item.shortSummery} /></li>
          }   
            )}
          </ul>
      </main>
  );
}
