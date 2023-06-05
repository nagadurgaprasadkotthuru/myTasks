import './index.css'

const Tag = props => {
  const {tagDetails, activeOptionId, onChangeActiveOptionId} = props
  const {optionId, displayText} = tagDetails
  const activeClass = activeOptionId === optionId ? 'active' : ''
  const changeActiveOptionId = () => onChangeActiveOptionId(optionId)
  return (
    <li className="tag-element">
      <button
        className={`tag-button ${activeClass}`}
        type="button"
        onClick={changeActiveOptionId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tag
