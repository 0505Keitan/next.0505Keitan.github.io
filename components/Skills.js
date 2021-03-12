import styles from '../styles/Skills.module.scss'
import Skill from '../components/Skill'

export default function Skills() {
  return (
    <section className={styles.section}>
      <h1>Skiils</h1>
      <div className={styles.inner}>
        <Skill name="JavaScript" level="★★★★☆" fa="js-square" />
        <Skill name="Node.js" level="★★★★☆" fa="node-js" />
        <Skill name="Python" level="★★★☆☆" fa="python" />
        <Skill name="HTML5" level="★★★★★" fa="html5" />
        <Skill name="CSS3" level="★★★★☆" fa="css3-alt" />
        <Skill name="PHP" level="★★★☆☆" fa="php" />
        <Skill name="Google Apps Script" level="★★★★★" fa="google" />
        <Skill name="SwiftUI" level="★★★☆☆" fa="swift" />
        <Skill name="Nuxt.js" level="★★★☆☆" fa="vuejs" />
      </div>
    </section>
  )
}