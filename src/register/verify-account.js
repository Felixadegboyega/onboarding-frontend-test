// import {KeyboardArrowDown, Lock} from '@material-ui/icons';
import React, {useState} from 'react'
import './index.css'
import './verify-account.css';
import lock from '../assets/Union.svg'
import bvnlock from '../assets/Lock.svg'


export default function VerifyAccount( props ) {
	let {handleInputChange, regDetails} = props;
	const [ showBVNInfo, setShowBVNInfo ] = useState( false );
	const hanleBVNInfo = () => {
		setShowBVNInfo( !showBVNInfo );
	}
	const [ method, setMethod ] = useState( 'BVN' );
	const [ socialHandles, setSocialHandles ] = useState( {accountNum: '', bank: '', bvn:''} );

	// const handleInputChange = (e) => {
	// 	setSocialHandles( {...socialHandles, [ e.target.name ]: e.target.value} );
	// }
	
	return (
		<div className="fade left-slide">
			<small className="text-num">Step 1/3</small>
			<div className="step-cont">
				<h3 className="step-heading">Verify Account</h3>
				<small className="sub-text">Select a verification method</small>
				<div onClick={() => setMethod( "BVN" )} className={`option-button ${method === 'BVN' ? 'active' : ''}`}>BVN</div>
				<div onClick={() => setMethod( "PAN" )} className={`option-button ${method === 'PAN' ? 'active' : ''}`}>Personal Account Number</div>
				
				{
					method === 'BVN' ?
						<div className="fade">
							<div className="input-cont bvn">
								<label>Bank Verification Number (11-digits) </label>
								<input value={regDetails.bvn} onChange={handleInputChange} name="bvn" />
							</div>

							<div className="info-div">
								<div>
									<img className="lock" src={lock} alt="lock" />
								</div>
								<div className="info-main">
									<div className="info-top">
										<small className="info-heading">Why we need your BVN</small>
										<small onClick={hanleBVNInfo} className="show-link">
											{
												!showBVNInfo ? <>
													Show <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M1 3.5L4 0.5L7 3.5" stroke="#5257F5" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</> :
												<>
													Hide <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M1 3.5L4 0.5L7 3.5" stroke="#5257F5" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</>
											}

										</small>
									</div>
									<section className={`${!showBVNInfo ? 'hide-bvn-info' : 'show-bvn-info fade'}`}>
										<div className="info-text">
											<p>We only need acess to your</p>
											<ul>
												<li className="list"> <span className="tick">✔</span> Full Name</li>
												<li className="list"> <span className="tick">✔</span> Phone Number</li>
												<li className="list"> <span className="tick">✔</span> Date of Birth</li>
											</ul>
										</div>
										<small className="small-lock">🔐</small>
										<small className="sub-text info-bottom-text">Your BVN does not give us access to your bank accounts or transactions</small>
									</section>
									
								</div>

							</div>
						</div>
					:
						<div className="fade">
							<div className="input-section">
								<div className="input-cont select-cont-1">
									<label>Account Number </label>
									<input value={socialHandles.accountNum} onChange={handleInputChange} name="accountNum"></input>
								</div>	
								<div className="input-cont select-cont-2">
									<label>Select Bank </label>
									<select value={socialHandles.bank} onChange={handleInputChange} name="bank" ></select>
								</div>	
							</div>
						</div>
				}
			</div>
		</div>
	)
}
