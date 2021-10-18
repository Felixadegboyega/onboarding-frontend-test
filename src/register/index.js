import React, {useState} from 'react'
import BusinessCategory from './business-category';
import './index.css';
import SocialHandles from './social-handles';
import VerifyAccount from './verify-account';
import leftImg from '../assets/left-img.png'


export default function Register() {
	const [ regDetails, setRegDetails ] = useState( { bvn:'', accountNum: '', bank: '', abeg: '@', instagram: '@', twitter: '@', type: '', category: '', usingPOS : false } );

	const handleInputChange = ( e ) => {
		console.log( e );
		setRegDetails( {...regDetails, [ e.target.name ]: e.target.value} );
	}

	const changeUsingPOS = (condition) => {
		setRegDetails({...regDetails, usingPOS:condition})
	}



	const defaultSteps = [
		{id:1, completed: true, active: true, text:'Verify Account', component: <VerifyAccount handleInputChange={handleInputChange} regDetails={regDetails} />, action:'Continue'},
		{id:2, completed: false, active: false, text:'Social Handles', component: <SocialHandles handleInputChange={handleInputChange} regDetails={regDetails} />, action:'Confirm Social Handles'},
		{id:3, completed: false, active: false, text:'Business Category', component: <BusinessCategory handleInputChange={handleInputChange} regDetails={regDetails} />, action:'Complete'},
	]
	const [steps, setSteps] = useState(defaultSteps)
	const [activeStep, setActiveStep] = useState(steps[0])
	const changeStep = ( index ) => {
		let updatedSteps = steps.map((each, i)=>i === index ? {...each, active:true} : {...each, active:false})
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
						// () => {
						// 	if (activeStep.id === 1) {
						
						// 		return <VerifyAccount handleInputChange={handleInputChange} regDetails={regDetails} />
						// 	} else if (activeStep.id === 2) {
								
						// 		return <SocialHandles handleInputChange={handleInputChange} regDetails={regDetails} />
						// 	} else {

						// 		return <BusinessCategory handleInputChange={handleInputChange} regDetails={regDetails} />
						// 	}
							
						// }
						activeStep.component
					}
						<div className="bottom-div">
							<button onClick={nextStep} className="submit-button">{activeStep.action}</button>
						</div>
					</div>

				</div>
		</>
	)
}
