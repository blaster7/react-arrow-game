import styles from "./ResultMessage.module.css"

import { TypographyText } from "../../../../../UI"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>Ура, победа!</TypographyText>
      ) : (
        <TypographyText className={styles.text}>Вы проиграли!</TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
