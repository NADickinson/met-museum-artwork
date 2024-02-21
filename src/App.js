import { useEffect, useState } from 'react'
import { getExhibitTotal } from './api/getExhibitTotal'
import { BackgroundContainer } from './components/backgroundContainer'
import { getArtWork } from './api/getArtWork'
import { ArtWork } from './components/artWork'
import { convertFormat } from './api/convertFormat'
import { HeaderBar } from './components/headerBar'
import { BodyContainer } from './components/bodyContainer'
import { CustomSelect } from './components/customSelect'
import { SelectContainer } from './components/selectContainer'
import { SelectMenu } from './components/selectMenu'
import { MenuItem } from './components/menuItem'
import { myArrOfTempIds } from './api/tempArray'

export const App = () => {
  const [totalExhibits, setTotalExhibits] = useState('')
  const [currentArt, setCurrentArt] = useState(undefined)
  const [selectClicked, setSelectClicked] = useState(false)

  useEffect(() => {
    // const totalExhibitStateSetter = async () => {
    //   const totalWithArt = await getExhibitTotal()
    //   const totalPublicArt = await convertFormat()
    //   const finalArtArray = totalPublicArt.filter(publicArt => {
    //     return totalWithArt.includes(Number(publicArt[4]))
    //   })
    // const onlyHighlights = finalArtArray.filter(art => {
    //   return art
    // })

    console.log(myArrOfTempIds)

    setTotalExhibits(myArrOfTempIds)
    setCurrentArt(myArrOfTempIds[1][47])

    // }
    // totalExhibitStateSetter()

    const currentArtStateSetter = async () => {
      const getArt = await getArtWork(4071)
      setCurrentArt(getArt)
    }
    currentArtStateSetter()
  }, [])

  return (
    <BackgroundContainer>
      <HeaderBar></HeaderBar>

      <BodyContainer>
        <ArtWork artWork={currentArt ? currentArt.primaryImage : undefined} />
        <SelectContainer>
          <CustomSelect
            text={'Please select your artwork'}
            onClick={() => {
              setSelectClicked(!selectClicked)
            }}
          ></CustomSelect>
          <SelectMenu exhibitArr={totalExhibits ? totalExhibits : undefined} />
        </SelectContainer>
      </BodyContainer>
    </BackgroundContainer>
  )
}
