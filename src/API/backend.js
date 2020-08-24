import axios from 'axios'

const url='http://covid19.mathdro.id/api' //api to be consumed

export const fetchData=async country=>{
    let curl=url;
    if(country){
       curl=`${url}/countries/${country}`;
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(curl);
        return {confirmed,recovered,deaths,lastUpdate};
    }catch(error){
        console.log(error);
    }
}

export const fetchDailyData=async ()=>{
    let durl=`${url}/daily`;
    try{
        const {data}=await axios.get(durl);
        const updatedData=data.map(dailyData=>({
           confirmed:dailyData.confirmed.total,
           deaths:dailyData.deaths.total,
           recovered:dailyData.recovered.total,
           date:dailyData.reportDate,   
        }));
        return updatedData;
    }catch(error){
        console.log(error);
    }
}

export const fetchCountries=async ()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }catch(error){
        console.log(error);
    }
}