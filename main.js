// ====================Start Right Click Disabled==================

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// ====================End Right Click Disabled====================



// ====================Start title Replace==================

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        document.title = 'Web Series | My Left Side'
    } else {
        document.title = 'My Left Side All Episodes';
    }
});

// ====================End title Replace==================
