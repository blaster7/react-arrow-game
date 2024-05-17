// import styles from "./KeyPressed.module.css"

import { useCallback, useEffect } from "react"
import { MAP_ERROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const dispatch = useAppDispatch()
  const keyPressedElement = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ERROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <h3>Нажатая клавиша</h3>
      <span>{keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
