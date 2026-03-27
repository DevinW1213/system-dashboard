function getColor(value) {
    if (value > 80) return "red";
    if (value > 50) return "orange";
    return "green";
}

function updateBar(id, value) {
    const bar = document.getElementById(id);
    bar.style.width = value + "%";
    bar.style.background = getColor(value);
}

function updateDashboard() {
    const cpu = Math.floor(Math.random() * 100);
    const memory = Math.floor(Math.random() * 100);
    const disk = Math.floor(Math.random() * 100);

    // Update numbers
    document.getElementById("cpu").innerText = cpu + "%";
    document.getElementById("memory").innerText = memory + "%";
    document.getElementById("disk").innerText = disk + "%";

    // Update bars
    updateBar("cpuBar", cpu);
    updateBar("memoryBar", memory);
    updateBar("diskBar", disk);

    // Status logic
    const status = document.getElementById("status");

    if (cpu > 80 || memory > 80 || disk > 80) {
        status.innerText = "⚠️ High Usage";
        status.style.color = "red";
    } else if (cpu > 50 || memory > 50 || disk > 50) {
        status.innerText = "Moderate Load";
        status.style.color = "orange";
    } else {
        status.innerText = "Running Smoothly";
        status.style.color = "lightgreen";
    }

    // Timestamp
    const now = new Date();
    document.getElementById("lastUpdated").innerText =
        "Last Updated: " + now.toLocaleTimeString();
}

// Update every 2 seconds
setInterval(updateDashboard, 2000);

// Run once immediately
updateDashboard();