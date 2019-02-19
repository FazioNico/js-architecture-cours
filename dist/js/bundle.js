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

},{"./features/login-page/login-page":4}],2:[function(require,module,exports){
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
      var _this = this;

      setInterval(function () {
        var h = new Date().getHours();

        switch (true) {
          case h < 10:
            _this.root.innerHTML = "Bon petit-d\xE9j!! Il est ".concat(new Date().toLocaleTimeString());
            break;

          case h < 17:
            _this.root.innerHTML = "Bonjour il est ".concat(new Date().toLocaleTimeString());
            break;

          case h > 17:
            _this.root.innerHTML = "Bonsoir il est ".concat(new Date().toLocaleTimeString());
            break;

          default:
            break;
        }
      }, 100);
    }
  }]);

  return Timer;
}();

exports.Timer = Timer;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DasboardPage = void 0;

var _timeClass = require("../../components/timer/time-class");

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
      this.appBody.innerHTML = "\n    <h1>Hello ".concat(this.username, "!!</h1>\n    <my-timer></my-timer>\n    ");
      new _timeClass.Timer(document.querySelector('my-timer'));
    }
  }]);

  return DasboardPage;
}();

exports.DasboardPage = DasboardPage;

},{"../../components/timer/time-class":2}],4:[function(require,module,exports){
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

},{"../dashboard-page/dashboard-page":3,"./login-page.ui":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageSkeleton = void 0;

var pageSkeleton = function pageSkeleton(data) {
  return "\n<h1>Hello world Step 3</h1>\n<form>\n  <input type=\"email\" placeholder=\"your email\"><br/>\n  <input type=\"password\" placeholder=\"your password\">\n  <button class=\"waves-effect waves-light btn\">Login</button>\n</form>\n";
};

exports.pageSkeleton = pageSkeleton;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL2FwcC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy90aW1lci90aW1lLWNsYXNzLmpzIiwic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5qcyIsInNyYy9hcHAvZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmpzIiwic3JjL2FwcC9mZWF0dXJlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UudWkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBO0lBQ00sSzs7O0FBQ0osaUJBQVksV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLLE9BQUwsR0FBZSxXQUFmO0FBQ0Q7Ozs7NEJBRU87QUFDTixVQUFJLG9CQUFKLENBQWMsS0FBSyxPQUFuQjtBQUNEOzs7Ozs7QUFPSCxJQUFJLEtBQUosQ0FBVSxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFWLEVBQTRDLEtBQTVDOzs7Ozs7Ozs7Ozs7Ozs7O0lDakJhLEs7OztBQUNYLGlCQUFZLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBSyxJQUFMLEdBQVksV0FBWjs7QUFDQSxRQUFJLENBQUMsV0FBTCxFQUFrQjtBQUNoQixhQUFPLEtBQUssQ0FBQywyQ0FBRCxDQUFaO0FBQ0Q7O0FBQ0QsU0FBSyxHQUFMO0FBQ0Q7Ozs7MEJBRUs7QUFBQTs7QUFDSixNQUFBLFdBQVcsQ0FBQyxZQUFNO0FBQ2hCLFlBQU0sQ0FBQyxHQUFHLElBQUksSUFBSixHQUFXLFFBQVgsRUFBVjs7QUFDQSxnQkFBUSxJQUFSO0FBQ0ksZUFBSyxDQUFDLEdBQUcsRUFBVDtBQUNJLFlBQUEsS0FBSSxDQUFDLElBQUwsQ0FBVSxTQUFWLHVDQUFnRCxJQUFJLElBQUosR0FBVyxrQkFBWCxFQUFoRDtBQUNBOztBQUNKLGVBQUssQ0FBQyxHQUFHLEVBQVQ7QUFDSSxZQUFBLEtBQUksQ0FBQyxJQUFMLENBQVUsU0FBViw0QkFBd0MsSUFBSSxJQUFKLEdBQVcsa0JBQVgsRUFBeEM7QUFDQTs7QUFFSixlQUFLLENBQUMsR0FBRyxFQUFUO0FBQ0ksWUFBQSxLQUFJLENBQUMsSUFBTCxDQUFVLFNBQVYsNEJBQXdDLElBQUksSUFBSixHQUFXLGtCQUFYLEVBQXhDO0FBQ0E7O0FBQ0o7QUFDSTtBQVpSO0FBY0QsT0FoQlUsRUFnQlIsR0FoQlEsQ0FBWDtBQWlCRDs7Ozs7Ozs7Ozs7Ozs7OztBQzNCSDs7Ozs7Ozs7QUFFQTtJQUNhLFk7OztBQUNYLHdCQUFZLE9BQVosRUFBcUIsVUFBckIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssUUFBTCxHQUFnQixVQUFVLENBQUMsUUFBM0I7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFUTtBQUNQLFdBQUssT0FBTCxDQUFhLFNBQWIsNkJBQ1ksS0FBSyxRQURqQjtBQUlBLFVBQUksZ0JBQUosQ0FBVSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUFWO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkg7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUNhLFM7OztBQUNYLHFCQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssWUFBTDtBQUNEOzs7OzZCQUVRO0FBQ1AsVUFBTSxRQUFRLEdBQUcsS0FBSyxlQUFMLEVBQWpCO0FBQ0EsV0FBSyxPQUFMLENBQWEsU0FBYixHQUF5QixRQUF6QjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU0sSUFBSSxHQUFHLEVBQWI7QUFDQSxhQUFPLDZCQUFhLElBQWIsQ0FBUDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixXQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLE1BQTNCLEVBQW1DLGdCQUFuQyxDQUFvRCxRQUFwRCxFQUE4RCxVQUFBLENBQUMsRUFBSTtBQUNqRSxRQUFBLENBQUMsQ0FBQyxjQUFGOztBQUNBLFlBQU0sTUFBTSxzQkFBTyxLQUFJLENBQUMsT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLENBQVAsQ0FBWjs7QUFDQSxZQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBUCxDQUFZLFVBQUEsQ0FBQztBQUFBLGlCQUFJLENBQUMsQ0FBQyxJQUFGLEtBQVcsT0FBZjtBQUFBLFNBQWIsQ0FBZDtBQUNBLFlBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksVUFBQSxDQUFDO0FBQUEsaUJBQUksQ0FBQyxDQUFDLElBQUYsS0FBVyxVQUFmO0FBQUEsU0FBYixDQUFqQjtBQUNBLFFBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLEtBQUssQ0FBQyxLQUFqQyxFQUF3QyxRQUFRLENBQUMsS0FBakQ7QUFDQSxZQUFJLDJCQUFKLENBQWlCLEtBQUksQ0FBQyxPQUF0QixFQUErQjtBQUFDLFVBQUEsUUFBUSxFQUFFLEtBQUssQ0FBQztBQUFqQixTQUEvQjtBQUNELE9BUEQ7QUFRRDs7Ozs7Ozs7Ozs7Ozs7OztBQzlCSSxJQUFNLFlBQVksR0FBRyxTQUFmLFlBQWUsQ0FBQyxJQUFEO0FBQUE7QUFBQSxDQUFyQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL2ZlYXR1cmVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZSc7XG5cbi8vIGNsYXNzIE15QXBwXG5jbGFzcyBNeUFwcCB7XG4gIGNvbnN0cnVjdG9yKGh0bWxFbGVtZW50KSB7XG4gICAgdGhpcy5hcHBCb2R5ID0gaHRtbEVsZW1lbnQ7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBuZXcgTG9naW5QYWdlKHRoaXMuYXBwQm9keSk7XG4gIH1cbn1cblxuXG5cblxuXG5uZXcgTXlBcHAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbXktYXBwJykpLnN0YXJ0KCk7IiwiZXhwb3J0IGNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoaHRtbEVsZW1lbnQpIHtcbiAgICB0aGlzLnJvb3QgPSBodG1sRWxlbWVudDtcbiAgICBpZiAoIWh0bWxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ3BhcyBkZSBzZWxlY3RldXIgcG91ciBpbnN0YW5jaWVyIGxlIHRpbWVyJylcbiAgICB9XG4gICAgdGhpcy5ydW4oKTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBoID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgY2FzZSBoIDwgMTA6XG4gICAgICAgICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBgQm9uIHBldGl0LWTDqWohISBJbCBlc3QgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfWBcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBoIDwgMTc6XG4gICAgICAgICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBgQm9uam91ciBpbCBlc3QgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfWBcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgICAgICBjYXNlIGggPiAxNzpcbiAgICAgICAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IGBCb25zb2lyIGlsIGVzdCAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCAxMDApICAgIFxuICB9XG59IiwiaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90aW1lci90aW1lLWNsYXNzXCI7XG5cbi8vIENsYXNzIERhc2JvYXJkUGFnZVxuZXhwb3J0IGNsYXNzIERhc2JvYXJkUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGFwcEJvZHksIGZvcm1WYWx1ZXMpIHtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5O1xuICAgIHRoaXMudXNlcm5hbWUgPSBmb3JtVmFsdWVzLnVzZXJuYW1lO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cbiAgXG4gIGluaXRVSSgpIHtcbiAgICB0aGlzLmFwcEJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5IZWxsbyAke3RoaXMudXNlcm5hbWV9ISE8L2gxPlxuICAgIDxteS10aW1lcj48L215LXRpbWVyPlxuICAgIGA7XG4gICAgbmV3IFRpbWVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ215LXRpbWVyJykpO1xuICB9XG59IiwiaW1wb3J0IHsgcGFnZVNrZWxldG9uIH0gZnJvbSBcIi4vbG9naW4tcGFnZS51aVwiO1xuaW1wb3J0IHsgRGFzYm9hcmRQYWdlIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlXCI7XG5cbi8vIENsYXNzIExvZ2luUGFnZVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGFwcEJvZHkpIHtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5O1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5sb2FkRXZlbnRzVUkoKTtcbiAgfVxuXG4gIGluaXRVSSgpIHtcbiAgICBjb25zdCBza2VsZXRvbiA9IHRoaXMuZ2V0UGFnZVNrZWxldG9uKCk7XG4gICAgdGhpcy5hcHBCb2R5LmlubmVySFRNTCA9IHNrZWxldG9uO1xuICB9XG5cbiAgZ2V0UGFnZVNrZWxldG9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICByZXR1cm4gcGFnZVNrZWxldG9uKGRhdGEpO1xuICB9XG5cbiAgbG9hZEV2ZW50c1VJKCkge1xuICAgIHRoaXMuYXBwQm9keS5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpbnB1dHMgPSBbLi4udGhpcy5hcHBCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JyldO1xuICAgICAgY29uc3QgZW1haWwgPSBpbnB1dHMuZmluZChpID0+IGkudHlwZSA9PT0gJ2VtYWlsJyk7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGlucHV0cy5maW5kKGkgPT4gaS50eXBlID09PSAncGFzc3dvcmQnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtIHZhbHVlOicsIGVtYWlsLnZhbHVlLCBwYXNzd29yZC52YWx1ZSk7XG4gICAgICBuZXcgRGFzYm9hcmRQYWdlKHRoaXMuYXBwQm9keSwge3VzZXJuYW1lOiBlbWFpbC52YWx1ZX0pO1xuICAgIH0pXG4gIH1cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHBhZ2VTa2VsZXRvbiA9IChkYXRhKSA9PiAgYFxuPGgxPkhlbGxvIHdvcmxkIFN0ZXAgMzwvaDE+XG48Zm9ybT5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwieW91ciBlbWFpbFwiPjxici8+XG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInlvdXIgcGFzc3dvcmRcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5Mb2dpbjwvYnV0dG9uPlxuPC9mb3JtPlxuYDsiXX0=
