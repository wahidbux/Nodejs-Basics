import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	port: '5432',
	database: 'localdb',
});

client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});


export default client;
import app from './api.js';
console.log(app);


/*
import client from '../data/db_connection.js';
const {rowCount,rows}=await client.query('SELECT * FROM students');
*/