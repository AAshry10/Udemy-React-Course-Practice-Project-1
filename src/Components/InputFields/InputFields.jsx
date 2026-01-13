import SingleInput from './SingleInput';
import './InputFields.css';

export default function InputFields({userInputs, handleChange}) {
    return (
        <section id='user-input'>
            <div className="input-group">
                <SingleInput 
                    label={"Initial Investment"}
                    value={userInputs.initialInvestment}
                    identifier="initialInvestment"
                    onChange={handleChange}
                />
                <SingleInput 
                    label={"Annual Investmen"}  
                    value={userInputs.annualInvestment}
                    identifier="annualInvestment"
                    onChange={handleChange}
                />
            </div>

            <div className="input-group">
                <SingleInput 
                    label={"Expected Return"}  
                    value={userInputs.expectedReturn}
                    identifier="expectedReturn"
                    onChange={handleChange}
                />
                <SingleInput 
                    label={"Duration"} 
                    value={userInputs.duration}
                    identifier="duration"
                    onChange={handleChange}
                />
            </div>
        </section>
    )
}