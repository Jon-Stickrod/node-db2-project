
exports.up = function(knex) {
  //change we want to make to our schema
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('make')
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.text('mileage')
            .notNullable();
        tbl.text('transmition_status');
            
    });
};

exports.down = function(knex) {
  //undoing that change
    return knex.schema.dropTableIfExists('cars');
};
