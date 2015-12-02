! function() {
    var mobileMenu = $('#mobile-menu'),
        nav = $('.nav');

    mobileMenu.on('click', function(e) {
        e.preventDefault();
        nav.toggleClass('shown');
    });

    function getExtraOffset() {
    	return window.innerWidth <= 768 ? 50 : 110;
    }

    $('a[href*=#]:not([href=#])').click(function() {
    	nav.removeClass('shown');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - getExtraOffset()
                }, 1000);
                return false;
            }
        }
    });
}();
