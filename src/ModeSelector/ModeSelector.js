import React from 'react';

export default props => {
	const small = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
	const big = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

	return (
		<div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
			<button onClick={() => props.onSelect(small)} className="btn btn-secondary">Загрузить 32 элемента</button>
			<button onClick={() => props.onSelect(big)} className="btn btn-info">Загрузить 1000 элементов</button>
		</div>
	)
}
