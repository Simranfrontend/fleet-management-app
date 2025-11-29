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

function getFleets() {
    return
    JSON.parse(localStorage.getItem("fleets")) || [];
}

function saveFleets(fleets) {
    localStorage.setItem("fleets", JSON.stringify(fleets));
}

function renderAdminTable() {
    const fleets = getFleets();
    const tableBody = document.getElementById("adminTableBody");
    tableBody.innerHTML = fleets.length === 0
    ? "<tr><td colspan='5'>No Fleet data available</td></tr>"
    : fleets.map((fleet, index) =>
        <tr>
            <td>$(fleet.vehicleNumber)</td>
            <td>$(fleet.driverName)</td>
            <td>$(fleet.capacity)</td>
            <td>$(fleet.route)</td>
            <td>
                <button class="deleteBtn" onclick="deleteFleet(${index})">Delete</button>
            </td>
        </tr>
        ).join("");

}
