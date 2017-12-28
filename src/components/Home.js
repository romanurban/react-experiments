import React, { Component } from 'react';
import axios from 'axios';

import Table from './Table';

import 'bootstrap/dist/css/bootstrap.css';
import './Home_style.css';


export default class Home extends Component {
	constructor(props) {
    super(props);
	    this.state = {
	    	dataCampers: []
	    };
  	}

  	componentDidMount() {
	    axios
		    .get(`https://api.myjson.com/bins/v7ckb`)
	    	.then(res => {
		        const dataCampers = res.data.map(obj => obj);
		        this.setState({ dataCampers });
	    	})
	    	.catch(err => { throw(err) });
  	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="title text-center">4th Grade Leaderboard</h1>
					<Table
						dataCampers={this.state.dataCampers}
					/>
				</div>
			</div>
		);
	}
}
