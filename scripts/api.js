(function(window) {
  "use strict";

  // Handle search.
  var search = document.querySelector("input[type=search]");

  function getAPI(version) {
    return $.getJSON("/api-viewer/versions/" + version + ".json");
  }

  getAPI("wip").then(function(resp) {
    var listApi = $("#list-api");
    var content = $(".api-content");
    var scrollable = listApi.find(".scrollable");

    var contentTemplate = combyne($(".api-content script").eq(1).html().trim());

    contentTemplate.registerFilter("realArgs", function(args) {
      return args.filter(function(arg) {
        return !arg.isSelf && !arg.isReturn;
      }).map(function(arg, val, all) {
        arg.length = all.length;
        return arg;
      });
    });

    contentTemplate.registerFilter("addComma", function(value, arg, index) {
      if (index === arg.length -1) {
        return value;
      }
      else {
        return value + ", ";
      }
    });

    contentTemplate.registerFilter("toCamelCase", function(value) {
      return value[0].toLowerCase() + value.slice(1);
    });

    resp.forEach(function(ctor) {
      // Add nav entry.
      var anchor = $("<a href='#" + ctor.jsClassName + "'><li>" + ctor.jsClassName + "</li><ul class='subnav'></ul></a>").appendTo(scrollable);

      // Add new content.
      var contentOutput = contentTemplate.render(ctor);

      content.append(contentOutput);

      ctor.functions.forEach(function(func) {
        var isPrototype = func.isPrototypeMethod ? "#" : ".";
        anchor.find(".subnav").append("<a href='#" + ctor.jsClassName + "/function/" + func.jsFunctionName + "'><li>" + ctor.jsClassName + isPrototype + func.jsFunctionName + "</li></a>");
      });
    });

    // Size the navigation bar correctly.
    scrollable.height($("html").innerHeight() - 230);

    $(window).on("resize", function() {
      scrollable.height($("html").innerHeight() - 230);
    });

    var windowHeight = $(window).height();

    // Store the url to match against.
    var elms = $(".about, .inner-content, .inner-block li, h4[id]").each(function() {
      $(this).data({
        url: "#" + (this.id || ""),
        top: $(this).offset().top
      });
    });

    var children = listApi.find("a");

    //$(document).on("scroll ready", _.throttle(function() {
    //  var doc = $(this);

    //  elms.each(function() {
    //    var pos = doc.scrollTop();
    //    var el = $(this);

    //    if (el.data("top") > pos && el.data("top") < pos + (windowHeight / 2)) {
    //      children.removeClass("active");

    //      var active = children.filter("[href='" + el.data("url") + "']");

    //      active.addClass("active").parents(elms).addClass("active");
    //    }
    //  });
    //}, 50));

    // Highlight the new code blocks.
    Prism.highlightAll();

    listApi.on("click", "a", function(ev) {
      ev.stopPropagation();
      listApi.find("a").removeClass("active");
      $(this).addClass("active");
      $(this).parents("a").addClass("active");
    });
  });
})(this);
