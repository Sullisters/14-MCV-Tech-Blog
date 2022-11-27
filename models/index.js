const User = require('./User');
const Event = require('./Event');

Event.belongsTo(User, {
  onDelete: 'CASCADE'
});

User.hasMany(Event);

module.exports = { User, Event };
