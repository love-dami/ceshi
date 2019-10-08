import _ from "lodash";
import "@m/module/appShare/appShare";

//下拉刷新页面
var _refresh = (function() {
  $("body").dropload({
    scrollArea: window,
    loadUpFn: function() {
      setTimeout(function() {
        window.location.href = window.location.href;
      }, 500);
    }
  });
})();
var _wechat = (function() {
  var iswechat = navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
    ? true
    : false;
  if (!iswechat) {
    $(".tglive,#Mtext,#Msolider").show();
  }
})();
//返回顶部
var _scrollTop = (function() {
  var box = $("#totop");
  $(document).scroll(
    _.debounce(function() {
      var distance = parseInt(document.body.scrollTop);
      if (distance < 20) {
        box.css("opacity", "0");
      } else {
        box.css("opacity", "0.7");
      }
    }, 300)
  );
  box.on("click", function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})();

var fixation = (function(el) {
  el = typeof el === "object" ? el : $(el);
  if (!el) return;
  var clientHeight = $(window)[0].innerHeight;
  if (clientHeight < el.height()) {
    el.css({ height: (clientHeight * 90) / 100 });
  }
  var nScrollLeft = el.offset().left;
  var nOffsetTop = el.offset().top;
  var boxHeight = el.height();
  var marginTop = el.position().top;
  $(window).scroll(function() {
    var nScrollTop = $(this).scrollTop();
    var total = $("body")[0].scrollHeight - $("footer").height() - 150;
    var metabolic = nScrollTop + boxHeight;

    // nScrollTop > nOffsetTop || metabolic < total
    if (nScrollTop > nOffsetTop) {
      el.css({ position: "fixed", top: "0" });
      el.addClass("shade");
    }
    if (nScrollTop < nOffsetTop) {
      el.css({ position: "absolute", top: marginTop });
      el.removeClass("shade");
    }
    // if (metabolic > total) {
    //     el.css({ 'position': 'fixed', 'top': -(metabolic - total)})
    // }
  });
})("#Mnav");

var _navigation = (function() {
  var container = $("#Mnav"),
    li = container.find(".nav-item");
  var getName = function(path) {
    var paths = [
      { key: "cpjx", name: "操盘精选" },
      { key: "qwbd", name: "全网必读" }
    ];
    var name = "";
    _.forEach(paths, item => {
      if (path.indexOf(item.key) != -1) {
        name = item.name;
      }
    });
    return name;
  };

  return {
    select: function() {
      //优先使用指定的值, 再从地址中识别
      var name = getName(location.href) || "首页";
      li.each(function(i) {
        if ($(this).text() == name) {
          $(this).addClass("on");
        }
      });
    }
  };
})();

module.exports = _navigation;
