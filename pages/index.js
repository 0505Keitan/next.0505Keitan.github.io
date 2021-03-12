import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Top from '../components/Top'
import Skills from '../components/Skills'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Top />
        <Profile />
        <Skills />
      </div>
    </div>
  )
}
