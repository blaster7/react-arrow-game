import { TypographyHeader, TypographyText } from "../../../UI"

const Description: React.FC = () => {
  return (
    <div>
      <TypographyHeader>↑↓→← Игра Стрелка: описание игры</TypographyHeader>
      <TypographyText>
        Цель игрока - нажать клавишу со стрелкой на клавиатуре, которая была ему
        показана , до того, как появится следующая.
      </TypographyText>
      <TypographyText>
        После трех подряд удачных попаданий - игра выиграна, после трех ошибок -
        потерянный.
      </TypographyText>
    </div>
  )
}

export default Description
