export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.CRM_API_PORT || process.env.PORT || '3000', 10),
});
