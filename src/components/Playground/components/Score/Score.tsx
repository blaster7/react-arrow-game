import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import { Chip, Stack } from "@mui/material"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <TypographyHeader>Очки</TypographyHeader>
      <TypographyText>
        В случае ошибки, успешниые значения сбрасывается на ноль
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          label={
            <>
              Ошибки:{" "}
              <span className={styles.counter}>{state.totalUnsuccessful}</span>
            </>
          }
          variant="outlined"
        />
        <Chip
          className={styles.chipSuccessful}
          label={
            <>
              Успешно:{" "}
              <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
          variant="outlined"
        />
      </Stack>
    </div>
  )
}

export default Score
