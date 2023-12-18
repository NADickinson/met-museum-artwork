export const getArtWork = async id => {
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${[id]}`)
  const responseData = await response.json()
  console.log(responseData)
  return responseData
}
