!function (e) {
    function t(n) {
        if (a[n]) 
            return a[n].exports;
        var o = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var a = {};
    return t.m = e,
    t.c = a,
    t.d = function (e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    },
    t.n = function (e) {
        var a = e && e.__esModule
            ? function () {
                return e["default"]
            }
            : function () {
                return e
            };
        return t.d(a, "a", a),
        a
    },
    t.o = function (e, t) {
        return Object
            .prototype
            .hasOwnProperty
            .call(e, t)
    },
    t.p = "",
    t(t.s = 0)
}([
    function (e, t, a) {
        a(1),
        e.exports = a(3)
    },
    function (e, t, a) {
        function n() {
            var e = navigator.userAgent || navigator.vendor || window.opera;
            return /windows phone/i.test(e)
                ? "Windows Phone"
                : /android/i.test(e)
                    ? "Android"
                    : /iPad|iPhone|iPod/.test(e) && !window.MSStream
                        ? "iOS"
                        : "unknown"
        }

        function o() {
            var e = document.querySelectorAll("[data-slider]");
            $(e).each(function () {
                var e = $(this);
                e.ael_slider({data: $(this), interval: 12e3})
            })
        }
        a(2),
        console.clear();
        var i = n();
        "iOS" == i
            ? ($(".ael-cta-btns").show(), $(".ael-cta-btn-ios").show(), $(".ael-cta-btn-comman").hide())
            : ($(".ael-cta-btns").show(), $(".ael-cta-btn-ios").hide(), $(".ael-cta-btn-comman").show()),
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            e >= 50
                ? $(".main_nav").addClass("ael_onscroll")
                : $(".main_nav").removeClass("ael_onscroll")
        }),
        "/" != window.location.pathname && ($(".main_nav.fixed-top").addClass("newael_onscroll"), $(".navfixed-top").css({
            "margin-top": $(".main_nav.fixed-top").height()
        })),
        jQuery
            .validator
            .addMethod("messagecheck", function (e, t) {
                return this.optional(t) || /^[a-zA-Z\s0-9'"!@#$&;:()-.,_%? ]+$/.test(e)
            }, "Special Characters are not allowed"),
        jQuery
            .validator
            .addMethod("namespace", function (e, t) {
                return this.optional(t) || /^[a-zA-Z ]*$/.test(e)
            }, "Special Characters are not allowed"),
        jQuery
            .validator
            .addMethod("mobilecheck", function (e, t) {
                return this.optional(t) || /^[0-9+]*$/.test(e)
            }, "Only numbers are allowed"),
        o(),
        $("#exampleModal").on("show.bs.modal", function (e) {
            var t = $(e.relatedTarget),
                a = (t.data("whatever"), $(this));
            a
                .find(".modal-title")
                .text($(e.relatedTarget).parent().prev().prev().find(".team_name").text()),
            a
                .find(".modal-body p")
                .text($(e.relatedTarget).parent().prev().find("p").text())
        }),
        $(".teamcardslick").slick({
            dots: !1,
            infinite: !1,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 2e3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: !0
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }),
        $(".newsresponsive").slick({
            centerMode: !0,
            centerPadding: "60px",
            slidesToShow: 3,
            autoplay: !0,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: !1,
                        centerMode: !0,
                        centerPadding: "40px",
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        dots: !0,
                        arrows: !1,
                        centerMode: !0,
                        centerPadding: "40px",
                        slidesToShow: 1
                    }
                }
            ]
        }),
        $(".testimonials_responsive").slick({
            dots: !1,
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 2e6
        }),
        $(".testimonials_responsive").slick({
            dots: !1,
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 2e6
        }),
        $(".casestudy_responsive").slick({
            dots: !1,
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 2e6
        }),
        $("#ctaform").on("show.bs.modal", function (e) {
            var t = $(e.relatedTarget),
                a = t.data("formid"),
                n = $(this);
            n
                .find(".modal-body input#formid")
                .val(a)
        }),
        $("#ctaform").on("hidden.bs.modal", function () {
            $("input.modal-textinput").val(""),
            $("textarea.modal-textinput").val("")
        }),
        $("form#modalformid").on("submit", function (e) {
            e.preventDefault()
        }),
        $("#modalformid").validate({
            rules: {
                ctaname: {
                    required: !0,
                    minlength: 3,
                    namespace: !0
                },
                ctaemail: {
                    required: !0,
                    email: !0
                },
                ctaphonenumber: {
                    required: !0,
                    minlength: 10,
                    mobilecheck: !0
                },
                ctamessage: {
                    required: !0,
                    messagecheck: !0
                }
            },
            messages: {
                ctaname: {
                    required: "Please enter your name",
                    minlength: "Name should be more than 3 letters",
                    namespace: "Only Characteres are allowed"
                },
                ctaemail: {
                    required: "Please enter emailID",
                    email: "Please enter proper email"
                },
                ctaphonenumber: {
                    required: "Please enter mobile no:",
                    minlength: "Mobile no should be 10 digits",
                    mobilecheck: "Please Enter Valid Mobile Number"
                },
                ctamessage: {
                    required: "Please enter message",
                    messagecheck: "Special characters like ^|/~`[]{}= are not allowed"
                }
            },
            submitHandler: function (e) {
                var t = $("#modalformid").serializeArray();

                gtag_report_conversion();
                return console.log("contact data", t),
                $.ajax({
                    type: "Get",
                    url: "../cta-forms",
                    data: t,
                    success: function (e) {
                        console.log(e),
                        "done" == e && (ga('send', 'event', 'CTA buttons', 'CTA Submitted', window.location.href), $("input.modal-textinput").val(""), $("textarea.modal-textinput").val(""), $("#ctaform").modal("hide"), $("#ctacnfmmsg").modal("show"))
                    }
                }),
                !1
            }
        }),
        $("form#modalformid1").on("submit", function (e) {
            e.preventDefault()
        }),
        $("#modalformid1").validate({
            rules: {
                ctaname: {
                    required: !0,
                    minlength: 3,
                    namespace: !0
                },
                ctaemail: {
                    required: !0,
                    email: !0
                },
                ctaphonenumber: {
                    required: !0,
                    minlength: 10,
                    mobilecheck: !0
                },
                ctamessage: {
                    required: !0,
                    messagecheck: !0
                }
            },
            messages: {
                ctaname: {
                    required: "Please enter your name",
                    minlength: "Name should be more than 3 letters",
                    namespace: "Only Characteres are allowed"
                },
                ctaemail: {
                    required: "Please enter emailID",
                    email: "Please enter proper email"
                },
                ctaphonenumber: {
                    required: "Please enter mobile no:",
                    minlength: "Mobile no should be 10 digits",
                    mobilecheck: "Please Enter Valid Mobile Number"
                },
                ctamessage: {
                    required: "Please enter message",
                    messagecheck: "Special characters like ^|/~`[]{}= are not allowed"
                }
            },
            submitHandler: function (e) {

                gtag_report_conversion();
                var t = $("#modalformid1").serializeArray();
                return console.log("contact data", t),
                $.ajax({
                    type: "Get",
                    url: "../cta-forms",
                    data: t,
                    success: function (e) {
                        if (console.log(e), "done" == e) {
                            ga('send', 'event', 'CTA buttons', 'CTA Submitted', window.location.href);
                            $("input.modal-textinput").val(""),
                            $("textarea.modal-textinput").val("");
                            var t = $("div#myjQueryModal.briefPopUp-modal");
                            t.trigger("briefPopUp:close"),
                            $("#ctacnfmmsg").modal("show")
                        }
                    }
                }),
                !1
            }
        }),
        $("form#contactformid").on("submit", function (e) {
            e.preventDefault()
        }),
        $("#contactformid").validate({
            rules: {
                ctaname: {
                    required: !0,
                    minlength: 3,
                    namespace: !0
                },
                ctaemail: {
                    required: !0,
                    email: !0
                },
                ctaphonenumber: {
                    required: !0,
                    minlength: 10,
                    mobilecheck: !0
                },
                ctamessage: {
                    required: !0,
                    messagecheck: !0
                }
            },
            messages: {
                ctaname: {
                    required: "Please enter your name",
                    minlength: "Name should be more than 3 letters",
                    namespace: "Only Characteres are allowed"
                },
                ctaemail: {
                    required: "Please enter emailID",
                    email: "Please enter proper email"
                },
                ctaphonenumber: {
                    required: "Please enter mobile no:",
                    minlength: "Mobile no should be 10 digits",
                    mobilecheck: "Please Enter Valid Mobile Number"
                },
                ctamessage: {
                    required: "Please enter message",
                    messagecheck: "Special characters like ^|/~`[]{}= are not allowed"
                }
            },
            submitHandler: function (e) {
                var t = $("#contactformid").serializeArray();
                return console.log("contact data", t),
                $.ajax({
                    type: "Get",
                    url: "../cta-forms",
                    data: t,
                    success: function (e) {
                        console.log(e),
                        "done" == e && (ga('send', 'event', 'CTA buttons', 'CTA Submitted', window.location.href), $("input.modal-textinput").val(""), $("textarea.modal-textinput").val(""), $("#ctaform").modal("hide"), $("#ctacnfmmsg").modal("show"))
                    }
                }),
                !1
            }
        }),
        $("button.portfolio-but").bind("click", function (e) {
            var t = "#clients",
                a = $(t)
                    .offset()
                    .top;
            $("html").animate({
                scrollTop: a
            }, 600, function (e) {
                window.location.hash = "clients"
            }),
            e.preventDefault()
        });
        var r = $(".grid").isotope({itemSelector: ".element-item", layoutMode: "fitRows"}),
            l = {
                numberGreaterThan50: function () {
                    var e = $(this)
                        .find(".number")
                        .text();
                    return parseInt(e, 10) > 50
                },
                ium: function () {
                    var e = $(this)
                        .find(".name")
                        .text();
                    return e.match(/ium$/)
                }
            };
        $(".filters-button-group").on("click", "button", function () {
            var e = $(this).attr("data-filter");
            e = l[e] || e,
            r.isotope({filter: e})
        }),
        $(".button-group").each(function (e, t) {
            var a = $(t);
            a.on("click", "button", function () {
                a
                    .find(".is-checked")
                    .removeClass("is-checked"),
                $(this).addClass("is-checked")
            })
        })
    },
    function (e, t) {
        !function (e) {
            "use strict";
            e.fn.ael_slider = function (t) {
                function a() {
                    var t;
                    if ("0" != l.length) {
                        for (t = 0; t < l.length; t++) 
                            e(l[t]).hide();
                        n++,
                        n > l.length && (n = 1),
                        e(l[n - 1]).show()
                    }
                    if ("0" != s.length) {
                        for (t = 0; t < s.length; t++) 
                            s[t].className = s[t].className.replace(" active", "");
                        screen.width < 769 && e(".ael_indicators")
                            .parent(".ael_about_tech_name")
                            .css("transform", "translateX(-" + (100 * (n - 1) - 90) + "px)"),
                        s[n - 1].className += " active"
                    }
                }
                var n = 0,
                    o = e.extend({
                        data: null,
                        interval: null,
                        slides: 2
                    }, t),
                    i = o.data;
                e(".extlinks").hide();
                var r,
                    l = document
                        .getElementById(i[0].id)
                        .getElementsByClassName("ael_blockdata"),
                    s = document
                        .getElementById(i[0].id)
                        .getElementsByClassName("ael_indicators");
                a(),
                r = setInterval(a, o.interval),
                e(".corosol_data").hover(function () {
                    e(".extlinks").show(),
                    clearInterval(r)
                }, function () {
                    e(".extlinks").hide(),
                    r = setInterval(a, o.interval)
                }),
                e(".ael_indicators").click(function () {
                    screen.width < 769 && e(this)
                        .parent(".ael_about_tech_name")
                        .css("transform", "translateX(-" + (e(this).width() * e(this).index() - 100) + "px)"),
                    clearInterval(r),
                    n = e(this).index(),
                    a(),
                    r = setInterval(a, o.interval)
                })
            },
            e(".ael_indicators").on({
                touchstart: function () {
                    screen.width < 769 && e(".ael_about_tech_name").removeAttr("style")
                }
            })
        }(jQuery)
    },
    function (e, t) {}
]);

