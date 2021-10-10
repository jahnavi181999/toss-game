import {Component} from 'react'

import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    selectedImg: headImg,
    heads: 0,
    tails: 0,
  }

  tossCoin = () => {
    const {selectedImg, heads, tails} = this.state
    const randomNumber = Math.floor(Math.random() * 2)
    let tossImage = ''
    let headsCount = heads
    let tailsCount = tails

    if (randomNumber === 0) {
      tossImage = headImg
      headsCount += 1
    } else {
      tossImage = tailImg
      tailsCount += 1
    }
    this.setState({
      selectedImg: tossImage,
      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {selectedImg, heads, tails} = this.state
    const total = heads + tails
    return (
      <div className="toss-coin-container">
        <div className="toss-coin-box">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="content">Heads (or) Tails</p>
          <img className="toss-img" src={selectedImg} alt="toss result" />
          <button className="toss" type="submit" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="counts">
            <p className="total">Total:{total}</p>
            <p className="heads">Heads:{heads}</p>
            <p className="tails">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
