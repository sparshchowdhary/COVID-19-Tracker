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
    //console.log(dailyData);
    const linechart=(
        dailyData.length?(
            <Line
               data={{
                   labels:dailyData.map(({date})=>date),
                   datasets:[{
                       data:dailyData.map(({confirmed})=>confirmed),
                       label:'Infected',
                       backgroundColor:' #fffc00',
                       borderColor: 'black',
                       borderWidth: 0.5,
                       fill:true
                   },{
                       data:dailyData.map(({deaths})=>deaths),
                       label:'Casualities',
                       backgroundColor:' #ed213a',
                       borderColor: 'black',
                       borderWidth: 0.5,
                       fill:true
                   },{
                       data:dailyData.map(({recovered})=>recovered),
                       label:'Recovered',
                       backgroundColor:' #24FE41',
                       borderColor: 'black',
                       borderWidth: 0.5,
                       fill:true
                   }]
               }}
               options={{
                legend:{display:true,labels:{fontColor:'black'}},
                scales:{yAxes:[{ticks:{fontColor:'black',fontSize:12}}],xAxes:[{ticks:{fontColor:'black',fontSize:12}}]},
                title:{display:true,text:'Current situation across world',fontColor:'black'}
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
                        borderColor: 'black',
                        borderWidth: 0.5,
                        backgroundColor:['#fffc00', '#24FE41', ' #ed213a'],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    scales:{yAxes:[{ticks:{fontColor:'black',fontSize:15}}],xAxes:[{ticks:{fontColor:'black',fontSize:15}}]},
                    title:{display:true,text:`Current situation in ${country}`,fontColor:'black'}
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