export default {
  JWT: {
    secret: process.env.APP_SECRET || 'secret',
    expiresIn: '1d',
  },
};
