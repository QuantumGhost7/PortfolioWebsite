$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Web Developer", "Front End Web Developer", "Django Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
     // skill bars script
     $(window).scroll(function() {
        const skillSection = $("#skills");
        const skillBars = $(".line .progress");

        if (isElementInViewport(skillSection)) {
            skillBars.each(function() {
                const percentage = $(this).data("progress");
                $(this).css("width", `${percentage}%`);
            });
        }
    });
    function isElementInViewport(element) {
        const rect = element[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    var typed = new Typed(".typing-2", {
        strings: ["Front End Web Developer", "Full Stack Web Developer", "Django developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    
});