(function(){
    document.addEventListener("DOMContentLoaded", function(event) {
        var btn = document.getElementById('login_submit');
        if(btn) {
            btn.addEventListener('click', function() {
                console.log('Button clicked');
            });
        }
    });
})();