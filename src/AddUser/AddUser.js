import React, {useState} from 'react';

export default ({ onCreate }) => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValid = () => {
  	return id && firstName && lastName && email && phone;
  }

  function submitHandler(event) {
    event.preventDefault();
     onCreate(id, firstName, lastName, email, phone);
     setId('');
     setFirstName('');
     setLastName('');
     setEmail('');
     setPhone('');
  };

  return (
	<div className="btn-group dropup w-100 mb-2 mt-2" data-display="static">
		<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Add user
		</button>
		<form className="dropdown-menu p-4 w-100" onSubmit={submitHandler}>
			  <div className="form-row">
			    <div className="col">
			      <input type="text" className="form-control" placeholder="Id" value={id} onChange={event => setId(event.target.value)} />
			    </div>
			    <div className="col">
			      <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={event => setFirstName(event.target.value)} />
			    </div>
			    <div className="col">
			      <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={event => setLastName(event.target.value)} />
			    </div>
			    <div className="col">
			      <input className="form-control" placeholder="email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
			    </div>
			    <div className="col">
			      <input type="text" className="form-control" placeholder="phone" value={phone} onChange={event => setPhone(event.target.value)} />
			    </div>
			    <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>Add</button>
			  </div>
		</form>
	</div>
  );
};
