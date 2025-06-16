export function logOut() {
    // Clear user session data (example: localStorage)
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    
    // Optionally, redirect to login page
    window.location.href = '/login.html';
}