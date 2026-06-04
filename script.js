document.addEventListener("DOMContentLoaded", () => {
    const progressFill = document.getElementById("progress-fill");
    const percentageText = document.getElementById("percentage-text");
    const statusText = document.getElementById("status-text");
    const deploymentLog = document.getElementById("deployment-log");
    const statusBadge = document.querySelector(".status-badge");

    let currentProgress = 0;
    
    // Array of funny system messages as it counts up
    const loadingMessages = [
        { upTo: 13, text: "Connecting to local server..." },
        { upTo: 28, text: "Syncing chat histories & away records..." },
        { upTo: 48, text: "Optimizing topak-handling algorithms..." },
        { upTo: 68, text: "Recalculating distance boundaries..." },
        { upTo: 88, text: "Finalizing 3rd month milestone parameters..." },
        { upTo: 99, text: "Deploying Patch 0.3a..." }
    ];

    // Function to update the descriptive text based on current percentage
    function updateStatusText(progress) {
        const messageObj = loadingMessages.find(msg => progress <= msg.upTo);
        if (messageObj) {
            statusText.innerText = messageObj.text;
        }
    }

    // Main loading loop animation
    const interval = setInterval(() => {
        if (currentProgress < 99) {
            currentProgress++;
            progressFill.style.width = `${currentProgress}%`;
            percentageText.innerText = `${currentProgress}%`;
            updateStatusText(currentProgress);
        } else {
            // Stop the loop once we hit 99%
            clearInterval(interval);
            triggerSystemError();
        }
    }, 150); // Controls the speed of the bar (50ms per 1% = roughly 5 seconds total)

    // Function to execute when the bar stalls at 99%
    function triggerSystemError() {
        // Change text layout values to show an issue occurred
        statusText.innerText = "Deployment failed. Proximity required.";
        statusText.style.color = "#ff4d6d";
        percentageText.style.color = "#ff4d6d";
        
        statusBadge.innerText = "SYSTEM STATUS: PAUSED";
        statusBadge.style.background = "rgba(255, 77, 109, 0.15)";
        statusBadge.style.color = "#ff4d6d";
        statusBadge.style.borderColor = "rgba(255, 77, 109, 0.3)";

        // Reveal the error warning box and the monthsary letter smoothly
        deploymentLog.classList.remove("hidden");
        
        // Auto-scroll downwards on mobile screens so she notices the letter content pop up
        setTimeout(() => {
            deploymentLog.scrollIntoView({ behavior: "smooth" });
        }, 300);
    }
});