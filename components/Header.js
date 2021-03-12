import styles from '../styles/Header.module.scss'

export default function Profile() {
  return (
    <header>
      <a href="/" className={styles.title}>0505Keitan</a>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li><a href="https://www.notion.so/0505keitan/0505Keitan-ebc28d56ab2f4baeb896165924054214">About</a></li>
          <li><a href="https://portfolio.0505keitan.now.sh/">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  )
}