function createStartScreen() {
    const startScreen = document.createElement('div');
    startScreen.className = 'start-screen';
    startScreen.innerHTML = `
        <div style="text-align:center;">
            <h1 style="font-size:32px; margin-bottom:20px; color:#0078D4;">Welcome</h1>
            <button class="start-btn" onclick="window.location.href='resume.html'">Resume</button>
            <br><br>
            <button class="start-btn" onclick="window.location.href='hobbies.html'">Hobbies</button>
            <br><br>
            <button class="start-btn" onclick="window.location.href='calculateChange.html'">Calculate Change</button>
            <br><br>
            <button class="start-btn" onclick="window.location.href='inchToCm.html'">Inch → Cm Converter</button>
            <br><br>
            <button class="start-btn" onclick="window.location.href='gradeConverter.html'">Grade Converter</button>
            <br><br>
            <button class="start-btn" onclick="window.location.href='geolocationAPI.html'">Geolocation</button>
            <div class="start-sub">Choose a page to explore</div>
        </div>
    `;
    document.body.appendChild(startScreen);

    function show() {
        startScreen.style.display = 'flex';
    }

    function hide() {
        startScreen.style.display = 'none';
    }

    return { show, hide };
}

// Auto-run start screen when index.html loads
window.addEventListener('DOMContentLoaded', () => {
    const start = createStartScreen();
    start.show();
});
