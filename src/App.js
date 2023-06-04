import {Component} from 'react'

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
  render() {
    return (
      <div className="bg-container">
        <form className="form" type="submit">
          <h1 className="heading">Create a task</h1>
          <label className="label" htmlFor="task">
            Task
          </label>
          <input
            className="task-input"
            type="text"
            id="task"
            placeholder="Enter the task here"
            onChange={this.onChangeTaskInput}
          />
          <label className="label" htmlFor="tags">
            Tags
          </label>
          <select
            className="tags-input"
            id="tags"
            onChange={this.onChangeTaskInput}
          >
            {tagsList.map(eachItem => (
              <option id={eachItem.optionId}>{eachItem.displayText}</option>
            ))}
          </select>
        </form>
      </div>
    )
  }
}

export default App
