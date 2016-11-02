import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './Table_style.css';

export default class Table extends Component {
	constructor(props) {
		super(props);
	}

  	getImage(cell){
	  	return `<img height="42" width="42" src="${cell}"/>`;
	}

	getProfileLink(cell) {
		return `<a target="_blank" href="http://www.freecodecamp.com/${cell}">${cell}</a>`;
	}

	render() {
		return (
			<BootstrapTable
				data={this.props.dataCampers}
				striped={true}
				hover={true}
				search={true}
				height="750">
					<TableHeaderColumn
						dataFormat={this.getImage}
						dataField="img"
						width="60"
						dataAlign="center">
							#
					</TableHeaderColumn>
					<TableHeaderColumn
						dataFormat={this.getProfileLink}
						columnClassName="tdCustomStyle"
						dataField="username"
						isKey={true}
						dataSort={true}>
							Username
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="tdCustomStyle"
						dataField="recent"
						dataAlign="center"
						dataSort={true}>
							Recent Points
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="tdCustomStyle"
						dataField="alltime"
						dataAlign="center"
						dataSort={true}>
							All Time Points
					</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}