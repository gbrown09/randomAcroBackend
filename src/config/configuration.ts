export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  mongodb: {
    uri: process.env.MONGO_URI,
  },
});
