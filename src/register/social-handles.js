import React from 'react'
import './index.css'
import './social-handles.css'


export default function SocialHandles(props) {
	let {handleInputChange, regDetails} = props;

	return (
		<div className="fade left-slide">
			<small className="text-num">Step 2/3</small>
			<div className="step-cont">
				<h3 className="step-heading">Social Handles</h3>
				<div className="description">Enter your business social media handles</div>
				<div className="social-handles-section">
					<div className="input-cont input-cont-1">
						<label>Choose your Abeg Tag (required) </label>
						<input value={regDetails.abeg} onChange={handleInputChange} name="abeg" />
					</div>	
					<div></div>	
				</div>
				<div className="social-handles-section">
					<div className="input-cont input-cont-2">
						<label>Instagram </label>
						<input value={regDetails.instagram} onChange={handleInputChange} name="instagram" />
					</div>	
					<div className="input-cont input-cont-3">
						<label>Twitter </label>
						<input value={regDetails.twitter} onChange={handleInputChange} name="twitter" />
					</div>	
				</div>

				
			</div>
		</div>
	)
}
