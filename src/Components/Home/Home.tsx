import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CreditCardTextBox from '../CreditCardTextBox/CreditCardTextBox';
import Button from '@mui/material/Button';
import './Home.scss';
import { SubmitDataModel } from '../../Models/SubmitData.model';
import { enforceNumber, enforceLength } from '../../Helpers/ChangeHelpers';
import CreditCard from '../CreditCard/CreditCard';


export interface HomeProps {

}

export interface HomeState {
    cardNumber?: string;
    cardName?: string;
    expirationMonth?: string;
    expirationYear?: string;
    cvv?: string;
    showFullCardNumber?: boolean;
}

const months = [
    {
        label: '01',
        value: '1'
    },
    {
        label: '02',
        value: '2'
    },
    {
        label: '03',
        value: '3'
    },
    {
        label: '04',
        value: '4'
    },
    {
        label: '05',
        value: '5'
    },
    {
        label: '06',
        value: '6'
    },
    {
        label: '07',
        value: '7'
    },
    {
        label: '08',
        value: '8'
    },
    {
        label: '09',
        value: '9'
    },
    {
        label: '10',
        value: '10'
    },
    {
        label: '11',
        value: '11'
    },
    {
        label: '12',
        value: '12'
    }
];

const years = [
    {
        label: '2021',
        value: '2021'
    },
    {
        label: '2022',
        value: '2022'
    },
    {
        label: '2023',
        value: '2023'
    },
    {
        label: '2024',
        value: '2024'
    },
    {
        label: '2025',
        value: '2025'
    }
];

class Home extends Component<HomeProps, HomeState>{
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            cardNumber: '',
            cardName: '',
            expirationMonth: '',
            expirationYear: '',
            cvv: '',
            showFullCardNumber: false
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        console.log('state', this.state);
        if (this.isInvalid()) {
            console.warn('Cannot Submit, Invalid State');
            return;
        }
        const submitDataModel: SubmitDataModel = {
            cardNumber: this.state.cardNumber!,
            cardName: this.state.cardName!,
            expirationMonth: parseInt(this.state.expirationMonth!),
            expirationYear: parseInt(this.state.expirationYear!),
            cvv: parseInt(this.state.cvv!)
        }
        console.log('payload', submitDataModel);
    }

    handleCardNumberFocus = (focused: boolean) => (event: React.FocusEvent) => {
        this.setState({
            showFullCardNumber: focused
        });
    }

    isInvalid = () => {
        return !this.state.cardNumber || !this.state.cardName || !this.state.expirationMonth || !this.state.expirationYear || !this.state.cvv;
    }

    render() {
        return (
            <Grid container spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Grid item xs={12}>
                    <CreditCard
                        cardNumber={this.state.cardNumber}
                        cardName={this.state.cardName}
                        expirationMonth={this.state.expirationMonth}
                        expirationYear={this.state.expirationYear}
                        showFullCardNumber={this.state.showFullCardNumber}></CreditCard>
                </Grid>
                <Grid item container xs={12}>
                    <CreditCardTextBox
                        name="cardNumber"
                        value={this.state.cardNumber}
                        label="Card Number"
                        onChange={enforceNumber(enforceLength(16, this.handleChange))}
                        onFocus={this.handleCardNumberFocus(true)}
                        onBlur={this.handleCardNumberFocus(false)}
                    ></CreditCardTextBox>
                </Grid>
                <Grid item container xs={12}>
                    <TextField fullWidth required name="cardName" label="Card Name" variant="standard" value={this.state.cardName} onChange={enforceLength(50, this.handleChange)}></TextField>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                    <Grid item xs={3}>
                        <TextField fullWidth  select required name="expirationMonth" label="Month" variant="standard" value={this.state.expirationMonth} onChange={this.handleChange}>
                            {months.map((month) => (
                                <MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField fullWidth  select required name="expirationYear" label="Year" variant="standard" value={this.state.expirationYear} onChange={this.handleChange}>
                            {years.map((year) => (
                                <MenuItem key={year.value} value={year.value}>{year.label}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth  required label="CVV" name="cvv" variant="standard" value={this.state.cvv} onChange={enforceNumber(enforceLength(3, this.handleChange))} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}></TextField>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={() => { this.handleSubmit() }}>Submit</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Home;