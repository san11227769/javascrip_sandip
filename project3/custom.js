// Local time
function updateLocalTime() {
    const localTime = new Date().toLocaleString();
    document.querySelector('.show-local-time').textContent = localTime;
}
setInterval(updateLocalTime, 1000);