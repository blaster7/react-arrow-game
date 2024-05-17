// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <span>Ура, победа!</span>
  ) : (
    <span>Вы проиграли!</span>
  )
}

export default ResultMessage
