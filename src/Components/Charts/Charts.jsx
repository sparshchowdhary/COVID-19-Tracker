import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../API/backend'
import { Line, Bar } from 'react-chartjs-2'
import styles from './charts.css'

const Charts=({data:{confirmed,recovered,deaths},country})=>{
    const [dailyData,setDailyData]=useState([]);
    useEffect(()=>{
       const fetchAPI=async ()=>{
           setDailyData(await fetchDailyData());
       }
       fetchAPI();
    },[]);
    const linechart=(
        dailyData.length?(
            <Line
               data={{
                   labels:dailyData.map(({date})=>date),
                   datasets:[{
                       data:dailyData.map(({confirmed})=>confirmed.value),
                       label:'Infected',
                       backgroundColor:' rgb(255, 255, 108)',
                       fill:true
                   },{
                       data:dailyData.map(({deaths})=>deaths.value),
                       label:'Casualities',
                       backgroundColor:' rgb(255, 115, 115)',
                       fill:true
                   },{
                       data:dailyData.map(({recovered})=>recovered.value),
                       label:'Recovered',
                       backgroundColor:' rgb(87, 226, 87)',
                       fill:true
                   }]
               }}
            />
        ):null
    );
    const barchart=(
        confirmed?(
            <Bar
                data={{
                    labels:['Infected','Recovered','Casualities'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[' rgb(255, 255, 108)', ' rgb(87, 226, 87)', ' rgb(255, 115, 115)'],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true,text:`Current situation in ${country}`}
                }}
            />
        ):null
    );
    return (
        <div className={styles.container}>
            {country?barchart:linechart}
        </div>
    )
}

export default Charts