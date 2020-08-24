import React from 'react'
import styles from './cards.css'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return 'Wait Data is Loading...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={4} justify='space-evenly'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color='textPrimary' gutterBottom>Infected</Typography>
                        <Typography variant='h4'>
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
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color='textPrimary' gutterBottom>Recovered</Typography>
                        <Typography variant='h4'>
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
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color='textPrimary' gutterBottom>Deaths</Typography>
                        <Typography variant='h4'>
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