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

},{"./features/login-page/login-page":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DasboardPage = void 0;

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
      this.appBody.innerHTML = "<h1>Hello ".concat(this.username, "!!</h1>");
    }
  }]);

  return DasboardPage;
}();

exports.DasboardPage = DasboardPage;

},{}],3:[function(require,module,exports){
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

},{"../dashboard-page/dashboard-page":2,"./login-page.ui":4}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL2FwcC5qcyIsInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkLXBhZ2UvZGFzaGJvYXJkLXBhZ2UuanMiLCJzcmMvYXBwL2ZlYXR1cmVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5qcyIsInNyYy9hcHAvZmVhdHVyZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLnVpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFFQTtJQUNNLEs7OztBQUNKLGlCQUFZLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBSyxPQUFMLEdBQWUsV0FBZjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBSSxvQkFBSixDQUFjLEtBQUssT0FBbkI7QUFDRDs7Ozs7O0FBT0gsSUFBSSxLQUFKLENBQVUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVixFQUE0QyxLQUE1Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtJQUNhLFk7OztBQUNYLHdCQUFZLE9BQVosRUFBcUIsVUFBckIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssUUFBTCxHQUFnQixVQUFVLENBQUMsUUFBM0I7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFUTtBQUNQLFdBQUssT0FBTCxDQUFhLFNBQWIsdUJBQXNDLEtBQUssUUFBM0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZIOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDYSxTOzs7QUFDWCxxQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLFlBQUw7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQU0sUUFBUSxHQUFHLEtBQUssZUFBTCxFQUFqQjtBQUNBLFdBQUssT0FBTCxDQUFhLFNBQWIsR0FBeUIsUUFBekI7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNLElBQUksR0FBRyxFQUFiO0FBQ0EsYUFBTyw2QkFBYSxJQUFiLENBQVA7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsV0FBSyxPQUFMLENBQWEsYUFBYixDQUEyQixNQUEzQixFQUFtQyxnQkFBbkMsQ0FBb0QsUUFBcEQsRUFBOEQsVUFBQSxDQUFDLEVBQUk7QUFDakUsUUFBQSxDQUFDLENBQUMsY0FBRjs7QUFDQSxZQUFNLE1BQU0sc0JBQU8sS0FBSSxDQUFDLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixPQUE5QixDQUFQLENBQVo7O0FBQ0EsWUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxVQUFBLENBQUM7QUFBQSxpQkFBSSxDQUFDLENBQUMsSUFBRixLQUFXLE9BQWY7QUFBQSxTQUFiLENBQWQ7QUFDQSxZQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBUCxDQUFZLFVBQUEsQ0FBQztBQUFBLGlCQUFJLENBQUMsQ0FBQyxJQUFGLEtBQVcsVUFBZjtBQUFBLFNBQWIsQ0FBakI7QUFDQSxRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksYUFBWixFQUEyQixLQUFLLENBQUMsS0FBakMsRUFBd0MsUUFBUSxDQUFDLEtBQWpEO0FBQ0EsWUFBSSwyQkFBSixDQUFpQixLQUFJLENBQUMsT0FBdEIsRUFBK0I7QUFBQyxVQUFBLFFBQVEsRUFBRSxLQUFLLENBQUM7QUFBakIsU0FBL0I7QUFDRCxPQVBEO0FBUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkksSUFBTSxZQUFZLEdBQUcsU0FBZixZQUFlLENBQUMsSUFBRDtBQUFBO0FBQUEsQ0FBckIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0xvZ2luUGFnZX0gZnJvbSAnLi9mZWF0dXJlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UnO1xuXG4vLyBjbGFzcyBNeUFwcFxuY2xhc3MgTXlBcHAge1xuICBjb25zdHJ1Y3RvcihodG1sRWxlbWVudCkge1xuICAgIHRoaXMuYXBwQm9keSA9IGh0bWxFbGVtZW50O1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgbmV3IExvZ2luUGFnZSh0aGlzLmFwcEJvZHkpO1xuICB9XG59XG5cblxuXG5cblxubmV3IE15QXBwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ215LWFwcCcpKS5zdGFydCgpOyIsIi8vIENsYXNzIERhc2JvYXJkUGFnZVxuZXhwb3J0IGNsYXNzIERhc2JvYXJkUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGFwcEJvZHksIGZvcm1WYWx1ZXMpIHtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5O1xuICAgIHRoaXMudXNlcm5hbWUgPSBmb3JtVmFsdWVzLnVzZXJuYW1lO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cbiAgXG4gIGluaXRVSSgpIHtcbiAgICB0aGlzLmFwcEJvZHkuaW5uZXJIVE1MID0gYDxoMT5IZWxsbyAke3RoaXMudXNlcm5hbWV9ISE8L2gxPmBcbiAgfVxufSIsImltcG9ydCB7IHBhZ2VTa2VsZXRvbiB9IGZyb20gXCIuL2xvZ2luLXBhZ2UudWlcIjtcbmltcG9ydCB7IERhc2JvYXJkUGFnZSB9IGZyb20gXCIuLi9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZVwiO1xuXG4vLyBDbGFzcyBMb2dpblBhZ2VcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2Uge1xuICBjb25zdHJ1Y3RvcihhcHBCb2R5KSB7XG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keTtcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMubG9hZEV2ZW50c1VJKCk7XG4gIH1cblxuICBpbml0VUkoKSB7XG4gICAgY29uc3Qgc2tlbGV0b24gPSB0aGlzLmdldFBhZ2VTa2VsZXRvbigpO1xuICAgIHRoaXMuYXBwQm9keS5pbm5lckhUTUwgPSBza2VsZXRvbjtcbiAgfVxuXG4gIGdldFBhZ2VTa2VsZXRvbigpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgcmV0dXJuIHBhZ2VTa2VsZXRvbihkYXRhKTtcbiAgfVxuXG4gIGxvYWRFdmVudHNVSSgpIHtcbiAgICB0aGlzLmFwcEJvZHkucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaW5wdXRzID0gWy4uLnRoaXMuYXBwQm9keS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXTtcbiAgICAgIGNvbnN0IGVtYWlsID0gaW5wdXRzLmZpbmQoaSA9PiBpLnR5cGUgPT09ICdlbWFpbCcpO1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBpbnB1dHMuZmluZChpID0+IGkudHlwZSA9PT0gJ3Bhc3N3b3JkJyk7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybSB2YWx1ZTonLCBlbWFpbC52YWx1ZSwgcGFzc3dvcmQudmFsdWUpO1xuICAgICAgbmV3IERhc2JvYXJkUGFnZSh0aGlzLmFwcEJvZHksIHt1c2VybmFtZTogZW1haWwudmFsdWV9KTtcbiAgICB9KVxuICB9XG59XG5cbiIsImV4cG9ydCBjb25zdCBwYWdlU2tlbGV0b24gPSAoZGF0YSkgPT4gIGBcbjxoMT5IZWxsbyB3b3JsZCBTdGVwIDM8L2gxPlxuPGZvcm0+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdXIgZW1haWxcIj48YnIvPlxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJ5b3VyIHBhc3N3b3JkXCI+XG4gIDxidXR0b24gY2xhc3M9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+TG9naW48L2J1dHRvbj5cbjwvZm9ybT5cbmA7Il19
