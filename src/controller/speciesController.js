'use strict'

const pool = require('../connection/database');


// Lista espescies
const getAllSpecies = async (req, res) => {
    try {
        let sql = `SELECT * FROM specie`;

        let [result] = await pool.query(sql);

        if ([result].length > 0) {
            res.status(200).json({
                species: [result][0],
            });
        } else {
            res.status(200).json({
                message: 'Lista de especies no encontrada',
            });
        }
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};


// Registrar una nueva especie
const createSpecie = async (req, res) => {
    
    try {
        let result = { ...req.body };
        const responseData = await pool.query("INSERT INTO specie set ?", [result]);
        if (responseData) {
            res.status(200).json({
                message: 'Especie creada con exito',
                data: result
            });
        } else {
            res.status(400).json({
                message: 'Error en la creación de especie',
            });
        }
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
    

};


module.exports = {
    getAllSpecies,
    createSpecie,
};