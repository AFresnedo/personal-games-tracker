'use strict';
var bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Email must be a valid format.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 24],
          msg: 'Password must be 6 to 24 characters long.'
        }
      }
    },
    admin: DataTypes.BOOLEAN,
    sub: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: function(pendingUser) {
        if (pendingUser && pendingUser.password) {
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });
  user.associate = function(models) {
    models.user.hasMany(models.wish);
    models.user.hasMany(models.played_game);
  };

  // helpers go here, after ^ stuff and before return
  user.prototype.isValidPassword = function(typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password);
  };

  // TODO find better home for this code, if it needs one
  // get all wishes for given user
  user.prototype.getWishes = function() {
    let userId = this.id;
    require('db').findAll({
      where: { userId }
    }).then(function(usersWishes) {
      // return array of wish tuples
      return usersWishes;
    }).catch(function(err) {
      // give caller a chance to handle error
      throw err;
    });
  };

  return user;
};
