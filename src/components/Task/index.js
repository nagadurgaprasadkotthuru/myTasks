import './index.css'

const Tag = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails
  return (
    <li className="tag-element">
      <p className="task">{task}</p>
      <p className="tag">{tag}</p>
    </li>
  )
}

export default Tag
