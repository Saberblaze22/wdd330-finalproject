const bcrypt = require('bcrypt');

const users = []; // In-memory user store; replace with DB in production

async function createUser(username, password) {
    if (!username || !password) {
        throw new Error('Username and password are required.');
    }

    // Check if user already exists
    if (users.find(user => user.username === username)) {
        throw new Error('Username already taken.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    return { username };
}

module.exports = { createUser };