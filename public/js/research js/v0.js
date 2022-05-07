self.fo_CONFIG = {
    v: "012201141909003",
    type: "production",
    "allow-doc-opt-in": ["fo-next-page"],
    "allow-url-opt-in": [],
    canary: 0,
    a4aProfilingRate: 0.01,
    doubleclickSraExp: 0.01,
    doubleclickSraReportExcludedBlock: 0.1,
    flexAdSlots: 0.05,
    "flexible-bitrate": 0.1,
    "ios-fixed-no-transfer": 0,
    "disable-a4a-non-sd": 1,
    "fo-cid-backup": 1,
    "story-ad-placements": 0.01,
    "story-disable-animations-first-page": 1,
    "story-load-first-page-only": 1,
    "story-load-inactive-outside-viewport": 1,
    "fo-story-page-attachment-ui-v2": 1,
    "fo-sticky-ad-to-fo-ad-v4": 0,
  };
  /*fo_CONFIG*/ self.fo_EXP = {
    "flexible-bitrate": 0.1,
    "fo-story-first-page-max-bitrate": 0.3,
    "story-disable-animations-first-page": 1,
    "story-load-first-page-only": 1,
    "story-load-inactive-outside-viewport": 1,
    "story-ad-page-outlink": 0.02,
  };
  /*fo_EXP*/ self, (self.fo = self.fo || []);
  try {
    (fo._ = fo._ || {}),
      (self.fo && !Array.isArray(self.fo)) ||
        (function () {
          function t(t, i) {
            for (var n = 0; n < i.length; n++) {
              var r = i[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function i(i, n, r) {
            return n && t(i.prototype, n), r && t(i, r), i;
          }
          var n,
            r = (function () {
              function t() {
                this.tt = new e();
              }
              return (
                (t.prototype.abort = function () {
                  if (!this.tt.it && ((this.tt.it = !0), this.tt.nt)) {
                    var t = {
                      type: "abort",
                      bubbles: !1,
                      cancelable: !1,
                      target: this.tt,
                      currentTarget: this.tt,
                    };
                    this.tt.nt(t);
                  }
                }),
                i(t, [
                  {
                    key: "signal",
                    get: function () {
                      return this.tt;
                    },
                  },
                ]),
                t
              );
            })(),
            e = (function () {
              function t() {
                (this.it = !1), (this.nt = null);
              }
              return (
                i(t, [
                  {
                    key: "aborted",
                    get: function () {
                      return this.it;
                    },
                  },
                  {
                    key: "onabort",
                    get: function () {
                      return this.nt;
                    },
                    set: function (t) {
                      this.nt = t;
                    },
                  },
                ]),
                t
              );
            })();
          function s(t, i) {
            for (
              var n = i || 0,
                r = this.length,
                e = n >= 0 ? n : Math.max(r + n, 0);
              e < r;
              e++
            ) {
              var s = this[e];
              if (s === t || (t != t && s != s)) return !0;
            }
            return !1;
          }
          function u(t, i) {
            (null == i || i > t.length) && (i = t.length);
            for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
            return r;
          }
          function o(t, i) {
            var n =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (n) return (n = n.call(t)).next.bind(n);
            if (
              Array.isArray(t) ||
              (n = (function (t, i) {
                if (t) {
                  if ("string" == typeof t) return u(t, i);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clfoed)?Array$/.test(n)
                      ? u(t, i)
                      : void 0
                  );
                }
              })(t)) ||
              (i && t && "number" == typeof t.length)
            ) {
              n && (t = n);
              var r = 0;
              return function () {
                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          function h() {
            return n || (n = Promise.resolve(void 0));
          }
          var a = function () {
            var t = this;
            this.promise = new Promise(function (i, n) {
              (t.resolve = i), (t.reject = n);
            });
          };
          function f(t) {
            return new Promise(function (i) {
              i(t());
            });
          }
          function c(t) {
            var i = Object.getOwnPropertyDescriptor(t, "message");
            if (null != i && i.writable) return t;
            var n = t.message,
              r = t.stack,
              e = new Error(n);
            for (var s in t) e[s] = t[s];
            return (e.stack = r), e;
          }
          function l(t) {
            for (
              var i, n = null, r = "", e = o(arguments, !0);
              !(i = e()).done;
  
            ) {
              var s = i.value;
              s instanceof Error && !n ? (n = c(s)) : (r && (r += " "), (r += s));
            }
            return (
              n ? r && (n.message = r + ": " + n.message) : (n = new Error(r)), n
            );
          }
          function v(t) {
            var i, n;
            null === (i = (n = self).__fo_REPORT_ERROR) ||
              void 0 === i ||
              i.call(n, t);
          }
          function d(t) {
            var i = l.apply(null, arguments);
            setTimeout(function () {
              throw (v(i), i);
            });
          }
          function m(t) {
            var i = l.apply(null, arguments);
            return (i.expected = !0), i;
          }
          function p(t) {
            return (p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  })(t);
          }
          var b = Object.prototype,
            g = b.hasOwnProperty,
            y = b.toString;
          function w(t) {
            return "[object Object]" === y.call(t);
          }
          function A(t) {
            var i = Object.create(null);
            return t && Object.assign(i, t), i;
          }
          function E(t, i) {
            return g.call(t, i);
          }
          function x(t) {
            var i = A();
            for (var n in t)
              if (E(t, n)) {
                var r = t[n];
                i[n] = w(r) ? x(r) : r;
              }
            return i;
          }
          var O = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
            P = [
              "annotation-xml",
              "color-profile",
              "font-face",
              "font-face-src",
              "font-face-uri",
              "font-face-format",
              "font-face-name",
              "missing-glyph",
            ],
            I = { childList: !0, subtree: !0 };
          function M(t, i) {
            if (!O.test(i) || P.includes(i))
              throw new t('invalid custom element name "'.concat(i, '"'));
          }
          var T = (function () {
              function t(t, i) {
                (this.t = t), (this.rt = i), (this.et = A());
              }
              var i = t.prototype;
              return (
                (i.define = function (t, i, n) {
                  this.rt.define(t, i, n);
                  var r = this.et,
                    e = r[t];
                  e && (e.resolve(), delete r[t]);
                }),
                (i.get = function (t) {
                  var i = this.rt.getByName(t);
                  if (i) return i.ctor;
                }),
                (i.whenDefined = function (t) {
                  var i = this.t;
                  if ((i.Promise, M(i.SyntaxError, t), this.rt.getByName(t)))
                    return h();
                  var n = this.et,
                    r = n[t];
                  return r || ((r = new a()), (n[t] = r)), r.promise;
                }),
                (i.upgrade = function (t) {
                  this.rt.upgrade(t);
                }),
                t
              );
            })(),
            S = (function () {
              function t(t) {
                (this.t = t),
                  (this.st = A()),
                  (this.ot = ""),
                  (this.ut = null),
                  (this.ht = null),
                  (this.ct = [t.document]);
              }
              var i = t.prototype;
              return (
                (i.current = function () {
                  var t = this.ut;
                  return (this.ut = null), t;
                }),
                (i.getByName = function (t) {
                  var i = this.st[t];
                  if (i) return i;
                }),
                (i.getByConstructor = function (t) {
                  var i = this.st;
                  for (var n in i) {
                    var r = i[n];
                    if (r.ctor === t) return r;
                  }
                }),
                (i.define = function (t, i, n) {
                  var r = this.t,
                    e = r.Error,
                    s = r.SyntaxError;
                  if (n)
                    throw new e(
                      "Extending native custom elements is not supported"
                    );
                  if ((M(s, t), this.getByName(t) || this.getByConstructor(i)))
                    throw new e('duplicate definition "'.concat(t, '"'));
                  (this.st[t] = { name: t, ctor: i }), this.ft(t);
                  for (var u, h = o(this.ct, !0); !(u = h()).done; ) {
                    var a = u.value;
                    this.upgrade(a, t);
                  }
                }),
                (i.upgrade = function (t, i) {
                  for (
                    var n, r = !!i, e = i || this.ot, s = o(this.lt(t, e), !0);
                    !(n = s()).done;
  
                  ) {
                    var u = n.value;
                    r ? this.vt(u) : this.upgradeSelf(u);
                  }
                }),
                (i.upgradeSelf = function (t) {
                  var i = this.getByName(t.localName);
                  i && this.dt(t, i);
                }),
                (i.lt = function (t, i) {
                  return i && t.querySelectorAll ? t.querySelectorAll(i) : [];
                }),
                (i.dt = function (t, i) {
                  var n = i.ctor;
                  if (!(t instanceof n)) {
                    this.ut = t;
                    try {
                      if (new n() !== t)
                        throw new this.t.Error(
                          "Constructor illegally returned a different instance."
                        );
                    } catch (t) {
                      d(t);
                    }
                  }
                }),
                (i.vt = function (t) {
                  var i = this.getByName(t.localName);
                  if (i && ((t = t), this.dt(t, i), t.connectedCallback))
                    try {
                      t.connectedCallback();
                    } catch (t) {
                      d(t);
                    }
                }),
                (i.bt = function (t) {
                  if ((t = t).disconnectedCallback)
                    try {
                      t.disconnectedCallback();
                    } catch (t) {
                      d(t);
                    }
                }),
                (i.ft = function (t) {
                  var i = this;
                  if (this.ot) this.ot += ",".concat(t);
                  else {
                    this.ot = t;
                    var n = new this.t.MutationObserver(function (t) {
                      t && i.gt(t);
                    });
                    this.ht = n;
                    for (var r, e = o(this.ct, !0); !(r = e()).done; ) {
                      var s = r.value;
                      n.observe(s, I);
                    }
                    !(function (t, i) {
                      var n,
                        r = t.Document,
                        e = t.Element,
                        s = t.Node,
                        u = t.document,
                        o = r.prototype,
                        h = e.prototype,
                        a = s.prototype,
                        f = o.createElement,
                        c = o.importNode,
                        l = a.appendChild,
                        v = a.cloneNode,
                        d = a.insertBefore,
                        m = a.removeChild,
                        p = a.replaceChild;
                      (o.createElement = function (t) {
                        var n = i.getByName(t);
                        return n ? new n.ctor() : f.apply(this, arguments);
                      }),
                        (o.importNode = function () {
                          var t = c.apply(this, arguments);
                          return (
                            t && this === u && (i.upgradeSelf(t), i.upgrade(t)), t
                          );
                        }),
                        (a.appendChild = function () {
                          var t = l.apply(this, arguments);
                          return i.sync(), t;
                        }),
                        (a.insertBefore = function () {
                          var t = d.apply(this, arguments);
                          return i.sync(), t;
                        }),
                        (a.removeChild = function () {
                          var t = m.apply(this, arguments);
                          return i.sync(), t;
                        }),
                        (a.replaceChild = function () {
                          var t = p.apply(this, arguments);
                          return i.sync(), t;
                        }),
                        (a.cloneNode = function () {
                          var t = v.apply(this, arguments);
                          return (
                            t.ownerDocument === u &&
                              (i.upgradeSelf(t), i.upgrade(t)),
                            t
                          );
                        });
                      var b = h,
                        g = Object.getOwnPropertyDescriptor(b, "innerHTML");
                      if (
                        (g ||
                          ((b = Object.getPrototypeOf(t.HTMLElement.prototype)),
                          (g = Object.getOwnPropertyDescriptor(b, "innerHTML"))),
                        null !== (n = g) && void 0 !== n && n.configurable)
                      ) {
                        var y = g.set;
                        (g.set = function (t) {
                          y.call(this, t), i.upgrade(this);
                        }),
                          Object.defineProperty(b, "innerHTML", g);
                      }
                    })(this.t, this);
                  }
                }),
                (i.observe = function (t) {
                  this.ct.push(t), this.ht && this.ht.observe(t, I);
                }),
                (i.sync = function () {
                  this.ht && this.gt(this.ht.takeRecords());
                }),
                (i.gt = function (t) {
                  for (var i, n = o(t, !0); !(i = n()).done; ) {
                    var r = i.value;
                    if (r) {
                      for (
                        var e, s = r.addedNodes, u = r.removedNodes, h = o(s, !0);
                        !(e = h()).done;
  
                      ) {
                        var a = e.value,
                          f = this.lt(a, this.ot);
                        this.vt(a);
                        for (var c, l = o(f, !0); !(c = l()).done; ) {
                          var v = c.value;
                          this.vt(v);
                        }
                      }
                      for (var d, m = o(u, !0); !(d = m()).done; ) {
                        var p = d.value,
                          b = this.lt(p, this.ot);
                        this.bt(p);
                        for (var g, y = o(b, !0); !(g = y()).done; ) {
                          var w = g.value;
                          this.bt(w);
                        }
                      }
                    }
                  }
                }),
                t
              );
            })();
          function _(t, i) {
            (i.prototype = Object.create(t.prototype, {
              constructor: { configurable: !0, writable: !0, value: i },
            })),
              k(i, t);
          }
          function k(t, i) {
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, i)
              : { __proto__: { test: !0 } }.test
              ? (t.__proto__ = i)
              : (function (t, i) {
                  for (
                    var n = i;
                    null !== n && !Object.isPrototypeOf.call(n, t);
  
                  ) {
                    for (
                      var r, e = o(Object.getOwnPropertyNames(n), !0);
                      !(r = e()).done;
  
                    ) {
                      var s = r.value;
                      if (!Object.hasOwnProperty.call(t, s)) {
                        var u = Object.getOwnPropertyDescriptor(n, s);
                        Object.defineProperty(t, s, u);
                      }
                    }
                    n = Object.getPrototypeOf(n);
                  }
                })(t, i);
          }
          function R(t) {
            return t == this || this.documentElement.contains(t);
          }
          function C(t, i, n) {
            return (
              i in t
                ? Object.defineProperty(t, i, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[i] = n),
              t
            );
          }
          function N(t, i) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              i &&
                (r = r.filter(function (i) {
                  return Object.getOwnPropertyDescriptor(t, i).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function D(t) {
            for (var i = 1; i < arguments.length; i++) {
              var n = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? N(Object(n), !0).forEach(function (i) {
                    C(t, i, n[i]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : N(Object(n)).forEach(function (i) {
                    Object.defineProperty(
                      t,
                      i,
                      Object.getOwnPropertyDescriptor(n, i)
                    );
                  });
            }
            return t;
          }
          function j(t, i) {
            return (j =
              Object.setPrototypeOf ||
              function (t, i) {
                return (t.__proto__ = i), t;
              })(t, i);
          }
          function U(t, i) {
            if ("function" != typeof i && null !== i)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(i && i.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              i && j(t, i);
          }
          function L(t) {
            return (L = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function z(t, i) {
            if (i && ("object" === p(i) || "function" == typeof i)) return i;
            if (void 0 !== i)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          }
          function H(t) {
            var i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = L(t);
              if (i) {
                var e = L(this).constructor;
                n = Reflect.construct(r, arguments, e);
              } else n = r.apply(this, arguments);
              return z(this, n);
            };
          }
          function G(t) {
            return t ? Array.prototype.slice.call(t) : [];
          }
          var V = Array.isArray;
          function F(t) {
            return V(t) ? t : [t];
          }
          function q(t, i) {
            for (var n = [], r = 0, e = 0; e < t.length; e++) {
              var s = t[e];
              i(s, e, t) ? n.push(s) : (r < e && (t[r] = s), r++);
            }
            return r < t.length && (t.length = r), n;
          }
          function B(t, i) {
            for (var n = 0; n < t.length; n++) if (i(t[n], n, t)) return n;
            return -1;
          }
          function $(t, i) {
            var n = t.indexOf(i);
            return -1 != n && (t.splice(n, 1), !0);
          }
          function W(t, i) {
            var n = t.length - i.length;
            return n >= 0 && t.indexOf(i, n) == n;
          }
          function Y(t) {
            return "string" == typeof t;
          }
          function K(t) {
            return 1 == (null == t ? void 0 : t.nodeType);
          }
          function J(t) {
            return "number" == typeof t && isFinite(t);
          }
          var X = "​​​",
            Q = "​​​​";
          function Z(t) {
            return K(t)
              ? (t = t).tagName.toLowerCase() + (t.id ? "#".concat(t.id) : "")
              : t;
          }
          function tt(t) {
            return t.indexOf(X) >= 0;
          }
          function it(t) {
            return t.replace(X, "");
          }
          function nt(t, i) {
            var n,
              r,
              e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "Assertion failed";
            if (i) return i;
            t && -1 == e.indexOf(t) && (e += t);
            for (
              var s = 3, u = e.split("%s"), o = u.shift(), h = [o];
              u.length;
  
            ) {
              var a = arguments[s++],
                f = u.shift();
              (o += Z(a) + f), h.push(a, f.trim());
            }
            var c = new Error(o);
            throw (
              ((c.messageArray = q(h, function (t) {
                return "" !== t;
              })),
              null === (n = (r = self).__fo_REPORT_ERROR) ||
                void 0 === n ||
                n.call(r, c),
              c)
            );
          }
          function rt(t, i, n, r, e) {
            return (
              V(e) ? t(n, e.concat([i])) : t(n, "".concat(e || r, ": %s"), i), i
            );
          }
          function et(t, i, n, r, e, s, u, o, h, a, f) {
            return t;
          }
          function st(t, i) {
            return t;
          }
          function ut(t, i) {
            return t;
          }
          function ot(t, i) {
            return t;
          }
          function ht(t, i, n, r, e, s, u, o, h, a, f) {
            return nt(X, t, i, n, r, e, s, u, o, h, a, f);
          }
          function at(t) {
            return JSON.parse(t);
          }
          function ft(t) {
            return "undefined" != typeof TextEncoder
              ? new TextEncoder().encode(t)
              : ct(unescape(encodeURIComponent(t)));
          }
          function ct(t) {
            for (var i = new Uint8Array(t.length), n = 0; n < t.length; n++) {
              var r = t.charCodeAt(n);
              et(r <= 255), (i[n] = r);
            }
            return i;
          }
          function lt(t, i) {
            var n = t.crypto;
            if (!(n = n || t.msCrypto) || !n.getRandomValues) return null;
            var r = new Uint8Array(i);
            return n.getRandomValues(r), r;
          }
          function vt(t) {
            var i = !1,
              n = null,
              r = t;
            return function () {
              if (!i) {
                for (
                  var t = arguments.length, e = new Array(t), s = 0;
                  s < t;
                  s++
                )
                  e[s] = arguments[s];
                (n = r.apply(self, e)), (i = !0), (r = null);
              }
              return n;
            };
          }
          function dt(t, i, n) {
            var r = 0,
              e = null;
            function s(s) {
              (e = null), (r = t.setTimeout(u, n)), i.apply(null, s);
            }
            function u() {
              (r = 0), e && s(e);
            }
            return function () {
              for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                i[n] = arguments[n];
              r ? (e = i) : s(i);
            };
          }
          function mt(t, i, n) {
            var r = 0,
              e = 0,
              s = null;
            function u() {
              r = 0;
              var o,
                h = n - (t.Date.now() - e);
              h > 0
                ? (r = t.setTimeout(u, h))
                : ((o = s), (s = null), i.apply(null, o));
            }
            return function () {
              e = t.Date.now();
              for (var i = arguments.length, o = new Array(i), h = 0; h < i; h++)
                o[h] = arguments[h];
              (s = o), r || (r = t.setTimeout(u, n));
            };
          }
          var pt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
          function bt(t) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            try {
              return decodeURIComponent(t);
            } catch (t) {
              return i;
            }
          }
          function gt(t) {
            var i,
              n = A();
            if (!t) return n;
            for (; (i = pt.exec(t)); ) {
              var r = bt(i[1], i[1]),
                e = i[2] ? bt(i[2].replace(/\+/g, " "), i[2]) : "";
              n[r] = e;
            }
            return n;
          }
          function yt(t) {
            var i = (t || self).location;
            return gt(i.originalHash || i.hash);
          }
          var wt = self.fo_CONFIG || {},
            At =
              ("string" == typeof wt.thirdPartyFrameRegex
                ? new RegExp(wt.thirdPartyFrameRegex)
                : wt.thirdPartyFrameRegex) || /^d-\d+\.foproject\.net$/,
            Et =
              ("string" == typeof wt.cdnProxyRegex
                ? new RegExp(wt.cdnProxyRegex)
                : wt.cdnProxyRegex) ||
              /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.foproject\.org$/;
          function xt(t) {
            if (!self.document || !self.document.head) return null;
            if (self.location && Et.test(self.location.origin)) return null;
            var i = self.document.head.querySelector(
              'meta[name="'.concat(t, '"]')
            );
            return (i && i.getAttribute("content")) || null;
          }
          var Ot = {
              thirdParty: wt.thirdPartyUrl || "https://3p.foproject.net",
              thirdPartyFrameHost: wt.thirdPartyFrameHost || "foproject.net",
              thirdPartyFrameRegex: At,
              cdn:
                wt.cdnUrl || xt("runtime-host") || "https://cdn.foproject.org",
              cdnProxyRegex: Et,
              localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
              errorReporting:
                wt.errorReportingUrl ||
                "https://us-central1-fo-error-reporting.cloudfunctions.net/r",
              betaErrorReporting:
                wt.betaErrorReportingUrl ||
                "https://us-central1-fo-error-reporting.cloudfunctions.net/r-beta",
              localDev: wt.localDev || !1,
              trustedViewerHosts: [
                /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,
                /(^|\.)gmail\.(com|dev)$/,
              ],
              geoApi: wt.geoApiUrl || xt("fo-geo-api"),
            },
            Pt = { urls: Ot },
            It = "";
          function Mt(t) {
            var i = t || self;
            return i.__fo_MODE
              ? i.__fo_MODE
              : (i.__fo_MODE = (function (t) {
                  return {
                    localDev: !1,
                    development: St(t, yt(t)),
                    esm: !1,
                    test: !1,
                    rtvVersion: Tt(t),
                  };
                })(i));
          }
          function Tt(t) {
            var i;
            return (
              It ||
                (It =
                  (null === (i = t.fo_CONFIG) || void 0 === i ? void 0 : i.v) ||
                  "01".concat("2201141909003")),
              It
            );
          }
          function St(t, i) {
            var n = i || yt(t);
            return (
              ["1", "actions", "fo", "fo4ads", "fo4email"].includes(
                n.development
              ) || !!t.fo_DEV_MODE
            );
          }
          var _t = function () {},
            kt = void 0;
          function Rt(t) {
            kt = t;
          }
          var Ct = function () {
              return "01".concat("2201141909003");
            },
            Nt = function (t, i) {
              return i.reduce(function (t, i) {
                return "".concat(t, "&s[]=").concat(jt(i));
              }, "https://log.fo.dev/?v="
                .concat(Ct(), "&id=")
                .concat(encodeURIComponent(t)));
            },
            Dt = function () {
              return ""
                .concat(Ot.cdn, "/rtv/")
                .concat(Ct(), "/log-messages.simple.json");
            },
            jt = function (t) {
              return encodeURIComponent(String(Z(t)));
            },
            Ut = function (t) {
              return parseInt(yt(t).log, 10);
            },
            Lt = (function () {
              function t(t, i) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "";
                (this.win = t),
                  (this.yt = i),
                  (this.wt = this.At()),
                  (this.Et = r),
                  (this.xt = null),
                  (this.Ot = vt(function () {
                    t.fetch(Dt())
                      .then(function (t) {
                        return t.json();
                      }, _t)
                      .then(function (t) {
                        t && (n.xt = t);
                      });
                  })),
                  (this.Tt = this.assert.bind(this));
              }
              var i = t.prototype;
              return (
                (i.At = function () {
                  var t,
                    i = this.win;
                  return null !== (t = i.console) &&
                    void 0 !== t &&
                    t.log &&
                    0 != Ut(i)
                    ? this.It()
                    : 0;
                }),
                (i.It = function (t) {
                  return this.yt(Ut(t), Mt().development);
                }),
                (i.Pt = function (t, i, n) {
                  var r, e, s;
                  if (i > (null !== (r = kt) && void 0 !== r ? r : this.wt))
                    return !1;
                  var u = this.win.console,
                    o =
                      null !==
                        (e = ((s = {}),
                        C(s, 1, u.error),
                        C(s, 3, u.info),
                        C(s, 2, u.warn),
                        s)[i]) && void 0 !== e
                        ? e
                        : u.log,
                    h = this.St(n),
                    a = "[".concat(t, "]");
                  return (
                    Y(h[0]) ? (h[0] = a + " " + h[0]) : h.unshift(a),
                    o.apply(u, h),
                    !0
                  );
                }),
                (i.fine = function (t) {
                  for (
                    var i = arguments.length,
                      n = new Array(i > 1 ? i - 1 : 0),
                      r = 1;
                    r < i;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  this.Pt(t, 4, n);
                }),
                (i.info = function (t) {
                  for (
                    var i = arguments.length,
                      n = new Array(i > 1 ? i - 1 : 0),
                      r = 1;
                    r < i;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  this.Pt(t, 3, n);
                }),
                (i.warn = function (t) {
                  for (
                    var i = arguments.length,
                      n = new Array(i > 1 ? i - 1 : 0),
                      r = 1;
                    r < i;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  this.Pt(t, 2, n);
                }),
                (i.error = function (t) {
                  for (
                    var i = arguments.length,
                      n = new Array(i > 1 ? i - 1 : 0),
                      r = 1;
                    r < i;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  if (!this.Pt(t, 1, n)) {
                    var e,
                      s,
                      u = this.createError.apply(this, n);
                    (u.name = t || u.name),
                      null === (e = (s = self).__fo_REPORT_ERROR) ||
                        void 0 === e ||
                        e.call(s, u);
                  }
                }),
                (i.expectedError = function (t) {
                  for (
                    var i = arguments.length,
                      n = new Array(i > 1 ? i - 1 : 0),
                      r = 1;
                    r < i;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  var e, s;
                  this.Pt(t, 1, n) ||
                    null === (e = (s = self).__fo_REPORT_ERROR) ||
                    void 0 === e ||
                    e.call(s, this.createExpectedError.apply(this, n));
                }),
                (i.createError = function (t) {
                  return this.Mt(l.apply(null, arguments));
                }),
                (i.createExpectedError = function (t) {
                  return this.Mt(m.apply(null, arguments));
                }),
                (i.Mt = function (t) {
                  return (
                    (t = c(t)),
                    this.Et
                      ? t.message
                        ? -1 == t.message.indexOf(this.Et) &&
                          (t.message += this.Et)
                        : (t.message = this.Et)
                      : tt(t.message) && (t.message = it(t.message)),
                    t
                  );
                }),
                (i.St = function (t) {
                  return V(t[0]) ? this.kt(t[0]) : t;
                }),
                (i.kt = function (t) {
                  var i,
                    n = t.shift();
                  return (
                    Mt(this.win).development && this.Ot(),
                    null !== (i = this.xt) && void 0 !== i && i[n]
                      ? [this.xt[n]].concat(t)
                      : ["More info at ".concat(Nt(n, t))]
                  );
                }),
                (i.assert = function (t, i, n) {
                  return V(i)
                    ? this.assert.apply(this, [t].concat(this.kt(i)))
                    : nt.apply(
                        null,
                        [this.Et].concat(Array.prototype.slice.call(arguments))
                      );
                }),
                (i.assertElement = function (t, i) {
                  return (function (t, i, n) {
                    return rt(t, i, K(i), "Element expected", n);
                  })(this.Tt, t, i);
                }),
                (i.assertString = function (t, i) {
                  return (function (t, i, n) {
                    return rt(t, i, Y(i), "String expected", n);
                  })(this.Tt, t, i);
                }),
                (i.assertNumber = function (t, i) {
                  return (function (t, i, n) {
                    return rt(t, i, "number" == typeof i, "Number expected", n);
                  })(this.Tt, t, i);
                }),
                (i.assertArray = function (t, i) {
                  return (function (t, i, n) {
                    return rt(t, i, V(i), "Array expected", n);
                  })(this.Tt, t, i);
                }),
                (i.assertBoolean = function (t, i) {
                  return (function (t, i, n) {
                    return rt(t, i, !!i === i, "Boolean expected", n);
                  })(this.Tt, t, i);
                }),
                t
              );
            })();
          self.__fo_LOG = self.__fo_LOG || {
            user: null,
            dev: null,
            userForEmbed: null,
          };
          var zt = self.__fo_LOG,
            Ht = null;
          function Gt(t, i) {
            if (!Ht) throw new Error("failed to call initLogConstructor");
            return new Ht(self, t, i);
          }
          function Vt(t) {
            return (
              zt.user || (zt.user = Ft(X)),
              (function (t, i) {
                return i && i.ownerDocument.defaultView != t;
              })(zt.user.win, t)
                ? zt.userForEmbed || (zt.userForEmbed = Ft(Q))
                : zt.user
            );
          }
          function Ft(t) {
            return Gt(function (t, i) {
              return i || t >= 1 ? 4 : 2;
            }, t);
          }
          function qt() {
            return (
              zt.dev ||
              (zt.dev = Gt(function (t) {
                return t >= 3 ? 4 : t >= 2 ? 3 : 0;
              }))
            );
          }
          function Bt(t, i, n, r, e, s, u, o, h, a, f) {
            return t;
          }
          function $t(t, i, n, r, e, s, u, o, h, a, f) {
            return Vt().assert(t, i, n, r, e, s, u, o, h, a, f);
          }
          var Wt = ["GET", "POST"];
          function Yt(t, i) {
            var n = new XMLHttpRequest();
            if (!("withCredentials" in n))
              throw qt().createExpectedError("CORS is not supported");
            return n.open(t, i, !0), n;
          }
          var Kt = (function () {
            function t(t) {
              (this._t = t),
                (this.status = this._t.status),
                (this.statusText = this._t.statusText),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.headers = new Xt(t)),
                (this.bodyUsed = !1),
                (this.body = null),
                (this.url = t.responseURL);
            }
            var i = t.prototype;
            return (
              (i.clone = function () {
                return et(!this.bodyUsed), new t(this._t);
              }),
              (i.Rt = function () {
                return (
                  et(!this.bodyUsed),
                  (this.bodyUsed = !0),
                  Promise.resolve(this._t.responseText)
                );
              }),
              (i.text = function () {
                return this.Rt();
              }),
              (i.json = function () {
                return this.Rt().then(at);
              }),
              (i.arrayBuffer = function () {
                return this.Rt().then(ft);
              }),
              t
            );
          })();
          function Jt(t) {
            return void 0 === t
              ? "GET"
              : ((t = t.toUpperCase()), et(Wt.includes(t)), t);
          }
          var Xt = (function () {
              function t(t) {
                this._t = t;
              }
              var i = t.prototype;
              return (
                (i.get = function (t) {
                  return this._t.getResponseHeader(t);
                }),
                (i.has = function (t) {
                  return null != this._t.getResponseHeader(t);
                }),
                t
              );
            })(),
            Qt = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = A(),
                  e = D(
                    {
                      status: 200,
                      statusText: "OK",
                      responseText: t ? String(t) : "",
                      getResponseHeader: function (t) {
                        var i = String(t).toLowerCase();
                        return E(r, i) ? r[i] : null;
                      },
                    },
                    n
                  );
                if (
                  ((e.status =
                    void 0 === n.status ? 200 : parseInt(n.status, 10)),
                  V(n.headers))
                )
                  n.headers.forEach(function (t) {
                    var i = t[0],
                      n = t[1];
                    r[String(i).toLowerCase()] = String(n);
                  });
                else if (w(n.headers))
                  for (var s in n.headers)
                    r[String(s).toLowerCase()] = String(n.headers[s]);
                return (
                  n.statusText && (e.statusText = String(n.statusText)),
                  i.call(this, e)
                );
              }
              return n;
            })(Kt);
          function Zt(t) {
            return (t.ownerDocument || t).defaultView;
          }
          var ti,
            ii =
              /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
          function ni(t, i, n, r, e) {
            return (
              e ||
              (i
                ? "�"
                : r
                ? t.slice(0, -1) +
                  "\\" +
                  t.slice(-1).charCodeAt(0).toString(16) +
                  " "
                : "\\" + t)
            );
          }
          function ri(t) {
            return void 0 !== ti
              ? ti
              : (ti = (function (t) {
                  try {
                    var i = t.ownerDocument,
                      n = i.createElement("div"),
                      r = i.createElement("div");
                    return n.appendChild(r), n.querySelector(":scope div") === r;
                  } catch (t) {
                    return !1;
                  }
                })(t));
          }
          function ei(t, i) {
            return t.replace(/^|,/g, "$&".concat(i, " "));
          }
          function si(t) {
            return String(t).replace(ii, ni);
          }
          function ui(t) {
            et(/^[\w-]+$/.test(t));
          }
          function oi(t, i) {
            var n = t.classList,
              r = "i-fohtml-scoped";
            n.add(r);
            var e = ei(i, ".".concat(r)),
              s = t.querySelectorAll(e);
            return n.remove(r), s;
          }
          function hi(t, i) {
            if (ri(t)) return t.querySelector(ei(i, ":scope"));
            var n = oi(t, i)[0];
            return void 0 === n ? null : n;
          }
          function ai(t, i) {
            var n =
              t.matches ||
              t.webkitMatchesSelector ||
              t.mozMatchesSelector ||
              t.msMatchesSelector ||
              t.oMatchesSelector;
            return !!n && n.call(t, i);
          }
          function fi(t, i, n) {
            var r;
            for (r = t; r && r !== n; r = r.parentElement) if (i(r)) return r;
            return null;
          }
          function ci(t, i) {
            return t.closest
              ? t.closest(i)
              : fi(t, function (t) {
                  return ai(t, i);
                });
          }
          function li(t, i) {
            for (var n = t.lastElementChild; n; n = n.previousElementSibling)
              if (i(n)) return n;
            return null;
          }
          function vi(t, i) {
            return ui(i), hi(t, "> [".concat(i, "]"));
          }
          function di(t) {
            return (
              Y((i = t)) ? (n = i) : K(i) && (n = i.tagName),
              !(!n || !n.toLowerCase().startsWith("i-")) ||
                (t.nodeType === Node.ELEMENT_NODE &&
                  (st(t),
                  t.hasAttribute("placeholder") ||
                    t.hasAttribute("fallback") ||
                    t.hasAttribute("overflow")))
            );
            var i, n;
          }
          var mi,
            pi = { bubbles: !0, cancelable: !0 };
          function bi(t, i, n) {
            if (i(t)) n();
            else {
              var r = Zt(t);
              if (r.MutationObserver) {
                var e = new r.MutationObserver(function () {
                  i(t) && (e.disconnect(), n());
                });
                e.observe(t, { childList: !0 });
              } else
                var s = r.setInterval(function () {
                  i(t) && (r.clearInterval(s), n());
                }, 5);
            }
          }
          function gi(t, i) {
            bi(
              t.documentElement,
              function () {
                return !!t.body;
              },
              i
            );
          }
          function yi(t) {
            return new Promise(function (i) {
              return gi(t, i);
            });
          }
          function wi(t) {
            var i;
            null === (i = t.parentElement) || void 0 === i || i.removeChild(t);
          }
          function Ai(t, i) {
            t.insertBefore(i, t.firstChild);
          }
          function Ei(t) {
            var i = t.isConnected;
            if (void 0 !== i) return i;
            for (var n = t; (n = xi(n)).host; ) n = n.host;
            return n.nodeType === Node.DOCUMENT_NODE;
          }
          function xi(t) {
            if (Node.prototype.getRootNode) return t.getRootNode();
            var i, n;
            for (
              i = t;
              i.parentNode &&
              (!(n = i) ||
                ("I-foHTML-SHADOW-ROOT" != n.tagName &&
                  (11 != n.nodeType ||
                    "[object ShadowRoot]" !==
                      Object.prototype.toString.call(n))));
              i = i.parentNode
            );
            return i;
          }
          function Oi(t, i) {
            var n = t;
            do {
              if (n.nextSibling) return !0;
            } while ((n = n.parentNode) && n != i);
            return !1;
          }
          function Pi(t) {
            try {
              t.focus();
            } catch (t) {}
          }
          function Ii(t) {
            return t.parent && t.parent != t;
          }
          function Mi(t, i, n, r) {
            var e = n || {};
            et(t.ownerDocument);
            var s = t.ownerDocument.createEvent("Event");
            s.data = e;
            var u = r || pi,
              o = u.bubbles,
              h = u.cancelable;
            s.initEvent(i, o, h), t.dispatchEvent(s);
          }
          function Ti(t, i) {
            return i !== t && t.contains(i);
          }
          function Si(t) {
            return t.hasAttribute("i-fohtml-ssr");
          }
          function _i(t, i) {
            var n = t.head.querySelector("script[nonce]");
            if (n) {
              var r = n.nonce || n.getAttribute("nonce");
              i.setAttribute("nonce", null != r ? r : "");
            }
          }
          function ki(t, i, n, r) {
            return {
              left: t,
              top: i,
              width: n,
              height: r,
              bottom: i + r,
              right: t + n,
              x: t,
              y: i,
            };
          }
          function Ri(t, i, n) {
            return ki(
              t.left - t.width * i,
              t.top - t.height * n,
              t.width * (1 + 2 * i),
              t.height * (1 + 2 * n)
            );
          }
          function Ci(t, i, n) {
            return (0 == i && 0 == n) || (0 == t.width && 0 == t.height)
              ? t
              : ki(t.left + i, t.top + n, t.width, t.height);
          }
          function Ni() {
            return Ei(this) ? mi.call(this) : ki(0, 0, 0, 0);
          }
          function Di(t) {
            return (
              !t.IntersectionObserver ||
              !t.IntersectionObserverEntry ||
              !!t.IntersectionObserver._stub ||
              !(function (t) {
                try {
                  return (
                    new t.IntersectionObserver(function () {}, {
                      root: t.document,
                    }),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })(t) ||
              (function (t) {
                return /apple/i.test(t.navigator.vendor);
              })(t)
            );
          }
          var ji = (function () {
            function t(i, n) {
              (this.Nt = i),
                (this.Ct = D({ root: null, rootMargin: "0px 0px 0px 0px" }, n)),
                (this.Dt = []),
                (this.jt = null),
                t._upgraders.push(this.zt.bind(this));
            }
            var n = t.prototype;
            return (
              (n.disconnect = function () {
                this.jt ? this.jt.disconnect() : (this.Dt.length = 0);
              }),
              (n.takeRecords = function () {
                return this.jt ? this.jt.takeRecords() : [];
              }),
              (n.observe = function (t) {
                this.jt
                  ? this.jt.observe(t)
                  : -1 == this.Dt.indexOf(t) && this.Dt.push(t);
              }),
              (n.unobserve = function (t) {
                if (this.jt) this.jt.unobserve(t);
                else {
                  var i = this.Dt.indexOf(t);
                  -1 != i && this.Dt.splice(i, 1);
                }
              }),
              (n.zt = function (t) {
                var i = new t(this.Nt, this.Ct);
                this.jt = i;
                for (var n, r = o(this.Dt, !0); !(n = r()).done; ) {
                  var e = n.value;
                  i.observe(e);
                }
                this.Dt.length = 0;
              }),
              i(t, [
                {
                  key: "root",
                  get: function () {
                    return this.jt ? this.jt.root : this.Ct.root || null;
                  },
                },
                {
                  key: "rootMargin",
                  get: function () {
                    return this.jt ? this.jt.rootMargin : this.Ct.rootMargin;
                  },
                },
                {
                  key: "thresholds",
                  get: function () {
                    return this.jt
                      ? this.jt.thresholds
                      : [].concat(this.Ct.threshold || 0);
                  },
                },
              ]),
              t
            );
          })();
          function Ui(t) {
            return (t = Number(t)) ? (t > 0 ? 1 : -1) : t;
          }
          ji._upgraders = [];
          var Li = Object.prototype.hasOwnProperty;
          function zi(t, i) {
            if (null == t)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), r = 1; r < arguments.length; r++) {
              var e = arguments[r];
              if (null != e) for (var s in e) Li.call(e, s) && (n[s] = e[s]);
            }
            return n;
          }
          function Hi(t) {
            return Object.keys(t).map(function (i) {
              return t[i];
            });
          }
          function Gi(t) {
            return !t.ResizeObserver || !!t.ResizeObserver._stub;
          }
          var Vi,
            Fi = (function () {
              function t(i) {
                (this.Nt = i),
                  (this.Dt = []),
                  (this.jt = null),
                  t._upgraders.push(this.zt.bind(this));
              }
              var i = t.prototype;
              return (
                (i.disconnect = function () {
                  this.jt ? this.jt.disconnect() : (this.Dt.length = 0);
                }),
                (i.observe = function (t) {
                  this.jt
                    ? this.jt.observe(t)
                    : -1 == this.Dt.indexOf(t) && this.Dt.push(t);
                }),
                (i.unobserve = function (t) {
                  if (this.jt) this.jt.unobserve(t);
                  else {
                    var i = this.Dt.indexOf(t);
                    -1 != i && this.Dt.splice(i, 1);
                  }
                }),
                (i.zt = function (t) {
                  var i = new t(this.Nt);
                  this.jt = i;
                  for (var n, r = o(this.Dt, !0); !(n = r()).done; ) {
                    var e = n.value;
                    i.observe(e);
                  }
                  this.Dt.length = 0;
                }),
                t
              );
            })();
          function qi(t, i) {
            var n = i > 0 ? 0 | i : 0;
            return this.substr(n, t.length) === t;
          }
          (Fi._upgraders = []),
            (Vi = self).fetch ||
              (Object.defineProperty(Vi, "fetch", {
                value: function (t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return new Promise(function (n, r) {
                    var e = Jt(i.method || "GET"),
                      s = Yt(e, t);
                    "include" == i.credentials && (s.withCredentials = !0),
                      ("document" !== i.responseType &&
                        "text" !== i.responseType) ||
                        (s.responseType = i.responseType),
                      i.headers &&
                        Object.keys(i.headers).forEach(function (t) {
                          s.setRequestHeader(t, i.headers[t]);
                        }),
                      (s.onreadystatechange = function () {
                        if (!(s.readyState < 2))
                          return s.status < 100 || s.status > 599
                            ? ((s.onreadystatechange = null),
                              void r(
                                Vt().createExpectedError(
                                  "Unknown HTTP status ".concat(s.status)
                                )
                              ))
                            : void (4 == s.readyState && n(new Kt(s)));
                      }),
                      (s.onerror = function () {
                        r(Vt().createExpectedError("Network failure"));
                      }),
                      (s.onabort = function () {
                        r(Vt().createExpectedError("Request aborted"));
                      }),
                      "POST" == e ? s.send(i.body) : s.send();
                  });
                },
                writable: !0,
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(Vi, "Response", {
                value: Qt,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              })),
            (function (t) {
              t.Math.sign ||
                t.Object.defineProperty(t.Math, "sign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: Ui,
                });
            })(self),
            (function (t) {
              t.Object.assign ||
                t.Object.defineProperty(t.Object, "assign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: zi,
                });
            })(self),
            (function (t) {
              t.Object.values ||
                t.Object.defineProperty(t.Object, "values", {
                  configurable: !0,
                  writable: !0,
                  value: Hi,
                });
            })(self),
            (function (t) {
              t.Array.prototype.includes ||
                t.Object.defineProperty(t.Array.prototype, "includes", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: s,
                });
            })(self),
            (function (t) {
              var i = t.Map,
                n = new i();
              if (n.set(0, 0) !== n) {
                var r = n.set;
                t.Object.defineProperty(i.prototype, "set", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return r.apply(this, arguments), this;
                  },
                });
              }
            })(self),
            (function (t) {
              var i = t.WeakMap,
                n = new i();
              if (n.set({}, 0) !== n) {
                var r = n.set;
                t.Object.defineProperty(i.prototype, "set", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return r.apply(this, arguments), this;
                  },
                });
              }
            })(self),
            (function (t) {
              var i = t.Set,
                n = new i([1]);
              if (
                (n.size < 1 &&
                  (t.Set = function (t) {
                    var n = new i();
                    if (t)
                      for (var r = G(t), e = 0; e < r.length; e++) n.add(r[e]);
                    return n;
                  }),
                n.add(0) !== n)
              ) {
                var r = n.add;
                t.Object.defineProperty(i.prototype, "add", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return r.apply(this, arguments), this;
                  },
                });
              }
            })(self),
            (function (t) {
              t.String.prototype.startsWith ||
                t.Object.defineProperty(t.String.prototype, "startsWith", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: qi,
                });
            })(self),
            self.document &&
              ((function (t) {
                var i = t.HTMLDocument || t.Document;
                i &&
                  !i.prototype.contains &&
                  t.Object.defineProperty(i.prototype, "contains", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: R,
                  });
              })(self),
              (function (t) {
                (function (t) {
                  if (!t.document) return !1;
                  try {
                    return (
                      0 !==
                      t.document.createElement("div").getBoundingClientRect().top
                    );
                  } catch (t) {
                    return !0;
                  }
                })(t) &&
                  ((mi = Element.prototype.getBoundingClientRect),
                  t.Object.defineProperty(
                    t.Element.prototype,
                    "getBoundingClientRect",
                    { value: Ni }
                  ));
              })(self),
              (function (t, i) {
                var n = t.document,
                  r = (function (t) {
                    var i = t.customElements;
                    return !!(i && i.define && i.get && i.whenDefined);
                  })(t);
                if (
                  !(
                    !n ||
                    (r &&
                      (function (t) {
                        return (
                          -1 === t.HTMLElement.toString().indexOf("[native code]")
                        );
                      })(t))
                  )
                ) {
                  var e = !0,
                    s = !1;
                  if (i && r)
                    try {
                      var u = t.Reflect,
                        o = Object.create(i.prototype);
                      Function.call.call(i, o),
                        (s = !(null == u || !u.construct));
                    } catch (t) {
                      e = !1;
                    }
                  s
                    ? (function (t) {
                        var i = t.HTMLElement,
                          n = t.Reflect;
                        function r() {
                          var t = this.constructor;
                          return n.construct(i, [], t);
                        }
                        _(i, r),
                          (t.HTMLElementOrig = t.HTMLElement),
                          (t.HTMLElement = r);
                      })(t)
                    : e &&
                      (function (t) {
                        var i = t.Element,
                          n = t.HTMLElement,
                          r = t.document,
                          e = r.createElement,
                          s = new S(t),
                          u = new T(t, s);
                        Object.defineProperty(t, "customElements", {
                          enumerable: !0,
                          configurable: !0,
                          value: u,
                        });
                        var o = i.prototype,
                          h = o.attachShadow,
                          a = o.createShadowRoot;
                        function f() {
                          var t = this.constructor,
                            i = s.current();
                          if (!i) {
                            var n = s.getByConstructor(t);
                            i = e.call(r, n.name);
                          }
                          return k(i, t.prototype), i;
                        }
                        h &&
                          ((o.attachShadow = function (t) {
                            var i = h.apply(this, arguments);
                            return s.observe(i), i;
                          }),
                          (o.attachShadow.toString = function () {
                            return h.toString();
                          })),
                          a &&
                            ((o.createShadowRoot = function () {
                              var t = a.apply(this, arguments);
                              return s.observe(t), t;
                            }),
                            (o.createShadowRoot.toString = function () {
                              return a.toString();
                            })),
                          _(n, f),
                          (t.HTMLElementOrig = t.HTMLElement),
                          (t.HTMLElement = f),
                          f.call ||
                            ((f.apply = t.Function.apply),
                            (f.bind = t.Function.bind),
                            (f.call = t.Function.call));
                      })(t);
                }
              })(
                self,
                (function () {
                  return function () {};
                })()
              ),
              (function (t) {
                Di(t) &&
                  (function (t) {
                    if (!t.IntersectionObserver)
                      return (
                        (t.IntersectionObserver = ji),
                        void (t.IntersectionObserver._stub = ji)
                      );
                    var i = t.IntersectionObserver;
                    (t.IntersectionObserver = (function (t, i) {
                      return function (n, r) {
                        var e;
                        return 9 ===
                          (null == r || null === (e = r.root) || void 0 === e
                            ? void 0
                            : e.nodeType)
                          ? new i(n, r)
                          : new t(n, r);
                      };
                    })(t.IntersectionObserver, ji)),
                      (t.IntersectionObserver._stub = ji),
                      (t.IntersectionObserver._native = i);
                  })(t),
                  (function (t) {
                    t.IntersectionObserverEntry &&
                      !(
                        "isIntersecting" in t.IntersectionObserverEntry.prototype
                      ) &&
                      Object.defineProperty(
                        t.IntersectionObserverEntry.prototype,
                        "isIntersecting",
                        {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            return this.intersectionRatio > 0;
                          },
                        }
                      );
                  })(t);
              })(self),
              (function (t) {
                Gi(t) &&
                  (function (t) {
                    t.ResizeObserver ||
                      ((t.ResizeObserver = Fi), (t.ResizeObserver._stub = Fi));
                  })(t);
              })(self),
              (function (t) {
                t.AbortController ||
                  (Object.defineProperty(t, "AbortController", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: r,
                  }),
                  Object.defineProperty(t, "AbortSignal", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: e,
                  }));
              })(self));
          var Bi = "cls",
            $i = "clstu",
            Wi = "cls-1",
            Yi = "pc",
            Ki = "building",
            Ji = "mounting",
            Xi = "loading",
            Qi = "complete",
            Zi = "error";
          function tn(t) {
            return t.readyState != Xi && "uninitialized" != t.readyState;
          }
          function nn(t) {
            return t.readyState == Qi;
          }
          function rn(t, i) {
            en(t, tn, i);
          }
          function en(t, i, n) {
            var r = i(t);
            r
              ? n(t)
              : t.addEventListener("readystatechange", function e() {
                  i(t) &&
                    (r || ((r = !0), n(t)),
                    t.removeEventListener("readystatechange", e));
                });
          }
          function sn(t) {
            return new Promise(function (i) {
              rn(t, i);
            });
          }
          function un(t) {
            return new Promise(function (i) {
              en(t, nn, i);
            });
          }
          var on = ["fo-mustache"],
            hn = "latest";
          function an(t) {
            if (!t) return null;
            var i = t.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i),
              n = i ? i[2] : void 0,
              r = i ? i[3] : void 0;
            return n && r ? { extensionId: n, extensionVersion: r } : null;
          }
          function fn(t, i, n) {
            var r = t.document.createElement("script");
            (r.async = !0),
              ln(i)
                ? (n = "")
                : r.setAttribute(
                    on.indexOf(i) >= 0 ? "custom-template" : "custom-element",
                    i
                  ),
              r.setAttribute("data-script", i),
              r.setAttribute("i-fohtml-inserted", ""),
              _i(t.document, r),
              r.setAttribute("crossorigin", "anonymous");
            var e = (function (t, i, n, r) {
              var e = Ot.cdn,
                s = Mt().rtvVersion,
                u = n ? "-" + n : "";
              return ""
                .concat(e, "/rtv/")
                .concat(s, "/v0/")
                .concat(i)
                .concat(u)
                .concat(".js");
            })(t.location, i, n);
            return (r.src = e), r;
          }
          function cn(t, i, n, r) {
            for (
              var e =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4],
                s =
                  ":not([i-fohtml-loaded-new-version])" +
                  (e ? "" : ":not([i-fohtml-inserted])"),
                u = t.document.head.querySelectorAll(
                  'script[src*="/'.concat(i, '-"]').concat(s)
                ),
                o = [],
                h = 0;
              h < u.length;
              h++
            ) {
              var a = u[h],
                f = an(a.src);
              if (f) {
                var c = f.extensionId,
                  l = f.extensionVersion;
                c == i && (ln(i) || l == n || (l == hn && r)) && o.push(a);
              }
            }
            return o;
          }
          function ln(t) {
            return t.startsWith("_");
          }
          function vn(t, i, n, r) {
            Pn((t = wn(t)), t, i, n), r && On(t, i);
          }
          function dn(t, i, n, r) {
            var e = En(t),
              s = xn(e);
            Pn(s, e, i, n), r && On(s, i);
          }
          function mn(t, i) {
            return On((t = wn(t)), i);
          }
          function pn(t, i) {
            return On(xn(En(t)), i);
          }
          function bn(t, i) {
            var n = xn(En(t));
            return kn(n, i) ? On(n, i) : null;
          }
          function gn(t, i) {
            return In(xn(t), i);
          }
          function yn(t, i) {
            return Mn(xn(t), i);
          }
          function wn(t) {
            return t.__fo_TOP || (t.__fo_TOP = t);
          }
          function An(t, i) {
            var n = (t.ownerDocument || t).defaultView,
              r = i || wn(n);
            if (n && n != r && wn(n) == r)
              try {
                return n.frameElement;
              } catch (t) {}
            return null;
          }
          function En(t) {
            return t.nodeType
              ? (function (t) {
                  return mn(t, "fodoc");
                })(Zt(t)).getfoDoc(t)
              : t;
          }
          function xn(t) {
            var i = En(t);
            return i.isSingleDoc() ? i.win : i;
          }
          function On(t, i) {
            Bt(kn(t, i));
            var n = Tn(t)[i];
            return (
              n.obj ||
                (Bt(n.ctor),
                Bt(n.context),
                (n.obj = new n.ctor(n.context)),
                Bt(n.obj),
                (n.context = null),
                n.resolve && n.resolve(n.obj)),
              n.obj
            );
          }
          function Pn(t, i, n, r, e, s) {
            var u = Tn(t),
              o = u[n];
            o ||
              (o = u[n] =
                {
                  obj: null,
                  promise: null,
                  resolve: null,
                  reject: null,
                  context: null,
                  ctor: null,
                  sharedInstance: s || !1,
                }),
              (!e && o.ctor) ||
                ((o.ctor = r),
                (o.context = i),
                (o.sharedInstance = s || !1),
                o.resolve && On(t, n));
          }
          function In(t, i) {
            var n = Mn(t, i);
            if (n) return n;
            var r,
              e,
              s,
              u,
              o = Tn(t);
            return (
              (o[i] =
                ((e = (r = new a()).promise),
                (s = r.reject),
                (u = r.resolve),
                e.catch(function () {}),
                {
                  obj: null,
                  promise: e,
                  resolve: u,
                  reject: s,
                  context: null,
                  ctor: null,
                })),
              o[i].promise
            );
          }
          function Mn(t, i) {
            var n = Tn(t)[i];
            return n
              ? n.promise
                ? n.promise
                : (On(t, i), (n.promise = Promise.resolve(n.obj)))
              : null;
          }
          function Tn(t) {
            var i = t.__fo_SERVICES;
            return i || (i = t.__fo_SERVICES = {}), i;
          }
          function Sn(t) {
            return "function" == typeof t.dispose;
          }
          function _n(t, i) {
            if (Sn(i))
              try {
                (function (t) {
                  return Bt(Sn(t)), t;
                })(i).dispose();
              } catch (i) {
                qt().error("SERVICE", "failed to dispose service", t, i);
              }
          }
          function kn(t, i) {
            var n = t.__fo_SERVICES && t.__fo_SERVICES[i];
            return !(!n || !n.ctor);
          }
          function Rn(t, i, n, r) {
            return Cn(t, i, n, r).then(function (t) {
              return (function (t, i, n) {
                return $t(
                  t,
                  "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",
                  i,
                  n,
                  n,
                  n
                );
              })(t, i, n);
            });
          }
          function Cn(t, i, n, r) {
            var e = yn(t, i);
            if (e) return e;
            var s = En(t);
            return s
              .whenExtensionsKnown()
              .then(function () {
                var t = s.getExtensionVersion(n);
                return t ? mn(s.win, "extensions").waitForExtension(n, t) : null;
              })
              .then(function (n) {
                return n ? (r ? yn(t, i) : gn(t, i)) : null;
              });
          }
          var Nn,
            Dn = function (t) {
              return Cn(t, "access", "fo-access");
            },
            jn = function (t) {
              return Cn(t, "subscriptions", "fo-subscriptions");
            },
            Un = function (t) {
              return bn(t, "action");
            },
            Ln = function (t) {
              return Rn(t, "activity", "fo-analytics");
            },
            zn = function (t) {
              return En(t);
            },
            Hn = function (t) {
              return mn(t, "fodoc");
            },
            Gn = function (t) {
              return Cn(t, "fo-analytics-instrumentation", "fo-analytics");
            },
            Vn = function (t) {
              return (function (t, i, n) {
                var r = bn(t, i);
                return r ? Promise.resolve(r) : Cn(t, i, "fo-bind");
              })(t, "bind");
            },
            Fn = function (t) {
              return gn(t, "cid");
            },
            qn = function (t) {
              return mn(t, "crypto");
            },
            Bn = function (t) {
              return pn(t, "documentInfo").get();
            },
            $n = function (t) {
              return mn(t, "extensions");
            },
            Wn = function (t) {
              return pn(t, "history");
            },
            Yn = function (t) {
              return bn(t, "loadingIndicator");
            },
            Kn = function (t) {
              return pn(t, "mutator");
            },
            Jn = function (t) {
              return mn(t, "performance");
            },
            Xn = function (t) {
              return mn(t, "platform");
            },
            Qn = function (t) {
              return mn(t, "preconnect");
            },
            Zn = function (t) {
              return pn(t, "resources");
            },
            tr = function (t) {
              return gn(t, "storage");
            },
            ir = function (t) {
              return (function (t, i) {
                return On(t, "timer");
              })(t);
            },
            nr = function (t) {
              return bn(t, "url-replace");
            },
            rr = function (t) {
              return Cn(t, "geo", "fo-geo", !0);
            },
            er = function (t) {
              return bn(t, "url");
            },
            sr = function (t) {
              return pn(t, "viewer");
            },
            ur = function (t) {
              return mn(t, "vsync");
            },
            or = function (t) {
              return pn(t, "viewport");
            },
            hr = function (t) {
              return mn(t, "xhr");
            },
            ar = "prerender",
            fr = "visible",
            cr = "hidden",
            lr = "paused",
            vr = "inactive",
            dr = (function () {
              function t() {
                this.Lt = null;
              }
              var i = t.prototype;
              return (
                (i.add = function (t) {
                  var i = this;
                  return (
                    this.Lt || (this.Lt = []),
                    this.Lt.push(t),
                    function () {
                      i.remove(t);
                    }
                  );
                }),
                (i.remove = function (t) {
                  this.Lt && $(this.Lt, t);
                }),
                (i.removeAll = function () {
                  this.Lt && (this.Lt.length = 0);
                }),
                (i.fire = function (t) {
                  if (this.Lt)
                    for (var i, n = o(this.Lt, !0); !(i = n()).done; )
                      (0, i.value)(t);
                }),
                (i.getHandlerCount = function () {
                  var t, i;
                  return null !==
                    (t =
                      null === (i = this.Lt) || void 0 === i
                        ? void 0
                        : i.length) && void 0 !== t
                    ? t
                    : 0;
                }),
                t
              );
            })(),
            mr = (function () {
              function t() {
                (this.Ut = A()), (this.Ht = null);
              }
              var i = t.prototype;
              return (
                (i.get = function (t) {
                  var i = this.Ut[t];
                  return null == i ? null : i;
                }),
                (i.whenSignal = function (t) {
                  var i,
                    n = null === (i = this.Ht) || void 0 === i ? void 0 : i[t];
                  if (!n) {
                    var r = this.Ut[t];
                    (n =
                      null != r
                        ? {
                            promise:
                              "number" == typeof r
                                ? Promise.resolve(r)
                                : Promise.reject(r),
                          }
                        : new a()),
                      this.Ht || (this.Ht = A()),
                      (this.Ht[t] = n);
                  }
                  return n.promise;
                }),
                (i.signal = function (t, i) {
                  var n;
                  if (null == this.Ut[t]) {
                    var r = null != i ? i : Date.now();
                    this.Ut[t] = r;
                    var e =
                      null === (n = this.Ht) || void 0 === n ? void 0 : n[t];
                    null != e &&
                      e.resolve &&
                      (e.resolve(r), (e.resolve = void 0), (e.reject = void 0));
                  }
                }),
                (i.rejectSignal = function (t, i) {
                  var n;
                  if (null == this.Ut[t]) {
                    this.Ut[t] = i;
                    var r =
                      null === (n = this.Ht) || void 0 === n ? void 0 : n[t];
                    null != r &&
                      r.reject &&
                      (r.reject(i),
                      r.promise.catch(function () {}),
                      (r.resolve = void 0),
                      (r.reject = void 0));
                  }
                }),
                (i.reset = function (t) {
                  var i;
                  this.Ut[t] && delete this.Ut[t];
                  var n = null === (i = this.Ht) || void 0 === i ? void 0 : i[t];
                  n && !n.resolve && delete this.Ht[t];
                }),
                t
              );
            })(),
            pr = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
            br = {
              getPropertyPriority: function () {
                return "";
              },
              getPropertyValue: function () {
                return "";
              },
            };
          function gr(t, i, n) {
            if (Pr(i)) return i;
            Nn || (Nn = A());
            var r = Nn[i];
            if (!r || n) {
              if (((r = i), void 0 === t[i])) {
                var e = (function (t) {
                    return t.charAt(0).toUpperCase() + t.slice(1);
                  })(i),
                  s = (function (t, i) {
                    for (var n = 0; n < pr.length; n++) {
                      var r = pr[n] + i;
                      if (void 0 !== t[r]) return r;
                    }
                    return "";
                  })(t, e);
                void 0 !== t[s] && (r = s);
              }
              n || (Nn[i] = r);
            }
            return r;
          }
          function yr(t, i) {
            var n = t.style;
            for (var r in i) n.setProperty(gr(n, r), String(i[r]), "important");
          }
          function wr(t, i, n, r, e) {
            var s = gr(t.style, i, e);
            if (s) {
              var u = r ? n + r : n;
              Pr(s) ? t.style.setProperty(s, u) : (t.style[s] = u);
            }
          }
          function Ar(t, i) {
            for (var n in i) wr(t, n, i[n]);
          }
          function Er(t, i) {
            void 0 === i && (i = t.hasAttribute("hidden")),
              i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "");
          }
          function xr(t) {
            return "".concat(t, "px");
          }
          function Or(t, i) {
            return t.getComputedStyle(i) || br;
          }
          function Pr(t) {
            return t.startsWith("--");
          }
          function Ir(t) {
            var i = t[gr(t, "visibilityState", !0)];
            if (i) return i;
            var n = gr(t, "hidden", !0);
            return n in t && t[n] ? cr : fr;
          }
          function Mr(t, i) {
            if (t.addEventListener) {
              var n = Sr(t);
              n && t.addEventListener(n, i);
            }
          }
          function Tr(t, i) {
            if (t.removeEventListener) {
              var n = Sr(t);
              n && t.removeEventListener(n, i);
            }
          }
          function Sr(t) {
            var i = gr(t, "hidden", !0),
              n = i.indexOf("Hidden");
            return -1 != n
              ? i.substring(0, n) + "Visibilitychange"
              : "visibilitychange";
          }
          var _r = (function () {
              function t() {}
              return (
                (t.getTop = function (t) {
                  return t.top;
                }),
                (t.getLocation = function (t) {
                  return t.location;
                }),
                (t.getDocumentReferrer = function (t) {
                  return t.document.referrer;
                }),
                (t.getHostname = function (t) {
                  return t.location.hostname;
                }),
                (t.getUserAgent = function (t) {
                  return t.navigator.userAgent;
                }),
                (t.getUserLanguage = function (t) {
                  return t.navigator.userLanguage || t.navigator.language;
                }),
                (t.getDevicePixelRatio = function () {
                  return self.devicePixelRatio || 1;
                }),
                (t.getSendBeacon = function (t) {
                  if (t.navigator.sendBeacon)
                    return t.navigator.sendBeacon.bind(t.navigator);
                }),
                (t.getXMLHttpRequest = function (t) {
                  return t.XMLHttpRequest;
                }),
                (t.getImage = function (t) {
                  return t.Image;
                }),
                t
              );
            })(),
            kr = "__fo__",
            Rr = "-fodoc-ext-known",
            Cr = "-fodoc-first-visible",
            Nr = "-fodoc-next-visible",
            Dr = (function () {
              function t(t, i, n) {
                (this.win = t),
                  (this.Gt = null),
                  i &&
                    ((this.Gt = new Ur(t, { params: Hr(t, n) })),
                    (t.document.__foDOC = this.Gt));
              }
              var i = t.prototype;
              return (
                (i.isSingleDoc = function () {
                  return !!this.Gt;
                }),
                (i.getSingleDoc = function () {
                  return Bt(this.Gt);
                }),
                (i.Vt = function (t) {
                  return t.everAttached && "function" == typeof t.getfoDoc
                    ? t.getfoDoc()
                    : null;
                }),
                (i.getfoDocIfAvailable = function (t) {
                  for (var i = t; i; ) {
                    var n = this.Vt(t);
                    if (n) return n;
                    var r = xi(i);
                    if (!r) break;
                    var e = r.__foDOC;
                    if (e) return e;
                    i = r.host ? r.host : An(r, this.win);
                  }
                  return null;
                }),
                (i.getfoDoc = function (t) {
                  var i = this.getfoDocIfAvailable(t);
                  if (!i) throw qt().createError("No fodoc found for", t);
                  return i;
                }),
                (i.installShadowDoc = function (t, i, n) {
                  Bt(!i.__foDOC);
                  var r = new Lr(this.win, t, i, n);
                  return (i.__foDOC = r), r;
                }),
                (i.installFieDoc = function (t, i, n) {
                  var r = i.document;
                  Bt(!r.__foDOC);
                  var e = Bt(i.frameElement),
                    s = new zr(i, t, this.getfoDoc(e), n);
                  return (r.__foDOC = s), s;
                }),
                t
              );
            })(),
            jr = (function () {
              function t(t, i, n) {
                var r = this;
                (this.win = t),
                  (this.Ft = A()),
                  (this.Bt = i),
                  (this.qt = (n && n.signals) || new mr()),
                  (this.$t = (n && n.params) || A()),
                  (this.Wt = null),
                  (this.Kt = {});
                var e,
                  s = this.$t.visibilityState;
                Bt(
                  !s ||
                    "prerender" === (e = s) ||
                    "visible" === e ||
                    "hidden" === e ||
                    "paused" === e ||
                    "inactive" === e
                ),
                  (this.Yt = (n && n.visibilityState) || s || null),
                  (this.J = null),
                  (this.Jt = new dr()),
                  (this.Xt = null),
                  (this.Qt = []);
                var u = this.Zt.bind(this);
                this.Bt && this.Qt.push(this.Bt.onVisibilityChanged(u)),
                  Mr(this.win.document, u),
                  this.Qt.push(function () {
                    return Tr(r.win.document, u);
                  }),
                  this.Zt();
              }
              var i = t.prototype;
              return (
                (i.dispose = function () {
                  (function (t) {
                    var i = Tn(t),
                      n = function (t) {
                        if (!Object.prototype.hasOwnProperty.call(i, t))
                          return "continue";
                        var n = i[t];
                        if (n.sharedInstance) return "continue";
                        n.obj
                          ? _n(t, n.obj)
                          : n.promise &&
                            n.promise.then(function (i) {
                              return _n(t, i);
                            });
                      };
                    for (var r in i) n(r);
                  })(this),
                    this.Qt.forEach(function (t) {
                      return t();
                    });
                }),
                (i.isSingleDoc = function () {
                  return Bt(null);
                }),
                (i.getParent = function () {
                  return this.Bt;
                }),
                (i.signals = function () {
                  return this.qt;
                }),
                (i.getParam = function (t) {
                  var i = this.$t[t];
                  return null == i ? null : i;
                }),
                (i.getMeta = function () {
                  var t = this;
                  return (
                    this.Wt ||
                      ((this.Wt = A()),
                      (function (i, n) {
                        for (var r = i.length, e = 0; e < r; e++)
                          void 0,
                            void 0,
                            (u = (s = i[e]).getAttribute("name")),
                            (o = s.getAttribute("content")),
                            u &&
                              null !== o &&
                              void 0 === t.Wt[u] &&
                              (t.Wt[u] = o);
                        var s, u, o;
                      })(this.win.document.head.querySelectorAll("meta[name]"))),
                    A(this.Wt)
                  );
                }),
                (i.getMetaByName = function (t) {
                  if (!t) return null;
                  var i = this.getMeta()[t];
                  return void 0 !== i ? i : null;
                }),
                (i.setMetaByName = function (t, i) {
                  Bt(null);
                }),
                (i.declaresExtension = function (t, i) {
                  var n = this.Kt[t];
                  return !(!n || (i && n !== i));
                }),
                (i.declareExtension = function (t, i) {
                  Bt(!this.Kt[t] || this.Kt[t] === i), (this.Kt[t] = i);
                }),
                (i.getExtensionVersion = function (t) {
                  return this.Kt[t] || null;
                }),
                (i.setExtensionsKnown = function () {
                  this.qt.signal(Rr);
                }),
                (i.whenExtensionsKnown = function () {
                  return this.qt.whenSignal(Rr);
                }),
                (i.getRootNode = function () {
                  return Bt(null);
                }),
                (i.getHeadNode = function () {}),
                (i.isBodyAvailable = function () {
                  return Bt(!1);
                }),
                (i.getBody = function () {
                  return Bt(null);
                }),
                (i.waitForBodyOpen = function () {
                  return Bt(null);
                }),
                (i.isReady = function () {
                  return Bt(null);
                }),
                (i.whenReady = function () {
                  return Bt(null);
                }),
                (i.getUrl = function () {
                  return Bt(null);
                }),
                (i.getElementById = function (t) {
                  return this.getRootNode().getElementById(t);
                }),
                (i.contains = function (t) {
                  return this.getRootNode().contains(t);
                }),
                (i.overrideVisibilityState = function (t) {
                  this.Yt != t && ((this.Yt = t), this.Zt());
                }),
                (i.Zt = function () {
                  for (
                    var t, i = Ir(this.win.document), n = fr, r = this.Bt;
                    r;
                    r = r.getParent()
                  )
                    if (r.getVisibilityState() != fr) {
                      n = r.getVisibilityState();
                      break;
                    }
                  var e = this.Yt || fr;
                  if (
                    ((t =
                      e == fr && n == fr && i == fr
                        ? fr
                        : i == cr && e == lr
                        ? i
                        : e == lr || e == vr
                        ? e
                        : n == lr || n == vr
                        ? n
                        : e == ar || i == ar || n == ar
                        ? ar
                        : cr),
                    this.J != t)
                  ) {
                    if (t == fr) {
                      var s,
                        u = this.win.performance,
                        o = Math.floor(
                          null !== (s = u.timeOrigin) && void 0 !== s
                            ? s
                            : u.timing.navigationStart
                        );
                      null != this.J && (o += Math.floor(u.now())),
                        (this.Xt = o),
                        this.qt.signal(Cr, o),
                        this.qt.signal(Nr, o);
                    } else this.qt.reset(Nr);
                    (this.J = t), this.Jt.fire();
                  }
                }),
                (i.whenFirstVisible = function () {
                  return this.qt.whenSignal(Cr).then(function () {});
                }),
                (i.whenNextVisible = function () {
                  return this.qt.whenSignal(Nr).then(function () {});
                }),
                (i.getFirstVisibleTime = function () {
                  return this.qt.get(Cr);
                }),
                (i.getLastVisibleTime = function () {
                  return this.Xt;
                }),
                (i.getVisibilityState = function () {
                  return Bt(this.J);
                }),
                (i.isVisible = function () {
                  return this.J == fr;
                }),
                (i.hasBeenVisible = function () {
                  return null != this.getLastVisibleTime();
                }),
                (i.onVisibilityChanged = function (t) {
                  return this.Jt.add(t);
                }),
                (i.registerSingleton = function (t) {
                  return !this.Ft[t] && ((this.Ft[t] = !0), !0);
                }),
                t
              );
            })(),
            Ur = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t, n) {
                var r;
                return (
                  ((r = i.call(this, t, null, n)).ti = r.win.document.body
                    ? Promise.resolve(r.win.document.body)
                    : yi(r.win.document).then(function () {
                        return r.getBody();
                      })),
                  (r.ii = sn(r.win.document)),
                  r
                );
              }
              var r = n.prototype;
              return (
                (r.isSingleDoc = function () {
                  return !0;
                }),
                (r.getRootNode = function () {
                  return this.win.document;
                }),
                (r.getUrl = function () {
                  return _r.getLocation(this.win).href;
                }),
                (r.getHeadNode = function () {
                  return this.win.document.head;
                }),
                (r.isBodyAvailable = function () {
                  return !!this.win.document.body;
                }),
                (r.getBody = function () {
                  return this.win.document.body;
                }),
                (r.waitForBodyOpen = function () {
                  return this.ti;
                }),
                (r.isReady = function () {
                  return tn(this.win.document);
                }),
                (r.whenReady = function () {
                  return this.ii;
                }),
                n
              );
            })(jr),
            Lr = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t, n, r, e) {
                var s;
                ((s = i.call(this, t, null, e)).ni = n),
                  (s.ri = r),
                  (s.ei = null);
                var u = new a();
                (s.ti = u.promise), (s.si = u.resolve), (s.oi = !1);
                var o = new a();
                return (s.ii = o.promise), (s.ui = o.resolve), s;
              }
              var r = n.prototype;
              return (
                (r.isSingleDoc = function () {
                  return !1;
                }),
                (r.getRootNode = function () {
                  return this.ri;
                }),
                (r.getUrl = function () {
                  return this.ni;
                }),
                (r.getHeadNode = function () {
                  return this.ri;
                }),
                (r.isBodyAvailable = function () {
                  return !!this.ei;
                }),
                (r.getBody = function () {
                  return this.ei;
                }),
                (r.setBody = function (t) {
                  Bt(!this.ei), (this.ei = t), this.si(t), (this.si = void 0);
                }),
                (r.waitForBodyOpen = function () {
                  return this.ti;
                }),
                (r.isReady = function () {
                  return this.oi;
                }),
                (r.setReady = function () {
                  Bt(!this.oi), (this.oi = !0), this.ui(), (this.ui = void 0);
                }),
                (r.whenReady = function () {
                  return this.ii;
                }),
                (r.getMeta = function () {
                  return A(this.Wt);
                }),
                (r.setMetaByName = function (t, i) {
                  Bt(t), this.Wt || (this.Wt = A()), (this.Wt[t] = i);
                }),
                n
              );
            })(jr),
            zr = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t, n, r, e) {
                var s;
                ((s = i.call(this, t, r, e)).ni = n),
                  (s.ti = s.win.document.body
                    ? Promise.resolve(s.win.document.body)
                    : yi(s.win.document).then(function () {
                        return s.getBody();
                      })),
                  (s.oi = !1);
                var u = new a();
                return (s.ii = u.promise), (s.ui = u.resolve), s;
              }
              var r = n.prototype;
              return (
                (r.isSingleDoc = function () {
                  return !1;
                }),
                (r.getRootNode = function () {
                  return this.win.document;
                }),
                (r.getUrl = function () {
                  return this.ni;
                }),
                (r.getHeadNode = function () {
                  return this.win.document.head;
                }),
                (r.isBodyAvailable = function () {
                  return !!this.win.document.body;
                }),
                (r.getBody = function () {
                  return this.win.document.body;
                }),
                (r.waitForBodyOpen = function () {
                  return this.ti;
                }),
                (r.isReady = function () {
                  return this.oi;
                }),
                (r.whenReady = function () {
                  return this.ii;
                }),
                (r.setReady = function () {
                  Bt(!this.oi), (this.oi = !0), this.ui(), (this.ui = void 0);
                }),
                n
              );
            })(jr);
          function Hr(t, i) {
            var n = A();
            return (
              i
                ? Object.assign(n, i)
                : (t.name &&
                    0 == t.name.indexOf(kr) &&
                    Object.assign(n, gt(t.name.substring(kr.length))),
                  t.location &&
                    t.location.hash &&
                    Object.assign(n, gt(t.location.hash))),
              n
            );
          }
          function Gr(t) {
            if (!t.hasAttribute("src") && "srcset" in t == 0) {
              var i = t.getAttribute("srcset") || "",
                n = /\S+/.exec(i);
              if (null == n) return;
              var r = n[0];
              t.setAttribute("src", r);
            }
          }
          var Vr = "nodisplay",
            Fr = "fixed",
            qr = "fixed-height",
            Br = "responsive",
            $r = "container",
            Wr = "fill",
            Yr = "flex-item",
            Kr = "fluid",
            Jr = "intrinsic",
            Xr =
              /^fo\-(video|.+player)|fo-BRIGHTCOVE|fo-DAILYMOTION|fo-YOUTUBE|fo-VIMEO|fo-IMA-VIDEO/i;
          function Qr(t) {
            if (
              "nodisplay" === (i = t) ||
              "fixed" === i ||
              "fixed-height" === i ||
              "responsive" === i ||
              "container" === i ||
              "fill" === i ||
              "flex-item" === i ||
              "fluid" === i ||
              "intrinsic" === i
            )
              return t;
            var i;
          }
          function Zr(t) {
            return "i-fohtml-layout-" + t;
          }
          function te(t) {
            return (
              t == Fr ||
              t == qr ||
              t == Br ||
              t == Wr ||
              t == Yr ||
              t == Kr ||
              t == Jr
            );
          }
          function ie(t) {
            return "number" == typeof t
              ? t + "px"
              : t &&
                /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(
                  t
                )
              ? /^\d+(\.\d+)?$/.test(t)
                ? t + "px"
                : t
              : void 0;
          }
          function ne(t) {
            !(function (t) {
              ht(
                /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(
                  null != t ? t : ""
                ),
                "Invalid length value: %s",
                t
              );
            })(t);
            var i = /[a-z]+/i.exec(null != t ? t : "");
            return ht(i, "Failed to read units from %s", t), i[0];
          }
          function re(t) {
            var i = parseFloat(t);
            return J(i) ? i : void 0;
          }
          function ee(t, i) {
            t.classList.add("i-fohtml-fill-content"),
              i && t.classList.add("i-fohtml-replaced-content");
          }
          function se(t, i, n, r) {
            for (var e, s = o(F(t), !0); !(e = s()).done; ) {
              var u = e.value,
                h = i.getAttribute(u);
              null !== h ? n.setAttribute(u, h) : r && n.removeAttribute(u);
            }
          }
          var ue,
            oe = "fo:attached",
            he = "fo:load-start",
            ae = "fo:load-end",
            fe = "ready-upgrade",
            ce = "upgraded",
            le = "built",
            ve = "mounted",
            de = "load-start",
            me = "render-start",
            pe = "load-end",
            be = "unload",
            ge = (function () {
              function t(t, i) {
                (this.t = t), (this.Nt = i), (this.hi = {}), (this.ai = null);
              }
              var i = t.prototype;
              return (
                (i.start = function () {
                  (this.ai = this.hi), (this.hi = {});
                }),
                (i.resolveMatchQuery = function (t) {
                  return "1" === this.ci(t, ye, "1");
                }),
                (i.resolveListQuery = function (t) {
                  return this.ci(t, we, "");
                }),
                (i.complete = function () {
                  for (var t in this.ai)
                    t in this.hi || Ae(this.ai[t], this.Nt, !1);
                  this.ai = null;
                }),
                (i.dispose = function () {
                  for (var t in this.hi) Ae(this.hi[t], this.Nt, !1);
                  this.hi = {};
                }),
                (i.ci = function (t, i, n) {
                  if (!t.trim()) return n;
                  var r = this.hi[t];
                  return (
                    r || (et(this.ai), (r = this.ai[t])),
                    r || Ae((r = i(this.t, t)), this.Nt, !0),
                    (this.hi[t] = r),
                    (function (t) {
                      for (var i = 0; i < t.length; i++) {
                        var n = t[i],
                          r = n.query,
                          e = n.value;
                        if (!r || r.matches) return e;
                      }
                      return "";
                    })(r)
                  );
                }),
                t
              );
            })();
          function ye(t, i) {
            return [
              { query: t.matchMedia(i), value: "1" },
              { query: null, value: "" },
            ];
          }
          function we(t, i) {
            return i
              .split(",")
              .map(function (i) {
                if (0 != (i = i.replace(/\s+/g, " ").trim()).length) {
                  var n, r, e;
                  if (")" == i.charAt(i.length - 1)) {
                    var s = 1;
                    for (e = i.length - 2; e >= 0; e--) {
                      var u = i.charAt(e);
                      if (("(" == u ? s-- : ")" == u && s++, 0 == s)) break;
                    }
                    var o = e - 1;
                    if (e > 0)
                      for (e--; e >= 0; e--) {
                        var h = i.charAt(e);
                        if (
                          !(
                            "%" == h ||
                            "-" == h ||
                            "_" == h ||
                            (h >= "a" && h <= "z") ||
                            (h >= "A" && h <= "Z") ||
                            (h >= "0" && h <= "9")
                          )
                        )
                          break;
                      }
                    if (e >= o) return null;
                  } else
                    for (e = i.length - 2; e >= 0; e--) {
                      var a = i.charAt(e);
                      if (
                        !(
                          "%" == a ||
                          "." == a ||
                          (a >= "a" && a <= "z") ||
                          (a >= "A" && a <= "Z") ||
                          (a >= "0" && a <= "9")
                        )
                      )
                        break;
                    }
                  return (
                    e >= 0
                      ? ((n = i.substring(0, e + 1).trim()),
                        (r = i.substring(e + 1).trim()))
                      : ((r = i), (n = void 0)),
                    r ? { query: n ? t.matchMedia(n) : null, value: r } : null
                  );
                }
              })
              .filter(Boolean);
          }
          function Ae(t, i, n) {
            for (var r = 0; r < t.length; r++) {
              var e = t[r].query;
              e &&
                (void 0 !== e.onchange
                  ? (e.onchange = n ? i : null)
                  : n
                  ? e.addListener(i)
                  : e.removeListener(i));
            }
          }
          function Ee(t) {
            var i = t.ownerDocument || t;
            return (
              (ue && ue.ownerDocument === i) || (ue = i.createElement("div")), xe
            );
          }
          function xe(t) {
            return (function (t, i) {
              et(1 === i.length), (t.innerHTML = i[0]);
              var n = t.firstElementChild;
              return et(n), et(!n.nextElementSibling), t.removeChild(n), n;
            })(ue, t);
          }
          var Oe = [
              '<i-fohtml-sizer class=i-fohtml-sizer slot=i-fohtml-svc><img alt="" role=presentation aria-hidden=true class=i-fohtml-intrinsic-sizer></i-fohtml-sizer>',
            ],
            Pe = {
              "fo-PIXEL": { width: "0px", height: "0px" },
              "fo-ANALYTICS": { width: "1px", height: "1px" },
              "fo-AUDIO": null,
              "fo-SOCIAL-SHARE": { width: "60px", height: "44px" },
            };
          function Ie(t) {
            var i = t.getAttribute("layout"),
              n = t.getAttribute("width"),
              r = t.getAttribute("height"),
              e = t.getAttribute("sizes"),
              s = t.getAttribute("heights"),
              u = i ? Qr(i) : null;
            ht(void 0 !== u, 'Invalid "layout" value: %s, %s', i, t);
            var o = n && "auto" != n ? ie(n) : n;
            ht(void 0 !== o, 'Invalid "width" value: %s, %s', n, t);
            var h,
              a,
              f,
              c,
              l = r && "fluid" != r ? ie(r) : r;
            if (
              (ht(void 0 !== l, 'Invalid "height" value: %s, %s', r, t),
              (u && u != Fr && u != qr) ||
                (o && l) ||
                ((c = (c = t.tagName).toUpperCase()), void 0 === Pe[c]))
            )
              (h = o), (a = l);
            else {
              var v = (function (t) {
                var i = t.tagName.toUpperCase();
                if ((et(void 0 !== Pe[i]), !Pe[i])) {
                  var n = t.ownerDocument,
                    r = i.replace(/^fo\-/, ""),
                    e = n.createElement(r);
                  (e.controls = !0),
                    Ar(e, { position: "absolute", visibility: "hidden" }),
                    n.body.appendChild(e),
                    (Pe[i] = {
                      width: (e.offsetWidth || 1) + "px",
                      height: (e.offsetHeight || 1) + "px",
                    }),
                    n.body.removeChild(e);
                }
                return Pe[i];
              })(t);
              (h = o || u == qr ? o : v.width), (a = l || v.height);
            }
            return (
              ((f =
                u ||
                (h || a
                  ? "fluid" == a
                    ? Kr
                    : !a || (h && "auto" != h)
                    ? a && h && (e || s)
                      ? Br
                      : Fr
                    : qr
                  : $r)) != Fr &&
                f != qr &&
                f != Br &&
                f != Jr) ||
                ht(a, 'The "height" attribute is missing: %s', t),
              f == qr &&
                ht(
                  !h || "auto" == h,
                  'The "width" attribute must be missing or "auto": %s',
                  t
                ),
              (f != Fr && f != Br && f != Jr) ||
                ht(
                  h && "auto" != h,
                  'The "width" attribute must be present and not "auto": %s',
                  t
                ),
              f == Br || f == Jr
                ? ht(
                    ne(h) == ne(a),
                    'Length units should be the same for "width" and "height": %s, %s, %s',
                    n,
                    r,
                    t
                  )
                : ht(null === s, '"heights" attribute must be missing: %s', t),
              { layout: f, width: h, height: a }
            );
          }
          var Me,
            Te = "EXPERIMENTS",
            Se = "fo-experiment-toggles",
            _e = "__fo__EXPERIMENT_TOGGLES";
          function ke(t, i) {
            return !!Ce(t)[i];
          }
          function Re(t, i, n, r) {
            var e = ke(t, i),
              s = null != n ? n : !e;
            if (s != e && ((Ce(t)[i] = s), !r)) {
              var u = Ne(t);
              (u[i] = s),
                (function (t, i) {
                  var n = [];
                  for (var r in i) n.push((!1 === i[r] ? "-" : "") + r);
                  try {
                    var e;
                    null === (e = t.localStorage) ||
                      void 0 === e ||
                      e.setItem(Se, n.join(","));
                  } catch (t) {
                    Vt().error(Te, "Failed to save experiments to localStorage.");
                  }
                })(t, u),
                Vt().warn(
                  Te,
                  '"%s" experiment %s for the domain "%s". See: https://fo.dev/documentation/guides-and-tutorials/learn/experimental',
                  i,
                  s ? "enabled" : "disabled",
                  t.location.hostname
                );
            }
            return s;
          }
          function Ce(t) {
            var i, n, r, e, s;
            if (t[_e]) return t[_e];
            t[_e] = A();
            var u = t[_e];
            et(u);
            var h = D(
              D({}, null !== (i = t.fo_CONFIG) && void 0 !== i ? i : {}),
              null !== (n = t.fo_EXP) && void 0 !== n
                ? n
                : at(
                    (null === (r = t.__fo_EXP) || void 0 === r
                      ? void 0
                      : r.textContent) || "{}"
                  )
            );
            for (var a in h) {
              var f = h[a];
              "number" == typeof f &&
                f >= 0 &&
                f <= 1 &&
                (u[a] = Math.random() < f);
            }
            var c =
              null === (e = t.fo_CONFIG) || void 0 === e
                ? void 0
                : e["allow-doc-opt-in"];
            if (V(c) && c.length) {
              var l = t.document.head.querySelector(
                'meta[name="fo-experiments-opt-in"]'
              );
              if (l)
                for (
                  var v,
                    d,
                    m = o(
                      (null === (v = l.getAttribute("content")) || void 0 === v
                        ? void 0
                        : v.split(",")) || [],
                      !0
                    );
                  !(d = m()).done;
  
                ) {
                  var p = d.value;
                  c.includes(p) && (u[p] = !0);
                }
            }
            Object.assign(u, Ne(t));
            var b =
              null === (s = t.fo_CONFIG) || void 0 === s
                ? void 0
                : s["allow-url-opt-in"];
            if (V(b) && b.length)
              for (
                var g,
                  y = gt(t.location.originalHash || t.location.hash),
                  w = o(b, !0);
                !(g = w()).done;
  
              ) {
                var E = g.value,
                  x = y["e-".concat(E)];
                "1" == x && (u[E] = !0), "0" == x && (u[E] = !1);
              }
            return u;
          }
          function Ne(t) {
            var i,
              n = "";
            try {
              var r;
              "localStorage" in t &&
                (n =
                  null !== (r = t.localStorage.getItem(Se)) && void 0 !== r
                    ? r
                    : "");
            } catch (t) {
              qt().warn(Te, "Failed to retrieve experiments from localStorage.");
            }
            for (
              var e,
                s =
                  (null === (i = n) || void 0 === i
                    ? void 0
                    : i.split(/\s*,\s*/g)) || [],
                u = A(),
                h = o(s, !0);
              !(e = h()).done;
  
            ) {
              var a = e.value;
              a && ("-" == a[0] ? (u[a.substr(1)] = !1) : (u[a] = !0));
            }
            return u;
          }
          function De(t, i, n, r) {
            var e = t,
              s = n,
              u = function (t) {
                try {
                  return s(t);
                } catch (t) {
                  var i, n;
                  throw (
                    (null === (i = (n = self).__fo_REPORT_ERROR) ||
                      void 0 === i ||
                      i.call(n, t),
                    t)
                  );
                }
              },
              o = (function () {
                if (void 0 !== Me) return Me;
                Me = !1;
                try {
                  var t = {
                    get capture() {
                      return (Me = !0), !1;
                    },
                  };
                  self.addEventListener("test-options", null, t),
                    self.removeEventListener("test-options", null, t);
                } catch (t) {}
                return Me;
              })(),
              h = !(null == r || !r.capture);
            return (
              e.addEventListener(i, u, o ? r : h),
              function () {
                null == e || e.removeEventListener(i, u, o ? r : h),
                  (s = null),
                  (e = null),
                  (u = null);
              }
            );
          }
          var je = "Failed to load:";
          function Ue(t, i, n, r) {
            return De(t, i, n, r);
          }
          function Le(t) {
            return t.data;
          }
          function ze(t, i, n, r) {
            var e = n,
              s = De(
                t,
                i,
                function (t) {
                  try {
                    e(t);
                  } finally {
                    (e = null), s();
                  }
                },
                r
              );
            return s;
          }
          function He(t) {
            var i, n;
            if (
              (function (t) {
                return !!(
                  t.complete ||
                  "complete" == t.readyState ||
                  (Ge(t) && t.readyState > 0) ||
                  (t.document && "complete" == t.document.readyState)
                );
              })(t)
            )
              return Promise.resolve(t);
            var r = Ge(t);
            return r && t.__fo_MEDIA_LOAD_FAILURE_SRC === t.currentSrc
              ? Promise.reject(t)
              : new Promise(function (e, s) {
                  if (
                    ((i = r
                      ? ze(t, "loadedmetadata", e, { capture: !0 })
                      : ze(t, "load", e)),
                    t.tagName)
                  ) {
                    var u = t;
                    if (
                      r &&
                      !t.hasAttribute("src") &&
                      !(u = li(t, function (t) {
                        return "SOURCE" === t.tagName;
                      }))
                    )
                      return s(new Error("Media has no source."));
                    n = ze(u, "error", s);
                  }
                }).then(
                  function () {
                    return n && n(), t;
                  },
                  function () {
                    i && i(),
                      (function (t) {
                        Ge(t) &&
                          (t.__fo_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                        var i = t;
                        throw (
                          (i && i.src && (i = i.src), Vt().createError(je, i))
                        );
                      })(t);
                  }
                );
          }
          function Ge(t) {
            return "AUDIO" === t.tagName || "VIDEO" === t.tagName;
          }
          var Ve = {
            "fo-dynamic-css-classes": "[custom-element=fo-dynamic-css-classes]",
            variant: "fo-experiment",
            "fo-story-render": "fo-story[standalone]",
          };
          function Fe(t) {
            var i = t.document;
            return (
              Bt(i.body),
              Object.keys(Ve).filter(function (t) {
                return i.querySelector(Ve[t]);
              })
            );
          }
          function qe(t, i, n, r, e) {
            var s = t.getHeadNode(),
              u = (function (t, i, n, r) {
                var e = t.__fo_CSS_SM;
                e || (e = t.__fo_CSS_SM = A());
                var s = !n && r && "fo-custom" != r && "fo-keyframes" != r,
                  u = n ? "fo-runtime" : s ? "fo-extension=".concat(r) : null;
                if (u) {
                  var o = Be(t, e, u);
                  if (o)
                    return (
                      "STYLE" == o.tagName &&
                        o.textContent !== i &&
                        (o.textContent = i),
                      o
                    );
                }
                var h = (t.ownerDocument || t).createElement("style");
                h.textContent = i;
                var a = null;
                return (
                  n
                    ? h.setAttribute("fo-runtime", "")
                    : s
                    ? (h.setAttribute("fo-extension", r || ""),
                      (a = Be(t, e, "fo-runtime")))
                    : (r && h.setAttribute(r, ""), (a = t.lastChild)),
                  (function (t, i) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                    if (n) {
                      var r = n.nextSibling;
                      t.insertBefore(i, r);
                    } else Ai(t, i);
                  })(t, h, a),
                  u && (e[u] = h),
                  h
                );
              })(
                s,
                (function (t, i) {
                  var n = t.__fo_CSS_TR;
                  return n ? n(i) : i;
                })(s, i),
                r || !1,
                e || null
              );
            if (n) {
              var o = t.getRootNode();
              if (Ke(o, u)) return n(u), u;
              var h = setInterval(function () {
                Ke(o, u) && (clearInterval(h), n(u));
              }, 4);
            }
            return u;
          }
          function Be(t, i, n) {
            if (i[n]) return i[n];
            var r = t.querySelector(
              "style[".concat(n, "], link[").concat(n, "]")
            );
            return r ? ((i[n] = r), r) : null;
          }
          var $e = !1;
          function We(t) {
            Bt(t.defaultView), $e || (($e = !0), Ye(t));
          }
          function Ye(t) {
            Ar(t.body, { opacity: 1, visibility: "visible", animation: "none" });
          }
          function Ke(t, i) {
            for (var n = t.styleSheets, r = 0; r < n.length; r++)
              if (n[r].ownerNode == i) return !0;
            return !1;
          }
          var Je,
            Xe,
            Qe = (function () {
              function t(t) {
                (this.fi = t), (this.li = 0), (this.vi = 0), (this.di = A());
              }
              var i = t.prototype;
              return (
                (i.has = function (t) {
                  return !!this.di[t];
                }),
                (i.get = function (t) {
                  var i = this.di[t];
                  if (i) return (i.access = ++this.vi), i.payload;
                }),
                (i.put = function (t, i) {
                  this.has(t) || this.li++,
                    (this.di[t] = { payload: i, access: this.vi }),
                    this.mi();
                }),
                (i.mi = function () {
                  if (!(this.li <= this.fi)) {
                    var t,
                      i = this.di,
                      n = this.vi + 1;
                    for (var r in i) {
                      var e = i[r].access;
                      e < n && ((n = e), (t = r));
                    }
                    void 0 !== t && (delete i[t], this.li--);
                  }
                }),
                t
              );
            })(),
            Ze = new Set(["c", "v", "a", "ad"]),
            ts = ["javascript:", "data:", "vbscript:"],
            is = "__fo_source_origin",
            ns = function (t) {
              return "string" == typeof t ? rs(t) : t;
            };
          function rs(t, i) {
            return (
              Je ||
                ((Je = self.document.createElement("a")),
                (Xe =
                  self.__fo_URL_CACHE || (self.__fo_URL_CACHE = new Qe(100)))),
              es(Je, t, i ? null : Xe)
            );
          }
          function es(t, i, n) {
            if (n && n.has(i)) return n.get(i);
            (t.href = i), t.protocol || (t.href = t.href);
            var r,
              e = {
                href: t.href,
                protocol: t.protocol,
                host: t.host,
                hostname: t.hostname,
                port: "0" == t.port ? "" : t.port,
                pathname: t.pathname,
                search: t.search,
                hash: t.hash,
                origin: null,
              };
            "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname),
              (("http:" == e.protocol && 80 == e.port) ||
                ("https:" == e.protocol && 443 == e.port)) &&
                ((e.port = ""), (e.host = e.hostname)),
              (r =
                t.origin && "null" != t.origin
                  ? t.origin
                  : "data:" != e.protocol && e.host
                  ? e.protocol + "//" + e.host
                  : e.href),
              (e.origin = r);
            var s = e;
            return n && n.put(i, s), s;
          }
          function ss(t, i, n) {
            if (!i) return t;
            var r = t.split("#", 2),
              e = r[0].split("?", 2);
            return (
              e[0] +
              (e[1]
                ? n
                  ? "?".concat(i, "&").concat(e[1])
                  : "?".concat(e[1], "&").concat(i)
                : "?".concat(i)) +
              (r[1] ? "#".concat(r[1]) : "")
            );
          }
          function us(t, i) {
            return ""
              .concat(encodeURIComponent(t), "=")
              .concat(encodeURIComponent(i));
          }
          function os(t, i) {
            return ss(t, hs(i));
          }
          function hs(t) {
            var i = [];
            for (var n in t) {
              var r = t[n];
              if (null != r) {
                r = F(r);
                for (var e = 0; e < r.length; e++) i.push(us(n, r[e]));
              }
            }
            return i.join("&");
          }
          function as(t) {
            return (
              "https:" == (t = ns(t)).protocol ||
              "localhost" == t.hostname ||
              "127.0.0.1" == t.hostname ||
              W(t.hostname, ".localhost")
            );
          }
          function fs(t, i) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "source";
            return (
              $t(null != t, "%s %s must be available", i, n),
              $t(
                as(t) || /^\/\//.test(t),
                '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
                i,
                n,
                t
              ),
              t
            );
          }
          function cs(t) {
            var i = t.indexOf("#");
            return -1 == i ? t : t.substring(0, i);
          }
          function ls(t) {
            return Ot.cdnProxyRegex.test(ns(t).origin);
          }
          function vs(t) {
            return !(t && ts.includes(ns(t).protocol));
          }
          function ds(t) {
            var i = rs(t),
              n = i.hash;
            return i.origin + i.pathname + ms(i.search) + n;
          }
          function ms(t) {
            return (function (t, i) {
              if (!t || "?" == t) return "";
              var n = new RegExp(
                  "[?&]".concat("(fo_(js[^&=]*|gsa|r|kit)|usqp)", "\\b[^&]*"),
                  "g"
                ),
                r = t.replace(n, "").replace(/^[?&]/, "");
              return r ? "?" + r : "";
            })(t);
          }
          function ps(t) {
            if (!ls((t = ns(t)))) return t.href;
            var i = t.pathname.split("/"),
              n = i[1];
            $t(Ze.has(n), "Unknown path prefix in url %s", t.href);
            var r = i[2],
              e =
                "s" == r
                  ? "https://" + decodeURIComponent(i[3])
                  : "http://" + decodeURIComponent(r);
            return (
              $t(e.indexOf(".") > 0, "Expected a . in origin %s", e),
              i.splice(1, "s" == r ? 3 : 2),
              e + i.join("/") + ms(t.search) + (t.hash || "")
            );
          }
          function bs(t) {
            return rs(ps(t)).origin;
          }
          function gs(t, i) {
            return (
              (i = ns(i)),
              "function" == typeof URL
                ? new URL(t, i.href).toString()
                : (function (t, i) {
                    i = ns(i);
                    var n = rs((t = t.replace(/\\/g, "/")));
                    return t.toLowerCase().startsWith(n.protocol)
                      ? n.href
                      : t.startsWith("//")
                      ? i.protocol + t
                      : t.startsWith("/")
                      ? i.origin + t
                      : i.origin + i.pathname.replace(/\/[^/]*$/, "/") + t;
                  })(t, i)
            );
          }
          function ys(t, i) {
            return (
              ws(i),
              (function (t, i, n, r) {
                return ss(t, us("__fo_source_origin", n), void 0);
              })(i, 0, bs(t.location.href))
            );
          }
          function ws(t) {
            var i = gt(rs(t).search);
            $t(!(is in i), "Source origin is not allowed in %s", t);
          }
          var As = "CANCELLED",
            Es = "BLOCK_BY_CONSENT",
            xs = self.__fo_ERRORS || [];
          self.__fo_ERRORS = xs;
          var Os = function (t) {
            return ((i = 0),
            (n = function () {
              var t = Math.pow(1.5, i++);
              return (
                1e3 *
                (t +
                  (function (t, i) {
                    var n = t * (i = i || 0.3) * Math.random();
                    return Math.random() > 0.5 && (n *= -1), n;
                  })(t))
              );
            }),
            (Os = function (t) {
              return setTimeout(t, n());
            }))(t);
            var i, n;
          };
          function Ps(t, i) {
            try {
              if (t)
                if (void 0 !== t.message) t = c(t);
                else {
                  var n = t;
                  (t = new Error(
                    (function (t) {
                      try {
                        return JSON.stringify(t);
                      } catch (i) {
                        return String(t);
                      }
                    })(n)
                  )).origError = n;
                }
              else t = new Error("Unknown error");
              if (t.reported) return t;
              if (((t.reported = !0), t.messageArray)) {
                var r = B(t.messageArray, function (t) {
                  return null == t ? void 0 : t.tagName;
                });
                r > -1 && (t.associatedElement = t.messageArray[r]);
              }
              var e = i || t.associatedElement;
              if (
                (e &&
                  e.classList &&
                  (e.classList.add("i-fohtml-error"),
                  Mt().development &&
                    (e.classList.add("i-fohtml-element-error"),
                    e.setAttribute("error-message", t.message))),
                self.console && (tt(t.message) || !t.expected))
              ) {
                var s = console.error || console.log;
                t.messageArray
                  ? s.apply(console, t.messageArray)
                  : e
                  ? s.call(console, t.message, e)
                  : s.call(console, t.message);
              }
              e &&
                e.dispatchCustomEventForTesting &&
                e.dispatchCustomEventForTesting("fo:error", t.message),
                Ts.call(self, void 0, void 0, void 0, void 0, t);
            } catch (t) {
              setTimeout(function () {
                throw t;
              });
            }
            return t;
          }
          function Is() {
            return new Error(As);
          }
          function Ms(t) {
            return (
              !!t &&
              ("string" == typeof t
                ? t.startsWith(Es)
                : "string" == typeof t.message && t.message.startsWith(Es))
            );
          }
          function Ts(t, i, n, r, e) {
            var s = this;
            if (
              (!this || !this.document || (e && e.expected) || We(this.document),
              !Mt().development)
            ) {
              var u = !1;
              try {
                u = (function (t) {
                  if (!t.document) return !1;
                  for (
                    var i = t.document.querySelectorAll("script[src]"), n = 0;
                    n < i.length;
                    n++
                  )
                    if (!ls(i[n].src.toLowerCase())) return !0;
                  return !1;
                })(self);
              } catch (t) {}
              if (!(u && Math.random() > 0.01)) {
                var o = (function (t, i, n, r, e, s) {
                  t = (function (t, i) {
                    return (
                      i && (t = i.message ? i.message : String(i)),
                      t || (t = "Unknown error"),
                      t
                    );
                  })(t, e);
                  var u,
                    o,
                    h = !(!e || !e.expected);
                  if (!/_reported_/.test(t) && t != As) {
                    var a = !(self && self.window),
                      f = Math.random();
                    if (
                      !(
                        ((function (t) {
                          return -1 != t.indexOf(je);
                        })(t) ||
                          "Script error." == t ||
                          a) &&
                        ((h = !0), f > 0.001)
                      )
                    ) {
                      var c = tt(t);
                      if (!(c && f > 0.1)) {
                        var l = Object.create(null);
                        (l.v = Mt().rtvVersion),
                          (l.nofo = s ? "1" : "0"),
                          (l.m = t.replace(X, "")),
                          (l.a = c ? "1" : "0"),
                          (l.ex = h ? "1" : "0"),
                          (l.dw = a ? "1" : "0");
                        var v = "1p";
                        if (
                          (self.context && self.context.location
                            ? ((l["3p"] = "1"), (v = "3p"))
                            : Mt().runtime && (v = Mt().runtime),
                          (l.rt = v),
                          "inabox" === v && (l.adid = Mt().a4aId),
                          (l.ca =
                            null !== (o = self.fo_CONFIG) &&
                            void 0 !== o &&
                            o.canary
                              ? "1"
                              : "0"),
                          (l.bt =
                            (null === (u = self.fo_CONFIG) || void 0 === u
                              ? void 0
                              : u.type) || "unknown"),
                          self.location.ancestorOrigins &&
                            self.location.ancestorOrigins[0] &&
                            (l.or = self.location.ancestorOrigins[0]),
                          self.viewerState && (l.vs = self.viewerState),
                          self.parent && self.parent != self && (l.iem = "1"),
                          self.fo && self.fo.viewer)
                        ) {
                          var d = self.fo.viewer.getResolvedViewerUrl(),
                            m = self.fo.viewer.maybeGetMessagingOrigin();
                          d && (l.rvu = d), m && (l.mso = m);
                        }
                        var p,
                          b,
                          g,
                          y = [],
                          w = self[_e] || null;
                        for (var A in w) {
                          var E = w[A];
                          y.push("".concat(A, "=").concat(E ? "1" : "0"));
                        }
                        return (
                          (l.exps = y.join(",")),
                          e
                            ? ((l.el =
                                (null === (p = e.associatedElement) ||
                                void 0 === p
                                  ? void 0
                                  : p.tagName) || "u"),
                              e.args && (l.args = JSON.stringify(e.args)),
                              c || e.ignoreStack || !e.stack || (l.s = e.stack),
                              e.message && (e.message += " _reported_"))
                            : ((l.f = i || ""), (l.l = n || ""), (l.c = r || "")),
                          (l.r = self.document ? self.document.referrer : ""),
                          (l.ae = xs.join(",")),
                          (l.fr =
                            self.location.originalHash || self.location.hash),
                          "production" === l.bt && (l.pt = "1"),
                          (g = t),
                          (b = xs).length >= 25 && b.splice(0, b.length - 25 + 1),
                          b.push(g),
                          l
                        );
                      }
                    }
                  }
                })(t, i, n, r, e, u);
                o &&
                  Os(function () {
                    try {
                      return (function (t, i) {
                        return i.pt && Math.random() < 0.9
                          ? h()
                          : (function (t, i) {
                              var n = Hn(t);
                              if (!n.isSingleDoc()) return Promise.resolve(!1);
                              var r = n.getSingleDoc();
                              if (
                                !r
                                  .getRootNode()
                                  .documentElement.hasAttribute(
                                    "report-errors-to-viewer"
                                  )
                              )
                                return Promise.resolve(!1);
                              var e = sr(r);
                              return e.hasCapability("errorReporter")
                                ? e.isTrustedViewer().then(function (t) {
                                    return (
                                      !!t &&
                                      (e.sendMessage("error", {
                                        m: (n = i).m,
                                        a: n.a,
                                        s: n.s,
                                        el: n.el,
                                        ex: n.ex,
                                        v: n.v,
                                        pt: n.pt,
                                      }),
                                      !0)
                                    );
                                    var n;
                                  })
                                : Promise.resolve(!1);
                            })(t, i).then(function (t) {
                              if (!t) {
                                var n = new XMLHttpRequest();
                                n.open(
                                  "POST",
                                  Math.random() < 0.1
                                    ? Ot.betaErrorReporting
                                    : Ot.errorReporting,
                                  !0
                                ),
                                  n.send(JSON.stringify(i));
                              }
                            });
                      })(s, o).catch(function () {});
                    } catch (t) {}
                  });
              }
            }
          }
          var Ss = "Resource",
            _s = (function () {
              function t(t, i, n) {
                (i.__fo__RESOURCE = this),
                  (this.pi = t),
                  (this.element = i),
                  (this.debugid = i.tagName.toLowerCase() + "#" + t),
                  (this.hostWin = i.ownerDocument.defaultView),
                  (this.bi = n),
                  (this.gi = i.hasAttribute("placeholder")),
                  (this.yi = !1),
                  (this.wi = void 0),
                  (this.Ai = i.isBuilt() ? 1 : 0),
                  0 == this.Ai && i.isBuilding() && this.build(),
                  (this.Ei = -1),
                  (this.xi = 0),
                  (this.Oi = null),
                  (this.Ti = null),
                  (this.Ii = !1),
                  (this.Pi = ki(-1e4, -1e4, 0, 0)),
                  (this.Si = null),
                  (this.Mi = !1),
                  (this.ki = null),
                  (this._i = null),
                  (this.Ri = void 0);
                var r = new a();
                (this.Ni = r.promise), (this.Ci = r.resolve), (this.Di = !1);
              }
              (t.forElement = function (i) {
                return Bt(t.forElementOptional(i));
              }),
                (t.forElementOptional = function (t) {
                  return t.__fo__RESOURCE;
                }),
                (t.setOwner = function (i, n) {
                  Bt(n.contains(i)),
                    t.forElementOptional(i) &&
                      t.forElementOptional(i).updateOwner(n),
                    (i.__fo__OWNER = n);
                  for (
                    var r = i.getElementsByClassName("i-fohtml-element"), e = 0;
                    e < r.length;
                    e++
                  ) {
                    var s = r[e];
                    t.forElementOptional(s) &&
                      t.forElementOptional(s).updateOwner(void 0);
                  }
                });
              var i = t.prototype;
              return (
                (i.getId = function () {
                  return this.pi;
                }),
                (i.updateOwner = function (t) {
                  this.wi = t;
                }),
                (i.getOwner = function () {
                  if (void 0 === this.wi) {
                    for (var t = this.element; t; t = t.parentElement)
                      if (t.__fo__OWNER) {
                        this.wi = t.__fo__OWNER;
                        break;
                      }
                    void 0 === this.wi && (this.wi = null);
                  }
                  return this.wi;
                }),
                (i.hasOwner = function () {
                  return !!this.getOwner();
                }),
                (i.getLayoutPriority = function () {
                  return -1 != this.Ei
                    ? this.Ei
                    : this.element.getLayoutPriority();
                }),
                (i.updateLayoutPriority = function (t) {
                  this.Ei = t;
                }),
                (i.getState = function () {
                  return this.Ai;
                }),
                (i.isBuilt = function () {
                  return this.element.isBuilt();
                }),
                (i.isBuilding = function () {
                  return this.yi;
                }),
                (i.whenBuilt = function () {
                  return this.element.signals().whenSignal("res-built");
                }),
                (i.build = function () {
                  var t = this;
                  return this.yi || !this.element.isUpgraded()
                    ? null
                    : ((this.yi = !0),
                      this.element.buildInternal().then(
                        function () {
                          (t.yi = !1),
                            (t.Ai = 1),
                            t.element.signals().signal("res-built");
                        },
                        function (i) {
                          throw (
                            (t.maybeReportErrorOnBuildFailure(i),
                            (t.yi = !1),
                            t.element.signals().rejectSignal("res-built", i),
                            i)
                          );
                        }
                      ));
                }),
                (i.maybeReportErrorOnBuildFailure = function (t) {
                  Ms(t) || qt().error(Ss, "failed to build:", this.debugid, t);
                }),
                (i.changeSize = function (t, i, n) {
                  this.element.applySize(t, i, n), this.requestMeasure();
                }),
                (i.overflowCallback = function (t, i, n, r) {
                  t && (this.Ri = { height: i, width: n, margins: r }),
                    this.element.overflowCallback(t, i, n, r);
                }),
                (i.resetPendingChangeSize = function () {
                  this.Ri = void 0;
                }),
                (i.getPendingChangeSize = function () {
                  return this.Ri;
                }),
                (i.getUpgradeDelayMs = function () {
                  return this.element.getUpgradeDelayMs();
                }),
                (i.measure = function () {
                  if (
                    !(
                      this.gi &&
                      this.element.parentElement &&
                      this.element.parentElement.tagName.startsWith("fo-")
                    ) ||
                    "__fo__RESOURCE" in this.element.parentElement
                  )
                    if (
                      this.element.ownerDocument &&
                      this.element.ownerDocument.defaultView
                    ) {
                      this.Mi = !1;
                      var t = this.Pi;
                      this.ji();
                      var i,
                        n,
                        r = this.Pi,
                        e =
                          ((n = r),
                          !((i = t).width == n.width && i.height === n.height));
                      (1 == this.Ai || t.top != r.top || e) &&
                        this.element.isUpgraded() &&
                        (1 == this.Ai
                          ? (this.Ai = 2)
                          : (4 != this.Ai && 5 != this.Ai) ||
                            !this.element.isRelayoutNeeded() ||
                            (this.Ai = 2)),
                        this.hasBeenMeasured() || (this.Si = r),
                        this.element.updateLayoutBox(r, e);
                    } else this.Ai = 1;
                }),
                (i.ensureMeasured = function () {
                  var t = this;
                  return this.hasBeenMeasured()
                    ? h()
                    : ur(this.hostWin).measure(function () {
                        return t.measure();
                      });
                }),
                (i.ji = function () {
                  var t = or(this.element);
                  this.Pi = t.getLayoutRect(this.element);
                  var i = !1;
                  if (t.supportsPositionFixed() && this.isDisplayed())
                    for (
                      var n = this.bi.getfodoc().win,
                        r = n.document.body,
                        e = this.element;
                      e && e != r;
                      e = e.offsetParent
                    ) {
                      if (e.isAlwaysFixed && e.isAlwaysFixed()) {
                        i = !0;
                        break;
                      }
                      if (t.isDeclaredFixed(e) && "fixed" == Or(n, e).position) {
                        i = !0;
                        break;
                      }
                    }
                  (this.Ii = i),
                    i &&
                      (this.Pi = Ci(
                        this.Pi,
                        -t.getScrollLeft(),
                        -t.getScrollTop()
                      ));
                }),
                (i.completeCollapse = function () {
                  Er(this.element, !1),
                    (this.Pi = ki(this.Pi.left, this.Pi.top, 0, 0)),
                    (this.Ii = !1),
                    this.element.updateLayoutBox(this.getLayoutBox());
                  var t = this.getOwner();
                  t && t.collapsedCallback(this.element);
                }),
                (i.completeExpand = function () {
                  Er(this.element, !0), this.requestMeasure();
                }),
                (i.isMeasureRequested = function () {
                  return this.Mi;
                }),
                (i.hasBeenMeasured = function () {
                  return !!this.Si;
                }),
                (i.requestMeasure = function () {
                  this.Mi = !0;
                }),
                (i.getLayoutSize = function () {
                  return (
                    (i = (t = this.Pi).height), { width: t.width, height: i }
                  );
                  var t, i;
                }),
                (i.getLayoutBox = function () {
                  if (!this.Ii) return this.Pi;
                  var t = or(this.element);
                  return Ci(this.Pi, t.getScrollLeft(), t.getScrollTop());
                }),
                (i.getInitialLayoutBox = function () {
                  return this.Si || this.Pi;
                }),
                (i.isDisplayed = function () {
                  if (
                    !this.element.ownerDocument ||
                    !this.element.ownerDocument.defaultView
                  )
                    return !1;
                  var t = this.element.getLayout() == Kr,
                    i = this.getLayoutBox(),
                    n = i.height > 0 && i.width > 0;
                  return t || n;
                }),
                (i.isFixed = function () {
                  return this.Ii;
                }),
                (i.overlaps = function (t) {
                  return (
                    (n = t),
                    (i = this.getLayoutBox()).top <= n.bottom &&
                      n.top <= i.bottom &&
                      i.left <= n.right &&
                      n.left <= i.right
                  );
                  var i, n;
                }),
                (i.prerenderAllowed = function () {
                  return this.element.prerenderAllowed();
                }),
                (i.isBuildRenderBlocking = function () {
                  return this.element.isBuildRenderBlocking();
                }),
                (i.whenWithinViewport = function (t) {
                  if ((Bt(!1 !== t), !this.isLayoutPending() || !0 === t))
                    return h();
                  var i = t,
                    n = String(i);
                  return this.ki && this.ki[n]
                    ? this.ki[n].promise
                    : this.isWithinViewportRatio(i)
                    ? h()
                    : ((this.ki = this.ki || {}),
                      (this.ki[n] = new a()),
                      this.ki[n].promise);
                }),
                (i.zi = function () {
                  if (this.ki) {
                    var t = this.getDistanceViewportRatio();
                    for (var i in this.ki)
                      this.isWithinViewportRatio(parseFloat(i), t) &&
                        (this.ki[i].resolve(), delete this.ki[i]);
                  }
                }),
                (i.getDistanceViewportRatio = function () {
                  var t = or(this.element).getRect(),
                    i = this.getLayoutBox(),
                    n = this.bi.getScrollDirection(),
                    r = 1,
                    e = 0;
                  if (t.right < i.left || t.left > i.right)
                    return { distance: !1 };
                  if (t.bottom < i.top)
                    (e = i.top - t.bottom), -1 == n && (r = 2);
                  else {
                    if (!(t.top > i.bottom)) return { distance: !0 };
                    (e = t.top - i.bottom), 1 == n && (r = 2);
                  }
                  return {
                    distance: e,
                    scrollPenalty: r,
                    viewportHeight: t.height,
                  };
                }),
                (i.isWithinViewportRatio = function (t, i) {
                  if ("boolean" == typeof t) return t;
                  var n = i || this.getDistanceViewportRatio(),
                    r = n.distance,
                    e = n.scrollPenalty,
                    s = n.viewportHeight;
                  return "boolean" == typeof r ? r : r < (s * t) / e;
                }),
                (i.renderOutsideViewport = function () {
                  return (
                    this.zi(),
                    this.hasOwner() ||
                      this.isWithinViewportRatio(
                        this.element.renderOutsideViewport()
                      )
                  );
                }),
                (i.idleRenderOutsideViewport = function () {
                  return this.isWithinViewportRatio(
                    this.element.idleRenderOutsideViewport()
                  );
                }),
                (i.layoutScheduled = function (t) {
                  (this.Ai = 3), (this.element.layoutScheduleTime = t);
                }),
                (i.layoutCanceled = function () {
                  this.Ai = this.hasBeenMeasured() ? 2 : 1;
                }),
                (i.startLayout = function () {
                  var t = this;
                  if (this._i) return this._i;
                  if (4 == this.Ai) return h();
                  if (5 == this.Ai) return Promise.reject(this.Ti);
                  if ((Bt(0 != this.Ai), Bt(this.isDisplayed()), 3 != this.Ai)) {
                    var i = qt().createError(
                      "startLayout called but not LAYOUT_SCHEDULED",
                      "currently: ",
                      this.Ai
                    );
                    return Ps(i, this.element), Promise.reject(i);
                  }
                  if (this.xi > 0 && !this.element.isRelayoutNeeded())
                    return (
                      qt().fine(
                        Ss,
                        "layout canceled since it wasn't requested:",
                        this.debugid,
                        this.Ai
                      ),
                      (this.Ai = 4),
                      h()
                    );
                  qt().fine(Ss, "start layout:", this.debugid, "count:", this.xi),
                    this.xi++,
                    (this.Ai = 3),
                    (this.Oi = new AbortController());
                  var n = this.Oi.signal,
                    r = new Promise(function (i, r) {
                      ur(t.hostWin).mutate(function () {
                        var e;
                        try {
                          e = t.element.layoutCallback(n);
                        } catch (t) {
                          r(t);
                        }
                        Promise.resolve(e).then(i, r);
                      }),
                        (n.onabort = function () {
                          return r(Is());
                        });
                    }).then(
                      function () {
                        return t.Li(!0, n);
                      },
                      function (i) {
                        return t.Li(!1, n, i);
                      }
                    );
                  return (this._i = r);
                }),
                (i.Li = function (t, i, n) {
                  if (((this.Oi = null), i.aborted)) {
                    var r = qt().createError("layoutComplete race");
                    throw (
                      ((r.associatedElement = this.element),
                      qt().expectedError(Ss, r),
                      Is())
                    );
                  }
                  if (
                    (this.Ci && (this.Ci(), (this.Ci = null)),
                    (this._i = null),
                    (this.Ai = t ? 4 : 5),
                    (this.Ti = n),
                    !t)
                  )
                    return (
                      qt().fine(Ss, "loading failed:", this.debugid, n),
                      Promise.reject(n)
                    );
                  qt().fine(Ss, "layout complete:", this.debugid);
                }),
                (i.isLayoutPending = function () {
                  return 4 != this.Ai && 5 != this.Ai;
                }),
                (i.loadedOnce = function () {
                  return this.element.R1() ? this.element.whenLoaded() : this.Ni;
                }),
                (i.isInViewport = function () {
                  return this.Di && this.zi(), this.Di;
                }),
                (i.setInViewport = function (t) {
                  this.Di = t;
                }),
                (i.unlayout = function () {
                  0 != this.Ai &&
                    1 != this.Ai &&
                    2 != this.Ai &&
                    (this.Oi && (this.Oi.abort(), (this.Oi = null)),
                    this.setInViewport(!1),
                    this.element.unlayoutCallback() &&
                      (this.element.togglePlaceholder(!0),
                      (this.Ai = 1),
                      (this.xi = 0),
                      (this._i = null)));
                }),
                (i.getTaskId = function (t) {
                  return this.debugid + "#" + t;
                }),
                (i.pause = function () {
                  this.element.pause();
                }),
                (i.pauseOnRemove = function () {
                  this.element.pause();
                }),
                (i.resume = function () {
                  this.element.resume();
                }),
                (i.unload = function () {
                  this.element.unmount();
                }),
                (i.disconnect = function () {
                  delete this.element.__fo__RESOURCE,
                    this.element.disconnect(!0);
                }),
                t
              );
            })(),
            ks = "ready-scan",
            Rs = "scheduler",
            Cs = "250% 31.25%",
            Ns = (function () {
              function t(t) {
                var i = this;
                this.Ui = t;
                var n = t.win;
                (this.Hi = new n.IntersectionObserver(
                  function (t) {
                    return i.Gi(t);
                  },
                  { root: Ii(n) ? n.document : null, rootMargin: Cs }
                )),
                  (this.Vi = new Map()),
                  (this.Fi = new Map()),
                  (this.Bi = []),
                  (this.qi = !1),
                  t.whenReady().then(function () {
                    return i.$i();
                  }),
                  (this.Wi = t.onVisibilityChanged(function () {
                    return i.Ki();
                  }));
              }
              var i = t.prototype;
              return (
                (i.dispose = function () {
                  this.Hi.disconnect(),
                    this.Fi.clear(),
                    this.Wi && (this.Wi(), (this.Wi = null));
                }),
                (i.scheduleAsap = function (t) {
                  this.Fi.set(t, { asap: !0, isIntersecting: !1 }), this.Yi(t);
                }),
                (i.schedule = function (t) {
                  this.Fi.has(t) ||
                    (t.deferredMount()
                      ? (this.Fi.set(t, { asap: !1, isIntersecting: !1 }),
                        this.Hi.observe(t),
                        this.Vi.size > 0 &&
                          this.Vi.forEach(function (i, n) {
                            Ti(n, t) && i.observe(t);
                          }))
                      : this.Fi.set(t, { asap: !1, isIntersecting: !0 }),
                    this.Yi(t));
                }),
                (i.unschedule = function (t) {
                  this.Fi.has(t) &&
                    (this.Fi.delete(t),
                    this.Hi.unobserve(t),
                    this.Vi.size > 0 &&
                      this.Vi.forEach(function (i) {
                        i.unobserve(t);
                      }),
                    this.Bi && ($(this.Bi, t), this.$i()));
                }),
                (i.setContainer = function (t, i) {
                  var n = this;
                  if (!this.Vi.has(t)) {
                    var r = new this.Ui.win.IntersectionObserver(
                      function (t) {
                        return n.Gi(t);
                      },
                      { root: i || t, rootMargin: Cs }
                    );
                    this.Vi.set(t, r),
                      this.Fi.forEach(function (i, n) {
                        !i.asap && Ti(t, n) && r.observe(n);
                      });
                  }
                }),
                (i.removeContainer = function (t) {
                  var i = this.Vi.get(t);
                  i && (i.disconnect(), this.Vi.delete(t));
                }),
                (i.Ji = function () {
                  var t = this;
                  this.Ui.isReady() &&
                    !this.qi &&
                    ((this.qi = !0),
                    this.Ui.win.setTimeout(function () {
                      t.Ui.signals().signal(ks);
                    }, 50));
                }),
                (i.Ki = function () {
                  var t = this,
                    i = this.Ui.getVisibilityState();
                  (i != fr && i != cr && i != ar) ||
                    this.Fi.forEach(function (i, n) {
                      return t.Xi(n);
                    });
                }),
                (i.Yi = function (t) {
                  var i = this.Bi;
                  i ? (i.includes(t) || i.push(t), this.$i()) : this.Xi(t);
                }),
                (i.$i = function () {
                  var t = this.Ui.isReady(),
                    i = this.Bi;
                  if (i)
                    for (var n = 0; n < i.length; n++) {
                      var r = i[n];
                      (t || Oi(r, this.Ui.getRootNode())) &&
                        (i.splice(n--, 1), this.Xi(r));
                    }
                  t && ((this.Bi = null), this.Ji());
                }),
                (i.Gi = function (t) {
                  for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                      r = n.isIntersecting,
                      e = n.target,
                      s = this.Fi.get(e);
                    if (s) {
                      var u = r || s.isIntersecting;
                      u !== s.isIntersecting &&
                        this.Fi.set(e, { asap: s.asap, isIntersecting: u }),
                        u && this.Xi(e);
                    }
                  }
                }),
                (i.Xi = function (t) {
                  var i = this.Bi,
                    n = !(i && i.includes(t)),
                    r = this.Fi.get(t) || { asap: !1, isIntersecting: !1 },
                    e = r.asap,
                    s = r.isIntersecting,
                    u = this.Ui.getVisibilityState();
                  if (
                    n &&
                    (e || s) &&
                    (u == fr || u == cr || (u == ar && t.prerenderAllowed()))
                  ) {
                    this.unschedule(t);
                    var o = this.Ui.win;
                    (e || t.getBuildPriority() <= 0
                      ? o.setTimeout
                      : o.requestIdleCallback || o.setTimeout)(function () {
                      return t.mountInternal();
                    });
                  }
                }),
                t
              );
            })();
          function Ds(t) {
            return dn(t, Rs, Ns), pn(t, Rs);
          }
          var js = (function () {
              function t() {
                this.Qi = [];
              }
              var n = t.prototype;
              return (
                (n.peek = function () {
                  var t = this.length;
                  return t ? this.Qi[t - 1].item : null;
                }),
                (n.enqueue = function (t, i) {
                  if (isNaN(i)) throw new Error("Priority must not be NaN.");
                  var n = this.Zi(i);
                  this.Qi.splice(n, 0, { item: t, priority: i });
                }),
                (n.Zi = function (t) {
                  for (
                    var i = -1, n = 0, r = this.length;
                    n <= r && (i = Math.floor((n + r) / 2)) !== this.length;
  
                  )
                    if (this.Qi[i].priority < t) n = i + 1;
                    else {
                      if (!(i > 0 && this.Qi[i - 1].priority >= t)) break;
                      r = i - 1;
                    }
                  return i;
                }),
                (n.forEach = function (t) {
                  for (var i = this.length; i--; ) t(this.Qi[i].item);
                }),
                (n.dequeue = function () {
                  var t = this.Qi.pop();
                  return t ? t.item : null;
                }),
                i(t, [
                  {
                    key: "length",
                    get: function () {
                      return this.Qi.length;
                    },
                  },
                ]),
                t
              );
            })(),
            Us = "CHUNK",
            Ls = /nochunking=1/.test(self.location.hash),
            zs = h();
          function Hs(t) {
            return dn(t, "chunk", $s), pn(t, "chunk");
          }
          function Gs(t, i, n) {
            if (Ls) zs.then(i);
            else {
              var r = Hs(t.documentElement || t);
              r.runForStartup(i),
                n &&
                  r.runForStartup(function () {
                    r.rn = !0;
                  });
            }
          }
          function Vs(t, i, n) {
            Ls ? zs.then(i) : Hs(t).run(i, n);
          }
          var Fs = "not_run",
            qs = (function () {
              function t(t) {
                (this.state = Fs), (this.en = t);
              }
              var i = t.prototype;
              return (
                (i.sn = function (t) {
                  if ("run" != this.state) {
                    this.state = "run";
                    try {
                      this.en(t);
                    } catch (t) {
                      throw (this.on(t), t);
                    }
                  }
                }),
                (i.un = function () {
                  return this.en.displayName || this.en.name;
                }),
                (i.on = function (t) {}),
                (i.hn = function () {
                  return !1;
                }),
                (i.an = function () {
                  return !1;
                }),
                t
              );
            })(),
            Bs = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t, n, r) {
                var e;
                return ((e = i.call(this, t)).cn = r), e;
              }
              var r = n.prototype;
              return (
                (r.on = function (t) {
                  We(self.document);
                }),
                (r.hn = function () {
                  return this.fn();
                }),
                (r.an = function () {
                  return this.cn.ln;
                }),
                (r.fn = function () {
                  return this.cn.fodoc.isVisible();
                }),
                n
              );
            })(qs),
            $s = (function () {
              function t(t) {
                var i,
                  n = this;
                (this.fodoc = t),
                  (this.t = t.win),
                  (this.vn = new js()),
                  (this.dn = this.mn.bind(this)),
                  (this.pn = 0),
                  (this.bn = !(
                    !this.t.navigator.scheduling ||
                    !this.t.navigator.scheduling.isInputPending
                  )),
                  (this.gn = !1),
                  (this.rn = this.t.document.documentElement.hasAttribute(
                    "i-fohtml-no-boilerplate"
                  )),
                  this.t.addEventListener("message", function (t) {
                    "fo-macro-task" == Le(t) && n.mn(null);
                  }),
                  (this.ln = !1),
                  ((i = t), gn(i, "viewer")).then(function () {
                    n.ln = !0;
                  }),
                  t.onVisibilityChanged(function () {
                    t.isVisible() && n.yn();
                  });
              }
              var i = t.prototype;
              return (
                (i.run = function (t, i) {
                  var n = new qs(t);
                  this.wn(n, i);
                }),
                (i.runForStartup = function (t) {
                  var i = new Bs(t, this.t, this);
                  this.wn(i, Number.POSITIVE_INFINITY);
                }),
                (i.wn = function (t, i) {
                  this.vn.enqueue(t, i), this.yn();
                }),
                (i.An = function (t) {
                  for (var i = this.vn.peek(); i && i.state !== Fs; )
                    this.vn.dequeue(), (i = this.vn.peek());
                  return i && t && this.vn.dequeue(), i;
                }),
                (i.mn = function (t) {
                  var i,
                    n = this,
                    r = this.An(!0);
                  if (!r) return (this.gn = !1), (this.pn = 0), !1;
                  try {
                    (i = Date.now()), r.sn(t);
                  } finally {
                    zs.then()
                      .then()
                      .then()
                      .then()
                      .then()
                      .then()
                      .then()
                      .then()
                      .then(function () {
                        (n.gn = !1),
                          (n.pn += Date.now() - i),
                          qt().fine(
                            Us,
                            r.un(),
                            "Chunk duration",
                            Date.now() - i,
                            n.pn
                          ),
                          n.yn();
                      });
                  }
                  return !0;
                }),
                (i.En = function (t) {
                  var i = this;
                  if (
                    this.rn &&
                    (this.bn
                      ? this.t.navigator.scheduling.isInputPending()
                      : this.pn > 5)
                  )
                    return (this.pn = 0), void this.xn();
                  zs.then(function () {
                    i.dn(t);
                  });
                }),
                (i.yn = function () {
                  if (!this.gn) {
                    var t = this.An();
                    if (t)
                      return t.hn()
                        ? ((this.gn = !0), void this.En(null))
                        : void (t.an() && this.t.requestIdleCallback
                            ? (function (t, i, n, r) {
                                var e = Date.now();
                                t.requestIdleCallback(
                                  function i(s) {
                                    if (s.timeRemaining() < 15) {
                                      var u = n - (Date.now() - e);
                                      u <= 0 || s.didTimeout
                                        ? (qt().fine(
                                            Us,
                                            "Timed out",
                                            n,
                                            s.didTimeout
                                          ),
                                          r(s))
                                        : (qt().fine(
                                            Us,
                                            "Rescheduling with",
                                            u,
                                            s.timeRemaining()
                                          ),
                                          t.requestIdleCallback(i, {
                                            timeout: u,
                                          }));
                                    } else
                                      qt().fine(
                                        Us,
                                        "Running idle callback with ",
                                        15
                                      ),
                                        r(s);
                                  },
                                  { timeout: n }
                                );
                              })(this.t, 0, 2e3, this.dn)
                            : this.xn());
                  }
                }),
                (i.xn = function () {
                  this.t.postMessage("fo-macro-task", "*");
                }),
                t
              );
            })(),
            Ws = "activate",
            Ys = (function () {
              function t(t) {
                (this.element = t),
                  (this.win = Zt(t)),
                  (this.actionMap_ = null),
                  (this.defaultActionAlias_ = null);
              }
              (t.R1 = function () {
                return !1;
              }),
                (t.deferredMount = function (t) {
                  return !0;
                }),
                (t.prerenderAllowed = function (t) {
                  return !1;
                }),
                (t.usesLoading = function (t) {
                  return !1;
                }),
                (t.createLoaderLogoCallback = function (t) {
                  return {};
                }),
                (t.getBuildPriority = function (t) {
                  return 0;
                }),
                (t.getPreconnects = function (t) {
                  return null;
                }),
                (t.requiresShadowDom = function () {
                  return !1;
                });
              var i = t.prototype;
              return (
                (i.signals = function () {
                  return this.element.signals();
                }),
                (i.getDefaultActionAlias = function () {
                  return this.defaultActionAlias_;
                }),
                (i.getLayoutPriority = function () {
                  return 0;
                }),
                (i.updateLayoutPriority = function (t) {
                  this.element
                    .getResources()
                    .updateLayoutPriority(this.element, t);
                }),
                (i.getLayout = function () {
                  return this.element.getLayout();
                }),
                (i.getLayoutBox = function () {
                  return this.element.getLayoutBox();
                }),
                (i.getLayoutSize = function () {
                  return this.element.getLayoutSize();
                }),
                (i.getfoDoc = function () {
                  return this.element.getfoDoc();
                }),
                (i.getVsync = function () {
                  return ur(this.win);
                }),
                (i.getConsentPolicy = function () {
                  var t = null;
                  return (
                    this.element.hasAttribute("data-block-on-consent") &&
                      (t =
                        this.element.getAttribute("data-block-on-consent") ||
                        "default"),
                    t
                  );
                }),
                (i.isLayoutSupported = function (t) {
                  return t == Vr;
                }),
                (i.isAlwaysFixed = function () {
                  return !1;
                }),
                (i.upgradeCallback = function () {
                  return null;
                }),
                (i.buildCallback = function () {}),
                (i.preconnectCallback = function (t) {}),
                (i.attachedCallback = function () {}),
                (i.detachedCallback = function () {}),
                (i.setAsContainer = function (t) {
                  this.element.setAsContainerInternal(t);
                }),
                (i.removeAsContainer = function () {
                  this.element.removeAsContainerInternal();
                }),
                (i.isBuildRenderBlocking = function () {
                  return !1;
                }),
                (i.createPlaceholderCallback = function () {
                  return null;
                }),
                (i.renderOutsideViewport = function () {
                  return "inabox" == Mt(this.win).runtime || 3;
                }),
                (i.idleRenderOutsideViewport = function () {
                  return !1;
                }),
                (i.ensureLoaded = function () {}),
                (i.setReadyState = function (t, i) {
                  this.element.setReadyStateInternal(t, i);
                }),
                (i.mountCallback = function (t) {}),
                (i.unmountCallback = function () {}),
                (i.isRelayoutNeeded = function () {
                  return !1;
                }),
                (i.layoutCallback = function () {
                  return h();
                }),
                (i.firstLayoutCompleted = function () {
                  this.togglePlaceholder(!1);
                }),
                (i.pauseCallback = function () {}),
                (i.resumeCallback = function () {}),
                (i.unlayoutCallback = function () {
                  return !1;
                }),
                (i.unlayoutOnPause = function () {
                  return !1;
                }),
                (i.reconstructWhenReparented = function () {
                  return !0;
                }),
                (i.loadPromise = function (t) {
                  return He(t);
                }),
                (i.registerAction = function (t, i) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 2;
                  Ks(this), (this.actionMap_[t] = { handler: i, minTrust: n });
                }),
                (i.registerDefaultAction = function (t) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Ws,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 2;
                  Bt(!this.defaultActionAlias_),
                    this.registerAction(i, t, n),
                    (this.defaultActionAlias_ = i);
                }),
                (i.executeAction = function (t, i) {
                  var n = t.method;
                  n === Ws && (n = this.defaultActionAlias_ || n), Ks(this);
                  var r = this.actionMap_[n],
                    e = this.element.tagName;
                  $t(r, "Method not found: ".concat(n, " in ").concat(e));
                  var s = r.handler,
                    u = r.minTrust;
                  if (t.satisfiesTrust(u)) return s(t);
                }),
                (i.forwardEvents = function (t, i) {
                  var n = this,
                    r = (V(t) ? t : [t]).map(function (t) {
                      return Ue(i, t, function (i) {
                        Mi(n.element, t, Le(i) || {});
                      });
                    });
                  return function () {
                    return r.forEach(function (t) {
                      return t();
                    });
                  };
                }),
                (i.getPlaceholder = function () {
                  return this.element.getPlaceholder();
                }),
                (i.togglePlaceholder = function (t) {
                  this.element.togglePlaceholder(t);
                }),
                (i.getFallback = function () {
                  return this.element.getFallback();
                }),
                (i.toggleFallback = function (t) {
                  this.element.toggleFallback(t);
                }),
                (i.toggleLoading = function (t) {
                  var i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  this.element.toggleLoading(t, i);
                }),
                (i.getOverflowElement = function () {
                  return this.element.getOverflowElement();
                }),
                (i.renderStarted = function () {
                  this.element.renderStarted();
                }),
                (i.getViewport = function () {
                  return or(this.getfoDoc());
                }),
                (i.getIntersectionElementLayoutBox = function () {
                  return this.getLayoutBox();
                }),
                (i.collapse = function () {
                  Kn(this.getfoDoc()).collapseElement(this.element);
                }),
                (i.attemptCollapse = function () {
                  return Kn(this.getfoDoc()).attemptCollapse(this.element);
                }),
                (i.forceChangeHeight = function (t) {
                  Kn(this.getfoDoc()).forceChangeSize(this.element, t, void 0);
                }),
                (i.attemptChangeHeight = function (t) {
                  return Kn(this.getfoDoc()).requestChangeSize(
                    this.element,
                    t,
                    void 0
                  );
                }),
                (i.attemptChangeSize = function (t, i, n) {
                  return Kn(this.getfoDoc()).requestChangeSize(
                    this.element,
                    t,
                    i,
                    void 0,
                    n
                  );
                }),
                (i.measureElement = function (t) {
                  return Kn(this.getfoDoc()).measureElement(t);
                }),
                (i.mutateElement = function (t, i) {
                  return this.measureMutateElement(null, t, i);
                }),
                (i.measureMutateElement = function (t, i, n) {
                  return Kn(this.getfoDoc()).measureMutateElement(
                    n || this.element,
                    t,
                    i
                  );
                }),
                (i.mutateElementSkipRemeasure = function (t) {
                  return Kn(this.getfoDoc()).mutateElement(this.element, t, !0);
                }),
                (i.collapsedCallback = function (t) {}),
                (i.expand = function () {
                  Kn(this.getfoDoc()).expandElement(this.element);
                }),
                (i.mutatedAttributesCallback = function (t) {}),
                (i.onLayoutMeasure = function () {}),
                (i.user = function () {
                  return Vt(this.element);
                }),
                (i.getApi = function () {
                  return this;
                }),
                t
              );
            })();
          function Ks(t) {
            t.actionMap_ || (t.actionMap_ = t.win.Object.create(null));
          }
          var Js,
            Xs = (function (t) {
              U(n, t);
              var i = H(n);
              function n() {
                return i.apply(this, arguments);
              }
              return n;
            })(Ys),
            Qs = Date.now(),
            Zs = { bubbles: !1 },
            tu = function () {
              return !0;
            },
            iu = [],
            nu = new Set();
          function ru(t, n) {
            var r = (function (t, n) {
                if (t.__fo_BASE_CE_CLASS) return t.__fo_BASE_CE_CLASS;
                var r = (function (r) {
                  U(s, r);
                  var e = H(s);
                  function s() {
                    var t;
                    return (t = e.call(this)).createdCallback(), t;
                  }
                  var u = s.prototype;
                  return (
                    (u.createdCallback = function () {
                      (this.On = !1),
                        (this.Tn = !1),
                        (this.In = null),
                        (this.Pn = !1),
                        (this.Sn = null),
                        (this.Mn = null),
                        (this.kn = "upgrading"),
                        (this.everAttached = !1),
                        (this.Ui = null),
                        (this.bi = null),
                        (this._n = Vr),
                        (this.xi = 0),
                        (this.Rn = !1),
                        (this.warnOnMissingOverflow = !0),
                        (this.sizerElement = void 0),
                        (this.Nn = void 0),
                        (this.layoutScheduleTime = void 0);
                      var i = this,
                        n =
                          t.__fo_EXTENDED_ELEMENTS &&
                          t.__fo_EXTENDED_ELEMENTS[this.localName];
                      (this.Cn = n === Xs ? null : n || null),
                        this.Cn || iu.push(this),
                        (this.Dn = null),
                        (this.jn = 1),
                        (this.zn = 0),
                        (this.Ln = void 0),
                        (this.Un = void 0),
                        (this.qt = new mr()),
                        this.Cn && this.qt.signal(fe);
                      var r = (function (t, i) {
                        return kn((t = wn(t)), i) ? On(t, i) : null;
                      })(t, "performance");
                      (this.Hn = r && r.isPerformanceTrackingOn()),
                        (this.Gn = null),
                        i.__fo_UPG_RES &&
                          (i.__fo_UPG_RES(i),
                          delete i.__fo_UPG_RES,
                          delete i.__fo_UPG_PRM);
                    }),
                    (u.signals = function () {
                      return this.qt;
                    }),
                    (u.getfoDoc = function () {
                      return Bt(this.Ui), this.Ui;
                    }),
                    (u.getResources = function () {
                      return Bt(this.bi), this.bi;
                    }),
                    (u.isUpgraded = function () {
                      return 2 == this.jn;
                    }),
                    (u.whenUpgraded = function () {
                      return this.qt.whenSignal(ce);
                    }),
                    (u.upgrade = function (t) {
                      this.Un ||
                        (1 == this.jn &&
                          ((this.Cn = t),
                          this.qt.signal(fe),
                          this.everAttached && this.Vn()));
                    }),
                    (u.markUnresolved = function () {
                      this.Cn ||
                        this.classList.add(
                          "fo-unresolved",
                          "i-fohtml-unresolved"
                        );
                    }),
                    (u.getUpgradeDelayMs = function () {
                      return this.zn;
                    }),
                    (u.Fn = function (i, n) {
                      (this.Dn = i),
                        (this.zn = t.Date.now() - n),
                        (this.jn = 2),
                        this.setReadyStateInternal(Ki),
                        this.classList.remove(
                          "fo-unresolved",
                          "i-fohtml-unresolved"
                        ),
                        this.Bn(),
                        this.dispatchCustomEventForTesting(oe),
                        this.R1() || this.getResources().upgraded(this),
                        this.qt.signal(ce);
                    }),
                    (u.Bn = function () {
                      this._n != Vr &&
                        this.Dn &&
                        !this.Dn.isLayoutSupported(this._n) &&
                        ($t(
                          this.getAttribute("layout"),
                          "The element did not specify a layout attribute. Check https://fo.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."
                        ),
                        $t(!1, "Layout not supported: ".concat(this._n)));
                    }),
                    (u.getBuildPriority = function () {
                      return this.Cn ? this.Cn.getBuildPriority(this) : 3;
                    }),
                    (u.getLayoutPriority = function () {
                      return this.Dn ? this.Dn.getLayoutPriority() : 3;
                    }),
                    (u.getDefaultActionAlias = function () {
                      return (
                        Bt(this.isUpgraded()), this.Dn.getDefaultActionAlias()
                      );
                    }),
                    (u.isBuilding = function () {
                      return !!this.In;
                    }),
                    (u.isBuilt = function () {
                      return this.On;
                    }),
                    (u.whenBuilt = function () {
                      return this.qt.whenSignal(le);
                    }),
                    (u.buildInternal = function () {
                      var t = this;
                      if ((su(this), Bt(this.Cn), this.In)) return this.In;
                      this.setReadyStateInternal(Ki);
                      var i = this.qn();
                      this.$n();
                      var n = i
                        .then(function () {
                          var i,
                            n = t.Wn(),
                            r = n ? null : t.Kn();
                          if (n || r)
                            return ((i = t),
                            Cn(i, "consentPolicyManager", "fo-consent"))
                              .then(function (t) {
                                return (
                                  !t ||
                                  (n
                                    ? t.whenPolicyUnblock(n)
                                    : t.whenPurposesUnblock(r))
                                );
                              })
                              .then(function (t) {
                                if (!t) throw new Error(Es);
                              });
                        })
                        .then(function () {
                          return Bt(t.Dn).buildCallback();
                        });
                      return (this.In = n.then(
                        function () {
                          if (
                            ((t.On = !0),
                            t.classList.add("i-fohtml-built"),
                            t.classList.remove(
                              "i-fohtml-notbuilt",
                              "fo-notbuilt"
                            ),
                            t.qt.signal(le),
                            t.R1()
                              ? t.setReadyStateInternal(t.kn != Ki ? t.kn : Ji)
                              : (t.setReadyStateInternal(Xi), t.preconnect(!1)),
                            t.Tn && t.Yn(),
                            t.Ln && ir(Zt(t)).delay(t.Jn.bind(t), 1),
                            !t.getPlaceholder())
                          ) {
                            var i = t.createPlaceholder();
                            i && t.appendChild(i);
                          }
                        },
                        function (i) {
                          throw (
                            (t.qt.rejectSignal(le, i),
                            t.R1() && t.setReadyStateInternal(Zi, i),
                            Ms(i) || Ps(i, t),
                            i)
                          );
                        }
                      ));
                    }),
                    (u.build = function () {
                      var t = this;
                      return this.In
                        ? this.In
                        : this.qt.whenSignal(fe).then(function () {
                            return (
                              t.R1() && Ds(t.getfoDoc()).scheduleAsap(t),
                              t.whenBuilt()
                            );
                          });
                    }),
                    (u.mountInternal = function () {
                      var t = this;
                      if (this.Sn) return this.Sn;
                      this.Mn = this.Mn || new AbortController();
                      var i = this.Mn.signal;
                      return (this.Sn = this.buildInternal()
                        .then(function () {
                          if ((Bt(t.R1()), !i.aborted)) {
                            t.setReadyStateInternal(
                              t.kn != Ji ? t.kn : t.Cn.usesLoading(t) ? Xi : Ji
                            ),
                              (t.Pn = !0);
                            var n = t.Dn.mountCallback(i);
                            return !!n && n.then(tu);
                          }
                        })
                        .then(function (n) {
                          if (((t.Mn = null), i.aborted)) throw Is();
                          t.qt.signal(ve),
                            (t.Cn.usesLoading(t) && !n) ||
                              t.setReadyStateInternal(Qi);
                        })
                        .catch(function (i) {
                          var n;
                          throw (
                            ((t.Mn = null),
                            (n = i) &&
                            ("string" == typeof n
                              ? n.startsWith(As)
                              : "string" == typeof n.message &&
                                n.message.startsWith(As))
                              ? (t.Sn = null)
                              : (t.qt.rejectSignal(ve, i),
                                t.setReadyStateInternal(Zi, i)),
                            i)
                          );
                        }));
                    }),
                    (u.mount = function () {
                      var t = this;
                      if (this.Sn) return this.Sn;
                      this.Mn = this.Mn || new AbortController();
                      var i = this.Mn.signal;
                      return this.qt.whenSignal(fe).then(function () {
                        if (!t.R1()) return t.whenBuilt();
                        if (i.aborted) throw Is();
                        return Ds(t.getfoDoc()).scheduleAsap(t), t.whenMounted();
                      });
                    }),
                    (u.unmount = function () {
                      this.Tn && this.pause(),
                        this.R1()
                          ? (this.Mn && (this.Mn.abort(), (this.Mn = null)),
                            Ds(this.getfoDoc()).unschedule(this),
                            this.Pn && this.Dn.unmountCallback(),
                            (this.Pn = !1),
                            (this.Sn = null),
                            this.Xn(),
                            this.Tn && this.Vn(!0))
                          : this.Qn();
                    }),
                    (u.whenMounted = function () {
                      return this.qt.whenSignal(ve);
                    }),
                    (u.whenLoaded = function () {
                      return this.qt.whenSignal(pe);
                    }),
                    (u.ensureLoaded = function (t) {
                      var i = this;
                      return this.mount().then(function () {
                        if (i.R1())
                          return (
                            i.Cn.usesLoading(i) && i.Dn.ensureLoaded(),
                            i.whenLoaded()
                          );
                        var n = i.Zn();
                        return n.whenBuilt().then(function () {
                          if (
                            4 != n.getState() &&
                            ((3 != n.getState() || n.isMeasureRequested()) &&
                              n.measure(),
                            n.isDisplayed())
                          )
                            return (
                              i
                                .getResources()
                                .scheduleLayoutOrPreload(n, !0, t, !0),
                              i.whenLoaded()
                            );
                        });
                      });
                    }),
                    (u.setAsContainerInternal = function (t) {
                      Ds(this.getfoDoc()).setContainer(this, t);
                    }),
                    (u.removeAsContainerInternal = function () {
                      Ds(this.getfoDoc()).removeContainer(this);
                    }),
                    (u.setReadyStateInternal = function (t, i) {
                      if (t !== this.kn && ((this.kn = t), this.R1()))
                        switch (t) {
                          case Xi:
                            return (
                              this.qt.signal(de),
                              this.qt.reset(be),
                              this.qt.reset(pe),
                              this.classList.add("i-fohtml-layout"),
                              this.toggleLoading(!0),
                              void this.dispatchCustomEventForTesting(he)
                            );
                          case Qi:
                            return (
                              this.qt.signal(de),
                              this.qt.signal(pe),
                              this.qt.reset(be),
                              this.classList.add("i-fohtml-layout"),
                              this.toggleLoading(!1),
                              Mi(this, "load", null, Zs),
                              void this.dispatchCustomEventForTesting(ae)
                            );
                          case Zi:
                            return (
                              this.qt.rejectSignal(pe, i),
                              this.toggleLoading(!1),
                              void Mi(this, "error", i, Zs)
                            );
                        }
                    }),
                    (u.preconnect = function (t) {
                      var i = this;
                      Bt(this.isUpgraded()),
                        t
                          ? this.Dn.preconnectCallback(t)
                          : Gs(this.getfoDoc(), function () {
                              i.ownerDocument &&
                                i.ownerDocument.defaultView &&
                                i.Dn.preconnectCallback(t);
                            });
                    }),
                    (u.R1 = function () {
                      return !!this.Cn && this.Cn.R1();
                    }),
                    (u.deferredMount = function () {
                      return !!this.Cn && this.Cn.deferredMount(this);
                    }),
                    (u.isAlwaysFixed = function () {
                      return !!this.Dn && this.Dn.isAlwaysFixed();
                    }),
                    (u.updateLayoutBox = function (t) {
                      var i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      this.isBuilt() && this.onMeasure(i);
                    }),
                    (u.onMeasure = function () {
                      Bt(this.isBuilt());
                      try {
                        this.Dn.onLayoutMeasure();
                      } catch (t) {
                        Ps(t, this);
                      }
                    }),
                    (u.$n = function () {
                      var t;
                      return (
                        void 0 !== this.sizerElement ||
                          (this._n !== Br && this._n !== Jr) ||
                          ((this.sizerElement =
                            this.querySelector("i-fohtml-sizer")),
                          null === (t = this.sizerElement) ||
                            void 0 === t ||
                            t.setAttribute("slot", "i-fohtml-svc")),
                        this.sizerElement || null
                      );
                    }),
                    (u.tr = function (t) {
                      if (this._n !== Br)
                        if (this._n !== Jr);
                        else {
                          var i = t.querySelector(".i-fohtml-intrinsic-sizer");
                          if (!i) return;
                          i.setAttribute("src", "");
                        }
                      else wr(t, "paddingTop", "0");
                    }),
                    (u.ir = function () {
                      var t = this,
                        i =
                          this.hasAttribute("media") ||
                          (this.hasAttribute("sizes") &&
                            !this.hasAttribute("disable-inline-width")) ||
                          this.hasAttribute("heights"),
                        n = !!this.Gn,
                        r = this.ownerDocument.defaultView;
                      i != n &&
                        r &&
                        (i
                          ? ((this.Gn = new ge(r, function () {
                              return t.nr();
                            })),
                            this.nr())
                          : this.rr());
                    }),
                    (u.rr = function () {
                      this.Gn && (this.Gn.dispose(), (this.Gn = null));
                    }),
                    (u.nr = function () {
                      var t = this.Gn;
                      if (t) {
                        t.start();
                        var i = this.getAttribute("media") || null,
                          n = !i || t.resolveMatchQuery(i);
                        this.classList.toggle(
                          "i-fohtml-hidden-by-media-query",
                          !n
                        );
                        var r = this.hasAttribute("disable-inline-width")
                          ? null
                          : this.getAttribute("sizes");
                        r && wr(this, "width", t.resolveListQuery(r));
                        var e =
                          this._n === Br ? this.getAttribute("heights") : null;
                        if (e) {
                          var s = this.$n();
                          s && wr(s, "paddingTop", t.resolveListQuery(e));
                        }
                        t.complete(), this.Zn().requestMeasure();
                      }
                    }),
                    (u.applySize = function (t, i, n) {
                      var r = this.$n();
                      r &&
                        ((this.sizerElement = null),
                        this.tr(r),
                        this.er(function () {
                          r && wi(r);
                        })),
                        void 0 !== t && wr(this, "height", t, "px"),
                        void 0 !== i && wr(this, "width", i, "px"),
                        n &&
                          (null != n.top && wr(this, "marginTop", n.top, "px"),
                          null != n.right &&
                            wr(this, "marginRight", n.right, "px"),
                          null != n.bottom &&
                            wr(this, "marginBottom", n.bottom, "px"),
                          null != n.left && wr(this, "marginLeft", n.left, "px")),
                        this.sr() && this.ur(),
                        Mi(this, "fo:size-changed");
                    }),
                    (u.connectedCallback = function () {
                      if (
                        ((function () {
                          if (void 0 === Js) {
                            var t = self.document.createElement("template");
                            Js = "content" in t;
                          }
                          return Js;
                        })() ||
                          void 0 !== this.Un ||
                          (this.Un = !!ci(this, "template")),
                        !this.Un && !this.Tn && Ei(this))
                      ) {
                        if (
                          ((this.Tn = !0),
                          this.everAttached ||
                            this.classList.add(
                              "i-fohtml-element",
                              "i-fohtml-notbuilt",
                              "fo-notbuilt"
                            ),
                          !this.Ui)
                        ) {
                          var t = Zt(this),
                            i = Hn(t).getfoDoc(this);
                          (this.Ui = i), n(i, this, this.Cn);
                        }
                        if (
                          (this.bi || (this.bi = Zn(this.Ui)),
                          this.getResources().add(this),
                          this.everAttached)
                        ) {
                          var r = this.reconstructWhenReparented();
                          r && this.Xn(),
                            this.isUpgraded() &&
                              (r &&
                                !this.R1() &&
                                this.getResources().upgraded(this),
                              this.Yn(),
                              this.dispatchCustomEventForTesting(oe)),
                            this.Cn && this.R1() && this.Vn();
                        } else {
                          this.everAttached = !0;
                          try {
                            (this._n = (function (t) {
                              var i = t.getAttribute("i-fohtml-layout");
                              if (i) {
                                var n,
                                  r = Qr(i);
                                return (
                                  et(r),
                                  (r != Br && r != Jr) || !t.firstElementChild
                                    ? r == Vr && Er(t, !1)
                                    : ((t.sizerElement =
                                        t.querySelector("i-fohtml-sizer") ||
                                        void 0),
                                      null === (n = t.sizerElement) ||
                                        void 0 === n ||
                                        n.setAttribute("slot", "i-fohtml-svc")),
                                  r
                                );
                              }
                              var e = Ie(t),
                                s = e.height,
                                u = e.layout,
                                o = e.width;
                              if (
                                (t.classList.add(Zr(u)),
                                te(u) &&
                                  t.classList.add(
                                    "i-fohtml-layout-size-defined"
                                  ),
                                u == Vr)
                              )
                                Er(t, !1);
                              else if (u == Fr)
                                Ar(t, { width: ut(o), height: ut(s) });
                              else if (u == qr) wr(t, "height", ut(s));
                              else if (u == Br) {
                                var h =
                                  t.ownerDocument.createElement(
                                    "i-fohtml-sizer"
                                  );
                                h.setAttribute("slot", "i-fohtml-svc");
                                var a = re(s),
                                  f = re(o);
                                ot(a),
                                  ot(f),
                                  Ar(h, { paddingTop: (a / f) * 100 + "%" }),
                                  t.insertBefore(h, t.firstChild),
                                  (t.sizerElement = h);
                              } else if (u == Jr) {
                                var c = Ee(t)(Oe),
                                  l = c.firstElementChild;
                                st(l),
                                  l.setAttribute(
                                    "src",
                                    'data:image/svg+xml;charset=utf-8,<svg height="'
                                      .concat(s, '" width="')
                                      .concat(
                                        o,
                                        '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                                      )
                                  ),
                                  t.insertBefore(c, t.firstChild),
                                  (t.sizerElement = c);
                              } else
                                u == Wr ||
                                  u == $r ||
                                  (u == Yr
                                    ? (o && wr(t, "width", o),
                                      s && wr(t, "height", s))
                                    : u == Kr &&
                                      (t.classList.add(
                                        "i-fohtml-layout-awaiting-size"
                                      ),
                                      o && wr(t, "width", o),
                                      wr(t, "height", 0)));
                              return t.setAttribute("i-fohtml-layout", u), u;
                            })(this)),
                              this.ir();
                          } catch (t) {
                            Ps(t, this);
                          }
                          this.Cn
                            ? this.Vn()
                            : (nu.has("*") ||
                                nu.has(this.tagName.toLowerCase())) &&
                              this.markUnresolved(),
                            this.isUpgraded() ||
                              this.dispatchCustomEventForTesting("fo:stubbed");
                        }
                        this.toggleLoading(!0);
                      }
                    }),
                    (u.sr = function () {
                      return this.classList.contains(
                        "i-fohtml-layout-awaiting-size"
                      );
                    }),
                    (u.ur = function () {
                      this.classList.remove("i-fohtml-layout-awaiting-size");
                    }),
                    (u.Vn = function (t) {
                      if (this.R1()) {
                        if (!this.Sn)
                          if (
                            (Ds(this.getfoDoc()).schedule(this),
                            this.classList.remove(
                              "fo-unresolved",
                              "i-fohtml-unresolved"
                            ),
                            this.In)
                          )
                            this.setReadyStateInternal(
                              this.Cn && this.Cn.usesLoading(this) ? Xi : Ji
                            );
                          else if ((this.setReadyStateInternal(Ki), !t)) {
                            var i = this.Cn.getPreconnects(this);
                            if (i && i.length > 0) {
                              var n = this.getfoDoc();
                              Gs(n, function () {
                                var t = n.win;
                                if (t) {
                                  var r = Qn(t);
                                  i.forEach(function (t) {
                                    return r.url(n, t, !1);
                                  });
                                }
                              });
                            }
                          }
                      } else this.hr();
                    }),
                    (u.hr = function () {
                      var i = this;
                      if (!this.Un && 1 == this.jn) {
                        var n = new (Bt(this.Cn))(this);
                        this.jn = 4;
                        var r = t.Date.now(),
                          e = n.upgradeCallback();
                        if (e) {
                          if ("function" == typeof e.then)
                            return e
                              .then(function (t) {
                                i.Fn(t || n, r);
                              })
                              .catch(function (t) {
                                (i.jn = 3), d(t);
                              });
                          this.Fn(e, r);
                        } else this.Fn(n, r);
                      }
                    }),
                    (u.disconnectedCallback = function () {
                      this.disconnect(!1);
                    }),
                    (u.Yn = function () {
                      this.On && this.Dn.attachedCallback();
                    }),
                    (u.disconnect = function (t) {
                      !this.Un &&
                        this.Tn &&
                        ((!t && Ei(this)) ||
                          (t && this.classList.remove("i-fohtml-element"),
                          (this.Tn = !1),
                          this.getResources().remove(this),
                          this.Dn && this.Dn.detachedCallback(),
                          this.R1() && this.unmount(),
                          this.toggleLoading(!1),
                          this.rr()));
                    }),
                    (u.dispatchCustomEventForTesting = function (t, i) {}),
                    (u.prerenderAllowed = function () {
                      return (
                        !this.hasAttribute("noprerender") &&
                        !!this.Cn &&
                        this.Cn.prerenderAllowed(this)
                      );
                    }),
                    (u.isBuildRenderBlocking = function () {
                      return !!this.Dn && this.Dn.isBuildRenderBlocking();
                    }),
                    (u.createPlaceholder = function () {
                      return this.Dn ? this.Dn.createPlaceholderCallback() : null;
                    }),
                    (u.createLoaderLogo = function () {
                      return this.Cn
                        ? this.Cn.createLoaderLogoCallback(this)
                        : {};
                    }),
                    (u.renderOutsideViewport = function () {
                      return !!this.Dn && this.Dn.renderOutsideViewport();
                    }),
                    (u.idleRenderOutsideViewport = function () {
                      return !!this.Dn && this.Dn.idleRenderOutsideViewport();
                    }),
                    (u.getLayoutBox = function () {
                      return this.Zn().getLayoutBox();
                    }),
                    (u.getLayoutSize = function () {
                      return this.Zn().getLayoutSize();
                    }),
                    (u.getOwner = function () {
                      return this.Zn().getOwner();
                    }),
                    (u.getIntersectionChangeEntry = function () {
                      var t = this.Dn
                          ? this.Dn.getIntersectionElementLayoutBox()
                          : this.getLayoutBox(),
                        i = this.getOwner(),
                        n = or(this.getfoDoc()).getRect();
                      return (function (t, i, n) {
                        var r,
                          e,
                          s,
                          u,
                          o =
                            (function (t) {
                              for (
                                var i = -1 / 0,
                                  n = 1 / 0,
                                  r = -1 / 0,
                                  e = 1 / 0,
                                  s = 0;
                                s < arguments.length;
                                s++
                              ) {
                                var u = arguments[s];
                                if (
                                  u &&
                                  ((i = Math.max(i, u.left)),
                                  (n = Math.min(n, u.left + u.width)),
                                  (r = Math.max(r, u.top)),
                                  (e = Math.min(e, u.top + u.height)),
                                  n < i || e < r)
                                )
                                  return null;
                              }
                              return n == 1 / 0 ? null : ki(i, r, n - i, e - r);
                            })(t, i, n) || ki(0, 0, 0, 0);
                        return (function (t, i, n, r) {
                          var e = t,
                            s = i;
                          return (
                            i &&
                              ((s = s),
                              (n = Ci(n, -i.left, -i.top)),
                              (e = Ci(e, -i.left, -i.top)),
                              (s = Ci(s, -i.left, -i.top))),
                            {
                              time:
                                "undefined" != typeof performance &&
                                performance.now
                                  ? performance.now()
                                  : Date.now() - Qs,
                              rootBounds: s,
                              boundingClientRect: e,
                              intersectionRect: n,
                              intersectionRatio: r,
                            }
                          );
                        })(
                          t,
                          n,
                          o,
                          ((e = t),
                          (s = (r = o).width * r.height),
                          0 == (u = e.width * e.height) ? 0 : s / u)
                        );
                      })(t, i && i.getLayoutBox(), n);
                    }),
                    (u.Zn = function () {
                      return this.getResources().getResourceForElement(this);
                    }),
                    (u.getResourceId = function () {
                      return this.Zn().getId();
                    }),
                    (u.isRelayoutNeeded = function () {
                      return !!this.Dn && this.Dn.isRelayoutNeeded();
                    }),
                    (u.getImpl = function () {
                      var t = this;
                      return (
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        !arguments[0]
                          ? this.qn()
                          : this.build()
                      ).then(function () {
                        return t.Dn;
                      });
                    }),
                    (u.qn = function () {
                      var t = this;
                      return this.qt.whenSignal(fe).then(function () {
                        return t.hr(), t.whenUpgraded();
                      });
                    }),
                    (u.getApi = function () {
                      return this.getImpl().then(function (t) {
                        return t.getApi();
                      });
                    }),
                    (u.getLayout = function () {
                      return this._n;
                    }),
                    (u.layoutCallback = function (t) {
                      var i = this;
                      if ((su(this), Bt(this.isBuilt()), t.aborted))
                        return Promise.reject(Is());
                      this.dispatchCustomEventForTesting(he);
                      var n = 0 == this.xi;
                      this.qt.reset(be),
                        n && this.qt.signal(de),
                        this.toggleLoading(!0);
                      var r = f(function () {
                        return i.Dn.layoutCallback();
                      });
                      return (
                        this.preconnect(!0),
                        this.classList.add("i-fohtml-layout"),
                        r.then(
                          function () {
                            if (t.aborted) throw Is();
                            n && i.qt.signal(pe),
                              i.setReadyStateInternal(Qi),
                              i.xi++,
                              i.toggleLoading(!1),
                              i.Rn ||
                                (i.Dn.firstLayoutCompleted(),
                                (i.Rn = !0),
                                i.dispatchCustomEventForTesting(ae));
                          },
                          function (r) {
                            if (t.aborted) throw Is();
                            throw (
                              (n && i.qt.rejectSignal(pe, r),
                              i.setReadyStateInternal(Zi, r),
                              i.xi++,
                              i.toggleLoading(!1),
                              r)
                            );
                          }
                        )
                      );
                    }),
                    (u.pause = function () {
                      this.isBuilt() &&
                        (this.Dn.pauseCallback(),
                        !this.R1() && this.Dn.unlayoutOnPause() && this.Qn());
                    }),
                    (u.resume = function () {
                      this.isBuilt() && this.Dn.resumeCallback();
                    }),
                    (u.unlayoutCallback = function () {
                      if ((su(this), !this.isBuilt())) return !1;
                      this.qt.signal(be);
                      var t = this.Dn.unlayoutCallback();
                      return (
                        t && this.Xn(),
                        this.dispatchCustomEventForTesting("fo:unload"),
                        t
                      );
                    }),
                    (u.Qn = function () {
                      this.Zn().unlayout(),
                        this.Tn && this.bi && this.bi.schedulePass();
                    }),
                    (u.Xn = function () {
                      (this.xi = 0),
                        (this.Rn = !1),
                        this.qt.reset(ve),
                        this.qt.reset(me),
                        this.qt.reset(de),
                        this.qt.reset(pe),
                        this.qt.reset("ini-load");
                    }),
                    (u.reconstructWhenReparented = function () {
                      return !!this.Dn && this.Dn.reconstructWhenReparented();
                    }),
                    (u.collapse = function () {
                      this.Dn && this.Dn.collapse();
                    }),
                    (u.collapsedCallback = function (t) {
                      this.Dn && this.Dn.collapsedCallback(t);
                    }),
                    (u.expand = function () {
                      this.Dn && this.Dn.expand();
                    }),
                    (u.mutatedAttributesCallback = function (t) {
                      this.Dn && this.Dn.mutatedAttributesCallback(t);
                    }),
                    (u.enqueAction = function (t) {
                      su(this),
                        this.isBuilt()
                          ? this.ar(t, !1)
                          : (void 0 === this.Ln && (this.Ln = []),
                            Bt(this.Ln).push(t),
                            this.build());
                    }),
                    (u.Jn = function () {
                      var t = this;
                      if (this.Ln) {
                        var i = Bt(this.Ln);
                        (this.Ln = null),
                          i.forEach(function (i) {
                            t.ar(i, !0);
                          });
                      }
                    }),
                    (u.ar = function (t, i) {
                      try {
                        this.Dn.executeAction(t, i);
                      } catch (i) {
                        d(
                          "Action execution failed:",
                          i,
                          t.node.tagName,
                          t.method
                        );
                      }
                    }),
                    (u.Wn = function () {
                      var t,
                        i,
                        n = this.getAttribute("data-block-on-consent");
                      if (null === n) {
                        if (
                          !(i = (t = this)
                            .getfoDoc()
                            .getMetaByName("fo-consent-blocking")) ||
                          !(i = i.toUpperCase().replace(/\s+/g, ""))
                            .split(",")
                            .includes(t.tagName)
                        )
                          return null;
                        (n = "default"),
                          this.setAttribute("data-block-on-consent", n);
                      }
                      return "" == n || "default" == n
                        ? Bt(this.Dn).getConsentPolicy()
                        : n;
                    }),
                    (u.Kn = function () {
                      var t,
                        i =
                          this.getAttribute("data-block-on-consent-purposes") ||
                          null;
                      return null == i ||
                        null === (t = i.replace(/\s+/g, "")) ||
                        void 0 === t
                        ? void 0
                        : t.split(",");
                    }),
                    (u.getPlaceholder = function () {
                      return li(this, function (t) {
                        return t.hasAttribute("placeholder") && !eu(t);
                      });
                    }),
                    (u.togglePlaceholder = function (t) {
                      if ((su(this), t)) {
                        var i = this.getPlaceholder();
                        i && i.classList.remove("fo-hidden");
                      } else
                        for (
                          var n =
                              (this,
                              (e = void 0),
                              void 0,
                              ui("placeholder"),
                              (e = this),
                              (s = "> [".concat("placeholder", "]")),
                              ri(e)
                                ? e.querySelectorAll(ei(s, ":scope"))
                                : oi(e, s)),
                            r = 0;
                          r < n.length;
                          r++
                        )
                          eu(n[r]) || n[r].classList.add("fo-hidden");
                      var e, s;
                    }),
                    (u.getFallback = function () {
                      return vi(this, "fallback");
                    }),
                    (u.toggleFallback = function (t) {
                      su(this);
                      var i,
                        n = this.Zn().getState();
                      if (
                        (this.R1() || !t || (0 != n && 1 != n && 2 != n)) &&
                        (this.classList.toggle("fo-notsupported", t), 1 == t)
                      ) {
                        var r = this.getFallback();
                        r &&
                          ((i = this.getfoDoc()),
                          pn(i, "owners")).scheduleLayout(this, r);
                      }
                    }),
                    (u.renderStarted = function () {
                      this.qt.signal(me),
                        this.togglePlaceholder(!1),
                        this.toggleLoading(!1);
                    }),
                    (u.cr = function (t) {
                      var i,
                        n,
                        r = this.xi > 0 || this.qt.get(me);
                      return !(
                        this._n == Vr ||
                        this.hasAttribute("noloading") ||
                        (r && !t) ||
                        (this,
                        (n = this.tagName.toUpperCase()),
                        "fo-AD" !== (i = n) &&
                          "fo-ANIM" !== i &&
                          "fo-EMBED" !== i &&
                          "fo-FACEBOOK" !== i &&
                          "fo-FACEBOOK-COMMENTS" !== i &&
                          "fo-FACEBOOK-PAGE" !== i &&
                          "fo-GOOGLE-DOCUMENT-EMBED" !== i &&
                          "fo-IFRAME" !== i &&
                          "fo-img" !== i &&
                          "fo-INSTAGRAM" !== i &&
                          "fo-LIST" !== i &&
                          "fo-PINTEREST" !== i &&
                          "fo-PLAYBUZZ" !== i &&
                          "fo-RENDER" !== i &&
                          "fo-TIKTOK" !== i &&
                          "fo-TWITTER" !== i &&
                          !(function (t) {
                            return "fo-VIDEO" != t && Xr.test(t);
                          })(n)) ||
                        di(this)
                      );
                    }),
                    (u.toggleLoading = function (t) {
                      var i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if (this.ownerDocument && this.ownerDocument.defaultView) {
                        var n = Yn(this.getfoDoc());
                        n &&
                          ((t = t && this.cr(i))
                            ? n.track(this)
                            : n.untrack(this));
                      }
                    }),
                    (u.getOverflowElement = function () {
                      return (
                        void 0 === this.Nn &&
                          ((this.Nn = vi(this, "overflow")),
                          this.Nn &&
                            (this.Nn.hasAttribute("tabindex") ||
                              this.Nn.setAttribute("tabindex", "0"),
                            this.Nn.hasAttribute("role") ||
                              this.Nn.setAttribute("role", "button"))),
                        this.Nn
                      );
                    }),
                    (u.overflowCallback = function (t, i, n) {
                      var r = this;
                      this.getOverflowElement(),
                        this.Nn
                          ? (this.Nn.classList.toggle("fo-visible", t),
                            (this.Nn.onclick = t
                              ? function () {
                                  var t = Kn(r.getfoDoc());
                                  t.forceChangeSize(r, i, n),
                                    t.mutateElement(r, function () {
                                      r.overflowCallback(!1, i, n);
                                    });
                                }
                              : null))
                          : t &&
                            this.warnOnMissingOverflow &&
                            Vt().warn(
                              "CustomElement",
                              "Cannot resize element and overflow is not available",
                              this
                            );
                    }),
                    (u.er = function (t, i) {
                      var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      this.Ui
                        ? Kn(this.getfoDoc()).mutateElement(i || this, t, n)
                        : t();
                    }),
                    i(s, [
                      {
                        key: "readyState",
                        get: function () {
                          return this.kn;
                        },
                      },
                    ]),
                    s
                  );
                })(t.HTMLElement);
                return (t.__fo_BASE_CE_CLASS = r), t.__fo_BASE_CE_CLASS;
              })(t, n),
              e = (function (t) {
                U(n, t);
                var i = H(n);
                function n() {
                  return i.apply(this, arguments);
                }
                return (
                  (n.prototype.adoptedCallback = function () {
                    Object.getPrototypeOf(this) !== s &&
                      Object.setPrototypeOf(this, s);
                  }),
                  n
                );
              })(r),
              s = e.prototype;
            return e;
          }
          function eu(t) {
            return "placeholder" in t;
          }
          function su(t) {
            Bt(!t.Un);
          }
          function uu(t) {
            nu.add(t || "*");
            for (var i, n = o(iu, !0); !(i = n()).done; ) {
              var r = i.value;
              (null != t && r.tagName.toLowerCase() !== t) || r.markUnresolved();
            }
          }
          var ou = new WeakMap();
          function hu(t) {
            return (
              t.__fo_EXTENDED_ELEMENTS || (t.__fo_EXTENDED_ELEMENTS = {}),
              t.__fo_EXTENDED_ELEMENTS
            );
          }
          function au(t, i, n) {
            var r = hu(t);
            if (r[i]) {
              if (r[i] != n) {
                $t(
                  r[i] == Xs,
                  "%s is already registered. The script tag for %s is likely included twice in the page.",
                  i,
                  i
                ),
                  (r[i] = n);
                for (var e = 0; e < iu.length; e++) {
                  var s = iu[e];
                  s.tagName.toLowerCase() == i &&
                    s.ownerDocument.defaultView == t &&
                    (fu(s, n), iu.splice(e--, 1));
                }
              }
            } else du(t, i, n);
          }
          function fu(t, i) {
            try {
              t.upgrade(i);
            } catch (i) {
              Ps(i, t);
            }
          }
          function cu(t) {
            (function (t) {
              if (!t) return [];
              for (
                var i = t.querySelectorAll(
                    "script[custom-element],script[custom-template]"
                  ),
                  n = [],
                  r = 0;
                r < i.length;
                r++
              ) {
                var e = i[r],
                  s =
                    e.getAttribute("custom-element") ||
                    e.getAttribute("custom-template"),
                  u = an(e.src);
                s &&
                  u &&
                  n.push({
                    script: e,
                    extensionId: s,
                    extensionVersion: u.extensionVersion,
                  });
              }
              return n;
            })(t.getHeadNode()).forEach(function (i) {
              var n = i.extensionId,
                r = i.extensionVersion,
                e = i.script;
              t.declareExtension(n, r),
                e.addEventListener("error", function () {
                  return uu(n);
                }),
                lu(t.win, n);
            }),
              t.isBodyAvailable() && t.setExtensionsKnown();
          }
          function lu(t, i) {
            hu(t)[i] || du(t, i, Xs);
          }
          function vu(t, i, n) {
            du(i, n, hu(t)[n] || Xs);
          }
          function du(t, i, n) {
            hu(t)[i] = n;
            var r = ru(t, mu);
            t.customElements.define(i, r);
          }
          function mu(t, i, n) {
            ou.has(t) || (ou.set(t, !0), cu(t));
            var r = i.localName;
            n ||
              t.declaresExtension(r) ||
              $n(t.win).installExtensionForDoc(t, r, "0.1");
          }
          var pu = "fo-img",
            bu = [
              "alt",
              "aria-describedby",
              "aria-label",
              "aria-labelledby",
              "crossorigin",
              "referrerpolicy",
              "title",
              "importance",
              "sizes",
              "srcset",
              "src",
            ],
            gu = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t) {
                var n;
                return (
                  ((n = i.call(this, t)).lr = !0),
                  (n.vr = null),
                  (n.dr = null),
                  (n.mr = null),
                  (n.pr = 0),
                  n
                );
              }
              (n.R1 = function () {
                return !1;
              }),
                (n.prerenderAllowed = function () {
                  return !0;
                }),
                (n.usesLoading = function () {
                  return !0;
                }),
                (n.getPreconnects = function (t) {
                  var i = t.getAttribute("src");
                  if (i) return [i];
                  var n = t.getAttribute("srcset");
                  if (n) {
                    var r = /\S+/.exec(n);
                    if (r) return [r[0]];
                  }
                  return null;
                });
              var r = n.prototype;
              return (
                (r.mutatedAttributesCallback = function (t) {
                  if (this.vr) {
                    var i = bu.filter(function (i) {
                      return void 0 !== t[i];
                    });
                    t.src &&
                      !t.srcset &&
                      this.element.hasAttribute("srcset") &&
                      (this.element.removeAttribute("srcset"),
                      i.push("srcset"),
                      this.user().warn(
                        pu,
                        "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.",
                        this.element
                      )),
                      se(i, this.element, this.vr, !0),
                      this.propagateDataset(this.vr),
                      Gr(this.vr),
                      n.R1() && !this.vr.complete && this.setReadyState(Xi);
                  }
                }),
                (r.preconnectCallback = function (t) {
                  var i = this.element.getAttribute("src");
                  if (i) Qn(this.win).url(this.getfoDoc(), i, t);
                  else {
                    var n = this.element.getAttribute("srcset");
                    if (!n) return;
                    var r = /\S+/.exec(n);
                    r && Qn(this.win).url(this.getfoDoc(), r[0], t);
                  }
                }),
                (r.isLayoutSupported = function (t) {
                  return te(t);
                }),
                (r.br = function () {
                  if (this.vr) return this.vr;
                  this.lr = !this.element.hasAttribute("fallback");
                  var t,
                    i,
                    n = Si(this.element);
                  return (
                    n && (this.vr = hi(this.element, "> img:not([placeholder])")),
                    (this.vr = this.vr || new Image()),
                    this.vr.setAttribute("decoding", "async"),
                    this.element.id &&
                      this.vr.setAttribute("fo-img-id", this.element.id),
                    "img" == this.element.getAttribute("role") &&
                      (this.element.removeAttribute("role"),
                      this.user().error(
                        pu,
                        "Setting role=img on fo-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."
                      )),
                    this.gr(!0),
                    se(bu, this.element, this.vr),
                    this.propagateDataset(this.vr),
                    Gr(this.vr),
                    ee(this.vr, !0),
                    (t = this.element),
                    (i = this.vr),
                    t.hasAttribute("object-fit") &&
                      wr(i, "object-fit", t.getAttribute("object-fit")),
                    t.hasAttribute("object-position") &&
                      wr(i, "object-position", t.getAttribute("object-position")),
                    n || this.element.appendChild(this.vr),
                    this.vr
                  );
                }),
                (r.gr = function (t) {
                  var i = this;
                  if (
                    this.vr &&
                    !this.element.hasAttribute("i-fohtml-ssr") &&
                    !this.element.hasAttribute("sizes") &&
                    !this.vr.hasAttribute("sizes")
                  ) {
                    var n = this.element.getAttribute("srcset");
                    if (n && !/[0-9]+x(?:,|$)/.test(n)) {
                      var r = this.element.getLayoutSize().width;
                      if (this.yr(r)) {
                        var e = this.getViewport().getWidth(),
                          s = "(max-width: ".concat(e, "px) ").concat(r, "px, "),
                          u = r + "px";
                        if (this.getLayout() !== Fr) {
                          var o = Math.round((100 * r) / e);
                          u = Math.max(o, 100) + "vw";
                        }
                        var h = s + u;
                        t
                          ? this.vr.setAttribute("sizes", h)
                          : this.mutateElement(function () {
                              i.vr.setAttribute("sizes", h);
                            }),
                          (this.pr = r);
                      }
                    }
                  }
                }),
                (r.yr = function (t) {
                  return !this.vr.hasAttribute("sizes") || t > this.pr;
                }),
                (r.reconstructWhenReparented = function () {
                  return !1;
                }),
                (r.mountCallback = function () {
                  var t = this,
                    i = !!this.vr,
                    n = this.br();
                  i ||
                    (Ue(n, "load", function () {
                      t.setReadyState(Qi), t.firstLayoutCompleted(), t.wr();
                    }),
                    Ue(n, "error", function (i) {
                      t.setReadyState(Zi, i), t.Ar();
                    })),
                    n.complete
                      ? (this.setReadyState(Qi),
                        this.firstLayoutCompleted(),
                        this.wr())
                      : this.setReadyState(Xi);
                }),
                (r.unmountCallback = function () {
                  var t = this.vr;
                  t &&
                    !t.complete &&
                    ((t.src =
                      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="),
                    wi(t),
                    (this.vr = null));
                }),
                (r.ensureLoaded = function () {
                  this.vr.loading = "eager";
                }),
                (r.layoutCallback = function () {
                  var t = this;
                  this.br();
                  var i = this.vr;
                  return (
                    (this.dr = Ue(i, "load", function () {
                      return t.wr();
                    })),
                    (this.mr = Ue(i, "error", function () {
                      return t.Ar();
                    })),
                    this.element.getLayoutSize().width <= 0
                      ? h()
                      : this.loadPromise(i)
                  );
                }),
                (r.unlayoutCallback = function () {
                  if (!n.R1()) {
                    this.mr && (this.mr(), (this.mr = null)),
                      this.dr && (this.dr(), (this.dr = null));
                    var t = this.vr;
                    return (
                      t &&
                        !t.complete &&
                        ((t.src =
                          "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="),
                        wi(t),
                        (this.vr = null)),
                      !0
                    );
                  }
                }),
                (r.firstLayoutCompleted = function () {
                  var t = this.getPlaceholder();
                  t && t.classList.contains("i-fohtml-blurry-placeholder")
                    ? yr(t, { opacity: 0 })
                    : this.togglePlaceholder(!1);
                }),
                (r.wr = function () {
                  !this.lr &&
                    this.vr.classList.contains("i-fohtml-ghost") &&
                    (this.vr.classList.remove("i-fohtml-ghost"),
                    this.toggleFallback(!1));
                }),
                (r.Ar = function () {
                  this.lr &&
                    (this.vr.classList.add("i-fohtml-ghost"),
                    this.toggleFallback(!0),
                    this.togglePlaceholder(!1),
                    (this.lr = !1));
                }),
                (r.propagateDataset = function (t) {
                  for (var i in t.dataset)
                    i in this.element.dataset || delete t.dataset[i];
                  for (var n in this.element.dataset)
                    (n.startsWith("foBind") && "foBind" !== n) ||
                      (t.dataset[n] !== this.element.dataset[n] &&
                        (t.dataset[n] = this.element.dataset[n]));
                }),
                n
              );
            })(Ys),
            yu = (function (t) {
              U(n, t);
              var i = H(n);
              function n() {
                return i.apply(this, arguments);
              }
              n.prerenderAllowed = function () {
                return !0;
              };
              var r = n.prototype;
              return (
                (r.isLayoutSupported = function (t) {
                  return t == $r || te(t);
                }),
                (r.buildCallback = function () {
                  !(function (t) {
                    if (!Si(t)) {
                      var i = (function (t) {
                        var i;
                        return (
                          Qr(
                            null !== (i = t.getAttribute("layout")) &&
                              void 0 !== i
                              ? i
                              : ""
                          ) || Ie(t).layout
                        );
                      })(t);
                      if (i != $r) {
                        var n = t.ownerDocument.createElement("div");
                        ee(n),
                          (function (t) {
                            return (function (t, i) {
                              for (
                                var n = [], r = t.firstChild;
                                r;
                                r = r.nextSibling
                              )
                                !di(r) && n.push(r);
                              return n;
                            })(t);
                          })(t).forEach(function (t) {
                            n.appendChild(t);
                          }),
                          t.appendChild(n);
                      }
                    }
                  })(this.element);
                }),
                n
              );
            })(Ys);
          function wu(t, i) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = _r.getImage(t),
              e = new r();
            return n && (e.referrerPolicy = "no-referrer"), (e.src = i), e;
          }
          var Au = "fo-pixel",
            Eu = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t) {
                var n;
                return ((n = i.call(this, t)).Er = null), n;
              }
              var r = n.prototype;
              return (
                (r.isLayoutSupported = function (t) {
                  return !0;
                }),
                (r.buildCallback = function () {
                  this.element.setAttribute("aria-hidden", "true"),
                    (this.Or = this.element.getAttribute("referrerpolicy")),
                    this.Or &&
                      $t(
                        "no-referrer" == this.Or,
                        ""
                          .concat(Au, ': invalid "referrerpolicy" value "')
                          .concat(this.Or, '".') +
                          ' Only "no-referrer" is supported'
                      ),
                    this.element.hasAttribute("i-fohtml-ssr") &&
                    this.element.querySelector("img")
                      ? qt().info(Au, "inabox img already present")
                      : this.getfoDoc()
                          .whenFirstVisible()
                          .then(this.Tr.bind(this));
                }),
                (r.Tr = function () {
                  var t = this;
                  if (this.Er) return qt().error(Au, "duplicate pixel"), this.Er;
                  this.Er = ir(this.win)
                    .promise(1)
                    .then(function () {
                      var i = t.element.getAttribute("src");
                      if (i)
                        return nr(t.element)
                          .expandUrlAsync(t.Ir(i))
                          .then(function (i) {
                            if (t.win) {
                              var n = (function (t, i, n) {
                                return (
                                  n &&
                                    "no-referrer" !== n &&
                                    Vt().error(
                                      "pixel",
                                      "Unsupported referrerPolicy: %s",
                                      n
                                    ),
                                  "no-referrer" === n
                                    ? (function (t, i) {
                                        if ("referrerPolicy" in Image.prototype)
                                          return wu(t, i, !0);
                                        var n,
                                          r =
                                            ((n = {
                                              src: "about:blank",
                                              style: "display:none",
                                            }),
                                            (function (t, i) {
                                              for (var n in i)
                                                t.setAttribute(n, i[n]);
                                              return t;
                                            })(
                                              t.document.createElement("iframe"),
                                              n
                                            ));
                                        return (
                                          (r.onload = function () {
                                            wu(r.contentWindow, i);
                                          }),
                                          t.document.body.appendChild(r),
                                          r
                                        );
                                      })(t, i)
                                    : wu(t, i)
                                );
                              })(t.win, i, t.Or);
                              return qt().info(Au, "pixel triggered: ", i), n;
                            }
                          });
                    });
                }),
                (r.Ir = function (t) {
                  return (
                    $t(
                      /^(https\:\/\/|\/\/)/i.test(t),
                      'The <fo-pixel> src attribute must start with "https://" or "//". Invalid value: ' +
                        t
                    ),
                    t
                  );
                }),
                n
              );
            })(Ys),
            xu = (function () {
              function t(t, i, n) {
                var r = this;
                (this.Pr = ir(t)),
                  (this.Sr = i),
                  (this.Mr = n || 0),
                  (this.kr = -1),
                  (this._r = 0),
                  (this.Rr = !1),
                  (this.Nr = function () {
                    r.Cr();
                  });
              }
              var i = t.prototype;
              return (
                (i.isPending = function () {
                  return -1 != this.kr;
                }),
                (i.schedule = function (t) {
                  var i = t || this.Mr;
                  this.Rr && i < 10 && (i = 10);
                  var n = Date.now() + i;
                  return (
                    (!this.isPending() || n - this._r < -10) &&
                    (this.cancel(),
                    (this._r = n),
                    (this.kr = this.Pr.delay(this.Nr, i)),
                    !0)
                  );
                }),
                (i.Cr = function () {
                  (this.kr = -1),
                    (this._r = 0),
                    (this.Rr = !0),
                    this.Sr(),
                    (this.Rr = !1);
                }),
                (i.cancel = function () {
                  this.isPending() && (this.Pr.cancel(this.kr), (this.kr = -1));
                }),
                t
              );
            })();
          function Ou(t, i) {
            var n = i.documentElement;
            return t.some(function (t) {
              return n.hasAttribute(t);
            });
          }
          function Pu(t) {
            return Ou(["⚡4email", "fo4email"], t);
          }
          function Iu(t) {
            return Ou(["⚡", "fo"], t);
          }
          var Mu = "Action",
            Tu = "__fo_ACTION_MAP__" + Math.random(),
            Su = "__fo_ACTION_QUEUE__",
            _u = "__fo_ACTION_HANDLER__",
            ku = { form: ["submit", "clear"] },
            Ru = [
              { tagOrTarget: "fo", method: "setState" },
              { tagOrTarget: "*", method: "focus" },
              { tagOrTarget: "*", method: "hide" },
              { tagOrTarget: "*", method: "show" },
              { tagOrTarget: "*", method: "toggleClass" },
              { tagOrTarget: "*", method: "toggleChecked" },
              { tagOrTarget: "*", method: "toggleVisibility" },
            ],
            Cu = {
              button: !0,
              checkbox: !0,
              link: !0,
              listbox: !0,
              menuitem: !0,
              menuitemcheckbox: !0,
              menuitemradio: !0,
              option: !0,
              radio: !0,
              scrollbar: !0,
              slider: !0,
              spinbutton: !0,
              switch: !0,
              tab: !0,
              treeitem: !0,
            },
            Nu = (function () {
              function t(t, i, n, r, e, s, u) {
                var o =
                    arguments.length > 7 && void 0 !== arguments[7]
                      ? arguments[7]
                      : "?",
                  h =
                    arguments.length > 8 && void 0 !== arguments[8]
                      ? arguments[8]
                      : null,
                  a =
                    arguments.length > 9 && void 0 !== arguments[9]
                      ? arguments[9]
                      : Math.random();
                (this.node = t),
                  (this.method = i),
                  (this.args = n),
                  (this.source = r),
                  (this.caller = e),
                  (this.event = s),
                  (this.trust = u),
                  (this.actionEventType = o),
                  (this.tagOrTarget = h || t.tagName),
                  (this.sequenceId = a);
              }
              return (
                (t.prototype.satisfiesTrust = function (t) {
                  if (!J(this.trust))
                    return (
                      qt().error(
                        Mu,
                        "Invalid trust for '"
                          .concat(this.method, "': ")
                          .concat(this.trust)
                      ),
                      !1
                    );
                  if (this.trust < t) {
                    var i = (function (t) {
                      switch (t) {
                        case 1:
                          return "low";
                        case 3:
                          return "high";
                        default:
                          return et(2 === t), "default";
                      }
                    })(this.trust);
                    return (
                      Vt().error(
                        Mu,
                        '"'
                          .concat(this.actionEventType, '" event with "')
                          .concat(i, '" trust is not allowed to ') +
                          'invoke "'
                            .concat(this.tagOrTarget.toLowerCase(), ".")
                            .concat(this.method, '".')
                      ),
                      !1
                    );
                  }
                  return !0;
                }),
                t
              );
            })(),
            Du = (function () {
              function t(t, i) {
                (this.fodoc = t),
                  (this.Dr = i || t.getRootNode()),
                  (this.jr = this.fodoc.isSingleDoc() && Pu(this.Dr)),
                  (this.zr = this.jr ? Ru : null),
                  (this.Lr = A()),
                  (this.Ur = A()),
                  this.addEvent("tap"),
                  this.addEvent("submit"),
                  this.addEvent("change"),
                  this.addEvent("input-debounced"),
                  this.addEvent("input-throttled"),
                  this.addEvent("valid"),
                  this.addEvent("invalid");
              }
              var i = t.prototype;
              return (
                (i.addEvent = function (t) {
                  var i = this;
                  if ("tap" == t)
                    this.Dr.addEventListener("click", function (n) {
                      if (!n.defaultPrevented) {
                        var r = n.target;
                        i.trigger(r, t, n, 3);
                      }
                    }),
                      this.Dr.addEventListener("keydown", function (n) {
                        var r = n.key,
                          e = n.target;
                        if ("Enter" == r || " " == r) {
                          var s = e.getAttribute("role"),
                            u = s && E(Cu, s.toLowerCase());
                          !n.defaultPrevented &&
                            u &&
                            i.trigger(e, t, n, 3) &&
                            n.preventDefault();
                        }
                      });
                  else if ("submit" == t)
                    this.Dr.addEventListener(t, function (n) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    });
                  else if ("change" == t)
                    this.Dr.addEventListener(t, function (n) {
                      var r = n.target;
                      i.Hr(n), i.trigger(r, t, n, 3);
                    });
                  else if ("input-debounced" == t) {
                    var n = mt(
                      this.fodoc.win,
                      function (n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3);
                      },
                      300
                    );
                    this.Dr.addEventListener("input", function (t) {
                      var r = new Uu(t);
                      i.Hr(r), n(r);
                    });
                  } else if ("input-throttled" == t) {
                    var r = dt(
                      this.fodoc.win,
                      function (n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3);
                      },
                      100
                    );
                    this.Dr.addEventListener("input", function (t) {
                      var n = new Uu(t);
                      i.Hr(n), r(n);
                    });
                  } else
                    ("valid" != t && "invalid" != t) ||
                      this.Dr.addEventListener(t, function (n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3);
                      });
                }),
                (i.addGlobalTarget = function (t, i) {
                  this.Lr[t] = i;
                }),
                (i.addGlobalMethodHandler = function (t, i) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 2;
                  this.Ur[t] = { handler: i, minTrust: n };
                }),
                (i.trigger = function (t, i, n, r, e) {
                  return this.Gr(t, i, n, r, e);
                }),
                (i.execute = function (t, i, n, r, e, s, u) {
                  var o = new Nu(t, i, n, r, e, s, u);
                  this.Vr(o);
                }),
                (i.installActionHandler = function (t, i) {
                  if (
                    (Bt(
                      ju(t.getAttribute("id") || "") ||
                        t.tagName.toLowerCase() in ku
                    ),
                    t[_u])
                  )
                    qt().error(
                      Mu,
                      "Action handler already installed for ".concat(t)
                    );
                  else {
                    t[_u] = i;
                    var n = t[Su];
                    V(n) &&
                      ir(Zt(t)).delay(function () {
                        n.forEach(function (t) {
                          try {
                            i(t);
                          } catch (i) {
                            qt().error(Mu, "Action execution failed:", t, i);
                          }
                        }),
                          (t[Su].length = 0);
                      }, 1);
                  }
                }),
                (i.hasAction = function (t, i, n) {
                  return !!this.Fr(t, i, n);
                }),
                (i.hasResolvableAction = function (t, i, n) {
                  var r = this,
                    e = this.Fr(t, i, n);
                  return (
                    !!e &&
                    e.actionInfos.some(function (t) {
                      var i = t.target;
                      return !!r.Br(i);
                    })
                  );
                }),
                (i.hasResolvableActionForTarget = function (t, i, n, r) {
                  var e = this,
                    s = this.Fr(t, i, r);
                  return (
                    !!s &&
                    s.actionInfos.some(function (t) {
                      var i = t.target;
                      return e.Br(i) == n;
                    })
                  );
                }),
                (i.Br = function (t) {
                  return this.Lr[t] ? this.Dr : this.Dr.getElementById(t);
                }),
                (i.setAllowlist = function (t) {
                  Bt(
                    t.every(function (t) {
                      return t.tagOrTarget && t.method;
                    })
                  ),
                    (this.zr = t);
                }),
                (i.addToAllowlist = function (t, i, n) {
                  var r = this;
                  (n && n.includes("email") !== this.jr) ||
                    (this.zr || (this.zr = []),
                    V(i) || (i = [i]),
                    i.forEach(function (i) {
                      r.zr.some(function (n) {
                        return n.tagOrTarget == t && n.method == i;
                      }) || r.zr.push({ tagOrTarget: t, method: i });
                    }));
                }),
                (i.Gr = function (t, i, n, r, e) {
                  var s = this,
                    u = this.Fr(t, i);
                  if (!u) return !1;
                  var h = Math.random(),
                    a = null;
                  return (
                    u.actionInfos.forEach(function (f) {
                      var c = f.args,
                        l = f.method,
                        v = f.str,
                        d = f.target,
                        m = (function (t, i, n) {
                          if (!t) return t;
                          var r = n || {};
                          if (i) {
                            var e = (function (t) {
                              return t.detail;
                            })(i);
                            e && (r.event = e);
                          }
                          var s = A();
                          return (
                            Object.keys(t).forEach(function (i) {
                              var n = t[i];
                              if ("object" == p(n) && n.expression) {
                                var e = n.expression,
                                  u = (function (t, i) {
                                    if ("." == i) return t;
                                    for (
                                      var n, r = t, e = o(i.split("."), !0);
                                      !(n = e()).done;
  
                                    ) {
                                      var s = n.value;
                                      if (
                                        !(
                                          s &&
                                          r &&
                                          void 0 !== r[s] &&
                                          "object" == p(r) &&
                                          E(r, s)
                                        )
                                      ) {
                                        r = void 0;
                                        break;
                                      }
                                      r = r[s];
                                    }
                                    return r;
                                  })(r, e);
                                n = void 0 === u ? null : u;
                              }
                              r[n] ? (s[i] = r[n]) : (s[i] = n);
                            }),
                            s
                          );
                        })(c, n, e),
                        b = function () {
                          var e = s.Br(d);
                          if (e) {
                            var o = new Nu(
                              e,
                              l,
                              m,
                              t,
                              u.node,
                              n,
                              r,
                              i,
                              e.tagName || d,
                              h
                            );
                            return s.Vr(o);
                          }
                          s.qr(
                            'Target "'
                              .concat(d, '" not found for action [')
                              .concat(v, "].")
                          );
                        };
                      a = a ? a.then(b) : b();
                    }),
                    u.actionInfos.length >= 1
                  );
                }),
                (i.qr = function (t, i) {
                  if (i) {
                    var n = Vt().createError("[".concat(Mu, "] ").concat(t));
                    throw (Ps(n, i), n);
                  }
                  Vt().error(Mu, t);
                }),
                (i.Vr = function (t) {
                  var i = t.method,
                    n = t.tagOrTarget;
                  if (
                    this.zr &&
                    !(function (t, i) {
                      var n = t.method,
                        r = t.node,
                        e = t.tagOrTarget;
                      n === Ws &&
                        "function" == typeof r.getDefaultActionAlias &&
                        (n = r.getDefaultActionAlias());
                      var s = n.toLowerCase(),
                        u = e.toLowerCase();
                      return i.some(function (t) {
                        return (
                          (t.tagOrTarget.toLowerCase() === u ||
                            "*" === t.tagOrTarget) &&
                          t.method.toLowerCase() === s
                        );
                      });
                    })(t, this.zr)
                  )
                    return (
                      this.qr(
                        '"'
                          .concat(n, ".")
                          .concat(i, '" is not allowlisted ')
                          .concat(JSON.stringify(this.zr), ".")
                      ),
                      null
                    );
                  var r = this.Lr[n];
                  if (r) return r(t);
                  var e = t.node,
                    s = this.Ur[i];
                  if (s && t.satisfiesTrust(s.minTrust)) return s.handler(t);
                  var u = e.tagName.toLowerCase();
                  if (ju(u))
                    return (
                      e.enqueAction
                        ? e.enqueAction(t)
                        : this.qr(
                            'Unrecognized fo element "'.concat(u, '".'),
                            e
                          ),
                      null
                    );
                  var o = ku[u];
                  if (
                    ju(e.getAttribute("id") || "") ||
                    (o && o.indexOf(i) > -1)
                  ) {
                    var h = e[_u];
                    return (
                      h ? h(t) : ((e[Su] = e[Su] || []), e[Su].push(t)), null
                    );
                  }
                  return (
                    this.qr(
                      "Target ("
                        .concat(n, ") doesn't support \"")
                        .concat(i, '" action.'),
                      t.caller
                    ),
                    null
                  );
                }),
                (i.Fr = function (t, i, n) {
                  for (var r, e = t; e; ) {
                    if (n && e == n) return null;
                    var s = this.$r(e, i);
                    if (s && !(r = e).disabled && !ai(r, ":disabled"))
                      return { node: e, actionInfos: Bt(s) };
                    e = e.parentElement;
                  }
                  return null;
                }),
                (i.$r = function (t, i) {
                  var n = this.Wr(t, i);
                  return (n && n[i]) || null;
                }),
                (i.Wr = function (t, i) {
                  var n = t[Tu];
                  if (void 0 === n)
                    if (((n = null), t.hasAttribute("on")))
                      (n = zu(t.getAttribute("on"), t)), (t[Tu] = n);
                    else if (t.hasAttribute("execute")) {
                      var r = t.getAttribute("execute");
                      (n = zu("".concat(i, ":").concat(r), t)), (t[Tu] = n);
                    }
                  return n;
                }),
                (i.setActions = function (t, i) {
                  t.setAttribute("on", i), delete t[Tu];
                }),
                (i.Hr = function (t) {
                  var i = A(),
                    n = t.target;
                  if (
                    (void 0 !== n.value && (i.value = n.value),
                    "INPUT" == n.tagName && (i.valueAsNumber = Number(n.value)),
                    void 0 !== n.checked && (i.checked = n.checked),
                    (void 0 === n.min && void 0 === n.max) ||
                      ((i.min = n.min), (i.max = n.max)),
                    n.files &&
                      (i.files = G(n.files).map(function (t) {
                        return { name: t.name, size: t.size, type: t.type };
                      })),
                    Object.keys(i).length > 0)
                  )
                    try {
                      t.detail = i;
                    } catch (t) {}
                }),
                t
              );
            })();
          function ju(t) {
            return "fo-" === t.substring(0, 4);
          }
          var Uu = function (t) {
            (this.detail = null),
              (function (t, i) {
                var n = i || A();
                for (var r in t) {
                  var e = t[r];
                  n[r] = "function" == typeof e ? Lu : t[r];
                }
              })(t, this);
          };
          function Lu() {
            Bt(null);
          }
          function zu(t, i) {
            var n,
              r,
              e = Gu.bind(null, t, i),
              s = Vu.bind(null, t, i),
              u = null,
              o = new Bu(t);
            do {
              if (
                (n = o.next()).type == Fu.EOF ||
                (n.type == Fu.SEPARATOR && ";" == n.value)
              );
              else if (n.type == Fu.LITERAL || n.type == Fu.ID) {
                var h = n.value;
                s(o.next(), [Fu.SEPARATOR], ":");
                var a = [];
                do {
                  var f = s(o.next(), [Fu.LITERAL, Fu.ID]).value,
                    c = Ws,
                    l = null;
                  (r = o.peek()).type == Fu.SEPARATOR &&
                    "." == r.value &&
                    (o.next(),
                    (c = s(o.next(), [Fu.LITERAL, Fu.ID]).value || c),
                    (r = o.peek()).type == Fu.SEPARATOR &&
                      "(" == r.value &&
                      (o.next(), (l = Hu(o, s, e)))),
                    a.push({ event: h, target: f, method: c, args: l, str: t }),
                    (r = o.peek());
                } while (r.type == Fu.SEPARATOR && "," == r.value && o.next());
                u || (u = A()), (u[h] = a);
              } else e(!1, "; unexpected token [".concat(n.value || "", "]"));
            } while (n.type != Fu.EOF);
            return u;
          }
          function Hu(t, i, n) {
            var r,
              e,
              s = t.peek(),
              u = null;
            if (s.type == Fu.OBJECT) {
              u = A();
              var o = t.next().value;
              (u.__fo_OBJECT_STRING__ = o), i(t.next(), [Fu.SEPARATOR], ")");
            } else
              do {
                var h = (r = t.next()),
                  a = h.type,
                  f = h.value;
                if (a != Fu.SEPARATOR || ("," != f && ")" != f))
                  if (a == Fu.LITERAL || a == Fu.ID) {
                    i(t.next(), [Fu.SEPARATOR], "=");
                    var c = [(r = i(t.next(!0), [Fu.LITERAL, Fu.ID]))];
                    if (r.type == Fu.ID)
                      for (
                        s = t.peek();
                        s.type == Fu.SEPARATOR && "." == s.value;
                        s = t.peek()
                      )
                        t.next(), (r = i(t.next(!1), [Fu.ID])), c.push(r);
                    var l =
                      0 == (e = c).length
                        ? null
                        : 1 == e.length
                        ? e[0].value
                        : {
                            expression: e
                              .map(function (t) {
                                return t.value;
                              })
                              .join("."),
                          };
                    u || (u = A()),
                      (u[f] = l),
                      n(
                        (s = t.peek()).type == Fu.SEPARATOR &&
                          ("," == s.value || ")" == s.value),
                        "Expected either [,] or [)]"
                      );
                  } else n(!1, "; unexpected token [".concat(r.value || "", "]"));
              } while (r.type != Fu.SEPARATOR || ")" != r.value);
            return u;
          }
          function Gu(t, i, n, r) {
            return $t(
              n,
              "Invalid action definition in %s: [%s] %s",
              i,
              t,
              r || ""
            );
          }
          function Vu(t, i, n, r, e) {
            return (
              void 0 !== e
                ? Gu(
                    t,
                    i,
                    r.includes(n.type) && n.value == e,
                    "; expected [".concat(e, "]")
                  )
                : Gu(t, i, r.includes(n.type)),
              n
            );
          }
          var Fu = {
              INVALID: 0,
              EOF: 1,
              SEPARATOR: 2,
              LITERAL: 3,
              ID: 4,
              OBJECT: 5,
            },
            qu = " \t\n\r\f\v \u2028\u2029",
            Bu = (function () {
              function t(t) {
                (this.Kr = t), (this.Yr = -1);
              }
              var i = t.prototype;
              return (
                (i.next = function (t) {
                  var i = this.Jr(t || !1);
                  return (this.Yr = i.index), i;
                }),
                (i.peek = function (t) {
                  return this.Jr(t || !1);
                }),
                (i.Jr = function (t) {
                  var i = this.Yr + 1;
                  if (i >= this.Kr.length)
                    return { type: Fu.EOF, index: this.Yr };
                  var n = this.Kr.charAt(i);
                  if (-1 != qu.indexOf(n)) {
                    for (
                      i++;
                      i < this.Kr.length && -1 != qu.indexOf(this.Kr.charAt(i));
                      i++
                    );
                    if (i >= this.Kr.length) return { type: Fu.EOF, index: i };
                    n = this.Kr.charAt(i);
                  }
                  if (
                    t &&
                    ($u(n) ||
                      ("." == n && i + 1 < this.Kr.length && $u(this.Kr[i + 1])))
                  ) {
                    for (var r = "." == n, e = i + 1; e < this.Kr.length; e++) {
                      var s = this.Kr.charAt(e);
                      if ("." != s) {
                        if (!$u(s)) break;
                      } else r = !0;
                    }
                    var u = this.Kr.substring(i, e),
                      o = r ? parseFloat(u) : parseInt(u, 10);
                    return (i = e - 1), { type: Fu.LITERAL, value: o, index: i };
                  }
                  if (-1 != ";:.()=,|!".indexOf(n))
                    return { type: Fu.SEPARATOR, value: n, index: i };
                  if (-1 != "\"'".indexOf(n)) {
                    for (var h = -1, a = i + 1; a < this.Kr.length; a++)
                      if (this.Kr.charAt(a) == n) {
                        h = a;
                        break;
                      }
                    if (-1 == h) return { type: Fu.INVALID, index: i };
                    var f = this.Kr.substring(i + 1, h);
                    return (i = h), { type: Fu.LITERAL, value: f, index: i };
                  }
                  if ("{" == n) {
                    for (var c = 1, l = -1, v = i + 1; v < this.Kr.length; v++) {
                      var d = this.Kr[v];
                      if (("{" == d ? c++ : "}" == d && c--, c <= 0)) {
                        l = v;
                        break;
                      }
                    }
                    if (-1 == l) return { type: Fu.INVALID, index: i };
                    var m = this.Kr.substring(i, l + 1);
                    return (i = l), { type: Fu.OBJECT, value: m, index: i };
                  }
                  for (
                    var p = i + 1;
                    p < this.Kr.length &&
                    -1 ==
                      " \t\n\r\f\v \u2028\u2029;:.()=,|!\"'{}".indexOf(
                        this.Kr.charAt(p)
                      );
                    p++
                  );
                  var b = this.Kr.substring(i, p);
                  if (((i = p - 1), t && ("true" == b || "false" == b))) {
                    var g = "true" == b;
                    return { type: Fu.LITERAL, value: g, index: i };
                  }
                  return $u(b.charAt(0))
                    ? { type: Fu.LITERAL, value: b, index: i }
                    : { type: Fu.ID, value: b, index: i };
                }),
                t
              );
            })();
          function $u(t) {
            return t >= "0" && t <= "9";
          }
          function Wu(t) {
            return !!t && "function" == typeof t.getFormData;
          }
          var Yu = ["GET", "POST"],
            Ku = [V, w];
          function Ju(t, i) {
            var n = D({}, i);
            if (Wu(i.body)) {
              var r = i.body;
              (n.headers["Content-Type"] = "multipart/form-data;charset=utf-8"),
                (n.body = (function (t) {
                  for (var i = [], n = t.next(); !n.done; n = t.next())
                    i.push(n.value);
                  return i;
                })(r.entries()));
            }
            return { input: t, init: n };
          }
          function Xu(t, i, n, r) {
            if (!i) return h();
            var e = r.prerenderSafe ? h() : i.whenFirstVisible(),
              s = sr(i),
              u = ls(n),
              o = s.hasCapability("xhrInterceptor"),
              a = r.bypassInterceptorForDev && !1;
            return u || !o || a
              ? e
              : i
                  .getRootNode()
                  .documentElement.hasAttribute("allow-xhr-interception")
              ? e
                  .then(function () {
                    return s.isTrustedViewer();
                  })
                  .then(function (i) {
                    if (i || ke(t, "untrusted-xhr-interception")) {
                      var e = { originalRequest: Ju(n, r) };
                      return s
                        .sendMessageAwaitResponse("xhr", e)
                        .then(function (t) {
                          return (function (t, i) {
                            if (
                              (ht(w(t), "Object expected: %s", t),
                              "document" != i)
                            )
                              return new Response(t.body, t.init);
                            var n = A(),
                              r = {
                                status: 200,
                                statusText: "OK",
                                getResponseHeader: function (t) {
                                  return n[String(t).toLowerCase()] || null;
                                },
                              };
                            if (t.init) {
                              var e = t.init;
                              V(e.headers) &&
                                e.headers.forEach(function (t) {
                                  var i = t[0],
                                    r = t[1];
                                  n[String(i).toLowerCase()] = String(r);
                                }),
                                e.status && (r.status = parseInt(e.status, 10)),
                                e.statusText &&
                                  (r.statusText = String(e.statusText));
                            }
                            return new Response(t.body ? String(t.body) : "", r);
                          })(t, r.responseType);
                        });
                    }
                  })
              : e;
          }
          function Qu(t, i, n) {
            return (
              et("string" == typeof i), !1 !== n.foCors && (i = ys(t, i)), i
            );
          }
          function Zu(t, i) {
            var n,
              r = t || {},
              e = r.credentials;
            return (
              et(void 0 === e || "include" == e || "omit" == e),
              (r.method =
                void 0 === (n = r.method)
                  ? "GET"
                  : ((n = n.toUpperCase()), et(Yu.includes(n)), n)),
              (r.headers = r.headers || {}),
              i && (r.headers.Accept = i),
              et(null !== r.body),
              r
            );
          }
          function to(t, i, n) {
            n = n || {};
            var r = (function (t) {
              return t.origin || rs(t.location.href).origin;
            })(t);
            return (
              r == rs(i).origin &&
                ((n.headers = n.headers || {}),
                (n.headers["fo-Same-Origin"] = "true")),
              n
            );
          }
          function io(t) {
            return new Promise(function (i) {
              if (t.ok) return i(t);
              var n = t.status,
                r = Vt().createError("HTTP error ".concat(n));
              throw (
                ((r.retriable = (function (t) {
                  return 415 == t || (t >= 500 && t < 600);
                })(n)),
                (r.response = t),
                r)
              );
            });
          }
          var no = (function () {
              function t(t) {
                this.win = t;
                var i = Hn(t);
                this.Xr = i.isSingleDoc() ? i.getSingleDoc() : null;
              }
              var i = t.prototype;
              return (
                (i.Qr = function (t, i) {
                  var n = arguments,
                    r = this;
                  return Xu(this.win, this.Xr, t, i).then(function (t) {
                    if (t) return t;
                    if (Wu(i.body)) {
                      var e = i.body;
                      i.body = e.getFormData();
                    }
                    return r.win.fetch.apply(null, n);
                  });
                }),
                (i.Zr = function (t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return (
                    (t = Qu(this.win, t, i)),
                    (i = to(this.win, t, i)),
                    this.Qr(t, i).then(
                      function (t) {
                        return t;
                      },
                      function (i) {
                        var n = rs(t).origin;
                        throw Vt().createExpectedError(
                          "XHR",
                          "Failed fetching (".concat(n, "/...):"),
                          i && i.message
                        );
                      }
                    )
                  );
                }),
                (i.fetchJson = function (t, i) {
                  return this.fetch(
                    t,
                    (function (t) {
                      var i = Zu(t, "application/json");
                      if ("POST" == i.method && !Wu(i.body)) {
                        et(
                          Ku.some(function (t) {
                            return t(i.body);
                          })
                        ),
                          (i.headers["Content-Type"] =
                            i.headers["Content-Type"] ||
                            "text/plain;charset=utf-8");
                        var n = i.headers["Content-Type"];
                        i.body =
                          "application/x-www-form-urlencoded" === n
                            ? hs(i.body)
                            : JSON.stringify(i.body);
                      }
                      return i;
                    })(i)
                  );
                }),
                (i.fetchText = function (t, i) {
                  return this.fetch(t, Zu(i, "text/plain"));
                }),
                (i.xssiJson = function (t, i) {
                  return i
                    ? t.text().then(function (t) {
                        return t.startsWith(i)
                          ? at(t.slice(i.length))
                          : (Vt().warn(
                              "XHR",
                              'Failed to strip missing prefix "'.concat(
                                i,
                                '" in fetch response.'
                              )
                            ),
                            at(t));
                      })
                    : t.json();
                }),
                (i.fetch = function (t, i) {
                  var n = Zu(i);
                  return this.Zr(t, n).then(function (t) {
                    return io(t);
                  });
                }),
                (i.sendSignal = function (t, i) {
                  return this.Zr(t, i).then(function (t) {
                    return io(t);
                  });
                }),
                (i.getCorsUrl = function (t, i) {
                  return ys(t, i);
                }),
                t
              );
            })(),
            ro = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t) {
                var n;
                return ((n = i.call(this, t)).te = A()), n;
              }
              var r = n.prototype;
              return (
                (r.fetch = function (i, n) {
                  var r = this,
                    e = (n && n.headers && n.headers.Accept) || "",
                    s = !n || !n.method || "GET" === n.method,
                    u = this.ie(i, e),
                    o = !!this.te[u];
                  if (s && o)
                    return this.te[u].then(function (t) {
                      return t.clone();
                    });
                  var h = t.prototype.fetch.call(this, i, n);
                  return (
                    s &&
                      (this.te[u] = h.then(
                        function (t) {
                          return delete r.te[u], t.clone();
                        },
                        function (t) {
                          throw (delete r.te[u], t);
                        }
                      )),
                    h
                  );
                }),
                (r.ie = function (t, i) {
                  return cs(gs(t, bs(this.win.location))) + i;
                }),
                n
              );
            })(no),
            eo = { "+": "-", "/": "_", "=": "." };
          function so(t) {
            var i = (function (t) {
              for (var i = new Array(t.length), n = 0; n < t.length; n++)
                i[n] = String.fromCharCode(t[n]);
              return i.join("");
            })(t);
            return btoa(i).replace(/[+/=]/g, function (t) {
              return eo[t];
            });
          }
          var uo = "AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc",
            oo = "CacheCidApi",
            ho = (function () {
              function t(t) {
                (this.Ui = t),
                  (this.ne = sr(this.Ui)),
                  (this.re = null),
                  (this.Pr = ir(this.Ui.win));
              }
              var i = t.prototype;
              return (
                (i.isSupported = function () {
                  return this.ne.isCctEmbedded() && this.ne.isProxyOrigin();
                }),
                (i.getScopedCid = function (t) {
                  var i = this;
                  return this.ne.isCctEmbedded()
                    ? (this.re ||
                        (this.re = this.ee(
                          "https://focid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"
                        )),
                      this.re.then(function (n) {
                        return n ? i.se(n, t) : null;
                      }))
                    : Promise.resolve(null);
                }),
                (i.ee = function (t) {
                  var i = this,
                    n =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    r = { publisherOrigin: bs(this.Ui.win.location) },
                    e = "fetchCidTimeout";
                  return this.Pr.timeoutPromise(
                    3e4,
                    hr(this.Ui.win).fetchJson(t, {
                      method: "POST",
                      foCors: !1,
                      credentials: "include",
                      mode: "cors",
                      body: r,
                    }),
                    e
                  )
                    .then(function (t) {
                      return t.json().then(function (t) {
                        if (t.optOut) return null;
                        var r = t.publisherClientId;
                        if (!r && n && t.alternateUrl) {
                          var e = "".concat(t.alternateUrl, "?key=").concat(uo);
                          return i.ee(e, !1);
                        }
                        return r;
                      });
                    })
                    .catch(function (t) {
                      return (
                        t && t.response
                          ? t.response.json().then(function (t) {
                              qt().error(oo, JSON.stringify(t));
                            })
                          : t && t.message == e
                          ? qt().expectedError(oo, t)
                          : qt().error(oo, t),
                        null
                      );
                    });
                }),
                (i.se = function (t, i) {
                  var n = t + ";" + i;
                  return qn(this.Ui.win)
                    .sha384Base64(n)
                    .then(function (t) {
                      return "fo-" + t;
                    });
                }),
                t
              );
            })(),
            ao = "-test-fo-cookie-tmp";
          function fo(t, i) {
            var n = (function (t) {
              try {
                return t.document.cookie;
              } catch (t) {
                return "";
              }
            })(t);
            if (!n) return null;
            for (var r = n.split(";"), e = 0; e < r.length; e++) {
              var s = r[e].trim(),
                u = s.indexOf("=");
              if (-1 != u && bt(s.substring(0, u).trim()) == i) {
                var o = s.substring(u + 1).trim();
                return bt(o, o);
              }
            }
            return null;
          }
          function co(t, i, n, r) {
            var e =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            mo(t, e, i);
            var s = void 0;
            e.domain ? (s = e.domain) : e.highestAvailableDomain && (s = lo(t)),
              vo(t, i, n, r, s, e.sameSite, e.secure);
          }
          function lo(t) {
            var i =
              t.document.head &&
              t.document.head.querySelector("meta[name='fo-cookie-scope']");
            if (i) {
              var n = i.getAttribute("content") || "",
                r = bs(t.location.href);
              return W(r, "." + n) ? n : r.split("://")[1];
            }
            if (!ls(t.location.href))
              for (
                var e = t.location.hostname.split("."),
                  s = e[e.length - 1],
                  u = (function (t) {
                    for (var i = ao; fo(t, i); ) i = ao + 0;
                    return i;
                  })(t),
                  o = e.length - 2;
                o >= 0;
                o--
              )
                if (
                  ((s = e[o] + "." + s),
                  vo(t, u, "delete", Date.now() + 1e3, s),
                  "delete" == fo(t, u))
                )
                  return vo(t, u, "delete", Date.now() - 1e3, s), s;
            return null;
          }
          function vo(t, i, n, r, e, s, u) {
            "foproject.org" == e && ((n = "delete"), (r = 0));
            var o =
              encodeURIComponent(i) +
              "=" +
              encodeURIComponent(n) +
              "; path=/" +
              (e ? "; domain=" + e : "") +
              "; expires=" +
              new Date(r).toUTCString() +
              (function (t, i) {
                return i ? "; SameSite=".concat(i) : "";
              })(0, s) +
              (u ? "; Secure" : "");
            try {
              t.document.cookie = o;
            } catch (t) {}
          }
          function mo(t, i, n) {
            if (i.allowOnProxyOrigin)
              $t(
                !i.highestAvailableDomain,
                "Could not support highestAvailable Domain on proxy origin, specify domain explicitly"
              );
            else {
              $t(
                !ls(t.location.href),
                "Should never attempt to set cookie on proxy origin: ".concat(n)
              );
              var r = rs(t.location.href).hostname.toLowerCase(),
                e = rs(Ot.cdn).hostname.toLowerCase();
              $t(
                !(r == e || W(r, "." + e)),
                "Should never attempt to set cookie on proxy origin. (in depth check): " +
                  n
              );
            }
          }
          var po = "GoogleCidApi",
            bo = "fo_TOKEN",
            go = "$RETRIEVING",
            yo = "$OPT_OUT",
            wo = "$NOT_FOUND",
            Ao = 3e4,
            Eo = 31536e6,
            xo = (function () {
              function t(t) {
                (this.t = t.win), (this.Pr = ir(this.t)), (this.oe = {});
                var i = Bn(t).canonicalUrl;
                this.ue = i ? rs(i).origin : null;
              }
              var i = t.prototype;
              return (
                (i.getScopedCid = function (t, i) {
                  var n,
                    r = this;
                  return this.oe[i]
                    ? this.oe[i]
                    : (this.oe[i] = this.Pr.poll(200, function () {
                        return (n = fo(r.t, bo)) !== go;
                      }).then(function () {
                        if (n === yo) return yo;
                        if ((n !== wo || !r.he()) && r.ae(n)) return null;
                        (n && !r.ae(n)) || r.ce(go, Ao);
                        var e =
                          "https://focid.google.com/v1/publisher:getClientId?key=" +
                          t;
                        return r
                          .ee(e, i, n)
                          .then(function (e) {
                            var s = r.R(e);
                            if (!s && e.alternateUrl) {
                              var u = ""
                                .concat(e.alternateUrl, "?key=")
                                .concat(t);
                              return r.ee(u, i, n).then(r.R.bind(r));
                            }
                            return s;
                          })
                          .catch(function (t) {
                            return (
                              r.ce("$ERROR", Ao),
                              t && t.response
                                ? t.response.json().then(function (t) {
                                    qt().error(po, JSON.stringify(t));
                                  })
                                : qt().error(po, t),
                              null
                            );
                          });
                      }));
                }),
                (i.ee = function (t, i, n) {
                  var r = { originScope: i, canonicalOrigin: this.ue };
                  return (
                    n && (r.securityToken = n),
                    this.Pr.timeoutPromise(
                      Ao,
                      hr(this.t)
                        .fetchJson(t, {
                          method: "POST",
                          foCors: !1,
                          credentials: "include",
                          mode: "cors",
                          body: r,
                        })
                        .then(function (t) {
                          return t.json();
                        })
                    )
                  );
                }),
                (i.R = function (t) {
                  return t.optOut
                    ? (this.ce(yo, Eo), yo)
                    : t.clientId
                    ? (this.ce(t.securityToken, Eo), t.clientId)
                    : (t.alternateUrl || this.ce(wo, 36e5), null);
                }),
                (i.ce = function (t, i) {
                  t &&
                    co(this.t, bo, t, this.fe(i), { highestAvailableDomain: !0 });
                }),
                (i.fe = function (t) {
                  return this.t.Date.now() + t;
                }),
                (i.he = function () {
                  return ls(_r.getDocumentReferrer(this.t));
                }),
                (i.ae = function (t) {
                  return t && "$" === t[0];
                }),
                t
              );
            })(),
            Oo = (function () {
              function t(t) {
                (this.Ui = t), (this.ne = sr(this.Ui));
                var i = Bn(this.Ui).canonicalUrl;
                this.ue = i ? rs(i).origin : null;
              }
              var i = t.prototype;
              return (
                (i.isSupported = function () {
                  return this.ne.hasCapability("cid")
                    ? this.ne.isTrustedViewer()
                    : Promise.resolve(!1);
                }),
                (i.getScopedCid = function (t, i) {
                  var n = {
                    scope: i,
                    clientIdApi: !!t,
                    canonicalOrigin: this.ue,
                  };
                  return (
                    t && (n.apiKey = t),
                    this.ne.sendMessageAwaitResponse("cid", n)
                  );
                }),
                t
              );
            })(),
            Po = 31536e6,
            Io = /^[a-zA-Z0-9-_.]+$/,
            Mo = "fo-cid-optout",
            To = "fo-google-client-id-api",
            So = { googleanalytics: "fo_ECID_GOOGLE" },
            _o = { googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM" },
            ko = (function () {
              function t(t) {
                (this.fodoc = t),
                  (this.le = null),
                  (this.ve = Object.create(null)),
                  (this.de = new ho(t)),
                  (this.me = new Oo(t)),
                  (this.pe = new xo(t)),
                  (this.be = null),
                  (this.isBackupCidExpOn = ke(this.fodoc.win, "fo-cid-backup"));
              }
              var i = t.prototype;
              return (
                (i.get = function (t, i, n) {
                  var r = this;
                  return (
                    $t(
                      Io.test(t.scope) && Io.test(t.cookieName),
                      "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s",
                      t.scope
                    ),
                    i
                      .then(function () {
                        return r.fodoc.whenFirstVisible();
                      })
                      .then(function () {
                        return (
                          (t = r.fodoc),
                          tr(t)
                            .then(function (t) {
                              return t.get(Mo).then(function (t) {
                                return !!t;
                              });
                            })
                            .catch(function () {
                              return !1;
                            })
                        );
                        var t;
                      })
                      .then(function (e) {
                        if (e) return "";
                        var s = r.ge(t, n || i);
                        return ir(r.fodoc.win)
                          .timeoutPromise(
                            1e4,
                            s,
                            'Getting cid for "'.concat(t.scope, '" timed out')
                          )
                          .catch(function (t) {
                            d(t);
                          });
                      })
                  );
                }),
                (i.optOut = function () {
                  return (
                    (t = this.fodoc),
                    sr(t).sendMessage("cidOptOut", {}),
                    tr(t).then(function (t) {
                      return t.set(Mo, !0);
                    })
                  );
                  var t;
                }),
                (i.ge = function (t, i) {
                  var n = this,
                    r = t.scope,
                    e = rs(this.fodoc.win.location.href);
                  if (!ls(e)) {
                    var s = this.ye(r);
                    return s
                      ? this.pe.getScopedCid(s, r).then(function (e) {
                          if (e == yo) return null;
                          if (e) {
                            var s = t.cookieName || r;
                            return Ro(n.fodoc.win, s, e), e;
                          }
                          return Do(n, t, i);
                        })
                      : Do(this, t, i);
                  }
                  return this.me.isSupported().then(function (t) {
                    if (t) {
                      var s = n.ye(r);
                      return n.me.getScopedCid(s, r);
                    }
                    return n.de.isSupported() && n.ye(r)
                      ? n.de.getScopedCid(r).then(function (t) {
                          return t || n.we(i, r, e);
                        })
                      : n.we(i, r, e);
                  });
                }),
                (i.we = function (t, i, n) {
                  var r = this;
                  return (function (t, i) {
                    if (t.le) return t.le;
                    var n = t.fodoc.win;
                    return (t.le = (function (t) {
                      var i,
                        n = t.win;
                      try {
                        i = n.localStorage.getItem("fo-cid");
                      } catch (t) {}
                      var r = Promise.resolve(i);
                      return (
                        !i && Ii(n) && (r = jo(t)),
                        r.then(function (t) {
                          if (!t) return null;
                          var i = at(t);
                          return { time: i.time, cid: i.cid };
                        })
                      );
                    })(t.fodoc).then(function (r) {
                      var e,
                        s,
                        u,
                        o = !1;
                      return (
                        !r || ((s = r.time), (u = Date.now()), s + Po < u)
                          ? ((e = qn(n).sha384Base64(Lo(n))), (o = !0))
                          : ((e = Promise.resolve(r.cid)),
                            r.time + 864e5 < Date.now() && (o = !0)),
                        o &&
                          e.then(function (n) {
                            !(function (t, i, n) {
                              var r = t.win;
                              Ii(r)
                                ? jo(t, Uo(n))
                                : i.then(function () {
                                    try {
                                      r.localStorage.setItem("fo-cid", Uo(n));
                                    } catch (t) {}
                                  });
                            })(t.fodoc, i, n);
                          }),
                        e
                      );
                    }));
                  })(this, t).then(function (t) {
                    return qn(r.fodoc.win).sha384Base64(
                      t +
                        (function (t) {
                          return (
                            $t(ls(t), "Expected proxy origin %s", t.origin), bs(t)
                          );
                        })(n) +
                        i
                    );
                  });
                }),
                (i.ye = function (t) {
                  return this.be || (this.be = this.Ae()), this.be[t];
                }),
                (i.Ae = function () {
                  var t = {},
                    i = this.fodoc.getMetaByName(To);
                  return (
                    i &&
                      i.split(",").forEach(function (i) {
                        if ((i = i.trim()).indexOf("=") > 0) {
                          var n = i.split("="),
                            r = n[0].trim();
                          t[r] = n[1].trim();
                        } else {
                          var e = i,
                            s = So[e];
                          s
                            ? (t[s] = _o[e])
                            : Vt().warn(
                                "CID",
                                "Unsupported client for Google CID API: ".concat(
                                  e,
                                  "."
                                ) +
                                  'Please remove or correct meta[name="'.concat(
                                    To,
                                    '"]'
                                  )
                              );
                        }
                      }),
                    t
                  );
                }),
                t
              );
            })();
          function Ro(t, i, n) {
            co(t, i, n, Date.now() + Po, { highestAvailableDomain: !0 });
          }
          function Co(t, i, n) {
            tr(t).then(function (t) {
              if (!t.isViewerStorage()) {
                var r = No(i);
                t.setNonBoolean(r, n);
              }
            });
          }
          function No(t) {
            return "fo-cid:" + t;
          }
          function Do(t, i, n) {
            var r = t.fodoc,
              e = t.isBackupCidExpOn,
              s = r.win,
              u = i.disableBackup,
              o = i.scope,
              h = i.cookieName || o;
            return (function (t, i) {
              var n = t.fodoc,
                r = t.isBackupCidExpOn,
                e = n.win,
                s = i.disableBackup,
                u = i.scope,
                o = i.cookieName || u,
                h = fo(e, o);
              return h
                ? Promise.resolve(h)
                : r && !s
                ? tr(n)
                    .then(function (t) {
                      var i = No(o);
                      return t.get(i, Po);
                    })
                    .then(function (t) {
                      return t && "string" == typeof t ? t : null;
                    })
                : Promise.resolve(null);
            })(t, i).then(function (a) {
              if (!a && !i.createCookieIfNotPresent) return Promise.resolve(null);
              if (a)
                return (
                  /^fo-/.test(a) && (Ro(s, h, a), e && !u && Co(r, h, a)),
                  Promise.resolve(a)
                );
              if (t.ve[o]) return t.ve[o];
              var f = zo(s).then(function (t) {
                return "fo-" + t;
              });
              return (
                Promise.all([f, n]).then(function (t) {
                  var i = t[0];
                  fo(s, h) || (Ro(s, h, i), e && !u && Co(r, h, i));
                }),
                (t.ve[o] = f)
              );
            });
          }
          function jo(t, i) {
            var n = sr(t);
            return n.isTrustedViewer().then(function (t) {
              if (t)
                return (
                  qt().expectedError("CID", "Viewer does not provide cap=cid"),
                  n.sendMessageAwaitResponse("cid", i).then(function (t) {
                    return t &&
                      !(function (t, i) {
                        try {
                          return at(t);
                        } catch (t) {
                          return null;
                        }
                      })(t)
                      ? (qt().expectedError("CID", "invalid cid format"),
                        JSON.stringify({ time: Date.now(), cid: t }))
                      : t;
                  })
                );
            });
          }
          function Uo(t) {
            return JSON.stringify({ time: Date.now(), cid: t });
          }
          function Lo(t) {
            return (
              lt(t, 16) ||
              String(
                t.location.href +
                  Date.now() +
                  t.Math.random() +
                  t.screen.width +
                  t.screen.height
              )
            );
          }
          function zo(t) {
            var i = Lo(t);
            if ("string" == typeof i) return qn(t).sha384Base64(i);
            var n = i;
            return f(function () {
              return so(n).replace(/\.+$/, "");
            });
          }
          var Ho = "Crypto",
            Go = (function () {
              function t(t) {
                this.t = t;
                var i = null,
                  n = !1;
                t.crypto &&
                  (t.crypto.subtle
                    ? (i = t.crypto.subtle)
                    : t.crypto.webkitSubtle &&
                      ((i = t.crypto.webkitSubtle), (n = !0))),
                  (this.pkcsAlgo = {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: { name: "SHA-256" },
                  }),
                  (this.subtle = i),
                  (this.Ee = n),
                  (this.xe = null);
              }
              var i = t.prototype;
              return (
                (i.sha384 = function (t) {
                  var i = this;
                  if (
                    ("string" == typeof t && (t = ct(t)), !this.subtle || this.xe)
                  )
                    return (this.xe || this.Oe()).then(function (i) {
                      return i(t);
                    });
                  try {
                    return this.subtle.digest({ name: "SHA-384" }, t).then(
                      function (t) {
                        return new Uint8Array(t);
                      },
                      function (n) {
                        return (
                          n.message &&
                            n.message.indexOf("secure origin") < 0 &&
                            Vt().error(
                              Ho,
                              "SubtleCrypto failed, fallback to closure lib.",
                              n
                            ),
                          i.Oe().then(function () {
                            return i.sha384(t);
                          })
                        );
                      }
                    );
                  } catch (n) {
                    return (
                      qt().error(
                        Ho,
                        "SubtleCrypto failed, fallback to closure lib.",
                        n
                      ),
                      this.Oe().then(function () {
                        return i.sha384(t);
                      })
                    );
                  }
                }),
                (i.sha384Base64 = function (t) {
                  return this.sha384(t).then(function (t) {
                    return so(t);
                  });
                }),
                (i.uniform = function (t) {
                  return this.sha384(t).then(function (t) {
                    for (var i = 0, n = 2; n >= 0; n--) i = (i + t[n]) / 256;
                    return i;
                  });
                }),
                (i.Oe = function () {
                  var t = this;
                  return this.xe
                    ? this.xe
                    : (this.xe = $n(this.t)
                        .preloadExtension("fo-crypto-polyfill")
                        .then(function () {
                          return mn(t.t, "crypto-polyfill");
                        }));
                }),
                (i.isPkcsAvailable = function () {
                  return Boolean(this.subtle) && !1 !== this.t.isSecureContext;
                }),
                (i.importPkcsKey = function (t) {
                  Bt(this.isPkcsAvailable());
                  var i = this.Ee ? ft(JSON.stringify(t)) : t;
                  return this.subtle.importKey("jwk", i, this.pkcsAlgo, !0, [
                    "verify",
                  ]);
                }),
                (i.verifyPkcs = function (t, i, n) {
                  return (
                    Bt(this.isPkcsAvailable()),
                    this.subtle.verify(this.pkcsAlgo, t, i, n)
                  );
                }),
                t
              );
            })(),
            Vo = ["prefetch", "preload", "preconnect", "dns-prefetch"],
            Fo = (function () {
              function t(t) {
                (this.Ui = t), (this.Te = null), (this.Ie = null);
              }
              return (
                (t.prototype.get = function () {
                  if (this.Te) return this.Te;
                  var t = this.Ui,
                    i = ps(t.getUrl()),
                    n = t.getRootNode(),
                    r = n && n.fo && n.fo.canonicalUrl;
                  if (!r) {
                    var e = n.querySelector("link[rel=canonical]");
                    r = e ? rs(e.href).href : i;
                  }
                  var s,
                    u = (function (t) {
                      return String(Math.floor(1e4 * t.Math.random()));
                    })(t.win),
                    o = (function (t) {
                      var i = A();
                      if (t.head)
                        for (
                          var n = t.head.querySelectorAll("link[rel]"),
                            r = function (t) {
                              var r = n[t],
                                e = r.href,
                                s = r.getAttribute("rel");
                              if (!s || !e) return "continue";
                              s.split(/\s+/).forEach(function (t) {
                                if (-1 == Vo.indexOf(t)) {
                                  var n = i[t];
                                  n
                                    ? (V(n) || (n = i[t] = [n]), n.push(e))
                                    : (i[t] = e);
                                }
                              });
                            },
                            e = 0;
                          e < n.length;
                          e++
                        )
                          r(e);
                      return i;
                    })(t.win.document),
                    h = (s = t.win.document.head.querySelector(
                      'meta[name="viewport"]'
                    ))
                      ? s.getAttribute("content")
                      : null,
                    a = (function (t) {
                      if (
                        !t.isSingleDoc() ||
                        "a" !=
                          ((i = t.win.location.href),
                          ls((i = ns(i))) ? i.pathname.split("/", 2)[1] : null)
                      )
                        return null;
                      var i,
                        n = gt(rs(t.win.location.href).search).fo_r;
                      return void 0 === n ? null : gt(n);
                    })(t);
                  return (this.Te = {
                    get sourceUrl() {
                      return ps(t.getUrl());
                    },
                    canonicalUrl: r,
                    pageViewId: u,
                    get pageViewId64() {
                      return this.Ie || (this.Ie = zo(t.win)), this.Ie;
                    },
                    linkRels: o,
                    viewport: h,
                    replaceParams: a,
                  });
                }),
                t
              );
            })(),
            qo = { attributes: !0, attributeFilter: ["hidden"], subtree: !0 },
            Bo = (function () {
              function t(t) {
                this.Dr = t.getRootNode();
                var i = this.Dr.ownerDocument || this.Dr;
                (this.t = Bt(i.defaultView)), (this.ht = null), (this.Pe = null);
              }
              var i = t.prototype;
              return (
                (i.add = function (t) {
                  var i = this;
                  this.Se();
                  var n = this.Pe.add(t);
                  return function () {
                    n(), 0 === i.Pe.getHandlerCount() && i.dispose();
                  };
                }),
                (i.Se = function () {
                  var t = this;
                  if (!this.ht) {
                    this.Pe = new dr();
                    var i = new this.t.MutationObserver(function (i) {
                      i && t.Pe.fire(i);
                    });
                    (this.ht = i), i.observe(this.Dr, qo);
                  }
                }),
                (i.dispose = function () {
                  this.ht &&
                    (this.ht.disconnect(),
                    this.Pe.removeAll(),
                    (this.ht = null),
                    (this.Pe = null));
                }),
                t
              );
            })();
          function $o(t) {
            try {
              return t.state;
            } catch (t) {
              return null;
            }
          }
          var Wo = "History",
            Yo = "fo.History",
            Ko = (function () {
              function t(t, i) {
                (this.Ui = t),
                  (this.Pr = ir(t.win)),
                  (this.Me = i),
                  (this.ke = 0),
                  (this._e = []),
                  (this.Qi = []),
                  this.Me.setOnStateUpdated(this.Re.bind(this));
              }
              var i = t.prototype;
              return (
                (i.cleanup = function () {
                  this.Me.cleanup();
                }),
                (i.push = function (t, i) {
                  var n = this;
                  return this.Ne(function () {
                    return n.Me.push(i).then(function (i) {
                      return n.Re(i), t && (n._e[i.stackIndex] = t), i.stackIndex;
                    });
                  }, "push");
                }),
                (i.pop = function (t) {
                  var i = this;
                  return this.Ne(function () {
                    return i.Me.pop(t).then(function (t) {
                      i.Re(t);
                    });
                  }, "pop");
                }),
                (i.replace = function (t) {
                  var i = this;
                  return this.Ne(function () {
                    return i.Me.replace(t);
                  }, "replace");
                }),
                (i.get = function () {
                  var t = this;
                  return this.Ne(function () {
                    return t.Me.get();
                  }, "get");
                }),
                (i.goBack = function (t) {
                  var i = this;
                  return this.Ne(function () {
                    return i.ke <= 0 && !t
                      ? h()
                      : i.Me.pop(i.ke).then(function (t) {
                          i.Re(t);
                        });
                  }, "goBack");
                }),
                (i.replaceStateForTarget = function (t) {
                  var i = this;
                  Bt("#" == t[0]);
                  var n = this.Ui.win.location.hash;
                  return this.push(function () {
                    i.Ui.win.location.replace(n || "#");
                  }).then(function () {
                    i.Me.replaceStateForTarget(t);
                  });
                }),
                (i.getFragment = function () {
                  return this.Me.getFragment();
                }),
                (i.updateFragment = function (t) {
                  return (
                    "#" == t[0] && (t = t.substr(1)), this.Me.updateFragment(t)
                  );
                }),
                (i.Re = function (t) {
                  (this.ke = t.stackIndex), this.Ce(t);
                }),
                (i.Ce = function (t) {
                  var i = this;
                  if (!(this.ke >= this._e.length - 1)) {
                    for (var n = [], r = this._e.length - 1; r > this.ke; r--)
                      this._e[r] && (n.push(this._e[r]), (this._e[r] = void 0));
                    if ((this._e.splice(this.ke + 1), n.length > 0))
                      for (
                        var e = function (r) {
                            i.Pr.delay(function () {
                              return n[r](t);
                            }, 1);
                          },
                          s = 0;
                        s < n.length;
                        s++
                      )
                        e(s);
                  }
                }),
                (i.Ne = function (t, i) {
                  var n = new a(),
                    r = n.promise,
                    e = n.reject,
                    s = n.resolve,
                    u = new Error("history trace for " + i + ": ");
                  return (
                    this.Qi.push({
                      callback: t,
                      resolve: s,
                      reject: e,
                      trace: u,
                    }),
                    1 == this.Qi.length && this.De(),
                    r
                  );
                }),
                (i.De = function () {
                  var t = this;
                  if (0 != this.Qi.length) {
                    var i,
                      n = this.Qi[0];
                    try {
                      i = n.callback();
                    } catch (t) {
                      i = Promise.reject(t);
                    }
                    i.then(
                      function (t) {
                        n.resolve(t);
                      },
                      function (t) {
                        qt().error(Wo, "failed to execute a task:", t),
                          n.trace &&
                            ((n.trace.message += t), qt().error(Wo, n.trace)),
                          n.reject(t);
                      }
                    ).then(function () {
                      t.Qi.splice(0, 1), t.De();
                    });
                  }
                }),
                t
              );
            })(),
            Jo = (function () {
              function t(t) {
                var i = this;
                (this.win = t), (this.Pr = ir(t));
                var n = this.win.history;
                this.je = n.length - 1;
                var r,
                  e,
                  s = $o(n);
                s && void 0 !== s[Yo] && (this.je = Math.min(s[Yo], this.je)),
                  (this.ke = this.je),
                  this.ze,
                  (this.Re = null),
                  (this.Le = "state" in n),
                  (this.Ue = this.He(this.ke)),
                  n.pushState && n.replaceState
                    ? ((this.Ge = n.originalPushState || n.pushState.bind(n)),
                      (this.Ve =
                        n.originalReplaceState || n.replaceState.bind(n)),
                      (r = function (t, n, r) {
                        (i.Ue = t), i.Ge(t, n, r || null);
                      }),
                      (e = function (t, n, r) {
                        (i.Ue = t), void 0 !== r ? i.Ve(t, n, r) : i.Ve(t, n);
                      }),
                      n.originalPushState || (n.originalPushState = this.Ge),
                      n.originalReplaceState ||
                        (n.originalReplaceState = this.Ve))
                    : ((r = function (t, n, r) {
                        i.Ue = t;
                      }),
                      (e = function (t, n, r) {
                        i.Ue = t;
                      })),
                  (this.Fe = r),
                  (this.Be = e);
                try {
                  this.Be(this.He(this.ke, !0));
                } catch (t) {
                  qt().error(Wo, "Initial replaceState failed: " + t.message);
                }
                (n.pushState = this.qe.bind(this)),
                  (n.replaceState = this.$e.bind(this)),
                  (this.We = function (t) {
                    var n = t.state;
                    qt().fine(
                      Wo,
                      "popstate event: " +
                        i.win.history.length +
                        ", " +
                        JSON.stringify(n)
                    ),
                      i.Ke();
                  }),
                  this.win.addEventListener("popstate", this.We);
              }
              var i = t.prototype;
              return (
                (i.cleanup = function () {
                  this.Ge && (this.win.history.pushState = this.Ge),
                    this.Ve && (this.win.history.replaceState = this.Ve),
                    this.win.removeEventListener("popstate", this.We);
                }),
                (i.He = function (t, i) {
                  var n = A(i ? this.Ye() : void 0);
                  return (n[Yo] = t), n;
                }),
                (i.setOnStateUpdated = function (t) {
                  this.Re = t;
                }),
                (i.push = function (t) {
                  var i = this;
                  return this.Je(function () {
                    var n = i.Xe(i.Ye(), t || {});
                    return (
                      i.qe(n, void 0, n.fragment ? "#" + n.fragment : void 0),
                      f(function () {
                        return i.Xe(n, { stackIndex: i.ke });
                      })
                    );
                  });
                }),
                (i.pop = function (t) {
                  var i = this;
                  return (
                    (t = Math.max(t, this.je)),
                    this.Je(function () {
                      return i.Qe(i.ke - t + 1);
                    }).then(function (t) {
                      return i.Xe(i.Ye(), { stackIndex: t });
                    })
                  );
                }),
                (i.replace = function () {
                  var t = this,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return this.Je(function () {
                    var n = t.Xe(t.Ye(), i || {}),
                      r = (n.url || "").replace(/#.*/, ""),
                      e = n.fragment ? "#" + n.fragment : "";
                    return (
                      t.$e(n, n.title, r || e ? r + e : void 0),
                      f(function () {
                        return t.Xe(n, { stackIndex: t.ke });
                      })
                    );
                  });
                }),
                (i.get = function () {
                  var t = this;
                  return f(function () {
                    return t.Xe(t.Ye(), { stackIndex: t.ke });
                  });
                }),
                (i.backTo = function (t) {
                  var i = this;
                  return (
                    (t = Math.max(t, this.je)),
                    this.Je(function () {
                      return i.Qe(i.ke - t);
                    })
                  );
                }),
                (i.Ke = function () {
                  var t = this.Ye();
                  qt().fine(
                    Wo,
                    "history event: " +
                      this.win.history.length +
                      ", " +
                      JSON.stringify(t)
                  );
                  var i = t ? t[Yo] : void 0,
                    n = this.ke,
                    r = this.ze;
                  (this.ze = void 0),
                    n > this.win.history.length - 2 &&
                      ((n = this.win.history.length - 2),
                      this.Ze(this.Xe(t, { stackIndex: n }))),
                    null == i
                      ? (n += 1)
                      : (n =
                          i < this.win.history.length
                            ? i
                            : this.win.history.length - 1),
                    t || (t = {}),
                    (t[Yo] = n),
                    this.Be(t, void 0, void 0),
                    n != this.ke && this.Ze(this.Xe(t, { stackIndex: n })),
                    n < this.je && (this.je = n),
                    r && r.resolve();
                }),
                (i.Ye = function () {
                  return this.Le ? $o(this.win.history) : this.Ue;
                }),
                (i.ts = function () {
                  Bt(!this.ze);
                }),
                (i.Je = function (t) {
                  return this.ze ? this.ze.promise.then(t, t) : t();
                }),
                (i.ns = function () {
                  this.ts();
                  var t = new a(),
                    i = t.reject,
                    n = t.resolve,
                    r = this.Pr.timeoutPromise(500, t.promise);
                  return (this.ze = { promise: r, resolve: n, reject: i }), r;
                }),
                (i.Qe = function (t) {
                  var i = this;
                  if ((this.ts(), t <= 0)) return Promise.resolve(this.ke);
                  this.Ue = this.He(this.ke - t);
                  var n = this.ns();
                  return (
                    this.win.history.go(-t),
                    n.then(function () {
                      return Promise.resolve(i.ke);
                    })
                  );
                }),
                (i.qe = function (t, i, n) {
                  this.ts(), t || (t = {});
                  var r = this.ke + 1;
                  (t[Yo] = r),
                    this.Fe(t, i, n),
                    r != this.win.history.length - 1 &&
                      ((r = this.win.history.length - 1),
                      (t[Yo] = r),
                      this.Be(t));
                  var e = this.Xe(t, { stackIndex: r });
                  this.Ze(e);
                }),
                (i.replaceStateForTarget = function (t) {
                  var i = this;
                  Bt("#" == t[0]),
                    this.Je(function () {
                      i.win.removeEventListener("popstate", i.We);
                      try {
                        i.win.location.replace(t);
                      } finally {
                        i.win.addEventListener("popstate", i.We);
                      }
                      return i.$e(), h();
                    });
                }),
                (i.$e = function (t, i, n) {
                  this.ts(), t || (t = {});
                  var r = Math.min(this.ke, this.win.history.length - 1);
                  (t[Yo] = r), this.Be(t, i, n);
                  var e = this.Xe(t, { stackIndex: r });
                  this.Ze(e);
                }),
                (i.Ze = function (t) {
                  this.ts(),
                    (t.stackIndex = Math.min(
                      t.stackIndex,
                      this.win.history.length - 1
                    )),
                    this.ke != t.stackIndex &&
                      (qt().fine(
                        Wo,
                        "stack index changed: " + this.ke + " -> " + t.stackIndex
                      ),
                      (this.ke = t.stackIndex),
                      this.Re && this.Re(t));
                }),
                (i.getFragment = function () {
                  var t = this.win.location.hash;
                  return (t = t.substr(1)), Promise.resolve(t);
                }),
                (i.updateFragment = function (t) {
                  return this.replace({ fragment: t });
                }),
                (i.Xe = function (t, i) {
                  var n = D(D({}, (t && t.data) || {}), i.data || {});
                  return D(D(D({}, t || {}), i), {}, { data: n });
                }),
                t
              );
            })(),
            Xo = (function () {
              function t(t, i) {
                var n = this;
                (this.win = t),
                  (this.ne = i),
                  (this.ke = 0),
                  (this.Re = null),
                  (this.rs = this.ne.onMessage("historyPopped", function (t) {
                    return n.es(t);
                  }));
              }
              var i = t.prototype;
              return (
                (i.replaceStateForTarget = function (t) {
                  Bt("#" == t[0]), this.win.location.replace(t);
                }),
                (i.cleanup = function () {
                  this.rs();
                }),
                (i.setOnStateUpdated = function (t) {
                  this.Re = t;
                }),
                (i.ss = function (t, i, n) {
                  return this.os(t)
                    ? t
                    : (qt().warn(Wo, 'Ignored unexpected "%s" data:', n, t), i);
                }),
                (i.os = function (t) {
                  return !!t && void 0 !== t.stackIndex;
                }),
                (i.push = function (t) {
                  var i = this,
                    n = D({ stackIndex: this.ke + 1 }, t || {}),
                    r = "pushHistory";
                  return this.ne
                    .sendMessageAwaitResponse(r, n)
                    .then(function (t) {
                      var e = n,
                        s = i.ss(t, e, r);
                      return i.Ze(s), s;
                    });
                }),
                (i.pop = function (t) {
                  var i = this;
                  if (t > this.ke) return this.get();
                  var n = { stackIndex: this.ke },
                    r = "popHistory";
                  return this.ne
                    .sendMessageAwaitResponse(r, n)
                    .then(function (t) {
                      var n = { stackIndex: i.ke - 1 },
                        e = i.ss(t, n, r);
                      return i.Ze(e), e;
                    });
                }),
                (i.replace = function (t) {
                  var i = this;
                  if (t && t.url) {
                    if (!this.ne.hasCapability("fullReplaceHistory")) {
                      var n = { stackIndex: this.ke };
                      return Promise.resolve(n);
                    }
                    var r = t.url.replace(/#.*/, "");
                    t.url = r;
                  }
                  var e = D({ stackIndex: this.ke }, t || {}),
                    s = "replaceHistory";
                  return this.ne
                    .sendMessageAwaitResponse(s, e, !0)
                    .then(function (t) {
                      var n = e,
                        r = i.ss(t, n, s);
                      return i.Ze(r), r;
                    });
                }),
                (i.get = function () {
                  return Promise.resolve({
                    data: void 0,
                    fragment: "",
                    stackIndex: this.ke,
                    title: "",
                  });
                }),
                (i.es = function (t) {
                  void 0 !== t.newStackIndex && (t.stackIndex = t.newStackIndex),
                    this.os(t)
                      ? this.Ze(t)
                      : qt().warn(
                          Wo,
                          'Ignored unexpected "historyPopped" data:',
                          t
                        );
                }),
                (i.Ze = function (t) {
                  var i = t.stackIndex;
                  this.ke != i &&
                    (qt().fine(
                      Wo,
                      "stackIndex: ".concat(this.ke, " -> ").concat(i)
                    ),
                    (this.ke = i),
                    this.Re && this.Re(t));
                }),
                (i.getFragment = function () {
                  return this.ne.hasCapability("fragment")
                    ? this.ne
                        .sendMessageAwaitResponse("getFragment", void 0, !0)
                        .then(function (t) {
                          if (!t) return "";
                          var i = t;
                          return "#" == i[0] && (i = i.substr(1)), i;
                        })
                    : Promise.resolve("");
                }),
                (i.updateFragment = function (t) {
                  return this.ne.hasCapability("fragment")
                    ? this.ne.sendMessageAwaitResponse(
                        "replaceHistory",
                        { fragment: t },
                        !0
                      )
                    : h();
                }),
                t
              );
            })();
          function Qo(t) {
            var i,
              n = sr(t);
            return (
              n.isOvertakeHistory() || t.win.__fo_TEST_IFRAME
                ? (i = new Xo(t.win, n))
                : (vn(t.win, "global-history-binding", Jo),
                  (i = mn(t.win, "global-history-binding"))),
              new Ko(t, i)
            );
          }
          function Zo(t, i) {
            return $n(t.win)
              .installExtensionForDoc(t, "fo-loader")
              .then(function () {
                return (function (t) {
                  return Rn(t, "loader", "fo-loader");
                })(i);
              });
          }
          new WeakMap(), new WeakMap();
          var th = [
              '<div slot=i-fohtml-svc class="i-fohtml-svc i-fohtml-loading-container i-fohtml-fill-content fo-hidden"></div>',
            ],
            ih = (function () {
              function t(t) {
                this.Ui = t;
                var i = t.win,
                  n = this.us.bind(this);
                (this.hs = (function (t, i) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r = n.needsRootBounds,
                    e = n.threshold,
                    s = Ii(i) && r ? i.document : void 0;
                  return new i.IntersectionObserver(t, { threshold: e, root: s });
                })(function (t) {
                  return t.forEach(n);
                }, i)),
                  (this.cs = new WeakMap());
              }
              var i = t.prototype;
              return (
                (i.dispose = function () {
                  this.hs.disconnect();
                }),
                (i.track = function (t) {
                  this.hs.observe(t);
                }),
                (i.untrack = function (t) {
                  this.hs.unobserve(t), this.fs(t);
                }),
                (i.us = function (t) {
                  var i = t.boundingClientRect,
                    n = t.isIntersecting,
                    r = t.target,
                    e = i.height,
                    s = i.width,
                    u = r,
                    o = n && s > 20 && e > 20,
                    h = this.cs.get(u);
                  o !== ((h && h.shown) || !1) &&
                    (o && !h && ((h = this.ls(u, s, e)), this.cs.set(u, h)),
                    h &&
                      ((h.shown = o),
                      h.container.classList.toggle("fo-hidden", !o),
                      h.loader.classList.toggle("fo-active", o)));
                }),
                (i.ls = function (t, i, n) {
                  var r = Date.now(),
                    e = (function (t, i, n, r) {
                      var e =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : t.win.Date.now(),
                        s = i.ownerDocument.createElement("div");
                      return (
                        Zo(t, i).then(function (u) {
                          var o = t.win.Date.now() - e;
                          u.initializeLoader(i, s, o, n, r);
                        }),
                        s
                      );
                    })(this.Ui, t, i, n, r),
                    s = Ee(this.Ui.win.document)(th);
                  return (
                    s.appendChild(e),
                    t.appendChild(s),
                    { shown: !1, loader: e, container: s }
                  );
                }),
                (i.fs = function (t) {
                  var i = this.cs.get(t);
                  i && (this.cs.delete(t), wi(i.container));
                }),
                t
              );
            })(),
            nh = (function () {
              function t(t, i) {
                var n = this;
                (this.win = t),
                  (this.vs = i),
                  (this.ds = []),
                  (this.ps = new dr()),
                  (this.bs = function (t) {
                    K(t.target) && n.gs(t.target);
                  }),
                  (this.ys = function (i) {
                    ir(t).delay(function () {
                      n.win.document.activeElement &&
                        n.gs(n.win.document.activeElement);
                    }, 500);
                  }),
                  this.win.document.addEventListener("focus", this.bs, !0),
                  this.win.addEventListener("blur", this.ys);
              }
              var i = t.prototype;
              return (
                (i.fs = function () {
                  this.win.document.removeEventListener("focus", this.bs, !0),
                    this.win.removeEventListener("blur", this.ys);
                }),
                (i.onFocus = function (t) {
                  return this.ps.add(t);
                }),
                (i.gs = function (t) {
                  var i = Date.now();
                  0 == this.ds.length || this.ds[this.ds.length - 1].el != t
                    ? this.ds.push({ el: t, time: i })
                    : (this.ds[this.ds.length - 1].time = i),
                    this.purgeBefore(i - this.vs),
                    this.ps.fire(t);
                }),
                (i.getLast = function () {
                  return 0 == this.ds.length
                    ? null
                    : this.ds[this.ds.length - 1].el;
                }),
                (i.purgeBefore = function (t) {
                  for (var i = this.ds.length - 1, n = 0; n < this.ds.length; n++)
                    if (this.ds[n].time >= t) {
                      i = n - 1;
                      break;
                    }
                  -1 != i && this.ds.splice(0, i + 1);
                }),
                (i.hasDescendantsOf = function (t) {
                  this.win.document.activeElement &&
                    this.gs(this.win.document.activeElement);
                  for (var i = 0; i < this.ds.length; i++)
                    if (t.contains(this.ds[i].el)) return !0;
                  return !1;
                }),
                t
              );
            })(),
            rh = 70,
            eh = (function () {
              function t(t) {
                var i = this;
                (this.fodoc = t),
                  (this.win = t.win),
                  (this.bi = Zn(t)),
                  (this.ws = or(this.fodoc)),
                  (this.As = ur(this.win)),
                  (this.Es = new nh(this.win, 6e4)),
                  this.Es.onFocus(function (t) {
                    i.xs(t);
                  });
              }
              var i = t.prototype;
              return (
                (i.forceChangeSize = function (t, i, n, r, e) {
                  this.Os(_s.forElement(t), i, n, e, void 0, !0, r);
                }),
                (i.requestChangeSize = function (t, i, n, r, e) {
                  var s = this;
                  return new Promise(function (u, o) {
                    s.Os(_s.forElement(t), i, n, r, e, !1, function (t) {
                      t ? u() : o(new Error("changeSize attempt denied"));
                    });
                  });
                }),
                (i.expandElement = function (t) {
                  _s.forElement(t).completeExpand(), this.bi.schedulePass(rh);
                }),
                (i.attemptCollapse = function (t) {
                  var i = this;
                  return new Promise(function (n, r) {
                    i.Os(
                      _s.forElement(t),
                      0,
                      0,
                      void 0,
                      void 0,
                      !1,
                      function (i) {
                        i
                          ? (_s.forElement(t).completeCollapse(), n())
                          : r(
                              qt().createExpectedError("collapse attempt denied")
                            );
                      }
                    );
                  });
                }),
                (i.collapseElement = function (t) {
                  var i = this.ws.getLayoutRect(t);
                  0 != i.width &&
                    0 != i.height &&
                    (ke(this.win, "dirty-collapse-element")
                      ? this.dirtyElement(t)
                      : this.bi.setRelayoutTop(i.top)),
                    _s.forElement(t).completeCollapse(),
                    this.bi.schedulePass(rh);
                }),
                (i.measureElement = function (t) {
                  return this.As.measurePromise(t);
                }),
                (i.mutateElement = function (t, i, n) {
                  return this.Ts(t, null, i, n);
                }),
                (i.measureMutateElement = function (t, i, n) {
                  return this.Ts(t, i, n);
                }),
                (i.Is = function (t) {
                  var i = Or(this.win, t.element);
                  return {
                    top: parseInt(i.marginTop, 10) || 0,
                    right: parseInt(i.marginRight, 10) || 0,
                    bottom: parseInt(i.marginBottom, 10) || 0,
                    left: parseInt(i.marginLeft, 10) || 0,
                  };
                }),
                (i.Ts = function (t, i, n) {
                  var r = this,
                    e =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3],
                    s = function () {
                      var i = r.ws.getLayoutRect(t);
                      return 0 != i.width && 0 != i.height ? i.top : -1;
                    },
                    u = -1;
                  return this.As.runPromise({
                    measure: function () {
                      i && i(), e || (u = s());
                    },
                    mutate: function () {
                      if ((n(), !e)) {
                        t.classList.contains("i-fohtml-element") &&
                          _s.forElement(t).requestMeasure();
                        for (
                          var i = t.getElementsByClassName("i-fohtml-element"),
                            o = 0;
                          o < i.length;
                          o++
                        )
                          _s.forElement(i[o]).requestMeasure();
                        r.bi.schedulePass(rh),
                          -1 != u && r.bi.setRelayoutTop(u),
                          r.As.measure(function () {
                            var t = s();
                            -1 != t &&
                              t != u &&
                              (r.bi.setRelayoutTop(t), r.bi.schedulePass(rh)),
                              r.bi.maybeHeightChanged();
                          });
                      }
                    },
                  });
                }),
                (i.dirtyElement = function (t) {
                  var i = !1;
                  if (t.classList.contains("i-fohtml-element")) {
                    var n = _s.forElement(t);
                    this.bi.setRelayoutTop(n.getLayoutBox().top);
                  } else i = !0;
                  this.bi.schedulePass(rh, i);
                }),
                (i.xs = function (t) {
                  var i = fi(t, function (t) {
                    return !!_s.forElementOptional(t);
                  });
                  if (i) {
                    var n = _s.forElement(i),
                      r = n.getPendingChangeSize();
                    void 0 !== r &&
                      this.Os(n, r.height, r.width, r.margins, void 0, !0);
                  }
                }),
                (i.Os = function (t, i, n, r, e, s, u) {
                  var o = this;
                  t.hasBeenMeasured() && !r
                    ? this.Ps(t, i, n, void 0, e, s, u)
                    : this.As.measure(function () {
                        t.hasBeenMeasured() || t.measure();
                        var h = r
                          ? { newMargins: r, currentMargins: o.Is(t) }
                          : void 0;
                        o.Ps(t, i, n, h, e, s, u);
                      });
                }),
                (i.Ps = function (t, i, n, r, e, s, u) {
                  t.resetPendingChangeSize();
                  var o,
                    h,
                    a = t.getLayoutSize();
                  if (
                    !(
                      (void 0 !== i && i != a.height) ||
                      (void 0 !== n && n != a.width) ||
                      (void 0 !== r &&
                        ((o = r.currentMargins),
                        (h = r.newMargins),
                        (void 0 !== h.top && h.top != o.top) ||
                          (void 0 !== h.right && h.right != o.right) ||
                          (void 0 !== h.bottom && h.bottom != o.bottom) ||
                          (void 0 !== h.left && h.left != o.left)))
                    )
                  )
                    return (
                      void 0 === i &&
                        void 0 === n &&
                        void 0 === r &&
                        qt().error(
                          "Mutator",
                          "attempting to change size with undefined dimensions",
                          t.debugid
                        ),
                      void (u && u(!0))
                    );
                  this.bi.updateOrEnqueueMutateTask(t, {
                    resource: t,
                    newHeight: i,
                    newWidth: n,
                    marginChange: r,
                    event: e,
                    force: s,
                    callback: u,
                  }),
                    this.bi.schedulePassVsync();
                }),
                t
              );
            })(),
            sh = null,
            uh = ["gclid", "gclsrc"],
            oh = [/^t.co$/];
          function hh() {
            return $t(sh, "E#19457 trackImpressionPromise");
          }
          function ah(t, i, n, r) {
            var e, s, u;
            try {
              e = t.open(i, n, r);
            } catch (t) {
              qt().error("DOM", "Failed to open url on target: ", n, t);
            }
            return (
              !e &&
                "_top" != n &&
                ("number" != typeof u && (u = 0),
                u + "noopener".length > (s = r || "").length ||
                  -1 === s.indexOf("noopener", u)) &&
                (e = t.open(i, "_top")),
              e
            );
          }
          var fh = "navigation",
            ch = "click",
            lh = "contextmenu",
            vh = ["_top", "_blank"],
            dh = "data-a4a-orig-href",
            mh = (function () {
              function t(t) {
                var i = this;
                (this.fodoc = t),
                  (this.Ss = t.getRootNode()),
                  (this.ws = or(this.fodoc)),
                  (this.ne = sr(this.fodoc)),
                  (this.ds = Wn(this.fodoc)),
                  (this.Ms = Xn(this.fodoc.win)),
                  (this.ks = this.Ms.isIos() && this.Ms.isSafari()),
                  (this._s = Ii(this.fodoc.win) && this.ne.isOvertakeHistory()),
                  (this.Rs =
                    this.Ss != this.fodoc.getRootNode() ||
                    !!this.fodoc.getParent()),
                  (this.Ns = "inabox" == Mt(this.fodoc.win).runtime),
                  (this.Cs =
                    this.Ss.nodeType == Node.DOCUMENT_NODE
                      ? this.Ss.documentElement
                      : this.Ss),
                  (this.Ds = this.js.bind(this)),
                  this.Ss.addEventListener(ch, this.Ds),
                  this.Ss.addEventListener(lh, this.Ds),
                  (this.zs = !1),
                  (function (t) {
                    return t.whenReady().then(function () {
                      return !!t
                        .getBody()
                        .querySelector("fo-analytics[type=googleanalytics]");
                    });
                  })(this.fodoc).then(function (t) {
                    i.zs = t;
                  }),
                  (this.Ls = !1),
                  (this.Us = !1),
                  Promise.all([
                    this.ne.isTrustedViewer(),
                    this.ne.getViewerOrigin(),
                  ]).then(function (t) {
                    var n;
                    (i.Ls = t[0]),
                      (i.Us = ((n = t[1]), Ot.localhostRegex.test(ns(n).origin)));
                  }),
                  (this.Hs = null),
                  (this.Gs = new js()),
                  (this.Vs = new js());
              }
              t.installAnchorClickInterceptor = function (t, i) {
                i.document.documentElement.addEventListener(
                  "click",
                  ph.bind(null, t),
                  !0
                );
              };
              var i = t.prototype;
              return (
                (i.cleanup = function () {
                  this.Ds &&
                    (this.Ss.removeEventListener(ch, this.Ds),
                    this.Ss.removeEventListener(lh, this.Ds));
                }),
                (i.openWindow = function (t, i, n, r) {
                  var e = "";
                  (!this.Ms.isIos() && this.Ms.isChrome()) ||
                    r ||
                    (e += "noopener");
                  var s = ah(t, i, n, e);
                  s && !r && (s.opener = null);
                }),
                (i.navigateTo = function (t, i, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    e = r.opener,
                    s = void 0 !== e && e,
                    u = r.target,
                    o = void 0 === u ? "_top" : u;
                  i = this.Fs(i);
                  var h = er(this.Cs);
                  if (h.isProtocolValid(i)) {
                    $t(vh.includes(o), "Target '".concat(o, "' not supported."));
                    var a = h.getSourceUrl(t.location);
                    (i = h.resolveRelativeUrl(i, a)),
                      "_blank" != o
                        ? (n &&
                            (this.Hs || (this.Hs = this.Bs()),
                            this.Hs.includes(n) &&
                              this.navigateTofoUrl(i, n))) ||
                          (t.top.location.href = i)
                        : this.openWindow(t, i, o, s);
                  } else
                    Vt().error(fh, "Cannot navigate to invalid protocol: " + i);
                }),
                (i.navigateTofoUrl = function (t, i) {
                  return (
                    !!this.ne.hasCapability("a2a") &&
                    (this.ne.sendMessage("a2aNavigate", {
                      url: t,
                      requestedBy: i,
                    }),
                    !0)
                  );
                }),
                (i.Bs = function () {
                  var t = this.Ss.querySelector(
                    'meta[name="fo-to-fo-navigation"]'
                  );
                  return t && t.hasAttribute("content")
                    ? t
                        .getAttribute("content")
                        .split(",")
                        .map(function (t) {
                          return t.trim();
                        })
                    : [];
                }),
                (i.js = function (t) {
                  if (!t.defaultPrevented) {
                    var i = ci(t.__fo_CUSTOM_LINKER_TARGET__ || t.target, "A");
                    i &&
                      i.href &&
                      (t.type == ch
                        ? this.qs(i, t)
                        : t.type == lh && this.$s(i, t));
                  }
                }),
                (i.qs = function (t, i) {
                  this.Ws(t);
                  var n = this.Ks(t.href);
                  if (!this.Ys(i, t, n) && !this.Js(i, t, n)) {
                    var r = this.Xs();
                    bh(n) != bh(r) && (this.Qs(t, i), (n = this.Ks(t.href))),
                      this.Zs(i, t, n, r);
                  }
                }),
                (i.$s = function (t, i) {
                  this.Ws(t), this.Qs(t, i);
                }),
                (i.Qs = function (t, i) {
                  this.Gs.forEach(function (n) {
                    n(t, i);
                  });
                }),
                (i.Fs = function (t) {
                  return (
                    this.Vs.forEach(function (i) {
                      t = i(t);
                    }),
                    t
                  );
                }),
                (i.Ws = function (t) {
                  var i = null;
                  this.zs &&
                    !this.Rs &&
                    (i = (function (t, i) {
                      for (
                        var n = gt(rs(_r.getLocation(t).href).search),
                          r = [],
                          e = 0;
                        e < uh.length;
                        e++
                      ) {
                        var s = uh[e];
                        void 0 !== n[s] && r.push(s);
                      }
                      var u = i.getAttribute("data-fo-addparams"),
                        o = i.href;
                      u && (o = os(o, gt(u)));
                      for (
                        var h = gt(rs(o).search), a = r.length - 1;
                        a >= 0;
                        a--
                      )
                        void 0 !== h[r[a]] && r.splice(a, 1);
                      return (function (t) {
                        for (var i = "", n = 0; n < t.length; n++) {
                          var r = t[n];
                          i +=
                            0 == n
                              ? "".concat(r, "=QUERY_PARAM(").concat(r, ")")
                              : "&".concat(r, "=QUERY_PARAM(").concat(r, ")");
                        }
                        return i;
                      })(r);
                    })(this.fodoc.win, t)),
                    nr(t).maybeExpandLink(t, i);
                }),
                (i.Js = function (t, i, n) {
                  if (!this._s) return !1;
                  var r = Zt(i),
                    e = i.href,
                    s = n.protocol;
                  if ("ftp:" == s)
                    return ah(r, e, "_blank"), t.preventDefault(), !0;
                  var u = /^(https?|mailto):$/.test(s);
                  return !(
                    !this.ks ||
                    u ||
                    (ah(r, e, "_top"), t.preventDefault(), 0)
                  );
                }),
                (i.Ys = function (t, i, n) {
                  return !(
                    !i.hasAttribute("rel") ||
                    !i
                      .getAttribute("rel")
                      .split(" ")
                      .map(function (t) {
                        return t.trim();
                      })
                      .includes("fohtml") ||
                    !this.navigateTofoUrl(n.href, "<a rel=fohtml>") ||
                    (t.preventDefault(), 0)
                  );
                }),
                (i.Zs = function (t, i, n, r) {
                  var e = bh(n),
                    s = bh(r);
                  if (n.hash && e == s) this.io(t, n, r);
                  else {
                    var u = (i.getAttribute("target") || "").toLowerCase();
                    (this.Rs || this.Ns) &&
                      "_top" != u &&
                      "_blank" != u &&
                      ((u = "_blank"), i.setAttribute("target", u));
                    var o = this.fodoc.win,
                      h = Xn(o),
                      a = sr(i);
                    r.search &&
                      h.isSafari() &&
                      h.getMajorVersion() >= 13 &&
                      a.isProxyOrigin() &&
                      a.isEmbedded() &&
                      this.no(o, r, u),
                      this.viewerInterceptsNavigation(e, "intercept_click") &&
                        t.preventDefault();
                  }
                }),
                (i.no = function (t, i, n) {
                  qt().info(
                    fh,
                    "Removing iframe query string before navigation:",
                    i.search
                  );
                  var r = i.href,
                    e = "".concat(i.origin).concat(i.pathname).concat(i.hash);
                  t.history.replaceState(null, "", e);
                  var s = function () {
                    var i = t.location.href;
                    i == e
                      ? (qt().info(
                          fh,
                          "Restored iframe URL with query string:",
                          r
                        ),
                        t.history.replaceState(null, "", r))
                      : qt().error(fh, "Unexpected iframe URL change:", i, e);
                  };
                  "_blank" === n
                    ? t.setTimeout(s, 0)
                    : t.addEventListener("pageshow", function i(n) {
                        n.persisted &&
                          (s(), t.removeEventListener("pageshow", i));
                      });
                }),
                (i.io = function (t, i, n) {
                  var r = this;
                  if ((t.preventDefault(), !this.Rs)) {
                    var e = i.hash.slice(1),
                      s = null;
                    if (e) {
                      var u = si(e);
                      s =
                        this.Ss.getElementById(e) ||
                        this.Ss.querySelector('a[name="'.concat(u, '"]'));
                    }
                    i.hash != n.hash
                      ? this.ds.replaceStateForTarget(i.hash).then(function () {
                          r.ro(s, e);
                        })
                      : this.ro(s, e);
                  }
                }),
                (i.registerAnchorMutator = function (t, i) {
                  this.Gs.enqueue(t, i);
                }),
                (i.registerNavigateToMutator = function (t, i) {
                  this.Vs.enqueue(t, i);
                }),
                (i.ro = function (t, i) {
                  var n = this;
                  t
                    ? (this.ws.scrollIntoView(t),
                      ir(this.fodoc.win).delay(function () {
                        return n.ws.scrollIntoView(t);
                      }, 1))
                    : qt().warn(
                        fh,
                        "failed to find element with id="
                          .concat(i, " or a[name=")
                          .concat(i, "]")
                      );
                }),
                (i.Ks = function (t) {
                  return er(this.Cs).parse(t);
                }),
                (i.Xs = function () {
                  return this.Ks("");
                }),
                (i.viewerInterceptsNavigation = function (t, i) {
                  var n = this.ne.hasCapability("interceptNavigation"),
                    r =
                      this.fodoc.isSingleDoc() &&
                      this.fodoc
                        .getRootNode()
                        .documentElement.hasAttribute(
                          "allow-navigation-interception"
                        );
                  return !(
                    !n ||
                    !r ||
                    (!this.Ls && !this.Us) ||
                    (this.ne.sendMessage("navigateTo", {
                      url: t,
                      requestedBy: i,
                    }),
                    0)
                  );
                }),
                t
              );
            })();
          function ph(t, i) {
            var n = ci(i.target, "A");
            if (n && n.href) {
              var r = n.getAttribute(dh) || n.getAttribute("href");
              if (r) {
                var e = {
                    CLICK_X: function () {
                      return i.pageX;
                    },
                    CLICK_Y: function () {
                      return i.pageY;
                    },
                  },
                  s = nr(n).expandUrlSync(r, e, { CLICK_X: !0, CLICK_Y: !0 });
                s != r &&
                  (n.getAttribute(dh) || n.setAttribute(dh, r),
                  n.setAttribute("href", s));
              }
            }
          }
          function bh(t) {
            return "".concat(t.origin).concat(t.pathname).concat(t.search);
          }
          function gh(t) {
            return V(t) ? t : [t];
          }
          var yh = (function () {
              function t(t) {
                this.bi = Zn(t);
              }
              var i = t.prototype;
              return (
                (i.setOwner = function (t, i) {
                  _s.setOwner(t, i);
                }),
                (i.schedulePreload = function (t, i) {
                  this.eo(this.bi.getResourceForElement(t), !1, gh(i));
                }),
                (i.scheduleLayout = function (t, i) {
                  this.eo(this.bi.getResourceForElement(t), !0, gh(i));
                }),
                (i.schedulePause = function (t, i) {
                  var n = this.bi.getResourceForElement(t);
                  (i = gh(i)),
                    this.so(n, i, function (t) {
                      t.pause();
                    });
                }),
                (i.scheduleResume = function (t, i) {
                  var n = this.bi.getResourceForElement(t);
                  (i = gh(i)),
                    this.so(n, i, function (t) {
                      t.resume();
                    });
                }),
                (i.scheduleUnlayout = function (t, i) {
                  var n = this.bi.getResourceForElement(t);
                  (i = gh(i)),
                    this.so(n, i, function (t) {
                      t.unlayout();
                    });
                }),
                (i.requireLayout = function (t, i) {
                  var n = [];
                  return (
                    this.oo(t, function (t) {
                      n.push(t.element.ensureLoaded());
                    }),
                    Promise.all(n)
                  );
                }),
                (i.so = function (t, i, n) {
                  for (var r, e = o(i, !0); !(r = e()).done; ) {
                    var s = r.value;
                    Bt(t.element.contains(s)), this.oo(s, n);
                  }
                }),
                (i.oo = function (t, i) {
                  if (t.classList.contains("i-fohtml-element")) {
                    i(this.bi.getResourceForElement(t));
                    var n = t.getPlaceholder();
                    n && this.oo(n, i);
                  } else
                    for (
                      var r = t.getElementsByClassName("i-fohtml-element"),
                        e = [],
                        s = 0;
                      s < r.length;
                      s++
                    ) {
                      for (var u = r[s], o = !1, h = 0; h < e.length; h++)
                        if (e[h].contains(u)) {
                          o = !0;
                          break;
                        }
                      o || (e.push(u), i(this.bi.getResourceForElement(u)));
                    }
                }),
                (i.eo = function (t, i, n) {
                  this.so(t, n, function (i) {
                    i.element.ensureLoaded(t.getLayoutPriority());
                  });
                }),
                t
              );
            })(),
            wh = (function () {
              function t(t) {
                (this.uo = t.navigator), (this.t = t);
              }
              var i = t.prototype;
              return (
                (i.isAndroid = function () {
                  return /Android/i.test(this.uo.userAgent);
                }),
                (i.isIos = function () {
                  return /iPhone|iPad|iPod/i.test(this.uo.userAgent);
                }),
                (i.isSafari = function () {
                  return (
                    /Safari/i.test(this.uo.userAgent) &&
                    !this.isChrome() &&
                    !this.isEdge() &&
                    !this.isFirefox() &&
                    !this.isOpera()
                  );
                }),
                (i.isChrome = function () {
                  return (
                    /Chrome|CriOS/i.test(this.uo.userAgent) &&
                    !this.isEdge() &&
                    !this.isOpera()
                  );
                }),
                (i.isFirefox = function () {
                  return (
                    /Firefox|FxiOS/i.test(this.uo.userAgent) && !this.isEdge()
                  );
                }),
                (i.isOpera = function () {
                  return /OPR\/|Opera|OPiOS/i.test(this.uo.userAgent);
                }),
                (i.isEdge = function () {
                  return /Edge/i.test(this.uo.userAgent);
                }),
                (i.isWebKit = function () {
                  return /WebKit/i.test(this.uo.userAgent) && !this.isEdge();
                }),
                (i.isWindows = function () {
                  return /Windows/i.test(this.uo.userAgent);
                }),
                (i.isStandalone = function () {
                  return (
                    (this.isIos() && this.uo.standalone) ||
                    (this.isChrome() &&
                      this.t.matchMedia("(display-mode: standalone)").matches)
                  );
                }),
                (i.isBot = function () {
                  return /bot/i.test(this.uo.userAgent);
                }),
                (i.getMajorVersion = function () {
                  return this.isSafari()
                    ? this.isIos()
                      ? this.getIosMajorVersion() || 0
                      : this.ho(/\sVersion\/(\d+)/, 1)
                    : this.isChrome()
                    ? this.ho(/(Chrome|CriOS)\/(\d+)/, 2)
                    : this.isFirefox()
                    ? this.ho(/(Firefox|FxiOS)\/(\d+)/, 2)
                    : this.isOpera()
                    ? this.ho(/(OPR|Opera|OPiOS)\/(\d+)/, 2)
                    : this.isEdge()
                    ? this.ho(/Edge\/(\d+)/, 1)
                    : 0;
                }),
                (i.ho = function (t, i) {
                  if (!this.uo.userAgent) return 0;
                  var n = this.uo.userAgent.match(t);
                  return !n || i >= n.length ? 0 : parseInt(n[i], 10);
                }),
                (i.getIosVersionString = function () {
                  if (!this.uo.userAgent) return "";
                  if (!this.isIos()) return "";
                  var t = this.uo.userAgent.match(
                    /OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/
                  );
                  return t ? (t = t[1].replace(/_/g, ".")) : "";
                }),
                (i.getIosMajorVersion = function () {
                  var t = this.getIosVersionString();
                  return "" == t ? null : Number(t.split(".")[0]);
                }),
                t
              );
            })();
          function Ah(t) {
            vn(t, "platform", wh);
          }
          var Eh = (function () {
              function t(t) {
                (this.Ai = t), (this.ao = A());
              }
              var i = t.prototype;
              return (
                (i.addTransition = function (t, i, n) {
                  var r = this.co(t, i);
                  et(!this.ao[r]), (this.ao[r] = n);
                }),
                (i.setState = function (t) {
                  var i = this.Ai;
                  this.Ai = t;
                  var n = this.co(i, t),
                    r = this.ao[n];
                  null == r || r();
                }),
                (i.co = function (t, i) {
                  return "".concat(t, "|").concat(i);
                }),
                t
              );
            })(),
            xh = (function () {
              function t() {
                (this.vn = []), (this.fo = {}), (this.lo = 0), (this.vo = 0);
              }
              var i = t.prototype;
              return (
                (i.getSize = function () {
                  return this.vn.length;
                }),
                (i.getLastEnqueueTime = function () {
                  return this.lo;
                }),
                (i.getLastDequeueTime = function () {
                  return this.vo;
                }),
                (i.getTaskById = function (t) {
                  return this.fo[t] || null;
                }),
                (i.enqueue = function (t) {
                  Bt(!this.fo[t.id]),
                    this.vn.push(t),
                    (this.fo[t.id] = t),
                    (this.lo = Date.now());
                }),
                (i.dequeue = function (t) {
                  var i = this.fo[t.id];
                  return (
                    !!this.removeAtIndex(t, this.vn.indexOf(i)) &&
                    ((this.vo = Date.now()), !0)
                  );
                }),
                (i.peek = function (t) {
                  for (var i = 1e6, n = null, r = 0; r < this.vn.length; r++) {
                    var e = this.vn[r],
                      s = t(e);
                    s < i && ((i = s), (n = e));
                  }
                  return n;
                }),
                (i.forEach = function (t) {
                  this.vn.forEach(t);
                }),
                (i.removeAtIndex = function (t, i) {
                  var n = this.fo[t.id];
                  return !(
                    !n ||
                    this.vn[i] != n ||
                    (this.vn.splice(i, 1), delete this.fo[t.id], 0)
                  );
                }),
                (i.purge = function (t) {
                  for (var i = this.vn.length; i--; )
                    t(this.vn[i]) && this.removeAtIndex(this.vn[i], i);
                }),
                t
              );
            })(),
            Oh = "Resources",
            Ph = (function () {
              function t(t) {
                var i = this;
                (this.fodoc = t),
                  (this.win = t.win),
                  (this.ne = sr(t)),
                  (this.do = this.ne.isRuntimeOn()),
                  (this.mo = !1),
                  (this.po = 0),
                  (this.bi = []),
                  (this.bo = 0),
                  (this.yo = 0),
                  (this.wo = 0),
                  (this.Ao = this.fodoc.isVisible()),
                  (this.Eo = !1),
                  (this.xo = !0),
                  (this.Oo = !1),
                  (this.To = -1),
                  (this.Io = !0),
                  (this.Po = -1),
                  (this.So = 0),
                  (this.Mo = 0),
                  (this.Cr = new xu(this.win, function () {
                    return i.doPass();
                  })),
                  (this.ko = new xu(this.win, function () {
                    (i.Io = !0), i.schedulePass();
                  })),
                  (this._o = new xh()),
                  (this.Qi = new xh()),
                  (this.Ro = this.No.bind(this)),
                  (this.Co = []),
                  (this.Do = []),
                  (this.jo = !1),
                  (this.ws = or(this.fodoc)),
                  (this.As = ur(this.win)),
                  (this.Es = new nh(this.win, 6e4)),
                  (this.zo = !1),
                  (this.Lo = 0),
                  (this.Uo = !1),
                  (this.Ho = []),
                  (this.Go = []),
                  (this.Vo = new a()),
                  (this.Fo = new Eh(this.fodoc.getVisibilityState())),
                  this.ws.onChanged(function (t) {
                    (i.So = i.win.Date.now()),
                      (i.Mo = t.velocity),
                      t.relayoutAll && ((i.Io = !0), (i.Uo = !0)),
                      i.schedulePass();
                  }),
                  this.ws.onScroll(function () {
                    i.So = i.win.Date.now();
                  }),
                  this.fodoc.onVisibilityChanged(function () {
                    -1 == i.To &&
                      i.fodoc.isVisible() &&
                      (i.To = i.win.Date.now()),
                      i.schedulePass();
                  }),
                  this.ne.onRuntimeState(function (t) {
                    qt().fine(Oh, "Runtime state:", t),
                      (i.do = t),
                      i.schedulePass(1);
                  }),
                  Gs(this.fodoc, function () {
                    i.Bo(i.Fo), i.schedulePass(0);
                  }),
                  this.qo(),
                  (this.$o = dt(
                    this.win,
                    function (t) {
                      return i.Wo(t);
                    },
                    250
                  )),
                  Ue(this.win.document, "scroll", this.$o, {
                    capture: !0,
                    passive: !0,
                  });
              }
              var i = t.prototype;
              return (
                (i.qo = function () {
                  var t = this;
                  this.fodoc.whenReady().then(function () {
                    (t.Eo = !0),
                      t.Ko(),
                      (t.Do = null),
                      (function (t) {
                        return mn(t, "input");
                      })(t.win).setupInputModeClasses(t.fodoc);
                    var i = function () {
                      return t.ko.schedule();
                    };
                    i(),
                      Promise.race([He(t.win), ir(t.win).promise(3100)]).then(i),
                      t.win.document.fonts &&
                        "loaded" != t.win.document.fonts.status &&
                        t.win.document.fonts.ready.then(i);
                  });
                }),
                (i.get = function () {
                  return this.bi.slice(0);
                }),
                (i.getfodoc = function () {
                  return this.fodoc;
                }),
                (i.getResourceForElement = function (t) {
                  return _s.forElement(t);
                }),
                (i.getResourceForElementOptional = function (t) {
                  return _s.forElementOptional(t);
                }),
                (i.getScrollDirection = function () {
                  return Math.sign(this.Mo) || 1;
                }),
                (i.add = function (t) {
                  this.bo++, 1 == this.bo && this.ws.ensureReadyForElements();
                  var i = _s.forElementOptional(t);
                  i && 0 != i.getState() && !t.reconstructWhenReparented()
                    ? (i.requestMeasure(),
                      qt().fine(Oh, "resource reused:", i.debugid))
                    : ((i = new _s(++this.po, t, this)),
                      qt().fine(Oh, "resource added:", i.debugid)),
                    this.bi.push(i),
                    this.ko.schedule(1e3);
                }),
                (i.Yo = function () {
                  return this.yo < 20 || this.fodoc.hasBeenVisible();
                }),
                (i.Jo = function (t) {
                  var i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    r = this.do || this.mo;
                  if (r) {
                    var e =
                      this.fodoc.getVisibilityState() != ar ||
                      t.prerenderAllowed();
                    e &&
                      (this.Eo
                        ? this.Xo(t, n)
                        : t.isBuilt() ||
                          t.isBuilding() ||
                          (i && this.Do.includes(t)) ||
                          (this.Do.push(t), this.Ko()));
                  }
                }),
                (i.Ko = function () {
                  if (!this.jo)
                    try {
                      (this.jo = !0), this.Qo();
                    } finally {
                      this.jo = !1;
                    }
                }),
                (i.Qo = function () {
                  for (var t = 0; t < this.Do.length; t++) {
                    var i = this.Do[t];
                    (this.Eo || Oi(i.element, this.fodoc.getRootNode())) &&
                      (this.Do.splice(t--, 1), this.Xo(i));
                  }
                }),
                (i.Xo = function (t) {
                  var i = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!n && !this.Yo() && !t.isBuildRenderBlocking()) return null;
                  var r = t.build();
                  return r
                    ? (qt().fine(Oh, "build resource:", t.debugid),
                      this.yo++,
                      this.wo++,
                      r.then(
                        function () {
                          return i.schedulePass();
                        },
                        function (n) {
                          if ((i.Zo(t), !Ms(n))) throw n;
                        }
                      ))
                    : null;
                }),
                (i.remove = function (t) {
                  var i = _s.forElementOptional(t);
                  i && this.Zo(i);
                }),
                (i.Zo = function (t) {
                  var i = this.bi.indexOf(t);
                  -1 != i && this.bi.splice(i, 1),
                    t.isBuilt() && t.pauseOnRemove(),
                    3 === t.getState() && t.layoutCanceled(),
                    this.tu(t, !0),
                    qt().fine(Oh, "resource removed:", t.debugid);
                }),
                (i.upgraded = function (t) {
                  var i = _s.forElement(t);
                  this.Jo(i), qt().fine(Oh, "resource upgraded:", i.debugid);
                }),
                (i.updateLayoutPriority = function (t, i) {
                  var n = _s.forElement(t);
                  n.updateLayoutPriority(i),
                    this.Qi.forEach(function (t) {
                      t.resource == n && (t.priority = i);
                    }),
                    this.schedulePass();
                }),
                (i.schedulePass = function (t) {
                  return this.Cr.schedule(t);
                }),
                (i.updateOrEnqueueMutateTask = function (t, i) {
                  for (var n = null, r = 0; r < this.Co.length; r++)
                    if (this.Co[r].resource == t) {
                      n = this.Co[r];
                      break;
                    }
                  n
                    ? ((n.newHeight = i.newHeight),
                      (n.newWidth = i.newWidth),
                      (n.marginChange = i.marginChange),
                      (n.event = i.event),
                      (n.force = i.force || n.force),
                      (n.callback = i.callback))
                    : this.Co.push(i);
                }),
                (i.schedulePassVsync = function () {
                  var t = this;
                  this.zo ||
                    ((this.zo = !0),
                    this.As.mutate(function () {
                      return t.doPass();
                    }));
                }),
                (i.foInitComplete = function () {
                  (this.Oo = !0),
                    qt().fine(Oh, "foInitComplete"),
                    this.schedulePass();
                }),
                (i.setRelayoutTop = function (t) {
                  -1 == this.Po
                    ? (this.Po = t)
                    : (this.Po = Math.min(t, this.Po));
                }),
                (i.maybeHeightChanged = function () {
                  this.Uo = !0;
                }),
                (i.onNextPass = function (t) {
                  this.Ho.push(t);
                }),
                (i.doPass = function () {
                  var t = this;
                  if (this.do) {
                    if (
                      ((this.Ao = this.fodoc.isVisible()),
                      (this.wo = 0),
                      this.Eo && this.xo && this.Oo)
                    ) {
                      var i;
                      this.xo = !1;
                      var n = this.win.document,
                        r = Bn(this.fodoc);
                      this.ne.sendMessage(
                        "documentLoaded",
                        {
                          title: n.title,
                          sourceUrl: ps(this.fodoc.getUrl()),
                          isStory:
                            "fo-STORY" ===
                            (null === (i = n.body.firstElementChild) ||
                            void 0 === i
                              ? void 0
                              : i.tagName),
                          serverLayout:
                            n.documentElement.hasAttribute("i-fohtml-element"),
                          linkRels: r.linkRels,
                          metaTags: { viewport: r.viewport },
                          viewport: r.viewport,
                        },
                        !0
                      ),
                        (this.Lo = this.ws.getContentHeight()),
                        this.ne.sendMessage(
                          "documentHeight",
                          { height: this.Lo },
                          !0
                        ),
                        qt().fine(Oh, "document height on load: %s", this.Lo);
                    }
                    !this.xo &&
                      this.iu &&
                      this.bi.every(function (t) {
                        return t.getState() != _s.NOT_BUILT || t.element.R1();
                      }) &&
                      ((this.iu = !1), (this.Uo = !0));
                    var e = this.ws.getSize();
                    qt().fine(
                      Oh,
                      "PASS: visible=",
                      this.Ao,
                      ", relayoutAll=",
                      this.Io,
                      ", relayoutTop=",
                      this.Po,
                      ", viewportSize=",
                      e.width,
                      e.height
                    ),
                      this.Cr.cancel(),
                      (this.zo = !1),
                      this.Fo.setState(this.fodoc.getVisibilityState()),
                      this.nu(),
                      this.Uo &&
                        ((this.Uo = !1),
                        this.As.measure(function () {
                          var i = t.ws.getContentHeight();
                          i != t.Lo &&
                            (t.ne.sendMessage(
                              "documentHeight",
                              { height: i },
                              !0
                            ),
                            (t.Lo = i),
                            qt().fine(Oh, "document height changed: %s", t.Lo),
                            t.ws.contentHeightChanged());
                        }));
                    for (var s = 0; s < this.Ho.length; s++) (0, this.Ho[s])();
                    this.Ho.length = 0;
                  } else qt().fine(Oh, "runtime is off");
                }),
                (i.nu = function () {
                  this.Eo &&
                    this.Oo &&
                    !this.fodoc.signals().get(ks) &&
                    (this.fodoc.signals().signal(ks),
                    qt().fine(Oh, "signal: ready-scan"));
                }),
                (i.ru = function () {
                  return this.Co.length > 0;
                }),
                (i.eu = function () {
                  var t = this,
                    i = this.win.Date.now(),
                    n = this.ws.getRect(),
                    r = n.height / 10,
                    e = n.height / 10,
                    s =
                      (Math.abs(this.Mo) < 0.01 && i - this.So > 500) ||
                      i - this.So > 1e3;
                  if (this.Co.length > 0) {
                    qt().fine(Oh, "change size requests:", this.Co.length);
                    var u = this.Co;
                    this.Co = [];
                    for (
                      var o = -1,
                        h = [],
                        a = 0,
                        f = function (i) {
                          var f = u[i],
                            c = f,
                            l = c.event,
                            v = c.resource,
                            d = v.getLayoutBox(),
                            m = 0,
                            p = 0,
                            b = 0,
                            g = 0,
                            y = d.bottom,
                            w = d.top,
                            A = void 0;
                          if (f.marginChange) {
                            A = f.marginChange.newMargins;
                            var E = f.marginChange.currentMargins;
                            null != A.top && (m = A.top - E.top),
                              null != A.bottom && (p = A.bottom - E.bottom),
                              null != A.left && (b = A.left - E.left),
                              null != A.right && (g = A.right - E.right),
                              m && (w = d.top - E.top),
                              p && (y = d.bottom + E.bottom);
                          }
                          var x = f.newHeight - d.height,
                            O = f.newWidth - d.width,
                            P = !1;
                          if (
                            0 == x &&
                            0 == m &&
                            0 == p &&
                            0 == O &&
                            0 == b &&
                            0 == g
                          );
                          else if (f.force || !t.Ao) P = !0;
                          else if (
                            t.Es.hasDescendantsOf(v.element) ||
                            (l &&
                              l.userActivation &&
                              l.userActivation.hasBeenActive)
                          )
                            P = !0;
                          else if (
                            w >= n.bottom - e ||
                            (0 == m && d.bottom + Math.min(x, 0) >= n.bottom - e)
                          )
                            P = !0;
                          else {
                            if (n.top > 1 && y <= n.top + r)
                              return (
                                (x < 0 && n.top + a < -x) ||
                                  (s ? ((a += x), h.push(f)) : t.Co.push(f)),
                                "continue"
                              );
                            t.su(v, d)
                              ? (P = !0)
                              : x < 0 ||
                                m < 0 ||
                                p < 0 ||
                                (f.newHeight == d.height
                                  ? t.As.run(
                                      {
                                        measure: function (t) {
                                          t.resize = !1;
                                          var i = v.element.parentElement;
                                          if (i) {
                                            for (
                                              var n =
                                                  (i.getLayoutSize &&
                                                    i.getLayoutSize().width) ||
                                                  i.offsetWidth,
                                                r = O,
                                                e = 0;
                                              e < i.childElementCount;
                                              e++
                                            )
                                              if (
                                                (r += i.children[e].offsetWidth) >
                                                n
                                              )
                                                return;
                                            t.resize = !0;
                                          }
                                        },
                                        mutate: function (t) {
                                          t.resize &&
                                            f.resource.changeSize(
                                              f.newHeight,
                                              f.newWidth,
                                              A
                                            ),
                                            f.resource.overflowCallback(
                                              !t.resize,
                                              f.newHeight,
                                              f.newWidth,
                                              A
                                            );
                                        },
                                      },
                                      {}
                                    )
                                  : f.resource.overflowCallback(
                                      !0,
                                      f.newHeight,
                                      f.newWidth,
                                      A
                                    ));
                          }
                          P &&
                            (d.top >= 0 &&
                              (o = -1 == o ? d.top : Math.min(o, d.top)),
                            f.resource.changeSize(f.newHeight, f.newWidth, A),
                            f.resource.overflowCallback(
                              !1,
                              f.newHeight,
                              f.newWidth,
                              A
                            ),
                            (t.Uo = !0)),
                            f.callback && f.callback(P);
                        },
                        c = 0;
                      c < u.length;
                      c++
                    )
                      f(c);
                    -1 != o && this.setRelayoutTop(o),
                      h.length > 0 &&
                        this.As.run(
                          {
                            measure: function (i) {
                              (i.scrollHeight = t.ws.getScrollHeight()),
                                (i.scrollTop = t.ws.getScrollTop());
                            },
                            mutate: function (i) {
                              var n = -1;
                              h.forEach(function (t) {
                                var i = t.resource.getLayoutBox();
                                (n = -1 == n ? i.top : Math.min(n, i.top)),
                                  t.resource.changeSize(
                                    t.newHeight,
                                    t.newWidth,
                                    t.marginChange
                                      ? t.marginChange.newMargins
                                      : void 0
                                  ),
                                  t.callback && t.callback(!0);
                              }),
                                -1 != n && t.setRelayoutTop(n);
                              var r = t.ws.getScrollHeight();
                              r != i.scrollHeight &&
                                t.ws.setScrollTop(
                                  i.scrollTop + (r - i.scrollHeight)
                                ),
                                (t.Uo = !0);
                            },
                          },
                          {}
                        );
                  }
                }),
                (i.su = function (t, i, n) {
                  var r = this.ws.getContentHeight(),
                    e = Math.max(0.85 * r, r - 1e3),
                    s = i || t.getLayoutBox(),
                    u = n || t.getInitialLayoutBox();
                  return s.bottom >= e || u.bottom >= e;
                }),
                (i.ou = function (t) {
                  var i = t.isDisplayed();
                  return t.measure(), !(i && !t.isDisplayed());
                }),
                (i.uu = function (t) {
                  var i = this;
                  t.length &&
                    this.As.mutate(function () {
                      t.forEach(function (t) {
                        t.unload(), i.tu(t);
                      }),
                        qt().fine(Oh, "unload:", t);
                    });
                }),
                (i.hu = function () {
                  var t = this.win.Date.now(),
                    i = this.Go,
                    n = this.Io,
                    r = this.Po;
                  (this.Io = !1), (this.Po = -1);
                  for (var e, s = 0, u = 0, o = 0; o < this.bi.length; o++) {
                    var h = this.bi[o];
                    0 != h.getState() ||
                      h.isBuilding() ||
                      h.element.R1() ||
                      this.Jo(h, !0),
                      (!n && h.hasBeenMeasured() && 1 != h.getState()) || s++,
                      h.isMeasureRequested() && u++;
                  }
                  if (s > 0 || u > 0 || n || -1 != r || i.length > 0)
                    for (var a = 0; a < this.bi.length; a++) {
                      var f = this.bi[a];
                      if (
                        !(
                          (f.hasOwner() && !f.isMeasureRequested()) ||
                          f.element.R1()
                        )
                      ) {
                        var c =
                          n ||
                          1 == f.getState() ||
                          !f.hasBeenMeasured() ||
                          f.isMeasureRequested() ||
                          (-1 != r && f.getLayoutBox().bottom >= r);
                        if (!c)
                          for (var l = 0; l < i.length; l++)
                            if (i[l].contains(f.element)) {
                              c = !0;
                              break;
                            }
                        c && (this.ou(f) || (e || (e = []), e.push(f)));
                      }
                    }
                  (i.length = 0), e && this.uu(e);
                  var v,
                    d = this.ws.getRect();
                  v = this.Ao ? Ri(d, 0.25, 2) : d;
                  for (
                    var m = this.Ao ? Ri(d, 0.25, 0.25) : d, p = 0;
                    p < this.bi.length;
                    p++
                  ) {
                    var b = this.bi[p];
                    if (0 != b.getState() && !b.hasOwner() && !b.element.R1()) {
                      var g = this.Ao && b.isDisplayed() && b.overlaps(m);
                      b.setInViewport(g);
                    }
                  }
                  if (v)
                    for (var y = 0; y < this.bi.length; y++) {
                      var w = this.bi[y];
                      w.isBuilt() ||
                        w.isBuilding() ||
                        w.hasOwner() ||
                        w.element.R1() ||
                        !w.hasBeenMeasured() ||
                        !w.isDisplayed() ||
                        !w.overlaps(v) ||
                        this.Jo(w, !0, !0),
                        2 != w.getState() ||
                          w.hasOwner() ||
                          (w.isDisplayed() &&
                            w.overlaps(v) &&
                            this.scheduleLayoutOrPreload(w, !0));
                    }
                  if (this.Ao && this.au(t)) {
                    for (var A = 0, E = 0; E < this.bi.length && A < 4; E++) {
                      var x = this.bi[E];
                      2 == x.getState() &&
                        !x.hasOwner() &&
                        !x.element.R1() &&
                        x.isDisplayed() &&
                        x.idleRenderOutsideViewport() &&
                        (qt().fine(
                          Oh,
                          "idleRenderOutsideViewport layout:",
                          x.debugid
                        ),
                        this.scheduleLayoutOrPreload(x, !1),
                        A++);
                    }
                    for (var O = 0; O < this.bi.length && A < 4; O++) {
                      var P = this.bi[O];
                      2 != P.getState() ||
                        P.hasOwner() ||
                        P.element.R1() ||
                        !P.isDisplayed() ||
                        (qt().fine(Oh, "idle layout:", P.debugid),
                        this.scheduleLayoutOrPreload(P, !1),
                        A++);
                    }
                  }
                }),
                (i.au = function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : Date.now(),
                    i = this._o.getLastDequeueTime();
                  return (
                    0 == this._o.getSize() &&
                    0 == this.Qi.getSize() &&
                    t > i + 5e3 &&
                    i > 0
                  );
                }),
                (i.cu = function () {
                  for (
                    var t = this.win.Date.now(),
                      i = -1,
                      n = this.Qi.peek(this.Ro);
                    n &&
                    ((i = this.fu(n)),
                    qt().fine(
                      Oh,
                      "peek from queue:",
                      n.id,
                      "sched at",
                      n.scheduleTime,
                      "score",
                      this.Ro(n),
                      "timeout",
                      i
                    ),
                    !(i > 16));
  
                  ) {
                    this.Qi.dequeue(n);
                    var r = this._o.getTaskById(n.id);
                    if (r) {
                      var e = this.lu.bind(this, n);
                      r.promise.then(e, e);
                    } else {
                      var s = n.resource;
                      s.measure(),
                        this.vu(s, n.forceOutsideViewport)
                          ? ((n.promise = n.callback()),
                            (n.startTime = t),
                            qt().fine(Oh, "exec:", n.id, "at", n.startTime),
                            this._o.enqueue(n),
                            n.promise
                              .then(
                                this.du.bind(this, n, !0),
                                this.du.bind(this, n, !1)
                              )
                              .catch(Ps))
                          : (qt().fine(Oh, "cancelled", n.id),
                            s.layoutCanceled());
                    }
                    (n = this.Qi.peek(this.Ro)), (i = -1);
                  }
                  if (
                    (qt().fine(
                      Oh,
                      "queue size:",
                      this.Qi.getSize(),
                      "exec size:",
                      this._o.getSize()
                    ),
                    i >= 0)
                  )
                    return i;
                  var u = 2 * (t - this._o.getLastDequeueTime());
                  return Math.max(Math.min(3e4, u), 5e3);
                }),
                (i.No = function (t) {
                  var i = this.ws.getRect(),
                    n = t.resource.getLayoutBox(),
                    r = Math.floor((n.top - i.top) / i.height);
                  return (
                    Math.sign(r) != this.getScrollDirection() && (r *= 2),
                    (r = Math.abs(r)),
                    10 * t.priority + r
                  );
                }),
                (i.fu = function (t) {
                  var i = this.win.Date.now();
                  if (0 == this._o.getSize()) {
                    if (-1 === this.To) return 0;
                    var n = 1e3 * t.priority;
                    return Math.max(n - (i - this.To), 0);
                  }
                  var r = 0;
                  return (
                    this._o.forEach(function (n) {
                      var e = Math.max(1e3 * (t.priority - n.priority), 0);
                      r = Math.max(r, e - (i - n.startTime));
                    }),
                    r
                  );
                }),
                (i.lu = function (t) {
                  this.Qi.getTaskById(t.id) || this.Qi.enqueue(t);
                }),
                (i.du = function (t, i, n) {
                  if ((this._o.dequeue(t), this.schedulePass(1e3), !i))
                    return (
                      qt().info(Oh, "task failed:", t.id, t.resource.debugid, n),
                      Promise.reject(n)
                    );
                }),
                (i.vu = function (t, i) {
                  return !(
                    0 == t.getState() ||
                    !t.isDisplayed() ||
                    !(
                      this.Ao ||
                      (this.fodoc.getVisibilityState() == ar &&
                        t.prerenderAllowed())
                    ) ||
                    !(
                      i ||
                      t.isInViewport() ||
                      t.renderOutsideViewport() ||
                      t.idleRenderOutsideViewport()
                    )
                  );
                }),
                (i.scheduleLayoutOrPreload = function (t, i, n, r) {
                  if (!t.element.R1()) {
                    var e = 0 != t.getState(),
                      s = t.isDisplayed();
                    (e && s) || Bt(!1);
                    var u = r || !1;
                    this.vu(t, u) &&
                      (i
                        ? this.yn(t, "L", 0, n || 0, u, t.startLayout.bind(t))
                        : this.yn(t, "P", 2, n || 0, u, t.startLayout.bind(t)));
                  }
                }),
                (i.yn = function (t, i, n, r, e, s) {
                  var u = t.getTaskId(i),
                    o = {
                      id: u,
                      resource: t,
                      priority: Math.max(t.getLayoutPriority(), r) + n,
                      forceOutsideViewport: e,
                      callback: s,
                      scheduleTime: this.win.Date.now(),
                      startTime: 0,
                      promise: null,
                    };
                  qt().fine(Oh, "schedule:", o.id, "at", o.scheduleTime);
                  var h = this.Qi.getTaskById(u);
                  (!h || o.priority < h.priority) &&
                    (h && this.Qi.dequeue(h),
                    this.Qi.enqueue(o),
                    this.schedulePass(this.fu(o))),
                    o.resource.layoutScheduled(o.scheduleTime);
                }),
                (i.whenFirstPass = function () {
                  return this.Vo.promise;
                }),
                (i.Bo = function (t) {
                  var i = this,
                    n = cr,
                    r = vr,
                    e = lr,
                    s = ar,
                    u = fr,
                    o = function () {
                      var t = i.ws.getSize();
                      if (t.height > 0 && t.width > 0) {
                        i.ru() && i.eu(), i.hu();
                        var n = i.cu();
                        i.ru() && (n = Math.min(n, 500)),
                          i.Ao
                            ? i.schedulePass(n)
                              ? qt().fine(Oh, "next pass:", n)
                              : qt().fine(Oh, "pass already scheduled")
                            : qt().fine(
                                Oh,
                                "document is not visible: no scheduling"
                              ),
                          i.Vo.resolve();
                      }
                    },
                    h = function () {},
                    a = function () {
                      i.bi.forEach(function (t) {
                        return t.pause();
                      });
                    },
                    f = function () {
                      i.bi.forEach(function (t) {
                        t.unload(), i.tu(t);
                      }),
                        i.mu();
                    },
                    c = function () {
                      i.bi.forEach(function (t) {
                        return t.resume();
                      }),
                        o();
                    };
                  t.addTransition(s, s, o),
                    t.addTransition(s, u, o),
                    t.addTransition(s, n, o),
                    t.addTransition(s, r, o),
                    t.addTransition(s, e, o),
                    t.addTransition(u, u, o),
                    t.addTransition(u, n, o),
                    t.addTransition(u, r, f),
                    t.addTransition(u, e, a),
                    t.addTransition(n, u, o),
                    t.addTransition(n, n, o),
                    t.addTransition(n, r, f),
                    t.addTransition(n, e, a),
                    t.addTransition(r, u, c),
                    t.addTransition(r, n, c),
                    t.addTransition(r, r, h),
                    t.addTransition(r, e, o),
                    t.addTransition(e, u, c),
                    t.addTransition(e, n, o),
                    t.addTransition(e, r, f),
                    t.addTransition(e, e, h);
                }),
                (i.mu = function () {
                  try {
                    this.win.getSelection().removeAllRanges();
                  } catch (t) {}
                }),
                (i.tu = function (t, i) {
                  if (
                    ((1 != t.getState() && 2 != t.getState()) ||
                      (this.Qi.purge(function (i) {
                        return i.resource == t;
                      }),
                      this._o.purge(function (i) {
                        return i.resource == t;
                      }),
                      q(this.Co, function (i) {
                        return i.resource === t;
                      })),
                    0 == t.getState() && i && this.Do)
                  ) {
                    var n = this.Do.indexOf(t);
                    -1 != n && this.Do.splice(n, 1);
                  }
                }),
                (i.Wo = function (t) {
                  var i = t.target;
                  if (
                    i.nodeType === Node.ELEMENT_NODE &&
                    i !== this.ws.getScrollingElement()
                  ) {
                    var n = i;
                    this.Go.includes(n) ||
                      (this.Go.push(n), this.schedulePass(70));
                  }
                }),
                t
              );
            })();
          function Ih(t) {
            return t.hasAttribute("hidden");
          }
          var Mh = "STANDARD-ACTIONS",
            Th = /^i-fohtml-/,
            Sh = (function () {
              function t(t) {
                this.fodoc = t;
                var i = t.getHeadNode();
                (this.pu = Kn(t)), (this.ws = or(t)), this.bu(Un(i)), this.gu();
              }
              var i = t.prototype;
              return (
                (i.bu = function (t) {
                  t.addGlobalTarget("fo", this.yu.bind(this)),
                    t.addGlobalMethodHandler("hide", this.wu.bind(this)),
                    t.addGlobalMethodHandler("show", this.Au.bind(this)),
                    t.addGlobalMethodHandler(
                      "toggleVisibility",
                      this.Eu.bind(this)
                    ),
                    t.addGlobalMethodHandler("scrollTo", this.xu.bind(this)),
                    t.addGlobalMethodHandler("focus", this.Ou.bind(this)),
                    t.addGlobalMethodHandler("toggleClass", this.Tu.bind(this)),
                    t.addGlobalMethodHandler("toggleChecked", this.Iu.bind(this));
                }),
                (i.gu = function () {
                  this.Pu() &&
                    this.fodoc.waitForBodyOpen().then(function (t) {
                      var i =
                        t.getAttribute("data-prefers-dark-mode-class") ||
                        "fo-dark-mode";
                      t.classList.add(i);
                    });
                }),
                (i.Pu = function () {
                  var t, i;
                  try {
                    var n = this.fodoc.win.localStorage.getItem("fo-dark-mode");
                    if (n) return "yes" === n;
                  } catch (t) {}
                  return null === (t = (i = this.fodoc.win).matchMedia) ||
                    void 0 === t
                    ? void 0
                    : t.call(i, "(prefers-color-scheme: dark)").matches;
                }),
                (i.yu = function (t) {
                  if (!t.satisfiesTrust(2)) return null;
                  var i = t.args,
                    n = t.method,
                    r = t.node,
                    e = Zt(r);
                  switch (n) {
                    case "pushState":
                    case "setState":
                      var s =
                        r.nodeType === Node.DOCUMENT_NODE ? r.documentElement : r;
                      return Vn(s).then(function (i) {
                        return $t(i, "fo-BIND is not installed."), i.invoke(t);
                      });
                    case "navigateTo":
                      return this.Su(t);
                    case "closeOrNavigateTo":
                      return this.Mu(t);
                    case "scrollTo":
                      return (
                        $t(i.id, "fo.scrollTo must provide element ID"),
                        (t.node = En(r).getElementById(i.id)),
                        this.xu(t)
                      );
                    case "goBack":
                      return (
                        Wn(this.fodoc).goBack(!(!i || !0 !== i.navigate)), null
                      );
                    case "print":
                      return e.print(), null;
                    case "optoutOfCid":
                      return Fn(this.fodoc)
                        .then(function (t) {
                          return t.optOut();
                        })
                        .catch(function (t) {
                          qt().error(Mh, "Failed to opt out of CID", t);
                        });
                    case "toggleTheme":
                      return this.ku(), null;
                  }
                  throw Vt().createError("Unknown fo action ", n);
                }),
                (i.Su = function (t) {
                  var i = this,
                    n = t.args,
                    r = t.caller,
                    e = t.method,
                    s = Zt(t.node),
                    u = h();
                  return (
                    r.tagName.startsWith("fo-") &&
                      (u = r.getImpl().then(function (t) {
                        "function" == typeof t.throwIfCannotNavigate &&
                          t.throwIfCannotNavigate();
                      })),
                    u.then(
                      function () {
                        var t;
                        ((t = i.fodoc), pn(t, "navigation")).navigateTo(
                          s,
                          n.url,
                          "fo.".concat(e),
                          { target: n.target, opener: n.opener }
                        );
                      },
                      function (t) {
                        Vt().error(Mh, t);
                      }
                    )
                  );
                }),
                (i.ku = function () {
                  var t = this;
                  this.fodoc.waitForBodyOpen().then(function (i) {
                    try {
                      var n =
                        i.getAttribute("data-prefers-dark-mode-class") ||
                        "fo-dark-mode";
                      t.Pu()
                        ? (i.classList.remove(n),
                          t.fodoc.win.localStorage.setItem(
                            "fo-dark-mode",
                            "no"
                          ))
                        : (i.classList.add(n),
                          t.fodoc.win.localStorage.setItem(
                            "fo-dark-mode",
                            "yes"
                          ));
                    } catch (t) {}
                  });
                }),
                (i.Mu = function (t) {
                  var i = Zt(t.node),
                    n = i.parent != i,
                    r = !1;
                  return (
                    i.opener &&
                      this.fodoc.isSingleDoc() &&
                      !n &&
                      (i.close(), (r = i.closed)),
                    r ? h() : this.Su(t)
                  );
                }),
                (i.xu = function (t) {
                  var i = t.node,
                    n = t.args,
                    r = n && n.position,
                    e = n && n.duration;
                  return (
                    r && !["top", "bottom", "center"].includes(r) && (r = void 0),
                    J(e) || (e = void 0),
                    this.ws.animateScrollIntoView(i, r, e)
                  );
                }),
                (i.Ou = function (t) {
                  return Pi(t.node), null;
                }),
                (i.wu = function (t) {
                  var i = t.node;
                  if (i.classList.contains("i-fohtml-element")) {
                    var n = i;
                    this.pu.mutateElement(
                      n,
                      function () {
                        return n.collapse();
                      },
                      !0
                    );
                  } else
                    this.pu.mutateElement(i, function () {
                      return Er(i, !1);
                    });
                  return null;
                }),
                (i.Au = function (t) {
                  var i = this,
                    n = t.node,
                    r = Zt(n);
                  if (n.classList.contains(Zr(Vr)))
                    return (
                      Vt().warn(
                        Mh,
                        "Elements with layout=nodisplay cannot be dynamically shown.",
                        n
                      ),
                      null
                    );
                  this.pu.measureElement(function () {
                    "none" != Or(r, n).display ||
                      Ih(n) ||
                      Vt().warn(
                        Mh,
                        'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.',
                        n
                      );
                  });
                  var e,
                    s = (e = n).hasAttribute("autofocus")
                      ? e
                      : e.querySelector("[autofocus]");
                  return (
                    s && Xn(r).isIos()
                      ? (this._u(n, s), this.pu.mutateElement(n, function () {}))
                      : this.pu.mutateElement(n, function () {
                          i._u(n, s);
                        }),
                    null
                  );
                }),
                (i._u = function (t, i) {
                  t.classList.contains("i-fohtml-element")
                    ? t.expand()
                    : Er(t, !0),
                    i && Pi(i);
                }),
                (i.Eu = function (t) {
                  return Ih(t.node) ? this.Au(t) : this.wu(t);
                }),
                (i.Tu = function (t) {
                  var i = t.node,
                    n = t.args,
                    r = Vt().assertString(
                      n.class,
                      "Argument 'class' must be a string."
                    );
                  return (
                    Th.test(r) ||
                      this.pu.mutateElement(i, function () {
                        if (void 0 !== n.force) {
                          var t = Vt().assertBoolean(
                            n.force,
                            "Optional argument 'force' must be a boolean."
                          );
                          i.classList.toggle(r, t);
                        } else i.classList.toggle(r);
                      }),
                    null
                  );
                }),
                (i.Iu = function (t) {
                  var i = t.node,
                    n = t.args;
                  return (
                    this.pu.mutateElement(i, function () {
                      if (void 0 !== n.force) {
                        var t = Vt().assertBoolean(
                          n.force,
                          "Optional argument 'force' must be a boolean."
                        );
                        i.checked = t;
                      } else !0 === i.checked ? (i.checked = !1) : (i.checked = !0);
                    }),
                    null
                  );
                }),
                t
              );
            })(),
            _h = "Storage",
            kh = (function () {
              function t(t, i, n) {
                (this.fodoc = t),
                  (this.ne = i),
                  (this.Me = n),
                  (this.Ru = n instanceof Nh),
                  (this.i = bs(this.fodoc.win.location)),
                  (this.Nu = null);
              }
              var i = t.prototype;
              return (
                (i.Cu = function () {
                  return this.Du(), this;
                }),
                (i.get = function (t, i) {
                  return this.ju().then(function (n) {
                    return n.get(t, i);
                  });
                }),
                (i.set = function (t, i, n) {
                  return Bt("boolean" == typeof i), this.setNonBoolean(t, i, n);
                }),
                (i.setNonBoolean = function (t, i, n) {
                  return this.zu(function (r) {
                    return r.set(t, i, n);
                  });
                }),
                (i.remove = function (t) {
                  return this.zu(function (i) {
                    return i.remove(t);
                  });
                }),
                (i.isViewerStorage = function () {
                  return this.Ru;
                }),
                (i.ju = function () {
                  return (
                    this.Nu ||
                      (this.Nu = this.Me.loadBlob(this.i)
                        .then(function (t) {
                          return t ? at(atob(t)) : {};
                        })
                        .catch(function (t) {
                          return (
                            qt().expectedError(_h, "Failed to load store: ", t),
                            {}
                          );
                        })
                        .then(function (t) {
                          return new Rh(t);
                        })),
                    this.Nu
                  );
                }),
                (i.zu = function (t) {
                  var i = this;
                  return this.ju()
                    .then(function (n) {
                      t(n);
                      var r = btoa(JSON.stringify(n.obj));
                      return i.Me.saveBlob(i.i, r);
                    })
                    .then(this.Lu.bind(this));
                }),
                (i.Du = function () {
                  var t = this;
                  this.ne.onBroadcast(function (i) {
                    "fo-storage-reset" == i.type &&
                      i.origin == t.i &&
                      (qt().fine(_h, "Received reset message"), (t.Nu = null));
                  });
                }),
                (i.Lu = function () {
                  qt().fine(_h, "Broadcasted reset message"),
                    this.ne.broadcast({
                      type: "fo-storage-reset",
                      origin: this.i,
                    });
                }),
                t
              );
            })(),
            Rh = (function () {
              function t(t, i) {
                (this.obj = x(t)),
                  (this.Uu = i || 8),
                  (this.Hu = this.obj.vv || Object.create(null)),
                  this.obj.vv || (this.obj.vv = this.Hu);
              }
              var i = t.prototype;
              return (
                (i.get = function (t, i) {
                  var n = this.Hu[t],
                    r = n ? n.t : void 0,
                    e = !i || null == r || r + i > Date.now();
                  return n && e ? n.v : void 0;
                }),
                (i.set = function (t, i, n) {
                  if (
                    (Bt("__proto__" != t && "prototype" != t),
                    void 0 !== this.Hu[t])
                  ) {
                    var r = this.Hu[t],
                      e = Date.now();
                    n && (e = r.t), (r.v = i), (r.t = e);
                  } else this.Hu[t] = { v: i, t: Date.now() };
                  var s = Object.keys(this.Hu);
                  if (s.length > this.Uu) {
                    for (var u = 1 / 0, o = null, h = 0; h < s.length; h++) {
                      var a = this.Hu[s[h]];
                      a.t < u && ((o = s[h]), (u = a.t));
                    }
                    o && delete this.Hu[o];
                  }
                }),
                (i.remove = function (t) {
                  delete this.Hu[t];
                }),
                t
              );
            })(),
            Ch = (function () {
              function t(t) {
                if (((this.win = t), (this.Gu = this.Vu()), !this.Gu)) {
                  var i = new Error("localStorage not supported.");
                  qt().expectedError(_h, i);
                }
              }
              var i = t.prototype;
              return (
                (i.Vu = function () {
                  try {
                    return (
                      "localStorage" in this.win &&
                      (this.win.localStorage.getItem("test"), !0)
                    );
                  } catch (t) {
                    return !1;
                  }
                }),
                (i.Fu = function (t) {
                  return "fo-store:".concat(t);
                }),
                (i.loadBlob = function (t) {
                  var i = this;
                  return new Promise(function (n) {
                    i.Gu ? n(i.win.localStorage.getItem(i.Fu(t))) : n(null);
                  });
                }),
                (i.saveBlob = function (t, i) {
                  var n = this;
                  return new Promise(function (r) {
                    n.Gu ? (n.win.localStorage.setItem(n.Fu(t), i), r()) : r();
                  });
                }),
                t
              );
            })(),
            Nh = (function () {
              function t(t) {
                this.ne = t;
              }
              var i = t.prototype;
              return (
                (i.loadBlob = function (t) {
                  return this.ne
                    .sendMessageAwaitResponse("loadStore", { origin: t })
                    .then(function (t) {
                      return t.blob;
                    });
                }),
                (i.saveBlob = function (t, i) {
                  return this.ne
                    .sendMessageAwaitResponse("saveStore", { origin: t, blob: i })
                    .catch(function (t) {
                      throw qt().createExpectedError(
                        _h,
                        "Failed to save store: ",
                        t
                      );
                    });
                }),
                t
              );
            })(),
            Dh = "__fo_IMPL_",
            jh = function () {},
            Uh = (function () {
              function t(t) {
                (this.Ui = t), (this.Bu = {}), (this.qu = {});
              }
              var i = t.prototype;
              return (
                (i.whenReady = function (t) {
                  return this.$u(t).then(jh);
                }),
                (i.setHtmlForTemplate = function (t, i) {
                  var n = this;
                  return this.$u(t).then(function (t) {
                    return n.Wu(t, i);
                  });
                }),
                (i.renderTemplate = function (t, i) {
                  var n = this;
                  return this.$u(t).then(function (t) {
                    return n.Ku(t, i);
                  });
                }),
                (i.renderTemplateAsString = function (t, i) {
                  return this.$u(t).then(function (t) {
                    return t.renderAsString(i);
                  });
                }),
                (i.renderTemplateArray = function (t, i) {
                  var n = this;
                  return 0 == i.length
                    ? Promise.resolve([])
                    : this.$u(t).then(function (t) {
                        return i.map(function (i) {
                          return n.Ku(t, i);
                        });
                      });
                }),
                (i.findAndRenderTemplate = function (t, i, n) {
                  return this.renderTemplate(this.findTemplate(t, n), i);
                }),
                (i.findAndSetHtmlForTemplate = function (t, i, n) {
                  return this.setHtmlForTemplate(this.findTemplate(t, n), i);
                }),
                (i.findAndRenderTemplateArray = function (t, i, n) {
                  return this.renderTemplateArray(this.findTemplate(t, n), i);
                }),
                (i.hasTemplate = function (t, i) {
                  return !!this.maybeFindTemplate(t, i);
                }),
                (i.findTemplate = function (t, i) {
                  var n = this.maybeFindTemplate(t, i);
                  $t(n, "Template not found for %s", t);
                  var r = n.tagName;
                  return (
                    $t(
                      "TEMPLATE" == r ||
                        ("SCRIPT" == r &&
                          "text/plain" === n.getAttribute("type")),
                      'Template must be defined in a <template> or <script type="text/plain"> tag'
                    ),
                    n
                  );
                }),
                (i.maybeFindTemplate = function (t, i) {
                  var n = t.getAttribute("template");
                  return n
                    ? xi(t).getElementById(n)
                    : i
                    ? hi(t, i)
                    : t.querySelector(
                        'template[type], script[type="text/plain"]'
                      );
                }),
                (i.$u = function (t) {
                  var i = this,
                    n = t[Dh];
                  if (n) return Promise.resolve(n);
                  var r = "",
                    e = t.tagName;
                  "TEMPLATE" == e
                    ? (r = t.getAttribute("type"))
                    : "SCRIPT" == e && (r = t.getAttribute("template")),
                    $t(r, "Type must be specified: %s", t);
                  var s = t.__fo_WAIT_;
                  return (
                    s ||
                    ((s = this.Yu(t, r).then(function (n) {
                      var r = n,
                        e = (t[Dh] = new r(t, i.Ui.win));
                      return delete t.__fo_WAIT_, e;
                    })),
                    (t.__fo_WAIT_ = s),
                    s)
                  );
                }),
                (i.Yu = function (t, i) {
                  if (this.Bu[i]) return this.Bu[i];
                  var n = new a(),
                    r = n.promise,
                    e = n.resolve;
                  return (this.Bu[i] = r), (this.qu[i] = e), r;
                }),
                (i.Ju = function (t, i) {
                  if (this.Bu[t]) {
                    var n = this.qu[t];
                    $t(n, "Duplicate template type: %s", t),
                      delete this.qu[t],
                      n(i);
                  } else this.Bu[t] = Promise.resolve(i);
                }),
                (i.Ku = function (t, i) {
                  return t.render(i);
                }),
                (i.Wu = function (t, i) {
                  return t.setHtml(i);
                }),
                t
              );
            })(),
            Lh = (function () {
              function t(t) {
                (this.win = t),
                  (this.Xu = this.win.Promise.resolve()),
                  (this.Qu = 0),
                  (this.Zu = {}),
                  (this.th = Date.now());
              }
              var i = t.prototype;
              return (
                (i.timeSinceStart = function () {
                  return Date.now() - this.th;
                }),
                (i.delay = function (t, i) {
                  var n = this;
                  if (!i) {
                    var r = "p" + this.Qu++;
                    return (
                      this.Xu.then(function () {
                        n.Zu[r] ? delete n.Zu[r] : t();
                      }).catch(Ps),
                      r
                    );
                  }
                  return this.win.setTimeout(function () {
                    try {
                      t();
                    } catch (t) {
                      throw (Ps(t), t);
                    }
                  }, i);
                }),
                (i.cancel = function (t) {
                  "string" != typeof t
                    ? this.win.clearTimeout(t)
                    : (this.Zu[t] = !0);
                }),
                (i.promise = function (t) {
                  var i = this;
                  return new this.win.Promise(function (n) {
                    if (-1 == i.delay(n, t))
                      throw new Error("Failed to schedule timer.");
                  });
                }),
                (i.timeoutPromise = function (t, i, n) {
                  var r,
                    e = this,
                    s = new this.win.Promise(function (i, s) {
                      if (
                        -1 ==
                        (r = e.delay(function () {
                          s(Vt().createError(n || "timeout"));
                        }, t))
                      )
                        throw new Error("Failed to schedule timer.");
                    });
                  if (!i) return s;
                  var u = function () {
                    e.cancel(r);
                  };
                  return i.then(u, u), this.win.Promise.race([s, i]);
                }),
                (i.poll = function (t, i) {
                  var n = this;
                  return new this.win.Promise(function (r) {
                    var e = n.win.setInterval(function () {
                      i() && (n.win.clearInterval(e), r());
                    }, t);
                  });
                }),
                t
              );
            })();
          function zh(t) {
            vn(t, "timer", Lh);
          }
          var Hh = (function () {
              function t(t) {
                var i = t.getRootNode(),
                  n = i.ownerDocument || i;
                (this.ih = n.createElement("a")), (this.di = new Qe(100));
              }
              var i = t.prototype;
              return (
                (i.parse = function (t, i) {
                  return es(this.ih, t, i ? null : this.di);
                }),
                (i.nh = function (t) {
                  return "string" != typeof t ? t : this.parse(t);
                }),
                (i.isProtocolValid = function (t) {
                  return vs(t);
                }),
                (i.getSourceOrigin = function (t) {
                  return bs(this.nh(t));
                }),
                (i.getSourceUrl = function (t) {
                  return ps(this.nh(t));
                }),
                (i.resolveRelativeUrl = function (t, i) {
                  return gs(t, this.nh(i));
                }),
                (i.assertHttpsUrl = function (t, i) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "source";
                  return fs(t, i, n);
                }),
                (i.assertAbsoluteHttpOrHttpsUrl = function (t) {
                  return (function (t) {
                    return (
                      $t(
                        /^https?\:/i.test(t),
                        'URL must start with "http://" or "https://". Invalid value: %s',
                        t
                      ),
                      rs(t).href
                    );
                  })(t);
                }),
                (i.isProxyOrigin = function (t) {
                  return ls(this.nh(t));
                }),
                (i.isSecure = function (t) {
                  return as(this.nh(t));
                }),
                (i.getWinOrigin = function (t) {
                  return t.origin || this.nh(t.location.href).origin;
                }),
                (i.getCdnUrlOnOrigin = function (t) {
                  if (ls(t)) return t;
                  var i = this.nh(t),
                    n = i.hash,
                    r = i.host,
                    e = i.pathname,
                    s = i.search,
                    u = encodeURIComponent(r);
                  return ""
                    .concat(Ot.cdn, "/c/")
                    .concat(u)
                    .concat(e)
                    .concat(s)
                    .concat(n);
                }),
                t
              );
            })(),
            Gh = "Expander",
            Vh = (function () {
              function t(t, i, n, r, e, s) {
                (this.rh = t),
                  (this.eh = i),
                  (this.sh = n),
                  (this.oh = r),
                  (this.zr = e),
                  (this.uh = !s);
              }
              var i = t.prototype;
              return (
                (i.expand = function (t) {
                  if (!t.length) return this.oh ? t : Promise.resolve(t);
                  var i = this.rh.getExpr(this.eh, this.zr),
                    n = this.hh(t, i);
                  return n.length
                    ? this.ah(t, n)
                    : this.oh
                    ? t
                    : Promise.resolve(t);
                }),
                (i.getMacroNames = function (t) {
                  var i = this.rh.getExpr(this.eh, this.zr);
                  return t.match(i) || [];
                }),
                (i.hh = function (t, i) {
                  var n = [];
                  return (
                    t.replace(i, function (t, i, r) {
                      var e = t.length,
                        s = { start: r, stop: e + r - 1, name: i, length: e };
                      n.push(s);
                    }),
                    n
                  );
                }),
                (i.ah = function (t, i) {
                  var n = this,
                    r = [],
                    e = 0,
                    s = 0,
                    u = i[s],
                    o = 0,
                    h = !1;
                  return (function a(f) {
                    for (
                      var c, l = "", v = [], m = [];
                      e < t.length && s <= i.length;
  
                    ) {
                      var p,
                        b = l.trim();
                      if (u && e === u.start)
                        b &&
                          v.push(
                            o
                              ? (c = l).trimStart
                                ? c.trimStart()
                                : (c + "_").trim().slice(0, -1)
                              : l
                          ),
                          (p =
                            n.eh && E(n.eh, u.name)
                              ? {
                                  name: u.name,
                                  prioritized: n.eh[u.name],
                                  encode: f,
                                }
                              : D(
                                  D({}, n.rh.get(u.name)),
                                  {},
                                  { name: u.name, encode: f }
                                )),
                          (e = u.stop + 1),
                          (u = i[++s]),
                          "(" === t[e]
                            ? (e++, o++, r.push(p), v.push(a(!1)))
                            : v.push(n.fh(p)),
                          (l = "");
                      else if ("`" === t[e])
                        h
                          ? ((h = !1), l.length && v.push(l))
                          : ((h = !0), b && v.push(b)),
                          (l = ""),
                          e++;
                      else if (o && "," === t[e] && !h)
                        b && v.push(b),
                          m.push(v),
                          (v = []),
                          "," === t[e + 1] && (m.push([""]), e++),
                          (l = ""),
                          e++;
                      else {
                        if (o && ")" === t[e] && !h) {
                          e++, o--;
                          var g = r.pop();
                          return b && v.push(b), m.push(v), n.fh(g, m);
                        }
                        (l += t[e]), e++;
                      }
                      e === t.length && l.length && v.push(l);
                    }
                    return n.oh
                      ? v.join("")
                      : Promise.all(v)
                          .then(function (t) {
                            return t.join("");
                          })
                          .catch(function (t) {
                            return d(t), "";
                          });
                  })(this.uh);
                }),
                (i.fh = function (t, i) {
                  var n,
                    r = t.encode,
                    e = t.name;
                  if (
                    (null != t.prioritized
                      ? (n = t.prioritized)
                      : this.oh && null != t.sync
                      ? (n = t.sync)
                      : this.oh
                      ? (Vt().error(
                          Gh,
                          "ignoring async replacement key: ",
                          t.name
                        ),
                        (n = ""))
                      : (n = t.async || t.sync),
                    this.oh)
                  ) {
                    var s = this.lh(n, e, i);
                    return r ? encodeURIComponent(s) : s;
                  }
                  return this.dh(n, e, i).then(function (t) {
                    return r ? encodeURIComponent(t) : t;
                  });
                }),
                (i.dh = function (t, i, n) {
                  var r,
                    e = this;
                  try {
                    if ("function" == typeof t) {
                      var s = t;
                      r = n
                        ? this.mh(n).then(function (t) {
                            return s.apply(null, t);
                          })
                        : f(s);
                    } else r = Promise.resolve(t);
                    return r
                      .then(function (t) {
                        return e.ph(i, t, n), null == t ? "" : t;
                      })
                      .catch(function (t) {
                        return d(t), e.ph(i, "", n), Promise.resolve("");
                      });
                  } catch (t) {
                    return d(t), this.ph(i, "", n), Promise.resolve("");
                  }
                }),
                (i.mh = function (t) {
                  return Promise.all(
                    t.map(function (t) {
                      return Promise.all(t).then(function (t) {
                        return t.join("");
                      });
                    })
                  );
                }),
                (i.lh = function (t, i, n) {
                  try {
                    var r,
                      e = t;
                    return (
                      "function" == typeof t && (e = t.apply(null, this.bh(n))),
                      e && "function" == typeof e.then
                        ? (Vt().error(Gh, "ignoring async macro resolution"),
                          (r = ""))
                        : "string" == typeof e ||
                          "number" == typeof e ||
                          "boolean" == typeof e
                        ? (this.ph(i, e, n), (r = e.toString()))
                        : (this.ph(i, "", n), (r = "")),
                      r
                    );
                  } catch (t) {
                    return d(t), this.ph(i, "", n), "";
                  }
                }),
                (i.bh = function (t) {
                  return t
                    ? t.map(function (t) {
                        return t.join("");
                      })
                    : t;
                }),
                (i.ph = function (t, i, n) {
                  if (this.sh) {
                    var r = "";
                    if (n) {
                      var e = n
                        .filter(function (t) {
                          return "" !== t;
                        })
                        .join(",");
                      r = "(".concat(e, ")");
                    }
                    this.sh["".concat(t).concat(r)] = i || "";
                  }
                }),
                t
              );
            })(),
            Fh = {
              navigationStart: 1,
              redirectStart: 1,
              redirectEnd: 1,
              fetchStart: 1,
              domainLookupStart: 1,
              domainLookupEnd: 1,
              connectStart: 1,
              secureConnectionStart: 1,
              connectEnd: 1,
              requestStart: 1,
              responseStart: 1,
              responseEnd: 1,
              domLoading: 2,
              domInteractive: 2,
              domContentLoaded: 2,
              domComplete: 2,
              loadEventStart: 3,
              loadEventEnd: 4,
            };
          function qh(t, i, n) {
            var r,
              e = Fh[i] || 3,
              s = n ? Fh[n] || 3 : e,
              u = Math.max(e, s);
            if (1 === u) r = h();
            else if (2 === u) r = un(t.document);
            else if (3 === u) r = He(t);
            else if (4 === u) {
              var o = ir(t);
              r = He(t).then(function () {
                return o.promise(1);
              });
            }
            return (
              Bt(r),
              r.then(function () {
                return Bh(t, i, n);
              })
            );
          }
          function Bh(t, i, n) {
            var r = t.performance && t.performance.timing;
            if (r && 0 != r.navigationStart) {
              var e = void 0 === n ? r[i] : r[n] - r[i];
              return !J(e) || e < 0 ? void 0 : e;
            }
          }
          function $h(t, i) {
            var n = t.performance && t.performance.navigation;
            if (n && void 0 !== n[i]) return n[i];
          }
          var Wh = "UrlReplacements";
          function Yh(t) {
            return function () {
              return new Date()[t]();
            };
          }
          function Kh(t, i) {
            return function () {
              return t[i];
            };
          }
          function Jh(t, i) {
            return i
              ? ($t(
                  "ISOCountry" === i,
                  "The value passed to fo_GEO() is not valid name:" + i
                ),
                (t && t[i]) || "unknown")
              : (null == t ? void 0 : t.matchedISOCountryGroups.join(",")) ||
                  "unknown";
          }
          var Xh = (function (t) {
              U(n, t);
              var i = H(n);
              function n(t) {
                var n;
                return ((n = i.call(this, t)).gh = null), n;
              }
              var r = n.prototype;
              return (
                (r.yh = function (t, i, n) {
                  var r = this;
                  return this.setBoth(
                    t,
                    function () {
                      return Bh(r.fodoc.win, i, n);
                    },
                    function () {
                      return qh(r.fodoc.win, i, n);
                    }
                  );
                }),
                (r.initialize = function () {
                  var t = this,
                    i = this.fodoc.win,
                    n = this.fodoc.getHeadNode(),
                    r = or(this.fodoc);
                  rr(this.fodoc).then(function (i) {
                    t.gh = i;
                  }),
                    this.set("RANDOM", function () {
                      return Math.random();
                    });
                  var e = Object.create(null);
                  this.set("COUNTER", function (t) {
                    return (e[t] = 1 + (0 | e[t]));
                  }),
                    this.set("CANONICAL_URL", function () {
                      return t.wh().canonicalUrl;
                    }),
                    this.set("CANONICAL_HOST", function () {
                      return rs(t.wh().canonicalUrl).host;
                    }),
                    this.set("CANONICAL_HOSTNAME", function () {
                      return rs(t.wh().canonicalUrl).hostname;
                    }),
                    this.set("CANONICAL_PATH", function () {
                      return rs(t.wh().canonicalUrl).pathname;
                    }),
                    this.setAsync("DOCUMENT_REFERRER", function () {
                      return sr(t.fodoc).getReferrerUrl();
                    }),
                    this.setAsync("EXTERNAL_REFERRER", function () {
                      return sr(t.fodoc)
                        .getReferrerUrl()
                        .then(function (t) {
                          return t
                            ? rs(ps(t)).hostname === _r.getHostname(i)
                              ? null
                              : t
                            : null;
                        });
                    }),
                    this.set("TITLE", function () {
                      var t = i.document;
                      return t.originalTitle || t.title;
                    }),
                    this.set("foDOC_URL", function () {
                      return cs(t.Ah(i.location.href));
                    }),
                    this.set("foDOC_HOST", function () {
                      var t = rs(i.location.href);
                      return t && t.host;
                    }),
                    this.set("foDOC_HOSTNAME", function () {
                      var t = rs(i.location.href);
                      return t && t.hostname;
                    });
                  var s = function () {
                    var i = t.wh();
                    return cs(t.Ah(i.sourceUrl));
                  };
                  this.setBoth(
                    "SOURCE_URL",
                    function () {
                      return s();
                    },
                    function () {
                      return hh().then(function () {
                        return s();
                      });
                    }
                  ),
                    this.set("SOURCE_HOST", function () {
                      return rs(t.wh().sourceUrl).host;
                    }),
                    this.set("SOURCE_HOSTNAME", function () {
                      return rs(t.wh().sourceUrl).hostname;
                    }),
                    this.set("SOURCE_PATH", function () {
                      return rs(t.wh().sourceUrl).pathname;
                    }),
                    this.set("PAGE_VIEW_ID", function () {
                      return t.wh().pageViewId;
                    }),
                    this.setAsync("PAGE_VIEW_ID_64", function () {
                      return t.wh().pageViewId64;
                    }),
                    this.setBoth(
                      "QUERY_PARAM",
                      function (i) {
                        var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                        return t.Eh(i, n);
                      },
                      function (i) {
                        var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                        return hh().then(function () {
                          return t.Eh(i, n);
                        });
                      }
                    ),
                    this.set("FRAGMENT_PARAM", function (i) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "";
                      return t.xh(i, n);
                    });
                  var u = null;
                  this.setBoth(
                    "CLIENT_ID",
                    function (t) {
                      return u ? u[t] : null;
                    },
                    function (i, r, e, s) {
                      $t(
                        i,
                        "The first argument to CLIENT_ID, the fallback Cookie name, is required"
                      );
                      var o = h();
                      return (
                        r &&
                          (o = (function (t) {
                            return Rn(
                              t,
                              "userNotificationManager",
                              "fo-user-notification"
                            );
                          })(n).then(function (t) {
                            return t.get(r);
                          })),
                        Fn(t.fodoc)
                          .then(function (t) {
                            return (
                              (s = "true" == s),
                              t.get(
                                {
                                  scope: i,
                                  createCookieIfNotPresent: !0,
                                  cookieName: e || void 0,
                                  disableBackup: s,
                                },
                                o
                              )
                            );
                          })
                          .then(function (t) {
                            return (
                              u || (u = Object.create(null)),
                              t &&
                                "_ga" == (e || i) &&
                                ("string" == typeof t
                                  ? (t = t.replace(/^(GA1|1)\.[\d-]+\./, ""))
                                  : qt().error(
                                      Wh,
                                      "non-string cid, what is it?",
                                      Object.keys(t)
                                    )),
                              (u[i] = t),
                              t
                            );
                          })
                      );
                    }
                  ),
                    this.setAsync("VARIANT", function (i) {
                      return t.Oh(function (t) {
                        var n = t[i];
                        return (
                          $t(
                            void 0 !== n,
                            "The value passed to VARIANT() is not a valid experiment in <fo-experiment>:" +
                              i
                          ),
                          null === n ? "none" : n
                        );
                      }, "VARIANT");
                    }),
                    this.setAsync("VARIANTS", function () {
                      return t.Oh(function (t) {
                        var i = [];
                        for (var n in t) {
                          var r = t[n];
                          i.push(n + "." + (r || "none"));
                        }
                        return i.join("!");
                      }, "VARIANTS");
                    }),
                    this.setBoth(
                      "fo_GEO",
                      function (i) {
                        return Jh(t.gh, i);
                      },
                      function (i) {
                        return t.Th(function (t) {
                          return Jh(t, i);
                        }, "fo_GEO");
                      }
                    ),
                    this.set("TIMESTfo", Yh("getTime")),
                    this.set("TIMESTfo_ISO", Yh("toISOString")),
                    this.set("TIMEZONE", Yh("getTimezoneOffset")),
                    this.set("SCROLL_HEIGHT", function () {
                      return r.getScrollHeight();
                    }),
                    this.set("SCROLL_WIDTH", function () {
                      return r.getScrollWidth();
                    }),
                    this.set("VIEWPORT_HEIGHT", function () {
                      return r.getHeight();
                    }),
                    this.set("VIEWPORT_WIDTH", function () {
                      return r.getWidth();
                    });
                  var o = i.screen;
                  this.set("SCREEN_WIDTH", Kh(o, "width")),
                    this.set("SCREEN_HEIGHT", Kh(o, "height")),
                    this.set("AVAILABLE_SCREEN_HEIGHT", Kh(o, "availHeight")),
                    this.set("AVAILABLE_SCREEN_WIDTH", Kh(o, "availWidth")),
                    this.set("SCREEN_COLOR_DEPTH", Kh(o, "colorDepth")),
                    this.set("DOCUMENT_CHARSET", function () {
                      var t = i.document;
                      return t.characterSet || t.charset;
                    }),
                    this.set("BROWSER_LANGUAGE", function () {
                      var t = i.navigator;
                      return (
                        t.language ||
                        t.userLanguage ||
                        t.browserLanguage ||
                        ""
                      ).toLowerCase();
                    }),
                    this.set("USER_AGENT", function () {
                      return i.navigator.userAgent;
                    }),
                    this.setAsync("UACH", function (t) {
                      var n, r, e;
                      return (
                        (null === (n = i.navigator) ||
                        void 0 === n ||
                        null === (r = n.userAgentData) ||
                        void 0 === r ||
                        null === (e = r.getHighEntropyValues([t])) ||
                        void 0 === e
                          ? void 0
                          : e.then(function (i) {
                              return "object" !== p(i[t])
                                ? i[t]
                                : JSON.stringify(i[t]);
                            })) || Promise.resolve("")
                      );
                    }),
                    this.yh(
                      "PAGE_LOAD_TIME",
                      "navigationStart",
                      "loadEventStart"
                    ),
                    this.yh(
                      "DOMAIN_LOOKUP_TIME",
                      "domainLookupStart",
                      "domainLookupEnd"
                    ),
                    this.yh("TCP_CONNECT_TIME", "connectStart", "connectEnd"),
                    this.yh(
                      "SERVER_RESPONSE_TIME",
                      "requestStart",
                      "responseStart"
                    ),
                    this.yh("PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd"),
                    this.yh("REDIRECT_TIME", "navigationStart", "fetchStart"),
                    this.yh(
                      "DOM_INTERACTIVE_TIME",
                      "navigationStart",
                      "domInteractive"
                    ),
                    this.yh(
                      "CONTENT_LOAD_TIME",
                      "navigationStart",
                      "domContentLoadedEventStart"
                    ),
                    this.setAsync("ACCESS_READER_ID", function () {
                      return t.Ih(function (t) {
                        return t.getAccessReaderId();
                      }, "ACCESS_READER_ID");
                    }),
                    this.setAsync("AUTHDATA", function (i) {
                      return (
                        $t(
                          i,
                          "The first argument to AUTHDATA, the field, is required"
                        ),
                        t.Ih(function (t) {
                          return t.getAuthdataField(i);
                        }, "AUTHDATA")
                      );
                    }),
                    this.setAsync("VIEWER", function () {
                      return sr(t.fodoc)
                        .getViewerOrigin()
                        .then(function (t) {
                          return null == t ? "" : t;
                        });
                    }),
                    this.setAsync("TOTAL_ENGAGED_TIME", function () {
                      return Ln(n).then(function (t) {
                        return t.getTotalEngagedTime();
                      });
                    }),
                    this.setAsync("INCREMENTAL_ENGAGED_TIME", function (t, i) {
                      return Ln(n).then(function (n) {
                        return n.getIncrementalEngagedTime(t, "false" !== i);
                      });
                    }),
                    this.set("NAV_TIMING", function (t, n) {
                      return (
                        $t(
                          t,
                          "The first argument to NAV_TIMING, the start attribute name, is required"
                        ),
                        Bh(i, t, n)
                      );
                    }),
                    this.setAsync("NAV_TIMING", function (t, n) {
                      return (
                        $t(
                          t,
                          "The first argument to NAV_TIMING, the start attribute name, is required"
                        ),
                        qh(i, t, n)
                      );
                    }),
                    this.set("NAV_TYPE", function () {
                      return $h(i, "type");
                    }),
                    this.set("NAV_REDIRECT_COUNT", function () {
                      return $h(i, "redirectCount");
                    }),
                    this.set("fo_VERSION", function () {
                      return "2201141909003";
                    }),
                    this.set("BACKGROUND_STATE", function () {
                      return t.fodoc.isVisible() ? "0" : "1";
                    }),
                    this.setAsync("VIDEO_STATE", function (i, n) {
                      return ((r = t.fodoc),
                      pn(r, "video-manager")).getVideoStateProperty(i, n);
                      var r;
                    }),
                    this.setAsync("fo_STATE", function (i) {
                      var n = t.fodoc.getRootNode(),
                        r = n.documentElement || n;
                      return Vn(r).then(function (t) {
                        return (t && t.getStateValue(i)) || "";
                      });
                    });
                }),
                (r.Ah = function (t) {
                  var i = this.wh().replaceParams;
                  return i
                    ? (function (t, i) {
                        for (
                          var n = gt(rs(t).search),
                            r = {},
                            e = Object.keys(i),
                            s = 0;
                          s < e.length;
                          s++
                        )
                          E(n, e[s]) || (r[e[s]] = i[e[s]]);
                        return os(t, r);
                      })(ds(t), i)
                    : t;
                }),
                (r.wh = function () {
                  return Bn(this.fodoc);
                }),
                (r.Ih = function (t, i) {
                  var n = this.fodoc.getHeadNode();
                  return Promise.all([Dn(n), jn(n)]).then(function (n) {
                    var r = n[0],
                      e = n[1],
                      s = r || e;
                    return s
                      ? r && e
                        ? t(e) || t(r)
                        : t(s)
                      : (Vt().error(
                          Wh,
                          "Access or subsciptions service is not installed to access: ",
                          i
                        ),
                        null);
                  });
                }),
                (r.Eh = function (t, i) {
                  $t(
                    t,
                    "The first argument to QUERY_PARAM, the query string param is required"
                  );
                  var n = gt(rs(ds(this.fodoc.win.location.href)).search),
                    r = this.wh().replaceParams;
                  return void 0 !== n[t] ? n[t] : r && void 0 !== r[t] ? r[t] : i;
                }),
                (r.xh = function (t, i) {
                  $t(
                    t,
                    "The first argument to FRAGMENT_PARAM, the fragment string param is required"
                  ),
                    $t("string" == typeof t, "param should be a string");
                  var n = yt(this.fodoc.win);
                  return void 0 === n[t] ? i : n[t];
                }),
                (r.Oh = function (t, i) {
                  return ((n = this.fodoc.getHeadNode()),
                  Cn(n, "variant", "fo-experiment", !0))
                    .then(function (t) {
                      return (
                        $t(
                          t,
                          "To use variable %s, fo-experiment should be configured",
                          i
                        ),
                        t.getVariants()
                      );
                    })
                    .then(function (i) {
                      return t(i);
                    });
                  var n;
                }),
                (r.Th = function (t, i) {
                  var n = this;
                  return null !== this.gh
                    ? t(this.gh)
                    : rr(this.fodoc.getHeadNode()).then(function (r) {
                        return (
                          $t(
                            r,
                            "To use variable %s, fo-geo should be configured",
                            i
                          ),
                          (n.gh = r),
                          t(r)
                        );
                      });
                }),
                n
              );
            })(
              (function () {
                function t(t) {
                  (this.fodoc = t),
                    (this.Ph = Object.create(null)),
                    (this.Sh = !1),
                    this.Mh();
                }
                var i = t.prototype;
                return (
                  (i.br = function () {
                    this.initialize(), (this.Sh = !0);
                  }),
                  (i.initialize = function () {}),
                  (i.get = function (t) {
                    return this.Sh || this.br(), this.Ph[t];
                  }),
                  (i.set = function (t, i) {
                    return (
                      Bt(-1 == t.indexOf("RETURN")),
                      (this.Ph[t] = this.Ph[t] || {
                        sync: void 0,
                        async: void 0,
                      }),
                      (this.Ph[t].sync = i),
                      this
                    );
                  }),
                  (i.setAsync = function (t, i) {
                    return (
                      Bt(-1 == t.indexOf("RETURN")),
                      (this.Ph[t] = this.Ph[t] || {
                        sync: void 0,
                        async: void 0,
                      }),
                      (this.Ph[t].async = i),
                      this
                    );
                  }),
                  (i.setBoth = function (t, i, n) {
                    return this.set(t, i).setAsync(t, n);
                  }),
                  (i.getExpr = function (t, i) {
                    this.Sh || this.br();
                    var n = D(D({}, this.Ph), t);
                    return this.kh(Object.keys(n), i);
                  }),
                  (i.kh = function (t, i) {
                    var n = this;
                    if (
                      (this.Mh() &&
                        (t = t.filter(function (t) {
                          return n.Mh().includes(t);
                        })),
                      i &&
                        (t = t.filter(function (t) {
                          return i[t];
                        })),
                      0 === t.length)
                    )
                      return /_^/g;
                    t.sort(function (t, i) {
                      return i.length - t.length;
                    });
                    var r = t
                      .map(function (t) {
                        return "$" === t[0] ? "\\" + t : t;
                      })
                      .join("|");
                    return new RegExp("\\$?(" + r + ")", "g");
                  }),
                  (i.Mh = function () {
                    return this._h
                      ? this._h
                      : this.fodoc.isSingleDoc() && Pu(this.fodoc.getRootNode())
                      ? ((this._h = [""]), this._h)
                      : void 0;
                  }),
                  t
                );
              })()
            ),
            Qh = (function () {
              function t(t, i) {
                (this.fodoc = t), (this.rh = i);
              }
              var i = t.prototype;
              return (
                (i.expandStringSync = function (t, i, n) {
                  return new Vh(this.rh, i, void 0, !0, n, !0).expand(t);
                }),
                (i.expandStringAsync = function (t, i, n) {
                  return new Vh(this.rh, i, void 0, void 0, n, !0).expand(t);
                }),
                (i.expandUrlSync = function (t, i, n) {
                  return this.Rh(t, new Vh(this.rh, i, void 0, !0, n).expand(t));
                }),
                (i.expandUrlAsync = function (t, i, n, r) {
                  var e = this;
                  return new Vh(this.rh, i, void 0, void 0, n, r)
                    .expand(t)
                    .then(function (i) {
                      return e.Rh(t, i);
                    });
                }),
                (i.expandInputValueAsync = function (t) {
                  return this.Nh(t, !1);
                }),
                (i.expandInputValueSync = function (t) {
                  return this.Nh(t, !0);
                }),
                (i.Nh = function (t, i) {
                  Bt(
                    "INPUT" == t.tagName &&
                      "hidden" == (t.getAttribute("type") || "").toLowerCase()
                  );
                  var n = this.Ch(t);
                  if (!n) return i ? t.value : Promise.resolve(t.value);
                  void 0 === t["fo-original-value"] &&
                    (t["fo-original-value"] = t.value);
                  var r = new Vh(this.rh, void 0, void 0, i, n).expand(
                    t["fo-original-value"] || t.value
                  );
                  return i
                    ? (t.value = r)
                    : r.then(function (i) {
                        return (t.value = i), i;
                      });
                }),
                (i.Ch = function (t, i) {
                  var n = t.getAttribute("data-fo-replace");
                  if (n) {
                    var r = {};
                    return (
                      n
                        .trim()
                        .split(/\s+/)
                        .forEach(function (t) {
                          !i || E(i, t)
                            ? (r[t] = !0)
                            : Vt().warn(
                                "URL",
                                "Ignoring unsupported replacement",
                                t
                              );
                        }),
                      r
                    );
                  }
                }),
                (i.Dh = function (t) {
                  var i = Bn(this.fodoc);
                  if (
                    t.origin == rs(i.canonicalUrl).origin ||
                    t.origin == rs(i.sourceUrl).origin
                  )
                    return !0;
                  var n = this.fodoc.getMetaByName(
                    "fo-link-variable-allowed-origin"
                  );
                  if (n)
                    for (var r = n.trim().split(/\s+/), e = 0; e < r.length; e++)
                      if (t.origin == rs(r[e]).origin) return !0;
                  return !1;
                }),
                (i.maybeExpandLink = function (t, i) {
                  Bt("A" == t.tagName);
                  var n = t,
                    r = n.getAttribute("data-fo-addparams") || "",
                    e = this.Ch(n, {
                      CLIENT_ID: !0,
                      QUERY_PARAM: !0,
                      PAGE_VIEW_ID: !0,
                      PAGE_VIEW_ID_64: !0,
                      NAV_TIMING: !0,
                    });
                  if (e || r || i) {
                    var s = n["fo-original-href"] || n.getAttribute("href"),
                      u = rs(s);
                    null == n["fo-original-href"] &&
                      (n["fo-original-href"] = s);
                    var o = this.Dh(u);
                    return (
                      r && (s = os(s, gt((r = o ? this.jh(r, e) : r)))),
                      o
                        ? (i &&
                            ((e && e.QUERY_PARAM) ||
                              (i = this.expandUrlSync(i, void 0, {
                                QUERY_PARAM: !0,
                              })),
                            (s = os(s, gt(i)))),
                          (s = this.jh(s, e)),
                          (n.href = s))
                        : (e &&
                            Vt().warn(
                              "URL",
                              "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.",
                              s
                            ),
                          (n.href = s))
                    );
                  }
                }),
                (i.jh = function (t, i) {
                  return i ? this.expandUrlSync(t, void 0, i) : t;
                }),
                (i.collectVars = function (t, i) {
                  var n = Object.create(null);
                  return new Vh(this.rh, i, n).expand(t).then(function () {
                    return n;
                  });
                }),
                (i.collectDisallowedVarsSync = function (t) {
                  var i = t.getAttribute("src"),
                    n = new Vh(this.rh).getMacroNames(i),
                    r = this.Ch(t);
                  return r
                    ? n.filter(function (t) {
                        return !r[t];
                      })
                    : n;
                }),
                (i.Rh = function (t, i) {
                  return rs(i, !0).protocol != rs(t, !0).protocol
                    ? (Vt().error(Wh, "Illegal replacement of the protocol: ", t),
                      t)
                    : ($t(
                        vs(i),
                        "The replacement url has invalid protocol: %s",
                        i
                      ),
                      i);
                }),
                (i.getVariableSource = function () {
                  return this.rh;
                }),
                t
              );
            })(),
            Zh = "Viewer",
            ta = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|fo|m)\.)+/i,
            ia = (function () {
              function t(t) {
                var i = this;
                (this.fodoc = t),
                  (this.win = t.win),
                  (this._s = Ii(this.win)),
                  (this.do = !0),
                  (this.zh = !1),
                  (this.Lh = A()),
                  (this.Uh = A()),
                  (this.Hh = new dr()),
                  (this.Gh = new dr()),
                  (this.Vh = null),
                  (this.Fh = null),
                  (this.Bh = []),
                  (this.qh = A()),
                  (this.$h = A()),
                  t.isSingleDoc() &&
                    Object.assign(this.$h, gt(this.win.location.hash)),
                  (this.do = !parseInt(t.getParam("off"), 10)),
                  qt().fine(Zh, "- runtimeOn:", this.do),
                  (this.zh = !(!parseInt(t.getParam("history"), 10) && !this.zh)),
                  qt().fine(Zh, "- history:", this.zh),
                  qt().fine(
                    Zh,
                    "- visibilityState:",
                    this.fodoc.getVisibilityState()
                  ),
                  (this.Wh = null),
                  (this.Kh = ls(rs(this.fodoc.win.location.href)));
                var n = new a();
                (this.Yh = n.resolve),
                  (this.Jh = this.Xh(n.promise)),
                  (this.Ls = null),
                  (this.Qh = null);
                var r = t.getParam("referrer");
                if (
                  ((this.Zh =
                    this.isEmbedded() && null != r && !1 !== this.ta()
                      ? r
                      : this.win.document.referrer),
                  (this.ia = new Promise(function (n) {
                    i.isEmbedded() && null != t.getParam("referrer")
                      ? i.isTrustedViewer().then(function (r) {
                          r
                            ? n(t.getParam("referrer"))
                            : (n(i.win.document.referrer),
                              i.Zh != i.win.document.referrer &&
                                (qt().expectedError(
                                  Zh,
                                  "Untrusted viewer referrer override: " +
                                    i.Zh +
                                    " at " +
                                    i.Fh
                                ),
                                (i.Zh = i.win.document.referrer)));
                        })
                      : n(i.win.document.referrer);
                  })),
                  (this.na = cs(this.win.location.href || "")),
                  (this.ra = new Promise(function (n) {
                    var r = t.getParam("viewerUrl");
                    i.isEmbedded() && r
                      ? i.isTrustedViewer().then(function (t) {
                          t
                            ? (i.na = Bt(r))
                            : qt().expectedError(
                                Zh,
                                "Untrusted viewer url override: " +
                                  r +
                                  " at " +
                                  i.Fh
                              ),
                            n(i.na);
                        })
                      : n(i.na);
                  })),
                  this.$h.click)
                ) {
                  var e = cs(this.win.location.href);
                  e != this.win.location.href &&
                    this.win.history.replaceState &&
                    (this.win.location.originalHash ||
                      (this.win.location.originalHash = this.win.location.hash),
                    this.win.history.replaceState({}, "", e),
                    delete this.$h.click,
                    qt().fine(Zh, "replace fragment:" + this.win.location.href));
                }
                this.fodoc.whenFirstVisible().then(function () {
                  i.maybeUpdateFragmentForCct();
                }),
                  this.fodoc.isSingleDoc() && this.ea();
              }
              var i = t.prototype;
              return (
                (i.Xh = function (t) {
                  if (
                    !(
                      (this._s &&
                        !this.win.__fo_TEST_IFRAME &&
                        (this.fodoc.getParam("origin") ||
                          this.fodoc.getParam("visibilityState") ||
                          -1 != this.win.location.search.indexOf("fo_js_v"))) ||
                      this.isWebviewEmbedded() ||
                      this.isCctEmbedded()
                    ) &&
                    this.fodoc.isSingleDoc()
                  )
                    return null;
                  var i = "initMessagingChannel timeout";
                  return ir(this.win)
                    .timeoutPromise(2e4, t, i)
                    .catch(function (t) {
                      var n = na(t);
                      throw (
                        (n &&
                          W(n.message, i) &&
                          (n = qt().createExpectedError(n)),
                        Ps(n),
                        n)
                      );
                    });
                }),
                (i.getfoDoc = function () {
                  return this.fodoc;
                }),
                (i.getParam = function (t) {
                  return this.fodoc.getParam(t);
                }),
                (i.hasCapability = function (t) {
                  var i = this.fodoc.getParam("cap");
                  return !!i && -1 != i.split(",").indexOf(t);
                }),
                (i.isEmbedded = function () {
                  return !!this.Jh;
                }),
                (i.isWebviewEmbedded = function () {
                  return !this._s && "1" == this.fodoc.getParam("webview");
                }),
                (i.isCctEmbedded = function () {
                  if (null != this.Wh) return this.Wh;
                  if (((this.Wh = !1), !this._s)) {
                    var t = gt(this.win.location.search);
                    this.Wh =
                      "1" === t.fo_gsa && (t.fo_js_v || "").startsWith("a");
                  }
                  return this.Wh;
                }),
                (i.isProxyOrigin = function () {
                  return this.Kh;
                }),
                (i.maybeUpdateFragmentForCct = function () {
                  if (this.isCctEmbedded() && this.win.history.replaceState) {
                    var t = bs(this.win.location.href),
                      i = Bn(this.fodoc).canonicalUrl,
                      n = bs(i);
                    this.sa(t, n) &&
                      ((this.$h.foshare = i),
                      this.win.history.replaceState({}, "", "#" + hs(this.$h)));
                  }
                }),
                (i.sa = function (t, i) {
                  var n = function (t) {
                    return t.split(".").length > 2 ? t.replace(ta, "$1") : t;
                  };
                  return n(t) == n(i);
                }),
                (i.isRuntimeOn = function () {
                  return this.do;
                }),
                (i.toggleRuntime = function () {
                  (this.do = !this.do),
                    qt().fine(Zh, "Runtime state:", this.do),
                    this.Hh.fire(this.do);
                }),
                (i.onRuntimeState = function (t) {
                  return this.Hh.add(t);
                }),
                (i.isOvertakeHistory = function () {
                  return this.zh;
                }),
                (i.getVisibilityState = function () {
                  return this.fodoc.getVisibilityState();
                }),
                (i.isVisible = function () {
                  return this.fodoc.isVisible();
                }),
                (i.hasBeenVisible = function () {
                  return this.fodoc.hasBeenVisible();
                }),
                (i.whenFirstVisible = function () {
                  return this.fodoc.whenFirstVisible();
                }),
                (i.whenNextVisible = function () {
                  return this.fodoc.whenNextVisible();
                }),
                (i.getFirstVisibleTime = function () {
                  return this.fodoc.getFirstVisibleTime();
                }),
                (i.getLastVisibleTime = function () {
                  return this.fodoc.getLastVisibleTime();
                }),
                (i.onVisibilityChanged = function (t) {
                  return this.fodoc.onVisibilityChanged(t);
                }),
                (i.oa = function (t) {
                  var i;
                  t &&
                    (Bt(
                      "prerender" === (i = t) ||
                        "visible" === i ||
                        "hidden" === i ||
                        "paused" === i ||
                        "inactive" === i
                    ),
                    t === cr &&
                      (t = null != this.fodoc.getLastVisibleTime() ? vr : ar),
                    this.fodoc.overrideVisibilityState(t),
                    qt().fine(
                      Zh,
                      "visibilitychange event:",
                      this.fodoc.getVisibilityState()
                    ));
                }),
                (i.getResolvedViewerUrl = function () {
                  return this.na;
                }),
                (i.getViewerUrl = function () {
                  return this.ra;
                }),
                (i.maybeGetMessagingOrigin = function () {
                  return this.Fh;
                }),
                (i.getUnconfirmedReferrerUrl = function () {
                  return this.Zh;
                }),
                (i.getReferrerUrl = function () {
                  return this.ia;
                }),
                (i.isTrustedViewer = function () {
                  var t = this;
                  if (!this.Ls) {
                    var i = this.ta();
                    this.Ls =
                      void 0 !== i
                        ? Promise.resolve(i)
                        : this.Jh.then(function (i) {
                            return !!i && t.ua(i);
                          });
                  }
                  return this.Ls;
                }),
                (i.ta = function () {
                  return (
                    !!this.isEmbedded() &&
                    (!this.win.location.ancestorOrigins ||
                    this.isWebviewEmbedded() ||
                    this.isCctEmbedded()
                      ? void 0
                      : this.win.location.ancestorOrigins.length > 0 &&
                        this.ua(this.win.location.ancestorOrigins[0]))
                  );
                }),
                (i.getViewerOrigin = function () {
                  var t;
                  return (
                    this.Qh ||
                      (this.isEmbedded()
                        ? this.win.location.ancestorOrigins &&
                          this.win.location.ancestorOrigins.length > 0 &&
                          (t = this.win.location.ancestorOrigins[0])
                        : (t = ""),
                      (this.Qh =
                        void 0 !== t
                          ? Promise.resolve(t)
                          : ir(this.win)
                              .timeoutPromise(1e3, this.Jh)
                              .catch(function () {
                                return "";
                              }))),
                    this.Qh
                  );
                }),
                (i.ua = function (t) {
                  var i = rs(t),
                    n = i.protocol;
                  return (
                    "x-thread:" == n ||
                    ("https:" == n &&
                      Ot.trustedViewerHosts.some(function (t) {
                        return t.test(i.hostname);
                      }))
                  );
                }),
                (i.onMessage = function (t, i) {
                  var n = this.Lh[t];
                  n || ((n = new dr()), (this.Lh[t] = n));
                  var r = n.add(i);
                  return (
                    this.qh[t] &&
                      (this.qh[t].forEach(function (t) {
                        n.fire(t.data), t.deferred.resolve();
                      }),
                      (this.qh[t] = [])),
                    r
                  );
                }),
                (i.onMessageRespond = function (t, i) {
                  var n = this;
                  return (
                    (this.Uh[t] = i),
                    this.qh[t] &&
                      (this.qh[t].forEach(function (t) {
                        t.deferred.resolve(i(t.data));
                      }),
                      (this.qh[t] = [])),
                    function () {
                      n.Uh[t] === i && delete n.Uh[t];
                    }
                  );
                }),
                (i.receiveMessage = function (t, i, n) {
                  if ("visibilitychange" == t) return this.oa(i.state), h();
                  if ("broadcast" == t) return this.Gh.fire(i), h();
                  var r = this.Lh[t],
                    e = this.Uh[t];
                  if (!r && !e) {
                    if (
                      ((this.qh[t] = this.qh[t] || []), this.qh[t].length >= 50)
                    )
                      return;
                    var s = new a();
                    return this.qh[t].push({ data: i, deferred: s }), s.promise;
                  }
                  return r && r.fire(i), e ? e(i) : r ? h() : void 0;
                }),
                (i.setMessageDeliverer = function (t, i) {
                  var n = this;
                  if (this.Vh)
                    throw new Error(
                      "message channel can only be initialized once"
                    );
                  if (null == i)
                    throw new Error("message channel must have an origin");
                  if (
                    (qt().fine(
                      Zh,
                      "message channel established with origin: ",
                      i
                    ),
                    (this.Vh = t),
                    (this.Fh = i),
                    this.Yh(i),
                    this.Bh.length > 0)
                  ) {
                    var r = this.Bh.slice(0);
                    (this.Bh = []),
                      r.forEach(function (t) {
                        var i = n.Vh(t.eventType, t.data, t.awaitResponse);
                        t.awaitResponse && t.responseResolver(i);
                      });
                  }
                }),
                (i.maybeGetMessageDeliverer = function () {
                  return this.Vh;
                }),
                (i.sendMessage = function (t, i) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  this.ha(t, i, n, !1);
                }),
                (i.sendMessageAwaitResponse = function (t, i) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  return this.ha(t, i, n, !0);
                }),
                (i.ha = function (t, i, n, r) {
                  var e = this;
                  if (this.Vh)
                    return f(function () {
                      return e.Vh(t, i, r);
                    });
                  if (!this.Jh) return r ? Promise.reject(na()) : h();
                  if (!n)
                    return this.Jh.then(function () {
                      return e.Vh(t, i, r);
                    });
                  var s,
                    u = B(this.Bh, function (i) {
                      return i.eventType == t;
                    });
                  if (-1 != u)
                    ((s = this.Bh.splice(u, 1)[0]).data = i),
                      (s.awaitResponse = s.awaitResponse || r);
                  else {
                    var o = new a(),
                      c = o.promise,
                      l = o.resolve;
                    s = {
                      eventType: t,
                      data: i,
                      awaitResponse: r,
                      responsePromise: c,
                      responseResolver: l,
                    };
                  }
                  return this.Bh.push(s), s.responsePromise;
                }),
                (i.broadcast = function (t) {
                  return this.Jh
                    ? this.ha("broadcast", t, !1, !1).then(
                        function () {
                          return !0;
                        },
                        function () {
                          return !1;
                        }
                      )
                    : Promise.resolve(!1);
                }),
                (i.onBroadcast = function (t) {
                  return this.Gh.add(t);
                }),
                (i.whenMessagingReady = function () {
                  return this.Jh;
                }),
                (i.replaceUrl = function (t) {
                  if (
                    t &&
                    this.fodoc.isSingleDoc() &&
                    this.win.history.replaceState
                  )
                    try {
                      var i = rs(this.win.location.href),
                        n = rs(cs(t) + this.win.location.hash);
                      i.origin == n.origin &&
                        bs(i) == bs(n) &&
                        (this.win.history.replaceState({}, "", n.href),
                        (this.win.location.originalHref = i.href),
                        qt().fine(Zh, "replace url:" + n.href));
                    } catch (t) {
                      qt().error(Zh, "replaceUrl failed", t);
                    }
                }),
                (i.ea = function () {
                  var t = this;
                  if (this.fodoc.getVisibilityState() != fr) {
                    var i = [],
                      n = function () {
                        return i.forEach(function (t) {
                          return t();
                        });
                      },
                      r = function () {
                        t.oa(fr),
                          n(),
                          qt().expectedError(
                            Zh,
                            "Received user action in non-visible doc"
                          );
                      },
                      e = { capture: !0, passive: !0 };
                    i.push(
                      Ue(this.win, "keydown", r, e),
                      Ue(this.win, "touchstart", r, e),
                      Ue(this.win, "mousedown", r, e)
                    ),
                      this.whenFirstVisible().then(n);
                  }
                }),
                t
              );
            })();
          function na(t) {
            var i;
            return (
              t instanceof Error
                ? (((t = c(t)).message = "No messaging channel: " + t.message),
                  (i = t))
                : (i = new Error("No messaging channel: " + t)),
              (i.message = it(i.message)),
              i
            );
          }
          function ra(t, i) {
            return function (n) {
              return t + (i - t) * n;
            };
          }
          function ea(t, i, n) {
            return et(i <= n), Math.min(Math.max(t, i), n);
          }
          var sa = (function () {
              function t() {}
              return (
                (t.solveYValueFromXValue = function (i, n, r, e, s, u, o, h, a) {
                  return t.aa(t.ca(i, n, e, u, h), r, s, o, a);
                }),
                (t.ca = function (i, n, r, e, s) {
                  var u = 1e-6,
                    o = (i - n) / (s - n);
                  if (o <= 0) return 0;
                  if (o >= 1) return 1;
                  for (var h = 0, a = 1, f = 0, c = 0; c < 8; c++) {
                    f = t.fa(o, n, r, e, s);
                    var l = (t.fa(o + u, n, r, e, s) - f) / u;
                    if (Math.abs(f - i) < u) return o;
                    if (Math.abs(l) < u) break;
                    f < i ? (h = o) : (a = o), (o -= (f - i) / l);
                  }
                  for (var v = 0; Math.abs(f - i) > u && v < 8; v++)
                    f < i
                      ? ((h = o), (o = (o + a) / 2))
                      : ((a = o), (o = (o + h) / 2)),
                      (f = t.fa(o, n, r, e, s));
                  return o;
                }),
                (t.fa = function (i, n, r, e, s) {
                  if (0 == i) return n;
                  if (1 == i) return s;
                  var u = t.la(n, r, i),
                    o = t.la(r, e, i),
                    h = t.la(e, s, i);
                  return (u = t.la(u, o, i)), (o = t.la(o, h, i)), t.la(u, o, i);
                }),
                (t.aa = function (i, n, r, e, s) {
                  if (0 == i) return n;
                  if (1 == i) return s;
                  var u = t.la(n, r, i),
                    o = t.la(r, e, i),
                    h = t.la(e, s, i);
                  return (u = t.la(u, o, i)), (o = t.la(o, h, i)), t.la(u, o, i);
                }),
                (t.la = function (t, i, n) {
                  return t + n * (i - t);
                }),
                t
              );
            })(),
            ua = {
              LINEAR: function (t) {
                return t;
              },
              EASE: function (t) {
                return sa.solveYValueFromXValue(
                  t,
                  0,
                  0,
                  0.25,
                  0.1,
                  0.25,
                  1,
                  1,
                  1
                );
              },
              EASE_IN: function (t) {
                return sa.solveYValueFromXValue(t, 0, 0, 0.42, 0, 1, 1, 1, 1);
              },
              EASE_OUT: function (t) {
                return sa.solveYValueFromXValue(t, 0, 0, 0, 0, 0.58, 1, 1, 1);
              },
              EASE_IN_OUT: function (t) {
                return sa.solveYValueFromXValue(t, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
              },
            },
            oa = {
              linear: ua.LINEAR,
              ease: ua.EASE,
              "ease-in": ua.EASE_IN,
              "ease-out": ua.EASE_OUT,
              "ease-in-out": ua.EASE_IN_OUT,
            };
          function ha(t) {
            if (!t) return null;
            if (Y(t)) {
              if (-1 != (t = t).indexOf("cubic-bezier")) {
                var i = t.match(/cubic-bezier\((.+)\)/);
                if (i) {
                  var n = i[1].split(",").map(parseFloat);
                  if (4 == n.length) {
                    for (var r = 0; r < 4; r++) if (isNaN(n[r])) return null;
                    return (
                      (e = n[0]),
                      (s = n[1]),
                      (u = n[2]),
                      (o = n[3]),
                      function (t) {
                        return sa.solveYValueFromXValue(
                          t,
                          0,
                          0,
                          e,
                          s,
                          u,
                          o,
                          1,
                          1
                        );
                      }
                    );
                  }
                }
                return null;
              }
              return oa[t];
            }
            var e, s, u, o;
            return t;
          }
          var aa = "Animation",
            fa = function () {},
            ca = (function () {
              function t(t, i) {
                (this.va = t),
                  (this.As = i || ur(self)),
                  (this.da = null),
                  (this.ma = []);
              }
              t.animate = function (i, n, r, e) {
                return new t(i).setCurve(e).add(0, n, 1).start(r);
              };
              var i = t.prototype;
              return (
                (i.setCurve = function (t) {
                  return t && (this.da = ha(t)), this;
                }),
                (i.add = function (t, i, n, r) {
                  return (
                    this.ma.push({
                      delay: t,
                      func: i,
                      duration: n,
                      curve: ha(r),
                    }),
                    this
                  );
                }),
                (i.start = function (t) {
                  return new la(this.As, this.va, this.ma, this.da, t);
                }),
                t
              );
            })(),
            la = (function () {
              function t(t, i, n, r, e) {
                (this.As = t), (this.va = i), (this.ma = []);
                for (var s = 0; s < n.length; s++) {
                  var u = n[s];
                  this.ma.push({
                    delay: u.delay,
                    func: u.func,
                    duration: u.duration,
                    curve: u.curve || r,
                    started: !1,
                    completed: !1,
                  });
                }
                (this.pa = e),
                  (this.th = Date.now()),
                  (this.Rr = !0),
                  (this.Ai = {});
                var o = new a();
                (this.ba = o.promise),
                  (this.ci = o.resolve),
                  (this.ga = o.reject),
                  (this.ya = this.As.createAnimTask(this.va, {
                    mutate: this.wa.bind(this),
                  })),
                  this.As.canAnimate(this.va)
                    ? this.ya(this.Ai)
                    : (qt().warn(aa, "cannot animate"), this.Aa(!1, 0));
              }
              var i = t.prototype;
              return (
                (i.then = function (t, i) {
                  return t || i ? this.ba.then(t, i) : this.ba;
                }),
                (i.thenAlways = function (t) {
                  var i = t || fa;
                  return this.then(i, i);
                }),
                (i.halt = function (t) {
                  this.Aa(!1, t || 0);
                }),
                (i.Aa = function (t, i) {
                  if (this.Rr) {
                    if (((this.Rr = !1), 0 != i)) {
                      this.ma.length > 1 &&
                        this.ma.sort(function (t, i) {
                          return t.delay + t.duration - (i.delay + i.duration);
                        });
                      try {
                        if (i > 0)
                          for (var n = 0; n < this.ma.length; n++)
                            this.ma[n].func(1, !0);
                        else
                          for (var r = this.ma.length - 1; r >= 0; r--)
                            this.ma[r].func(0, !1);
                      } catch (i) {
                        qt().error(aa, "completion failed: " + i, i), (t = !1);
                      }
                    }
                    t ? this.ci() : this.ga();
                  }
                }),
                (i.wa = function (t) {
                  if (this.Rr) {
                    for (
                      var i = Date.now(),
                        n = Math.min((i - this.th) / this.pa, 1),
                        r = 0;
                      r < this.ma.length;
                      r++
                    ) {
                      var e = this.ma[r];
                      !e.started && n >= e.delay && (e.started = !0);
                    }
                    for (var s = 0; s < this.ma.length; s++) {
                      var u = this.ma[s];
                      u.started && !u.completed && this.Ea(u, n);
                    }
                    1 == n
                      ? this.Aa(!0, 0)
                      : this.As.canAnimate(this.va)
                      ? this.ya(this.Ai)
                      : (qt().warn(aa, "cancel animation"), this.Aa(!1, 0));
                  }
                }),
                (i.Ea = function (t, i) {
                  var n, r;
                  if (t.duration > 0) {
                    if (
                      ((r = n = Math.min((i - t.delay) / t.duration, 1)),
                      t.curve && 1 != r)
                    )
                      try {
                        r = t.curve(n);
                      } catch (t) {
                        return (
                          qt().error(aa, "step curve failed: " + t, t),
                          void this.Aa(!1, 0)
                        );
                      }
                  } else (n = 1), (r = 1);
                  1 == n && (t.completed = !0);
                  try {
                    t.func(r, t.completed);
                  } catch (t) {
                    return (
                      qt().error(aa, "step mutate failed: " + t, t),
                      void this.Aa(!1, 0)
                    );
                  }
                }),
                t
              );
            })();
          function va(t, i) {
            for (var n, r = i.lastElementChild; r; r = r.previousElementSibling)
              if (r.getBoundingClientRect().height > 0) {
                var e = Or(t, r);
                if ("static" == e.position || "relative" == e.position) {
                  n = e;
                  break;
                }
              }
            return n ? parseInt(n.marginBottom, 10) : 0;
          }
          var da = (function () {
              function t(t) {
                var i = this;
                (this.win = t), (this.As = ur(t));
                var n = this.win.document,
                  r = n.documentElement,
                  e = r.className;
                r.classList.add("i-fohtml-ios-embed");
                var s = n.createElement("html");
                (this.xa = s),
                  (s.id = "i-fohtml-wrapper"),
                  (s.className = e),
                  (this.Oa = new dr()),
                  (this.Ta = new dr()),
                  (this.Ia = this.Pa.bind(this)),
                  (this.Sa = function () {
                    return i.Ta.fire();
                  }),
                  (this.Ma = 0),
                  (this.ka = !1),
                  gi(n, this._a.bind(this)),
                  sn(n).then(function () {
                    r.classList.add("i-fohtml-ios-overscroll");
                  }),
                  qt().fine("Viewport", "initialized ios-embed-wrapper viewport");
              }
              var i = t.prototype;
              return (
                (i.ensureReadyForElements = function () {
                  this._a();
                }),
                (i._a = function () {
                  if (!this.ka) {
                    this.ka = !0;
                    var t = this.win.document,
                      i = t.body;
                    t.documentElement.appendChild(this.xa),
                      this.xa.appendChild(i),
                      Object.defineProperty(t, "body", {
                        get: function () {
                          return i;
                        },
                      }),
                      this.Pa();
                  }
                }),
                (i.connect = function () {
                  this.win.addEventListener("resize", this.Sa),
                    this.xa.addEventListener("scroll", this.Ia);
                }),
                (i.disconnect = function () {
                  this.win.removeEventListener("resize", this.Sa),
                    this.xa.removeEventListener("scroll", this.Ia);
                }),
                (i.getBorderTop = function () {
                  return 1;
                }),
                (i.requiresFixedLayerTransfer = function () {
                  return (
                    !ke(this.win, "ios-fixed-no-transfer") ||
                    parseFloat(Xn(this.win).getIosVersionString()) < 12.2
                  );
                }),
                (i.overrideGlobalScrollTo = function () {
                  return !0;
                }),
                (i.supportsPositionFixed = function () {
                  return !0;
                }),
                (i.onScroll = function (t) {
                  this.Oa.add(t);
                }),
                (i.onResize = function (t) {
                  this.Ta.add(t);
                }),
                (i.updatePaddingTop = function (t) {
                  (this.Ma = t), yr(this.xa, { "padding-top": xr(t) });
                }),
                (i.hideViewerHeader = function (t, i) {
                  t || this.updatePaddingTop(0);
                }),
                (i.showViewerHeader = function (t, i) {
                  t || this.updatePaddingTop(i);
                }),
                (i.disableScroll = function () {
                  this.xa.classList.add("i-fohtml-scroll-disabled");
                }),
                (i.resetScroll = function () {
                  this.xa.classList.remove("i-fohtml-scroll-disabled");
                }),
                (i.updateLightboxMode = function (t) {
                  return h();
                }),
                (i.getSize = function () {
                  return {
                    width: this.win.innerWidth,
                    height: this.win.innerHeight,
                  };
                }),
                (i.getScrollTop = function () {
                  return this.xa.scrollTop;
                }),
                (i.getScrollLeft = function () {
                  return 0;
                }),
                (i.getScrollWidth = function () {
                  return this.xa.scrollWidth;
                }),
                (i.getScrollHeight = function () {
                  return this.xa.scrollHeight;
                }),
                (i.getContentHeight = function () {
                  var t = this.win.document.body,
                    i = t.getBoundingClientRect().height,
                    n = va(this.win, t),
                    r = Or(this.win, t);
                  return (
                    parseInt(r.marginTop, 10) +
                    this.Ma +
                    i +
                    n +
                    parseInt(r.marginBottom, 10)
                  );
                }),
                (i.contentHeightChanged = function () {}),
                (i.getLayoutRect = function (t, i, n) {
                  var r = t.getBoundingClientRect(),
                    e = null != n ? n : this.getScrollTop(),
                    s = null != i ? i : this.getScrollLeft();
                  return ki(
                    Math.round(r.left + s),
                    Math.round(r.top + e),
                    Math.round(r.width),
                    Math.round(r.height)
                  );
                }),
                (i.getRootClientRectAsync = function () {
                  return Promise.resolve(null);
                }),
                (i.setScrollTop = function (t) {
                  this.xa.scrollTop = t || 1;
                }),
                (i.Pa = function (t) {
                  0 == this.xa.scrollTop &&
                    ((this.xa.scrollTop = 1), t && t.preventDefault()),
                    t && this.Oa.fire();
                }),
                (i.getScrollingElement = function () {
                  return this.xa;
                }),
                (i.getScrollingElementScrollsLikeViewport = function () {
                  return !1;
                }),
                t
              );
            })(),
            ma = (function () {
              function t(t) {
                var i = this;
                (this.fodoc = t),
                  (this.win = t.win),
                  (this.Ms = Xn(this.win)),
                  (this.Oa = new dr()),
                  (this.Ta = new dr()),
                  (this.Ia = this.Ra.bind(this)),
                  (this.Sa = function () {
                    return i.Ta.fire();
                  }),
                  qt().fine("Viewport", "initialized natural viewport");
              }
              var i = t.prototype;
              return (
                (i.Ra = function () {
                  this.Oa.fire();
                }),
                (i.connect = function () {
                  this.win.addEventListener("scroll", this.Ia),
                    this.win.addEventListener("resize", this.Sa);
                }),
                (i.disconnect = function () {
                  this.win.removeEventListener("scroll", this.Ia),
                    this.win.removeEventListener("resize", this.Sa);
                }),
                (i.ensureReadyForElements = function () {}),
                (i.getBorderTop = function () {
                  return 0;
                }),
                (i.requiresFixedLayerTransfer = function () {
                  return !1;
                }),
                (i.overrideGlobalScrollTo = function () {
                  return !1;
                }),
                (i.supportsPositionFixed = function () {
                  return !0;
                }),
                (i.onScroll = function (t) {
                  this.Oa.add(t);
                }),
                (i.onResize = function (t) {
                  this.Ta.add(t);
                }),
                (i.updatePaddingTop = function (t) {
                  yr(this.win.document.documentElement, { "padding-top": xr(t) });
                }),
                (i.hideViewerHeader = function (t, i) {
                  t || this.updatePaddingTop(0);
                }),
                (i.showViewerHeader = function (t, i) {
                  t || this.updatePaddingTop(i);
                }),
                (i.disableScroll = function () {
                  this.win.document.documentElement.classList.add(
                    "i-fohtml-scroll-disabled"
                  );
                }),
                (i.resetScroll = function () {
                  this.win.document.documentElement.classList.remove(
                    "i-fohtml-scroll-disabled"
                  );
                }),
                (i.updateLightboxMode = function (t) {
                  return h();
                }),
                (i.getSize = function () {
                  var t = this.win.innerWidth,
                    i = this.win.innerHeight;
                  if (t && i) return { width: t, height: i };
                  var n = this.win.document.documentElement;
                  return { width: n.clientWidth, height: n.clientHeight };
                }),
                (i.getScrollTop = function () {
                  var t =
                      this.getScrollingElement().scrollTop ||
                      this.win.pageYOffset,
                    i = this.fodoc.getRootNode().host;
                  return i ? t - i.offsetTop : t;
                }),
                (i.getScrollLeft = function () {
                  return 0;
                }),
                (i.getScrollWidth = function () {
                  return this.getScrollingElement().scrollWidth;
                }),
                (i.getScrollHeight = function () {
                  return this.getScrollingElement().scrollHeight;
                }),
                (i.getContentHeight = function () {
                  var t = this.getScrollingElement(),
                    i = t.getBoundingClientRect(),
                    n = i.top + this.getScrollTop(),
                    r = Xn(this.win).isSafari() ? va(this.win, t) : 0,
                    e = Or(this.win, t);
                  return (
                    n +
                    parseInt(e.marginTop, 10) +
                    i.height +
                    r +
                    parseInt(e.marginBottom, 10)
                  );
                }),
                (i.contentHeightChanged = function () {}),
                (i.getLayoutRect = function (t, i, n) {
                  var r = t.getBoundingClientRect(),
                    e = null != n ? n : this.getScrollTop(),
                    s = null != i ? i : this.getScrollLeft();
                  return ki(
                    Math.round(r.left + s),
                    Math.round(r.top + e),
                    Math.round(r.width),
                    Math.round(r.height)
                  );
                }),
                (i.getRootClientRectAsync = function () {
                  return Promise.resolve(null);
                }),
                (i.setScrollTop = function (t) {
                  this.getScrollingElement().scrollTop = t;
                }),
                (i.getScrollingElement = function () {
                  var t = this.win.document;
                  return t.scrollingElement
                    ? t.scrollingElement
                    : t.body && this.Ms.isWebKit()
                    ? t.body
                    : t.documentElement;
                }),
                (i.getScrollingElementScrollsLikeViewport = function () {
                  return !0;
                }),
                t
              );
            })(),
            pa = "Viewport";
          function ba(t, i, n) {
            return (function (t, i, n) {
              var r = parseInt(Or(t, i)[n], 10);
              return isNaN(r) ? 0 : r;
            })(t, i === t.document.body ? t.document.documentElement : i, n);
          }
          function ga(t, i) {
            return ba(t, i, "scrollPaddingTop");
          }
          var ya = (function () {
            function t(t, i, n) {
              var r = this,
                e = t.win;
              (this.fodoc = t),
                (this.Na = this.fodoc.win.document),
                (this.Me = i),
                (this.ne = n),
                (this.Ca = null),
                (this.li = null),
                (this.Da = null),
                (this.ja = !1),
                (this.za = null),
                (this.Ma = Number(n.getParam("paddingTop") || 0)),
                (this.La = 0),
                (this.Pr = ir(e)),
                (this.As = ur(e)),
                (this.Ua = !1),
                (this.Ha = null),
                (this.Ga = 0),
                (this.Va = new dr()),
                (this.Oa = new dr()),
                (this.Ta = new dr()),
                (this.Fa = void 0),
                (this.Ba = void 0),
                (this.qa = null),
                this.ne.onMessage("viewport", this.$a.bind(this)),
                this.ne.onMessage("scroll", this.Wa.bind(this)),
                this.ne.onMessage("disableScroll", this.Ka.bind(this)),
                this.ne.isEmbedded() && this.Me.updatePaddingTop(this.Ma),
                this.Me.onScroll(this.Ya.bind(this)),
                this.Me.onResize(this.Ja.bind(this)),
                this.onScroll(this.Xa.bind(this)),
                (this.Ao = !1),
                this.fodoc.onVisibilityChanged(this.Qa.bind(this)),
                this.Qa();
              var s = this.Na.documentElement;
              if (
                (t.isSingleDoc() && s.classList.add("i-fohtml-singledoc"),
                n.isEmbedded()
                  ? s.classList.add("i-fohtml-embedded")
                  : s.classList.add("i-fohtml-standalone"),
                Ii(e) && s.classList.add("i-fohtml-iframed"),
                "1" === n.getParam("webview") &&
                  s.classList.add("i-fohtml-webview"),
                Ii(e) &&
                  "scrollRestoration" in e.history &&
                  (e.history.scrollRestoration = "manual"),
                this.Me.overrideGlobalScrollTo())
              )
                try {
                  Object.defineProperty(e, "scrollTo", {
                    value: function (t, i) {
                      return r.setScrollTop(i);
                    },
                  }),
                    ["pageYOffset", "scrollY"].forEach(function (t) {
                      Object.defineProperty(e, t, {
                        get: function () {
                          return r.getScrollTop();
                        },
                      });
                    });
                } catch (t) {}
              Xn(e).isIos() &&
                Ii(e) &&
                this.fodoc.isSingleDoc() &&
                this.fodoc.whenReady().then(function () {
                  e.scrollTo(-0.1, 0);
                });
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                this.Me.disconnect();
              }),
              (i.ensureReadyForElements = function () {
                this.Me.ensureReadyForElements();
              }),
              (i.Qa = function () {
                var t = this.fodoc.isVisible();
                t != this.Ao &&
                  ((this.Ao = t),
                  t
                    ? (this.Me.connect(),
                      this.li && this.Ja(),
                      this.Da && ((this.Da = null), this.getScrollTop()))
                    : this.Me.disconnect());
              }),
              (i.getPaddingTop = function () {
                return this.Ma;
              }),
              (i.getScrollTop = function () {
                return (
                  null == this.Da && (this.Da = this.Me.getScrollTop()), this.Da
                );
              }),
              (i.getScrollLeft = function () {
                return (
                  null == this.za && (this.za = this.Me.getScrollLeft()), this.za
                );
              }),
              (i.setScrollTop = function (t) {
                (this.Da = null), this.Me.setScrollTop(t);
              }),
              (i.updatePaddingBottom = function (t) {
                this.fodoc.waitForBodyOpen().then(function (i) {
                  wr(i, "borderBottom", "".concat(t, "px solid transparent"));
                });
              }),
              (i.getSize = function () {
                if (this.li) return this.li;
                if (
                  ((this.li = this.Me.getSize()),
                  0 == this.li.width || 0 == this.li.height)
                ) {
                  var t = this.fodoc.getVisibilityState();
                  (t != ar && t != fr) ||
                    (Math.random() < 0.01 &&
                      qt().error(pa, "viewport has zero dimensions"));
                }
                return this.li;
              }),
              (i.getHeight = function () {
                return this.getSize().height;
              }),
              (i.getWidth = function () {
                return this.getSize().width;
              }),
              (i.getScrollWidth = function () {
                return this.Me.getScrollWidth();
              }),
              (i.getScrollHeight = function () {
                return this.Me.getScrollHeight();
              }),
              (i.getContentHeight = function () {
                return this.Me.getContentHeight();
              }),
              (i.contentHeightChanged = function () {
                this.Me.contentHeightChanged();
              }),
              (i.getRect = function () {
                if (null == this.Ca) {
                  var t = this.getScrollTop(),
                    i = this.getScrollLeft(),
                    n = this.getSize();
                  this.Ca = ki(i, t, n.width, n.height);
                }
                return this.Ca;
              }),
              (i.getLayoutRect = function (t) {
                var i = this.getScrollLeft(),
                  n = this.getScrollTop(),
                  r = An(t, this.fodoc.win);
                if (r) {
                  var e = this.Me.getLayoutRect(t, 0, 0),
                    s = this.Me.getLayoutRect(r, i, n);
                  return ki(
                    Math.round(e.left + s.left),
                    Math.round(e.top + s.top),
                    Math.round(e.width),
                    Math.round(e.height)
                  );
                }
                return this.Me.getLayoutRect(t, i, n);
              }),
              (i.getClientRectAsync = function (t) {
                var i = this.As.measurePromise(function () {
                    return t.getBoundingClientRect();
                  }),
                  n = this.Me.getRootClientRectAsync(),
                  r = An(t, this.fodoc.win);
                return (
                  r &&
                    (n = this.As.measurePromise(function () {
                      return r.getBoundingClientRect();
                    })),
                  Promise.all([i, n]).then(function (t) {
                    var i,
                      n = t[0],
                      r = t[1];
                    return r
                      ? Ci(n, r.left, r.top)
                      : ((i = n),
                        ki(
                          Number(i.left),
                          Number(i.top),
                          Number(i.width),
                          Number(i.height)
                        ));
                  })
                );
              }),
              (i.supportsPositionFixed = function () {
                return this.Me.supportsPositionFixed();
              }),
              (i.isDeclaredFixed = function (t) {
                return !!this.qa && this.qa.isDeclaredFixed(t);
              }),
              (i.scrollIntoView = function (t) {
                var i = this;
                return this.Za(t).then(function (n) {
                  return i.tc(t, n);
                });
              }),
              (i.tc = function (t, i) {
                var n = this,
                  r = this.Me.getLayoutRect(t).top,
                  e = ga(this.fodoc.win, i);
                f(function () {
                  return Math.max(0, r - n.Ma - e);
                }).then(function (t) {
                  return n.ic(i, t);
                });
              }),
              (i.animateScrollIntoView = function (t) {
                var i = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "top",
                  r = arguments.length > 2 ? arguments[2] : void 0,
                  e = arguments.length > 3 ? arguments[3] : void 0;
                return (
                  Bt(!e || void 0 !== r),
                  this.Za(t).then(function (s) {
                    return i.animateScrollWithinParent(t, s, n, r, e);
                  })
                );
              }),
              (i.animateScrollWithinParent = function (t, i, n, r, e) {
                var s = this;
                Bt(!e || void 0 !== r);
                var u = this.Me.getLayoutRect(t),
                  o = (this.nc(i) ? this.getSize() : this.getLayoutRect(i))
                    .height,
                  h = this.fodoc.win,
                  a = ga(h, i),
                  f = (function (t, i) {
                    return ba(t, i, "scrollPaddingBottom");
                  })(h, i),
                  c = -a;
                return (
                  "bottom" === n
                    ? (c = -o + f + u.height)
                    : "center" === n && (c = -(o - a - f) / 2 + u.height / 2),
                  this.rc(i).then(function (t) {
                    var n = u.top - s.Ma + c,
                      o = Math.max(0, n);
                    if (o != t) return s.ec(i, t, o, r, e);
                  })
                );
              }),
              (i.ec = function (t, i, n, r) {
                var e = this,
                  s =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : "ease-in",
                  u = void 0 !== r ? r : wa(i, n),
                  o = ra(i, n);
                return ca
                  .animate(
                    t,
                    function (i) {
                      e.ic(t, o(i));
                    },
                    u,
                    s
                  )
                  .thenAlways(function () {
                    e.ic(t, n);
                  });
              }),
              (i.Za = function (t) {
                var i = this;
                return this.As.measurePromise(function () {
                  return (
                    ci(t, ".i-fohtml-scrollable") || i.Me.getScrollingElement()
                  );
                });
              }),
              (i.ic = function (t, i) {
                this.nc(t)
                  ? this.Me.setScrollTop(i)
                  : this.As.mutate(function () {
                      t.scrollTop = i;
                    });
              }),
              (i.rc = function (t) {
                var i = this;
                return this.nc(t)
                  ? f(function () {
                      return i.getScrollTop();
                    })
                  : this.As.measurePromise(function () {
                      return t.scrollTop;
                    });
              }),
              (i.nc = function (t) {
                return t == this.Me.getScrollingElement();
              }),
              (i.getScrollingElement = function () {
                return this.Ha
                  ? this.Ha
                  : (this.Ha = this.Me.getScrollingElement());
              }),
              (i.onChanged = function (t) {
                return this.Va.add(t);
              }),
              (i.onScroll = function (t) {
                return this.Oa.add(t);
              }),
              (i.onResize = function (t) {
                return this.Ta.add(t);
              }),
              (i.enterLightboxMode = function (t, i) {
                return (
                  this.ne.sendMessage("requestFullOverlay", {}, !0),
                  this.enterOverlayMode(),
                  this.qa && this.qa.enterLightbox(t, i),
                  t && this.maybeEnterFieLightboxMode(t),
                  this.Me.updateLightboxMode(!0)
                );
              }),
              (i.leaveLightboxMode = function (t) {
                return (
                  this.ne.sendMessage("cancelFullOverlay", {}, !0),
                  this.qa && this.qa.leaveLightbox(),
                  this.leaveOverlayMode(),
                  t && this.maybeLeaveFieLightboxMode(t),
                  this.Me.updateLightboxMode(!1)
                );
              }),
              (i.isLightboxExperimentOn = function () {
                return ke(this.fodoc.win, "fo-lightbox-a4a-proto");
              }),
              (i.maybeEnterFieLightboxMode = function (t) {
                var i = this.sc(t);
                i &&
                  (Bt(this.isLightboxExperimentOn()), i.enterFullOverlayMode());
              }),
              (i.maybeLeaveFieLightboxMode = function (t) {
                var i = this.sc(t);
                i && Bt(i).leaveFullOverlayMode();
              }),
              (i.sc = function (t) {
                var i = An(t, this.fodoc.win);
                return i && i.__fo_EMBED__;
              }),
              (i.enterOverlayMode = function () {
                this.disableTouchZoom(), this.disableScroll();
              }),
              (i.leaveOverlayMode = function () {
                this.resetScroll(), this.restoreOriginalTouchZoom();
              }),
              (i.disableScroll = function () {
                var t,
                  i = this,
                  n = this.fodoc.win,
                  r = n.document.documentElement;
                this.As.measure(function () {
                  var e = Or(n, r).marginRight,
                    s = (function (t) {
                      var i = t.document.documentElement;
                      return t.innerWidth - i.clientWidth;
                    })(i.fodoc.win);
                  t = parseInt(e, 10) + s;
                }),
                  this.As.mutate(function () {
                    wr(r, "margin-right", t, "px"), i.Me.disableScroll();
                  });
              }),
              (i.resetScroll = function () {
                var t = this,
                  i = this.fodoc.win.document.documentElement;
                this.As.mutate(function () {
                  wr(i, "margin-right", ""), t.Me.resetScroll();
                });
              }),
              (i.resetTouchZoom = function () {
                var t = this,
                  i = this.fodoc.win.innerHeight,
                  n = this.Na.documentElement.clientHeight;
                (i && n && i === n) ||
                  (this.disableTouchZoom() &&
                    this.Pr.delay(function () {
                      t.restoreOriginalTouchZoom();
                    }, 50));
              }),
              (i.disableTouchZoom = function () {
                var t = this.oc();
                if (!t) return !1;
                var i = (function (t, i) {
                  var n = (function (t) {
                      var i = Object.create(null);
                      if (!t) return i;
                      for (var n = t.split(/,|;/), r = 0; r < n.length; r++) {
                        var e = n[r].split("="),
                          s = e[0].trim(),
                          u = e[1];
                        (u = (u || "").trim()), s && (i[s] = u);
                      }
                      return i;
                    })(t),
                    r = !1;
                  for (var e in i)
                    n[e] !== i[e] &&
                      ((r = !0), void 0 !== i[e] ? (n[e] = i[e]) : delete n[e]);
                  return r
                    ? (function (t) {
                        var i = "";
                        for (var n in t)
                          i.length > 0 && (i += ","),
                            t[n] ? (i += n + "=" + t[n]) : (i += n);
                        return i;
                      })(n)
                    : t;
                })(t.content, { "maximum-scale": "1", "user-scalable": "no" });
                return this.uc(i);
              }),
              (i.restoreOriginalTouchZoom = function () {
                return void 0 !== this.Ba && this.uc(this.Ba);
              }),
              (i.updateFixedLayer = function () {
                return this.qa ? this.qa.update() : h();
              }),
              (i.addToFixedLayer = function (t, i) {
                return this.qa ? this.qa.addElement(t, i) : h();
              }),
              (i.removeFromFixedLayer = function (t) {
                this.qa && this.qa.removeElement(t);
              }),
              (i.createFixedLayer = function (t) {
                var i = this;
                (this.qa = new t(
                  this.fodoc,
                  this.As,
                  this.Me.getBorderTop(),
                  this.Ma,
                  this.Me.requiresFixedLayerTransfer()
                )),
                  this.fodoc.whenReady().then(function () {
                    return i.qa.setup();
                  });
              }),
              (i.uc = function (t) {
                var i = this.oc();
                return !(
                  !i ||
                  i.content == t ||
                  (qt().fine(pa, "changed viewport meta to:", t),
                  (i.content = t),
                  0)
                );
              }),
              (i.oc = function () {
                return Ii(this.fodoc.win)
                  ? null
                  : (void 0 === this.Fa &&
                      ((this.Fa = this.Na.querySelector("meta[name=viewport]")),
                      this.Fa && (this.Ba = this.Fa.content)),
                    this.Fa);
              }),
              (i.Wa = function (t) {
                var i = t.scrollTop;
                this.setScrollTop(i);
              }),
              (i.$a = function (t) {
                var i = this,
                  n = t.paddingTop,
                  r = t.duration || 0,
                  e = t.curve,
                  s = t.transient;
                if (
                  null != n &&
                  n != this.Ma &&
                  ((this.La = this.Ma), (this.Ma = n), this.qa)
                ) {
                  var u = this.qa.animateFixedElements(this.Ma, this.La, r, e, s);
                  n < this.La
                    ? this.Me.hideViewerHeader(s, this.La)
                    : u.then(function () {
                        i.Me.showViewerHeader(s, n);
                      });
                }
              }),
              (i.Ka = function (t) {
                t ? this.disableScroll() : this.resetScroll();
              }),
              (i.hc = function (t, i) {
                var n = this.getSize(),
                  r = this.getScrollTop(),
                  e = this.getScrollLeft();
                qt().fine(
                  pa,
                  "changed event:",
                  "relayoutAll=",
                  t,
                  "top=",
                  r,
                  "left=",
                  e,
                  "bottom=",
                  r + n.height,
                  "velocity=",
                  i
                ),
                  this.Va.fire({
                    relayoutAll: t,
                    top: r,
                    left: e,
                    width: n.width,
                    height: n.height,
                    velocity: i,
                  });
              }),
              (i.Ya = function () {
                var t = this;
                (this.Ca = null), this.Ga++, (this.za = this.Me.getScrollLeft());
                var i = this.Me.getScrollTop();
                if (!(i < 0)) {
                  if (((this.Da = i), !this.Ua)) {
                    this.Ua = !0;
                    var n = Date.now();
                    this.Pr.delay(function () {
                      t.As.measure(function () {
                        t.$o(n, i);
                      });
                    }, 36);
                  }
                  this.Oa.fire();
                }
              }),
              (i.$o = function (t, i) {
                var n = this;
                this.Da = this.Me.getScrollTop();
                var r = this.Da,
                  e = Date.now(),
                  s = 0;
                e != t && (s = (r - i) / (e - t)),
                  qt().fine(pa, "scroll: scrollTop=" + r + "; velocity=" + s),
                  Math.abs(s) < 0.03
                    ? (this.hc(!1, s), (this.Ua = !1))
                    : this.Pr.delay(function () {
                        return n.As.measure(n.$o.bind(n, e, r));
                      }, 20);
              }),
              (i.Xa = function () {
                var t = this;
                this.ja ||
                  ((this.ja = !0),
                  this.As.measure(function () {
                    (t.ja = !1),
                      t.ne.sendMessage(
                        "scroll",
                        { scrollTop: t.getScrollTop() },
                        !0
                      );
                  }));
              }),
              (i.Ja = function () {
                var t = this;
                this.Ca = null;
                var i = this.li;
                this.li = null;
                var n = this.getSize();
                this.updateFixedLayer().then(function () {
                  var r = !i || i.width != n.width;
                  t.hc(r, 0),
                    (r || i.height != n.height) &&
                      t.Ta.fire({
                        relayoutAll: r,
                        width: n.width,
                        height: n.height,
                      });
                });
              }),
              t
            );
          })();
          function wa(t, i) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 500;
            return Math.floor(ea(0.65 * Math.abs(t - i), 0, n));
          }
          function Aa(t) {
            var i,
              n = sr(t),
              r = t.win;
            return (
              (i =
                t.isSingleDoc() &&
                (function (t, i) {
                  return Xn(t).isIos() &&
                    Ii(t) &&
                    i.isEmbedded() &&
                    !i.hasCapability("iframeScroll")
                    ? Ea.NATURAL_IOS_EMBED
                    : Ea.NATURAL;
                })(r, n) == Ea.NATURAL_IOS_EMBED
                  ? new da(r)
                  : new ma(t)),
              new ya(t, i, n)
            );
          }
          var Ea = { NATURAL: "natural", NATURAL_IOS_EMBED: "natural-ios-embed" },
            xa = (function () {
              function t(t) {
                (this.win = t),
                  (this.ac = Hn(this.win)),
                  (this.cc = this.fc()),
                  (this.vn = []),
                  (this.lc = []),
                  (this.cs = []),
                  (this.vc = []),
                  (this.kr = !1),
                  (this.dc = null),
                  (this.mc = null),
                  (this.bc = this.gc.bind(this)),
                  (this.yc = new xu(this.win, this.bc, 16)),
                  (this.wc = new xu(this.win, this.bc, 40)),
                  (this.Ac = this.Ec.bind(this)),
                  this.ac.isSingleDoc()
                    ? this.ac.getSingleDoc().onVisibilityChanged(this.Ac)
                    : Mr(this.win.document, this.Ac);
              }
              var i = t.prototype;
              return (
                (i.dispose = function () {
                  Tr(this.win.document, this.Ac);
                }),
                (i.Ec = function () {
                  this.kr && this.xc();
                }),
                (i.run = function (t, i) {
                  this.vn.push(t), this.cs.push(i || void 0), this.yn();
                }),
                (i.runPromise = function (t, i) {
                  if ((this.run(t, i), this.dc)) return this.dc;
                  var n = new a();
                  return (this.mc = n.resolve), (this.dc = n.promise);
                }),
                (i.createTask = function (t) {
                  var i = this;
                  return function (n) {
                    i.run(t, n);
                  };
                }),
                (i.mutate = function (t) {
                  this.run({ measure: void 0, mutate: t });
                }),
                (i.mutatePromise = function (t) {
                  return this.runPromise({ measure: void 0, mutate: t });
                }),
                (i.measure = function (t) {
                  this.run({ measure: t, mutate: void 0 });
                }),
                (i.measurePromise = function (t) {
                  var i = this;
                  return new Promise(function (n) {
                    i.measure(function () {
                      n(t());
                    });
                  });
                }),
                (i.canAnimate = function (t) {
                  return this.Oc(Bt(t));
                }),
                (i.Oc = function (t) {
                  if (Ir(this.win.document) != fr) return !1;
                  if (this.ac.isSingleDoc())
                    return this.ac.getSingleDoc().isVisible();
                  if (t) {
                    var i = this.ac.getfoDocIfAvailable(t);
                    return !i || i.isVisible();
                  }
                  return !0;
                }),
                (i.runAnim = function (t, i, n) {
                  return this.Oc(t)
                    ? (this.run(i, n), !0)
                    : (qt().warn(
                        "VSYNC",
                        "Did not schedule a vsync request, because document was invisible"
                      ),
                      !1);
                }),
                (i.createAnimTask = function (t, i) {
                  var n = this;
                  return function (r) {
                    return n.runAnim(t, i, r);
                  };
                }),
                (i.runAnimMutateSeries = function (t, i, n) {
                  var r = this;
                  return this.Oc(t)
                    ? new Promise(function (e, s) {
                        var u = Date.now(),
                          o = 0,
                          h = r.createAnimTask(t, {
                            mutate: function (t) {
                              var r = Date.now() - u;
                              i(r, r - o, t)
                                ? n && r > n
                                  ? s(new Error("timeout"))
                                  : ((o = r), h(t))
                                : e();
                            },
                          });
                        h({});
                      })
                    : Promise.reject(Is());
                }),
                (i.yn = function () {
                  this.kr || ((this.kr = !0), this.xc());
                }),
                (i.xc = function () {
                  this.Oc()
                    ? (this.cc(this.bc), this.wc.schedule())
                    : this.yc.schedule();
                }),
                (i.gc = function () {
                  this.wc.cancel(), (this.kr = !1);
                  var t = this.mc,
                    i = this.cs,
                    n = this.vn;
                  (this.mc = null),
                    (this.dc = null),
                    (this.vn = this.lc),
                    (this.cs = this.vc);
                  for (var r = 0; r < n.length; r++)
                    n[r].measure &&
                      (Oa(n[r].measure, i[r]) || (n[r].mutate = void 0));
                  for (var e = 0; e < n.length; e++)
                    n[e].mutate && Oa(n[e].mutate, i[e]);
                  (this.lc = n),
                    (this.vc = i),
                    (this.lc.length = 0),
                    (this.vc.length = 0),
                    t && t();
                }),
                (i.fc = function () {
                  var t = this,
                    i =
                      this.win.requestAnimationFrame ||
                      this.win.webkitRequestAnimationFrame;
                  if (i) return i.bind(this.win);
                  var n = 0;
                  return function (i) {
                    var r = Date.now(),
                      e = Math.max(0, 16 - (r - n));
                    (n = r + e), t.win.setTimeout(i, e);
                  };
                }),
                t
              );
            })();
          function Oa(t, i) {
            Bt(t);
            try {
              void 0 !== t(i) &&
                qt().error(
                  "VSYNC",
                  "callback returned a value but vsync cannot propogate it: %s",
                  t.toString()
                );
            } catch (t) {
              return d(t), !1;
            }
            return !0;
          }
          function Pa(t) {
            if (!t.defaultPrevented) {
              var i = t.target;
              if (i && "FORM" == i.tagName) {
                (i.classList.contains("i-fohtml-form")
                  ? !i.hasAttribute("fo-novalidate")
                  : !i.hasAttribute("novalidate")) &&
                  i.checkValidity &&
                  !i.checkValidity() &&
                  t.preventDefault();
                for (var n = i.elements, r = 0; r < n.length; r++)
                  $t(
                    !n[r].name || n[r].name != is,
                    "Illegal input name, %s found: %s",
                    is,
                    n[r]
                  );
                var e = i.getAttribute("action"),
                  s = i.getAttribute("action-xhr"),
                  u = (i.getAttribute("method") || "GET").toUpperCase();
                s &&
                  (fs(s, i, "action-xhr"),
                  $t(!ls(s), "form action-xhr should not be on fo CDN: %s", i),
                  ws(s)),
                  e &&
                    (fs(e, i, "action"),
                    $t(!ls(e), "form action should not be on fo CDN: %s", i),
                    ws(e)),
                  "GET" == u
                    ? $t(
                        s || e,
                        "form action-xhr or action attribute is required for method=GET: %s",
                        i
                      )
                    : "POST" == u &&
                      (e &&
                        Vt().error(
                          "form",
                          "action attribute is invalid for method=POST: %s",
                          i
                        ),
                      s ||
                        (t.preventDefault(),
                        $t(
                          !1,
                          "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s",
                          i
                        )));
                var o = i.getAttribute("target");
                o
                  ? $t(
                      "_blank" == o || "_top" == o,
                      "form target=%s is invalid can only be _blank or _top: %s",
                      o,
                      i
                    )
                  : i.setAttribute("target", "_top"),
                  s &&
                    (t.preventDefault(),
                    t.stopImmediatePropagation(),
                    Un(i).execute(i, "submit", null, i, i, t, 3));
              }
            }
          }
          var Ia = "Input",
            Ma = (function () {
              function t(t) {
                (this.win = t),
                  (this.Tc = this.Ic.bind(this)),
                  (this.Pc = this.Sc.bind(this)),
                  (this.Mc = null),
                  (this.kc = null),
                  (this._c = null),
                  (this.Rc =
                    "ontouchstart" in t ||
                    (void 0 !== t.navigator.maxTouchPoints &&
                      t.navigator.maxTouchPoints > 0) ||
                    void 0 !== t.DocumentTouch),
                  qt().fine(Ia, "touch detected:", this.Rc),
                  (this.Nc = !1),
                  this.win.document.addEventListener("keydown", this.Tc),
                  this.win.document.addEventListener("mousedown", this.Pc),
                  (this.Cc = !0),
                  (this.Dc = 0),
                  (this.jc = new dr()),
                  (this.zc = new dr()),
                  (this.Lc = new dr()),
                  this.Rc &&
                    ((this.Cc = !this.Rc),
                    (this.Mc = this.Uc.bind(this)),
                    ze(t.document, "mousemove", this.Mc));
              }
              var i = t.prototype;
              return (
                (i.setupInputModeClasses = function (t) {
                  var i = this;
                  this.onTouchDetected(function (n) {
                    i.Hc(t, "fo-mode-touch", n);
                  }, !0),
                    this.onMouseDetected(function (n) {
                      i.Hc(t, "fo-mode-mouse", n);
                    }, !0),
                    this.onKeyboardStateChanged(function (n) {
                      i.Hc(t, "fo-mode-keyboard-active", n);
                    }, !0);
                }),
                (i.isTouchDetected = function () {
                  return this.Rc;
                }),
                (i.onTouchDetected = function (t, i) {
                  return i && t(this.isTouchDetected()), this.jc.add(t);
                }),
                (i.isMouseDetected = function () {
                  return this.Cc;
                }),
                (i.onMouseDetected = function (t, i) {
                  return i && t(this.isMouseDetected()), this.zc.add(t);
                }),
                (i.isKeyboardActive = function () {
                  return this.Nc;
                }),
                (i.onKeyboardStateChanged = function (t, i) {
                  return i && t(this.isKeyboardActive()), this.Lc.add(t);
                }),
                (i.Hc = function (t, i, n) {
                  var r = this;
                  t.waitForBodyOpen().then(function (t) {
                    ur(r.win).mutate(function () {
                      t.classList.toggle(i, n);
                    });
                  });
                }),
                (i.Ic = function (t) {
                  if (!this.Nc && !t.defaultPrevented) {
                    var i = t.target;
                    (i &&
                      ("INPUT" == i.tagName ||
                        "TEXTAREA" == i.tagName ||
                        "SELECT" == i.tagName ||
                        "OPTION" == i.tagName ||
                        i.hasAttribute("contenteditable"))) ||
                      ((this.Nc = !0),
                      this.Lc.fire(!0),
                      qt().fine(Ia, "keyboard activated"));
                  }
                }),
                (i.Sc = function () {
                  this.Nc &&
                    ((this.Nc = !1),
                    this.Lc.fire(!1),
                    qt().fine(Ia, "keyboard deactivated"));
                }),
                (i.Uc = function (t) {
                  var i = this;
                  if (
                    !t.sourceCapabilities ||
                    !t.sourceCapabilities.firesTouchEvents
                  ) {
                    var n;
                    this._c ||
                      ((this._c = this.Gc.bind(this)),
                      (this.kc = this.Vc.bind(this)));
                    var r = (function (t, i, n, r) {
                      var e,
                        s = new Promise(function (i) {
                          e = ze(t, "click", i, void 0);
                        });
                      return s.then(e, e), r && r(e), s;
                    })(this.win.document, 0, 0, function (t) {
                      n = t;
                    });
                    return ir(this.win)
                      .timeoutPromise(300, r)
                      .then(this.kc, function () {
                        n && n(), i._c();
                      });
                  }
                  this.Vc();
                }),
                (i.Gc = function () {
                  (this.Cc = !0),
                    this.zc.fire(!0),
                    qt().fine(Ia, "mouse detected");
                }),
                (i.Vc = function () {
                  this.Dc++,
                    this.Dc <= 3
                      ? ze(this.win.document, "mousemove", this.Mc)
                      : qt().fine(Ia, "mouse detection failed");
                }),
                t
              );
            })(),
            Ta = ["<link rel=preload referrerpolicy=origin>"],
            Sa = 18e4,
            _a = null,
            ka = (function () {
              function t(t) {
                (this.Fc = t.document),
                  (this.Bc = t.document.head),
                  (this.qc = {}),
                  (this.$c = {}),
                  (this.Ms = Xn(t)),
                  (this.qc[rs(t.location.href).origin] = !0),
                  (this.Wc = (function (t) {
                    if (!_a) {
                      var i = t.document.createElement("link"),
                        n = i.relList;
                      if (((i.as = "invalid-value"), !n || !n.supports))
                        return {};
                      _a = {
                        preconnect: n.supports("preconnect"),
                        preload: n.supports("preload"),
                        onlyValidAs: "invalid-value" != i.as,
                      };
                    }
                    return _a;
                  })(t)),
                  (this.Pr = ir(t));
              }
              var i = t.prototype;
              return (
                (i.url = function (t, i, n) {
                  var r = this;
                  t.whenFirstVisible().then(function () {
                    r.ni(t, i, n);
                  });
                }),
                (i.ni = function (t, i, n) {
                  if (this.Kc(i)) {
                    var r = rs(i).origin,
                      e = Date.now(),
                      s = this.qc[r];
                    if (s && e < s) n && (this.qc[r] = e + Sa);
                    else {
                      var u,
                        o = n ? Sa : 1e4;
                      (this.qc[r] = e + o),
                        this.Wc.preconnect ||
                          ((u = this.Fc.createElement("link")).setAttribute(
                            "rel",
                            "dns-prefetch"
                          ),
                          u.setAttribute("href", r),
                          this.Bc.appendChild(u));
                      var h = this.Fc.createElement("link");
                      h.setAttribute("rel", "preconnect"),
                        h.setAttribute("href", r),
                        h.setAttribute("referrerpolicy", "origin"),
                        this.Bc.appendChild(h),
                        this.Pr.delay(function () {
                          u && u.parentNode && u.parentNode.removeChild(u),
                            h.parentNode && h.parentNode.removeChild(h);
                        }, 1e4),
                        this.Yc(t, r);
                    }
                  }
                }),
                (i.preload = function (t, i, n) {
                  var r = this;
                  this.Kc(i) &&
                    (this.$c[i] ||
                      ((this.$c[i] = !0),
                      this.url(t, i, !0),
                      this.Wc.preload &&
                        (("document" == n && this.Ms.isSafari()) ||
                          t.whenFirstVisible().then(function () {
                            r.Jc(i);
                          }))));
                }),
                (i.Jc = function (t) {
                  var i = Ee(this.Fc)(Ta);
                  i.setAttribute("href", t),
                    this.Wc.onlyValidAs ? (i.as = "fetch") : (i.as = ""),
                    this.Bc.appendChild(i);
                }),
                (i.Kc = function (t) {
                  return !(!t.startsWith("https:") && !t.startsWith("http:"));
                }),
                (i.Yc = function (t, i) {
                  if (
                    !this.Wc.preconnect &&
                    (this.Ms.isSafari() || this.Ms.isIos())
                  ) {
                    var n = Date.now();
                    this.qc[i] = n + Sa;
                    var r =
                        i +
                        "/robots.txt?_fo_safari_preconnect_polyfill_cachebust=" +
                        (n - (n % Sa)),
                      e = new XMLHttpRequest();
                    e.open("HEAD", r, !0), (e.withCredentials = !0), e.send();
                  }
                }),
                t
              );
            })();
          function Ra(t) {
            var i;
            !(function (t) {
              vn(t, "crypto", Go);
            })(t),
              vn(t, "batched-xhr", ro),
              Ah(t),
              zh(t),
              zh((i = t)),
              vn(i, "vsync", xa),
              (function (t) {
                vn(t, "xhr", no);
              })(t),
              (function (t) {
                vn(t, "input", Ma);
              })(t),
              (function (t) {
                vn(t, "preconnect", ka);
              })(t);
          }
          function Ca(t) {
            Bt(!t.getParent()),
              (function (t, i) {
                (function (t) {
                  dn(t, "url", Hh, !0);
                })(t),
                  (function (t) {
                    dn(t, "templates", Uh);
                  })(t),
                  dn(t, "documentInfo", Fo),
                  (function (t) {
                    dn(t, "cid", ko);
                  })(t),
                  (function (t) {
                    dn(t, "viewer", ia, !0);
                  })(t),
                  (function (t) {
                    dn(t, "viewport", Aa, !0);
                  })(t),
                  (function (t) {
                    dn(t, "hidden-observer", Bo);
                  })(t),
                  (function (t) {
                    dn(t, "history", Qo);
                  })(t),
                  (function (t) {
                    dn(t, "resources", Ph);
                  })(t),
                  (function (t) {
                    dn(t, "owners", yh);
                  })(t),
                  (function (t) {
                    dn(t, "mutator", eh);
                  })(t),
                  (function (t) {
                    dn(t, "url-replace", function (t) {
                      return new Qh(t, new Xh(t));
                    });
                  })(t),
                  (function (t) {
                    dn(t, "action", Du, !0);
                  })(t),
                  (function (t) {
                    dn(t, "standard-actions", Sh, !0);
                  })(t),
                  (function (t) {
                    dn(
                      t,
                      "storage",
                      function () {
                        var i = sr(t),
                          n = parseInt(i.getParam("storage"), 10)
                            ? new Nh(i)
                            : new Ch(t.win);
                        return new kh(t, i, n).Cu();
                      },
                      !0
                    );
                  })(t),
                  (function (t) {
                    dn(t, fh, mh, !0);
                  })(t),
                  (function (t) {
                    t.whenExtensionsKnown().then(function () {
                      t.declaresExtension("fo-form") &&
                        t.getRootNode().addEventListener("submit", Pa, !0);
                    });
                  })(t),
                  dn(t, "loadingIndicator", ih);
              })(t);
          }
          function Na(t) {
            return t.waitForBodyOpen().then(function () {
              var i,
                n,
                r = t.getBody(),
                e =
                  ((i = r),
                  (n = function () {
                    return !!r.firstElementChild;
                  }),
                  new Promise(function (t) {
                    bi(i, n, t);
                  }));
              return ir(t.win)
                .timeoutPromise(2e3, e)
                .then(
                  function () {
                    return "fo-STORY" === r.firstElementChild.tagName;
                  },
                  function () {
                    return !1;
                  }
                );
            });
          }
          var Da = ["fo-AD", "fo-ANALYTICS", "fo-PIXEL", "fo-AD-EXIT"];
          function ja(t) {
            if (null == t) return 0;
            var i = (function (t) {
                for (var i = t; null != (t = t.parentNode); )
                  t.nodeName.startsWith("fo-") && (i = t);
                return i;
              })(t),
              n = i.nodeName;
            return "IMG" === n || "fo-img" === n
              ? 1
              : "VIDEO" === n || "fo-VIDEO" === n
              ? 2
              : "fo-CAROUSEL" === n
              ? 8
              : "fo-BASE-CAROUSEL" === n
              ? 16
              : "fo-AD" === n
              ? 4
              : !n.startsWith("fo-") && i.textContent
              ? 32
              : 0;
          }
          var Ua = (function () {
            function t(t) {
              var i = this;
              (this.win = t),
                (this.ed = so(lt(t, 16))),
                (this.sd = []),
                (this.od =
                  t.performance.timeOrigin ||
                  t.performance.timing.navigationStart),
                (this.Ui = null),
                (this.ne = null),
                (this.bi = null),
                (this.ud = null),
                (this.ad = !1),
                (this.hd = !1),
                (this.fd = A()),
                (this.ld = void 0),
                (this.pd = new mr()),
                (this.dd = 0),
                (this.md = []),
                (this.vd = 0);
              var n =
                (this.win.PerformanceObserver &&
                  this.win.PerformanceObserver.supportedEntryTypes) ||
                [];
              if (
                (n.includes("paint") ||
                  this.pd.rejectSignal(
                    "fcp",
                    qt().createExpectedError(
                      "First Contentful Paint not supported"
                    )
                  ),
                (this.gd = n.includes("layout-shift")),
                !this.gd)
              ) {
                var r = qt().createExpectedError(
                  "Cumulative Layout Shift not supported"
                );
                this.pd.rejectSignal(Bi, r), this.pd.rejectSignal(Wi, r);
              }
              (this.bd = n.includes("first-input")),
                this.bd ||
                  this.pd.rejectSignal(
                    "fid",
                    qt().createExpectedError("First Input Delay not supported")
                  ),
                (this.yd = n.includes("largest-contentful-paint")),
                this.yd ||
                  this.pd.rejectSignal(
                    "lcp",
                    qt().createExpectedError(
                      "Largest Contentful Paint not supported"
                    )
                  ),
                (this.wd = n.includes("navigation")),
                (this.Id = this.Id.bind(this)),
                this.addEnabledExperiment("rtv-" + Mt(this.win).rtvVersion),
                sn(t.document).then(function () {
                  i.tick("dr"), i.flush();
                }),
                un(t.document).then(function () {
                  return i.Sd();
                }),
                this.jd(),
                (this.xd = !1),
                (this.Ad = mt(
                  t,
                  function () {
                    i.kd();
                  },
                  6e3
                ));
            }
            var i = t.prototype;
            return (
              (i.coreServicesAvailable = function () {
                var t = this,
                  i = this.win.document.documentElement;
                (this.Ui = zn(i)),
                  (this.ne = sr(i)),
                  (this.bi = Zn(i)),
                  (this.ud = Bn(this.Ui)),
                  (this.hd =
                    this.ne.isEmbedded() && "1" === this.ne.getParam("csi")),
                  this.Ui.onVisibilityChanged(this.flush.bind(this)),
                  this.Ed();
                var n = this.ne.whenMessagingReady();
                return (
                  this.Ui.whenFirstVisible().then(function () {
                    t.tick("ofv"), t.flush();
                  }),
                  (this.yd || this.gd) && this.Ui.onVisibilityChanged(this.Id),
                  n
                    ? n
                        .then(function () {
                          t.tickDelta("msr", t.win.performance.now()),
                            t.tick("timeOrigin", void 0, t.od);
                          var i = t.Ui.getMetaByName("fo-usqp");
                          return (
                            i &&
                              i.split(",").forEach(function (i) {
                                t.addEnabledExperiment("ssr-" + i);
                              }),
                            t.Od()
                          );
                        })
                        .then(function () {
                          (t.ad = !0), t._d(), t.flush();
                        })
                    : h()
                );
              }),
              (i.Od = function () {
                var t = this;
                return Na(Hn(this.win).getSingleDoc()).then(function (i) {
                  i && t.addEnabledExperiment("story");
                });
              }),
              (i.Sd = function () {
                this.tick("ol"), this.flush();
              }),
              (i.jd = function () {
                var t = this;
                if ("inabox" !== Mt(this.win).runtime) {
                  var i = !1,
                    n = !1,
                    r = !1,
                    e = !1,
                    s = function (s) {
                      if ("first-paint" != s.name || i)
                        if ("first-contentful-paint" != s.name || n)
                          if ("first-input" !== s.entryType || r)
                            "layout-shift" === s.entryType
                              ? s.hadRecentInput || (t.Pd(s), (t.vd += s.value))
                              : "largest-contentful-paint" === s.entryType
                              ? t.Td(s)
                              : "navigation" != s.entryType ||
                                e ||
                                ([
                                  "domComplete",
                                  "domContentLoadedEventEnd",
                                  "domContentLoadedEventStart",
                                  "domInteractive",
                                  "loadEventEnd",
                                  "loadEventStart",
                                  "requestStart",
                                  "responseStart",
                                ].forEach(function (i) {
                                  return t.tick(i, s[i]);
                                }),
                                (e = !0));
                          else {
                            var u = s.processingStart - s.startTime;
                            t.tickDelta("fid", u), (r = !0);
                          }
                        else {
                          var o = s.startTime + s.duration;
                          t.tickDelta("fcp", o),
                            t.tickSinceVisible("fcpv", o),
                            (n = !0);
                        }
                      else t.tickDelta("fp", s.startTime + s.duration), (i = !0);
                    },
                    u = [];
                  this.win.PerformancePaintTiming &&
                    (this.win.performance.getEntriesByType("paint").forEach(s),
                    u.push("paint")),
                    this.bd && this.Md(s, { type: "first-input", buffered: !0 }),
                    this.gd && this.Md(s, { type: "layout-shift", buffered: !0 }),
                    this.yd &&
                      this.Md(s, {
                        type: "largest-contentful-paint",
                        buffered: !0,
                      }),
                    this.wd && this.Md(s, { type: "navigation", buffered: !0 }),
                    u.length > 0 && this.Md(s, { entryTypes: u });
                }
              }),
              (i.Md = function (t, i) {
                var n = this;
                try {
                  new this.win.PerformanceObserver(function (i) {
                    i.getEntries().forEach(t), n.flush();
                  }).observe(i);
                } catch (t) {
                  qt().warn("Performance", t);
                }
              }),
              (i.Rd = function () {
                var t = this.Ui.getVisibilityState();
                return t === vr || t === cr;
              }),
              (i.Id = function () {
                this.Rd() && (this.Cd(), this.kd());
              }),
              (i.Nd = function () {
                if (!this.xd) {
                  this.xd = !0;
                  var t = this.win,
                    i = parseInt(
                      Or(t, t.document.body).getPropertyValue(
                        "--google-font-exp"
                      ),
                      10
                    );
                  i >= 0 &&
                    this.addEnabledExperiment("google-font-exp=".concat(i));
                }
              }),
              (i.Cd = function () {
                this.gd && (this.Nd(), this.zd());
              }),
              (i.Pd = function (t) {
                if (this.Ui && !this.Rd()) {
                  var i = this.md;
                  if (i.length > 0) {
                    var n = i[0],
                      r = i[i.length - 1];
                    if (
                      t.startTime - r.startTime < 1e3 &&
                      t.startTime - n.startTime < 5e3
                    )
                      return void i.push(t);
                    this.kd();
                  }
                  i.push(t), this.Ad();
                }
              }),
              (i.kd = function () {
                for (
                  var t,
                    i = this.md,
                    n = this.pd.get(Bi),
                    r = 0,
                    e = 0,
                    s = o(i, !0);
                  !(t = s()).done;
  
                ) {
                  var u = t.value;
                  if (u.sources)
                    for (var h, a = o(u.sources, !0); !(h = a()).done; )
                      r |= ja(h.value.node);
                  e += u.value;
                }
                (i.length = 0),
                  this.Nd(),
                  (null == n || e > n) &&
                    (this.pd.reset(Bi),
                    this.pd.reset($i),
                    this.tickDelta(Bi, e),
                    this.tickDelta($i, r),
                    this.flush());
              }),
              (i.zd = function () {
                0 === this.dd
                  ? (this.tickDelta(Wi, this.vd), this.flush(), (this.dd = 1))
                  : 1 === this.dd &&
                    (this.tickDelta("cls-2", this.vd),
                    this.flush(),
                    (this.dd = 2));
              }),
              (i.Td = function (t) {
                var i = t.element,
                  n = t.startTime,
                  r = ja(i);
                this.tickDelta("lcpt", r),
                  this.tickDelta("lcp", n),
                  this.tickSinceVisible("lcpv", n),
                  this.flush();
              }),
              (i.Ed = function () {
                var t = this,
                  i = !this.Ui.hasBeenVisible(),
                  n = -1;
                this.Ui.whenFirstVisible().then(function () {
                  (n = t.win.performance.now()), t.mark("visible");
                }),
                  this.Dd().then(function () {
                    if (i) {
                      var r = n > -1 ? t.win.performance.now() - n : 0;
                      t.Ui.whenFirstVisible().then(function () {
                        t.tickDelta(Yi, r);
                      }),
                        t.Ld(r),
                        t.mark(Yi);
                    } else t.tick(Yi), t.Ld(t.win.performance.now() - n);
                    t.flush();
                  });
              }),
              (i.Dd = function () {
                var t = this;
                return this.bi.whenFirstPass().then(function () {
                  var i,
                    n = t.win.document.documentElement,
                    r = or(n).getSize();
                  return (
                    ki(0, 0, r.width, r.height),
                    (i = n),
                    t.win,
                    (function (t, i) {
                      var n = zn(t);
                      return n
                        .signals()
                        .whenSignal(ks)
                        .then(function () {
                          var t = Zn(n)
                            .get()
                            .filter(function (t) {
                              return !(
                                !t.prerenderAllowed() ||
                                Da.includes(t.element.tagName)
                              );
                            })
                            .map(function (t) {
                              return t.element;
                            });
                          return 0 === t.length
                            ? Promise.resolve([])
                            : new Promise(function (i) {
                                for (
                                  var r = n.win,
                                    e = new r.IntersectionObserver(
                                      function (t) {
                                        e.disconnect();
                                        for (
                                          var n = [], r = 0;
                                          r < t.length;
                                          r++
                                        ) {
                                          var s = t[r],
                                            u = s.isIntersecting,
                                            o = s.target;
                                          u && n.push(o);
                                        }
                                        i(n);
                                      },
                                      {
                                        root: Ii(r) ? r.document : null,
                                        threshold: 0.01,
                                      }
                                    ),
                                    s = 0;
                                  s < Math.min(t.length, 100);
                                  s++
                                )
                                  e.observe(t[s]);
                              }).then(function (t) {
                                return Promise.all(
                                  t.map(function (t) {
                                    return t.whenLoaded();
                                  })
                                );
                              });
                        });
                    })(i)
                  );
                });
              }),
              (i.tick = function (t, i, n) {
                Bt(null == i || null == n);
                var r,
                  e = { label: t };
                null != i
                  ? (e.delta = r = Math.max(i, 0))
                  : null != n
                  ? (e.value = n)
                  : (this.mark(t),
                    (r = this.win.performance.now()),
                    (e.value = this.od + r)),
                  this.win.dispatchEvent(
                    (function (t, i, n, r) {
                      var e = { detail: n };
                      if (
                        (Object.assign(e, void 0),
                        "function" == typeof t.CustomEvent)
                      )
                        return new t.CustomEvent(i, e);
                      var s = t.document.createEvent("CustomEvent");
                      return (
                        s.initCustomEvent(i, !!e.bubbles, !!e.cancelable, n), s
                      );
                    })(this.win, "perf", { label: t, delta: r })
                  ),
                  this.ad && this.hd
                    ? this.ne.sendMessage("tick", e)
                    : this.Ud(e),
                  this.pd.signal(t, r);
              }),
              (i.mark = function (t) {
                var i, n;
                null === (i = (n = this.win.performance).mark) ||
                  void 0 === i ||
                  i.call(n, t);
              }),
              (i.tickDelta = function (t, i) {
                this.tick(t, i);
              }),
              (i.tickSinceVisible = function (t, i) {
                var n,
                  r,
                  e = null == i ? this.win.performance.now() : i,
                  s = this.od + e,
                  u =
                    null !== (n = this.ne) && void 0 !== n && n.isEmbedded()
                      ? null === (r = this.Ui) || void 0 === r
                        ? void 0
                        : r.getFirstVisibleTime()
                      : this.od,
                  o = u ? Math.max(s - u, 0) : 0;
                this.tickDelta(t, o);
              }),
              (i.flush = function () {
                this.ad &&
                  this.hd &&
                  (null == this.ld && (this.ld = Object.keys(this.fd).join(",")),
                  this.ne.sendMessage(
                    "sendCsi",
                    {
                      foexp: this.ld,
                      canonicalUrl: this.ud.canonicalUrl,
                      eventid: this.ed,
                    },
                    !0
                  ));
              }),
              (i.addEnabledExperiment = function (t) {
                (this.fd[t] = !0), (this.ld = void 0);
              }),
              (i.Ud = function (t) {
                this.sd.length >= 50 && this.sd.shift(), this.sd.push(t);
              }),
              (i._d = function () {
                var t = this;
                this.ne &&
                  (this.hd
                    ? (this.sd.forEach(function (i) {
                        t.ne.sendMessage("tick", i);
                      }),
                      (this.sd.length = 0))
                    : (this.sd.length = 0));
              }),
              (i.Ld = function (t) {
                this.ne &&
                  this.ne.sendMessage("prerenderComplete", { value: t }, !0);
              }),
              (i.isPerformanceTrackingOn = function () {
                return this.hd;
              }),
              (i.getMetric = function (t) {
                return this.pd.whenSignal(t);
              }),
              t
            );
          })();
          function La(t) {
            var i = t.document;
            if (i.fonts && i.fonts.values)
              for (var n, r = i.fonts.values(); (n = r.next()); ) {
                var e = n.value;
                if (!e) return;
                "loading" == e.status &&
                  "display" in e &&
                  "auto" == e.display &&
                  (e.display = "swap");
              }
          }
          var za = (function () {
              function t(t, i) {
                (this.Xl = t),
                  (this.ws = i),
                  (this.tb = !1),
                  (this.ib = 0),
                  (this.nb = this.Xp.bind(this)),
                  (this.rb = this.Vp.bind(this)),
                  (this.eb = this.Zp.bind(this)),
                  (this.sb = this.ub.bind(this)),
                  this.Xl.addEventListener("touchstart", this.nb, !0);
              }
              var i = t.prototype;
              return (
                (i.cleanup = function () {
                  this.ob(),
                    this.Xl.removeEventListener("touchstart", this.nb, !0);
                }),
                (i.Xp = function (t) {
                  this.tb ||
                    !t.touches ||
                    1 != t.touches.length ||
                    this.ws.getScrollTop() > 0 ||
                    this.hb(t.touches[0].clientY);
                }),
                (i.hb = function (t) {
                  (this.tb = !0),
                    (this.ib = t),
                    this.Xl.addEventListener("touchmove", this.rb, !0),
                    this.Xl.addEventListener("touchend", this.eb, !0),
                    this.Xl.addEventListener("touchcancel", this.sb, !0);
                }),
                (i.ob = function () {
                  (this.tb = !1),
                    (this.ib = 0),
                    this.Xl.removeEventListener("touchmove", this.rb, !0),
                    this.Xl.removeEventListener("touchend", this.eb, !0),
                    this.Xl.removeEventListener("touchcancel", this.sb, !0);
                }),
                (i.Vp = function (t) {
                  if (this.tb) {
                    var i = t.touches[0].clientY - this.ib;
                    i > 0 && t.preventDefault(), 0 != i && this.ob();
                  }
                }),
                (i.Zp = function (t) {
                  this.ob();
                }),
                (i.ub = function (t) {
                  this.ob();
                }),
                t
              );
            })(),
            Ha = ["fo-ad", "fo-embed", "fo-video"],
            Ga = "extensions",
            Va = "0.1",
            Fa = "latest",
            qa = "__fo_EXT_LDR",
            Ba = (function () {
              function t(t) {
                (this.win = t),
                  (this.ac = Hn(t)),
                  (this.Xc = {}),
                  (this.Qc = null),
                  (this.Zc = null),
                  (this.tf = null);
              }
              var i = t.prototype;
              return (
                (i.registerExtension = function (t, i, n, r, e) {
                  var s,
                    u = n ? this.Xc[Ya(t, Fa)] : null,
                    o = this.if(
                      t,
                      i,
                      null === (s = null == u ? void 0 : u.auto) ||
                        void 0 === s ||
                        s
                    );
                  if (((o.latest = n), !o.loaded)) {
                    n && (this.Xc[Ya(t, Fa)] = o);
                    try {
                      var h, a;
                      (this.Qc = t),
                        (this.Zc = i),
                        (this.tf = n),
                        r(e, e._),
                        (o.loaded = !0),
                        null === (h = o.resolve) ||
                          void 0 === h ||
                          h.call(o, o.extension),
                        null == u ||
                          null === (a = u.resolve) ||
                          void 0 === a ||
                          a.call(u, o.extension);
                    } catch (t) {
                      var f, c;
                      throw (
                        ((o.error = t),
                        null === (f = o.reject) || void 0 === f || f.call(o, t),
                        null == u ||
                          null === (c = u.reject) ||
                          void 0 === c ||
                          c.call(u, t),
                        t)
                      );
                    } finally {
                      (this.Qc = null), (this.Zc = null), (this.tf = null);
                    }
                  }
                }),
                (i.waitForExtension = function (t, i) {
                  var n = this.nf(this.if(t, i));
                  return ir(this.win)
                    .timeoutPromise(16e3, n)
                    .catch(function (i) {
                      if (!i.message.includes("timeout")) throw i;
                      return (
                        Vt().error(
                          Ga,
                          "Waited over 16s to load extension ".concat(t, ".")
                        ),
                        n
                      );
                    });
                }),
                (i.preloadExtension = function (t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Va;
                  "fo-embed" == t && (t = "fo-ad");
                  var n = this.if(t, i);
                  return this.rf(t, i, n), this.nf(n);
                }),
                (i.installExtensionForDoc = function (t, i) {
                  var n = this,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : Va,
                    e = t.getRootNode(),
                    s = e[qa];
                  return (
                    s || (s = e[qa] = A()),
                    s[i]
                      ? s[i]
                      : (t.declareExtension(i, r),
                        lu(t.win, i),
                        (s[i] = this.preloadExtension(i, r).then(function () {
                          return n.installExtensionInDoc(t, i, r);
                        })))
                  );
                }),
                (i.reloadExtension = function (t, i, n) {
                  var r = cn(this.win, t, i, n, !1),
                    e = this.Xc[Ya(t, i)];
                  return (
                    e && (Bt(!e.loaded && !e.error), (e.scriptPresent = !1)),
                    r.forEach(function (i) {
                      return i.setAttribute("i-fohtml-loaded-new-version", t);
                    }),
                    this.preloadExtension(t, i)
                  );
                }),
                (i.importUnwrapped = function (t, i) {
                  var n,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : Va,
                    e =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3],
                    s = cn(t, i, r, e),
                    u = s.length > 0 ? s[0] : null;
                  return (
                    u
                      ? (n = u.__fo_SCR_LOADED)
                      : ((n = (u = fn(this.win, i, r)).__fo_SCR_LOADED =
                          new Promise(function (t, i) {
                            (u.onload = t), (u.onerror = i);
                          })),
                        t.document.head.appendChild(u)),
                    n
                  );
                }),
                (i.loadElementClass = function (t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Va;
                  return this.preloadExtension(t, i).then(function (i) {
                    return Bt(i.elements[t]).implementationClass;
                  });
                }),
                (i.addElement = function (t, i, n) {
                  var r = this;
                  (this.ef(t).extension.elements[t] = {
                    implementationClass: i,
                    css: n,
                  }),
                    this.addDocFactory(function (e) {
                      r.sf(e, t, i, n);
                    });
                }),
                (i.addTemplate = function (t, i) {
                  this.addDocFactory(function (n) {
                    !(function (t, i, n) {
                      pn(t, "templates").Ju(i, n);
                    })(n, t, i);
                  });
                }),
                (i.sf = function (t, i, n, r) {
                  var e = this;
                  r
                    ? qe(
                        t,
                        r,
                        function () {
                          e.uf(t.win, i, n);
                        },
                        !1,
                        i
                      )
                    : this.uf(t.win, i, n);
                }),
                (i.uf = function (t, i, n) {
                  (function (t, i, n) {
                    var r = (function (t, i) {
                      if (
                        i.requiresShadowDom() &&
                        !t.Element.prototype.attachShadow
                      )
                        return $n(t).importUnwrapped(
                          t,
                          "fo-shadow-dom-polyfill"
                        );
                    })(t, n);
                    r
                      ? r.then(function () {
                          return au(t, i, n);
                        })
                      : au(t, i, n);
                  })(t, i, n),
                    vn(t, i, Wa);
                }),
                (i.addService = function (t, i) {
                  this.ef(t).extension.services.push({
                    serviceName: t,
                    serviceClass: i,
                  }),
                    this.addDocFactory(function (n) {
                      dn(n, t, i, !0);
                    });
                }),
                (i.addDocFactory = function (t, i) {
                  var n = this.ef(i);
                  if (
                    (n.docFactories.push(t), this.Qc && this.ac.isSingleDoc())
                  ) {
                    var r = this.ac.getfoDoc(this.win.document),
                      e = this.Qc,
                      s = this.Zc,
                      u = this.tf || !1;
                    (r.declaresExtension(e, s) ||
                      (u && r.declaresExtension(e, Fa)) ||
                      n.auto) &&
                      t(r);
                  }
                }),
                (i.preinstallEmbed = function (t, i) {
                  var n = this.win,
                    r = t.win;
                  !(function (t, i) {
                    vu(t, i, "fo-img"), vu(t, i, "fo-pixel");
                  })(n, r),
                    $a(r),
                    i.forEach(function (i) {
                      var n = i.extensionId,
                        e = i.extensionVersion;
                      t.declareExtension(n, e), Ha.includes(n) || lu(r, n);
                    });
                }),
                (i.installExtensionsInDoc = function (t, i) {
                  var n = this;
                  return Promise.all(
                    i.map(function (i) {
                      var r = i.extensionId,
                        e = i.extensionVersion;
                      return n.installExtensionInDoc(t, r, e);
                    })
                  );
                }),
                (i.installExtensionInDoc = function (t, i) {
                  var n = this,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : Va;
                  return (
                    t.declareExtension(i, r),
                    this.nf(this.if(i, r)).then(function () {
                      n.if(i, r).docFactories.forEach(function (n) {
                        try {
                          n(t);
                        } catch (t) {
                          d("Doc factory failed: ", t, i);
                        }
                      });
                    })
                  );
                }),
                (i.if = function (t, i, n) {
                  var r = Ya(t, i),
                    e = this.Xc[r];
                  return (
                    e ||
                      ((e = {
                        version: i,
                        latest: i == Fa,
                        extension: { elements: {}, services: [] },
                        auto: n || !1,
                        docFactories: [],
                        promise: void 0,
                        resolve: void 0,
                        reject: void 0,
                        loaded: void 0,
                        error: void 0,
                        scriptPresent: void 0,
                      }),
                      (this.Xc[r] = e)),
                    e
                  );
                }),
                (i.ef = function (t) {
                  return (
                    this.Qc || qt().error(Ga, "unknown extension for ", t),
                    this.if(this.Qc || "_UNKNOWN_", this.Zc || "")
                  );
                }),
                (i.nf = function (t) {
                  if (!t.promise)
                    if (t.loaded) t.promise = Promise.resolve(t.extension);
                    else if (t.error) t.promise = Promise.reject(t.error);
                    else {
                      var i = new a();
                      (t.promise = i.promise),
                        (t.resolve = i.resolve),
                        (t.reject = i.reject);
                    }
                  return t.promise;
                }),
                (i.rf = function (t, i, n) {
                  if (this.hf(t, i, n)) {
                    var r = fn(this.win, t, i);
                    this.win.document.head.appendChild(r), (n.scriptPresent = !0);
                  }
                }),
                (i.hf = function (t, i, n) {
                  if (n.loaded || n.error) return !1;
                  if (void 0 === n.scriptPresent) {
                    var r = cn(this.win, t, i, n.latest);
                    n.scriptPresent = r.length > 0;
                  }
                  return !n.scriptPresent;
                }),
                t
              );
            })();
          function $a(t) {
            Ha.forEach(function (i) {
              lu(t, i);
            });
          }
          function Wa() {
            return {};
          }
          function Ya(t, i) {
            return "".concat(t, ":").concat(i);
          }
          var Ka,
            Ja = "-shadowcsshost",
            Xa = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
            Qa =
              (new RegExp("(" + Ja + Xa, "gim"),
              new RegExp("(-shadowcsscontext" + Xa, "gim"),
              new RegExp(Ja, "gim"),
              new RegExp("-shadowcsscontext", "gim"),
              "html{overflow-x:hidden!important}html.i-fohtml-fie{height:100%!important;width:100%!important}html:not([fo4ads]),html:not([fo4ads]) body{height:auto!important}html:not([fo4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-fohtml-singledoc.i-fohtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-fohtml-fie>body,html.i-fohtml-singledoc>body{overflow:visible!important}html.i-fohtml-fie:not(.i-fohtml-inabox)>body,html.i-fohtml-singledoc:not(.i-fohtml-inabox)>body{position:relative!important}html.i-fohtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-fohtml-ios-embed{overflow-y:auto!important;position:static}#i-fohtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-fohtml-ios-embed.i-fohtml-ios-overscroll,html.i-fohtml-ios-embed.i-fohtml-ios-overscroll>#i-fohtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-fohtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-fohtml-wrapper+body{visibility:visible}#i-fohtml-wrapper+body .i-fohtml-lightbox-element,#i-fohtml-wrapper+body[i-fohtml-lightbox]{visibility:hidden}#i-fohtml-wrapper+body[i-fohtml-lightbox] .i-fohtml-lightbox-element{visibility:visible}#i-fohtml-wrapper.i-fohtml-scroll-disabled,.i-fohtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}fo-instagram{padding:54px 0px 0px!important;background-color:#fff}fo-iframe iframe{box-sizing:border-box!important}[fo-access][fo-access-hide]{display:none}[subscriptions-dialog],body:not(.i-fohtml-subs-ready) [subscriptions-action],body:not(.i-fohtml-subs-ready) [subscriptions-section]{display:none!important}fo-experiment,fo-live-list>[update]{display:none}fo-list[resizable-children]>.i-fohtml-loading-container.fo-hidden{display:none!important}fo-list [fetch-error],fo-list[load-more] [load-more-button],fo-list[load-more] [load-more-end],fo-list[load-more] [load-more-failed],fo-list[load-more] [load-more-loading]{display:none}fo-list[diffable] div[role=list]{display:block}fo-story-page,fo-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}fo-story[standalone]{background-color:#000!important;position:relative!important}fo-story-page{background-color:#757575}fo-story .fo-active>div,fo-story .i-fohtml-loader-background{display:none!important}fo-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}fo-autocomplete{position:relative!important;display:inline-block!important}fo-autocomplete>input,fo-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-fohtml-autocomplete-results,fo-autocomplete>input,fo-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[fo-fx^=fly-in]{visibility:hidden}fo-script[nodom],fo-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/fodoc.css*/"),
            Za =
              "[hidden]{display:none!important}.i-fohtml-element{display:inline-block}.i-fohtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-fohtml-element){display:none!important}.i-fohtml-layout-fixed,[layout=fixed][width][height]:not(.i-fohtml-layout-fixed){display:inline-block;position:relative}.i-fohtml-layout-responsive,[layout=responsive][width][height]:not(.i-fohtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-fohtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-fohtml-layout-responsive){display:block;position:relative}.i-fohtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-fohtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-fohtml-layout-intrinsic .i-fohtml-sizer{max-width:100%}.i-fohtml-intrinsic-sizer{max-width:100%;display:block!important}.i-fohtml-layout-container,.i-fohtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-fohtml-layout-fixed-height){display:block;position:relative}.i-fohtml-layout-fill,.i-fohtml-layout-fill.i-fohtml-notbuilt,[layout=fill]:not(.i-fohtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-fohtml-layout-flex-item,[layout=flex-item]:not(.i-fohtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-fohtml-layout-fluid{position:relative}.i-fohtml-layout-size-defined{overflow:hidden!important}.i-fohtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-fohtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-fohtml-sizer.i-fohtml-disable-ar{display:none!important}}.i-fohtml-blurry-placeholder,.i-fohtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-fohtml-layout-size-defined .i-fohtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-fohtml-replaced-content,.i-fohtml-screen-reader{padding:0!important;border:none!important}.i-fohtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-fohtml-screen-reader~.i-fohtml-screen-reader{left:8px!important}.i-fohtml-screen-reader~.i-fohtml-screen-reader~.i-fohtml-screen-reader{left:12px!important}.i-fohtml-screen-reader~.i-fohtml-screen-reader~.i-fohtml-screen-reader~.i-fohtml-screen-reader{left:16px!important}.i-fohtml-unresolved{position:relative;overflow:hidden!important}.i-fohtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-fohtml-notbuilt,[layout]:not(.i-fohtml-element),[width][height][heights]:not([layout]):not(.i-fohtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-fohtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-fohtml-notbuilt:not(.i-fohtml-layout-container)>*,[layout]:not([layout=container]):not(.i-fohtml-element)>*,[width][height][heights]:not([layout]):not(.i-fohtml-element)>*,[width][height][sizes]:not([layout]):not(.i-fohtml-element)>*{display:none}fo-img:not(.i-fohtml-element)[i-fohtml-ssr]>img.i-fohtml-fill-content{display:block}.i-fohtml-notbuilt:not(.i-fohtml-layout-container),[layout]:not([layout=container]):not(.i-fohtml-element),[width][height][heights]:not([layout]):not(.i-fohtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-fohtml-element){color:transparent!important;line-height:0!important}.i-fohtml-ghost{visibility:hidden!important}.i-fohtml-element>[placeholder],[layout]:not(.i-fohtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-fohtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-fohtml-element)>[placeholder]{display:block;line-height:normal}.i-fohtml-element>[placeholder].fo-hidden,.i-fohtml-element>[placeholder].hidden{visibility:hidden}.i-fohtml-element:not(.fo-notsupported)>[fallback],.i-fohtml-layout-container>[placeholder].fo-hidden,.i-fohtml-layout-container>[placeholder].hidden{display:none}.i-fohtml-layout-size-defined>[fallback],.i-fohtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}fo-img[i-fohtml-ssr]:not(.i-fohtml-element)>[placeholder]{z-index:auto}.i-fohtml-notbuilt>[placeholder]{display:block!important}.i-fohtml-hidden-by-media-query{display:none!important}.i-fohtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-fohtml-element-error:before{content:attr(error-message)}i-fo-scroll-container,i-fohtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-fo-scroll-container.fo-active,i-fohtml-scroll-container.fo-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-fohtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-fohtml-notbuilt>.i-fohtml-loading-container{display:block!important}.i-fohtml-loading-container.fo-hidden{visibility:hidden}.i-fohtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-fohtml-layout-size-defined>[overflow]{position:absolute}.i-fohtml-element>[overflow].fo-visible{visibility:visible}template{display:none!important}.fo-border-box,.fo-border-box *,.fo-border-box :after,.fo-border-box :before{box-sizing:border-box}fo-pixel{display:none!important}fo-analytics,fo-auto-ads,fo-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-fohtml-fie>fo-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}fo-accordion{display:block!important}@media (min-width:1px){:where(fo-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(fo-accordion>section)>:last-child{margin:0}}fo-accordion>section{float:none!important}fo-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}fo-accordion,fo-accordion>section{margin:0}fo-accordion:not(.i-fohtml-built)>section>:last-child{display:none!important}fo-accordion:not(.i-fohtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/foshared.css*/";
          (Ht = Lt),
            qt(),
            Vt(),
            (Ka = function (t, i, n) {
              Ps(i, n),
                i &&
                  t &&
                  tt(i.message) &&
                  !(i.message.indexOf(Q) >= 0) &&
                  (function (t, i) {
                    if (Hn(i).isSingleDoc()) {
                      var n = { errorName: t.name, errorMessage: t.message };
                      !(function (t, i) {
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          r =
                            !(arguments.length > 3 && void 0 !== arguments[3]) ||
                            arguments[3];
                        Gn(t).then(function (e) {
                          e && e.triggerEventForTarget(t, i, n, r);
                        });
                      })(
                        (function (t) {
                          var i = Hn(t).getSingleDoc().getRootNode();
                          return i.documentElement || i.body || i;
                        })(i),
                        "user-error",
                        n,
                        !1
                      );
                    }
                  })(i, t);
            }.bind(null, self)),
            (self.__fo_REPORT_ERROR = Ka);
          var tf,
            nf = "runtime";
          function rf(t, i) {
            if (t.__fo_TAG) return h();
            t.__fo_TAG = !0;
            var n = t.fo || [];
            vn(t, "extensions", Ba);
            var r = $n(t);
            Ra(t),
              $a(t),
              (t.fo = { win: t, _: t.fo ? t.fo._ : void 0 }),
              (t.fo.config = Pt),
              (t.fo.BaseElement = Ys),
              (t.fo.registerElement = r.addElement.bind(r)),
              (t.fo.registerTemplate = r.addTemplate.bind(r)),
              (t.fo.registerServiceForDoc = r.addService.bind(r)),
              (t.fo.isExperimentOn = ke.bind(null, t)),
              (t.fo.toggleExperiment = Re.bind(null, t)),
              (t.fo.setLogLevel = Rt.bind(null)),
              (t.fo.setTickFunction = function (t, i) {});
            var e = i(t, r);
            function s(i) {
              !(function (t, i, n) {
                "function" == typeof i || "high" == i.p
                  ? h().then(n)
                  : ((n.displayName = i.n), Gs(t.document, n));
              })(t, i, function () {
                e.then(function () {
                  "function" == typeof i
                    ? i(t.fo, t.fo.Sf)
                    : r.registerExtension(i.n, i.ev, i.l, i.f, t.fo);
                });
              });
            }
            for (var u = 0; u < n.length; u++) {
              var o = n[u];
              if (ef(t, o)) n.splice(u--, 1);
              else if ("function" == typeof o || "high" == o.p) {
                try {
                  s(o);
                } catch (t) {
                  qt().error(nf, "Extension failed: ", t, o.n);
                }
                n.splice(u--, 1);
              }
            }
            !(function (t, i) {
              t.document.body &&
              !(function (t) {
                return Fe(t).length > 0;
              })(t)
                ? ir(t).delay(i, 1)
                : i();
            })(t, function () {
              t.fo.push = function (i) {
                ef(t, i) || s(i);
              };
              for (var i = 0; i < n.length; i++) {
                var r = n[i];
                if (!ef(t, r))
                  try {
                    s(r);
                  } catch (t) {
                    qt().error(nf, "Extension failed: ", t, r.n);
                  }
              }
              n.length = 0;
            }),
              t.fo.push || (t.fo.push = n.push.bind(n)),
              Xn(t).isIos() &&
                wr(t.document.documentElement, "cursor", "pointer");
            var a = $n(t);
            return (
              Gi(t) && a.preloadExtension("fo-resize-observer-polyfill"),
              Di(t) && a.preloadExtension("fo-intersection-observer-polyfill"),
              e
            );
          }
          function ef(t, i) {
            return (
              "function" != typeof i &&
              (!!i.m ||
                ("2201141909003" != i.v &&
                  ($n(t).reloadExtension(i.n, i.ev, i.l), !0)))
            );
          }
          function sf(t, i) {
            Gs(self.document, function () {
              Ra(self),
                Ca(t),
                i.coreServicesAvailable(),
                (function (t) {
                  var i = new a(),
                    n = i.promise,
                    r = i.resolve;
                  sh = ir(t)
                    .timeoutPromise(8e3, n, "TrackImpressionPromise timeout")
                    .catch(function (t) {
                      qt().warn("IMPRESSION", t);
                    });
                  var e = sr(t.document.documentElement),
                    s = e.isTrustedViewer(),
                    u = e.getReferrerUrl().then(function (t) {
                      return (function (t) {
                        var i = rs(t);
                        return (
                          "https:" == i.protocol &&
                          oh.some(function (t) {
                            return t.test(i.hostname);
                          })
                        );
                      })(t);
                    });
                  Promise.all([s, u]).then(function (i) {
                    var n = i[0],
                      e = i[1];
                    if (n || e || ke(t, "alp")) {
                      var s = (function (t) {
                          var i = sr(t.document.documentElement);
                          return i.getParam("replaceUrl")
                            ? i.hasCapability("replaceUrl")
                              ? i
                                  .sendMessageAwaitResponse(
                                    "getReplaceUrl",
                                    void 0
                                  )
                                  .then(
                                    function (t) {
                                      t && "object" == p(t)
                                        ? i.replaceUrl(t.replaceUrl || null)
                                        : qt().warn(
                                            "IMPRESSION",
                                            "get invalid replaceUrl response"
                                          );
                                    },
                                    function (t) {
                                      qt().warn(
                                        "IMPRESSION",
                                        "Error request replaceUrl from viewer",
                                        t
                                      );
                                    }
                                  )
                              : (i.replaceUrl(i.getParam("replaceUrl") || null),
                                h())
                            : h();
                        })(t),
                        u = (function (t) {
                          var i = zn(t.document.documentElement),
                            n = sr(i).getParam("click");
                          return n
                            ? 0 != n.indexOf("https://")
                              ? (Vt().warn(
                                  "IMPRESSION",
                                  "click fragment param should start with https://. Found ",
                                  n
                                ),
                                h())
                              : (_r.getLocation(t).hash &&
                                  (_r.getLocation(t).hash = ""),
                                i
                                  .whenFirstVisible()
                                  .then(function () {
                                    return (function (t, i) {
                                      return hr(t)
                                        .fetchJson(i, { credentials: "include" })
                                        .then(function (t) {
                                          return 204 == t.status
                                            ? null
                                            : t.json();
                                        });
                                    })(t, n);
                                  })
                                  .then(function (i) {
                                    !(function (t, i) {
                                      if (i) {
                                        var n = i.location,
                                          r = i.tracking_url || n;
                                        if (
                                          (r && !ls(r) && (new Image().src = r),
                                          n)
                                        ) {
                                          if (!t.history.replaceState) return;
                                          var e = sr(t.document.documentElement),
                                            s = os(
                                              _r.getLocation(t).href,
                                              gt(rs(n).search)
                                            );
                                          t.history.replaceState(null, "", s),
                                            e.maybeUpdateFragmentForCct();
                                        }
                                      }
                                    })(t, i);
                                  })
                                  .catch(function (t) {
                                    Vt().warn(
                                      "IMPRESSION",
                                      "Error on request clickUrl: ",
                                      t
                                    );
                                  }))
                            : h();
                        })(t);
                      Promise.all([s, u]).then(
                        function () {
                          r();
                        },
                        function () {}
                      );
                    } else r();
                  });
                })(self);
            }),
              Gs(self.document, function () {
                rf(self, function (t) {
                  return (
                    (function (t) {
                      var i = t.document.documentElement,
                        n = Hn(t).getSingleDoc();
                      t.fo.fodoc = n;
                      var r = sr(i);
                      (t.fo.viewer = r),
                        Mt().development &&
                          ((t.fo.toggleRuntime = r.toggleRuntime.bind(r)),
                          (t.fo.resources = Zn(i)));
                      var e = or(i);
                      (t.fo.viewport = {}),
                        (t.fo.viewport.getScrollLeft = e.getScrollLeft.bind(e)),
                        (t.fo.viewport.getScrollWidth =
                          e.getScrollWidth.bind(e)),
                        (t.fo.viewport.getWidth = e.getWidth.bind(e));
                    })(t),
                    ((i = t).fo.installfodocServices = Ca.bind(null)),
                    (i.fo.combinedCss = Qa + Za),
                    yi(t.document).then(function () {
                      cu(t.fo.fodoc);
                    })
                  );
                  var i;
                });
              }),
              Gs(self.document, function () {
                !(function (t) {
                  !(function (t) {
                    du(t, pu, gu);
                  })(t),
                    (function (t) {
                      du(t, Au, Eu);
                    })(t),
                    (function (t) {
                      du(t, "fo-layout", yu);
                    })(t);
                })(self);
              }),
              Gs(self.document, function () {
                cu(t),
                  un(self.document).then(function () {
                    return uu();
                  });
              }),
              Gs(
                self.document,
                function () {
                  (function (t) {
                    var i = t.document.documentElement;
                    "0" == sr(i).getParam("p2r") &&
                      Xn(t).isChrome() &&
                      new za(t.document, or(i));
                  })(self),
                    (function (t) {
                      var i = t.win;
                      Iu(i.document) &&
                        t.isSingleDoc() &&
                        Vs(
                          t,
                          function () {
                            Na(t).then(function (n) {
                              n ||
                                $n(i).installExtensionForDoc(
                                  t,
                                  "fo-auto-lightbox"
                                );
                            });
                          },
                          10
                        );
                    })(t),
                    (function (t) {
                      var i = t.win;
                      Iu(i.document) &&
                        Xn(t.win).isStandalone() &&
                        Vs(
                          t,
                          function () {
                            $n(i)
                              .installExtensionForDoc(t, "fo-standalone")
                              .then(function () {
                                return Rn(
                                  t.getBody(),
                                  "standalone",
                                  "fo-standalone"
                                );
                              })
                              .then(function (t) {
                                return t.initialize();
                              });
                          },
                          10
                        );
                    })(t),
                    (function (t) {
                      var i = t.location.href;
                      if (!i.startsWith("about:")) {
                        var n = !1,
                          r = yt(t);
                        St(t, r) && (n = "0" !== r.validate),
                          n &&
                            (function (t, i) {
                              var n = t.createElement("script");
                              (n.src = i), _i(t, n);
                              var r = He(n).then(
                                function () {
                                  t.head.removeChild(n);
                                },
                                function () {}
                              );
                              return t.head.appendChild(n), r;
                            })(
                              t.document,
                              "".concat(Ot.cdn, "/v0/validator_wasm.js")
                            ).then(function () {
                              fo.validator.validateUrlAndLog(i, t.document);
                            });
                      }
                    })(self),
                    (function (t) {
                      Bt(t.defaultView);
                      var i = t.defaultView;
                      yi(t)
                        .then(function () {
                          return (function (t) {
                            var i = Fe(t).map(function (i) {
                              var n = (function (t, i) {
                                return In(t, i);
                              })(t, i).then(function (t) {
                                return t &&
                                  (function (t) {
                                    return "function" == typeof t.whenReady;
                                  })(t)
                                  ? t.whenReady().then(function () {
                                      return t;
                                    })
                                  : t;
                              });
                              return ir(t).timeoutPromise(
                                3e3,
                                n,
                                "Render timeout waiting for service ".concat(
                                  i,
                                  " to be ready."
                                )
                              );
                            });
                            return Promise.all(i);
                          })(i);
                        })
                        .catch(function (t) {
                          return d(t), [];
                        })
                        .then(function (n) {
                          ($e = !0),
                            t.body.getBoundingClientRect(),
                            Ye(t),
                            En(t).signals().signal(me),
                            n.length > 0 &&
                              Zn(t.documentElement).schedulePass(1, !0);
                          try {
                            var r = Jn(i);
                            r.tick("mbv"), r.flush();
                          } catch (t) {}
                        });
                    })(self.document),
                    (function (t) {
                      un(t).then(function () {
                        var i = t.defaultView;
                        if (i) {
                          var n = Qn(i),
                            r = Bn(t.documentElement),
                            e = zn(t);
                          n.url(e, r.sourceUrl), n.url(e, r.canonicalUrl);
                        }
                      });
                    })(self.document);
                },
                !0
              ),
              Gs(self.document, function () {
                i.tick("e_is"), Zn(t).foInitComplete(), i.flush();
              });
          }
          self.location && (self.location.originalHash = self.location.hash);
          try {
            !(function (t) {
              (t.onerror = Ts),
                t.addEventListener("unhandledrejection", function (t) {
                  !t.reason ||
                  (t.reason.message !== As &&
                    t.reason.message !== Es &&
                    "AbortError" !== t.reason.message)
                    ? Ps(t.reason || new Error("rejected promise " + t))
                    : t.preventDefault();
                });
            })(self),
              (function (t, i, n) {
                vn(t, "fodoc", function () {
                  return new Dr(t, !0, void 0);
                });
              })(self),
              (tf = Hn(self));
          } catch (t) {
            throw (We(self.document), t);
          }
          Gs(self.document, function () {
            var t = tf.getfoDoc(self.document);
            Ah(self), vn(self, "performance", Ua);
            var i = Jn(self);
            (function (t) {
              rn(t.document, function () {
                return (function (t) {
                  var i = 1500,
                    n = t.performance;
                  n &&
                    n.timing &&
                    n.timing.navigationStart &&
                    (i = Date.now() - n.timing.navigationStart);
                  var r = Math.max(1, 2100 - i);
                  t.setTimeout(function () {
                    La(t);
                    var i = t.document.styleSheets;
                    if (i) {
                      for (
                        var n = t.document.querySelectorAll(
                            'link[rel~="stylesheet"]:not([href^="'.concat(
                              si(Ot.cdn),
                              '"])'
                            )
                          ),
                          e = [],
                          s = 0;
                        s < n.length;
                        s++
                      ) {
                        for (var u = n[s], o = !1, h = 0; h < i.length; h++)
                          if (i[h].ownerNode == u) {
                            o = !0;
                            break;
                          }
                        o || e.push(u);
                      }
                      for (
                        var a = function (i) {
                            var n = e[i],
                              s = n.media || "all";
                            (n.media = "print"),
                              (n.onload = function () {
                                (n.media = s), La(t);
                              }),
                              n.setAttribute("i-fohtml-timeout", r),
                              n.parentNode.insertBefore(n, n.nextSibling);
                          },
                          f = 0;
                        f < e.length;
                        f++
                      )
                        a(f);
                    }
                  }, r);
                })(t);
              });
            })(self),
              i.tick("is"),
              qe(
                t,
                Qa + Za,
                function () {
                  return sf(t, i);
                },
                !0,
                "fo-runtime"
              );
          }),
            self.console &&
              (console.info || console.log).call(
                console,
                "Powered by fo ⚡ HTML – Version ".concat("2201141909003"),
                self.location.href
              ),
            self.document.documentElement.setAttribute(
              "fo-version",
              "2201141909003"
            );
        })();
  } catch (t) {
    throw (
      (setTimeout(function () {
        var t = document.body.style;
        (t.opacity = 1),
          (t.visibility = "visible"),
          (t.animation = "none"),
          (t.WebkitAnimation = "none;");
      }, 1e3),
      t)
    );
  }
