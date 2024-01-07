const db = require('./db');
const heler = require('../helper');
const config = require('../config');


async function getCircuits(page = 1){
    const rows = await db.query(
        'SELECT name,circuitRef,location,country from circuits'
    );

    return rows;
}


async function getDrivers(page =1){
    const rows = await db.query(
        'SELECT * from drivers'
    );

    return rows;
}

module.exports = {
    getCircuits,
    getDrivers
}
