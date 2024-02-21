export const ColumnCustom = ({ children, className, onClick }) => {
  return (
    <div className={`column ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
