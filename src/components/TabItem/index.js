import './index.css'

const TabItem = props => {
  const {languageItem, isActive, onSelecting} = props
  const {id, buttonText} = languageItem
  const onClickingBtn = () => {
    onSelecting(id)
  }
  const btnClass = isActive ? 'active-btn' : 'btn'
  return (
    <li>
      <button className={btnClass} type="button" onClick={onClickingBtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
