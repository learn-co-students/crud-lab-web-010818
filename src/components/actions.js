import cuid from 'cuid';

//add and delete restaurants
export const addRest = name => ({
	type: 'ADD_REST',
	payload: { name: name, id: cuid() }
});

export const removeRest = id => ({
	type: 'REMOVE_REST',
	id: id
});
