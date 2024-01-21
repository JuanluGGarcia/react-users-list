import { useState } from 'react';
import { USERS } from '../../constants/users';
import { StyledContainer, StyledFilters, StyledUserContainer } from './style';
import CardUser from '../cardUser/CardUser';

// Hago los filtros para mostrar los usuarios
const FilterUser = () => {
	const [name, setName] = useState(''); // por letra del nombre
	const [active, setActive] = useState(false); // si es activo o no
	const [orderValue, setOrderValue] = useState('0'); // orden del listado

	let filteredUsers = filterByActive(USERS, active);
	filteredUsers = filterByName(filteredUsers, name);
	filteredUsers = filterOrder(filteredUsers, orderValue);

	return (
		<StyledContainer>
			<h1>Listado de Usuarios</h1>

			<StyledFilters>
				<div>
					<input type='text' onChange={event => handleName(event, setName)} />
				</div>

				<div>
					<label htmlFor='check'>Sólo Activos </label>
					<input
						type='checkbox'
						onChange={() => handleActive(active, setActive)}
					/>
				</div>

				<div>
					<select onChange={event => handleOrder(event, setOrderValue)}>
						<option value='0'>Por Defecto</option>
						<option value='1'>Por Nombre</option>
					</select>
				</div>
			</StyledFilters>

			<StyledUserContainer>
				{filteredUsers.map(user => (
					<CardUser key={user.userId} {...user} />
				))}
			</StyledUserContainer>
		</StyledContainer>
	);
};

// selector search nombres
const handleName = (event, setName) => {
	const letter = event.target.value;
	setName(letter);
};
// filtro de nombres
const filterByName = (users, name) => {
	if (!name) return [...users];
	return users.filter(user =>
		user.name.toLowerCase().includes(name.toLowerCase())
	);
};

// selector Activos
// Cambio el estado del setActive
const handleActive = (active, setActive) => {
	setActive(!active);
};

// Fitro activos
const filterByActive = (users, active) => {
	if (!active) return [...users];
	return users.filter(user => user.active);
};

// ordenacion por defecto o por nombre
const handleOrder = (event, setOrderValue) => {
	const value = event.target.value;
	setOrderValue(value);
};

// filtro de ordenación
const filterOrder = (users, orderValue) => {
	const sortedUsers = [...users];
	const formatedValue = Number(orderValue);
	if (formatedValue === 0) return sortedUsers;
	return sortedUsers.sort((a, b) => {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
		return 0;
	});
};

export default FilterUser;
