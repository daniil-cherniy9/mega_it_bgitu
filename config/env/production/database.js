module.exports = ({ env }) => ({
  connection: {
    client: 'postgresql',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      min: 0,
      max: 5,
    },
  },
});