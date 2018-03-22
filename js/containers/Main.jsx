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
                            <img src="../images/haspel.jpg" alt="Gina Haspel"/>
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
                        We must not reward torturers, or those who support torture, with promotions to some of our nation’s highest offices. We cannot be complicit in normalizing such behavior, and people with such warped moral compasses are unfit to serve -- especially under the command of Donald Trump, who has himself expressed support for torture and disdain for human rights norms.
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