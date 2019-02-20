(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _loginPage = require("./features/login-page/login-page");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class MyApp
var MyApp =
/*#__PURE__*/
function () {
  function MyApp(htmlElement) {
    _classCallCheck(this, MyApp);

    this.appBody = htmlElement;
  }

  _createClass(MyApp, [{
    key: "start",
    value: function start() {
      new _loginPage.LoginPage(this.appBody);
    }
  }]);

  return MyApp;
}();

new MyApp(document.querySelector('my-app')).start();

},{"./features/login-page/login-page":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Say = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Say =
/*#__PURE__*/
function () {
  function Say(htmlElement) {
    _classCallCheck(this, Say);

    this.root = htmlElement;

    if (!htmlElement) {
      return alert('pas de selecteur pour instancier le timer');
    }

    this.run();
  }

  _createClass(Say, [{
    key: "run",
    value: function run() {
      var _this = this;

      this.switch();
      setInterval(function () {
        _this.switch();
      }, 10000);
    }
  }, {
    key: "switch",
    value: function _switch() {
      var h = new Date().getHours();

      switch (true) {
        case h < 10:
          this.root.innerHTML = "Bon petit-d\xE9j";
          break;

        case h < 17:
          this.root.innerHTML = "Bonjour";
          break;

        case h > 17:
          this.root.innerHTML = "Bonsoir";
          break;

        default:
          break;
      }
    }
  }]);

  return Say;
}();

exports.Say = Say;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer =
/*#__PURE__*/
function () {
  function Timer(htmlElement) {
    _classCallCheck(this, Timer);

    this.root = htmlElement;

    if (!htmlElement) {
      return alert('pas de selecteur pour instancier le timer');
    }

    this.run();
  }

  _createClass(Timer, [{
    key: "run",
    value: function run() {
      this.root.innerHTML = "".concat(new Date().toLocaleTimeString());
      this.interval();
    }
  }, {
    key: "interval",
    value: function interval() {
      var _this = this;

      setInterval(function () {
        _this.root.innerHTML = "".concat(new Date().toLocaleTimeString());
      }, 1000);
    }
  }]);

  return Timer;
}();

exports.Timer = Timer;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DasboardPage = void 0;

var _timeClass = require("../../components/timer/time-class");

var _say = require("../../components/say/say");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class DasboardPage
var DasboardPage =
/*#__PURE__*/
function () {
  function DasboardPage(appBody, formValues) {
    _classCallCheck(this, DasboardPage);

    this.appBody = appBody;
    this.username = formValues.username;
    this.initUI();
  }

  _createClass(DasboardPage, [{
    key: "initUI",
    value: function initUI() {
      this.appBody.innerHTML = "\n    <my-timer></my-timer>\n    <my-say></my-say> ".concat(this.username, "\n    ");
      new _timeClass.Timer(document.querySelector('my-timer'));
      new _say.Say(document.querySelector('my-say'));
    }
  }]);

  return DasboardPage;
}();

exports.DasboardPage = DasboardPage;

},{"../../components/say/say":2,"../../components/timer/time-class":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPage = void 0;

var _loginPage = require("./login-page.ui");

var _dashboardPage = require("../dashboard-page/dashboard-page");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class LoginPage
var LoginPage =
/*#__PURE__*/
function () {
  function LoginPage(appBody) {
    _classCallCheck(this, LoginPage);

    this.appBody = appBody;
    this.initUI();
    this.loadEventsUI();
  }

  _createClass(LoginPage, [{
    key: "initUI",
    value: function initUI() {
      var skeleton = this.getPageSkeleton();
      this.appBody.innerHTML = skeleton;
    }
  }, {
    key: "getPageSkeleton",
    value: function getPageSkeleton() {
      var data = {};
      return (0, _loginPage.pageSkeleton)(data);
    }
  }, {
    key: "loadEventsUI",
    value: function loadEventsUI() {
      var _this = this;

      this.appBody.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        var inputs = _toConsumableArray(_this.appBody.querySelectorAll('input'));

        var email = inputs.find(function (i) {
          return i.type === 'email';
        });
        var password = inputs.find(function (i) {
          return i.type === 'password';
        });
        console.log('form value:', email.value, password.value);
        new _dashboardPage.DasboardPage(_this.appBody, {
          username: email.value
        });
      });
    }
  }]);

  return LoginPage;
}();

