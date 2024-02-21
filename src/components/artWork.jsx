export const ArtWork = ({ artWork }) => {
  return (
    <div className="art">
      <img
        style={{ position: 'absolute', height: '100%', width: '100%', objectFit: 'contain' }}
        src={artWork}
        alt={''}
      ></img>
    </div>
  )
}
