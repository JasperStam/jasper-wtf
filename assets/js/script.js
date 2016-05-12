$(document).ready(function() {
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

    $post.addClass('_busy');

    animatePostPreviewToHeader($post, pAnimate);

    $.when(xhr, pAnimate).done(function(res, $container) {
        var content = $('._content', $(res)[0]);
        var header = $('._header', $(res)[0]);

        $container.append(content);

        cleanupPostPreview($post, $container);
        $container.removeClass('loading');
        $post.removeClass('_busy');

        // update location
    });
};

var animatePostPreviewToHeader = function($post, promise) {
    // animate header to width
    $post.css('width', '100%');

    // animate header font size
    $post.find('._post-head').removeClass('text-size-2-5');
    $post.find('._post-head').addClass('text-massive');

    // expand content size with loader
    $post.after('<div class="post-container-fake height-0 loading"></div>');
    setTimeout(function() {
        var $container = $post.find('+ .post-container-fake').addClass('height-200');
        promise.resolve($container);
    }, 100);
};

var cleanupPostPreview = function($post, $container) {

};
