import styles from '../styles/Skill.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill(props) {
  return (
    <div className={styles.skill}>
      <FontAwesomeIcon className={styles.skill_icon} icon={['fab', props.fa]} />
      <span className={styles.skill_level}>{ props.level }</span>
      <span className={styles.skill_name}>{ props.name }</span>
    </div>
  )
}