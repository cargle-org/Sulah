import { useState, useContext, useEffect } from "react"
import { TradeContainer, TradeHeader, TradeType, TradeWrapper, TradeForm, InputGroup } from "../atoms/styled-pages"
import redArrow from '../assets/svg/redArrow.svg'
import greenArrow from '../assets/svg/greenArrow.svg'
import { useColorMode } from "@chakra-ui/react"
import greenLogo from '../assets/svg/greenLogo.svg'
import SelectCurrency from "./SelectCurrency"
import { StyledButtons } from "../atoms/styled-buttons"
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useToast, useDisclosure } from '@chakra-ui/react'
import SuccessModal from "./SuccessModal"
import RatesContext from "../context/RatesProvider"
import axios from 'axios'
import Loading from "./Loading"


export default function Trade(props) {
    const {rates} = useContext(RatesContext);
    const [isLoading, setisLoading] = useState(false)
    const { colorMode } = useColorMode();
    const [tradeType, setTradeType] = useState('buy')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [naira, setNaira] = useState('0')
    // const [isLoading, setisLoading] = useState(false)
    const sellTrade = ()=> {
        setTradeType('sell')
        formik.setFieldValue('trade_type', 'sell')
    }
    const buyTrade = ()=> {
        setTradeType('buy')
        formik.setFieldValue('trade_type', 'buy')
    }
    const openTrade = props.show;
    // const handleCurrency = (value) => {
    //     setCurrency(value)
    //     console.log(currency)
    // }
    // const successToast = useToast();
    const failedToast = useToast();
    let currencyFormatter = Intl.NumberFormat('en-US');
   
    const formik = useFormik({
        initialValues: {
            trade_type: `${tradeType}`,
            currency: '',
            amount: '',
            naira_equivalent: `${naira}`,
            email: ''
        },
        validationSchema: yup.object({
            currency: yup.string()
                        .label('Currency') 
                        .required(),
            amount: yup.string()
                        .label('Amount')  
                        .required(),
            email: yup.string()
                      .label('Email Address') 
                        .email()
        }),
        onSubmit: function (values, {resetForm}) {
            setisLoading(true)
            console.log(values)
           axios.post('https://sulah-api.herokuapp.com/api/requestTrade', values)
           .then(function(response){
            setisLoading(false)
            resetForm();  
            props.onClick();
            onOpen();
           })
           .catch(function(error){
           if(error){
            failedToast({
                title: 'Request Failed.',
                description: "Please try again.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
           }
           }) 
          
        }
    })
    const currency = formik.values.currency;
    const amount = formik.values.amount.replace(',', '');
    
useEffect(() => {
    rates.map(rate => {
        if (rate.abbreviation === currency && tradeType === 'buy'){
            const buyExchange = rate.sell_rate * Number(amount);
            setNaira(buyExchange)
            formik.setFieldValue('naira_equivalent', naira)
        } else if (rate.abbreviation === currency && tradeType === 'sell'){
            const sellExchange = rate.buy_rate *  Number(amount);
            setNaira(sellExchange)
            formik.setFieldValue('naira_equivalent', naira)
        } 
        return rate
    })
}, [amount, currency, rates, tradeType, naira]);

  return (
    <>
   <TradeContainer className={openTrade ? 'show' : ''}>
    <TradeHeader className={colorMode}>
        {colorMode === 'light' ? <img onClick={props.onClick} src={greenArrow} alt="icon" /> : <img onClick={props.onClick} src={redArrow} alt="icon" />}
        <div className="heading">
            <img src={greenLogo} alt="logo" />
            <h2>Trade Now</h2>
        </div>
    </TradeHeader>
        <h1>What do you want to do?</h1>
        <TradeType>
            <p onClick={buyTrade} className={tradeType === 'buy' ? 'buy' : ''}>Buy</p>
            <p onClick={sellTrade} className={tradeType === 'sell' ? 'sell' : ''}> Sell</p>
        </TradeType>
        <TradeForm onSubmit={formik.handleSubmit}>
        <TradeWrapper>
        <InputGroup>
            <label htmlFor="amount">Enter Amount</label>
            <div className="input">
                <input 
                className={formik.touched.amount && formik.errors.amount ? 'error' : ''}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={currencyFormatter.format(amount)}
                type="text"
                name="amount"
                id="amount"
                 />
            </div>
            {formik.touched.amount && formik.errors.amount && (
               <small className='errorText'>{formik.errors.amount}</small>)}
            </InputGroup>
            <InputGroup>
            <label htmlFor="currency">Pick Currency</label>
            <SelectCurrency formik={formik} className={formik.touched.currency && formik.errors.currency ? 'error' : ''} />
            {formik.touched.currency && formik.errors.currency && (
               <small className='errorText'>{formik.errors.currency}</small>)}
            </InputGroup>
            <InputGroup>
            <label htmlFor="naira">Naira Equivalent</label>
            <div className="naira-input">
            <span>??? {currencyFormatter.format(naira)}</span>
            </div>
            </InputGroup>
            <InputGroup>
            <label htmlFor="email">Enter Your Email Address</label>
            <div className="input">
                <input 
                className={formik.touched.email && formik.errors.email ? 'error' : ''}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                type="email"
                name="email"
                id="email"
                required
                 />
            </div>
            {formik.touched.email && formik.errors.email && (
               <small className='errorText'>{formik.errors.email}</small>)}
            </InputGroup>
        </TradeWrapper>
        <div className="trade-btn">
        {isLoading && <Loading />}
        <StyledButtons type="submit" className={colorMode}> Trade Now </StyledButtons>
        </div>
     </TradeForm>
   </TradeContainer>
   <SuccessModal isOpen={isOpen} onClose={onClose} />
   </>
  )
}
