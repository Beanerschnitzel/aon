//nav bar toggles
jQuery(document).ready(function($) {
    $('.widget_searchToggle').click(function() {
        $(this).toggleClass('is-active');
        $(this).closest('.widget_content').toggleClass('widgetSearch-open');
        $('#widgetSearch').focus();
    });
    $('.widget_dropdown').on('show.bs.dropdown', function () {
        $(this).closest('.widget_content').removeClass('widgetSearch-open');
        $(this).closest('.widget_content').find('.widget_searchToggle').removeClass('is-active');
        //alert("clicked");
    });
});
