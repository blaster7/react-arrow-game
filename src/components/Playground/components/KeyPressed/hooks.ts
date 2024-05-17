import { useAppSelector } from "../../../../app/hooks"
import { MAP_ERROW_CODES } from "../../constants"
import { IMapArrowCodes } from "../../types"

export const useKeyPressedElement = (): string => {
  const state = useAppSelector((state) => state.playground)
  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue

    if (enteredValue) {
      return MAP_ERROW_CODES[enteredValue as keyof IMapArrowCodes]
    }
  }

  return "⌛️"
}
