function copyToClipboard() {
    // Show Bootstrap Popover
    var popover = bootstrap.Popover.getInstance(document.getElementById('copyBtn'));
    if (!popover) {
        popover = new bootstrap.Popover(document.getElementById('copyBtn'));
    }
    popover.show();
    // Hide popover after 1.5 seconds
    setTimeout(() => {
        popover.hide();
    }, 1500);
    // Show Bootstrap Modal
    let modal = new bootstrap.Modal(document.getElementById('modal2'));
    modal.show();
}

// Initialize Bootstrap tooltips and popovers
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});;
