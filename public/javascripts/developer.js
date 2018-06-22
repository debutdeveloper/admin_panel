 $("meta[name='timezone_custom']").attr("content", moment.tz.guess());
$(".alert").fadeOut(10000);
 $.cookie("time_zone_name", moment.tz.guess());
////jQuery(document).ready(function () {
//// set local timezone offset in cookies
//    var time_zone_offset = -(new Date().getTimezoneOffset());
//    $.cookie("time_zone_offset", time_zone_offset);
//    // add methods for validation
//    $.validator.addMethod('filesize', function (value, element, param) {
//        return this.optional(element) || (element.files[0].size <= param)
//    }, "Invalid file Size");
//    $.validator.addMethod('min_filesize', function (value, element, param) {
//        return this.optional(element) || (element.files[0].size >= param)
//    }, "Invalid file Size");
//    $.validator.addMethod("match", function (value, element, param) {
//        return this.optional(element) || param.test(value);
//    }, "This field must contain only letters, numbers, space or dashes");
//    $.validator.addMethod("regex", function (value, element, regexpr) {
//        return regexpr.test(value);
//    }, "Enter a valid");
//    $("#email").focus();
//    $("#password").focus();
//    //form validation for state
//    $(".state-form").validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            name: {
//                required: true,
//                rangelength: [3, 30]
//            }
//        },
//        messages: {
//            name: {
//                required: "Enter province name.",
//                rangelength: "Enter province name between 3 to 30 characters."
//            }
//
//        }
//    });
//    //form validation for city
//    $(".city-form").validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            name: {
//                required: true,
//                rangelength: [3, 30]
//            },
//            state_id: {
//                required: true
//            }
//        },
//        messages: {
//            name: {
//                required: "Enter zone name.",
//                rangelength: "Enter zone name between 3 to 30 characters."
//            },
//            state_id: {
//                required: "Select province name."
//            }
//        }
//    });
//
//    //form validation for pricing zone
//    $(".pricingzone-form").validate({
//        focusInvalid: false,
//        onkeyup: true,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            city: {
//                required: true
//            },
//            state: {
//                required: true
//            },
//            a: {
//                required: true,
//                number: true
//            },
//            bmax: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            bmin: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: {
//                    depends: function (element) {
//                        return ($(this).val() > $("#bmax").val());
//                    }
//                }
//            },
//            m1: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            m2: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            c1: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            c2: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            c3: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            c4: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            c5: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            },
//            c6: {
//                required: true,
//                number: true,
//                min: 0.1,
//                max: 100
//            }
//        },
//        messages: {
//            city: {
//                required: "Select zone name."
//            },
//            state: {
//                required: "Select province name."
//            },
//            a: {
//                required: "Enter the value of a.",
//                number: "This value must be number."
//            },
//            bmax: {
//                required: "Enter the value of bmax.",
//                number: "This value must be number.",
//                max: "bmax should be less than 100%.",
//                min: "bmax should be more than 0%."
//            },
//            bmin: {
//                required: "Enter the value of bmin.",
//                number: "This value must be number.",
//                max: "bmin should be less than bmax.",
//                min: "bmin should be more than 0%."
//            },
//            m1: {
//                required: "Enter the value of m1.",
//                number: "This value must be number.",
//                max: "m1 should be less than 100%.",
//                min: "m1 should be more than 0%."
//            },
//            m2: {
//                required: "Enter the value of m2.",
//                number: "This value must be number.",
//                max: "m2 should be less than 100%.",
//                min: "m2 should be more than 0%."
//            },
//            c1: {
//                required: "Enter the value of c1.",
//                number: "This value must be number.",
//                max: "c1 should be less than 100%.",
//                min: "c1 should be more than 0%."
//            },
//            c2: {
//                required: "Enter the value of c2.",
//                number: "This value must be number.",
//                max: "c2 should be less than 100%.",
//                min: "c2 should be more than 0%."
//            },
//            c3: {
//                required: "Enter the value of c3.",
//                number: "This value must be number.",
//                max: "c3 should be less than 100%.",
//                min: "c3 should be more than 0%."
//            },
//            c4: {
//                required: "Enter the value of c4.",
//                number: "This value must be number.",
//                max: "c4 should be less than 100%.",
//                min: "c4 should be more than 0%."
//            },
//            c5: {
//                required: "Enter the value of c5.",
//                number: "This value must be number.",
//                max: "c5 should be less than 100%.",
//                min: "c5 should be more than 0%."
//            },
//            c6: {
//                required: "Enter the value of c6.",
//                number: "This value must be number.",
//                max: "c6 should be less than 100%.",
//                min: "c6 should be more than 0%."
//            }
//        }
//    });
   
