// import styles from "./Controls.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        Играть
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        Пауза
      </button>
    </div>
  )
}

export default Controls