$(function () {
    $(".dropdown")
        .hover(function () {
            $('.dropdown-menu', this)
                .stop(true, true)
                .slideDown("800");
            $(this).toggleClass('open');
        }, function () {
            $('.dropdown-menu', this)
                .stop(true, true)
                .slideUp("800");
            $(this).toggleClass('open');
            $('.dropdown-menu', this).css('display', 'none');
        });
});
$(function () {
    if ($(".list-det-cont").length !== 0) {
        $(".list-det-cont")
            .click(function (e) {
                let state = $(this).attr("data-isactive");
                console.log(state);
                if (state === "on") {
                    window.location.href = $(this).attr("data-active-url");
                }
            });
    }

});

// if(screen.width < 769){     $('.mobile-footer').hide(); }

$(window).scroll(function () {

    $('.mobile-footer-dropdown-menu')
        .removeClass('show')
        .fadeOut('slow');
    if (screen.width < 991) {
        if ($(window).scrollTop() >  10) {            
            $('.mobile-footer').fadeIn("slow");
            // console.log($(window).scrollTop());
            if ($(window).scrollTop() >  460)//to complete a blog and show in blogs_list page

             $('.lets-talk-button').fadeIn("slow");

        }else{
            $('.mobile-footer').fadeOut("slow");

             $('.lets-talk-button').fadeOut("slow");
        }
    }
});



$('.mobile-footer-dropdown').on('click', function (e) {
    $('.mobile-footer-dropdown-menu')
        .removeClass('show')
        .fadeOut('slow');
    e.preventDefault();
   
    $(this)
        .find('.mobile-footer-dropdown-menu')
        .attr("class","mobile-footer-dropdown-menu show")
        //alert();
})

$(".mobile-footer-dropdown-menu a[data]").click(function (e) {
    //added the data attribute to the selector prevent default href action
    e.preventDefault();
    //change url
    location.href = $(this).attr("data");
});

//jquery unveil plugin for lazy loading
    $(document).ready(function() {
        $("img").unveil(200);
    });