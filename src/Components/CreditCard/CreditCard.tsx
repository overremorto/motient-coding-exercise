import { Component } from 'react';
import './CreditCard.scss';
import creditCardBackground from '../../assets/6.jpeg';
import chipBackground from '../../assets/chip.png';
import logoBackground from '../../assets/visa.png';


export interface CreditCardProps {
    cardNumber?: string;
    cardName?: string;
    expirationMonth?: string;
    expirationYear?: string;
    showFullCardNumber?: boolean;
}

class CreditCard extends Component<CreditCardProps>{
    constructor(props: CreditCardProps) {
        super(props);
    }

    render() {
        const cardNumberPart1 = this.props.cardNumber?.substr(0, 4);
        const cardNumberPart2 = this.props.showFullCardNumber ? this.props.cardNumber?.substr(4, 4) : this.props.cardNumber?.substr(4, 4)?.replace(/./g, '*');
        const cardNumberPart3 = this.props.showFullCardNumber ? this.props.cardNumber?.substr(8, 4) : this.props.cardNumber?.substr(8, 4)?.replace(/./g, '*');
        const cardNumberPart4 = this.props.cardNumber?.substr(12, 4);
        const expirationMonth = this.props.expirationMonth ? (parseInt(this.props.expirationMonth) < 10 ? '0' + this.props.expirationMonth : this.props.expirationMonth) : this.props.expirationMonth;
        const expirationYear = this.props.expirationYear?.substr(2,2);

        return (
            <div className="credit-card" style={{backgroundImage:`url(${creditCardBackground})`}}>
                <div className="chip" style={{backgroundImage:`url(${chipBackground})`}}></div>
                <div className="logo" style={{backgroundImage:`url(${logoBackground})`}}></div>
                <div className="card-number">
                    <span className="number-part">{cardNumberPart1}</span>
                    <span className="number-part">{cardNumberPart2}</span>
                    <span className="number-part">{cardNumberPart3}</span>
                    <span className="number-part">{cardNumberPart4}</span>
                </div>
                <div className="card-holder-wrapper">
                    <div className="card-holder">Card Holder</div>
                    <div className="card-name">{this.props.cardName}</div>
                </div>
                <div className="expiration-wrapper">
                    <div className="expires">Expires</div>
                    <div className="expiration-date-wrapper">
                        <div className="expiration-month">{expirationMonth}</div>
                        <div className="expiration-year">/{expirationYear}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreditCard;