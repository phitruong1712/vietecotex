(function($) {
    var APP = {
        status: function() {
            if (Cookies.get('alcantara-ar')) {
                var $code = Cookies.get('alcantara-ar');
                var $data = {
                    'code': $code,
                    'action': 'md_area_reserved_login'
                };
                $.ajax({
                    url: ajax_params.ajax_url,
                    data: $data
                }).done(function(response) {
                    APP.check(response.status, response.level);
                });
            } else {
                APP.showForm();
            }
        },
        check: function(logged, level) {
            if (logged) {
                APP.showPage(level);
            } else {
                APP.showForm();
            }
        },
        login: function() {
            var $form = $('#form-area-reserved form');
            $form.on('submit', function(e) {
                e.preventDefault();

                $form.removeClass('error');

                var $code = $form.find('[name="code"]').val();
                var $post_id = $form.find('[name="post_id"]').val();
                var $tax_id = $form.find('[name="tax_id"]').val();

                var $data = {
                    code: $code,
                    post_id: $post_id,
                    tax_id: $tax_id,
                    action: 'md_area_reserved_login'
                };
                $.ajax({
                    url: ajax_params.ajax_url,
                    data: $data
                }).done(function(response) {
                    if (response.status) {
                        Cookies.set('alcantara-ar', $data.code);
                        window.location.href = '';
                    } else {
                        $form.addClass('error');
                    }
                });
                // return false;
            });

            $form.find('input').on('input', function() {
                $form.removeClass('error');
            });
        },
        logout: function() {
            $('[data-area-reserved-logout]').on('click', function() {
                Cookies.remove('alcantara-ar');
                setTimeout(function() {
                    window.location.href = '/';
                }, 500);

                return false;
            });
        },
        showForm: function() {
            $('#form-area-reserved').addClass('in');
            $('#page-area-reserved').remove();
        },
        showPage: function(level) {

            if ($('#page-area-reserved').data('type') === 'archive') {
                $('#form-area-reserved').remove();
                $('#page-area-reserved').show();
                $('.group-' + level).show();
            } else {
                if ($('#page-area-reserved').data('level') === level) {
                    $('#form-area-reserved').remove();
                    $('#page-area-reserved').show();
                } else {
                    window.location.href = '/reserved-area/';
                }
            }
        },
        init: function() {
            // this.status();
            // this.login();
            // this.logout();
        }
    };

    $(window).on('load', function() {
        if ($('#form-area-reserved').length) {
            APP.login();
        }

        if ($('#page-area-reserved').length) {
            APP.logout();
            // Cookies.remove('alcantara-ar');
        }
    });

})(jQuery);