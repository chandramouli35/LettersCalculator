import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChageInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="container">
        <div className="letters-count-container">
          <h1 className="heading">
            Calculate the <br />
            Letters you <br />
            enter
          </h1>
          <label className="phrase" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onClick={this.onChageInputPhrase}
            className="input-container"
          />
          <p className="button" type="button">
            No.of letters: {inputPhrase.length}
          </p>
          console.log(inputPhrase.length)
        </div>

        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
