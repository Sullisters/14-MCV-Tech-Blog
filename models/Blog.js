const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING(255),
        },
    },{
        sequelize
    }
);

module.exports = Blog;