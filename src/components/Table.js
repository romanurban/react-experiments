import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Spinner from 'react-spinkit';

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
		return `<a target="_blank" href="src/profiles/${cell}.html">${cell}</a>`;
	}

	render() {
		const options = {
  			noDataText: (<Spinner spinnerName="three-bounce" noFadeIn={true} />),
  			afterSearch: function (search, result) {
  				if (!result.length) {
  					this.noDataText = (<p className="search-not-found">Search not found</p>)
  				}
  			}
		};
		return (
			<BootstrapTable
				data={this.props.dataCampers}
				striped={true}
				hover={true}
				search={true}
				options={options}
				height="690">
					<TableHeaderColumn
						dataFormat={this.getImage}
						dataField="img"
						width="60"
						dataAlign="center">
							#
					</TableHeaderColumn>
					<TableHeaderColumn
						dataFormat={this.getProfileLink}
						columnClassName="td-custom"
						dataField="username"
						width="100"
						isKey={true}
						dataSort={true}>
							Student
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date1"
						dataAlign="center"
						dataSort={true}>
							06.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date2"
						dataAlign="center"
						dataSort={true}>
							07.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date3"
						dataAlign="center"
						dataSort={true}>
							09.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date4"
						dataAlign="center"
						dataSort={true}>
							13.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date5"
						dataAlign="center"
						dataSort={true}>
							14.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date6"
						dataAlign="center"
						dataSort={true}>
							16.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date7"
						dataAlign="center"
						dataSort={true}>
							21.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date8"
						dataAlign="center"
						dataSort={true}>
							23.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date9"
						dataAlign="center"
						dataSort={true}>
							27.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date10"
						dataAlign="center"
						dataSort={true}>
							28.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date11"
						dataAlign="center"
						dataSort={true}>
							30.11
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="date12"
						dataAlign="center"
						dataSort={true}>
							04.12
					</TableHeaderColumn>
					<TableHeaderColumn
						columnClassName="td-custom"
						dataField="total"
						dataAlign="center"
						dataSort={true}>
							Total
					</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}
