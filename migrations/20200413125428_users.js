
exports.up = function(knex) {
    return knex.schema.createTable('user', user => {
        user.increments()
        user.string('username')
        user.string('password_hash')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
