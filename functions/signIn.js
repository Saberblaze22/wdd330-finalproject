import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/**
 * Signs in a user with email and password using Firebase Authentication.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @returns {Promise<import("firebase/auth").UserCredential>} The user credential object.
 */
export async function signIn(email, password) {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw error;
    }
}