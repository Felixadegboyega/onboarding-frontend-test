import React from 'react'
import './index.css'
import './business-category.css';


export default function BusinessCategory( props ) {
	let {handleInputChange, regDetails, changeUsingPOS} = props;
	
	
	return (
		<div className="fade left-slide">
			<small className="text-num">Step 3/3</small>
			<div className="step-cont">
				<h3 className="step-heading">Business Category</h3>
				<div className="input-section">
					<div className="input-cont select-cont-1">
						<label>Type of your business </label>
						<select value={regDetails.type} onChange={handleInputChange} name="type"></select>
					</div>	
					<div className="input-cont select-cont-2">
						<label>Business Category </label>
						<select value={regDetails.category} onChange={handleInputChange} name="category" ></select>
					</div>	
				</div>
				<div className="pos-question">
					<small className="sub-text">Do you use POS machines for your business?</small>
					<div onClick={()=>changeUsingPOS(true)} className={`option-button ${regDetails.usingPOS ? 'active' : ''}`}>Yes</div>
					<div onClick={()=>changeUsingPOS(false)} className={`option-button ${!regDetails.usingPOS ? 'active' : ''}`}>No</div>
				</div>

				
			</div>
		</div>
	)
}
