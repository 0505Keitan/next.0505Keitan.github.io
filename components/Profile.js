import styles from '../styles/Profile.module.scss'

export default function Profile() {
  return (
    <section className={styles.section}>
    <h1>Profile</h1>
    <ul>
      <li>Name: 0505Keitan</li>
      <li>Age: 18</li>
      <li>Place: Tokyo, Japan</li>
      <li>Like: Programming, xR, Tokyo Disney Resort</li>
    </ul>
  </section>
  )
}