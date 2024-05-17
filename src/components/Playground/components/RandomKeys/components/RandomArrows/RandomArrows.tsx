import styles from "./RandomArrows.module.css"

import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ERROW_CODES } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }
    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }

    return styles.icon
  }

  return (
    <>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ERROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