exports.LoginPage = LoginPage;

},{"../dashboard-page/dashboard-page":4,"./login-page.ui":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageSkeleton = void 0;

var pageSkeleton = function pageSkeleton(data) {
  return "\n<h1>Hello world Step 3</h1>\n<form>\n  <input type=\"email\" placeholder=\"your email\" value=\"aa@aa.ch\"><br/>\n  <input type=\"password\" placeholder=\"your password\" value=\"xxxx\">\n  <button class=\"waves-effect waves-light btn\">Login</button>\n</form>\n";
};

exports.pageSkeleton = pageSkeleton;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL2FwcC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9zYXkvc2F5LmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3RpbWVyL3RpbWUtY2xhc3MuanMiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlLmpzIiwic3JjL2FwcC9mZWF0dXJlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuanMiLCJzcmMvYXBwL2ZlYXR1cmVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS51aS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7Ozs7O0FBRUE7SUFDTSxLOzs7QUFDSixpQkFBWSxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUssT0FBTCxHQUFlLFdBQWY7QUFDRDs7Ozs0QkFFTztBQUNOLFVBQUksb0JBQUosQ0FBYyxLQUFLLE9BQW5CO0FBQ0Q7Ozs7OztBQU9ILElBQUksS0FBSixDQUFVLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQVYsRUFBNEMsS0FBNUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqQmEsRzs7O0FBQ1QsZUFBWSxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUssSUFBTCxHQUFZLFdBQVo7O0FBQ0EsUUFBSSxDQUFDLFdBQUwsRUFBa0I7QUFDaEIsYUFBTyxLQUFLLENBQUMsMkNBQUQsQ0FBWjtBQUNEOztBQUNELFNBQUssR0FBTDtBQUNEOzs7OzBCQUVLO0FBQUE7O0FBQ0osV0FBSyxNQUFMO0FBQ0EsTUFBQSxXQUFXLENBQUMsWUFBTTtBQUNoQixRQUFBLEtBQUksQ0FBQyxNQUFMO0FBQ0QsT0FGVSxFQUVSLEtBRlEsQ0FBWDtBQUdEOzs7OEJBRVE7QUFDUCxVQUFNLENBQUMsR0FBRyxJQUFJLElBQUosR0FBVyxRQUFYLEVBQVY7O0FBQ0EsY0FBUSxJQUFSO0FBQ0ksYUFBSyxDQUFDLEdBQUcsRUFBVDtBQUNJ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QWYsWUFBZSxDQUFDLElBQUQ7QUFBQTtBQUFBLENBQXJCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gJy4vZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlJztcblxuLy8gY2xhc3MgTXlBcHBcbmNsYXNzIE15QXBwIHtcbiAgY29uc3RydWN0b3IoaHRtbEVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcEJvZHkgPSBodG1sRWxlbWVudDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIG5ldyBMb2dpblBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgfVxufVxuXG5cblxuXG5cbm5ldyBNeUFwcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdteS1hcHAnKSkuc3RhcnQoKTsiLCJleHBvcnQgY2xhc3MgU2F5IHtcbiAgICBjb25zdHJ1Y3RvcihodG1sRWxlbWVudCkge1xuICAgICAgdGhpcy5yb290ID0gaHRtbEVsZW1lbnQ7XG4gICAgICBpZiAoIWh0bWxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBhbGVydCgncGFzIGRlIHNlbGVjdGV1ciBwb3VyIGluc3RhbmNpZXIgbGUgdGltZXInKVxuICAgICAgfVxuICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG4gIFxuICAgIHJ1bigpIHtcbiAgICAgIHRoaXMuc3dpdGNoKCk7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoKCk7XG4gICAgICB9LCAxMDAwMCkgICAgXG4gICAgfVxuXG4gICAgc3dpdGNoKCkge1xuICAgICAgY29uc3QgaCA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgIGNhc2UgaCA8IDEwOlxuICAgICAgICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gYEJvbiBwZXRpdC1kw6lqYFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGggPCAxNzpcbiAgICAgICAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IGBCb25qb3VyYFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgICAgICAgIGNhc2UgaCA+IDE3OlxuICAgICAgICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gYEJvbnNvaXJgXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSIsImV4cG9ydCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKGh0bWxFbGVtZW50KSB7XG4gICAgdGhpcy5yb290ID0gaHRtbEVsZW1lbnQ7XG4gICAgaWYgKCFodG1sRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdwYXMgZGUgc2VsZWN0ZXVyIHBvdXIgaW5zdGFuY2llciBsZSB0aW1lcicpXG4gICAgfVxuICAgIHRoaXMucnVuKCk7XG4gIH1cblxuICBydW4oKSB7XG4gICAgdGhpcy5yb290LmlubmVySFRNTCA9IGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YDtcbiAgICB0aGlzLmludGVydmFsKCk7XG4gIH1cblxuICBpbnRlcnZhbCgpIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX1gXG4gICAgfSwgMTAwMCkgICAgXG4gIH1cbn0iLCJpbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RpbWVyL3RpbWUtY2xhc3NcIjtcbmltcG9ydCB7IFNheSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NheS9zYXlcIjtcblxuLy8gQ2xhc3MgRGFzYm9hcmRQYWdlXG5leHBvcnQgY2xhc3MgRGFzYm9hcmRQYWdlIHtcbiAgY29uc3RydWN0b3IoYXBwQm9keSwgZm9ybVZhbHVlcykge1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHk7XG4gICAgdGhpcy51c2VybmFtZSA9IGZvcm1WYWx1ZXMudXNlcm5hbWU7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgfVxuICBcbiAgaW5pdFVJKCkge1xuICAgIHRoaXMuYXBwQm9keS5pbm5lckhUTUwgPSBgXG4gICAgPG15LXRpbWVyPjwvbXktdGltZXI+XG4gICAgPG15LXNheT48L215LXNheT4gJHt0aGlzLnVzZXJuYW1lfVxuICAgIGA7XG4gICAgbmV3IFRpbWVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ215LXRpbWVyJykpO1xuICAgIG5ldyBTYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbXktc2F5JykpO1xuICB9XG59IiwiaW1wb3J0IHsgcGFnZVNrZWxldG9uIH0gZnJvbSBcIi4vbG9naW4tcGFnZS51aVwiO1xuaW1wb3J0IHsgRGFzYm9hcmRQYWdlIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlXCI7XG5cbi8vIENsYXNzIExvZ2luUGFnZVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGFwcEJvZHkpIHtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5O1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5sb2FkRXZlbnRzVUkoKTtcbiAgfVxuXG4gIGluaXRVSSgpIHtcbiAgICBjb25zdCBza2VsZXRvbiA9IHRoaXMuZ2V0UGFnZVNrZWxldG9uKCk7XG4gICAgdGhpcy5hcHBCb2R5LmlubmVySFRNTCA9IHNrZWxldG9uO1xuICB9XG5cbiAgZ2V0UGFnZVNrZWxldG9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICByZXR1cm4gcGFnZVNrZWxldG9uKGRhdGEpO1xuICB9XG5cbiAgbG9hZEV2ZW50c1VJKCkge1xuICAgIHRoaXMuYXBwQm9keS5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpbnB1dHMgPSBbLi4udGhpcy5hcHBCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JyldO1xuICAgICAgY29uc3QgZW1haWwgPSBpbnB1dHMuZmluZChpID0+IGkudHlwZSA9PT0gJ2VtYWlsJyk7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGlucHV0cy5maW5kKGkgPT4gaS50eXBlID09PSAncGFzc3dvcmQnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtIHZhbHVlOicsIGVtYWlsLnZhbHVlLCBwYXNzd29yZC52YWx1ZSk7XG4gICAgICBuZXcgRGFzYm9hcmRQYWdlKHRoaXMuYXBwQm9keSwge3VzZXJuYW1lOiBlbWFpbC52YWx1ZX0pO1xuICAgIH0pXG4gIH1cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHBhZ2VTa2VsZXRvbiA9IChkYXRhKSA9PiAgYFxuPGgxPkhlbGxvIHdvcmxkIFN0ZXAgMzwvaDE+XG48Zm9ybT5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwieW91ciBlbWFpbFwiIHZhbHVlPVwiYWFAYWEuY2hcIj48YnIvPlxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJ5b3VyIHBhc3N3b3JkXCIgdmFsdWU9XCJ4eHh4XCI+XG4gIDxidXR0b24gY2xhc3M9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+TG9naW48L2J1dHRvbj5cbjwvZm9ybT5cbmA7Il19
