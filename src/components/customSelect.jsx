import { ColumnCustom } from './columnCustom'

export const CustomSelect = ({ children, text, onClick }) => {
  return (
    <ColumnCustom className={'custom-select-place-holder'} onClick={onClick}>
      {children} {text}
    </ColumnCustom>
  )
}
