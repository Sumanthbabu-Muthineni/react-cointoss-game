// Write your code here
import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalScore: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  onClickTossCoin = () => {
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalScore: prevState.totalScore + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    } else if (getNum === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalScore: prevState.totalScore + 1,
        totalTails: prevState.totalTails + 1,
      }))
    }
  }

  render() {
    const {isHead, totalScore, totalHeads, totalTails} = this.state
    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="bg-container2">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tail">Heads (or) Tails</p>
          <img className="toss-img" src={srcImage} alt="toss result" />
          <div>
            <button
              type="button"
              className="toss-button"
              onClick={this.onClickTossCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p className="counting-variables">Total: {totalScore}</p>
            <p className="counting-variables">Heads: {totalHeads}</p>
            <p className="counting-variables">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
