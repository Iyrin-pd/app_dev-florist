if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(error => console.log("Service Worker Error:", error));
    });
}
