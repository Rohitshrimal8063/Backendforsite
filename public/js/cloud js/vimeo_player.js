/*! @vimeo/player v2.0.2 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e.Vimeo = e.Vimeo || {}), (e.Vimeo.Player = t()));
})(this, function () {
  "use strict";
  function e(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
  }
  function t(e, t, n) {
    var r = T.get(e.element) || {};
    t in r || (r[t] = []), r[t].push(n), T.set(e.element, r);
  }
  function n(e, t) {
    var n = T.get(e.element) || {};
    return n[t] || [];
  }
  function r(e, t, n) {
    var r = T.get(e.element) || {};
    if (!r[t]) return !0;
    if (!n) return (r[t] = []), T.set(e.element, r), !0;
    var i = r[t].indexOf(n);
    return (
      i !== -1 && r[t].splice(i, 1),
      T.set(e.element, r),
      r[t] && 0 === r[t].length
    );
  }
  function i(e, t) {
    var i = n(e, t);
    if (i.length < 1) return !1;
    var o = i.shift();
    return r(e, t, o), o;
  }
  function o(e, t) {
    var n = T.get(e);
    T.set(t, n), T.delete(e);
  }
  function u(e, t) {
    return 0 === e.indexOf(t.toLowerCase())
      ? e
      : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1);
  }
  function a(e) {
    return e instanceof window.HTMLElement;
  }
  function s(e) {
    return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
  }
  function c(e) {
    return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e);
  }
  function f() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.id,
      n = e.url,
      r = t || n;
    if (!r)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (s(r)) return "https://vimeo.com/" + r;
    if (c(r)) return r.replace("http:", "https:");
    if (t) throw new TypeError("â€œ" + t + "â€ is not a valid video id.");
    throw new TypeError("â€œ" + r + "â€ is not a vimeo.com url.");
  }
  function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return _.reduce(function (t, n) {
      var r = e.getAttribute("data-vimeo-" + n);
      return (r || "" === r) && (t[n] = "" === r ? 1 : r), t;
    }, t);
  }
  function h(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new Promise(function (n, r) {
      if (!c(e)) throw new TypeError("â€œ" + e + "â€ is not a vimeo.com url.");
      var i = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(e);
      for (var o in t)
        t.hasOwnProperty(o) && (i += "&" + o + "=" + encodeURIComponent(t[o]));
      var u =
        "XDomainRequest" in window
          ? new XDomainRequest()
          : new XMLHttpRequest();
      u.open("GET", i, !0),
        (u.onload = function () {
          if (404 === u.status)
            return void r(new Error("â€œ" + e + "â€ was not found."));
          if (403 === u.status)
            return void r(new Error("â€œ" + e + "â€ is not embeddable."));
          try {
            var t = JSON.parse(u.responseText);
            n(t);
          } catch (e) {
            r(e);
          }
        }),
        (u.onerror = function () {
          var e = u.status ? " (" + u.status + ")" : "";
          r(
            new Error(
              "There was an error fetching the embed code from Vimeo" + e + "."
            )
          );
        }),
        u.send();
    });
  }
  function d(e, t) {
    var n = e.html;
    if (!t) throw new TypeError("An element must be provided");
    if (null !== t.getAttribute("data-vimeo-initialized"))
      return t.querySelector("iframe");
    var r = document.createElement("div");
    return (
      (r.innerHTML = n),
      t.appendChild(r.firstChild),
      t.setAttribute("data-vimeo-initialized", "true"),
      t.querySelector("iframe")
    );
  }
  function v() {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : document,
      t = [].slice.call(
        e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      n = function (e) {
        "console" in window &&
          console.error &&
          console.error("There was an error creating an embed: " + e);
      };
    t.forEach(function (e) {
      try {
        if (null !== e.getAttribute("data-vimeo-defer")) return;
        var t = l(e),
          r = f(t);
        h(r, t)
          .then(function (t) {
            return d(t, e);
          })
          .catch(n);
      } catch (e) {
        n(e);
      }
    });
  }
  function p(e) {
    return "string" == typeof e && (e = JSON.parse(e)), e;
  }
  function y(e, t, n) {
    if (e.element.contentWindow && e.element.contentWindow.postMessage) {
      var r = { method: t };
      void 0 !== n && (r.value = n);
      var i = parseFloat(
        navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
      );
      i >= 8 && i < 10 && (r = JSON.stringify(r)),
        e.element.contentWindow.postMessage(r, e.origin);
    }
  }
  function m(e, t) {
    t = p(t);
    var o = [],
      u = void 0;
    if (t.event) {
      if ("error" === t.event) {
        var a = n(e, t.data.method);
        a.forEach(function (n) {
          var i = new Error(t.data.message);
          (i.name = t.data.name), n.reject(i), r(e, t.data.method, n);
        });
      }
      (o = n(e, "event:" + t.event)), (u = t.data);
    } else if (t.method) {
      var s = i(e, t.method);
      s && (o.push(s), (u = t.value));
    }
    o.forEach(function (t) {
      try {
        if ("function" == typeof t) return void t.call(e, u);
        t.resolve(u);
      } catch (e) {}
    });
  }
  function g(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  var w = "undefined" != typeof Array.prototype.indexOf,
    k = "undefined" != typeof window.postMessage;
  if (!w || !k)
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var b =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    E =
      (e(function (e, t) {
        !(function (e) {
          function t(e, t) {
            function r(e) {
              return this && this.constructor === r
                ? ((this._keys = []),
                  (this._values = []),
                  (this._itp = []),
                  (this.objectOnly = t),
                  void (e && n.call(this, e)))
                : new r(e);
            }
            return (
              t || w(e, "size", { get: y }),
              (e.constructor = r),
              (r.prototype = e),
              r
            );
          }
          function n(e) {
            this.add
              ? e.forEach(this.add, this)
              : e.forEach(function (e) {
                  this.set(e[0], e[1]);
                }, this);
          }
          function r(e) {
            return (
              this.has(e) &&
                (this._keys.splice(g, 1),
                this._values.splice(g, 1),
                this._itp.forEach(function (e) {
                  g < e[0] && e[0]--;
                })),
              -1 < g
            );
          }
          function i(e) {
            return this.has(e) ? this._values[g] : void 0;
          }
          function o(e, t) {
            if (this.objectOnly && t !== Object(t))
              throw new TypeError("Invalid value used as weak collection key");
            if (t != t || 0 === t) for (g = e.length; g-- && !k(e[g], t); );
            else g = e.indexOf(t);
            return -1 < g;
          }
          function u(e) {
            return o.call(this, this._values, e);
          }
          function a(e) {
            return o.call(this, this._keys, e);
          }
          function s(e, t) {
            return (
              this.has(e)
                ? (this._values[g] = t)
                : (this._values[this._keys.push(e) - 1] = t),
              this
            );
          }
          function c(e) {
            return this.has(e) || this._values.push(e), this;
          }
          function f() {
            (this._keys || 0).length = this._values.length = 0;
          }
          function l() {
            return p(this._itp, this._keys);
          }
          function h() {
            return p(this._itp, this._values);
          }
          function d() {
            return p(this._itp, this._keys, this._values);
          }
          function v() {
            return p(this._itp, this._values, this._values);
          }
          function p(e, t, n) {
            var r = [0],
              i = !1;
            return (
              e.push(r),
              {
                next: function () {
                  var o,
                    u = r[0];
                  return (
                    !i && u < t.length
                      ? ((o = n ? [t[u], n[u]] : t[u]), r[0]++)
                      : ((i = !0), e.splice(e.indexOf(r), 1)),
                    { done: i, value: o }
                  );
                },
              }
            );
          }
          function y() {
            return this._values.length;
          }
          function m(e, t) {
            for (var n = this.entries(); ; ) {
              var r = n.next();
              if (r.done) break;
              e.call(t, r.value[1], r.value[0], this);
            }
          }
          var g,
            w = Object.defineProperty,
            k = function (e, t) {
              return e === t || (e !== e && t !== t);
            };
          "undefined" == typeof WeakMap &&
            (e.WeakMap = t(
              { delete: r, clear: f, get: i, has: a, set: s },
              !0
            )),
            ("undefined" != typeof Map &&
              "function" == typeof new Map().values &&
              new Map().values().next) ||
              (e.Map = t({
                delete: r,
                has: a,
                get: i,
                set: s,
                keys: l,
                values: h,
                entries: d,
                forEach: m,
                clear: f,
              })),
            ("undefined" != typeof Set &&
              "function" == typeof new Set().values &&
              new Set().values().next) ||
              (e.Set = t({
                has: u,
                add: c,
                delete: r,
                clear: f,
                keys: h,
                values: h,
                entries: v,
                forEach: m,
              })),
            "undefined" == typeof WeakSet &&
              (e.WeakSet = t({ delete: r, add: c, clear: f, has: u }, !0));
        })("undefined" != typeof b ? b : window);
      }),
      e(function (e) {
        var t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
        !(function (t, n, r) {
          (n[t] = n[t] || r()), e.exports && (e.exports = n[t]);
        })("Promise", "undefined" != typeof b ? b : b, function () {
          function e(e, t) {
            d.add(e, t), h || (h = p(d.drain));
          }
          function n(e) {
            var n,
              r = "undefined" == typeof e ? "undefined" : t(e);
            return (
              null == e || ("object" != r && "function" != r) || (n = e.then),
              "function" == typeof n && n
            );
          }
          function r() {
            for (var e = 0; e < this.chain.length; e++)
              i(
                this,
                1 === this.state
                  ? this.chain[e].success
                  : this.chain[e].failure,
                this.chain[e]
              );
            this.chain.length = 0;
          }
          function i(e, t, r) {
            var i, o;
            try {
              t === !1
                ? r.reject(e.msg)
                : ((i = t === !0 ? e.msg : t.call(void 0, e.msg)),
                  i === r.promise
                    ? r.reject(TypeError("Promise-chain cycle"))
                    : (o = n(i))
                    ? o.call(i, r.resolve, r.reject)
                    : r.resolve(i));
            } catch (e) {
              r.reject(e);
            }
          }
          function o(t) {
            var i,
              a = this;
            if (!a.triggered) {
              (a.triggered = !0), a.def && (a = a.def);
              try {
                (i = n(t))
                  ? e(function () {
                      var e = new s(a);
                      try {
                        i.call(
                          t,
                          function () {
                            o.apply(e, arguments);
                          },
                          function () {
                            u.apply(e, arguments);
                          }
                        );
                      } catch (t) {
                        u.call(e, t);
                      }
                    })
                  : ((a.msg = t), (a.state = 1), a.chain.length > 0 && e(r, a));
              } catch (e) {
                u.call(new s(a), e);
              }
            }
          }
          function u(t) {
            var n = this;
            n.triggered ||
              ((n.triggered = !0),
              n.def && (n = n.def),
              (n.msg = t),
              (n.state = 2),
              n.chain.length > 0 && e(r, n));
          }
          function a(e, t, n, r) {
            for (var i = 0; i < t.length; i++)
              !(function (i) {
                e.resolve(t[i]).then(function (e) {
                  n(i, e);
                }, r);
              })(i);
          }
          function s(e) {
            (this.def = e), (this.triggered = !1);
          }
          function c(e) {
            (this.promise = e),
              (this.state = 0),
              (this.triggered = !1),
              (this.chain = []),
              (this.msg = void 0);
          }
          function f(t) {
            if ("function" != typeof t) throw TypeError("Not a function");
            if (0 !== this.__NPO__) throw TypeError("Not a promise");
            this.__NPO__ = 1;
            var n = new c(this);
            (this.then = function (t, i) {
              var o = {
                success: "function" != typeof t || t,
                failure: "function" == typeof i && i,
              };
              return (
                (o.promise = new this.constructor(function (e, t) {
                  if ("function" != typeof e || "function" != typeof t)
                    throw TypeError("Not a function");
                  (o.resolve = e), (o.reject = t);
                })),
                n.chain.push(o),
                0 !== n.state && e(r, n),
                o.promise
              );
            }),
              (this.catch = function (e) {
                return this.then(void 0, e);
              });
            try {
              t.call(
                void 0,
                function (e) {
                  o.call(n, e);
                },
                function (e) {
                  u.call(n, e);
                }
              );
            } catch (e) {
              u.call(n, e);
            }
          }
          var l,
            h,
            d,
            v = Object.prototype.toString,
            p =
              "undefined" != typeof setImmediate
                ? function (e) {
                    return setImmediate(e);
                  }
                : setTimeout;
          try {
            Object.defineProperty({}, "x", {}),
              (l = function (e, t, n, r) {
                return Object.defineProperty(e, t, {
                  value: n,
                  writable: !0,
                  configurable: r !== !1,
                });
              });
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n), e;
            };
          }
          d = (function () {
            function e(e, t) {
              (this.fn = e), (this.self = t), (this.next = void 0);
            }
            var t, n, r;
            return {
              add: function (i, o) {
                (r = new e(i, o)),
                  n ? (n.next = r) : (t = r),
                  (n = r),
                  (r = void 0);
              },
              drain: function () {
                var e = t;
                for (t = n = h = void 0; e; ) e.fn.call(e.self), (e = e.next);
              },
            };
          })();
          var y = l({}, "constructor", f, !1);
          return (
            (f.prototype = y),
            l(y, "__NPO__", 0, !1),
            l(f, "resolve", function (e) {
              var n = this;
              return e &&
                "object" == ("undefined" == typeof e ? "undefined" : t(e)) &&
                1 === e.__NPO__
                ? e
                : new n(function (t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                      throw TypeError("Not a function");
                    t(e);
                  });
            }),
            l(f, "reject", function (e) {
              return new this(function (t, n) {
                if ("function" != typeof t || "function" != typeof n)
                  throw TypeError("Not a function");
                n(e);
              });
            }),
            l(f, "all", function (e) {
              var t = this;
              return "[object Array]" != v.call(e)
                ? t.reject(TypeError("Not an array"))
                : 0 === e.length
                ? t.resolve([])
                : new t(function (n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                      throw TypeError("Not a function");
                    var i = e.length,
                      o = Array(i),
                      u = 0;
                    a(
                      t,
                      e,
                      function (e, t) {
                        (o[e] = t), ++u === i && n(o);
                      },
                      r
                    );
                  });
            }),
            l(f, "race", function (e) {
              var t = this;
              return "[object Array]" != v.call(e)
                ? t.reject(TypeError("Not an array"))
                : new t(function (n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                      throw TypeError("Not a function");
                    a(
                      t,
                      e,
                      function (e, t) {
                        n(t);
                      },
                      r
                    );
                  });
            }),
            f
          );
        });
      })),
    T = new WeakMap(),
    _ = [
      "id",
      "url",
      "width",
      "maxwidth",
      "height",
      "maxheight",
      "portrait",
      "title",
      "byline",
      "color",
      "autoplay",
      "autopause",
      "loop",
      "responsive",
    ],
    j = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    M = new WeakMap(),
    x = new WeakMap(),
    Player = (function () {
      function Player(e) {
        var t = this,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (g(this, Player),
          window.jQuery &&
            e instanceof jQuery &&
            (e.length > 1 &&
              window.console &&
              console.warn &&
              console.warn(
                "A jQuery object with multiple elements was passed, using the first element."
              ),
            (e = e[0])),
          "string" == typeof e && (e = document.getElementById(e)),
          !a(e))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if ("IFRAME" !== e.nodeName) {
          var r = e.querySelector("iframe");
          r && (e = r);
        }
        if ("IFRAME" === e.nodeName && !c(e.getAttribute("src") || ""))
          throw new Error("The player element passed isnâ€™t a Vimeo embed.");
        if (M.has(e)) return M.get(e);
        (this.element = e), (this.origin = "*");
        var i = new E(function (r, i) {
          var u = function (e) {
            if (c(e.origin) && t.element.contentWindow === e.source) {
              "*" === t.origin && (t.origin = e.origin);
              var n = p(e.data),
                i = "event" in n && "ready" === n.event,
                o = "method" in n && "ping" === n.method;
              return i || o
                ? (t.element.setAttribute("data-ready", "true"), void r())
                : void m(t, n);
            }
          };
          if (
            (window.addEventListener
              ? window.addEventListener("message", u, !1)
              : window.attachEvent && window.attachEvent("onmessage", u),
            "IFRAME" !== t.element.nodeName)
          ) {
            var a = l(e, n),
              s = f(a);
            h(s, a)
              .then(function (n) {
                var r = d(n, e);
                return (t.element = r), o(e, r), M.set(t.element, t), n;
              })
              .catch(function (e) {
                return i(e);
              });
          }
        });
        return (
          x.set(this, i),
          M.set(this.element, this),
          "IFRAME" === this.element.nodeName && y(this, "ping"),
          this
        );
      }
      return (
        j(Player, [
          {
            key: "callMethod",
            value: function (e) {
              var n = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return new E(function (i, o) {
                return n.ready().then(function () {
                  t(n, e, { resolve: i, reject: o }), y(n, e, r);
                });
              });
            },
          },
          {
            key: "get",
            value: function (e) {
              var n = this;
              return new E(function (r, i) {
                return (
                  (e = u(e, "get")),
                  n.ready().then(function () {
                    t(n, e, { resolve: r, reject: i }), y(n, e);
                  })
                );
              });
            },
          },
          {
            key: "set",
            value: function (e, n) {
              var r = this;
              return E.resolve(n).then(function (n) {
                if (((e = u(e, "set")), void 0 === n || null === n))
                  throw new TypeError("There must be a value to set.");
                return r.ready().then(function () {
                  return new E(function (i, o) {
                    t(r, e, { resolve: i, reject: o }), y(r, e, n);
                  });
                });
              });
            },
          },
          {
            key: "on",
            value: function (e, r) {
              if (!e) throw new TypeError("You must pass an event name.");
              if (!r) throw new TypeError("You must pass a callback function.");
              if ("function" != typeof r)
                throw new TypeError("The callback must be a function.");
              var i = n(this, "event:" + e);
              0 === i.length &&
                this.callMethod("addEventListener", e).catch(function () {}),
                t(this, "event:" + e, r);
            },
          },
          {
            key: "off",
            value: function (e, t) {
              if (!e) throw new TypeError("You must pass an event name.");
              if (t && "function" != typeof t)
                throw new TypeError("The callback must be a function.");
              var n = r(this, "event:" + e, t);
              n &&
                this.callMethod("removeEventListener", e).catch(function (
                  e
                ) {});
            },
          },
          {
            key: "loadVideo",
            value: function (e) {
              return this.callMethod("loadVideo", e);
            },
          },
          {
            key: "ready",
            value: function () {
              var e = x.get(this);
              return E.resolve(e);
            },
          },
          {
            key: "addCuePoint",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return this.callMethod("addCuePoint", { time: e, data: t });
            },
          },
          {
            key: "removeCuePoint",
            value: function (e) {
              return this.callMethod("removeCuePoint", e);
            },
          },
          {
            key: "enableTextTrack",
            value: function (e, t) {
              if (!e) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: e,
                kind: t,
              });
            },
          },
          {
            key: "disableTextTrack",
            value: function () {
              return this.callMethod("disableTextTrack");
            },
          },
          {
            key: "pause",
            value: function () {
              return this.callMethod("pause");
            },
          },
          {
            key: "play",
            value: function () {
              return this.callMethod("play");
            },
          },
          {
            key: "unload",
            value: function () {
              return this.callMethod("unload");
            },
          },
          {
            key: "getAutopause",
            value: function () {
              return this.get("autopause");
            },
          },
          {
            key: "setAutopause",
            value: function (e) {
              return this.set("autopause", e);
            },
          },
          {
            key: "getColor",
            value: function () {
              return this.get("color");
            },
          },
          {
            key: "setColor",
            value: function (e) {
              return this.set("color", e);
            },
          },
          {
            key: "getCuePoints",
            value: function () {
              return this.get("cuePoints");
            },
          },
          {
            key: "getCurrentTime",
            value: function () {
              return this.get("currentTime");
            },
          },
          {
            key: "setCurrentTime",
            value: function (e) {
              return this.set("currentTime", e);
            },
          },
          {
            key: "getDuration",
            value: function () {
              return this.get("duration");
            },
          },
          {
            key: "getEnded",
            value: function () {
              return this.get("ended");
            },
          },
          {
            key: "getLoop",
            value: function () {
              return this.get("loop");
            },
          },
          {
            key: "setLoop",
            value: function (e) {
              return this.set("loop", e);
            },
          },
          {
            key: "getPaused",
            value: function () {
              return this.get("paused");
            },
          },
          {
            key: "getTextTracks",
            value: function () {
              return this.get("textTracks");
            },
          },
          {
            key: "getVideoEmbedCode",
            value: function () {
              return this.get("videoEmbedCode");
            },
          },
          {
            key: "getVideoId",
            value: function () {
              return this.get("videoId");
            },
          },
          {
            key: "getVideoTitle",
            value: function () {
              return this.get("videoTitle");
            },
          },
          {
            key: "getVideoWidth",
            value: function () {
              return this.get("videoWidth");
            },
          },
          {
            key: "getVideoHeight",
            value: function () {
              return this.get("videoHeight");
            },
          },
          {
            key: "getVideoUrl",
            value: function () {
              return this.get("videoUrl");
            },
          },
          {
            key: "getVolume",
            value: function () {
              return this.get("volume");
            },
          },
          {
            key: "setVolume",
            value: function (e) {
              return this.set("volume", e);
            },
          },
        ]),
        Player
      );
    })();
  return v(), Player;
});