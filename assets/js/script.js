$(document).ready(function() {

    renderHeaderColorFromUrl();
    // render post header color if needed

    $(document).on('click', '._post', renderPost);
    // on ._post click, do ajax stuff
});

var renderPost = function(e) {
    e.preventDefault();

    var $post = $(this);
    var url = $post.attr('href');
    var xhr = $.get(url);
    var pAnimate = $.Deferred();

    if ($post.hasClass('_busy')) return;

    $post.addClass('_busy');

    animatePostPreviewToHeader($post, pAnimate);

    $.when(xhr, pAnimate).done(function(res, $container) {
        var content = $('._content', $(res)[0]);
        var header = $('._header', $(res)[0]);
        var color = url.split('post_color=')[1];

        // Prepare the fake header for replacement
        header.addClass('hide');
        header.removeClass('bg-gray');
        header.addClass('bg-' + color);

        // Convert the transformed header to the actual header
        $post.after(header);
        $post.remove();
        header.removeClass('hide');

        // Remove all other posts .post where not ._busy
        $('._container > ._post').remove();

        // Scroll to top of new post
        $('html, body').scrollTop(0);

        // Prepare the fake container to be transformed in the real container
        $container.removeClass('post-container-fake height-0');
        $container.addClass('_content post-content');
        $container.removeClass('loading');
        $container.append(content);

        if (history.pushState) {
            history.pushState({ page:url }, url, url);
        }
    });
};

// Hack for allowing back button after an async load
window.onpopstate = function (event) {
    if (event) {
        location.reload();
    }
};

var animatePostPreviewToHeader = function($post, promise) {
    var targetHeaderOffset = 30;

    // animate header to width
    $post.css('width', '100%');
    $post.removeClass('post-hoverable');

    // animate header font size
    $post.find('._post-head').removeClass('text-size-2-5');
    $post.find('._post-head').addClass('text-massive');

    // expand content size with loader
    $post.after('<div class="post-container-fake height-0 loading"></div>');

    // Timeout for aesthetic purposes
    setTimeout(function() {
        $('html, body').animate({ scrollTop: $post.offset().top - targetHeaderOffset}, 300);
        var $container = $post.find('+ .post-container-fake').addClass('height-200');

        // Timeout for aesthetic purposes, we don't want to replace the header
        // while it is busy animating
        setTimeout(function() {
            promise.resolve($container);
        }, 400);
    }, 100);
};

var renderHeaderColorFromUrl = function () {
    var $header = $('._header');

    if (!$header[0]) return;

    var headerColor = $header.attr('class').split(' ').filter(function (className) {
        return className.indexOf('bg-') > - 1;
    });

    if (!headerColor.length || headerColor[0] !== 'bg-medium-gray') return;

    var targetColor = window.location.href.split('post_color=')[1];
    $header.removeClass('bg-medium-gray').addClass('bg-' + targetColor);
};
