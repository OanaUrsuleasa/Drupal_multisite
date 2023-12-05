jQuery(document).ready(function($) {

    //add animation to section home
    const targets = document.querySelectorAll("section");
    const threshold = 0.5;

    const setAnim = (entries, observer) => {
      entries.forEach((entry) => {
        const elem = entry.target;
        if (entry.isIntersecting) {
          elem.classList.add('visible');
        } else {
          elem.classList.remove('visible');
        }
      });
    }

    const observer = new IntersectionObserver(setAnim, { threshold });
    for (const target of targets) {
      observer.observe(target);
    }

    $('.field__item a').on('click', function() {
        $('.technology .field__item a').attr('target', '_blank');
        $('.description_of_technologies .field__item a').attr('target', '_blank');
        $('.segment_partners a').attr('target', '_blank');
        $('.contact_footer2 a').attr('target', '_blank');

     //add source_page to contact form
        if ($('.field__item a').attr('href').includes('/contact')) {
            var currentUrl = window.location.href;
            sessionStorage.setItem('source_page', currentUrl);
        }
    });

    $('#edit-field-source-page-wrapper').css('display','none');
    var source_page= sessionStorage.getItem('source_page');
    $('#edit-field-source-page-0-value').val(source_page);

    //display of technology description
    $('.technology2 .field__item a').removeAttr("href");
    $('.description_of_technologies .field__item').attr('id', 'description_of_technologies');
    $('.description_of_technologies').css('display','none');

    $('.technology2 .field--name-body img').click(function() {
        $('.description_of_technologies').show();
        var index = $('.technology2 .field--name-body img').index(this);
        $('.description_of_technologies .field__item').hide();
        $('.technology2 .field--name-body img').css('filter','contrast(0.7) sepia(100%) hue-rotate(171deg) brightness(1)');
        $description_of_technologies= $('.description_of_technologies .field__item').eq(index);

        if ($description_of_technologies.length > 0) {
            $description_of_technologies.show();
            $('.technology2 .field--name-body img').eq(index).css('filter','none');
            $('html, body').animate({
                scrollTop: $('.title_technologies_page').offset().top
            }, 1000);

        }
    });
});