import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
          <div id="footer">
            <div className="footer">
                <div className="logos-unit">
                    <div className="built-by">
                        <p><br/><br/>Built by:</p> <img src="../images/demand-progress.png" />
                        <p style={{marginBottom: "50px"}}><br/><br/>Participating organizations:</p>  
                          <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center", marginTop: "-50px", borderBottomColor:"white"}}>

                              <div className="logoTextContainer">
                                  <div className="logoText">About Face</div>
                                  <div className="logoText">American Family Voices</div>
                                  <div className="logoText">Common Defense</div>
                                  <div className="logoText">Daily Kos</div>
                                  <div className="logoText">Demand Progress</div>
                                  <div className="logoText">Democracy for America</div>
                                  <div className="logoText">Friends of the Earth</div>
                                  <div className="logoText">Just Foreign Policy</div>
                                  <div className="logoText">Peace Action</div>
                                  <div className="logoText">People Demanding Action</div>
                                  <div className="logoText">People for the American Way</div>
                                  <div className="logoText">Progress America</div>
                                  <div className="logoText">Progressive Congress Action Fund</div>
                                  <div className="logoText">Public Citizen</div>
                                  <div className="logoText">RootsAction.org</div>
                                  <div className="logoText">The Nation</div>
                                  <div className="logoText">Watchdog.net</div>
                                  <div className="logoText">Win Without War</div>
                                  <div className="logoText">Working Families Party</div>
                              </div>
                          </div>
                      </div>
                    <div className="spacer"></div>
                    <div>
                        <div className="press-inquiries">
                            <h3>For Press inquiries, please contact us at:</h3>
                            <p>
                                <a className="no-em" href="tel://1-202-681-7582">202-681-7582</a> or <a href="mailto:press@demandprogress.org">press@demandprogress.org</a>
                            </p>

                            <br/>
                            <p>
                                <a href="https://demandprogress.org/privacy-policy/" target="_blank">Our privacy policy</a>
                            </p>
                        </div>
                        <div className="social-media">
                            <a className="twitter" href="https://twitter.com/intent/tweet?text=Trump%20is%20trying%20to%20build%20a%20cabinet%20that%20is%20likely%20to%20take%20us%20to%20war.%20%20Help%20us%20fight%20back.%20%23NoPompeo%20%23NoHaspel%20%40SenSchumer" target="_blank">
                                <img src="../images/twitter_white.svg" />
                                <span>Share on twitter</span>
                            </a>
                            <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://blocktrumpswarcabinet.com/" target="_blank">
                                <img src="../images/facebook_white.svg" />
                                <span>Share on facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>);
    }
}

export default Footer;