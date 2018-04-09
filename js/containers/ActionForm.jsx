import React, { Component } from 'react'
import { getQueryVariables } from '../utils'
import { CONF, URLS } from '../config'
import Loading from './Loading.jsx'

class ActionForm extends Component {

    constructor(props) {
        super(props);
        this.state = getQueryVariables();
        this.state.sent = false;
      
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentWillMount () {
      this.setState({
        sent: window.location.href.indexOf('email=call') !== -1
      })
    }    

    onSubmit(evt) {
      evt.preventDefault();
      
      const name = document.getElementById('name');   
      const email = document.getElementById('email');
      const address1 = document.getElementById('street');
      const zip = document.getElementById('zip');   

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const nameRegex = /^[A-Za-z '.-]+$/.test(name.value)
      
      
      if (!name.value.trim() || !nameRegex) {
        name.focus();
        alert('Please enter your name.');
        return;
      }
 
      if (!email.value.trim()) {
        email.focus();
        alert('Please enter your email.');
        return;
      } else if (!emailRegex.test(email.value.trim())) {
        email.focus();
        alert('Please enter a valid email.');
        return;
      }

      if (!address1.value.trim()) {
        address1.focus();
        alert("Please enter your address.");
        return;
      }
      
      if (!zip.value.trim()) {
        zip.focus();
        alert('Please enter your Zipcode.');
        return;
      } else if (zip.value.length < 5 || zip.value.length > 5) {
        zip.focus();
        alert('Please enter a valid Zipcode.');
        return;
      }
      
      const fields = {
        'action_user_agent': navigator.userAgent,
        'country': 'United States',
        'email': email.value.trim(),
        'form_name': 'act-petition',
        'js': 1,
        'name': name.value.trim(),
        'address1': address1.value.trim(),
        'zip': zip.value.trim(),
        'opt_in': 1,
        'page': CONF.actionKitPageShortName,
        'source': this.state.source || 'website'
      };
      
       this.sendFormToActionKit(fields);
    }
    
    sendFormToActionKit(fields) {
      // iFrame
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.setAttribute('name', 'actionkit-iframe');
      document.body.appendChild(iframe);
      
      // Form
      const form = document.createElement('form');
      form.style.display = 'none';
      form.setAttribute('action', URLS.actionKit);
      form.setAttribute('method', 'post');
      form.setAttribute('target', 'actionkit-iframe');
      document.body.appendChild(form);
      
      Object.keys(fields).forEach(function(key) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });
  
      form.submit()  

      this.setState({
        sent: true
      }, this.props.formSubmitted)  
    }
    
    
    render() {
      let button = null
      
      if(this.state.sent){
        button = (
          <button className="btn">
            < Loading process={this.state.sent} />
          </button>
        )
      } else {
        button = (
          <button className="btn" onClick={ this.onSubmit } >
            <span>SIGN NOW</span>
          </button>
        )
      }
      
      return(
        <div className="bftn-form call-action-form">
            <h3>Tell the Senate: Block Trump's War Cabinet</h3>
            <br/><br/>
            <div style={{color: 'white', lineHeight: 1.5}}>
              <strong style={{ fontSize: "25px" }}>
                  Trump's new cabinet nominees risk putting us on paths to war with Iran and North Korea.  They've overseen and support torture, and will continue American support for the Saudi war in Yemen.  The Senate must reject them.
              </strong>
                <br/><br/>
                <div>
                  Email your senators now and tell them to block Trump's War Cabinet by opposing the nominations of Mike Pompeo and Gina Haspel
                </div>
                <br/><br/>
                <div>Add your name to send a message (below) to Congress:</div>
            </div>
            <div >
              <form>
              <div className="flex">
                <input id="name" type="text" className="form-input" name="name" placeholder="Your Name" pattern="[A-Za-z '.-]+"/>
                <input id="email" type="email" className="form-input" name="email" placeholder="Your Email" />
              </div>
              <div className="flex">
                <input id="street" type="text" className="form-input" name="street" placeholder="Street Address" />
                <input id="zip" type="text" className="form-input" name="zip" placeholder="Your Zipcode" />
              </div>
              <div className="flex">
                {button}
              </div>
            </form>
           </div>
              <span><i>One or more of the participating organizations (listed at bottom) may email you about their campaigns.</i></span>
          <p style={{color: 'white', textAlign: 'center'}}>
              <h4>Here's the language that will be sent to Senate:</h4>
          </p>
          <p style={{color: 'white', textAlign: 'center'}}>
            <i>
                "Please oppose both Haspel's and Pompeo's nominations and otherwise do everything in your power to prevent the advancement of these two dangerous nominees. The appointment of John Bolton as National Security Advisor, along with the nominations of Gina Haspel for Director of the Central Intelligence Agency (CIA) and Mike Pompeo for Secretary of State, represent an aggressive shift in posture and could well put us on a path to more war. The State Department is supposed to play a key role in international climate negotiations, human rights, and preserving peace around the world. But Pompeo is deeply Islamophobic, a climate denier, and a warmonger. Moreover, their histories of support for, and involvement in, torture are disqualifying in their own right. "
            </i>
          </p>
          <hr/>
        </div>
      )
    }  
  }
  
export default ActionForm