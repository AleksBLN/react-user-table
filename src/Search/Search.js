import React, {useState} from 'react';

export default props => {
	const [value, setValue] = useState('');

	const onChangeValue = (event) => {
		setValue(event.target.value);
	}

	return (
		<div className="input-group mb-3 mt-5">
		  <input
		  		type="text"
		  		className="form-control"
		  		value={value}
		  		onChange={onChangeValue}
		  />
		  <div className="input-group-append">
		    <button
		    	className="btn btn-outline-secondary"
		    	id="button-addon2"
		    	onClick={() => props.onSearch(value)}
		    >
		    	Search
		    </button>
		  </div>
		</div>
	);
};
