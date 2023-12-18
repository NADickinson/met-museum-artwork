import { useEffect, useState } from 'react'
import { getExhibitTotal } from './api/getExhibitTotal'
import { BackgroundContainer } from './components/backgroundContainer'
import { getArtWork } from './api/getArtWork'
import { ArtWork } from './components/artWork'
import { convertFormat } from './api/convertFormat'

export const App = () => {
  const [totalExhibits, setTotalExhibits] = useState('')
  const [currentArt, setCurrentArt] = useState(undefined)

  useEffect(() => {
    const totalExhibitStateSetter = async () => {
      const totalWithArt = await getExhibitTotal()
      const totalPublicArt = await convertFormat()
      const finalArtArray = totalPublicArt.filter(publicArt => {
        return totalWithArt.includes(Number(publicArt[4]))
      })
      console.log(finalArtArray)

      setTotalExhibits(finalArtArray)
      console.log(totalExhibits)
    }
    totalExhibitStateSetter()

    const currentArtStateSetter = async () => {
      const getArt = await getArtWork(52)
      setCurrentArt(getArt)
    }
    currentArtStateSetter()
  }, [])

  return (
    <BackgroundContainer>
      <ArtWork artWork={currentArt} />
    </BackgroundContainer>
  )
}
