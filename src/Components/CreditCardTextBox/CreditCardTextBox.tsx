import { Component } from 'react';
import TextField from '@mui/material/TextField';
import './CreditCardTextBox.scss';

export interface CreditCardTextBoxProps {
    value?: string;
    label: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

class CreditCardTextBox extends Component<CreditCardTextBoxProps>{
    constructor(props: CreditCardTextBoxProps) {
        super(props);
    }

    render() {
        return (
            <TextField fullWidth required name={this.props.name} label={this.props.label} variant="standard" value={this.props.value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.onChange(event)}
                onFocus={(event: React.FocusEvent<HTMLInputElement>)=> this.props.onFocus(event)}
                onBlur={(event: React.FocusEvent<HTMLInputElement>)=> this.props.onBlur(event)}>
            </TextField>
        )
    }
}

export default CreditCardTextBox;