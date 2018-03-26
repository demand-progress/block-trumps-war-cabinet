import React, { Component } from 'react';
import Form from './Form.jsx';

class Main extends Component {

    render() {
        return (
          <div className="unit">
            <div className="hero" id="bftn-action-form">
                <div>
                    <div id="signThePetition">
                        <Form />
                    </div>
                </div>
                
                <div className="unit">
                    <h4 style={{color: 'white', textAlign: 'center'}}>More information:</h4>
                    <div class="flex-container">
                        <div className="flex-item">
                            <img src="../images/johnbolton.jpeg" alt="John Bolton"/>
                            <p>
                                John Bolton was was an architect of the war in Iraq -- and wishes that it had never ended, having asserted “Iraq today suffers not from the 2003 invasion, but from the 2011 withdrawal of all US combat forces.”  He has argued a preemptive strike on Iran, and thinks that a preemptive attack on North Korea would be justified.  His appointment does not require Senate approval -- but if we can prevent the confirmations Haspel and Pompeo then Bolton will be less powerful. 
                                <br/><br/>   
                            </p>
                        </div>
                        <div className="flex-item">
                            <img src="../images/haspel.png" alt="Gina Haspel"/>
                            <p>
                                Gina Haspel, the CIA Director nominee, led torture programs in secret prisons abroad -- and then engaged in a cover up by ordering the destruction of tapes of the interrogations during which torture took place.  The European Center for Constitutional and Human Rights has called for Haspel's arrest for her role in the torture of detainees. 
                                <br/><br/>   
                            </p>
                        </div>
                        <div className="flex-item">
                            <img src="../images/pompeo.jpeg" alt="Mike Pompeo"/>
                            <p>
                                Trump has also nominated his current CIA head, Mike Pompeo, to become Secretary of State.  Pompeo has historically supported torture, chose torturer Haspel as his deputy at the CIA, and has said that all Muslims are “potentially complicit”in terrorism.
                                <br/><br/>
                            </p> 
                        </div>       
                    </div>
                    <p>
                        We need to block Trump's War Cabinet of Bolton, Haspel, and Pompeo.  Torturers and warmongers must not be rewarded with our nation's highest offices -- and confirming these appointments will vastly increase the likelihood of war with Iran and North Korea, indefinite war in Yemen, torture, and other atrocities.
                        <br/><br/>
                    </p>
                    <p>
                        <strong><a className="back-to-form-link" href="#signThePetition">Please click to send an email demanding that your Senators to oppose Haspel’s CIA Director confirmation and Pompeo’s confirmation as Secretary of State. </a></strong>
                    </p>
                </div>
            </div>
        </div>);
    }
}

export default Main;