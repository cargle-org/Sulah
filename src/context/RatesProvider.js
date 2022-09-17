import { createContext, useState , useEffect} from "react";
import axios from 'axios'

const RatesContext = createContext({});


export const RatesProvider = ({ children }) => {
    const [ rates, setRates] = useState([]);
    const [loading, setLoading] = useState(true)
    const [updatedAt, setUpdatedAt] = useState('')

    useEffect(() => {
        axios.get("https://sulah-api.herokuapp.com/api/getRates")
        .then(function (response) {
            const updatedTime = response.data.last_updated_at;
            const data = response.data.rates;
            setRates(data)
            setUpdatedAt(updatedTime)
            setLoading(false)
        })
        .catch(function (error) {
            if(error){
                setLoading(true)
            }
            
        })
    }, [])

    return <RatesContext.Provider value={{rates, setRates, loading, setLoading, updatedAt}}>{children}</RatesContext.Provider>
}

export default RatesContext