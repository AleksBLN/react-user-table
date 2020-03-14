import React from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import UserInfo from './UserInfo/UserInfo';
import ModeSelector from './ModeSelector/ModeSelector';
import Pagination from './Pagination/Pagination';
import Search from './Search/Search';
import AddUser from './AddUser/AddUser';
import ErrorBoundary from './ErrorBoundary';
import _ from 'lodash';

class App extends React.Component {

	state = {
		isModeSelected: false,
		isLoading: true,
		data: [],
		sortOrder: '',
		sortField: '',
		row: null,
		currentPage: 1,
		search: '',
	};

	async getData(url) {
		const response = await fetch(url)
		const data = await response.json();
		this.setState({
			isLoading: false,
			data,
		});
	};

	onSort = sortField => {
		const copyData = this.state.data;
		const order = this.state.sortOrder === 'asc' ? 'desc' : 'asc';
		const sortedData = _.orderBy(copyData, sortField, order);
		this.setState({
			data: sortedData,
			sortOrder: order,
			sortField,
		});
	};

	onShowRow = row => {
		this.setState({row});
	}

	onSelect = url => {
		this.setState({
			isModeSelected: true,
			isLoading: true,
		});
		this.getData(url);
	};

	onPaginate = pageNumber => {
		this.setState({currentPage: pageNumber})
	}

	onSearch = search => {
		this.setState({search, currentPage: 1});
	}

	getFilteredData = () => {
		const { data, search } = this.state;
		if (!search) {
			return data;
		}
		return data.filter(item => {
			return item.firstName.toLowerCase().includes(search.toLowerCase())
				|| item.lastName.toLowerCase().includes(search.toLowerCase())
				|| item.email.toLowerCase().includes(search.toLowerCase())
				|| item.id.toString().includes(search)
				|| item.phone.toString().includes(search)

		})
	}

	addUser = (id, firstName, lastName, email, phone) => {
		const copyData = this.state.data;
		const newUser = {
			id,
			firstName,
			lastName,
			email,
			phone,
		}
		const newData = [newUser, ...copyData ];
		this.setState({ data: newData });
	};

	render() {
		const filteredData = this.getFilteredData()
		const itemsPerPage = 50;
		const indexOfLastItem = this.state.currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const perPageData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
		if (!this.state.isModeSelected) {
			return (
				<div className="container">
					<ModeSelector onSelect={this.onSelect} />
				</div>
			);
		}

		return (
			<div className="container">
				{
					this.state.isLoading
						? <ErrorBoundary>
							  <Loader />
						  </ErrorBoundary>
						: <React.Fragment>
						  <ErrorBoundary>
						  	<Search onSearch={this.onSearch} />
						  </ErrorBoundary>
						  <ErrorBoundary>
						  	<AddUser onCreate={this.addUser} />
						  </ErrorBoundary>
						  <ErrorBoundary>
							<Table
								data={perPageData}
								onSort={this.onSort}
								sortOrder={this.state.sortOrder}
								sortField={this.state.sortField}
								onShowRow={this.onShowRow}
							/>
						  </ErrorBoundary>
						</React.Fragment>
				}

				<ErrorBoundary>
				{
					this.state.data.length > itemsPerPage
						? <Pagination
							data={filteredData}
							itemsPerPage={itemsPerPage}
							onPaginate={this.onPaginate}
							/>
						: null
				}
				</ErrorBoundary>

				<ErrorBoundary>
				{
					this.state.row
						? <UserInfo user={this.state.row} />
						: null
				}
				</ErrorBoundary>
			</div>
		);
	};
};

export default App;
