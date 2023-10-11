//Local storage (will be saved in your browser) max 10mb
localStorage.setItem('name', 'John Doe');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
//to update item jsut setItem again


//Session storage (will be stored for the duration of the current session) max 5mb
sessionStorage.setItem('name', 'John Doe');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');
//to update item jsut setItem again


//Cookies max 4kb
document.cookie = 'name=John; expires=' + new Date(2030, 0, 1).toUTCString();

console.log(document.cookie);