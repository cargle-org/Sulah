import USA from '../assets/images/USA.png'

export default function RatesRow(props) {
  return (
    <tr>
    <td className='currency-row'>
    <div className="flag">
<img src={USA} alt="flag" />
</div>
        <p>{props.name} <b>{props.abbreviation}</b></p>
    </td>
    <td>{props.buy}</td>
    <td>{props.sell}</td>
</tr>
  )
}
