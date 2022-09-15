import { BiCaretDown } from 'react-icons/bi'
import { SelectContainer, SelectWrapper,  SelectInput, SelectContent } from '../atoms/styled-pages'
import Britain from '../assets/images/Britain.png'
import Canada from '../assets/images/Canada.png'
import Japan from '../assets/images/Japan.png'
import Nigeria from '../assets/images/Nigeria.png'
import USA from '../assets/images/USA.png'
import Euro from '../assets/images/Euro.png'
import { useState } from 'react'
import List from './List'

export default function SelectCurrency(props) {
const [selectClick, setSelectClick] = useState(false)

    const handleClick= () => {
        setSelectClick(!selectClick)
    }

    let currencies = [
        {
        currency: 'USD',
        src:`${USA}`
        },
        {
        currency: 'GBP',
        src:`${Britain}`
        },
        {
        currency: 'EUR',
        src:`${Euro}`
        },
        {
        currency: 'JPY',
        src:`${Japan}`
        },
        {
        currency: 'CAD',
        src:`${Canada}`
        },
        {
        currency: 'NGN',
        src:`${Nigeria}`
        }
]
// const addCurrency = () => {
// Currencies.forEach((data) => {
//    console.log(data)
// })
// }

// useEffect(() => {
//     addCurrency();
// }, [])


const formik = props.formik
const [value, setValue] = useState('USD')
const [image, setImage] = useState(`${USA}`)
const updateCurrency = (e) => {
    const current = e.target.children
    const currencyValue =current[1].firstChild.data
    const currencyImg= current[0].attributes[0].nodeValue
    setValue(currencyValue)
    setImage(currencyImg)
    setSelectClick(false)
    formik.setFieldValue('currency', currencyValue)
}

  return (
    <SelectContainer >
    <SelectWrapper>
        <SelectInput onClick={handleClick} id={selectClick ? 'show' : ''} className={props.className} >
            <List src={image} b={value}/>
            <BiCaretDown />
        </SelectInput>
    </SelectWrapper>
    <SelectContent className={selectClick ? 'show' : ''}>
        <ul className="options">
            {currencies.map((data, index) => <List onClick={updateCurrency} key={index} src={data.src} b={
                data.currency} />)}
        </ul>
    </SelectContent>
    </SelectContainer>
  )
}
