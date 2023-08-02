(async () => {
  function Wb(e, t) {
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
  function qf(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function Kf(e) {
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
  var Uo = {},
    Vb = {
      get exports() {
        return Uo;
      },
      set exports(e) {
        Uo = e;
      },
    },
    sa = {},
    E = {},
    Hb = {
      get exports() {
        return E;
      },
      set exports(e) {
        E = e;
      },
    },
    ue = {},
    Wo = Symbol.for("react.element"),
    qb = Symbol.for("react.portal"),
    Kb = Symbol.for("react.fragment"),
    Jb = Symbol.for("react.strict_mode"),
    Gb = Symbol.for("react.profiler"),
    Yb = Symbol.for("react.provider"),
    Xb = Symbol.for("react.context"),
    Qb = Symbol.for("react.forward_ref"),
    Zb = Symbol.for("react.suspense"),
    ev = Symbol.for("react.memo"),
    tv = Symbol.for("react.lazy"),
    Jf = Symbol.iterator;
  function nv(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Jf && e[Jf]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Gf = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Yf = Object.assign,
    Xf = {};
  function Fr(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Xf),
      (this.updater = n || Gf);
  }
  (Fr.prototype.isReactComponent = {}),
    (Fr.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (Fr.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  function Qf() {}
  Qf.prototype = Fr.prototype;
  function tu(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Xf),
      (this.updater = n || Gf);
  }
  var nu = (tu.prototype = new Qf());
  (nu.constructor = tu), Yf(nu, Fr.prototype), (nu.isPureReactComponent = !0);
  var Zf = Array.isArray,
    ep = Object.prototype.hasOwnProperty,
    ru = { current: null },
    tp = { key: !0, ref: !0, __self: !0, __source: !0 };
  function np(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        ep.call(t, r) && !tp.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
      for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
      o.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
    return {
      $$typeof: Wo,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: ru.current,
    };
  }
  function rv(e, t) {
    return {
      $$typeof: Wo,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function ou(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Wo;
  }
  function ov(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var rp = /\/+/g;
  function iu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? ov("" + e.key)
      : t.toString(36);
  }
  function la(e, t, n, r, o) {
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
            case Wo:
            case qb:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (o = o(a)),
        (e = r === "" ? "." + iu(a, 0) : r),
        Zf(o)
          ? ((n = ""),
            e != null && (n = e.replace(rp, "$&/") + "/"),
            la(o, t, n, "", function (c) {
              return c;
            }))
          : o != null &&
            (ou(o) &&
              (o = rv(
                o,
                n +
                  (!o.key || (a && a.key === o.key)
                    ? ""
                    : ("" + o.key).replace(rp, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((a = 0), (r = r === "" ? "." : r + ":"), Zf(e)))
      for (var s = 0; s < e.length; s++) {
        i = e[s];
        var l = r + iu(i, s);
        a += la(i, t, n, l, o);
      }
    else if (((l = nv(e)), typeof l == "function"))
      for (e = l.call(e), s = 0; !(i = e.next()).done; )
        (i = i.value), (l = r + iu(i, s++)), (a += la(i, t, n, l, o));
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
  function ua(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      la(e, r, "", "", function (i) {
        return t.call(n, i, o++);
      }),
      r
    );
  }
  function iv(e) {
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
  var pt = { current: null },
    ca = { transition: null },
    av = {
      ReactCurrentDispatcher: pt,
      ReactCurrentBatchConfig: ca,
      ReactCurrentOwner: ru,
    };
  (ue.Children = {
    map: ua,
    forEach: function (e, t, n) {
      ua(
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
        ua(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        ua(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!ou(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  }),
    (ue.Component = Fr),
    (ue.Fragment = Kb),
    (ue.Profiler = Gb),
    (ue.PureComponent = tu),
    (ue.StrictMode = Jb),
    (ue.Suspense = Zb),
    (ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = av),
    (ue.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var r = Yf({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((i = t.ref), (a = ru.current)),
          t.key !== void 0 && (o = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps;
        for (l in t)
          ep.call(t, l) &&
            !tp.hasOwnProperty(l) &&
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
        $$typeof: Wo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a,
      };
    }),
    (ue.createContext = function (e) {
      return (
        (e = {
          $$typeof: Xb,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: Yb, _context: e }),
        (e.Consumer = e)
      );
    }),
    (ue.createElement = np),
    (ue.createFactory = function (e) {
      var t = np.bind(null, e);
      return (t.type = e), t;
    }),
    (ue.createRef = function () {
      return { current: null };
    }),
    (ue.forwardRef = function (e) {
      return { $$typeof: Qb, render: e };
    }),
    (ue.isValidElement = ou),
    (ue.lazy = function (e) {
      return { $$typeof: tv, _payload: { _status: -1, _result: e }, _init: iv };
    }),
    (ue.memo = function (e, t) {
      return { $$typeof: ev, type: e, compare: t === void 0 ? null : t };
    }),
    (ue.startTransition = function (e) {
      var t = ca.transition;
      ca.transition = {};
      try {
        e();
      } finally {
        ca.transition = t;
      }
    }),
    (ue.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ue.useCallback = function (e, t) {
      return pt.current.useCallback(e, t);
    }),
    (ue.useContext = function (e) {
      return pt.current.useContext(e);
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (e) {
      return pt.current.useDeferredValue(e);
    }),
    (ue.useEffect = function (e, t) {
      return pt.current.useEffect(e, t);
    }),
    (ue.useId = function () {
      return pt.current.useId();
    }),
    (ue.useImperativeHandle = function (e, t, n) {
      return pt.current.useImperativeHandle(e, t, n);
    }),
    (ue.useInsertionEffect = function (e, t) {
      return pt.current.useInsertionEffect(e, t);
    }),
    (ue.useLayoutEffect = function (e, t) {
      return pt.current.useLayoutEffect(e, t);
    }),
    (ue.useMemo = function (e, t) {
      return pt.current.useMemo(e, t);
    }),
    (ue.useReducer = function (e, t, n) {
      return pt.current.useReducer(e, t, n);
    }),
    (ue.useRef = function (e) {
      return pt.current.useRef(e);
    }),
    (ue.useState = function (e) {
      return pt.current.useState(e);
    }),
    (ue.useSyncExternalStore = function (e, t, n) {
      return pt.current.useSyncExternalStore(e, t, n);
    }),
    (ue.useTransition = function () {
      return pt.current.useTransition();
    }),
    (ue.version = "18.2.0"),
    (function (e) {
      e.exports = ue;
    })(Hb);
  const ie = qf(E),
    au = Wb({ __proto__: null, default: ie }, [E]);
  var sv = E,
    lv = Symbol.for("react.element"),
    uv = Symbol.for("react.fragment"),
    cv = Object.prototype.hasOwnProperty,
    dv =
      sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    fv = { key: !0, ref: !0, __self: !0, __source: !0 };
  function op(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (r in t) cv.call(t, r) && !fv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: lv,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: dv.current,
    };
  }
  (sa.Fragment = uv),
    (sa.jsx = op),
    (sa.jsxs = op),
    (function (e) {
      e.exports = sa;
    })(Vb);
  const pv = Uo.Fragment,
    R = Uo.jsx,
    ce = Uo.jsxs,
    hv = Object.freeze(
      Object.defineProperty(
        { __proto__: null, Fragment: pv, jsx: R, jsxs: ce },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  var jr = {},
    mv = {
      get exports() {
        return jr;
      },
      set exports(e) {
        jr = e;
      },
    },
    Rt = {},
    su = {},
    gv = {
      get exports() {
        return su;
      },
      set exports(e) {
        su = e;
      },
    },
    ip = {};
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
      h = 3,
      v = !1,
      g = !1,
      x = !1,
      N = typeof setTimeout == "function" ? setTimeout : null,
      w = typeof clearTimeout == "function" ? clearTimeout : null,
      b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(L) {
      for (var A = n(c); A !== null; ) {
        if (A.callback === null) r(c);
        else if (A.startTime <= L)
          r(c), (A.sortIndex = A.expirationTime), t(l, A);
        else break;
        A = n(c);
      }
    }
    function S(L) {
      if (((x = !1), y(L), !g))
        if (n(l) !== null) (g = !0), te(C);
        else {
          var A = n(c);
          A !== null && q(S, A.startTime - L);
        }
    }
    function C(L, A) {
      (g = !1), x && ((x = !1), w(I), (I = -1)), (v = !0);
      var $ = h;
      try {
        for (
          y(A), p = n(l);
          p !== null && (!(p.expirationTime > A) || (L && !U()));

        ) {
          var Y = p.callback;
          if (typeof Y == "function") {
            (p.callback = null), (h = p.priorityLevel);
            var oe = Y(p.expirationTime <= A);
            (A = e.unstable_now()),
              typeof oe == "function" ? (p.callback = oe) : p === n(l) && r(l),
              y(A);
          } else r(l);
          p = n(l);
        }
        if (p !== null) var ne = !0;
        else {
          var he = n(c);
          he !== null && q(S, he.startTime - A), (ne = !1);
        }
        return ne;
      } finally {
        (p = null), (h = $), (v = !1);
      }
    }
    var T = !1,
      _ = null,
      I = -1,
      B = 5,
      M = -1;
    function U() {
      return !(e.unstable_now() - M < B);
    }
    function F() {
      if (_ !== null) {
        var L = e.unstable_now();
        M = L;
        var A = !0;
        try {
          A = _(!0, L);
        } finally {
          A ? V() : ((T = !1), (_ = null));
        }
      } else T = !1;
    }
    var V;
    if (typeof b == "function")
      V = function () {
        b(F);
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
        N(F, 0);
      };
    function te(L) {
      (_ = L), T || ((T = !0), V());
    }
    function q(L, A) {
      I = N(function () {
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
        g || v || ((g = !0), te(C));
      }),
      (e.unstable_forceFrameRate = function (L) {
        0 > L || 125 < L
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (B = 0 < L ? Math.floor(1e3 / L) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (L) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var A = 3;
            break;
          default:
            A = h;
        }
        var $ = h;
        h = A;
        try {
          return L();
        } finally {
          h = $;
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
        var $ = h;
        h = L;
        try {
          return A();
        } finally {
          h = $;
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
                (x ? (w(I), (I = -1)) : (x = !0), q(S, $ - Y)))
            : ((L.sortIndex = oe), t(l, L), g || v || ((g = !0), te(C))),
          L
        );
      }),
      (e.unstable_shouldYield = U),
      (e.unstable_wrapCallback = function (L) {
        var A = h;
        return function () {
          var $ = h;
          h = A;
          try {
            return L.apply(this, arguments);
          } finally {
            h = $;
          }
        };
      });
  })(ip),
    (function (e) {
      e.exports = ip;
    })(gv);
  var ap = E,
    Nt = su;
  function j(e) {
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
  var sp = new Set(),
    Vo = {};
  function lr(e, t) {
    Ur(e, t), Ur(e + "Capture", t);
  }
  function Ur(e, t) {
    for (Vo[e] = t, e = 0; e < t.length; e++) sp.add(t[e]);
  }
  var kn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    lu = Object.prototype.hasOwnProperty,
    yv =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    lp = {},
    up = {};
  function bv(e) {
    return lu.call(up, e)
      ? !0
      : lu.call(lp, e)
      ? !1
      : yv.test(e)
      ? (up[e] = !0)
      : ((lp[e] = !0), !1);
  }
  function vv(e, t, n, r) {
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
  function wv(e, t, n, r) {
    if (t === null || typeof t > "u" || vv(e, t, n, r)) return !0;
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
  function ht(e, t, n, r, o, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a);
  }
  var tt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      tt[e] = new ht(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      tt[t] = new ht(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        tt[e] = new ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      tt[e] = new ht(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        tt[e] = new ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      tt[e] = new ht(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      tt[e] = new ht(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      tt[e] = new ht(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      tt[e] = new ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var uu = /[\-:]([a-z])/g;
  function cu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(uu, cu);
      tt[t] = new ht(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(uu, cu);
        tt[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(uu, cu);
      tt[t] = new ht(
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
      tt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (tt.xlinkHref = new ht(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      tt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function du(e, t, n, r) {
    var o = tt.hasOwnProperty(t) ? tt[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (wv(t, n, o, r) && (n = null),
      r || o === null
        ? bv(t) &&
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
  var En = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    da = Symbol.for("react.element"),
    Wr = Symbol.for("react.portal"),
    Vr = Symbol.for("react.fragment"),
    fu = Symbol.for("react.strict_mode"),
    pu = Symbol.for("react.profiler"),
    cp = Symbol.for("react.provider"),
    dp = Symbol.for("react.context"),
    hu = Symbol.for("react.forward_ref"),
    mu = Symbol.for("react.suspense"),
    gu = Symbol.for("react.suspense_list"),
    yu = Symbol.for("react.memo"),
    Mn = Symbol.for("react.lazy"),
    fp = Symbol.for("react.offscreen"),
    pp = Symbol.iterator;
  function Ho(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (pp && e[pp]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Be = Object.assign,
    bu;
  function qo(e) {
    if (bu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        bu = (t && t[1]) || "";
      }
    return (
      `
` +
      bu +
      e
    );
  }
  var vu = !1;
  function wu(e, t) {
    if (!e || vu) return "";
    vu = !0;
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
      (vu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? qo(e) : "";
  }
  function Sv(e) {
    switch (e.tag) {
      case 5:
        return qo(e.type);
      case 16:
        return qo("Lazy");
      case 13:
        return qo("Suspense");
      case 19:
        return qo("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = wu(e.type, !1)), e;
      case 11:
        return (e = wu(e.type.render, !1)), e;
      case 1:
        return (e = wu(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Su(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Vr:
        return "Fragment";
      case Wr:
        return "Portal";
      case pu:
        return "Profiler";
      case fu:
        return "StrictMode";
      case mu:
        return "Suspense";
      case gu:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case dp:
          return (e.displayName || "Context") + ".Consumer";
        case cp:
          return (e._context.displayName || "Context") + ".Provider";
        case hu:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case yu:
          return (
            (t = e.displayName || null), t !== null ? t : Su(e.type) || "Memo"
          );
        case Mn:
          (t = e._payload), (e = e._init);
          try {
            return Su(e(t));
          } catch {}
      }
    return null;
  }
  function xv(e) {
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
        return Su(t);
      case 8:
        return t === fu ? "StrictMode" : "Mode";
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
  function Ln(e) {
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
  function hp(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function kv(e) {
    var t = hp(e) ? "checked" : "value",
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
  function fa(e) {
    e._valueTracker || (e._valueTracker = kv(e));
  }
  function mp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = hp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function pa(e) {
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
  function xu(e, t) {
    var n = t.checked;
    return Be({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function gp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Ln(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function yp(e, t) {
    (t = t.checked), t != null && du(e, "checked", t, !1);
  }
  function ku(e, t) {
    yp(e, t);
    var n = Ln(t.value),
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
      ? Eu(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Eu(e, t.type, Ln(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function bp(e, t, n) {
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
  function Eu(e, t, n) {
    (t !== "number" || pa(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ko = Array.isArray;
  function Hr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ln(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
    return Be({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function vp(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(j(92));
        if (Ko(n)) {
          if (1 < n.length) throw Error(j(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Ln(n) };
  }
  function wp(e, t) {
    var n = Ln(t.value),
      r = Ln(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Sp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function xp(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ou(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? xp(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ha,
    kp = (function (e) {
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
          ha = ha || document.createElement("div"),
            ha.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ha.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Jo(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Go = {
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
    Ev = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Go).forEach(function (e) {
    Ev.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Go[t] = Go[e]);
    });
  });
  function Ep(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Go.hasOwnProperty(e) && Go[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Cp(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Ep(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var Cv = Be(
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
  function Tu(e, t) {
    if (t) {
      if (Cv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(j(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(j(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(j(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(j(62));
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
  var Ru = null;
  function Nu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Iu = null,
    qr = null,
    Kr = null;
  function Op(e) {
    if ((e = yi(e))) {
      if (typeof Iu != "function") throw Error(j(280));
      var t = e.stateNode;
      t && ((t = Ba(t)), Iu(e.stateNode, e.type, t));
    }
  }
  function Tp(e) {
    qr ? (Kr ? Kr.push(e) : (Kr = [e])) : (qr = e);
  }
  function _p() {
    if (qr) {
      var e = qr,
        t = Kr;
      if (((Kr = qr = null), Op(e), t)) for (e = 0; e < t.length; e++) Op(t[e]);
    }
  }
  function Rp(e, t) {
    return e(t);
  }
  function Np() {}
  var Pu = !1;
  function Ip(e, t, n) {
    if (Pu) return e(t, n);
    Pu = !0;
    try {
      return Rp(e, t, n);
    } finally {
      (Pu = !1), (qr !== null || Kr !== null) && (Np(), _p());
    }
  }
  function Yo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ba(n);
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
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
    return n;
  }
  var Au = !1;
  if (kn)
    try {
      var Xo = {};
      Object.defineProperty(Xo, "passive", {
        get: function () {
          Au = !0;
        },
      }),
        window.addEventListener("test", Xo, Xo),
        window.removeEventListener("test", Xo, Xo);
    } catch {
      Au = !1;
    }
  function Ov(e, t, n, r, o, i, a, s, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (f) {
      this.onError(f);
    }
  }
  var Qo = !1,
    ma = null,
    ga = !1,
    $u = null,
    Tv = {
      onError: function (e) {
        (Qo = !0), (ma = e);
      },
    };
  function _v(e, t, n, r, o, i, a, s, l) {
    (Qo = !1), (ma = null), Ov.apply(Tv, arguments);
  }
  function Rv(e, t, n, r, o, i, a, s, l) {
    if ((_v.apply(this, arguments), Qo)) {
      if (Qo) {
        var c = ma;
        (Qo = !1), (ma = null);
      } else throw Error(j(198));
      ga || ((ga = !0), ($u = c));
    }
  }
  function ur(e) {
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
  function Pp(e) {
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
  function Ap(e) {
    if (ur(e) !== e) throw Error(j(188));
  }
  function Nv(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ur(e)), t === null)) throw Error(j(188));
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
          if (i === n) return Ap(o), e;
          if (i === r) return Ap(o), t;
          i = i.sibling;
        }
        throw Error(j(188));
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
          if (!a) throw Error(j(189));
        }
      }
      if (n.alternate !== r) throw Error(j(190));
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t;
  }
  function $p(e) {
    return (e = Nv(e)), e !== null ? Mp(e) : null;
  }
  function Mp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Mp(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Lp = Nt.unstable_scheduleCallback,
    Bp = Nt.unstable_cancelCallback,
    Iv = Nt.unstable_shouldYield,
    Pv = Nt.unstable_requestPaint,
    qe = Nt.unstable_now,
    Av = Nt.unstable_getCurrentPriorityLevel,
    Mu = Nt.unstable_ImmediatePriority,
    zp = Nt.unstable_UserBlockingPriority,
    ya = Nt.unstable_NormalPriority,
    $v = Nt.unstable_LowPriority,
    Dp = Nt.unstable_IdlePriority,
    ba = null,
    un = null;
  function Mv(e) {
    if (un && typeof un.onCommitFiberRoot == "function")
      try {
        un.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Zt = Math.clz32 ? Math.clz32 : zv,
    Lv = Math.log,
    Bv = Math.LN2;
  function zv(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Lv(e) / Bv) | 0)) | 0;
  }
  var va = 64,
    wa = 4194304;
  function Zo(e) {
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
  function Sa(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var s = a & ~o;
      s !== 0 ? (r = Zo(s)) : ((i &= a), i !== 0 && (r = Zo(i)));
    } else (a = n & ~o), a !== 0 ? (r = Zo(a)) : i !== 0 && (r = Zo(i));
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
        (n = 31 - Zt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function Dv(e, t) {
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
  function Fv(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var a = 31 - Zt(i),
        s = 1 << a,
        l = o[a];
      l === -1
        ? (!(s & n) || s & r) && (o[a] = Dv(s, t))
        : l <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  }
  function Lu(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Fp() {
    var e = va;
    return (va <<= 1), !(va & 4194240) && (va = 64), e;
  }
  function Bu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ei(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Zt(t)),
      (e[t] = n);
  }
  function jv(e, t) {
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
      var o = 31 - Zt(n),
        i = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
  }
  function zu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Zt(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var xe = 0;
  function jp(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Up,
    Du,
    Wp,
    Vp,
    Hp,
    Fu = !1,
    xa = [],
    Bn = null,
    zn = null,
    Dn = null,
    ti = new Map(),
    ni = new Map(),
    Fn = [],
    Uv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function qp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        zn = null;
        break;
      case "mouseover":
      case "mouseout":
        Dn = null;
        break;
      case "pointerover":
      case "pointerout":
        ti.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ni.delete(t.pointerId);
    }
  }
  function ri(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = yi(t)), t !== null && Du(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Wv(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (Bn = ri(Bn, e, t, n, r, o)), !0;
      case "dragenter":
        return (zn = ri(zn, e, t, n, r, o)), !0;
      case "mouseover":
        return (Dn = ri(Dn, e, t, n, r, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return ti.set(i, ri(ti.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), ni.set(i, ri(ni.get(i) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function Kp(e) {
    var t = cr(e.target);
    if (t !== null) {
      var n = ur(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Pp(n)), t !== null)) {
            (e.blockedOn = t),
              Hp(e.priority, function () {
                Wp(n);
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
  function ka(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Ru = r), n.target.dispatchEvent(r), (Ru = null);
      } else return (t = yi(n)), t !== null && Du(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Jp(e, t, n) {
    ka(e) && n.delete(t);
  }
  function Vv() {
    (Fu = !1),
      Bn !== null && ka(Bn) && (Bn = null),
      zn !== null && ka(zn) && (zn = null),
      Dn !== null && ka(Dn) && (Dn = null),
      ti.forEach(Jp),
      ni.forEach(Jp);
  }
  function oi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Fu ||
        ((Fu = !0),
        Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, Vv)));
  }
  function ii(e) {
    function t(o) {
      return oi(o, e);
    }
    if (0 < xa.length) {
      oi(xa[0], e);
      for (var n = 1; n < xa.length; n++) {
        var r = xa[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Bn !== null && oi(Bn, e),
        zn !== null && oi(zn, e),
        Dn !== null && oi(Dn, e),
        ti.forEach(t),
        ni.forEach(t),
        n = 0;
      n < Fn.length;
      n++
    )
      (r = Fn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
      Kp(n), n.blockedOn === null && Fn.shift();
  }
  var Jr = En.ReactCurrentBatchConfig,
    Ea = !0;
  function Hv(e, t, n, r) {
    var o = xe,
      i = Jr.transition;
    Jr.transition = null;
    try {
      (xe = 1), ju(e, t, n, r);
    } finally {
      (xe = o), (Jr.transition = i);
    }
  }
  function qv(e, t, n, r) {
    var o = xe,
      i = Jr.transition;
    Jr.transition = null;
    try {
      (xe = 4), ju(e, t, n, r);
    } finally {
      (xe = o), (Jr.transition = i);
    }
  }
  function ju(e, t, n, r) {
    if (Ea) {
      var o = Uu(e, t, n, r);
      if (o === null) ic(e, t, r, Ca, n), qp(e, r);
      else if (Wv(o, e, t, n, r)) r.stopPropagation();
      else if ((qp(e, r), t & 4 && -1 < Uv.indexOf(e))) {
        for (; o !== null; ) {
          var i = yi(o);
          if (
            (i !== null && Up(i),
            (i = Uu(e, t, n, r)),
            i === null && ic(e, t, r, Ca, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else ic(e, t, r, null, n);
    }
  }
  var Ca = null;
  function Uu(e, t, n, r) {
    if (((Ca = null), (e = Nu(r)), (e = cr(e)), e !== null))
      if (((t = ur(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Pp(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ca = e), null;
  }
  function Gp(e) {
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
        switch (Av()) {
          case Mu:
            return 1;
          case zp:
            return 4;
          case ya:
          case $v:
            return 16;
          case Dp:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jn = null,
    Wu = null,
    Oa = null;
  function Yp() {
    if (Oa) return Oa;
    var e,
      t = Wu,
      n = t.length,
      r,
      o = "value" in jn ? jn.value : jn.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return (Oa = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ta(e) {
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
  function Xp() {
    return !1;
  }
  function It(e) {
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
          : Xp),
        (this.isPropagationStopped = Xp),
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
  var Gr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vu = It(Gr),
    ai = Be({}, Gr, { view: 0, detail: 0 }),
    Kv = It(ai),
    Hu,
    qu,
    si,
    Ra = Be({}, ai, {
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
      getModifierState: Ju,
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
          : (e !== si &&
              (si && e.type === "mousemove"
                ? ((Hu = e.screenX - si.screenX), (qu = e.screenY - si.screenY))
                : (qu = Hu = 0),
              (si = e)),
            Hu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : qu;
      },
    }),
    Qp = It(Ra),
    Jv = Be({}, Ra, { dataTransfer: 0 }),
    Gv = It(Jv),
    Yv = Be({}, ai, { relatedTarget: 0 }),
    Ku = It(Yv),
    Xv = Be({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qv = It(Xv),
    Zv = Be({}, Gr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    e1 = It(Zv),
    t1 = Be({}, Gr, { data: 0 }),
    Zp = It(t1),
    n1 = {
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
    r1 = {
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
    o1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function i1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = o1[e])
      ? !!t[e]
      : !1;
  }
  function Ju() {
    return i1;
  }
  var a1 = Be({}, ai, {
      key: function (e) {
        if (e.key) {
          var t = n1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ta(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? r1[e.keyCode] || "Unidentified"
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
      getModifierState: Ju,
      charCode: function (e) {
        return e.type === "keypress" ? Ta(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ta(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    s1 = It(a1),
    l1 = Be({}, Ra, {
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
    eh = It(l1),
    u1 = Be({}, ai, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ju,
    }),
    c1 = It(u1),
    d1 = Be({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f1 = It(d1),
    p1 = Be({}, Ra, {
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
    h1 = It(p1),
    m1 = [9, 13, 27, 32],
    Gu = kn && "CompositionEvent" in window,
    li = null;
  kn && "documentMode" in document && (li = document.documentMode);
  var g1 = kn && "TextEvent" in window && !li,
    th = kn && (!Gu || (li && 8 < li && 11 >= li)),
    nh = String.fromCharCode(32),
    rh = !1;
  function oh(e, t) {
    switch (e) {
      case "keyup":
        return m1.indexOf(t.keyCode) !== -1;
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
  function ih(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Yr = !1;
  function y1(e, t) {
    switch (e) {
      case "compositionend":
        return ih(t);
      case "keypress":
        return t.which !== 32 ? null : ((rh = !0), nh);
      case "textInput":
        return (e = t.data), e === nh && rh ? null : e;
      default:
        return null;
    }
  }
  function b1(e, t) {
    if (Yr)
      return e === "compositionend" || (!Gu && oh(e, t))
        ? ((e = Yp()), (Oa = Wu = jn = null), (Yr = !1), e)
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
        return th && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var v1 = {
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
  function ah(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!v1[e.type] : t === "textarea";
  }
  function sh(e, t, n, r) {
    Tp(r),
      (t = $a(t, "onChange")),
      0 < t.length &&
        ((n = new Vu("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ui = null,
    ci = null;
  function w1(e) {
    Ch(e, 0);
  }
  function Na(e) {
    var t = to(e);
    if (mp(t)) return e;
  }
  function S1(e, t) {
    if (e === "change") return t;
  }
  var lh = !1;
  if (kn) {
    var Yu;
    if (kn) {
      var Xu = "oninput" in document;
      if (!Xu) {
        var uh = document.createElement("div");
        uh.setAttribute("oninput", "return;"),
          (Xu = typeof uh.oninput == "function");
      }
      Yu = Xu;
    } else Yu = !1;
    lh = Yu && (!document.documentMode || 9 < document.documentMode);
  }
  function ch() {
    ui && (ui.detachEvent("onpropertychange", dh), (ci = ui = null));
  }
  function dh(e) {
    if (e.propertyName === "value" && Na(ci)) {
      var t = [];
      sh(t, ci, e, Nu(e)), Ip(w1, t);
    }
  }
  function x1(e, t, n) {
    e === "focusin"
      ? (ch(), (ui = t), (ci = n), ui.attachEvent("onpropertychange", dh))
      : e === "focusout" && ch();
  }
  function k1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Na(ci);
  }
  function E1(e, t) {
    if (e === "click") return Na(t);
  }
  function C1(e, t) {
    if (e === "input" || e === "change") return Na(t);
  }
  function O1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var en = typeof Object.is == "function" ? Object.is : O1;
  function di(e, t) {
    if (en(e, t)) return !0;
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
      if (!lu.call(t, o) || !en(e[o], t[o])) return !1;
    }
    return !0;
  }
  function fh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ph(e, t) {
    var n = fh(e);
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
      n = fh(n);
    }
  }
  function hh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? hh(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function mh() {
    for (var e = window, t = pa(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = pa(e.document);
    }
    return t;
  }
  function Qu(e) {
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
  function T1(e) {
    var t = mh(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      hh(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Qu(n)) {
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
            (o = ph(n, i));
          var a = ph(n, r);
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
  var _1 = kn && "documentMode" in document && 11 >= document.documentMode,
    Xr = null,
    Zu = null,
    fi = null,
    ec = !1;
  function gh(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ec ||
      Xr == null ||
      Xr !== pa(r) ||
      ((r = Xr),
      "selectionStart" in r && Qu(r)
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
      (fi && di(fi, r)) ||
        ((fi = r),
        (r = $a(Zu, "onSelect")),
        0 < r.length &&
          ((t = new Vu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Xr))));
  }
  function Ia(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Qr = {
      animationend: Ia("Animation", "AnimationEnd"),
      animationiteration: Ia("Animation", "AnimationIteration"),
      animationstart: Ia("Animation", "AnimationStart"),
      transitionend: Ia("Transition", "TransitionEnd"),
    },
    tc = {},
    yh = {};
  kn &&
    ((yh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Qr.animationend.animation,
      delete Qr.animationiteration.animation,
      delete Qr.animationstart.animation),
    "TransitionEvent" in window || delete Qr.transitionend.transition);
  function Pa(e) {
    if (tc[e]) return tc[e];
    if (!Qr[e]) return e;
    var t = Qr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in yh) return (tc[e] = t[n]);
    return e;
  }
  var bh = Pa("animationend"),
    vh = Pa("animationiteration"),
    wh = Pa("animationstart"),
    Sh = Pa("transitionend"),
    xh = new Map(),
    kh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Un(e, t) {
    xh.set(e, t), lr(t, [e]);
  }
  for (var nc = 0; nc < kh.length; nc++) {
    var rc = kh[nc],
      R1 = rc.toLowerCase(),
      N1 = rc[0].toUpperCase() + rc.slice(1);
    Un(R1, "on" + N1);
  }
  Un(bh, "onAnimationEnd"),
    Un(vh, "onAnimationIteration"),
    Un(wh, "onAnimationStart"),
    Un("dblclick", "onDoubleClick"),
    Un("focusin", "onFocus"),
    Un("focusout", "onBlur"),
    Un(Sh, "onTransitionEnd"),
    Ur("onMouseEnter", ["mouseout", "mouseover"]),
    Ur("onMouseLeave", ["mouseout", "mouseover"]),
    Ur("onPointerEnter", ["pointerout", "pointerover"]),
    Ur("onPointerLeave", ["pointerout", "pointerover"]),
    lr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    lr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    lr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    lr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    lr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var pi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    I1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(pi),
    );
  function Eh(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Rv(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ch(e, t) {
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
            Eh(o, s, c), (i = l);
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
            Eh(o, s, c), (i = l);
          }
      }
    }
    if (ga) throw ((e = $u), (ga = !1), ($u = null), e);
  }
  function Ne(e, t) {
    var n = t[dc];
    n === void 0 && (n = t[dc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Oh(t, e, 2, !1), n.add(r));
  }
  function oc(e, t, n) {
    var r = 0;
    t && (r |= 4), Oh(n, e, r, t);
  }
  var Aa = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(e) {
    if (!e[Aa]) {
      (e[Aa] = !0),
        sp.forEach(function (n) {
          n !== "selectionchange" && (I1.has(n) || oc(n, !1, e), oc(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Aa] || ((t[Aa] = !0), oc("selectionchange", !1, t));
    }
  }
  function Oh(e, t, n, r) {
    switch (Gp(t)) {
      case 1:
        var o = Hv;
        break;
      case 4:
        o = qv;
        break;
      default:
        o = ju;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Au ||
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
  function ic(e, t, n, r, o) {
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
            if (((a = cr(s)), a === null)) return;
            if (((l = a.tag), l === 5 || l === 6)) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Ip(function () {
      var c = i,
        f = Nu(n),
        p = [];
      e: {
        var h = xh.get(e);
        if (h !== void 0) {
          var v = Vu,
            g = e;
          switch (e) {
            case "keypress":
              if (Ta(n) === 0) break e;
            case "keydown":
            case "keyup":
              v = s1;
              break;
            case "focusin":
              (g = "focus"), (v = Ku);
              break;
            case "focusout":
              (g = "blur"), (v = Ku);
              break;
            case "beforeblur":
            case "afterblur":
              v = Ku;
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
              v = Qp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Gv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = c1;
              break;
            case bh:
            case vh:
            case wh:
              v = Qv;
              break;
            case Sh:
              v = f1;
              break;
            case "scroll":
              v = Kv;
              break;
            case "wheel":
              v = h1;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = e1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = eh;
          }
          var x = (t & 4) !== 0,
            N = !x && e === "scroll",
            w = x ? (h !== null ? h + "Capture" : null) : h;
          x = [];
          for (var b = c, y; b !== null; ) {
            y = b;
            var S = y.stateNode;
            if (
              (y.tag === 5 &&
                S !== null &&
                ((y = S),
                w !== null &&
                  ((S = Yo(b, w)), S != null && x.push(mi(b, S, y)))),
              N)
            )
              break;
            b = b.return;
          }
          0 < x.length &&
            ((h = new v(h, g, null, n, f)), p.push({ event: h, listeners: x }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (v = e === "mouseout" || e === "pointerout"),
            h &&
              n !== Ru &&
              (g = n.relatedTarget || n.fromElement) &&
              (cr(g) || g[Cn]))
          )
            break e;
          if (
            (v || h) &&
            ((h =
              f.window === f
                ? f
                : (h = f.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            v
              ? ((g = n.relatedTarget || n.toElement),
                (v = c),
                (g = g ? cr(g) : null),
                g !== null &&
                  ((N = ur(g)), g !== N || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((v = null), (g = c)),
            v !== g)
          ) {
            if (
              ((x = Qp),
              (S = "onMouseLeave"),
              (w = "onMouseEnter"),
              (b = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((x = eh),
                (S = "onPointerLeave"),
                (w = "onPointerEnter"),
                (b = "pointer")),
              (N = v == null ? h : to(v)),
              (y = g == null ? h : to(g)),
              (h = new x(S, b + "leave", v, n, f)),
              (h.target = N),
              (h.relatedTarget = y),
              (S = null),
              cr(f) === c &&
                ((x = new x(w, b + "enter", g, n, f)),
                (x.target = y),
                (x.relatedTarget = N),
                (S = x)),
              (N = S),
              v && g)
            )
              t: {
                for (x = v, w = g, b = 0, y = x; y; y = Zr(y)) b++;
                for (y = 0, S = w; S; S = Zr(S)) y++;
                for (; 0 < b - y; ) (x = Zr(x)), b--;
                for (; 0 < y - b; ) (w = Zr(w)), y--;
                for (; b--; ) {
                  if (x === w || (w !== null && x === w.alternate)) break t;
                  (x = Zr(x)), (w = Zr(w));
                }
                x = null;
              }
            else x = null;
            v !== null && Th(p, h, v, x, !1),
              g !== null && N !== null && Th(p, N, g, x, !0);
          }
        }
        e: {
          if (
            ((h = c ? to(c) : window),
            (v = h.nodeName && h.nodeName.toLowerCase()),
            v === "select" || (v === "input" && h.type === "file"))
          )
            var C = S1;
          else if (ah(h))
            if (lh) C = C1;
            else {
              C = k1;
              var T = x1;
            }
          else
            (v = h.nodeName) &&
              v.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (C = E1);
          if (C && (C = C(e, c))) {
            sh(p, C, n, f);
            break e;
          }
          T && T(e, h, c),
            e === "focusout" &&
              (T = h._wrapperState) &&
              T.controlled &&
              h.type === "number" &&
              Eu(h, "number", h.value);
        }
        switch (((T = c ? to(c) : window), e)) {
          case "focusin":
            (ah(T) || T.contentEditable === "true") &&
              ((Xr = T), (Zu = c), (fi = null));
            break;
          case "focusout":
            fi = Zu = Xr = null;
            break;
          case "mousedown":
            ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ec = !1), gh(p, n, f);
            break;
          case "selectionchange":
            if (_1) break;
          case "keydown":
          case "keyup":
            gh(p, n, f);
        }
        var _;
        if (Gu)
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
          Yr
            ? oh(e, n) && (I = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (I = "onCompositionStart");
        I &&
          (th &&
            n.locale !== "ko" &&
            (Yr || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && Yr && (_ = Yp())
              : ((jn = f),
                (Wu = "value" in jn ? jn.value : jn.textContent),
                (Yr = !0))),
          (T = $a(c, I)),
          0 < T.length &&
            ((I = new Zp(I, e, null, n, f)),
            p.push({ event: I, listeners: T }),
            _ ? (I.data = _) : ((_ = ih(n)), _ !== null && (I.data = _)))),
          (_ = g1 ? y1(e, n) : b1(e, n)) &&
            ((c = $a(c, "onBeforeInput")),
            0 < c.length &&
              ((f = new Zp("onBeforeInput", "beforeinput", null, n, f)),
              p.push({ event: f, listeners: c }),
              (f.data = _)));
      }
      Ch(p, t);
    });
  }
  function mi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $a(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = Yo(e, n)),
        i != null && r.unshift(mi(e, i, o)),
        (i = Yo(e, t)),
        i != null && r.push(mi(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function Zr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Th(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var s = n,
        l = s.alternate,
        c = s.stateNode;
      if (l !== null && l === r) break;
      s.tag === 5 &&
        c !== null &&
        ((s = c),
        o
          ? ((l = Yo(n, i)), l != null && a.unshift(mi(n, l, s)))
          : o || ((l = Yo(n, i)), l != null && a.push(mi(n, l, s)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var P1 = /\r\n?/g,
    A1 = /\u0000|\uFFFD/g;
  function _h(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        P1,
        `
`,
      )
      .replace(A1, "");
  }
  function Ma(e, t, n) {
    if (((t = _h(t)), _h(e) !== t && n)) throw Error(j(425));
  }
  function La() {}
  var ac = null,
    sc = null;
  function lc(e, t) {
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
  var uc = typeof setTimeout == "function" ? setTimeout : void 0,
    $1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rh = typeof Promise == "function" ? Promise : void 0,
    M1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rh < "u"
        ? function (e) {
            return Rh.resolve(null).then(e).catch(L1);
          }
        : uc;
  function L1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function cc(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), ii(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    ii(t);
  }
  function Wn(e) {
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
  function Nh(e) {
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
  var eo = Math.random().toString(36).slice(2),
    cn = "__reactFiber$" + eo,
    gi = "__reactProps$" + eo,
    Cn = "__reactContainer$" + eo,
    dc = "__reactEvents$" + eo,
    B1 = "__reactListeners$" + eo,
    z1 = "__reactHandles$" + eo;
  function cr(e) {
    var t = e[cn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Cn] || n[cn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Nh(e); e !== null; ) {
            if ((n = e[cn])) return n;
            e = Nh(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function yi(e) {
    return (
      (e = e[cn] || e[Cn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function to(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33));
  }
  function Ba(e) {
    return e[gi] || null;
  }
  var fc = [],
    no = -1;
  function Vn(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > no || ((e.current = fc[no]), (fc[no] = null), no--);
  }
  function Te(e, t) {
    no++, (fc[no] = e.current), (e.current = t);
  }
  var Hn = {},
    lt = Vn(Hn),
    bt = Vn(!1),
    dr = Hn;
  function ro(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Hn;
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
  function vt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function za() {
    Ie(bt), Ie(lt);
  }
  function Ih(e, t, n) {
    if (lt.current !== Hn) throw Error(j(168));
    Te(lt, t), Te(bt, n);
  }
  function Ph(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(j(108, xv(e) || "Unknown", o));
    return Be({}, n, r);
  }
  function Da(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Hn),
      (dr = lt.current),
      Te(lt, e),
      Te(bt, bt.current),
      !0
    );
  }
  function Ah(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(j(169));
    n
      ? ((e = Ph(e, t, dr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ie(bt),
        Ie(lt),
        Te(lt, e))
      : Ie(bt),
      Te(bt, n);
  }
  var On = null,
    Fa = !1,
    pc = !1;
  function $h(e) {
    On === null ? (On = [e]) : On.push(e);
  }
  function D1(e) {
    (Fa = !0), $h(e);
  }
  function qn() {
    if (!pc && On !== null) {
      pc = !0;
      var e = 0,
        t = xe;
      try {
        var n = On;
        for (xe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (On = null), (Fa = !1);
      } catch (o) {
        throw (On !== null && (On = On.slice(e + 1)), Lp(Mu, qn), o);
      } finally {
        (xe = t), (pc = !1);
      }
    }
    return null;
  }
  var oo = [],
    io = 0,
    ja = null,
    Ua = 0,
    Dt = [],
    Ft = 0,
    fr = null,
    Tn = 1,
    _n = "";
  function pr(e, t) {
    (oo[io++] = Ua), (oo[io++] = ja), (ja = e), (Ua = t);
  }
  function Mh(e, t, n) {
    (Dt[Ft++] = Tn), (Dt[Ft++] = _n), (Dt[Ft++] = fr), (fr = e);
    var r = Tn;
    e = _n;
    var o = 32 - Zt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Zt(t) + o;
    if (30 < i) {
      var a = o - (o % 5);
      (i = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (o -= a),
        (Tn = (1 << (32 - Zt(t) + o)) | (n << o) | r),
        (_n = i + e);
    } else (Tn = (1 << i) | (n << o) | r), (_n = e);
  }
  function hc(e) {
    e.return !== null && (pr(e, 1), Mh(e, 1, 0));
  }
  function mc(e) {
    for (; e === ja; )
      (ja = oo[--io]), (oo[io] = null), (Ua = oo[--io]), (oo[io] = null);
    for (; e === fr; )
      (fr = Dt[--Ft]),
        (Dt[Ft] = null),
        (_n = Dt[--Ft]),
        (Dt[Ft] = null),
        (Tn = Dt[--Ft]),
        (Dt[Ft] = null);
  }
  var Pt = null,
    At = null,
    $e = !1,
    tn = null;
  function Lh(e, t) {
    var n = Vt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Bh(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Pt = e), (At = Wn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Pt = e), (At = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = fr !== null ? { id: Tn, overflow: _n } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Vt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Pt = e),
              (At = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function gc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function yc(e) {
    if ($e) {
      var t = At;
      if (t) {
        var n = t;
        if (!Bh(e, t)) {
          if (gc(e)) throw Error(j(418));
          t = Wn(n.nextSibling);
          var r = Pt;
          t && Bh(e, t)
            ? Lh(r, n)
            : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Pt = e));
        }
      } else {
        if (gc(e)) throw Error(j(418));
        (e.flags = (e.flags & -4097) | 2), ($e = !1), (Pt = e);
      }
    }
  }
  function zh(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Pt = e;
  }
  function Wa(e) {
    if (e !== Pt) return !1;
    if (!$e) return zh(e), ($e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !lc(e.type, e.memoizedProps))),
      t && (t = At))
    ) {
      if (gc(e)) throw (Dh(), Error(j(418)));
      for (; t; ) Lh(e, t), (t = Wn(t.nextSibling));
    }
    if ((zh(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(j(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                At = Wn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        At = null;
      }
    } else At = Pt ? Wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Dh() {
    for (var e = At; e; ) e = Wn(e.nextSibling);
  }
  function ao() {
    (At = Pt = null), ($e = !1);
  }
  function bc(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  var F1 = En.ReactCurrentBatchConfig;
  function nn(e, t) {
    if (e && e.defaultProps) {
      (t = Be({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Va = Vn(null),
    Ha = null,
    so = null,
    vc = null;
  function wc() {
    vc = so = Ha = null;
  }
  function Sc(e) {
    var t = Va.current;
    Ie(Va), (e._currentValue = t);
  }
  function xc(e, t, n) {
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
  function lo(e, t) {
    (Ha = e),
      (vc = so = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (wt = !0), (e.firstContext = null));
  }
  function jt(e) {
    var t = e._currentValue;
    if (vc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), so === null)) {
        if (Ha === null) throw Error(j(308));
        (so = e), (Ha.dependencies = { lanes: 0, firstContext: e });
      } else so = so.next = e;
    return t;
  }
  var hr = null;
  function kc(e) {
    hr === null ? (hr = [e]) : hr.push(e);
  }
  function Fh(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), kc(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Rn(e, r)
    );
  }
  function Rn(e, t) {
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
  var Kn = !1;
  function Ec(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function jh(e, t) {
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
  function Nn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Jn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), me & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Rn(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), kc(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Rn(e, n)
    );
  }
  function qa(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
    }
  }
  function Uh(e, t) {
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
  function Ka(e, t, n, r) {
    var o = e.updateQueue;
    Kn = !1;
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
        var h = s.lane,
          v = s.eventTime;
        if ((r & h) === h) {
          f !== null &&
            (f = f.next =
              {
                eventTime: v,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var g = e,
              x = s;
            switch (((h = t), (v = n), x.tag)) {
              case 1:
                if (((g = x.payload), typeof g == "function")) {
                  p = g.call(v, p, h);
                  break e;
                }
                p = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = x.payload),
                  (h = typeof g == "function" ? g.call(v, p, h) : g),
                  h == null)
                )
                  break e;
                p = Be({}, p, h);
                break e;
              case 2:
                Kn = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (h = o.effects),
            h === null ? (o.effects = [s]) : h.push(s));
        } else
          (v = {
            eventTime: v,
            lane: h,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            f === null ? ((c = f = v), (l = p)) : (f = f.next = v),
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
      (yr |= a), (e.lanes = a), (e.memoizedState = p);
    }
  }
  function Wh(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(j(191, o));
          o.call(r);
        }
      }
  }
  var Vh = new ap.Component().refs;
  function Cc(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Be({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ja = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ur(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = gt(),
        o = Qn(e),
        i = Nn(r, o);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Jn(e, i, o)),
        t !== null && (an(t, e, o, r), qa(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = gt(),
        o = Qn(e),
        i = Nn(r, o);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Jn(e, i, o)),
        t !== null && (an(t, e, o, r), qa(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = gt(),
        r = Qn(e),
        o = Nn(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = Jn(e, o, r)),
        t !== null && (an(t, e, r, n), qa(t, e, r));
    },
  };
  function Hh(e, t, n, r, o, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !di(n, r) || !di(o, i)
        : !0
    );
  }
  function qh(e, t, n) {
    var r = !1,
      o = Hn,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = jt(i))
        : ((o = vt(t) ? dr : lt.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? ro(e, o) : Hn)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ja),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Kh(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ja.enqueueReplaceState(t, t.state, null);
  }
  function Oc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = Vh), Ec(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = jt(i))
      : ((i = vt(t) ? dr : lt.current), (o.context = ro(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Cc(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Ja.enqueueReplaceState(o, o.state, null),
        Ka(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function bi(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(j(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(j(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var s = o.refs;
              s === Vh && (s = o.refs = {}),
                a === null ? delete s[i] : (s[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(j(284));
      if (!n._owner) throw Error(j(290, e));
    }
    return e;
  }
  function Ga(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        j(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Jh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Gh(e) {
    function t(w, b) {
      if (e) {
        var y = w.deletions;
        y === null ? ((w.deletions = [b]), (w.flags |= 16)) : y.push(b);
      }
    }
    function n(w, b) {
      if (!e) return null;
      for (; b !== null; ) t(w, b), (b = b.sibling);
      return null;
    }
    function r(w, b) {
      for (w = new Map(); b !== null; )
        b.key !== null ? w.set(b.key, b) : w.set(b.index, b), (b = b.sibling);
      return w;
    }
    function o(w, b) {
      return (w = er(w, b)), (w.index = 0), (w.sibling = null), w;
    }
    function i(w, b, y) {
      return (
        (w.index = y),
        e
          ? ((y = w.alternate),
            y !== null
              ? ((y = y.index), y < b ? ((w.flags |= 2), b) : y)
              : ((w.flags |= 2), b))
          : ((w.flags |= 1048576), b)
      );
    }
    function a(w) {
      return e && w.alternate === null && (w.flags |= 2), w;
    }
    function s(w, b, y, S) {
      return b === null || b.tag !== 6
        ? ((b = ld(y, w.mode, S)), (b.return = w), b)
        : ((b = o(b, y)), (b.return = w), b);
    }
    function l(w, b, y, S) {
      var C = y.type;
      return C === Vr
        ? f(w, b, y.props.children, S, y.key)
        : b !== null &&
          (b.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Mn &&
              Jh(C) === b.type))
        ? ((S = o(b, y.props)), (S.ref = bi(w, b, y)), (S.return = w), S)
        : ((S = hs(y.type, y.key, y.props, null, w.mode, S)),
          (S.ref = bi(w, b, y)),
          (S.return = w),
          S);
    }
    function c(w, b, y, S) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== y.containerInfo ||
        b.stateNode.implementation !== y.implementation
        ? ((b = ud(y, w.mode, S)), (b.return = w), b)
        : ((b = o(b, y.children || [])), (b.return = w), b);
    }
    function f(w, b, y, S, C) {
      return b === null || b.tag !== 7
        ? ((b = Sr(y, w.mode, S, C)), (b.return = w), b)
        : ((b = o(b, y)), (b.return = w), b);
    }
    function p(w, b, y) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return (b = ld("" + b, w.mode, y)), (b.return = w), b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case da:
            return (
              (y = hs(b.type, b.key, b.props, null, w.mode, y)),
              (y.ref = bi(w, null, b)),
              (y.return = w),
              y
            );
          case Wr:
            return (b = ud(b, w.mode, y)), (b.return = w), b;
          case Mn:
            var S = b._init;
            return p(w, S(b._payload), y);
        }
        if (Ko(b) || Ho(b))
          return (b = Sr(b, w.mode, y, null)), (b.return = w), b;
        Ga(w, b);
      }
      return null;
    }
    function h(w, b, y, S) {
      var C = b !== null ? b.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return C !== null ? null : s(w, b, "" + y, S);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case da:
            return y.key === C ? l(w, b, y, S) : null;
          case Wr:
            return y.key === C ? c(w, b, y, S) : null;
          case Mn:
            return (C = y._init), h(w, b, C(y._payload), S);
        }
        if (Ko(y) || Ho(y)) return C !== null ? null : f(w, b, y, S, null);
        Ga(w, y);
      }
      return null;
    }
    function v(w, b, y, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (w = w.get(y) || null), s(b, w, "" + S, C);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case da:
            return (
              (w = w.get(S.key === null ? y : S.key) || null), l(b, w, S, C)
            );
          case Wr:
            return (
              (w = w.get(S.key === null ? y : S.key) || null), c(b, w, S, C)
            );
          case Mn:
            var T = S._init;
            return v(w, b, y, T(S._payload), C);
        }
        if (Ko(S) || Ho(S)) return (w = w.get(y) || null), f(b, w, S, C, null);
        Ga(b, S);
      }
      return null;
    }
    function g(w, b, y, S) {
      for (
        var C = null, T = null, _ = b, I = (b = 0), B = null;
        _ !== null && I < y.length;
        I++
      ) {
        _.index > I ? ((B = _), (_ = null)) : (B = _.sibling);
        var M = h(w, _, y[I], S);
        if (M === null) {
          _ === null && (_ = B);
          break;
        }
        e && _ && M.alternate === null && t(w, _),
          (b = i(M, b, I)),
          T === null ? (C = M) : (T.sibling = M),
          (T = M),
          (_ = B);
      }
      if (I === y.length) return n(w, _), $e && pr(w, I), C;
      if (_ === null) {
        for (; I < y.length; I++)
          (_ = p(w, y[I], S)),
            _ !== null &&
              ((b = i(_, b, I)),
              T === null ? (C = _) : (T.sibling = _),
              (T = _));
        return $e && pr(w, I), C;
      }
      for (_ = r(w, _); I < y.length; I++)
        (B = v(_, w, I, y[I], S)),
          B !== null &&
            (e && B.alternate !== null && _.delete(B.key === null ? I : B.key),
            (b = i(B, b, I)),
            T === null ? (C = B) : (T.sibling = B),
            (T = B));
      return (
        e &&
          _.forEach(function (U) {
            return t(w, U);
          }),
        $e && pr(w, I),
        C
      );
    }
    function x(w, b, y, S) {
      var C = Ho(y);
      if (typeof C != "function") throw Error(j(150));
      if (((y = C.call(y)), y == null)) throw Error(j(151));
      for (
        var T = (C = null), _ = b, I = (b = 0), B = null, M = y.next();
        _ !== null && !M.done;
        I++, M = y.next()
      ) {
        _.index > I ? ((B = _), (_ = null)) : (B = _.sibling);
        var U = h(w, _, M.value, S);
        if (U === null) {
          _ === null && (_ = B);
          break;
        }
        e && _ && U.alternate === null && t(w, _),
          (b = i(U, b, I)),
          T === null ? (C = U) : (T.sibling = U),
          (T = U),
          (_ = B);
      }
      if (M.done) return n(w, _), $e && pr(w, I), C;
      if (_ === null) {
        for (; !M.done; I++, M = y.next())
          (M = p(w, M.value, S)),
            M !== null &&
              ((b = i(M, b, I)),
              T === null ? (C = M) : (T.sibling = M),
              (T = M));
        return $e && pr(w, I), C;
      }
      for (_ = r(w, _); !M.done; I++, M = y.next())
        (M = v(_, w, I, M.value, S)),
          M !== null &&
            (e && M.alternate !== null && _.delete(M.key === null ? I : M.key),
            (b = i(M, b, I)),
            T === null ? (C = M) : (T.sibling = M),
            (T = M));
      return (
        e &&
          _.forEach(function (F) {
            return t(w, F);
          }),
        $e && pr(w, I),
        C
      );
    }
    function N(w, b, y, S) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === Vr &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case da:
            e: {
              for (var C = y.key, T = b; T !== null; ) {
                if (T.key === C) {
                  if (((C = y.type), C === Vr)) {
                    if (T.tag === 7) {
                      n(w, T.sibling),
                        (b = o(T, y.props.children)),
                        (b.return = w),
                        (w = b);
                      break e;
                    }
                  } else if (
                    T.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Mn &&
                      Jh(C) === T.type)
                  ) {
                    n(w, T.sibling),
                      (b = o(T, y.props)),
                      (b.ref = bi(w, T, y)),
                      (b.return = w),
                      (w = b);
                    break e;
                  }
                  n(w, T);
                  break;
                } else t(w, T);
                T = T.sibling;
              }
              y.type === Vr
                ? ((b = Sr(y.props.children, w.mode, S, y.key)),
                  (b.return = w),
                  (w = b))
                : ((S = hs(y.type, y.key, y.props, null, w.mode, S)),
                  (S.ref = bi(w, b, y)),
                  (S.return = w),
                  (w = S));
            }
            return a(w);
          case Wr:
            e: {
              for (T = y.key; b !== null; ) {
                if (b.key === T)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === y.containerInfo &&
                    b.stateNode.implementation === y.implementation
                  ) {
                    n(w, b.sibling),
                      (b = o(b, y.children || [])),
                      (b.return = w),
                      (w = b);
                    break e;
                  } else {
                    n(w, b);
                    break;
                  }
                else t(w, b);
                b = b.sibling;
              }
              (b = ud(y, w.mode, S)), (b.return = w), (w = b);
            }
            return a(w);
          case Mn:
            return (T = y._init), N(w, b, T(y._payload), S);
        }
        if (Ko(y)) return g(w, b, y, S);
        if (Ho(y)) return x(w, b, y, S);
        Ga(w, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number"
        ? ((y = "" + y),
          b !== null && b.tag === 6
            ? (n(w, b.sibling), (b = o(b, y)), (b.return = w), (w = b))
            : (n(w, b), (b = ld(y, w.mode, S)), (b.return = w), (w = b)),
          a(w))
        : n(w, b);
    }
    return N;
  }
  var uo = Gh(!0),
    Yh = Gh(!1),
    vi = {},
    dn = Vn(vi),
    wi = Vn(vi),
    Si = Vn(vi);
  function mr(e) {
    if (e === vi) throw Error(j(174));
    return e;
  }
  function Tc(e, t) {
    switch ((Te(Si, t), Te(wi, e), Te(dn, vi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ou(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ou(t, e));
    }
    Ie(dn), Te(dn, t);
  }
  function co() {
    Ie(dn), Ie(wi), Ie(Si);
  }
  function Xh(e) {
    mr(Si.current);
    var t = mr(dn.current),
      n = Ou(t, e.type);
    t !== n && (Te(wi, e), Te(dn, n));
  }
  function _c(e) {
    wi.current === e && (Ie(dn), Ie(wi));
  }
  var ze = Vn(0);
  function Ya(e) {
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
  var Rc = [];
  function Nc() {
    for (var e = 0; e < Rc.length; e++)
      Rc[e]._workInProgressVersionPrimary = null;
    Rc.length = 0;
  }
  var Xa = En.ReactCurrentDispatcher,
    Ic = En.ReactCurrentBatchConfig,
    gr = 0,
    De = null,
    Ge = null,
    Xe = null,
    Qa = !1,
    xi = !1,
    ki = 0,
    j1 = 0;
  function ut() {
    throw Error(j(321));
  }
  function Pc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!en(e[n], t[n])) return !1;
    return !0;
  }
  function Ac(e, t, n, r, o, i) {
    if (
      ((gr = i),
      (De = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Xa.current = e === null || e.memoizedState === null ? H1 : q1),
      (e = n(r, o)),
      xi)
    ) {
      i = 0;
      do {
        if (((xi = !1), (ki = 0), 25 <= i)) throw Error(j(301));
        (i += 1),
          (Xe = Ge = null),
          (t.updateQueue = null),
          (Xa.current = K1),
          (e = n(r, o));
      } while (xi);
    }
    if (
      ((Xa.current = ts),
      (t = Ge !== null && Ge.next !== null),
      (gr = 0),
      (Xe = Ge = De = null),
      (Qa = !1),
      t)
    )
      throw Error(j(300));
    return e;
  }
  function $c() {
    var e = ki !== 0;
    return (ki = 0), e;
  }
  function fn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xe === null ? (De.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
  }
  function Ut() {
    if (Ge === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = Xe === null ? De.memoizedState : Xe.next;
    if (t !== null) (Xe = t), (Ge = e);
    else {
      if (e === null) throw Error(j(310));
      (Ge = e),
        (e = {
          memoizedState: Ge.memoizedState,
          baseState: Ge.baseState,
          baseQueue: Ge.baseQueue,
          queue: Ge.queue,
          next: null,
        }),
        Xe === null ? (De.memoizedState = Xe = e) : (Xe = Xe.next = e);
    }
    return Xe;
  }
  function Ei(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Mc(e) {
    var t = Ut(),
      n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Ge,
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
        if ((gr & f) === f)
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
            (De.lanes |= f),
            (yr |= f);
        }
        c = c.next;
      } while (c !== null && c !== i);
      l === null ? (a = r) : (l.next = s),
        en(r, t.memoizedState) || (wt = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (De.lanes |= i), (yr |= i), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Lc(e) {
    var t = Ut(),
      n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = (o = o.next);
      do (i = e(i, a.action)), (a = a.next);
      while (a !== o);
      en(i, t.memoizedState) || (wt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Qh() {}
  function Zh(e, t) {
    var n = De,
      r = Ut(),
      o = t(),
      i = !en(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (wt = !0)),
      (r = r.queue),
      Bc(nm.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Ci(9, tm.bind(null, n, r, o, t), void 0, null),
        Qe === null)
      )
        throw Error(j(349));
      gr & 30 || em(n, t, o);
    }
    return o;
  }
  function em(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = De.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (De.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function tm(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), rm(t) && om(e);
  }
  function nm(e, t, n) {
    return n(function () {
      rm(t) && om(e);
    });
  }
  function rm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !en(e, n);
    } catch {
      return !0;
    }
  }
  function om(e) {
    var t = Rn(e, 1);
    t !== null && an(t, e, 1, -1);
  }
  function im(e) {
    var t = fn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ei,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = V1.bind(null, De, e)),
      [t.memoizedState, e]
    );
  }
  function Ci(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = De.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (De.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function am() {
    return Ut().memoizedState;
  }
  function Za(e, t, n, r) {
    var o = fn();
    (De.flags |= e),
      (o.memoizedState = Ci(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function es(e, t, n, r) {
    var o = Ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ge !== null) {
      var a = Ge.memoizedState;
      if (((i = a.destroy), r !== null && Pc(r, a.deps))) {
        o.memoizedState = Ci(t, n, i, r);
        return;
      }
    }
    (De.flags |= e), (o.memoizedState = Ci(1 | t, n, i, r));
  }
  function sm(e, t) {
    return Za(8390656, 8, e, t);
  }
  function Bc(e, t) {
    return es(2048, 8, e, t);
  }
  function lm(e, t) {
    return es(4, 2, e, t);
  }
  function um(e, t) {
    return es(4, 4, e, t);
  }
  function cm(e, t) {
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
  function dm(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), es(4, 4, cm.bind(null, t, e), n)
    );
  }
  function zc() {}
  function fm(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pc(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function pm(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pc(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function hm(e, t, n) {
    return gr & 21
      ? (en(n, t) ||
          ((n = Fp()), (De.lanes |= n), (yr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n));
  }
  function U1(e, t) {
    var n = xe;
    (xe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ic.transition;
    Ic.transition = {};
    try {
      e(!1), t();
    } finally {
      (xe = n), (Ic.transition = r);
    }
  }
  function mm() {
    return Ut().memoizedState;
  }
  function W1(e, t, n) {
    var r = Qn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gm(e))
    )
      ym(t, n);
    else if (((n = Fh(e, t, n, r)), n !== null)) {
      var o = gt();
      an(n, e, r, o), bm(n, t, r);
    }
  }
  function V1(e, t, n) {
    var r = Qn(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (gm(e)) ym(t, o);
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
          if (((o.hasEagerState = !0), (o.eagerState = s), en(s, a))) {
            var l = t.interleaved;
            l === null
              ? ((o.next = o), kc(t))
              : ((o.next = l.next), (l.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = Fh(e, t, o, r)),
        n !== null && ((o = gt()), an(n, e, r, o), bm(n, t, r));
    }
  }
  function gm(e) {
    var t = e.alternate;
    return e === De || (t !== null && t === De);
  }
  function ym(e, t) {
    xi = Qa = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function bm(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
    }
  }
  var ts = {
      readContext: jt,
      useCallback: ut,
      useContext: ut,
      useEffect: ut,
      useImperativeHandle: ut,
      useInsertionEffect: ut,
      useLayoutEffect: ut,
      useMemo: ut,
      useReducer: ut,
      useRef: ut,
      useState: ut,
      useDebugValue: ut,
      useDeferredValue: ut,
      useTransition: ut,
      useMutableSource: ut,
      useSyncExternalStore: ut,
      useId: ut,
      unstable_isNewReconciler: !1,
    },
    H1 = {
      readContext: jt,
      useCallback: function (e, t) {
        return (fn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: jt,
      useEffect: sm,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Za(4194308, 4, cm.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Za(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Za(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = fn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = fn();
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
          (e = e.dispatch = W1.bind(null, De, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = fn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: im,
      useDebugValue: zc,
      useDeferredValue: function (e) {
        return (fn().memoizedState = e);
      },
      useTransition: function () {
        var e = im(!1),
          t = e[0];
        return (e = U1.bind(null, e[1])), (fn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = De,
          o = fn();
        if ($e) {
          if (n === void 0) throw Error(j(407));
          n = n();
        } else {
          if (((n = t()), Qe === null)) throw Error(j(349));
          gr & 30 || em(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          sm(nm.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Ci(9, tm.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = fn(),
          t = Qe.identifierPrefix;
        if ($e) {
          var n = _n,
            r = Tn;
          (n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ki++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = j1++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    q1 = {
      readContext: jt,
      useCallback: fm,
      useContext: jt,
      useEffect: Bc,
      useImperativeHandle: dm,
      useInsertionEffect: lm,
      useLayoutEffect: um,
      useMemo: pm,
      useReducer: Mc,
      useRef: am,
      useState: function () {
        return Mc(Ei);
      },
      useDebugValue: zc,
      useDeferredValue: function (e) {
        var t = Ut();
        return hm(t, Ge.memoizedState, e);
      },
      useTransition: function () {
        var e = Mc(Ei)[0],
          t = Ut().memoizedState;
        return [e, t];
      },
      useMutableSource: Qh,
      useSyncExternalStore: Zh,
      useId: mm,
      unstable_isNewReconciler: !1,
    },
    K1 = {
      readContext: jt,
      useCallback: fm,
      useContext: jt,
      useEffect: Bc,
      useImperativeHandle: dm,
      useInsertionEffect: lm,
      useLayoutEffect: um,
      useMemo: pm,
      useReducer: Lc,
      useRef: am,
      useState: function () {
        return Lc(Ei);
      },
      useDebugValue: zc,
      useDeferredValue: function (e) {
        var t = Ut();
        return Ge === null ? (t.memoizedState = e) : hm(t, Ge.memoizedState, e);
      },
      useTransition: function () {
        var e = Lc(Ei)[0],
          t = Ut().memoizedState;
        return [e, t];
      },
      useMutableSource: Qh,
      useSyncExternalStore: Zh,
      useId: mm,
      unstable_isNewReconciler: !1,
    };
  function fo(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Sv(r)), (r = r.return);
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
  function Fc(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var J1 = typeof WeakMap == "function" ? WeakMap : Map;
  function vm(e, t, n) {
    (n = Nn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        ls || ((ls = !0), (ed = r)), Fc(e, t);
      }),
      n
    );
  }
  function wm(e, t, n) {
    (n = Nn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          Fc(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Fc(e, t),
            typeof r != "function" &&
              (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function Sm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new J1();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = lw.bind(null, e, t, n)), t.then(e, e));
  }
  function xm(e) {
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
  function km(e, t, n, r, o) {
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
                : ((t = Nn(-1, 1)), (t.tag = 2), Jn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var G1 = En.ReactCurrentOwner,
    wt = !1;
  function mt(e, t, n, r) {
    t.child = e === null ? Yh(t, null, n, r) : uo(t, e.child, n, r);
  }
  function Em(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      lo(t, o),
      (r = Ac(e, t, n, r, i, o)),
      (n = $c()),
      e !== null && !wt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          In(e, t, o))
        : ($e && n && hc(t), (t.flags |= 1), mt(e, t, r, o), t.child)
    );
  }
  function Cm(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !sd(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Om(e, t, i, r, o))
        : ((e = hs(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var a = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : di), n(a, r) && e.ref === t.ref)
      )
        return In(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = er(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Om(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (di(i, r) && e.ref === t.ref)
        if (((wt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (wt = !0);
        else return (t.lanes = e.lanes), In(e, t, o);
    }
    return jc(e, t, n, r, o);
  }
  function Tm(e, t, n) {
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
          Te(ho, $t),
          ($t |= n);
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
            Te(ho, $t),
            ($t |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          Te(ho, $t),
          ($t |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Te(ho, $t),
        ($t |= r);
    return mt(e, t, o, n), t.child;
  }
  function _m(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function jc(e, t, n, r, o) {
    var i = vt(n) ? dr : lt.current;
    return (
      (i = ro(t, i)),
      lo(t, o),
      (n = Ac(e, t, n, r, i, o)),
      (r = $c()),
      e !== null && !wt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          In(e, t, o))
        : ($e && r && hc(t), (t.flags |= 1), mt(e, t, n, o), t.child)
    );
  }
  function Rm(e, t, n, r, o) {
    if (vt(n)) {
      var i = !0;
      Da(t);
    } else i = !1;
    if ((lo(t, o), t.stateNode === null))
      rs(e, t), qh(t, n, r), Oc(t, n, r, o), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var l = a.context,
        c = n.contextType;
      typeof c == "object" && c !== null
        ? (c = jt(c))
        : ((c = vt(n) ? dr : lt.current), (c = ro(t, c)));
      var f = n.getDerivedStateFromProps,
        p =
          typeof f == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      p ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== r || l !== c) && Kh(t, a, r, c)),
        (Kn = !1);
      var h = t.memoizedState;
      (a.state = h),
        Ka(t, r, a, o),
        (l = t.memoizedState),
        s !== r || h !== l || bt.current || Kn
          ? (typeof f == "function" && (Cc(t, n, f, r), (l = t.memoizedState)),
            (s = Kn || Hh(t, n, s, r, h, l, c))
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
        jh(e, t),
        (s = t.memoizedProps),
        (c = t.type === t.elementType ? s : nn(t.type, s)),
        (a.props = c),
        (p = t.pendingProps),
        (h = a.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = jt(l))
          : ((l = vt(n) ? dr : lt.current), (l = ro(t, l)));
      var v = n.getDerivedStateFromProps;
      (f =
        typeof v == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== p || h !== l) && Kh(t, a, r, l)),
        (Kn = !1),
        (h = t.memoizedState),
        (a.state = h),
        Ka(t, r, a, o);
      var g = t.memoizedState;
      s !== p || h !== g || bt.current || Kn
        ? (typeof v == "function" && (Cc(t, n, v, r), (g = t.memoizedState)),
          (c = Kn || Hh(t, n, c, r, h, g, l) || !1)
            ? (f ||
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
          (r = c))
        : (typeof a.componentDidUpdate != "function" ||
            (s === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Uc(e, t, n, r, i, o);
  }
  function Uc(e, t, n, r, o, i) {
    _m(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && Ah(t, n, !1), In(e, t, i);
    (r = t.stateNode), (G1.current = t);
    var s =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = uo(t, e.child, null, i)), (t.child = uo(t, null, s, i)))
        : mt(e, t, s, i),
      (t.memoizedState = r.state),
      o && Ah(t, n, !0),
      t.child
    );
  }
  function Nm(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ih(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ih(e, t.context, !1),
      Tc(e, t.containerInfo);
  }
  function Im(e, t, n, r, o) {
    return ao(), bc(o), (t.flags |= 256), mt(e, t, n, r), t.child;
  }
  var Wc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Pm(e, t, n) {
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
      Te(ze, o & 1),
      e === null)
    )
      return (
        yc(t),
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
                  : (i = ms(a, r, 0, null)),
                (e = Sr(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Vc(n)),
                (t.memoizedState = Wc),
                e)
              : Hc(t, a))
      );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
      return Y1(e, t, a, r, s, o, n);
    if (i) {
      (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(a & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = er(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        s !== null ? (i = er(s, i)) : ((i = Sr(i, a, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? Vc(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Wc),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = er(i, { mode: "visible", children: r.children })),
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
  function Hc(e, t) {
    return (
      (t = ms({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ns(e, t, n, r) {
    return (
      r !== null && bc(r),
      uo(t, e.child, null, n),
      (e = Hc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Y1(e, t, n, r, o, i, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Dc(Error(j(422)))), ns(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ms({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Sr(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && uo(t, e.child, null, a),
          (t.child.memoizedState = Vc(a)),
          (t.memoizedState = Wc),
          i);
    if (!(t.mode & 1)) return ns(e, t, a, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (i = Error(j(419))), (r = Dc(i, r, void 0)), ns(e, t, a, r)
      );
    }
    if (((s = (a & e.childLanes) !== 0), wt || s)) {
      if (((r = Qe), r !== null)) {
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
            ((i.retryLane = o), Rn(e, o), an(r, e, o, -1));
      }
      return ad(), (r = Dc(Error(j(421)))), ns(e, t, a, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = uw.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (At = Wn(o.nextSibling)),
        (Pt = t),
        ($e = !0),
        (tn = null),
        e !== null &&
          ((Dt[Ft++] = Tn),
          (Dt[Ft++] = _n),
          (Dt[Ft++] = fr),
          (Tn = e.id),
          (_n = e.overflow),
          (fr = t)),
        (t = Hc(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Am(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), xc(e.return, t, n);
  }
  function qc(e, t, n, r, o) {
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
  function $m(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((mt(e, t, r.children, n), (r = ze.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Am(e, n, t);
          else if (e.tag === 19) Am(e, n, t);
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
    if ((Te(ze, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && Ya(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            qc(t, !1, o, n, i);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && Ya(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          qc(t, !0, n, null, i);
          break;
        case "together":
          qc(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function rs(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function In(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (yr |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
      for (
        e = t.child, n = er(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = er(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function X1(e, t, n) {
    switch (t.tag) {
      case 3:
        Nm(t), ao();
        break;
      case 5:
        Xh(t);
        break;
      case 1:
        vt(t.type) && Da(t);
        break;
      case 4:
        Tc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        Te(Va, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Te(ze, ze.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Pm(e, t, n)
            : (Te(ze, ze.current & 1),
              (e = In(e, t, n)),
              e !== null ? e.sibling : null);
        Te(ze, ze.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return $m(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Te(ze, ze.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Tm(e, t, n);
    }
    return In(e, t, n);
  }
  var Mm, Kc, Lm, Bm;
  (Mm = function (e, t) {
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
    (Kc = function () {}),
    (Lm = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), mr(dn.current);
        var i = null;
        switch (n) {
          case "input":
            (o = xu(e, o)), (r = xu(e, r)), (i = []);
            break;
          case "select":
            (o = Be({}, o, { value: void 0 })),
              (r = Be({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (o = Cu(e, o)), (r = Cu(e, r)), (i = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = La);
        }
        Tu(n, r);
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
                (Vo.hasOwnProperty(c)
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
                  (Vo.hasOwnProperty(c)
                    ? (l != null && c === "onScroll" && Ne("scroll", e),
                      i || s === l || (i = []))
                    : (i = i || []).push(c, l));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4);
      }
    }),
    (Bm = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Oi(e, t) {
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
  function ct(e) {
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
  function Q1(e, t, n) {
    var r = t.pendingProps;
    switch ((mc(t), t.tag)) {
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
        return ct(t), null;
      case 1:
        return vt(t.type) && za(), ct(t), null;
      case 3:
        return (
          (r = t.stateNode),
          co(),
          Ie(bt),
          Ie(lt),
          Nc(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Wa(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), tn !== null && (rd(tn), (tn = null)))),
          Kc(e, t),
          ct(t),
          null
        );
      case 5:
        _c(t);
        var o = mr(Si.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Lm(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(j(166));
            return ct(t), null;
          }
          if (((e = mr(dn.current)), Wa(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[cn] = t), (r[gi] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Ne("cancel", r), Ne("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < pi.length; o++) Ne(pi[o], r);
                break;
              case "source":
                Ne("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ne("error", r), Ne("load", r);
                break;
              case "details":
                Ne("toggle", r);
                break;
              case "input":
                gp(r, i), Ne("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  Ne("invalid", r);
                break;
              case "textarea":
                vp(r, i), Ne("invalid", r);
            }
            Tu(n, i), (o = null);
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var s = i[a];
                a === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Ma(r.textContent, s, e),
                      (o = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Ma(r.textContent, s, e),
                      (o = ["children", "" + s]))
                  : Vo.hasOwnProperty(a) &&
                    s != null &&
                    a === "onScroll" &&
                    Ne("scroll", r);
              }
            switch (n) {
              case "input":
                fa(r), bp(r, i, !0);
                break;
              case "textarea":
                fa(r), Sp(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = La);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = xp(n)),
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
              (e[cn] = t),
              (e[gi] = r),
              Mm(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = _u(n, r)), n)) {
                case "dialog":
                  Ne("cancel", e), Ne("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ne("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < pi.length; o++) Ne(pi[o], e);
                  o = r;
                  break;
                case "source":
                  Ne("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Ne("error", e), Ne("load", e), (o = r);
                  break;
                case "details":
                  Ne("toggle", e), (o = r);
                  break;
                case "input":
                  gp(e, r), (o = xu(e, r)), Ne("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = Be({}, r, { value: void 0 })),
                    Ne("invalid", e);
                  break;
                case "textarea":
                  vp(e, r), (o = Cu(e, r)), Ne("invalid", e);
                  break;
                default:
                  o = r;
              }
              Tu(n, o), (s = o);
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var l = s[i];
                  i === "style"
                    ? Cp(e, l)
                    : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && kp(e, l))
                    : i === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Jo(e, l)
                      : typeof l == "number" && Jo(e, "" + l)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (Vo.hasOwnProperty(i)
                        ? l != null && i === "onScroll" && Ne("scroll", e)
                        : l != null && du(e, i, l, a));
                }
              switch (n) {
                case "input":
                  fa(e), bp(e, r, !1);
                  break;
                case "textarea":
                  fa(e), Sp(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Ln(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Hr(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        Hr(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = La);
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
        return ct(t), null;
      case 6:
        if (e && t.stateNode != null) Bm(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
          if (((n = mr(Si.current)), mr(dn.current), Wa(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[cn] = t),
              (i = r.nodeValue !== n) && ((e = Pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ma(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ma(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[cn] = t),
              (t.stateNode = r);
        }
        return ct(t), null;
      case 13:
        if (
          (Ie(ze),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if ($e && At !== null && t.mode & 1 && !(t.flags & 128))
            Dh(), ao(), (t.flags |= 98560), (i = !1);
          else if (((i = Wa(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(j(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(j(317));
              i[cn] = t;
            } else
              ao(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            ct(t), (i = !1);
          } else tn !== null && (rd(tn), (tn = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ze.current & 1 ? Ye === 0 && (Ye = 3) : ad())),
            t.updateQueue !== null && (t.flags |= 4),
            ct(t),
            null);
      case 4:
        return (
          co(),
          Kc(e, t),
          e === null && hi(t.stateNode.containerInfo),
          ct(t),
          null
        );
      case 10:
        return Sc(t.type._context), ct(t), null;
      case 17:
        return vt(t.type) && za(), ct(t), null;
      case 19:
        if ((Ie(ze), (i = t.memoizedState), i === null)) return ct(t), null;
        if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (r) Oi(i, !1);
          else {
            if (Ye !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = Ya(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      Oi(i, !1),
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
                  return Te(ze, (ze.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              qe() > mo &&
              ((t.flags |= 128), (r = !0), Oi(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Ya(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Oi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !$e)
              )
                return ct(t), null;
            } else
              2 * qe() - i.renderingStartTime > mo &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Oi(i, !1), (t.lanes = 4194304));
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
            Te(ze, r ? (n & 1) | 2 : n & 1),
            t)
          : (ct(t), null);
      case 22:
      case 23:
        return (
          id(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? $t & 1073741824 &&
              (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ct(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(j(156, t.tag));
  }
  function Z1(e, t) {
    switch ((mc(t), t.tag)) {
      case 1:
        return (
          vt(t.type) && za(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          co(),
          Ie(bt),
          Ie(lt),
          Nc(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return _c(t), null;
      case 13:
        if (
          (Ie(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(j(340));
          ao();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ie(ze), null;
      case 4:
        return co(), null;
      case 10:
        return Sc(t.type._context), null;
      case 22:
      case 23:
        return id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var os = !1,
    dt = !1,
    ew = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
  function po(e, t) {
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
  function zm(e, t, n) {
    try {
      n();
    } catch (r) {
      Ue(e, t, r);
    }
  }
  var Dm = !1;
  function tw(e, t) {
    if (((ac = Ea), (e = mh()), Qu(e))) {
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
              h = null;
            t: for (;;) {
              for (
                var v;
                p !== n || (o !== 0 && p.nodeType !== 3) || (s = a + o),
                  p !== i || (r !== 0 && p.nodeType !== 3) || (l = a + r),
                  p.nodeType === 3 && (a += p.nodeValue.length),
                  (v = p.firstChild) !== null;

              )
                (h = p), (p = v);
              for (;;) {
                if (p === e) break t;
                if (
                  (h === n && ++c === o && (s = a),
                  h === i && ++f === r && (l = a),
                  (v = p.nextSibling) !== null)
                )
                  break;
                (p = h), (h = p.parentNode);
              }
              p = v;
            }
            n = s === -1 || l === -1 ? null : { start: s, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      sc = { focusedElem: e, selectionRange: n }, Ea = !1, K = t;
      K !== null;

    )
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (K = e);
      else
        for (; K !== null; ) {
          t = K;
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
                      N = g.memoizedState,
                      w = t.stateNode,
                      b = w.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? x : nn(t.type, x),
                        N,
                      );
                    w.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var y = t.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = "")
                    : y.nodeType === 9 &&
                      y.documentElement &&
                      y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(j(163));
              }
          } catch (S) {
            Ue(t, t.return, S);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (K = e);
            break;
          }
          K = t.return;
        }
    return (g = Dm), (Dm = !1), g;
  }
  function Ti(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && zm(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function is(e, t) {
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
  function Jc(e) {
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
  function Fm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Fm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[cn],
          delete t[gi],
          delete t[dc],
          delete t[B1],
          delete t[z1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function jm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Um(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || jm(e.return)) return null;
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
  function Gc(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = La));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Gc(e, t, n), e = e.sibling; e !== null; )
        Gc(e, t, n), (e = e.sibling);
  }
  function Yc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Yc(e, t, n), e = e.sibling; e !== null; )
        Yc(e, t, n), (e = e.sibling);
  }
  var nt = null,
    rn = !1;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; ) Wm(e, t, n), (n = n.sibling);
  }
  function Wm(e, t, n) {
    if (un && typeof un.onCommitFiberUnmount == "function")
      try {
        un.onCommitFiberUnmount(ba, n);
      } catch {}
    switch (n.tag) {
      case 5:
        dt || po(n, t);
      case 6:
        var r = nt,
          o = rn;
        (nt = null),
          Gn(e, t, n),
          (nt = r),
          (rn = o),
          nt !== null &&
            (rn
              ? ((e = nt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : nt.removeChild(n.stateNode));
        break;
      case 18:
        nt !== null &&
          (rn
            ? ((e = nt),
              (n = n.stateNode),
              e.nodeType === 8
                ? cc(e.parentNode, n)
                : e.nodeType === 1 && cc(e, n),
              ii(e))
            : cc(nt, n.stateNode));
        break;
      case 4:
        (r = nt),
          (o = rn),
          (nt = n.stateNode.containerInfo),
          (rn = !0),
          Gn(e, t, n),
          (nt = r),
          (rn = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !dt &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              a = i.destroy;
            (i = i.tag),
              a !== void 0 && (i & 2 || i & 4) && zm(n, t, a),
              (o = o.next);
          } while (o !== r);
        }
        Gn(e, t, n);
        break;
      case 1:
        if (
          !dt &&
          (po(n, t),
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
        Gn(e, t, n);
        break;
      case 21:
        Gn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((dt = (r = dt) || n.memoizedState !== null), Gn(e, t, n), (dt = r))
          : Gn(e, t, n);
        break;
      default:
        Gn(e, t, n);
    }
  }
  function Vm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ew()),
        t.forEach(function (r) {
          var o = cw.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function on(e, t) {
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
                (nt = s.stateNode), (rn = !1);
                break e;
              case 3:
                (nt = s.stateNode.containerInfo), (rn = !0);
                break e;
              case 4:
                (nt = s.stateNode.containerInfo), (rn = !0);
                break e;
            }
            s = s.return;
          }
          if (nt === null) throw Error(j(160));
          Wm(i, a, o), (nt = null), (rn = !1);
          var l = o.alternate;
          l !== null && (l.return = null), (o.return = null);
        } catch (c) {
          Ue(o, t, c);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Hm(t, e), (t = t.sibling);
  }
  function Hm(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((on(t, e), pn(e), r & 4)) {
          try {
            Ti(3, e, e.return), is(3, e);
          } catch (x) {
            Ue(e, e.return, x);
          }
          try {
            Ti(5, e, e.return);
          } catch (x) {
            Ue(e, e.return, x);
          }
        }
        break;
      case 1:
        on(t, e), pn(e), r & 512 && n !== null && po(n, n.return);
        break;
      case 5:
        if (
          (on(t, e),
          pn(e),
          r & 512 && n !== null && po(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Jo(o, "");
          } catch (x) {
            Ue(e, e.return, x);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            a = n !== null ? n.memoizedProps : i,
            s = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              s === "input" && i.type === "radio" && i.name != null && yp(o, i),
                _u(s, a);
              var c = _u(s, i);
              for (a = 0; a < l.length; a += 2) {
                var f = l[a],
                  p = l[a + 1];
                f === "style"
                  ? Cp(o, p)
                  : f === "dangerouslySetInnerHTML"
                  ? kp(o, p)
                  : f === "children"
                  ? Jo(o, p)
                  : du(o, f, p, c);
              }
              switch (s) {
                case "input":
                  ku(o, i);
                  break;
                case "textarea":
                  wp(o, i);
                  break;
                case "select":
                  var h = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var v = i.value;
                  v != null
                    ? Hr(o, !!i.multiple, v, !1)
                    : h !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Hr(o, !!i.multiple, i.defaultValue, !0)
                        : Hr(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[gi] = i;
            } catch (x) {
              Ue(e, e.return, x);
            }
        }
        break;
      case 6:
        if ((on(t, e), pn(e), r & 4)) {
          if (e.stateNode === null) throw Error(j(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (x) {
            Ue(e, e.return, x);
          }
        }
        break;
      case 3:
        if (
          (on(t, e), pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ii(t.containerInfo);
          } catch (x) {
            Ue(e, e.return, x);
          }
        break;
      case 4:
        on(t, e), pn(e);
        break;
      case 13:
        on(t, e),
          pn(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Zc = qe())),
          r & 4 && Vm(e);
        break;
      case 22:
        if (
          ((f = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((dt = (c = dt) || f), on(t, e), (dt = c)) : on(t, e),
          pn(e),
          r & 8192)
        ) {
          if (
            ((c = e.memoizedState !== null),
            (e.stateNode.isHidden = c) && !f && e.mode & 1)
          )
            for (K = e, f = e.child; f !== null; ) {
              for (p = K = f; K !== null; ) {
                switch (((h = K), (v = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ti(4, h, h.return);
                    break;
                  case 1:
                    po(h, h.return);
                    var g = h.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (r = h), (n = h.return);
                      try {
                        (t = r),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (x) {
                        Ue(r, n, x);
                      }
                    }
                    break;
                  case 5:
                    po(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      Jm(p);
                      continue;
                    }
                }
                v !== null ? ((v.return = h), (K = v)) : Jm(p);
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
                        (s.style.display = Ep("display", a)));
                } catch (x) {
                  Ue(e, e.return, x);
                }
              }
            } else if (p.tag === 6) {
              if (f === null)
                try {
                  p.stateNode.nodeValue = c ? "" : p.memoizedProps;
                } catch (x) {
                  Ue(e, e.return, x);
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
        on(t, e), pn(e), r & 4 && Vm(e);
        break;
      case 21:
        break;
      default:
        on(t, e), pn(e);
    }
  }
  function pn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (jm(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(j(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Jo(o, ""), (r.flags &= -33));
            var i = Um(e);
            Yc(e, i, o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              s = Um(e);
            Gc(e, s, a);
            break;
          default:
            throw Error(j(161));
        }
      } catch (l) {
        Ue(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function nw(e, t, n) {
    (K = e), qm(e);
  }
  function qm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var o = K,
        i = o.child;
      if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || os;
        if (!a) {
          var s = o.alternate,
            l = (s !== null && s.memoizedState !== null) || dt;
          s = os;
          var c = dt;
          if (((os = a), (dt = l) && !c))
            for (K = o; K !== null; )
              (a = K),
                (l = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? Gm(o)
                  : l !== null
                  ? ((l.return = a), (K = l))
                  : Gm(o);
          for (; i !== null; ) (K = i), qm(i), (i = i.sibling);
          (K = o), (os = s), (dt = c);
        }
        Km(e);
      } else
        o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (K = i)) : Km(e);
    }
  }
  function Km(e) {
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
                dt || is(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !dt)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : nn(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && Wh(t, i, r);
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
                  Wh(t, a, n);
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
                      p !== null && ii(p);
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
                throw Error(j(163));
            }
          dt || (t.flags & 512 && Jc(t));
        } catch (h) {
          Ue(t, t.return, h);
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
  function Jm(e) {
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
  function Gm(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              is(4, t);
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
              Jc(t);
            } catch (l) {
              Ue(t, i, l);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Jc(t);
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
  var rw = Math.ceil,
    as = En.ReactCurrentDispatcher,
    Xc = En.ReactCurrentOwner,
    Wt = En.ReactCurrentBatchConfig,
    me = 0,
    Qe = null,
    Ke = null,
    rt = 0,
    $t = 0,
    ho = Vn(0),
    Ye = 0,
    _i = null,
    yr = 0,
    ss = 0,
    Qc = 0,
    Ri = null,
    St = null,
    Zc = 0,
    mo = 1 / 0,
    Pn = null,
    ls = !1,
    ed = null,
    Yn = null,
    us = !1,
    Xn = null,
    cs = 0,
    Ni = 0,
    td = null,
    ds = -1,
    fs = 0;
  function gt() {
    return me & 6 ? qe() : ds !== -1 ? ds : (ds = qe());
  }
  function Qn(e) {
    return e.mode & 1
      ? me & 2 && rt !== 0
        ? rt & -rt
        : F1.transition !== null
        ? (fs === 0 && (fs = Fp()), fs)
        : ((e = xe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gp(e.type))),
          e)
      : 1;
  }
  function an(e, t, n, r) {
    if (50 < Ni) throw ((Ni = 0), (td = null), Error(j(185)));
    ei(e, n, r),
      (!(me & 2) || e !== Qe) &&
        (e === Qe && (!(me & 2) && (ss |= n), Ye === 4 && Zn(e, rt)),
        xt(e, r),
        n === 1 &&
          me === 0 &&
          !(t.mode & 1) &&
          ((mo = qe() + 500), Fa && qn()));
  }
  function xt(e, t) {
    var n = e.callbackNode;
    Fv(e, t);
    var r = Sa(e, e === Qe ? rt : 0);
    if (r === 0)
      n !== null && Bp(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bp(n), t === 1))
        e.tag === 0 ? D1(Xm.bind(null, e)) : $h(Xm.bind(null, e)),
          M1(function () {
            !(me & 6) && qn();
          }),
          (n = null);
      else {
        switch (jp(r)) {
          case 1:
            n = Mu;
            break;
          case 4:
            n = zp;
            break;
          case 16:
            n = ya;
            break;
          case 536870912:
            n = Dp;
            break;
          default:
            n = ya;
        }
        n = ig(n, Ym.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Ym(e, t) {
    if (((ds = -1), (fs = 0), me & 6)) throw Error(j(327));
    var n = e.callbackNode;
    if (go() && e.callbackNode !== n) return null;
    var r = Sa(e, e === Qe ? rt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ps(e, r);
    else {
      t = r;
      var o = me;
      me |= 2;
      var i = Zm();
      (Qe !== e || rt !== t) && ((Pn = null), (mo = qe() + 500), vr(e, t));
      do
        try {
          aw();
          break;
        } catch (s) {
          Qm(e, s);
        }
      while (1);
      wc(),
        (as.current = i),
        (me = o),
        Ke !== null ? (t = 0) : ((Qe = null), (rt = 0), (t = Ye));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = Lu(e)), o !== 0 && ((r = o), (t = nd(e, o)))),
        t === 1)
      )
        throw ((n = _i), vr(e, 0), Zn(e, r), xt(e, qe()), n);
      if (t === 6) Zn(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !ow(o) &&
            ((t = ps(e, r)),
            t === 2 && ((i = Lu(e)), i !== 0 && ((r = i), (t = nd(e, i)))),
            t === 1))
        )
          throw ((n = _i), vr(e, 0), Zn(e, r), xt(e, qe()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(j(345));
          case 2:
            wr(e, St, Pn);
            break;
          case 3:
            if (
              (Zn(e, r),
              (r & 130023424) === r && ((t = Zc + 500 - qe()), 10 < t))
            ) {
              if (Sa(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                gt(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = uc(wr.bind(null, e, St, Pn), t);
              break;
            }
            wr(e, St, Pn);
            break;
          case 4:
            if ((Zn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var a = 31 - Zt(r);
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
                  : 1960 * rw(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = uc(wr.bind(null, e, St, Pn), r);
              break;
            }
            wr(e, St, Pn);
            break;
          case 5:
            wr(e, St, Pn);
            break;
          default:
            throw Error(j(329));
        }
      }
    }
    return xt(e, qe()), e.callbackNode === n ? Ym.bind(null, e) : null;
  }
  function nd(e, t) {
    var n = Ri;
    return (
      e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256),
      (e = ps(e, t)),
      e !== 2 && ((t = St), (St = n), t !== null && rd(t)),
      e
    );
  }
  function rd(e) {
    St === null ? (St = e) : St.push.apply(St, e);
  }
  function ow(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!en(i(), o)) return !1;
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
  function Zn(e, t) {
    for (
      t &= ~Qc,
        t &= ~ss,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Zt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Xm(e) {
    if (me & 6) throw Error(j(327));
    go();
    var t = Sa(e, 0);
    if (!(t & 1)) return xt(e, qe()), null;
    var n = ps(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Lu(e);
      r !== 0 && ((t = r), (n = nd(e, r)));
    }
    if (n === 1) throw ((n = _i), vr(e, 0), Zn(e, t), xt(e, qe()), n);
    if (n === 6) throw Error(j(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      wr(e, St, Pn),
      xt(e, qe()),
      null
    );
  }
  function od(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      (me = n), me === 0 && ((mo = qe() + 500), Fa && qn());
    }
  }
  function br(e) {
    Xn !== null && Xn.tag === 0 && !(me & 6) && go();
    var t = me;
    me |= 1;
    var n = Wt.transition,
      r = xe;
    try {
      if (((Wt.transition = null), (xe = 1), e)) return e();
    } finally {
      (xe = r), (Wt.transition = n), (me = t), !(me & 6) && qn();
    }
  }
  function id() {
    ($t = ho.current), Ie(ho);
  }
  function vr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), $1(n)), Ke !== null))
      for (n = Ke.return; n !== null; ) {
        var r = n;
        switch ((mc(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && za();
            break;
          case 3:
            co(), Ie(bt), Ie(lt), Nc();
            break;
          case 5:
            _c(r);
            break;
          case 4:
            co();
            break;
          case 13:
            Ie(ze);
            break;
          case 19:
            Ie(ze);
            break;
          case 10:
            Sc(r.type._context);
            break;
          case 22:
          case 23:
            id();
        }
        n = n.return;
      }
    if (
      ((Qe = e),
      (Ke = e = er(e.current, null)),
      (rt = $t = t),
      (Ye = 0),
      (_i = null),
      (Qc = ss = yr = 0),
      (St = Ri = null),
      hr !== null)
    ) {
      for (t = 0; t < hr.length; t++)
        if (((n = hr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var a = i.next;
            (i.next = o), (r.next = a);
          }
          n.pending = r;
        }
      hr = null;
    }
    return e;
  }
  function Qm(e, t) {
    do {
      var n = Ke;
      try {
        if ((wc(), (Xa.current = ts), Qa)) {
          for (var r = De.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          Qa = !1;
        }
        if (
          ((gr = 0),
          (Xe = Ge = De = null),
          (xi = !1),
          (ki = 0),
          (Xc.current = null),
          n === null || n.return === null)
        ) {
          (Ye = 1), (_i = t), (Ke = null);
          break;
        }
        e: {
          var i = e,
            a = n.return,
            s = n,
            l = t;
          if (
            ((t = rt),
            (s.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var c = l,
              f = s,
              p = f.tag;
            if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
              var h = f.alternate;
              h
                ? ((f.updateQueue = h.updateQueue),
                  (f.memoizedState = h.memoizedState),
                  (f.lanes = h.lanes))
                : ((f.updateQueue = null), (f.memoizedState = null));
            }
            var v = xm(a);
            if (v !== null) {
              (v.flags &= -257),
                km(v, a, s, i, t),
                v.mode & 1 && Sm(i, c, t),
                (t = v),
                (l = c);
              var g = t.updateQueue;
              if (g === null) {
                var x = new Set();
                x.add(l), (t.updateQueue = x);
              } else g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Sm(i, c, t), ad();
                break e;
              }
              l = Error(j(426));
            }
          } else if ($e && s.mode & 1) {
            var N = xm(a);
            if (N !== null) {
              !(N.flags & 65536) && (N.flags |= 256),
                km(N, a, s, i, t),
                bc(fo(l, s));
              break e;
            }
          }
          (i = l = fo(l, s)),
            Ye !== 4 && (Ye = 2),
            Ri === null ? (Ri = [i]) : Ri.push(i),
            (i = a);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = vm(i, l, t);
                Uh(i, w);
                break e;
              case 1:
                s = l;
                var b = i.type,
                  y = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof b.getDerivedStateFromError == "function" ||
                    (y !== null &&
                      typeof y.componentDidCatch == "function" &&
                      (Yn === null || !Yn.has(y))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var S = wm(i, s, t);
                  Uh(i, S);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        tg(n);
      } catch (C) {
        (t = C), Ke === n && n !== null && (Ke = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Zm() {
    var e = as.current;
    return (as.current = ts), e === null ? ts : e;
  }
  function ad() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4),
      Qe === null || (!(yr & 268435455) && !(ss & 268435455)) || Zn(Qe, rt);
  }
  function ps(e, t) {
    var n = me;
    me |= 2;
    var r = Zm();
    (Qe !== e || rt !== t) && ((Pn = null), vr(e, t));
    do
      try {
        iw();
        break;
      } catch (o) {
        Qm(e, o);
      }
    while (1);
    if ((wc(), (me = n), (as.current = r), Ke !== null)) throw Error(j(261));
    return (Qe = null), (rt = 0), Ye;
  }
  function iw() {
    for (; Ke !== null; ) eg(Ke);
  }
  function aw() {
    for (; Ke !== null && !Iv(); ) eg(Ke);
  }
  function eg(e) {
    var t = og(e.alternate, e, $t);
    (e.memoizedProps = e.pendingProps),
      t === null ? tg(e) : (Ke = t),
      (Xc.current = null);
  }
  function tg(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Z1(n, t)), n !== null)) {
          (n.flags &= 32767), (Ke = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ye = 6), (Ke = null);
          return;
        }
      } else if (((n = Q1(n, t, $t)), n !== null)) {
        Ke = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ke = t;
        return;
      }
      Ke = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
  }
  function wr(e, t, n) {
    var r = xe,
      o = Wt.transition;
    try {
      (Wt.transition = null), (xe = 1), sw(e, t, n, r);
    } finally {
      (Wt.transition = o), (xe = r);
    }
    return null;
  }
  function sw(e, t, n, r) {
    do go();
    while (Xn !== null);
    if (me & 6) throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(j(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (jv(e, i),
      e === Qe && ((Ke = Qe = null), (rt = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        us ||
        ((us = !0),
        ig(ya, function () {
          return go(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Wt.transition), (Wt.transition = null);
      var a = xe;
      xe = 1;
      var s = me;
      (me |= 4),
        (Xc.current = null),
        tw(e, n),
        Hm(n, e),
        T1(sc),
        (Ea = !!ac),
        (sc = ac = null),
        (e.current = n),
        nw(n),
        Pv(),
        (me = s),
        (xe = a),
        (Wt.transition = i);
    } else e.current = n;
    if (
      (us && ((us = !1), (Xn = e), (cs = o)),
      (i = e.pendingLanes),
      i === 0 && (Yn = null),
      Mv(n.stateNode),
      xt(e, qe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (ls) throw ((ls = !1), (e = ed), (ed = null), e);
    return (
      cs & 1 && e.tag !== 0 && go(),
      (i = e.pendingLanes),
      i & 1 ? (e === td ? Ni++ : ((Ni = 0), (td = e))) : (Ni = 0),
      qn(),
      null
    );
  }
  function go() {
    if (Xn !== null) {
      var e = jp(cs),
        t = Wt.transition,
        n = xe;
      try {
        if (((Wt.transition = null), (xe = 16 > e ? 16 : e), Xn === null))
          var r = !1;
        else {
          if (((e = Xn), (Xn = null), (cs = 0), me & 6)) throw Error(j(331));
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
                        Ti(8, f, i);
                    }
                    var p = f.child;
                    if (p !== null) (p.return = f), (K = p);
                    else
                      for (; K !== null; ) {
                        f = K;
                        var h = f.sibling,
                          v = f.return;
                        if ((Fm(f), f === c)) {
                          K = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = v), (K = h);
                          break;
                        }
                        K = v;
                      }
                  }
                }
                var g = i.alternate;
                if (g !== null) {
                  var x = g.child;
                  if (x !== null) {
                    g.child = null;
                    do {
                      var N = x.sibling;
                      (x.sibling = null), (x = N);
                    } while (x !== null);
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
                      Ti(9, i, i.return);
                  }
                var w = i.sibling;
                if (w !== null) {
                  (w.return = i.return), (K = w);
                  break e;
                }
                K = i.return;
              }
          }
          var b = e.current;
          for (K = b; K !== null; ) {
            a = K;
            var y = a.child;
            if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (K = y);
            else
              e: for (a = b; K !== null; ) {
                if (((s = K), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        is(9, s);
                    }
                  } catch (C) {
                    Ue(s, s.return, C);
                  }
                if (s === a) {
                  K = null;
                  break e;
                }
                var S = s.sibling;
                if (S !== null) {
                  (S.return = s.return), (K = S);
                  break e;
                }
                K = s.return;
              }
          }
          if (
            ((me = o),
            qn(),
            un && typeof un.onPostCommitFiberRoot == "function")
          )
            try {
              un.onPostCommitFiberRoot(ba, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (xe = n), (Wt.transition = t);
      }
    }
    return !1;
  }
  function ng(e, t, n) {
    (t = fo(n, t)),
      (t = vm(e, t, 1)),
      (e = Jn(e, t, 1)),
      (t = gt()),
      e !== null && (ei(e, 1, t), xt(e, t));
  }
  function Ue(e, t, n) {
    if (e.tag === 3) ng(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ng(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Yn === null || !Yn.has(r)))
          ) {
            (e = fo(n, e)),
              (e = wm(t, e, 1)),
              (t = Jn(t, e, 1)),
              (e = gt()),
              t !== null && (ei(t, 1, e), xt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function lw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = gt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Qe === e &&
        (rt & n) === n &&
        (Ye === 4 || (Ye === 3 && (rt & 130023424) === rt && 500 > qe() - Zc)
          ? vr(e, 0)
          : (Qc |= n)),
      xt(e, t);
  }
  function rg(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = wa), (wa <<= 1), !(wa & 130023424) && (wa = 4194304))
        : (t = 1));
    var n = gt();
    (e = Rn(e, t)), e !== null && (ei(e, t, n), xt(e, n));
  }
  function uw(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), rg(e, n);
  }
  function cw(e, t) {
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
        throw Error(j(314));
    }
    r !== null && r.delete(t), rg(e, n);
  }
  var og;
  og = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || bt.current) wt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (wt = !1), X1(e, t, n);
        wt = !!(e.flags & 131072);
      }
    else (wt = !1), $e && t.flags & 1048576 && Mh(t, Ua, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        rs(e, t), (e = t.pendingProps);
        var o = ro(t, lt.current);
        lo(t, n), (o = Ac(null, t, r, e, o, n));
        var i = $c();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              vt(r) ? ((i = !0), Da(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Ec(t),
              (o.updater = Ja),
              (t.stateNode = o),
              (o._reactInternals = t),
              Oc(t, r, e, n),
              (t = Uc(null, t, r, !0, i, n)))
            : ((t.tag = 0), $e && i && hc(t), mt(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (rs(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = fw(r)),
            (e = nn(r, e)),
            o)
          ) {
            case 0:
              t = jc(null, t, r, e, n);
              break e;
            case 1:
              t = Rm(null, t, r, e, n);
              break e;
            case 11:
              t = Em(null, t, r, e, n);
              break e;
            case 14:
              t = Cm(null, t, r, nn(r.type, e), n);
              break e;
          }
          throw Error(j(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : nn(r, o)),
          jc(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : nn(r, o)),
          Rm(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((Nm(t), e === null)) throw Error(j(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            jh(e, t),
            Ka(t, r, null, n);
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
              (o = fo(Error(j(423)), t)), (t = Im(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = fo(Error(j(424)), t)), (t = Im(e, t, r, n, o));
              break e;
            } else
              for (
                At = Wn(t.stateNode.containerInfo.firstChild),
                  Pt = t,
                  $e = !0,
                  tn = null,
                  n = Yh(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((ao(), r === o)) {
              t = In(e, t, n);
              break e;
            }
            mt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Xh(t),
          e === null && yc(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = o.children),
          lc(r, o) ? (a = null) : i !== null && lc(r, i) && (t.flags |= 32),
          _m(e, t),
          mt(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && yc(t), null;
      case 13:
        return Pm(e, t, n);
      case 4:
        return (
          Tc(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = uo(t, null, r, n)) : mt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : nn(r, o)),
          Em(e, t, r, o, n)
        );
      case 7:
        return mt(e, t, t.pendingProps, n), t.child;
      case 8:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (a = o.value),
            Te(Va, r._currentValue),
            (r._currentValue = a),
            i !== null)
          )
            if (en(i.value, a)) {
              if (i.children === o.children && !bt.current) {
                t = In(e, t, n);
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
                        (l = Nn(-1, n & -n)), (l.tag = 2);
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
                        xc(i.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(j(341));
                  (a.lanes |= n),
                    (s = a.alternate),
                    s !== null && (s.lanes |= n),
                    xc(a, n, t),
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
          mt(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          lo(t, n),
          (o = jt(o)),
          (r = r(o)),
          (t.flags |= 1),
          mt(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = nn(r, t.pendingProps)),
          (o = nn(r.type, o)),
          Cm(e, t, r, o, n)
        );
      case 15:
        return Om(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : nn(r, o)),
          rs(e, t),
          (t.tag = 1),
          vt(r) ? ((e = !0), Da(t)) : (e = !1),
          lo(t, n),
          qh(t, r, o),
          Oc(t, r, o, n),
          Uc(null, t, r, !0, e, n)
        );
      case 19:
        return $m(e, t, n);
      case 22:
        return Tm(e, t, n);
    }
    throw Error(j(156, t.tag));
  };
  function ig(e, t) {
    return Lp(e, t);
  }
  function dw(e, t, n, r) {
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
  function Vt(e, t, n, r) {
    return new dw(e, t, n, r);
  }
  function sd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function fw(e) {
    if (typeof e == "function") return sd(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === hu)) return 11;
      if (e === yu) return 14;
    }
    return 2;
  }
  function er(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Vt(e.tag, t, e.key, e.mode)),
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
  function hs(e, t, n, r, o, i) {
    var a = 2;
    if (((r = e), typeof e == "function")) sd(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case Vr:
          return Sr(n.children, o, i, t);
        case fu:
          (a = 8), (o |= 8);
          break;
        case pu:
          return (
            (e = Vt(12, n, t, o | 2)), (e.elementType = pu), (e.lanes = i), e
          );
        case mu:
          return (e = Vt(13, n, t, o)), (e.elementType = mu), (e.lanes = i), e;
        case gu:
          return (e = Vt(19, n, t, o)), (e.elementType = gu), (e.lanes = i), e;
        case fp:
          return ms(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case cp:
                a = 10;
                break e;
              case dp:
                a = 9;
                break e;
              case hu:
                a = 11;
                break e;
              case yu:
                a = 14;
                break e;
              case Mn:
                (a = 16), (r = null);
                break e;
            }
          throw Error(j(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Vt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function Sr(e, t, n, r) {
    return (e = Vt(7, e, r, t)), (e.lanes = n), e;
  }
  function ms(e, t, n, r) {
    return (
      (e = Vt(22, e, r, t)),
      (e.elementType = fp),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ld(e, t, n) {
    return (e = Vt(6, e, null, t)), (e.lanes = n), e;
  }
  function ud(e, t, n) {
    return (
      (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function pw(e, t, n, r, o) {
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
      (this.eventTimes = Bu(0)),
      (this.expirationTimes = Bu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Bu(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function cd(e, t, n, r, o, i, a, s, l) {
    return (
      (e = new pw(e, t, n, s, l)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Vt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ec(i),
      e
    );
  }
  function hw(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Wr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ag(e) {
    if (!e) return Hn;
    e = e._reactInternals;
    e: {
      if (ur(e) !== e || e.tag !== 1) throw Error(j(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (vt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(j(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (vt(n)) return Ph(e, n, t);
    }
    return t;
  }
  function sg(e, t, n, r, o, i, a, s, l) {
    return (
      (e = cd(n, r, !0, e, o, i, a, s, l)),
      (e.context = ag(null)),
      (n = e.current),
      (r = gt()),
      (o = Qn(n)),
      (i = Nn(r, o)),
      (i.callback = t ?? null),
      Jn(n, i, o),
      (e.current.lanes = o),
      ei(e, o, r),
      xt(e, r),
      e
    );
  }
  function gs(e, t, n, r) {
    var o = t.current,
      i = gt(),
      a = Qn(o);
    return (
      (n = ag(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nn(i, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Jn(o, t, a)),
      e !== null && (an(e, o, a, i), qa(e, o, a)),
      a
    );
  }
  function ys(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function lg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function dd(e, t) {
    lg(e, t), (e = e.alternate) && lg(e, t);
  }
  function mw() {
    return null;
  }
  var ug =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function fd(e) {
    this._internalRoot = e;
  }
  (bs.prototype.render = fd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(j(409));
      gs(e, t, null, null);
    }),
    (bs.prototype.unmount = fd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          br(function () {
            gs(null, e, null, null);
          }),
            (t[Cn] = null);
        }
      });
  function bs(e) {
    this._internalRoot = e;
  }
  bs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vp();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++);
      Fn.splice(n, 0, e), n === 0 && Kp(e);
    }
  };
  function pd(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function vs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function cg() {}
  function gw(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var c = ys(a);
          i.call(c);
        };
      }
      var a = sg(t, r, e, 0, null, !1, !1, "", cg);
      return (
        (e._reactRootContainer = a),
        (e[Cn] = a.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        br(),
        a
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ys(l);
        s.call(c);
      };
    }
    var l = cd(e, 0, !1, null, null, !1, !1, "", cg);
    return (
      (e._reactRootContainer = l),
      (e[Cn] = l.current),
      hi(e.nodeType === 8 ? e.parentNode : e),
      br(function () {
        gs(t, l, n, r);
      }),
      l
    );
  }
  function ws(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof o == "function") {
        var s = o;
        o = function () {
          var l = ys(a);
          s.call(l);
        };
      }
      gs(t, a, e, o);
    } else a = gw(n, t, e, o, r);
    return ys(a);
  }
  (Up = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zo(t.pendingLanes);
          n !== 0 &&
            (zu(t, n | 1), xt(t, qe()), !(me & 6) && ((mo = qe() + 500), qn()));
        }
        break;
      case 13:
        br(function () {
          var r = Rn(e, 1);
          if (r !== null) {
            var o = gt();
            an(r, e, 1, o);
          }
        }),
          dd(e, 1);
    }
  }),
    (Du = function (e) {
      if (e.tag === 13) {
        var t = Rn(e, 134217728);
        if (t !== null) {
          var n = gt();
          an(t, e, 134217728, n);
        }
        dd(e, 134217728);
      }
    }),
    (Wp = function (e) {
      if (e.tag === 13) {
        var t = Qn(e),
          n = Rn(e, t);
        if (n !== null) {
          var r = gt();
          an(n, e, t, r);
        }
        dd(e, t);
      }
    }),
    (Vp = function () {
      return xe;
    }),
    (Hp = function (e, t) {
      var n = xe;
      try {
        return (xe = e), t();
      } finally {
        xe = n;
      }
    }),
    (Iu = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ku(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var o = Ba(r);
                if (!o) throw Error(j(90));
                mp(r), ku(r, o);
              }
            }
          }
          break;
        case "textarea":
          wp(e, n);
          break;
        case "select":
          (t = n.value), t != null && Hr(e, !!n.multiple, t, !1);
      }
    }),
    (Rp = od),
    (Np = br);
  var yw = { usingClientEntryPoint: !1, Events: [yi, to, Ba, Tp, _p, od] },
    Ii = {
      findFiberByHostInstance: cr,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    bw = {
      bundleType: Ii.bundleType,
      version: Ii.version,
      rendererPackageName: Ii.rendererPackageName,
      rendererConfig: Ii.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: En.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = $p(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ii.findFiberByHostInstance || mw,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ss.isDisabled && Ss.supportsFiber)
      try {
        (ba = Ss.inject(bw)), (un = Ss);
      } catch {}
  }
  (Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yw),
    (Rt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!pd(t)) throw Error(j(200));
      return hw(e, t, null, n);
    }),
    (Rt.createRoot = function (e, t) {
      if (!pd(e)) throw Error(j(299));
      var n = !1,
        r = "",
        o = ug;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = cd(e, 1, !1, null, null, n, !1, r, o)),
        (e[Cn] = t.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        new fd(t)
      );
    }),
    (Rt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(j(188))
          : ((e = Object.keys(e).join(",")), Error(j(268, e)));
      return (e = $p(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Rt.flushSync = function (e) {
      return br(e);
    }),
    (Rt.hydrate = function (e, t, n) {
      if (!vs(t)) throw Error(j(200));
      return ws(null, e, t, !0, n);
    }),
    (Rt.hydrateRoot = function (e, t, n) {
      if (!pd(e)) throw Error(j(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        a = ug;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = sg(t, null, e, 1, n ?? null, o, !1, i, a)),
        (e[Cn] = t.current),
        hi(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new bs(t);
    }),
    (Rt.render = function (e, t, n) {
      if (!vs(t)) throw Error(j(200));
      return ws(null, e, t, !1, n);
    }),
    (Rt.unmountComponentAtNode = function (e) {
      if (!vs(e)) throw Error(j(40));
      return e._reactRootContainer
        ? (br(function () {
            ws(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Cn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Rt.unstable_batchedUpdates = od),
    (Rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!vs(n)) throw Error(j(200));
      if (e == null || e._reactInternals === void 0) throw Error(j(38));
      return ws(e, t, n, !1, r);
    }),
    (Rt.version = "18.2.0-next-9e3b772b8-20220608"),
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
      t(), (e.exports = Rt);
    })(mv);
  const xs = qf(jr);
  var dg,
    fg = jr;
  (dg = fg.createRoot), fg.hydrateRoot;
  const vw = { black: "#000", white: "#fff" },
    Pi = vw,
    ww = {
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
    xr = ww,
    Sw = {
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
    kr = Sw,
    xw = {
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
    Er = xw,
    kw = {
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
    yo = kw,
    Ew = {
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
    Cr = Ew,
    Cw = {
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
    bo = Cw,
    Ow = {
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
    Tw = Ow;
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
  function Or(e) {
    return e !== null && typeof e == "object" && e.constructor === Object;
  }
  function pg(e) {
    if (!Or(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = pg(e[n]);
      }),
      t
    );
  }
  function Ht(e, t, n = { clone: !0 }) {
    const r = n.clone ? k({}, e) : e;
    return (
      Or(e) &&
        Or(t) &&
        Object.keys(t).forEach((o) => {
          o !== "__proto__" &&
            (Or(t[o]) && o in e && Or(e[o])
              ? (r[o] = Ht(e[o], t[o], n))
              : n.clone
              ? (r[o] = Or(t[o]) ? pg(t[o]) : t[o])
              : (r[o] = t[o]));
        }),
      r
    );
  }
  function tr(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
  }
  var hg = {},
    _w = {
      get exports() {
        return hg;
      },
      set exports(e) {
        hg = e;
      },
    },
    ke = {},
    hd = Symbol.for("react.element"),
    md = Symbol.for("react.portal"),
    ks = Symbol.for("react.fragment"),
    Es = Symbol.for("react.strict_mode"),
    Cs = Symbol.for("react.profiler"),
    Os = Symbol.for("react.provider"),
    Ts = Symbol.for("react.context"),
    Rw = Symbol.for("react.server_context"),
    _s = Symbol.for("react.forward_ref"),
    Rs = Symbol.for("react.suspense"),
    Ns = Symbol.for("react.suspense_list"),
    Is = Symbol.for("react.memo"),
    Ps = Symbol.for("react.lazy"),
    Nw = Symbol.for("react.offscreen"),
    mg;
  mg = Symbol.for("react.module.reference");
  function qt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case hd:
          switch (((e = e.type), e)) {
            case ks:
            case Cs:
            case Es:
            case Rs:
            case Ns:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Rw:
                case Ts:
                case _s:
                case Ps:
                case Is:
                case Os:
                  return e;
                default:
                  return t;
              }
          }
        case md:
          return t;
      }
    }
  }
  (ke.ContextConsumer = Ts),
    (ke.ContextProvider = Os),
    (ke.Element = hd),
    (ke.ForwardRef = _s),
    (ke.Fragment = ks),
    (ke.Lazy = Ps),
    (ke.Memo = Is),
    (ke.Portal = md),
    (ke.Profiler = Cs),
    (ke.StrictMode = Es),
    (ke.Suspense = Rs),
    (ke.SuspenseList = Ns),
    (ke.isAsyncMode = function () {
      return !1;
    }),
    (ke.isConcurrentMode = function () {
      return !1;
    }),
    (ke.isContextConsumer = function (e) {
      return qt(e) === Ts;
    }),
    (ke.isContextProvider = function (e) {
      return qt(e) === Os;
    }),
    (ke.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === hd;
    }),
    (ke.isForwardRef = function (e) {
      return qt(e) === _s;
    }),
    (ke.isFragment = function (e) {
      return qt(e) === ks;
    }),
    (ke.isLazy = function (e) {
      return qt(e) === Ps;
    }),
    (ke.isMemo = function (e) {
      return qt(e) === Is;
    }),
    (ke.isPortal = function (e) {
      return qt(e) === md;
    }),
    (ke.isProfiler = function (e) {
      return qt(e) === Cs;
    }),
    (ke.isStrictMode = function (e) {
      return qt(e) === Es;
    }),
    (ke.isSuspense = function (e) {
      return qt(e) === Rs;
    }),
    (ke.isSuspenseList = function (e) {
      return qt(e) === Ns;
    }),
    (ke.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === ks ||
        e === Cs ||
        e === Es ||
        e === Rs ||
        e === Ns ||
        e === Nw ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Ps ||
            e.$$typeof === Is ||
            e.$$typeof === Os ||
            e.$$typeof === Ts ||
            e.$$typeof === _s ||
            e.$$typeof === mg ||
            e.getModuleId !== void 0))
      );
    }),
    (ke.typeOf = qt),
    (function (e) {
      e.exports = ke;
    })(_w);
  function G(e) {
    if (typeof e != "string") throw new Error(tr(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function gd(...e) {
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
  function yd(e, t = 166) {
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
  function Iw(e, t) {
    return () => null;
  }
  function Ai(e, t) {
    return E.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
  }
  function kt(e) {
    return (e && e.ownerDocument) || document;
  }
  function nr(e) {
    return kt(e).defaultView || window;
  }
  function Pw(e, t) {
    return () => null;
  }
  function As(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  const Aw = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
    rr = Aw;
  let gg = 0;
  function $w(e) {
    const [t, n] = E.useState(e),
      r = e || t;
    return (
      E.useEffect(() => {
        t == null && ((gg += 1), n(`mui-${gg}`));
      }, [t]),
      r
    );
  }
  const yg = au.useId;
  function bg(e) {
    if (yg !== void 0) {
      const t = yg();
      return e ?? t;
    }
    return $w(e);
  }
  function Mw(e, t, n, r, o) {
    return null;
  }
  function $s({ controlled: e, default: t, name: n, state: r = "value" }) {
    const { current: o } = E.useRef(e !== void 0),
      [i, a] = E.useState(t),
      s = o ? e : i,
      l = E.useCallback((c) => {
        o || a(c);
      }, []);
    return [s, l];
  }
  function Tr(e) {
    const t = E.useRef(e);
    return (
      rr(() => {
        t.current = e;
      }),
      E.useCallback((...n) => (0, t.current)(...n), [])
    );
  }
  function ot(...e) {
    return E.useMemo(
      () =>
        e.every((t) => t == null)
          ? null
          : (t) => {
              e.forEach((n) => {
                As(n, t);
              });
            },
      e,
    );
  }
  let Ms = !0,
    bd = !1,
    vg;
  const Lw = {
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
  function Bw(e) {
    const { type: t, tagName: n } = e;
    return !!(
      (n === "INPUT" && Lw[t] && !e.readOnly) ||
      (n === "TEXTAREA" && !e.readOnly) ||
      e.isContentEditable
    );
  }
  function zw(e) {
    e.metaKey || e.altKey || e.ctrlKey || (Ms = !0);
  }
  function vd() {
    Ms = !1;
  }
  function Dw() {
    this.visibilityState === "hidden" && bd && (Ms = !0);
  }
  function Fw(e) {
    e.addEventListener("keydown", zw, !0),
      e.addEventListener("mousedown", vd, !0),
      e.addEventListener("pointerdown", vd, !0),
      e.addEventListener("touchstart", vd, !0),
      e.addEventListener("visibilitychange", Dw, !0);
  }
  function jw(e) {
    const { target: t } = e;
    try {
      return t.matches(":focus-visible");
    } catch {}
    return Ms || Bw(t);
  }
  function wd() {
    const e = E.useCallback((o) => {
        o != null && Fw(o.ownerDocument);
      }, []),
      t = E.useRef(!1);
    function n() {
      return t.current
        ? ((bd = !0),
          window.clearTimeout(vg),
          (vg = window.setTimeout(() => {
            bd = !1;
          }, 100)),
          (t.current = !1),
          !0)
        : !1;
    }
    function r(o) {
      return jw(o) ? ((t.current = !0), !0) : !1;
    }
    return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
  }
  function wg(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  function Sd(e, t) {
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
                  n[r][a] = Sd(o[a], i[a]);
                }));
        } else n[r] === void 0 && (n[r] = e[r]);
      }),
      n
    );
  }
  function de(e, t, n) {
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
  const Sg = (e) => e,
    Uw = () => {
      let e = Sg;
      return {
        configure(t) {
          e = t;
        },
        generate(t) {
          return e(t);
        },
        reset() {
          e = Sg;
        },
      };
    },
    Ww = Uw(),
    xg = Ww,
    Vw = {
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
  function ae(e, t, n = "Mui") {
    const r = Vw[t];
    return r ? `${n}-${r}` : `${xg.generate(e)}-${t}`;
  }
  function se(e, t, n = "Mui") {
    const r = {};
    return (
      t.forEach((o) => {
        r[o] = ae(e, o, n);
      }),
      r
    );
  }
  function Q(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      o,
      i;
    for (i = 0; i < r.length; i++)
      (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  function kg(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var Hw =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    qw = kg(function (e) {
      return (
        Hw.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    });
  function Kw(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function Jw(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var Gw = (function () {
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
            this._insertTag(Jw(this));
          var r = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var o = Kw(r);
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
    ft = "-ms-",
    Ls = "-moz-",
    ye = "-webkit-",
    Eg = "comm",
    xd = "rule",
    kd = "decl",
    Yw = "@import",
    Cg = "@keyframes",
    Xw = Math.abs,
    Bs = String.fromCharCode,
    Qw = Object.assign;
  function Zw(e, t) {
    return it(e, 0) ^ 45
      ? (((((((t << 2) ^ it(e, 0)) << 2) ^ it(e, 1)) << 2) ^ it(e, 2)) << 2) ^
          it(e, 3)
      : 0;
  }
  function Og(e) {
    return e.trim();
  }
  function e2(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function we(e, t, n) {
    return e.replace(t, n);
  }
  function Ed(e, t) {
    return e.indexOf(t);
  }
  function it(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function $i(e, t, n) {
    return e.slice(t, n);
  }
  function hn(e) {
    return e.length;
  }
  function Cd(e) {
    return e.length;
  }
  function zs(e, t) {
    return t.push(e), e;
  }
  function t2(e, t) {
    return e.map(t).join("");
  }
  var Ds = 1,
    vo = 1,
    Tg = 0,
    Et = 0,
    Je = 0,
    wo = "";
  function Fs(e, t, n, r, o, i, a) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: Ds,
      column: vo,
      length: a,
      return: "",
    };
  }
  function Mi(e, t) {
    return Qw(
      Fs("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t,
    );
  }
  function n2() {
    return Je;
  }
  function r2() {
    return (
      (Je = Et > 0 ? it(wo, --Et) : 0), vo--, Je === 10 && ((vo = 1), Ds--), Je
    );
  }
  function Mt() {
    return (
      (Je = Et < Tg ? it(wo, Et++) : 0), vo++, Je === 10 && ((vo = 1), Ds++), Je
    );
  }
  function mn() {
    return it(wo, Et);
  }
  function js() {
    return Et;
  }
  function Li(e, t) {
    return $i(wo, e, t);
  }
  function Bi(e) {
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
  function _g(e) {
    return (Ds = vo = 1), (Tg = hn((wo = e))), (Et = 0), [];
  }
  function Rg(e) {
    return (wo = ""), e;
  }
  function Us(e) {
    return Og(Li(Et - 1, Od(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function o2(e) {
    for (; (Je = mn()) && Je < 33; ) Mt();
    return Bi(e) > 2 || Bi(Je) > 3 ? "" : " ";
  }
  function i2(e, t) {
    for (
      ;
      --t &&
      Mt() &&
      !(Je < 48 || Je > 102 || (Je > 57 && Je < 65) || (Je > 70 && Je < 97));

    );
    return Li(e, js() + (t < 6 && mn() == 32 && Mt() == 32));
  }
  function Od(e) {
    for (; Mt(); )
      switch (Je) {
        case e:
          return Et;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Od(Je);
          break;
        case 40:
          e === 41 && Od(e);
          break;
        case 92:
          Mt();
          break;
      }
    return Et;
  }
  function a2(e, t) {
    for (
      ;
      Mt() && e + Je !== 47 + 10 && !(e + Je === 42 + 42 && mn() === 47);

    );
    return "/*" + Li(t, Et - 1) + "*" + Bs(e === 47 ? e : Mt());
  }
  function s2(e) {
    for (; !Bi(mn()); ) Mt();
    return Li(e, Et);
  }
  function l2(e) {
    return Rg(Ws("", null, null, null, [""], (e = _g(e)), 0, [0], e));
  }
  function Ws(e, t, n, r, o, i, a, s, l) {
    for (
      var c = 0,
        f = 0,
        p = a,
        h = 0,
        v = 0,
        g = 0,
        x = 1,
        N = 1,
        w = 1,
        b = 0,
        y = "",
        S = o,
        C = i,
        T = r,
        _ = y;
      N;

    )
      switch (((g = b), (b = Mt()))) {
        case 40:
          if (g != 108 && it(_, p - 1) == 58) {
            Ed((_ += we(Us(b), "&", "&\f")), "&\f") != -1 && (w = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          _ += Us(b);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          _ += o2(g);
          break;
        case 92:
          _ += i2(js() - 1, 7);
          continue;
        case 47:
          switch (mn()) {
            case 42:
            case 47:
              zs(u2(a2(Mt(), js()), t, n), l);
              break;
            default:
              _ += "/";
          }
          break;
        case 123 * x:
          s[c++] = hn(_) * w;
        case 125 * x:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              N = 0;
            case 59 + f:
              v > 0 &&
                hn(_) - p &&
                zs(
                  v > 32
                    ? Ig(_ + ";", r, n, p - 1)
                    : Ig(we(_, " ", "") + ";", r, n, p - 2),
                  l,
                );
              break;
            case 59:
              _ += ";";
            default:
              if (
                (zs((T = Ng(_, t, n, c, f, o, s, y, (S = []), (C = []), p)), i),
                b === 123)
              )
                if (f === 0) Ws(_, t, T, T, S, i, p, s, C);
                else
                  switch (h === 99 && it(_, 3) === 110 ? 100 : h) {
                    case 100:
                    case 109:
                    case 115:
                      Ws(
                        e,
                        T,
                        T,
                        r && zs(Ng(e, T, T, 0, 0, o, s, y, o, (S = []), p), C),
                        o,
                        C,
                        p,
                        s,
                        r ? S : C,
                      );
                      break;
                    default:
                      Ws(_, T, T, T, [""], C, 0, s, C);
                  }
          }
          (c = f = v = 0), (x = w = 1), (y = _ = ""), (p = a);
          break;
        case 58:
          (p = 1 + hn(_)), (v = g);
        default:
          if (x < 1) {
            if (b == 123) --x;
            else if (b == 125 && x++ == 0 && r2() == 125) continue;
          }
          switch (((_ += Bs(b)), b * x)) {
            case 38:
              w = f > 0 ? 1 : ((_ += "\f"), -1);
              break;
            case 44:
              (s[c++] = (hn(_) - 1) * w), (w = 1);
              break;
            case 64:
              mn() === 45 && (_ += Us(Mt())),
                (h = mn()),
                (f = p = hn((y = _ += s2(js())))),
                b++;
              break;
            case 45:
              g === 45 && hn(_) == 2 && (x = 0);
          }
      }
    return i;
  }
  function Ng(e, t, n, r, o, i, a, s, l, c, f) {
    for (
      var p = o - 1, h = o === 0 ? i : [""], v = Cd(h), g = 0, x = 0, N = 0;
      g < r;
      ++g
    )
      for (var w = 0, b = $i(e, p + 1, (p = Xw((x = a[g])))), y = e; w < v; ++w)
        (y = Og(x > 0 ? h[w] + " " + b : we(b, /&\f/g, h[w]))) && (l[N++] = y);
    return Fs(e, t, n, o === 0 ? xd : s, l, c, f);
  }
  function u2(e, t, n) {
    return Fs(e, t, n, Eg, Bs(n2()), $i(e, 2, -2), 0);
  }
  function Ig(e, t, n, r) {
    return Fs(e, t, n, kd, $i(e, 0, r), $i(e, r + 1, -1), r);
  }
  function So(e, t) {
    for (var n = "", r = Cd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function c2(e, t, n, r) {
    switch (e.type) {
      case Yw:
      case kd:
        return (e.return = e.return || e.value);
      case Eg:
        return "";
      case Cg:
        return (e.return = e.value + "{" + So(e.children, r) + "}");
      case xd:
        e.value = e.props.join(",");
    }
    return hn((n = So(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function d2(e) {
    var t = Cd(e);
    return function (n, r, o, i) {
      for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
      return a;
    };
  }
  function f2(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  var p2 = function (e, t, n) {
      for (
        var r = 0, o = 0;
        (r = o), (o = mn()), r === 38 && o === 12 && (t[n] = 1), !Bi(o);

      )
        Mt();
      return Li(e, Et);
    },
    h2 = function (e, t) {
      var n = -1,
        r = 44;
      do
        switch (Bi(r)) {
          case 0:
            r === 38 && mn() === 12 && (t[n] = 1), (e[n] += p2(Et - 1, t, n));
            break;
          case 2:
            e[n] += Us(r);
            break;
          case 4:
            if (r === 44) {
              (e[++n] = mn() === 58 ? "&\f" : ""), (t[n] = e[n].length);
              break;
            }
          default:
            e[n] += Bs(r);
        }
      while ((r = Mt()));
      return e;
    },
    m2 = function (e, t) {
      return Rg(h2(_g(e), t));
    },
    Pg = new WeakMap(),
    g2 = function (e) {
      if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          n.type !== "rule";

        )
          if (((n = n.parent), !n)) return;
        if (
          !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Pg.get(n)) &&
          !r
        ) {
          Pg.set(e, !0);
          for (
            var o = [], i = m2(t, o), a = n.props, s = 0, l = 0;
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
    y2 = function (e) {
      if (e.type === "decl") {
        var t = e.value;
        t.charCodeAt(0) === 108 &&
          t.charCodeAt(2) === 98 &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function Ag(e, t) {
    switch (Zw(e, t)) {
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
        return ye + e + Ls + e + ft + e + e;
      case 6828:
      case 4268:
        return ye + e + ft + e + e;
      case 6165:
        return ye + e + ft + "flex-" + e + e;
      case 5187:
        return (
          ye +
          e +
          we(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + ft + "flex-$1$2") +
          e
        );
      case 5443:
        return ye + e + ft + "flex-item-" + we(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          ye +
          e +
          ft +
          "flex-line-pack" +
          we(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return ye + e + ft + we(e, "shrink", "negative") + e;
      case 5292:
        return ye + e + ft + we(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          ye +
          "box-" +
          we(e, "-grow", "") +
          ye +
          e +
          ft +
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
              ye + "box-pack:$3" + ft + "flex-pack:$3",
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
        if (hn(e) - 1 - t > 6)
          switch (it(e, t + 1)) {
            case 109:
              if (it(e, t + 4) !== 45) break;
            case 102:
              return (
                we(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    ye +
                    "$2-$3$1" +
                    Ls +
                    (it(e, t + 3) == 108 ? "$3" : "$2-$3"),
                ) + e
              );
            case 115:
              return ~Ed(e, "stretch")
                ? Ag(we(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (it(e, t + 1) !== 115) break;
      case 6444:
        switch (it(e, hn(e) - 3 - (~Ed(e, "!important") && 10))) {
          case 107:
            return we(e, ":", ":" + ye) + e;
          case 101:
            return (
              we(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  ye +
                  (it(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  ye +
                  "$2$3$1" +
                  ft +
                  "$2box$3",
              ) + e
            );
        }
        break;
      case 5936:
        switch (it(e, t + 11)) {
          case 114:
            return ye + e + ft + we(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return ye + e + ft + we(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return ye + e + ft + we(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return ye + e + ft + e + e;
    }
    return e;
  }
  var b2 = function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case kd:
            e.return = Ag(e.value, e.length);
            break;
          case Cg:
            return So([Mi(e, { value: we(e.value, "@", "@" + ye) })], r);
          case xd:
            if (e.length)
              return t2(e.props, function (o) {
                switch (e2(o, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return So(
                      [
                        Mi(e, {
                          props: [we(o, /:(read-\w+)/, ":" + Ls + "$1")],
                        }),
                      ],
                      r,
                    );
                  case "::placeholder":
                    return So(
                      [
                        Mi(e, {
                          props: [we(o, /:(plac\w+)/, ":" + ye + "input-$1")],
                        }),
                        Mi(e, {
                          props: [we(o, /:(plac\w+)/, ":" + Ls + "$1")],
                        }),
                        Mi(e, {
                          props: [we(o, /:(plac\w+)/, ft + "input-$1")],
                        }),
                      ],
                      r,
                    );
                }
                return "";
              });
        }
    },
    v2 = [b2],
    $g = function (e) {
      var t = e.key;
      if (t === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (g) {
          var x = g.getAttribute("data-emotion");
          x.indexOf(" ") !== -1 &&
            (document.head.appendChild(g), g.setAttribute("data-s", ""));
        });
      }
      var r = e.stylisPlugins || v2,
        o = {},
        i,
        a = [];
      (i = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (g) {
            for (
              var x = g.getAttribute("data-emotion").split(" "), N = 1;
              N < x.length;
              N++
            )
              o[x[N]] = !0;
            a.push(g);
          },
        );
      var s,
        l = [g2, y2];
      {
        var c,
          f = [
            c2,
            f2(function (g) {
              c.insert(g);
            }),
          ],
          p = d2(l.concat(r, f)),
          h = function (g) {
            return So(l2(g), p);
          };
        s = function (g, x, N, w) {
          (c = N),
            h(g ? g + "{" + x.styles + "}" : x.styles),
            w && (v.inserted[x.name] = !0);
        };
      }
      var v = {
        key: t,
        sheet: new Gw({
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
      return v.sheet.hydrate(a), v;
    },
    Td = {},
    w2 = {
      get exports() {
        return Td;
      },
      set exports(e) {
        Td = e;
      },
    },
    Ee = {},
    Ze = typeof Symbol == "function" && Symbol.for,
    _d = Ze ? Symbol.for("react.element") : 60103,
    Rd = Ze ? Symbol.for("react.portal") : 60106,
    Vs = Ze ? Symbol.for("react.fragment") : 60107,
    Hs = Ze ? Symbol.for("react.strict_mode") : 60108,
    qs = Ze ? Symbol.for("react.profiler") : 60114,
    Ks = Ze ? Symbol.for("react.provider") : 60109,
    Js = Ze ? Symbol.for("react.context") : 60110,
    Nd = Ze ? Symbol.for("react.async_mode") : 60111,
    Gs = Ze ? Symbol.for("react.concurrent_mode") : 60111,
    Ys = Ze ? Symbol.for("react.forward_ref") : 60112,
    Xs = Ze ? Symbol.for("react.suspense") : 60113,
    S2 = Ze ? Symbol.for("react.suspense_list") : 60120,
    Qs = Ze ? Symbol.for("react.memo") : 60115,
    Zs = Ze ? Symbol.for("react.lazy") : 60116,
    x2 = Ze ? Symbol.for("react.block") : 60121,
    k2 = Ze ? Symbol.for("react.fundamental") : 60117,
    E2 = Ze ? Symbol.for("react.responder") : 60118,
    C2 = Ze ? Symbol.for("react.scope") : 60119;
  function Lt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case _d:
          switch (((e = e.type), e)) {
            case Nd:
            case Gs:
            case Vs:
            case qs:
            case Hs:
            case Xs:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Js:
                case Ys:
                case Zs:
                case Qs:
                case Ks:
                  return e;
                default:
                  return t;
              }
          }
        case Rd:
          return t;
      }
    }
  }
  function Mg(e) {
    return Lt(e) === Gs;
  }
  (Ee.AsyncMode = Nd),
    (Ee.ConcurrentMode = Gs),
    (Ee.ContextConsumer = Js),
    (Ee.ContextProvider = Ks),
    (Ee.Element = _d),
    (Ee.ForwardRef = Ys),
    (Ee.Fragment = Vs),
    (Ee.Lazy = Zs),
    (Ee.Memo = Qs),
    (Ee.Portal = Rd),
    (Ee.Profiler = qs),
    (Ee.StrictMode = Hs),
    (Ee.Suspense = Xs),
    (Ee.isAsyncMode = function (e) {
      return Mg(e) || Lt(e) === Nd;
    }),
    (Ee.isConcurrentMode = Mg),
    (Ee.isContextConsumer = function (e) {
      return Lt(e) === Js;
    }),
    (Ee.isContextProvider = function (e) {
      return Lt(e) === Ks;
    }),
    (Ee.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === _d;
    }),
    (Ee.isForwardRef = function (e) {
      return Lt(e) === Ys;
    }),
    (Ee.isFragment = function (e) {
      return Lt(e) === Vs;
    }),
    (Ee.isLazy = function (e) {
      return Lt(e) === Zs;
    }),
    (Ee.isMemo = function (e) {
      return Lt(e) === Qs;
    }),
    (Ee.isPortal = function (e) {
      return Lt(e) === Rd;
    }),
    (Ee.isProfiler = function (e) {
      return Lt(e) === qs;
    }),
    (Ee.isStrictMode = function (e) {
      return Lt(e) === Hs;
    }),
    (Ee.isSuspense = function (e) {
      return Lt(e) === Xs;
    }),
    (Ee.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Vs ||
        e === Gs ||
        e === qs ||
        e === Hs ||
        e === Xs ||
        e === S2 ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Zs ||
            e.$$typeof === Qs ||
            e.$$typeof === Ks ||
            e.$$typeof === Js ||
            e.$$typeof === Ys ||
            e.$$typeof === k2 ||
            e.$$typeof === E2 ||
            e.$$typeof === C2 ||
            e.$$typeof === x2))
      );
    }),
    (Ee.typeOf = Lt),
    (function (e) {
      e.exports = Ee;
    })(w2);
  var Lg = Td,
    O2 = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    T2 = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Bg = {};
  (Bg[Lg.ForwardRef] = O2), (Bg[Lg.Memo] = T2);
  var _2 = !0;
  function zg(e, t, n) {
    var r = "";
    return (
      n.split(" ").forEach(function (o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
      }),
      r
    );
  }
  var Dg = function (e, t, n) {
      var r = e.key + "-" + t.name;
      (n === !1 || _2 === !1) &&
        e.registered[r] === void 0 &&
        (e.registered[r] = t.styles);
    },
    Id = function (e, t, n) {
      Dg(e, t, n);
      var r = e.key + "-" + t.name;
      if (e.inserted[t.name] === void 0) {
        var o = t;
        do e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
        while (o !== void 0);
      }
    };
  function R2(e) {
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
  var N2 = {
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
    I2 = /[A-Z]|^ms/g,
    P2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Fg = function (e) {
      return e.charCodeAt(1) === 45;
    },
    jg = function (e) {
      return e != null && typeof e != "boolean";
    },
    Pd = kg(function (e) {
      return Fg(e) ? e : e.replace(I2, "-$&").toLowerCase();
    }),
    Ug = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if (typeof t == "string")
            return t.replace(P2, function (n, r, o) {
              return (gn = { name: r, styles: o, next: gn }), r;
            });
      }
      return N2[e] !== 1 && !Fg(e) && typeof t == "number" && t !== 0
        ? t + "px"
        : t;
    };
  function zi(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        if (n.anim === 1)
          return (gn = { name: n.name, styles: n.styles, next: gn }), n.name;
        if (n.styles !== void 0) {
          var r = n.next;
          if (r !== void 0)
            for (; r !== void 0; )
              (gn = { name: r.name, styles: r.styles, next: gn }), (r = r.next);
          var o = n.styles + ";";
          return o;
        }
        return A2(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var i = gn,
            a = n(e);
          return (gn = i), zi(e, t, a);
        }
        break;
      }
    }
    if (t == null) return n;
    var s = t[n];
    return s !== void 0 ? s : n;
  }
  function A2(e, t, n) {
    var r = "";
    if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) r += zi(e, t, n[o]) + ";";
    else
      for (var i in n) {
        var a = n[i];
        if (typeof a != "object")
          t != null && t[a] !== void 0
            ? (r += i + "{" + t[a] + "}")
            : jg(a) && (r += Pd(i) + ":" + Ug(i, a) + ";");
        else if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var s = 0; s < a.length; s++)
            jg(a[s]) && (r += Pd(i) + ":" + Ug(i, a[s]) + ";");
        else {
          var l = zi(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Pd(i) + ":" + l + ";";
              break;
            }
            default:
              r += i + "{" + l + "}";
          }
        }
      }
    return r;
  }
  var Wg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    gn,
    el = function (e, t, n) {
      if (
        e.length === 1 &&
        typeof e[0] == "object" &&
        e[0] !== null &&
        e[0].styles !== void 0
      )
        return e[0];
      var r = !0,
        o = "";
      gn = void 0;
      var i = e[0];
      i == null || i.raw === void 0
        ? ((r = !1), (o += zi(n, t, i)))
        : (o += i[0]);
      for (var a = 1; a < e.length; a++)
        (o += zi(n, t, e[a])), r && (o += i[a]);
      Wg.lastIndex = 0;
      for (var s = "", l; (l = Wg.exec(o)) !== null; ) s += "-" + l[1];
      var c = R2(o) + s;
      return { name: c, styles: o, next: gn };
    },
    $2 = function (e) {
      return e();
    },
    Vg = au.useInsertionEffect ? au.useInsertionEffect : !1,
    M2 = Vg || $2,
    Hg = Vg || E.useLayoutEffect,
    Ad = E.createContext(typeof HTMLElement < "u" ? $g({ key: "css" }) : null),
    L2 = Ad.Provider,
    B2 = function () {
      return E.useContext(Ad);
    },
    qg = function (e) {
      return E.forwardRef(function (t, n) {
        var r = E.useContext(Ad);
        return e(t, r, n);
      });
    },
    $d = E.createContext({}),
    z2 = qg(function (e, t) {
      var n = e.styles,
        r = el([n], void 0, E.useContext($d)),
        o = E.useRef();
      return (
        Hg(
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
        Hg(
          function () {
            var i = o.current,
              a = i[0],
              s = i[1];
            if (s) {
              i[1] = !1;
              return;
            }
            if ((r.next !== void 0 && Id(t, r.next, !0), a.tags.length)) {
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
  function tl() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return el(t);
  }
  var xo = function () {
      var e = tl.apply(void 0, arguments),
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
    D2 = qw,
    F2 = function (e) {
      return e !== "theme";
    },
    Kg = function (e) {
      return typeof e == "string" && e.charCodeAt(0) > 96 ? D2 : F2;
    },
    Jg = function (e, t, n) {
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
    j2 = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        Dg(t, n, r),
        M2(function () {
          return Id(t, n, r);
        }),
        null
      );
    },
    U2 = function e(t, n) {
      var r = t.__emotion_real === t,
        o = (r && t.__emotion_base) || t,
        i,
        a;
      n !== void 0 && ((i = n.label), (a = n.target));
      var s = Jg(t, n, r),
        l = s || Kg(o),
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
          for (var h = f.length, v = 1; v < h; v++) p.push(f[v], f[0][v]);
        }
        var g = qg(function (x, N, w) {
          var b = (c && x.as) || o,
            y = "",
            S = [],
            C = x;
          if (x.theme == null) {
            C = {};
            for (var T in x) C[T] = x[T];
            C.theme = E.useContext($d);
          }
          typeof x.className == "string"
            ? (y = zg(N.registered, S, x.className))
            : x.className != null && (y = x.className + " ");
          var _ = el(p.concat(S), N.registered, C);
          (y += N.key + "-" + _.name), a !== void 0 && (y += " " + a);
          var I = c && s === void 0 ? Kg(b) : l,
            B = {};
          for (var M in x) (c && M === "as") || (I(M) && (B[M] = x[M]));
          return (
            (B.className = y),
            (B.ref = w),
            E.createElement(
              E.Fragment,
              null,
              E.createElement(j2, {
                cache: N,
                serialized: _,
                isStringTag: typeof b == "string",
              }),
              E.createElement(b, B),
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
          (g.__emotion_styles = p),
          (g.__emotion_forwardProp = s),
          Object.defineProperty(g, "toString", {
            value: function () {
              return "." + a;
            },
          }),
          (g.withComponent = function (x, N) {
            return e(x, k({}, n, N, { shouldForwardProp: Jg(g, N, !0) })).apply(
              void 0,
              p,
            );
          }),
          g
        );
      };
    };
  const W2 = U2;
  var V2 = [
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
    Md = W2.bind();
  V2.forEach(function (e) {
    Md[e] = Md(e);
  });
  const H2 = Md;
  let Ld;
  typeof document == "object" && (Ld = $g({ key: "css", prepend: !0 }));
  function q2(e) {
    const { injectFirst: t, children: n } = e;
    return t && Ld ? R(L2, { value: Ld, children: n }) : n;
  }
  function K2(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function J2(e) {
    const { styles: t, defaultTheme: n = {} } = e;
    return R(z2, {
      styles: typeof t == "function" ? (r) => t(K2(r) ? n : r) : t,
    });
  }
  function G2(e, t) {
    return H2(e, t);
  }
  const Y2 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  };
  function Di(e, t) {
    return t ? Ht(e, t, { clone: !1 }) : e;
  }
  const Bd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    Gg = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${Bd[e]}px)`,
    };
  function An(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const o = r.breakpoints || Gg;
      return t.reduce((i, a, s) => ((i[o.up(o.keys[s])] = n(t[s])), i), {});
    }
    if (typeof t == "object") {
      const o = r.breakpoints || Gg;
      return Object.keys(t).reduce((i, a) => {
        if (Object.keys(o.values || Bd).indexOf(a) !== -1) {
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
  function X2(e = {}) {
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
  function Q2(e, t) {
    return e.reduce((n, r) => {
      const o = n[r];
      return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
  }
  function ko(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
      const r = `vars.${t}`
        .split(".")
        .reduce((o, i) => (o && o[i] ? o[i] : null), e);
      if (r != null) return r;
    }
    return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
  }
  function nl(e, t, n, r = n) {
    let o;
    return (
      typeof e == "function"
        ? (o = e(n))
        : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = ko(e, n) || r),
      t && (o = t(o, r, e)),
      o
    );
  }
  function Se(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      i = (a) => {
        if (a[t] == null) return null;
        const s = a[t],
          l = a.theme,
          c = ko(l, r) || {};
        return An(a, s, (f) => {
          let p = nl(c, o, f);
          return (
            f === p &&
              typeof f == "string" &&
              (p = nl(c, o, `${t}${f === "default" ? "" : G(f)}`, f)),
            n === !1 ? p : { [n]: p }
          );
        });
      };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
  }
  function rl(...e) {
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
  function Z2(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
  }
  const eS = { m: "margin", p: "padding" },
    tS = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    Yg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    nS = Z2((e) => {
      if (e.length > 2)
        if (Yg[e]) e = Yg[e];
        else return [e];
      const [t, n] = e.split(""),
        r = eS[t],
        o = tS[n] || "";
      return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    zd = [
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
  [...zd, ...Dd];
  function Fi(e, t, n, r) {
    var o;
    const i = (o = ko(e, t, !1)) != null ? o : n;
    return typeof i == "number"
      ? (a) => (typeof a == "string" ? a : i * a)
      : Array.isArray(i)
      ? (a) => (typeof a == "string" ? a : i[a])
      : typeof i == "function"
      ? i
      : () => {};
  }
  function Xg(e) {
    return Fi(e, "spacing", 8);
  }
  function ji(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
      r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
  }
  function rS(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = ji(t, n)), r), {});
  }
  function oS(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = nS(n),
      i = rS(o, r),
      a = e[n];
    return An(e, a, i);
  }
  function Qg(e, t) {
    const n = Xg(e.theme);
    return Object.keys(e)
      .map((r) => oS(e, t, r, n))
      .reduce(Di, {});
  }
  function We(e) {
    return Qg(e, zd);
  }
  (We.propTypes = {}), (We.filterProps = zd);
  function Ve(e) {
    return Qg(e, Dd);
  }
  (Ve.propTypes = {}), (Ve.filterProps = Dd);
  function yn(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  const iS = Se({ prop: "border", themeKey: "borders", transform: yn }),
    aS = Se({ prop: "borderTop", themeKey: "borders", transform: yn }),
    sS = Se({ prop: "borderRight", themeKey: "borders", transform: yn }),
    lS = Se({ prop: "borderBottom", themeKey: "borders", transform: yn }),
    uS = Se({ prop: "borderLeft", themeKey: "borders", transform: yn }),
    cS = Se({ prop: "borderColor", themeKey: "palette" }),
    dS = Se({ prop: "borderTopColor", themeKey: "palette" }),
    fS = Se({ prop: "borderRightColor", themeKey: "palette" }),
    pS = Se({ prop: "borderBottomColor", themeKey: "palette" }),
    hS = Se({ prop: "borderLeftColor", themeKey: "palette" }),
    ol = (e) => {
      if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = Fi(e.theme, "shape.borderRadius", 4),
          n = (r) => ({ borderRadius: ji(t, r) });
        return An(e, e.borderRadius, n);
      }
      return null;
    };
  (ol.propTypes = {}),
    (ol.filterProps = ["borderRadius"]),
    rl(iS, aS, sS, lS, uS, cS, dS, fS, pS, hS, ol);
  const il = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = Fi(e.theme, "spacing", 8),
        n = (r) => ({ gap: ji(t, r) });
      return An(e, e.gap, n);
    }
    return null;
  };
  (il.propTypes = {}), (il.filterProps = ["gap"]);
  const al = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = Fi(e.theme, "spacing", 8),
        n = (r) => ({ columnGap: ji(t, r) });
      return An(e, e.columnGap, n);
    }
    return null;
  };
  (al.propTypes = {}), (al.filterProps = ["columnGap"]);
  const sl = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = Fi(e.theme, "spacing", 8),
        n = (r) => ({ rowGap: ji(t, r) });
      return An(e, e.rowGap, n);
    }
    return null;
  };
  (sl.propTypes = {}), (sl.filterProps = ["rowGap"]);
  const mS = Se({ prop: "gridColumn" }),
    gS = Se({ prop: "gridRow" }),
    yS = Se({ prop: "gridAutoFlow" }),
    bS = Se({ prop: "gridAutoColumns" }),
    vS = Se({ prop: "gridAutoRows" }),
    wS = Se({ prop: "gridTemplateColumns" }),
    SS = Se({ prop: "gridTemplateRows" }),
    xS = Se({ prop: "gridTemplateAreas" }),
    kS = Se({ prop: "gridArea" });
  rl(il, al, sl, mS, gS, yS, bS, vS, wS, SS, xS, kS);
  function Eo(e, t) {
    return t === "grey" ? t : e;
  }
  const ES = Se({ prop: "color", themeKey: "palette", transform: Eo }),
    CS = Se({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: Eo,
    }),
    OS = Se({ prop: "backgroundColor", themeKey: "palette", transform: Eo });
  rl(ES, CS, OS);
  function Bt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const TS = Se({ prop: "width", transform: Bt }),
    Fd = (e) => {
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
              Bd[n] ||
              Bt(n),
          };
        };
        return An(e, e.maxWidth, t);
      }
      return null;
    };
  Fd.filterProps = ["maxWidth"];
  const _S = Se({ prop: "minWidth", transform: Bt }),
    RS = Se({ prop: "height", transform: Bt }),
    NS = Se({ prop: "maxHeight", transform: Bt }),
    IS = Se({ prop: "minHeight", transform: Bt });
  Se({ prop: "size", cssProperty: "width", transform: Bt }),
    Se({ prop: "size", cssProperty: "height", transform: Bt });
  const PS = Se({ prop: "boxSizing" });
  rl(TS, Fd, _S, RS, NS, IS, PS);
  const AS = {
      border: { themeKey: "borders", transform: yn },
      borderTop: { themeKey: "borders", transform: yn },
      borderRight: { themeKey: "borders", transform: yn },
      borderBottom: { themeKey: "borders", transform: yn },
      borderLeft: { themeKey: "borders", transform: yn },
      borderColor: { themeKey: "palette" },
      borderTopColor: { themeKey: "palette" },
      borderRightColor: { themeKey: "palette" },
      borderBottomColor: { themeKey: "palette" },
      borderLeftColor: { themeKey: "palette" },
      borderRadius: { themeKey: "shape.borderRadius", style: ol },
      color: { themeKey: "palette", transform: Eo },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: Eo,
      },
      backgroundColor: { themeKey: "palette", transform: Eo },
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
      gap: { style: il },
      rowGap: { style: sl },
      columnGap: { style: al },
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
      width: { transform: Bt },
      maxWidth: { style: Fd },
      minWidth: { transform: Bt },
      height: { transform: Bt },
      maxHeight: { transform: Bt },
      minHeight: { transform: Bt },
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
    ll = AS;
  function $S(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
      n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
  }
  function MS(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function LS() {
    function e(n, r, o, i) {
      const a = { [n]: r, theme: o },
        s = i[n];
      if (!s) return { [n]: r };
      const { cssProperty: l = n, themeKey: c, transform: f, style: p } = s;
      if (r == null) return null;
      const h = ko(o, c) || {};
      return p
        ? p(a)
        : An(a, r, (v) => {
            let g = nl(h, f, v);
            return (
              v === g &&
                typeof v == "string" &&
                (g = nl(h, f, `${n}${v === "default" ? "" : G(v)}`, v)),
              l === !1 ? g : { [l]: g }
            );
          });
    }
    function t(n) {
      var r;
      const { sx: o, theme: i = {} } = n || {};
      if (!o) return null;
      const a = (r = i.unstable_sxConfig) != null ? r : ll;
      function s(l) {
        let c = l;
        if (typeof l == "function") c = l(i);
        else if (typeof l != "object") return l;
        if (!c) return null;
        const f = X2(i.breakpoints),
          p = Object.keys(f);
        let h = f;
        return (
          Object.keys(c).forEach((v) => {
            const g = MS(c[v], i);
            if (g != null)
              if (typeof g == "object")
                if (a[v]) h = Di(h, e(v, g, i, a));
                else {
                  const x = An({ theme: i }, g, (N) => ({ [v]: N }));
                  $S(x, g) ? (h[v] = t({ sx: g, theme: i })) : (h = Di(h, x));
                }
              else h = Di(h, e(v, g, i, a));
          }),
          Q2(p, h)
        );
      }
      return Array.isArray(o) ? o.map(s) : s(o);
    }
    return t;
  }
  const Zg = LS();
  Zg.filterProps = ["sx"];
  const jd = Zg,
    BS = ["sx"],
    zS = (e) => {
      var t, n;
      const r = { systemProps: {}, otherProps: {} },
        o =
          (t =
            e == null || (n = e.theme) == null
              ? void 0
              : n.unstable_sxConfig) != null
            ? t
            : ll;
      return (
        Object.keys(e).forEach((i) => {
          o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
        }),
        r
      );
    };
  function DS(e) {
    const { sx: t } = e,
      n = Q(e, BS),
      { systemProps: r, otherProps: o } = zS(n);
    let i;
    return (
      Array.isArray(t)
        ? (i = [r, ...t])
        : typeof t == "function"
        ? (i = (...a) => {
            const s = t(...a);
            return Or(s) ? k({}, r, s) : r;
          })
        : (i = k({}, r, t)),
      k({}, o, { sx: i })
    );
  }
  function e0(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (n = e0(e[t])) && (r && (r += " "), (r += n));
      else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
  }
  function ee() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
      (e = arguments[n++]) && (t = e0(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const FS = ["values", "unit", "step"],
    jS = (e) => {
      const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
      return (
        t.sort((n, r) => n.val - r.val),
        t.reduce((n, r) => k({}, n, { [r.key]: r.val }), {})
      );
    };
  function US(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
      } = e,
      o = Q(e, FS),
      i = jS(t),
      a = Object.keys(i);
    function s(h) {
      return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
    }
    function l(h) {
      return `@media (max-width:${
        (typeof t[h] == "number" ? t[h] : h) - r / 100
      }${n})`;
    }
    function c(h, v) {
      const g = a.indexOf(v);
      return `@media (min-width:${
        typeof t[h] == "number" ? t[h] : h
      }${n}) and (max-width:${
        (g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : v) - r / 100
      }${n})`;
    }
    function f(h) {
      return a.indexOf(h) + 1 < a.length ? c(h, a[a.indexOf(h) + 1]) : s(h);
    }
    function p(h) {
      const v = a.indexOf(h);
      return v === 0
        ? s(a[1])
        : v === a.length - 1
        ? l(a[v])
        : c(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
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
  const WS = { borderRadius: 4 },
    VS = WS;
  function HS(e = 8) {
    if (e.mui) return e;
    const t = Xg({ spacing: e }),
      n = (...r) =>
        (r.length === 0 ? [1] : r)
          .map((o) => {
            const i = t(o);
            return typeof i == "number" ? `${i}px` : i;
          })
          .join(" ");
    return (n.mui = !0), n;
  }
  const qS = ["breakpoints", "palette", "spacing", "shape"];
  function ul(e = {}, ...t) {
    const {
        breakpoints: n = {},
        palette: r = {},
        spacing: o,
        shape: i = {},
      } = e,
      a = Q(e, qS),
      s = US(n),
      l = HS(o);
    let c = Ht(
      {
        breakpoints: s,
        direction: "ltr",
        components: {},
        palette: k({ mode: "light" }, r),
        spacing: l,
        shape: k({}, VS, i),
      },
      a,
    );
    return (
      (c = t.reduce((f, p) => Ht(f, p), c)),
      (c.unstable_sxConfig = k(
        {},
        ll,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (c.unstable_sx = function (f) {
        return jd({ sx: f, theme: this });
      }),
      c
    );
  }
  const KS = E.createContext(null),
    t0 = KS;
  function n0() {
    return E.useContext(t0);
  }
  const JS = typeof Symbol == "function" && Symbol.for,
    GS = JS ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  function YS(e, t) {
    return typeof t == "function" ? t(e) : k({}, e, t);
  }
  function XS(e) {
    const { children: t, theme: n } = e,
      r = n0(),
      o = E.useMemo(() => {
        const i = r === null ? n : YS(r, n);
        return i != null && (i[GS] = r !== null), i;
      }, [n, r]);
    return R(t0.Provider, { value: o, children: t });
  }
  function QS(e) {
    return Object.keys(e).length === 0;
  }
  function ZS(e = null) {
    const t = n0();
    return !t || QS(t) ? e : t;
  }
  const ex = ul();
  function Ud(e = ex) {
    return ZS(e);
  }
  const tx = ["variant"];
  function r0(e) {
    return e.length === 0;
  }
  function o0(e) {
    const { variant: t } = e,
      n = Q(e, tx);
    let r = t || "";
    return (
      Object.keys(n)
        .sort()
        .forEach((o) => {
          o === "color"
            ? (r += r0(r) ? e[o] : G(e[o]))
            : (r += `${r0(r) ? o : G(o)}${G(e[o].toString())}`);
        }),
      r
    );
  }
  const nx = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
    ],
    rx = ["theme"],
    ox = ["theme"];
  function Ui(e) {
    return Object.keys(e).length === 0;
  }
  function ix(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  const ax = (e, t) =>
      t.components && t.components[e] && t.components[e].styleOverrides
        ? t.components[e].styleOverrides
        : null,
    sx = (e, t) => {
      let n = [];
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants);
      const r = {};
      return (
        n.forEach((o) => {
          const i = o0(o.props);
          r[i] = o.style;
        }),
        r
      );
    },
    lx = (e, t, n, r) => {
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
              f && s.push(t[o0(c.props)]);
          }),
        s
      );
    };
  function Wi(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  const ux = ul();
  function i0(e = {}) {
    const {
        defaultTheme: t = ux,
        rootShouldForwardProp: n = Wi,
        slotShouldForwardProp: r = Wi,
      } = e,
      o = (i) => {
        const a = Ui(i.theme) ? t : i.theme;
        return jd(k({}, i, { theme: a }));
      };
    return (
      (o.__mui_systemSx = !0),
      (i, a = {}) => {
        Y2(i, (y) => y.filter((S) => !(S != null && S.__mui_systemSx)));
        const {
            name: s,
            slot: l,
            skipVariantsResolver: c,
            skipSx: f,
            overridesResolver: p,
          } = a,
          h = Q(a, nx),
          v = c !== void 0 ? c : (l && l !== "Root") || !1,
          g = f || !1;
        let x,
          N = Wi;
        l === "Root" ? (N = n) : l ? (N = r) : ix(i) && (N = void 0);
        const w = G2(i, k({ shouldForwardProp: N, label: x }, h)),
          b = (y, ...S) => {
            const C = S
              ? S.map((I) =>
                  typeof I == "function" && I.__emotion_real !== I
                    ? (B) => {
                        let { theme: M } = B,
                          U = Q(B, rx);
                        return I(k({ theme: Ui(M) ? t : M }, U));
                      }
                    : I,
                )
              : [];
            let T = y;
            s &&
              p &&
              C.push((I) => {
                const B = Ui(I.theme) ? t : I.theme,
                  M = ax(s, B);
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
                !v &&
                C.push((I) => {
                  const B = Ui(I.theme) ? t : I.theme;
                  return lx(I, sx(s, B), B, s);
                }),
              g || C.push(o);
            const _ = C.length - S.length;
            if (Array.isArray(y) && _ > 0) {
              const I = new Array(_).fill("");
              (T = [...y, ...I]), (T.raw = [...y.raw, ...I]);
            } else
              typeof y == "function" &&
                y.__emotion_real !== y &&
                (T = (I) => {
                  let { theme: B } = I,
                    M = Q(I, ox);
                  return y(k({ theme: Ui(B) ? t : B }, M));
                });
            return w(T, ...C);
          };
        return w.withConfig && (b.withConfig = w.withConfig), b;
      }
    );
  }
  const cx = i0(),
    dx = cx;
  function fx(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
      !t.components ||
      !t.components[n] ||
      !t.components[n].defaultProps
      ? r
      : Sd(t.components[n].defaultProps, r);
  }
  function a0({ props: e, name: t, defaultTheme: n }) {
    const r = Ud(n);
    return fx({ theme: r, name: t, props: e });
  }
  function Wd(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n);
  }
  function px(e) {
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
    if (e.charAt(0) === "#") return _r(px(e));
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
      throw new Error(tr(9, e));
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
        throw new Error(tr(10, o));
    } else r = r.split(",");
    return (
      (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
  }
  function cl(e) {
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
  function hx(e) {
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
      cl({ type: s, values: l })
    );
  }
  function s0(e) {
    e = _r(e);
    let t = e.type === "hsl" || e.type === "hsla" ? _r(hx(e)).values : e.values;
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
  function mx(e, t) {
    const n = s0(e),
      r = s0(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  }
  function Ct(e, t) {
    return (
      (e = _r(e)),
      (t = Wd(t)),
      (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
      e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      cl(e)
    );
  }
  function dl(e, t) {
    if (((e = _r(e)), (t = Wd(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return cl(e);
  }
  function fl(e, t) {
    if (((e = _r(e)), (t = Wd(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return cl(e);
  }
  const gx = {};
  function yx(e) {
    const t = Ud();
    return R($d.Provider, {
      value: typeof t == "object" ? t : gx,
      children: e.children,
    });
  }
  function bx(e) {
    const { children: t, theme: n } = e;
    return R(XS, { theme: n, children: R(yx, { children: t }) });
  }
  const vx = [
      "className",
      "component",
      "disableGutters",
      "fixed",
      "maxWidth",
      "classes",
    ],
    wx = ul(),
    Sx = dx("div", {
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
    xx = (e) => a0({ props: e, name: "MuiContainer", defaultTheme: wx }),
    kx = (e, t) => {
      const n = (l) => ae(t, l),
        { classes: r, fixed: o, disableGutters: i, maxWidth: a } = e,
        s = {
          root: [
            "root",
            a && `maxWidth${G(String(a))}`,
            o && "fixed",
            i && "disableGutters",
          ],
        };
      return de(s, n, r);
    };
  function Ex(e = {}) {
    const {
        createStyledComponent: t = Sx,
        useThemeProps: n = xx,
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
          maxWidth: h = "lg",
        } = s,
        v = Q(s, vx),
        g = k({}, s, {
          component: c,
          disableGutters: f,
          fixed: p,
          maxWidth: h,
        }),
        x = kx(g, r);
      return R(
        o,
        k({ as: c, ownerState: g, className: ee(x.root, l), ref: a }, v),
      );
    });
  }
  function Cx(e, t) {
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
  const Ox = ["mode", "contrastThreshold", "tonalOffset"],
    l0 = {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: Pi.white, default: Pi.white },
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
    Vd = {
      text: {
        primary: Pi.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: Pi.white,
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
  function u0(e, t, n, r) {
    const o = r.light || r,
      i = r.dark || r * 1.5;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : t === "light"
        ? (e.light = fl(e.main, o))
        : t === "dark" && (e.dark = dl(e.main, i)));
  }
  function Tx(e = "light") {
    return e === "dark"
      ? { main: Er[200], light: Er[50], dark: Er[400] }
      : { main: Er[700], light: Er[400], dark: Er[800] };
  }
  function _x(e = "light") {
    return e === "dark"
      ? { main: kr[200], light: kr[50], dark: kr[400] }
      : { main: kr[500], light: kr[300], dark: kr[700] };
  }
  function Rx(e = "light") {
    return e === "dark"
      ? { main: xr[500], light: xr[300], dark: xr[700] }
      : { main: xr[700], light: xr[400], dark: xr[800] };
  }
  function Nx(e = "light") {
    return e === "dark"
      ? { main: yo[400], light: yo[300], dark: yo[700] }
      : { main: yo[700], light: yo[500], dark: yo[900] };
  }
  function Ix(e = "light") {
    return e === "dark"
      ? { main: Cr[400], light: Cr[300], dark: Cr[700] }
      : { main: Cr[800], light: Cr[500], dark: Cr[900] };
  }
  function Px(e = "light") {
    return e === "dark"
      ? { main: bo[400], light: bo[300], dark: bo[700] }
      : { main: "#ed6c02", light: bo[500], dark: bo[900] };
  }
  function Ax(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
      } = e,
      o = Q(e, Ox),
      i = e.primary || Tx(t),
      a = e.secondary || _x(t),
      s = e.error || Rx(t),
      l = e.info || Nx(t),
      c = e.success || Ix(t),
      f = e.warning || Px(t);
    function p(g) {
      return mx(g, Vd.text.primary) >= n ? Vd.text.primary : l0.text.primary;
    }
    const h = ({
        color: g,
        name: x,
        mainShade: N = 500,
        lightShade: w = 300,
        darkShade: b = 700,
      }) => {
        if (
          ((g = k({}, g)),
          !g.main && g[N] && (g.main = g[N]),
          !g.hasOwnProperty("main"))
        )
          throw new Error(tr(11, x ? ` (${x})` : "", N));
        if (typeof g.main != "string")
          throw new Error(tr(12, x ? ` (${x})` : "", JSON.stringify(g.main)));
        return (
          u0(g, "light", w, r),
          u0(g, "dark", b, r),
          g.contrastText || (g.contrastText = p(g.main)),
          g
        );
      },
      v = { dark: Vd, light: l0 };
    return Ht(
      k(
        {
          common: k({}, Pi),
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
          warning: h({ color: f, name: "warning" }),
          info: h({ color: l, name: "info" }),
          success: h({ color: c, name: "success" }),
          grey: Tw,
          contrastThreshold: n,
          getContrastText: p,
          augmentColor: h,
          tonalOffset: r,
        },
        v[t],
      ),
      o,
    );
  }
  const $x = [
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
  function Mx(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const c0 = { textTransform: "uppercase" },
    d0 = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Lx(e, t) {
    const n = typeof t == "function" ? t(e) : t,
      {
        fontFamily: r = d0,
        fontSize: o = 14,
        fontWeightLight: i = 300,
        fontWeightRegular: a = 400,
        fontWeightMedium: s = 500,
        fontWeightBold: l = 700,
        htmlFontSize: c = 16,
        allVariants: f,
        pxToRem: p,
      } = n,
      h = Q(n, $x),
      v = o / 14,
      g = p || ((w) => `${(w / c) * v}rem`),
      x = (w, b, y, S, C) =>
        k(
          { fontFamily: r, fontWeight: w, fontSize: g(b), lineHeight: y },
          r === d0 ? { letterSpacing: `${Mx(S / b)}em` } : {},
          C,
          f,
        ),
      N = {
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
        button: x(s, 14, 1.75, 0.4, c0),
        caption: x(a, 12, 1.66, 0.4),
        overline: x(a, 12, 2.66, 1, c0),
      };
    return Ht(
      k(
        {
          htmlFontSize: c,
          pxToRem: g,
          fontFamily: r,
          fontSize: o,
          fontWeightLight: i,
          fontWeightRegular: a,
          fontWeightMedium: s,
          fontWeightBold: l,
        },
        N,
      ),
      h,
      { clone: !1 },
    );
  }
  const Bx = 0.2,
    zx = 0.14,
    Dx = 0.12;
  function Me(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Bx})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${zx})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Dx})`,
    ].join(",");
  }
  const Fx = [
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
    jx = Fx,
    Ux = ["duration", "easing", "delay"],
    Wx = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    Vx = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function f0(e) {
    return `${Math.round(e)}ms`;
  }
  function Hx(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
  }
  function qx(e) {
    const t = k({}, Wx, e.easing),
      n = k({}, Vx, e.duration);
    return k(
      {
        getAutoHeightDuration: Hx,
        create: (r = ["all"], o = {}) => {
          const {
            duration: i = n.standard,
            easing: a = t.easeInOut,
            delay: s = 0,
          } = o;
          return (
            Q(o, Ux),
            (Array.isArray(r) ? r : [r])
              .map(
                (l) =>
                  `${l} ${typeof i == "string" ? i : f0(i)} ${a} ${
                    typeof s == "string" ? s : f0(s)
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
  const Kx = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    Jx = Kx,
    Gx = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
    ];
  function p0(e = {}, ...t) {
    const {
        mixins: n = {},
        palette: r = {},
        transitions: o = {},
        typography: i = {},
      } = e,
      a = Q(e, Gx);
    if (e.vars) throw new Error(tr(18));
    const s = Ax(r),
      l = ul(e);
    let c = Ht(l, {
      mixins: Cx(l.breakpoints, n),
      palette: s,
      shadows: jx.slice(),
      typography: Lx(s, i),
      transitions: qx(o),
      zIndex: k({}, Jx),
    });
    return (
      (c = Ht(c, a)),
      (c = t.reduce((f, p) => Ht(f, p), c)),
      (c.unstable_sxConfig = k(
        {},
        ll,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (c.unstable_sx = function (f) {
        return jd({ sx: f, theme: this });
      }),
      c
    );
  }
  const Yx = p0(),
    pl = Yx;
  function Vi() {
    return Ud(pl);
  }
  function fe({ props: e, name: t }) {
    return a0({ props: e, name: t, defaultTheme: pl });
  }
  const bn = (e) => Wi(e) && e !== "classes",
    Xx = Wi,
    Qx = i0({ defaultTheme: pl, rootShouldForwardProp: bn }),
    J = Qx,
    Zx = (e) => {
      let t;
      return (
        e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
        (t / 100).toFixed(2)
      );
    },
    h0 = Zx;
  function Co(e) {
    return typeof e == "string";
  }
  function ek(e, t, n) {
    return e === void 0 || Co(e)
      ? t
      : k({}, t, { ownerState: k({}, t.ownerState, n) });
  }
  function tk(e, t = []) {
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
  function Hd(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function m0(e) {
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
  function nk(e) {
    const {
      getSlotProps: t,
      additionalProps: n,
      externalSlotProps: r,
      externalForwardedProps: o,
      className: i,
    } = e;
    if (!t) {
      const v = ee(
          o == null ? void 0 : o.className,
          r == null ? void 0 : r.className,
          i,
          n == null ? void 0 : n.className,
        ),
        g = k(
          {},
          n == null ? void 0 : n.style,
          o == null ? void 0 : o.style,
          r == null ? void 0 : r.style,
        ),
        x = k({}, n, o, r);
      return (
        v.length > 0 && (x.className = v),
        Object.keys(g).length > 0 && (x.style = g),
        { props: x, internalRef: void 0 }
      );
    }
    const a = tk(k({}, o, r)),
      s = m0(r),
      l = m0(o),
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
      h = k({}, c, n, l, s);
    return (
      f.length > 0 && (h.className = f),
      Object.keys(p).length > 0 && (h.style = p),
      { props: h, internalRef: c.ref }
    );
  }
  const rk = ["elementType", "externalSlotProps", "ownerState"];
  function g0(e) {
    var t;
    const { elementType: n, externalSlotProps: r, ownerState: o } = e,
      i = Q(e, rk),
      a = Hd(r, o),
      { props: s, internalRef: l } = nk(k({}, i, { externalSlotProps: a })),
      c = ot(
        l,
        a == null ? void 0 : a.ref,
        (t = e.additionalProps) == null ? void 0 : t.ref,
      );
    return ek(n, k({}, s, { ref: c }), o);
  }
  const ok = [
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
  function ik(e) {
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
  function ak(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e;
  }
  function sk(e) {
    return !(
      e.disabled ||
      (e.tagName === "INPUT" && e.type === "hidden") ||
      ak(e)
    );
  }
  function lk(e) {
    const t = [],
      n = [];
    return (
      Array.from(e.querySelectorAll(ok)).forEach((r, o) => {
        const i = ik(r);
        i === -1 ||
          !sk(r) ||
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
  function uk() {
    return !0;
  }
  function ck(e) {
    const {
        children: t,
        disableAutoFocus: n = !1,
        disableEnforceFocus: r = !1,
        disableRestoreFocus: o = !1,
        getTabbable: i = lk,
        isEnabled: a = uk,
        open: s,
      } = e,
      l = E.useRef(!1),
      c = E.useRef(null),
      f = E.useRef(null),
      p = E.useRef(null),
      h = E.useRef(null),
      v = E.useRef(!1),
      g = E.useRef(null),
      x = ot(t.ref, g),
      N = E.useRef(null);
    E.useEffect(() => {
      !s || !g.current || (v.current = !n);
    }, [n, s]),
      E.useEffect(() => {
        if (!s || !g.current) return;
        const y = kt(g.current);
        return (
          g.current.contains(y.activeElement) ||
            (g.current.hasAttribute("tabIndex") ||
              g.current.setAttribute("tabIndex", "-1"),
            v.current && g.current.focus()),
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
        if (!s || !g.current) return;
        const y = kt(g.current),
          S = (_) => {
            const { current: I } = g;
            if (I !== null) {
              if (!y.hasFocus() || r || !a() || l.current) {
                l.current = !1;
                return;
              }
              if (!I.contains(y.activeElement)) {
                if (
                  (_ && h.current !== _.target) ||
                  y.activeElement !== h.current
                )
                  h.current = null;
                else if (h.current !== null) return;
                if (!v.current) return;
                let U = [];
                if (
                  ((y.activeElement === c.current ||
                    y.activeElement === f.current) &&
                    (U = i(g.current)),
                  U.length > 0)
                ) {
                  var B, M;
                  const F = !!(
                      (B = N.current) != null &&
                      B.shiftKey &&
                      ((M = N.current) == null ? void 0 : M.key) === "Tab"
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
          C = (_) => {
            (N.current = _),
              !(r || !a() || _.key !== "Tab") &&
                y.activeElement === g.current &&
                _.shiftKey &&
                ((l.current = !0), f.current && f.current.focus());
          };
        y.addEventListener("focusin", S), y.addEventListener("keydown", C, !0);
        const T = setInterval(() => {
          y.activeElement && y.activeElement.tagName === "BODY" && S(null);
        }, 50);
        return () => {
          clearInterval(T),
            y.removeEventListener("focusin", S),
            y.removeEventListener("keydown", C, !0);
        };
      }, [n, r, o, a, s, i]);
    const w = (y) => {
        p.current === null && (p.current = y.relatedTarget),
          (v.current = !0),
          (h.current = y.target);
        const S = t.props.onFocus;
        S && S(y);
      },
      b = (y) => {
        p.current === null && (p.current = y.relatedTarget), (v.current = !0);
      };
    return ce(E.Fragment, {
      children: [
        R("div", {
          tabIndex: s ? 0 : -1,
          onFocus: b,
          ref: c,
          "data-testid": "sentinelStart",
        }),
        E.cloneElement(t, { ref: x, onFocus: w }),
        R("div", {
          tabIndex: s ? 0 : -1,
          onFocus: b,
          ref: f,
          "data-testid": "sentinelEnd",
        }),
      ],
    });
  }
  function dk(e) {
    return typeof e == "function" ? e() : e;
  }
  const fk = E.forwardRef(function (e, t) {
      const { children: n, container: r, disablePortal: o = !1 } = e,
        [i, a] = E.useState(null),
        s = ot(E.isValidElement(n) ? n.ref : null, t);
      if (
        (rr(() => {
          o || a(dk(r) || document.body);
        }, [r, o]),
        rr(() => {
          if (i && !o)
            return (
              As(t, i),
              () => {
                As(t, null);
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
      return R(E.Fragment, { children: i && jr.createPortal(n, i) });
    }),
    pk = fk;
  function hk(e) {
    const t = kt(e);
    return t.body === e
      ? nr(e).innerWidth > t.documentElement.clientWidth
      : e.scrollHeight > e.clientHeight;
  }
  function Hi(e, t) {
    t
      ? e.setAttribute("aria-hidden", "true")
      : e.removeAttribute("aria-hidden");
  }
  function y0(e) {
    return parseInt(nr(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function mk(e) {
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
  function b0(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, (a) => {
      const s = i.indexOf(a) === -1,
        l = !mk(a);
      s && l && Hi(a, o);
    });
  }
  function qd(e, t) {
    let n = -1;
    return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
  }
  function gk(e, t) {
    const n = [],
      r = e.container;
    if (!t.disableScrollLock) {
      if (hk(r)) {
        const i = wg(kt(r));
        n.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r,
        }),
          (r.style.paddingRight = `${y0(r) + i}px`);
        const a = kt(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          n.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s,
          }),
            (s.style.paddingRight = `${y0(s) + i}px`);
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = kt(r).body;
      else {
        const i = r.parentElement,
          a = nr(r);
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
  function yk(e) {
    const t = [];
    return (
      [].forEach.call(e.children, (n) => {
        n.getAttribute("aria-hidden") === "true" && t.push(n);
      }),
      t
    );
  }
  class bk {
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
        t.modalRef && Hi(t.modalRef, !1);
      const o = yk(n);
      b0(n, t.mount, t.modalRef, o, !0);
      const i = qd(this.containers, (a) => a.container === n);
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
      const r = qd(this.containers, (i) => i.modals.indexOf(t) !== -1),
        o = this.containers[r];
      o.restore || (o.restore = gk(o, n));
    }
    remove(t, n = !0) {
      const r = this.modals.indexOf(t);
      if (r === -1) return r;
      const o = qd(this.containers, (a) => a.modals.indexOf(t) !== -1),
        i = this.containers[o];
      if (
        (i.modals.splice(i.modals.indexOf(t), 1),
        this.modals.splice(r, 1),
        i.modals.length === 0)
      )
        i.restore && i.restore(),
          t.modalRef && Hi(t.modalRef, n),
          b0(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
          this.containers.splice(o, 1);
      else {
        const a = i.modals[i.modals.length - 1];
        a.modalRef && Hi(a.modalRef, !1);
      }
      return r;
    }
    isTopModal(t) {
      return (
        this.modals.length > 0 && this.modals[this.modals.length - 1] === t
      );
    }
  }
  function vk(e) {
    return ae("MuiModal", e);
  }
  se("MuiModal", ["root", "hidden"]);
  const wk = [
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
    Sk = (e) => {
      const { open: t, exited: n, classes: r } = e;
      return de(
        { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
        vk,
        r,
      );
    };
  function xk(e) {
    return typeof e == "function" ? e() : e;
  }
  function kk(e) {
    return e ? e.props.hasOwnProperty("in") : !1;
  }
  const Ek = new bk(),
    Ck = E.forwardRef(function (e, t) {
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
          disablePortal: h = !1,
          disableRestoreFocus: v = !1,
          disableScrollLock: g = !1,
          hideBackdrop: x = !1,
          keepMounted: N = !1,
          manager: w = Ek,
          onBackdropClick: b,
          onClose: y,
          onKeyDown: S,
          open: C,
          onTransitionEnter: T,
          onTransitionExited: _,
          slotProps: I = {},
          slots: B = {},
        } = e,
        M = Q(e, wk),
        [U, F] = E.useState(!C),
        V = E.useRef({}),
        W = E.useRef(null),
        H = E.useRef(null),
        te = ot(H, t),
        q = kk(o),
        L = (n = e["aria-hidden"]) != null ? n : !0,
        A = () => kt(W.current),
        $ = () => (
          (V.current.modalRef = H.current),
          (V.current.mountNode = W.current),
          V.current
        ),
        Y = () => {
          w.mount($(), { disableScrollLock: g }),
            H.current && (H.current.scrollTop = 0);
        },
        oe = Tr(() => {
          const m = xk(l) || A().body;
          w.add($(), m), H.current && Y();
        }),
        ne = E.useCallback(() => w.isTopModal($()), [w]),
        he = Tr((m) => {
          (W.current = m),
            !(!m || !H.current) && (C && ne() ? Y() : Hi(H.current, L));
        }),
        ve = E.useCallback(() => {
          w.remove($(), L);
        }, [w, L]);
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
          disablePortal: h,
          disableRestoreFocus: v,
          disableScrollLock: g,
          exited: U,
          hideBackdrop: x,
          keepMounted: N,
        }),
        Fe = Sk(Le),
        Pe = () => {
          F(!1), T && T();
        },
        st = () => {
          F(!0), _ && _(), a && ve();
        },
        re = (m) => {
          m.target === m.currentTarget &&
            (b && b(m), y && y(m, "backdropClick"));
        },
        je = (m) => {
          S && S(m),
            !(m.key !== "Escape" || !ne()) &&
              (p || (m.stopPropagation(), y && y(m, "escapeKeyDown")));
        },
        Ae = {};
      o.props.tabIndex === void 0 && (Ae.tabIndex = "-1"),
        q &&
          ((Ae.onEnter = gd(Pe, o.props.onEnter)),
          (Ae.onExited = gd(st, o.props.onExited)));
      const Tt = (r = s ?? B.root) != null ? r : "div",
        zt = g0({
          elementType: Tt,
          externalSlotProps: I.root,
          externalForwardedProps: M,
          additionalProps: { ref: te, role: "presentation", onKeyDown: je },
          className: Fe.root,
          ownerState: Le,
        }),
        u = B.backdrop,
        d = g0({
          elementType: u,
          externalSlotProps: I.backdrop,
          additionalProps: { "aria-hidden": !0, onClick: re, open: C },
          className: Fe.backdrop,
          ownerState: Le,
        });
      return !N && !C && (!q || U)
        ? null
        : R(pk, {
            ref: he,
            container: l,
            disablePortal: h,
            children: ce(
              Tt,
              k({}, zt, {
                children: [
                  !x && u ? R(u, k({}, d)) : null,
                  R(ck, {
                    disableEnforceFocus: f,
                    disableAutoFocus: c,
                    disableRestoreFocus: v,
                    isEnabled: ne,
                    open: C,
                    children: E.cloneElement(o, Ae),
                  }),
                ],
              }),
            ),
          });
    }),
    Ok = Ck,
    Tk = ["onChange", "maxRows", "minRows", "style", "value"];
  function hl(e, t) {
    return parseInt(e[t], 10) || 0;
  }
  const _k = {
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
  function v0(e) {
    return e == null || Object.keys(e).length === 0;
  }
  const Rk = E.forwardRef(function (e, t) {
      const { onChange: n, maxRows: r, minRows: o = 1, style: i, value: a } = e,
        s = Q(e, Tk),
        { current: l } = E.useRef(a != null),
        c = E.useRef(null),
        f = ot(t, c),
        p = E.useRef(null),
        h = E.useRef(0),
        [v, g] = E.useState({}),
        x = E.useCallback(() => {
          const S = c.current,
            C = nr(S).getComputedStyle(S);
          if (C.width === "0px") return {};
          const T = p.current;
          (T.style.width = C.width),
            (T.value = S.value || e.placeholder || "x"),
            T.value.slice(-1) ===
              `
` && (T.value += " ");
          const _ = C["box-sizing"],
            I = hl(C, "padding-bottom") + hl(C, "padding-top"),
            B = hl(C, "border-bottom-width") + hl(C, "border-top-width"),
            M = T.scrollHeight;
          T.value = "x";
          const U = T.scrollHeight;
          let F = M;
          o && (F = Math.max(Number(o) * U, F)),
            r && (F = Math.min(Number(r) * U, F)),
            (F = Math.max(F, U));
          const V = F + (_ === "border-box" ? I + B : 0),
            W = Math.abs(F - M) <= 1;
          return { outerHeightStyle: V, overflow: W };
        }, [r, o, e.placeholder]),
        N = (S, C) => {
          const { outerHeightStyle: T, overflow: _ } = C;
          return h.current < 20 &&
            ((T > 0 && Math.abs((S.outerHeightStyle || 0) - T) > 1) ||
              S.overflow !== _)
            ? ((h.current += 1), { overflow: _, outerHeightStyle: T })
            : S;
        },
        w = E.useCallback(() => {
          const S = x();
          v0(S) || g((C) => N(C, S));
        }, [x]),
        b = () => {
          const S = x();
          v0(S) ||
            jr.flushSync(() => {
              g((C) => N(C, S));
            });
        };
      E.useEffect(() => {
        const S = yd(() => {
            (h.current = 0), c.current && b();
          }),
          C = nr(c.current);
        C.addEventListener("resize", S);
        let T;
        return (
          typeof ResizeObserver < "u" &&
            ((T = new ResizeObserver(S)), T.observe(c.current)),
          () => {
            S.clear(), C.removeEventListener("resize", S), T && T.disconnect();
          }
        );
      }),
        rr(() => {
          w();
        }),
        E.useEffect(() => {
          h.current = 0;
        }, [a]);
      const y = (S) => {
        (h.current = 0), l || w(), n && n(S);
      };
      return ce(E.Fragment, {
        children: [
          R(
            "textarea",
            k(
              {
                value: a,
                onChange: y,
                ref: f,
                rows: o,
                style: k(
                  {
                    height: v.outerHeightStyle,
                    overflow: v.overflow ? "hidden" : null,
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
            style: k({}, _k.shadow, i, { padding: 0 }),
          }),
        ],
      });
    }),
    Nk = Rk;
  function Ik(e) {
    return ae("MuiSvgIcon", e);
  }
  se("MuiSvgIcon", [
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
  const Pk = [
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
    Ak = (e) => {
      const { color: t, fontSize: n, classes: r } = e,
        o = {
          root: ["root", t !== "inherit" && `color${G(t)}`, `fontSize${G(n)}`],
        };
      return de(o, Ik, r);
    },
    $k = J("svg", {
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
      var n, r, o, i, a, s, l, c, f, p, h, v, g, x, N, w, b;
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
          (h =
            (v = (e.vars || e).palette) == null || (g = v[t.color]) == null
              ? void 0
              : g.main) != null
            ? h
            : {
                action:
                  (x = (e.vars || e).palette) == null || (N = x.action) == null
                    ? void 0
                    : N.active,
                disabled:
                  (w = (e.vars || e).palette) == null || (b = w.action) == null
                    ? void 0
                    : b.disabled,
                inherit: void 0,
              }[t.color],
      };
    }),
    w0 = E.forwardRef(function (e, t) {
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
        h = Q(n, Pk),
        v = k({}, n, {
          color: i,
          component: a,
          fontSize: s,
          instanceFontSize: e.fontSize,
          inheritViewBox: c,
          viewBox: p,
        }),
        g = {};
      c || (g.viewBox = p);
      const x = Ak(v);
      return ce(
        $k,
        k(
          {
            as: a,
            className: ee(x.root, o),
            focusable: "false",
            color: l,
            "aria-hidden": f ? void 0 : !0,
            role: f ? "img" : void 0,
            ref: t,
          },
          g,
          h,
          {
            ownerState: v,
            children: [r, f ? R("title", { children: f }) : null],
          },
        ),
      );
    });
  w0.muiName = "SvgIcon";
  const S0 = w0;
  function vn(e, t) {
    function n(r, o) {
      return R(
        S0,
        k({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
      );
    }
    return (n.muiName = S0.muiName), E.memo(E.forwardRef(n));
  }
  const Mk = {
      configure: (e) => {
        xg.configure(e);
      },
    },
    Lk = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          capitalize: G,
          createChainedFunction: gd,
          createSvgIcon: vn,
          debounce: yd,
          deprecatedPropType: Iw,
          isMuiElement: Ai,
          ownerDocument: kt,
          ownerWindow: nr,
          requirePropFactory: Pw,
          setRef: As,
          unstable_ClassNameGenerator: Mk,
          unstable_useEnhancedEffect: rr,
          unstable_useId: bg,
          unsupportedProp: Mw,
          useControlled: $s,
          useEventCallback: Tr,
          useForkRef: ot,
          useIsFocusVisible: wd,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  function Kd(e, t) {
    return (
      (Kd = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      Kd(e, t)
    );
  }
  function x0(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Kd(e, t);
  }
  const k0 = { disabled: !1 },
    ml = ie.createContext(null);
  var Bk = function (e) {
      return e.scrollTop;
    },
    qi = "unmounted",
    Rr = "exited",
    Nr = "entering",
    Oo = "entered",
    Jd = "exiting",
    $n = (function (e) {
      x0(t, e);
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
              ? ((l = Rr), (i.appearStatus = Nr))
              : (l = Oo)
            : r.unmountOnExit || r.mountOnEnter
            ? (l = qi)
            : (l = Rr),
          (i.state = { status: l }),
          (i.nextCallback = null),
          i
        );
      }
      t.getDerivedStateFromProps = function (r, o) {
        var i = r.in;
        return i && o.status === qi ? { status: Rr } : null;
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
              ? i !== Nr && i !== Oo && (o = Nr)
              : (i === Nr || i === Oo) && (o = Jd);
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
            if ((this.cancelNextCallback(), o === Nr)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var i = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : xs.findDOMNode(this);
                i && Bk(i);
              }
              this.performEnter(r);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === Rr &&
              this.setState({ status: qi });
        }),
        (n.performEnter = function (r) {
          var o = this,
            i = this.props.enter,
            a = this.context ? this.context.isMounting : r,
            s = this.props.nodeRef ? [a] : [xs.findDOMNode(this), a],
            l = s[0],
            c = s[1],
            f = this.getTimeouts(),
            p = a ? f.appear : f.enter;
          if ((!r && !i) || k0.disabled) {
            this.safeSetState({ status: Oo }, function () {
              o.props.onEntered(l);
            });
            return;
          }
          this.props.onEnter(l, c),
            this.safeSetState({ status: Nr }, function () {
              o.props.onEntering(l, c),
                o.onTransitionEnd(p, function () {
                  o.safeSetState({ status: Oo }, function () {
                    o.props.onEntered(l, c);
                  });
                });
            });
        }),
        (n.performExit = function () {
          var r = this,
            o = this.props.exit,
            i = this.getTimeouts(),
            a = this.props.nodeRef ? void 0 : xs.findDOMNode(this);
          if (!o || k0.disabled) {
            this.safeSetState({ status: Rr }, function () {
              r.props.onExited(a);
            });
            return;
          }
          this.props.onExit(a),
            this.safeSetState({ status: Jd }, function () {
              r.props.onExiting(a),
                r.onTransitionEnd(i.exit, function () {
                  r.safeSetState({ status: Rr }, function () {
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
              : xs.findDOMNode(this),
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
          if (r === qi) return null;
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
          var a = Q(o, [
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
          return ie.createElement(
            ml.Provider,
            { value: null },
            typeof i == "function"
              ? i(r, a)
              : ie.cloneElement(ie.Children.only(i), a),
          );
        }),
        t
      );
    })(ie.Component);
  ($n.contextType = ml), ($n.propTypes = {});
  function To() {}
  ($n.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: To,
    onEntering: To,
    onEntered: To,
    onExit: To,
    onExiting: To,
    onExited: To,
  }),
    ($n.UNMOUNTED = qi),
    ($n.EXITED = Rr),
    ($n.ENTERING = Nr),
    ($n.ENTERED = Oo),
    ($n.EXITING = Jd);
  const E0 = $n;
  function zk(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function Gd(e, t) {
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
  function Dk(e, t) {
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
  function Ir(e, t, n) {
    return n[t] != null ? n[t] : e.props[t];
  }
  function Fk(e, t) {
    return Gd(e.children, function (n) {
      return E.cloneElement(n, {
        onExited: t.bind(null, n),
        in: !0,
        appear: Ir(n, "appear", e),
        enter: Ir(n, "enter", e),
        exit: Ir(n, "exit", e),
      });
    });
  }
  function jk(e, t, n) {
    var r = Gd(e.children),
      o = Dk(t, r);
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
                exit: Ir(a, "exit", e),
                enter: Ir(a, "enter", e),
              }))
            : !l && s && !f
            ? (o[i] = E.cloneElement(a, { in: !1 }))
            : l &&
              s &&
              E.isValidElement(c) &&
              (o[i] = E.cloneElement(a, {
                onExited: n.bind(null, a),
                in: c.props.in,
                exit: Ir(a, "exit", e),
                enter: Ir(a, "enter", e),
              }));
        }
      }),
      o
    );
  }
  var Uk =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    Wk = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    },
    Yd = (function (e) {
      x0(t, e);
      function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var a = i.handleExited.bind(zk(i));
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
          return { children: s ? Fk(r, a) : jk(r, i, a), firstRender: !1 };
        }),
        (n.handleExited = function (r, o) {
          var i = Gd(this.props.children);
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
            a = Q(r, ["component", "childFactory"]),
            s = this.state.contextValue,
            l = Uk(this.state.children).map(i);
          return (
            delete a.appear,
            delete a.enter,
            delete a.exit,
            o === null
              ? ie.createElement(ml.Provider, { value: s }, l)
              : ie.createElement(
                  ml.Provider,
                  { value: s },
                  ie.createElement(o, a, l),
                )
          );
        }),
        t
      );
    })(ie.Component);
  (Yd.propTypes = {}), (Yd.defaultProps = Wk);
  const Vk = Yd,
    C0 = (e) => e.scrollTop;
  function gl(e, t) {
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
  function Hk(e) {
    return ae("MuiPaper", e);
  }
  se("MuiPaper", [
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
  const qk = ["className", "component", "elevation", "square", "variant"],
    Kk = (e) => {
      const { square: t, elevation: n, variant: r, classes: o } = e,
        i = {
          root: [
            "root",
            r,
            !t && "rounded",
            r === "elevation" && `elevation${n}`,
          ],
        };
      return de(i, Hk, o);
    },
    Jk = J("div", {
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
                backgroundImage: `linear-gradient(${Ct(
                  "#fff",
                  h0(t.elevation),
                )}, ${Ct("#fff", h0(t.elevation))})`,
              },
            e.vars && {
              backgroundImage:
                (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
            },
          ),
      );
    }),
    Gk = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiPaper" }),
        {
          className: r,
          component: o = "div",
          elevation: i = 1,
          square: a = !1,
          variant: s = "elevation",
        } = n,
        l = Q(n, qk),
        c = k({}, n, { component: o, elevation: i, square: a, variant: s }),
        f = Kk(c);
      return R(
        Jk,
        k({ as: o, ownerState: c, className: ee(f.root, r), ref: t }, l),
      );
    }),
    Ki = Gk;
  function Yk(e) {
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
      h = ee(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
      v = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
      g = ee(n.child, f && n.childLeaving, r && n.childPulsate);
    return (
      !s && !f && p(!0),
      E.useEffect(() => {
        if (!s && l != null) {
          const x = setTimeout(l, c);
          return () => {
            clearTimeout(x);
          };
        }
      }, [l, s, c]),
      R("span", {
        className: h,
        style: v,
        children: R("span", { className: g }),
      })
    );
  }
  const Xk = se("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    Kt = Xk,
    Qk = ["center", "classes", "className"];
  let yl = (e) => e,
    O0,
    T0,
    _0,
    R0;
  const Xd = 550,
    Zk = 80,
    eE = xo(
      O0 ||
        (O0 = yl`
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
    tE = xo(
      T0 ||
        (T0 = yl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
    ),
    nE = xo(
      _0 ||
        (_0 = yl`
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
    rE = J("span", { name: "MuiTouchRipple", slot: "Root" })({
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
    oE = J(Yk, { name: "MuiTouchRipple", slot: "Ripple" })(
      R0 ||
        (R0 = yl`
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
      Kt.rippleVisible,
      eE,
      Xd,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      Kt.ripplePulsate,
      ({ theme: e }) => e.transitions.duration.shorter,
      Kt.child,
      Kt.childLeaving,
      tE,
      Xd,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      Kt.childPulsate,
      nE,
      ({ theme: e }) => e.transitions.easing.easeInOut,
    ),
    iE = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiTouchRipple" }),
        { center: r = !1, classes: o = {}, className: i } = n,
        a = Q(n, Qk),
        [s, l] = E.useState([]),
        c = E.useRef(0),
        f = E.useRef(null);
      E.useEffect(() => {
        f.current && (f.current(), (f.current = null));
      }, [s]);
      const p = E.useRef(!1),
        h = E.useRef(null),
        v = E.useRef(null),
        g = E.useRef(null);
      E.useEffect(
        () => () => {
          clearTimeout(h.current);
        },
        [],
      );
      const x = E.useCallback(
          (y) => {
            const {
              pulsate: S,
              rippleX: C,
              rippleY: T,
              rippleSize: _,
              cb: I,
            } = y;
            l((B) => [
              ...B,
              R(
                oE,
                {
                  classes: {
                    ripple: ee(o.ripple, Kt.ripple),
                    rippleVisible: ee(o.rippleVisible, Kt.rippleVisible),
                    ripplePulsate: ee(o.ripplePulsate, Kt.ripplePulsate),
                    child: ee(o.child, Kt.child),
                    childLeaving: ee(o.childLeaving, Kt.childLeaving),
                    childPulsate: ee(o.childPulsate, Kt.childPulsate),
                  },
                  timeout: Xd,
                  pulsate: S,
                  rippleX: C,
                  rippleY: T,
                  rippleSize: _,
                },
                c.current,
              ),
            ]),
              (c.current += 1),
              (f.current = I);
          },
          [o],
        ),
        N = E.useCallback(
          (y = {}, S = {}, C = () => {}) => {
            const {
              pulsate: T = !1,
              center: _ = r || S.pulsate,
              fakeElement: I = !1,
            } = S;
            if ((y == null ? void 0 : y.type) === "mousedown" && p.current) {
              p.current = !1;
              return;
            }
            (y == null ? void 0 : y.type) === "touchstart" && (p.current = !0);
            const B = I ? null : g.current,
              M = B
                ? B.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let U, F, V;
            if (
              _ ||
              y === void 0 ||
              (y.clientX === 0 && y.clientY === 0) ||
              (!y.clientX && !y.touches)
            )
              (U = Math.round(M.width / 2)), (F = Math.round(M.height / 2));
            else {
              const { clientX: W, clientY: H } =
                y.touches && y.touches.length > 0 ? y.touches[0] : y;
              (U = Math.round(W - M.left)), (F = Math.round(H - M.top));
            }
            if (_)
              (V = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3)),
                V % 2 === 0 && (V += 1);
            else {
              const W =
                  Math.max(Math.abs((B ? B.clientWidth : 0) - U), U) * 2 + 2,
                H = Math.max(Math.abs((B ? B.clientHeight : 0) - F), F) * 2 + 2;
              V = Math.sqrt(W ** 2 + H ** 2);
            }
            y != null && y.touches
              ? v.current === null &&
                ((v.current = () => {
                  x({
                    pulsate: T,
                    rippleX: U,
                    rippleY: F,
                    rippleSize: V,
                    cb: C,
                  });
                }),
                (h.current = setTimeout(() => {
                  v.current && (v.current(), (v.current = null));
                }, Zk)))
              : x({ pulsate: T, rippleX: U, rippleY: F, rippleSize: V, cb: C });
          },
          [r, x],
        ),
        w = E.useCallback(() => {
          N({}, { pulsate: !0 });
        }, [N]),
        b = E.useCallback((y, S) => {
          if (
            (clearTimeout(h.current),
            (y == null ? void 0 : y.type) === "touchend" && v.current)
          ) {
            v.current(),
              (v.current = null),
              (h.current = setTimeout(() => {
                b(y, S);
              }));
            return;
          }
          (v.current = null),
            l((C) => (C.length > 0 ? C.slice(1) : C)),
            (f.current = S);
        }, []);
      return (
        E.useImperativeHandle(t, () => ({ pulsate: w, start: N, stop: b }), [
          w,
          N,
          b,
        ]),
        R(
          rE,
          k({ className: ee(Kt.root, o.root, i), ref: g }, a, {
            children: R(Vk, { component: null, exit: !0, children: s }),
          }),
        )
      );
    }),
    aE = iE;
  function sE(e) {
    return ae("MuiButtonBase", e);
  }
  const lE = se("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    uE = lE,
    cE = [
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
    dE = (e) => {
      const {
          disabled: t,
          focusVisible: n,
          focusVisibleClassName: r,
          classes: o,
        } = e,
        i = de({ root: ["root", t && "disabled", n && "focusVisible"] }, sE, o);
      return n && r && (i.root += ` ${r}`), i;
    },
    fE = J("button", {
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
      [`&.${uE.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    }),
    pE = E.forwardRef(function (e, t) {
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
          LinkComponent: h = "a",
          onBlur: v,
          onClick: g,
          onContextMenu: x,
          onDragLeave: N,
          onFocus: w,
          onFocusVisible: b,
          onKeyDown: y,
          onKeyUp: S,
          onMouseDown: C,
          onMouseLeave: T,
          onMouseUp: _,
          onTouchEnd: I,
          onTouchMove: B,
          onTouchStart: M,
          tabIndex: U = 0,
          TouchRippleProps: F,
          touchRippleRef: V,
          type: W,
        } = n,
        H = Q(n, cE),
        te = E.useRef(null),
        q = E.useRef(null),
        L = ot(q, V),
        { isFocusVisibleRef: A, onFocus: $, onBlur: Y, ref: oe } = wd(),
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
      function Pe(D, Re, et = f) {
        return Tr(
          (_t) => (Re && Re(_t), !et && q.current && q.current[D](_t), !0),
        );
      }
      const st = Pe("start", C),
        re = Pe("stop", x),
        je = Pe("stop", N),
        Ae = Pe("stop", _),
        Tt = Pe("stop", (D) => {
          ne && D.preventDefault(), T && T(D);
        }),
        zt = Pe("start", M),
        u = Pe("stop", I),
        d = Pe("stop", B),
        m = Pe(
          "stop",
          (D) => {
            Y(D), A.current === !1 && he(!1), v && v(D);
          },
          !1,
        ),
        O = Tr((D) => {
          te.current || (te.current = D.currentTarget),
            $(D),
            A.current === !0 && (he(!0), b && b(D)),
            w && w(D);
        }),
        P = () => {
          const D = te.current;
          return s && s !== "button" && !(D.tagName === "A" && D.href);
        },
        z = E.useRef(!1),
        X = Tr((D) => {
          p &&
            !z.current &&
            ne &&
            q.current &&
            D.key === " " &&
            ((z.current = !0),
            q.current.stop(D, () => {
              q.current.start(D);
            })),
            D.target === D.currentTarget &&
              P() &&
              D.key === " " &&
              D.preventDefault(),
            y && y(D),
            D.target === D.currentTarget &&
              P() &&
              D.key === "Enter" &&
              !l &&
              (D.preventDefault(), g && g(D));
        }),
        pe = Tr((D) => {
          p &&
            D.key === " " &&
            q.current &&
            ne &&
            !D.defaultPrevented &&
            ((z.current = !1),
            q.current.stop(D, () => {
              q.current.pulsate(D);
            })),
            S && S(D),
            g &&
              D.target === D.currentTarget &&
              P() &&
              D.key === " " &&
              !D.defaultPrevented &&
              g(D);
        });
      let Oe = s;
      Oe === "button" && (H.href || H.to) && (Oe = h);
      const le = {};
      Oe === "button"
        ? ((le.type = W === void 0 ? "button" : W), (le.disabled = l))
        : (!H.href && !H.to && (le.role = "button"),
          l && (le["aria-disabled"] = l));
      const Ce = ot(t, oe, te),
        _e = k({}, n, {
          centerRipple: o,
          component: s,
          disabled: l,
          disableRipple: c,
          disableTouchRipple: f,
          focusRipple: p,
          tabIndex: U,
          focusVisible: ne,
        }),
        ge = dE(_e);
      return ce(
        fE,
        k(
          {
            as: Oe,
            className: ee(ge.root, a),
            ownerState: _e,
            onBlur: m,
            onClick: g,
            onContextMenu: re,
            onFocus: O,
            onKeyDown: X,
            onKeyUp: pe,
            onMouseDown: st,
            onMouseLeave: Tt,
            onMouseUp: Ae,
            onDragLeave: je,
            onTouchEnd: u,
            onTouchMove: d,
            onTouchStart: zt,
            ref: Ce,
            tabIndex: l ? -1 : U,
            type: W,
          },
          le,
          H,
          { children: [i, Fe ? R(aE, k({ ref: L, center: o }, F)) : null] },
        ),
      );
    }),
    bl = pE;
  function hE(e) {
    return ae("MuiAlert", e);
  }
  const mE = se("MuiAlert", [
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
    N0 = mE;
  function gE(e) {
    return ae("MuiIconButton", e);
  }
  const yE = se("MuiIconButton", [
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
    bE = yE,
    vE = [
      "edge",
      "children",
      "className",
      "color",
      "disabled",
      "disableFocusRipple",
      "size",
    ],
    wE = (e) => {
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
      return de(a, gE, t);
    },
    SE = J(bl, {
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
                : Ct(e.palette.action.active, e.palette.action.hoverOpacity),
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
                      : Ct(r.main, e.palette.action.hoverOpacity),
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
            [`&.${bE.disabled}`]: {
              backgroundColor: "transparent",
              color: (e.vars || e).palette.action.disabled,
            },
          },
        );
      },
    ),
    xE = E.forwardRef(function (e, t) {
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
        f = Q(n, vE),
        p = k({}, n, {
          edge: r,
          color: a,
          disabled: s,
          disableFocusRipple: l,
          size: c,
        }),
        h = wE(p);
      return R(
        SE,
        k(
          {
            className: ee(h.root, i),
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
    vl = xE,
    kE = vn(
      R("path", {
        d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
      }),
      "SuccessOutlined",
    ),
    EE = vn(
      R("path", {
        d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
      }),
      "ReportProblemOutlined",
    ),
    CE = vn(
      R("path", {
        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
      }),
      "ErrorOutline",
    ),
    OE = vn(
      R("path", {
        d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
      }),
      "InfoOutlined",
    ),
    TE = vn(
      R("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Close",
    ),
    _E = [
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
    RE = (e) => {
      const { variant: t, color: n, severity: r, classes: o } = e,
        i = {
          root: ["root", `${t}${G(n || r)}`, `${t}`],
          icon: ["icon"],
          message: ["message"],
          action: ["action"],
        };
      return de(i, hE, o);
    },
    NE = J(Ki, {
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
      const n = e.palette.mode === "light" ? dl : fl,
        r = e.palette.mode === "light" ? fl : dl,
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
            [`& .${N0.icon}`]: e.vars
              ? { color: e.vars.palette.Alert[`${o}IconColor`] }
              : { color: e.palette[o].main },
          },
        o &&
          t.variant === "outlined" && {
            color: e.vars
              ? e.vars.palette.Alert[`${o}Color`]
              : n(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${N0.icon}`]: e.vars
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
    IE = J("div", {
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
    PE = J("div", {
      name: "MuiAlert",
      slot: "Message",
      overridesResolver: (e, t) => t.message,
    })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
    I0 = J("div", {
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
    P0 = {
      success: R(kE, { fontSize: "inherit" }),
      warning: R(EE, { fontSize: "inherit" }),
      error: R(CE, { fontSize: "inherit" }),
      info: R(OE, { fontSize: "inherit" }),
    },
    AE = E.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = fe({ props: e, name: "MuiAlert" }),
        {
          action: c,
          children: f,
          className: p,
          closeText: h = "Close",
          color: v,
          components: g = {},
          componentsProps: x = {},
          icon: N,
          iconMapping: w = P0,
          onClose: b,
          role: y = "alert",
          severity: S = "success",
          slotProps: C = {},
          slots: T = {},
          variant: _ = "standard",
        } = l,
        I = Q(l, _E),
        B = k({}, l, { color: v, severity: S, variant: _ }),
        M = RE(B),
        U =
          (n = (r = T.closeButton) != null ? r : g.CloseButton) != null
            ? n
            : vl,
        F = (o = (i = T.closeIcon) != null ? i : g.CloseIcon) != null ? o : TE,
        V = (a = C.closeButton) != null ? a : x.closeButton,
        W = (s = C.closeIcon) != null ? s : x.closeIcon;
      return ce(
        NE,
        k(
          {
            role: y,
            elevation: 0,
            ownerState: B,
            className: ee(M.root, p),
            ref: t,
          },
          I,
          {
            children: [
              N !== !1
                ? R(IE, {
                    ownerState: B,
                    className: M.icon,
                    children: N || w[S] || P0[S],
                  })
                : null,
              R(PE, { ownerState: B, className: M.message, children: f }),
              c != null
                ? R(I0, { ownerState: B, className: M.action, children: c })
                : null,
              c == null && b
                ? R(I0, {
                    ownerState: B,
                    className: M.action,
                    children: R(
                      U,
                      k(
                        {
                          size: "small",
                          "aria-label": h,
                          title: h,
                          color: "inherit",
                          onClick: b,
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
    $E = AE;
  function ME(e) {
    return ae("MuiTypography", e);
  }
  se("MuiTypography", [
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
  const LE = [
      "align",
      "className",
      "component",
      "gutterBottom",
      "noWrap",
      "paragraph",
      "variant",
      "variantMapping",
    ],
    BE = (e) => {
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
      return de(s, ME, a);
    },
    zE = J("span", {
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
    A0 = {
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
    DE = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main",
    },
    FE = (e) => DE[e] || e,
    jE = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiTypography" }),
        r = FE(n.color),
        o = DS(k({}, n, { color: r })),
        {
          align: i = "inherit",
          className: a,
          component: s,
          gutterBottom: l = !1,
          noWrap: c = !1,
          paragraph: f = !1,
          variant: p = "body1",
          variantMapping: h = A0,
        } = o,
        v = Q(o, LE),
        g = k({}, o, {
          align: i,
          color: r,
          className: a,
          component: s,
          gutterBottom: l,
          noWrap: c,
          paragraph: f,
          variant: p,
          variantMapping: h,
        }),
        x = s || (f ? "p" : h[p] || A0[p]) || "span",
        N = BE(g);
      return R(
        zE,
        k({ as: x, ref: t, ownerState: g, className: ee(N.root, a) }, v),
      );
    }),
    Jt = jE;
  function UE(e) {
    return ae("MuiAppBar", e);
  }
  se("MuiAppBar", [
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
  const WE = ["className", "color", "enableColorOnDark", "position"],
    VE = (e) => {
      const { color: t, position: n, classes: r } = e,
        o = { root: ["root", `color${G(t)}`, `position${G(n)}`] };
      return de(o, UE, r);
    },
    wl = (e, t) =>
      e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t,
    HE = J(Ki, {
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
                : wl(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette.AppBar.defaultBg,
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette.text.primary
                : wl(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette.text.primary,
                  ),
            },
            t.color &&
              !t.color.match(/^(default|inherit|transparent)$/) && {
                "--AppBar-background": t.enableColorOnDark
                  ? e.vars.palette[t.color].main
                  : wl(
                      e.vars.palette.AppBar.darkBg,
                      e.vars.palette[t.color].main,
                    ),
                "--AppBar-color": t.enableColorOnDark
                  ? e.vars.palette[t.color].contrastText
                  : wl(
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
    qE = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiAppBar" }),
        {
          className: r,
          color: o = "primary",
          enableColorOnDark: i = !1,
          position: a = "fixed",
        } = n,
        s = Q(n, WE),
        l = k({}, n, { color: o, position: a, enableColorOnDark: i }),
        c = VE(l);
      return R(
        HE,
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
    KE = qE;
  function _o({ props: e, states: t, muiFormControl: n }) {
    return t.reduce(
      (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
      {},
    );
  }
  const JE = E.createContext(void 0),
    Sl = JE;
  function or() {
    return E.useContext(Sl);
  }
  function GE(e) {
    return R(J2, k({}, e, { defaultTheme: pl }));
  }
  function $0(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
  }
  function Qd(e, t = !1) {
    return (
      e &&
      (($0(e.value) && e.value !== "") ||
        (t && $0(e.defaultValue) && e.defaultValue !== ""))
    );
  }
  function YE(e) {
    return e.startAdornment;
  }
  function XE(e) {
    return ae("MuiInputBase", e);
  }
  const QE = se("MuiInputBase", [
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
    Ro = QE,
    ZE = [
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
    xl = (e, t) => {
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
    kl = (e, t) => {
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
    e5 = (e) => {
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
          size: h,
          startAdornment: v,
          type: g,
        } = e,
        x = {
          root: [
            "root",
            `color${G(n)}`,
            r && "disabled",
            o && "error",
            l && "fullWidth",
            a && "focused",
            s && "formControl",
            h === "small" && "sizeSmall",
            f && "multiline",
            v && "adornedStart",
            i && "adornedEnd",
            c && "hiddenLabel",
            p && "readOnly",
          ],
          input: [
            "input",
            r && "disabled",
            g === "search" && "inputTypeSearch",
            f && "inputMultiline",
            h === "small" && "inputSizeSmall",
            c && "inputHiddenLabel",
            v && "inputAdornedStart",
            i && "inputAdornedEnd",
            p && "readOnly",
          ],
        };
      return de(x, XE, t);
    },
    El = J("div", {
      name: "MuiInputBase",
      slot: "Root",
      overridesResolver: xl,
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
          [`&.${Ro.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          k({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" },
      ),
    ),
    Cl = J("input", {
      name: "MuiInputBase",
      slot: "Input",
      overridesResolver: kl,
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
          [`label[data-shrink=false] + .${Ro.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": i,
            "&:focus::-moz-placeholder": i,
            "&:focus:-ms-input-placeholder": i,
            "&:focus::-ms-input-placeholder": i,
          },
          [`&.${Ro.disabled}`]: {
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
    t5 = R(GE, {
      styles: {
        "@keyframes mui-auto-fill": { from: { display: "block" } },
        "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
      },
    }),
    n5 = E.forwardRef(function (e, t) {
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
          disableInjectingGlobalStyles: h,
          endAdornment: v,
          fullWidth: g = !1,
          id: x,
          inputComponent: N = "input",
          inputProps: w = {},
          inputRef: b,
          maxRows: y,
          minRows: S,
          multiline: C = !1,
          name: T,
          onBlur: _,
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
        oe = Q(r, ZE),
        ne = w.value != null ? w.value : Y,
        { current: he } = E.useRef(ne != null),
        ve = E.useRef(),
        Le = E.useCallback((ge) => {}, []),
        Fe = ot(ve, b, w.ref, Le),
        [Pe, st] = E.useState(!1),
        re = or(),
        je = _o({
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
      (je.focused = re ? re.focused : Pe),
        E.useEffect(() => {
          !re && p && Pe && (st(!1), _ && _());
        }, [re, p, Pe, _]);
      const Ae = re && re.onFilled,
        Tt = re && re.onEmpty,
        zt = E.useCallback(
          (ge) => {
            Qd(ge) ? Ae && Ae() : Tt && Tt();
          },
          [Ae, Tt],
        );
      rr(() => {
        he && zt({ value: ne });
      }, [ne, zt, he]);
      const u = (ge) => {
          if (je.disabled) {
            ge.stopPropagation();
            return;
          }
          M && M(ge),
            w.onFocus && w.onFocus(ge),
            re && re.onFocus ? re.onFocus(ge) : st(!0);
        },
        d = (ge) => {
          _ && _(ge),
            w.onBlur && w.onBlur(ge),
            re && re.onBlur ? re.onBlur(ge) : st(!1);
        },
        m = (ge, ...D) => {
          if (!he) {
            const Re = ge.target || ve.current;
            if (Re == null) throw new Error(tr(1));
            zt({ value: Re.value });
          }
          w.onChange && w.onChange(ge, ...D), I && I(ge, ...D);
        };
      E.useEffect(() => {
        zt(ve.current);
      }, []);
      const O = (ge) => {
        ve.current && ge.currentTarget === ge.target && ve.current.focus(),
          B && B(ge);
      };
      let P = N,
        z = w;
      C &&
        P === "input" &&
        (te
          ? (z = k({ type: void 0, minRows: te, maxRows: te }, z))
          : (z = k({ type: void 0, maxRows: y, minRows: S }, z)),
        (P = Nk));
      const X = (ge) => {
        zt(
          ge.animationName === "mui-auto-fill-cancel"
            ? ve.current
            : { value: "x" },
        );
      };
      E.useEffect(() => {
        re && re.setAdornedStart(!!A);
      }, [re, A]);
      const pe = k({}, r, {
          color: je.color || "primary",
          disabled: je.disabled,
          endAdornment: v,
          error: je.error,
          focused: je.focused,
          formControl: re,
          fullWidth: g,
          hiddenLabel: je.hiddenLabel,
          multiline: C,
          size: je.size,
          startAdornment: A,
          type: $,
        }),
        Oe = e5(pe),
        le = L.root || l.Root || El,
        Ce = q.root || c.root || {},
        _e = L.input || l.Input || Cl;
      return (
        (z = k({}, z, (n = q.input) != null ? n : c.input)),
        ce(E.Fragment, {
          children: [
            !h && t5,
            ce(
              le,
              k(
                {},
                Ce,
                !Co(le) && { ownerState: k({}, pe, Ce.ownerState) },
                { ref: t, onClick: O },
                oe,
                {
                  className: ee(Oe.root, Ce.className, s),
                  children: [
                    A,
                    R(Sl.Provider, {
                      value: null,
                      children: R(
                        _e,
                        k(
                          {
                            ownerState: pe,
                            "aria-invalid": je.error,
                            "aria-describedby": o,
                            autoComplete: i,
                            autoFocus: a,
                            defaultValue: f,
                            disabled: je.disabled,
                            id: x,
                            onAnimationStart: X,
                            name: T,
                            placeholder: V,
                            readOnly: W,
                            required: je.required,
                            rows: te,
                            value: ne,
                            onKeyDown: U,
                            onKeyUp: F,
                            type: $,
                          },
                          z,
                          !Co(_e) && {
                            as: P,
                            ownerState: k({}, pe, z.ownerState),
                          },
                          {
                            ref: Fe,
                            className: ee(Oe.input, z.className),
                            onBlur: d,
                            onChange: m,
                            onFocus: u,
                          },
                        ),
                      ),
                    }),
                    v,
                    H ? H(k({}, je, { startAdornment: A })) : null,
                  ],
                },
              ),
            ),
          ],
        })
      );
    }),
    Zd = n5;
  function r5(e) {
    return ae("MuiInput", e);
  }
  const o5 = k({}, Ro, se("MuiInput", ["root", "underline", "input"])),
    Ji = o5;
  function i5(e) {
    return ae("MuiOutlinedInput", e);
  }
  const a5 = k(
      {},
      Ro,
      se("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
    ),
    ir = a5;
  function s5(e) {
    return ae("MuiFilledInput", e);
  }
  const l5 = k({}, Ro, se("MuiFilledInput", ["root", "underline", "input"])),
    Pr = l5,
    u5 = vn(R("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    c5 = [
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
    d5 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    f5 = E.forwardRef(function (e, t) {
      const n = Vi(),
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
          onExit: h,
          onExited: v,
          onExiting: g,
          style: x,
          timeout: N = r,
          TransitionComponent: w = E0,
        } = e,
        b = Q(e, c5),
        y = E.useRef(null),
        S = ot(y, a.ref, t),
        C = (F) => (V) => {
          if (F) {
            const W = y.current;
            V === void 0 ? F(W) : F(W, V);
          }
        },
        T = C(p),
        _ = C((F, V) => {
          C0(F);
          const W = gl({ style: x, timeout: N, easing: s }, { mode: "enter" });
          (F.style.webkitTransition = n.transitions.create("opacity", W)),
            (F.style.transition = n.transitions.create("opacity", W)),
            c && c(F, V);
        }),
        I = C(f),
        B = C(g),
        M = C((F) => {
          const V = gl({ style: x, timeout: N, easing: s }, { mode: "exit" });
          (F.style.webkitTransition = n.transitions.create("opacity", V)),
            (F.style.transition = n.transitions.create("opacity", V)),
            h && h(F);
        }),
        U = C(v);
      return R(
        w,
        k(
          {
            appear: i,
            in: l,
            nodeRef: y,
            onEnter: _,
            onEntered: I,
            onEntering: T,
            onExit: M,
            onExited: U,
            onExiting: B,
            addEndListener: (F) => {
              o && o(y.current, F);
            },
            timeout: N,
          },
          b,
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
                      d5[F],
                      x,
                      a.props.style,
                    ),
                    ref: S,
                  },
                  V,
                ),
              ),
          },
        ),
      );
    }),
    p5 = f5;
  function h5(e) {
    return ae("MuiBackdrop", e);
  }
  se("MuiBackdrop", ["root", "invisible"]);
  const m5 = [
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
    g5 = (e) => {
      const { classes: t, invisible: n } = e;
      return de({ root: ["root", n && "invisible"] }, h5, t);
    },
    y5 = J("div", {
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
    b5 = E.forwardRef(function (e, t) {
      var n, r, o;
      const i = fe({ props: e, name: "MuiBackdrop" }),
        {
          children: a,
          component: s = "div",
          components: l = {},
          componentsProps: c = {},
          className: f,
          invisible: p = !1,
          open: h,
          slotProps: v = {},
          slots: g = {},
          transitionDuration: x,
          TransitionComponent: N = p5,
        } = i,
        w = Q(i, m5),
        b = k({}, i, { component: s, invisible: p }),
        y = g5(b),
        S = (n = v.root) != null ? n : c.root;
      return R(
        N,
        k({ in: h, timeout: x }, w, {
          children: R(
            y5,
            k({ "aria-hidden": !0 }, S, {
              as: (r = (o = g.root) != null ? o : l.Root) != null ? r : s,
              className: ee(y.root, f, S == null ? void 0 : S.className),
              ownerState: k({}, b, S == null ? void 0 : S.ownerState),
              classes: y,
              ref: t,
              children: a,
            }),
          ),
        }),
      );
    }),
    v5 = b5;
  function w5(e) {
    return ae("MuiButton", e);
  }
  const S5 = se("MuiButton", [
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
    Ol = S5,
    x5 = E.createContext({}),
    k5 = x5,
    E5 = [
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
    C5 = (e) => {
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
        l = de(s, w5, a);
      return k({}, a, l);
    },
    M0 = (e) =>
      k(
        {},
        e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
        e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
        e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
      ),
    O5 = J(bl, {
      shouldForwardProp: (e) => bn(e) || e === "classes",
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
                  : Ct(e.palette.text.primary, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              t.variant === "text" &&
                t.color !== "inherit" && {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                        e.vars.palette.action.hoverOpacity
                      })`
                    : Ct(
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
                    : Ct(
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
            [`&.${Ol.focusVisible}`]: k(
              {},
              t.variant === "contained" && {
                boxShadow: (e.vars || e).shadows[6],
              },
            ),
            [`&.${Ol.disabled}`]: k(
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
                : `1px solid ${Ct(e.palette[t.color].main, 0.5)}`,
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
          [`&.${Ol.focusVisible}`]: { boxShadow: "none" },
          "&:active": { boxShadow: "none" },
          [`&.${Ol.disabled}`]: { boxShadow: "none" },
        },
    ),
    T5 = J("span", {
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
        M0(e),
      ),
    ),
    _5 = J("span", {
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
        M0(e),
      ),
    ),
    R5 = E.forwardRef(function (e, t) {
      const n = E.useContext(k5),
        r = Sd(n, e),
        o = fe({ props: r, name: "MuiButton" }),
        {
          children: i,
          color: a = "primary",
          component: s = "button",
          className: l,
          disabled: c = !1,
          disableElevation: f = !1,
          disableFocusRipple: p = !1,
          endIcon: h,
          focusVisibleClassName: v,
          fullWidth: g = !1,
          size: x = "medium",
          startIcon: N,
          type: w,
          variant: b = "text",
        } = o,
        y = Q(o, E5),
        S = k({}, o, {
          color: a,
          component: s,
          disabled: c,
          disableElevation: f,
          disableFocusRipple: p,
          fullWidth: g,
          size: x,
          type: w,
          variant: b,
        }),
        C = C5(S),
        T = N && R(T5, { className: C.startIcon, ownerState: S, children: N }),
        _ = h && R(_5, { className: C.endIcon, ownerState: S, children: h });
      return ce(
        O5,
        k(
          {
            ownerState: S,
            className: ee(n.className, C.root, l),
            component: s,
            disabled: c,
            focusRipple: !p,
            focusVisibleClassName: ee(C.focusVisible, v),
            ref: t,
            type: w,
          },
          y,
          { classes: C, children: [T, i, _] },
        ),
      );
    }),
    Tl = R5;
  function N5(e) {
    return ae("MuiCard", e);
  }
  se("MuiCard", ["root"]);
  const I5 = ["className", "raised"],
    P5 = (e) => {
      const { classes: t } = e;
      return de({ root: ["root"] }, N5, t);
    },
    A5 = J(Ki, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })(() => ({ overflow: "hidden" })),
    $5 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiCard" }),
        { className: r, raised: o = !1 } = n,
        i = Q(n, I5),
        a = k({}, n, { raised: o }),
        s = P5(a);
      return R(
        A5,
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
    M5 = $5;
  function L5(e) {
    return ae("PrivateSwitchBase", e);
  }
  se("PrivateSwitchBase", [
    "root",
    "checked",
    "disabled",
    "input",
    "edgeStart",
    "edgeEnd",
  ]);
  const B5 = [
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
    z5 = (e) => {
      const { classes: t, checked: n, disabled: r, edge: o } = e,
        i = {
          root: ["root", n && "checked", r && "disabled", o && `edge${G(o)}`],
          input: ["input"],
        };
      return de(i, L5, t);
    },
    D5 = J(bl)(({ ownerState: e }) =>
      k(
        { padding: 9, borderRadius: "50%" },
        e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
        e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 },
      ),
    ),
    F5 = J("input")({
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
    j5 = E.forwardRef(function (e, t) {
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
          inputProps: h,
          inputRef: v,
          name: g,
          onBlur: x,
          onChange: N,
          onFocus: w,
          readOnly: b,
          required: y = !1,
          tabIndex: S,
          type: C,
          value: T,
        } = e,
        _ = Q(e, B5),
        [I, B] = $s({
          controlled: r,
          default: !!a,
          name: "SwitchBase",
          state: "checked",
        }),
        M = or(),
        U = (L) => {
          w && w(L), M && M.onFocus && M.onFocus(L);
        },
        F = (L) => {
          x && x(L), M && M.onBlur && M.onBlur(L);
        },
        V = (L) => {
          if (L.nativeEvent.defaultPrevented) return;
          const A = L.target.checked;
          B(A), N && N(L, A);
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
        q = z5(te);
      return ce(
        D5,
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
          _,
          {
            children: [
              R(
                F5,
                k(
                  {
                    autoFocus: n,
                    checked: r,
                    defaultChecked: a,
                    className: q.input,
                    disabled: W,
                    id: H && p,
                    name: g,
                    onChange: V,
                    readOnly: b,
                    ref: v,
                    required: y,
                    ownerState: te,
                    tabIndex: S,
                    type: C,
                  },
                  C === "checkbox" && T === void 0 ? {} : { value: T },
                  h,
                ),
              ),
              I ? o : f,
            ],
          },
        ),
      );
    }),
    U5 = j5,
    W5 = vn(
      R("path", {
        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
      }),
      "CheckBoxOutlineBlank",
    ),
    V5 = vn(
      R("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      }),
      "CheckBox",
    ),
    H5 = vn(
      R("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
      }),
      "IndeterminateCheckBox",
    );
  function q5(e) {
    return ae("MuiCheckbox", e);
  }
  const K5 = se("MuiCheckbox", [
      "root",
      "checked",
      "disabled",
      "indeterminate",
      "colorPrimary",
      "colorSecondary",
    ]),
    ef = K5,
    J5 = [
      "checkedIcon",
      "color",
      "icon",
      "indeterminate",
      "indeterminateIcon",
      "inputProps",
      "size",
      "className",
    ],
    G5 = (e) => {
      const { classes: t, indeterminate: n, color: r } = e,
        o = { root: ["root", n && "indeterminate", `color${G(r)}`] },
        i = de(o, q5, t);
      return k({}, t, i);
    },
    Y5 = J(U5, {
      shouldForwardProp: (e) => bn(e) || e === "classes",
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
              : Ct(
                  t.color === "default"
                    ? e.palette.action.active
                    : e.palette[t.color].main,
                  e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${ef.checked}, &.${ef.indeterminate}`]: {
            color: (e.vars || e).palette[t.color].main,
          },
          [`&.${ef.disabled}`]: {
            color: (e.vars || e).palette.action.disabled,
          },
        },
      ),
    ),
    X5 = R(V5, {}),
    Q5 = R(W5, {}),
    Z5 = R(H5, {}),
    eC = E.forwardRef(function (e, t) {
      var n, r;
      const o = fe({ props: e, name: "MuiCheckbox" }),
        {
          checkedIcon: i = X5,
          color: a = "primary",
          icon: s = Q5,
          indeterminate: l = !1,
          indeterminateIcon: c = Z5,
          inputProps: f,
          size: p = "medium",
          className: h,
        } = o,
        v = Q(o, J5),
        g = l ? c : s,
        x = l ? c : i,
        N = k({}, o, { color: a, indeterminate: l, size: p }),
        w = G5(N);
      return R(
        Y5,
        k(
          {
            type: "checkbox",
            inputProps: k({ "data-indeterminate": l }, f),
            icon: E.cloneElement(g, {
              fontSize: (n = g.props.fontSize) != null ? n : p,
            }),
            checkedIcon: E.cloneElement(x, {
              fontSize: (r = x.props.fontSize) != null ? r : p,
            }),
            ownerState: N,
            ref: t,
            className: ee(w.root, h),
          },
          v,
          { classes: w },
        ),
      );
    }),
    tC = eC,
    nC = Ex({
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
    tf = nC,
    rC = [
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
    oC = (e) => e.classes,
    iC = J("div", {
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
    aC = J(v5, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    sC = E.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = fe({ name: "MuiModal", props: e }),
        {
          BackdropComponent: c = aC,
          BackdropProps: f,
          closeAfterTransition: p = !1,
          children: h,
          component: v,
          components: g = {},
          componentsProps: x = {},
          disableAutoFocus: N = !1,
          disableEnforceFocus: w = !1,
          disableEscapeKeyDown: b = !1,
          disablePortal: y = !1,
          disableRestoreFocus: S = !1,
          disableScrollLock: C = !1,
          hideBackdrop: T = !1,
          keepMounted: _ = !1,
          slotProps: I,
          slots: B,
          theme: M,
        } = l,
        U = Q(l, rC),
        [F, V] = E.useState(!0),
        W = {
          closeAfterTransition: p,
          disableAutoFocus: N,
          disableEnforceFocus: w,
          disableEscapeKeyDown: b,
          disablePortal: y,
          disableRestoreFocus: S,
          disableScrollLock: C,
          hideBackdrop: T,
          keepMounted: _,
        },
        H = k({}, l, W, { exited: F }),
        te = oC(H),
        q =
          (n = (r = B == null ? void 0 : B.root) != null ? r : g.Root) != null
            ? n
            : iC,
        L =
          (o =
            (i = B == null ? void 0 : B.backdrop) != null ? i : g.Backdrop) !=
          null
            ? o
            : c,
        A = (a = I == null ? void 0 : I.root) != null ? a : x.root,
        $ = (s = I == null ? void 0 : I.backdrop) != null ? s : x.backdrop;
      return R(
        Ok,
        k(
          {
            slots: { root: q, backdrop: L },
            slotProps: {
              root: () => k({}, Hd(A, H), !Co(q) && { as: v, theme: M }),
              backdrop: () => k({}, f, Hd($, H)),
            },
            onTransitionEnter: () => V(!1),
            onTransitionExited: () => V(!0),
            ref: t,
          },
          U,
          { classes: te },
          W,
          { children: h },
        ),
      );
    }),
    lC = sC,
    uC = [
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
    cC = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = de({ root: ["root", !n && "underline"], input: ["input"] }, s5, t);
      return k({}, t, r);
    },
    dC = J(El, {
      shouldForwardProp: (e) => bn(e) || e === "classes",
      name: "MuiFilledInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...xl(e, t), !n.disableUnderline && t.underline];
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
          [`&.${Pr.focused}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
          [`&.${Pr.disabled}`]: {
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
          [`&.${Pr.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Pr.error}`]: {
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
          [`&:hover:not(.${Pr.disabled}, .${Pr.error}):before`]: {
            borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
          },
          [`&.${Pr.disabled}:before`]: { borderBottomStyle: "dotted" },
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
    fC = J(Cl, {
      name: "MuiFilledInput",
      slot: "Input",
      overridesResolver: kl,
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
    L0 = E.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = fe({ props: e, name: "MuiFilledInput" }),
        {
          components: s = {},
          componentsProps: l,
          fullWidth: c = !1,
          inputComponent: f = "input",
          multiline: p = !1,
          slotProps: h,
          slots: v = {},
          type: g = "text",
        } = a,
        x = Q(a, uC),
        N = k({}, a, {
          fullWidth: c,
          inputComponent: f,
          multiline: p,
          type: g,
        }),
        w = cC(a),
        b = { root: { ownerState: N }, input: { ownerState: N } },
        y = h ?? l ? Ht(h ?? l, b) : b,
        S = (n = (r = v.root) != null ? r : s.Root) != null ? n : dC,
        C = (o = (i = v.input) != null ? i : s.Input) != null ? o : fC;
      return R(
        Zd,
        k(
          {
            slots: { root: S, input: C },
            componentsProps: y,
            fullWidth: c,
            inputComponent: f,
            multiline: p,
            ref: t,
            type: g,
          },
          x,
          { classes: w },
        ),
      );
    });
  L0.muiName = "Input";
  const B0 = L0;
  function pC(e) {
    return ae("MuiFormControl", e);
  }
  se("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
  ]);
  const hC = [
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
    mC = (e) => {
      const { classes: t, margin: n, fullWidth: r } = e,
        o = {
          root: ["root", n !== "none" && `margin${G(n)}`, r && "fullWidth"],
        };
      return de(o, pC, t);
    },
    gC = J("div", {
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
    yC = E.forwardRef(function (e, t) {
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
          margin: h = "none",
          required: v = !1,
          size: g = "medium",
          variant: x = "outlined",
        } = n,
        N = Q(n, hC),
        w = k({}, n, {
          color: i,
          component: a,
          disabled: s,
          error: l,
          fullWidth: f,
          hiddenLabel: p,
          margin: h,
          required: v,
          size: g,
          variant: x,
        }),
        b = mC(w),
        [y, S] = E.useState(() => {
          let F = !1;
          return (
            r &&
              E.Children.forEach(r, (V) => {
                if (!Ai(V, ["Input", "Select"])) return;
                const W = Ai(V, ["Select"]) ? V.props.input : V;
                W && YE(W.props) && (F = !0);
              }),
            F
          );
        }),
        [C, T] = E.useState(() => {
          let F = !1;
          return (
            r &&
              E.Children.forEach(r, (V) => {
                Ai(V, ["Input", "Select"]) && Qd(V.props, !0) && (F = !0);
              }),
            F
          );
        }),
        [_, I] = E.useState(!1);
      s && _ && I(!1);
      const B = c !== void 0 && !s ? c : _;
      let M;
      const U = E.useMemo(
        () => ({
          adornedStart: y,
          setAdornedStart: S,
          color: i,
          disabled: s,
          error: l,
          filled: C,
          focused: B,
          fullWidth: f,
          hiddenLabel: p,
          size: g,
          onBlur: () => {
            I(!1);
          },
          onEmpty: () => {
            T(!1);
          },
          onFilled: () => {
            T(!0);
          },
          onFocus: () => {
            I(!0);
          },
          registerEffect: M,
          required: v,
          variant: x,
        }),
        [y, i, s, l, C, B, f, p, M, v, g, x],
      );
      return R(Sl.Provider, {
        value: U,
        children: R(
          gC,
          k({ as: a, ownerState: w, className: ee(b.root, o), ref: t }, N, {
            children: r,
          }),
        ),
      });
    }),
    bC = yC;
  function vC(e) {
    return ae("MuiFormHelperText", e);
  }
  const wC = se("MuiFormHelperText", [
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
    z0 = wC;
  var D0;
  const SC = [
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
    xC = (e) => {
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
      return de(c, vC, t);
    },
    kC = J("p", {
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
          [`&.${z0.disabled}`]: { color: (e.vars || e).palette.text.disabled },
          [`&.${z0.error}`]: { color: (e.vars || e).palette.error.main },
        },
        t.size === "small" && { marginTop: 4 },
        t.contained && { marginLeft: 14, marginRight: 14 },
      ),
    ),
    EC = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiFormHelperText" }),
        { children: r, className: o, component: i = "p" } = n,
        a = Q(n, SC),
        s = or(),
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
        f = xC(c);
      return R(
        kC,
        k({ as: i, ownerState: c, className: ee(f.root, o), ref: t }, a, {
          children:
            r === " "
              ? D0 ||
                (D0 = R("span", {
                  className: "notranslate",
                  children: "\u200B",
                }))
              : r,
        }),
      );
    }),
    CC = EC;
  function OC(e) {
    return ae("MuiFormLabel", e);
  }
  const TC = se("MuiFormLabel", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "error",
      "filled",
      "required",
      "asterisk",
    ]),
    Gi = TC,
    _C = [
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
    RC = (e) => {
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
      return de(l, OC, t);
    },
    NC = J("label", {
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
        [`&.${Gi.focused}`]: { color: (e.vars || e).palette[t.color].main },
        [`&.${Gi.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Gi.error}`]: { color: (e.vars || e).palette.error.main },
      }),
    ),
    IC = J("span", {
      name: "MuiFormLabel",
      slot: "Asterisk",
      overridesResolver: (e, t) => t.asterisk,
    })(({ theme: e }) => ({
      [`&.${Gi.error}`]: { color: (e.vars || e).palette.error.main },
    })),
    PC = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiFormLabel" }),
        { children: r, className: o, component: i = "label" } = n,
        a = Q(n, _C),
        s = or(),
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
        f = RC(c);
      return ce(
        NC,
        k({ as: i, ownerState: c, className: ee(f.root, o), ref: t }, a, {
          children: [
            r,
            l.required &&
              ce(IC, {
                ownerState: c,
                "aria-hidden": !0,
                className: f.asterisk,
                children: ["\u2009", "*"],
              }),
          ],
        }),
      );
    }),
    AC = PC,
    $C = [
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
  function nf(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  const MC = {
      entering: { opacity: 1, transform: nf(1) },
      entered: { opacity: 1, transform: "none" },
    },
    rf =
      typeof navigator < "u" &&
      /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
      /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    F0 = E.forwardRef(function (e, t) {
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
          onExiting: h,
          style: v,
          timeout: g = "auto",
          TransitionComponent: x = E0,
        } = e,
        N = Q(e, $C),
        w = E.useRef(),
        b = E.useRef(),
        y = Vi(),
        S = E.useRef(null),
        C = ot(S, o.ref, t),
        T = (W) => (H) => {
          if (W) {
            const te = S.current;
            H === void 0 ? W(te) : W(te, H);
          }
        },
        _ = T(c),
        I = T((W, H) => {
          C0(W);
          const {
            duration: te,
            delay: q,
            easing: L,
          } = gl({ style: v, timeout: g, easing: i }, { mode: "enter" });
          let A;
          g === "auto"
            ? ((A = y.transitions.getAutoHeightDuration(W.clientHeight)),
              (b.current = A))
            : (A = te),
            (W.style.transition = [
              y.transitions.create("opacity", { duration: A, delay: q }),
              y.transitions.create("transform", {
                duration: rf ? A : A * 0.666,
                delay: q,
                easing: L,
              }),
            ].join(",")),
            s && s(W, H);
        }),
        B = T(l),
        M = T(h),
        U = T((W) => {
          const {
            duration: H,
            delay: te,
            easing: q,
          } = gl({ style: v, timeout: g, easing: i }, { mode: "exit" });
          let L;
          g === "auto"
            ? ((L = y.transitions.getAutoHeightDuration(W.clientHeight)),
              (b.current = L))
            : (L = H),
            (W.style.transition = [
              y.transitions.create("opacity", { duration: L, delay: te }),
              y.transitions.create("transform", {
                duration: rf ? L : L * 0.666,
                delay: rf ? te : te || L * 0.333,
                easing: q,
              }),
            ].join(",")),
            (W.style.opacity = 0),
            (W.style.transform = nf(0.75)),
            f && f(W);
        }),
        F = T(p),
        V = (W) => {
          g === "auto" && (w.current = setTimeout(W, b.current || 0)),
            n && n(S.current, W);
        };
      return (
        E.useEffect(
          () => () => {
            clearTimeout(w.current);
          },
          [],
        ),
        R(
          x,
          k(
            {
              appear: r,
              in: a,
              nodeRef: S,
              onEnter: I,
              onEntered: B,
              onEntering: _,
              onExit: U,
              onExited: F,
              onExiting: M,
              addEndListener: V,
              timeout: g === "auto" ? null : g,
            },
            N,
            {
              children: (W, H) =>
                E.cloneElement(
                  o,
                  k(
                    {
                      style: k(
                        {
                          opacity: 0,
                          transform: nf(0.75),
                          visibility: W === "exited" && !a ? "hidden" : void 0,
                        },
                        MC[W],
                        v,
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
  F0.muiSupportAuto = !0;
  const LC = F0,
    BC = [
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
    zC = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = de({ root: ["root", !n && "underline"], input: ["input"] }, r5, t);
      return k({}, t, r);
    },
    DC = J(El, {
      shouldForwardProp: (e) => bn(e) || e === "classes",
      name: "MuiInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...xl(e, t), !n.disableUnderline && t.underline];
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
            [`&.${Ji.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
            [`&.${Ji.error}`]: {
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
            [`&:hover:not(.${Ji.disabled}, .${Ji.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": { borderBottom: `1px solid ${n}` },
            },
            [`&.${Ji.disabled}:before`]: { borderBottomStyle: "dotted" },
          },
        )
      );
    }),
    FC = J(Cl, { name: "MuiInput", slot: "Input", overridesResolver: kl })({}),
    j0 = E.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = fe({ props: e, name: "MuiInput" }),
        {
          disableUnderline: s,
          components: l = {},
          componentsProps: c,
          fullWidth: f = !1,
          inputComponent: p = "input",
          multiline: h = !1,
          slotProps: v,
          slots: g = {},
          type: x = "text",
        } = a,
        N = Q(a, BC),
        w = zC(a),
        b = { root: { ownerState: { disableUnderline: s } } },
        y = v ?? c ? Ht(v ?? c, b) : b,
        S = (n = (r = g.root) != null ? r : l.Root) != null ? n : DC,
        C = (o = (i = g.input) != null ? i : l.Input) != null ? o : FC;
      return R(
        Zd,
        k(
          {
            slots: { root: S, input: C },
            slotProps: y,
            fullWidth: f,
            inputComponent: p,
            multiline: h,
            ref: t,
            type: x,
          },
          N,
          { classes: w },
        ),
      );
    });
  j0.muiName = "Input";
  const U0 = j0;
  function jC(e) {
    return ae("MuiInputAdornment", e);
  }
  const UC = se("MuiInputAdornment", [
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
    W0 = UC;
  var V0;
  const WC = [
      "children",
      "className",
      "component",
      "disablePointerEvents",
      "disableTypography",
      "position",
      "variant",
    ],
    VC = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`position${G(n.position)}`],
        n.disablePointerEvents === !0 && t.disablePointerEvents,
        t[n.variant],
      ];
    },
    HC = (e) => {
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
      return de(s, jC, t);
    },
    qC = J("div", {
      name: "MuiInputAdornment",
      slot: "Root",
      overridesResolver: VC,
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
          [`&.${W0.positionStart}&:not(.${W0.hiddenLabel})`]: { marginTop: 16 },
        },
        t.position === "start" && { marginRight: 8 },
        t.position === "end" && { marginLeft: 8 },
        t.disablePointerEvents === !0 && { pointerEvents: "none" },
      ),
    ),
    KC = E.forwardRef(function (e, t) {
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
        f = Q(n, WC),
        p = or() || {};
      let h = c;
      c && p.variant, p && !h && (h = p.variant);
      const v = k({}, n, {
          hiddenLabel: p.hiddenLabel,
          size: p.size,
          disablePointerEvents: a,
          position: l,
          variant: h,
        }),
        g = HC(v);
      return R(Sl.Provider, {
        value: null,
        children: R(
          qC,
          k({ as: i, ownerState: v, className: ee(g.root, o), ref: t }, f, {
            children:
              typeof r == "string" && !s
                ? R(Jt, { color: "text.secondary", children: r })
                : ce(E.Fragment, {
                    children: [
                      l === "start"
                        ? V0 ||
                          (V0 = R("span", {
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
    JC = KC;
  function GC(e) {
    return ae("MuiInputLabel", e);
  }
  se("MuiInputLabel", [
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
  const YC = ["disableAnimation", "margin", "shrink", "variant", "className"],
    XC = (e) => {
      const {
          classes: t,
          formControl: n,
          size: r,
          shrink: o,
          disableAnimation: i,
          variant: a,
          required: s,
        } = e,
        l = de(
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
          GC,
          t,
        );
      return k({}, t, l);
    },
    QC = J(AC, {
      shouldForwardProp: (e) => bn(e) || e === "classes",
      name: "MuiInputLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Gi.asterisk}`]: t.asterisk },
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
    ZC = E.forwardRef(function (e, t) {
      const n = fe({ name: "MuiInputLabel", props: e }),
        { disableAnimation: r = !1, shrink: o, className: i } = n,
        a = Q(n, YC),
        s = or();
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
        p = XC(f);
      return R(
        QC,
        k(
          { "data-shrink": l, ownerState: f, ref: t, className: ee(p.root, i) },
          a,
          { classes: p },
        ),
      );
    }),
    e3 = ZC;
  function t3(e) {
    return ae("MuiLinearProgress", e);
  }
  se("MuiLinearProgress", [
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
  const n3 = ["className", "color", "value", "valueBuffer", "variant"];
  let No = (e) => e,
    H0,
    q0,
    K0,
    J0,
    G0,
    Y0;
  const of = 4,
    r3 = xo(
      H0 ||
        (H0 = No`
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
    o3 = xo(
      q0 ||
        (q0 = No`
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
    i3 = xo(
      K0 ||
        (K0 = No`
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
    a3 = (e) => {
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
      return de(o, t3, t);
    },
    af = (e, t) =>
      t === "inherit"
        ? "currentColor"
        : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === "light"
        ? fl(e.palette[t].main, 0.62)
        : dl(e.palette[t].main, 0.5),
    s3 = J("span", {
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
          backgroundColor: af(t, e.color),
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
    l3 = J("span", {
      name: "MuiLinearProgress",
      slot: "Dashed",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.dashed, t[`dashedColor${G(n.color)}`]];
      },
    })(
      ({ ownerState: e, theme: t }) => {
        const n = af(t, e.color);
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
      tl(
        J0 ||
          (J0 = No`
    animation: ${0} 3s infinite linear;
  `),
        i3,
      ),
    ),
    u3 = J("span", {
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
            transition: `transform .${of}s linear`,
          },
          e.variant === "buffer" && {
            zIndex: 1,
            transition: `transform .${of}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        tl(
          G0 ||
            (G0 = No`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
          r3,
        ),
    ),
    c3 = J("span", {
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
            backgroundColor: af(t, e.color),
            transition: `transform .${of}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        tl(
          Y0 ||
            (Y0 = No`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
          o3,
        ),
    ),
    d3 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiLinearProgress" }),
        {
          className: r,
          color: o = "primary",
          value: i,
          valueBuffer: a,
          variant: s = "indeterminate",
        } = n,
        l = Q(n, n3),
        c = k({}, n, { color: o, variant: s }),
        f = a3(c),
        p = Vi(),
        h = {},
        v = { bar1: {}, bar2: {} };
      if ((s === "determinate" || s === "buffer") && i !== void 0) {
        (h["aria-valuenow"] = Math.round(i)),
          (h["aria-valuemin"] = 0),
          (h["aria-valuemax"] = 100);
        let g = i - 100;
        p.direction === "rtl" && (g = -g),
          (v.bar1.transform = `translateX(${g}%)`);
      }
      if (s === "buffer" && a !== void 0) {
        let g = (a || 0) - 100;
        p.direction === "rtl" && (g = -g),
          (v.bar2.transform = `translateX(${g}%)`);
      }
      return ce(
        s3,
        k(
          { className: ee(f.root, r), ownerState: c, role: "progressbar" },
          h,
          { ref: t },
          l,
          {
            children: [
              s === "buffer"
                ? R(l3, { className: f.dashed, ownerState: c })
                : null,
              R(u3, { className: f.bar1, ownerState: c, style: v.bar1 }),
              s === "determinate"
                ? null
                : R(c3, { className: f.bar2, ownerState: c, style: v.bar2 }),
            ],
          },
        ),
      );
    }),
    f3 = d3;
  function p3(e) {
    return ae("MuiLink", e);
  }
  const h3 = se("MuiLink", [
      "root",
      "underlineNone",
      "underlineHover",
      "underlineAlways",
      "button",
      "focusVisible",
    ]),
    m3 = h3,
    X0 = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main",
    },
    g3 = (e) => X0[e] || e,
    y3 = ({ theme: e, ownerState: t }) => {
      const n = g3(t.color),
        r = ko(e, `palette.${n}`, !1) || t.color,
        o = ko(e, `palette.${n}Channel`);
      return "vars" in e && o ? `rgba(${o} / 0.4)` : Ct(r, 0.4);
    },
    b3 = y3,
    v3 = [
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
    w3 = (e) => {
      const { classes: t, component: n, focusVisible: r, underline: o } = e,
        i = {
          root: [
            "root",
            `underline${G(o)}`,
            n === "button" && "button",
            r && "focusVisible",
          ],
        };
      return de(i, p3, t);
    },
    S3 = J(Jt, {
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
              textDecorationColor: b3({ theme: e, ownerState: t }),
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
          [`&.${m3.focusVisible}`]: { outline: "auto" },
        },
      ),
    ),
    x3 = E.forwardRef(function (e, t) {
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
        h = Q(n, v3),
        { isFocusVisibleRef: v, onBlur: g, onFocus: x, ref: N } = wd(),
        [w, b] = E.useState(!1),
        y = ot(t, N),
        S = (I) => {
          g(I), v.current === !1 && b(!1), a && a(I);
        },
        C = (I) => {
          x(I), v.current === !0 && b(!0), s && s(I);
        },
        T = k({}, n, {
          color: o,
          component: i,
          focusVisible: w,
          underline: c,
          variant: f,
        }),
        _ = w3(T);
      return R(
        S3,
        k(
          {
            color: o,
            className: ee(_.root, r),
            classes: l,
            component: i,
            onBlur: S,
            onFocus: C,
            ref: y,
            ownerState: T,
            variant: f,
            sx: [
              ...(Object.keys(X0).includes(o) ? [] : [{ color: o }]),
              ...(Array.isArray(p) ? p : [p]),
            ],
          },
          h,
        ),
      );
    }),
    k3 = x3,
    E3 = E.createContext({}),
    Ar = E3;
  function C3(e) {
    return ae("MuiList", e);
  }
  se("MuiList", ["root", "padding", "dense", "subheader"]);
  const O3 = [
      "children",
      "className",
      "component",
      "dense",
      "disablePadding",
      "subheader",
    ],
    T3 = (e) => {
      const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
      return de(
        { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
        C3,
        t,
      );
    },
    _3 = J("ul", {
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
    R3 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiList" }),
        {
          children: r,
          className: o,
          component: i = "ul",
          dense: a = !1,
          disablePadding: s = !1,
          subheader: l,
        } = n,
        c = Q(n, O3),
        f = E.useMemo(() => ({ dense: a }), [a]),
        p = k({}, n, { component: i, dense: a, disablePadding: s }),
        h = T3(p);
      return R(Ar.Provider, {
        value: f,
        children: ce(
          _3,
          k({ as: i, className: ee(h.root, o), ref: t, ownerState: p }, c, {
            children: [l, r],
          }),
        ),
      });
    }),
    Q0 = R3;
  function N3(e) {
    return ae("MuiListItem", e);
  }
  const I3 = se("MuiListItem", [
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
    Io = I3,
    P3 = se("MuiListItemButton", [
      "root",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    A3 = P3;
  function $3(e) {
    return ae("MuiListItemSecondaryAction", e);
  }
  se("MuiListItemSecondaryAction", ["root", "disableGutters"]);
  const M3 = ["className"],
    L3 = (e) => {
      const { disableGutters: t, classes: n } = e;
      return de({ root: ["root", t && "disableGutters"] }, $3, n);
    },
    B3 = J("div", {
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
    Z0 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiListItemSecondaryAction" }),
        { className: r } = n,
        o = Q(n, M3),
        i = E.useContext(Ar),
        a = k({}, n, { disableGutters: i.disableGutters }),
        s = L3(a);
      return R(B3, k({ className: ee(s.root, r), ownerState: a, ref: t }, o));
    });
  Z0.muiName = "ListItemSecondaryAction";
  const sf = Z0,
    z3 = ["className"],
    D3 = [
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
    F3 = (e, t) => {
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
    j3 = (e) => {
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
      return de(
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
        N3,
        r,
      );
    },
    U3 = J("div", { name: "MuiListItem", slot: "Root", overridesResolver: F3 })(
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
          !!t.secondaryAction && { [`& > .${A3.root}`]: { paddingRight: 48 } },
          {
            [`&.${Io.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus,
            },
            [`&.${Io.selected}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Ct(e.palette.primary.main, e.palette.action.selectedOpacity),
              [`&.${Io.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                  : Ct(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity +
                        e.palette.action.focusOpacity,
                    ),
              },
            },
            [`&.${Io.disabled}`]: {
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
            [`&.${Io.selected}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                : Ct(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.hoverOpacity,
                  ),
              "@media (hover: none)": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                  : Ct(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity,
                    ),
              },
            },
          },
          t.hasSecondaryAction && { paddingRight: 48 },
        ),
    ),
    W3 = J("li", {
      name: "MuiListItem",
      slot: "Container",
      overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    V3 = E.forwardRef(function (e, t) {
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
          ContainerProps: { className: h } = {},
          dense: v = !1,
          disabled: g = !1,
          disableGutters: x = !1,
          disablePadding: N = !1,
          divider: w = !1,
          focusVisibleClassName: b,
          secondaryAction: y,
          selected: S = !1,
          slotProps: C = {},
          slots: T = {},
        } = n,
        _ = Q(n.ContainerProps, z3),
        I = Q(n, D3),
        B = E.useContext(Ar),
        M = E.useMemo(
          () => ({
            dense: v || B.dense || !1,
            alignItems: r,
            disableGutters: x,
          }),
          [r, B.dense, v, x],
        ),
        U = E.useRef(null);
      rr(() => {
        o && U.current && U.current.focus();
      }, [o]);
      const F = E.Children.toArray(a),
        V = F.length && Ai(F[F.length - 1], ["ListItemSecondaryAction"]),
        W = k({}, n, {
          alignItems: r,
          autoFocus: o,
          button: i,
          dense: M.dense,
          disabled: g,
          disableGutters: x,
          disablePadding: N,
          divider: w,
          hasSecondaryAction: V,
          selected: S,
        }),
        H = j3(W),
        te = ot(U, t),
        q = T.root || c.Root || U3,
        L = C.root || f.root || {},
        A = k({ className: ee(H.root, L.className, s), disabled: g }, I);
      let $ = l || "li";
      return (
        i &&
          ((A.component = l || "div"),
          (A.focusVisibleClassName = ee(Io.focusVisible, b)),
          ($ = bl)),
        V
          ? (($ = !A.component && !l ? "div" : $),
            p === "li" &&
              ($ === "li"
                ? ($ = "div")
                : A.component === "li" && (A.component = "div")),
            R(Ar.Provider, {
              value: M,
              children: ce(
                W3,
                k(
                  {
                    as: p,
                    className: ee(H.container, h),
                    ref: te,
                    ownerState: W,
                  },
                  _,
                  {
                    children: [
                      R(
                        q,
                        k(
                          {},
                          L,
                          !Co(q) && {
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
          : R(Ar.Provider, {
              value: M,
              children: ce(
                q,
                k(
                  {},
                  L,
                  { as: $, ref: te },
                  !Co(q) && { ownerState: k({}, W, L.ownerState) },
                  A,
                  { children: [F, y && R(sf, { children: y })] },
                ),
              ),
            })
      );
    }),
    ey = V3;
  function H3(e) {
    return ae("MuiListItemIcon", e);
  }
  se("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
  const q3 = ["className"],
    K3 = (e) => {
      const { alignItems: t, classes: n } = e;
      return de(
        { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
        H3,
        n,
      );
    },
    J3 = J("div", {
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
    G3 = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiListItemIcon" }),
        { className: r } = n,
        o = Q(n, q3),
        i = E.useContext(Ar),
        a = k({}, n, { alignItems: i.alignItems }),
        s = K3(a);
      return R(J3, k({ className: ee(s.root, r), ownerState: a, ref: t }, o));
    }),
    Y3 = G3;
  function X3(e) {
    return ae("MuiListItemText", e);
  }
  const Q3 = se("MuiListItemText", [
      "root",
      "multiline",
      "dense",
      "inset",
      "primary",
      "secondary",
    ]),
    ty = Q3,
    Z3 = [
      "children",
      "className",
      "disableTypography",
      "inset",
      "primary",
      "primaryTypographyProps",
      "secondary",
      "secondaryTypographyProps",
    ],
    e4 = (e) => {
      const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
      return de(
        {
          root: ["root", n && "inset", i && "dense", r && o && "multiline"],
          primary: ["primary"],
          secondary: ["secondary"],
        },
        X3,
        t,
      );
    },
    t4 = J("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${ty.primary}`]: t.primary },
          { [`& .${ty.secondary}`]: t.secondary },
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
    n4 = E.forwardRef(function (e, t) {
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
        p = Q(n, Z3),
        { dense: h } = E.useContext(Ar);
      let v = s ?? r,
        g = c;
      const x = k({}, n, {
          disableTypography: i,
          inset: a,
          primary: !!v,
          secondary: !!g,
          dense: h,
        }),
        N = e4(x);
      return (
        v != null &&
          v.type !== Jt &&
          !i &&
          (v = R(
            Jt,
            k(
              {
                variant: h ? "body2" : "body1",
                className: N.primary,
                component: l != null && l.variant ? void 0 : "span",
                display: "block",
              },
              l,
              { children: v },
            ),
          )),
        g != null &&
          g.type !== Jt &&
          !i &&
          (g = R(
            Jt,
            k(
              {
                variant: "body2",
                className: N.secondary,
                color: "text.secondary",
                display: "block",
              },
              f,
              { children: g },
            ),
          )),
        ce(
          t4,
          k({ className: ee(N.root, o), ownerState: x, ref: t }, p, {
            children: [v, g],
          }),
        )
      );
    }),
    _l = n4,
    r4 = [
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
  function lf(e, t, n) {
    return e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
      ? null
      : e.firstChild;
  }
  function ny(e, t, n) {
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
  function ry(e, t) {
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
  function Yi(e, t, n, r, o, i) {
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
      if (!s.hasAttribute("tabindex") || !ry(s, i) || l) s = o(e, s, n);
      else return s.focus(), !0;
    }
    return !1;
  }
  const o4 = E.forwardRef(function (e, t) {
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
        p = Q(e, r4),
        h = E.useRef(null),
        v = E.useRef({
          keys: [],
          repeating: !0,
          previousKeyMatched: !0,
          lastTime: null,
        });
      rr(() => {
        r && h.current.focus();
      }, [r]),
        E.useImperativeHandle(
          n,
          () => ({
            adjustStyleForScrollbar: (b, y) => {
              const S = !h.current.style.width;
              if (b.clientHeight < h.current.clientHeight && S) {
                const C = `${wg(kt(b))}px`;
                (h.current.style[
                  y.direction === "rtl" ? "paddingLeft" : "paddingRight"
                ] = C),
                  (h.current.style.width = `calc(100% + ${C})`);
              }
              return h.current;
            },
          }),
          [],
        );
      const g = (b) => {
          const y = h.current,
            S = b.key,
            C = kt(y).activeElement;
          if (S === "ArrowDown") b.preventDefault(), Yi(y, C, l, s, lf);
          else if (S === "ArrowUp") b.preventDefault(), Yi(y, C, l, s, ny);
          else if (S === "Home") b.preventDefault(), Yi(y, null, l, s, lf);
          else if (S === "End") b.preventDefault(), Yi(y, null, l, s, ny);
          else if (S.length === 1) {
            const T = v.current,
              _ = S.toLowerCase(),
              I = performance.now();
            T.keys.length > 0 &&
              (I - T.lastTime > 500
                ? ((T.keys = []),
                  (T.repeating = !0),
                  (T.previousKeyMatched = !0))
                : T.repeating && _ !== T.keys[0] && (T.repeating = !1)),
              (T.lastTime = I),
              T.keys.push(_);
            const B = C && !T.repeating && ry(C, T);
            T.previousKeyMatched && (B || Yi(y, C, !1, s, lf, T))
              ? b.preventDefault()
              : (T.previousKeyMatched = !1);
          }
          c && c(b);
        },
        x = ot(h, t);
      let N = -1;
      E.Children.forEach(i, (b, y) => {
        E.isValidElement(b) &&
          (b.props.disabled ||
            (((f === "selectedMenu" && b.props.selected) || N === -1) &&
              (N = y)));
      });
      const w = E.Children.map(i, (b, y) => {
        if (y === N) {
          const S = {};
          return (
            o && (S.autoFocus = !0),
            b.props.tabIndex === void 0 &&
              f === "selectedMenu" &&
              (S.tabIndex = 0),
            E.cloneElement(b, S)
          );
        }
        return b;
      });
      return R(
        Q0,
        k(
          {
            role: "menu",
            ref: x,
            className: a,
            onKeyDown: g,
            tabIndex: r ? 0 : -1,
          },
          p,
          { children: w },
        ),
      );
    }),
    i4 = o4;
  function a4(e) {
    return ae("MuiPopover", e);
  }
  se("MuiPopover", ["root", "paper"]);
  const s4 = ["onEntering"],
    l4 = [
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
  function oy(e, t) {
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
  function iy(e, t) {
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
  function ay(e) {
    return [e.horizontal, e.vertical]
      .map((t) => (typeof t == "number" ? `${t}px` : t))
      .join(" ");
  }
  function uf(e) {
    return typeof e == "function" ? e() : e;
  }
  const u4 = (e) => {
      const { classes: t } = e;
      return de({ root: ["root"], paper: ["paper"] }, a4, t);
    },
    c4 = J(lC, {
      name: "MuiPopover",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    d4 = J(Ki, {
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
    f4 = E.forwardRef(function (e, t) {
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
          marginThreshold: h = 16,
          open: v,
          PaperProps: g = {},
          transformOrigin: x = { vertical: "top", horizontal: "left" },
          TransitionComponent: N = LC,
          transitionDuration: w = "auto",
          TransitionProps: { onEntering: b } = {},
        } = n,
        y = Q(n.TransitionProps, s4),
        S = Q(n, l4),
        C = E.useRef(),
        T = ot(C, g.ref),
        _ = k({}, n, {
          anchorOrigin: i,
          anchorReference: s,
          elevation: p,
          marginThreshold: h,
          PaperProps: g,
          transformOrigin: x,
          TransitionComponent: N,
          transitionDuration: w,
          TransitionProps: y,
        }),
        I = u4(_),
        B = E.useCallback(() => {
          if (s === "anchorPosition") return a;
          const A = uf(o),
            $ = (
              A && A.nodeType === 1 ? A : kt(C.current).body
            ).getBoundingClientRect();
          return {
            top: $.top + oy($, i.vertical),
            left: $.left + iy($, i.horizontal),
          };
        }, [o, i.horizontal, i.vertical, a, s]),
        M = E.useCallback(
          (A) => ({
            vertical: oy(A, x.vertical),
            horizontal: iy(A, x.horizontal),
          }),
          [x.horizontal, x.vertical],
        ),
        U = E.useCallback(
          (A) => {
            const $ = { width: A.offsetWidth, height: A.offsetHeight },
              Y = M($);
            if (s === "none")
              return { top: null, left: null, transformOrigin: ay(Y) };
            const oe = B();
            let ne = oe.top - Y.vertical,
              he = oe.left - Y.horizontal;
            const ve = ne + $.height,
              Le = he + $.width,
              Fe = nr(uf(o)),
              Pe = Fe.innerHeight - h,
              st = Fe.innerWidth - h;
            if (ne < h) {
              const re = ne - h;
              (ne -= re), (Y.vertical += re);
            } else if (ve > Pe) {
              const re = ve - Pe;
              (ne -= re), (Y.vertical += re);
            }
            if (he < h) {
              const re = he - h;
              (he -= re), (Y.horizontal += re);
            } else if (Le > st) {
              const re = Le - st;
              (he -= re), (Y.horizontal += re);
            }
            return {
              top: `${Math.round(ne)}px`,
              left: `${Math.round(he)}px`,
              transformOrigin: ay(Y),
            };
          },
          [o, s, B, M, h],
        ),
        [F, V] = E.useState(v),
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
          b && b(A, $), W();
        },
        te = () => {
          V(!1);
        };
      E.useEffect(() => {
        v && W();
      }),
        E.useImperativeHandle(
          r,
          () =>
            v
              ? {
                  updatePosition: () => {
                    W();
                  },
                }
              : null,
          [v, W],
        ),
        E.useEffect(() => {
          if (!v) return;
          const A = yd(() => {
              W();
            }),
            $ = nr(o);
          return (
            $.addEventListener("resize", A),
            () => {
              A.clear(), $.removeEventListener("resize", A);
            }
          );
        }, [o, v, W]);
      let q = w;
      w === "auto" && !N.muiSupportAuto && (q = void 0);
      const L = f || (o ? kt(uf(o)).body : void 0);
      return R(
        c4,
        k(
          {
            BackdropProps: { invisible: !0 },
            className: ee(I.root, c),
            container: L,
            open: v,
            ref: t,
            ownerState: _,
          },
          S,
          {
            children: R(
              N,
              k(
                { appear: !0, in: v, onEntering: H, onExited: te, timeout: q },
                y,
                {
                  children: R(
                    d4,
                    k(
                      { elevation: p },
                      g,
                      { ref: T, className: ee(I.paper, g.className) },
                      F ? void 0 : { style: k({}, g.style, { opacity: 0 }) },
                      { ownerState: _, children: l },
                    ),
                  ),
                },
              ),
            ),
          },
        ),
      );
    }),
    p4 = f4;
  function h4(e) {
    return ae("MuiMenu", e);
  }
  se("MuiMenu", ["root", "paper", "list"]);
  const m4 = ["onEntering"],
    g4 = [
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
    y4 = { vertical: "top", horizontal: "right" },
    b4 = { vertical: "top", horizontal: "left" },
    v4 = (e) => {
      const { classes: t } = e;
      return de({ root: ["root"], paper: ["paper"], list: ["list"] }, h4, t);
    },
    w4 = J(p4, {
      shouldForwardProp: (e) => bn(e) || e === "classes",
      name: "MuiMenu",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    S4 = J(Ki, {
      name: "MuiMenu",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    x4 = J(i4, {
      name: "MuiMenu",
      slot: "List",
      overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    k4 = E.forwardRef(function (e, t) {
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
          TransitionProps: { onEntering: h } = {},
          variant: v = "selectedMenu",
        } = n,
        g = Q(n.TransitionProps, m4),
        x = Q(n, g4),
        N = Vi(),
        w = N.direction === "rtl",
        b = k({}, n, {
          autoFocus: r,
          disableAutoFocusItem: i,
          MenuListProps: a,
          onEntering: h,
          PaperProps: c,
          transitionDuration: p,
          TransitionProps: g,
          variant: v,
        }),
        y = v4(b),
        S = r && !i && l,
        C = E.useRef(null),
        T = (B, M) => {
          C.current && C.current.adjustStyleForScrollbar(B, N), h && h(B, M);
        },
        _ = (B) => {
          B.key === "Tab" && (B.preventDefault(), s && s(B, "tabKeyDown"));
        };
      let I = -1;
      return (
        E.Children.map(o, (B, M) => {
          E.isValidElement(B) &&
            (B.props.disabled ||
              (((v === "selectedMenu" && B.props.selected) || I === -1) &&
                (I = M)));
        }),
        R(
          w4,
          k(
            {
              onClose: s,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: w ? "right" : "left",
              },
              transformOrigin: w ? y4 : b4,
              PaperProps: k({ component: S4 }, c, {
                classes: k({}, c.classes, { root: y.paper }),
              }),
              className: y.root,
              open: l,
              ref: t,
              transitionDuration: p,
              TransitionProps: k({ onEntering: T }, g),
              ownerState: b,
            },
            x,
            {
              classes: f,
              children: R(
                x4,
                k(
                  {
                    onKeyDown: _,
                    actions: C,
                    autoFocus: r && (I === -1 || i),
                    autoFocusItem: S,
                    variant: v,
                  },
                  a,
                  { className: ee(y.list, a.className), children: o },
                ),
              ),
            },
          ),
        )
      );
    }),
    E4 = k4;
  function C4(e) {
    return ae("MuiNativeSelect", e);
  }
  const O4 = se("MuiNativeSelect", [
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
    cf = O4,
    T4 = ["className", "disabled", "IconComponent", "inputRef", "variant"],
    _4 = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${G(n)}`, i && "iconOpen", r && "disabled"],
        };
      return de(a, C4, t);
    },
    sy = ({ ownerState: e, theme: t }) =>
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
          [`&.${cf.disabled}`]: { cursor: "default" },
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
    R4 = J("select", {
      name: "MuiNativeSelect",
      slot: "Select",
      shouldForwardProp: bn,
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.select, t[n.variant], { [`&.${cf.multiple}`]: t.multiple }];
      },
    })(sy),
    ly = ({ ownerState: e, theme: t }) =>
      k(
        {
          position: "absolute",
          right: 0,
          top: "calc(50% - .5em)",
          pointerEvents: "none",
          color: (t.vars || t).palette.action.active,
          [`&.${cf.disabled}`]: {
            color: (t.vars || t).palette.action.disabled,
          },
        },
        e.open && { transform: "rotate(180deg)" },
        e.variant === "filled" && { right: 7 },
        e.variant === "outlined" && { right: 7 },
      ),
    N4 = J("svg", {
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
    })(ly),
    I4 = E.forwardRef(function (e, t) {
      const {
          className: n,
          disabled: r,
          IconComponent: o,
          inputRef: i,
          variant: a = "standard",
        } = e,
        s = Q(e, T4),
        l = k({}, e, { disabled: r, variant: a }),
        c = _4(l);
      return ce(E.Fragment, {
        children: [
          R(
            R4,
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
            : R(N4, { as: o, ownerState: l, className: c.icon }),
        ],
      });
    }),
    P4 = I4;
  var uy;
  const A4 = ["children", "classes", "className", "label", "notched"],
    $4 = J("fieldset")({
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
    M4 = J("legend")(({ ownerState: e, theme: t }) =>
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
  function L4(e) {
    const { className: t, label: n, notched: r } = e,
      o = Q(e, A4),
      i = n != null && n !== "",
      a = k({}, e, { notched: r, withLabel: i });
    return R(
      $4,
      k({ "aria-hidden": !0, className: t, ownerState: a }, o, {
        children: R(M4, {
          ownerState: a,
          children: i
            ? R("span", { children: n })
            : uy ||
              (uy = R("span", {
                className: "notranslate",
                children: "\u200B",
              })),
        }),
      }),
    );
  }
  const B4 = [
      "components",
      "fullWidth",
      "inputComponent",
      "label",
      "multiline",
      "notched",
      "slots",
      "type",
    ],
    z4 = (e) => {
      const { classes: t } = e,
        n = de(
          {
            root: ["root"],
            notchedOutline: ["notchedOutline"],
            input: ["input"],
          },
          i5,
          t,
        );
      return k({}, t, n);
    },
    D4 = J(El, {
      shouldForwardProp: (e) => bn(e) || e === "classes",
      name: "MuiOutlinedInput",
      slot: "Root",
      overridesResolver: xl,
    })(({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return k(
        {
          position: "relative",
          borderRadius: (e.vars || e).shape.borderRadius,
          [`&:hover .${ir.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.text.primary,
          },
          "@media (hover: none)": {
            [`&:hover .${ir.notchedOutline}`]: {
              borderColor: e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : n,
            },
          },
          [`&.${ir.focused} .${ir.notchedOutline}`]: {
            borderColor: (e.vars || e).palette[t.color].main,
            borderWidth: 2,
          },
          [`&.${ir.error} .${ir.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.error.main,
          },
          [`&.${ir.disabled} .${ir.notchedOutline}`]: {
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
    F4 = J(L4, {
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
    j4 = J(Cl, {
      name: "MuiOutlinedInput",
      slot: "Input",
      overridesResolver: kl,
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
    cy = E.forwardRef(function (e, t) {
      var n, r, o, i, a;
      const s = fe({ props: e, name: "MuiOutlinedInput" }),
        {
          components: l = {},
          fullWidth: c = !1,
          inputComponent: f = "input",
          label: p,
          multiline: h = !1,
          notched: v,
          slots: g = {},
          type: x = "text",
        } = s,
        N = Q(s, B4),
        w = z4(s),
        b = or(),
        y = _o({ props: s, muiFormControl: b, states: ["required"] }),
        S = k({}, s, {
          color: y.color || "primary",
          disabled: y.disabled,
          error: y.error,
          focused: y.focused,
          formControl: b,
          fullWidth: c,
          hiddenLabel: y.hiddenLabel,
          multiline: h,
          size: y.size,
          type: x,
        }),
        C = (n = (r = g.root) != null ? r : l.Root) != null ? n : D4,
        T = (o = (i = g.input) != null ? i : l.Input) != null ? o : j4;
      return R(
        Zd,
        k(
          {
            slots: { root: C, input: T },
            renderSuffix: (_) =>
              R(F4, {
                ownerState: S,
                className: w.notchedOutline,
                label:
                  p != null && p !== "" && y.required
                    ? a || (a = ce(E.Fragment, { children: [p, "\xA0", "*"] }))
                    : p,
                notched:
                  typeof v < "u"
                    ? v
                    : !!(_.startAdornment || _.filled || _.focused),
              }),
            fullWidth: c,
            inputComponent: f,
            multiline: h,
            ref: t,
            type: x,
          },
          N,
          { classes: k({}, w, { notchedOutline: null }) },
        ),
      );
    });
  cy.muiName = "Input";
  const dy = cy;
  function U4(e) {
    return ae("MuiSelect", e);
  }
  const W4 = se("MuiSelect", [
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
    Rl = W4;
  var fy;
  const V4 = [
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
    H4 = J("div", {
      name: "MuiSelect",
      slot: "Select",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`&.${Rl.select}`]: t.select },
          { [`&.${Rl.select}`]: t[n.variant] },
          { [`&.${Rl.multiple}`]: t.multiple },
        ];
      },
    })(sy, {
      [`&.${Rl.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }),
    q4 = J("svg", {
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
    })(ly),
    K4 = J("input", {
      shouldForwardProp: (e) => Xx(e) && e !== "classes",
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
  function py(e, t) {
    return typeof t == "object" && t !== null
      ? e === t
      : String(e) === String(t);
  }
  function J4(e) {
    return e == null || (typeof e == "string" && !e.trim());
  }
  const G4 = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${G(n)}`, i && "iconOpen", r && "disabled"],
          nativeInput: ["nativeInput"],
        };
      return de(a, U4, t);
    },
    Y4 = E.forwardRef(function (e, t) {
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
          IconComponent: h,
          inputRef: v,
          labelId: g,
          MenuProps: x = {},
          multiple: N,
          name: w,
          onBlur: b,
          onChange: y,
          onClose: S,
          onFocus: C,
          onOpen: T,
          open: _,
          readOnly: I,
          renderValue: B,
          SelectDisplayProps: M = {},
          tabIndex: U,
          value: F,
          variant: V = "standard",
        } = e,
        W = Q(e, V4),
        [H, te] = $s({ controlled: F, default: c, name: "Select" }),
        [q, L] = $s({ controlled: _, default: l, name: "Select" }),
        A = E.useRef(null),
        $ = E.useRef(null),
        [Y, oe] = E.useState(null),
        { current: ne } = E.useRef(_ != null),
        [he, ve] = E.useState(),
        Le = ot(t, v),
        Fe = E.useCallback((D) => {
          ($.current = D), D && oe(D);
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
          if (!g) return;
          const D = kt($.current).getElementById(g);
          if (D) {
            const Re = () => {
              getSelection().isCollapsed && $.current.focus();
            };
            return (
              D.addEventListener("click", Re),
              () => {
                D.removeEventListener("click", Re);
              }
            );
          }
        }, [g]);
      const st = (D, Re) => {
          D ? T && T(Re) : S && S(Re),
            ne || (ve(i ? null : Pe.clientWidth), L(D));
        },
        re = (D) => {
          D.button === 0 && (D.preventDefault(), $.current.focus(), st(!0, D));
        },
        je = (D) => {
          st(!1, D);
        },
        Ae = E.Children.toArray(a),
        Tt = (D) => {
          const Re = Ae.map((_t) => _t.props.value).indexOf(D.target.value);
          if (Re === -1) return;
          const et = Ae[Re];
          te(et.props.value), y && y(D, et);
        },
        zt = (D) => (Re) => {
          let et;
          if (Re.currentTarget.hasAttribute("tabindex")) {
            if (N) {
              et = Array.isArray(H) ? H.slice() : [];
              const _t = H.indexOf(D.props.value);
              _t === -1 ? et.push(D.props.value) : et.splice(_t, 1);
            } else et = D.props.value;
            if (
              (D.props.onClick && D.props.onClick(Re), H !== et && (te(et), y))
            ) {
              const _t = Re.nativeEvent || Re,
                ia = new _t.constructor(_t.type, _t);
              Object.defineProperty(ia, "target", {
                writable: !0,
                value: { value: et, name: w },
              }),
                y(ia, D);
            }
            N || st(!1, Re);
          }
        },
        u = (D) => {
          I ||
            ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(D.key) !== -1 &&
              (D.preventDefault(), st(!0, D)));
        },
        d = Y !== null && q,
        m = (D) => {
          !d &&
            b &&
            (Object.defineProperty(D, "target", {
              writable: !0,
              value: { value: H, name: w },
            }),
            b(D));
        };
      delete W["aria-invalid"];
      let O, P;
      const z = [];
      let X = !1;
      (Qd({ value: H }) || p) && (B ? (O = B(H)) : (X = !0));
      const pe = Ae.map((D, Re, et) => {
        var _t, ia, Fb, jb;
        if (!E.isValidElement(D)) return null;
        let sr;
        if (N) {
          if (!Array.isArray(H)) throw new Error(tr(2));
          (sr = H.some((Dr) => py(Dr, D.props.value))),
            sr && X && z.push(D.props.children);
        } else (sr = py(H, D.props.value)), sr && X && (P = D.props.children);
        if (D.props.value === void 0)
          return E.cloneElement(D, { "aria-readonly": !0, role: "option" });
        const NR = () => {
          if (H) return sr;
          const Dr = et.find((Hf) => {
            var Ub;
            return (
              (Hf == null || (Ub = Hf.props) == null ? void 0 : Ub.value) !==
                void 0 && Hf.props.disabled !== !0
            );
          });
          return D === Dr ? !0 : sr;
        };
        return E.cloneElement(D, {
          "aria-selected": sr ? "true" : "false",
          onClick: zt(D),
          onKeyUp: (Dr) => {
            Dr.key === " " && Dr.preventDefault(),
              D.props.onKeyUp && D.props.onKeyUp(Dr);
          },
          role: "option",
          selected:
            ((_t = et[0]) == null || (ia = _t.props) == null
              ? void 0
              : ia.value) === void 0 ||
            ((Fb = et[0]) == null || (jb = Fb.props) == null
              ? void 0
              : jb.disabled) === !0
              ? NR()
              : sr,
          value: void 0,
          "data-value": D.props.value,
        });
      });
      X &&
        (N
          ? z.length === 0
            ? (O = null)
            : (O = z.reduce(
                (D, Re, et) => (
                  D.push(Re), et < z.length - 1 && D.push(", "), D
                ),
                [],
              ))
          : (O = P));
      let Oe = he;
      !i && ne && Y && (Oe = Pe.clientWidth);
      let le;
      typeof U < "u" ? (le = U) : (le = f ? null : 0);
      const Ce = M.id || (w ? `mui-component-select-${w}` : void 0),
        _e = k({}, e, { variant: V, value: H, open: d }),
        ge = G4(_e);
      return ce(E.Fragment, {
        children: [
          R(
            H4,
            k(
              {
                ref: Fe,
                tabIndex: le,
                role: "button",
                "aria-disabled": f ? "true" : void 0,
                "aria-expanded": d ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": r,
                "aria-labelledby": [g, Ce].filter(Boolean).join(" ") || void 0,
                "aria-describedby": n,
                onKeyDown: u,
                onMouseDown: f || I ? null : re,
                onBlur: m,
                onFocus: C,
              },
              M,
              {
                ownerState: _e,
                className: ee(M.className, ge.select, s),
                id: Ce,
                children: J4(O)
                  ? fy ||
                    (fy = R("span", {
                      className: "notranslate",
                      children: "\u200B",
                    }))
                  : O,
              },
            ),
          ),
          R(
            K4,
            k(
              {
                value: Array.isArray(H) ? H.join(",") : H,
                name: w,
                ref: A,
                "aria-hidden": !0,
                onChange: Tt,
                tabIndex: -1,
                disabled: f,
                className: ge.nativeInput,
                autoFocus: o,
                ownerState: _e,
              },
              W,
            ),
          ),
          R(q4, { as: h, className: ge.icon, ownerState: _e }),
          R(
            E4,
            k(
              {
                id: `menu-${w || ""}`,
                anchorEl: Pe,
                open: d,
                onClose: je,
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformOrigin: { vertical: "top", horizontal: "center" },
              },
              x,
              {
                MenuListProps: k(
                  {
                    "aria-labelledby": g,
                    role: "listbox",
                    disableListWrap: !0,
                  },
                  x.MenuListProps,
                ),
                PaperProps: k({}, x.PaperProps, {
                  style: k(
                    { minWidth: Oe },
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
    X4 = Y4;
  var hy, my;
  const Q4 = [
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
    Z4 = (e) => {
      const { classes: t } = e;
      return t;
    },
    df = {
      name: "MuiSelect",
      overridesResolver: (e, t) => t.root,
      shouldForwardProp: (e) => bn(e) && e !== "variant",
      slot: "Root",
    },
    eO = J(U0, df)(""),
    tO = J(dy, df)(""),
    nO = J(B0, df)(""),
    gy = E.forwardRef(function (e, t) {
      const n = fe({ name: "MuiSelect", props: e }),
        {
          autoWidth: r = !1,
          children: o,
          classes: i = {},
          className: a,
          defaultOpen: s = !1,
          displayEmpty: l = !1,
          IconComponent: c = u5,
          id: f,
          input: p,
          inputProps: h,
          label: v,
          labelId: g,
          MenuProps: x,
          multiple: N = !1,
          native: w = !1,
          onClose: b,
          onOpen: y,
          open: S,
          renderValue: C,
          SelectDisplayProps: T,
          variant: _ = "outlined",
        } = n,
        I = Q(n, Q4),
        B = w ? P4 : X4,
        M = or(),
        U =
          _o({ props: n, muiFormControl: M, states: ["variant"] }).variant || _,
        F =
          p ||
          {
            standard: hy || (hy = R(eO, {})),
            outlined: R(tO, { label: v }),
            filled: my || (my = R(nO, {})),
          }[U],
        V = k({}, n, { variant: U, classes: i }),
        W = Z4(V),
        H = ot(t, F.ref);
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
                  multiple: N,
                },
                w
                  ? { id: f }
                  : {
                      autoWidth: r,
                      defaultOpen: s,
                      displayEmpty: l,
                      labelId: g,
                      MenuProps: x,
                      onClose: b,
                      onOpen: y,
                      open: S,
                      renderValue: C,
                      SelectDisplayProps: k({ id: f }, T),
                    },
                h,
                { classes: h ? Ht(W, h.classes) : W },
                p ? p.props.inputProps : {},
              ),
            },
            N && w && U === "outlined" ? { notched: !0 } : {},
            { ref: H, className: ee(F.props.className, a) },
            !p && { variant: U },
            I,
          ),
        ),
      });
    });
  gy.muiName = "Select";
  const rO = gy;
  function oO(e) {
    return ae("MuiToolbar", e);
  }
  se("MuiToolbar", ["root", "gutters", "regular", "dense"]);
  const iO = ["className", "component", "disableGutters", "variant"],
    aO = (e) => {
      const { classes: t, disableGutters: n, variant: r } = e;
      return de({ root: ["root", !n && "gutters", r] }, oO, t);
    },
    sO = J("div", {
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
    lO = E.forwardRef(function (e, t) {
      const n = fe({ props: e, name: "MuiToolbar" }),
        {
          className: r,
          component: o = "div",
          disableGutters: i = !1,
          variant: a = "regular",
        } = n,
        s = Q(n, iO),
        l = k({}, n, { component: o, disableGutters: i, variant: a }),
        c = aO(l);
      return R(
        sO,
        k({ as: o, className: ee(c.root, r), ref: t, ownerState: l }, s),
      );
    }),
    uO = lO;
  function cO(e) {
    return ae("MuiTextField", e);
  }
  se("MuiTextField", ["root"]);
  const dO = [
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
    fO = { standard: U0, filled: B0, outlined: dy },
    pO = (e) => {
      const { classes: t } = e;
      return de({ root: ["root"] }, cO, t);
    },
    hO = J(bC, {
      name: "MuiTextField",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    mO = E.forwardRef(function (e, t) {
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
          fullWidth: h = !1,
          helperText: v,
          id: g,
          InputLabelProps: x,
          inputProps: N,
          InputProps: w,
          inputRef: b,
          label: y,
          maxRows: S,
          minRows: C,
          multiline: T = !1,
          name: _,
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
        A = Q(n, dO),
        $ = k({}, n, {
          autoFocus: o,
          color: s,
          disabled: c,
          error: f,
          fullWidth: h,
          multiline: T,
          required: F,
          select: W,
          variant: L,
        }),
        Y = pO($),
        oe = {};
      L === "outlined" &&
        (x && typeof x.shrink < "u" && (oe.notched = x.shrink), (oe.label = y)),
        W &&
          ((!H || !H.native) && (oe.id = void 0),
          (oe["aria-describedby"] = void 0));
      const ne = bg(g),
        he = v && ne ? `${ne}-helper-text` : void 0,
        ve = y && ne ? `${ne}-label` : void 0,
        Le = fO[L],
        Fe = R(
          Le,
          k(
            {
              "aria-describedby": he,
              autoComplete: r,
              autoFocus: o,
              defaultValue: l,
              fullWidth: h,
              multiline: T,
              name: _,
              rows: V,
              maxRows: S,
              minRows: C,
              type: te,
              value: q,
              id: ne,
              inputRef: b,
              onBlur: I,
              onChange: B,
              onFocus: M,
              placeholder: U,
              inputProps: N,
            },
            oe,
            w,
          ),
        );
      return ce(
        hO,
        k(
          {
            className: ee(Y.root, a),
            disabled: c,
            error: f,
            fullWidth: h,
            ref: t,
            required: F,
            color: s,
            variant: L,
            ownerState: $,
          },
          A,
          {
            children: [
              y != null &&
                y !== "" &&
                R(e3, k({ htmlFor: ne, id: ve }, x, { children: y })),
              W
                ? R(
                    rO,
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
              v && R(CC, k({ id: he }, p, { children: v })),
            ],
          },
        ),
      );
    }),
    Nl = mO;
  function gO(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
  }
  for (
    var yO = xO,
      bO = EO,
      vO = TO,
      wn = [],
      Gt = [],
      wO = typeof Uint8Array < "u" ? Uint8Array : Array,
      ff = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Po = 0,
      SO = ff.length;
    Po < SO;
    ++Po
  )
    (wn[Po] = ff[Po]), (Gt[ff.charCodeAt(Po)] = Po);
  (Gt["-".charCodeAt(0)] = 62), (Gt["_".charCodeAt(0)] = 63);
  function yy(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    n === -1 && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
  }
  function xO(e) {
    var t = yy(e),
      n = t[0],
      r = t[1];
    return ((n + r) * 3) / 4 - r;
  }
  function kO(e, t, n) {
    return ((t + n) * 3) / 4 - n;
  }
  function EO(e) {
    var t,
      n = yy(e),
      r = n[0],
      o = n[1],
      i = new wO(kO(e, r, o)),
      a = 0,
      s = o > 0 ? r - 4 : r,
      l;
    for (l = 0; l < s; l += 4)
      (t =
        (Gt[e.charCodeAt(l)] << 18) |
        (Gt[e.charCodeAt(l + 1)] << 12) |
        (Gt[e.charCodeAt(l + 2)] << 6) |
        Gt[e.charCodeAt(l + 3)]),
        (i[a++] = (t >> 16) & 255),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255);
    return (
      o === 2 &&
        ((t = (Gt[e.charCodeAt(l)] << 2) | (Gt[e.charCodeAt(l + 1)] >> 4)),
        (i[a++] = t & 255)),
      o === 1 &&
        ((t =
          (Gt[e.charCodeAt(l)] << 10) |
          (Gt[e.charCodeAt(l + 1)] << 4) |
          (Gt[e.charCodeAt(l + 2)] >> 2)),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255)),
      i
    );
  }
  function CO(e) {
    return (
      wn[(e >> 18) & 63] + wn[(e >> 12) & 63] + wn[(e >> 6) & 63] + wn[e & 63]
    );
  }
  function OO(e, t, n) {
    for (var r, o = [], i = t; i < n; i += 3)
      (r =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        o.push(CO(r));
    return o.join("");
  }
  function TO(e) {
    for (
      var t, n = e.length, r = n % 3, o = [], i = 16383, a = 0, s = n - r;
      a < s;
      a += i
    )
      o.push(OO(e, a, a + i > s ? s : a + i));
    return (
      r === 1
        ? ((t = e[n - 1]), o.push(wn[t >> 2] + wn[(t << 4) & 63] + "=="))
        : r === 2 &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          o.push(wn[t >> 10] + wn[(t >> 4) & 63] + wn[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
  var pf = { byteLength: yO, toByteArray: bO, fromByteArray: vO },
    _O = function (e, t, n, r, o) {
      var i,
        a,
        s = o * 8 - r - 1,
        l = (1 << s) - 1,
        c = l >> 1,
        f = -7,
        p = n ? o - 1 : 0,
        h = n ? -1 : 1,
        v = e[t + p];
      for (
        p += h, i = v & ((1 << -f) - 1), v >>= -f, f += s;
        f > 0;
        i = i * 256 + e[t + p], p += h, f -= 8
      );
      for (
        a = i & ((1 << -f) - 1), i >>= -f, f += r;
        f > 0;
        a = a * 256 + e[t + p], p += h, f -= 8
      );
      if (i === 0) i = 1 - c;
      else {
        if (i === l) return a ? NaN : (v ? -1 : 1) * (1 / 0);
        (a = a + Math.pow(2, r)), (i = i - c);
      }
      return (v ? -1 : 1) * a * Math.pow(2, i - r);
    },
    RO = function (e, t, n, r, o, i) {
      var a,
        s,
        l,
        c = i * 8 - o - 1,
        f = (1 << c) - 1,
        p = f >> 1,
        h = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        v = r ? 0 : i - 1,
        g = r ? 1 : -1,
        x = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
      for (
        t = Math.abs(t),
          isNaN(t) || t === 1 / 0
            ? ((s = isNaN(t) ? 1 : 0), (a = f))
            : ((a = Math.floor(Math.log(t) / Math.LN2)),
              t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
              a + p >= 1 ? (t += h / l) : (t += h * Math.pow(2, 1 - p)),
              t * l >= 2 && (a++, (l /= 2)),
              a + p >= f
                ? ((s = 0), (a = f))
                : a + p >= 1
                ? ((s = (t * l - 1) * Math.pow(2, o)), (a = a + p))
                : ((s = t * Math.pow(2, p - 1) * Math.pow(2, o)), (a = 0)));
        o >= 8;
        e[n + v] = s & 255, v += g, s /= 256, o -= 8
      );
      for (
        a = (a << o) | s, c += o;
        c > 0;
        e[n + v] = a & 255, v += g, a /= 256, c -= 8
      );
      e[n + v - g] |= x * 128;
    },
    Ao = { read: _O, write: RO },
    Il = gO(function (e, t) {
      var n =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
      (t.Buffer = a), (t.SlowBuffer = w), (t.INSPECT_MAX_BYTES = 50);
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
      function a(u, d, m) {
        if (typeof u == "number") {
          if (typeof d == "string")
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return f(u);
        }
        return s(u, d, m);
      }
      a.poolSize = 8192;
      function s(u, d, m) {
        if (typeof u == "string") return p(u, d);
        if (ArrayBuffer.isView(u)) return v(u);
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
          return g(u, d, m);
        if (typeof u == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        var O = u.valueOf && u.valueOf();
        if (O != null && O !== u) return a.from(O, d, m);
        var P = x(u);
        if (P) return P;
        if (
          typeof Symbol < "u" &&
          Symbol.toPrimitive != null &&
          typeof u[Symbol.toPrimitive] == "function"
        )
          return a.from(u[Symbol.toPrimitive]("string"), d, m);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            babelHelpers.typeof(u),
        );
      }
      (a.from = function (u, d, m) {
        return s(u, d, m);
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
      function c(u, d, m) {
        return (
          l(u),
          u <= 0
            ? i(u)
            : d !== void 0
            ? typeof m == "string"
              ? i(u).fill(d, m)
              : i(u).fill(d)
            : i(u)
        );
      }
      a.alloc = function (u, d, m) {
        return c(u, d, m);
      };
      function f(u) {
        return l(u), i(u < 0 ? 0 : N(u) | 0);
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
        var m = b(u, d) | 0,
          O = i(m),
          P = O.write(u, d);
        return P !== m && (O = O.slice(0, P)), O;
      }
      function h(u) {
        for (
          var d = u.length < 0 ? 0 : N(u.length) | 0, m = i(d), O = 0;
          O < d;
          O += 1
        )
          m[O] = u[O] & 255;
        return m;
      }
      function v(u) {
        if (Ae(u, Uint8Array)) {
          var d = new Uint8Array(u);
          return g(d.buffer, d.byteOffset, d.byteLength);
        }
        return h(u);
      }
      function g(u, d, m) {
        if (d < 0 || u.byteLength < d)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (u.byteLength < d + (m || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var O;
        return (
          d === void 0 && m === void 0
            ? (O = new Uint8Array(u))
            : m === void 0
            ? (O = new Uint8Array(u, d))
            : (O = new Uint8Array(u, d, m)),
          Object.setPrototypeOf(O, a.prototype),
          O
        );
      }
      function x(u) {
        if (a.isBuffer(u)) {
          var d = N(u.length) | 0,
            m = i(d);
          return m.length === 0 || u.copy(m, 0, 0, d), m;
        }
        if (u.length !== void 0)
          return typeof u.length != "number" || Tt(u.length) ? i(0) : h(u);
        if (u.type === "Buffer" && Array.isArray(u.data)) return h(u.data);
      }
      function N(u) {
        if (u >= r)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r.toString(16) +
              " bytes",
          );
        return u | 0;
      }
      function w(u) {
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
            var m = u.length, O = d.length, P = 0, z = Math.min(m, O);
            P < z;
            ++P
          )
            if (u[P] !== d[P]) {
              (m = u[P]), (O = d[P]);
              break;
            }
          return m < O ? -1 : O < m ? 1 : 0;
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
          var m;
          if (d === void 0)
            for (d = 0, m = 0; m < u.length; ++m) d += u[m].length;
          var O = a.allocUnsafe(d),
            P = 0;
          for (m = 0; m < u.length; ++m) {
            var z = u[m];
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
      function b(u, d) {
        if (a.isBuffer(u)) return u.length;
        if (ArrayBuffer.isView(u) || Ae(u, ArrayBuffer)) return u.byteLength;
        if (typeof u != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              babelHelpers.typeof(u),
          );
        var m = u.length,
          O = arguments.length > 2 && arguments[2] === !0;
        if (!O && m === 0) return 0;
        for (var P = !1; ; )
          switch (d) {
            case "ascii":
            case "latin1":
            case "binary":
              return m;
            case "utf8":
            case "utf-8":
              return Fe(u).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return m * 2;
            case "hex":
              return m >>> 1;
            case "base64":
              return re(u).length;
            default:
              if (P) return O ? -1 : Fe(u).length;
              (d = ("" + d).toLowerCase()), (P = !0);
          }
      }
      a.byteLength = b;
      function y(u, d, m) {
        var O = !1;
        if (
          ((d === void 0 || d < 0) && (d = 0),
          d > this.length ||
            ((m === void 0 || m > this.length) && (m = this.length), m <= 0) ||
            ((m >>>= 0), (d >>>= 0), m <= d))
        )
          return "";
        for (u || (u = "utf8"); ; )
          switch (u) {
            case "hex":
              return L(this, d, m);
            case "utf8":
            case "utf-8":
              return V(this, d, m);
            case "ascii":
              return te(this, d, m);
            case "latin1":
            case "binary":
              return q(this, d, m);
            case "base64":
              return F(this, d, m);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return A(this, d, m);
            default:
              if (O) throw new TypeError("Unknown encoding: " + u);
              (u = (u + "").toLowerCase()), (O = !0);
          }
      }
      a.prototype._isBuffer = !0;
      function S(u, d, m) {
        var O = u[d];
        (u[d] = u[m]), (u[m] = O);
      }
      (a.prototype.swap16 = function () {
        var u = this.length;
        if (u % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var d = 0; d < u; d += 2) S(this, d, d + 1);
        return this;
      }),
        (a.prototype.swap32 = function () {
          var u = this.length;
          if (u % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var d = 0; d < u; d += 4)
            S(this, d, d + 3), S(this, d + 1, d + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var u = this.length;
          if (u % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var d = 0; d < u; d += 8)
            S(this, d, d + 7),
              S(this, d + 1, d + 6),
              S(this, d + 2, d + 5),
              S(this, d + 3, d + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          var u = this.length;
          return u === 0
            ? ""
            : arguments.length === 0
            ? V(this, 0, u)
            : y.apply(this, arguments);
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
        (a.prototype.compare = function (u, d, m, O, P) {
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
            m === void 0 && (m = u ? u.length : 0),
            O === void 0 && (O = 0),
            P === void 0 && (P = this.length),
            d < 0 || m > u.length || O < 0 || P > this.length)
          )
            throw new RangeError("out of range index");
          if (O >= P && d >= m) return 0;
          if (O >= P) return -1;
          if (d >= m) return 1;
          if (((d >>>= 0), (m >>>= 0), (O >>>= 0), (P >>>= 0), this === u))
            return 0;
          for (
            var z = P - O,
              X = m - d,
              pe = Math.min(z, X),
              Oe = this.slice(O, P),
              le = u.slice(d, m),
              Ce = 0;
            Ce < pe;
            ++Ce
          )
            if (Oe[Ce] !== le[Ce]) {
              (z = Oe[Ce]), (X = le[Ce]);
              break;
            }
          return z < X ? -1 : X < z ? 1 : 0;
        });
      function C(u, d, m, O, P) {
        if (u.length === 0) return -1;
        if (
          (typeof m == "string"
            ? ((O = m), (m = 0))
            : m > 2147483647
            ? (m = 2147483647)
            : m < -2147483648 && (m = -2147483648),
          (m = +m),
          Tt(m) && (m = P ? 0 : u.length - 1),
          m < 0 && (m = u.length + m),
          m >= u.length)
        ) {
          if (P) return -1;
          m = u.length - 1;
        } else if (m < 0)
          if (P) m = 0;
          else return -1;
        if ((typeof d == "string" && (d = a.from(d, O)), a.isBuffer(d)))
          return d.length === 0 ? -1 : T(u, d, m, O, P);
        if (typeof d == "number")
          return (
            (d = d & 255),
            typeof Uint8Array.prototype.indexOf == "function"
              ? P
                ? Uint8Array.prototype.indexOf.call(u, d, m)
                : Uint8Array.prototype.lastIndexOf.call(u, d, m)
              : T(u, [d], m, O, P)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function T(u, d, m, O, P) {
        var z = 1,
          X = u.length,
          pe = d.length;
        if (
          O !== void 0 &&
          ((O = String(O).toLowerCase()),
          O === "ucs2" || O === "ucs-2" || O === "utf16le" || O === "utf-16le")
        ) {
          if (u.length < 2 || d.length < 2) return -1;
          (z = 2), (X /= 2), (pe /= 2), (m /= 2);
        }
        function Oe(D, Re) {
          return z === 1 ? D[Re] : D.readUInt16BE(Re * z);
        }
        var le;
        if (P) {
          var Ce = -1;
          for (le = m; le < X; le++)
            if (Oe(u, le) === Oe(d, Ce === -1 ? 0 : le - Ce)) {
              if ((Ce === -1 && (Ce = le), le - Ce + 1 === pe)) return Ce * z;
            } else Ce !== -1 && (le -= le - Ce), (Ce = -1);
        } else
          for (m + pe > X && (m = X - pe), le = m; le >= 0; le--) {
            for (var _e = !0, ge = 0; ge < pe; ge++)
              if (Oe(u, le + ge) !== Oe(d, ge)) {
                _e = !1;
                break;
              }
            if (_e) return le;
          }
        return -1;
      }
      (a.prototype.includes = function (u, d, m) {
        return this.indexOf(u, d, m) !== -1;
      }),
        (a.prototype.indexOf = function (u, d, m) {
          return C(this, u, d, m, !0);
        }),
        (a.prototype.lastIndexOf = function (u, d, m) {
          return C(this, u, d, m, !1);
        });
      function _(u, d, m, O) {
        m = Number(m) || 0;
        var P = u.length - m;
        O ? ((O = Number(O)), O > P && (O = P)) : (O = P);
        var z = d.length;
        O > z / 2 && (O = z / 2);
        for (var X = 0; X < O; ++X) {
          var pe = parseInt(d.substr(X * 2, 2), 16);
          if (Tt(pe)) return X;
          u[m + X] = pe;
        }
        return X;
      }
      function I(u, d, m, O) {
        return je(Fe(d, u.length - m), u, m, O);
      }
      function B(u, d, m, O) {
        return je(Pe(d), u, m, O);
      }
      function M(u, d, m, O) {
        return je(re(d), u, m, O);
      }
      function U(u, d, m, O) {
        return je(st(d, u.length - m), u, m, O);
      }
      (a.prototype.write = function (u, d, m, O) {
        if (d === void 0) (O = "utf8"), (m = this.length), (d = 0);
        else if (m === void 0 && typeof d == "string")
          (O = d), (m = this.length), (d = 0);
        else if (isFinite(d))
          (d = d >>> 0),
            isFinite(m)
              ? ((m = m >>> 0), O === void 0 && (O = "utf8"))
              : ((O = m), (m = void 0));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported",
          );
        var P = this.length - d;
        if (
          ((m === void 0 || m > P) && (m = P),
          (u.length > 0 && (m < 0 || d < 0)) || d > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        O || (O = "utf8");
        for (var z = !1; ; )
          switch (O) {
            case "hex":
              return _(this, u, d, m);
            case "utf8":
            case "utf-8":
              return I(this, u, d, m);
            case "ascii":
            case "latin1":
            case "binary":
              return B(this, u, d, m);
            case "base64":
              return M(this, u, d, m);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return U(this, u, d, m);
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
      function F(u, d, m) {
        return d === 0 && m === u.length
          ? pf.fromByteArray(u)
          : pf.fromByteArray(u.slice(d, m));
      }
      function V(u, d, m) {
        m = Math.min(u.length, m);
        for (var O = [], P = d; P < m; ) {
          var z = u[P],
            X = null,
            pe = z > 239 ? 4 : z > 223 ? 3 : z > 191 ? 2 : 1;
          if (P + pe <= m) {
            var Oe, le, Ce, _e;
            switch (pe) {
              case 1:
                z < 128 && (X = z);
                break;
              case 2:
                (Oe = u[P + 1]),
                  (Oe & 192) === 128 &&
                    ((_e = ((z & 31) << 6) | (Oe & 63)), _e > 127 && (X = _e));
                break;
              case 3:
                (Oe = u[P + 1]),
                  (le = u[P + 2]),
                  (Oe & 192) === 128 &&
                    (le & 192) === 128 &&
                    ((_e = ((z & 15) << 12) | ((Oe & 63) << 6) | (le & 63)),
                    _e > 2047 && (_e < 55296 || _e > 57343) && (X = _e));
                break;
              case 4:
                (Oe = u[P + 1]),
                  (le = u[P + 2]),
                  (Ce = u[P + 3]),
                  (Oe & 192) === 128 &&
                    (le & 192) === 128 &&
                    (Ce & 192) === 128 &&
                    ((_e =
                      ((z & 15) << 18) |
                      ((Oe & 63) << 12) |
                      ((le & 63) << 6) |
                      (Ce & 63)),
                    _e > 65535 && _e < 1114112 && (X = _e));
            }
          }
          X === null
            ? ((X = 65533), (pe = 1))
            : X > 65535 &&
              ((X -= 65536),
              O.push(((X >>> 10) & 1023) | 55296),
              (X = 56320 | (X & 1023))),
            O.push(X),
            (P += pe);
        }
        return H(O);
      }
      var W = 4096;
      function H(u) {
        var d = u.length;
        if (d <= W) return String.fromCharCode.apply(String, u);
        for (var m = "", O = 0; O < d; )
          m += String.fromCharCode.apply(String, u.slice(O, (O += W)));
        return m;
      }
      function te(u, d, m) {
        var O = "";
        m = Math.min(u.length, m);
        for (var P = d; P < m; ++P) O += String.fromCharCode(u[P] & 127);
        return O;
      }
      function q(u, d, m) {
        var O = "";
        m = Math.min(u.length, m);
        for (var P = d; P < m; ++P) O += String.fromCharCode(u[P]);
        return O;
      }
      function L(u, d, m) {
        var O = u.length;
        (!d || d < 0) && (d = 0), (!m || m < 0 || m > O) && (m = O);
        for (var P = "", z = d; z < m; ++z) P += zt[u[z]];
        return P;
      }
      function A(u, d, m) {
        for (var O = u.slice(d, m), P = "", z = 0; z < O.length - 1; z += 2)
          P += String.fromCharCode(O[z] + O[z + 1] * 256);
        return P;
      }
      a.prototype.slice = function (u, d) {
        var m = this.length;
        (u = ~~u),
          (d = d === void 0 ? m : ~~d),
          u < 0 ? ((u += m), u < 0 && (u = 0)) : u > m && (u = m),
          d < 0 ? ((d += m), d < 0 && (d = 0)) : d > m && (d = m),
          d < u && (d = u);
        var O = this.subarray(u, d);
        return Object.setPrototypeOf(O, a.prototype), O;
      };
      function $(u, d, m) {
        if (u % 1 !== 0 || u < 0) throw new RangeError("offset is not uint");
        if (u + d > m)
          throw new RangeError("Trying to access beyond buffer length");
      }
      (a.prototype.readUintLE = a.prototype.readUIntLE =
        function (u, d, m) {
          (u = u >>> 0), (d = d >>> 0), m || $(u, d, this.length);
          for (var O = this[u], P = 1, z = 0; ++z < d && (P *= 256); )
            O += this[u + z] * P;
          return O;
        }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (u, d, m) {
            (u = u >>> 0), (d = d >>> 0), m || $(u, d, this.length);
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
        (a.prototype.readIntLE = function (u, d, m) {
          (u = u >>> 0), (d = d >>> 0), m || $(u, d, this.length);
          for (var O = this[u], P = 1, z = 0; ++z < d && (P *= 256); )
            O += this[u + z] * P;
          return (P *= 128), O >= P && (O -= Math.pow(2, 8 * d)), O;
        }),
        (a.prototype.readIntBE = function (u, d, m) {
          (u = u >>> 0), (d = d >>> 0), m || $(u, d, this.length);
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
          var m = this[u] | (this[u + 1] << 8);
          return m & 32768 ? m | 4294901760 : m;
        }),
        (a.prototype.readInt16BE = function (u, d) {
          (u = u >>> 0), d || $(u, 2, this.length);
          var m = this[u + 1] | (this[u] << 8);
          return m & 32768 ? m | 4294901760 : m;
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
            Ao.read(this, u, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 4, this.length),
            Ao.read(this, u, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 8, this.length),
            Ao.read(this, u, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (u, d) {
          return (
            (u = u >>> 0),
            d || $(u, 8, this.length),
            Ao.read(this, u, !1, 52, 8)
          );
        });
      function Y(u, d, m, O, P, z) {
        if (!a.isBuffer(u))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (d > P || d < z)
          throw new RangeError('"value" argument is out of bounds');
        if (m + O > u.length) throw new RangeError("Index out of range");
      }
      (a.prototype.writeUintLE = a.prototype.writeUIntLE =
        function (u, d, m, O) {
          if (((u = +u), (d = d >>> 0), (m = m >>> 0), !O)) {
            var P = Math.pow(2, 8 * m) - 1;
            Y(this, u, d, m, P, 0);
          }
          var z = 1,
            X = 0;
          for (this[d] = u & 255; ++X < m && (z *= 256); )
            this[d + X] = (u / z) & 255;
          return d + m;
        }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (u, d, m, O) {
            if (((u = +u), (d = d >>> 0), (m = m >>> 0), !O)) {
              var P = Math.pow(2, 8 * m) - 1;
              Y(this, u, d, m, P, 0);
            }
            var z = m - 1,
              X = 1;
            for (this[d + z] = u & 255; --z >= 0 && (X *= 256); )
              this[d + z] = (u / X) & 255;
            return d + m;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (u, d, m) {
            return (
              (u = +u),
              (d = d >>> 0),
              m || Y(this, u, d, 1, 255, 0),
              (this[d] = u & 255),
              d + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (u, d, m) {
            return (
              (u = +u),
              (d = d >>> 0),
              m || Y(this, u, d, 2, 65535, 0),
              (this[d] = u & 255),
              (this[d + 1] = u >>> 8),
              d + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (u, d, m) {
            return (
              (u = +u),
              (d = d >>> 0),
              m || Y(this, u, d, 2, 65535, 0),
              (this[d] = u >>> 8),
              (this[d + 1] = u & 255),
              d + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (u, d, m) {
            return (
              (u = +u),
              (d = d >>> 0),
              m || Y(this, u, d, 4, 4294967295, 0),
              (this[d + 3] = u >>> 24),
              (this[d + 2] = u >>> 16),
              (this[d + 1] = u >>> 8),
              (this[d] = u & 255),
              d + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (u, d, m) {
            return (
              (u = +u),
              (d = d >>> 0),
              m || Y(this, u, d, 4, 4294967295, 0),
              (this[d] = u >>> 24),
              (this[d + 1] = u >>> 16),
              (this[d + 2] = u >>> 8),
              (this[d + 3] = u & 255),
              d + 4
            );
          }),
        (a.prototype.writeIntLE = function (u, d, m, O) {
          if (((u = +u), (d = d >>> 0), !O)) {
            var P = Math.pow(2, 8 * m - 1);
            Y(this, u, d, m, P - 1, -P);
          }
          var z = 0,
            X = 1,
            pe = 0;
          for (this[d] = u & 255; ++z < m && (X *= 256); )
            u < 0 && pe === 0 && this[d + z - 1] !== 0 && (pe = 1),
              (this[d + z] = (((u / X) >> 0) - pe) & 255);
          return d + m;
        }),
        (a.prototype.writeIntBE = function (u, d, m, O) {
          if (((u = +u), (d = d >>> 0), !O)) {
            var P = Math.pow(2, 8 * m - 1);
            Y(this, u, d, m, P - 1, -P);
          }
          var z = m - 1,
            X = 1,
            pe = 0;
          for (this[d + z] = u & 255; --z >= 0 && (X *= 256); )
            u < 0 && pe === 0 && this[d + z + 1] !== 0 && (pe = 1),
              (this[d + z] = (((u / X) >> 0) - pe) & 255);
          return d + m;
        }),
        (a.prototype.writeInt8 = function (u, d, m) {
          return (
            (u = +u),
            (d = d >>> 0),
            m || Y(this, u, d, 1, 127, -128),
            u < 0 && (u = 255 + u + 1),
            (this[d] = u & 255),
            d + 1
          );
        }),
        (a.prototype.writeInt16LE = function (u, d, m) {
          return (
            (u = +u),
            (d = d >>> 0),
            m || Y(this, u, d, 2, 32767, -32768),
            (this[d] = u & 255),
            (this[d + 1] = u >>> 8),
            d + 2
          );
        }),
        (a.prototype.writeInt16BE = function (u, d, m) {
          return (
            (u = +u),
            (d = d >>> 0),
            m || Y(this, u, d, 2, 32767, -32768),
            (this[d] = u >>> 8),
            (this[d + 1] = u & 255),
            d + 2
          );
        }),
        (a.prototype.writeInt32LE = function (u, d, m) {
          return (
            (u = +u),
            (d = d >>> 0),
            m || Y(this, u, d, 4, 2147483647, -2147483648),
            (this[d] = u & 255),
            (this[d + 1] = u >>> 8),
            (this[d + 2] = u >>> 16),
            (this[d + 3] = u >>> 24),
            d + 4
          );
        }),
        (a.prototype.writeInt32BE = function (u, d, m) {
          return (
            (u = +u),
            (d = d >>> 0),
            m || Y(this, u, d, 4, 2147483647, -2147483648),
            u < 0 && (u = 4294967295 + u + 1),
            (this[d] = u >>> 24),
            (this[d + 1] = u >>> 16),
            (this[d + 2] = u >>> 8),
            (this[d + 3] = u & 255),
            d + 4
          );
        });
      function oe(u, d, m, O, P, z) {
        if (m + O > u.length) throw new RangeError("Index out of range");
        if (m < 0) throw new RangeError("Index out of range");
      }
      function ne(u, d, m, O, P) {
        return (
          (d = +d),
          (m = m >>> 0),
          P || oe(u, d, m, 4),
          Ao.write(u, d, m, O, 23, 4),
          m + 4
        );
      }
      (a.prototype.writeFloatLE = function (u, d, m) {
        return ne(this, u, d, !0, m);
      }),
        (a.prototype.writeFloatBE = function (u, d, m) {
          return ne(this, u, d, !1, m);
        });
      function he(u, d, m, O, P) {
        return (
          (d = +d),
          (m = m >>> 0),
          P || oe(u, d, m, 8),
          Ao.write(u, d, m, O, 52, 8),
          m + 8
        );
      }
      (a.prototype.writeDoubleLE = function (u, d, m) {
        return he(this, u, d, !0, m);
      }),
        (a.prototype.writeDoubleBE = function (u, d, m) {
          return he(this, u, d, !1, m);
        }),
        (a.prototype.copy = function (u, d, m, O) {
          if (!a.isBuffer(u))
            throw new TypeError("argument should be a Buffer");
          if (
            (m || (m = 0),
            !O && O !== 0 && (O = this.length),
            d >= u.length && (d = u.length),
            d || (d = 0),
            O > 0 && O < m && (O = m),
            O === m || u.length === 0 || this.length === 0)
          )
            return 0;
          if (d < 0) throw new RangeError("targetStart out of bounds");
          if (m < 0 || m >= this.length)
            throw new RangeError("Index out of range");
          if (O < 0) throw new RangeError("sourceEnd out of bounds");
          O > this.length && (O = this.length),
            u.length - d < O - m && (O = u.length - d + m);
          var P = O - m;
          return (
            this === u && typeof Uint8Array.prototype.copyWithin == "function"
              ? this.copyWithin(d, m, O)
              : Uint8Array.prototype.set.call(u, this.subarray(m, O), d),
            P
          );
        }),
        (a.prototype.fill = function (u, d, m, O) {
          if (typeof u == "string") {
            if (
              (typeof d == "string"
                ? ((O = d), (d = 0), (m = this.length))
                : typeof m == "string" && ((O = m), (m = this.length)),
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
          if (d < 0 || this.length < d || this.length < m)
            throw new RangeError("Out of range index");
          if (m <= d) return this;
          (d = d >>> 0),
            (m = m === void 0 ? this.length : m >>> 0),
            u || (u = 0);
          var z;
          if (typeof u == "number") for (z = d; z < m; ++z) this[z] = u;
          else {
            var X = a.isBuffer(u) ? u : a.from(u, O),
              pe = X.length;
            if (pe === 0)
              throw new TypeError(
                'The value "' + u + '" is invalid for argument "value"',
              );
            for (z = 0; z < m - d; ++z) this[z + d] = X[z % pe];
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
        for (var m, O = u.length, P = null, z = [], X = 0; X < O; ++X) {
          if (((m = u.charCodeAt(X)), m > 55295 && m < 57344)) {
            if (!P) {
              if (m > 56319) {
                (d -= 3) > -1 && z.push(239, 191, 189);
                continue;
              } else if (X + 1 === O) {
                (d -= 3) > -1 && z.push(239, 191, 189);
                continue;
              }
              P = m;
              continue;
            }
            if (m < 56320) {
              (d -= 3) > -1 && z.push(239, 191, 189), (P = m);
              continue;
            }
            m = (((P - 55296) << 10) | (m - 56320)) + 65536;
          } else P && (d -= 3) > -1 && z.push(239, 191, 189);
          if (((P = null), m < 128)) {
            if ((d -= 1) < 0) break;
            z.push(m);
          } else if (m < 2048) {
            if ((d -= 2) < 0) break;
            z.push((m >> 6) | 192, (m & 63) | 128);
          } else if (m < 65536) {
            if ((d -= 3) < 0) break;
            z.push((m >> 12) | 224, ((m >> 6) & 63) | 128, (m & 63) | 128);
          } else if (m < 1114112) {
            if ((d -= 4) < 0) break;
            z.push(
              (m >> 18) | 240,
              ((m >> 12) & 63) | 128,
              ((m >> 6) & 63) | 128,
              (m & 63) | 128,
            );
          } else throw new Error("Invalid code point");
        }
        return z;
      }
      function Pe(u) {
        for (var d = [], m = 0; m < u.length; ++m)
          d.push(u.charCodeAt(m) & 255);
        return d;
      }
      function st(u, d) {
        for (var m, O, P, z = [], X = 0; X < u.length && !((d -= 2) < 0); ++X)
          (m = u.charCodeAt(X)),
            (O = m >> 8),
            (P = m % 256),
            z.push(P),
            z.push(O);
        return z;
      }
      function re(u) {
        return pf.toByteArray(Le(u));
      }
      function je(u, d, m, O) {
        for (var P = 0; P < O && !(P + m >= d.length || P >= u.length); ++P)
          d[P + m] = u[P];
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
      var zt = (function () {
        for (var u = "0123456789abcdef", d = new Array(256), m = 0; m < 16; ++m)
          for (var O = m * 16, P = 0; P < 16; ++P) d[O + P] = u[m] + u[P];
        return d;
      })();
    }),
    be = Il.Buffer;
  Il.SlowBuffer, Il.INSPECT_MAX_BYTES, Il.kMaxLength;
  var hf = function (e, t) {
    return (
      (hf =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
        }),
      hf(e, t)
    );
  };
  function Pl(e, t) {
    hf(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var $r = (function (e) {
      Pl(t, e);
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
      Pl(t, e);
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
  function Al(e) {
    return e && e.Math == Math && e;
  }
  function by() {
    return (
      Al(typeof globalThis == "object" && globalThis) ||
      Al(typeof window == "object" && window) ||
      Al(typeof self == "object" && self) ||
      Al(typeof global == "object" && global) ||
      Function("return this")()
    );
  }
  function NO() {
    var e = by();
    return (
      typeof e.navigator == "object" && e.navigator.product === "ReactNative"
    );
  }
  var IO = function (e) {
      var t = NO()
        ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values."
        : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
      console.warn(t);
      for (var n = be.alloc(e), r = 0; r < e; ++r)
        n[r] = Math.floor(Math.random() * 256);
      return n;
    },
    PO = function () {
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
          : IO;
      }
    },
    vy = PO();
  function AO(e) {
    return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(
      Object.prototype.toString.call(e),
    );
  }
  function mf(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  function $O(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  function MO(e) {
    return Xi(e) && Object.prototype.toString.call(e) === "[object Date]";
  }
  function Xi(e) {
    return typeof e == "object" && e !== null;
  }
  function $l(e, t) {
    var n = !1;
    function r() {
      for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
      return n || (console.warn(t), (n = !0)), e.apply(this, o);
    }
    return r;
  }
  function Ml(e) {
    if (ArrayBuffer.isView(e))
      return be.from(e.buffer, e.byteOffset, e.byteLength);
    if (AO(e)) return be.from(e);
    throw new He("Must use either Buffer or TypedArray");
  }
  var LO =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i,
    wy = function (e) {
      return typeof e == "string" && LO.test(e);
    },
    gf = function (e) {
      if (!wy(e))
        throw new He(
          'UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".',
        );
      var t = e.replace(/-/g, "");
      return be.from(t, "hex");
    },
    Sy = function (e, t) {
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
    BO = Math.pow(2, 53),
    zO = -Math.pow(2, 53),
    xy = 4,
    Mr = (function () {
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
                : (this.buffer = Ml(t)),
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
            ? (this.buffer.set(Ml(t), n),
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
            return new ky(this.buffer.slice(0, this.position));
          throw new $r(
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
              : "$uuid" in t && ((o = 4), (r = gf(t.$uuid))),
            !r)
          )
            throw new He(
              "Unexpected Binary Extended JSON format ".concat(
                JSON.stringify(t),
              ),
            );
          return o === xy ? new ky(r) : new e(r, o);
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
  Object.defineProperty(Mr.prototype, "_bsontype", { value: "Binary" });
  var yf = 16,
    ky = (function (e) {
      Pl(t, e);
      function t(n) {
        var r = this,
          o,
          i;
        if (n == null) o = t.generate();
        else if (n instanceof t) (o = be.from(n.buffer)), (i = n.__id);
        else if (ArrayBuffer.isView(n) && n.byteLength === yf) o = Ml(n);
        else if (typeof n == "string") o = gf(n);
        else
          throw new He(
            "Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).",
          );
        return (r = e.call(this, o, xy) || this), (r.__id = i), r;
      }
      return (
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this.buffer;
          },
          set: function (n) {
            (this.buffer = n), t.cacheHexString && (this.__id = Sy(n));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toHexString = function (n) {
          if ((n === void 0 && (n = !0), t.cacheHexString && this.__id))
            return this.__id;
          var r = Sy(this.id, n);
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
          return new Mr(this.id, Mr.SUBTYPE_UUID);
        }),
        (t.generate = function () {
          var n = vy(yf);
          return (
            (n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), be.from(n)
          );
        }),
        (t.isValid = function (n) {
          return n
            ? n instanceof t
              ? !0
              : typeof n == "string"
              ? wy(n)
              : mf(n)
              ? n.length !== yf
                ? !1
                : (n[6] & 240) === 64 && (n[8] & 128) === 128
              : !1
            : !1;
        }),
        (t.createFromHexString = function (n) {
          var r = gf(n);
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
    })(Mr),
    Ll = (function () {
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
  Object.defineProperty(Ll.prototype, "_bsontype", { value: "Code" });
  function DO(e) {
    return (
      Xi(e) &&
      e.$id != null &&
      typeof e.$ref == "string" &&
      (e.$db == null || typeof e.$db == "string")
    );
  }
  var Qi = (function () {
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
  Object.defineProperty(Qi.prototype, "_bsontype", { value: "DBRef" });
  var Yt = void 0;
  try {
    Yt = new WebAssembly.Instance(
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
  var Ey = 1 << 16,
    FO = 1 << 24,
    $o = Ey * Ey,
    Cy = $o * $o,
    Oy = Cy / 2,
    Ty = {},
    _y = {},
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
              (i = 0 <= t && t < 256) && ((o = _y[t]), o)
                ? o
                : ((r = e.fromBits(t, (t | 0) < 0 ? -1 : 0, !0)),
                  i && (_y[t] = r),
                  r))
            : ((t |= 0),
              (i = -128 <= t && t < 128) && ((o = Ty[t]), o)
                ? o
                : ((r = e.fromBits(t, t < 0 ? -1 : 0, !1)),
                  i && (Ty[t] = r),
                  r));
        }),
        (e.fromNumber = function (t, n) {
          if (isNaN(t)) return n ? e.UZERO : e.ZERO;
          if (n) {
            if (t < 0) return e.UZERO;
            if (t >= Cy) return e.MAX_UNSIGNED_VALUE;
          } else {
            if (t <= -Oy) return e.MIN_VALUE;
            if (t + 1 >= Oy) return e.MAX_VALUE;
          }
          return t < 0
            ? e.fromNumber(-t, n).neg()
            : e.fromBits(t % $o | 0, (t / $o) | 0, n);
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
          return Xi(t) && t.__isLong__ === !0;
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
            h = 0,
            v = 0;
          return (
            (v += i + c),
            (h += v >>> 16),
            (v &= 65535),
            (h += o + l),
            (p += h >>> 16),
            (h &= 65535),
            (p += r + s),
            (f += p >>> 16),
            (p &= 65535),
            (f += n + a),
            (f &= 65535),
            e.fromBits((h << 16) | v, (f << 16) | p, this.unsigned)
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
          if (Yt) {
            if (
              !this.unsigned &&
              this.high === -2147483648 &&
              t.low === -1 &&
              t.high === -1
            )
              return this;
            var n = (this.unsigned ? Yt.div_u : Yt.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, Yt.get_high(), this.unsigned);
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
          if ((e.isLong(t) || (t = e.fromValue(t)), Yt)) {
            var n = (this.unsigned ? Yt.rem_u : Yt.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, Yt.get_high(), this.unsigned);
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
          if ((e.isLong(t) || (t = e.fromValue(t)), Yt)) {
            var n = Yt.mul(this.low, this.high, t.low, t.high);
            return e.fromBits(n, Yt.get_high(), this.unsigned);
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
            h = 0,
            v = 0,
            g = 0;
          return (
            (g += a * f),
            (v += g >>> 16),
            (g &= 65535),
            (v += i * f),
            (h += v >>> 16),
            (v &= 65535),
            (v += a * c),
            (h += v >>> 16),
            (v &= 65535),
            (h += o * f),
            (p += h >>> 16),
            (h &= 65535),
            (h += i * c),
            (p += h >>> 16),
            (h &= 65535),
            (h += a * l),
            (p += h >>> 16),
            (h &= 65535),
            (p += r * f + o * c + i * l + a * s),
            (p &= 65535),
            e.fromBits((v << 16) | g, (p << 16) | h, this.unsigned)
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
            ? (this.high >>> 0) * $o + (this.low >>> 0)
            : this.high * $o + (this.low >>> 0);
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
        (e.TWO_PWR_24 = e.fromInt(FO)),
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
  var jO = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
    UO = /^(\+|-)?(Infinity|inf)$/i,
    WO = /^(\+|-)?NaN$/i,
    Zi = 6111,
    bf = -6176,
    Ry = 6176,
    VO = 34,
    vf = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    Ny = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    Iy = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    HO = /^([-+])?(\d+)?$/,
    qO = 31,
    Py = 16383,
    KO = 30,
    JO = 31;
  function Ay(e) {
    return !isNaN(parseInt(e, 10));
  }
  function GO(e) {
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
  function YO(e, t) {
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
  function XO(e, t) {
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
  function Mo(e, t) {
    throw new He(
      '"'.concat(e, '" is not a valid Decimal128 string - ').concat(t),
    );
  }
  var wf = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      if (typeof t == "string") this.bytes = e.fromString(t).bytes;
      else if (mf(t)) {
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
          h = 0,
          v = 0,
          g = 0,
          x = 0,
          N = 0,
          w = new Z(0, 0),
          b = new Z(0, 0),
          y = 0,
          S = 0;
        if (t.length >= 7e3)
          throw new He("" + t + " not a valid Decimal128 string");
        var C = t.match(jO),
          T = t.match(UO),
          _ = t.match(WO);
        if ((!C && !T && !_) || t.length === 0)
          throw new He("" + t + " not a valid Decimal128 string");
        if (C) {
          var I = C[2],
            B = C[4],
            M = C[5],
            U = C[6];
          B && U === void 0 && Mo(t, "missing exponent power"),
            B && I === void 0 && Mo(t, "missing exponent base"),
            B === void 0 && (M || U) && Mo(t, "missing e before exponent");
        }
        if (
          ((t[S] === "+" || t[S] === "-") && (n = t[S++] === "-"),
          !Ay(t[S]) && t[S] !== ".")
        ) {
          if (t[S] === "i" || t[S] === "I") return new e(be.from(n ? Ny : Iy));
          if (t[S] === "N") return new e(be.from(vf));
        }
        for (; Ay(t[S]) || t[S] === "."; ) {
          if (t[S] === ".") {
            r && Mo(t, "contains multiple periods"), (r = !0), (S = S + 1);
            continue;
          }
          p < 34 &&
            (t[S] !== "0" || o) &&
            (o || (c = a),
            (o = !0),
            (f[h++] = parseInt(t[S], 10)),
            (p = p + 1)),
            o && (s = s + 1),
            r && (l = l + 1),
            (a = a + 1),
            (S = S + 1);
        }
        if (r && !a) throw new He("" + t + " not a valid Decimal128 string");
        if (t[S] === "e" || t[S] === "E") {
          var F = t.substr(++S).match(HO);
          if (!F || !F[2]) return new e(be.from(vf));
          (x = parseInt(F[0], 10)), (S = S + F[0].length);
        }
        if (t[S]) return new e(be.from(vf));
        if (((v = 0), !p))
          (v = 0), (g = 0), (f[0] = 0), (s = 1), (p = 1), (i = 0);
        else if (((g = p - 1), (i = s), i !== 1))
          for (; f[c + i - 1] === 0; ) i = i - 1;
        for (x <= l && l - x > 1 << 14 ? (x = bf) : (x = x - l); x > Zi; ) {
          if (((g = g + 1), g - v > VO)) {
            var V = f.join("");
            if (V.match(/^0+$/)) {
              x = Zi;
              break;
            }
            Mo(t, "overflow");
          }
          x = x - 1;
        }
        for (; x < bf || p < s; ) {
          if (g === 0 && i < p) {
            (x = bf), (i = 0);
            break;
          }
          if ((p < s ? (s = s - 1) : (g = g - 1), x < Zi)) x = x + 1;
          else {
            var V = f.join("");
            if (V.match(/^0+$/)) {
              x = Zi;
              break;
            }
            Mo(t, "overflow");
          }
        }
        if (g - v + 1 < i) {
          var W = a;
          r && ((c = c + 1), (W = W + 1)), n && ((c = c + 1), (W = W + 1));
          var H = parseInt(t[c + g + 1], 10),
            te = 0;
          if (H >= 5 && ((te = 1), H === 5)) {
            for (te = f[g] % 2 === 1 ? 1 : 0, N = c + g + 2; N < W; N++)
              if (parseInt(t[N], 10)) {
                te = 1;
                break;
              }
          }
          if (te) {
            for (var q = g; q >= 0; q--)
              if (++f[q] > 9 && ((f[q] = 0), q === 0))
                if (x < Zi) (x = x + 1), (f[q] = 1);
                else return new e(be.from(n ? Ny : Iy));
          }
        }
        if (((w = Z.fromNumber(0)), (b = Z.fromNumber(0)), i === 0))
          (w = Z.fromNumber(0)), (b = Z.fromNumber(0));
        else if (g - v < 17) {
          var q = v;
          for (b = Z.fromNumber(f[q++]), w = new Z(0, 0); q <= g; q++)
            (b = b.multiply(Z.fromNumber(10))), (b = b.add(Z.fromNumber(f[q])));
        } else {
          var q = v;
          for (w = Z.fromNumber(f[q++]); q <= g - 17; q++)
            (w = w.multiply(Z.fromNumber(10))), (w = w.add(Z.fromNumber(f[q])));
          for (b = Z.fromNumber(f[q++]); q <= g; q++)
            (b = b.multiply(Z.fromNumber(10))), (b = b.add(Z.fromNumber(f[q])));
        }
        var L = YO(w, Z.fromString("100000000000000000"));
        (L.low = L.low.add(b)),
          XO(L.low, b) && (L.high = L.high.add(Z.fromNumber(1))),
          (y = x + Ry);
        var A = { low: Z.fromNumber(0), high: Z.fromNumber(0) };
        L.high
          .shiftRightUnsigned(49)
          .and(Z.fromNumber(1))
          .equals(Z.fromNumber(1))
          ? ((A.high = A.high.or(Z.fromNumber(3).shiftLeft(61))),
            (A.high = A.high.or(
              Z.fromNumber(y).and(Z.fromNumber(16383).shiftLeft(47)),
            )),
            (A.high = A.high.or(L.high.and(Z.fromNumber(0x7fffffffffff)))))
          : ((A.high = A.high.or(Z.fromNumber(y & 16383).shiftLeft(49))),
            (A.high = A.high.or(L.high.and(Z.fromNumber(562949953421311))))),
          (A.low = L.low),
          n && (A.high = A.high.or(Z.fromString("9223372036854775808")));
        var $ = be.alloc(16);
        return (
          (S = 0),
          ($[S++] = A.low.low & 255),
          ($[S++] = (A.low.low >> 8) & 255),
          ($[S++] = (A.low.low >> 16) & 255),
          ($[S++] = (A.low.low >> 24) & 255),
          ($[S++] = A.low.high & 255),
          ($[S++] = (A.low.high >> 8) & 255),
          ($[S++] = (A.low.high >> 16) & 255),
          ($[S++] = (A.low.high >> 24) & 255),
          ($[S++] = A.high.low & 255),
          ($[S++] = (A.high.low >> 8) & 255),
          ($[S++] = (A.high.low >> 16) & 255),
          ($[S++] = (A.high.low >> 24) & 255),
          ($[S++] = A.high.high & 255),
          ($[S++] = (A.high.high >> 8) & 255),
          ($[S++] = (A.high.high >> 16) & 255),
          ($[S++] = (A.high.high >> 24) & 255),
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
        var h = this.bytes,
          v = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          g = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          x = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          N = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24);
        i = 0;
        var w = { low: new Z(v, g), high: new Z(x, N) };
        w.high.lessThan(Z.ZERO) && p.push("-");
        var b = (N >> 26) & qO;
        if (b >> 3 === 3) {
          if (b === KO) return p.join("") + "Infinity";
          if (b === JO) return "NaN";
          (t = (N >> 15) & Py), (s = 8 + ((N >> 14) & 1));
        } else (s = (N >> 14) & 7), (t = (N >> 17) & Py);
        var y = t - Ry;
        if (
          ((l.parts[0] = (N & 16383) + ((s & 15) << 14)),
          (l.parts[1] = x),
          (l.parts[2] = g),
          (l.parts[3] = v),
          l.parts[0] === 0 &&
            l.parts[1] === 0 &&
            l.parts[2] === 0 &&
            l.parts[3] === 0)
        )
          a = !0;
        else
          for (f = 3; f >= 0; f--) {
            var S = 0,
              C = GO(l);
            if (((l = C.quotient), (S = C.rem.low), !!S))
              for (c = 8; c >= 0; c--)
                (r[f * 9 + c] = S % 10), (S = Math.floor(S / 10));
          }
        if (a) (n = 1), (r[i] = 0);
        else for (n = 36; !r[i]; ) (n = n - 1), (i = i + 1);
        var T = n - 1 + y;
        if (T >= 34 || T <= -7 || y > 0) {
          if (n > 34)
            return (
              p.push("".concat(0)),
              y > 0 ? p.push("E+".concat(y)) : y < 0 && p.push("E".concat(y)),
              p.join("")
            );
          p.push("".concat(r[i++])), (n = n - 1), n && p.push(".");
          for (var o = 0; o < n; o++) p.push("".concat(r[i++]));
          p.push("E"), T > 0 ? p.push("+".concat(T)) : p.push("".concat(T));
        } else if (y >= 0)
          for (var o = 0; o < n; o++) p.push("".concat(r[i++]));
        else {
          var _ = n + y;
          if (_ > 0) for (var o = 0; o < _; o++) p.push("".concat(r[i++]));
          else p.push("0");
          for (p.push("."); _++ < 0; ) p.push("0");
          for (var o = 0; o < n - Math.max(_ - 1, 0); o++)
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
  Object.defineProperty(wf.prototype, "_bsontype", { value: "Decimal128" });
  var Bl = (function () {
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
  Object.defineProperty(Bl.prototype, "_bsontype", { value: "Double" });
  var zl = (function () {
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
  Object.defineProperty(zl.prototype, "_bsontype", { value: "Int32" });
  var Sf = (function () {
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
  Object.defineProperty(Sf.prototype, "_bsontype", { value: "MaxKey" });
  var xf = (function () {
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
  Object.defineProperty(xf.prototype, "_bsontype", { value: "MinKey" });
  var QO = new RegExp("^[0-9a-fA-F]{24}$"),
    Lr = null,
    Sn = Symbol("id"),
    Ot = (function () {
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
          this[Sn] = n instanceof be ? n : Ml(n);
        else if (typeof n == "string")
          if (n.length === 12) {
            var r = be.from(n);
            if (r.byteLength === 12) this[Sn] = r;
            else
              throw new He("Argument passed in must be a string of 12 bytes");
          } else if (n.length === 24 && QO.test(n))
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
            Lr === null && (Lr = vy(5)),
            (r[4] = Lr[0]),
            (r[5] = Lr[1]),
            (r[6] = Lr[2]),
            (r[7] = Lr[3]),
            (r[8] = Lr[4]),
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
            mf(this.id)
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
  Object.defineProperty(Ot.prototype, "generate", {
    value: $l(function (e) {
      return Ot.generate(e);
    }, "Please use the static `ObjectId.generate(time)` instead"),
  }),
    Object.defineProperty(Ot.prototype, "getInc", {
      value: $l(function () {
        return Ot.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Ot.prototype, "get_inc", {
      value: $l(function () {
        return Ot.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Ot, "get_inc", {
      value: $l(function () {
        return Ot.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(Ot.prototype, "_bsontype", { value: "ObjectID" });
  function ZO(e) {
    return e.split("").sort().join("");
  }
  var ea = (function () {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      if (
        ((this.pattern = t),
        (this.options = ZO(n ?? "")),
        this.pattern.indexOf("\0") !== -1)
      )
        throw new $r(
          "BSON Regex patterns cannot contain null bytes, found: ".concat(
            JSON.stringify(this.pattern),
          ),
        );
      if (this.options.indexOf("\0") !== -1)
        throw new $r(
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
          throw new $r(
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
  Object.defineProperty(ea.prototype, "_bsontype", { value: "BSONRegExp" });
  var kf = (function () {
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
  Object.defineProperty(kf.prototype, "_bsontype", { value: "Symbol" });
  var eT = Z,
    $y = (function (e) {
      Pl(t, e);
      function t(n, r) {
        var o = this;
        return o instanceof t
          ? (Z.isLong(n)
              ? (o = e.call(this, n.low, n.high, !0) || this)
              : Xi(n) && typeof n.t < "u" && typeof n.i < "u"
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
    })(eT);
  function tT(e) {
    return (
      Xi(e) && Reflect.has(e, "_bsontype") && typeof e._bsontype == "string"
    );
  }
  var My = 2147483647,
    Ly = -2147483648,
    By = 9223372036854776e3,
    zy = -9223372036854776e3,
    nT = {
      $oid: Ot,
      $binary: Mr,
      $uuid: Mr,
      $symbol: kf,
      $numberInt: zl,
      $numberDecimal: wf,
      $numberDouble: Bl,
      $numberLong: Z,
      $minKey: xf,
      $maxKey: Sf,
      $regex: ea,
      $regularExpression: ea,
      $timestamp: $y,
    };
  function Dy(e, t) {
    if ((t === void 0 && (t = {}), typeof e == "number")) {
      if (t.relaxed || t.legacy) return e;
      if (Math.floor(e) === e) {
        if (e >= Ly && e <= My) return new zl(e);
        if (e >= zy && e <= By) return Z.fromNumber(e);
      }
      return new Bl(e);
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
      var o = nT[n[r]];
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
      return e.$scope && (s.$scope = Dy(e.$scope)), Ll.fromExtendedJSON(e);
    }
    if (DO(e) || e.$dbPointer) {
      var l = e.$ref ? e : e.$dbPointer;
      if (l instanceof Qi) return l;
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
        return Qi.fromExtendedJSON(l);
    }
    return e;
  }
  function rT(e, t) {
    return e.map(function (n, r) {
      t.seenObjects.push({ propertyName: "index ".concat(r), obj: null });
      try {
        return ar(n, t);
      } finally {
        t.seenObjects.pop();
      }
    });
  }
  function Fy(e) {
    var t = e.toISOString();
    return e.getUTCMilliseconds() !== 0 ? t : t.slice(0, -5) + "Z";
  }
  function ar(e, t) {
    if ((typeof e == "object" || typeof e == "function") && e !== null) {
      var n = t.seenObjects.findIndex(function (w) {
        return w.obj === e;
      });
      if (n !== -1) {
        var r = t.seenObjects.map(function (w) {
            return w.propertyName;
          }),
          o = r
            .slice(0, n)
            .map(function (w) {
              return "".concat(w, " -> ");
            })
            .join(""),
          i = r[n],
          a =
            " -> " +
            r
              .slice(n + 1, r.length - 1)
              .map(function (w) {
                return "".concat(w, " -> ");
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
    if (Array.isArray(e)) return rT(e, t);
    if (e === void 0) return null;
    if (e instanceof Date || MO(e)) {
      var f = e.getTime(),
        p = f > -1 && f < 2534023188e5;
      return t.legacy
        ? t.relaxed && p
          ? { $date: e.getTime() }
          : { $date: Fy(e) }
        : t.relaxed && p
        ? { $date: Fy(e) }
        : { $date: { $numberLong: e.getTime().toString() } };
    }
    if (typeof e == "number" && (!t.relaxed || !isFinite(e))) {
      if (Math.floor(e) === e) {
        var h = e >= Ly && e <= My,
          v = e >= zy && e <= By;
        if (h) return { $numberInt: e.toString() };
        if (v) return { $numberLong: e.toString() };
      }
      return { $numberDouble: e.toString() };
    }
    if (e instanceof RegExp || $O(e)) {
      var g = e.flags;
      if (g === void 0) {
        var x = e.toString().match(/[gimuy]*$/);
        x && (g = x[0]);
      }
      var N = new ea(e.source, g);
      return N.toExtendedJSON(t);
    }
    return e != null && typeof e == "object" ? iT(e, t) : e;
  }
  var oT = {
    Binary: function (e) {
      return new Mr(e.value(), e.sub_type);
    },
    Code: function (e) {
      return new Ll(e.code, e.scope);
    },
    DBRef: function (e) {
      return new Qi(e.collection || e.namespace, e.oid, e.db, e.fields);
    },
    Decimal128: function (e) {
      return new wf(e.bytes);
    },
    Double: function (e) {
      return new Bl(e.value);
    },
    Int32: function (e) {
      return new zl(e.value);
    },
    Long: function (e) {
      return Z.fromBits(
        e.low != null ? e.low : e.low_,
        e.low != null ? e.high : e.high_,
        e.low != null ? e.unsigned : e.unsigned_,
      );
    },
    MaxKey: function () {
      return new Sf();
    },
    MinKey: function () {
      return new xf();
    },
    ObjectID: function (e) {
      return new Ot(e);
    },
    ObjectId: function (e) {
      return new Ot(e);
    },
    BSONRegExp: function (e) {
      return new ea(e.pattern, e.options);
    },
    Symbol: function (e) {
      return new kf(e.value);
    },
    Timestamp: function (e) {
      return $y.fromBits(e.low, e.high);
    },
  };
  function iT(e, t) {
    if (e == null || typeof e != "object")
      throw new $r("not an object instance");
    var n = e._bsontype;
    if (typeof n > "u") {
      var r = {};
      for (var o in e) {
        t.seenObjects.push({ propertyName: o, obj: null });
        try {
          var i = ar(e[o], t);
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
    } else if (tT(e)) {
      var a = e;
      if (typeof a.toExtendedJSON != "function") {
        var s = oT[e._bsontype];
        if (!s)
          throw new He("Unrecognized or invalid _bsontype: " + e._bsontype);
        a = s(a);
      }
      return (
        n === "Code" && a.scope
          ? (a = new Ll(a.code, ar(a.scope, t)))
          : n === "DBRef" &&
            a.oid &&
            (a = new Qi(
              ar(a.collection, t),
              ar(a.oid, t),
              ar(a.db, t),
              ar(a.fields, t),
            )),
        a.toExtendedJSON(t)
      );
    } else throw new $r("_bsontype must be a string, but was: " + typeof n);
  }
  var Br;
  (function (e) {
    function t(i, a) {
      var s = Object.assign({}, { relaxed: !0, legacy: !1 }, a);
      return (
        typeof s.relaxed == "boolean" && (s.strict = !s.relaxed),
        typeof s.strict == "boolean" && (s.relaxed = !s.strict),
        JSON.parse(i, function (l, c) {
          if (l.indexOf("\0") !== -1)
            throw new $r(
              "BSON Document field names cannot contain null bytes, found: ".concat(
                JSON.stringify(l),
              ),
            );
          return Dy(c, s);
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
        f = ar(i, c);
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
  })(Br || (Br = {}));
  var jy = by();
  jy.Map
    ? jy.Map
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
    Z.fromNumber(BO),
    Z.fromNumber(zO);
  var Ef = new Uint8Array(8);
  new DataView(Ef.buffer, Ef.byteOffset, Ef.byteLength);
  var aT = 1024 * 1024 * 17;
  be.alloc(aT);
  var Uy = function (e, t, n) {
      if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
          (i || !(r in t)) &&
            (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
      return e.concat(i || Array.prototype.slice.call(t));
    },
    sT = (function () {
      function e(t, n, r) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.type = "browser");
      }
      return e;
    })(),
    lT = (function () {
      function e(t) {
        (this.version = t),
          (this.type = "node"),
          (this.name = "node"),
          (this.os = process.platform);
      }
      return e;
    })(),
    uT = (function () {
      function e(t, n, r, o) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.bot = o),
          (this.type = "bot-device");
      }
      return e;
    })(),
    cT = (function () {
      function e() {
        (this.type = "bot"),
          (this.bot = !0),
          (this.name = "bot"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    dT = (function () {
      function e() {
        (this.type = "react-native"),
          (this.name = "react-native"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    fT =
      /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    pT =
      /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    Wy = 3,
    hT = [
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
      ["searchbot", fT],
    ],
    Vy = [
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
  function mT(e) {
    return e
      ? Hy(e)
      : typeof document > "u" &&
        typeof navigator < "u" &&
        navigator.product === "ReactNative"
      ? new dT()
      : typeof navigator < "u"
      ? Hy(navigator.userAgent)
      : bT();
  }
  function gT(e) {
    return (
      e !== "" &&
      hT.reduce(function (t, n) {
        var r = n[0],
          o = n[1];
        if (t) return t;
        var i = o.exec(e);
        return !!i && [r, i];
      }, !1)
    );
  }
  function Hy(e) {
    var t = gT(e);
    if (!t) return null;
    var n = t[0],
      r = t[1];
    if (n === "searchbot") return new cT();
    var o = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
    o
      ? o.length < Wy && (o = Uy(Uy([], o, !0), vT(Wy - o.length), !0))
      : (o = []);
    var i = o.join("."),
      a = yT(e),
      s = pT.exec(e);
    return s && s[1] ? new uT(n, i, a, s[1]) : new sT(n, i, a);
  }
  function yT(e) {
    for (var t = 0, n = Vy.length; t < n; t++) {
      var r = Vy[t],
        o = r[0],
        i = r[1],
        a = i.exec(e);
      if (a) return o;
    }
    return null;
  }
  function bT() {
    var e = typeof process < "u" && process.version;
    return e ? new lT(process.version.slice(1)) : null;
  }
  function vT(e) {
    for (var t = [], n = 0; n < e; n++) t.push("0");
    return t;
  }
  class xn {
    constructor() {
      if (!xn.fetch)
        throw new Error(
          "DefaultNetworkTransport.fetch must be set before it's used",
        );
      if (!xn.AbortController)
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
        return await xn.fetch(r, { ...xn.extraFetchOptions, signal: i, ...o });
      } finally {
        a();
      }
    }
    createTimeoutSignal(t) {
      if (typeof t == "number") {
        const n = new xn.AbortController(),
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
  xn.DEFAULT_HEADERS = { "Content-Type": "application/json" };
  const wT = (e) => {},
    Dl = function (e) {
      return e && e.Math == Math && e;
    },
    Fl =
      Dl(typeof globalThis == "object" && globalThis) ||
      Dl(typeof window == "object" && window) ||
      Dl(typeof self == "object" && self) ||
      Dl(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  wT(typeof __DEV__ < "u" && __DEV__),
    (xn.fetch = Fl.fetch.bind(Fl)),
    (xn.AbortController = Fl.AbortController.bind(Fl));
  const qy = "3.7.2",
    ST = qy,
    xT = typeof atob == "function",
    kT = typeof btoa == "function",
    Lo = typeof Buffer == "function",
    Ky = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
    Jy = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
    ET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ta = Array.prototype.slice.call(ET),
    jl = ((e) => {
      let t = {};
      return e.forEach((n, r) => (t[n] = r)), t;
    })(ta),
    CT =
      /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    at = String.fromCharCode.bind(String),
    Gy =
      typeof Uint8Array.from == "function"
        ? Uint8Array.from.bind(Uint8Array)
        : (e, t = (n) => n) =>
            new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
    Yy = (e) =>
      e.replace(/=/g, "").replace(/[+\/]/g, (t) => (t == "+" ? "-" : "_")),
    Xy = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
    Qy = (e) => {
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
            ta[(t >> 18) & 63] +
            ta[(t >> 12) & 63] +
            ta[(t >> 6) & 63] +
            ta[t & 63]);
      }
      return a ? i.slice(0, a - 3) + "===".substring(a) : i;
    },
    Cf = kT
      ? (e) => btoa(e)
      : Lo
      ? (e) => Buffer.from(e, "binary").toString("base64")
      : Qy,
    Of = Lo
      ? (e) => Buffer.from(e).toString("base64")
      : (e) => {
          let t = [];
          for (let n = 0, r = e.length; n < r; n += 4096)
            t.push(at.apply(null, e.subarray(n, n + 4096)));
          return Cf(t.join(""));
        },
    Ul = (e, t = !1) => (t ? Yy(Of(e)) : Of(e)),
    OT = (e) => {
      if (e.length < 2) {
        var t = e.charCodeAt(0);
        return t < 128
          ? e
          : t < 2048
          ? at(192 | (t >>> 6)) + at(128 | (t & 63))
          : at(224 | ((t >>> 12) & 15)) +
            at(128 | ((t >>> 6) & 63)) +
            at(128 | (t & 63));
      } else {
        var t =
          65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
        return (
          at(240 | ((t >>> 18) & 7)) +
          at(128 | ((t >>> 12) & 63)) +
          at(128 | ((t >>> 6) & 63)) +
          at(128 | (t & 63))
        );
      }
    },
    TT = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    Zy = (e) => e.replace(TT, OT),
    eb = Lo
      ? (e) => Buffer.from(e, "utf8").toString("base64")
      : Jy
      ? (e) => Of(Jy.encode(e))
      : (e) => Cf(Zy(e)),
    Bo = (e, t = !1) => (t ? Yy(eb(e)) : eb(e)),
    tb = (e) => Bo(e, !0),
    _T =
      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    RT = (e) => {
      switch (e.length) {
        case 4:
          var t =
              ((7 & e.charCodeAt(0)) << 18) |
              ((63 & e.charCodeAt(1)) << 12) |
              ((63 & e.charCodeAt(2)) << 6) |
              (63 & e.charCodeAt(3)),
            n = t - 65536;
          return at((n >>> 10) + 55296) + at((n & 1023) + 56320);
        case 3:
          return at(
            ((15 & e.charCodeAt(0)) << 12) |
              ((63 & e.charCodeAt(1)) << 6) |
              (63 & e.charCodeAt(2)),
          );
        default:
          return at(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
      }
    },
    nb = (e) => e.replace(_T, RT),
    rb = (e) => {
      if (((e = e.replace(/\s+/g, "")), !CT.test(e)))
        throw new TypeError("malformed base64.");
      e += "==".slice(2 - (e.length & 3));
      let t,
        n = "",
        r,
        o;
      for (let i = 0; i < e.length; )
        (t =
          (jl[e.charAt(i++)] << 18) |
          (jl[e.charAt(i++)] << 12) |
          ((r = jl[e.charAt(i++)]) << 6) |
          (o = jl[e.charAt(i++)])),
          (n +=
            r === 64
              ? at((t >> 16) & 255)
              : o === 64
              ? at((t >> 16) & 255, (t >> 8) & 255)
              : at((t >> 16) & 255, (t >> 8) & 255, t & 255));
      return n;
    },
    Tf = xT
      ? (e) => atob(Xy(e))
      : Lo
      ? (e) => Buffer.from(e, "base64").toString("binary")
      : rb,
    ob = Lo
      ? (e) => Gy(Buffer.from(e, "base64"))
      : (e) => Gy(Tf(e), (t) => t.charCodeAt(0)),
    ib = (e) => ob(ab(e)),
    NT = Lo
      ? (e) => Buffer.from(e, "base64").toString("utf8")
      : Ky
      ? (e) => Ky.decode(ob(e))
      : (e) => nb(Tf(e)),
    ab = (e) => Xy(e.replace(/[-_]/g, (t) => (t == "-" ? "+" : "/"))),
    _f = (e) => NT(ab(e)),
    IT = (e) => {
      if (typeof e != "string") return !1;
      const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
    },
    sb = (e) => ({ value: e, enumerable: !1, writable: !0, configurable: !0 }),
    lb = function () {
      const e = (t, n) => Object.defineProperty(String.prototype, t, sb(n));
      e("fromBase64", function () {
        return _f(this);
      }),
        e("toBase64", function (t) {
          return Bo(this, t);
        }),
        e("toBase64URI", function () {
          return Bo(this, !0);
        }),
        e("toBase64URL", function () {
          return Bo(this, !0);
        }),
        e("toUint8Array", function () {
          return ib(this);
        });
    },
    ub = function () {
      const e = (t, n) => Object.defineProperty(Uint8Array.prototype, t, sb(n));
      e("toBase64", function (t) {
        return Ul(this, t);
      }),
        e("toBase64URI", function () {
          return Ul(this, !0);
        }),
        e("toBase64URL", function () {
          return Ul(this, !0);
        });
    },
    PT = () => {
      lb(), ub();
    },
    Wl = {
      version: qy,
      VERSION: ST,
      atob: Tf,
      atobPolyfill: rb,
      btoa: Cf,
      btoaPolyfill: Qy,
      fromBase64: _f,
      toBase64: Bo,
      encode: Bo,
      encodeURI: tb,
      encodeURL: tb,
      utob: Zy,
      btou: nb,
      decode: _f,
      isValid: IT,
      fromUint8Array: Ul,
      toUint8Array: ib,
      extendString: lb,
      extendUint8Array: ub,
      extendBuiltins: PT,
    },
    AT = { relaxed: !1 };
  function cb(e) {
    return Br.serialize(e, AT);
  }
  function db(e) {
    return Array.isArray(e)
      ? e.map((t) => Br.deserialize(t))
      : Br.deserialize(e);
  }
  var Rf;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(Rf || (Rf = {}));
  var sn;
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
  })(sn || (sn = {}));
  const fb = {
    [sn.NAME]: "name",
    [sn.EMAIL]: "email",
    [sn.PICTURE]: "pictureUrl",
    [sn.FIRST_NAME]: "firstName",
    [sn.LAST_NAME]: "lastName",
    [sn.GENDER]: "gender",
    [sn.BIRTHDAY]: "birthday",
    [sn.MIN_AGE]: "minAge",
    [sn.MAX_AGE]: "maxAge",
  };
  class pb {
    constructor(t) {
      if (
        ((this.type = Rf.Normal),
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
            Object.entries(o).map(([a, s]) => (a in fb ? [fb[a], s] : [a, s])),
          );
          this.data = db(i);
        } else throw new Error("Expected 'data' in the response body");
      } else this.data = {};
    }
  }
  class ln {
    constructor(t, n) {
      (this.storage = t), (this.keyPart = n);
    }
    get(t) {
      return this.storage.get(this.keyPart + ln.PART_SEPARATOR + t);
    }
    set(t, n) {
      return this.storage.set(this.keyPart + ln.PART_SEPARATOR + t, n);
    }
    remove(t) {
      return this.storage.remove(this.keyPart + ln.PART_SEPARATOR + t);
    }
    prefix(t) {
      return new ln(this, t);
    }
    clear(t = "") {
      return this.storage.clear(this.keyPart + ln.PART_SEPARATOR + t);
    }
    addListener(t) {
      return this.storage.addListener(t);
    }
    removeListener(t) {
      return this.storage.addListener(t);
    }
  }
  ln.PART_SEPARATOR = ":";
  class $T {
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
      return new ln(this, t);
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
  const Nf = "accessToken",
    If = "refreshToken",
    Pf = "profile",
    Af = "providerType";
  class MT extends ln {
    constructor(t, n) {
      super(t, `user(${n})`);
    }
    get accessToken() {
      return this.get(Nf);
    }
    set accessToken(t) {
      t === null ? this.remove(Nf) : this.set(Nf, t);
    }
    get refreshToken() {
      return this.get(If);
    }
    set refreshToken(t) {
      t === null ? this.remove(If) : this.set(If, t);
    }
    get profile() {
      const t = this.get(Pf);
      if (t) {
        const n = new pb();
        return Object.assign(n, JSON.parse(t)), n;
      }
    }
    set profile(t) {
      t ? this.set(Pf, JSON.stringify(t)) : this.remove(Pf);
    }
    get providerType() {
      const t = this.get(Af);
      if (t) return t;
    }
    set providerType(t) {
      t ? this.set(Af, t) : this.remove(Af);
    }
  }
  function $f(e) {
    return Object.fromEntries(
      Object.entries(e).filter((t) => typeof t[1] < "u"),
    );
  }
  function LT(e, t) {
    let n = "";
    for (let r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)];
    return n;
  }
  function hb(e, t = !0) {
    const n = $f(e);
    return (
      (t && Object.keys(n).length > 0 ? "?" : "") +
      Object.entries(n)
        .map(([r, o]) => `${r}=${encodeURIComponent(o)}`)
        .join("&")
    );
  }
  function BT(e) {
    const t = e[0] === "?" ? e.substr(1) : e;
    return Object.fromEntries(
      t
        .split("&")
        .filter((n) => n.length > 0)
        .map((n) => n.split("="))
        .map(([n, r]) => [n, decodeURIComponent(r)]),
    );
  }
  const zT = [
    "inspect",
    "callFunction",
    "callFunctionStreaming",
    ...Object.getOwnPropertyNames(Object.prototype),
  ];
  function DT(e) {
    for (const t of e)
      if (typeof t == "object" && t)
        for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n];
    return e;
  }
  function FT(e) {
    return DT(e).map((t) => (typeof t == "object" ? cb(t) : t));
  }
  class Vl {
    constructor(t, n = {}) {
      (this.fetcher = t),
        (this.serviceName = n.serviceName),
        (this.argsTransformation = n.argsTransformation || FT);
    }
    static create(t, n = {}) {
      const r = new Vl(t, n);
      return new Proxy(r, {
        get(o, i, a) {
          if (typeof i == "string" && zT.indexOf(i) === -1)
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
        i = hb({ baas_request: Wl.encode(JSON.stringify(r)) });
      return this.fetcher.fetchStream({
        method: "GET",
        path: o.functionsCall().path + i,
      });
    }
  }
  class jT {
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
  function UT() {
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
  var Xt = { api: UT };
  class WT {
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
  let Mf = null;
  function VT(e) {
    Mf = e;
  }
  function na() {
    if (Mf) return Mf;
    throw new Error("Cannot get environment before it's set");
  }
  class Lf extends Error {
    constructor({ message: t, code: n }) {
      super(t), (this.name = "WatchError"), (this.code = n);
    }
  }
  var yt;
  (function (e) {
    (e.NEED_DATA = "NEED_DATA"),
      (e.HAVE_EVENT = "HAVE_EVENT"),
      (e.HAVE_ERROR = "HAVE_ERROR");
  })(yt || (yt = {}));
  class HT {
    constructor() {
      (this._state = yt.NEED_DATA),
        (this._error = null),
        (this._textDecoder = new (na().TextDecoder)()),
        (this._buffer = ""),
        (this._bufferOffset = 0),
        (this._eventType = ""),
        (this._dataBuffer = "");
    }
    feedBuffer(t) {
      this.assertState(yt.NEED_DATA),
        (this._buffer += this._textDecoder.decode(t, { stream: !0 })),
        this.advanceBufferState();
    }
    feedLine(t) {
      if (
        (this.assertState(yt.NEED_DATA),
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
      this.assertState(yt.NEED_DATA);
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
          const r = Br.parse(t.data);
          if (typeof r == "object") {
            (this._nextEvent = r), (this._state = yt.HAVE_EVENT);
            return;
          }
        } catch {}
        (this._state = yt.HAVE_ERROR),
          (this._error = new Lf({
            message: "server returned malformed event: " + t.data,
            code: "bad bson parse",
          }));
      } else if (t.eventType === "error") {
        (this._state = yt.HAVE_ERROR),
          (this._error = new Lf({ message: t.data, code: "unknown" }));
        try {
          const { error_code: r, error: o } = Br.parse(t.data);
          if (typeof r != "string" || typeof o != "string") return;
          this._error = new Lf({ message: o, code: r });
        } catch {
          return;
        }
      }
    }
    get state() {
      return this._state;
    }
    nextEvent() {
      this.assertState(yt.HAVE_EVENT);
      const t = this._nextEvent;
      return (this._state = yt.NEED_DATA), this.advanceBufferState(), t;
    }
    get error() {
      return this._error;
    }
    advanceBufferState() {
      for (this.assertState(yt.NEED_DATA); this.state === yt.NEED_DATA; ) {
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
  class qT {
    constructor(t, n, r, o) {
      (this.functions = Vl.create(t, { serviceName: n })),
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
      const n = new HT(),
        r = t.then((o) => ({ [Symbol.asyncIterator]: () => o }));
      for await (const o of await r)
        if (o) {
          for (n.feedBuffer(o); n.state == yt.HAVE_EVENT; ) yield n.nextEvent();
          if (n.state == yt.HAVE_ERROR) throw n.error;
        }
    }
  }
  function KT(e, t, n, r) {
    return new qT(e, t, n, r);
  }
  function JT(e, t, n) {
    return { collection: KT.bind(null, e, t, n) };
  }
  function GT(e, t = "mongo-db") {
    return { db: JT.bind(null, e, t) };
  }
  const YT = "000000000000000000000000";
  var zr;
  (function (e) {
    (e.Active = "active"),
      (e.LoggedOut = "logged-out"),
      (e.Removed = "removed");
  })(zr || (zr = {}));
  var mb;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(mb || (mb = {}));
  class gb {
    constructor(t) {
      if (
        ((this.app = t.app),
        (this.id = t.id),
        (this.storage = new MT(this.app.storage, this.id)),
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
        (this.apiKeys = new WT(this.fetcher)),
        (this.functions = Vl.create(this.fetcher));
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
          ? zr.LoggedOut
          : zr.Active
        : zr.Removed;
    }
    get isLoggedIn() {
      return this.state === zr.Active;
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
          const n = JSON.parse(Wl.decode(t)).baas_device_id;
          if (typeof n == "string" && n !== YT) return n;
        }
      }
      return null;
    }
    async refreshProfile() {
      const t = await this.fetcher.fetchJSON({
        method: "GET",
        path: Xt.api().auth().profile().path,
      });
      (this._profile = new pb(t)), (this.storage.profile = this._profile);
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
      return GT(this.fetcher, t);
    }
    decodeAccessToken() {
      if (this.accessToken) {
        const t = this.accessToken.split(".");
        if (t.length !== 3)
          throw new Error("Expected an access token with three parts");
        const n = t[1],
          r = Wl.decode(n),
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
  class Qt {
    constructor(t, n, r) {
      (this.providerName = t), (this.providerType = n), (this.payload = r);
    }
    static anonymous() {
      return new Qt("anon-user", "anon-user", {});
    }
    static apiKey(t) {
      return new Qt("api-key", "api-key", { key: t });
    }
    static emailPassword(t, n) {
      return new Qt("local-userpass", "local-userpass", {
        username: t,
        password: n,
      });
    }
    static function(t) {
      return new Qt("custom-function", "custom-function", t);
    }
    static jwt(t) {
      return new Qt("custom-token", "custom-token", { token: t });
    }
    static google(t) {
      return new Qt("oauth2-google", "oauth2-google", Qt.derivePayload(t));
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
      return new Qt(
        "oauth2-facebook",
        "oauth2-facebook",
        t.includes("://") ? { redirectUrl: t } : { accessToken: t },
      );
    }
    static apple(t) {
      return new Qt(
        "oauth2-apple",
        "oauth2-apple",
        t.includes("://") ? { redirectUrl: t } : { id_token: t },
      );
    }
  }
  const yb = "userIds",
    bb = "deviceId";
  class XT extends ln {
    constructor(t, n) {
      super(t, `app(${n})`);
    }
    getUserIds() {
      const t = this.get(yb),
        n = t ? JSON.parse(t) : [];
      if (Array.isArray(n)) return [...new Set(n)];
      throw new Error("Expected the user ids to be an array");
    }
    setUserIds(t, n) {
      if (n) {
        const r = this.getUserIds();
        for (const o of r) t.indexOf(o) === -1 && t.push(o);
      }
      this.set(yb, JSON.stringify(t));
    }
    removeUserId(t) {
      const n = this.getUserIds().filter((r) => r !== t);
      this.setUserIds(n, !1);
    }
    getDeviceId() {
      return this.get(bb);
    }
    setDeviceId(t) {
      this.set(bb, t);
    }
  }
  const QT = "abcdefghijklmnopqrstuvwxyz",
    ZT = 100,
    e_ = {
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
  class zo {
    constructor(t, n = na().openWindow) {
      (this.storage = t.prefix("oauth2")), (this.openWindow = n);
    }
    static parseRedirectLocation(t) {
      const n = BT(t),
        r = {};
      for (const [o, i] of Object.entries(e_)) {
        const a = n[o];
        a && (r[i] = a);
      }
      return r;
    }
    static handleRedirect(t, n = na().defaultStorage) {
      const r = zo.parseRedirectLocation(t),
        { state: o, error: i } = r;
      if (typeof o == "string") {
        const a = n.prefix("oauth2");
        zo.getStateStorage(a, o).set("result", JSON.stringify(r));
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
      const r = zo.getStateStorage(this.storage, n);
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
          }, ZT));
      });
    }
    generateState() {
      return LT(12, QT);
    }
  }
  const vb = "x-baas-location";
  class t_ {
    constructor(t, n, r) {
      (this.fetcher = t),
        (this.oauth2 = new zo(n)),
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
          ).headers.get(vb);
          if (s) return this.openWindowAndWaitForAuthResponse(s, i);
          throw new Error(`Missing ${vb} header`);
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
        i = hb({ link: n ? "true" : void 0, ...r });
      return (await this.fetcher.locationUrl) + o.path + i;
    }
    async openWindowAndWaitForAuthResponse(t, n) {
      const r = await this.oauth2.openWindowAndWaitForRedirect(t, n);
      return zo.decodeAuthInfo(r.userAuth);
    }
  }
  class ra extends Error {
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
          return new ra(
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
      return new ra(i, o, a, s);
    }
  }
  function n_(e) {
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
        if (typeof t == "object" && t !== null) return JSON.stringify(cb(t));
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
          await ra.fromRequestAndResponse(t, s))
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
        return db(s);
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
      return n_(n);
    }
    get appRoute() {
      return Xt.api().app(this.appId);
    }
    get locationUrl() {
      return this.locationUrlContext.locationUrl;
    }
  }
  const r_ = "deviceId";
  var wb;
  (function (e) {
    (e.DEVICE_ID = "deviceId"),
      (e.APP_ID = "appId"),
      (e.APP_VERSION = "appVersion"),
      (e.PLATFORM = "platform"),
      (e.PLATFORM_VERSION = "platformVersion"),
      (e.SDK_VERSION = "sdkVersion");
  })(wb || (wb = {}));
  class o_ {
    constructor({ appId: t, appVersion: n, deviceId: r }) {
      this.sdkVersion = "2.0.0";
      const o = na();
      (this.platform = o.platform),
        (this.platformVersion = o.platformVersion),
        (this.appId = t),
        (this.appVersion = n),
        (this.deviceId = r);
    }
    encode() {
      const t = $f(this);
      return Wl.encode(JSON.stringify(t));
    }
    toJSON() {
      return $f(this);
    }
  }
  const i_ = "https://realm.mongodb.com";
  let Bf = class aa {
    constructor(t) {
      (this.users = []), (this._locationUrl = null);
      const n = typeof t == "string" ? { id: t } : t;
      if (typeof n == "object" && typeof n.id == "string") this.id = n.id;
      else throw new Error("Missing an Atlas App Services app-id");
      (this.baseUrl = n.baseUrl || i_),
        n.skipLocationRequest &&
          (this._locationUrl = Promise.resolve(this.baseUrl)),
        (this.localApp = n.app);
      const { storage: r, transport: o = new xn() } = n;
      (this.fetcher = new Do({
        appId: this.id,
        userContext: this,
        locationUrlContext: this,
        transport: o,
      })),
        (this.emailPasswordAuth = new jT(this.fetcher));
      const i = r || na().defaultStorage;
      (this.storage = new XT(i, this.id)),
        (this.authenticator = new t_(
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
      if (t in aa.appCache) return aa.appCache[t];
      {
        const n = new aa(t);
        return (aa.appCache[t] = n), n;
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
        i && i !== "000000000000000000000000" && this.storage.set(r_, i), o
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
      const t = this.users.filter((n) => n.state === zr.Active);
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
            ? new Ot(t)
            : void 0;
      return new o_({
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
        const o = new gb({
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
      this.users = t.map((n) => new gb({ app: this, id: n }));
    }
  };
  (Bf.appCache = {}), (Bf.Credentials = Qt);
  const a_ = (e) => {},
    Hl = function (e) {
      return e && e.Math == Math && e;
    },
    oa =
      Hl(typeof globalThis == "object" && globalThis) ||
      Hl(typeof window == "object" && window) ||
      Hl(typeof self == "object" && self) ||
      Hl(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  a_(typeof __DEV__ < "u" && __DEV__);
  class s_ {
    constructor() {
      if (typeof oa.localStorage == "object") this.global = oa;
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
      return new ln(this, t);
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
  const Fo = mT(),
    l_ = "localStorage" in oa ? s_ : $T;
  function u_(e) {
    return typeof oa.open == "function"
      ? oa.open(e)
      : (console.log(`Please open ${e}`), null);
  }
  const c_ = {
    defaultStorage: new l_().prefix("realm-web"),
    openWindow: u_,
    platform: (Fo == null ? void 0 : Fo.name) || "web",
    platformVersion: (Fo == null ? void 0 : Fo.version) || "0.0.0",
    TextDecoder,
  };
  VT(c_);
  const d_ = "caja-chica-pqain",
    f_ =
      "https://realm.mongodb.com/groups/64c439eb9473f01fba108aaf/apps/64c43b5f13aa56de3f40739a",
    p_ = "https://realm.mongodb.com",
    h_ = "https://eastus2.azure.realm.mongodb.com",
    m_ = "https://eastus2.azure.data.mongodb-api.com",
    g_ =
      "https://cloud.mongodb.com/links/64c439eb9473f01fba108aaf/explorer/Cluster0/database/collection/find",
    y_ = "mongodb-atlas",
    zf = {
      appId: d_,
      appUrl: f_,
      baseUrl: p_,
      clientApiBaseUrl: h_,
      dataApiBaseUrl: m_,
      dataExplorerLink: g_,
      dataSourceName: y_,
    },
    { baseUrl: b_ } = zf;
  function Sb(e) {
    return new Bf({ id: e, baseUrl: b_ });
  }
  const xb = ie.createContext(null);
  function v_({ appId: e, children: t }) {
    const [n, r] = ie.useState(Sb(e));
    ie.useEffect(() => {
      r(Sb(e));
    }, [e]);
    const [o, i] = ie.useState(n.currentUser),
      a = ie.useCallback(
        async (c) => {
          await n.logIn(c), i(n.currentUser);
        },
        [n],
      ),
      s = ie.useCallback(async () => {
        try {
          const c = n.currentUser;
          await (c == null ? void 0 : c.logOut()), await n.removeUser(c);
        } catch (c) {
          console.error(c);
        }
        i(n.currentUser);
      }, [n]),
      l = ie.useMemo(
        () => ({ ...n, currentUser: o, logIn: a, logOut: s }),
        [n, o, a, s],
      );
    return R(xb.Provider, { value: l, children: t });
  }
  function ql() {
    const e = ie.useContext(xb);
    if (!e)
      throw new Error(
        "No App Services App found. Make sure to call useApp() inside of a <AppProvider />.",
      );
    return e;
  }
  var Df = {},
    jo = {},
    w_ = {
      get exports() {
        return jo;
      },
      set exports(e) {
        jo = e;
      },
    };
  (function (e) {
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    (e.exports = t),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(w_);
  var kb = {};
  const S_ = Kf(Lk);
  var Eb;
  function Kl() {
    return (
      Eb ||
        ((Eb = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function () {
                return t.createSvgIcon;
              },
            });
          var t = S_;
        })(kb)),
      kb
    );
  }
  const Jl = Kf(hv);
  var x_ = jo;
  Object.defineProperty(Df, "__esModule", { value: !0 });
  var Cb = (Df.default = void 0),
    k_ = x_(Kl()),
    E_ = Jl,
    C_ = (0, k_.default)(
      (0, E_.jsx)("path", {
        d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
      }),
      "Visibility",
    );
  Cb = Df.default = C_;
  var Ff = {},
    O_ = jo;
  Object.defineProperty(Ff, "__esModule", { value: !0 });
  var Ob = (Ff.default = void 0),
    T_ = O_(Kl()),
    __ = Jl,
    R_ = (0, T_.default)(
      (0, __.jsx)("path", {
        d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
      }),
      "VisibilityOff",
    );
  Ob = Ff.default = R_;
  const N_ = Tb;
  function I_({ children: e }) {
    return R(tf, {
      style: { textAlign: "center", padding: "14px 0", marginTop: "auto" },
      children: e,
    });
  }
  function Tb() {
    const e = "/docs/atlas/app-services/",
      t = new URL(e, "https://mongodb.com");
    return ce(I_, {
      children: [
        R("span", {
          children:
            "CaJa Chica Area Ingenieria de Software, codigo fuente del frontend: ",
        }),
        " ",
        "|",
        " ",
        R(k3, { target: "_blank", href: t, children: "Docs" }),
      ],
    });
  }
  const _b = (e) => !e,
    Gl = (e, t) => !(t < 0 || t >= e.length);
  function P_(e, t, n) {
    if (!Gl(e, t) && t !== e.length)
      throw new Error("Cannot add value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t)];
  }
  function A_(e, t, n) {
    if (!Gl(e, t))
      throw new Error("Cannot replace value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t + 1)];
  }
  function $_(e, t, n) {
    if (!Gl(e, t))
      throw new Error("Cannot update value. Array index out of bounds.");
    return [...e.slice(0, t), n(e[t]), ...e.slice(t + 1)];
  }
  function M_(e, t) {
    if (!Gl(e, t))
      throw new Error("Cannot remove value. Array index out of bounds.");
    return [...e.slice(0, t), ...e.slice(t + 1)];
  }
  const Yl = (e) => (e._id instanceof Ot ? e._id.toHexString() : e._id),
    L_ = (e, t) => Yl(e) === Yl(t),
    Xl = (e, t) => {
      const n = e.findIndex((r) => L_(r, t));
      return n >= 0 ? n : null;
    };
  function B_(e) {
    return R($E, { elevation: 6, variant: "filled", ...e });
  }
  function z_({ isOpen: e, message: t, onClose: n = () => {} }) {
    return e ? R(B_, { onClose: n, severity: "error", children: t }) : null;
  }
  function D_({ error: e, clearError: t, hideAfterMs: n }) {
    const [r, o] = ie.useState(!1),
      i = ie.useCallback(() => {
        t(), o(!1);
      }, [t]);
    return (
      ie.useEffect(() => {
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
        R(z_, {
          isOpen: r,
          message: e,
          onClose: () => {
            i();
          },
        })
    );
  }
  function F_() {
    const e = ql(),
      [t, n] = ie.useState(!1),
      r = () => {
        s(), n(_b);
      },
      o = { email: null, password: null, other: null },
      [i, a] = ie.useState(o),
      s = () => a(o),
      l = D_({
        error: i.other,
        clearError: () => {
          a((v) => ({ ...v, other: null }));
        },
      }),
      [c, f] = ie.useState(!1),
      p = () => f(_b),
      h = async ({ email: v, password: g }) => {
        console.log(`${v}@sanpedrosula.hn`), s();
        try {
          t &&
            (await e.emailPasswordAuth.registerUser({
              email: `${v}@sanpedrosula.hn`,
              password: g,
            })),
            await e.logIn(Qt.emailPassword(`${v}@sanpedrosula.hn`, g));
        } catch (x) {
          j_(x, a);
        }
      };
    return ce(tf, {
      maxWidth: "sm",
      className: "main-container",
      children: [
        R(M5, {
          className: "auth-card",
          variant: "outlined",
          children: ce("form", {
            className: "auth-form",
            onSubmit: (v) => {
              v.preventDefault();
              const g = new FormData(v.target),
                { email: x, password: N } = Object.fromEntries(g.entries());
              h({ email: x, password: N });
            },
            children: [
              R(Jt, {
                component: "h2",
                variant: "h4",
                children: "Welcome automation!",
              }),
              R(Jt, {
                variant: "subtitle1",
                gutterBottom: !0,
                children: t
                  ? "Enter your email and a password to create a new account."
                  : "Enter your email and a password to log in with an existing account.",
              }),
              R(l, {}),
              ce("div", {
                className: "email-and-domain",
                children: [
                  R(Nl, {
                    id: "input-email",
                    name: "email",
                    label: "Email Address",
                    variant: "outlined",
                    error: !!i.email,
                    helperText: i.email ?? "",
                  }),
                  ce(Jt, {
                    variant: "caption",
                    gutterBottom: !0,
                    children: [R("br", {}), "@sanpedrosula.hn"],
                  }),
                ],
              }),
              R(Nl, {
                id: "input-password",
                "data-testid": "input-password",
                type: c ? "text" : "password",
                name: "password",
                label: "Password",
                variant: "outlined",
                error: !!i.password,
                helperText: i.password ?? "",
                InputProps: {
                  endAdornment: R(JC, {
                    position: "end",
                    children: R(vl, {
                      "aria-label": "toggle password visibility",
                      onClick: p,
                      onMouseDown: (v) => {
                        v.preventDefault();
                      },
                      size: "large",
                      children: c ? R(Cb, {}) : R(Ob, {}),
                    }),
                  }),
                },
              }),
              R(Tl, {
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
        R(Tb, {}),
      ],
    });
  }
  function j_(e, t) {
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
    if (e instanceof ra) {
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
  var jf = {},
    U_ = jo;
  Object.defineProperty(jf, "__esModule", { value: !0 });
  var Rb = (jf.default = void 0),
    W_ = U_(Kl()),
    V_ = Jl,
    H_ = (0, W_.default)(
      (0, V_.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
      "Add",
    );
  Rb = jf.default = H_;
  const Ql = () => {},
    q_ = { onInsert: Ql, onUpdate: Ql, onReplace: Ql, onDelete: Ql };
  function K_(e, t) {
    const n = ie.useMemo(() => ({}), []),
      r = { ...q_, ...t },
      o = ie.useRef(r);
    ie.useEffect(() => {
      o.current = {
        onInsert: r.onInsert,
        onUpdate: r.onUpdate,
        onReplace: r.onReplace,
        onDelete: r.onDelete,
      };
    }, [r.onInsert, r.onUpdate, r.onReplace, r.onDelete]),
      ie.useEffect(() => {
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
  function J_({ cluster: e = "mongodb-atlas", db: t, collection: n }) {
    const r = ql();
    return ie.useMemo(
      () => r.currentUser.mongoClient(e).db(t).collection(n),
      [r.currentUser, e, t, n],
    );
  }
  const { dataSourceName: G_ } = zf;
  function Y_() {
    const e = ql(),
      [t, n] = ie.useState([]),
      [r, o] = ie.useState(!0),
      i = J_({ cluster: G_, db: "todo", collection: "Item" });
    return (
      ie.useEffect(() => {
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
      K_(i, {
        onInsert: (a) => {
          n((s) => {
            if (r) return s;
            const l = Xl(s, a.fullDocument) ?? s.length;
            return l === s.length ? P_(s, l, a.fullDocument) : s;
          });
        },
        onUpdate: (a) => {
          n((s) => {
            if (r) return s;
            const l = Xl(s, a.fullDocument);
            return $_(s, l, () => a.fullDocument);
          });
        },
        onReplace: (a) => {
          n((s) => {
            if (r) return s;
            const l = Xl(s, a.fullDocument);
            return A_(s, l, a.fullDocument);
          });
        },
        onDelete: (a) => {
          n((s) => {
            if (r) return s;
            const l = Xl(s, { _id: a.documentKey._id });
            return l >= 0 ? M_(s, l) : s;
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
  var Uf = {},
    X_ = jo;
  Object.defineProperty(Uf, "__esModule", { value: !0 });
  var Wf = (Uf.default = void 0),
    Q_ = X_(Kl()),
    Z_ = Jl,
    eR = (0, Q_.default)(
      (0, Z_.jsx)("path", {
        d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Clear",
    );
  Wf = Uf.default = eR;
  function tR({ todo: e, todoActions: t }) {
    return ce(ey, {
      children: [
        R(Y3, {
          children: R(tC, {
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
        R(sf, {
          children: R(vl, {
            "data-testid": "todo-delete-button",
            edge: "end",
            size: "small",
            onClick: () => {
              t.deleteTodo(e);
            },
            children: R(Wf, {}),
          }),
        }),
      ],
    });
  }
  function nR() {
    const [e, t] = ie.useState([]);
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
  const rR = Object.fromEntries
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
  function Zl(e) {
    return Object.keys(e);
  }
  function Nb(e, t) {
    if (!e) throw new Error(t);
  }
  function Ib(e, t) {
    return t;
  }
  const Vf = (e) => {
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
          if (Array.isArray(o)) i = Vf(o);
          else {
            Nb(!Ib(o, !1)), (i = "");
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
  function oR(e, t) {
    const n = E.useRef();
    return (
      (!n.current ||
        t.length !== n.current.prevDeps.length ||
        n.current.prevDeps.map((r, o) => r === t[o]).indexOf(!1) >= 0) &&
        (n.current = { v: e(), prevDeps: [...t] }),
      n.current.v
    );
  }
  function iR(e) {
    return (
      e instanceof Object &&
      !("styles" in e) &&
      !("length" in e) &&
      !("__emotion_styles" in e)
    );
  }
  const { createCssAndCx: aR } = (() => {
    function e(n, r, o) {
      const i = [],
        a = zg(n, i, o);
      return i.length < 2 ? o : a + r(i);
    }
    function t(n) {
      const { cache: r } = n,
        o = (...i) => {
          const a = el(i, r.registered);
          Id(r, a, !1);
          const s = `${r.key}-${a.name}`;
          e: {
            const l = i[0];
            if (!iR(l)) break e;
            Pb.saveClassNameCSSObjectMapping(r, s, l);
          }
          return s;
        };
      return {
        css: o,
        cx: (...i) => {
          const a = Vf(i),
            s = Pb.fixClassName(r, a, o);
          return e(r.registered, o, s);
        },
      };
    }
    return { createCssAndCx: t };
  })();
  function sR(e) {
    const { useCache: t } = e;
    function n() {
      const r = t(),
        { css: o, cx: i } = oR(() => aR({ cache: r }), [r]);
      return { css: o, cx: i };
    }
    return { useCssAndCx: n };
  }
  const Pb = (() => {
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
          return Vf(
            t(r.split(" ").map((a) => [a, i == null ? void 0 : i.get(a)])).map(
              (a) => (typeof a == "string" ? a : o(a)),
            ),
          );
        };
      })(),
    };
  })();
  function eu(e) {
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
  function Ab(e, t, n) {
    if (!(t instanceof Object)) return e;
    const r = {};
    return (
      Zl(e).forEach((o) => (r[o] = n(e[o], t[o]))),
      Zl(t).forEach((o) => {
        if (o in e) return;
        const i = t[o];
        typeof i == "string" && (r[o] = i);
      }),
      r
    );
  }
  let lR = 0;
  function $b(e) {
    const { useTheme: t, cache: n } = e;
    function r() {
      var s;
      const l = B2(),
        c = cR(),
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
    const { useCssAndCx: o } = sR({ useCache: r });
    function i(s) {
      const { name: l, uniqId: c = lR++ } = s ?? {},
        f = typeof l != "object" ? l : Object.keys(l)[0];
      return function (p) {
        const h = typeof p == "function" ? p : () => p;
        return function (v, g) {
          var x, N;
          const w = t(),
            { css: b, cx: y } = o(),
            S = r();
          let C = E.useMemo(() => {
            const _ = {},
              I =
                typeof Proxy < "u" &&
                new Proxy(
                  {},
                  {
                    get: (U, F) => (
                      typeof F == "symbol" && Nb(!1),
                      (_[F] = `${S.key}-${c}${
                        f !== void 0 ? `-${f}` : ""
                      }-${F}-ref`)
                    ),
                  },
                ),
              B = h(w, v, I || {}),
              M = rR(
                Zl(B).map((U) => {
                  const F = B[U];
                  return (
                    F.label || (F.label = `${f !== void 0 ? `${f}-` : ""}${U}`),
                    [U, `${b(F)}${Ib(U, U in _) ? ` ${_[U]}` : ""}`]
                  );
                }),
              );
            return (
              Zl(_).forEach((U) => {
                U in M || (M[U] = _[U]);
              }),
              M
            );
          }, [S, b, y, w, eu(v)]);
          const T = g == null ? void 0 : g.props.classes;
          C = E.useMemo(() => Ab(C, T, y), [C, eu(T), y]);
          {
            let _;
            try {
              _ =
                f !== void 0
                  ? (N =
                      (x = w.components) === null || x === void 0
                        ? void 0
                        : x[f]) === null || N === void 0
                    ? void 0
                    : N.styleOverrides
                  : void 0;
            } catch {}
            const I = E.useMemo(() => {
              if (!_) return;
              const B = {};
              for (const M in _) {
                const U = _[M];
                U instanceof Object &&
                  (B[M] = b(
                    typeof U == "function"
                      ? U(
                          Object.assign(
                            {
                              theme: w,
                              ownerState: g == null ? void 0 : g.ownerState,
                            },
                            g == null ? void 0 : g.props,
                          ),
                        )
                      : U,
                  ));
              }
              return B;
            }, [
              _ === void 0 ? void 0 : JSON.stringify(_),
              eu(g == null ? void 0 : g.props),
              eu(g == null ? void 0 : g.ownerState),
              b,
            ]);
            C = E.useMemo(() => Ab(C, I, y), [C, I, y]);
          }
          return { classes: C, theme: w, css: b, cx: y };
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
  const uR = E.createContext(void 0);
  function cR() {
    return E.useContext(uR);
  }
  function Mb(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var Lb =
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
  function dR(e) {
    const { useTheme: t, cache: n } = e,
      { makeStyles: r } = $b({ useTheme: t, cache: n });
    function o(i, a, s) {
      const l =
          typeof i == "string"
            ? (() => {
                const v = i,
                  g = function (x) {
                    var { children: N } = x,
                      w = Lb(x, ["children"]);
                    return E.createElement(v, w, N);
                  };
                return Object.defineProperty(g, "name", { value: Mb(v) }), g;
              })()
            : i,
        c = (() => {
          {
            const { name: v } = s ?? {};
            if (v !== void 0)
              return typeof v != "object" ? v : Object.keys(v)[0];
          }
          {
            const v = l.displayName;
            if (typeof v == "string" && v !== "") return v;
          }
          {
            const { name: v } = l;
            if (v) return v;
          }
        })(),
        f = r(Object.assign(Object.assign({}, s), { name: c }))(
          typeof a == "function" ? (v, g, x) => Bb(a(v, g, x)) : Bb(a),
        );
      function p(v) {
        for (const g in v) if (g !== "root") return !0;
        return !1;
      }
      const h = E.forwardRef(function (v, g) {
        const { className: x, classes: N } = v,
          w = Lb(v, ["className", "classes"]),
          { classes: b, cx: y } = f(v, { props: v });
        return ie.createElement(
          l,
          Object.assign(
            { ref: g, className: p(b) ? x : y(b.root, x) },
            typeof i == "string" ? {} : { classes: b },
            w,
          ),
        );
      });
      return (
        c !== void 0 &&
          ((h.displayName = `${Mb(c)}WithStyles`),
          Object.defineProperty(h, "name", { value: h.displayName })),
        h
      );
    }
    return { withStyles: o };
  }
  function Bb(e) {
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
  function fR(e) {
    return Object.assign(Object.assign({}, $b(e)), dR(e));
  }
  const {
      makeStyles: IR,
      withStyles: pR,
      useStyles: PR,
    } = fR({ useTheme: Vi }),
    hR = pR(ey, { secondaryAction: { paddingRight: "120px" } });
  function mR({ todo: e, todoActions: t, draftTodoActions: n }) {
    return ce(hR, {
      children: [
        R(_l, {
          inset: !0,
          children: R(Nl, {
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
          children: R(Nl, {
            style: { width: "100%" },
            placeholder: "lps?",
            size: "small",
            value: e.data.price,
            onChange: (r) => {
              n.setDraftTodoPrice(e, r.target.value);
            },
          }),
        }),
        ce(sf, {
          children: [
            R(Tl, {
              variant: "outlined",
              size: "small",
              onClick: async () => {
                await t.saveTodo(e), n.deleteDraftTodo(e);
              },
              children: "Save",
            }),
            R(vl, {
              edge: "end",
              size: "small",
              onClick: () => {
                n.deleteDraftTodo(e);
              },
              children: R(Wf, {}),
            }),
          ],
        }),
      ],
    });
  }
  function gR(e, t) {
    ie.useEffect(() => {
      const n = setTimeout(() => {
        e();
      }, t);
      return () => clearTimeout(n);
    }, [e, t]);
  }
  function yR(e, t) {
    const [n, r] = ie.useState(!1);
    return (
      gR(() => {
        e && r(!0);
      }, [t]),
      ie.useEffect(() => {
        e || r(!1);
      }, [e]),
      n
    );
  }
  function bR() {
    const { loading: e, todos: t, ...n } = Y_(),
      { draftTodos: r, ...o } = nR(),
      i = yR(e, 200);
    return ce(tf, {
      className: "main-container",
      maxWidth: "sm",
      children: [
        e
          ? i
            ? R(f3, {})
            : null
          : ce("div", {
              className: "todo-items-container",
              children: [
                R(Jt, {
                  component: "p",
                  variant: "h5",
                  children: `You have ${t.length} To-Do Item${
                    t.length === 1 ? "" : "s"
                  }`,
                }),
                R(Tl, {
                  variant: "contained",
                  color: "primary",
                  startIcon: R(Rb, {}),
                  onClick: () => o.createDraftTodo(),
                  children: "Add To-Do",
                }),
                ce(Q0, {
                  style: { width: "100%" },
                  children: [
                    t.map((a) => R(tR, { todo: a, todoActions: n }, Yl(a))),
                    r.map((a) =>
                      R(
                        mR,
                        { todo: a, todoActions: n, draftTodoActions: o },
                        Yl(a),
                      ),
                    ),
                  ],
                }),
              ],
            }),
        R(N_, {}),
      ],
    });
  }
  const zb = {
      green: { ...Cr, 500: "#09804C", A400: "#B9EACD" },
      purple: { ...kr, 500: "#6200EE", A400: "#9795F9" },
      orange: bo,
      red: xr,
      blue: Er,
    },
    vR = { palette: { primary: zb.green, secondary: zb.green } },
    wR = p0(vR);
  function SR({ children: e }) {
    return R(q2, {
      injectFirst: !0,
      children: R(bx, { theme: wR, children: e }),
    });
  }
  function xR() {
    return R(Jt, {
      className: "app-bar-title",
      component: "h1",
      variant: "h5",
      children: "Caja Chica Area Ingenieria de Software",
    });
  }
  const { appId: kR } = zf;
  function ER() {
    return R(SR, { children: R(v_, { appId: kR, children: R(CR, {}) }) });
  }
  function CR() {
    const { currentUser: e, logOut: t } = ql();
    return ce("div", {
      className: "App",
      children: [
        R(KE, {
          position: "sticky",
          children: ce(uO, {
            children: [
              R(xR, {}),
              e
                ? R(Tl, {
                    variant: "contained",
                    color: "secondary",
                    onClick: async () => {
                      await t();
                    },
                    children: R(Jt, { variant: "button", children: "Log Out" }),
                  })
                : null,
            ],
          }),
        }),
        e ? R(bR, {}) : R(F_, {}),
      ],
    });
  }
  const OR = "modulepreload",
    TR = function (e) {
      return "/caja-chica/" + e;
    },
    Db = {},
    _R = function (e, t, n) {
      if (!t || t.length === 0) return e();
      const r = document.getElementsByTagName("link");
      return Promise.all(
        t.map((o) => {
          if (((o = TR(o)), o in Db)) return;
          Db[o] = !0;
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
            ((s.rel = i ? "stylesheet" : OR),
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
    RR = (e) => {
      e &&
        e instanceof Function &&
        _R(() => import("./web-vitals-7b71ae84.js"), []).then(
          ({ getCLS: t, getFID: n, getFCP: r, getLCP: o, getTTFB: i }) => {
            t(e), n(e), r(e), o(e), i(e);
          },
        );
    };
  dg(document.getElementById("root")).render(
    R(ie.StrictMode, { children: R(ER, {}) }),
  ),
    RR();
})();
