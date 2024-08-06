/* // server/api/users/index.ts
import { defineEventHandler } from 'h3';
import { mysql } from '../db/index.ts';

export default defineEventHandler(async (event) => {
  const { username, password } = await event.context.body;

  // Query the database to verify the username and password
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  const [user] = await mysql.execute(query, [username, password]);

  if (!user) {
    // Return a success response
    return { success: false, message: 'Invalid username or password' };
  } else {
    // Return an error response
    return {  success: true, message: 'Login successful'};
  }
}); */