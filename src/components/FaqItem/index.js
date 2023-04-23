import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  onClickingIcon = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {showAnswer} = this.state
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq

    let answerElement
    let plusMinusUrl
    let plusMinusAlt
    if (showAnswer) {
      answerElement = (
        <>
          <hr />
          <p className="answer">{answerText}</p>
        </>
      )
      plusMinusUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      plusMinusAlt = 'minus'
    } else {
      plusMinusUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      plusMinusAlt = 'plus'
    }

    return (
      <li className="faq-item-container">
        <div className="question-plus-minus-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="plus-minus-icon-btn"
            onClick={this.onClickingIcon}
          >
            <img
              src={plusMinusUrl}
              className="plus-minus-icon"
              alt={plusMinusAlt}
            />
          </button>
        </div>
        {answerElement}
      </li>
    )
  }
}

export default FaqItem
