import { IEndGameConditions, IMapArrowCodes } from "./types"

export const INTERVAL_TIME: number = 3000
export const MAP_ERROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
}

export const ARR_ARROW_CODES: string[] = Object.keys(MAP_ERROW_CODES)
export const END_GAME_CONDITIONS: IEndGameConditions = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
}
