import styles from "./WelcomeText.module.css"
import stylesCommon from "../../RandomKeys.module.css"
import Loader from "./img/loader.svg"

import { TypographyText } from "../../../../../UI"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img src={Loader} alt="Зфгрузка" className={styles.loader} />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Нажмите "Играть", чтобы начать игру, и дождитесь появления первой стрелки
    </TypographyText>
  )
}

export default WelcomeText
