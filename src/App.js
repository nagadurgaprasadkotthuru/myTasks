import {Component} from 'react'

import {v4} from 'uuid'

import Tag from './components/Tag'
import Task from './components/Task'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    taskInput: '',
    tagInput: tagsList[0].optionId,
    activeOptionId: '',
    tasksList: [],
  }

  onChangeTaskInput = event => this.setState({taskInput: event.target.value})

  onChangeTagInput = event => this.setState({tagInput: event.target.value})

  onChangeActiveOptionId = id => {
    const {activeOptionId} = this.state
    if (activeOptionId === id) {
      this.setState({activeOptionId: ''})
    } else {
      this.setState({activeOptionId: id})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {taskInput, tagInput} = this.state
    this.setState(prevState => ({
      tasksList: [
        ...prevState.tasksList,
        {
          id: v4(),
          task: taskInput,
          tag: tagInput[0] + tagInput.slice(1).toLowerCase(),
          optionId: tagInput,
        },
      ],
      taskInput: '',
      tagInput: tagsList[0].optionId,
    }))
  }

  renderFormView = () => {
    const {taskInput, tagInput} = this.state
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <h1 className="heading">Create a task!</h1>
        <div className="label-input-container">
          <label className="label" htmlFor="task">
            Task
          </label>
          <input
            className="task-input"
            type="text"
            id="task"
            placeholder="Enter the task here"
            value={taskInput}
            onChange={this.onChangeTaskInput}
          />
        </div>
        <div className="label-input-container">
          <label className="label" htmlFor="tags">
            Tags
          </label>
          <select
            className="tags-input"
            id="tags"
            onChange={this.onChangeTagInput}
            value={tagInput}
          >
            {tagsList.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
        </div>
        <button className="form-button" type="submit">
          Add Task
        </button>
      </form>
    )
  }

  renderTasksShowView = () => {
    const {activeOptionId} = this.state
    return (
      <div className="tasks-show-container2">
        <h1 className="sub-heading">Tags</h1>
        <ul className="tags-container">
          {tagsList.map(eachItem => (
            <Tag
              tagDetails={eachItem}
              activeOptionId={activeOptionId}
              onChangeActiveOptionId={this.onChangeActiveOptionId}
              key={eachItem.optionId}
            />
          ))}
        </ul>
        <h1 className="sub-heading">Tasks</h1>
      </div>
    )
  }

  renderTasksView = () => {
    const {tasksList, activeOptionId} = this.state
    const filteredList = tasksList.filter(eachItem =>
      eachItem.optionId.includes(activeOptionId),
    )
    return (
      <ul className="tasks-container">
        {filteredList.map(eachItem => (
          <Task taskDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderEmptyTaskView = () => (
    <div className="empty-task-view-container">
      <p className="empty-task-view-container-heading">No Tasks Added Yet</p>
    </div>
  )

  render() {
    const {tasksList, activeOptionId} = this.state
    const filteredList = tasksList.filter(eachItem =>
      eachItem.optionId.includes(activeOptionId),
    )
    return (
      <div className="bg-container">
        {this.renderFormView()}
        <div className="tasks-show-container1">
          {this.renderTasksShowView()}
          {filteredList.length !== 0
            ? this.renderTasksView()
            : this.renderEmptyTaskView()}
        </div>
      </div>
    )
  }
}

export default App
