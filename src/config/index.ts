/* eslint-disable no-undef */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  frontend_url: process.env.FRONTEND_URL,
  jwt: {
    secret: process.env.JWT_SECRET,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
  nodemailer: {
    email: process.env.NODEMAILER_EMAIL,
    email_password: process.env.NODEMAILER_EMAIL_PASS,
  },
};
