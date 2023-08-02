(async () => {
  function lv(e, t) {
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
  function Xf(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function Zf(e) {
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
  var Vo = {},
    uv = {
      get exports() {
        return Vo;
      },
      set exports(e) {
        Vo = e;
      },
    },
    ua = {},
    E = {},
    cv = {
      get exports() {
        return E;
      },
      set exports(e) {
        E = e;
      },
    },
    le = {},
    Ho = Symbol.for("react.element"),
    dv = Symbol.for("react.portal"),
    fv = Symbol.for("react.fragment"),
    pv = Symbol.for("react.strict_mode"),
    hv = Symbol.for("react.profiler"),
    mv = Symbol.for("react.provider"),
    gv = Symbol.for("react.context"),
    yv = Symbol.for("react.forward_ref"),
    bv = Symbol.for("react.suspense"),
    vv = Symbol.for("react.memo"),
    wv = Symbol.for("react.lazy"),
    ep = Symbol.iterator;
  function xv(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ep && e[ep]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var tp = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    np = Object.assign,
    rp = {};
  function Ur(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = rp),
      (this.updater = n || tp);
  }
  (Ur.prototype.isReactComponent = {}),
    (Ur.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (Ur.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  function op() {}
  op.prototype = Ur.prototype;
  function ru(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = rp),
      (this.updater = n || tp);
  }
  var ou = (ru.prototype = new op());
  (ou.constructor = ru), np(ou, Ur.prototype), (ou.isPureReactComponent = !0);
  var ip = Array.isArray,
    ap = Object.prototype.hasOwnProperty,
    iu = { current: null },
    sp = { key: !0, ref: !0, __self: !0, __source: !0 };
  function lp(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        ap.call(t, r) && !sp.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
      for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
      o.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
    return {
      $$typeof: Ho,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: iu.current,
    };
  }
  function Sv(e, t) {
    return {
      $$typeof: Ho,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function au(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ho;
  }
  function kv(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var up = /\/+/g;
  function su(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? kv("" + e.key)
      : t.toString(36);
  }
  function ca(e, t, n, r, o) {
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
            case Ho:
            case dv:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (o = o(a)),
        (e = r === "" ? "." + su(a, 0) : r),
        ip(o)
          ? ((n = ""),
            e != null && (n = e.replace(up, "$&/") + "/"),
            ca(o, t, n, "", function (c) {
              return c;
            }))
          : o != null &&
            (au(o) &&
              (o = Sv(
                o,
                n +
                  (!o.key || (a && a.key === o.key)
                    ? ""
                    : ("" + o.key).replace(up, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((a = 0), (r = r === "" ? "." : r + ":"), ip(e)))
      for (var s = 0; s < e.length; s++) {
        i = e[s];
        var l = r + su(i, s);
        a += ca(i, t, n, l, o);
      }
    else if (((l = xv(e)), typeof l == "function"))
      for (e = l.call(e), s = 0; !(i = e.next()).done; )
        (i = i.value), (l = r + su(i, s++)), (a += ca(i, t, n, l, o));
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
  function da(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      ca(e, r, "", "", function (i) {
        return t.call(n, i, o++);
      }),
      r
    );
  }
  function Ev(e) {
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
  var ht = { current: null },
    fa = { transition: null },
    Cv = {
      ReactCurrentDispatcher: ht,
      ReactCurrentBatchConfig: fa,
      ReactCurrentOwner: iu,
    };
  (le.Children = {
    map: da,
    forEach: function (e, t, n) {
      da(
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
        da(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        da(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!au(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  }),
    (le.Component = Ur),
    (le.Fragment = fv),
    (le.Profiler = hv),
    (le.PureComponent = ru),
    (le.StrictMode = pv),
    (le.Suspense = bv),
    (le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cv),
    (le.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var r = np({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((i = t.ref), (a = iu.current)),
          t.key !== void 0 && (o = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps;
        for (l in t)
          ap.call(t, l) &&
            !sp.hasOwnProperty(l) &&
            (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
      }
      var l = arguments.length - 2;
      if (l === 1) r.children = n;
      else if (1 < l) {
        s = Array(l);
        for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
        r.children = s;
      }
      return {
        $$typeof: Ho,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a,
      };
    }),
    (le.createContext = function (e) {
      return (
        (e = {
          $$typeof: gv,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: mv, _context: e }),
        (e.Consumer = e)
      );
    }),
    (le.createElement = lp),
    (le.createFactory = function (e) {
      var t = lp.bind(null, e);
      return (t.type = e), t;
    }),
    (le.createRef = function () {
      return { current: null };
    }),
    (le.forwardRef = function (e) {
      return { $$typeof: yv, render: e };
    }),
    (le.isValidElement = au),
    (le.lazy = function (e) {
      return { $$typeof: wv, _payload: { _status: -1, _result: e }, _init: Ev };
    }),
    (le.memo = function (e, t) {
      return { $$typeof: vv, type: e, compare: t === void 0 ? null : t };
    }),
    (le.startTransition = function (e) {
      var t = fa.transition;
      fa.transition = {};
      try {
        e();
      } finally {
        fa.transition = t;
      }
    }),
    (le.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (le.useCallback = function (e, t) {
      return ht.current.useCallback(e, t);
    }),
    (le.useContext = function (e) {
      return ht.current.useContext(e);
    }),
    (le.useDebugValue = function () {}),
    (le.useDeferredValue = function (e) {
      return ht.current.useDeferredValue(e);
    }),
    (le.useEffect = function (e, t) {
      return ht.current.useEffect(e, t);
    }),
    (le.useId = function () {
      return ht.current.useId();
    }),
    (le.useImperativeHandle = function (e, t, n) {
      return ht.current.useImperativeHandle(e, t, n);
    }),
    (le.useInsertionEffect = function (e, t) {
      return ht.current.useInsertionEffect(e, t);
    }),
    (le.useLayoutEffect = function (e, t) {
      return ht.current.useLayoutEffect(e, t);
    }),
    (le.useMemo = function (e, t) {
      return ht.current.useMemo(e, t);
    }),
    (le.useReducer = function (e, t, n) {
      return ht.current.useReducer(e, t, n);
    }),
    (le.useRef = function (e) {
      return ht.current.useRef(e);
    }),
    (le.useState = function (e) {
      return ht.current.useState(e);
    }),
    (le.useSyncExternalStore = function (e, t, n) {
      return ht.current.useSyncExternalStore(e, t, n);
    }),
    (le.useTransition = function () {
      return ht.current.useTransition();
    }),
    (le.version = "18.2.0"),
    (function (e) {
      e.exports = le;
    })(cv);
  const de = Xf(E),
    lu = lv({ __proto__: null, default: de }, [E]);
  var Ov = E,
    Nv = Symbol.for("react.element"),
    Tv = Symbol.for("react.fragment"),
    Rv = Object.prototype.hasOwnProperty,
    _v =
      Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Iv = { key: !0, ref: !0, __self: !0, __source: !0 };
  function cp(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (r in t) Rv.call(t, r) && !Iv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: Nv,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: _v.current,
    };
  }
  (ua.Fragment = Tv),
    (ua.jsx = cp),
    (ua.jsxs = cp),
    (function (e) {
      e.exports = ua;
    })(uv);
  const Pv = Vo.Fragment,
    R = Vo.jsx,
    ue = Vo.jsxs,
    Av = Object.freeze(
      Object.defineProperty(
        { __proto__: null, Fragment: Pv, jsx: R, jsxs: ue },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  var Wr = {},
    $v = {
      get exports() {
        return Wr;
      },
      set exports(e) {
        Wr = e;
      },
    },
    _t = {},
    uu = {},
    Mv = {
      get exports() {
        return uu;
      },
      set exports(e) {
        uu = e;
      },
    },
    dp = {};
  (function (e) {
    function t(L, A) {
      var $ = L.length;
      L.push(A);
      e: for (; 0 < $; ) {
        var Y = ($ - 1) >>> 1,
          oe = L[Y];
        if (0 < o(oe, A)) (L[Y] = A), (L[$] = oe), ($ = Y);
        else break e;
      }
    }
    function n(L) {
      return L.length === 0 ? null : L[0];
    }
    function r(L) {
      if (L.length === 0) return null;
      var A = L[0],
        $ = L.pop();
      if ($ !== A) {
        L[0] = $;
        e: for (var Y = 0, oe = L.length, ne = oe >>> 1; Y < ne; ) {
          var he = 2 * (Y + 1) - 1,
            ve = L[he],
            Le = he + 1,
            Fe = L[Le];
          if (0 > o(ve, $))
            Le < oe && 0 > o(Fe, ve)
              ? ((L[Y] = Fe), (L[Le] = $), (Y = Le))
              : ((L[Y] = ve), (L[he] = $), (Y = he));
          else if (Le < oe && 0 > o(Fe, $)) (L[Y] = Fe), (L[Le] = $), (Y = Le);
          else break e;
        }
      }
      return A;
    }
    function o(L, A) {
      var $ = L.sortIndex - A.sortIndex;
      return $ !== 0 ? $ : L.id - A.id;
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
      c = [],
      f = 1,
      p = null,
      m = 3,
      w = !1,
      b = !1,
      S = !1,
      _ = typeof setTimeout == "function" ? setTimeout : null,
      v = typeof clearTimeout == "function" ? clearTimeout : null,
      h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(L) {
      for (var A = n(c); A !== null; ) {
        if (A.callback === null) r(c);
        else if (A.startTime <= L)
          r(c), (A.sortIndex = A.expirationTime), t(l, A);
        else break;
        A = n(c);
      }
    }
    function x(L) {
      if (((S = !1), g(L), !b))
        if (n(l) !== null) (b = !0), te(C);
        else {
          var A = n(c);
          A !== null && q(x, A.startTime - L);
        }
    }
    function C(L, A) {
      (b = !1), S && ((S = !1), v(I), (I = -1)), (w = !0);
      var $ = m;
      try {
        for (
          g(A), p = n(l);
          p !== null && (!(p.expirationTime > A) || (L && !U()));

        ) {
          var Y = p.callback;
          if (typeof Y == "function") {
            (p.callback = null), (m = p.priorityLevel);
            var oe = Y(p.expirationTime <= A);
            (A = e.unstable_now()),
              typeof oe == "function" ? (p.callback = oe) : p === n(l) && r(l),
              g(A);
          } else r(l);
          p = n(l);
        }
        if (p !== null) var ne = !0;
        else {
          var he = n(c);
          he !== null && q(x, he.startTime - A), (ne = !1);
        }
        return ne;
      } finally {
        (p = null), (m = $), (w = !1);
      }
    }
    var N = !1,
      T = null,
      I = -1,
      B = 5,
      M = -1;
    function U() {
      return !(e.unstable_now() - M < B);
    }
    function F() {
      if (T !== null) {
        var L = e.unstable_now();
        M = L;
        var A = !0;
        try {
          A = T(!0, L);
        } finally {
          A ? V() : ((N = !1), (T = null));
        }
      } else N = !1;
    }
    var V;
    if (typeof h == "function")
      V = function () {
        h(F);
      };
    else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(),
        H = W.port2;
      (W.port1.onmessage = F),
        (V = function () {
          H.postMessage(null);
        });
    } else
      V = function () {
        _(F, 0);
      };
    function te(L) {
      (T = L), N || ((N = !0), V());
    }
    function q(L, A) {
      I = _(function () {
        L(e.unstable_now());
      }, A);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (L) {
        L.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        b || w || ((b = !0), te(C));
      }),
      (e.unstable_forceFrameRate = function (L) {
        0 > L || 125 < L
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (B = 0 < L ? Math.floor(1e3 / L) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return m;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (L) {
        switch (m) {
          case 1:
          case 2:
          case 3:
            var A = 3;
            break;
          default:
            A = m;
        }
        var $ = m;
        m = A;
        try {
          return L();
        } finally {
          m = $;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (L, A) {
        switch (L) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            L = 3;
        }
        var $ = m;
        m = L;
        try {
          return A();
        } finally {
          m = $;
        }
      }),
      (e.unstable_scheduleCallback = function (L, A, $) {
        var Y = e.unstable_now();
        switch (
          (typeof $ == "object" && $ !== null
            ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? Y + $ : Y))
            : ($ = Y),
          L)
        ) {
          case 1:
            var oe = -1;
            break;
          case 2:
            oe = 250;
            break;
          case 5:
            oe = 1073741823;
            break;
          case 4:
            oe = 1e4;
            break;
          default:
            oe = 5e3;
        }
        return (
          (oe = $ + oe),
          (L = {
            id: f++,
            callback: A,
            priorityLevel: L,
            startTime: $,
            expirationTime: oe,
            sortIndex: -1,
          }),
          $ > Y
            ? ((L.sortIndex = $),
              t(c, L),
              n(l) === null &&
                L === n(c) &&
                (S ? (v(I), (I = -1)) : (S = !0), q(x, $ - Y)))
            : ((L.sortIndex = oe), t(l, L), b || w || ((b = !0), te(C))),
          L
        );
      }),
      (e.unstable_shouldYield = U),
      (e.unstable_wrapCallback = function (L) {
        var A = m;
        return function () {
          var $ = m;
          m = A;
          try {
            return L.apply(this, arguments);
          } finally {
            m = $;
          }
        };
      });
  })(dp),
    (function (e) {
      e.exports = dp;
    })(Mv);
  var fp = E,
    It = uu;
  function D(e) {
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
  var pp = new Set(),
    qo = {};
  function cr(e, t) {
    Vr(e, t), Vr(e + "Capture", t);
  }
  function Vr(e, t) {
    for (qo[e] = t, e = 0; e < t.length; e++) pp.add(t[e]);
  }
  var En = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    cu = Object.prototype.hasOwnProperty,
    Lv =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    hp = {},
    mp = {};
  function Bv(e) {
    return cu.call(mp, e)
      ? !0
      : cu.call(hp, e)
      ? !1
      : Lv.test(e)
      ? (mp[e] = !0)
      : ((hp[e] = !0), !1);
  }
  function zv(e, t, n, r) {
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
  function jv(e, t, n, r) {
    if (t === null || typeof t > "u" || zv(e, t, n, r)) return !0;
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
  function mt(e, t, n, r, o, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a);
  }
  var nt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      nt[e] = new mt(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      nt[t] = new mt(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        nt[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      nt[e] = new mt(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        nt[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      nt[e] = new mt(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      nt[e] = new mt(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      nt[e] = new mt(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      nt[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var du = /[\-:]([a-z])/g;
  function fu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(du, fu);
      nt[t] = new mt(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(du, fu);
        nt[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(du, fu);
      nt[t] = new mt(
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
      nt[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (nt.xlinkHref = new mt(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      nt[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function pu(e, t, n, r) {
    var o = nt.hasOwnProperty(t) ? nt[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (jv(t, n, o, r) && (n = null),
      r || o === null
        ? Bv(t) &&
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
  var Cn = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    pa = Symbol.for("react.element"),
    Hr = Symbol.for("react.portal"),
    qr = Symbol.for("react.fragment"),
    hu = Symbol.for("react.strict_mode"),
    mu = Symbol.for("react.profiler"),
    gp = Symbol.for("react.provider"),
    yp = Symbol.for("react.context"),
    gu = Symbol.for("react.forward_ref"),
    yu = Symbol.for("react.suspense"),
    bu = Symbol.for("react.suspense_list"),
    vu = Symbol.for("react.memo"),
    Bn = Symbol.for("react.lazy"),
    bp = Symbol.for("react.offscreen"),
    vp = Symbol.iterator;
  function Ko(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (vp && e[vp]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Be = Object.assign,
    wu;
  function Jo(e) {
    if (wu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        wu = (t && t[1]) || "";
      }
    return (
      `
` +
      wu +
      e
    );
  }
  var xu = !1;
  function Su(e, t) {
    if (!e || xu) return "";
    xu = !0;
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
          } catch (c) {
            var r = c;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (c) {
            r = c;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (c) {
          r = c;
        }
        e();
      }
    } catch (c) {
      if (c && r && typeof c.stack == "string") {
        for (
          var o = c.stack.split(`
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
      (xu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Jo(e) : "";
  }
  function Fv(e) {
    switch (e.tag) {
      case 5:
        return Jo(e.type);
      case 16:
        return Jo("Lazy");
      case 13:
        return Jo("Suspense");
      case 19:
        return Jo("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Su(e.type, !1)), e;
      case 11:
        return (e = Su(e.type.render, !1)), e;
      case 1:
        return (e = Su(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ku(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case qr:
        return "Fragment";
      case Hr:
        return "Portal";
      case mu:
        return "Profiler";
      case hu:
        return "StrictMode";
      case yu:
        return "Suspense";
      case bu:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yp:
          return (e.displayName || "Context") + ".Consumer";
        case gp:
          return (e._context.displayName || "Context") + ".Provider";
        case gu:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case vu:
          return (
            (t = e.displayName || null), t !== null ? t : ku(e.type) || "Memo"
          );
        case Bn:
          (t = e._payload), (e = e._init);
          try {
            return ku(e(t));
          } catch {}
      }
    return null;
  }
  function Dv(e) {
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
        return ku(t);
      case 8:
        return t === hu ? "StrictMode" : "Mode";
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
  function zn(e) {
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
  function wp(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Uv(e) {
    var t = wp(e) ? "checked" : "value",
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
  function ha(e) {
    e._valueTracker || (e._valueTracker = Uv(e));
  }
  function xp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = wp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function ma(e) {
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
  function Eu(e, t) {
    var n = t.checked;
    return Be({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Sp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = zn(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function kp(e, t) {
    (t = t.checked), t != null && pu(e, "checked", t, !1);
  }
  function Cu(e, t) {
    kp(e, t);
    var n = zn(t.value),
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
      ? Ou(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ou(e, t.type, zn(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Ep(e, t, n) {
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
  function Ou(e, t, n) {
    (t !== "number" || ma(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Go = Array.isArray;
  function Kr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + zn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
    return Be({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Cp(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(D(92));
        if (Go(n)) {
          if (1 < n.length) throw Error(D(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: zn(n) };
  }
  function Op(e, t) {
    var n = zn(t.value),
      r = zn(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Np(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Tp(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Tu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Tp(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ga,
    Rp = (function (e) {
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
          ga = ga || document.createElement("div"),
            ga.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ga.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Yo(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qo = {
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
    Wv = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qo).forEach(function (e) {
    Wv.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qo[t] = Qo[e]);
    });
  });
  function _p(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Qo.hasOwnProperty(e) && Qo[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ip(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = _p(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var Vv = Be(
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
  function Ru(e, t) {
    if (t) {
      if (Vv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(D(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(D(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(D(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(D(62));
    }
  }
  function _u(e, t) {
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
  var Iu = null;
  function Pu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Au = null,
    Jr = null,
    Gr = null;
  function Pp(e) {
    if ((e = vi(e))) {
      if (typeof Au != "function") throw Error(D(280));
      var t = e.stateNode;
      t && ((t = ja(t)), Au(e.stateNode, e.type, t));
    }
  }
  function Ap(e) {
    Jr ? (Gr ? Gr.push(e) : (Gr = [e])) : (Jr = e);
  }
  function $p() {
    if (Jr) {
      var e = Jr,
        t = Gr;
      if (((Gr = Jr = null), Pp(e), t)) for (e = 0; e < t.length; e++) Pp(t[e]);
    }
  }
  function Mp(e, t) {
    return e(t);
  }
  function Lp() {}
  var $u = !1;
  function Bp(e, t, n) {
    if ($u) return e(t, n);
    $u = !0;
    try {
      return Mp(e, t, n);
    } finally {
      ($u = !1), (Jr !== null || Gr !== null) && (Lp(), $p());
    }
  }
  function Xo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ja(n);
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
    if (n && typeof n != "function") throw Error(D(231, t, typeof n));
    return n;
  }
  var Mu = !1;
  if (En)
    try {
      var Zo = {};
      Object.defineProperty(Zo, "passive", {
        get: function () {
          Mu = !0;
        },
      }),
        window.addEventListener("test", Zo, Zo),
        window.removeEventListener("test", Zo, Zo);
    } catch {
      Mu = !1;
    }
  function Hv(e, t, n, r, o, i, a, s, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (f) {
      this.onError(f);
    }
  }
  var ei = !1,
    ya = null,
    ba = !1,
    Lu = null,
    qv = {
      onError: function (e) {
        (ei = !0), (ya = e);
      },
    };
  function Kv(e, t, n, r, o, i, a, s, l) {
    (ei = !1), (ya = null), Hv.apply(qv, arguments);
  }
  function Jv(e, t, n, r, o, i, a, s, l) {
    if ((Kv.apply(this, arguments), ei)) {
      if (ei) {
        var c = ya;
        (ei = !1), (ya = null);
      } else throw Error(D(198));
      ba || ((ba = !0), (Lu = c));
    }
  }
  function dr(e) {
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
  function zp(e) {
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
  function jp(e) {
    if (dr(e) !== e) throw Error(D(188));
  }
  function Gv(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = dr(e)), t === null)) throw Error(D(188));
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
          if (i === n) return jp(o), e;
          if (i === r) return jp(o), t;
          i = i.sibling;
        }
        throw Error(D(188));
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
          if (!a) throw Error(D(189));
        }
      }
      if (n.alternate !== r) throw Error(D(190));
    }
    if (n.tag !== 3) throw Error(D(188));
    return n.stateNode.current === n ? e : t;
  }
  function Fp(e) {
    return (e = Gv(e)), e !== null ? Dp(e) : null;
  }
  function Dp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Dp(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Up = It.unstable_scheduleCallback,
    Wp = It.unstable_cancelCallback,
    Yv = It.unstable_shouldYield,
    Qv = It.unstable_requestPaint,
    qe = It.unstable_now,
    Xv = It.unstable_getCurrentPriorityLevel,
    Bu = It.unstable_ImmediatePriority,
    Vp = It.unstable_UserBlockingPriority,
    va = It.unstable_NormalPriority,
    Zv = It.unstable_LowPriority,
    Hp = It.unstable_IdlePriority,
    wa = null,
    cn = null;
  function e1(e) {
    if (cn && typeof cn.onCommitFiberRoot == "function")
      try {
        cn.onCommitFiberRoot(wa, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var en = Math.clz32 ? Math.clz32 : r1,
    t1 = Math.log,
    n1 = Math.LN2;
  function r1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((t1(e) / n1) | 0)) | 0;
  }
  var xa = 64,
    Sa = 4194304;
  function ti(e) {
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
  function ka(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var s = a & ~o;
      s !== 0 ? (r = ti(s)) : ((i &= a), i !== 0 && (r = ti(i)));
    } else (a = n & ~o), a !== 0 ? (r = ti(a)) : i !== 0 && (r = ti(i));
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
        (n = 31 - en(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function o1(e, t) {
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
  function i1(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var a = 31 - en(i),
        s = 1 << a,
        l = o[a];
      l === -1
        ? (!(s & n) || s & r) && (o[a] = o1(s, t))
        : l <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  }
  function zu(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function qp() {
    var e = xa;
    return (xa <<= 1), !(xa & 4194240) && (xa = 64), e;
  }
  function ju(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ni(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - en(t)),
      (e[t] = n);
  }
  function a1(e, t) {
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
      var o = 31 - en(n),
        i = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
  }
  function Fu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - en(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var Se = 0;
  function Kp(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Jp,
    Du,
    Gp,
    Yp,
    Qp,
    Uu = !1,
    Ea = [],
    jn = null,
    Fn = null,
    Dn = null,
    ri = new Map(),
    oi = new Map(),
    Un = [],
    s1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Xp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        Dn = null;
        break;
      case "pointerover":
      case "pointerout":
        ri.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oi.delete(t.pointerId);
    }
  }
  function ii(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = vi(t)), t !== null && Du(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function l1(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (jn = ii(jn, e, t, n, r, o)), !0;
      case "dragenter":
        return (Fn = ii(Fn, e, t, n, r, o)), !0;
      case "mouseover":
        return (Dn = ii(Dn, e, t, n, r, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return ri.set(i, ii(ri.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), oi.set(i, ii(oi.get(i) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function Zp(e) {
    var t = fr(e.target);
    if (t !== null) {
      var n = dr(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = zp(n)), t !== null)) {
            (e.blockedOn = t),
              Qp(e.priority, function () {
                Gp(n);
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
  function Ca(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Iu = r), n.target.dispatchEvent(r), (Iu = null);
      } else return (t = vi(n)), t !== null && Du(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function eh(e, t, n) {
    Ca(e) && n.delete(t);
  }
  function u1() {
    (Uu = !1),
      jn !== null && Ca(jn) && (jn = null),
      Fn !== null && Ca(Fn) && (Fn = null),
      Dn !== null && Ca(Dn) && (Dn = null),
      ri.forEach(eh),
      oi.forEach(eh);
  }
  function ai(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Uu ||
        ((Uu = !0),
        It.unstable_scheduleCallback(It.unstable_NormalPriority, u1)));
  }
  function si(e) {
    function t(o) {
      return ai(o, e);
    }
    if (0 < Ea.length) {
      ai(Ea[0], e);
      for (var n = 1; n < Ea.length; n++) {
        var r = Ea[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jn !== null && ai(jn, e),
        Fn !== null && ai(Fn, e),
        Dn !== null && ai(Dn, e),
        ri.forEach(t),
        oi.forEach(t),
        n = 0;
      n < Un.length;
      n++
    )
      (r = Un[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && ((n = Un[0]), n.blockedOn === null); )
      Zp(n), n.blockedOn === null && Un.shift();
  }
  var Yr = Cn.ReactCurrentBatchConfig,
    Oa = !0;
  function c1(e, t, n, r) {
    var o = Se,
      i = Yr.transition;
    Yr.transition = null;
    try {
      (Se = 1), Wu(e, t, n, r);
    } finally {
      (Se = o), (Yr.transition = i);
    }
  }
  function d1(e, t, n, r) {
    var o = Se,
      i = Yr.transition;
    Yr.transition = null;
    try {
      (Se = 4), Wu(e, t, n, r);
    } finally {
      (Se = o), (Yr.transition = i);
    }
  }
  function Wu(e, t, n, r) {
    if (Oa) {
      var o = Vu(e, t, n, r);
      if (o === null) sc(e, t, r, Na, n), Xp(e, r);
      else if (l1(o, e, t, n, r)) r.stopPropagation();
      else if ((Xp(e, r), t & 4 && -1 < s1.indexOf(e))) {
        for (; o !== null; ) {
          var i = vi(o);
          if (
            (i !== null && Jp(i),
            (i = Vu(e, t, n, r)),
            i === null && sc(e, t, r, Na, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else sc(e, t, r, null, n);
    }
  }
  var Na = null;
  function Vu(e, t, n, r) {
    if (((Na = null), (e = Pu(r)), (e = fr(e)), e !== null))
      if (((t = dr(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = zp(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Na = e), null;
  }
  function th(e) {
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
        switch (Xv()) {
          case Bu:
            return 1;
          case Vp:
            return 4;
          case va:
          case Zv:
            return 16;
          case Hp:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wn = null,
    Hu = null,
    Ta = null;
  function nh() {
    if (Ta) return Ta;
    var e,
      t = Hu,
      n = t.length,
      r,
      o = "value" in Wn ? Wn.value : Wn.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return (Ta = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ra(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function _a() {
    return !0;
  }
  function rh() {
    return !1;
  }
  function Pt(e) {
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
          ? _a
          : rh),
        (this.isPropagationStopped = rh),
        this
      );
    }
    return (
      Be(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = _a));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = _a));
        },
        persist: function () {},
        isPersistent: _a,
      }),
      t
    );
  }
  var Qr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qu = Pt(Qr),
    li = Be({}, Qr, { view: 0, detail: 0 }),
    f1 = Pt(li),
    Ku,
    Ju,
    ui,
    Ia = Be({}, li, {
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
      getModifierState: Yu,
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
          : (e !== ui &&
              (ui && e.type === "mousemove"
                ? ((Ku = e.screenX - ui.screenX), (Ju = e.screenY - ui.screenY))
                : (Ju = Ku = 0),
              (ui = e)),
            Ku);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ju;
      },
    }),
    oh = Pt(Ia),
    p1 = Be({}, Ia, { dataTransfer: 0 }),
    h1 = Pt(p1),
    m1 = Be({}, li, { relatedTarget: 0 }),
    Gu = Pt(m1),
    g1 = Be({}, Qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y1 = Pt(g1),
    b1 = Be({}, Qr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    v1 = Pt(b1),
    w1 = Be({}, Qr, { data: 0 }),
    ih = Pt(w1),
    x1 = {
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
    S1 = {
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
    k1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function E1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = k1[e])
      ? !!t[e]
      : !1;
  }
  function Yu() {
    return E1;
  }
  var C1 = Be({}, li, {
      key: function (e) {
        if (e.key) {
          var t = x1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? S1[e.keyCode] || "Unidentified"
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
      getModifierState: Yu,
      charCode: function (e) {
        return e.type === "keypress" ? Ra(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ra(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    O1 = Pt(C1),
    N1 = Be({}, Ia, {
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
    ah = Pt(N1),
    T1 = Be({}, li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yu,
    }),
    R1 = Pt(T1),
    _1 = Be({}, Qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    I1 = Pt(_1),
    P1 = Be({}, Ia, {
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
    A1 = Pt(P1),
    $1 = [9, 13, 27, 32],
    Qu = En && "CompositionEvent" in window,
    ci = null;
  En && "documentMode" in document && (ci = document.documentMode);
  var M1 = En && "TextEvent" in window && !ci,
    sh = En && (!Qu || (ci && 8 < ci && 11 >= ci)),
    lh = String.fromCharCode(32),
    uh = !1;
  function ch(e, t) {
    switch (e) {
      case "keyup":
        return $1.indexOf(t.keyCode) !== -1;
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
  function dh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xr = !1;
  function L1(e, t) {
    switch (e) {
      case "compositionend":
        return dh(t);
      case "keypress":
        return t.which !== 32 ? null : ((uh = !0), lh);
      case "textInput":
        return (e = t.data), e === lh && uh ? null : e;
      default:
        return null;
    }
  }
  function B1(e, t) {
    if (Xr)
      return e === "compositionend" || (!Qu && ch(e, t))
        ? ((e = nh()), (Ta = Hu = Wn = null), (Xr = !1), e)
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
        return sh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var z1 = {
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
  function fh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!z1[e.type] : t === "textarea";
  }
  function ph(e, t, n, r) {
    Ap(r),
      (t = La(t, "onChange")),
      0 < t.length &&
        ((n = new qu("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var di = null,
    fi = null;
  function j1(e) {
    Ih(e, 0);
  }
  function Pa(e) {
    var t = ro(e);
    if (xp(t)) return e;
  }
  function F1(e, t) {
    if (e === "change") return t;
  }
  var hh = !1;
  if (En) {
    var Xu;
    if (En) {
      var Zu = "oninput" in document;
      if (!Zu) {
        var mh = document.createElement("div");
        mh.setAttribute("oninput", "return;"),
          (Zu = typeof mh.oninput == "function");
      }
      Xu = Zu;
    } else Xu = !1;
    hh = Xu && (!document.documentMode || 9 < document.documentMode);
  }
  function gh() {
    di && (di.detachEvent("onpropertychange", yh), (fi = di = null));
  }
  function yh(e) {
    if (e.propertyName === "value" && Pa(fi)) {
      var t = [];
      ph(t, fi, e, Pu(e)), Bp(j1, t);
    }
  }
  function D1(e, t, n) {
    e === "focusin"
      ? (gh(), (di = t), (fi = n), di.attachEvent("onpropertychange", yh))
      : e === "focusout" && gh();
  }
  function U1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Pa(fi);
  }
  function W1(e, t) {
    if (e === "click") return Pa(t);
  }
  function V1(e, t) {
    if (e === "input" || e === "change") return Pa(t);
  }
  function H1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var tn = typeof Object.is == "function" ? Object.is : H1;
  function pi(e, t) {
    if (tn(e, t)) return !0;
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
      if (!cu.call(t, o) || !tn(e[o], t[o])) return !1;
    }
    return !0;
  }
  function bh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vh(e, t) {
    var n = bh(e);
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
      n = bh(n);
    }
  }
  function wh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? wh(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function xh() {
    for (var e = window, t = ma(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ma(e.document);
    }
    return t;
  }
  function ec(e) {
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
  function q1(e) {
    var t = xh(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      wh(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ec(n)) {
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
            (o = vh(n, i));
          var a = vh(n, r);
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
  var K1 = En && "documentMode" in document && 11 >= document.documentMode,
    Zr = null,
    tc = null,
    hi = null,
    nc = !1;
  function Sh(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nc ||
      Zr == null ||
      Zr !== ma(r) ||
      ((r = Zr),
      "selectionStart" in r && ec(r)
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
      (hi && pi(hi, r)) ||
        ((hi = r),
        (r = La(tc, "onSelect")),
        0 < r.length &&
          ((t = new qu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Zr))));
  }
  function Aa(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var eo = {
      animationend: Aa("Animation", "AnimationEnd"),
      animationiteration: Aa("Animation", "AnimationIteration"),
      animationstart: Aa("Animation", "AnimationStart"),
      transitionend: Aa("Transition", "TransitionEnd"),
    },
    rc = {},
    kh = {};
  En &&
    ((kh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete eo.animationend.animation,
      delete eo.animationiteration.animation,
      delete eo.animationstart.animation),
    "TransitionEvent" in window || delete eo.transitionend.transition);
  function $a(e) {
    if (rc[e]) return rc[e];
    if (!eo[e]) return e;
    var t = eo[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in kh) return (rc[e] = t[n]);
    return e;
  }
  var Eh = $a("animationend"),
    Ch = $a("animationiteration"),
    Oh = $a("animationstart"),
    Nh = $a("transitionend"),
    Th = new Map(),
    Rh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Vn(e, t) {
    Th.set(e, t), cr(t, [e]);
  }
  for (var oc = 0; oc < Rh.length; oc++) {
    var ic = Rh[oc],
      J1 = ic.toLowerCase(),
      G1 = ic[0].toUpperCase() + ic.slice(1);
    Vn(J1, "on" + G1);
  }
  Vn(Eh, "onAnimationEnd"),
    Vn(Ch, "onAnimationIteration"),
    Vn(Oh, "onAnimationStart"),
    Vn("dblclick", "onDoubleClick"),
    Vn("focusin", "onFocus"),
    Vn("focusout", "onBlur"),
    Vn(Nh, "onTransitionEnd"),
    Vr("onMouseEnter", ["mouseout", "mouseover"]),
    Vr("onMouseLeave", ["mouseout", "mouseover"]),
    Vr("onPointerEnter", ["pointerout", "pointerover"]),
    Vr("onPointerLeave", ["pointerout", "pointerover"]),
    cr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    cr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    cr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    cr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    cr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var mi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Y1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(mi),
    );
  function _h(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Jv(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ih(e, t) {
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
              c = s.currentTarget;
            if (((s = s.listener), l !== i && o.isPropagationStopped()))
              break e;
            _h(o, s, c), (i = l);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((s = r[a]),
              (l = s.instance),
              (c = s.currentTarget),
              (s = s.listener),
              l !== i && o.isPropagationStopped())
            )
              break e;
            _h(o, s, c), (i = l);
          }
      }
    }
    if (ba) throw ((e = Lu), (ba = !1), (Lu = null), e);
  }
  function _e(e, t) {
    var n = t[pc];
    n === void 0 && (n = t[pc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ph(t, e, 2, !1), n.add(r));
  }
  function ac(e, t, n) {
    var r = 0;
    t && (r |= 4), Ph(n, e, r, t);
  }
  var Ma = "_reactListening" + Math.random().toString(36).slice(2);
  function gi(e) {
    if (!e[Ma]) {
      (e[Ma] = !0),
        pp.forEach(function (n) {
          n !== "selectionchange" && (Y1.has(n) || ac(n, !1, e), ac(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ma] || ((t[Ma] = !0), ac("selectionchange", !1, t));
    }
  }
  function Ph(e, t, n, r) {
    switch (th(t)) {
      case 1:
        var o = c1;
        break;
      case 4:
        o = d1;
        break;
      default:
        o = Wu;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Mu ||
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
  function sc(e, t, n, r, o) {
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
            if (((a = fr(s)), a === null)) return;
            if (((l = a.tag), l === 5 || l === 6)) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Bp(function () {
      var c = i,
        f = Pu(n),
        p = [];
      e: {
        var m = Th.get(e);
        if (m !== void 0) {
          var w = qu,
            b = e;
          switch (e) {
            case "keypress":
              if (Ra(n) === 0) break e;
            case "keydown":
            case "keyup":
              w = O1;
              break;
            case "focusin":
              (b = "focus"), (w = Gu);
              break;
            case "focusout":
              (b = "blur"), (w = Gu);
              break;
            case "beforeblur":
            case "afterblur":
              w = Gu;
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
              w = oh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = h1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = R1;
              break;
            case Eh:
            case Ch:
            case Oh:
              w = y1;
              break;
            case Nh:
              w = I1;
              break;
            case "scroll":
              w = f1;
              break;
            case "wheel":
              w = A1;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = v1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = ah;
          }
          var S = (t & 4) !== 0,
            _ = !S && e === "scroll",
            v = S ? (m !== null ? m + "Capture" : null) : m;
          S = [];
          for (var h = c, g; h !== null; ) {
            g = h;
            var x = g.stateNode;
            if (
              (g.tag === 5 &&
                x !== null &&
                ((g = x),
                v !== null &&
                  ((x = Xo(h, v)), x != null && S.push(yi(h, x, g)))),
              _)
            )
              break;
            h = h.return;
          }
          0 < S.length &&
            ((m = new w(m, b, null, n, f)), p.push({ event: m, listeners: S }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((m = e === "mouseover" || e === "pointerover"),
            (w = e === "mouseout" || e === "pointerout"),
            m &&
              n !== Iu &&
              (b = n.relatedTarget || n.fromElement) &&
              (fr(b) || b[On]))
          )
            break e;
          if (
            (w || m) &&
            ((m =
              f.window === f
                ? f
                : (m = f.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            w
              ? ((b = n.relatedTarget || n.toElement),
                (w = c),
                (b = b ? fr(b) : null),
                b !== null &&
                  ((_ = dr(b)), b !== _ || (b.tag !== 5 && b.tag !== 6)) &&
                  (b = null))
              : ((w = null), (b = c)),
            w !== b)
          ) {
            if (
              ((S = oh),
              (x = "onMouseLeave"),
              (v = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((S = ah),
                (x = "onPointerLeave"),
                (v = "onPointerEnter"),
                (h = "pointer")),
              (_ = w == null ? m : ro(w)),
              (g = b == null ? m : ro(b)),
              (m = new S(x, h + "leave", w, n, f)),
              (m.target = _),
              (m.relatedTarget = g),
              (x = null),
              fr(f) === c &&
                ((S = new S(v, h + "enter", b, n, f)),
                (S.target = g),
                (S.relatedTarget = _),
                (x = S)),
              (_ = x),
              w && b)
            )
              t: {
                for (S = w, v = b, h = 0, g = S; g; g = to(g)) h++;
                for (g = 0, x = v; x; x = to(x)) g++;
                for (; 0 < h - g; ) (S = to(S)), h--;
                for (; 0 < g - h; ) (v = to(v)), g--;
                for (; h--; ) {
                  if (S === v || (v !== null && S === v.alternate)) break t;
                  (S = to(S)), (v = to(v));
                }
                S = null;
              }
            else S = null;
            w !== null && Ah(p, m, w, S, !1),
              b !== null && _ !== null && Ah(p, _, b, S, !0);
          }
        }
        e: {
          if (
            ((m = c ? ro(c) : window),
            (w = m.nodeName && m.nodeName.toLowerCase()),
            w === "select" || (w === "input" && m.type === "file"))
          )
            var C = F1;
          else if (fh(m))
            if (hh) C = V1;
            else {
              C = U1;
              var N = D1;
            }
          else
            (w = m.nodeName) &&
              w.toLowerCase() === "input" &&
              (m.type === "checkbox" || m.type === "radio") &&
              (C = W1);
          if (C && (C = C(e, c))) {
            ph(p, C, n, f);
            break e;
          }
          N && N(e, m, c),
            e === "focusout" &&
              (N = m._wrapperState) &&
              N.controlled &&
              m.type === "number" &&
              Ou(m, "number", m.value);
        }
        switch (((N = c ? ro(c) : window), e)) {
          case "focusin":
            (fh(N) || N.contentEditable === "true") &&
              ((Zr = N), (tc = c), (hi = null));
            break;
          case "focusout":
            hi = tc = Zr = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (nc = !1), Sh(p, n, f);
            break;
          case "selectionchange":
            if (K1) break;
          case "keydown":
          case "keyup":
            Sh(p, n, f);
        }
        var T;
        if (Qu)
          e: {
            switch (e) {
              case "compositionstart":
                var I = "onCompositionStart";
                break e;
              case "compositionend":
                I = "onCompositionEnd";
                break e;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break e;
            }
            I = void 0;
          }
        else
          Xr
            ? ch(e, n) && (I = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (I = "onCompositionStart");
        I &&
          (sh &&
            n.locale !== "ko" &&
            (Xr || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && Xr && (T = nh())
              : ((Wn = f),
                (Hu = "value" in Wn ? Wn.value : Wn.textContent),
                (Xr = !0))),
          (N = La(c, I)),
          0 < N.length &&
            ((I = new ih(I, e, null, n, f)),
            p.push({ event: I, listeners: N }),
            T ? (I.data = T) : ((T = dh(n)), T !== null && (I.data = T)))),
          (T = M1 ? L1(e, n) : B1(e, n)) &&
            ((c = La(c, "onBeforeInput")),
            0 < c.length &&
              ((f = new ih("onBeforeInput", "beforeinput", null, n, f)),
              p.push({ event: f, listeners: c }),
              (f.data = T)));
      }
      Ih(p, t);
    });
  }
  function yi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function La(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = Xo(e, n)),
        i != null && r.unshift(yi(e, i, o)),
        (i = Xo(e, t)),
        i != null && r.push(yi(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function to(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ah(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var s = n,
        l = s.alternate,
        c = s.stateNode;
      if (l !== null && l === r) break;
      s.tag === 5 &&
        c !== null &&
        ((s = c),
        o
          ? ((l = Xo(n, i)), l != null && a.unshift(yi(n, l, s)))
          : o || ((l = Xo(n, i)), l != null && a.push(yi(n, l, s)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Q1 = /\r\n?/g,
    X1 = /\u0000|\uFFFD/g;
  function $h(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Q1,
        `
`,
      )
      .replace(X1, "");
  }
  function Ba(e, t, n) {
    if (((t = $h(t)), $h(e) !== t && n)) throw Error(D(425));
  }
  function za() {}
  var lc = null,
    uc = null;
  function cc(e, t) {
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
  var dc = typeof setTimeout == "function" ? setTimeout : void 0,
    Z1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Mh = typeof Promise == "function" ? Promise : void 0,
    ew =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Mh < "u"
        ? function (e) {
            return Mh.resolve(null).then(e).catch(tw);
          }
        : dc;
  function tw(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function fc(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), si(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    si(t);
  }
  function Hn(e) {
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
  function Lh(e) {
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
  var no = Math.random().toString(36).slice(2),
    dn = "__reactFiber$" + no,
    bi = "__reactProps$" + no,
    On = "__reactContainer$" + no,
    pc = "__reactEvents$" + no,
    nw = "__reactListeners$" + no,
    rw = "__reactHandles$" + no;
  function fr(e) {
    var t = e[dn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[On] || n[dn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Lh(e); e !== null; ) {
            if ((n = e[dn])) return n;
            e = Lh(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function vi(e) {
    return (
      (e = e[dn] || e[On]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function ro(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(D(33));
  }
  function ja(e) {
    return e[bi] || null;
  }
  var hc = [],
    oo = -1;
  function qn(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > oo || ((e.current = hc[oo]), (hc[oo] = null), oo--);
  }
  function Ne(e, t) {
    oo++, (hc[oo] = e.current), (e.current = t);
  }
  var Kn = {},
    ut = qn(Kn),
    vt = qn(!1),
    pr = Kn;
  function io(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Kn;
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
  function wt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Fa() {
    Ie(vt), Ie(ut);
  }
  function Bh(e, t, n) {
    if (ut.current !== Kn) throw Error(D(168));
    Ne(ut, t), Ne(vt, n);
  }
  function zh(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(D(108, Dv(e) || "Unknown", o));
    return Be({}, n, r);
  }
  function Da(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Kn),
      (pr = ut.current),
      Ne(ut, e),
      Ne(vt, vt.current),
      !0
    );
  }
  function jh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(D(169));
    n
      ? ((e = zh(e, t, pr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ie(vt),
        Ie(ut),
        Ne(ut, e))
      : Ie(vt),
      Ne(vt, n);
  }
  var Nn = null,
    Ua = !1,
    mc = !1;
  function Fh(e) {
    Nn === null ? (Nn = [e]) : Nn.push(e);
  }
  function ow(e) {
    (Ua = !0), Fh(e);
  }
  function Jn() {
    if (!mc && Nn !== null) {
      mc = !0;
      var e = 0,
        t = Se;
      try {
        var n = Nn;
        for (Se = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Nn = null), (Ua = !1);
      } catch (o) {
        throw (Nn !== null && (Nn = Nn.slice(e + 1)), Up(Bu, Jn), o);
      } finally {
        (Se = t), (mc = !1);
      }
    }
    return null;
  }
  var ao = [],
    so = 0,
    Wa = null,
    Va = 0,
    Ft = [],
    Dt = 0,
    hr = null,
    Tn = 1,
    Rn = "";
  function mr(e, t) {
    (ao[so++] = Va), (ao[so++] = Wa), (Wa = e), (Va = t);
  }
  function Dh(e, t, n) {
    (Ft[Dt++] = Tn), (Ft[Dt++] = Rn), (Ft[Dt++] = hr), (hr = e);
    var r = Tn;
    e = Rn;
    var o = 32 - en(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - en(t) + o;
    if (30 < i) {
      var a = o - (o % 5);
      (i = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (o -= a),
        (Tn = (1 << (32 - en(t) + o)) | (n << o) | r),
        (Rn = i + e);
    } else (Tn = (1 << i) | (n << o) | r), (Rn = e);
  }
  function gc(e) {
    e.return !== null && (mr(e, 1), Dh(e, 1, 0));
  }
  function yc(e) {
    for (; e === Wa; )
      (Wa = ao[--so]), (ao[so] = null), (Va = ao[--so]), (ao[so] = null);
    for (; e === hr; )
      (hr = Ft[--Dt]),
        (Ft[Dt] = null),
        (Rn = Ft[--Dt]),
        (Ft[Dt] = null),
        (Tn = Ft[--Dt]),
        (Ft[Dt] = null);
  }
  var At = null,
    $t = null,
    $e = !1,
    nn = null;
  function Uh(e, t) {
    var n = Ht(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Wh(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (At = e), ($t = Hn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (At = e), ($t = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = hr !== null ? { id: Tn, overflow: Rn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ht(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (At = e),
              ($t = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function bc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vc(e) {
    if ($e) {
      var t = $t;
      if (t) {
        var n = t;
        if (!Wh(e, t)) {
          if (bc(e)) throw Error(D(418));
          t = Hn(n.nextSibling);
          var r = At;
          t && Wh(e, t)
            ? Uh(r, n)
            : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (At = e));
        }
      } else {
        if (bc(e)) throw Error(D(418));
        (e.flags = (e.flags & -4097) | 2), ($e = !1), (At = e);
      }
    }
  }
  function Vh(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    At = e;
  }
  function Ha(e) {
    if (e !== At) return !1;
    if (!$e) return Vh(e), ($e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !cc(e.type, e.memoizedProps))),
      t && (t = $t))
    ) {
      if (bc(e)) throw (Hh(), Error(D(418)));
      for (; t; ) Uh(e, t), (t = Hn(t.nextSibling));
    }
    if ((Vh(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(D(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                $t = Hn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        $t = null;
      }
    } else $t = At ? Hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Hh() {
    for (var e = $t; e; ) e = Hn(e.nextSibling);
  }
  function lo() {
    ($t = At = null), ($e = !1);
  }
  function wc(e) {
    nn === null ? (nn = [e]) : nn.push(e);
  }
  var iw = Cn.ReactCurrentBatchConfig;
  function rn(e, t) {
    if (e && e.defaultProps) {
      (t = Be({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var qa = qn(null),
    Ka = null,
    uo = null,
    xc = null;
  function Sc() {
    xc = uo = Ka = null;
  }
  function kc(e) {
    var t = qa.current;
    Ie(qa), (e._currentValue = t);
  }
  function Ec(e, t, n) {
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
  function co(e, t) {
    (Ka = e),
      (xc = uo = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (xt = !0), (e.firstContext = null));
  }
  function Ut(e) {
    var t = e._currentValue;
    if (xc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), uo === null)) {
        if (Ka === null) throw Error(D(308));
        (uo = e), (Ka.dependencies = { lanes: 0, firstContext: e });
      } else uo = uo.next = e;
    return t;
  }
  var gr = null;
  function Cc(e) {
    gr === null ? (gr = [e]) : gr.push(e);
  }
  function qh(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), Cc(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      _n(e, r)
    );
  }
  function _n(e, t) {
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
  var Gn = !1;
  function Oc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Kh(e, t) {
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
  function In(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), me & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        _n(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), Cc(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      _n(e, n)
    );
  }
  function Ja(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fu(e, n);
    }
  }
  function Jh(e, t) {
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
  function Ga(e, t, n, r) {
    var o = e.updateQueue;
    Gn = !1;
    var i = o.firstBaseUpdate,
      a = o.lastBaseUpdate,
      s = o.shared.pending;
    if (s !== null) {
      o.shared.pending = null;
      var l = s,
        c = l.next;
      (l.next = null), a === null ? (i = c) : (a.next = c), (a = l);
      var f = e.alternate;
      f !== null &&
        ((f = f.updateQueue),
        (s = f.lastBaseUpdate),
        s !== a &&
          (s === null ? (f.firstBaseUpdate = c) : (s.next = c),
          (f.lastBaseUpdate = l)));
    }
    if (i !== null) {
      var p = o.baseState;
      (a = 0), (f = c = l = null), (s = i);
      do {
        var m = s.lane,
          w = s.eventTime;
        if ((r & m) === m) {
          f !== null &&
            (f = f.next =
              {
                eventTime: w,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var b = e,
              S = s;
            switch (((m = t), (w = n), S.tag)) {
              case 1:
                if (((b = S.payload), typeof b == "function")) {
                  p = b.call(w, p, m);
                  break e;
                }
                p = b;
                break e;
              case 3:
                b.flags = (b.flags & -65537) | 128;
              case 0:
                if (
                  ((b = S.payload),
                  (m = typeof b == "function" ? b.call(w, p, m) : b),
                  m == null)
                )
                  break e;
                p = Be({}, p, m);
                break e;
              case 2:
                Gn = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (m = o.effects),
            m === null ? (o.effects = [s]) : m.push(s));
        } else
          (w = {
            eventTime: w,
            lane: m,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            f === null ? ((c = f = w), (l = p)) : (f = f.next = w),
            (a |= m);
        if (((s = s.next), s === null)) {
          if (((s = o.shared.pending), s === null)) break;
          (m = s),
            (s = m.next),
            (m.next = null),
            (o.lastBaseUpdate = m),
            (o.shared.pending = null);
        }
      } while (1);
      if (
        (f === null && (l = p),
        (o.baseState = l),
        (o.firstBaseUpdate = c),
        (o.lastBaseUpdate = f),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (a |= o.lane), (o = o.next);
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      (vr |= a), (e.lanes = a), (e.memoizedState = p);
    }
  }
  function Gh(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(D(191, o));
          o.call(r);
        }
      }
  }
  var Yh = new fp.Component().refs;
  function Nc(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Be({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ya = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? dr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = yt(),
        o = er(e),
        i = In(r, o);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Yn(e, i, o)),
        t !== null && (sn(t, e, o, r), Ja(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = yt(),
        o = er(e),
        i = In(r, o);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Yn(e, i, o)),
        t !== null && (sn(t, e, o, r), Ja(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = yt(),
        r = er(e),
        o = In(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = Yn(e, o, r)),
        t !== null && (sn(t, e, r, n), Ja(t, e, r));
    },
  };
  function Qh(e, t, n, r, o, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !pi(n, r) || !pi(o, i)
        : !0
    );
  }
  function Xh(e, t, n) {
    var r = !1,
      o = Kn,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ut(i))
        : ((o = wt(t) ? pr : ut.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? io(e, o) : Kn)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ya),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Zh(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ya.enqueueReplaceState(t, t.state, null);
  }
  function Tc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = Yh), Oc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = Ut(i))
      : ((i = wt(t) ? pr : ut.current), (o.context = io(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Nc(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Ya.enqueueReplaceState(o, o.state, null),
        Ga(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function wi(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(D(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(D(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var s = o.refs;
              s === Yh && (s = o.refs = {}),
                a === null ? delete s[i] : (s[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(D(284));
      if (!n._owner) throw Error(D(290, e));
    }
    return e;
  }
  function Qa(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        D(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function em(e) {
    var t = e._init;
    return t(e._payload);
  }
  function tm(e) {
    function t(v, h) {
      if (e) {
        var g = v.deletions;
        g === null ? ((v.deletions = [h]), (v.flags |= 16)) : g.push(h);
      }
    }
    function n(v, h) {
      if (!e) return null;
      for (; h !== null; ) t(v, h), (h = h.sibling);
      return null;
    }
    function r(v, h) {
      for (v = new Map(); h !== null; )
        h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling);
      return v;
    }
    function o(v, h) {
      return (v = nr(v, h)), (v.index = 0), (v.sibling = null), v;
    }
    function i(v, h, g) {
      return (
        (v.index = g),
        e
          ? ((g = v.alternate),
            g !== null
              ? ((g = g.index), g < h ? ((v.flags |= 2), h) : g)
              : ((v.flags |= 2), h))
          : ((v.flags |= 1048576), h)
      );
    }
    function a(v) {
      return e && v.alternate === null && (v.flags |= 2), v;
    }
    function s(v, h, g, x) {
      return h === null || h.tag !== 6
        ? ((h = cd(g, v.mode, x)), (h.return = v), h)
        : ((h = o(h, g)), (h.return = v), h);
    }
    function l(v, h, g, x) {
      var C = g.type;
      return C === qr
        ? f(v, h, g.props.children, x, g.key)
        : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Bn &&
              em(C) === h.type))
        ? ((x = o(h, g.props)), (x.ref = wi(v, h, g)), (x.return = v), x)
        : ((x = gs(g.type, g.key, g.props, null, v.mode, x)),
          (x.ref = wi(v, h, g)),
          (x.return = v),
          x);
    }
    function c(v, h, g, x) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== g.containerInfo ||
        h.stateNode.implementation !== g.implementation
        ? ((h = dd(g, v.mode, x)), (h.return = v), h)
        : ((h = o(h, g.children || [])), (h.return = v), h);
    }
    function f(v, h, g, x, C) {
      return h === null || h.tag !== 7
        ? ((h = kr(g, v.mode, x, C)), (h.return = v), h)
        : ((h = o(h, g)), (h.return = v), h);
    }
    function p(v, h, g) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = cd("" + h, v.mode, g)), (h.return = v), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case pa:
            return (
              (g = gs(h.type, h.key, h.props, null, v.mode, g)),
              (g.ref = wi(v, null, h)),
              (g.return = v),
              g
            );
          case Hr:
            return (h = dd(h, v.mode, g)), (h.return = v), h;
          case Bn:
            var x = h._init;
            return p(v, x(h._payload), g);
        }
        if (Go(h) || Ko(h))
          return (h = kr(h, v.mode, g, null)), (h.return = v), h;
        Qa(v, h);
      }
      return null;
    }
    function m(v, h, g, x) {
      var C = h !== null ? h.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return C !== null ? null : s(v, h, "" + g, x);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case pa:
            return g.key === C ? l(v, h, g, x) : null;
          case Hr:
            return g.key === C ? c(v, h, g, x) : null;
          case Bn:
            return (C = g._init), m(v, h, C(g._payload), x);
        }
        if (Go(g) || Ko(g)) return C !== null ? null : f(v, h, g, x, null);
        Qa(v, g);
      }
      return null;
    }
    function w(v, h, g, x, C) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (v = v.get(g) || null), s(h, v, "" + x, C);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case pa:
            return (
              (v = v.get(x.key === null ? g : x.key) || null), l(h, v, x, C)
            );
          case Hr:
            return (
              (v = v.get(x.key === null ? g : x.key) || null), c(h, v, x, C)
            );
          case Bn:
            var N = x._init;
            return w(v, h, g, N(x._payload), C);
        }
        if (Go(x) || Ko(x)) return (v = v.get(g) || null), f(h, v, x, C, null);
        Qa(h, x);
      }
      return null;
    }
    function b(v, h, g, x) {
      for (
        var C = null, N = null, T = h, I = (h = 0), B = null;
        T !== null && I < g.length;
        I++
      ) {
        T.index > I ? ((B = T), (T = null)) : (B = T.sibling);
        var M = m(v, T, g[I], x);
        if (M === null) {
          T === null && (T = B);
          break;
        }
        e && T && M.alternate === null && t(v, T),
          (h = i(M, h, I)),
          N === null ? (C = M) : (N.sibling = M),
          (N = M),
          (T = B);
      }
      if (I === g.length) return n(v, T), $e && mr(v, I), C;
      if (T === null) {
        for (; I < g.length; I++)
          (T = p(v, g[I], x)),
            T !== null &&
              ((h = i(T, h, I)),
              N === null ? (C = T) : (N.sibling = T),
              (N = T));
        return $e && mr(v, I), C;
      }
      for (T = r(v, T); I < g.length; I++)
        (B = w(T, v, I, g[I], x)),
          B !== null &&
            (e && B.alternate !== null && T.delete(B.key === null ? I : B.key),
            (h = i(B, h, I)),
            N === null ? (C = B) : (N.sibling = B),
            (N = B));
      return (
        e &&
          T.forEach(function (U) {
            return t(v, U);
          }),
        $e && mr(v, I),
        C
      );
    }
    function S(v, h, g, x) {
      var C = Ko(g);
      if (typeof C != "function") throw Error(D(150));
      if (((g = C.call(g)), g == null)) throw Error(D(151));
      for (
        var N = (C = null), T = h, I = (h = 0), B = null, M = g.next();
        T !== null && !M.done;
        I++, M = g.next()
      ) {
        T.index > I ? ((B = T), (T = null)) : (B = T.sibling);
        var U = m(v, T, M.value, x);
        if (U === null) {
          T === null && (T = B);
          break;
        }
        e && T && U.alternate === null && t(v, T),
          (h = i(U, h, I)),
          N === null ? (C = U) : (N.sibling = U),
          (N = U),
          (T = B);
      }
      if (M.done) return n(v, T), $e && mr(v, I), C;
      if (T === null) {
        for (; !M.done; I++, M = g.next())
          (M = p(v, M.value, x)),
            M !== null &&
              ((h = i(M, h, I)),
              N === null ? (C = M) : (N.sibling = M),
              (N = M));
        return $e && mr(v, I), C;
      }
      for (T = r(v, T); !M.done; I++, M = g.next())
        (M = w(T, v, I, M.value, x)),
          M !== null &&
            (e && M.alternate !== null && T.delete(M.key === null ? I : M.key),
            (h = i(M, h, I)),
            N === null ? (C = M) : (N.sibling = M),
            (N = M));
      return (
        e &&
          T.forEach(function (F) {
            return t(v, F);
          }),
        $e && mr(v, I),
        C
      );
    }
    function _(v, h, g, x) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === qr &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case pa:
            e: {
              for (var C = g.key, N = h; N !== null; ) {
                if (N.key === C) {
                  if (((C = g.type), C === qr)) {
                    if (N.tag === 7) {
                      n(v, N.sibling),
                        (h = o(N, g.props.children)),
                        (h.return = v),
                        (v = h);
                      break e;
                    }
                  } else if (
                    N.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Bn &&
                      em(C) === N.type)
                  ) {
                    n(v, N.sibling),
                      (h = o(N, g.props)),
                      (h.ref = wi(v, N, g)),
                      (h.return = v),
                      (v = h);
                    break e;
                  }
                  n(v, N);
                  break;
                } else t(v, N);
                N = N.sibling;
              }
              g.type === qr
                ? ((h = kr(g.props.children, v.mode, x, g.key)),
                  (h.return = v),
                  (v = h))
                : ((x = gs(g.type, g.key, g.props, null, v.mode, x)),
                  (x.ref = wi(v, h, g)),
                  (x.return = v),
                  (v = x));
            }
            return a(v);
          case Hr:
            e: {
              for (N = g.key; h !== null; ) {
                if (h.key === N)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === g.containerInfo &&
                    h.stateNode.implementation === g.implementation
                  ) {
                    n(v, h.sibling),
                      (h = o(h, g.children || [])),
                      (h.return = v),
                      (v = h);
                    break e;
                  } else {
                    n(v, h);
                    break;
                  }
                else t(v, h);
                h = h.sibling;
              }
              (h = dd(g, v.mode, x)), (h.return = v), (v = h);
            }
            return a(v);
          case Bn:
            return (N = g._init), _(v, h, N(g._payload), x);
        }
        if (Go(g)) return b(v, h, g, x);
        if (Ko(g)) return S(v, h, g, x);
        Qa(v, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          h !== null && h.tag === 6
            ? (n(v, h.sibling), (h = o(h, g)), (h.return = v), (v = h))
            : (n(v, h), (h = cd(g, v.mode, x)), (h.return = v), (v = h)),
          a(v))
        : n(v, h);
    }
    return _;
  }
  var fo = tm(!0),
    nm = tm(!1),
    xi = {},
    fn = qn(xi),
    Si = qn(xi),
    ki = qn(xi);
  function yr(e) {
    if (e === xi) throw Error(D(174));
    return e;
  }
  function Rc(e, t) {
    switch ((Ne(ki, t), Ne(Si, e), Ne(fn, xi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Tu(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Tu(t, e));
    }
    Ie(fn), Ne(fn, t);
  }
  function po() {
    Ie(fn), Ie(Si), Ie(ki);
  }
  function rm(e) {
    yr(ki.current);
    var t = yr(fn.current),
      n = Tu(t, e.type);
    t !== n && (Ne(Si, e), Ne(fn, n));
  }
  function _c(e) {
    Si.current === e && (Ie(fn), Ie(Si));
  }
  var ze = qn(0);
  function Xa(e) {
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
  var Ic = [];
  function Pc() {
    for (var e = 0; e < Ic.length; e++)
      Ic[e]._workInProgressVersionPrimary = null;
    Ic.length = 0;
  }
  var Za = Cn.ReactCurrentDispatcher,
    Ac = Cn.ReactCurrentBatchConfig,
    br = 0,
    je = null,
    Ye = null,
    Xe = null,
    es = !1,
    Ei = !1,
    Ci = 0,
    aw = 0;
  function ct() {
    throw Error(D(321));
  }
  function $c(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!tn(e[n], t[n])) return !1;
    return !0;
  }
  function Mc(e, t, n, r, o, i) {
    if (
      ((br = i),
      (je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Za.current = e === null || e.memoizedState === null ? cw : dw),
      (e = n(r, o)),
      Ei)
    ) {
      i = 0;
      do {
        if (((Ei = !1), (Ci = 0), 25 <= i)) throw Error(D(301));
        (i += 1),
          (Xe = Ye = null),
          (t.updateQueue = null),
          (Za.current = fw),
          (e = n(r, o));
      } while (Ei);
    }
    if (
      ((Za.current = rs),
      (t = Ye !== null && Ye.next !== null),
      (br = 0),
      (Xe = Ye = je = null),
      (es = !1),
      t)
    )
      throw Error(D(300));
    return e;
  }
  function Lc() {
    var e = Ci !== 0;
    return (Ci = 0), e;
  }
  function pn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xe === null ? (je.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
  }
  function Wt() {
    if (Ye === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = Xe === null ? je.memoizedState : Xe.next;
    if (t !== null) (Xe = t), (Ye = e);
    else {
      if (e === null) throw Error(D(310));
      (Ye = e),
        (e = {
          memoizedState: Ye.memoizedState,
          baseState: Ye.baseState,
          baseQueue: Ye.baseQueue,
          queue: Ye.queue,
          next: null,
        }),
        Xe === null ? (je.memoizedState = Xe = e) : (Xe = Xe.next = e);
    }
    return Xe;
  }
  function Oi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bc(e) {
    var t = Wt(),
      n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = Ye,
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
        c = i;
      do {
        var f = c.lane;
        if ((br & f) === f)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            (r = c.hasEagerState ? c.eagerState : e(r, c.action));
        else {
          var p = {
            lane: f,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          };
          l === null ? ((s = l = p), (a = r)) : (l = l.next = p),
            (je.lanes |= f),
            (vr |= f);
        }
        c = c.next;
      } while (c !== null && c !== i);
      l === null ? (a = r) : (l.next = s),
        tn(r, t.memoizedState) || (xt = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (je.lanes |= i), (vr |= i), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function zc(e) {
    var t = Wt(),
      n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = (o = o.next);
      do (i = e(i, a.action)), (a = a.next);
      while (a !== o);
      tn(i, t.memoizedState) || (xt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function om() {}
  function im(e, t) {
    var n = je,
      r = Wt(),
      o = t(),
      i = !tn(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (xt = !0)),
      (r = r.queue),
      jc(lm.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Ni(9, sm.bind(null, n, r, o, t), void 0, null),
        Ze === null)
      )
        throw Error(D(349));
      br & 30 || am(n, t, o);
    }
    return o;
  }
  function am(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function sm(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), um(t) && cm(e);
  }
  function lm(e, t, n) {
    return n(function () {
      um(t) && cm(e);
    });
  }
  function um(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !tn(e, n);
    } catch {
      return !0;
    }
  }
  function cm(e) {
    var t = _n(e, 1);
    t !== null && sn(t, e, 1, -1);
  }
  function dm(e) {
    var t = pn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Oi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = uw.bind(null, je, e)),
      [t.memoizedState, e]
    );
  }
  function Ni(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function fm() {
    return Wt().memoizedState;
  }
  function ts(e, t, n, r) {
    var o = pn();
    (je.flags |= e),
      (o.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ns(e, t, n, r) {
    var o = Wt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ye !== null) {
      var a = Ye.memoizedState;
      if (((i = a.destroy), r !== null && $c(r, a.deps))) {
        o.memoizedState = Ni(t, n, i, r);
        return;
      }
    }
    (je.flags |= e), (o.memoizedState = Ni(1 | t, n, i, r));
  }
  function pm(e, t) {
    return ts(8390656, 8, e, t);
  }
  function jc(e, t) {
    return ns(2048, 8, e, t);
  }
  function hm(e, t) {
    return ns(4, 2, e, t);
  }
  function mm(e, t) {
    return ns(4, 4, e, t);
  }
  function gm(e, t) {
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
  function ym(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ns(4, 4, gm.bind(null, t, e), n)
    );
  }
  function Fc() {}
  function bm(e, t) {
    var n = Wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $c(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function vm(e, t) {
    var n = Wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $c(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function wm(e, t, n) {
    return br & 21
      ? (tn(n, t) ||
          ((n = qp()), (je.lanes |= n), (vr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (xt = !0)), (e.memoizedState = n));
  }
  function sw(e, t) {
    var n = Se;
    (Se = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ac.transition;
    Ac.transition = {};
    try {
      e(!1), t();
    } finally {
      (Se = n), (Ac.transition = r);
    }
  }
  function xm() {
    return Wt().memoizedState;
  }
  function lw(e, t, n) {
    var r = er(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Sm(e))
    )
      km(t, n);
    else if (((n = qh(e, t, n, r)), n !== null)) {
      var o = yt();
      sn(n, e, r, o), Em(n, t, r);
    }
  }
  function uw(e, t, n) {
    var r = er(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Sm(e)) km(t, o);
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
          if (((o.hasEagerState = !0), (o.eagerState = s), tn(s, a))) {
            var l = t.interleaved;
            l === null
              ? ((o.next = o), Cc(t))
              : ((o.next = l.next), (l.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = qh(e, t, o, r)),
        n !== null && ((o = yt()), sn(n, e, r, o), Em(n, t, r));
    }
  }
  function Sm(e) {
    var t = e.alternate;
    return e === je || (t !== null && t === je);
  }
  function km(e, t) {
    Ei = es = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Em(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fu(e, n);
    }
  }
  var rs = {
      readContext: Ut,
      useCallback: ct,
      useContext: ct,
      useEffect: ct,
      useImperativeHandle: ct,
      useInsertionEffect: ct,
      useLayoutEffect: ct,
      useMemo: ct,
      useReducer: ct,
      useRef: ct,
      useState: ct,
      useDebugValue: ct,
      useDeferredValue: ct,
      useTransition: ct,
      useMutableSource: ct,
      useSyncExternalStore: ct,
      useId: ct,
      unstable_isNewReconciler: !1,
    },
    cw = {
      readContext: Ut,
      useCallback: function (e, t) {
        return (pn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ut,
      useEffect: pm,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ts(4194308, 4, gm.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ts(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ts(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = pn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = pn();
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
          (e = e.dispatch = lw.bind(null, je, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = pn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: dm,
      useDebugValue: Fc,
      useDeferredValue: function (e) {
        return (pn().memoizedState = e);
      },
      useTransition: function () {
        var e = dm(!1),
          t = e[0];
        return (e = sw.bind(null, e[1])), (pn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = je,
          o = pn();
        if ($e) {
          if (n === void 0) throw Error(D(407));
          n = n();
        } else {
          if (((n = t()), Ze === null)) throw Error(D(349));
          br & 30 || am(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          pm(lm.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Ni(9, sm.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = pn(),
          t = Ze.identifierPrefix;
        if ($e) {
          var n = Rn,
            r = Tn;
          (n = (r & ~(1 << (32 - en(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Ci++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = aw++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    dw = {
      readContext: Ut,
      useCallback: bm,
      useContext: Ut,
      useEffect: jc,
      useImperativeHandle: ym,
      useInsertionEffect: hm,
      useLayoutEffect: mm,
      useMemo: vm,
      useReducer: Bc,
      useRef: fm,
      useState: function () {
        return Bc(Oi);
      },
      useDebugValue: Fc,
      useDeferredValue: function (e) {
        var t = Wt();
        return wm(t, Ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Bc(Oi)[0],
          t = Wt().memoizedState;
        return [e, t];
      },
      useMutableSource: om,
      useSyncExternalStore: im,
      useId: xm,
      unstable_isNewReconciler: !1,
    },
    fw = {
      readContext: Ut,
      useCallback: bm,
      useContext: Ut,
      useEffect: jc,
      useImperativeHandle: ym,
      useInsertionEffect: hm,
      useLayoutEffect: mm,
      useMemo: vm,
      useReducer: zc,
      useRef: fm,
      useState: function () {
        return zc(Oi);
      },
      useDebugValue: Fc,
      useDeferredValue: function (e) {
        var t = Wt();
        return Ye === null ? (t.memoizedState = e) : wm(t, Ye.memoizedState, e);
      },
      useTransition: function () {
        var e = zc(Oi)[0],
          t = Wt().memoizedState;
        return [e, t];
      },
      useMutableSource: om,
      useSyncExternalStore: im,
      useId: xm,
      unstable_isNewReconciler: !1,
    };
  function ho(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Fv(r)), (r = r.return);
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
  function Dc(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Uc(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var pw = typeof WeakMap == "function" ? WeakMap : Map;
  function Cm(e, t, n) {
    (n = In(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        cs || ((cs = !0), (nd = r)), Uc(e, t);
      }),
      n
    );
  }
  function Om(e, t, n) {
    (n = In(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          Uc(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Uc(e, t),
            typeof r != "function" &&
              (Xn === null ? (Xn = new Set([this])) : Xn.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function Nm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new pw();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = Nw.bind(null, e, t, n)), t.then(e, e));
  }
  function Tm(e) {
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
  function Rm(e, t, n, r, o) {
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
                : ((t = In(-1, 1)), (t.tag = 2), Yn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var hw = Cn.ReactCurrentOwner,
    xt = !1;
  function gt(e, t, n, r) {
    t.child = e === null ? nm(t, null, n, r) : fo(t, e.child, n, r);
  }
  function _m(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      co(t, o),
      (r = Mc(e, t, n, r, i, o)),
      (n = Lc()),
      e !== null && !xt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Pn(e, t, o))
        : ($e && n && gc(t), (t.flags |= 1), gt(e, t, r, o), t.child)
    );
  }
  function Im(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !ud(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Pm(e, t, i, r, o))
        : ((e = gs(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var a = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : pi), n(a, r) && e.ref === t.ref)
      )
        return Pn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = nr(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Pm(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (pi(i, r) && e.ref === t.ref)
        if (((xt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (xt = !0);
        else return (t.lanes = e.lanes), Pn(e, t, o);
    }
    return Wc(e, t, n, r, o);
  }
  function Am(e, t, n) {
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
          Ne(go, Mt),
          (Mt |= n);
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
            Ne(go, Mt),
            (Mt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          Ne(go, Mt),
          (Mt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Ne(go, Mt),
        (Mt |= r);
    return gt(e, t, o, n), t.child;
  }
  function $m(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Wc(e, t, n, r, o) {
    var i = wt(n) ? pr : ut.current;
    return (
      (i = io(t, i)),
      co(t, o),
      (n = Mc(e, t, n, r, i, o)),
      (r = Lc()),
      e !== null && !xt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Pn(e, t, o))
        : ($e && r && gc(t), (t.flags |= 1), gt(e, t, n, o), t.child)
    );
  }
  function Mm(e, t, n, r, o) {
    if (wt(n)) {
      var i = !0;
      Da(t);
    } else i = !1;
    if ((co(t, o), t.stateNode === null))
      is(e, t), Xh(t, n, r), Tc(t, n, r, o), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var l = a.context,
        c = n.contextType;
      typeof c == "object" && c !== null
        ? (c = Ut(c))
        : ((c = wt(n) ? pr : ut.current), (c = io(t, c)));
      var f = n.getDerivedStateFromProps,
        p =
          typeof f == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      p ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== r || l !== c) && Zh(t, a, r, c)),
        (Gn = !1);
      var m = t.memoizedState;
      (a.state = m),
        Ga(t, r, a, o),
        (l = t.memoizedState),
        s !== r || m !== l || vt.current || Gn
          ? (typeof f == "function" && (Nc(t, n, f, r), (l = t.memoizedState)),
            (s = Gn || Qh(t, n, s, r, m, l, c))
              ? (p ||
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
            (a.context = c),
            (r = s))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        Kh(e, t),
        (s = t.memoizedProps),
        (c = t.type === t.elementType ? s : rn(t.type, s)),
        (a.props = c),
        (p = t.pendingProps),
        (m = a.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = Ut(l))
          : ((l = wt(n) ? pr : ut.current), (l = io(t, l)));
      var w = n.getDerivedStateFromProps;
      (f =
        typeof w == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== p || m !== l) && Zh(t, a, r, l)),
        (Gn = !1),
        (m = t.memoizedState),
        (a.state = m),
        Ga(t, r, a, o);
      var b = t.memoizedState;
      s !== p || m !== b || vt.current || Gn
        ? (typeof w == "function" && (Nc(t, n, w, r), (b = t.memoizedState)),
          (c = Gn || Qh(t, n, c, r, m, b, l) || !1)
            ? (f ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, b, l),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, b, l)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (s === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = b)),
          (a.props = r),
          (a.state = b),
          (a.context = l),
          (r = c))
        : (typeof a.componentDidUpdate != "function" ||
            (s === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Vc(e, t, n, r, i, o);
  }
  function Vc(e, t, n, r, o, i) {
    $m(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && jh(t, n, !1), Pn(e, t, i);
    (r = t.stateNode), (hw.current = t);
    var s =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = fo(t, e.child, null, i)), (t.child = fo(t, null, s, i)))
        : gt(e, t, s, i),
      (t.memoizedState = r.state),
      o && jh(t, n, !0),
      t.child
    );
  }
  function Lm(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Bh(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Bh(e, t.context, !1),
      Rc(e, t.containerInfo);
  }
  function Bm(e, t, n, r, o) {
    return lo(), wc(o), (t.flags |= 256), gt(e, t, n, r), t.child;
  }
  var Hc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function zm(e, t, n) {
    var r = t.pendingProps,
      o = ze.current,
      i = !1,
      a = (t.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      s
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      Ne(ze, o & 1),
      e === null)
    )
      return (
        vc(t),
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
                  : (i = ys(a, r, 0, null)),
                (e = kr(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = qc(n)),
                (t.memoizedState = Hc),
                e)
              : Kc(t, a))
      );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
      return mw(e, t, a, r, s, o, n);
    if (i) {
      (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(a & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = nr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        s !== null ? (i = nr(s, i)) : ((i = kr(i, a, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? qc(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Hc),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = nr(i, { mode: "visible", children: r.children })),
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
  function Kc(e, t) {
    return (
      (t = ys({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function os(e, t, n, r) {
    return (
      r !== null && wc(r),
      fo(t, e.child, null, n),
      (e = Kc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function mw(e, t, n, r, o, i, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Dc(Error(D(422)))), os(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ys({ mode: "visible", children: r.children }, o, 0, null)),
          (i = kr(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && fo(t, e.child, null, a),
          (t.child.memoizedState = qc(a)),
          (t.memoizedState = Hc),
          i);
    if (!(t.mode & 1)) return os(e, t, a, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (i = Error(D(419))), (r = Dc(i, r, void 0)), os(e, t, a, r)
      );
    }
    if (((s = (a & e.childLanes) !== 0), xt || s)) {
      if (((r = Ze), r !== null)) {
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
            ((i.retryLane = o), _n(e, o), sn(r, e, o, -1));
      }
      return ld(), (r = Dc(Error(D(421)))), os(e, t, a, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Tw.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        ($t = Hn(o.nextSibling)),
        (At = t),
        ($e = !0),
        (nn = null),
        e !== null &&
          ((Ft[Dt++] = Tn),
          (Ft[Dt++] = Rn),
          (Ft[Dt++] = hr),
          (Tn = e.id),
          (Rn = e.overflow),
          (hr = t)),
        (t = Kc(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function jm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ec(e.return, t, n);
  }
  function Jc(e, t, n, r, o) {
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
  function Fm(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((gt(e, t, r.children, n), (r = ze.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && jm(e, n, t);
          else if (e.tag === 19) jm(e, n, t);
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
    if ((Ne(ze, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && Xa(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            Jc(t, !1, o, n, i);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && Xa(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          Jc(t, !0, n, null, i);
          break;
        case "together":
          Jc(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function is(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Pn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (vr |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(D(153));
    if (t.child !== null) {
      for (
        e = t.child, n = nr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = nr(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function gw(e, t, n) {
    switch (t.tag) {
      case 3:
        Lm(t), lo();
        break;
      case 5:
        rm(t);
        break;
      case 1:
        wt(t.type) && Da(t);
        break;
      case 4:
        Rc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        Ne(qa, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Ne(ze, ze.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? zm(e, t, n)
            : (Ne(ze, ze.current & 1),
              (e = Pn(e, t, n)),
              e !== null ? e.sibling : null);
        Ne(ze, ze.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Fm(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Ne(ze, ze.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Am(e, t, n);
    }
    return Pn(e, t, n);
  }
  var Dm, Gc, Um, Wm;
  (Dm = function (e, t) {
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
    (Gc = function () {}),
    (Um = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), yr(fn.current);
        var i = null;
        switch (n) {
          case "input":
            (o = Eu(e, o)), (r = Eu(e, r)), (i = []);
            break;
          case "select":
            (o = Be({}, o, { value: void 0 })),
              (r = Be({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (o = Nu(e, o)), (r = Nu(e, r)), (i = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = za);
        }
        Ru(n, r);
        var a;
        n = null;
        for (c in o)
          if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
            if (c === "style") {
              var s = o[c];
              for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              c !== "dangerouslySetInnerHTML" &&
                c !== "children" &&
                c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                c !== "autoFocus" &&
                (qo.hasOwnProperty(c)
                  ? i || (i = [])
                  : (i = i || []).push(c, null));
        for (c in r) {
          var l = r[c];
          if (
            ((s = o == null ? void 0 : o[c]),
            r.hasOwnProperty(c) && l !== s && (l != null || s != null))
          )
            if (c === "style")
              if (s) {
                for (a in s)
                  !s.hasOwnProperty(a) ||
                    (l && l.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in l)
                  l.hasOwnProperty(a) &&
                    s[a] !== l[a] &&
                    (n || (n = {}), (n[a] = l[a]));
              } else n || (i || (i = []), i.push(c, n)), (n = l);
            else
              c === "dangerouslySetInnerHTML"
                ? ((l = l ? l.__html : void 0),
                  (s = s ? s.__html : void 0),
                  l != null && s !== l && (i = i || []).push(c, l))
                : c === "children"
                ? (typeof l != "string" && typeof l != "number") ||
                  (i = i || []).push(c, "" + l)
                : c !== "suppressContentEditableWarning" &&
                  c !== "suppressHydrationWarning" &&
                  (qo.hasOwnProperty(c)
                    ? (l != null && c === "onScroll" && _e("scroll", e),
                      i || s === l || (i = []))
                    : (i = i || []).push(c, l));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4);
      }
    }),
    (Wm = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Ti(e, t) {
    if (!$e)
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
  function dt(e) {
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
  function yw(e, t, n) {
    var r = t.pendingProps;
    switch ((yc(t), t.tag)) {
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
        return dt(t), null;
      case 1:
        return wt(t.type) && Fa(), dt(t), null;
      case 3:
        return (
          (r = t.stateNode),
          po(),
          Ie(vt),
          Ie(ut),
          Pc(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ha(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), nn !== null && (id(nn), (nn = null)))),
          Gc(e, t),
          dt(t),
          null
        );
      case 5:
        _c(t);
        var o = yr(ki.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Um(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(D(166));
            return dt(t), null;
          }
          if (((e = yr(fn.current)), Ha(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[dn] = t), (r[bi] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                _e("cancel", r), _e("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < mi.length; o++) _e(mi[o], r);
                break;
              case "source":
                _e("error", r);
                break;
              case "img":
              case "image":
              case "link":
                _e("error", r), _e("load", r);
                break;
              case "details":
                _e("toggle", r);
                break;
              case "input":
                Sp(r, i), _e("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  _e("invalid", r);
                break;
              case "textarea":
                Cp(r, i), _e("invalid", r);
            }
            Ru(n, i), (o = null);
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var s = i[a];
                a === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Ba(r.textContent, s, e),
                      (o = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Ba(r.textContent, s, e),
                      (o = ["children", "" + s]))
                  : qo.hasOwnProperty(a) &&
                    s != null &&
                    a === "onScroll" &&
                    _e("scroll", r);
              }
            switch (n) {
              case "input":
                ha(r), Ep(r, i, !0);
                break;
              case "textarea":
                ha(r), Np(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = za);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Tp(n)),
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
              (e[dn] = t),
              (e[bi] = r),
              Dm(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = _u(n, r)), n)) {
                case "dialog":
                  _e("cancel", e), _e("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  _e("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < mi.length; o++) _e(mi[o], e);
                  o = r;
                  break;
                case "source":
                  _e("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  _e("error", e), _e("load", e), (o = r);
                  break;
                case "details":
                  _e("toggle", e), (o = r);
                  break;
                case "input":
                  Sp(e, r), (o = Eu(e, r)), _e("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = Be({}, r, { value: void 0 })),
                    _e("invalid", e);
                  break;
                case "textarea":
                  Cp(e, r), (o = Nu(e, r)), _e("invalid", e);
                  break;
                default:
                  o = r;
              }
              Ru(n, o), (s = o);
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var l = s[i];
                  i === "style"
                    ? Ip(e, l)
                    : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Rp(e, l))
                    : i === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Yo(e, l)
                      : typeof l == "number" && Yo(e, "" + l)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (qo.hasOwnProperty(i)
                        ? l != null && i === "onScroll" && _e("scroll", e)
                        : l != null && pu(e, i, l, a));
                }
              switch (n) {
                case "input":
                  ha(e), Ep(e, r, !1);
                  break;
                case "textarea":
                  ha(e), Np(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + zn(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Kr(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        Kr(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = za);
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
        return dt(t), null;
      case 6:
        if (e && t.stateNode != null) Wm(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
          if (((n = yr(ki.current)), yr(fn.current), Ha(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dn] = t),
              (i = r.nodeValue !== n) && ((e = At), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ba(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ba(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dn] = t),
              (t.stateNode = r);
        }
        return dt(t), null;
      case 13:
        if (
          (Ie(ze),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if ($e && $t !== null && t.mode & 1 && !(t.flags & 128))
            Hh(), lo(), (t.flags |= 98560), (i = !1);
          else if (((i = Ha(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(D(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(D(317));
              i[dn] = t;
            } else
              lo(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            dt(t), (i = !1);
          } else nn !== null && (id(nn), (nn = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ze.current & 1 ? Qe === 0 && (Qe = 3) : ld())),
            t.updateQueue !== null && (t.flags |= 4),
            dt(t),
            null);
      case 4:
        return (
          po(),
          Gc(e, t),
          e === null && gi(t.stateNode.containerInfo),
          dt(t),
          null
        );
      case 10:
        return kc(t.type._context), dt(t), null;
      case 17:
        return wt(t.type) && Fa(), dt(t), null;
      case 19:
        if ((Ie(ze), (i = t.memoizedState), i === null)) return dt(t), null;
        if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (r) Ti(i, !1);
          else {
            if (Qe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = Xa(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      Ti(i, !1),
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
                  return Ne(ze, (ze.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              qe() > yo &&
              ((t.flags |= 128), (r = !0), Ti(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Xa(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Ti(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !$e)
              )
                return dt(t), null;
            } else
              2 * qe() - i.renderingStartTime > yo &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Ti(i, !1), (t.lanes = 4194304));
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
            (i.renderingStartTime = qe()),
            (t.sibling = null),
            (n = ze.current),
            Ne(ze, r ? (n & 1) | 2 : n & 1),
            t)
          : (dt(t), null);
      case 22:
      case 23:
        return (
          sd(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Mt & 1073741824 &&
              (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(D(156, t.tag));
  }
  function bw(e, t) {
    switch ((yc(t), t.tag)) {
      case 1:
        return (
          wt(t.type) && Fa(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          po(),
          Ie(vt),
          Ie(ut),
          Pc(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return _c(t), null;
      case 13:
        if (
          (Ie(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(D(340));
          lo();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ie(ze), null;
      case 4:
        return po(), null;
      case 10:
        return kc(t.type._context), null;
      case 22:
      case 23:
        return sd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var as = !1,
    ft = !1,
    vw = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
  function mo(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ue(e, t, r);
        }
      else n.current = null;
  }
  function Vm(e, t, n) {
    try {
      n();
    } catch (r) {
      Ue(e, t, r);
    }
  }
  var Hm = !1;
  function ww(e, t) {
    if (((lc = Oa), (e = xh()), ec(e))) {
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
              c = 0,
              f = 0,
              p = e,
              m = null;
            t: for (;;) {
              for (
                var w;
                p !== n || (o !== 0 && p.nodeType !== 3) || (s = a + o),
                  p !== i || (r !== 0 && p.nodeType !== 3) || (l = a + r),
                  p.nodeType === 3 && (a += p.nodeValue.length),
                  (w = p.firstChild) !== null;

              )
                (m = p), (p = w);
              for (;;) {
                if (p === e) break t;
                if (
                  (m === n && ++c === o && (s = a),
                  m === i && ++f === r && (l = a),
                  (w = p.nextSibling) !== null)
                )
                  break;
                (p = m), (m = p.parentNode);
              }
              p = w;
            }
            n = s === -1 || l === -1 ? null : { start: s, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      uc = { focusedElem: e, selectionRange: n }, Oa = !1, K = t;
      K !== null;

    )
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (K = e);
      else
        for (; K !== null; ) {
          t = K;
          try {
            var b = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (b !== null) {
                    var S = b.memoizedProps,
                      _ = b.memoizedState,
                      v = t.stateNode,
                      h = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? S : rn(t.type, S),
                        _,
                      );
                    v.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(D(163));
              }
          } catch (x) {
            Ue(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (K = e);
            break;
          }
          K = t.return;
        }
    return (b = Hm), (Hm = !1), b;
  }
  function Ri(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && Vm(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function ss(e, t) {
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
  function Yc(e) {
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
  function qm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), qm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[dn],
          delete t[bi],
          delete t[pc],
          delete t[nw],
          delete t[rw])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Km(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Jm(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Km(e.return)) return null;
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
  function Qc(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = za));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Qc(e, t, n), e = e.sibling; e !== null; )
        Qc(e, t, n), (e = e.sibling);
  }
  function Xc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Xc(e, t, n), e = e.sibling; e !== null; )
        Xc(e, t, n), (e = e.sibling);
  }
  var rt = null,
    on = !1;
  function Qn(e, t, n) {
    for (n = n.child; n !== null; ) Gm(e, t, n), (n = n.sibling);
  }
  function Gm(e, t, n) {
    if (cn && typeof cn.onCommitFiberUnmount == "function")
      try {
        cn.onCommitFiberUnmount(wa, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ft || mo(n, t);
      case 6:
        var r = rt,
          o = on;
        (rt = null),
          Qn(e, t, n),
          (rt = r),
          (on = o),
          rt !== null &&
            (on
              ? ((e = rt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : rt.removeChild(n.stateNode));
        break;
      case 18:
        rt !== null &&
          (on
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8
                ? fc(e.parentNode, n)
                : e.nodeType === 1 && fc(e, n),
              si(e))
            : fc(rt, n.stateNode));
        break;
      case 4:
        (r = rt),
          (o = on),
          (rt = n.stateNode.containerInfo),
          (on = !0),
          Qn(e, t, n),
          (rt = r),
          (on = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ft &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              a = i.destroy;
            (i = i.tag),
              a !== void 0 && (i & 2 || i & 4) && Vm(n, t, a),
              (o = o.next);
          } while (o !== r);
        }
        Qn(e, t, n);
        break;
      case 1:
        if (
          !ft &&
          (mo(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (s) {
            Ue(n, t, s);
          }
        Qn(e, t, n);
        break;
      case 21:
        Qn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ft = (r = ft) || n.memoizedState !== null), Qn(e, t, n), (ft = r))
          : Qn(e, t, n);
        break;
      default:
        Qn(e, t, n);
    }
  }
  function Ym(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new vw()),
        t.forEach(function (r) {
          var o = Rw.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function an(e, t) {
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
                (rt = s.stateNode), (on = !1);
                break e;
              case 3:
                (rt = s.stateNode.containerInfo), (on = !0);
                break e;
              case 4:
                (rt = s.stateNode.containerInfo), (on = !0);
                break e;
            }
            s = s.return;
          }
          if (rt === null) throw Error(D(160));
          Gm(i, a, o), (rt = null), (on = !1);
          var l = o.alternate;
          l !== null && (l.return = null), (o.return = null);
        } catch (c) {
          Ue(o, t, c);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Qm(t, e), (t = t.sibling);
  }
  function Qm(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((an(t, e), hn(e), r & 4)) {
          try {
            Ri(3, e, e.return), ss(3, e);
          } catch (S) {
            Ue(e, e.return, S);
          }
          try {
            Ri(5, e, e.return);
          } catch (S) {
            Ue(e, e.return, S);
          }
        }
        break;
      case 1:
        an(t, e), hn(e), r & 512 && n !== null && mo(n, n.return);
        break;
      case 5:
        if (
          (an(t, e),
          hn(e),
          r & 512 && n !== null && mo(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Yo(o, "");
          } catch (S) {
            Ue(e, e.return, S);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            a = n !== null ? n.memoizedProps : i,
            s = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              s === "input" && i.type === "radio" && i.name != null && kp(o, i),
                _u(s, a);
              var c = _u(s, i);
              for (a = 0; a < l.length; a += 2) {
                var f = l[a],
                  p = l[a + 1];
                f === "style"
                  ? Ip(o, p)
                  : f === "dangerouslySetInnerHTML"
                  ? Rp(o, p)
                  : f === "children"
                  ? Yo(o, p)
                  : pu(o, f, p, c);
              }
              switch (s) {
                case "input":
                  Cu(o, i);
                  break;
                case "textarea":
                  Op(o, i);
                  break;
                case "select":
                  var m = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var w = i.value;
                  w != null
                    ? Kr(o, !!i.multiple, w, !1)
                    : m !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Kr(o, !!i.multiple, i.defaultValue, !0)
                        : Kr(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[bi] = i;
            } catch (S) {
              Ue(e, e.return, S);
            }
        }
        break;
      case 6:
        if ((an(t, e), hn(e), r & 4)) {
          if (e.stateNode === null) throw Error(D(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (S) {
            Ue(e, e.return, S);
          }
        }
        break;
      case 3:
        if (
          (an(t, e), hn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            si(t.containerInfo);
          } catch (S) {
            Ue(e, e.return, S);
          }
        break;
      case 4:
        an(t, e), hn(e);
        break;
      case 13:
        an(t, e),
          hn(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (td = qe())),
          r & 4 && Ym(e);
        break;
      case 22:
        if (
          ((f = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ft = (c = ft) || f), an(t, e), (ft = c)) : an(t, e),
          hn(e),
          r & 8192)
        ) {
          if (
            ((c = e.memoizedState !== null),
            (e.stateNode.isHidden = c) && !f && e.mode & 1)
          )
            for (K = e, f = e.child; f !== null; ) {
              for (p = K = f; K !== null; ) {
                switch (((m = K), (w = m.child), m.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ri(4, m, m.return);
                    break;
                  case 1:
                    mo(m, m.return);
                    var b = m.stateNode;
                    if (typeof b.componentWillUnmount == "function") {
                      (r = m), (n = m.return);
                      try {
                        (t = r),
                          (b.props = t.memoizedProps),
                          (b.state = t.memoizedState),
                          b.componentWillUnmount();
                      } catch (S) {
                        Ue(r, n, S);
                      }
                    }
                    break;
                  case 5:
                    mo(m, m.return);
                    break;
                  case 22:
                    if (m.memoizedState !== null) {
                      eg(p);
                      continue;
                    }
                }
                w !== null ? ((w.return = m), (K = w)) : eg(p);
              }
              f = f.sibling;
            }
          e: for (f = null, p = e; ; ) {
            if (p.tag === 5) {
              if (f === null) {
                f = p;
                try {
                  (o = p.stateNode),
                    c
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((s = p.stateNode),
                        (l = p.memoizedProps.style),
                        (a =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (s.style.display = _p("display", a)));
                } catch (S) {
                  Ue(e, e.return, S);
                }
              }
            } else if (p.tag === 6) {
              if (f === null)
                try {
                  p.stateNode.nodeValue = c ? "" : p.memoizedProps;
                } catch (S) {
                  Ue(e, e.return, S);
                }
            } else if (
              ((p.tag !== 22 && p.tag !== 23) ||
                p.memoizedState === null ||
                p === e) &&
              p.child !== null
            ) {
              (p.child.return = p), (p = p.child);
              continue;
            }
            if (p === e) break e;
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e) break e;
              f === p && (f = null), (p = p.return);
            }
            f === p && (f = null),
              (p.sibling.return = p.return),
              (p = p.sibling);
          }
        }
        break;
      case 19:
        an(t, e), hn(e), r & 4 && Ym(e);
        break;
      case 21:
        break;
      default:
        an(t, e), hn(e);
    }
  }
  function hn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Km(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(D(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Yo(o, ""), (r.flags &= -33));
            var i = Jm(e);
            Xc(e, i, o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              s = Jm(e);
            Qc(e, s, a);
            break;
          default:
            throw Error(D(161));
        }
      } catch (l) {
        Ue(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xw(e, t, n) {
    (K = e), Xm(e);
  }
  function Xm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var o = K,
        i = o.child;
      if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || as;
        if (!a) {
          var s = o.alternate,
            l = (s !== null && s.memoizedState !== null) || ft;
          s = as;
          var c = ft;
          if (((as = a), (ft = l) && !c))
            for (K = o; K !== null; )
              (a = K),
                (l = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? tg(o)
                  : l !== null
                  ? ((l.return = a), (K = l))
                  : tg(o);
          for (; i !== null; ) (K = i), Xm(i), (i = i.sibling);
          (K = o), (as = s), (ft = c);
        }
        Zm(e);
      } else
        o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (K = i)) : Zm(e);
    }
  }
  function Zm(e) {
    for (; K !== null; ) {
      var t = K;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ft || ss(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ft)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : rn(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && Gh(t, i, r);
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
                  Gh(t, a, n);
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
                  var c = t.alternate;
                  if (c !== null) {
                    var f = c.memoizedState;
                    if (f !== null) {
                      var p = f.dehydrated;
                      p !== null && si(p);
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
                throw Error(D(163));
            }
          ft || (t.flags & 512 && Yc(t));
        } catch (m) {
          Ue(t, t.return, m);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function eg(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function tg(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ss(4, t);
            } catch (l) {
              Ue(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                Ue(t, o, l);
              }
            }
            var i = t.return;
            try {
              Yc(t);
            } catch (l) {
              Ue(t, i, l);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Yc(t);
            } catch (l) {
              Ue(t, a, l);
            }
        }
      } catch (l) {
        Ue(t, t.return, l);
      }
      if (t === e) {
        K = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (K = s);
        break;
      }
      K = t.return;
    }
  }
  var Sw = Math.ceil,
    ls = Cn.ReactCurrentDispatcher,
    Zc = Cn.ReactCurrentOwner,
    Vt = Cn.ReactCurrentBatchConfig,
    me = 0,
    Ze = null,
    Ke = null,
    ot = 0,
    Mt = 0,
    go = qn(0),
    Qe = 0,
    _i = null,
    vr = 0,
    us = 0,
    ed = 0,
    Ii = null,
    St = null,
    td = 0,
    yo = 1 / 0,
    An = null,
    cs = !1,
    nd = null,
    Xn = null,
    ds = !1,
    Zn = null,
    fs = 0,
    Pi = 0,
    rd = null,
    ps = -1,
    hs = 0;
  function yt() {
    return me & 6 ? qe() : ps !== -1 ? ps : (ps = qe());
  }
  function er(e) {
    return e.mode & 1
      ? me & 2 && ot !== 0
        ? ot & -ot
        : iw.transition !== null
        ? (hs === 0 && (hs = qp()), hs)
        : ((e = Se),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : th(e.type))),
          e)
      : 1;
  }
  function sn(e, t, n, r) {
    if (50 < Pi) throw ((Pi = 0), (rd = null), Error(D(185)));
    ni(e, n, r),
      (!(me & 2) || e !== Ze) &&
        (e === Ze && (!(me & 2) && (us |= n), Qe === 4 && tr(e, ot)),
        kt(e, r),
        n === 1 &&
          me === 0 &&
          !(t.mode & 1) &&
          ((yo = qe() + 500), Ua && Jn()));
  }
  function kt(e, t) {
    var n = e.callbackNode;
    i1(e, t);
    var r = ka(e, e === Ze ? ot : 0);
    if (r === 0)
      n !== null && Wp(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Wp(n), t === 1))
        e.tag === 0 ? ow(rg.bind(null, e)) : Fh(rg.bind(null, e)),
          ew(function () {
            !(me & 6) && Jn();
          }),
          (n = null);
      else {
        switch (Kp(r)) {
          case 1:
            n = Bu;
            break;
          case 4:
            n = Vp;
            break;
          case 16:
            n = va;
            break;
          case 536870912:
            n = Hp;
            break;
          default:
            n = va;
        }
        n = dg(n, ng.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ng(e, t) {
    if (((ps = -1), (hs = 0), me & 6)) throw Error(D(327));
    var n = e.callbackNode;
    if (bo() && e.callbackNode !== n) return null;
    var r = ka(e, e === Ze ? ot : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
    else {
      t = r;
      var o = me;
      me |= 2;
      var i = ig();
      (Ze !== e || ot !== t) && ((An = null), (yo = qe() + 500), xr(e, t));
      do
        try {
          Cw();
          break;
        } catch (s) {
          og(e, s);
        }
      while (1);
      Sc(),
        (ls.current = i),
        (me = o),
        Ke !== null ? (t = 0) : ((Ze = null), (ot = 0), (t = Qe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = zu(e)), o !== 0 && ((r = o), (t = od(e, o)))),
        t === 1)
      )
        throw ((n = _i), xr(e, 0), tr(e, r), kt(e, qe()), n);
      if (t === 6) tr(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !kw(o) &&
            ((t = ms(e, r)),
            t === 2 && ((i = zu(e)), i !== 0 && ((r = i), (t = od(e, i)))),
            t === 1))
        )
          throw ((n = _i), xr(e, 0), tr(e, r), kt(e, qe()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            Sr(e, St, An);
            break;
          case 3:
            if (
              (tr(e, r),
              (r & 130023424) === r && ((t = td + 500 - qe()), 10 < t))
            ) {
              if (ka(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                yt(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = dc(Sr.bind(null, e, St, An), t);
              break;
            }
            Sr(e, St, An);
            break;
          case 4:
            if ((tr(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var a = 31 - en(r);
              (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
            }
            if (
              ((r = o),
              (r = qe() - r),
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
                  : 1960 * Sw(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = dc(Sr.bind(null, e, St, An), r);
              break;
            }
            Sr(e, St, An);
            break;
          case 5:
            Sr(e, St, An);
            break;
          default:
            throw Error(D(329));
        }
      }
    }
    return kt(e, qe()), e.callbackNode === n ? ng.bind(null, e) : null;
  }
  function od(e, t) {
    var n = Ii;
    return (
      e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256),
      (e = ms(e, t)),
      e !== 2 && ((t = St), (St = n), t !== null && id(t)),
      e
    );
  }
  function id(e) {
    St === null ? (St = e) : St.push.apply(St, e);
  }
  function kw(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!tn(i(), o)) return !1;
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
  function tr(e, t) {
    for (
      t &= ~ed,
        t &= ~us,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - en(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function rg(e) {
    if (me & 6) throw Error(D(327));
    bo();
    var t = ka(e, 0);
    if (!(t & 1)) return kt(e, qe()), null;
    var n = ms(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = zu(e);
      r !== 0 && ((t = r), (n = od(e, r)));
    }
    if (n === 1) throw ((n = _i), xr(e, 0), tr(e, t), kt(e, qe()), n);
    if (n === 6) throw Error(D(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Sr(e, St, An),
      kt(e, qe()),
      null
    );
  }
  function ad(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      (me = n), me === 0 && ((yo = qe() + 500), Ua && Jn());
    }
  }
  function wr(e) {
    Zn !== null && Zn.tag === 0 && !(me & 6) && bo();
    var t = me;
    me |= 1;
    var n = Vt.transition,
      r = Se;
    try {
      if (((Vt.transition = null), (Se = 1), e)) return e();
    } finally {
      (Se = r), (Vt.transition = n), (me = t), !(me & 6) && Jn();
    }
  }
  function sd() {
    (Mt = go.current), Ie(go);
  }
  function xr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Z1(n)), Ke !== null))
      for (n = Ke.return; n !== null; ) {
        var r = n;
        switch ((yc(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Fa();
            break;
          case 3:
            po(), Ie(vt), Ie(ut), Pc();
            break;
          case 5:
            _c(r);
            break;
          case 4:
            po();
            break;
          case 13:
            Ie(ze);
            break;
          case 19:
            Ie(ze);
            break;
          case 10:
            kc(r.type._context);
            break;
          case 22:
          case 23:
            sd();
        }
        n = n.return;
      }
    if (
      ((Ze = e),
      (Ke = e = nr(e.current, null)),
      (ot = Mt = t),
      (Qe = 0),
      (_i = null),
      (ed = us = vr = 0),
      (St = Ii = null),
      gr !== null)
    ) {
      for (t = 0; t < gr.length; t++)
        if (((n = gr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var a = i.next;
            (i.next = o), (r.next = a);
          }
          n.pending = r;
        }
      gr = null;
    }
    return e;
  }
  function og(e, t) {
    do {
      var n = Ke;
      try {
        if ((Sc(), (Za.current = rs), es)) {
          for (var r = je.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          es = !1;
        }
        if (
          ((br = 0),
          (Xe = Ye = je = null),
          (Ei = !1),
          (Ci = 0),
          (Zc.current = null),
          n === null || n.return === null)
        ) {
          (Qe = 1), (_i = t), (Ke = null);
          break;
        }
        e: {
          var i = e,
            a = n.return,
            s = n,
            l = t;
          if (
            ((t = ot),
            (s.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var c = l,
              f = s,
              p = f.tag;
            if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
              var m = f.alternate;
              m
                ? ((f.updateQueue = m.updateQueue),
                  (f.memoizedState = m.memoizedState),
                  (f.lanes = m.lanes))
                : ((f.updateQueue = null), (f.memoizedState = null));
            }
            var w = Tm(a);
            if (w !== null) {
              (w.flags &= -257),
                Rm(w, a, s, i, t),
                w.mode & 1 && Nm(i, c, t),
                (t = w),
                (l = c);
              var b = t.updateQueue;
              if (b === null) {
                var S = new Set();
                S.add(l), (t.updateQueue = S);
              } else b.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Nm(i, c, t), ld();
                break e;
              }
              l = Error(D(426));
            }
          } else if ($e && s.mode & 1) {
            var _ = Tm(a);
            if (_ !== null) {
              !(_.flags & 65536) && (_.flags |= 256),
                Rm(_, a, s, i, t),
                wc(ho(l, s));
              break e;
            }
          }
          (i = l = ho(l, s)),
            Qe !== 4 && (Qe = 2),
            Ii === null ? (Ii = [i]) : Ii.push(i),
            (i = a);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Cm(i, l, t);
                Jh(i, v);
                break e;
              case 1:
                s = l;
                var h = i.type,
                  g = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (Xn === null || !Xn.has(g))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var x = Om(i, s, t);
                  Jh(i, x);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        sg(n);
      } catch (C) {
        (t = C), Ke === n && n !== null && (Ke = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function ig() {
    var e = ls.current;
    return (ls.current = rs), e === null ? rs : e;
  }
  function ld() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
      Ze === null || (!(vr & 268435455) && !(us & 268435455)) || tr(Ze, ot);
  }
  function ms(e, t) {
    var n = me;
    me |= 2;
    var r = ig();
    (Ze !== e || ot !== t) && ((An = null), xr(e, t));
    do
      try {
        Ew();
        break;
      } catch (o) {
        og(e, o);
      }
    while (1);
    if ((Sc(), (me = n), (ls.current = r), Ke !== null)) throw Error(D(261));
    return (Ze = null), (ot = 0), Qe;
  }
  function Ew() {
    for (; Ke !== null; ) ag(Ke);
  }
  function Cw() {
    for (; Ke !== null && !Yv(); ) ag(Ke);
  }
  function ag(e) {
    var t = cg(e.alternate, e, Mt);
    (e.memoizedProps = e.pendingProps),
      t === null ? sg(e) : (Ke = t),
      (Zc.current = null);
  }
  function sg(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = bw(n, t)), n !== null)) {
          (n.flags &= 32767), (Ke = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Qe = 6), (Ke = null);
          return;
        }
      } else if (((n = yw(n, t, Mt)), n !== null)) {
        Ke = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ke = t;
        return;
      }
      Ke = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Sr(e, t, n) {
    var r = Se,
      o = Vt.transition;
    try {
      (Vt.transition = null), (Se = 1), Ow(e, t, n, r);
    } finally {
      (Vt.transition = o), (Se = r);
    }
    return null;
  }
  function Ow(e, t, n, r) {
    do bo();
    while (Zn !== null);
    if (me & 6) throw Error(D(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(D(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (a1(e, i),
      e === Ze && ((Ke = Ze = null), (ot = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ds ||
        ((ds = !0),
        dg(va, function () {
          return bo(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Vt.transition), (Vt.transition = null);
      var a = Se;
      Se = 1;
      var s = me;
      (me |= 4),
        (Zc.current = null),
        ww(e, n),
        Qm(n, e),
        q1(uc),
        (Oa = !!lc),
        (uc = lc = null),
        (e.current = n),
        xw(n),
        Qv(),
        (me = s),
        (Se = a),
        (Vt.transition = i);
    } else e.current = n;
    if (
      (ds && ((ds = !1), (Zn = e), (fs = o)),
      (i = e.pendingLanes),
      i === 0 && (Xn = null),
      e1(n.stateNode),
      kt(e, qe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (cs) throw ((cs = !1), (e = nd), (nd = null), e);
    return (
      fs & 1 && e.tag !== 0 && bo(),
      (i = e.pendingLanes),
      i & 1 ? (e === rd ? Pi++ : ((Pi = 0), (rd = e))) : (Pi = 0),
      Jn(),
      null
    );
  }
  function bo() {
    if (Zn !== null) {
      var e = Kp(fs),
        t = Vt.transition,
        n = Se;
      try {
        if (((Vt.transition = null), (Se = 16 > e ? 16 : e), Zn === null))
          var r = !1;
        else {
          if (((e = Zn), (Zn = null), (fs = 0), me & 6)) throw Error(D(331));
          var o = me;
          for (me |= 4, K = e.current; K !== null; ) {
            var i = K,
              a = i.child;
            if (K.flags & 16) {
              var s = i.deletions;
              if (s !== null) {
                for (var l = 0; l < s.length; l++) {
                  var c = s[l];
                  for (K = c; K !== null; ) {
                    var f = K;
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ri(8, f, i);
                    }
                    var p = f.child;
                    if (p !== null) (p.return = f), (K = p);
                    else
                      for (; K !== null; ) {
                        f = K;
                        var m = f.sibling,
                          w = f.return;
                        if ((qm(f), f === c)) {
                          K = null;
                          break;
                        }
                        if (m !== null) {
                          (m.return = w), (K = m);
                          break;
                        }
                        K = w;
                      }
                  }
                }
                var b = i.alternate;
                if (b !== null) {
                  var S = b.child;
                  if (S !== null) {
                    b.child = null;
                    do {
                      var _ = S.sibling;
                      (S.sibling = null), (S = _);
                    } while (S !== null);
                  }
                }
                K = i;
              }
            }
            if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (K = a);
            else
              e: for (; K !== null; ) {
                if (((i = K), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(9, i, i.return);
                  }
                var v = i.sibling;
                if (v !== null) {
                  (v.return = i.return), (K = v);
                  break e;
                }
                K = i.return;
              }
          }
          var h = e.current;
          for (K = h; K !== null; ) {
            a = K;
            var g = a.child;
            if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (K = g);
            else
              e: for (a = h; K !== null; ) {
                if (((s = K), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ss(9, s);
                    }
                  } catch (C) {
                    Ue(s, s.return, C);
                  }
                if (s === a) {
                  K = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  (x.return = s.return), (K = x);
                  break e;
                }
                K = s.return;
              }
          }
          if (
            ((me = o),
            Jn(),
            cn && typeof cn.onPostCommitFiberRoot == "function")
          )
            try {
              cn.onPostCommitFiberRoot(wa, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Se = n), (Vt.transition = t);
      }
    }
    return !1;
  }
  function lg(e, t, n) {
    (t = ho(n, t)),
      (t = Cm(e, t, 1)),
      (e = Yn(e, t, 1)),
      (t = yt()),
      e !== null && (ni(e, 1, t), kt(e, t));
  }
  function Ue(e, t, n) {
    if (e.tag === 3) lg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lg(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Xn === null || !Xn.has(r)))
          ) {
            (e = ho(n, e)),
              (e = Om(t, e, 1)),
              (t = Yn(t, e, 1)),
              (e = yt()),
              t !== null && (ni(t, 1, e), kt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = yt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ze === e &&
        (ot & n) === n &&
        (Qe === 4 || (Qe === 3 && (ot & 130023424) === ot && 500 > qe() - td)
          ? xr(e, 0)
          : (ed |= n)),
      kt(e, t);
  }
  function ug(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Sa), (Sa <<= 1), !(Sa & 130023424) && (Sa = 4194304))
        : (t = 1));
    var n = yt();
    (e = _n(e, t)), e !== null && (ni(e, t, n), kt(e, n));
  }
  function Tw(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), ug(e, n);
  }
  function Rw(e, t) {
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
        throw Error(D(314));
    }
    r !== null && r.delete(t), ug(e, n);
  }
  var cg;
  cg = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || vt.current) xt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (xt = !1), gw(e, t, n);
        xt = !!(e.flags & 131072);
      }
    else (xt = !1), $e && t.flags & 1048576 && Dh(t, Va, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        is(e, t), (e = t.pendingProps);
        var o = io(t, ut.current);
        co(t, n), (o = Mc(null, t, r, e, o, n));
        var i = Lc();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              wt(r) ? ((i = !0), Da(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Oc(t),
              (o.updater = Ya),
              (t.stateNode = o),
              (o._reactInternals = t),
              Tc(t, r, e, n),
              (t = Vc(null, t, r, !0, i, n)))
            : ((t.tag = 0), $e && i && gc(t), gt(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (is(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = Iw(r)),
            (e = rn(r, e)),
            o)
          ) {
            case 0:
              t = Wc(null, t, r, e, n);
              break e;
            case 1:
              t = Mm(null, t, r, e, n);
              break e;
            case 11:
              t = _m(null, t, r, e, n);
              break e;
            case 14:
              t = Im(null, t, r, rn(r.type, e), n);
              break e;
          }
          throw Error(D(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : rn(r, o)),
          Wc(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : rn(r, o)),
          Mm(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((Lm(t), e === null)) throw Error(D(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            Kh(e, t),
            Ga(t, r, null, n);
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
              (o = ho(Error(D(423)), t)), (t = Bm(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = ho(Error(D(424)), t)), (t = Bm(e, t, r, n, o));
              break e;
            } else
              for (
                $t = Hn(t.stateNode.containerInfo.firstChild),
                  At = t,
                  $e = !0,
                  nn = null,
                  n = nm(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((lo(), r === o)) {
              t = Pn(e, t, n);
              break e;
            }
            gt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          rm(t),
          e === null && vc(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = o.children),
          cc(r, o) ? (a = null) : i !== null && cc(r, i) && (t.flags |= 32),
          $m(e, t),
          gt(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && vc(t), null;
      case 13:
        return zm(e, t, n);
      case 4:
        return (
          Rc(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = fo(t, null, r, n)) : gt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : rn(r, o)),
          _m(e, t, r, o, n)
        );
      case 7:
        return gt(e, t, t.pendingProps, n), t.child;
      case 8:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (a = o.value),
            Ne(qa, r._currentValue),
            (r._currentValue = a),
            i !== null)
          )
            if (tn(i.value, a)) {
              if (i.children === o.children && !vt.current) {
                t = Pn(e, t, n);
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
                        (l = In(-1, n & -n)), (l.tag = 2);
                        var c = i.updateQueue;
                        if (c !== null) {
                          c = c.shared;
                          var f = c.pending;
                          f === null
                            ? (l.next = l)
                            : ((l.next = f.next), (f.next = l)),
                            (c.pending = l);
                        }
                      }
                      (i.lanes |= n),
                        (l = i.alternate),
                        l !== null && (l.lanes |= n),
                        Ec(i.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(D(341));
                  (a.lanes |= n),
                    (s = a.alternate),
                    s !== null && (s.lanes |= n),
                    Ec(a, n, t),
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
          gt(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          co(t, n),
          (o = Ut(o)),
          (r = r(o)),
          (t.flags |= 1),
          gt(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = rn(r, t.pendingProps)),
          (o = rn(r.type, o)),
          Im(e, t, r, o, n)
        );
      case 15:
        return Pm(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : rn(r, o)),
          is(e, t),
          (t.tag = 1),
          wt(r) ? ((e = !0), Da(t)) : (e = !1),
          co(t, n),
          Xh(t, r, o),
          Tc(t, r, o, n),
          Vc(null, t, r, !0, e, n)
        );
      case 19:
        return Fm(e, t, n);
      case 22:
        return Am(e, t, n);
    }
    throw Error(D(156, t.tag));
  };
  function dg(e, t) {
    return Up(e, t);
  }
  function _w(e, t, n, r) {
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
  function Ht(e, t, n, r) {
    return new _w(e, t, n, r);
  }
  function ud(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Iw(e) {
    if (typeof e == "function") return ud(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === gu)) return 11;
      if (e === vu) return 14;
    }
    return 2;
  }
  function nr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ht(e.tag, t, e.key, e.mode)),
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
  function gs(e, t, n, r, o, i) {
    var a = 2;
    if (((r = e), typeof e == "function")) ud(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case qr:
          return kr(n.children, o, i, t);
        case hu:
          (a = 8), (o |= 8);
          break;
        case mu:
          return (
            (e = Ht(12, n, t, o | 2)), (e.elementType = mu), (e.lanes = i), e
          );
        case yu:
          return (e = Ht(13, n, t, o)), (e.elementType = yu), (e.lanes = i), e;
        case bu:
          return (e = Ht(19, n, t, o)), (e.elementType = bu), (e.lanes = i), e;
        case bp:
          return ys(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gp:
                a = 10;
                break e;
              case yp:
                a = 9;
                break e;
              case gu:
                a = 11;
                break e;
              case vu:
                a = 14;
                break e;
              case Bn:
                (a = 16), (r = null);
                break e;
            }
          throw Error(D(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ht(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function kr(e, t, n, r) {
    return (e = Ht(7, e, r, t)), (e.lanes = n), e;
  }
  function ys(e, t, n, r) {
    return (
      (e = Ht(22, e, r, t)),
      (e.elementType = bp),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function cd(e, t, n) {
    return (e = Ht(6, e, null, t)), (e.lanes = n), e;
  }
  function dd(e, t, n) {
    return (
      (t = Ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Pw(e, t, n, r, o) {
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
      (this.eventTimes = ju(0)),
      (this.expirationTimes = ju(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ju(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function fd(e, t, n, r, o, i, a, s, l) {
    return (
      (e = new Pw(e, t, n, s, l)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Ht(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Oc(i),
      e
    );
  }
  function Aw(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Hr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function fg(e) {
    if (!e) return Kn;
    e = e._reactInternals;
    e: {
      if (dr(e) !== e || e.tag !== 1) throw Error(D(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (wt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(D(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (wt(n)) return zh(e, n, t);
    }
    return t;
  }
  function pg(e, t, n, r, o, i, a, s, l) {
    return (
      (e = fd(n, r, !0, e, o, i, a, s, l)),
      (e.context = fg(null)),
      (n = e.current),
      (r = yt()),
      (o = er(n)),
      (i = In(r, o)),
      (i.callback = t ?? null),
      Yn(n, i, o),
      (e.current.lanes = o),
      ni(e, o, r),
      kt(e, r),
      e
    );
  }
  function bs(e, t, n, r) {
    var o = t.current,
      i = yt(),
      a = er(o);
    return (
      (n = fg(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = In(i, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Yn(o, t, a)),
      e !== null && (sn(e, o, a, i), Ja(e, o, a)),
      a
    );
  }
  function vs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function hg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function pd(e, t) {
    hg(e, t), (e = e.alternate) && hg(e, t);
  }
  function $w() {
    return null;
  }
  var mg =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function hd(e) {
    this._internalRoot = e;
  }
  (ws.prototype.render = hd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(D(409));
      bs(e, t, null, null);
    }),
    (ws.prototype.unmount = hd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          wr(function () {
            bs(null, e, null, null);
          }),
            (t[On] = null);
        }
      });
  function ws(e) {
    this._internalRoot = e;
  }
  ws.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Yp();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++);
      Un.splice(n, 0, e), n === 0 && Zp(e);
    }
  };
  function md(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function xs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function gg() {}
  function Mw(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var c = vs(a);
          i.call(c);
        };
      }
      var a = pg(t, r, e, 0, null, !1, !1, "", gg);
      return (
        (e._reactRootContainer = a),
        (e[On] = a.current),
        gi(e.nodeType === 8 ? e.parentNode : e),
        wr(),
        a
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = vs(l);
        s.call(c);
      };
    }
    var l = fd(e, 0, !1, null, null, !1, !1, "", gg);
    return (
      (e._reactRootContainer = l),
      (e[On] = l.current),
      gi(e.nodeType === 8 ? e.parentNode : e),
      wr(function () {
        bs(t, l, n, r);
      }),
      l
    );
  }
  function Ss(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof o == "function") {
        var s = o;
        o = function () {
          var l = vs(a);
          s.call(l);
        };
      }
      bs(t, a, e, o);
    } else a = Mw(n, t, e, o, r);
    return vs(a);
  }
  (Jp = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ti(t.pendingLanes);
          n !== 0 &&
            (Fu(t, n | 1), kt(t, qe()), !(me & 6) && ((yo = qe() + 500), Jn()));
        }
        break;
      case 13:
        wr(function () {
          var r = _n(e, 1);
          if (r !== null) {
            var o = yt();
            sn(r, e, 1, o);
          }
        }),
          pd(e, 1);
    }
  }),
    (Du = function (e) {
      if (e.tag === 13) {
        var t = _n(e, 134217728);
        if (t !== null) {
          var n = yt();
          sn(t, e, 134217728, n);
        }
        pd(e, 134217728);
      }
    }),
    (Gp = function (e) {
      if (e.tag === 13) {
        var t = er(e),
          n = _n(e, t);
        if (n !== null) {
          var r = yt();
          sn(n, e, t, r);
        }
        pd(e, t);
      }
    }),
    (Yp = function () {
      return Se;
    }),
    (Qp = function (e, t) {
      var n = Se;
      try {
        return (Se = e), t();
      } finally {
        Se = n;
      }
    }),
    (Au = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Cu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var o = ja(r);
                if (!o) throw Error(D(90));
                xp(r), Cu(r, o);
              }
            }
          }
          break;
        case "textarea":
          Op(e, n);
          break;
        case "select":
          (t = n.value), t != null && Kr(e, !!n.multiple, t, !1);
      }
    }),
    (Mp = ad),
    (Lp = wr);
  var Lw = { usingClientEntryPoint: !1, Events: [vi, ro, ja, Ap, $p, ad] },
    Ai = {
      findFiberByHostInstance: fr,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    Bw = {
      bundleType: Ai.bundleType,
      version: Ai.version,
      rendererPackageName: Ai.rendererPackageName,
      rendererConfig: Ai.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Cn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Fp(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ai.findFiberByHostInstance || $w,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ks.isDisabled && ks.supportsFiber)
      try {
        (wa = ks.inject(Bw)), (cn = ks);
      } catch {}
  }
  (_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lw),
    (_t.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!md(t)) throw Error(D(200));
      return Aw(e, t, null, n);
    }),
    (_t.createRoot = function (e, t) {
      if (!md(e)) throw Error(D(299));
      var n = !1,
        r = "",
        o = mg;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = fd(e, 1, !1, null, null, n, !1, r, o)),
        (e[On] = t.current),
        gi(e.nodeType === 8 ? e.parentNode : e),
        new hd(t)
      );
    }),
    (_t.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(D(188))
          : ((e = Object.keys(e).join(",")), Error(D(268, e)));
      return (e = Fp(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (_t.flushSync = function (e) {
      return wr(e);
    }),
    (_t.hydrate = function (e, t, n) {
      if (!xs(t)) throw Error(D(200));
      return Ss(null, e, t, !0, n);
    }),
    (_t.hydrateRoot = function (e, t, n) {
      if (!md(e)) throw Error(D(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        a = mg;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = pg(t, null, e, 1, n ?? null, o, !1, i, a)),
        (e[On] = t.current),
        gi(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new ws(t);
    }),
    (_t.render = function (e, t, n) {
      if (!xs(t)) throw Error(D(200));
      return Ss(null, e, t, !1, n);
    }),
    (_t.unmountComponentAtNode = function (e) {
      if (!xs(e)) throw Error(D(40));
      return e._reactRootContainer
        ? (wr(function () {
            Ss(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[On] = null);
            });
          }),
          !0)
        : !1;
    }),
    (_t.unstable_batchedUpdates = ad),
    (_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!xs(n)) throw Error(D(200));
      if (e == null || e._reactInternals === void 0) throw Error(D(38));
      return Ss(e, t, n, !1, r);
    }),
    (_t.version = "18.2.0-next-9e3b772b8-20220608"),
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
      t(), (e.exports = _t);
    })($v);
  const Es = Xf(Wr);
  var yg,
    bg = Wr;
  (yg = bg.createRoot), bg.hydrateRoot;
  const zw = { black: "#000", white: "#fff" },
    $i = zw,
    jw = {
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
    Er = jw,
    Fw = {
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
    Cr = Fw,
    Dw = {
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
    Or = Dw,
    Uw = {
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
    vo = Uw,
    Ww = {
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
    Nr = Ww,
    Vw = {
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
    wo = Vw,
    Hw = {
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
    qw = Hw;
  function k() {
    return (
      (k = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      k.apply(this, arguments)
    );
  }
  function Tr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object;
  }
  function vg(e) {
    if (!Tr(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = vg(e[n]);
      }),
      t
    );
  }
  function qt(e, t, n = { clone: !0 }) {
    const r = n.clone ? k({}, e) : e;
    return (
      Tr(e) &&
        Tr(t) &&
        Object.keys(t).forEach((o) => {
          o !== "__proto__" &&
            (Tr(t[o]) && o in e && Tr(e[o])
              ? (r[o] = qt(e[o], t[o], n))
              : n.clone
              ? (r[o] = Tr(t[o]) ? vg(t[o]) : t[o])
              : (r[o] = t[o]));
        }),
      r
    );
  }
  function rr(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
  }
  var wg = {},
    Kw = {
      get exports() {
        return wg;
      },
      set exports(e) {
        wg = e;
      },
    },
    ke = {},
    gd = Symbol.for("react.element"),
    yd = Symbol.for("react.portal"),
    Cs = Symbol.for("react.fragment"),
    Os = Symbol.for("react.strict_mode"),
    Ns = Symbol.for("react.profiler"),
    Ts = Symbol.for("react.provider"),
    Rs = Symbol.for("react.context"),
    Jw = Symbol.for("react.server_context"),
    _s = Symbol.for("react.forward_ref"),
    Is = Symbol.for("react.suspense"),
    Ps = Symbol.for("react.suspense_list"),
    As = Symbol.for("react.memo"),
    $s = Symbol.for("react.lazy"),
    Gw = Symbol.for("react.offscreen"),
    xg;
  xg = Symbol.for("react.module.reference");
  function Kt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case gd:
          switch (((e = e.type), e)) {
            case Cs:
            case Ns:
            case Os:
            case Is:
            case Ps:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Jw:
                case Rs:
                case _s:
                case $s:
                case As:
                case Ts:
                  return e;
                default:
                  return t;
              }
          }
        case yd:
          return t;
      }
    }
  }
  (ke.ContextConsumer = Rs),
    (ke.ContextProvider = Ts),
    (ke.Element = gd),
    (ke.ForwardRef = _s),
    (ke.Fragment = Cs),
    (ke.Lazy = $s),
    (ke.Memo = As),
    (ke.Portal = yd),
    (ke.Profiler = Ns),
    (ke.StrictMode = Os),
    (ke.Suspense = Is),
    (ke.SuspenseList = Ps),
    (ke.isAsyncMode = function () {
      return !1;
    }),
    (ke.isConcurrentMode = function () {
      return !1;
    }),
    (ke.isContextConsumer = function (e) {
      return Kt(e) === Rs;
    }),
    (ke.isContextProvider = function (e) {
      return Kt(e) === Ts;
    }),
    (ke.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === gd;
    }),
    (ke.isForwardRef = function (e) {
      return Kt(e) === _s;
    }),
    (ke.isFragment = function (e) {
      return Kt(e) === Cs;
    }),
    (ke.isLazy = function (e) {
      return Kt(e) === $s;
    }),
    (ke.isMemo = function (e) {
      return Kt(e) === As;
    }),
    (ke.isPortal = function (e) {
      return Kt(e) === yd;
    }),
    (ke.isProfiler = function (e) {
      return Kt(e) === Ns;
    }),
    (ke.isStrictMode = function (e) {
      return Kt(e) === Os;
    }),
    (ke.isSuspense = function (e) {
      return Kt(e) === Is;
    }),
    (ke.isSuspenseList = function (e) {
      return Kt(e) === Ps;
    }),
    (ke.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Cs ||
        e === Ns ||
        e === Os ||
        e === Is ||
        e === Ps ||
        e === Gw ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === $s ||
            e.$$typeof === As ||
            e.$$typeof === Ts ||
            e.$$typeof === Rs ||
            e.$$typeof === _s ||
            e.$$typeof === xg ||
            e.getModuleId !== void 0))
      );
    }),
    (ke.typeOf = Kt),
    (function (e) {
      e.exports = ke;
    })(Kw);
  function G(e) {
    if (typeof e != "string") throw new Error(rr(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function bd(...e) {
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
  function vd(e, t = 166) {
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
  function Yw(e, t) {
    return () => null;
  }
  function Mi(e, t) {
    return E.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
  }
  function Et(e) {
    return (e && e.ownerDocument) || document;
  }
  function or(e) {
    return Et(e).defaultView || window;
  }
  function Qw(e, t) {
    return () => null;
  }
  function Ms(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  const Xw = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
    ir = Xw;
  let Sg = 0;
  function Zw(e) {
    const [t, n] = E.useState(e),
      r = e || t;
    return (
      E.useEffect(() => {
        t == null && ((Sg += 1), n(`mui-${Sg}`));
      }, [t]),
      r
    );
  }
  const kg = lu.useId;
  function Eg(e) {
    if (kg !== void 0) {
      const t = kg();
      return e ?? t;
    }
    return Zw(e);
  }
  function ex(e, t, n, r, o) {
    return null;
  }
  function Ls({ controlled: e, default: t, name: n, state: r = "value" }) {
    const { current: o } = E.useRef(e !== void 0),
      [i, a] = E.useState(t),
      s = o ? e : i,
      l = E.useCallback((c) => {
        o || a(c);
      }, []);
    return [s, l];
  }
  function Rr(e) {
    const t = E.useRef(e);
    return (
      ir(() => {
        t.current = e;
      }),
      E.useCallback((...n) => (0, t.current)(...n), [])
    );
  }
  function it(...e) {
    return E.useMemo(
      () =>
        e.every((t) => t == null)
          ? null
          : (t) => {
              e.forEach((n) => {
                Ms(n, t);
              });
            },
      e,
    );
  }
  let Bs = !0,
    wd = !1,
    Cg;
  const tx = {
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
  function nx(e) {
    const { type: t, tagName: n } = e;
    return !!(
      (n === "INPUT" && tx[t] && !e.readOnly) ||
      (n === "TEXTAREA" && !e.readOnly) ||
      e.isContentEditable
    );
  }
  function rx(e) {
    e.metaKey || e.altKey || e.ctrlKey || (Bs = !0);
  }
  function xd() {
    Bs = !1;
  }
  function ox() {
    this.visibilityState === "hidden" && wd && (Bs = !0);
  }
  function ix(e) {
    e.addEventListener("keydown", rx, !0),
      e.addEventListener("mousedown", xd, !0),
      e.addEventListener("pointerdown", xd, !0),
      e.addEventListener("touchstart", xd, !0),
      e.addEventListener("visibilitychange", ox, !0);
  }
  function ax(e) {
    const { target: t } = e;
    try {
      return t.matches(":focus-visible");
    } catch {}
    return Bs || nx(t);
  }
  function Sd() {
    const e = E.useCallback((o) => {
        o != null && ix(o.ownerDocument);
      }, []),
      t = E.useRef(!1);
    function n() {
      return t.current
        ? ((wd = !0),
          window.clearTimeout(Cg),
          (Cg = window.setTimeout(() => {
            wd = !1;
          }, 100)),
          (t.current = !1),
          !0)
        : !1;
    }
    function r(o) {
      return ax(o) ? ((t.current = !0), !0) : !1;
    }
    return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
  }
  function Og(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  function kd(e, t) {
    const n = k({}, t);
    return (
      Object.keys(e).forEach((r) => {
        if (r.toString().match(/^(components|slots)$/))
          n[r] = k({}, e[r], n[r]);
        else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
          const o = e[r] || {},
            i = t[r];
          (n[r] = {}),
            !i || !Object.keys(i)
              ? (n[r] = o)
              : !o || !Object.keys(o)
              ? (n[r] = i)
              : ((n[r] = k({}, i)),
                Object.keys(o).forEach((a) => {
                  n[r][a] = kd(o[a], i[a]);
                }));
        } else n[r] === void 0 && (n[r] = e[r]);
      }),
      n
    );
  }
  function ce(e, t, n) {
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
  const Ng = (e) => e,
    sx = () => {
      let e = Ng;
      return {
        configure(t) {
          e = t;
        },
        generate(t) {
          return e(t);
        },
        reset() {
          e = Ng;
        },
      };
    },
    lx = sx(),
    Tg = lx,
    ux = {
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
  function ie(e, t, n = "Mui") {
    const r = ux[t];
    return r ? `${n}-${r}` : `${Tg.generate(e)}-${t}`;
  }
  function ae(e, t, n = "Mui") {
    const r = {};
    return (
      t.forEach((o) => {
        r[o] = ie(e, o, n);
      }),
      r
    );
  }
  function X(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      o,
      i;
    for (i = 0; i < r.length; i++)
      (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  function Rg(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var cx =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    dx = Rg(function (e) {
      return (
        cx.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    });
  function fx(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function px(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var hx = (function () {
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
            this._insertTag(px(this));
          var r = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var o = fx(r);
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
    pt = "-ms-",
    zs = "-moz-",
    ye = "-webkit-",
    _g = "comm",
    Ed = "rule",
    Cd = "decl",
    mx = "@import",
    Ig = "@keyframes",
    gx = Math.abs,
    js = String.fromCharCode,
    yx = Object.assign;
  function bx(e, t) {
    return at(e, 0) ^ 45
      ? (((((((t << 2) ^ at(e, 0)) << 2) ^ at(e, 1)) << 2) ^ at(e, 2)) << 2) ^
          at(e, 3)
      : 0;
  }
  function Pg(e) {
    return e.trim();
  }
  function vx(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function we(e, t, n) {
    return e.replace(t, n);
  }
  function Od(e, t) {
    return e.indexOf(t);
  }
  function at(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Li(e, t, n) {
    return e.slice(t, n);
  }
  function mn(e) {
    return e.length;
  }
  function Nd(e) {
    return e.length;
  }
  function Fs(e, t) {
    return t.push(e), e;
  }
  function wx(e, t) {
    return e.map(t).join("");
  }
  var Ds = 1,
    xo = 1,
    Ag = 0,
    Ct = 0,
    Je = 0,
    So = "";
  function Us(e, t, n, r, o, i, a) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: Ds,
      column: xo,
      length: a,
      return: "",
    };
  }
  function Bi(e, t) {
    return yx(
      Us("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t,
    );
  }
  function xx() {
    return Je;
  }
  function Sx() {
    return (
      (Je = Ct > 0 ? at(So, --Ct) : 0), xo--, Je === 10 && ((xo = 1), Ds--), Je
    );
  }
  function Lt() {
    return (
      (Je = Ct < Ag ? at(So, Ct++) : 0), xo++, Je === 10 && ((xo = 1), Ds++), Je
    );
  }
  function gn() {
    return at(So, Ct);
  }
  function Ws() {
    return Ct;
  }
  function zi(e, t) {
    return Li(So, e, t);
  }
  function ji(e) {
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
  function $g(e) {
    return (Ds = xo = 1), (Ag = mn((So = e))), (Ct = 0), [];
  }
  function Mg(e) {
    return (So = ""), e;
  }
  function Vs(e) {
    return Pg(zi(Ct - 1, Td(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function kx(e) {
    for (; (Je = gn()) && Je < 33; ) Lt();
    return ji(e) > 2 || ji(Je) > 3 ? "" : " ";
  }
  function Ex(e, t) {
    for (
      ;
      --t &&
      Lt() &&
      !(Je < 48 || Je > 102 || (Je > 57 && Je < 65) || (Je > 70 && Je < 97));

    );
    return zi(e, Ws() + (t < 6 && gn() == 32 && Lt() == 32));
  }
  function Td(e) {
    for (; Lt(); )
      switch (Je) {
        case e:
          return Ct;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Td(Je);
          break;
        case 40:
          e === 41 && Td(e);
          break;
        case 92:
          Lt();
          break;
      }
    return Ct;
  }
  function Cx(e, t) {
    for (
      ;
      Lt() && e + Je !== 47 + 10 && !(e + Je === 42 + 42 && gn() === 47);

    );
    return "/*" + zi(t, Ct - 1) + "*" + js(e === 47 ? e : Lt());
  }
  function Ox(e) {
    for (; !ji(gn()); ) Lt();
    return zi(e, Ct);
  }
  function Nx(e) {
    return Mg(Hs("", null, null, null, [""], (e = $g(e)), 0, [0], e));
  }
  function Hs(e, t, n, r, o, i, a, s, l) {
    for (
      var c = 0,
        f = 0,
        p = a,
        m = 0,
        w = 0,
        b = 0,
        S = 1,
        _ = 1,
        v = 1,
        h = 0,
        g = "",
        x = o,
        C = i,
        N = r,
        T = g;
      _;

    )
      switch (((b = h), (h = Lt()))) {
        case 40:
          if (b != 108 && at(T, p - 1) == 58) {
            Od((T += we(Vs(h), "&", "&\f")), "&\f") != -1 && (v = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          T += Vs(h);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          T += kx(b);
          break;
        case 92:
          T += Ex(Ws() - 1, 7);
          continue;
        case 47:
          switch (gn()) {
            case 42:
            case 47:
              Fs(Tx(Cx(Lt(), Ws()), t, n), l);
              break;
            default:
              T += "/";
          }
          break;
        case 123 * S:
          s[c++] = mn(T) * v;
        case 125 * S:
        case 59:
        case 0:
          switch (h) {
            case 0:
            case 125:
              _ = 0;
            case 59 + f:
              w > 0 &&
                mn(T) - p &&
                Fs(
                  w > 32
                    ? Bg(T + ";", r, n, p - 1)
                    : Bg(we(T, " ", "") + ";", r, n, p - 2),
                  l,
                );
              break;
            case 59:
              T += ";";
            default:
              if (
                (Fs((N = Lg(T, t, n, c, f, o, s, g, (x = []), (C = []), p)), i),
                h === 123)
              )
                if (f === 0) Hs(T, t, N, N, x, i, p, s, C);
                else
                  switch (m === 99 && at(T, 3) === 110 ? 100 : m) {
                    case 100:
                    case 109:
                    case 115:
                      Hs(
                        e,
                        N,
                        N,
                        r && Fs(Lg(e, N, N, 0, 0, o, s, g, o, (x = []), p), C),
                        o,
                        C,
                        p,
                        s,
                        r ? x : C,
                      );
                      break;
                    default:
                      Hs(T, N, N, N, [""], C, 0, s, C);
                  }
          }
          (c = f = w = 0), (S = v = 1), (g = T = ""), (p = a);
          break;
        case 58:
          (p = 1 + mn(T)), (w = b);
        default:
          if (S < 1) {
            if (h == 123) --S;
            else if (h == 125 && S++ == 0 && Sx() == 125) continue;
          }
          switch (((T += js(h)), h * S)) {
            case 38:
              v = f > 0 ? 1 : ((T += "\f"), -1);
              break;
            case 44:
              (s[c++] = (mn(T) - 1) * v), (v = 1);
              break;
            case 64:
              gn() === 45 && (T += Vs(Lt())),
                (m = gn()),
                (f = p = mn((g = T += Ox(Ws())))),
                h++;
              break;
            case 45:
              b === 45 && mn(T) == 2 && (S = 0);
          }
      }
    return i;
  }
  function Lg(e, t, n, r, o, i, a, s, l, c, f) {
    for (
      var p = o - 1, m = o === 0 ? i : [""], w = Nd(m), b = 0, S = 0, _ = 0;
      b < r;
      ++b
    )
      for (var v = 0, h = Li(e, p + 1, (p = gx((S = a[b])))), g = e; v < w; ++v)
        (g = Pg(S > 0 ? m[v] + " " + h : we(h, /&\f/g, m[v]))) && (l[_++] = g);
    return Us(e, t, n, o === 0 ? Ed : s, l, c, f);
  }
  function Tx(e, t, n) {
    return Us(e, t, n, _g, js(xx()), Li(e, 2, -2), 0);
  }
  function Bg(e, t, n, r) {
    return Us(e, t, n, Cd, Li(e, 0, r), Li(e, r + 1, -1), r);
  }
  function ko(e, t) {
    for (var n = "", r = Nd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function Rx(e, t, n, r) {
    switch (e.type) {
      case mx:
      case Cd:
        return (e.return = e.return || e.value);
      case _g:
        return "";
      case Ig:
        return (e.return = e.value + "{" + ko(e.children, r) + "}");
      case Ed:
        e.value = e.props.join(",");
    }
    return mn((n = ko(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function _x(e) {
    var t = Nd(e);
    return function (n, r, o, i) {
      for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
      return a;
    };
  }
  function Ix(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  var Px = function (e, t, n) {
      for (
        var r = 0, o = 0;
        (r = o), (o = gn()), r === 38 && o === 12 && (t[n] = 1), !ji(o);

      )
        Lt();
      return zi(e, Ct);
    },
    Ax = function (e, t) {
      var n = -1,
        r = 44;
      do
        switch (ji(r)) {
          case 0:
            r === 38 && gn() === 12 && (t[n] = 1), (e[n] += Px(Ct - 1, t, n));
            break;
          case 2:
            e[n] += Vs(r);
            break;
          case 4:
            if (r === 44) {
              (e[++n] = gn() === 58 ? "&\f" : ""), (t[n] = e[n].length);
              break;
            }
          default:
            e[n] += js(r);
        }
      while ((r = Lt()));
      return e;
    },
    $x = function (e, t) {
      return Mg(Ax($g(e), t));
    },
    zg = new WeakMap(),
    Mx = function (e) {
      if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          n.type !== "rule";

        )
          if (((n = n.parent), !n)) return;
        if (
          !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !zg.get(n)) &&
          !r
        ) {
          zg.set(e, !0);
          for (
            var o = [], i = $x(t, o), a = n.props, s = 0, l = 0;
            s < i.length;
            s++
          )
            for (var c = 0; c < a.length; c++, l++)
              e.props[l] = o[s]
                ? i[s].replace(/&\f/g, a[c])
                : a[c] + " " + i[s];
        }
      }
    },
    Lx = function (e) {
      if (e.type === "decl") {
        var t = e.value;
        t.charCodeAt(0) === 108 &&
          t.charCodeAt(2) === 98 &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function jg(e, t) {
    switch (bx(e, t)) {
      case 5103:
        return ye + "print-" + e + e;
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
        return ye + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return ye + e + zs + e + pt + e + e;
      case 6828:
      case 4268:
        return ye + e + pt + e + e;
      case 6165:
        return ye + e + pt + "flex-" + e + e;
      case 5187:
        return (
          ye +
          e +
          we(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + pt + "flex-$1$2") +
          e
        );
      case 5443:
        return ye + e + pt + "flex-item-" + we(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          ye +
          e +
          pt +
          "flex-line-pack" +
          we(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return ye + e + pt + we(e, "shrink", "negative") + e;
      case 5292:
        return ye + e + pt + we(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          ye +
          "box-" +
          we(e, "-grow", "") +
          ye +
          e +
          pt +
          we(e, "grow", "positive") +
          e
        );
      case 4554:
        return ye + we(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
      case 6187:
        return (
          we(
            we(we(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"),
            e,
            "",
          ) + e
        );
      case 5495:
      case 3959:
        return we(e, /(image-set\([^]*)/, ye + "$1$`$1");
      case 4968:
        return (
          we(
            we(
              e,
              /(.+:)(flex-)?(.*)/,
              ye + "box-pack:$3" + pt + "flex-pack:$3",
            ),
            /s.+-b[^;]+/,
            "justify",
          ) +
          ye +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return we(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
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
        if (mn(e) - 1 - t > 6)
          switch (at(e, t + 1)) {
            case 109:
              if (at(e, t + 4) !== 45) break;
            case 102:
              return (
                we(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    ye +
                    "$2-$3$1" +
                    zs +
                    (at(e, t + 3) == 108 ? "$3" : "$2-$3"),
                ) + e
              );
            case 115:
              return ~Od(e, "stretch")
                ? jg(we(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (at(e, t + 1) !== 115) break;
      case 6444:
        switch (at(e, mn(e) - 3 - (~Od(e, "!important") && 10))) {
          case 107:
            return we(e, ":", ":" + ye) + e;
          case 101:
            return (
              we(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  ye +
                  (at(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  ye +
                  "$2$3$1" +
                  pt +
                  "$2box$3",
              ) + e
            );
        }
        break;
      case 5936:
        switch (at(e, t + 11)) {
          case 114:
            return ye + e + pt + we(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return ye + e + pt + we(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return ye + e + pt + we(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return ye + e + pt + e + e;
    }
    return e;
  }
  var Bx = function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case Cd:
            e.return = jg(e.value, e.length);
            break;
          case Ig:
            return ko([Bi(e, { value: we(e.value, "@", "@" + ye) })], r);
          case Ed:
            if (e.length)
              return wx(e.props, function (o) {
                switch (vx(o, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return ko(
                      [
                        Bi(e, {
                          props: [we(o, /:(read-\w+)/, ":" + zs + "$1")],
                        }),
                      ],
                      r,
                    );
                  case "::placeholder":
                    return ko(
                      [
                        Bi(e, {
                          props: [we(o, /:(plac\w+)/, ":" + ye + "input-$1")],
                        }),
                        Bi(e, {
                          props: [we(o, /:(plac\w+)/, ":" + zs + "$1")],
                        }),
                        Bi(e, {
                          props: [we(o, /:(plac\w+)/, pt + "input-$1")],
                        }),
                      ],
                      r,
                    );
                }
                return "";
              });
        }
    },
    zx = [Bx],
    Fg = function (e) {
      var t = e.key;
      if (t === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (b) {
          var S = b.getAttribute("data-emotion");
          S.indexOf(" ") !== -1 &&
            (document.head.appendChild(b), b.setAttribute("data-s", ""));
        });
      }
      var r = e.stylisPlugins || zx,
        o = {},
        i,
        a = [];
      (i = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (b) {
            for (
              var S = b.getAttribute("data-emotion").split(" "), _ = 1;
              _ < S.length;
              _++
            )
              o[S[_]] = !0;
            a.push(b);
          },
        );
      var s,
        l = [Mx, Lx];
      {
        var c,
          f = [
            Rx,
            Ix(function (b) {
              c.insert(b);
            }),
          ],
          p = _x(l.concat(r, f)),
          m = function (b) {
            return ko(Nx(b), p);
          };
        s = function (b, S, _, v) {
          (c = _),
            m(b ? b + "{" + S.styles + "}" : S.styles),
            v && (w.inserted[S.name] = !0);
        };
      }
      var w = {
        key: t,
        sheet: new hx({
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
      return w.sheet.hydrate(a), w;
    },
    Rd = {},
    jx = {
      get exports() {
        return Rd;
      },
      set exports(e) {
        Rd = e;
      },
    },
    Ee = {},
    et = typeof Symbol == "function" && Symbol.for,
    _d = et ? Symbol.for("react.element") : 60103,
    Id = et ? Symbol.for("react.portal") : 60106,
    qs = et ? Symbol.for("react.fragment") : 60107,
    Ks = et ? Symbol.for("react.strict_mode") : 60108,
    Js = et ? Symbol.for("react.profiler") : 60114,
    Gs = et ? Symbol.for("react.provider") : 60109,
    Ys = et ? Symbol.for("react.context") : 60110,
    Pd = et ? Symbol.for("react.async_mode") : 60111,
    Qs = et ? Symbol.for("react.concurrent_mode") : 60111,
    Xs = et ? Symbol.for("react.forward_ref") : 60112,
    Zs = et ? Symbol.for("react.suspense") : 60113,
    Fx = et ? Symbol.for("react.suspense_list") : 60120,
    el = et ? Symbol.for("react.memo") : 60115,
    tl = et ? Symbol.for("react.lazy") : 60116,
    Dx = et ? Symbol.for("react.block") : 60121,
    Ux = et ? Symbol.for("react.fundamental") : 60117,
    Wx = et ? Symbol.for("react.responder") : 60118,
    Vx = et ? Symbol.for("react.scope") : 60119;
  function Bt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case _d:
          switch (((e = e.type), e)) {
            case Pd:
            case Qs:
            case qs:
            case Js:
            case Ks:
            case Zs:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ys:
                case Xs:
                case tl:
                case el:
                case Gs:
                  return e;
                default:
                  return t;
              }
          }
        case Id:
          return t;
      }
    }
  }
  function Dg(e) {
    return Bt(e) === Qs;
  }
  (Ee.AsyncMode = Pd),
    (Ee.ConcurrentMode = Qs),
    (Ee.ContextConsumer = Ys),
    (Ee.ContextProvider = Gs),
    (Ee.Element = _d),
    (Ee.ForwardRef = Xs),
    (Ee.Fragment = qs),
    (Ee.Lazy = tl),
    (Ee.Memo = el),
    (Ee.Portal = Id),
    (Ee.Profiler = Js),
    (Ee.StrictMode = Ks),
    (Ee.Suspense = Zs),
    (Ee.isAsyncMode = function (e) {
      return Dg(e) || Bt(e) === Pd;
    }),
    (Ee.isConcurrentMode = Dg),
    (Ee.isContextConsumer = function (e) {
      return Bt(e) === Ys;
    }),
    (Ee.isContextProvider = function (e) {
      return Bt(e) === Gs;
    }),
    (Ee.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === _d;
    }),
    (Ee.isForwardRef = function (e) {
      return Bt(e) === Xs;
    }),
    (Ee.isFragment = function (e) {
      return Bt(e) === qs;
    }),
    (Ee.isLazy = function (e) {
      return Bt(e) === tl;
    }),
    (Ee.isMemo = function (e) {
      return Bt(e) === el;
    }),
    (Ee.isPortal = function (e) {
      return Bt(e) === Id;
    }),
    (Ee.isProfiler = function (e) {
      return Bt(e) === Js;
    }),
    (Ee.isStrictMode = function (e) {
      return Bt(e) === Ks;
    }),
    (Ee.isSuspense = function (e) {
      return Bt(e) === Zs;
    }),
    (Ee.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === qs ||
        e === Qs ||
        e === Js ||
        e === Ks ||
        e === Zs ||
        e === Fx ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === tl ||
            e.$$typeof === el ||
            e.$$typeof === Gs ||
            e.$$typeof === Ys ||
            e.$$typeof === Xs ||
            e.$$typeof === Ux ||
            e.$$typeof === Wx ||
            e.$$typeof === Vx ||
            e.$$typeof === Dx))
      );
    }),
    (Ee.typeOf = Bt),
    (function (e) {
      e.exports = Ee;
    })(jx);
  var Ug = Rd,
    Hx = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    qx = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Wg = {};
  (Wg[Ug.ForwardRef] = Hx), (Wg[Ug.Memo] = qx);
  var Kx = !0;
  function Vg(e, t, n) {
    var r = "";
    return (
      n.split(" ").forEach(function (o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
      }),
      r
    );
  }
  var Hg = function (e, t, n) {
      var r = e.key + "-" + t.name;
      (n === !1 || Kx === !1) &&
        e.registered[r] === void 0 &&
        (e.registered[r] = t.styles);
    },
    Ad = function (e, t, n) {
      Hg(e, t, n);
      var r = e.key + "-" + t.name;
      if (e.inserted[t.name] === void 0) {
        var o = t;
        do e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
        while (o !== void 0);
      }
    };
  function Jx(e) {
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
  var Gx = {
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
    Yx = /[A-Z]|^ms/g,
    Qx = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    qg = function (e) {
      return e.charCodeAt(1) === 45;
    },
    Kg = function (e) {
      return e != null && typeof e != "boolean";
    },
    $d = Rg(function (e) {
      return qg(e) ? e : e.replace(Yx, "-$&").toLowerCase();
    }),
    Jg = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if (typeof t == "string")
            return t.replace(Qx, function (n, r, o) {
              return (yn = { name: r, styles: o, next: yn }), r;
            });
      }
      return Gx[e] !== 1 && !qg(e) && typeof t == "number" && t !== 0
        ? t + "px"
        : t;
    };
  function Fi(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        if (n.anim === 1)
          return (yn = { name: n.name, styles: n.styles, next: yn }), n.name;
        if (n.styles !== void 0) {
          var r = n.next;
          if (r !== void 0)
            for (; r !== void 0; )
              (yn = { name: r.name, styles: r.styles, next: yn }), (r = r.next);
          var o = n.styles + ";";
          return o;
        }
        return Xx(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var i = yn,
            a = n(e);
          return (yn = i), Fi(e, t, a);
        }
        break;
      }
    }
    if (t == null) return n;
    var s = t[n];
    return s !== void 0 ? s : n;
  }
  function Xx(e, t, n) {
    var r = "";
    if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) r += Fi(e, t, n[o]) + ";";
    else
      for (var i in n) {
        var a = n[i];
        if (typeof a != "object")
          t != null && t[a] !== void 0
            ? (r += i + "{" + t[a] + "}")
            : Kg(a) && (r += $d(i) + ":" + Jg(i, a) + ";");
        else if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var s = 0; s < a.length; s++)
            Kg(a[s]) && (r += $d(i) + ":" + Jg(i, a[s]) + ";");
        else {
          var l = Fi(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += $d(i) + ":" + l + ";";
              break;
            }
            default:
              r += i + "{" + l + "}";
          }
        }
      }
    return r;
  }
  var Gg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    yn,
    nl = function (e, t, n) {
      if (
        e.length === 1 &&
        typeof e[0] == "object" &&
        e[0] !== null &&
        e[0].styles !== void 0
      )
        return e[0];
      var r = !0,
        o = "";
      yn = void 0;
      var i = e[0];
      i == null || i.raw === void 0
        ? ((r = !1), (o += Fi(n, t, i)))
        : (o += i[0]);
      for (var a = 1; a < e.length; a++)
        (o += Fi(n, t, e[a])), r && (o += i[a]);
      Gg.lastIndex = 0;
      for (var s = "", l; (l = Gg.exec(o)) !== null; ) s += "-" + l[1];
      var c = Jx(o) + s;
      return { name: c, styles: o, next: yn };
    },
    Zx = function (e) {
      return e();
    },
    Yg = lu.useInsertionEffect ? lu.useInsertionEffect : !1,
    e2 = Yg || Zx,
    Qg = Yg || E.useLayoutEffect,
    Md = E.createContext(typeof HTMLElement < "u" ? Fg({ key: "css" }) : null),
    t2 = Md.Provider,
    n2 = function () {
      return E.useContext(Md);
    },
    Xg = function (e) {
      return E.forwardRef(function (t, n) {
        var r = E.useContext(Md);
        return e(t, r, n);
      });
    },
    Ld = E.createContext({}),
    r2 = Xg(function (e, t) {
      var n = e.styles,
        r = nl([n], void 0, E.useContext(Ld)),
        o = E.useRef();
      return (
        Qg(
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
        Qg(
          function () {
            var i = o.current,
              a = i[0],
              s = i[1];
            if (s) {
              i[1] = !1;
              return;
            }
            if ((r.next !== void 0 && Ad(t, r.next, !0), a.tags.length)) {
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
  function rl() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return nl(t);
  }
  var Eo = function () {
      var e = rl.apply(void 0, arguments),
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
    o2 = dx,
    i2 = function (e) {
      return e !== "theme";
    },
    Zg = function (e) {
      return typeof e == "string" && e.charCodeAt(0) > 96 ? o2 : i2;
    },
    e0 = function (e, t, n) {
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
    a2 = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        Hg(t, n, r),
        e2(function () {
          return Ad(t, n, r);
        }),
        null
      );
    },
    s2 = function e(t, n) {
      var r = t.__emotion_real === t,
        o = (r && t.__emotion_base) || t,
        i,
        a;
      n !== void 0 && ((i = n.label), (a = n.target));
      var s = e0(t, n, r),
        l = s || Zg(o),
        c = !l("as");
      return function () {
        var f = arguments,
          p =
            r && t.__emotion_styles !== void 0
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (i !== void 0 && p.push("label:" + i + ";"),
          f[0] == null || f[0].raw === void 0)
        )
          p.push.apply(p, f);
        else {
          p.push(f[0][0]);
          for (var m = f.length, w = 1; w < m; w++) p.push(f[w], f[0][w]);
        }
        var b = Xg(function (S, _, v) {
          var h = (c && S.as) || o,
            g = "",
            x = [],
            C = S;
          if (S.theme == null) {
            C = {};
            for (var N in S) C[N] = S[N];
            C.theme = E.useContext(Ld);
          }
          typeof S.className == "string"
            ? (g = Vg(_.registered, x, S.className))
            : S.className != null && (g = S.className + " ");
          var T = nl(p.concat(x), _.registered, C);
          (g += _.key + "-" + T.name), a !== void 0 && (g += " " + a);
          var I = c && s === void 0 ? Zg(h) : l,
            B = {};
          for (var M in S) (c && M === "as") || (I(M) && (B[M] = S[M]));
          return (
            (B.className = g),
            (B.ref = v),
            E.createElement(
              E.Fragment,
              null,
              E.createElement(a2, {
                cache: _,
                serialized: T,
                isStringTag: typeof h == "string",
              }),
              E.createElement(h, B),
            )
          );
        });
        return (
          (b.displayName =
            i !== void 0
              ? i
              : "Styled(" +
                (typeof o == "string"
                  ? o
                  : o.displayName || o.name || "Component") +
                ")"),
          (b.defaultProps = t.defaultProps),
          (b.__emotion_real = b),
          (b.__emotion_base = o),
          (b.__emotion_styles = p),
          (b.__emotion_forwardProp = s),
          Object.defineProperty(b, "toString", {
            value: function () {
              return "." + a;
            },
          }),
          (b.withComponent = function (S, _) {
            return e(S, k({}, n, _, { shouldForwardProp: e0(b, _, !0) })).apply(
              void 0,
              p,
            );
          }),
          b
        );
      };
    };
  const l2 = s2;
  var u2 = [
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
    Bd = l2.bind();
  u2.forEach(function (e) {
    Bd[e] = Bd(e);
  });
  const c2 = Bd;
  let zd;
  typeof document == "object" && (zd = Fg({ key: "css", prepend: !0 }));
  function d2(e) {
    const { injectFirst: t, children: n } = e;
    return t && zd ? R(t2, { value: zd, children: n }) : n;
  }
  function f2(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function p2(e) {
    const { styles: t, defaultTheme: n = {} } = e;
    return R(r2, {
      styles: typeof t == "function" ? (r) => t(f2(r) ? n : r) : t,
    });
  }
  function h2(e, t) {
    return c2(e, t);
  }
  const m2 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  };
  function Di(e, t) {
    return t ? qt(e, t, { clone: !1 }) : e;
  }
  const jd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    t0 = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${jd[e]}px)`,
    };
  function $n(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const o = r.breakpoints || t0;
      return t.reduce((i, a, s) => ((i[o.up(o.keys[s])] = n(t[s])), i), {});
    }
    if (typeof t == "object") {
      const o = r.breakpoints || t0;
      return Object.keys(t).reduce((i, a) => {
        if (Object.keys(o.values || jd).indexOf(a) !== -1) {
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
  function g2(e = {}) {
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
  function y2(e, t) {
    return e.reduce((n, r) => {
      const o = n[r];
      return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
  }
  function Co(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
      const r = `vars.${t}`
        .split(".")
        .reduce((o, i) => (o && o[i] ? o[i] : null), e);
      if (r != null) return r;
    }
    return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
  }
  function ol(e, t, n, r = n) {
    let o;
    return (
      typeof e == "function"
        ? (o = e(n))
        : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = Co(e, n) || r),
      t && (o = t(o, r, e)),
      o
    );
  }
  function xe(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      i = (a) => {
        if (a[t] == null) return null;
        const s = a[t],
          l = a.theme,
          c = Co(l, r) || {};
        return $n(a, s, (f) => {
          let p = ol(c, o, f);
          return (
            f === p &&
              typeof f == "string" &&
              (p = ol(c, o, `${t}${f === "default" ? "" : G(f)}`, f)),
            n === !1 ? p : { [n]: p }
          );
        });
      };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
  }
  function il(...e) {
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
        Object.keys(r).reduce((o, i) => (t[i] ? Di(o, t[i](r)) : o), {});
    return (
      (n.propTypes = {}),
      (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
      n
    );
  }
  function b2(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
  }
  const v2 = { m: "margin", p: "padding" },
    w2 = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    n0 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    x2 = b2((e) => {
      if (e.length > 2)
        if (n0[e]) e = n0[e];
        else return [e];
      const [t, n] = e.split(""),
        r = v2[t],
        o = w2[n] || "";
      return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    Fd = [
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
    Dd = [
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
  [...Fd, ...Dd];
  function Ui(e, t, n, r) {
    var o;
    const i = (o = Co(e, t, !1)) != null ? o : n;
    return typeof i == "number"
      ? (a) => (typeof a == "string" ? a : i * a)
      : Array.isArray(i)
      ? (a) => (typeof a == "string" ? a : i[a])
      : typeof i == "function"
      ? i
      : () => {};
  }
  function r0(e) {
    return Ui(e, "spacing", 8);
  }
  function Wi(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
      r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
  }
  function S2(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = Wi(t, n)), r), {});
  }
  function k2(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = x2(n),
      i = S2(o, r),
      a = e[n];
    return $n(e, a, i);
  }
  function o0(e, t) {
    const n = r0(e.theme);
    return Object.keys(e)
      .map((r) => k2(e, t, r, n))
      .reduce(Di, {});
  }
  function We(e) {
    return o0(e, Fd);
  }
  (We.propTypes = {}), (We.filterProps = Fd);
  function Ve(e) {
    return o0(e, Dd);
  }
  (Ve.propTypes = {}), (Ve.filterProps = Dd);
  function bn(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  const E2 = xe({ prop: "border", themeKey: "borders", transform: bn }),
    C2 = xe({ prop: "borderTop", themeKey: "borders", transform: bn }),
    O2 = xe({ prop: "borderRight", themeKey: "borders", transform: bn }),
    N2 = xe({ prop: "borderBottom", themeKey: "borders", transform: bn }),
    T2 = xe({ prop: "borderLeft", themeKey: "borders", transform: bn }),
    R2 = xe({ prop: "borderColor", themeKey: "palette" }),
    _2 = xe({ prop: "borderTopColor", themeKey: "palette" }),
    I2 = xe({ prop: "borderRightColor", themeKey: "palette" }),
    P2 = xe({ prop: "borderBottomColor", themeKey: "palette" }),
    A2 = xe({ prop: "borderLeftColor", themeKey: "palette" }),
    al = (e) => {
      if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = Ui(e.theme, "shape.borderRadius", 4),
          n = (r) => ({ borderRadius: Wi(t, r) });
        return $n(e, e.borderRadius, n);
      }
      return null;
    };
  (al.propTypes = {}),
    (al.filterProps = ["borderRadius"]),
    il(E2, C2, O2, N2, T2, R2, _2, I2, P2, A2, al);
  const sl = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = Ui(e.theme, "spacing", 8),
        n = (r) => ({ gap: Wi(t, r) });
      return $n(e, e.gap, n);
    }
    return null;
  };
  (sl.propTypes = {}), (sl.filterProps = ["gap"]);
  const ll = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = Ui(e.theme, "spacing", 8),
        n = (r) => ({ columnGap: Wi(t, r) });
      return $n(e, e.columnGap, n);
    }
    return null;
  };
  (ll.propTypes = {}), (ll.filterProps = ["columnGap"]);
  const ul = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = Ui(e.theme, "spacing", 8),
        n = (r) => ({ rowGap: Wi(t, r) });
      return $n(e, e.rowGap, n);
    }
    return null;
  };
  (ul.propTypes = {}), (ul.filterProps = ["rowGap"]);
  const $2 = xe({ prop: "gridColumn" }),
    M2 = xe({ prop: "gridRow" }),
    L2 = xe({ prop: "gridAutoFlow" }),
    B2 = xe({ prop: "gridAutoColumns" }),
    z2 = xe({ prop: "gridAutoRows" }),
    j2 = xe({ prop: "gridTemplateColumns" }),
    F2 = xe({ prop: "gridTemplateRows" }),
    D2 = xe({ prop: "gridTemplateAreas" }),
    U2 = xe({ prop: "gridArea" });
  il(sl, ll, ul, $2, M2, L2, B2, z2, j2, F2, D2, U2);
  function Oo(e, t) {
    return t === "grey" ? t : e;
  }
  const W2 = xe({ prop: "color", themeKey: "palette", transform: Oo }),
    V2 = xe({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: Oo,
    }),
    H2 = xe({ prop: "backgroundColor", themeKey: "palette", transform: Oo });
  il(W2, V2, H2);
  function zt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const q2 = xe({ prop: "width", transform: zt }),
    Ud = (e) => {
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
              jd[n] ||
              zt(n),
          };
        };
        return $n(e, e.maxWidth, t);
      }
      return null;
    };
  Ud.filterProps = ["maxWidth"];
  const K2 = xe({ prop: "minWidth", transform: zt }),
    J2 = xe({ prop: "height", transform: zt }),
    G2 = xe({ prop: "maxHeight", transform: zt }),
    Y2 = xe({ prop: "minHeight", transform: zt });
  xe({ prop: "size", cssProperty: "width", transform: zt }),
    xe({ prop: "size", cssProperty: "height", transform: zt });
  const Q2 = xe({ prop: "boxSizing" });
  il(q2, Ud, K2, J2, G2, Y2, Q2);
  const X2 = {
      border: { themeKey: "borders", transform: bn },
      borderTop: { themeKey: "borders", transform: bn },
      borderRight: { themeKey: "borders", transform: bn },
      borderBottom: { themeKey: "borders", transform: bn },
      borderLeft: { themeKey: "borders", transform: bn },
      borderColor: { themeKey: "palette" },
      borderTopColor: { themeKey: "palette" },
      borderRightColor: { themeKey: "palette" },
      borderBottomColor: { themeKey: "palette" },
      borderLeftColor: { themeKey: "palette" },
      borderRadius: { themeKey: "shape.borderRadius", style: al },
      color: { themeKey: "palette", transform: Oo },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: Oo,
      },
      backgroundColor: { themeKey: "palette", transform: Oo },
      p: { style: Ve },
      pt: { style: Ve },
      pr: { style: Ve },
      pb: { style: Ve },
      pl: { style: Ve },
      px: { style: Ve },
      py: { style: Ve },
      padding: { style: Ve },
      paddingTop: { style: Ve },
      paddingRight: { style: Ve },
      paddingBottom: { style: Ve },
      paddingLeft: { style: Ve },
      paddingX: { style: Ve },
      paddingY: { style: Ve },
      paddingInline: { style: Ve },
      paddingInlineStart: { style: Ve },
      paddingInlineEnd: { style: Ve },
      paddingBlock: { style: Ve },
      paddingBlockStart: { style: Ve },
      paddingBlockEnd: { style: Ve },
      m: { style: We },
      mt: { style: We },
      mr: { style: We },
      mb: { style: We },
      ml: { style: We },
      mx: { style: We },
      my: { style: We },
      margin: { style: We },
      marginTop: { style: We },
      marginRight: { style: We },
      marginBottom: { style: We },
      marginLeft: { style: We },
      marginX: { style: We },
      marginY: { style: We },
      marginInline: { style: We },
      marginInlineStart: { style: We },
      marginInlineEnd: { style: We },
      marginBlock: { style: We },
      marginBlockStart: { style: We },
      marginBlockEnd: { style: We },
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
      gap: { style: sl },
      rowGap: { style: ul },
      columnGap: { style: ll },
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
      width: { transform: zt },
      maxWidth: { style: Ud },
      minWidth: { transform: zt },
      height: { transform: zt },
      maxHeight: { transform: zt },
      minHeight: { transform: zt },
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
    cl = X2;
  function Z2(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
      n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
  }
  function eS(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function tS() {
    function e(n, r, o, i) {
      const a = { [n]: r, theme: o },
        s = i[n];
      if (!s) return { [n]: r };
      const { cssProperty: l = n, themeKey: c, transform: f, style: p } = s;
      if (r == null) return null;
      const m = Co(o, c) || {};
      return p
        ? p(a)
        : $n(a, r, (w) => {
            let b = ol(m, f, w);
            return (
              w === b &&
                typeof w == "string" &&
                (b = ol(m, f, `${n}${w === "default" ? "" : G(w)}`, w)),
              l === !1 ? b : { [l]: b }
            );
          });
    }
    function t(n) {
      var r;
      const { sx: o, theme: i = {} } = n || {};
      if (!o) return null;
      const a = (r = i.unstable_sxConfig) != null ? r : cl;
      function s(l) {
        let c = l;
        if (typeof l == "function") c = l(i);
        else if (typeof l != "object") return l;
        if (!c) return null;
        const f = g2(i.breakpoints),
          p = Object.keys(f);
        let m = f;
        return (
          Object.keys(c).forEach((w) => {
            const b = eS(c[w], i);
            if (b != null)
              if (typeof b == "object")
                if (a[w]) m = Di(m, e(w, b, i, a));
                else {
                  const S = $n({ theme: i }, b, (_) => ({ [w]: _ }));
                  Z2(S, b) ? (m[w] = t({ sx: b, theme: i })) : (m = Di(m, S));
                }
              else m = Di(m, e(w, b, i, a));
          }),
          y2(p, m)
        );
      }
      return Array.isArray(o) ? o.map(s) : s(o);
    }
    return t;
  }
  const i0 = tS();
  i0.filterProps = ["sx"];
  const Wd = i0,
    nS = ["sx"],
    rS = (e) => {
      var t, n;
      const r = { systemProps: {}, otherProps: {} },
        o =
          (t =
            e == null || (n = e.theme) == null
              ? void 0
              : n.unstable_sxConfig) != null
            ? t
            : cl;
      return (
        Object.keys(e).forEach((i) => {
          o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
        }),
        r
      );
    };
  function oS(e) {
    const { sx: t } = e,
      n = X(e, nS),
      { systemProps: r, otherProps: o } = rS(n);
    let i;
    return (
      Array.isArray(t)
        ? (i = [r, ...t])
        : typeof t == "function"
        ? (i = (...a) => {
            const s = t(...a);
            return Tr(s) ? k({}, r, s) : r;
          })
        : (i = k({}, r, t)),
      k({}, o, { sx: i })
    );
  }
  function a0(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (n = a0(e[t])) && (r && (r += " "), (r += n));
      else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
  }
  function ee() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
      (e = arguments[n++]) && (t = a0(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const iS = ["values", "unit", "step"],
    aS = (e) => {
      const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
      return (
        t.sort((n, r) => n.val - r.val),
        t.reduce((n, r) => k({}, n, { [r.key]: r.val }), {})
      );
    };
  function sS(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
      } = e,
      o = X(e, iS),
      i = aS(t),
      a = Object.keys(i);
    function s(m) {
      return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
    }
    function l(m) {
      return `@media (max-width:${
        (typeof t[m] == "number" ? t[m] : m) - r / 100
      }${n})`;
    }
    function c(m, w) {
      const b = a.indexOf(w);
      return `@media (min-width:${
        typeof t[m] == "number" ? t[m] : m
      }${n}) and (max-width:${
        (b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : w) - r / 100
      }${n})`;
    }
    function f(m) {
      return a.indexOf(m) + 1 < a.length ? c(m, a[a.indexOf(m) + 1]) : s(m);
    }
    function p(m) {
      const w = a.indexOf(m);
      return w === 0
        ? s(a[1])
        : w === a.length - 1
        ? l(a[w])
        : c(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
    }
    return k(
      {
        keys: a,
        values: i,
        up: s,
        down: l,
        between: c,
        only: f,
        not: p,
        unit: n,
      },
      o,
    );
  }
  const lS = { borderRadius: 4 },
    uS = lS;
  function cS(e = 8) {
    if (e.mui) return e;
    const t = r0({ spacing: e }),
      n = (...r) =>
        (r.length === 0 ? [1] : r)
          .map((o) => {
            const i = t(o);
            return typeof i == "number" ? `${i}px` : i;
          })
          .join(" ");
    return (n.mui = !0), n;
  }
  const dS = ["breakpoints", "palette", "spacing", "shape"];
  function dl(e = {}, ...t) {
    const {
        breakpoints: n = {},
        palette: r = {},
        spacing: o,
        shape: i = {},
      } = e,
      a = X(e, dS),
      s = sS(n),
      l = cS(o);
    let c = qt(
      {
        breakpoints: s,
        direction: "ltr",
        components: {},
        palette: k({ mode: "light" }, r),
        spacing: l,
        shape: k({}, uS, i),
      },
      a,
    );
    return (
      (c = t.reduce((f, p) => qt(f, p), c)),
      (c.unstable_sxConfig = k(
        {},
        cl,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (c.unstable_sx = function (f) {
        return Wd({ sx: f, theme: this });
      }),
      c
    );
  }
  const fS = E.createContext(null),
    s0 = fS;
  function l0() {
    return E.useContext(s0);
  }
  const pS = typeof Symbol == "function" && Symbol.for,
    hS = pS ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  function mS(e, t) {
    return typeof t == "function" ? t(e) : k({}, e, t);
  }
  function gS(e) {
    const { children: t, theme: n } = e,
      r = l0(),
      o = E.useMemo(() => {
        const i = r === null ? n : mS(r, n);
        return i != null && (i[hS] = r !== null), i;
      }, [n, r]);
    return R(s0.Provider, { value: o, children: t });
  }
  function yS(e) {
    return Object.keys(e).length === 0;
  }
  function bS(e = null) {
    const t = l0();
    return !t || yS(t) ? e : t;
  }
  const vS = dl();
  function Vd(e = vS) {
    return bS(e);
  }
  const wS = ["variant"];
  function u0(e) {
    return e.length === 0;
  }
  function c0(e) {
    const { variant: t } = e,
      n = X(e, wS);
    let r = t || "";
    return (
      Object.keys(n)
        .sort()
        .forEach((o) => {
          o === "color"
            ? (r += u0(r) ? e[o] : G(e[o]))
            : (r += `${u0(r) ? o : G(o)}${G(e[o].toString())}`);
        }),
      r
    );
  }
  const xS = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
    ],
    SS = ["theme"],
    kS = ["theme"];
  function Vi(e) {
    return Object.keys(e).length === 0;
  }
  function ES(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  const CS = (e, t) =>
      t.components && t.components[e] && t.components[e].styleOverrides
        ? t.components[e].styleOverrides
        : null,
    OS = (e, t) => {
      let n = [];
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants);
      const r = {};
      return (
        n.forEach((o) => {
          const i = c0(o.props);
          r[i] = o.style;
        }),
        r
      );
    },
    NS = (e, t, n, r) => {
      var o, i;
      const { ownerState: a = {} } = e,
        s = [],
        l =
          n == null || (o = n.components) == null || (i = o[r]) == null
            ? void 0
            : i.variants;
      return (
        l &&
          l.forEach((c) => {
            let f = !0;
            Object.keys(c.props).forEach((p) => {
              a[p] !== c.props[p] && e[p] !== c.props[p] && (f = !1);
            }),
              f && s.push(t[c0(c.props)]);
          }),
        s
      );
    };
  function Hi(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  const TS = dl();
  function d0(e = {}) {
    const {
        defaultTheme: t = TS,
        rootShouldForwardProp: n = Hi,
        slotShouldForwardProp: r = Hi,
      } = e,
      o = (i) => {
        const a = Vi(i.theme) ? t : i.theme;
        return Wd(k({}, i, { theme: a }));
      };
    return (
      (o.__mui_systemSx = !0),
      (i, a = {}) => {
        m2(i, (g) => g.filter((x) => !(x != null && x.__mui_systemSx)));
        const {
            name: s,
            slot: l,
            skipVariantsResolver: c,
            skipSx: f,
            overridesResolver: p,
          } = a,
          m = X(a, xS),
          w = c !== void 0 ? c : (l && l !== "Root") || !1,
          b = f || !1;
        let S,
          _ = Hi;
        l === "Root" ? (_ = n) : l ? (_ = r) : ES(i) && (_ = void 0);
        const v = h2(i, k({ shouldForwardProp: _, label: S }, m)),
          h = (g, ...x) => {
            const C = x
              ? x.map((I) =>
                  typeof I == "function" && I.__emotion_real !== I
                    ? (B) => {
                        let { theme: M } = B,
                          U = X(B, SS);
                        return I(k({ theme: Vi(M) ? t : M }, U));
                      }
                    : I,
                )
              : [];
            let N = g;
            s &&
              p &&
              C.push((I) => {
                const B = Vi(I.theme) ? t : I.theme,
                  M = CS(s, B);
                if (M) {
                  const U = {};
                  return (
                    Object.entries(M).forEach(([F, V]) => {
                      U[F] =
                        typeof V == "function" ? V(k({}, I, { theme: B })) : V;
                    }),
                    p(I, U)
                  );
                }
                return null;
              }),
              s &&
                !w &&
                C.push((I) => {
                  const B = Vi(I.theme) ? t : I.theme;
                  return NS(I, OS(s, B), B, s);
                }),
              b || C.push(o);
            const T = C.length - x.length;
            if (Array.isArray(g) && T > 0) {
              const I = new Array(T).fill("");
              (N = [...g, ...I]), (N.raw = [...g.raw, ...I]);
            } else
              typeof g == "function" &&
                g.__emotion_real !== g &&
                (N = (I) => {
                  let { theme: B } = I,
                    M = X(I, kS);
                  return g(k({ theme: Vi(B) ? t : B }, M));
                });
            return v(N, ...C);
          };
        return v.withConfig && (h.withConfig = v.withConfig), h;
      }
    );
  }
  const RS = d0(),
    _S = RS;
  function IS(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
      !t.components ||
      !t.components[n] ||
      !t.components[n].defaultProps
      ? r
      : kd(t.components[n].defaultProps, r);
  }
  function f0({ props: e, name: t, defaultTheme: n }) {
    const r = Vd(n);
    return IS({ theme: r, name: t, props: e });
  }
  function Hd(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n);
  }
  function PS(e) {
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
  function _r(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return _r(PS(e));
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
      throw new Error(rr(9, e));
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
        throw new Error(rr(10, o));
    } else r = r.split(",");
    return (
      (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
  }
  function fl(e) {
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
  function AS(e) {
    e = _r(e);
    const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      o = t[2] / 100,
      i = r * Math.min(o, 1 - o),
      a = (c, f = (c + n / 30) % 12) =>
        o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
    let s = "rgb";
    const l = [
      Math.round(a(0) * 255),
      Math.round(a(8) * 255),
      Math.round(a(4) * 255),
    ];
    return (
      e.type === "hsla" && ((s += "a"), l.push(t[3])),
      fl({ type: s, values: l })
    );
  }
  function p0(e) {
    e = _r(e);
    let t = e.type === "hsl" || e.type === "hsla" ? _r(AS(e)).values : e.values;
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
  function $S(e, t) {
    const n = p0(e),
      r = p0(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  }
  function Ot(e, t) {
    return (
      (e = _r(e)),
      (t = Hd(t)),
      (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
      e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      fl(e)
    );
  }
  function pl(e, t) {
    if (((e = _r(e)), (t = Hd(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return fl(e);
  }
  function hl(e, t) {
    if (((e = _r(e)), (t = Hd(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return fl(e);
  }
  const MS = {};
  function LS(e) {
    const t = Vd();
    return R(Ld.Provider, {
      value: typeof t == "object" ? t : MS,
      children: e.children,
    });
  }
  function BS(e) {
    const { children: t, theme: n } = e;
    return R(gS, { theme: n, children: R(LS, { children: t }) });
  }
  const zS = [
      "className",
      "component",
      "disableGutters",
      "fixed",
      "maxWidth",
      "classes",
    ],
    jS = dl(),
    FS = _S("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${G(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    DS = (e) => f0({ props: e, name: "MuiContainer", defaultTheme: jS }),
    US = (e, t) => {
      const n = (l) => ie(t, l),
        { classes: r, fixed: o, disableGutters: i, maxWidth: a } = e,
        s = {
          root: [
            "root",
            a && `maxWidth${G(String(a))}`,
            o && "fixed",
            i && "disableGutters",
          ],
        };
      return ce(s, n, r);
    };
  function WS(e = {}) {
    const {
        createStyledComponent: t = FS,
        useThemeProps: n = DS,
        componentName: r = "MuiContainer",
      } = e,
      o = t(
        ({ theme: i, ownerState: a }) =>
          k(
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
            const c = l,
              f = i.breakpoints.values[c];
            return (
              f !== 0 &&
                (s[i.breakpoints.up(c)] = {
                  maxWidth: `${f}${i.breakpoints.unit}`,
                }),
              s
            );
          }, {}),
        ({ theme: i, ownerState: a }) =>
          k(
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
    return E.forwardRef(function (i, a) {
      const s = n(i),
        {
          className: l,
          component: c = "div",
          disableGutters: f = !1,
          fixed: p = !1,
          maxWidth: m = "lg",
        } = s,
        w = X(s, zS),
        b = k({}, s, {
          component: c,
          disableGutters: f,
          fixed: p,
          maxWidth: m,
        }),
        S = US(b, r);
      return R(
        o,
        k({ as: c, ownerState: b, className: ee(S.root, l), ref: a }, w),
      );
    });
  }
  function VS(e, t) {
    return k(
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
  const HS = ["mode", "contrastThreshold", "tonalOffset"],
    h0 = {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: $i.white, default: $i.white },
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
    qd = {
      text: {
        primary: $i.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: $i.white,
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
  function m0(e, t, n, r) {
    const o = r.light || r,
      i = r.dark || r * 1.5;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : t === "light"
        ? (e.light = hl(e.main, o))
        : t === "dark" && (e.dark = pl(e.main, i)));
  }
  function qS(e = "light") {
    return e === "dark"
      ? { main: Or[200], light: Or[50], dark: Or[400] }
      : { main: Or[700], light: Or[400], dark: Or[800] };
  }
  function KS(e = "light") {
    return e === "dark"
      ? { main: Cr[200], light: Cr[50], dark: Cr[400] }
      : { main: Cr[500], light: Cr[300], dark: Cr[700] };
  }
  function JS(e = "light") {
    return e === "dark"
      ? { main: Er[500], light: Er[300], dark: Er[700] }
      : { main: Er[700], light: Er[400], dark: Er[800] };
  }
  function GS(e = "light") {
    return e === "dark"
      ? { main: vo[400], light: vo[300], dark: vo[700] }
      : { main: vo[700], light: vo[500], dark: vo[900] };
  }
  function YS(e = "light") {
    return e === "dark"
      ? { main: Nr[400], light: Nr[300], dark: Nr[700] }
      : { main: Nr[800], light: Nr[500], dark: Nr[900] };
  }
  function QS(e = "light") {
    return e === "dark"
      ? { main: wo[400], light: wo[300], dark: wo[700] }
      : { main: "#ed6c02", light: wo[500], dark: wo[900] };
  }
  function XS(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
      } = e,
      o = X(e, HS),
      i = e.primary || qS(t),
      a = e.secondary || KS(t),
      s = e.error || JS(t),
      l = e.info || GS(t),
      c = e.success || YS(t),
      f = e.warning || QS(t);
    function p(b) {
      return $S(b, qd.text.primary) >= n ? qd.text.primary : h0.text.primary;
    }
    const m = ({
        color: b,
        name: S,
        mainShade: _ = 500,
        lightShade: v = 300,
        darkShade: h = 700,
      }) => {
        if (
          ((b = k({}, b)),
          !b.main && b[_] && (b.main = b[_]),
          !b.hasOwnProperty("main"))
        )
          throw new Error(rr(11, S ? ` (${S})` : "", _));
        if (typeof b.main != "string")
          throw new Error(rr(12, S ? ` (${S})` : "", JSON.stringify(b.main)));
        return (
          m0(b, "light", v, r),
          m0(b, "dark", h, r),
          b.contrastText || (b.contrastText = p(b.main)),
          b
        );
      },
      w = { dark: qd, light: h0 };
    return qt(
      k(
        {
          common: k({}, $i),
          mode: t,
          primary: m({ color: i, name: "primary" }),
          secondary: m({
            color: a,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700",
          }),
          error: m({ color: s, name: "error" }),
          warning: m({ color: f, name: "warning" }),
          info: m({ color: l, name: "info" }),
          success: m({ color: c, name: "success" }),
          grey: qw,
          contrastThreshold: n,
          getContrastText: p,
          augmentColor: m,
          tonalOffset: r,
        },
        w[t],
      ),
      o,
    );
  }
  const ZS = [
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
  function ek(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const g0 = { textTransform: "uppercase" },
    y0 = '"Roboto", "Helvetica", "Arial", sans-serif';
  function tk(e, t) {
    const n = typeof t == "function" ? t(e) : t,
      {
        fontFamily: r = y0,
        fontSize: o = 14,
        fontWeightLight: i = 300,
        fontWeightRegular: a = 400,
        fontWeightMedium: s = 500,
        fontWeightBold: l = 700,
        htmlFontSize: c = 16,
        allVariants: f,
        pxToRem: p,
      } = n,
      m = X(n, ZS),
      w = o / 14,
      b = p || ((v) => `${(v / c) * w}rem`),
      S = (v, h, g, x, C) =>
        k(
          { fontFamily: r, fontWeight: v, fontSize: b(h), lineHeight: g },
          r === y0 ? { letterSpacing: `${ek(x / h)}em` } : {},
          C,
          f,
        ),
      _ = {
        h1: S(i, 96, 1.167, -1.5),
        h2: S(i, 60, 1.2, -0.5),
        h3: S(a, 48, 1.167, 0),
        h4: S(a, 34, 1.235, 0.25),
        h5: S(a, 24, 1.334, 0),
        h6: S(s, 20, 1.6, 0.15),
        subtitle1: S(a, 16, 1.75, 0.15),
        subtitle2: S(s, 14, 1.57, 0.1),
        body1: S(a, 16, 1.5, 0.15),
        body2: S(a, 14, 1.43, 0.15),
        button: S(s, 14, 1.75, 0.4, g0),
        caption: S(a, 12, 1.66, 0.4),
        overline: S(a, 12, 2.66, 1, g0),
      };
    return qt(
      k(
        {
          htmlFontSize: c,
          pxToRem: b,
          fontFamily: r,
          fontSize: o,
          fontWeightLight: i,
          fontWeightRegular: a,
          fontWeightMedium: s,
          fontWeightBold: l,
        },
        _,
      ),
      m,
      { clone: !1 },
    );
  }
  const nk = 0.2,
    rk = 0.14,
    ok = 0.12;
  function Me(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${nk})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${rk})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ok})`,
    ].join(",");
  }
  const ik = [
      "none",
      Me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      Me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      Me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      Me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      Me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      Me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      Me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      Me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      Me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      Me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      Me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      Me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      Me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      Me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      Me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      Me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      Me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      Me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      Me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      Me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      Me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      Me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      Me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      Me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    ak = ik,
    sk = ["duration", "easing", "delay"],
    lk = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    uk = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function b0(e) {
    return `${Math.round(e)}ms`;
  }
  function ck(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
  }
  function dk(e) {
    const t = k({}, lk, e.easing),
      n = k({}, uk, e.duration);
    return k(
      {
        getAutoHeightDuration: ck,
        create: (r = ["all"], o = {}) => {
          const {
            duration: i = n.standard,
            easing: a = t.easeInOut,
            delay: s = 0,
          } = o;
          return (
            X(o, sk),
            (Array.isArray(r) ? r : [r])
              .map(
                (l) =>
                  `${l} ${typeof i == "string" ? i : b0(i)} ${a} ${
                    typeof s == "string" ? s : b0(s)
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
  const fk = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    pk = fk,
    hk = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
    ];
  function v0(e = {}, ...t) {
    const {
        mixins: n = {},
        palette: r = {},
        transitions: o = {},
        typography: i = {},
      } = e,
      a = X(e, hk);
    if (e.vars) throw new Error(rr(18));
    const s = XS(r),
      l = dl(e);
    let c = qt(l, {
      mixins: VS(l.breakpoints, n),
      palette: s,
      shadows: ak.slice(),
      typography: tk(s, i),
      transitions: dk(o),
      zIndex: k({}, pk),
    });
    return (
      (c = qt(c, a)),
      (c = t.reduce((f, p) => qt(f, p), c)),
      (c.unstable_sxConfig = k(
        {},
        cl,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (c.unstable_sx = function (f) {
        return Wd({ sx: f, theme: this });
      }),
      c
    );
  }
  const mk = v0(),
    ml = mk;
  function qi() {
    return Vd(ml);
  }
  function fe({ props: e, name: t }) {
    return f0({ props: e, name: t, defaultTheme: ml });
  }
  const vn = (e) => Hi(e) && e !== "classes",
    gk = Hi,
    yk = d0({ defaultTheme: ml, rootShouldForwardProp: vn }),
    J = yk,
    bk = (e) => {
      let t;
      return (
        e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
        (t / 100).toFixed(2)
      );
    },
    w0 = bk;
  function No(e) {
    return typeof e == "string";
  }
  function vk(e, t, n) {
    return e === void 0 || No(e)
      ? t
      : k({}, t, { ownerState: k({}, t.ownerState, n) });
  }
  function wk(e, t = []) {
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
  function Kd(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function x0(e) {
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
  function xk(e) {
    const {
      getSlotProps: t,
      additionalProps: n,
      externalSlotProps: r,
      externalForwardedProps: o,
      className: i,
    } = e;
    if (!t) {
      const w = ee(
          o == null ? void 0 : o.className,
          r == null ? void 0 : r.className,
          i,
          n == null ? void 0 : n.className,
        ),
        b = k(
          {},
          n == null ? void 0 : n.style,
          o == null ? void 0 : o.style,
          r == null ? void 0 : r.style,
        ),
        S = k({}, n, o, r);
      return (
        w.length > 0 && (S.className = w),
        Object.keys(b).length > 0 && (S.style = b),
        { props: S, internalRef: void 0 }
      );
    }
    const a = wk(k({}, o, r)),
      s = x0(r),
      l = x0(o),
      c = t(a),
      f = ee(
        c == null ? void 0 : c.className,
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
      ),
      p = k(
        {},
        c == null ? void 0 : c.style,
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style,
      ),
      m = k({}, c, n, l, s);
    return (
      f.length > 0 && (m.className = f),
      Object.keys(p).length > 0 && (m.style = p),
      { props: m, internalRef: c.ref }
    );
  }
  const Sk = ["elementType", "externalSlotProps", "ownerState"];
  function S0(e) {
    var t;
    const { elementType: n, externalSlotProps: r, ownerState: o } = e,
      i = X(e, Sk),
      a = Kd(r, o),
      { props: s, internalRef: l } = xk(k({}, i, { externalSlotProps: a })),
      c = it(
        l,
        a == null ? void 0 : a.ref,
        (t = e.additionalProps) == null ? void 0 : t.ref,
      );
    return vk(n, k({}, s, { ref: c }), o);
  }
  const kk = [
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
  function Ek(e) {
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
  function Ck(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e;
  }
  function Ok(e) {
    return !(
      e.disabled ||
      (e.tagName === "INPUT" && e.type === "hidden") ||
      Ck(e)
    );
  }
  function Nk(e) {
    const t = [],
      n = [];
    return (
      Array.from(e.querySelectorAll(kk)).forEach((r, o) => {
        const i = Ek(r);
        i === -1 ||
          !Ok(r) ||
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
  function Tk() {
    return !0;
  }
  function Rk(e) {
    const {
        children: t,
        disableAutoFocus: n = !1,
        disableEnforceFocus: r = !1,
        disableRestoreFocus: o = !1,
        getTabbable: i = Nk,
        isEnabled: a = Tk,
        open: s,
      } = e,
      l = E.useRef(!1),
      c = E.useRef(null),
      f = E.useRef(null),
      p = E.useRef(null),
      m = E.useRef(null),
      w = E.useRef(!1),
      b = E.useRef(null),
      S = it(t.ref, b),
      _ = E.useRef(null);
    E.useEffect(() => {
      !s || !b.current || (w.current = !n);
    }, [n, s]),
      E.useEffect(() => {
        if (!s || !b.current) return;
        const g = Et(b.current);
        return (
          b.current.contains(g.activeElement) ||
            (b.current.hasAttribute("tabIndex") ||
              b.current.setAttribute("tabIndex", "-1"),
            w.current && b.current.focus()),
          () => {
            o ||
              (p.current &&
                p.current.focus &&
                ((l.current = !0), p.current.focus()),
              (p.current = null));
          }
        );
      }, [s]),
      E.useEffect(() => {
        if (!s || !b.current) return;
        const g = Et(b.current),
          x = (T) => {
            const { current: I } = b;
            if (I !== null) {
              if (!g.hasFocus() || r || !a() || l.current) {
                l.current = !1;
                return;
              }
              if (!I.contains(g.activeElement)) {
                if (
                  (T && m.current !== T.target) ||
                  g.activeElement !== m.current
                )
                  m.current = null;
                else if (m.current !== null) return;
                if (!w.current) return;
                let U = [];
                if (
                  ((g.activeElement === c.current ||
                    g.activeElement === f.current) &&
                    (U = i(b.current)),
                  U.length > 0)
                ) {
                  var B, M;
                  const F = !!(
                      (B = _.current) != null &&
                      B.shiftKey &&
                      ((M = _.current) == null ? void 0 : M.key) === "Tab"
                    ),
                    V = U[0],
                    W = U[U.length - 1];
                  typeof V != "string" &&
                    typeof W != "string" &&
                    (F ? W.focus() : V.focus());
                } else I.focus();
              }
            }
          },
          C = (T) => {
            (_.current = T),
              !(r || !a() || T.key !== "Tab") &&
                g.activeElement === b.current &&
                T.shiftKey &&
                ((l.current = !0), f.current && f.current.focus());
          };
        g.addEventListener("focusin", x), g.addEventListener("keydown", C, !0);
        const N = setInterval(() => {
          g.activeElement && g.activeElement.tagName === "BODY" && x(null);
        }, 50);
        return () => {
          clearInterval(N),
            g.removeEventListener("focusin", x),
            g.removeEventListener("keydown", C, !0);
        };
      }, [n, r, o, a, s, i]);
    const v = (g) => {
        p.current === null && (p.current = g.relatedTarget),
          (w.current = !0),
          (m.current = g.target);
        const x = t.props.onFocus;
        x && x(g);
      },
      h = (g) => {
        p.current === null && (p.current = g.relatedTarget), (w.current = !0);
      };
    return ue(E.Fragment, {
      children: [
        R("div", {
          tabIndex: s ? 0 : -1,
          onFocus: h,
          ref: c,
          "data-testid": "sentinelStart",
        }),
        E.cloneElement(t, { ref: S, onFocus: v }),
        R("div", {
          tabIndex: s ? 0 : -1,
          onFocus: h,
          ref: f,
          "data-testid": "sentinelEnd",
        }),
      ],
    });
  }
  function _k(e) {
    return typeof e == "function" ? e() : e;
  }
  const Ik = E.forwardRef(function (e, t) {
      const { children: n, container: r, disablePortal: o = !1 } = e,
        [i, a] = E.useState(null),
        s = it(E.isValidElement(n) ? n.ref : null, t);
      if (
        (ir(() => {
          o || a(_k(r) || document.body);
        }, [r, o]),
        ir(() => {
          if (i && !o)
            return (
              Ms(t, i),
              () => {
                Ms(t, null);
              }
            );
        }, [t, i, o]),
        o)
      ) {
        if (E.isValidElement(n)) {
          const l = { ref: s };
          return E.cloneElement(n, l);
        }
        return R(E.Fragment, { children: n });
      }
      return R(E.Fragment, { children: i && Wr.createPortal(n, i) });
    }),
    Pk = Ik;
  function Ak(e) {
    const t = Et(e);
    return t.body === e
      ? or(e).innerWidth > t.documentElement.clientWidth
      : e.scrollHeight > e.clientHeight;
  }
  function Ki(e, t) {
    t
      ? e.setAttribute("aria-hidden", "true")
      : e.removeAttribute("aria-hidden");
  }
  function k0(e) {
    return parseInt(or(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function $k(e) {
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
  function E0(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, (a) => {
      const s = i.indexOf(a) === -1,
        l = !$k(a);
      s && l && Ki(a, o);
    });
  }
  function Jd(e, t) {
    let n = -1;
    return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
  }
  function Mk(e, t) {
    const n = [],
      r = e.container;
    if (!t.disableScrollLock) {
      if (Ak(r)) {
        const i = Og(Et(r));
        n.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r,
        }),
          (r.style.paddingRight = `${k0(r) + i}px`);
        const a = Et(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          n.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s,
          }),
            (s.style.paddingRight = `${k0(s) + i}px`);
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = Et(r).body;
      else {
        const i = r.parentElement,
          a = or(r);
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
  function Lk(e) {
    const t = [];
    return (
      [].forEach.call(e.children, (n) => {
        n.getAttribute("aria-hidden") === "true" && t.push(n);
      }),
      t
    );
  }
  class Bk {
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
        t.modalRef && Ki(t.modalRef, !1);
      const o = Lk(n);
      E0(n, t.mount, t.modalRef, o, !0);
      const i = Jd(this.containers, (a) => a.container === n);
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
      const r = Jd(this.containers, (i) => i.modals.indexOf(t) !== -1),
        o = this.containers[r];
      o.restore || (o.restore = Mk(o, n));
    }
    remove(t, n = !0) {
      const r = this.modals.indexOf(t);
      if (r === -1) return r;
      const o = Jd(this.containers, (a) => a.modals.indexOf(t) !== -1),
        i = this.containers[o];
      if (
        (i.modals.splice(i.modals.indexOf(t), 1),
        this.modals.splice(r, 1),
        i.modals.length === 0)
      )
        i.restore && i.restore(),
          t.modalRef && Ki(t.modalRef, n),
          E0(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
          this.containers.splice(o, 1);
      else {
        const a = i.modals[i.modals.length - 1];
        a.modalRef && Ki(a.modalRef, !1);
      }
      return r;
    }
    isTopModal(t) {
      return (
        this.modals.length > 0 && this.modals[this.modals.length - 1] === t
      );
    }
  }
  function zk(e) {
    return ie("MuiModal", e);
  }
  ae("MuiModal", ["root", "hidden"]);
  const jk = [
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
    Fk = (e) => {
      const { open: t, exited: n, classes: r } = e;
      return ce(
        { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
        zk,
        r,
      );
    };
  function Dk(e) {
    return typeof e == "function" ? e() : e;
  }
  function Uk(e) {
    return e ? e.props.hasOwnProperty("in") : !1;
  }
  const Wk = new Bk(),
    Vk = E.forwardRef(function (e, t) {
      var n, r;
      const {
          children: o,
          classes: i,
          closeAfterTransition: a = !1,
          component: s,
          container: l,
          disableAutoFocus: c = !1,
          disableEnforceFocus: f = !1,
          disableEscapeKeyDown: p = !1,
          disablePortal: m = !1,
          disableRestoreFocus: w = !1,
          disableScrollLock: b = !1,
          hideBackdrop: S = !1,
          keepMounted: _ = !1,
          manager: v = Wk,
          onBackdropClick: h,
          onClose: g,
          onKeyDown: x,
          open: C,
          onTransitionEnter: N,
          onTransitionExited: T,
          slotProps: I = {},
          slots: B = {},
        } = e,
        M = X(e, jk),
        [U, F] = E.useState(!C),
        V = E.useRef({}),
        W = E.useRef(null),
        H = E.useRef(null),
        te = it(H, t),
        q = Uk(o),
        L = (n = e["aria-hidden"]) != null ? n : !0,
        A = () => Et(W.current),
        $ = () => (
          (V.current.modalRef = H.current),
          (V.current.mountNode = W.current),
          V.current
        ),
        Y = () => {
          v.mount($(), { disableScrollLock: b }),
            H.current && (H.current.scrollTop = 0);
        },
        oe = Rr(() => {
          const y = Dk(l) || A().body;
          v.add($(), y), H.current && Y();
        }),
        ne = E.useCallback(() => v.isTopModal($()), [v]),
        he = Rr((y) => {
          (W.current = y),
            !(!y || !H.current) && (C && ne() ? Y() : Ki(H.current, L));
        }),
        ve = E.useCallback(() => {
          v.remove($(), L);
        }, [v, L]);
      E.useEffect(
        () => () => {
          ve();
        },
        [ve],
      ),
        E.useEffect(() => {
          C ? oe() : (!q || !a) && ve();
        }, [C, ve, q, a, oe]);
      const Le = k({}, e, {
          classes: i,
          closeAfterTransition: a,
          disableAutoFocus: c,
          disableEnforceFocus: f,
          disableEscapeKeyDown: p,
          disablePortal: m,
          disableRestoreFocus: w,
          disableScrollLock: b,
          exited: U,
          hideBackdrop: S,
          keepMounted: _,
        }),
        Fe = Fk(Le),
        Pe = () => {
          F(!1), N && N();
        },
        lt = () => {
          F(!0), T && T(), a && ve();
        },
        re = (y) => {
          y.target === y.currentTarget &&
            (h && h(y), g && g(y, "backdropClick"));
        },
        De = (y) => {
          x && x(y),
            !(y.key !== "Escape" || !ne()) &&
              (p || (y.stopPropagation(), g && g(y, "escapeKeyDown")));
        },
        Ae = {};
      o.props.tabIndex === void 0 && (Ae.tabIndex = "-1"),
        q &&
          ((Ae.onEnter = bd(Pe, o.props.onEnter)),
          (Ae.onExited = bd(lt, o.props.onExited)));
      const Tt = (r = s ?? B.root) != null ? r : "div",
        jt = S0({
          elementType: Tt,
          externalSlotProps: I.root,
          externalForwardedProps: M,
          additionalProps: { ref: te, role: "presentation", onKeyDown: De },
          className: Fe.root,
          ownerState: Le,
        }),
        u = B.backdrop,
        d = S0({
          elementType: u,
          externalSlotProps: I.backdrop,
          additionalProps: { "aria-hidden": !0, onClick: re, open: C },
          className: Fe.backdrop,
          ownerState: Le,
        });
      return !_ && !C && (!q || U)
        ? null
        : R(Pk, {
            ref: he,
            container: l,
            disablePortal: m,
            children: ue(
              Tt,
              k({}, jt, {
                children: [
                  !S && u ? R(u, k({}, d)) : null,
                  R(Rk, {
                    disableEnforceFocus: f,
                    disableAutoFocus: c,
                    disableRestoreFocus: w,
                    isEnabled: ne,
                    open: C,
                    children: E.cloneElement(o, Ae),
                  }),
                ],
              }),
            ),
          });
    }),
    Hk = Vk,
    qk = ["onChange", "maxRows", "minRows", "style", "value"];
  function gl(e, t) {
    return parseInt(e[t], 10) || 0;
  }
  const Kk = {
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
  function C0(e) {
    return e == null || Object.keys(e).length === 0;
  }
  const Jk = E.forwardRef(function (e, t) {
      const { onChange: n, maxRows: r, minRows: o = 1, style: i, value: a } = e,
        s = X(e, qk),
        { current: l } = E.useRef(a != null),
        c = E.useRef(null),
        f = it(t, c),
        p = E.useRef(null),
        m = E.useRef(0),
        [w, b] = E.useState({}),
        S = E.useCallback(() => {
          const x = c.current,
            C = or(x).getComputedStyle(x);
          if (C.width === "0px") return {};
          const N = p.current;
          (N.style.width = C.width),
            (N.value = x.value || e.placeholder || "x"),
            N.value.slice(-1) ===
              `
` && (N.value += " ");
          const T = C["box-sizing"],
            I = gl(C, "padding-bottom") + gl(C, "padding-top"),
            B = gl(C, "border-bottom-width") + gl(C, "border-top-width"),
            M = N.scrollHeight;
          N.value = "x";
          const U = N.scrollHeight;
          let F = M;
          o && (F = Math.max(Number(o) * U, F)),
            r && (F = Math.min(Number(r) * U, F)),
            (F = Math.max(F, U));
          const V = F + (T === "border-box" ? I + B : 0),
            W = Math.abs(F - M) <= 1;
          return { outerHeightStyle: V, overflow: W };
        }, [r, o, e.placeholder]),
        _ = (x, C) => {
          const { outerHeightStyle: N, overflow: T } = C;
          return m.current < 20 &&
            ((N > 0 && Math.abs((x.outerHeightStyle || 0) - N) > 1) ||
              x.overflow !== T)
            ? ((m.current += 1), { overflow: T, outerHeightStyle: N })
            : x;
        },
        v = E.useCallback(() => {
          const x = S();
          C0(x) || b((C) => _(C, x));
        }, [S]),
        h = () => {
          const x = S();
          C0(x) ||
            Wr.flushSync(() => {
              b((C) => _(C, x));
            });
        };
      E.useEffect(() => {
        const x = vd(() => {
            (m.current = 0), c.current && h();
          }),
          C = or(c.current);
        C.addEventListener("resize", x);
        let N;
        return (
          typeof ResizeObserver < "u" &&
            ((N = new ResizeObserver(x)), N.observe(c.current)),
          () => {
            x.clear(), C.removeEventListener("resize", x), N && N.disconnect();
          }
        );
      }),
        ir(() => {
          v();
        }),
        E.useEffect(() => {
          m.current = 0;
        }, [a]);
      const g = (x) => {
        (m.current = 0), l || v(), n && n(x);
      };
      return ue(E.Fragment, {
        children: [
          R(
            "textarea",
            k(
              {
                value: a,
                onChange: g,
                ref: f,
                rows: o,
                style: k(
                  {
                    height: w.outerHeightStyle,
                    overflow: w.overflow ? "hidden" : null,
                  },
                  i,
                ),
              },
              s,
            ),
          ),
          R("textarea", {
            "aria-hidden": !0,
            className: e.className,
            readOnly: !0,
            ref: p,
            tabIndex: -1,
            style: k({}, Kk.shadow, i, { padding: 0 }),
          }),
        ],
      });
    }),
    Gk = Jk;
  function Yk(e) {
    return ie("MuiSvgIcon", e);
  }
  ae("MuiSvgIcon", [
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
  const Qk = [
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
    Xk = (e) => {
      const { color: t, fontSize: n, classes: r } = e,
        o = {
          root: ["root", t !== "inherit" && `color${G(t)}`, `fontSize${G(n)}`],
        };
      return ce(o, Yk, r);
    },
    Zk = J("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "inherit" && t[`color${G(n.color)}`],
          t[`fontSize${G(n.fontSize)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var n, r, o, i, a, s, l, c, f, p, m, w, b, S, _, v, h;
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
            ((l = e.typography) == null || (c = l.pxToRem) == null
              ? void 0
              : c.call(l, 24)) || "1.5rem",
          large:
            ((f = e.typography) == null || (p = f.pxToRem) == null
              ? void 0
              : p.call(f, 35)) || "2.1875rem",
        }[t.fontSize],
        color:
          (m =
            (w = (e.vars || e).palette) == null || (b = w[t.color]) == null
              ? void 0
              : b.main) != null
            ? m
            : {
                action:
                  (S = (e.vars || e).palette) == null || (_ = S.action) == null
                    ? void 0
                    : _.active,
                disabled:
                  (v = (e.vars || e).palette) == null || (h = v.action) == null
                    ? void 0
                    : h.disabled,
                inherit: void 0,
              }[t.color],
      };
    }),
    O0 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiSvgIcon" }),
        {
          children: r,
          className: o,
          color: i = "inherit",
          component: a = "svg",
          fontSize: s = "medium",
          htmlColor: l,
          inheritViewBox: c = !1,
          titleAccess: f,
          viewBox: p = "0 0 24 24",
        } = n,
        m = X(n, Qk),
        w = k({}, n, {
          color: i,
          component: a,
          fontSize: s,
          instanceFontSize: e.fontSize,
          inheritViewBox: c,
          viewBox: p,
        }),
        b = {};
      c || (b.viewBox = p);
      const S = Xk(w);
      return ue(
        Zk,
        k(
          {
            as: a,
            className: ee(S.root, o),
            focusable: "false",
            color: l,
            "aria-hidden": f ? void 0 : !0,
            role: f ? "img" : void 0,
            ref: t,
          },
          b,
          m,
          {
            ownerState: w,
            children: [r, f ? R("title", { children: f }) : null],
          },
        ),
      );
    });
  O0.muiName = "SvgIcon";
  const N0 = O0;
  function wn(e, t) {
    function n(r, o) {
      return R(
        N0,
        k({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
      );
    }
    return (n.muiName = N0.muiName), E.memo(E.forwardRef(n));
  }
  const eE = {
      configure: (e) => {
        Tg.configure(e);
      },
    },
    tE = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          capitalize: G,
          createChainedFunction: bd,
          createSvgIcon: wn,
          debounce: vd,
          deprecatedPropType: Yw,
          isMuiElement: Mi,
          ownerDocument: Et,
          ownerWindow: or,
          requirePropFactory: Qw,
          setRef: Ms,
          unstable_ClassNameGenerator: eE,
          unstable_useEnhancedEffect: ir,
          unstable_useId: Eg,
          unsupportedProp: ex,
          useControlled: Ls,
          useEventCallback: Rr,
          useForkRef: it,
          useIsFocusVisible: Sd,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  function Gd(e, t) {
    return (
      (Gd = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      Gd(e, t)
    );
  }
  function T0(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Gd(e, t);
  }
  const R0 = { disabled: !1 },
    yl = de.createContext(null);
  var nE = function (e) {
      return e.scrollTop;
    },
    Ji = "unmounted",
    Ir = "exited",
    Pr = "entering",
    To = "entered",
    Yd = "exiting",
    Mn = (function (e) {
      T0(t, e);
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
              ? ((l = Ir), (i.appearStatus = Pr))
              : (l = To)
            : r.unmountOnExit || r.mountOnEnter
            ? (l = Ji)
            : (l = Ir),
          (i.state = { status: l }),
          (i.nextCallback = null),
          i
        );
      }
      t.getDerivedStateFromProps = function (r, o) {
        var i = r.in;
        return i && o.status === Ji ? { status: Ir } : null;
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
              ? i !== Pr && i !== To && (o = Pr)
              : (i === Pr || i === To) && (o = Yd);
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
            if ((this.cancelNextCallback(), o === Pr)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var i = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : Es.findDOMNode(this);
                i && nE(i);
              }
              this.performEnter(r);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === Ir &&
              this.setState({ status: Ji });
        }),
        (n.performEnter = function (r) {
          var o = this,
            i = this.props.enter,
            a = this.context ? this.context.isMounting : r,
            s = this.props.nodeRef ? [a] : [Es.findDOMNode(this), a],
            l = s[0],
            c = s[1],
            f = this.getTimeouts(),
            p = a ? f.appear : f.enter;
          if ((!r && !i) || R0.disabled) {
            this.safeSetState({ status: To }, function () {
              o.props.onEntered(l);
            });
            return;
          }
          this.props.onEnter(l, c),
            this.safeSetState({ status: Pr }, function () {
              o.props.onEntering(l, c),
                o.onTransitionEnd(p, function () {
                  o.safeSetState({ status: To }, function () {
                    o.props.onEntered(l, c);
                  });
                });
            });
        }),
        (n.performExit = function () {
          var r = this,
            o = this.props.exit,
            i = this.getTimeouts(),
            a = this.props.nodeRef ? void 0 : Es.findDOMNode(this);
          if (!o || R0.disabled) {
            this.safeSetState({ status: Ir }, function () {
              r.props.onExited(a);
            });
            return;
          }
          this.props.onExit(a),
            this.safeSetState({ status: Yd }, function () {
              r.props.onExiting(a),
                r.onTransitionEnd(i.exit, function () {
                  r.safeSetState({ status: Ir }, function () {
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
              : Es.findDOMNode(this),
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
              c = s[1];
            this.props.addEndListener(l, c);
          }
          r != null && setTimeout(this.nextCallback, r);
        }),
        (n.render = function () {
          var r = this.state.status;
          if (r === Ji) return null;
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
          var a = X(o, [
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
          return de.createElement(
            yl.Provider,
            { value: null },
            typeof i == "function"
              ? i(r, a)
              : de.cloneElement(de.Children.only(i), a),
          );
        }),
        t
      );
    })(de.Component);
  (Mn.contextType = yl), (Mn.propTypes = {});
  function Ro() {}
  (Mn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Ro,
    onEntering: Ro,
    onEntered: Ro,
    onExit: Ro,
    onExiting: Ro,
    onExited: Ro,
  }),
    (Mn.UNMOUNTED = Ji),
    (Mn.EXITED = Ir),
    (Mn.ENTERING = Pr),
    (Mn.ENTERED = To),
    (Mn.EXITING = Yd);
  const _0 = Mn;
  function rE(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function Qd(e, t) {
    var n = function (o) {
        return t && E.isValidElement(o) ? t(o) : o;
      },
      r = Object.create(null);
    return (
      e &&
        E.Children.map(e, function (o) {
          return o;
        }).forEach(function (o) {
          r[o.key] = n(o);
        }),
      r
    );
  }
  function oE(e, t) {
    (e = e || {}), (t = t || {});
    function n(f) {
      return f in t ? t[f] : e[f];
    }
    var r = Object.create(null),
      o = [];
    for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
    var a,
      s = {};
    for (var l in t) {
      if (r[l])
        for (a = 0; a < r[l].length; a++) {
          var c = r[l][a];
          s[r[l][a]] = n(c);
        }
      s[l] = n(l);
    }
    for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
    return s;
  }
  function Ar(e, t, n) {
    return n[t] != null ? n[t] : e.props[t];
  }
  function iE(e, t) {
    return Qd(e.children, function (n) {
      return E.cloneElement(n, {
        onExited: t.bind(null, n),
        in: !0,
        appear: Ar(n, "appear", e),
        enter: Ar(n, "enter", e),
        exit: Ar(n, "exit", e),
      });
    });
  }
  function aE(e, t, n) {
    var r = Qd(e.children),
      o = oE(t, r);
    return (
      Object.keys(o).forEach(function (i) {
        var a = o[i];
        if (E.isValidElement(a)) {
          var s = i in t,
            l = i in r,
            c = t[i],
            f = E.isValidElement(c) && !c.props.in;
          l && (!s || f)
            ? (o[i] = E.cloneElement(a, {
                onExited: n.bind(null, a),
                in: !0,
                exit: Ar(a, "exit", e),
                enter: Ar(a, "enter", e),
              }))
            : !l && s && !f
            ? (o[i] = E.cloneElement(a, { in: !1 }))
            : l &&
              s &&
              E.isValidElement(c) &&
              (o[i] = E.cloneElement(a, {
                onExited: n.bind(null, a),
                in: c.props.in,
                exit: Ar(a, "exit", e),
                enter: Ar(a, "enter", e),
              }));
        }
      }),
      o
    );
  }
  var sE =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    lE = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    },
    Xd = (function (e) {
      T0(t, e);
      function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var a = i.handleExited.bind(rE(i));
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
          return { children: s ? iE(r, a) : aE(r, i, a), firstRender: !1 };
        }),
        (n.handleExited = function (r, o) {
          var i = Qd(this.props.children);
          r.key in i ||
            (r.props.onExited && r.props.onExited(o),
            this.mounted &&
              this.setState(function (a) {
                var s = k({}, a.children);
                return delete s[r.key], { children: s };
              }));
        }),
        (n.render = function () {
          var r = this.props,
            o = r.component,
            i = r.childFactory,
            a = X(r, ["component", "childFactory"]),
            s = this.state.contextValue,
            l = sE(this.state.children).map(i);
          return (
            delete a.appear,
            delete a.enter,
            delete a.exit,
            o === null
              ? de.createElement(yl.Provider, { value: s }, l)
              : de.createElement(
                  yl.Provider,
                  { value: s },
                  de.createElement(o, a, l),
                )
          );
        }),
        t
      );
    })(de.Component);
  (Xd.propTypes = {}), (Xd.defaultProps = lE);
  const uE = Xd,
    I0 = (e) => e.scrollTop;
  function bl(e, t) {
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
  function cE(e) {
    return ie("MuiPaper", e);
  }
  ae("MuiPaper", [
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
  const dE = ["className", "component", "elevation", "square", "variant"],
    fE = (e) => {
      const { square: t, elevation: n, variant: r, classes: o } = e,
        i = {
          root: [
            "root",
            r,
            !t && "rounded",
            r === "elevation" && `elevation${n}`,
          ],
        };
      return ce(i, cE, o);
    },
    pE = J("div", {
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
      return k(
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
          k(
            { boxShadow: (e.vars || e).shadows[t.elevation] },
            !e.vars &&
              e.palette.mode === "dark" && {
                backgroundImage: `linear-gradient(${Ot(
                  "#fff",
                  w0(t.elevation),
                )}, ${Ot("#fff", w0(t.elevation))})`,
              },
            e.vars && {
              backgroundImage:
                (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
            },
          ),
      );
    }),
    hE = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiPaper" }),
        {
          className: r,
          component: o = "div",
          elevation: i = 1,
          square: a = !1,
          variant: s = "elevation",
        } = n,
        l = X(n, dE),
        c = k({}, n, { component: o, elevation: i, square: a, variant: s }),
        f = fE(c);
      return R(
        pE,
        k({ as: o, ownerState: c, className: ee(f.root, r), ref: t }, l),
      );
    }),
    Gi = hE;
  function mE(e) {
    const {
        className: t,
        classes: n,
        pulsate: r = !1,
        rippleX: o,
        rippleY: i,
        rippleSize: a,
        in: s,
        onExited: l,
        timeout: c,
      } = e,
      [f, p] = E.useState(!1),
      m = ee(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
      w = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
      b = ee(n.child, f && n.childLeaving, r && n.childPulsate);
    return (
      !s && !f && p(!0),
      E.useEffect(() => {
        if (!s && l != null) {
          const S = setTimeout(l, c);
          return () => {
            clearTimeout(S);
          };
        }
      }, [l, s, c]),
      R("span", {
        className: m,
        style: w,
        children: R("span", { className: b }),
      })
    );
  }
  const gE = ae("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    Jt = gE,
    yE = ["center", "classes", "className"];
  let vl = (e) => e,
    P0,
    A0,
    $0,
    M0;
  const Zd = 550,
    bE = 80,
    vE = Eo(
      P0 ||
        (P0 = vl`
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
    wE = Eo(
      A0 ||
        (A0 = vl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
    ),
    xE = Eo(
      $0 ||
        ($0 = vl`
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
    SE = J("span", { name: "MuiTouchRipple", slot: "Root" })({
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
    kE = J(mE, { name: "MuiTouchRipple", slot: "Ripple" })(
      M0 ||
        (M0 = vl`
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
      Jt.rippleVisible,
      vE,
      Zd,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      Jt.ripplePulsate,
      ({ theme: e }) => e.transitions.duration.shorter,
      Jt.child,
      Jt.childLeaving,
      wE,
      Zd,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      Jt.childPulsate,
      xE,
      ({ theme: e }) => e.transitions.easing.easeInOut,
    ),
    EE = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiTouchRipple" }),
        { center: r = !1, classes: o = {}, className: i } = n,
        a = X(n, yE),
        [s, l] = E.useState([]),
        c = E.useRef(0),
        f = E.useRef(null);
      E.useEffect(() => {
        f.current && (f.current(), (f.current = null));
      }, [s]);
      const p = E.useRef(!1),
        m = E.useRef(null),
        w = E.useRef(null),
        b = E.useRef(null);
      E.useEffect(
        () => () => {
          clearTimeout(m.current);
        },
        [],
      );
      const S = E.useCallback(
          (g) => {
            const {
              pulsate: x,
              rippleX: C,
              rippleY: N,
              rippleSize: T,
              cb: I,
            } = g;
            l((B) => [
              ...B,
              R(
                kE,
                {
                  classes: {
                    ripple: ee(o.ripple, Jt.ripple),
                    rippleVisible: ee(o.rippleVisible, Jt.rippleVisible),
                    ripplePulsate: ee(o.ripplePulsate, Jt.ripplePulsate),
                    child: ee(o.child, Jt.child),
                    childLeaving: ee(o.childLeaving, Jt.childLeaving),
                    childPulsate: ee(o.childPulsate, Jt.childPulsate),
                  },
                  timeout: Zd,
                  pulsate: x,
                  rippleX: C,
                  rippleY: N,
                  rippleSize: T,
                },
                c.current,
              ),
            ]),
              (c.current += 1),
              (f.current = I);
          },
          [o],
        ),
        _ = E.useCallback(
          (g = {}, x = {}, C = () => {}) => {
            const {
              pulsate: N = !1,
              center: T = r || x.pulsate,
              fakeElement: I = !1,
            } = x;
            if ((g == null ? void 0 : g.type) === "mousedown" && p.current) {
              p.current = !1;
              return;
            }
            (g == null ? void 0 : g.type) === "touchstart" && (p.current = !0);
            const B = I ? null : b.current,
              M = B
                ? B.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let U, F, V;
            if (
              T ||
              g === void 0 ||
              (g.clientX === 0 && g.clientY === 0) ||
              (!g.clientX && !g.touches)
            )
              (U = Math.round(M.width / 2)), (F = Math.round(M.height / 2));
            else {
              const { clientX: W, clientY: H } =
                g.touches && g.touches.length > 0 ? g.touches[0] : g;
              (U = Math.round(W - M.left)), (F = Math.round(H - M.top));
            }
            if (T)
              (V = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3)),
                V % 2 === 0 && (V += 1);
            else {
              const W =
                  Math.max(Math.abs((B ? B.clientWidth : 0) - U), U) * 2 + 2,
                H = Math.max(Math.abs((B ? B.clientHeight : 0) - F), F) * 2 + 2;
              V = Math.sqrt(W ** 2 + H ** 2);
            }
            g != null && g.touches
              ? w.current === null &&
                ((w.current = () => {
                  S({
                    pulsate: N,
                    rippleX: U,
                    rippleY: F,
                    rippleSize: V,
                    cb: C,
                  });
                }),
                (m.current = setTimeout(() => {
                  w.current && (w.current(), (w.current = null));
                }, bE)))
              : S({ pulsate: N, rippleX: U, rippleY: F, rippleSize: V, cb: C });
          },
          [r, S],
        ),
        v = E.useCallback(() => {
          _({}, { pulsate: !0 });
        }, [_]),
        h = E.useCallback((g, x) => {
          if (
            (clearTimeout(m.current),
            (g == null ? void 0 : g.type) === "touchend" && w.current)
          ) {
            w.current(),
              (w.current = null),
              (m.current = setTimeout(() => {
                h(g, x);
              }));
            return;
          }
          (w.current = null),
            l((C) => (C.length > 0 ? C.slice(1) : C)),
            (f.current = x);
        }, []);
      return (
        E.useImperativeHandle(t, () => ({ pulsate: v, start: _, stop: h }), [
          v,
          _,
          h,
        ]),
        R(
          SE,
          k({ className: ee(Jt.root, o.root, i), ref: b }, a, {
            children: R(uE, { component: null, exit: !0, children: s }),
          }),
        )
      );
    }),
    CE = EE;
  function OE(e) {
    return ie("MuiButtonBase", e);
  }
  const NE = ae("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    TE = NE,
    RE = [
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
    _E = (e) => {
      const {
          disabled: t,
          focusVisible: n,
          focusVisibleClassName: r,
          classes: o,
        } = e,
        i = ce({ root: ["root", t && "disabled", n && "focusVisible"] }, OE, o);
      return n && r && (i.root += ` ${r}`), i;
    },
    IE = J("button", {
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
      [`&.${TE.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    }),
    PE = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiButtonBase" }),
        {
          action: r,
          centerRipple: o = !1,
          children: i,
          className: a,
          component: s = "button",
          disabled: l = !1,
          disableRipple: c = !1,
          disableTouchRipple: f = !1,
          focusRipple: p = !1,
          LinkComponent: m = "a",
          onBlur: w,
          onClick: b,
          onContextMenu: S,
          onDragLeave: _,
          onFocus: v,
          onFocusVisible: h,
          onKeyDown: g,
          onKeyUp: x,
          onMouseDown: C,
          onMouseLeave: N,
          onMouseUp: T,
          onTouchEnd: I,
          onTouchMove: B,
          onTouchStart: M,
          tabIndex: U = 0,
          TouchRippleProps: F,
          touchRippleRef: V,
          type: W,
        } = n,
        H = X(n, RE),
        te = E.useRef(null),
        q = E.useRef(null),
        L = it(q, V),
        { isFocusVisibleRef: A, onFocus: $, onBlur: Y, ref: oe } = Sd(),
        [ne, he] = E.useState(!1);
      l && ne && he(!1),
        E.useImperativeHandle(
          r,
          () => ({
            focusVisible: () => {
              he(!0), te.current.focus();
            },
          }),
          [],
        );
      const [ve, Le] = E.useState(!1);
      E.useEffect(() => {
        Le(!0);
      }, []);
      const Fe = ve && !c && !l;
      E.useEffect(() => {
        ne && p && !c && ve && q.current.pulsate();
      }, [c, p, ne, ve]);
      function Pe(j, Re, tt = f) {
        return Rr(
          (Rt) => (Re && Re(Rt), !tt && q.current && q.current[j](Rt), !0),
        );
      }
      const lt = Pe("start", C),
        re = Pe("stop", S),
        De = Pe("stop", _),
        Ae = Pe("stop", T),
        Tt = Pe("stop", (j) => {
          ne && j.preventDefault(), N && N(j);
        }),
        jt = Pe("start", M),
        u = Pe("stop", I),
        d = Pe("stop", B),
        y = Pe(
          "stop",
          (j) => {
            Y(j), A.current === !1 && he(!1), w && w(j);
          },
          !1,
        ),
        O = Rr((j) => {
          te.current || (te.current = j.currentTarget),
            $(j),
            A.current === !0 && (he(!0), h && h(j)),
            v && v(j);
        }),
        P = () => {
          const j = te.current;
          return s && s !== "button" && !(j.tagName === "A" && j.href);
        },
        z = E.useRef(!1),
        Q = Rr((j) => {
          p &&
            !z.current &&
            ne &&
            q.current &&
            j.key === " " &&
            ((z.current = !0),
            q.current.stop(j, () => {
              q.current.start(j);
            })),
            j.target === j.currentTarget &&
              P() &&
              j.key === " " &&
              j.preventDefault(),
            g && g(j),
            j.target === j.currentTarget &&
              P() &&
              j.key === "Enter" &&
              !l &&
              (j.preventDefault(), b && b(j));
        }),
        pe = Rr((j) => {
          p &&
            j.key === " " &&
            q.current &&
            ne &&
            !j.defaultPrevented &&
            ((z.current = !1),
            q.current.stop(j, () => {
              q.current.pulsate(j);
            })),
            x && x(j),
            b &&
              j.target === j.currentTarget &&
              P() &&
              j.key === " " &&
              !j.defaultPrevented &&
              b(j);
        });
      let Oe = s;
      Oe === "button" && (H.href || H.to) && (Oe = m);
      const se = {};
      Oe === "button"
        ? ((se.type = W === void 0 ? "button" : W), (se.disabled = l))
        : (!H.href && !H.to && (se.role = "button"),
          l && (se["aria-disabled"] = l));
      const Ce = it(t, oe, te),
        Te = k({}, n, {
          centerRipple: o,
          component: s,
          disabled: l,
          disableRipple: c,
          disableTouchRipple: f,
          focusRipple: p,
          tabIndex: U,
          focusVisible: ne,
        }),
        ge = _E(Te);
      return ue(
        IE,
        k(
          {
            as: Oe,
            className: ee(ge.root, a),
            ownerState: Te,
            onBlur: y,
            onClick: b,
            onContextMenu: re,
            onFocus: O,
            onKeyDown: Q,
            onKeyUp: pe,
            onMouseDown: lt,
            onMouseLeave: Tt,
            onMouseUp: Ae,
            onDragLeave: De,
            onTouchEnd: u,
            onTouchMove: d,
            onTouchStart: jt,
            ref: Ce,
            tabIndex: l ? -1 : U,
            type: W,
          },
          se,
          H,
          { children: [i, Fe ? R(CE, k({ ref: L, center: o }, F)) : null] },
        ),
      );
    }),
    wl = PE;
  function AE(e) {
    return ie("MuiAlert", e);
  }
  const $E = ae("MuiAlert", [
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
    L0 = $E;
  function ME(e) {
    return ie("MuiIconButton", e);
  }
  const LE = ae("MuiIconButton", [
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
    BE = LE,
    zE = [
      "edge",
      "children",
      "className",
      "color",
      "disabled",
      "disableFocusRipple",
      "size",
    ],
    jE = (e) => {
      const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
        a = {
          root: [
            "root",
            n && "disabled",
            r !== "default" && `color${G(r)}`,
            o && `edge${G(o)}`,
            `size${G(i)}`,
          ],
        };
      return ce(a, ME, t);
    },
    FE = J(wl, {
      name: "MuiIconButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "default" && t[`color${G(n.color)}`],
          n.edge && t[`edge${G(n.edge)}`],
          t[`size${G(n.size)}`],
        ];
      },
    })(
      ({ theme: e, ownerState: t }) =>
        k(
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
                : Ot(e.palette.action.active, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
          t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
          t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 },
        ),
      ({ theme: e, ownerState: t }) => {
        var n;
        const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
        return k(
          {},
          t.color === "inherit" && { color: "inherit" },
          t.color !== "inherit" &&
            t.color !== "default" &&
            k(
              { color: r == null ? void 0 : r.main },
              !t.disableRipple && {
                "&:hover": k(
                  {},
                  r && {
                    backgroundColor: e.vars
                      ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Ot(r.main, e.palette.action.hoverOpacity),
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
            [`&.${BE.disabled}`]: {
              backgroundColor: "transparent",
              color: (e.vars || e).palette.action.disabled,
            },
          },
        );
      },
    ),
    DE = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiIconButton" }),
        {
          edge: r = !1,
          children: o,
          className: i,
          color: a = "default",
          disabled: s = !1,
          disableFocusRipple: l = !1,
          size: c = "medium",
        } = n,
        f = X(n, zE),
        p = k({}, n, {
          edge: r,
          color: a,
          disabled: s,
          disableFocusRipple: l,
          size: c,
        }),
        m = jE(p);
      return R(
        FE,
        k(
          {
            className: ee(m.root, i),
            centerRipple: !0,
            focusRipple: !l,
            disabled: s,
            ref: t,
            ownerState: p,
          },
          f,
          { children: o },
        ),
      );
    }),
    xl = DE,
    UE = wn(
      R("path", {
        d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
      }),
      "SuccessOutlined",
    ),
    WE = wn(
      R("path", {
        d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
      }),
      "ReportProblemOutlined",
    ),
    VE = wn(
      R("path", {
        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
      }),
      "ErrorOutline",
    ),
    HE = wn(
      R("path", {
        d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
      }),
      "InfoOutlined",
    ),
    qE = wn(
      R("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Close",
    ),
    KE = [
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
    JE = (e) => {
      const { variant: t, color: n, severity: r, classes: o } = e,
        i = {
          root: ["root", `${t}${G(n || r)}`, `${t}`],
          icon: ["icon"],
          message: ["message"],
          action: ["action"],
        };
      return ce(i, AE, o);
    },
    GE = J(Gi, {
      name: "MuiAlert",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${G(n.color || n.severity)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      const n = e.palette.mode === "light" ? pl : hl,
        r = e.palette.mode === "light" ? hl : pl,
        o = t.color || t.severity;
      return k(
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
            [`& .${L0.icon}`]: e.vars
              ? { color: e.vars.palette.Alert[`${o}IconColor`] }
              : { color: e.palette[o].main },
          },
        o &&
          t.variant === "outlined" && {
            color: e.vars
              ? e.vars.palette.Alert[`${o}Color`]
              : n(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${L0.icon}`]: e.vars
              ? { color: e.vars.palette.Alert[`${o}IconColor`] }
              : { color: e.palette[o].main },
          },
        o &&
          t.variant === "filled" &&
          k(
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
    YE = J("div", {
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
    QE = J("div", {
      name: "MuiAlert",
      slot: "Message",
      overridesResolver: (e, t) => t.message,
    })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
    B0 = J("div", {
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
    z0 = {
      success: R(UE, { fontSize: "inherit" }),
      warning: R(WE, { fontSize: "inherit" }),
      error: R(VE, { fontSize: "inherit" }),
      info: R(HE, { fontSize: "inherit" }),
    },
    XE = E.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = fe({ props: e, name: "MuiAlert" }),
        {
          action: c,
          children: f,
          className: p,
          closeText: m = "Close",
          color: w,
          components: b = {},
          componentsProps: S = {},
          icon: _,
          iconMapping: v = z0,
          onClose: h,
          role: g = "alert",
          severity: x = "success",
          slotProps: C = {},
          slots: N = {},
          variant: T = "standard",
        } = l,
        I = X(l, KE),
        B = k({}, l, { color: w, severity: x, variant: T }),
        M = JE(B),
        U =
          (n = (r = N.closeButton) != null ? r : b.CloseButton) != null
            ? n
            : xl,
        F = (o = (i = N.closeIcon) != null ? i : b.CloseIcon) != null ? o : qE,
        V = (a = C.closeButton) != null ? a : S.closeButton,
        W = (s = C.closeIcon) != null ? s : S.closeIcon;
      return ue(
        GE,
        k(
          {
            role: g,
            elevation: 0,
            ownerState: B,
            className: ee(M.root, p),
            ref: t,
          },
          I,
          {
            children: [
              _ !== !1
                ? R(YE, {
                    ownerState: B,
                    className: M.icon,
                    children: _ || v[x] || z0[x],
                  })
                : null,
              R(QE, { ownerState: B, className: M.message, children: f }),
              c != null
                ? R(B0, { ownerState: B, className: M.action, children: c })
                : null,
              c == null && h
                ? R(B0, {
                    ownerState: B,
                    className: M.action,
                    children: R(
                      U,
                      k(
                        {
                          size: "small",
                          "aria-label": m,
                          title: m,
                          color: "inherit",
                          onClick: h,
                        },
                        V,
                        { children: R(F, k({ fontSize: "small" }, W)) },
                      ),
                    ),
                  })
                : null,
            ],
          },
        ),
      );
    }),
    ZE = XE;
  function e5(e) {
    return ie("MuiTypography", e);
  }
  ae("MuiTypography", [
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
  const t5 = [
      "align",
      "className",
      "component",
      "gutterBottom",
      "noWrap",
      "paragraph",
      "variant",
      "variantMapping",
    ],
    n5 = (e) => {
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
            e.align !== "inherit" && `align${G(t)}`,
            n && "gutterBottom",
            r && "noWrap",
            o && "paragraph",
          ],
        };
      return ce(s, e5, a);
    },
    r5 = J("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.variant && t[n.variant],
          n.align !== "inherit" && t[`align${G(n.align)}`],
          n.noWrap && t.noWrap,
          n.gutterBottom && t.gutterBottom,
          n.paragraph && t.paragraph,
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      k(
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
    j0 = {
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
    o5 = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main",
    },
    i5 = (e) => o5[e] || e,
    a5 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiTypography" }),
        r = i5(n.color),
        o = oS(k({}, n, { color: r })),
        {
          align: i = "inherit",
          className: a,
          component: s,
          gutterBottom: l = !1,
          noWrap: c = !1,
          paragraph: f = !1,
          variant: p = "body1",
          variantMapping: m = j0,
        } = o,
        w = X(o, t5),
        b = k({}, o, {
          align: i,
          color: r,
          className: a,
          component: s,
          gutterBottom: l,
          noWrap: c,
          paragraph: f,
          variant: p,
          variantMapping: m,
        }),
        S = s || (f ? "p" : m[p] || j0[p]) || "span",
        _ = n5(b);
      return R(
        r5,
        k({ as: S, ref: t, ownerState: b, className: ee(_.root, a) }, w),
      );
    }),
    Gt = a5;
  function s5(e) {
    return ie("MuiAppBar", e);
  }
  ae("MuiAppBar", [
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
  const l5 = ["className", "color", "enableColorOnDark", "position"],
    u5 = (e) => {
      const { color: t, position: n, classes: r } = e,
        o = { root: ["root", `color${G(t)}`, `position${G(n)}`] };
      return ce(o, s5, r);
    },
    Sl = (e, t) =>
      e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t,
    c5 = J(Gi, {
      name: "MuiAppBar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, t[`position${G(n.position)}`], t[`color${G(n.color)}`]];
      },
    })(({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
      return k(
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
          k(
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
              k(
                { backgroundColor: "transparent", color: "inherit" },
                e.palette.mode === "dark" && { backgroundImage: "none" },
              ),
          ),
        e.vars &&
          k(
            {},
            t.color === "default" && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette.AppBar.defaultBg
                : Sl(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette.AppBar.defaultBg,
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette.text.primary
                : Sl(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette.text.primary,
                  ),
            },
            t.color &&
              !t.color.match(/^(default|inherit|transparent)$/) && {
                "--AppBar-background": t.enableColorOnDark
                  ? e.vars.palette[t.color].main
                  : Sl(
                      e.vars.palette.AppBar.darkBg,
                      e.vars.palette[t.color].main,
                    ),
                "--AppBar-color": t.enableColorOnDark
                  ? e.vars.palette[t.color].contrastText
                  : Sl(
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
    d5 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiAppBar" }),
        {
          className: r,
          color: o = "primary",
          enableColorOnDark: i = !1,
          position: a = "fixed",
        } = n,
        s = X(n, l5),
        l = k({}, n, { color: o, position: a, enableColorOnDark: i }),
        c = u5(l);
      return R(
        c5,
        k(
          {
            square: !0,
            component: "header",
            ownerState: l,
            elevation: 4,
            className: ee(c.root, r, a === "fixed" && "mui-fixed"),
            ref: t,
          },
          s,
        ),
      );
    }),
    f5 = d5;
  function _o({ props: e, states: t, muiFormControl: n }) {
    return t.reduce(
      (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
      {},
    );
  }
  const p5 = E.createContext(void 0),
    kl = p5;
  function ar() {
    return E.useContext(kl);
  }
  function h5(e) {
    return R(p2, k({}, e, { defaultTheme: ml }));
  }
  function F0(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
  }
  function ef(e, t = !1) {
    return (
      e &&
      ((F0(e.value) && e.value !== "") ||
        (t && F0(e.defaultValue) && e.defaultValue !== ""))
    );
  }
  function m5(e) {
    return e.startAdornment;
  }
  function g5(e) {
    return ie("MuiInputBase", e);
  }
  const y5 = ae("MuiInputBase", [
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
    Io = y5,
    b5 = [
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
    El = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.formControl && t.formControl,
        n.startAdornment && t.adornedStart,
        n.endAdornment && t.adornedEnd,
        n.error && t.error,
        n.size === "small" && t.sizeSmall,
        n.multiline && t.multiline,
        n.color && t[`color${G(n.color)}`],
        n.fullWidth && t.fullWidth,
        n.hiddenLabel && t.hiddenLabel,
      ];
    },
    Cl = (e, t) => {
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
    v5 = (e) => {
      const {
          classes: t,
          color: n,
          disabled: r,
          error: o,
          endAdornment: i,
          focused: a,
          formControl: s,
          fullWidth: l,
          hiddenLabel: c,
          multiline: f,
          readOnly: p,
          size: m,
          startAdornment: w,
          type: b,
        } = e,
        S = {
          root: [
            "root",
            `color${G(n)}`,
            r && "disabled",
            o && "error",
            l && "fullWidth",
            a && "focused",
            s && "formControl",
            m === "small" && "sizeSmall",
            f && "multiline",
            w && "adornedStart",
            i && "adornedEnd",
            c && "hiddenLabel",
            p && "readOnly",
          ],
          input: [
            "input",
            r && "disabled",
            b === "search" && "inputTypeSearch",
            f && "inputMultiline",
            m === "small" && "inputSizeSmall",
            c && "inputHiddenLabel",
            w && "inputAdornedStart",
            i && "inputAdornedEnd",
            p && "readOnly",
          ],
        };
      return ce(S, g5, t);
    },
    Ol = J("div", {
      name: "MuiInputBase",
      slot: "Root",
      overridesResolver: El,
    })(({ theme: e, ownerState: t }) =>
      k(
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
          [`&.${Io.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          k({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" },
      ),
    ),
    Nl = J("input", {
      name: "MuiInputBase",
      slot: "Input",
      overridesResolver: Cl,
    })(({ theme: e, ownerState: t }) => {
      const n = e.palette.mode === "light",
        r = k(
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
      return k(
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
          [`label[data-shrink=false] + .${Io.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": i,
            "&:focus::-moz-placeholder": i,
            "&:focus:-ms-input-placeholder": i,
            "&:focus::-ms-input-placeholder": i,
          },
          [`&.${Io.disabled}`]: {
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
    w5 = R(h5, {
      styles: {
        "@keyframes mui-auto-fill": { from: { display: "block" } },
        "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
      },
    }),
    x5 = E.forwardRef(function (e, t) {
      var n;
      const r = fe({ props: e, name: "MuiInputBase" }),
        {
          "aria-describedby": o,
          autoComplete: i,
          autoFocus: a,
          className: s,
          components: l = {},
          componentsProps: c = {},
          defaultValue: f,
          disabled: p,
          disableInjectingGlobalStyles: m,
          endAdornment: w,
          fullWidth: b = !1,
          id: S,
          inputComponent: _ = "input",
          inputProps: v = {},
          inputRef: h,
          maxRows: g,
          minRows: x,
          multiline: C = !1,
          name: N,
          onBlur: T,
          onChange: I,
          onClick: B,
          onFocus: M,
          onKeyDown: U,
          onKeyUp: F,
          placeholder: V,
          readOnly: W,
          renderSuffix: H,
          rows: te,
          slotProps: q = {},
          slots: L = {},
          startAdornment: A,
          type: $ = "text",
          value: Y,
        } = r,
        oe = X(r, b5),
        ne = v.value != null ? v.value : Y,
        { current: he } = E.useRef(ne != null),
        ve = E.useRef(),
        Le = E.useCallback((ge) => {}, []),
        Fe = it(ve, h, v.ref, Le),
        [Pe, lt] = E.useState(!1),
        re = ar(),
        De = _o({
          props: r,
          muiFormControl: re,
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
      (De.focused = re ? re.focused : Pe),
        E.useEffect(() => {
          !re && p && Pe && (lt(!1), T && T());
        }, [re, p, Pe, T]);
      const Ae = re && re.onFilled,
        Tt = re && re.onEmpty,
        jt = E.useCallback(
          (ge) => {
            ef(ge) ? Ae && Ae() : Tt && Tt();
          },
          [Ae, Tt],
        );
      ir(() => {
        he && jt({ value: ne });
      }, [ne, jt, he]);
      const u = (ge) => {
          if (De.disabled) {
            ge.stopPropagation();
            return;
          }
          M && M(ge),
            v.onFocus && v.onFocus(ge),
            re && re.onFocus ? re.onFocus(ge) : lt(!0);
        },
        d = (ge) => {
          T && T(ge),
            v.onBlur && v.onBlur(ge),
            re && re.onBlur ? re.onBlur(ge) : lt(!1);
        },
        y = (ge, ...j) => {
          if (!he) {
            const Re = ge.target || ve.current;
            if (Re == null) throw new Error(rr(1));
            jt({ value: Re.value });
          }
          v.onChange && v.onChange(ge, ...j), I && I(ge, ...j);
        };
      E.useEffect(() => {
        jt(ve.current);
      }, []);
      const O = (ge) => {
        ve.current && ge.currentTarget === ge.target && ve.current.focus(),
          B && B(ge);
      };
      let P = _,
        z = v;
      C &&
        P === "input" &&
        (te
          ? (z = k({ type: void 0, minRows: te, maxRows: te }, z))
          : (z = k({ type: void 0, maxRows: g, minRows: x }, z)),
        (P = Gk));
      const Q = (ge) => {
        jt(
          ge.animationName === "mui-auto-fill-cancel"
            ? ve.current
            : { value: "x" },
        );
      };
      E.useEffect(() => {
        re && re.setAdornedStart(!!A);
      }, [re, A]);
      const pe = k({}, r, {
          color: De.color || "primary",
          disabled: De.disabled,
          endAdornment: w,
          error: De.error,
          focused: De.focused,
          formControl: re,
          fullWidth: b,
          hiddenLabel: De.hiddenLabel,
          multiline: C,
          size: De.size,
          startAdornment: A,
          type: $,
        }),
        Oe = v5(pe),
        se = L.root || l.Root || Ol,
        Ce = q.root || c.root || {},
        Te = L.input || l.Input || Nl;
      return (
        (z = k({}, z, (n = q.input) != null ? n : c.input)),
        ue(E.Fragment, {
          children: [
            !m && w5,
            ue(
              se,
              k(
                {},
                Ce,
                !No(se) && { ownerState: k({}, pe, Ce.ownerState) },
                { ref: t, onClick: O },
                oe,
                {
                  className: ee(Oe.root, Ce.className, s),
                  children: [
                    A,
                    R(kl.Provider, {
                      value: null,
                      children: R(
                        Te,
                        k(
                          {
                            ownerState: pe,
                            "aria-invalid": De.error,
                            "aria-describedby": o,
                            autoComplete: i,
                            autoFocus: a,
                            defaultValue: f,
                            disabled: De.disabled,
                            id: S,
                            onAnimationStart: Q,
                            name: N,
                            placeholder: V,
                            readOnly: W,
                            required: De.required,
                            rows: te,
                            value: ne,
                            onKeyDown: U,
                            onKeyUp: F,
                            type: $,
                          },
                          z,
                          !No(Te) && {
                            as: P,
                            ownerState: k({}, pe, z.ownerState),
                          },
                          {
                            ref: Fe,
                            className: ee(Oe.input, z.className),
                            onBlur: d,
                            onChange: y,
                            onFocus: u,
                          },
                        ),
                      ),
                    }),
                    w,
                    H ? H(k({}, De, { startAdornment: A })) : null,
                  ],
                },
              ),
            ),
          ],
        })
      );
    }),
    tf = x5;
  function S5(e) {
    return ie("MuiInput", e);
  }
  const k5 = k({}, Io, ae("MuiInput", ["root", "underline", "input"])),
    Yi = k5;
  function E5(e) {
    return ie("MuiOutlinedInput", e);
  }
  const C5 = k(
      {},
      Io,
      ae("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
    ),
    sr = C5;
  function O5(e) {
    return ie("MuiFilledInput", e);
  }
  const N5 = k({}, Io, ae("MuiFilledInput", ["root", "underline", "input"])),
    $r = N5,
    T5 = wn(R("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    R5 = [
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
    _5 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    I5 = E.forwardRef(function (e, t) {
      const n = qi(),
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
          onEnter: c,
          onEntered: f,
          onEntering: p,
          onExit: m,
          onExited: w,
          onExiting: b,
          style: S,
          timeout: _ = r,
          TransitionComponent: v = _0,
        } = e,
        h = X(e, R5),
        g = E.useRef(null),
        x = it(g, a.ref, t),
        C = (F) => (V) => {
          if (F) {
            const W = g.current;
            V === void 0 ? F(W) : F(W, V);
          }
        },
        N = C(p),
        T = C((F, V) => {
          I0(F);
          const W = bl({ style: S, timeout: _, easing: s }, { mode: "enter" });
          (F.style.webkitTransition = n.transitions.create("opacity", W)),
            (F.style.transition = n.transitions.create("opacity", W)),
            c && c(F, V);
        }),
        I = C(f),
        B = C(b),
        M = C((F) => {
          const V = bl({ style: S, timeout: _, easing: s }, { mode: "exit" });
          (F.style.webkitTransition = n.transitions.create("opacity", V)),
            (F.style.transition = n.transitions.create("opacity", V)),
            m && m(F);
        }),
        U = C(w);
      return R(
        v,
        k(
          {
            appear: i,
            in: l,
            nodeRef: g,
            onEnter: T,
            onEntered: I,
            onEntering: N,
            onExit: M,
            onExited: U,
            onExiting: B,
            addEndListener: (F) => {
              o && o(g.current, F);
            },
            timeout: _,
          },
          h,
          {
            children: (F, V) =>
              E.cloneElement(
                a,
                k(
                  {
                    style: k(
                      {
                        opacity: 0,
                        visibility: F === "exited" && !l ? "hidden" : void 0,
                      },
                      _5[F],
                      S,
                      a.props.style,
                    ),
                    ref: x,
                  },
                  V,
                ),
              ),
          },
        ),
      );
    }),
    P5 = I5;
  function A5(e) {
    return ie("MuiBackdrop", e);
  }
  ae("MuiBackdrop", ["root", "invisible"]);
  const $5 = [
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
    M5 = (e) => {
      const { classes: t, invisible: n } = e;
      return ce({ root: ["root", n && "invisible"] }, A5, t);
    },
    L5 = J("div", {
      name: "MuiBackdrop",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.invisible && t.invisible];
      },
    })(({ ownerState: e }) =>
      k(
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
    B5 = E.forwardRef(function (e, t) {
      var n, r, o;
      const i = fe({ props: e, name: "MuiBackdrop" }),
        {
          children: a,
          component: s = "div",
          components: l = {},
          componentsProps: c = {},
          className: f,
          invisible: p = !1,
          open: m,
          slotProps: w = {},
          slots: b = {},
          transitionDuration: S,
          TransitionComponent: _ = P5,
        } = i,
        v = X(i, $5),
        h = k({}, i, { component: s, invisible: p }),
        g = M5(h),
        x = (n = w.root) != null ? n : c.root;
      return R(
        _,
        k({ in: m, timeout: S }, v, {
          children: R(
            L5,
            k({ "aria-hidden": !0 }, x, {
              as: (r = (o = b.root) != null ? o : l.Root) != null ? r : s,
              className: ee(g.root, f, x == null ? void 0 : x.className),
              ownerState: k({}, h, x == null ? void 0 : x.ownerState),
              classes: g,
              ref: t,
              children: a,
            }),
          ),
        }),
      );
    }),
    z5 = B5;
  function j5(e) {
    return ie("MuiButton", e);
  }
  const F5 = ae("MuiButton", [
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
    Tl = F5,
    D5 = E.createContext({}),
    U5 = D5,
    W5 = [
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
    V5 = (e) => {
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
            `${i}${G(t)}`,
            `size${G(o)}`,
            `${i}Size${G(o)}`,
            t === "inherit" && "colorInherit",
            n && "disableElevation",
            r && "fullWidth",
          ],
          label: ["label"],
          startIcon: ["startIcon", `iconSize${G(o)}`],
          endIcon: ["endIcon", `iconSize${G(o)}`],
        },
        l = ce(s, j5, a);
      return k({}, a, l);
    },
    D0 = (e) =>
      k(
        {},
        e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
        e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
        e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
      ),
    H5 = J(wl, {
      shouldForwardProp: (e) => vn(e) || e === "classes",
      name: "MuiButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${G(n.color)}`],
          t[`size${G(n.size)}`],
          t[`${n.variant}Size${G(n.size)}`],
          n.color === "inherit" && t.colorInherit,
          n.disableElevation && t.disableElevation,
          n.fullWidth && t.fullWidth,
        ];
      },
    })(
      ({ theme: e, ownerState: t }) => {
        var n, r;
        return k(
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
            "&:hover": k(
              {
                textDecoration: "none",
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Ot(e.palette.text.primary, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              t.variant === "text" &&
                t.color !== "inherit" && {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                        e.vars.palette.action.hoverOpacity
                      })`
                    : Ot(
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
                    : Ot(
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
            "&:active": k(
              {},
              t.variant === "contained" && {
                boxShadow: (e.vars || e).shadows[8],
              },
            ),
            [`&.${Tl.focusVisible}`]: k(
              {},
              t.variant === "contained" && {
                boxShadow: (e.vars || e).shadows[6],
              },
            ),
            [`&.${Tl.disabled}`]: k(
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
                : `1px solid ${Ot(e.palette[t.color].main, 0.5)}`,
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
          [`&.${Tl.focusVisible}`]: { boxShadow: "none" },
          "&:active": { boxShadow: "none" },
          [`&.${Tl.disabled}`]: { boxShadow: "none" },
        },
    ),
    q5 = J("span", {
      name: "MuiButton",
      slot: "StartIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.startIcon, t[`iconSize${G(n.size)}`]];
      },
    })(({ ownerState: e }) =>
      k(
        { display: "inherit", marginRight: 8, marginLeft: -4 },
        e.size === "small" && { marginLeft: -2 },
        D0(e),
      ),
    ),
    K5 = J("span", {
      name: "MuiButton",
      slot: "EndIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.endIcon, t[`iconSize${G(n.size)}`]];
      },
    })(({ ownerState: e }) =>
      k(
        { display: "inherit", marginRight: -4, marginLeft: 8 },
        e.size === "small" && { marginRight: -2 },
        D0(e),
      ),
    ),
    J5 = E.forwardRef(function (e, t) {
      const n = E.useContext(U5),
        r = kd(n, e),
        o = fe({ props: r, name: "MuiButton" }),
        {
          children: i,
          color: a = "primary",
          component: s = "button",
          className: l,
          disabled: c = !1,
          disableElevation: f = !1,
          disableFocusRipple: p = !1,
          endIcon: m,
          focusVisibleClassName: w,
          fullWidth: b = !1,
          size: S = "medium",
          startIcon: _,
          type: v,
          variant: h = "text",
        } = o,
        g = X(o, W5),
        x = k({}, o, {
          color: a,
          component: s,
          disabled: c,
          disableElevation: f,
          disableFocusRipple: p,
          fullWidth: b,
          size: S,
          type: v,
          variant: h,
        }),
        C = V5(x),
        N = _ && R(q5, { className: C.startIcon, ownerState: x, children: _ }),
        T = m && R(K5, { className: C.endIcon, ownerState: x, children: m });
      return ue(
        H5,
        k(
          {
            ownerState: x,
            className: ee(n.className, C.root, l),
            component: s,
            disabled: c,
            focusRipple: !p,
            focusVisibleClassName: ee(C.focusVisible, w),
            ref: t,
            type: v,
          },
          g,
          { classes: C, children: [N, i, T] },
        ),
      );
    }),
    Rl = J5;
  function G5(e) {
    return ie("MuiCard", e);
  }
  ae("MuiCard", ["root"]);
  const Y5 = ["className", "raised"],
    Q5 = (e) => {
      const { classes: t } = e;
      return ce({ root: ["root"] }, G5, t);
    },
    X5 = J(Gi, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })(() => ({ overflow: "hidden" })),
    Z5 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiCard" }),
        { className: r, raised: o = !1 } = n,
        i = X(n, Y5),
        a = k({}, n, { raised: o }),
        s = Q5(a);
      return R(
        X5,
        k(
          {
            className: ee(s.root, r),
            elevation: o ? 8 : void 0,
            ref: t,
            ownerState: a,
          },
          i,
        ),
      );
    }),
    eC = Z5;
  function tC(e) {
    return ie("PrivateSwitchBase", e);
  }
  ae("PrivateSwitchBase", [
    "root",
    "checked",
    "disabled",
    "input",
    "edgeStart",
    "edgeEnd",
  ]);
  const nC = [
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
    rC = (e) => {
      const { classes: t, checked: n, disabled: r, edge: o } = e,
        i = {
          root: ["root", n && "checked", r && "disabled", o && `edge${G(o)}`],
          input: ["input"],
        };
      return ce(i, tC, t);
    },
    oC = J(wl)(({ ownerState: e }) =>
      k(
        { padding: 9, borderRadius: "50%" },
        e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
        e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 },
      ),
    ),
    iC = J("input")({
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
    aC = E.forwardRef(function (e, t) {
      const {
          autoFocus: n,
          checked: r,
          checkedIcon: o,
          className: i,
          defaultChecked: a,
          disabled: s,
          disableFocusRipple: l = !1,
          edge: c = !1,
          icon: f,
          id: p,
          inputProps: m,
          inputRef: w,
          name: b,
          onBlur: S,
          onChange: _,
          onFocus: v,
          readOnly: h,
          required: g = !1,
          tabIndex: x,
          type: C,
          value: N,
        } = e,
        T = X(e, nC),
        [I, B] = Ls({
          controlled: r,
          default: !!a,
          name: "SwitchBase",
          state: "checked",
        }),
        M = ar(),
        U = (L) => {
          v && v(L), M && M.onFocus && M.onFocus(L);
        },
        F = (L) => {
          S && S(L), M && M.onBlur && M.onBlur(L);
        },
        V = (L) => {
          if (L.nativeEvent.defaultPrevented) return;
          const A = L.target.checked;
          B(A), _ && _(L, A);
        };
      let W = s;
      M && typeof W > "u" && (W = M.disabled);
      const H = C === "checkbox" || C === "radio",
        te = k({}, e, {
          checked: I,
          disabled: W,
          disableFocusRipple: l,
          edge: c,
        }),
        q = rC(te);
      return ue(
        oC,
        k(
          {
            component: "span",
            className: ee(q.root, i),
            centerRipple: !0,
            focusRipple: !l,
            disabled: W,
            tabIndex: null,
            role: void 0,
            onFocus: U,
            onBlur: F,
            ownerState: te,
            ref: t,
          },
          T,
          {
            children: [
              R(
                iC,
                k(
                  {
                    autoFocus: n,
                    checked: r,
                    defaultChecked: a,
                    className: q.input,
                    disabled: W,
                    id: H && p,
                    name: b,
                    onChange: V,
                    readOnly: h,
                    ref: w,
                    required: g,
                    ownerState: te,
                    tabIndex: x,
                    type: C,
                  },
                  C === "checkbox" && N === void 0 ? {} : { value: N },
                  m,
                ),
              ),
              I ? o : f,
            ],
          },
        ),
      );
    }),
    sC = aC,
    lC = wn(
      R("path", {
        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
      }),
      "CheckBoxOutlineBlank",
    ),
    uC = wn(
      R("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      }),
      "CheckBox",
    ),
    cC = wn(
      R("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
      }),
      "IndeterminateCheckBox",
    );
  function dC(e) {
    return ie("MuiCheckbox", e);
  }
  const fC = ae("MuiCheckbox", [
      "root",
      "checked",
      "disabled",
      "indeterminate",
      "colorPrimary",
      "colorSecondary",
    ]),
    nf = fC,
    pC = [
      "checkedIcon",
      "color",
      "icon",
      "indeterminate",
      "indeterminateIcon",
      "inputProps",
      "size",
      "className",
    ],
    hC = (e) => {
      const { classes: t, indeterminate: n, color: r } = e,
        o = { root: ["root", n && "indeterminate", `color${G(r)}`] },
        i = ce(o, dC, t);
      return k({}, t, i);
    },
    mC = J(sC, {
      shouldForwardProp: (e) => vn(e) || e === "classes",
      name: "MuiCheckbox",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.indeterminate && t.indeterminate,
          n.color !== "default" && t[`color${G(n.color)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      k(
        { color: (e.vars || e).palette.text.secondary },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${
                  t.color === "default"
                    ? e.vars.palette.action.activeChannel
                    : e.vars.palette.primary.mainChannel
                } / ${e.vars.palette.action.hoverOpacity})`
              : Ot(
                  t.color === "default"
                    ? e.palette.action.active
                    : e.palette[t.color].main,
                  e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${nf.checked}, &.${nf.indeterminate}`]: {
            color: (e.vars || e).palette[t.color].main,
          },
          [`&.${nf.disabled}`]: {
            color: (e.vars || e).palette.action.disabled,
          },
        },
      ),
    ),
    gC = R(uC, {}),
    yC = R(lC, {}),
    bC = R(cC, {}),
    vC = E.forwardRef(function (e, t) {
      var n, r;
      const o = fe({ props: e, name: "MuiCheckbox" }),
        {
          checkedIcon: i = gC,
          color: a = "primary",
          icon: s = yC,
          indeterminate: l = !1,
          indeterminateIcon: c = bC,
          inputProps: f,
          size: p = "medium",
          className: m,
        } = o,
        w = X(o, pC),
        b = l ? c : s,
        S = l ? c : i,
        _ = k({}, o, { color: a, indeterminate: l, size: p }),
        v = hC(_);
      return R(
        mC,
        k(
          {
            type: "checkbox",
            inputProps: k({ "data-indeterminate": l }, f),
            icon: E.cloneElement(b, {
              fontSize: (n = b.props.fontSize) != null ? n : p,
            }),
            checkedIcon: E.cloneElement(S, {
              fontSize: (r = S.props.fontSize) != null ? r : p,
            }),
            ownerState: _,
            ref: t,
            className: ee(v.root, m),
          },
          w,
          { classes: v },
        ),
      );
    }),
    wC = vC,
    xC = WS({
      createStyledComponent: J("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, t) => {
          const { ownerState: n } = e;
          return [
            t.root,
            t[`maxWidth${G(String(n.maxWidth))}`],
            n.fixed && t.fixed,
            n.disableGutters && t.disableGutters,
          ];
        },
      }),
      useThemeProps: (e) => fe({ props: e, name: "MuiContainer" }),
    }),
    rf = xC,
    SC = [
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
    kC = (e) => e.classes,
    EC = J("div", {
      name: "MuiModal",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, !n.open && n.exited && t.hidden];
      },
    })(({ theme: e, ownerState: t }) =>
      k(
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
    CC = J(z5, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    OC = E.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = fe({ name: "MuiModal", props: e }),
        {
          BackdropComponent: c = CC,
          BackdropProps: f,
          closeAfterTransition: p = !1,
          children: m,
          component: w,
          components: b = {},
          componentsProps: S = {},
          disableAutoFocus: _ = !1,
          disableEnforceFocus: v = !1,
          disableEscapeKeyDown: h = !1,
          disablePortal: g = !1,
          disableRestoreFocus: x = !1,
          disableScrollLock: C = !1,
          hideBackdrop: N = !1,
          keepMounted: T = !1,
          slotProps: I,
          slots: B,
          theme: M,
        } = l,
        U = X(l, SC),
        [F, V] = E.useState(!0),
        W = {
          closeAfterTransition: p,
          disableAutoFocus: _,
          disableEnforceFocus: v,
          disableEscapeKeyDown: h,
          disablePortal: g,
          disableRestoreFocus: x,
          disableScrollLock: C,
          hideBackdrop: N,
          keepMounted: T,
        },
        H = k({}, l, W, { exited: F }),
        te = kC(H),
        q =
          (n = (r = B == null ? void 0 : B.root) != null ? r : b.Root) != null
            ? n
            : EC,
        L =
          (o =
            (i = B == null ? void 0 : B.backdrop) != null ? i : b.Backdrop) !=
          null
            ? o
            : c,
        A = (a = I == null ? void 0 : I.root) != null ? a : S.root,
        $ = (s = I == null ? void 0 : I.backdrop) != null ? s : S.backdrop;
      return R(
        Hk,
        k(
          {
            slots: { root: q, backdrop: L },
            slotProps: {
              root: () => k({}, Kd(A, H), !No(q) && { as: w, theme: M }),
              backdrop: () => k({}, f, Kd($, H)),
            },
            onTransitionEnter: () => V(!1),
            onTransitionExited: () => V(!0),
            ref: t,
          },
          U,
          { classes: te },
          W,
          { children: m },
        ),
      );
    }),
    NC = OC,
    TC = [
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
    RC = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = ce({ root: ["root", !n && "underline"], input: ["input"] }, O5, t);
      return k({}, t, r);
    },
    _C = J(Ol, {
      shouldForwardProp: (e) => vn(e) || e === "classes",
      name: "MuiFilledInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...El(e, t), !n.disableUnderline && t.underline];
      },
    })(({ theme: e, ownerState: t }) => {
      var n;
      const r = e.palette.mode === "light",
        o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return k(
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
          [`&.${$r.focused}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
          [`&.${$r.disabled}`]: {
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
          [`&.${$r.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${$r.error}`]: {
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
          [`&:hover:not(.${$r.disabled}, .${$r.error}):before`]: {
            borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
          },
          [`&.${$r.disabled}:before`]: { borderBottomStyle: "dotted" },
        },
        t.startAdornment && { paddingLeft: 12 },
        t.endAdornment && { paddingRight: 12 },
        t.multiline &&
          k(
            { padding: "25px 12px 8px" },
            t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
            t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          ),
      );
    }),
    IC = J(Nl, {
      name: "MuiFilledInput",
      slot: "Input",
      overridesResolver: Cl,
    })(({ theme: e, ownerState: t }) =>
      k(
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
    U0 = E.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = fe({ props: e, name: "MuiFilledInput" }),
        {
          components: s = {},
          componentsProps: l,
          fullWidth: c = !1,
          inputComponent: f = "input",
          multiline: p = !1,
          slotProps: m,
          slots: w = {},
          type: b = "text",
        } = a,
        S = X(a, TC),
        _ = k({}, a, {
          fullWidth: c,
          inputComponent: f,
          multiline: p,
          type: b,
        }),
        v = RC(a),
        h = { root: { ownerState: _ }, input: { ownerState: _ } },
        g = m ?? l ? qt(m ?? l, h) : h,
        x = (n = (r = w.root) != null ? r : s.Root) != null ? n : _C,
        C = (o = (i = w.input) != null ? i : s.Input) != null ? o : IC;
      return R(
        tf,
        k(
          {
            slots: { root: x, input: C },
            componentsProps: g,
            fullWidth: c,
            inputComponent: f,
            multiline: p,
            ref: t,
            type: b,
          },
          S,
          { classes: v },
        ),
      );
    });
  U0.muiName = "Input";
  const W0 = U0;
  function PC(e) {
    return ie("MuiFormControl", e);
  }
  ae("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
  ]);
  const AC = [
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
    $C = (e) => {
      const { classes: t, margin: n, fullWidth: r } = e,
        o = {
          root: ["root", n !== "none" && `margin${G(n)}`, r && "fullWidth"],
        };
      return ce(o, PC, t);
    },
    MC = J("div", {
      name: "MuiFormControl",
      slot: "Root",
      overridesResolver: ({ ownerState: e }, t) =>
        k({}, t.root, t[`margin${G(e.margin)}`], e.fullWidth && t.fullWidth),
    })(({ ownerState: e }) =>
      k(
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
    LC = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiFormControl" }),
        {
          children: r,
          className: o,
          color: i = "primary",
          component: a = "div",
          disabled: s = !1,
          error: l = !1,
          focused: c,
          fullWidth: f = !1,
          hiddenLabel: p = !1,
          margin: m = "none",
          required: w = !1,
          size: b = "medium",
          variant: S = "outlined",
        } = n,
        _ = X(n, AC),
        v = k({}, n, {
          color: i,
          component: a,
          disabled: s,
          error: l,
          fullWidth: f,
          hiddenLabel: p,
          margin: m,
          required: w,
          size: b,
          variant: S,
        }),
        h = $C(v),
        [g, x] = E.useState(() => {
          let F = !1;
          return (
            r &&
              E.Children.forEach(r, (V) => {
                if (!Mi(V, ["Input", "Select"])) return;
                const W = Mi(V, ["Select"]) ? V.props.input : V;
                W && m5(W.props) && (F = !0);
              }),
            F
          );
        }),
        [C, N] = E.useState(() => {
          let F = !1;
          return (
            r &&
              E.Children.forEach(r, (V) => {
                Mi(V, ["Input", "Select"]) && ef(V.props, !0) && (F = !0);
              }),
            F
          );
        }),
        [T, I] = E.useState(!1);
      s && T && I(!1);
      const B = c !== void 0 && !s ? c : T;
      let M;
      const U = E.useMemo(
        () => ({
          adornedStart: g,
          setAdornedStart: x,
          color: i,
          disabled: s,
          error: l,
          filled: C,
          focused: B,
          fullWidth: f,
          hiddenLabel: p,
          size: b,
          onBlur: () => {
            I(!1);
          },
          onEmpty: () => {
            N(!1);
          },
          onFilled: () => {
            N(!0);
          },
          onFocus: () => {
            I(!0);
          },
          registerEffect: M,
          required: w,
          variant: S,
        }),
        [g, i, s, l, C, B, f, p, M, w, b, S],
      );
      return R(kl.Provider, {
        value: U,
        children: R(
          MC,
          k({ as: a, ownerState: v, className: ee(h.root, o), ref: t }, _, {
            children: r,
          }),
        ),
      });
    }),
    BC = LC;
  function zC(e) {
    return ie("MuiFormHelperText", e);
  }
  const jC = ae("MuiFormHelperText", [
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
    V0 = jC;
  var H0;
  const FC = [
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
    DC = (e) => {
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
        c = {
          root: [
            "root",
            o && "disabled",
            i && "error",
            r && `size${G(r)}`,
            n && "contained",
            s && "focused",
            a && "filled",
            l && "required",
          ],
        };
      return ce(c, zC, t);
    },
    UC = J("p", {
      name: "MuiFormHelperText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.size && t[`size${G(n.size)}`],
          n.contained && t.contained,
          n.filled && t.filled,
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      k(
        { color: (e.vars || e).palette.text.secondary },
        e.typography.caption,
        {
          textAlign: "left",
          marginTop: 3,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          [`&.${V0.disabled}`]: { color: (e.vars || e).palette.text.disabled },
          [`&.${V0.error}`]: { color: (e.vars || e).palette.error.main },
        },
        t.size === "small" && { marginTop: 4 },
        t.contained && { marginLeft: 14, marginRight: 14 },
      ),
    ),
    WC = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiFormHelperText" }),
        { children: r, className: o, component: i = "p" } = n,
        a = X(n, FC),
        s = ar(),
        l = _o({
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
        c = k({}, n, {
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
        f = DC(c);
      return R(
        UC,
        k({ as: i, ownerState: c, className: ee(f.root, o), ref: t }, a, {
          children:
            r === " "
              ? H0 ||
                (H0 = R("span", {
                  className: "notranslate",
                  children: "\u200B",
                }))
              : r,
        }),
      );
    }),
    VC = WC;
  function HC(e) {
    return ie("MuiFormLabel", e);
  }
  const qC = ae("MuiFormLabel", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "error",
      "filled",
      "required",
      "asterisk",
    ]),
    Qi = qC,
    KC = [
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
    JC = (e) => {
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
            `color${G(n)}`,
            o && "disabled",
            i && "error",
            a && "filled",
            r && "focused",
            s && "required",
          ],
          asterisk: ["asterisk", i && "error"],
        };
      return ce(l, HC, t);
    },
    GC = J("label", {
      name: "MuiFormLabel",
      slot: "Root",
      overridesResolver: ({ ownerState: e }, t) =>
        k(
          {},
          t.root,
          e.color === "secondary" && t.colorSecondary,
          e.filled && t.filled,
        ),
    })(({ theme: e, ownerState: t }) =>
      k({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
        lineHeight: "1.4375em",
        padding: 0,
        position: "relative",
        [`&.${Qi.focused}`]: { color: (e.vars || e).palette[t.color].main },
        [`&.${Qi.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Qi.error}`]: { color: (e.vars || e).palette.error.main },
      }),
    ),
    YC = J("span", {
      name: "MuiFormLabel",
      slot: "Asterisk",
      overridesResolver: (e, t) => t.asterisk,
    })(({ theme: e }) => ({
      [`&.${Qi.error}`]: { color: (e.vars || e).palette.error.main },
    })),
    QC = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiFormLabel" }),
        { children: r, className: o, component: i = "label" } = n,
        a = X(n, KC),
        s = ar(),
        l = _o({
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
        c = k({}, n, {
          color: l.color || "primary",
          component: i,
          disabled: l.disabled,
          error: l.error,
          filled: l.filled,
          focused: l.focused,
          required: l.required,
        }),
        f = JC(c);
      return ue(
        GC,
        k({ as: i, ownerState: c, className: ee(f.root, o), ref: t }, a, {
          children: [
            r,
            l.required &&
              ue(YC, {
                ownerState: c,
                "aria-hidden": !0,
                className: f.asterisk,
                children: ["\u2009", "*"],
              }),
          ],
        }),
      );
    }),
    XC = QC,
    ZC = [
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
  function of(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  const e3 = {
      entering: { opacity: 1, transform: of(1) },
      entered: { opacity: 1, transform: "none" },
    },
    af =
      typeof navigator < "u" &&
      /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
      /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    q0 = E.forwardRef(function (e, t) {
      const {
          addEndListener: n,
          appear: r = !0,
          children: o,
          easing: i,
          in: a,
          onEnter: s,
          onEntered: l,
          onEntering: c,
          onExit: f,
          onExited: p,
          onExiting: m,
          style: w,
          timeout: b = "auto",
          TransitionComponent: S = _0,
        } = e,
        _ = X(e, ZC),
        v = E.useRef(),
        h = E.useRef(),
        g = qi(),
        x = E.useRef(null),
        C = it(x, o.ref, t),
        N = (W) => (H) => {
          if (W) {
            const te = x.current;
            H === void 0 ? W(te) : W(te, H);
          }
        },
        T = N(c),
        I = N((W, H) => {
          I0(W);
          const {
            duration: te,
            delay: q,
            easing: L,
          } = bl({ style: w, timeout: b, easing: i }, { mode: "enter" });
          let A;
          b === "auto"
            ? ((A = g.transitions.getAutoHeightDuration(W.clientHeight)),
              (h.current = A))
            : (A = te),
            (W.style.transition = [
              g.transitions.create("opacity", { duration: A, delay: q }),
              g.transitions.create("transform", {
                duration: af ? A : A * 0.666,
                delay: q,
                easing: L,
              }),
            ].join(",")),
            s && s(W, H);
        }),
        B = N(l),
        M = N(m),
        U = N((W) => {
          const {
            duration: H,
            delay: te,
            easing: q,
          } = bl({ style: w, timeout: b, easing: i }, { mode: "exit" });
          let L;
          b === "auto"
            ? ((L = g.transitions.getAutoHeightDuration(W.clientHeight)),
              (h.current = L))
            : (L = H),
            (W.style.transition = [
              g.transitions.create("opacity", { duration: L, delay: te }),
              g.transitions.create("transform", {
                duration: af ? L : L * 0.666,
                delay: af ? te : te || L * 0.333,
                easing: q,
              }),
            ].join(",")),
            (W.style.opacity = 0),
            (W.style.transform = of(0.75)),
            f && f(W);
        }),
        F = N(p),
        V = (W) => {
          b === "auto" && (v.current = setTimeout(W, h.current || 0)),
            n && n(x.current, W);
        };
      return (
        E.useEffect(
          () => () => {
            clearTimeout(v.current);
          },
          [],
        ),
        R(
          S,
          k(
            {
              appear: r,
              in: a,
              nodeRef: x,
              onEnter: I,
              onEntered: B,
              onEntering: T,
              onExit: U,
              onExited: F,
              onExiting: M,
              addEndListener: V,
              timeout: b === "auto" ? null : b,
            },
            _,
            {
              children: (W, H) =>
                E.cloneElement(
                  o,
                  k(
                    {
                      style: k(
                        {
                          opacity: 0,
                          transform: of(0.75),
                          visibility: W === "exited" && !a ? "hidden" : void 0,
                        },
                        e3[W],
                        w,
                        o.props.style,
                      ),
                      ref: C,
                    },
                    H,
                  ),
                ),
            },
          ),
        )
      );
    });
  q0.muiSupportAuto = !0;
  const t3 = q0,
    n3 = [
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
    r3 = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = ce({ root: ["root", !n && "underline"], input: ["input"] }, S5, t);
      return k({}, t, r);
    },
    o3 = J(Ol, {
      shouldForwardProp: (e) => vn(e) || e === "classes",
      name: "MuiInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...El(e, t), !n.disableUnderline && t.underline];
      },
    })(({ theme: e, ownerState: t }) => {
      let n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        k(
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
            [`&.${Yi.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
            [`&.${Yi.error}`]: {
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
            [`&:hover:not(.${Yi.disabled}, .${Yi.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": { borderBottom: `1px solid ${n}` },
            },
            [`&.${Yi.disabled}:before`]: { borderBottomStyle: "dotted" },
          },
        )
      );
    }),
    i3 = J(Nl, { name: "MuiInput", slot: "Input", overridesResolver: Cl })({}),
    K0 = E.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = fe({ props: e, name: "MuiInput" }),
        {
          disableUnderline: s,
          components: l = {},
          componentsProps: c,
          fullWidth: f = !1,
          inputComponent: p = "input",
          multiline: m = !1,
          slotProps: w,
          slots: b = {},
          type: S = "text",
        } = a,
        _ = X(a, n3),
        v = r3(a),
        h = { root: { ownerState: { disableUnderline: s } } },
        g = w ?? c ? qt(w ?? c, h) : h,
        x = (n = (r = b.root) != null ? r : l.Root) != null ? n : o3,
        C = (o = (i = b.input) != null ? i : l.Input) != null ? o : i3;
      return R(
        tf,
        k(
          {
            slots: { root: x, input: C },
            slotProps: g,
            fullWidth: f,
            inputComponent: p,
            multiline: m,
            ref: t,
            type: S,
          },
          _,
          { classes: v },
        ),
      );
    });
  K0.muiName = "Input";
  const J0 = K0;
  function a3(e) {
    return ie("MuiInputAdornment", e);
  }
  const s3 = ae("MuiInputAdornment", [
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
    G0 = s3;
  var Y0;
  const l3 = [
      "children",
      "className",
      "component",
      "disablePointerEvents",
      "disableTypography",
      "position",
      "variant",
    ],
    u3 = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`position${G(n.position)}`],
        n.disablePointerEvents === !0 && t.disablePointerEvents,
        t[n.variant],
      ];
    },
    c3 = (e) => {
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
            o && `position${G(o)}`,
            a,
            r && "hiddenLabel",
            i && `size${G(i)}`,
          ],
        };
      return ce(s, a3, t);
    },
    d3 = J("div", {
      name: "MuiInputAdornment",
      slot: "Root",
      overridesResolver: u3,
    })(({ theme: e, ownerState: t }) =>
      k(
        {
          display: "flex",
          height: "0.01em",
          maxHeight: "2em",
          alignItems: "center",
          whiteSpace: "nowrap",
          color: (e.vars || e).palette.action.active,
        },
        t.variant === "filled" && {
          [`&.${G0.positionStart}&:not(.${G0.hiddenLabel})`]: { marginTop: 16 },
        },
        t.position === "start" && { marginRight: 8 },
        t.position === "end" && { marginLeft: 8 },
        t.disablePointerEvents === !0 && { pointerEvents: "none" },
      ),
    ),
    f3 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiInputAdornment" }),
        {
          children: r,
          className: o,
          component: i = "div",
          disablePointerEvents: a = !1,
          disableTypography: s = !1,
          position: l,
          variant: c,
        } = n,
        f = X(n, l3),
        p = ar() || {};
      let m = c;
      c && p.variant, p && !m && (m = p.variant);
      const w = k({}, n, {
          hiddenLabel: p.hiddenLabel,
          size: p.size,
          disablePointerEvents: a,
          position: l,
          variant: m,
        }),
        b = c3(w);
      return R(kl.Provider, {
        value: null,
        children: R(
          d3,
          k({ as: i, ownerState: w, className: ee(b.root, o), ref: t }, f, {
            children:
              typeof r == "string" && !s
                ? R(Gt, { color: "text.secondary", children: r })
                : ue(E.Fragment, {
                    children: [
                      l === "start"
                        ? Y0 ||
                          (Y0 = R("span", {
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
    p3 = f3;
  function h3(e) {
    return ie("MuiInputLabel", e);
  }
  ae("MuiInputLabel", [
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
  const m3 = ["disableAnimation", "margin", "shrink", "variant", "className"],
    g3 = (e) => {
      const {
          classes: t,
          formControl: n,
          size: r,
          shrink: o,
          disableAnimation: i,
          variant: a,
          required: s,
        } = e,
        l = ce(
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
          h3,
          t,
        );
      return k({}, t, l);
    },
    y3 = J(XC, {
      shouldForwardProp: (e) => vn(e) || e === "classes",
      name: "MuiInputLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Qi.asterisk}`]: t.asterisk },
          t.root,
          n.formControl && t.formControl,
          n.size === "small" && t.sizeSmall,
          n.shrink && t.shrink,
          !n.disableAnimation && t.animated,
          t[n.variant],
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      k(
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
          k(
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
              k(
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
          k(
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
    b3 = E.forwardRef(function (e, t) {
      const n = fe({ name: "MuiInputLabel", props: e }),
        { disableAnimation: r = !1, shrink: o, className: i } = n,
        a = X(n, m3),
        s = ar();
      let l = o;
      typeof l > "u" && s && (l = s.filled || s.focused || s.adornedStart);
      const c = _o({
          props: n,
          muiFormControl: s,
          states: ["size", "variant", "required"],
        }),
        f = k({}, n, {
          disableAnimation: r,
          formControl: s,
          shrink: l,
          size: c.size,
          variant: c.variant,
          required: c.required,
        }),
        p = g3(f);
      return R(
        y3,
        k(
          { "data-shrink": l, ownerState: f, ref: t, className: ee(p.root, i) },
          a,
          { classes: p },
        ),
      );
    }),
    v3 = b3;
  function w3(e) {
    return ie("MuiLinearProgress", e);
  }
  ae("MuiLinearProgress", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "determinate",
    "indeterminate",
    "buffer",
    "query",
    "dashed",
    "dashedColorPrimary",
    "dashedColorSecondary",
    "bar",
    "barColorPrimary",
    "barColorSecondary",
    "bar1Indeterminate",
    "bar1Determinate",
    "bar1Buffer",
    "bar2Indeterminate",
    "bar2Buffer",
  ]);
  const x3 = ["className", "color", "value", "valueBuffer", "variant"];
  let Po = (e) => e,
    Q0,
    X0,
    Z0,
    ey,
    ty,
    ny;
  const sf = 4,
    S3 = Eo(
      Q0 ||
        (Q0 = Po`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`),
    ),
    k3 = Eo(
      X0 ||
        (X0 = Po`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`),
    ),
    E3 = Eo(
      Z0 ||
        (Z0 = Po`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`),
    ),
    C3 = (e) => {
      const { classes: t, variant: n, color: r } = e,
        o = {
          root: ["root", `color${G(r)}`, n],
          dashed: ["dashed", `dashedColor${G(r)}`],
          bar1: [
            "bar",
            `barColor${G(r)}`,
            (n === "indeterminate" || n === "query") && "bar1Indeterminate",
            n === "determinate" && "bar1Determinate",
            n === "buffer" && "bar1Buffer",
          ],
          bar2: [
            "bar",
            n !== "buffer" && `barColor${G(r)}`,
            n === "buffer" && `color${G(r)}`,
            (n === "indeterminate" || n === "query") && "bar2Indeterminate",
            n === "buffer" && "bar2Buffer",
          ],
        };
      return ce(o, w3, t);
    },
    lf = (e, t) =>
      t === "inherit"
        ? "currentColor"
        : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === "light"
        ? hl(e.palette[t].main, 0.62)
        : pl(e.palette[t].main, 0.5),
    O3 = J("span", {
      name: "MuiLinearProgress",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, t[`color${G(n.color)}`], t[n.variant]];
      },
    })(({ ownerState: e, theme: t }) =>
      k(
        {
          position: "relative",
          overflow: "hidden",
          display: "block",
          height: 4,
          zIndex: 0,
          "@media print": { colorAdjust: "exact" },
          backgroundColor: lf(t, e.color),
        },
        e.color === "inherit" &&
          e.variant !== "buffer" && {
            backgroundColor: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "currentColor",
              opacity: 0.3,
            },
          },
        e.variant === "buffer" && { backgroundColor: "transparent" },
        e.variant === "query" && { transform: "rotate(180deg)" },
      ),
    ),
    N3 = J("span", {
      name: "MuiLinearProgress",
      slot: "Dashed",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.dashed, t[`dashedColor${G(n.color)}`]];
      },
    })(
      ({ ownerState: e, theme: t }) => {
        const n = lf(t, e.color);
        return k(
          { position: "absolute", marginTop: 0, height: "100%", width: "100%" },
          e.color === "inherit" && { opacity: 0.3 },
          {
            backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,
            backgroundSize: "10px 10px",
            backgroundPosition: "0 -23px",
          },
        );
      },
      rl(
        ey ||
          (ey = Po`
    animation: ${0} 3s infinite linear;
  `),
        E3,
      ),
    ),
    T3 = J("span", {
      name: "MuiLinearProgress",
      slot: "Bar1",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.bar,
          t[`barColor${G(n.color)}`],
          (n.variant === "indeterminate" || n.variant === "query") &&
            t.bar1Indeterminate,
          n.variant === "determinate" && t.bar1Determinate,
          n.variant === "buffer" && t.bar1Buffer,
        ];
      },
    })(
      ({ ownerState: e, theme: t }) =>
        k(
          {
            width: "100%",
            position: "absolute",
            left: 0,
            bottom: 0,
            top: 0,
            transition: "transform 0.2s linear",
            transformOrigin: "left",
            backgroundColor:
              e.color === "inherit"
                ? "currentColor"
                : (t.vars || t).palette[e.color].main,
          },
          e.variant === "determinate" && {
            transition: `transform .${sf}s linear`,
          },
          e.variant === "buffer" && {
            zIndex: 1,
            transition: `transform .${sf}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        rl(
          ty ||
            (ty = Po`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
          S3,
        ),
    ),
    R3 = J("span", {
      name: "MuiLinearProgress",
      slot: "Bar2",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.bar,
          t[`barColor${G(n.color)}`],
          (n.variant === "indeterminate" || n.variant === "query") &&
            t.bar2Indeterminate,
          n.variant === "buffer" && t.bar2Buffer,
        ];
      },
    })(
      ({ ownerState: e, theme: t }) =>
        k(
          {
            width: "100%",
            position: "absolute",
            left: 0,
            bottom: 0,
            top: 0,
            transition: "transform 0.2s linear",
            transformOrigin: "left",
          },
          e.variant !== "buffer" && {
            backgroundColor:
              e.color === "inherit"
                ? "currentColor"
                : (t.vars || t).palette[e.color].main,
          },
          e.color === "inherit" && { opacity: 0.3 },
          e.variant === "buffer" && {
            backgroundColor: lf(t, e.color),
            transition: `transform .${sf}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        rl(
          ny ||
            (ny = Po`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
          k3,
        ),
    ),
    _3 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiLinearProgress" }),
        {
          className: r,
          color: o = "primary",
          value: i,
          valueBuffer: a,
          variant: s = "indeterminate",
        } = n,
        l = X(n, x3),
        c = k({}, n, { color: o, variant: s }),
        f = C3(c),
        p = qi(),
        m = {},
        w = { bar1: {}, bar2: {} };
      if ((s === "determinate" || s === "buffer") && i !== void 0) {
        (m["aria-valuenow"] = Math.round(i)),
          (m["aria-valuemin"] = 0),
          (m["aria-valuemax"] = 100);
        let b = i - 100;
        p.direction === "rtl" && (b = -b),
          (w.bar1.transform = `translateX(${b}%)`);
      }
      if (s === "buffer" && a !== void 0) {
        let b = (a || 0) - 100;
        p.direction === "rtl" && (b = -b),
          (w.bar2.transform = `translateX(${b}%)`);
      }
      return ue(
        O3,
        k(
          { className: ee(f.root, r), ownerState: c, role: "progressbar" },
          m,
          { ref: t },
          l,
          {
            children: [
              s === "buffer"
                ? R(N3, { className: f.dashed, ownerState: c })
                : null,
              R(T3, { className: f.bar1, ownerState: c, style: w.bar1 }),
              s === "determinate"
                ? null
                : R(R3, { className: f.bar2, ownerState: c, style: w.bar2 }),
            ],
          },
        ),
      );
    }),
    I3 = _3;
  function P3(e) {
    return ie("MuiLink", e);
  }
  const A3 = ae("MuiLink", [
      "root",
      "underlineNone",
      "underlineHover",
      "underlineAlways",
      "button",
      "focusVisible",
    ]),
    $3 = A3,
    ry = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main",
    },
    M3 = (e) => ry[e] || e,
    L3 = ({ theme: e, ownerState: t }) => {
      const n = M3(t.color),
        r = Co(e, `palette.${n}`, !1) || t.color,
        o = Co(e, `palette.${n}Channel`);
      return "vars" in e && o ? `rgba(${o} / 0.4)` : Ot(r, 0.4);
    },
    B3 = L3,
    z3 = [
      "className",
      "color",
      "component",
      "onBlur",
      "onFocus",
      "TypographyClasses",
      "underline",
      "variant",
      "sx",
    ],
    j3 = (e) => {
      const { classes: t, component: n, focusVisible: r, underline: o } = e,
        i = {
          root: [
            "root",
            `underline${G(o)}`,
            n === "button" && "button",
            r && "focusVisible",
          ],
        };
      return ce(i, P3, t);
    },
    F3 = J(Gt, {
      name: "MuiLink",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`underline${G(n.underline)}`],
          n.component === "button" && t.button,
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      k(
        {},
        t.underline === "none" && { textDecoration: "none" },
        t.underline === "hover" && {
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        },
        t.underline === "always" &&
          k(
            { textDecoration: "underline" },
            t.color !== "inherit" && {
              textDecorationColor: B3({ theme: e, ownerState: t }),
            },
            { "&:hover": { textDecorationColor: "inherit" } },
          ),
        t.component === "button" && {
          position: "relative",
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
          "&::-moz-focus-inner": { borderStyle: "none" },
          [`&.${$3.focusVisible}`]: { outline: "auto" },
        },
      ),
    ),
    D3 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiLink" }),
        {
          className: r,
          color: o = "primary",
          component: i = "a",
          onBlur: a,
          onFocus: s,
          TypographyClasses: l,
          underline: c = "always",
          variant: f = "inherit",
          sx: p,
        } = n,
        m = X(n, z3),
        { isFocusVisibleRef: w, onBlur: b, onFocus: S, ref: _ } = Sd(),
        [v, h] = E.useState(!1),
        g = it(t, _),
        x = (I) => {
          b(I), w.current === !1 && h(!1), a && a(I);
        },
        C = (I) => {
          S(I), w.current === !0 && h(!0), s && s(I);
        },
        N = k({}, n, {
          color: o,
          component: i,
          focusVisible: v,
          underline: c,
          variant: f,
        }),
        T = j3(N);
      return R(
        F3,
        k(
          {
            color: o,
            className: ee(T.root, r),
            classes: l,
            component: i,
            onBlur: x,
            onFocus: C,
            ref: g,
            ownerState: N,
            variant: f,
            sx: [
              ...(Object.keys(ry).includes(o) ? [] : [{ color: o }]),
              ...(Array.isArray(p) ? p : [p]),
            ],
          },
          m,
        ),
      );
    }),
    U3 = D3,
    W3 = E.createContext({}),
    Mr = W3;
  function V3(e) {
    return ie("MuiList", e);
  }
  ae("MuiList", ["root", "padding", "dense", "subheader"]);
  const H3 = [
      "children",
      "className",
      "component",
      "dense",
      "disablePadding",
      "subheader",
    ],
    q3 = (e) => {
      const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
      return ce(
        { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
        V3,
        t,
      );
    },
    K3 = J("ul", {
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
      k(
        { listStyle: "none", margin: 0, padding: 0, position: "relative" },
        !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
        e.subheader && { paddingTop: 0 },
      ),
    ),
    J3 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiList" }),
        {
          children: r,
          className: o,
          component: i = "ul",
          dense: a = !1,
          disablePadding: s = !1,
          subheader: l,
        } = n,
        c = X(n, H3),
        f = E.useMemo(() => ({ dense: a }), [a]),
        p = k({}, n, { component: i, dense: a, disablePadding: s }),
        m = q3(p);
      return R(Mr.Provider, {
        value: f,
        children: ue(
          K3,
          k({ as: i, className: ee(m.root, o), ref: t, ownerState: p }, c, {
            children: [l, r],
          }),
        ),
      });
    }),
    oy = J3;
  function G3(e) {
    return ie("MuiListItem", e);
  }
  const Y3 = ae("MuiListItem", [
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
    Ao = Y3,
    Q3 = ae("MuiListItemButton", [
      "root",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    X3 = Q3;
  function Z3(e) {
    return ie("MuiListItemSecondaryAction", e);
  }
  ae("MuiListItemSecondaryAction", ["root", "disableGutters"]);
  const eO = ["className"],
    tO = (e) => {
      const { disableGutters: t, classes: n } = e;
      return ce({ root: ["root", t && "disableGutters"] }, Z3, n);
    },
    nO = J("div", {
      name: "MuiListItemSecondaryAction",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.disableGutters && t.disableGutters];
      },
    })(({ ownerState: e }) =>
      k(
        {
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
        },
        e.disableGutters && { right: 0 },
      ),
    ),
    iy = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiListItemSecondaryAction" }),
        { className: r } = n,
        o = X(n, eO),
        i = E.useContext(Mr),
        a = k({}, n, { disableGutters: i.disableGutters }),
        s = tO(a);
      return R(nO, k({ className: ee(s.root, r), ownerState: a, ref: t }, o));
    });
  iy.muiName = "ListItemSecondaryAction";
  const uf = iy,
    rO = ["className"],
    oO = [
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
    iO = (e, t) => {
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
    aO = (e) => {
      const {
        alignItems: t,
        button: n,
        classes: r,
        dense: o,
        disabled: i,
        disableGutters: a,
        disablePadding: s,
        divider: l,
        hasSecondaryAction: c,
        selected: f,
      } = e;
      return ce(
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
            c && "secondaryAction",
            f && "selected",
          ],
          container: ["container"],
        },
        G3,
        r,
      );
    },
    sO = J("div", { name: "MuiListItem", slot: "Root", overridesResolver: iO })(
      ({ theme: e, ownerState: t }) =>
        k(
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
            k(
              { paddingTop: 8, paddingBottom: 8 },
              t.dense && { paddingTop: 4, paddingBottom: 4 },
              !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
              !!t.secondaryAction && { paddingRight: 48 },
            ),
          !!t.secondaryAction && { [`& > .${X3.root}`]: { paddingRight: 48 } },
          {
            [`&.${Ao.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus,
            },
            [`&.${Ao.selected}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Ot(e.palette.primary.main, e.palette.action.selectedOpacity),
              [`&.${Ao.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                  : Ot(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity +
                        e.palette.action.focusOpacity,
                    ),
              },
            },
            [`&.${Ao.disabled}`]: {
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
            [`&.${Ao.selected}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                : Ot(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.hoverOpacity,
                  ),
              "@media (hover: none)": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                  : Ot(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity,
                    ),
              },
            },
          },
          t.hasSecondaryAction && { paddingRight: 48 },
        ),
    ),
    lO = J("li", {
      name: "MuiListItem",
      slot: "Container",
      overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    uO = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiListItem" }),
        {
          alignItems: r = "center",
          autoFocus: o = !1,
          button: i = !1,
          children: a,
          className: s,
          component: l,
          components: c = {},
          componentsProps: f = {},
          ContainerComponent: p = "li",
          ContainerProps: { className: m } = {},
          dense: w = !1,
          disabled: b = !1,
          disableGutters: S = !1,
          disablePadding: _ = !1,
          divider: v = !1,
          focusVisibleClassName: h,
          secondaryAction: g,
          selected: x = !1,
          slotProps: C = {},
          slots: N = {},
        } = n,
        T = X(n.ContainerProps, rO),
        I = X(n, oO),
        B = E.useContext(Mr),
        M = E.useMemo(
          () => ({
            dense: w || B.dense || !1,
            alignItems: r,
            disableGutters: S,
          }),
          [r, B.dense, w, S],
        ),
        U = E.useRef(null);
      ir(() => {
        o && U.current && U.current.focus();
      }, [o]);
      const F = E.Children.toArray(a),
        V = F.length && Mi(F[F.length - 1], ["ListItemSecondaryAction"]),
        W = k({}, n, {
          alignItems: r,
          autoFocus: o,
          button: i,
          dense: M.dense,
          disabled: b,
          disableGutters: S,
          disablePadding: _,
          divider: v,
          hasSecondaryAction: V,
          selected: x,
        }),
        H = aO(W),
        te = it(U, t),
        q = N.root || c.Root || sO,
        L = C.root || f.root || {},
        A = k({ className: ee(H.root, L.className, s), disabled: b }, I);
      let $ = l || "li";
      return (
        i &&
          ((A.component = l || "div"),
          (A.focusVisibleClassName = ee(Ao.focusVisible, h)),
          ($ = wl)),
        V
          ? (($ = !A.component && !l ? "div" : $),
            p === "li" &&
              ($ === "li"
                ? ($ = "div")
                : A.component === "li" && (A.component = "div")),
            R(Mr.Provider, {
              value: M,
              children: ue(
                lO,
                k(
                  {
                    as: p,
                    className: ee(H.container, m),
                    ref: te,
                    ownerState: W,
                  },
                  T,
                  {
                    children: [
                      R(
                        q,
                        k(
                          {},
                          L,
                          !No(q) && {
                            as: $,
                            ownerState: k({}, W, L.ownerState),
                          },
                          A,
                          { children: F },
                        ),
                      ),
                      F.pop(),
                    ],
                  },
                ),
              ),
            }))
          : R(Mr.Provider, {
              value: M,
              children: ue(
                q,
                k(
                  {},
                  L,
                  { as: $, ref: te },
                  !No(q) && { ownerState: k({}, W, L.ownerState) },
                  A,
                  { children: [F, g && R(uf, { children: g })] },
                ),
              ),
            })
      );
    }),
    ay = uO;
  function cO(e) {
    return ie("MuiListItemIcon", e);
  }
  ae("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
  const dO = ["className"],
    fO = (e) => {
      const { alignItems: t, classes: n } = e;
      return ce(
        { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
        cO,
        n,
      );
    },
    pO = J("div", {
      name: "MuiListItemIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
      },
    })(({ theme: e, ownerState: t }) =>
      k(
        {
          minWidth: 56,
          color: (e.vars || e).palette.action.active,
          flexShrink: 0,
          display: "inline-flex",
        },
        t.alignItems === "flex-start" && { marginTop: 8 },
      ),
    ),
    hO = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiListItemIcon" }),
        { className: r } = n,
        o = X(n, dO),
        i = E.useContext(Mr),
        a = k({}, n, { alignItems: i.alignItems }),
        s = fO(a);
      return R(pO, k({ className: ee(s.root, r), ownerState: a, ref: t }, o));
    }),
    mO = hO;
  function gO(e) {
    return ie("MuiListItemText", e);
  }
  const yO = ae("MuiListItemText", [
      "root",
      "multiline",
      "dense",
      "inset",
      "primary",
      "secondary",
    ]),
    sy = yO,
    bO = [
      "children",
      "className",
      "disableTypography",
      "inset",
      "primary",
      "primaryTypographyProps",
      "secondary",
      "secondaryTypographyProps",
    ],
    vO = (e) => {
      const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
      return ce(
        {
          root: ["root", n && "inset", i && "dense", r && o && "multiline"],
          primary: ["primary"],
          secondary: ["secondary"],
        },
        gO,
        t,
      );
    },
    wO = J("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${sy.primary}`]: t.primary },
          { [`& .${sy.secondary}`]: t.secondary },
          t.root,
          n.inset && t.inset,
          n.primary && n.secondary && t.multiline,
          n.dense && t.dense,
        ];
      },
    })(({ ownerState: e }) =>
      k(
        { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
        e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
        e.inset && { paddingLeft: 56 },
      ),
    ),
    xO = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiListItemText" }),
        {
          children: r,
          className: o,
          disableTypography: i = !1,
          inset: a = !1,
          primary: s,
          primaryTypographyProps: l,
          secondary: c,
          secondaryTypographyProps: f,
        } = n,
        p = X(n, bO),
        { dense: m } = E.useContext(Mr);
      let w = s ?? r,
        b = c;
      const S = k({}, n, {
          disableTypography: i,
          inset: a,
          primary: !!w,
          secondary: !!b,
          dense: m,
        }),
        _ = vO(S);
      return (
        w != null &&
          w.type !== Gt &&
          !i &&
          (w = R(
            Gt,
            k(
              {
                variant: m ? "body2" : "body1",
                className: _.primary,
                component: l != null && l.variant ? void 0 : "span",
                display: "block",
              },
              l,
              { children: w },
            ),
          )),
        b != null &&
          b.type !== Gt &&
          !i &&
          (b = R(
            Gt,
            k(
              {
                variant: "body2",
                className: _.secondary,
                color: "text.secondary",
                display: "block",
              },
              f,
              { children: b },
            ),
          )),
        ue(
          wO,
          k({ className: ee(_.root, o), ownerState: S, ref: t }, p, {
            children: [w, b],
          }),
        )
      );
    }),
    _l = xO,
    SO = [
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
  function cf(e, t, n) {
    return e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
      ? null
      : e.firstChild;
  }
  function ly(e, t, n) {
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
  function uy(e, t) {
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
  function Xi(e, t, n, r, o, i) {
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
      if (!s.hasAttribute("tabindex") || !uy(s, i) || l) s = o(e, s, n);
      else return s.focus(), !0;
    }
    return !1;
  }
  const kO = E.forwardRef(function (e, t) {
      const {
          actions: n,
          autoFocus: r = !1,
          autoFocusItem: o = !1,
          children: i,
          className: a,
          disabledItemsFocusable: s = !1,
          disableListWrap: l = !1,
          onKeyDown: c,
          variant: f = "selectedMenu",
        } = e,
        p = X(e, SO),
        m = E.useRef(null),
        w = E.useRef({
          keys: [],
          repeating: !0,
          previousKeyMatched: !0,
          lastTime: null,
        });
      ir(() => {
        r && m.current.focus();
      }, [r]),
        E.useImperativeHandle(
          n,
          () => ({
            adjustStyleForScrollbar: (h, g) => {
              const x = !m.current.style.width;
              if (h.clientHeight < m.current.clientHeight && x) {
                const C = `${Og(Et(h))}px`;
                (m.current.style[
                  g.direction === "rtl" ? "paddingLeft" : "paddingRight"
                ] = C),
                  (m.current.style.width = `calc(100% + ${C})`);
              }
              return m.current;
            },
          }),
          [],
        );
      const b = (h) => {
          const g = m.current,
            x = h.key,
            C = Et(g).activeElement;
          if (x === "ArrowDown") h.preventDefault(), Xi(g, C, l, s, cf);
          else if (x === "ArrowUp") h.preventDefault(), Xi(g, C, l, s, ly);
          else if (x === "Home") h.preventDefault(), Xi(g, null, l, s, cf);
          else if (x === "End") h.preventDefault(), Xi(g, null, l, s, ly);
          else if (x.length === 1) {
            const N = w.current,
              T = x.toLowerCase(),
              I = performance.now();
            N.keys.length > 0 &&
              (I - N.lastTime > 500
                ? ((N.keys = []),
                  (N.repeating = !0),
                  (N.previousKeyMatched = !0))
                : N.repeating && T !== N.keys[0] && (N.repeating = !1)),
              (N.lastTime = I),
              N.keys.push(T);
            const B = C && !N.repeating && uy(C, N);
            N.previousKeyMatched && (B || Xi(g, C, !1, s, cf, N))
              ? h.preventDefault()
              : (N.previousKeyMatched = !1);
          }
          c && c(h);
        },
        S = it(m, t);
      let _ = -1;
      E.Children.forEach(i, (h, g) => {
        E.isValidElement(h) &&
          (h.props.disabled ||
            (((f === "selectedMenu" && h.props.selected) || _ === -1) &&
              (_ = g)));
      });
      const v = E.Children.map(i, (h, g) => {
        if (g === _) {
          const x = {};
          return (
            o && (x.autoFocus = !0),
            h.props.tabIndex === void 0 &&
              f === "selectedMenu" &&
              (x.tabIndex = 0),
            E.cloneElement(h, x)
          );
        }
        return h;
      });
      return R(
        oy,
        k(
          {
            role: "menu",
            ref: S,
            className: a,
            onKeyDown: b,
            tabIndex: r ? 0 : -1,
          },
          p,
          { children: v },
        ),
      );
    }),
    EO = kO;
  function CO(e) {
    return ie("MuiPopover", e);
  }
  ae("MuiPopover", ["root", "paper"]);
  const OO = ["onEntering"],
    NO = [
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
  function cy(e, t) {
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
  function dy(e, t) {
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
  function fy(e) {
    return [e.horizontal, e.vertical]
      .map((t) => (typeof t == "number" ? `${t}px` : t))
      .join(" ");
  }
  function df(e) {
    return typeof e == "function" ? e() : e;
  }
  const TO = (e) => {
      const { classes: t } = e;
      return ce({ root: ["root"], paper: ["paper"] }, CO, t);
    },
    RO = J(NC, {
      name: "MuiPopover",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    _O = J(Gi, {
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
    IO = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiPopover" }),
        {
          action: r,
          anchorEl: o,
          anchorOrigin: i = { vertical: "top", horizontal: "left" },
          anchorPosition: a,
          anchorReference: s = "anchorEl",
          children: l,
          className: c,
          container: f,
          elevation: p = 8,
          marginThreshold: m = 16,
          open: w,
          PaperProps: b = {},
          transformOrigin: S = { vertical: "top", horizontal: "left" },
          TransitionComponent: _ = t3,
          transitionDuration: v = "auto",
          TransitionProps: { onEntering: h } = {},
        } = n,
        g = X(n.TransitionProps, OO),
        x = X(n, NO),
        C = E.useRef(),
        N = it(C, b.ref),
        T = k({}, n, {
          anchorOrigin: i,
          anchorReference: s,
          elevation: p,
          marginThreshold: m,
          PaperProps: b,
          transformOrigin: S,
          TransitionComponent: _,
          transitionDuration: v,
          TransitionProps: g,
        }),
        I = TO(T),
        B = E.useCallback(() => {
          if (s === "anchorPosition") return a;
          const A = df(o),
            $ = (
              A && A.nodeType === 1 ? A : Et(C.current).body
            ).getBoundingClientRect();
          return {
            top: $.top + cy($, i.vertical),
            left: $.left + dy($, i.horizontal),
          };
        }, [o, i.horizontal, i.vertical, a, s]),
        M = E.useCallback(
          (A) => ({
            vertical: cy(A, S.vertical),
            horizontal: dy(A, S.horizontal),
          }),
          [S.horizontal, S.vertical],
        ),
        U = E.useCallback(
          (A) => {
            const $ = { width: A.offsetWidth, height: A.offsetHeight },
              Y = M($);
            if (s === "none")
              return { top: null, left: null, transformOrigin: fy(Y) };
            const oe = B();
            let ne = oe.top - Y.vertical,
              he = oe.left - Y.horizontal;
            const ve = ne + $.height,
              Le = he + $.width,
              Fe = or(df(o)),
              Pe = Fe.innerHeight - m,
              lt = Fe.innerWidth - m;
            if (ne < m) {
              const re = ne - m;
              (ne -= re), (Y.vertical += re);
            } else if (ve > Pe) {
              const re = ve - Pe;
              (ne -= re), (Y.vertical += re);
            }
            if (he < m) {
              const re = he - m;
              (he -= re), (Y.horizontal += re);
            } else if (Le > lt) {
              const re = Le - lt;
              (he -= re), (Y.horizontal += re);
            }
            return {
              top: `${Math.round(ne)}px`,
              left: `${Math.round(he)}px`,
              transformOrigin: fy(Y),
            };
          },
          [o, s, B, M, m],
        ),
        [F, V] = E.useState(w),
        W = E.useCallback(() => {
          const A = C.current;
          if (!A) return;
          const $ = U(A);
          $.top !== null && (A.style.top = $.top),
            $.left !== null && (A.style.left = $.left),
            (A.style.transformOrigin = $.transformOrigin),
            V(!0);
        }, [U]),
        H = (A, $) => {
          h && h(A, $), W();
        },
        te = () => {
          V(!1);
        };
      E.useEffect(() => {
        w && W();
      }),
        E.useImperativeHandle(
          r,
          () =>
            w
              ? {
                  updatePosition: () => {
                    W();
                  },
                }
              : null,
          [w, W],
        ),
        E.useEffect(() => {
          if (!w) return;
          const A = vd(() => {
              W();
            }),
            $ = or(o);
          return (
            $.addEventListener("resize", A),
            () => {
              A.clear(), $.removeEventListener("resize", A);
            }
          );
        }, [o, w, W]);
      let q = v;
      v === "auto" && !_.muiSupportAuto && (q = void 0);
      const L = f || (o ? Et(df(o)).body : void 0);
      return R(
        RO,
        k(
          {
            BackdropProps: { invisible: !0 },
            className: ee(I.root, c),
            container: L,
            open: w,
            ref: t,
            ownerState: T,
          },
          x,
          {
            children: R(
              _,
              k(
                { appear: !0, in: w, onEntering: H, onExited: te, timeout: q },
                g,
                {
                  children: R(
                    _O,
                    k(
                      { elevation: p },
                      b,
                      { ref: N, className: ee(I.paper, b.className) },
                      F ? void 0 : { style: k({}, b.style, { opacity: 0 }) },
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
    PO = IO;
  function AO(e) {
    return ie("MuiMenu", e);
  }
  ae("MuiMenu", ["root", "paper", "list"]);
  const $O = ["onEntering"],
    MO = [
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
    LO = { vertical: "top", horizontal: "right" },
    BO = { vertical: "top", horizontal: "left" },
    zO = (e) => {
      const { classes: t } = e;
      return ce({ root: ["root"], paper: ["paper"], list: ["list"] }, AO, t);
    },
    jO = J(PO, {
      shouldForwardProp: (e) => vn(e) || e === "classes",
      name: "MuiMenu",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    FO = J(Gi, {
      name: "MuiMenu",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    DO = J(EO, {
      name: "MuiMenu",
      slot: "List",
      overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    UO = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiMenu" }),
        {
          autoFocus: r = !0,
          children: o,
          disableAutoFocusItem: i = !1,
          MenuListProps: a = {},
          onClose: s,
          open: l,
          PaperProps: c = {},
          PopoverClasses: f,
          transitionDuration: p = "auto",
          TransitionProps: { onEntering: m } = {},
          variant: w = "selectedMenu",
        } = n,
        b = X(n.TransitionProps, $O),
        S = X(n, MO),
        _ = qi(),
        v = _.direction === "rtl",
        h = k({}, n, {
          autoFocus: r,
          disableAutoFocusItem: i,
          MenuListProps: a,
          onEntering: m,
          PaperProps: c,
          transitionDuration: p,
          TransitionProps: b,
          variant: w,
        }),
        g = zO(h),
        x = r && !i && l,
        C = E.useRef(null),
        N = (B, M) => {
          C.current && C.current.adjustStyleForScrollbar(B, _), m && m(B, M);
        },
        T = (B) => {
          B.key === "Tab" && (B.preventDefault(), s && s(B, "tabKeyDown"));
        };
      let I = -1;
      return (
        E.Children.map(o, (B, M) => {
          E.isValidElement(B) &&
            (B.props.disabled ||
              (((w === "selectedMenu" && B.props.selected) || I === -1) &&
                (I = M)));
        }),
        R(
          jO,
          k(
            {
              onClose: s,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: v ? "right" : "left",
              },
              transformOrigin: v ? LO : BO,
              PaperProps: k({ component: FO }, c, {
                classes: k({}, c.classes, { root: g.paper }),
              }),
              className: g.root,
              open: l,
              ref: t,
              transitionDuration: p,
              TransitionProps: k({ onEntering: N }, b),
              ownerState: h,
            },
            S,
            {
              classes: f,
              children: R(
                DO,
                k(
                  {
                    onKeyDown: T,
                    actions: C,
                    autoFocus: r && (I === -1 || i),
                    autoFocusItem: x,
                    variant: w,
                  },
                  a,
                  { className: ee(g.list, a.className), children: o },
                ),
              ),
            },
          ),
        )
      );
    }),
    WO = UO;
  function VO(e) {
    return ie("MuiNativeSelect", e);
  }
  const HO = ae("MuiNativeSelect", [
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
    ff = HO,
    qO = ["className", "disabled", "IconComponent", "inputRef", "variant"],
    KO = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${G(n)}`, i && "iconOpen", r && "disabled"],
        };
      return ce(a, VO, t);
    },
    py = ({ ownerState: e, theme: t }) =>
      k(
        {
          MozAppearance: "none",
          WebkitAppearance: "none",
          userSelect: "none",
          borderRadius: 0,
          cursor: "pointer",
          "&:focus": k(
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
          [`&.${ff.disabled}`]: { cursor: "default" },
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
    JO = J("select", {
      name: "MuiNativeSelect",
      slot: "Select",
      shouldForwardProp: vn,
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.select, t[n.variant], { [`&.${ff.multiple}`]: t.multiple }];
      },
    })(py),
    hy = ({ ownerState: e, theme: t }) =>
      k(
        {
          position: "absolute",
          right: 0,
          top: "calc(50% - .5em)",
          pointerEvents: "none",
          color: (t.vars || t).palette.action.active,
          [`&.${ff.disabled}`]: {
            color: (t.vars || t).palette.action.disabled,
          },
        },
        e.open && { transform: "rotate(180deg)" },
        e.variant === "filled" && { right: 7 },
        e.variant === "outlined" && { right: 7 },
      ),
    GO = J("svg", {
      name: "MuiNativeSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${G(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })(hy),
    YO = E.forwardRef(function (e, t) {
      const {
          className: n,
          disabled: r,
          IconComponent: o,
          inputRef: i,
          variant: a = "standard",
        } = e,
        s = X(e, qO),
        l = k({}, e, { disabled: r, variant: a }),
        c = KO(l);
      return ue(E.Fragment, {
        children: [
          R(
            JO,
            k(
              {
                ownerState: l,
                className: ee(c.select, n),
                disabled: r,
                ref: i || t,
              },
              s,
            ),
          ),
          e.multiple
            ? null
            : R(GO, { as: o, ownerState: l, className: c.icon }),
        ],
      });
    }),
    QO = YO;
  var my;
  const XO = ["children", "classes", "className", "label", "notched"],
    ZO = J("fieldset")({
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
    e4 = J("legend")(({ ownerState: e, theme: t }) =>
      k(
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
          k(
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
  function t4(e) {
    const { className: t, label: n, notched: r } = e,
      o = X(e, XO),
      i = n != null && n !== "",
      a = k({}, e, { notched: r, withLabel: i });
    return R(
      ZO,
      k({ "aria-hidden": !0, className: t, ownerState: a }, o, {
        children: R(e4, {
          ownerState: a,
          children: i
            ? R("span", { children: n })
            : my ||
              (my = R("span", {
                className: "notranslate",
                children: "\u200B",
              })),
        }),
      }),
    );
  }
  const n4 = [
      "components",
      "fullWidth",
      "inputComponent",
      "label",
      "multiline",
      "notched",
      "slots",
      "type",
    ],
    r4 = (e) => {
      const { classes: t } = e,
        n = ce(
          {
            root: ["root"],
            notchedOutline: ["notchedOutline"],
            input: ["input"],
          },
          E5,
          t,
        );
      return k({}, t, n);
    },
    o4 = J(Ol, {
      shouldForwardProp: (e) => vn(e) || e === "classes",
      name: "MuiOutlinedInput",
      slot: "Root",
      overridesResolver: El,
    })(({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return k(
        {
          position: "relative",
          borderRadius: (e.vars || e).shape.borderRadius,
          [`&:hover .${sr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.text.primary,
          },
          "@media (hover: none)": {
            [`&:hover .${sr.notchedOutline}`]: {
              borderColor: e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : n,
            },
          },
          [`&.${sr.focused} .${sr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette[t.color].main,
            borderWidth: 2,
          },
          [`&.${sr.error} .${sr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.error.main,
          },
          [`&.${sr.disabled} .${sr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.action.disabled,
          },
        },
        t.startAdornment && { paddingLeft: 14 },
        t.endAdornment && { paddingRight: 14 },
        t.multiline &&
          k(
            { padding: "16.5px 14px" },
            t.size === "small" && { padding: "8.5px 14px" },
          ),
      );
    }),
    i4 = J(t4, {
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
    a4 = J(Nl, {
      name: "MuiOutlinedInput",
      slot: "Input",
      overridesResolver: Cl,
    })(({ theme: e, ownerState: t }) =>
      k(
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
    gy = E.forwardRef(function (e, t) {
      var n, r, o, i, a;
      const s = fe({ props: e, name: "MuiOutlinedInput" }),
        {
          components: l = {},
          fullWidth: c = !1,
          inputComponent: f = "input",
          label: p,
          multiline: m = !1,
          notched: w,
          slots: b = {},
          type: S = "text",
        } = s,
        _ = X(s, n4),
        v = r4(s),
        h = ar(),
        g = _o({ props: s, muiFormControl: h, states: ["required"] }),
        x = k({}, s, {
          color: g.color || "primary",
          disabled: g.disabled,
          error: g.error,
          focused: g.focused,
          formControl: h,
          fullWidth: c,
          hiddenLabel: g.hiddenLabel,
          multiline: m,
          size: g.size,
          type: S,
        }),
        C = (n = (r = b.root) != null ? r : l.Root) != null ? n : o4,
        N = (o = (i = b.input) != null ? i : l.Input) != null ? o : a4;
      return R(
        tf,
        k(
          {
            slots: { root: C, input: N },
            renderSuffix: (T) =>
              R(i4, {
                ownerState: x,
                className: v.notchedOutline,
                label:
                  p != null && p !== "" && g.required
                    ? a || (a = ue(E.Fragment, { children: [p, "\xA0", "*"] }))
                    : p,
                notched:
                  typeof w < "u"
                    ? w
                    : !!(T.startAdornment || T.filled || T.focused),
              }),
            fullWidth: c,
            inputComponent: f,
            multiline: m,
            ref: t,
            type: S,
          },
          _,
          { classes: k({}, v, { notchedOutline: null }) },
        ),
      );
    });
  gy.muiName = "Input";
  const yy = gy;
  function s4(e) {
    return ie("MuiSelect", e);
  }
  const l4 = ae("MuiSelect", [
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
    Il = l4;
  var by;
  const u4 = [
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
    c4 = J("div", {
      name: "MuiSelect",
      slot: "Select",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`&.${Il.select}`]: t.select },
          { [`&.${Il.select}`]: t[n.variant] },
          { [`&.${Il.multiple}`]: t.multiple },
        ];
      },
    })(py, {
      [`&.${Il.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }),
    d4 = J("svg", {
      name: "MuiSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${G(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })(hy),
    f4 = J("input", {
      shouldForwardProp: (e) => gk(e) && e !== "classes",
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
  function vy(e, t) {
    return typeof t == "object" && t !== null
      ? e === t
      : String(e) === String(t);
  }
  function p4(e) {
    return e == null || (typeof e == "string" && !e.trim());
  }
  const h4 = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${G(n)}`, i && "iconOpen", r && "disabled"],
          nativeInput: ["nativeInput"],
        };
      return ce(a, s4, t);
    },
    m4 = E.forwardRef(function (e, t) {
      const {
          "aria-describedby": n,
          "aria-label": r,
          autoFocus: o,
          autoWidth: i,
          children: a,
          className: s,
          defaultOpen: l,
          defaultValue: c,
          disabled: f,
          displayEmpty: p,
          IconComponent: m,
          inputRef: w,
          labelId: b,
          MenuProps: S = {},
          multiple: _,
          name: v,
          onBlur: h,
          onChange: g,
          onClose: x,
          onFocus: C,
          onOpen: N,
          open: T,
          readOnly: I,
          renderValue: B,
          SelectDisplayProps: M = {},
          tabIndex: U,
          value: F,
          variant: V = "standard",
        } = e,
        W = X(e, u4),
        [H, te] = Ls({ controlled: F, default: c, name: "Select" }),
        [q, L] = Ls({ controlled: T, default: l, name: "Select" }),
        A = E.useRef(null),
        $ = E.useRef(null),
        [Y, oe] = E.useState(null),
        { current: ne } = E.useRef(T != null),
        [he, ve] = E.useState(),
        Le = it(t, w),
        Fe = E.useCallback((j) => {
          ($.current = j), j && oe(j);
        }, []),
        Pe = Y == null ? void 0 : Y.parentNode;
      E.useImperativeHandle(
        Le,
        () => ({
          focus: () => {
            $.current.focus();
          },
          node: A.current,
          value: H,
        }),
        [H],
      ),
        E.useEffect(() => {
          l &&
            q &&
            Y &&
            !ne &&
            (ve(i ? null : Pe.clientWidth), $.current.focus());
        }, [Y, i]),
        E.useEffect(() => {
          o && $.current.focus();
        }, [o]),
        E.useEffect(() => {
          if (!b) return;
          const j = Et($.current).getElementById(b);
          if (j) {
            const Re = () => {
              getSelection().isCollapsed && $.current.focus();
            };
            return (
              j.addEventListener("click", Re),
              () => {
                j.removeEventListener("click", Re);
              }
            );
          }
        }, [b]);
      const lt = (j, Re) => {
          j ? N && N(Re) : x && x(Re),
            ne || (ve(i ? null : Pe.clientWidth), L(j));
        },
        re = (j) => {
          j.button === 0 && (j.preventDefault(), $.current.focus(), lt(!0, j));
        },
        De = (j) => {
          lt(!1, j);
        },
        Ae = E.Children.toArray(a),
        Tt = (j) => {
          const Re = Ae.map((Rt) => Rt.props.value).indexOf(j.target.value);
          if (Re === -1) return;
          const tt = Ae[Re];
          te(tt.props.value), g && g(j, tt);
        },
        jt = (j) => (Re) => {
          let tt;
          if (Re.currentTarget.hasAttribute("tabindex")) {
            if (_) {
              tt = Array.isArray(H) ? H.slice() : [];
              const Rt = H.indexOf(j.props.value);
              Rt === -1 ? tt.push(j.props.value) : tt.splice(Rt, 1);
            } else tt = j.props.value;
            if (
              (j.props.onClick && j.props.onClick(Re), H !== tt && (te(tt), g))
            ) {
              const Rt = Re.nativeEvent || Re,
                sa = new Rt.constructor(Rt.type, Rt);
              Object.defineProperty(sa, "target", {
                writable: !0,
                value: { value: tt, name: v },
              }),
                g(sa, j);
            }
            _ || lt(!1, Re);
          }
        },
        u = (j) => {
          I ||
            ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(j.key) !== -1 &&
              (j.preventDefault(), lt(!0, j)));
        },
        d = Y !== null && q,
        y = (j) => {
          !d &&
            h &&
            (Object.defineProperty(j, "target", {
              writable: !0,
              value: { value: H, name: v },
            }),
            h(j));
        };
      delete W["aria-invalid"];
      let O, P;
      const z = [];
      let Q = !1;
      (ef({ value: H }) || p) && (B ? (O = B(H)) : (Q = !0));
      const pe = Ae.map((j, Re, tt) => {
        var Rt, sa, iv, av;
        if (!E.isValidElement(j)) return null;
        let ur;
        if (_) {
          if (!Array.isArray(H)) throw new Error(rr(2));
          (ur = H.some((Dr) => vy(Dr, j.props.value))),
            ur && Q && z.push(j.props.children);
        } else (ur = vy(H, j.props.value)), ur && Q && (P = j.props.children);
        if (j.props.value === void 0)
          return E.cloneElement(j, { "aria-readonly": !0, role: "option" });
        const i_ = () => {
          if (H) return ur;
          const Dr = tt.find((Qf) => {
            var sv;
            return (
              (Qf == null || (sv = Qf.props) == null ? void 0 : sv.value) !==
                void 0 && Qf.props.disabled !== !0
            );
          });
          return j === Dr ? !0 : ur;
        };
        return E.cloneElement(j, {
          "aria-selected": ur ? "true" : "false",
          onClick: jt(j),
          onKeyUp: (Dr) => {
            Dr.key === " " && Dr.preventDefault(),
              j.props.onKeyUp && j.props.onKeyUp(Dr);
          },
          role: "option",
          selected:
            ((Rt = tt[0]) == null || (sa = Rt.props) == null
              ? void 0
              : sa.value) === void 0 ||
            ((iv = tt[0]) == null || (av = iv.props) == null
              ? void 0
              : av.disabled) === !0
              ? i_()
              : ur,
          value: void 0,
          "data-value": j.props.value,
        });
      });
      Q &&
        (_
          ? z.length === 0
            ? (O = null)
            : (O = z.reduce(
                (j, Re, tt) => (
                  j.push(Re), tt < z.length - 1 && j.push(", "), j
                ),
                [],
              ))
          : (O = P));
      let Oe = he;
      !i && ne && Y && (Oe = Pe.clientWidth);
      let se;
      typeof U < "u" ? (se = U) : (se = f ? null : 0);
      const Ce = M.id || (v ? `mui-component-select-${v}` : void 0),
        Te = k({}, e, { variant: V, value: H, open: d }),
        ge = h4(Te);
      return ue(E.Fragment, {
        children: [
          R(
            c4,
            k(
              {
                ref: Fe,
                tabIndex: se,
                role: "button",
                "aria-disabled": f ? "true" : void 0,
                "aria-expanded": d ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": r,
                "aria-labelledby": [b, Ce].filter(Boolean).join(" ") || void 0,
                "aria-describedby": n,
                onKeyDown: u,
                onMouseDown: f || I ? null : re,
                onBlur: y,
                onFocus: C,
              },
              M,
              {
                ownerState: Te,
                className: ee(M.className, ge.select, s),
                id: Ce,
                children: p4(O)
                  ? by ||
                    (by = R("span", {
                      className: "notranslate",
                      children: "\u200B",
                    }))
                  : O,
              },
            ),
          ),
          R(
            f4,
            k(
              {
                value: Array.isArray(H) ? H.join(",") : H,
                name: v,
                ref: A,
                "aria-hidden": !0,
                onChange: Tt,
                tabIndex: -1,
                disabled: f,
                className: ge.nativeInput,
                autoFocus: o,
                ownerState: Te,
              },
              W,
            ),
          ),
          R(d4, { as: m, className: ge.icon, ownerState: Te }),
          R(
            WO,
            k(
              {
                id: `menu-${v || ""}`,
                anchorEl: Pe,
                open: d,
                onClose: De,
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformOrigin: { vertical: "top", horizontal: "center" },
              },
              S,
              {
                MenuListProps: k(
                  {
                    "aria-labelledby": b,
                    role: "listbox",
                    disableListWrap: !0,
                  },
                  S.MenuListProps,
                ),
                PaperProps: k({}, S.PaperProps, {
                  style: k(
                    { minWidth: Oe },
                    S.PaperProps != null ? S.PaperProps.style : null,
                  ),
                }),
                children: pe,
              },
            ),
          ),
        ],
      });
    }),
    g4 = m4;
  var wy, xy;
  const y4 = [
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
    b4 = (e) => {
      const { classes: t } = e;
      return t;
    },
    pf = {
      name: "MuiSelect",
      overridesResolver: (e, t) => t.root,
      shouldForwardProp: (e) => vn(e) && e !== "variant",
      slot: "Root",
    },
    v4 = J(J0, pf)(""),
    w4 = J(yy, pf)(""),
    x4 = J(W0, pf)(""),
    Sy = E.forwardRef(function (e, t) {
      const n = fe({ name: "MuiSelect", props: e }),
        {
          autoWidth: r = !1,
          children: o,
          classes: i = {},
          className: a,
          defaultOpen: s = !1,
          displayEmpty: l = !1,
          IconComponent: c = T5,
          id: f,
          input: p,
          inputProps: m,
          label: w,
          labelId: b,
          MenuProps: S,
          multiple: _ = !1,
          native: v = !1,
          onClose: h,
          onOpen: g,
          open: x,
          renderValue: C,
          SelectDisplayProps: N,
          variant: T = "outlined",
        } = n,
        I = X(n, y4),
        B = v ? QO : g4,
        M = ar(),
        U =
          _o({ props: n, muiFormControl: M, states: ["variant"] }).variant || T,
        F =
          p ||
          {
            standard: wy || (wy = R(v4, {})),
            outlined: R(w4, { label: w }),
            filled: xy || (xy = R(x4, {})),
          }[U],
        V = k({}, n, { variant: U, classes: i }),
        W = b4(V),
        H = it(t, F.ref);
      return R(E.Fragment, {
        children: E.cloneElement(
          F,
          k(
            {
              inputComponent: B,
              inputProps: k(
                {
                  children: o,
                  IconComponent: c,
                  variant: U,
                  type: void 0,
                  multiple: _,
                },
                v
                  ? { id: f }
                  : {
                      autoWidth: r,
                      defaultOpen: s,
                      displayEmpty: l,
                      labelId: b,
                      MenuProps: S,
                      onClose: h,
                      onOpen: g,
                      open: x,
                      renderValue: C,
                      SelectDisplayProps: k({ id: f }, N),
                    },
                m,
                { classes: m ? qt(W, m.classes) : W },
                p ? p.props.inputProps : {},
              ),
            },
            _ && v && U === "outlined" ? { notched: !0 } : {},
            { ref: H, className: ee(F.props.className, a) },
            !p && { variant: U },
            I,
          ),
        ),
      });
    });
  Sy.muiName = "Select";
  const S4 = Sy;
  function k4(e) {
    return ie("MuiToolbar", e);
  }
  ae("MuiToolbar", ["root", "gutters", "regular", "dense"]);
  const E4 = ["className", "component", "disableGutters", "variant"],
    C4 = (e) => {
      const { classes: t, disableGutters: n, variant: r } = e;
      return ce({ root: ["root", !n && "gutters", r] }, k4, t);
    },
    O4 = J("div", {
      name: "MuiToolbar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
      },
    })(
      ({ theme: e, ownerState: t }) =>
        k(
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
    N4 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiToolbar" }),
        {
          className: r,
          component: o = "div",
          disableGutters: i = !1,
          variant: a = "regular",
        } = n,
        s = X(n, E4),
        l = k({}, n, { component: o, disableGutters: i, variant: a }),
        c = C4(l);
      return R(
        O4,
        k({ as: o, className: ee(c.root, r), ref: t, ownerState: l }, s),
      );
    }),
    T4 = N4;
  function R4(e) {
    return ie("MuiTextField", e);
  }
  ae("MuiTextField", ["root"]);
  const _4 = [
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
    I4 = { standard: J0, filled: W0, outlined: yy },
    P4 = (e) => {
      const { classes: t } = e;
      return ce({ root: ["root"] }, R4, t);
    },
    A4 = J(BC, {
      name: "MuiTextField",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    $4 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiTextField" }),
        {
          autoComplete: r,
          autoFocus: o = !1,
          children: i,
          className: a,
          color: s = "primary",
          defaultValue: l,
          disabled: c = !1,
          error: f = !1,
          FormHelperTextProps: p,
          fullWidth: m = !1,
          helperText: w,
          id: b,
          InputLabelProps: S,
          inputProps: _,
          InputProps: v,
          inputRef: h,
          label: g,
          maxRows: x,
          minRows: C,
          multiline: N = !1,
          name: T,
          onBlur: I,
          onChange: B,
          onFocus: M,
          placeholder: U,
          required: F = !1,
          rows: V,
          select: W = !1,
          SelectProps: H,
          type: te,
          value: q,
          variant: L = "outlined",
        } = n,
        A = X(n, _4),
        $ = k({}, n, {
          autoFocus: o,
          color: s,
          disabled: c,
          error: f,
          fullWidth: m,
          multiline: N,
          required: F,
          select: W,
          variant: L,
        }),
        Y = P4($),
        oe = {};
      L === "outlined" &&
        (S && typeof S.shrink < "u" && (oe.notched = S.shrink), (oe.label = g)),
        W &&
          ((!H || !H.native) && (oe.id = void 0),
          (oe["aria-describedby"] = void 0));
      const ne = Eg(b),
        he = w && ne ? `${ne}-helper-text` : void 0,
        ve = g && ne ? `${ne}-label` : void 0,
        Le = I4[L],
        Fe = R(
          Le,
          k(
            {
              "aria-describedby": he,
              autoComplete: r,
              autoFocus: o,
              defaultValue: l,
              fullWidth: m,
              multiline: N,
              name: T,
              rows: V,
              maxRows: x,
              minRows: C,
              type: te,
              value: q,
              id: ne,
              inputRef: h,
              onBlur: I,
              onChange: B,
              onFocus: M,
              placeholder: U,
              inputProps: _,
            },
            oe,
            v,
          ),
        );
      return ue(
        A4,
        k(
          {
            className: ee(Y.root, a),
            disabled: c,
            error: f,
            fullWidth: m,
            ref: t,
            required: F,
            color: s,
            variant: L,
            ownerState: $,
          },
          A,
          {
            children: [
              g != null &&
                g !== "" &&
                R(v3, k({ htmlFor: ne, id: ve }, S, { children: g })),
              W
                ? R(
                    S4,
                    k(
                      {
                        "aria-describedby": he,
                        id: ne,
                        labelId: ve,
                        value: q,
                        input: Fe,
                      },
                      H,
                      { children: i },
                    ),
                  )
                : Fe,
              w && R(VC, k({ id: he }, p, { children: w })),
            ],
          },
        ),
      );
    }),
    Pl = $4;
  function M4(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
  }
  for (
    var L4 = D4,
      B4 = W4,
      z4 = q4,
      xn = [],
      Yt = [],
      j4 = typeof Uint8Array < "u" ? Uint8Array : Array,
      hf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      $o = 0,
      F4 = hf.length;
    $o < F4;
    ++$o
  )
    (xn[$o] = hf[$o]), (Yt[hf.charCodeAt($o)] = $o);
  (Yt["-".charCodeAt(0)] = 62), (Yt["_".charCodeAt(0)] = 63);
  function ky(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    n === -1 && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
  }
  function D4(e) {
    var t = ky(e),
      n = t[0],
      r = t[1];
    return ((n + r) * 3) / 4 - r;
  }
  function U4(e, t, n) {
    return ((t + n) * 3) / 4 - n;
  }
  function W4(e) {
    var t,
      n = ky(e),
      r = n[0],
      o = n[1],
      i = new j4(U4(e, r, o)),
      a = 0,
      s = o > 0 ? r - 4 : r,
      l;
    for (l = 0; l < s; l += 4)
      (t =
        (Yt[e.charCodeAt(l)] << 18) |
        (Yt[e.charCodeAt(l + 1)] << 12) |
        (Yt[e.charCodeAt(l + 2)] << 6) |
        Yt[e.charCodeAt(l + 3)]),
        (i[a++] = (t >> 16) & 255),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255);
    return (
      o === 2 &&
        ((t = (Yt[e.charCodeAt(l)] << 2) | (Yt[e.charCodeAt(l + 1)] >> 4)),
        (i[a++] = t & 255)),
      o === 1 &&
        ((t =
          (Yt[e.charCodeAt(l)] << 10) |
          (Yt[e.charCodeAt(l + 1)] << 4) |
          (Yt[e.charCodeAt(l + 2)] >> 2)),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255)),
      i
    );
  }
  function V4(e) {
    return (
      xn[(e >> 18) & 63] + xn[(e >> 12) & 63] + xn[(e >> 6) & 63] + xn[e & 63]
    );
  }
  function H4(e, t, n) {
    for (var r, o = [], i = t; i < n; i += 3)
      (r =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        o.push(V4(r));
    return o.join("");
  }
  function q4(e) {
    for (
      var t, n = e.length, r = n % 3, o = [], i = 16383, a = 0, s = n - r;
      a < s;
      a += i
    )
      o.push(H4(e, a, a + i > s ? s : a + i));
    return (
      r === 1
        ? ((t = e[n - 1]), o.push(xn[t >> 2] + xn[(t << 4) & 63] + "=="))
        : r === 2 &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          o.push(xn[t >> 10] + xn[(t >> 4) & 63] + xn[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
  var mf = { byteLength: L4, toByteArray: B4, fromByteArray: z4 },
    K4 = function (e, t, n, r, o) {
      var i,
        a,
        s = o * 8 - r - 1,
        l = (1 << s) - 1,
        c = l >> 1,
        f = -7,
        p = n ? o - 1 : 0,
        m = n ? -1 : 1,
        w = e[t + p];
      for (
        p += m, i = w & ((1 << -f) - 1), w >>= -f, f += s;
        f > 0;
        i = i * 256 + e[t + p], p += m, f -= 8
      );
      for (
        a = i & ((1 << -f) - 1), i >>= -f, f += r;
        f > 0;
        a = a * 256 + e[t + p], p += m, f -= 8
      );
      if (i === 0) i = 1 - c;
      else {
        if (i === l) return a ? NaN : (w ? -1 : 1) * (1 / 0);
        (a = a + Math.pow(2, r)), (i = i - c);
      }
      return (w ? -1 : 1) * a * Math.pow(2, i - r);
    },
    J4 = function (e, t, n, r, o, i) {
      var a,
        s,
        l,
        c = i * 8 - o - 1,
        f = (1 << c) - 1,
        p = f >> 1,
        m = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        w = r ? 0 : i - 1,
        b = r ? 1 : -1,
        S = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
      for (
        t = Math.abs(t),
          isNaN(t) || t === 1 / 0
            ? ((s = isNaN(t) ? 1 : 0), (a = f))
            : ((a = Math.floor(Math.log(t) / Math.LN2)),
              t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
              a + p >= 1 ? (t += m / l) : (t += m * Math.pow(2, 1 - p)),
              t * l >= 2 && (a++, (l /= 2)),
              a + p >= f
                ? ((s = 0), (a = f))
                : a + p >= 1
                ? ((s = (t * l - 1) * Math.pow(2, o)), (a = a + p))
                : ((s = t * Math.pow(2, p - 1) * Math.pow(2, o)), (a = 0)));
        o >= 8;
        e[n + w] = s & 255, w += b, s /= 256, o -= 8
      );
      for (
        a = (a << o) | s, c += o;
        c > 0;
        e[n + w] = a & 255, w += b, a /= 256, c -= 8
      );
      e[n + w - b] |= S * 128;
    },
    Mo = { read: K4, write: J4 },
    Al = M4(function (e, t) {
      var n =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
      (t.Buffer = a), (t.SlowBuffer = v), (t.INSPECT_MAX_BYTES = 50);
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
          var u = new Uint8Array(1),
            d = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(d, Uint8Array.prototype),
            Object.setPrototypeOf(u, d),
            u.foo() === 42
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
      function i(u) {
        if (u > r)
          throw new RangeError(
            'The value "' + u + '" is invalid for option "size"',
          );
        var d = new Uint8Array(u);
        return Object.setPrototypeOf(d, a.prototype), d;
      }
      function a(u, d, y) {
        if (typeof u == "number") {
          if (typeof d == "string")
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return f(u);
        }
        return s(u, d, y);
      }
      a.poolSize = 8192;
      function s(u, d, y) {
        if (typeof u == "string") return p(u, d);
        if (ArrayBuffer.isView(u)) return w(u);
        if (u == null)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              babelHelpers.typeof(u),
          );
        if (
          Ae(u, ArrayBuffer) ||
          (u && Ae(u.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (Ae(u, SharedArrayBuffer) ||
              (u && Ae(u.buffer, SharedArrayBuffer))))
        )
          return b(u, d, y);
        if (typeof u == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        var O = u.valueOf && u.valueOf();
        if (O != null && O !== u) return a.from(O, d, y);
        var P = S(u);
        if (P) return P;
        if (
          typeof Symbol < "u" &&
          Symbol.toPrimitive != null &&
          typeof u[Symbol.toPrimitive] == "function"
        )
          return a.from(u[Symbol.toPrimitive]("string"), d, y);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            babelHelpers.typeof(u),
        );
      }
      (a.from = function (u, d, y) {
        return s(u, d, y);
      }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array);
      function l(u) {
        if (typeof u != "number")
          throw new TypeError('"size" argument must be of type number');
        if (u < 0)
          throw new RangeError(
            'The value "' + u + '" is invalid for option "size"',
          );
      }
      function c(u, d, y) {
        return (
          l(u),
          u <= 0
            ? i(u)
            : d !== void 0
            ? typeof y == "string"
              ? i(u).fill(d, y)
              : i(u).fill(d)
            : i(u)
        );
      }
      a.alloc = function (u, d, y) {
        return c(u, d, y);
      };
      function f(u) {
        return l(u), i(u < 0 ? 0 : _(u) | 0);
      }
      (a.allocUnsafe = function (u) {
        return f(u);
      }),
        (a.allocUnsafeSlow = function (u) {
          return f(u);
        });
      function p(u, d) {
        if (
          ((typeof d != "string" || d === "") && (d = "utf8"), !a.isEncoding(d))
        )
          throw new TypeError("Unknown encoding: " + d);
        var y = h(u, d) | 0,
          O = i(y),
          P = O.write(u, d);
        return P !== y && (O = O.slice(0, P)), O;
      }
      function m(u) {
        for (
          var d = u.length < 0 ? 0 : _(u.length) | 0, y = i(d), O = 0;
          O < d;
          O += 1
        )
          y[O] = u[O] & 255;
        return y;
      }
      function w(u) {
        if (Ae(u, Uint8Array)) {
          var d = new Uint8Array(u);
          return b(d.buffer, d.byteOffset, d.byteLength);
        }
        return m(u);
      }
      function b(u, d, y) {
        if (d < 0 || u.byteLength < d)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (u.byteLength < d + (y || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var O;
        return (
          d === void 0 && y === void 0
            ? (O = new Uint8Array(u))
            : y === void 0
            ? (O = new Uint8Array(u, d))
            : (O = new Uint8Array(u, d, y)),
          Object.setPrototypeOf(O, a.prototype),
          O
        );
      }
      function S(u) {
        if (a.isBuffer(u)) {
          var d = _(u.length) | 0,
            y = i(d);
          return y.length === 0 || u.copy(y, 0, 0, d), y;
        }
        if (u.length !== void 0)
          return typeof u.length != "number" || Tt(u.length) ? i(0) : m(u);
        if (u.type === "Buffer" && Array.isArray(u.data)) return m(u.data);
      }
      function _(u) {
        if (u >= r)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r.toString(16) +
              " bytes",
          );
        return u | 0;
      }
      function v(u) {
        return +u != u && (u = 0), a.alloc(+u);
      }
      (a.isBuffer = function (u) {
        return u != null && u._isBuffer === !0 && u !== a.prototype;
      }),
        (a.compare = function (u, d) {
          if (
            (Ae(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)),
            Ae(d, Uint8Array) && (d = a.from(d, d.offset, d.byteLength)),
            !a.isBuffer(u) || !a.isBuffer(d))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (u === d) return 0;
          for (
            var y = u.length, O = d.length, P = 0, z = Math.min(y, O);
            P < z;
            ++P
          )
            if (u[P] !== d[P]) {
              (y = u[P]), (O = d[P]);
              break;
            }
          return y < O ? -1 : O < y ? 1 : 0;
        }),
        (a.isEncoding = function (u) {
          switch (String(u).toLowerCase()) {
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
        (a.concat = function (u, d) {
          if (!Array.isArray(u))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (u.length === 0) return a.alloc(0);
          var y;
          if (d === void 0)
            for (d = 0, y = 0; y < u.length; ++y) d += u[y].length;
          var O = a.allocUnsafe(d),
            P = 0;
          for (y = 0; y < u.length; ++y) {
            var z = u[y];
            if (Ae(z, Uint8Array))
              P + z.length > O.length
                ? a.from(z).copy(O, P)
                : Uint8Array.prototype.set.call(O, z, P);
            else if (a.isBuffer(z)) z.copy(O, P);
            else
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            P += z.length;
          }
          return O;
        });
      function h(u, d) {
        if (a.isBuffer(u)) return u.length;
        if (ArrayBuffer.isView(u) || Ae(u, ArrayBuffer)) return u.byteLength;
        if (typeof u != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              babelHelpers.typeof(u),
          );
        var y = u.length,
          O = arguments.length > 2 && arguments[2] === !0;
        if (!O && y === 0) return 0;
        for (var P = !1; ; )
          switch (d) {
            case "ascii":
            case "latin1":
            case "binary":
              return y;
            case "utf8":
            case "utf-8":
              return Fe(u).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return y * 2;
            case "hex":
              return y >>> 1;
            case "base64":
              return re(u).length;
            default:
              if (P) return O ? -1 : Fe(u).length;
              (d = ("" + d).toLowerCase()), (P = !0);
          }
      }
      a.byteLength = h;
      function g(u, d, y) {
        var O = !1;
        if (
          ((d === void 0 || d < 0) && (d = 0),
          d > this.length ||
            ((y === void 0 || y > this.length) && (y = this.length), y <= 0) ||
            ((y >>>= 0), (d >>>= 0), y <= d))
        )
          return "";
        for (u || (u = "utf8"); ; )
          switch (u) {
            case "hex":
              return L(this, d, y);
            case "utf8":
            case "utf-8":
              return V(this, d, y);
            case "ascii":
              return te(this, d, y);
            case "latin1":
            case "binary":
              return q(this, d, y);
            case "base64":
              return F(this, d, y);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return A(this, d, y);
            default:
              if (O) throw new TypeError("Unknown encoding: " + u);
              (u = (u + "").toLowerCase()), (O = !0);
          }
      }
      a.prototype._isBuffer = !0;
      function x(u, d, y) {
        var O = u[d];
        (u[d] = u[y]), (u[y] = O);
      }
      (a.prototype.swap16 = function () {
        var u = this.length;
        if (u % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var d = 0; d < u; d += 2) x(this, d, d + 1);
        return this;
      }),
        (a.prototype.swap32 = function () {
          var u = this.length;
          if (u % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var d = 0; d < u; d += 4)
            x(this, d, d + 3), x(this, d + 1, d + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var u = this.length;
          if (u % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var d = 0; d < u; d += 8)
            x(this, d, d + 7),
              x(this, d + 1, d + 6),
              x(this, d + 2, d + 5),
              x(this, d + 3, d + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          var u = this.length;
          return u === 0
            ? ""
            : arguments.length === 0
            ? V(this, 0, u)
            : g.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (u) {
          if (!a.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
          return this === u ? !0 : a.compare(this, u) === 0;
        }),
        (a.prototype.inspect = function () {
          var u = "",
            d = t.INSPECT_MAX_BYTES;
          return (
            (u = this.toString("hex", 0, d)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > d && (u += " ... "),
            "<Buffer " + u + ">"
          );
        }),
        n && (a.prototype[n] = a.prototype.inspect),
        (a.prototype.compare = function (u, d, y, O, P) {
          if (
            (Ae(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)),
            !a.isBuffer(u))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                babelHelpers.typeof(u),
            );
          if (
            (d === void 0 && (d = 0),
            y === void 0 && (y = u ? u.length : 0),
            O === void 0 && (O = 0),
            P === void 0 && (P = this.length),
            d < 0 || y > u.length || O < 0 || P > this.length)
          )
            throw new RangeError("out of range index");
          if (O >= P && d >= y) return 0;
          if (O >= P) return -1;
          if (d >= y) return 1;
          if (((d >>>= 0), (y >>>= 0), (O >>>= 0), (P >>>= 0), this === u))
            return 0;
          for (
            var z = P - O,
              Q = y - d,
              pe = Math.min(z, Q),
              Oe = this.slice(O, P),
              se = u.slice(d, y),
              Ce = 0;
            Ce < pe;
            ++Ce
          )
            if (Oe[Ce] !== se[Ce]) {
              (z = Oe[Ce]), (Q = se[Ce]);
              break;
            }
          return z < Q ? -1 : Q < z ? 1 : 0;
        });
      function C(u, d, y, O, P) {
        if (u.length === 0) return -1;
        if (
          (typeof y == "string"
            ? ((O = y), (y = 0))
            : y > 2147483647
            ? (y = 2147483647)
            : y < -2147483648 && (y = -2147483648),
          (y = +y),
          Tt(y) && (y = P ? 0 : u.length - 1),
          y < 0 && (y = u.length + y),
          y >= u.length)
        ) {
          if (P) return -1;
          y = u.length - 1;
        } else if (y < 0)
          if (P) y = 0;
          else return -1;
        if ((typeof d == "string" && (d = a.from(d, O)), a.isBuffer(d)))
          return d.length === 0 ? -1 : N(u, d, y, O, P);
        if (typeof d == "number")
          return (
            (d = d & 255),
            typeof Uint8Array.prototype.indexOf == "function"
              ? P
                ? Uint8Array.prototype.indexOf.call(u, d, y)
                : Uint8Array.prototype.lastIndexOf.call(u, d, y)
              : N(u, [d], y, O, P)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function N(u, d, y, O, P) {
        var z = 1,
          Q = u.length,
          pe = d.length;
        if (
          O !== void 0 &&
          ((O = String(O).toLowerCase()),
          O === "ucs2" || O === "ucs-2" || O === "utf16le" || O === "utf-16le")
        ) {
          if (u.length < 2 || d.length < 2) return -1;
          (z = 2), (Q /= 2), (pe /= 2), (y /= 2);
        }
        function Oe(j, Re) {
          return z === 1 ? j[Re] : j.readUInt16BE(Re * z);
        }
        var se;
        if (P) {
          var Ce = -1;
          for (se = y; se < Q; se++)
            if (Oe(u, se) === Oe(d, Ce === -1 ? 0 : se - Ce)) {
              if ((Ce === -1 && (Ce = se), se - Ce + 1 === pe)) return Ce * z;
            } else Ce !== -1 && (se -= se - Ce), (Ce = -1);
        } else
          for (y + pe > Q && (y = Q - pe), se = y; se >= 0; se--) {
            for (var Te = !0, ge = 0; ge < pe; ge++)
              if (Oe(u, se + ge) !== Oe(d, ge)) {
                Te = !1;
                break;
              }
            if (Te) return se;
          }
        return -1;
      }
      (a.prototype.includes = function (u, d, y) {
        return this.indexOf(u, d, y) !== -1;
      }),
        (a.prototype.indexOf = function (u, d, y) {
          return C(this, u, d, y, !0);
        }),
        (a.prototype.lastIndexOf = function (u, d, y) {
          return C(this, u, d, y, !1);
        });
      function T(u, d, y, O) {
        y = Number(y) || 0;
        var P = u.length - y;
        O ? ((O = Number(O)), O > P && (O = P)) : (O = P);
        var z = d.length;
        O > z / 2 && (O = z / 2);
        for (var Q = 0; Q < O; ++Q) {
          var pe = parseInt(d.substr(Q * 2, 2), 16);
          if (Tt(pe)) return Q;
          u[y + Q] = pe;
        }
        return Q;
      }
      function I(u, d, y, O) {
        return De(Fe(d, u.length - y), u, y, O);
      }
      function B(u, d, y, O) {
        return De(Pe(d), u, y, O);
      }
      function M(u, d, y, O) {
        return De(re(d), u, y, O);
      }
      function U(u, d, y, O) {
        return De(lt(d, u.length - y), u, y, O);
      }
      (a.prototype.write = function (u, d, y, O) {
        if (d === void 0) (O = "utf8"), (y = this.length), (d = 0);
        else if (y === void 0 && typeof d == "string")
          (O = d), (y = this.length), (d = 0);
        else if (isFinite(d))
          (d = d >>> 0),
            isFinite(y)
              ? ((y = y >>> 0), O === void 0 && (O = "utf8"))
              : ((O = y), (y = void 0));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported",
          );
        var P = this.length - d;
        if (
          ((y === void 0 || y > P) && (y = P),
          (u.length > 0 && (y < 0 || d < 0)) || d > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        O || (O = "utf8");
        for (var z = !1; ; )
          switch (O) {
            case "hex":
              return T(this, u, d, y);
            case "utf8":
            case "utf-8":
              return I(this, u, d, y);
            case "ascii":
            case "latin1":
            case "binary":
              return B(this, u, d, y);
            case "base64":
              return M(this, u, d, y);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return U(this, u, d, y);
            default:
              if (z) throw new TypeError("Unknown encoding: " + O);
              (O = ("" + O).toLowerCase()), (z = !0);
          }
      }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function F(u, d, y) {
        return d === 0 && y === u.length
          ? mf.fromByteArray(u)
          : mf.fromByteArray(u.slice(d, y));
      }
      function V(u, d, y) {
        y = Math.min(u.length, y);
        for (var O = [], P = d; P < y; ) {
          var z = u[P],
            Q = null,
            pe = z > 239 ? 4 : z > 223 ? 3 : z > 191 ? 2 : 1;
          if (P + pe <= y) {
            var Oe, se, Ce, Te;
            switch (pe) {
              case 1:
                z < 128 && (Q = z);
                break;
              case 2:
                (Oe = u[P + 1]),
                  (Oe & 192) === 128 &&
                    ((Te = ((z & 31) << 6) | (Oe & 63)), Te > 127 && (Q = Te));
                break;
              case 3:
                (Oe = u[P + 1]),
                  (se = u[P + 2]),
                  (Oe & 192) === 128 &&
                    (se & 192) === 128 &&
                    ((Te = ((z & 15) << 12) | ((Oe & 63) << 6) | (se & 63)),
                    Te > 2047 && (Te < 55296 || Te > 57343) && (Q = Te));
                break;
              case 4:
                (Oe = u[P + 1]),
                  (se = u[P + 2]),
                  (Ce = u[P + 3]),
                  (Oe & 192) === 128 &&
                    (se & 192) === 128 &&
                    (Ce & 192) === 128 &&
                    ((Te =
                      ((z & 15) << 18) |
                      ((Oe & 63) << 12) |
                      ((se & 63) << 6) |
                      (Ce & 63)),
                    Te > 65535 && Te < 1114112 && (Q = Te));
            }
          }
          Q === null
            ? ((Q = 65533), (pe = 1))
            : Q > 65535 &&
              ((Q -= 65536),
              O.push(((Q >>> 10) & 1023) | 55296),
              (Q = 56320 | (Q & 1023))),
            O.push(Q),
            (P += pe);
        }
        return H(O);
      }
      var W = 4096;
      function H(u) {
        var d = u.length;
        if (d <= W) return String.fromCharCode.apply(String, u);
        for (var y = "", O = 0; O < d; )
          y += String.fromCharCode.apply(String, u.slice(O, (O += W)));
        return y;
      }
      function te(u, d, y) {
        var O = "";
        y = Math.min(u.length, y);
        for (var P = d; P < y; ++P) O += String.fromCharCode(u[P] & 127);
        return O;
      }
      function q(u, d, y) {
        var O = "";
        y = Math.min(u.length, y);
        for (var P = d; P < y; ++P) O += String.fromCharCode(u[P]);
        return O;
      }
      function L(u, d, y) {
        var O = u.length;
        (!d || d < 0) && (d = 0), (!y || y < 0 || y > O) && (y = O);
        for (var P = "", z = d; z < y; ++z) P += jt[u[z]];
        return P;
      }
      function A(u, d, y) {
        for (var O = u.slice(d, y), P = "", z = 0; z < O.length - 1; z += 2)
          P += String.fromCharCode(O[z] + O[z + 1] * 256);
        return P;
      }
      a.prototype.slice = function (u, d) {
        var y = this.length;
        (u = ~~u),
          (d = d === void 0 ? y : ~~d),
          u < 0 ? ((u += y), u < 0 && (u = 0)) : u > y && (u = y),
          d < 0 ? ((d += y), d < 0 && (d = 0)) : d > y && (d = y),
          d < u && (d = u);
        var O = this.subarray(u, d);
        return Object.setPrototypeOf(O, a.prototype), O;
      };
      function $(u, d, y) {
        if (u % 1 !== 0 || u < 0) throw new RangeError("offset is not uint");
        if (u + d > y)
          throw new RangeError("Trying to access beyond buffer length");
      }
      (a.prototype.readUintLE = a.prototype.readUIntLE =
        function (u, d, y) {
          (u = u >>> 0), (d = d >>> 0), y || $(u, d, this.length);
          for (var O = this[u], P = 1, z = 0; ++z < d && (P *= 256); )
            O += this[u + z] * P;
          return O;
        }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (u, d, y) {
            (u = u >>> 0), (d = d >>> 0), y || $(u, d, this.length);
            for (var O = this[u + --d], P = 1; d > 0 && (P *= 256); )
              O += this[u + --d] * P;
            return O;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (u, d) {
            return (u = u >>> 0), d || $(u, 1, this.length), this[u];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (u, d) {
            return (
              (u = u >>> 0),
              d || $(u, 2, this.length),
              this[u] | (this[u + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (u, d) {
            return (
              (u = u >>> 0),
              d || $(u, 2, this.length),
              (this[u] << 8) | this[u + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (u, d) {
            return (
              (u = u >>> 0),
              d || $(u, 4, this.length),
              (this[u] | (this[u + 1] << 8) | (this[u + 2] << 16)) +
                this[u + 3] * 16777216
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (u, d) {
            return (
              (u = u >>> 0),
              d || $(u, 4, this.length),
              this[u] * 16777216 +
                ((this[u + 1] << 16) | (this[u + 2] << 8) | this[u + 3])
            );
          }),
        (a.prototype.readIntLE = function (u, d, y) {
          (u = u >>> 0), (d = d >>> 0), y || $(u, d, this.length);
          for (var O = this[u], P = 1, z = 0; ++z < d && (P *= 256); )
            O += this[u + z] * P;
          return (P *= 128), O >= P && (O -= Math.pow(2, 8 * d)), O;
        }),
        (a.prototype.readIntBE = function (u, d, y) {
          (u = u >>> 0), (d = d >>> 0), y || $(u, d, this.length);
          for (var O = d, P = 1, z = this[u + --O]; O > 0 && (P *= 256); )
            z += this[u + --O] * P;
          return (P *= 128), z >= P && (z -= Math.pow(2, 8 * d)), z;
        }),
        (a.prototype.readInt8 = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 1, this.length),
            this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]
          );
        }),
        (a.prototype.readInt16LE = function (u, d) {
          (u = u >>> 0), d || $(u, 2, this.length);
          var y = this[u] | (this[u + 1] << 8);
          return y & 32768 ? y | 4294901760 : y;
        }),
        (a.prototype.readInt16BE = function (u, d) {
          (u = u >>> 0), d || $(u, 2, this.length);
          var y = this[u + 1] | (this[u] << 8);
          return y & 32768 ? y | 4294901760 : y;
        }),
        (a.prototype.readInt32LE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 4, this.length),
            this[u] |
              (this[u + 1] << 8) |
              (this[u + 2] << 16) |
              (this[u + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 4, this.length),
            (this[u] << 24) |
              (this[u + 1] << 16) |
              (this[u + 2] << 8) |
              this[u + 3]
          );
        }),
        (a.prototype.readFloatLE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 4, this.length),
            Mo.read(this, u, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 4, this.length),
            Mo.read(this, u, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 8, this.length),
            Mo.read(this, u, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 8, this.length),
            Mo.read(this, u, !1, 52, 8)
          );
        });
      function Y(u, d, y, O, P, z) {
        if (!a.isBuffer(u))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (d > P || d < z)
          throw new RangeError('"value" argument is out of bounds');
        if (y + O > u.length) throw new RangeError("Index out of range");
      }
      (a.prototype.writeUintLE = a.prototype.writeUIntLE =
        function (u, d, y, O) {
          if (((u = +u), (d = d >>> 0), (y = y >>> 0), !O)) {
            var P = Math.pow(2, 8 * y) - 1;
            Y(this, u, d, y, P, 0);
          }
          var z = 1,
            Q = 0;
          for (this[d] = u & 255; ++Q < y && (z *= 256); )
            this[d + Q] = (u / z) & 255;
          return d + y;
        }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (u, d, y, O) {
            if (((u = +u), (d = d >>> 0), (y = y >>> 0), !O)) {
              var P = Math.pow(2, 8 * y) - 1;
              Y(this, u, d, y, P, 0);
            }
            var z = y - 1,
              Q = 1;
            for (this[d + z] = u & 255; --z >= 0 && (Q *= 256); )
              this[d + z] = (u / Q) & 255;
            return d + y;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (u, d, y) {
            return (
              (u = +u),
              (d = d >>> 0),
              y || Y(this, u, d, 1, 255, 0),
              (this[d] = u & 255),
              d + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (u, d, y) {
            return (
              (u = +u),
              (d = d >>> 0),
              y || Y(this, u, d, 2, 65535, 0),
              (this[d] = u & 255),
              (this[d + 1] = u >>> 8),
              d + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (u, d, y) {
            return (
              (u = +u),
              (d = d >>> 0),
              y || Y(this, u, d, 2, 65535, 0),
              (this[d] = u >>> 8),
              (this[d + 1] = u & 255),
              d + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (u, d, y) {
            return (
              (u = +u),
              (d = d >>> 0),
              y || Y(this, u, d, 4, 4294967295, 0),
              (this[d + 3] = u >>> 24),
              (this[d + 2] = u >>> 16),
              (this[d + 1] = u >>> 8),
              (this[d] = u & 255),
              d + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (u, d, y) {
            return (
              (u = +u),
              (d = d >>> 0),
              y || Y(this, u, d, 4, 4294967295, 0),
              (this[d] = u >>> 24),
              (this[d + 1] = u >>> 16),
              (this[d + 2] = u >>> 8),
              (this[d + 3] = u & 255),
              d + 4
            );
          }),
        (a.prototype.writeIntLE = function (u, d, y, O) {
          if (((u = +u), (d = d >>> 0), !O)) {
            var P = Math.pow(2, 8 * y - 1);
            Y(this, u, d, y, P - 1, -P);
          }
          var z = 0,
            Q = 1,
            pe = 0;
          for (this[d] = u & 255; ++z < y && (Q *= 256); )
            u < 0 && pe === 0 && this[d + z - 1] !== 0 && (pe = 1),
              (this[d + z] = (((u / Q) >> 0) - pe) & 255);
          return d + y;
        }),
        (a.prototype.writeIntBE = function (u, d, y, O) {
          if (((u = +u), (d = d >>> 0), !O)) {
            var P = Math.pow(2, 8 * y - 1);
            Y(this, u, d, y, P - 1, -P);
          }
          var z = y - 1,
            Q = 1,
            pe = 0;
          for (this[d + z] = u & 255; --z >= 0 && (Q *= 256); )
            u < 0 && pe === 0 && this[d + z + 1] !== 0 && (pe = 1),
              (this[d + z] = (((u / Q) >> 0) - pe) & 255);
          return d + y;
        }),
        (a.prototype.writeInt8 = function (u, d, y) {
          return (
            (u = +u),
            (d = d >>> 0),
            y || Y(this, u, d, 1, 127, -128),
            u < 0 && (u = 255 + u + 1),
            (this[d] = u & 255),
            d + 1
          );
        }),
        (a.prototype.writeInt16LE = function (u, d, y) {
          return (
            (u = +u),
            (d = d >>> 0),
            y || Y(this, u, d, 2, 32767, -32768),
            (this[d] = u & 255),
            (this[d + 1] = u >>> 8),
            d + 2
          );
        }),
        (a.prototype.writeInt16BE = function (u, d, y) {
          return (
            (u = +u),
            (d = d >>> 0),
            y || Y(this, u, d, 2, 32767, -32768),
            (this[d] = u >>> 8),
            (this[d + 1] = u & 255),
            d + 2
          );
        }),
        (a.prototype.writeInt32LE = function (u, d, y) {
          return (
            (u = +u),
            (d = d >>> 0),
            y || Y(this, u, d, 4, 2147483647, -2147483648),
            (this[d] = u & 255),
            (this[d + 1] = u >>> 8),
            (this[d + 2] = u >>> 16),
            (this[d + 3] = u >>> 24),
            d + 4
          );
        }),
        (a.prototype.writeInt32BE = function (u, d, y) {
          return (
            (u = +u),
            (d = d >>> 0),
            y || Y(this, u, d, 4, 2147483647, -2147483648),
            u < 0 && (u = 4294967295 + u + 1),
            (this[d] = u >>> 24),
            (this[d + 1] = u >>> 16),
            (this[d + 2] = u >>> 8),
            (this[d + 3] = u & 255),
            d + 4
          );
        });
      function oe(u, d, y, O, P, z) {
        if (y + O > u.length) throw new RangeError("Index out of range");
        if (y < 0) throw new RangeError("Index out of range");
      }
      function ne(u, d, y, O, P) {
        return (
          (d = +d),
          (y = y >>> 0),
          P || oe(u, d, y, 4),
          Mo.write(u, d, y, O, 23, 4),
          y + 4
        );
      }
      (a.prototype.writeFloatLE = function (u, d, y) {
        return ne(this, u, d, !0, y);
      }),
        (a.prototype.writeFloatBE = function (u, d, y) {
          return ne(this, u, d, !1, y);
        });
      function he(u, d, y, O, P) {
        return (
          (d = +d),
          (y = y >>> 0),
          P || oe(u, d, y, 8),
          Mo.write(u, d, y, O, 52, 8),
          y + 8
        );
      }
      (a.prototype.writeDoubleLE = function (u, d, y) {
        return he(this, u, d, !0, y);
      }),
        (a.prototype.writeDoubleBE = function (u, d, y) {
          return he(this, u, d, !1, y);
        }),
        (a.prototype.copy = function (u, d, y, O) {
          if (!a.isBuffer(u))
            throw new TypeError("argument should be a Buffer");
          if (
            (y || (y = 0),
            !O && O !== 0 && (O = this.length),
            d >= u.length && (d = u.length),
            d || (d = 0),
            O > 0 && O < y && (O = y),
            O === y || u.length === 0 || this.length === 0)
          )
            return 0;
          if (d < 0) throw new RangeError("targetStart out of bounds");
          if (y < 0 || y >= this.length)
            throw new RangeError("Index out of range");
          if (O < 0) throw new RangeError("sourceEnd out of bounds");
          O > this.length && (O = this.length),
            u.length - d < O - y && (O = u.length - d + y);
          var P = O - y;
          return (
            this === u && typeof Uint8Array.prototype.copyWithin == "function"
              ? this.copyWithin(d, y, O)
              : Uint8Array.prototype.set.call(u, this.subarray(y, O), d),
            P
          );
        }),
        (a.prototype.fill = function (u, d, y, O) {
          if (typeof u == "string") {
            if (
              (typeof d == "string"
                ? ((O = d), (d = 0), (y = this.length))
                : typeof y == "string" && ((O = y), (y = this.length)),
              O !== void 0 && typeof O != "string")
            )
              throw new TypeError("encoding must be a string");
            if (typeof O == "string" && !a.isEncoding(O))
              throw new TypeError("Unknown encoding: " + O);
            if (u.length === 1) {
              var P = u.charCodeAt(0);
              ((O === "utf8" && P < 128) || O === "latin1") && (u = P);
            }
          } else
            typeof u == "number"
              ? (u = u & 255)
              : typeof u == "boolean" && (u = Number(u));
          if (d < 0 || this.length < d || this.length < y)
            throw new RangeError("Out of range index");
          if (y <= d) return this;
          (d = d >>> 0),
            (y = y === void 0 ? this.length : y >>> 0),
            u || (u = 0);
          var z;
          if (typeof u == "number") for (z = d; z < y; ++z) this[z] = u;
          else {
            var Q = a.isBuffer(u) ? u : a.from(u, O),
              pe = Q.length;
            if (pe === 0)
              throw new TypeError(
                'The value "' + u + '" is invalid for argument "value"',
              );
            for (z = 0; z < y - d; ++z) this[z + d] = Q[z % pe];
          }
          return this;
        });
      var ve = /[^+/0-9A-Za-z-_]/g;
      function Le(u) {
        if (
          ((u = u.split("=")[0]), (u = u.trim().replace(ve, "")), u.length < 2)
        )
          return "";
        for (; u.length % 4 !== 0; ) u = u + "=";
        return u;
      }
      function Fe(u, d) {
        d = d || 1 / 0;
        for (var y, O = u.length, P = null, z = [], Q = 0; Q < O; ++Q) {
          if (((y = u.charCodeAt(Q)), y > 55295 && y < 57344)) {
            if (!P) {
              if (y > 56319) {
                (d -= 3) > -1 && z.push(239, 191, 189);
                continue;
              } else if (Q + 1 === O) {
                (d -= 3) > -1 && z.push(239, 191, 189);
                continue;
              }
              P = y;
              continue;
            }
            if (y < 56320) {
              (d -= 3) > -1 && z.push(239, 191, 189), (P = y);
              continue;
            }
            y = (((P - 55296) << 10) | (y - 56320)) + 65536;
          } else P && (d -= 3) > -1 && z.push(239, 191, 189);
          if (((P = null), y < 128)) {
            if ((d -= 1) < 0) break;
            z.push(y);
          } else if (y < 2048) {
            if ((d -= 2) < 0) break;
            z.push((y >> 6) | 192, (y & 63) | 128);
          } else if (y < 65536) {
            if ((d -= 3) < 0) break;
            z.push((y >> 12) | 224, ((y >> 6) & 63) | 128, (y & 63) | 128);
          } else if (y < 1114112) {
            if ((d -= 4) < 0) break;
            z.push(
              (y >> 18) | 240,
              ((y >> 12) & 63) | 128,
              ((y >> 6) & 63) | 128,
              (y & 63) | 128,
            );
          } else throw new Error("Invalid code point");
        }
        return z;
      }
      function Pe(u) {
        for (var d = [], y = 0; y < u.length; ++y)
          d.push(u.charCodeAt(y) & 255);
        return d;
      }
      function lt(u, d) {
        for (var y, O, P, z = [], Q = 0; Q < u.length && !((d -= 2) < 0); ++Q)
          (y = u.charCodeAt(Q)),
            (O = y >> 8),
            (P = y % 256),
            z.push(P),
            z.push(O);
        return z;
      }
      function re(u) {
        return mf.toByteArray(Le(u));
      }
      function De(u, d, y, O) {
        for (var P = 0; P < O && !(P + y >= d.length || P >= u.length); ++P)
          d[P + y] = u[P];
        return P;
      }
      function Ae(u, d) {
        return (
          u instanceof d ||
          (u != null &&
            u.constructor != null &&
            u.constructor.name != null &&
            u.constructor.name === d.name)
        );
      }
      function Tt(u) {
        return u !== u;
      }
      var jt = (function () {
        for (var u = "0123456789abcdef", d = new Array(256), y = 0; y < 16; ++y)
          for (var O = y * 16, P = 0; P < 16; ++P) d[O + P] = u[y] + u[P];
        return d;
      })();
    }),
    be = Al.Buffer;
  Al.SlowBuffer, Al.INSPECT_MAX_BYTES, Al.kMaxLength;
  var gf = function (e, t) {
    return (
      (gf =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
        }),
      gf(e, t)
    );
  };
  function $l(e, t) {
    gf(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var Lr = (function (e) {
      $l(t, e);
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
    He = (function (e) {
      $l(t, e);
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
  function Ml(e) {
    return e && e.Math == Math && e;
  }
  function Ey() {
    return (
      Ml(typeof globalThis == "object" && globalThis) ||
      Ml(typeof window == "object" && window) ||
      Ml(typeof self == "object" && self) ||
      Ml(typeof global == "object" && global) ||
      Function("return this")()
    );
  }
  function G4() {
    var e = Ey();
    return (
      typeof e.navigator == "object" && e.navigator.product === "ReactNative"
    );
  }
  var Y4 = function (e) {
      var t = G4()
        ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values."
        : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
      console.warn(t);
      for (var n = be.alloc(e), r = 0; r < e; ++r)
        n[r] = Math.floor(Math.random() * 256);
      return n;
    },
    Q4 = function () {
      {
        if (typeof window < "u") {
          var e = window.crypto || window.msCrypto;
          if (e && e.getRandomValues)
            return function (t) {
              return e.getRandomValues(be.alloc(t));
            };
        }
        return typeof global < "u" &&
          global.crypto &&
          global.crypto.getRandomValues
          ? function (t) {
              return global.crypto.getRandomValues(be.alloc(t));
            }
          : Y4;
      }
    },
    Cy = Q4();
  function X4(e) {
    return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(
      Object.prototype.toString.call(e),
    );
  }
  function yf(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  function Z4(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  function eN(e) {
    return Zi(e) && Object.prototype.toString.call(e) === "[object Date]";
  }
  function Zi(e) {
    return typeof e == "object" && e !== null;
  }
  function Ll(e, t) {
    var n = !1;
    function r() {
      for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
      return n || (console.warn(t), (n = !0)), e.apply(this, o);
    }
    return r;
  }
  function Bl(e) {
    if (ArrayBuffer.isView(e))
      return be.from(e.buffer, e.byteOffset, e.byteLength);
    if (X4(e)) return be.from(e);
    throw new He("Must use either Buffer or TypedArray");
  }
  var tN =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i,
    Oy = function (e) {
      return typeof e == "string" && tN.test(e);
    },
    bf = function (e) {
      if (!Oy(e))
        throw new He(
          'UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".',
        );
      var t = e.replace(/-/g, "");
      return be.from(t, "hex");
    },
    Ny = function (e, t) {
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
    nN = Math.pow(2, 53),
    rN = -Math.pow(2, 53),
    Ty = 4,
    Br = (function () {
      function e(t, n) {
        if (!(this instanceof e)) return new e(t, n);
        if (
          t != null &&
          typeof t != "string" &&
          !ArrayBuffer.isView(t) &&
          !(t instanceof ArrayBuffer) &&
          !Array.isArray(t)
        )
          throw new He(
            "Binary can only be constructed from string, Buffer, TypedArray, or Array<number>",
          );
        (this.sub_type = n ?? e.BSON_BINARY_SUBTYPE_DEFAULT),
          t == null
            ? ((this.buffer = be.alloc(e.BUFFER_SIZE)), (this.position = 0))
            : (typeof t == "string"
                ? (this.buffer = be.from(t, "binary"))
                : Array.isArray(t)
                ? (this.buffer = be.from(t))
                : (this.buffer = Bl(t)),
              (this.position = this.buffer.byteLength));
      }
      return (
        (e.prototype.put = function (t) {
          if (typeof t == "string" && t.length !== 1)
            throw new He("only accepts single character String");
          if (typeof t != "number" && t.length !== 1)
            throw new He("only accepts single character Uint8Array or Array");
          var n;
          if (
            (typeof t == "string"
              ? (n = t.charCodeAt(0))
              : typeof t == "number"
              ? (n = t)
              : (n = t[0]),
            n < 0 || n > 255)
          )
            throw new He(
              "only accepts number in a valid unsigned byte range 0-255",
            );
          if (this.buffer.length > this.position)
            this.buffer[this.position++] = n;
          else {
            var r = be.alloc(e.BUFFER_SIZE + this.buffer.length);
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
            var r = be.alloc(this.buffer.length + t.length);
            this.buffer.copy(r, 0, 0, this.buffer.length), (this.buffer = r);
          }
          ArrayBuffer.isView(t)
            ? (this.buffer.set(Bl(t), n),
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
            return new Ry(this.buffer.slice(0, this.position));
          throw new Lr(
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
                  (r = be.from(t.$binary, "base64")))
                : typeof t.$binary != "string" &&
                  ((o = t.$binary.subType
                    ? parseInt(t.$binary.subType, 16)
                    : 0),
                  (r = be.from(t.$binary.base64, "base64")))
              : "$uuid" in t && ((o = 4), (r = bf(t.$uuid))),
            !r)
          )
            throw new He(
              "Unexpected Binary Extended JSON format ".concat(
                JSON.stringify(t),
              ),
            );
          return o === Ty ? new Ry(r) : new e(r, o);
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
  Object.defineProperty(Br.prototype, "_bsontype", { value: "Binary" });
  var vf = 16,
    Ry = (function (e) {
      $l(t, e);
      function t(n) {
        var r = this,
          o,
          i;
        if (n == null) o = t.generate();
        else if (n instanceof t) (o = be.from(n.buffer)), (i = n.__id);
        else if (ArrayBuffer.isView(n) && n.byteLength === vf) o = Bl(n);
        else if (typeof n == "string") o = bf(n);
        else
          throw new He(
            "Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).",
          );
        return (r = e.call(this, o, Ty) || this), (r.__id = i), r;
      }
      return (
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this.buffer;
          },
          set: function (n) {
            (this.buffer = n), t.cacheHexString && (this.__id = Ny(n));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toHexString = function (n) {
          if ((n === void 0 && (n = !0), t.cacheHexString && this.__id))
            return this.__id;
          var r = Ny(this.id, n);
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
          return new Br(this.id, Br.SUBTYPE_UUID);
        }),
        (t.generate = function () {
          var n = Cy(vf);
          return (
            (n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), be.from(n)
          );
        }),
        (t.isValid = function (n) {
          return n
            ? n instanceof t
              ? !0
              : typeof n == "string"
              ? Oy(n)
              : yf(n)
              ? n.length !== vf
                ? !1
                : (n[6] & 240) === 64 && (n[8] & 128) === 128
              : !1
            : !1;
        }),
        (t.createFromHexString = function (n) {
          var r = bf(n);
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
    })(Br),
    zl = (function () {
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
  Object.defineProperty(zl.prototype, "_bsontype", { value: "Code" });
  function oN(e) {
    return (
      Zi(e) &&
      e.$id != null &&
      typeof e.$ref == "string" &&
      (e.$db == null || typeof e.$db == "string")
    );
  }
  var ea = (function () {
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
  Object.defineProperty(ea.prototype, "_bsontype", { value: "DBRef" });
  var Qt = void 0;
  try {
    Qt = new WebAssembly.Instance(
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
  var _y = 1 << 16,
    iN = 1 << 24,
    Lo = _y * _y,
    Iy = Lo * Lo,
    Py = Iy / 2,
    Ay = {},
    $y = {},
    Z = (function () {
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
              (i = 0 <= t && t < 256) && ((o = $y[t]), o)
                ? o
                : ((r = e.fromBits(t, (t | 0) < 0 ? -1 : 0, !0)),
                  i && ($y[t] = r),
                  r))
            : ((t |= 0),
              (i = -128 <= t && t < 128) && ((o = Ay[t]), o)
                ? o
                : ((r = e.fromBits(t, t < 0 ? -1 : 0, !1)),
                  i && (Ay[t] = r),
                  r));
        }),
        (e.fromNumber = function (t, n) {
          if (isNaN(t)) return n ? e.UZERO : e.ZERO;
          if (n) {
            if (t < 0) return e.UZERO;
            if (t >= Iy) return e.MAX_UNSIGNED_VALUE;
          } else {
            if (t <= -Py) return e.MIN_VALUE;
            if (t + 1 >= Py) return e.MAX_VALUE;
          }
          return t < 0
            ? e.fromNumber(-t, n).neg()
            : e.fromBits(t % Lo | 0, (t / Lo) | 0, n);
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
              c = parseInt(t.substring(s, s + l), r);
            if (l < 8) {
              var f = e.fromNumber(Math.pow(r, l));
              a = a.mul(f).add(e.fromNumber(c));
            } else (a = a.mul(i)), (a = a.add(e.fromNumber(c)));
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
          return Zi(t) && t.__isLong__ === !0;
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
            c = t.low & 65535,
            f = 0,
            p = 0,
            m = 0,
            w = 0;
          return (
            (w += i + c),
            (m += w >>> 16),
            (w &= 65535),
            (m += o + l),
            (p += m >>> 16),
            (m &= 65535),
            (p += r + s),
            (f += p >>> 16),
            (p &= 65535),
            (f += n + a),
            (f &= 65535),
            e.fromBits((m << 16) | w, (f << 16) | p, this.unsigned)
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
          if (Qt) {
            if (
              !this.unsigned &&
              this.high === -2147483648 &&
              t.low === -1 &&
              t.high === -1
            )
              return this;
            var n = (this.unsigned ? Qt.div_u : Qt.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, Qt.get_high(), this.unsigned);
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
                c = e.fromNumber(r),
                f = c.mul(t);
              f.isNegative() || f.gt(o);

            )
              (r -= l), (c = e.fromNumber(r, this.unsigned)), (f = c.mul(t));
            c.isZero() && (c = e.ONE), (i = i.add(c)), (o = o.sub(f));
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
          if ((e.isLong(t) || (t = e.fromValue(t)), Qt)) {
            var n = (this.unsigned ? Qt.rem_u : Qt.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, Qt.get_high(), this.unsigned);
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
          if ((e.isLong(t) || (t = e.fromValue(t)), Qt)) {
            var n = Qt.mul(this.low, this.high, t.low, t.high);
            return e.fromBits(n, Qt.get_high(), this.unsigned);
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
            c = t.low >>> 16,
            f = t.low & 65535,
            p = 0,
            m = 0,
            w = 0,
            b = 0;
          return (
            (b += a * f),
            (w += b >>> 16),
            (b &= 65535),
            (w += i * f),
            (m += w >>> 16),
            (w &= 65535),
            (w += a * c),
            (m += w >>> 16),
            (w &= 65535),
            (m += o * f),
            (p += m >>> 16),
            (m &= 65535),
            (m += i * c),
            (p += m >>> 16),
            (m &= 65535),
            (m += a * l),
            (p += m >>> 16),
            (m &= 65535),
            (p += r * f + o * c + i * l + a * s),
            (p &= 65535),
            e.fromBits((w << 16) | b, (p << 16) | m, this.unsigned)
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
            ? (this.high >>> 0) * Lo + (this.low >>> 0)
            : this.high * Lo + (this.low >>> 0);
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
              c = a.sub(l.mul(i)).toInt() >>> 0,
              f = c.toString(t);
            if (((a = l), a.isZero())) return f + s;
            for (; f.length < 6; ) f = "0" + f;
            s = "" + f + s;
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
        (e.TWO_PWR_24 = e.fromInt(iN)),
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
  Object.defineProperty(Z.prototype, "__isLong__", { value: !0 }),
    Object.defineProperty(Z.prototype, "_bsontype", { value: "Long" });
  var aN = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
    sN = /^(\+|-)?(Infinity|inf)$/i,
    lN = /^(\+|-)?NaN$/i,
    ta = 6111,
    wf = -6176,
    My = 6176,
    uN = 34,
    xf = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    Ly = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    By = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    cN = /^([-+])?(\d+)?$/,
    dN = 31,
    zy = 16383,
    fN = 30,
    pN = 31;
  function jy(e) {
    return !isNaN(parseInt(e, 10));
  }
  function hN(e) {
    var t = Z.fromNumber(1e9),
      n = Z.fromNumber(0);
    if (!e.parts[0] && !e.parts[1] && !e.parts[2] && !e.parts[3])
      return { quotient: e, rem: n };
    for (var r = 0; r <= 3; r++)
      (n = n.shiftLeft(32)),
        (n = n.add(new Z(e.parts[r], 0))),
        (e.parts[r] = n.div(t).low),
        (n = n.modulo(t));
    return { quotient: e, rem: n };
  }
  function mN(e, t) {
    if (!e && !t) return { high: Z.fromNumber(0), low: Z.fromNumber(0) };
    var n = e.shiftRightUnsigned(32),
      r = new Z(e.getLowBits(), 0),
      o = t.shiftRightUnsigned(32),
      i = new Z(t.getLowBits(), 0),
      a = n.multiply(o),
      s = n.multiply(i),
      l = r.multiply(o),
      c = r.multiply(i);
    return (
      (a = a.add(s.shiftRightUnsigned(32))),
      (s = new Z(s.getLowBits(), 0).add(l).add(c.shiftRightUnsigned(32))),
      (a = a.add(s.shiftRightUnsigned(32))),
      (c = s.shiftLeft(32).add(new Z(c.getLowBits(), 0))),
      { high: a, low: c }
    );
  }
  function gN(e, t) {
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
  function Bo(e, t) {
    throw new He(
      '"'.concat(e, '" is not a valid Decimal128 string - ').concat(t),
    );
  }
  var Sf = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      if (typeof t == "string") this.bytes = e.fromString(t).bytes;
      else if (yf(t)) {
        if (t.byteLength !== 16)
          throw new He("Decimal128 must take a Buffer of 16 bytes");
        this.bytes = t;
      } else throw new He("Decimal128 must take a Buffer or string");
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
          c = 0,
          f = [0],
          p = 0,
          m = 0,
          w = 0,
          b = 0,
          S = 0,
          _ = 0,
          v = new Z(0, 0),
          h = new Z(0, 0),
          g = 0,
          x = 0;
        if (t.length >= 7e3)
          throw new He("" + t + " not a valid Decimal128 string");
        var C = t.match(aN),
          N = t.match(sN),
          T = t.match(lN);
        if ((!C && !N && !T) || t.length === 0)
          throw new He("" + t + " not a valid Decimal128 string");
        if (C) {
          var I = C[2],
            B = C[4],
            M = C[5],
            U = C[6];
          B && U === void 0 && Bo(t, "missing exponent power"),
            B && I === void 0 && Bo(t, "missing exponent base"),
            B === void 0 && (M || U) && Bo(t, "missing e before exponent");
        }
        if (
          ((t[x] === "+" || t[x] === "-") && (n = t[x++] === "-"),
          !jy(t[x]) && t[x] !== ".")
        ) {
          if (t[x] === "i" || t[x] === "I") return new e(be.from(n ? Ly : By));
          if (t[x] === "N") return new e(be.from(xf));
        }
        for (; jy(t[x]) || t[x] === "."; ) {
          if (t[x] === ".") {
            r && Bo(t, "contains multiple periods"), (r = !0), (x = x + 1);
            continue;
          }
          p < 34 &&
            (t[x] !== "0" || o) &&
            (o || (c = a),
            (o = !0),
            (f[m++] = parseInt(t[x], 10)),
            (p = p + 1)),
            o && (s = s + 1),
            r && (l = l + 1),
            (a = a + 1),
            (x = x + 1);
        }
        if (r && !a) throw new He("" + t + " not a valid Decimal128 string");
        if (t[x] === "e" || t[x] === "E") {
          var F = t.substr(++x).match(cN);
          if (!F || !F[2]) return new e(be.from(xf));
          (S = parseInt(F[0], 10)), (x = x + F[0].length);
        }
        if (t[x]) return new e(be.from(xf));
        if (((w = 0), !p))
          (w = 0), (b = 0), (f[0] = 0), (s = 1), (p = 1), (i = 0);
        else if (((b = p - 1), (i = s), i !== 1))
          for (; f[c + i - 1] === 0; ) i = i - 1;
        for (S <= l && l - S > 1 << 14 ? (S = wf) : (S = S - l); S > ta; ) {
          if (((b = b + 1), b - w > uN)) {
            var V = f.join("");
            if (V.match(/^0+$/)) {
              S = ta;
              break;
            }
            Bo(t, "overflow");
          }
          S = S - 1;
        }
        for (; S < wf || p < s; ) {
          if (b === 0 && i < p) {
            (S = wf), (i = 0);
            break;
          }
          if ((p < s ? (s = s - 1) : (b = b - 1), S < ta)) S = S + 1;
          else {
            var V = f.join("");
            if (V.match(/^0+$/)) {
              S = ta;
              break;
            }
            Bo(t, "overflow");
          }
        }
        if (b - w + 1 < i) {
          var W = a;
          r && ((c = c + 1), (W = W + 1)), n && ((c = c + 1), (W = W + 1));
          var H = parseInt(t[c + b + 1], 10),
            te = 0;
          if (H >= 5 && ((te = 1), H === 5)) {
            for (te = f[b] % 2 === 1 ? 1 : 0, _ = c + b + 2; _ < W; _++)
              if (parseInt(t[_], 10)) {
                te = 1;
                break;
              }
          }
          if (te) {
            for (var q = b; q >= 0; q--)
              if (++f[q] > 9 && ((f[q] = 0), q === 0))
                if (S < ta) (S = S + 1), (f[q] = 1);
                else return new e(be.from(n ? Ly : By));
          }
        }
        if (((v = Z.fromNumber(0)), (h = Z.fromNumber(0)), i === 0))
          (v = Z.fromNumber(0)), (h = Z.fromNumber(0));
        else if (b - w < 17) {
          var q = w;
          for (h = Z.fromNumber(f[q++]), v = new Z(0, 0); q <= b; q++)
            (h = h.multiply(Z.fromNumber(10))), (h = h.add(Z.fromNumber(f[q])));
        } else {
          var q = w;
          for (v = Z.fromNumber(f[q++]); q <= b - 17; q++)
            (v = v.multiply(Z.fromNumber(10))), (v = v.add(Z.fromNumber(f[q])));
          for (h = Z.fromNumber(f[q++]); q <= b; q++)
            (h = h.multiply(Z.fromNumber(10))), (h = h.add(Z.fromNumber(f[q])));
        }
        var L = mN(v, Z.fromString("100000000000000000"));
        (L.low = L.low.add(h)),
          gN(L.low, h) && (L.high = L.high.add(Z.fromNumber(1))),
          (g = S + My);
        var A = { low: Z.fromNumber(0), high: Z.fromNumber(0) };
        L.high
          .shiftRightUnsigned(49)
          .and(Z.fromNumber(1))
          .equals(Z.fromNumber(1))
          ? ((A.high = A.high.or(Z.fromNumber(3).shiftLeft(61))),
            (A.high = A.high.or(
              Z.fromNumber(g).and(Z.fromNumber(16383).shiftLeft(47)),
            )),
            (A.high = A.high.or(L.high.and(Z.fromNumber(0x7fffffffffff)))))
          : ((A.high = A.high.or(Z.fromNumber(g & 16383).shiftLeft(49))),
            (A.high = A.high.or(L.high.and(Z.fromNumber(562949953421311))))),
          (A.low = L.low),
          n && (A.high = A.high.or(Z.fromString("9223372036854775808")));
        var $ = be.alloc(16);
        return (
          (x = 0),
          ($[x++] = A.low.low & 255),
          ($[x++] = (A.low.low >> 8) & 255),
          ($[x++] = (A.low.low >> 16) & 255),
          ($[x++] = (A.low.low >> 24) & 255),
          ($[x++] = A.low.high & 255),
          ($[x++] = (A.low.high >> 8) & 255),
          ($[x++] = (A.low.high >> 16) & 255),
          ($[x++] = (A.low.high >> 24) & 255),
          ($[x++] = A.high.low & 255),
          ($[x++] = (A.high.low >> 8) & 255),
          ($[x++] = (A.high.low >> 16) & 255),
          ($[x++] = (A.high.low >> 24) & 255),
          ($[x++] = A.high.high & 255),
          ($[x++] = (A.high.high >> 8) & 255),
          ($[x++] = (A.high.high >> 16) & 255),
          ($[x++] = (A.high.high >> 24) & 255),
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
          c,
          f,
          p = [];
        i = 0;
        var m = this.bytes,
          w = m[i++] | (m[i++] << 8) | (m[i++] << 16) | (m[i++] << 24),
          b = m[i++] | (m[i++] << 8) | (m[i++] << 16) | (m[i++] << 24),
          S = m[i++] | (m[i++] << 8) | (m[i++] << 16) | (m[i++] << 24),
          _ = m[i++] | (m[i++] << 8) | (m[i++] << 16) | (m[i++] << 24);
        i = 0;
        var v = { low: new Z(w, b), high: new Z(S, _) };
        v.high.lessThan(Z.ZERO) && p.push("-");
        var h = (_ >> 26) & dN;
        if (h >> 3 === 3) {
          if (h === fN) return p.join("") + "Infinity";
          if (h === pN) return "NaN";
          (t = (_ >> 15) & zy), (s = 8 + ((_ >> 14) & 1));
        } else (s = (_ >> 14) & 7), (t = (_ >> 17) & zy);
        var g = t - My;
        if (
          ((l.parts[0] = (_ & 16383) + ((s & 15) << 14)),
          (l.parts[1] = S),
          (l.parts[2] = b),
          (l.parts[3] = w),
          l.parts[0] === 0 &&
            l.parts[1] === 0 &&
            l.parts[2] === 0 &&
            l.parts[3] === 0)
        )
          a = !0;
        else
          for (f = 3; f >= 0; f--) {
            var x = 0,
              C = hN(l);
            if (((l = C.quotient), (x = C.rem.low), !!x))
              for (c = 8; c >= 0; c--)
                (r[f * 9 + c] = x % 10), (x = Math.floor(x / 10));
          }
        if (a) (n = 1), (r[i] = 0);
        else for (n = 36; !r[i]; ) (n = n - 1), (i = i + 1);
        var N = n - 1 + g;
        if (N >= 34 || N <= -7 || g > 0) {
          if (n > 34)
            return (
              p.push("".concat(0)),
              g > 0 ? p.push("E+".concat(g)) : g < 0 && p.push("E".concat(g)),
              p.join("")
            );
          p.push("".concat(r[i++])), (n = n - 1), n && p.push(".");
          for (var o = 0; o < n; o++) p.push("".concat(r[i++]));
          p.push("E"), N > 0 ? p.push("+".concat(N)) : p.push("".concat(N));
        } else if (g >= 0)
          for (var o = 0; o < n; o++) p.push("".concat(r[i++]));
        else {
          var T = n + g;
          if (T > 0) for (var o = 0; o < T; o++) p.push("".concat(r[i++]));
          else p.push("0");
          for (p.push("."); T++ < 0; ) p.push("0");
          for (var o = 0; o < n - Math.max(T - 1, 0); o++)
            p.push("".concat(r[i++]));
        }
        return p.join("");
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
  Object.defineProperty(Sf.prototype, "_bsontype", { value: "Decimal128" });
  var jl = (function () {
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
  Object.defineProperty(jl.prototype, "_bsontype", { value: "Double" });
  var Fl = (function () {
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
  Object.defineProperty(Fl.prototype, "_bsontype", { value: "Int32" });
  var kf = (function () {
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
  Object.defineProperty(kf.prototype, "_bsontype", { value: "MaxKey" });
  var Ef = (function () {
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
  Object.defineProperty(Ef.prototype, "_bsontype", { value: "MinKey" });
  var yN = new RegExp("^[0-9a-fA-F]{24}$"),
    zr = null,
    Sn = Symbol("id"),
    Nt = (function () {
      function e(t) {
        if (!(this instanceof e)) return new e(t);
        var n;
        if (typeof t == "object" && t && "id" in t) {
          if (typeof t.id != "string" && !ArrayBuffer.isView(t.id))
            throw new He(
              "Argument passed in must have an id that is of type string or Buffer",
            );
          "toHexString" in t && typeof t.toHexString == "function"
            ? (n = be.from(t.toHexString(), "hex"))
            : (n = t.id);
        } else n = t;
        if (n == null || typeof n == "number")
          this[Sn] = e.generate(typeof n == "number" ? n : void 0);
        else if (ArrayBuffer.isView(n) && n.byteLength === 12)
          this[Sn] = n instanceof be ? n : Bl(n);
        else if (typeof n == "string")
          if (n.length === 12) {
            var r = be.from(n);
            if (r.byteLength === 12) this[Sn] = r;
            else
              throw new He("Argument passed in must be a string of 12 bytes");
          } else if (n.length === 24 && yN.test(n))
            this[Sn] = be.from(n, "hex");
          else
            throw new He(
              "Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer",
            );
        else
          throw new He("Argument passed in does not match the accepted types");
        e.cacheHexString && (this.__id = this.id.toString("hex"));
      }
      return (
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this[Sn];
          },
          set: function (t) {
            (this[Sn] = t), e.cacheHexString && (this.__id = t.toString("hex"));
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
            r = be.alloc(12);
          return (
            r.writeUInt32BE(t, 0),
            zr === null && (zr = Cy(5)),
            (r[4] = zr[0]),
            (r[5] = zr[1]),
            (r[6] = zr[2]),
            (r[7] = zr[3]),
            (r[8] = zr[4]),
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
            return this[Sn][11] === t[Sn][11] && this[Sn].equals(t[Sn]);
          if (
            typeof t == "string" &&
            e.isValid(t) &&
            t.length === 12 &&
            yf(this.id)
          )
            return t === be.prototype.toString.call(this.id, "latin1");
          if (typeof t == "string" && e.isValid(t) && t.length === 24)
            return t.toLowerCase() === this.toHexString();
          if (typeof t == "string" && e.isValid(t) && t.length === 12)
            return be.from(t).equals(this.id);
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
          var n = be.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          return n.writeUInt32BE(t, 0), new e(n);
        }),
        (e.createFromHexString = function (t) {
          if (typeof t > "u" || (t != null && t.length !== 24))
            throw new He(
              "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
            );
          return new e(be.from(t, "hex"));
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
  Object.defineProperty(Nt.prototype, "generate", {
    value: Ll(function (e) {
      return Nt.generate(e);
    }, "Please use the static `ObjectId.generate(time)` instead"),
  }),
    Object.defineProperty(Nt.prototype, "getInc", {
      value: Ll(function () {
        return Nt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Nt.prototype, "get_inc", {
      value: Ll(function () {
        return Nt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Nt, "get_inc", {
      value: Ll(function () {
        return Nt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Nt.prototype, "_bsontype", { value: "ObjectID" });
  function bN(e) {
    return e.split("").sort().join("");
  }
  var na = (function () {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      if (
        ((this.pattern = t),
        (this.options = bN(n ?? "")),
        this.pattern.indexOf("\0") !== -1)
      )
        throw new Lr(
          "BSON Regex patterns cannot contain null bytes, found: ".concat(
            JSON.stringify(this.pattern),
          ),
        );
      if (this.options.indexOf("\0") !== -1)
        throw new Lr(
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
          throw new Lr(
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
        throw new He(
          "Unexpected BSONRegExp EJSON object form: ".concat(JSON.stringify(t)),
        );
      }),
      e
    );
  })();
  Object.defineProperty(na.prototype, "_bsontype", { value: "BSONRegExp" });
  var Cf = (function () {
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
  Object.defineProperty(Cf.prototype, "_bsontype", { value: "Symbol" });
  var vN = Z,
    Fy = (function (e) {
      $l(t, e);
      function t(n, r) {
        var o = this;
        return o instanceof t
          ? (Z.isLong(n)
              ? (o = e.call(this, n.low, n.high, !0) || this)
              : Zi(n) && typeof n.t < "u" && typeof n.i < "u"
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
          return new t(Z.fromInt(n, !0));
        }),
        (t.fromNumber = function (n) {
          return new t(Z.fromNumber(n, !0));
        }),
        (t.fromBits = function (n, r) {
          return new t(n, r);
        }),
        (t.fromString = function (n, r) {
          return new t(Z.fromString(n, !0, r));
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
        (t.MAX_VALUE = Z.MAX_UNSIGNED_VALUE),
        t
      );
    })(vN);
  function wN(e) {
    return (
      Zi(e) && Reflect.has(e, "_bsontype") && typeof e._bsontype == "string"
    );
  }
  var Dy = 2147483647,
    Uy = -2147483648,
    Wy = 9223372036854776e3,
    Vy = -9223372036854776e3,
    xN = {
      $oid: Nt,
      $binary: Br,
      $uuid: Br,
      $symbol: Cf,
      $numberInt: Fl,
      $numberDecimal: Sf,
      $numberDouble: jl,
      $numberLong: Z,
      $minKey: Ef,
      $maxKey: kf,
      $regex: na,
      $regularExpression: na,
      $timestamp: Fy,
    };
  function Hy(e, t) {
    if ((t === void 0 && (t = {}), typeof e == "number")) {
      if (t.relaxed || t.legacy) return e;
      if (Math.floor(e) === e) {
        if (e >= Uy && e <= Dy) return new Fl(e);
        if (e >= Vy && e <= Wy) return Z.fromNumber(e);
      }
      return new jl(e);
    }
    if (e == null || typeof e != "object") return e;
    if (e.$undefined) return null;
    for (
      var n = Object.keys(e).filter(function (p) {
          return p.startsWith("$") && e[p] != null;
        }),
        r = 0;
      r < n.length;
      r++
    ) {
      var o = xN[n[r]];
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
          : Z.isLong(i)
          ? a.setTime(i.toNumber())
          : typeof i == "number" && t.relaxed && a.setTime(i),
        a
      );
    }
    if (e.$code != null) {
      var s = Object.assign({}, e);
      return e.$scope && (s.$scope = Hy(e.$scope)), zl.fromExtendedJSON(e);
    }
    if (oN(e) || e.$dbPointer) {
      var l = e.$ref ? e : e.$dbPointer;
      if (l instanceof ea) return l;
      var c = Object.keys(l).filter(function (p) {
          return p.startsWith("$");
        }),
        f = !0;
      if (
        (c.forEach(function (p) {
          ["$ref", "$id", "$db"].indexOf(p) === -1 && (f = !1);
        }),
        f)
      )
        return ea.fromExtendedJSON(l);
    }
    return e;
  }
  function SN(e, t) {
    return e.map(function (n, r) {
      t.seenObjects.push({ propertyName: "index ".concat(r), obj: null });
      try {
        return lr(n, t);
      } finally {
        t.seenObjects.pop();
      }
    });
  }
  function qy(e) {
    var t = e.toISOString();
    return e.getUTCMilliseconds() !== 0 ? t : t.slice(0, -5) + "Z";
  }
  function lr(e, t) {
    if ((typeof e == "object" || typeof e == "function") && e !== null) {
      var n = t.seenObjects.findIndex(function (v) {
        return v.obj === e;
      });
      if (n !== -1) {
        var r = t.seenObjects.map(function (v) {
            return v.propertyName;
          }),
          o = r
            .slice(0, n)
            .map(function (v) {
              return "".concat(v, " -> ");
            })
            .join(""),
          i = r[n],
          a =
            " -> " +
            r
              .slice(n + 1, r.length - 1)
              .map(function (v) {
                return "".concat(v, " -> ");
              })
              .join(""),
          s = r[r.length - 1],
          l = " ".repeat(o.length + i.length / 2),
          c = "-".repeat(a.length + (i.length + s.length) / 2 - 1);
        throw new He(
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
            "    ".concat(l, "\\").concat(c, "/"),
        );
      }
      t.seenObjects[t.seenObjects.length - 1].obj = e;
    }
    if (Array.isArray(e)) return SN(e, t);
    if (e === void 0) return null;
    if (e instanceof Date || eN(e)) {
      var f = e.getTime(),
        p = f > -1 && f < 2534023188e5;
      return t.legacy
        ? t.relaxed && p
          ? { $date: e.getTime() }
          : { $date: qy(e) }
        : t.relaxed && p
        ? { $date: qy(e) }
        : { $date: { $numberLong: e.getTime().toString() } };
    }
    if (typeof e == "number" && (!t.relaxed || !isFinite(e))) {
      if (Math.floor(e) === e) {
        var m = e >= Uy && e <= Dy,
          w = e >= Vy && e <= Wy;
        if (m) return { $numberInt: e.toString() };
        if (w) return { $numberLong: e.toString() };
      }
      return { $numberDouble: e.toString() };
    }
    if (e instanceof RegExp || Z4(e)) {
      var b = e.flags;
      if (b === void 0) {
        var S = e.toString().match(/[gimuy]*$/);
        S && (b = S[0]);
      }
      var _ = new na(e.source, b);
      return _.toExtendedJSON(t);
    }
    return e != null && typeof e == "object" ? EN(e, t) : e;
  }
  var kN = {
    Binary: function (e) {
      return new Br(e.value(), e.sub_type);
    },
    Code: function (e) {
      return new zl(e.code, e.scope);
    },
    DBRef: function (e) {
      return new ea(e.collection || e.namespace, e.oid, e.db, e.fields);
    },
    Decimal128: function (e) {
      return new Sf(e.bytes);
    },
    Double: function (e) {
      return new jl(e.value);
    },
    Int32: function (e) {
      return new Fl(e.value);
    },
    Long: function (e) {
      return Z.fromBits(
        e.low != null ? e.low : e.low_,
        e.low != null ? e.high : e.high_,
        e.low != null ? e.unsigned : e.unsigned_,
      );
    },
    MaxKey: function () {
      return new kf();
    },
    MinKey: function () {
      return new Ef();
    },
    ObjectID: function (e) {
      return new Nt(e);
    },
    ObjectId: function (e) {
      return new Nt(e);
    },
    BSONRegExp: function (e) {
      return new na(e.pattern, e.options);
    },
    Symbol: function (e) {
      return new Cf(e.value);
    },
    Timestamp: function (e) {
      return Fy.fromBits(e.low, e.high);
    },
  };
  function EN(e, t) {
    if (e == null || typeof e != "object")
      throw new Lr("not an object instance");
    var n = e._bsontype;
    if (typeof n > "u") {
      var r = {};
      for (var o in e) {
        t.seenObjects.push({ propertyName: o, obj: null });
        try {
          var i = lr(e[o], t);
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
    } else if (wN(e)) {
      var a = e;
      if (typeof a.toExtendedJSON != "function") {
        var s = kN[e._bsontype];
        if (!s)
          throw new He("Unrecognized or invalid _bsontype: " + e._bsontype);
        a = s(a);
      }
      return (
        n === "Code" && a.scope
          ? (a = new zl(a.code, lr(a.scope, t)))
          : n === "DBRef" &&
            a.oid &&
            (a = new ea(
              lr(a.collection, t),
              lr(a.oid, t),
              lr(a.db, t),
              lr(a.fields, t),
            )),
        a.toExtendedJSON(t)
      );
    } else throw new Lr("_bsontype must be a string, but was: " + typeof n);
  }
  var jr;
  (function (e) {
    function t(i, a) {
      var s = Object.assign({}, { relaxed: !0, legacy: !1 }, a);
      return (
        typeof s.relaxed == "boolean" && (s.strict = !s.relaxed),
        typeof s.strict == "boolean" && (s.relaxed = !s.strict),
        JSON.parse(i, function (l, c) {
          if (l.indexOf("\0") !== -1)
            throw new Lr(
              "BSON Document field names cannot contain null bytes, found: ".concat(
                JSON.stringify(l),
              ),
            );
          return Hy(c, s);
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
      var c = Object.assign({ relaxed: !0, legacy: !1 }, l, {
          seenObjects: [{ propertyName: "(root)", obj: null }],
        }),
        f = lr(i, c);
      return JSON.stringify(f, a, s);
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
  })(jr || (jr = {}));
  var Ky = Ey();
  Ky.Map
    ? Ky.Map
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
    Z.fromNumber(nN),
    Z.fromNumber(rN);
  var Of = new Uint8Array(8);
  new DataView(Of.buffer, Of.byteOffset, Of.byteLength);
  var CN = 1024 * 1024 * 17;
  be.alloc(CN);
  var Jy = function (e, t, n) {
      if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
          (i || !(r in t)) &&
            (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
      return e.concat(i || Array.prototype.slice.call(t));
    },
    ON = (function () {
      function e(t, n, r) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.type = "browser");
      }
      return e;
    })(),
    NN = (function () {
      function e(t) {
        (this.version = t),
          (this.type = "node"),
          (this.name = "node"),
          (this.os = process.platform);
      }
      return e;
    })(),
    TN = (function () {
      function e(t, n, r, o) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.bot = o),
          (this.type = "bot-device");
      }
      return e;
    })(),
    RN = (function () {
      function e() {
        (this.type = "bot"),
          (this.bot = !0),
          (this.name = "bot"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    _N = (function () {
      function e() {
        (this.type = "react-native"),
          (this.name = "react-native"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    IN =
      /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    PN =
      /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    Gy = 3,
    AN = [
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
      ["searchbot", IN],
    ],
    Yy = [
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
  function $N(e) {
    return e
      ? Qy(e)
      : typeof document > "u" &&
        typeof navigator < "u" &&
        navigator.product === "ReactNative"
      ? new _N()
      : typeof navigator < "u"
      ? Qy(navigator.userAgent)
      : BN();
  }
  function MN(e) {
    return (
      e !== "" &&
      AN.reduce(function (t, n) {
        var r = n[0],
          o = n[1];
        if (t) return t;
        var i = o.exec(e);
        return !!i && [r, i];
      }, !1)
    );
  }
  function Qy(e) {
    var t = MN(e);
    if (!t) return null;
    var n = t[0],
      r = t[1];
    if (n === "searchbot") return new RN();
    var o = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
    o
      ? o.length < Gy && (o = Jy(Jy([], o, !0), zN(Gy - o.length), !0))
      : (o = []);
    var i = o.join("."),
      a = LN(e),
      s = PN.exec(e);
    return s && s[1] ? new TN(n, i, a, s[1]) : new ON(n, i, a);
  }
  function LN(e) {
    for (var t = 0, n = Yy.length; t < n; t++) {
      var r = Yy[t],
        o = r[0],
        i = r[1],
        a = i.exec(e);
      if (a) return o;
    }
    return null;
  }
  function BN() {
    var e = typeof process < "u" && process.version;
    return e ? new NN(process.version.slice(1)) : null;
  }
  function zN(e) {
    for (var t = [], n = 0; n < e; n++) t.push("0");
    return t;
  }
  class kn {
    constructor() {
      if (!kn.fetch)
        throw new Error(
          "DefaultNetworkTransport.fetch must be set before it's used",
        );
      if (!kn.AbortController)
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
        return await kn.fetch(r, { ...kn.extraFetchOptions, signal: i, ...o });
      } finally {
        a();
      }
    }
    createTimeoutSignal(t) {
      if (typeof t == "number") {
        const n = new kn.AbortController(),
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
  kn.DEFAULT_HEADERS = { "Content-Type": "application/json" };
  const jN = (e) => {},
    Dl = function (e) {
      return e && e.Math == Math && e;
    },
    Ul =
      Dl(typeof globalThis == "object" && globalThis) ||
      Dl(typeof window == "object" && window) ||
      Dl(typeof self == "object" && self) ||
      Dl(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  jN(typeof __DEV__ < "u" && __DEV__),
    (kn.fetch = Ul.fetch.bind(Ul)),
    (kn.AbortController = Ul.AbortController.bind(Ul));
  const Xy = "3.7.2",
    FN = Xy,
    DN = typeof atob == "function",
    UN = typeof btoa == "function",
    zo = typeof Buffer == "function",
    Zy = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
    eb = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
    WN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ra = Array.prototype.slice.call(WN),
    Wl = ((e) => {
      let t = {};
      return e.forEach((n, r) => (t[n] = r)), t;
    })(ra),
    VN =
      /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    st = String.fromCharCode.bind(String),
    tb =
      typeof Uint8Array.from == "function"
        ? Uint8Array.from.bind(Uint8Array)
        : (e, t = (n) => n) =>
            new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
    nb = (e) =>
      e.replace(/=/g, "").replace(/[+\/]/g, (t) => (t == "+" ? "-" : "_")),
    rb = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
    ob = (e) => {
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
            ra[(t >> 18) & 63] +
            ra[(t >> 12) & 63] +
            ra[(t >> 6) & 63] +
            ra[t & 63]);
      }
      return a ? i.slice(0, a - 3) + "===".substring(a) : i;
    },
    Nf = UN
      ? (e) => btoa(e)
      : zo
      ? (e) => Buffer.from(e, "binary").toString("base64")
      : ob,
    Tf = zo
      ? (e) => Buffer.from(e).toString("base64")
      : (e) => {
          let t = [];
          for (let n = 0, r = e.length; n < r; n += 4096)
            t.push(st.apply(null, e.subarray(n, n + 4096)));
          return Nf(t.join(""));
        },
    Vl = (e, t = !1) => (t ? nb(Tf(e)) : Tf(e)),
    HN = (e) => {
      if (e.length < 2) {
        var t = e.charCodeAt(0);
        return t < 128
          ? e
          : t < 2048
          ? st(192 | (t >>> 6)) + st(128 | (t & 63))
          : st(224 | ((t >>> 12) & 15)) +
            st(128 | ((t >>> 6) & 63)) +
            st(128 | (t & 63));
      } else {
        var t =
          65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
        return (
          st(240 | ((t >>> 18) & 7)) +
          st(128 | ((t >>> 12) & 63)) +
          st(128 | ((t >>> 6) & 63)) +
          st(128 | (t & 63))
        );
      }
    },
    qN = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    ib = (e) => e.replace(qN, HN),
    ab = zo
      ? (e) => Buffer.from(e, "utf8").toString("base64")
      : eb
      ? (e) => Tf(eb.encode(e))
      : (e) => Nf(ib(e)),
    jo = (e, t = !1) => (t ? nb(ab(e)) : ab(e)),
    sb = (e) => jo(e, !0),
    KN =
      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    JN = (e) => {
      switch (e.length) {
        case 4:
          var t =
              ((7 & e.charCodeAt(0)) << 18) |
              ((63 & e.charCodeAt(1)) << 12) |
              ((63 & e.charCodeAt(2)) << 6) |
              (63 & e.charCodeAt(3)),
            n = t - 65536;
          return st((n >>> 10) + 55296) + st((n & 1023) + 56320);
        case 3:
          return st(
            ((15 & e.charCodeAt(0)) << 12) |
              ((63 & e.charCodeAt(1)) << 6) |
              (63 & e.charCodeAt(2)),
          );
        default:
          return st(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
      }
    },
    lb = (e) => e.replace(KN, JN),
    ub = (e) => {
      if (((e = e.replace(/\s+/g, "")), !VN.test(e)))
        throw new TypeError("malformed base64.");
      e += "==".slice(2 - (e.length & 3));
      let t,
        n = "",
        r,
        o;
      for (let i = 0; i < e.length; )
        (t =
          (Wl[e.charAt(i++)] << 18) |
          (Wl[e.charAt(i++)] << 12) |
          ((r = Wl[e.charAt(i++)]) << 6) |
          (o = Wl[e.charAt(i++)])),
          (n +=
            r === 64
              ? st((t >> 16) & 255)
              : o === 64
              ? st((t >> 16) & 255, (t >> 8) & 255)
              : st((t >> 16) & 255, (t >> 8) & 255, t & 255));
      return n;
    },
    Rf = DN
      ? (e) => atob(rb(e))
      : zo
      ? (e) => Buffer.from(e, "base64").toString("binary")
      : ub,
    cb = zo
      ? (e) => tb(Buffer.from(e, "base64"))
      : (e) => tb(Rf(e), (t) => t.charCodeAt(0)),
    db = (e) => cb(fb(e)),
    GN = zo
      ? (e) => Buffer.from(e, "base64").toString("utf8")
      : Zy
      ? (e) => Zy.decode(cb(e))
      : (e) => lb(Rf(e)),
    fb = (e) => rb(e.replace(/[-_]/g, (t) => (t == "-" ? "+" : "/"))),
    _f = (e) => GN(fb(e)),
    YN = (e) => {
      if (typeof e != "string") return !1;
      const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
    },
    pb = (e) => ({ value: e, enumerable: !1, writable: !0, configurable: !0 }),
    hb = function () {
      const e = (t, n) => Object.defineProperty(String.prototype, t, pb(n));
      e("fromBase64", function () {
        return _f(this);
      }),
        e("toBase64", function (t) {
          return jo(this, t);
        }),
        e("toBase64URI", function () {
          return jo(this, !0);
        }),
        e("toBase64URL", function () {
          return jo(this, !0);
        }),
        e("toUint8Array", function () {
          return db(this);
        });
    },
    mb = function () {
      const e = (t, n) => Object.defineProperty(Uint8Array.prototype, t, pb(n));
      e("toBase64", function (t) {
        return Vl(this, t);
      }),
        e("toBase64URI", function () {
          return Vl(this, !0);
        }),
        e("toBase64URL", function () {
          return Vl(this, !0);
        });
    },
    QN = () => {
      hb(), mb();
    },
    Hl = {
      version: Xy,
      VERSION: FN,
      atob: Rf,
      atobPolyfill: ub,
      btoa: Nf,
      btoaPolyfill: ob,
      fromBase64: _f,
      toBase64: jo,
      encode: jo,
      encodeURI: sb,
      encodeURL: sb,
      utob: ib,
      btou: lb,
      decode: _f,
      isValid: YN,
      fromUint8Array: Vl,
      toUint8Array: db,
      extendString: hb,
      extendUint8Array: mb,
      extendBuiltins: QN,
    },
    XN = { relaxed: !1 };
  function gb(e) {
    return jr.serialize(e, XN);
  }
  function yb(e) {
    return Array.isArray(e)
      ? e.map((t) => jr.deserialize(t))
      : jr.deserialize(e);
  }
  var If;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(If || (If = {}));
  var ln;
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
  })(ln || (ln = {}));
  const bb = {
    [ln.NAME]: "name",
    [ln.EMAIL]: "email",
    [ln.PICTURE]: "pictureUrl",
    [ln.FIRST_NAME]: "firstName",
    [ln.LAST_NAME]: "lastName",
    [ln.GENDER]: "gender",
    [ln.BIRTHDAY]: "birthday",
    [ln.MIN_AGE]: "minAge",
    [ln.MAX_AGE]: "maxAge",
  };
  class vb {
    constructor(t) {
      if (
        ((this.type = If.Normal),
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
            Object.entries(o).map(([a, s]) => (a in bb ? [bb[a], s] : [a, s])),
          );
          this.data = yb(i);
        } else throw new Error("Expected 'data' in the response body");
      } else this.data = {};
    }
  }
  class un {
    constructor(t, n) {
      (this.storage = t), (this.keyPart = n);
    }
    get(t) {
      return this.storage.get(this.keyPart + un.PART_SEPARATOR + t);
    }
    set(t, n) {
      return this.storage.set(this.keyPart + un.PART_SEPARATOR + t, n);
    }
    remove(t) {
      return this.storage.remove(this.keyPart + un.PART_SEPARATOR + t);
    }
    prefix(t) {
      return new un(this, t);
    }
    clear(t = "") {
      return this.storage.clear(this.keyPart + un.PART_SEPARATOR + t);
    }
    addListener(t) {
      return this.storage.addListener(t);
    }
    removeListener(t) {
      return this.storage.addListener(t);
    }
  }
  un.PART_SEPARATOR = ":";
  class ZN {
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
      return new un(this, t);
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
  const Pf = "accessToken",
    Af = "refreshToken",
    $f = "profile",
    Mf = "providerType";
  class eT extends un {
    constructor(t, n) {
      super(t, `user(${n})`);
    }
    get accessToken() {
      return this.get(Pf);
    }
    set accessToken(t) {
      t === null ? this.remove(Pf) : this.set(Pf, t);
    }
    get refreshToken() {
      return this.get(Af);
    }
    set refreshToken(t) {
      t === null ? this.remove(Af) : this.set(Af, t);
    }
    get profile() {
      const t = this.get($f);
      if (t) {
        const n = new vb();
        return Object.assign(n, JSON.parse(t)), n;
      }
    }
    set profile(t) {
      t ? this.set($f, JSON.stringify(t)) : this.remove($f);
    }
    get providerType() {
      const t = this.get(Mf);
      if (t) return t;
    }
    set providerType(t) {
      t ? this.set(Mf, t) : this.remove(Mf);
    }
  }
  function Lf(e) {
    return Object.fromEntries(
      Object.entries(e).filter((t) => typeof t[1] < "u"),
    );
  }
  function tT(e, t) {
    let n = "";
    for (let r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)];
    return n;
  }
  function wb(e, t = !0) {
    const n = Lf(e);
    return (
      (t && Object.keys(n).length > 0 ? "?" : "") +
      Object.entries(n)
        .map(([r, o]) => `${r}=${encodeURIComponent(o)}`)
        .join("&")
    );
  }
  function nT(e) {
    const t = e[0] === "?" ? e.substr(1) : e;
    return Object.fromEntries(
      t
        .split("&")
        .filter((n) => n.length > 0)
        .map((n) => n.split("="))
        .map(([n, r]) => [n, decodeURIComponent(r)]),
    );
  }
  const rT = [
    "inspect",
    "callFunction",
    "callFunctionStreaming",
    ...Object.getOwnPropertyNames(Object.prototype),
  ];
  function oT(e) {
    for (const t of e)
      if (typeof t == "object" && t)
        for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n];
    return e;
  }
  function iT(e) {
    return oT(e).map((t) => (typeof t == "object" ? gb(t) : t));
  }
  class ql {
    constructor(t, n = {}) {
      (this.fetcher = t),
        (this.serviceName = n.serviceName),
        (this.argsTransformation = n.argsTransformation || iT);
    }
    static create(t, n = {}) {
      const r = new ql(t, n);
      return new Proxy(r, {
        get(o, i, a) {
          if (typeof i == "string" && rT.indexOf(i) === -1)
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
        i = wb({ baas_request: Hl.encode(JSON.stringify(r)) });
      return this.fetcher.fetchStream({
        method: "GET",
        path: o.functionsCall().path + i,
      });
    }
  }
  class aT {
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
  function sT() {
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
  var Xt = { api: sT };
  class lT {
    constructor(t) {
      this.fetcher = t;
    }
    create(t) {
      return this.fetcher.fetchJSON({
        method: "POST",
        body: { name: t },
        path: Xt.api().auth().apiKeys().path,
        tokenType: "refresh",
      });
    }
    fetch(t) {
      return this.fetcher.fetchJSON({
        method: "GET",
        path: Xt.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    fetchAll() {
      return this.fetcher.fetchJSON({
        method: "GET",
        tokenType: "refresh",
        path: Xt.api().auth().apiKeys().path,
      });
    }
    async delete(t) {
      await this.fetcher.fetchJSON({
        method: "DELETE",
        path: Xt.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    async enable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: Xt.api().auth().apiKeys().key(t).enable().path,
        tokenType: "refresh",
      });
    }
    async disable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: Xt.api().auth().apiKeys().key(t).disable().path,
        tokenType: "refresh",
      });
    }
  }
  let Bf = null;
  function uT(e) {
    Bf = e;
  }
  function oa() {
    if (Bf) return Bf;
    throw new Error("Cannot get environment before it's set");
  }
  class zf extends Error {
    constructor({ message: t, code: n }) {
      super(t), (this.name = "WatchError"), (this.code = n);
    }
  }
  var bt;
  (function (e) {
    (e.NEED_DATA = "NEED_DATA"),
      (e.HAVE_EVENT = "HAVE_EVENT"),
      (e.HAVE_ERROR = "HAVE_ERROR");
  })(bt || (bt = {}));
  class cT {
    constructor() {
      (this._state = bt.NEED_DATA),
        (this._error = null),
        (this._textDecoder = new (oa().TextDecoder)()),
        (this._buffer = ""),
        (this._bufferOffset = 0),
        (this._eventType = ""),
        (this._dataBuffer = "");
    }
    feedBuffer(t) {
      this.assertState(bt.NEED_DATA),
        (this._buffer += this._textDecoder.decode(t, { stream: !0 })),
        this.advanceBufferState();
    }
    feedLine(t) {
      if (
        (this.assertState(bt.NEED_DATA),
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
      this.assertState(bt.NEED_DATA);
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
          const r = jr.parse(t.data);
          if (typeof r == "object") {
            (this._nextEvent = r), (this._state = bt.HAVE_EVENT);
            return;
          }
        } catch {}
        (this._state = bt.HAVE_ERROR),
          (this._error = new zf({
            message: "server returned malformed event: " + t.data,
            code: "bad bson parse",
          }));
      } else if (t.eventType === "error") {
        (this._state = bt.HAVE_ERROR),
          (this._error = new zf({ message: t.data, code: "unknown" }));
        try {
          const { error_code: r, error: o } = jr.parse(t.data);
          if (typeof r != "string" || typeof o != "string") return;
          this._error = new zf({ message: o, code: r });
        } catch {
          return;
        }
      }
    }
    get state() {
      return this._state;
    }
    nextEvent() {
      this.assertState(bt.HAVE_EVENT);
      const t = this._nextEvent;
      return (this._state = bt.NEED_DATA), this.advanceBufferState(), t;
    }
    get error() {
      return this._error;
    }
    advanceBufferState() {
      for (this.assertState(bt.NEED_DATA); this.state === bt.NEED_DATA; ) {
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
  class dT {
    constructor(t, n, r, o) {
      (this.functions = ql.create(t, { serviceName: n })),
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
      const n = new cT(),
        r = t.then((o) => ({ [Symbol.asyncIterator]: () => o }));
      for await (const o of await r)
        if (o) {
          for (n.feedBuffer(o); n.state == bt.HAVE_EVENT; ) yield n.nextEvent();
          if (n.state == bt.HAVE_ERROR) throw n.error;
        }
    }
  }
  function fT(e, t, n, r) {
    return new dT(e, t, n, r);
  }
  function pT(e, t, n) {
    return { collection: fT.bind(null, e, t, n) };
  }
  function hT(e, t = "mongo-db") {
    return { db: pT.bind(null, e, t) };
  }
  const mT = "000000000000000000000000";
  var Fr;
  (function (e) {
    (e.Active = "active"),
      (e.LoggedOut = "logged-out"),
      (e.Removed = "removed");
  })(Fr || (Fr = {}));
  var xb;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(xb || (xb = {}));
  class Sb {
    constructor(t) {
      if (
        ((this.app = t.app),
        (this.id = t.id),
        (this.storage = new eT(this.app.storage, this.id)),
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
        (this.apiKeys = new lT(this.fetcher)),
        (this.functions = ql.create(this.fetcher));
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
          ? Fr.LoggedOut
          : Fr.Active
        : Fr.Removed;
    }
    get isLoggedIn() {
      return this.state === Fr.Active;
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
          const n = JSON.parse(Hl.decode(t)).baas_device_id;
          if (typeof n == "string" && n !== mT) return n;
        }
      }
      return null;
    }
    async refreshProfile() {
      const t = await this.fetcher.fetchJSON({
        method: "GET",
        path: Xt.api().auth().profile().path,
      });
      (this._profile = new vb(t)), (this.storage.profile = this._profile);
    }
    async logOut() {
      try {
        this._refreshToken !== null &&
          (await this.fetcher.fetchJSON({
            method: "DELETE",
            path: Xt.api().auth().session().path,
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
          path: Xt.api().auth().session().path,
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
      return hT(this.fetcher, t);
    }
    decodeAccessToken() {
      if (this.accessToken) {
        const t = this.accessToken.split(".");
        if (t.length !== 3)
          throw new Error("Expected an access token with three parts");
        const n = t[1],
          r = Hl.decode(n),
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
  class Zt {
    constructor(t, n, r) {
      (this.providerName = t), (this.providerType = n), (this.payload = r);
    }
    static anonymous() {
      return new Zt("anon-user", "anon-user", {});
    }
    static apiKey(t) {
      return new Zt("api-key", "api-key", { key: t });
    }
    static emailPassword(t, n) {
      return new Zt("local-userpass", "local-userpass", {
        username: t,
        password: n,
      });
    }
    static function(t) {
      return new Zt("custom-function", "custom-function", t);
    }
    static jwt(t) {
      return new Zt("custom-token", "custom-token", { token: t });
    }
    static google(t) {
      return new Zt("oauth2-google", "oauth2-google", Zt.derivePayload(t));
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
      return new Zt(
        "oauth2-facebook",
        "oauth2-facebook",
        t.includes("://") ? { redirectUrl: t } : { accessToken: t },
      );
    }
    static apple(t) {
      return new Zt(
        "oauth2-apple",
        "oauth2-apple",
        t.includes("://") ? { redirectUrl: t } : { id_token: t },
      );
    }
  }
  const kb = "userIds",
    Eb = "deviceId";
  class gT extends un {
    constructor(t, n) {
      super(t, `app(${n})`);
    }
    getUserIds() {
      const t = this.get(kb),
        n = t ? JSON.parse(t) : [];
      if (Array.isArray(n)) return [...new Set(n)];
      throw new Error("Expected the user ids to be an array");
    }
    setUserIds(t, n) {
      if (n) {
        const r = this.getUserIds();
        for (const o of r) t.indexOf(o) === -1 && t.push(o);
      }
      this.set(kb, JSON.stringify(t));
    }
    removeUserId(t) {
      const n = this.getUserIds().filter((r) => r !== t);
      this.setUserIds(n, !1);
    }
    getDeviceId() {
      return this.get(Eb);
    }
    setDeviceId(t) {
      this.set(Eb, t);
    }
  }
  const yT = "abcdefghijklmnopqrstuvwxyz",
    bT = 100,
    vT = {
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
  class Fo {
    constructor(t, n = oa().openWindow) {
      (this.storage = t.prefix("oauth2")), (this.openWindow = n);
    }
    static parseRedirectLocation(t) {
      const n = nT(t),
        r = {};
      for (const [o, i] of Object.entries(vT)) {
        const a = n[o];
        a && (r[i] = a);
      }
      return r;
    }
    static handleRedirect(t, n = oa().defaultStorage) {
      const r = Fo.parseRedirectLocation(t),
        { state: o, error: i } = r;
      if (typeof o == "string") {
        const a = n.prefix("oauth2");
        Fo.getStateStorage(a, o).set("result", JSON.stringify(r));
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
      const r = Fo.getStateStorage(this.storage, n);
      return new Promise((o, i) => {
        let a = null,
          s;
        const l = () => {
          const c = r.get("result");
          if (c) {
            const f = JSON.parse(c);
            r.removeListener(l), r.clear();
            try {
              a && (clearInterval(s), a.close());
            } catch (p) {
              console.warn(`Failed closing redirect window: ${p}`);
            } finally {
              o(f);
            }
          }
        };
        r.addListener(l),
          (a = this.openWindow(t)),
          (s = setInterval(() => {
            if (!a) clearInterval(s);
            else if (a.closed) {
              clearInterval(s), r.removeListener(l);
              const c = new Error("Window closed");
              i(c);
            }
          }, bT));
      });
    }
    generateState() {
      return tT(12, yT);
    }
  }
  const Cb = "x-baas-location";
  class wT {
    constructor(t, n, r) {
      (this.fetcher = t),
        (this.oauth2 = new Fo(n)),
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
          ).headers.get(Cb);
          if (s) return this.openWindowAndWaitForAuthResponse(s, i);
          throw new Error(`Missing ${Cb} header`);
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
            refresh_token: c = null,
            device_id: f,
          } = a;
        if (typeof s != "string")
          throw new Error("Expected a user id in the response");
        if (typeof l != "string")
          throw new Error("Expected an access token in the response");
        if (typeof c != "string" && c !== null)
          throw new Error("Expected refresh token to be a string or null");
        if (typeof f != "string")
          throw new Error("Expected device id to be a string");
        return { userId: s, accessToken: l, refreshToken: c, deviceId: f };
      }
    }
    async getLogInUrl(t, n = !1, r = {}) {
      const o = this.fetcher.appRoute.authProvider(t.providerName).login(),
        i = wb({ link: n ? "true" : void 0, ...r });
      return (await this.fetcher.locationUrl) + o.path + i;
    }
    async openWindowAndWaitForAuthResponse(t, n) {
      const r = await this.oauth2.openWindowAndWaitForRedirect(t, n);
      return Fo.decodeAuthInfo(r.userAuth);
    }
  }
  class ia extends Error {
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
          const { error: c, error_code: f, link: p } = l;
          return new ia(
            i,
            o,
            a,
            s,
            typeof c == "string" ? c : void 0,
            typeof f == "string" ? f : void 0,
            typeof p == "string" ? p : void 0,
          );
        }
      }
      return new ia(i, o, a, s);
    }
  }
  function xT(e) {
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
  class Do {
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
        if (typeof t == "object" && t !== null) return JSON.stringify(gb(t));
        if (typeof t == "string") return t;
        throw (console.log("body is", t), new Error("Unexpected type of body"));
      } else return;
    }
    static buildJsonHeader(t) {
      return t && t.length > 0 ? { "Content-Type": "application/json" } : {};
    }
    clone(t) {
      return new Do({
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
          headers: { ...Do.buildAuthorizationHeader(i, o), ...t.headers },
        });
        if (s.ok) return s;
        if (i && s.status === 401 && o === "access")
          return await i.refreshAccessToken(), this.fetch({ ...t, user: i });
        throw (
          (i &&
            s.status === 401 &&
            o === "refresh" &&
            ((i.accessToken = null), (i.refreshToken = null)),
          await ia.fromRequestAndResponse(t, s))
        );
      } else throw new Error("Expected either 'url' or 'path'");
    }
    async fetchJSON(t) {
      const { body: n } = t,
        r = Do.buildBody(n),
        o = Do.buildJsonHeader(r),
        i = await this.fetch({
          ...t,
          body: r,
          headers: { Accept: "application/json", ...o, ...t.headers },
        }),
        a = i.headers.get("content-type");
      if (a != null && a.startsWith("application/json")) {
        const s = await i.json();
        return yb(s);
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
      return xT(n);
    }
    get appRoute() {
      return Xt.api().app(this.appId);
    }
    get locationUrl() {
      return this.locationUrlContext.locationUrl;
    }
  }
  const ST = "deviceId";
  var Ob;
  (function (e) {
    (e.DEVICE_ID = "deviceId"),
      (e.APP_ID = "appId"),
      (e.APP_VERSION = "appVersion"),
      (e.PLATFORM = "platform"),
      (e.PLATFORM_VERSION = "platformVersion"),
      (e.SDK_VERSION = "sdkVersion");
  })(Ob || (Ob = {}));
  class kT {
    constructor({ appId: t, appVersion: n, deviceId: r }) {
      this.sdkVersion = "2.0.0";
      const o = oa();
      (this.platform = o.platform),
        (this.platformVersion = o.platformVersion),
        (this.appId = t),
        (this.appVersion = n),
        (this.deviceId = r);
    }
    encode() {
      const t = Lf(this);
      return Hl.encode(JSON.stringify(t));
    }
    toJSON() {
      return Lf(this);
    }
  }
  const ET = "https://realm.mongodb.com";
  let jf = class la {
    constructor(t) {
      (this.users = []), (this._locationUrl = null);
      const n = typeof t == "string" ? { id: t } : t;
      if (typeof n == "object" && typeof n.id == "string") this.id = n.id;
      else throw new Error("Missing an Atlas App Services app-id");
      (this.baseUrl = n.baseUrl || ET),
        n.skipLocationRequest &&
          (this._locationUrl = Promise.resolve(this.baseUrl)),
        (this.localApp = n.app);
      const { storage: r, transport: o = new kn() } = n;
      (this.fetcher = new Do({
        appId: this.id,
        userContext: this,
        locationUrlContext: this,
        transport: o,
      })),
        (this.emailPasswordAuth = new aT(this.fetcher));
      const i = r || oa().defaultStorage;
      (this.storage = new gT(i, this.id)),
        (this.authenticator = new wT(
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
      if (t in la.appCache) return la.appCache[t];
      {
        const n = new la(t);
        return (la.appCache[t] = n), n;
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
        i && i !== "000000000000000000000000" && this.storage.set(ST, i), o
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
        path: Xt.api().auth().delete().path,
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
      const t = this.users.filter((n) => n.state === Fr.Active);
      return t.length === 0 ? null : t[0];
    }
    get allUsers() {
      return Object.fromEntries(this.users.map((t) => [t.id, t]));
    }
    get locationUrl() {
      if (!this._locationUrl) {
        const t = Xt.api().app(this.id).location().path;
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
            ? new Nt(t)
            : void 0;
      return new kT({
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
        const o = new Sb({
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
      this.users = t.map((n) => new Sb({ app: this, id: n }));
    }
  };
  (jf.appCache = {}), (jf.Credentials = Zt);
  const CT = (e) => {},
    Kl = function (e) {
      return e && e.Math == Math && e;
    },
    aa =
      Kl(typeof globalThis == "object" && globalThis) ||
      Kl(typeof window == "object" && window) ||
      Kl(typeof self == "object" && self) ||
      Kl(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  CT(typeof __DEV__ < "u" && __DEV__);
  class OT {
    constructor() {
      if (typeof aa.localStorage == "object") this.global = aa;
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
      return new un(this, t);
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
  const Uo = $N(),
    NT = "localStorage" in aa ? OT : ZN;
  function TT(e) {
    return typeof aa.open == "function"
      ? aa.open(e)
      : (console.log(`Please open ${e}`), null);
  }
  const RT = {
    defaultStorage: new NT().prefix("realm-web"),
    openWindow: TT,
    platform: (Uo == null ? void 0 : Uo.name) || "web",
    platformVersion: (Uo == null ? void 0 : Uo.version) || "0.0.0",
    TextDecoder,
  };
  uT(RT);
  const _T = "caja-chica-pqain",
    IT =
      "https://realm.mongodb.com/groups/64c439eb9473f01fba108aaf/apps/64c43b5f13aa56de3f40739a",
    PT = "https://realm.mongodb.com",
    AT = "https://eastus2.azure.realm.mongodb.com",
    $T = "https://eastus2.azure.data.mongodb-api.com",
    MT =
      "https://cloud.mongodb.com/links/64c439eb9473f01fba108aaf/explorer/Cluster0/database/collection/find",
    LT = "mongodb-atlas",
    Ff = {
      appId: _T,
      appUrl: IT,
      baseUrl: PT,
      clientApiBaseUrl: AT,
      dataApiBaseUrl: $T,
      dataExplorerLink: MT,
      dataSourceName: LT,
    },
    { baseUrl: BT } = Ff;
  function Nb(e) {
    return new jf({ id: e, baseUrl: BT });
  }
  const Tb = de.createContext(null);
  function zT({ appId: e, children: t }) {
    const [n, r] = de.useState(Nb(e));
    de.useEffect(() => {
      r(Nb(e));
    }, [e]);
    const [o, i] = de.useState(n.currentUser),
      a = de.useCallback(
        async (c) => {
          await n.logIn(c), i(n.currentUser);
        },
        [n],
      ),
      s = de.useCallback(async () => {
        try {
          const c = n.currentUser;
          await (c == null ? void 0 : c.logOut()), await n.removeUser(c);
        } catch (c) {
          console.error(c);
        }
        i(n.currentUser);
      }, [n]),
      l = de.useMemo(
        () => ({ ...n, currentUser: o, logIn: a, logOut: s }),
        [n, o, a, s],
      );
    return R(Tb.Provider, { value: l, children: t });
  }
  function Jl() {
    const e = de.useContext(Tb);
    if (!e)
      throw new Error(
        "No App Services App found. Make sure to call useApp() inside of a <AppProvider />.",
      );
    return e;
  }
  var Df = {},
    Wo = {},
    jT = {
      get exports() {
        return Wo;
      },
      set exports(e) {
        Wo = e;
      },
    };
  (function (e) {
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    (e.exports = t),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(jT);
  var Rb = {};
  const FT = Zf(tE);
  var _b;
  function Gl() {
    return (
      _b ||
        ((_b = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function () {
                return t.createSvgIcon;
              },
            });
          var t = FT;
        })(Rb)),
      Rb
    );
  }
  const Yl = Zf(Av);
  var DT = Wo;
  Object.defineProperty(Df, "__esModule", { value: !0 });
  var Ib = (Df.default = void 0),
    UT = DT(Gl()),
    WT = Yl,
    VT = (0, UT.default)(
      (0, WT.jsx)("path", {
        d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
      }),
      "Visibility",
    );
  Ib = Df.default = VT;
  var Uf = {},
    HT = Wo;
  Object.defineProperty(Uf, "__esModule", { value: !0 });
  var Pb = (Uf.default = void 0),
    qT = HT(Gl()),
    KT = Yl,
    JT = (0, qT.default)(
      (0, KT.jsx)("path", {
        d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
      }),
      "VisibilityOff",
    );
  Pb = Uf.default = JT;
  const GT = Ab;
  function YT({ children: e }) {
    return R(rf, {
      style: { textAlign: "center", padding: "14px 0", marginTop: "auto" },
      children: e,
    });
  }
  function Ab() {
    const e = "/docs/atlas/app-services/",
      t = new URL(e, "https://mongodb.com");
    return ue(YT, {
      children: [
        R("span", {
          children:
            "CaJa Chica Area Ingenieria de Software, codigo fuente del frontend: ",
        }),
        " ",
        "|",
        " ",
        R(U3, { target: "_blank", href: t, children: "Docs" }),
      ],
    });
  }
  const $b = (e) => !e,
    Ql = (e, t) => !(t < 0 || t >= e.length);
  function QT(e, t, n) {
    if (!Ql(e, t) && t !== e.length)
      throw new Error("Cannot add value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t)];
  }
  function XT(e, t, n) {
    if (!Ql(e, t))
      throw new Error("Cannot replace value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t + 1)];
  }
  function ZT(e, t, n) {
    if (!Ql(e, t))
      throw new Error("Cannot update value. Array index out of bounds.");
    return [...e.slice(0, t), n(e[t]), ...e.slice(t + 1)];
  }
  function eR(e, t) {
    if (!Ql(e, t))
      throw new Error("Cannot remove value. Array index out of bounds.");
    return [...e.slice(0, t), ...e.slice(t + 1)];
  }
  const Xl = (e) => (e._id instanceof Nt ? e._id.toHexString() : e._id),
    tR = (e, t) => Xl(e) === Xl(t),
    Zl = (e, t) => {
      const n = e.findIndex((r) => tR(r, t));
      return n >= 0 ? n : null;
    };
  function nR(e) {
    return R(ZE, { elevation: 6, variant: "filled", ...e });
  }
  function rR({ isOpen: e, message: t, onClose: n = () => {} }) {
    return e ? R(nR, { onClose: n, severity: "error", children: t }) : null;
  }
  function oR({ error: e, clearError: t, hideAfterMs: n }) {
    const [r, o] = de.useState(!1),
      i = de.useCallback(() => {
        t(), o(!1);
      }, [t]);
    return (
      de.useEffect(() => {
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
        R(rR, {
          isOpen: r,
          message: e,
          onClose: () => {
            i();
          },
        })
    );
  }
  const Mb = "%[a-f0-9]{2}",
    Lb = new RegExp("(" + Mb + ")|([^%]+?)", "gi"),
    Bb = new RegExp("(" + Mb + ")+", "gi");
  function Wf(e, t) {
    try {
      return [decodeURIComponent(e.join(""))];
    } catch {}
    if (e.length === 1) return e;
    t = t || 1;
    const n = e.slice(0, t),
      r = e.slice(t);
    return Array.prototype.concat.call([], Wf(n), Wf(r));
  }
  function iR(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      let t = e.match(Lb) || [];
      for (let n = 1; n < t.length; n++)
        (e = Wf(t, n).join("")), (t = e.match(Lb) || []);
      return e;
    }
  }
  function aR(e) {
    const t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" };
    let n = Bb.exec(e);
    for (; n; ) {
      try {
        t[n[0]] = decodeURIComponent(n[0]);
      } catch {
        const o = iR(n[0]);
        o !== n[0] && (t[n[0]] = o);
      }
      n = Bb.exec(e);
    }
    t["%C2"] = "\uFFFD";
    const r = Object.keys(t);
    for (const o of r) e = e.replace(new RegExp(o, "g"), t[o]);
    return e;
  }
  function sR(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`",
      );
    try {
      return decodeURIComponent(e);
    } catch {
      return aR(e);
    }
  }
  function zb(e, t) {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "" || t === "") return [];
    const n = e.indexOf(t);
    return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
  }
  function lR(e, t) {
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
  const uR = (e) => e == null,
    cR = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`,
      ),
    Vf = Symbol("encodeFragmentIdentifier");
  function dR(e) {
    switch (e.arrayFormat) {
      case "index":
        return (t) => (n, r) => {
          const o = n.length;
          return r === void 0 ||
            (e.skipNull && r === null) ||
            (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [Ge(t, e), "[", o, "]"].join("")]
            : [...n, [Ge(t, e), "[", Ge(o, e), "]=", Ge(r, e)].join("")];
        };
      case "bracket":
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [Ge(t, e), "[]"].join("")]
            : [...n, [Ge(t, e), "[]=", Ge(r, e)].join("")];
      case "colon-list-separator":
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [Ge(t, e), ":list="].join("")]
            : [...n, [Ge(t, e), ":list=", Ge(r, e)].join("")];
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
                ? [[Ge(n, e), t, Ge(o, e)].join("")]
                : [[r, Ge(o, e)].join(e.arrayFormatSeparator)]);
      }
      default:
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, Ge(t, e)]
            : [...n, [Ge(t, e), "=", Ge(r, e)].join("")];
    }
  }
  function fR(e) {
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
              Ln(r, e).includes(e.arrayFormatSeparator);
          r = a ? Ln(r, e) : r;
          const s =
            i || a
              ? r.split(e.arrayFormatSeparator).map((l) => Ln(l, e))
              : r === null
              ? r
              : Ln(r, e);
          o[n] = s;
        };
      case "bracket-separator":
        return (n, r, o) => {
          const i = /(\[])$/.test(n);
          if (((n = n.replace(/\[]$/, "")), !i)) {
            o[n] = r && Ln(r, e);
            return;
          }
          const a =
            r === null
              ? []
              : r.split(e.arrayFormatSeparator).map((s) => Ln(s, e));
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
  function jb(e) {
    if (typeof e != "string" || e.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string",
      );
  }
  function Ge(e, t) {
    return t.encode ? (t.strict ? cR(e) : encodeURIComponent(e)) : e;
  }
  function Ln(e, t) {
    return t.decode ? sR(e) : e;
  }
  function Fb(e) {
    return Array.isArray(e)
      ? e.sort()
      : typeof e == "object"
      ? Fb(Object.keys(e))
          .sort((t, n) => Number(t) - Number(n))
          .map((t) => e[t])
      : e;
  }
  function Db(e) {
    const t = e.indexOf("#");
    return t !== -1 && (e = e.slice(0, t)), e;
  }
  function pR(e) {
    let t = "";
    const n = e.indexOf("#");
    return n !== -1 && (t = e.slice(n)), t;
  }
  function Ub(e, t) {
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
  function Hf(e) {
    e = Db(e);
    const t = e.indexOf("?");
    return t === -1 ? "" : e.slice(t + 1);
  }
  function qf(e, t) {
    (t = {
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1,
      ...t,
    }),
      jb(t.arrayFormatSeparator);
    const n = fR(t),
      r = Object.create(null);
    if (typeof e != "string" || ((e = e.trim().replace(/^[?#&]/, "")), !e))
      return r;
    for (const o of e.split("&")) {
      if (o === "") continue;
      const i = t.decode ? o.replace(/\+/g, " ") : o;
      let [a, s] = zb(i, "=");
      a === void 0 && (a = i),
        (s =
          s === void 0
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                t.arrayFormat,
              )
            ? s
            : Ln(s, t)),
        n(Ln(a, t), s, r);
    }
    for (const [o, i] of Object.entries(r))
      if (typeof i == "object" && i !== null)
        for (const [a, s] of Object.entries(i)) i[a] = Ub(s, t);
      else r[o] = Ub(i, t);
    return t.sort === !1
      ? r
      : (t.sort === !0
          ? Object.keys(r).sort()
          : Object.keys(r).sort(t.sort)
        ).reduce((o, i) => {
          const a = r[i];
          return (
            a && typeof a == "object" && !Array.isArray(a)
              ? (o[i] = Fb(a))
              : (o[i] = a),
            o
          );
        }, Object.create(null));
  }
  function Wb(e, t) {
    if (!e) return "";
    (t = {
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...t,
    }),
      jb(t.arrayFormatSeparator);
    const n = (a) =>
        (t.skipNull && uR(e[a])) || (t.skipEmptyString && e[a] === ""),
      r = dR(t),
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
            ? Ge(a, t)
            : Array.isArray(s)
            ? s.length === 0 && t.arrayFormat === "bracket-separator"
              ? Ge(a, t) + "[]"
              : s.reduce(r(a), []).join("&")
            : Ge(a, t) + "=" + Ge(s, t);
        })
        .filter((a) => a.length > 0)
        .join("&")
    );
  }
  function Vb(e, t) {
    var o;
    t = { decode: !0, ...t };
    let [n, r] = zb(e, "#");
    return (
      n === void 0 && (n = e),
      {
        url:
          ((o = n == null ? void 0 : n.split("?")) == null ? void 0 : o[0]) ??
          "",
        query: qf(Hf(e), t),
        ...(t && t.parseFragmentIdentifier && r
          ? { fragmentIdentifier: Ln(r, t) }
          : {}),
      }
    );
  }
  function Hb(e, t) {
    t = { encode: !0, strict: !0, [Vf]: !0, ...t };
    const n = Db(e.url).split("?")[0] || "",
      r = Hf(e.url),
      o = { ...qf(r, { sort: !1 }), ...e.query };
    let i = Wb(o, t);
    i && (i = `?${i}`);
    let a = pR(e.url);
    if (e.fragmentIdentifier) {
      const s = new URL(n);
      (s.hash = e.fragmentIdentifier),
        (a = t[Vf] ? s.hash : `#${e.fragmentIdentifier}`);
    }
    return `${n}${i}${a}`;
  }
  function qb(e, t, n) {
    n = { parseFragmentIdentifier: !0, [Vf]: !1, ...n };
    const { url: r, query: o, fragmentIdentifier: i } = Vb(e, n);
    return Hb({ url: r, query: lR(o, t), fragmentIdentifier: i }, n);
  }
  function hR(e, t, n) {
    const r = Array.isArray(t) ? (o) => !t.includes(o) : (o, i) => !t(o, i);
    return qb(e, r, n);
  }
  const Kb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        exclude: hR,
        extract: Hf,
        parse: qf,
        parseUrl: Vb,
        pick: qb,
        stringify: Wb,
        stringifyUrl: Hb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
  function mR() {
    const e = Jl(),
      [t, n] = E.useState(!1),
      r = () => {
        s(), n($b);
      },
      o = { email: null, password: null, other: null },
      [i, a] = E.useState(o),
      s = () => a(o),
      l = oR({
        error: i.other,
        clearError: () => {
          a((h) => ({ ...h, other: null }));
        },
      }),
      [c, f] = E.useState(!1),
      p = () => f($b),
      m = async ({ email: h, password: g }) => {
        console.log(`${h}@sanpedrosula.hn`), s();
        try {
          t &&
            (await e.emailPasswordAuth.registerUser({
              email: `${h}`,
              password: g,
            })),
            await e.logIn(Zt.emailPassword(`${h}`, g));
        } catch (x) {
          gR(x, a);
        }
      };
    Kb.parse(window.location.search);
    const [w, b] = E.useState(""),
      [S, _] = E.useState(""),
      v = E.useCallback(async () => {
        try {
          const h = await Kb.parse(window.location.search);
          h.token &&
            h.tokenId &&
            (b(h.token),
            _(h.tokenId),
            await e.emailPasswordAuth.confirmUser(h.token, h.tokenId));
        } catch (h) {
          console.error(h);
        }
      }, [e.emailPasswordAuth, w, S]);
    return (
      E.useEffect(() => {
        v();
      }, []),
      ue(rf, {
        maxWidth: "sm",
        className: "main-container",
        children: [
          R(eC, {
            className: "auth-card",
            variant: "outlined",
            children: ue("form", {
              className: "auth-form",
              onSubmit: (h) => {
                h.preventDefault();
                const g = new FormData(h.target),
                  { email: x, password: C } = Object.fromEntries(g.entries());
                m({ email: x, password: C });
              },
              children: [
                R(Gt, {
                  component: "h2",
                  variant: "h4",
                  children: "Welcome automation v1!",
                }),
                R(Gt, {
                  variant: "subtitle1",
                  gutterBottom: !0,
                  children: t
                    ? "Enter your email and a password to create a new account."
                    : "Enter your email and a password to log in with an existing account.",
                }),
                R(l, {}),
                ue("div", {
                  className: "email-and-domain",
                  children: [
                    R(Pl, {
                      id: "input-email",
                      name: "email",
                      label: "Email Address",
                      variant: "outlined",
                      error: !!i.email,
                      helperText: i.email ?? "",
                    }),
                    ue(Gt, {
                      variant: "caption",
                      gutterBottom: !0,
                      children: [R("br", {}), "@sanpedrosula.hn"],
                    }),
                  ],
                }),
                R(Pl, {
                  id: "input-password",
                  "data-testid": "input-password",
                  type: c ? "text" : "password",
                  name: "password",
                  label: "Password",
                  variant: "outlined",
                  error: !!i.password,
                  helperText: i.password ?? "",
                  InputProps: {
                    endAdornment: R(p3, {
                      position: "end",
                      children: R(xl, {
                        "aria-label": "toggle password visibility",
                        onClick: p,
                        onMouseDown: (h) => {
                          h.preventDefault();
                        },
                        size: "large",
                        children: c ? R(Ib, {}) : R(Pb, {}),
                      }),
                    }),
                  },
                }),
                R(Rl, {
                  id: "submit-button",
                  "data-testid": "submit-button",
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  children: t ? "Create Account" : "Log In",
                }),
                R("button", {
                  id: "toggle-auth-type-button",
                  type: "button",
                  className: "link-button",
                  onClick: () => r(),
                  children: t
                    ? "Already have an account? Log In"
                    : "Sign up for an account",
                }),
              ],
            }),
          }),
          R(Ab, {}),
        ],
      })
    );
  }
  function gR(e, t) {
    const n = () => {
      t((r) => ({
        ...r,
        other: "Something went wrong. Try again in a little bit.",
      })),
        console.warn(
          "Something went wrong with a login or signup request. See the following error for details.",
        ),
        console.error(e);
    };
    if (e instanceof ia) {
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
  var Kf = {},
    yR = Wo;
  Object.defineProperty(Kf, "__esModule", { value: !0 });
  var Jb = (Kf.default = void 0),
    bR = yR(Gl()),
    vR = Yl,
    wR = (0, bR.default)(
      (0, vR.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
      "Add",
    );
  Jb = Kf.default = wR;
  const eu = () => {},
    xR = { onInsert: eu, onUpdate: eu, onReplace: eu, onDelete: eu };
  function SR(e, t) {
    const n = de.useMemo(() => ({}), []),
      r = { ...xR, ...t },
      o = de.useRef(r);
    de.useEffect(() => {
      o.current = {
        onInsert: r.onInsert,
        onUpdate: r.onUpdate,
        onReplace: r.onReplace,
        onDelete: r.onDelete,
      };
    }, [r.onInsert, r.onUpdate, r.onReplace, r.onDelete]),
      de.useEffect(() => {
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
  function kR({ cluster: e = "mongodb-atlas", db: t, collection: n }) {
    const r = Jl();
    return de.useMemo(
      () => r.currentUser.mongoClient(e).db(t).collection(n),
      [r.currentUser, e, t, n],
    );
  }
  const { dataSourceName: ER } = Ff;
  function CR() {
    const e = Jl(),
      [t, n] = de.useState([]),
      [r, o] = de.useState(!0),
      i = kR({ cluster: ER, db: "todo", collection: "Item" });
    return (
      de.useEffect(() => {
        let a = !0;
        const s = i.find({});
        return (
          a &&
            s.then((l) => {
              n(l), o(!1);
            }),
          () => {
            a = !1;
          }
        );
      }, [i]),
      SR(i, {
        onInsert: (a) => {
          n((s) => {
            if (r) return s;
            const l = Zl(s, a.fullDocument) ?? s.length;
            return l === s.length ? QT(s, l, a.fullDocument) : s;
          });
        },
        onUpdate: (a) => {
          n((s) => {
            if (r) return s;
            const l = Zl(s, a.fullDocument);
            return ZT(s, l, () => a.fullDocument);
          });
        },
        onReplace: (a) => {
          n((s) => {
            if (r) return s;
            const l = Zl(s, a.fullDocument);
            return XT(s, l, a.fullDocument);
          });
        },
        onDelete: (a) => {
          n((s) => {
            if (r) return s;
            const l = Zl(s, { _id: a.documentKey._id });
            return l >= 0 ? eR(s, l) : s;
          });
        },
      }),
      {
        loading: r,
        todos: t,
        saveTodo: async (a) => {
          if (a.data.summary && a.data.price) {
            (a.data.owner_id = e.currentUser.id), (a.data.isComplete = !1);
            try {
              console.log(a), await i.insertOne(a.data);
            } catch (s) {
              s.error.match(/^Duplicate key error/) &&
                console.warn(
                  "The following error means that this app tried to insert a todo multiple times (i.e. an existing todo has the same _id). In this app we just catch the error and move on. In your app, you might want to debounce the save input or implement an additional loading state to avoid sending the request in the first place.",
                ),
                console.error(s);
            }
          }
        },
        toggleTodo: async (a) => {
          await i.updateOne(
            { _id: a._id },
            { $set: { isComplete: !a.isComplete } },
          );
        },
        deleteTodo: async (a) => {
          await i.deleteOne({ _id: a._id });
        },
      }
    );
  }
  var Jf = {},
    OR = Wo;
  Object.defineProperty(Jf, "__esModule", { value: !0 });
  var Gf = (Jf.default = void 0),
    NR = OR(Gl()),
    TR = Yl,
    RR = (0, NR.default)(
      (0, TR.jsx)("path", {
        d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Clear",
    );
  Gf = Jf.default = RR;
  function _R({ todo: e, todoActions: t }) {
    return ue(ay, {
      children: [
        R(mO, {
          children: R(wC, {
            "data-testid": "todo-checkbox",
            edge: "start",
            color: "primary",
            checked: e.isComplete,
            onClick: () => {
              t.toggleTodo(e);
            },
          }),
        }),
        R(_l, { children: e.summary }),
        R(_l, { children: e.price }),
        R(uf, {
          children: R(xl, {
            "data-testid": "todo-delete-button",
            edge: "end",
            size: "small",
            onClick: () => {
              t.deleteTodo(e);
            },
            children: R(Gf, {}),
          }),
        }),
      ],
    });
  }
  function IR() {
    const [e, t] = de.useState([]);
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
  const PR = Object.fromEntries
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
  function tu(e) {
    return Object.keys(e);
  }
  function Gb(e, t) {
    if (!e) throw new Error(t);
  }
  function Yb(e, t) {
    return t;
  }
  const Yf = (e) => {
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
          if (Array.isArray(o)) i = Yf(o);
          else {
            Gb(!Yb(o, !1)), (i = "");
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
  function AR(e, t) {
    const n = E.useRef();
    return (
      (!n.current ||
        t.length !== n.current.prevDeps.length ||
        n.current.prevDeps.map((r, o) => r === t[o]).indexOf(!1) >= 0) &&
        (n.current = { v: e(), prevDeps: [...t] }),
      n.current.v
    );
  }
  function $R(e) {
    return (
      e instanceof Object &&
      !("styles" in e) &&
      !("length" in e) &&
      !("__emotion_styles" in e)
    );
  }
  const { createCssAndCx: MR } = (() => {
    function e(n, r, o) {
      const i = [],
        a = Vg(n, i, o);
      return i.length < 2 ? o : a + r(i);
    }
    function t(n) {
      const { cache: r } = n,
        o = (...i) => {
          const a = nl(i, r.registered);
          Ad(r, a, !1);
          const s = `${r.key}-${a.name}`;
          e: {
            const l = i[0];
            if (!$R(l)) break e;
            Qb.saveClassNameCSSObjectMapping(r, s, l);
          }
          return s;
        };
      return {
        css: o,
        cx: (...i) => {
          const a = Yf(i),
            s = Qb.fixClassName(r, a, o);
          return e(r.registered, o, s);
        },
      };
    }
    return { createCssAndCx: t };
  })();
  function LR(e) {
    const { useCache: t } = e;
    function n() {
      const r = t(),
        { css: o, cx: i } = AR(() => MR({ cache: r }), [r]);
      return { css: o, cx: i };
    }
    return { useCssAndCx: n };
  }
  const Qb = (() => {
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
          return Yf(
            t(r.split(" ").map((a) => [a, i == null ? void 0 : i.get(a)])).map(
              (a) => (typeof a == "string" ? a : o(a)),
            ),
          );
        };
      })(),
    };
  })();
  function nu(e) {
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
  function Xb(e, t, n) {
    if (!(t instanceof Object)) return e;
    const r = {};
    return (
      tu(e).forEach((o) => (r[o] = n(e[o], t[o]))),
      tu(t).forEach((o) => {
        if (o in e) return;
        const i = t[o];
        typeof i == "string" && (r[o] = i);
      }),
      r
    );
  }
  let BR = 0;
  function Zb(e) {
    const { useTheme: t, cache: n } = e;
    function r() {
      var s;
      const l = n2(),
        c = jR(),
        f = (s = n ?? c) !== null && s !== void 0 ? s : l;
      if (f === null)
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
      return f;
    }
    const { useCssAndCx: o } = LR({ useCache: r });
    function i(s) {
      const { name: l, uniqId: c = BR++ } = s ?? {},
        f = typeof l != "object" ? l : Object.keys(l)[0];
      return function (p) {
        const m = typeof p == "function" ? p : () => p;
        return function (w, b) {
          var S, _;
          const v = t(),
            { css: h, cx: g } = o(),
            x = r();
          let C = E.useMemo(() => {
            const T = {},
              I =
                typeof Proxy < "u" &&
                new Proxy(
                  {},
                  {
                    get: (U, F) => (
                      typeof F == "symbol" && Gb(!1),
                      (T[F] = `${x.key}-${c}${
                        f !== void 0 ? `-${f}` : ""
                      }-${F}-ref`)
                    ),
                  },
                ),
              B = m(v, w, I || {}),
              M = PR(
                tu(B).map((U) => {
                  const F = B[U];
                  return (
                    F.label || (F.label = `${f !== void 0 ? `${f}-` : ""}${U}`),
                    [U, `${h(F)}${Yb(U, U in T) ? ` ${T[U]}` : ""}`]
                  );
                }),
              );
            return (
              tu(T).forEach((U) => {
                U in M || (M[U] = T[U]);
              }),
              M
            );
          }, [x, h, g, v, nu(w)]);
          const N = b == null ? void 0 : b.props.classes;
          C = E.useMemo(() => Xb(C, N, g), [C, nu(N), g]);
          {
            let T;
            try {
              T =
                f !== void 0
                  ? (_ =
                      (S = v.components) === null || S === void 0
                        ? void 0
                        : S[f]) === null || _ === void 0
                    ? void 0
                    : _.styleOverrides
                  : void 0;
            } catch {}
            const I = E.useMemo(() => {
              if (!T) return;
              const B = {};
              for (const M in T) {
                const U = T[M];
                U instanceof Object &&
                  (B[M] = h(
                    typeof U == "function"
                      ? U(
                          Object.assign(
                            {
                              theme: v,
                              ownerState: b == null ? void 0 : b.ownerState,
                            },
                            b == null ? void 0 : b.props,
                          ),
                        )
                      : U,
                  ));
              }
              return B;
            }, [
              T === void 0 ? void 0 : JSON.stringify(T),
              nu(b == null ? void 0 : b.props),
              nu(b == null ? void 0 : b.ownerState),
              h,
            ]);
            C = E.useMemo(() => Xb(C, I, g), [C, I, g]);
          }
          return { classes: C, theme: v, css: h, cx: g };
        };
      };
    }
    function a() {
      const s = t(),
        { css: l, cx: c } = o();
      return { theme: s, css: l, cx: c };
    }
    return { makeStyles: i, useStyles: a };
  }
  const zR = E.createContext(void 0);
  function jR() {
    return E.useContext(zR);
  }
  function ev(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var tv =
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
  function FR(e) {
    const { useTheme: t, cache: n } = e,
      { makeStyles: r } = Zb({ useTheme: t, cache: n });
    function o(i, a, s) {
      const l =
          typeof i == "string"
            ? (() => {
                const w = i,
                  b = function (S) {
                    var { children: _ } = S,
                      v = tv(S, ["children"]);
                    return E.createElement(w, v, _);
                  };
                return Object.defineProperty(b, "name", { value: ev(w) }), b;
              })()
            : i,
        c = (() => {
          {
            const { name: w } = s ?? {};
            if (w !== void 0)
              return typeof w != "object" ? w : Object.keys(w)[0];
          }
          {
            const w = l.displayName;
            if (typeof w == "string" && w !== "") return w;
          }
          {
            const { name: w } = l;
            if (w) return w;
          }
        })(),
        f = r(Object.assign(Object.assign({}, s), { name: c }))(
          typeof a == "function" ? (w, b, S) => nv(a(w, b, S)) : nv(a),
        );
      function p(w) {
        for (const b in w) if (b !== "root") return !0;
        return !1;
      }
      const m = E.forwardRef(function (w, b) {
        const { className: S, classes: _ } = w,
          v = tv(w, ["className", "classes"]),
          { classes: h, cx: g } = f(w, { props: w });
        return de.createElement(
          l,
          Object.assign(
            { ref: b, className: p(h) ? S : g(h.root, S) },
            typeof i == "string" ? {} : { classes: h },
            v,
          ),
        );
      });
      return (
        c !== void 0 &&
          ((m.displayName = `${ev(c)}WithStyles`),
          Object.defineProperty(m, "name", { value: m.displayName })),
        m
      );
    }
    return { withStyles: o };
  }
  function nv(e) {
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
  function DR(e) {
    return Object.assign(Object.assign({}, Zb(e)), FR(e));
  }
  const {
      makeStyles: a_,
      withStyles: UR,
      useStyles: s_,
    } = DR({ useTheme: qi }),
    WR = UR(ay, { secondaryAction: { paddingRight: "120px" } });
  function VR({ todo: e, todoActions: t, draftTodoActions: n }) {
    return ue(WR, {
      children: [
        R(_l, {
          inset: !0,
          children: R(Pl, {
            style: { width: "100%" },
            placeholder: "What needs doing?",
            size: "small",
            value: e.data.summary,
            onChange: (r) => {
              n.setDraftTodoSummary(e, r.target.value);
            },
          }),
        }),
        R(_l, {
          inset: !0,
          children: R(Pl, {
            style: { width: "100%" },
            placeholder: "lps?",
            size: "small",
            value: e.data.price,
            onChange: (r) => {
              n.setDraftTodoPrice(e, r.target.value);
            },
          }),
        }),
        ue(uf, {
          children: [
            R(Rl, {
              variant: "outlined",
              size: "small",
              onClick: async () => {
                await t.saveTodo(e), n.deleteDraftTodo(e);
              },
              children: "Save",
            }),
            R(xl, {
              edge: "end",
              size: "small",
              onClick: () => {
                n.deleteDraftTodo(e);
              },
              children: R(Gf, {}),
            }),
          ],
        }),
      ],
    });
  }
  function HR(e, t) {
    de.useEffect(() => {
      const n = setTimeout(() => {
        e();
      }, t);
      return () => clearTimeout(n);
    }, [e, t]);
  }
  function qR(e, t) {
    const [n, r] = de.useState(!1);
    return (
      HR(() => {
        e && r(!0);
      }, [t]),
      de.useEffect(() => {
        e || r(!1);
      }, [e]),
      n
    );
  }
  function KR() {
    const { loading: e, todos: t, ...n } = CR(),
      { draftTodos: r, ...o } = IR(),
      i = qR(e, 200);
    return ue(rf, {
      className: "main-container",
      maxWidth: "sm",
      children: [
        e
          ? i
            ? R(I3, {})
            : null
          : ue("div", {
              className: "todo-items-container",
              children: [
                R(Gt, {
                  component: "p",
                  variant: "h5",
                  children: `You have ${t.length} To-Do Item${
                    t.length === 1 ? "" : "s"
                  }`,
                }),
                R(Rl, {
                  variant: "contained",
                  color: "primary",
                  startIcon: R(Jb, {}),
                  onClick: () => o.createDraftTodo(),
                  children: "Add To-Do",
                }),
                ue(oy, {
                  style: { width: "100%" },
                  children: [
                    t.map((a) => R(_R, { todo: a, todoActions: n }, Xl(a))),
                    r.map((a) =>
                      R(
                        VR,
                        { todo: a, todoActions: n, draftTodoActions: o },
                        Xl(a),
                      ),
                    ),
                  ],
                }),
              ],
            }),
        R(GT, {}),
      ],
    });
  }
  const rv = {
      green: { ...Nr, 500: "#09804C", A400: "#B9EACD" },
      purple: { ...Cr, 500: "#6200EE", A400: "#9795F9" },
      orange: wo,
      red: Er,
      blue: Or,
    },
    JR = { palette: { primary: rv.green, secondary: rv.green } },
    GR = v0(JR);
  function YR({ children: e }) {
    return R(d2, {
      injectFirst: !0,
      children: R(BS, { theme: GR, children: e }),
    });
  }
  function QR() {
    return R(Gt, {
      className: "app-bar-title",
      component: "h1",
      variant: "h5",
      children: "Caja Chica Area Ingenieria de Software",
    });
  }
  const { appId: XR } = Ff;
  function ZR() {
    return R(YR, { children: R(zT, { appId: XR, children: R(e_, {}) }) });
  }
  function e_() {
    const { currentUser: e, logOut: t } = Jl();
    return ue("div", {
      className: "App",
      children: [
        R(f5, {
          position: "sticky",
          children: ue(T4, {
            children: [
              R(QR, {}),
              e
                ? R(Rl, {
                    variant: "contained",
                    color: "secondary",
                    onClick: async () => {
                      await t();
                    },
                    children: R(Gt, { variant: "button", children: "Log Out" }),
                  })
                : null,
            ],
          }),
        }),
        e ? R(KR, {}) : R(mR, {}),
      ],
    });
  }
  const t_ = "modulepreload",
    n_ = function (e) {
      return "/caja-chica/" + e;
    },
    ov = {},
    r_ = function (e, t, n) {
      if (!t || t.length === 0) return e();
      const r = document.getElementsByTagName("link");
      return Promise.all(
        t.map((o) => {
          if (((o = n_(o)), o in ov)) return;
          ov[o] = !0;
          const i = o.endsWith(".css"),
            a = i ? '[rel="stylesheet"]' : "";
          if (n)
            for (let l = r.length - 1; l >= 0; l--) {
              const c = r[l];
              if (c.href === o && (!i || c.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${a}`)) return;
          const s = document.createElement("link");
          if (
            ((s.rel = i ? "stylesheet" : t_),
            i || ((s.as = "script"), (s.crossOrigin = "")),
            (s.href = o),
            document.head.appendChild(s),
            i)
          )
            return new Promise((l, c) => {
              s.addEventListener("load", l),
                s.addEventListener("error", () =>
                  c(new Error(`Unable to preload CSS for ${o}`)),
                );
            });
        }),
      ).then(() => e());
    },
    o_ = (e) => {
      e &&
        e instanceof Function &&
        r_(() => import("./web-vitals-7b71ae84.js"), []).then(
          ({ getCLS: t, getFID: n, getFCP: r, getLCP: o, getTTFB: i }) => {
            t(e), n(e), r(e), o(e), i(e);
          },
        );
    };
  yg(document.getElementById("root")).render(
    R(de.StrictMode, { children: R(ZR, {}) }),
  ),
    o_();
})();
