import './index.css'

const DenominationItem = props => {
  const {eachList, onWithdrawals} = props
  const {value, id} = eachList

  const onDescrease = () => {
    onWithdrawals(id)
  }
  return (
    <li>
      <button type="button" className="button" onClick={onDescrease}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
