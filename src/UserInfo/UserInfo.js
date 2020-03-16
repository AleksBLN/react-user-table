import React from 'react';

export default ({user}) => (
	<div>
		<p>Выбран пользователь <b>{`${user.firstName} ${user.lastName}`}</b></p>
		{user.description
			? <p>
				Описание: <br />
				<textarea defaultValue={user.description} />
			  </p>
			: <p>No description</p>
		}
		{user.address
			? <React.Fragment>
				  <p>
					Адрес проживания: <b>{user.address.streetAddress}</b>
				  </p>
				  <p>
					Город: <b>{user.address.city}</b>
				  </p>
				  <p>
					Провинция/штат: <b>{user.address.state}</b>
				  </p>
				  <p>
					Индекс: <b>{user.address.zip}</b>
				  </p>
			  </React.Fragment>
			: <p>No address</p>
		}
	</div>
)
