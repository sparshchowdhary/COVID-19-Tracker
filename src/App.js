import React from 'react';
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountrySelector from './Components/CountrySelector/CountrySelector'
import styles from './styles.css';
import { fetchData } from './API/backend'
import image from './Images/image.jpg'; 

class App extends React.Component {
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fdata=await fetchData();
    this.setState({data:fdata});
  }
  handleCountry=async country=>{
    const fdata=await fetchData(country);
    this.setState({data:fdata,country:country});
  }
  render(){
    const{data,country}=this.state;
    return(
      <div className={styles.container}>
        <div id='img-container'>
          <img className={styles.image} src={image} alt="COVID-19"/>
        </div>
        <Cards data={data}/>  
        <CountrySelector handleCountry={this.handleCountry}/>
        <Charts data={data} country={country}/>
      </div>
    )
  }
}

export default App;
