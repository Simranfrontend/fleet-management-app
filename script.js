function $(id){return document.getElementById(id)}
function saveFleets(arr){localStorage.setItem('fleets', JSON.stringify(arr))}
function loadFleets(){try{return JSON.parse(localStorage.getItem('fleets'))||[]}catch(e){return[]}}

if(document.getElementById('loginForm')) {
    const form = $('loginForm')
    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        const email = $('email').value.trim();
        const pwd = $('password').value;

        if (email === 'admib@masai.com' && pwd === 'admin123') {
            alert('Login Success');
            window.location.href = 'admin.html';
        }
        else {
            alert ('Wrong email or password');
        }
    }) 
}
