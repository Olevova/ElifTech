exports.up = (pgm) => {
  pgm.createTable('dishes', {
    id: 'id',
    name: {
      type: 'varchar(255)',
      notNull: false,
    },
    price: {
      type: 'numeric(10, 2)',
      notNull: false,
    },
      restaurant_id: {
        type: 'int4',
        notNull: false,
      },
      photo: {
        type: 'bytea',
        notNull: false,
    }
    
  });

  pgm.createTable('restaurants', {
    id: 'id',
    name: {
      type: 'varchar(255)',
      notNull: false,
    },
    location: {
      type: 'varchar(255)',
      notNull: false,
      },
    contact_number: {
      type: 'varchar(20)',
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('dishes');
  pgm.dropTable('restaurants');
};
