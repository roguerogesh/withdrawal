import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'




class CashWithdrawal extends Component {
  state = {currentBalace: 2000}

    onWithdrawal = (id, value) =>{
        this.setState((prevState) => ({currentbalace: prevState.currentBalace - value}))
    }

  render() {
    const {currentBalace} = this.state

    return (
      <div className="container">
        <div className="small-container">
          <div className="logo-container">
            <div className="logo">
              <p>s</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="amount">{currentBalace}</p>
              <p className="rupee">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>

          <ul>{denominationsList.map(each=>(DenominationItem eachList={each} key={each.id} onWithdrawal={this.onWithdrawal}))}</ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
