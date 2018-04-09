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
                            <div className="imageSection">
                                <p className="imageHeaders">Secretary of State: Mike Pompeo</p>
                                <img src="../images/pompeo.jpeg" alt="Mike Pompeo"/>
                            </div>
                            <p>
                                Trump has nominated his current CIA head, Mike Pompeo, to become Secretary of State. Pompeo has historically supported torture, chose torturer Haspel as his deputy at the CIA, and has said that all Muslims are "potentially complicit" in terrorism. 
                                <br/><br/>
                                As Secretary of State he would be in charge of certifying Iran's compliance with the Iran deal -- which he has asserted his desire to undermine. He has refused to foreclose upon the possibility of launching a preventative war with North Korea, and his support for unauthorized American involvement in conflicts such as that in Yemen. 
                                <br/><br/>
                                The State Department is supposed to play a key role in international climate negotiations, human rights, and preserving peace around the world. But Pompeo is a climate-denying, Islamophobic warmonger who is deep in the pockets of the Koch Brothers.
                                <br/><br/>
                            </p>
                        </div>
                        <div className="flex-item">
                             <div className="imageSection">
                                <p className="imageHeaders">CIA Director: Gina Haspel</p>
                                <img src="../images/haspel.png" alt="Gina Haspel"/>
                            </div>
                            <p>
                                Gina Haspel, the CIA Director nominee, oversaw torture programs in secret prisons abroad -- and then engaged in a cover-up by pushing for the destruction of tapes of the interrogations during which torture took place.The European Center for Constitutional and Human Rights has called for Haspel's arrest for her role in the torture of detainees.
                                <br/><br/>
                            </p>
                        </div>
                        <div className="flex-item">
                            <div className="imageSection">
                                <p className="imageHeaders">National Security Advisor: John Bolton</p>
                                <img src="../images/johnbolton.jpeg" alt="John Bolton"/>
                            </div>
                            <p>
                                And Trump replaced his National Security Advisor with John Bolton, who was an architect of the war in Iraq -- and who wishes that it had never ended, having asserted “Iraq today suffers not from the 2003 invasion, but from the 2011 withdrawal of all US combat forces.” 
                                <br/><br/>
                                Bolton has argued for a so-called preventive strike on Iran, and thinks that a preventive attack on North Korea would be justified. His appointment does not require Senate approval -- but if we can prevent Haspel's and Pompeo's confirmations, then Bolton will be less powerful.
                                <br/><br/>   
                            </p>
                        </div>
                    </div>
                    <p>
                        The confirmation of Haspel or Pompeo would normalize torture, jeopardize human rights, increase the likelihood of war -- and of war crimes, and empower the worst impulses of President Trump and John Bolton.
                        <br/><br/>
                    </p>
                    <p>
                        <strong><a className="back-to-form-link" href="#signThePetition">Please click to send an email demanding that your Senators oppose Haspel’s confirmation as CIA Director and Pompeo’s confirmation as Secretary of State. </a></strong>
                    </p>
                </div>
            </div>
        </div>);
    }
}

export default Main;