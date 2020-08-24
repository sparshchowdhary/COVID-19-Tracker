import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl, Box } from '@material-ui/core'
import styles from './countrySelector.css'
import {fetchCountries} from './../../API/backend'

const CountrySelector=({handleCountry})=>{
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);
    
    return (
        <Box marginTop={8} textAlign='center'>
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue='' onChange={e=>handleCountry(e.target.value)}>
                <option value=''>Choose a Country</option>
                {fetchedCountries.map((country,c)=><option key={c} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
        </Box>
    )
}

export default CountrySelector