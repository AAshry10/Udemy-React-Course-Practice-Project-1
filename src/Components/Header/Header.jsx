import logo from '../../assets/investment-calculator-logo.png';
import './Header.css';

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="logo" className="header-logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}