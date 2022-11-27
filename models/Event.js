const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {};

Event.init(
    {   date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            isDate:true,
        }
    },
    description: {
        type: DataTypes.TEXT,
    },
    title: {
        type: DataTypes.STRING,
    },
},
    {
        sequelize
    }
);

module.exports = Event;