export const getArtWork = async id => {
  try {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${[id]}`)
    if (!response.ok) throw new Error('not a valid response')
    const responseData = await response.json()
    console.log(responseData)
    return responseData
  } catch (err) {
    console.warn(err.message)
  }
}
