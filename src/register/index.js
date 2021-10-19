import React, {useState} from 'react'
import BusinessCategory from './business-category';
import './index.css';
import SocialHandles from './social-handles';
import VerifyAccount from './verify-account';
import leftImg from '../assets/left-img.png'


export default function Register() {

	const defaultSteps = [
		{id:1, completed: false, active: true, text:'Verify Account', action:'Continue'},
		{id:2, completed: false, active: false, text:'Social Handles', action:'Confirm Social Handles'},
		{id:3, completed: false, active: false, text:'Business Category', action:'Complete'},
	]

	const [steps, setSteps] = useState(defaultSteps)
	const [ activeStep, setActiveStep ] = useState( steps[ 0 ] )
	
	const changeStep = ( index ) => {
		let updatedSteps = steps.map( ( each, i ) => i === index ? {...each, active: true} : {...each, active: false} )
		setSteps( updatedSteps );
		setActiveStep( steps[ index ] );
	}

	const getStepClass = (step) => {
		if ( step.active ) {
			return 'active fade';
		} else if (step.completed) {
			return 'completed fade';
		} else {
			return '';
		}
	}
	
	const nextStep = () => {
		steps.forEach((element, i) => {
			if ( (element.id === activeStep.id) && (i+1< steps.length )) {
				changeStep(i+1)
			}
		});
	}
	
	
	const [ regDetails, setRegDetails ] = useState( { bvn:'', accountNum: '', bank: 'Access', abeg: '@', instagram: '@', twitter: '@', type: '', category: '', usingPOS : false } );
	
	const handleInputChange = ( e ) => {
		let name = e.target.name;
		let value = e.target.value;
		setRegDetails( {...regDetails, [ name ]: value} );

		if ( name === 'bvn' && value.length == 11) {
			let updatedSteps = steps.map((each, i)=>each.id === 1 ? {...each, completed:true} : each)
			setSteps( updatedSteps );
		} else if((name === 'accountNum' || name === 'bank') && (regDetails.accountNum.length > 8 && regDetails.bank != '')) {
			let updatedSteps = steps.map((each, i)=>each.id === 1 ? {...each, completed:true} : each)
			setSteps( updatedSteps );
		} else {
			let updatedSteps = steps.map((each, i)=>each.id === 1 ? {...each, completed:false} : each)
			setSteps( updatedSteps );
		}
	}

	const changeUsingPOS = (condition) => {
		setRegDetails({...regDetails, usingPOS:condition})
	}
	
	return (
		<>
			<div className="whole-container">
					<div className="left-cont">
						<img src={leftImg} className="left-img" alt="left img" />
					</div>
					<div className="right-cont">
						<div>
							<button className="logout-button">Logout</button>
						</div>
						<div className="navigation">
							{
								steps.map( ( each, i ) => (
									<div key={i} onClick={()=>changeStep(i)} className={`nav ${getStepClass(each)}`}>
										<div className={`nav-item-num ${(each.completed && !each.active) ? 'completed' : ''}`}>{(each.completed) ? '✔' : each.id}</div>
										<h4 className="nav-link-heading">{each.text}</h4>
									</div>
								))
							}
						</div>
							{
								activeStep.id === 1 ? <VerifyAccount handleInputChange={handleInputChange} regDetails={regDetails} /> : ''
							}
							{
								activeStep.id === 2 ? <SocialHandles handleInputChange={handleInputChange} regDetails={regDetails} /> : ''
							}
							{
								activeStep.id === 3 ? <BusinessCategory handleInputChange={handleInputChange} regDetails={regDetails} changeUsingPOS={changeUsingPOS} /> : ''
							}
						<div className="bottom-div">
							<button onClick={nextStep} className="submit-button">{activeStep.action}</button>
						</div>
					</div>

				</div>
		</>
	)
}
