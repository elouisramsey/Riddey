interface IBoard {
  featureNumber: number
}

interface IButton {
  children: React.ReactNode
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export type { IBoard, IButton }
