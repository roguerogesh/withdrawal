import './index.css'

const DenominationItem = props => {
  const {eachList, onWithdrawal} = props
  const {value, id} = eachList

  const onWithdrawal = () => {
    onWithdrawal(id)
  }
  return (
    <li>
      <button type="button" className="button" onClick={onWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
