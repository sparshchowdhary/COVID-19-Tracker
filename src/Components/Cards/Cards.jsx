import React from 'react'
import styles from './cards.css'
import {Card,CardContent,Typography,Grid,makeStyles} from '@material-ui/core'
import CountUp from 'react-countup'

const useStyles = makeStyles({
    infected: {
        background: 'linear-gradient(45deg, #fffc00 30%, #FDFC47 90%)',
        border: 10,
        borderRadius: 10,
        boxShadow: '0 2px 2px 0',
        color: 'black'
    },
    recovered: {
        background: 'linear-gradient(45deg, #24FE41 30%, #0f9b0f 90%)',
        border: 10,
        borderRadius: 10,
        boxShadow: '0 2px 2px 0',
        color: 'black' 
    },
    deaths: {
        background: 'linear-gradient(45deg, #ed213a 30%, #93291e 90%)',
        border: 10,
        borderRadius: 10,
        boxShadow: '0 2px 2px 0',
        color: 'black'
    }
});

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    const classes = useStyles();
    if(!confirmed){
        return 'Wait Data is Loading...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={4} justify='space-evenly'>
                <Grid item component={Card} xs={12} md={3} className={classes.infected}>
                    <CardContent>
                        <Typography color='textPrimary' variant='h5' gutterBottom>Infected</Typography>
                        <Typography variant='h3'>
                            <CountUp
                               start={0}
                               end={confirmed.value}
                               duration={2.0}
                               separator=','
                            />
                        </Typography>
                        <Typography color='textPrimary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body3'>Total Number of Active cases of Corona Virus (COVID-19)</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classes.recovered}>
                    <CardContent>
                        <Typography color='textPrimary' variant='h5' gutterBottom>Recovered</Typography>
                        <Typography variant='h3'>
                            <CountUp
                               start={0}
                               end={recovered.value}
                               duration={2.0}
                               separator=','
                            />
                        </Typography>
                        <Typography color='textPrimary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body3'>Total Number of Recoveries from Corona Virus (COVID-19)</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classes.deaths}>
                    <CardContent>
                        <Typography color='textPrimary' variant='h5' gutterBottom>Deaths</Typography>
                        <Typography variant='h3'>
                            <CountUp
                               start={0}
                               end={deaths.value}
                               duration={2.0}
                               separator=','
                            />
                        </Typography>
                        <Typography color='textPrimary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body3'>Total Number of casualities due to Corona Virus (COVID-19)</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards