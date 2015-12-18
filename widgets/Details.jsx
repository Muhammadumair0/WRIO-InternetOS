'use strict'
var domain = '',
	React = require('react'),
	moment = require('moment');

if (process.env.DOMAIN == undefined) {
	domain = 'wrioos.com';
} else {
	domain = process.env.DOMAIN;
}

class Details extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			img: this.props.importUrl + this.props.theme + '/img/no-photo-200x200.png',
			registered: moment(Date.now()).format('DD MMM YYYY')
		}
	}

	render() {
		return (
			<div className='col-xs-12 col-md-6 pull-right'>
                <span itemScope="" itemType="http://schema.org/ImageObject">
                    <img itemProp="thumbnail" src={this.state.img} className="pull-left"/>
                </span>
				<ul className="details">
					<li>Registered: {this.state.registered}</li>
					<li>Rating: {this.state.rating}</li>
					<li>Followers: {this.state.followers}</li>
					<li>Posts: {this.state.posts}</li>
				</ul>
			</div>
		);
	}
}


Details.propTypes = {
	importUrl: React.PropTypes.object.isRequired,
	theme: React.PropTypes.object.isRequired
};

module.exports = Details;