// import styles from "./WelcomeText.module.css"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <span>Loading...</span>
  }

  return (
    <span>
      Нажмите "Играть", чтобы начать игру, и дождитесь появления первой стрелки
    </span>
  )
}

export default WelcomeText
