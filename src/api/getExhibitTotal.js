export const getExhibitTotal = async () => {
  const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=""')
  const responseData = await response.json()
  const arrayOfIds = responseData.objectIDs
  return arrayOfIds
}
