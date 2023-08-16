(async () => {
  function nS(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
          if (o !== "default" && !(o in e)) {
            const i = Object.getOwnPropertyDescriptor(r, o);
            i &&
              Object.defineProperty(
                e,
                o,
                i.get ? i : { enumerable: !0, get: () => r[o] },
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
    );
  }
  (function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
      n(r);
    new MutationObserver((r) => {
      for (const o of r)
        if (o.type === "childList")
          for (const i of o.addedNodes)
            i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(r) {
      const o = {};
      return (
        r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : r.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function n(r) {
      if (r.ep) return;
      r.ep = !0;
      const o = t(r);
      fetch(r.href, o);
    }
  })();
  function $h(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function Mh(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r() {
        if (this instanceof r) {
          var o = [null];
          o.push.apply(o, arguments);
          var i = Function.bind.apply(t, o);
          return new i();
        }
        return t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          n,
          r,
          o.get
            ? o
            : {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              },
        );
      }),
      n
    );
  }
  var ki = {},
    rS = {
      get exports() {
        return ki;
      },
      set exports(e) {
        ki = e;
      },
    },
    Xa = {},
    k = {},
    oS = {
      get exports() {
        return k;
      },
      set exports(e) {
        k = e;
      },
    },
    ye = {},
    Ei = Symbol.for("react.element"),
    iS = Symbol.for("react.portal"),
    aS = Symbol.for("react.fragment"),
    sS = Symbol.for("react.strict_mode"),
    lS = Symbol.for("react.profiler"),
    uS = Symbol.for("react.provider"),
    cS = Symbol.for("react.context"),
    dS = Symbol.for("react.forward_ref"),
    fS = Symbol.for("react.suspense"),
    pS = Symbol.for("react.memo"),
    hS = Symbol.for("react.lazy"),
    Lh = Symbol.iterator;
  function mS(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Lh && e[Lh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Fh = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Bh = Object.assign,
    jh = {};
  function co(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = jh),
      (this.updater = n || Fh);
  }
  (co.prototype.isReactComponent = {}),
    (co.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (co.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  function zh() {}
  zh.prototype = co.prototype;
  function dc(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = jh),
      (this.updater = n || Fh);
  }
  var fc = (dc.prototype = new zh());
  (fc.constructor = dc), Bh(fc, co.prototype), (fc.isPureReactComponent = !0);
  var Uh = Array.isArray,
    Dh = Object.prototype.hasOwnProperty,
    pc = { current: null },
    Wh = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Vh(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        Dh.call(t, r) && !Wh.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
      for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
      o.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
    return {
      $$typeof: Ei,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: pc.current,
    };
  }
  function gS(e, t) {
    return {
      $$typeof: Ei,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function hc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ei;
  }
  function vS(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Hh = /\/+/g;
  function mc(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? vS("" + e.key)
      : t.toString(36);
  }
  function Za(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
      switch (i) {
        case "string":
        case "number":
          a = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ei:
            case iS:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (o = o(a)),
        (e = r === "" ? "." + mc(a, 0) : r),
        Uh(o)
          ? ((n = ""),
            e != null && (n = e.replace(Hh, "$&/") + "/"),
            Za(o, t, n, "", function (u) {
              return u;
            }))
          : o != null &&
            (hc(o) &&
              (o = gS(
                o,
                n +
                  (!o.key || (a && a.key === o.key)
                    ? ""
                    : ("" + o.key).replace(Hh, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((a = 0), (r = r === "" ? "." : r + ":"), Uh(e)))
      for (var s = 0; s < e.length; s++) {
        i = e[s];
        var l = r + mc(i, s);
        a += Za(i, t, n, l, o);
      }
    else if (((l = mS(e)), typeof l == "function"))
      for (e = l.call(e), s = 0; !(i = e.next()).done; )
        (i = i.value), (l = r + mc(i, s++)), (a += Za(i, t, n, l, o));
    else if (i === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return a;
  }
  function Qa(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      Za(e, r, "", "", function (i) {
        return t.call(n, i, o++);
      }),
      r
    );
  }
  function yS(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var kt = { current: null },
    Ja = { transition: null },
    bS = {
      ReactCurrentDispatcher: kt,
      ReactCurrentBatchConfig: Ja,
      ReactCurrentOwner: pc,
    };
  (ye.Children = {
    map: Qa,
    forEach: function (e, t, n) {
      Qa(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Qa(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Qa(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!hc(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  }),
    (ye.Component = co),
    (ye.Fragment = aS),
    (ye.Profiler = lS),
    (ye.PureComponent = dc),
    (ye.StrictMode = sS),
    (ye.Suspense = fS),
    (ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bS),
    (ye.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var r = Bh({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((i = t.ref), (a = pc.current)),
          t.key !== void 0 && (o = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps;
        for (l in t)
          Dh.call(t, l) &&
            !Wh.hasOwnProperty(l) &&
            (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
      }
      var l = arguments.length - 2;
      if (l === 1) r.children = n;
      else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
        r.children = s;
      }
      return {
        $$typeof: Ei,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a,
      };
    }),
    (ye.createContext = function (e) {
      return (
        (e = {
          $$typeof: cS,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: uS, _context: e }),
        (e.Consumer = e)
      );
    }),
    (ye.createElement = Vh),
    (ye.createFactory = function (e) {
      var t = Vh.bind(null, e);
      return (t.type = e), t;
    }),
    (ye.createRef = function () {
      return { current: null };
    }),
    (ye.forwardRef = function (e) {
      return { $$typeof: dS, render: e };
    }),
    (ye.isValidElement = hc),
    (ye.lazy = function (e) {
      return { $$typeof: hS, _payload: { _status: -1, _result: e }, _init: yS };
    }),
    (ye.memo = function (e, t) {
      return { $$typeof: pS, type: e, compare: t === void 0 ? null : t };
    }),
    (ye.startTransition = function (e) {
      var t = Ja.transition;
      Ja.transition = {};
      try {
        e();
      } finally {
        Ja.transition = t;
      }
    }),
    (ye.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ye.useCallback = function (e, t) {
      return kt.current.useCallback(e, t);
    }),
    (ye.useContext = function (e) {
      return kt.current.useContext(e);
    }),
    (ye.useDebugValue = function () {}),
    (ye.useDeferredValue = function (e) {
      return kt.current.useDeferredValue(e);
    }),
    (ye.useEffect = function (e, t) {
      return kt.current.useEffect(e, t);
    }),
    (ye.useId = function () {
      return kt.current.useId();
    }),
    (ye.useImperativeHandle = function (e, t, n) {
      return kt.current.useImperativeHandle(e, t, n);
    }),
    (ye.useInsertionEffect = function (e, t) {
      return kt.current.useInsertionEffect(e, t);
    }),
    (ye.useLayoutEffect = function (e, t) {
      return kt.current.useLayoutEffect(e, t);
    }),
    (ye.useMemo = function (e, t) {
      return kt.current.useMemo(e, t);
    }),
    (ye.useReducer = function (e, t, n) {
      return kt.current.useReducer(e, t, n);
    }),
    (ye.useRef = function (e) {
      return kt.current.useRef(e);
    }),
    (ye.useState = function (e) {
      return kt.current.useState(e);
    }),
    (ye.useSyncExternalStore = function (e, t, n) {
      return kt.current.useSyncExternalStore(e, t, n);
    }),
    (ye.useTransition = function () {
      return kt.current.useTransition();
    }),
    (ye.version = "18.2.0"),
    (function (e) {
      e.exports = ye;
    })(oS);
  const fe = $h(k),
    es = nS({ __proto__: null, default: fe }, [k]);
  var wS = k,
    SS = Symbol.for("react.element"),
    xS = Symbol.for("react.fragment"),
    kS = Object.prototype.hasOwnProperty,
    ES =
      wS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    CS = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qh(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (r in t) kS.call(t, r) && !CS.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: SS,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: ES.current,
    };
  }
  (Xa.Fragment = xS),
    (Xa.jsx = qh),
    (Xa.jsxs = qh),
    (function (e) {
      e.exports = Xa;
    })(rS);
  const Gh = ki.Fragment,
    A = ki.jsx,
    de = ki.jsxs,
    OS = Object.freeze(
      Object.defineProperty(
        { __proto__: null, Fragment: Gh, jsx: A, jsxs: de },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  var fo = {},
    NS = {
      get exports() {
        return fo;
      },
      set exports(e) {
        fo = e;
      },
    },
    Bt = {},
    gc = {},
    TS = {
      get exports() {
        return gc;
      },
      set exports(e) {
        gc = e;
      },
    },
    Kh = {};
  (function (e) {
    function t(z, F) {
      var $ = z.length;
      z.push(F);
      e: for (; 0 < $; ) {
        var O = ($ - 1) >>> 1,
          L = z[O];
        if (0 < o(L, F)) (z[O] = F), (z[$] = L), ($ = O);
        else break e;
      }
    }
    function n(z) {
      return z.length === 0 ? null : z[0];
    }
    function r(z) {
      if (z.length === 0) return null;
      var F = z[0],
        $ = z.pop();
      if ($ !== F) {
        z[0] = $;
        e: for (var O = 0, L = z.length, B = L >>> 1; O < B; ) {
          var W = 2 * (O + 1) - 1,
            X = z[W],
            J = W + 1,
            ae = z[J];
          if (0 > o(X, $))
            J < L && 0 > o(ae, X)
              ? ((z[O] = ae), (z[J] = $), (O = J))
              : ((z[O] = X), (z[W] = $), (O = W));
          else if (J < L && 0 > o(ae, $)) (z[O] = ae), (z[J] = $), (O = J);
          else break e;
        }
      }
      return F;
    }
    function o(z, F) {
      var $ = z.sortIndex - F.sortIndex;
      return $ !== 0 ? $ : z.id - F.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var i = performance;
      e.unstable_now = function () {
        return i.now();
      };
    } else {
      var a = Date,
        s = a.now();
      e.unstable_now = function () {
        return a.now() - s;
      };
    }
    var l = [],
      u = [],
      d = 1,
      f = null,
      h = 3,
      b = !1,
      g = !1,
      x = !1,
      R = typeof setTimeout == "function" ? setTimeout : null,
      y = typeof clearTimeout == "function" ? clearTimeout : null,
      m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(z) {
      for (var F = n(u); F !== null; ) {
        if (F.callback === null) r(u);
        else if (F.startTime <= z)
          r(u), (F.sortIndex = F.expirationTime), t(l, F);
        else break;
        F = n(u);
      }
    }
    function S(z) {
      if (((x = !1), v(z), !g))
        if (n(l) !== null) (g = !0), Q(C);
        else {
          var F = n(u);
          F !== null && K(S, F.startTime - z);
        }
    }
    function C(z, F) {
      (g = !1), x && ((x = !1), y(_), (_ = -1)), (b = !0);
      var $ = h;
      try {
        for (
          v(F), f = n(l);
          f !== null && (!(f.expirationTime > F) || (z && !H()));

        ) {
          var O = f.callback;
          if (typeof O == "function") {
            (f.callback = null), (h = f.priorityLevel);
            var L = O(f.expirationTime <= F);
            (F = e.unstable_now()),
              typeof L == "function" ? (f.callback = L) : f === n(l) && r(l),
              v(F);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var B = !0;
        else {
          var W = n(u);
          W !== null && K(S, W.startTime - F), (B = !1);
        }
        return B;
      } finally {
        (f = null), (h = $), (b = !1);
      }
    }
    var N = !1,
      T = null,
      _ = -1,
      I = 5,
      j = -1;
    function H() {
      return !(e.unstable_now() - j < I);
    }
    function V() {
      if (T !== null) {
        var z = e.unstable_now();
        j = z;
        var F = !0;
        try {
          F = T(!0, z);
        } finally {
          F ? Z() : ((N = !1), (T = null));
        }
      } else N = !1;
    }
    var Z;
    if (typeof m == "function")
      Z = function () {
        m(V);
      };
    else if (typeof MessageChannel < "u") {
      var D = new MessageChannel(),
        Y = D.port2;
      (D.port1.onmessage = V),
        (Z = function () {
          Y.postMessage(null);
        });
    } else
      Z = function () {
        R(V, 0);
      };
    function Q(z) {
      (T = z), N || ((N = !0), Z());
    }
    function K(z, F) {
      _ = R(function () {
        z(e.unstable_now());
      }, F);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (z) {
        z.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        g || b || ((g = !0), Q(C));
      }),
      (e.unstable_forceFrameRate = function (z) {
        0 > z || 125 < z
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (I = 0 < z ? Math.floor(1e3 / z) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (z) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var F = 3;
            break;
          default:
            F = h;
        }
        var $ = h;
        h = F;
        try {
          return z();
        } finally {
          h = $;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (z, F) {
        switch (z) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            z = 3;
        }
        var $ = h;
        h = z;
        try {
          return F();
        } finally {
          h = $;
        }
      }),
      (e.unstable_scheduleCallback = function (z, F, $) {
        var O = e.unstable_now();
        switch (
          (typeof $ == "object" && $ !== null
            ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? O + $ : O))
            : ($ = O),
          z)
        ) {
          case 1:
            var L = -1;
            break;
          case 2:
            L = 250;
            break;
          case 5:
            L = 1073741823;
            break;
          case 4:
            L = 1e4;
            break;
          default:
            L = 5e3;
        }
        return (
          (L = $ + L),
          (z = {
            id: d++,
            callback: F,
            priorityLevel: z,
            startTime: $,
            expirationTime: L,
            sortIndex: -1,
          }),
          $ > O
            ? ((z.sortIndex = $),
              t(u, z),
              n(l) === null &&
                z === n(u) &&
                (x ? (y(_), (_ = -1)) : (x = !0), K(S, $ - O)))
            : ((z.sortIndex = L), t(l, z), g || b || ((g = !0), Q(C))),
          z
        );
      }),
      (e.unstable_shouldYield = H),
      (e.unstable_wrapCallback = function (z) {
        var F = h;
        return function () {
          var $ = h;
          h = F;
          try {
            return z.apply(this, arguments);
          } finally {
            h = $;
          }
        };
      });
  })(Kh),
    (function (e) {
      e.exports = Kh;
    })(TS);
  var Yh = k,
    jt = gc;
  function G(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var Xh = new Set(),
    Ci = {};
  function Nr(e, t) {
    po(e, t), po(e + "Capture", t);
  }
  function po(e, t) {
    for (Ci[e] = t, e = 0; e < t.length; e++) Xh.add(t[e]);
  }
  var Bn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    vc = Object.prototype.hasOwnProperty,
    AS =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Zh = {},
    Qh = {};
  function RS(e) {
    return vc.call(Qh, e)
      ? !0
      : vc.call(Zh, e)
      ? !1
      : AS.test(e)
      ? (Qh[e] = !0)
      : ((Zh[e] = !0), !1);
  }
  function PS(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _S(e, t, n, r) {
    if (t === null || typeof t > "u" || PS(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Et(e, t, n, r, o, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a);
  }
  var ft = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ft[e] = new Et(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      ft[t] = new Et(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        ft[e] = new Et(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      ft[e] = new Et(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        ft[e] = new Et(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ft[e] = new Et(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      ft[e] = new Et(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ft[e] = new Et(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      ft[e] = new Et(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var yc = /[\-:]([a-z])/g;
  function bc(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yc, bc);
      ft[t] = new Et(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yc, bc);
        ft[t] = new Et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yc, bc);
      ft[t] = new Et(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      ft[e] = new Et(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (ft.xlinkHref = new Et(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ft[e] = new Et(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function wc(e, t, n, r) {
    var o = ft.hasOwnProperty(t) ? ft[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (_S(t, n, o, r) && (n = null),
      r || o === null
        ? RS(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var jn = Yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ts = Symbol.for("react.element"),
    ho = Symbol.for("react.portal"),
    mo = Symbol.for("react.fragment"),
    Sc = Symbol.for("react.strict_mode"),
    xc = Symbol.for("react.profiler"),
    Jh = Symbol.for("react.provider"),
    em = Symbol.for("react.context"),
    kc = Symbol.for("react.forward_ref"),
    Ec = Symbol.for("react.suspense"),
    Cc = Symbol.for("react.suspense_list"),
    Oc = Symbol.for("react.memo"),
    Zn = Symbol.for("react.lazy"),
    tm = Symbol.for("react.offscreen"),
    nm = Symbol.iterator;
  function Oi(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (nm && e[nm]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var He = Object.assign,
    Nc;
  function Ni(e) {
    if (Nc === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Nc = (t && t[1]) || "";
      }
    return (
      `
` +
      Nc +
      e
    );
  }
  var Tc = !1;
  function Ac(e, t) {
    if (!e || Tc) return "";
    Tc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var o = u.stack.split(`
`),
            i = r.stack.split(`
`),
            a = o.length - 1,
            s = i.length - 1;
          1 <= a && 0 <= s && o[a] !== i[s];

        )
          s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (o[a] !== i[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || o[a] !== i[s])) {
                  var l =
                    `
` + o[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (Tc = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Ni(e) : "";
  }
  function IS(e) {
    switch (e.tag) {
      case 5:
        return Ni(e.type);
      case 16:
        return Ni("Lazy");
      case 13:
        return Ni("Suspense");
      case 19:
        return Ni("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ac(e.type, !1)), e;
      case 11:
        return (e = Ac(e.type.render, !1)), e;
      case 1:
        return (e = Ac(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Rc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case mo:
        return "Fragment";
      case ho:
        return "Portal";
      case xc:
        return "Profiler";
      case Sc:
        return "StrictMode";
      case Ec:
        return "Suspense";
      case Cc:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case em:
          return (e.displayName || "Context") + ".Consumer";
        case Jh:
          return (e._context.displayName || "Context") + ".Provider";
        case kc:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Oc:
          return (
            (t = e.displayName || null), t !== null ? t : Rc(e.type) || "Memo"
          );
        case Zn:
          (t = e._payload), (e = e._init);
          try {
            return Rc(e(t));
          } catch {}
      }
    return null;
  }
  function $S(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Rc(t);
      case 8:
        return t === Sc ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Qn(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function rm(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function MS(e) {
    var t = rm(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (a) {
            (r = "" + a), i.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ns(e) {
    e._valueTracker || (e._valueTracker = MS(e));
  }
  function om(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = rm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function rs(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pc(e, t) {
    var n = t.checked;
    return He({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function im(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Qn(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function am(e, t) {
    (t = t.checked), t != null && wc(e, "checked", t, !1);
  }
  function _c(e, t) {
    am(e, t);
    var n = Qn(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ic(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ic(e, t.type, Qn(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function sm(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ic(e, t, n) {
    (t !== "number" || rs(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ti = Array.isArray;
  function go(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Qn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $c(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
    return He({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function lm(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(G(92));
        if (Ti(n)) {
          if (1 < n.length) throw Error(G(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Qn(n) };
  }
  function um(e, t) {
    var n = Qn(t.value),
      r = Qn(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function cm(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function dm(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Mc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? dm(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var os,
    fm = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          os = os || document.createElement("div"),
            os.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = os.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ai(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ri = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    LS = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ri).forEach(function (e) {
    LS.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ri[t] = Ri[e]);
    });
  });
  function pm(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Ri.hasOwnProperty(e) && Ri[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function hm(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = pm(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var FS = He(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Lc(e, t) {
    if (t) {
      if (FS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(G(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(G(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(G(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(G(62));
    }
  }
  function Fc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bc = null;
  function jc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zc = null,
    vo = null,
    yo = null;
  function mm(e) {
    if ((e = Qi(e))) {
      if (typeof zc != "function") throw Error(G(280));
      var t = e.stateNode;
      t && ((t = Ns(t)), zc(e.stateNode, e.type, t));
    }
  }
  function gm(e) {
    vo ? (yo ? yo.push(e) : (yo = [e])) : (vo = e);
  }
  function vm() {
    if (vo) {
      var e = vo,
        t = yo;
      if (((yo = vo = null), mm(e), t)) for (e = 0; e < t.length; e++) mm(t[e]);
    }
  }
  function ym(e, t) {
    return e(t);
  }
  function bm() {}
  var Uc = !1;
  function wm(e, t, n) {
    if (Uc) return e(t, n);
    Uc = !0;
    try {
      return ym(e, t, n);
    } finally {
      (Uc = !1), (vo !== null || yo !== null) && (bm(), vm());
    }
  }
  function Pi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ns(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(G(231, t, typeof n));
    return n;
  }
  var Dc = !1;
  if (Bn)
    try {
      var _i = {};
      Object.defineProperty(_i, "passive", {
        get: function () {
          Dc = !0;
        },
      }),
        window.addEventListener("test", _i, _i),
        window.removeEventListener("test", _i, _i);
    } catch {
      Dc = !1;
    }
  function BS(e, t, n, r, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (d) {
      this.onError(d);
    }
  }
  var Ii = !1,
    is = null,
    as = !1,
    Wc = null,
    jS = {
      onError: function (e) {
        (Ii = !0), (is = e);
      },
    };
  function zS(e, t, n, r, o, i, a, s, l) {
    (Ii = !1), (is = null), BS.apply(jS, arguments);
  }
  function US(e, t, n, r, o, i, a, s, l) {
    if ((zS.apply(this, arguments), Ii)) {
      if (Ii) {
        var u = is;
        (Ii = !1), (is = null);
      } else throw Error(G(198));
      as || ((as = !0), (Wc = u));
    }
  }
  function Tr(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Sm(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function xm(e) {
    if (Tr(e) !== e) throw Error(G(188));
  }
  function DS(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Tr(e)), t === null)) throw Error(G(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return xm(o), e;
          if (i === r) return xm(o), t;
          i = i.sibling;
        }
        throw Error(G(188));
      }
      if (n.return !== r.return) (n = o), (r = i);
      else {
        for (var a = !1, s = o.child; s; ) {
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) {
          for (s = i.child; s; ) {
            if (s === n) {
              (a = !0), (n = i), (r = o);
              break;
            }
            if (s === r) {
              (a = !0), (r = i), (n = o);
              break;
            }
            s = s.sibling;
          }
          if (!a) throw Error(G(189));
        }
      }
      if (n.alternate !== r) throw Error(G(190));
    }
    if (n.tag !== 3) throw Error(G(188));
    return n.stateNode.current === n ? e : t;
  }
  function km(e) {
    return (e = DS(e)), e !== null ? Em(e) : null;
  }
  function Em(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Em(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Cm = jt.unstable_scheduleCallback,
    Om = jt.unstable_cancelCallback,
    WS = jt.unstable_shouldYield,
    VS = jt.unstable_requestPaint,
    Je = jt.unstable_now,
    HS = jt.unstable_getCurrentPriorityLevel,
    Vc = jt.unstable_ImmediatePriority,
    Nm = jt.unstable_UserBlockingPriority,
    ss = jt.unstable_NormalPriority,
    qS = jt.unstable_LowPriority,
    Tm = jt.unstable_IdlePriority,
    ls = null,
    xn = null;
  function GS(e) {
    if (xn && typeof xn.onCommitFiberRoot == "function")
      try {
        xn.onCommitFiberRoot(ls, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var fn = Math.clz32 ? Math.clz32 : XS,
    KS = Math.log,
    YS = Math.LN2;
  function XS(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((KS(e) / YS) | 0)) | 0;
  }
  var us = 64,
    cs = 4194304;
  function $i(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ds(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var s = a & ~o;
      s !== 0 ? (r = $i(s)) : ((i &= a), i !== 0 && (r = $i(i)));
    } else (a = n & ~o), a !== 0 ? (r = $i(a)) : i !== 0 && (r = $i(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & o) &&
      ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - fn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function ZS(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function QS(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var a = 31 - fn(i),
        s = 1 << a,
        l = o[a];
      l === -1
        ? (!(s & n) || s & r) && (o[a] = ZS(s, t))
        : l <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  }
  function Hc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Am() {
    var e = us;
    return (us <<= 1), !(us & 4194240) && (us = 64), e;
  }
  function qc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Mi(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - fn(t)),
      (e[t] = n);
  }
  function JS(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - fn(n),
        i = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
  }
  function Gc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - fn(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var Ie = 0;
  function Rm(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Pm,
    Kc,
    _m,
    Im,
    $m,
    Yc = !1,
    fs = [],
    Jn = null,
    er = null,
    tr = null,
    Li = new Map(),
    Fi = new Map(),
    nr = [],
    ex =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Mm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Jn = null;
        break;
      case "dragenter":
      case "dragleave":
        er = null;
        break;
      case "mouseover":
      case "mouseout":
        tr = null;
        break;
      case "pointerover":
      case "pointerout":
        Li.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fi.delete(t.pointerId);
    }
  }
  function Bi(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = Qi(t)), t !== null && Kc(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function tx(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (Jn = Bi(Jn, e, t, n, r, o)), !0;
      case "dragenter":
        return (er = Bi(er, e, t, n, r, o)), !0;
      case "mouseover":
        return (tr = Bi(tr, e, t, n, r, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return Li.set(i, Bi(Li.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), Fi.set(i, Bi(Fi.get(i) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function Lm(e) {
    var t = Ar(e.target);
    if (t !== null) {
      var n = Tr(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Sm(n)), t !== null)) {
            (e.blockedOn = t),
              $m(e.priority, function () {
                _m(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ps(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Bc = r), n.target.dispatchEvent(r), (Bc = null);
      } else return (t = Qi(n)), t !== null && Kc(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Fm(e, t, n) {
    ps(e) && n.delete(t);
  }
  function nx() {
    (Yc = !1),
      Jn !== null && ps(Jn) && (Jn = null),
      er !== null && ps(er) && (er = null),
      tr !== null && ps(tr) && (tr = null),
      Li.forEach(Fm),
      Fi.forEach(Fm);
  }
  function ji(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Yc ||
        ((Yc = !0),
        jt.unstable_scheduleCallback(jt.unstable_NormalPriority, nx)));
  }
  function zi(e) {
    function t(o) {
      return ji(o, e);
    }
    if (0 < fs.length) {
      ji(fs[0], e);
      for (var n = 1; n < fs.length; n++) {
        var r = fs[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Jn !== null && ji(Jn, e),
        er !== null && ji(er, e),
        tr !== null && ji(tr, e),
        Li.forEach(t),
        Fi.forEach(t),
        n = 0;
      n < nr.length;
      n++
    )
      (r = nr[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
      Lm(n), n.blockedOn === null && nr.shift();
  }
  var bo = jn.ReactCurrentBatchConfig,
    hs = !0;
  function rx(e, t, n, r) {
    var o = Ie,
      i = bo.transition;
    bo.transition = null;
    try {
      (Ie = 1), Xc(e, t, n, r);
    } finally {
      (Ie = o), (bo.transition = i);
    }
  }
  function ox(e, t, n, r) {
    var o = Ie,
      i = bo.transition;
    bo.transition = null;
    try {
      (Ie = 4), Xc(e, t, n, r);
    } finally {
      (Ie = o), (bo.transition = i);
    }
  }
  function Xc(e, t, n, r) {
    if (hs) {
      var o = Zc(e, t, n, r);
      if (o === null) hd(e, t, r, ms, n), Mm(e, r);
      else if (tx(o, e, t, n, r)) r.stopPropagation();
      else if ((Mm(e, r), t & 4 && -1 < ex.indexOf(e))) {
        for (; o !== null; ) {
          var i = Qi(o);
          if (
            (i !== null && Pm(i),
            (i = Zc(e, t, n, r)),
            i === null && hd(e, t, r, ms, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else hd(e, t, r, null, n);
    }
  }
  var ms = null;
  function Zc(e, t, n, r) {
    if (((ms = null), (e = jc(r)), (e = Ar(e)), e !== null))
      if (((t = Tr(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Sm(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ms = e), null;
  }
  function Bm(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (HS()) {
          case Vc:
            return 1;
          case Nm:
            return 4;
          case ss:
          case qS:
            return 16;
          case Tm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rr = null,
    Qc = null,
    gs = null;
  function jm() {
    if (gs) return gs;
    var e,
      t = Qc,
      n = t.length,
      r,
      o = "value" in rr ? rr.value : rr.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return (gs = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function vs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ys() {
    return !0;
  }
  function zm() {
    return !1;
  }
  function zt(e) {
    function t(n, r, o, i, a) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? ys
          : zm),
        (this.isPropagationStopped = zm),
        this
      );
    }
    return (
      He(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ys));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ys));
        },
        persist: function () {},
        isPersistent: ys,
      }),
      t
    );
  }
  var wo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Jc = zt(wo),
    Ui = He({}, wo, { view: 0, detail: 0 }),
    ix = zt(Ui),
    ed,
    td,
    Di,
    bs = He({}, Ui, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: rd,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Di &&
              (Di && e.type === "mousemove"
                ? ((ed = e.screenX - Di.screenX), (td = e.screenY - Di.screenY))
                : (td = ed = 0),
              (Di = e)),
            ed);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : td;
      },
    }),
    Um = zt(bs),
    ax = He({}, bs, { dataTransfer: 0 }),
    sx = zt(ax),
    lx = He({}, Ui, { relatedTarget: 0 }),
    nd = zt(lx),
    ux = He({}, wo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cx = zt(ux),
    dx = He({}, wo, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fx = zt(dx),
    px = He({}, wo, { data: 0 }),
    Dm = zt(px),
    hx = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    mx = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vx(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gx[e])
      ? !!t[e]
      : !1;
  }
  function rd() {
    return vx;
  }
  var yx = He({}, Ui, {
      key: function (e) {
        if (e.key) {
          var t = hx[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = vs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? mx[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rd,
      charCode: function (e) {
        return e.type === "keypress" ? vs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? vs(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    bx = zt(yx),
    wx = He({}, bs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Wm = zt(wx),
    Sx = He({}, Ui, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rd,
    }),
    xx = zt(Sx),
    kx = He({}, wo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ex = zt(kx),
    Cx = He({}, bs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ox = zt(Cx),
    Nx = [9, 13, 27, 32],
    od = Bn && "CompositionEvent" in window,
    Wi = null;
  Bn && "documentMode" in document && (Wi = document.documentMode);
  var Tx = Bn && "TextEvent" in window && !Wi,
    Vm = Bn && (!od || (Wi && 8 < Wi && 11 >= Wi)),
    Hm = String.fromCharCode(32),
    qm = !1;
  function Gm(e, t) {
    switch (e) {
      case "keyup":
        return Nx.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Km(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var So = !1;
  function Ax(e, t) {
    switch (e) {
      case "compositionend":
        return Km(t);
      case "keypress":
        return t.which !== 32 ? null : ((qm = !0), Hm);
      case "textInput":
        return (e = t.data), e === Hm && qm ? null : e;
      default:
        return null;
    }
  }
  function Rx(e, t) {
    if (So)
      return e === "compositionend" || (!od && Gm(e, t))
        ? ((e = jm()), (gs = Qc = rr = null), (So = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Px = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ym(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Px[e.type] : t === "textarea";
  }
  function Xm(e, t, n, r) {
    gm(r),
      (t = Es(t, "onChange")),
      0 < t.length &&
        ((n = new Jc("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Vi = null,
    Hi = null;
  function _x(e) {
    hg(e, 0);
  }
  function ws(e) {
    var t = Oo(e);
    if (om(t)) return e;
  }
  function Ix(e, t) {
    if (e === "change") return t;
  }
  var Zm = !1;
  if (Bn) {
    var id;
    if (Bn) {
      var ad = "oninput" in document;
      if (!ad) {
        var Qm = document.createElement("div");
        Qm.setAttribute("oninput", "return;"),
          (ad = typeof Qm.oninput == "function");
      }
      id = ad;
    } else id = !1;
    Zm = id && (!document.documentMode || 9 < document.documentMode);
  }
  function Jm() {
    Vi && (Vi.detachEvent("onpropertychange", eg), (Hi = Vi = null));
  }
  function eg(e) {
    if (e.propertyName === "value" && ws(Hi)) {
      var t = [];
      Xm(t, Hi, e, jc(e)), wm(_x, t);
    }
  }
  function $x(e, t, n) {
    e === "focusin"
      ? (Jm(), (Vi = t), (Hi = n), Vi.attachEvent("onpropertychange", eg))
      : e === "focusout" && Jm();
  }
  function Mx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ws(Hi);
  }
  function Lx(e, t) {
    if (e === "click") return ws(t);
  }
  function Fx(e, t) {
    if (e === "input" || e === "change") return ws(t);
  }
  function Bx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pn = typeof Object.is == "function" ? Object.is : Bx;
  function qi(e, t) {
    if (pn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!vc.call(t, o) || !pn(e[o], t[o])) return !1;
    }
    return !0;
  }
  function tg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ng(e, t) {
    var n = tg(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tg(n);
    }
  }
  function rg(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? rg(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function og() {
    for (var e = window, t = rs(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = rs(e.document);
    }
    return t;
  }
  function sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function jx(e) {
    var t = og(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      rg(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && sd(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            i = Math.min(r.start, o);
          (r = r.end === void 0 ? i : Math.min(r.end, o)),
            !e.extend && i > r && ((o = r), (r = i), (i = o)),
            (o = ng(n, i));
          var a = ng(n, r);
          o &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var zx = Bn && "documentMode" in document && 11 >= document.documentMode,
    xo = null,
    ld = null,
    Gi = null,
    ud = !1;
  function ig(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ud ||
      xo == null ||
      xo !== rs(r) ||
      ((r = xo),
      "selectionStart" in r && sd(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Gi && qi(Gi, r)) ||
        ((Gi = r),
        (r = Es(ld, "onSelect")),
        0 < r.length &&
          ((t = new Jc("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = xo))));
  }
  function Ss(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var ko = {
      animationend: Ss("Animation", "AnimationEnd"),
      animationiteration: Ss("Animation", "AnimationIteration"),
      animationstart: Ss("Animation", "AnimationStart"),
      transitionend: Ss("Transition", "TransitionEnd"),
    },
    cd = {},
    ag = {};
  Bn &&
    ((ag = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ko.animationend.animation,
      delete ko.animationiteration.animation,
      delete ko.animationstart.animation),
    "TransitionEvent" in window || delete ko.transitionend.transition);
  function xs(e) {
    if (cd[e]) return cd[e];
    if (!ko[e]) return e;
    var t = ko[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ag) return (cd[e] = t[n]);
    return e;
  }
  var sg = xs("animationend"),
    lg = xs("animationiteration"),
    ug = xs("animationstart"),
    cg = xs("transitionend"),
    dg = new Map(),
    fg =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function or(e, t) {
    dg.set(e, t), Nr(t, [e]);
  }
  for (var dd = 0; dd < fg.length; dd++) {
    var fd = fg[dd],
      Ux = fd.toLowerCase(),
      Dx = fd[0].toUpperCase() + fd.slice(1);
    or(Ux, "on" + Dx);
  }
  or(sg, "onAnimationEnd"),
    or(lg, "onAnimationIteration"),
    or(ug, "onAnimationStart"),
    or("dblclick", "onDoubleClick"),
    or("focusin", "onFocus"),
    or("focusout", "onBlur"),
    or(cg, "onTransitionEnd"),
    po("onMouseEnter", ["mouseout", "mouseover"]),
    po("onMouseLeave", ["mouseout", "mouseover"]),
    po("onPointerEnter", ["pointerout", "pointerover"]),
    po("onPointerLeave", ["pointerout", "pointerover"]),
    Nr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Nr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Nr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Nr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Nr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Ki =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Wx = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ki),
    );
  function pg(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), US(r, t, void 0, e), (e.currentTarget = null);
  }
  function hg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var s = r[a],
              l = s.instance,
              u = s.currentTarget;
            if (((s = s.listener), l !== i && o.isPropagationStopped()))
              break e;
            pg(o, s, u), (i = l);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((s = r[a]),
              (l = s.instance),
              (u = s.currentTarget),
              (s = s.listener),
              l !== i && o.isPropagationStopped())
            )
              break e;
            pg(o, s, u), (i = l);
          }
      }
    }
    if (as) throw ((e = Wc), (as = !1), (Wc = null), e);
  }
  function je(e, t) {
    var n = t[wd];
    n === void 0 && (n = t[wd] = new Set());
    var r = e + "__bubble";
    n.has(r) || (mg(t, e, 2, !1), n.add(r));
  }
  function pd(e, t, n) {
    var r = 0;
    t && (r |= 4), mg(n, e, r, t);
  }
  var ks = "_reactListening" + Math.random().toString(36).slice(2);
  function Yi(e) {
    if (!e[ks]) {
      (e[ks] = !0),
        Xh.forEach(function (n) {
          n !== "selectionchange" && (Wx.has(n) || pd(n, !1, e), pd(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ks] || ((t[ks] = !0), pd("selectionchange", !1, t));
    }
  }
  function mg(e, t, n, r) {
    switch (Bm(t)) {
      case 1:
        var o = rx;
        break;
      case 4:
        o = ox;
        break;
      default:
        o = Xc;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Dc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function hd(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = a.stateNode.containerInfo),
                l === o || (l.nodeType === 8 && l.parentNode === o))
              )
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (((a = Ar(s)), a === null)) return;
            if (((l = a.tag), l === 5 || l === 6)) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    wm(function () {
      var u = i,
        d = jc(n),
        f = [];
      e: {
        var h = dg.get(e);
        if (h !== void 0) {
          var b = Jc,
            g = e;
          switch (e) {
            case "keypress":
              if (vs(n) === 0) break e;
            case "keydown":
            case "keyup":
              b = bx;
              break;
            case "focusin":
              (g = "focus"), (b = nd);
              break;
            case "focusout":
              (g = "blur"), (b = nd);
              break;
            case "beforeblur":
            case "afterblur":
              b = nd;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Um;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = sx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = xx;
              break;
            case sg:
            case lg:
            case ug:
              b = cx;
              break;
            case cg:
              b = Ex;
              break;
            case "scroll":
              b = ix;
              break;
            case "wheel":
              b = Ox;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = fx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Wm;
          }
          var x = (t & 4) !== 0,
            R = !x && e === "scroll",
            y = x ? (h !== null ? h + "Capture" : null) : h;
          x = [];
          for (var m = u, v; m !== null; ) {
            v = m;
            var S = v.stateNode;
            if (
              (v.tag === 5 &&
                S !== null &&
                ((v = S),
                y !== null &&
                  ((S = Pi(m, y)), S != null && x.push(Xi(m, S, v)))),
              R)
            )
              break;
            m = m.return;
          }
          0 < x.length &&
            ((h = new b(h, g, null, n, d)), f.push({ event: h, listeners: x }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (b = e === "mouseout" || e === "pointerout"),
            h &&
              n !== Bc &&
              (g = n.relatedTarget || n.fromElement) &&
              (Ar(g) || g[zn]))
          )
            break e;
          if (
            (b || h) &&
            ((h =
              d.window === d
                ? d
                : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            b
              ? ((g = n.relatedTarget || n.toElement),
                (b = u),
                (g = g ? Ar(g) : null),
                g !== null &&
                  ((R = Tr(g)), g !== R || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((b = null), (g = u)),
            b !== g)
          ) {
            if (
              ((x = Um),
              (S = "onMouseLeave"),
              (y = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((x = Wm),
                (S = "onPointerLeave"),
                (y = "onPointerEnter"),
                (m = "pointer")),
              (R = b == null ? h : Oo(b)),
              (v = g == null ? h : Oo(g)),
              (h = new x(S, m + "leave", b, n, d)),
              (h.target = R),
              (h.relatedTarget = v),
              (S = null),
              Ar(d) === u &&
                ((x = new x(y, m + "enter", g, n, d)),
                (x.target = v),
                (x.relatedTarget = R),
                (S = x)),
              (R = S),
              b && g)
            )
              t: {
                for (x = b, y = g, m = 0, v = x; v; v = Eo(v)) m++;
                for (v = 0, S = y; S; S = Eo(S)) v++;
                for (; 0 < m - v; ) (x = Eo(x)), m--;
                for (; 0 < v - m; ) (y = Eo(y)), v--;
                for (; m--; ) {
                  if (x === y || (y !== null && x === y.alternate)) break t;
                  (x = Eo(x)), (y = Eo(y));
                }
                x = null;
              }
            else x = null;
            b !== null && gg(f, h, b, x, !1),
              g !== null && R !== null && gg(f, R, g, x, !0);
          }
        }
        e: {
          if (
            ((h = u ? Oo(u) : window),
            (b = h.nodeName && h.nodeName.toLowerCase()),
            b === "select" || (b === "input" && h.type === "file"))
          )
            var C = Ix;
          else if (Ym(h))
            if (Zm) C = Fx;
            else {
              C = Mx;
              var N = $x;
            }
          else
            (b = h.nodeName) &&
              b.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (C = Lx);
          if (C && (C = C(e, u))) {
            Xm(f, C, n, d);
            break e;
          }
          N && N(e, h, u),
            e === "focusout" &&
              (N = h._wrapperState) &&
              N.controlled &&
              h.type === "number" &&
              Ic(h, "number", h.value);
        }
        switch (((N = u ? Oo(u) : window), e)) {
          case "focusin":
            (Ym(N) || N.contentEditable === "true") &&
              ((xo = N), (ld = u), (Gi = null));
            break;
          case "focusout":
            Gi = ld = xo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ud = !1), ig(f, n, d);
            break;
          case "selectionchange":
            if (zx) break;
          case "keydown":
          case "keyup":
            ig(f, n, d);
        }
        var T;
        if (od)
          e: {
            switch (e) {
              case "compositionstart":
                var _ = "onCompositionStart";
                break e;
              case "compositionend":
                _ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _ = "onCompositionUpdate";
                break e;
            }
            _ = void 0;
          }
        else
          So
            ? Gm(e, n) && (_ = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (_ = "onCompositionStart");
        _ &&
          (Vm &&
            n.locale !== "ko" &&
            (So || _ !== "onCompositionStart"
              ? _ === "onCompositionEnd" && So && (T = jm())
              : ((rr = d),
                (Qc = "value" in rr ? rr.value : rr.textContent),
                (So = !0))),
          (N = Es(u, _)),
          0 < N.length &&
            ((_ = new Dm(_, e, null, n, d)),
            f.push({ event: _, listeners: N }),
            T ? (_.data = T) : ((T = Km(n)), T !== null && (_.data = T)))),
          (T = Tx ? Ax(e, n) : Rx(e, n)) &&
            ((u = Es(u, "onBeforeInput")),
            0 < u.length &&
              ((d = new Dm("onBeforeInput", "beforeinput", null, n, d)),
              f.push({ event: d, listeners: u }),
              (d.data = T)));
      }
      hg(f, t);
    });
  }
  function Xi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Es(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = Pi(e, n)),
        i != null && r.unshift(Xi(e, i, o)),
        (i = Pi(e, t)),
        i != null && r.push(Xi(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function Eo(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gg(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var s = n,
        l = s.alternate,
        u = s.stateNode;
      if (l !== null && l === r) break;
      s.tag === 5 &&
        u !== null &&
        ((s = u),
        o
          ? ((l = Pi(n, i)), l != null && a.unshift(Xi(n, l, s)))
          : o || ((l = Pi(n, i)), l != null && a.push(Xi(n, l, s)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Vx = /\r\n?/g,
    Hx = /\u0000|\uFFFD/g;
  function vg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Vx,
        `
`,
      )
      .replace(Hx, "");
  }
  function Cs(e, t, n) {
    if (((t = vg(t)), vg(e) !== t && n)) throw Error(G(425));
  }
  function Os() {}
  var md = null,
    gd = null;
  function vd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yd = typeof setTimeout == "function" ? setTimeout : void 0,
    qx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yg = typeof Promise == "function" ? Promise : void 0,
    Gx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof yg < "u"
        ? function (e) {
            return yg.resolve(null).then(e).catch(Kx);
          }
        : yd;
  function Kx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function bd(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), zi(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    zi(t);
  }
  function ir(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function bg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Co = Math.random().toString(36).slice(2),
    kn = "__reactFiber$" + Co,
    Zi = "__reactProps$" + Co,
    zn = "__reactContainer$" + Co,
    wd = "__reactEvents$" + Co,
    Yx = "__reactListeners$" + Co,
    Xx = "__reactHandles$" + Co;
  function Ar(e) {
    var t = e[kn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zn] || n[kn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = bg(e); e !== null; ) {
            if ((n = e[kn])) return n;
            e = bg(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Qi(e) {
    return (
      (e = e[kn] || e[zn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Oo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(G(33));
  }
  function Ns(e) {
    return e[Zi] || null;
  }
  var Sd = [],
    No = -1;
  function ar(e) {
    return { current: e };
  }
  function ze(e) {
    0 > No || ((e.current = Sd[No]), (Sd[No] = null), No--);
  }
  function Fe(e, t) {
    No++, (Sd[No] = e.current), (e.current = t);
  }
  var sr = {},
    vt = ar(sr),
    Tt = ar(!1),
    Rr = sr;
  function To(e, t) {
    var n = e.type.contextTypes;
    if (!n) return sr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in n) o[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function At(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ts() {
    ze(Tt), ze(vt);
  }
  function wg(e, t, n) {
    if (vt.current !== sr) throw Error(G(168));
    Fe(vt, t), Fe(Tt, n);
  }
  function Sg(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(G(108, $S(e) || "Unknown", o));
    return He({}, n, r);
  }
  function As(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        sr),
      (Rr = vt.current),
      Fe(vt, e),
      Fe(Tt, Tt.current),
      !0
    );
  }
  function xg(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(G(169));
    n
      ? ((e = Sg(e, t, Rr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ze(Tt),
        ze(vt),
        Fe(vt, e))
      : ze(Tt),
      Fe(Tt, n);
  }
  var Un = null,
    Rs = !1,
    xd = !1;
  function kg(e) {
    Un === null ? (Un = [e]) : Un.push(e);
  }
  function Zx(e) {
    (Rs = !0), kg(e);
  }
  function lr() {
    if (!xd && Un !== null) {
      xd = !0;
      var e = 0,
        t = Ie;
      try {
        var n = Un;
        for (Ie = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Un = null), (Rs = !1);
      } catch (o) {
        throw (Un !== null && (Un = Un.slice(e + 1)), Cm(Vc, lr), o);
      } finally {
        (Ie = t), (xd = !1);
      }
    }
    return null;
  }
  var Ao = [],
    Ro = 0,
    Ps = null,
    _s = 0,
    Kt = [],
    Yt = 0,
    Pr = null,
    Dn = 1,
    Wn = "";
  function _r(e, t) {
    (Ao[Ro++] = _s), (Ao[Ro++] = Ps), (Ps = e), (_s = t);
  }
  function Eg(e, t, n) {
    (Kt[Yt++] = Dn), (Kt[Yt++] = Wn), (Kt[Yt++] = Pr), (Pr = e);
    var r = Dn;
    e = Wn;
    var o = 32 - fn(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - fn(t) + o;
    if (30 < i) {
      var a = o - (o % 5);
      (i = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (o -= a),
        (Dn = (1 << (32 - fn(t) + o)) | (n << o) | r),
        (Wn = i + e);
    } else (Dn = (1 << i) | (n << o) | r), (Wn = e);
  }
  function kd(e) {
    e.return !== null && (_r(e, 1), Eg(e, 1, 0));
  }
  function Ed(e) {
    for (; e === Ps; )
      (Ps = Ao[--Ro]), (Ao[Ro] = null), (_s = Ao[--Ro]), (Ao[Ro] = null);
    for (; e === Pr; )
      (Pr = Kt[--Yt]),
        (Kt[Yt] = null),
        (Wn = Kt[--Yt]),
        (Kt[Yt] = null),
        (Dn = Kt[--Yt]),
        (Kt[Yt] = null);
  }
  var Ut = null,
    Dt = null,
    De = !1,
    hn = null;
  function Cg(e, t) {
    var n = Jt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Og(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ut = e), (Dt = ir(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ut = e), (Dt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Pr !== null ? { id: Dn, overflow: Wn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Jt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ut = e),
              (Dt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Cd(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Od(e) {
    if (De) {
      var t = Dt;
      if (t) {
        var n = t;
        if (!Og(e, t)) {
          if (Cd(e)) throw Error(G(418));
          t = ir(n.nextSibling);
          var r = Ut;
          t && Og(e, t)
            ? Cg(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (Ut = e));
        }
      } else {
        if (Cd(e)) throw Error(G(418));
        (e.flags = (e.flags & -4097) | 2), (De = !1), (Ut = e);
      }
    }
  }
  function Ng(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ut = e;
  }
  function Is(e) {
    if (e !== Ut) return !1;
    if (!De) return Ng(e), (De = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !vd(e.type, e.memoizedProps))),
      t && (t = Dt))
    ) {
      if (Cd(e)) throw (Tg(), Error(G(418)));
      for (; t; ) Cg(e, t), (t = ir(t.nextSibling));
    }
    if ((Ng(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(G(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Dt = ir(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Dt = null;
      }
    } else Dt = Ut ? ir(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Tg() {
    for (var e = Dt; e; ) e = ir(e.nextSibling);
  }
  function Po() {
    (Dt = Ut = null), (De = !1);
  }
  function Nd(e) {
    hn === null ? (hn = [e]) : hn.push(e);
  }
  var Qx = jn.ReactCurrentBatchConfig;
  function mn(e, t) {
    if (e && e.defaultProps) {
      (t = He({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var $s = ar(null),
    Ms = null,
    _o = null,
    Td = null;
  function Ad() {
    Td = _o = Ms = null;
  }
  function Rd(e) {
    var t = $s.current;
    ze($s), (e._currentValue = t);
  }
  function Pd(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Io(e, t) {
    (Ms = e),
      (Td = _o = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Rt = !0), (e.firstContext = null));
  }
  function Xt(e) {
    var t = e._currentValue;
    if (Td !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _o === null)) {
        if (Ms === null) throw Error(G(308));
        (_o = e), (Ms.dependencies = { lanes: 0, firstContext: e });
      } else _o = _o.next = e;
    return t;
  }
  var Ir = null;
  function _d(e) {
    Ir === null ? (Ir = [e]) : Ir.push(e);
  }
  function Ag(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), _d(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Vn(e, r)
    );
  }
  function Vn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var ur = !1;
  function Id(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Rg(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Hn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function cr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), Oe & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Vn(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), _d(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Vn(e, n)
    );
  }
  function Ls(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gc(e, n);
    }
  }
  function Pg(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
        } while (n !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Fs(e, t, n, r) {
    var o = e.updateQueue;
    ur = !1;
    var i = o.firstBaseUpdate,
      a = o.lastBaseUpdate,
      s = o.shared.pending;
    if (s !== null) {
      o.shared.pending = null;
      var l = s,
        u = l.next;
      (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
      var d = e.alternate;
      d !== null &&
        ((d = d.updateQueue),
        (s = d.lastBaseUpdate),
        s !== a &&
          (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
          (d.lastBaseUpdate = l)));
    }
    if (i !== null) {
      var f = o.baseState;
      (a = 0), (d = u = l = null), (s = i);
      do {
        var h = s.lane,
          b = s.eventTime;
        if ((r & h) === h) {
          d !== null &&
            (d = d.next =
              {
                eventTime: b,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var g = e,
              x = s;
            switch (((h = t), (b = n), x.tag)) {
              case 1:
                if (((g = x.payload), typeof g == "function")) {
                  f = g.call(b, f, h);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = x.payload),
                  (h = typeof g == "function" ? g.call(b, f, h) : g),
                  h == null)
                )
                  break e;
                f = He({}, f, h);
                break e;
              case 2:
                ur = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (h = o.effects),
            h === null ? (o.effects = [s]) : h.push(s));
        } else
          (b = {
            eventTime: b,
            lane: h,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            d === null ? ((u = d = b), (l = f)) : (d = d.next = b),
            (a |= h);
        if (((s = s.next), s === null)) {
          if (((s = o.shared.pending), s === null)) break;
          (h = s),
            (s = h.next),
            (h.next = null),
            (o.lastBaseUpdate = h),
            (o.shared.pending = null);
        }
      } while (1);
      if (
        (d === null && (l = f),
        (o.baseState = l),
        (o.firstBaseUpdate = u),
        (o.lastBaseUpdate = d),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (a |= o.lane), (o = o.next);
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      (Lr |= a), (e.lanes = a), (e.memoizedState = f);
    }
  }
  function _g(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(G(191, o));
          o.call(r);
        }
      }
  }
  var Ig = new Yh.Component().refs;
  function $d(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : He({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Bs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Tr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ot(),
        o = hr(e),
        i = Hn(r, o);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = cr(e, i, o)),
        t !== null && (yn(t, e, o, r), Ls(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ot(),
        o = hr(e),
        i = Hn(r, o);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = cr(e, i, o)),
        t !== null && (yn(t, e, o, r), Ls(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ot(),
        r = hr(e),
        o = Hn(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = cr(e, o, r)),
        t !== null && (yn(t, e, r, n), Ls(t, e, r));
    },
  };
  function $g(e, t, n, r, o, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !qi(n, r) || !qi(o, i)
        : !0
    );
  }
  function Mg(e, t, n) {
    var r = !1,
      o = sr,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Xt(i))
        : ((o = At(t) ? Rr : vt.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? To(e, o) : sr)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Bs),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Lg(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Bs.enqueueReplaceState(t, t.state, null);
  }
  function Md(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = Ig), Id(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = Xt(i))
      : ((i = At(t) ? Rr : vt.current), (o.context = To(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && ($d(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Bs.enqueueReplaceState(o, o.state, null),
        Fs(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ji(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(G(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(G(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var s = o.refs;
              s === Ig && (s = o.refs = {}),
                a === null ? delete s[i] : (s[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(G(284));
      if (!n._owner) throw Error(G(290, e));
    }
    return e;
  }
  function js(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        G(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Fg(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bg(e) {
    function t(y, m) {
      if (e) {
        var v = y.deletions;
        v === null ? ((y.deletions = [m]), (y.flags |= 16)) : v.push(m);
      }
    }
    function n(y, m) {
      if (!e) return null;
      for (; m !== null; ) t(y, m), (m = m.sibling);
      return null;
    }
    function r(y, m) {
      for (y = new Map(); m !== null; )
        m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling);
      return y;
    }
    function o(y, m) {
      return (y = gr(y, m)), (y.index = 0), (y.sibling = null), y;
    }
    function i(y, m, v) {
      return (
        (y.index = v),
        e
          ? ((v = y.alternate),
            v !== null
              ? ((v = v.index), v < m ? ((y.flags |= 2), m) : v)
              : ((y.flags |= 2), m))
          : ((y.flags |= 1048576), m)
      );
    }
    function a(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function s(y, m, v, S) {
      return m === null || m.tag !== 6
        ? ((m = yf(v, y.mode, S)), (m.return = y), m)
        : ((m = o(m, v)), (m.return = y), m);
    }
    function l(y, m, v, S) {
      var C = v.type;
      return C === mo
        ? d(y, m, v.props.children, S, v.key)
        : m !== null &&
          (m.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Zn &&
              Fg(C) === m.type))
        ? ((S = o(m, v.props)), (S.ref = Ji(y, m, v)), (S.return = y), S)
        : ((S = ol(v.type, v.key, v.props, null, y.mode, S)),
          (S.ref = Ji(y, m, v)),
          (S.return = y),
          S);
    }
    function u(y, m, v, S) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== v.containerInfo ||
        m.stateNode.implementation !== v.implementation
        ? ((m = bf(v, y.mode, S)), (m.return = y), m)
        : ((m = o(m, v.children || [])), (m.return = y), m);
    }
    function d(y, m, v, S, C) {
      return m === null || m.tag !== 7
        ? ((m = zr(v, y.mode, S, C)), (m.return = y), m)
        : ((m = o(m, v)), (m.return = y), m);
    }
    function f(y, m, v) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = yf("" + m, y.mode, v)), (m.return = y), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ts:
            return (
              (v = ol(m.type, m.key, m.props, null, y.mode, v)),
              (v.ref = Ji(y, null, m)),
              (v.return = y),
              v
            );
          case ho:
            return (m = bf(m, y.mode, v)), (m.return = y), m;
          case Zn:
            var S = m._init;
            return f(y, S(m._payload), v);
        }
        if (Ti(m) || Oi(m))
          return (m = zr(m, y.mode, v, null)), (m.return = y), m;
        js(y, m);
      }
      return null;
    }
    function h(y, m, v, S) {
      var C = m !== null ? m.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return C !== null ? null : s(y, m, "" + v, S);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ts:
            return v.key === C ? l(y, m, v, S) : null;
          case ho:
            return v.key === C ? u(y, m, v, S) : null;
          case Zn:
            return (C = v._init), h(y, m, C(v._payload), S);
        }
        if (Ti(v) || Oi(v)) return C !== null ? null : d(y, m, v, S, null);
        js(y, v);
      }
      return null;
    }
    function b(y, m, v, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (y = y.get(v) || null), s(m, y, "" + S, C);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ts:
            return (
              (y = y.get(S.key === null ? v : S.key) || null), l(m, y, S, C)
            );
          case ho:
            return (
              (y = y.get(S.key === null ? v : S.key) || null), u(m, y, S, C)
            );
          case Zn:
            var N = S._init;
            return b(y, m, v, N(S._payload), C);
        }
        if (Ti(S) || Oi(S)) return (y = y.get(v) || null), d(m, y, S, C, null);
        js(m, S);
      }
      return null;
    }
    function g(y, m, v, S) {
      for (
        var C = null, N = null, T = m, _ = (m = 0), I = null;
        T !== null && _ < v.length;
        _++
      ) {
        T.index > _ ? ((I = T), (T = null)) : (I = T.sibling);
        var j = h(y, T, v[_], S);
        if (j === null) {
          T === null && (T = I);
          break;
        }
        e && T && j.alternate === null && t(y, T),
          (m = i(j, m, _)),
          N === null ? (C = j) : (N.sibling = j),
          (N = j),
          (T = I);
      }
      if (_ === v.length) return n(y, T), De && _r(y, _), C;
      if (T === null) {
        for (; _ < v.length; _++)
          (T = f(y, v[_], S)),
            T !== null &&
              ((m = i(T, m, _)),
              N === null ? (C = T) : (N.sibling = T),
              (N = T));
        return De && _r(y, _), C;
      }
      for (T = r(y, T); _ < v.length; _++)
        (I = b(T, y, _, v[_], S)),
          I !== null &&
            (e && I.alternate !== null && T.delete(I.key === null ? _ : I.key),
            (m = i(I, m, _)),
            N === null ? (C = I) : (N.sibling = I),
            (N = I));
      return (
        e &&
          T.forEach(function (H) {
            return t(y, H);
          }),
        De && _r(y, _),
        C
      );
    }
    function x(y, m, v, S) {
      var C = Oi(v);
      if (typeof C != "function") throw Error(G(150));
      if (((v = C.call(v)), v == null)) throw Error(G(151));
      for (
        var N = (C = null), T = m, _ = (m = 0), I = null, j = v.next();
        T !== null && !j.done;
        _++, j = v.next()
      ) {
        T.index > _ ? ((I = T), (T = null)) : (I = T.sibling);
        var H = h(y, T, j.value, S);
        if (H === null) {
          T === null && (T = I);
          break;
        }
        e && T && H.alternate === null && t(y, T),
          (m = i(H, m, _)),
          N === null ? (C = H) : (N.sibling = H),
          (N = H),
          (T = I);
      }
      if (j.done) return n(y, T), De && _r(y, _), C;
      if (T === null) {
        for (; !j.done; _++, j = v.next())
          (j = f(y, j.value, S)),
            j !== null &&
              ((m = i(j, m, _)),
              N === null ? (C = j) : (N.sibling = j),
              (N = j));
        return De && _r(y, _), C;
      }
      for (T = r(y, T); !j.done; _++, j = v.next())
        (j = b(T, y, _, j.value, S)),
          j !== null &&
            (e && j.alternate !== null && T.delete(j.key === null ? _ : j.key),
            (m = i(j, m, _)),
            N === null ? (C = j) : (N.sibling = j),
            (N = j));
      return (
        e &&
          T.forEach(function (V) {
            return t(y, V);
          }),
        De && _r(y, _),
        C
      );
    }
    function R(y, m, v, S) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === mo &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case ts:
            e: {
              for (var C = v.key, N = m; N !== null; ) {
                if (N.key === C) {
                  if (((C = v.type), C === mo)) {
                    if (N.tag === 7) {
                      n(y, N.sibling),
                        (m = o(N, v.props.children)),
                        (m.return = y),
                        (y = m);
                      break e;
                    }
                  } else if (
                    N.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Zn &&
                      Fg(C) === N.type)
                  ) {
                    n(y, N.sibling),
                      (m = o(N, v.props)),
                      (m.ref = Ji(y, N, v)),
                      (m.return = y),
                      (y = m);
                    break e;
                  }
                  n(y, N);
                  break;
                } else t(y, N);
                N = N.sibling;
              }
              v.type === mo
                ? ((m = zr(v.props.children, y.mode, S, v.key)),
                  (m.return = y),
                  (y = m))
                : ((S = ol(v.type, v.key, v.props, null, y.mode, S)),
                  (S.ref = Ji(y, m, v)),
                  (S.return = y),
                  (y = S));
            }
            return a(y);
          case ho:
            e: {
              for (N = v.key; m !== null; ) {
                if (m.key === N)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === v.containerInfo &&
                    m.stateNode.implementation === v.implementation
                  ) {
                    n(y, m.sibling),
                      (m = o(m, v.children || [])),
                      (m.return = y),
                      (y = m);
                    break e;
                  } else {
                    n(y, m);
                    break;
                  }
                else t(y, m);
                m = m.sibling;
              }
              (m = bf(v, y.mode, S)), (m.return = y), (y = m);
            }
            return a(y);
          case Zn:
            return (N = v._init), R(y, m, N(v._payload), S);
        }
        if (Ti(v)) return g(y, m, v, S);
        if (Oi(v)) return x(y, m, v, S);
        js(y, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          m !== null && m.tag === 6
            ? (n(y, m.sibling), (m = o(m, v)), (m.return = y), (y = m))
            : (n(y, m), (m = yf(v, y.mode, S)), (m.return = y), (y = m)),
          a(y))
        : n(y, m);
    }
    return R;
  }
  var $o = Bg(!0),
    jg = Bg(!1),
    ea = {},
    En = ar(ea),
    ta = ar(ea),
    na = ar(ea);
  function $r(e) {
    if (e === ea) throw Error(G(174));
    return e;
  }
  function Ld(e, t) {
    switch ((Fe(na, t), Fe(ta, e), Fe(En, ea), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Mc(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Mc(t, e));
    }
    ze(En), Fe(En, t);
  }
  function Mo() {
    ze(En), ze(ta), ze(na);
  }
  function zg(e) {
    $r(na.current);
    var t = $r(En.current),
      n = Mc(t, e.type);
    t !== n && (Fe(ta, e), Fe(En, n));
  }
  function Fd(e) {
    ta.current === e && (ze(En), ze(ta));
  }
  var qe = ar(0);
  function zs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Bd = [];
  function jd() {
    for (var e = 0; e < Bd.length; e++)
      Bd[e]._workInProgressVersionPrimary = null;
    Bd.length = 0;
  }
  var Us = jn.ReactCurrentDispatcher,
    zd = jn.ReactCurrentBatchConfig,
    Mr = 0,
    Ge = null,
    ot = null,
    st = null,
    Ds = !1,
    ra = !1,
    oa = 0,
    Jx = 0;
  function yt() {
    throw Error(G(321));
  }
  function Ud(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pn(e[n], t[n])) return !1;
    return !0;
  }
  function Dd(e, t, n, r, o, i) {
    if (
      ((Mr = i),
      (Ge = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Us.current = e === null || e.memoizedState === null ? r2 : o2),
      (e = n(r, o)),
      ra)
    ) {
      i = 0;
      do {
        if (((ra = !1), (oa = 0), 25 <= i)) throw Error(G(301));
        (i += 1),
          (st = ot = null),
          (t.updateQueue = null),
          (Us.current = i2),
          (e = n(r, o));
      } while (ra);
    }
    if (
      ((Us.current = Hs),
      (t = ot !== null && ot.next !== null),
      (Mr = 0),
      (st = ot = Ge = null),
      (Ds = !1),
      t)
    )
      throw Error(G(300));
    return e;
  }
  function Wd() {
    var e = oa !== 0;
    return (oa = 0), e;
  }
  function Cn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return st === null ? (Ge.memoizedState = st = e) : (st = st.next = e), st;
  }
  function Zt() {
    if (ot === null) {
      var e = Ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ot.next;
    var t = st === null ? Ge.memoizedState : st.next;
    if (t !== null) (st = t), (ot = e);
    else {
      if (e === null) throw Error(G(310));
      (ot = e),
        (e = {
          memoizedState: ot.memoizedState,
          baseState: ot.baseState,
          baseQueue: ot.baseQueue,
          queue: ot.queue,
          next: null,
        }),
        st === null ? (Ge.memoizedState = st = e) : (st = st.next = e);
    }
    return st;
  }
  function ia(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vd(e) {
    var t = Zt(),
      n = t.queue;
    if (n === null) throw Error(G(311));
    n.lastRenderedReducer = e;
    var r = ot,
      o = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var a = o.next;
        (o.next = i.next), (i.next = a);
      }
      (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
      (i = o.next), (r = r.baseState);
      var s = (a = null),
        l = null,
        u = i;
      do {
        var d = u.lane;
        if ((Mr & d) === d)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var f = {
            lane: d,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((s = l = f), (a = r)) : (l = l.next = f),
            (Ge.lanes |= d),
            (Lr |= d);
        }
        u = u.next;
      } while (u !== null && u !== i);
      l === null ? (a = r) : (l.next = s),
        pn(r, t.memoizedState) || (Rt = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (Ge.lanes |= i), (Lr |= i), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Hd(e) {
    var t = Zt(),
      n = t.queue;
    if (n === null) throw Error(G(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = (o = o.next);
      do (i = e(i, a.action)), (a = a.next);
      while (a !== o);
      pn(i, t.memoizedState) || (Rt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Ug() {}
  function Dg(e, t) {
    var n = Ge,
      r = Zt(),
      o = t(),
      i = !pn(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (Rt = !0)),
      (r = r.queue),
      qd(Hg.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (st !== null && st.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        aa(9, Vg.bind(null, n, r, o, t), void 0, null),
        lt === null)
      )
        throw Error(G(349));
      Mr & 30 || Wg(n, t, o);
    }
    return o;
  }
  function Wg(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ge.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Vg(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), qg(t) && Gg(e);
  }
  function Hg(e, t, n) {
    return n(function () {
      qg(t) && Gg(e);
    });
  }
  function qg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pn(e, n);
    } catch {
      return !0;
    }
  }
  function Gg(e) {
    var t = Vn(e, 1);
    t !== null && yn(t, e, 1, -1);
  }
  function Kg(e) {
    var t = Cn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ia,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = n2.bind(null, Ge, e)),
      [t.memoizedState, e]
    );
  }
  function aa(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ge.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Yg() {
    return Zt().memoizedState;
  }
  function Ws(e, t, n, r) {
    var o = Cn();
    (Ge.flags |= e),
      (o.memoizedState = aa(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Vs(e, t, n, r) {
    var o = Zt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ot !== null) {
      var a = ot.memoizedState;
      if (((i = a.destroy), r !== null && Ud(r, a.deps))) {
        o.memoizedState = aa(t, n, i, r);
        return;
      }
    }
    (Ge.flags |= e), (o.memoizedState = aa(1 | t, n, i, r));
  }
  function Xg(e, t) {
    return Ws(8390656, 8, e, t);
  }
  function qd(e, t) {
    return Vs(2048, 8, e, t);
  }
  function Zg(e, t) {
    return Vs(4, 2, e, t);
  }
  function Qg(e, t) {
    return Vs(4, 4, e, t);
  }
  function Jg(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function e0(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Vs(4, 4, Jg.bind(null, t, e), n)
    );
  }
  function Gd() {}
  function t0(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ud(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function n0(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ud(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function r0(e, t, n) {
    return Mr & 21
      ? (pn(n, t) ||
          ((n = Am()), (Ge.lanes |= n), (Lr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = n));
  }
  function e2(e, t) {
    var n = Ie;
    (Ie = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = zd.transition;
    zd.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ie = n), (zd.transition = r);
    }
  }
  function o0() {
    return Zt().memoizedState;
  }
  function t2(e, t, n) {
    var r = hr(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      i0(e))
    )
      a0(t, n);
    else if (((n = Ag(e, t, n, r)), n !== null)) {
      var o = Ot();
      yn(n, e, r, o), s0(n, t, r);
    }
  }
  function n2(e, t, n) {
    var r = hr(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (i0(e)) a0(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var a = t.lastRenderedState,
            s = i(a, n);
          if (((o.hasEagerState = !0), (o.eagerState = s), pn(s, a))) {
            var l = t.interleaved;
            l === null
              ? ((o.next = o), _d(t))
              : ((o.next = l.next), (l.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ag(e, t, o, r)),
        n !== null && ((o = Ot()), yn(n, e, r, o), s0(n, t, r));
    }
  }
  function i0(e) {
    var t = e.alternate;
    return e === Ge || (t !== null && t === Ge);
  }
  function a0(e, t) {
    ra = Ds = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function s0(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gc(e, n);
    }
  }
  var Hs = {
      readContext: Xt,
      useCallback: yt,
      useContext: yt,
      useEffect: yt,
      useImperativeHandle: yt,
      useInsertionEffect: yt,
      useLayoutEffect: yt,
      useMemo: yt,
      useReducer: yt,
      useRef: yt,
      useState: yt,
      useDebugValue: yt,
      useDeferredValue: yt,
      useTransition: yt,
      useMutableSource: yt,
      useSyncExternalStore: yt,
      useId: yt,
      unstable_isNewReconciler: !1,
    },
    r2 = {
      readContext: Xt,
      useCallback: function (e, t) {
        return (Cn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Xt,
      useEffect: Xg,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ws(4194308, 4, Jg.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ws(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ws(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Cn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Cn();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = t2.bind(null, Ge, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Cn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Kg,
      useDebugValue: Gd,
      useDeferredValue: function (e) {
        return (Cn().memoizedState = e);
      },
      useTransition: function () {
        var e = Kg(!1),
          t = e[0];
        return (e = e2.bind(null, e[1])), (Cn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ge,
          o = Cn();
        if (De) {
          if (n === void 0) throw Error(G(407));
          n = n();
        } else {
          if (((n = t()), lt === null)) throw Error(G(349));
          Mr & 30 || Wg(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          Xg(Hg.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          aa(9, Vg.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Cn(),
          t = lt.identifierPrefix;
        if (De) {
          var n = Wn,
            r = Dn;
          (n = (r & ~(1 << (32 - fn(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = oa++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Jx++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    o2 = {
      readContext: Xt,
      useCallback: t0,
      useContext: Xt,
      useEffect: qd,
      useImperativeHandle: e0,
      useInsertionEffect: Zg,
      useLayoutEffect: Qg,
      useMemo: n0,
      useReducer: Vd,
      useRef: Yg,
      useState: function () {
        return Vd(ia);
      },
      useDebugValue: Gd,
      useDeferredValue: function (e) {
        var t = Zt();
        return r0(t, ot.memoizedState, e);
      },
      useTransition: function () {
        var e = Vd(ia)[0],
          t = Zt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ug,
      useSyncExternalStore: Dg,
      useId: o0,
      unstable_isNewReconciler: !1,
    },
    i2 = {
      readContext: Xt,
      useCallback: t0,
      useContext: Xt,
      useEffect: qd,
      useImperativeHandle: e0,
      useInsertionEffect: Zg,
      useLayoutEffect: Qg,
      useMemo: n0,
      useReducer: Hd,
      useRef: Yg,
      useState: function () {
        return Hd(ia);
      },
      useDebugValue: Gd,
      useDeferredValue: function (e) {
        var t = Zt();
        return ot === null ? (t.memoizedState = e) : r0(t, ot.memoizedState, e);
      },
      useTransition: function () {
        var e = Hd(ia)[0],
          t = Zt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ug,
      useSyncExternalStore: Dg,
      useId: o0,
      unstable_isNewReconciler: !1,
    };
  function Lo(e, t) {
    try {
      var n = "",
        r = t;
      do (n += IS(r)), (r = r.return);
      while (r);
      var o = n;
    } catch (i) {
      o =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Kd(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Yd(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var a2 = typeof WeakMap == "function" ? WeakMap : Map;
  function l0(e, t, n) {
    (n = Hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Qs || ((Qs = !0), (cf = r)), Yd(e, t);
      }),
      n
    );
  }
  function u0(e, t, n) {
    (n = Hn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          Yd(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Yd(e, t),
            typeof r != "function" &&
              (fr === null ? (fr = new Set([this])) : fr.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function c0(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new a2();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = w2.bind(null, e, t, n)), t.then(e, e));
  }
  function d0(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function f0(e, t, n, r, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Hn(-1, 1)), (t.tag = 2), cr(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var s2 = jn.ReactCurrentOwner,
    Rt = !1;
  function Ct(e, t, n, r) {
    t.child = e === null ? jg(t, null, n, r) : $o(t, e.child, n, r);
  }
  function p0(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      Io(t, o),
      (r = Dd(e, t, n, r, i, o)),
      (n = Wd()),
      e !== null && !Rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          qn(e, t, o))
        : (De && n && kd(t), (t.flags |= 1), Ct(e, t, r, o), t.child)
    );
  }
  function h0(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !vf(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), m0(e, t, i, r, o))
        : ((e = ol(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var a = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : qi), n(a, r) && e.ref === t.ref)
      )
        return qn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = gr(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function m0(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qi(i, r) && e.ref === t.ref)
        if (((Rt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (Rt = !0);
        else return (t.lanes = e.lanes), qn(e, t, o);
    }
    return Xd(e, t, n, r, o);
  }
  function g0(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Fe(Bo, Wt),
          (Wt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Fe(Bo, Wt),
            (Wt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          Fe(Bo, Wt),
          (Wt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Fe(Bo, Wt),
        (Wt |= r);
    return Ct(e, t, o, n), t.child;
  }
  function v0(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Xd(e, t, n, r, o) {
    var i = At(n) ? Rr : vt.current;
    return (
      (i = To(t, i)),
      Io(t, o),
      (n = Dd(e, t, n, r, i, o)),
      (r = Wd()),
      e !== null && !Rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          qn(e, t, o))
        : (De && r && kd(t), (t.flags |= 1), Ct(e, t, n, o), t.child)
    );
  }
  function y0(e, t, n, r, o) {
    if (At(n)) {
      var i = !0;
      As(t);
    } else i = !1;
    if ((Io(t, o), t.stateNode === null))
      Gs(e, t), Mg(t, n, r), Md(t, n, r, o), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var l = a.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = Xt(u))
        : ((u = At(n) ? Rr : vt.current), (u = To(t, u)));
      var d = n.getDerivedStateFromProps,
        f =
          typeof d == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== r || l !== u) && Lg(t, a, r, u)),
        (ur = !1);
      var h = t.memoizedState;
      (a.state = h),
        Fs(t, r, a, o),
        (l = t.memoizedState),
        s !== r || h !== l || Tt.current || ur
          ? (typeof d == "function" && ($d(t, n, d, r), (l = t.memoizedState)),
            (s = ur || $g(t, n, s, r, h, l, u))
              ? (f ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (a.props = r),
            (a.state = l),
            (a.context = u),
            (r = s))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        Rg(e, t),
        (s = t.memoizedProps),
        (u = t.type === t.elementType ? s : mn(t.type, s)),
        (a.props = u),
        (f = t.pendingProps),
        (h = a.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = Xt(l))
          : ((l = At(n) ? Rr : vt.current), (l = To(t, l)));
      var b = n.getDerivedStateFromProps;
      (d =
        typeof b == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== f || h !== l) && Lg(t, a, r, l)),
        (ur = !1),
        (h = t.memoizedState),
        (a.state = h),
        Fs(t, r, a, o);
      var g = t.memoizedState;
      s !== f || h !== g || Tt.current || ur
        ? (typeof b == "function" && ($d(t, n, b, r), (g = t.memoizedState)),
          (u = ur || $g(t, n, u, r, h, g, l) || !1)
            ? (d ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, g, l),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, g, l)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (s === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = g)),
          (a.props = r),
          (a.state = g),
          (a.context = l),
          (r = u))
        : (typeof a.componentDidUpdate != "function" ||
            (s === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Zd(e, t, n, r, i, o);
  }
  function Zd(e, t, n, r, o, i) {
    v0(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && xg(t, n, !1), qn(e, t, i);
    (r = t.stateNode), (s2.current = t);
    var s =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = $o(t, e.child, null, i)), (t.child = $o(t, null, s, i)))
        : Ct(e, t, s, i),
      (t.memoizedState = r.state),
      o && xg(t, n, !0),
      t.child
    );
  }
  function b0(e) {
    var t = e.stateNode;
    t.pendingContext
      ? wg(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && wg(e, t.context, !1),
      Ld(e, t.containerInfo);
  }
  function w0(e, t, n, r, o) {
    return Po(), Nd(o), (t.flags |= 256), Ct(e, t, n, r), t.child;
  }
  var Qd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jd(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function S0(e, t, n) {
    var r = t.pendingProps,
      o = qe.current,
      i = !1,
      a = (t.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      s
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      Fe(qe, o & 1),
      e === null)
    )
      return (
        Od(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((a = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (a = { mode: "hidden", children: a }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = a))
                  : (i = il(a, r, 0, null)),
                (e = zr(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Jd(n)),
                (t.memoizedState = Qd),
                e)
              : ef(t, a))
      );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
      return l2(e, t, a, r, s, o, n);
    if (i) {
      (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(a & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = gr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        s !== null ? (i = gr(s, i)) : ((i = zr(i, a, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? Jd(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Qd),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = gr(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ef(e, t) {
    return (
      (t = il({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function qs(e, t, n, r) {
    return (
      r !== null && Nd(r),
      $o(t, e.child, null, n),
      (e = ef(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function l2(e, t, n, r, o, i, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Kd(Error(G(422)))), qs(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = il({ mode: "visible", children: r.children }, o, 0, null)),
          (i = zr(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && $o(t, e.child, null, a),
          (t.child.memoizedState = Jd(a)),
          (t.memoizedState = Qd),
          i);
    if (!(t.mode & 1)) return qs(e, t, a, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (i = Error(G(419))), (r = Kd(i, r, void 0)), qs(e, t, a, r)
      );
    }
    if (((s = (a & e.childLanes) !== 0), Rt || s)) {
      if (((r = lt), r !== null)) {
        switch (a & -a) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = o & (r.suspendedLanes | a) ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), Vn(e, o), yn(r, e, o, -1));
      }
      return gf(), (r = Kd(Error(G(421)))), qs(e, t, a, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = S2.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Dt = ir(o.nextSibling)),
        (Ut = t),
        (De = !0),
        (hn = null),
        e !== null &&
          ((Kt[Yt++] = Dn),
          (Kt[Yt++] = Wn),
          (Kt[Yt++] = Pr),
          (Dn = e.id),
          (Wn = e.overflow),
          (Pr = t)),
        (t = ef(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function x0(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Pd(e.return, t, n);
  }
  function tf(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = o));
  }
  function k0(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((Ct(e, t, r.children, n), (r = qe.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && x0(e, n, t);
          else if (e.tag === 19) x0(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Fe(qe, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && zs(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            tf(t, !1, o, n, i);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && zs(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          tf(t, !0, n, null, i);
          break;
        case "together":
          tf(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Gs(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function qn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Lr |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(G(153));
    if (t.child !== null) {
      for (
        e = t.child, n = gr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = gr(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function u2(e, t, n) {
    switch (t.tag) {
      case 3:
        b0(t), Po();
        break;
      case 5:
        zg(t);
        break;
      case 1:
        At(t.type) && As(t);
        break;
      case 4:
        Ld(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        Fe($s, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Fe(qe, qe.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? S0(e, t, n)
            : (Fe(qe, qe.current & 1),
              (e = qn(e, t, n)),
              e !== null ? e.sibling : null);
        Fe(qe, qe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return k0(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Fe(qe, qe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), g0(e, t, n);
    }
    return qn(e, t, n);
  }
  var E0, nf, C0, O0;
  (E0 = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (nf = function () {}),
    (C0 = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), $r(En.current);
        var i = null;
        switch (n) {
          case "input":
            (o = Pc(e, o)), (r = Pc(e, r)), (i = []);
            break;
          case "select":
            (o = He({}, o, { value: void 0 })),
              (r = He({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (o = $c(e, o)), (r = $c(e, r)), (i = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Os);
        }
        Lc(n, r);
        var a;
        n = null;
        for (u in o)
          if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
            if (u === "style") {
              var s = o[u];
              for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              u !== "dangerouslySetInnerHTML" &&
                u !== "children" &&
                u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                u !== "autoFocus" &&
                (Ci.hasOwnProperty(u)
                  ? i || (i = [])
                  : (i = i || []).push(u, null));
        for (u in r) {
          var l = r[u];
          if (
            ((s = o == null ? void 0 : o[u]),
            r.hasOwnProperty(u) && l !== s && (l != null || s != null))
          )
            if (u === "style")
              if (s) {
                for (a in s)
                  !s.hasOwnProperty(a) ||
                    (l && l.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in l)
                  l.hasOwnProperty(a) &&
                    s[a] !== l[a] &&
                    (n || (n = {}), (n[a] = l[a]));
              } else n || (i || (i = []), i.push(u, n)), (n = l);
            else
              u === "dangerouslySetInnerHTML"
                ? ((l = l ? l.__html : void 0),
                  (s = s ? s.__html : void 0),
                  l != null && s !== l && (i = i || []).push(u, l))
                : u === "children"
                ? (typeof l != "string" && typeof l != "number") ||
                  (i = i || []).push(u, "" + l)
                : u !== "suppressContentEditableWarning" &&
                  u !== "suppressHydrationWarning" &&
                  (Ci.hasOwnProperty(u)
                    ? (l != null && u === "onScroll" && je("scroll", e),
                      i || s === l || (i = []))
                    : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    }),
    (O0 = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function sa(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function bt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function c2(e, t, n) {
    var r = t.pendingProps;
    switch ((Ed(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bt(t), null;
      case 1:
        return At(t.type) && Ts(), bt(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Mo(),
          ze(Tt),
          ze(vt),
          jd(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Is(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), hn !== null && (pf(hn), (hn = null)))),
          nf(e, t),
          bt(t),
          null
        );
      case 5:
        Fd(t);
        var o = $r(na.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          C0(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(G(166));
            return bt(t), null;
          }
          if (((e = $r(En.current)), Is(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[kn] = t), (r[Zi] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                je("cancel", r), je("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                je("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ki.length; o++) je(Ki[o], r);
                break;
              case "source":
                je("error", r);
                break;
              case "img":
              case "image":
              case "link":
                je("error", r), je("load", r);
                break;
              case "details":
                je("toggle", r);
                break;
              case "input":
                im(r, i), je("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  je("invalid", r);
                break;
              case "textarea":
                lm(r, i), je("invalid", r);
            }
            Lc(n, i), (o = null);
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var s = i[a];
                a === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Cs(r.textContent, s, e),
                      (o = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Cs(r.textContent, s, e),
                      (o = ["children", "" + s]))
                  : Ci.hasOwnProperty(a) &&
                    s != null &&
                    a === "onScroll" &&
                    je("scroll", r);
              }
            switch (n) {
              case "input":
                ns(r), sm(r, i, !0);
                break;
              case "textarea":
                ns(r), cm(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Os);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = dm(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[kn] = t),
              (e[Zi] = r),
              E0(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = Fc(n, r)), n)) {
                case "dialog":
                  je("cancel", e), je("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  je("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Ki.length; o++) je(Ki[o], e);
                  o = r;
                  break;
                case "source":
                  je("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  je("error", e), je("load", e), (o = r);
                  break;
                case "details":
                  je("toggle", e), (o = r);
                  break;
                case "input":
                  im(e, r), (o = Pc(e, r)), je("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = He({}, r, { value: void 0 })),
                    je("invalid", e);
                  break;
                case "textarea":
                  lm(e, r), (o = $c(e, r)), je("invalid", e);
                  break;
                default:
                  o = r;
              }
              Lc(n, o), (s = o);
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var l = s[i];
                  i === "style"
                    ? hm(e, l)
                    : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && fm(e, l))
                    : i === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Ai(e, l)
                      : typeof l == "number" && Ai(e, "" + l)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (Ci.hasOwnProperty(i)
                        ? l != null && i === "onScroll" && je("scroll", e)
                        : l != null && wc(e, i, l, a));
                }
              switch (n) {
                case "input":
                  ns(e), sm(e, r, !1);
                  break;
                case "textarea":
                  ns(e), cm(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Qn(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? go(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        go(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Os);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return bt(t), null;
      case 6:
        if (e && t.stateNode != null) O0(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(G(166));
          if (((n = $r(na.current)), $r(En.current), Is(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[kn] = t),
              (i = r.nodeValue !== n) && ((e = Ut), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Cs(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Cs(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[kn] = t),
              (t.stateNode = r);
        }
        return bt(t), null;
      case 13:
        if (
          (ze(qe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && Dt !== null && t.mode & 1 && !(t.flags & 128))
            Tg(), Po(), (t.flags |= 98560), (i = !1);
          else if (((i = Is(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(G(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(G(317));
              i[kn] = t;
            } else
              Po(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            bt(t), (i = !1);
          } else hn !== null && (pf(hn), (hn = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || qe.current & 1 ? it === 0 && (it = 3) : gf())),
            t.updateQueue !== null && (t.flags |= 4),
            bt(t),
            null);
      case 4:
        return (
          Mo(),
          nf(e, t),
          e === null && Yi(t.stateNode.containerInfo),
          bt(t),
          null
        );
      case 10:
        return Rd(t.type._context), bt(t), null;
      case 17:
        return At(t.type) && Ts(), bt(t), null;
      case 19:
        if ((ze(qe), (i = t.memoizedState), i === null)) return bt(t), null;
        if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (r) sa(i, !1);
          else {
            if (it !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = zs(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      sa(i, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (a = i.alternate),
                      a === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = a.childLanes),
                          (i.lanes = a.lanes),
                          (i.child = a.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = a.memoizedProps),
                          (i.memoizedState = a.memoizedState),
                          (i.updateQueue = a.updateQueue),
                          (i.type = a.type),
                          (e = a.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Fe(qe, (qe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Je() > jo &&
              ((t.flags |= 128), (r = !0), sa(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = zs(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                sa(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !De)
              )
                return bt(t), null;
            } else
              2 * Je() - i.renderingStartTime > jo &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), sa(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = i.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (i.last = a));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Je()),
            (t.sibling = null),
            (n = qe.current),
            Fe(qe, r ? (n & 1) | 2 : n & 1),
            t)
          : (bt(t), null);
      case 22:
      case 23:
        return (
          mf(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Wt & 1073741824 &&
              (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : bt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(G(156, t.tag));
  }
  function d2(e, t) {
    switch ((Ed(t), t.tag)) {
      case 1:
        return (
          At(t.type) && Ts(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Mo(),
          ze(Tt),
          ze(vt),
          jd(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Fd(t), null;
      case 13:
        if (
          (ze(qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(G(340));
          Po();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ze(qe), null;
      case 4:
        return Mo(), null;
      case 10:
        return Rd(t.type._context), null;
      case 22:
      case 23:
        return mf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ks = !1,
    wt = !1,
    f2 = typeof WeakSet == "function" ? WeakSet : Set,
    te = null;
  function Fo(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ye(e, t, r);
        }
      else n.current = null;
  }
  function N0(e, t, n) {
    try {
      n();
    } catch (r) {
      Ye(e, t, r);
    }
  }
  var T0 = !1;
  function p2(e, t) {
    if (((md = hs), (e = og()), sd(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              s = -1,
              l = -1,
              u = 0,
              d = 0,
              f = e,
              h = null;
            t: for (;;) {
              for (
                var b;
                f !== n || (o !== 0 && f.nodeType !== 3) || (s = a + o),
                  f !== i || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                  f.nodeType === 3 && (a += f.nodeValue.length),
                  (b = f.firstChild) !== null;

              )
                (h = f), (f = b);
              for (;;) {
                if (f === e) break t;
                if (
                  (h === n && ++u === o && (s = a),
                  h === i && ++d === r && (l = a),
                  (b = f.nextSibling) !== null)
                )
                  break;
                (f = h), (h = f.parentNode);
              }
              f = b;
            }
            n = s === -1 || l === -1 ? null : { start: s, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      gd = { focusedElem: e, selectionRange: n }, hs = !1, te = t;
      te !== null;

    )
      if (
        ((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (te = e);
      else
        for (; te !== null; ) {
          t = te;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var x = g.memoizedProps,
                      R = g.memoizedState,
                      y = t.stateNode,
                      m = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? x : mn(t.type, x),
                        R,
                      );
                    y.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(G(163));
              }
          } catch (S) {
            Ye(t, t.return, S);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (te = e);
            break;
          }
          te = t.return;
        }
    return (g = T0), (T0 = !1), g;
  }
  function la(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && N0(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Ys(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function rf(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function A0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), A0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[kn],
          delete t[Zi],
          delete t[wd],
          delete t[Yx],
          delete t[Xx])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function R0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function P0(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || R0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function of(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Os));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (of(e, t, n), e = e.sibling; e !== null; )
        of(e, t, n), (e = e.sibling);
  }
  function af(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (af(e, t, n), e = e.sibling; e !== null; )
        af(e, t, n), (e = e.sibling);
  }
  var pt = null,
    gn = !1;
  function dr(e, t, n) {
    for (n = n.child; n !== null; ) _0(e, t, n), (n = n.sibling);
  }
  function _0(e, t, n) {
    if (xn && typeof xn.onCommitFiberUnmount == "function")
      try {
        xn.onCommitFiberUnmount(ls, n);
      } catch {}
    switch (n.tag) {
      case 5:
        wt || Fo(n, t);
      case 6:
        var r = pt,
          o = gn;
        (pt = null),
          dr(e, t, n),
          (pt = r),
          (gn = o),
          pt !== null &&
            (gn
              ? ((e = pt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : pt.removeChild(n.stateNode));
        break;
      case 18:
        pt !== null &&
          (gn
            ? ((e = pt),
              (n = n.stateNode),
              e.nodeType === 8
                ? bd(e.parentNode, n)
                : e.nodeType === 1 && bd(e, n),
              zi(e))
            : bd(pt, n.stateNode));
        break;
      case 4:
        (r = pt),
          (o = gn),
          (pt = n.stateNode.containerInfo),
          (gn = !0),
          dr(e, t, n),
          (pt = r),
          (gn = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !wt &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              a = i.destroy;
            (i = i.tag),
              a !== void 0 && (i & 2 || i & 4) && N0(n, t, a),
              (o = o.next);
          } while (o !== r);
        }
        dr(e, t, n);
        break;
      case 1:
        if (
          !wt &&
          (Fo(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (s) {
            Ye(n, t, s);
          }
        dr(e, t, n);
        break;
      case 21:
        dr(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((wt = (r = wt) || n.memoizedState !== null), dr(e, t, n), (wt = r))
          : dr(e, t, n);
        break;
      default:
        dr(e, t, n);
    }
  }
  function I0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new f2()),
        t.forEach(function (r) {
          var o = x2.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function vn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var i = e,
            a = t,
            s = a;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (pt = s.stateNode), (gn = !1);
                break e;
              case 3:
                (pt = s.stateNode.containerInfo), (gn = !0);
                break e;
              case 4:
                (pt = s.stateNode.containerInfo), (gn = !0);
                break e;
            }
            s = s.return;
          }
          if (pt === null) throw Error(G(160));
          _0(i, a, o), (pt = null), (gn = !1);
          var l = o.alternate;
          l !== null && (l.return = null), (o.return = null);
        } catch (u) {
          Ye(o, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) $0(t, e), (t = t.sibling);
  }
  function $0(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vn(t, e), On(e), r & 4)) {
          try {
            la(3, e, e.return), Ys(3, e);
          } catch (x) {
            Ye(e, e.return, x);
          }
          try {
            la(5, e, e.return);
          } catch (x) {
            Ye(e, e.return, x);
          }
        }
        break;
      case 1:
        vn(t, e), On(e), r & 512 && n !== null && Fo(n, n.return);
        break;
      case 5:
        if (
          (vn(t, e),
          On(e),
          r & 512 && n !== null && Fo(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Ai(o, "");
          } catch (x) {
            Ye(e, e.return, x);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            a = n !== null ? n.memoizedProps : i,
            s = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              s === "input" && i.type === "radio" && i.name != null && am(o, i),
                Fc(s, a);
              var u = Fc(s, i);
              for (a = 0; a < l.length; a += 2) {
                var d = l[a],
                  f = l[a + 1];
                d === "style"
                  ? hm(o, f)
                  : d === "dangerouslySetInnerHTML"
                  ? fm(o, f)
                  : d === "children"
                  ? Ai(o, f)
                  : wc(o, d, f, u);
              }
              switch (s) {
                case "input":
                  _c(o, i);
                  break;
                case "textarea":
                  um(o, i);
                  break;
                case "select":
                  var h = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var b = i.value;
                  b != null
                    ? go(o, !!i.multiple, b, !1)
                    : h !== !!i.multiple &&
                      (i.defaultValue != null
                        ? go(o, !!i.multiple, i.defaultValue, !0)
                        : go(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[Zi] = i;
            } catch (x) {
              Ye(e, e.return, x);
            }
        }
        break;
      case 6:
        if ((vn(t, e), On(e), r & 4)) {
          if (e.stateNode === null) throw Error(G(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (x) {
            Ye(e, e.return, x);
          }
        }
        break;
      case 3:
        if (
          (vn(t, e), On(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            zi(t.containerInfo);
          } catch (x) {
            Ye(e, e.return, x);
          }
        break;
      case 4:
        vn(t, e), On(e);
        break;
      case 13:
        vn(t, e),
          On(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (uf = Je())),
          r & 4 && I0(e);
        break;
      case 22:
        if (
          ((d = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((wt = (u = wt) || d), vn(t, e), (wt = u)) : vn(t, e),
          On(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
          )
            for (te = e, d = e.child; d !== null; ) {
              for (f = te = d; te !== null; ) {
                switch (((h = te), (b = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    la(4, h, h.return);
                    break;
                  case 1:
                    Fo(h, h.return);
                    var g = h.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (r = h), (n = h.return);
                      try {
                        (t = r),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (x) {
                        Ye(r, n, x);
                      }
                    }
                    break;
                  case 5:
                    Fo(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      F0(f);
                      continue;
                    }
                }
                b !== null ? ((b.return = h), (te = b)) : F0(f);
              }
              d = d.sibling;
            }
          e: for (d = null, f = e; ; ) {
            if (f.tag === 5) {
              if (d === null) {
                d = f;
                try {
                  (o = f.stateNode),
                    u
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((s = f.stateNode),
                        (l = f.memoizedProps.style),
                        (a =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (s.style.display = pm("display", a)));
                } catch (x) {
                  Ye(e, e.return, x);
                }
              }
            } else if (f.tag === 6) {
              if (d === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (x) {
                  Ye(e, e.return, x);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              d === f && (d = null), (f = f.return);
            }
            d === f && (d = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        vn(t, e), On(e), r & 4 && I0(e);
        break;
      case 21:
        break;
      default:
        vn(t, e), On(e);
    }
  }
  function On(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (R0(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(G(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Ai(o, ""), (r.flags &= -33));
            var i = P0(e);
            af(e, i, o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              s = P0(e);
            of(e, s, a);
            break;
          default:
            throw Error(G(161));
        }
      } catch (l) {
        Ye(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function h2(e, t, n) {
    (te = e), M0(e);
  }
  function M0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; te !== null; ) {
      var o = te,
        i = o.child;
      if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || Ks;
        if (!a) {
          var s = o.alternate,
            l = (s !== null && s.memoizedState !== null) || wt;
          s = Ks;
          var u = wt;
          if (((Ks = a), (wt = l) && !u))
            for (te = o; te !== null; )
              (a = te),
                (l = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? B0(o)
                  : l !== null
                  ? ((l.return = a), (te = l))
                  : B0(o);
          for (; i !== null; ) (te = i), M0(i), (i = i.sibling);
          (te = o), (Ks = s), (wt = u);
        }
        L0(e);
      } else
        o.subtreeFlags & 8772 && i !== null
          ? ((i.return = o), (te = i))
          : L0(e);
    }
  }
  function L0(e) {
    for (; te !== null; ) {
      var t = te;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                wt || Ys(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !wt)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : mn(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && _g(t, i, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  _g(t, a, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var d = u.memoizedState;
                    if (d !== null) {
                      var f = d.dehydrated;
                      f !== null && zi(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(G(163));
            }
          wt || (t.flags & 512 && rf(t));
        } catch (h) {
          Ye(t, t.return, h);
        }
      }
      if (t === e) {
        te = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (te = n);
        break;
      }
      te = t.return;
    }
  }
  function F0(e) {
    for (; te !== null; ) {
      var t = te;
      if (t === e) {
        te = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (te = n);
        break;
      }
      te = t.return;
    }
  }
  function B0(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ys(4, t);
            } catch (l) {
              Ye(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                Ye(t, o, l);
              }
            }
            var i = t.return;
            try {
              rf(t);
            } catch (l) {
              Ye(t, i, l);
            }
            break;
          case 5:
            var a = t.return;
            try {
              rf(t);
            } catch (l) {
              Ye(t, a, l);
            }
        }
      } catch (l) {
        Ye(t, t.return, l);
      }
      if (t === e) {
        te = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (te = s);
        break;
      }
      te = t.return;
    }
  }
  var m2 = Math.ceil,
    Xs = jn.ReactCurrentDispatcher,
    sf = jn.ReactCurrentOwner,
    Qt = jn.ReactCurrentBatchConfig,
    Oe = 0,
    lt = null,
    et = null,
    ht = 0,
    Wt = 0,
    Bo = ar(0),
    it = 0,
    ua = null,
    Lr = 0,
    Zs = 0,
    lf = 0,
    ca = null,
    Pt = null,
    uf = 0,
    jo = 1 / 0,
    Gn = null,
    Qs = !1,
    cf = null,
    fr = null,
    Js = !1,
    pr = null,
    el = 0,
    da = 0,
    df = null,
    tl = -1,
    nl = 0;
  function Ot() {
    return Oe & 6 ? Je() : tl !== -1 ? tl : (tl = Je());
  }
  function hr(e) {
    return e.mode & 1
      ? Oe & 2 && ht !== 0
        ? ht & -ht
        : Qx.transition !== null
        ? (nl === 0 && (nl = Am()), nl)
        : ((e = Ie),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bm(e.type))),
          e)
      : 1;
  }
  function yn(e, t, n, r) {
    if (50 < da) throw ((da = 0), (df = null), Error(G(185)));
    Mi(e, n, r),
      (!(Oe & 2) || e !== lt) &&
        (e === lt && (!(Oe & 2) && (Zs |= n), it === 4 && mr(e, ht)),
        _t(e, r),
        n === 1 &&
          Oe === 0 &&
          !(t.mode & 1) &&
          ((jo = Je() + 500), Rs && lr()));
  }
  function _t(e, t) {
    var n = e.callbackNode;
    QS(e, t);
    var r = ds(e, e === lt ? ht : 0);
    if (r === 0)
      n !== null && Om(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Om(n), t === 1))
        e.tag === 0 ? Zx(z0.bind(null, e)) : kg(z0.bind(null, e)),
          Gx(function () {
            !(Oe & 6) && lr();
          }),
          (n = null);
      else {
        switch (Rm(r)) {
          case 1:
            n = Vc;
            break;
          case 4:
            n = Nm;
            break;
          case 16:
            n = ss;
            break;
          case 536870912:
            n = Tm;
            break;
          default:
            n = ss;
        }
        n = K0(n, j0.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function j0(e, t) {
    if (((tl = -1), (nl = 0), Oe & 6)) throw Error(G(327));
    var n = e.callbackNode;
    if (zo() && e.callbackNode !== n) return null;
    var r = ds(e, e === lt ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
    else {
      t = r;
      var o = Oe;
      Oe |= 2;
      var i = D0();
      (lt !== e || ht !== t) && ((Gn = null), (jo = Je() + 500), Br(e, t));
      do
        try {
          y2();
          break;
        } catch (s) {
          U0(e, s);
        }
      while (1);
      Ad(),
        (Xs.current = i),
        (Oe = o),
        et !== null ? (t = 0) : ((lt = null), (ht = 0), (t = it));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = Hc(e)), o !== 0 && ((r = o), (t = ff(e, o)))),
        t === 1)
      )
        throw ((n = ua), Br(e, 0), mr(e, r), _t(e, Je()), n);
      if (t === 6) mr(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !g2(o) &&
            ((t = rl(e, r)),
            t === 2 && ((i = Hc(e)), i !== 0 && ((r = i), (t = ff(e, i)))),
            t === 1))
        )
          throw ((n = ua), Br(e, 0), mr(e, r), _t(e, Je()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(G(345));
          case 2:
            jr(e, Pt, Gn);
            break;
          case 3:
            if (
              (mr(e, r),
              (r & 130023424) === r && ((t = uf + 500 - Je()), 10 < t))
            ) {
              if (ds(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                Ot(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = yd(jr.bind(null, e, Pt, Gn), t);
              break;
            }
            jr(e, Pt, Gn);
            break;
          case 4:
            if ((mr(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var a = 31 - fn(r);
              (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
            }
            if (
              ((r = o),
              (r = Je() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * m2(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yd(jr.bind(null, e, Pt, Gn), r);
              break;
            }
            jr(e, Pt, Gn);
            break;
          case 5:
            jr(e, Pt, Gn);
            break;
          default:
            throw Error(G(329));
        }
      }
    }
    return _t(e, Je()), e.callbackNode === n ? j0.bind(null, e) : null;
  }
  function ff(e, t) {
    var n = ca;
    return (
      e.current.memoizedState.isDehydrated && (Br(e, t).flags |= 256),
      (e = rl(e, t)),
      e !== 2 && ((t = Pt), (Pt = n), t !== null && pf(t)),
      e
    );
  }
  function pf(e) {
    Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
  }
  function g2(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!pn(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function mr(e, t) {
    for (
      t &= ~lf,
        t &= ~Zs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - fn(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function z0(e) {
    if (Oe & 6) throw Error(G(327));
    zo();
    var t = ds(e, 0);
    if (!(t & 1)) return _t(e, Je()), null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Hc(e);
      r !== 0 && ((t = r), (n = ff(e, r)));
    }
    if (n === 1) throw ((n = ua), Br(e, 0), mr(e, t), _t(e, Je()), n);
    if (n === 6) throw Error(G(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      jr(e, Pt, Gn),
      _t(e, Je()),
      null
    );
  }
  function hf(e, t) {
    var n = Oe;
    Oe |= 1;
    try {
      return e(t);
    } finally {
      (Oe = n), Oe === 0 && ((jo = Je() + 500), Rs && lr());
    }
  }
  function Fr(e) {
    pr !== null && pr.tag === 0 && !(Oe & 6) && zo();
    var t = Oe;
    Oe |= 1;
    var n = Qt.transition,
      r = Ie;
    try {
      if (((Qt.transition = null), (Ie = 1), e)) return e();
    } finally {
      (Ie = r), (Qt.transition = n), (Oe = t), !(Oe & 6) && lr();
    }
  }
  function mf() {
    (Wt = Bo.current), ze(Bo);
  }
  function Br(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), qx(n)), et !== null))
      for (n = et.return; n !== null; ) {
        var r = n;
        switch ((Ed(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Ts();
            break;
          case 3:
            Mo(), ze(Tt), ze(vt), jd();
            break;
          case 5:
            Fd(r);
            break;
          case 4:
            Mo();
            break;
          case 13:
            ze(qe);
            break;
          case 19:
            ze(qe);
            break;
          case 10:
            Rd(r.type._context);
            break;
          case 22:
          case 23:
            mf();
        }
        n = n.return;
      }
    if (
      ((lt = e),
      (et = e = gr(e.current, null)),
      (ht = Wt = t),
      (it = 0),
      (ua = null),
      (lf = Zs = Lr = 0),
      (Pt = ca = null),
      Ir !== null)
    ) {
      for (t = 0; t < Ir.length; t++)
        if (((n = Ir[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var a = i.next;
            (i.next = o), (r.next = a);
          }
          n.pending = r;
        }
      Ir = null;
    }
    return e;
  }
  function U0(e, t) {
    do {
      var n = et;
      try {
        if ((Ad(), (Us.current = Hs), Ds)) {
          for (var r = Ge.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          Ds = !1;
        }
        if (
          ((Mr = 0),
          (st = ot = Ge = null),
          (ra = !1),
          (oa = 0),
          (sf.current = null),
          n === null || n.return === null)
        ) {
          (it = 1), (ua = t), (et = null);
          break;
        }
        e: {
          var i = e,
            a = n.return,
            s = n,
            l = t;
          if (
            ((t = ht),
            (s.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              d = s,
              f = d.tag;
            if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var h = d.alternate;
              h
                ? ((d.updateQueue = h.updateQueue),
                  (d.memoizedState = h.memoizedState),
                  (d.lanes = h.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var b = d0(a);
            if (b !== null) {
              (b.flags &= -257),
                f0(b, a, s, i, t),
                b.mode & 1 && c0(i, u, t),
                (t = b),
                (l = u);
              var g = t.updateQueue;
              if (g === null) {
                var x = new Set();
                x.add(l), (t.updateQueue = x);
              } else g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                c0(i, u, t), gf();
                break e;
              }
              l = Error(G(426));
            }
          } else if (De && s.mode & 1) {
            var R = d0(a);
            if (R !== null) {
              !(R.flags & 65536) && (R.flags |= 256),
                f0(R, a, s, i, t),
                Nd(Lo(l, s));
              break e;
            }
          }
          (i = l = Lo(l, s)),
            it !== 4 && (it = 2),
            ca === null ? (ca = [i]) : ca.push(i),
            (i = a);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = l0(i, l, t);
                Pg(i, y);
                break e;
              case 1:
                s = l;
                var m = i.type,
                  v = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (fr === null || !fr.has(v))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var S = u0(i, s, t);
                  Pg(i, S);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        V0(n);
      } catch (C) {
        (t = C), et === n && n !== null && (et = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function D0() {
    var e = Xs.current;
    return (Xs.current = Hs), e === null ? Hs : e;
  }
  function gf() {
    (it === 0 || it === 3 || it === 2) && (it = 4),
      lt === null || (!(Lr & 268435455) && !(Zs & 268435455)) || mr(lt, ht);
  }
  function rl(e, t) {
    var n = Oe;
    Oe |= 2;
    var r = D0();
    (lt !== e || ht !== t) && ((Gn = null), Br(e, t));
    do
      try {
        v2();
        break;
      } catch (o) {
        U0(e, o);
      }
    while (1);
    if ((Ad(), (Oe = n), (Xs.current = r), et !== null)) throw Error(G(261));
    return (lt = null), (ht = 0), it;
  }
  function v2() {
    for (; et !== null; ) W0(et);
  }
  function y2() {
    for (; et !== null && !WS(); ) W0(et);
  }
  function W0(e) {
    var t = G0(e.alternate, e, Wt);
    (e.memoizedProps = e.pendingProps),
      t === null ? V0(e) : (et = t),
      (sf.current = null);
  }
  function V0(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = d2(n, t)), n !== null)) {
          (n.flags &= 32767), (et = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (it = 6), (et = null);
          return;
        }
      } else if (((n = c2(n, t, Wt)), n !== null)) {
        et = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function jr(e, t, n) {
    var r = Ie,
      o = Qt.transition;
    try {
      (Qt.transition = null), (Ie = 1), b2(e, t, n, r);
    } finally {
      (Qt.transition = o), (Ie = r);
    }
    return null;
  }
  function b2(e, t, n, r) {
    do zo();
    while (pr !== null);
    if (Oe & 6) throw Error(G(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(G(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (JS(e, i),
      e === lt && ((et = lt = null), (ht = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Js ||
        ((Js = !0),
        K0(ss, function () {
          return zo(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Qt.transition), (Qt.transition = null);
      var a = Ie;
      Ie = 1;
      var s = Oe;
      (Oe |= 4),
        (sf.current = null),
        p2(e, n),
        $0(n, e),
        jx(gd),
        (hs = !!md),
        (gd = md = null),
        (e.current = n),
        h2(n),
        VS(),
        (Oe = s),
        (Ie = a),
        (Qt.transition = i);
    } else e.current = n;
    if (
      (Js && ((Js = !1), (pr = e), (el = o)),
      (i = e.pendingLanes),
      i === 0 && (fr = null),
      GS(n.stateNode),
      _t(e, Je()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Qs) throw ((Qs = !1), (e = cf), (cf = null), e);
    return (
      el & 1 && e.tag !== 0 && zo(),
      (i = e.pendingLanes),
      i & 1 ? (e === df ? da++ : ((da = 0), (df = e))) : (da = 0),
      lr(),
      null
    );
  }
  function zo() {
    if (pr !== null) {
      var e = Rm(el),
        t = Qt.transition,
        n = Ie;
      try {
        if (((Qt.transition = null), (Ie = 16 > e ? 16 : e), pr === null))
          var r = !1;
        else {
          if (((e = pr), (pr = null), (el = 0), Oe & 6)) throw Error(G(331));
          var o = Oe;
          for (Oe |= 4, te = e.current; te !== null; ) {
            var i = te,
              a = i.child;
            if (te.flags & 16) {
              var s = i.deletions;
              if (s !== null) {
                for (var l = 0; l < s.length; l++) {
                  var u = s[l];
                  for (te = u; te !== null; ) {
                    var d = te;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        la(8, d, i);
                    }
                    var f = d.child;
                    if (f !== null) (f.return = d), (te = f);
                    else
                      for (; te !== null; ) {
                        d = te;
                        var h = d.sibling,
                          b = d.return;
                        if ((A0(d), d === u)) {
                          te = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = b), (te = h);
                          break;
                        }
                        te = b;
                      }
                  }
                }
                var g = i.alternate;
                if (g !== null) {
                  var x = g.child;
                  if (x !== null) {
                    g.child = null;
                    do {
                      var R = x.sibling;
                      (x.sibling = null), (x = R);
                    } while (x !== null);
                  }
                }
                te = i;
              }
            }
            if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (te = a);
            else
              e: for (; te !== null; ) {
                if (((i = te), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      la(9, i, i.return);
                  }
                var y = i.sibling;
                if (y !== null) {
                  (y.return = i.return), (te = y);
                  break e;
                }
                te = i.return;
              }
          }
          var m = e.current;
          for (te = m; te !== null; ) {
            a = te;
            var v = a.child;
            if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (te = v);
            else
              e: for (a = m; te !== null; ) {
                if (((s = te), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(9, s);
                    }
                  } catch (C) {
                    Ye(s, s.return, C);
                  }
                if (s === a) {
                  te = null;
                  break e;
                }
                var S = s.sibling;
                if (S !== null) {
                  (S.return = s.return), (te = S);
                  break e;
                }
                te = s.return;
              }
          }
          if (
            ((Oe = o),
            lr(),
            xn && typeof xn.onPostCommitFiberRoot == "function")
          )
            try {
              xn.onPostCommitFiberRoot(ls, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Ie = n), (Qt.transition = t);
      }
    }
    return !1;
  }
  function H0(e, t, n) {
    (t = Lo(n, t)),
      (t = l0(e, t, 1)),
      (e = cr(e, t, 1)),
      (t = Ot()),
      e !== null && (Mi(e, 1, t), _t(e, t));
  }
  function Ye(e, t, n) {
    if (e.tag === 3) H0(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          H0(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (fr === null || !fr.has(r)))
          ) {
            (e = Lo(n, e)),
              (e = u0(t, e, 1)),
              (t = cr(t, e, 1)),
              (e = Ot()),
              t !== null && (Mi(t, 1, e), _t(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function w2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ot()),
      (e.pingedLanes |= e.suspendedLanes & n),
      lt === e &&
        (ht & n) === n &&
        (it === 4 || (it === 3 && (ht & 130023424) === ht && 500 > Je() - uf)
          ? Br(e, 0)
          : (lf |= n)),
      _t(e, t);
  }
  function q0(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = cs), (cs <<= 1), !(cs & 130023424) && (cs = 4194304))
        : (t = 1));
    var n = Ot();
    (e = Vn(e, t)), e !== null && (Mi(e, t, n), _t(e, n));
  }
  function S2(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), q0(e, n);
  }
  function x2(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(G(314));
    }
    r !== null && r.delete(t), q0(e, n);
  }
  var G0;
  G0 = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Tt.current) Rt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Rt = !1), u2(e, t, n);
        Rt = !!(e.flags & 131072);
      }
    else (Rt = !1), De && t.flags & 1048576 && Eg(t, _s, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Gs(e, t), (e = t.pendingProps);
        var o = To(t, vt.current);
        Io(t, n), (o = Dd(null, t, r, e, o, n));
        var i = Wd();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              At(r) ? ((i = !0), As(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Id(t),
              (o.updater = Bs),
              (t.stateNode = o),
              (o._reactInternals = t),
              Md(t, r, e, n),
              (t = Zd(null, t, r, !0, i, n)))
            : ((t.tag = 0), De && i && kd(t), Ct(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Gs(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = E2(r)),
            (e = mn(r, e)),
            o)
          ) {
            case 0:
              t = Xd(null, t, r, e, n);
              break e;
            case 1:
              t = y0(null, t, r, e, n);
              break e;
            case 11:
              t = p0(null, t, r, e, n);
              break e;
            case 14:
              t = h0(null, t, r, mn(r.type, e), n);
              break e;
          }
          throw Error(G(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : mn(r, o)),
          Xd(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : mn(r, o)),
          y0(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((b0(t), e === null)) throw Error(G(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            Rg(e, t),
            Fs(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (o = Lo(Error(G(423)), t)), (t = w0(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = Lo(Error(G(424)), t)), (t = w0(e, t, r, n, o));
              break e;
            } else
              for (
                Dt = ir(t.stateNode.containerInfo.firstChild),
                  Ut = t,
                  De = !0,
                  hn = null,
                  n = jg(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Po(), r === o)) {
              t = qn(e, t, n);
              break e;
            }
            Ct(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          zg(t),
          e === null && Od(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = o.children),
          vd(r, o) ? (a = null) : i !== null && vd(r, i) && (t.flags |= 32),
          v0(e, t),
          Ct(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && Od(t), null;
      case 13:
        return S0(e, t, n);
      case 4:
        return (
          Ld(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = $o(t, null, r, n)) : Ct(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : mn(r, o)),
          p0(e, t, r, o, n)
        );
      case 7:
        return Ct(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ct(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ct(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (a = o.value),
            Fe($s, r._currentValue),
            (r._currentValue = a),
            i !== null)
          )
            if (pn(i.value, a)) {
              if (i.children === o.children && !Tt.current) {
                t = qn(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var s = i.dependencies;
                if (s !== null) {
                  a = i.child;
                  for (var l = s.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (i.tag === 1) {
                        (l = Hn(-1, n & -n)), (l.tag = 2);
                        var u = i.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var d = u.pending;
                          d === null
                            ? (l.next = l)
                            : ((l.next = d.next), (d.next = l)),
                            (u.pending = l);
                        }
                      }
                      (i.lanes |= n),
                        (l = i.alternate),
                        l !== null && (l.lanes |= n),
                        Pd(i.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(G(341));
                  (a.lanes |= n),
                    (s = a.alternate),
                    s !== null && (s.lanes |= n),
                    Pd(a, n, t),
                    (a = i.sibling);
                } else a = i.child;
                if (a !== null) a.return = i;
                else
                  for (a = i; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((i = a.sibling), i !== null)) {
                      (i.return = a.return), (a = i);
                      break;
                    }
                    a = a.return;
                  }
                i = a;
              }
          Ct(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          Io(t, n),
          (o = Xt(o)),
          (r = r(o)),
          (t.flags |= 1),
          Ct(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = mn(r, t.pendingProps)),
          (o = mn(r.type, o)),
          h0(e, t, r, o, n)
        );
      case 15:
        return m0(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : mn(r, o)),
          Gs(e, t),
          (t.tag = 1),
          At(r) ? ((e = !0), As(t)) : (e = !1),
          Io(t, n),
          Mg(t, r, o),
          Md(t, r, o, n),
          Zd(null, t, r, !0, e, n)
        );
      case 19:
        return k0(e, t, n);
      case 22:
        return g0(e, t, n);
    }
    throw Error(G(156, t.tag));
  };
  function K0(e, t) {
    return Cm(e, t);
  }
  function k2(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Jt(e, t, n, r) {
    return new k2(e, t, n, r);
  }
  function vf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function E2(e) {
    if (typeof e == "function") return vf(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === kc)) return 11;
      if (e === Oc) return 14;
    }
    return 2;
  }
  function gr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Jt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function ol(e, t, n, r, o, i) {
    var a = 2;
    if (((r = e), typeof e == "function")) vf(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case mo:
          return zr(n.children, o, i, t);
        case Sc:
          (a = 8), (o |= 8);
          break;
        case xc:
          return (
            (e = Jt(12, n, t, o | 2)), (e.elementType = xc), (e.lanes = i), e
          );
        case Ec:
          return (e = Jt(13, n, t, o)), (e.elementType = Ec), (e.lanes = i), e;
        case Cc:
          return (e = Jt(19, n, t, o)), (e.elementType = Cc), (e.lanes = i), e;
        case tm:
          return il(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Jh:
                a = 10;
                break e;
              case em:
                a = 9;
                break e;
              case kc:
                a = 11;
                break e;
              case Oc:
                a = 14;
                break e;
              case Zn:
                (a = 16), (r = null);
                break e;
            }
          throw Error(G(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Jt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function zr(e, t, n, r) {
    return (e = Jt(7, e, r, t)), (e.lanes = n), e;
  }
  function il(e, t, n, r) {
    return (
      (e = Jt(22, e, r, t)),
      (e.elementType = tm),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yf(e, t, n) {
    return (e = Jt(6, e, null, t)), (e.lanes = n), e;
  }
  function bf(e, t, n) {
    return (
      (t = Jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function C2(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = qc(0)),
      (this.expirationTimes = qc(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = qc(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function wf(e, t, n, r, o, i, a, s, l) {
    return (
      (e = new C2(e, t, n, s, l)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Jt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Id(i),
      e
    );
  }
  function O2(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ho,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Y0(e) {
    if (!e) return sr;
    e = e._reactInternals;
    e: {
      if (Tr(e) !== e || e.tag !== 1) throw Error(G(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (At(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(G(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (At(n)) return Sg(e, n, t);
    }
    return t;
  }
  function X0(e, t, n, r, o, i, a, s, l) {
    return (
      (e = wf(n, r, !0, e, o, i, a, s, l)),
      (e.context = Y0(null)),
      (n = e.current),
      (r = Ot()),
      (o = hr(n)),
      (i = Hn(r, o)),
      (i.callback = t ?? null),
      cr(n, i, o),
      (e.current.lanes = o),
      Mi(e, o, r),
      _t(e, r),
      e
    );
  }
  function al(e, t, n, r) {
    var o = t.current,
      i = Ot(),
      a = hr(o);
    return (
      (n = Y0(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Hn(i, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = cr(o, t, a)),
      e !== null && (yn(e, o, a, i), Ls(e, o, a)),
      a
    );
  }
  function sl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Z0(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Sf(e, t) {
    Z0(e, t), (e = e.alternate) && Z0(e, t);
  }
  function N2() {
    return null;
  }
  var Q0 =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function xf(e) {
    this._internalRoot = e;
  }
  (ll.prototype.render = xf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(G(409));
      al(e, t, null, null);
    }),
    (ll.prototype.unmount = xf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Fr(function () {
            al(null, e, null, null);
          }),
            (t[zn] = null);
        }
      });
  function ll(e) {
    this._internalRoot = e;
  }
  ll.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Im();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < nr.length && t !== 0 && t < nr[n].priority; n++);
      nr.splice(n, 0, e), n === 0 && Lm(e);
    }
  };
  function kf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ul(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function J0() {}
  function T2(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var u = sl(a);
          i.call(u);
        };
      }
      var a = X0(t, r, e, 0, null, !1, !1, "", J0);
      return (
        (e._reactRootContainer = a),
        (e[zn] = a.current),
        Yi(e.nodeType === 8 ? e.parentNode : e),
        Fr(),
        a
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = sl(l);
        s.call(u);
      };
    }
    var l = wf(e, 0, !1, null, null, !1, !1, "", J0);
    return (
      (e._reactRootContainer = l),
      (e[zn] = l.current),
      Yi(e.nodeType === 8 ? e.parentNode : e),
      Fr(function () {
        al(t, l, n, r);
      }),
      l
    );
  }
  function cl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof o == "function") {
        var s = o;
        o = function () {
          var l = sl(a);
          s.call(l);
        };
      }
      al(t, a, e, o);
    } else a = T2(n, t, e, o, r);
    return sl(a);
  }
  (Pm = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = $i(t.pendingLanes);
          n !== 0 &&
            (Gc(t, n | 1), _t(t, Je()), !(Oe & 6) && ((jo = Je() + 500), lr()));
        }
        break;
      case 13:
        Fr(function () {
          var r = Vn(e, 1);
          if (r !== null) {
            var o = Ot();
            yn(r, e, 1, o);
          }
        }),
          Sf(e, 1);
    }
  }),
    (Kc = function (e) {
      if (e.tag === 13) {
        var t = Vn(e, 134217728);
        if (t !== null) {
          var n = Ot();
          yn(t, e, 134217728, n);
        }
        Sf(e, 134217728);
      }
    }),
    (_m = function (e) {
      if (e.tag === 13) {
        var t = hr(e),
          n = Vn(e, t);
        if (n !== null) {
          var r = Ot();
          yn(n, e, t, r);
        }
        Sf(e, t);
      }
    }),
    (Im = function () {
      return Ie;
    }),
    ($m = function (e, t) {
      var n = Ie;
      try {
        return (Ie = e), t();
      } finally {
        Ie = n;
      }
    }),
    (zc = function (e, t, n) {
      switch (t) {
        case "input":
          if ((_c(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = Ns(r);
                if (!o) throw Error(G(90));
                om(r), _c(r, o);
              }
            }
          }
          break;
        case "textarea":
          um(e, n);
          break;
        case "select":
          (t = n.value), t != null && go(e, !!n.multiple, t, !1);
      }
    }),
    (ym = hf),
    (bm = Fr);
  var A2 = { usingClientEntryPoint: !1, Events: [Qi, Oo, Ns, gm, vm, hf] },
    fa = {
      findFiberByHostInstance: Ar,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    R2 = {
      bundleType: fa.bundleType,
      version: fa.version,
      rendererPackageName: fa.rendererPackageName,
      rendererConfig: fa.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: jn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = km(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: fa.findFiberByHostInstance || N2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dl.isDisabled && dl.supportsFiber)
      try {
        (ls = dl.inject(R2)), (xn = dl);
      } catch {}
  }
  (Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A2),
    (Bt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!kf(t)) throw Error(G(200));
      return O2(e, t, null, n);
    }),
    (Bt.createRoot = function (e, t) {
      if (!kf(e)) throw Error(G(299));
      var n = !1,
        r = "",
        o = Q0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = wf(e, 1, !1, null, null, n, !1, r, o)),
        (e[zn] = t.current),
        Yi(e.nodeType === 8 ? e.parentNode : e),
        new xf(t)
      );
    }),
    (Bt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(G(188))
          : ((e = Object.keys(e).join(",")), Error(G(268, e)));
      return (e = km(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Bt.flushSync = function (e) {
      return Fr(e);
    }),
    (Bt.hydrate = function (e, t, n) {
      if (!ul(t)) throw Error(G(200));
      return cl(null, e, t, !0, n);
    }),
    (Bt.hydrateRoot = function (e, t, n) {
      if (!kf(e)) throw Error(G(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        a = Q0;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = X0(t, null, e, 1, n ?? null, o, !1, i, a)),
        (e[zn] = t.current),
        Yi(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new ll(t);
    }),
    (Bt.render = function (e, t, n) {
      if (!ul(t)) throw Error(G(200));
      return cl(null, e, t, !1, n);
    }),
    (Bt.unmountComponentAtNode = function (e) {
      if (!ul(e)) throw Error(G(40));
      return e._reactRootContainer
        ? (Fr(function () {
            cl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[zn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Bt.unstable_batchedUpdates = hf),
    (Bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ul(n)) throw Error(G(200));
      if (e == null || e._reactInternals === void 0) throw Error(G(38));
      return cl(e, t, n, !1, r);
    }),
    (Bt.version = "18.2.0-next-9e3b772b8-20220608"),
    (function (e) {
      function t() {
        if (
          !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
          )
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
          } catch (n) {
            console.error(n);
          }
      }
      t(), (e.exports = Bt);
    })(NS);
  const fl = $h(fo);
  var ev,
    tv = fo;
  (ev = tv.createRoot), tv.hydrateRoot;
  function pa() {
    return (
      (pa = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      pa.apply(this, arguments)
    );
  }
  var vr;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(vr || (vr = {}));
  const nv = "popstate";
  function P2(e) {
    e === void 0 && (e = {});
    function t(r, o) {
      let { pathname: i, search: a, hash: s } = r.location;
      return Cf(
        "",
        { pathname: i, search: a, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default",
      );
    }
    function n(r, o) {
      return typeof o == "string" ? o : ov(o);
    }
    return I2(t, n, null, e);
  }
  function at(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function Ef(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function _2() {
    return Math.random().toString(36).substr(2, 8);
  }
  function rv(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Cf(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      pa(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? Uo(t) : t,
        { state: n, key: (t && t.key) || r || _2() },
      )
    );
  }
  function ov(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function Uo(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function I2(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
      a = o.history,
      s = vr.Pop,
      l = null,
      u = d();
    u == null && ((u = 0), a.replaceState(pa({}, a.state, { idx: u }), ""));
    function d() {
      return (a.state || { idx: null }).idx;
    }
    function f() {
      s = vr.Pop;
      let R = d(),
        y = R == null ? null : R - u;
      (u = R), l && l({ action: s, location: x.location, delta: y });
    }
    function h(R, y) {
      s = vr.Push;
      let m = Cf(x.location, R, y);
      n && n(m, R), (u = d() + 1);
      let v = rv(m, u),
        S = x.createHref(m);
      try {
        a.pushState(v, "", S);
      } catch (C) {
        if (C instanceof DOMException && C.name === "DataCloneError") throw C;
        o.location.assign(S);
      }
      i && l && l({ action: s, location: x.location, delta: 1 });
    }
    function b(R, y) {
      s = vr.Replace;
      let m = Cf(x.location, R, y);
      n && n(m, R), (u = d());
      let v = rv(m, u),
        S = x.createHref(m);
      a.replaceState(v, "", S),
        i && l && l({ action: s, location: x.location, delta: 0 });
    }
    function g(R) {
      let y =
          o.location.origin !== "null" ? o.location.origin : o.location.href,
        m = typeof R == "string" ? R : ov(R);
      return (
        at(
          y,
          "No window.location.(origin|href) available to create URL for href: " +
            m,
        ),
        new URL(m, y)
      );
    }
    let x = {
      get action() {
        return s;
      },
      get location() {
        return e(o, a);
      },
      listen(R) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(nv, f),
          (l = R),
          () => {
            o.removeEventListener(nv, f), (l = null);
          }
        );
      },
      createHref(R) {
        return t(o, R);
      },
      createURL: g,
      encodeLocation(R) {
        let y = g(R);
        return { pathname: y.pathname, search: y.search, hash: y.hash };
      },
      push: h,
      replace: b,
      go(R) {
        return a.go(R);
      },
    };
    return x;
  }
  var iv;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(iv || (iv = {}));
  function $2(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Uo(t) : t,
      o = uv(r.pathname || "/", n);
    if (o == null) return null;
    let i = av(e);
    M2(i);
    let a = null;
    for (let s = 0; a == null && s < i.length; ++s) a = V2(i[s], G2(o));
    return a;
  }
  function av(e, t, n, r) {
    t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = "");
    let o = (i, a, s) => {
      let l = {
        relativePath: s === void 0 ? i.path || "" : s,
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: a,
        route: i,
      };
      l.relativePath.startsWith("/") &&
        (at(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = Ur([r, l.relativePath]),
        d = n.concat(l);
      i.children &&
        i.children.length > 0 &&
        (at(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".'),
        ),
        av(i.children, t, d, u)),
        !(i.path == null && !i.index) &&
          t.push({ path: u, score: D2(u, i.index), routesMeta: d });
    };
    return (
      e.forEach((i, a) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
          o(i, a);
        else for (let l of sv(i.path)) o(i, a, l);
      }),
      t
    );
  }
  function sv(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      o = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let a = sv(r.join("/")),
      s = [];
    return (
      s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
      o && s.push(...a),
      s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function M2(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : W2(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex),
          ),
    );
  }
  const L2 = /^:\w+$/,
    F2 = 3,
    B2 = 2,
    j2 = 1,
    z2 = 10,
    U2 = -2,
    lv = (e) => e === "*";
  function D2(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(lv) && (r += U2),
      t && (r += B2),
      n
        .filter((o) => !lv(o))
        .reduce((o, i) => o + (L2.test(i) ? F2 : i === "" ? j2 : z2), r)
    );
  }
  function W2(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, r) => n === t[r])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function V2(e, t) {
    let { routesMeta: n } = e,
      r = {},
      o = "/",
      i = [];
    for (let a = 0; a < n.length; ++a) {
      let s = n[a],
        l = a === n.length - 1,
        u = o === "/" ? t : t.slice(o.length) || "/",
        d = H2(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
          u,
        );
      if (!d) return null;
      Object.assign(r, d.params);
      let f = s.route;
      i.push({
        params: r,
        pathname: Ur([o, d.pathname]),
        pathnameBase: J2(Ur([o, d.pathnameBase])),
        route: f,
      }),
        d.pathnameBase !== "/" && (o = Ur([o, d.pathnameBase]));
    }
    return i;
  }
  function H2(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = q2(e.path, e.caseSensitive, e.end),
      o = t.match(n);
    if (!o) return null;
    let i = o[0],
      a = i.replace(/(.)\/+$/, "$1"),
      s = o.slice(1);
    return {
      params: r.reduce((l, u, d) => {
        if (u === "*") {
          let f = s[d] || "";
          a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, "$1");
        }
        return (l[u] = K2(s[d] || "", u)), l;
      }, {}),
      pathname: i,
      pathnameBase: a,
      pattern: e,
    };
  }
  function q2(e, t, n) {
    t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      Ef(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
      );
    let r = [],
      o =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
          .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
    return (
      e.endsWith("*")
        ? (r.push("*"),
          (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
      [new RegExp(o, t ? void 0 : "i"), r]
    );
  }
  function G2(e) {
    try {
      return decodeURI(e);
    } catch (t) {
      return (
        Ef(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ")."),
        ),
        e
      );
    }
  }
  function K2(e, t) {
    try {
      return decodeURIComponent(e);
    } catch (n) {
      return (
        Ef(
          !1,
          'The value for the URL param "' +
            t +
            '" will not be decoded because' +
            (' the string "' +
              e +
              '" is a malformed URL segment. This is probably') +
            (" due to a bad percent encoding (" + n + ")."),
        ),
        e
      );
    }
  }
  function uv(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function Y2(e, t) {
    t === void 0 && (t = "/");
    let {
      pathname: n,
      search: r = "",
      hash: o = "",
    } = typeof e == "string" ? Uo(e) : e;
    return {
      pathname: n ? (n.startsWith("/") ? n : X2(n, t)) : t,
      search: ek(r),
      hash: tk(o),
    };
  }
  function X2(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((r) => {
        r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
      }),
      n.length > 1 ? n.join("/") : "/"
    );
  }
  function Of(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." +
        t +
        "` field [" +
        JSON.stringify(r) +
        "].  Please separate it out to the ") +
      ("`to." +
        n +
        "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function Z2(e) {
    return e.filter(
      (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
    );
  }
  function Q2(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
      ? (o = Uo(e))
      : ((o = pa({}, e)),
        at(
          !o.pathname || !o.pathname.includes("?"),
          Of("?", "pathname", "search", o),
        ),
        at(
          !o.pathname || !o.pathname.includes("#"),
          Of("#", "pathname", "hash", o),
        ),
        at(!o.search || !o.search.includes("#"), Of("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
      a = i ? "/" : o.pathname,
      s;
    if (r || a == null) s = n;
    else {
      let f = t.length - 1;
      if (a.startsWith("..")) {
        let h = a.split("/");
        for (; h[0] === ".."; ) h.shift(), (f -= 1);
        o.pathname = h.join("/");
      }
      s = f >= 0 ? t[f] : "/";
    }
    let l = Y2(o, s),
      u = a && a !== "/" && a.endsWith("/"),
      d = (i || a === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
  }
  const Ur = (e) => e.join("/").replace(/\/\/+/g, "/"),
    J2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    ek = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    tk = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function nk(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  function pl() {
    return (
      (pl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      pl.apply(this, arguments)
    );
  }
  const Nf = k.createContext(null),
    rk = k.createContext(null),
    hl = k.createContext(null),
    ml = k.createContext(null),
    Do = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    cv = k.createContext(null);
  function gl() {
    return k.useContext(ml) != null;
  }
  function dv() {
    return gl() || at(!1), k.useContext(ml).location;
  }
  function fv(e) {
    k.useContext(hl).static || k.useLayoutEffect(e);
  }
  function vl() {
    let { isDataRoute: e } = k.useContext(Do);
    return e ? gk() : ok();
  }
  function ok() {
    gl() || at(!1);
    let e = k.useContext(Nf),
      { basename: t, navigator: n } = k.useContext(hl),
      { matches: r } = k.useContext(Do),
      { pathname: o } = dv(),
      i = JSON.stringify(Z2(r).map((s) => s.pathnameBase)),
      a = k.useRef(!1);
    return (
      fv(() => {
        a.current = !0;
      }),
      k.useCallback(
        function (s, l) {
          if ((l === void 0 && (l = {}), !a.current)) return;
          if (typeof s == "number") {
            n.go(s);
            return;
          }
          let u = Q2(s, JSON.parse(i), o, l.relative === "path");
          e == null &&
            t !== "/" &&
            (u.pathname = u.pathname === "/" ? t : Ur([t, u.pathname])),
            (l.replace ? n.replace : n.push)(u, l.state, l);
        },
        [t, n, i, o, e],
      )
    );
  }
  function ik(e, t) {
    return ak(e, t);
  }
  function ak(e, t, n) {
    gl() || at(!1);
    let { navigator: r } = k.useContext(hl),
      { matches: o } = k.useContext(Do),
      i = o[o.length - 1],
      a = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let l = dv(),
      u;
    if (t) {
      var d;
      let x = typeof t == "string" ? Uo(t) : t;
      s === "/" || ((d = x.pathname) != null && d.startsWith(s)) || at(!1),
        (u = x);
    } else u = l;
    let f = u.pathname || "/",
      h = s === "/" ? f : f.slice(s.length) || "/",
      b = $2(e, { pathname: h }),
      g = dk(
        b &&
          b.map((x) =>
            Object.assign({}, x, {
              params: Object.assign({}, a, x.params),
              pathname: Ur([
                s,
                r.encodeLocation
                  ? r.encodeLocation(x.pathname).pathname
                  : x.pathname,
              ]),
              pathnameBase:
                x.pathnameBase === "/"
                  ? s
                  : Ur([
                      s,
                      r.encodeLocation
                        ? r.encodeLocation(x.pathnameBase).pathname
                        : x.pathnameBase,
                    ]),
            }),
          ),
        o,
        n,
      );
    return t && g
      ? k.createElement(
          ml.Provider,
          {
            value: {
              location: pl(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                u,
              ),
              navigationType: vr.Pop,
            },
          },
          g,
        )
      : g;
  }
  function sk() {
    let e = mk(),
      t = nk(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
      o = null;
    return k.createElement(
      k.Fragment,
      null,
      k.createElement("h2", null, "Unexpected Application Error!"),
      k.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? k.createElement("pre", { style: r }, n) : null,
      o,
    );
  }
  const lk = k.createElement(sk, null);
  class uk extends k.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error(
        "React Router caught the following error during render",
        t,
        n,
      );
    }
    render() {
      return this.state.error
        ? k.createElement(
            Do.Provider,
            { value: this.props.routeContext },
            k.createElement(cv.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  }
  function ck(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = k.useContext(Nf);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      k.createElement(Do.Provider, { value: t }, r)
    );
  }
  function dk(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
      var o;
      if ((o = n) != null && o.errors) e = n.matches;
      else return null;
    }
    let i = e,
      a = (r = n) == null ? void 0 : r.errors;
    if (a != null) {
      let s = i.findIndex(
        (l) => l.route.id && (a == null ? void 0 : a[l.route.id]),
      );
      s >= 0 || at(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
    }
    return i.reduceRight((s, l, u) => {
      let d = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
        f = null;
      n && (f = l.route.errorElement || lk);
      let h = t.concat(i.slice(0, u + 1)),
        b = () => {
          let g;
          return (
            d
              ? (g = f)
              : l.route.Component
              ? (g = k.createElement(l.route.Component, null))
              : l.route.element
              ? (g = l.route.element)
              : (g = s),
            k.createElement(ck, {
              match: l,
              routeContext: { outlet: s, matches: h, isDataRoute: n != null },
              children: g,
            })
          );
        };
      return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
        ? k.createElement(uk, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: d,
            children: b(),
            routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          })
        : b();
    }, null);
  }
  var Tf;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate");
  })(Tf || (Tf = {}));
  var ha;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId");
  })(ha || (ha = {}));
  function fk(e) {
    let t = k.useContext(Nf);
    return t || at(!1), t;
  }
  function pk(e) {
    let t = k.useContext(rk);
    return t || at(!1), t;
  }
  function hk(e) {
    let t = k.useContext(Do);
    return t || at(!1), t;
  }
  function pv(e) {
    let t = hk(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || at(!1), n.route.id;
  }
  function mk() {
    var e;
    let t = k.useContext(cv),
      n = pk(ha.UseRouteError),
      r = pv(ha.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
  }
  function gk() {
    let { router: e } = fk(Tf.UseNavigateStable),
      t = pv(ha.UseNavigateStable),
      n = k.useRef(!1);
    return (
      fv(() => {
        n.current = !0;
      }),
      k.useCallback(
        function (r, o) {
          o === void 0 && (o = {}),
            n.current &&
              (typeof r == "number"
                ? e.navigate(r)
                : e.navigate(r, pl({ fromRouteId: t }, o)));
        },
        [e, t],
      )
    );
  }
  function Af(e) {
    at(!1);
  }
  function vk(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = vr.Pop,
      navigator: i,
      static: a = !1,
    } = e;
    gl() && at(!1);
    let s = t.replace(/^\/*/, "/"),
      l = k.useMemo(
        () => ({ basename: s, navigator: i, static: a }),
        [s, i, a],
      );
    typeof r == "string" && (r = Uo(r));
    let {
        pathname: u = "/",
        search: d = "",
        hash: f = "",
        state: h = null,
        key: b = "default",
      } = r,
      g = k.useMemo(() => {
        let x = uv(u, s);
        return x == null
          ? null
          : {
              location: { pathname: x, search: d, hash: f, state: h, key: b },
              navigationType: o,
            };
      }, [s, u, d, f, h, b, o]);
    return g == null
      ? null
      : k.createElement(
          hl.Provider,
          { value: l },
          k.createElement(ml.Provider, { children: n, value: g }),
        );
  }
  function yk(e) {
    let { children: t, location: n } = e;
    return ik(Rf(t), n);
  }
  var hv;
  (function (e) {
    (e[(e.pending = 0)] = "pending"),
      (e[(e.success = 1)] = "success"),
      (e[(e.error = 2)] = "error");
  })(hv || (hv = {})),
    new Promise(() => {});
  function Rf(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      k.Children.forEach(e, (r, o) => {
        if (!k.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === k.Fragment) {
          n.push.apply(n, Rf(r.props.children, i));
          return;
        }
        r.type !== Af && at(!1), !r.props.index || !r.props.children || at(!1);
        let a = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
        r.props.children && (a.children = Rf(r.props.children, i)), n.push(a);
      }),
      n
    );
  }
  const bk = "startTransition",
    mv = es[bk];
  function wk(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      i = k.useRef();
    i.current == null && (i.current = P2({ window: o, v5Compat: !0 }));
    let a = i.current,
      [s, l] = k.useState({ action: a.action, location: a.location }),
      { v7_startTransition: u } = r || {},
      d = k.useCallback(
        (f) => {
          u && mv ? mv(() => l(f)) : l(f);
        },
        [l, u],
      );
    return (
      k.useLayoutEffect(() => a.listen(d), [a, d]),
      k.createElement(vk, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: a,
      })
    );
  }
  var gv;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher");
  })(gv || (gv = {}));
  var vv;
  (function (e) {
    (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(vv || (vv = {}));
  const Sk = { black: "#000", white: "#fff" },
    ma = Sk,
    xk = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    },
    Dr = xk,
    kk = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
    },
    Wr = kk,
    Ek = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    },
    Vr = Ek,
    Ck = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
    },
    Wo = Ck,
    Ok = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
    },
    Hr = Ok,
    Nk = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
    },
    Vo = Nk,
    Tk = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    Ak = Tk;
  function E() {
    return (
      (E = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      E.apply(this, arguments)
    );
  }
  function qr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object;
  }
  function yv(e) {
    if (!qr(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = yv(e[n]);
      }),
      t
    );
  }
  function en(e, t, n = { clone: !0 }) {
    const r = n.clone ? E({}, e) : e;
    return (
      qr(e) &&
        qr(t) &&
        Object.keys(t).forEach((o) => {
          o !== "__proto__" &&
            (qr(t[o]) && o in e && qr(e[o])
              ? (r[o] = en(e[o], t[o], n))
              : n.clone
              ? (r[o] = qr(t[o]) ? yv(t[o]) : t[o])
              : (r[o] = t[o]));
        }),
      r
    );
  }
  function yr(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
  }
  var bv = {},
    Rk = {
      get exports() {
        return bv;
      },
      set exports(e) {
        bv = e;
      },
    },
    $e = {},
    Pf = Symbol.for("react.element"),
    _f = Symbol.for("react.portal"),
    yl = Symbol.for("react.fragment"),
    bl = Symbol.for("react.strict_mode"),
    wl = Symbol.for("react.profiler"),
    Sl = Symbol.for("react.provider"),
    xl = Symbol.for("react.context"),
    Pk = Symbol.for("react.server_context"),
    kl = Symbol.for("react.forward_ref"),
    El = Symbol.for("react.suspense"),
    Cl = Symbol.for("react.suspense_list"),
    Ol = Symbol.for("react.memo"),
    Nl = Symbol.for("react.lazy"),
    _k = Symbol.for("react.offscreen"),
    wv;
  wv = Symbol.for("react.module.reference");
  function tn(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Pf:
          switch (((e = e.type), e)) {
            case yl:
            case wl:
            case bl:
            case El:
            case Cl:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Pk:
                case xl:
                case kl:
                case Nl:
                case Ol:
                case Sl:
                  return e;
                default:
                  return t;
              }
          }
        case _f:
          return t;
      }
    }
  }
  ($e.ContextConsumer = xl),
    ($e.ContextProvider = Sl),
    ($e.Element = Pf),
    ($e.ForwardRef = kl),
    ($e.Fragment = yl),
    ($e.Lazy = Nl),
    ($e.Memo = Ol),
    ($e.Portal = _f),
    ($e.Profiler = wl),
    ($e.StrictMode = bl),
    ($e.Suspense = El),
    ($e.SuspenseList = Cl),
    ($e.isAsyncMode = function () {
      return !1;
    }),
    ($e.isConcurrentMode = function () {
      return !1;
    }),
    ($e.isContextConsumer = function (e) {
      return tn(e) === xl;
    }),
    ($e.isContextProvider = function (e) {
      return tn(e) === Sl;
    }),
    ($e.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === Pf;
    }),
    ($e.isForwardRef = function (e) {
      return tn(e) === kl;
    }),
    ($e.isFragment = function (e) {
      return tn(e) === yl;
    }),
    ($e.isLazy = function (e) {
      return tn(e) === Nl;
    }),
    ($e.isMemo = function (e) {
      return tn(e) === Ol;
    }),
    ($e.isPortal = function (e) {
      return tn(e) === _f;
    }),
    ($e.isProfiler = function (e) {
      return tn(e) === wl;
    }),
    ($e.isStrictMode = function (e) {
      return tn(e) === bl;
    }),
    ($e.isSuspense = function (e) {
      return tn(e) === El;
    }),
    ($e.isSuspenseList = function (e) {
      return tn(e) === Cl;
    }),
    ($e.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === yl ||
        e === wl ||
        e === bl ||
        e === El ||
        e === Cl ||
        e === _k ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Nl ||
            e.$$typeof === Ol ||
            e.$$typeof === Sl ||
            e.$$typeof === xl ||
            e.$$typeof === kl ||
            e.$$typeof === wv ||
            e.getModuleId !== void 0))
      );
    }),
    ($e.typeOf = tn),
    (function (e) {
      e.exports = $e;
    })(Rk);
  function le(e) {
    if (typeof e != "string") throw new Error(yr(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function If(...e) {
    return e.reduce(
      (t, n) =>
        n == null
          ? t
          : function (...r) {
              t.apply(this, r), n.apply(this, r);
            },
      () => {},
    );
  }
  function $f(e, t = 166) {
    let n;
    function r(...o) {
      const i = () => {
        e.apply(this, o);
      };
      clearTimeout(n), (n = setTimeout(i, t));
    }
    return (
      (r.clear = () => {
        clearTimeout(n);
      }),
      r
    );
  }
  function Ik(e, t) {
    return () => null;
  }
  function ga(e, t) {
    return k.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
  }
  function It(e) {
    return (e && e.ownerDocument) || document;
  }
  function br(e) {
    return It(e).defaultView || window;
  }
  function $k(e, t) {
    return () => null;
  }
  function Tl(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  const Mk = typeof window < "u" ? k.useLayoutEffect : k.useEffect,
    wr = Mk;
  let Sv = 0;
  function Lk(e) {
    const [t, n] = k.useState(e),
      r = e || t;
    return (
      k.useEffect(() => {
        t == null && ((Sv += 1), n(`mui-${Sv}`));
      }, [t]),
      r
    );
  }
  const xv = es.useId;
  function kv(e) {
    if (xv !== void 0) {
      const t = xv();
      return e ?? t;
    }
    return Lk(e);
  }
  function Fk(e, t, n, r, o) {
    return null;
  }
  function Al({ controlled: e, default: t, name: n, state: r = "value" }) {
    const { current: o } = k.useRef(e !== void 0),
      [i, a] = k.useState(t),
      s = o ? e : i,
      l = k.useCallback((u) => {
        o || a(u);
      }, []);
    return [s, l];
  }
  function Gr(e) {
    const t = k.useRef(e);
    return (
      wr(() => {
        t.current = e;
      }),
      k.useCallback((...n) => (0, t.current)(...n), [])
    );
  }
  function St(...e) {
    return k.useMemo(
      () =>
        e.every((t) => t == null)
          ? null
          : (t) => {
              e.forEach((n) => {
                Tl(n, t);
              });
            },
      e,
    );
  }
  let Rl = !0,
    Mf = !1,
    Ev;
  const Bk = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
  function jk(e) {
    const { type: t, tagName: n } = e;
    return !!(
      (n === "INPUT" && Bk[t] && !e.readOnly) ||
      (n === "TEXTAREA" && !e.readOnly) ||
      e.isContentEditable
    );
  }
  function zk(e) {
    e.metaKey || e.altKey || e.ctrlKey || (Rl = !0);
  }
  function Lf() {
    Rl = !1;
  }
  function Uk() {
    this.visibilityState === "hidden" && Mf && (Rl = !0);
  }
  function Dk(e) {
    e.addEventListener("keydown", zk, !0),
      e.addEventListener("mousedown", Lf, !0),
      e.addEventListener("pointerdown", Lf, !0),
      e.addEventListener("touchstart", Lf, !0),
      e.addEventListener("visibilitychange", Uk, !0);
  }
  function Wk(e) {
    const { target: t } = e;
    try {
      return t.matches(":focus-visible");
    } catch {}
    return Rl || jk(t);
  }
  function Cv() {
    const e = k.useCallback((o) => {
        o != null && Dk(o.ownerDocument);
      }, []),
      t = k.useRef(!1);
    function n() {
      return t.current
        ? ((Mf = !0),
          window.clearTimeout(Ev),
          (Ev = window.setTimeout(() => {
            Mf = !1;
          }, 100)),
          (t.current = !1),
          !0)
        : !1;
    }
    function r(o) {
      return Wk(o) ? ((t.current = !0), !0) : !1;
    }
    return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
  }
  function Ov(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  function Ff(e, t) {
    const n = E({}, t);
    return (
      Object.keys(e).forEach((r) => {
        if (r.toString().match(/^(components|slots)$/))
          n[r] = E({}, e[r], n[r]);
        else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
          const o = e[r] || {},
            i = t[r];
          (n[r] = {}),
            !i || !Object.keys(i)
              ? (n[r] = o)
              : !o || !Object.keys(o)
              ? (n[r] = i)
              : ((n[r] = E({}, i)),
                Object.keys(o).forEach((a) => {
                  n[r][a] = Ff(o[a], i[a]);
                }));
        } else n[r] === void 0 && (n[r] = e[r]);
      }),
      n
    );
  }
  function Se(e, t, n) {
    const r = {};
    return (
      Object.keys(e).forEach((o) => {
        r[o] = e[o]
          .reduce(
            (i, a) => (a && (i.push(t(a)), n && n[a] && i.push(n[a])), i),
            [],
          )
          .join(" ");
      }),
      r
    );
  }
  const Nv = (e) => e,
    Vk = () => {
      let e = Nv;
      return {
        configure(t) {
          e = t;
        },
        generate(t) {
          return e(t);
        },
        reset() {
          e = Nv;
        },
      };
    },
    Hk = Vk(),
    Bf = Hk,
    qk = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      required: "required",
      selected: "selected",
    };
  function be(e, t, n = "Mui") {
    const r = qk[t];
    return r ? `${n}-${r}` : `${Bf.generate(e)}-${t}`;
  }
  function we(e, t, n = "Mui") {
    const r = {};
    return (
      t.forEach((o) => {
        r[o] = be(e, o, n);
      }),
      r
    );
  }
  function re(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      o,
      i;
    for (i = 0; i < r.length; i++)
      (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  function Tv(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var Gk =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Kk = Tv(function (e) {
      return (
        Gk.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    });
  function Yk(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function Xk(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var Zk = (function () {
      function e(n) {
        var r = this;
        (this._insertTag = function (o) {
          var i;
          r.tags.length === 0
            ? r.insertionPoint
              ? (i = r.insertionPoint.nextSibling)
              : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
            : (i = r.tags[r.tags.length - 1].nextSibling),
            r.container.insertBefore(o, i),
            r.tags.push(o);
        }),
          (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = n.nonce),
          (this.key = n.key),
          (this.container = n.container),
          (this.prepend = n.prepend),
          (this.insertionPoint = n.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (n) {
          n.forEach(this._insertTag);
        }),
        (t.insert = function (n) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(Xk(this));
          var r = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var o = Yk(r);
            try {
              o.insertRule(n, o.cssRules.length);
            } catch {}
          } else r.appendChild(document.createTextNode(n));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (n) {
            return n.parentNode && n.parentNode.removeChild(n);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    xt = "-ms-",
    Pl = "-moz-",
    Te = "-webkit-",
    Av = "comm",
    jf = "rule",
    zf = "decl",
    Qk = "@import",
    Rv = "@keyframes",
    Jk = Math.abs,
    _l = String.fromCharCode,
    eE = Object.assign;
  function tE(e, t) {
    return mt(e, 0) ^ 45
      ? (((((((t << 2) ^ mt(e, 0)) << 2) ^ mt(e, 1)) << 2) ^ mt(e, 2)) << 2) ^
          mt(e, 3)
      : 0;
  }
  function Pv(e) {
    return e.trim();
  }
  function nE(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function Re(e, t, n) {
    return e.replace(t, n);
  }
  function Uf(e, t) {
    return e.indexOf(t);
  }
  function mt(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function va(e, t, n) {
    return e.slice(t, n);
  }
  function Nn(e) {
    return e.length;
  }
  function Df(e) {
    return e.length;
  }
  function Il(e, t) {
    return t.push(e), e;
  }
  function rE(e, t) {
    return e.map(t).join("");
  }
  var $l = 1,
    Ho = 1,
    _v = 0,
    $t = 0,
    tt = 0,
    qo = "";
  function Ml(e, t, n, r, o, i, a) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: $l,
      column: Ho,
      length: a,
      return: "",
    };
  }
  function ya(e, t) {
    return eE(
      Ml("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t,
    );
  }
  function oE() {
    return tt;
  }
  function iE() {
    return (
      (tt = $t > 0 ? mt(qo, --$t) : 0), Ho--, tt === 10 && ((Ho = 1), $l--), tt
    );
  }
  function Vt() {
    return (
      (tt = $t < _v ? mt(qo, $t++) : 0), Ho++, tt === 10 && ((Ho = 1), $l++), tt
    );
  }
  function Tn() {
    return mt(qo, $t);
  }
  function Ll() {
    return $t;
  }
  function ba(e, t) {
    return va(qo, e, t);
  }
  function wa(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Iv(e) {
    return ($l = Ho = 1), (_v = Nn((qo = e))), ($t = 0), [];
  }
  function $v(e) {
    return (qo = ""), e;
  }
  function Fl(e) {
    return Pv(ba($t - 1, Wf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function aE(e) {
    for (; (tt = Tn()) && tt < 33; ) Vt();
    return wa(e) > 2 || wa(tt) > 3 ? "" : " ";
  }
  function sE(e, t) {
    for (
      ;
      --t &&
      Vt() &&
      !(tt < 48 || tt > 102 || (tt > 57 && tt < 65) || (tt > 70 && tt < 97));

    );
    return ba(e, Ll() + (t < 6 && Tn() == 32 && Vt() == 32));
  }
  function Wf(e) {
    for (; Vt(); )
      switch (tt) {
        case e:
          return $t;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Wf(tt);
          break;
        case 40:
          e === 41 && Wf(e);
          break;
        case 92:
          Vt();
          break;
      }
    return $t;
  }
  function lE(e, t) {
    for (
      ;
      Vt() && e + tt !== 47 + 10 && !(e + tt === 42 + 42 && Tn() === 47);

    );
    return "/*" + ba(t, $t - 1) + "*" + _l(e === 47 ? e : Vt());
  }
  function uE(e) {
    for (; !wa(Tn()); ) Vt();
    return ba(e, $t);
  }
  function cE(e) {
    return $v(Bl("", null, null, null, [""], (e = Iv(e)), 0, [0], e));
  }
  function Bl(e, t, n, r, o, i, a, s, l) {
    for (
      var u = 0,
        d = 0,
        f = a,
        h = 0,
        b = 0,
        g = 0,
        x = 1,
        R = 1,
        y = 1,
        m = 0,
        v = "",
        S = o,
        C = i,
        N = r,
        T = v;
      R;

    )
      switch (((g = m), (m = Vt()))) {
        case 40:
          if (g != 108 && mt(T, f - 1) == 58) {
            Uf((T += Re(Fl(m), "&", "&\f")), "&\f") != -1 && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          T += Fl(m);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          T += aE(g);
          break;
        case 92:
          T += sE(Ll() - 1, 7);
          continue;
        case 47:
          switch (Tn()) {
            case 42:
            case 47:
              Il(dE(lE(Vt(), Ll()), t, n), l);
              break;
            default:
              T += "/";
          }
          break;
        case 123 * x:
          s[u++] = Nn(T) * y;
        case 125 * x:
        case 59:
        case 0:
          switch (m) {
            case 0:
            case 125:
              R = 0;
            case 59 + d:
              b > 0 &&
                Nn(T) - f &&
                Il(
                  b > 32
                    ? Lv(T + ";", r, n, f - 1)
                    : Lv(Re(T, " ", "") + ";", r, n, f - 2),
                  l,
                );
              break;
            case 59:
              T += ";";
            default:
              if (
                (Il((N = Mv(T, t, n, u, d, o, s, v, (S = []), (C = []), f)), i),
                m === 123)
              )
                if (d === 0) Bl(T, t, N, N, S, i, f, s, C);
                else
                  switch (h === 99 && mt(T, 3) === 110 ? 100 : h) {
                    case 100:
                    case 109:
                    case 115:
                      Bl(
                        e,
                        N,
                        N,
                        r && Il(Mv(e, N, N, 0, 0, o, s, v, o, (S = []), f), C),
                        o,
                        C,
                        f,
                        s,
                        r ? S : C,
                      );
                      break;
                    default:
                      Bl(T, N, N, N, [""], C, 0, s, C);
                  }
          }
          (u = d = b = 0), (x = y = 1), (v = T = ""), (f = a);
          break;
        case 58:
          (f = 1 + Nn(T)), (b = g);
        default:
          if (x < 1) {
            if (m == 123) --x;
            else if (m == 125 && x++ == 0 && iE() == 125) continue;
          }
          switch (((T += _l(m)), m * x)) {
            case 38:
              y = d > 0 ? 1 : ((T += "\f"), -1);
              break;
            case 44:
              (s[u++] = (Nn(T) - 1) * y), (y = 1);
              break;
            case 64:
              Tn() === 45 && (T += Fl(Vt())),
                (h = Tn()),
                (d = f = Nn((v = T += uE(Ll())))),
                m++;
              break;
            case 45:
              g === 45 && Nn(T) == 2 && (x = 0);
          }
      }
    return i;
  }
  function Mv(e, t, n, r, o, i, a, s, l, u, d) {
    for (
      var f = o - 1, h = o === 0 ? i : [""], b = Df(h), g = 0, x = 0, R = 0;
      g < r;
      ++g
    )
      for (var y = 0, m = va(e, f + 1, (f = Jk((x = a[g])))), v = e; y < b; ++y)
        (v = Pv(x > 0 ? h[y] + " " + m : Re(m, /&\f/g, h[y]))) && (l[R++] = v);
    return Ml(e, t, n, o === 0 ? jf : s, l, u, d);
  }
  function dE(e, t, n) {
    return Ml(e, t, n, Av, _l(oE()), va(e, 2, -2), 0);
  }
  function Lv(e, t, n, r) {
    return Ml(e, t, n, zf, va(e, 0, r), va(e, r + 1, -1), r);
  }
  function Go(e, t) {
    for (var n = "", r = Df(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function fE(e, t, n, r) {
    switch (e.type) {
      case Qk:
      case zf:
        return (e.return = e.return || e.value);
      case Av:
        return "";
      case Rv:
        return (e.return = e.value + "{" + Go(e.children, r) + "}");
      case jf:
        e.value = e.props.join(",");
    }
    return Nn((n = Go(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function pE(e) {
    var t = Df(e);
    return function (n, r, o, i) {
      for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
      return a;
    };
  }
  function hE(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  var mE = function (e, t, n) {
      for (
        var r = 0, o = 0;
        (r = o), (o = Tn()), r === 38 && o === 12 && (t[n] = 1), !wa(o);

      )
        Vt();
      return ba(e, $t);
    },
    gE = function (e, t) {
      var n = -1,
        r = 44;
      do
        switch (wa(r)) {
          case 0:
            r === 38 && Tn() === 12 && (t[n] = 1), (e[n] += mE($t - 1, t, n));
            break;
          case 2:
            e[n] += Fl(r);
            break;
          case 4:
            if (r === 44) {
              (e[++n] = Tn() === 58 ? "&\f" : ""), (t[n] = e[n].length);
              break;
            }
          default:
            e[n] += _l(r);
        }
      while ((r = Vt()));
      return e;
    },
    vE = function (e, t) {
      return $v(gE(Iv(e), t));
    },
    Fv = new WeakMap(),
    yE = function (e) {
      if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          n.type !== "rule";

        )
          if (((n = n.parent), !n)) return;
        if (
          !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Fv.get(n)) &&
          !r
        ) {
          Fv.set(e, !0);
          for (
            var o = [], i = vE(t, o), a = n.props, s = 0, l = 0;
            s < i.length;
            s++
          )
            for (var u = 0; u < a.length; u++, l++)
              e.props[l] = o[s]
                ? i[s].replace(/&\f/g, a[u])
                : a[u] + " " + i[s];
        }
      }
    },
    bE = function (e) {
      if (e.type === "decl") {
        var t = e.value;
        t.charCodeAt(0) === 108 &&
          t.charCodeAt(2) === 98 &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function Bv(e, t) {
    switch (tE(e, t)) {
      case 5103:
        return Te + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return Te + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Te + e + Pl + e + xt + e + e;
      case 6828:
      case 4268:
        return Te + e + xt + e + e;
      case 6165:
        return Te + e + xt + "flex-" + e + e;
      case 5187:
        return (
          Te +
          e +
          Re(e, /(\w+).+(:[^]+)/, Te + "box-$1$2" + xt + "flex-$1$2") +
          e
        );
      case 5443:
        return Te + e + xt + "flex-item-" + Re(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          Te +
          e +
          xt +
          "flex-line-pack" +
          Re(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return Te + e + xt + Re(e, "shrink", "negative") + e;
      case 5292:
        return Te + e + xt + Re(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Te +
          "box-" +
          Re(e, "-grow", "") +
          Te +
          e +
          xt +
          Re(e, "grow", "positive") +
          e
        );
      case 4554:
        return Te + Re(e, /([^-])(transform)/g, "$1" + Te + "$2") + e;
      case 6187:
        return (
          Re(
            Re(Re(e, /(zoom-|grab)/, Te + "$1"), /(image-set)/, Te + "$1"),
            e,
            "",
          ) + e
        );
      case 5495:
      case 3959:
        return Re(e, /(image-set\([^]*)/, Te + "$1$`$1");
      case 4968:
        return (
          Re(
            Re(
              e,
              /(.+:)(flex-)?(.*)/,
              Te + "box-pack:$3" + xt + "flex-pack:$3",
            ),
            /s.+-b[^;]+/,
            "justify",
          ) +
          Te +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return Re(e, /(.+)-inline(.+)/, Te + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Nn(e) - 1 - t > 6)
          switch (mt(e, t + 1)) {
            case 109:
              if (mt(e, t + 4) !== 45) break;
            case 102:
              return (
                Re(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Te +
                    "$2-$3$1" +
                    Pl +
                    (mt(e, t + 3) == 108 ? "$3" : "$2-$3"),
                ) + e
              );
            case 115:
              return ~Uf(e, "stretch")
                ? Bv(Re(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (mt(e, t + 1) !== 115) break;
      case 6444:
        switch (mt(e, Nn(e) - 3 - (~Uf(e, "!important") && 10))) {
          case 107:
            return Re(e, ":", ":" + Te) + e;
          case 101:
            return (
              Re(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  Te +
                  (mt(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  Te +
                  "$2$3$1" +
                  xt +
                  "$2box$3",
              ) + e
            );
        }
        break;
      case 5936:
        switch (mt(e, t + 11)) {
          case 114:
            return Te + e + xt + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Te + e + xt + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Te + e + xt + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return Te + e + xt + e + e;
    }
    return e;
  }
  var wE = function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case zf:
            e.return = Bv(e.value, e.length);
            break;
          case Rv:
            return Go([ya(e, { value: Re(e.value, "@", "@" + Te) })], r);
          case jf:
            if (e.length)
              return rE(e.props, function (o) {
                switch (nE(o, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return Go(
                      [
                        ya(e, {
                          props: [Re(o, /:(read-\w+)/, ":" + Pl + "$1")],
                        }),
                      ],
                      r,
                    );
                  case "::placeholder":
                    return Go(
                      [
                        ya(e, {
                          props: [Re(o, /:(plac\w+)/, ":" + Te + "input-$1")],
                        }),
                        ya(e, {
                          props: [Re(o, /:(plac\w+)/, ":" + Pl + "$1")],
                        }),
                        ya(e, {
                          props: [Re(o, /:(plac\w+)/, xt + "input-$1")],
                        }),
                      ],
                      r,
                    );
                }
                return "";
              });
        }
    },
    SE = [wE],
    jv = function (e) {
      var t = e.key;
      if (t === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (g) {
          var x = g.getAttribute("data-emotion");
          x.indexOf(" ") !== -1 &&
            (document.head.appendChild(g), g.setAttribute("data-s", ""));
        });
      }
      var r = e.stylisPlugins || SE,
        o = {},
        i,
        a = [];
      (i = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (g) {
            for (
              var x = g.getAttribute("data-emotion").split(" "), R = 1;
              R < x.length;
              R++
            )
              o[x[R]] = !0;
            a.push(g);
          },
        );
      var s,
        l = [yE, bE];
      {
        var u,
          d = [
            fE,
            hE(function (g) {
              u.insert(g);
            }),
          ],
          f = pE(l.concat(r, d)),
          h = function (g) {
            return Go(cE(g), f);
          };
        s = function (g, x, R, y) {
          (u = R),
            h(g ? g + "{" + x.styles + "}" : x.styles),
            y && (b.inserted[x.name] = !0);
        };
      }
      var b = {
        key: t,
        sheet: new Zk({
          key: t,
          container: i,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: o,
        registered: {},
        insert: s,
      };
      return b.sheet.hydrate(a), b;
    },
    Vf = {},
    xE = {
      get exports() {
        return Vf;
      },
      set exports(e) {
        Vf = e;
      },
    },
    Me = {},
    ut = typeof Symbol == "function" && Symbol.for,
    Hf = ut ? Symbol.for("react.element") : 60103,
    qf = ut ? Symbol.for("react.portal") : 60106,
    jl = ut ? Symbol.for("react.fragment") : 60107,
    zl = ut ? Symbol.for("react.strict_mode") : 60108,
    Ul = ut ? Symbol.for("react.profiler") : 60114,
    Dl = ut ? Symbol.for("react.provider") : 60109,
    Wl = ut ? Symbol.for("react.context") : 60110,
    Gf = ut ? Symbol.for("react.async_mode") : 60111,
    Vl = ut ? Symbol.for("react.concurrent_mode") : 60111,
    Hl = ut ? Symbol.for("react.forward_ref") : 60112,
    ql = ut ? Symbol.for("react.suspense") : 60113,
    kE = ut ? Symbol.for("react.suspense_list") : 60120,
    Gl = ut ? Symbol.for("react.memo") : 60115,
    Kl = ut ? Symbol.for("react.lazy") : 60116,
    EE = ut ? Symbol.for("react.block") : 60121,
    CE = ut ? Symbol.for("react.fundamental") : 60117,
    OE = ut ? Symbol.for("react.responder") : 60118,
    NE = ut ? Symbol.for("react.scope") : 60119;
  function Ht(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Hf:
          switch (((e = e.type), e)) {
            case Gf:
            case Vl:
            case jl:
            case Ul:
            case zl:
            case ql:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Wl:
                case Hl:
                case Kl:
                case Gl:
                case Dl:
                  return e;
                default:
                  return t;
              }
          }
        case qf:
          return t;
      }
    }
  }
  function zv(e) {
    return Ht(e) === Vl;
  }
  (Me.AsyncMode = Gf),
    (Me.ConcurrentMode = Vl),
    (Me.ContextConsumer = Wl),
    (Me.ContextProvider = Dl),
    (Me.Element = Hf),
    (Me.ForwardRef = Hl),
    (Me.Fragment = jl),
    (Me.Lazy = Kl),
    (Me.Memo = Gl),
    (Me.Portal = qf),
    (Me.Profiler = Ul),
    (Me.StrictMode = zl),
    (Me.Suspense = ql),
    (Me.isAsyncMode = function (e) {
      return zv(e) || Ht(e) === Gf;
    }),
    (Me.isConcurrentMode = zv),
    (Me.isContextConsumer = function (e) {
      return Ht(e) === Wl;
    }),
    (Me.isContextProvider = function (e) {
      return Ht(e) === Dl;
    }),
    (Me.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === Hf;
    }),
    (Me.isForwardRef = function (e) {
      return Ht(e) === Hl;
    }),
    (Me.isFragment = function (e) {
      return Ht(e) === jl;
    }),
    (Me.isLazy = function (e) {
      return Ht(e) === Kl;
    }),
    (Me.isMemo = function (e) {
      return Ht(e) === Gl;
    }),
    (Me.isPortal = function (e) {
      return Ht(e) === qf;
    }),
    (Me.isProfiler = function (e) {
      return Ht(e) === Ul;
    }),
    (Me.isStrictMode = function (e) {
      return Ht(e) === zl;
    }),
    (Me.isSuspense = function (e) {
      return Ht(e) === ql;
    }),
    (Me.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === jl ||
        e === Vl ||
        e === Ul ||
        e === zl ||
        e === ql ||
        e === kE ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Kl ||
            e.$$typeof === Gl ||
            e.$$typeof === Dl ||
            e.$$typeof === Wl ||
            e.$$typeof === Hl ||
            e.$$typeof === CE ||
            e.$$typeof === OE ||
            e.$$typeof === NE ||
            e.$$typeof === EE))
      );
    }),
    (Me.typeOf = Ht),
    (function (e) {
      e.exports = Me;
    })(xE);
  var Uv = Vf,
    TE = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    AE = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Dv = {};
  (Dv[Uv.ForwardRef] = TE), (Dv[Uv.Memo] = AE);
  var RE = !0;
  function Wv(e, t, n) {
    var r = "";
    return (
      n.split(" ").forEach(function (o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
      }),
      r
    );
  }
  var Vv = function (e, t, n) {
      var r = e.key + "-" + t.name;
      (n === !1 || RE === !1) &&
        e.registered[r] === void 0 &&
        (e.registered[r] = t.styles);
    },
    Kf = function (e, t, n) {
      Vv(e, t, n);
      var r = e.key + "-" + t.name;
      if (e.inserted[t.name] === void 0) {
        var o = t;
        do e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
        while (o !== void 0);
      }
    };
  function PE(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
      (n =
        (e.charCodeAt(r) & 255) |
        ((e.charCodeAt(++r) & 255) << 8) |
        ((e.charCodeAt(++r) & 255) << 16) |
        ((e.charCodeAt(++r) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (t =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(r) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var Hv = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    _E = /[A-Z]|^ms/g,
    IE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    qv = function (e) {
      return e.charCodeAt(1) === 45;
    },
    Gv = function (e) {
      return e != null && typeof e != "boolean";
    },
    Yf = Tv(function (e) {
      return qv(e) ? e : e.replace(_E, "-$&").toLowerCase();
    }),
    Kv = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if (typeof t == "string")
            return t.replace(IE, function (n, r, o) {
              return (An = { name: r, styles: o, next: An }), r;
            });
      }
      return Hv[e] !== 1 && !qv(e) && typeof t == "number" && t !== 0
        ? t + "px"
        : t;
    };
  function Sa(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        if (n.anim === 1)
          return (An = { name: n.name, styles: n.styles, next: An }), n.name;
        if (n.styles !== void 0) {
          var r = n.next;
          if (r !== void 0)
            for (; r !== void 0; )
              (An = { name: r.name, styles: r.styles, next: An }), (r = r.next);
          var o = n.styles + ";";
          return o;
        }
        return $E(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var i = An,
            a = n(e);
          return (An = i), Sa(e, t, a);
        }
        break;
      }
    }
    if (t == null) return n;
    var s = t[n];
    return s !== void 0 ? s : n;
  }
  function $E(e, t, n) {
    var r = "";
    if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) r += Sa(e, t, n[o]) + ";";
    else
      for (var i in n) {
        var a = n[i];
        if (typeof a != "object")
          t != null && t[a] !== void 0
            ? (r += i + "{" + t[a] + "}")
            : Gv(a) && (r += Yf(i) + ":" + Kv(i, a) + ";");
        else if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var s = 0; s < a.length; s++)
            Gv(a[s]) && (r += Yf(i) + ":" + Kv(i, a[s]) + ";");
        else {
          var l = Sa(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Yf(i) + ":" + l + ";";
              break;
            }
            default:
              r += i + "{" + l + "}";
          }
        }
      }
    return r;
  }
  var Yv = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    An,
    Yl = function (e, t, n) {
      if (
        e.length === 1 &&
        typeof e[0] == "object" &&
        e[0] !== null &&
        e[0].styles !== void 0
      )
        return e[0];
      var r = !0,
        o = "";
      An = void 0;
      var i = e[0];
      i == null || i.raw === void 0
        ? ((r = !1), (o += Sa(n, t, i)))
        : (o += i[0]);
      for (var a = 1; a < e.length; a++)
        (o += Sa(n, t, e[a])), r && (o += i[a]);
      Yv.lastIndex = 0;
      for (var s = "", l; (l = Yv.exec(o)) !== null; ) s += "-" + l[1];
      var u = PE(o) + s;
      return { name: u, styles: o, next: An };
    },
    ME = function (e) {
      return e();
    },
    Xv = es.useInsertionEffect ? es.useInsertionEffect : !1,
    LE = Xv || ME,
    Zv = Xv || k.useLayoutEffect,
    Xf = k.createContext(typeof HTMLElement < "u" ? jv({ key: "css" }) : null),
    FE = Xf.Provider,
    BE = function () {
      return k.useContext(Xf);
    },
    Qv = function (e) {
      return k.forwardRef(function (t, n) {
        var r = k.useContext(Xf);
        return e(t, r, n);
      });
    },
    Zf = k.createContext({}),
    jE = Qv(function (e, t) {
      var n = e.styles,
        r = Yl([n], void 0, k.useContext(Zf)),
        o = k.useRef();
      return (
        Zv(
          function () {
            var i = t.key + "-global",
              a = new t.sheet.constructor({
                key: i,
                nonce: t.sheet.nonce,
                container: t.sheet.container,
                speedy: t.sheet.isSpeedy,
              }),
              s = !1,
              l = document.querySelector(
                'style[data-emotion="' + i + " " + r.name + '"]',
              );
            return (
              t.sheet.tags.length && (a.before = t.sheet.tags[0]),
              l !== null &&
                ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
              (o.current = [a, s]),
              function () {
                a.flush();
              }
            );
          },
          [t],
        ),
        Zv(
          function () {
            var i = o.current,
              a = i[0],
              s = i[1];
            if (s) {
              i[1] = !1;
              return;
            }
            if ((r.next !== void 0 && Kf(t, r.next, !0), a.tags.length)) {
              var l = a.tags[a.tags.length - 1].nextElementSibling;
              (a.before = l), a.flush();
            }
            t.insert("", r, a, !1);
          },
          [t, r.name],
        ),
        null
      );
    });
  function zE() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Yl(t);
  }
  var Qf = function () {
      var e = zE.apply(void 0, arguments),
        t = "animation-" + e.name;
      return {
        name: t,
        styles: "@keyframes " + t + "{" + e.styles + "}",
        anim: 1,
        toString: function () {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        },
      };
    },
    UE = Kk,
    DE = function (e) {
      return e !== "theme";
    },
    Jv = function (e) {
      return typeof e == "string" && e.charCodeAt(0) > 96 ? UE : DE;
    },
    ey = function (e, t, n) {
      var r;
      if (t) {
        var o = t.shouldForwardProp;
        r =
          e.__emotion_forwardProp && o
            ? function (i) {
                return e.__emotion_forwardProp(i) && o(i);
              }
            : o;
      }
      return typeof r != "function" && n && (r = e.__emotion_forwardProp), r;
    },
    WE = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        Vv(t, n, r),
        LE(function () {
          return Kf(t, n, r);
        }),
        null
      );
    },
    VE = function e(t, n) {
      var r = t.__emotion_real === t,
        o = (r && t.__emotion_base) || t,
        i,
        a;
      n !== void 0 && ((i = n.label), (a = n.target));
      var s = ey(t, n, r),
        l = s || Jv(o),
        u = !l("as");
      return function () {
        var d = arguments,
          f =
            r && t.__emotion_styles !== void 0
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (i !== void 0 && f.push("label:" + i + ";"),
          d[0] == null || d[0].raw === void 0)
        )
          f.push.apply(f, d);
        else {
          f.push(d[0][0]);
          for (var h = d.length, b = 1; b < h; b++) f.push(d[b], d[0][b]);
        }
        var g = Qv(function (x, R, y) {
          var m = (u && x.as) || o,
            v = "",
            S = [],
            C = x;
          if (x.theme == null) {
            C = {};
            for (var N in x) C[N] = x[N];
            C.theme = k.useContext(Zf);
          }
          typeof x.className == "string"
            ? (v = Wv(R.registered, S, x.className))
            : x.className != null && (v = x.className + " ");
          var T = Yl(f.concat(S), R.registered, C);
          (v += R.key + "-" + T.name), a !== void 0 && (v += " " + a);
          var _ = u && s === void 0 ? Jv(m) : l,
            I = {};
          for (var j in x) (u && j === "as") || (_(j) && (I[j] = x[j]));
          return (
            (I.className = v),
            (I.ref = y),
            k.createElement(
              k.Fragment,
              null,
              k.createElement(WE, {
                cache: R,
                serialized: T,
                isStringTag: typeof m == "string",
              }),
              k.createElement(m, I),
            )
          );
        });
        return (
          (g.displayName =
            i !== void 0
              ? i
              : "Styled(" +
                (typeof o == "string"
                  ? o
                  : o.displayName || o.name || "Component") +
                ")"),
          (g.defaultProps = t.defaultProps),
          (g.__emotion_real = g),
          (g.__emotion_base = o),
          (g.__emotion_styles = f),
          (g.__emotion_forwardProp = s),
          Object.defineProperty(g, "toString", {
            value: function () {
              return "." + a;
            },
          }),
          (g.withComponent = function (x, R) {
            return e(x, E({}, n, R, { shouldForwardProp: ey(g, R, !0) })).apply(
              void 0,
              f,
            );
          }),
          g
        );
      };
    };
  const HE = VE;
  var qE = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ],
    Jf = HE.bind();
  qE.forEach(function (e) {
    Jf[e] = Jf(e);
  });
  const GE = Jf;
  let ep;
  typeof document == "object" && (ep = jv({ key: "css", prepend: !0 }));
  function KE(e) {
    const { injectFirst: t, children: n } = e;
    return t && ep ? A(FE, { value: ep, children: n }) : n;
  }
  function YE(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function XE(e) {
    const { styles: t, defaultTheme: n = {} } = e;
    return A(jE, {
      styles: typeof t == "function" ? (r) => t(YE(r) ? n : r) : t,
    });
  }
  function ty(e, t) {
    return GE(e, t);
  }
  const ZE = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  };
  function xa(e, t) {
    return t ? en(e, t, { clone: !1 }) : e;
  }
  const tp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    ny = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${tp[e]}px)`,
    };
  function nn(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const o = r.breakpoints || ny;
      return t.reduce((i, a, s) => ((i[o.up(o.keys[s])] = n(t[s])), i), {});
    }
    if (typeof t == "object") {
      const o = r.breakpoints || ny;
      return Object.keys(t).reduce((i, a) => {
        if (Object.keys(o.values || tp).indexOf(a) !== -1) {
          const s = o.up(a);
          i[s] = n(t[a], a);
        } else {
          const s = a;
          i[s] = t[s];
        }
        return i;
      }, {});
    }
    return n(t);
  }
  function QE(e = {}) {
    var t;
    return (
      ((t = e.keys) == null
        ? void 0
        : t.reduce((n, r) => {
            const o = e.up(r);
            return (n[o] = {}), n;
          }, {})) || {}
    );
  }
  function JE(e, t) {
    return e.reduce((n, r) => {
      const o = n[r];
      return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
  }
  function e5(e, t) {
    if (typeof e != "object") return {};
    const n = {},
      r = Object.keys(t);
    return (
      Array.isArray(e)
        ? r.forEach((o, i) => {
            i < e.length && (n[o] = !0);
          })
        : r.forEach((o) => {
            e[o] != null && (n[o] = !0);
          }),
      n
    );
  }
  function Xl({ values: e, breakpoints: t, base: n }) {
    const r = n || e5(e, t),
      o = Object.keys(r);
    if (o.length === 0) return e;
    let i;
    return o.reduce(
      (a, s, l) => (
        Array.isArray(e)
          ? ((a[s] = e[l] != null ? e[l] : e[i]), (i = l))
          : typeof e == "object"
          ? ((a[s] = e[s] != null ? e[s] : e[i]), (i = s))
          : (a[s] = e),
        a
      ),
      {},
    );
  }
  function Zl(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
      const r = `vars.${t}`
        .split(".")
        .reduce((o, i) => (o && o[i] ? o[i] : null), e);
      if (r != null) return r;
    }
    return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
  }
  function Ql(e, t, n, r = n) {
    let o;
    return (
      typeof e == "function"
        ? (o = e(n))
        : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = Zl(e, n) || r),
      t && (o = t(o, r, e)),
      o
    );
  }
  function Pe(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      i = (a) => {
        if (a[t] == null) return null;
        const s = a[t],
          l = a.theme,
          u = Zl(l, r) || {};
        return nn(a, s, (d) => {
          let f = Ql(u, o, d);
          return (
            d === f &&
              typeof d == "string" &&
              (f = Ql(u, o, `${t}${d === "default" ? "" : le(d)}`, d)),
            n === !1 ? f : { [n]: f }
          );
        });
      };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
  }
  function Jl(...e) {
    const t = e.reduce(
        (r, o) => (
          o.filterProps.forEach((i) => {
            r[i] = o;
          }),
          r
        ),
        {},
      ),
      n = (r) =>
        Object.keys(r).reduce((o, i) => (t[i] ? xa(o, t[i](r)) : o), {});
    return (
      (n.propTypes = {}),
      (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
      n
    );
  }
  function t5(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
  }
  const n5 = { m: "margin", p: "padding" },
    r5 = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    ry = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    o5 = t5((e) => {
      if (e.length > 2)
        if (ry[e]) e = ry[e];
        else return [e];
      const [t, n] = e.split(""),
        r = n5[t],
        o = r5[n] || "";
      return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    np = [
      "m",
      "mt",
      "mr",
      "mb",
      "ml",
      "mx",
      "my",
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginX",
      "marginY",
      "marginInline",
      "marginInlineStart",
      "marginInlineEnd",
      "marginBlock",
      "marginBlockStart",
      "marginBlockEnd",
    ],
    rp = [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingX",
      "paddingY",
      "paddingInline",
      "paddingInlineStart",
      "paddingInlineEnd",
      "paddingBlock",
      "paddingBlockStart",
      "paddingBlockEnd",
    ];
  [...np, ...rp];
  function ka(e, t, n, r) {
    var o;
    const i = (o = Zl(e, t, !1)) != null ? o : n;
    return typeof i == "number"
      ? (a) => (typeof a == "string" ? a : i * a)
      : Array.isArray(i)
      ? (a) => (typeof a == "string" ? a : i[a])
      : typeof i == "function"
      ? i
      : () => {};
  }
  function oy(e) {
    return ka(e, "spacing", 8);
  }
  function Ea(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
      r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
  }
  function i5(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = Ea(t, n)), r), {});
  }
  function a5(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = o5(n),
      i = i5(o, r),
      a = e[n];
    return nn(e, a, i);
  }
  function iy(e, t) {
    const n = oy(e.theme);
    return Object.keys(e)
      .map((r) => a5(e, t, r, n))
      .reduce(xa, {});
  }
  function Xe(e) {
    return iy(e, np);
  }
  (Xe.propTypes = {}), (Xe.filterProps = np);
  function Ze(e) {
    return iy(e, rp);
  }
  (Ze.propTypes = {}), (Ze.filterProps = rp);
  function Rn(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  const s5 = Pe({ prop: "border", themeKey: "borders", transform: Rn }),
    l5 = Pe({ prop: "borderTop", themeKey: "borders", transform: Rn }),
    u5 = Pe({ prop: "borderRight", themeKey: "borders", transform: Rn }),
    c5 = Pe({ prop: "borderBottom", themeKey: "borders", transform: Rn }),
    d5 = Pe({ prop: "borderLeft", themeKey: "borders", transform: Rn }),
    f5 = Pe({ prop: "borderColor", themeKey: "palette" }),
    p5 = Pe({ prop: "borderTopColor", themeKey: "palette" }),
    h5 = Pe({ prop: "borderRightColor", themeKey: "palette" }),
    m5 = Pe({ prop: "borderBottomColor", themeKey: "palette" }),
    g5 = Pe({ prop: "borderLeftColor", themeKey: "palette" }),
    eu = (e) => {
      if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = ka(e.theme, "shape.borderRadius", 4),
          n = (r) => ({ borderRadius: Ea(t, r) });
        return nn(e, e.borderRadius, n);
      }
      return null;
    };
  (eu.propTypes = {}),
    (eu.filterProps = ["borderRadius"]),
    Jl(s5, l5, u5, c5, d5, f5, p5, h5, m5, g5, eu);
  const tu = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = ka(e.theme, "spacing", 8),
        n = (r) => ({ gap: Ea(t, r) });
      return nn(e, e.gap, n);
    }
    return null;
  };
  (tu.propTypes = {}), (tu.filterProps = ["gap"]);
  const nu = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = ka(e.theme, "spacing", 8),
        n = (r) => ({ columnGap: Ea(t, r) });
      return nn(e, e.columnGap, n);
    }
    return null;
  };
  (nu.propTypes = {}), (nu.filterProps = ["columnGap"]);
  const ru = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = ka(e.theme, "spacing", 8),
        n = (r) => ({ rowGap: Ea(t, r) });
      return nn(e, e.rowGap, n);
    }
    return null;
  };
  (ru.propTypes = {}), (ru.filterProps = ["rowGap"]);
  const v5 = Pe({ prop: "gridColumn" }),
    y5 = Pe({ prop: "gridRow" }),
    b5 = Pe({ prop: "gridAutoFlow" }),
    w5 = Pe({ prop: "gridAutoColumns" }),
    S5 = Pe({ prop: "gridAutoRows" }),
    x5 = Pe({ prop: "gridTemplateColumns" }),
    k5 = Pe({ prop: "gridTemplateRows" }),
    E5 = Pe({ prop: "gridTemplateAreas" }),
    C5 = Pe({ prop: "gridArea" });
  Jl(tu, nu, ru, v5, y5, b5, w5, S5, x5, k5, E5, C5);
  function Ko(e, t) {
    return t === "grey" ? t : e;
  }
  const O5 = Pe({ prop: "color", themeKey: "palette", transform: Ko }),
    N5 = Pe({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: Ko,
    }),
    T5 = Pe({ prop: "backgroundColor", themeKey: "palette", transform: Ko });
  Jl(O5, N5, T5);
  function qt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const A5 = Pe({ prop: "width", transform: qt }),
    op = (e) => {
      if (e.maxWidth !== void 0 && e.maxWidth !== null) {
        const t = (n) => {
          var r, o, i;
          return {
            maxWidth:
              ((r = e.theme) == null ||
              (o = r.breakpoints) == null ||
              (i = o.values) == null
                ? void 0
                : i[n]) ||
              tp[n] ||
              qt(n),
          };
        };
        return nn(e, e.maxWidth, t);
      }
      return null;
    };
  op.filterProps = ["maxWidth"];
  const R5 = Pe({ prop: "minWidth", transform: qt }),
    P5 = Pe({ prop: "height", transform: qt }),
    _5 = Pe({ prop: "maxHeight", transform: qt }),
    I5 = Pe({ prop: "minHeight", transform: qt });
  Pe({ prop: "size", cssProperty: "width", transform: qt }),
    Pe({ prop: "size", cssProperty: "height", transform: qt });
  const $5 = Pe({ prop: "boxSizing" });
  Jl(A5, op, R5, P5, _5, I5, $5);
  const M5 = {
      border: { themeKey: "borders", transform: Rn },
      borderTop: { themeKey: "borders", transform: Rn },
      borderRight: { themeKey: "borders", transform: Rn },
      borderBottom: { themeKey: "borders", transform: Rn },
      borderLeft: { themeKey: "borders", transform: Rn },
      borderColor: { themeKey: "palette" },
      borderTopColor: { themeKey: "palette" },
      borderRightColor: { themeKey: "palette" },
      borderBottomColor: { themeKey: "palette" },
      borderLeftColor: { themeKey: "palette" },
      borderRadius: { themeKey: "shape.borderRadius", style: eu },
      color: { themeKey: "palette", transform: Ko },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: Ko,
      },
      backgroundColor: { themeKey: "palette", transform: Ko },
      p: { style: Ze },
      pt: { style: Ze },
      pr: { style: Ze },
      pb: { style: Ze },
      pl: { style: Ze },
      px: { style: Ze },
      py: { style: Ze },
      padding: { style: Ze },
      paddingTop: { style: Ze },
      paddingRight: { style: Ze },
      paddingBottom: { style: Ze },
      paddingLeft: { style: Ze },
      paddingX: { style: Ze },
      paddingY: { style: Ze },
      paddingInline: { style: Ze },
      paddingInlineStart: { style: Ze },
      paddingInlineEnd: { style: Ze },
      paddingBlock: { style: Ze },
      paddingBlockStart: { style: Ze },
      paddingBlockEnd: { style: Ze },
      m: { style: Xe },
      mt: { style: Xe },
      mr: { style: Xe },
      mb: { style: Xe },
      ml: { style: Xe },
      mx: { style: Xe },
      my: { style: Xe },
      margin: { style: Xe },
      marginTop: { style: Xe },
      marginRight: { style: Xe },
      marginBottom: { style: Xe },
      marginLeft: { style: Xe },
      marginX: { style: Xe },
      marginY: { style: Xe },
      marginInline: { style: Xe },
      marginInlineStart: { style: Xe },
      marginInlineEnd: { style: Xe },
      marginBlock: { style: Xe },
      marginBlockStart: { style: Xe },
      marginBlockEnd: { style: Xe },
      displayPrint: {
        cssProperty: !1,
        transform: (e) => ({ "@media print": { display: e } }),
      },
      display: {},
      overflow: {},
      textOverflow: {},
      visibility: {},
      whiteSpace: {},
      flexBasis: {},
      flexDirection: {},
      flexWrap: {},
      justifyContent: {},
      alignItems: {},
      alignContent: {},
      order: {},
      flex: {},
      flexGrow: {},
      flexShrink: {},
      alignSelf: {},
      justifyItems: {},
      justifySelf: {},
      gap: { style: tu },
      rowGap: { style: ru },
      columnGap: { style: nu },
      gridColumn: {},
      gridRow: {},
      gridAutoFlow: {},
      gridAutoColumns: {},
      gridAutoRows: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
      gridTemplateAreas: {},
      gridArea: {},
      position: {},
      zIndex: { themeKey: "zIndex" },
      top: {},
      right: {},
      bottom: {},
      left: {},
      boxShadow: { themeKey: "shadows" },
      width: { transform: qt },
      maxWidth: { style: op },
      minWidth: { transform: qt },
      height: { transform: qt },
      maxHeight: { transform: qt },
      minHeight: { transform: qt },
      boxSizing: {},
      fontFamily: { themeKey: "typography" },
      fontSize: { themeKey: "typography" },
      fontStyle: { themeKey: "typography" },
      fontWeight: { themeKey: "typography" },
      letterSpacing: {},
      textTransform: {},
      lineHeight: {},
      textAlign: {},
      typography: { cssProperty: !1, themeKey: "typography" },
    },
    ou = M5;
  function L5(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
      n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
  }
  function F5(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function B5() {
    function e(n, r, o, i) {
      const a = { [n]: r, theme: o },
        s = i[n];
      if (!s) return { [n]: r };
      const { cssProperty: l = n, themeKey: u, transform: d, style: f } = s;
      if (r == null) return null;
      const h = Zl(o, u) || {};
      return f
        ? f(a)
        : nn(a, r, (b) => {
            let g = Ql(h, d, b);
            return (
              b === g &&
                typeof b == "string" &&
                (g = Ql(h, d, `${n}${b === "default" ? "" : le(b)}`, b)),
              l === !1 ? g : { [l]: g }
            );
          });
    }
    function t(n) {
      var r;
      const { sx: o, theme: i = {} } = n || {};
      if (!o) return null;
      const a = (r = i.unstable_sxConfig) != null ? r : ou;
      function s(l) {
        let u = l;
        if (typeof l == "function") u = l(i);
        else if (typeof l != "object") return l;
        if (!u) return null;
        const d = QE(i.breakpoints),
          f = Object.keys(d);
        let h = d;
        return (
          Object.keys(u).forEach((b) => {
            const g = F5(u[b], i);
            if (g != null)
              if (typeof g == "object")
                if (a[b]) h = xa(h, e(b, g, i, a));
                else {
                  const x = nn({ theme: i }, g, (R) => ({ [b]: R }));
                  L5(x, g) ? (h[b] = t({ sx: g, theme: i })) : (h = xa(h, x));
                }
              else h = xa(h, e(b, g, i, a));
          }),
          JE(f, h)
        );
      }
      return Array.isArray(o) ? o.map(s) : s(o);
    }
    return t;
  }
  const ay = B5();
  ay.filterProps = ["sx"];
  const iu = ay,
    j5 = ["sx"],
    z5 = (e) => {
      var t, n;
      const r = { systemProps: {}, otherProps: {} },
        o =
          (t =
            e == null || (n = e.theme) == null
              ? void 0
              : n.unstable_sxConfig) != null
            ? t
            : ou;
      return (
        Object.keys(e).forEach((i) => {
          o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
        }),
        r
      );
    };
  function ip(e) {
    const { sx: t } = e,
      n = re(e, j5),
      { systemProps: r, otherProps: o } = z5(n);
    let i;
    return (
      Array.isArray(t)
        ? (i = [r, ...t])
        : typeof t == "function"
        ? (i = (...a) => {
            const s = t(...a);
            return qr(s) ? E({}, r, s) : r;
          })
        : (i = E({}, r, t)),
      E({}, o, { sx: i })
    );
  }
  function sy(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (n = sy(e[t])) && (r && (r += " "), (r += n));
      else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
  }
  function ue() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
      (e = arguments[n++]) && (t = sy(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const U5 = ["values", "unit", "step"],
    D5 = (e) => {
      const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
      return (
        t.sort((n, r) => n.val - r.val),
        t.reduce((n, r) => E({}, n, { [r.key]: r.val }), {})
      );
    };
  function W5(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
      } = e,
      o = re(e, U5),
      i = D5(t),
      a = Object.keys(i);
    function s(h) {
      return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
    }
    function l(h) {
      return `@media (max-width:${
        (typeof t[h] == "number" ? t[h] : h) - r / 100
      }${n})`;
    }
    function u(h, b) {
      const g = a.indexOf(b);
      return `@media (min-width:${
        typeof t[h] == "number" ? t[h] : h
      }${n}) and (max-width:${
        (g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : b) - r / 100
      }${n})`;
    }
    function d(h) {
      return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : s(h);
    }
    function f(h) {
      const b = a.indexOf(h);
      return b === 0
        ? s(a[1])
        : b === a.length - 1
        ? l(a[b])
        : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
    }
    return E(
      {
        keys: a,
        values: i,
        up: s,
        down: l,
        between: u,
        only: d,
        not: f,
        unit: n,
      },
      o,
    );
  }
  const V5 = { borderRadius: 4 },
    H5 = V5;
  function q5(e = 8) {
    if (e.mui) return e;
    const t = oy({ spacing: e }),
      n = (...r) =>
        (r.length === 0 ? [1] : r)
          .map((o) => {
            const i = t(o);
            return typeof i == "number" ? `${i}px` : i;
          })
          .join(" ");
    return (n.mui = !0), n;
  }
  const G5 = ["breakpoints", "palette", "spacing", "shape"];
  function au(e = {}, ...t) {
    const {
        breakpoints: n = {},
        palette: r = {},
        spacing: o,
        shape: i = {},
      } = e,
      a = re(e, G5),
      s = W5(n),
      l = q5(o);
    let u = en(
      {
        breakpoints: s,
        direction: "ltr",
        components: {},
        palette: E({ mode: "light" }, r),
        spacing: l,
        shape: E({}, H5, i),
      },
      a,
    );
    return (
      (u = t.reduce((d, f) => en(d, f), u)),
      (u.unstable_sxConfig = E(
        {},
        ou,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (u.unstable_sx = function (d) {
        return iu({ sx: d, theme: this });
      }),
      u
    );
  }
  const K5 = k.createContext(null),
    ly = K5;
  function uy() {
    return k.useContext(ly);
  }
  const Y5 = typeof Symbol == "function" && Symbol.for,
    X5 = Y5 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  function Z5(e, t) {
    return typeof t == "function" ? t(e) : E({}, e, t);
  }
  function Q5(e) {
    const { children: t, theme: n } = e,
      r = uy(),
      o = k.useMemo(() => {
        const i = r === null ? n : Z5(r, n);
        return i != null && (i[X5] = r !== null), i;
      }, [n, r]);
    return A(ly.Provider, { value: o, children: t });
  }
  function J5(e) {
    return Object.keys(e).length === 0;
  }
  function eC(e = null) {
    const t = uy();
    return !t || J5(t) ? e : t;
  }
  const tC = au();
  function su(e = tC) {
    return eC(e);
  }
  const nC = ["className", "component"];
  function rC(e = {}) {
    const {
        defaultTheme: t,
        defaultClassName: n = "MuiBox-root",
        generateClassName: r,
      } = e,
      o = ty("div", {
        shouldForwardProp: (i) => i !== "theme" && i !== "sx" && i !== "as",
      })(iu);
    return k.forwardRef(function (i, a) {
      const s = su(t),
        l = ip(i),
        { className: u, component: d = "div" } = l,
        f = re(l, nC);
      return A(
        o,
        E({ as: d, ref: a, className: ue(u, r ? r(n) : n), theme: s }, f),
      );
    });
  }
  const oC = ["variant"];
  function cy(e) {
    return e.length === 0;
  }
  function dy(e) {
    const { variant: t } = e,
      n = re(e, oC);
    let r = t || "";
    return (
      Object.keys(n)
        .sort()
        .forEach((o) => {
          o === "color"
            ? (r += cy(r) ? e[o] : le(e[o]))
            : (r += `${cy(r) ? o : le(o)}${le(e[o].toString())}`);
        }),
      r
    );
  }
  const iC = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
    ],
    aC = ["theme"],
    sC = ["theme"];
  function Ca(e) {
    return Object.keys(e).length === 0;
  }
  function lC(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  const uC = (e, t) =>
      t.components && t.components[e] && t.components[e].styleOverrides
        ? t.components[e].styleOverrides
        : null,
    cC = (e, t) => {
      let n = [];
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants);
      const r = {};
      return (
        n.forEach((o) => {
          const i = dy(o.props);
          r[i] = o.style;
        }),
        r
      );
    },
    dC = (e, t, n, r) => {
      var o, i;
      const { ownerState: a = {} } = e,
        s = [],
        l =
          n == null || (o = n.components) == null || (i = o[r]) == null
            ? void 0
            : i.variants;
      return (
        l &&
          l.forEach((u) => {
            let d = !0;
            Object.keys(u.props).forEach((f) => {
              a[f] !== u.props[f] && e[f] !== u.props[f] && (d = !1);
            }),
              d && s.push(t[dy(u.props)]);
          }),
        s
      );
    };
  function Oa(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  const fC = au();
  function fy(e = {}) {
    const {
        defaultTheme: t = fC,
        rootShouldForwardProp: n = Oa,
        slotShouldForwardProp: r = Oa,
      } = e,
      o = (i) => {
        const a = Ca(i.theme) ? t : i.theme;
        return iu(E({}, i, { theme: a }));
      };
    return (
      (o.__mui_systemSx = !0),
      (i, a = {}) => {
        ZE(i, (v) => v.filter((S) => !(S != null && S.__mui_systemSx)));
        const {
            name: s,
            slot: l,
            skipVariantsResolver: u,
            skipSx: d,
            overridesResolver: f,
          } = a,
          h = re(a, iC),
          b = u !== void 0 ? u : (l && l !== "Root") || !1,
          g = d || !1;
        let x,
          R = Oa;
        l === "Root" ? (R = n) : l ? (R = r) : lC(i) && (R = void 0);
        const y = ty(i, E({ shouldForwardProp: R, label: x }, h)),
          m = (v, ...S) => {
            const C = S
              ? S.map((_) =>
                  typeof _ == "function" && _.__emotion_real !== _
                    ? (I) => {
                        let { theme: j } = I,
                          H = re(I, aC);
                        return _(E({ theme: Ca(j) ? t : j }, H));
                      }
                    : _,
                )
              : [];
            let N = v;
            s &&
              f &&
              C.push((_) => {
                const I = Ca(_.theme) ? t : _.theme,
                  j = uC(s, I);
                if (j) {
                  const H = {};
                  return (
                    Object.entries(j).forEach(([V, Z]) => {
                      H[V] =
                        typeof Z == "function" ? Z(E({}, _, { theme: I })) : Z;
                    }),
                    f(_, H)
                  );
                }
                return null;
              }),
              s &&
                !b &&
                C.push((_) => {
                  const I = Ca(_.theme) ? t : _.theme;
                  return dC(_, cC(s, I), I, s);
                }),
              g || C.push(o);
            const T = C.length - S.length;
            if (Array.isArray(v) && T > 0) {
              const _ = new Array(T).fill("");
              (N = [...v, ..._]), (N.raw = [...v.raw, ..._]);
            } else
              typeof v == "function" &&
                v.__emotion_real !== v &&
                (N = (_) => {
                  let { theme: I } = _,
                    j = re(_, sC);
                  return v(E({ theme: Ca(I) ? t : I }, j));
                });
            return y(N, ...C);
          };
        return y.withConfig && (m.withConfig = y.withConfig), m;
      }
    );
  }
  const pC = fy(),
    hC = pC;
  function mC(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
      !t.components ||
      !t.components[n] ||
      !t.components[n].defaultProps
      ? r
      : Ff(t.components[n].defaultProps, r);
  }
  function py({ props: e, name: t, defaultTheme: n }) {
    const r = su(n);
    return mC({ theme: r, name: t, props: e });
  }
  function ap(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n);
  }
  function gC(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let n = e.match(t);
    return (
      n && n[0].length === 1 && (n = n.map((r) => r + r)),
      n
        ? `rgb${n.length === 4 ? "a" : ""}(${n
            .map((r, o) =>
              o < 3
                ? parseInt(r, 16)
                : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3,
            )
            .join(", ")})`
        : ""
    );
  }
  function Kr(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return Kr(gC(e));
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
      throw new Error(yr(9, e));
    let r = e.substring(t + 1, e.length - 1),
      o;
    if (n === "color") {
      if (
        ((r = r.split(" ")),
        (o = r.shift()),
        r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
        ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
          o,
        ) === -1)
      )
        throw new Error(yr(10, o));
    } else r = r.split(",");
    return (
      (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
  }
  function lu(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
      t.indexOf("rgb") !== -1
        ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
        : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
      t.indexOf("color") !== -1
        ? (r = `${n} ${r.join(" ")}`)
        : (r = `${r.join(", ")}`),
      `${t}(${r})`
    );
  }
  function vC(e) {
    e = Kr(e);
    const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      o = t[2] / 100,
      i = r * Math.min(o, 1 - o),
      a = (u, d = (u + n / 30) % 12) =>
        o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
    let s = "rgb";
    const l = [
      Math.round(a(0) * 255),
      Math.round(a(8) * 255),
      Math.round(a(4) * 255),
    ];
    return (
      e.type === "hsla" && ((s += "a"), l.push(t[3])),
      lu({ type: s, values: l })
    );
  }
  function hy(e) {
    e = Kr(e);
    let t = e.type === "hsl" || e.type === "hsla" ? Kr(vC(e)).values : e.values;
    return (
      (t = t.map(
        (n) => (
          e.type !== "color" && (n /= 255),
          n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
        ),
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function yC(e, t) {
    const n = hy(e),
      r = hy(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  }
  function Gt(e, t) {
    return (
      (e = Kr(e)),
      (t = ap(t)),
      (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
      e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      lu(e)
    );
  }
  function sp(e, t) {
    if (((e = Kr(e)), (t = ap(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return lu(e);
  }
  function lp(e, t) {
    if (((e = Kr(e)), (t = ap(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return lu(e);
  }
  const bC = {};
  function wC(e) {
    const t = su();
    return A(Zf.Provider, {
      value: typeof t == "object" ? t : bC,
      children: e.children,
    });
  }
  function my(e) {
    const { children: t, theme: n } = e;
    return A(Q5, { theme: n, children: A(wC, { children: t }) });
  }
  const SC = [
      "className",
      "component",
      "disableGutters",
      "fixed",
      "maxWidth",
      "classes",
    ],
    xC = au(),
    kC = hC("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${le(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    EC = (e) => py({ props: e, name: "MuiContainer", defaultTheme: xC }),
    CC = (e, t) => {
      const n = (l) => be(t, l),
        { classes: r, fixed: o, disableGutters: i, maxWidth: a } = e,
        s = {
          root: [
            "root",
            a && `maxWidth${le(String(a))}`,
            o && "fixed",
            i && "disableGutters",
          ],
        };
      return Se(s, n, r);
    };
  function OC(e = {}) {
    const {
        createStyledComponent: t = kC,
        useThemeProps: n = EC,
        componentName: r = "MuiContainer",
      } = e,
      o = t(
        ({ theme: i, ownerState: a }) =>
          E(
            {
              width: "100%",
              marginLeft: "auto",
              boxSizing: "border-box",
              marginRight: "auto",
              display: "block",
            },
            !a.disableGutters && {
              paddingLeft: i.spacing(2),
              paddingRight: i.spacing(2),
              [i.breakpoints.up("sm")]: {
                paddingLeft: i.spacing(3),
                paddingRight: i.spacing(3),
              },
            },
          ),
        ({ theme: i, ownerState: a }) =>
          a.fixed &&
          Object.keys(i.breakpoints.values).reduce((s, l) => {
            const u = l,
              d = i.breakpoints.values[u];
            return (
              d !== 0 &&
                (s[i.breakpoints.up(u)] = {
                  maxWidth: `${d}${i.breakpoints.unit}`,
                }),
              s
            );
          }, {}),
        ({ theme: i, ownerState: a }) =>
          E(
            {},
            a.maxWidth === "xs" && {
              [i.breakpoints.up("xs")]: {
                maxWidth: Math.max(i.breakpoints.values.xs, 444),
              },
            },
            a.maxWidth &&
              a.maxWidth !== "xs" && {
                [i.breakpoints.up(a.maxWidth)]: {
                  maxWidth: `${i.breakpoints.values[a.maxWidth]}${
                    i.breakpoints.unit
                  }`,
                },
              },
          ),
      );
    return k.forwardRef(function (i, a) {
      const s = n(i),
        {
          className: l,
          component: u = "div",
          disableGutters: d = !1,
          fixed: f = !1,
          maxWidth: h = "lg",
        } = s,
        b = re(s, SC),
        g = E({}, s, {
          component: u,
          disableGutters: d,
          fixed: f,
          maxWidth: h,
        }),
        x = CC(g, r);
      return A(
        o,
        E({ as: u, ownerState: g, className: ue(x.root, l), ref: a }, b),
      );
    });
  }
  function NC(e, t) {
    return E(
      {
        toolbar: {
          minHeight: 56,
          [e.up("xs")]: {
            "@media (orientation: landscape)": { minHeight: 48 },
          },
          [e.up("sm")]: { minHeight: 64 },
        },
      },
      t,
    );
  }
  const TC = ["mode", "contrastThreshold", "tonalOffset"],
    gy = {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: ma.white, default: ma.white },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    up = {
      text: {
        primary: ma.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: ma.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    };
  function vy(e, t, n, r) {
    const o = r.light || r,
      i = r.dark || r * 1.5;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : t === "light"
        ? (e.light = lp(e.main, o))
        : t === "dark" && (e.dark = sp(e.main, i)));
  }
  function AC(e = "light") {
    return e === "dark"
      ? { main: Vr[200], light: Vr[50], dark: Vr[400] }
      : { main: Vr[700], light: Vr[400], dark: Vr[800] };
  }
  function RC(e = "light") {
    return e === "dark"
      ? { main: Wr[200], light: Wr[50], dark: Wr[400] }
      : { main: Wr[500], light: Wr[300], dark: Wr[700] };
  }
  function PC(e = "light") {
    return e === "dark"
      ? { main: Dr[500], light: Dr[300], dark: Dr[700] }
      : { main: Dr[700], light: Dr[400], dark: Dr[800] };
  }
  function _C(e = "light") {
    return e === "dark"
      ? { main: Wo[400], light: Wo[300], dark: Wo[700] }
      : { main: Wo[700], light: Wo[500], dark: Wo[900] };
  }
  function IC(e = "light") {
    return e === "dark"
      ? { main: Hr[400], light: Hr[300], dark: Hr[700] }
      : { main: Hr[800], light: Hr[500], dark: Hr[900] };
  }
  function $C(e = "light") {
    return e === "dark"
      ? { main: Vo[400], light: Vo[300], dark: Vo[700] }
      : { main: "#ed6c02", light: Vo[500], dark: Vo[900] };
  }
  function MC(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
      } = e,
      o = re(e, TC),
      i = e.primary || AC(t),
      a = e.secondary || RC(t),
      s = e.error || PC(t),
      l = e.info || _C(t),
      u = e.success || IC(t),
      d = e.warning || $C(t);
    function f(g) {
      return yC(g, up.text.primary) >= n ? up.text.primary : gy.text.primary;
    }
    const h = ({
        color: g,
        name: x,
        mainShade: R = 500,
        lightShade: y = 300,
        darkShade: m = 700,
      }) => {
        if (
          ((g = E({}, g)),
          !g.main && g[R] && (g.main = g[R]),
          !g.hasOwnProperty("main"))
        )
          throw new Error(yr(11, x ? ` (${x})` : "", R));
        if (typeof g.main != "string")
          throw new Error(yr(12, x ? ` (${x})` : "", JSON.stringify(g.main)));
        return (
          vy(g, "light", y, r),
          vy(g, "dark", m, r),
          g.contrastText || (g.contrastText = f(g.main)),
          g
        );
      },
      b = { dark: up, light: gy };
    return en(
      E(
        {
          common: E({}, ma),
          mode: t,
          primary: h({ color: i, name: "primary" }),
          secondary: h({
            color: a,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700",
          }),
          error: h({ color: s, name: "error" }),
          warning: h({ color: d, name: "warning" }),
          info: h({ color: l, name: "info" }),
          success: h({ color: u, name: "success" }),
          grey: Ak,
          contrastThreshold: n,
          getContrastText: f,
          augmentColor: h,
          tonalOffset: r,
        },
        b[t],
      ),
      o,
    );
  }
  const LC = [
    "fontFamily",
    "fontSize",
    "fontWeightLight",
    "fontWeightRegular",
    "fontWeightMedium",
    "fontWeightBold",
    "htmlFontSize",
    "allVariants",
    "pxToRem",
  ];
  function FC(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const yy = { textTransform: "uppercase" },
    by = '"Roboto", "Helvetica", "Arial", sans-serif';
  function BC(e, t) {
    const n = typeof t == "function" ? t(e) : t,
      {
        fontFamily: r = by,
        fontSize: o = 14,
        fontWeightLight: i = 300,
        fontWeightRegular: a = 400,
        fontWeightMedium: s = 500,
        fontWeightBold: l = 700,
        htmlFontSize: u = 16,
        allVariants: d,
        pxToRem: f,
      } = n,
      h = re(n, LC),
      b = o / 14,
      g = f || ((y) => `${(y / u) * b}rem`),
      x = (y, m, v, S, C) =>
        E(
          { fontFamily: r, fontWeight: y, fontSize: g(m), lineHeight: v },
          r === by ? { letterSpacing: `${FC(S / m)}em` } : {},
          C,
          d,
        ),
      R = {
        h1: x(i, 96, 1.167, -1.5),
        h2: x(i, 60, 1.2, -0.5),
        h3: x(a, 48, 1.167, 0),
        h4: x(a, 34, 1.235, 0.25),
        h5: x(a, 24, 1.334, 0),
        h6: x(s, 20, 1.6, 0.15),
        subtitle1: x(a, 16, 1.75, 0.15),
        subtitle2: x(s, 14, 1.57, 0.1),
        body1: x(a, 16, 1.5, 0.15),
        body2: x(a, 14, 1.43, 0.15),
        button: x(s, 14, 1.75, 0.4, yy),
        caption: x(a, 12, 1.66, 0.4),
        overline: x(a, 12, 2.66, 1, yy),
      };
    return en(
      E(
        {
          htmlFontSize: u,
          pxToRem: g,
          fontFamily: r,
          fontSize: o,
          fontWeightLight: i,
          fontWeightRegular: a,
          fontWeightMedium: s,
          fontWeightBold: l,
        },
        R,
      ),
      h,
      { clone: !1 },
    );
  }
  const jC = 0.2,
    zC = 0.14,
    UC = 0.12;
  function We(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${jC})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${zC})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${UC})`,
    ].join(",");
  }
  const DC = [
      "none",
      We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    WC = DC,
    VC = ["duration", "easing", "delay"],
    HC = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    qC = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function wy(e) {
    return `${Math.round(e)}ms`;
  }
  function GC(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
  }
  function KC(e) {
    const t = E({}, HC, e.easing),
      n = E({}, qC, e.duration);
    return E(
      {
        getAutoHeightDuration: GC,
        create: (r = ["all"], o = {}) => {
          const {
            duration: i = n.standard,
            easing: a = t.easeInOut,
            delay: s = 0,
          } = o;
          return (
            re(o, VC),
            (Array.isArray(r) ? r : [r])
              .map(
                (l) =>
                  `${l} ${typeof i == "string" ? i : wy(i)} ${a} ${
                    typeof s == "string" ? s : wy(s)
                  }`,
              )
              .join(",")
          );
        },
      },
      e,
      { easing: t, duration: n },
    );
  }
  const YC = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    XC = YC,
    ZC = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
    ];
  function uu(e = {}, ...t) {
    const {
        mixins: n = {},
        palette: r = {},
        transitions: o = {},
        typography: i = {},
      } = e,
      a = re(e, ZC);
    if (e.vars) throw new Error(yr(18));
    const s = MC(r),
      l = au(e);
    let u = en(l, {
      mixins: NC(l.breakpoints, n),
      palette: s,
      shadows: WC.slice(),
      typography: BC(s, i),
      transitions: KC(o),
      zIndex: E({}, XC),
    });
    return (
      (u = en(u, a)),
      (u = t.reduce((d, f) => en(d, f), u)),
      (u.unstable_sxConfig = E(
        {},
        ou,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (u.unstable_sx = function (d) {
        return iu({ sx: d, theme: this });
      }),
      u
    );
  }
  const QC = uu(),
    cu = QC;
  function Na() {
    return su(cu);
  }
  function xe({ props: e, name: t }) {
    return py({ props: e, name: t, defaultTheme: cu });
  }
  const Pn = (e) => Oa(e) && e !== "classes",
    JC = Oa,
    e3 = fy({ defaultTheme: cu, rootShouldForwardProp: Pn }),
    ie = e3,
    t3 = (e) => {
      let t;
      return (
        e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
        (t / 100).toFixed(2)
      );
    },
    Sy = t3;
  function Yo(e) {
    return typeof e == "string";
  }
  function n3(e, t, n) {
    return e === void 0 || Yo(e)
      ? t
      : E({}, t, { ownerState: E({}, t.ownerState, n) });
  }
  function r3(e, t = []) {
    if (e === void 0) return {};
    const n = {};
    return (
      Object.keys(e)
        .filter(
          (r) =>
            r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r),
        )
        .forEach((r) => {
          n[r] = e[r];
        }),
      n
    );
  }
  function cp(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function xy(e) {
    if (e === void 0) return {};
    const t = {};
    return (
      Object.keys(e)
        .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
        .forEach((n) => {
          t[n] = e[n];
        }),
      t
    );
  }
  function o3(e) {
    const {
      getSlotProps: t,
      additionalProps: n,
      externalSlotProps: r,
      externalForwardedProps: o,
      className: i,
    } = e;
    if (!t) {
      const b = ue(
          o == null ? void 0 : o.className,
          r == null ? void 0 : r.className,
          i,
          n == null ? void 0 : n.className,
        ),
        g = E(
          {},
          n == null ? void 0 : n.style,
          o == null ? void 0 : o.style,
          r == null ? void 0 : r.style,
        ),
        x = E({}, n, o, r);
      return (
        b.length > 0 && (x.className = b),
        Object.keys(g).length > 0 && (x.style = g),
        { props: x, internalRef: void 0 }
      );
    }
    const a = r3(E({}, o, r)),
      s = xy(r),
      l = xy(o),
      u = t(a),
      d = ue(
        u == null ? void 0 : u.className,
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
      ),
      f = E(
        {},
        u == null ? void 0 : u.style,
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style,
      ),
      h = E({}, u, n, l, s);
    return (
      d.length > 0 && (h.className = d),
      Object.keys(f).length > 0 && (h.style = f),
      { props: h, internalRef: u.ref }
    );
  }
  const i3 = ["elementType", "externalSlotProps", "ownerState"];
  function ky(e) {
    var t;
    const { elementType: n, externalSlotProps: r, ownerState: o } = e,
      i = re(e, i3),
      a = cp(r, o),
      { props: s, internalRef: l } = o3(E({}, i, { externalSlotProps: a })),
      u = St(
        l,
        a == null ? void 0 : a.ref,
        (t = e.additionalProps) == null ? void 0 : t.ref,
      );
    return n3(n, E({}, s, { ref: u }), o);
  }
  const a3 = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
  ].join(",");
  function s3(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t)
      ? e.contentEditable === "true" ||
        ((e.nodeName === "AUDIO" ||
          e.nodeName === "VIDEO" ||
          e.nodeName === "DETAILS") &&
          e.getAttribute("tabindex") === null)
        ? 0
        : e.tabIndex
      : t;
  }
  function l3(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e;
  }
  function u3(e) {
    return !(
      e.disabled ||
      (e.tagName === "INPUT" && e.type === "hidden") ||
      l3(e)
    );
  }
  function c3(e) {
    const t = [],
      n = [];
    return (
      Array.from(e.querySelectorAll(a3)).forEach((r, o) => {
        const i = s3(r);
        i === -1 ||
          !u3(r) ||
          (i === 0
            ? t.push(r)
            : n.push({ documentOrder: o, tabIndex: i, node: r }));
      }),
      n
        .sort((r, o) =>
          r.tabIndex === o.tabIndex
            ? r.documentOrder - o.documentOrder
            : r.tabIndex - o.tabIndex,
        )
        .map((r) => r.node)
        .concat(t)
    );
  }
  function d3() {
    return !0;
  }
  function f3(e) {
    const {
        children: t,
        disableAutoFocus: n = !1,
        disableEnforceFocus: r = !1,
        disableRestoreFocus: o = !1,
        getTabbable: i = c3,
        isEnabled: a = d3,
        open: s,
      } = e,
      l = k.useRef(!1),
      u = k.useRef(null),
      d = k.useRef(null),
      f = k.useRef(null),
      h = k.useRef(null),
      b = k.useRef(!1),
      g = k.useRef(null),
      x = St(t.ref, g),
      R = k.useRef(null);
    k.useEffect(() => {
      !s || !g.current || (b.current = !n);
    }, [n, s]),
      k.useEffect(() => {
        if (!s || !g.current) return;
        const v = It(g.current);
        return (
          g.current.contains(v.activeElement) ||
            (g.current.hasAttribute("tabIndex") ||
              g.current.setAttribute("tabIndex", "-1"),
            b.current && g.current.focus()),
          () => {
            o ||
              (f.current &&
                f.current.focus &&
                ((l.current = !0), f.current.focus()),
              (f.current = null));
          }
        );
      }, [s]),
      k.useEffect(() => {
        if (!s || !g.current) return;
        const v = It(g.current),
          S = (T) => {
            const { current: _ } = g;
            if (_ !== null) {
              if (!v.hasFocus() || r || !a() || l.current) {
                l.current = !1;
                return;
              }
              if (!_.contains(v.activeElement)) {
                if (
                  (T && h.current !== T.target) ||
                  v.activeElement !== h.current
                )
                  h.current = null;
                else if (h.current !== null) return;
                if (!b.current) return;
                let H = [];
                if (
                  ((v.activeElement === u.current ||
                    v.activeElement === d.current) &&
                    (H = i(g.current)),
                  H.length > 0)
                ) {
                  var I, j;
                  const V = !!(
                      (I = R.current) != null &&
                      I.shiftKey &&
                      ((j = R.current) == null ? void 0 : j.key) === "Tab"
                    ),
                    Z = H[0],
                    D = H[H.length - 1];
                  typeof Z != "string" &&
                    typeof D != "string" &&
                    (V ? D.focus() : Z.focus());
                } else _.focus();
              }
            }
          },
          C = (T) => {
            (R.current = T),
              !(r || !a() || T.key !== "Tab") &&
                v.activeElement === g.current &&
                T.shiftKey &&
                ((l.current = !0), d.current && d.current.focus());
          };
        v.addEventListener("focusin", S), v.addEventListener("keydown", C, !0);
        const N = setInterval(() => {
          v.activeElement && v.activeElement.tagName === "BODY" && S(null);
        }, 50);
        return () => {
          clearInterval(N),
            v.removeEventListener("focusin", S),
            v.removeEventListener("keydown", C, !0);
        };
      }, [n, r, o, a, s, i]);
    const y = (v) => {
        f.current === null && (f.current = v.relatedTarget),
          (b.current = !0),
          (h.current = v.target);
        const S = t.props.onFocus;
        S && S(v);
      },
      m = (v) => {
        f.current === null && (f.current = v.relatedTarget), (b.current = !0);
      };
    return de(k.Fragment, {
      children: [
        A("div", {
          tabIndex: s ? 0 : -1,
          onFocus: m,
          ref: u,
          "data-testid": "sentinelStart",
        }),
        k.cloneElement(t, { ref: x, onFocus: y }),
        A("div", {
          tabIndex: s ? 0 : -1,
          onFocus: m,
          ref: d,
          "data-testid": "sentinelEnd",
        }),
      ],
    });
  }
  function p3(e) {
    return typeof e == "function" ? e() : e;
  }
  const h3 = k.forwardRef(function (e, t) {
      const { children: n, container: r, disablePortal: o = !1 } = e,
        [i, a] = k.useState(null),
        s = St(k.isValidElement(n) ? n.ref : null, t);
      if (
        (wr(() => {
          o || a(p3(r) || document.body);
        }, [r, o]),
        wr(() => {
          if (i && !o)
            return (
              Tl(t, i),
              () => {
                Tl(t, null);
              }
            );
        }, [t, i, o]),
        o)
      ) {
        if (k.isValidElement(n)) {
          const l = { ref: s };
          return k.cloneElement(n, l);
        }
        return A(k.Fragment, { children: n });
      }
      return A(k.Fragment, { children: i && fo.createPortal(n, i) });
    }),
    m3 = h3;
  function g3(e) {
    const t = It(e);
    return t.body === e
      ? br(e).innerWidth > t.documentElement.clientWidth
      : e.scrollHeight > e.clientHeight;
  }
  function Ta(e, t) {
    t
      ? e.setAttribute("aria-hidden", "true")
      : e.removeAttribute("aria-hidden");
  }
  function Ey(e) {
    return parseInt(br(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function v3(e) {
    const t =
        [
          "TEMPLATE",
          "SCRIPT",
          "STYLE",
          "LINK",
          "MAP",
          "META",
          "NOSCRIPT",
          "PICTURE",
          "COL",
          "COLGROUP",
          "PARAM",
          "SLOT",
          "SOURCE",
          "TRACK",
        ].indexOf(e.tagName) !== -1,
      n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return t || n;
  }
  function Cy(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, (a) => {
      const s = i.indexOf(a) === -1,
        l = !v3(a);
      s && l && Ta(a, o);
    });
  }
  function dp(e, t) {
    let n = -1;
    return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
  }
  function y3(e, t) {
    const n = [],
      r = e.container;
    if (!t.disableScrollLock) {
      if (g3(r)) {
        const i = Ov(It(r));
        n.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r,
        }),
          (r.style.paddingRight = `${Ey(r) + i}px`);
        const a = It(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          n.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s,
          }),
            (s.style.paddingRight = `${Ey(s) + i}px`);
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = It(r).body;
      else {
        const i = r.parentElement,
          a = br(r);
        o =
          (i == null ? void 0 : i.nodeName) === "HTML" &&
          a.getComputedStyle(i).overflowY === "scroll"
            ? i
            : r;
      }
      n.push(
        { value: o.style.overflow, property: "overflow", el: o },
        { value: o.style.overflowX, property: "overflow-x", el: o },
        { value: o.style.overflowY, property: "overflow-y", el: o },
      ),
        (o.style.overflow = "hidden");
    }
    return () => {
      n.forEach(({ value: o, el: i, property: a }) => {
        o ? i.style.setProperty(a, o) : i.style.removeProperty(a);
      });
    };
  }
  function b3(e) {
    const t = [];
    return (
      [].forEach.call(e.children, (n) => {
        n.getAttribute("aria-hidden") === "true" && t.push(n);
      }),
      t
    );
  }
  class w3 {
    constructor() {
      (this.containers = void 0),
        (this.modals = void 0),
        (this.modals = []),
        (this.containers = []);
    }
    add(t, n) {
      let r = this.modals.indexOf(t);
      if (r !== -1) return r;
      (r = this.modals.length),
        this.modals.push(t),
        t.modalRef && Ta(t.modalRef, !1);
      const o = b3(n);
      Cy(n, t.mount, t.modalRef, o, !0);
      const i = dp(this.containers, (a) => a.container === n);
      return i !== -1
        ? (this.containers[i].modals.push(t), r)
        : (this.containers.push({
            modals: [t],
            container: n,
            restore: null,
            hiddenSiblings: o,
          }),
          r);
    }
    mount(t, n) {
      const r = dp(this.containers, (i) => i.modals.indexOf(t) !== -1),
        o = this.containers[r];
      o.restore || (o.restore = y3(o, n));
    }
    remove(t, n = !0) {
      const r = this.modals.indexOf(t);
      if (r === -1) return r;
      const o = dp(this.containers, (a) => a.modals.indexOf(t) !== -1),
        i = this.containers[o];
      if (
        (i.modals.splice(i.modals.indexOf(t), 1),
        this.modals.splice(r, 1),
        i.modals.length === 0)
      )
        i.restore && i.restore(),
          t.modalRef && Ta(t.modalRef, n),
          Cy(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
          this.containers.splice(o, 1);
      else {
        const a = i.modals[i.modals.length - 1];
        a.modalRef && Ta(a.modalRef, !1);
      }
      return r;
    }
    isTopModal(t) {
      return (
        this.modals.length > 0 && this.modals[this.modals.length - 1] === t
      );
    }
  }
  function S3(e) {
    return be("MuiModal", e);
  }
  we("MuiModal", ["root", "hidden"]);
  const x3 = [
      "children",
      "classes",
      "closeAfterTransition",
      "component",
      "container",
      "disableAutoFocus",
      "disableEnforceFocus",
      "disableEscapeKeyDown",
      "disablePortal",
      "disableRestoreFocus",
      "disableScrollLock",
      "hideBackdrop",
      "keepMounted",
      "manager",
      "onBackdropClick",
      "onClose",
      "onKeyDown",
      "open",
      "onTransitionEnter",
      "onTransitionExited",
      "slotProps",
      "slots",
    ],
    k3 = (e) => {
      const { open: t, exited: n, classes: r } = e;
      return Se(
        { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
        S3,
        r,
      );
    };
  function E3(e) {
    return typeof e == "function" ? e() : e;
  }
  function C3(e) {
    return e ? e.props.hasOwnProperty("in") : !1;
  }
  const O3 = new w3(),
    N3 = k.forwardRef(function (e, t) {
      var n, r;
      const {
          children: o,
          classes: i,
          closeAfterTransition: a = !1,
          component: s,
          container: l,
          disableAutoFocus: u = !1,
          disableEnforceFocus: d = !1,
          disableEscapeKeyDown: f = !1,
          disablePortal: h = !1,
          disableRestoreFocus: b = !1,
          disableScrollLock: g = !1,
          hideBackdrop: x = !1,
          keepMounted: R = !1,
          manager: y = O3,
          onBackdropClick: m,
          onClose: v,
          onKeyDown: S,
          open: C,
          onTransitionEnter: N,
          onTransitionExited: T,
          slotProps: _ = {},
          slots: I = {},
        } = e,
        j = re(e, x3),
        [H, V] = k.useState(!C),
        Z = k.useRef({}),
        D = k.useRef(null),
        Y = k.useRef(null),
        Q = St(Y, t),
        K = C3(o),
        z = (n = e["aria-hidden"]) != null ? n : !0,
        F = () => It(D.current),
        $ = () => (
          (Z.current.modalRef = Y.current),
          (Z.current.mountNode = D.current),
          Z.current
        ),
        O = () => {
          y.mount($(), { disableScrollLock: g }),
            Y.current && (Y.current.scrollTop = 0);
        },
        L = Gr(() => {
          const w = E3(l) || F().body;
          y.add($(), w), Y.current && O();
        }),
        B = k.useCallback(() => y.isTopModal($()), [y]),
        W = Gr((w) => {
          (D.current = w),
            !(!w || !Y.current) && (C && B() ? O() : Ta(Y.current, z));
        }),
        X = k.useCallback(() => {
          y.remove($(), z);
        }, [y, z]);
      k.useEffect(
        () => () => {
          X();
        },
        [X],
      ),
        k.useEffect(() => {
          C ? L() : (!K || !a) && X();
        }, [C, X, K, a, L]);
      const J = E({}, e, {
          classes: i,
          closeAfterTransition: a,
          disableAutoFocus: u,
          disableEnforceFocus: d,
          disableEscapeKeyDown: f,
          disablePortal: h,
          disableRestoreFocus: b,
          disableScrollLock: g,
          exited: H,
          hideBackdrop: x,
          keepMounted: R,
        }),
        ae = k3(J),
        oe = () => {
          V(!1), N && N();
        },
        ce = () => {
          V(!0), T && T(), a && X();
        },
        ne = (w) => {
          w.target === w.currentTarget &&
            (m && m(w), v && v(w, "backdropClick"));
        },
        ve = (w) => {
          S && S(w),
            !(w.key !== "Escape" || !B()) &&
              (f || (w.stopPropagation(), v && v(w, "escapeKeyDown")));
        },
        ke = {};
      o.props.tabIndex === void 0 && (ke.tabIndex = "-1"),
        K &&
          ((ke.onEnter = If(oe, o.props.onEnter)),
          (ke.onExited = If(ce, o.props.onExited)));
      const Ke = (r = s ?? I.root) != null ? r : "div",
        Ne = ky({
          elementType: Ke,
          externalSlotProps: _.root,
          externalForwardedProps: j,
          additionalProps: { ref: Q, role: "presentation", onKeyDown: ve },
          className: ae.root,
          ownerState: J,
        }),
        c = I.backdrop,
        p = ky({
          elementType: c,
          externalSlotProps: _.backdrop,
          additionalProps: { "aria-hidden": !0, onClick: ne, open: C },
          className: ae.backdrop,
          ownerState: J,
        });
      return !R && !C && (!K || H)
        ? null
        : A(m3, {
            ref: W,
            container: l,
            disablePortal: h,
            children: de(
              Ke,
              E({}, Ne, {
                children: [
                  !x && c ? A(c, E({}, p)) : null,
                  A(f3, {
                    disableEnforceFocus: d,
                    disableAutoFocus: u,
                    disableRestoreFocus: b,
                    isEnabled: B,
                    open: C,
                    children: k.cloneElement(o, ke),
                  }),
                ],
              }),
            ),
          });
    }),
    T3 = N3,
    A3 = ["onChange", "maxRows", "minRows", "style", "value"];
  function du(e, t) {
    return parseInt(e[t], 10) || 0;
  }
  const R3 = {
    shadow: {
      visibility: "hidden",
      position: "absolute",
      overflow: "hidden",
      height: 0,
      top: 0,
      left: 0,
      transform: "translateZ(0)",
    },
  };
  function Oy(e) {
    return e == null || Object.keys(e).length === 0;
  }
  const P3 = k.forwardRef(function (e, t) {
      const { onChange: n, maxRows: r, minRows: o = 1, style: i, value: a } = e,
        s = re(e, A3),
        { current: l } = k.useRef(a != null),
        u = k.useRef(null),
        d = St(t, u),
        f = k.useRef(null),
        h = k.useRef(0),
        [b, g] = k.useState({}),
        x = k.useCallback(() => {
          const S = u.current,
            C = br(S).getComputedStyle(S);
          if (C.width === "0px") return {};
          const N = f.current;
          (N.style.width = C.width),
            (N.value = S.value || e.placeholder || "x"),
            N.value.slice(-1) ===
              `
` && (N.value += " ");
          const T = C["box-sizing"],
            _ = du(C, "padding-bottom") + du(C, "padding-top"),
            I = du(C, "border-bottom-width") + du(C, "border-top-width"),
            j = N.scrollHeight;
          N.value = "x";
          const H = N.scrollHeight;
          let V = j;
          o && (V = Math.max(Number(o) * H, V)),
            r && (V = Math.min(Number(r) * H, V)),
            (V = Math.max(V, H));
          const Z = V + (T === "border-box" ? _ + I : 0),
            D = Math.abs(V - j) <= 1;
          return { outerHeightStyle: Z, overflow: D };
        }, [r, o, e.placeholder]),
        R = (S, C) => {
          const { outerHeightStyle: N, overflow: T } = C;
          return h.current < 20 &&
            ((N > 0 && Math.abs((S.outerHeightStyle || 0) - N) > 1) ||
              S.overflow !== T)
            ? ((h.current += 1), { overflow: T, outerHeightStyle: N })
            : S;
        },
        y = k.useCallback(() => {
          const S = x();
          Oy(S) || g((C) => R(C, S));
        }, [x]),
        m = () => {
          const S = x();
          Oy(S) ||
            fo.flushSync(() => {
              g((C) => R(C, S));
            });
        };
      k.useEffect(() => {
        const S = $f(() => {
            (h.current = 0), u.current && m();
          }),
          C = br(u.current);
        C.addEventListener("resize", S);
        let N;
        return (
          typeof ResizeObserver < "u" &&
            ((N = new ResizeObserver(S)), N.observe(u.current)),
          () => {
            S.clear(), C.removeEventListener("resize", S), N && N.disconnect();
          }
        );
      }),
        wr(() => {
          y();
        }),
        k.useEffect(() => {
          h.current = 0;
        }, [a]);
      const v = (S) => {
        (h.current = 0), l || y(), n && n(S);
      };
      return de(k.Fragment, {
        children: [
          A(
            "textarea",
            E(
              {
                value: a,
                onChange: v,
                ref: d,
                rows: o,
                style: E(
                  {
                    height: b.outerHeightStyle,
                    overflow: b.overflow ? "hidden" : null,
                  },
                  i,
                ),
              },
              s,
            ),
          ),
          A("textarea", {
            "aria-hidden": !0,
            className: e.className,
            readOnly: !0,
            ref: f,
            tabIndex: -1,
            style: E({}, R3.shadow, i, { padding: 0 }),
          }),
        ],
      });
    }),
    _3 = P3;
  function I3(e) {
    return be("MuiSvgIcon", e);
  }
  we("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
  ]);
  const $3 = [
      "children",
      "className",
      "color",
      "component",
      "fontSize",
      "htmlColor",
      "inheritViewBox",
      "titleAccess",
      "viewBox",
    ],
    M3 = (e) => {
      const { color: t, fontSize: n, classes: r } = e,
        o = {
          root: [
            "root",
            t !== "inherit" && `color${le(t)}`,
            `fontSize${le(n)}`,
          ],
        };
      return Se(o, I3, r);
    },
    L3 = ie("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "inherit" && t[`color${le(n.color)}`],
          t[`fontSize${le(n.fontSize)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var n, r, o, i, a, s, l, u, d, f, h, b, g, x, R, y, m;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
        transition:
          (n = e.transitions) == null || (r = n.create) == null
            ? void 0
            : r.call(n, "fill", {
                duration:
                  (o = e.transitions) == null || (i = o.duration) == null
                    ? void 0
                    : i.shorter,
              }),
        fontSize: {
          inherit: "inherit",
          small:
            ((a = e.typography) == null || (s = a.pxToRem) == null
              ? void 0
              : s.call(a, 20)) || "1.25rem",
          medium:
            ((l = e.typography) == null || (u = l.pxToRem) == null
              ? void 0
              : u.call(l, 24)) || "1.5rem",
          large:
            ((d = e.typography) == null || (f = d.pxToRem) == null
              ? void 0
              : f.call(d, 35)) || "2.1875rem",
        }[t.fontSize],
        color:
          (h =
            (b = (e.vars || e).palette) == null || (g = b[t.color]) == null
              ? void 0
              : g.main) != null
            ? h
            : {
                action:
                  (x = (e.vars || e).palette) == null || (R = x.action) == null
                    ? void 0
                    : R.active,
                disabled:
                  (y = (e.vars || e).palette) == null || (m = y.action) == null
                    ? void 0
                    : m.disabled,
                inherit: void 0,
              }[t.color],
      };
    }),
    Ny = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiSvgIcon" }),
        {
          children: r,
          className: o,
          color: i = "inherit",
          component: a = "svg",
          fontSize: s = "medium",
          htmlColor: l,
          inheritViewBox: u = !1,
          titleAccess: d,
          viewBox: f = "0 0 24 24",
        } = n,
        h = re(n, $3),
        b = E({}, n, {
          color: i,
          component: a,
          fontSize: s,
          instanceFontSize: e.fontSize,
          inheritViewBox: u,
          viewBox: f,
        }),
        g = {};
      u || (g.viewBox = f);
      const x = M3(b);
      return de(
        L3,
        E(
          {
            as: a,
            className: ue(x.root, o),
            focusable: "false",
            color: l,
            "aria-hidden": d ? void 0 : !0,
            role: d ? "img" : void 0,
            ref: t,
          },
          g,
          h,
          {
            ownerState: b,
            children: [r, d ? A("title", { children: d }) : null],
          },
        ),
      );
    });
  Ny.muiName = "SvgIcon";
  const Ty = Ny;
  function _n(e, t) {
    function n(r, o) {
      return A(
        Ty,
        E({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
      );
    }
    return (n.muiName = Ty.muiName), k.memo(k.forwardRef(n));
  }
  const F3 = {
      configure: (e) => {
        Bf.configure(e);
      },
    },
    B3 = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          capitalize: le,
          createChainedFunction: If,
          createSvgIcon: _n,
          debounce: $f,
          deprecatedPropType: Ik,
          isMuiElement: ga,
          ownerDocument: It,
          ownerWindow: br,
          requirePropFactory: $k,
          setRef: Tl,
          unstable_ClassNameGenerator: F3,
          unstable_useEnhancedEffect: wr,
          unstable_useId: kv,
          unsupportedProp: Fk,
          useControlled: Al,
          useEventCallback: Gr,
          useForkRef: St,
          useIsFocusVisible: Cv,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  function fp(e, t) {
    return (
      (fp = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      fp(e, t)
    );
  }
  function Ay(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      fp(e, t);
  }
  const Ry = { disabled: !1 },
    fu = fe.createContext(null);
  var j3 = function (e) {
      return e.scrollTop;
    },
    Aa = "unmounted",
    Yr = "exited",
    Xr = "entering",
    Xo = "entered",
    pp = "exiting",
    Kn = (function (e) {
      Ay(t, e);
      function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var a = o,
          s = a && !a.isMounting ? r.enter : r.appear,
          l;
        return (
          (i.appearStatus = null),
          r.in
            ? s
              ? ((l = Yr), (i.appearStatus = Xr))
              : (l = Xo)
            : r.unmountOnExit || r.mountOnEnter
            ? (l = Aa)
            : (l = Yr),
          (i.state = { status: l }),
          (i.nextCallback = null),
          i
        );
      }
      t.getDerivedStateFromProps = function (r, o) {
        var i = r.in;
        return i && o.status === Aa ? { status: Yr } : null;
      };
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (n.componentDidUpdate = function (r) {
          var o = null;
          if (r !== this.props) {
            var i = this.state.status;
            this.props.in
              ? i !== Xr && i !== Xo && (o = Xr)
              : (i === Xr || i === Xo) && (o = pp);
          }
          this.updateStatus(!1, o);
        }),
        (n.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (n.getTimeouts = function () {
          var r = this.props.timeout,
            o,
            i,
            a;
          return (
            (o = i = a = r),
            r != null &&
              typeof r != "number" &&
              ((o = r.exit),
              (i = r.enter),
              (a = r.appear !== void 0 ? r.appear : i)),
            { exit: o, enter: i, appear: a }
          );
        }),
        (n.updateStatus = function (r, o) {
          if ((r === void 0 && (r = !1), o !== null))
            if ((this.cancelNextCallback(), o === Xr)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var i = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : fl.findDOMNode(this);
                i && j3(i);
              }
              this.performEnter(r);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === Yr &&
              this.setState({ status: Aa });
        }),
        (n.performEnter = function (r) {
          var o = this,
            i = this.props.enter,
            a = this.context ? this.context.isMounting : r,
            s = this.props.nodeRef ? [a] : [fl.findDOMNode(this), a],
            l = s[0],
            u = s[1],
            d = this.getTimeouts(),
            f = a ? d.appear : d.enter;
          if ((!r && !i) || Ry.disabled) {
            this.safeSetState({ status: Xo }, function () {
              o.props.onEntered(l);
            });
            return;
          }
          this.props.onEnter(l, u),
            this.safeSetState({ status: Xr }, function () {
              o.props.onEntering(l, u),
                o.onTransitionEnd(f, function () {
                  o.safeSetState({ status: Xo }, function () {
                    o.props.onEntered(l, u);
                  });
                });
            });
        }),
        (n.performExit = function () {
          var r = this,
            o = this.props.exit,
            i = this.getTimeouts(),
            a = this.props.nodeRef ? void 0 : fl.findDOMNode(this);
          if (!o || Ry.disabled) {
            this.safeSetState({ status: Yr }, function () {
              r.props.onExited(a);
            });
            return;
          }
          this.props.onExit(a),
            this.safeSetState({ status: pp }, function () {
              r.props.onExiting(a),
                r.onTransitionEnd(i.exit, function () {
                  r.safeSetState({ status: Yr }, function () {
                    r.props.onExited(a);
                  });
                });
            });
        }),
        (n.cancelNextCallback = function () {
          this.nextCallback !== null &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (n.safeSetState = function (r, o) {
          (o = this.setNextCallback(o)), this.setState(r, o);
        }),
        (n.setNextCallback = function (r) {
          var o = this,
            i = !0;
          return (
            (this.nextCallback = function (a) {
              i && ((i = !1), (o.nextCallback = null), r(a));
            }),
            (this.nextCallback.cancel = function () {
              i = !1;
            }),
            this.nextCallback
          );
        }),
        (n.onTransitionEnd = function (r, o) {
          this.setNextCallback(o);
          var i = this.props.nodeRef
              ? this.props.nodeRef.current
              : fl.findDOMNode(this),
            a = r == null && !this.props.addEndListener;
          if (!i || a) {
            setTimeout(this.nextCallback, 0);
            return;
          }
          if (this.props.addEndListener) {
            var s = this.props.nodeRef
                ? [this.nextCallback]
                : [i, this.nextCallback],
              l = s[0],
              u = s[1];
            this.props.addEndListener(l, u);
          }
          r != null && setTimeout(this.nextCallback, r);
        }),
        (n.render = function () {
          var r = this.state.status;
          if (r === Aa) return null;
          var o = this.props,
            i = o.children;
          o.in,
            o.mountOnEnter,
            o.unmountOnExit,
            o.appear,
            o.enter,
            o.exit,
            o.timeout,
            o.addEndListener,
            o.onEnter,
            o.onEntering,
            o.onEntered,
            o.onExit,
            o.onExiting,
            o.onExited,
            o.nodeRef;
          var a = re(o, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef",
          ]);
          return fe.createElement(
            fu.Provider,
            { value: null },
            typeof i == "function"
              ? i(r, a)
              : fe.cloneElement(fe.Children.only(i), a),
          );
        }),
        t
      );
    })(fe.Component);
  (Kn.contextType = fu), (Kn.propTypes = {});
  function Zo() {}
  (Kn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Zo,
    onEntering: Zo,
    onEntered: Zo,
    onExit: Zo,
    onExiting: Zo,
    onExited: Zo,
  }),
    (Kn.UNMOUNTED = Aa),
    (Kn.EXITED = Yr),
    (Kn.ENTERING = Xr),
    (Kn.ENTERED = Xo),
    (Kn.EXITING = pp);
  const Py = Kn;
  function z3(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function hp(e, t) {
    var n = function (o) {
        return t && k.isValidElement(o) ? t(o) : o;
      },
      r = Object.create(null);
    return (
      e &&
        k.Children.map(e, function (o) {
          return o;
        }).forEach(function (o) {
          r[o.key] = n(o);
        }),
      r
    );
  }
  function U3(e, t) {
    (e = e || {}), (t = t || {});
    function n(d) {
      return d in t ? t[d] : e[d];
    }
    var r = Object.create(null),
      o = [];
    for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
    var a,
      s = {};
    for (var l in t) {
      if (r[l])
        for (a = 0; a < r[l].length; a++) {
          var u = r[l][a];
          s[r[l][a]] = n(u);
        }
      s[l] = n(l);
    }
    for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
    return s;
  }
  function Zr(e, t, n) {
    return n[t] != null ? n[t] : e.props[t];
  }
  function D3(e, t) {
    return hp(e.children, function (n) {
      return k.cloneElement(n, {
        onExited: t.bind(null, n),
        in: !0,
        appear: Zr(n, "appear", e),
        enter: Zr(n, "enter", e),
        exit: Zr(n, "exit", e),
      });
    });
  }
  function W3(e, t, n) {
    var r = hp(e.children),
      o = U3(t, r);
    return (
      Object.keys(o).forEach(function (i) {
        var a = o[i];
        if (k.isValidElement(a)) {
          var s = i in t,
            l = i in r,
            u = t[i],
            d = k.isValidElement(u) && !u.props.in;
          l && (!s || d)
            ? (o[i] = k.cloneElement(a, {
                onExited: n.bind(null, a),
                in: !0,
                exit: Zr(a, "exit", e),
                enter: Zr(a, "enter", e),
              }))
            : !l && s && !d
            ? (o[i] = k.cloneElement(a, { in: !1 }))
            : l &&
              s &&
              k.isValidElement(u) &&
              (o[i] = k.cloneElement(a, {
                onExited: n.bind(null, a),
                in: u.props.in,
                exit: Zr(a, "exit", e),
                enter: Zr(a, "enter", e),
              }));
        }
      }),
      o
    );
  }
  var V3 =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    H3 = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    },
    mp = (function (e) {
      Ay(t, e);
      function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var a = i.handleExited.bind(z3(i));
        return (
          (i.state = {
            contextValue: { isMounting: !0 },
            handleExited: a,
            firstRender: !0,
          }),
          i
        );
      }
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          (this.mounted = !0),
            this.setState({ contextValue: { isMounting: !1 } });
        }),
        (n.componentWillUnmount = function () {
          this.mounted = !1;
        }),
        (t.getDerivedStateFromProps = function (r, o) {
          var i = o.children,
            a = o.handleExited,
            s = o.firstRender;
          return { children: s ? D3(r, a) : W3(r, i, a), firstRender: !1 };
        }),
        (n.handleExited = function (r, o) {
          var i = hp(this.props.children);
          r.key in i ||
            (r.props.onExited && r.props.onExited(o),
            this.mounted &&
              this.setState(function (a) {
                var s = E({}, a.children);
                return delete s[r.key], { children: s };
              }));
        }),
        (n.render = function () {
          var r = this.props,
            o = r.component,
            i = r.childFactory,
            a = re(r, ["component", "childFactory"]),
            s = this.state.contextValue,
            l = V3(this.state.children).map(i);
          return (
            delete a.appear,
            delete a.enter,
            delete a.exit,
            o === null
              ? fe.createElement(fu.Provider, { value: s }, l)
              : fe.createElement(
                  fu.Provider,
                  { value: s },
                  fe.createElement(o, a, l),
                )
          );
        }),
        t
      );
    })(fe.Component);
  (mp.propTypes = {}), (mp.defaultProps = H3);
  const q3 = mp,
    _y = (e) => e.scrollTop;
  function pu(e, t) {
    var n, r;
    const { timeout: o, easing: i, style: a = {} } = e;
    return {
      duration:
        (n = a.transitionDuration) != null
          ? n
          : typeof o == "number"
          ? o
          : o[t.mode] || 0,
      easing:
        (r = a.transitionTimingFunction) != null
          ? r
          : typeof i == "object"
          ? i[t.mode]
          : i,
      delay: a.transitionDelay,
    };
  }
  function G3(e) {
    return be("MuiPaper", e);
  }
  we("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24",
  ]);
  const K3 = ["className", "component", "elevation", "square", "variant"],
    Y3 = (e) => {
      const { square: t, elevation: n, variant: r, classes: o } = e,
        i = {
          root: [
            "root",
            r,
            !t && "rounded",
            r === "elevation" && `elevation${n}`,
          ],
        };
      return Se(i, G3, o);
    },
    X3 = ie("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          !n.square && t.rounded,
          n.variant === "elevation" && t[`elevation${n.elevation}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var n;
      return E(
        {
          backgroundColor: (e.vars || e).palette.background.paper,
          color: (e.vars || e).palette.text.primary,
          transition: e.transitions.create("box-shadow"),
        },
        !t.square && { borderRadius: e.shape.borderRadius },
        t.variant === "outlined" && {
          border: `1px solid ${(e.vars || e).palette.divider}`,
        },
        t.variant === "elevation" &&
          E(
            { boxShadow: (e.vars || e).shadows[t.elevation] },
            !e.vars &&
              e.palette.mode === "dark" && {
                backgroundImage: `linear-gradient(${Gt(
                  "#fff",
                  Sy(t.elevation),
                )}, ${Gt("#fff", Sy(t.elevation))})`,
              },
            e.vars && {
              backgroundImage:
                (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
            },
          ),
      );
    }),
    Z3 = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiPaper" }),
        {
          className: r,
          component: o = "div",
          elevation: i = 1,
          square: a = !1,
          variant: s = "elevation",
        } = n,
        l = re(n, K3),
        u = E({}, n, { component: o, elevation: i, square: a, variant: s }),
        d = Y3(u);
      return A(
        X3,
        E({ as: o, ownerState: u, className: ue(d.root, r), ref: t }, l),
      );
    }),
    Qo = Z3;
  function Q3(e) {
    const {
        className: t,
        classes: n,
        pulsate: r = !1,
        rippleX: o,
        rippleY: i,
        rippleSize: a,
        in: s,
        onExited: l,
        timeout: u,
      } = e,
      [d, f] = k.useState(!1),
      h = ue(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
      b = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
      g = ue(n.child, d && n.childLeaving, r && n.childPulsate);
    return (
      !s && !d && f(!0),
      k.useEffect(() => {
        if (!s && l != null) {
          const x = setTimeout(l, u);
          return () => {
            clearTimeout(x);
          };
        }
      }, [l, s, u]),
      A("span", {
        className: h,
        style: b,
        children: A("span", { className: g }),
      })
    );
  }
  const J3 = we("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    rn = J3,
    eO = ["center", "classes", "className"];
  let hu = (e) => e,
    Iy,
    $y,
    My,
    Ly;
  const gp = 550,
    tO = 80,
    nO = Qf(
      Iy ||
        (Iy = hu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`),
    ),
    rO = Qf(
      $y ||
        ($y = hu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
    ),
    oO = Qf(
      My ||
        (My = hu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`),
    ),
    iO = ie("span", { name: "MuiTouchRipple", slot: "Root" })({
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
    }),
    aO = ie(Q3, { name: "MuiTouchRipple", slot: "Ripple" })(
      Ly ||
        (Ly = hu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
      rn.rippleVisible,
      nO,
      gp,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      rn.ripplePulsate,
      ({ theme: e }) => e.transitions.duration.shorter,
      rn.child,
      rn.childLeaving,
      rO,
      gp,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      rn.childPulsate,
      oO,
      ({ theme: e }) => e.transitions.easing.easeInOut,
    ),
    sO = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiTouchRipple" }),
        { center: r = !1, classes: o = {}, className: i } = n,
        a = re(n, eO),
        [s, l] = k.useState([]),
        u = k.useRef(0),
        d = k.useRef(null);
      k.useEffect(() => {
        d.current && (d.current(), (d.current = null));
      }, [s]);
      const f = k.useRef(!1),
        h = k.useRef(null),
        b = k.useRef(null),
        g = k.useRef(null);
      k.useEffect(
        () => () => {
          clearTimeout(h.current);
        },
        [],
      );
      const x = k.useCallback(
          (v) => {
            const {
              pulsate: S,
              rippleX: C,
              rippleY: N,
              rippleSize: T,
              cb: _,
            } = v;
            l((I) => [
              ...I,
              A(
                aO,
                {
                  classes: {
                    ripple: ue(o.ripple, rn.ripple),
                    rippleVisible: ue(o.rippleVisible, rn.rippleVisible),
                    ripplePulsate: ue(o.ripplePulsate, rn.ripplePulsate),
                    child: ue(o.child, rn.child),
                    childLeaving: ue(o.childLeaving, rn.childLeaving),
                    childPulsate: ue(o.childPulsate, rn.childPulsate),
                  },
                  timeout: gp,
                  pulsate: S,
                  rippleX: C,
                  rippleY: N,
                  rippleSize: T,
                },
                u.current,
              ),
            ]),
              (u.current += 1),
              (d.current = _);
          },
          [o],
        ),
        R = k.useCallback(
          (v = {}, S = {}, C = () => {}) => {
            const {
              pulsate: N = !1,
              center: T = r || S.pulsate,
              fakeElement: _ = !1,
            } = S;
            if ((v == null ? void 0 : v.type) === "mousedown" && f.current) {
              f.current = !1;
              return;
            }
            (v == null ? void 0 : v.type) === "touchstart" && (f.current = !0);
            const I = _ ? null : g.current,
              j = I
                ? I.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let H, V, Z;
            if (
              T ||
              v === void 0 ||
              (v.clientX === 0 && v.clientY === 0) ||
              (!v.clientX && !v.touches)
            )
              (H = Math.round(j.width / 2)), (V = Math.round(j.height / 2));
            else {
              const { clientX: D, clientY: Y } =
                v.touches && v.touches.length > 0 ? v.touches[0] : v;
              (H = Math.round(D - j.left)), (V = Math.round(Y - j.top));
            }
            if (T)
              (Z = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3)),
                Z % 2 === 0 && (Z += 1);
            else {
              const D =
                  Math.max(Math.abs((I ? I.clientWidth : 0) - H), H) * 2 + 2,
                Y = Math.max(Math.abs((I ? I.clientHeight : 0) - V), V) * 2 + 2;
              Z = Math.sqrt(D ** 2 + Y ** 2);
            }
            v != null && v.touches
              ? b.current === null &&
                ((b.current = () => {
                  x({
                    pulsate: N,
                    rippleX: H,
                    rippleY: V,
                    rippleSize: Z,
                    cb: C,
                  });
                }),
                (h.current = setTimeout(() => {
                  b.current && (b.current(), (b.current = null));
                }, tO)))
              : x({ pulsate: N, rippleX: H, rippleY: V, rippleSize: Z, cb: C });
          },
          [r, x],
        ),
        y = k.useCallback(() => {
          R({}, { pulsate: !0 });
        }, [R]),
        m = k.useCallback((v, S) => {
          if (
            (clearTimeout(h.current),
            (v == null ? void 0 : v.type) === "touchend" && b.current)
          ) {
            b.current(),
              (b.current = null),
              (h.current = setTimeout(() => {
                m(v, S);
              }));
            return;
          }
          (b.current = null),
            l((C) => (C.length > 0 ? C.slice(1) : C)),
            (d.current = S);
        }, []);
      return (
        k.useImperativeHandle(t, () => ({ pulsate: y, start: R, stop: m }), [
          y,
          R,
          m,
        ]),
        A(
          iO,
          E({ className: ue(rn.root, o.root, i), ref: g }, a, {
            children: A(q3, { component: null, exit: !0, children: s }),
          }),
        )
      );
    }),
    lO = sO;
  function uO(e) {
    return be("MuiButtonBase", e);
  }
  const cO = we("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    dO = cO,
    fO = [
      "action",
      "centerRipple",
      "children",
      "className",
      "component",
      "disabled",
      "disableRipple",
      "disableTouchRipple",
      "focusRipple",
      "focusVisibleClassName",
      "LinkComponent",
      "onBlur",
      "onClick",
      "onContextMenu",
      "onDragLeave",
      "onFocus",
      "onFocusVisible",
      "onKeyDown",
      "onKeyUp",
      "onMouseDown",
      "onMouseLeave",
      "onMouseUp",
      "onTouchEnd",
      "onTouchMove",
      "onTouchStart",
      "tabIndex",
      "TouchRippleProps",
      "touchRippleRef",
      "type",
    ],
    pO = (e) => {
      const {
          disabled: t,
          focusVisible: n,
          focusVisibleClassName: r,
          classes: o,
        } = e,
        i = Se({ root: ["root", t && "disabled", n && "focusVisible"] }, uO, o);
      return n && r && (i.root += ` ${r}`), i;
    },
    hO = ie("button", {
      name: "MuiButtonBase",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      outline: 0,
      border: 0,
      margin: 0,
      borderRadius: 0,
      padding: 0,
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      WebkitAppearance: "none",
      textDecoration: "none",
      color: "inherit",
      "&::-moz-focus-inner": { borderStyle: "none" },
      [`&.${dO.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    }),
    mO = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiButtonBase" }),
        {
          action: r,
          centerRipple: o = !1,
          children: i,
          className: a,
          component: s = "button",
          disabled: l = !1,
          disableRipple: u = !1,
          disableTouchRipple: d = !1,
          focusRipple: f = !1,
          LinkComponent: h = "a",
          onBlur: b,
          onClick: g,
          onContextMenu: x,
          onDragLeave: R,
          onFocus: y,
          onFocusVisible: m,
          onKeyDown: v,
          onKeyUp: S,
          onMouseDown: C,
          onMouseLeave: N,
          onMouseUp: T,
          onTouchEnd: _,
          onTouchMove: I,
          onTouchStart: j,
          tabIndex: H = 0,
          TouchRippleProps: V,
          touchRippleRef: Z,
          type: D,
        } = n,
        Y = re(n, fO),
        Q = k.useRef(null),
        K = k.useRef(null),
        z = St(K, Z),
        { isFocusVisibleRef: F, onFocus: $, onBlur: O, ref: L } = Cv(),
        [B, W] = k.useState(!1);
      l && B && W(!1),
        k.useImperativeHandle(
          r,
          () => ({
            focusVisible: () => {
              W(!0), Q.current.focus();
            },
          }),
          [],
        );
      const [X, J] = k.useState(!1);
      k.useEffect(() => {
        J(!0);
      }, []);
      const ae = X && !u && !l;
      k.useEffect(() => {
        B && f && !u && X && K.current.pulsate();
      }, [u, f, B, X]);
      function oe(q, Be, dt = d) {
        return Gr(
          (Ft) => (Be && Be(Ft), !dt && K.current && K.current[q](Ft), !0),
        );
      }
      const ce = oe("start", C),
        ne = oe("stop", x),
        ve = oe("stop", R),
        ke = oe("stop", T),
        Ke = oe("stop", (q) => {
          B && q.preventDefault(), N && N(q);
        }),
        Ne = oe("start", j),
        c = oe("stop", _),
        p = oe("stop", I),
        w = oe(
          "stop",
          (q) => {
            O(q), F.current === !1 && W(!1), b && b(q);
          },
          !1,
        ),
        P = Gr((q) => {
          Q.current || (Q.current = q.currentTarget),
            $(q),
            F.current === !0 && (W(!0), m && m(q)),
            y && y(q);
        }),
        M = () => {
          const q = Q.current;
          return s && s !== "button" && !(q.tagName === "A" && q.href);
        },
        U = k.useRef(!1),
        ee = Gr((q) => {
          f &&
            !U.current &&
            B &&
            K.current &&
            q.key === " " &&
            ((U.current = !0),
            K.current.stop(q, () => {
              K.current.start(q);
            })),
            q.target === q.currentTarget &&
              M() &&
              q.key === " " &&
              q.preventDefault(),
            v && v(q),
            q.target === q.currentTarget &&
              M() &&
              q.key === "Enter" &&
              !l &&
              (q.preventDefault(), g && g(q));
        }),
        pe = Gr((q) => {
          f &&
            q.key === " " &&
            K.current &&
            B &&
            !q.defaultPrevented &&
            ((U.current = !1),
            K.current.stop(q, () => {
              K.current.pulsate(q);
            })),
            S && S(q),
            g &&
              q.target === q.currentTarget &&
              M() &&
              q.key === " " &&
              !q.defaultPrevented &&
              g(q);
        });
      let me = s;
      me === "button" && (Y.href || Y.to) && (me = h);
      const he = {};
      me === "button"
        ? ((he.type = D === void 0 ? "button" : D), (he.disabled = l))
        : (!Y.href && !Y.to && (he.role = "button"),
          l && (he["aria-disabled"] = l));
      const Ee = St(t, L, Q),
        Le = E({}, n, {
          centerRipple: o,
          component: s,
          disabled: l,
          disableRipple: u,
          disableTouchRipple: d,
          focusRipple: f,
          tabIndex: H,
          focusVisible: B,
        }),
        Ce = pO(Le);
      return de(
        hO,
        E(
          {
            as: me,
            className: ue(Ce.root, a),
            ownerState: Le,
            onBlur: w,
            onClick: g,
            onContextMenu: ne,
            onFocus: P,
            onKeyDown: ee,
            onKeyUp: pe,
            onMouseDown: ce,
            onMouseLeave: Ke,
            onMouseUp: ke,
            onDragLeave: ve,
            onTouchEnd: c,
            onTouchMove: p,
            onTouchStart: Ne,
            ref: Ee,
            tabIndex: l ? -1 : H,
            type: D,
          },
          he,
          Y,
          { children: [i, ae ? A(lO, E({ ref: z, center: o }, V)) : null] },
        ),
      );
    }),
    mu = mO;
  function gO(e) {
    return be("MuiAlert", e);
  }
  const vO = we("MuiAlert", [
      "root",
      "action",
      "icon",
      "message",
      "filled",
      "filledSuccess",
      "filledInfo",
      "filledWarning",
      "filledError",
      "outlined",
      "outlinedSuccess",
      "outlinedInfo",
      "outlinedWarning",
      "outlinedError",
      "standard",
      "standardSuccess",
      "standardInfo",
      "standardWarning",
      "standardError",
    ]),
    Fy = vO;
  function yO(e) {
    return be("MuiIconButton", e);
  }
  const bO = we("MuiIconButton", [
      "root",
      "disabled",
      "colorInherit",
      "colorPrimary",
      "colorSecondary",
      "colorError",
      "colorInfo",
      "colorSuccess",
      "colorWarning",
      "edgeStart",
      "edgeEnd",
      "sizeSmall",
      "sizeMedium",
      "sizeLarge",
    ]),
    wO = bO,
    SO = [
      "edge",
      "children",
      "className",
      "color",
      "disabled",
      "disableFocusRipple",
      "size",
    ],
    xO = (e) => {
      const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
        a = {
          root: [
            "root",
            n && "disabled",
            r !== "default" && `color${le(r)}`,
            o && `edge${le(o)}`,
            `size${le(i)}`,
          ],
        };
      return Se(a, yO, t);
    },
    kO = ie(mu, {
      name: "MuiIconButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "default" && t[`color${le(n.color)}`],
          n.edge && t[`edge${le(n.edge)}`],
          t[`size${le(n.size)}`],
        ];
      },
    })(
      ({ theme: e, ownerState: t }) =>
        E(
          {
            textAlign: "center",
            flex: "0 0 auto",
            fontSize: e.typography.pxToRem(24),
            padding: 8,
            borderRadius: "50%",
            overflow: "visible",
            color: (e.vars || e).palette.action.active,
            transition: e.transitions.create("background-color", {
              duration: e.transitions.duration.shortest,
            }),
          },
          !t.disableRipple && {
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Gt(e.palette.action.active, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
          t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
          t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 },
        ),
      ({ theme: e, ownerState: t }) => {
        var n;
        const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
        return E(
          {},
          t.color === "inherit" && { color: "inherit" },
          t.color !== "inherit" &&
            t.color !== "default" &&
            E(
              { color: r == null ? void 0 : r.main },
              !t.disableRipple && {
                "&:hover": E(
                  {},
                  r && {
                    backgroundColor: e.vars
                      ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Gt(r.main, e.palette.action.hoverOpacity),
                  },
                  {
                    "@media (hover: none)": { backgroundColor: "transparent" },
                  },
                ),
              },
            ),
          t.size === "small" && {
            padding: 5,
            fontSize: e.typography.pxToRem(18),
          },
          t.size === "large" && {
            padding: 12,
            fontSize: e.typography.pxToRem(28),
          },
          {
            [`&.${wO.disabled}`]: {
              backgroundColor: "transparent",
              color: (e.vars || e).palette.action.disabled,
            },
          },
        );
      },
    ),
    EO = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiIconButton" }),
        {
          edge: r = !1,
          children: o,
          className: i,
          color: a = "default",
          disabled: s = !1,
          disableFocusRipple: l = !1,
          size: u = "medium",
        } = n,
        d = re(n, SO),
        f = E({}, n, {
          edge: r,
          color: a,
          disabled: s,
          disableFocusRipple: l,
          size: u,
        }),
        h = xO(f);
      return A(
        kO,
        E(
          {
            className: ue(h.root, i),
            centerRipple: !0,
            focusRipple: !l,
            disabled: s,
            ref: t,
            ownerState: f,
          },
          d,
          { children: o },
        ),
      );
    }),
    gu = EO,
    CO = _n(
      A("path", {
        d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
      }),
      "SuccessOutlined",
    ),
    OO = _n(
      A("path", {
        d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
      }),
      "ReportProblemOutlined",
    ),
    NO = _n(
      A("path", {
        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
      }),
      "ErrorOutline",
    ),
    TO = _n(
      A("path", {
        d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
      }),
      "InfoOutlined",
    ),
    AO = _n(
      A("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Close",
    ),
    RO = [
      "action",
      "children",
      "className",
      "closeText",
      "color",
      "components",
      "componentsProps",
      "icon",
      "iconMapping",
      "onClose",
      "role",
      "severity",
      "slotProps",
      "slots",
      "variant",
    ],
    PO = (e) => {
      const { variant: t, color: n, severity: r, classes: o } = e,
        i = {
          root: ["root", `${t}${le(n || r)}`, `${t}`],
          icon: ["icon"],
          message: ["message"],
          action: ["action"],
        };
      return Se(i, gO, o);
    },
    _O = ie(Qo, {
      name: "MuiAlert",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${le(n.color || n.severity)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      const n = e.palette.mode === "light" ? sp : lp,
        r = e.palette.mode === "light" ? lp : sp,
        o = t.color || t.severity;
      return E(
        {},
        e.typography.body2,
        {
          backgroundColor: "transparent",
          display: "flex",
          padding: "6px 16px",
        },
        o &&
          t.variant === "standard" && {
            color: e.vars
              ? e.vars.palette.Alert[`${o}Color`]
              : n(e.palette[o].light, 0.6),
            backgroundColor: e.vars
              ? e.vars.palette.Alert[`${o}StandardBg`]
              : r(e.palette[o].light, 0.9),
            [`& .${Fy.icon}`]: e.vars
              ? { color: e.vars.palette.Alert[`${o}IconColor`] }
              : { color: e.palette[o].main },
          },
        o &&
          t.variant === "outlined" && {
            color: e.vars
              ? e.vars.palette.Alert[`${o}Color`]
              : n(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${Fy.icon}`]: e.vars
              ? { color: e.vars.palette.Alert[`${o}IconColor`] }
              : { color: e.palette[o].main },
          },
        o &&
          t.variant === "filled" &&
          E(
            { fontWeight: e.typography.fontWeightMedium },
            e.vars
              ? {
                  color: e.vars.palette.Alert[`${o}FilledColor`],
                  backgroundColor: e.vars.palette.Alert[`${o}FilledBg`],
                }
              : {
                  backgroundColor:
                    e.palette.mode === "dark"
                      ? e.palette[o].dark
                      : e.palette[o].main,
                  color: e.palette.getContrastText(e.palette[o].main),
                },
          ),
      );
    }),
    IO = ie("div", {
      name: "MuiAlert",
      slot: "Icon",
      overridesResolver: (e, t) => t.icon,
    })({
      marginRight: 12,
      padding: "7px 0",
      display: "flex",
      fontSize: 22,
      opacity: 0.9,
    }),
    $O = ie("div", {
      name: "MuiAlert",
      slot: "Message",
      overridesResolver: (e, t) => t.message,
    })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
    By = ie("div", {
      name: "MuiAlert",
      slot: "Action",
      overridesResolver: (e, t) => t.action,
    })({
      display: "flex",
      alignItems: "flex-start",
      padding: "4px 0 0 16px",
      marginLeft: "auto",
      marginRight: -8,
    }),
    jy = {
      success: A(CO, { fontSize: "inherit" }),
      warning: A(OO, { fontSize: "inherit" }),
      error: A(NO, { fontSize: "inherit" }),
      info: A(TO, { fontSize: "inherit" }),
    },
    MO = k.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = xe({ props: e, name: "MuiAlert" }),
        {
          action: u,
          children: d,
          className: f,
          closeText: h = "Close",
          color: b,
          components: g = {},
          componentsProps: x = {},
          icon: R,
          iconMapping: y = jy,
          onClose: m,
          role: v = "alert",
          severity: S = "success",
          slotProps: C = {},
          slots: N = {},
          variant: T = "standard",
        } = l,
        _ = re(l, RO),
        I = E({}, l, { color: b, severity: S, variant: T }),
        j = PO(I),
        H =
          (n = (r = N.closeButton) != null ? r : g.CloseButton) != null
            ? n
            : gu,
        V = (o = (i = N.closeIcon) != null ? i : g.CloseIcon) != null ? o : AO,
        Z = (a = C.closeButton) != null ? a : x.closeButton,
        D = (s = C.closeIcon) != null ? s : x.closeIcon;
      return de(
        _O,
        E(
          {
            role: v,
            elevation: 0,
            ownerState: I,
            className: ue(j.root, f),
            ref: t,
          },
          _,
          {
            children: [
              R !== !1
                ? A(IO, {
                    ownerState: I,
                    className: j.icon,
                    children: R || y[S] || jy[S],
                  })
                : null,
              A($O, { ownerState: I, className: j.message, children: d }),
              u != null
                ? A(By, { ownerState: I, className: j.action, children: u })
                : null,
              u == null && m
                ? A(By, {
                    ownerState: I,
                    className: j.action,
                    children: A(
                      H,
                      E(
                        {
                          size: "small",
                          "aria-label": h,
                          title: h,
                          color: "inherit",
                          onClick: m,
                        },
                        Z,
                        { children: A(V, E({ fontSize: "small" }, D)) },
                      ),
                    ),
                  })
                : null,
            ],
          },
        ),
      );
    }),
    LO = MO;
  function FO(e) {
    return be("MuiTypography", e);
  }
  we("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
  ]);
  const BO = [
      "align",
      "className",
      "component",
      "gutterBottom",
      "noWrap",
      "paragraph",
      "variant",
      "variantMapping",
    ],
    jO = (e) => {
      const {
          align: t,
          gutterBottom: n,
          noWrap: r,
          paragraph: o,
          variant: i,
          classes: a,
        } = e,
        s = {
          root: [
            "root",
            i,
            e.align !== "inherit" && `align${le(t)}`,
            n && "gutterBottom",
            r && "noWrap",
            o && "paragraph",
          ],
        };
      return Se(s, FO, a);
    },
    zO = ie("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.variant && t[n.variant],
          n.align !== "inherit" && t[`align${le(n.align)}`],
          n.noWrap && t.noWrap,
          n.gutterBottom && t.gutterBottom,
          n.paragraph && t.paragraph,
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        { margin: 0 },
        t.variant && e.typography[t.variant],
        t.align !== "inherit" && { textAlign: t.align },
        t.noWrap && {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
        t.gutterBottom && { marginBottom: "0.35em" },
        t.paragraph && { marginBottom: 16 },
      ),
    ),
    zy = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      inherit: "p",
    },
    UO = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main",
    },
    DO = (e) => UO[e] || e,
    WO = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiTypography" }),
        r = DO(n.color),
        o = ip(E({}, n, { color: r })),
        {
          align: i = "inherit",
          className: a,
          component: s,
          gutterBottom: l = !1,
          noWrap: u = !1,
          paragraph: d = !1,
          variant: f = "body1",
          variantMapping: h = zy,
        } = o,
        b = re(o, BO),
        g = E({}, o, {
          align: i,
          color: r,
          className: a,
          component: s,
          gutterBottom: l,
          noWrap: u,
          paragraph: d,
          variant: f,
          variantMapping: h,
        }),
        x = s || (d ? "p" : h[f] || zy[f]) || "span",
        R = jO(g);
      return A(
        zO,
        E({ as: x, ref: t, ownerState: g, className: ue(R.root, a) }, b),
      );
    }),
    on = WO;
  function VO(e) {
    return be("MuiAppBar", e);
  }
  we("MuiAppBar", [
    "root",
    "positionFixed",
    "positionAbsolute",
    "positionSticky",
    "positionStatic",
    "positionRelative",
    "colorDefault",
    "colorPrimary",
    "colorSecondary",
    "colorInherit",
    "colorTransparent",
  ]);
  const HO = ["className", "color", "enableColorOnDark", "position"],
    qO = (e) => {
      const { color: t, position: n, classes: r } = e,
        o = { root: ["root", `color${le(t)}`, `position${le(n)}`] };
      return Se(o, VO, r);
    },
    vu = (e, t) =>
      e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t,
    GO = ie(Qo, {
      name: "MuiAppBar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`position${le(n.position)}`],
          t[`color${le(n.color)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
      return E(
        {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          boxSizing: "border-box",
          flexShrink: 0,
        },
        t.position === "fixed" && {
          position: "fixed",
          zIndex: (e.vars || e).zIndex.appBar,
          top: 0,
          left: "auto",
          right: 0,
          "@media print": { position: "absolute" },
        },
        t.position === "absolute" && {
          position: "absolute",
          zIndex: (e.vars || e).zIndex.appBar,
          top: 0,
          left: "auto",
          right: 0,
        },
        t.position === "sticky" && {
          position: "sticky",
          zIndex: (e.vars || e).zIndex.appBar,
          top: 0,
          left: "auto",
          right: 0,
        },
        t.position === "static" && { position: "static" },
        t.position === "relative" && { position: "relative" },
        !e.vars &&
          E(
            {},
            t.color === "default" && {
              backgroundColor: n,
              color: e.palette.getContrastText(n),
            },
            t.color &&
              t.color !== "default" &&
              t.color !== "inherit" &&
              t.color !== "transparent" && {
                backgroundColor: e.palette[t.color].main,
                color: e.palette[t.color].contrastText,
              },
            t.color === "inherit" && { color: "inherit" },
            e.palette.mode === "dark" &&
              !t.enableColorOnDark && { backgroundColor: null, color: null },
            t.color === "transparent" &&
              E(
                { backgroundColor: "transparent", color: "inherit" },
                e.palette.mode === "dark" && { backgroundImage: "none" },
              ),
          ),
        e.vars &&
          E(
            {},
            t.color === "default" && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette.AppBar.defaultBg
                : vu(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette.AppBar.defaultBg,
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette.text.primary
                : vu(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette.text.primary,
                  ),
            },
            t.color &&
              !t.color.match(/^(default|inherit|transparent)$/) && {
                "--AppBar-background": t.enableColorOnDark
                  ? e.vars.palette[t.color].main
                  : vu(
                      e.vars.palette.AppBar.darkBg,
                      e.vars.palette[t.color].main,
                    ),
                "--AppBar-color": t.enableColorOnDark
                  ? e.vars.palette[t.color].contrastText
                  : vu(
                      e.vars.palette.AppBar.darkColor,
                      e.vars.palette[t.color].contrastText,
                    ),
              },
            {
              backgroundColor: "var(--AppBar-background)",
              color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)",
            },
            t.color === "transparent" && {
              backgroundImage: "none",
              backgroundColor: "transparent",
              color: "inherit",
            },
          ),
      );
    }),
    KO = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiAppBar" }),
        {
          className: r,
          color: o = "primary",
          enableColorOnDark: i = !1,
          position: a = "fixed",
        } = n,
        s = re(n, HO),
        l = E({}, n, { color: o, position: a, enableColorOnDark: i }),
        u = qO(l);
      return A(
        GO,
        E(
          {
            square: !0,
            component: "header",
            ownerState: l,
            elevation: 4,
            className: ue(u.root, r, a === "fixed" && "mui-fixed"),
            ref: t,
          },
          s,
        ),
      );
    }),
    YO = KO;
  function Jo({ props: e, states: t, muiFormControl: n }) {
    return t.reduce(
      (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
      {},
    );
  }
  const XO = k.createContext(void 0),
    yu = XO;
  function Sr() {
    return k.useContext(yu);
  }
  function ZO(e) {
    return A(XE, E({}, e, { defaultTheme: cu }));
  }
  function Uy(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
  }
  function vp(e, t = !1) {
    return (
      e &&
      ((Uy(e.value) && e.value !== "") ||
        (t && Uy(e.defaultValue) && e.defaultValue !== ""))
    );
  }
  function QO(e) {
    return e.startAdornment;
  }
  function JO(e) {
    return be("MuiInputBase", e);
  }
  const e4 = we("MuiInputBase", [
      "root",
      "formControl",
      "focused",
      "disabled",
      "adornedStart",
      "adornedEnd",
      "error",
      "sizeSmall",
      "multiline",
      "colorSecondary",
      "fullWidth",
      "hiddenLabel",
      "readOnly",
      "input",
      "inputSizeSmall",
      "inputMultiline",
      "inputTypeSearch",
      "inputAdornedStart",
      "inputAdornedEnd",
      "inputHiddenLabel",
    ]),
    ei = e4,
    t4 = [
      "aria-describedby",
      "autoComplete",
      "autoFocus",
      "className",
      "color",
      "components",
      "componentsProps",
      "defaultValue",
      "disabled",
      "disableInjectingGlobalStyles",
      "endAdornment",
      "error",
      "fullWidth",
      "id",
      "inputComponent",
      "inputProps",
      "inputRef",
      "margin",
      "maxRows",
      "minRows",
      "multiline",
      "name",
      "onBlur",
      "onChange",
      "onClick",
      "onFocus",
      "onKeyDown",
      "onKeyUp",
      "placeholder",
      "readOnly",
      "renderSuffix",
      "rows",
      "size",
      "slotProps",
      "slots",
      "startAdornment",
      "type",
      "value",
    ],
    bu = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.formControl && t.formControl,
        n.startAdornment && t.adornedStart,
        n.endAdornment && t.adornedEnd,
        n.error && t.error,
        n.size === "small" && t.sizeSmall,
        n.multiline && t.multiline,
        n.color && t[`color${le(n.color)}`],
        n.fullWidth && t.fullWidth,
        n.hiddenLabel && t.hiddenLabel,
      ];
    },
    wu = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.input,
        n.size === "small" && t.inputSizeSmall,
        n.multiline && t.inputMultiline,
        n.type === "search" && t.inputTypeSearch,
        n.startAdornment && t.inputAdornedStart,
        n.endAdornment && t.inputAdornedEnd,
        n.hiddenLabel && t.inputHiddenLabel,
      ];
    },
    n4 = (e) => {
      const {
          classes: t,
          color: n,
          disabled: r,
          error: o,
          endAdornment: i,
          focused: a,
          formControl: s,
          fullWidth: l,
          hiddenLabel: u,
          multiline: d,
          readOnly: f,
          size: h,
          startAdornment: b,
          type: g,
        } = e,
        x = {
          root: [
            "root",
            `color${le(n)}`,
            r && "disabled",
            o && "error",
            l && "fullWidth",
            a && "focused",
            s && "formControl",
            h === "small" && "sizeSmall",
            d && "multiline",
            b && "adornedStart",
            i && "adornedEnd",
            u && "hiddenLabel",
            f && "readOnly",
          ],
          input: [
            "input",
            r && "disabled",
            g === "search" && "inputTypeSearch",
            d && "inputMultiline",
            h === "small" && "inputSizeSmall",
            u && "inputHiddenLabel",
            b && "inputAdornedStart",
            i && "inputAdornedEnd",
            f && "readOnly",
          ],
        };
      return Se(x, JO, t);
    },
    Su = ie("div", {
      name: "MuiInputBase",
      slot: "Root",
      overridesResolver: bu,
    })(({ theme: e, ownerState: t }) =>
      E(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${ei.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          E({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" },
      ),
    ),
    xu = ie("input", {
      name: "MuiInputBase",
      slot: "Input",
      overridesResolver: wu,
    })(({ theme: e, ownerState: t }) => {
      const n = e.palette.mode === "light",
        r = E(
          { color: "currentColor" },
          e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: n ? 0.42 : 0.5 },
          {
            transition: e.transitions.create("opacity", {
              duration: e.transitions.duration.shorter,
            }),
          },
        ),
        o = { opacity: "0 !important" },
        i = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 };
      return E(
        {
          font: "inherit",
          letterSpacing: "inherit",
          color: "currentColor",
          padding: "4px 0 5px",
          border: 0,
          boxSizing: "content-box",
          background: "none",
          height: "1.4375em",
          margin: 0,
          WebkitTapHighlightColor: "transparent",
          display: "block",
          minWidth: 0,
          width: "100%",
          animationName: "mui-auto-fill-cancel",
          animationDuration: "10ms",
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&:-ms-input-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus": { outline: 0 },
          "&:invalid": { boxShadow: "none" },
          "&::-webkit-search-decoration": { WebkitAppearance: "none" },
          [`label[data-shrink=false] + .${ei.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": i,
            "&:focus::-moz-placeholder": i,
            "&:focus:-ms-input-placeholder": i,
            "&:focus::-ms-input-placeholder": i,
          },
          [`&.${ei.disabled}`]: {
            opacity: 1,
            WebkitTextFillColor: (e.vars || e).palette.text.disabled,
          },
          "&:-webkit-autofill": {
            animationDuration: "5000s",
            animationName: "mui-auto-fill",
          },
        },
        t.size === "small" && { paddingTop: 1 },
        t.multiline && {
          height: "auto",
          resize: "none",
          padding: 0,
          paddingTop: 0,
        },
        t.type === "search" && { MozAppearance: "textfield" },
      );
    }),
    r4 = A(ZO, {
      styles: {
        "@keyframes mui-auto-fill": { from: { display: "block" } },
        "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
      },
    }),
    o4 = k.forwardRef(function (e, t) {
      var n;
      const r = xe({ props: e, name: "MuiInputBase" }),
        {
          "aria-describedby": o,
          autoComplete: i,
          autoFocus: a,
          className: s,
          components: l = {},
          componentsProps: u = {},
          defaultValue: d,
          disabled: f,
          disableInjectingGlobalStyles: h,
          endAdornment: b,
          fullWidth: g = !1,
          id: x,
          inputComponent: R = "input",
          inputProps: y = {},
          inputRef: m,
          maxRows: v,
          minRows: S,
          multiline: C = !1,
          name: N,
          onBlur: T,
          onChange: _,
          onClick: I,
          onFocus: j,
          onKeyDown: H,
          onKeyUp: V,
          placeholder: Z,
          readOnly: D,
          renderSuffix: Y,
          rows: Q,
          slotProps: K = {},
          slots: z = {},
          startAdornment: F,
          type: $ = "text",
          value: O,
        } = r,
        L = re(r, t4),
        B = y.value != null ? y.value : O,
        { current: W } = k.useRef(B != null),
        X = k.useRef(),
        J = k.useCallback((Ce) => {}, []),
        ae = St(X, m, y.ref, J),
        [oe, ce] = k.useState(!1),
        ne = Sr(),
        ve = Jo({
          props: r,
          muiFormControl: ne,
          states: [
            "color",
            "disabled",
            "error",
            "hiddenLabel",
            "size",
            "required",
            "filled",
          ],
        });
      (ve.focused = ne ? ne.focused : oe),
        k.useEffect(() => {
          !ne && f && oe && (ce(!1), T && T());
        }, [ne, f, oe, T]);
      const ke = ne && ne.onFilled,
        Ke = ne && ne.onEmpty,
        Ne = k.useCallback(
          (Ce) => {
            vp(Ce) ? ke && ke() : Ke && Ke();
          },
          [ke, Ke],
        );
      wr(() => {
        W && Ne({ value: B });
      }, [B, Ne, W]);
      const c = (Ce) => {
          if (ve.disabled) {
            Ce.stopPropagation();
            return;
          }
          j && j(Ce),
            y.onFocus && y.onFocus(Ce),
            ne && ne.onFocus ? ne.onFocus(Ce) : ce(!0);
        },
        p = (Ce) => {
          T && T(Ce),
            y.onBlur && y.onBlur(Ce),
            ne && ne.onBlur ? ne.onBlur(Ce) : ce(!1);
        },
        w = (Ce, ...q) => {
          if (!W) {
            const Be = Ce.target || X.current;
            if (Be == null) throw new Error(yr(1));
            Ne({ value: Be.value });
          }
          y.onChange && y.onChange(Ce, ...q), _ && _(Ce, ...q);
        };
      k.useEffect(() => {
        Ne(X.current);
      }, []);
      const P = (Ce) => {
        X.current && Ce.currentTarget === Ce.target && X.current.focus(),
          I && I(Ce);
      };
      let M = R,
        U = y;
      C &&
        M === "input" &&
        (Q
          ? (U = E({ type: void 0, minRows: Q, maxRows: Q }, U))
          : (U = E({ type: void 0, maxRows: v, minRows: S }, U)),
        (M = _3));
      const ee = (Ce) => {
        Ne(
          Ce.animationName === "mui-auto-fill-cancel"
            ? X.current
            : { value: "x" },
        );
      };
      k.useEffect(() => {
        ne && ne.setAdornedStart(!!F);
      }, [ne, F]);
      const pe = E({}, r, {
          color: ve.color || "primary",
          disabled: ve.disabled,
          endAdornment: b,
          error: ve.error,
          focused: ve.focused,
          formControl: ne,
          fullWidth: g,
          hiddenLabel: ve.hiddenLabel,
          multiline: C,
          size: ve.size,
          startAdornment: F,
          type: $,
        }),
        me = n4(pe),
        he = z.root || l.Root || Su,
        Ee = K.root || u.root || {},
        Le = z.input || l.Input || xu;
      return (
        (U = E({}, U, (n = K.input) != null ? n : u.input)),
        de(k.Fragment, {
          children: [
            !h && r4,
            de(
              he,
              E(
                {},
                Ee,
                !Yo(he) && { ownerState: E({}, pe, Ee.ownerState) },
                { ref: t, onClick: P },
                L,
                {
                  className: ue(me.root, Ee.className, s),
                  children: [
                    F,
                    A(yu.Provider, {
                      value: null,
                      children: A(
                        Le,
                        E(
                          {
                            ownerState: pe,
                            "aria-invalid": ve.error,
                            "aria-describedby": o,
                            autoComplete: i,
                            autoFocus: a,
                            defaultValue: d,
                            disabled: ve.disabled,
                            id: x,
                            onAnimationStart: ee,
                            name: N,
                            placeholder: Z,
                            readOnly: D,
                            required: ve.required,
                            rows: Q,
                            value: B,
                            onKeyDown: H,
                            onKeyUp: V,
                            type: $,
                          },
                          U,
                          !Yo(Le) && {
                            as: M,
                            ownerState: E({}, pe, U.ownerState),
                          },
                          {
                            ref: ae,
                            className: ue(me.input, U.className),
                            onBlur: p,
                            onChange: w,
                            onFocus: c,
                          },
                        ),
                      ),
                    }),
                    b,
                    Y ? Y(E({}, ve, { startAdornment: F })) : null,
                  ],
                },
              ),
            ),
          ],
        })
      );
    }),
    yp = o4;
  function i4(e) {
    return be("MuiInput", e);
  }
  const a4 = E({}, ei, we("MuiInput", ["root", "underline", "input"])),
    Ra = a4;
  function s4(e) {
    return be("MuiOutlinedInput", e);
  }
  const l4 = E(
      {},
      ei,
      we("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
    ),
    xr = l4;
  function u4(e) {
    return be("MuiFilledInput", e);
  }
  const c4 = E({}, ei, we("MuiFilledInput", ["root", "underline", "input"])),
    Qr = c4,
    d4 = _n(A("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    f4 = [
      "addEndListener",
      "appear",
      "children",
      "easing",
      "in",
      "onEnter",
      "onEntered",
      "onEntering",
      "onExit",
      "onExited",
      "onExiting",
      "style",
      "timeout",
      "TransitionComponent",
    ],
    p4 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    h4 = k.forwardRef(function (e, t) {
      const n = Na(),
        r = {
          enter: n.transitions.duration.enteringScreen,
          exit: n.transitions.duration.leavingScreen,
        },
        {
          addEndListener: o,
          appear: i = !0,
          children: a,
          easing: s,
          in: l,
          onEnter: u,
          onEntered: d,
          onEntering: f,
          onExit: h,
          onExited: b,
          onExiting: g,
          style: x,
          timeout: R = r,
          TransitionComponent: y = Py,
        } = e,
        m = re(e, f4),
        v = k.useRef(null),
        S = St(v, a.ref, t),
        C = (V) => (Z) => {
          if (V) {
            const D = v.current;
            Z === void 0 ? V(D) : V(D, Z);
          }
        },
        N = C(f),
        T = C((V, Z) => {
          _y(V);
          const D = pu({ style: x, timeout: R, easing: s }, { mode: "enter" });
          (V.style.webkitTransition = n.transitions.create("opacity", D)),
            (V.style.transition = n.transitions.create("opacity", D)),
            u && u(V, Z);
        }),
        _ = C(d),
        I = C(g),
        j = C((V) => {
          const Z = pu({ style: x, timeout: R, easing: s }, { mode: "exit" });
          (V.style.webkitTransition = n.transitions.create("opacity", Z)),
            (V.style.transition = n.transitions.create("opacity", Z)),
            h && h(V);
        }),
        H = C(b);
      return A(
        y,
        E(
          {
            appear: i,
            in: l,
            nodeRef: v,
            onEnter: T,
            onEntered: _,
            onEntering: N,
            onExit: j,
            onExited: H,
            onExiting: I,
            addEndListener: (V) => {
              o && o(v.current, V);
            },
            timeout: R,
          },
          m,
          {
            children: (V, Z) =>
              k.cloneElement(
                a,
                E(
                  {
                    style: E(
                      {
                        opacity: 0,
                        visibility: V === "exited" && !l ? "hidden" : void 0,
                      },
                      p4[V],
                      x,
                      a.props.style,
                    ),
                    ref: S,
                  },
                  Z,
                ),
              ),
          },
        ),
      );
    }),
    m4 = h4;
  function g4(e) {
    return be("MuiBackdrop", e);
  }
  we("MuiBackdrop", ["root", "invisible"]);
  const v4 = [
      "children",
      "component",
      "components",
      "componentsProps",
      "className",
      "invisible",
      "open",
      "slotProps",
      "slots",
      "transitionDuration",
      "TransitionComponent",
    ],
    y4 = (e) => {
      const { classes: t, invisible: n } = e;
      return Se({ root: ["root", n && "invisible"] }, g4, t);
    },
    b4 = ie("div", {
      name: "MuiBackdrop",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.invisible && t.invisible];
      },
    })(({ ownerState: e }) =>
      E(
        {
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          WebkitTapHighlightColor: "transparent",
        },
        e.invisible && { backgroundColor: "transparent" },
      ),
    ),
    w4 = k.forwardRef(function (e, t) {
      var n, r, o;
      const i = xe({ props: e, name: "MuiBackdrop" }),
        {
          children: a,
          component: s = "div",
          components: l = {},
          componentsProps: u = {},
          className: d,
          invisible: f = !1,
          open: h,
          slotProps: b = {},
          slots: g = {},
          transitionDuration: x,
          TransitionComponent: R = m4,
        } = i,
        y = re(i, v4),
        m = E({}, i, { component: s, invisible: f }),
        v = y4(m),
        S = (n = b.root) != null ? n : u.root;
      return A(
        R,
        E({ in: h, timeout: x }, y, {
          children: A(
            b4,
            E({ "aria-hidden": !0 }, S, {
              as: (r = (o = g.root) != null ? o : l.Root) != null ? r : s,
              className: ue(v.root, d, S == null ? void 0 : S.className),
              ownerState: E({}, m, S == null ? void 0 : S.ownerState),
              classes: v,
              ref: t,
              children: a,
            }),
          ),
        }),
      );
    }),
    S4 = w4,
    x4 = uu(),
    k4 = rC({
      defaultTheme: x4,
      defaultClassName: "MuiBox-root",
      generateClassName: Bf.generate,
    }),
    Dy = k4;
  function E4(e) {
    return be("MuiButton", e);
  }
  const C4 = we("MuiButton", [
      "root",
      "text",
      "textInherit",
      "textPrimary",
      "textSecondary",
      "textSuccess",
      "textError",
      "textInfo",
      "textWarning",
      "outlined",
      "outlinedInherit",
      "outlinedPrimary",
      "outlinedSecondary",
      "outlinedSuccess",
      "outlinedError",
      "outlinedInfo",
      "outlinedWarning",
      "contained",
      "containedInherit",
      "containedPrimary",
      "containedSecondary",
      "containedSuccess",
      "containedError",
      "containedInfo",
      "containedWarning",
      "disableElevation",
      "focusVisible",
      "disabled",
      "colorInherit",
      "textSizeSmall",
      "textSizeMedium",
      "textSizeLarge",
      "outlinedSizeSmall",
      "outlinedSizeMedium",
      "outlinedSizeLarge",
      "containedSizeSmall",
      "containedSizeMedium",
      "containedSizeLarge",
      "sizeMedium",
      "sizeSmall",
      "sizeLarge",
      "fullWidth",
      "startIcon",
      "endIcon",
      "iconSizeSmall",
      "iconSizeMedium",
      "iconSizeLarge",
    ]),
    ku = C4,
    O4 = k.createContext({}),
    N4 = O4,
    T4 = [
      "children",
      "color",
      "component",
      "className",
      "disabled",
      "disableElevation",
      "disableFocusRipple",
      "endIcon",
      "focusVisibleClassName",
      "fullWidth",
      "size",
      "startIcon",
      "type",
      "variant",
    ],
    A4 = (e) => {
      const {
          color: t,
          disableElevation: n,
          fullWidth: r,
          size: o,
          variant: i,
          classes: a,
        } = e,
        s = {
          root: [
            "root",
            i,
            `${i}${le(t)}`,
            `size${le(o)}`,
            `${i}Size${le(o)}`,
            t === "inherit" && "colorInherit",
            n && "disableElevation",
            r && "fullWidth",
          ],
          label: ["label"],
          startIcon: ["startIcon", `iconSize${le(o)}`],
          endIcon: ["endIcon", `iconSize${le(o)}`],
        },
        l = Se(s, E4, a);
      return E({}, a, l);
    },
    Wy = (e) =>
      E(
        {},
        e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
        e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
        e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
      ),
    R4 = ie(mu, {
      shouldForwardProp: (e) => Pn(e) || e === "classes",
      name: "MuiButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${le(n.color)}`],
          t[`size${le(n.size)}`],
          t[`${n.variant}Size${le(n.size)}`],
          n.color === "inherit" && t.colorInherit,
          n.disableElevation && t.disableElevation,
          n.fullWidth && t.fullWidth,
        ];
      },
    })(
      ({ theme: e, ownerState: t }) => {
        var n, r;
        return E(
          {},
          e.typography.button,
          {
            minWidth: 64,
            padding: "6px 16px",
            borderRadius: (e.vars || e).shape.borderRadius,
            transition: e.transitions.create(
              ["background-color", "box-shadow", "border-color", "color"],
              { duration: e.transitions.duration.short },
            ),
            "&:hover": E(
              {
                textDecoration: "none",
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Gt(e.palette.text.primary, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              t.variant === "text" &&
                t.color !== "inherit" && {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                        e.vars.palette.action.hoverOpacity
                      })`
                    : Gt(
                        e.palette[t.color].main,
                        e.palette.action.hoverOpacity,
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              t.variant === "outlined" &&
                t.color !== "inherit" && {
                  border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                        e.vars.palette.action.hoverOpacity
                      })`
                    : Gt(
                        e.palette[t.color].main,
                        e.palette.action.hoverOpacity,
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              t.variant === "contained" && {
                backgroundColor: (e.vars || e).palette.grey.A100,
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": {
                  boxShadow: (e.vars || e).shadows[2],
                  backgroundColor: (e.vars || e).palette.grey[300],
                },
              },
              t.variant === "contained" &&
                t.color !== "inherit" && {
                  backgroundColor: (e.vars || e).palette[t.color].dark,
                  "@media (hover: none)": {
                    backgroundColor: (e.vars || e).palette[t.color].main,
                  },
                },
            ),
            "&:active": E(
              {},
              t.variant === "contained" && {
                boxShadow: (e.vars || e).shadows[8],
              },
            ),
            [`&.${ku.focusVisible}`]: E(
              {},
              t.variant === "contained" && {
                boxShadow: (e.vars || e).shadows[6],
              },
            ),
            [`&.${ku.disabled}`]: E(
              { color: (e.vars || e).palette.action.disabled },
              t.variant === "outlined" && {
                border: `1px solid ${
                  (e.vars || e).palette.action.disabledBackground
                }`,
              },
              t.variant === "contained" && {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            ),
          },
          t.variant === "text" && { padding: "6px 8px" },
          t.variant === "text" &&
            t.color !== "inherit" && {
              color: (e.vars || e).palette[t.color].main,
            },
          t.variant === "outlined" && {
            padding: "5px 15px",
            border: "1px solid currentColor",
          },
          t.variant === "outlined" &&
            t.color !== "inherit" && {
              color: (e.vars || e).palette[t.color].main,
              border: e.vars
                ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
                : `1px solid ${Gt(e.palette[t.color].main, 0.5)}`,
            },
          t.variant === "contained" && {
            color: e.vars
              ? e.vars.palette.text.primary
              : (n = (r = e.palette).getContrastText) == null
              ? void 0
              : n.call(r, e.palette.grey[300]),
            backgroundColor: (e.vars || e).palette.grey[300],
            boxShadow: (e.vars || e).shadows[2],
          },
          t.variant === "contained" &&
            t.color !== "inherit" && {
              color: (e.vars || e).palette[t.color].contrastText,
              backgroundColor: (e.vars || e).palette[t.color].main,
            },
          t.color === "inherit" && {
            color: "inherit",
            borderColor: "currentColor",
          },
          t.size === "small" &&
            t.variant === "text" && {
              padding: "4px 5px",
              fontSize: e.typography.pxToRem(13),
            },
          t.size === "large" &&
            t.variant === "text" && {
              padding: "8px 11px",
              fontSize: e.typography.pxToRem(15),
            },
          t.size === "small" &&
            t.variant === "outlined" && {
              padding: "3px 9px",
              fontSize: e.typography.pxToRem(13),
            },
          t.size === "large" &&
            t.variant === "outlined" && {
              padding: "7px 21px",
              fontSize: e.typography.pxToRem(15),
            },
          t.size === "small" &&
            t.variant === "contained" && {
              padding: "4px 10px",
              fontSize: e.typography.pxToRem(13),
            },
          t.size === "large" &&
            t.variant === "contained" && {
              padding: "8px 22px",
              fontSize: e.typography.pxToRem(15),
            },
          t.fullWidth && { width: "100%" },
        );
      },
      ({ ownerState: e }) =>
        e.disableElevation && {
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
          [`&.${ku.focusVisible}`]: { boxShadow: "none" },
          "&:active": { boxShadow: "none" },
          [`&.${ku.disabled}`]: { boxShadow: "none" },
        },
    ),
    P4 = ie("span", {
      name: "MuiButton",
      slot: "StartIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.startIcon, t[`iconSize${le(n.size)}`]];
      },
    })(({ ownerState: e }) =>
      E(
        { display: "inherit", marginRight: 8, marginLeft: -4 },
        e.size === "small" && { marginLeft: -2 },
        Wy(e),
      ),
    ),
    _4 = ie("span", {
      name: "MuiButton",
      slot: "EndIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.endIcon, t[`iconSize${le(n.size)}`]];
      },
    })(({ ownerState: e }) =>
      E(
        { display: "inherit", marginRight: -4, marginLeft: 8 },
        e.size === "small" && { marginRight: -2 },
        Wy(e),
      ),
    ),
    I4 = k.forwardRef(function (e, t) {
      const n = k.useContext(N4),
        r = Ff(n, e),
        o = xe({ props: r, name: "MuiButton" }),
        {
          children: i,
          color: a = "primary",
          component: s = "button",
          className: l,
          disabled: u = !1,
          disableElevation: d = !1,
          disableFocusRipple: f = !1,
          endIcon: h,
          focusVisibleClassName: b,
          fullWidth: g = !1,
          size: x = "medium",
          startIcon: R,
          type: y,
          variant: m = "text",
        } = o,
        v = re(o, T4),
        S = E({}, o, {
          color: a,
          component: s,
          disabled: u,
          disableElevation: d,
          disableFocusRipple: f,
          fullWidth: g,
          size: x,
          type: y,
          variant: m,
        }),
        C = A4(S),
        N = R && A(P4, { className: C.startIcon, ownerState: S, children: R }),
        T = h && A(_4, { className: C.endIcon, ownerState: S, children: h });
      return de(
        R4,
        E(
          {
            ownerState: S,
            className: ue(n.className, C.root, l),
            component: s,
            disabled: u,
            focusRipple: !f,
            focusVisibleClassName: ue(C.focusVisible, b),
            ref: t,
            type: y,
          },
          v,
          { classes: C, children: [N, i, T] },
        ),
      );
    }),
    Eu = I4;
  function $4(e) {
    return be("MuiCard", e);
  }
  we("MuiCard", ["root"]);
  const M4 = ["className", "raised"],
    L4 = (e) => {
      const { classes: t } = e;
      return Se({ root: ["root"] }, $4, t);
    },
    F4 = ie(Qo, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })(() => ({ overflow: "hidden" })),
    B4 = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiCard" }),
        { className: r, raised: o = !1 } = n,
        i = re(n, M4),
        a = E({}, n, { raised: o }),
        s = L4(a);
      return A(
        F4,
        E(
          {
            className: ue(s.root, r),
            elevation: o ? 8 : void 0,
            ref: t,
            ownerState: a,
          },
          i,
        ),
      );
    }),
    j4 = B4;
  function z4(e) {
    return be("PrivateSwitchBase", e);
  }
  we("PrivateSwitchBase", [
    "root",
    "checked",
    "disabled",
    "input",
    "edgeStart",
    "edgeEnd",
  ]);
  const U4 = [
      "autoFocus",
      "checked",
      "checkedIcon",
      "className",
      "defaultChecked",
      "disabled",
      "disableFocusRipple",
      "edge",
      "icon",
      "id",
      "inputProps",
      "inputRef",
      "name",
      "onBlur",
      "onChange",
      "onFocus",
      "readOnly",
      "required",
      "tabIndex",
      "type",
      "value",
    ],
    D4 = (e) => {
      const { classes: t, checked: n, disabled: r, edge: o } = e,
        i = {
          root: ["root", n && "checked", r && "disabled", o && `edge${le(o)}`],
          input: ["input"],
        };
      return Se(i, z4, t);
    },
    W4 = ie(mu)(({ ownerState: e }) =>
      E(
        { padding: 9, borderRadius: "50%" },
        e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
        e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 },
      ),
    ),
    V4 = ie("input")({
      cursor: "inherit",
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      zIndex: 1,
    }),
    H4 = k.forwardRef(function (e, t) {
      const {
          autoFocus: n,
          checked: r,
          checkedIcon: o,
          className: i,
          defaultChecked: a,
          disabled: s,
          disableFocusRipple: l = !1,
          edge: u = !1,
          icon: d,
          id: f,
          inputProps: h,
          inputRef: b,
          name: g,
          onBlur: x,
          onChange: R,
          onFocus: y,
          readOnly: m,
          required: v = !1,
          tabIndex: S,
          type: C,
          value: N,
        } = e,
        T = re(e, U4),
        [_, I] = Al({
          controlled: r,
          default: !!a,
          name: "SwitchBase",
          state: "checked",
        }),
        j = Sr(),
        H = (z) => {
          y && y(z), j && j.onFocus && j.onFocus(z);
        },
        V = (z) => {
          x && x(z), j && j.onBlur && j.onBlur(z);
        },
        Z = (z) => {
          if (z.nativeEvent.defaultPrevented) return;
          const F = z.target.checked;
          I(F), R && R(z, F);
        };
      let D = s;
      j && typeof D > "u" && (D = j.disabled);
      const Y = C === "checkbox" || C === "radio",
        Q = E({}, e, {
          checked: _,
          disabled: D,
          disableFocusRipple: l,
          edge: u,
        }),
        K = D4(Q);
      return de(
        W4,
        E(
          {
            component: "span",
            className: ue(K.root, i),
            centerRipple: !0,
            focusRipple: !l,
            disabled: D,
            tabIndex: null,
            role: void 0,
            onFocus: H,
            onBlur: V,
            ownerState: Q,
            ref: t,
          },
          T,
          {
            children: [
              A(
                V4,
                E(
                  {
                    autoFocus: n,
                    checked: r,
                    defaultChecked: a,
                    className: K.input,
                    disabled: D,
                    id: Y && f,
                    name: g,
                    onChange: Z,
                    readOnly: m,
                    ref: b,
                    required: v,
                    ownerState: Q,
                    tabIndex: S,
                    type: C,
                  },
                  C === "checkbox" && N === void 0 ? {} : { value: N },
                  h,
                ),
              ),
              _ ? o : d,
            ],
          },
        ),
      );
    }),
    q4 = H4,
    G4 = _n(
      A("path", {
        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
      }),
      "CheckBoxOutlineBlank",
    ),
    K4 = _n(
      A("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      }),
      "CheckBox",
    ),
    Y4 = _n(
      A("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
      }),
      "IndeterminateCheckBox",
    );
  function X4(e) {
    return be("MuiCheckbox", e);
  }
  const Z4 = we("MuiCheckbox", [
      "root",
      "checked",
      "disabled",
      "indeterminate",
      "colorPrimary",
      "colorSecondary",
    ]),
    bp = Z4,
    Q4 = [
      "checkedIcon",
      "color",
      "icon",
      "indeterminate",
      "indeterminateIcon",
      "inputProps",
      "size",
      "className",
    ],
    J4 = (e) => {
      const { classes: t, indeterminate: n, color: r } = e,
        o = { root: ["root", n && "indeterminate", `color${le(r)}`] },
        i = Se(o, X4, t);
      return E({}, t, i);
    },
    eN = ie(q4, {
      shouldForwardProp: (e) => Pn(e) || e === "classes",
      name: "MuiCheckbox",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.indeterminate && t.indeterminate,
          n.color !== "default" && t[`color${le(n.color)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        { color: (e.vars || e).palette.text.secondary },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${
                  t.color === "default"
                    ? e.vars.palette.action.activeChannel
                    : e.vars.palette.primary.mainChannel
                } / ${e.vars.palette.action.hoverOpacity})`
              : Gt(
                  t.color === "default"
                    ? e.palette.action.active
                    : e.palette[t.color].main,
                  e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${bp.checked}, &.${bp.indeterminate}`]: {
            color: (e.vars || e).palette[t.color].main,
          },
          [`&.${bp.disabled}`]: {
            color: (e.vars || e).palette.action.disabled,
          },
        },
      ),
    ),
    tN = A(K4, {}),
    nN = A(G4, {}),
    rN = A(Y4, {}),
    oN = k.forwardRef(function (e, t) {
      var n, r;
      const o = xe({ props: e, name: "MuiCheckbox" }),
        {
          checkedIcon: i = tN,
          color: a = "primary",
          icon: s = nN,
          indeterminate: l = !1,
          indeterminateIcon: u = rN,
          inputProps: d,
          size: f = "medium",
          className: h,
        } = o,
        b = re(o, Q4),
        g = l ? u : s,
        x = l ? u : i,
        R = E({}, o, { color: a, indeterminate: l, size: f }),
        y = J4(R);
      return A(
        eN,
        E(
          {
            type: "checkbox",
            inputProps: E({ "data-indeterminate": l }, d),
            icon: k.cloneElement(g, {
              fontSize: (n = g.props.fontSize) != null ? n : f,
            }),
            checkedIcon: k.cloneElement(x, {
              fontSize: (r = x.props.fontSize) != null ? r : f,
            }),
            ownerState: R,
            ref: t,
            className: ue(y.root, h),
          },
          b,
          { classes: y },
        ),
      );
    }),
    iN = oN,
    aN = OC({
      createStyledComponent: ie("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, t) => {
          const { ownerState: n } = e;
          return [
            t.root,
            t[`maxWidth${le(String(n.maxWidth))}`],
            n.fixed && t.fixed,
            n.disableGutters && t.disableGutters,
          ];
        },
      }),
      useThemeProps: (e) => xe({ props: e, name: "MuiContainer" }),
    }),
    wp = aN,
    sN = [
      "BackdropComponent",
      "BackdropProps",
      "closeAfterTransition",
      "children",
      "component",
      "components",
      "componentsProps",
      "disableAutoFocus",
      "disableEnforceFocus",
      "disableEscapeKeyDown",
      "disablePortal",
      "disableRestoreFocus",
      "disableScrollLock",
      "hideBackdrop",
      "keepMounted",
      "slotProps",
      "slots",
      "theme",
    ],
    lN = (e) => e.classes,
    uN = ie("div", {
      name: "MuiModal",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, !n.open && n.exited && t.hidden];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          position: "fixed",
          zIndex: (e.vars || e).zIndex.modal,
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
        },
        !t.open && t.exited && { visibility: "hidden" },
      ),
    ),
    cN = ie(S4, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    dN = k.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = xe({ name: "MuiModal", props: e }),
        {
          BackdropComponent: u = cN,
          BackdropProps: d,
          closeAfterTransition: f = !1,
          children: h,
          component: b,
          components: g = {},
          componentsProps: x = {},
          disableAutoFocus: R = !1,
          disableEnforceFocus: y = !1,
          disableEscapeKeyDown: m = !1,
          disablePortal: v = !1,
          disableRestoreFocus: S = !1,
          disableScrollLock: C = !1,
          hideBackdrop: N = !1,
          keepMounted: T = !1,
          slotProps: _,
          slots: I,
          theme: j,
        } = l,
        H = re(l, sN),
        [V, Z] = k.useState(!0),
        D = {
          closeAfterTransition: f,
          disableAutoFocus: R,
          disableEnforceFocus: y,
          disableEscapeKeyDown: m,
          disablePortal: v,
          disableRestoreFocus: S,
          disableScrollLock: C,
          hideBackdrop: N,
          keepMounted: T,
        },
        Y = E({}, l, D, { exited: V }),
        Q = lN(Y),
        K =
          (n = (r = I == null ? void 0 : I.root) != null ? r : g.Root) != null
            ? n
            : uN,
        z =
          (o =
            (i = I == null ? void 0 : I.backdrop) != null ? i : g.Backdrop) !=
          null
            ? o
            : u,
        F = (a = _ == null ? void 0 : _.root) != null ? a : x.root,
        $ = (s = _ == null ? void 0 : _.backdrop) != null ? s : x.backdrop;
      return A(
        T3,
        E(
          {
            slots: { root: K, backdrop: z },
            slotProps: {
              root: () => E({}, cp(F, Y), !Yo(K) && { as: b, theme: j }),
              backdrop: () => E({}, d, cp($, Y)),
            },
            onTransitionEnter: () => Z(!1),
            onTransitionExited: () => Z(!0),
            ref: t,
          },
          H,
          { classes: Q },
          D,
          { children: h },
        ),
      );
    }),
    fN = dN,
    pN = [
      "disableUnderline",
      "components",
      "componentsProps",
      "fullWidth",
      "hiddenLabel",
      "inputComponent",
      "multiline",
      "slotProps",
      "slots",
      "type",
    ],
    hN = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = Se({ root: ["root", !n && "underline"], input: ["input"] }, u4, t);
      return E({}, t, r);
    },
    mN = ie(Su, {
      shouldForwardProp: (e) => Pn(e) || e === "classes",
      name: "MuiFilledInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...bu(e, t), !n.disableUnderline && t.underline];
      },
    })(({ theme: e, ownerState: t }) => {
      var n;
      const r = e.palette.mode === "light",
        o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return E(
        {
          position: "relative",
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          borderTopLeftRadius: (e.vars || e).shape.borderRadius,
          borderTopRightRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          "&:hover": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
            "@media (hover: none)": {
              backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
            },
          },
          [`&.${Qr.focused}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
          [`&.${Qr.disabled}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s,
          },
        },
        !t.disableUnderline && {
          "&:after": {
            borderBottom: `2px solid ${
              (n = (e.vars || e).palette[t.color || "primary"]) == null
                ? void 0
                : n.main
            }`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${Qr.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Qr.error}`]: {
            "&:before, &:after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&:before": {
            borderBottom: `1px solid ${
              e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                : o
            }`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${Qr.disabled}, .${Qr.error}):before`]: {
            borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
          },
          [`&.${Qr.disabled}:before`]: { borderBottomStyle: "dotted" },
        },
        t.startAdornment && { paddingLeft: 12 },
        t.endAdornment && { paddingRight: 12 },
        t.multiline &&
          E(
            { padding: "25px 12px 8px" },
            t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
            t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          ),
      );
    }),
    gN = ie(xu, {
      name: "MuiFilledInput",
      slot: "Input",
      overridesResolver: wu,
    })(({ theme: e, ownerState: t }) =>
      E(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
      ),
    ),
    Vy = k.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = xe({ props: e, name: "MuiFilledInput" }),
        {
          components: s = {},
          componentsProps: l,
          fullWidth: u = !1,
          inputComponent: d = "input",
          multiline: f = !1,
          slotProps: h,
          slots: b = {},
          type: g = "text",
        } = a,
        x = re(a, pN),
        R = E({}, a, {
          fullWidth: u,
          inputComponent: d,
          multiline: f,
          type: g,
        }),
        y = hN(a),
        m = { root: { ownerState: R }, input: { ownerState: R } },
        v = h ?? l ? en(h ?? l, m) : m,
        S = (n = (r = b.root) != null ? r : s.Root) != null ? n : mN,
        C = (o = (i = b.input) != null ? i : s.Input) != null ? o : gN;
      return A(
        yp,
        E(
          {
            slots: { root: S, input: C },
            componentsProps: v,
            fullWidth: u,
            inputComponent: d,
            multiline: f,
            ref: t,
            type: g,
          },
          x,
          { classes: y },
        ),
      );
    });
  Vy.muiName = "Input";
  const Hy = Vy;
  function vN(e) {
    return be("MuiFormControl", e);
  }
  we("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
  ]);
  const yN = [
      "children",
      "className",
      "color",
      "component",
      "disabled",
      "error",
      "focused",
      "fullWidth",
      "hiddenLabel",
      "margin",
      "required",
      "size",
      "variant",
    ],
    bN = (e) => {
      const { classes: t, margin: n, fullWidth: r } = e,
        o = {
          root: ["root", n !== "none" && `margin${le(n)}`, r && "fullWidth"],
        };
      return Se(o, vN, t);
    },
    wN = ie("div", {
      name: "MuiFormControl",
      slot: "Root",
      overridesResolver: ({ ownerState: e }, t) =>
        E({}, t.root, t[`margin${le(e.margin)}`], e.fullWidth && t.fullWidth),
    })(({ ownerState: e }) =>
      E(
        {
          display: "inline-flex",
          flexDirection: "column",
          position: "relative",
          minWidth: 0,
          padding: 0,
          margin: 0,
          border: 0,
          verticalAlign: "top",
        },
        e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
        e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
        e.fullWidth && { width: "100%" },
      ),
    ),
    SN = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiFormControl" }),
        {
          children: r,
          className: o,
          color: i = "primary",
          component: a = "div",
          disabled: s = !1,
          error: l = !1,
          focused: u,
          fullWidth: d = !1,
          hiddenLabel: f = !1,
          margin: h = "none",
          required: b = !1,
          size: g = "medium",
          variant: x = "outlined",
        } = n,
        R = re(n, yN),
        y = E({}, n, {
          color: i,
          component: a,
          disabled: s,
          error: l,
          fullWidth: d,
          hiddenLabel: f,
          margin: h,
          required: b,
          size: g,
          variant: x,
        }),
        m = bN(y),
        [v, S] = k.useState(() => {
          let V = !1;
          return (
            r &&
              k.Children.forEach(r, (Z) => {
                if (!ga(Z, ["Input", "Select"])) return;
                const D = ga(Z, ["Select"]) ? Z.props.input : Z;
                D && QO(D.props) && (V = !0);
              }),
            V
          );
        }),
        [C, N] = k.useState(() => {
          let V = !1;
          return (
            r &&
              k.Children.forEach(r, (Z) => {
                ga(Z, ["Input", "Select"]) && vp(Z.props, !0) && (V = !0);
              }),
            V
          );
        }),
        [T, _] = k.useState(!1);
      s && T && _(!1);
      const I = u !== void 0 && !s ? u : T;
      let j;
      const H = k.useMemo(
        () => ({
          adornedStart: v,
          setAdornedStart: S,
          color: i,
          disabled: s,
          error: l,
          filled: C,
          focused: I,
          fullWidth: d,
          hiddenLabel: f,
          size: g,
          onBlur: () => {
            _(!1);
          },
          onEmpty: () => {
            N(!1);
          },
          onFilled: () => {
            N(!0);
          },
          onFocus: () => {
            _(!0);
          },
          registerEffect: j,
          required: b,
          variant: x,
        }),
        [v, i, s, l, C, I, d, f, j, b, g, x],
      );
      return A(yu.Provider, {
        value: H,
        children: A(
          wN,
          E({ as: a, ownerState: y, className: ue(m.root, o), ref: t }, R, {
            children: r,
          }),
        ),
      });
    }),
    xN = SN;
  function kN(e) {
    return be("MuiFormHelperText", e);
  }
  const EN = we("MuiFormHelperText", [
      "root",
      "error",
      "disabled",
      "sizeSmall",
      "sizeMedium",
      "contained",
      "focused",
      "filled",
      "required",
    ]),
    qy = EN;
  var Gy;
  const CN = [
      "children",
      "className",
      "component",
      "disabled",
      "error",
      "filled",
      "focused",
      "margin",
      "required",
      "variant",
    ],
    ON = (e) => {
      const {
          classes: t,
          contained: n,
          size: r,
          disabled: o,
          error: i,
          filled: a,
          focused: s,
          required: l,
        } = e,
        u = {
          root: [
            "root",
            o && "disabled",
            i && "error",
            r && `size${le(r)}`,
            n && "contained",
            s && "focused",
            a && "filled",
            l && "required",
          ],
        };
      return Se(u, kN, t);
    },
    NN = ie("p", {
      name: "MuiFormHelperText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.size && t[`size${le(n.size)}`],
          n.contained && t.contained,
          n.filled && t.filled,
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        { color: (e.vars || e).palette.text.secondary },
        e.typography.caption,
        {
          textAlign: "left",
          marginTop: 3,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          [`&.${qy.disabled}`]: { color: (e.vars || e).palette.text.disabled },
          [`&.${qy.error}`]: { color: (e.vars || e).palette.error.main },
        },
        t.size === "small" && { marginTop: 4 },
        t.contained && { marginLeft: 14, marginRight: 14 },
      ),
    ),
    TN = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiFormHelperText" }),
        { children: r, className: o, component: i = "p" } = n,
        a = re(n, CN),
        s = Sr(),
        l = Jo({
          props: n,
          muiFormControl: s,
          states: [
            "variant",
            "size",
            "disabled",
            "error",
            "filled",
            "focused",
            "required",
          ],
        }),
        u = E({}, n, {
          component: i,
          contained: l.variant === "filled" || l.variant === "outlined",
          variant: l.variant,
          size: l.size,
          disabled: l.disabled,
          error: l.error,
          filled: l.filled,
          focused: l.focused,
          required: l.required,
        }),
        d = ON(u);
      return A(
        NN,
        E({ as: i, ownerState: u, className: ue(d.root, o), ref: t }, a, {
          children:
            r === " "
              ? Gy ||
                (Gy = A("span", {
                  className: "notranslate",
                  children: "\u200B",
                }))
              : r,
        }),
      );
    }),
    AN = TN;
  function RN(e) {
    return be("MuiFormLabel", e);
  }
  const PN = we("MuiFormLabel", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "error",
      "filled",
      "required",
      "asterisk",
    ]),
    Pa = PN,
    _N = [
      "children",
      "className",
      "color",
      "component",
      "disabled",
      "error",
      "filled",
      "focused",
      "required",
    ],
    IN = (e) => {
      const {
          classes: t,
          color: n,
          focused: r,
          disabled: o,
          error: i,
          filled: a,
          required: s,
        } = e,
        l = {
          root: [
            "root",
            `color${le(n)}`,
            o && "disabled",
            i && "error",
            a && "filled",
            r && "focused",
            s && "required",
          ],
          asterisk: ["asterisk", i && "error"],
        };
      return Se(l, RN, t);
    },
    $N = ie("label", {
      name: "MuiFormLabel",
      slot: "Root",
      overridesResolver: ({ ownerState: e }, t) =>
        E(
          {},
          t.root,
          e.color === "secondary" && t.colorSecondary,
          e.filled && t.filled,
        ),
    })(({ theme: e, ownerState: t }) =>
      E({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
        lineHeight: "1.4375em",
        padding: 0,
        position: "relative",
        [`&.${Pa.focused}`]: { color: (e.vars || e).palette[t.color].main },
        [`&.${Pa.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Pa.error}`]: { color: (e.vars || e).palette.error.main },
      }),
    ),
    MN = ie("span", {
      name: "MuiFormLabel",
      slot: "Asterisk",
      overridesResolver: (e, t) => t.asterisk,
    })(({ theme: e }) => ({
      [`&.${Pa.error}`]: { color: (e.vars || e).palette.error.main },
    })),
    LN = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiFormLabel" }),
        { children: r, className: o, component: i = "label" } = n,
        a = re(n, _N),
        s = Sr(),
        l = Jo({
          props: n,
          muiFormControl: s,
          states: [
            "color",
            "required",
            "focused",
            "disabled",
            "error",
            "filled",
          ],
        }),
        u = E({}, n, {
          color: l.color || "primary",
          component: i,
          disabled: l.disabled,
          error: l.error,
          filled: l.filled,
          focused: l.focused,
          required: l.required,
        }),
        d = IN(u);
      return de(
        $N,
        E({ as: i, ownerState: u, className: ue(d.root, o), ref: t }, a, {
          children: [
            r,
            l.required &&
              de(MN, {
                ownerState: u,
                "aria-hidden": !0,
                className: d.asterisk,
                children: ["\u2009", "*"],
              }),
          ],
        }),
      );
    }),
    FN = LN,
    BN = k.createContext(),
    Ky = BN;
  function jN(e) {
    return be("MuiGrid", e);
  }
  const zN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    UN = ["column-reverse", "column", "row-reverse", "row"],
    DN = ["nowrap", "wrap-reverse", "wrap"],
    _a = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    WN = we("MuiGrid", [
      "root",
      "container",
      "item",
      "zeroMinWidth",
      ...zN.map((e) => `spacing-xs-${e}`),
      ...UN.map((e) => `direction-xs-${e}`),
      ...DN.map((e) => `wrap-xs-${e}`),
      ..._a.map((e) => `grid-xs-${e}`),
      ..._a.map((e) => `grid-sm-${e}`),
      ..._a.map((e) => `grid-md-${e}`),
      ..._a.map((e) => `grid-lg-${e}`),
      ..._a.map((e) => `grid-xl-${e}`),
    ]),
    Ia = WN,
    VN = [
      "className",
      "columns",
      "columnSpacing",
      "component",
      "container",
      "direction",
      "item",
      "rowSpacing",
      "spacing",
      "wrap",
      "zeroMinWidth",
    ];
  function ti(e) {
    const t = parseFloat(e);
    return `${t}${String(e).replace(String(t), "") || "px"}`;
  }
  function HN({ theme: e, ownerState: t }) {
    let n;
    return e.breakpoints.keys.reduce((r, o) => {
      let i = {};
      if ((t[o] && (n = t[o]), !n)) return r;
      if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
      else if (n === "auto")
        i = {
          flexBasis: "auto",
          flexGrow: 0,
          flexShrink: 0,
          maxWidth: "none",
          width: "auto",
        };
      else {
        const a = Xl({ values: t.columns, breakpoints: e.breakpoints.values }),
          s = typeof a == "object" ? a[o] : a;
        if (s == null) return r;
        const l = `${Math.round((n / s) * 1e8) / 1e6}%`;
        let u = {};
        if (t.container && t.item && t.columnSpacing !== 0) {
          const d = e.spacing(t.columnSpacing);
          if (d !== "0px") {
            const f = `calc(${l} + ${ti(d)})`;
            u = { flexBasis: f, maxWidth: f };
          }
        }
        i = E({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
      }
      return (
        e.breakpoints.values[o] === 0
          ? Object.assign(r, i)
          : (r[e.breakpoints.up(o)] = i),
        r
      );
    }, {});
  }
  function qN({ theme: e, ownerState: t }) {
    const n = Xl({ values: t.direction, breakpoints: e.breakpoints.values });
    return nn({ theme: e }, n, (r) => {
      const o = { flexDirection: r };
      return (
        r.indexOf("column") === 0 &&
          (o[`& > .${Ia.item}`] = { maxWidth: "none" }),
        o
      );
    });
  }
  function Yy({ breakpoints: e, values: t }) {
    let n = "";
    Object.keys(t).forEach((o) => {
      n === "" && t[o] !== 0 && (n = o);
    });
    const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
    return r.slice(0, r.indexOf(n));
  }
  function GN({ theme: e, ownerState: t }) {
    const { container: n, rowSpacing: r } = t;
    let o = {};
    if (n && r !== 0) {
      const i = Xl({ values: r, breakpoints: e.breakpoints.values });
      let a;
      typeof i == "object" &&
        (a = Yy({ breakpoints: e.breakpoints.values, values: i })),
        (o = nn({ theme: e }, i, (s, l) => {
          var u;
          const d = e.spacing(s);
          return d !== "0px"
            ? {
                marginTop: `-${ti(d)}`,
                [`& > .${Ia.item}`]: { paddingTop: ti(d) },
              }
            : (u = a) != null && u.includes(l)
            ? {}
            : { marginTop: 0, [`& > .${Ia.item}`]: { paddingTop: 0 } };
        }));
    }
    return o;
  }
  function KN({ theme: e, ownerState: t }) {
    const { container: n, columnSpacing: r } = t;
    let o = {};
    if (n && r !== 0) {
      const i = Xl({ values: r, breakpoints: e.breakpoints.values });
      let a;
      typeof i == "object" &&
        (a = Yy({ breakpoints: e.breakpoints.values, values: i })),
        (o = nn({ theme: e }, i, (s, l) => {
          var u;
          const d = e.spacing(s);
          return d !== "0px"
            ? {
                width: `calc(100% + ${ti(d)})`,
                marginLeft: `-${ti(d)}`,
                [`& > .${Ia.item}`]: { paddingLeft: ti(d) },
              }
            : (u = a) != null && u.includes(l)
            ? {}
            : {
                width: "100%",
                marginLeft: 0,
                [`& > .${Ia.item}`]: { paddingLeft: 0 },
              };
        }));
    }
    return o;
  }
  function YN(e, t, n = {}) {
    if (!e || e <= 0) return [];
    if (
      (typeof e == "string" && !Number.isNaN(Number(e))) ||
      typeof e == "number"
    )
      return [n[`spacing-xs-${String(e)}`]];
    const r = [];
    return (
      t.forEach((o) => {
        const i = e[o];
        Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
      }),
      r
    );
  }
  const XN = ie("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        {
          container: r,
          direction: o,
          item: i,
          spacing: a,
          wrap: s,
          zeroMinWidth: l,
          breakpoints: u,
        } = n;
      let d = [];
      r && (d = YN(a, u, t));
      const f = [];
      return (
        u.forEach((h) => {
          const b = n[h];
          b && f.push(t[`grid-${h}-${String(b)}`]);
        }),
        [
          t.root,
          r && t.container,
          i && t.item,
          l && t.zeroMinWidth,
          ...d,
          o !== "row" && t[`direction-xs-${String(o)}`],
          s !== "wrap" && t[`wrap-xs-${String(s)}`],
          ...f,
        ]
      );
    },
  })(
    ({ ownerState: e }) =>
      E(
        { boxSizing: "border-box" },
        e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
        e.item && { margin: 0 },
        e.zeroMinWidth && { minWidth: 0 },
        e.wrap !== "wrap" && { flexWrap: e.wrap },
      ),
    qN,
    GN,
    KN,
    HN,
  );
  function ZN(e, t) {
    if (!e || e <= 0) return [];
    if (
      (typeof e == "string" && !Number.isNaN(Number(e))) ||
      typeof e == "number"
    )
      return [`spacing-xs-${String(e)}`];
    const n = [];
    return (
      t.forEach((r) => {
        const o = e[r];
        if (Number(o) > 0) {
          const i = `spacing-${r}-${String(o)}`;
          n.push(i);
        }
      }),
      n
    );
  }
  const QN = (e) => {
      const {
        classes: t,
        container: n,
        direction: r,
        item: o,
        spacing: i,
        wrap: a,
        zeroMinWidth: s,
        breakpoints: l,
      } = e;
      let u = [];
      n && (u = ZN(i, l));
      const d = [];
      l.forEach((h) => {
        const b = e[h];
        b && d.push(`grid-${h}-${String(b)}`);
      });
      const f = {
        root: [
          "root",
          n && "container",
          o && "item",
          s && "zeroMinWidth",
          ...u,
          r !== "row" && `direction-xs-${String(r)}`,
          a !== "wrap" && `wrap-xs-${String(a)}`,
          ...d,
        ],
      };
      return Se(f, jN, t);
    },
    JN = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiGrid" }),
        { breakpoints: r } = Na(),
        o = ip(n),
        {
          className: i,
          columns: a,
          columnSpacing: s,
          component: l = "div",
          container: u = !1,
          direction: d = "row",
          item: f = !1,
          rowSpacing: h,
          spacing: b = 0,
          wrap: g = "wrap",
          zeroMinWidth: x = !1,
        } = o,
        R = re(o, VN),
        y = h || b,
        m = s || b,
        v = k.useContext(Ky),
        S = u ? a || 12 : v,
        C = {},
        N = E({}, R);
      r.keys.forEach((I) => {
        R[I] != null && ((C[I] = R[I]), delete N[I]);
      });
      const T = E(
          {},
          o,
          {
            columns: S,
            container: u,
            direction: d,
            item: f,
            rowSpacing: y,
            columnSpacing: m,
            wrap: g,
            zeroMinWidth: x,
            spacing: b,
          },
          C,
          { breakpoints: r.keys },
        ),
        _ = QN(T);
      return A(Ky.Provider, {
        value: S,
        children: A(
          XN,
          E({ ownerState: T, className: ue(_.root, i), as: l, ref: t }, N),
        ),
      });
    }),
    Sp = JN,
    eT = [
      "addEndListener",
      "appear",
      "children",
      "easing",
      "in",
      "onEnter",
      "onEntered",
      "onEntering",
      "onExit",
      "onExited",
      "onExiting",
      "style",
      "timeout",
      "TransitionComponent",
    ];
  function xp(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  const tT = {
      entering: { opacity: 1, transform: xp(1) },
      entered: { opacity: 1, transform: "none" },
    },
    kp =
      typeof navigator < "u" &&
      /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
      /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    Xy = k.forwardRef(function (e, t) {
      const {
          addEndListener: n,
          appear: r = !0,
          children: o,
          easing: i,
          in: a,
          onEnter: s,
          onEntered: l,
          onEntering: u,
          onExit: d,
          onExited: f,
          onExiting: h,
          style: b,
          timeout: g = "auto",
          TransitionComponent: x = Py,
        } = e,
        R = re(e, eT),
        y = k.useRef(),
        m = k.useRef(),
        v = Na(),
        S = k.useRef(null),
        C = St(S, o.ref, t),
        N = (D) => (Y) => {
          if (D) {
            const Q = S.current;
            Y === void 0 ? D(Q) : D(Q, Y);
          }
        },
        T = N(u),
        _ = N((D, Y) => {
          _y(D);
          const {
            duration: Q,
            delay: K,
            easing: z,
          } = pu({ style: b, timeout: g, easing: i }, { mode: "enter" });
          let F;
          g === "auto"
            ? ((F = v.transitions.getAutoHeightDuration(D.clientHeight)),
              (m.current = F))
            : (F = Q),
            (D.style.transition = [
              v.transitions.create("opacity", { duration: F, delay: K }),
              v.transitions.create("transform", {
                duration: kp ? F : F * 0.666,
                delay: K,
                easing: z,
              }),
            ].join(",")),
            s && s(D, Y);
        }),
        I = N(l),
        j = N(h),
        H = N((D) => {
          const {
            duration: Y,
            delay: Q,
            easing: K,
          } = pu({ style: b, timeout: g, easing: i }, { mode: "exit" });
          let z;
          g === "auto"
            ? ((z = v.transitions.getAutoHeightDuration(D.clientHeight)),
              (m.current = z))
            : (z = Y),
            (D.style.transition = [
              v.transitions.create("opacity", { duration: z, delay: Q }),
              v.transitions.create("transform", {
                duration: kp ? z : z * 0.666,
                delay: kp ? Q : Q || z * 0.333,
                easing: K,
              }),
            ].join(",")),
            (D.style.opacity = 0),
            (D.style.transform = xp(0.75)),
            d && d(D);
        }),
        V = N(f),
        Z = (D) => {
          g === "auto" && (y.current = setTimeout(D, m.current || 0)),
            n && n(S.current, D);
        };
      return (
        k.useEffect(
          () => () => {
            clearTimeout(y.current);
          },
          [],
        ),
        A(
          x,
          E(
            {
              appear: r,
              in: a,
              nodeRef: S,
              onEnter: _,
              onEntered: I,
              onEntering: T,
              onExit: H,
              onExited: V,
              onExiting: j,
              addEndListener: Z,
              timeout: g === "auto" ? null : g,
            },
            R,
            {
              children: (D, Y) =>
                k.cloneElement(
                  o,
                  E(
                    {
                      style: E(
                        {
                          opacity: 0,
                          transform: xp(0.75),
                          visibility: D === "exited" && !a ? "hidden" : void 0,
                        },
                        tT[D],
                        b,
                        o.props.style,
                      ),
                      ref: C,
                    },
                    Y,
                  ),
                ),
            },
          ),
        )
      );
    });
  Xy.muiSupportAuto = !0;
  const nT = Xy,
    rT = [
      "disableUnderline",
      "components",
      "componentsProps",
      "fullWidth",
      "inputComponent",
      "multiline",
      "slotProps",
      "slots",
      "type",
    ],
    oT = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = Se({ root: ["root", !n && "underline"], input: ["input"] }, i4, t);
      return E({}, t, r);
    },
    iT = ie(Su, {
      shouldForwardProp: (e) => Pn(e) || e === "classes",
      name: "MuiInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...bu(e, t), !n.disableUnderline && t.underline];
      },
    })(({ theme: e, ownerState: t }) => {
      let n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        E(
          { position: "relative" },
          t.formControl && { "label + &": { marginTop: 16 } },
          !t.disableUnderline && {
            "&:after": {
              borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              }),
              pointerEvents: "none",
            },
            [`&.${Ra.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
            [`&.${Ra.error}`]: {
              "&:before, &:after": {
                borderBottomColor: (e.vars || e).palette.error.main,
              },
            },
            "&:before": {
              borderBottom: `1px solid ${n}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: e.transitions.create("border-bottom-color", {
                duration: e.transitions.duration.shorter,
              }),
              pointerEvents: "none",
            },
            [`&:hover:not(.${Ra.disabled}, .${Ra.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": { borderBottom: `1px solid ${n}` },
            },
            [`&.${Ra.disabled}:before`]: { borderBottomStyle: "dotted" },
          },
        )
      );
    }),
    aT = ie(xu, { name: "MuiInput", slot: "Input", overridesResolver: wu })({}),
    Zy = k.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = xe({ props: e, name: "MuiInput" }),
        {
          disableUnderline: s,
          components: l = {},
          componentsProps: u,
          fullWidth: d = !1,
          inputComponent: f = "input",
          multiline: h = !1,
          slotProps: b,
          slots: g = {},
          type: x = "text",
        } = a,
        R = re(a, rT),
        y = oT(a),
        m = { root: { ownerState: { disableUnderline: s } } },
        v = b ?? u ? en(b ?? u, m) : m,
        S = (n = (r = g.root) != null ? r : l.Root) != null ? n : iT,
        C = (o = (i = g.input) != null ? i : l.Input) != null ? o : aT;
      return A(
        yp,
        E(
          {
            slots: { root: S, input: C },
            slotProps: v,
            fullWidth: d,
            inputComponent: f,
            multiline: h,
            ref: t,
            type: x,
          },
          R,
          { classes: y },
        ),
      );
    });
  Zy.muiName = "Input";
  const Qy = Zy;
  function sT(e) {
    return be("MuiInputAdornment", e);
  }
  const lT = we("MuiInputAdornment", [
      "root",
      "filled",
      "standard",
      "outlined",
      "positionStart",
      "positionEnd",
      "disablePointerEvents",
      "hiddenLabel",
      "sizeSmall",
    ]),
    Jy = lT;
  var eb;
  const uT = [
      "children",
      "className",
      "component",
      "disablePointerEvents",
      "disableTypography",
      "position",
      "variant",
    ],
    cT = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`position${le(n.position)}`],
        n.disablePointerEvents === !0 && t.disablePointerEvents,
        t[n.variant],
      ];
    },
    dT = (e) => {
      const {
          classes: t,
          disablePointerEvents: n,
          hiddenLabel: r,
          position: o,
          size: i,
          variant: a,
        } = e,
        s = {
          root: [
            "root",
            n && "disablePointerEvents",
            o && `position${le(o)}`,
            a,
            r && "hiddenLabel",
            i && `size${le(i)}`,
          ],
        };
      return Se(s, sT, t);
    },
    fT = ie("div", {
      name: "MuiInputAdornment",
      slot: "Root",
      overridesResolver: cT,
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          display: "flex",
          height: "0.01em",
          maxHeight: "2em",
          alignItems: "center",
          whiteSpace: "nowrap",
          color: (e.vars || e).palette.action.active,
        },
        t.variant === "filled" && {
          [`&.${Jy.positionStart}&:not(.${Jy.hiddenLabel})`]: { marginTop: 16 },
        },
        t.position === "start" && { marginRight: 8 },
        t.position === "end" && { marginLeft: 8 },
        t.disablePointerEvents === !0 && { pointerEvents: "none" },
      ),
    ),
    pT = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiInputAdornment" }),
        {
          children: r,
          className: o,
          component: i = "div",
          disablePointerEvents: a = !1,
          disableTypography: s = !1,
          position: l,
          variant: u,
        } = n,
        d = re(n, uT),
        f = Sr() || {};
      let h = u;
      u && f.variant, f && !h && (h = f.variant);
      const b = E({}, n, {
          hiddenLabel: f.hiddenLabel,
          size: f.size,
          disablePointerEvents: a,
          position: l,
          variant: h,
        }),
        g = dT(b);
      return A(yu.Provider, {
        value: null,
        children: A(
          fT,
          E({ as: i, ownerState: b, className: ue(g.root, o), ref: t }, d, {
            children:
              typeof r == "string" && !s
                ? A(on, { color: "text.secondary", children: r })
                : de(k.Fragment, {
                    children: [
                      l === "start"
                        ? eb ||
                          (eb = A("span", {
                            className: "notranslate",
                            children: "\u200B",
                          }))
                        : null,
                      r,
                    ],
                  }),
          }),
        ),
      });
    }),
    hT = pT;
  function mT(e) {
    return be("MuiInputLabel", e);
  }
  we("MuiInputLabel", [
    "root",
    "focused",
    "disabled",
    "error",
    "required",
    "asterisk",
    "formControl",
    "sizeSmall",
    "shrink",
    "animated",
    "standard",
    "filled",
    "outlined",
  ]);
  const gT = ["disableAnimation", "margin", "shrink", "variant", "className"],
    vT = (e) => {
      const {
          classes: t,
          formControl: n,
          size: r,
          shrink: o,
          disableAnimation: i,
          variant: a,
          required: s,
        } = e,
        l = Se(
          {
            root: [
              "root",
              n && "formControl",
              !i && "animated",
              o && "shrink",
              r === "small" && "sizeSmall",
              a,
            ],
            asterisk: [s && "asterisk"],
          },
          mT,
          t,
        );
      return E({}, t, l);
    },
    yT = ie(FN, {
      shouldForwardProp: (e) => Pn(e) || e === "classes",
      name: "MuiInputLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Pa.asterisk}`]: t.asterisk },
          t.root,
          n.formControl && t.formControl,
          n.size === "small" && t.sizeSmall,
          n.shrink && t.shrink,
          !n.disableAnimation && t.animated,
          t[n.variant],
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          display: "block",
          transformOrigin: "top left",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        },
        t.formControl && {
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate(0, 20px) scale(1)",
        },
        t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
        t.shrink && {
          transform: "translate(0, -1.5px) scale(0.75)",
          transformOrigin: "top left",
          maxWidth: "133%",
        },
        !t.disableAnimation && {
          transition: e.transitions.create(
            ["color", "transform", "max-width"],
            {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            },
          ),
        },
        t.variant === "filled" &&
          E(
            {
              zIndex: 1,
              pointerEvents: "none",
              transform: "translate(12px, 16px) scale(1)",
              maxWidth: "calc(100% - 24px)",
            },
            t.size === "small" && {
              transform: "translate(12px, 13px) scale(1)",
            },
            t.shrink &&
              E(
                {
                  userSelect: "none",
                  pointerEvents: "auto",
                  transform: "translate(12px, 7px) scale(0.75)",
                  maxWidth: "calc(133% - 24px)",
                },
                t.size === "small" && {
                  transform: "translate(12px, 4px) scale(0.75)",
                },
              ),
          ),
        t.variant === "outlined" &&
          E(
            {
              zIndex: 1,
              pointerEvents: "none",
              transform: "translate(14px, 16px) scale(1)",
              maxWidth: "calc(100% - 24px)",
            },
            t.size === "small" && {
              transform: "translate(14px, 9px) scale(1)",
            },
            t.shrink && {
              userSelect: "none",
              pointerEvents: "auto",
              maxWidth: "calc(133% - 24px)",
              transform: "translate(14px, -9px) scale(0.75)",
            },
          ),
      ),
    ),
    bT = k.forwardRef(function (e, t) {
      const n = xe({ name: "MuiInputLabel", props: e }),
        { disableAnimation: r = !1, shrink: o, className: i } = n,
        a = re(n, gT),
        s = Sr();
      let l = o;
      typeof l > "u" && s && (l = s.filled || s.focused || s.adornedStart);
      const u = Jo({
          props: n,
          muiFormControl: s,
          states: ["size", "variant", "required"],
        }),
        d = E({}, n, {
          disableAnimation: r,
          formControl: s,
          shrink: l,
          size: u.size,
          variant: u.variant,
          required: u.required,
        }),
        f = vT(d);
      return A(
        yT,
        E(
          { "data-shrink": l, ownerState: d, ref: t, className: ue(f.root, i) },
          a,
          { classes: f },
        ),
      );
    }),
    wT = bT,
    ST = k.createContext({}),
    Jr = ST;
  function xT(e) {
    return be("MuiList", e);
  }
  we("MuiList", ["root", "padding", "dense", "subheader"]);
  const kT = [
      "children",
      "className",
      "component",
      "dense",
      "disablePadding",
      "subheader",
    ],
    ET = (e) => {
      const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
      return Se(
        { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
        xT,
        t,
      );
    },
    CT = ie("ul", {
      name: "MuiList",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          !n.disablePadding && t.padding,
          n.dense && t.dense,
          n.subheader && t.subheader,
        ];
      },
    })(({ ownerState: e }) =>
      E(
        { listStyle: "none", margin: 0, padding: 0, position: "relative" },
        !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
        e.subheader && { paddingTop: 0 },
      ),
    ),
    OT = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiList" }),
        {
          children: r,
          className: o,
          component: i = "ul",
          dense: a = !1,
          disablePadding: s = !1,
          subheader: l,
        } = n,
        u = re(n, kT),
        d = k.useMemo(() => ({ dense: a }), [a]),
        f = E({}, n, { component: i, dense: a, disablePadding: s }),
        h = ET(f);
      return A(Jr.Provider, {
        value: d,
        children: de(
          CT,
          E({ as: i, className: ue(h.root, o), ref: t, ownerState: f }, u, {
            children: [l, r],
          }),
        ),
      });
    }),
    tb = OT;
  function NT(e) {
    return be("MuiListItem", e);
  }
  const TT = we("MuiListItem", [
      "root",
      "container",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "padding",
      "button",
      "secondaryAction",
      "selected",
    ]),
    ni = TT,
    AT = we("MuiListItemButton", [
      "root",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    RT = AT;
  function PT(e) {
    return be("MuiListItemSecondaryAction", e);
  }
  we("MuiListItemSecondaryAction", ["root", "disableGutters"]);
  const _T = ["className"],
    IT = (e) => {
      const { disableGutters: t, classes: n } = e;
      return Se({ root: ["root", t && "disableGutters"] }, PT, n);
    },
    $T = ie("div", {
      name: "MuiListItemSecondaryAction",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.disableGutters && t.disableGutters];
      },
    })(({ ownerState: e }) =>
      E(
        {
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
        },
        e.disableGutters && { right: 0 },
      ),
    ),
    nb = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiListItemSecondaryAction" }),
        { className: r } = n,
        o = re(n, _T),
        i = k.useContext(Jr),
        a = E({}, n, { disableGutters: i.disableGutters }),
        s = IT(a);
      return A($T, E({ className: ue(s.root, r), ownerState: a, ref: t }, o));
    });
  nb.muiName = "ListItemSecondaryAction";
  const Ep = nb,
    MT = ["className"],
    LT = [
      "alignItems",
      "autoFocus",
      "button",
      "children",
      "className",
      "component",
      "components",
      "componentsProps",
      "ContainerComponent",
      "ContainerProps",
      "dense",
      "disabled",
      "disableGutters",
      "disablePadding",
      "divider",
      "focusVisibleClassName",
      "secondaryAction",
      "selected",
      "slotProps",
      "slots",
    ],
    FT = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.dense && t.dense,
        n.alignItems === "flex-start" && t.alignItemsFlexStart,
        n.divider && t.divider,
        !n.disableGutters && t.gutters,
        !n.disablePadding && t.padding,
        n.button && t.button,
        n.hasSecondaryAction && t.secondaryAction,
      ];
    },
    BT = (e) => {
      const {
        alignItems: t,
        button: n,
        classes: r,
        dense: o,
        disabled: i,
        disableGutters: a,
        disablePadding: s,
        divider: l,
        hasSecondaryAction: u,
        selected: d,
      } = e;
      return Se(
        {
          root: [
            "root",
            o && "dense",
            !a && "gutters",
            !s && "padding",
            l && "divider",
            i && "disabled",
            n && "button",
            t === "flex-start" && "alignItemsFlexStart",
            u && "secondaryAction",
            d && "selected",
          ],
          container: ["container"],
        },
        NT,
        r,
      );
    },
    jT = ie("div", {
      name: "MuiListItem",
      slot: "Root",
      overridesResolver: FT,
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !t.disablePadding &&
          E(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 },
          ),
        !!t.secondaryAction && { [`& > .${RT.root}`]: { paddingRight: 48 } },
        {
          [`&.${ni.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${ni.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Gt(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${ni.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : Gt(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity,
                  ),
            },
          },
          [`&.${ni.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === "flex-start" && { alignItems: "flex-start" },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        t.button && {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${ni.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Gt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Gt(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 },
      ),
    ),
    zT = ie("li", {
      name: "MuiListItem",
      slot: "Container",
      overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    UT = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiListItem" }),
        {
          alignItems: r = "center",
          autoFocus: o = !1,
          button: i = !1,
          children: a,
          className: s,
          component: l,
          components: u = {},
          componentsProps: d = {},
          ContainerComponent: f = "li",
          ContainerProps: { className: h } = {},
          dense: b = !1,
          disabled: g = !1,
          disableGutters: x = !1,
          disablePadding: R = !1,
          divider: y = !1,
          focusVisibleClassName: m,
          secondaryAction: v,
          selected: S = !1,
          slotProps: C = {},
          slots: N = {},
        } = n,
        T = re(n.ContainerProps, MT),
        _ = re(n, LT),
        I = k.useContext(Jr),
        j = k.useMemo(
          () => ({
            dense: b || I.dense || !1,
            alignItems: r,
            disableGutters: x,
          }),
          [r, I.dense, b, x],
        ),
        H = k.useRef(null);
      wr(() => {
        o && H.current && H.current.focus();
      }, [o]);
      const V = k.Children.toArray(a),
        Z = V.length && ga(V[V.length - 1], ["ListItemSecondaryAction"]),
        D = E({}, n, {
          alignItems: r,
          autoFocus: o,
          button: i,
          dense: j.dense,
          disabled: g,
          disableGutters: x,
          disablePadding: R,
          divider: y,
          hasSecondaryAction: Z,
          selected: S,
        }),
        Y = BT(D),
        Q = St(H, t),
        K = N.root || u.Root || jT,
        z = C.root || d.root || {},
        F = E({ className: ue(Y.root, z.className, s), disabled: g }, _);
      let $ = l || "li";
      return (
        i &&
          ((F.component = l || "div"),
          (F.focusVisibleClassName = ue(ni.focusVisible, m)),
          ($ = mu)),
        Z
          ? (($ = !F.component && !l ? "div" : $),
            f === "li" &&
              ($ === "li"
                ? ($ = "div")
                : F.component === "li" && (F.component = "div")),
            A(Jr.Provider, {
              value: j,
              children: de(
                zT,
                E(
                  {
                    as: f,
                    className: ue(Y.container, h),
                    ref: Q,
                    ownerState: D,
                  },
                  T,
                  {
                    children: [
                      A(
                        K,
                        E(
                          {},
                          z,
                          !Yo(K) && {
                            as: $,
                            ownerState: E({}, D, z.ownerState),
                          },
                          F,
                          { children: V },
                        ),
                      ),
                      V.pop(),
                    ],
                  },
                ),
              ),
            }))
          : A(Jr.Provider, {
              value: j,
              children: de(
                K,
                E(
                  {},
                  z,
                  { as: $, ref: Q },
                  !Yo(K) && { ownerState: E({}, D, z.ownerState) },
                  F,
                  { children: [V, v && A(Ep, { children: v })] },
                ),
              ),
            })
      );
    }),
    rb = UT;
  function DT(e) {
    return be("MuiListItemIcon", e);
  }
  we("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
  const WT = ["className"],
    VT = (e) => {
      const { alignItems: t, classes: n } = e;
      return Se(
        { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
        DT,
        n,
      );
    },
    HT = ie("div", {
      name: "MuiListItemIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          minWidth: 56,
          color: (e.vars || e).palette.action.active,
          flexShrink: 0,
          display: "inline-flex",
        },
        t.alignItems === "flex-start" && { marginTop: 8 },
      ),
    ),
    qT = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiListItemIcon" }),
        { className: r } = n,
        o = re(n, WT),
        i = k.useContext(Jr),
        a = E({}, n, { alignItems: i.alignItems }),
        s = VT(a);
      return A(HT, E({ className: ue(s.root, r), ownerState: a, ref: t }, o));
    }),
    GT = qT;
  function KT(e) {
    return be("MuiListItemText", e);
  }
  const YT = we("MuiListItemText", [
      "root",
      "multiline",
      "dense",
      "inset",
      "primary",
      "secondary",
    ]),
    ob = YT,
    XT = [
      "children",
      "className",
      "disableTypography",
      "inset",
      "primary",
      "primaryTypographyProps",
      "secondary",
      "secondaryTypographyProps",
    ],
    ZT = (e) => {
      const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
      return Se(
        {
          root: ["root", n && "inset", i && "dense", r && o && "multiline"],
          primary: ["primary"],
          secondary: ["secondary"],
        },
        KT,
        t,
      );
    },
    QT = ie("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${ob.primary}`]: t.primary },
          { [`& .${ob.secondary}`]: t.secondary },
          t.root,
          n.inset && t.inset,
          n.primary && n.secondary && t.multiline,
          n.dense && t.dense,
        ];
      },
    })(({ ownerState: e }) =>
      E(
        { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
        e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
        e.inset && { paddingLeft: 56 },
      ),
    ),
    JT = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiListItemText" }),
        {
          children: r,
          className: o,
          disableTypography: i = !1,
          inset: a = !1,
          primary: s,
          primaryTypographyProps: l,
          secondary: u,
          secondaryTypographyProps: d,
        } = n,
        f = re(n, XT),
        { dense: h } = k.useContext(Jr);
      let b = s ?? r,
        g = u;
      const x = E({}, n, {
          disableTypography: i,
          inset: a,
          primary: !!b,
          secondary: !!g,
          dense: h,
        }),
        R = ZT(x);
      return (
        b != null &&
          b.type !== on &&
          !i &&
          (b = A(
            on,
            E(
              {
                variant: h ? "body2" : "body1",
                className: R.primary,
                component: l != null && l.variant ? void 0 : "span",
                display: "block",
              },
              l,
              { children: b },
            ),
          )),
        g != null &&
          g.type !== on &&
          !i &&
          (g = A(
            on,
            E(
              {
                variant: "body2",
                className: R.secondary,
                color: "text.secondary",
                display: "block",
              },
              d,
              { children: g },
            ),
          )),
        de(
          QT,
          E({ className: ue(R.root, o), ownerState: x, ref: t }, f, {
            children: [b, g],
          }),
        )
      );
    }),
    Cu = JT,
    eA = [
      "actions",
      "autoFocus",
      "autoFocusItem",
      "children",
      "className",
      "disabledItemsFocusable",
      "disableListWrap",
      "onKeyDown",
      "variant",
    ];
  function Cp(e, t, n) {
    return e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
      ? null
      : e.firstChild;
  }
  function ib(e, t, n) {
    return e === t
      ? n
        ? e.firstChild
        : e.lastChild
      : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
      ? null
      : e.lastChild;
  }
  function ab(e, t) {
    if (t === void 0) return !0;
    let n = e.innerText;
    return (
      n === void 0 && (n = e.textContent),
      (n = n.trim().toLowerCase()),
      n.length === 0
        ? !1
        : t.repeating
        ? n[0] === t.keys[0]
        : n.indexOf(t.keys.join("")) === 0
    );
  }
  function $a(e, t, n, r, o, i) {
    let a = !1,
      s = o(e, t, t ? n : !1);
    for (; s; ) {
      if (s === e.firstChild) {
        if (a) return !1;
        a = !0;
      }
      const l = r
        ? !1
        : s.disabled || s.getAttribute("aria-disabled") === "true";
      if (!s.hasAttribute("tabindex") || !ab(s, i) || l) s = o(e, s, n);
      else return s.focus(), !0;
    }
    return !1;
  }
  const tA = k.forwardRef(function (e, t) {
      const {
          actions: n,
          autoFocus: r = !1,
          autoFocusItem: o = !1,
          children: i,
          className: a,
          disabledItemsFocusable: s = !1,
          disableListWrap: l = !1,
          onKeyDown: u,
          variant: d = "selectedMenu",
        } = e,
        f = re(e, eA),
        h = k.useRef(null),
        b = k.useRef({
          keys: [],
          repeating: !0,
          previousKeyMatched: !0,
          lastTime: null,
        });
      wr(() => {
        r && h.current.focus();
      }, [r]),
        k.useImperativeHandle(
          n,
          () => ({
            adjustStyleForScrollbar: (m, v) => {
              const S = !h.current.style.width;
              if (m.clientHeight < h.current.clientHeight && S) {
                const C = `${Ov(It(m))}px`;
                (h.current.style[
                  v.direction === "rtl" ? "paddingLeft" : "paddingRight"
                ] = C),
                  (h.current.style.width = `calc(100% + ${C})`);
              }
              return h.current;
            },
          }),
          [],
        );
      const g = (m) => {
          const v = h.current,
            S = m.key,
            C = It(v).activeElement;
          if (S === "ArrowDown") m.preventDefault(), $a(v, C, l, s, Cp);
          else if (S === "ArrowUp") m.preventDefault(), $a(v, C, l, s, ib);
          else if (S === "Home") m.preventDefault(), $a(v, null, l, s, Cp);
          else if (S === "End") m.preventDefault(), $a(v, null, l, s, ib);
          else if (S.length === 1) {
            const N = b.current,
              T = S.toLowerCase(),
              _ = performance.now();
            N.keys.length > 0 &&
              (_ - N.lastTime > 500
                ? ((N.keys = []),
                  (N.repeating = !0),
                  (N.previousKeyMatched = !0))
                : N.repeating && T !== N.keys[0] && (N.repeating = !1)),
              (N.lastTime = _),
              N.keys.push(T);
            const I = C && !N.repeating && ab(C, N);
            N.previousKeyMatched && (I || $a(v, C, !1, s, Cp, N))
              ? m.preventDefault()
              : (N.previousKeyMatched = !1);
          }
          u && u(m);
        },
        x = St(h, t);
      let R = -1;
      k.Children.forEach(i, (m, v) => {
        k.isValidElement(m) &&
          (m.props.disabled ||
            (((d === "selectedMenu" && m.props.selected) || R === -1) &&
              (R = v)));
      });
      const y = k.Children.map(i, (m, v) => {
        if (v === R) {
          const S = {};
          return (
            o && (S.autoFocus = !0),
            m.props.tabIndex === void 0 &&
              d === "selectedMenu" &&
              (S.tabIndex = 0),
            k.cloneElement(m, S)
          );
        }
        return m;
      });
      return A(
        tb,
        E(
          {
            role: "menu",
            ref: x,
            className: a,
            onKeyDown: g,
            tabIndex: r ? 0 : -1,
          },
          f,
          { children: y },
        ),
      );
    }),
    nA = tA;
  function rA(e) {
    return be("MuiPopover", e);
  }
  we("MuiPopover", ["root", "paper"]);
  const oA = ["onEntering"],
    iA = [
      "action",
      "anchorEl",
      "anchorOrigin",
      "anchorPosition",
      "anchorReference",
      "children",
      "className",
      "container",
      "elevation",
      "marginThreshold",
      "open",
      "PaperProps",
      "transformOrigin",
      "TransitionComponent",
      "transitionDuration",
      "TransitionProps",
    ];
  function sb(e, t) {
    let n = 0;
    return (
      typeof t == "number"
        ? (n = t)
        : t === "center"
        ? (n = e.height / 2)
        : t === "bottom" && (n = e.height),
      n
    );
  }
  function lb(e, t) {
    let n = 0;
    return (
      typeof t == "number"
        ? (n = t)
        : t === "center"
        ? (n = e.width / 2)
        : t === "right" && (n = e.width),
      n
    );
  }
  function ub(e) {
    return [e.horizontal, e.vertical]
      .map((t) => (typeof t == "number" ? `${t}px` : t))
      .join(" ");
  }
  function Op(e) {
    return typeof e == "function" ? e() : e;
  }
  const aA = (e) => {
      const { classes: t } = e;
      return Se({ root: ["root"], paper: ["paper"] }, rA, t);
    },
    sA = ie(fN, {
      name: "MuiPopover",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    lA = ie(Qo, {
      name: "MuiPopover",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({
      position: "absolute",
      overflowY: "auto",
      overflowX: "hidden",
      minWidth: 16,
      minHeight: 16,
      maxWidth: "calc(100% - 32px)",
      maxHeight: "calc(100% - 32px)",
      outline: 0,
    }),
    uA = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiPopover" }),
        {
          action: r,
          anchorEl: o,
          anchorOrigin: i = { vertical: "top", horizontal: "left" },
          anchorPosition: a,
          anchorReference: s = "anchorEl",
          children: l,
          className: u,
          container: d,
          elevation: f = 8,
          marginThreshold: h = 16,
          open: b,
          PaperProps: g = {},
          transformOrigin: x = { vertical: "top", horizontal: "left" },
          TransitionComponent: R = nT,
          transitionDuration: y = "auto",
          TransitionProps: { onEntering: m } = {},
        } = n,
        v = re(n.TransitionProps, oA),
        S = re(n, iA),
        C = k.useRef(),
        N = St(C, g.ref),
        T = E({}, n, {
          anchorOrigin: i,
          anchorReference: s,
          elevation: f,
          marginThreshold: h,
          PaperProps: g,
          transformOrigin: x,
          TransitionComponent: R,
          transitionDuration: y,
          TransitionProps: v,
        }),
        _ = aA(T),
        I = k.useCallback(() => {
          if (s === "anchorPosition") return a;
          const F = Op(o),
            $ = (
              F && F.nodeType === 1 ? F : It(C.current).body
            ).getBoundingClientRect();
          return {
            top: $.top + sb($, i.vertical),
            left: $.left + lb($, i.horizontal),
          };
        }, [o, i.horizontal, i.vertical, a, s]),
        j = k.useCallback(
          (F) => ({
            vertical: sb(F, x.vertical),
            horizontal: lb(F, x.horizontal),
          }),
          [x.horizontal, x.vertical],
        ),
        H = k.useCallback(
          (F) => {
            const $ = { width: F.offsetWidth, height: F.offsetHeight },
              O = j($);
            if (s === "none")
              return { top: null, left: null, transformOrigin: ub(O) };
            const L = I();
            let B = L.top - O.vertical,
              W = L.left - O.horizontal;
            const X = B + $.height,
              J = W + $.width,
              ae = br(Op(o)),
              oe = ae.innerHeight - h,
              ce = ae.innerWidth - h;
            if (B < h) {
              const ne = B - h;
              (B -= ne), (O.vertical += ne);
            } else if (X > oe) {
              const ne = X - oe;
              (B -= ne), (O.vertical += ne);
            }
            if (W < h) {
              const ne = W - h;
              (W -= ne), (O.horizontal += ne);
            } else if (J > ce) {
              const ne = J - ce;
              (W -= ne), (O.horizontal += ne);
            }
            return {
              top: `${Math.round(B)}px`,
              left: `${Math.round(W)}px`,
              transformOrigin: ub(O),
            };
          },
          [o, s, I, j, h],
        ),
        [V, Z] = k.useState(b),
        D = k.useCallback(() => {
          const F = C.current;
          if (!F) return;
          const $ = H(F);
          $.top !== null && (F.style.top = $.top),
            $.left !== null && (F.style.left = $.left),
            (F.style.transformOrigin = $.transformOrigin),
            Z(!0);
        }, [H]),
        Y = (F, $) => {
          m && m(F, $), D();
        },
        Q = () => {
          Z(!1);
        };
      k.useEffect(() => {
        b && D();
      }),
        k.useImperativeHandle(
          r,
          () =>
            b
              ? {
                  updatePosition: () => {
                    D();
                  },
                }
              : null,
          [b, D],
        ),
        k.useEffect(() => {
          if (!b) return;
          const F = $f(() => {
              D();
            }),
            $ = br(o);
          return (
            $.addEventListener("resize", F),
            () => {
              F.clear(), $.removeEventListener("resize", F);
            }
          );
        }, [o, b, D]);
      let K = y;
      y === "auto" && !R.muiSupportAuto && (K = void 0);
      const z = d || (o ? It(Op(o)).body : void 0);
      return A(
        sA,
        E(
          {
            BackdropProps: { invisible: !0 },
            className: ue(_.root, u),
            container: z,
            open: b,
            ref: t,
            ownerState: T,
          },
          S,
          {
            children: A(
              R,
              E(
                { appear: !0, in: b, onEntering: Y, onExited: Q, timeout: K },
                v,
                {
                  children: A(
                    lA,
                    E(
                      { elevation: f },
                      g,
                      { ref: N, className: ue(_.paper, g.className) },
                      V ? void 0 : { style: E({}, g.style, { opacity: 0 }) },
                      { ownerState: T, children: l },
                    ),
                  ),
                },
              ),
            ),
          },
        ),
      );
    }),
    cA = uA;
  function dA(e) {
    return be("MuiMenu", e);
  }
  we("MuiMenu", ["root", "paper", "list"]);
  const fA = ["onEntering"],
    pA = [
      "autoFocus",
      "children",
      "disableAutoFocusItem",
      "MenuListProps",
      "onClose",
      "open",
      "PaperProps",
      "PopoverClasses",
      "transitionDuration",
      "TransitionProps",
      "variant",
    ],
    hA = { vertical: "top", horizontal: "right" },
    mA = { vertical: "top", horizontal: "left" },
    gA = (e) => {
      const { classes: t } = e;
      return Se({ root: ["root"], paper: ["paper"], list: ["list"] }, dA, t);
    },
    vA = ie(cA, {
      shouldForwardProp: (e) => Pn(e) || e === "classes",
      name: "MuiMenu",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    yA = ie(Qo, {
      name: "MuiMenu",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    bA = ie(nA, {
      name: "MuiMenu",
      slot: "List",
      overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    wA = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiMenu" }),
        {
          autoFocus: r = !0,
          children: o,
          disableAutoFocusItem: i = !1,
          MenuListProps: a = {},
          onClose: s,
          open: l,
          PaperProps: u = {},
          PopoverClasses: d,
          transitionDuration: f = "auto",
          TransitionProps: { onEntering: h } = {},
          variant: b = "selectedMenu",
        } = n,
        g = re(n.TransitionProps, fA),
        x = re(n, pA),
        R = Na(),
        y = R.direction === "rtl",
        m = E({}, n, {
          autoFocus: r,
          disableAutoFocusItem: i,
          MenuListProps: a,
          onEntering: h,
          PaperProps: u,
          transitionDuration: f,
          TransitionProps: g,
          variant: b,
        }),
        v = gA(m),
        S = r && !i && l,
        C = k.useRef(null),
        N = (I, j) => {
          C.current && C.current.adjustStyleForScrollbar(I, R), h && h(I, j);
        },
        T = (I) => {
          I.key === "Tab" && (I.preventDefault(), s && s(I, "tabKeyDown"));
        };
      let _ = -1;
      return (
        k.Children.map(o, (I, j) => {
          k.isValidElement(I) &&
            (I.props.disabled ||
              (((b === "selectedMenu" && I.props.selected) || _ === -1) &&
                (_ = j)));
        }),
        A(
          vA,
          E(
            {
              onClose: s,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: y ? "right" : "left",
              },
              transformOrigin: y ? hA : mA,
              PaperProps: E({ component: yA }, u, {
                classes: E({}, u.classes, { root: v.paper }),
              }),
              className: v.root,
              open: l,
              ref: t,
              transitionDuration: f,
              TransitionProps: E({ onEntering: N }, g),
              ownerState: m,
            },
            x,
            {
              classes: d,
              children: A(
                bA,
                E(
                  {
                    onKeyDown: T,
                    actions: C,
                    autoFocus: r && (_ === -1 || i),
                    autoFocusItem: S,
                    variant: b,
                  },
                  a,
                  { className: ue(v.list, a.className), children: o },
                ),
              ),
            },
          ),
        )
      );
    }),
    SA = wA;
  function xA(e) {
    return be("MuiNativeSelect", e);
  }
  const kA = we("MuiNativeSelect", [
      "root",
      "select",
      "multiple",
      "filled",
      "outlined",
      "standard",
      "disabled",
      "icon",
      "iconOpen",
      "iconFilled",
      "iconOutlined",
      "iconStandard",
      "nativeInput",
    ]),
    Np = kA,
    EA = ["className", "disabled", "IconComponent", "inputRef", "variant"],
    CA = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${le(n)}`, i && "iconOpen", r && "disabled"],
        };
      return Se(a, xA, t);
    },
    cb = ({ ownerState: e, theme: t }) =>
      E(
        {
          MozAppearance: "none",
          WebkitAppearance: "none",
          userSelect: "none",
          borderRadius: 0,
          cursor: "pointer",
          "&:focus": E(
            {},
            t.vars
              ? {
                  backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
                }
              : {
                  backgroundColor:
                    t.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.05)"
                      : "rgba(255, 255, 255, 0.05)",
                },
            { borderRadius: 0 },
          ),
          "&::-ms-expand": { display: "none" },
          [`&.${Np.disabled}`]: { cursor: "default" },
          "&[multiple]": { height: "auto" },
          "&:not([multiple]) option, &:not([multiple]) optgroup": {
            backgroundColor: (t.vars || t).palette.background.paper,
          },
          "&&&": { paddingRight: 24, minWidth: 16 },
        },
        e.variant === "filled" && { "&&&": { paddingRight: 32 } },
        e.variant === "outlined" && {
          borderRadius: (t.vars || t).shape.borderRadius,
          "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      ),
    OA = ie("select", {
      name: "MuiNativeSelect",
      slot: "Select",
      shouldForwardProp: Pn,
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.select, t[n.variant], { [`&.${Np.multiple}`]: t.multiple }];
      },
    })(cb),
    db = ({ ownerState: e, theme: t }) =>
      E(
        {
          position: "absolute",
          right: 0,
          top: "calc(50% - .5em)",
          pointerEvents: "none",
          color: (t.vars || t).palette.action.active,
          [`&.${Np.disabled}`]: {
            color: (t.vars || t).palette.action.disabled,
          },
        },
        e.open && { transform: "rotate(180deg)" },
        e.variant === "filled" && { right: 7 },
        e.variant === "outlined" && { right: 7 },
      ),
    NA = ie("svg", {
      name: "MuiNativeSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${le(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })(db),
    TA = k.forwardRef(function (e, t) {
      const {
          className: n,
          disabled: r,
          IconComponent: o,
          inputRef: i,
          variant: a = "standard",
        } = e,
        s = re(e, EA),
        l = E({}, e, { disabled: r, variant: a }),
        u = CA(l);
      return de(k.Fragment, {
        children: [
          A(
            OA,
            E(
              {
                ownerState: l,
                className: ue(u.select, n),
                disabled: r,
                ref: i || t,
              },
              s,
            ),
          ),
          e.multiple
            ? null
            : A(NA, { as: o, ownerState: l, className: u.icon }),
        ],
      });
    }),
    AA = TA;
  var fb;
  const RA = ["children", "classes", "className", "label", "notched"],
    PA = ie("fieldset")({
      textAlign: "left",
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden",
      minWidth: "0%",
    }),
    _A = ie("legend")(({ ownerState: e, theme: t }) =>
      E(
        { float: "unset", width: "auto", overflow: "hidden" },
        !e.withLabel && {
          padding: 0,
          lineHeight: "11px",
          transition: t.transitions.create("width", {
            duration: 150,
            easing: t.transitions.easing.easeOut,
          }),
        },
        e.withLabel &&
          E(
            {
              display: "block",
              padding: 0,
              height: 11,
              fontSize: "0.75em",
              visibility: "hidden",
              maxWidth: 0.01,
              transition: t.transitions.create("max-width", {
                duration: 50,
                easing: t.transitions.easing.easeOut,
              }),
              whiteSpace: "nowrap",
              "& > span": {
                paddingLeft: 5,
                paddingRight: 5,
                display: "inline-block",
                opacity: 0,
                visibility: "visible",
              },
            },
            e.notched && {
              maxWidth: "100%",
              transition: t.transitions.create("max-width", {
                duration: 100,
                easing: t.transitions.easing.easeOut,
                delay: 50,
              }),
            },
          ),
      ),
    );
  function IA(e) {
    const { className: t, label: n, notched: r } = e,
      o = re(e, RA),
      i = n != null && n !== "",
      a = E({}, e, { notched: r, withLabel: i });
    return A(
      PA,
      E({ "aria-hidden": !0, className: t, ownerState: a }, o, {
        children: A(_A, {
          ownerState: a,
          children: i
            ? A("span", { children: n })
            : fb ||
              (fb = A("span", {
                className: "notranslate",
                children: "\u200B",
              })),
        }),
      }),
    );
  }
  const $A = [
      "components",
      "fullWidth",
      "inputComponent",
      "label",
      "multiline",
      "notched",
      "slots",
      "type",
    ],
    MA = (e) => {
      const { classes: t } = e,
        n = Se(
          {
            root: ["root"],
            notchedOutline: ["notchedOutline"],
            input: ["input"],
          },
          s4,
          t,
        );
      return E({}, t, n);
    },
    LA = ie(Su, {
      shouldForwardProp: (e) => Pn(e) || e === "classes",
      name: "MuiOutlinedInput",
      slot: "Root",
      overridesResolver: bu,
    })(({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return E(
        {
          position: "relative",
          borderRadius: (e.vars || e).shape.borderRadius,
          [`&:hover .${xr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.text.primary,
          },
          "@media (hover: none)": {
            [`&:hover .${xr.notchedOutline}`]: {
              borderColor: e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : n,
            },
          },
          [`&.${xr.focused} .${xr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette[t.color].main,
            borderWidth: 2,
          },
          [`&.${xr.error} .${xr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.error.main,
          },
          [`&.${xr.disabled} .${xr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.action.disabled,
          },
        },
        t.startAdornment && { paddingLeft: 14 },
        t.endAdornment && { paddingRight: 14 },
        t.multiline &&
          E(
            { padding: "16.5px 14px" },
            t.size === "small" && { padding: "8.5px 14px" },
          ),
      );
    }),
    FA = ie(IA, {
      name: "MuiOutlinedInput",
      slot: "NotchedOutline",
      overridesResolver: (e, t) => t.notchedOutline,
    })(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : t,
      };
    }),
    BA = ie(xu, {
      name: "MuiOutlinedInput",
      slot: "Input",
      overridesResolver: wu,
    })(({ theme: e, ownerState: t }) =>
      E(
        { padding: "16.5px 14px" },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": { borderRadius: "inherit" },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { padding: "8.5px 14px" },
        t.multiline && { padding: 0 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
      ),
    ),
    pb = k.forwardRef(function (e, t) {
      var n, r, o, i, a;
      const s = xe({ props: e, name: "MuiOutlinedInput" }),
        {
          components: l = {},
          fullWidth: u = !1,
          inputComponent: d = "input",
          label: f,
          multiline: h = !1,
          notched: b,
          slots: g = {},
          type: x = "text",
        } = s,
        R = re(s, $A),
        y = MA(s),
        m = Sr(),
        v = Jo({ props: s, muiFormControl: m, states: ["required"] }),
        S = E({}, s, {
          color: v.color || "primary",
          disabled: v.disabled,
          error: v.error,
          focused: v.focused,
          formControl: m,
          fullWidth: u,
          hiddenLabel: v.hiddenLabel,
          multiline: h,
          size: v.size,
          type: x,
        }),
        C = (n = (r = g.root) != null ? r : l.Root) != null ? n : LA,
        N = (o = (i = g.input) != null ? i : l.Input) != null ? o : BA;
      return A(
        yp,
        E(
          {
            slots: { root: C, input: N },
            renderSuffix: (T) =>
              A(FA, {
                ownerState: S,
                className: y.notchedOutline,
                label:
                  f != null && f !== "" && v.required
                    ? a || (a = de(k.Fragment, { children: [f, "\xA0", "*"] }))
                    : f,
                notched:
                  typeof b < "u"
                    ? b
                    : !!(T.startAdornment || T.filled || T.focused),
              }),
            fullWidth: u,
            inputComponent: d,
            multiline: h,
            ref: t,
            type: x,
          },
          R,
          { classes: E({}, y, { notchedOutline: null }) },
        ),
      );
    });
  pb.muiName = "Input";
  const hb = pb;
  function jA(e) {
    return be("MuiSelect", e);
  }
  const zA = we("MuiSelect", [
      "select",
      "multiple",
      "filled",
      "outlined",
      "standard",
      "disabled",
      "focused",
      "icon",
      "iconOpen",
      "iconFilled",
      "iconOutlined",
      "iconStandard",
      "nativeInput",
    ]),
    Ou = zA;
  var mb;
  const UA = [
      "aria-describedby",
      "aria-label",
      "autoFocus",
      "autoWidth",
      "children",
      "className",
      "defaultOpen",
      "defaultValue",
      "disabled",
      "displayEmpty",
      "IconComponent",
      "inputRef",
      "labelId",
      "MenuProps",
      "multiple",
      "name",
      "onBlur",
      "onChange",
      "onClose",
      "onFocus",
      "onOpen",
      "open",
      "readOnly",
      "renderValue",
      "SelectDisplayProps",
      "tabIndex",
      "type",
      "value",
      "variant",
    ],
    DA = ie("div", {
      name: "MuiSelect",
      slot: "Select",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`&.${Ou.select}`]: t.select },
          { [`&.${Ou.select}`]: t[n.variant] },
          { [`&.${Ou.multiple}`]: t.multiple },
        ];
      },
    })(cb, {
      [`&.${Ou.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }),
    WA = ie("svg", {
      name: "MuiSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${le(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })(db),
    VA = ie("input", {
      shouldForwardProp: (e) => JC(e) && e !== "classes",
      name: "MuiSelect",
      slot: "NativeInput",
      overridesResolver: (e, t) => t.nativeInput,
    })({
      bottom: 0,
      left: 0,
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
      width: "100%",
      boxSizing: "border-box",
    });
  function gb(e, t) {
    return typeof t == "object" && t !== null
      ? e === t
      : String(e) === String(t);
  }
  function HA(e) {
    return e == null || (typeof e == "string" && !e.trim());
  }
  const qA = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${le(n)}`, i && "iconOpen", r && "disabled"],
          nativeInput: ["nativeInput"],
        };
      return Se(a, jA, t);
    },
    GA = k.forwardRef(function (e, t) {
      const {
          "aria-describedby": n,
          "aria-label": r,
          autoFocus: o,
          autoWidth: i,
          children: a,
          className: s,
          defaultOpen: l,
          defaultValue: u,
          disabled: d,
          displayEmpty: f,
          IconComponent: h,
          inputRef: b,
          labelId: g,
          MenuProps: x = {},
          multiple: R,
          name: y,
          onBlur: m,
          onChange: v,
          onClose: S,
          onFocus: C,
          onOpen: N,
          open: T,
          readOnly: _,
          renderValue: I,
          SelectDisplayProps: j = {},
          tabIndex: H,
          value: V,
          variant: Z = "standard",
        } = e,
        D = re(e, UA),
        [Y, Q] = Al({ controlled: V, default: u, name: "Select" }),
        [K, z] = Al({ controlled: T, default: l, name: "Select" }),
        F = k.useRef(null),
        $ = k.useRef(null),
        [O, L] = k.useState(null),
        { current: B } = k.useRef(T != null),
        [W, X] = k.useState(),
        J = St(t, b),
        ae = k.useCallback((q) => {
          ($.current = q), q && L(q);
        }, []),
        oe = O == null ? void 0 : O.parentNode;
      k.useImperativeHandle(
        J,
        () => ({
          focus: () => {
            $.current.focus();
          },
          node: F.current,
          value: Y,
        }),
        [Y],
      ),
        k.useEffect(() => {
          l &&
            K &&
            O &&
            !B &&
            (X(i ? null : oe.clientWidth), $.current.focus());
        }, [O, i]),
        k.useEffect(() => {
          o && $.current.focus();
        }, [o]),
        k.useEffect(() => {
          if (!g) return;
          const q = It($.current).getElementById(g);
          if (q) {
            const Be = () => {
              getSelection().isCollapsed && $.current.focus();
            };
            return (
              q.addEventListener("click", Be),
              () => {
                q.removeEventListener("click", Be);
              }
            );
          }
        }, [g]);
      const ce = (q, Be) => {
          q ? N && N(Be) : S && S(Be),
            B || (X(i ? null : oe.clientWidth), z(q));
        },
        ne = (q) => {
          q.button === 0 && (q.preventDefault(), $.current.focus(), ce(!0, q));
        },
        ve = (q) => {
          ce(!1, q);
        },
        ke = k.Children.toArray(a),
        Ke = (q) => {
          const Be = ke.map((Ft) => Ft.props.value).indexOf(q.target.value);
          if (Be === -1) return;
          const dt = ke[Be];
          Q(dt.props.value), v && v(q, dt);
        },
        Ne = (q) => (Be) => {
          let dt;
          if (Be.currentTarget.hasAttribute("tabindex")) {
            if (R) {
              dt = Array.isArray(Y) ? Y.slice() : [];
              const Ft = Y.indexOf(q.props.value);
              Ft === -1 ? dt.push(q.props.value) : dt.splice(Ft, 1);
            } else dt = q.props.value;
            if (
              (q.props.onClick && q.props.onClick(Be), Y !== dt && (Q(dt), v))
            ) {
              const Ft = Be.nativeEvent || Be,
                Ka = new Ft.constructor(Ft.type, Ft);
              Object.defineProperty(Ka, "target", {
                writable: !0,
                value: { value: dt, name: y },
              }),
                v(Ka, q);
            }
            R || ce(!1, Be);
          }
        },
        c = (q) => {
          _ ||
            ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(q.key) !== -1 &&
              (q.preventDefault(), ce(!0, q)));
        },
        p = O !== null && K,
        w = (q) => {
          !p &&
            m &&
            (Object.defineProperty(q, "target", {
              writable: !0,
              value: { value: Y, name: y },
            }),
            m(q));
        };
      delete D["aria-invalid"];
      let P, M;
      const U = [];
      let ee = !1;
      (vp({ value: Y }) || f) && (I ? (P = I(Y)) : (ee = !0));
      const pe = ke.map((q, Be, dt) => {
        var Ft, Ka, Jw, eS;
        if (!k.isValidElement(q)) return null;
        let Or;
        if (R) {
          if (!Array.isArray(Y)) throw new Error(yr(2));
          (Or = Y.some((uo) => gb(uo, q.props.value))),
            Or && ee && U.push(q.props.children);
        } else (Or = gb(Y, q.props.value)), Or && ee && (M = q.props.children);
        if (q.props.value === void 0)
          return k.cloneElement(q, { "aria-readonly": !0, role: "option" });
        const k$ = () => {
          if (Y) return Or;
          const uo = dt.find((Ih) => {
            var tS;
            return (
              (Ih == null || (tS = Ih.props) == null ? void 0 : tS.value) !==
                void 0 && Ih.props.disabled !== !0
            );
          });
          return q === uo ? !0 : Or;
        };
        return k.cloneElement(q, {
          "aria-selected": Or ? "true" : "false",
          onClick: Ne(q),
          onKeyUp: (uo) => {
            uo.key === " " && uo.preventDefault(),
              q.props.onKeyUp && q.props.onKeyUp(uo);
          },
          role: "option",
          selected:
            ((Ft = dt[0]) == null || (Ka = Ft.props) == null
              ? void 0
              : Ka.value) === void 0 ||
            ((Jw = dt[0]) == null || (eS = Jw.props) == null
              ? void 0
              : eS.disabled) === !0
              ? k$()
              : Or,
          value: void 0,
          "data-value": q.props.value,
        });
      });
      ee &&
        (R
          ? U.length === 0
            ? (P = null)
            : (P = U.reduce(
                (q, Be, dt) => (
                  q.push(Be), dt < U.length - 1 && q.push(", "), q
                ),
                [],
              ))
          : (P = M));
      let me = W;
      !i && B && O && (me = oe.clientWidth);
      let he;
      typeof H < "u" ? (he = H) : (he = d ? null : 0);
      const Ee = j.id || (y ? `mui-component-select-${y}` : void 0),
        Le = E({}, e, { variant: Z, value: Y, open: p }),
        Ce = qA(Le);
      return de(k.Fragment, {
        children: [
          A(
            DA,
            E(
              {
                ref: ae,
                tabIndex: he,
                role: "button",
                "aria-disabled": d ? "true" : void 0,
                "aria-expanded": p ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": r,
                "aria-labelledby": [g, Ee].filter(Boolean).join(" ") || void 0,
                "aria-describedby": n,
                onKeyDown: c,
                onMouseDown: d || _ ? null : ne,
                onBlur: w,
                onFocus: C,
              },
              j,
              {
                ownerState: Le,
                className: ue(j.className, Ce.select, s),
                id: Ee,
                children: HA(P)
                  ? mb ||
                    (mb = A("span", {
                      className: "notranslate",
                      children: "\u200B",
                    }))
                  : P,
              },
            ),
          ),
          A(
            VA,
            E(
              {
                value: Array.isArray(Y) ? Y.join(",") : Y,
                name: y,
                ref: F,
                "aria-hidden": !0,
                onChange: Ke,
                tabIndex: -1,
                disabled: d,
                className: Ce.nativeInput,
                autoFocus: o,
                ownerState: Le,
              },
              D,
            ),
          ),
          A(WA, { as: h, className: Ce.icon, ownerState: Le }),
          A(
            SA,
            E(
              {
                id: `menu-${y || ""}`,
                anchorEl: oe,
                open: p,
                onClose: ve,
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformOrigin: { vertical: "top", horizontal: "center" },
              },
              x,
              {
                MenuListProps: E(
                  {
                    "aria-labelledby": g,
                    role: "listbox",
                    disableListWrap: !0,
                  },
                  x.MenuListProps,
                ),
                PaperProps: E({}, x.PaperProps, {
                  style: E(
                    { minWidth: me },
                    x.PaperProps != null ? x.PaperProps.style : null,
                  ),
                }),
                children: pe,
              },
            ),
          ),
        ],
      });
    }),
    KA = GA;
  var vb, yb;
  const YA = [
      "autoWidth",
      "children",
      "classes",
      "className",
      "defaultOpen",
      "displayEmpty",
      "IconComponent",
      "id",
      "input",
      "inputProps",
      "label",
      "labelId",
      "MenuProps",
      "multiple",
      "native",
      "onClose",
      "onOpen",
      "open",
      "renderValue",
      "SelectDisplayProps",
      "variant",
    ],
    XA = (e) => {
      const { classes: t } = e;
      return t;
    },
    Tp = {
      name: "MuiSelect",
      overridesResolver: (e, t) => t.root,
      shouldForwardProp: (e) => Pn(e) && e !== "variant",
      slot: "Root",
    },
    ZA = ie(Qy, Tp)(""),
    QA = ie(hb, Tp)(""),
    JA = ie(Hy, Tp)(""),
    bb = k.forwardRef(function (e, t) {
      const n = xe({ name: "MuiSelect", props: e }),
        {
          autoWidth: r = !1,
          children: o,
          classes: i = {},
          className: a,
          defaultOpen: s = !1,
          displayEmpty: l = !1,
          IconComponent: u = d4,
          id: d,
          input: f,
          inputProps: h,
          label: b,
          labelId: g,
          MenuProps: x,
          multiple: R = !1,
          native: y = !1,
          onClose: m,
          onOpen: v,
          open: S,
          renderValue: C,
          SelectDisplayProps: N,
          variant: T = "outlined",
        } = n,
        _ = re(n, YA),
        I = y ? AA : KA,
        j = Sr(),
        H =
          Jo({ props: n, muiFormControl: j, states: ["variant"] }).variant || T,
        V =
          f ||
          {
            standard: vb || (vb = A(ZA, {})),
            outlined: A(QA, { label: b }),
            filled: yb || (yb = A(JA, {})),
          }[H],
        Z = E({}, n, { variant: H, classes: i }),
        D = XA(Z),
        Y = St(t, V.ref);
      return A(k.Fragment, {
        children: k.cloneElement(
          V,
          E(
            {
              inputComponent: I,
              inputProps: E(
                {
                  children: o,
                  IconComponent: u,
                  variant: H,
                  type: void 0,
                  multiple: R,
                },
                y
                  ? { id: d }
                  : {
                      autoWidth: r,
                      defaultOpen: s,
                      displayEmpty: l,
                      labelId: g,
                      MenuProps: x,
                      onClose: m,
                      onOpen: v,
                      open: S,
                      renderValue: C,
                      SelectDisplayProps: E({ id: d }, N),
                    },
                h,
                { classes: h ? en(D, h.classes) : D },
                f ? f.props.inputProps : {},
              ),
            },
            R && y && H === "outlined" ? { notched: !0 } : {},
            { ref: Y, className: ue(V.props.className, a) },
            !f && { variant: H },
            _,
          ),
        ),
      });
    });
  bb.muiName = "Select";
  const eR = bb;
  function tR(e) {
    return be("MuiToolbar", e);
  }
  we("MuiToolbar", ["root", "gutters", "regular", "dense"]);
  const nR = ["className", "component", "disableGutters", "variant"],
    rR = (e) => {
      const { classes: t, disableGutters: n, variant: r } = e;
      return Se({ root: ["root", !n && "gutters", r] }, tR, t);
    },
    oR = ie("div", {
      name: "MuiToolbar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
      },
    })(
      ({ theme: e, ownerState: t }) =>
        E(
          { position: "relative", display: "flex", alignItems: "center" },
          !t.disableGutters && {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          },
          t.variant === "dense" && { minHeight: 48 },
        ),
      ({ theme: e, ownerState: t }) =>
        t.variant === "regular" && e.mixins.toolbar,
    ),
    iR = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiToolbar" }),
        {
          className: r,
          component: o = "div",
          disableGutters: i = !1,
          variant: a = "regular",
        } = n,
        s = re(n, nR),
        l = E({}, n, { component: o, disableGutters: i, variant: a }),
        u = rR(l);
      return A(
        oR,
        E({ as: o, className: ue(u.root, r), ref: t, ownerState: l }, s),
      );
    }),
    aR = iR;
  function sR(e) {
    return be("MuiTextField", e);
  }
  we("MuiTextField", ["root"]);
  const lR = [
      "autoComplete",
      "autoFocus",
      "children",
      "className",
      "color",
      "defaultValue",
      "disabled",
      "error",
      "FormHelperTextProps",
      "fullWidth",
      "helperText",
      "id",
      "InputLabelProps",
      "inputProps",
      "InputProps",
      "inputRef",
      "label",
      "maxRows",
      "minRows",
      "multiline",
      "name",
      "onBlur",
      "onChange",
      "onFocus",
      "placeholder",
      "required",
      "rows",
      "select",
      "SelectProps",
      "type",
      "value",
      "variant",
    ],
    uR = { standard: Qy, filled: Hy, outlined: hb },
    cR = (e) => {
      const { classes: t } = e;
      return Se({ root: ["root"] }, sR, t);
    },
    dR = ie(xN, {
      name: "MuiTextField",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    fR = k.forwardRef(function (e, t) {
      const n = xe({ props: e, name: "MuiTextField" }),
        {
          autoComplete: r,
          autoFocus: o = !1,
          children: i,
          className: a,
          color: s = "primary",
          defaultValue: l,
          disabled: u = !1,
          error: d = !1,
          FormHelperTextProps: f,
          fullWidth: h = !1,
          helperText: b,
          id: g,
          InputLabelProps: x,
          inputProps: R,
          InputProps: y,
          inputRef: m,
          label: v,
          maxRows: S,
          minRows: C,
          multiline: N = !1,
          name: T,
          onBlur: _,
          onChange: I,
          onFocus: j,
          placeholder: H,
          required: V = !1,
          rows: Z,
          select: D = !1,
          SelectProps: Y,
          type: Q,
          value: K,
          variant: z = "outlined",
        } = n,
        F = re(n, lR),
        $ = E({}, n, {
          autoFocus: o,
          color: s,
          disabled: u,
          error: d,
          fullWidth: h,
          multiline: N,
          required: V,
          select: D,
          variant: z,
        }),
        O = cR($),
        L = {};
      z === "outlined" &&
        (x && typeof x.shrink < "u" && (L.notched = x.shrink), (L.label = v)),
        D &&
          ((!Y || !Y.native) && (L.id = void 0),
          (L["aria-describedby"] = void 0));
      const B = kv(g),
        W = b && B ? `${B}-helper-text` : void 0,
        X = v && B ? `${B}-label` : void 0,
        J = uR[z],
        ae = A(
          J,
          E(
            {
              "aria-describedby": W,
              autoComplete: r,
              autoFocus: o,
              defaultValue: l,
              fullWidth: h,
              multiline: N,
              name: T,
              rows: Z,
              maxRows: S,
              minRows: C,
              type: Q,
              value: K,
              id: B,
              inputRef: m,
              onBlur: _,
              onChange: I,
              onFocus: j,
              placeholder: H,
              inputProps: R,
            },
            L,
            y,
          ),
        );
      return de(
        dR,
        E(
          {
            className: ue(O.root, a),
            disabled: u,
            error: d,
            fullWidth: h,
            ref: t,
            required: V,
            color: s,
            variant: z,
            ownerState: $,
          },
          F,
          {
            children: [
              v != null &&
                v !== "" &&
                A(wT, E({ htmlFor: B, id: X }, x, { children: v })),
              D
                ? A(
                    eR,
                    E(
                      {
                        "aria-describedby": W,
                        id: B,
                        labelId: X,
                        value: K,
                        input: ae,
                      },
                      Y,
                      { children: i },
                    ),
                  )
                : ae,
              b && A(AN, E({ id: W }, f, { children: b })),
            ],
          },
        ),
      );
    }),
    Nu = fR;
  function pR(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
  }
  for (
    var hR = bR,
      mR = SR,
      gR = ER,
      In = [],
      an = [],
      vR = typeof Uint8Array < "u" ? Uint8Array : Array,
      Ap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      ri = 0,
      yR = Ap.length;
    ri < yR;
    ++ri
  )
    (In[ri] = Ap[ri]), (an[Ap.charCodeAt(ri)] = ri);
  (an["-".charCodeAt(0)] = 62), (an["_".charCodeAt(0)] = 63);
  function wb(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    n === -1 && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
  }
  function bR(e) {
    var t = wb(e),
      n = t[0],
      r = t[1];
    return ((n + r) * 3) / 4 - r;
  }
  function wR(e, t, n) {
    return ((t + n) * 3) / 4 - n;
  }
  function SR(e) {
    var t,
      n = wb(e),
      r = n[0],
      o = n[1],
      i = new vR(wR(e, r, o)),
      a = 0,
      s = o > 0 ? r - 4 : r,
      l;
    for (l = 0; l < s; l += 4)
      (t =
        (an[e.charCodeAt(l)] << 18) |
        (an[e.charCodeAt(l + 1)] << 12) |
        (an[e.charCodeAt(l + 2)] << 6) |
        an[e.charCodeAt(l + 3)]),
        (i[a++] = (t >> 16) & 255),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255);
    return (
      o === 2 &&
        ((t = (an[e.charCodeAt(l)] << 2) | (an[e.charCodeAt(l + 1)] >> 4)),
        (i[a++] = t & 255)),
      o === 1 &&
        ((t =
          (an[e.charCodeAt(l)] << 10) |
          (an[e.charCodeAt(l + 1)] << 4) |
          (an[e.charCodeAt(l + 2)] >> 2)),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255)),
      i
    );
  }
  function xR(e) {
    return (
      In[(e >> 18) & 63] + In[(e >> 12) & 63] + In[(e >> 6) & 63] + In[e & 63]
    );
  }
  function kR(e, t, n) {
    for (var r, o = [], i = t; i < n; i += 3)
      (r =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        o.push(xR(r));
    return o.join("");
  }
  function ER(e) {
    for (
      var t, n = e.length, r = n % 3, o = [], i = 16383, a = 0, s = n - r;
      a < s;
      a += i
    )
      o.push(kR(e, a, a + i > s ? s : a + i));
    return (
      r === 1
        ? ((t = e[n - 1]), o.push(In[t >> 2] + In[(t << 4) & 63] + "=="))
        : r === 2 &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          o.push(In[t >> 10] + In[(t >> 4) & 63] + In[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
  var Rp = { byteLength: hR, toByteArray: mR, fromByteArray: gR },
    CR = function (e, t, n, r, o) {
      var i,
        a,
        s = o * 8 - r - 1,
        l = (1 << s) - 1,
        u = l >> 1,
        d = -7,
        f = n ? o - 1 : 0,
        h = n ? -1 : 1,
        b = e[t + f];
      for (
        f += h, i = b & ((1 << -d) - 1), b >>= -d, d += s;
        d > 0;
        i = i * 256 + e[t + f], f += h, d -= 8
      );
      for (
        a = i & ((1 << -d) - 1), i >>= -d, d += r;
        d > 0;
        a = a * 256 + e[t + f], f += h, d -= 8
      );
      if (i === 0) i = 1 - u;
      else {
        if (i === l) return a ? NaN : (b ? -1 : 1) * (1 / 0);
        (a = a + Math.pow(2, r)), (i = i - u);
      }
      return (b ? -1 : 1) * a * Math.pow(2, i - r);
    },
    OR = function (e, t, n, r, o, i) {
      var a,
        s,
        l,
        u = i * 8 - o - 1,
        d = (1 << u) - 1,
        f = d >> 1,
        h = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        b = r ? 0 : i - 1,
        g = r ? 1 : -1,
        x = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
      for (
        t = Math.abs(t),
          isNaN(t) || t === 1 / 0
            ? ((s = isNaN(t) ? 1 : 0), (a = d))
            : ((a = Math.floor(Math.log(t) / Math.LN2)),
              t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
              a + f >= 1 ? (t += h / l) : (t += h * Math.pow(2, 1 - f)),
              t * l >= 2 && (a++, (l /= 2)),
              a + f >= d
                ? ((s = 0), (a = d))
                : a + f >= 1
                ? ((s = (t * l - 1) * Math.pow(2, o)), (a = a + f))
                : ((s = t * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
        o >= 8;
        e[n + b] = s & 255, b += g, s /= 256, o -= 8
      );
      for (
        a = (a << o) | s, u += o;
        u > 0;
        e[n + b] = a & 255, b += g, a /= 256, u -= 8
      );
      e[n + b - g] |= x * 128;
    },
    oi = { read: CR, write: OR },
    Tu = pR(function (e, t) {
      var n =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
      (t.Buffer = a), (t.SlowBuffer = y), (t.INSPECT_MAX_BYTES = 50);
      var r = 2147483647;
      (t.kMaxLength = r),
        (a.TYPED_ARRAY_SUPPORT = o()),
        !a.TYPED_ARRAY_SUPPORT &&
          typeof console < "u" &&
          typeof console.error == "function" &&
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
          );
      function o() {
        try {
          var c = new Uint8Array(1),
            p = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(p, Uint8Array.prototype),
            Object.setPrototypeOf(c, p),
            c.foo() === 42
          );
        } catch {
          return !1;
        }
      }
      Object.defineProperty(a.prototype, "parent", {
        enumerable: !0,
        get: function () {
          if (a.isBuffer(this)) return this.buffer;
        },
      }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        });
      function i(c) {
        if (c > r)
          throw new RangeError(
            'The value "' + c + '" is invalid for option "size"',
          );
        var p = new Uint8Array(c);
        return Object.setPrototypeOf(p, a.prototype), p;
      }
      function a(c, p, w) {
        if (typeof c == "number") {
          if (typeof p == "string")
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return d(c);
        }
        return s(c, p, w);
      }
      a.poolSize = 8192;
      function s(c, p, w) {
        if (typeof c == "string") return f(c, p);
        if (ArrayBuffer.isView(c)) return b(c);
        if (c == null)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              babelHelpers.typeof(c),
          );
        if (
          ke(c, ArrayBuffer) ||
          (c && ke(c.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (ke(c, SharedArrayBuffer) ||
              (c && ke(c.buffer, SharedArrayBuffer))))
        )
          return g(c, p, w);
        if (typeof c == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        var P = c.valueOf && c.valueOf();
        if (P != null && P !== c) return a.from(P, p, w);
        var M = x(c);
        if (M) return M;
        if (
          typeof Symbol < "u" &&
          Symbol.toPrimitive != null &&
          typeof c[Symbol.toPrimitive] == "function"
        )
          return a.from(c[Symbol.toPrimitive]("string"), p, w);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            babelHelpers.typeof(c),
        );
      }
      (a.from = function (c, p, w) {
        return s(c, p, w);
      }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array);
      function l(c) {
        if (typeof c != "number")
          throw new TypeError('"size" argument must be of type number');
        if (c < 0)
          throw new RangeError(
            'The value "' + c + '" is invalid for option "size"',
          );
      }
      function u(c, p, w) {
        return (
          l(c),
          c <= 0
            ? i(c)
            : p !== void 0
            ? typeof w == "string"
              ? i(c).fill(p, w)
              : i(c).fill(p)
            : i(c)
        );
      }
      a.alloc = function (c, p, w) {
        return u(c, p, w);
      };
      function d(c) {
        return l(c), i(c < 0 ? 0 : R(c) | 0);
      }
      (a.allocUnsafe = function (c) {
        return d(c);
      }),
        (a.allocUnsafeSlow = function (c) {
          return d(c);
        });
      function f(c, p) {
        if (
          ((typeof p != "string" || p === "") && (p = "utf8"), !a.isEncoding(p))
        )
          throw new TypeError("Unknown encoding: " + p);
        var w = m(c, p) | 0,
          P = i(w),
          M = P.write(c, p);
        return M !== w && (P = P.slice(0, M)), P;
      }
      function h(c) {
        for (
          var p = c.length < 0 ? 0 : R(c.length) | 0, w = i(p), P = 0;
          P < p;
          P += 1
        )
          w[P] = c[P] & 255;
        return w;
      }
      function b(c) {
        if (ke(c, Uint8Array)) {
          var p = new Uint8Array(c);
          return g(p.buffer, p.byteOffset, p.byteLength);
        }
        return h(c);
      }
      function g(c, p, w) {
        if (p < 0 || c.byteLength < p)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (c.byteLength < p + (w || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var P;
        return (
          p === void 0 && w === void 0
            ? (P = new Uint8Array(c))
            : w === void 0
            ? (P = new Uint8Array(c, p))
            : (P = new Uint8Array(c, p, w)),
          Object.setPrototypeOf(P, a.prototype),
          P
        );
      }
      function x(c) {
        if (a.isBuffer(c)) {
          var p = R(c.length) | 0,
            w = i(p);
          return w.length === 0 || c.copy(w, 0, 0, p), w;
        }
        if (c.length !== void 0)
          return typeof c.length != "number" || Ke(c.length) ? i(0) : h(c);
        if (c.type === "Buffer" && Array.isArray(c.data)) return h(c.data);
      }
      function R(c) {
        if (c >= r)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r.toString(16) +
              " bytes",
          );
        return c | 0;
      }
      function y(c) {
        return +c != c && (c = 0), a.alloc(+c);
      }
      (a.isBuffer = function (c) {
        return c != null && c._isBuffer === !0 && c !== a.prototype;
      }),
        (a.compare = function (c, p) {
          if (
            (ke(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
            ke(p, Uint8Array) && (p = a.from(p, p.offset, p.byteLength)),
            !a.isBuffer(c) || !a.isBuffer(p))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (c === p) return 0;
          for (
            var w = c.length, P = p.length, M = 0, U = Math.min(w, P);
            M < U;
            ++M
          )
            if (c[M] !== p[M]) {
              (w = c[M]), (P = p[M]);
              break;
            }
          return w < P ? -1 : P < w ? 1 : 0;
        }),
        (a.isEncoding = function (c) {
          switch (String(c).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (c, p) {
          if (!Array.isArray(c))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (c.length === 0) return a.alloc(0);
          var w;
          if (p === void 0)
            for (p = 0, w = 0; w < c.length; ++w) p += c[w].length;
          var P = a.allocUnsafe(p),
            M = 0;
          for (w = 0; w < c.length; ++w) {
            var U = c[w];
            if (ke(U, Uint8Array))
              M + U.length > P.length
                ? a.from(U).copy(P, M)
                : Uint8Array.prototype.set.call(P, U, M);
            else if (a.isBuffer(U)) U.copy(P, M);
            else
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            M += U.length;
          }
          return P;
        });
      function m(c, p) {
        if (a.isBuffer(c)) return c.length;
        if (ArrayBuffer.isView(c) || ke(c, ArrayBuffer)) return c.byteLength;
        if (typeof c != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              babelHelpers.typeof(c),
          );
        var w = c.length,
          P = arguments.length > 2 && arguments[2] === !0;
        if (!P && w === 0) return 0;
        for (var M = !1; ; )
          switch (p) {
            case "ascii":
            case "latin1":
            case "binary":
              return w;
            case "utf8":
            case "utf-8":
              return ae(c).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return w * 2;
            case "hex":
              return w >>> 1;
            case "base64":
              return ne(c).length;
            default:
              if (M) return P ? -1 : ae(c).length;
              (p = ("" + p).toLowerCase()), (M = !0);
          }
      }
      a.byteLength = m;
      function v(c, p, w) {
        var P = !1;
        if (
          ((p === void 0 || p < 0) && (p = 0),
          p > this.length ||
            ((w === void 0 || w > this.length) && (w = this.length), w <= 0) ||
            ((w >>>= 0), (p >>>= 0), w <= p))
        )
          return "";
        for (c || (c = "utf8"); ; )
          switch (c) {
            case "hex":
              return z(this, p, w);
            case "utf8":
            case "utf-8":
              return Z(this, p, w);
            case "ascii":
              return Q(this, p, w);
            case "latin1":
            case "binary":
              return K(this, p, w);
            case "base64":
              return V(this, p, w);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return F(this, p, w);
            default:
              if (P) throw new TypeError("Unknown encoding: " + c);
              (c = (c + "").toLowerCase()), (P = !0);
          }
      }
      a.prototype._isBuffer = !0;
      function S(c, p, w) {
        var P = c[p];
        (c[p] = c[w]), (c[w] = P);
      }
      (a.prototype.swap16 = function () {
        var c = this.length;
        if (c % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var p = 0; p < c; p += 2) S(this, p, p + 1);
        return this;
      }),
        (a.prototype.swap32 = function () {
          var c = this.length;
          if (c % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var p = 0; p < c; p += 4)
            S(this, p, p + 3), S(this, p + 1, p + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var c = this.length;
          if (c % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var p = 0; p < c; p += 8)
            S(this, p, p + 7),
              S(this, p + 1, p + 6),
              S(this, p + 2, p + 5),
              S(this, p + 3, p + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          var c = this.length;
          return c === 0
            ? ""
            : arguments.length === 0
            ? Z(this, 0, c)
            : v.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (c) {
          if (!a.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
          return this === c ? !0 : a.compare(this, c) === 0;
        }),
        (a.prototype.inspect = function () {
          var c = "",
            p = t.INSPECT_MAX_BYTES;
          return (
            (c = this.toString("hex", 0, p)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > p && (c += " ... "),
            "<Buffer " + c + ">"
          );
        }),
        n && (a.prototype[n] = a.prototype.inspect),
        (a.prototype.compare = function (c, p, w, P, M) {
          if (
            (ke(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
            !a.isBuffer(c))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                babelHelpers.typeof(c),
            );
          if (
            (p === void 0 && (p = 0),
            w === void 0 && (w = c ? c.length : 0),
            P === void 0 && (P = 0),
            M === void 0 && (M = this.length),
            p < 0 || w > c.length || P < 0 || M > this.length)
          )
            throw new RangeError("out of range index");
          if (P >= M && p >= w) return 0;
          if (P >= M) return -1;
          if (p >= w) return 1;
          if (((p >>>= 0), (w >>>= 0), (P >>>= 0), (M >>>= 0), this === c))
            return 0;
          for (
            var U = M - P,
              ee = w - p,
              pe = Math.min(U, ee),
              me = this.slice(P, M),
              he = c.slice(p, w),
              Ee = 0;
            Ee < pe;
            ++Ee
          )
            if (me[Ee] !== he[Ee]) {
              (U = me[Ee]), (ee = he[Ee]);
              break;
            }
          return U < ee ? -1 : ee < U ? 1 : 0;
        });
      function C(c, p, w, P, M) {
        if (c.length === 0) return -1;
        if (
          (typeof w == "string"
            ? ((P = w), (w = 0))
            : w > 2147483647
            ? (w = 2147483647)
            : w < -2147483648 && (w = -2147483648),
          (w = +w),
          Ke(w) && (w = M ? 0 : c.length - 1),
          w < 0 && (w = c.length + w),
          w >= c.length)
        ) {
          if (M) return -1;
          w = c.length - 1;
        } else if (w < 0)
          if (M) w = 0;
          else return -1;
        if ((typeof p == "string" && (p = a.from(p, P)), a.isBuffer(p)))
          return p.length === 0 ? -1 : N(c, p, w, P, M);
        if (typeof p == "number")
          return (
            (p = p & 255),
            typeof Uint8Array.prototype.indexOf == "function"
              ? M
                ? Uint8Array.prototype.indexOf.call(c, p, w)
                : Uint8Array.prototype.lastIndexOf.call(c, p, w)
              : N(c, [p], w, P, M)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function N(c, p, w, P, M) {
        var U = 1,
          ee = c.length,
          pe = p.length;
        if (
          P !== void 0 &&
          ((P = String(P).toLowerCase()),
          P === "ucs2" || P === "ucs-2" || P === "utf16le" || P === "utf-16le")
        ) {
          if (c.length < 2 || p.length < 2) return -1;
          (U = 2), (ee /= 2), (pe /= 2), (w /= 2);
        }
        function me(q, Be) {
          return U === 1 ? q[Be] : q.readUInt16BE(Be * U);
        }
        var he;
        if (M) {
          var Ee = -1;
          for (he = w; he < ee; he++)
            if (me(c, he) === me(p, Ee === -1 ? 0 : he - Ee)) {
              if ((Ee === -1 && (Ee = he), he - Ee + 1 === pe)) return Ee * U;
            } else Ee !== -1 && (he -= he - Ee), (Ee = -1);
        } else
          for (w + pe > ee && (w = ee - pe), he = w; he >= 0; he--) {
            for (var Le = !0, Ce = 0; Ce < pe; Ce++)
              if (me(c, he + Ce) !== me(p, Ce)) {
                Le = !1;
                break;
              }
            if (Le) return he;
          }
        return -1;
      }
      (a.prototype.includes = function (c, p, w) {
        return this.indexOf(c, p, w) !== -1;
      }),
        (a.prototype.indexOf = function (c, p, w) {
          return C(this, c, p, w, !0);
        }),
        (a.prototype.lastIndexOf = function (c, p, w) {
          return C(this, c, p, w, !1);
        });
      function T(c, p, w, P) {
        w = Number(w) || 0;
        var M = c.length - w;
        P ? ((P = Number(P)), P > M && (P = M)) : (P = M);
        var U = p.length;
        P > U / 2 && (P = U / 2);
        for (var ee = 0; ee < P; ++ee) {
          var pe = parseInt(p.substr(ee * 2, 2), 16);
          if (Ke(pe)) return ee;
          c[w + ee] = pe;
        }
        return ee;
      }
      function _(c, p, w, P) {
        return ve(ae(p, c.length - w), c, w, P);
      }
      function I(c, p, w, P) {
        return ve(oe(p), c, w, P);
      }
      function j(c, p, w, P) {
        return ve(ne(p), c, w, P);
      }
      function H(c, p, w, P) {
        return ve(ce(p, c.length - w), c, w, P);
      }
      (a.prototype.write = function (c, p, w, P) {
        if (p === void 0) (P = "utf8"), (w = this.length), (p = 0);
        else if (w === void 0 && typeof p == "string")
          (P = p), (w = this.length), (p = 0);
        else if (isFinite(p))
          (p = p >>> 0),
            isFinite(w)
              ? ((w = w >>> 0), P === void 0 && (P = "utf8"))
              : ((P = w), (w = void 0));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported",
          );
        var M = this.length - p;
        if (
          ((w === void 0 || w > M) && (w = M),
          (c.length > 0 && (w < 0 || p < 0)) || p > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        P || (P = "utf8");
        for (var U = !1; ; )
          switch (P) {
            case "hex":
              return T(this, c, p, w);
            case "utf8":
            case "utf-8":
              return _(this, c, p, w);
            case "ascii":
            case "latin1":
            case "binary":
              return I(this, c, p, w);
            case "base64":
              return j(this, c, p, w);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return H(this, c, p, w);
            default:
              if (U) throw new TypeError("Unknown encoding: " + P);
              (P = ("" + P).toLowerCase()), (U = !0);
          }
      }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function V(c, p, w) {
        return p === 0 && w === c.length
          ? Rp.fromByteArray(c)
          : Rp.fromByteArray(c.slice(p, w));
      }
      function Z(c, p, w) {
        w = Math.min(c.length, w);
        for (var P = [], M = p; M < w; ) {
          var U = c[M],
            ee = null,
            pe = U > 239 ? 4 : U > 223 ? 3 : U > 191 ? 2 : 1;
          if (M + pe <= w) {
            var me, he, Ee, Le;
            switch (pe) {
              case 1:
                U < 128 && (ee = U);
                break;
              case 2:
                (me = c[M + 1]),
                  (me & 192) === 128 &&
                    ((Le = ((U & 31) << 6) | (me & 63)), Le > 127 && (ee = Le));
                break;
              case 3:
                (me = c[M + 1]),
                  (he = c[M + 2]),
                  (me & 192) === 128 &&
                    (he & 192) === 128 &&
                    ((Le = ((U & 15) << 12) | ((me & 63) << 6) | (he & 63)),
                    Le > 2047 && (Le < 55296 || Le > 57343) && (ee = Le));
                break;
              case 4:
                (me = c[M + 1]),
                  (he = c[M + 2]),
                  (Ee = c[M + 3]),
                  (me & 192) === 128 &&
                    (he & 192) === 128 &&
                    (Ee & 192) === 128 &&
                    ((Le =
                      ((U & 15) << 18) |
                      ((me & 63) << 12) |
                      ((he & 63) << 6) |
                      (Ee & 63)),
                    Le > 65535 && Le < 1114112 && (ee = Le));
            }
          }
          ee === null
            ? ((ee = 65533), (pe = 1))
            : ee > 65535 &&
              ((ee -= 65536),
              P.push(((ee >>> 10) & 1023) | 55296),
              (ee = 56320 | (ee & 1023))),
            P.push(ee),
            (M += pe);
        }
        return Y(P);
      }
      var D = 4096;
      function Y(c) {
        var p = c.length;
        if (p <= D) return String.fromCharCode.apply(String, c);
        for (var w = "", P = 0; P < p; )
          w += String.fromCharCode.apply(String, c.slice(P, (P += D)));
        return w;
      }
      function Q(c, p, w) {
        var P = "";
        w = Math.min(c.length, w);
        for (var M = p; M < w; ++M) P += String.fromCharCode(c[M] & 127);
        return P;
      }
      function K(c, p, w) {
        var P = "";
        w = Math.min(c.length, w);
        for (var M = p; M < w; ++M) P += String.fromCharCode(c[M]);
        return P;
      }
      function z(c, p, w) {
        var P = c.length;
        (!p || p < 0) && (p = 0), (!w || w < 0 || w > P) && (w = P);
        for (var M = "", U = p; U < w; ++U) M += Ne[c[U]];
        return M;
      }
      function F(c, p, w) {
        for (var P = c.slice(p, w), M = "", U = 0; U < P.length - 1; U += 2)
          M += String.fromCharCode(P[U] + P[U + 1] * 256);
        return M;
      }
      a.prototype.slice = function (c, p) {
        var w = this.length;
        (c = ~~c),
          (p = p === void 0 ? w : ~~p),
          c < 0 ? ((c += w), c < 0 && (c = 0)) : c > w && (c = w),
          p < 0 ? ((p += w), p < 0 && (p = 0)) : p > w && (p = w),
          p < c && (p = c);
        var P = this.subarray(c, p);
        return Object.setPrototypeOf(P, a.prototype), P;
      };
      function $(c, p, w) {
        if (c % 1 !== 0 || c < 0) throw new RangeError("offset is not uint");
        if (c + p > w)
          throw new RangeError("Trying to access beyond buffer length");
      }
      (a.prototype.readUintLE = a.prototype.readUIntLE =
        function (c, p, w) {
          (c = c >>> 0), (p = p >>> 0), w || $(c, p, this.length);
          for (var P = this[c], M = 1, U = 0; ++U < p && (M *= 256); )
            P += this[c + U] * M;
          return P;
        }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (c, p, w) {
            (c = c >>> 0), (p = p >>> 0), w || $(c, p, this.length);
            for (var P = this[c + --p], M = 1; p > 0 && (M *= 256); )
              P += this[c + --p] * M;
            return P;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (c, p) {
            return (c = c >>> 0), p || $(c, 1, this.length), this[c];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || $(c, 2, this.length),
              this[c] | (this[c + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || $(c, 2, this.length),
              (this[c] << 8) | this[c + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || $(c, 4, this.length),
              (this[c] | (this[c + 1] << 8) | (this[c + 2] << 16)) +
                this[c + 3] * 16777216
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || $(c, 4, this.length),
              this[c] * 16777216 +
                ((this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3])
            );
          }),
        (a.prototype.readIntLE = function (c, p, w) {
          (c = c >>> 0), (p = p >>> 0), w || $(c, p, this.length);
          for (var P = this[c], M = 1, U = 0; ++U < p && (M *= 256); )
            P += this[c + U] * M;
          return (M *= 128), P >= M && (P -= Math.pow(2, 8 * p)), P;
        }),
        (a.prototype.readIntBE = function (c, p, w) {
          (c = c >>> 0), (p = p >>> 0), w || $(c, p, this.length);
          for (var P = p, M = 1, U = this[c + --P]; P > 0 && (M *= 256); )
            U += this[c + --P] * M;
          return (M *= 128), U >= M && (U -= Math.pow(2, 8 * p)), U;
        }),
        (a.prototype.readInt8 = function (c, p) {
          return (
            (c = c >>> 0),
            p || $(c, 1, this.length),
            this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]
          );
        }),
        (a.prototype.readInt16LE = function (c, p) {
          (c = c >>> 0), p || $(c, 2, this.length);
          var w = this[c] | (this[c + 1] << 8);
          return w & 32768 ? w | 4294901760 : w;
        }),
        (a.prototype.readInt16BE = function (c, p) {
          (c = c >>> 0), p || $(c, 2, this.length);
          var w = this[c + 1] | (this[c] << 8);
          return w & 32768 ? w | 4294901760 : w;
        }),
        (a.prototype.readInt32LE = function (c, p) {
          return (
            (c = c >>> 0),
            p || $(c, 4, this.length),
            this[c] |
              (this[c + 1] << 8) |
              (this[c + 2] << 16) |
              (this[c + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (c, p) {
          return (
            (c = c >>> 0),
            p || $(c, 4, this.length),
            (this[c] << 24) |
              (this[c + 1] << 16) |
              (this[c + 2] << 8) |
              this[c + 3]
          );
        }),
        (a.prototype.readFloatLE = function (c, p) {
          return (
            (c = c >>> 0),
            p || $(c, 4, this.length),
            oi.read(this, c, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (c, p) {
          return (
            (c = c >>> 0),
            p || $(c, 4, this.length),
            oi.read(this, c, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (c, p) {
          return (
            (c = c >>> 0),
            p || $(c, 8, this.length),
            oi.read(this, c, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (c, p) {
          return (
            (c = c >>> 0),
            p || $(c, 8, this.length),
            oi.read(this, c, !1, 52, 8)
          );
        });
      function O(c, p, w, P, M, U) {
        if (!a.isBuffer(c))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (p > M || p < U)
          throw new RangeError('"value" argument is out of bounds');
        if (w + P > c.length) throw new RangeError("Index out of range");
      }
      (a.prototype.writeUintLE = a.prototype.writeUIntLE =
        function (c, p, w, P) {
          if (((c = +c), (p = p >>> 0), (w = w >>> 0), !P)) {
            var M = Math.pow(2, 8 * w) - 1;
            O(this, c, p, w, M, 0);
          }
          var U = 1,
            ee = 0;
          for (this[p] = c & 255; ++ee < w && (U *= 256); )
            this[p + ee] = (c / U) & 255;
          return p + w;
        }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (c, p, w, P) {
            if (((c = +c), (p = p >>> 0), (w = w >>> 0), !P)) {
              var M = Math.pow(2, 8 * w) - 1;
              O(this, c, p, w, M, 0);
            }
            var U = w - 1,
              ee = 1;
            for (this[p + U] = c & 255; --U >= 0 && (ee *= 256); )
              this[p + U] = (c / ee) & 255;
            return p + w;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (c, p, w) {
            return (
              (c = +c),
              (p = p >>> 0),
              w || O(this, c, p, 1, 255, 0),
              (this[p] = c & 255),
              p + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (c, p, w) {
            return (
              (c = +c),
              (p = p >>> 0),
              w || O(this, c, p, 2, 65535, 0),
              (this[p] = c & 255),
              (this[p + 1] = c >>> 8),
              p + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (c, p, w) {
            return (
              (c = +c),
              (p = p >>> 0),
              w || O(this, c, p, 2, 65535, 0),
              (this[p] = c >>> 8),
              (this[p + 1] = c & 255),
              p + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (c, p, w) {
            return (
              (c = +c),
              (p = p >>> 0),
              w || O(this, c, p, 4, 4294967295, 0),
              (this[p + 3] = c >>> 24),
              (this[p + 2] = c >>> 16),
              (this[p + 1] = c >>> 8),
              (this[p] = c & 255),
              p + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (c, p, w) {
            return (
              (c = +c),
              (p = p >>> 0),
              w || O(this, c, p, 4, 4294967295, 0),
              (this[p] = c >>> 24),
              (this[p + 1] = c >>> 16),
              (this[p + 2] = c >>> 8),
              (this[p + 3] = c & 255),
              p + 4
            );
          }),
        (a.prototype.writeIntLE = function (c, p, w, P) {
          if (((c = +c), (p = p >>> 0), !P)) {
            var M = Math.pow(2, 8 * w - 1);
            O(this, c, p, w, M - 1, -M);
          }
          var U = 0,
            ee = 1,
            pe = 0;
          for (this[p] = c & 255; ++U < w && (ee *= 256); )
            c < 0 && pe === 0 && this[p + U - 1] !== 0 && (pe = 1),
              (this[p + U] = (((c / ee) >> 0) - pe) & 255);
          return p + w;
        }),
        (a.prototype.writeIntBE = function (c, p, w, P) {
          if (((c = +c), (p = p >>> 0), !P)) {
            var M = Math.pow(2, 8 * w - 1);
            O(this, c, p, w, M - 1, -M);
          }
          var U = w - 1,
            ee = 1,
            pe = 0;
          for (this[p + U] = c & 255; --U >= 0 && (ee *= 256); )
            c < 0 && pe === 0 && this[p + U + 1] !== 0 && (pe = 1),
              (this[p + U] = (((c / ee) >> 0) - pe) & 255);
          return p + w;
        }),
        (a.prototype.writeInt8 = function (c, p, w) {
          return (
            (c = +c),
            (p = p >>> 0),
            w || O(this, c, p, 1, 127, -128),
            c < 0 && (c = 255 + c + 1),
            (this[p] = c & 255),
            p + 1
          );
        }),
        (a.prototype.writeInt16LE = function (c, p, w) {
          return (
            (c = +c),
            (p = p >>> 0),
            w || O(this, c, p, 2, 32767, -32768),
            (this[p] = c & 255),
            (this[p + 1] = c >>> 8),
            p + 2
          );
        }),
        (a.prototype.writeInt16BE = function (c, p, w) {
          return (
            (c = +c),
            (p = p >>> 0),
            w || O(this, c, p, 2, 32767, -32768),
            (this[p] = c >>> 8),
            (this[p + 1] = c & 255),
            p + 2
          );
        }),
        (a.prototype.writeInt32LE = function (c, p, w) {
          return (
            (c = +c),
            (p = p >>> 0),
            w || O(this, c, p, 4, 2147483647, -2147483648),
            (this[p] = c & 255),
            (this[p + 1] = c >>> 8),
            (this[p + 2] = c >>> 16),
            (this[p + 3] = c >>> 24),
            p + 4
          );
        }),
        (a.prototype.writeInt32BE = function (c, p, w) {
          return (
            (c = +c),
            (p = p >>> 0),
            w || O(this, c, p, 4, 2147483647, -2147483648),
            c < 0 && (c = 4294967295 + c + 1),
            (this[p] = c >>> 24),
            (this[p + 1] = c >>> 16),
            (this[p + 2] = c >>> 8),
            (this[p + 3] = c & 255),
            p + 4
          );
        });
      function L(c, p, w, P, M, U) {
        if (w + P > c.length) throw new RangeError("Index out of range");
        if (w < 0) throw new RangeError("Index out of range");
      }
      function B(c, p, w, P, M) {
        return (
          (p = +p),
          (w = w >>> 0),
          M || L(c, p, w, 4),
          oi.write(c, p, w, P, 23, 4),
          w + 4
        );
      }
      (a.prototype.writeFloatLE = function (c, p, w) {
        return B(this, c, p, !0, w);
      }),
        (a.prototype.writeFloatBE = function (c, p, w) {
          return B(this, c, p, !1, w);
        });
      function W(c, p, w, P, M) {
        return (
          (p = +p),
          (w = w >>> 0),
          M || L(c, p, w, 8),
          oi.write(c, p, w, P, 52, 8),
          w + 8
        );
      }
      (a.prototype.writeDoubleLE = function (c, p, w) {
        return W(this, c, p, !0, w);
      }),
        (a.prototype.writeDoubleBE = function (c, p, w) {
          return W(this, c, p, !1, w);
        }),
        (a.prototype.copy = function (c, p, w, P) {
          if (!a.isBuffer(c))
            throw new TypeError("argument should be a Buffer");
          if (
            (w || (w = 0),
            !P && P !== 0 && (P = this.length),
            p >= c.length && (p = c.length),
            p || (p = 0),
            P > 0 && P < w && (P = w),
            P === w || c.length === 0 || this.length === 0)
          )
            return 0;
          if (p < 0) throw new RangeError("targetStart out of bounds");
          if (w < 0 || w >= this.length)
            throw new RangeError("Index out of range");
          if (P < 0) throw new RangeError("sourceEnd out of bounds");
          P > this.length && (P = this.length),
            c.length - p < P - w && (P = c.length - p + w);
          var M = P - w;
          return (
            this === c && typeof Uint8Array.prototype.copyWithin == "function"
              ? this.copyWithin(p, w, P)
              : Uint8Array.prototype.set.call(c, this.subarray(w, P), p),
            M
          );
        }),
        (a.prototype.fill = function (c, p, w, P) {
          if (typeof c == "string") {
            if (
              (typeof p == "string"
                ? ((P = p), (p = 0), (w = this.length))
                : typeof w == "string" && ((P = w), (w = this.length)),
              P !== void 0 && typeof P != "string")
            )
              throw new TypeError("encoding must be a string");
            if (typeof P == "string" && !a.isEncoding(P))
              throw new TypeError("Unknown encoding: " + P);
            if (c.length === 1) {
              var M = c.charCodeAt(0);
              ((P === "utf8" && M < 128) || P === "latin1") && (c = M);
            }
          } else
            typeof c == "number"
              ? (c = c & 255)
              : typeof c == "boolean" && (c = Number(c));
          if (p < 0 || this.length < p || this.length < w)
            throw new RangeError("Out of range index");
          if (w <= p) return this;
          (p = p >>> 0),
            (w = w === void 0 ? this.length : w >>> 0),
            c || (c = 0);
          var U;
          if (typeof c == "number") for (U = p; U < w; ++U) this[U] = c;
          else {
            var ee = a.isBuffer(c) ? c : a.from(c, P),
              pe = ee.length;
            if (pe === 0)
              throw new TypeError(
                'The value "' + c + '" is invalid for argument "value"',
              );
            for (U = 0; U < w - p; ++U) this[U + p] = ee[U % pe];
          }
          return this;
        });
      var X = /[^+/0-9A-Za-z-_]/g;
      function J(c) {
        if (
          ((c = c.split("=")[0]), (c = c.trim().replace(X, "")), c.length < 2)
        )
          return "";
        for (; c.length % 4 !== 0; ) c = c + "=";
        return c;
      }
      function ae(c, p) {
        p = p || 1 / 0;
        for (var w, P = c.length, M = null, U = [], ee = 0; ee < P; ++ee) {
          if (((w = c.charCodeAt(ee)), w > 55295 && w < 57344)) {
            if (!M) {
              if (w > 56319) {
                (p -= 3) > -1 && U.push(239, 191, 189);
                continue;
              } else if (ee + 1 === P) {
                (p -= 3) > -1 && U.push(239, 191, 189);
                continue;
              }
              M = w;
              continue;
            }
            if (w < 56320) {
              (p -= 3) > -1 && U.push(239, 191, 189), (M = w);
              continue;
            }
            w = (((M - 55296) << 10) | (w - 56320)) + 65536;
          } else M && (p -= 3) > -1 && U.push(239, 191, 189);
          if (((M = null), w < 128)) {
            if ((p -= 1) < 0) break;
            U.push(w);
          } else if (w < 2048) {
            if ((p -= 2) < 0) break;
            U.push((w >> 6) | 192, (w & 63) | 128);
          } else if (w < 65536) {
            if ((p -= 3) < 0) break;
            U.push((w >> 12) | 224, ((w >> 6) & 63) | 128, (w & 63) | 128);
          } else if (w < 1114112) {
            if ((p -= 4) < 0) break;
            U.push(
              (w >> 18) | 240,
              ((w >> 12) & 63) | 128,
              ((w >> 6) & 63) | 128,
              (w & 63) | 128,
            );
          } else throw new Error("Invalid code point");
        }
        return U;
      }
      function oe(c) {
        for (var p = [], w = 0; w < c.length; ++w)
          p.push(c.charCodeAt(w) & 255);
        return p;
      }
      function ce(c, p) {
        for (
          var w, P, M, U = [], ee = 0;
          ee < c.length && !((p -= 2) < 0);
          ++ee
        )
          (w = c.charCodeAt(ee)),
            (P = w >> 8),
            (M = w % 256),
            U.push(M),
            U.push(P);
        return U;
      }
      function ne(c) {
        return Rp.toByteArray(J(c));
      }
      function ve(c, p, w, P) {
        for (var M = 0; M < P && !(M + w >= p.length || M >= c.length); ++M)
          p[M + w] = c[M];
        return M;
      }
      function ke(c, p) {
        return (
          c instanceof p ||
          (c != null &&
            c.constructor != null &&
            c.constructor.name != null &&
            c.constructor.name === p.name)
        );
      }
      function Ke(c) {
        return c !== c;
      }
      var Ne = (function () {
        for (var c = "0123456789abcdef", p = new Array(256), w = 0; w < 16; ++w)
          for (var P = w * 16, M = 0; M < 16; ++M) p[P + M] = c[w] + c[M];
        return p;
      })();
    }),
    Ae = Tu.Buffer;
  Tu.SlowBuffer, Tu.INSPECT_MAX_BYTES, Tu.kMaxLength;
  var Pp = function (e, t) {
    return (
      (Pp =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
        }),
      Pp(e, t)
    );
  };
  function Au(e, t) {
    Pp(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var eo = (function (e) {
      Au(t, e);
      function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r;
      }
      return (
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return "BSONError";
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(Error),
    Qe = (function (e) {
      Au(t, e);
      function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r;
      }
      return (
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return "BSONTypeError";
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(TypeError);
  function Ru(e) {
    return e && e.Math == Math && e;
  }
  function Sb() {
    return (
      Ru(typeof globalThis == "object" && globalThis) ||
      Ru(typeof window == "object" && window) ||
      Ru(typeof self == "object" && self) ||
      Ru(typeof global == "object" && global) ||
      Function("return this")()
    );
  }
  function NR() {
    var e = Sb();
    return (
      typeof e.navigator == "object" && e.navigator.product === "ReactNative"
    );
  }
  var TR = function (e) {
      var t = NR()
        ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values."
        : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
      console.warn(t);
      for (var n = Ae.alloc(e), r = 0; r < e; ++r)
        n[r] = Math.floor(Math.random() * 256);
      return n;
    },
    AR = function () {
      {
        if (typeof window < "u") {
          var e = window.crypto || window.msCrypto;
          if (e && e.getRandomValues)
            return function (t) {
              return e.getRandomValues(Ae.alloc(t));
            };
        }
        return typeof global < "u" &&
          global.crypto &&
          global.crypto.getRandomValues
          ? function (t) {
              return global.crypto.getRandomValues(Ae.alloc(t));
            }
          : TR;
      }
    },
    xb = AR();
  function RR(e) {
    return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(
      Object.prototype.toString.call(e),
    );
  }
  function _p(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  function PR(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  function _R(e) {
    return Ma(e) && Object.prototype.toString.call(e) === "[object Date]";
  }
  function Ma(e) {
    return typeof e == "object" && e !== null;
  }
  function Pu(e, t) {
    var n = !1;
    function r() {
      for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
      return n || (console.warn(t), (n = !0)), e.apply(this, o);
    }
    return r;
  }
  function _u(e) {
    if (ArrayBuffer.isView(e))
      return Ae.from(e.buffer, e.byteOffset, e.byteLength);
    if (RR(e)) return Ae.from(e);
    throw new Qe("Must use either Buffer or TypedArray");
  }
  var IR =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i,
    kb = function (e) {
      return typeof e == "string" && IR.test(e);
    },
    Ip = function (e) {
      if (!kb(e))
        throw new Qe(
          'UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".',
        );
      var t = e.replace(/-/g, "");
      return Ae.from(t, "hex");
    },
    Eb = function (e, t) {
      return (
        t === void 0 && (t = !0),
        t
          ? e.toString("hex", 0, 4) +
            "-" +
            e.toString("hex", 4, 6) +
            "-" +
            e.toString("hex", 6, 8) +
            "-" +
            e.toString("hex", 8, 10) +
            "-" +
            e.toString("hex", 10, 16)
          : e.toString("hex")
      );
    },
    $R = Math.pow(2, 53),
    MR = -Math.pow(2, 53),
    Cb = 4,
    to = (function () {
      function e(t, n) {
        if (!(this instanceof e)) return new e(t, n);
        if (
          t != null &&
          typeof t != "string" &&
          !ArrayBuffer.isView(t) &&
          !(t instanceof ArrayBuffer) &&
          !Array.isArray(t)
        )
          throw new Qe(
            "Binary can only be constructed from string, Buffer, TypedArray, or Array<number>",
          );
        (this.sub_type = n ?? e.BSON_BINARY_SUBTYPE_DEFAULT),
          t == null
            ? ((this.buffer = Ae.alloc(e.BUFFER_SIZE)), (this.position = 0))
            : (typeof t == "string"
                ? (this.buffer = Ae.from(t, "binary"))
                : Array.isArray(t)
                ? (this.buffer = Ae.from(t))
                : (this.buffer = _u(t)),
              (this.position = this.buffer.byteLength));
      }
      return (
        (e.prototype.put = function (t) {
          if (typeof t == "string" && t.length !== 1)
            throw new Qe("only accepts single character String");
          if (typeof t != "number" && t.length !== 1)
            throw new Qe("only accepts single character Uint8Array or Array");
          var n;
          if (
            (typeof t == "string"
              ? (n = t.charCodeAt(0))
              : typeof t == "number"
              ? (n = t)
              : (n = t[0]),
            n < 0 || n > 255)
          )
            throw new Qe(
              "only accepts number in a valid unsigned byte range 0-255",
            );
          if (this.buffer.length > this.position)
            this.buffer[this.position++] = n;
          else {
            var r = Ae.alloc(e.BUFFER_SIZE + this.buffer.length);
            this.buffer.copy(r, 0, 0, this.buffer.length),
              (this.buffer = r),
              (this.buffer[this.position++] = n);
          }
        }),
        (e.prototype.write = function (t, n) {
          if (
            ((n = typeof n == "number" ? n : this.position),
            this.buffer.length < n + t.length)
          ) {
            var r = Ae.alloc(this.buffer.length + t.length);
            this.buffer.copy(r, 0, 0, this.buffer.length), (this.buffer = r);
          }
          ArrayBuffer.isView(t)
            ? (this.buffer.set(_u(t), n),
              (this.position =
                n + t.byteLength > this.position
                  ? n + t.length
                  : this.position))
            : typeof t == "string" &&
              (this.buffer.write(t, n, t.length, "binary"),
              (this.position =
                n + t.length > this.position ? n + t.length : this.position));
        }),
        (e.prototype.read = function (t, n) {
          return (
            (n = n && n > 0 ? n : this.position), this.buffer.slice(t, t + n)
          );
        }),
        (e.prototype.value = function (t) {
          return (
            (t = !!t),
            t && this.buffer.length === this.position
              ? this.buffer
              : t
              ? this.buffer.slice(0, this.position)
              : this.buffer.toString("binary", 0, this.position)
          );
        }),
        (e.prototype.length = function () {
          return this.position;
        }),
        (e.prototype.toJSON = function () {
          return this.buffer.toString("base64");
        }),
        (e.prototype.toString = function (t) {
          return this.buffer.toString(t);
        }),
        (e.prototype.toExtendedJSON = function (t) {
          t = t || {};
          var n = this.buffer.toString("base64"),
            r = Number(this.sub_type).toString(16);
          return t.legacy
            ? { $binary: n, $type: r.length === 1 ? "0" + r : r }
            : { $binary: { base64: n, subType: r.length === 1 ? "0" + r : r } };
        }),
        (e.prototype.toUUID = function () {
          if (this.sub_type === e.SUBTYPE_UUID)
            return new Ob(this.buffer.slice(0, this.position));
          throw new eo(
            'Binary sub_type "'
              .concat(
                this.sub_type,
                '" is not supported for converting to UUID. Only "',
              )
              .concat(e.SUBTYPE_UUID, '" is currently supported.'),
          );
        }),
        (e.fromExtendedJSON = function (t, n) {
          n = n || {};
          var r, o;
          if (
            ("$binary" in t
              ? n.legacy && typeof t.$binary == "string" && "$type" in t
                ? ((o = t.$type ? parseInt(t.$type, 16) : 0),
                  (r = Ae.from(t.$binary, "base64")))
                : typeof t.$binary != "string" &&
                  ((o = t.$binary.subType
                    ? parseInt(t.$binary.subType, 16)
                    : 0),
                  (r = Ae.from(t.$binary.base64, "base64")))
              : "$uuid" in t && ((o = 4), (r = Ip(t.$uuid))),
            !r)
          )
            throw new Qe(
              "Unexpected Binary Extended JSON format ".concat(
                JSON.stringify(t),
              ),
            );
          return o === Cb ? new Ob(r) : new e(r, o);
        }),
        (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (e.prototype.inspect = function () {
          var t = this.value(!0);
          return 'new Binary(Buffer.from("'
            .concat(t.toString("hex"), '", "hex"), ')
            .concat(this.sub_type, ")");
        }),
        (e.BSON_BINARY_SUBTYPE_DEFAULT = 0),
        (e.BUFFER_SIZE = 256),
        (e.SUBTYPE_DEFAULT = 0),
        (e.SUBTYPE_FUNCTION = 1),
        (e.SUBTYPE_BYTE_ARRAY = 2),
        (e.SUBTYPE_UUID_OLD = 3),
        (e.SUBTYPE_UUID = 4),
        (e.SUBTYPE_MD5 = 5),
        (e.SUBTYPE_ENCRYPTED = 6),
        (e.SUBTYPE_COLUMN = 7),
        (e.SUBTYPE_USER_DEFINED = 128),
        e
      );
    })();
  Object.defineProperty(to.prototype, "_bsontype", { value: "Binary" });
  var $p = 16,
    Ob = (function (e) {
      Au(t, e);
      function t(n) {
        var r = this,
          o,
          i;
        if (n == null) o = t.generate();
        else if (n instanceof t) (o = Ae.from(n.buffer)), (i = n.__id);
        else if (ArrayBuffer.isView(n) && n.byteLength === $p) o = _u(n);
        else if (typeof n == "string") o = Ip(n);
        else
          throw new Qe(
            "Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).",
          );
        return (r = e.call(this, o, Cb) || this), (r.__id = i), r;
      }
      return (
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this.buffer;
          },
          set: function (n) {
            (this.buffer = n), t.cacheHexString && (this.__id = Eb(n));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toHexString = function (n) {
          if ((n === void 0 && (n = !0), t.cacheHexString && this.__id))
            return this.__id;
          var r = Eb(this.id, n);
          return t.cacheHexString && (this.__id = r), r;
        }),
        (t.prototype.toString = function (n) {
          return n ? this.id.toString(n) : this.toHexString();
        }),
        (t.prototype.toJSON = function () {
          return this.toHexString();
        }),
        (t.prototype.equals = function (n) {
          if (!n) return !1;
          if (n instanceof t) return n.id.equals(this.id);
          try {
            return new t(n).id.equals(this.id);
          } catch {
            return !1;
          }
        }),
        (t.prototype.toBinary = function () {
          return new to(this.id, to.SUBTYPE_UUID);
        }),
        (t.generate = function () {
          var n = xb($p);
          return (
            (n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), Ae.from(n)
          );
        }),
        (t.isValid = function (n) {
          return n
            ? n instanceof t
              ? !0
              : typeof n == "string"
              ? kb(n)
              : _p(n)
              ? n.length !== $p
                ? !1
                : (n[6] & 240) === 64 && (n[8] & 128) === 128
              : !1
            : !1;
        }),
        (t.createFromHexString = function (n) {
          var r = Ip(n);
          return new t(r);
        }),
        (t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (t.prototype.inspect = function () {
          return 'new UUID("'.concat(this.toHexString(), '")');
        }),
        t
      );
    })(to),
    Iu = (function () {
      function e(t, n) {
        if (!(this instanceof e)) return new e(t, n);
        (this.code = t), (this.scope = n);
      }
      return (
        (e.prototype.toJSON = function () {
          return { code: this.code, scope: this.scope };
        }),
        (e.prototype.toExtendedJSON = function () {
          return this.scope
            ? { $code: this.code, $scope: this.scope }
            : { $code: this.code };
        }),
        (e.fromExtendedJSON = function (t) {
          return new e(t.$code, t.$scope);
        }),
        (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (e.prototype.inspect = function () {
          var t = this.toJSON();
          return 'new Code("'
            .concat(String(t.code), '"')
            .concat(t.scope ? ", ".concat(JSON.stringify(t.scope)) : "", ")");
        }),
        e
      );
    })();
  Object.defineProperty(Iu.prototype, "_bsontype", { value: "Code" });
  function LR(e) {
    return (
      Ma(e) &&
      e.$id != null &&
      typeof e.$ref == "string" &&
      (e.$db == null || typeof e.$db == "string")
    );
  }
  var La = (function () {
    function e(t, n, r, o) {
      if (!(this instanceof e)) return new e(t, n, r, o);
      var i = t.split(".");
      i.length === 2 && ((r = i.shift()), (t = i.shift())),
        (this.collection = t),
        (this.oid = n),
        (this.db = r),
        (this.fields = o || {});
    }
    return (
      Object.defineProperty(e.prototype, "namespace", {
        get: function () {
          return this.collection;
        },
        set: function (t) {
          this.collection = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.toJSON = function () {
        var t = Object.assign(
          { $ref: this.collection, $id: this.oid },
          this.fields,
        );
        return this.db != null && (t.$db = this.db), t;
      }),
      (e.prototype.toExtendedJSON = function (t) {
        t = t || {};
        var n = { $ref: this.collection, $id: this.oid };
        return (
          t.legacy ||
            (this.db && (n.$db = this.db), (n = Object.assign(n, this.fields))),
          n
        );
      }),
      (e.fromExtendedJSON = function (t) {
        var n = Object.assign({}, t);
        return (
          delete n.$ref,
          delete n.$id,
          delete n.$db,
          new e(t.$ref, t.$id, t.$db, n)
        );
      }),
      (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return this.inspect();
      }),
      (e.prototype.inspect = function () {
        var t =
          this.oid === void 0 || this.oid.toString === void 0
            ? this.oid
            : this.oid.toString();
        return 'new DBRef("'
          .concat(this.namespace, '", new ObjectId("')
          .concat(String(t), '")')
          .concat(this.db ? ', "'.concat(this.db, '"') : "", ")");
      }),
      e
    );
  })();
  Object.defineProperty(La.prototype, "_bsontype", { value: "DBRef" });
  var sn = void 0;
  try {
    sn = new WebAssembly.Instance(
      new WebAssembly.Module(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
          127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0,
          11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2,
          5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5,
          114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103,
          104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173,
          32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
          132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
          126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
          66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
          36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
          32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32,
          4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
          32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135,
          167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
          32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4,
          66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
        ]),
      ),
      {},
    ).exports;
  } catch {}
  var Nb = 1 << 16,
    FR = 1 << 24,
    ii = Nb * Nb,
    Tb = ii * ii,
    Ab = Tb / 2,
    Rb = {},
    Pb = {},
    se = (function () {
      function e(t, n, r) {
        if ((t === void 0 && (t = 0), !(this instanceof e)))
          return new e(t, n, r);
        typeof t == "bigint"
          ? Object.assign(this, e.fromBigInt(t, !!n))
          : typeof t == "string"
          ? Object.assign(this, e.fromString(t, !!n))
          : ((this.low = t | 0), (this.high = n | 0), (this.unsigned = !!r)),
          Object.defineProperty(this, "__isLong__", {
            value: !0,
            configurable: !1,
            writable: !1,
            enumerable: !1,
          });
      }
      return (
        (e.fromBits = function (t, n, r) {
          return new e(t, n, r);
        }),
        (e.fromInt = function (t, n) {
          var r, o, i;
          return n
            ? ((t >>>= 0),
              (i = 0 <= t && t < 256) && ((o = Pb[t]), o)
                ? o
                : ((r = e.fromBits(t, (t | 0) < 0 ? -1 : 0, !0)),
                  i && (Pb[t] = r),
                  r))
            : ((t |= 0),
              (i = -128 <= t && t < 128) && ((o = Rb[t]), o)
                ? o
                : ((r = e.fromBits(t, t < 0 ? -1 : 0, !1)),
                  i && (Rb[t] = r),
                  r));
        }),
        (e.fromNumber = function (t, n) {
          if (isNaN(t)) return n ? e.UZERO : e.ZERO;
          if (n) {
            if (t < 0) return e.UZERO;
            if (t >= Tb) return e.MAX_UNSIGNED_VALUE;
          } else {
            if (t <= -Ab) return e.MIN_VALUE;
            if (t + 1 >= Ab) return e.MAX_VALUE;
          }
          return t < 0
            ? e.fromNumber(-t, n).neg()
            : e.fromBits(t % ii | 0, (t / ii) | 0, n);
        }),
        (e.fromBigInt = function (t, n) {
          return e.fromString(t.toString(), n);
        }),
        (e.fromString = function (t, n, r) {
          if (t.length === 0) throw Error("empty string");
          if (
            t === "NaN" ||
            t === "Infinity" ||
            t === "+Infinity" ||
            t === "-Infinity"
          )
            return e.ZERO;
          if (
            (typeof n == "number" ? ((r = n), (n = !1)) : (n = !!n),
            (r = r || 10),
            r < 2 || 36 < r)
          )
            throw RangeError("radix");
          var o;
          if ((o = t.indexOf("-")) > 0) throw Error("interior hyphen");
          if (o === 0) return e.fromString(t.substring(1), n, r).neg();
          for (
            var i = e.fromNumber(Math.pow(r, 8)), a = e.ZERO, s = 0;
            s < t.length;
            s += 8
          ) {
            var l = Math.min(8, t.length - s),
              u = parseInt(t.substring(s, s + l), r);
            if (l < 8) {
              var d = e.fromNumber(Math.pow(r, l));
              a = a.mul(d).add(e.fromNumber(u));
            } else (a = a.mul(i)), (a = a.add(e.fromNumber(u)));
          }
          return (a.unsigned = n), a;
        }),
        (e.fromBytes = function (t, n, r) {
          return r ? e.fromBytesLE(t, n) : e.fromBytesBE(t, n);
        }),
        (e.fromBytesLE = function (t, n) {
          return new e(
            t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
            t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
            n,
          );
        }),
        (e.fromBytesBE = function (t, n) {
          return new e(
            (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
            (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
            n,
          );
        }),
        (e.isLong = function (t) {
          return Ma(t) && t.__isLong__ === !0;
        }),
        (e.fromValue = function (t, n) {
          return typeof t == "number"
            ? e.fromNumber(t, n)
            : typeof t == "string"
            ? e.fromString(t, n)
            : e.fromBits(t.low, t.high, typeof n == "boolean" ? n : t.unsigned);
        }),
        (e.prototype.add = function (t) {
          e.isLong(t) || (t = e.fromValue(t));
          var n = this.high >>> 16,
            r = this.high & 65535,
            o = this.low >>> 16,
            i = this.low & 65535,
            a = t.high >>> 16,
            s = t.high & 65535,
            l = t.low >>> 16,
            u = t.low & 65535,
            d = 0,
            f = 0,
            h = 0,
            b = 0;
          return (
            (b += i + u),
            (h += b >>> 16),
            (b &= 65535),
            (h += o + l),
            (f += h >>> 16),
            (h &= 65535),
            (f += r + s),
            (d += f >>> 16),
            (f &= 65535),
            (d += n + a),
            (d &= 65535),
            e.fromBits((h << 16) | b, (d << 16) | f, this.unsigned)
          );
        }),
        (e.prototype.and = function (t) {
          return (
            e.isLong(t) || (t = e.fromValue(t)),
            e.fromBits(this.low & t.low, this.high & t.high, this.unsigned)
          );
        }),
        (e.prototype.compare = function (t) {
          if ((e.isLong(t) || (t = e.fromValue(t)), this.eq(t))) return 0;
          var n = this.isNegative(),
            r = t.isNegative();
          return n && !r
            ? -1
            : !n && r
            ? 1
            : this.unsigned
            ? t.high >>> 0 > this.high >>> 0 ||
              (t.high === this.high && t.low >>> 0 > this.low >>> 0)
              ? -1
              : 1
            : this.sub(t).isNegative()
            ? -1
            : 1;
        }),
        (e.prototype.comp = function (t) {
          return this.compare(t);
        }),
        (e.prototype.divide = function (t) {
          if ((e.isLong(t) || (t = e.fromValue(t)), t.isZero()))
            throw Error("division by zero");
          if (sn) {
            if (
              !this.unsigned &&
              this.high === -2147483648 &&
              t.low === -1 &&
              t.high === -1
            )
              return this;
            var n = (this.unsigned ? sn.div_u : sn.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, sn.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? e.UZERO : e.ZERO;
          var r, o, i;
          if (this.unsigned) {
            if ((t.unsigned || (t = t.toUnsigned()), t.gt(this)))
              return e.UZERO;
            if (t.gt(this.shru(1))) return e.UONE;
            i = e.UZERO;
          } else {
            if (this.eq(e.MIN_VALUE)) {
              if (t.eq(e.ONE) || t.eq(e.NEG_ONE)) return e.MIN_VALUE;
              if (t.eq(e.MIN_VALUE)) return e.ONE;
              var a = this.shr(1);
              return (
                (r = a.div(t).shl(1)),
                r.eq(e.ZERO)
                  ? t.isNegative()
                    ? e.ONE
                    : e.NEG_ONE
                  : ((o = this.sub(t.mul(r))), (i = r.add(o.div(t))), i)
              );
            } else if (t.eq(e.MIN_VALUE))
              return this.unsigned ? e.UZERO : e.ZERO;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().div(t.neg())
                : this.neg().div(t).neg();
            if (t.isNegative()) return this.div(t.neg()).neg();
            i = e.ZERO;
          }
          for (o = this; o.gte(t); ) {
            r = Math.max(1, Math.floor(o.toNumber() / t.toNumber()));
            for (
              var s = Math.ceil(Math.log(r) / Math.LN2),
                l = s <= 48 ? 1 : Math.pow(2, s - 48),
                u = e.fromNumber(r),
                d = u.mul(t);
              d.isNegative() || d.gt(o);

            )
              (r -= l), (u = e.fromNumber(r, this.unsigned)), (d = u.mul(t));
            u.isZero() && (u = e.ONE), (i = i.add(u)), (o = o.sub(d));
          }
          return i;
        }),
        (e.prototype.div = function (t) {
          return this.divide(t);
        }),
        (e.prototype.equals = function (t) {
          return (
            e.isLong(t) || (t = e.fromValue(t)),
            this.unsigned !== t.unsigned &&
            this.high >>> 31 === 1 &&
            t.high >>> 31 === 1
              ? !1
              : this.high === t.high && this.low === t.low
          );
        }),
        (e.prototype.eq = function (t) {
          return this.equals(t);
        }),
        (e.prototype.getHighBits = function () {
          return this.high;
        }),
        (e.prototype.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (e.prototype.getLowBits = function () {
          return this.low;
        }),
        (e.prototype.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (e.prototype.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(e.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
          var t = this.high !== 0 ? this.high : this.low,
            n;
          for (n = 31; n > 0 && !(t & (1 << n)); n--);
          return this.high !== 0 ? n + 33 : n + 1;
        }),
        (e.prototype.greaterThan = function (t) {
          return this.comp(t) > 0;
        }),
        (e.prototype.gt = function (t) {
          return this.greaterThan(t);
        }),
        (e.prototype.greaterThanOrEqual = function (t) {
          return this.comp(t) >= 0;
        }),
        (e.prototype.gte = function (t) {
          return this.greaterThanOrEqual(t);
        }),
        (e.prototype.ge = function (t) {
          return this.greaterThanOrEqual(t);
        }),
        (e.prototype.isEven = function () {
          return (this.low & 1) === 0;
        }),
        (e.prototype.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (e.prototype.isOdd = function () {
          return (this.low & 1) === 1;
        }),
        (e.prototype.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (e.prototype.isZero = function () {
          return this.high === 0 && this.low === 0;
        }),
        (e.prototype.lessThan = function (t) {
          return this.comp(t) < 0;
        }),
        (e.prototype.lt = function (t) {
          return this.lessThan(t);
        }),
        (e.prototype.lessThanOrEqual = function (t) {
          return this.comp(t) <= 0;
        }),
        (e.prototype.lte = function (t) {
          return this.lessThanOrEqual(t);
        }),
        (e.prototype.modulo = function (t) {
          if ((e.isLong(t) || (t = e.fromValue(t)), sn)) {
            var n = (this.unsigned ? sn.rem_u : sn.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, sn.get_high(), this.unsigned);
          }
          return this.sub(this.div(t).mul(t));
        }),
        (e.prototype.mod = function (t) {
          return this.modulo(t);
        }),
        (e.prototype.rem = function (t) {
          return this.modulo(t);
        }),
        (e.prototype.multiply = function (t) {
          if (this.isZero()) return e.ZERO;
          if ((e.isLong(t) || (t = e.fromValue(t)), sn)) {
            var n = sn.mul(this.low, this.high, t.low, t.high);
            return e.fromBits(n, sn.get_high(), this.unsigned);
          }
          if (t.isZero()) return e.ZERO;
          if (this.eq(e.MIN_VALUE)) return t.isOdd() ? e.MIN_VALUE : e.ZERO;
          if (t.eq(e.MIN_VALUE)) return this.isOdd() ? e.MIN_VALUE : e.ZERO;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().mul(t.neg())
              : this.neg().mul(t).neg();
          if (t.isNegative()) return this.mul(t.neg()).neg();
          if (this.lt(e.TWO_PWR_24) && t.lt(e.TWO_PWR_24))
            return e.fromNumber(this.toNumber() * t.toNumber(), this.unsigned);
          var r = this.high >>> 16,
            o = this.high & 65535,
            i = this.low >>> 16,
            a = this.low & 65535,
            s = t.high >>> 16,
            l = t.high & 65535,
            u = t.low >>> 16,
            d = t.low & 65535,
            f = 0,
            h = 0,
            b = 0,
            g = 0;
          return (
            (g += a * d),
            (b += g >>> 16),
            (g &= 65535),
            (b += i * d),
            (h += b >>> 16),
            (b &= 65535),
            (b += a * u),
            (h += b >>> 16),
            (b &= 65535),
            (h += o * d),
            (f += h >>> 16),
            (h &= 65535),
            (h += i * u),
            (f += h >>> 16),
            (h &= 65535),
            (h += a * l),
            (f += h >>> 16),
            (h &= 65535),
            (f += r * d + o * u + i * l + a * s),
            (f &= 65535),
            e.fromBits((b << 16) | g, (f << 16) | h, this.unsigned)
          );
        }),
        (e.prototype.mul = function (t) {
          return this.multiply(t);
        }),
        (e.prototype.negate = function () {
          return !this.unsigned && this.eq(e.MIN_VALUE)
            ? e.MIN_VALUE
            : this.not().add(e.ONE);
        }),
        (e.prototype.neg = function () {
          return this.negate();
        }),
        (e.prototype.not = function () {
          return e.fromBits(~this.low, ~this.high, this.unsigned);
        }),
        (e.prototype.notEquals = function (t) {
          return !this.equals(t);
        }),
        (e.prototype.neq = function (t) {
          return this.notEquals(t);
        }),
        (e.prototype.ne = function (t) {
          return this.notEquals(t);
        }),
        (e.prototype.or = function (t) {
          return (
            e.isLong(t) || (t = e.fromValue(t)),
            e.fromBits(this.low | t.low, this.high | t.high, this.unsigned)
          );
        }),
        (e.prototype.shiftLeft = function (t) {
          return (
            e.isLong(t) && (t = t.toInt()),
            (t &= 63) === 0
              ? this
              : t < 32
              ? e.fromBits(
                  this.low << t,
                  (this.high << t) | (this.low >>> (32 - t)),
                  this.unsigned,
                )
              : e.fromBits(0, this.low << (t - 32), this.unsigned)
          );
        }),
        (e.prototype.shl = function (t) {
          return this.shiftLeft(t);
        }),
        (e.prototype.shiftRight = function (t) {
          return (
            e.isLong(t) && (t = t.toInt()),
            (t &= 63) === 0
              ? this
              : t < 32
              ? e.fromBits(
                  (this.low >>> t) | (this.high << (32 - t)),
                  this.high >> t,
                  this.unsigned,
                )
              : e.fromBits(
                  this.high >> (t - 32),
                  this.high >= 0 ? 0 : -1,
                  this.unsigned,
                )
          );
        }),
        (e.prototype.shr = function (t) {
          return this.shiftRight(t);
        }),
        (e.prototype.shiftRightUnsigned = function (t) {
          if ((e.isLong(t) && (t = t.toInt()), (t &= 63), t === 0)) return this;
          var n = this.high;
          if (t < 32) {
            var r = this.low;
            return e.fromBits(
              (r >>> t) | (n << (32 - t)),
              n >>> t,
              this.unsigned,
            );
          } else
            return t === 32
              ? e.fromBits(n, 0, this.unsigned)
              : e.fromBits(n >>> (t - 32), 0, this.unsigned);
        }),
        (e.prototype.shr_u = function (t) {
          return this.shiftRightUnsigned(t);
        }),
        (e.prototype.shru = function (t) {
          return this.shiftRightUnsigned(t);
        }),
        (e.prototype.subtract = function (t) {
          return e.isLong(t) || (t = e.fromValue(t)), this.add(t.neg());
        }),
        (e.prototype.sub = function (t) {
          return this.subtract(t);
        }),
        (e.prototype.toInt = function () {
          return this.unsigned ? this.low >>> 0 : this.low;
        }),
        (e.prototype.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * ii + (this.low >>> 0)
            : this.high * ii + (this.low >>> 0);
        }),
        (e.prototype.toBigInt = function () {
          return BigInt(this.toString());
        }),
        (e.prototype.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (e.prototype.toBytesLE = function () {
          var t = this.high,
            n = this.low;
          return [
            n & 255,
            (n >>> 8) & 255,
            (n >>> 16) & 255,
            n >>> 24,
            t & 255,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            t >>> 24,
          ];
        }),
        (e.prototype.toBytesBE = function () {
          var t = this.high,
            n = this.low;
          return [
            t >>> 24,
            (t >>> 16) & 255,
            (t >>> 8) & 255,
            t & 255,
            n >>> 24,
            (n >>> 16) & 255,
            (n >>> 8) & 255,
            n & 255,
          ];
        }),
        (e.prototype.toSigned = function () {
          return this.unsigned ? e.fromBits(this.low, this.high, !1) : this;
        }),
        (e.prototype.toString = function (t) {
          if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative())
            if (this.eq(e.MIN_VALUE)) {
              var n = e.fromNumber(t),
                r = this.div(n),
                o = r.mul(n).sub(this);
              return r.toString(t) + o.toInt().toString(t);
            } else return "-" + this.neg().toString(t);
          for (
            var i = e.fromNumber(Math.pow(t, 6), this.unsigned),
              a = this,
              s = "";
            ;

          ) {
            var l = a.div(i),
              u = a.sub(l.mul(i)).toInt() >>> 0,
              d = u.toString(t);
            if (((a = l), a.isZero())) return d + s;
            for (; d.length < 6; ) d = "0" + d;
            s = "" + d + s;
          }
        }),
        (e.prototype.toUnsigned = function () {
          return this.unsigned ? this : e.fromBits(this.low, this.high, !0);
        }),
        (e.prototype.xor = function (t) {
          return (
            e.isLong(t) || (t = e.fromValue(t)),
            e.fromBits(this.low ^ t.low, this.high ^ t.high, this.unsigned)
          );
        }),
        (e.prototype.eqz = function () {
          return this.isZero();
        }),
        (e.prototype.le = function (t) {
          return this.lessThanOrEqual(t);
        }),
        (e.prototype.toExtendedJSON = function (t) {
          return t && t.relaxed
            ? this.toNumber()
            : { $numberLong: this.toString() };
        }),
        (e.fromExtendedJSON = function (t, n) {
          var r = e.fromString(t.$numberLong);
          return n && n.relaxed ? r.toNumber() : r;
        }),
        (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (e.prototype.inspect = function () {
          return 'new Long("'
            .concat(this.toString(), '"')
            .concat(this.unsigned ? ", true" : "", ")");
        }),
        (e.TWO_PWR_24 = e.fromInt(FR)),
        (e.MAX_UNSIGNED_VALUE = e.fromBits(-1, -1, !0)),
        (e.ZERO = e.fromInt(0)),
        (e.UZERO = e.fromInt(0, !0)),
        (e.ONE = e.fromInt(1)),
        (e.UONE = e.fromInt(1, !0)),
        (e.NEG_ONE = e.fromInt(-1)),
        (e.MAX_VALUE = e.fromBits(-1, 2147483647, !1)),
        (e.MIN_VALUE = e.fromBits(0, -2147483648, !1)),
        e
      );
    })();
  Object.defineProperty(se.prototype, "__isLong__", { value: !0 }),
    Object.defineProperty(se.prototype, "_bsontype", { value: "Long" });
  var BR = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
    jR = /^(\+|-)?(Infinity|inf)$/i,
    zR = /^(\+|-)?NaN$/i,
    Fa = 6111,
    Mp = -6176,
    _b = 6176,
    UR = 34,
    Lp = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    Ib = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    $b = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    DR = /^([-+])?(\d+)?$/,
    WR = 31,
    Mb = 16383,
    VR = 30,
    HR = 31;
  function Lb(e) {
    return !isNaN(parseInt(e, 10));
  }
  function qR(e) {
    var t = se.fromNumber(1e9),
      n = se.fromNumber(0);
    if (!e.parts[0] && !e.parts[1] && !e.parts[2] && !e.parts[3])
      return { quotient: e, rem: n };
    for (var r = 0; r <= 3; r++)
      (n = n.shiftLeft(32)),
        (n = n.add(new se(e.parts[r], 0))),
        (e.parts[r] = n.div(t).low),
        (n = n.modulo(t));
    return { quotient: e, rem: n };
  }
  function GR(e, t) {
    if (!e && !t) return { high: se.fromNumber(0), low: se.fromNumber(0) };
    var n = e.shiftRightUnsigned(32),
      r = new se(e.getLowBits(), 0),
      o = t.shiftRightUnsigned(32),
      i = new se(t.getLowBits(), 0),
      a = n.multiply(o),
      s = n.multiply(i),
      l = r.multiply(o),
      u = r.multiply(i);
    return (
      (a = a.add(s.shiftRightUnsigned(32))),
      (s = new se(s.getLowBits(), 0).add(l).add(u.shiftRightUnsigned(32))),
      (a = a.add(s.shiftRightUnsigned(32))),
      (u = s.shiftLeft(32).add(new se(u.getLowBits(), 0))),
      { high: a, low: u }
    );
  }
  function KR(e, t) {
    var n = e.high >>> 0,
      r = t.high >>> 0;
    if (n < r) return !0;
    if (n === r) {
      var o = e.low >>> 0,
        i = t.low >>> 0;
      if (o < i) return !0;
    }
    return !1;
  }
  function ai(e, t) {
    throw new Qe(
      '"'.concat(e, '" is not a valid Decimal128 string - ').concat(t),
    );
  }
  var Fp = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      if (typeof t == "string") this.bytes = e.fromString(t).bytes;
      else if (_p(t)) {
        if (t.byteLength !== 16)
          throw new Qe("Decimal128 must take a Buffer of 16 bytes");
        this.bytes = t;
      } else throw new Qe("Decimal128 must take a Buffer or string");
    }
    return (
      (e.fromString = function (t) {
        var n = !1,
          r = !1,
          o = !1,
          i = 0,
          a = 0,
          s = 0,
          l = 0,
          u = 0,
          d = [0],
          f = 0,
          h = 0,
          b = 0,
          g = 0,
          x = 0,
          R = 0,
          y = new se(0, 0),
          m = new se(0, 0),
          v = 0,
          S = 0;
        if (t.length >= 7e3)
          throw new Qe("" + t + " not a valid Decimal128 string");
        var C = t.match(BR),
          N = t.match(jR),
          T = t.match(zR);
        if ((!C && !N && !T) || t.length === 0)
          throw new Qe("" + t + " not a valid Decimal128 string");
        if (C) {
          var _ = C[2],
            I = C[4],
            j = C[5],
            H = C[6];
          I && H === void 0 && ai(t, "missing exponent power"),
            I && _ === void 0 && ai(t, "missing exponent base"),
            I === void 0 && (j || H) && ai(t, "missing e before exponent");
        }
        if (
          ((t[S] === "+" || t[S] === "-") && (n = t[S++] === "-"),
          !Lb(t[S]) && t[S] !== ".")
        ) {
          if (t[S] === "i" || t[S] === "I") return new e(Ae.from(n ? Ib : $b));
          if (t[S] === "N") return new e(Ae.from(Lp));
        }
        for (; Lb(t[S]) || t[S] === "."; ) {
          if (t[S] === ".") {
            r && ai(t, "contains multiple periods"), (r = !0), (S = S + 1);
            continue;
          }
          f < 34 &&
            (t[S] !== "0" || o) &&
            (o || (u = a),
            (o = !0),
            (d[h++] = parseInt(t[S], 10)),
            (f = f + 1)),
            o && (s = s + 1),
            r && (l = l + 1),
            (a = a + 1),
            (S = S + 1);
        }
        if (r && !a) throw new Qe("" + t + " not a valid Decimal128 string");
        if (t[S] === "e" || t[S] === "E") {
          var V = t.substr(++S).match(DR);
          if (!V || !V[2]) return new e(Ae.from(Lp));
          (x = parseInt(V[0], 10)), (S = S + V[0].length);
        }
        if (t[S]) return new e(Ae.from(Lp));
        if (((b = 0), !f))
          (b = 0), (g = 0), (d[0] = 0), (s = 1), (f = 1), (i = 0);
        else if (((g = f - 1), (i = s), i !== 1))
          for (; d[u + i - 1] === 0; ) i = i - 1;
        for (x <= l && l - x > 1 << 14 ? (x = Mp) : (x = x - l); x > Fa; ) {
          if (((g = g + 1), g - b > UR)) {
            var Z = d.join("");
            if (Z.match(/^0+$/)) {
              x = Fa;
              break;
            }
            ai(t, "overflow");
          }
          x = x - 1;
        }
        for (; x < Mp || f < s; ) {
          if (g === 0 && i < f) {
            (x = Mp), (i = 0);
            break;
          }
          if ((f < s ? (s = s - 1) : (g = g - 1), x < Fa)) x = x + 1;
          else {
            var Z = d.join("");
            if (Z.match(/^0+$/)) {
              x = Fa;
              break;
            }
            ai(t, "overflow");
          }
        }
        if (g - b + 1 < i) {
          var D = a;
          r && ((u = u + 1), (D = D + 1)), n && ((u = u + 1), (D = D + 1));
          var Y = parseInt(t[u + g + 1], 10),
            Q = 0;
          if (Y >= 5 && ((Q = 1), Y === 5)) {
            for (Q = d[g] % 2 === 1 ? 1 : 0, R = u + g + 2; R < D; R++)
              if (parseInt(t[R], 10)) {
                Q = 1;
                break;
              }
          }
          if (Q) {
            for (var K = g; K >= 0; K--)
              if (++d[K] > 9 && ((d[K] = 0), K === 0))
                if (x < Fa) (x = x + 1), (d[K] = 1);
                else return new e(Ae.from(n ? Ib : $b));
          }
        }
        if (((y = se.fromNumber(0)), (m = se.fromNumber(0)), i === 0))
          (y = se.fromNumber(0)), (m = se.fromNumber(0));
        else if (g - b < 17) {
          var K = b;
          for (m = se.fromNumber(d[K++]), y = new se(0, 0); K <= g; K++)
            (m = m.multiply(se.fromNumber(10))),
              (m = m.add(se.fromNumber(d[K])));
        } else {
          var K = b;
          for (y = se.fromNumber(d[K++]); K <= g - 17; K++)
            (y = y.multiply(se.fromNumber(10))),
              (y = y.add(se.fromNumber(d[K])));
          for (m = se.fromNumber(d[K++]); K <= g; K++)
            (m = m.multiply(se.fromNumber(10))),
              (m = m.add(se.fromNumber(d[K])));
        }
        var z = GR(y, se.fromString("100000000000000000"));
        (z.low = z.low.add(m)),
          KR(z.low, m) && (z.high = z.high.add(se.fromNumber(1))),
          (v = x + _b);
        var F = { low: se.fromNumber(0), high: se.fromNumber(0) };
        z.high
          .shiftRightUnsigned(49)
          .and(se.fromNumber(1))
          .equals(se.fromNumber(1))
          ? ((F.high = F.high.or(se.fromNumber(3).shiftLeft(61))),
            (F.high = F.high.or(
              se.fromNumber(v).and(se.fromNumber(16383).shiftLeft(47)),
            )),
            (F.high = F.high.or(z.high.and(se.fromNumber(0x7fffffffffff)))))
          : ((F.high = F.high.or(se.fromNumber(v & 16383).shiftLeft(49))),
            (F.high = F.high.or(z.high.and(se.fromNumber(562949953421311))))),
          (F.low = z.low),
          n && (F.high = F.high.or(se.fromString("9223372036854775808")));
        var $ = Ae.alloc(16);
        return (
          (S = 0),
          ($[S++] = F.low.low & 255),
          ($[S++] = (F.low.low >> 8) & 255),
          ($[S++] = (F.low.low >> 16) & 255),
          ($[S++] = (F.low.low >> 24) & 255),
          ($[S++] = F.low.high & 255),
          ($[S++] = (F.low.high >> 8) & 255),
          ($[S++] = (F.low.high >> 16) & 255),
          ($[S++] = (F.low.high >> 24) & 255),
          ($[S++] = F.high.low & 255),
          ($[S++] = (F.high.low >> 8) & 255),
          ($[S++] = (F.high.low >> 16) & 255),
          ($[S++] = (F.high.low >> 24) & 255),
          ($[S++] = F.high.high & 255),
          ($[S++] = (F.high.high >> 8) & 255),
          ($[S++] = (F.high.high >> 16) & 255),
          ($[S++] = (F.high.high >> 24) & 255),
          new e($)
        );
      }),
      (e.prototype.toString = function () {
        for (var t, n = 0, r = new Array(36), o = 0; o < r.length; o++)
          r[o] = 0;
        var i = 0,
          a = !1,
          s,
          l = { parts: [0, 0, 0, 0] },
          u,
          d,
          f = [];
        i = 0;
        var h = this.bytes,
          b = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          g = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          x = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          R = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24);
        i = 0;
        var y = { low: new se(b, g), high: new se(x, R) };
        y.high.lessThan(se.ZERO) && f.push("-");
        var m = (R >> 26) & WR;
        if (m >> 3 === 3) {
          if (m === VR) return f.join("") + "Infinity";
          if (m === HR) return "NaN";
          (t = (R >> 15) & Mb), (s = 8 + ((R >> 14) & 1));
        } else (s = (R >> 14) & 7), (t = (R >> 17) & Mb);
        var v = t - _b;
        if (
          ((l.parts[0] = (R & 16383) + ((s & 15) << 14)),
          (l.parts[1] = x),
          (l.parts[2] = g),
          (l.parts[3] = b),
          l.parts[0] === 0 &&
            l.parts[1] === 0 &&
            l.parts[2] === 0 &&
            l.parts[3] === 0)
        )
          a = !0;
        else
          for (d = 3; d >= 0; d--) {
            var S = 0,
              C = qR(l);
            if (((l = C.quotient), (S = C.rem.low), !!S))
              for (u = 8; u >= 0; u--)
                (r[d * 9 + u] = S % 10), (S = Math.floor(S / 10));
          }
        if (a) (n = 1), (r[i] = 0);
        else for (n = 36; !r[i]; ) (n = n - 1), (i = i + 1);
        var N = n - 1 + v;
        if (N >= 34 || N <= -7 || v > 0) {
          if (n > 34)
            return (
              f.push("".concat(0)),
              v > 0 ? f.push("E+".concat(v)) : v < 0 && f.push("E".concat(v)),
              f.join("")
            );
          f.push("".concat(r[i++])), (n = n - 1), n && f.push(".");
          for (var o = 0; o < n; o++) f.push("".concat(r[i++]));
          f.push("E"), N > 0 ? f.push("+".concat(N)) : f.push("".concat(N));
        } else if (v >= 0)
          for (var o = 0; o < n; o++) f.push("".concat(r[i++]));
        else {
          var T = n + v;
          if (T > 0) for (var o = 0; o < T; o++) f.push("".concat(r[i++]));
          else f.push("0");
          for (f.push("."); T++ < 0; ) f.push("0");
          for (var o = 0; o < n - Math.max(T - 1, 0); o++)
            f.push("".concat(r[i++]));
        }
        return f.join("");
      }),
      (e.prototype.toJSON = function () {
        return { $numberDecimal: this.toString() };
      }),
      (e.prototype.toExtendedJSON = function () {
        return { $numberDecimal: this.toString() };
      }),
      (e.fromExtendedJSON = function (t) {
        return e.fromString(t.$numberDecimal);
      }),
      (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return this.inspect();
      }),
      (e.prototype.inspect = function () {
        return 'new Decimal128("'.concat(this.toString(), '")');
      }),
      e
    );
  })();
  Object.defineProperty(Fp.prototype, "_bsontype", { value: "Decimal128" });
  var $u = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      t instanceof Number && (t = t.valueOf()), (this.value = +t);
    }
    return (
      (e.prototype.valueOf = function () {
        return this.value;
      }),
      (e.prototype.toJSON = function () {
        return this.value;
      }),
      (e.prototype.toString = function (t) {
        return this.value.toString(t);
      }),
      (e.prototype.toExtendedJSON = function (t) {
        return t && (t.legacy || (t.relaxed && isFinite(this.value)))
          ? this.value
          : Object.is(Math.sign(this.value), -0)
          ? { $numberDouble: "-".concat(this.value.toFixed(1)) }
          : {
              $numberDouble: Number.isInteger(this.value)
                ? this.value.toFixed(1)
                : this.value.toString(),
            };
      }),
      (e.fromExtendedJSON = function (t, n) {
        var r = parseFloat(t.$numberDouble);
        return n && n.relaxed ? r : new e(r);
      }),
      (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return this.inspect();
      }),
      (e.prototype.inspect = function () {
        var t = this.toExtendedJSON();
        return "new Double(".concat(t.$numberDouble, ")");
      }),
      e
    );
  })();
  Object.defineProperty($u.prototype, "_bsontype", { value: "Double" });
  var Mu = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      t instanceof Number && (t = t.valueOf()), (this.value = +t | 0);
    }
    return (
      (e.prototype.valueOf = function () {
        return this.value;
      }),
      (e.prototype.toString = function (t) {
        return this.value.toString(t);
      }),
      (e.prototype.toJSON = function () {
        return this.value;
      }),
      (e.prototype.toExtendedJSON = function (t) {
        return t && (t.relaxed || t.legacy)
          ? this.value
          : { $numberInt: this.value.toString() };
      }),
      (e.fromExtendedJSON = function (t, n) {
        return n && n.relaxed
          ? parseInt(t.$numberInt, 10)
          : new e(t.$numberInt);
      }),
      (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return this.inspect();
      }),
      (e.prototype.inspect = function () {
        return "new Int32(".concat(this.valueOf(), ")");
      }),
      e
    );
  })();
  Object.defineProperty(Mu.prototype, "_bsontype", { value: "Int32" });
  var Bp = (function () {
    function e() {
      if (!(this instanceof e)) return new e();
    }
    return (
      (e.prototype.toExtendedJSON = function () {
        return { $maxKey: 1 };
      }),
      (e.fromExtendedJSON = function () {
        return new e();
      }),
      (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return this.inspect();
      }),
      (e.prototype.inspect = function () {
        return "new MaxKey()";
      }),
      e
    );
  })();
  Object.defineProperty(Bp.prototype, "_bsontype", { value: "MaxKey" });
  var jp = (function () {
    function e() {
      if (!(this instanceof e)) return new e();
    }
    return (
      (e.prototype.toExtendedJSON = function () {
        return { $minKey: 1 };
      }),
      (e.fromExtendedJSON = function () {
        return new e();
      }),
      (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return this.inspect();
      }),
      (e.prototype.inspect = function () {
        return "new MinKey()";
      }),
      e
    );
  })();
  Object.defineProperty(jp.prototype, "_bsontype", { value: "MinKey" });
  var YR = new RegExp("^[0-9a-fA-F]{24}$"),
    no = null,
    $n = Symbol("id"),
    Mt = (function () {
      function e(t) {
        if (!(this instanceof e)) return new e(t);
        var n;
        if (typeof t == "object" && t && "id" in t) {
          if (typeof t.id != "string" && !ArrayBuffer.isView(t.id))
            throw new Qe(
              "Argument passed in must have an id that is of type string or Buffer",
            );
          "toHexString" in t && typeof t.toHexString == "function"
            ? (n = Ae.from(t.toHexString(), "hex"))
            : (n = t.id);
        } else n = t;
        if (n == null || typeof n == "number")
          this[$n] = e.generate(typeof n == "number" ? n : void 0);
        else if (ArrayBuffer.isView(n) && n.byteLength === 12)
          this[$n] = n instanceof Ae ? n : _u(n);
        else if (typeof n == "string")
          if (n.length === 12) {
            var r = Ae.from(n);
            if (r.byteLength === 12) this[$n] = r;
            else
              throw new Qe("Argument passed in must be a string of 12 bytes");
          } else if (n.length === 24 && YR.test(n))
            this[$n] = Ae.from(n, "hex");
          else
            throw new Qe(
              "Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer",
            );
        else
          throw new Qe("Argument passed in does not match the accepted types");
        e.cacheHexString && (this.__id = this.id.toString("hex"));
      }
      return (
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this[$n];
          },
          set: function (t) {
            (this[$n] = t), e.cacheHexString && (this.__id = t.toString("hex"));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "generationTime", {
          get: function () {
            return this.id.readInt32BE(0);
          },
          set: function (t) {
            this.id.writeUInt32BE(t, 0);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.toHexString = function () {
          if (e.cacheHexString && this.__id) return this.__id;
          var t = this.id.toString("hex");
          return e.cacheHexString && !this.__id && (this.__id = t), t;
        }),
        (e.getInc = function () {
          return (e.index = (e.index + 1) % 16777215);
        }),
        (e.generate = function (t) {
          typeof t != "number" && (t = Math.floor(Date.now() / 1e3));
          var n = e.getInc(),
            r = Ae.alloc(12);
          return (
            r.writeUInt32BE(t, 0),
            no === null && (no = xb(5)),
            (r[4] = no[0]),
            (r[5] = no[1]),
            (r[6] = no[2]),
            (r[7] = no[3]),
            (r[8] = no[4]),
            (r[11] = n & 255),
            (r[10] = (n >> 8) & 255),
            (r[9] = (n >> 16) & 255),
            r
          );
        }),
        (e.prototype.toString = function (t) {
          return t ? this.id.toString(t) : this.toHexString();
        }),
        (e.prototype.toJSON = function () {
          return this.toHexString();
        }),
        (e.prototype.equals = function (t) {
          if (t == null) return !1;
          if (t instanceof e)
            return this[$n][11] === t[$n][11] && this[$n].equals(t[$n]);
          if (
            typeof t == "string" &&
            e.isValid(t) &&
            t.length === 12 &&
            _p(this.id)
          )
            return t === Ae.prototype.toString.call(this.id, "latin1");
          if (typeof t == "string" && e.isValid(t) && t.length === 24)
            return t.toLowerCase() === this.toHexString();
          if (typeof t == "string" && e.isValid(t) && t.length === 12)
            return Ae.from(t).equals(this.id);
          if (
            typeof t == "object" &&
            "toHexString" in t &&
            typeof t.toHexString == "function"
          ) {
            var n = t.toHexString(),
              r = this.toHexString().toLowerCase();
            return typeof n == "string" && n.toLowerCase() === r;
          }
          return !1;
        }),
        (e.prototype.getTimestamp = function () {
          var t = new Date(),
            n = this.id.readUInt32BE(0);
          return t.setTime(Math.floor(n) * 1e3), t;
        }),
        (e.createPk = function () {
          return new e();
        }),
        (e.createFromTime = function (t) {
          var n = Ae.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          return n.writeUInt32BE(t, 0), new e(n);
        }),
        (e.createFromHexString = function (t) {
          if (typeof t > "u" || (t != null && t.length !== 24))
            throw new Qe(
              "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
            );
          return new e(Ae.from(t, "hex"));
        }),
        (e.isValid = function (t) {
          if (t == null) return !1;
          try {
            return new e(t), !0;
          } catch {
            return !1;
          }
        }),
        (e.prototype.toExtendedJSON = function () {
          return this.toHexString
            ? { $oid: this.toHexString() }
            : { $oid: this.toString("hex") };
        }),
        (e.fromExtendedJSON = function (t) {
          return new e(t.$oid);
        }),
        (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (e.prototype.inspect = function () {
          return 'new ObjectId("'.concat(this.toHexString(), '")');
        }),
        (e.index = Math.floor(Math.random() * 16777215)),
        e
      );
    })();
  Object.defineProperty(Mt.prototype, "generate", {
    value: Pu(function (e) {
      return Mt.generate(e);
    }, "Please use the static `ObjectId.generate(time)` instead"),
  }),
    Object.defineProperty(Mt.prototype, "getInc", {
      value: Pu(function () {
        return Mt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Mt.prototype, "get_inc", {
      value: Pu(function () {
        return Mt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Mt, "get_inc", {
      value: Pu(function () {
        return Mt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Mt.prototype, "_bsontype", { value: "ObjectID" });
  function XR(e) {
    return e.split("").sort().join("");
  }
  var Ba = (function () {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      if (
        ((this.pattern = t),
        (this.options = XR(n ?? "")),
        this.pattern.indexOf("\0") !== -1)
      )
        throw new eo(
          "BSON Regex patterns cannot contain null bytes, found: ".concat(
            JSON.stringify(this.pattern),
          ),
        );
      if (this.options.indexOf("\0") !== -1)
        throw new eo(
          "BSON Regex options cannot contain null bytes, found: ".concat(
            JSON.stringify(this.options),
          ),
        );
      for (var r = 0; r < this.options.length; r++)
        if (
          !(
            this.options[r] === "i" ||
            this.options[r] === "m" ||
            this.options[r] === "x" ||
            this.options[r] === "l" ||
            this.options[r] === "s" ||
            this.options[r] === "u"
          )
        )
          throw new eo(
            "The regular expression option [".concat(
              this.options[r],
              "] is not supported",
            ),
          );
    }
    return (
      (e.parseOptions = function (t) {
        return t ? t.split("").sort().join("") : "";
      }),
      (e.prototype.toExtendedJSON = function (t) {
        return (
          (t = t || {}),
          t.legacy
            ? { $regex: this.pattern, $options: this.options }
            : {
                $regularExpression: {
                  pattern: this.pattern,
                  options: this.options,
                },
              }
        );
      }),
      (e.fromExtendedJSON = function (t) {
        if ("$regex" in t)
          if (typeof t.$regex != "string") {
            if (t.$regex._bsontype === "BSONRegExp") return t;
          } else return new e(t.$regex, e.parseOptions(t.$options));
        if ("$regularExpression" in t)
          return new e(
            t.$regularExpression.pattern,
            e.parseOptions(t.$regularExpression.options),
          );
        throw new Qe(
          "Unexpected BSONRegExp EJSON object form: ".concat(JSON.stringify(t)),
        );
      }),
      e
    );
  })();
  Object.defineProperty(Ba.prototype, "_bsontype", { value: "BSONRegExp" });
  var zp = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.valueOf = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return this.value;
      }),
      (e.prototype.inspect = function () {
        return 'new BSONSymbol("'.concat(this.value, '")');
      }),
      (e.prototype.toJSON = function () {
        return this.value;
      }),
      (e.prototype.toExtendedJSON = function () {
        return { $symbol: this.value };
      }),
      (e.fromExtendedJSON = function (t) {
        return new e(t.$symbol);
      }),
      (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return this.inspect();
      }),
      e
    );
  })();
  Object.defineProperty(zp.prototype, "_bsontype", { value: "Symbol" });
  var ZR = se,
    Fb = (function (e) {
      Au(t, e);
      function t(n, r) {
        var o = this;
        return o instanceof t
          ? (se.isLong(n)
              ? (o = e.call(this, n.low, n.high, !0) || this)
              : Ma(n) && typeof n.t < "u" && typeof n.i < "u"
              ? (o = e.call(this, n.i, n.t, !0) || this)
              : (o = e.call(this, n, r, !0) || this),
            Object.defineProperty(o, "_bsontype", {
              value: "Timestamp",
              writable: !1,
              configurable: !1,
              enumerable: !1,
            }),
            o)
          : new t(n, r);
      }
      return (
        (t.prototype.toJSON = function () {
          return { $timestamp: this.toString() };
        }),
        (t.fromInt = function (n) {
          return new t(se.fromInt(n, !0));
        }),
        (t.fromNumber = function (n) {
          return new t(se.fromNumber(n, !0));
        }),
        (t.fromBits = function (n, r) {
          return new t(n, r);
        }),
        (t.fromString = function (n, r) {
          return new t(se.fromString(n, !0, r));
        }),
        (t.prototype.toExtendedJSON = function () {
          return { $timestamp: { t: this.high >>> 0, i: this.low >>> 0 } };
        }),
        (t.fromExtendedJSON = function (n) {
          return new t(n.$timestamp);
        }),
        (t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (t.prototype.inspect = function () {
          return "new Timestamp({ t: "
            .concat(this.getHighBits(), ", i: ")
            .concat(this.getLowBits(), " })");
        }),
        (t.MAX_VALUE = se.MAX_UNSIGNED_VALUE),
        t
      );
    })(ZR);
  function QR(e) {
    return (
      Ma(e) && Reflect.has(e, "_bsontype") && typeof e._bsontype == "string"
    );
  }
  var Bb = 2147483647,
    jb = -2147483648,
    zb = 9223372036854776e3,
    Ub = -9223372036854776e3,
    JR = {
      $oid: Mt,
      $binary: to,
      $uuid: to,
      $symbol: zp,
      $numberInt: Mu,
      $numberDecimal: Fp,
      $numberDouble: $u,
      $numberLong: se,
      $minKey: jp,
      $maxKey: Bp,
      $regex: Ba,
      $regularExpression: Ba,
      $timestamp: Fb,
    };
  function Db(e, t) {
    if ((t === void 0 && (t = {}), typeof e == "number")) {
      if (t.relaxed || t.legacy) return e;
      if (Math.floor(e) === e) {
        if (e >= jb && e <= Bb) return new Mu(e);
        if (e >= Ub && e <= zb) return se.fromNumber(e);
      }
      return new $u(e);
    }
    if (e == null || typeof e != "object") return e;
    if (e.$undefined) return null;
    for (
      var n = Object.keys(e).filter(function (f) {
          return f.startsWith("$") && e[f] != null;
        }),
        r = 0;
      r < n.length;
      r++
    ) {
      var o = JR[n[r]];
      if (o) return o.fromExtendedJSON(e, t);
    }
    if (e.$date != null) {
      var i = e.$date,
        a = new Date();
      return (
        t.legacy
          ? typeof i == "number"
            ? a.setTime(i)
            : typeof i == "string" && a.setTime(Date.parse(i))
          : typeof i == "string"
          ? a.setTime(Date.parse(i))
          : se.isLong(i)
          ? a.setTime(i.toNumber())
          : typeof i == "number" && t.relaxed && a.setTime(i),
        a
      );
    }
    if (e.$code != null) {
      var s = Object.assign({}, e);
      return e.$scope && (s.$scope = Db(e.$scope)), Iu.fromExtendedJSON(e);
    }
    if (LR(e) || e.$dbPointer) {
      var l = e.$ref ? e : e.$dbPointer;
      if (l instanceof La) return l;
      var u = Object.keys(l).filter(function (f) {
          return f.startsWith("$");
        }),
        d = !0;
      if (
        (u.forEach(function (f) {
          ["$ref", "$id", "$db"].indexOf(f) === -1 && (d = !1);
        }),
        d)
      )
        return La.fromExtendedJSON(l);
    }
    return e;
  }
  function e6(e, t) {
    return e.map(function (n, r) {
      t.seenObjects.push({ propertyName: "index ".concat(r), obj: null });
      try {
        return kr(n, t);
      } finally {
        t.seenObjects.pop();
      }
    });
  }
  function Wb(e) {
    var t = e.toISOString();
    return e.getUTCMilliseconds() !== 0 ? t : t.slice(0, -5) + "Z";
  }
  function kr(e, t) {
    if ((typeof e == "object" || typeof e == "function") && e !== null) {
      var n = t.seenObjects.findIndex(function (y) {
        return y.obj === e;
      });
      if (n !== -1) {
        var r = t.seenObjects.map(function (y) {
            return y.propertyName;
          }),
          o = r
            .slice(0, n)
            .map(function (y) {
              return "".concat(y, " -> ");
            })
            .join(""),
          i = r[n],
          a =
            " -> " +
            r
              .slice(n + 1, r.length - 1)
              .map(function (y) {
                return "".concat(y, " -> ");
              })
              .join(""),
          s = r[r.length - 1],
          l = " ".repeat(o.length + i.length / 2),
          u = "-".repeat(a.length + (i.length + s.length) / 2 - 1);
        throw new Qe(
          `Converting circular structure to EJSON:
` +
            "    "
              .concat(o)
              .concat(i)
              .concat(a)
              .concat(
                s,
                `
`,
              ) +
            "    ".concat(l, "\\").concat(u, "/"),
        );
      }
      t.seenObjects[t.seenObjects.length - 1].obj = e;
    }
    if (Array.isArray(e)) return e6(e, t);
    if (e === void 0) return null;
    if (e instanceof Date || _R(e)) {
      var d = e.getTime(),
        f = d > -1 && d < 2534023188e5;
      return t.legacy
        ? t.relaxed && f
          ? { $date: e.getTime() }
          : { $date: Wb(e) }
        : t.relaxed && f
        ? { $date: Wb(e) }
        : { $date: { $numberLong: e.getTime().toString() } };
    }
    if (typeof e == "number" && (!t.relaxed || !isFinite(e))) {
      if (Math.floor(e) === e) {
        var h = e >= jb && e <= Bb,
          b = e >= Ub && e <= zb;
        if (h) return { $numberInt: e.toString() };
        if (b) return { $numberLong: e.toString() };
      }
      return { $numberDouble: e.toString() };
    }
    if (e instanceof RegExp || PR(e)) {
      var g = e.flags;
      if (g === void 0) {
        var x = e.toString().match(/[gimuy]*$/);
        x && (g = x[0]);
      }
      var R = new Ba(e.source, g);
      return R.toExtendedJSON(t);
    }
    return e != null && typeof e == "object" ? n6(e, t) : e;
  }
  var t6 = {
    Binary: function (e) {
      return new to(e.value(), e.sub_type);
    },
    Code: function (e) {
      return new Iu(e.code, e.scope);
    },
    DBRef: function (e) {
      return new La(e.collection || e.namespace, e.oid, e.db, e.fields);
    },
    Decimal128: function (e) {
      return new Fp(e.bytes);
    },
    Double: function (e) {
      return new $u(e.value);
    },
    Int32: function (e) {
      return new Mu(e.value);
    },
    Long: function (e) {
      return se.fromBits(
        e.low != null ? e.low : e.low_,
        e.low != null ? e.high : e.high_,
        e.low != null ? e.unsigned : e.unsigned_,
      );
    },
    MaxKey: function () {
      return new Bp();
    },
    MinKey: function () {
      return new jp();
    },
    ObjectID: function (e) {
      return new Mt(e);
    },
    ObjectId: function (e) {
      return new Mt(e);
    },
    BSONRegExp: function (e) {
      return new Ba(e.pattern, e.options);
    },
    Symbol: function (e) {
      return new zp(e.value);
    },
    Timestamp: function (e) {
      return Fb.fromBits(e.low, e.high);
    },
  };
  function n6(e, t) {
    if (e == null || typeof e != "object")
      throw new eo("not an object instance");
    var n = e._bsontype;
    if (typeof n > "u") {
      var r = {};
      for (var o in e) {
        t.seenObjects.push({ propertyName: o, obj: null });
        try {
          var i = kr(e[o], t);
          o === "__proto__"
            ? Object.defineProperty(r, o, {
                value: i,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              })
            : (r[o] = i);
        } finally {
          t.seenObjects.pop();
        }
      }
      return r;
    } else if (QR(e)) {
      var a = e;
      if (typeof a.toExtendedJSON != "function") {
        var s = t6[e._bsontype];
        if (!s)
          throw new Qe("Unrecognized or invalid _bsontype: " + e._bsontype);
        a = s(a);
      }
      return (
        n === "Code" && a.scope
          ? (a = new Iu(a.code, kr(a.scope, t)))
          : n === "DBRef" &&
            a.oid &&
            (a = new La(
              kr(a.collection, t),
              kr(a.oid, t),
              kr(a.db, t),
              kr(a.fields, t),
            )),
        a.toExtendedJSON(t)
      );
    } else throw new eo("_bsontype must be a string, but was: " + typeof n);
  }
  var ro;
  (function (e) {
    function t(i, a) {
      var s = Object.assign({}, { relaxed: !0, legacy: !1 }, a);
      return (
        typeof s.relaxed == "boolean" && (s.strict = !s.relaxed),
        typeof s.strict == "boolean" && (s.relaxed = !s.strict),
        JSON.parse(i, function (l, u) {
          if (l.indexOf("\0") !== -1)
            throw new eo(
              "BSON Document field names cannot contain null bytes, found: ".concat(
                JSON.stringify(l),
              ),
            );
          return Db(u, s);
        })
      );
    }
    e.parse = t;
    function n(i, a, s, l) {
      s != null && typeof s == "object" && ((l = s), (s = 0)),
        a != null &&
          typeof a == "object" &&
          !Array.isArray(a) &&
          ((l = a), (a = void 0), (s = 0));
      var u = Object.assign({ relaxed: !0, legacy: !1 }, l, {
          seenObjects: [{ propertyName: "(root)", obj: null }],
        }),
        d = kr(i, u);
      return JSON.stringify(d, a, s);
    }
    e.stringify = n;
    function r(i, a) {
      return (a = a || {}), JSON.parse(n(i, a));
    }
    e.serialize = r;
    function o(i, a) {
      return (a = a || {}), t(JSON.stringify(i), a);
    }
    e.deserialize = o;
  })(ro || (ro = {}));
  var Vb = Sb();
  Vb.Map
    ? Vb.Map
    : (function () {
        function e(t) {
          t === void 0 && (t = []), (this._keys = []), (this._values = {});
          for (var n = 0; n < t.length; n++)
            if (t[n] != null) {
              var r = t[n],
                o = r[0],
                i = r[1];
              this._keys.push(o),
                (this._values[o] = { v: i, i: this._keys.length - 1 });
            }
        }
        return (
          (e.prototype.clear = function () {
            (this._keys = []), (this._values = {});
          }),
          (e.prototype.delete = function (t) {
            var n = this._values[t];
            return n == null
              ? !1
              : (delete this._values[t], this._keys.splice(n.i, 1), !0);
          }),
          (e.prototype.entries = function () {
            var t = this,
              n = 0;
            return {
              next: function () {
                var r = t._keys[n++];
                return {
                  value: r !== void 0 ? [r, t._values[r].v] : void 0,
                  done: r === void 0,
                };
              },
            };
          }),
          (e.prototype.forEach = function (t, n) {
            n = n || this;
            for (var r = 0; r < this._keys.length; r++) {
              var o = this._keys[r];
              t.call(n, this._values[o].v, o, n);
            }
          }),
          (e.prototype.get = function (t) {
            return this._values[t] ? this._values[t].v : void 0;
          }),
          (e.prototype.has = function (t) {
            return this._values[t] != null;
          }),
          (e.prototype.keys = function () {
            var t = this,
              n = 0;
            return {
              next: function () {
                var r = t._keys[n++];
                return { value: r !== void 0 ? r : void 0, done: r === void 0 };
              },
            };
          }),
          (e.prototype.set = function (t, n) {
            return this._values[t]
              ? ((this._values[t].v = n), this)
              : (this._keys.push(t),
                (this._values[t] = { v: n, i: this._keys.length - 1 }),
                this);
          }),
          (e.prototype.values = function () {
            var t = this,
              n = 0;
            return {
              next: function () {
                var r = t._keys[n++];
                return {
                  value: r !== void 0 ? t._values[r].v : void 0,
                  done: r === void 0,
                };
              },
            };
          }),
          Object.defineProperty(e.prototype, "size", {
            get: function () {
              return this._keys.length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(),
    se.fromNumber($R),
    se.fromNumber(MR);
  var Up = new Uint8Array(8);
  new DataView(Up.buffer, Up.byteOffset, Up.byteLength);
  var r6 = 1024 * 1024 * 17;
  Ae.alloc(r6);
  var Hb = function (e, t, n) {
      if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
          (i || !(r in t)) &&
            (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
      return e.concat(i || Array.prototype.slice.call(t));
    },
    o6 = (function () {
      function e(t, n, r) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.type = "browser");
      }
      return e;
    })(),
    i6 = (function () {
      function e(t) {
        (this.version = t),
          (this.type = "node"),
          (this.name = "node"),
          (this.os = process.platform);
      }
      return e;
    })(),
    a6 = (function () {
      function e(t, n, r, o) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.bot = o),
          (this.type = "bot-device");
      }
      return e;
    })(),
    s6 = (function () {
      function e() {
        (this.type = "bot"),
          (this.bot = !0),
          (this.name = "bot"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    l6 = (function () {
      function e() {
        (this.type = "react-native"),
          (this.name = "react-native"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    u6 =
      /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    c6 =
      /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    qb = 3,
    d6 = [
      ["aol", /AOLShield\/([0-9\._]+)/],
      ["edge", /Edge\/([0-9\._]+)/],
      ["edge-ios", /EdgiOS\/([0-9\._]+)/],
      ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
      ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
      ["samsung", /SamsungBrowser\/([0-9\.]+)/],
      ["silk", /\bSilk\/([0-9._-]+)\b/],
      ["miui", /MiuiBrowser\/([0-9\.]+)$/],
      ["beaker", /BeakerBrowser\/([0-9\.]+)/],
      ["edge-chromium", /EdgA?\/([0-9\.]+)/],
      [
        "chromium-webview",
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
      ],
      ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
      ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
      ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
      ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
      ["fxios", /FxiOS\/([0-9\.]+)/],
      ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
      ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
      ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
      ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
      ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
      ["ie", /MSIE\s(7\.0)/],
      ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
      ["android", /Android\s([0-9\.]+)/],
      ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
      ["safari", /Version\/([0-9\._]+).*Safari/],
      ["facebook", /FB[AS]V\/([0-9\.]+)/],
      ["instagram", /Instagram\s([0-9\.]+)/],
      ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
      ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
      ["curl", /^curl\/([0-9\.]+)$/],
      ["searchbot", u6],
    ],
    Gb = [
      ["iOS", /iP(hone|od|ad)/],
      ["Android OS", /Android/],
      ["BlackBerry OS", /BlackBerry|BB10/],
      ["Windows Mobile", /IEMobile/],
      ["Amazon OS", /Kindle/],
      ["Windows 3.11", /Win16/],
      ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
      ["Windows 98", /(Windows 98)|(Win98)/],
      ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
      ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
      ["Windows Server 2003", /(Windows NT 5.2)/],
      ["Windows Vista", /(Windows NT 6.0)/],
      ["Windows 7", /(Windows NT 6.1)/],
      ["Windows 8", /(Windows NT 6.2)/],
      ["Windows 8.1", /(Windows NT 6.3)/],
      ["Windows 10", /(Windows NT 10.0)/],
      ["Windows ME", /Windows ME/],
      ["Open BSD", /OpenBSD/],
      ["Sun OS", /SunOS/],
      ["Chrome OS", /CrOS/],
      ["Linux", /(Linux)|(X11)/],
      ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
      ["QNX", /QNX/],
      ["BeOS", /BeOS/],
      ["OS/2", /OS\/2/],
    ];
  function f6(e) {
    return e
      ? Kb(e)
      : typeof document > "u" &&
        typeof navigator < "u" &&
        navigator.product === "ReactNative"
      ? new l6()
      : typeof navigator < "u"
      ? Kb(navigator.userAgent)
      : m6();
  }
  function p6(e) {
    return (
      e !== "" &&
      d6.reduce(function (t, n) {
        var r = n[0],
          o = n[1];
        if (t) return t;
        var i = o.exec(e);
        return !!i && [r, i];
      }, !1)
    );
  }
  function Kb(e) {
    var t = p6(e);
    if (!t) return null;
    var n = t[0],
      r = t[1];
    if (n === "searchbot") return new s6();
    var o = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
    o
      ? o.length < qb && (o = Hb(Hb([], o, !0), g6(qb - o.length), !0))
      : (o = []);
    var i = o.join("."),
      a = h6(e),
      s = c6.exec(e);
    return s && s[1] ? new a6(n, i, a, s[1]) : new o6(n, i, a);
  }
  function h6(e) {
    for (var t = 0, n = Gb.length; t < n; t++) {
      var r = Gb[t],
        o = r[0],
        i = r[1],
        a = i.exec(e);
      if (a) return o;
    }
    return null;
  }
  function m6() {
    var e = typeof process < "u" && process.version;
    return e ? new i6(process.version.slice(1)) : null;
  }
  function g6(e) {
    for (var t = [], n = 0; n < e; n++) t.push("0");
    return t;
  }
  class Mn {
    constructor() {
      if (!Mn.fetch)
        throw new Error(
          "DefaultNetworkTransport.fetch must be set before it's used",
        );
      if (!Mn.AbortController)
        throw new Error(
          "DefaultNetworkTransport.AbortController must be set before it's used",
        );
    }
    fetchWithCallbacks(t, n) {
      this.fetch(t)
        .then(async (r) => {
          const o = await r.text(),
            i = {};
          return (
            r.headers.forEach((a, s) => {
              i[s] = a;
            }),
            { statusCode: r.status, headers: i, body: o }
          );
        })
        .then((r) => n.onSuccess(r))
        .catch((r) => n.onError(r));
    }
    async fetch(t) {
      const { timeoutMs: n, url: r, ...o } = t,
        { signal: i, cancelTimeout: a } = this.createTimeoutSignal(n);
      try {
        return await Mn.fetch(r, { ...Mn.extraFetchOptions, signal: i, ...o });
      } finally {
        a();
      }
    }
    createTimeoutSignal(t) {
      if (typeof t == "number") {
        const n = new Mn.AbortController(),
          r = setTimeout(() => {
            n.abort();
          }, t);
        return {
          signal: n.signal,
          cancelTimeout: () => {
            clearTimeout(r);
          },
        };
      } else return { signal: void 0, cancelTimeout: () => {} };
    }
  }
  Mn.DEFAULT_HEADERS = { "Content-Type": "application/json" };
  const v6 = (e) => {},
    Lu = function (e) {
      return e && e.Math == Math && e;
    },
    Fu =
      Lu(typeof globalThis == "object" && globalThis) ||
      Lu(typeof window == "object" && window) ||
      Lu(typeof self == "object" && self) ||
      Lu(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  v6(typeof __DEV__ < "u" && __DEV__),
    (Mn.fetch = Fu.fetch.bind(Fu)),
    (Mn.AbortController = Fu.AbortController.bind(Fu));
  const Yb = "3.7.2",
    y6 = Yb,
    b6 = typeof atob == "function",
    w6 = typeof btoa == "function",
    si = typeof Buffer == "function",
    Xb = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
    Zb = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
    S6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ja = Array.prototype.slice.call(S6),
    Bu = ((e) => {
      let t = {};
      return e.forEach((n, r) => (t[n] = r)), t;
    })(ja),
    x6 =
      /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    gt = String.fromCharCode.bind(String),
    Qb =
      typeof Uint8Array.from == "function"
        ? Uint8Array.from.bind(Uint8Array)
        : (e, t = (n) => n) =>
            new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
    Jb = (e) =>
      e.replace(/=/g, "").replace(/[+\/]/g, (t) => (t == "+" ? "-" : "_")),
    e1 = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
    t1 = (e) => {
      let t,
        n,
        r,
        o,
        i = "";
      const a = e.length % 3;
      for (let s = 0; s < e.length; ) {
        if (
          (n = e.charCodeAt(s++)) > 255 ||
          (r = e.charCodeAt(s++)) > 255 ||
          (o = e.charCodeAt(s++)) > 255
        )
          throw new TypeError("invalid character found");
        (t = (n << 16) | (r << 8) | o),
          (i +=
            ja[(t >> 18) & 63] +
            ja[(t >> 12) & 63] +
            ja[(t >> 6) & 63] +
            ja[t & 63]);
      }
      return a ? i.slice(0, a - 3) + "===".substring(a) : i;
    },
    Dp = w6
      ? (e) => btoa(e)
      : si
      ? (e) => Buffer.from(e, "binary").toString("base64")
      : t1,
    Wp = si
      ? (e) => Buffer.from(e).toString("base64")
      : (e) => {
          let t = [];
          for (let n = 0, r = e.length; n < r; n += 4096)
            t.push(gt.apply(null, e.subarray(n, n + 4096)));
          return Dp(t.join(""));
        },
    ju = (e, t = !1) => (t ? Jb(Wp(e)) : Wp(e)),
    k6 = (e) => {
      if (e.length < 2) {
        var t = e.charCodeAt(0);
        return t < 128
          ? e
          : t < 2048
          ? gt(192 | (t >>> 6)) + gt(128 | (t & 63))
          : gt(224 | ((t >>> 12) & 15)) +
            gt(128 | ((t >>> 6) & 63)) +
            gt(128 | (t & 63));
      } else {
        var t =
          65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
        return (
          gt(240 | ((t >>> 18) & 7)) +
          gt(128 | ((t >>> 12) & 63)) +
          gt(128 | ((t >>> 6) & 63)) +
          gt(128 | (t & 63))
        );
      }
    },
    E6 = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    n1 = (e) => e.replace(E6, k6),
    r1 = si
      ? (e) => Buffer.from(e, "utf8").toString("base64")
      : Zb
      ? (e) => Wp(Zb.encode(e))
      : (e) => Dp(n1(e)),
    li = (e, t = !1) => (t ? Jb(r1(e)) : r1(e)),
    o1 = (e) => li(e, !0),
    C6 =
      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    O6 = (e) => {
      switch (e.length) {
        case 4:
          var t =
              ((7 & e.charCodeAt(0)) << 18) |
              ((63 & e.charCodeAt(1)) << 12) |
              ((63 & e.charCodeAt(2)) << 6) |
              (63 & e.charCodeAt(3)),
            n = t - 65536;
          return gt((n >>> 10) + 55296) + gt((n & 1023) + 56320);
        case 3:
          return gt(
            ((15 & e.charCodeAt(0)) << 12) |
              ((63 & e.charCodeAt(1)) << 6) |
              (63 & e.charCodeAt(2)),
          );
        default:
          return gt(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
      }
    },
    i1 = (e) => e.replace(C6, O6),
    a1 = (e) => {
      if (((e = e.replace(/\s+/g, "")), !x6.test(e)))
        throw new TypeError("malformed base64.");
      e += "==".slice(2 - (e.length & 3));
      let t,
        n = "",
        r,
        o;
      for (let i = 0; i < e.length; )
        (t =
          (Bu[e.charAt(i++)] << 18) |
          (Bu[e.charAt(i++)] << 12) |
          ((r = Bu[e.charAt(i++)]) << 6) |
          (o = Bu[e.charAt(i++)])),
          (n +=
            r === 64
              ? gt((t >> 16) & 255)
              : o === 64
              ? gt((t >> 16) & 255, (t >> 8) & 255)
              : gt((t >> 16) & 255, (t >> 8) & 255, t & 255));
      return n;
    },
    Vp = b6
      ? (e) => atob(e1(e))
      : si
      ? (e) => Buffer.from(e, "base64").toString("binary")
      : a1,
    s1 = si
      ? (e) => Qb(Buffer.from(e, "base64"))
      : (e) => Qb(Vp(e), (t) => t.charCodeAt(0)),
    l1 = (e) => s1(u1(e)),
    N6 = si
      ? (e) => Buffer.from(e, "base64").toString("utf8")
      : Xb
      ? (e) => Xb.decode(s1(e))
      : (e) => i1(Vp(e)),
    u1 = (e) => e1(e.replace(/[-_]/g, (t) => (t == "-" ? "+" : "/"))),
    Hp = (e) => N6(u1(e)),
    T6 = (e) => {
      if (typeof e != "string") return !1;
      const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
    },
    c1 = (e) => ({ value: e, enumerable: !1, writable: !0, configurable: !0 }),
    d1 = function () {
      const e = (t, n) => Object.defineProperty(String.prototype, t, c1(n));
      e("fromBase64", function () {
        return Hp(this);
      }),
        e("toBase64", function (t) {
          return li(this, t);
        }),
        e("toBase64URI", function () {
          return li(this, !0);
        }),
        e("toBase64URL", function () {
          return li(this, !0);
        }),
        e("toUint8Array", function () {
          return l1(this);
        });
    },
    f1 = function () {
      const e = (t, n) => Object.defineProperty(Uint8Array.prototype, t, c1(n));
      e("toBase64", function (t) {
        return ju(this, t);
      }),
        e("toBase64URI", function () {
          return ju(this, !0);
        }),
        e("toBase64URL", function () {
          return ju(this, !0);
        });
    },
    A6 = () => {
      d1(), f1();
    },
    zu = {
      version: Yb,
      VERSION: y6,
      atob: Vp,
      atobPolyfill: a1,
      btoa: Dp,
      btoaPolyfill: t1,
      fromBase64: Hp,
      toBase64: li,
      encode: li,
      encodeURI: o1,
      encodeURL: o1,
      utob: n1,
      btou: i1,
      decode: Hp,
      isValid: T6,
      fromUint8Array: ju,
      toUint8Array: l1,
      extendString: d1,
      extendUint8Array: f1,
      extendBuiltins: A6,
    },
    R6 = { relaxed: !1 };
  function p1(e) {
    return ro.serialize(e, R6);
  }
  function h1(e) {
    return Array.isArray(e)
      ? e.map((t) => ro.deserialize(t))
      : ro.deserialize(e);
  }
  var qp;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(qp || (qp = {}));
  var bn;
  (function (e) {
    (e.NAME = "name"),
      (e.EMAIL = "email"),
      (e.PICTURE = "picture"),
      (e.FIRST_NAME = "first_name"),
      (e.LAST_NAME = "last_name"),
      (e.GENDER = "gender"),
      (e.BIRTHDAY = "birthday"),
      (e.MIN_AGE = "min_age"),
      (e.MAX_AGE = "max_age");
  })(bn || (bn = {}));
  const m1 = {
    [bn.NAME]: "name",
    [bn.EMAIL]: "email",
    [bn.PICTURE]: "pictureUrl",
    [bn.FIRST_NAME]: "firstName",
    [bn.LAST_NAME]: "lastName",
    [bn.GENDER]: "gender",
    [bn.BIRTHDAY]: "birthday",
    [bn.MIN_AGE]: "minAge",
    [bn.MAX_AGE]: "maxAge",
  };
  class g1 {
    constructor(t) {
      if (
        ((this.type = qp.Normal),
        (this.identities = []),
        typeof t == "object" && t !== null)
      ) {
        const { type: n, identities: r, data: o } = t;
        if (typeof n == "string") this.type = n;
        else throw new Error("Expected 'type' in the response body");
        if (Array.isArray(r))
          this.identities = r.map((i) => {
            const { id: a, provider_type: s } = i;
            return { id: a, providerType: s };
          });
        else throw new Error("Expected 'identities' in the response body");
        if (typeof o == "object" && o !== null) {
          const i = Object.fromEntries(
            Object.entries(o).map(([a, s]) => (a in m1 ? [m1[a], s] : [a, s])),
          );
          this.data = h1(i);
        } else throw new Error("Expected 'data' in the response body");
      } else this.data = {};
    }
  }
  class wn {
    constructor(t, n) {
      (this.storage = t), (this.keyPart = n);
    }
    get(t) {
      return this.storage.get(this.keyPart + wn.PART_SEPARATOR + t);
    }
    set(t, n) {
      return this.storage.set(this.keyPart + wn.PART_SEPARATOR + t, n);
    }
    remove(t) {
      return this.storage.remove(this.keyPart + wn.PART_SEPARATOR + t);
    }
    prefix(t) {
      return new wn(this, t);
    }
    clear(t = "") {
      return this.storage.clear(this.keyPart + wn.PART_SEPARATOR + t);
    }
    addListener(t) {
      return this.storage.addListener(t);
    }
    removeListener(t) {
      return this.storage.addListener(t);
    }
  }
  wn.PART_SEPARATOR = ":";
  class P6 {
    constructor() {
      (this.storage = {}), (this.listeners = new Set());
    }
    get(t) {
      return t in this.storage ? this.storage[t] : null;
    }
    set(t, n) {
      (this.storage[t] = n), this.fireListeners();
    }
    remove(t) {
      delete this.storage[t], this.fireListeners();
    }
    prefix(t) {
      return new wn(this, t);
    }
    clear(t) {
      for (const n of Object.keys(this.storage))
        (!t || n.startsWith(t)) && delete this.storage[n];
      this.fireListeners();
    }
    addListener(t) {
      this.listeners.add(t);
    }
    removeListener(t) {
      this.listeners.delete(t);
    }
    fireListeners() {
      this.listeners.forEach((t) => t());
    }
  }
  const Gp = "accessToken",
    Kp = "refreshToken",
    Yp = "profile",
    Xp = "providerType";
  class _6 extends wn {
    constructor(t, n) {
      super(t, `user(${n})`);
    }
    get accessToken() {
      return this.get(Gp);
    }
    set accessToken(t) {
      t === null ? this.remove(Gp) : this.set(Gp, t);
    }
    get refreshToken() {
      return this.get(Kp);
    }
    set refreshToken(t) {
      t === null ? this.remove(Kp) : this.set(Kp, t);
    }
    get profile() {
      const t = this.get(Yp);
      if (t) {
        const n = new g1();
        return Object.assign(n, JSON.parse(t)), n;
      }
    }
    set profile(t) {
      t ? this.set(Yp, JSON.stringify(t)) : this.remove(Yp);
    }
    get providerType() {
      const t = this.get(Xp);
      if (t) return t;
    }
    set providerType(t) {
      t ? this.set(Xp, t) : this.remove(Xp);
    }
  }
  function Zp(e) {
    return Object.fromEntries(
      Object.entries(e).filter((t) => typeof t[1] < "u"),
    );
  }
  function I6(e, t) {
    let n = "";
    for (let r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)];
    return n;
  }
  function v1(e, t = !0) {
    const n = Zp(e);
    return (
      (t && Object.keys(n).length > 0 ? "?" : "") +
      Object.entries(n)
        .map(([r, o]) => `${r}=${encodeURIComponent(o)}`)
        .join("&")
    );
  }
  function $6(e) {
    const t = e[0] === "?" ? e.substr(1) : e;
    return Object.fromEntries(
      t
        .split("&")
        .filter((n) => n.length > 0)
        .map((n) => n.split("="))
        .map(([n, r]) => [n, decodeURIComponent(r)]),
    );
  }
  const M6 = [
    "inspect",
    "callFunction",
    "callFunctionStreaming",
    ...Object.getOwnPropertyNames(Object.prototype),
  ];
  function L6(e) {
    for (const t of e)
      if (typeof t == "object" && t)
        for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n];
    return e;
  }
  function F6(e) {
    return L6(e).map((t) => (typeof t == "object" ? p1(t) : t));
  }
  class Uu {
    constructor(t, n = {}) {
      (this.fetcher = t),
        (this.serviceName = n.serviceName),
        (this.argsTransformation = n.argsTransformation || F6);
    }
    static create(t, n = {}) {
      const r = new Uu(t, n);
      return new Proxy(r, {
        get(o, i, a) {
          if (typeof i == "string" && M6.indexOf(i) === -1)
            return o.callFunction.bind(o, i);
          {
            const s = Reflect.get(o, i, a);
            return typeof s == "function" ? s.bind(o) : s;
          }
        },
      });
    }
    async callFunction(t, ...n) {
      const r = {
        name: t,
        arguments: this.argsTransformation ? this.argsTransformation(n) : n,
      };
      this.serviceName && (r.service = this.serviceName);
      const o = this.fetcher.appRoute;
      return this.fetcher.fetchJSON({
        method: "POST",
        path: o.functionsCall().path,
        body: r,
      });
    }
    callFunctionStreaming(t, ...n) {
      const r = {
        name: t,
        arguments: this.argsTransformation ? this.argsTransformation(n) : n,
      };
      this.serviceName && (r.service = this.serviceName);
      const o = this.fetcher.appRoute,
        i = v1({ baas_request: zu.encode(JSON.stringify(r)) });
      return this.fetcher.fetchStream({
        method: "GET",
        path: o.functionsCall().path + i,
      });
    }
  }
  class B6 {
    constructor(t, n = "local-userpass") {
      (this.fetcher = t), (this.providerName = n);
    }
    async registerUser(t) {
      const n = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: n.emailPasswordAuth(this.providerName).register().path,
        body: t,
      });
    }
    async confirmUser(t) {
      const n = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: n.emailPasswordAuth(this.providerName).confirm().path,
        body: t,
      });
    }
    async resendConfirmationEmail(t) {
      const n = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: n.emailPasswordAuth(this.providerName).confirmSend().path,
        body: t,
      });
    }
    async retryCustomConfirmation(t) {
      const n = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: n.emailPasswordAuth(this.providerName).confirmCall().path,
        body: t,
      });
    }
    async resetPassword(t) {
      const n = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: n.emailPasswordAuth(this.providerName).reset().path,
        body: t,
      });
    }
    async sendResetPasswordEmail(t) {
      const n = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: n.emailPasswordAuth(this.providerName).resetSend().path,
        body: t,
      });
    }
    async callResetPasswordFunction(t, ...n) {
      const r = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: r.emailPasswordAuth(this.providerName).resetCall().path,
        body: { ...t, arguments: n },
      });
    }
  }
  function j6() {
    return {
      path: "/api/client/v2.0",
      app(e) {
        return {
          path: this.path + `/app/${e}`,
          location() {
            return { path: this.path + "/location" };
          },
          authProvider(t) {
            return {
              path: this.path + `/auth/providers/${t}`,
              login() {
                return { path: this.path + "/login" };
              },
            };
          },
          emailPasswordAuth(t) {
            return {
              ...this.authProvider(t),
              register() {
                return { path: this.path + "/register" };
              },
              confirm() {
                return { path: this.path + "/confirm" };
              },
              confirmSend() {
                return { path: this.path + "/confirm/send" };
              },
              confirmCall() {
                return { path: this.path + "/confirm/call" };
              },
              reset() {
                return { path: this.path + "/reset" };
              },
              resetSend() {
                return { path: this.path + "/reset/send" };
              },
              resetCall() {
                return { path: this.path + "/reset/call" };
              },
            };
          },
          functionsCall() {
            return { path: this.path + "/functions/call" };
          },
        };
      },
      auth() {
        return {
          path: this.path + "/auth",
          apiKeys() {
            return {
              path: this.path + "/api_keys",
              key(e) {
                return {
                  path: this.path + `/${e}`,
                  enable() {
                    return { path: this.path + "/enable" };
                  },
                  disable() {
                    return { path: this.path + "/disable" };
                  },
                };
              },
            };
          },
          profile() {
            return { path: this.path + "/profile" };
          },
          session() {
            return { path: this.path + "/session" };
          },
          delete() {
            return { path: this.path + "/delete" };
          },
        };
      },
    };
  }
  var ln = { api: j6 };
  class z6 {
    constructor(t) {
      this.fetcher = t;
    }
    create(t) {
      return this.fetcher.fetchJSON({
        method: "POST",
        body: { name: t },
        path: ln.api().auth().apiKeys().path,
        tokenType: "refresh",
      });
    }
    fetch(t) {
      return this.fetcher.fetchJSON({
        method: "GET",
        path: ln.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    fetchAll() {
      return this.fetcher.fetchJSON({
        method: "GET",
        tokenType: "refresh",
        path: ln.api().auth().apiKeys().path,
      });
    }
    async delete(t) {
      await this.fetcher.fetchJSON({
        method: "DELETE",
        path: ln.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    async enable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: ln.api().auth().apiKeys().key(t).enable().path,
        tokenType: "refresh",
      });
    }
    async disable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: ln.api().auth().apiKeys().key(t).disable().path,
        tokenType: "refresh",
      });
    }
  }
  let Qp = null;
  function U6(e) {
    Qp = e;
  }
  function za() {
    if (Qp) return Qp;
    throw new Error("Cannot get environment before it's set");
  }
  class Jp extends Error {
    constructor({ message: t, code: n }) {
      super(t), (this.name = "WatchError"), (this.code = n);
    }
  }
  var Nt;
  (function (e) {
    (e.NEED_DATA = "NEED_DATA"),
      (e.HAVE_EVENT = "HAVE_EVENT"),
      (e.HAVE_ERROR = "HAVE_ERROR");
  })(Nt || (Nt = {}));
  class D6 {
    constructor() {
      (this._state = Nt.NEED_DATA),
        (this._error = null),
        (this._textDecoder = new (za().TextDecoder)()),
        (this._buffer = ""),
        (this._bufferOffset = 0),
        (this._eventType = ""),
        (this._dataBuffer = "");
    }
    feedBuffer(t) {
      this.assertState(Nt.NEED_DATA),
        (this._buffer += this._textDecoder.decode(t, { stream: !0 })),
        this.advanceBufferState();
    }
    feedLine(t) {
      if (
        (this.assertState(Nt.NEED_DATA),
        t.endsWith(`
`) && (t = t.substr(0, t.length - 1)),
        t.endsWith("\r") && (t = t.substr(0, t.length - 1)),
        t.length === 0)
      ) {
        if (this._dataBuffer.length === 0) {
          this._eventType = "";
          return;
        }
        this._dataBuffer.endsWith(`
`) &&
          (this._dataBuffer = this._dataBuffer.substr(
            0,
            this._dataBuffer.length - 1,
          )),
          this.feedSse({ data: this._dataBuffer, eventType: this._eventType }),
          (this._dataBuffer = ""),
          (this._eventType = "");
      }
      if (t[0] === ":") return;
      const n = t.indexOf(":"),
        r = t.substr(0, n);
      let o = n === -1 ? "" : t.substr(n + 1);
      o.startsWith(" ") && (o = o.substr(1)),
        r === "event"
          ? (this._eventType = o)
          : r === "data" &&
            ((this._dataBuffer += o),
            (this._dataBuffer += `
`));
    }
    feedSse(t) {
      this.assertState(Nt.NEED_DATA);
      const n = t.data.indexOf("%");
      if (n !== -1) {
        let r = "",
          o = 0;
        for (let i = n; i !== -1; i = t.data.indexOf("%", o)) {
          r += t.data.substr(o, i - o);
          const a = t.data.substr(i, 3);
          a === "%25"
            ? (r += "%")
            : a === "%0A"
            ? (r += `
`)
            : a === "%0D"
            ? (r += "\r")
            : (r += a),
            (o = i + a.length);
        }
        (r += t.data.substr(o)), (t.data = r);
      }
      if (!t.eventType || t.eventType === "message") {
        try {
          const r = ro.parse(t.data);
          if (typeof r == "object") {
            (this._nextEvent = r), (this._state = Nt.HAVE_EVENT);
            return;
          }
        } catch {}
        (this._state = Nt.HAVE_ERROR),
          (this._error = new Jp({
            message: "server returned malformed event: " + t.data,
            code: "bad bson parse",
          }));
      } else if (t.eventType === "error") {
        (this._state = Nt.HAVE_ERROR),
          (this._error = new Jp({ message: t.data, code: "unknown" }));
        try {
          const { error_code: r, error: o } = ro.parse(t.data);
          if (typeof r != "string" || typeof o != "string") return;
          this._error = new Jp({ message: o, code: r });
        } catch {
          return;
        }
      }
    }
    get state() {
      return this._state;
    }
    nextEvent() {
      this.assertState(Nt.HAVE_EVENT);
      const t = this._nextEvent;
      return (this._state = Nt.NEED_DATA), this.advanceBufferState(), t;
    }
    get error() {
      return this._error;
    }
    advanceBufferState() {
      for (this.assertState(Nt.NEED_DATA); this.state === Nt.NEED_DATA; ) {
        if (this._bufferOffset === this._buffer.length) {
          (this._buffer = ""), (this._bufferOffset = 0);
          return;
        }
        const t = this._buffer.indexOf(
          `
`,
          this._bufferOffset,
        );
        if (t === -1) {
          this._bufferOffset !== 0 &&
            ((this._buffer = this._buffer.substr(
              this._bufferOffset,
              this._buffer.length - this._bufferOffset,
            )),
            (this._bufferOffset = 0));
          return;
        }
        this.feedLine(
          this._buffer.substr(this._bufferOffset, t - this._bufferOffset),
        ),
          (this._bufferOffset = t + 1);
      }
    }
    assertState(t) {
      if (this._state !== t)
        throw Error(
          `Expected WatchStream to be in state ${t}, but in state ${this._state}`,
        );
    }
  }
  class W6 {
    constructor(t, n, r, o) {
      (this.functions = Uu.create(t, { serviceName: n })),
        (this.databaseName = r),
        (this.collectionName = o),
        (this.serviceName = n),
        (this.fetcher = t);
    }
    find(t = {}, n = {}) {
      return this.functions.find({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        project: n.projection,
        sort: n.sort,
        limit: n.limit,
      });
    }
    findOne(t = {}, n = {}) {
      return this.functions.findOne({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        project: n.projection,
        sort: n.sort,
      });
    }
    findOneAndUpdate(t = {}, n, r = {}) {
      return this.functions.findOneAndUpdate({
        database: this.databaseName,
        collection: this.collectionName,
        filter: t,
        update: n,
        sort: r.sort,
        projection: r.projection,
        upsert: r.upsert,
        returnNewDocument: r.returnNewDocument,
      });
    }
    findOneAndReplace(t = {}, n, r = {}) {
      return this.functions.findOneAndReplace({
        database: this.databaseName,
        collection: this.collectionName,
        filter: t,
        update: n,
        sort: r.sort,
        projection: r.projection,
        upsert: r.upsert,
        returnNewDocument: r.returnNewDocument,
      });
    }
    findOneAndDelete(t = {}, n = {}) {
      return this.functions.findOneAndReplace({
        database: this.databaseName,
        collection: this.collectionName,
        filter: t,
        sort: n.sort,
        projection: n.projection,
      });
    }
    aggregate(t) {
      return this.functions.aggregate({
        database: this.databaseName,
        collection: this.collectionName,
        pipeline: t,
      });
    }
    count(t = {}, n = {}) {
      return this.functions.count({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        limit: n.limit,
      });
    }
    insertOne(t) {
      return this.functions.insertOne({
        database: this.databaseName,
        collection: this.collectionName,
        document: t,
      });
    }
    insertMany(t) {
      return this.functions.insertMany({
        database: this.databaseName,
        collection: this.collectionName,
        documents: t,
      });
    }
    deleteOne(t = {}) {
      return this.functions.deleteOne({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
      });
    }
    deleteMany(t = {}) {
      return this.functions.deleteMany({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
      });
    }
    updateOne(t, n, r = {}) {
      return this.functions.updateOne({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        update: n,
        upsert: r.upsert,
        arrayFilters: r.arrayFilters,
      });
    }
    updateMany(t, n, r = {}) {
      return this.functions.updateMany({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        update: n,
        upsert: r.upsert,
        arrayFilters: r.arrayFilters,
      });
    }
    watch({ ids: t, filter: n } = {}) {
      const r = this.functions
          .callFunctionStreaming("watch", {
            database: this.databaseName,
            collection: this.collectionName,
            ids: t,
            filter: n,
          })
          .then((a) => a[Symbol.asyncIterator]()),
        o = this.watchImpl(r),
        i = o.return;
      return Object.assign(o, {
        return(a) {
          return r.then((s) => (s.return ? s.return(a) : void 0)), i.call(o, a);
        },
      });
    }
    async *watchImpl(t) {
      const n = new D6(),
        r = t.then((o) => ({ [Symbol.asyncIterator]: () => o }));
      for await (const o of await r)
        if (o) {
          for (n.feedBuffer(o); n.state == Nt.HAVE_EVENT; ) yield n.nextEvent();
          if (n.state == Nt.HAVE_ERROR) throw n.error;
        }
    }
  }
  function V6(e, t, n, r) {
    return new W6(e, t, n, r);
  }
  function H6(e, t, n) {
    return { collection: V6.bind(null, e, t, n) };
  }
  function q6(e, t = "mongo-db") {
    return { db: H6.bind(null, e, t) };
  }
  const G6 = "000000000000000000000000";
  var oo;
  (function (e) {
    (e.Active = "active"),
      (e.LoggedOut = "logged-out"),
      (e.Removed = "removed");
  })(oo || (oo = {}));
  var y1;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(y1 || (y1 = {}));
  class b1 {
    constructor(t) {
      if (
        ((this.app = t.app),
        (this.id = t.id),
        (this.storage = new _6(this.app.storage, this.id)),
        "accessToken" in t && "refreshToken" in t && "providerType" in t)
      )
        (this._accessToken = t.accessToken),
          (this._refreshToken = t.refreshToken),
          (this.providerType = t.providerType),
          (this.storage.accessToken = t.accessToken),
          (this.storage.refreshToken = t.refreshToken),
          (this.storage.providerType = t.providerType);
      else {
        (this._accessToken = this.storage.accessToken),
          (this._refreshToken = this.storage.refreshToken);
        const n = this.storage.providerType;
        if (((this._profile = this.storage.profile), n)) this.providerType = n;
        else throw new Error("Storage is missing a provider type");
      }
      (this.fetcher = this.app.fetcher.clone({
        userContext: { currentUser: this },
      })),
        (this.apiKeys = new z6(this.fetcher)),
        (this.functions = Uu.create(this.fetcher));
    }
    get accessToken() {
      return this._accessToken;
    }
    set accessToken(t) {
      (this._accessToken = t), (this.storage.accessToken = t);
    }
    get refreshToken() {
      return this._refreshToken;
    }
    set refreshToken(t) {
      (this._refreshToken = t), (this.storage.refreshToken = t);
    }
    get state() {
      return this.id in this.app.allUsers
        ? this.refreshToken === null
          ? oo.LoggedOut
          : oo.Active
        : oo.Removed;
    }
    get isLoggedIn() {
      return this.state === oo.Active;
    }
    get customData() {
      if (this.accessToken) return this.decodeAccessToken().userData;
      throw new Error("Cannot read custom data without an access token");
    }
    get profile() {
      if (this._profile) return this._profile.data;
      throw new Error("A profile was never fetched for this user");
    }
    get identities() {
      if (this._profile) return this._profile.identities;
      throw new Error("A profile was never fetched for this user");
    }
    get deviceId() {
      if (this.accessToken) {
        const t = this.accessToken.split(".")[1];
        if (t) {
          const n = JSON.parse(zu.decode(t)).baas_device_id;
          if (typeof n == "string" && n !== G6) return n;
        }
      }
      return null;
    }
    async refreshProfile() {
      const t = await this.fetcher.fetchJSON({
        method: "GET",
        path: ln.api().auth().profile().path,
      });
      (this._profile = new g1(t)), (this.storage.profile = this._profile);
    }
    async logOut() {
      try {
        this._refreshToken !== null &&
          (await this.fetcher.fetchJSON({
            method: "DELETE",
            path: ln.api().auth().session().path,
            tokenType: "refresh",
          }));
      } catch (t) {
        if (
          !(t instanceof Error) ||
          !t.message.includes("failed to find refresh token")
        )
          throw t;
      } finally {
        (this.accessToken = null), (this.refreshToken = null);
      }
    }
    async linkCredentials(t) {
      const n = await this.app.authenticator.authenticate(t, this);
      if (this.id !== n.userId) {
        const r = `got user id ${n.userId} expected ${this.id}`;
        throw new Error(`Link response ment for another user (${r})`);
      }
      (this.accessToken = n.accessToken), await this.refreshProfile();
    }
    async refreshAccessToken() {
      const t = await this.fetcher.fetchJSON({
          method: "POST",
          path: ln.api().auth().session().path,
          tokenType: "refresh",
        }),
        { access_token: n } = t;
      if (typeof n == "string") this.accessToken = n;
      else throw new Error("Expected an 'access_token' in the response");
    }
    async refreshCustomData() {
      return await this.refreshAccessToken(), this.customData;
    }
    addListener() {
      throw new Error("Not yet implemented");
    }
    removeListener() {
      throw new Error("Not yet implemented");
    }
    removeAllListeners() {
      throw new Error("Not yet implemented");
    }
    callFunction(t, ...n) {
      return this.functions.callFunction(t, ...n);
    }
    toJSON() {
      return {
        id: this.id,
        accessToken: this.accessToken,
        refreshToken: this.refreshToken,
        profile: this._profile,
        state: this.state,
        customData: this.customData,
      };
    }
    push() {
      throw new Error("Not yet implemented");
    }
    mongoClient(t) {
      return q6(this.fetcher, t);
    }
    decodeAccessToken() {
      if (this.accessToken) {
        const t = this.accessToken.split(".");
        if (t.length !== 3)
          throw new Error("Expected an access token with three parts");
        const n = t[1],
          r = zu.decode(n),
          o = JSON.parse(r),
          { exp: i, iat: a, sub: s, user_data: l = {} } = o;
        if (typeof i != "number")
          throw new Error("Failed to decode access token 'exp'");
        if (typeof a != "number")
          throw new Error("Failed to decode access token 'iat'");
        return { expires: i, issuedAt: a, subject: s, userData: l };
      } else throw new Error("Missing an access token");
    }
  }
  class un {
    constructor(t, n, r) {
      (this.providerName = t), (this.providerType = n), (this.payload = r);
    }
    static anonymous() {
      return new un("anon-user", "anon-user", {});
    }
    static apiKey(t) {
      return new un("api-key", "api-key", { key: t });
    }
    static emailPassword(t, n) {
      return new un("local-userpass", "local-userpass", {
        username: t,
        password: n,
      });
    }
    static function(t) {
      return new un("custom-function", "custom-function", t);
    }
    static jwt(t) {
      return new un("custom-token", "custom-token", { token: t });
    }
    static google(t) {
      return new un("oauth2-google", "oauth2-google", un.derivePayload(t));
    }
    static derivePayload(t) {
      if (typeof t == "string")
        throw new Error(
          "`google(<tokenString>)` has been deprecated.  Please use `google(<authCodeObject>).",
        );
      if (Object.keys(t).length === 1) {
        if ("authCode" in t || "redirectUrl" in t) return t;
        if ("idToken" in t) return { id_token: t.idToken };
        throw new Error("Unexpected payload: " + JSON.stringify(t));
      } else
        throw new Error(
          "Expected only one property in payload, got " + JSON.stringify(t),
        );
    }
    static facebook(t) {
      return new un(
        "oauth2-facebook",
        "oauth2-facebook",
        t.includes("://") ? { redirectUrl: t } : { accessToken: t },
      );
    }
    static apple(t) {
      return new un(
        "oauth2-apple",
        "oauth2-apple",
        t.includes("://") ? { redirectUrl: t } : { id_token: t },
      );
    }
  }
  const w1 = "userIds",
    S1 = "deviceId";
  class K6 extends wn {
    constructor(t, n) {
      super(t, `app(${n})`);
    }
    getUserIds() {
      const t = this.get(w1),
        n = t ? JSON.parse(t) : [];
      if (Array.isArray(n)) return [...new Set(n)];
      throw new Error("Expected the user ids to be an array");
    }
    setUserIds(t, n) {
      if (n) {
        const r = this.getUserIds();
        for (const o of r) t.indexOf(o) === -1 && t.push(o);
      }
      this.set(w1, JSON.stringify(t));
    }
    removeUserId(t) {
      const n = this.getUserIds().filter((r) => r !== t);
      this.setUserIds(n, !1);
    }
    getDeviceId() {
      return this.get(S1);
    }
    setDeviceId(t) {
      this.set(S1, t);
    }
  }
  const Y6 = "abcdefghijklmnopqrstuvwxyz",
    X6 = 100,
    Z6 = {
      _stitch_client_app_id: "appId",
      _baas_client_app_id: "appId",
      _stitch_ua: "userAuth",
      _baas_ua: "userAuth",
      _stitch_link: "link",
      _baas_link: "link",
      _stitch_error: "error",
      _baas_error: "error",
      _stitch_state: "state",
      _baas_state: "state",
    };
  class ui {
    constructor(t, n = za().openWindow) {
      (this.storage = t.prefix("oauth2")), (this.openWindow = n);
    }
    static parseRedirectLocation(t) {
      const n = $6(t),
        r = {};
      for (const [o, i] of Object.entries(Z6)) {
        const a = n[o];
        a && (r[i] = a);
      }
      return r;
    }
    static handleRedirect(t, n = za().defaultStorage) {
      const r = ui.parseRedirectLocation(t),
        { state: o, error: i } = r;
      if (typeof o == "string") {
        const a = n.prefix("oauth2");
        ui.getStateStorage(a, o).set("result", JSON.stringify(r));
      } else
        throw i
          ? new Error(`Failed to handle OAuth 2.0 redirect: ${i}`)
          : new Error("Failed to handle OAuth 2.0 redirect.");
    }
    static decodeAuthInfo(t) {
      const n = (t || "").split("$");
      if (n.length === 4) {
        const [r, o, i, a] = n;
        return { accessToken: r, refreshToken: o, userId: i, deviceId: a };
      } else throw new Error("Failed to decode 'authInfo' into ids and tokens");
    }
    static getStateStorage(t, n) {
      return t.prefix(`state(${n})`);
    }
    openWindowAndWaitForRedirect(t, n) {
      const r = ui.getStateStorage(this.storage, n);
      return new Promise((o, i) => {
        let a = null,
          s;
        const l = () => {
          const u = r.get("result");
          if (u) {
            const d = JSON.parse(u);
            r.removeListener(l), r.clear();
            try {
              a && (clearInterval(s), a.close());
            } catch (f) {
              console.warn(`Failed closing redirect window: ${f}`);
            } finally {
              o(d);
            }
          }
        };
        r.addListener(l),
          (a = this.openWindow(t)),
          (s = setInterval(() => {
            if (!a) clearInterval(s);
            else if (a.closed) {
              clearInterval(s), r.removeListener(l);
              const u = new Error("Window closed");
              i(u);
            }
          }, X6));
      });
    }
    generateState() {
      return I6(12, Y6);
    }
  }
  const x1 = "x-baas-location";
  class Q6 {
    constructor(t, n, r) {
      (this.fetcher = t),
        (this.oauth2 = new ui(n)),
        (this.getDeviceInformation = r);
    }
    async authenticate(t, n) {
      const r = this.getDeviceInformation(),
        o = typeof n == "object";
      if (
        t.providerType.startsWith("oauth2") &&
        typeof t.payload.redirectUrl == "string"
      ) {
        const i = this.oauth2.generateState(),
          a = await this.getLogInUrl(t, o, {
            state: i,
            redirect: t.payload.redirectUrl,
            providerRedirectHeader: o ? !0 : void 0,
            device: o ? void 0 : r.encode(),
          });
        if (o) {
          const s = (
            await this.fetcher.fetch({
              method: "GET",
              url: a,
              tokenType: o ? "access" : "none",
              user: n,
              mode: "cors",
              credentials: "include",
            })
          ).headers.get(x1);
          if (s) return this.openWindowAndWaitForAuthResponse(s, i);
          throw new Error(`Missing ${x1} header`);
        } else return this.openWindowAndWaitForAuthResponse(a, i);
      } else {
        const i = await this.getLogInUrl(t, o),
          a = await this.fetcher.fetchJSON({
            method: "POST",
            url: i,
            body: { ...t.payload, options: { device: r.toJSON() } },
            tokenType: o ? "access" : "none",
            user: n,
          }),
          {
            user_id: s,
            access_token: l,
            refresh_token: u = null,
            device_id: d,
          } = a;
        if (typeof s != "string")
          throw new Error("Expected a user id in the response");
        if (typeof l != "string")
          throw new Error("Expected an access token in the response");
        if (typeof u != "string" && u !== null)
          throw new Error("Expected refresh token to be a string or null");
        if (typeof d != "string")
          throw new Error("Expected device id to be a string");
        return { userId: s, accessToken: l, refreshToken: u, deviceId: d };
      }
    }
    async getLogInUrl(t, n = !1, r = {}) {
      const o = this.fetcher.appRoute.authProvider(t.providerName).login(),
        i = v1({ link: n ? "true" : void 0, ...r });
      return (await this.fetcher.locationUrl) + o.path + i;
    }
    async openWindowAndWaitForAuthResponse(t, n) {
      const r = await this.oauth2.openWindowAndWaitForRedirect(t, n);
      return ui.decodeAuthInfo(r.userAuth);
    }
  }
  class Ua extends Error {
    constructor(t, n, r, o, i, a, s) {
      const l = o ? `status ${r} ${o}` : `status ${r}`;
      typeof i == "string"
        ? super(`Request failed (${t} ${n}): ${i} (${l})`)
        : super(`Request failed (${t} ${n}): (${l})`),
        (this.method = t),
        (this.url = n),
        (this.statusText = o),
        (this.statusCode = r),
        (this.error = i),
        (this.errorCode = a),
        (this.link = s);
    }
    static async fromRequestAndResponse(t, n) {
      var r;
      const { url: o, method: i } = t,
        { status: a, statusText: s } = n;
      if (
        !((r = n.headers.get("content-type")) === null || r === void 0) &&
        r.startsWith("application/json")
      ) {
        const l = await n.json();
        if (typeof l == "object" && l) {
          const { error: u, error_code: d, link: f } = l;
          return new Ua(
            i,
            o,
            a,
            s,
            typeof u == "string" ? u : void 0,
            typeof d == "string" ? d : void 0,
            typeof f == "string" ? f : void 0,
          );
        }
      }
      return new Ua(i, o, a, s);
    }
  }
  function J6(e) {
    if (typeof e != "object" || e === null)
      throw new Error("Expected a non-null object");
    if (Symbol.asyncIterator in e) return e;
    if ("getReader" in e) {
      const t = e;
      return {
        [Symbol.asyncIterator]() {
          const n = t.getReader();
          return {
            next() {
              return n.read();
            },
            async return() {
              return await n.cancel(), { done: !0, value: null };
            },
          };
        },
      };
    } else throw new Error("Expected an AsyncIterable or a ReadableStream");
  }
  class ci {
    constructor({
      appId: t,
      transport: n,
      userContext: r,
      locationUrlContext: o,
    }) {
      (this.appId = t),
        (this.transport = n),
        (this.userContext = r),
        (this.locationUrlContext = o);
    }
    static buildAuthorizationHeader(t, n) {
      if (!t || n === "none") return {};
      if (n === "access") return { Authorization: `Bearer ${t.accessToken}` };
      if (n === "refresh") return { Authorization: `Bearer ${t.refreshToken}` };
      throw new Error(`Unexpected token type (${n})`);
    }
    static buildBody(t) {
      if (t) {
        if (typeof t == "object" && t !== null) return JSON.stringify(p1(t));
        if (typeof t == "string") return t;
        throw (console.log("body is", t), new Error("Unexpected type of body"));
      } else return;
    }
    static buildJsonHeader(t) {
      return t && t.length > 0 ? { "Content-Type": "application/json" } : {};
    }
    clone(t) {
      return new ci({
        appId: this.appId,
        transport: this.transport,
        userContext: this.userContext,
        locationUrlContext: this.locationUrlContext,
        ...t,
      });
    }
    async fetch(t) {
      const {
        path: n,
        url: r,
        tokenType: o = "access",
        user: i = this.userContext.currentUser,
        ...a
      } = t;
      if (typeof n == "string" && typeof r == "string")
        throw new Error("Use of 'url' and 'path' mutually exclusive");
      if (typeof n == "string") {
        const s = (await this.locationUrlContext.locationUrl) + n;
        return this.fetch({ ...t, path: void 0, url: s });
      } else if (typeof r == "string") {
        const s = await this.transport.fetch({
          ...a,
          url: r,
          headers: { ...ci.buildAuthorizationHeader(i, o), ...t.headers },
        });
        if (s.ok) return s;
        if (i && s.status === 401 && o === "access")
          return await i.refreshAccessToken(), this.fetch({ ...t, user: i });
        throw (
          (i &&
            s.status === 401 &&
            o === "refresh" &&
            ((i.accessToken = null), (i.refreshToken = null)),
          await Ua.fromRequestAndResponse(t, s))
        );
      } else throw new Error("Expected either 'url' or 'path'");
    }
    async fetchJSON(t) {
      const { body: n } = t,
        r = ci.buildBody(n),
        o = ci.buildJsonHeader(r),
        i = await this.fetch({
          ...t,
          body: r,
          headers: { Accept: "application/json", ...o, ...t.headers },
        }),
        a = i.headers.get("content-type");
      if (a != null && a.startsWith("application/json")) {
        const s = await i.json();
        return h1(s);
      } else {
        if (a === null) return null;
        throw new Error(`Expected JSON response, got "${a}"`);
      }
    }
    async fetchStream(t) {
      const { body: n } = await this.fetch({
        ...t,
        headers: { Accept: "text/event-stream", ...t.headers },
      });
      return J6(n);
    }
    get appRoute() {
      return ln.api().app(this.appId);
    }
    get locationUrl() {
      return this.locationUrlContext.locationUrl;
    }
  }
  const eP = "deviceId";
  var k1;
  (function (e) {
    (e.DEVICE_ID = "deviceId"),
      (e.APP_ID = "appId"),
      (e.APP_VERSION = "appVersion"),
      (e.PLATFORM = "platform"),
      (e.PLATFORM_VERSION = "platformVersion"),
      (e.SDK_VERSION = "sdkVersion");
  })(k1 || (k1 = {}));
  class tP {
    constructor({ appId: t, appVersion: n, deviceId: r }) {
      this.sdkVersion = "2.0.0";
      const o = za();
      (this.platform = o.platform),
        (this.platformVersion = o.platformVersion),
        (this.appId = t),
        (this.appVersion = n),
        (this.deviceId = r);
    }
    encode() {
      const t = Zp(this);
      return zu.encode(JSON.stringify(t));
    }
    toJSON() {
      return Zp(this);
    }
  }
  const nP = "https://realm.mongodb.com";
  let eh = class Ya {
    constructor(t) {
      (this.users = []), (this._locationUrl = null);
      const n = typeof t == "string" ? { id: t } : t;
      if (typeof n == "object" && typeof n.id == "string") this.id = n.id;
      else throw new Error("Missing an Atlas App Services app-id");
      (this.baseUrl = n.baseUrl || nP),
        n.skipLocationRequest &&
          (this._locationUrl = Promise.resolve(this.baseUrl)),
        (this.localApp = n.app);
      const { storage: r, transport: o = new Mn() } = n;
      (this.fetcher = new ci({
        appId: this.id,
        userContext: this,
        locationUrlContext: this,
        transport: o,
      })),
        (this.emailPasswordAuth = new B6(this.fetcher));
      const i = r || za().defaultStorage;
      (this.storage = new K6(i, this.id)),
        (this.authenticator = new Q6(
          this.fetcher,
          i,
          () => this.deviceInformation,
        ));
      try {
        this.hydrate();
      } catch (a) {
        this.storage.clear(),
          console.warn(
            "Realm app hydration failed:",
            a instanceof Error ? a.message : a,
          );
      }
    }
    static getApp(t) {
      if (t in Ya.appCache) return Ya.appCache[t];
      {
        const n = new Ya(t);
        return (Ya.appCache[t] = n), n;
      }
    }
    switchUser(t) {
      const n = this.users.findIndex((o) => o === t);
      if (n === -1) throw new Error("The user was never logged into this app");
      const [r] = this.users.splice(n, 1);
      this.users.unshift(r);
    }
    async logIn(t, n = !0) {
      const r = await this.authenticator.authenticate(t),
        o = this.createOrUpdateUser(r, t.providerType);
      this.switchUser(o),
        n && (await o.refreshProfile()),
        this.storage.setUserIds(
          this.users.map((a) => a.id),
          !0,
        );
      const i = r.deviceId;
      return (
        i && i !== "000000000000000000000000" && this.storage.set(eP, i), o
      );
    }
    async removeUser(t) {
      const n = this.users.findIndex((r) => r === t);
      if (n === -1) throw new Error("The user was never logged into this app");
      this.users.splice(n, 1),
        await t.logOut(),
        this.storage.remove(`user(${t.id}):profile`),
        this.storage.removeUserId(t.id);
    }
    async deleteUser(t) {
      await this.fetcher.fetchJSON({
        method: "DELETE",
        path: ln.api().auth().delete().path,
      }),
        await this.removeUser(t);
    }
    addListener() {
      throw new Error("Not yet implemented");
    }
    removeListener() {
      throw new Error("Not yet implemented");
    }
    removeAllListeners() {
      throw new Error("Not yet implemented");
    }
    get currentUser() {
      const t = this.users.filter((n) => n.state === oo.Active);
      return t.length === 0 ? null : t[0];
    }
    get allUsers() {
      return Object.fromEntries(this.users.map((t) => [t.id, t]));
    }
    get locationUrl() {
      if (!this._locationUrl) {
        const t = ln.api().app(this.id).location().path;
        this._locationUrl = this.fetcher
          .fetchJSON({
            method: "GET",
            url: this.baseUrl + t,
            tokenType: "none",
          })
          .then((n) => {
            if (typeof n != "object")
              throw new Error("Expected response body be an object");
            return n;
          })
          .then(({ hostname: n }) => {
            if (typeof n != "string")
              throw new Error("Expected response to contain a 'hostname'");
            return n;
          })
          .catch((n) => {
            throw ((this._locationUrl = null), n);
          });
      }
      return this._locationUrl;
    }
    get deviceInformation() {
      const t = this.storage.getDeviceId(),
        n =
          typeof t == "string" && t !== "000000000000000000000000"
            ? new Mt(t)
            : void 0;
      return new tP({
        appId: this.localApp ? this.localApp.name : void 0,
        appVersion: this.localApp ? this.localApp.version : void 0,
        deviceId: n,
      });
    }
    createOrUpdateUser(t, n) {
      const r = this.users.find((o) => o.id === t.userId);
      if (r)
        return (
          (r.accessToken = t.accessToken), (r.refreshToken = t.refreshToken), r
        );
      {
        if (!t.refreshToken)
          throw new Error("No refresh token in response from server");
        const o = new b1({
          app: this,
          id: t.userId,
          accessToken: t.accessToken,
          refreshToken: t.refreshToken,
          providerType: n,
        });
        return this.users.unshift(o), o;
      }
    }
    hydrate() {
      const t = this.storage.getUserIds();
      this.users = t.map((n) => new b1({ app: this, id: n }));
    }
  };
  (eh.appCache = {}), (eh.Credentials = un);
  const rP = (e) => {},
    Du = function (e) {
      return e && e.Math == Math && e;
    },
    Da =
      Du(typeof globalThis == "object" && globalThis) ||
      Du(typeof window == "object" && window) ||
      Du(typeof self == "object" && self) ||
      Du(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  rP(typeof __DEV__ < "u" && __DEV__);
  class oP {
    constructor() {
      if (typeof Da.localStorage == "object") this.global = Da;
      else
        throw new Error(
          "Cannot use LocalStorage without a global localStorage object",
        );
    }
    get(t) {
      return this.global.localStorage.getItem(t);
    }
    set(t, n) {
      return this.global.localStorage.setItem(t, n);
    }
    remove(t) {
      return this.global.localStorage.removeItem(t);
    }
    prefix(t) {
      return new wn(this, t);
    }
    clear(t) {
      const n = [];
      for (let r = 0; r < this.global.localStorage.length; r++) {
        const o = this.global.localStorage.key(r);
        o && (!t || o.startsWith(t)) && n.push(o);
      }
      for (const r of n) this.global.localStorage.removeItem(r);
    }
    addListener(t) {
      return this.global.addEventListener("storage", t);
    }
    removeListener(t) {
      return this.global.removeEventListener("storage", t);
    }
  }
  const di = f6(),
    iP = "localStorage" in Da ? oP : P6;
  function aP(e) {
    return typeof Da.open == "function"
      ? Da.open(e)
      : (console.log(`Please open ${e}`), null);
  }
  const sP = {
    defaultStorage: new iP().prefix("realm-web"),
    openWindow: aP,
    platform: (di == null ? void 0 : di.name) || "web",
    platformVersion: (di == null ? void 0 : di.version) || "0.0.0",
    TextDecoder,
  };
  U6(sP);
  const lP = "caja-chica-pqain",
    uP =
      "https://realm.mongodb.com/groups/64c439eb9473f01fba108aaf/apps/64c43b5f13aa56de3f40739a",
    cP = "https://realm.mongodb.com",
    dP = "https://eastus2.azure.realm.mongodb.com",
    fP = "https://eastus2.azure.data.mongodb-api.com",
    pP =
      "https://cloud.mongodb.com/links/64c439eb9473f01fba108aaf/explorer/Cluster0/database/collection/find",
    hP = "mongodb-atlas",
    th = {
      appId: lP,
      appUrl: uP,
      baseUrl: cP,
      clientApiBaseUrl: dP,
      dataApiBaseUrl: fP,
      dataExplorerLink: pP,
      dataSourceName: hP,
    },
    { baseUrl: mP } = th;
  function E1(e) {
    return new eh({ id: e, baseUrl: mP });
  }
  const C1 = fe.createContext(null);
  function gP({ appId: e, children: t }) {
    const [n, r] = fe.useState(E1(e));
    fe.useEffect(() => {
      r(E1(e));
    }, [e]);
    const [o, i] = fe.useState(n.currentUser),
      a = fe.useCallback(
        async (u) => {
          await n.logIn(u), i(n.currentUser);
        },
        [n],
      ),
      s = fe.useCallback(async () => {
        try {
          const u = n.currentUser;
          await (u == null ? void 0 : u.logOut()), await n.removeUser(u);
        } catch (u) {
          console.error(u);
        }
        i(n.currentUser);
      }, [n]),
      l = fe.useMemo(
        () => ({ ...n, currentUser: o, logIn: a, logOut: s }),
        [n, o, a, s],
      );
    return A(C1.Provider, { value: l, children: t });
  }
  function fi() {
    const e = fe.useContext(C1);
    if (!e)
      throw new Error(
        "No App Services App found. Make sure to call useApp() inside of a <AppProvider />.",
      );
    return e;
  }
  var nh = {},
    pi = {},
    vP = {
      get exports() {
        return pi;
      },
      set exports(e) {
        pi = e;
      },
    };
  (function (e) {
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    (e.exports = t),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(vP);
  var O1 = {};
  const yP = Mh(B3);
  var N1;
  function Wu() {
    return (
      N1 ||
        ((N1 = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function () {
                return t.createSvgIcon;
              },
            });
          var t = yP;
        })(O1)),
      O1
    );
  }
  const Vu = Mh(OS);
  var bP = pi;
  Object.defineProperty(nh, "__esModule", { value: !0 });
  var T1 = (nh.default = void 0),
    wP = bP(Wu()),
    SP = Vu,
    xP = (0, wP.default)(
      (0, SP.jsx)("path", {
        d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
      }),
      "Visibility",
    );
  T1 = nh.default = xP;
  var rh = {},
    kP = pi;
  Object.defineProperty(rh, "__esModule", { value: !0 });
  var A1 = (rh.default = void 0),
    EP = kP(Wu()),
    CP = Vu,
    OP = (0, EP.default)(
      (0, CP.jsx)("path", {
        d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
      }),
      "VisibilityOff",
    );
  A1 = rh.default = OP;
  const R1 = (e) => !e,
    Hu = (e, t) => !(t < 0 || t >= e.length);
  function NP(e, t, n) {
    if (!Hu(e, t) && t !== e.length)
      throw new Error("Cannot add value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t)];
  }
  function TP(e, t, n) {
    if (!Hu(e, t))
      throw new Error("Cannot replace value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t + 1)];
  }
  function AP(e, t, n) {
    if (!Hu(e, t))
      throw new Error("Cannot update value. Array index out of bounds.");
    return [...e.slice(0, t), n(e[t]), ...e.slice(t + 1)];
  }
  function RP(e, t) {
    if (!Hu(e, t))
      throw new Error("Cannot remove value. Array index out of bounds.");
    return [...e.slice(0, t), ...e.slice(t + 1)];
  }
  const qu = (e) => (e._id instanceof Mt ? e._id.toHexString() : e._id),
    PP = (e, t) => qu(e) === qu(t),
    Gu = (e, t) => {
      const n = e.findIndex((r) => PP(r, t));
      return n >= 0 ? n : null;
    };
  function _P(e) {
    return A(LO, { elevation: 6, variant: "filled", ...e });
  }
  function IP({ isOpen: e, message: t, onClose: n = () => {} }) {
    return e ? A(_P, { onClose: n, severity: "error", children: t }) : null;
  }
  function $P({ error: e, clearError: t, hideAfterMs: n }) {
    const [r, o] = fe.useState(!1),
      i = fe.useCallback(() => {
        t(), o(!1);
      }, [t]);
    return (
      fe.useEffect(() => {
        if (e) {
          if ((o(!0), n)) {
            const a = setTimeout(() => {
              i();
            }, n);
            return () => {
              clearTimeout(a);
            };
          }
        } else o(!1);
      }, [e, i, n]),
      () =>
        A(IP, {
          isOpen: r,
          message: e,
          onClose: () => {
            i();
          },
        })
    );
  }
  const P1 = "%[a-f0-9]{2}",
    _1 = new RegExp("(" + P1 + ")|([^%]+?)", "gi"),
    I1 = new RegExp("(" + P1 + ")+", "gi");
  function oh(e, t) {
    try {
      return [decodeURIComponent(e.join(""))];
    } catch {}
    if (e.length === 1) return e;
    t = t || 1;
    const n = e.slice(0, t),
      r = e.slice(t);
    return Array.prototype.concat.call([], oh(n), oh(r));
  }
  function MP(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      let t = e.match(_1) || [];
      for (let n = 1; n < t.length; n++)
        (e = oh(t, n).join("")), (t = e.match(_1) || []);
      return e;
    }
  }
  function LP(e) {
    const t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" };
    let n = I1.exec(e);
    for (; n; ) {
      try {
        t[n[0]] = decodeURIComponent(n[0]);
      } catch {
        const o = MP(n[0]);
        o !== n[0] && (t[n[0]] = o);
      }
      n = I1.exec(e);
    }
    t["%C2"] = "\uFFFD";
    const r = Object.keys(t);
    for (const o of r) e = e.replace(new RegExp(o, "g"), t[o]);
    return e;
  }
  function FP(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`",
      );
    try {
      return decodeURIComponent(e);
    } catch {
      return LP(e);
    }
  }
  function $1(e, t) {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "" || t === "") return [];
    const n = e.indexOf(t);
    return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
  }
  function BP(e, t) {
    const n = {};
    if (Array.isArray(t))
      for (const r of t) {
        const o = Object.getOwnPropertyDescriptor(e, r);
        o != null && o.enumerable && Object.defineProperty(n, r, o);
      }
    else
      for (const r of Reflect.ownKeys(e)) {
        const o = Object.getOwnPropertyDescriptor(e, r);
        if (o.enumerable) {
          const i = e[r];
          t(r, i, e) && Object.defineProperty(n, r, o);
        }
      }
    return n;
  }
  const jP = (e) => e == null,
    zP = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`,
      ),
    ih = Symbol("encodeFragmentIdentifier");
  function UP(e) {
    switch (e.arrayFormat) {
      case "index":
        return (t) => (n, r) => {
          const o = n.length;
          return r === void 0 ||
            (e.skipNull && r === null) ||
            (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [nt(t, e), "[", o, "]"].join("")]
            : [...n, [nt(t, e), "[", nt(o, e), "]=", nt(r, e)].join("")];
        };
      case "bracket":
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [nt(t, e), "[]"].join("")]
            : [...n, [nt(t, e), "[]=", nt(r, e)].join("")];
      case "colon-list-separator":
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [nt(t, e), ":list="].join("")]
            : [...n, [nt(t, e), ":list=", nt(r, e)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (n) => (r, o) =>
          o === void 0 ||
          (e.skipNull && o === null) ||
          (e.skipEmptyString && o === "")
            ? r
            : ((o = o === null ? "" : o),
              r.length === 0
                ? [[nt(n, e), t, nt(o, e)].join("")]
                : [[r, nt(o, e)].join(e.arrayFormatSeparator)]);
      }
      default:
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, nt(t, e)]
            : [...n, [nt(t, e), "=", nt(r, e)].join("")];
    }
  }
  function DP(e) {
    let t;
    switch (e.arrayFormat) {
      case "index":
        return (n, r, o) => {
          if (((t = /\[(\d*)]$/.exec(n)), (n = n.replace(/\[\d*]$/, "")), !t)) {
            o[n] = r;
            return;
          }
          o[n] === void 0 && (o[n] = {}), (o[n][t[1]] = r);
        };
      case "bracket":
        return (n, r, o) => {
          if (((t = /(\[])$/.exec(n)), (n = n.replace(/\[]$/, "")), !t)) {
            o[n] = r;
            return;
          }
          if (o[n] === void 0) {
            o[n] = [r];
            return;
          }
          o[n] = [...o[n], r];
        };
      case "colon-list-separator":
        return (n, r, o) => {
          if (((t = /(:list)$/.exec(n)), (n = n.replace(/:list$/, "")), !t)) {
            o[n] = r;
            return;
          }
          if (o[n] === void 0) {
            o[n] = [r];
            return;
          }
          o[n] = [...o[n], r];
        };
      case "comma":
      case "separator":
        return (n, r, o) => {
          const i = typeof r == "string" && r.includes(e.arrayFormatSeparator),
            a =
              typeof r == "string" &&
              !i &&
              Yn(r, e).includes(e.arrayFormatSeparator);
          r = a ? Yn(r, e) : r;
          const s =
            i || a
              ? r.split(e.arrayFormatSeparator).map((l) => Yn(l, e))
              : r === null
              ? r
              : Yn(r, e);
          o[n] = s;
        };
      case "bracket-separator":
        return (n, r, o) => {
          const i = /(\[])$/.test(n);
          if (((n = n.replace(/\[]$/, "")), !i)) {
            o[n] = r && Yn(r, e);
            return;
          }
          const a =
            r === null
              ? []
              : r.split(e.arrayFormatSeparator).map((s) => Yn(s, e));
          if (o[n] === void 0) {
            o[n] = a;
            return;
          }
          o[n] = [...o[n], ...a];
        };
      default:
        return (n, r, o) => {
          if (o[n] === void 0) {
            o[n] = r;
            return;
          }
          o[n] = [...[o[n]].flat(), r];
        };
    }
  }
  function M1(e) {
    if (typeof e != "string" || e.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string",
      );
  }
  function nt(e, t) {
    return t.encode ? (t.strict ? zP(e) : encodeURIComponent(e)) : e;
  }
  function Yn(e, t) {
    return t.decode ? FP(e) : e;
  }
  function L1(e) {
    return Array.isArray(e)
      ? e.sort()
      : typeof e == "object"
      ? L1(Object.keys(e))
          .sort((t, n) => Number(t) - Number(n))
          .map((t) => e[t])
      : e;
  }
  function F1(e) {
    const t = e.indexOf("#");
    return t !== -1 && (e = e.slice(0, t)), e;
  }
  function WP(e) {
    let t = "";
    const n = e.indexOf("#");
    return n !== -1 && (t = e.slice(n)), t;
  }
  function B1(e, t) {
    return (
      t.parseNumbers &&
      !Number.isNaN(Number(e)) &&
      typeof e == "string" &&
      e.trim() !== ""
        ? (e = Number(e))
        : t.parseBooleans &&
          e !== null &&
          (e.toLowerCase() === "true" || e.toLowerCase() === "false") &&
          (e = e.toLowerCase() === "true"),
      e
    );
  }
  function ah(e) {
    e = F1(e);
    const t = e.indexOf("?");
    return t === -1 ? "" : e.slice(t + 1);
  }
  function sh(e, t) {
    (t = {
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1,
      ...t,
    }),
      M1(t.arrayFormatSeparator);
    const n = DP(t),
      r = Object.create(null);
    if (typeof e != "string" || ((e = e.trim().replace(/^[?#&]/, "")), !e))
      return r;
    for (const o of e.split("&")) {
      if (o === "") continue;
      const i = t.decode ? o.replace(/\+/g, " ") : o;
      let [a, s] = $1(i, "=");
      a === void 0 && (a = i),
        (s =
          s === void 0
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                t.arrayFormat,
              )
            ? s
            : Yn(s, t)),
        n(Yn(a, t), s, r);
    }
    for (const [o, i] of Object.entries(r))
      if (typeof i == "object" && i !== null)
        for (const [a, s] of Object.entries(i)) i[a] = B1(s, t);
      else r[o] = B1(i, t);
    return t.sort === !1
      ? r
      : (t.sort === !0
          ? Object.keys(r).sort()
          : Object.keys(r).sort(t.sort)
        ).reduce((o, i) => {
          const a = r[i];
          return (
            a && typeof a == "object" && !Array.isArray(a)
              ? (o[i] = L1(a))
              : (o[i] = a),
            o
          );
        }, Object.create(null));
  }
  function j1(e, t) {
    if (!e) return "";
    (t = {
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...t,
    }),
      M1(t.arrayFormatSeparator);
    const n = (a) =>
        (t.skipNull && jP(e[a])) || (t.skipEmptyString && e[a] === ""),
      r = UP(t),
      o = {};
    for (const [a, s] of Object.entries(e)) n(a) || (o[a] = s);
    const i = Object.keys(o);
    return (
      t.sort !== !1 && i.sort(t.sort),
      i
        .map((a) => {
          const s = e[a];
          return s === void 0
            ? ""
            : s === null
            ? nt(a, t)
            : Array.isArray(s)
            ? s.length === 0 && t.arrayFormat === "bracket-separator"
              ? nt(a, t) + "[]"
              : s.reduce(r(a), []).join("&")
            : nt(a, t) + "=" + nt(s, t);
        })
        .filter((a) => a.length > 0)
        .join("&")
    );
  }
  function z1(e, t) {
    var o;
    t = { decode: !0, ...t };
    let [n, r] = $1(e, "#");
    return (
      n === void 0 && (n = e),
      {
        url:
          ((o = n == null ? void 0 : n.split("?")) == null ? void 0 : o[0]) ??
          "",
        query: sh(ah(e), t),
        ...(t && t.parseFragmentIdentifier && r
          ? { fragmentIdentifier: Yn(r, t) }
          : {}),
      }
    );
  }
  function U1(e, t) {
    t = { encode: !0, strict: !0, [ih]: !0, ...t };
    const n = F1(e.url).split("?")[0] || "",
      r = ah(e.url),
      o = { ...sh(r, { sort: !1 }), ...e.query };
    let i = j1(o, t);
    i && (i = `?${i}`);
    let a = WP(e.url);
    if (e.fragmentIdentifier) {
      const s = new URL(n);
      (s.hash = e.fragmentIdentifier),
        (a = t[ih] ? s.hash : `#${e.fragmentIdentifier}`);
    }
    return `${n}${i}${a}`;
  }
  function D1(e, t, n) {
    n = { parseFragmentIdentifier: !0, [ih]: !1, ...n };
    const { url: r, query: o, fragmentIdentifier: i } = z1(e, n);
    return U1({ url: r, query: BP(o, t), fragmentIdentifier: i }, n);
  }
  function VP(e, t, n) {
    const r = Array.isArray(t) ? (o) => !t.includes(o) : (o, i) => !t(o, i);
    return D1(e, r, n);
  }
  const W1 = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          exclude: VP,
          extract: ah,
          parse: sh,
          parseUrl: z1,
          pick: D1,
          stringify: j1,
          stringifyUrl: U1,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    V1 = "/assets/logo-992687eb.svg",
    HP = "/assets/logoWithBuilding-3a468530.svg",
    qP = uu();
  function GP() {
    const { currentUser: e } = fi(),
      t = vl();
    e && t("/admin");
    const n = fi(),
      [r, o] = k.useState(!1),
      i = () => {
        u(), o(R1);
      },
      a = { email: null, password: null, other: null },
      [s, l] = k.useState(a),
      u = () => l(a),
      d = $P({
        error: s.other,
        clearError: () => {
          l((S) => ({ ...S, other: null }));
        },
      }),
      [f, h] = k.useState(!1),
      b = () => h(R1),
      g = async ({ email: S, password: C }) => {
        console.log(`${S}@sanpedrosula.hn`), u();
        try {
          r &&
            (await n.emailPasswordAuth.registerUser({
              email: `${S}@sanpedrosula.hn`,
              password: C,
            }),
            console.log("Sending email to verify account.")),
            await n.logIn(un.emailPassword(`${S}@sanpedrosula.hn`, C)),
            t("/admin");
        } catch (N) {
          KP(N, l);
        }
      };
    W1.parse(window.location.search);
    const [x, R] = k.useState(""),
      [y, m] = k.useState(""),
      v = k.useCallback(async () => {
        try {
          const S = await W1.parse(window.location.search);
          S.token &&
            S.tokenId &&
            (R(S.token),
            m(S.tokenId),
            await n.emailPasswordAuth.confirmUser(S.token, S.tokenId));
        } catch (S) {
          console.error(S);
        }
      }, [n.emailPasswordAuth, x, y]);
    return (
      k.useEffect(() => {
        v();
      }, []),
      A(my, {
        theme: qP,
        children: de(Sp, {
          container: !0,
          component: "main",
          sx: { height: "100vh" },
          children: [
            A(Sp, {
              item: !0,
              xs: !1,
              sm: 4,
              md: 7,
              sx: {
                backgroundRepeat: "no-repeat",
                backgroundColor: "#003013",
                backgroundSize: "cover",
                backgroundPosition: "center",
              },
              children: A(Dy, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                children: A("img", {
                  src: HP,
                  alt: "Example SVG",
                  style: { width: "75%", height: "auto" },
                }),
              }),
            }),
            A(Sp, {
              item: !0,
              xs: 12,
              sm: 8,
              md: 5,
              component: Qo,
              elevation: 10,
              square: !0,
              children: de(Dy, {
                sx: {
                  my: 1,
                  mx: 13,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                children: [
                  A(on, {
                    component: "h1",
                    variant: "h5",
                    children: de("div", {
                      children: [
                        A("img", { src: V1, alt: "Example SVG" }),
                        A("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 100 100",
                          style: { width: "10%", height: "10%" },
                          children: A("use", { xlinkHref: V1 }),
                        }),
                      ],
                    }),
                  }),
                  A(wp, {
                    maxWidth: "sm",
                    className: "main-container",
                    children: A(j4, {
                      className: "auth-card",
                      variant: "outlined",
                      children: de("form", {
                        className: "auth-form",
                        onSubmit: (S) => {
                          S.preventDefault();
                          const C = new FormData(S.target),
                            { email: N, password: T } = Object.fromEntries(
                              C.entries(),
                            );
                          g({ email: N, password: T });
                        },
                        children: [
                          A(on, {
                            component: "h2",
                            variant: "h4",
                            children: "Welcome automation v1!",
                          }),
                          A(on, {
                            variant: "subtitle1",
                            gutterBottom: !0,
                            children: r
                              ? "Enter your email and a password to create a new account."
                              : "Enter your email and a password to log in with an existing account.",
                          }),
                          A(d, {}),
                          de("div", {
                            className: "email-and-domain",
                            children: [
                              A(Nu, {
                                id: "input-email",
                                name: "email",
                                label: "Email Address",
                                variant: "outlined",
                                error: !!s.email,
                                helperText: s.email ?? "",
                              }),
                              de(on, {
                                variant: "caption",
                                gutterBottom: !0,
                                children: [A("br", {}), "@sanpedrosula.hn"],
                              }),
                            ],
                          }),
                          A(Nu, {
                            id: "input-password",
                            "data-testid": "input-password",
                            type: f ? "text" : "password",
                            name: "password",
                            label: "Password",
                            variant: "outlined",
                            error: !!s.password,
                            helperText: s.password ?? "",
                            InputProps: {
                              endAdornment: A(hT, {
                                position: "end",
                                children: A(gu, {
                                  "aria-label": "toggle password visibility",
                                  onClick: b,
                                  onMouseDown: (S) => {
                                    S.preventDefault();
                                  },
                                  size: "large",
                                  children: f ? A(T1, {}) : A(A1, {}),
                                }),
                              }),
                            },
                          }),
                          A(Eu, {
                            id: "submit-button",
                            "data-testid": "submit-button",
                            type: "submit",
                            variant: "contained",
                            color: "primary",
                            children: r ? "Create Account" : "Log In",
                          }),
                          A("button", {
                            id: "toggle-auth-type-button",
                            type: "button",
                            className: "link-button",
                            onClick: () => i(),
                            children: r
                              ? "Already have an account? Log In"
                              : "Sign up for an account",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  }
  function KP(e, t) {
    const n = () => {
      t((r) => ({ ...r, other: "Verification email sent." })),
        console.warn(
          "Something went wrong with a login or signup request. See the following error for details.",
        ),
        console.error(e);
    };
    if (e instanceof Ua) {
      const { error: r, statusCode: o } = e;
      switch (r || o) {
        case "invalid username":
        case "email invalid":
          /[@]/.test(r.detail)
            ? t((i) => ({
                ...i,
                email: "Email must not contain the @ symbol.",
              }))
            : t((i) => ({ ...i, email: "Invalid email address." }));
          break;
        case "invalid username/password":
        case "invalid password":
        case 401:
          t((i) => ({ ...i, password: "Incorrect password." }));
          break;
        case "name already in use":
        case 409:
          t((i) => ({ ...i, email: "Email is already registered." }));
          break;
        case "password must be between 6 and 128 characters":
        case 400:
          t((i) => ({
            ...i,
            password: "Password must be between 6 and 128 characters.",
          }));
          break;
        default:
          n();
          break;
      }
    } else n();
    errorType === "name already in use" &&
      error.detail.endsWith("@sanpedrosula.hn") &&
      console.log("Sending email to verify account.");
  }
  var Lt = function () {
    return (
      (Lt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        }),
      Lt.apply(this, arguments)
    );
  };
  function Ku(e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, o = t.length, i; r < o; r++)
        (i || !(r in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
    return e.concat(i || Array.prototype.slice.call(t));
  }
  var Ue = "-ms-",
    Wa = "-moz-",
    _e = "-webkit-",
    H1 = "comm",
    Yu = "rule",
    lh = "decl",
    YP = "@import",
    q1 = "@keyframes",
    XP = "@layer",
    ZP = Math.abs,
    uh = String.fromCharCode,
    ch = Object.assign;
  function QP(e, t) {
    return ct(e, 0) ^ 45
      ? (((((((t << 2) ^ ct(e, 0)) << 2) ^ ct(e, 1)) << 2) ^ ct(e, 2)) << 2) ^
          ct(e, 3)
      : 0;
  }
  function G1(e) {
    return e.trim();
  }
  function Xn(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function ge(e, t, n) {
    return e.replace(t, n);
  }
  function Xu(e, t) {
    return e.indexOf(t);
  }
  function ct(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function hi(e, t, n) {
    return e.slice(t, n);
  }
  function Ln(e) {
    return e.length;
  }
  function K1(e) {
    return e.length;
  }
  function Va(e, t) {
    return t.push(e), e;
  }
  function JP(e, t) {
    return e.map(t).join("");
  }
  function Y1(e, t) {
    return e.filter(function (n) {
      return !Xn(n, t);
    });
  }
  var Zu = 1,
    mi = 1,
    X1 = 0,
    cn = 0,
    rt = 0,
    gi = "";
  function Qu(e, t, n, r, o, i, a, s) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: Zu,
      column: mi,
      length: a,
      return: "",
      siblings: s,
    };
  }
  function Er(e, t) {
    return ch(
      Qu("", null, null, "", null, null, 0, e.siblings),
      e,
      { length: -e.length },
      t,
    );
  }
  function vi(e) {
    for (; e.root; ) e = Er(e.root, { children: [e] });
    Va(e, e.siblings);
  }
  function e_() {
    return rt;
  }
  function t_() {
    return (
      (rt = cn > 0 ? ct(gi, --cn) : 0), mi--, rt === 10 && ((mi = 1), Zu--), rt
    );
  }
  function Sn() {
    return (
      (rt = cn < X1 ? ct(gi, cn++) : 0), mi++, rt === 10 && ((mi = 1), Zu++), rt
    );
  }
  function io() {
    return ct(gi, cn);
  }
  function Ju() {
    return cn;
  }
  function ec(e, t) {
    return hi(gi, e, t);
  }
  function dh(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function n_(e) {
    return (Zu = mi = 1), (X1 = Ln((gi = e))), (cn = 0), [];
  }
  function r_(e) {
    return (gi = ""), e;
  }
  function fh(e) {
    return G1(ec(cn - 1, ph(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function o_(e) {
    for (; (rt = io()) && rt < 33; ) Sn();
    return dh(e) > 2 || dh(rt) > 3 ? "" : " ";
  }
  function i_(e, t) {
    for (
      ;
      --t &&
      Sn() &&
      !(rt < 48 || rt > 102 || (rt > 57 && rt < 65) || (rt > 70 && rt < 97));

    );
    return ec(e, Ju() + (t < 6 && io() == 32 && Sn() == 32));
  }
  function ph(e) {
    for (; Sn(); )
      switch (rt) {
        case e:
          return cn;
        case 34:
        case 39:
          e !== 34 && e !== 39 && ph(rt);
          break;
        case 40:
          e === 41 && ph(e);
          break;
        case 92:
          Sn();
          break;
      }
    return cn;
  }
  function a_(e, t) {
    for (
      ;
      Sn() && e + rt !== 47 + 10 && !(e + rt === 42 + 42 && io() === 47);

    );
    return "/*" + ec(t, cn - 1) + "*" + uh(e === 47 ? e : Sn());
  }
  function s_(e) {
    for (; !dh(io()); ) Sn();
    return ec(e, cn);
  }
  function l_(e) {
    return r_(tc("", null, null, null, [""], (e = n_(e)), 0, [0], e));
  }
  function tc(e, t, n, r, o, i, a, s, l) {
    for (
      var u = 0,
        d = 0,
        f = a,
        h = 0,
        b = 0,
        g = 0,
        x = 1,
        R = 1,
        y = 1,
        m = 0,
        v = "",
        S = o,
        C = i,
        N = r,
        T = v;
      R;

    )
      switch (((g = m), (m = Sn()))) {
        case 40:
          if (g != 108 && ct(T, f - 1) == 58) {
            Xu((T += ge(fh(m), "&", "&\f")), "&\f") != -1 && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          T += fh(m);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          T += o_(g);
          break;
        case 92:
          T += i_(Ju() - 1, 7);
          continue;
        case 47:
          switch (io()) {
            case 42:
            case 47:
              Va(u_(a_(Sn(), Ju()), t, n, l), l);
              break;
            default:
              T += "/";
          }
          break;
        case 123 * x:
          s[u++] = Ln(T) * y;
        case 125 * x:
        case 59:
        case 0:
          switch (m) {
            case 0:
            case 125:
              R = 0;
            case 59 + d:
              y == -1 && (T = ge(T, /\f/g, "")),
                b > 0 &&
                  Ln(T) - f &&
                  Va(
                    b > 32
                      ? Q1(T + ";", r, n, f - 1, l)
                      : Q1(ge(T, " ", "") + ";", r, n, f - 2, l),
                    l,
                  );
              break;
            case 59:
              T += ";";
            default:
              if (
                (Va(
                  (N = Z1(T, t, n, u, d, o, s, v, (S = []), (C = []), f, i)),
                  i,
                ),
                m === 123)
              )
                if (d === 0) tc(T, t, N, N, S, i, f, s, C);
                else
                  switch (h === 99 && ct(T, 3) === 110 ? 100 : h) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      tc(
                        e,
                        N,
                        N,
                        r &&
                          Va(Z1(e, N, N, 0, 0, o, s, v, o, (S = []), f, C), C),
                        o,
                        C,
                        f,
                        s,
                        r ? S : C,
                      );
                      break;
                    default:
                      tc(T, N, N, N, [""], C, 0, s, C);
                  }
          }
          (u = d = b = 0), (x = y = 1), (v = T = ""), (f = a);
          break;
        case 58:
          (f = 1 + Ln(T)), (b = g);
        default:
          if (x < 1) {
            if (m == 123) --x;
            else if (m == 125 && x++ == 0 && t_() == 125) continue;
          }
          switch (((T += uh(m)), m * x)) {
            case 38:
              y = d > 0 ? 1 : ((T += "\f"), -1);
              break;
            case 44:
              (s[u++] = (Ln(T) - 1) * y), (y = 1);
              break;
            case 64:
              io() === 45 && (T += fh(Sn())),
                (h = io()),
                (d = f = Ln((v = T += s_(Ju())))),
                m++;
              break;
            case 45:
              g === 45 && Ln(T) == 2 && (x = 0);
          }
      }
    return i;
  }
  function Z1(e, t, n, r, o, i, a, s, l, u, d, f) {
    for (
      var h = o - 1, b = o === 0 ? i : [""], g = K1(b), x = 0, R = 0, y = 0;
      x < r;
      ++x
    )
      for (var m = 0, v = hi(e, h + 1, (h = ZP((R = a[x])))), S = e; m < g; ++m)
        (S = G1(R > 0 ? b[m] + " " + v : ge(v, /&\f/g, b[m]))) && (l[y++] = S);
    return Qu(e, t, n, o === 0 ? Yu : s, l, u, d, f);
  }
  function u_(e, t, n, r) {
    return Qu(e, t, n, H1, uh(e_()), hi(e, 2, -2), 0, r);
  }
  function Q1(e, t, n, r, o) {
    return Qu(e, t, n, lh, hi(e, 0, r), hi(e, r + 1, -1), r, o);
  }
  function J1(e, t, n) {
    switch (QP(e, t)) {
      case 5103:
        return _e + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return _e + e + e;
      case 4789:
        return Wa + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return _e + e + Wa + e + Ue + e + e;
      case 5936:
        switch (ct(e, t + 11)) {
          case 114:
            return _e + e + Ue + ge(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return _e + e + Ue + ge(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return _e + e + Ue + ge(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
      case 6828:
      case 4268:
      case 2903:
        return _e + e + Ue + e + e;
      case 6165:
        return _e + e + Ue + "flex-" + e + e;
      case 5187:
        return (
          _e +
          e +
          ge(e, /(\w+).+(:[^]+)/, _e + "box-$1$2" + Ue + "flex-$1$2") +
          e
        );
      case 5443:
        return (
          _e +
          e +
          Ue +
          "flex-item-" +
          ge(e, /flex-|-self/g, "") +
          (Xn(e, /flex-|baseline/)
            ? ""
            : Ue + "grid-row-" + ge(e, /flex-|-self/g, "")) +
          e
        );
      case 4675:
        return (
          _e +
          e +
          Ue +
          "flex-line-pack" +
          ge(e, /align-content|flex-|-self/g, "") +
          e
        );
      case 5548:
        return _e + e + Ue + ge(e, "shrink", "negative") + e;
      case 5292:
        return _e + e + Ue + ge(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          _e +
          "box-" +
          ge(e, "-grow", "") +
          _e +
          e +
          Ue +
          ge(e, "grow", "positive") +
          e
        );
      case 4554:
        return _e + ge(e, /([^-])(transform)/g, "$1" + _e + "$2") + e;
      case 6187:
        return (
          ge(
            ge(ge(e, /(zoom-|grab)/, _e + "$1"), /(image-set)/, _e + "$1"),
            e,
            "",
          ) + e
        );
      case 5495:
      case 3959:
        return ge(e, /(image-set\([^]*)/, _e + "$1$`$1");
      case 4968:
        return (
          ge(
            ge(
              e,
              /(.+:)(flex-)?(.*)/,
              _e + "box-pack:$3" + Ue + "flex-pack:$3",
            ),
            /s.+-b[^;]+/,
            "justify",
          ) +
          _e +
          e +
          e
        );
      case 4200:
        if (!Xn(e, /flex-|baseline/))
          return Ue + "grid-column-align" + hi(e, t) + e;
        break;
      case 2592:
      case 3360:
        return Ue + ge(e, "template-", "") + e;
      case 4384:
      case 3616:
        return n &&
          n.some(function (r, o) {
            return (t = o), Xn(r.props, /grid-\w+-end/);
          })
          ? ~Xu(e + (n = n[t].value), "span")
            ? e
            : Ue +
              ge(e, "-start", "") +
              e +
              Ue +
              "grid-row-span:" +
              (~Xu(n, "span") ? Xn(n, /\d+/) : +Xn(n, /\d+/) - +Xn(e, /\d+/)) +
              ";"
          : Ue + ge(e, "-start", "") + e;
      case 4896:
      case 4128:
        return n &&
          n.some(function (r) {
            return Xn(r.props, /grid-\w+-start/);
          })
          ? e
          : Ue + ge(ge(e, "-end", "-span"), "span ", "") + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return ge(e, /(.+)-inline(.+)/, _e + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Ln(e) - 1 - t > 6)
          switch (ct(e, t + 1)) {
            case 109:
              if (ct(e, t + 4) !== 45) break;
            case 102:
              return (
                ge(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    _e +
                    "$2-$3$1" +
                    Wa +
                    (ct(e, t + 3) == 108 ? "$3" : "$2-$3"),
                ) + e
              );
            case 115:
              return ~Xu(e, "stretch")
                ? J1(ge(e, "stretch", "fill-available"), t, n) + e
                : e;
          }
        break;
      case 5152:
      case 5920:
        return ge(
          e,
          /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
          function (r, o, i, a, s, l, u) {
            return (
              Ue +
              o +
              ":" +
              i +
              u +
              (a ? Ue + o + "-span:" + (s ? l : +l - +i) + u : "") +
              e
            );
          },
        );
      case 4949:
        if (ct(e, t + 6) === 121) return ge(e, ":", ":" + _e) + e;
        break;
      case 6444:
        switch (ct(e, ct(e, 14) === 45 ? 18 : 11)) {
          case 120:
            return (
              ge(
                e,
                /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                "$1" +
                  _e +
                  (ct(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  _e +
                  "$2$3$1" +
                  Ue +
                  "$2box$3",
              ) + e
            );
          case 100:
            return ge(e, ":", ":" + Ue) + e;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return ge(e, "scroll-", "scroll-snap-") + e;
    }
    return e;
  }
  function nc(e, t) {
    for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
    return n;
  }
  function c_(e, t, n, r) {
    switch (e.type) {
      case XP:
        if (e.children.length) break;
      case YP:
      case lh:
        return (e.return = e.return || e.value);
      case H1:
        return "";
      case q1:
        return (e.return = e.value + "{" + nc(e.children, r) + "}");
      case Yu:
        if (!Ln((e.value = e.props.join(",")))) return "";
    }
    return Ln((n = nc(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function d_(e) {
    var t = K1(e);
    return function (n, r, o, i) {
      for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
      return a;
    };
  }
  function f_(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  function p_(e, t, n, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case lh:
          e.return = J1(e.value, e.length, n);
          return;
        case q1:
          return nc([Er(e, { value: ge(e.value, "@", "@" + _e) })], r);
        case Yu:
          if (e.length)
            return JP((n = e.props), function (o) {
              switch (Xn(o, (r = /(::plac\w+|:read-\w+)/))) {
                case ":read-only":
                case ":read-write":
                  vi(Er(e, { props: [ge(o, /:(read-\w+)/, ":" + Wa + "$1")] })),
                    vi(Er(e, { props: [o] })),
                    ch(e, { props: Y1(n, r) });
                  break;
                case "::placeholder":
                  vi(
                    Er(e, {
                      props: [ge(o, /:(plac\w+)/, ":" + _e + "input-$1")],
                    }),
                  ),
                    vi(
                      Er(e, { props: [ge(o, /:(plac\w+)/, ":" + Wa + "$1")] }),
                    ),
                    vi(
                      Er(e, { props: [ge(o, /:(plac\w+)/, Ue + "input-$1")] }),
                    ),
                    vi(Er(e, { props: [o] })),
                    ch(e, { props: Y1(n, r) });
                  break;
              }
              return "";
            });
      }
  }
  var yi =
      (typeof process < "u" &&
        process.env !== void 0 &&
        ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
      "data-styled",
    hh = typeof window < "u" && "HTMLElement" in window,
    h_ = !!(typeof SC_DISABLE_SPEEDY == "boolean"
      ? SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env !== void 0 &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        {}.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env !== void 0 &&
        {}.SC_DISABLE_SPEEDY !== void 0 &&
        {}.SC_DISABLE_SPEEDY !== "" &&
        {}.SC_DISABLE_SPEEDY !== "false" &&
        {}.SC_DISABLE_SPEEDY),
    rc = Object.freeze([]),
    bi = Object.freeze({});
  function m_(e, t, n) {
    return (
      n === void 0 && (n = bi), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  }
  var ew = new Set([
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "use",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ]),
    g_ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    v_ = /(^-|-$)/g;
  function tw(e) {
    return e.replace(g_, "-").replace(v_, "");
  }
  var y_ = /(a)(d)/gi,
    nw = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function mh(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = nw(t % 52) + n;
    return (nw(t % 52) + n).replace(y_, "$1-$2");
  }
  var gh,
    wi = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
      return e;
    },
    rw = function (e) {
      return wi(5381, e);
    };
  function b_(e) {
    return mh(rw(e) >>> 0);
  }
  function w_(e) {
    return e.displayName || e.name || "Component";
  }
  function vh(e) {
    return typeof e == "string" && !0;
  }
  var ow = typeof Symbol == "function" && Symbol.for,
    iw = ow ? Symbol.for("react.memo") : 60115,
    S_ = ow ? Symbol.for("react.forward_ref") : 60112,
    x_ = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    k_ = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    aw = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    E_ =
      (((gh = {})[S_] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
      (gh[iw] = aw),
      gh);
  function sw(e) {
    return ("type" in (t = e) && t.type.$$typeof) === iw
      ? aw
      : "$$typeof" in e
      ? E_[e.$$typeof]
      : x_;
    var t;
  }
  var C_ = Object.defineProperty,
    O_ = Object.getOwnPropertyNames,
    lw = Object.getOwnPropertySymbols,
    N_ = Object.getOwnPropertyDescriptor,
    T_ = Object.getPrototypeOf,
    uw = Object.prototype;
  function cw(e, t, n) {
    if (typeof t != "string") {
      if (uw) {
        var r = T_(t);
        r && r !== uw && cw(e, r, n);
      }
      var o = O_(t);
      lw && (o = o.concat(lw(t)));
      for (var i = sw(e), a = sw(t), s = 0; s < o.length; ++s) {
        var l = o[s];
        if (!(l in k_ || (n && n[l]) || (a && l in a) || (i && l in i))) {
          var u = N_(t, l);
          try {
            C_(e, l, u);
          } catch {}
        }
      }
    }
    return e;
  }
  function Si(e) {
    return typeof e == "function";
  }
  function yh(e) {
    return typeof e == "object" && "styledComponentId" in e;
  }
  function ao(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function dw(e, t) {
    if (e.length === 0) return "";
    for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
    return n;
  }
  function Ha(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      e.constructor.name === Object.name &&
      !("props" in e && e.$$typeof)
    );
  }
  function bh(e, t, n) {
    if ((n === void 0 && (n = !1), !n && !Ha(e) && !Array.isArray(e))) return t;
    if (Array.isArray(t))
      for (var r = 0; r < t.length; r++) e[r] = bh(e[r], t[r]);
    else if (Ha(t)) for (var r in t) e[r] = bh(e[r], t[r]);
    return e;
  }
  function wh(e, t) {
    Object.defineProperty(e, "toString", { value: t });
  }
  function qa(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return new Error(
      "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
        .concat(e, " for more information.")
        .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
    );
  }
  var A_ = (function () {
      function e(t) {
        (this.groupSizes = new Uint32Array(512)),
          (this.length = 512),
          (this.tag = t);
      }
      return (
        (e.prototype.indexOfGroup = function (t) {
          for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
          return n;
        }),
        (e.prototype.insertRules = function (t, n) {
          if (t >= this.groupSizes.length) {
            for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
              if ((i <<= 1) < 0) throw qa(16, "".concat(t));
            (this.groupSizes = new Uint32Array(i)),
              this.groupSizes.set(r),
              (this.length = i);
            for (var a = o; a < i; a++) this.groupSizes[a] = 0;
          }
          for (
            var s = this.indexOfGroup(t + 1), l = ((a = 0), n.length);
            a < l;
            a++
          )
            this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
        }),
        (e.prototype.clearGroup = function (t) {
          if (t < this.length) {
            var n = this.groupSizes[t],
              r = this.indexOfGroup(t),
              o = r + n;
            this.groupSizes[t] = 0;
            for (var i = r; i < o; i++) this.tag.deleteRule(r);
          }
        }),
        (e.prototype.getGroup = function (t) {
          var n = "";
          if (t >= this.length || this.groupSizes[t] === 0) return n;
          for (
            var r = this.groupSizes[t],
              o = this.indexOfGroup(t),
              i = o + r,
              a = o;
            a < i;
            a++
          )
            n += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
          return n;
        }),
        e
      );
    })(),
    oc = new Map(),
    ic = new Map(),
    Sh = 1,
    ac = function (e) {
      if (oc.has(e)) return oc.get(e);
      for (; ic.has(Sh); ) Sh++;
      var t = Sh++;
      return oc.set(e, t), ic.set(t, e), t;
    },
    R_ = function (e, t) {
      oc.set(e, t), ic.set(t, e);
    },
    P_ = "style["
      .concat(yi, "][")
      .concat("data-styled-version", '="')
      .concat("6.0.7", '"]'),
    __ = new RegExp(
      "^".concat(yi, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    ),
    I_ = function (e, t, n) {
      for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
        (r = o[i]) && e.registerName(t, r);
    },
    $_ = function (e, t) {
      for (
        var n,
          r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
            .split(`/*!sc*/
`),
          o = [],
          i = 0,
          a = r.length;
        i < a;
        i++
      ) {
        var s = r[i].trim();
        if (s) {
          var l = s.match(__);
          if (l) {
            var u = 0 | parseInt(l[1], 10),
              d = l[2];
            u !== 0 && (R_(d, u), I_(e, d, l[3]), e.getTag().insertRules(u, o)),
              (o.length = 0);
          } else o.push(s);
        }
      }
    };
  function M_() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  }
  var fw = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        o = (function (s) {
          var l = Array.from(s.querySelectorAll("style[".concat(yi, "]")));
          return l[l.length - 1];
        })(n),
        i = o !== void 0 ? o.nextSibling : null;
      r.setAttribute(yi, "active"),
        r.setAttribute("data-styled-version", "6.0.7");
      var a = M_();
      return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
    },
    L_ = (function () {
      function e(t) {
        (this.element = fw(t)),
          this.element.appendChild(document.createTextNode("")),
          (this.sheet = (function (n) {
            if (n.sheet) return n.sheet;
            for (
              var r = document.styleSheets, o = 0, i = r.length;
              o < i;
              o++
            ) {
              var a = r[o];
              if (a.ownerNode === n) return a;
            }
            throw qa(17);
          })(this.element)),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, n) {
          try {
            return this.sheet.insertRule(n, t), this.length++, !0;
          } catch {
            return !1;
          }
        }),
        (e.prototype.deleteRule = function (t) {
          this.sheet.deleteRule(t), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          var n = this.sheet.cssRules[t];
          return n && n.cssText ? n.cssText : "";
        }),
        e
      );
    })(),
    F_ = (function () {
      function e(t) {
        (this.element = fw(t)),
          (this.nodes = this.element.childNodes),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, n) {
          if (t <= this.length && t >= 0) {
            var r = document.createTextNode(n);
            return (
              this.element.insertBefore(r, this.nodes[t] || null),
              this.length++,
              !0
            );
          }
          return !1;
        }),
        (e.prototype.deleteRule = function (t) {
          this.element.removeChild(this.nodes[t]), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          return t < this.length ? this.nodes[t].textContent : "";
        }),
        e
      );
    })(),
    B_ = (function () {
      function e(t) {
        (this.rules = []), (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, n) {
          return (
            t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
          );
        }),
        (e.prototype.deleteRule = function (t) {
          this.rules.splice(t, 1), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          return t < this.length ? this.rules[t] : "";
        }),
        e
      );
    })(),
    pw = hh,
    j_ = { isServer: !hh, useCSSOMInjection: !h_ },
    hw = (function () {
      function e(t, n, r) {
        t === void 0 && (t = bi), n === void 0 && (n = {});
        var o = this;
        (this.options = Lt(Lt({}, j_), t)),
          (this.gs = n),
          (this.names = new Map(r)),
          (this.server = !!t.isServer),
          !this.server &&
            hh &&
            pw &&
            ((pw = !1),
            (function (i) {
              for (
                var a = document.querySelectorAll(P_), s = 0, l = a.length;
                s < l;
                s++
              ) {
                var u = a[s];
                u &&
                  u.getAttribute(yi) !== "active" &&
                  ($_(i, u), u.parentNode && u.parentNode.removeChild(u));
              }
            })(this)),
          wh(this, function () {
            return (function (i) {
              for (
                var a = i.getTag(),
                  s = a.length,
                  l = "",
                  u = function (f) {
                    var h = (function (y) {
                      return ic.get(y);
                    })(f);
                    if (h === void 0) return "continue";
                    var b = i.names.get(h),
                      g = a.getGroup(f);
                    if (b === void 0 || g.length === 0) return "continue";
                    var x = ""
                        .concat(yi, ".g")
                        .concat(f, '[id="')
                        .concat(h, '"]'),
                      R = "";
                    b !== void 0 &&
                      b.forEach(function (y) {
                        y.length > 0 && (R += "".concat(y, ","));
                      }),
                      (l += "".concat(g).concat(x, '{content:"').concat(R, '"}')
                        .concat(`/*!sc*/
`));
                  },
                  d = 0;
                d < s;
                d++
              )
                u(d);
              return l;
            })(o);
          });
      }
      return (
        (e.registerId = function (t) {
          return ac(t);
        }),
        (e.prototype.reconstructWithOptions = function (t, n) {
          return (
            n === void 0 && (n = !0),
            new e(
              Lt(Lt({}, this.options), t),
              this.gs,
              (n && this.names) || void 0,
            )
          );
        }),
        (e.prototype.allocateGSInstance = function (t) {
          return (this.gs[t] = (this.gs[t] || 0) + 1);
        }),
        (e.prototype.getTag = function () {
          return (
            this.tag ||
            (this.tag =
              ((t = (function (n) {
                var r = n.useCSSOMInjection,
                  o = n.target;
                return n.isServer ? new B_(o) : r ? new L_(o) : new F_(o);
              })(this.options)),
              new A_(t)))
          );
          var t;
        }),
        (e.prototype.hasNameForId = function (t, n) {
          return this.names.has(t) && this.names.get(t).has(n);
        }),
        (e.prototype.registerName = function (t, n) {
          if ((ac(t), this.names.has(t))) this.names.get(t).add(n);
          else {
            var r = new Set();
            r.add(n), this.names.set(t, r);
          }
        }),
        (e.prototype.insertRules = function (t, n, r) {
          this.registerName(t, n), this.getTag().insertRules(ac(t), r);
        }),
        (e.prototype.clearNames = function (t) {
          this.names.has(t) && this.names.get(t).clear();
        }),
        (e.prototype.clearRules = function (t) {
          this.getTag().clearGroup(ac(t)), this.clearNames(t);
        }),
        (e.prototype.clearTag = function () {
          this.tag = void 0;
        }),
        e
      );
    })(),
    z_ = /&/g,
    U_ = /^\s*\/\/.*$/gm;
  function mw(e, t) {
    return e.map(function (n) {
      return (
        n.type === "rule" &&
          ((n.value = "".concat(t, " ").concat(n.value)),
          (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
          (n.props = n.props.map(function (r) {
            return "".concat(t, " ").concat(r);
          }))),
        Array.isArray(n.children) &&
          n.type !== "@keyframes" &&
          (n.children = mw(n.children, t)),
        n
      );
    });
  }
  function D_(e) {
    var t,
      n,
      r,
      o = e === void 0 ? bi : e,
      i = o.options,
      a = i === void 0 ? bi : i,
      s = o.plugins,
      l = s === void 0 ? rc : s,
      u = function (h, b, g) {
        return g === n ||
          (g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0)
          ? ".".concat(t)
          : h;
      },
      d = l.slice();
    d.push(function (h) {
      h.type === Yu &&
        h.value.includes("&") &&
        (h.props[0] = h.props[0].replace(z_, n).replace(r, u));
    }),
      a.prefix && d.push(p_),
      d.push(c_);
    var f = function (h, b, g, x) {
      b === void 0 && (b = ""),
        g === void 0 && (g = ""),
        x === void 0 && (x = "&"),
        (t = x),
        (n = b),
        (r = new RegExp("\\".concat(n, "\\b"), "g"));
      var R = h.replace(U_, ""),
        y = l_(g || b ? "".concat(g, " ").concat(b, " { ").concat(R, " }") : R);
      a.namespace && (y = mw(y, a.namespace));
      var m = [];
      return (
        nc(
          y,
          d_(
            d.concat(
              f_(function (v) {
                return m.push(v);
              }),
            ),
          ),
        ),
        m
      );
    };
    return (
      (f.hash = l.length
        ? l
            .reduce(function (h, b) {
              return b.name || qa(15), wi(h, b.name);
            }, 5381)
            .toString()
        : ""),
      f
    );
  }
  var W_ = new hw(),
    xh = D_(),
    gw = fe.createContext({
      shouldForwardProp: void 0,
      styleSheet: W_,
      stylis: xh,
    });
  gw.Consumer, fe.createContext(void 0);
  function vw() {
    return k.useContext(gw);
  }
  var V_ = (function () {
      function e(t, n) {
        var r = this;
        (this.inject = function (o, i) {
          i === void 0 && (i = xh);
          var a = r.name + i.hash;
          o.hasNameForId(r.id, a) ||
            o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
        }),
          (this.name = t),
          (this.id = "sc-keyframes-".concat(t)),
          (this.rules = n),
          wh(this, function () {
            throw qa(12, String(r.name));
          });
      }
      return (
        (e.prototype.getName = function (t) {
          return t === void 0 && (t = xh), this.name + t.hash;
        }),
        e
      );
    })(),
    H_ = function (e) {
      return e >= "A" && e <= "Z";
    };
  function yw(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var r = e[n];
      if (n === 1 && r === "-" && e[0] === "-") return e;
      H_(r) ? (t += "-" + r.toLowerCase()) : (t += r);
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var bw = function (e) {
      return e == null || e === !1 || e === "";
    },
    ww = function (e) {
      var t,
        n,
        r = [];
      for (var o in e) {
        var i = e[o];
        e.hasOwnProperty(o) &&
          !bw(i) &&
          ((Array.isArray(i) && i.isCss) || Si(i)
            ? r.push("".concat(yw(o), ":"), i, ";")
            : Ha(i)
            ? r.push.apply(
                r,
                Ku(Ku(["".concat(o, " {")], ww(i), !1), ["}"], !1),
              )
            : r.push(
                ""
                  .concat(yw(o), ": ")
                  .concat(
                    ((t = o),
                    (n = i) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                        n === 0 ||
                        t in Hv ||
                        t.startsWith("--")
                      ? String(n).trim()
                      : "".concat(n, "px")),
                    ";",
                  ),
              ));
      }
      return r;
    };
  function so(e, t, n, r) {
    if (bw(e)) return [];
    if (yh(e)) return [".".concat(e.styledComponentId)];
    if (Si(e)) {
      if (!Si((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
        return [e];
      var o = e(t);
      return so(o, t, n, r);
    }
    var i;
    return e instanceof V_
      ? n
        ? (e.inject(n, r), [e.getName(r)])
        : [e]
      : Ha(e)
      ? ww(e)
      : Array.isArray(e)
      ? Array.prototype.concat.apply(
          rc,
          e.map(function (a) {
            return so(a, t, n, r);
          }),
        )
      : [e.toString()];
  }
  function q_(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      if (Si(n) && !yh(n)) return !1;
    }
    return !0;
  }
  var G_ = rw("6.0.7"),
    K_ = (function () {
      function e(t, n, r) {
        (this.rules = t),
          (this.staticRulesId = ""),
          (this.isStatic = (r === void 0 || r.isStatic) && q_(t)),
          (this.componentId = n),
          (this.baseHash = wi(G_, n)),
          (this.baseStyle = r),
          hw.registerId(n);
      }
      return (
        (e.prototype.generateAndInjectStyles = function (t, n, r) {
          var o = this.baseStyle
            ? this.baseStyle.generateAndInjectStyles(t, n, r)
            : "";
          if (this.isStatic && !r.hash)
            if (
              this.staticRulesId &&
              n.hasNameForId(this.componentId, this.staticRulesId)
            )
              o = ao(o, this.staticRulesId);
            else {
              var i = dw(so(this.rules, t, n, r)),
                a = mh(wi(this.baseHash, i) >>> 0);
              if (!n.hasNameForId(this.componentId, a)) {
                var s = r(i, ".".concat(a), void 0, this.componentId);
                n.insertRules(this.componentId, a, s);
              }
              (o = ao(o, a)), (this.staticRulesId = a);
            }
          else {
            for (
              var l = wi(this.baseHash, r.hash), u = "", d = 0;
              d < this.rules.length;
              d++
            ) {
              var f = this.rules[d];
              if (typeof f == "string") u += f;
              else if (f) {
                var h = dw(so(f, t, n, r));
                (l = wi(l, h)), (u += h);
              }
            }
            if (u) {
              var b = mh(l >>> 0);
              n.hasNameForId(this.componentId, b) ||
                n.insertRules(
                  this.componentId,
                  b,
                  r(u, ".".concat(b), void 0, this.componentId),
                ),
                (o = ao(o, b));
            }
          }
          return o;
        }),
        e
      );
    })(),
    Sw = fe.createContext(void 0);
  Sw.Consumer;
  var kh = {};
  function Y_(e, t, n) {
    var r = yh(e),
      o = e,
      i = !vh(e),
      a = t.attrs,
      s = a === void 0 ? rc : a,
      l = t.componentId,
      u =
        l === void 0
          ? (function (v, S) {
              var C = typeof v != "string" ? "sc" : tw(v);
              kh[C] = (kh[C] || 0) + 1;
              var N = "".concat(C, "-").concat(b_("6.0.7" + C + kh[C]));
              return S ? "".concat(S, "-").concat(N) : N;
            })(t.displayName, t.parentComponentId)
          : l,
      d = t.displayName;
    d === void 0 &&
      (function (v) {
        return vh(v) ? "styled.".concat(v) : "Styled(".concat(w_(v), ")");
      })(e);
    var f =
        t.displayName && t.componentId
          ? "".concat(tw(t.displayName), "-").concat(t.componentId)
          : t.componentId || u,
      h = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s,
      b = t.shouldForwardProp;
    if (r && o.shouldForwardProp) {
      var g = o.shouldForwardProp;
      if (t.shouldForwardProp) {
        var x = t.shouldForwardProp;
        b = function (v, S) {
          return g(v, S) && x(v, S);
        };
      } else b = g;
    }
    var R = new K_(n, f, r ? o.componentStyle : void 0);
    function y(v, S) {
      return (function (C, N, T) {
        var _ = C.attrs,
          I = C.componentStyle,
          j = C.defaultProps,
          H = C.foldedComponentIds,
          V = C.styledComponentId,
          Z = C.target,
          D = fe.useContext(Sw),
          Y = vw(),
          Q = C.shouldForwardProp || Y.shouldForwardProp,
          K = (function (B, W, X) {
            for (
              var J,
                ae = Lt(Lt({}, W), { className: void 0, theme: X }),
                oe = 0;
              oe < B.length;
              oe += 1
            ) {
              var ce = Si((J = B[oe])) ? J(ae) : J;
              for (var ne in ce)
                ae[ne] =
                  ne === "className"
                    ? ao(ae[ne], ce[ne])
                    : ne === "style"
                    ? Lt(Lt({}, ae[ne]), ce[ne])
                    : ce[ne];
            }
            return (
              W.className && (ae.className = ao(ae.className, W.className)), ae
            );
          })(_, N, m_(N, D, j) || bi),
          z = K.as || Z,
          F = {};
        for (var $ in K)
          K[$] === void 0 ||
            $[0] === "$" ||
            $ === "as" ||
            $ === "theme" ||
            ($ === "forwardedAs"
              ? (F.as = K.forwardedAs)
              : (Q && !Q($, z)) || (F[$] = K[$]));
        var O = (function (B, W) {
            var X = vw(),
              J = B.generateAndInjectStyles(W, X.styleSheet, X.stylis);
            return J;
          })(I, K),
          L = ao(H, V);
        return (
          O && (L += " " + O),
          K.className && (L += " " + K.className),
          (F[vh(z) && !ew.has(z) ? "class" : "className"] = L),
          (F.ref = T),
          k.createElement(z, F)
        );
      })(m, v, S);
    }
    var m = fe.forwardRef(y);
    return (
      (m.attrs = h),
      (m.componentStyle = R),
      (m.shouldForwardProp = b),
      (m.foldedComponentIds = r
        ? ao(o.foldedComponentIds, o.styledComponentId)
        : ""),
      (m.styledComponentId = f),
      (m.target = r ? o.target : e),
      Object.defineProperty(m, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (v) {
          this._foldedDefaultProps = r
            ? (function (S) {
                for (var C = [], N = 1; N < arguments.length; N++)
                  C[N - 1] = arguments[N];
                for (var T = 0, _ = C; T < _.length; T++) bh(S, _[T], !0);
                return S;
              })({}, o.defaultProps, v)
            : v;
        },
      }),
      wh(m, function () {
        return ".".concat(m.styledComponentId);
      }),
      i &&
        cw(m, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
        }),
      m
    );
  }
  function xw(e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  }
  var kw = function (e) {
    return Object.assign(e, { isCss: !0 });
  };
  function Eh(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    if (Si(e) || Ha(e)) {
      var r = e;
      return kw(so(xw(rc, Ku([r], t, !0))));
    }
    var o = e;
    return t.length === 0 && o.length === 1 && typeof o[0] == "string"
      ? so(o)
      : kw(so(xw(o, t)));
  }
  function Ch(e, t, n) {
    if ((n === void 0 && (n = bi), !t)) throw qa(1, t);
    var r = function (o) {
      for (var i = [], a = 1; a < arguments.length; a++)
        i[a - 1] = arguments[a];
      return e(t, n, Eh.apply(void 0, Ku([o], i, !1)));
    };
    return (
      (r.attrs = function (o) {
        return Ch(
          e,
          t,
          Lt(Lt({}, n), {
            attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
          }),
        );
      }),
      (r.withConfig = function (o) {
        return Ch(e, t, Lt(Lt({}, n), o));
      }),
      r
    );
  }
  var Ew = function (e) {
      return Ch(Y_, e);
    },
    Cw = Ew;
  ew.forEach(function (e) {
    Cw[e] = Ew(e);
  });
  const Ow = (e, t) => Eh`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${e}, ${t});
  border: 1px solid ${t};
  &:hover {
    background-image: linear-gradient(${e}, ${t});
    &[disabled] {
      background-image: linear-gradient(${e}, ${t});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,
    X_ = Eh`
  ${Ow("#ffffff", "#d5d5d5")} color: #555;
`,
    Z_ = Ow("#4f93ce", "#285f8f"),
    Q_ = Cw.div`
  font-family: sans-serif;

  h1,
  h2 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }

  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      margin: 0 10px;
      &[type='submit'] {
        ${Z_};
      }
      &[type='button'] {
        ${X_};
      }
    }
    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`;
  var J_ = ".".charCodeAt(0),
    eI = /\\(\\)?/g,
    tI = RegExp(
      `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
      "g",
    ),
    nI = function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === J_ && t.push(""),
        e.replace(tI, function (n, r, o, i) {
          var a = n;
          o ? (a = i.replace(eI, "$1")) : r && (a = r.trim()), t.push(a);
        }),
        t
      );
    },
    sc = {},
    rI = /[.[\]]+/,
    Nw = function (e) {
      if (e == null || !e.length) return [];
      if (typeof e != "string") throw new Error("toPath() expects a string");
      return (
        sc[e] == null &&
          (e.endsWith("[]")
            ? (sc[e] = e.split(rI).filter(Boolean))
            : (sc[e] = nI(e))),
        sc[e]
      );
    },
    Ve = function (e, t) {
      for (var n = Nw(t), r = e, o = 0; o < n.length; o++) {
        var i = n[o];
        if (r == null || typeof r != "object" || (Array.isArray(r) && isNaN(i)))
          return;
        r = r[i];
      }
      return r;
    };
  function oI(e) {
    var t = iI(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function iI(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  var aI = function e(t, n, r, o, i) {
      if (n >= r.length) return o;
      var a = r[n];
      if (isNaN(a)) {
        var s;
        if (t == null) {
          var l,
            u = e(void 0, n + 1, r, o, i);
          return u === void 0 ? void 0 : ((l = {}), (l[a] = u), l);
        }
        if (Array.isArray(t))
          throw new Error("Cannot set a non-numeric property on an array");
        var d = e(t[a], n + 1, r, o, i);
        if (d === void 0) {
          var f = Object.keys(t).length;
          if (t[a] === void 0 && f === 0) return;
          if (t[a] !== void 0 && f <= 1)
            return !isNaN(r[n - 1]) && !i ? {} : void 0;
          t[a];
          var h = re(t, [a].map(oI));
          return h;
        }
        return E({}, t, ((s = {}), (s[a] = d), s));
      }
      var b = Number(a);
      if (t == null) {
        var g = e(void 0, n + 1, r, o, i);
        if (g === void 0) return;
        var x = [];
        return (x[b] = g), x;
      }
      if (!Array.isArray(t))
        throw new Error("Cannot set a numeric property on an object");
      var R = t[b],
        y = e(R, n + 1, r, o, i),
        m = [].concat(t);
      if (i && y === void 0) {
        if ((m.splice(b, 1), m.length === 0)) return;
      } else m[b] = y;
      return m;
    },
    dn = function (e, t, n, r) {
      if ((r === void 0 && (r = !1), e == null))
        throw new Error("Cannot call setIn() with " + String(e) + " state");
      if (t == null)
        throw new Error("Cannot call setIn() with " + String(t) + " key");
      return aI(e, 0, Nw(t), n, r);
    },
    Tw = "FINAL_FORM/form-error",
    Ga = "FINAL_FORM/array-error";
  function Aw(e, t) {
    var n = e.errors,
      r = e.initialValues,
      o = e.lastSubmittedValues,
      i = e.submitErrors,
      a = e.submitFailed,
      s = e.submitSucceeded,
      l = e.submitting,
      u = e.values,
      d = t.active,
      f = t.blur,
      h = t.change,
      b = t.data,
      g = t.focus,
      x = t.modified,
      R = t.modifiedSinceLastSubmit,
      y = t.name,
      m = t.touched,
      v = t.validating,
      S = t.visited,
      C = Ve(u, y),
      N = Ve(n, y);
    N && N[Ga] && (N = N[Ga]);
    var T = i && Ve(i, y),
      _ = r && Ve(r, y),
      I = t.isEqual(_, C),
      j = !!(o && !t.isEqual(Ve(o, y), C)),
      H = !N && !T;
    return {
      active: d,
      blur: f,
      change: h,
      data: b,
      dirty: !I,
      dirtySinceLastSubmit: j,
      error: N,
      focus: g,
      initial: _,
      invalid: !H,
      length: Array.isArray(C) ? C.length : void 0,
      modified: x,
      modifiedSinceLastSubmit: R,
      name: y,
      pristine: I,
      submitError: T,
      submitFailed: a,
      submitSucceeded: s,
      submitting: l,
      touched: m,
      valid: H,
      value: C,
      visited: S,
      validating: v,
    };
  }
  var Rw = [
      "active",
      "data",
      "dirty",
      "dirtySinceLastSubmit",
      "error",
      "initial",
      "invalid",
      "length",
      "modified",
      "modifiedSinceLastSubmit",
      "pristine",
      "submitError",
      "submitFailed",
      "submitSucceeded",
      "submitting",
      "touched",
      "valid",
      "value",
      "visited",
      "validating",
    ],
    Fn = function (e, t) {
      if (e === t) return !0;
      if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (
        var o = Object.prototype.hasOwnProperty.bind(t), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (!o(a) || e[a] !== t[a]) return !1;
      }
      return !0;
    };
  function Pw(e, t, n, r, o, i) {
    var a = !1;
    return (
      o.forEach(function (s) {
        r[s] &&
          ((e[s] = t[s]),
          (!n || (~i.indexOf(s) ? !Fn(t[s], n[s]) : t[s] !== n[s])) &&
            (a = !0));
      }),
      a
    );
  }
  var sI = ["data"],
    lI = function (e, t, n, r) {
      var o = { blur: e.blur, change: e.change, focus: e.focus, name: e.name },
        i = Pw(o, e, t, n, Rw, sI) || !t;
      return i || r ? o : void 0;
    },
    _w = [
      "active",
      "dirty",
      "dirtyFields",
      "dirtyFieldsSinceLastSubmit",
      "dirtySinceLastSubmit",
      "error",
      "errors",
      "hasSubmitErrors",
      "hasValidationErrors",
      "initialValues",
      "invalid",
      "modified",
      "modifiedSinceLastSubmit",
      "pristine",
      "submitting",
      "submitError",
      "submitErrors",
      "submitFailed",
      "submitSucceeded",
      "touched",
      "valid",
      "validating",
      "values",
      "visited",
    ],
    uI = ["touched", "visited"];
  function Iw(e, t, n, r) {
    var o = {},
      i = Pw(o, e, t, n, _w, uI) || !t;
    return i || r ? o : void 0;
  }
  var $w = function (e) {
      var t, n;
      return function () {
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        return (
          (!t ||
            o.length !== t.length ||
            o.some(function (a, s) {
              return !Fn(t[s], a);
            })) &&
            ((t = o), (n = e.apply(void 0, o))),
          n
        );
      };
    },
    Oh = function (e) {
      return (
        !!e &&
        (typeof e == "object" || typeof e == "function") &&
        typeof e.then == "function"
      );
    },
    cI = "4.20.10",
    dI = function (e, t) {
      return e === t;
    },
    xi = function e(t) {
      return Object.keys(t).some(function (n) {
        var r = t[n];
        return r && typeof r == "object" && !(r instanceof Error)
          ? e(r)
          : typeof r < "u";
      });
    };
  function fI(e) {
    var t = e.active,
      n = e.dirtySinceLastSubmit,
      r = e.modifiedSinceLastSubmit,
      o = e.error,
      i = e.errors,
      a = e.initialValues,
      s = e.pristine,
      l = e.submitting,
      u = e.submitFailed,
      d = e.submitSucceeded,
      f = e.submitError,
      h = e.submitErrors,
      b = e.valid,
      g = e.validating,
      x = e.values;
    return {
      active: t,
      dirty: !s,
      dirtySinceLastSubmit: n,
      modifiedSinceLastSubmit: r,
      error: o,
      errors: i,
      hasSubmitErrors: !!(f || (h && xi(h))),
      hasValidationErrors: !!(o || xi(i)),
      invalid: !b,
      initialValues: a,
      pristine: s,
      submitting: l,
      submitFailed: u,
      submitSucceeded: d,
      submitError: f,
      submitErrors: h,
      valid: b,
      validating: g > 0,
      values: x,
    };
  }
  function Mw(e, t, n, r, o, i) {
    var a = o(n, r, t, i);
    return a ? (e(a), !0) : !1;
  }
  function Lw(e, t, n, r, o) {
    var i = e.entries;
    Object.keys(i).forEach(function (a) {
      var s = i[Number(a)];
      if (s) {
        var l = s.subscription,
          u = s.subscriber,
          d = s.notified;
        Mw(u, l, t, n, r, o || !d) && (s.notified = !0);
      }
    });
  }
  function pI(e) {
    if (!e) throw new Error("No config specified");
    var t = e.debug,
      n = e.destroyOnUnregister,
      r = e.keepDirtyOnReinitialize,
      o = e.initialValues,
      i = e.mutators,
      a = e.onSubmit,
      s = e.validate,
      l = e.validateOnBlur;
    if (!a) throw new Error("No onSubmit function specified");
    var u = {
        subscribers: { index: 0, entries: {} },
        fieldSubscribers: {},
        fields: {},
        formState: {
          asyncErrors: {},
          dirtySinceLastSubmit: !1,
          modifiedSinceLastSubmit: !1,
          errors: {},
          initialValues: o && E({}, o),
          invalid: !1,
          pristine: !0,
          submitting: !1,
          submitFailed: !1,
          submitSucceeded: !1,
          resetWhileSubmitting: !1,
          valid: !0,
          validating: 0,
          values: o ? E({}, o) : {},
        },
        lastFormState: void 0,
      },
      d = 0,
      f = !1,
      h = !1,
      b = !1,
      g = 0,
      x = {},
      R = function (O) {
        return function (L) {
          return delete x[O], L;
        };
      },
      y = function (O, L, B) {
        var W = Ve(O.formState.values, L),
          X = B(W);
        O.formState.values = dn(O.formState.values, L, X) || {};
      },
      m = function (O, L, B) {
        if (O.fields[L]) {
          var W, X;
          (O.fields = E(
            {},
            O.fields,
            ((W = {}),
            (W[B] = E({}, O.fields[L], {
              name: B,
              blur: function () {
                return $.blur(B);
              },
              change: function (ae) {
                return $.change(B, ae);
              },
              focus: function () {
                return $.focus(B);
              },
              lastFieldState: void 0,
            })),
            W),
          )),
            delete O.fields[L],
            (O.fieldSubscribers = E(
              {},
              O.fieldSubscribers,
              ((X = {}), (X[B] = O.fieldSubscribers[L]), X),
            )),
            delete O.fieldSubscribers[L];
          var J = Ve(O.formState.values, L);
          (O.formState.values = dn(O.formState.values, L, void 0) || {}),
            (O.formState.values = dn(O.formState.values, B, J)),
            delete O.lastFormState;
        }
      },
      v = function (O) {
        return function () {
          if (i) {
            for (
              var L = {
                  formState: u.formState,
                  fields: u.fields,
                  fieldSubscribers: u.fieldSubscribers,
                  lastFormState: u.lastFormState,
                },
                B = arguments.length,
                W = new Array(B),
                X = 0;
              X < B;
              X++
            )
              W[X] = arguments[X];
            var J = i[O](W, L, {
              changeValue: y,
              getIn: Ve,
              renameField: m,
              resetFieldState: $.resetFieldState,
              setIn: dn,
              shallowEqual: Fn,
            });
            return (
              (u.formState = L.formState),
              (u.fields = L.fields),
              (u.fieldSubscribers = L.fieldSubscribers),
              (u.lastFormState = L.lastFormState),
              _(void 0, function () {
                I(), Q();
              }),
              J
            );
          }
        };
      },
      S = i
        ? Object.keys(i).reduce(function (O, L) {
            return (O[L] = v(L)), O;
          }, {})
        : {},
      C = function (O) {
        var L = [];
        if (s) {
          var B = s(E({}, u.formState.values));
          Oh(B)
            ? L.push(
                B.then(function (W) {
                  return O(W, !0);
                }),
              )
            : O(B, !1);
        }
        return L;
      },
      N = function (O) {
        return Object.keys(O.validators).reduce(function (L, B) {
          var W = O.validators[Number(B)]();
          return W && L.push(W), L;
        }, []);
      },
      T = function (O, L) {
        var B = [],
          W = N(O);
        if (W.length) {
          var X;
          W.forEach(function (J) {
            var ae = J(
              Ve(u.formState.values, O.name),
              u.formState.values,
              J.length === 0 || J.length === 3
                ? Aw(u.formState, u.fields[O.name])
                : void 0,
            );
            if (ae && Oh(ae)) {
              O.validating = !0;
              var oe = ae.then(function (ce) {
                u.fields[O.name] && ((u.fields[O.name].validating = !1), L(ce));
              });
              B.push(oe);
            } else X || (X = ae);
          }),
            L(X);
        }
        return B;
      },
      _ = function (O, L) {
        if (f) {
          (h = !0), L();
          return;
        }
        var B = u.fields,
          W = u.formState,
          X = E({}, B),
          J = Object.keys(X);
        if (
          !s &&
          !J.some(function (M) {
            return N(X[M]).length;
          })
        ) {
          L();
          return;
        }
        var ae = !1;
        if (O) {
          var oe = X[O];
          if (oe) {
            var ce = oe.validateFields;
            ce && ((ae = !0), (J = ce.length ? ce.concat(O) : [O]));
          }
        }
        var ne = {},
          ve = {},
          ke = {},
          Ke = [].concat(
            C(function (M, U) {
              U ? (ve = M || {}) : (ne = M || {});
            }),
            J.reduce(function (M, U) {
              return M.concat(
                T(B[U], function (ee) {
                  ke[U] = ee;
                }),
              );
            }, []),
          ),
          Ne = Ke.length > 0,
          c = ++g,
          p = Promise.all(Ke).then(R(c));
        Ne && (x[c] = p);
        var w = function (M) {
          var U = E({}, ae ? W.errors : {}, ne, M ? ve : W.asyncErrors),
            ee = function (pe) {
              J.forEach(function (me) {
                if (B[me]) {
                  var he = Ve(ne, me),
                    Ee = Ve(U, me),
                    Le = N(X[me]).length,
                    Ce = ke[me];
                  pe(me, (Le && Ce) || (s && he) || (!he && !ae ? Ee : void 0));
                }
              });
            };
          ee(function (pe, me) {
            U = dn(U, pe, me) || {};
          }),
            ee(function (pe, me) {
              if (me && me[Ga]) {
                var he = Ve(U, pe),
                  Ee = [].concat(he);
                (Ee[Ga] = me[Ga]), (U = dn(U, pe, Ee));
              }
            }),
            Fn(W.errors, U) || (W.errors = U),
            M && (W.asyncErrors = ve),
            (W.error = ne[Tw]);
        };
        if ((Ne && (u.formState.validating++, L()), w(!1), L(), Ne)) {
          var P = function () {
            u.formState.validating--,
              L(),
              u.formState.validating === 0 && u.lastFormState.validating && Q();
          };
          p.then(function () {
            g > c || w(!0);
          }).then(P, P);
        }
      },
      I = function (O) {
        if (!d) {
          var L = u.fields,
            B = u.fieldSubscribers,
            W = u.formState,
            X = E({}, L),
            J = function (ae) {
              var oe = X[ae],
                ce = Aw(W, oe),
                ne = oe.lastFieldState;
              oe.lastFieldState = ce;
              var ve = B[ae];
              ve && Lw(ve, ce, ne, lI, ne === void 0);
            };
          O ? J(O) : Object.keys(X).forEach(J);
        }
      },
      j = function () {
        Object.keys(u.fields).forEach(function (O) {
          u.fields[O].touched = !0;
        });
      },
      H = function () {
        return !!(u.formState.error || xi(u.formState.errors));
      },
      V = function () {
        var O = u.fields,
          L = u.formState,
          B = u.lastFormState,
          W = E({}, O),
          X = Object.keys(W),
          J = !1,
          ae = X.reduce(function (Ne, c) {
            var p = !W[c].isEqual(
              Ve(L.values, c),
              Ve(L.initialValues || {}, c),
            );
            return p && ((J = !0), (Ne[c] = !0)), Ne;
          }, {}),
          oe = X.reduce(function (Ne, c) {
            var p = L.lastSubmittedValues || {};
            return W[c].isEqual(Ve(L.values, c), Ve(p, c)) || (Ne[c] = !0), Ne;
          }, {});
        (L.pristine = !J),
          (L.dirtySinceLastSubmit = !!(
            L.lastSubmittedValues &&
            Object.values(oe).some(function (Ne) {
              return Ne;
            })
          )),
          (L.modifiedSinceLastSubmit = !!(
            L.lastSubmittedValues &&
            Object.keys(W).some(function (Ne) {
              return W[Ne].modifiedSinceLastSubmit;
            })
          )),
          (L.valid =
            !L.error &&
            !L.submitError &&
            !xi(L.errors) &&
            !(L.submitErrors && xi(L.submitErrors)));
        var ce = fI(L),
          ne = X.reduce(
            function (Ne, c) {
              return (
                (Ne.modified[c] = W[c].modified),
                (Ne.touched[c] = W[c].touched),
                (Ne.visited[c] = W[c].visited),
                Ne
              );
            },
            { modified: {}, touched: {}, visited: {} },
          ),
          ve = ne.modified,
          ke = ne.touched,
          Ke = ne.visited;
        return (
          (ce.dirtyFields = B && Fn(B.dirtyFields, ae) ? B.dirtyFields : ae),
          (ce.dirtyFieldsSinceLastSubmit =
            B && Fn(B.dirtyFieldsSinceLastSubmit, oe)
              ? B.dirtyFieldsSinceLastSubmit
              : oe),
          (ce.modified = B && Fn(B.modified, ve) ? B.modified : ve),
          (ce.touched = B && Fn(B.touched, ke) ? B.touched : ke),
          (ce.visited = B && Fn(B.visited, Ke) ? B.visited : Ke),
          B && Fn(B, ce) ? B : ce
        );
      },
      Z = function () {
        return (
          t &&
          !0 &&
          t(
            V(),
            Object.keys(u.fields).reduce(function (O, L) {
              return (O[L] = u.fields[L]), O;
            }, {}),
          )
        );
      },
      D = !1,
      Y = !1,
      Q = function O() {
        if (D) Y = !0;
        else {
          if (((D = !0), Z(), !d && !(f && b))) {
            var L = u.lastFormState,
              B = V();
            B !== L && ((u.lastFormState = B), Lw(u.subscribers, B, L, Iw));
          }
          (D = !1), Y && ((Y = !1), O());
        }
      },
      K = function () {
        return Object.keys(u.fields).some(function (O) {
          return u.fields[O].beforeSubmit && u.fields[O].beforeSubmit() === !1;
        });
      },
      z = function () {
        return Object.keys(u.fields).forEach(function (O) {
          return u.fields[O].afterSubmit && u.fields[O].afterSubmit();
        });
      },
      F = function () {
        return Object.keys(u.fields).forEach(function (O) {
          return (u.fields[O].modifiedSinceLastSubmit = !1);
        });
      };
    _(void 0, function () {
      Q();
    });
    var $ = {
      batch: function (O) {
        d++, O(), d--, I(), Q();
      },
      blur: function (O) {
        var L = u.fields,
          B = u.formState,
          W = L[O];
        W &&
          (delete B.active,
          (L[O] = E({}, W, { active: !1, touched: !0 })),
          l
            ? _(O, function () {
                I(), Q();
              })
            : (I(), Q()));
      },
      change: function (O, L) {
        var B = u.fields,
          W = u.formState;
        if (Ve(W.values, O) !== L) {
          y(u, O, function () {
            return L;
          });
          var X = B[O];
          X &&
            (B[O] = E({}, X, {
              modified: !0,
              modifiedSinceLastSubmit: !!W.lastSubmittedValues,
            })),
            l
              ? (I(), Q())
              : _(O, function () {
                  I(), Q();
                });
        }
      },
      get destroyOnUnregister() {
        return !!n;
      },
      set destroyOnUnregister(O) {
        n = O;
      },
      focus: function (O) {
        var L = u.fields[O];
        L &&
          !L.active &&
          ((u.formState.active = O),
          (L.active = !0),
          (L.visited = !0),
          I(),
          Q());
      },
      mutators: S,
      getFieldState: function (O) {
        var L = u.fields[O];
        return L && L.lastFieldState;
      },
      getRegisteredFields: function () {
        return Object.keys(u.fields);
      },
      getState: function () {
        return V();
      },
      initialize: function (O) {
        var L = u.fields,
          B = u.formState,
          W = E({}, L),
          X = typeof O == "function" ? O(B.values) : O;
        r || (B.values = X);
        var J = r
          ? Object.keys(W).reduce(function (ae, oe) {
              var ce = W[oe],
                ne = ce.isEqual(
                  Ve(B.values, oe),
                  Ve(B.initialValues || {}, oe),
                );
              return ne || (ae[oe] = Ve(B.values, oe)), ae;
            }, {})
          : {};
        (B.initialValues = X),
          (B.values = X),
          Object.keys(J).forEach(function (ae) {
            B.values = dn(B.values, ae, J[ae]) || {};
          }),
          _(void 0, function () {
            I(), Q();
          });
      },
      isValidationPaused: function () {
        return f;
      },
      pauseValidation: function (O) {
        O === void 0 && (O = !0), (f = !0), (b = O);
      },
      registerField: function (O, L, B, W) {
        B === void 0 && (B = {}),
          u.fieldSubscribers[O] ||
            (u.fieldSubscribers[O] = { index: 0, entries: {} });
        var X = u.fieldSubscribers[O].index++;
        u.fieldSubscribers[O].entries[X] = {
          subscriber: $w(L),
          subscription: B,
          notified: !1,
        };
        var J = u.fields[O] || {
          active: !1,
          afterSubmit: W && W.afterSubmit,
          beforeSubmit: W && W.beforeSubmit,
          data: (W && W.data) || {},
          isEqual: (W && W.isEqual) || dI,
          lastFieldState: void 0,
          modified: !1,
          modifiedSinceLastSubmit: !1,
          name: O,
          touched: !1,
          valid: !0,
          validateFields: W && W.validateFields,
          validators: {},
          validating: !1,
          visited: !1,
        };
        (J.blur =
          J.blur ||
          function () {
            return $.blur(O);
          }),
          (J.change =
            J.change ||
            function (ve) {
              return $.change(O, ve);
            }),
          (J.focus =
            J.focus ||
            function () {
              return $.focus(O);
            }),
          (u.fields[O] = J);
        var ae = !1,
          oe = W && W.silent,
          ce = function () {
            oe && u.fields[O] ? I(O) : (Q(), I());
          };
        if (W) {
          (ae = !!(W.getValidator && W.getValidator())),
            W.getValidator && (u.fields[O].validators[X] = W.getValidator);
          var ne = Ve(u.formState.values, O) === void 0;
          W.initialValue !== void 0 &&
            (ne ||
              Ve(u.formState.values, O) === Ve(u.formState.initialValues, O)) &&
            ((u.formState.initialValues = dn(
              u.formState.initialValues || {},
              O,
              W.initialValue,
            )),
            (u.formState.values = dn(u.formState.values, O, W.initialValue)),
            _(void 0, ce)),
            W.defaultValue !== void 0 &&
              W.initialValue === void 0 &&
              Ve(u.formState.initialValues, O) === void 0 &&
              ne &&
              (u.formState.values = dn(u.formState.values, O, W.defaultValue));
        }
        return (
          ae ? _(void 0, ce) : ce(),
          function () {
            var ve = !1;
            u.fields[O] &&
              ((ve = !!(
                u.fields[O].validators[X] && u.fields[O].validators[X]()
              )),
              delete u.fields[O].validators[X]);
            var ke = !!u.fieldSubscribers[O];
            ke && delete u.fieldSubscribers[O].entries[X];
            var Ke = ke && !Object.keys(u.fieldSubscribers[O].entries).length;
            Ke &&
              (delete u.fieldSubscribers[O],
              delete u.fields[O],
              ve &&
                (u.formState.errors = dn(u.formState.errors, O, void 0) || {}),
              n &&
                (u.formState.values =
                  dn(u.formState.values, O, void 0, !0) || {})),
              oe ||
                (ve
                  ? _(void 0, function () {
                      Q(), I();
                    })
                  : Ke && Q());
          }
        );
      },
      reset: function (O) {
        O === void 0 && (O = u.formState.initialValues),
          u.formState.submitting && (u.formState.resetWhileSubmitting = !0),
          (u.formState.submitFailed = !1),
          (u.formState.submitSucceeded = !1),
          delete u.formState.submitError,
          delete u.formState.submitErrors,
          delete u.formState.lastSubmittedValues,
          $.initialize(O || {});
      },
      resetFieldState: function (O) {
        (u.fields[O] = E({}, u.fields[O], {
          active: !1,
          lastFieldState: void 0,
          modified: !1,
          touched: !1,
          valid: !0,
          validating: !1,
          visited: !1,
        })),
          _(void 0, function () {
            I(), Q();
          });
      },
      restart: function (O) {
        O === void 0 && (O = u.formState.initialValues),
          $.batch(function () {
            for (var L in u.fields)
              $.resetFieldState(L),
                (u.fields[L] = E({}, u.fields[L], {
                  active: !1,
                  lastFieldState: void 0,
                  modified: !1,
                  modifiedSinceLastSubmit: !1,
                  touched: !1,
                  valid: !0,
                  validating: !1,
                  visited: !1,
                }));
            $.reset(O);
          });
      },
      resumeValidation: function () {
        (f = !1),
          (b = !1),
          h &&
            _(void 0, function () {
              I(), Q();
            }),
          (h = !1);
      },
      setConfig: function (O, L) {
        switch (O) {
          case "debug":
            t = L;
            break;
          case "destroyOnUnregister":
            n = L;
            break;
          case "initialValues":
            $.initialize(L);
            break;
          case "keepDirtyOnReinitialize":
            r = L;
            break;
          case "mutators":
            (i = L),
              L
                ? (Object.keys(S).forEach(function (B) {
                    B in L || delete S[B];
                  }),
                  Object.keys(L).forEach(function (B) {
                    S[B] = v(B);
                  }))
                : Object.keys(S).forEach(function (B) {
                    delete S[B];
                  });
            break;
          case "onSubmit":
            a = L;
            break;
          case "validate":
            (s = L),
              _(void 0, function () {
                I(), Q();
              });
            break;
          case "validateOnBlur":
            l = L;
            break;
          default:
            throw new Error("Unrecognised option " + O);
        }
      },
      submit: function () {
        var O = u.formState;
        if (!O.submitting) {
          if (
            (delete O.submitErrors,
            delete O.submitError,
            (O.lastSubmittedValues = E({}, O.values)),
            H())
          ) {
            j(), F(), (u.formState.submitFailed = !0), Q(), I();
            return;
          }
          var L = Object.keys(x);
          if (L.length) {
            Promise.all(
              L.map(function (oe) {
                return x[Number(oe)];
              }),
            ).then($.submit, console.error);
            return;
          }
          var B = K();
          if (!B) {
            var W,
              X = !1,
              J = function (oe) {
                O.submitting = !1;
                var ce = O.resetWhileSubmitting;
                return (
                  ce && (O.resetWhileSubmitting = !1),
                  oe && xi(oe)
                    ? ((O.submitFailed = !0),
                      (O.submitSucceeded = !1),
                      (O.submitErrors = oe),
                      (O.submitError = oe[Tw]),
                      j())
                    : (ce || ((O.submitFailed = !1), (O.submitSucceeded = !0)),
                      z()),
                  Q(),
                  I(),
                  (X = !0),
                  W && W(oe),
                  oe
                );
              };
            (O.submitting = !0),
              (O.submitFailed = !1),
              (O.submitSucceeded = !1),
              (O.lastSubmittedValues = E({}, O.values)),
              F();
            var ae = a(O.values, $, J);
            if (!X) {
              if (ae && Oh(ae))
                return (
                  Q(),
                  I(),
                  ae.then(J, function (oe) {
                    throw (J(), oe);
                  })
                );
              if (a.length >= 3)
                return (
                  Q(),
                  I(),
                  new Promise(function (oe) {
                    W = oe;
                  })
                );
              J(ae);
            }
          }
        }
      },
      subscribe: function (O, L) {
        if (!O) throw new Error("No callback given.");
        if (!L)
          throw new Error(
            "No subscription provided. What values do you want to listen to?",
          );
        var B = $w(O),
          W = u.subscribers,
          X = W.index++;
        W.entries[X] = { subscriber: B, subscription: L, notified: !1 };
        var J = V();
        return (
          Mw(B, L, J, J, Iw, !0),
          function () {
            delete W.entries[X];
          }
        );
      },
    };
    return $;
  }
  var hI = ["render", "children", "component"];
  function Fw(e, t, n) {
    var r = e.render,
      o = e.children,
      i = e.component,
      a = re(e, hI);
    if (i)
      return k.createElement(
        i,
        Object.assign(t, a, { children: o, render: r }),
      );
    if (r)
      return r(
        o === void 0
          ? Object.assign(t, a)
          : Object.assign(t, a, { children: o }),
      );
    if (typeof o != "function")
      throw new Error(
        "Must specify either a render prop, a render function as children, or a component prop to " +
          n,
      );
    return o(Object.assign(t, a));
  }
  function Cr(e, t, n) {
    n === void 0 &&
      (n = function (o, i) {
        return o === i;
      });
    var r = fe.useRef(e);
    fe.useEffect(function () {
      n(e, r.current) || (t(), (r.current = e));
    });
  }
  function mI(e) {
    var t = fe.useRef();
    return t.current || (t.current = e()), t.current;
  }
  var Bw = function (e, t) {
      if (e === t) return !0;
      if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (
        var o = Object.prototype.hasOwnProperty.bind(t), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (!o(a) || e[a] !== t[a]) return !1;
      }
      return !0;
    },
    gI = function (e) {
      return !!(e && typeof e.stopPropagation == "function");
    },
    jw = k.createContext();
  function zw(e) {
    var t = fe.useRef(e);
    return (
      fe.useEffect(function () {
        t.current = e;
      }),
      t
    );
  }
  var vI = "6.5.8",
    Uw = function (e, t, n) {
      n.forEach(function (r) {
        Object.defineProperty(e, r, {
          get: function () {
            return t[r];
          },
          enumerable: !0,
        });
      });
    },
    yI = function (e, t) {
      return Uw(e, t, [
        "active",
        "dirty",
        "dirtyFields",
        "dirtySinceLastSubmit",
        "dirtyFieldsSinceLastSubmit",
        "error",
        "errors",
        "hasSubmitErrors",
        "hasValidationErrors",
        "initialValues",
        "invalid",
        "modified",
        "modifiedSinceLastSubmit",
        "pristine",
        "submitError",
        "submitErrors",
        "submitFailed",
        "submitSucceeded",
        "submitting",
        "touched",
        "valid",
        "validating",
        "values",
        "visited",
      ]);
    },
    bI = function (e, t) {
      return Uw(e, t, [
        "active",
        "data",
        "dirty",
        "dirtySinceLastSubmit",
        "error",
        "initial",
        "invalid",
        "length",
        "modified",
        "modifiedSinceLastSubmit",
        "pristine",
        "submitError",
        "submitFailed",
        "submitSucceeded",
        "submitting",
        "touched",
        "valid",
        "validating",
        "visited",
      ]);
    },
    wI = [
      "debug",
      "decorators",
      "destroyOnUnregister",
      "form",
      "initialValues",
      "initialValuesEqual",
      "keepDirtyOnReinitialize",
      "mutators",
      "onSubmit",
      "subscription",
      "validate",
      "validateOnBlur",
    ],
    SI = { "final-form": cI, "react-final-form": vI },
    xI = _w.reduce(function (e, t) {
      return (e[t] = !0), e;
    }, {});
  function kI(e) {
    var t = e.debug,
      n = e.decorators,
      r = n === void 0 ? [] : n,
      o = e.destroyOnUnregister,
      i = e.form,
      a = e.initialValues,
      s = e.initialValuesEqual,
      l = e.keepDirtyOnReinitialize,
      u = e.mutators,
      d = e.onSubmit,
      f = e.subscription,
      h = f === void 0 ? xI : f,
      b = e.validate,
      g = e.validateOnBlur,
      x = re(e, wI),
      R = {
        debug: t,
        destroyOnUnregister: o,
        initialValues: a,
        keepDirtyOnReinitialize: l,
        mutators: u,
        onSubmit: d,
        validate: b,
        validateOnBlur: g,
      },
      y = mI(function () {
        var _ = i || pI(R);
        return _.pauseValidation(), _;
      }),
      m = k.useState(function () {
        var _ = {};
        return (
          y.subscribe(function (I) {
            _ = I;
          }, h)(),
          _
        );
      }),
      v = m[0],
      S = m[1],
      C = zw(v);
    k.useEffect(function () {
      y.isValidationPaused() && y.resumeValidation();
      var _ = [
        y.subscribe(function (I) {
          Bw(I, C.current) || S(I);
        }, h),
      ].concat(
        r
          ? r.map(function (I) {
              return I(y);
            })
          : [],
      );
      return function () {
        y.pauseValidation(),
          _.reverse().forEach(function (I) {
            return I();
          });
      };
    }, r),
      Cr(t, function () {
        y.setConfig("debug", t);
      }),
      Cr(o, function () {
        y.destroyOnUnregister = !!o;
      }),
      Cr(l, function () {
        y.setConfig("keepDirtyOnReinitialize", l);
      }),
      Cr(
        a,
        function () {
          y.setConfig("initialValues", a);
        },
        s || Bw,
      ),
      Cr(u, function () {
        y.setConfig("mutators", u);
      }),
      Cr(d, function () {
        y.setConfig("onSubmit", d);
      }),
      Cr(b, function () {
        y.setConfig("validate", b);
      }),
      Cr(g, function () {
        y.setConfig("validateOnBlur", g);
      });
    var N = function (_) {
        return (
          _ &&
            (typeof _.preventDefault == "function" && _.preventDefault(),
            typeof _.stopPropagation == "function" && _.stopPropagation()),
          y.submit()
        );
      },
      T = {
        form: E({}, y, {
          reset: function (_) {
            gI(_) ? y.reset() : y.reset(_);
          },
        }),
        handleSubmit: N,
      };
    return (
      yI(T, v),
      k.createElement(
        jw.Provider,
        { value: y },
        Fw(E({}, x, { __versions: SI }), T, "ReactFinalForm"),
      )
    );
  }
  function EI(e) {
    var t = k.useContext(jw);
    if (!t)
      throw new Error(
        (e || "useForm") + " must be used inside of a <Form> component",
      );
    return t;
  }
  var CI =
      typeof window < "u" &&
      window.navigator &&
      window.navigator.product &&
      window.navigator.product === "ReactNative",
    OI = function (e) {
      var t = [];
      if (e)
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.selected && t.push(r.value);
        }
      return t;
    },
    NI = function (e, t, n, r) {
      if (
        (!r && e.nativeEvent && e.nativeEvent.text !== void 0) ||
        (r && e.nativeEvent)
      )
        return e.nativeEvent.text;
      var o = e,
        i = o.target,
        a = i.type,
        s = i.value,
        l = i.checked;
      switch (a) {
        case "checkbox":
          if (n !== void 0) {
            if (l) return Array.isArray(t) ? t.concat(n) : [n];
            if (!Array.isArray(t)) return t;
            var u = t.indexOf(n);
            return u < 0 ? t : t.slice(0, u).concat(t.slice(u + 1));
          } else return !!l;
        case "select-multiple":
          return OI(e.target.options);
        default:
          return s;
      }
    };
  function Nh(e) {
    var t = k.useRef(e);
    return (
      k.useEffect(function () {
        t.current = e;
      }),
      k.useCallback(function () {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return t.current.apply(null, r);
      }, [])
    );
  }
  var TI = Rw.reduce(function (e, t) {
      return (e[t] = !0), e;
    }, {}),
    Th = function (e, t) {
      return e === void 0 ? "" : e;
    },
    AI = function (e, t) {
      return e === "" ? void 0 : e;
    },
    RI = function (e, t) {
      return e === t;
    };
  function PI(e, t) {
    t === void 0 && (t = {});
    var n = t,
      r = n.afterSubmit,
      o = n.allowNull,
      i = n.component,
      a = n.data,
      s = n.defaultValue,
      l = n.format,
      u = l === void 0 ? Th : l,
      d = n.formatOnBlur,
      f = n.initialValue,
      h = n.multiple,
      b = n.parse,
      g = b === void 0 ? AI : b,
      x = n.subscription,
      R = x === void 0 ? TI : x,
      y = n.type,
      m = n.validateFields,
      v = n.value,
      S = EI("useField"),
      C = zw(t),
      N = function (D, Y) {
        return S.registerField(e, D, R, {
          afterSubmit: r,
          beforeSubmit: function () {
            var Q = C.current,
              K = Q.beforeSubmit,
              z = Q.formatOnBlur,
              F = Q.format,
              $ = F === void 0 ? Th : F;
            if (z) {
              var O = S.getFieldState(e),
                L = O.value,
                B = $(L, e);
              B !== L && S.change(e, B);
            }
            return K && K();
          },
          data: a,
          defaultValue: s,
          getValidator: function () {
            return C.current.validate;
          },
          initialValue: f,
          isEqual: function (Q, K) {
            return (C.current.isEqual || RI)(Q, K);
          },
          silent: Y,
          validateFields: m,
        });
      },
      T = k.useRef(!0),
      _ = k.useState(function () {
        var D = {},
          Y = S.destroyOnUnregister;
        return (
          (S.destroyOnUnregister = !1),
          N(function (Q) {
            D = Q;
          }, !0)(),
          (S.destroyOnUnregister = Y),
          D
        );
      }),
      I = _[0],
      j = _[1];
    k.useEffect(
      function () {
        return N(function (D) {
          T.current ? (T.current = !1) : j(D);
        }, !1);
      },
      [e, a, s, f],
    );
    var H = {};
    bI(H, I);
    var V = {
      name: e,
      get value() {
        var D = I.value;
        return (
          d ? i === "input" && (D = Th(D)) : (D = u(D, e)),
          D === null && !o && (D = ""),
          y === "checkbox" || y === "radio"
            ? v
            : i === "select" && h
            ? D || []
            : D
        );
      },
      get checked() {
        var D = I.value;
        if (y === "checkbox")
          return (
            (D = u(D, e)),
            v === void 0 ? !!D : !!(Array.isArray(D) && ~D.indexOf(v))
          );
        if (y === "radio") return u(D, e) === v;
      },
      onBlur: Nh(function (D) {
        if ((I.blur(), d)) {
          var Y = S.getFieldState(I.name);
          I.change(u(Y.value, I.name));
        }
      }),
      onChange: Nh(function (D) {
        var Y = D && D.target ? NI(D, I.value, v, CI) : D;
        I.change(g(Y, e));
      }),
      onFocus: Nh(function (D) {
        return I.focus();
      }),
    };
    h && (V.multiple = h), y !== void 0 && (V.type = y);
    var Z = { input: V, meta: H };
    return Z;
  }
  var _I = [
      "afterSubmit",
      "allowNull",
      "beforeSubmit",
      "children",
      "component",
      "data",
      "defaultValue",
      "format",
      "formatOnBlur",
      "initialValue",
      "isEqual",
      "multiple",
      "name",
      "parse",
      "subscription",
      "type",
      "validate",
      "validateFields",
      "value",
    ],
    lo = k.forwardRef(function (e, t) {
      var n = e.afterSubmit,
        r = e.allowNull,
        o = e.beforeSubmit,
        i = e.children,
        a = e.component,
        s = e.data,
        l = e.defaultValue,
        u = e.format,
        d = e.formatOnBlur,
        f = e.initialValue,
        h = e.isEqual,
        b = e.multiple,
        g = e.name,
        x = e.parse,
        R = e.subscription,
        y = e.type,
        m = e.validate,
        v = e.validateFields,
        S = e.value,
        C = re(e, _I),
        N = PI(g, {
          afterSubmit: n,
          allowNull: r,
          beforeSubmit: o,
          children: i,
          component: a,
          data: s,
          defaultValue: l,
          format: u,
          formatOnBlur: d,
          initialValue: f,
          isEqual: h,
          multiple: b,
          parse: x,
          subscription: R,
          type: y,
          validate: m,
          validateFields: v,
          value: S,
        });
      if (typeof i == "function") return i(E({}, N, C));
      if (typeof a == "string")
        return k.createElement(a, E({}, N.input, { children: i, ref: t }, C));
      if (!g)
        throw new Error("prop name cannot be undefined in <Field> component");
      return Fw(
        E({ children: i, component: a, ref: t }, C),
        N,
        "Field(" + g + ")",
      );
    });
  function II() {
    const e = (r) => new Promise((o) => setTimeout(o, r)),
      t = async (r) => {
        await e(300), window.alert(JSON.stringify(r, 0, 2));
      },
      n = (r) => (r ? void 0 : "Required");
    return A("div", {
      children: de(Q_, {
        children: [
          A("h1", { children: "React Final Form" }),
          A(wp, {
            children: A(
              ({ subscription: r }) =>
                A(kI, {
                  onSubmit: t,
                  subscription: r,
                  render: ({
                    handleSubmit: o,
                    form: i,
                    submitting: a,
                    pristine: s,
                    values: l,
                  }) =>
                    de("form", {
                      onSubmit: o,
                      children: [
                        A(lo, {
                          name: "title",
                          validate: n,
                          children: ({ input: u, meta: d }) =>
                            de("div", {
                              children: [
                                A("label", { children: "Subtitulo" }),
                                A("input", { ...u, placeholder: "Subtitulo" }),
                                d.touched &&
                                  d.error &&
                                  A("span", { children: d.error }),
                              ],
                            }),
                        }),
                        A(lo, {
                          name: "whatIs",
                          validate: n,
                          children: ({ input: u, meta: d }) =>
                            de("div", {
                              children: [
                                A("label", { children: "Que es telehuertos" }),
                                A("input", {
                                  ...u,
                                  placeholder: "Que es telehuertos",
                                }),
                                d.touched &&
                                  d.error &&
                                  A("span", { children: d.error }),
                              ],
                            }),
                        }),
                        A(lo, {
                          name: "howToMake",
                          validate: n,
                          children: ({ input: u, meta: d }) =>
                            de("div", {
                              children: [
                                A("label", {
                                  children: "Como hacer telehuertos",
                                }),
                                A("input", {
                                  ...u,
                                  placeholder: "Como hacer telehuertos",
                                }),
                                d.touched &&
                                  d.error &&
                                  A("span", { children: d.error }),
                              ],
                            }),
                        }),
                        A(lo, {
                          name: "meetingTime",
                          validate: n,
                          children: ({ input: u, meta: d }) =>
                            de("div", {
                              children: [
                                A("label", { children: "Horarios" }),
                                A("input", { ...u, placeholder: "Horarios" }),
                                d.touched &&
                                  d.error &&
                                  A("span", { children: d.error }),
                              ],
                            }),
                        }),
                        A(lo, {
                          name: "escuela",
                          validate: n,
                          children: ({ input: u, meta: d }) =>
                            de("div", {
                              children: [
                                A("label", {
                                  children: "Ense\xF1ar de Teleturismo",
                                }),
                                A("input", {
                                  ...u,
                                  placeholder: "Ense\xF1ar de Teleturismo",
                                }),
                                d.touched &&
                                  d.error &&
                                  A("span", { children: d.error }),
                              ],
                            }),
                        }),
                        A(lo, {
                          name: "videoTutorial",
                          validate: n,
                          children: ({ input: u, meta: d }) =>
                            de("div", {
                              children: [
                                A("label", {
                                  children: "Tutorial de video link",
                                }),
                                A("input", {
                                  ...u,
                                  placeholder: "Tutorial de video link",
                                }),
                                d.touched &&
                                  d.error &&
                                  A("span", { children: d.error }),
                              ],
                            }),
                        }),
                        A(lo, {
                          name: "gallery",
                          validate: n,
                          children: ({ input: u, meta: d }) =>
                            de("div", {
                              children: [
                                A("label", { children: "galeria de fotos" }),
                                A("input", {
                                  ...u,
                                  placeholder: "galeria de fotos",
                                }),
                                d.touched &&
                                  d.error &&
                                  A("span", { children: d.error }),
                              ],
                            }),
                        }),
                        de("div", {
                          className: "buttons",
                          children: [
                            A("button", {
                              type: "submit",
                              disabled: a,
                              children: "Submit",
                            }),
                            A("button", {
                              type: "button",
                              onClick: () => {
                                i.reset();
                              },
                              disabled: a || s,
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    }),
                }),
              { subscription: { submitting: !0, pristine: !0 } },
            ),
          }),
        ],
      }),
    });
  }
  var Ah = {},
    $I = pi;
  Object.defineProperty(Ah, "__esModule", { value: !0 });
  var Dw = (Ah.default = void 0),
    MI = $I(Wu()),
    LI = Vu,
    FI = (0, MI.default)(
      (0, LI.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
      "Add",
    );
  Dw = Ah.default = FI;
  const lc = () => {},
    BI = { onInsert: lc, onUpdate: lc, onReplace: lc, onDelete: lc };
  function jI(e, t) {
    const n = fe.useMemo(() => ({}), []),
      r = { ...BI, ...t },
      o = fe.useRef(r);
    fe.useEffect(() => {
      o.current = {
        onInsert: r.onInsert,
        onUpdate: r.onUpdate,
        onReplace: r.onReplace,
        onDelete: r.onDelete,
      };
    }, [r.onInsert, r.onUpdate, r.onReplace, r.onDelete]),
      fe.useEffect(() => {
        let i;
        return (
          (async () => {
            i = e.watch({ filter: n });
            for await (const a of i)
              switch (a.operationType) {
                case "insert": {
                  o.current.onInsert(a);
                  break;
                }
                case "update": {
                  o.current.onUpdate(a);
                  break;
                }
                case "replace": {
                  o.current.onReplace(a);
                  break;
                }
                case "delete": {
                  o.current.onDelete(a);
                  break;
                }
                default:
                  throw new Error(
                    `Invalid change operation type: ${a.operationType}`,
                  );
              }
          })(),
          () => {
            i == null || i.return();
          }
        );
      }, [e, n]);
  }
  function zI({ cluster: e = "mongodb-atlas", db: t, collection: n }) {
    const r = fi();
    return fe.useMemo(
      () => r.currentUser.mongoClient(e).db(t).collection(n),
      [r.currentUser, e, t, n],
    );
  }
  const { dataSourceName: UI } = th;
  function DI() {
    const e = fi(),
      [t, n] = fe.useState([]),
      [r, o] = fe.useState(!0);
    vl();
    const i = window.env.REACT_APP_NAME,
      a = window.env.REACT_APP_PROJECTS.find((d) => d.name === i);
    if (!a) {
      console.error(`Metadata not found for project: ${i}`);
      return;
    }
    const { db: s, collection: l } = a;
    let u;
    try {
      u = zI({ cluster: UI, db: s, collection: l });
    } catch (d) {
      console.error("Error while creating the collection:", d),
        (u = null),
        Navigate("/");
    }
    return (
      fe.useEffect(() => {
        let d = !0;
        const f = u.find({});
        return (
          d &&
            f.then((h) => {
              n(h), o(!1);
            }),
          () => {
            d = !1;
          }
        );
      }, [u]),
      jI(u, {
        onInsert: (d) => {
          n((f) => {
            if (r) return f;
            const h = Gu(f, d.fullDocument) ?? f.length;
            return h === f.length ? NP(f, h, d.fullDocument) : f;
          });
        },
        onUpdate: (d) => {
          n((f) => {
            if (r) return f;
            const h = Gu(f, d.fullDocument);
            return AP(f, h, () => d.fullDocument);
          });
        },
        onReplace: (d) => {
          n((f) => {
            if (r) return f;
            const h = Gu(f, d.fullDocument);
            return TP(f, h, d.fullDocument);
          });
        },
        onDelete: (d) => {
          n((f) => {
            if (r) return f;
            const h = Gu(f, { _id: d.documentKey._id });
            return h >= 0 ? RP(f, h) : f;
          });
        },
      }),
      {
        loading: r,
        todos: t,
        saveTodo: async (d) => {
          if (d.data.summary && d.data.price) {
            (d.data.owner_id = e.currentUser.id), (d.data.isComplete = !1);
            try {
              console.log(d), await u.insertOne(d.data);
            } catch (f) {
              f.error.match(/^Duplicate key error/) &&
                console.warn(
                  "The following error means that this app tried to insert a todo multiple times (i.e. an existing todo has the same _id). In this app we just catch the error and move on. In your app, you might want to debounce the save input or implement an additional loading state to avoid sending the request in the first place.",
                ),
                console.error(f);
            }
          }
        },
        toggleTodo: async (d) => {
          await u.updateOne(
            { _id: d._id },
            { $set: { isComplete: !d.isComplete } },
          );
        },
        deleteTodo: async (d) => {
          await u.deleteOne({ _id: d._id });
        },
      }
    );
  }
  var Rh = {},
    WI = pi;
  Object.defineProperty(Rh, "__esModule", { value: !0 });
  var Ph = (Rh.default = void 0),
    VI = WI(Wu()),
    HI = Vu,
    qI = (0, VI.default)(
      (0, HI.jsx)("path", {
        d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Clear",
    );
  Ph = Rh.default = qI;
  function GI({ todo: e, todoActions: t }) {
    return de(rb, {
      children: [
        A(GT, {
          children: A(iN, {
            "data-testid": "todo-checkbox",
            edge: "start",
            color: "primary",
            checked: e.isComplete,
            onClick: () => {
              t.toggleTodo(e);
            },
          }),
        }),
        A(Cu, { children: e.summary }),
        A(Cu, { children: e.price }),
        A(Ep, {
          children: A(gu, {
            "data-testid": "todo-delete-button",
            edge: "end",
            size: "small",
            onClick: () => {
              t.deleteTodo(e);
            },
            children: A(Ph, {}),
          }),
        }),
      ],
    });
  }
  function KI() {
    const [e, t] = fe.useState([]);
    return {
      draftTodos: e,
      createDraftTodo: () => {
        const n = {
          data: { summary: "", price: 0, isComplete: !1, owner_id: "" },
        };
        t((r) => [...r, n]);
      },
      setDraftTodoSummary: (n, r) => {
        const o = { summary: r, price: n.data.price };
        t((i) => {
          const a = i.findIndex((s) => s._id === n._id);
          return (
            console.log([
              ...i.slice(0, a),
              { ...i[a], data: o },
              ...i.slice(a + 1),
            ]),
            [...i.slice(0, a), { ...i[a], data: o }, ...i.slice(a + 1)]
          );
        });
      },
      deleteDraftTodo: (n) => {
        t((r) => {
          const o = r.findIndex((i) => i._id === n._id);
          return [...r.slice(0, o), ...r.slice(o + 1)];
        });
      },
      setDraftTodoPrice: (n, r) => {
        const o = { summary: n.data.summary, price: r };
        t((i) => {
          const a = i.findIndex((s) => s._id === n._id);
          return [...i.slice(0, a), { ...i[a], data: o }, ...i.slice(a + 1)];
        });
      },
    };
  }
  const YI = Object.fromEntries
    ? Object.fromEntries
    : (e) => {
        if (!e || !e[Symbol.iterator])
          throw new Error(
            "Object.fromEntries() requires a single iterable argument",
          );
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            const [r, o] = e[n];
            t[r] = o;
          }),
          t
        );
      };
  function uc(e) {
    return Object.keys(e);
  }
  function Ww(e, t) {
    if (!e) throw new Error(t);
  }
  function Vw(e, t) {
    return t;
  }
  const _h = (e) => {
    const t = e.length;
    let n = 0,
      r = "";
    for (; n < t; n++) {
      const o = e[n];
      if (o == null) continue;
      let i;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o)) i = _h(o);
          else {
            Ww(!Vw(o, !1)), (i = "");
            for (const a in o) o[a] && a && (i && (i += " "), (i += a));
          }
          break;
        }
        default:
          i = o;
      }
      i && (r && (r += " "), (r += i));
    }
    return r;
  };
  function XI(e, t) {
    const n = k.useRef();
    return (
      (!n.current ||
        t.length !== n.current.prevDeps.length ||
        n.current.prevDeps.map((r, o) => r === t[o]).indexOf(!1) >= 0) &&
        (n.current = { v: e(), prevDeps: [...t] }),
      n.current.v
    );
  }
  function ZI(e) {
    return (
      e instanceof Object &&
      !("styles" in e) &&
      !("length" in e) &&
      !("__emotion_styles" in e)
    );
  }
  const { createCssAndCx: QI } = (() => {
    function e(n, r, o) {
      const i = [],
        a = Wv(n, i, o);
      return i.length < 2 ? o : a + r(i);
    }
    function t(n) {
      const { cache: r } = n,
        o = (...i) => {
          const a = Yl(i, r.registered);
          Kf(r, a, !1);
          const s = `${r.key}-${a.name}`;
          e: {
            const l = i[0];
            if (!ZI(l)) break e;
            Hw.saveClassNameCSSObjectMapping(r, s, l);
          }
          return s;
        };
      return {
        css: o,
        cx: (...i) => {
          const a = _h(i),
            s = Hw.fixClassName(r, a, o);
          return e(r.registered, o, s);
        },
      };
    }
    return { createCssAndCx: t };
  })();
  function JI(e) {
    const { useCache: t } = e;
    function n() {
      const r = t(),
        { css: o, cx: i } = XI(() => QI({ cache: r }), [r]);
      return { css: o, cx: i };
    }
    return { useCssAndCx: n };
  }
  const Hw = (() => {
    const e = new WeakMap();
    return {
      saveClassNameCSSObjectMapping: (t, n, r) => {
        let o = e.get(t);
        o === void 0 && ((o = new Map()), e.set(t, o)), o.set(n, r);
      },
      fixClassName: (() => {
        function t(n) {
          let r = !1;
          return n.map(([o, i]) => {
            if (i === void 0) return o;
            let a;
            if (r) a = { "&&": i };
            else {
              a = o;
              for (const s in i)
                if (s.startsWith("@media")) {
                  r = !0;
                  break;
                }
            }
            return a;
          });
        }
        return (n, r, o) => {
          const i = e.get(n);
          return _h(
            t(r.split(" ").map((a) => [a, i == null ? void 0 : i.get(a)])).map(
              (a) => (typeof a == "string" ? a : o(a)),
            ),
          );
        };
      })(),
    };
  })();
  function cc(e) {
    if (!(e instanceof Object) || typeof e == "function") return e;
    const t = [];
    for (const n in e) {
      const r = e[n],
        o = typeof r;
      if (
        !(
          o === "string" ||
          (o === "number" && !isNaN(r)) ||
          o === "boolean" ||
          r === void 0 ||
          r === null
        )
      )
        return e;
      t.push(`${n}:${o}_${r}`);
    }
    return "xSqLiJdLMd9s" + t.join("|");
  }
  function qw(e, t, n) {
    if (!(t instanceof Object)) return e;
    const r = {};
    return (
      uc(e).forEach((o) => (r[o] = n(e[o], t[o]))),
      uc(t).forEach((o) => {
        if (o in e) return;
        const i = t[o];
        typeof i == "string" && (r[o] = i);
      }),
      r
    );
  }
  let e$ = 0;
  function Gw(e) {
    const { useTheme: t, cache: n } = e;
    function r() {
      var s;
      const l = BE(),
        u = n$(),
        d = (s = n ?? u) !== null && s !== void 0 ? s : l;
      if (d === null)
        throw new Error(
          [
            "In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.",
            "MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,",
            "MUI needs an Emotion cache to be provided for SSR to work.",
            "Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/",
            "TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr",
          ].join(`
`),
        );
      return d;
    }
    const { useCssAndCx: o } = JI({ useCache: r });
    function i(s) {
      const { name: l, uniqId: u = e$++ } = s ?? {},
        d = typeof l != "object" ? l : Object.keys(l)[0];
      return function (f) {
        const h = typeof f == "function" ? f : () => f;
        return function (b, g) {
          var x, R;
          const y = t(),
            { css: m, cx: v } = o(),
            S = r();
          let C = k.useMemo(() => {
            const T = {},
              _ =
                typeof Proxy < "u" &&
                new Proxy(
                  {},
                  {
                    get: (H, V) => (
                      typeof V == "symbol" && Ww(!1),
                      (T[V] = `${S.key}-${u}${
                        d !== void 0 ? `-${d}` : ""
                      }-${V}-ref`)
                    ),
                  },
                ),
              I = h(y, b, _ || {}),
              j = YI(
                uc(I).map((H) => {
                  const V = I[H];
                  return (
                    V.label || (V.label = `${d !== void 0 ? `${d}-` : ""}${H}`),
                    [H, `${m(V)}${Vw(H, H in T) ? ` ${T[H]}` : ""}`]
                  );
                }),
              );
            return (
              uc(T).forEach((H) => {
                H in j || (j[H] = T[H]);
              }),
              j
            );
          }, [S, m, v, y, cc(b)]);
          const N = g == null ? void 0 : g.props.classes;
          C = k.useMemo(() => qw(C, N, v), [C, cc(N), v]);
          {
            let T;
            try {
              T =
                d !== void 0
                  ? (R =
                      (x = y.components) === null || x === void 0
                        ? void 0
                        : x[d]) === null || R === void 0
                    ? void 0
                    : R.styleOverrides
                  : void 0;
            } catch {}
            const _ = k.useMemo(() => {
              if (!T) return;
              const I = {};
              for (const j in T) {
                const H = T[j];
                H instanceof Object &&
                  (I[j] = m(
                    typeof H == "function"
                      ? H(
                          Object.assign(
                            {
                              theme: y,
                              ownerState: g == null ? void 0 : g.ownerState,
                            },
                            g == null ? void 0 : g.props,
                          ),
                        )
                      : H,
                  ));
              }
              return I;
            }, [
              T === void 0 ? void 0 : JSON.stringify(T),
              cc(g == null ? void 0 : g.props),
              cc(g == null ? void 0 : g.ownerState),
              m,
            ]);
            C = k.useMemo(() => qw(C, _, v), [C, _, v]);
          }
          return { classes: C, theme: y, css: m, cx: v };
        };
      };
    }
    function a() {
      const s = t(),
        { css: l, cx: u } = o();
      return { theme: s, css: l, cx: u };
    }
    return { makeStyles: i, useStyles: a };
  }
  const t$ = k.createContext(void 0);
  function n$() {
    return k.useContext(t$);
  }
  function Kw(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var Yw =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
  function r$(e) {
    const { useTheme: t, cache: n } = e,
      { makeStyles: r } = Gw({ useTheme: t, cache: n });
    function o(i, a, s) {
      const l =
          typeof i == "string"
            ? (() => {
                const b = i,
                  g = function (x) {
                    var { children: R } = x,
                      y = Yw(x, ["children"]);
                    return k.createElement(b, y, R);
                  };
                return Object.defineProperty(g, "name", { value: Kw(b) }), g;
              })()
            : i,
        u = (() => {
          {
            const { name: b } = s ?? {};
            if (b !== void 0)
              return typeof b != "object" ? b : Object.keys(b)[0];
          }
          {
            const b = l.displayName;
            if (typeof b == "string" && b !== "") return b;
          }
          {
            const { name: b } = l;
            if (b) return b;
          }
        })(),
        d = r(Object.assign(Object.assign({}, s), { name: u }))(
          typeof a == "function" ? (b, g, x) => Xw(a(b, g, x)) : Xw(a),
        );
      function f(b) {
        for (const g in b) if (g !== "root") return !0;
        return !1;
      }
      const h = k.forwardRef(function (b, g) {
        const { className: x, classes: R } = b,
          y = Yw(b, ["className", "classes"]),
          { classes: m, cx: v } = d(b, { props: b });
        return fe.createElement(
          l,
          Object.assign(
            { ref: g, className: f(m) ? x : v(m.root, x) },
            typeof i == "string" ? {} : { classes: m },
            y,
          ),
        );
      });
      return (
        u !== void 0 &&
          ((h.displayName = `${Kw(u)}WithStyles`),
          Object.defineProperty(h, "name", { value: h.displayName })),
        h
      );
    }
    return { withStyles: o };
  }
  function Xw(e) {
    const t = {},
      n = {};
    return (
      Object.keys(e).forEach(
        (r) => ((r.startsWith("@media") ? n : t)[r] = e[r]),
      ),
      Object.keys(n).forEach((r) => {
        const o = n[r];
        Object.keys(o).forEach((i) => {
          var a;
          return (t[i] = Object.assign(
            Object.assign({}, (a = t[i]) !== null && a !== void 0 ? a : {}),
            { [r]: o[i] },
          ));
        });
      }),
      t
    );
  }
  function o$(e) {
    return Object.assign(Object.assign({}, Gw(e)), r$(e));
  }
  const {
      makeStyles: E$,
      withStyles: i$,
      useStyles: C$,
    } = o$({ useTheme: Na }),
    a$ = i$(rb, { secondaryAction: { paddingRight: "120px" } });
  function s$({ todo: e, todoActions: t, draftTodoActions: n }) {
    return de(a$, {
      children: [
        A(Cu, {
          inset: !0,
          children: A(Nu, {
            style: { width: "100%" },
            placeholder: "Ingresar evento?",
            size: "small",
            value: e.data.summary,
            onChange: (r) => {
              n.setDraftTodoSummary(e, r.target.value);
            },
          }),
        }),
        A(Cu, {
          inset: !0,
          children: A(Nu, {
            style: { width: "100%" },
            placeholder: "Cuanto ocupamos?",
            size: "small",
            value: e.data.price,
            onChange: (r) => {
              n.setDraftTodoPrice(e, r.target.value);
            },
          }),
        }),
        de(Ep, {
          children: [
            A(Eu, {
              variant: "outlined",
              size: "small",
              onClick: async () => {
                await t.saveTodo(e), n.deleteDraftTodo(e);
              },
              children: "Save",
            }),
            A(gu, {
              edge: "end",
              size: "small",
              onClick: () => {
                n.deleteDraftTodo(e);
              },
              children: A(Ph, {}),
            }),
          ],
        }),
      ],
    });
  }
  function l$(e, t) {
    fe.useEffect(() => {
      const n = setTimeout(() => {
        e();
      }, t);
      return () => clearTimeout(n);
    }, [e, t]);
  }
  function u$(e, t) {
    const [n, r] = fe.useState(!1);
    return (
      l$(() => {
        e && r(!0);
      }, [t]),
      fe.useEffect(() => {
        e || r(!1);
      }, [e]),
      n
    );
  }
  function c$() {
    const { loading: e, todos: t, ...n } = DI(),
      { draftTodos: r, ...o } = KI();
    return (
      u$(e, 200),
      de("div", {
        className: "todo-items-container",
        children: [
          A(on, {
            component: "p",
            variant: "h5",
            children: `You have ${t.length} To-Do Item${
              t.length === 1 ? "" : "s"
            }`,
          }),
          A(Eu, {
            variant: "contained",
            color: "primary",
            startIcon: A(Dw, {}),
            onClick: () => o.createDraftTodo(),
            children: "Add To-Do",
          }),
          de(tb, {
            style: { width: "100%" },
            children: [
              t.map((i) => A(GI, { todo: i, todoActions: n }, qu(i))),
              r.map((i) =>
                A(s$, { todo: i, todoActions: n, draftTodoActions: o }, qu(i)),
              ),
            ],
          }),
        ],
      })
    );
  }
  function d$({ project: e }) {
    const t = vl(),
      { currentUser: n, logOut: r } = fi();
    return (
      n || t("/"),
      A(Gh, {
        children: n
          ? A(wp, {
              className: "main-container",
              maxWidth: "sm",
              children: (() => {
                switch (e) {
                  case "caja-chica":
                    return A(c$, {});
                  case "telehuertos":
                    return A(II, {});
                  case "teleejemplo":
                    return null;
                  default:
                    return null;
                }
              })(),
            })
          : t("/"),
      })
    );
  }
  const Zw = {
      green: { ...Hr, 500: "#09804C", A400: "#B9EACD" },
      purple: { ...Wr, 500: "#6200EE", A400: "#9795F9" },
      orange: Vo,
      red: Dr,
      blue: Vr,
    },
    f$ = { palette: { primary: Zw.green, secondary: Zw.green } },
    p$ = uu(f$);
  function h$({ children: e }) {
    return A(KE, {
      injectFirst: !0,
      children: A(my, { theme: p$, children: e }),
    });
  }
  function m$() {
    return A(on, {
      className: "app-bar-title",
      component: "h1",
      variant: "h5",
      children:
        window.env && window.env.REACT_APP_NAME
          ? window.env.REACT_APP_NAME
          : "App Name",
    });
  }
  const { appId: g$ } = th;
  function v$() {
    return A(wk, {
      children: A(h$, { children: A(gP, { appId: g$, children: A(y$, {}) }) }),
    });
  }
  function y$() {
    const { currentUser: e, logOut: t } = fi(),
      n = vl();
    return de("div", {
      className: "App",
      children: [
        e &&
          A(YO, {
            position: "sticky",
            children: de(aR, {
              children: [
                A(m$, {}),
                A(Eu, {
                  variant: "contained",
                  color: "secondary",
                  onClick: async () => {
                    await t(), n("/");
                  },
                  children: A(on, { variant: "button", children: "Log Out" }),
                }),
              ],
            }),
          }),
        de(yk, {
          children: [
            A(Af, { path: "/", element: A(GP, {}) }),
            A(Af, {
              path: "/admin",
              element: A(d$, { project: window.env.REACT_APP_NAME }),
            }),
          ],
        }),
      ],
    });
  }
  const b$ = "modulepreload",
    w$ = function (e) {
      return "/" + e;
    },
    Qw = {},
    S$ = function (e, t, n) {
      if (!t || t.length === 0) return e();
      const r = document.getElementsByTagName("link");
      return Promise.all(
        t.map((o) => {
          if (((o = w$(o)), o in Qw)) return;
          Qw[o] = !0;
          const i = o.endsWith(".css"),
            a = i ? '[rel="stylesheet"]' : "";
          if (n)
            for (let l = r.length - 1; l >= 0; l--) {
              const u = r[l];
              if (u.href === o && (!i || u.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${a}`)) return;
          const s = document.createElement("link");
          if (
            ((s.rel = i ? "stylesheet" : b$),
            i || ((s.as = "script"), (s.crossOrigin = "")),
            (s.href = o),
            document.head.appendChild(s),
            i)
          )
            return new Promise((l, u) => {
              s.addEventListener("load", l),
                s.addEventListener("error", () =>
                  u(new Error(`Unable to preload CSS for ${o}`)),
                );
            });
        }),
      ).then(() => e());
    },
    x$ = (e) => {
      e &&
        e instanceof Function &&
        S$(() => import("./web-vitals-7b71ae84.js"), []).then(
          ({ getCLS: t, getFID: n, getFCP: r, getLCP: o, getTTFB: i }) => {
            t(e), n(e), r(e), o(e), i(e);
          },
        );
    };
  ev(document.getElementById("root")).render(
    A(fe.StrictMode, { children: A(v$, {}) }),
  ),
    x$();
})();
