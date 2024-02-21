import { ColumnCustom } from './columnCustom'
import { MenuItem } from './menuItem'

const mapExhibitNames = exhibitArr => {
  if (!exhibitArr) {
    return
  }
  return exhibitArr.map(exhibit => {
    return exhibit[9]
  })
}

export const SelectMenu = ({ exhibitArr }) => {
  return (
    <ColumnCustom>
      {mapExhibitNames(exhibitArr)?.map(exhibitName => {
        return <MenuItem item={exhibitName}></MenuItem>
      })}
    </ColumnCustom>
  )
}
