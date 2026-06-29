document.addEventListener("DOMContentLoaded", () => {
    const progressFill = document.getElementById("progress-fill");
    const percentageText = document.getElementById("percentage-text");
    const statusText = document.getElementById("status-text");
    const deploymentLog = document.getElementById("deployment-log");
    const statusBadge = document.querySelector(".status-badge");

    let currentProgress = 0;
    
    const loadingMessages = [
        { upTo: 13, text: "Connecting to local server..." },
        { upTo: 28, text: "Syncing chat histories & away records..." },
        { upTo: 48, text: "Optimizing topak-handling algorithms..." },
        { upTo: 68, text: "Recalculating distance boundaries..." },
        { upTo: 88, text: "Finalizing 3rd month milestone parameters..." },
        { upTo: 99, text: "Deploying Patch 0.3a..." }
    ];

    function updateStatusText(progress) {
        const messageObj = loadingMessages.find(msg => progress <= msg.upTo);
        if (messageObj) {
            statusText.innerText = messageObj.text;
        }
    }

    const interval = setInterval(() => {
        if (currentProgress < 99) {
            currentProgress++;
            progressFill.style.width = `${currentProgress}%`;
            percentageText.innerText = `${currentProgress}%`;
            updateStatusText(currentProgress);
        } else {
            clearInterval(interval);
            triggerSystemError();
        }
    }, 150);

    function triggerSystemError() {
        statusText.innerText = "Deployment failed. Proximity required.";
        statusText.style.color = "#ff4d6d";
        percentageText.style.color = "#ff4d6d";
        
        statusBadge.innerText = "SYSTEM STATUS: PAUSED";
        statusBadge.style.background = "rgba(255, 77, 109, 0.15)";
        statusBadge.style.color = "#ff4d6d";
        statusBadge.style.borderColor = "rgba(255, 77, 109, 0.3)";

        deploymentLog.classList.remove("hidden");
        
        setTimeout(() => {
            deploymentLog.scrollIntoView({ behavior: "smooth" });
        }, 300);
    }
});

// GLOBAL FUNCTION FOR 100% CONVERSION TARGET
function completePatchThree() {
    const progressFill = document.getElementById("progress-fill");
    const percentageText = document.getElementById("percentage-text");
    const statusText = document.getElementById("status-text");
    const statusBadge = document.querySelector(".status-badge");
    const proximityError = document.getElementById("proximity-error");
    const syncActionWrapper = document.getElementById("sync-action-wrapper");
    const proximityPayload = document.getElementById("proximity-payload");

    // Force values directly to 100% completion metrics
    progressFill.style.width = "100%";
    progressFill.style.background = "linear-gradient(90deg, #4dffb4, #00f5d4)";
    progressFill.style.boxShadow = "0 0 15px #4dffb4";
    
    percentageText.innerText = "100%";
    percentageText.style.color = "#4dffb4";
    
    statusText.innerText = "Operational synchronization completed successfully.";
    statusText.style.color = "#4dffb4";
    
    statusBadge.innerText = "SYSTEM STATUS: OPERATIONAL";
    statusBadge.style.background = "rgba(77, 255, 180, 0.15)";
    statusBadge.style.color = "#4dffb4";
    statusBadge.style.borderColor = "rgba(77, 255, 180, 0.3)";

    // Clean up old elements and drop down the target payload modules
    proximityError.style.display = "none";
    syncActionWrapper.style.display = "none";
    proximityPayload.classList.remove("hidden");

    // Reorient view position down to display the decrypted objectives frame
    setTimeout(() => {
        proximityPayload.scrollIntoView({ behavior: "smooth" });
    }, 150);
}