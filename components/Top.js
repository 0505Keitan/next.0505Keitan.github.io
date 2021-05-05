import styles from '../styles/Top.module.scss'

export default function Profile() {
  return (
    <section className={styles.section}>
      <img src="/0505Keitan_v7.jpg" />
      <p className={styles.name}>0505Keitan</p>
      <p className={styles.bio}>WEB ENGINEER / UNIVERSITY STUDENT</p>
  </section>
  )
}