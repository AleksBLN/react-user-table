import React from 'react';

export default props => (
	<table className="table">
		<thead className="thead-dark">
		   <tr>
		       	<th onClick={() => props.onSort('id')}>
		       		id {props.sortField === 'id' ? <small>{props.sortOrder}</small> : null}
		       	</th>
		       	<th onClick={() => props.onSort('firstName')}>
		       		First Name {props.sortField === 'firstName' ? <small>{props.sortOrder}</small> : null}
		       	</th>
		       	<th onClick={() => props.onSort('lastName')}>
		       		Last Name {props.sortField === 'lastName' ? <small>{props.sortOrder}</small> : null}
		       	</th>
		       	<th onClick={() => props.onSort('email')}>
		       		email {props.sortField === 'email' ? <small>{props.sortOrder}</small> : null}
		       	</th>
		       	<th onClick={() => props.onSort('phone')}>
		       		phone {props.sortField === 'phone' ? <small>{props.sortOrder}</small> : null}
		       	</th>
		    </tr>
		</thead>
		<tbody>
			{props.data.map(item => (
				<tr key={item.id + item.phone} onClick={() => props.onShowRow(item)}>
					<th>{item.id}</th>
					<th>{item.firstName.trim()}</th>
					<th>{item.lastName.trim()}</th>
					<th>{item.email.trim()}</th>
					<th>{item.phone}</th>
				</tr>
			))}
		</tbody>
	</table>
);
