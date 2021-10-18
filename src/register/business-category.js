import React, {useState} from 'react'
import './index.css'
import './business-category.css';


export default function BusinessCategory(props ) {
	// let {handleInputChange, regDetails} = props;
	// let context = React.useContext( regContext );
	// let {handleInputChange} = context;
	const [ socialHandles, setSocialHandles ] = useState( {type: '', category: '', usingPOS : false} );

	const handleInputChange = (e) => {
		setSocialHandles( {...socialHandles, [ e.target.name ]: e.target.value} );
	}
	const changeUsingPOS = (condition) => {
		setSocialHandles({...socialHandles, usingPOS:condition})
	}
	return (
		<div className="fade left-slide">
			<small className="text-num">Step 3/3</small>
			<div className="step-cont">
				<h3 className="step-heading">Business Category</h3>
				<div className="input-section">
					<div className="input-cont select-cont-1">
						<label>Type of your business </label>
						<select value={socialHandles.type} onChange={handleInputChange} name="type"></select>
					</div>	
					<div className="input-cont select-cont-2">
						<label>Business Category </label>
						<select value={socialHandles.category} onChange={handleInputChange} name="category" ></select>
					</div>	
				</div>
				<div className="pos-question">
					<small className="sub-text">Do you use POS machines for your business?</small>
					<div onClick={()=>changeUsingPOS(true)} className={`option-button ${socialHandles.usingPOS ? 'active' : ''}`}>Yes</div>
					<div onClick={()=>changeUsingPOS(false)} className={`option-button ${!socialHandles.usingPOS ? 'active' : ''}`}>No</div>
				</div>

				
			</div>
		</div>
	)
}