//    $('#getEmail-form').validate({
//        focusInvalid: false,
//        onkeyup: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            email: {
//                required: {
//                    depends: function () {
//                        $(this).val($.trim($(this).val()));
//                        return true;
//                    }
//                },
//                maxlength: 50,
//                match: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
////                match: /^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|biz|com|edu|gov|info|net|org)$/
//            }
//        },
//        messages: {
//            email: {
//                required: "Enter e-mail.",
//                maxlength: "E-mail maximum length is 50.",
//                match: "Enter valid e-mail.",
//            }
//        }
//    });
//    $('.login-form').validate({
//        focusInvalid: false,
//        onkeyup: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            email: {
//                required: {
//                    depends: function () {
//                        $(this).val($.trim($(this).val()));
//                        return true;
//                    }
//                },
//                maxlength: 50,
//                match: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
////                match: /^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|biz|com|edu|gov|info|net|org)$/
//            },
//            password: {
//                required: true
//            },
//            captcha: {
//                required: true
//            }
//        },
//        messages: {
//            email: {
//                required: "Enter e-mail.",
//                maxlength: "E-mail maximum length is 50.",
//                match: "Enter valid e-mail.",
//            },
//            password: {
//                required: "Enter password."
//            },
//            captcha: {
//                required: "Enter captcha code."
//            }
//        }
//    });
//    $(".forgot-form").validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            email: {
//                required: {
//                    depends: function () {
//                        $(this).val($.trim($(this).val()));
//                        return true;
//                    }
//                },
//                maxlength: 50,
//                match: /^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|biz|com|edu|gov|info|net|org)$/
//            }
//        },
//        messages: {
//            email: {
//                required: "Enter e-mail.",
//                maxlength: "E-mail maximum length is 50.",
//                match: "Enter valid e-mail."
//            }
//        }
//    });
//    $('.changePassword-form').validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            currentPassword: {
//                required: true
//            },
//            newPassword: {
//                required: true,
//                rangelength: [8, 16],
//                match: /^(?=.*\d)(?=[\w!@#$%^&*()+]{8,})(?:.*[!@#$%^&*()+]+.*).*$/
//            },
//            confirmPassword: {
//                required: true,
//                equalTo: "#newPassword"
//            }
//        },
//        messages: {
//            currentPassword: {
//                required: "Enter current password."
//            },
//            newPassword: {
//                required: "Enter new password.",
//                rangelength: "Enter a password between 8 to 16 characters. Your password should include letters, numbers and special characters.",
//                match: "Enter a password between 8 to 16 characters. Your password should include letters, numbers and special characters."
//            },
//            confirmPassword: {
//                required: "Enter confirm password.",
//                equalTo: "The passwords you have entered do not match."
//            }
//        }
//    });
//    $('.resetPwd-form').validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            password: {
//                required: true,
//                rangelength: [8, 16],
//                match: /^(?=.*\d)(?=[\w!@#$%^&*()+]{8,})(?:.*[!@#$%^&*()+]+.*).*$/
//            },
//            password_confirmation: {
//                required: true,
//                equalTo: "#password"
//            }
//        },
//        messages: {
//            password: {
//                required: "Enter new password.",
//                rangelength: "Enter a password between 8 to 16 characters. Your password should include letters, numbers and special characters.",
//                match: "Enter a password between 8 to 16 characters. Your password should include letters, numbers and special characters."
//            },
//            password_confirmation: {
//                required: "Confirm new password.",
//                equalTo: "The passwords you have entered do not match."
//            }
//        }
//    });
//
//    //form validation for category-add-Edit
//    $(".category-form").validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            category_name: {
//                required: true,
//                rangelength: [3, 100],
//                match: /^[a-zA-Z ]*$/,
//            }
//        },
//        messages: {
//            category_name: {
//                required: "Enter category name.",
//                rangelength: "Enter category name between 3 to 100 characters.",
//                match: "Enter only letters."
//            }
//
//        }
//    });
//    $(".profile-form").validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            first_name: {
//                match: /^[a-z,0-9,'-]+$/i,
//                rangelength: [3, 20],
//                required: true
//            },
//            last_name: {
//                match: /^[a-z,0-9,'-]+$/i,
//                rangelength: [3, 20],
//                required: true
//            },
//            photo: {
//                extension: "jpg|jpeg|png",
//                filesize: 2000000
//            }
//        },
//        messages: {
//            first_name: {
//                required: "Enter first name.",
//                rangelength: "Enter first name between 3 to 30 characters.",
//                match: "Enter only numbers and letters."
//            },
//            last_name: {
//                required: "Enter last name.",
//                rangelength: "Enter last name between 3 to 30 characters.",
//                match: "Enter only numbers and letters."
//            },
//            photo: {
//                extension: "Supported Image format jpeg, png.",
//                filesize: "Maximum file size 2 MB."
//            }
//        }
//    });
//    //form validation for disable user
//    $("#disableUser-form").validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            reason: {
//                required: true,
//                maxlength: 300
//            }
//        },
//        messages: {
//            reason: {
//                required: "Enter reason.",
//                maxlength: "Enter reason max 300 characters only."
//            }
//        }
//    });
//    //form validation for settings
//    $("#settings-form").validate({
//        focusInvalid: false,
//        invalidHandler: function (form, validator) {
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//                validator.errorList[0].element.focus();
//            }
//        },
//        rules: {
//            near_by: {
//                required: true,
//                number: true,
//                max: 1000000
//            },
//            algorithm_distance: {
//                required: true,
//                number: true,
//                max: 1000000
//            },
//            version: {
//                required: true,
//                number: true,
//                max: 100
//            }
//        },
//        messages: {
//            near_by: {
//                required: "Enter search distance in meters.",
//                number: "Enter the valid distance.",
//                max: "You can enter max distance 1000 km."
//            },
//            algorithm_distance: {
//                required: "Enter algorithm distance in meters.",
//                number: "Enter the valid distance.",
//                max: "You can enter max distance 1000 km."
//            },
//            version: {
//                required: "Enter app version.",
//                number: "Enter the valid app version.",
//                max: "You can enter max app version value 100."
//            }
//        }
//    });
//    $(document).on("click", "#checkAll", function () {
//        $(".check").prop('checked', $(this).prop('checked'));
//        if ($(this).prop('checked'))
//            $(".check").parent().prop('class', 'checked');
//        else
//            $(".check").parent().prop('class', '');
//    });
//    $(document).on("click", ".delete", function () {
//        var message = "Are you sure you want to delete?";
//        if ($("#url").val() === "/faqs/")
//        {
//            message = "Are you sure you want to delete the faq?";
//        }
//        if ($("#url").val() === "/contact_us/")
//        {
//            message = "Are you sure you want to delete the query?";
//        }
//        if ($("#url").val() === "/category/")
//        {
//            message = "Are you sure you want to delete the queries category?";
//        }
//        if ($("#url").val() === "/drive_image/")
//        {
//            message = "Are you sure you want to delete the image?";
//        }
//        if ($("#url").val() === "/pricing_zone/")
//        {
//            message = "Are you sure you want to delete the price of zone?";
//        }
//        if ($("#url").val() === "/states")
//        {
//            message = "Are you sure you want to delete the province?";
//        }
//        if ($("#url").val() === "/cities/")
//        {
//            message = "Are you sure you want to delete the zone?";
//        }
//        if ($("#url").val() === "/pages")
//        {
//            message = "Are you sure you want to delete the cms page?";
//        }
//
//        var deleteLink = $(this).attr('deleteLink');
//        bootbox.confirm(message, function (result) {
//            if (result) {
//                window.location = deleteLink;
//            }
//        });
//    });
//    $('#deleteSelected').click(function () {
//        if ($('.check:checked').length == 0)
//            bootbox.alert("Select Atleast One!");
//        else
//        {
//            bootbox.confirm("Are you sure you want to delete?", function (result) {
//                if (result) {
//                    $("#action").val("delete");
//                    $("#frm").submit();
//                }
//            });
//        }
//    });
//    $(document).on("click", ".change_status", function () {
//        var id = $(this).attr("val");
//        var status = $(this).attr("value");
//        var obj = $(this);
//        var user_type = "";
//        var url = "";
//        if ($("#url").val() == "/users/")
//        {
//            user_type = "user";
//            url = "/users/changeStatus";
//        }
//        if ($("#url").val() == "/faqs/")
//        {
//            user_type = "FAQ";
//            url = "/faqs/changeStatus";
//        }
//        if ($("#url").val() == "/category/")
//        {
//            user_type = "Category";
//            url = "/category/changeStatus";
//        }
//        if ($("#url").val() == "/drive_image/")
//        {
//            user_type = "Image";
//            url = "/drive_image/changeStatus";
//        }
//
//        var msg = "";
//        if (status == 0)
//            msg = "Are you sure you want to inactivate this " + user_type + "?";
//        else
//            msg = "Are you sure you want to activate this " + user_type + "?";
//        bootbox.confirm(msg, function (result) {
//            if (result)
//            {
//                document.getElementById("preLoader").style.width = "100%";
//                $.ajax({
//                    url: url,
//                    type: "POST",
//                    data: {id: id, status: status},
//                    dataType: 'JSON',
//                    success: function (result)
//                    {
//                        document.getElementById("preLoader").style.width = "0%";
//                        if (result == 'unauthorised')
//                        {
//                            window.location = "/login";
//                        } else
//                        {
//                            if ($("#url").val() == "/users/")
//                            {
//                                window.location = "/users";
//                            }
//                            if ($("#url").val() == "/faqs/")
//                            {
//                                window.location = "/faqs";
//                            }
//                            if ($("#url").val() == "/category/")
//                            {
//                                window.location = "/category";
//                            }
//                            if ($("#url").val() == "/drive_image/")
//                            {
//                                window.location = "/drive_image";
//                            }
//                        }
//                    }
//                });
//            }
//        });
//    });
//
//    $('#update').click(function ()
//    {
//        if ($('.check:checked').length == 0)
//            bootbox.alert("Select Atleast One!");
//        else
//        {
//            bootbox.dialog({
//                message: "Click on Active or Inactive button!",
//                title: "Update Status",
//                buttons: {
//                    success: {
//                        label: "Active",
//                        className: "green",
//                        callback: function () {
//                            $("#action").val(1);
//                            $("#frm").submit();
//                        }
//                    },
//                    main: {
//                        label: "Inactive",
//                        className: "red",
//                        callback: function () {
//                            $("#action").val(0);
//                            $("#frm").submit();
//                        }
//                    },
//                    buttons: {
//                        label: "CANCEL",
//                        className: "blue",
//                    }
//                }
//            });
//        }
//    });
//    $(document).on("click", "#filter", function ()
//    {
//        var flag = 1;
//        if ($("#filterUrl").val() == "/users/")
//        {
//            if (!$("#search_by").val() && !$("#sort_type").val() && !$("#sort_field").val() && !$("#created_at").val())
//            {
//                flag = 0;
//                bootbox.alert('Select any filter.');
//            }
//        } else if ($("#filterUrl").val() == "/contact_us/")
//        {
//            if (!$("#search_by").val() && !$("#sort_type").val() && !$("#sort_field").val() && !$("#created_at").val())
//            {
//                flag = 0;
//                bootbox.alert('Select any filter.');
//            }
//        } else if ($("#filterUrl").val() == "/cities/")
//        {
//            if (!$("#search_by").val() && !$("#sort_type").val() && !$("#state_id").val() && !$("#sort_field").val())
//            {
//                flag = 0;
//                bootbox.alert('Select any filter.');
//            }
//        } else if ($("#filterUrl").val() == "/bottle_drives/")
//        {
//            if (!$("#search_by").val() && !$("#sort_type").val() && !$("#sort_field").val() && !$("#sort_by_status").val())
//            {
//                flag = 0;
//                bootbox.alert('Select any filter.');
//            }
//        } else if ($("#filterUrl").val() == "/pricing_zone/")
//        {
//            if (!$("#state").val() && !$("#city").val())
//            {
//                flag = 0;
//                bootbox.alert('Select any filter.');
//            }
//        } else
//        {
//            if (!$("#search_by").val() && !$("#sort_type").val() && !$("#sort_field").val())
//            {
//                flag = 0;
//                bootbox.alert('Select any filter.');
//            }
//        }
//
//        var check_regx = /[`^~<>"')(?*%$]/;
//        if ($("#search_by").val() && check_regx.test($("#search_by").val()))
//        {
//            flag = 0;
////            bootbox.alert('Enter only letters or numbers.');
//            $("#search_by_error").text("Enter only letters or numbers.").show();
//        } else if ($("#sort_field").val() && $("#sort_type").val() == '')
//        {
//            flag = 0;
//            bootbox.alert('Select Sort Type.');
//        } else if ($("#sort_type").val() && $("#sort_field").val() == '')
//        {
//            flag = 0;
//            bootbox.alert('Select Sort By.');
//        } else if ($(".search_by").val() == '' && $("#sort_field").val() == '')
//        {
//            flag = 0;
//            bootbox.alert('Select Sort By or Search to filter.');
//        }
//
//        if (flag === 1)
//        {
//            $("#search_by_error").hide();
//            var str = $("form").serialize();
//            var search;
//            var url = $("#filterUrl").val();
//            document.getElementById("preLoader").style.width = "100%";
//            $.ajax({
//                url: url + '?' + str,
//                type: "GET",
//                data: {search: 1},
//                success: function (result) {
//                    document.getElementById("preLoader").style.width = "0%";
//                    if (result == 'unauthorised')
//                        window.location = "/login";
//                    else
//                        $("#ajaxResponce").html(result);
//                    Metronic.init(); // init metronic core components
//                }
//            });
//        }
//    });
//    $("#clear").click(function ()
//    {
//        $("#filter_form")[0].reset();
//        $('#sort_type').prop('disabled', true);
//        $('#city').prop('disabled', true);
//        $("#search_by_error").hide();
//        var url = $("#filterUrl").val();
//        if ($("#filterUrl").val() === "/bottle_drives/donors/")
//            url += '?drive_id=' + $("#drive_id").val();
//        document.getElementById("preLoader").style.width = "100%";
//        $.ajax({
//            url: url,
//            type: "GET",
//            data: {search: 1},
//            success: function (result) {
//                document.getElementById("preLoader").style.width = "0%";
//                if (result == 'unauthorised')
//                    window.location = "/login";
//                else
//                {
//                    $("#ajaxResponce").html(result);
//                    Metronic.init(); // init metronic core components
//                }
//            }
//        });
//    });
//    function isFloat(n) {
//        return Number(n) === n && n % 1 !== 0;
//    }
//
//    $(document).on("click", "#export_button_csv", function () {
//        if ($("#sort_field").val() && $("#sort_type").val() == '')
//        {
//            bootbox.alert('Select Sort Type.');
//        } else if ($("#sort_type").val() && $("#sort_field").val() == '')
//        {
//            bootbox.alert('Select Sort By.');
//        } else
//        {
//            var str = $("form").serialize();
//            var url = $("#export_csv_url").val();
//            document.getElementById("preLoader").style.width = "100%";
//            $.ajax({
//                url: url + '?' + str,
//                type: "GET",
//                data: {search: 1},
//                success: function (result) {
//                    document.getElementById("preLoader").style.width = "0%";
//                    if (result == 'unauthorised')
//                        window.location = "/login";
//                    else {
//                        //front end code for export csv
//                        download(result);
//                    }
//                }
//            });
//        }
//    });
//    // Final Code for Download CSV Function
//    function download(json_data1)
//    {
//        var _log = json_data1;
//        var csvData = ConvertToCSV(_log);
//        var a = document.createElement("a");
//        a.setAttribute('style', 'display:none;');
//        document.body.appendChild(a);
//        var blob = new Blob([csvData], {type: 'text/csv'});
//        var url = window.URL.createObjectURL(blob);
//        a.href = url;
//        var timestamp = Math.floor(Date.now() / 1000);
//        a.download = timestamp + '_data.csv';
//        a.click();
//    }
//
//    // convert Json to CSV data
//    function ConvertToCSV(objArray)
//    {
//        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
//        var str = '';
//        var row = "";
//        for (var index in objArray[0]) {
//            //Now convert each value to string and comma-separated
//            row += index + ',';
//        }
//        row = row.slice(0, -1);
//        //append Label row with line break
//        str += row + '\r\n';
//        for (var i = 0; i < array.length; i++) {
//            var line = '';
//            for (var index in array[i]) {
//                if (line != '')
//                    line += ','
//                line += '"' + array[i][index] + '"';
//            }
//            str += line + '\r\n';
//        }
//        return str;
//    }
//
//    $(document).on("click", ".view", function () {
//        /***********user ajax view *******/
//        var url_for_user_view = '';
//        if ($("#url").val() == "/users/")
//        {
//            url_for_user_view = "/users/view";
//        }
//
//        if ($("#url").val() == "/faqs/")
//        {
//            url_for_user_view = "/faqs/view";
//        }
//        if ($("#url").val() == "/category/")
//        {
//            url_for_user_view = "/category/view";
//        }
//
//        var user_id = $(this).attr("user_id");
//        document.getElementById("preLoader").style.width = "100%";
//        $.ajax({
//            url: url_for_user_view,
//            type: "POST",
//            data: {id: user_id},
//            dataType: "JSON",
//            success: function (result)
//            {
//                document.getElementById("preLoader").style.width = "0%";
//                if (result == 'unauthorised')
//                    window.location = "/login";
//                else if (result.status == 'error')
//                {
//                    if ($("#url").val() == "/users/")
//                    {
//                        window.location = "/users";
//                    }
//                    if ($("#url").val() == "/faqs/")
//                    {
//                        window.location = "/faqs";
//                    }
//                    if ($("#url").val() == "/category/")
//                    {
//                        window.location = "/category";
//                    }
//                } else
//                {
//                    if ($("#url").val() == "/users/")
//                    {
//                        var status = "Active";
//                        $('#name').text(result.data.first_name + " " + result.data.last_name);
//                        $('#email').text(result.data.email || "--");
//                        $('#phone').text(result.data.phone || "--");
//                        if (result.data.status == 3)
//                            status = "Blocked";
//                        $('#status').text(status);
//                        $('#unique_id').text(result.data.unique_id || "--");
//                        var addr = '';
//                        for (var i = 0; i < result.data.customer_address.length; i++) {
//                            addr += '<b>' + result.data.customer_address[i].address_name + '</b>, ' +
//                                    result.data.customer_address[i].unit_number + ', ' +
//                                    result.data.customer_address[i].street_name + ', ' +
//                                    result.data.customer_address[i].sublocation_id.area_name + ', ' +
//                                    result.data.customer_address[i].location_id.name + '<br>'
//                        }
//                        $('#address1').html(addr || "Not Available");
//                    }
//
//                    if ($("#url").val() == "/faqs/")
//                    {
//                        $('#question').text(result.data.heading);
//                        $('#answer').text(result.data.description);
//                    }
//                    $('#myModal').modal('show');
//                }
//            }
//        });
//        /***********user ajax view ends here*******/
//    });
//    $(document).on("click", ".disable_user", function () {
//        $('#sub_error_getEmail').text("");
//        $('.error').text("");
//        $('#disableUser-form').trigger("reset");
//        var userId = $(this).attr('userid');
//        var status = $(this).attr('status');
//        $('#disable_user_btn').attr('userid', userId);
//        $('#disable_user_btn').attr('status', status);
//        if (status == 4)
//            $('.disable_reason_popup').html('Add your comment "why you want to Block this bottle drive?"');
//        else if (status == 5)
//            $('.disable_reason_popup').html('Add your comment "why you want to Unblock this bottle drive?"');
//        else if (status == 1)
//            $('.disable_reason_popup').html('Add your comment "why you want to Unblock this user?"');
//        else
//            $('.disable_reason_popup').html('Add your comment "why you want to Block this user?"');
//    });
//    //disable user or block bottle drive
//    $(document).on("click", "#disable_user_btn", function () {
//        var url_for_user_disable = "";
//        var disable_reason = $('#disableUserID').val();
//        var userId = $(this).attr('userid');
//        var status = $(this).attr("status");
//        if ($('#disableUser-form').valid())
//        {
//            if ($("#url").val() == "/users/")
//            {
//                url_for_user_disable = "/users/disable_user";
//            }
//
//            if ($("#url").val() == "/bottle_drives/" || $("#url").val() == "/reported_bottle_drives/" || $("#url").val() == "/bottle_drive_details/")
//            {
//                url_for_user_disable = "/bottle_drives/block";
//            }
//
//            document.getElementById("preLoader").style.width = "100%";
//            $.ajax({
//                url: url_for_user_disable,
//                type: "POST",
//                data: {userId: userId, disable_reason: disable_reason, status: status},
//                dataType: "JSON",
//                success: function (result)
//                {
//                    document.getElementById("preLoader").style.width = "0%";
//                    if (result == 'unauthorised')
//                        window.location = "/login";
//                    else if (result.status == 1)
//                    {
//                        $("#sub_error_getEmail").text("");
//                        $('#disableUserModal').modal('hide');
//                        if ($("#url").val() == "/users/")
//                        {
//                            if (status == 1)
//                            {
//                                $('#disable_user_btn').attr("status", 1);
//                            } else
//                            {
//                                $('#disable_user_btn').attr("status", 3);
//                            }
//                            window.location = "/users";
//                        } else if ($("#url").val() == "/bottle_drives/")
//                        {
//                            window.location = "/bottle_drives";
//                        } else if ($("#url").val() == "/reported_bottle_drives/")
//                        {
//                            window.location = "/reported_bottle_drives";
//                        } else if ($("#url").val() == "/bottle_drive_details/")
//                        {
//                            window.location = $("#back_url").val();
//                        }
//                    } else
//                    {
//                        $("#sub_error_getEmail").text(result.message);
//                    }
//                }
//            });
//        }
//    });
//    $(document).on("change", "#sort_field", function () {
//        if ($('#sort_field').val())
//        {
//            $('#sort_type').prop('disabled', false);
//        } else
//        {
//            $('#sort_type').prop('disabled', true);
//        }
//
//        if ($('#sort_field').val() === "status")
//        {
//            var values = [{status: -1, name: "Active"}, {status: 1, name: "Inactive"}];
//        } else
//        {
//            var values = [{status: 1, name: "Ascending"}, {status: -1, name: "Descending"}];
//        }
//        var options = '<option value="">--Select--</option>';
//        for (var i = 0; i < values.length; i++)
//        {
//            options += '<option value="' + values[i].status + '">' + values[i].name + '</option>';
//        }
//        $('#sort_type').html(options);
//    });
//    $(document).on("change", "#state", function () {
//        if ($('#state').val())
//        {
//            document.getElementById("preLoader").style.width = "100%";
//            $.ajax({
//                url: "/pricing_zone/cities/" + $(this).val(),
//                type: "GET",
//                dataType: "JSON",
//                success: function (result)
//                {
//                    document.getElementById("preLoader").style.width = "0%";
//                    if (result == 'unauthorised')
//                        window.location = "/login";
//                    else if (result.status == 1)
//                    {
//                        var cities = '<option value="">--Select--</option>';
//                        for (var i = 0; i < result.cities.length; i++)
//                        {
//                            cities += '<option value="' + result.cities[i]._id + '">' + result.cities[i].name + '</option>'
//                        }
//                        $('#city').html(cities);
//                    }
//                }
//            });
//            $('#city').prop('disabled', false);
//        } else
//        {
//            $('#city').val("");
//            $('#city').prop('disabled', true);
//        }
//    });
//    $(document).on("click", "#start_date, input[name='start_date']", function (e) {
//        $("#start_date_picker").datepicker('show').on('changeDate', function (selected) {
//            var minDate = new Date(selected.date.valueOf());
//            $('#end_date_picker').datepicker('setDate', "");
//            $('#end_date_picker').datepicker('setStartDate', minDate);
//        });
//    });
//
//    $(document).on("click", "#end_date, input[name='end_date']", function (e) {
//        $("#end_date_picker").datepicker('show');
//    });
//
//    $(document).keydown(function (e) {
//        // ESCAPE key pressed
//        if (e.keyCode === 27) {
//            $('.modal').modal('hide');
//        }
//    });
////    $('.password_field').bind("cut copy paste", function (e) {
////        e.preventDefault();
////        $('#password').bind("contextmenu", function (e) {
////            e.preventDefault();
////        });
////    });
//});

