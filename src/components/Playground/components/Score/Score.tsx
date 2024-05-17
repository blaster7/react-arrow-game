// import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <h3>Очки</h3>
      <span>Ошибки: {state.totalUnsuccessful}</span>
      <br />
      <span>Успешно: {state.totalSuccessful}</span>
    </div>
  )
}

export default Score
