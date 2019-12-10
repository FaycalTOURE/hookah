let CheminComplet = document.location.href;
let CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
let NomDuFichier = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );

if (NomDuFichier == 'index.html'){
    
    document.addEventListener('DOMContentLoaded', () => {
        let menuHamburger = document.querySelector('.menu-hamburger');
        let menuHamburgerIcon = document.querySelector('.menu-icon');
        let sideNavContainer = document.querySelector('.side-nav-container');
        let sideNav = document.querySelector('.side-nav');

        menuHamburger.addEventListener('click', () => {
            if (menuHamburgerIcon.classList.contains('fa-bars')){
                menuHamburgerIcon.classList.replace('fa-bars', 'fa-times');
                sideNavContainer.classList.add('open');
                sideNav.classList.add('open');
    

            } else {
                menuHamburgerIcon.classList.replace('fa-times', 'fa-bars');  
                sideNavContainer.classList.remove('open');
                sideNav.classList.remove('open');
            }
        })

    })


    // fonction lorsque le scroll est supérieur à 20px
    $(function(){
        var header = $('header');
        var hmpLogo = $('.hmp-logo');
        var nav = $('.nav');
        var documentWidth;

        $(window).scroll(function () {
            
            documentWidth = document.body.clientWidth;

            if ($(this).scrollTop() > 20) {
                console.log(documentWidth);
                nav.css( 'background-color', '#1f2749' );
                nav.css( 'color', '#fff');
                header.removeClass( 'hide-header' ).addClass( 'visible-header' );
                hmpLogo.removeClass( 'homepage-logo-t' ).addClass( 'homepage-logo-t-nav' ).removeClass( 'faa-pulse animated' );
            } else {
                nav.css( 'background-color', 'transparent' );
                nav.css( 'color', '#1f2749');
                header.addClass( 'hide-header' ).removeClass( 'visible-header' );
                hmpLogo.removeClass( 'homepage-logo-t-nav' ).addClass( 'faa-pulse animated' ).addClass( 'homepage-logo-t' );
            }
        });
    });
}
else if (NomDuFichier == 'contact.html'){

    document.addEventListener('DOMContentLoaded', () => {
        let menuHamburger = document.querySelector('.menu-hamburger');
        let menuHamburgerIcon = document.querySelector('.menu-icon');
        let sideNavContainer = document.querySelector('.side-nav-container');
        let sideNav = document.querySelector('.side-nav');
    
        menuHamburger.addEventListener('click', () => {
            if (menuHamburgerIcon.classList.contains('fa-bars')){
                menuHamburgerIcon.classList.replace('fa-bars', 'fa-times');
                sideNavContainer.classList.add('open');
                sideNav.classList.add('open');
      
    
            } else {
                menuHamburgerIcon.classList.replace('fa-times', 'fa-bars');  
                sideNavContainer.classList.remove('open');
                sideNav.classList.remove('open');
            }
        })
    
    })
}




