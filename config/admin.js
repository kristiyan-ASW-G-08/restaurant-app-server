module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bc5f34e035264c397c6ee6f51c4e4377'),
  },
});
