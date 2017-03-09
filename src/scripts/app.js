import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

let appContainerEl = document.querySelector('#app-container')
// ReactDOM.render(<h1>please work</h1>, appContainerEl)

const ProfileList = React.createClass({
	render: function(){
		// console.log(this.props.arrayOfObjs)
    return (
      <div>
        <SingleProfile legislatorData={this.props.arrayOfObjs.results}/>
      </div>
    )
  }
})

const SingleProfile = React.createClass({

  _createJSX: function(arrayOfObjs){

    let arrayJSX = arrayOfObjs.map(function(legObj){
      return (

				// <div className="legislator-info" key="i">
				<div className="col-xs-4 legislators-info">
          <h3><strong> {legObj.first_name} {legObj.last_name}</strong></h3>
          <h4><strong> {legObj.title} -- {legObj.party} - {legObj.state_name}</strong></h4>
          <ul>
            <li> email: {legObj.oc_email}</li>
            <li> website: {legObj.website}</li>
            <li> facebook: {legObj.facebook_id}</li>
            <li> twitter: {legObj.twitter_id}</li>
          </ul>
          <p><strong>Term End {legObj.term_end}</strong></p>
        </div>

      )
    })
    return arrayJSX
  },

  render: function(){
    let legislatorList = this.props.legislatorData;
    return (
      <div>
      { this._createJSX(legislatorList) }
      </div>
    )
  }
})


$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  ReactDOM.render(
  <ProfileList arrayOfObjs={serverRes}/> , appContainerEl);
})
