import React from 'react';

export default ({ data, itemsPerPage, onPaginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(page => (
					<li key={page} className="page-item">
						<a onClick={() => onPaginate(page)} className="page-link" href="!#">
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
