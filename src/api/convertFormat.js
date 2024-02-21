import papa from 'papaparse'
export const convertFormat = async () => {
  const response = await fetch('https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv')
  const textResponse = await response.text()
  const parsedData = papa.parse(textResponse)
  const arrayOfAll = parsedData.data
  console.log(arrayOfAll[0])

  const isPublic = () => {
    const result = arrayOfAll.filter(x => {
      return x[3]?.toLowerCase() === 'true'
    })

    return result
  }

  return isPublic()
}
