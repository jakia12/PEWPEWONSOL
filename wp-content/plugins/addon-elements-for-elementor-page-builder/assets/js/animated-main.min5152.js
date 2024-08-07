jQuery(document).on("elementor/render/animation-text", function (e) {
  jQuery(
    ".eae-at-animation-text-wrapper .eae-at-animation-text:first-child"
  ).addClass("is-visible");
  function a(e) {
    var i = s(e);
    if (e.parents(".eae-at-animation").hasClass("type")) {
      var o = e.parent(".eae-at-animation-text-wrapper");
      o.addClass("selected").removeClass("waiting"),
        setTimeout(function () {
          o.removeClass("selected"),
            e
              .removeClass("is-visible")
              .addClass("is-hidden")
              .children("i")
              .removeClass("in")
              .addClass("out");
        }, 500),
        setTimeout(function () {
          !(function (e, i) {
            e.parents(".eae-at-animation").hasClass("type") &&
              (t(e.find("i").eq(0), e, !1, i),
              e.addClass("is-visible").removeClass("is-hidden"));
          })(i, 150);
        }, 1300);
    } else if (e.parents(".eae-at-animation").hasClass("letters")) {
      var l = e.children("i").length >= i.children("i").length;
      !(function e(i, t, o, l) {
        i.removeClass("in").addClass("out"),
          i.is(":last-child")
            ? o &&
              setTimeout(function () {
                a(s(t));
              }, 2500)
            : setTimeout(function () {
                e(i.next(), t, o, l);
              }, l);
        if (
          i.is(":last-child") &&
          jQuery("html").hasClass("no-csstransitions")
        ) {
          var r = s(t);
          n(t, r);
        }
      })(e.find("i").eq(0), e, l, 50),
        t(i.find("i").eq(0), i, l, 50);
    } else
      n(e, i),
        setTimeout(function () {
          a(i);
        }, 2500);
  }
  function t(e, i, s, n) {
    e.addClass("in").removeClass("out"),
      e.is(":last-child")
        ? (i.parents(".eae-at-animation").hasClass("type") &&
            setTimeout(function () {
              i.parents(".eae-at-animation-text-wrapper").addClass("waiting");
            }, 200),
          s ||
            setTimeout(function () {
              a(i);
            }, 2500))
        : setTimeout(function () {
            t(e.next(), i, s, n);
          }, n);
  }
  function s(e) {
    return e.is(":last-child") ? e.parent().children().eq(0) : e.next();
  }
  function n(e, i) {
    e.removeClass("is-visible").addClass("is-hidden"),
      i.removeClass("is-hidden").addClass("is-visible");
  }
  jQuery(".eae-at-animation.letters")
    .find(".eae-at-animation-text")
    .each(function () {
      var e = jQuery(this),
        a = e.text().split(""),
        t = e.hasClass("is-visible");
      for (i in a)
        a[i] = t ? '<i class="in">' + a[i] + "</i>" : "<i>" + a[i] + "</i>";
      var s = a.join("");
      e.html(s).css("opacity", 1);
    }),
    jQuery(".eae-at-animation-text-wrapper").each(function () {
      var e = jQuery(this);
      if (!e.hasClass("type")) {
        var i = e.find(".eae-at-animation-text-wrapper .eae-at-animation-text"),
          t = 0;
        i.each(function () {
          var e = jQuery(this).width();
          e > t && (t = e);
        }),
          e.find(".eae-at-animation-text-wrapper").css("width", t);
      }
      setTimeout(function () {
        a(e.find(".is-visible").eq(0));
      }, 2500);
    });
});
