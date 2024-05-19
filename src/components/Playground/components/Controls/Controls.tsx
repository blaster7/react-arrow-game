import styles from "./Controls.module.css"
import { Button } from "../../../UI"
import { PlayArrow, Pause } from "@mui/icons-material"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        endIcon={<PlayArrow />}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.button}
      >
        Играть
      </Button>
      <Button
        endIcon={<Pause />}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.button}
      >
        Пауза
      </Button>
    </div>
  )
}

export default Controls
