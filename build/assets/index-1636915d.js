(async () => {
  function P1(e, t) {
    for (var r = 0; r < t.length; r++) {
      const n = t[r];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const o in n)
          if (o !== "default" && !(o in e)) {
            const i = Object.getOwnPropertyDescriptor(n, o);
            i &&
              Object.defineProperty(
                e,
                o,
                i.get ? i : { enumerable: !0, get: () => n[o] },
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
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
      r(n);
    new MutationObserver((n) => {
      for (const o of n)
        if (o.type === "childList")
          for (const i of o.addedNodes)
            i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(n) {
      const o = {};
      return (
        n.integrity && (o.integrity = n.integrity),
        n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : n.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function r(n) {
      if (n.ep) return;
      n.ep = !0;
      const o = t(n);
      fetch(n.href, o);
    }
  })();
  function Fp(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function jp(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
      var r = function n() {
        if (this instanceof n) {
          var o = [null];
          o.push.apply(o, arguments);
          var i = Function.bind.apply(t, o);
          return new i();
        }
        return t.apply(this, arguments);
      };
      r.prototype = t.prototype;
    } else r = {};
    return (
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          r,
          n,
          o.get
            ? o
            : {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              },
        );
      }),
      r
    );
  }
  var ai = {},
    $1 = {
      get exports() {
        return ai;
      },
      set exports(e) {
        ai = e;
      },
    },
    Ia = {},
    S = {},
    M1 = {
      get exports() {
        return S;
      },
      set exports(e) {
        S = e;
      },
    },
    we = {},
    si = Symbol.for("react.element"),
    L1 = Symbol.for("react.portal"),
    B1 = Symbol.for("react.fragment"),
    z1 = Symbol.for("react.strict_mode"),
    F1 = Symbol.for("react.profiler"),
    j1 = Symbol.for("react.provider"),
    U1 = Symbol.for("react.context"),
    D1 = Symbol.for("react.forward_ref"),
    W1 = Symbol.for("react.suspense"),
    V1 = Symbol.for("react.memo"),
    H1 = Symbol.for("react.lazy"),
    Up = Symbol.iterator;
  function q1(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Up && e[Up]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Dp = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Wp = Object.assign,
    Vp = {};
  function Yn(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Vp),
      (this.updater = r || Dp);
  }
  (Yn.prototype.isReactComponent = {}),
    (Yn.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (Yn.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  function Hp() {}
  Hp.prototype = Yn.prototype;
  function Mu(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Vp),
      (this.updater = r || Dp);
  }
  var Lu = (Mu.prototype = new Hp());
  (Lu.constructor = Mu), Wp(Lu, Yn.prototype), (Lu.isPureReactComponent = !0);
  var qp = Array.isArray,
    Gp = Object.prototype.hasOwnProperty,
    Bu = { current: null },
    Kp = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qp(e, t, r) {
    var n,
      o = {},
      i = null,
      a = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        Gp.call(t, n) && !Kp.hasOwnProperty(n) && (o[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1) o.children = r;
    else if (1 < s) {
      for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
      o.children = l;
    }
    if (e && e.defaultProps)
      for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n]);
    return {
      $$typeof: si,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: Bu.current,
    };
  }
  function G1(e, t) {
    return {
      $$typeof: si,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function zu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === si;
  }
  function K1(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var Xp = /\/+/g;
  function Fu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? K1("" + e.key)
      : t.toString(36);
  }
  function Pa(e, t, r, n, o) {
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
            case si:
            case L1:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (o = o(a)),
        (e = n === "" ? "." + Fu(a, 0) : n),
        qp(o)
          ? ((r = ""),
            e != null && (r = e.replace(Xp, "$&/") + "/"),
            Pa(o, t, r, "", function (u) {
              return u;
            }))
          : o != null &&
            (zu(o) &&
              (o = G1(
                o,
                r +
                  (!o.key || (a && a.key === o.key)
                    ? ""
                    : ("" + o.key).replace(Xp, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((a = 0), (n = n === "" ? "." : n + ":"), qp(e)))
      for (var s = 0; s < e.length; s++) {
        i = e[s];
        var l = n + Fu(i, s);
        a += Pa(i, t, r, l, o);
      }
    else if (((l = q1(e)), typeof l == "function"))
      for (e = l.call(e), s = 0; !(i = e.next()).done; )
        (i = i.value), (l = n + Fu(i, s++)), (a += Pa(i, t, r, l, o));
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
  function $a(e, t, r) {
    if (e == null) return e;
    var n = [],
      o = 0;
    return (
      Pa(e, n, "", "", function (i) {
        return t.call(r, i, o++);
      }),
      n
    );
  }
  function Q1(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var vt = { current: null },
    Ma = { transition: null },
    X1 = {
      ReactCurrentDispatcher: vt,
      ReactCurrentBatchConfig: Ma,
      ReactCurrentOwner: Bu,
    };
  (we.Children = {
    map: $a,
    forEach: function (e, t, r) {
      $a(
        e,
        function () {
          t.apply(this, arguments);
        },
        r,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        $a(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        $a(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!zu(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  }),
    (we.Component = Yn),
    (we.Fragment = B1),
    (we.Profiler = F1),
    (we.PureComponent = Mu),
    (we.StrictMode = z1),
    (we.Suspense = W1),
    (we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1),
    (we.cloneElement = function (e, t, r) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var n = Wp({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((i = t.ref), (a = Bu.current)),
          t.key !== void 0 && (o = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps;
        for (l in t)
          Gp.call(t, l) &&
            !Kp.hasOwnProperty(l) &&
            (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
      }
      var l = arguments.length - 2;
      if (l === 1) n.children = r;
      else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
        n.children = s;
      }
      return {
        $$typeof: si,
        type: e.type,
        key: o,
        ref: i,
        props: n,
        _owner: a,
      };
    }),
    (we.createContext = function (e) {
      return (
        (e = {
          $$typeof: U1,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: j1, _context: e }),
        (e.Consumer = e)
      );
    }),
    (we.createElement = Qp),
    (we.createFactory = function (e) {
      var t = Qp.bind(null, e);
      return (t.type = e), t;
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (e) {
      return { $$typeof: D1, render: e };
    }),
    (we.isValidElement = zu),
    (we.lazy = function (e) {
      return { $$typeof: H1, _payload: { _status: -1, _result: e }, _init: Q1 };
    }),
    (we.memo = function (e, t) {
      return { $$typeof: V1, type: e, compare: t === void 0 ? null : t };
    }),
    (we.startTransition = function (e) {
      var t = Ma.transition;
      Ma.transition = {};
      try {
        e();
      } finally {
        Ma.transition = t;
      }
    }),
    (we.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (we.useCallback = function (e, t) {
      return vt.current.useCallback(e, t);
    }),
    (we.useContext = function (e) {
      return vt.current.useContext(e);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (e) {
      return vt.current.useDeferredValue(e);
    }),
    (we.useEffect = function (e, t) {
      return vt.current.useEffect(e, t);
    }),
    (we.useId = function () {
      return vt.current.useId();
    }),
    (we.useImperativeHandle = function (e, t, r) {
      return vt.current.useImperativeHandle(e, t, r);
    }),
    (we.useInsertionEffect = function (e, t) {
      return vt.current.useInsertionEffect(e, t);
    }),
    (we.useLayoutEffect = function (e, t) {
      return vt.current.useLayoutEffect(e, t);
    }),
    (we.useMemo = function (e, t) {
      return vt.current.useMemo(e, t);
    }),
    (we.useReducer = function (e, t, r) {
      return vt.current.useReducer(e, t, r);
    }),
    (we.useRef = function (e) {
      return vt.current.useRef(e);
    }),
    (we.useState = function (e) {
      return vt.current.useState(e);
    }),
    (we.useSyncExternalStore = function (e, t, r) {
      return vt.current.useSyncExternalStore(e, t, r);
    }),
    (we.useTransition = function () {
      return vt.current.useTransition();
    }),
    (we.version = "18.2.0"),
    (function (e) {
      e.exports = we;
    })(M1);
  const me = Fp(S),
    La = P1({ __proto__: null, default: me }, [S]);
  var Y1 = S,
    J1 = Symbol.for("react.element"),
    Z1 = Symbol.for("react.fragment"),
    ew = Object.prototype.hasOwnProperty,
    tw =
      Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    rw = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Yp(e, t, r) {
    var n,
      o = {},
      i = null,
      a = null;
    r !== void 0 && (i = "" + r),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (n in t) ew.call(t, n) && !rw.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
    return {
      $$typeof: J1,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: tw.current,
    };
  }
  (Ia.Fragment = Z1),
    (Ia.jsx = Yp),
    (Ia.jsxs = Yp),
    (function (e) {
      e.exports = Ia;
    })($1);
  const Jp = ai.Fragment,
    T = ai.jsx,
    de = ai.jsxs,
    nw = Object.freeze(
      Object.defineProperty(
        { __proto__: null, Fragment: Jp, jsx: T, jsxs: de },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  var Jn = {},
    ow = {
      get exports() {
        return Jn;
      },
      set exports(e) {
        Jn = e;
      },
    },
    Pt = {},
    ju = {},
    iw = {
      get exports() {
        return ju;
      },
      set exports(e) {
        ju = e;
      },
    },
    Zp = {};
  (function (e) {
    function t(D, B) {
      var L = D.length;
      D.push(B);
      e: for (; 0 < L; ) {
        var O = (L - 1) >>> 1,
          M = D[O];
        if (0 < o(M, B)) (D[O] = B), (D[L] = M), (L = O);
        else break e;
      }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function n(D) {
      if (D.length === 0) return null;
      var B = D[0],
        L = D.pop();
      if (L !== B) {
        D[0] = L;
        e: for (var O = 0, M = D.length, j = M >>> 1; O < j; ) {
          var W = 2 * (O + 1) - 1,
            X = D[W],
            oe = W + 1,
            le = D[oe];
          if (0 > o(X, L))
            oe < M && 0 > o(le, X)
              ? ((D[O] = le), (D[oe] = L), (O = oe))
              : ((D[O] = X), (D[W] = L), (O = W));
          else if (oe < M && 0 > o(le, L)) (D[O] = le), (D[oe] = L), (O = oe);
          else break e;
        }
      }
      return B;
    }
    function o(D, B) {
      var L = D.sortIndex - B.sortIndex;
      return L !== 0 ? L : D.id - B.id;
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
      m = !1,
      g = !1,
      x = !1,
      R = typeof setTimeout == "function" ? setTimeout : null,
      b = typeof clearTimeout == "function" ? clearTimeout : null,
      y = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(D) {
      for (var B = r(u); B !== null; ) {
        if (B.callback === null) n(u);
        else if (B.startTime <= D)
          n(u), (B.sortIndex = B.expirationTime), t(l, B);
        else break;
        B = r(u);
      }
    }
    function k(D) {
      if (((x = !1), v(D), !g))
        if (r(l) !== null) (g = !0), Y(C);
        else {
          var B = r(u);
          B !== null && J(k, B.startTime - D);
        }
    }
    function C(D, B) {
      (g = !1), x && ((x = !1), b(I), (I = -1)), (m = !0);
      var L = h;
      try {
        for (
          v(B), f = r(l);
          f !== null && (!(f.expirationTime > B) || (D && !H()));

        ) {
          var O = f.callback;
          if (typeof O == "function") {
            (f.callback = null), (h = f.priorityLevel);
            var M = O(f.expirationTime <= B);
            (B = e.unstable_now()),
              typeof M == "function" ? (f.callback = M) : f === r(l) && n(l),
              v(B);
          } else n(l);
          f = r(l);
        }
        if (f !== null) var j = !0;
        else {
          var W = r(u);
          W !== null && J(k, W.startTime - B), (j = !1);
        }
        return j;
      } finally {
        (f = null), (h = L), (m = !1);
      }
    }
    var A = !1,
      N = null,
      I = -1,
      P = 5,
      z = -1;
    function H() {
      return !(e.unstable_now() - z < P);
    }
    function V() {
      if (N !== null) {
        var D = e.unstable_now();
        z = D;
        var B = !0;
        try {
          B = N(!0, D);
        } finally {
          B ? Q() : ((A = !1), (N = null));
        }
      } else A = !1;
    }
    var Q;
    if (typeof y == "function")
      Q = function () {
        y(V);
      };
    else if (typeof MessageChannel < "u") {
      var U = new MessageChannel(),
        K = U.port2;
      (U.port1.onmessage = V),
        (Q = function () {
          K.postMessage(null);
        });
    } else
      Q = function () {
        R(V, 0);
      };
    function Y(D) {
      (N = D), A || ((A = !0), Q());
    }
    function J(D, B) {
      I = R(function () {
        D(e.unstable_now());
      }, B);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (D) {
        D.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        g || m || ((g = !0), Y(C));
      }),
      (e.unstable_forceFrameRate = function (D) {
        0 > D || 125 < D
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (P = 0 < D ? Math.floor(1e3 / D) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return r(l);
      }),
      (e.unstable_next = function (D) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var B = 3;
            break;
          default:
            B = h;
        }
        var L = h;
        h = B;
        try {
          return D();
        } finally {
          h = L;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (D, B) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var L = h;
        h = D;
        try {
          return B();
        } finally {
          h = L;
        }
      }),
      (e.unstable_scheduleCallback = function (D, B, L) {
        var O = e.unstable_now();
        switch (
          (typeof L == "object" && L !== null
            ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? O + L : O))
            : (L = O),
          D)
        ) {
          case 1:
            var M = -1;
            break;
          case 2:
            M = 250;
            break;
          case 5:
            M = 1073741823;
            break;
          case 4:
            M = 1e4;
            break;
          default:
            M = 5e3;
        }
        return (
          (M = L + M),
          (D = {
            id: d++,
            callback: B,
            priorityLevel: D,
            startTime: L,
            expirationTime: M,
            sortIndex: -1,
          }),
          L > O
            ? ((D.sortIndex = L),
              t(u, D),
              r(l) === null &&
                D === r(u) &&
                (x ? (b(I), (I = -1)) : (x = !0), J(k, L - O)))
            : ((D.sortIndex = M), t(l, D), g || m || ((g = !0), Y(C))),
          D
        );
      }),
      (e.unstable_shouldYield = H),
      (e.unstable_wrapCallback = function (D) {
        var B = h;
        return function () {
          var L = h;
          h = B;
          try {
            return D.apply(this, arguments);
          } finally {
            h = L;
          }
        };
      });
  })(Zp),
    (function (e) {
      e.exports = Zp;
    })(iw);
  var eh = S,
    $t = ju;
  function G(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var th = new Set(),
    li = {};
  function yn(e, t) {
    Zn(e, t), Zn(e + "Capture", t);
  }
  function Zn(e, t) {
    for (li[e] = t, e = 0; e < t.length; e++) th.add(t[e]);
  }
  var Rr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Uu = Object.prototype.hasOwnProperty,
    aw =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    rh = {},
    nh = {};
  function sw(e) {
    return Uu.call(nh, e)
      ? !0
      : Uu.call(rh, e)
      ? !1
      : aw.test(e)
      ? (nh[e] = !0)
      : ((rh[e] = !0), !1);
  }
  function lw(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return n
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function uw(e, t, r, n) {
    if (t === null || typeof t > "u" || lw(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null)
      switch (r.type) {
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
  function wt(e, t, r, n, o, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = n),
      (this.attributeNamespace = o),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a);
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      st[e] = new wt(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      st[t] = new wt(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        st[e] = new wt(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      st[e] = new wt(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        st[e] = new wt(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      st[e] = new wt(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      st[e] = new wt(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      st[e] = new wt(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      st[e] = new wt(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Du = /[\-:]([a-z])/g;
  function Wu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Du, Wu);
      st[t] = new wt(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Du, Wu);
        st[t] = new wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Du, Wu);
      st[t] = new wt(
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
      st[e] = new wt(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (st.xlinkHref = new wt(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      st[e] = new wt(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Vu(e, t, r, n) {
    var o = st.hasOwnProperty(t) ? st[t] : null;
    (o !== null
      ? o.type !== 0
      : n ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (uw(t, r, o, n) && (r = null),
      n || o === null
        ? sw(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : o.mustUseProperty
        ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
        : ((t = o.attributeName),
          (n = o.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
  }
  var Ar = eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ba = Symbol.for("react.element"),
    eo = Symbol.for("react.portal"),
    to = Symbol.for("react.fragment"),
    Hu = Symbol.for("react.strict_mode"),
    qu = Symbol.for("react.profiler"),
    oh = Symbol.for("react.provider"),
    ih = Symbol.for("react.context"),
    Gu = Symbol.for("react.forward_ref"),
    Ku = Symbol.for("react.suspense"),
    Qu = Symbol.for("react.suspense_list"),
    Xu = Symbol.for("react.memo"),
    Wr = Symbol.for("react.lazy"),
    ah = Symbol.for("react.offscreen"),
    sh = Symbol.iterator;
  function ui(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (sh && e[sh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var De = Object.assign,
    Yu;
  function ci(e) {
    if (Yu === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        Yu = (t && t[1]) || "";
      }
    return (
      `
` +
      Yu +
      e
    );
  }
  var Ju = !1;
  function Zu(e, t) {
    if (!e || Ju) return "";
    Ju = !0;
    var r = Error.prepareStackTrace;
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
            var n = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            n = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          n = u;
        }
        e();
      }
    } catch (u) {
      if (u && n && typeof u.stack == "string") {
        for (
          var o = u.stack.split(`
`),
            i = n.stack.split(`
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
      (Ju = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? ci(e) : "";
  }
  function cw(e) {
    switch (e.tag) {
      case 5:
        return ci(e.type);
      case 16:
        return ci("Lazy");
      case 13:
        return ci("Suspense");
      case 19:
        return ci("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Zu(e.type, !1)), e;
      case 11:
        return (e = Zu(e.type.render, !1)), e;
      case 1:
        return (e = Zu(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ec(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case to:
        return "Fragment";
      case eo:
        return "Portal";
      case qu:
        return "Profiler";
      case Hu:
        return "StrictMode";
      case Ku:
        return "Suspense";
      case Qu:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ih:
          return (e.displayName || "Context") + ".Consumer";
        case oh:
          return (e._context.displayName || "Context") + ".Provider";
        case Gu:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Xu:
          return (
            (t = e.displayName || null), t !== null ? t : ec(e.type) || "Memo"
          );
        case Wr:
          (t = e._payload), (e = e._init);
          try {
            return ec(e(t));
          } catch {}
      }
    return null;
  }
  function dw(e) {
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
        return ec(t);
      case 8:
        return t === Hu ? "StrictMode" : "Mode";
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
  function Vr(e) {
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
  function lh(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function fw(e) {
    var t = lh(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var o = r.get,
        i = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (a) {
            (n = "" + a), i.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (a) {
            n = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function za(e) {
    e._valueTracker || (e._valueTracker = fw(e));
  }
  function uh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      n = "";
    return (
      e && (n = lh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Fa(e) {
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
  function tc(e, t) {
    var r = t.checked;
    return De({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function ch(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      n = t.checked != null ? t.checked : t.defaultChecked;
    (r = Vr(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function dh(e, t) {
    (t = t.checked), t != null && Vu(e, "checked", t, !1);
  }
  function rc(e, t) {
    dh(e, t);
    var r = Vr(t.value),
      n = t.type;
    if (r != null)
      n === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? nc(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && nc(e, t.type, Vr(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function fh(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var n = t.type;
      if (
        !(
          (n !== "submit" && n !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function nc(e, t, r) {
    (t !== "number" || Fa(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var di = Array.isArray;
  function ro(e, t, r, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
      for (r = 0; r < e.length; r++)
        (o = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== o && (e[r].selected = o),
          o && n && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Vr(r), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === r) {
          (e[o].selected = !0), n && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function oc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
    return De({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ph(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(G(92));
        if (di(r)) {
          if (1 < r.length) throw Error(G(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Vr(r) };
  }
  function hh(e, t) {
    var r = Vr(t.value),
      n = Vr(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = "" + n);
  }
  function mh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function gh(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ic(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? gh(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ja,
    bh = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, n, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, n, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ja = ja || document.createElement("div"),
            ja.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ja.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function fi(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var pi = {
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
    pw = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pi).forEach(function (e) {
    pw.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pi[t] = pi[e]);
    });
  });
  function yh(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (pi.hasOwnProperty(e) && pi[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function vh(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = r.indexOf("--") === 0,
          o = yh(r, t[r], n);
        r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
      }
  }
  var hw = De(
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
  function ac(e, t) {
    if (t) {
      if (hw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function sc(e, t) {
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
  var lc = null;
  function uc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var cc = null,
    no = null,
    oo = null;
  function wh(e) {
    if ((e = Mi(e))) {
      if (typeof cc != "function") throw Error(G(280));
      var t = e.stateNode;
      t && ((t = us(t)), cc(e.stateNode, e.type, t));
    }
  }
  function Sh(e) {
    no ? (oo ? oo.push(e) : (oo = [e])) : (no = e);
  }
  function xh() {
    if (no) {
      var e = no,
        t = oo;
      if (((oo = no = null), wh(e), t)) for (e = 0; e < t.length; e++) wh(t[e]);
    }
  }
  function kh(e, t) {
    return e(t);
  }
  function Eh() {}
  var dc = !1;
  function Ch(e, t, r) {
    if (dc) return e(t, r);
    dc = !0;
    try {
      return kh(e, t, r);
    } finally {
      (dc = !1), (no !== null || oo !== null) && (Eh(), xh());
    }
  }
  function hi(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = us(r);
    if (n === null) return null;
    r = n[t];
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
        (n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(G(231, t, typeof r));
    return r;
  }
  var fc = !1;
  if (Rr)
    try {
      var mi = {};
      Object.defineProperty(mi, "passive", {
        get: function () {
          fc = !0;
        },
      }),
        window.addEventListener("test", mi, mi),
        window.removeEventListener("test", mi, mi);
    } catch {
      fc = !1;
    }
  function mw(e, t, r, n, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, u);
    } catch (d) {
      this.onError(d);
    }
  }
  var gi = !1,
    Ua = null,
    Da = !1,
    pc = null,
    gw = {
      onError: function (e) {
        (gi = !0), (Ua = e);
      },
    };
  function bw(e, t, r, n, o, i, a, s, l) {
    (gi = !1), (Ua = null), mw.apply(gw, arguments);
  }
  function yw(e, t, r, n, o, i, a, s, l) {
    if ((bw.apply(this, arguments), gi)) {
      if (gi) {
        var u = Ua;
        (gi = !1), (Ua = null);
      } else throw Error(G(198));
      Da || ((Da = !0), (pc = u));
    }
  }
  function vn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Oh(e) {
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
  function Nh(e) {
    if (vn(e) !== e) throw Error(G(188));
  }
  function vw(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = vn(e)), t === null)) throw Error(G(188));
      return t !== e ? null : e;
    }
    for (var r = e, n = t; ; ) {
      var o = r.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((n = o.return), n !== null)) {
          r = n;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === r) return Nh(o), e;
          if (i === n) return Nh(o), t;
          i = i.sibling;
        }
        throw Error(G(188));
      }
      if (r.return !== n.return) (r = o), (n = i);
      else {
        for (var a = !1, s = o.child; s; ) {
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) {
          for (s = i.child; s; ) {
            if (s === r) {
              (a = !0), (r = i), (n = o);
              break;
            }
            if (s === n) {
              (a = !0), (n = i), (r = o);
              break;
            }
            s = s.sibling;
          }
          if (!a) throw Error(G(189));
        }
      }
      if (r.alternate !== n) throw Error(G(190));
    }
    if (r.tag !== 3) throw Error(G(188));
    return r.stateNode.current === r ? e : t;
  }
  function Th(e) {
    return (e = vw(e)), e !== null ? Rh(e) : null;
  }
  function Rh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Rh(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ah = $t.unstable_scheduleCallback,
    _h = $t.unstable_cancelCallback,
    ww = $t.unstable_shouldYield,
    Sw = $t.unstable_requestPaint,
    Xe = $t.unstable_now,
    xw = $t.unstable_getCurrentPriorityLevel,
    hc = $t.unstable_ImmediatePriority,
    Ih = $t.unstable_UserBlockingPriority,
    Wa = $t.unstable_NormalPriority,
    kw = $t.unstable_LowPriority,
    Ph = $t.unstable_IdlePriority,
    Va = null,
    mr = null;
  function Ew(e) {
    if (mr && typeof mr.onCommitFiberRoot == "function")
      try {
        mr.onCommitFiberRoot(Va, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var or = Math.clz32 ? Math.clz32 : Nw,
    Cw = Math.log,
    Ow = Math.LN2;
  function Nw(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Cw(e) / Ow) | 0)) | 0;
  }
  var Ha = 64,
    qa = 4194304;
  function bi(e) {
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
  function Ga(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      a = r & 268435455;
    if (a !== 0) {
      var s = a & ~o;
      s !== 0 ? (n = bi(s)) : ((i &= a), i !== 0 && (n = bi(i)));
    } else (a = r & ~o), a !== 0 ? (n = bi(a)) : i !== 0 && (n = bi(i));
    if (n === 0) return 0;
    if (
      t !== 0 &&
      t !== n &&
      !(t & o) &&
      ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= n; 0 < t; )
        (r = 31 - or(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
    return n;
  }
  function Tw(e, t) {
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
  function Rw(e, t) {
    for (
      var r = e.suspendedLanes,
        n = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var a = 31 - or(i),
        s = 1 << a,
        l = o[a];
      l === -1
        ? (!(s & r) || s & n) && (o[a] = Tw(s, t))
        : l <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  }
  function mc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function $h() {
    var e = Ha;
    return (Ha <<= 1), !(Ha & 4194240) && (Ha = 64), e;
  }
  function gc(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function yi(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - or(t)),
      (e[t] = r);
  }
  function Aw(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var o = 31 - or(r),
        i = 1 << o;
      (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
    }
  }
  function bc(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var n = 31 - or(r),
        o = 1 << n;
      (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
    }
  }
  var _e = 0;
  function Mh(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Lh,
    yc,
    Bh,
    zh,
    Fh,
    vc = !1,
    Ka = [],
    Hr = null,
    qr = null,
    Gr = null,
    vi = new Map(),
    wi = new Map(),
    Kr = [],
    _w =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function jh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hr = null;
        break;
      case "dragenter":
      case "dragleave":
        qr = null;
        break;
      case "mouseover":
      case "mouseout":
        Gr = null;
        break;
      case "pointerover":
      case "pointerout":
        vi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wi.delete(t.pointerId);
    }
  }
  function Si(e, t, r, n, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = Mi(t)), t !== null && yc(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Iw(e, t, r, n, o) {
    switch (t) {
      case "focusin":
        return (Hr = Si(Hr, e, t, r, n, o)), !0;
      case "dragenter":
        return (qr = Si(qr, e, t, r, n, o)), !0;
      case "mouseover":
        return (Gr = Si(Gr, e, t, r, n, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return vi.set(i, Si(vi.get(i) || null, e, t, r, n, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), wi.set(i, Si(wi.get(i) || null, e, t, r, n, o)), !0
        );
    }
    return !1;
  }
  function Uh(e) {
    var t = wn(e.target);
    if (t !== null) {
      var r = vn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Oh(r)), t !== null)) {
            (e.blockedOn = t),
              Fh(e.priority, function () {
                Bh(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Qa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Sc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var n = new r.constructor(r.type, r);
        (lc = n), r.target.dispatchEvent(n), (lc = null);
      } else return (t = Mi(r)), t !== null && yc(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Dh(e, t, r) {
    Qa(e) && r.delete(t);
  }
  function Pw() {
    (vc = !1),
      Hr !== null && Qa(Hr) && (Hr = null),
      qr !== null && Qa(qr) && (qr = null),
      Gr !== null && Qa(Gr) && (Gr = null),
      vi.forEach(Dh),
      wi.forEach(Dh);
  }
  function xi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      vc ||
        ((vc = !0),
        $t.unstable_scheduleCallback($t.unstable_NormalPriority, Pw)));
  }
  function ki(e) {
    function t(o) {
      return xi(o, e);
    }
    if (0 < Ka.length) {
      xi(Ka[0], e);
      for (var r = 1; r < Ka.length; r++) {
        var n = Ka[r];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    for (
      Hr !== null && xi(Hr, e),
        qr !== null && xi(qr, e),
        Gr !== null && xi(Gr, e),
        vi.forEach(t),
        wi.forEach(t),
        r = 0;
      r < Kr.length;
      r++
    )
      (n = Kr[r]), n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Kr.length && ((r = Kr[0]), r.blockedOn === null); )
      Uh(r), r.blockedOn === null && Kr.shift();
  }
  var io = Ar.ReactCurrentBatchConfig,
    Xa = !0;
  function $w(e, t, r, n) {
    var o = _e,
      i = io.transition;
    io.transition = null;
    try {
      (_e = 1), wc(e, t, r, n);
    } finally {
      (_e = o), (io.transition = i);
    }
  }
  function Mw(e, t, r, n) {
    var o = _e,
      i = io.transition;
    io.transition = null;
    try {
      (_e = 4), wc(e, t, r, n);
    } finally {
      (_e = o), (io.transition = i);
    }
  }
  function wc(e, t, r, n) {
    if (Xa) {
      var o = Sc(e, t, r, n);
      if (o === null) zc(e, t, n, Ya, r), jh(e, n);
      else if (Iw(o, e, t, r, n)) n.stopPropagation();
      else if ((jh(e, n), t & 4 && -1 < _w.indexOf(e))) {
        for (; o !== null; ) {
          var i = Mi(o);
          if (
            (i !== null && Lh(i),
            (i = Sc(e, t, r, n)),
            i === null && zc(e, t, n, Ya, r),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && n.stopPropagation();
      } else zc(e, t, n, null, r);
    }
  }
  var Ya = null;
  function Sc(e, t, r, n) {
    if (((Ya = null), (e = uc(n)), (e = wn(e)), e !== null))
      if (((t = vn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Oh(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ya = e), null;
  }
  function Wh(e) {
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
        switch (xw()) {
          case hc:
            return 1;
          case Ih:
            return 4;
          case Wa:
          case kw:
            return 16;
          case Ph:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qr = null,
    xc = null,
    Ja = null;
  function Vh() {
    if (Ja) return Ja;
    var e,
      t = xc,
      r = t.length,
      n,
      o = "value" in Qr ? Qr.value : Qr.textContent,
      i = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++);
    var a = r - e;
    for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
    return (Ja = o.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Za(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function es() {
    return !0;
  }
  function Hh() {
    return !1;
  }
  function Mt(e) {
    function t(r, n, o, i, a) {
      (this._reactName = r),
        (this._targetInst = o),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? es
          : Hh),
        (this.isPropagationStopped = Hh),
        this
      );
    }
    return (
      De(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = es));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = es));
        },
        persist: function () {},
        isPersistent: es,
      }),
      t
    );
  }
  var ao = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    kc = Mt(ao),
    Ei = De({}, ao, { view: 0, detail: 0 }),
    Lw = Mt(Ei),
    Ec,
    Cc,
    Ci,
    ts = De({}, Ei, {
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
      getModifierState: Nc,
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
          : (e !== Ci &&
              (Ci && e.type === "mousemove"
                ? ((Ec = e.screenX - Ci.screenX), (Cc = e.screenY - Ci.screenY))
                : (Cc = Ec = 0),
              (Ci = e)),
            Ec);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Cc;
      },
    }),
    qh = Mt(ts),
    Bw = De({}, ts, { dataTransfer: 0 }),
    zw = Mt(Bw),
    Fw = De({}, Ei, { relatedTarget: 0 }),
    Oc = Mt(Fw),
    jw = De({}, ao, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uw = Mt(jw),
    Dw = De({}, ao, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ww = Mt(Dw),
    Vw = De({}, ao, { data: 0 }),
    Gh = Mt(Vw),
    Hw = {
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
    qw = {
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
    Gw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Kw(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Gw[e])
      ? !!t[e]
      : !1;
  }
  function Nc() {
    return Kw;
  }
  var Qw = De({}, Ei, {
      key: function (e) {
        if (e.key) {
          var t = Hw[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Za(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? qw[e.keyCode] || "Unidentified"
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
      getModifierState: Nc,
      charCode: function (e) {
        return e.type === "keypress" ? Za(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Za(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Xw = Mt(Qw),
    Yw = De({}, ts, {
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
    Kh = Mt(Yw),
    Jw = De({}, Ei, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nc,
    }),
    Zw = Mt(Jw),
    eS = De({}, ao, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tS = Mt(eS),
    rS = De({}, ts, {
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
    nS = Mt(rS),
    oS = [9, 13, 27, 32],
    Tc = Rr && "CompositionEvent" in window,
    Oi = null;
  Rr && "documentMode" in document && (Oi = document.documentMode);
  var iS = Rr && "TextEvent" in window && !Oi,
    Qh = Rr && (!Tc || (Oi && 8 < Oi && 11 >= Oi)),
    Xh = String.fromCharCode(32),
    Yh = !1;
  function Jh(e, t) {
    switch (e) {
      case "keyup":
        return oS.indexOf(t.keyCode) !== -1;
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
  function Zh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var so = !1;
  function aS(e, t) {
    switch (e) {
      case "compositionend":
        return Zh(t);
      case "keypress":
        return t.which !== 32 ? null : ((Yh = !0), Xh);
      case "textInput":
        return (e = t.data), e === Xh && Yh ? null : e;
      default:
        return null;
    }
  }
  function sS(e, t) {
    if (so)
      return e === "compositionend" || (!Tc && Jh(e, t))
        ? ((e = Vh()), (Ja = xc = Qr = null), (so = !1), e)
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
        return Qh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lS = {
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
  function em(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lS[e.type] : t === "textarea";
  }
  function tm(e, t, r, n) {
    Sh(n),
      (t = as(t, "onChange")),
      0 < t.length &&
        ((r = new kc("onChange", "change", null, r, n)),
        e.push({ event: r, listeners: t }));
  }
  var Ni = null,
    Ti = null;
  function uS(e) {
    vm(e, 0);
  }
  function rs(e) {
    var t = po(e);
    if (uh(t)) return e;
  }
  function cS(e, t) {
    if (e === "change") return t;
  }
  var rm = !1;
  if (Rr) {
    var Rc;
    if (Rr) {
      var Ac = "oninput" in document;
      if (!Ac) {
        var nm = document.createElement("div");
        nm.setAttribute("oninput", "return;"),
          (Ac = typeof nm.oninput == "function");
      }
      Rc = Ac;
    } else Rc = !1;
    rm = Rc && (!document.documentMode || 9 < document.documentMode);
  }
  function om() {
    Ni && (Ni.detachEvent("onpropertychange", im), (Ti = Ni = null));
  }
  function im(e) {
    if (e.propertyName === "value" && rs(Ti)) {
      var t = [];
      tm(t, Ti, e, uc(e)), Ch(uS, t);
    }
  }
  function dS(e, t, r) {
    e === "focusin"
      ? (om(), (Ni = t), (Ti = r), Ni.attachEvent("onpropertychange", im))
      : e === "focusout" && om();
  }
  function fS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return rs(Ti);
  }
  function pS(e, t) {
    if (e === "click") return rs(t);
  }
  function hS(e, t) {
    if (e === "input" || e === "change") return rs(t);
  }
  function mS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ir = typeof Object.is == "function" ? Object.is : mS;
  function Ri(e, t) {
    if (ir(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
      var o = r[n];
      if (!Uu.call(t, o) || !ir(e[o], t[o])) return !1;
    }
    return !0;
  }
  function am(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sm(e, t) {
    var r = am(e);
    e = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = am(r);
    }
  }
  function lm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? lm(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function um() {
    for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Fa(e.document);
    }
    return t;
  }
  function _c(e) {
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
  function gS(e) {
    var t = um(),
      r = e.focusedElem,
      n = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      lm(r.ownerDocument.documentElement, r)
    ) {
      if (n !== null && _c(r)) {
        if (
          ((t = n.start),
          (e = n.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = r.textContent.length,
            i = Math.min(n.start, o);
          (n = n.end === void 0 ? i : Math.min(n.end, o)),
            !e.extend && i > n && ((o = n), (n = i), (i = o)),
            (o = sm(r, i));
          var a = sm(r, n);
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
            i > n
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var bS = Rr && "documentMode" in document && 11 >= document.documentMode,
    lo = null,
    Ic = null,
    Ai = null,
    Pc = !1;
  function cm(e, t, r) {
    var n =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Pc ||
      lo == null ||
      lo !== Fa(n) ||
      ((n = lo),
      "selectionStart" in n && _c(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Ai && Ri(Ai, n)) ||
        ((Ai = n),
        (n = as(Ic, "onSelect")),
        0 < n.length &&
          ((t = new kc("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: n }),
          (t.target = lo))));
  }
  function ns(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var uo = {
      animationend: ns("Animation", "AnimationEnd"),
      animationiteration: ns("Animation", "AnimationIteration"),
      animationstart: ns("Animation", "AnimationStart"),
      transitionend: ns("Transition", "TransitionEnd"),
    },
    $c = {},
    dm = {};
  Rr &&
    ((dm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete uo.animationend.animation,
      delete uo.animationiteration.animation,
      delete uo.animationstart.animation),
    "TransitionEvent" in window || delete uo.transitionend.transition);
  function os(e) {
    if ($c[e]) return $c[e];
    if (!uo[e]) return e;
    var t = uo[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in dm) return ($c[e] = t[r]);
    return e;
  }
  var fm = os("animationend"),
    pm = os("animationiteration"),
    hm = os("animationstart"),
    mm = os("transitionend"),
    gm = new Map(),
    bm =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Xr(e, t) {
    gm.set(e, t), yn(t, [e]);
  }
  for (var Mc = 0; Mc < bm.length; Mc++) {
    var Lc = bm[Mc],
      yS = Lc.toLowerCase(),
      vS = Lc[0].toUpperCase() + Lc.slice(1);
    Xr(yS, "on" + vS);
  }
  Xr(fm, "onAnimationEnd"),
    Xr(pm, "onAnimationIteration"),
    Xr(hm, "onAnimationStart"),
    Xr("dblclick", "onDoubleClick"),
    Xr("focusin", "onFocus"),
    Xr("focusout", "onBlur"),
    Xr(mm, "onTransitionEnd"),
    Zn("onMouseEnter", ["mouseout", "mouseover"]),
    Zn("onMouseLeave", ["mouseout", "mouseover"]),
    Zn("onPointerEnter", ["pointerout", "pointerover"]),
    Zn("onPointerLeave", ["pointerout", "pointerover"]),
    yn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    yn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    yn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    yn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    yn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var _i =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wS = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(_i),
    );
  function ym(e, t, r) {
    var n = e.type || "unknown-event";
    (e.currentTarget = r), yw(n, t, void 0, e), (e.currentTarget = null);
  }
  function vm(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
        o = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var a = n.length - 1; 0 <= a; a--) {
            var s = n[a],
              l = s.instance,
              u = s.currentTarget;
            if (((s = s.listener), l !== i && o.isPropagationStopped()))
              break e;
            ym(o, s, u), (i = l);
          }
        else
          for (a = 0; a < n.length; a++) {
            if (
              ((s = n[a]),
              (l = s.instance),
              (u = s.currentTarget),
              (s = s.listener),
              l !== i && o.isPropagationStopped())
            )
              break e;
            ym(o, s, u), (i = l);
          }
      }
    }
    if (Da) throw ((e = pc), (Da = !1), (pc = null), e);
  }
  function Be(e, t) {
    var r = t[Vc];
    r === void 0 && (r = t[Vc] = new Set());
    var n = e + "__bubble";
    r.has(n) || (wm(t, e, 2, !1), r.add(n));
  }
  function Bc(e, t, r) {
    var n = 0;
    t && (n |= 4), wm(r, e, n, t);
  }
  var is = "_reactListening" + Math.random().toString(36).slice(2);
  function Ii(e) {
    if (!e[is]) {
      (e[is] = !0),
        th.forEach(function (r) {
          r !== "selectionchange" && (wS.has(r) || Bc(r, !1, e), Bc(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[is] || ((t[is] = !0), Bc("selectionchange", !1, t));
    }
  }
  function wm(e, t, r, n) {
    switch (Wh(t)) {
      case 1:
        var o = $w;
        break;
      case 4:
        o = Mw;
        break;
      default:
        o = wc;
    }
    (r = o.bind(null, t, r, e)),
      (o = void 0),
      !fc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      n
        ? o !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: o })
          : e.addEventListener(t, r, !0)
        : o !== void 0
        ? e.addEventListener(t, r, { passive: o })
        : e.addEventListener(t, r, !1);
  }
  function zc(e, t, r, n, o) {
    var i = n;
    if (!(t & 1) && !(t & 2) && n !== null)
      e: for (;;) {
        if (n === null) return;
        var a = n.tag;
        if (a === 3 || a === 4) {
          var s = n.stateNode.containerInfo;
          if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
          if (a === 4)
            for (a = n.return; a !== null; ) {
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
            if (((a = wn(s)), a === null)) return;
            if (((l = a.tag), l === 5 || l === 6)) {
              n = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
    Ch(function () {
      var u = i,
        d = uc(r),
        f = [];
      e: {
        var h = gm.get(e);
        if (h !== void 0) {
          var m = kc,
            g = e;
          switch (e) {
            case "keypress":
              if (Za(r) === 0) break e;
            case "keydown":
            case "keyup":
              m = Xw;
              break;
            case "focusin":
              (g = "focus"), (m = Oc);
              break;
            case "focusout":
              (g = "blur"), (m = Oc);
              break;
            case "beforeblur":
            case "afterblur":
              m = Oc;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = qh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = zw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = Zw;
              break;
            case fm:
            case pm:
            case hm:
              m = Uw;
              break;
            case mm:
              m = tS;
              break;
            case "scroll":
              m = Lw;
              break;
            case "wheel":
              m = nS;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Ww;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Kh;
          }
          var x = (t & 4) !== 0,
            R = !x && e === "scroll",
            b = x ? (h !== null ? h + "Capture" : null) : h;
          x = [];
          for (var y = u, v; y !== null; ) {
            v = y;
            var k = v.stateNode;
            if (
              (v.tag === 5 &&
                k !== null &&
                ((v = k),
                b !== null &&
                  ((k = hi(y, b)), k != null && x.push(Pi(y, k, v)))),
              R)
            )
              break;
            y = y.return;
          }
          0 < x.length &&
            ((h = new m(h, g, null, r, d)), f.push({ event: h, listeners: x }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (m = e === "mouseout" || e === "pointerout"),
            h &&
              r !== lc &&
              (g = r.relatedTarget || r.fromElement) &&
              (wn(g) || g[_r]))
          )
            break e;
          if (
            (m || h) &&
            ((h =
              d.window === d
                ? d
                : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            m
              ? ((g = r.relatedTarget || r.toElement),
                (m = u),
                (g = g ? wn(g) : null),
                g !== null &&
                  ((R = vn(g)), g !== R || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((m = null), (g = u)),
            m !== g)
          ) {
            if (
              ((x = qh),
              (k = "onMouseLeave"),
              (b = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((x = Kh),
                (k = "onPointerLeave"),
                (b = "onPointerEnter"),
                (y = "pointer")),
              (R = m == null ? h : po(m)),
              (v = g == null ? h : po(g)),
              (h = new x(k, y + "leave", m, r, d)),
              (h.target = R),
              (h.relatedTarget = v),
              (k = null),
              wn(d) === u &&
                ((x = new x(b, y + "enter", g, r, d)),
                (x.target = v),
                (x.relatedTarget = R),
                (k = x)),
              (R = k),
              m && g)
            )
              t: {
                for (x = m, b = g, y = 0, v = x; v; v = co(v)) y++;
                for (v = 0, k = b; k; k = co(k)) v++;
                for (; 0 < y - v; ) (x = co(x)), y--;
                for (; 0 < v - y; ) (b = co(b)), v--;
                for (; y--; ) {
                  if (x === b || (b !== null && x === b.alternate)) break t;
                  (x = co(x)), (b = co(b));
                }
                x = null;
              }
            else x = null;
            m !== null && Sm(f, h, m, x, !1),
              g !== null && R !== null && Sm(f, R, g, x, !0);
          }
        }
        e: {
          if (
            ((h = u ? po(u) : window),
            (m = h.nodeName && h.nodeName.toLowerCase()),
            m === "select" || (m === "input" && h.type === "file"))
          )
            var C = cS;
          else if (em(h))
            if (rm) C = hS;
            else {
              C = fS;
              var A = dS;
            }
          else
            (m = h.nodeName) &&
              m.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (C = pS);
          if (C && (C = C(e, u))) {
            tm(f, C, r, d);
            break e;
          }
          A && A(e, h, u),
            e === "focusout" &&
              (A = h._wrapperState) &&
              A.controlled &&
              h.type === "number" &&
              nc(h, "number", h.value);
        }
        switch (((A = u ? po(u) : window), e)) {
          case "focusin":
            (em(A) || A.contentEditable === "true") &&
              ((lo = A), (Ic = u), (Ai = null));
            break;
          case "focusout":
            Ai = Ic = lo = null;
            break;
          case "mousedown":
            Pc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Pc = !1), cm(f, r, d);
            break;
          case "selectionchange":
            if (bS) break;
          case "keydown":
          case "keyup":
            cm(f, r, d);
        }
        var N;
        if (Tc)
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
          so
            ? Jh(e, r) && (I = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (I = "onCompositionStart");
        I &&
          (Qh &&
            r.locale !== "ko" &&
            (so || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && so && (N = Vh())
              : ((Qr = d),
                (xc = "value" in Qr ? Qr.value : Qr.textContent),
                (so = !0))),
          (A = as(u, I)),
          0 < A.length &&
            ((I = new Gh(I, e, null, r, d)),
            f.push({ event: I, listeners: A }),
            N ? (I.data = N) : ((N = Zh(r)), N !== null && (I.data = N)))),
          (N = iS ? aS(e, r) : sS(e, r)) &&
            ((u = as(u, "onBeforeInput")),
            0 < u.length &&
              ((d = new Gh("onBeforeInput", "beforeinput", null, r, d)),
              f.push({ event: d, listeners: u }),
              (d.data = N)));
      }
      vm(f, t);
    });
  }
  function Pi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function as(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = hi(e, r)),
        i != null && n.unshift(Pi(e, i, o)),
        (i = hi(e, t)),
        i != null && n.push(Pi(e, i, o))),
        (e = e.return);
    }
    return n;
  }
  function co(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sm(e, t, r, n, o) {
    for (var i = t._reactName, a = []; r !== null && r !== n; ) {
      var s = r,
        l = s.alternate,
        u = s.stateNode;
      if (l !== null && l === n) break;
      s.tag === 5 &&
        u !== null &&
        ((s = u),
        o
          ? ((l = hi(r, i)), l != null && a.unshift(Pi(r, l, s)))
          : o || ((l = hi(r, i)), l != null && a.push(Pi(r, l, s)))),
        (r = r.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var SS = /\r\n?/g,
    xS = /\u0000|\uFFFD/g;
  function xm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        SS,
        `
`,
      )
      .replace(xS, "");
  }
  function ss(e, t, r) {
    if (((t = xm(t)), xm(e) !== t && r)) throw Error(G(425));
  }
  function ls() {}
  var Fc = null,
    jc = null;
  function Uc(e, t) {
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
  var Dc = typeof setTimeout == "function" ? setTimeout : void 0,
    kS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    km = typeof Promise == "function" ? Promise : void 0,
    ES =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof km < "u"
        ? function (e) {
            return km.resolve(null).then(e).catch(CS);
          }
        : Dc;
  function CS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Wc(e, t) {
    var r = t,
      n = 0;
    do {
      var o = r.nextSibling;
      if ((e.removeChild(r), o && o.nodeType === 8))
        if (((r = o.data), r === "/$")) {
          if (n === 0) {
            e.removeChild(o), ki(t);
            return;
          }
          n--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
      r = o;
    } while (r);
    ki(t);
  }
  function Yr(e) {
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
  function Em(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var fo = Math.random().toString(36).slice(2),
    gr = "__reactFiber$" + fo,
    $i = "__reactProps$" + fo,
    _r = "__reactContainer$" + fo,
    Vc = "__reactEvents$" + fo,
    OS = "__reactListeners$" + fo,
    NS = "__reactHandles$" + fo;
  function wn(e) {
    var t = e[gr];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[_r] || r[gr])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Em(e); e !== null; ) {
            if ((r = e[gr])) return r;
            e = Em(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Mi(e) {
    return (
      (e = e[gr] || e[_r]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function po(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(G(33));
  }
  function us(e) {
    return e[$i] || null;
  }
  var Hc = [],
    ho = -1;
  function Jr(e) {
    return { current: e };
  }
  function ze(e) {
    0 > ho || ((e.current = Hc[ho]), (Hc[ho] = null), ho--);
  }
  function Me(e, t) {
    ho++, (Hc[ho] = e.current), (e.current = t);
  }
  var Zr = {},
    ht = Jr(Zr),
    Et = Jr(!1),
    Sn = Zr;
  function mo(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Zr;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in r) o[i] = t[i];
    return (
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function Ct(e) {
    return (e = e.childContextTypes), e != null;
  }
  function cs() {
    ze(Et), ze(ht);
  }
  function Cm(e, t, r) {
    if (ht.current !== Zr) throw Error(G(168));
    Me(ht, t), Me(Et, r);
  }
  function Om(e, t, r) {
    var n = e.stateNode;
    if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
      return r;
    n = n.getChildContext();
    for (var o in n) if (!(o in t)) throw Error(G(108, dw(e) || "Unknown", o));
    return De({}, r, n);
  }
  function ds(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Zr),
      (Sn = ht.current),
      Me(ht, e),
      Me(Et, Et.current),
      !0
    );
  }
  function Nm(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(G(169));
    r
      ? ((e = Om(e, t, Sn)),
        (n.__reactInternalMemoizedMergedChildContext = e),
        ze(Et),
        ze(ht),
        Me(ht, e))
      : ze(Et),
      Me(Et, r);
  }
  var Ir = null,
    fs = !1,
    qc = !1;
  function Tm(e) {
    Ir === null ? (Ir = [e]) : Ir.push(e);
  }
  function TS(e) {
    (fs = !0), Tm(e);
  }
  function en() {
    if (!qc && Ir !== null) {
      qc = !0;
      var e = 0,
        t = _e;
      try {
        var r = Ir;
        for (_e = 1; e < r.length; e++) {
          var n = r[e];
          do n = n(!0);
          while (n !== null);
        }
        (Ir = null), (fs = !1);
      } catch (o) {
        throw (Ir !== null && (Ir = Ir.slice(e + 1)), Ah(hc, en), o);
      } finally {
        (_e = t), (qc = !1);
      }
    }
    return null;
  }
  var go = [],
    bo = 0,
    ps = null,
    hs = 0,
    Dt = [],
    Wt = 0,
    xn = null,
    Pr = 1,
    $r = "";
  function kn(e, t) {
    (go[bo++] = hs), (go[bo++] = ps), (ps = e), (hs = t);
  }
  function Rm(e, t, r) {
    (Dt[Wt++] = Pr), (Dt[Wt++] = $r), (Dt[Wt++] = xn), (xn = e);
    var n = Pr;
    e = $r;
    var o = 32 - or(n) - 1;
    (n &= ~(1 << o)), (r += 1);
    var i = 32 - or(t) + o;
    if (30 < i) {
      var a = o - (o % 5);
      (i = (n & ((1 << a) - 1)).toString(32)),
        (n >>= a),
        (o -= a),
        (Pr = (1 << (32 - or(t) + o)) | (r << o) | n),
        ($r = i + e);
    } else (Pr = (1 << i) | (r << o) | n), ($r = e);
  }
  function Gc(e) {
    e.return !== null && (kn(e, 1), Rm(e, 1, 0));
  }
  function Kc(e) {
    for (; e === ps; )
      (ps = go[--bo]), (go[bo] = null), (hs = go[--bo]), (go[bo] = null);
    for (; e === xn; )
      (xn = Dt[--Wt]),
        (Dt[Wt] = null),
        ($r = Dt[--Wt]),
        (Dt[Wt] = null),
        (Pr = Dt[--Wt]),
        (Dt[Wt] = null);
  }
  var Lt = null,
    Bt = null,
    Fe = !1,
    ar = null;
  function Am(e, t) {
    var r = Gt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function _m(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Lt = e), (Bt = Yr(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Lt = e), (Bt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = xn !== null ? { id: Pr, overflow: $r } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Gt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Lt = e),
              (Bt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Qc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Xc(e) {
    if (Fe) {
      var t = Bt;
      if (t) {
        var r = t;
        if (!_m(e, t)) {
          if (Qc(e)) throw Error(G(418));
          t = Yr(r.nextSibling);
          var n = Lt;
          t && _m(e, t)
            ? Am(n, r)
            : ((e.flags = (e.flags & -4097) | 2), (Fe = !1), (Lt = e));
        }
      } else {
        if (Qc(e)) throw Error(G(418));
        (e.flags = (e.flags & -4097) | 2), (Fe = !1), (Lt = e);
      }
    }
  }
  function Im(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Lt = e;
  }
  function ms(e) {
    if (e !== Lt) return !1;
    if (!Fe) return Im(e), (Fe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Uc(e.type, e.memoizedProps))),
      t && (t = Bt))
    ) {
      if (Qc(e)) throw (Pm(), Error(G(418)));
      for (; t; ) Am(e, t), (t = Yr(t.nextSibling));
    }
    if ((Im(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(G(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Bt = Yr(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Bt = null;
      }
    } else Bt = Lt ? Yr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pm() {
    for (var e = Bt; e; ) e = Yr(e.nextSibling);
  }
  function yo() {
    (Bt = Lt = null), (Fe = !1);
  }
  function Yc(e) {
    ar === null ? (ar = [e]) : ar.push(e);
  }
  var RS = Ar.ReactCurrentBatchConfig;
  function sr(e, t) {
    if (e && e.defaultProps) {
      (t = De({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var gs = Jr(null),
    bs = null,
    vo = null,
    Jc = null;
  function Zc() {
    Jc = vo = bs = null;
  }
  function ed(e) {
    var t = gs.current;
    ze(gs), (e._currentValue = t);
  }
  function td(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function wo(e, t) {
    (bs = e),
      (Jc = vo = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ot = !0), (e.firstContext = null));
  }
  function Vt(e) {
    var t = e._currentValue;
    if (Jc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), vo === null)) {
        if (bs === null) throw Error(G(308));
        (vo = e), (bs.dependencies = { lanes: 0, firstContext: e });
      } else vo = vo.next = e;
    return t;
  }
  var En = null;
  function rd(e) {
    En === null ? (En = [e]) : En.push(e);
  }
  function $m(e, t, r, n) {
    var o = t.interleaved;
    return (
      o === null ? ((r.next = r), rd(t)) : ((r.next = o.next), (o.next = r)),
      (t.interleaved = r),
      Mr(e, n)
    );
  }
  function Mr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var tn = !1;
  function nd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Mm(e, t) {
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
  function Lr(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function rn(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), Ce & 2)) {
      var o = n.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (n.pending = t),
        Mr(e, r)
      );
    }
    return (
      (o = n.interleaved),
      o === null ? ((t.next = t), rd(n)) : ((t.next = o.next), (o.next = t)),
      (n.interleaved = t),
      Mr(e, r)
    );
  }
  function ys(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), bc(e, r);
    }
  }
  function Lm(e, t) {
    var r = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), r === n)) {
      var o = null,
        i = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var a = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
        } while (r !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      (r = {
        baseState: n.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: n.shared,
        effects: n.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function vs(e, t, r, n) {
    var o = e.updateQueue;
    tn = !1;
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
          m = s.eventTime;
        if ((n & h) === h) {
          d !== null &&
            (d = d.next =
              {
                eventTime: m,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var g = e,
              x = s;
            switch (((h = t), (m = r), x.tag)) {
              case 1:
                if (((g = x.payload), typeof g == "function")) {
                  f = g.call(m, f, h);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = x.payload),
                  (h = typeof g == "function" ? g.call(m, f, h) : g),
                  h == null)
                )
                  break e;
                f = De({}, f, h);
                break e;
              case 2:
                tn = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (h = o.effects),
            h === null ? (o.effects = [s]) : h.push(s));
        } else
          (m = {
            eventTime: m,
            lane: h,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            d === null ? ((u = d = m), (l = f)) : (d = d.next = m),
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
      (Nn |= a), (e.lanes = a), (e.memoizedState = f);
    }
  }
  function Bm(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var n = e[t],
          o = n.callback;
        if (o !== null) {
          if (((n.callback = null), (n = r), typeof o != "function"))
            throw Error(G(191, o));
          o.call(n);
        }
      }
  }
  var zm = new eh.Component().refs;
  function od(e, t, r, n) {
    (t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : De({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ws = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = xt(),
        o = sn(e),
        i = Lr(n, o);
      (i.payload = t),
        r != null && (i.callback = r),
        (t = rn(e, i, o)),
        t !== null && (cr(t, e, o, n), ys(t, e, o));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = xt(),
        o = sn(e),
        i = Lr(n, o);
      (i.tag = 1),
        (i.payload = t),
        r != null && (i.callback = r),
        (t = rn(e, i, o)),
        t !== null && (cr(t, e, o, n), ys(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = xt(),
        n = sn(e),
        o = Lr(r, n);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = rn(e, o, n)),
        t !== null && (cr(t, e, n, r), ys(t, e, n));
    },
  };
  function Fm(e, t, r, n, o, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, i, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ri(r, n) || !Ri(o, i)
        : !0
    );
  }
  function jm(e, t, r) {
    var n = !1,
      o = Zr,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Vt(i))
        : ((o = Ct(t) ? Sn : ht.current),
          (n = t.contextTypes),
          (i = (n = n != null) ? mo(e, o) : Zr)),
      (t = new t(r, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ws),
      (e.stateNode = t),
      (t._reactInternals = e),
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Um(e, t, r, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && ws.enqueueReplaceState(t, t.state, null);
  }
  function id(e, t, r, n) {
    var o = e.stateNode;
    (o.props = r), (o.state = e.memoizedState), (o.refs = zm), nd(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = Vt(i))
      : ((i = Ct(t) ? Sn : ht.current), (o.context = mo(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (od(e, t, i, r), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && ws.enqueueReplaceState(o, o.state, null),
        vs(e, r, o, n),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Li(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(G(309));
          var n = r.stateNode;
        }
        if (!n) throw Error(G(147, e));
        var o = n,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var s = o.refs;
              s === zm && (s = o.refs = {}),
                a === null ? delete s[i] : (s[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(G(284));
      if (!r._owner) throw Error(G(290, e));
    }
    return e;
  }
  function Ss(e, t) {
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
  function Dm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wm(e) {
    function t(b, y) {
      if (e) {
        var v = b.deletions;
        v === null ? ((b.deletions = [y]), (b.flags |= 16)) : v.push(y);
      }
    }
    function r(b, y) {
      if (!e) return null;
      for (; y !== null; ) t(b, y), (y = y.sibling);
      return null;
    }
    function n(b, y) {
      for (b = new Map(); y !== null; )
        y.key !== null ? b.set(y.key, y) : b.set(y.index, y), (y = y.sibling);
      return b;
    }
    function o(b, y) {
      return (b = un(b, y)), (b.index = 0), (b.sibling = null), b;
    }
    function i(b, y, v) {
      return (
        (b.index = v),
        e
          ? ((v = b.alternate),
            v !== null
              ? ((v = v.index), v < y ? ((b.flags |= 2), y) : v)
              : ((b.flags |= 2), y))
          : ((b.flags |= 1048576), y)
      );
    }
    function a(b) {
      return e && b.alternate === null && (b.flags |= 2), b;
    }
    function s(b, y, v, k) {
      return y === null || y.tag !== 6
        ? ((y = Ud(v, b.mode, k)), (y.return = b), y)
        : ((y = o(y, v)), (y.return = b), y);
    }
    function l(b, y, v, k) {
      var C = v.type;
      return C === to
        ? d(b, y, v.props.children, k, v.key)
        : y !== null &&
          (y.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Wr &&
              Dm(C) === y.type))
        ? ((k = o(y, v.props)), (k.ref = Li(b, y, v)), (k.return = b), k)
        : ((k = js(v.type, v.key, v.props, null, b.mode, k)),
          (k.ref = Li(b, y, v)),
          (k.return = b),
          k);
    }
    function u(b, y, v, k) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== v.containerInfo ||
        y.stateNode.implementation !== v.implementation
        ? ((y = Dd(v, b.mode, k)), (y.return = b), y)
        : ((y = o(y, v.children || [])), (y.return = b), y);
    }
    function d(b, y, v, k, C) {
      return y === null || y.tag !== 7
        ? ((y = _n(v, b.mode, k, C)), (y.return = b), y)
        : ((y = o(y, v)), (y.return = b), y);
    }
    function f(b, y, v) {
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return (y = Ud("" + y, b.mode, v)), (y.return = b), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ba:
            return (
              (v = js(y.type, y.key, y.props, null, b.mode, v)),
              (v.ref = Li(b, null, y)),
              (v.return = b),
              v
            );
          case eo:
            return (y = Dd(y, b.mode, v)), (y.return = b), y;
          case Wr:
            var k = y._init;
            return f(b, k(y._payload), v);
        }
        if (di(y) || ui(y))
          return (y = _n(y, b.mode, v, null)), (y.return = b), y;
        Ss(b, y);
      }
      return null;
    }
    function h(b, y, v, k) {
      var C = y !== null ? y.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return C !== null ? null : s(b, y, "" + v, k);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Ba:
            return v.key === C ? l(b, y, v, k) : null;
          case eo:
            return v.key === C ? u(b, y, v, k) : null;
          case Wr:
            return (C = v._init), h(b, y, C(v._payload), k);
        }
        if (di(v) || ui(v)) return C !== null ? null : d(b, y, v, k, null);
        Ss(b, v);
      }
      return null;
    }
    function m(b, y, v, k, C) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return (b = b.get(v) || null), s(y, b, "" + k, C);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ba:
            return (
              (b = b.get(k.key === null ? v : k.key) || null), l(y, b, k, C)
            );
          case eo:
            return (
              (b = b.get(k.key === null ? v : k.key) || null), u(y, b, k, C)
            );
          case Wr:
            var A = k._init;
            return m(b, y, v, A(k._payload), C);
        }
        if (di(k) || ui(k)) return (b = b.get(v) || null), d(y, b, k, C, null);
        Ss(y, k);
      }
      return null;
    }
    function g(b, y, v, k) {
      for (
        var C = null, A = null, N = y, I = (y = 0), P = null;
        N !== null && I < v.length;
        I++
      ) {
        N.index > I ? ((P = N), (N = null)) : (P = N.sibling);
        var z = h(b, N, v[I], k);
        if (z === null) {
          N === null && (N = P);
          break;
        }
        e && N && z.alternate === null && t(b, N),
          (y = i(z, y, I)),
          A === null ? (C = z) : (A.sibling = z),
          (A = z),
          (N = P);
      }
      if (I === v.length) return r(b, N), Fe && kn(b, I), C;
      if (N === null) {
        for (; I < v.length; I++)
          (N = f(b, v[I], k)),
            N !== null &&
              ((y = i(N, y, I)),
              A === null ? (C = N) : (A.sibling = N),
              (A = N));
        return Fe && kn(b, I), C;
      }
      for (N = n(b, N); I < v.length; I++)
        (P = m(N, b, I, v[I], k)),
          P !== null &&
            (e && P.alternate !== null && N.delete(P.key === null ? I : P.key),
            (y = i(P, y, I)),
            A === null ? (C = P) : (A.sibling = P),
            (A = P));
      return (
        e &&
          N.forEach(function (H) {
            return t(b, H);
          }),
        Fe && kn(b, I),
        C
      );
    }
    function x(b, y, v, k) {
      var C = ui(v);
      if (typeof C != "function") throw Error(G(150));
      if (((v = C.call(v)), v == null)) throw Error(G(151));
      for (
        var A = (C = null), N = y, I = (y = 0), P = null, z = v.next();
        N !== null && !z.done;
        I++, z = v.next()
      ) {
        N.index > I ? ((P = N), (N = null)) : (P = N.sibling);
        var H = h(b, N, z.value, k);
        if (H === null) {
          N === null && (N = P);
          break;
        }
        e && N && H.alternate === null && t(b, N),
          (y = i(H, y, I)),
          A === null ? (C = H) : (A.sibling = H),
          (A = H),
          (N = P);
      }
      if (z.done) return r(b, N), Fe && kn(b, I), C;
      if (N === null) {
        for (; !z.done; I++, z = v.next())
          (z = f(b, z.value, k)),
            z !== null &&
              ((y = i(z, y, I)),
              A === null ? (C = z) : (A.sibling = z),
              (A = z));
        return Fe && kn(b, I), C;
      }
      for (N = n(b, N); !z.done; I++, z = v.next())
        (z = m(N, b, I, z.value, k)),
          z !== null &&
            (e && z.alternate !== null && N.delete(z.key === null ? I : z.key),
            (y = i(z, y, I)),
            A === null ? (C = z) : (A.sibling = z),
            (A = z));
      return (
        e &&
          N.forEach(function (V) {
            return t(b, V);
          }),
        Fe && kn(b, I),
        C
      );
    }
    function R(b, y, v, k) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === to &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Ba:
            e: {
              for (var C = v.key, A = y; A !== null; ) {
                if (A.key === C) {
                  if (((C = v.type), C === to)) {
                    if (A.tag === 7) {
                      r(b, A.sibling),
                        (y = o(A, v.props.children)),
                        (y.return = b),
                        (b = y);
                      break e;
                    }
                  } else if (
                    A.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Wr &&
                      Dm(C) === A.type)
                  ) {
                    r(b, A.sibling),
                      (y = o(A, v.props)),
                      (y.ref = Li(b, A, v)),
                      (y.return = b),
                      (b = y);
                    break e;
                  }
                  r(b, A);
                  break;
                } else t(b, A);
                A = A.sibling;
              }
              v.type === to
                ? ((y = _n(v.props.children, b.mode, k, v.key)),
                  (y.return = b),
                  (b = y))
                : ((k = js(v.type, v.key, v.props, null, b.mode, k)),
                  (k.ref = Li(b, y, v)),
                  (k.return = b),
                  (b = k));
            }
            return a(b);
          case eo:
            e: {
              for (A = v.key; y !== null; ) {
                if (y.key === A)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === v.containerInfo &&
                    y.stateNode.implementation === v.implementation
                  ) {
                    r(b, y.sibling),
                      (y = o(y, v.children || [])),
                      (y.return = b),
                      (b = y);
                    break e;
                  } else {
                    r(b, y);
                    break;
                  }
                else t(b, y);
                y = y.sibling;
              }
              (y = Dd(v, b.mode, k)), (y.return = b), (b = y);
            }
            return a(b);
          case Wr:
            return (A = v._init), R(b, y, A(v._payload), k);
        }
        if (di(v)) return g(b, y, v, k);
        if (ui(v)) return x(b, y, v, k);
        Ss(b, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          y !== null && y.tag === 6
            ? (r(b, y.sibling), (y = o(y, v)), (y.return = b), (b = y))
            : (r(b, y), (y = Ud(v, b.mode, k)), (y.return = b), (b = y)),
          a(b))
        : r(b, y);
    }
    return R;
  }
  var So = Wm(!0),
    Vm = Wm(!1),
    Bi = {},
    br = Jr(Bi),
    zi = Jr(Bi),
    Fi = Jr(Bi);
  function Cn(e) {
    if (e === Bi) throw Error(G(174));
    return e;
  }
  function ad(e, t) {
    switch ((Me(Fi, t), Me(zi, e), Me(br, Bi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ic(t, e));
    }
    ze(br), Me(br, t);
  }
  function xo() {
    ze(br), ze(zi), ze(Fi);
  }
  function Hm(e) {
    Cn(Fi.current);
    var t = Cn(br.current),
      r = ic(t, e.type);
    t !== r && (Me(zi, e), Me(br, r));
  }
  function sd(e) {
    zi.current === e && (ze(br), ze(zi));
  }
  var We = Jr(0);
  function xs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
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
  var ld = [];
  function ud() {
    for (var e = 0; e < ld.length; e++)
      ld[e]._workInProgressVersionPrimary = null;
    ld.length = 0;
  }
  var ks = Ar.ReactCurrentDispatcher,
    cd = Ar.ReactCurrentBatchConfig,
    On = 0,
    Ve = null,
    et = null,
    nt = null,
    Es = !1,
    ji = !1,
    Ui = 0,
    AS = 0;
  function mt() {
    throw Error(G(321));
  }
  function dd(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!ir(e[r], t[r])) return !1;
    return !0;
  }
  function fd(e, t, r, n, o, i) {
    if (
      ((On = i),
      (Ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ks.current = e === null || e.memoizedState === null ? $S : MS),
      (e = r(n, o)),
      ji)
    ) {
      i = 0;
      do {
        if (((ji = !1), (Ui = 0), 25 <= i)) throw Error(G(301));
        (i += 1),
          (nt = et = null),
          (t.updateQueue = null),
          (ks.current = LS),
          (e = r(n, o));
      } while (ji);
    }
    if (
      ((ks.current = Ns),
      (t = et !== null && et.next !== null),
      (On = 0),
      (nt = et = Ve = null),
      (Es = !1),
      t)
    )
      throw Error(G(300));
    return e;
  }
  function pd() {
    var e = Ui !== 0;
    return (Ui = 0), e;
  }
  function yr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return nt === null ? (Ve.memoizedState = nt = e) : (nt = nt.next = e), nt;
  }
  function Ht() {
    if (et === null) {
      var e = Ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = nt === null ? Ve.memoizedState : nt.next;
    if (t !== null) (nt = t), (et = e);
    else {
      if (e === null) throw Error(G(310));
      (et = e),
        (e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null,
        }),
        nt === null ? (Ve.memoizedState = nt = e) : (nt = nt.next = e);
    }
    return nt;
  }
  function Di(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hd(e) {
    var t = Ht(),
      r = t.queue;
    if (r === null) throw Error(G(311));
    r.lastRenderedReducer = e;
    var n = et,
      o = n.baseQueue,
      i = r.pending;
    if (i !== null) {
      if (o !== null) {
        var a = o.next;
        (o.next = i.next), (i.next = a);
      }
      (n.baseQueue = o = i), (r.pending = null);
    }
    if (o !== null) {
      (i = o.next), (n = n.baseState);
      var s = (a = null),
        l = null,
        u = i;
      do {
        var d = u.lane;
        if ((On & d) === d)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (n = u.hasEagerState ? u.eagerState : e(n, u.action));
        else {
          var f = {
            lane: d,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((s = l = f), (a = n)) : (l = l.next = f),
            (Ve.lanes |= d),
            (Nn |= d);
        }
        u = u.next;
      } while (u !== null && u !== i);
      l === null ? (a = n) : (l.next = s),
        ir(n, t.memoizedState) || (Ot = !0),
        (t.memoizedState = n),
        (t.baseState = a),
        (t.baseQueue = l),
        (r.lastRenderedState = n);
    }
    if (((e = r.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (Ve.lanes |= i), (Nn |= i), (o = o.next);
      while (o !== e);
    } else o === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function md(e) {
    var t = Ht(),
      r = t.queue;
    if (r === null) throw Error(G(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
      o = r.pending,
      i = t.memoizedState;
    if (o !== null) {
      r.pending = null;
      var a = (o = o.next);
      do (i = e(i, a.action)), (a = a.next);
      while (a !== o);
      ir(i, t.memoizedState) || (Ot = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (r.lastRenderedState = i);
    }
    return [i, n];
  }
  function qm() {}
  function Gm(e, t) {
    var r = Ve,
      n = Ht(),
      o = t(),
      i = !ir(n.memoizedState, o);
    if (
      (i && ((n.memoizedState = o), (Ot = !0)),
      (n = n.queue),
      gd(Xm.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || i || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Wi(9, Qm.bind(null, r, n, o, t), void 0, null),
        ot === null)
      )
        throw Error(G(349));
      On & 30 || Km(r, t, o);
    }
    return o;
  }
  function Km(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ve.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Qm(e, t, r, n) {
    (t.value = r), (t.getSnapshot = n), Ym(t) && Jm(e);
  }
  function Xm(e, t, r) {
    return r(function () {
      Ym(t) && Jm(e);
    });
  }
  function Ym(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !ir(e, r);
    } catch {
      return !0;
    }
  }
  function Jm(e) {
    var t = Mr(e, 1);
    t !== null && cr(t, e, 1, -1);
  }
  function Zm(e) {
    var t = yr();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Di,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = PS.bind(null, Ve, e)),
      [t.memoizedState, e]
    );
  }
  function Wi(e, t, r, n) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
      (t = Ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ve.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
      e
    );
  }
  function eg() {
    return Ht().memoizedState;
  }
  function Cs(e, t, r, n) {
    var o = yr();
    (Ve.flags |= e),
      (o.memoizedState = Wi(1 | t, r, void 0, n === void 0 ? null : n));
  }
  function Os(e, t, r, n) {
    var o = Ht();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (et !== null) {
      var a = et.memoizedState;
      if (((i = a.destroy), n !== null && dd(n, a.deps))) {
        o.memoizedState = Wi(t, r, i, n);
        return;
      }
    }
    (Ve.flags |= e), (o.memoizedState = Wi(1 | t, r, i, n));
  }
  function tg(e, t) {
    return Cs(8390656, 8, e, t);
  }
  function gd(e, t) {
    return Os(2048, 8, e, t);
  }
  function rg(e, t) {
    return Os(4, 2, e, t);
  }
  function ng(e, t) {
    return Os(4, 4, e, t);
  }
  function og(e, t) {
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
  function ig(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Os(4, 4, og.bind(null, t, e), r)
    );
  }
  function bd() {}
  function ag(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && dd(t, n[1])
      ? n[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function sg(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && dd(t, n[1])
      ? n[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function lg(e, t, r) {
    return On & 21
      ? (ir(r, t) ||
          ((r = $h()), (Ve.lanes |= r), (Nn |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ot = !0)), (e.memoizedState = r));
  }
  function _S(e, t) {
    var r = _e;
    (_e = r !== 0 && 4 > r ? r : 4), e(!0);
    var n = cd.transition;
    cd.transition = {};
    try {
      e(!1), t();
    } finally {
      (_e = r), (cd.transition = n);
    }
  }
  function ug() {
    return Ht().memoizedState;
  }
  function IS(e, t, r) {
    var n = sn(e);
    if (
      ((r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cg(e))
    )
      dg(t, r);
    else if (((r = $m(e, t, r, n)), r !== null)) {
      var o = xt();
      cr(r, e, n, o), fg(r, t, n);
    }
  }
  function PS(e, t, r) {
    var n = sn(e),
      o = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (cg(e)) dg(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var a = t.lastRenderedState,
            s = i(a, r);
          if (((o.hasEagerState = !0), (o.eagerState = s), ir(s, a))) {
            var l = t.interleaved;
            l === null
              ? ((o.next = o), rd(t))
              : ((o.next = l.next), (l.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (r = $m(e, t, o, n)),
        r !== null && ((o = xt()), cr(r, e, n, o), fg(r, t, n));
    }
  }
  function cg(e) {
    var t = e.alternate;
    return e === Ve || (t !== null && t === Ve);
  }
  function dg(e, t) {
    ji = Es = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function fg(e, t, r) {
    if (r & 4194240) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), bc(e, r);
    }
  }
  var Ns = {
      readContext: Vt,
      useCallback: mt,
      useContext: mt,
      useEffect: mt,
      useImperativeHandle: mt,
      useInsertionEffect: mt,
      useLayoutEffect: mt,
      useMemo: mt,
      useReducer: mt,
      useRef: mt,
      useState: mt,
      useDebugValue: mt,
      useDeferredValue: mt,
      useTransition: mt,
      useMutableSource: mt,
      useSyncExternalStore: mt,
      useId: mt,
      unstable_isNewReconciler: !1,
    },
    $S = {
      readContext: Vt,
      useCallback: function (e, t) {
        return (yr().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Vt,
      useEffect: tg,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Cs(4194308, 4, og.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Cs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Cs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = yr();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var n = yr();
        return (
          (t = r !== void 0 ? r(t) : t),
          (n.memoizedState = n.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (n.queue = e),
          (e = e.dispatch = IS.bind(null, Ve, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yr();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Zm,
      useDebugValue: bd,
      useDeferredValue: function (e) {
        return (yr().memoizedState = e);
      },
      useTransition: function () {
        var e = Zm(!1),
          t = e[0];
        return (e = _S.bind(null, e[1])), (yr().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var n = Ve,
          o = yr();
        if (Fe) {
          if (r === void 0) throw Error(G(407));
          r = r();
        } else {
          if (((r = t()), ot === null)) throw Error(G(349));
          On & 30 || Km(n, t, r);
        }
        o.memoizedState = r;
        var i = { value: r, getSnapshot: t };
        return (
          (o.queue = i),
          tg(Xm.bind(null, n, i, e), [e]),
          (n.flags |= 2048),
          Wi(9, Qm.bind(null, n, i, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = yr(),
          t = ot.identifierPrefix;
        if (Fe) {
          var r = $r,
            n = Pr;
          (r = (n & ~(1 << (32 - or(n) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Ui++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = AS++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    MS = {
      readContext: Vt,
      useCallback: ag,
      useContext: Vt,
      useEffect: gd,
      useImperativeHandle: ig,
      useInsertionEffect: rg,
      useLayoutEffect: ng,
      useMemo: sg,
      useReducer: hd,
      useRef: eg,
      useState: function () {
        return hd(Di);
      },
      useDebugValue: bd,
      useDeferredValue: function (e) {
        var t = Ht();
        return lg(t, et.memoizedState, e);
      },
      useTransition: function () {
        var e = hd(Di)[0],
          t = Ht().memoizedState;
        return [e, t];
      },
      useMutableSource: qm,
      useSyncExternalStore: Gm,
      useId: ug,
      unstable_isNewReconciler: !1,
    },
    LS = {
      readContext: Vt,
      useCallback: ag,
      useContext: Vt,
      useEffect: gd,
      useImperativeHandle: ig,
      useInsertionEffect: rg,
      useLayoutEffect: ng,
      useMemo: sg,
      useReducer: md,
      useRef: eg,
      useState: function () {
        return md(Di);
      },
      useDebugValue: bd,
      useDeferredValue: function (e) {
        var t = Ht();
        return et === null ? (t.memoizedState = e) : lg(t, et.memoizedState, e);
      },
      useTransition: function () {
        var e = md(Di)[0],
          t = Ht().memoizedState;
        return [e, t];
      },
      useMutableSource: qm,
      useSyncExternalStore: Gm,
      useId: ug,
      unstable_isNewReconciler: !1,
    };
  function ko(e, t) {
    try {
      var r = "",
        n = t;
      do (r += cw(n)), (n = n.return);
      while (n);
      var o = r;
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
  function yd(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function vd(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var BS = typeof WeakMap == "function" ? WeakMap : Map;
  function pg(e, t, r) {
    (r = Lr(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var n = t.value;
    return (
      (r.callback = function () {
        $s || (($s = !0), (Pd = n)), vd(e, t);
      }),
      r
    );
  }
  function hg(e, t, r) {
    (r = Lr(-1, r)), (r.tag = 3);
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var o = t.value;
      (r.payload = function () {
        return n(o);
      }),
        (r.callback = function () {
          vd(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (r.callback = function () {
          vd(e, t),
            typeof n != "function" &&
              (on === null ? (on = new Set([this])) : on.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      r
    );
  }
  function mg(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new BS();
      var o = new Set();
      n.set(t, o);
    } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
    o.has(r) || (o.add(r), (e = YS.bind(null, e, t, r)), t.then(e, e));
  }
  function gg(e) {
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
  function bg(e, t, r, n, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Lr(-1, 1)), (t.tag = 2), rn(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var zS = Ar.ReactCurrentOwner,
    Ot = !1;
  function St(e, t, r, n) {
    t.child = e === null ? Vm(t, null, r, n) : So(t, e.child, r, n);
  }
  function yg(e, t, r, n, o) {
    r = r.render;
    var i = t.ref;
    return (
      wo(t, o),
      (n = fd(e, t, r, n, i, o)),
      (r = pd()),
      e !== null && !Ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Br(e, t, o))
        : (Fe && r && Gc(t), (t.flags |= 1), St(e, t, n, o), t.child)
    );
  }
  function vg(e, t, r, n, o) {
    if (e === null) {
      var i = r.type;
      return typeof i == "function" &&
        !jd(i) &&
        i.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), wg(e, t, i, n, o))
        : ((e = js(r.type, null, n, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var a = i.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Ri), r(a, n) && e.ref === t.ref)
      )
        return Br(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = un(i, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function wg(e, t, r, n, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Ri(i, n) && e.ref === t.ref)
        if (((Ot = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (Ot = !0);
        else return (t.lanes = e.lanes), Br(e, t, o);
    }
    return wd(e, t, r, n, o);
  }
  function Sg(e, t, r) {
    var n = t.pendingProps,
      o = n.children,
      i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Me(Co, zt),
          (zt |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Me(Co, zt),
            (zt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (n = i !== null ? i.baseLanes : r),
          Me(Co, zt),
          (zt |= n);
      }
    else
      i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
        Me(Co, zt),
        (zt |= n);
    return St(e, t, o, r), t.child;
  }
  function xg(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function wd(e, t, r, n, o) {
    var i = Ct(r) ? Sn : ht.current;
    return (
      (i = mo(t, i)),
      wo(t, o),
      (r = fd(e, t, r, n, i, o)),
      (n = pd()),
      e !== null && !Ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Br(e, t, o))
        : (Fe && n && Gc(t), (t.flags |= 1), St(e, t, r, o), t.child)
    );
  }
  function kg(e, t, r, n, o) {
    if (Ct(r)) {
      var i = !0;
      ds(t);
    } else i = !1;
    if ((wo(t, o), t.stateNode === null))
      Rs(e, t), jm(t, r, n), id(t, r, n, o), (n = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var l = a.context,
        u = r.contextType;
      typeof u == "object" && u !== null
        ? (u = Vt(u))
        : ((u = Ct(r) ? Sn : ht.current), (u = mo(t, u)));
      var d = r.getDerivedStateFromProps,
        f =
          typeof d == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== n || l !== u) && Um(t, a, n, u)),
        (tn = !1);
      var h = t.memoizedState;
      (a.state = h),
        vs(t, n, a, o),
        (l = t.memoizedState),
        s !== n || h !== l || Et.current || tn
          ? (typeof d == "function" && (od(t, r, d, n), (l = t.memoizedState)),
            (s = tn || Fm(t, r, s, n, h, l, u))
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
                (t.memoizedProps = n),
                (t.memoizedState = l)),
            (a.props = n),
            (a.state = l),
            (a.context = u),
            (n = s))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1));
    } else {
      (a = t.stateNode),
        Mm(e, t),
        (s = t.memoizedProps),
        (u = t.type === t.elementType ? s : sr(t.type, s)),
        (a.props = u),
        (f = t.pendingProps),
        (h = a.context),
        (l = r.contextType),
        typeof l == "object" && l !== null
          ? (l = Vt(l))
          : ((l = Ct(r) ? Sn : ht.current), (l = mo(t, l)));
      var m = r.getDerivedStateFromProps;
      (d =
        typeof m == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== f || h !== l) && Um(t, a, n, l)),
        (tn = !1),
        (h = t.memoizedState),
        (a.state = h),
        vs(t, n, a, o);
      var g = t.memoizedState;
      s !== f || h !== g || Et.current || tn
        ? (typeof m == "function" && (od(t, r, m, n), (g = t.memoizedState)),
          (u = tn || Fm(t, r, u, n, h, g, l) || !1)
            ? (d ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(n, g, l),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(n, g, l)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (s === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = g)),
          (a.props = n),
          (a.state = g),
          (a.context = l),
          (n = u))
        : (typeof a.componentDidUpdate != "function" ||
            (s === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return Sd(e, t, r, n, i, o);
  }
  function Sd(e, t, r, n, o, i) {
    xg(e, t);
    var a = (t.flags & 128) !== 0;
    if (!n && !a) return o && Nm(t, r, !1), Br(e, t, i);
    (n = t.stateNode), (zS.current = t);
    var s =
      a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = So(t, e.child, null, i)), (t.child = So(t, null, s, i)))
        : St(e, t, s, i),
      (t.memoizedState = n.state),
      o && Nm(t, r, !0),
      t.child
    );
  }
  function Eg(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Cm(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Cm(e, t.context, !1),
      ad(e, t.containerInfo);
  }
  function Cg(e, t, r, n, o) {
    return yo(), Yc(o), (t.flags |= 256), St(e, t, r, n), t.child;
  }
  var xd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function kd(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Og(e, t, r) {
    var n = t.pendingProps,
      o = We.current,
      i = !1,
      a = (t.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      s
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      Me(We, o & 1),
      e === null)
    )
      return (
        Xc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((a = n.children),
            (e = n.fallback),
            i
              ? ((n = t.mode),
                (i = t.child),
                (a = { mode: "hidden", children: a }),
                !(n & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = a))
                  : (i = Us(a, n, 0, null)),
                (e = _n(e, n, r, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = kd(r)),
                (t.memoizedState = xd),
                e)
              : Ed(t, a))
      );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
      return FS(e, t, a, n, s, o, r);
    if (i) {
      (i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
      var l = { mode: "hidden", children: n.children };
      return (
        !(a & 1) && t.child !== o
          ? ((n = t.child),
            (n.childLanes = 0),
            (n.pendingProps = l),
            (t.deletions = null))
          : ((n = un(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
        s !== null ? (i = un(s, i)) : ((i = _n(i, a, r, null)), (i.flags |= 2)),
        (i.return = t),
        (n.return = t),
        (n.sibling = i),
        (t.child = n),
        (n = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? kd(r)
            : {
                baseLanes: a.baseLanes | r,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~r),
        (t.memoizedState = xd),
        n
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (n = un(i, { mode: "visible", children: n.children })),
      !(t.mode & 1) && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n
    );
  }
  function Ed(e, t) {
    return (
      (t = Us({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ts(e, t, r, n) {
    return (
      n !== null && Yc(n),
      So(t, e.child, null, r),
      (e = Ed(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function FS(e, t, r, n, o, i, a) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (n = yd(Error(G(422)))), Ts(e, t, a, n))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (o = t.mode),
          (n = Us({ mode: "visible", children: n.children }, o, 0, null)),
          (i = _n(i, o, a, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && So(t, e.child, null, a),
          (t.child.memoizedState = kd(a)),
          (t.memoizedState = xd),
          i);
    if (!(t.mode & 1)) return Ts(e, t, a, null);
    if (o.data === "$!") {
      if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst;
      return (
        (n = s), (i = Error(G(419))), (n = yd(i, n, void 0)), Ts(e, t, a, n)
      );
    }
    if (((s = (a & e.childLanes) !== 0), Ot || s)) {
      if (((n = ot), n !== null)) {
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
        (o = o & (n.suspendedLanes | a) ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), Mr(e, o), cr(n, e, o, -1));
      }
      return Fd(), (n = yd(Error(G(421)))), Ts(e, t, a, n);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = JS.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Bt = Yr(o.nextSibling)),
        (Lt = t),
        (Fe = !0),
        (ar = null),
        e !== null &&
          ((Dt[Wt++] = Pr),
          (Dt[Wt++] = $r),
          (Dt[Wt++] = xn),
          (Pr = e.id),
          ($r = e.overflow),
          (xn = t)),
        (t = Ed(t, n.children)),
        (t.flags |= 4096),
        t);
  }
  function Ng(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), td(e.return, t, r);
  }
  function Cd(e, t, r, n, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = n),
        (i.tail = r),
        (i.tailMode = o));
  }
  function Tg(e, t, r) {
    var n = t.pendingProps,
      o = n.revealOrder,
      i = n.tail;
    if ((St(e, t, n.children, r), (n = We.current), n & 2))
      (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ng(e, r, t);
          else if (e.tag === 19) Ng(e, r, t);
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
      n &= 1;
    }
    if ((Me(We, n), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (r = t.child, o = null; r !== null; )
            (e = r.alternate),
              e !== null && xs(e) === null && (o = r),
              (r = r.sibling);
          (r = o),
            r === null
              ? ((o = t.child), (t.child = null))
              : ((o = r.sibling), (r.sibling = null)),
            Cd(t, !1, o, r, i);
          break;
        case "backwards":
          for (r = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && xs(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = r), (r = o), (o = e);
          }
          Cd(t, !0, r, null, i);
          break;
        case "together":
          Cd(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Rs(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Br(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Nn |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(G(153));
    if (t.child !== null) {
      for (
        e = t.child, r = un(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = un(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function jS(e, t, r) {
    switch (t.tag) {
      case 3:
        Eg(t), yo();
        break;
      case 5:
        Hm(t);
        break;
      case 1:
        Ct(t.type) && ds(t);
        break;
      case 4:
        ad(t, t.stateNode.containerInfo);
        break;
      case 10:
        var n = t.type._context,
          o = t.memoizedProps.value;
        Me(gs, n._currentValue), (n._currentValue = o);
        break;
      case 13:
        if (((n = t.memoizedState), n !== null))
          return n.dehydrated !== null
            ? (Me(We, We.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Og(e, t, r)
            : (Me(We, We.current & 1),
              (e = Br(e, t, r)),
              e !== null ? e.sibling : null);
        Me(We, We.current & 1);
        break;
      case 19:
        if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (n) return Tg(e, t, r);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Me(We, We.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Sg(e, t, r);
    }
    return Br(e, t, r);
  }
  var Rg, Od, Ag, _g;
  (Rg = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Od = function () {}),
    (Ag = function (e, t, r, n) {
      var o = e.memoizedProps;
      if (o !== n) {
        (e = t.stateNode), Cn(br.current);
        var i = null;
        switch (r) {
          case "input":
            (o = tc(e, o)), (n = tc(e, n)), (i = []);
            break;
          case "select":
            (o = De({}, o, { value: void 0 })),
              (n = De({}, n, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (o = oc(e, o)), (n = oc(e, n)), (i = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof n.onClick == "function" &&
              (e.onclick = ls);
        }
        ac(r, n);
        var a;
        r = null;
        for (u in o)
          if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
            if (u === "style") {
              var s = o[u];
              for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
            } else
              u !== "dangerouslySetInnerHTML" &&
                u !== "children" &&
                u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                u !== "autoFocus" &&
                (li.hasOwnProperty(u)
                  ? i || (i = [])
                  : (i = i || []).push(u, null));
        for (u in n) {
          var l = n[u];
          if (
            ((s = o == null ? void 0 : o[u]),
            n.hasOwnProperty(u) && l !== s && (l != null || s != null))
          )
            if (u === "style")
              if (s) {
                for (a in s)
                  !s.hasOwnProperty(a) ||
                    (l && l.hasOwnProperty(a)) ||
                    (r || (r = {}), (r[a] = ""));
                for (a in l)
                  l.hasOwnProperty(a) &&
                    s[a] !== l[a] &&
                    (r || (r = {}), (r[a] = l[a]));
              } else r || (i || (i = []), i.push(u, r)), (r = l);
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
                  (li.hasOwnProperty(u)
                    ? (l != null && u === "onScroll" && Be("scroll", e),
                      i || s === l || (i = []))
                    : (i = i || []).push(u, l));
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    }),
    (_g = function (e, t, r, n) {
      r !== n && (t.flags |= 4);
    });
  function Vi(e, t) {
    if (!Fe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var n = null; r !== null; )
            r.alternate !== null && (n = r), (r = r.sibling);
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function gt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (r |= o.lanes | o.childLanes),
          (n |= o.subtreeFlags & 14680064),
          (n |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (r |= o.lanes | o.childLanes),
          (n |= o.subtreeFlags),
          (n |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = r), t;
  }
  function US(e, t, r) {
    var n = t.pendingProps;
    switch ((Kc(t), t.tag)) {
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
        return gt(t), null;
      case 1:
        return Ct(t.type) && cs(), gt(t), null;
      case 3:
        return (
          (n = t.stateNode),
          xo(),
          ze(Et),
          ze(ht),
          ud(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ms(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ar !== null && (Ld(ar), (ar = null)))),
          Od(e, t),
          gt(t),
          null
        );
      case 5:
        sd(t);
        var o = Cn(Fi.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          Ag(e, t, r, n, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(G(166));
            return gt(t), null;
          }
          if (((e = Cn(br.current)), ms(t))) {
            (n = t.stateNode), (r = t.type);
            var i = t.memoizedProps;
            switch (((n[gr] = t), (n[$i] = i), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Be("cancel", n), Be("close", n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < _i.length; o++) Be(_i[o], n);
                break;
              case "source":
                Be("error", n);
                break;
              case "img":
              case "image":
              case "link":
                Be("error", n), Be("load", n);
                break;
              case "details":
                Be("toggle", n);
                break;
              case "input":
                ch(n, i), Be("invalid", n);
                break;
              case "select":
                (n._wrapperState = { wasMultiple: !!i.multiple }),
                  Be("invalid", n);
                break;
              case "textarea":
                ph(n, i), Be("invalid", n);
            }
            ac(r, i), (o = null);
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var s = i[a];
                a === "children"
                  ? typeof s == "string"
                    ? n.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        ss(n.textContent, s, e),
                      (o = ["children", s]))
                    : typeof s == "number" &&
                      n.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        ss(n.textContent, s, e),
                      (o = ["children", "" + s]))
                  : li.hasOwnProperty(a) &&
                    s != null &&
                    a === "onScroll" &&
                    Be("scroll", n);
              }
            switch (r) {
              case "input":
                za(n), fh(n, i, !0);
                break;
              case "textarea":
                za(n), mh(n);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (n.onclick = ls);
            }
            (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
          } else {
            (a = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = gh(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof n.is == "string"
                  ? (e = a.createElement(r, { is: n.is }))
                  : ((e = a.createElement(r)),
                    r === "select" &&
                      ((a = e),
                      n.multiple
                        ? (a.multiple = !0)
                        : n.size && (a.size = n.size)))
                : (e = a.createElementNS(e, r)),
              (e[gr] = t),
              (e[$i] = n),
              Rg(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = sc(r, n)), r)) {
                case "dialog":
                  Be("cancel", e), Be("close", e), (o = n);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Be("load", e), (o = n);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < _i.length; o++) Be(_i[o], e);
                  o = n;
                  break;
                case "source":
                  Be("error", e), (o = n);
                  break;
                case "img":
                case "image":
                case "link":
                  Be("error", e), Be("load", e), (o = n);
                  break;
                case "details":
                  Be("toggle", e), (o = n);
                  break;
                case "input":
                  ch(e, n), (o = tc(e, n)), Be("invalid", e);
                  break;
                case "option":
                  o = n;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!n.multiple }),
                    (o = De({}, n, { value: void 0 })),
                    Be("invalid", e);
                  break;
                case "textarea":
                  ph(e, n), (o = oc(e, n)), Be("invalid", e);
                  break;
                default:
                  o = n;
              }
              ac(r, o), (s = o);
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var l = s[i];
                  i === "style"
                    ? vh(e, l)
                    : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && bh(e, l))
                    : i === "children"
                    ? typeof l == "string"
                      ? (r !== "textarea" || l !== "") && fi(e, l)
                      : typeof l == "number" && fi(e, "" + l)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (li.hasOwnProperty(i)
                        ? l != null && i === "onScroll" && Be("scroll", e)
                        : l != null && Vu(e, i, l, a));
                }
              switch (r) {
                case "input":
                  za(e), fh(e, n, !1);
                  break;
                case "textarea":
                  za(e), mh(e);
                  break;
                case "option":
                  n.value != null && e.setAttribute("value", "" + Vr(n.value));
                  break;
                case "select":
                  (e.multiple = !!n.multiple),
                    (i = n.value),
                    i != null
                      ? ro(e, !!n.multiple, i, !1)
                      : n.defaultValue != null &&
                        ro(e, !!n.multiple, n.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = ls);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  n = !!n.autoFocus;
                  break e;
                case "img":
                  n = !0;
                  break e;
                default:
                  n = !1;
              }
            }
            n && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return gt(t), null;
      case 6:
        if (e && t.stateNode != null) _g(e, t, e.memoizedProps, n);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(G(166));
          if (((r = Cn(Fi.current)), Cn(br.current), ms(t))) {
            if (
              ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[gr] = t),
              (i = n.nodeValue !== r) && ((e = Lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ss(n.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ss(n.nodeValue, r, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[gr] = t),
              (t.stateNode = n);
        }
        return gt(t), null;
      case 13:
        if (
          (ze(We),
          (n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Fe && Bt !== null && t.mode & 1 && !(t.flags & 128))
            Pm(), yo(), (t.flags |= 98560), (i = !1);
          else if (((i = ms(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(G(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(G(317));
              i[gr] = t;
            } else
              yo(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            gt(t), (i = !1);
          } else ar !== null && (Ld(ar), (ar = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            n !== (e !== null && e.memoizedState !== null) &&
              n &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || We.current & 1 ? tt === 0 && (tt = 3) : Fd())),
            t.updateQueue !== null && (t.flags |= 4),
            gt(t),
            null);
      case 4:
        return (
          xo(),
          Od(e, t),
          e === null && Ii(t.stateNode.containerInfo),
          gt(t),
          null
        );
      case 10:
        return ed(t.type._context), gt(t), null;
      case 17:
        return Ct(t.type) && cs(), gt(t), null;
      case 19:
        if ((ze(We), (i = t.memoizedState), i === null)) return gt(t), null;
        if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (n) Vi(i, !1);
          else {
            if (tt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = xs(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      Vi(i, !1),
                      n = a.updateQueue,
                      n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      n = r,
                      r = t.child;
                    r !== null;

                  )
                    (i = r),
                      (e = n),
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
                      (r = r.sibling);
                  return Me(We, (We.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Xe() > Oo &&
              ((t.flags |= 128), (n = !0), Vi(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = xs(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Vi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !Fe)
              )
                return gt(t), null;
            } else
              2 * Xe() - i.renderingStartTime > Oo &&
                r !== 1073741824 &&
                ((t.flags |= 128), (n = !0), Vi(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((r = i.last),
              r !== null ? (r.sibling = a) : (t.child = a),
              (i.last = a));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Xe()),
            (t.sibling = null),
            (r = We.current),
            Me(We, n ? (r & 1) | 2 : r & 1),
            t)
          : (gt(t), null);
      case 22:
      case 23:
        return (
          zd(),
          (n = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
          n && t.mode & 1
            ? zt & 1073741824 &&
              (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : gt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(G(156, t.tag));
  }
  function DS(e, t) {
    switch ((Kc(t), t.tag)) {
      case 1:
        return (
          Ct(t.type) && cs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          xo(),
          ze(Et),
          ze(ht),
          ud(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return sd(t), null;
      case 13:
        if (
          (ze(We), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(G(340));
          yo();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ze(We), null;
      case 4:
        return xo(), null;
      case 10:
        return ed(t.type._context), null;
      case 22:
      case 23:
        return zd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var As = !1,
    bt = !1,
    WS = typeof WeakSet == "function" ? WeakSet : Set,
    re = null;
  function Eo(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (n) {
          qe(e, t, n);
        }
      else r.current = null;
  }
  function Ig(e, t, r) {
    try {
      r();
    } catch (n) {
      qe(e, t, n);
    }
  }
  var Pg = !1;
  function VS(e, t) {
    if (((Fc = Xa), (e = um()), _c(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var n = r.getSelection && r.getSelection();
          if (n && n.rangeCount !== 0) {
            r = n.anchorNode;
            var o = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              r.nodeType, i.nodeType;
            } catch {
              r = null;
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
                var m;
                f !== r || (o !== 0 && f.nodeType !== 3) || (s = a + o),
                  f !== i || (n !== 0 && f.nodeType !== 3) || (l = a + n),
                  f.nodeType === 3 && (a += f.nodeValue.length),
                  (m = f.firstChild) !== null;

              )
                (h = f), (f = m);
              for (;;) {
                if (f === e) break t;
                if (
                  (h === r && ++u === o && (s = a),
                  h === i && ++d === n && (l = a),
                  (m = f.nextSibling) !== null)
                )
                  break;
                (f = h), (h = f.parentNode);
              }
              f = m;
            }
            r = s === -1 || l === -1 ? null : { start: s, end: l };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      jc = { focusedElem: e, selectionRange: r }, Xa = !1, re = t;
      re !== null;

    )
      if (
        ((t = re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (re = e);
      else
        for (; re !== null; ) {
          t = re;
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
                      b = t.stateNode,
                      y = b.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? x : sr(t.type, x),
                        R,
                      );
                    b.__reactInternalSnapshotBeforeUpdate = y;
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
          } catch (k) {
            qe(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (re = e);
            break;
          }
          re = t.return;
        }
    return (g = Pg), (Pg = !1), g;
  }
  function Hi(e, t, r) {
    var n = t.updateQueue;
    if (((n = n !== null ? n.lastEffect : null), n !== null)) {
      var o = (n = n.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && Ig(t, r, i);
        }
        o = o.next;
      } while (o !== n);
    }
  }
  function _s(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var n = r.create;
          r.destroy = n();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Nd(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function $g(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), $g(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[gr],
          delete t[$i],
          delete t[Vc],
          delete t[OS],
          delete t[NS])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Mg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Lg(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mg(e.return)) return null;
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
  function Td(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = ls));
    else if (n !== 4 && ((e = e.child), e !== null))
      for (Td(e, t, r), e = e.sibling; e !== null; )
        Td(e, t, r), (e = e.sibling);
  }
  function Rd(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && ((e = e.child), e !== null))
      for (Rd(e, t, r), e = e.sibling; e !== null; )
        Rd(e, t, r), (e = e.sibling);
  }
  var lt = null,
    lr = !1;
  function nn(e, t, r) {
    for (r = r.child; r !== null; ) Bg(e, t, r), (r = r.sibling);
  }
  function Bg(e, t, r) {
    if (mr && typeof mr.onCommitFiberUnmount == "function")
      try {
        mr.onCommitFiberUnmount(Va, r);
      } catch {}
    switch (r.tag) {
      case 5:
        bt || Eo(r, t);
      case 6:
        var n = lt,
          o = lr;
        (lt = null),
          nn(e, t, r),
          (lt = n),
          (lr = o),
          lt !== null &&
            (lr
              ? ((e = lt),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : lt.removeChild(r.stateNode));
        break;
      case 18:
        lt !== null &&
          (lr
            ? ((e = lt),
              (r = r.stateNode),
              e.nodeType === 8
                ? Wc(e.parentNode, r)
                : e.nodeType === 1 && Wc(e, r),
              ki(e))
            : Wc(lt, r.stateNode));
        break;
      case 4:
        (n = lt),
          (o = lr),
          (lt = r.stateNode.containerInfo),
          (lr = !0),
          nn(e, t, r),
          (lt = n),
          (lr = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !bt &&
          ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
        ) {
          o = n = n.next;
          do {
            var i = o,
              a = i.destroy;
            (i = i.tag),
              a !== void 0 && (i & 2 || i & 4) && Ig(r, t, a),
              (o = o.next);
          } while (o !== n);
        }
        nn(e, t, r);
        break;
      case 1:
        if (
          !bt &&
          (Eo(r, t),
          (n = r.stateNode),
          typeof n.componentWillUnmount == "function")
        )
          try {
            (n.props = r.memoizedProps),
              (n.state = r.memoizedState),
              n.componentWillUnmount();
          } catch (s) {
            qe(r, t, s);
          }
        nn(e, t, r);
        break;
      case 21:
        nn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((bt = (n = bt) || r.memoizedState !== null), nn(e, t, r), (bt = n))
          : nn(e, t, r);
        break;
      default:
        nn(e, t, r);
    }
  }
  function zg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new WS()),
        t.forEach(function (n) {
          var o = ZS.bind(null, e, n);
          r.has(n) || (r.add(n), n.then(o, o));
        });
    }
  }
  function ur(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var o = r[n];
        try {
          var i = e,
            a = t,
            s = a;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (lt = s.stateNode), (lr = !1);
                break e;
              case 3:
                (lt = s.stateNode.containerInfo), (lr = !0);
                break e;
              case 4:
                (lt = s.stateNode.containerInfo), (lr = !0);
                break e;
            }
            s = s.return;
          }
          if (lt === null) throw Error(G(160));
          Bg(i, a, o), (lt = null), (lr = !1);
          var l = o.alternate;
          l !== null && (l.return = null), (o.return = null);
        } catch (u) {
          qe(o, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Fg(t, e), (t = t.sibling);
  }
  function Fg(e, t) {
    var r = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ur(t, e), vr(e), n & 4)) {
          try {
            Hi(3, e, e.return), _s(3, e);
          } catch (x) {
            qe(e, e.return, x);
          }
          try {
            Hi(5, e, e.return);
          } catch (x) {
            qe(e, e.return, x);
          }
        }
        break;
      case 1:
        ur(t, e), vr(e), n & 512 && r !== null && Eo(r, r.return);
        break;
      case 5:
        if (
          (ur(t, e),
          vr(e),
          n & 512 && r !== null && Eo(r, r.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            fi(o, "");
          } catch (x) {
            qe(e, e.return, x);
          }
        }
        if (n & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            a = r !== null ? r.memoizedProps : i,
            s = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              s === "input" && i.type === "radio" && i.name != null && dh(o, i),
                sc(s, a);
              var u = sc(s, i);
              for (a = 0; a < l.length; a += 2) {
                var d = l[a],
                  f = l[a + 1];
                d === "style"
                  ? vh(o, f)
                  : d === "dangerouslySetInnerHTML"
                  ? bh(o, f)
                  : d === "children"
                  ? fi(o, f)
                  : Vu(o, d, f, u);
              }
              switch (s) {
                case "input":
                  rc(o, i);
                  break;
                case "textarea":
                  hh(o, i);
                  break;
                case "select":
                  var h = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var m = i.value;
                  m != null
                    ? ro(o, !!i.multiple, m, !1)
                    : h !== !!i.multiple &&
                      (i.defaultValue != null
                        ? ro(o, !!i.multiple, i.defaultValue, !0)
                        : ro(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[$i] = i;
            } catch (x) {
              qe(e, e.return, x);
            }
        }
        break;
      case 6:
        if ((ur(t, e), vr(e), n & 4)) {
          if (e.stateNode === null) throw Error(G(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (x) {
            qe(e, e.return, x);
          }
        }
        break;
      case 3:
        if (
          (ur(t, e), vr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            ki(t.containerInfo);
          } catch (x) {
            qe(e, e.return, x);
          }
        break;
      case 4:
        ur(t, e), vr(e);
        break;
      case 13:
        ur(t, e),
          vr(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Id = Xe())),
          n & 4 && zg(e);
        break;
      case 22:
        if (
          ((d = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((bt = (u = bt) || d), ur(t, e), (bt = u)) : ur(t, e),
          vr(e),
          n & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
          )
            for (re = e, d = e.child; d !== null; ) {
              for (f = re = d; re !== null; ) {
                switch (((h = re), (m = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Hi(4, h, h.return);
                    break;
                  case 1:
                    Eo(h, h.return);
                    var g = h.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (n = h), (r = h.return);
                      try {
                        (t = n),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (x) {
                        qe(n, r, x);
                      }
                    }
                    break;
                  case 5:
                    Eo(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      Dg(f);
                      continue;
                    }
                }
                m !== null ? ((m.return = h), (re = m)) : Dg(f);
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
                        (s.style.display = yh("display", a)));
                } catch (x) {
                  qe(e, e.return, x);
                }
              }
            } else if (f.tag === 6) {
              if (d === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (x) {
                  qe(e, e.return, x);
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
        ur(t, e), vr(e), n & 4 && zg(e);
        break;
      case 21:
        break;
      default:
        ur(t, e), vr(e);
    }
  }
  function vr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Mg(r)) {
              var n = r;
              break e;
            }
            r = r.return;
          }
          throw Error(G(160));
        }
        switch (n.tag) {
          case 5:
            var o = n.stateNode;
            n.flags & 32 && (fi(o, ""), (n.flags &= -33));
            var i = Lg(e);
            Rd(e, i, o);
            break;
          case 3:
          case 4:
            var a = n.stateNode.containerInfo,
              s = Lg(e);
            Td(e, s, a);
            break;
          default:
            throw Error(G(161));
        }
      } catch (l) {
        qe(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function HS(e, t, r) {
    (re = e), jg(e);
  }
  function jg(e, t, r) {
    for (var n = (e.mode & 1) !== 0; re !== null; ) {
      var o = re,
        i = o.child;
      if (o.tag === 22 && n) {
        var a = o.memoizedState !== null || As;
        if (!a) {
          var s = o.alternate,
            l = (s !== null && s.memoizedState !== null) || bt;
          s = As;
          var u = bt;
          if (((As = a), (bt = l) && !u))
            for (re = o; re !== null; )
              (a = re),
                (l = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? Wg(o)
                  : l !== null
                  ? ((l.return = a), (re = l))
                  : Wg(o);
          for (; i !== null; ) (re = i), jg(i), (i = i.sibling);
          (re = o), (As = s), (bt = u);
        }
        Ug(e);
      } else
        o.subtreeFlags & 8772 && i !== null
          ? ((i.return = o), (re = i))
          : Ug(e);
    }
  }
  function Ug(e) {
    for (; re !== null; ) {
      var t = re;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                bt || _s(5, t);
                break;
              case 1:
                var n = t.stateNode;
                if (t.flags & 4 && !bt)
                  if (r === null) n.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : sr(t.type, r.memoizedProps);
                    n.componentDidUpdate(
                      o,
                      r.memoizedState,
                      n.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && Bm(t, i, n);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Bm(t, a, r);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = s;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && r.focus();
                      break;
                    case "img":
                      l.src && (r.src = l.src);
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
                      f !== null && ki(f);
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
          bt || (t.flags & 512 && Nd(t));
        } catch (h) {
          qe(t, t.return, h);
        }
      }
      if (t === e) {
        re = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (re = r);
        break;
      }
      re = t.return;
    }
  }
  function Dg(e) {
    for (; re !== null; ) {
      var t = re;
      if (t === e) {
        re = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (re = r);
        break;
      }
      re = t.return;
    }
  }
  function Wg(e) {
    for (; re !== null; ) {
      var t = re;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              _s(4, t);
            } catch (l) {
              qe(t, r, l);
            }
            break;
          case 1:
            var n = t.stateNode;
            if (typeof n.componentDidMount == "function") {
              var o = t.return;
              try {
                n.componentDidMount();
              } catch (l) {
                qe(t, o, l);
              }
            }
            var i = t.return;
            try {
              Nd(t);
            } catch (l) {
              qe(t, i, l);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Nd(t);
            } catch (l) {
              qe(t, a, l);
            }
        }
      } catch (l) {
        qe(t, t.return, l);
      }
      if (t === e) {
        re = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (re = s);
        break;
      }
      re = t.return;
    }
  }
  var qS = Math.ceil,
    Is = Ar.ReactCurrentDispatcher,
    Ad = Ar.ReactCurrentOwner,
    qt = Ar.ReactCurrentBatchConfig,
    Ce = 0,
    ot = null,
    Ye = null,
    ut = 0,
    zt = 0,
    Co = Jr(0),
    tt = 0,
    qi = null,
    Nn = 0,
    Ps = 0,
    _d = 0,
    Gi = null,
    Nt = null,
    Id = 0,
    Oo = 1 / 0,
    zr = null,
    $s = !1,
    Pd = null,
    on = null,
    Ms = !1,
    an = null,
    Ls = 0,
    Ki = 0,
    $d = null,
    Bs = -1,
    zs = 0;
  function xt() {
    return Ce & 6 ? Xe() : Bs !== -1 ? Bs : (Bs = Xe());
  }
  function sn(e) {
    return e.mode & 1
      ? Ce & 2 && ut !== 0
        ? ut & -ut
        : RS.transition !== null
        ? (zs === 0 && (zs = $h()), zs)
        : ((e = _e),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wh(e.type))),
          e)
      : 1;
  }
  function cr(e, t, r, n) {
    if (50 < Ki) throw ((Ki = 0), ($d = null), Error(G(185)));
    yi(e, r, n),
      (!(Ce & 2) || e !== ot) &&
        (e === ot && (!(Ce & 2) && (Ps |= r), tt === 4 && ln(e, ut)),
        Tt(e, n),
        r === 1 &&
          Ce === 0 &&
          !(t.mode & 1) &&
          ((Oo = Xe() + 500), fs && en()));
  }
  function Tt(e, t) {
    var r = e.callbackNode;
    Rw(e, t);
    var n = Ga(e, e === ot ? ut : 0);
    if (n === 0)
      r !== null && _h(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = n & -n), e.callbackPriority !== t)) {
      if ((r != null && _h(r), t === 1))
        e.tag === 0 ? TS(Hg.bind(null, e)) : Tm(Hg.bind(null, e)),
          ES(function () {
            !(Ce & 6) && en();
          }),
          (r = null);
      else {
        switch (Mh(n)) {
          case 1:
            r = hc;
            break;
          case 4:
            r = Ih;
            break;
          case 16:
            r = Wa;
            break;
          case 536870912:
            r = Ph;
            break;
          default:
            r = Wa;
        }
        r = Zg(r, Vg.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Vg(e, t) {
    if (((Bs = -1), (zs = 0), Ce & 6)) throw Error(G(327));
    var r = e.callbackNode;
    if (No() && e.callbackNode !== r) return null;
    var n = Ga(e, e === ot ? ut : 0);
    if (n === 0) return null;
    if (n & 30 || n & e.expiredLanes || t) t = Fs(e, n);
    else {
      t = n;
      var o = Ce;
      Ce |= 2;
      var i = Gg();
      (ot !== e || ut !== t) && ((zr = null), (Oo = Xe() + 500), Rn(e, t));
      do
        try {
          QS();
          break;
        } catch (s) {
          qg(e, s);
        }
      while (1);
      Zc(),
        (Is.current = i),
        (Ce = o),
        Ye !== null ? (t = 0) : ((ot = null), (ut = 0), (t = tt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = mc(e)), o !== 0 && ((n = o), (t = Md(e, o)))),
        t === 1)
      )
        throw ((r = qi), Rn(e, 0), ln(e, n), Tt(e, Xe()), r);
      if (t === 6) ln(e, n);
      else {
        if (
          ((o = e.current.alternate),
          !(n & 30) &&
            !GS(o) &&
            ((t = Fs(e, n)),
            t === 2 && ((i = mc(e)), i !== 0 && ((n = i), (t = Md(e, i)))),
            t === 1))
        )
          throw ((r = qi), Rn(e, 0), ln(e, n), Tt(e, Xe()), r);
        switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
          case 0:
          case 1:
            throw Error(G(345));
          case 2:
            An(e, Nt, zr);
            break;
          case 3:
            if (
              (ln(e, n),
              (n & 130023424) === n && ((t = Id + 500 - Xe()), 10 < t))
            ) {
              if (Ga(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & n) !== n)) {
                xt(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Dc(An.bind(null, e, Nt, zr), t);
              break;
            }
            An(e, Nt, zr);
            break;
          case 4:
            if ((ln(e, n), (n & 4194240) === n)) break;
            for (t = e.eventTimes, o = -1; 0 < n; ) {
              var a = 31 - or(n);
              (i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i);
            }
            if (
              ((n = o),
              (n = Xe() - n),
              (n =
                (120 > n
                  ? 120
                  : 480 > n
                  ? 480
                  : 1080 > n
                  ? 1080
                  : 1920 > n
                  ? 1920
                  : 3e3 > n
                  ? 3e3
                  : 4320 > n
                  ? 4320
                  : 1960 * qS(n / 1960)) - n),
              10 < n)
            ) {
              e.timeoutHandle = Dc(An.bind(null, e, Nt, zr), n);
              break;
            }
            An(e, Nt, zr);
            break;
          case 5:
            An(e, Nt, zr);
            break;
          default:
            throw Error(G(329));
        }
      }
    }
    return Tt(e, Xe()), e.callbackNode === r ? Vg.bind(null, e) : null;
  }
  function Md(e, t) {
    var r = Gi;
    return (
      e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
      (e = Fs(e, t)),
      e !== 2 && ((t = Nt), (Nt = r), t !== null && Ld(t)),
      e
    );
  }
  function Ld(e) {
    Nt === null ? (Nt = e) : Nt.push.apply(Nt, e);
  }
  function GS(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var n = 0; n < r.length; n++) {
            var o = r[n],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!ir(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
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
  function ln(e, t) {
    for (
      t &= ~_d,
        t &= ~Ps,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - or(t),
        n = 1 << r;
      (e[r] = -1), (t &= ~n);
    }
  }
  function Hg(e) {
    if (Ce & 6) throw Error(G(327));
    No();
    var t = Ga(e, 0);
    if (!(t & 1)) return Tt(e, Xe()), null;
    var r = Fs(e, t);
    if (e.tag !== 0 && r === 2) {
      var n = mc(e);
      n !== 0 && ((t = n), (r = Md(e, n)));
    }
    if (r === 1) throw ((r = qi), Rn(e, 0), ln(e, t), Tt(e, Xe()), r);
    if (r === 6) throw Error(G(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      An(e, Nt, zr),
      Tt(e, Xe()),
      null
    );
  }
  function Bd(e, t) {
    var r = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      (Ce = r), Ce === 0 && ((Oo = Xe() + 500), fs && en());
    }
  }
  function Tn(e) {
    an !== null && an.tag === 0 && !(Ce & 6) && No();
    var t = Ce;
    Ce |= 1;
    var r = qt.transition,
      n = _e;
    try {
      if (((qt.transition = null), (_e = 1), e)) return e();
    } finally {
      (_e = n), (qt.transition = r), (Ce = t), !(Ce & 6) && en();
    }
  }
  function zd() {
    (zt = Co.current), ze(Co);
  }
  function Rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), kS(r)), Ye !== null))
      for (r = Ye.return; r !== null; ) {
        var n = r;
        switch ((Kc(n), n.tag)) {
          case 1:
            (n = n.type.childContextTypes), n != null && cs();
            break;
          case 3:
            xo(), ze(Et), ze(ht), ud();
            break;
          case 5:
            sd(n);
            break;
          case 4:
            xo();
            break;
          case 13:
            ze(We);
            break;
          case 19:
            ze(We);
            break;
          case 10:
            ed(n.type._context);
            break;
          case 22:
          case 23:
            zd();
        }
        r = r.return;
      }
    if (
      ((ot = e),
      (Ye = e = un(e.current, null)),
      (ut = zt = t),
      (tt = 0),
      (qi = null),
      (_d = Ps = Nn = 0),
      (Nt = Gi = null),
      En !== null)
    ) {
      for (t = 0; t < En.length; t++)
        if (((r = En[t]), (n = r.interleaved), n !== null)) {
          r.interleaved = null;
          var o = n.next,
            i = r.pending;
          if (i !== null) {
            var a = i.next;
            (i.next = o), (n.next = a);
          }
          r.pending = n;
        }
      En = null;
    }
    return e;
  }
  function qg(e, t) {
    do {
      var r = Ye;
      try {
        if ((Zc(), (ks.current = Ns), Es)) {
          for (var n = Ve.memoizedState; n !== null; ) {
            var o = n.queue;
            o !== null && (o.pending = null), (n = n.next);
          }
          Es = !1;
        }
        if (
          ((On = 0),
          (nt = et = Ve = null),
          (ji = !1),
          (Ui = 0),
          (Ad.current = null),
          r === null || r.return === null)
        ) {
          (tt = 1), (qi = t), (Ye = null);
          break;
        }
        e: {
          var i = e,
            a = r.return,
            s = r,
            l = t;
          if (
            ((t = ut),
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
            var m = gg(a);
            if (m !== null) {
              (m.flags &= -257),
                bg(m, a, s, i, t),
                m.mode & 1 && mg(i, u, t),
                (t = m),
                (l = u);
              var g = t.updateQueue;
              if (g === null) {
                var x = new Set();
                x.add(l), (t.updateQueue = x);
              } else g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                mg(i, u, t), Fd();
                break e;
              }
              l = Error(G(426));
            }
          } else if (Fe && s.mode & 1) {
            var R = gg(a);
            if (R !== null) {
              !(R.flags & 65536) && (R.flags |= 256),
                bg(R, a, s, i, t),
                Yc(ko(l, s));
              break e;
            }
          }
          (i = l = ko(l, s)),
            tt !== 4 && (tt = 2),
            Gi === null ? (Gi = [i]) : Gi.push(i),
            (i = a);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = pg(i, l, t);
                Lm(i, b);
                break e;
              case 1:
                s = l;
                var y = i.type,
                  v = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof y.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (on === null || !on.has(v))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var k = hg(i, s, t);
                  Lm(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Qg(r);
      } catch (C) {
        (t = C), Ye === r && r !== null && (Ye = r = r.return);
        continue;
      }
      break;
    } while (1);
  }
  function Gg() {
    var e = Is.current;
    return (Is.current = Ns), e === null ? Ns : e;
  }
  function Fd() {
    (tt === 0 || tt === 3 || tt === 2) && (tt = 4),
      ot === null || (!(Nn & 268435455) && !(Ps & 268435455)) || ln(ot, ut);
  }
  function Fs(e, t) {
    var r = Ce;
    Ce |= 2;
    var n = Gg();
    (ot !== e || ut !== t) && ((zr = null), Rn(e, t));
    do
      try {
        KS();
        break;
      } catch (o) {
        qg(e, o);
      }
    while (1);
    if ((Zc(), (Ce = r), (Is.current = n), Ye !== null)) throw Error(G(261));
    return (ot = null), (ut = 0), tt;
  }
  function KS() {
    for (; Ye !== null; ) Kg(Ye);
  }
  function QS() {
    for (; Ye !== null && !ww(); ) Kg(Ye);
  }
  function Kg(e) {
    var t = Jg(e.alternate, e, zt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Qg(e) : (Ye = t),
      (Ad.current = null);
  }
  function Qg(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = DS(r, t)), r !== null)) {
          (r.flags &= 32767), (Ye = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (tt = 6), (Ye = null);
          return;
        }
      } else if (((r = US(r, t, zt)), r !== null)) {
        Ye = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ye = t;
        return;
      }
      Ye = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function An(e, t, r) {
    var n = _e,
      o = qt.transition;
    try {
      (qt.transition = null), (_e = 1), XS(e, t, r, n);
    } finally {
      (qt.transition = o), (_e = n);
    }
    return null;
  }
  function XS(e, t, r, n) {
    do No();
    while (an !== null);
    if (Ce & 6) throw Error(G(327));
    r = e.finishedWork;
    var o = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(G(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = r.lanes | r.childLanes;
    if (
      (Aw(e, i),
      e === ot && ((Ye = ot = null), (ut = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        Ms ||
        ((Ms = !0),
        Zg(Wa, function () {
          return No(), null;
        })),
      (i = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || i)
    ) {
      (i = qt.transition), (qt.transition = null);
      var a = _e;
      _e = 1;
      var s = Ce;
      (Ce |= 4),
        (Ad.current = null),
        VS(e, r),
        Fg(r, e),
        gS(jc),
        (Xa = !!Fc),
        (jc = Fc = null),
        (e.current = r),
        HS(r),
        Sw(),
        (Ce = s),
        (_e = a),
        (qt.transition = i);
    } else e.current = r;
    if (
      (Ms && ((Ms = !1), (an = e), (Ls = o)),
      (i = e.pendingLanes),
      i === 0 && (on = null),
      Ew(r.stateNode),
      Tt(e, Xe()),
      t !== null)
    )
      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
        (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
    if ($s) throw (($s = !1), (e = Pd), (Pd = null), e);
    return (
      Ls & 1 && e.tag !== 0 && No(),
      (i = e.pendingLanes),
      i & 1 ? (e === $d ? Ki++ : ((Ki = 0), ($d = e))) : (Ki = 0),
      en(),
      null
    );
  }
  function No() {
    if (an !== null) {
      var e = Mh(Ls),
        t = qt.transition,
        r = _e;
      try {
        if (((qt.transition = null), (_e = 16 > e ? 16 : e), an === null))
          var n = !1;
        else {
          if (((e = an), (an = null), (Ls = 0), Ce & 6)) throw Error(G(331));
          var o = Ce;
          for (Ce |= 4, re = e.current; re !== null; ) {
            var i = re,
              a = i.child;
            if (re.flags & 16) {
              var s = i.deletions;
              if (s !== null) {
                for (var l = 0; l < s.length; l++) {
                  var u = s[l];
                  for (re = u; re !== null; ) {
                    var d = re;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hi(8, d, i);
                    }
                    var f = d.child;
                    if (f !== null) (f.return = d), (re = f);
                    else
                      for (; re !== null; ) {
                        d = re;
                        var h = d.sibling,
                          m = d.return;
                        if (($g(d), d === u)) {
                          re = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = m), (re = h);
                          break;
                        }
                        re = m;
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
                re = i;
              }
            }
            if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (re = a);
            else
              e: for (; re !== null; ) {
                if (((i = re), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(9, i, i.return);
                  }
                var b = i.sibling;
                if (b !== null) {
                  (b.return = i.return), (re = b);
                  break e;
                }
                re = i.return;
              }
          }
          var y = e.current;
          for (re = y; re !== null; ) {
            a = re;
            var v = a.child;
            if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (re = v);
            else
              e: for (a = y; re !== null; ) {
                if (((s = re), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _s(9, s);
                    }
                  } catch (C) {
                    qe(s, s.return, C);
                  }
                if (s === a) {
                  re = null;
                  break e;
                }
                var k = s.sibling;
                if (k !== null) {
                  (k.return = s.return), (re = k);
                  break e;
                }
                re = s.return;
              }
          }
          if (
            ((Ce = o),
            en(),
            mr && typeof mr.onPostCommitFiberRoot == "function")
          )
            try {
              mr.onPostCommitFiberRoot(Va, e);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (_e = r), (qt.transition = t);
      }
    }
    return !1;
  }
  function Xg(e, t, r) {
    (t = ko(r, t)),
      (t = pg(e, t, 1)),
      (e = rn(e, t, 1)),
      (t = xt()),
      e !== null && (yi(e, 1, t), Tt(e, t));
  }
  function qe(e, t, r) {
    if (e.tag === 3) Xg(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xg(t, e, r);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (on === null || !on.has(n)))
          ) {
            (e = ko(r, e)),
              (e = hg(t, e, 1)),
              (t = rn(t, e, 1)),
              (e = xt()),
              t !== null && (yi(t, 1, e), Tt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function YS(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (t = xt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      ot === e &&
        (ut & r) === r &&
        (tt === 4 || (tt === 3 && (ut & 130023424) === ut && 500 > Xe() - Id)
          ? Rn(e, 0)
          : (_d |= r)),
      Tt(e, t);
  }
  function Yg(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = qa), (qa <<= 1), !(qa & 130023424) && (qa = 4194304))
        : (t = 1));
    var r = xt();
    (e = Mr(e, t)), e !== null && (yi(e, t, r), Tt(e, r));
  }
  function JS(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Yg(e, r);
  }
  function ZS(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      default:
        throw Error(G(314));
    }
    n !== null && n.delete(t), Yg(e, r);
  }
  var Jg;
  Jg = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Et.current) Ot = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (Ot = !1), jS(e, t, r);
        Ot = !!(e.flags & 131072);
      }
    else (Ot = !1), Fe && t.flags & 1048576 && Rm(t, hs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var n = t.type;
        Rs(e, t), (e = t.pendingProps);
        var o = mo(t, ht.current);
        wo(t, r), (o = fd(null, t, n, e, o, r));
        var i = pd();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ct(n) ? ((i = !0), ds(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              nd(t),
              (o.updater = ws),
              (t.stateNode = o),
              (o._reactInternals = t),
              id(t, n, e, r),
              (t = Sd(null, t, n, !0, i, r)))
            : ((t.tag = 0), Fe && i && Gc(t), St(null, t, o, r), (t = t.child)),
          t
        );
      case 16:
        n = t.elementType;
        e: {
          switch (
            (Rs(e, t),
            (e = t.pendingProps),
            (o = n._init),
            (n = o(n._payload)),
            (t.type = n),
            (o = t.tag = tx(n)),
            (e = sr(n, e)),
            o)
          ) {
            case 0:
              t = wd(null, t, n, e, r);
              break e;
            case 1:
              t = kg(null, t, n, e, r);
              break e;
            case 11:
              t = yg(null, t, n, e, r);
              break e;
            case 14:
              t = vg(null, t, n, sr(n.type, e), r);
              break e;
          }
          throw Error(G(306, n, ""));
        }
        return t;
      case 0:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : sr(n, o)),
          wd(e, t, n, o, r)
        );
      case 1:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : sr(n, o)),
          kg(e, t, n, o, r)
        );
      case 3:
        e: {
          if ((Eg(t), e === null)) throw Error(G(387));
          (n = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            Mm(e, t),
            vs(t, n, null, r);
          var a = t.memoizedState;
          if (((n = a.element), i.isDehydrated))
            if (
              ((i = {
                element: n,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (o = ko(Error(G(423)), t)), (t = Cg(e, t, n, r, o));
              break e;
            } else if (n !== o) {
              (o = ko(Error(G(424)), t)), (t = Cg(e, t, n, r, o));
              break e;
            } else
              for (
                Bt = Yr(t.stateNode.containerInfo.firstChild),
                  Lt = t,
                  Fe = !0,
                  ar = null,
                  r = Vm(t, null, n, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((yo(), n === o)) {
              t = Br(e, t, r);
              break e;
            }
            St(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Hm(t),
          e === null && Xc(t),
          (n = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = o.children),
          Uc(n, o) ? (a = null) : i !== null && Uc(n, i) && (t.flags |= 32),
          xg(e, t),
          St(e, t, a, r),
          t.child
        );
      case 6:
        return e === null && Xc(t), null;
      case 13:
        return Og(e, t, r);
      case 4:
        return (
          ad(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = So(t, null, n, r)) : St(e, t, n, r),
          t.child
        );
      case 11:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : sr(n, o)),
          yg(e, t, n, o, r)
        );
      case 7:
        return St(e, t, t.pendingProps, r), t.child;
      case 8:
        return St(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return St(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((n = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (a = o.value),
            Me(gs, n._currentValue),
            (n._currentValue = a),
            i !== null)
          )
            if (ir(i.value, a)) {
              if (i.children === o.children && !Et.current) {
                t = Br(e, t, r);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var s = i.dependencies;
                if (s !== null) {
                  a = i.child;
                  for (var l = s.firstContext; l !== null; ) {
                    if (l.context === n) {
                      if (i.tag === 1) {
                        (l = Lr(-1, r & -r)), (l.tag = 2);
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
                      (i.lanes |= r),
                        (l = i.alternate),
                        l !== null && (l.lanes |= r),
                        td(i.return, r, t),
                        (s.lanes |= r);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(G(341));
                  (a.lanes |= r),
                    (s = a.alternate),
                    s !== null && (s.lanes |= r),
                    td(a, r, t),
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
          St(e, t, o.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (n = t.pendingProps.children),
          wo(t, r),
          (o = Vt(o)),
          (n = n(o)),
          (t.flags |= 1),
          St(e, t, n, r),
          t.child
        );
      case 14:
        return (
          (n = t.type),
          (o = sr(n, t.pendingProps)),
          (o = sr(n.type, o)),
          vg(e, t, n, o, r)
        );
      case 15:
        return wg(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : sr(n, o)),
          Rs(e, t),
          (t.tag = 1),
          Ct(n) ? ((e = !0), ds(t)) : (e = !1),
          wo(t, r),
          jm(t, n, o),
          id(t, n, o, r),
          Sd(null, t, n, !0, e, r)
        );
      case 19:
        return Tg(e, t, r);
      case 22:
        return Sg(e, t, r);
    }
    throw Error(G(156, t.tag));
  };
  function Zg(e, t) {
    return Ah(e, t);
  }
  function ex(e, t, r, n) {
    (this.tag = e),
      (this.key = r),
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
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Gt(e, t, r, n) {
    return new ex(e, t, r, n);
  }
  function jd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function tx(e) {
    if (typeof e == "function") return jd(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Gu)) return 11;
      if (e === Xu) return 14;
    }
    return 2;
  }
  function un(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Gt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function js(e, t, r, n, o, i) {
    var a = 2;
    if (((n = e), typeof e == "function")) jd(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case to:
          return _n(r.children, o, i, t);
        case Hu:
          (a = 8), (o |= 8);
          break;
        case qu:
          return (
            (e = Gt(12, r, t, o | 2)), (e.elementType = qu), (e.lanes = i), e
          );
        case Ku:
          return (e = Gt(13, r, t, o)), (e.elementType = Ku), (e.lanes = i), e;
        case Qu:
          return (e = Gt(19, r, t, o)), (e.elementType = Qu), (e.lanes = i), e;
        case ah:
          return Us(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case oh:
                a = 10;
                break e;
              case ih:
                a = 9;
                break e;
              case Gu:
                a = 11;
                break e;
              case Xu:
                a = 14;
                break e;
              case Wr:
                (a = 16), (n = null);
                break e;
            }
          throw Error(G(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Gt(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
    );
  }
  function _n(e, t, r, n) {
    return (e = Gt(7, e, n, t)), (e.lanes = r), e;
  }
  function Us(e, t, r, n) {
    return (
      (e = Gt(22, e, n, t)),
      (e.elementType = ah),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ud(e, t, r) {
    return (e = Gt(6, e, null, t)), (e.lanes = r), e;
  }
  function Dd(e, t, r) {
    return (
      (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function rx(e, t, r, n, o) {
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
      (this.eventTimes = gc(0)),
      (this.expirationTimes = gc(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gc(0)),
      (this.identifierPrefix = n),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Wd(e, t, r, n, o, i, a, s, l) {
    return (
      (e = new rx(e, t, r, s, l)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Gt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      nd(i),
      e
    );
  }
  function nx(e, t, r) {
    var n =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: eo,
      key: n == null ? null : "" + n,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function e0(e) {
    if (!e) return Zr;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1) throw Error(G(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ct(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(G(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Ct(r)) return Om(e, r, t);
    }
    return t;
  }
  function t0(e, t, r, n, o, i, a, s, l) {
    return (
      (e = Wd(r, n, !0, e, o, i, a, s, l)),
      (e.context = e0(null)),
      (r = e.current),
      (n = xt()),
      (o = sn(r)),
      (i = Lr(n, o)),
      (i.callback = t ?? null),
      rn(r, i, o),
      (e.current.lanes = o),
      yi(e, o, n),
      Tt(e, n),
      e
    );
  }
  function Ds(e, t, r, n) {
    var o = t.current,
      i = xt(),
      a = sn(o);
    return (
      (r = e0(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Lr(i, a)),
      (t.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (t.callback = n),
      (e = rn(o, t, a)),
      e !== null && (cr(e, o, a, i), ys(e, o, a)),
      a
    );
  }
  function Ws(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function r0(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Vd(e, t) {
    r0(e, t), (e = e.alternate) && r0(e, t);
  }
  function ox() {
    return null;
  }
  var n0 =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Hd(e) {
    this._internalRoot = e;
  }
  (Vs.prototype.render = Hd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(G(409));
      Ds(e, t, null, null);
    }),
    (Vs.prototype.unmount = Hd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Tn(function () {
            Ds(null, e, null, null);
          }),
            (t[_r] = null);
        }
      });
  function Vs(e) {
    this._internalRoot = e;
  }
  Vs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = zh();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Kr.length && t !== 0 && t < Kr[r].priority; r++);
      Kr.splice(r, 0, e), r === 0 && Uh(e);
    }
  };
  function qd(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Hs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function o0() {}
  function ix(e, t, r, n, o) {
    if (o) {
      if (typeof n == "function") {
        var i = n;
        n = function () {
          var u = Ws(a);
          i.call(u);
        };
      }
      var a = t0(t, n, e, 0, null, !1, !1, "", o0);
      return (
        (e._reactRootContainer = a),
        (e[_r] = a.current),
        Ii(e.nodeType === 8 ? e.parentNode : e),
        Tn(),
        a
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof n == "function") {
      var s = n;
      n = function () {
        var u = Ws(l);
        s.call(u);
      };
    }
    var l = Wd(e, 0, !1, null, null, !1, !1, "", o0);
    return (
      (e._reactRootContainer = l),
      (e[_r] = l.current),
      Ii(e.nodeType === 8 ? e.parentNode : e),
      Tn(function () {
        Ds(t, l, r, n);
      }),
      l
    );
  }
  function qs(e, t, r, n, o) {
    var i = r._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof o == "function") {
        var s = o;
        o = function () {
          var l = Ws(a);
          s.call(l);
        };
      }
      Ds(t, a, e, o);
    } else a = ix(r, t, e, o, n);
    return Ws(a);
  }
  (Lh = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = bi(t.pendingLanes);
          r !== 0 &&
            (bc(t, r | 1), Tt(t, Xe()), !(Ce & 6) && ((Oo = Xe() + 500), en()));
        }
        break;
      case 13:
        Tn(function () {
          var n = Mr(e, 1);
          if (n !== null) {
            var o = xt();
            cr(n, e, 1, o);
          }
        }),
          Vd(e, 1);
    }
  }),
    (yc = function (e) {
      if (e.tag === 13) {
        var t = Mr(e, 134217728);
        if (t !== null) {
          var r = xt();
          cr(t, e, 134217728, r);
        }
        Vd(e, 134217728);
      }
    }),
    (Bh = function (e) {
      if (e.tag === 13) {
        var t = sn(e),
          r = Mr(e, t);
        if (r !== null) {
          var n = xt();
          cr(r, e, t, n);
        }
        Vd(e, t);
      }
    }),
    (zh = function () {
      return _e;
    }),
    (Fh = function (e, t) {
      var r = _e;
      try {
        return (_e = e), t();
      } finally {
        _e = r;
      }
    }),
    (cc = function (e, t, r) {
      switch (t) {
        case "input":
          if ((rc(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t];
              if (n !== e && n.form === e.form) {
                var o = us(n);
                if (!o) throw Error(G(90));
                uh(n), rc(n, o);
              }
            }
          }
          break;
        case "textarea":
          hh(e, r);
          break;
        case "select":
          (t = r.value), t != null && ro(e, !!r.multiple, t, !1);
      }
    }),
    (kh = Bd),
    (Eh = Tn);
  var ax = { usingClientEntryPoint: !1, Events: [Mi, po, us, Sh, xh, Bd] },
    Qi = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    sx = {
      bundleType: Qi.bundleType,
      version: Qi.version,
      rendererPackageName: Qi.rendererPackageName,
      rendererConfig: Qi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ar.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Th(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Qi.findFiberByHostInstance || ox,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gs.isDisabled && Gs.supportsFiber)
      try {
        (Va = Gs.inject(sx)), (mr = Gs);
      } catch {}
  }
  (Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ax),
    (Pt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qd(t)) throw Error(G(200));
      return nx(e, t, null, r);
    }),
    (Pt.createRoot = function (e, t) {
      if (!qd(e)) throw Error(G(299));
      var r = !1,
        n = "",
        o = n0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Wd(e, 1, !1, null, null, r, !1, n, o)),
        (e[_r] = t.current),
        Ii(e.nodeType === 8 ? e.parentNode : e),
        new Hd(t)
      );
    }),
    (Pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(G(188))
          : ((e = Object.keys(e).join(",")), Error(G(268, e)));
      return (e = Th(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Pt.flushSync = function (e) {
      return Tn(e);
    }),
    (Pt.hydrate = function (e, t, r) {
      if (!Hs(t)) throw Error(G(200));
      return qs(null, e, t, !0, r);
    }),
    (Pt.hydrateRoot = function (e, t, r) {
      if (!qd(e)) throw Error(G(405));
      var n = (r != null && r.hydratedSources) || null,
        o = !1,
        i = "",
        a = n0;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
        (t = t0(t, null, e, 1, r ?? null, o, !1, i, a)),
        (e[_r] = t.current),
        Ii(e),
        n)
      )
        for (e = 0; e < n.length; e++)
          (r = n[e]),
            (o = r._getVersion),
            (o = o(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, o])
              : t.mutableSourceEagerHydrationData.push(r, o);
      return new Vs(t);
    }),
    (Pt.render = function (e, t, r) {
      if (!Hs(t)) throw Error(G(200));
      return qs(null, e, t, !1, r);
    }),
    (Pt.unmountComponentAtNode = function (e) {
      if (!Hs(e)) throw Error(G(40));
      return e._reactRootContainer
        ? (Tn(function () {
            qs(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[_r] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Pt.unstable_batchedUpdates = Bd),
    (Pt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!Hs(r)) throw Error(G(200));
      if (e == null || e._reactInternals === void 0) throw Error(G(38));
      return qs(e, t, r, !1, n);
    }),
    (Pt.version = "18.2.0-next-9e3b772b8-20220608"),
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
          } catch (r) {
            console.error(r);
          }
      }
      t(), (e.exports = Pt);
    })(ow);
  const Ks = Fp(Jn);
  var i0,
    a0 = Jn;
  (i0 = a0.createRoot), a0.hydrateRoot;
  function Xi() {
    return (
      (Xi = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Xi.apply(this, arguments)
    );
  }
  var cn;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(cn || (cn = {}));
  const s0 = "popstate";
  function lx(e) {
    e === void 0 && (e = {});
    function t(n, o) {
      let { pathname: i, search: a, hash: s } = n.location;
      return Kd(
        "",
        { pathname: i, search: a, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default",
      );
    }
    function r(n, o) {
      return typeof o == "string" ? o : u0(o);
    }
    return cx(t, r, null, e);
  }
  function rt(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function Gd(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function ux() {
    return Math.random().toString(36).substr(2, 8);
  }
  function l0(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Kd(e, t, r, n) {
    return (
      r === void 0 && (r = null),
      Xi(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? To(t) : t,
        { state: r, key: (t && t.key) || n || ux() },
      )
    );
  }
  function u0(e) {
    let { pathname: t = "/", search: r = "", hash: n = "" } = e;
    return (
      r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
      n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
      t
    );
  }
  function To(e) {
    let t = {};
    if (e) {
      let r = e.indexOf("#");
      r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
      let n = e.indexOf("?");
      n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
        e && (t.pathname = e);
    }
    return t;
  }
  function cx(e, t, r, n) {
    n === void 0 && (n = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = n,
      a = o.history,
      s = cn.Pop,
      l = null,
      u = d();
    u == null && ((u = 0), a.replaceState(Xi({}, a.state, { idx: u }), ""));
    function d() {
      return (a.state || { idx: null }).idx;
    }
    function f() {
      s = cn.Pop;
      let R = d(),
        b = R == null ? null : R - u;
      (u = R), l && l({ action: s, location: x.location, delta: b });
    }
    function h(R, b) {
      s = cn.Push;
      let y = Kd(x.location, R, b);
      r && r(y, R), (u = d() + 1);
      let v = l0(y, u),
        k = x.createHref(y);
      try {
        a.pushState(v, "", k);
      } catch (C) {
        if (C instanceof DOMException && C.name === "DataCloneError") throw C;
        o.location.assign(k);
      }
      i && l && l({ action: s, location: x.location, delta: 1 });
    }
    function m(R, b) {
      s = cn.Replace;
      let y = Kd(x.location, R, b);
      r && r(y, R), (u = d());
      let v = l0(y, u),
        k = x.createHref(y);
      a.replaceState(v, "", k),
        i && l && l({ action: s, location: x.location, delta: 0 });
    }
    function g(R) {
      let b =
          o.location.origin !== "null" ? o.location.origin : o.location.href,
        y = typeof R == "string" ? R : u0(R);
      return (
        rt(
          b,
          "No window.location.(origin|href) available to create URL for href: " +
            y,
        ),
        new URL(y, b)
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
          o.addEventListener(s0, f),
          (l = R),
          () => {
            o.removeEventListener(s0, f), (l = null);
          }
        );
      },
      createHref(R) {
        return t(o, R);
      },
      createURL: g,
      encodeLocation(R) {
        let b = g(R);
        return { pathname: b.pathname, search: b.search, hash: b.hash };
      },
      push: h,
      replace: m,
      go(R) {
        return a.go(R);
      },
    };
    return x;
  }
  var c0;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(c0 || (c0 = {}));
  function dx(e, t, r) {
    r === void 0 && (r = "/");
    let n = typeof t == "string" ? To(t) : t,
      o = h0(n.pathname || "/", r);
    if (o == null) return null;
    let i = d0(e);
    fx(i);
    let a = null;
    for (let s = 0; a == null && s < i.length; ++s) a = Sx(i[s], Ex(o));
    return a;
  }
  function d0(e, t, r, n) {
    t === void 0 && (t = []),
      r === void 0 && (r = []),
      n === void 0 && (n = "");
    let o = (i, a, s) => {
      let l = {
        relativePath: s === void 0 ? i.path || "" : s,
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: a,
        route: i,
      };
      l.relativePath.startsWith("/") &&
        (rt(
          l.relativePath.startsWith(n),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + n + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (l.relativePath = l.relativePath.slice(n.length)));
      let u = In([n, l.relativePath]),
        d = r.concat(l);
      i.children &&
        i.children.length > 0 &&
        (rt(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".'),
        ),
        d0(i.children, t, d, u)),
        !(i.path == null && !i.index) &&
          t.push({ path: u, score: vx(u, i.index), routesMeta: d });
    };
    return (
      e.forEach((i, a) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
          o(i, a);
        else for (let l of f0(i.path)) o(i, a, l);
      }),
      t
    );
  }
  function f0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [r, ...n] = t,
      o = r.endsWith("?"),
      i = r.replace(/\?$/, "");
    if (n.length === 0) return o ? [i, ""] : [i];
    let a = f0(n.join("/")),
      s = [];
    return (
      s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
      o && s.push(...a),
      s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function fx(e) {
    e.sort((t, r) =>
      t.score !== r.score
        ? r.score - t.score
        : wx(
            t.routesMeta.map((n) => n.childrenIndex),
            r.routesMeta.map((n) => n.childrenIndex),
          ),
    );
  }
  const px = /^:\w+$/,
    hx = 3,
    mx = 2,
    gx = 1,
    bx = 10,
    yx = -2,
    p0 = (e) => e === "*";
  function vx(e, t) {
    let r = e.split("/"),
      n = r.length;
    return (
      r.some(p0) && (n += yx),
      t && (n += mx),
      r
        .filter((o) => !p0(o))
        .reduce((o, i) => o + (px.test(i) ? hx : i === "" ? gx : bx), n)
    );
  }
  function wx(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, n) => r === t[n])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function Sx(e, t) {
    let { routesMeta: r } = e,
      n = {},
      o = "/",
      i = [];
    for (let a = 0; a < r.length; ++a) {
      let s = r[a],
        l = a === r.length - 1,
        u = o === "/" ? t : t.slice(o.length) || "/",
        d = xx(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
          u,
        );
      if (!d) return null;
      Object.assign(n, d.params);
      let f = s.route;
      i.push({
        params: n,
        pathname: In([o, d.pathname]),
        pathnameBase: Ax(In([o, d.pathnameBase])),
        route: f,
      }),
        d.pathnameBase !== "/" && (o = In([o, d.pathnameBase]));
    }
    return i;
  }
  function xx(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [r, n] = kx(e.path, e.caseSensitive, e.end),
      o = t.match(r);
    if (!o) return null;
    let i = o[0],
      a = i.replace(/(.)\/+$/, "$1"),
      s = o.slice(1);
    return {
      params: n.reduce((l, u, d) => {
        if (u === "*") {
          let f = s[d] || "";
          a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, "$1");
        }
        return (l[u] = Cx(s[d] || "", u)), l;
      }, {}),
      pathname: i,
      pathnameBase: a,
      pattern: e,
    };
  }
  function kx(e, t, r) {
    t === void 0 && (t = !1),
      r === void 0 && (r = !0),
      Gd(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
      );
    let n = [],
      o =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
          .replace(/\/:(\w+)/g, (i, a) => (n.push(a), "/([^\\/]+)"));
    return (
      e.endsWith("*")
        ? (n.push("*"),
          (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : r
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
      [new RegExp(o, t ? void 0 : "i"), n]
    );
  }
  function Ex(e) {
    try {
      return decodeURI(e);
    } catch (t) {
      return (
        Gd(
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
  function Cx(e, t) {
    try {
      return decodeURIComponent(e);
    } catch (r) {
      return (
        Gd(
          !1,
          'The value for the URL param "' +
            t +
            '" will not be decoded because' +
            (' the string "' +
              e +
              '" is a malformed URL segment. This is probably') +
            (" due to a bad percent encoding (" + r + ")."),
        ),
        e
      );
    }
  }
  function h0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
      n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/";
  }
  function Ox(e, t) {
    t === void 0 && (t = "/");
    let {
      pathname: r,
      search: n = "",
      hash: o = "",
    } = typeof e == "string" ? To(e) : e;
    return {
      pathname: r ? (r.startsWith("/") ? r : Nx(r, t)) : t,
      search: _x(n),
      hash: Ix(o),
    };
  }
  function Nx(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((n) => {
        n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
      }),
      r.length > 1 ? r.join("/") : "/"
    );
  }
  function Qd(e, t, r, n) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." +
        t +
        "` field [" +
        JSON.stringify(n) +
        "].  Please separate it out to the ") +
      ("`to." +
        r +
        "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function Tx(e) {
    return e.filter(
      (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
    );
  }
  function Rx(e, t, r, n) {
    n === void 0 && (n = !1);
    let o;
    typeof e == "string"
      ? (o = To(e))
      : ((o = Xi({}, e)),
        rt(
          !o.pathname || !o.pathname.includes("?"),
          Qd("?", "pathname", "search", o),
        ),
        rt(
          !o.pathname || !o.pathname.includes("#"),
          Qd("#", "pathname", "hash", o),
        ),
        rt(!o.search || !o.search.includes("#"), Qd("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
      a = i ? "/" : o.pathname,
      s;
    if (n || a == null) s = r;
    else {
      let f = t.length - 1;
      if (a.startsWith("..")) {
        let h = a.split("/");
        for (; h[0] === ".."; ) h.shift(), (f -= 1);
        o.pathname = h.join("/");
      }
      s = f >= 0 ? t[f] : "/";
    }
    let l = Ox(o, s),
      u = a && a !== "/" && a.endsWith("/"),
      d = (i || a === ".") && r.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
  }
  const In = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Ax = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    _x = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    Ix = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function Px(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  function Qs() {
    return (
      (Qs = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Qs.apply(this, arguments)
    );
  }
  const Xd = S.createContext(null),
    $x = S.createContext(null),
    Xs = S.createContext(null),
    Ys = S.createContext(null),
    Ro = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    m0 = S.createContext(null);
  function Js() {
    return S.useContext(Ys) != null;
  }
  function g0() {
    return Js() || rt(!1), S.useContext(Ys).location;
  }
  function b0(e) {
    S.useContext(Xs).static || S.useLayoutEffect(e);
  }
  function Zs() {
    let { isDataRoute: e } = S.useContext(Ro);
    return e ? Gx() : Mx();
  }
  function Mx() {
    Js() || rt(!1);
    let e = S.useContext(Xd),
      { basename: t, navigator: r } = S.useContext(Xs),
      { matches: n } = S.useContext(Ro),
      { pathname: o } = g0(),
      i = JSON.stringify(Tx(n).map((s) => s.pathnameBase)),
      a = S.useRef(!1);
    return (
      b0(() => {
        a.current = !0;
      }),
      S.useCallback(
        function (s, l) {
          if ((l === void 0 && (l = {}), !a.current)) return;
          if (typeof s == "number") {
            r.go(s);
            return;
          }
          let u = Rx(s, JSON.parse(i), o, l.relative === "path");
          e == null &&
            t !== "/" &&
            (u.pathname = u.pathname === "/" ? t : In([t, u.pathname])),
            (l.replace ? r.replace : r.push)(u, l.state, l);
        },
        [t, r, i, o, e],
      )
    );
  }
  function Lx(e, t) {
    return Bx(e, t);
  }
  function Bx(e, t, r) {
    Js() || rt(!1);
    let { navigator: n } = S.useContext(Xs),
      { matches: o } = S.useContext(Ro),
      i = o[o.length - 1],
      a = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let l = g0(),
      u;
    if (t) {
      var d;
      let x = typeof t == "string" ? To(t) : t;
      s === "/" || ((d = x.pathname) != null && d.startsWith(s)) || rt(!1),
        (u = x);
    } else u = l;
    let f = u.pathname || "/",
      h = s === "/" ? f : f.slice(s.length) || "/",
      m = dx(e, { pathname: h }),
      g = Dx(
        m &&
          m.map((x) =>
            Object.assign({}, x, {
              params: Object.assign({}, a, x.params),
              pathname: In([
                s,
                n.encodeLocation
                  ? n.encodeLocation(x.pathname).pathname
                  : x.pathname,
              ]),
              pathnameBase:
                x.pathnameBase === "/"
                  ? s
                  : In([
                      s,
                      n.encodeLocation
                        ? n.encodeLocation(x.pathnameBase).pathname
                        : x.pathnameBase,
                    ]),
            }),
          ),
        o,
        r,
      );
    return t && g
      ? S.createElement(
          Ys.Provider,
          {
            value: {
              location: Qs(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                u,
              ),
              navigationType: cn.Pop,
            },
          },
          g,
        )
      : g;
  }
  function zx() {
    let e = qx(),
      t = Px(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      r = e instanceof Error ? e.stack : null,
      n = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
      o = null;
    return S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? S.createElement("pre", { style: n }, r) : null,
      o,
    );
  }
  const Fx = S.createElement(zx, null);
  class jx extends S.Component {
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
    static getDerivedStateFromProps(t, r) {
      return r.location !== t.location ||
        (r.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error || r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation,
          };
    }
    componentDidCatch(t, r) {
      console.error(
        "React Router caught the following error during render",
        t,
        r,
      );
    }
    render() {
      return this.state.error
        ? S.createElement(
            Ro.Provider,
            { value: this.props.routeContext },
            S.createElement(m0.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  }
  function Ux(e) {
    let { routeContext: t, match: r, children: n } = e,
      o = S.useContext(Xd);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (r.route.errorElement || r.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = r.route.id),
      S.createElement(Ro.Provider, { value: t }, n)
    );
  }
  function Dx(e, t, r) {
    var n;
    if ((t === void 0 && (t = []), r === void 0 && (r = null), e == null)) {
      var o;
      if ((o = r) != null && o.errors) e = r.matches;
      else return null;
    }
    let i = e,
      a = (n = r) == null ? void 0 : n.errors;
    if (a != null) {
      let s = i.findIndex(
        (l) => l.route.id && (a == null ? void 0 : a[l.route.id]),
      );
      s >= 0 || rt(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
    }
    return i.reduceRight((s, l, u) => {
      let d = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
        f = null;
      r && (f = l.route.errorElement || Fx);
      let h = t.concat(i.slice(0, u + 1)),
        m = () => {
          let g;
          return (
            d
              ? (g = f)
              : l.route.Component
              ? (g = S.createElement(l.route.Component, null))
              : l.route.element
              ? (g = l.route.element)
              : (g = s),
            S.createElement(Ux, {
              match: l,
              routeContext: { outlet: s, matches: h, isDataRoute: r != null },
              children: g,
            })
          );
        };
      return r && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
        ? S.createElement(jx, {
            location: r.location,
            revalidation: r.revalidation,
            component: f,
            error: d,
            children: m(),
            routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          })
        : m();
    }, null);
  }
  var Yd;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate");
  })(Yd || (Yd = {}));
  var Yi;
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
  })(Yi || (Yi = {}));
  function Wx(e) {
    let t = S.useContext(Xd);
    return t || rt(!1), t;
  }
  function Vx(e) {
    let t = S.useContext($x);
    return t || rt(!1), t;
  }
  function Hx(e) {
    let t = S.useContext(Ro);
    return t || rt(!1), t;
  }
  function y0(e) {
    let t = Hx(),
      r = t.matches[t.matches.length - 1];
    return r.route.id || rt(!1), r.route.id;
  }
  function qx() {
    var e;
    let t = S.useContext(m0),
      r = Vx(Yi.UseRouteError),
      n = y0(Yi.UseRouteError);
    return t || ((e = r.errors) == null ? void 0 : e[n]);
  }
  function Gx() {
    let { router: e } = Wx(Yd.UseNavigateStable),
      t = y0(Yi.UseNavigateStable),
      r = S.useRef(!1);
    return (
      b0(() => {
        r.current = !0;
      }),
      S.useCallback(
        function (n, o) {
          o === void 0 && (o = {}),
            r.current &&
              (typeof n == "number"
                ? e.navigate(n)
                : e.navigate(n, Qs({ fromRouteId: t }, o)));
        },
        [e, t],
      )
    );
  }
  function Jd(e) {
    rt(!1);
  }
  function Kx(e) {
    let {
      basename: t = "/",
      children: r = null,
      location: n,
      navigationType: o = cn.Pop,
      navigator: i,
      static: a = !1,
    } = e;
    Js() && rt(!1);
    let s = t.replace(/^\/*/, "/"),
      l = S.useMemo(
        () => ({ basename: s, navigator: i, static: a }),
        [s, i, a],
      );
    typeof n == "string" && (n = To(n));
    let {
        pathname: u = "/",
        search: d = "",
        hash: f = "",
        state: h = null,
        key: m = "default",
      } = n,
      g = S.useMemo(() => {
        let x = h0(u, s);
        return x == null
          ? null
          : {
              location: { pathname: x, search: d, hash: f, state: h, key: m },
              navigationType: o,
            };
      }, [s, u, d, f, h, m, o]);
    return g == null
      ? null
      : S.createElement(
          Xs.Provider,
          { value: l },
          S.createElement(Ys.Provider, { children: r, value: g }),
        );
  }
  function Qx(e) {
    let { children: t, location: r } = e;
    return Lx(Zd(t), r);
  }
  var v0;
  (function (e) {
    (e[(e.pending = 0)] = "pending"),
      (e[(e.success = 1)] = "success"),
      (e[(e.error = 2)] = "error");
  })(v0 || (v0 = {})),
    new Promise(() => {});
  function Zd(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return (
      S.Children.forEach(e, (n, o) => {
        if (!S.isValidElement(n)) return;
        let i = [...t, o];
        if (n.type === S.Fragment) {
          r.push.apply(r, Zd(n.props.children, i));
          return;
        }
        n.type !== Jd && rt(!1), !n.props.index || !n.props.children || rt(!1);
        let a = {
          id: n.props.id || i.join("-"),
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          Component: n.props.Component,
          index: n.props.index,
          path: n.props.path,
          loader: n.props.loader,
          action: n.props.action,
          errorElement: n.props.errorElement,
          ErrorBoundary: n.props.ErrorBoundary,
          hasErrorBoundary:
            n.props.ErrorBoundary != null || n.props.errorElement != null,
          shouldRevalidate: n.props.shouldRevalidate,
          handle: n.props.handle,
          lazy: n.props.lazy,
        };
        n.props.children && (a.children = Zd(n.props.children, i)), r.push(a);
      }),
      r
    );
  }
  const Xx = "startTransition",
    w0 = La[Xx];
  function Yx(e) {
    let { basename: t, children: r, future: n, window: o } = e,
      i = S.useRef();
    i.current == null && (i.current = lx({ window: o, v5Compat: !0 }));
    let a = i.current,
      [s, l] = S.useState({ action: a.action, location: a.location }),
      { v7_startTransition: u } = n || {},
      d = S.useCallback(
        (f) => {
          u && w0 ? w0(() => l(f)) : l(f);
        },
        [l, u],
      );
    return (
      S.useLayoutEffect(() => a.listen(d), [a, d]),
      S.createElement(Kx, {
        basename: t,
        children: r,
        location: s.location,
        navigationType: s.action,
        navigator: a,
      })
    );
  }
  var S0;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher");
  })(S0 || (S0 = {}));
  var x0;
  (function (e) {
    (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(x0 || (x0 = {}));
  const Jx = { black: "#000", white: "#fff" },
    Ji = Jx,
    Zx = {
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
    Pn = Zx,
    e2 = {
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
    $n = e2,
    t2 = {
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
    Mn = t2,
    r2 = {
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
    Ao = r2,
    n2 = {
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
    Ln = n2,
    o2 = {
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
    _o = o2,
    i2 = {
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
    a2 = i2;
  function E() {
    return (
      (E = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      E.apply(this, arguments)
    );
  }
  function Bn(e) {
    return e !== null && typeof e == "object" && e.constructor === Object;
  }
  function k0(e) {
    if (!Bn(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((r) => {
        t[r] = k0(e[r]);
      }),
      t
    );
  }
  function Kt(e, t, r = { clone: !0 }) {
    const n = r.clone ? E({}, e) : e;
    return (
      Bn(e) &&
        Bn(t) &&
        Object.keys(t).forEach((o) => {
          o !== "__proto__" &&
            (Bn(t[o]) && o in e && Bn(e[o])
              ? (n[o] = Kt(e[o], t[o], r))
              : r.clone
              ? (n[o] = Bn(t[o]) ? k0(t[o]) : t[o])
              : (n[o] = t[o]));
        }),
      n
    );
  }
  function dn(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let r = 1; r < arguments.length; r += 1)
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
  }
  var E0 = {},
    s2 = {
      get exports() {
        return E0;
      },
      set exports(e) {
        E0 = e;
      },
    },
    Ie = {},
    ef = Symbol.for("react.element"),
    tf = Symbol.for("react.portal"),
    el = Symbol.for("react.fragment"),
    tl = Symbol.for("react.strict_mode"),
    rl = Symbol.for("react.profiler"),
    nl = Symbol.for("react.provider"),
    ol = Symbol.for("react.context"),
    l2 = Symbol.for("react.server_context"),
    il = Symbol.for("react.forward_ref"),
    al = Symbol.for("react.suspense"),
    sl = Symbol.for("react.suspense_list"),
    ll = Symbol.for("react.memo"),
    ul = Symbol.for("react.lazy"),
    u2 = Symbol.for("react.offscreen"),
    C0;
  C0 = Symbol.for("react.module.reference");
  function Qt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ef:
          switch (((e = e.type), e)) {
            case el:
            case rl:
            case tl:
            case al:
            case sl:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case l2:
                case ol:
                case il:
                case ul:
                case ll:
                case nl:
                  return e;
                default:
                  return t;
              }
          }
        case tf:
          return t;
      }
    }
  }
  (Ie.ContextConsumer = ol),
    (Ie.ContextProvider = nl),
    (Ie.Element = ef),
    (Ie.ForwardRef = il),
    (Ie.Fragment = el),
    (Ie.Lazy = ul),
    (Ie.Memo = ll),
    (Ie.Portal = tf),
    (Ie.Profiler = rl),
    (Ie.StrictMode = tl),
    (Ie.Suspense = al),
    (Ie.SuspenseList = sl),
    (Ie.isAsyncMode = function () {
      return !1;
    }),
    (Ie.isConcurrentMode = function () {
      return !1;
    }),
    (Ie.isContextConsumer = function (e) {
      return Qt(e) === ol;
    }),
    (Ie.isContextProvider = function (e) {
      return Qt(e) === nl;
    }),
    (Ie.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === ef;
    }),
    (Ie.isForwardRef = function (e) {
      return Qt(e) === il;
    }),
    (Ie.isFragment = function (e) {
      return Qt(e) === el;
    }),
    (Ie.isLazy = function (e) {
      return Qt(e) === ul;
    }),
    (Ie.isMemo = function (e) {
      return Qt(e) === ll;
    }),
    (Ie.isPortal = function (e) {
      return Qt(e) === tf;
    }),
    (Ie.isProfiler = function (e) {
      return Qt(e) === rl;
    }),
    (Ie.isStrictMode = function (e) {
      return Qt(e) === tl;
    }),
    (Ie.isSuspense = function (e) {
      return Qt(e) === al;
    }),
    (Ie.isSuspenseList = function (e) {
      return Qt(e) === sl;
    }),
    (Ie.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === el ||
        e === rl ||
        e === tl ||
        e === al ||
        e === sl ||
        e === u2 ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === ul ||
            e.$$typeof === ll ||
            e.$$typeof === nl ||
            e.$$typeof === ol ||
            e.$$typeof === il ||
            e.$$typeof === C0 ||
            e.getModuleId !== void 0))
      );
    }),
    (Ie.typeOf = Qt),
    (function (e) {
      e.exports = Ie;
    })(s2);
  function ne(e) {
    if (typeof e != "string") throw new Error(dn(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function rf(...e) {
    return e.reduce(
      (t, r) =>
        r == null
          ? t
          : function (...n) {
              t.apply(this, n), r.apply(this, n);
            },
      () => {},
    );
  }
  function nf(e, t = 166) {
    let r;
    function n(...o) {
      const i = () => {
        e.apply(this, o);
      };
      clearTimeout(r), (r = setTimeout(i, t));
    }
    return (
      (n.clear = () => {
        clearTimeout(r);
      }),
      n
    );
  }
  function c2(e, t) {
    return () => null;
  }
  function Zi(e, t) {
    return S.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
  }
  function Rt(e) {
    return (e && e.ownerDocument) || document;
  }
  function fn(e) {
    return Rt(e).defaultView || window;
  }
  function d2(e, t) {
    return () => null;
  }
  function cl(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  const f2 = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
    Fr = f2;
  let O0 = 0;
  function p2(e) {
    const [t, r] = S.useState(e),
      n = e || t;
    return (
      S.useEffect(() => {
        t == null && ((O0 += 1), r(`mui-${O0}`));
      }, [t]),
      n
    );
  }
  const N0 = La.useId;
  function T0(e) {
    if (N0 !== void 0) {
      const t = N0();
      return e ?? t;
    }
    return p2(e);
  }
  function h2(e, t, r, n, o) {
    return null;
  }
  function dl({ controlled: e, default: t, name: r, state: n = "value" }) {
    const { current: o } = S.useRef(e !== void 0),
      [i, a] = S.useState(t),
      s = o ? e : i,
      l = S.useCallback((u) => {
        o || a(u);
      }, []);
    return [s, l];
  }
  function zn(e) {
    const t = S.useRef(e);
    return (
      Fr(() => {
        t.current = e;
      }),
      S.useCallback((...r) => (0, t.current)(...r), [])
    );
  }
  function ct(...e) {
    return S.useMemo(
      () =>
        e.every((t) => t == null)
          ? null
          : (t) => {
              e.forEach((r) => {
                cl(r, t);
              });
            },
      e,
    );
  }
  let fl = !0,
    of = !1,
    R0;
  const m2 = {
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
  function g2(e) {
    const { type: t, tagName: r } = e;
    return !!(
      (r === "INPUT" && m2[t] && !e.readOnly) ||
      (r === "TEXTAREA" && !e.readOnly) ||
      e.isContentEditable
    );
  }
  function b2(e) {
    e.metaKey || e.altKey || e.ctrlKey || (fl = !0);
  }
  function af() {
    fl = !1;
  }
  function y2() {
    this.visibilityState === "hidden" && of && (fl = !0);
  }
  function v2(e) {
    e.addEventListener("keydown", b2, !0),
      e.addEventListener("mousedown", af, !0),
      e.addEventListener("pointerdown", af, !0),
      e.addEventListener("touchstart", af, !0),
      e.addEventListener("visibilitychange", y2, !0);
  }
  function w2(e) {
    const { target: t } = e;
    try {
      return t.matches(":focus-visible");
    } catch {}
    return fl || g2(t);
  }
  function A0() {
    const e = S.useCallback((o) => {
        o != null && v2(o.ownerDocument);
      }, []),
      t = S.useRef(!1);
    function r() {
      return t.current
        ? ((of = !0),
          window.clearTimeout(R0),
          (R0 = window.setTimeout(() => {
            of = !1;
          }, 100)),
          (t.current = !1),
          !0)
        : !1;
    }
    function n(o) {
      return w2(o) ? ((t.current = !0), !0) : !1;
    }
    return { isFocusVisibleRef: t, onFocus: n, onBlur: r, ref: e };
  }
  function _0(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  function sf(e, t) {
    const r = E({}, t);
    return (
      Object.keys(e).forEach((n) => {
        if (n.toString().match(/^(components|slots)$/))
          r[n] = E({}, e[n], r[n]);
        else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
          const o = e[n] || {},
            i = t[n];
          (r[n] = {}),
            !i || !Object.keys(i)
              ? (r[n] = o)
              : !o || !Object.keys(o)
              ? (r[n] = i)
              : ((r[n] = E({}, i)),
                Object.keys(o).forEach((a) => {
                  r[n][a] = sf(o[a], i[a]);
                }));
        } else r[n] === void 0 && (r[n] = e[n]);
      }),
      r
    );
  }
  function ve(e, t, r) {
    const n = {};
    return (
      Object.keys(e).forEach((o) => {
        n[o] = e[o]
          .reduce(
            (i, a) => (a && (i.push(t(a)), r && r[a] && i.push(r[a])), i),
            [],
          )
          .join(" ");
      }),
      n
    );
  }
  const I0 = (e) => e,
    S2 = () => {
      let e = I0;
      return {
        configure(t) {
          e = t;
        },
        generate(t) {
          return e(t);
        },
        reset() {
          e = I0;
        },
      };
    },
    x2 = S2(),
    lf = x2,
    k2 = {
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
  function ye(e, t, r = "Mui") {
    const n = k2[t];
    return n ? `${r}-${n}` : `${lf.generate(e)}-${t}`;
  }
  function ge(e, t, r = "Mui") {
    const n = {};
    return (
      t.forEach((o) => {
        n[o] = ye(e, o, r);
      }),
      n
    );
  }
  function Z(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      o,
      i;
    for (i = 0; i < n.length; i++)
      (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r;
  }
  function P0(e) {
    var t = Object.create(null);
    return function (r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var E2 =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    C2 = P0(function (e) {
      return (
        E2.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    });
  function O2(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function N2(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var T2 = (function () {
      function e(r) {
        var n = this;
        (this._insertTag = function (o) {
          var i;
          n.tags.length === 0
            ? n.insertionPoint
              ? (i = n.insertionPoint.nextSibling)
              : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
            : (i = n.tags[n.tags.length - 1].nextSibling),
            n.container.insertBefore(o, i),
            n.tags.push(o);
        }),
          (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = r.nonce),
          (this.key = r.key),
          (this.container = r.container),
          (this.prepend = r.prepend),
          (this.insertionPoint = r.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (r) {
          r.forEach(this._insertTag);
        }),
        (t.insert = function (r) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(N2(this));
          var n = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var o = O2(n);
            try {
              o.insertRule(r, o.cssRules.length);
            } catch {}
          } else n.appendChild(document.createTextNode(r));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (r) {
            return r.parentNode && r.parentNode.removeChild(r);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    yt = "-ms-",
    pl = "-moz-",
    Ne = "-webkit-",
    $0 = "comm",
    uf = "rule",
    cf = "decl",
    R2 = "@import",
    M0 = "@keyframes",
    A2 = Math.abs,
    hl = String.fromCharCode,
    _2 = Object.assign;
  function I2(e, t) {
    return dt(e, 0) ^ 45
      ? (((((((t << 2) ^ dt(e, 0)) << 2) ^ dt(e, 1)) << 2) ^ dt(e, 2)) << 2) ^
          dt(e, 3)
      : 0;
  }
  function L0(e) {
    return e.trim();
  }
  function P2(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function Re(e, t, r) {
    return e.replace(t, r);
  }
  function df(e, t) {
    return e.indexOf(t);
  }
  function dt(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function ea(e, t, r) {
    return e.slice(t, r);
  }
  function wr(e) {
    return e.length;
  }
  function ff(e) {
    return e.length;
  }
  function ml(e, t) {
    return t.push(e), e;
  }
  function $2(e, t) {
    return e.map(t).join("");
  }
  var gl = 1,
    Io = 1,
    B0 = 0,
    At = 0,
    Je = 0,
    Po = "";
  function bl(e, t, r, n, o, i, a) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: o,
      children: i,
      line: gl,
      column: Io,
      length: a,
      return: "",
    };
  }
  function ta(e, t) {
    return _2(
      bl("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t,
    );
  }
  function M2() {
    return Je;
  }
  function L2() {
    return (
      (Je = At > 0 ? dt(Po, --At) : 0), Io--, Je === 10 && ((Io = 1), gl--), Je
    );
  }
  function Ft() {
    return (
      (Je = At < B0 ? dt(Po, At++) : 0), Io++, Je === 10 && ((Io = 1), gl++), Je
    );
  }
  function Sr() {
    return dt(Po, At);
  }
  function yl() {
    return At;
  }
  function ra(e, t) {
    return ea(Po, e, t);
  }
  function na(e) {
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
  function z0(e) {
    return (gl = Io = 1), (B0 = wr((Po = e))), (At = 0), [];
  }
  function F0(e) {
    return (Po = ""), e;
  }
  function vl(e) {
    return L0(ra(At - 1, pf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function B2(e) {
    for (; (Je = Sr()) && Je < 33; ) Ft();
    return na(e) > 2 || na(Je) > 3 ? "" : " ";
  }
  function z2(e, t) {
    for (
      ;
      --t &&
      Ft() &&
      !(Je < 48 || Je > 102 || (Je > 57 && Je < 65) || (Je > 70 && Je < 97));

    );
    return ra(e, yl() + (t < 6 && Sr() == 32 && Ft() == 32));
  }
  function pf(e) {
    for (; Ft(); )
      switch (Je) {
        case e:
          return At;
        case 34:
        case 39:
          e !== 34 && e !== 39 && pf(Je);
          break;
        case 40:
          e === 41 && pf(e);
          break;
        case 92:
          Ft();
          break;
      }
    return At;
  }
  function F2(e, t) {
    for (
      ;
      Ft() && e + Je !== 47 + 10 && !(e + Je === 42 + 42 && Sr() === 47);

    );
    return "/*" + ra(t, At - 1) + "*" + hl(e === 47 ? e : Ft());
  }
  function j2(e) {
    for (; !na(Sr()); ) Ft();
    return ra(e, At);
  }
  function U2(e) {
    return F0(wl("", null, null, null, [""], (e = z0(e)), 0, [0], e));
  }
  function wl(e, t, r, n, o, i, a, s, l) {
    for (
      var u = 0,
        d = 0,
        f = a,
        h = 0,
        m = 0,
        g = 0,
        x = 1,
        R = 1,
        b = 1,
        y = 0,
        v = "",
        k = o,
        C = i,
        A = n,
        N = v;
      R;

    )
      switch (((g = y), (y = Ft()))) {
        case 40:
          if (g != 108 && dt(N, f - 1) == 58) {
            df((N += Re(vl(y), "&", "&\f")), "&\f") != -1 && (b = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          N += vl(y);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          N += B2(g);
          break;
        case 92:
          N += z2(yl() - 1, 7);
          continue;
        case 47:
          switch (Sr()) {
            case 42:
            case 47:
              ml(D2(F2(Ft(), yl()), t, r), l);
              break;
            default:
              N += "/";
          }
          break;
        case 123 * x:
          s[u++] = wr(N) * b;
        case 125 * x:
        case 59:
        case 0:
          switch (y) {
            case 0:
            case 125:
              R = 0;
            case 59 + d:
              m > 0 &&
                wr(N) - f &&
                ml(
                  m > 32
                    ? U0(N + ";", n, r, f - 1)
                    : U0(Re(N, " ", "") + ";", n, r, f - 2),
                  l,
                );
              break;
            case 59:
              N += ";";
            default:
              if (
                (ml((A = j0(N, t, r, u, d, o, s, v, (k = []), (C = []), f)), i),
                y === 123)
              )
                if (d === 0) wl(N, t, A, A, k, i, f, s, C);
                else
                  switch (h === 99 && dt(N, 3) === 110 ? 100 : h) {
                    case 100:
                    case 109:
                    case 115:
                      wl(
                        e,
                        A,
                        A,
                        n && ml(j0(e, A, A, 0, 0, o, s, v, o, (k = []), f), C),
                        o,
                        C,
                        f,
                        s,
                        n ? k : C,
                      );
                      break;
                    default:
                      wl(N, A, A, A, [""], C, 0, s, C);
                  }
          }
          (u = d = m = 0), (x = b = 1), (v = N = ""), (f = a);
          break;
        case 58:
          (f = 1 + wr(N)), (m = g);
        default:
          if (x < 1) {
            if (y == 123) --x;
            else if (y == 125 && x++ == 0 && L2() == 125) continue;
          }
          switch (((N += hl(y)), y * x)) {
            case 38:
              b = d > 0 ? 1 : ((N += "\f"), -1);
              break;
            case 44:
              (s[u++] = (wr(N) - 1) * b), (b = 1);
              break;
            case 64:
              Sr() === 45 && (N += vl(Ft())),
                (h = Sr()),
                (d = f = wr((v = N += j2(yl())))),
                y++;
              break;
            case 45:
              g === 45 && wr(N) == 2 && (x = 0);
          }
      }
    return i;
  }
  function j0(e, t, r, n, o, i, a, s, l, u, d) {
    for (
      var f = o - 1, h = o === 0 ? i : [""], m = ff(h), g = 0, x = 0, R = 0;
      g < n;
      ++g
    )
      for (var b = 0, y = ea(e, f + 1, (f = A2((x = a[g])))), v = e; b < m; ++b)
        (v = L0(x > 0 ? h[b] + " " + y : Re(y, /&\f/g, h[b]))) && (l[R++] = v);
    return bl(e, t, r, o === 0 ? uf : s, l, u, d);
  }
  function D2(e, t, r) {
    return bl(e, t, r, $0, hl(M2()), ea(e, 2, -2), 0);
  }
  function U0(e, t, r, n) {
    return bl(e, t, r, cf, ea(e, 0, n), ea(e, n + 1, -1), n);
  }
  function $o(e, t) {
    for (var r = "", n = ff(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
    return r;
  }
  function W2(e, t, r, n) {
    switch (e.type) {
      case R2:
      case cf:
        return (e.return = e.return || e.value);
      case $0:
        return "";
      case M0:
        return (e.return = e.value + "{" + $o(e.children, n) + "}");
      case uf:
        e.value = e.props.join(",");
    }
    return wr((r = $o(e.children, n)))
      ? (e.return = e.value + "{" + r + "}")
      : "";
  }
  function V2(e) {
    var t = ff(e);
    return function (r, n, o, i) {
      for (var a = "", s = 0; s < t; s++) a += e[s](r, n, o, i) || "";
      return a;
    };
  }
  function H2(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  var q2 = function (e, t, r) {
      for (
        var n = 0, o = 0;
        (n = o), (o = Sr()), n === 38 && o === 12 && (t[r] = 1), !na(o);

      )
        Ft();
      return ra(e, At);
    },
    G2 = function (e, t) {
      var r = -1,
        n = 44;
      do
        switch (na(n)) {
          case 0:
            n === 38 && Sr() === 12 && (t[r] = 1), (e[r] += q2(At - 1, t, r));
            break;
          case 2:
            e[r] += vl(n);
            break;
          case 4:
            if (n === 44) {
              (e[++r] = Sr() === 58 ? "&\f" : ""), (t[r] = e[r].length);
              break;
            }
          default:
            e[r] += hl(n);
        }
      while ((n = Ft()));
      return e;
    },
    K2 = function (e, t) {
      return F0(G2(z0(e), t));
    },
    D0 = new WeakMap(),
    Q2 = function (e) {
      if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
        for (
          var t = e.value,
            r = e.parent,
            n = e.column === r.column && e.line === r.line;
          r.type !== "rule";

        )
          if (((r = r.parent), !r)) return;
        if (
          !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !D0.get(r)) &&
          !n
        ) {
          D0.set(e, !0);
          for (
            var o = [], i = K2(t, o), a = r.props, s = 0, l = 0;
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
    X2 = function (e) {
      if (e.type === "decl") {
        var t = e.value;
        t.charCodeAt(0) === 108 &&
          t.charCodeAt(2) === 98 &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function W0(e, t) {
    switch (I2(e, t)) {
      case 5103:
        return Ne + "print-" + e + e;
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
        return Ne + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Ne + e + pl + e + yt + e + e;
      case 6828:
      case 4268:
        return Ne + e + yt + e + e;
      case 6165:
        return Ne + e + yt + "flex-" + e + e;
      case 5187:
        return (
          Ne +
          e +
          Re(e, /(\w+).+(:[^]+)/, Ne + "box-$1$2" + yt + "flex-$1$2") +
          e
        );
      case 5443:
        return Ne + e + yt + "flex-item-" + Re(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          Ne +
          e +
          yt +
          "flex-line-pack" +
          Re(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return Ne + e + yt + Re(e, "shrink", "negative") + e;
      case 5292:
        return Ne + e + yt + Re(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Ne +
          "box-" +
          Re(e, "-grow", "") +
          Ne +
          e +
          yt +
          Re(e, "grow", "positive") +
          e
        );
      case 4554:
        return Ne + Re(e, /([^-])(transform)/g, "$1" + Ne + "$2") + e;
      case 6187:
        return (
          Re(
            Re(Re(e, /(zoom-|grab)/, Ne + "$1"), /(image-set)/, Ne + "$1"),
            e,
            "",
          ) + e
        );
      case 5495:
      case 3959:
        return Re(e, /(image-set\([^]*)/, Ne + "$1$`$1");
      case 4968:
        return (
          Re(
            Re(
              e,
              /(.+:)(flex-)?(.*)/,
              Ne + "box-pack:$3" + yt + "flex-pack:$3",
            ),
            /s.+-b[^;]+/,
            "justify",
          ) +
          Ne +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return Re(e, /(.+)-inline(.+)/, Ne + "$1$2") + e;
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
        if (wr(e) - 1 - t > 6)
          switch (dt(e, t + 1)) {
            case 109:
              if (dt(e, t + 4) !== 45) break;
            case 102:
              return (
                Re(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Ne +
                    "$2-$3$1" +
                    pl +
                    (dt(e, t + 3) == 108 ? "$3" : "$2-$3"),
                ) + e
              );
            case 115:
              return ~df(e, "stretch")
                ? W0(Re(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (dt(e, t + 1) !== 115) break;
      case 6444:
        switch (dt(e, wr(e) - 3 - (~df(e, "!important") && 10))) {
          case 107:
            return Re(e, ":", ":" + Ne) + e;
          case 101:
            return (
              Re(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  Ne +
                  (dt(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  Ne +
                  "$2$3$1" +
                  yt +
                  "$2box$3",
              ) + e
            );
        }
        break;
      case 5936:
        switch (dt(e, t + 11)) {
          case 114:
            return Ne + e + yt + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Ne + e + yt + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Ne + e + yt + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return Ne + e + yt + e + e;
    }
    return e;
  }
  var Y2 = function (e, t, r, n) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case cf:
            e.return = W0(e.value, e.length);
            break;
          case M0:
            return $o([ta(e, { value: Re(e.value, "@", "@" + Ne) })], n);
          case uf:
            if (e.length)
              return $2(e.props, function (o) {
                switch (P2(o, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return $o(
                      [
                        ta(e, {
                          props: [Re(o, /:(read-\w+)/, ":" + pl + "$1")],
                        }),
                      ],
                      n,
                    );
                  case "::placeholder":
                    return $o(
                      [
                        ta(e, {
                          props: [Re(o, /:(plac\w+)/, ":" + Ne + "input-$1")],
                        }),
                        ta(e, {
                          props: [Re(o, /:(plac\w+)/, ":" + pl + "$1")],
                        }),
                        ta(e, {
                          props: [Re(o, /:(plac\w+)/, yt + "input-$1")],
                        }),
                      ],
                      n,
                    );
                }
                return "";
              });
        }
    },
    J2 = [Y2],
    V0 = function (e) {
      var t = e.key;
      if (t === "css") {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function (g) {
          var x = g.getAttribute("data-emotion");
          x.indexOf(" ") !== -1 &&
            (document.head.appendChild(g), g.setAttribute("data-s", ""));
        });
      }
      var n = e.stylisPlugins || J2,
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
        l = [Q2, X2];
      {
        var u,
          d = [
            W2,
            H2(function (g) {
              u.insert(g);
            }),
          ],
          f = V2(l.concat(n, d)),
          h = function (g) {
            return $o(U2(g), f);
          };
        s = function (g, x, R, b) {
          (u = R),
            h(g ? g + "{" + x.styles + "}" : x.styles),
            b && (m.inserted[x.name] = !0);
        };
      }
      var m = {
        key: t,
        sheet: new T2({
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
      return m.sheet.hydrate(a), m;
    },
    hf = {},
    Z2 = {
      get exports() {
        return hf;
      },
      set exports(e) {
        hf = e;
      },
    },
    Pe = {},
    it = typeof Symbol == "function" && Symbol.for,
    mf = it ? Symbol.for("react.element") : 60103,
    gf = it ? Symbol.for("react.portal") : 60106,
    Sl = it ? Symbol.for("react.fragment") : 60107,
    xl = it ? Symbol.for("react.strict_mode") : 60108,
    kl = it ? Symbol.for("react.profiler") : 60114,
    El = it ? Symbol.for("react.provider") : 60109,
    Cl = it ? Symbol.for("react.context") : 60110,
    bf = it ? Symbol.for("react.async_mode") : 60111,
    Ol = it ? Symbol.for("react.concurrent_mode") : 60111,
    Nl = it ? Symbol.for("react.forward_ref") : 60112,
    Tl = it ? Symbol.for("react.suspense") : 60113,
    ek = it ? Symbol.for("react.suspense_list") : 60120,
    Rl = it ? Symbol.for("react.memo") : 60115,
    Al = it ? Symbol.for("react.lazy") : 60116,
    tk = it ? Symbol.for("react.block") : 60121,
    rk = it ? Symbol.for("react.fundamental") : 60117,
    nk = it ? Symbol.for("react.responder") : 60118,
    ok = it ? Symbol.for("react.scope") : 60119;
  function jt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case mf:
          switch (((e = e.type), e)) {
            case bf:
            case Ol:
            case Sl:
            case kl:
            case xl:
            case Tl:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Cl:
                case Nl:
                case Al:
                case Rl:
                case El:
                  return e;
                default:
                  return t;
              }
          }
        case gf:
          return t;
      }
    }
  }
  function H0(e) {
    return jt(e) === Ol;
  }
  (Pe.AsyncMode = bf),
    (Pe.ConcurrentMode = Ol),
    (Pe.ContextConsumer = Cl),
    (Pe.ContextProvider = El),
    (Pe.Element = mf),
    (Pe.ForwardRef = Nl),
    (Pe.Fragment = Sl),
    (Pe.Lazy = Al),
    (Pe.Memo = Rl),
    (Pe.Portal = gf),
    (Pe.Profiler = kl),
    (Pe.StrictMode = xl),
    (Pe.Suspense = Tl),
    (Pe.isAsyncMode = function (e) {
      return H0(e) || jt(e) === bf;
    }),
    (Pe.isConcurrentMode = H0),
    (Pe.isContextConsumer = function (e) {
      return jt(e) === Cl;
    }),
    (Pe.isContextProvider = function (e) {
      return jt(e) === El;
    }),
    (Pe.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === mf;
    }),
    (Pe.isForwardRef = function (e) {
      return jt(e) === Nl;
    }),
    (Pe.isFragment = function (e) {
      return jt(e) === Sl;
    }),
    (Pe.isLazy = function (e) {
      return jt(e) === Al;
    }),
    (Pe.isMemo = function (e) {
      return jt(e) === Rl;
    }),
    (Pe.isPortal = function (e) {
      return jt(e) === gf;
    }),
    (Pe.isProfiler = function (e) {
      return jt(e) === kl;
    }),
    (Pe.isStrictMode = function (e) {
      return jt(e) === xl;
    }),
    (Pe.isSuspense = function (e) {
      return jt(e) === Tl;
    }),
    (Pe.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Sl ||
        e === Ol ||
        e === kl ||
        e === xl ||
        e === Tl ||
        e === ek ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Al ||
            e.$$typeof === Rl ||
            e.$$typeof === El ||
            e.$$typeof === Cl ||
            e.$$typeof === Nl ||
            e.$$typeof === rk ||
            e.$$typeof === nk ||
            e.$$typeof === ok ||
            e.$$typeof === tk))
      );
    }),
    (Pe.typeOf = jt),
    (function (e) {
      e.exports = Pe;
    })(Z2);
  var q0 = hf,
    ik = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    ak = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    G0 = {};
  (G0[q0.ForwardRef] = ik), (G0[q0.Memo] = ak);
  var sk = !0;
  function K0(e, t, r) {
    var n = "";
    return (
      r.split(" ").forEach(function (o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
      }),
      n
    );
  }
  var Q0 = function (e, t, r) {
      var n = e.key + "-" + t.name;
      (r === !1 || sk === !1) &&
        e.registered[n] === void 0 &&
        (e.registered[n] = t.styles);
    },
    yf = function (e, t, r) {
      Q0(e, t, r);
      var n = e.key + "-" + t.name;
      if (e.inserted[t.name] === void 0) {
        var o = t;
        do e.insert(t === o ? "." + n : "", o, e.sheet, !0), (o = o.next);
        while (o !== void 0);
      }
    };
  function lk(e) {
    for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
      (r =
        (e.charCodeAt(n) & 255) |
        ((e.charCodeAt(++n) & 255) << 8) |
        ((e.charCodeAt(++n) & 255) << 16) |
        ((e.charCodeAt(++n) & 255) << 24)),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
        (r ^= r >>> 24),
        (t =
          ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(n) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var uk = {
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
    ck = /[A-Z]|^ms/g,
    dk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    X0 = function (e) {
      return e.charCodeAt(1) === 45;
    },
    Y0 = function (e) {
      return e != null && typeof e != "boolean";
    },
    vf = P0(function (e) {
      return X0(e) ? e : e.replace(ck, "-$&").toLowerCase();
    }),
    J0 = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if (typeof t == "string")
            return t.replace(dk, function (r, n, o) {
              return (xr = { name: n, styles: o, next: xr }), n;
            });
      }
      return uk[e] !== 1 && !X0(e) && typeof t == "number" && t !== 0
        ? t + "px"
        : t;
    };
  function oa(e, t, r) {
    if (r == null) return "";
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        if (r.anim === 1)
          return (xr = { name: r.name, styles: r.styles, next: xr }), r.name;
        if (r.styles !== void 0) {
          var n = r.next;
          if (n !== void 0)
            for (; n !== void 0; )
              (xr = { name: n.name, styles: n.styles, next: xr }), (n = n.next);
          var o = r.styles + ";";
          return o;
        }
        return fk(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var i = xr,
            a = r(e);
          return (xr = i), oa(e, t, a);
        }
        break;
      }
    }
    if (t == null) return r;
    var s = t[r];
    return s !== void 0 ? s : r;
  }
  function fk(e, t, r) {
    var n = "";
    if (Array.isArray(r))
      for (var o = 0; o < r.length; o++) n += oa(e, t, r[o]) + ";";
    else
      for (var i in r) {
        var a = r[i];
        if (typeof a != "object")
          t != null && t[a] !== void 0
            ? (n += i + "{" + t[a] + "}")
            : Y0(a) && (n += vf(i) + ":" + J0(i, a) + ";");
        else if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var s = 0; s < a.length; s++)
            Y0(a[s]) && (n += vf(i) + ":" + J0(i, a[s]) + ";");
        else {
          var l = oa(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += vf(i) + ":" + l + ";";
              break;
            }
            default:
              n += i + "{" + l + "}";
          }
        }
      }
    return n;
  }
  var Z0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    xr,
    _l = function (e, t, r) {
      if (
        e.length === 1 &&
        typeof e[0] == "object" &&
        e[0] !== null &&
        e[0].styles !== void 0
      )
        return e[0];
      var n = !0,
        o = "";
      xr = void 0;
      var i = e[0];
      i == null || i.raw === void 0
        ? ((n = !1), (o += oa(r, t, i)))
        : (o += i[0]);
      for (var a = 1; a < e.length; a++)
        (o += oa(r, t, e[a])), n && (o += i[a]);
      Z0.lastIndex = 0;
      for (var s = "", l; (l = Z0.exec(o)) !== null; ) s += "-" + l[1];
      var u = lk(o) + s;
      return { name: u, styles: o, next: xr };
    },
    pk = function (e) {
      return e();
    },
    eb = La.useInsertionEffect ? La.useInsertionEffect : !1,
    hk = eb || pk,
    tb = eb || S.useLayoutEffect,
    wf = S.createContext(typeof HTMLElement < "u" ? V0({ key: "css" }) : null),
    mk = wf.Provider,
    gk = function () {
      return S.useContext(wf);
    },
    rb = function (e) {
      return S.forwardRef(function (t, r) {
        var n = S.useContext(wf);
        return e(t, n, r);
      });
    },
    Sf = S.createContext({}),
    bk = rb(function (e, t) {
      var r = e.styles,
        n = _l([r], void 0, S.useContext(Sf)),
        o = S.useRef();
      return (
        tb(
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
                'style[data-emotion="' + i + " " + n.name + '"]',
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
        tb(
          function () {
            var i = o.current,
              a = i[0],
              s = i[1];
            if (s) {
              i[1] = !1;
              return;
            }
            if ((n.next !== void 0 && yf(t, n.next, !0), a.tags.length)) {
              var l = a.tags[a.tags.length - 1].nextElementSibling;
              (a.before = l), a.flush();
            }
            t.insert("", n, a, !1);
          },
          [t, n.name],
        ),
        null
      );
    });
  function Il() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return _l(t);
  }
  var Mo = function () {
      var e = Il.apply(void 0, arguments),
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
    yk = C2,
    vk = function (e) {
      return e !== "theme";
    },
    nb = function (e) {
      return typeof e == "string" && e.charCodeAt(0) > 96 ? yk : vk;
    },
    ob = function (e, t, r) {
      var n;
      if (t) {
        var o = t.shouldForwardProp;
        n =
          e.__emotion_forwardProp && o
            ? function (i) {
                return e.__emotion_forwardProp(i) && o(i);
              }
            : o;
      }
      return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
    },
    wk = function (e) {
      var t = e.cache,
        r = e.serialized,
        n = e.isStringTag;
      return (
        Q0(t, r, n),
        hk(function () {
          return yf(t, r, n);
        }),
        null
      );
    },
    Sk = function e(t, r) {
      var n = t.__emotion_real === t,
        o = (n && t.__emotion_base) || t,
        i,
        a;
      r !== void 0 && ((i = r.label), (a = r.target));
      var s = ob(t, r, n),
        l = s || nb(o),
        u = !l("as");
      return function () {
        var d = arguments,
          f =
            n && t.__emotion_styles !== void 0
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (i !== void 0 && f.push("label:" + i + ";"),
          d[0] == null || d[0].raw === void 0)
        )
          f.push.apply(f, d);
        else {
          f.push(d[0][0]);
          for (var h = d.length, m = 1; m < h; m++) f.push(d[m], d[0][m]);
        }
        var g = rb(function (x, R, b) {
          var y = (u && x.as) || o,
            v = "",
            k = [],
            C = x;
          if (x.theme == null) {
            C = {};
            for (var A in x) C[A] = x[A];
            C.theme = S.useContext(Sf);
          }
          typeof x.className == "string"
            ? (v = K0(R.registered, k, x.className))
            : x.className != null && (v = x.className + " ");
          var N = _l(f.concat(k), R.registered, C);
          (v += R.key + "-" + N.name), a !== void 0 && (v += " " + a);
          var I = u && s === void 0 ? nb(y) : l,
            P = {};
          for (var z in x) (u && z === "as") || (I(z) && (P[z] = x[z]));
          return (
            (P.className = v),
            (P.ref = b),
            S.createElement(
              S.Fragment,
              null,
              S.createElement(wk, {
                cache: R,
                serialized: N,
                isStringTag: typeof y == "string",
              }),
              S.createElement(y, P),
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
            return e(x, E({}, r, R, { shouldForwardProp: ob(g, R, !0) })).apply(
              void 0,
              f,
            );
          }),
          g
        );
      };
    };
  const xk = Sk;
  var kk = [
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
    xf = xk.bind();
  kk.forEach(function (e) {
    xf[e] = xf(e);
  });
  const Ek = xf;
  let kf;
  typeof document == "object" && (kf = V0({ key: "css", prepend: !0 }));
  function Ck(e) {
    const { injectFirst: t, children: r } = e;
    return t && kf ? T(mk, { value: kf, children: r }) : r;
  }
  function Ok(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function Nk(e) {
    const { styles: t, defaultTheme: r = {} } = e;
    return T(bk, {
      styles: typeof t == "function" ? (n) => t(Ok(n) ? r : n) : t,
    });
  }
  function ib(e, t) {
    return Ek(e, t);
  }
  const Tk = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  };
  function ia(e, t) {
    return t ? Kt(e, t, { clone: !1 }) : e;
  }
  const Ef = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    ab = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${Ef[e]}px)`,
    };
  function Xt(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
      const o = n.breakpoints || ab;
      return t.reduce((i, a, s) => ((i[o.up(o.keys[s])] = r(t[s])), i), {});
    }
    if (typeof t == "object") {
      const o = n.breakpoints || ab;
      return Object.keys(t).reduce((i, a) => {
        if (Object.keys(o.values || Ef).indexOf(a) !== -1) {
          const s = o.up(a);
          i[s] = r(t[a], a);
        } else {
          const s = a;
          i[s] = t[s];
        }
        return i;
      }, {});
    }
    return r(t);
  }
  function Rk(e = {}) {
    var t;
    return (
      ((t = e.keys) == null
        ? void 0
        : t.reduce((r, n) => {
            const o = e.up(n);
            return (r[o] = {}), r;
          }, {})) || {}
    );
  }
  function Ak(e, t) {
    return e.reduce((r, n) => {
      const o = r[n];
      return (!o || Object.keys(o).length === 0) && delete r[n], r;
    }, t);
  }
  function _k(e, t) {
    if (typeof e != "object") return {};
    const r = {},
      n = Object.keys(t);
    return (
      Array.isArray(e)
        ? n.forEach((o, i) => {
            i < e.length && (r[o] = !0);
          })
        : n.forEach((o) => {
            e[o] != null && (r[o] = !0);
          }),
      r
    );
  }
  function Pl({ values: e, breakpoints: t, base: r }) {
    const n = r || _k(e, t),
      o = Object.keys(n);
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
  function $l(e, t, r = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && r) {
      const n = `vars.${t}`
        .split(".")
        .reduce((o, i) => (o && o[i] ? o[i] : null), e);
      if (n != null) return n;
    }
    return t.split(".").reduce((n, o) => (n && n[o] != null ? n[o] : null), e);
  }
  function Ml(e, t, r, n = r) {
    let o;
    return (
      typeof e == "function"
        ? (o = e(r))
        : Array.isArray(e)
        ? (o = e[r] || n)
        : (o = $l(e, r) || n),
      t && (o = t(o, n, e)),
      o
    );
  }
  function Ae(e) {
    const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e,
      i = (a) => {
        if (a[t] == null) return null;
        const s = a[t],
          l = a.theme,
          u = $l(l, n) || {};
        return Xt(a, s, (d) => {
          let f = Ml(u, o, d);
          return (
            d === f &&
              typeof d == "string" &&
              (f = Ml(u, o, `${t}${d === "default" ? "" : ne(d)}`, d)),
            r === !1 ? f : { [r]: f }
          );
        });
      };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
  }
  function Ll(...e) {
    const t = e.reduce(
        (n, o) => (
          o.filterProps.forEach((i) => {
            n[i] = o;
          }),
          n
        ),
        {},
      ),
      r = (n) =>
        Object.keys(n).reduce((o, i) => (t[i] ? ia(o, t[i](n)) : o), {});
    return (
      (r.propTypes = {}),
      (r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), [])),
      r
    );
  }
  function Ik(e) {
    const t = {};
    return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
  }
  const Pk = { m: "margin", p: "padding" },
    $k = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    sb = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    Mk = Ik((e) => {
      if (e.length > 2)
        if (sb[e]) e = sb[e];
        else return [e];
      const [t, r] = e.split(""),
        n = Pk[t],
        o = $k[r] || "";
      return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
    }),
    Cf = [
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
    Of = [
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
  [...Cf, ...Of];
  function aa(e, t, r, n) {
    var o;
    const i = (o = $l(e, t, !1)) != null ? o : r;
    return typeof i == "number"
      ? (a) => (typeof a == "string" ? a : i * a)
      : Array.isArray(i)
      ? (a) => (typeof a == "string" ? a : i[a])
      : typeof i == "function"
      ? i
      : () => {};
  }
  function lb(e) {
    return aa(e, "spacing", 8);
  }
  function sa(e, t) {
    if (typeof t == "string" || t == null) return t;
    const r = Math.abs(t),
      n = e(r);
    return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
  }
  function Lk(e, t) {
    return (r) => e.reduce((n, o) => ((n[o] = sa(t, r)), n), {});
  }
  function Bk(e, t, r, n) {
    if (t.indexOf(r) === -1) return null;
    const o = Mk(r),
      i = Lk(o, n),
      a = e[r];
    return Xt(e, a, i);
  }
  function ub(e, t) {
    const r = lb(e.theme);
    return Object.keys(e)
      .map((n) => Bk(e, t, n, r))
      .reduce(ia, {});
  }
  function Ge(e) {
    return ub(e, Cf);
  }
  (Ge.propTypes = {}), (Ge.filterProps = Cf);
  function Ke(e) {
    return ub(e, Of);
  }
  (Ke.propTypes = {}), (Ke.filterProps = Of);
  function kr(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  const zk = Ae({ prop: "border", themeKey: "borders", transform: kr }),
    Fk = Ae({ prop: "borderTop", themeKey: "borders", transform: kr }),
    jk = Ae({ prop: "borderRight", themeKey: "borders", transform: kr }),
    Uk = Ae({ prop: "borderBottom", themeKey: "borders", transform: kr }),
    Dk = Ae({ prop: "borderLeft", themeKey: "borders", transform: kr }),
    Wk = Ae({ prop: "borderColor", themeKey: "palette" }),
    Vk = Ae({ prop: "borderTopColor", themeKey: "palette" }),
    Hk = Ae({ prop: "borderRightColor", themeKey: "palette" }),
    qk = Ae({ prop: "borderBottomColor", themeKey: "palette" }),
    Gk = Ae({ prop: "borderLeftColor", themeKey: "palette" }),
    Bl = (e) => {
      if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = aa(e.theme, "shape.borderRadius", 4),
          r = (n) => ({ borderRadius: sa(t, n) });
        return Xt(e, e.borderRadius, r);
      }
      return null;
    };
  (Bl.propTypes = {}),
    (Bl.filterProps = ["borderRadius"]),
    Ll(zk, Fk, jk, Uk, Dk, Wk, Vk, Hk, qk, Gk, Bl);
  const zl = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = aa(e.theme, "spacing", 8),
        r = (n) => ({ gap: sa(t, n) });
      return Xt(e, e.gap, r);
    }
    return null;
  };
  (zl.propTypes = {}), (zl.filterProps = ["gap"]);
  const Fl = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = aa(e.theme, "spacing", 8),
        r = (n) => ({ columnGap: sa(t, n) });
      return Xt(e, e.columnGap, r);
    }
    return null;
  };
  (Fl.propTypes = {}), (Fl.filterProps = ["columnGap"]);
  const jl = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = aa(e.theme, "spacing", 8),
        r = (n) => ({ rowGap: sa(t, n) });
      return Xt(e, e.rowGap, r);
    }
    return null;
  };
  (jl.propTypes = {}), (jl.filterProps = ["rowGap"]);
  const Kk = Ae({ prop: "gridColumn" }),
    Qk = Ae({ prop: "gridRow" }),
    Xk = Ae({ prop: "gridAutoFlow" }),
    Yk = Ae({ prop: "gridAutoColumns" }),
    Jk = Ae({ prop: "gridAutoRows" }),
    Zk = Ae({ prop: "gridTemplateColumns" }),
    eE = Ae({ prop: "gridTemplateRows" }),
    tE = Ae({ prop: "gridTemplateAreas" }),
    rE = Ae({ prop: "gridArea" });
  Ll(zl, Fl, jl, Kk, Qk, Xk, Yk, Jk, Zk, eE, tE, rE);
  function Lo(e, t) {
    return t === "grey" ? t : e;
  }
  const nE = Ae({ prop: "color", themeKey: "palette", transform: Lo }),
    oE = Ae({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: Lo,
    }),
    iE = Ae({ prop: "backgroundColor", themeKey: "palette", transform: Lo });
  Ll(nE, oE, iE);
  function Ut(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const aE = Ae({ prop: "width", transform: Ut }),
    Nf = (e) => {
      if (e.maxWidth !== void 0 && e.maxWidth !== null) {
        const t = (r) => {
          var n, o, i;
          return {
            maxWidth:
              ((n = e.theme) == null ||
              (o = n.breakpoints) == null ||
              (i = o.values) == null
                ? void 0
                : i[r]) ||
              Ef[r] ||
              Ut(r),
          };
        };
        return Xt(e, e.maxWidth, t);
      }
      return null;
    };
  Nf.filterProps = ["maxWidth"];
  const sE = Ae({ prop: "minWidth", transform: Ut }),
    lE = Ae({ prop: "height", transform: Ut }),
    uE = Ae({ prop: "maxHeight", transform: Ut }),
    cE = Ae({ prop: "minHeight", transform: Ut });
  Ae({ prop: "size", cssProperty: "width", transform: Ut }),
    Ae({ prop: "size", cssProperty: "height", transform: Ut });
  const dE = Ae({ prop: "boxSizing" });
  Ll(aE, Nf, sE, lE, uE, cE, dE);
  const fE = {
      border: { themeKey: "borders", transform: kr },
      borderTop: { themeKey: "borders", transform: kr },
      borderRight: { themeKey: "borders", transform: kr },
      borderBottom: { themeKey: "borders", transform: kr },
      borderLeft: { themeKey: "borders", transform: kr },
      borderColor: { themeKey: "palette" },
      borderTopColor: { themeKey: "palette" },
      borderRightColor: { themeKey: "palette" },
      borderBottomColor: { themeKey: "palette" },
      borderLeftColor: { themeKey: "palette" },
      borderRadius: { themeKey: "shape.borderRadius", style: Bl },
      color: { themeKey: "palette", transform: Lo },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: Lo,
      },
      backgroundColor: { themeKey: "palette", transform: Lo },
      p: { style: Ke },
      pt: { style: Ke },
      pr: { style: Ke },
      pb: { style: Ke },
      pl: { style: Ke },
      px: { style: Ke },
      py: { style: Ke },
      padding: { style: Ke },
      paddingTop: { style: Ke },
      paddingRight: { style: Ke },
      paddingBottom: { style: Ke },
      paddingLeft: { style: Ke },
      paddingX: { style: Ke },
      paddingY: { style: Ke },
      paddingInline: { style: Ke },
      paddingInlineStart: { style: Ke },
      paddingInlineEnd: { style: Ke },
      paddingBlock: { style: Ke },
      paddingBlockStart: { style: Ke },
      paddingBlockEnd: { style: Ke },
      m: { style: Ge },
      mt: { style: Ge },
      mr: { style: Ge },
      mb: { style: Ge },
      ml: { style: Ge },
      mx: { style: Ge },
      my: { style: Ge },
      margin: { style: Ge },
      marginTop: { style: Ge },
      marginRight: { style: Ge },
      marginBottom: { style: Ge },
      marginLeft: { style: Ge },
      marginX: { style: Ge },
      marginY: { style: Ge },
      marginInline: { style: Ge },
      marginInlineStart: { style: Ge },
      marginInlineEnd: { style: Ge },
      marginBlock: { style: Ge },
      marginBlockStart: { style: Ge },
      marginBlockEnd: { style: Ge },
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
      gap: { style: zl },
      rowGap: { style: jl },
      columnGap: { style: Fl },
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
      width: { transform: Ut },
      maxWidth: { style: Nf },
      minWidth: { transform: Ut },
      height: { transform: Ut },
      maxHeight: { transform: Ut },
      minHeight: { transform: Ut },
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
    Ul = fE;
  function pE(...e) {
    const t = e.reduce((n, o) => n.concat(Object.keys(o)), []),
      r = new Set(t);
    return e.every((n) => r.size === Object.keys(n).length);
  }
  function hE(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function mE() {
    function e(r, n, o, i) {
      const a = { [r]: n, theme: o },
        s = i[r];
      if (!s) return { [r]: n };
      const { cssProperty: l = r, themeKey: u, transform: d, style: f } = s;
      if (n == null) return null;
      const h = $l(o, u) || {};
      return f
        ? f(a)
        : Xt(a, n, (m) => {
            let g = Ml(h, d, m);
            return (
              m === g &&
                typeof m == "string" &&
                (g = Ml(h, d, `${r}${m === "default" ? "" : ne(m)}`, m)),
              l === !1 ? g : { [l]: g }
            );
          });
    }
    function t(r) {
      var n;
      const { sx: o, theme: i = {} } = r || {};
      if (!o) return null;
      const a = (n = i.unstable_sxConfig) != null ? n : Ul;
      function s(l) {
        let u = l;
        if (typeof l == "function") u = l(i);
        else if (typeof l != "object") return l;
        if (!u) return null;
        const d = Rk(i.breakpoints),
          f = Object.keys(d);
        let h = d;
        return (
          Object.keys(u).forEach((m) => {
            const g = hE(u[m], i);
            if (g != null)
              if (typeof g == "object")
                if (a[m]) h = ia(h, e(m, g, i, a));
                else {
                  const x = Xt({ theme: i }, g, (R) => ({ [m]: R }));
                  pE(x, g) ? (h[m] = t({ sx: g, theme: i })) : (h = ia(h, x));
                }
              else h = ia(h, e(m, g, i, a));
          }),
          Ak(f, h)
        );
      }
      return Array.isArray(o) ? o.map(s) : s(o);
    }
    return t;
  }
  const cb = mE();
  cb.filterProps = ["sx"];
  const Dl = cb,
    gE = ["sx"],
    bE = (e) => {
      var t, r;
      const n = { systemProps: {}, otherProps: {} },
        o =
          (t =
            e == null || (r = e.theme) == null
              ? void 0
              : r.unstable_sxConfig) != null
            ? t
            : Ul;
      return (
        Object.keys(e).forEach((i) => {
          o[i] ? (n.systemProps[i] = e[i]) : (n.otherProps[i] = e[i]);
        }),
        n
      );
    };
  function Tf(e) {
    const { sx: t } = e,
      r = Z(e, gE),
      { systemProps: n, otherProps: o } = bE(r);
    let i;
    return (
      Array.isArray(t)
        ? (i = [n, ...t])
        : typeof t == "function"
        ? (i = (...a) => {
            const s = t(...a);
            return Bn(s) ? E({}, n, s) : n;
          })
        : (i = E({}, n, t)),
      E({}, o, { sx: i })
    );
  }
  function db(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (r = db(e[t])) && (n && (n += " "), (n += r));
      else for (t in e) e[t] && (n && (n += " "), (n += t));
    return n;
  }
  function ue() {
    for (var e, t, r = 0, n = ""; r < arguments.length; )
      (e = arguments[r++]) && (t = db(e)) && (n && (n += " "), (n += t));
    return n;
  }
  const yE = ["values", "unit", "step"],
    vE = (e) => {
      const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
      return (
        t.sort((r, n) => r.val - n.val),
        t.reduce((r, n) => E({}, r, { [n.key]: n.val }), {})
      );
    };
  function wE(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: r = "px",
        step: n = 5,
      } = e,
      o = Z(e, yE),
      i = vE(t),
      a = Object.keys(i);
    function s(h) {
      return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
    }
    function l(h) {
      return `@media (max-width:${
        (typeof t[h] == "number" ? t[h] : h) - n / 100
      }${r})`;
    }
    function u(h, m) {
      const g = a.indexOf(m);
      return `@media (min-width:${
        typeof t[h] == "number" ? t[h] : h
      }${r}) and (max-width:${
        (g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : m) - n / 100
      }${r})`;
    }
    function d(h) {
      return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : s(h);
    }
    function f(h) {
      const m = a.indexOf(h);
      return m === 0
        ? s(a[1])
        : m === a.length - 1
        ? l(a[m])
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
        unit: r,
      },
      o,
    );
  }
  const SE = { borderRadius: 4 },
    xE = SE;
  function kE(e = 8) {
    if (e.mui) return e;
    const t = lb({ spacing: e }),
      r = (...n) =>
        (n.length === 0 ? [1] : n)
          .map((o) => {
            const i = t(o);
            return typeof i == "number" ? `${i}px` : i;
          })
          .join(" ");
    return (r.mui = !0), r;
  }
  const EE = ["breakpoints", "palette", "spacing", "shape"];
  function Wl(e = {}, ...t) {
    const {
        breakpoints: r = {},
        palette: n = {},
        spacing: o,
        shape: i = {},
      } = e,
      a = Z(e, EE),
      s = wE(r),
      l = kE(o);
    let u = Kt(
      {
        breakpoints: s,
        direction: "ltr",
        components: {},
        palette: E({ mode: "light" }, n),
        spacing: l,
        shape: E({}, xE, i),
      },
      a,
    );
    return (
      (u = t.reduce((d, f) => Kt(d, f), u)),
      (u.unstable_sxConfig = E(
        {},
        Ul,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (u.unstable_sx = function (d) {
        return Dl({ sx: d, theme: this });
      }),
      u
    );
  }
  const CE = S.createContext(null),
    fb = CE;
  function pb() {
    return S.useContext(fb);
  }
  const OE = typeof Symbol == "function" && Symbol.for,
    NE = OE ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  function TE(e, t) {
    return typeof t == "function" ? t(e) : E({}, e, t);
  }
  function RE(e) {
    const { children: t, theme: r } = e,
      n = pb(),
      o = S.useMemo(() => {
        const i = n === null ? r : TE(n, r);
        return i != null && (i[NE] = n !== null), i;
      }, [r, n]);
    return T(fb.Provider, { value: o, children: t });
  }
  function AE(e) {
    return Object.keys(e).length === 0;
  }
  function _E(e = null) {
    const t = pb();
    return !t || AE(t) ? e : t;
  }
  const IE = Wl();
  function Vl(e = IE) {
    return _E(e);
  }
  const PE = ["className", "component"];
  function $E(e = {}) {
    const {
        defaultTheme: t,
        defaultClassName: r = "MuiBox-root",
        generateClassName: n,
      } = e,
      o = ib("div", {
        shouldForwardProp: (i) => i !== "theme" && i !== "sx" && i !== "as",
      })(Dl);
    return S.forwardRef(function (i, a) {
      const s = Vl(t),
        l = Tf(i),
        { className: u, component: d = "div" } = l,
        f = Z(l, PE);
      return T(
        o,
        E({ as: d, ref: a, className: ue(u, n ? n(r) : r), theme: s }, f),
      );
    });
  }
  const ME = ["variant"];
  function hb(e) {
    return e.length === 0;
  }
  function mb(e) {
    const { variant: t } = e,
      r = Z(e, ME);
    let n = t || "";
    return (
      Object.keys(r)
        .sort()
        .forEach((o) => {
          o === "color"
            ? (n += hb(n) ? e[o] : ne(e[o]))
            : (n += `${hb(n) ? o : ne(o)}${ne(e[o].toString())}`);
        }),
      n
    );
  }
  const LE = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
    ],
    BE = ["theme"],
    zE = ["theme"];
  function la(e) {
    return Object.keys(e).length === 0;
  }
  function FE(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  const jE = (e, t) =>
      t.components && t.components[e] && t.components[e].styleOverrides
        ? t.components[e].styleOverrides
        : null,
    UE = (e, t) => {
      let r = [];
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (r = t.components[e].variants);
      const n = {};
      return (
        r.forEach((o) => {
          const i = mb(o.props);
          n[i] = o.style;
        }),
        n
      );
    },
    DE = (e, t, r, n) => {
      var o, i;
      const { ownerState: a = {} } = e,
        s = [],
        l =
          r == null || (o = r.components) == null || (i = o[n]) == null
            ? void 0
            : i.variants;
      return (
        l &&
          l.forEach((u) => {
            let d = !0;
            Object.keys(u.props).forEach((f) => {
              a[f] !== u.props[f] && e[f] !== u.props[f] && (d = !1);
            }),
              d && s.push(t[mb(u.props)]);
          }),
        s
      );
    };
  function ua(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  const WE = Wl();
  function gb(e = {}) {
    const {
        defaultTheme: t = WE,
        rootShouldForwardProp: r = ua,
        slotShouldForwardProp: n = ua,
      } = e,
      o = (i) => {
        const a = la(i.theme) ? t : i.theme;
        return Dl(E({}, i, { theme: a }));
      };
    return (
      (o.__mui_systemSx = !0),
      (i, a = {}) => {
        Tk(i, (v) => v.filter((k) => !(k != null && k.__mui_systemSx)));
        const {
            name: s,
            slot: l,
            skipVariantsResolver: u,
            skipSx: d,
            overridesResolver: f,
          } = a,
          h = Z(a, LE),
          m = u !== void 0 ? u : (l && l !== "Root") || !1,
          g = d || !1;
        let x,
          R = ua;
        l === "Root" ? (R = r) : l ? (R = n) : FE(i) && (R = void 0);
        const b = ib(i, E({ shouldForwardProp: R, label: x }, h)),
          y = (v, ...k) => {
            const C = k
              ? k.map((I) =>
                  typeof I == "function" && I.__emotion_real !== I
                    ? (P) => {
                        let { theme: z } = P,
                          H = Z(P, BE);
                        return I(E({ theme: la(z) ? t : z }, H));
                      }
                    : I,
                )
              : [];
            let A = v;
            s &&
              f &&
              C.push((I) => {
                const P = la(I.theme) ? t : I.theme,
                  z = jE(s, P);
                if (z) {
                  const H = {};
                  return (
                    Object.entries(z).forEach(([V, Q]) => {
                      H[V] =
                        typeof Q == "function" ? Q(E({}, I, { theme: P })) : Q;
                    }),
                    f(I, H)
                  );
                }
                return null;
              }),
              s &&
                !m &&
                C.push((I) => {
                  const P = la(I.theme) ? t : I.theme;
                  return DE(I, UE(s, P), P, s);
                }),
              g || C.push(o);
            const N = C.length - k.length;
            if (Array.isArray(v) && N > 0) {
              const I = new Array(N).fill("");
              (A = [...v, ...I]), (A.raw = [...v.raw, ...I]);
            } else
              typeof v == "function" &&
                v.__emotion_real !== v &&
                (A = (I) => {
                  let { theme: P } = I,
                    z = Z(I, zE);
                  return v(E({ theme: la(P) ? t : P }, z));
                });
            return b(A, ...C);
          };
        return b.withConfig && (y.withConfig = b.withConfig), y;
      }
    );
  }
  const VE = gb(),
    HE = VE;
  function qE(e) {
    const { theme: t, name: r, props: n } = e;
    return !t ||
      !t.components ||
      !t.components[r] ||
      !t.components[r].defaultProps
      ? n
      : sf(t.components[r].defaultProps, n);
  }
  function bb({ props: e, name: t, defaultTheme: r }) {
    const n = Vl(r);
    return qE({ theme: n, name: t, props: e });
  }
  function Rf(e, t = 0, r = 1) {
    return Math.min(Math.max(t, e), r);
  }
  function GE(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return (
      r && r[0].length === 1 && (r = r.map((n) => n + n)),
      r
        ? `rgb${r.length === 4 ? "a" : ""}(${r
            .map((n, o) =>
              o < 3
                ? parseInt(n, 16)
                : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3,
            )
            .join(", ")})`
        : ""
    );
  }
  function Fn(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return Fn(GE(e));
    const t = e.indexOf("("),
      r = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
      throw new Error(dn(9, e));
    let n = e.substring(t + 1, e.length - 1),
      o;
    if (r === "color") {
      if (
        ((n = n.split(" ")),
        (o = n.shift()),
        n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)),
        ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
          o,
        ) === -1)
      )
        throw new Error(dn(10, o));
    } else n = n.split(",");
    return (
      (n = n.map((i) => parseFloat(i))), { type: r, values: n, colorSpace: o }
    );
  }
  function Hl(e) {
    const { type: t, colorSpace: r } = e;
    let { values: n } = e;
    return (
      t.indexOf("rgb") !== -1
        ? (n = n.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
        : t.indexOf("hsl") !== -1 && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
      t.indexOf("color") !== -1
        ? (n = `${r} ${n.join(" ")}`)
        : (n = `${n.join(", ")}`),
      `${t}(${n})`
    );
  }
  function KE(e) {
    e = Fn(e);
    const { values: t } = e,
      r = t[0],
      n = t[1] / 100,
      o = t[2] / 100,
      i = n * Math.min(o, 1 - o),
      a = (u, d = (u + r / 30) % 12) =>
        o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
    let s = "rgb";
    const l = [
      Math.round(a(0) * 255),
      Math.round(a(8) * 255),
      Math.round(a(4) * 255),
    ];
    return (
      e.type === "hsla" && ((s += "a"), l.push(t[3])),
      Hl({ type: s, values: l })
    );
  }
  function yb(e) {
    e = Fn(e);
    let t = e.type === "hsl" || e.type === "hsla" ? Fn(KE(e)).values : e.values;
    return (
      (t = t.map(
        (r) => (
          e.type !== "color" && (r /= 255),
          r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
        ),
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function QE(e, t) {
    const r = yb(e),
      n = yb(t);
    return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
  }
  function ft(e, t) {
    return (
      (e = Fn(e)),
      (t = Rf(t)),
      (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
      e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      Hl(e)
    );
  }
  function ql(e, t) {
    if (((e = Fn(e)), (t = Rf(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
      for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return Hl(e);
  }
  function Gl(e, t) {
    if (((e = Fn(e)), (t = Rf(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
      for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.indexOf("color") !== -1)
      for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return Hl(e);
  }
  const XE = {};
  function YE(e) {
    const t = Vl();
    return T(Sf.Provider, {
      value: typeof t == "object" ? t : XE,
      children: e.children,
    });
  }
  function vb(e) {
    const { children: t, theme: r } = e;
    return T(RE, { theme: r, children: T(YE, { children: t }) });
  }
  const JE = [
      "className",
      "component",
      "disableGutters",
      "fixed",
      "maxWidth",
      "classes",
    ],
    ZE = Wl(),
    eC = HE("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          t[`maxWidth${ne(String(r.maxWidth))}`],
          r.fixed && t.fixed,
          r.disableGutters && t.disableGutters,
        ];
      },
    }),
    tC = (e) => bb({ props: e, name: "MuiContainer", defaultTheme: ZE }),
    rC = (e, t) => {
      const r = (l) => ye(t, l),
        { classes: n, fixed: o, disableGutters: i, maxWidth: a } = e,
        s = {
          root: [
            "root",
            a && `maxWidth${ne(String(a))}`,
            o && "fixed",
            i && "disableGutters",
          ],
        };
      return ve(s, r, n);
    };
  function nC(e = {}) {
    const {
        createStyledComponent: t = eC,
        useThemeProps: r = tC,
        componentName: n = "MuiContainer",
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
    return S.forwardRef(function (i, a) {
      const s = r(i),
        {
          className: l,
          component: u = "div",
          disableGutters: d = !1,
          fixed: f = !1,
          maxWidth: h = "lg",
        } = s,
        m = Z(s, JE),
        g = E({}, s, {
          component: u,
          disableGutters: d,
          fixed: f,
          maxWidth: h,
        }),
        x = rC(g, n);
      return T(
        o,
        E({ as: u, ownerState: g, className: ue(x.root, l), ref: a }, m),
      );
    });
  }
  function oC(e, t) {
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
  const iC = ["mode", "contrastThreshold", "tonalOffset"],
    wb = {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: Ji.white, default: Ji.white },
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
    Af = {
      text: {
        primary: Ji.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: Ji.white,
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
  function Sb(e, t, r, n) {
    const o = n.light || n,
      i = n.dark || n * 1.5;
    e[t] ||
      (e.hasOwnProperty(r)
        ? (e[t] = e[r])
        : t === "light"
        ? (e.light = Gl(e.main, o))
        : t === "dark" && (e.dark = ql(e.main, i)));
  }
  function aC(e = "light") {
    return e === "dark"
      ? { main: Mn[200], light: Mn[50], dark: Mn[400] }
      : { main: Mn[700], light: Mn[400], dark: Mn[800] };
  }
  function sC(e = "light") {
    return e === "dark"
      ? { main: $n[200], light: $n[50], dark: $n[400] }
      : { main: $n[500], light: $n[300], dark: $n[700] };
  }
  function lC(e = "light") {
    return e === "dark"
      ? { main: Pn[500], light: Pn[300], dark: Pn[700] }
      : { main: Pn[700], light: Pn[400], dark: Pn[800] };
  }
  function uC(e = "light") {
    return e === "dark"
      ? { main: Ao[400], light: Ao[300], dark: Ao[700] }
      : { main: Ao[700], light: Ao[500], dark: Ao[900] };
  }
  function cC(e = "light") {
    return e === "dark"
      ? { main: Ln[400], light: Ln[300], dark: Ln[700] }
      : { main: Ln[800], light: Ln[500], dark: Ln[900] };
  }
  function dC(e = "light") {
    return e === "dark"
      ? { main: _o[400], light: _o[300], dark: _o[700] }
      : { main: "#ed6c02", light: _o[500], dark: _o[900] };
  }
  function fC(e) {
    const {
        mode: t = "light",
        contrastThreshold: r = 3,
        tonalOffset: n = 0.2,
      } = e,
      o = Z(e, iC),
      i = e.primary || aC(t),
      a = e.secondary || sC(t),
      s = e.error || lC(t),
      l = e.info || uC(t),
      u = e.success || cC(t),
      d = e.warning || dC(t);
    function f(g) {
      return QE(g, Af.text.primary) >= r ? Af.text.primary : wb.text.primary;
    }
    const h = ({
        color: g,
        name: x,
        mainShade: R = 500,
        lightShade: b = 300,
        darkShade: y = 700,
      }) => {
        if (
          ((g = E({}, g)),
          !g.main && g[R] && (g.main = g[R]),
          !g.hasOwnProperty("main"))
        )
          throw new Error(dn(11, x ? ` (${x})` : "", R));
        if (typeof g.main != "string")
          throw new Error(dn(12, x ? ` (${x})` : "", JSON.stringify(g.main)));
        return (
          Sb(g, "light", b, n),
          Sb(g, "dark", y, n),
          g.contrastText || (g.contrastText = f(g.main)),
          g
        );
      },
      m = { dark: Af, light: wb };
    return Kt(
      E(
        {
          common: E({}, Ji),
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
          grey: a2,
          contrastThreshold: r,
          getContrastText: f,
          augmentColor: h,
          tonalOffset: n,
        },
        m[t],
      ),
      o,
    );
  }
  const pC = [
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
  function hC(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const xb = { textTransform: "uppercase" },
    kb = '"Roboto", "Helvetica", "Arial", sans-serif';
  function mC(e, t) {
    const r = typeof t == "function" ? t(e) : t,
      {
        fontFamily: n = kb,
        fontSize: o = 14,
        fontWeightLight: i = 300,
        fontWeightRegular: a = 400,
        fontWeightMedium: s = 500,
        fontWeightBold: l = 700,
        htmlFontSize: u = 16,
        allVariants: d,
        pxToRem: f,
      } = r,
      h = Z(r, pC),
      m = o / 14,
      g = f || ((b) => `${(b / u) * m}rem`),
      x = (b, y, v, k, C) =>
        E(
          { fontFamily: n, fontWeight: b, fontSize: g(y), lineHeight: v },
          n === kb ? { letterSpacing: `${hC(k / y)}em` } : {},
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
        button: x(s, 14, 1.75, 0.4, xb),
        caption: x(a, 12, 1.66, 0.4),
        overline: x(a, 12, 2.66, 1, xb),
      };
    return Kt(
      E(
        {
          htmlFontSize: u,
          pxToRem: g,
          fontFamily: n,
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
  const gC = 0.2,
    bC = 0.14,
    yC = 0.12;
  function je(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${gC})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${bC})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yC})`,
    ].join(",");
  }
  const vC = [
      "none",
      je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    wC = vC,
    SC = ["duration", "easing", "delay"],
    xC = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    kC = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function Eb(e) {
    return `${Math.round(e)}ms`;
  }
  function EC(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
  }
  function CC(e) {
    const t = E({}, xC, e.easing),
      r = E({}, kC, e.duration);
    return E(
      {
        getAutoHeightDuration: EC,
        create: (n = ["all"], o = {}) => {
          const {
            duration: i = r.standard,
            easing: a = t.easeInOut,
            delay: s = 0,
          } = o;
          return (
            Z(o, SC),
            (Array.isArray(n) ? n : [n])
              .map(
                (l) =>
                  `${l} ${typeof i == "string" ? i : Eb(i)} ${a} ${
                    typeof s == "string" ? s : Eb(s)
                  }`,
              )
              .join(",")
          );
        },
      },
      e,
      { easing: t, duration: r },
    );
  }
  const OC = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    NC = OC,
    TC = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
    ];
  function Kl(e = {}, ...t) {
    const {
        mixins: r = {},
        palette: n = {},
        transitions: o = {},
        typography: i = {},
      } = e,
      a = Z(e, TC);
    if (e.vars) throw new Error(dn(18));
    const s = fC(n),
      l = Wl(e);
    let u = Kt(l, {
      mixins: oC(l.breakpoints, r),
      palette: s,
      shadows: wC.slice(),
      typography: mC(s, i),
      transitions: CC(o),
      zIndex: E({}, NC),
    });
    return (
      (u = Kt(u, a)),
      (u = t.reduce((d, f) => Kt(d, f), u)),
      (u.unstable_sxConfig = E(
        {},
        Ul,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (u.unstable_sx = function (d) {
        return Dl({ sx: d, theme: this });
      }),
      u
    );
  }
  const RC = Kl(),
    Ql = RC;
  function Bo() {
    return Vl(Ql);
  }
  function Se({ props: e, name: t }) {
    return bb({ props: e, name: t, defaultTheme: Ql });
  }
  const dr = (e) => ua(e) && e !== "classes",
    AC = ua,
    _C = gb({ defaultTheme: Ql, rootShouldForwardProp: dr }),
    ee = _C,
    IC = (e) => {
      let t;
      return (
        e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
        (t / 100).toFixed(2)
      );
    },
    Cb = IC;
  function zo(e) {
    return typeof e == "string";
  }
  function PC(e, t, r) {
    return e === void 0 || zo(e)
      ? t
      : E({}, t, { ownerState: E({}, t.ownerState, r) });
  }
  function $C(e, t = []) {
    if (e === void 0) return {};
    const r = {};
    return (
      Object.keys(e)
        .filter(
          (n) =>
            n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n),
        )
        .forEach((n) => {
          r[n] = e[n];
        }),
      r
    );
  }
  function _f(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ob(e) {
    if (e === void 0) return {};
    const t = {};
    return (
      Object.keys(e)
        .filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function"))
        .forEach((r) => {
          t[r] = e[r];
        }),
      t
    );
  }
  function MC(e) {
    const {
      getSlotProps: t,
      additionalProps: r,
      externalSlotProps: n,
      externalForwardedProps: o,
      className: i,
    } = e;
    if (!t) {
      const m = ue(
          o == null ? void 0 : o.className,
          n == null ? void 0 : n.className,
          i,
          r == null ? void 0 : r.className,
        ),
        g = E(
          {},
          r == null ? void 0 : r.style,
          o == null ? void 0 : o.style,
          n == null ? void 0 : n.style,
        ),
        x = E({}, r, o, n);
      return (
        m.length > 0 && (x.className = m),
        Object.keys(g).length > 0 && (x.style = g),
        { props: x, internalRef: void 0 }
      );
    }
    const a = $C(E({}, o, n)),
      s = Ob(n),
      l = Ob(o),
      u = t(a),
      d = ue(
        u == null ? void 0 : u.className,
        r == null ? void 0 : r.className,
        i,
        o == null ? void 0 : o.className,
        n == null ? void 0 : n.className,
      ),
      f = E(
        {},
        u == null ? void 0 : u.style,
        r == null ? void 0 : r.style,
        o == null ? void 0 : o.style,
        n == null ? void 0 : n.style,
      ),
      h = E({}, u, r, l, s);
    return (
      d.length > 0 && (h.className = d),
      Object.keys(f).length > 0 && (h.style = f),
      { props: h, internalRef: u.ref }
    );
  }
  const LC = ["elementType", "externalSlotProps", "ownerState"];
  function Nb(e) {
    var t;
    const { elementType: r, externalSlotProps: n, ownerState: o } = e,
      i = Z(e, LC),
      a = _f(n, o),
      { props: s, internalRef: l } = MC(E({}, i, { externalSlotProps: a })),
      u = ct(
        l,
        a == null ? void 0 : a.ref,
        (t = e.additionalProps) == null ? void 0 : t.ref,
      );
    return PC(r, E({}, s, { ref: u }), o);
  }
  const BC = [
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
  function zC(e) {
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
  function FC(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
    let r = t(`[name="${e.name}"]:checked`);
    return r || (r = t(`[name="${e.name}"]`)), r !== e;
  }
  function jC(e) {
    return !(
      e.disabled ||
      (e.tagName === "INPUT" && e.type === "hidden") ||
      FC(e)
    );
  }
  function UC(e) {
    const t = [],
      r = [];
    return (
      Array.from(e.querySelectorAll(BC)).forEach((n, o) => {
        const i = zC(n);
        i === -1 ||
          !jC(n) ||
          (i === 0
            ? t.push(n)
            : r.push({ documentOrder: o, tabIndex: i, node: n }));
      }),
      r
        .sort((n, o) =>
          n.tabIndex === o.tabIndex
            ? n.documentOrder - o.documentOrder
            : n.tabIndex - o.tabIndex,
        )
        .map((n) => n.node)
        .concat(t)
    );
  }
  function DC() {
    return !0;
  }
  function WC(e) {
    const {
        children: t,
        disableAutoFocus: r = !1,
        disableEnforceFocus: n = !1,
        disableRestoreFocus: o = !1,
        getTabbable: i = UC,
        isEnabled: a = DC,
        open: s,
      } = e,
      l = S.useRef(!1),
      u = S.useRef(null),
      d = S.useRef(null),
      f = S.useRef(null),
      h = S.useRef(null),
      m = S.useRef(!1),
      g = S.useRef(null),
      x = ct(t.ref, g),
      R = S.useRef(null);
    S.useEffect(() => {
      !s || !g.current || (m.current = !r);
    }, [r, s]),
      S.useEffect(() => {
        if (!s || !g.current) return;
        const v = Rt(g.current);
        return (
          g.current.contains(v.activeElement) ||
            (g.current.hasAttribute("tabIndex") ||
              g.current.setAttribute("tabIndex", "-1"),
            m.current && g.current.focus()),
          () => {
            o ||
              (f.current &&
                f.current.focus &&
                ((l.current = !0), f.current.focus()),
              (f.current = null));
          }
        );
      }, [s]),
      S.useEffect(() => {
        if (!s || !g.current) return;
        const v = Rt(g.current),
          k = (N) => {
            const { current: I } = g;
            if (I !== null) {
              if (!v.hasFocus() || n || !a() || l.current) {
                l.current = !1;
                return;
              }
              if (!I.contains(v.activeElement)) {
                if (
                  (N && h.current !== N.target) ||
                  v.activeElement !== h.current
                )
                  h.current = null;
                else if (h.current !== null) return;
                if (!m.current) return;
                let H = [];
                if (
                  ((v.activeElement === u.current ||
                    v.activeElement === d.current) &&
                    (H = i(g.current)),
                  H.length > 0)
                ) {
                  var P, z;
                  const V = !!(
                      (P = R.current) != null &&
                      P.shiftKey &&
                      ((z = R.current) == null ? void 0 : z.key) === "Tab"
                    ),
                    Q = H[0],
                    U = H[H.length - 1];
                  typeof Q != "string" &&
                    typeof U != "string" &&
                    (V ? U.focus() : Q.focus());
                } else I.focus();
              }
            }
          },
          C = (N) => {
            (R.current = N),
              !(n || !a() || N.key !== "Tab") &&
                v.activeElement === g.current &&
                N.shiftKey &&
                ((l.current = !0), d.current && d.current.focus());
          };
        v.addEventListener("focusin", k), v.addEventListener("keydown", C, !0);
        const A = setInterval(() => {
          v.activeElement && v.activeElement.tagName === "BODY" && k(null);
        }, 50);
        return () => {
          clearInterval(A),
            v.removeEventListener("focusin", k),
            v.removeEventListener("keydown", C, !0);
        };
      }, [r, n, o, a, s, i]);
    const b = (v) => {
        f.current === null && (f.current = v.relatedTarget),
          (m.current = !0),
          (h.current = v.target);
        const k = t.props.onFocus;
        k && k(v);
      },
      y = (v) => {
        f.current === null && (f.current = v.relatedTarget), (m.current = !0);
      };
    return de(S.Fragment, {
      children: [
        T("div", {
          tabIndex: s ? 0 : -1,
          onFocus: y,
          ref: u,
          "data-testid": "sentinelStart",
        }),
        S.cloneElement(t, { ref: x, onFocus: b }),
        T("div", {
          tabIndex: s ? 0 : -1,
          onFocus: y,
          ref: d,
          "data-testid": "sentinelEnd",
        }),
      ],
    });
  }
  function VC(e) {
    return typeof e == "function" ? e() : e;
  }
  const HC = S.forwardRef(function (e, t) {
      const { children: r, container: n, disablePortal: o = !1 } = e,
        [i, a] = S.useState(null),
        s = ct(S.isValidElement(r) ? r.ref : null, t);
      if (
        (Fr(() => {
          o || a(VC(n) || document.body);
        }, [n, o]),
        Fr(() => {
          if (i && !o)
            return (
              cl(t, i),
              () => {
                cl(t, null);
              }
            );
        }, [t, i, o]),
        o)
      ) {
        if (S.isValidElement(r)) {
          const l = { ref: s };
          return S.cloneElement(r, l);
        }
        return T(S.Fragment, { children: r });
      }
      return T(S.Fragment, { children: i && Jn.createPortal(r, i) });
    }),
    qC = HC;
  function GC(e) {
    const t = Rt(e);
    return t.body === e
      ? fn(e).innerWidth > t.documentElement.clientWidth
      : e.scrollHeight > e.clientHeight;
  }
  function ca(e, t) {
    t
      ? e.setAttribute("aria-hidden", "true")
      : e.removeAttribute("aria-hidden");
  }
  function Tb(e) {
    return parseInt(fn(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function KC(e) {
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
      r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return t || r;
  }
  function Rb(e, t, r, n, o) {
    const i = [t, r, ...n];
    [].forEach.call(e.children, (a) => {
      const s = i.indexOf(a) === -1,
        l = !KC(a);
      s && l && ca(a, o);
    });
  }
  function If(e, t) {
    let r = -1;
    return e.some((n, o) => (t(n) ? ((r = o), !0) : !1)), r;
  }
  function QC(e, t) {
    const r = [],
      n = e.container;
    if (!t.disableScrollLock) {
      if (GC(n)) {
        const i = _0(Rt(n));
        r.push({
          value: n.style.paddingRight,
          property: "padding-right",
          el: n,
        }),
          (n.style.paddingRight = `${Tb(n) + i}px`);
        const a = Rt(n).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          r.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s,
          }),
            (s.style.paddingRight = `${Tb(s) + i}px`);
        });
      }
      let o;
      if (n.parentNode instanceof DocumentFragment) o = Rt(n).body;
      else {
        const i = n.parentElement,
          a = fn(n);
        o =
          (i == null ? void 0 : i.nodeName) === "HTML" &&
          a.getComputedStyle(i).overflowY === "scroll"
            ? i
            : n;
      }
      r.push(
        { value: o.style.overflow, property: "overflow", el: o },
        { value: o.style.overflowX, property: "overflow-x", el: o },
        { value: o.style.overflowY, property: "overflow-y", el: o },
      ),
        (o.style.overflow = "hidden");
    }
    return () => {
      r.forEach(({ value: o, el: i, property: a }) => {
        o ? i.style.setProperty(a, o) : i.style.removeProperty(a);
      });
    };
  }
  function XC(e) {
    const t = [];
    return (
      [].forEach.call(e.children, (r) => {
        r.getAttribute("aria-hidden") === "true" && t.push(r);
      }),
      t
    );
  }
  class YC {
    constructor() {
      (this.containers = void 0),
        (this.modals = void 0),
        (this.modals = []),
        (this.containers = []);
    }
    add(t, r) {
      let n = this.modals.indexOf(t);
      if (n !== -1) return n;
      (n = this.modals.length),
        this.modals.push(t),
        t.modalRef && ca(t.modalRef, !1);
      const o = XC(r);
      Rb(r, t.mount, t.modalRef, o, !0);
      const i = If(this.containers, (a) => a.container === r);
      return i !== -1
        ? (this.containers[i].modals.push(t), n)
        : (this.containers.push({
            modals: [t],
            container: r,
            restore: null,
            hiddenSiblings: o,
          }),
          n);
    }
    mount(t, r) {
      const n = If(this.containers, (i) => i.modals.indexOf(t) !== -1),
        o = this.containers[n];
      o.restore || (o.restore = QC(o, r));
    }
    remove(t, r = !0) {
      const n = this.modals.indexOf(t);
      if (n === -1) return n;
      const o = If(this.containers, (a) => a.modals.indexOf(t) !== -1),
        i = this.containers[o];
      if (
        (i.modals.splice(i.modals.indexOf(t), 1),
        this.modals.splice(n, 1),
        i.modals.length === 0)
      )
        i.restore && i.restore(),
          t.modalRef && ca(t.modalRef, r),
          Rb(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
          this.containers.splice(o, 1);
      else {
        const a = i.modals[i.modals.length - 1];
        a.modalRef && ca(a.modalRef, !1);
      }
      return n;
    }
    isTopModal(t) {
      return (
        this.modals.length > 0 && this.modals[this.modals.length - 1] === t
      );
    }
  }
  function JC(e) {
    return ye("MuiModal", e);
  }
  ge("MuiModal", ["root", "hidden"]);
  const ZC = [
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
    e5 = (e) => {
      const { open: t, exited: r, classes: n } = e;
      return ve(
        { root: ["root", !t && r && "hidden"], backdrop: ["backdrop"] },
        JC,
        n,
      );
    };
  function t5(e) {
    return typeof e == "function" ? e() : e;
  }
  function r5(e) {
    return e ? e.props.hasOwnProperty("in") : !1;
  }
  const n5 = new YC(),
    o5 = S.forwardRef(function (e, t) {
      var r, n;
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
          disableRestoreFocus: m = !1,
          disableScrollLock: g = !1,
          hideBackdrop: x = !1,
          keepMounted: R = !1,
          manager: b = n5,
          onBackdropClick: y,
          onClose: v,
          onKeyDown: k,
          open: C,
          onTransitionEnter: A,
          onTransitionExited: N,
          slotProps: I = {},
          slots: P = {},
        } = e,
        z = Z(e, ZC),
        [H, V] = S.useState(!C),
        Q = S.useRef({}),
        U = S.useRef(null),
        K = S.useRef(null),
        Y = ct(K, t),
        J = r5(o),
        D = (r = e["aria-hidden"]) != null ? r : !0,
        B = () => Rt(U.current),
        L = () => (
          (Q.current.modalRef = K.current),
          (Q.current.mountNode = U.current),
          Q.current
        ),
        O = () => {
          b.mount(L(), { disableScrollLock: g }),
            K.current && (K.current.scrollTop = 0);
        },
        M = zn(() => {
          const w = t5(l) || B().body;
          b.add(L(), w), K.current && O();
        }),
        j = S.useCallback(() => b.isTopModal(L()), [b]),
        W = zn((w) => {
          (U.current = w),
            !(!w || !K.current) && (C && j() ? O() : ca(K.current, D));
        }),
        X = S.useCallback(() => {
          b.remove(L(), D);
        }, [b, D]);
      S.useEffect(
        () => () => {
          X();
        },
        [X],
      ),
        S.useEffect(() => {
          C ? M() : (!J || !a) && X();
        }, [C, X, J, a, M]);
      const oe = E({}, e, {
          classes: i,
          closeAfterTransition: a,
          disableAutoFocus: u,
          disableEnforceFocus: d,
          disableEscapeKeyDown: f,
          disablePortal: h,
          disableRestoreFocus: m,
          disableScrollLock: g,
          exited: H,
          hideBackdrop: x,
          keepMounted: R,
        }),
        le = e5(oe),
        ie = () => {
          V(!1), A && A();
        },
        ce = () => {
          V(!0), N && N(), a && X();
        },
        ae = (w) => {
          w.target === w.currentTarget &&
            (y && y(w), v && v(w, "backdropClick"));
        },
        be = (w) => {
          k && k(w),
            !(w.key !== "Escape" || !j()) &&
              (f || (w.stopPropagation(), v && v(w, "escapeKeyDown")));
        },
        xe = {};
      o.props.tabIndex === void 0 && (xe.tabIndex = "-1"),
        J &&
          ((xe.onEnter = rf(ie, o.props.onEnter)),
          (xe.onExited = rf(ce, o.props.onExited)));
      const He = (n = s ?? P.root) != null ? n : "div",
        Oe = Nb({
          elementType: He,
          externalSlotProps: I.root,
          externalForwardedProps: z,
          additionalProps: { ref: Y, role: "presentation", onKeyDown: be },
          className: le.root,
          ownerState: oe,
        }),
        c = P.backdrop,
        p = Nb({
          elementType: c,
          externalSlotProps: I.backdrop,
          additionalProps: { "aria-hidden": !0, onClick: ae, open: C },
          className: le.backdrop,
          ownerState: oe,
        });
      return !R && !C && (!J || H)
        ? null
        : T(qC, {
            ref: W,
            container: l,
            disablePortal: h,
            children: de(
              He,
              E({}, Oe, {
                children: [
                  !x && c ? T(c, E({}, p)) : null,
                  T(WC, {
                    disableEnforceFocus: d,
                    disableAutoFocus: u,
                    disableRestoreFocus: m,
                    isEnabled: j,
                    open: C,
                    children: S.cloneElement(o, xe),
                  }),
                ],
              }),
            ),
          });
    }),
    i5 = o5,
    a5 = ["onChange", "maxRows", "minRows", "style", "value"];
  function Xl(e, t) {
    return parseInt(e[t], 10) || 0;
  }
  const s5 = {
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
  function Ab(e) {
    return e == null || Object.keys(e).length === 0;
  }
  const l5 = S.forwardRef(function (e, t) {
      const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a } = e,
        s = Z(e, a5),
        { current: l } = S.useRef(a != null),
        u = S.useRef(null),
        d = ct(t, u),
        f = S.useRef(null),
        h = S.useRef(0),
        [m, g] = S.useState({}),
        x = S.useCallback(() => {
          const k = u.current,
            C = fn(k).getComputedStyle(k);
          if (C.width === "0px") return {};
          const A = f.current;
          (A.style.width = C.width),
            (A.value = k.value || e.placeholder || "x"),
            A.value.slice(-1) ===
              `
` && (A.value += " ");
          const N = C["box-sizing"],
            I = Xl(C, "padding-bottom") + Xl(C, "padding-top"),
            P = Xl(C, "border-bottom-width") + Xl(C, "border-top-width"),
            z = A.scrollHeight;
          A.value = "x";
          const H = A.scrollHeight;
          let V = z;
          o && (V = Math.max(Number(o) * H, V)),
            n && (V = Math.min(Number(n) * H, V)),
            (V = Math.max(V, H));
          const Q = V + (N === "border-box" ? I + P : 0),
            U = Math.abs(V - z) <= 1;
          return { outerHeightStyle: Q, overflow: U };
        }, [n, o, e.placeholder]),
        R = (k, C) => {
          const { outerHeightStyle: A, overflow: N } = C;
          return h.current < 20 &&
            ((A > 0 && Math.abs((k.outerHeightStyle || 0) - A) > 1) ||
              k.overflow !== N)
            ? ((h.current += 1), { overflow: N, outerHeightStyle: A })
            : k;
        },
        b = S.useCallback(() => {
          const k = x();
          Ab(k) || g((C) => R(C, k));
        }, [x]),
        y = () => {
          const k = x();
          Ab(k) ||
            Jn.flushSync(() => {
              g((C) => R(C, k));
            });
        };
      S.useEffect(() => {
        const k = nf(() => {
            (h.current = 0), u.current && y();
          }),
          C = fn(u.current);
        C.addEventListener("resize", k);
        let A;
        return (
          typeof ResizeObserver < "u" &&
            ((A = new ResizeObserver(k)), A.observe(u.current)),
          () => {
            k.clear(), C.removeEventListener("resize", k), A && A.disconnect();
          }
        );
      }),
        Fr(() => {
          b();
        }),
        S.useEffect(() => {
          h.current = 0;
        }, [a]);
      const v = (k) => {
        (h.current = 0), l || b(), r && r(k);
      };
      return de(S.Fragment, {
        children: [
          T(
            "textarea",
            E(
              {
                value: a,
                onChange: v,
                ref: d,
                rows: o,
                style: E(
                  {
                    height: m.outerHeightStyle,
                    overflow: m.overflow ? "hidden" : null,
                  },
                  i,
                ),
              },
              s,
            ),
          ),
          T("textarea", {
            "aria-hidden": !0,
            className: e.className,
            readOnly: !0,
            ref: f,
            tabIndex: -1,
            style: E({}, s5.shadow, i, { padding: 0 }),
          }),
        ],
      });
    }),
    u5 = l5;
  function c5(e) {
    return ye("MuiSvgIcon", e);
  }
  ge("MuiSvgIcon", [
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
  const d5 = [
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
    f5 = (e) => {
      const { color: t, fontSize: r, classes: n } = e,
        o = {
          root: [
            "root",
            t !== "inherit" && `color${ne(t)}`,
            `fontSize${ne(r)}`,
          ],
        };
      return ve(o, c5, n);
    },
    p5 = ee("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          r.color !== "inherit" && t[`color${ne(r.color)}`],
          t[`fontSize${ne(r.fontSize)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var r, n, o, i, a, s, l, u, d, f, h, m, g, x, R, b, y;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
        transition:
          (r = e.transitions) == null || (n = r.create) == null
            ? void 0
            : n.call(r, "fill", {
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
            (m = (e.vars || e).palette) == null || (g = m[t.color]) == null
              ? void 0
              : g.main) != null
            ? h
            : {
                action:
                  (x = (e.vars || e).palette) == null || (R = x.action) == null
                    ? void 0
                    : R.active,
                disabled:
                  (b = (e.vars || e).palette) == null || (y = b.action) == null
                    ? void 0
                    : y.disabled,
                inherit: void 0,
              }[t.color],
      };
    }),
    _b = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiSvgIcon" }),
        {
          children: n,
          className: o,
          color: i = "inherit",
          component: a = "svg",
          fontSize: s = "medium",
          htmlColor: l,
          inheritViewBox: u = !1,
          titleAccess: d,
          viewBox: f = "0 0 24 24",
        } = r,
        h = Z(r, d5),
        m = E({}, r, {
          color: i,
          component: a,
          fontSize: s,
          instanceFontSize: e.fontSize,
          inheritViewBox: u,
          viewBox: f,
        }),
        g = {};
      u || (g.viewBox = f);
      const x = f5(m);
      return de(
        p5,
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
            ownerState: m,
            children: [n, d ? T("title", { children: d }) : null],
          },
        ),
      );
    });
  _b.muiName = "SvgIcon";
  const Ib = _b;
  function Er(e, t) {
    function r(n, o) {
      return T(
        Ib,
        E({ "data-testid": `${t}Icon`, ref: o }, n, { children: e }),
      );
    }
    return (r.muiName = Ib.muiName), S.memo(S.forwardRef(r));
  }
  const h5 = {
      configure: (e) => {
        lf.configure(e);
      },
    },
    m5 = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          capitalize: ne,
          createChainedFunction: rf,
          createSvgIcon: Er,
          debounce: nf,
          deprecatedPropType: c2,
          isMuiElement: Zi,
          ownerDocument: Rt,
          ownerWindow: fn,
          requirePropFactory: d2,
          setRef: cl,
          unstable_ClassNameGenerator: h5,
          unstable_useEnhancedEffect: Fr,
          unstable_useId: T0,
          unsupportedProp: h2,
          useControlled: dl,
          useEventCallback: zn,
          useForkRef: ct,
          useIsFocusVisible: A0,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  function Pf(e, t) {
    return (
      (Pf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, n) {
            return (r.__proto__ = n), r;
          }),
      Pf(e, t)
    );
  }
  function Pb(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Pf(e, t);
  }
  const $b = { disabled: !1 },
    Yl = me.createContext(null);
  var g5 = function (e) {
      return e.scrollTop;
    },
    da = "unmounted",
    jn = "exited",
    Un = "entering",
    Fo = "entered",
    $f = "exiting",
    jr = (function (e) {
      Pb(t, e);
      function t(n, o) {
        var i;
        i = e.call(this, n, o) || this;
        var a = o,
          s = a && !a.isMounting ? n.enter : n.appear,
          l;
        return (
          (i.appearStatus = null),
          n.in
            ? s
              ? ((l = jn), (i.appearStatus = Un))
              : (l = Fo)
            : n.unmountOnExit || n.mountOnEnter
            ? (l = da)
            : (l = jn),
          (i.state = { status: l }),
          (i.nextCallback = null),
          i
        );
      }
      t.getDerivedStateFromProps = function (n, o) {
        var i = n.in;
        return i && o.status === da ? { status: jn } : null;
      };
      var r = t.prototype;
      return (
        (r.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (r.componentDidUpdate = function (n) {
          var o = null;
          if (n !== this.props) {
            var i = this.state.status;
            this.props.in
              ? i !== Un && i !== Fo && (o = Un)
              : (i === Un || i === Fo) && (o = $f);
          }
          this.updateStatus(!1, o);
        }),
        (r.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (r.getTimeouts = function () {
          var n = this.props.timeout,
            o,
            i,
            a;
          return (
            (o = i = a = n),
            n != null &&
              typeof n != "number" &&
              ((o = n.exit),
              (i = n.enter),
              (a = n.appear !== void 0 ? n.appear : i)),
            { exit: o, enter: i, appear: a }
          );
        }),
        (r.updateStatus = function (n, o) {
          if ((n === void 0 && (n = !1), o !== null))
            if ((this.cancelNextCallback(), o === Un)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var i = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : Ks.findDOMNode(this);
                i && g5(i);
              }
              this.performEnter(n);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === jn &&
              this.setState({ status: da });
        }),
        (r.performEnter = function (n) {
          var o = this,
            i = this.props.enter,
            a = this.context ? this.context.isMounting : n,
            s = this.props.nodeRef ? [a] : [Ks.findDOMNode(this), a],
            l = s[0],
            u = s[1],
            d = this.getTimeouts(),
            f = a ? d.appear : d.enter;
          if ((!n && !i) || $b.disabled) {
            this.safeSetState({ status: Fo }, function () {
              o.props.onEntered(l);
            });
            return;
          }
          this.props.onEnter(l, u),
            this.safeSetState({ status: Un }, function () {
              o.props.onEntering(l, u),
                o.onTransitionEnd(f, function () {
                  o.safeSetState({ status: Fo }, function () {
                    o.props.onEntered(l, u);
                  });
                });
            });
        }),
        (r.performExit = function () {
          var n = this,
            o = this.props.exit,
            i = this.getTimeouts(),
            a = this.props.nodeRef ? void 0 : Ks.findDOMNode(this);
          if (!o || $b.disabled) {
            this.safeSetState({ status: jn }, function () {
              n.props.onExited(a);
            });
            return;
          }
          this.props.onExit(a),
            this.safeSetState({ status: $f }, function () {
              n.props.onExiting(a),
                n.onTransitionEnd(i.exit, function () {
                  n.safeSetState({ status: jn }, function () {
                    n.props.onExited(a);
                  });
                });
            });
        }),
        (r.cancelNextCallback = function () {
          this.nextCallback !== null &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (r.safeSetState = function (n, o) {
          (o = this.setNextCallback(o)), this.setState(n, o);
        }),
        (r.setNextCallback = function (n) {
          var o = this,
            i = !0;
          return (
            (this.nextCallback = function (a) {
              i && ((i = !1), (o.nextCallback = null), n(a));
            }),
            (this.nextCallback.cancel = function () {
              i = !1;
            }),
            this.nextCallback
          );
        }),
        (r.onTransitionEnd = function (n, o) {
          this.setNextCallback(o);
          var i = this.props.nodeRef
              ? this.props.nodeRef.current
              : Ks.findDOMNode(this),
            a = n == null && !this.props.addEndListener;
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
          n != null && setTimeout(this.nextCallback, n);
        }),
        (r.render = function () {
          var n = this.state.status;
          if (n === da) return null;
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
          var a = Z(o, [
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
          return me.createElement(
            Yl.Provider,
            { value: null },
            typeof i == "function"
              ? i(n, a)
              : me.cloneElement(me.Children.only(i), a),
          );
        }),
        t
      );
    })(me.Component);
  (jr.contextType = Yl), (jr.propTypes = {});
  function jo() {}
  (jr.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: jo,
    onEntering: jo,
    onEntered: jo,
    onExit: jo,
    onExiting: jo,
    onExited: jo,
  }),
    (jr.UNMOUNTED = da),
    (jr.EXITED = jn),
    (jr.ENTERING = Un),
    (jr.ENTERED = Fo),
    (jr.EXITING = $f);
  const Mb = jr;
  function b5(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function Mf(e, t) {
    var r = function (o) {
        return t && S.isValidElement(o) ? t(o) : o;
      },
      n = Object.create(null);
    return (
      e &&
        S.Children.map(e, function (o) {
          return o;
        }).forEach(function (o) {
          n[o.key] = r(o);
        }),
      n
    );
  }
  function y5(e, t) {
    (e = e || {}), (t = t || {});
    function r(d) {
      return d in t ? t[d] : e[d];
    }
    var n = Object.create(null),
      o = [];
    for (var i in e) i in t ? o.length && ((n[i] = o), (o = [])) : o.push(i);
    var a,
      s = {};
    for (var l in t) {
      if (n[l])
        for (a = 0; a < n[l].length; a++) {
          var u = n[l][a];
          s[n[l][a]] = r(u);
        }
      s[l] = r(l);
    }
    for (a = 0; a < o.length; a++) s[o[a]] = r(o[a]);
    return s;
  }
  function Dn(e, t, r) {
    return r[t] != null ? r[t] : e.props[t];
  }
  function v5(e, t) {
    return Mf(e.children, function (r) {
      return S.cloneElement(r, {
        onExited: t.bind(null, r),
        in: !0,
        appear: Dn(r, "appear", e),
        enter: Dn(r, "enter", e),
        exit: Dn(r, "exit", e),
      });
    });
  }
  function w5(e, t, r) {
    var n = Mf(e.children),
      o = y5(t, n);
    return (
      Object.keys(o).forEach(function (i) {
        var a = o[i];
        if (S.isValidElement(a)) {
          var s = i in t,
            l = i in n,
            u = t[i],
            d = S.isValidElement(u) && !u.props.in;
          l && (!s || d)
            ? (o[i] = S.cloneElement(a, {
                onExited: r.bind(null, a),
                in: !0,
                exit: Dn(a, "exit", e),
                enter: Dn(a, "enter", e),
              }))
            : !l && s && !d
            ? (o[i] = S.cloneElement(a, { in: !1 }))
            : l &&
              s &&
              S.isValidElement(u) &&
              (o[i] = S.cloneElement(a, {
                onExited: r.bind(null, a),
                in: u.props.in,
                exit: Dn(a, "exit", e),
                enter: Dn(a, "enter", e),
              }));
        }
      }),
      o
    );
  }
  var S5 =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    x5 = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    },
    Lf = (function (e) {
      Pb(t, e);
      function t(n, o) {
        var i;
        i = e.call(this, n, o) || this;
        var a = i.handleExited.bind(b5(i));
        return (
          (i.state = {
            contextValue: { isMounting: !0 },
            handleExited: a,
            firstRender: !0,
          }),
          i
        );
      }
      var r = t.prototype;
      return (
        (r.componentDidMount = function () {
          (this.mounted = !0),
            this.setState({ contextValue: { isMounting: !1 } });
        }),
        (r.componentWillUnmount = function () {
          this.mounted = !1;
        }),
        (t.getDerivedStateFromProps = function (n, o) {
          var i = o.children,
            a = o.handleExited,
            s = o.firstRender;
          return { children: s ? v5(n, a) : w5(n, i, a), firstRender: !1 };
        }),
        (r.handleExited = function (n, o) {
          var i = Mf(this.props.children);
          n.key in i ||
            (n.props.onExited && n.props.onExited(o),
            this.mounted &&
              this.setState(function (a) {
                var s = E({}, a.children);
                return delete s[n.key], { children: s };
              }));
        }),
        (r.render = function () {
          var n = this.props,
            o = n.component,
            i = n.childFactory,
            a = Z(n, ["component", "childFactory"]),
            s = this.state.contextValue,
            l = S5(this.state.children).map(i);
          return (
            delete a.appear,
            delete a.enter,
            delete a.exit,
            o === null
              ? me.createElement(Yl.Provider, { value: s }, l)
              : me.createElement(
                  Yl.Provider,
                  { value: s },
                  me.createElement(o, a, l),
                )
          );
        }),
        t
      );
    })(me.Component);
  (Lf.propTypes = {}), (Lf.defaultProps = x5);
  const k5 = Lf,
    Lb = (e) => e.scrollTop;
  function Jl(e, t) {
    var r, n;
    const { timeout: o, easing: i, style: a = {} } = e;
    return {
      duration:
        (r = a.transitionDuration) != null
          ? r
          : typeof o == "number"
          ? o
          : o[t.mode] || 0,
      easing:
        (n = a.transitionTimingFunction) != null
          ? n
          : typeof i == "object"
          ? i[t.mode]
          : i,
      delay: a.transitionDelay,
    };
  }
  function E5(e) {
    return ye("MuiPaper", e);
  }
  ge("MuiPaper", [
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
  const C5 = ["className", "component", "elevation", "square", "variant"],
    O5 = (e) => {
      const { square: t, elevation: r, variant: n, classes: o } = e,
        i = {
          root: [
            "root",
            n,
            !t && "rounded",
            n === "elevation" && `elevation${r}`,
          ],
        };
      return ve(i, E5, o);
    },
    N5 = ee("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          t[r.variant],
          !r.square && t.rounded,
          r.variant === "elevation" && t[`elevation${r.elevation}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var r;
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
                backgroundImage: `linear-gradient(${ft(
                  "#fff",
                  Cb(t.elevation),
                )}, ${ft("#fff", Cb(t.elevation))})`,
              },
            e.vars && {
              backgroundImage:
                (r = e.vars.overlays) == null ? void 0 : r[t.elevation],
            },
          ),
      );
    }),
    T5 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiPaper" }),
        {
          className: n,
          component: o = "div",
          elevation: i = 1,
          square: a = !1,
          variant: s = "elevation",
        } = r,
        l = Z(r, C5),
        u = E({}, r, { component: o, elevation: i, square: a, variant: s }),
        d = O5(u);
      return T(
        N5,
        E({ as: o, ownerState: u, className: ue(d.root, n), ref: t }, l),
      );
    }),
    Uo = T5;
  function R5(e) {
    const {
        className: t,
        classes: r,
        pulsate: n = !1,
        rippleX: o,
        rippleY: i,
        rippleSize: a,
        in: s,
        onExited: l,
        timeout: u,
      } = e,
      [d, f] = S.useState(!1),
      h = ue(t, r.ripple, r.rippleVisible, n && r.ripplePulsate),
      m = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
      g = ue(r.child, d && r.childLeaving, n && r.childPulsate);
    return (
      !s && !d && f(!0),
      S.useEffect(() => {
        if (!s && l != null) {
          const x = setTimeout(l, u);
          return () => {
            clearTimeout(x);
          };
        }
      }, [l, s, u]),
      T("span", {
        className: h,
        style: m,
        children: T("span", { className: g }),
      })
    );
  }
  const A5 = ge("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    Yt = A5,
    _5 = ["center", "classes", "className"];
  let Zl = (e) => e,
    Bb,
    zb,
    Fb,
    jb;
  const Bf = 550,
    I5 = 80,
    P5 = Mo(
      Bb ||
        (Bb = Zl`
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
    $5 = Mo(
      zb ||
        (zb = Zl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
    ),
    M5 = Mo(
      Fb ||
        (Fb = Zl`
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
    L5 = ee("span", { name: "MuiTouchRipple", slot: "Root" })({
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
    B5 = ee(R5, { name: "MuiTouchRipple", slot: "Ripple" })(
      jb ||
        (jb = Zl`
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
      Yt.rippleVisible,
      P5,
      Bf,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      Yt.ripplePulsate,
      ({ theme: e }) => e.transitions.duration.shorter,
      Yt.child,
      Yt.childLeaving,
      $5,
      Bf,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      Yt.childPulsate,
      M5,
      ({ theme: e }) => e.transitions.easing.easeInOut,
    ),
    z5 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiTouchRipple" }),
        { center: n = !1, classes: o = {}, className: i } = r,
        a = Z(r, _5),
        [s, l] = S.useState([]),
        u = S.useRef(0),
        d = S.useRef(null);
      S.useEffect(() => {
        d.current && (d.current(), (d.current = null));
      }, [s]);
      const f = S.useRef(!1),
        h = S.useRef(null),
        m = S.useRef(null),
        g = S.useRef(null);
      S.useEffect(
        () => () => {
          clearTimeout(h.current);
        },
        [],
      );
      const x = S.useCallback(
          (v) => {
            const {
              pulsate: k,
              rippleX: C,
              rippleY: A,
              rippleSize: N,
              cb: I,
            } = v;
            l((P) => [
              ...P,
              T(
                B5,
                {
                  classes: {
                    ripple: ue(o.ripple, Yt.ripple),
                    rippleVisible: ue(o.rippleVisible, Yt.rippleVisible),
                    ripplePulsate: ue(o.ripplePulsate, Yt.ripplePulsate),
                    child: ue(o.child, Yt.child),
                    childLeaving: ue(o.childLeaving, Yt.childLeaving),
                    childPulsate: ue(o.childPulsate, Yt.childPulsate),
                  },
                  timeout: Bf,
                  pulsate: k,
                  rippleX: C,
                  rippleY: A,
                  rippleSize: N,
                },
                u.current,
              ),
            ]),
              (u.current += 1),
              (d.current = I);
          },
          [o],
        ),
        R = S.useCallback(
          (v = {}, k = {}, C = () => {}) => {
            const {
              pulsate: A = !1,
              center: N = n || k.pulsate,
              fakeElement: I = !1,
            } = k;
            if ((v == null ? void 0 : v.type) === "mousedown" && f.current) {
              f.current = !1;
              return;
            }
            (v == null ? void 0 : v.type) === "touchstart" && (f.current = !0);
            const P = I ? null : g.current,
              z = P
                ? P.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let H, V, Q;
            if (
              N ||
              v === void 0 ||
              (v.clientX === 0 && v.clientY === 0) ||
              (!v.clientX && !v.touches)
            )
              (H = Math.round(z.width / 2)), (V = Math.round(z.height / 2));
            else {
              const { clientX: U, clientY: K } =
                v.touches && v.touches.length > 0 ? v.touches[0] : v;
              (H = Math.round(U - z.left)), (V = Math.round(K - z.top));
            }
            if (N)
              (Q = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3)),
                Q % 2 === 0 && (Q += 1);
            else {
              const U =
                  Math.max(Math.abs((P ? P.clientWidth : 0) - H), H) * 2 + 2,
                K = Math.max(Math.abs((P ? P.clientHeight : 0) - V), V) * 2 + 2;
              Q = Math.sqrt(U ** 2 + K ** 2);
            }
            v != null && v.touches
              ? m.current === null &&
                ((m.current = () => {
                  x({
                    pulsate: A,
                    rippleX: H,
                    rippleY: V,
                    rippleSize: Q,
                    cb: C,
                  });
                }),
                (h.current = setTimeout(() => {
                  m.current && (m.current(), (m.current = null));
                }, I5)))
              : x({ pulsate: A, rippleX: H, rippleY: V, rippleSize: Q, cb: C });
          },
          [n, x],
        ),
        b = S.useCallback(() => {
          R({}, { pulsate: !0 });
        }, [R]),
        y = S.useCallback((v, k) => {
          if (
            (clearTimeout(h.current),
            (v == null ? void 0 : v.type) === "touchend" && m.current)
          ) {
            m.current(),
              (m.current = null),
              (h.current = setTimeout(() => {
                y(v, k);
              }));
            return;
          }
          (m.current = null),
            l((C) => (C.length > 0 ? C.slice(1) : C)),
            (d.current = k);
        }, []);
      return (
        S.useImperativeHandle(t, () => ({ pulsate: b, start: R, stop: y }), [
          b,
          R,
          y,
        ]),
        T(
          L5,
          E({ className: ue(Yt.root, o.root, i), ref: g }, a, {
            children: T(k5, { component: null, exit: !0, children: s }),
          }),
        )
      );
    }),
    F5 = z5;
  function j5(e) {
    return ye("MuiButtonBase", e);
  }
  const U5 = ge("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    D5 = U5,
    W5 = [
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
    V5 = (e) => {
      const {
          disabled: t,
          focusVisible: r,
          focusVisibleClassName: n,
          classes: o,
        } = e,
        i = ve({ root: ["root", t && "disabled", r && "focusVisible"] }, j5, o);
      return r && n && (i.root += ` ${n}`), i;
    },
    H5 = ee("button", {
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
      [`&.${D5.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    }),
    q5 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiButtonBase" }),
        {
          action: n,
          centerRipple: o = !1,
          children: i,
          className: a,
          component: s = "button",
          disabled: l = !1,
          disableRipple: u = !1,
          disableTouchRipple: d = !1,
          focusRipple: f = !1,
          LinkComponent: h = "a",
          onBlur: m,
          onClick: g,
          onContextMenu: x,
          onDragLeave: R,
          onFocus: b,
          onFocusVisible: y,
          onKeyDown: v,
          onKeyUp: k,
          onMouseDown: C,
          onMouseLeave: A,
          onMouseUp: N,
          onTouchEnd: I,
          onTouchMove: P,
          onTouchStart: z,
          tabIndex: H = 0,
          TouchRippleProps: V,
          touchRippleRef: Q,
          type: U,
        } = r,
        K = Z(r, W5),
        Y = S.useRef(null),
        J = S.useRef(null),
        D = ct(J, Q),
        { isFocusVisibleRef: B, onFocus: L, onBlur: O, ref: M } = A0(),
        [j, W] = S.useState(!1);
      l && j && W(!1),
        S.useImperativeHandle(
          n,
          () => ({
            focusVisible: () => {
              W(!0), Y.current.focus();
            },
          }),
          [],
        );
      const [X, oe] = S.useState(!1);
      S.useEffect(() => {
        oe(!0);
      }, []);
      const le = X && !u && !l;
      S.useEffect(() => {
        j && f && !u && X && J.current.pulsate();
      }, [u, f, j, X]);
      function ie(q, Le, at = d) {
        return zn(
          (It) => (Le && Le(It), !at && J.current && J.current[q](It), !0),
        );
      }
      const ce = ie("start", C),
        ae = ie("stop", x),
        be = ie("stop", R),
        xe = ie("stop", N),
        He = ie("stop", (q) => {
          j && q.preventDefault(), A && A(q);
        }),
        Oe = ie("start", z),
        c = ie("stop", I),
        p = ie("stop", P),
        w = ie(
          "stop",
          (q) => {
            O(q), B.current === !1 && W(!1), m && m(q);
          },
          !1,
        ),
        _ = zn((q) => {
          Y.current || (Y.current = q.currentTarget),
            L(q),
            B.current === !0 && (W(!0), y && y(q)),
            b && b(q);
        }),
        $ = () => {
          const q = Y.current;
          return s && s !== "button" && !(q.tagName === "A" && q.href);
        },
        F = S.useRef(!1),
        te = zn((q) => {
          f &&
            !F.current &&
            j &&
            J.current &&
            q.key === " " &&
            ((F.current = !0),
            J.current.stop(q, () => {
              J.current.start(q);
            })),
            q.target === q.currentTarget &&
              $() &&
              q.key === " " &&
              q.preventDefault(),
            v && v(q),
            q.target === q.currentTarget &&
              $() &&
              q.key === "Enter" &&
              !l &&
              (q.preventDefault(), g && g(q));
        }),
        fe = zn((q) => {
          f &&
            q.key === " " &&
            J.current &&
            j &&
            !q.defaultPrevented &&
            ((F.current = !1),
            J.current.stop(q, () => {
              J.current.pulsate(q);
            })),
            k && k(q),
            g &&
              q.target === q.currentTarget &&
              $() &&
              q.key === " " &&
              !q.defaultPrevented &&
              g(q);
        });
      let he = s;
      he === "button" && (K.href || K.to) && (he = h);
      const pe = {};
      he === "button"
        ? ((pe.type = U === void 0 ? "button" : U), (pe.disabled = l))
        : (!K.href && !K.to && (pe.role = "button"),
          l && (pe["aria-disabled"] = l));
      const ke = ct(t, M, Y),
        $e = E({}, r, {
          centerRipple: o,
          component: s,
          disabled: l,
          disableRipple: u,
          disableTouchRipple: d,
          focusRipple: f,
          tabIndex: H,
          focusVisible: j,
        }),
        Ee = V5($e);
      return de(
        H5,
        E(
          {
            as: he,
            className: ue(Ee.root, a),
            ownerState: $e,
            onBlur: w,
            onClick: g,
            onContextMenu: ae,
            onFocus: _,
            onKeyDown: te,
            onKeyUp: fe,
            onMouseDown: ce,
            onMouseLeave: He,
            onMouseUp: xe,
            onDragLeave: be,
            onTouchEnd: c,
            onTouchMove: p,
            onTouchStart: Oe,
            ref: ke,
            tabIndex: l ? -1 : H,
            type: U,
          },
          pe,
          K,
          { children: [i, le ? T(F5, E({ ref: D, center: o }, V)) : null] },
        ),
      );
    }),
    fa = q5;
  function G5(e) {
    return ye("MuiAlert", e);
  }
  const K5 = ge("MuiAlert", [
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
    Ub = K5;
  function Q5(e) {
    return ye("MuiIconButton", e);
  }
  const X5 = ge("MuiIconButton", [
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
    Y5 = X5,
    J5 = [
      "edge",
      "children",
      "className",
      "color",
      "disabled",
      "disableFocusRipple",
      "size",
    ],
    Z5 = (e) => {
      const { classes: t, disabled: r, color: n, edge: o, size: i } = e,
        a = {
          root: [
            "root",
            r && "disabled",
            n !== "default" && `color${ne(n)}`,
            o && `edge${ne(o)}`,
            `size${ne(i)}`,
          ],
        };
      return ve(a, Q5, t);
    },
    e3 = ee(fa, {
      name: "MuiIconButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          r.color !== "default" && t[`color${ne(r.color)}`],
          r.edge && t[`edge${ne(r.edge)}`],
          t[`size${ne(r.size)}`],
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
                : ft(e.palette.action.active, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
          t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
          t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 },
        ),
      ({ theme: e, ownerState: t }) => {
        var r;
        const n = (r = (e.vars || e).palette) == null ? void 0 : r[t.color];
        return E(
          {},
          t.color === "inherit" && { color: "inherit" },
          t.color !== "inherit" &&
            t.color !== "default" &&
            E(
              { color: n == null ? void 0 : n.main },
              !t.disableRipple && {
                "&:hover": E(
                  {},
                  n && {
                    backgroundColor: e.vars
                      ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : ft(n.main, e.palette.action.hoverOpacity),
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
            [`&.${Y5.disabled}`]: {
              backgroundColor: "transparent",
              color: (e.vars || e).palette.action.disabled,
            },
          },
        );
      },
    ),
    t3 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiIconButton" }),
        {
          edge: n = !1,
          children: o,
          className: i,
          color: a = "default",
          disabled: s = !1,
          disableFocusRipple: l = !1,
          size: u = "medium",
        } = r,
        d = Z(r, J5),
        f = E({}, r, {
          edge: n,
          color: a,
          disabled: s,
          disableFocusRipple: l,
          size: u,
        }),
        h = Z5(f);
      return T(
        e3,
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
    eu = t3,
    r3 = Er(
      T("path", {
        d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
      }),
      "SuccessOutlined",
    ),
    n3 = Er(
      T("path", {
        d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
      }),
      "ReportProblemOutlined",
    ),
    o3 = Er(
      T("path", {
        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
      }),
      "ErrorOutline",
    ),
    i3 = Er(
      T("path", {
        d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
      }),
      "InfoOutlined",
    ),
    a3 = Er(
      T("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Close",
    ),
    s3 = [
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
    l3 = (e) => {
      const { variant: t, color: r, severity: n, classes: o } = e,
        i = {
          root: ["root", `${t}${ne(r || n)}`, `${t}`],
          icon: ["icon"],
          message: ["message"],
          action: ["action"],
        };
      return ve(i, G5, o);
    },
    u3 = ee(Uo, {
      name: "MuiAlert",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          t[r.variant],
          t[`${r.variant}${ne(r.color || r.severity)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      const r = e.palette.mode === "light" ? ql : Gl,
        n = e.palette.mode === "light" ? Gl : ql,
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
              : r(e.palette[o].light, 0.6),
            backgroundColor: e.vars
              ? e.vars.palette.Alert[`${o}StandardBg`]
              : n(e.palette[o].light, 0.9),
            [`& .${Ub.icon}`]: e.vars
              ? { color: e.vars.palette.Alert[`${o}IconColor`] }
              : { color: e.palette[o].main },
          },
        o &&
          t.variant === "outlined" && {
            color: e.vars
              ? e.vars.palette.Alert[`${o}Color`]
              : r(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${Ub.icon}`]: e.vars
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
    c3 = ee("div", {
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
    d3 = ee("div", {
      name: "MuiAlert",
      slot: "Message",
      overridesResolver: (e, t) => t.message,
    })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
    Db = ee("div", {
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
    Wb = {
      success: T(r3, { fontSize: "inherit" }),
      warning: T(n3, { fontSize: "inherit" }),
      error: T(o3, { fontSize: "inherit" }),
      info: T(i3, { fontSize: "inherit" }),
    },
    f3 = S.forwardRef(function (e, t) {
      var r, n, o, i, a, s;
      const l = Se({ props: e, name: "MuiAlert" }),
        {
          action: u,
          children: d,
          className: f,
          closeText: h = "Close",
          color: m,
          components: g = {},
          componentsProps: x = {},
          icon: R,
          iconMapping: b = Wb,
          onClose: y,
          role: v = "alert",
          severity: k = "success",
          slotProps: C = {},
          slots: A = {},
          variant: N = "standard",
        } = l,
        I = Z(l, s3),
        P = E({}, l, { color: m, severity: k, variant: N }),
        z = l3(P),
        H =
          (r = (n = A.closeButton) != null ? n : g.CloseButton) != null
            ? r
            : eu,
        V = (o = (i = A.closeIcon) != null ? i : g.CloseIcon) != null ? o : a3,
        Q = (a = C.closeButton) != null ? a : x.closeButton,
        U = (s = C.closeIcon) != null ? s : x.closeIcon;
      return de(
        u3,
        E(
          {
            role: v,
            elevation: 0,
            ownerState: P,
            className: ue(z.root, f),
            ref: t,
          },
          I,
          {
            children: [
              R !== !1
                ? T(c3, {
                    ownerState: P,
                    className: z.icon,
                    children: R || b[k] || Wb[k],
                  })
                : null,
              T(d3, { ownerState: P, className: z.message, children: d }),
              u != null
                ? T(Db, { ownerState: P, className: z.action, children: u })
                : null,
              u == null && y
                ? T(Db, {
                    ownerState: P,
                    className: z.action,
                    children: T(
                      H,
                      E(
                        {
                          size: "small",
                          "aria-label": h,
                          title: h,
                          color: "inherit",
                          onClick: y,
                        },
                        Q,
                        { children: T(V, E({ fontSize: "small" }, U)) },
                      ),
                    ),
                  })
                : null,
            ],
          },
        ),
      );
    }),
    p3 = f3;
  function h3(e) {
    return ye("MuiTypography", e);
  }
  ge("MuiTypography", [
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
  const m3 = [
      "align",
      "className",
      "component",
      "gutterBottom",
      "noWrap",
      "paragraph",
      "variant",
      "variantMapping",
    ],
    g3 = (e) => {
      const {
          align: t,
          gutterBottom: r,
          noWrap: n,
          paragraph: o,
          variant: i,
          classes: a,
        } = e,
        s = {
          root: [
            "root",
            i,
            e.align !== "inherit" && `align${ne(t)}`,
            r && "gutterBottom",
            n && "noWrap",
            o && "paragraph",
          ],
        };
      return ve(s, h3, a);
    },
    b3 = ee("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          r.variant && t[r.variant],
          r.align !== "inherit" && t[`align${ne(r.align)}`],
          r.noWrap && t.noWrap,
          r.gutterBottom && t.gutterBottom,
          r.paragraph && t.paragraph,
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
    Vb = {
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
    y3 = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main",
    },
    v3 = (e) => y3[e] || e,
    w3 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiTypography" }),
        n = v3(r.color),
        o = Tf(E({}, r, { color: n })),
        {
          align: i = "inherit",
          className: a,
          component: s,
          gutterBottom: l = !1,
          noWrap: u = !1,
          paragraph: d = !1,
          variant: f = "body1",
          variantMapping: h = Vb,
        } = o,
        m = Z(o, m3),
        g = E({}, o, {
          align: i,
          color: n,
          className: a,
          component: s,
          gutterBottom: l,
          noWrap: u,
          paragraph: d,
          variant: f,
          variantMapping: h,
        }),
        x = s || (d ? "p" : h[f] || Vb[f]) || "span",
        R = g3(g);
      return T(
        b3,
        E({ as: x, ref: t, ownerState: g, className: ue(R.root, a) }, m),
      );
    }),
    Jt = w3;
  function S3(e) {
    return ye("MuiAppBar", e);
  }
  ge("MuiAppBar", [
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
  const x3 = ["className", "color", "enableColorOnDark", "position"],
    k3 = (e) => {
      const { color: t, position: r, classes: n } = e,
        o = { root: ["root", `color${ne(t)}`, `position${ne(r)}`] };
      return ve(o, S3, n);
    },
    tu = (e, t) =>
      e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t,
    E3 = ee(Uo, {
      name: "MuiAppBar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          t[`position${ne(r.position)}`],
          t[`color${ne(r.color)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      const r =
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
              backgroundColor: r,
              color: e.palette.getContrastText(r),
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
                : tu(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette.AppBar.defaultBg,
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette.text.primary
                : tu(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette.text.primary,
                  ),
            },
            t.color &&
              !t.color.match(/^(default|inherit|transparent)$/) && {
                "--AppBar-background": t.enableColorOnDark
                  ? e.vars.palette[t.color].main
                  : tu(
                      e.vars.palette.AppBar.darkBg,
                      e.vars.palette[t.color].main,
                    ),
                "--AppBar-color": t.enableColorOnDark
                  ? e.vars.palette[t.color].contrastText
                  : tu(
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
    C3 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiAppBar" }),
        {
          className: n,
          color: o = "primary",
          enableColorOnDark: i = !1,
          position: a = "fixed",
        } = r,
        s = Z(r, x3),
        l = E({}, r, { color: o, position: a, enableColorOnDark: i }),
        u = k3(l);
      return T(
        E3,
        E(
          {
            square: !0,
            component: "header",
            ownerState: l,
            elevation: 4,
            className: ue(u.root, n, a === "fixed" && "mui-fixed"),
            ref: t,
          },
          s,
        ),
      );
    }),
    O3 = C3;
  function Do({ props: e, states: t, muiFormControl: r }) {
    return t.reduce(
      (n, o) => ((n[o] = e[o]), r && typeof e[o] > "u" && (n[o] = r[o]), n),
      {},
    );
  }
  const N3 = S.createContext(void 0),
    ru = N3;
  function pn() {
    return S.useContext(ru);
  }
  function T3(e) {
    return T(Nk, E({}, e, { defaultTheme: Ql }));
  }
  function Hb(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
  }
  function zf(e, t = !1) {
    return (
      e &&
      ((Hb(e.value) && e.value !== "") ||
        (t && Hb(e.defaultValue) && e.defaultValue !== ""))
    );
  }
  function R3(e) {
    return e.startAdornment;
  }
  function A3(e) {
    return ye("MuiInputBase", e);
  }
  const _3 = ge("MuiInputBase", [
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
    Wo = _3,
    I3 = [
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
    nu = (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.formControl && t.formControl,
        r.startAdornment && t.adornedStart,
        r.endAdornment && t.adornedEnd,
        r.error && t.error,
        r.size === "small" && t.sizeSmall,
        r.multiline && t.multiline,
        r.color && t[`color${ne(r.color)}`],
        r.fullWidth && t.fullWidth,
        r.hiddenLabel && t.hiddenLabel,
      ];
    },
    ou = (e, t) => {
      const { ownerState: r } = e;
      return [
        t.input,
        r.size === "small" && t.inputSizeSmall,
        r.multiline && t.inputMultiline,
        r.type === "search" && t.inputTypeSearch,
        r.startAdornment && t.inputAdornedStart,
        r.endAdornment && t.inputAdornedEnd,
        r.hiddenLabel && t.inputHiddenLabel,
      ];
    },
    P3 = (e) => {
      const {
          classes: t,
          color: r,
          disabled: n,
          error: o,
          endAdornment: i,
          focused: a,
          formControl: s,
          fullWidth: l,
          hiddenLabel: u,
          multiline: d,
          readOnly: f,
          size: h,
          startAdornment: m,
          type: g,
        } = e,
        x = {
          root: [
            "root",
            `color${ne(r)}`,
            n && "disabled",
            o && "error",
            l && "fullWidth",
            a && "focused",
            s && "formControl",
            h === "small" && "sizeSmall",
            d && "multiline",
            m && "adornedStart",
            i && "adornedEnd",
            u && "hiddenLabel",
            f && "readOnly",
          ],
          input: [
            "input",
            n && "disabled",
            g === "search" && "inputTypeSearch",
            d && "inputMultiline",
            h === "small" && "inputSizeSmall",
            u && "inputHiddenLabel",
            m && "inputAdornedStart",
            i && "inputAdornedEnd",
            f && "readOnly",
          ],
        };
      return ve(x, A3, t);
    },
    iu = ee("div", {
      name: "MuiInputBase",
      slot: "Root",
      overridesResolver: nu,
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
          [`&.${Wo.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          E({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" },
      ),
    ),
    au = ee("input", {
      name: "MuiInputBase",
      slot: "Input",
      overridesResolver: ou,
    })(({ theme: e, ownerState: t }) => {
      const r = e.palette.mode === "light",
        n = E(
          { color: "currentColor" },
          e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: r ? 0.42 : 0.5 },
          {
            transition: e.transitions.create("opacity", {
              duration: e.transitions.duration.shorter,
            }),
          },
        ),
        o = { opacity: "0 !important" },
        i = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: r ? 0.42 : 0.5 };
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
          "&::-webkit-input-placeholder": n,
          "&::-moz-placeholder": n,
          "&:-ms-input-placeholder": n,
          "&::-ms-input-placeholder": n,
          "&:focus": { outline: 0 },
          "&:invalid": { boxShadow: "none" },
          "&::-webkit-search-decoration": { WebkitAppearance: "none" },
          [`label[data-shrink=false] + .${Wo.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": i,
            "&:focus::-moz-placeholder": i,
            "&:focus:-ms-input-placeholder": i,
            "&:focus::-ms-input-placeholder": i,
          },
          [`&.${Wo.disabled}`]: {
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
    $3 = T(T3, {
      styles: {
        "@keyframes mui-auto-fill": { from: { display: "block" } },
        "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
      },
    }),
    M3 = S.forwardRef(function (e, t) {
      var r;
      const n = Se({ props: e, name: "MuiInputBase" }),
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
          endAdornment: m,
          fullWidth: g = !1,
          id: x,
          inputComponent: R = "input",
          inputProps: b = {},
          inputRef: y,
          maxRows: v,
          minRows: k,
          multiline: C = !1,
          name: A,
          onBlur: N,
          onChange: I,
          onClick: P,
          onFocus: z,
          onKeyDown: H,
          onKeyUp: V,
          placeholder: Q,
          readOnly: U,
          renderSuffix: K,
          rows: Y,
          slotProps: J = {},
          slots: D = {},
          startAdornment: B,
          type: L = "text",
          value: O,
        } = n,
        M = Z(n, I3),
        j = b.value != null ? b.value : O,
        { current: W } = S.useRef(j != null),
        X = S.useRef(),
        oe = S.useCallback((Ee) => {}, []),
        le = ct(X, y, b.ref, oe),
        [ie, ce] = S.useState(!1),
        ae = pn(),
        be = Do({
          props: n,
          muiFormControl: ae,
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
      (be.focused = ae ? ae.focused : ie),
        S.useEffect(() => {
          !ae && f && ie && (ce(!1), N && N());
        }, [ae, f, ie, N]);
      const xe = ae && ae.onFilled,
        He = ae && ae.onEmpty,
        Oe = S.useCallback(
          (Ee) => {
            zf(Ee) ? xe && xe() : He && He();
          },
          [xe, He],
        );
      Fr(() => {
        W && Oe({ value: j });
      }, [j, Oe, W]);
      const c = (Ee) => {
          if (be.disabled) {
            Ee.stopPropagation();
            return;
          }
          z && z(Ee),
            b.onFocus && b.onFocus(Ee),
            ae && ae.onFocus ? ae.onFocus(Ee) : ce(!0);
        },
        p = (Ee) => {
          N && N(Ee),
            b.onBlur && b.onBlur(Ee),
            ae && ae.onBlur ? ae.onBlur(Ee) : ce(!1);
        },
        w = (Ee, ...q) => {
          if (!W) {
            const Le = Ee.target || X.current;
            if (Le == null) throw new Error(dn(1));
            Oe({ value: Le.value });
          }
          b.onChange && b.onChange(Ee, ...q), I && I(Ee, ...q);
        };
      S.useEffect(() => {
        Oe(X.current);
      }, []);
      const _ = (Ee) => {
        X.current && Ee.currentTarget === Ee.target && X.current.focus(),
          P && P(Ee);
      };
      let $ = R,
        F = b;
      C &&
        $ === "input" &&
        (Y
          ? (F = E({ type: void 0, minRows: Y, maxRows: Y }, F))
          : (F = E({ type: void 0, maxRows: v, minRows: k }, F)),
        ($ = u5));
      const te = (Ee) => {
        Oe(
          Ee.animationName === "mui-auto-fill-cancel"
            ? X.current
            : { value: "x" },
        );
      };
      S.useEffect(() => {
        ae && ae.setAdornedStart(!!B);
      }, [ae, B]);
      const fe = E({}, n, {
          color: be.color || "primary",
          disabled: be.disabled,
          endAdornment: m,
          error: be.error,
          focused: be.focused,
          formControl: ae,
          fullWidth: g,
          hiddenLabel: be.hiddenLabel,
          multiline: C,
          size: be.size,
          startAdornment: B,
          type: L,
        }),
        he = P3(fe),
        pe = D.root || l.Root || iu,
        ke = J.root || u.root || {},
        $e = D.input || l.Input || au;
      return (
        (F = E({}, F, (r = J.input) != null ? r : u.input)),
        de(S.Fragment, {
          children: [
            !h && $3,
            de(
              pe,
              E(
                {},
                ke,
                !zo(pe) && { ownerState: E({}, fe, ke.ownerState) },
                { ref: t, onClick: _ },
                M,
                {
                  className: ue(he.root, ke.className, s),
                  children: [
                    B,
                    T(ru.Provider, {
                      value: null,
                      children: T(
                        $e,
                        E(
                          {
                            ownerState: fe,
                            "aria-invalid": be.error,
                            "aria-describedby": o,
                            autoComplete: i,
                            autoFocus: a,
                            defaultValue: d,
                            disabled: be.disabled,
                            id: x,
                            onAnimationStart: te,
                            name: A,
                            placeholder: Q,
                            readOnly: U,
                            required: be.required,
                            rows: Y,
                            value: j,
                            onKeyDown: H,
                            onKeyUp: V,
                            type: L,
                          },
                          F,
                          !zo($e) && {
                            as: $,
                            ownerState: E({}, fe, F.ownerState),
                          },
                          {
                            ref: le,
                            className: ue(he.input, F.className),
                            onBlur: p,
                            onChange: w,
                            onFocus: c,
                          },
                        ),
                      ),
                    }),
                    m,
                    K ? K(E({}, be, { startAdornment: B })) : null,
                  ],
                },
              ),
            ),
          ],
        })
      );
    }),
    Ff = M3;
  function L3(e) {
    return ye("MuiInput", e);
  }
  const B3 = E({}, Wo, ge("MuiInput", ["root", "underline", "input"])),
    pa = B3;
  function z3(e) {
    return ye("MuiOutlinedInput", e);
  }
  const F3 = E(
      {},
      Wo,
      ge("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
    ),
    hn = F3;
  function j3(e) {
    return ye("MuiFilledInput", e);
  }
  const U3 = E({}, Wo, ge("MuiFilledInput", ["root", "underline", "input"])),
    Wn = U3,
    D3 = Er(T("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    W3 = [
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
    V3 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    H3 = S.forwardRef(function (e, t) {
      const r = Bo(),
        n = {
          enter: r.transitions.duration.enteringScreen,
          exit: r.transitions.duration.leavingScreen,
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
          onExited: m,
          onExiting: g,
          style: x,
          timeout: R = n,
          TransitionComponent: b = Mb,
        } = e,
        y = Z(e, W3),
        v = S.useRef(null),
        k = ct(v, a.ref, t),
        C = (V) => (Q) => {
          if (V) {
            const U = v.current;
            Q === void 0 ? V(U) : V(U, Q);
          }
        },
        A = C(f),
        N = C((V, Q) => {
          Lb(V);
          const U = Jl({ style: x, timeout: R, easing: s }, { mode: "enter" });
          (V.style.webkitTransition = r.transitions.create("opacity", U)),
            (V.style.transition = r.transitions.create("opacity", U)),
            u && u(V, Q);
        }),
        I = C(d),
        P = C(g),
        z = C((V) => {
          const Q = Jl({ style: x, timeout: R, easing: s }, { mode: "exit" });
          (V.style.webkitTransition = r.transitions.create("opacity", Q)),
            (V.style.transition = r.transitions.create("opacity", Q)),
            h && h(V);
        }),
        H = C(m);
      return T(
        b,
        E(
          {
            appear: i,
            in: l,
            nodeRef: v,
            onEnter: N,
            onEntered: I,
            onEntering: A,
            onExit: z,
            onExited: H,
            onExiting: P,
            addEndListener: (V) => {
              o && o(v.current, V);
            },
            timeout: R,
          },
          y,
          {
            children: (V, Q) =>
              S.cloneElement(
                a,
                E(
                  {
                    style: E(
                      {
                        opacity: 0,
                        visibility: V === "exited" && !l ? "hidden" : void 0,
                      },
                      V3[V],
                      x,
                      a.props.style,
                    ),
                    ref: k,
                  },
                  Q,
                ),
              ),
          },
        ),
      );
    }),
    q3 = H3;
  function G3(e) {
    return ye("MuiBackdrop", e);
  }
  ge("MuiBackdrop", ["root", "invisible"]);
  const K3 = [
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
    Q3 = (e) => {
      const { classes: t, invisible: r } = e;
      return ve({ root: ["root", r && "invisible"] }, G3, t);
    },
    X3 = ee("div", {
      name: "MuiBackdrop",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, r.invisible && t.invisible];
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
    Y3 = S.forwardRef(function (e, t) {
      var r, n, o;
      const i = Se({ props: e, name: "MuiBackdrop" }),
        {
          children: a,
          component: s = "div",
          components: l = {},
          componentsProps: u = {},
          className: d,
          invisible: f = !1,
          open: h,
          slotProps: m = {},
          slots: g = {},
          transitionDuration: x,
          TransitionComponent: R = q3,
        } = i,
        b = Z(i, K3),
        y = E({}, i, { component: s, invisible: f }),
        v = Q3(y),
        k = (r = m.root) != null ? r : u.root;
      return T(
        R,
        E({ in: h, timeout: x }, b, {
          children: T(
            X3,
            E({ "aria-hidden": !0 }, k, {
              as: (n = (o = g.root) != null ? o : l.Root) != null ? n : s,
              className: ue(v.root, d, k == null ? void 0 : k.className),
              ownerState: E({}, y, k == null ? void 0 : k.ownerState),
              classes: v,
              ref: t,
              children: a,
            }),
          ),
        }),
      );
    }),
    J3 = Y3,
    Z3 = Kl(),
    eO = $E({
      defaultTheme: Z3,
      defaultClassName: "MuiBox-root",
      generateClassName: lf.generate,
    }),
    ha = eO;
  function tO(e) {
    return ye("MuiButton", e);
  }
  const rO = ge("MuiButton", [
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
    su = rO,
    nO = S.createContext({}),
    oO = nO,
    iO = [
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
    aO = (e) => {
      const {
          color: t,
          disableElevation: r,
          fullWidth: n,
          size: o,
          variant: i,
          classes: a,
        } = e,
        s = {
          root: [
            "root",
            i,
            `${i}${ne(t)}`,
            `size${ne(o)}`,
            `${i}Size${ne(o)}`,
            t === "inherit" && "colorInherit",
            r && "disableElevation",
            n && "fullWidth",
          ],
          label: ["label"],
          startIcon: ["startIcon", `iconSize${ne(o)}`],
          endIcon: ["endIcon", `iconSize${ne(o)}`],
        },
        l = ve(s, tO, a);
      return E({}, a, l);
    },
    qb = (e) =>
      E(
        {},
        e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
        e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
        e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
      ),
    sO = ee(fa, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          t[r.variant],
          t[`${r.variant}${ne(r.color)}`],
          t[`size${ne(r.size)}`],
          t[`${r.variant}Size${ne(r.size)}`],
          r.color === "inherit" && t.colorInherit,
          r.disableElevation && t.disableElevation,
          r.fullWidth && t.fullWidth,
        ];
      },
    })(
      ({ theme: e, ownerState: t }) => {
        var r, n;
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
                  : ft(e.palette.text.primary, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              t.variant === "text" &&
                t.color !== "inherit" && {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                        e.vars.palette.action.hoverOpacity
                      })`
                    : ft(
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
                    : ft(
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
            [`&.${su.focusVisible}`]: E(
              {},
              t.variant === "contained" && {
                boxShadow: (e.vars || e).shadows[6],
              },
            ),
            [`&.${su.disabled}`]: E(
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
                : `1px solid ${ft(e.palette[t.color].main, 0.5)}`,
            },
          t.variant === "contained" && {
            color: e.vars
              ? e.vars.palette.text.primary
              : (r = (n = e.palette).getContrastText) == null
              ? void 0
              : r.call(n, e.palette.grey[300]),
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
          [`&.${su.focusVisible}`]: { boxShadow: "none" },
          "&:active": { boxShadow: "none" },
          [`&.${su.disabled}`]: { boxShadow: "none" },
        },
    ),
    lO = ee("span", {
      name: "MuiButton",
      slot: "StartIcon",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.startIcon, t[`iconSize${ne(r.size)}`]];
      },
    })(({ ownerState: e }) =>
      E(
        { display: "inherit", marginRight: 8, marginLeft: -4 },
        e.size === "small" && { marginLeft: -2 },
        qb(e),
      ),
    ),
    uO = ee("span", {
      name: "MuiButton",
      slot: "EndIcon",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.endIcon, t[`iconSize${ne(r.size)}`]];
      },
    })(({ ownerState: e }) =>
      E(
        { display: "inherit", marginRight: -4, marginLeft: 8 },
        e.size === "small" && { marginRight: -2 },
        qb(e),
      ),
    ),
    cO = S.forwardRef(function (e, t) {
      const r = S.useContext(oO),
        n = sf(r, e),
        o = Se({ props: n, name: "MuiButton" }),
        {
          children: i,
          color: a = "primary",
          component: s = "button",
          className: l,
          disabled: u = !1,
          disableElevation: d = !1,
          disableFocusRipple: f = !1,
          endIcon: h,
          focusVisibleClassName: m,
          fullWidth: g = !1,
          size: x = "medium",
          startIcon: R,
          type: b,
          variant: y = "text",
        } = o,
        v = Z(o, iO),
        k = E({}, o, {
          color: a,
          component: s,
          disabled: u,
          disableElevation: d,
          disableFocusRipple: f,
          fullWidth: g,
          size: x,
          type: b,
          variant: y,
        }),
        C = aO(k),
        A = R && T(lO, { className: C.startIcon, ownerState: k, children: R }),
        N = h && T(uO, { className: C.endIcon, ownerState: k, children: h });
      return de(
        sO,
        E(
          {
            ownerState: k,
            className: ue(r.className, C.root, l),
            component: s,
            disabled: u,
            focusRipple: !f,
            focusVisibleClassName: ue(C.focusVisible, m),
            ref: t,
            type: b,
          },
          v,
          { classes: C, children: [A, i, N] },
        ),
      );
    }),
    Vo = cO;
  function dO(e) {
    return ye("MuiCard", e);
  }
  ge("MuiCard", ["root"]);
  const fO = ["className", "raised"],
    pO = (e) => {
      const { classes: t } = e;
      return ve({ root: ["root"] }, dO, t);
    },
    hO = ee(Uo, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })(() => ({ overflow: "hidden" })),
    mO = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiCard" }),
        { className: n, raised: o = !1 } = r,
        i = Z(r, fO),
        a = E({}, r, { raised: o }),
        s = pO(a);
      return T(
        hO,
        E(
          {
            className: ue(s.root, n),
            elevation: o ? 8 : void 0,
            ref: t,
            ownerState: a,
          },
          i,
        ),
      );
    }),
    gO = mO;
  function bO(e) {
    return ye("PrivateSwitchBase", e);
  }
  ge("PrivateSwitchBase", [
    "root",
    "checked",
    "disabled",
    "input",
    "edgeStart",
    "edgeEnd",
  ]);
  const yO = [
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
    vO = (e) => {
      const { classes: t, checked: r, disabled: n, edge: o } = e,
        i = {
          root: ["root", r && "checked", n && "disabled", o && `edge${ne(o)}`],
          input: ["input"],
        };
      return ve(i, bO, t);
    },
    wO = ee(fa)(({ ownerState: e }) =>
      E(
        { padding: 9, borderRadius: "50%" },
        e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
        e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 },
      ),
    ),
    SO = ee("input")({
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
    xO = S.forwardRef(function (e, t) {
      const {
          autoFocus: r,
          checked: n,
          checkedIcon: o,
          className: i,
          defaultChecked: a,
          disabled: s,
          disableFocusRipple: l = !1,
          edge: u = !1,
          icon: d,
          id: f,
          inputProps: h,
          inputRef: m,
          name: g,
          onBlur: x,
          onChange: R,
          onFocus: b,
          readOnly: y,
          required: v = !1,
          tabIndex: k,
          type: C,
          value: A,
        } = e,
        N = Z(e, yO),
        [I, P] = dl({
          controlled: n,
          default: !!a,
          name: "SwitchBase",
          state: "checked",
        }),
        z = pn(),
        H = (D) => {
          b && b(D), z && z.onFocus && z.onFocus(D);
        },
        V = (D) => {
          x && x(D), z && z.onBlur && z.onBlur(D);
        },
        Q = (D) => {
          if (D.nativeEvent.defaultPrevented) return;
          const B = D.target.checked;
          P(B), R && R(D, B);
        };
      let U = s;
      z && typeof U > "u" && (U = z.disabled);
      const K = C === "checkbox" || C === "radio",
        Y = E({}, e, {
          checked: I,
          disabled: U,
          disableFocusRipple: l,
          edge: u,
        }),
        J = vO(Y);
      return de(
        wO,
        E(
          {
            component: "span",
            className: ue(J.root, i),
            centerRipple: !0,
            focusRipple: !l,
            disabled: U,
            tabIndex: null,
            role: void 0,
            onFocus: H,
            onBlur: V,
            ownerState: Y,
            ref: t,
          },
          N,
          {
            children: [
              T(
                SO,
                E(
                  {
                    autoFocus: r,
                    checked: n,
                    defaultChecked: a,
                    className: J.input,
                    disabled: U,
                    id: K && f,
                    name: g,
                    onChange: Q,
                    readOnly: y,
                    ref: m,
                    required: v,
                    ownerState: Y,
                    tabIndex: k,
                    type: C,
                  },
                  C === "checkbox" && A === void 0 ? {} : { value: A },
                  h,
                ),
              ),
              I ? o : d,
            ],
          },
        ),
      );
    }),
    kO = xO,
    EO = Er(
      T("path", {
        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
      }),
      "CheckBoxOutlineBlank",
    ),
    CO = Er(
      T("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      }),
      "CheckBox",
    ),
    OO = Er(
      T("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
      }),
      "IndeterminateCheckBox",
    );
  function NO(e) {
    return ye("MuiCheckbox", e);
  }
  const TO = ge("MuiCheckbox", [
      "root",
      "checked",
      "disabled",
      "indeterminate",
      "colorPrimary",
      "colorSecondary",
    ]),
    jf = TO,
    RO = [
      "checkedIcon",
      "color",
      "icon",
      "indeterminate",
      "indeterminateIcon",
      "inputProps",
      "size",
      "className",
    ],
    AO = (e) => {
      const { classes: t, indeterminate: r, color: n } = e,
        o = { root: ["root", r && "indeterminate", `color${ne(n)}`] },
        i = ve(o, NO, t);
      return E({}, t, i);
    },
    _O = ee(kO, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiCheckbox",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          r.indeterminate && t.indeterminate,
          r.color !== "default" && t[`color${ne(r.color)}`],
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
              : ft(
                  t.color === "default"
                    ? e.palette.action.active
                    : e.palette[t.color].main,
                  e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${jf.checked}, &.${jf.indeterminate}`]: {
            color: (e.vars || e).palette[t.color].main,
          },
          [`&.${jf.disabled}`]: {
            color: (e.vars || e).palette.action.disabled,
          },
        },
      ),
    ),
    IO = T(CO, {}),
    PO = T(EO, {}),
    $O = T(OO, {}),
    MO = S.forwardRef(function (e, t) {
      var r, n;
      const o = Se({ props: e, name: "MuiCheckbox" }),
        {
          checkedIcon: i = IO,
          color: a = "primary",
          icon: s = PO,
          indeterminate: l = !1,
          indeterminateIcon: u = $O,
          inputProps: d,
          size: f = "medium",
          className: h,
        } = o,
        m = Z(o, RO),
        g = l ? u : s,
        x = l ? u : i,
        R = E({}, o, { color: a, indeterminate: l, size: f }),
        b = AO(R);
      return T(
        _O,
        E(
          {
            type: "checkbox",
            inputProps: E({ "data-indeterminate": l }, d),
            icon: S.cloneElement(g, {
              fontSize: (r = g.props.fontSize) != null ? r : f,
            }),
            checkedIcon: S.cloneElement(x, {
              fontSize: (n = x.props.fontSize) != null ? n : f,
            }),
            ownerState: R,
            ref: t,
            className: ue(b.root, h),
          },
          m,
          { classes: b },
        ),
      );
    }),
    LO = MO,
    BO = nC({
      createStyledComponent: ee("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, t) => {
          const { ownerState: r } = e;
          return [
            t.root,
            t[`maxWidth${ne(String(r.maxWidth))}`],
            r.fixed && t.fixed,
            r.disableGutters && t.disableGutters,
          ];
        },
      }),
      useThemeProps: (e) => Se({ props: e, name: "MuiContainer" }),
    }),
    Uf = BO,
    zO = [
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
    FO = (e) => e.classes,
    jO = ee("div", {
      name: "MuiModal",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, !r.open && r.exited && t.hidden];
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
    UO = ee(J3, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    DO = S.forwardRef(function (e, t) {
      var r, n, o, i, a, s;
      const l = Se({ name: "MuiModal", props: e }),
        {
          BackdropComponent: u = UO,
          BackdropProps: d,
          closeAfterTransition: f = !1,
          children: h,
          component: m,
          components: g = {},
          componentsProps: x = {},
          disableAutoFocus: R = !1,
          disableEnforceFocus: b = !1,
          disableEscapeKeyDown: y = !1,
          disablePortal: v = !1,
          disableRestoreFocus: k = !1,
          disableScrollLock: C = !1,
          hideBackdrop: A = !1,
          keepMounted: N = !1,
          slotProps: I,
          slots: P,
          theme: z,
        } = l,
        H = Z(l, zO),
        [V, Q] = S.useState(!0),
        U = {
          closeAfterTransition: f,
          disableAutoFocus: R,
          disableEnforceFocus: b,
          disableEscapeKeyDown: y,
          disablePortal: v,
          disableRestoreFocus: k,
          disableScrollLock: C,
          hideBackdrop: A,
          keepMounted: N,
        },
        K = E({}, l, U, { exited: V }),
        Y = FO(K),
        J =
          (r = (n = P == null ? void 0 : P.root) != null ? n : g.Root) != null
            ? r
            : jO,
        D =
          (o =
            (i = P == null ? void 0 : P.backdrop) != null ? i : g.Backdrop) !=
          null
            ? o
            : u,
        B = (a = I == null ? void 0 : I.root) != null ? a : x.root,
        L = (s = I == null ? void 0 : I.backdrop) != null ? s : x.backdrop;
      return T(
        i5,
        E(
          {
            slots: { root: J, backdrop: D },
            slotProps: {
              root: () => E({}, _f(B, K), !zo(J) && { as: m, theme: z }),
              backdrop: () => E({}, d, _f(L, K)),
            },
            onTransitionEnter: () => Q(!1),
            onTransitionExited: () => Q(!0),
            ref: t,
          },
          H,
          { classes: Y },
          U,
          { children: h },
        ),
      );
    }),
    WO = DO,
    VO = ge("MuiDivider", [
      "root",
      "absolute",
      "fullWidth",
      "inset",
      "middle",
      "flexItem",
      "light",
      "vertical",
      "withChildren",
      "withChildrenVertical",
      "textAlignRight",
      "textAlignLeft",
      "wrapper",
      "wrapperVertical",
    ]),
    Gb = VO,
    HO = [
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
    qO = (e) => {
      const { classes: t, disableUnderline: r } = e,
        n = ve({ root: ["root", !r && "underline"], input: ["input"] }, j3, t);
      return E({}, t, n);
    },
    GO = ee(iu, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiFilledInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [...nu(e, t), !r.disableUnderline && t.underline];
      },
    })(({ theme: e, ownerState: t }) => {
      var r;
      const n = e.palette.mode === "light",
        o = n ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        i = n ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        a = n ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        s = n ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
          [`&.${Wn.focused}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
          [`&.${Wn.disabled}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s,
          },
        },
        !t.disableUnderline && {
          "&:after": {
            borderBottom: `2px solid ${
              (r = (e.vars || e).palette[t.color || "primary"]) == null
                ? void 0
                : r.main
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
          [`&.${Wn.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Wn.error}`]: {
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
          [`&:hover:not(.${Wn.disabled}, .${Wn.error}):before`]: {
            borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
          },
          [`&.${Wn.disabled}:before`]: { borderBottomStyle: "dotted" },
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
    KO = ee(au, {
      name: "MuiFilledInput",
      slot: "Input",
      overridesResolver: ou,
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
    Kb = S.forwardRef(function (e, t) {
      var r, n, o, i;
      const a = Se({ props: e, name: "MuiFilledInput" }),
        {
          components: s = {},
          componentsProps: l,
          fullWidth: u = !1,
          inputComponent: d = "input",
          multiline: f = !1,
          slotProps: h,
          slots: m = {},
          type: g = "text",
        } = a,
        x = Z(a, HO),
        R = E({}, a, {
          fullWidth: u,
          inputComponent: d,
          multiline: f,
          type: g,
        }),
        b = qO(a),
        y = { root: { ownerState: R }, input: { ownerState: R } },
        v = h ?? l ? Kt(h ?? l, y) : y,
        k = (r = (n = m.root) != null ? n : s.Root) != null ? r : GO,
        C = (o = (i = m.input) != null ? i : s.Input) != null ? o : KO;
      return T(
        Ff,
        E(
          {
            slots: { root: k, input: C },
            componentsProps: v,
            fullWidth: u,
            inputComponent: d,
            multiline: f,
            ref: t,
            type: g,
          },
          x,
          { classes: b },
        ),
      );
    });
  Kb.muiName = "Input";
  const Qb = Kb;
  function QO(e) {
    return ye("MuiFormControl", e);
  }
  ge("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
  ]);
  const XO = [
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
    YO = (e) => {
      const { classes: t, margin: r, fullWidth: n } = e,
        o = {
          root: ["root", r !== "none" && `margin${ne(r)}`, n && "fullWidth"],
        };
      return ve(o, QO, t);
    },
    JO = ee("div", {
      name: "MuiFormControl",
      slot: "Root",
      overridesResolver: ({ ownerState: e }, t) =>
        E({}, t.root, t[`margin${ne(e.margin)}`], e.fullWidth && t.fullWidth),
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
    ZO = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiFormControl" }),
        {
          children: n,
          className: o,
          color: i = "primary",
          component: a = "div",
          disabled: s = !1,
          error: l = !1,
          focused: u,
          fullWidth: d = !1,
          hiddenLabel: f = !1,
          margin: h = "none",
          required: m = !1,
          size: g = "medium",
          variant: x = "outlined",
        } = r,
        R = Z(r, XO),
        b = E({}, r, {
          color: i,
          component: a,
          disabled: s,
          error: l,
          fullWidth: d,
          hiddenLabel: f,
          margin: h,
          required: m,
          size: g,
          variant: x,
        }),
        y = YO(b),
        [v, k] = S.useState(() => {
          let V = !1;
          return (
            n &&
              S.Children.forEach(n, (Q) => {
                if (!Zi(Q, ["Input", "Select"])) return;
                const U = Zi(Q, ["Select"]) ? Q.props.input : Q;
                U && R3(U.props) && (V = !0);
              }),
            V
          );
        }),
        [C, A] = S.useState(() => {
          let V = !1;
          return (
            n &&
              S.Children.forEach(n, (Q) => {
                Zi(Q, ["Input", "Select"]) && zf(Q.props, !0) && (V = !0);
              }),
            V
          );
        }),
        [N, I] = S.useState(!1);
      s && N && I(!1);
      const P = u !== void 0 && !s ? u : N;
      let z;
      const H = S.useMemo(
        () => ({
          adornedStart: v,
          setAdornedStart: k,
          color: i,
          disabled: s,
          error: l,
          filled: C,
          focused: P,
          fullWidth: d,
          hiddenLabel: f,
          size: g,
          onBlur: () => {
            I(!1);
          },
          onEmpty: () => {
            A(!1);
          },
          onFilled: () => {
            A(!0);
          },
          onFocus: () => {
            I(!0);
          },
          registerEffect: z,
          required: m,
          variant: x,
        }),
        [v, i, s, l, C, P, d, f, z, m, g, x],
      );
      return T(ru.Provider, {
        value: H,
        children: T(
          JO,
          E({ as: a, ownerState: b, className: ue(y.root, o), ref: t }, R, {
            children: n,
          }),
        ),
      });
    }),
    Xb = ZO;
  function eN(e) {
    return ye("MuiFormHelperText", e);
  }
  const tN = ge("MuiFormHelperText", [
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
    Yb = tN;
  var Jb;
  const rN = [
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
    nN = (e) => {
      const {
          classes: t,
          contained: r,
          size: n,
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
            n && `size${ne(n)}`,
            r && "contained",
            s && "focused",
            a && "filled",
            l && "required",
          ],
        };
      return ve(u, eN, t);
    },
    oN = ee("p", {
      name: "MuiFormHelperText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          r.size && t[`size${ne(r.size)}`],
          r.contained && t.contained,
          r.filled && t.filled,
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
          [`&.${Yb.disabled}`]: { color: (e.vars || e).palette.text.disabled },
          [`&.${Yb.error}`]: { color: (e.vars || e).palette.error.main },
        },
        t.size === "small" && { marginTop: 4 },
        t.contained && { marginLeft: 14, marginRight: 14 },
      ),
    ),
    iN = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiFormHelperText" }),
        { children: n, className: o, component: i = "p" } = r,
        a = Z(r, rN),
        s = pn(),
        l = Do({
          props: r,
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
        u = E({}, r, {
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
        d = nN(u);
      return T(
        oN,
        E({ as: i, ownerState: u, className: ue(d.root, o), ref: t }, a, {
          children:
            n === " "
              ? Jb ||
                (Jb = T("span", {
                  className: "notranslate",
                  children: "\u200B",
                }))
              : n,
        }),
      );
    }),
    aN = iN;
  function sN(e) {
    return ye("MuiFormLabel", e);
  }
  const lN = ge("MuiFormLabel", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "error",
      "filled",
      "required",
      "asterisk",
    ]),
    ma = lN,
    uN = [
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
    cN = (e) => {
      const {
          classes: t,
          color: r,
          focused: n,
          disabled: o,
          error: i,
          filled: a,
          required: s,
        } = e,
        l = {
          root: [
            "root",
            `color${ne(r)}`,
            o && "disabled",
            i && "error",
            a && "filled",
            n && "focused",
            s && "required",
          ],
          asterisk: ["asterisk", i && "error"],
        };
      return ve(l, sN, t);
    },
    dN = ee("label", {
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
        [`&.${ma.focused}`]: { color: (e.vars || e).palette[t.color].main },
        [`&.${ma.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${ma.error}`]: { color: (e.vars || e).palette.error.main },
      }),
    ),
    fN = ee("span", {
      name: "MuiFormLabel",
      slot: "Asterisk",
      overridesResolver: (e, t) => t.asterisk,
    })(({ theme: e }) => ({
      [`&.${ma.error}`]: { color: (e.vars || e).palette.error.main },
    })),
    pN = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiFormLabel" }),
        { children: n, className: o, component: i = "label" } = r,
        a = Z(r, uN),
        s = pn(),
        l = Do({
          props: r,
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
        u = E({}, r, {
          color: l.color || "primary",
          component: i,
          disabled: l.disabled,
          error: l.error,
          filled: l.filled,
          focused: l.focused,
          required: l.required,
        }),
        d = cN(u);
      return de(
        dN,
        E({ as: i, ownerState: u, className: ue(d.root, o), ref: t }, a, {
          children: [
            n,
            l.required &&
              de(fN, {
                ownerState: u,
                "aria-hidden": !0,
                className: d.asterisk,
                children: ["\u2009", "*"],
              }),
          ],
        }),
      );
    }),
    hN = pN,
    mN = S.createContext(),
    Zb = mN;
  function gN(e) {
    return ye("MuiGrid", e);
  }
  const bN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    yN = ["column-reverse", "column", "row-reverse", "row"],
    vN = ["nowrap", "wrap-reverse", "wrap"],
    ga = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    wN = ge("MuiGrid", [
      "root",
      "container",
      "item",
      "zeroMinWidth",
      ...bN.map((e) => `spacing-xs-${e}`),
      ...yN.map((e) => `direction-xs-${e}`),
      ...vN.map((e) => `wrap-xs-${e}`),
      ...ga.map((e) => `grid-xs-${e}`),
      ...ga.map((e) => `grid-sm-${e}`),
      ...ga.map((e) => `grid-md-${e}`),
      ...ga.map((e) => `grid-lg-${e}`),
      ...ga.map((e) => `grid-xl-${e}`),
    ]),
    ba = wN,
    SN = [
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
  function Ho(e) {
    const t = parseFloat(e);
    return `${t}${String(e).replace(String(t), "") || "px"}`;
  }
  function xN({ theme: e, ownerState: t }) {
    let r;
    return e.breakpoints.keys.reduce((n, o) => {
      let i = {};
      if ((t[o] && (r = t[o]), !r)) return n;
      if (r === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
      else if (r === "auto")
        i = {
          flexBasis: "auto",
          flexGrow: 0,
          flexShrink: 0,
          maxWidth: "none",
          width: "auto",
        };
      else {
        const a = Pl({ values: t.columns, breakpoints: e.breakpoints.values }),
          s = typeof a == "object" ? a[o] : a;
        if (s == null) return n;
        const l = `${Math.round((r / s) * 1e8) / 1e6}%`;
        let u = {};
        if (t.container && t.item && t.columnSpacing !== 0) {
          const d = e.spacing(t.columnSpacing);
          if (d !== "0px") {
            const f = `calc(${l} + ${Ho(d)})`;
            u = { flexBasis: f, maxWidth: f };
          }
        }
        i = E({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
      }
      return (
        e.breakpoints.values[o] === 0
          ? Object.assign(n, i)
          : (n[e.breakpoints.up(o)] = i),
        n
      );
    }, {});
  }
  function kN({ theme: e, ownerState: t }) {
    const r = Pl({ values: t.direction, breakpoints: e.breakpoints.values });
    return Xt({ theme: e }, r, (n) => {
      const o = { flexDirection: n };
      return (
        n.indexOf("column") === 0 &&
          (o[`& > .${ba.item}`] = { maxWidth: "none" }),
        o
      );
    });
  }
  function ey({ breakpoints: e, values: t }) {
    let r = "";
    Object.keys(t).forEach((o) => {
      r === "" && t[o] !== 0 && (r = o);
    });
    const n = Object.keys(e).sort((o, i) => e[o] - e[i]);
    return n.slice(0, n.indexOf(r));
  }
  function EN({ theme: e, ownerState: t }) {
    const { container: r, rowSpacing: n } = t;
    let o = {};
    if (r && n !== 0) {
      const i = Pl({ values: n, breakpoints: e.breakpoints.values });
      let a;
      typeof i == "object" &&
        (a = ey({ breakpoints: e.breakpoints.values, values: i })),
        (o = Xt({ theme: e }, i, (s, l) => {
          var u;
          const d = e.spacing(s);
          return d !== "0px"
            ? {
                marginTop: `-${Ho(d)}`,
                [`& > .${ba.item}`]: { paddingTop: Ho(d) },
              }
            : (u = a) != null && u.includes(l)
            ? {}
            : { marginTop: 0, [`& > .${ba.item}`]: { paddingTop: 0 } };
        }));
    }
    return o;
  }
  function CN({ theme: e, ownerState: t }) {
    const { container: r, columnSpacing: n } = t;
    let o = {};
    if (r && n !== 0) {
      const i = Pl({ values: n, breakpoints: e.breakpoints.values });
      let a;
      typeof i == "object" &&
        (a = ey({ breakpoints: e.breakpoints.values, values: i })),
        (o = Xt({ theme: e }, i, (s, l) => {
          var u;
          const d = e.spacing(s);
          return d !== "0px"
            ? {
                width: `calc(100% + ${Ho(d)})`,
                marginLeft: `-${Ho(d)}`,
                [`& > .${ba.item}`]: { paddingLeft: Ho(d) },
              }
            : (u = a) != null && u.includes(l)
            ? {}
            : {
                width: "100%",
                marginLeft: 0,
                [`& > .${ba.item}`]: { paddingLeft: 0 },
              };
        }));
    }
    return o;
  }
  function ON(e, t, r = {}) {
    if (!e || e <= 0) return [];
    if (
      (typeof e == "string" && !Number.isNaN(Number(e))) ||
      typeof e == "number"
    )
      return [r[`spacing-xs-${String(e)}`]];
    const n = [];
    return (
      t.forEach((o) => {
        const i = e[o];
        Number(i) > 0 && n.push(r[`spacing-${o}-${String(i)}`]);
      }),
      n
    );
  }
  const NN = ee("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        {
          container: n,
          direction: o,
          item: i,
          spacing: a,
          wrap: s,
          zeroMinWidth: l,
          breakpoints: u,
        } = r;
      let d = [];
      n && (d = ON(a, u, t));
      const f = [];
      return (
        u.forEach((h) => {
          const m = r[h];
          m && f.push(t[`grid-${h}-${String(m)}`]);
        }),
        [
          t.root,
          n && t.container,
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
    kN,
    EN,
    CN,
    xN,
  );
  function TN(e, t) {
    if (!e || e <= 0) return [];
    if (
      (typeof e == "string" && !Number.isNaN(Number(e))) ||
      typeof e == "number"
    )
      return [`spacing-xs-${String(e)}`];
    const r = [];
    return (
      t.forEach((n) => {
        const o = e[n];
        if (Number(o) > 0) {
          const i = `spacing-${n}-${String(o)}`;
          r.push(i);
        }
      }),
      r
    );
  }
  const RN = (e) => {
      const {
        classes: t,
        container: r,
        direction: n,
        item: o,
        spacing: i,
        wrap: a,
        zeroMinWidth: s,
        breakpoints: l,
      } = e;
      let u = [];
      r && (u = TN(i, l));
      const d = [];
      l.forEach((h) => {
        const m = e[h];
        m && d.push(`grid-${h}-${String(m)}`);
      });
      const f = {
        root: [
          "root",
          r && "container",
          o && "item",
          s && "zeroMinWidth",
          ...u,
          n !== "row" && `direction-xs-${String(n)}`,
          a !== "wrap" && `wrap-xs-${String(a)}`,
          ...d,
        ],
      };
      return ve(f, gN, t);
    },
    AN = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiGrid" }),
        { breakpoints: n } = Bo(),
        o = Tf(r),
        {
          className: i,
          columns: a,
          columnSpacing: s,
          component: l = "div",
          container: u = !1,
          direction: d = "row",
          item: f = !1,
          rowSpacing: h,
          spacing: m = 0,
          wrap: g = "wrap",
          zeroMinWidth: x = !1,
        } = o,
        R = Z(o, SN),
        b = h || m,
        y = s || m,
        v = S.useContext(Zb),
        k = u ? a || 12 : v,
        C = {},
        A = E({}, R);
      n.keys.forEach((P) => {
        R[P] != null && ((C[P] = R[P]), delete A[P]);
      });
      const N = E(
          {},
          o,
          {
            columns: k,
            container: u,
            direction: d,
            item: f,
            rowSpacing: b,
            columnSpacing: y,
            wrap: g,
            zeroMinWidth: x,
            spacing: m,
          },
          C,
          { breakpoints: n.keys },
        ),
        I = RN(N);
      return T(Zb.Provider, {
        value: k,
        children: T(
          NN,
          E({ ownerState: N, className: ue(I.root, i), as: l, ref: t }, A),
        ),
      });
    }),
    Df = AN,
    _N = [
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
  function Wf(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  const IN = {
      entering: { opacity: 1, transform: Wf(1) },
      entered: { opacity: 1, transform: "none" },
    },
    Vf =
      typeof navigator < "u" &&
      /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
      /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    ty = S.forwardRef(function (e, t) {
      const {
          addEndListener: r,
          appear: n = !0,
          children: o,
          easing: i,
          in: a,
          onEnter: s,
          onEntered: l,
          onEntering: u,
          onExit: d,
          onExited: f,
          onExiting: h,
          style: m,
          timeout: g = "auto",
          TransitionComponent: x = Mb,
        } = e,
        R = Z(e, _N),
        b = S.useRef(),
        y = S.useRef(),
        v = Bo(),
        k = S.useRef(null),
        C = ct(k, o.ref, t),
        A = (U) => (K) => {
          if (U) {
            const Y = k.current;
            K === void 0 ? U(Y) : U(Y, K);
          }
        },
        N = A(u),
        I = A((U, K) => {
          Lb(U);
          const {
            duration: Y,
            delay: J,
            easing: D,
          } = Jl({ style: m, timeout: g, easing: i }, { mode: "enter" });
          let B;
          g === "auto"
            ? ((B = v.transitions.getAutoHeightDuration(U.clientHeight)),
              (y.current = B))
            : (B = Y),
            (U.style.transition = [
              v.transitions.create("opacity", { duration: B, delay: J }),
              v.transitions.create("transform", {
                duration: Vf ? B : B * 0.666,
                delay: J,
                easing: D,
              }),
            ].join(",")),
            s && s(U, K);
        }),
        P = A(l),
        z = A(h),
        H = A((U) => {
          const {
            duration: K,
            delay: Y,
            easing: J,
          } = Jl({ style: m, timeout: g, easing: i }, { mode: "exit" });
          let D;
          g === "auto"
            ? ((D = v.transitions.getAutoHeightDuration(U.clientHeight)),
              (y.current = D))
            : (D = K),
            (U.style.transition = [
              v.transitions.create("opacity", { duration: D, delay: Y }),
              v.transitions.create("transform", {
                duration: Vf ? D : D * 0.666,
                delay: Vf ? Y : Y || D * 0.333,
                easing: J,
              }),
            ].join(",")),
            (U.style.opacity = 0),
            (U.style.transform = Wf(0.75)),
            d && d(U);
        }),
        V = A(f),
        Q = (U) => {
          g === "auto" && (b.current = setTimeout(U, y.current || 0)),
            r && r(k.current, U);
        };
      return (
        S.useEffect(
          () => () => {
            clearTimeout(b.current);
          },
          [],
        ),
        T(
          x,
          E(
            {
              appear: n,
              in: a,
              nodeRef: k,
              onEnter: I,
              onEntered: P,
              onEntering: N,
              onExit: H,
              onExited: V,
              onExiting: z,
              addEndListener: Q,
              timeout: g === "auto" ? null : g,
            },
            R,
            {
              children: (U, K) =>
                S.cloneElement(
                  o,
                  E(
                    {
                      style: E(
                        {
                          opacity: 0,
                          transform: Wf(0.75),
                          visibility: U === "exited" && !a ? "hidden" : void 0,
                        },
                        IN[U],
                        m,
                        o.props.style,
                      ),
                      ref: C,
                    },
                    K,
                  ),
                ),
            },
          ),
        )
      );
    });
  ty.muiSupportAuto = !0;
  const PN = ty,
    $N = [
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
    MN = (e) => {
      const { classes: t, disableUnderline: r } = e,
        n = ve({ root: ["root", !r && "underline"], input: ["input"] }, L3, t);
      return E({}, t, n);
    },
    LN = ee(iu, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [...nu(e, t), !r.disableUnderline && t.underline];
      },
    })(({ theme: e, ownerState: t }) => {
      let r =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
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
            [`&.${pa.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
            [`&.${pa.error}`]: {
              "&:before, &:after": {
                borderBottomColor: (e.vars || e).palette.error.main,
              },
            },
            "&:before": {
              borderBottom: `1px solid ${r}`,
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
            [`&:hover:not(.${pa.disabled}, .${pa.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": { borderBottom: `1px solid ${r}` },
            },
            [`&.${pa.disabled}:before`]: { borderBottomStyle: "dotted" },
          },
        )
      );
    }),
    BN = ee(au, { name: "MuiInput", slot: "Input", overridesResolver: ou })({}),
    ry = S.forwardRef(function (e, t) {
      var r, n, o, i;
      const a = Se({ props: e, name: "MuiInput" }),
        {
          disableUnderline: s,
          components: l = {},
          componentsProps: u,
          fullWidth: d = !1,
          inputComponent: f = "input",
          multiline: h = !1,
          slotProps: m,
          slots: g = {},
          type: x = "text",
        } = a,
        R = Z(a, $N),
        b = MN(a),
        y = { root: { ownerState: { disableUnderline: s } } },
        v = m ?? u ? Kt(m ?? u, y) : y,
        k = (r = (n = g.root) != null ? n : l.Root) != null ? r : LN,
        C = (o = (i = g.input) != null ? i : l.Input) != null ? o : BN;
      return T(
        Ff,
        E(
          {
            slots: { root: k, input: C },
            slotProps: v,
            fullWidth: d,
            inputComponent: f,
            multiline: h,
            ref: t,
            type: x,
          },
          R,
          { classes: b },
        ),
      );
    });
  ry.muiName = "Input";
  const ny = ry;
  function zN(e) {
    return ye("MuiInputAdornment", e);
  }
  const FN = ge("MuiInputAdornment", [
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
    oy = FN;
  var iy;
  const jN = [
      "children",
      "className",
      "component",
      "disablePointerEvents",
      "disableTypography",
      "position",
      "variant",
    ],
    UN = (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`position${ne(r.position)}`],
        r.disablePointerEvents === !0 && t.disablePointerEvents,
        t[r.variant],
      ];
    },
    DN = (e) => {
      const {
          classes: t,
          disablePointerEvents: r,
          hiddenLabel: n,
          position: o,
          size: i,
          variant: a,
        } = e,
        s = {
          root: [
            "root",
            r && "disablePointerEvents",
            o && `position${ne(o)}`,
            a,
            n && "hiddenLabel",
            i && `size${ne(i)}`,
          ],
        };
      return ve(s, zN, t);
    },
    WN = ee("div", {
      name: "MuiInputAdornment",
      slot: "Root",
      overridesResolver: UN,
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
          [`&.${oy.positionStart}&:not(.${oy.hiddenLabel})`]: { marginTop: 16 },
        },
        t.position === "start" && { marginRight: 8 },
        t.position === "end" && { marginLeft: 8 },
        t.disablePointerEvents === !0 && { pointerEvents: "none" },
      ),
    ),
    VN = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiInputAdornment" }),
        {
          children: n,
          className: o,
          component: i = "div",
          disablePointerEvents: a = !1,
          disableTypography: s = !1,
          position: l,
          variant: u,
        } = r,
        d = Z(r, jN),
        f = pn() || {};
      let h = u;
      u && f.variant, f && !h && (h = f.variant);
      const m = E({}, r, {
          hiddenLabel: f.hiddenLabel,
          size: f.size,
          disablePointerEvents: a,
          position: l,
          variant: h,
        }),
        g = DN(m);
      return T(ru.Provider, {
        value: null,
        children: T(
          WN,
          E({ as: i, ownerState: m, className: ue(g.root, o), ref: t }, d, {
            children:
              typeof n == "string" && !s
                ? T(Jt, { color: "text.secondary", children: n })
                : de(S.Fragment, {
                    children: [
                      l === "start"
                        ? iy ||
                          (iy = T("span", {
                            className: "notranslate",
                            children: "\u200B",
                          }))
                        : null,
                      n,
                    ],
                  }),
          }),
        ),
      });
    }),
    HN = VN;
  function qN(e) {
    return ye("MuiInputLabel", e);
  }
  ge("MuiInputLabel", [
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
  const GN = ["disableAnimation", "margin", "shrink", "variant", "className"],
    KN = (e) => {
      const {
          classes: t,
          formControl: r,
          size: n,
          shrink: o,
          disableAnimation: i,
          variant: a,
          required: s,
        } = e,
        l = ve(
          {
            root: [
              "root",
              r && "formControl",
              !i && "animated",
              o && "shrink",
              n === "small" && "sizeSmall",
              a,
            ],
            asterisk: [s && "asterisk"],
          },
          qN,
          t,
        );
      return E({}, t, l);
    },
    QN = ee(hN, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiInputLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          { [`& .${ma.asterisk}`]: t.asterisk },
          t.root,
          r.formControl && t.formControl,
          r.size === "small" && t.sizeSmall,
          r.shrink && t.shrink,
          !r.disableAnimation && t.animated,
          t[r.variant],
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
    XN = S.forwardRef(function (e, t) {
      const r = Se({ name: "MuiInputLabel", props: e }),
        { disableAnimation: n = !1, shrink: o, className: i } = r,
        a = Z(r, GN),
        s = pn();
      let l = o;
      typeof l > "u" && s && (l = s.filled || s.focused || s.adornedStart);
      const u = Do({
          props: r,
          muiFormControl: s,
          states: ["size", "variant", "required"],
        }),
        d = E({}, r, {
          disableAnimation: n,
          formControl: s,
          shrink: l,
          size: u.size,
          variant: u.variant,
          required: u.required,
        }),
        f = KN(d);
      return T(
        QN,
        E(
          { "data-shrink": l, ownerState: d, ref: t, className: ue(f.root, i) },
          a,
          { classes: f },
        ),
      );
    }),
    ay = XN;
  function YN(e) {
    return ye("MuiLinearProgress", e);
  }
  ge("MuiLinearProgress", [
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
  const JN = ["className", "color", "value", "valueBuffer", "variant"];
  let qo = (e) => e,
    sy,
    ly,
    uy,
    cy,
    dy,
    fy;
  const Hf = 4,
    ZN = Mo(
      sy ||
        (sy = qo`
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
    eT = Mo(
      ly ||
        (ly = qo`
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
    tT = Mo(
      uy ||
        (uy = qo`
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
    rT = (e) => {
      const { classes: t, variant: r, color: n } = e,
        o = {
          root: ["root", `color${ne(n)}`, r],
          dashed: ["dashed", `dashedColor${ne(n)}`],
          bar1: [
            "bar",
            `barColor${ne(n)}`,
            (r === "indeterminate" || r === "query") && "bar1Indeterminate",
            r === "determinate" && "bar1Determinate",
            r === "buffer" && "bar1Buffer",
          ],
          bar2: [
            "bar",
            r !== "buffer" && `barColor${ne(n)}`,
            r === "buffer" && `color${ne(n)}`,
            (r === "indeterminate" || r === "query") && "bar2Indeterminate",
            r === "buffer" && "bar2Buffer",
          ],
        };
      return ve(o, YN, t);
    },
    qf = (e, t) =>
      t === "inherit"
        ? "currentColor"
        : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === "light"
        ? Gl(e.palette[t].main, 0.62)
        : ql(e.palette[t].main, 0.5),
    nT = ee("span", {
      name: "MuiLinearProgress",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, t[`color${ne(r.color)}`], t[r.variant]];
      },
    })(({ ownerState: e, theme: t }) =>
      E(
        {
          position: "relative",
          overflow: "hidden",
          display: "block",
          height: 4,
          zIndex: 0,
          "@media print": { colorAdjust: "exact" },
          backgroundColor: qf(t, e.color),
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
    oT = ee("span", {
      name: "MuiLinearProgress",
      slot: "Dashed",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.dashed, t[`dashedColor${ne(r.color)}`]];
      },
    })(
      ({ ownerState: e, theme: t }) => {
        const r = qf(t, e.color);
        return E(
          { position: "absolute", marginTop: 0, height: "100%", width: "100%" },
          e.color === "inherit" && { opacity: 0.3 },
          {
            backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,
            backgroundSize: "10px 10px",
            backgroundPosition: "0 -23px",
          },
        );
      },
      Il(
        cy ||
          (cy = qo`
    animation: ${0} 3s infinite linear;
  `),
        tT,
      ),
    ),
    iT = ee("span", {
      name: "MuiLinearProgress",
      slot: "Bar1",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.bar,
          t[`barColor${ne(r.color)}`],
          (r.variant === "indeterminate" || r.variant === "query") &&
            t.bar1Indeterminate,
          r.variant === "determinate" && t.bar1Determinate,
          r.variant === "buffer" && t.bar1Buffer,
        ];
      },
    })(
      ({ ownerState: e, theme: t }) =>
        E(
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
            transition: `transform .${Hf}s linear`,
          },
          e.variant === "buffer" && {
            zIndex: 1,
            transition: `transform .${Hf}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        Il(
          dy ||
            (dy = qo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
          ZN,
        ),
    ),
    aT = ee("span", {
      name: "MuiLinearProgress",
      slot: "Bar2",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.bar,
          t[`barColor${ne(r.color)}`],
          (r.variant === "indeterminate" || r.variant === "query") &&
            t.bar2Indeterminate,
          r.variant === "buffer" && t.bar2Buffer,
        ];
      },
    })(
      ({ ownerState: e, theme: t }) =>
        E(
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
            backgroundColor: qf(t, e.color),
            transition: `transform .${Hf}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        Il(
          fy ||
            (fy = qo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
          eT,
        ),
    ),
    sT = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiLinearProgress" }),
        {
          className: n,
          color: o = "primary",
          value: i,
          valueBuffer: a,
          variant: s = "indeterminate",
        } = r,
        l = Z(r, JN),
        u = E({}, r, { color: o, variant: s }),
        d = rT(u),
        f = Bo(),
        h = {},
        m = { bar1: {}, bar2: {} };
      if ((s === "determinate" || s === "buffer") && i !== void 0) {
        (h["aria-valuenow"] = Math.round(i)),
          (h["aria-valuemin"] = 0),
          (h["aria-valuemax"] = 100);
        let g = i - 100;
        f.direction === "rtl" && (g = -g),
          (m.bar1.transform = `translateX(${g}%)`);
      }
      if (s === "buffer" && a !== void 0) {
        let g = (a || 0) - 100;
        f.direction === "rtl" && (g = -g),
          (m.bar2.transform = `translateX(${g}%)`);
      }
      return de(
        nT,
        E(
          { className: ue(d.root, n), ownerState: u, role: "progressbar" },
          h,
          { ref: t },
          l,
          {
            children: [
              s === "buffer"
                ? T(oT, { className: d.dashed, ownerState: u })
                : null,
              T(iT, { className: d.bar1, ownerState: u, style: m.bar1 }),
              s === "determinate"
                ? null
                : T(aT, { className: d.bar2, ownerState: u, style: m.bar2 }),
            ],
          },
        ),
      );
    }),
    lT = sT,
    uT = S.createContext({}),
    Ur = uT;
  function cT(e) {
    return ye("MuiList", e);
  }
  ge("MuiList", ["root", "padding", "dense", "subheader"]);
  const dT = [
      "children",
      "className",
      "component",
      "dense",
      "disablePadding",
      "subheader",
    ],
    fT = (e) => {
      const { classes: t, disablePadding: r, dense: n, subheader: o } = e;
      return ve(
        { root: ["root", !r && "padding", n && "dense", o && "subheader"] },
        cT,
        t,
      );
    },
    pT = ee("ul", {
      name: "MuiList",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          !r.disablePadding && t.padding,
          r.dense && t.dense,
          r.subheader && t.subheader,
        ];
      },
    })(({ ownerState: e }) =>
      E(
        { listStyle: "none", margin: 0, padding: 0, position: "relative" },
        !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
        e.subheader && { paddingTop: 0 },
      ),
    ),
    hT = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiList" }),
        {
          children: n,
          className: o,
          component: i = "ul",
          dense: a = !1,
          disablePadding: s = !1,
          subheader: l,
        } = r,
        u = Z(r, dT),
        d = S.useMemo(() => ({ dense: a }), [a]),
        f = E({}, r, { component: i, dense: a, disablePadding: s }),
        h = fT(f);
      return T(Ur.Provider, {
        value: d,
        children: de(
          pT,
          E({ as: i, className: ue(h.root, o), ref: t, ownerState: f }, u, {
            children: [l, n],
          }),
        ),
      });
    }),
    py = hT;
  function mT(e) {
    return ye("MuiListItem", e);
  }
  const gT = ge("MuiListItem", [
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
    Go = gT,
    bT = ge("MuiListItemButton", [
      "root",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    yT = bT;
  function vT(e) {
    return ye("MuiListItemSecondaryAction", e);
  }
  ge("MuiListItemSecondaryAction", ["root", "disableGutters"]);
  const wT = ["className"],
    ST = (e) => {
      const { disableGutters: t, classes: r } = e;
      return ve({ root: ["root", t && "disableGutters"] }, vT, r);
    },
    xT = ee("div", {
      name: "MuiListItemSecondaryAction",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, r.disableGutters && t.disableGutters];
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
    hy = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiListItemSecondaryAction" }),
        { className: n } = r,
        o = Z(r, wT),
        i = S.useContext(Ur),
        a = E({}, r, { disableGutters: i.disableGutters }),
        s = ST(a);
      return T(xT, E({ className: ue(s.root, n), ownerState: a, ref: t }, o));
    });
  hy.muiName = "ListItemSecondaryAction";
  const Gf = hy,
    kT = ["className"],
    ET = [
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
    CT = (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.dense && t.dense,
        r.alignItems === "flex-start" && t.alignItemsFlexStart,
        r.divider && t.divider,
        !r.disableGutters && t.gutters,
        !r.disablePadding && t.padding,
        r.button && t.button,
        r.hasSecondaryAction && t.secondaryAction,
      ];
    },
    OT = (e) => {
      const {
        alignItems: t,
        button: r,
        classes: n,
        dense: o,
        disabled: i,
        disableGutters: a,
        disablePadding: s,
        divider: l,
        hasSecondaryAction: u,
        selected: d,
      } = e;
      return ve(
        {
          root: [
            "root",
            o && "dense",
            !a && "gutters",
            !s && "padding",
            l && "divider",
            i && "disabled",
            r && "button",
            t === "flex-start" && "alignItemsFlexStart",
            u && "secondaryAction",
            d && "selected",
          ],
          container: ["container"],
        },
        mT,
        n,
      );
    },
    NT = ee("div", {
      name: "MuiListItem",
      slot: "Root",
      overridesResolver: CT,
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
        !!t.secondaryAction && { [`& > .${yT.root}`]: { paddingRight: 48 } },
        {
          [`&.${Go.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${Go.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ft(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${Go.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : ft(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity,
                  ),
            },
          },
          [`&.${Go.disabled}`]: {
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
          [`&.${Go.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : ft(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : ft(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 },
      ),
    ),
    TT = ee("li", {
      name: "MuiListItem",
      slot: "Container",
      overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    RT = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiListItem" }),
        {
          alignItems: n = "center",
          autoFocus: o = !1,
          button: i = !1,
          children: a,
          className: s,
          component: l,
          components: u = {},
          componentsProps: d = {},
          ContainerComponent: f = "li",
          ContainerProps: { className: h } = {},
          dense: m = !1,
          disabled: g = !1,
          disableGutters: x = !1,
          disablePadding: R = !1,
          divider: b = !1,
          focusVisibleClassName: y,
          secondaryAction: v,
          selected: k = !1,
          slotProps: C = {},
          slots: A = {},
        } = r,
        N = Z(r.ContainerProps, kT),
        I = Z(r, ET),
        P = S.useContext(Ur),
        z = S.useMemo(
          () => ({
            dense: m || P.dense || !1,
            alignItems: n,
            disableGutters: x,
          }),
          [n, P.dense, m, x],
        ),
        H = S.useRef(null);
      Fr(() => {
        o && H.current && H.current.focus();
      }, [o]);
      const V = S.Children.toArray(a),
        Q = V.length && Zi(V[V.length - 1], ["ListItemSecondaryAction"]),
        U = E({}, r, {
          alignItems: n,
          autoFocus: o,
          button: i,
          dense: z.dense,
          disabled: g,
          disableGutters: x,
          disablePadding: R,
          divider: b,
          hasSecondaryAction: Q,
          selected: k,
        }),
        K = OT(U),
        Y = ct(H, t),
        J = A.root || u.Root || NT,
        D = C.root || d.root || {},
        B = E({ className: ue(K.root, D.className, s), disabled: g }, I);
      let L = l || "li";
      return (
        i &&
          ((B.component = l || "div"),
          (B.focusVisibleClassName = ue(Go.focusVisible, y)),
          (L = fa)),
        Q
          ? ((L = !B.component && !l ? "div" : L),
            f === "li" &&
              (L === "li"
                ? (L = "div")
                : B.component === "li" && (B.component = "div")),
            T(Ur.Provider, {
              value: z,
              children: de(
                TT,
                E(
                  {
                    as: f,
                    className: ue(K.container, h),
                    ref: Y,
                    ownerState: U,
                  },
                  N,
                  {
                    children: [
                      T(
                        J,
                        E(
                          {},
                          D,
                          !zo(J) && {
                            as: L,
                            ownerState: E({}, U, D.ownerState),
                          },
                          B,
                          { children: V },
                        ),
                      ),
                      V.pop(),
                    ],
                  },
                ),
              ),
            }))
          : T(Ur.Provider, {
              value: z,
              children: de(
                J,
                E(
                  {},
                  D,
                  { as: L, ref: Y },
                  !zo(J) && { ownerState: E({}, U, D.ownerState) },
                  B,
                  { children: [V, v && T(Gf, { children: v })] },
                ),
              ),
            })
      );
    }),
    my = RT;
  function AT(e) {
    return ye("MuiListItemIcon", e);
  }
  const _T = ge("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
    gy = _T,
    IT = ["className"],
    PT = (e) => {
      const { alignItems: t, classes: r } = e;
      return ve(
        { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
        AT,
        r,
      );
    },
    $T = ee("div", {
      name: "MuiListItemIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
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
    MT = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiListItemIcon" }),
        { className: n } = r,
        o = Z(r, IT),
        i = S.useContext(Ur),
        a = E({}, r, { alignItems: i.alignItems }),
        s = PT(a);
      return T($T, E({ className: ue(s.root, n), ownerState: a, ref: t }, o));
    }),
    LT = MT;
  function BT(e) {
    return ye("MuiListItemText", e);
  }
  const zT = ge("MuiListItemText", [
      "root",
      "multiline",
      "dense",
      "inset",
      "primary",
      "secondary",
    ]),
    lu = zT,
    FT = [
      "children",
      "className",
      "disableTypography",
      "inset",
      "primary",
      "primaryTypographyProps",
      "secondary",
      "secondaryTypographyProps",
    ],
    jT = (e) => {
      const { classes: t, inset: r, primary: n, secondary: o, dense: i } = e;
      return ve(
        {
          root: ["root", r && "inset", i && "dense", n && o && "multiline"],
          primary: ["primary"],
          secondary: ["secondary"],
        },
        BT,
        t,
      );
    },
    UT = ee("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          { [`& .${lu.primary}`]: t.primary },
          { [`& .${lu.secondary}`]: t.secondary },
          t.root,
          r.inset && t.inset,
          r.primary && r.secondary && t.multiline,
          r.dense && t.dense,
        ];
      },
    })(({ ownerState: e }) =>
      E(
        { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
        e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
        e.inset && { paddingLeft: 56 },
      ),
    ),
    DT = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiListItemText" }),
        {
          children: n,
          className: o,
          disableTypography: i = !1,
          inset: a = !1,
          primary: s,
          primaryTypographyProps: l,
          secondary: u,
          secondaryTypographyProps: d,
        } = r,
        f = Z(r, FT),
        { dense: h } = S.useContext(Ur);
      let m = s ?? n,
        g = u;
      const x = E({}, r, {
          disableTypography: i,
          inset: a,
          primary: !!m,
          secondary: !!g,
          dense: h,
        }),
        R = jT(x);
      return (
        m != null &&
          m.type !== Jt &&
          !i &&
          (m = T(
            Jt,
            E(
              {
                variant: h ? "body2" : "body1",
                className: R.primary,
                component: l != null && l.variant ? void 0 : "span",
                display: "block",
              },
              l,
              { children: m },
            ),
          )),
        g != null &&
          g.type !== Jt &&
          !i &&
          (g = T(
            Jt,
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
          UT,
          E({ className: ue(R.root, o), ownerState: x, ref: t }, f, {
            children: [m, g],
          }),
        )
      );
    }),
    uu = DT,
    WT = [
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
  function Kf(e, t, r) {
    return e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : r
      ? null
      : e.firstChild;
  }
  function by(e, t, r) {
    return e === t
      ? r
        ? e.firstChild
        : e.lastChild
      : t && t.previousElementSibling
      ? t.previousElementSibling
      : r
      ? null
      : e.lastChild;
  }
  function yy(e, t) {
    if (t === void 0) return !0;
    let r = e.innerText;
    return (
      r === void 0 && (r = e.textContent),
      (r = r.trim().toLowerCase()),
      r.length === 0
        ? !1
        : t.repeating
        ? r[0] === t.keys[0]
        : r.indexOf(t.keys.join("")) === 0
    );
  }
  function ya(e, t, r, n, o, i) {
    let a = !1,
      s = o(e, t, t ? r : !1);
    for (; s; ) {
      if (s === e.firstChild) {
        if (a) return !1;
        a = !0;
      }
      const l = n
        ? !1
        : s.disabled || s.getAttribute("aria-disabled") === "true";
      if (!s.hasAttribute("tabindex") || !yy(s, i) || l) s = o(e, s, r);
      else return s.focus(), !0;
    }
    return !1;
  }
  const VT = S.forwardRef(function (e, t) {
      const {
          actions: r,
          autoFocus: n = !1,
          autoFocusItem: o = !1,
          children: i,
          className: a,
          disabledItemsFocusable: s = !1,
          disableListWrap: l = !1,
          onKeyDown: u,
          variant: d = "selectedMenu",
        } = e,
        f = Z(e, WT),
        h = S.useRef(null),
        m = S.useRef({
          keys: [],
          repeating: !0,
          previousKeyMatched: !0,
          lastTime: null,
        });
      Fr(() => {
        n && h.current.focus();
      }, [n]),
        S.useImperativeHandle(
          r,
          () => ({
            adjustStyleForScrollbar: (y, v) => {
              const k = !h.current.style.width;
              if (y.clientHeight < h.current.clientHeight && k) {
                const C = `${_0(Rt(y))}px`;
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
      const g = (y) => {
          const v = h.current,
            k = y.key,
            C = Rt(v).activeElement;
          if (k === "ArrowDown") y.preventDefault(), ya(v, C, l, s, Kf);
          else if (k === "ArrowUp") y.preventDefault(), ya(v, C, l, s, by);
          else if (k === "Home") y.preventDefault(), ya(v, null, l, s, Kf);
          else if (k === "End") y.preventDefault(), ya(v, null, l, s, by);
          else if (k.length === 1) {
            const A = m.current,
              N = k.toLowerCase(),
              I = performance.now();
            A.keys.length > 0 &&
              (I - A.lastTime > 500
                ? ((A.keys = []),
                  (A.repeating = !0),
                  (A.previousKeyMatched = !0))
                : A.repeating && N !== A.keys[0] && (A.repeating = !1)),
              (A.lastTime = I),
              A.keys.push(N);
            const P = C && !A.repeating && yy(C, A);
            A.previousKeyMatched && (P || ya(v, C, !1, s, Kf, A))
              ? y.preventDefault()
              : (A.previousKeyMatched = !1);
          }
          u && u(y);
        },
        x = ct(h, t);
      let R = -1;
      S.Children.forEach(i, (y, v) => {
        S.isValidElement(y) &&
          (y.props.disabled ||
            (((d === "selectedMenu" && y.props.selected) || R === -1) &&
              (R = v)));
      });
      const b = S.Children.map(i, (y, v) => {
        if (v === R) {
          const k = {};
          return (
            o && (k.autoFocus = !0),
            y.props.tabIndex === void 0 &&
              d === "selectedMenu" &&
              (k.tabIndex = 0),
            S.cloneElement(y, k)
          );
        }
        return y;
      });
      return T(
        py,
        E(
          {
            role: "menu",
            ref: x,
            className: a,
            onKeyDown: g,
            tabIndex: n ? 0 : -1,
          },
          f,
          { children: b },
        ),
      );
    }),
    HT = VT;
  function qT(e) {
    return ye("MuiPopover", e);
  }
  ge("MuiPopover", ["root", "paper"]);
  const GT = ["onEntering"],
    KT = [
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
  function vy(e, t) {
    let r = 0;
    return (
      typeof t == "number"
        ? (r = t)
        : t === "center"
        ? (r = e.height / 2)
        : t === "bottom" && (r = e.height),
      r
    );
  }
  function wy(e, t) {
    let r = 0;
    return (
      typeof t == "number"
        ? (r = t)
        : t === "center"
        ? (r = e.width / 2)
        : t === "right" && (r = e.width),
      r
    );
  }
  function Sy(e) {
    return [e.horizontal, e.vertical]
      .map((t) => (typeof t == "number" ? `${t}px` : t))
      .join(" ");
  }
  function Qf(e) {
    return typeof e == "function" ? e() : e;
  }
  const QT = (e) => {
      const { classes: t } = e;
      return ve({ root: ["root"], paper: ["paper"] }, qT, t);
    },
    XT = ee(WO, {
      name: "MuiPopover",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    YT = ee(Uo, {
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
    JT = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiPopover" }),
        {
          action: n,
          anchorEl: o,
          anchorOrigin: i = { vertical: "top", horizontal: "left" },
          anchorPosition: a,
          anchorReference: s = "anchorEl",
          children: l,
          className: u,
          container: d,
          elevation: f = 8,
          marginThreshold: h = 16,
          open: m,
          PaperProps: g = {},
          transformOrigin: x = { vertical: "top", horizontal: "left" },
          TransitionComponent: R = PN,
          transitionDuration: b = "auto",
          TransitionProps: { onEntering: y } = {},
        } = r,
        v = Z(r.TransitionProps, GT),
        k = Z(r, KT),
        C = S.useRef(),
        A = ct(C, g.ref),
        N = E({}, r, {
          anchorOrigin: i,
          anchorReference: s,
          elevation: f,
          marginThreshold: h,
          PaperProps: g,
          transformOrigin: x,
          TransitionComponent: R,
          transitionDuration: b,
          TransitionProps: v,
        }),
        I = QT(N),
        P = S.useCallback(() => {
          if (s === "anchorPosition") return a;
          const B = Qf(o),
            L = (
              B && B.nodeType === 1 ? B : Rt(C.current).body
            ).getBoundingClientRect();
          return {
            top: L.top + vy(L, i.vertical),
            left: L.left + wy(L, i.horizontal),
          };
        }, [o, i.horizontal, i.vertical, a, s]),
        z = S.useCallback(
          (B) => ({
            vertical: vy(B, x.vertical),
            horizontal: wy(B, x.horizontal),
          }),
          [x.horizontal, x.vertical],
        ),
        H = S.useCallback(
          (B) => {
            const L = { width: B.offsetWidth, height: B.offsetHeight },
              O = z(L);
            if (s === "none")
              return { top: null, left: null, transformOrigin: Sy(O) };
            const M = P();
            let j = M.top - O.vertical,
              W = M.left - O.horizontal;
            const X = j + L.height,
              oe = W + L.width,
              le = fn(Qf(o)),
              ie = le.innerHeight - h,
              ce = le.innerWidth - h;
            if (j < h) {
              const ae = j - h;
              (j -= ae), (O.vertical += ae);
            } else if (X > ie) {
              const ae = X - ie;
              (j -= ae), (O.vertical += ae);
            }
            if (W < h) {
              const ae = W - h;
              (W -= ae), (O.horizontal += ae);
            } else if (oe > ce) {
              const ae = oe - ce;
              (W -= ae), (O.horizontal += ae);
            }
            return {
              top: `${Math.round(j)}px`,
              left: `${Math.round(W)}px`,
              transformOrigin: Sy(O),
            };
          },
          [o, s, P, z, h],
        ),
        [V, Q] = S.useState(m),
        U = S.useCallback(() => {
          const B = C.current;
          if (!B) return;
          const L = H(B);
          L.top !== null && (B.style.top = L.top),
            L.left !== null && (B.style.left = L.left),
            (B.style.transformOrigin = L.transformOrigin),
            Q(!0);
        }, [H]),
        K = (B, L) => {
          y && y(B, L), U();
        },
        Y = () => {
          Q(!1);
        };
      S.useEffect(() => {
        m && U();
      }),
        S.useImperativeHandle(
          n,
          () =>
            m
              ? {
                  updatePosition: () => {
                    U();
                  },
                }
              : null,
          [m, U],
        ),
        S.useEffect(() => {
          if (!m) return;
          const B = nf(() => {
              U();
            }),
            L = fn(o);
          return (
            L.addEventListener("resize", B),
            () => {
              B.clear(), L.removeEventListener("resize", B);
            }
          );
        }, [o, m, U]);
      let J = b;
      b === "auto" && !R.muiSupportAuto && (J = void 0);
      const D = d || (o ? Rt(Qf(o)).body : void 0);
      return T(
        XT,
        E(
          {
            BackdropProps: { invisible: !0 },
            className: ue(I.root, u),
            container: D,
            open: m,
            ref: t,
            ownerState: N,
          },
          k,
          {
            children: T(
              R,
              E(
                { appear: !0, in: m, onEntering: K, onExited: Y, timeout: J },
                v,
                {
                  children: T(
                    YT,
                    E(
                      { elevation: f },
                      g,
                      { ref: A, className: ue(I.paper, g.className) },
                      V ? void 0 : { style: E({}, g.style, { opacity: 0 }) },
                      { ownerState: N, children: l },
                    ),
                  ),
                },
              ),
            ),
          },
        ),
      );
    }),
    ZT = JT;
  function e4(e) {
    return ye("MuiMenu", e);
  }
  ge("MuiMenu", ["root", "paper", "list"]);
  const t4 = ["onEntering"],
    r4 = [
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
    n4 = { vertical: "top", horizontal: "right" },
    o4 = { vertical: "top", horizontal: "left" },
    i4 = (e) => {
      const { classes: t } = e;
      return ve({ root: ["root"], paper: ["paper"], list: ["list"] }, e4, t);
    },
    a4 = ee(ZT, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiMenu",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    s4 = ee(Uo, {
      name: "MuiMenu",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    l4 = ee(HT, {
      name: "MuiMenu",
      slot: "List",
      overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    u4 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiMenu" }),
        {
          autoFocus: n = !0,
          children: o,
          disableAutoFocusItem: i = !1,
          MenuListProps: a = {},
          onClose: s,
          open: l,
          PaperProps: u = {},
          PopoverClasses: d,
          transitionDuration: f = "auto",
          TransitionProps: { onEntering: h } = {},
          variant: m = "selectedMenu",
        } = r,
        g = Z(r.TransitionProps, t4),
        x = Z(r, r4),
        R = Bo(),
        b = R.direction === "rtl",
        y = E({}, r, {
          autoFocus: n,
          disableAutoFocusItem: i,
          MenuListProps: a,
          onEntering: h,
          PaperProps: u,
          transitionDuration: f,
          TransitionProps: g,
          variant: m,
        }),
        v = i4(y),
        k = n && !i && l,
        C = S.useRef(null),
        A = (P, z) => {
          C.current && C.current.adjustStyleForScrollbar(P, R), h && h(P, z);
        },
        N = (P) => {
          P.key === "Tab" && (P.preventDefault(), s && s(P, "tabKeyDown"));
        };
      let I = -1;
      return (
        S.Children.map(o, (P, z) => {
          S.isValidElement(P) &&
            (P.props.disabled ||
              (((m === "selectedMenu" && P.props.selected) || I === -1) &&
                (I = z)));
        }),
        T(
          a4,
          E(
            {
              onClose: s,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: b ? "right" : "left",
              },
              transformOrigin: b ? n4 : o4,
              PaperProps: E({ component: s4 }, u, {
                classes: E({}, u.classes, { root: v.paper }),
              }),
              className: v.root,
              open: l,
              ref: t,
              transitionDuration: f,
              TransitionProps: E({ onEntering: A }, g),
              ownerState: y,
            },
            x,
            {
              classes: d,
              children: T(
                l4,
                E(
                  {
                    onKeyDown: N,
                    actions: C,
                    autoFocus: n && (I === -1 || i),
                    autoFocusItem: k,
                    variant: m,
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
    c4 = u4;
  function d4(e) {
    return ye("MuiMenuItem", e);
  }
  const f4 = ge("MuiMenuItem", [
      "root",
      "focusVisible",
      "dense",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    va = f4,
    p4 = [
      "autoFocus",
      "component",
      "dense",
      "divider",
      "disableGutters",
      "focusVisibleClassName",
      "role",
      "tabIndex",
      "className",
    ],
    h4 = (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.dense && t.dense,
        r.divider && t.divider,
        !r.disableGutters && t.gutters,
      ];
    },
    m4 = (e) => {
      const {
          disabled: t,
          dense: r,
          divider: n,
          disableGutters: o,
          selected: i,
          classes: a,
        } = e,
        s = ve(
          {
            root: [
              "root",
              r && "dense",
              t && "disabled",
              !o && "gutters",
              n && "divider",
              i && "selected",
            ],
          },
          d4,
          a,
        );
      return E({}, a, s);
    },
    g4 = ee(fa, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiMenuItem",
      slot: "Root",
      overridesResolver: h4,
    })(({ theme: e, ownerState: t }) =>
      E(
        {},
        e.typography.body1,
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          minHeight: 48,
          paddingTop: 6,
          paddingBottom: 6,
          boxSizing: "border-box",
          whiteSpace: "nowrap",
        },
        !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        {
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${va.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ft(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${va.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : ft(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity,
                  ),
            },
          },
          [`&.${va.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : ft(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : ft(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
          [`&.${va.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${va.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
          [`& + .${Gb.root}`]: {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
          [`& + .${Gb.inset}`]: { marginLeft: 52 },
          [`& .${lu.root}`]: { marginTop: 0, marginBottom: 0 },
          [`& .${lu.inset}`]: { paddingLeft: 36 },
          [`& .${gy.root}`]: { minWidth: 36 },
        },
        !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
        t.dense &&
          E(
            { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
            e.typography.body2,
            { [`& .${gy.root} svg`]: { fontSize: "1.25rem" } },
          ),
      ),
    ),
    b4 = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiMenuItem" }),
        {
          autoFocus: n = !1,
          component: o = "li",
          dense: i = !1,
          divider: a = !1,
          disableGutters: s = !1,
          focusVisibleClassName: l,
          role: u = "menuitem",
          tabIndex: d,
          className: f,
        } = r,
        h = Z(r, p4),
        m = S.useContext(Ur),
        g = S.useMemo(
          () => ({ dense: i || m.dense || !1, disableGutters: s }),
          [m.dense, i, s],
        ),
        x = S.useRef(null);
      Fr(() => {
        n && x.current && x.current.focus();
      }, [n]);
      const R = E({}, r, { dense: g.dense, divider: a, disableGutters: s }),
        b = m4(r),
        y = ct(x, t);
      let v;
      return (
        r.disabled || (v = d !== void 0 ? d : -1),
        T(Ur.Provider, {
          value: g,
          children: T(
            g4,
            E(
              {
                ref: y,
                role: u,
                tabIndex: v,
                component: o,
                focusVisibleClassName: ue(b.focusVisible, l),
                className: ue(b.root, f),
              },
              h,
              { ownerState: R, classes: b },
            ),
          ),
        })
      );
    }),
    y4 = b4;
  function v4(e) {
    return ye("MuiNativeSelect", e);
  }
  const w4 = ge("MuiNativeSelect", [
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
    Xf = w4,
    S4 = ["className", "disabled", "IconComponent", "inputRef", "variant"],
    x4 = (e) => {
      const { classes: t, variant: r, disabled: n, multiple: o, open: i } = e,
        a = {
          select: ["select", r, n && "disabled", o && "multiple"],
          icon: ["icon", `icon${ne(r)}`, i && "iconOpen", n && "disabled"],
        };
      return ve(a, v4, t);
    },
    xy = ({ ownerState: e, theme: t }) =>
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
          [`&.${Xf.disabled}`]: { cursor: "default" },
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
    k4 = ee("select", {
      name: "MuiNativeSelect",
      slot: "Select",
      shouldForwardProp: dr,
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.select, t[r.variant], { [`&.${Xf.multiple}`]: t.multiple }];
      },
    })(xy),
    ky = ({ ownerState: e, theme: t }) =>
      E(
        {
          position: "absolute",
          right: 0,
          top: "calc(50% - .5em)",
          pointerEvents: "none",
          color: (t.vars || t).palette.action.active,
          [`&.${Xf.disabled}`]: {
            color: (t.vars || t).palette.action.disabled,
          },
        },
        e.open && { transform: "rotate(180deg)" },
        e.variant === "filled" && { right: 7 },
        e.variant === "outlined" && { right: 7 },
      ),
    E4 = ee("svg", {
      name: "MuiNativeSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.icon,
          r.variant && t[`icon${ne(r.variant)}`],
          r.open && t.iconOpen,
        ];
      },
    })(ky),
    C4 = S.forwardRef(function (e, t) {
      const {
          className: r,
          disabled: n,
          IconComponent: o,
          inputRef: i,
          variant: a = "standard",
        } = e,
        s = Z(e, S4),
        l = E({}, e, { disabled: n, variant: a }),
        u = x4(l);
      return de(S.Fragment, {
        children: [
          T(
            k4,
            E(
              {
                ownerState: l,
                className: ue(u.select, r),
                disabled: n,
                ref: i || t,
              },
              s,
            ),
          ),
          e.multiple
            ? null
            : T(E4, { as: o, ownerState: l, className: u.icon }),
        ],
      });
    }),
    O4 = C4;
  var Ey;
  const N4 = ["children", "classes", "className", "label", "notched"],
    T4 = ee("fieldset")({
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
    R4 = ee("legend")(({ ownerState: e, theme: t }) =>
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
  function A4(e) {
    const { className: t, label: r, notched: n } = e,
      o = Z(e, N4),
      i = r != null && r !== "",
      a = E({}, e, { notched: n, withLabel: i });
    return T(
      T4,
      E({ "aria-hidden": !0, className: t, ownerState: a }, o, {
        children: T(R4, {
          ownerState: a,
          children: i
            ? T("span", { children: r })
            : Ey ||
              (Ey = T("span", {
                className: "notranslate",
                children: "\u200B",
              })),
        }),
      }),
    );
  }
  const _4 = [
      "components",
      "fullWidth",
      "inputComponent",
      "label",
      "multiline",
      "notched",
      "slots",
      "type",
    ],
    I4 = (e) => {
      const { classes: t } = e,
        r = ve(
          {
            root: ["root"],
            notchedOutline: ["notchedOutline"],
            input: ["input"],
          },
          z3,
          t,
        );
      return E({}, t, r);
    },
    P4 = ee(iu, {
      shouldForwardProp: (e) => dr(e) || e === "classes",
      name: "MuiOutlinedInput",
      slot: "Root",
      overridesResolver: nu,
    })(({ theme: e, ownerState: t }) => {
      const r =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return E(
        {
          position: "relative",
          borderRadius: (e.vars || e).shape.borderRadius,
          [`&:hover .${hn.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.text.primary,
          },
          "@media (hover: none)": {
            [`&:hover .${hn.notchedOutline}`]: {
              borderColor: e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : r,
            },
          },
          [`&.${hn.focused} .${hn.notchedOutline}`]: {
            borderColor: (e.vars || e).palette[t.color].main,
            borderWidth: 2,
          },
          [`&.${hn.error} .${hn.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.error.main,
          },
          [`&.${hn.disabled} .${hn.notchedOutline}`]: {
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
    $4 = ee(A4, {
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
    M4 = ee(au, {
      name: "MuiOutlinedInput",
      slot: "Input",
      overridesResolver: ou,
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
    Cy = S.forwardRef(function (e, t) {
      var r, n, o, i, a;
      const s = Se({ props: e, name: "MuiOutlinedInput" }),
        {
          components: l = {},
          fullWidth: u = !1,
          inputComponent: d = "input",
          label: f,
          multiline: h = !1,
          notched: m,
          slots: g = {},
          type: x = "text",
        } = s,
        R = Z(s, _4),
        b = I4(s),
        y = pn(),
        v = Do({ props: s, muiFormControl: y, states: ["required"] }),
        k = E({}, s, {
          color: v.color || "primary",
          disabled: v.disabled,
          error: v.error,
          focused: v.focused,
          formControl: y,
          fullWidth: u,
          hiddenLabel: v.hiddenLabel,
          multiline: h,
          size: v.size,
          type: x,
        }),
        C = (r = (n = g.root) != null ? n : l.Root) != null ? r : P4,
        A = (o = (i = g.input) != null ? i : l.Input) != null ? o : M4;
      return T(
        Ff,
        E(
          {
            slots: { root: C, input: A },
            renderSuffix: (N) =>
              T($4, {
                ownerState: k,
                className: b.notchedOutline,
                label:
                  f != null && f !== "" && v.required
                    ? a || (a = de(S.Fragment, { children: [f, "\xA0", "*"] }))
                    : f,
                notched:
                  typeof m < "u"
                    ? m
                    : !!(N.startAdornment || N.filled || N.focused),
              }),
            fullWidth: u,
            inputComponent: d,
            multiline: h,
            ref: t,
            type: x,
          },
          R,
          { classes: E({}, b, { notchedOutline: null }) },
        ),
      );
    });
  Cy.muiName = "Input";
  const Oy = Cy;
  function L4(e) {
    return ye("MuiSelect", e);
  }
  const B4 = ge("MuiSelect", [
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
    cu = B4;
  var Ny;
  const z4 = [
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
    F4 = ee("div", {
      name: "MuiSelect",
      slot: "Select",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          { [`&.${cu.select}`]: t.select },
          { [`&.${cu.select}`]: t[r.variant] },
          { [`&.${cu.multiple}`]: t.multiple },
        ];
      },
    })(xy, {
      [`&.${cu.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }),
    j4 = ee("svg", {
      name: "MuiSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.icon,
          r.variant && t[`icon${ne(r.variant)}`],
          r.open && t.iconOpen,
        ];
      },
    })(ky),
    U4 = ee("input", {
      shouldForwardProp: (e) => AC(e) && e !== "classes",
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
  function Ty(e, t) {
    return typeof t == "object" && t !== null
      ? e === t
      : String(e) === String(t);
  }
  function D4(e) {
    return e == null || (typeof e == "string" && !e.trim());
  }
  const W4 = (e) => {
      const { classes: t, variant: r, disabled: n, multiple: o, open: i } = e,
        a = {
          select: ["select", r, n && "disabled", o && "multiple"],
          icon: ["icon", `icon${ne(r)}`, i && "iconOpen", n && "disabled"],
          nativeInput: ["nativeInput"],
        };
      return ve(a, L4, t);
    },
    V4 = S.forwardRef(function (e, t) {
      const {
          "aria-describedby": r,
          "aria-label": n,
          autoFocus: o,
          autoWidth: i,
          children: a,
          className: s,
          defaultOpen: l,
          defaultValue: u,
          disabled: d,
          displayEmpty: f,
          IconComponent: h,
          inputRef: m,
          labelId: g,
          MenuProps: x = {},
          multiple: R,
          name: b,
          onBlur: y,
          onChange: v,
          onClose: k,
          onFocus: C,
          onOpen: A,
          open: N,
          readOnly: I,
          renderValue: P,
          SelectDisplayProps: z = {},
          tabIndex: H,
          value: V,
          variant: Q = "standard",
        } = e,
        U = Z(e, z4),
        [K, Y] = dl({ controlled: V, default: u, name: "Select" }),
        [J, D] = dl({ controlled: N, default: l, name: "Select" }),
        B = S.useRef(null),
        L = S.useRef(null),
        [O, M] = S.useState(null),
        { current: j } = S.useRef(N != null),
        [W, X] = S.useState(),
        oe = ct(t, m),
        le = S.useCallback((q) => {
          (L.current = q), q && M(q);
        }, []),
        ie = O == null ? void 0 : O.parentNode;
      S.useImperativeHandle(
        oe,
        () => ({
          focus: () => {
            L.current.focus();
          },
          node: B.current,
          value: K,
        }),
        [K],
      ),
        S.useEffect(() => {
          l &&
            J &&
            O &&
            !j &&
            (X(i ? null : ie.clientWidth), L.current.focus());
        }, [O, i]),
        S.useEffect(() => {
          o && L.current.focus();
        }, [o]),
        S.useEffect(() => {
          if (!g) return;
          const q = Rt(L.current).getElementById(g);
          if (q) {
            const Le = () => {
              getSelection().isCollapsed && L.current.focus();
            };
            return (
              q.addEventListener("click", Le),
              () => {
                q.removeEventListener("click", Le);
              }
            );
          }
        }, [g]);
      const ce = (q, Le) => {
          q ? A && A(Le) : k && k(Le),
            j || (X(i ? null : ie.clientWidth), D(q));
        },
        ae = (q) => {
          q.button === 0 && (q.preventDefault(), L.current.focus(), ce(!0, q));
        },
        be = (q) => {
          ce(!1, q);
        },
        xe = S.Children.toArray(a),
        He = (q) => {
          const Le = xe.map((It) => It.props.value).indexOf(q.target.value);
          if (Le === -1) return;
          const at = xe[Le];
          Y(at.props.value), v && v(q, at);
        },
        Oe = (q) => (Le) => {
          let at;
          if (Le.currentTarget.hasAttribute("tabindex")) {
            if (R) {
              at = Array.isArray(K) ? K.slice() : [];
              const It = K.indexOf(q.props.value);
              It === -1 ? at.push(q.props.value) : at.splice(It, 1);
            } else at = q.props.value;
            if (
              (q.props.onClick && q.props.onClick(Le), K !== at && (Y(at), v))
            ) {
              const It = Le.nativeEvent || Le,
                Aa = new It.constructor(It.type, It);
              Object.defineProperty(Aa, "target", {
                writable: !0,
                value: { value: at, name: b },
              }),
                v(Aa, q);
            }
            R || ce(!1, Le);
          }
        },
        c = (q) => {
          I ||
            ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(q.key) !== -1 &&
              (q.preventDefault(), ce(!0, q)));
        },
        p = O !== null && J,
        w = (q) => {
          !p &&
            y &&
            (Object.defineProperty(q, "target", {
              writable: !0,
              value: { value: K, name: b },
            }),
            y(q));
        };
      delete U["aria-invalid"];
      let _, $;
      const F = [];
      let te = !1;
      (zf({ value: K }) || f) && (P ? (_ = P(K)) : (te = !0));
      const fe = xe.map((q, Le, at) => {
        var It, Aa, A1, _1;
        if (!S.isValidElement(q)) return null;
        let bn;
        if (R) {
          if (!Array.isArray(K)) throw new Error(dn(2));
          (bn = K.some((Xn) => Ty(Xn, q.props.value))),
            bn && te && F.push(q.props.children);
        } else (bn = Ty(K, q.props.value)), bn && te && ($ = q.props.children);
        if (q.props.value === void 0)
          return S.cloneElement(q, { "aria-readonly": !0, role: "option" });
        const y6 = () => {
          if (K) return bn;
          const Xn = at.find((zp) => {
            var I1;
            return (
              (zp == null || (I1 = zp.props) == null ? void 0 : I1.value) !==
                void 0 && zp.props.disabled !== !0
            );
          });
          return q === Xn ? !0 : bn;
        };
        return S.cloneElement(q, {
          "aria-selected": bn ? "true" : "false",
          onClick: Oe(q),
          onKeyUp: (Xn) => {
            Xn.key === " " && Xn.preventDefault(),
              q.props.onKeyUp && q.props.onKeyUp(Xn);
          },
          role: "option",
          selected:
            ((It = at[0]) == null || (Aa = It.props) == null
              ? void 0
              : Aa.value) === void 0 ||
            ((A1 = at[0]) == null || (_1 = A1.props) == null
              ? void 0
              : _1.disabled) === !0
              ? y6()
              : bn,
          value: void 0,
          "data-value": q.props.value,
        });
      });
      te &&
        (R
          ? F.length === 0
            ? (_ = null)
            : (_ = F.reduce(
                (q, Le, at) => (
                  q.push(Le), at < F.length - 1 && q.push(", "), q
                ),
                [],
              ))
          : (_ = $));
      let he = W;
      !i && j && O && (he = ie.clientWidth);
      let pe;
      typeof H < "u" ? (pe = H) : (pe = d ? null : 0);
      const ke = z.id || (b ? `mui-component-select-${b}` : void 0),
        $e = E({}, e, { variant: Q, value: K, open: p }),
        Ee = W4($e);
      return de(S.Fragment, {
        children: [
          T(
            F4,
            E(
              {
                ref: le,
                tabIndex: pe,
                role: "button",
                "aria-disabled": d ? "true" : void 0,
                "aria-expanded": p ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": n,
                "aria-labelledby": [g, ke].filter(Boolean).join(" ") || void 0,
                "aria-describedby": r,
                onKeyDown: c,
                onMouseDown: d || I ? null : ae,
                onBlur: w,
                onFocus: C,
              },
              z,
              {
                ownerState: $e,
                className: ue(z.className, Ee.select, s),
                id: ke,
                children: D4(_)
                  ? Ny ||
                    (Ny = T("span", {
                      className: "notranslate",
                      children: "\u200B",
                    }))
                  : _,
              },
            ),
          ),
          T(
            U4,
            E(
              {
                value: Array.isArray(K) ? K.join(",") : K,
                name: b,
                ref: B,
                "aria-hidden": !0,
                onChange: He,
                tabIndex: -1,
                disabled: d,
                className: Ee.nativeInput,
                autoFocus: o,
                ownerState: $e,
              },
              U,
            ),
          ),
          T(j4, { as: h, className: Ee.icon, ownerState: $e }),
          T(
            c4,
            E(
              {
                id: `menu-${b || ""}`,
                anchorEl: ie,
                open: p,
                onClose: be,
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
                    { minWidth: he },
                    x.PaperProps != null ? x.PaperProps.style : null,
                  ),
                }),
                children: fe,
              },
            ),
          ),
        ],
      });
    }),
    H4 = V4;
  var Ry, Ay;
  const q4 = [
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
    G4 = (e) => {
      const { classes: t } = e;
      return t;
    },
    Yf = {
      name: "MuiSelect",
      overridesResolver: (e, t) => t.root,
      shouldForwardProp: (e) => dr(e) && e !== "variant",
      slot: "Root",
    },
    K4 = ee(ny, Yf)(""),
    Q4 = ee(Oy, Yf)(""),
    X4 = ee(Qb, Yf)(""),
    _y = S.forwardRef(function (e, t) {
      const r = Se({ name: "MuiSelect", props: e }),
        {
          autoWidth: n = !1,
          children: o,
          classes: i = {},
          className: a,
          defaultOpen: s = !1,
          displayEmpty: l = !1,
          IconComponent: u = D3,
          id: d,
          input: f,
          inputProps: h,
          label: m,
          labelId: g,
          MenuProps: x,
          multiple: R = !1,
          native: b = !1,
          onClose: y,
          onOpen: v,
          open: k,
          renderValue: C,
          SelectDisplayProps: A,
          variant: N = "outlined",
        } = r,
        I = Z(r, q4),
        P = b ? O4 : H4,
        z = pn(),
        H =
          Do({ props: r, muiFormControl: z, states: ["variant"] }).variant || N,
        V =
          f ||
          {
            standard: Ry || (Ry = T(K4, {})),
            outlined: T(Q4, { label: m }),
            filled: Ay || (Ay = T(X4, {})),
          }[H],
        Q = E({}, r, { variant: H, classes: i }),
        U = G4(Q),
        K = ct(t, V.ref);
      return T(S.Fragment, {
        children: S.cloneElement(
          V,
          E(
            {
              inputComponent: P,
              inputProps: E(
                {
                  children: o,
                  IconComponent: u,
                  variant: H,
                  type: void 0,
                  multiple: R,
                },
                b
                  ? { id: d }
                  : {
                      autoWidth: n,
                      defaultOpen: s,
                      displayEmpty: l,
                      labelId: g,
                      MenuProps: x,
                      onClose: y,
                      onOpen: v,
                      open: k,
                      renderValue: C,
                      SelectDisplayProps: E({ id: d }, A),
                    },
                h,
                { classes: h ? Kt(U, h.classes) : U },
                f ? f.props.inputProps : {},
              ),
            },
            R && b && H === "outlined" ? { notched: !0 } : {},
            { ref: K, className: ue(V.props.className, a) },
            !f && { variant: H },
            I,
          ),
        ),
      });
    });
  _y.muiName = "Select";
  const Iy = _y;
  function Y4(e) {
    return ye("MuiToolbar", e);
  }
  ge("MuiToolbar", ["root", "gutters", "regular", "dense"]);
  const J4 = ["className", "component", "disableGutters", "variant"],
    Z4 = (e) => {
      const { classes: t, disableGutters: r, variant: n } = e;
      return ve({ root: ["root", !r && "gutters", n] }, Y4, t);
    },
    eR = ee("div", {
      name: "MuiToolbar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
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
    tR = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiToolbar" }),
        {
          className: n,
          component: o = "div",
          disableGutters: i = !1,
          variant: a = "regular",
        } = r,
        s = Z(r, J4),
        l = E({}, r, { component: o, disableGutters: i, variant: a }),
        u = Z4(l);
      return T(
        eR,
        E({ as: o, className: ue(u.root, n), ref: t, ownerState: l }, s),
      );
    }),
    rR = tR;
  function nR(e) {
    return ye("MuiTextField", e);
  }
  ge("MuiTextField", ["root"]);
  const oR = [
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
    iR = { standard: ny, filled: Qb, outlined: Oy },
    aR = (e) => {
      const { classes: t } = e;
      return ve({ root: ["root"] }, nR, t);
    },
    sR = ee(Xb, {
      name: "MuiTextField",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    lR = S.forwardRef(function (e, t) {
      const r = Se({ props: e, name: "MuiTextField" }),
        {
          autoComplete: n,
          autoFocus: o = !1,
          children: i,
          className: a,
          color: s = "primary",
          defaultValue: l,
          disabled: u = !1,
          error: d = !1,
          FormHelperTextProps: f,
          fullWidth: h = !1,
          helperText: m,
          id: g,
          InputLabelProps: x,
          inputProps: R,
          InputProps: b,
          inputRef: y,
          label: v,
          maxRows: k,
          minRows: C,
          multiline: A = !1,
          name: N,
          onBlur: I,
          onChange: P,
          onFocus: z,
          placeholder: H,
          required: V = !1,
          rows: Q,
          select: U = !1,
          SelectProps: K,
          type: Y,
          value: J,
          variant: D = "outlined",
        } = r,
        B = Z(r, oR),
        L = E({}, r, {
          autoFocus: o,
          color: s,
          disabled: u,
          error: d,
          fullWidth: h,
          multiline: A,
          required: V,
          select: U,
          variant: D,
        }),
        O = aR(L),
        M = {};
      D === "outlined" &&
        (x && typeof x.shrink < "u" && (M.notched = x.shrink), (M.label = v)),
        U &&
          ((!K || !K.native) && (M.id = void 0),
          (M["aria-describedby"] = void 0));
      const j = T0(g),
        W = m && j ? `${j}-helper-text` : void 0,
        X = v && j ? `${j}-label` : void 0,
        oe = iR[D],
        le = T(
          oe,
          E(
            {
              "aria-describedby": W,
              autoComplete: n,
              autoFocus: o,
              defaultValue: l,
              fullWidth: h,
              multiline: A,
              name: N,
              rows: Q,
              maxRows: k,
              minRows: C,
              type: Y,
              value: J,
              id: j,
              inputRef: y,
              onBlur: I,
              onChange: P,
              onFocus: z,
              placeholder: H,
              inputProps: R,
            },
            M,
            b,
          ),
        );
      return de(
        sR,
        E(
          {
            className: ue(O.root, a),
            disabled: u,
            error: d,
            fullWidth: h,
            ref: t,
            required: V,
            color: s,
            variant: D,
            ownerState: L,
          },
          B,
          {
            children: [
              v != null &&
                v !== "" &&
                T(ay, E({ htmlFor: j, id: X }, x, { children: v })),
              U
                ? T(
                    Iy,
                    E(
                      {
                        "aria-describedby": W,
                        id: j,
                        labelId: X,
                        value: J,
                        input: le,
                      },
                      K,
                      { children: i },
                    ),
                  )
                : le,
              m && T(aN, E({ id: W }, f, { children: m })),
            ],
          },
        ),
      );
    }),
    fr = lR;
  function uR(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
  }
  for (
    var cR = mR,
      dR = bR,
      fR = wR,
      Cr = [],
      Zt = [],
      pR = typeof Uint8Array < "u" ? Uint8Array : Array,
      Jf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Ko = 0,
      hR = Jf.length;
    Ko < hR;
    ++Ko
  )
    (Cr[Ko] = Jf[Ko]), (Zt[Jf.charCodeAt(Ko)] = Ko);
  (Zt["-".charCodeAt(0)] = 62), (Zt["_".charCodeAt(0)] = 63);
  function Py(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    r === -1 && (r = t);
    var n = r === t ? 0 : 4 - (r % 4);
    return [r, n];
  }
  function mR(e) {
    var t = Py(e),
      r = t[0],
      n = t[1];
    return ((r + n) * 3) / 4 - n;
  }
  function gR(e, t, r) {
    return ((t + r) * 3) / 4 - r;
  }
  function bR(e) {
    var t,
      r = Py(e),
      n = r[0],
      o = r[1],
      i = new pR(gR(e, n, o)),
      a = 0,
      s = o > 0 ? n - 4 : n,
      l;
    for (l = 0; l < s; l += 4)
      (t =
        (Zt[e.charCodeAt(l)] << 18) |
        (Zt[e.charCodeAt(l + 1)] << 12) |
        (Zt[e.charCodeAt(l + 2)] << 6) |
        Zt[e.charCodeAt(l + 3)]),
        (i[a++] = (t >> 16) & 255),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255);
    return (
      o === 2 &&
        ((t = (Zt[e.charCodeAt(l)] << 2) | (Zt[e.charCodeAt(l + 1)] >> 4)),
        (i[a++] = t & 255)),
      o === 1 &&
        ((t =
          (Zt[e.charCodeAt(l)] << 10) |
          (Zt[e.charCodeAt(l + 1)] << 4) |
          (Zt[e.charCodeAt(l + 2)] >> 2)),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255)),
      i
    );
  }
  function yR(e) {
    return (
      Cr[(e >> 18) & 63] + Cr[(e >> 12) & 63] + Cr[(e >> 6) & 63] + Cr[e & 63]
    );
  }
  function vR(e, t, r) {
    for (var n, o = [], i = t; i < r; i += 3)
      (n =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        o.push(yR(n));
    return o.join("");
  }
  function wR(e) {
    for (
      var t, r = e.length, n = r % 3, o = [], i = 16383, a = 0, s = r - n;
      a < s;
      a += i
    )
      o.push(vR(e, a, a + i > s ? s : a + i));
    return (
      n === 1
        ? ((t = e[r - 1]), o.push(Cr[t >> 2] + Cr[(t << 4) & 63] + "=="))
        : n === 2 &&
          ((t = (e[r - 2] << 8) + e[r - 1]),
          o.push(Cr[t >> 10] + Cr[(t >> 4) & 63] + Cr[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
  var Zf = { byteLength: cR, toByteArray: dR, fromByteArray: fR },
    SR = function (e, t, r, n, o) {
      var i,
        a,
        s = o * 8 - n - 1,
        l = (1 << s) - 1,
        u = l >> 1,
        d = -7,
        f = r ? o - 1 : 0,
        h = r ? -1 : 1,
        m = e[t + f];
      for (
        f += h, i = m & ((1 << -d) - 1), m >>= -d, d += s;
        d > 0;
        i = i * 256 + e[t + f], f += h, d -= 8
      );
      for (
        a = i & ((1 << -d) - 1), i >>= -d, d += n;
        d > 0;
        a = a * 256 + e[t + f], f += h, d -= 8
      );
      if (i === 0) i = 1 - u;
      else {
        if (i === l) return a ? NaN : (m ? -1 : 1) * (1 / 0);
        (a = a + Math.pow(2, n)), (i = i - u);
      }
      return (m ? -1 : 1) * a * Math.pow(2, i - n);
    },
    xR = function (e, t, r, n, o, i) {
      var a,
        s,
        l,
        u = i * 8 - o - 1,
        d = (1 << u) - 1,
        f = d >> 1,
        h = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        m = n ? 0 : i - 1,
        g = n ? 1 : -1,
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
        e[r + m] = s & 255, m += g, s /= 256, o -= 8
      );
      for (
        a = (a << o) | s, u += o;
        u > 0;
        e[r + m] = a & 255, m += g, a /= 256, u -= 8
      );
      e[r + m - g] |= x * 128;
    },
    Qo = { read: SR, write: xR },
    du = uR(function (e, t) {
      var r =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
      (t.Buffer = a), (t.SlowBuffer = b), (t.INSPECT_MAX_BYTES = 50);
      var n = 2147483647;
      (t.kMaxLength = n),
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
        if (c > n)
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
        if (ArrayBuffer.isView(c)) return m(c);
        if (c == null)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              babelHelpers.typeof(c),
          );
        if (
          xe(c, ArrayBuffer) ||
          (c && xe(c.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (xe(c, SharedArrayBuffer) ||
              (c && xe(c.buffer, SharedArrayBuffer))))
        )
          return g(c, p, w);
        if (typeof c == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        var _ = c.valueOf && c.valueOf();
        if (_ != null && _ !== c) return a.from(_, p, w);
        var $ = x(c);
        if ($) return $;
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
        var w = y(c, p) | 0,
          _ = i(w),
          $ = _.write(c, p);
        return $ !== w && (_ = _.slice(0, $)), _;
      }
      function h(c) {
        for (
          var p = c.length < 0 ? 0 : R(c.length) | 0, w = i(p), _ = 0;
          _ < p;
          _ += 1
        )
          w[_] = c[_] & 255;
        return w;
      }
      function m(c) {
        if (xe(c, Uint8Array)) {
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
        var _;
        return (
          p === void 0 && w === void 0
            ? (_ = new Uint8Array(c))
            : w === void 0
            ? (_ = new Uint8Array(c, p))
            : (_ = new Uint8Array(c, p, w)),
          Object.setPrototypeOf(_, a.prototype),
          _
        );
      }
      function x(c) {
        if (a.isBuffer(c)) {
          var p = R(c.length) | 0,
            w = i(p);
          return w.length === 0 || c.copy(w, 0, 0, p), w;
        }
        if (c.length !== void 0)
          return typeof c.length != "number" || He(c.length) ? i(0) : h(c);
        if (c.type === "Buffer" && Array.isArray(c.data)) return h(c.data);
      }
      function R(c) {
        if (c >= n)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              n.toString(16) +
              " bytes",
          );
        return c | 0;
      }
      function b(c) {
        return +c != c && (c = 0), a.alloc(+c);
      }
      (a.isBuffer = function (c) {
        return c != null && c._isBuffer === !0 && c !== a.prototype;
      }),
        (a.compare = function (c, p) {
          if (
            (xe(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
            xe(p, Uint8Array) && (p = a.from(p, p.offset, p.byteLength)),
            !a.isBuffer(c) || !a.isBuffer(p))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (c === p) return 0;
          for (
            var w = c.length, _ = p.length, $ = 0, F = Math.min(w, _);
            $ < F;
            ++$
          )
            if (c[$] !== p[$]) {
              (w = c[$]), (_ = p[$]);
              break;
            }
          return w < _ ? -1 : _ < w ? 1 : 0;
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
          var _ = a.allocUnsafe(p),
            $ = 0;
          for (w = 0; w < c.length; ++w) {
            var F = c[w];
            if (xe(F, Uint8Array))
              $ + F.length > _.length
                ? a.from(F).copy(_, $)
                : Uint8Array.prototype.set.call(_, F, $);
            else if (a.isBuffer(F)) F.copy(_, $);
            else
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            $ += F.length;
          }
          return _;
        });
      function y(c, p) {
        if (a.isBuffer(c)) return c.length;
        if (ArrayBuffer.isView(c) || xe(c, ArrayBuffer)) return c.byteLength;
        if (typeof c != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              babelHelpers.typeof(c),
          );
        var w = c.length,
          _ = arguments.length > 2 && arguments[2] === !0;
        if (!_ && w === 0) return 0;
        for (var $ = !1; ; )
          switch (p) {
            case "ascii":
            case "latin1":
            case "binary":
              return w;
            case "utf8":
            case "utf-8":
              return le(c).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return w * 2;
            case "hex":
              return w >>> 1;
            case "base64":
              return ae(c).length;
            default:
              if ($) return _ ? -1 : le(c).length;
              (p = ("" + p).toLowerCase()), ($ = !0);
          }
      }
      a.byteLength = y;
      function v(c, p, w) {
        var _ = !1;
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
              return D(this, p, w);
            case "utf8":
            case "utf-8":
              return Q(this, p, w);
            case "ascii":
              return Y(this, p, w);
            case "latin1":
            case "binary":
              return J(this, p, w);
            case "base64":
              return V(this, p, w);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return B(this, p, w);
            default:
              if (_) throw new TypeError("Unknown encoding: " + c);
              (c = (c + "").toLowerCase()), (_ = !0);
          }
      }
      a.prototype._isBuffer = !0;
      function k(c, p, w) {
        var _ = c[p];
        (c[p] = c[w]), (c[w] = _);
      }
      (a.prototype.swap16 = function () {
        var c = this.length;
        if (c % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var p = 0; p < c; p += 2) k(this, p, p + 1);
        return this;
      }),
        (a.prototype.swap32 = function () {
          var c = this.length;
          if (c % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var p = 0; p < c; p += 4)
            k(this, p, p + 3), k(this, p + 1, p + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var c = this.length;
          if (c % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var p = 0; p < c; p += 8)
            k(this, p, p + 7),
              k(this, p + 1, p + 6),
              k(this, p + 2, p + 5),
              k(this, p + 3, p + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          var c = this.length;
          return c === 0
            ? ""
            : arguments.length === 0
            ? Q(this, 0, c)
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
        r && (a.prototype[r] = a.prototype.inspect),
        (a.prototype.compare = function (c, p, w, _, $) {
          if (
            (xe(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
            !a.isBuffer(c))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                babelHelpers.typeof(c),
            );
          if (
            (p === void 0 && (p = 0),
            w === void 0 && (w = c ? c.length : 0),
            _ === void 0 && (_ = 0),
            $ === void 0 && ($ = this.length),
            p < 0 || w > c.length || _ < 0 || $ > this.length)
          )
            throw new RangeError("out of range index");
          if (_ >= $ && p >= w) return 0;
          if (_ >= $) return -1;
          if (p >= w) return 1;
          if (((p >>>= 0), (w >>>= 0), (_ >>>= 0), ($ >>>= 0), this === c))
            return 0;
          for (
            var F = $ - _,
              te = w - p,
              fe = Math.min(F, te),
              he = this.slice(_, $),
              pe = c.slice(p, w),
              ke = 0;
            ke < fe;
            ++ke
          )
            if (he[ke] !== pe[ke]) {
              (F = he[ke]), (te = pe[ke]);
              break;
            }
          return F < te ? -1 : te < F ? 1 : 0;
        });
      function C(c, p, w, _, $) {
        if (c.length === 0) return -1;
        if (
          (typeof w == "string"
            ? ((_ = w), (w = 0))
            : w > 2147483647
            ? (w = 2147483647)
            : w < -2147483648 && (w = -2147483648),
          (w = +w),
          He(w) && (w = $ ? 0 : c.length - 1),
          w < 0 && (w = c.length + w),
          w >= c.length)
        ) {
          if ($) return -1;
          w = c.length - 1;
        } else if (w < 0)
          if ($) w = 0;
          else return -1;
        if ((typeof p == "string" && (p = a.from(p, _)), a.isBuffer(p)))
          return p.length === 0 ? -1 : A(c, p, w, _, $);
        if (typeof p == "number")
          return (
            (p = p & 255),
            typeof Uint8Array.prototype.indexOf == "function"
              ? $
                ? Uint8Array.prototype.indexOf.call(c, p, w)
                : Uint8Array.prototype.lastIndexOf.call(c, p, w)
              : A(c, [p], w, _, $)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function A(c, p, w, _, $) {
        var F = 1,
          te = c.length,
          fe = p.length;
        if (
          _ !== void 0 &&
          ((_ = String(_).toLowerCase()),
          _ === "ucs2" || _ === "ucs-2" || _ === "utf16le" || _ === "utf-16le")
        ) {
          if (c.length < 2 || p.length < 2) return -1;
          (F = 2), (te /= 2), (fe /= 2), (w /= 2);
        }
        function he(q, Le) {
          return F === 1 ? q[Le] : q.readUInt16BE(Le * F);
        }
        var pe;
        if ($) {
          var ke = -1;
          for (pe = w; pe < te; pe++)
            if (he(c, pe) === he(p, ke === -1 ? 0 : pe - ke)) {
              if ((ke === -1 && (ke = pe), pe - ke + 1 === fe)) return ke * F;
            } else ke !== -1 && (pe -= pe - ke), (ke = -1);
        } else
          for (w + fe > te && (w = te - fe), pe = w; pe >= 0; pe--) {
            for (var $e = !0, Ee = 0; Ee < fe; Ee++)
              if (he(c, pe + Ee) !== he(p, Ee)) {
                $e = !1;
                break;
              }
            if ($e) return pe;
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
      function N(c, p, w, _) {
        w = Number(w) || 0;
        var $ = c.length - w;
        _ ? ((_ = Number(_)), _ > $ && (_ = $)) : (_ = $);
        var F = p.length;
        _ > F / 2 && (_ = F / 2);
        for (var te = 0; te < _; ++te) {
          var fe = parseInt(p.substr(te * 2, 2), 16);
          if (He(fe)) return te;
          c[w + te] = fe;
        }
        return te;
      }
      function I(c, p, w, _) {
        return be(le(p, c.length - w), c, w, _);
      }
      function P(c, p, w, _) {
        return be(ie(p), c, w, _);
      }
      function z(c, p, w, _) {
        return be(ae(p), c, w, _);
      }
      function H(c, p, w, _) {
        return be(ce(p, c.length - w), c, w, _);
      }
      (a.prototype.write = function (c, p, w, _) {
        if (p === void 0) (_ = "utf8"), (w = this.length), (p = 0);
        else if (w === void 0 && typeof p == "string")
          (_ = p), (w = this.length), (p = 0);
        else if (isFinite(p))
          (p = p >>> 0),
            isFinite(w)
              ? ((w = w >>> 0), _ === void 0 && (_ = "utf8"))
              : ((_ = w), (w = void 0));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported",
          );
        var $ = this.length - p;
        if (
          ((w === void 0 || w > $) && (w = $),
          (c.length > 0 && (w < 0 || p < 0)) || p > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        _ || (_ = "utf8");
        for (var F = !1; ; )
          switch (_) {
            case "hex":
              return N(this, c, p, w);
            case "utf8":
            case "utf-8":
              return I(this, c, p, w);
            case "ascii":
            case "latin1":
            case "binary":
              return P(this, c, p, w);
            case "base64":
              return z(this, c, p, w);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return H(this, c, p, w);
            default:
              if (F) throw new TypeError("Unknown encoding: " + _);
              (_ = ("" + _).toLowerCase()), (F = !0);
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
          ? Zf.fromByteArray(c)
          : Zf.fromByteArray(c.slice(p, w));
      }
      function Q(c, p, w) {
        w = Math.min(c.length, w);
        for (var _ = [], $ = p; $ < w; ) {
          var F = c[$],
            te = null,
            fe = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
          if ($ + fe <= w) {
            var he, pe, ke, $e;
            switch (fe) {
              case 1:
                F < 128 && (te = F);
                break;
              case 2:
                (he = c[$ + 1]),
                  (he & 192) === 128 &&
                    (($e = ((F & 31) << 6) | (he & 63)), $e > 127 && (te = $e));
                break;
              case 3:
                (he = c[$ + 1]),
                  (pe = c[$ + 2]),
                  (he & 192) === 128 &&
                    (pe & 192) === 128 &&
                    (($e = ((F & 15) << 12) | ((he & 63) << 6) | (pe & 63)),
                    $e > 2047 && ($e < 55296 || $e > 57343) && (te = $e));
                break;
              case 4:
                (he = c[$ + 1]),
                  (pe = c[$ + 2]),
                  (ke = c[$ + 3]),
                  (he & 192) === 128 &&
                    (pe & 192) === 128 &&
                    (ke & 192) === 128 &&
                    (($e =
                      ((F & 15) << 18) |
                      ((he & 63) << 12) |
                      ((pe & 63) << 6) |
                      (ke & 63)),
                    $e > 65535 && $e < 1114112 && (te = $e));
            }
          }
          te === null
            ? ((te = 65533), (fe = 1))
            : te > 65535 &&
              ((te -= 65536),
              _.push(((te >>> 10) & 1023) | 55296),
              (te = 56320 | (te & 1023))),
            _.push(te),
            ($ += fe);
        }
        return K(_);
      }
      var U = 4096;
      function K(c) {
        var p = c.length;
        if (p <= U) return String.fromCharCode.apply(String, c);
        for (var w = "", _ = 0; _ < p; )
          w += String.fromCharCode.apply(String, c.slice(_, (_ += U)));
        return w;
      }
      function Y(c, p, w) {
        var _ = "";
        w = Math.min(c.length, w);
        for (var $ = p; $ < w; ++$) _ += String.fromCharCode(c[$] & 127);
        return _;
      }
      function J(c, p, w) {
        var _ = "";
        w = Math.min(c.length, w);
        for (var $ = p; $ < w; ++$) _ += String.fromCharCode(c[$]);
        return _;
      }
      function D(c, p, w) {
        var _ = c.length;
        (!p || p < 0) && (p = 0), (!w || w < 0 || w > _) && (w = _);
        for (var $ = "", F = p; F < w; ++F) $ += Oe[c[F]];
        return $;
      }
      function B(c, p, w) {
        for (var _ = c.slice(p, w), $ = "", F = 0; F < _.length - 1; F += 2)
          $ += String.fromCharCode(_[F] + _[F + 1] * 256);
        return $;
      }
      a.prototype.slice = function (c, p) {
        var w = this.length;
        (c = ~~c),
          (p = p === void 0 ? w : ~~p),
          c < 0 ? ((c += w), c < 0 && (c = 0)) : c > w && (c = w),
          p < 0 ? ((p += w), p < 0 && (p = 0)) : p > w && (p = w),
          p < c && (p = c);
        var _ = this.subarray(c, p);
        return Object.setPrototypeOf(_, a.prototype), _;
      };
      function L(c, p, w) {
        if (c % 1 !== 0 || c < 0) throw new RangeError("offset is not uint");
        if (c + p > w)
          throw new RangeError("Trying to access beyond buffer length");
      }
      (a.prototype.readUintLE = a.prototype.readUIntLE =
        function (c, p, w) {
          (c = c >>> 0), (p = p >>> 0), w || L(c, p, this.length);
          for (var _ = this[c], $ = 1, F = 0; ++F < p && ($ *= 256); )
            _ += this[c + F] * $;
          return _;
        }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (c, p, w) {
            (c = c >>> 0), (p = p >>> 0), w || L(c, p, this.length);
            for (var _ = this[c + --p], $ = 1; p > 0 && ($ *= 256); )
              _ += this[c + --p] * $;
            return _;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (c, p) {
            return (c = c >>> 0), p || L(c, 1, this.length), this[c];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || L(c, 2, this.length),
              this[c] | (this[c + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || L(c, 2, this.length),
              (this[c] << 8) | this[c + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || L(c, 4, this.length),
              (this[c] | (this[c + 1] << 8) | (this[c + 2] << 16)) +
                this[c + 3] * 16777216
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (c, p) {
            return (
              (c = c >>> 0),
              p || L(c, 4, this.length),
              this[c] * 16777216 +
                ((this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3])
            );
          }),
        (a.prototype.readIntLE = function (c, p, w) {
          (c = c >>> 0), (p = p >>> 0), w || L(c, p, this.length);
          for (var _ = this[c], $ = 1, F = 0; ++F < p && ($ *= 256); )
            _ += this[c + F] * $;
          return ($ *= 128), _ >= $ && (_ -= Math.pow(2, 8 * p)), _;
        }),
        (a.prototype.readIntBE = function (c, p, w) {
          (c = c >>> 0), (p = p >>> 0), w || L(c, p, this.length);
          for (var _ = p, $ = 1, F = this[c + --_]; _ > 0 && ($ *= 256); )
            F += this[c + --_] * $;
          return ($ *= 128), F >= $ && (F -= Math.pow(2, 8 * p)), F;
        }),
        (a.prototype.readInt8 = function (c, p) {
          return (
            (c = c >>> 0),
            p || L(c, 1, this.length),
            this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]
          );
        }),
        (a.prototype.readInt16LE = function (c, p) {
          (c = c >>> 0), p || L(c, 2, this.length);
          var w = this[c] | (this[c + 1] << 8);
          return w & 32768 ? w | 4294901760 : w;
        }),
        (a.prototype.readInt16BE = function (c, p) {
          (c = c >>> 0), p || L(c, 2, this.length);
          var w = this[c + 1] | (this[c] << 8);
          return w & 32768 ? w | 4294901760 : w;
        }),
        (a.prototype.readInt32LE = function (c, p) {
          return (
            (c = c >>> 0),
            p || L(c, 4, this.length),
            this[c] |
              (this[c + 1] << 8) |
              (this[c + 2] << 16) |
              (this[c + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (c, p) {
          return (
            (c = c >>> 0),
            p || L(c, 4, this.length),
            (this[c] << 24) |
              (this[c + 1] << 16) |
              (this[c + 2] << 8) |
              this[c + 3]
          );
        }),
        (a.prototype.readFloatLE = function (c, p) {
          return (
            (c = c >>> 0),
            p || L(c, 4, this.length),
            Qo.read(this, c, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (c, p) {
          return (
            (c = c >>> 0),
            p || L(c, 4, this.length),
            Qo.read(this, c, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (c, p) {
          return (
            (c = c >>> 0),
            p || L(c, 8, this.length),
            Qo.read(this, c, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (c, p) {
          return (
            (c = c >>> 0),
            p || L(c, 8, this.length),
            Qo.read(this, c, !1, 52, 8)
          );
        });
      function O(c, p, w, _, $, F) {
        if (!a.isBuffer(c))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (p > $ || p < F)
          throw new RangeError('"value" argument is out of bounds');
        if (w + _ > c.length) throw new RangeError("Index out of range");
      }
      (a.prototype.writeUintLE = a.prototype.writeUIntLE =
        function (c, p, w, _) {
          if (((c = +c), (p = p >>> 0), (w = w >>> 0), !_)) {
            var $ = Math.pow(2, 8 * w) - 1;
            O(this, c, p, w, $, 0);
          }
          var F = 1,
            te = 0;
          for (this[p] = c & 255; ++te < w && (F *= 256); )
            this[p + te] = (c / F) & 255;
          return p + w;
        }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (c, p, w, _) {
            if (((c = +c), (p = p >>> 0), (w = w >>> 0), !_)) {
              var $ = Math.pow(2, 8 * w) - 1;
              O(this, c, p, w, $, 0);
            }
            var F = w - 1,
              te = 1;
            for (this[p + F] = c & 255; --F >= 0 && (te *= 256); )
              this[p + F] = (c / te) & 255;
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
        (a.prototype.writeIntLE = function (c, p, w, _) {
          if (((c = +c), (p = p >>> 0), !_)) {
            var $ = Math.pow(2, 8 * w - 1);
            O(this, c, p, w, $ - 1, -$);
          }
          var F = 0,
            te = 1,
            fe = 0;
          for (this[p] = c & 255; ++F < w && (te *= 256); )
            c < 0 && fe === 0 && this[p + F - 1] !== 0 && (fe = 1),
              (this[p + F] = (((c / te) >> 0) - fe) & 255);
          return p + w;
        }),
        (a.prototype.writeIntBE = function (c, p, w, _) {
          if (((c = +c), (p = p >>> 0), !_)) {
            var $ = Math.pow(2, 8 * w - 1);
            O(this, c, p, w, $ - 1, -$);
          }
          var F = w - 1,
            te = 1,
            fe = 0;
          for (this[p + F] = c & 255; --F >= 0 && (te *= 256); )
            c < 0 && fe === 0 && this[p + F + 1] !== 0 && (fe = 1),
              (this[p + F] = (((c / te) >> 0) - fe) & 255);
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
      function M(c, p, w, _, $, F) {
        if (w + _ > c.length) throw new RangeError("Index out of range");
        if (w < 0) throw new RangeError("Index out of range");
      }
      function j(c, p, w, _, $) {
        return (
          (p = +p),
          (w = w >>> 0),
          $ || M(c, p, w, 4),
          Qo.write(c, p, w, _, 23, 4),
          w + 4
        );
      }
      (a.prototype.writeFloatLE = function (c, p, w) {
        return j(this, c, p, !0, w);
      }),
        (a.prototype.writeFloatBE = function (c, p, w) {
          return j(this, c, p, !1, w);
        });
      function W(c, p, w, _, $) {
        return (
          (p = +p),
          (w = w >>> 0),
          $ || M(c, p, w, 8),
          Qo.write(c, p, w, _, 52, 8),
          w + 8
        );
      }
      (a.prototype.writeDoubleLE = function (c, p, w) {
        return W(this, c, p, !0, w);
      }),
        (a.prototype.writeDoubleBE = function (c, p, w) {
          return W(this, c, p, !1, w);
        }),
        (a.prototype.copy = function (c, p, w, _) {
          if (!a.isBuffer(c))
            throw new TypeError("argument should be a Buffer");
          if (
            (w || (w = 0),
            !_ && _ !== 0 && (_ = this.length),
            p >= c.length && (p = c.length),
            p || (p = 0),
            _ > 0 && _ < w && (_ = w),
            _ === w || c.length === 0 || this.length === 0)
          )
            return 0;
          if (p < 0) throw new RangeError("targetStart out of bounds");
          if (w < 0 || w >= this.length)
            throw new RangeError("Index out of range");
          if (_ < 0) throw new RangeError("sourceEnd out of bounds");
          _ > this.length && (_ = this.length),
            c.length - p < _ - w && (_ = c.length - p + w);
          var $ = _ - w;
          return (
            this === c && typeof Uint8Array.prototype.copyWithin == "function"
              ? this.copyWithin(p, w, _)
              : Uint8Array.prototype.set.call(c, this.subarray(w, _), p),
            $
          );
        }),
        (a.prototype.fill = function (c, p, w, _) {
          if (typeof c == "string") {
            if (
              (typeof p == "string"
                ? ((_ = p), (p = 0), (w = this.length))
                : typeof w == "string" && ((_ = w), (w = this.length)),
              _ !== void 0 && typeof _ != "string")
            )
              throw new TypeError("encoding must be a string");
            if (typeof _ == "string" && !a.isEncoding(_))
              throw new TypeError("Unknown encoding: " + _);
            if (c.length === 1) {
              var $ = c.charCodeAt(0);
              ((_ === "utf8" && $ < 128) || _ === "latin1") && (c = $);
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
          var F;
          if (typeof c == "number") for (F = p; F < w; ++F) this[F] = c;
          else {
            var te = a.isBuffer(c) ? c : a.from(c, _),
              fe = te.length;
            if (fe === 0)
              throw new TypeError(
                'The value "' + c + '" is invalid for argument "value"',
              );
            for (F = 0; F < w - p; ++F) this[F + p] = te[F % fe];
          }
          return this;
        });
      var X = /[^+/0-9A-Za-z-_]/g;
      function oe(c) {
        if (
          ((c = c.split("=")[0]), (c = c.trim().replace(X, "")), c.length < 2)
        )
          return "";
        for (; c.length % 4 !== 0; ) c = c + "=";
        return c;
      }
      function le(c, p) {
        p = p || 1 / 0;
        for (var w, _ = c.length, $ = null, F = [], te = 0; te < _; ++te) {
          if (((w = c.charCodeAt(te)), w > 55295 && w < 57344)) {
            if (!$) {
              if (w > 56319) {
                (p -= 3) > -1 && F.push(239, 191, 189);
                continue;
              } else if (te + 1 === _) {
                (p -= 3) > -1 && F.push(239, 191, 189);
                continue;
              }
              $ = w;
              continue;
            }
            if (w < 56320) {
              (p -= 3) > -1 && F.push(239, 191, 189), ($ = w);
              continue;
            }
            w = ((($ - 55296) << 10) | (w - 56320)) + 65536;
          } else $ && (p -= 3) > -1 && F.push(239, 191, 189);
          if ((($ = null), w < 128)) {
            if ((p -= 1) < 0) break;
            F.push(w);
          } else if (w < 2048) {
            if ((p -= 2) < 0) break;
            F.push((w >> 6) | 192, (w & 63) | 128);
          } else if (w < 65536) {
            if ((p -= 3) < 0) break;
            F.push((w >> 12) | 224, ((w >> 6) & 63) | 128, (w & 63) | 128);
          } else if (w < 1114112) {
            if ((p -= 4) < 0) break;
            F.push(
              (w >> 18) | 240,
              ((w >> 12) & 63) | 128,
              ((w >> 6) & 63) | 128,
              (w & 63) | 128,
            );
          } else throw new Error("Invalid code point");
        }
        return F;
      }
      function ie(c) {
        for (var p = [], w = 0; w < c.length; ++w)
          p.push(c.charCodeAt(w) & 255);
        return p;
      }
      function ce(c, p) {
        for (
          var w, _, $, F = [], te = 0;
          te < c.length && !((p -= 2) < 0);
          ++te
        )
          (w = c.charCodeAt(te)),
            (_ = w >> 8),
            ($ = w % 256),
            F.push($),
            F.push(_);
        return F;
      }
      function ae(c) {
        return Zf.toByteArray(oe(c));
      }
      function be(c, p, w, _) {
        for (var $ = 0; $ < _ && !($ + w >= p.length || $ >= c.length); ++$)
          p[$ + w] = c[$];
        return $;
      }
      function xe(c, p) {
        return (
          c instanceof p ||
          (c != null &&
            c.constructor != null &&
            c.constructor.name != null &&
            c.constructor.name === p.name)
        );
      }
      function He(c) {
        return c !== c;
      }
      var Oe = (function () {
        for (var c = "0123456789abcdef", p = new Array(256), w = 0; w < 16; ++w)
          for (var _ = w * 16, $ = 0; $ < 16; ++$) p[_ + $] = c[w] + c[$];
        return p;
      })();
    }),
    Te = du.Buffer;
  du.SlowBuffer, du.INSPECT_MAX_BYTES, du.kMaxLength;
  var ep = function (e, t) {
    return (
      (ep =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
        }),
      ep(e, t)
    );
  };
  function fu(e, t) {
    ep(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
  }
  var Vn = (function (e) {
      fu(t, e);
      function t(r) {
        var n = e.call(this, r) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
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
      fu(t, e);
      function t(r) {
        var n = e.call(this, r) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
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
  function pu(e) {
    return e && e.Math == Math && e;
  }
  function $y() {
    return (
      pu(typeof globalThis == "object" && globalThis) ||
      pu(typeof window == "object" && window) ||
      pu(typeof self == "object" && self) ||
      pu(typeof global == "object" && global) ||
      Function("return this")()
    );
  }
  function kR() {
    var e = $y();
    return (
      typeof e.navigator == "object" && e.navigator.product === "ReactNative"
    );
  }
  var ER = function (e) {
      var t = kR()
        ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values."
        : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
      console.warn(t);
      for (var r = Te.alloc(e), n = 0; n < e; ++n)
        r[n] = Math.floor(Math.random() * 256);
      return r;
    },
    CR = function () {
      {
        if (typeof window < "u") {
          var e = window.crypto || window.msCrypto;
          if (e && e.getRandomValues)
            return function (t) {
              return e.getRandomValues(Te.alloc(t));
            };
        }
        return typeof global < "u" &&
          global.crypto &&
          global.crypto.getRandomValues
          ? function (t) {
              return global.crypto.getRandomValues(Te.alloc(t));
            }
          : ER;
      }
    },
    My = CR();
  function OR(e) {
    return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(
      Object.prototype.toString.call(e),
    );
  }
  function tp(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  function NR(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  function TR(e) {
    return wa(e) && Object.prototype.toString.call(e) === "[object Date]";
  }
  function wa(e) {
    return typeof e == "object" && e !== null;
  }
  function hu(e, t) {
    var r = !1;
    function n() {
      for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
      return r || (console.warn(t), (r = !0)), e.apply(this, o);
    }
    return n;
  }
  function mu(e) {
    if (ArrayBuffer.isView(e))
      return Te.from(e.buffer, e.byteOffset, e.byteLength);
    if (OR(e)) return Te.from(e);
    throw new Qe("Must use either Buffer or TypedArray");
  }
  var RR =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i,
    Ly = function (e) {
      return typeof e == "string" && RR.test(e);
    },
    rp = function (e) {
      if (!Ly(e))
        throw new Qe(
          'UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".',
        );
      var t = e.replace(/-/g, "");
      return Te.from(t, "hex");
    },
    By = function (e, t) {
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
    AR = Math.pow(2, 53),
    _R = -Math.pow(2, 53),
    zy = 4,
    Hn = (function () {
      function e(t, r) {
        if (!(this instanceof e)) return new e(t, r);
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
        (this.sub_type = r ?? e.BSON_BINARY_SUBTYPE_DEFAULT),
          t == null
            ? ((this.buffer = Te.alloc(e.BUFFER_SIZE)), (this.position = 0))
            : (typeof t == "string"
                ? (this.buffer = Te.from(t, "binary"))
                : Array.isArray(t)
                ? (this.buffer = Te.from(t))
                : (this.buffer = mu(t)),
              (this.position = this.buffer.byteLength));
      }
      return (
        (e.prototype.put = function (t) {
          if (typeof t == "string" && t.length !== 1)
            throw new Qe("only accepts single character String");
          if (typeof t != "number" && t.length !== 1)
            throw new Qe("only accepts single character Uint8Array or Array");
          var r;
          if (
            (typeof t == "string"
              ? (r = t.charCodeAt(0))
              : typeof t == "number"
              ? (r = t)
              : (r = t[0]),
            r < 0 || r > 255)
          )
            throw new Qe(
              "only accepts number in a valid unsigned byte range 0-255",
            );
          if (this.buffer.length > this.position)
            this.buffer[this.position++] = r;
          else {
            var n = Te.alloc(e.BUFFER_SIZE + this.buffer.length);
            this.buffer.copy(n, 0, 0, this.buffer.length),
              (this.buffer = n),
              (this.buffer[this.position++] = r);
          }
        }),
        (e.prototype.write = function (t, r) {
          if (
            ((r = typeof r == "number" ? r : this.position),
            this.buffer.length < r + t.length)
          ) {
            var n = Te.alloc(this.buffer.length + t.length);
            this.buffer.copy(n, 0, 0, this.buffer.length), (this.buffer = n);
          }
          ArrayBuffer.isView(t)
            ? (this.buffer.set(mu(t), r),
              (this.position =
                r + t.byteLength > this.position
                  ? r + t.length
                  : this.position))
            : typeof t == "string" &&
              (this.buffer.write(t, r, t.length, "binary"),
              (this.position =
                r + t.length > this.position ? r + t.length : this.position));
        }),
        (e.prototype.read = function (t, r) {
          return (
            (r = r && r > 0 ? r : this.position), this.buffer.slice(t, t + r)
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
          var r = this.buffer.toString("base64"),
            n = Number(this.sub_type).toString(16);
          return t.legacy
            ? { $binary: r, $type: n.length === 1 ? "0" + n : n }
            : { $binary: { base64: r, subType: n.length === 1 ? "0" + n : n } };
        }),
        (e.prototype.toUUID = function () {
          if (this.sub_type === e.SUBTYPE_UUID)
            return new Fy(this.buffer.slice(0, this.position));
          throw new Vn(
            'Binary sub_type "'
              .concat(
                this.sub_type,
                '" is not supported for converting to UUID. Only "',
              )
              .concat(e.SUBTYPE_UUID, '" is currently supported.'),
          );
        }),
        (e.fromExtendedJSON = function (t, r) {
          r = r || {};
          var n, o;
          if (
            ("$binary" in t
              ? r.legacy && typeof t.$binary == "string" && "$type" in t
                ? ((o = t.$type ? parseInt(t.$type, 16) : 0),
                  (n = Te.from(t.$binary, "base64")))
                : typeof t.$binary != "string" &&
                  ((o = t.$binary.subType
                    ? parseInt(t.$binary.subType, 16)
                    : 0),
                  (n = Te.from(t.$binary.base64, "base64")))
              : "$uuid" in t && ((o = 4), (n = rp(t.$uuid))),
            !n)
          )
            throw new Qe(
              "Unexpected Binary Extended JSON format ".concat(
                JSON.stringify(t),
              ),
            );
          return o === zy ? new Fy(n) : new e(n, o);
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
  Object.defineProperty(Hn.prototype, "_bsontype", { value: "Binary" });
  var np = 16,
    Fy = (function (e) {
      fu(t, e);
      function t(r) {
        var n = this,
          o,
          i;
        if (r == null) o = t.generate();
        else if (r instanceof t) (o = Te.from(r.buffer)), (i = r.__id);
        else if (ArrayBuffer.isView(r) && r.byteLength === np) o = mu(r);
        else if (typeof r == "string") o = rp(r);
        else
          throw new Qe(
            "Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).",
          );
        return (n = e.call(this, o, zy) || this), (n.__id = i), n;
      }
      return (
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this.buffer;
          },
          set: function (r) {
            (this.buffer = r), t.cacheHexString && (this.__id = By(r));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toHexString = function (r) {
          if ((r === void 0 && (r = !0), t.cacheHexString && this.__id))
            return this.__id;
          var n = By(this.id, r);
          return t.cacheHexString && (this.__id = n), n;
        }),
        (t.prototype.toString = function (r) {
          return r ? this.id.toString(r) : this.toHexString();
        }),
        (t.prototype.toJSON = function () {
          return this.toHexString();
        }),
        (t.prototype.equals = function (r) {
          if (!r) return !1;
          if (r instanceof t) return r.id.equals(this.id);
          try {
            return new t(r).id.equals(this.id);
          } catch {
            return !1;
          }
        }),
        (t.prototype.toBinary = function () {
          return new Hn(this.id, Hn.SUBTYPE_UUID);
        }),
        (t.generate = function () {
          var r = My(np);
          return (
            (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), Te.from(r)
          );
        }),
        (t.isValid = function (r) {
          return r
            ? r instanceof t
              ? !0
              : typeof r == "string"
              ? Ly(r)
              : tp(r)
              ? r.length !== np
                ? !1
                : (r[6] & 240) === 64 && (r[8] & 128) === 128
              : !1
            : !1;
        }),
        (t.createFromHexString = function (r) {
          var n = rp(r);
          return new t(n);
        }),
        (t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (t.prototype.inspect = function () {
          return 'new UUID("'.concat(this.toHexString(), '")');
        }),
        t
      );
    })(Hn),
    gu = (function () {
      function e(t, r) {
        if (!(this instanceof e)) return new e(t, r);
        (this.code = t), (this.scope = r);
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
  Object.defineProperty(gu.prototype, "_bsontype", { value: "Code" });
  function IR(e) {
    return (
      wa(e) &&
      e.$id != null &&
      typeof e.$ref == "string" &&
      (e.$db == null || typeof e.$db == "string")
    );
  }
  var Sa = (function () {
    function e(t, r, n, o) {
      if (!(this instanceof e)) return new e(t, r, n, o);
      var i = t.split(".");
      i.length === 2 && ((n = i.shift()), (t = i.shift())),
        (this.collection = t),
        (this.oid = r),
        (this.db = n),
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
        var r = { $ref: this.collection, $id: this.oid };
        return (
          t.legacy ||
            (this.db && (r.$db = this.db), (r = Object.assign(r, this.fields))),
          r
        );
      }),
      (e.fromExtendedJSON = function (t) {
        var r = Object.assign({}, t);
        return (
          delete r.$ref,
          delete r.$id,
          delete r.$db,
          new e(t.$ref, t.$id, t.$db, r)
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
  Object.defineProperty(Sa.prototype, "_bsontype", { value: "DBRef" });
  var er = void 0;
  try {
    er = new WebAssembly.Instance(
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
  var jy = 1 << 16,
    PR = 1 << 24,
    Xo = jy * jy,
    Uy = Xo * Xo,
    Dy = Uy / 2,
    Wy = {},
    Vy = {},
    se = (function () {
      function e(t, r, n) {
        if ((t === void 0 && (t = 0), !(this instanceof e)))
          return new e(t, r, n);
        typeof t == "bigint"
          ? Object.assign(this, e.fromBigInt(t, !!r))
          : typeof t == "string"
          ? Object.assign(this, e.fromString(t, !!r))
          : ((this.low = t | 0), (this.high = r | 0), (this.unsigned = !!n)),
          Object.defineProperty(this, "__isLong__", {
            value: !0,
            configurable: !1,
            writable: !1,
            enumerable: !1,
          });
      }
      return (
        (e.fromBits = function (t, r, n) {
          return new e(t, r, n);
        }),
        (e.fromInt = function (t, r) {
          var n, o, i;
          return r
            ? ((t >>>= 0),
              (i = 0 <= t && t < 256) && ((o = Vy[t]), o)
                ? o
                : ((n = e.fromBits(t, (t | 0) < 0 ? -1 : 0, !0)),
                  i && (Vy[t] = n),
                  n))
            : ((t |= 0),
              (i = -128 <= t && t < 128) && ((o = Wy[t]), o)
                ? o
                : ((n = e.fromBits(t, t < 0 ? -1 : 0, !1)),
                  i && (Wy[t] = n),
                  n));
        }),
        (e.fromNumber = function (t, r) {
          if (isNaN(t)) return r ? e.UZERO : e.ZERO;
          if (r) {
            if (t < 0) return e.UZERO;
            if (t >= Uy) return e.MAX_UNSIGNED_VALUE;
          } else {
            if (t <= -Dy) return e.MIN_VALUE;
            if (t + 1 >= Dy) return e.MAX_VALUE;
          }
          return t < 0
            ? e.fromNumber(-t, r).neg()
            : e.fromBits(t % Xo | 0, (t / Xo) | 0, r);
        }),
        (e.fromBigInt = function (t, r) {
          return e.fromString(t.toString(), r);
        }),
        (e.fromString = function (t, r, n) {
          if (t.length === 0) throw Error("empty string");
          if (
            t === "NaN" ||
            t === "Infinity" ||
            t === "+Infinity" ||
            t === "-Infinity"
          )
            return e.ZERO;
          if (
            (typeof r == "number" ? ((n = r), (r = !1)) : (r = !!r),
            (n = n || 10),
            n < 2 || 36 < n)
          )
            throw RangeError("radix");
          var o;
          if ((o = t.indexOf("-")) > 0) throw Error("interior hyphen");
          if (o === 0) return e.fromString(t.substring(1), r, n).neg();
          for (
            var i = e.fromNumber(Math.pow(n, 8)), a = e.ZERO, s = 0;
            s < t.length;
            s += 8
          ) {
            var l = Math.min(8, t.length - s),
              u = parseInt(t.substring(s, s + l), n);
            if (l < 8) {
              var d = e.fromNumber(Math.pow(n, l));
              a = a.mul(d).add(e.fromNumber(u));
            } else (a = a.mul(i)), (a = a.add(e.fromNumber(u)));
          }
          return (a.unsigned = r), a;
        }),
        (e.fromBytes = function (t, r, n) {
          return n ? e.fromBytesLE(t, r) : e.fromBytesBE(t, r);
        }),
        (e.fromBytesLE = function (t, r) {
          return new e(
            t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
            t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
            r,
          );
        }),
        (e.fromBytesBE = function (t, r) {
          return new e(
            (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
            (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
            r,
          );
        }),
        (e.isLong = function (t) {
          return wa(t) && t.__isLong__ === !0;
        }),
        (e.fromValue = function (t, r) {
          return typeof t == "number"
            ? e.fromNumber(t, r)
            : typeof t == "string"
            ? e.fromString(t, r)
            : e.fromBits(t.low, t.high, typeof r == "boolean" ? r : t.unsigned);
        }),
        (e.prototype.add = function (t) {
          e.isLong(t) || (t = e.fromValue(t));
          var r = this.high >>> 16,
            n = this.high & 65535,
            o = this.low >>> 16,
            i = this.low & 65535,
            a = t.high >>> 16,
            s = t.high & 65535,
            l = t.low >>> 16,
            u = t.low & 65535,
            d = 0,
            f = 0,
            h = 0,
            m = 0;
          return (
            (m += i + u),
            (h += m >>> 16),
            (m &= 65535),
            (h += o + l),
            (f += h >>> 16),
            (h &= 65535),
            (f += n + s),
            (d += f >>> 16),
            (f &= 65535),
            (d += r + a),
            (d &= 65535),
            e.fromBits((h << 16) | m, (d << 16) | f, this.unsigned)
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
          var r = this.isNegative(),
            n = t.isNegative();
          return r && !n
            ? -1
            : !r && n
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
          if (er) {
            if (
              !this.unsigned &&
              this.high === -2147483648 &&
              t.low === -1 &&
              t.high === -1
            )
              return this;
            var r = (this.unsigned ? er.div_u : er.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(r, er.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? e.UZERO : e.ZERO;
          var n, o, i;
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
                (n = a.div(t).shl(1)),
                n.eq(e.ZERO)
                  ? t.isNegative()
                    ? e.ONE
                    : e.NEG_ONE
                  : ((o = this.sub(t.mul(n))), (i = n.add(o.div(t))), i)
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
            n = Math.max(1, Math.floor(o.toNumber() / t.toNumber()));
            for (
              var s = Math.ceil(Math.log(n) / Math.LN2),
                l = s <= 48 ? 1 : Math.pow(2, s - 48),
                u = e.fromNumber(n),
                d = u.mul(t);
              d.isNegative() || d.gt(o);

            )
              (n -= l), (u = e.fromNumber(n, this.unsigned)), (d = u.mul(t));
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
            r;
          for (r = 31; r > 0 && !(t & (1 << r)); r--);
          return this.high !== 0 ? r + 33 : r + 1;
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
          if ((e.isLong(t) || (t = e.fromValue(t)), er)) {
            var r = (this.unsigned ? er.rem_u : er.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(r, er.get_high(), this.unsigned);
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
          if ((e.isLong(t) || (t = e.fromValue(t)), er)) {
            var r = er.mul(this.low, this.high, t.low, t.high);
            return e.fromBits(r, er.get_high(), this.unsigned);
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
          var n = this.high >>> 16,
            o = this.high & 65535,
            i = this.low >>> 16,
            a = this.low & 65535,
            s = t.high >>> 16,
            l = t.high & 65535,
            u = t.low >>> 16,
            d = t.low & 65535,
            f = 0,
            h = 0,
            m = 0,
            g = 0;
          return (
            (g += a * d),
            (m += g >>> 16),
            (g &= 65535),
            (m += i * d),
            (h += m >>> 16),
            (m &= 65535),
            (m += a * u),
            (h += m >>> 16),
            (m &= 65535),
            (h += o * d),
            (f += h >>> 16),
            (h &= 65535),
            (h += i * u),
            (f += h >>> 16),
            (h &= 65535),
            (h += a * l),
            (f += h >>> 16),
            (h &= 65535),
            (f += n * d + o * u + i * l + a * s),
            (f &= 65535),
            e.fromBits((m << 16) | g, (f << 16) | h, this.unsigned)
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
          var r = this.high;
          if (t < 32) {
            var n = this.low;
            return e.fromBits(
              (n >>> t) | (r << (32 - t)),
              r >>> t,
              this.unsigned,
            );
          } else
            return t === 32
              ? e.fromBits(r, 0, this.unsigned)
              : e.fromBits(r >>> (t - 32), 0, this.unsigned);
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
            ? (this.high >>> 0) * Xo + (this.low >>> 0)
            : this.high * Xo + (this.low >>> 0);
        }),
        (e.prototype.toBigInt = function () {
          return BigInt(this.toString());
        }),
        (e.prototype.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (e.prototype.toBytesLE = function () {
          var t = this.high,
            r = this.low;
          return [
            r & 255,
            (r >>> 8) & 255,
            (r >>> 16) & 255,
            r >>> 24,
            t & 255,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            t >>> 24,
          ];
        }),
        (e.prototype.toBytesBE = function () {
          var t = this.high,
            r = this.low;
          return [
            t >>> 24,
            (t >>> 16) & 255,
            (t >>> 8) & 255,
            t & 255,
            r >>> 24,
            (r >>> 16) & 255,
            (r >>> 8) & 255,
            r & 255,
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
              var r = e.fromNumber(t),
                n = this.div(r),
                o = n.mul(r).sub(this);
              return n.toString(t) + o.toInt().toString(t);
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
        (e.fromExtendedJSON = function (t, r) {
          var n = e.fromString(t.$numberLong);
          return r && r.relaxed ? n.toNumber() : n;
        }),
        (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return this.inspect();
        }),
        (e.prototype.inspect = function () {
          return 'new Long("'
            .concat(this.toString(), '"')
            .concat(this.unsigned ? ", true" : "", ")");
        }),
        (e.TWO_PWR_24 = e.fromInt(PR)),
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
  var $R = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
    MR = /^(\+|-)?(Infinity|inf)$/i,
    LR = /^(\+|-)?NaN$/i,
    xa = 6111,
    op = -6176,
    Hy = 6176,
    BR = 34,
    ip = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    qy = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    Gy = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    zR = /^([-+])?(\d+)?$/,
    FR = 31,
    Ky = 16383,
    jR = 30,
    UR = 31;
  function Qy(e) {
    return !isNaN(parseInt(e, 10));
  }
  function DR(e) {
    var t = se.fromNumber(1e9),
      r = se.fromNumber(0);
    if (!e.parts[0] && !e.parts[1] && !e.parts[2] && !e.parts[3])
      return { quotient: e, rem: r };
    for (var n = 0; n <= 3; n++)
      (r = r.shiftLeft(32)),
        (r = r.add(new se(e.parts[n], 0))),
        (e.parts[n] = r.div(t).low),
        (r = r.modulo(t));
    return { quotient: e, rem: r };
  }
  function WR(e, t) {
    if (!e && !t) return { high: se.fromNumber(0), low: se.fromNumber(0) };
    var r = e.shiftRightUnsigned(32),
      n = new se(e.getLowBits(), 0),
      o = t.shiftRightUnsigned(32),
      i = new se(t.getLowBits(), 0),
      a = r.multiply(o),
      s = r.multiply(i),
      l = n.multiply(o),
      u = n.multiply(i);
    return (
      (a = a.add(s.shiftRightUnsigned(32))),
      (s = new se(s.getLowBits(), 0).add(l).add(u.shiftRightUnsigned(32))),
      (a = a.add(s.shiftRightUnsigned(32))),
      (u = s.shiftLeft(32).add(new se(u.getLowBits(), 0))),
      { high: a, low: u }
    );
  }
  function VR(e, t) {
    var r = e.high >>> 0,
      n = t.high >>> 0;
    if (r < n) return !0;
    if (r === n) {
      var o = e.low >>> 0,
        i = t.low >>> 0;
      if (o < i) return !0;
    }
    return !1;
  }
  function Yo(e, t) {
    throw new Qe(
      '"'.concat(e, '" is not a valid Decimal128 string - ').concat(t),
    );
  }
  var ap = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      if (typeof t == "string") this.bytes = e.fromString(t).bytes;
      else if (tp(t)) {
        if (t.byteLength !== 16)
          throw new Qe("Decimal128 must take a Buffer of 16 bytes");
        this.bytes = t;
      } else throw new Qe("Decimal128 must take a Buffer or string");
    }
    return (
      (e.fromString = function (t) {
        var r = !1,
          n = !1,
          o = !1,
          i = 0,
          a = 0,
          s = 0,
          l = 0,
          u = 0,
          d = [0],
          f = 0,
          h = 0,
          m = 0,
          g = 0,
          x = 0,
          R = 0,
          b = new se(0, 0),
          y = new se(0, 0),
          v = 0,
          k = 0;
        if (t.length >= 7e3)
          throw new Qe("" + t + " not a valid Decimal128 string");
        var C = t.match($R),
          A = t.match(MR),
          N = t.match(LR);
        if ((!C && !A && !N) || t.length === 0)
          throw new Qe("" + t + " not a valid Decimal128 string");
        if (C) {
          var I = C[2],
            P = C[4],
            z = C[5],
            H = C[6];
          P && H === void 0 && Yo(t, "missing exponent power"),
            P && I === void 0 && Yo(t, "missing exponent base"),
            P === void 0 && (z || H) && Yo(t, "missing e before exponent");
        }
        if (
          ((t[k] === "+" || t[k] === "-") && (r = t[k++] === "-"),
          !Qy(t[k]) && t[k] !== ".")
        ) {
          if (t[k] === "i" || t[k] === "I") return new e(Te.from(r ? qy : Gy));
          if (t[k] === "N") return new e(Te.from(ip));
        }
        for (; Qy(t[k]) || t[k] === "."; ) {
          if (t[k] === ".") {
            n && Yo(t, "contains multiple periods"), (n = !0), (k = k + 1);
            continue;
          }
          f < 34 &&
            (t[k] !== "0" || o) &&
            (o || (u = a),
            (o = !0),
            (d[h++] = parseInt(t[k], 10)),
            (f = f + 1)),
            o && (s = s + 1),
            n && (l = l + 1),
            (a = a + 1),
            (k = k + 1);
        }
        if (n && !a) throw new Qe("" + t + " not a valid Decimal128 string");
        if (t[k] === "e" || t[k] === "E") {
          var V = t.substr(++k).match(zR);
          if (!V || !V[2]) return new e(Te.from(ip));
          (x = parseInt(V[0], 10)), (k = k + V[0].length);
        }
        if (t[k]) return new e(Te.from(ip));
        if (((m = 0), !f))
          (m = 0), (g = 0), (d[0] = 0), (s = 1), (f = 1), (i = 0);
        else if (((g = f - 1), (i = s), i !== 1))
          for (; d[u + i - 1] === 0; ) i = i - 1;
        for (x <= l && l - x > 1 << 14 ? (x = op) : (x = x - l); x > xa; ) {
          if (((g = g + 1), g - m > BR)) {
            var Q = d.join("");
            if (Q.match(/^0+$/)) {
              x = xa;
              break;
            }
            Yo(t, "overflow");
          }
          x = x - 1;
        }
        for (; x < op || f < s; ) {
          if (g === 0 && i < f) {
            (x = op), (i = 0);
            break;
          }
          if ((f < s ? (s = s - 1) : (g = g - 1), x < xa)) x = x + 1;
          else {
            var Q = d.join("");
            if (Q.match(/^0+$/)) {
              x = xa;
              break;
            }
            Yo(t, "overflow");
          }
        }
        if (g - m + 1 < i) {
          var U = a;
          n && ((u = u + 1), (U = U + 1)), r && ((u = u + 1), (U = U + 1));
          var K = parseInt(t[u + g + 1], 10),
            Y = 0;
          if (K >= 5 && ((Y = 1), K === 5)) {
            for (Y = d[g] % 2 === 1 ? 1 : 0, R = u + g + 2; R < U; R++)
              if (parseInt(t[R], 10)) {
                Y = 1;
                break;
              }
          }
          if (Y) {
            for (var J = g; J >= 0; J--)
              if (++d[J] > 9 && ((d[J] = 0), J === 0))
                if (x < xa) (x = x + 1), (d[J] = 1);
                else return new e(Te.from(r ? qy : Gy));
          }
        }
        if (((b = se.fromNumber(0)), (y = se.fromNumber(0)), i === 0))
          (b = se.fromNumber(0)), (y = se.fromNumber(0));
        else if (g - m < 17) {
          var J = m;
          for (y = se.fromNumber(d[J++]), b = new se(0, 0); J <= g; J++)
            (y = y.multiply(se.fromNumber(10))),
              (y = y.add(se.fromNumber(d[J])));
        } else {
          var J = m;
          for (b = se.fromNumber(d[J++]); J <= g - 17; J++)
            (b = b.multiply(se.fromNumber(10))),
              (b = b.add(se.fromNumber(d[J])));
          for (y = se.fromNumber(d[J++]); J <= g; J++)
            (y = y.multiply(se.fromNumber(10))),
              (y = y.add(se.fromNumber(d[J])));
        }
        var D = WR(b, se.fromString("100000000000000000"));
        (D.low = D.low.add(y)),
          VR(D.low, y) && (D.high = D.high.add(se.fromNumber(1))),
          (v = x + Hy);
        var B = { low: se.fromNumber(0), high: se.fromNumber(0) };
        D.high
          .shiftRightUnsigned(49)
          .and(se.fromNumber(1))
          .equals(se.fromNumber(1))
          ? ((B.high = B.high.or(se.fromNumber(3).shiftLeft(61))),
            (B.high = B.high.or(
              se.fromNumber(v).and(se.fromNumber(16383).shiftLeft(47)),
            )),
            (B.high = B.high.or(D.high.and(se.fromNumber(0x7fffffffffff)))))
          : ((B.high = B.high.or(se.fromNumber(v & 16383).shiftLeft(49))),
            (B.high = B.high.or(D.high.and(se.fromNumber(562949953421311))))),
          (B.low = D.low),
          r && (B.high = B.high.or(se.fromString("9223372036854775808")));
        var L = Te.alloc(16);
        return (
          (k = 0),
          (L[k++] = B.low.low & 255),
          (L[k++] = (B.low.low >> 8) & 255),
          (L[k++] = (B.low.low >> 16) & 255),
          (L[k++] = (B.low.low >> 24) & 255),
          (L[k++] = B.low.high & 255),
          (L[k++] = (B.low.high >> 8) & 255),
          (L[k++] = (B.low.high >> 16) & 255),
          (L[k++] = (B.low.high >> 24) & 255),
          (L[k++] = B.high.low & 255),
          (L[k++] = (B.high.low >> 8) & 255),
          (L[k++] = (B.high.low >> 16) & 255),
          (L[k++] = (B.high.low >> 24) & 255),
          (L[k++] = B.high.high & 255),
          (L[k++] = (B.high.high >> 8) & 255),
          (L[k++] = (B.high.high >> 16) & 255),
          (L[k++] = (B.high.high >> 24) & 255),
          new e(L)
        );
      }),
      (e.prototype.toString = function () {
        for (var t, r = 0, n = new Array(36), o = 0; o < n.length; o++)
          n[o] = 0;
        var i = 0,
          a = !1,
          s,
          l = { parts: [0, 0, 0, 0] },
          u,
          d,
          f = [];
        i = 0;
        var h = this.bytes,
          m = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          g = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          x = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24),
          R = h[i++] | (h[i++] << 8) | (h[i++] << 16) | (h[i++] << 24);
        i = 0;
        var b = { low: new se(m, g), high: new se(x, R) };
        b.high.lessThan(se.ZERO) && f.push("-");
        var y = (R >> 26) & FR;
        if (y >> 3 === 3) {
          if (y === jR) return f.join("") + "Infinity";
          if (y === UR) return "NaN";
          (t = (R >> 15) & Ky), (s = 8 + ((R >> 14) & 1));
        } else (s = (R >> 14) & 7), (t = (R >> 17) & Ky);
        var v = t - Hy;
        if (
          ((l.parts[0] = (R & 16383) + ((s & 15) << 14)),
          (l.parts[1] = x),
          (l.parts[2] = g),
          (l.parts[3] = m),
          l.parts[0] === 0 &&
            l.parts[1] === 0 &&
            l.parts[2] === 0 &&
            l.parts[3] === 0)
        )
          a = !0;
        else
          for (d = 3; d >= 0; d--) {
            var k = 0,
              C = DR(l);
            if (((l = C.quotient), (k = C.rem.low), !!k))
              for (u = 8; u >= 0; u--)
                (n[d * 9 + u] = k % 10), (k = Math.floor(k / 10));
          }
        if (a) (r = 1), (n[i] = 0);
        else for (r = 36; !n[i]; ) (r = r - 1), (i = i + 1);
        var A = r - 1 + v;
        if (A >= 34 || A <= -7 || v > 0) {
          if (r > 34)
            return (
              f.push("".concat(0)),
              v > 0 ? f.push("E+".concat(v)) : v < 0 && f.push("E".concat(v)),
              f.join("")
            );
          f.push("".concat(n[i++])), (r = r - 1), r && f.push(".");
          for (var o = 0; o < r; o++) f.push("".concat(n[i++]));
          f.push("E"), A > 0 ? f.push("+".concat(A)) : f.push("".concat(A));
        } else if (v >= 0)
          for (var o = 0; o < r; o++) f.push("".concat(n[i++]));
        else {
          var N = r + v;
          if (N > 0) for (var o = 0; o < N; o++) f.push("".concat(n[i++]));
          else f.push("0");
          for (f.push("."); N++ < 0; ) f.push("0");
          for (var o = 0; o < r - Math.max(N - 1, 0); o++)
            f.push("".concat(n[i++]));
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
  Object.defineProperty(ap.prototype, "_bsontype", { value: "Decimal128" });
  var bu = (function () {
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
      (e.fromExtendedJSON = function (t, r) {
        var n = parseFloat(t.$numberDouble);
        return r && r.relaxed ? n : new e(n);
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
  Object.defineProperty(bu.prototype, "_bsontype", { value: "Double" });
  var yu = (function () {
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
      (e.fromExtendedJSON = function (t, r) {
        return r && r.relaxed
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
  Object.defineProperty(yu.prototype, "_bsontype", { value: "Int32" });
  var sp = (function () {
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
  Object.defineProperty(sp.prototype, "_bsontype", { value: "MaxKey" });
  var lp = (function () {
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
  Object.defineProperty(lp.prototype, "_bsontype", { value: "MinKey" });
  var HR = new RegExp("^[0-9a-fA-F]{24}$"),
    qn = null,
    Or = Symbol("id"),
    _t = (function () {
      function e(t) {
        if (!(this instanceof e)) return new e(t);
        var r;
        if (typeof t == "object" && t && "id" in t) {
          if (typeof t.id != "string" && !ArrayBuffer.isView(t.id))
            throw new Qe(
              "Argument passed in must have an id that is of type string or Buffer",
            );
          "toHexString" in t && typeof t.toHexString == "function"
            ? (r = Te.from(t.toHexString(), "hex"))
            : (r = t.id);
        } else r = t;
        if (r == null || typeof r == "number")
          this[Or] = e.generate(typeof r == "number" ? r : void 0);
        else if (ArrayBuffer.isView(r) && r.byteLength === 12)
          this[Or] = r instanceof Te ? r : mu(r);
        else if (typeof r == "string")
          if (r.length === 12) {
            var n = Te.from(r);
            if (n.byteLength === 12) this[Or] = n;
            else
              throw new Qe("Argument passed in must be a string of 12 bytes");
          } else if (r.length === 24 && HR.test(r))
            this[Or] = Te.from(r, "hex");
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
            return this[Or];
          },
          set: function (t) {
            (this[Or] = t), e.cacheHexString && (this.__id = t.toString("hex"));
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
          var r = e.getInc(),
            n = Te.alloc(12);
          return (
            n.writeUInt32BE(t, 0),
            qn === null && (qn = My(5)),
            (n[4] = qn[0]),
            (n[5] = qn[1]),
            (n[6] = qn[2]),
            (n[7] = qn[3]),
            (n[8] = qn[4]),
            (n[11] = r & 255),
            (n[10] = (r >> 8) & 255),
            (n[9] = (r >> 16) & 255),
            n
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
            return this[Or][11] === t[Or][11] && this[Or].equals(t[Or]);
          if (
            typeof t == "string" &&
            e.isValid(t) &&
            t.length === 12 &&
            tp(this.id)
          )
            return t === Te.prototype.toString.call(this.id, "latin1");
          if (typeof t == "string" && e.isValid(t) && t.length === 24)
            return t.toLowerCase() === this.toHexString();
          if (typeof t == "string" && e.isValid(t) && t.length === 12)
            return Te.from(t).equals(this.id);
          if (
            typeof t == "object" &&
            "toHexString" in t &&
            typeof t.toHexString == "function"
          ) {
            var r = t.toHexString(),
              n = this.toHexString().toLowerCase();
            return typeof r == "string" && r.toLowerCase() === n;
          }
          return !1;
        }),
        (e.prototype.getTimestamp = function () {
          var t = new Date(),
            r = this.id.readUInt32BE(0);
          return t.setTime(Math.floor(r) * 1e3), t;
        }),
        (e.createPk = function () {
          return new e();
        }),
        (e.createFromTime = function (t) {
          var r = Te.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          return r.writeUInt32BE(t, 0), new e(r);
        }),
        (e.createFromHexString = function (t) {
          if (typeof t > "u" || (t != null && t.length !== 24))
            throw new Qe(
              "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
            );
          return new e(Te.from(t, "hex"));
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
  Object.defineProperty(_t.prototype, "generate", {
    value: hu(function (e) {
      return _t.generate(e);
    }, "Please use the static `ObjectId.generate(time)` instead"),
  }),
    Object.defineProperty(_t.prototype, "getInc", {
      value: hu(function () {
        return _t.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(_t.prototype, "get_inc", {
      value: hu(function () {
        return _t.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(_t, "get_inc", {
      value: hu(function () {
        return _t.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(_t.prototype, "_bsontype", { value: "ObjectID" });
  function qR(e) {
    return e.split("").sort().join("");
  }
  var ka = (function () {
    function e(t, r) {
      if (!(this instanceof e)) return new e(t, r);
      if (
        ((this.pattern = t),
        (this.options = qR(r ?? "")),
        this.pattern.indexOf("\0") !== -1)
      )
        throw new Vn(
          "BSON Regex patterns cannot contain null bytes, found: ".concat(
            JSON.stringify(this.pattern),
          ),
        );
      if (this.options.indexOf("\0") !== -1)
        throw new Vn(
          "BSON Regex options cannot contain null bytes, found: ".concat(
            JSON.stringify(this.options),
          ),
        );
      for (var n = 0; n < this.options.length; n++)
        if (
          !(
            this.options[n] === "i" ||
            this.options[n] === "m" ||
            this.options[n] === "x" ||
            this.options[n] === "l" ||
            this.options[n] === "s" ||
            this.options[n] === "u"
          )
        )
          throw new Vn(
            "The regular expression option [".concat(
              this.options[n],
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
  Object.defineProperty(ka.prototype, "_bsontype", { value: "BSONRegExp" });
  var up = (function () {
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
  Object.defineProperty(up.prototype, "_bsontype", { value: "Symbol" });
  var GR = se,
    Xy = (function (e) {
      fu(t, e);
      function t(r, n) {
        var o = this;
        return o instanceof t
          ? (se.isLong(r)
              ? (o = e.call(this, r.low, r.high, !0) || this)
              : wa(r) && typeof r.t < "u" && typeof r.i < "u"
              ? (o = e.call(this, r.i, r.t, !0) || this)
              : (o = e.call(this, r, n, !0) || this),
            Object.defineProperty(o, "_bsontype", {
              value: "Timestamp",
              writable: !1,
              configurable: !1,
              enumerable: !1,
            }),
            o)
          : new t(r, n);
      }
      return (
        (t.prototype.toJSON = function () {
          return { $timestamp: this.toString() };
        }),
        (t.fromInt = function (r) {
          return new t(se.fromInt(r, !0));
        }),
        (t.fromNumber = function (r) {
          return new t(se.fromNumber(r, !0));
        }),
        (t.fromBits = function (r, n) {
          return new t(r, n);
        }),
        (t.fromString = function (r, n) {
          return new t(se.fromString(r, !0, n));
        }),
        (t.prototype.toExtendedJSON = function () {
          return { $timestamp: { t: this.high >>> 0, i: this.low >>> 0 } };
        }),
        (t.fromExtendedJSON = function (r) {
          return new t(r.$timestamp);
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
    })(GR);
  function KR(e) {
    return (
      wa(e) && Reflect.has(e, "_bsontype") && typeof e._bsontype == "string"
    );
  }
  var Yy = 2147483647,
    Jy = -2147483648,
    Zy = 9223372036854776e3,
    ev = -9223372036854776e3,
    QR = {
      $oid: _t,
      $binary: Hn,
      $uuid: Hn,
      $symbol: up,
      $numberInt: yu,
      $numberDecimal: ap,
      $numberDouble: bu,
      $numberLong: se,
      $minKey: lp,
      $maxKey: sp,
      $regex: ka,
      $regularExpression: ka,
      $timestamp: Xy,
    };
  function tv(e, t) {
    if ((t === void 0 && (t = {}), typeof e == "number")) {
      if (t.relaxed || t.legacy) return e;
      if (Math.floor(e) === e) {
        if (e >= Jy && e <= Yy) return new yu(e);
        if (e >= ev && e <= Zy) return se.fromNumber(e);
      }
      return new bu(e);
    }
    if (e == null || typeof e != "object") return e;
    if (e.$undefined) return null;
    for (
      var r = Object.keys(e).filter(function (f) {
          return f.startsWith("$") && e[f] != null;
        }),
        n = 0;
      n < r.length;
      n++
    ) {
      var o = QR[r[n]];
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
      return e.$scope && (s.$scope = tv(e.$scope)), gu.fromExtendedJSON(e);
    }
    if (IR(e) || e.$dbPointer) {
      var l = e.$ref ? e : e.$dbPointer;
      if (l instanceof Sa) return l;
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
        return Sa.fromExtendedJSON(l);
    }
    return e;
  }
  function XR(e, t) {
    return e.map(function (r, n) {
      t.seenObjects.push({ propertyName: "index ".concat(n), obj: null });
      try {
        return mn(r, t);
      } finally {
        t.seenObjects.pop();
      }
    });
  }
  function rv(e) {
    var t = e.toISOString();
    return e.getUTCMilliseconds() !== 0 ? t : t.slice(0, -5) + "Z";
  }
  function mn(e, t) {
    if ((typeof e == "object" || typeof e == "function") && e !== null) {
      var r = t.seenObjects.findIndex(function (b) {
        return b.obj === e;
      });
      if (r !== -1) {
        var n = t.seenObjects.map(function (b) {
            return b.propertyName;
          }),
          o = n
            .slice(0, r)
            .map(function (b) {
              return "".concat(b, " -> ");
            })
            .join(""),
          i = n[r],
          a =
            " -> " +
            n
              .slice(r + 1, n.length - 1)
              .map(function (b) {
                return "".concat(b, " -> ");
              })
              .join(""),
          s = n[n.length - 1],
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
    if (Array.isArray(e)) return XR(e, t);
    if (e === void 0) return null;
    if (e instanceof Date || TR(e)) {
      var d = e.getTime(),
        f = d > -1 && d < 2534023188e5;
      return t.legacy
        ? t.relaxed && f
          ? { $date: e.getTime() }
          : { $date: rv(e) }
        : t.relaxed && f
        ? { $date: rv(e) }
        : { $date: { $numberLong: e.getTime().toString() } };
    }
    if (typeof e == "number" && (!t.relaxed || !isFinite(e))) {
      if (Math.floor(e) === e) {
        var h = e >= Jy && e <= Yy,
          m = e >= ev && e <= Zy;
        if (h) return { $numberInt: e.toString() };
        if (m) return { $numberLong: e.toString() };
      }
      return { $numberDouble: e.toString() };
    }
    if (e instanceof RegExp || NR(e)) {
      var g = e.flags;
      if (g === void 0) {
        var x = e.toString().match(/[gimuy]*$/);
        x && (g = x[0]);
      }
      var R = new ka(e.source, g);
      return R.toExtendedJSON(t);
    }
    return e != null && typeof e == "object" ? JR(e, t) : e;
  }
  var YR = {
    Binary: function (e) {
      return new Hn(e.value(), e.sub_type);
    },
    Code: function (e) {
      return new gu(e.code, e.scope);
    },
    DBRef: function (e) {
      return new Sa(e.collection || e.namespace, e.oid, e.db, e.fields);
    },
    Decimal128: function (e) {
      return new ap(e.bytes);
    },
    Double: function (e) {
      return new bu(e.value);
    },
    Int32: function (e) {
      return new yu(e.value);
    },
    Long: function (e) {
      return se.fromBits(
        e.low != null ? e.low : e.low_,
        e.low != null ? e.high : e.high_,
        e.low != null ? e.unsigned : e.unsigned_,
      );
    },
    MaxKey: function () {
      return new sp();
    },
    MinKey: function () {
      return new lp();
    },
    ObjectID: function (e) {
      return new _t(e);
    },
    ObjectId: function (e) {
      return new _t(e);
    },
    BSONRegExp: function (e) {
      return new ka(e.pattern, e.options);
    },
    Symbol: function (e) {
      return new up(e.value);
    },
    Timestamp: function (e) {
      return Xy.fromBits(e.low, e.high);
    },
  };
  function JR(e, t) {
    if (e == null || typeof e != "object")
      throw new Vn("not an object instance");
    var r = e._bsontype;
    if (typeof r > "u") {
      var n = {};
      for (var o in e) {
        t.seenObjects.push({ propertyName: o, obj: null });
        try {
          var i = mn(e[o], t);
          o === "__proto__"
            ? Object.defineProperty(n, o, {
                value: i,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              })
            : (n[o] = i);
        } finally {
          t.seenObjects.pop();
        }
      }
      return n;
    } else if (KR(e)) {
      var a = e;
      if (typeof a.toExtendedJSON != "function") {
        var s = YR[e._bsontype];
        if (!s)
          throw new Qe("Unrecognized or invalid _bsontype: " + e._bsontype);
        a = s(a);
      }
      return (
        r === "Code" && a.scope
          ? (a = new gu(a.code, mn(a.scope, t)))
          : r === "DBRef" &&
            a.oid &&
            (a = new Sa(
              mn(a.collection, t),
              mn(a.oid, t),
              mn(a.db, t),
              mn(a.fields, t),
            )),
        a.toExtendedJSON(t)
      );
    } else throw new Vn("_bsontype must be a string, but was: " + typeof r);
  }
  var Gn;
  (function (e) {
    function t(i, a) {
      var s = Object.assign({}, { relaxed: !0, legacy: !1 }, a);
      return (
        typeof s.relaxed == "boolean" && (s.strict = !s.relaxed),
        typeof s.strict == "boolean" && (s.relaxed = !s.strict),
        JSON.parse(i, function (l, u) {
          if (l.indexOf("\0") !== -1)
            throw new Vn(
              "BSON Document field names cannot contain null bytes, found: ".concat(
                JSON.stringify(l),
              ),
            );
          return tv(u, s);
        })
      );
    }
    e.parse = t;
    function r(i, a, s, l) {
      s != null && typeof s == "object" && ((l = s), (s = 0)),
        a != null &&
          typeof a == "object" &&
          !Array.isArray(a) &&
          ((l = a), (a = void 0), (s = 0));
      var u = Object.assign({ relaxed: !0, legacy: !1 }, l, {
          seenObjects: [{ propertyName: "(root)", obj: null }],
        }),
        d = mn(i, u);
      return JSON.stringify(d, a, s);
    }
    e.stringify = r;
    function n(i, a) {
      return (a = a || {}), JSON.parse(r(i, a));
    }
    e.serialize = n;
    function o(i, a) {
      return (a = a || {}), t(JSON.stringify(i), a);
    }
    e.deserialize = o;
  })(Gn || (Gn = {}));
  var nv = $y();
  nv.Map
    ? nv.Map
    : (function () {
        function e(t) {
          t === void 0 && (t = []), (this._keys = []), (this._values = {});
          for (var r = 0; r < t.length; r++)
            if (t[r] != null) {
              var n = t[r],
                o = n[0],
                i = n[1];
              this._keys.push(o),
                (this._values[o] = { v: i, i: this._keys.length - 1 });
            }
        }
        return (
          (e.prototype.clear = function () {
            (this._keys = []), (this._values = {});
          }),
          (e.prototype.delete = function (t) {
            var r = this._values[t];
            return r == null
              ? !1
              : (delete this._values[t], this._keys.splice(r.i, 1), !0);
          }),
          (e.prototype.entries = function () {
            var t = this,
              r = 0;
            return {
              next: function () {
                var n = t._keys[r++];
                return {
                  value: n !== void 0 ? [n, t._values[n].v] : void 0,
                  done: n === void 0,
                };
              },
            };
          }),
          (e.prototype.forEach = function (t, r) {
            r = r || this;
            for (var n = 0; n < this._keys.length; n++) {
              var o = this._keys[n];
              t.call(r, this._values[o].v, o, r);
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
              r = 0;
            return {
              next: function () {
                var n = t._keys[r++];
                return { value: n !== void 0 ? n : void 0, done: n === void 0 };
              },
            };
          }),
          (e.prototype.set = function (t, r) {
            return this._values[t]
              ? ((this._values[t].v = r), this)
              : (this._keys.push(t),
                (this._values[t] = { v: r, i: this._keys.length - 1 }),
                this);
          }),
          (e.prototype.values = function () {
            var t = this,
              r = 0;
            return {
              next: function () {
                var n = t._keys[r++];
                return {
                  value: n !== void 0 ? t._values[n].v : void 0,
                  done: n === void 0,
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
    se.fromNumber(AR),
    se.fromNumber(_R);
  var cp = new Uint8Array(8);
  new DataView(cp.buffer, cp.byteOffset, cp.byteLength);
  var ZR = 1024 * 1024 * 17;
  Te.alloc(ZR);
  var ov = function (e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)
          (i || !(n in t)) &&
            (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
      return e.concat(i || Array.prototype.slice.call(t));
    },
    eA = (function () {
      function e(t, r, n) {
        (this.name = t),
          (this.version = r),
          (this.os = n),
          (this.type = "browser");
      }
      return e;
    })(),
    tA = (function () {
      function e(t) {
        (this.version = t),
          (this.type = "node"),
          (this.name = "node"),
          (this.os = process.platform);
      }
      return e;
    })(),
    rA = (function () {
      function e(t, r, n, o) {
        (this.name = t),
          (this.version = r),
          (this.os = n),
          (this.bot = o),
          (this.type = "bot-device");
      }
      return e;
    })(),
    nA = (function () {
      function e() {
        (this.type = "bot"),
          (this.bot = !0),
          (this.name = "bot"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    oA = (function () {
      function e() {
        (this.type = "react-native"),
          (this.name = "react-native"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    iA =
      /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    aA =
      /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    iv = 3,
    sA = [
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
      ["searchbot", iA],
    ],
    av = [
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
  function lA(e) {
    return e
      ? sv(e)
      : typeof document > "u" &&
        typeof navigator < "u" &&
        navigator.product === "ReactNative"
      ? new oA()
      : typeof navigator < "u"
      ? sv(navigator.userAgent)
      : dA();
  }
  function uA(e) {
    return (
      e !== "" &&
      sA.reduce(function (t, r) {
        var n = r[0],
          o = r[1];
        if (t) return t;
        var i = o.exec(e);
        return !!i && [n, i];
      }, !1)
    );
  }
  function sv(e) {
    var t = uA(e);
    if (!t) return null;
    var r = t[0],
      n = t[1];
    if (r === "searchbot") return new nA();
    var o = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
    o
      ? o.length < iv && (o = ov(ov([], o, !0), fA(iv - o.length), !0))
      : (o = []);
    var i = o.join("."),
      a = cA(e),
      s = aA.exec(e);
    return s && s[1] ? new rA(r, i, a, s[1]) : new eA(r, i, a);
  }
  function cA(e) {
    for (var t = 0, r = av.length; t < r; t++) {
      var n = av[t],
        o = n[0],
        i = n[1],
        a = i.exec(e);
      if (a) return o;
    }
    return null;
  }
  function dA() {
    var e = typeof process < "u" && process.version;
    return e ? new tA(process.version.slice(1)) : null;
  }
  function fA(e) {
    for (var t = [], r = 0; r < e; r++) t.push("0");
    return t;
  }
  class Nr {
    constructor() {
      if (!Nr.fetch)
        throw new Error(
          "DefaultNetworkTransport.fetch must be set before it's used",
        );
      if (!Nr.AbortController)
        throw new Error(
          "DefaultNetworkTransport.AbortController must be set before it's used",
        );
    }
    fetchWithCallbacks(t, r) {
      this.fetch(t)
        .then(async (n) => {
          const o = await n.text(),
            i = {};
          return (
            n.headers.forEach((a, s) => {
              i[s] = a;
            }),
            { statusCode: n.status, headers: i, body: o }
          );
        })
        .then((n) => r.onSuccess(n))
        .catch((n) => r.onError(n));
    }
    async fetch(t) {
      const { timeoutMs: r, url: n, ...o } = t,
        { signal: i, cancelTimeout: a } = this.createTimeoutSignal(r);
      try {
        return await Nr.fetch(n, { ...Nr.extraFetchOptions, signal: i, ...o });
      } finally {
        a();
      }
    }
    createTimeoutSignal(t) {
      if (typeof t == "number") {
        const r = new Nr.AbortController(),
          n = setTimeout(() => {
            r.abort();
          }, t);
        return {
          signal: r.signal,
          cancelTimeout: () => {
            clearTimeout(n);
          },
        };
      } else return { signal: void 0, cancelTimeout: () => {} };
    }
  }
  Nr.DEFAULT_HEADERS = { "Content-Type": "application/json" };
  const pA = (e) => {},
    vu = function (e) {
      return e && e.Math == Math && e;
    },
    wu =
      vu(typeof globalThis == "object" && globalThis) ||
      vu(typeof window == "object" && window) ||
      vu(typeof self == "object" && self) ||
      vu(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  pA(typeof __DEV__ < "u" && __DEV__),
    (Nr.fetch = wu.fetch.bind(wu)),
    (Nr.AbortController = wu.AbortController.bind(wu));
  const lv = "3.7.2",
    hA = lv,
    mA = typeof atob == "function",
    gA = typeof btoa == "function",
    Jo = typeof Buffer == "function",
    uv = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
    cv = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
    bA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    Ea = Array.prototype.slice.call(bA),
    Su = ((e) => {
      let t = {};
      return e.forEach((r, n) => (t[r] = n)), t;
    })(Ea),
    yA =
      /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    pt = String.fromCharCode.bind(String),
    dv =
      typeof Uint8Array.from == "function"
        ? Uint8Array.from.bind(Uint8Array)
        : (e, t = (r) => r) =>
            new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
    fv = (e) =>
      e.replace(/=/g, "").replace(/[+\/]/g, (t) => (t == "+" ? "-" : "_")),
    pv = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
    hv = (e) => {
      let t,
        r,
        n,
        o,
        i = "";
      const a = e.length % 3;
      for (let s = 0; s < e.length; ) {
        if (
          (r = e.charCodeAt(s++)) > 255 ||
          (n = e.charCodeAt(s++)) > 255 ||
          (o = e.charCodeAt(s++)) > 255
        )
          throw new TypeError("invalid character found");
        (t = (r << 16) | (n << 8) | o),
          (i +=
            Ea[(t >> 18) & 63] +
            Ea[(t >> 12) & 63] +
            Ea[(t >> 6) & 63] +
            Ea[t & 63]);
      }
      return a ? i.slice(0, a - 3) + "===".substring(a) : i;
    },
    dp = gA
      ? (e) => btoa(e)
      : Jo
      ? (e) => Buffer.from(e, "binary").toString("base64")
      : hv,
    fp = Jo
      ? (e) => Buffer.from(e).toString("base64")
      : (e) => {
          let t = [];
          for (let r = 0, n = e.length; r < n; r += 4096)
            t.push(pt.apply(null, e.subarray(r, r + 4096)));
          return dp(t.join(""));
        },
    xu = (e, t = !1) => (t ? fv(fp(e)) : fp(e)),
    vA = (e) => {
      if (e.length < 2) {
        var t = e.charCodeAt(0);
        return t < 128
          ? e
          : t < 2048
          ? pt(192 | (t >>> 6)) + pt(128 | (t & 63))
          : pt(224 | ((t >>> 12) & 15)) +
            pt(128 | ((t >>> 6) & 63)) +
            pt(128 | (t & 63));
      } else {
        var t =
          65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
        return (
          pt(240 | ((t >>> 18) & 7)) +
          pt(128 | ((t >>> 12) & 63)) +
          pt(128 | ((t >>> 6) & 63)) +
          pt(128 | (t & 63))
        );
      }
    },
    wA = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    mv = (e) => e.replace(wA, vA),
    gv = Jo
      ? (e) => Buffer.from(e, "utf8").toString("base64")
      : cv
      ? (e) => fp(cv.encode(e))
      : (e) => dp(mv(e)),
    Zo = (e, t = !1) => (t ? fv(gv(e)) : gv(e)),
    bv = (e) => Zo(e, !0),
    SA =
      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    xA = (e) => {
      switch (e.length) {
        case 4:
          var t =
              ((7 & e.charCodeAt(0)) << 18) |
              ((63 & e.charCodeAt(1)) << 12) |
              ((63 & e.charCodeAt(2)) << 6) |
              (63 & e.charCodeAt(3)),
            r = t - 65536;
          return pt((r >>> 10) + 55296) + pt((r & 1023) + 56320);
        case 3:
          return pt(
            ((15 & e.charCodeAt(0)) << 12) |
              ((63 & e.charCodeAt(1)) << 6) |
              (63 & e.charCodeAt(2)),
          );
        default:
          return pt(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
      }
    },
    yv = (e) => e.replace(SA, xA),
    vv = (e) => {
      if (((e = e.replace(/\s+/g, "")), !yA.test(e)))
        throw new TypeError("malformed base64.");
      e += "==".slice(2 - (e.length & 3));
      let t,
        r = "",
        n,
        o;
      for (let i = 0; i < e.length; )
        (t =
          (Su[e.charAt(i++)] << 18) |
          (Su[e.charAt(i++)] << 12) |
          ((n = Su[e.charAt(i++)]) << 6) |
          (o = Su[e.charAt(i++)])),
          (r +=
            n === 64
              ? pt((t >> 16) & 255)
              : o === 64
              ? pt((t >> 16) & 255, (t >> 8) & 255)
              : pt((t >> 16) & 255, (t >> 8) & 255, t & 255));
      return r;
    },
    pp = mA
      ? (e) => atob(pv(e))
      : Jo
      ? (e) => Buffer.from(e, "base64").toString("binary")
      : vv,
    wv = Jo
      ? (e) => dv(Buffer.from(e, "base64"))
      : (e) => dv(pp(e), (t) => t.charCodeAt(0)),
    Sv = (e) => wv(xv(e)),
    kA = Jo
      ? (e) => Buffer.from(e, "base64").toString("utf8")
      : uv
      ? (e) => uv.decode(wv(e))
      : (e) => yv(pp(e)),
    xv = (e) => pv(e.replace(/[-_]/g, (t) => (t == "-" ? "+" : "/"))),
    hp = (e) => kA(xv(e)),
    EA = (e) => {
      if (typeof e != "string") return !1;
      const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
    },
    kv = (e) => ({ value: e, enumerable: !1, writable: !0, configurable: !0 }),
    Ev = function () {
      const e = (t, r) => Object.defineProperty(String.prototype, t, kv(r));
      e("fromBase64", function () {
        return hp(this);
      }),
        e("toBase64", function (t) {
          return Zo(this, t);
        }),
        e("toBase64URI", function () {
          return Zo(this, !0);
        }),
        e("toBase64URL", function () {
          return Zo(this, !0);
        }),
        e("toUint8Array", function () {
          return Sv(this);
        });
    },
    Cv = function () {
      const e = (t, r) => Object.defineProperty(Uint8Array.prototype, t, kv(r));
      e("toBase64", function (t) {
        return xu(this, t);
      }),
        e("toBase64URI", function () {
          return xu(this, !0);
        }),
        e("toBase64URL", function () {
          return xu(this, !0);
        });
    },
    CA = () => {
      Ev(), Cv();
    },
    ku = {
      version: lv,
      VERSION: hA,
      atob: pp,
      atobPolyfill: vv,
      btoa: dp,
      btoaPolyfill: hv,
      fromBase64: hp,
      toBase64: Zo,
      encode: Zo,
      encodeURI: bv,
      encodeURL: bv,
      utob: mv,
      btou: yv,
      decode: hp,
      isValid: EA,
      fromUint8Array: xu,
      toUint8Array: Sv,
      extendString: Ev,
      extendUint8Array: Cv,
      extendBuiltins: CA,
    },
    OA = { relaxed: !1 };
  function Ov(e) {
    return Gn.serialize(e, OA);
  }
  function Nv(e) {
    return Array.isArray(e)
      ? e.map((t) => Gn.deserialize(t))
      : Gn.deserialize(e);
  }
  var mp;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(mp || (mp = {}));
  var pr;
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
  })(pr || (pr = {}));
  const Tv = {
    [pr.NAME]: "name",
    [pr.EMAIL]: "email",
    [pr.PICTURE]: "pictureUrl",
    [pr.FIRST_NAME]: "firstName",
    [pr.LAST_NAME]: "lastName",
    [pr.GENDER]: "gender",
    [pr.BIRTHDAY]: "birthday",
    [pr.MIN_AGE]: "minAge",
    [pr.MAX_AGE]: "maxAge",
  };
  class Rv {
    constructor(t) {
      if (
        ((this.type = mp.Normal),
        (this.identities = []),
        typeof t == "object" && t !== null)
      ) {
        const { type: r, identities: n, data: o } = t;
        if (typeof r == "string") this.type = r;
        else throw new Error("Expected 'type' in the response body");
        if (Array.isArray(n))
          this.identities = n.map((i) => {
            const { id: a, provider_type: s } = i;
            return { id: a, providerType: s };
          });
        else throw new Error("Expected 'identities' in the response body");
        if (typeof o == "object" && o !== null) {
          const i = Object.fromEntries(
            Object.entries(o).map(([a, s]) => (a in Tv ? [Tv[a], s] : [a, s])),
          );
          this.data = Nv(i);
        } else throw new Error("Expected 'data' in the response body");
      } else this.data = {};
    }
  }
  class hr {
    constructor(t, r) {
      (this.storage = t), (this.keyPart = r);
    }
    get(t) {
      return this.storage.get(this.keyPart + hr.PART_SEPARATOR + t);
    }
    set(t, r) {
      return this.storage.set(this.keyPart + hr.PART_SEPARATOR + t, r);
    }
    remove(t) {
      return this.storage.remove(this.keyPart + hr.PART_SEPARATOR + t);
    }
    prefix(t) {
      return new hr(this, t);
    }
    clear(t = "") {
      return this.storage.clear(this.keyPart + hr.PART_SEPARATOR + t);
    }
    addListener(t) {
      return this.storage.addListener(t);
    }
    removeListener(t) {
      return this.storage.addListener(t);
    }
  }
  hr.PART_SEPARATOR = ":";
  class NA {
    constructor() {
      (this.storage = {}), (this.listeners = new Set());
    }
    get(t) {
      return t in this.storage ? this.storage[t] : null;
    }
    set(t, r) {
      (this.storage[t] = r), this.fireListeners();
    }
    remove(t) {
      delete this.storage[t], this.fireListeners();
    }
    prefix(t) {
      return new hr(this, t);
    }
    clear(t) {
      for (const r of Object.keys(this.storage))
        (!t || r.startsWith(t)) && delete this.storage[r];
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
  const gp = "accessToken",
    bp = "refreshToken",
    yp = "profile",
    vp = "providerType";
  class TA extends hr {
    constructor(t, r) {
      super(t, `user(${r})`);
    }
    get accessToken() {
      return this.get(gp);
    }
    set accessToken(t) {
      t === null ? this.remove(gp) : this.set(gp, t);
    }
    get refreshToken() {
      return this.get(bp);
    }
    set refreshToken(t) {
      t === null ? this.remove(bp) : this.set(bp, t);
    }
    get profile() {
      const t = this.get(yp);
      if (t) {
        const r = new Rv();
        return Object.assign(r, JSON.parse(t)), r;
      }
    }
    set profile(t) {
      t ? this.set(yp, JSON.stringify(t)) : this.remove(yp);
    }
    get providerType() {
      const t = this.get(vp);
      if (t) return t;
    }
    set providerType(t) {
      t ? this.set(vp, t) : this.remove(vp);
    }
  }
  function wp(e) {
    return Object.fromEntries(
      Object.entries(e).filter((t) => typeof t[1] < "u"),
    );
  }
  function RA(e, t) {
    let r = "";
    for (let n = 0; n < e; n++) r += t[Math.floor(Math.random() * t.length)];
    return r;
  }
  function Av(e, t = !0) {
    const r = wp(e);
    return (
      (t && Object.keys(r).length > 0 ? "?" : "") +
      Object.entries(r)
        .map(([n, o]) => `${n}=${encodeURIComponent(o)}`)
        .join("&")
    );
  }
  function AA(e) {
    const t = e[0] === "?" ? e.substr(1) : e;
    return Object.fromEntries(
      t
        .split("&")
        .filter((r) => r.length > 0)
        .map((r) => r.split("="))
        .map(([r, n]) => [r, decodeURIComponent(n)]),
    );
  }
  const _A = [
    "inspect",
    "callFunction",
    "callFunctionStreaming",
    ...Object.getOwnPropertyNames(Object.prototype),
  ];
  function IA(e) {
    for (const t of e)
      if (typeof t == "object" && t)
        for (const [r, n] of Object.entries(t)) n === void 0 && delete t[r];
    return e;
  }
  function PA(e) {
    return IA(e).map((t) => (typeof t == "object" ? Ov(t) : t));
  }
  class Eu {
    constructor(t, r = {}) {
      (this.fetcher = t),
        (this.serviceName = r.serviceName),
        (this.argsTransformation = r.argsTransformation || PA);
    }
    static create(t, r = {}) {
      const n = new Eu(t, r);
      return new Proxy(n, {
        get(o, i, a) {
          if (typeof i == "string" && _A.indexOf(i) === -1)
            return o.callFunction.bind(o, i);
          {
            const s = Reflect.get(o, i, a);
            return typeof s == "function" ? s.bind(o) : s;
          }
        },
      });
    }
    async callFunction(t, ...r) {
      const n = {
        name: t,
        arguments: this.argsTransformation ? this.argsTransformation(r) : r,
      };
      this.serviceName && (n.service = this.serviceName);
      const o = this.fetcher.appRoute;
      return this.fetcher.fetchJSON({
        method: "POST",
        path: o.functionsCall().path,
        body: n,
      });
    }
    callFunctionStreaming(t, ...r) {
      const n = {
        name: t,
        arguments: this.argsTransformation ? this.argsTransformation(r) : r,
      };
      this.serviceName && (n.service = this.serviceName);
      const o = this.fetcher.appRoute,
        i = Av({ baas_request: ku.encode(JSON.stringify(n)) });
      return this.fetcher.fetchStream({
        method: "GET",
        path: o.functionsCall().path + i,
      });
    }
  }
  class $A {
    constructor(t, r = "local-userpass") {
      (this.fetcher = t), (this.providerName = r);
    }
    async registerUser(t) {
      const r = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: r.emailPasswordAuth(this.providerName).register().path,
        body: t,
      });
    }
    async confirmUser(t) {
      const r = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: r.emailPasswordAuth(this.providerName).confirm().path,
        body: t,
      });
    }
    async resendConfirmationEmail(t) {
      const r = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: r.emailPasswordAuth(this.providerName).confirmSend().path,
        body: t,
      });
    }
    async retryCustomConfirmation(t) {
      const r = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: r.emailPasswordAuth(this.providerName).confirmCall().path,
        body: t,
      });
    }
    async resetPassword(t) {
      const r = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: r.emailPasswordAuth(this.providerName).reset().path,
        body: t,
      });
    }
    async sendResetPasswordEmail(t) {
      const r = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: r.emailPasswordAuth(this.providerName).resetSend().path,
        body: t,
      });
    }
    async callResetPasswordFunction(t, ...r) {
      const n = this.fetcher.appRoute;
      await this.fetcher.fetchJSON({
        method: "POST",
        path: n.emailPasswordAuth(this.providerName).resetCall().path,
        body: { ...t, arguments: r },
      });
    }
  }
  function MA() {
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
  var tr = { api: MA };
  class LA {
    constructor(t) {
      this.fetcher = t;
    }
    create(t) {
      return this.fetcher.fetchJSON({
        method: "POST",
        body: { name: t },
        path: tr.api().auth().apiKeys().path,
        tokenType: "refresh",
      });
    }
    fetch(t) {
      return this.fetcher.fetchJSON({
        method: "GET",
        path: tr.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    fetchAll() {
      return this.fetcher.fetchJSON({
        method: "GET",
        tokenType: "refresh",
        path: tr.api().auth().apiKeys().path,
      });
    }
    async delete(t) {
      await this.fetcher.fetchJSON({
        method: "DELETE",
        path: tr.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    async enable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: tr.api().auth().apiKeys().key(t).enable().path,
        tokenType: "refresh",
      });
    }
    async disable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: tr.api().auth().apiKeys().key(t).disable().path,
        tokenType: "refresh",
      });
    }
  }
  let Sp = null;
  function BA(e) {
    Sp = e;
  }
  function Ca() {
    if (Sp) return Sp;
    throw new Error("Cannot get environment before it's set");
  }
  class xp extends Error {
    constructor({ message: t, code: r }) {
      super(t), (this.name = "WatchError"), (this.code = r);
    }
  }
  var kt;
  (function (e) {
    (e.NEED_DATA = "NEED_DATA"),
      (e.HAVE_EVENT = "HAVE_EVENT"),
      (e.HAVE_ERROR = "HAVE_ERROR");
  })(kt || (kt = {}));
  class zA {
    constructor() {
      (this._state = kt.NEED_DATA),
        (this._error = null),
        (this._textDecoder = new (Ca().TextDecoder)()),
        (this._buffer = ""),
        (this._bufferOffset = 0),
        (this._eventType = ""),
        (this._dataBuffer = "");
    }
    feedBuffer(t) {
      this.assertState(kt.NEED_DATA),
        (this._buffer += this._textDecoder.decode(t, { stream: !0 })),
        this.advanceBufferState();
    }
    feedLine(t) {
      if (
        (this.assertState(kt.NEED_DATA),
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
      const r = t.indexOf(":"),
        n = t.substr(0, r);
      let o = r === -1 ? "" : t.substr(r + 1);
      o.startsWith(" ") && (o = o.substr(1)),
        n === "event"
          ? (this._eventType = o)
          : n === "data" &&
            ((this._dataBuffer += o),
            (this._dataBuffer += `
`));
    }
    feedSse(t) {
      this.assertState(kt.NEED_DATA);
      const r = t.data.indexOf("%");
      if (r !== -1) {
        let n = "",
          o = 0;
        for (let i = r; i !== -1; i = t.data.indexOf("%", o)) {
          n += t.data.substr(o, i - o);
          const a = t.data.substr(i, 3);
          a === "%25"
            ? (n += "%")
            : a === "%0A"
            ? (n += `
`)
            : a === "%0D"
            ? (n += "\r")
            : (n += a),
            (o = i + a.length);
        }
        (n += t.data.substr(o)), (t.data = n);
      }
      if (!t.eventType || t.eventType === "message") {
        try {
          const n = Gn.parse(t.data);
          if (typeof n == "object") {
            (this._nextEvent = n), (this._state = kt.HAVE_EVENT);
            return;
          }
        } catch {}
        (this._state = kt.HAVE_ERROR),
          (this._error = new xp({
            message: "server returned malformed event: " + t.data,
            code: "bad bson parse",
          }));
      } else if (t.eventType === "error") {
        (this._state = kt.HAVE_ERROR),
          (this._error = new xp({ message: t.data, code: "unknown" }));
        try {
          const { error_code: n, error: o } = Gn.parse(t.data);
          if (typeof n != "string" || typeof o != "string") return;
          this._error = new xp({ message: o, code: n });
        } catch {
          return;
        }
      }
    }
    get state() {
      return this._state;
    }
    nextEvent() {
      this.assertState(kt.HAVE_EVENT);
      const t = this._nextEvent;
      return (this._state = kt.NEED_DATA), this.advanceBufferState(), t;
    }
    get error() {
      return this._error;
    }
    advanceBufferState() {
      for (this.assertState(kt.NEED_DATA); this.state === kt.NEED_DATA; ) {
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
  class FA {
    constructor(t, r, n, o) {
      (this.functions = Eu.create(t, { serviceName: r })),
        (this.databaseName = n),
        (this.collectionName = o),
        (this.serviceName = r),
        (this.fetcher = t);
    }
    find(t = {}, r = {}) {
      return this.functions.find({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        project: r.projection,
        sort: r.sort,
        limit: r.limit,
      });
    }
    findOne(t = {}, r = {}) {
      return this.functions.findOne({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        project: r.projection,
        sort: r.sort,
      });
    }
    findOneAndUpdate(t = {}, r, n = {}) {
      return this.functions.findOneAndUpdate({
        database: this.databaseName,
        collection: this.collectionName,
        filter: t,
        update: r,
        sort: n.sort,
        projection: n.projection,
        upsert: n.upsert,
        returnNewDocument: n.returnNewDocument,
      });
    }
    findOneAndReplace(t = {}, r, n = {}) {
      return this.functions.findOneAndReplace({
        database: this.databaseName,
        collection: this.collectionName,
        filter: t,
        update: r,
        sort: n.sort,
        projection: n.projection,
        upsert: n.upsert,
        returnNewDocument: n.returnNewDocument,
      });
    }
    findOneAndDelete(t = {}, r = {}) {
      return this.functions.findOneAndReplace({
        database: this.databaseName,
        collection: this.collectionName,
        filter: t,
        sort: r.sort,
        projection: r.projection,
      });
    }
    aggregate(t) {
      return this.functions.aggregate({
        database: this.databaseName,
        collection: this.collectionName,
        pipeline: t,
      });
    }
    count(t = {}, r = {}) {
      return this.functions.count({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        limit: r.limit,
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
    updateOne(t, r, n = {}) {
      return this.functions.updateOne({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        update: r,
        upsert: n.upsert,
        arrayFilters: n.arrayFilters,
      });
    }
    updateMany(t, r, n = {}) {
      return this.functions.updateMany({
        database: this.databaseName,
        collection: this.collectionName,
        query: t,
        update: r,
        upsert: n.upsert,
        arrayFilters: n.arrayFilters,
      });
    }
    watch({ ids: t, filter: r } = {}) {
      const n = this.functions
          .callFunctionStreaming("watch", {
            database: this.databaseName,
            collection: this.collectionName,
            ids: t,
            filter: r,
          })
          .then((a) => a[Symbol.asyncIterator]()),
        o = this.watchImpl(n),
        i = o.return;
      return Object.assign(o, {
        return(a) {
          return n.then((s) => (s.return ? s.return(a) : void 0)), i.call(o, a);
        },
      });
    }
    async *watchImpl(t) {
      const r = new zA(),
        n = t.then((o) => ({ [Symbol.asyncIterator]: () => o }));
      for await (const o of await n)
        if (o) {
          for (r.feedBuffer(o); r.state == kt.HAVE_EVENT; ) yield r.nextEvent();
          if (r.state == kt.HAVE_ERROR) throw r.error;
        }
    }
  }
  function jA(e, t, r, n) {
    return new FA(e, t, r, n);
  }
  function UA(e, t, r) {
    return { collection: jA.bind(null, e, t, r) };
  }
  function DA(e, t = "mongo-db") {
    return { db: UA.bind(null, e, t) };
  }
  const WA = "000000000000000000000000";
  var Kn;
  (function (e) {
    (e.Active = "active"),
      (e.LoggedOut = "logged-out"),
      (e.Removed = "removed");
  })(Kn || (Kn = {}));
  var _v;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(_v || (_v = {}));
  class Iv {
    constructor(t) {
      if (
        ((this.app = t.app),
        (this.id = t.id),
        (this.storage = new TA(this.app.storage, this.id)),
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
        const r = this.storage.providerType;
        if (((this._profile = this.storage.profile), r)) this.providerType = r;
        else throw new Error("Storage is missing a provider type");
      }
      (this.fetcher = this.app.fetcher.clone({
        userContext: { currentUser: this },
      })),
        (this.apiKeys = new LA(this.fetcher)),
        (this.functions = Eu.create(this.fetcher));
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
          ? Kn.LoggedOut
          : Kn.Active
        : Kn.Removed;
    }
    get isLoggedIn() {
      return this.state === Kn.Active;
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
          const r = JSON.parse(ku.decode(t)).baas_device_id;
          if (typeof r == "string" && r !== WA) return r;
        }
      }
      return null;
    }
    async refreshProfile() {
      const t = await this.fetcher.fetchJSON({
        method: "GET",
        path: tr.api().auth().profile().path,
      });
      (this._profile = new Rv(t)), (this.storage.profile = this._profile);
    }
    async logOut() {
      try {
        this._refreshToken !== null &&
          (await this.fetcher.fetchJSON({
            method: "DELETE",
            path: tr.api().auth().session().path,
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
      const r = await this.app.authenticator.authenticate(t, this);
      if (this.id !== r.userId) {
        const n = `got user id ${r.userId} expected ${this.id}`;
        throw new Error(`Link response ment for another user (${n})`);
      }
      (this.accessToken = r.accessToken), await this.refreshProfile();
    }
    async refreshAccessToken() {
      const t = await this.fetcher.fetchJSON({
          method: "POST",
          path: tr.api().auth().session().path,
          tokenType: "refresh",
        }),
        { access_token: r } = t;
      if (typeof r == "string") this.accessToken = r;
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
    callFunction(t, ...r) {
      return this.functions.callFunction(t, ...r);
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
      return DA(this.fetcher, t);
    }
    decodeAccessToken() {
      if (this.accessToken) {
        const t = this.accessToken.split(".");
        if (t.length !== 3)
          throw new Error("Expected an access token with three parts");
        const r = t[1],
          n = ku.decode(r),
          o = JSON.parse(n),
          { exp: i, iat: a, sub: s, user_data: l = {} } = o;
        if (typeof i != "number")
          throw new Error("Failed to decode access token 'exp'");
        if (typeof a != "number")
          throw new Error("Failed to decode access token 'iat'");
        return { expires: i, issuedAt: a, subject: s, userData: l };
      } else throw new Error("Missing an access token");
    }
  }
  class rr {
    constructor(t, r, n) {
      (this.providerName = t), (this.providerType = r), (this.payload = n);
    }
    static anonymous() {
      return new rr("anon-user", "anon-user", {});
    }
    static apiKey(t) {
      return new rr("api-key", "api-key", { key: t });
    }
    static emailPassword(t, r) {
      return new rr("local-userpass", "local-userpass", {
        username: t,
        password: r,
      });
    }
    static function(t) {
      return new rr("custom-function", "custom-function", t);
    }
    static jwt(t) {
      return new rr("custom-token", "custom-token", { token: t });
    }
    static google(t) {
      return new rr("oauth2-google", "oauth2-google", rr.derivePayload(t));
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
      return new rr(
        "oauth2-facebook",
        "oauth2-facebook",
        t.includes("://") ? { redirectUrl: t } : { accessToken: t },
      );
    }
    static apple(t) {
      return new rr(
        "oauth2-apple",
        "oauth2-apple",
        t.includes("://") ? { redirectUrl: t } : { id_token: t },
      );
    }
  }
  const Pv = "userIds",
    $v = "deviceId";
  class VA extends hr {
    constructor(t, r) {
      super(t, `app(${r})`);
    }
    getUserIds() {
      const t = this.get(Pv),
        r = t ? JSON.parse(t) : [];
      if (Array.isArray(r)) return [...new Set(r)];
      throw new Error("Expected the user ids to be an array");
    }
    setUserIds(t, r) {
      if (r) {
        const n = this.getUserIds();
        for (const o of n) t.indexOf(o) === -1 && t.push(o);
      }
      this.set(Pv, JSON.stringify(t));
    }
    removeUserId(t) {
      const r = this.getUserIds().filter((n) => n !== t);
      this.setUserIds(r, !1);
    }
    getDeviceId() {
      return this.get($v);
    }
    setDeviceId(t) {
      this.set($v, t);
    }
  }
  const HA = "abcdefghijklmnopqrstuvwxyz",
    qA = 100,
    GA = {
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
  class ei {
    constructor(t, r = Ca().openWindow) {
      (this.storage = t.prefix("oauth2")), (this.openWindow = r);
    }
    static parseRedirectLocation(t) {
      const r = AA(t),
        n = {};
      for (const [o, i] of Object.entries(GA)) {
        const a = r[o];
        a && (n[i] = a);
      }
      return n;
    }
    static handleRedirect(t, r = Ca().defaultStorage) {
      const n = ei.parseRedirectLocation(t),
        { state: o, error: i } = n;
      if (typeof o == "string") {
        const a = r.prefix("oauth2");
        ei.getStateStorage(a, o).set("result", JSON.stringify(n));
      } else
        throw i
          ? new Error(`Failed to handle OAuth 2.0 redirect: ${i}`)
          : new Error("Failed to handle OAuth 2.0 redirect.");
    }
    static decodeAuthInfo(t) {
      const r = (t || "").split("$");
      if (r.length === 4) {
        const [n, o, i, a] = r;
        return { accessToken: n, refreshToken: o, userId: i, deviceId: a };
      } else throw new Error("Failed to decode 'authInfo' into ids and tokens");
    }
    static getStateStorage(t, r) {
      return t.prefix(`state(${r})`);
    }
    openWindowAndWaitForRedirect(t, r) {
      const n = ei.getStateStorage(this.storage, r);
      return new Promise((o, i) => {
        let a = null,
          s;
        const l = () => {
          const u = n.get("result");
          if (u) {
            const d = JSON.parse(u);
            n.removeListener(l), n.clear();
            try {
              a && (clearInterval(s), a.close());
            } catch (f) {
              console.warn(`Failed closing redirect window: ${f}`);
            } finally {
              o(d);
            }
          }
        };
        n.addListener(l),
          (a = this.openWindow(t)),
          (s = setInterval(() => {
            if (!a) clearInterval(s);
            else if (a.closed) {
              clearInterval(s), n.removeListener(l);
              const u = new Error("Window closed");
              i(u);
            }
          }, qA));
      });
    }
    generateState() {
      return RA(12, HA);
    }
  }
  const Mv = "x-baas-location";
  class KA {
    constructor(t, r, n) {
      (this.fetcher = t),
        (this.oauth2 = new ei(r)),
        (this.getDeviceInformation = n);
    }
    async authenticate(t, r) {
      const n = this.getDeviceInformation(),
        o = typeof r == "object";
      if (
        t.providerType.startsWith("oauth2") &&
        typeof t.payload.redirectUrl == "string"
      ) {
        const i = this.oauth2.generateState(),
          a = await this.getLogInUrl(t, o, {
            state: i,
            redirect: t.payload.redirectUrl,
            providerRedirectHeader: o ? !0 : void 0,
            device: o ? void 0 : n.encode(),
          });
        if (o) {
          const s = (
            await this.fetcher.fetch({
              method: "GET",
              url: a,
              tokenType: o ? "access" : "none",
              user: r,
              mode: "cors",
              credentials: "include",
            })
          ).headers.get(Mv);
          if (s) return this.openWindowAndWaitForAuthResponse(s, i);
          throw new Error(`Missing ${Mv} header`);
        } else return this.openWindowAndWaitForAuthResponse(a, i);
      } else {
        const i = await this.getLogInUrl(t, o),
          a = await this.fetcher.fetchJSON({
            method: "POST",
            url: i,
            body: { ...t.payload, options: { device: n.toJSON() } },
            tokenType: o ? "access" : "none",
            user: r,
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
    async getLogInUrl(t, r = !1, n = {}) {
      const o = this.fetcher.appRoute.authProvider(t.providerName).login(),
        i = Av({ link: r ? "true" : void 0, ...n });
      return (await this.fetcher.locationUrl) + o.path + i;
    }
    async openWindowAndWaitForAuthResponse(t, r) {
      const n = await this.oauth2.openWindowAndWaitForRedirect(t, r);
      return ei.decodeAuthInfo(n.userAuth);
    }
  }
  class Oa extends Error {
    constructor(t, r, n, o, i, a, s) {
      const l = o ? `status ${n} ${o}` : `status ${n}`;
      typeof i == "string"
        ? super(`Request failed (${t} ${r}): ${i} (${l})`)
        : super(`Request failed (${t} ${r}): (${l})`),
        (this.method = t),
        (this.url = r),
        (this.statusText = o),
        (this.statusCode = n),
        (this.error = i),
        (this.errorCode = a),
        (this.link = s);
    }
    static async fromRequestAndResponse(t, r) {
      var n;
      const { url: o, method: i } = t,
        { status: a, statusText: s } = r;
      if (
        !((n = r.headers.get("content-type")) === null || n === void 0) &&
        n.startsWith("application/json")
      ) {
        const l = await r.json();
        if (typeof l == "object" && l) {
          const { error: u, error_code: d, link: f } = l;
          return new Oa(
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
      return new Oa(i, o, a, s);
    }
  }
  function QA(e) {
    if (typeof e != "object" || e === null)
      throw new Error("Expected a non-null object");
    if (Symbol.asyncIterator in e) return e;
    if ("getReader" in e) {
      const t = e;
      return {
        [Symbol.asyncIterator]() {
          const r = t.getReader();
          return {
            next() {
              return r.read();
            },
            async return() {
              return await r.cancel(), { done: !0, value: null };
            },
          };
        },
      };
    } else throw new Error("Expected an AsyncIterable or a ReadableStream");
  }
  class ti {
    constructor({
      appId: t,
      transport: r,
      userContext: n,
      locationUrlContext: o,
    }) {
      (this.appId = t),
        (this.transport = r),
        (this.userContext = n),
        (this.locationUrlContext = o);
    }
    static buildAuthorizationHeader(t, r) {
      if (!t || r === "none") return {};
      if (r === "access") return { Authorization: `Bearer ${t.accessToken}` };
      if (r === "refresh") return { Authorization: `Bearer ${t.refreshToken}` };
      throw new Error(`Unexpected token type (${r})`);
    }
    static buildBody(t) {
      if (t) {
        if (typeof t == "object" && t !== null) return JSON.stringify(Ov(t));
        if (typeof t == "string") return t;
        throw (console.log("body is", t), new Error("Unexpected type of body"));
      } else return;
    }
    static buildJsonHeader(t) {
      return t && t.length > 0 ? { "Content-Type": "application/json" } : {};
    }
    clone(t) {
      return new ti({
        appId: this.appId,
        transport: this.transport,
        userContext: this.userContext,
        locationUrlContext: this.locationUrlContext,
        ...t,
      });
    }
    async fetch(t) {
      const {
        path: r,
        url: n,
        tokenType: o = "access",
        user: i = this.userContext.currentUser,
        ...a
      } = t;
      if (typeof r == "string" && typeof n == "string")
        throw new Error("Use of 'url' and 'path' mutually exclusive");
      if (typeof r == "string") {
        const s = (await this.locationUrlContext.locationUrl) + r;
        return this.fetch({ ...t, path: void 0, url: s });
      } else if (typeof n == "string") {
        const s = await this.transport.fetch({
          ...a,
          url: n,
          headers: { ...ti.buildAuthorizationHeader(i, o), ...t.headers },
        });
        if (s.ok) return s;
        if (i && s.status === 401 && o === "access")
          return await i.refreshAccessToken(), this.fetch({ ...t, user: i });
        throw (
          (i &&
            s.status === 401 &&
            o === "refresh" &&
            ((i.accessToken = null), (i.refreshToken = null)),
          await Oa.fromRequestAndResponse(t, s))
        );
      } else throw new Error("Expected either 'url' or 'path'");
    }
    async fetchJSON(t) {
      const { body: r } = t,
        n = ti.buildBody(r),
        o = ti.buildJsonHeader(n),
        i = await this.fetch({
          ...t,
          body: n,
          headers: { Accept: "application/json", ...o, ...t.headers },
        }),
        a = i.headers.get("content-type");
      if (a != null && a.startsWith("application/json")) {
        const s = await i.json();
        return Nv(s);
      } else {
        if (a === null) return null;
        throw new Error(`Expected JSON response, got "${a}"`);
      }
    }
    async fetchStream(t) {
      const { body: r } = await this.fetch({
        ...t,
        headers: { Accept: "text/event-stream", ...t.headers },
      });
      return QA(r);
    }
    get appRoute() {
      return tr.api().app(this.appId);
    }
    get locationUrl() {
      return this.locationUrlContext.locationUrl;
    }
  }
  const XA = "deviceId";
  var Lv;
  (function (e) {
    (e.DEVICE_ID = "deviceId"),
      (e.APP_ID = "appId"),
      (e.APP_VERSION = "appVersion"),
      (e.PLATFORM = "platform"),
      (e.PLATFORM_VERSION = "platformVersion"),
      (e.SDK_VERSION = "sdkVersion");
  })(Lv || (Lv = {}));
  class YA {
    constructor({ appId: t, appVersion: r, deviceId: n }) {
      this.sdkVersion = "2.0.0";
      const o = Ca();
      (this.platform = o.platform),
        (this.platformVersion = o.platformVersion),
        (this.appId = t),
        (this.appVersion = r),
        (this.deviceId = n);
    }
    encode() {
      const t = wp(this);
      return ku.encode(JSON.stringify(t));
    }
    toJSON() {
      return wp(this);
    }
  }
  const JA = "https://realm.mongodb.com";
  let kp = class _a {
    constructor(t) {
      (this.users = []), (this._locationUrl = null);
      const r = typeof t == "string" ? { id: t } : t;
      if (typeof r == "object" && typeof r.id == "string") this.id = r.id;
      else throw new Error("Missing an Atlas App Services app-id");
      (this.baseUrl = r.baseUrl || JA),
        r.skipLocationRequest &&
          (this._locationUrl = Promise.resolve(this.baseUrl)),
        (this.localApp = r.app);
      const { storage: n, transport: o = new Nr() } = r;
      (this.fetcher = new ti({
        appId: this.id,
        userContext: this,
        locationUrlContext: this,
        transport: o,
      })),
        (this.emailPasswordAuth = new $A(this.fetcher));
      const i = n || Ca().defaultStorage;
      (this.storage = new VA(i, this.id)),
        (this.authenticator = new KA(
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
      if (t in _a.appCache) return _a.appCache[t];
      {
        const r = new _a(t);
        return (_a.appCache[t] = r), r;
      }
    }
    switchUser(t) {
      const r = this.users.findIndex((o) => o === t);
      if (r === -1) throw new Error("The user was never logged into this app");
      const [n] = this.users.splice(r, 1);
      this.users.unshift(n);
    }
    async logIn(t, r = !0) {
      const n = await this.authenticator.authenticate(t),
        o = this.createOrUpdateUser(n, t.providerType);
      this.switchUser(o),
        r && (await o.refreshProfile()),
        this.storage.setUserIds(
          this.users.map((a) => a.id),
          !0,
        );
      const i = n.deviceId;
      return (
        i && i !== "000000000000000000000000" && this.storage.set(XA, i), o
      );
    }
    async removeUser(t) {
      const r = this.users.findIndex((n) => n === t);
      if (r === -1) throw new Error("The user was never logged into this app");
      this.users.splice(r, 1),
        await t.logOut(),
        this.storage.remove(`user(${t.id}):profile`),
        this.storage.removeUserId(t.id);
    }
    async deleteUser(t) {
      await this.fetcher.fetchJSON({
        method: "DELETE",
        path: tr.api().auth().delete().path,
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
      const t = this.users.filter((r) => r.state === Kn.Active);
      return t.length === 0 ? null : t[0];
    }
    get allUsers() {
      return Object.fromEntries(this.users.map((t) => [t.id, t]));
    }
    get locationUrl() {
      if (!this._locationUrl) {
        const t = tr.api().app(this.id).location().path;
        this._locationUrl = this.fetcher
          .fetchJSON({
            method: "GET",
            url: this.baseUrl + t,
            tokenType: "none",
          })
          .then((r) => {
            if (typeof r != "object")
              throw new Error("Expected response body be an object");
            return r;
          })
          .then(({ hostname: r }) => {
            if (typeof r != "string")
              throw new Error("Expected response to contain a 'hostname'");
            return r;
          })
          .catch((r) => {
            throw ((this._locationUrl = null), r);
          });
      }
      return this._locationUrl;
    }
    get deviceInformation() {
      const t = this.storage.getDeviceId(),
        r =
          typeof t == "string" && t !== "000000000000000000000000"
            ? new _t(t)
            : void 0;
      return new YA({
        appId: this.localApp ? this.localApp.name : void 0,
        appVersion: this.localApp ? this.localApp.version : void 0,
        deviceId: r,
      });
    }
    createOrUpdateUser(t, r) {
      const n = this.users.find((o) => o.id === t.userId);
      if (n)
        return (
          (n.accessToken = t.accessToken), (n.refreshToken = t.refreshToken), n
        );
      {
        if (!t.refreshToken)
          throw new Error("No refresh token in response from server");
        const o = new Iv({
          app: this,
          id: t.userId,
          accessToken: t.accessToken,
          refreshToken: t.refreshToken,
          providerType: r,
        });
        return this.users.unshift(o), o;
      }
    }
    hydrate() {
      const t = this.storage.getUserIds();
      this.users = t.map((r) => new Iv({ app: this, id: r }));
    }
  };
  (kp.appCache = {}), (kp.Credentials = rr);
  const ZA = (e) => {},
    Cu = function (e) {
      return e && e.Math == Math && e;
    },
    Na =
      Cu(typeof globalThis == "object" && globalThis) ||
      Cu(typeof window == "object" && window) ||
      Cu(typeof self == "object" && self) ||
      Cu(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  ZA(typeof __DEV__ < "u" && __DEV__);
  class e_ {
    constructor() {
      if (typeof Na.localStorage == "object") this.global = Na;
      else
        throw new Error(
          "Cannot use LocalStorage without a global localStorage object",
        );
    }
    get(t) {
      return this.global.localStorage.getItem(t);
    }
    set(t, r) {
      return this.global.localStorage.setItem(t, r);
    }
    remove(t) {
      return this.global.localStorage.removeItem(t);
    }
    prefix(t) {
      return new hr(this, t);
    }
    clear(t) {
      const r = [];
      for (let n = 0; n < this.global.localStorage.length; n++) {
        const o = this.global.localStorage.key(n);
        o && (!t || o.startsWith(t)) && r.push(o);
      }
      for (const n of r) this.global.localStorage.removeItem(n);
    }
    addListener(t) {
      return this.global.addEventListener("storage", t);
    }
    removeListener(t) {
      return this.global.removeEventListener("storage", t);
    }
  }
  const ri = lA(),
    t_ = "localStorage" in Na ? e_ : NA;
  function r_(e) {
    return typeof Na.open == "function"
      ? Na.open(e)
      : (console.log(`Please open ${e}`), null);
  }
  const n_ = {
    defaultStorage: new t_().prefix("realm-web"),
    openWindow: r_,
    platform: (ri == null ? void 0 : ri.name) || "web",
    platformVersion: (ri == null ? void 0 : ri.version) || "0.0.0",
    TextDecoder,
  };
  BA(n_);
  const o_ = "caja-chica-pqain",
    i_ =
      "https://realm.mongodb.com/groups/64c439eb9473f01fba108aaf/apps/64c43b5f13aa56de3f40739a",
    a_ = "https://realm.mongodb.com",
    s_ = "https://eastus2.azure.realm.mongodb.com",
    l_ = "https://eastus2.azure.data.mongodb-api.com",
    u_ =
      "https://cloud.mongodb.com/links/64c439eb9473f01fba108aaf/explorer/Cluster0/database/collection/find",
    c_ = "mongodb-atlas",
    Ta = {
      appId: o_,
      appUrl: i_,
      baseUrl: a_,
      clientApiBaseUrl: s_,
      dataApiBaseUrl: l_,
      dataExplorerLink: u_,
      dataSourceName: c_,
    },
    { baseUrl: d_ } = Ta;
  function Bv(e) {
    return new kp({ id: e, baseUrl: d_ });
  }
  const zv = me.createContext(null);
  function f_({ appId: e, children: t }) {
    const [r, n] = me.useState(Bv(e));
    me.useEffect(() => {
      n(Bv(e));
    }, [e]);
    const [o, i] = me.useState(r.currentUser),
      a = me.useCallback(
        async (u) => {
          await r.logIn(u), i(r.currentUser);
        },
        [r],
      ),
      s = me.useCallback(async () => {
        try {
          const u = r.currentUser;
          await (u == null ? void 0 : u.logOut()), await r.removeUser(u);
        } catch (u) {
          console.error(u);
        }
        i(r.currentUser);
      }, [r]),
      l = me.useMemo(
        () => ({ ...r, currentUser: o, logIn: a, logOut: s }),
        [r, o, a, s],
      );
    return T(zv.Provider, { value: l, children: t });
  }
  function ni() {
    const e = me.useContext(zv);
    if (!e)
      throw new Error(
        "No App Services App found. Make sure to call useApp() inside of a <AppProvider />.",
      );
    return e;
  }
  var Ep = {},
    oi = {},
    p_ = {
      get exports() {
        return oi;
      },
      set exports(e) {
        oi = e;
      },
    };
  (function (e) {
    function t(r) {
      return r && r.__esModule ? r : { default: r };
    }
    (e.exports = t),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(p_);
  var Fv = {};
  const h_ = jp(m5);
  var jv;
  function Ou() {
    return (
      jv ||
        ((jv = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function () {
                return t.createSvgIcon;
              },
            });
          var t = h_;
        })(Fv)),
      Fv
    );
  }
  const Nu = jp(nw);
  var m_ = oi;
  Object.defineProperty(Ep, "__esModule", { value: !0 });
  var Uv = (Ep.default = void 0),
    g_ = m_(Ou()),
    b_ = Nu,
    y_ = (0, g_.default)(
      (0, b_.jsx)("path", {
        d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
      }),
      "Visibility",
    );
  Uv = Ep.default = y_;
  var Cp = {},
    v_ = oi;
  Object.defineProperty(Cp, "__esModule", { value: !0 });
  var Dv = (Cp.default = void 0),
    w_ = v_(Ou()),
    S_ = Nu,
    x_ = (0, w_.default)(
      (0, S_.jsx)("path", {
        d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
      }),
      "VisibilityOff",
    );
  Dv = Cp.default = x_;
  const Wv = (e) => !e,
    Tu = (e, t) => !(t < 0 || t >= e.length);
  function k_(e, t, r) {
    if (!Tu(e, t) && t !== e.length)
      throw new Error("Cannot add value. Array index out of bounds.");
    return [...e.slice(0, t), r, ...e.slice(t)];
  }
  function E_(e, t, r) {
    if (!Tu(e, t))
      throw new Error("Cannot replace value. Array index out of bounds.");
    return [...e.slice(0, t), r, ...e.slice(t + 1)];
  }
  function C_(e, t, r) {
    if (!Tu(e, t))
      throw new Error("Cannot update value. Array index out of bounds.");
    return [...e.slice(0, t), r(e[t]), ...e.slice(t + 1)];
  }
  function O_(e, t) {
    if (!Tu(e, t))
      throw new Error("Cannot remove value. Array index out of bounds.");
    return [...e.slice(0, t), ...e.slice(t + 1)];
  }
  const Ru = (e) => (e._id instanceof _t ? e._id.toHexString() : e._id),
    N_ = (e, t) => Ru(e) === Ru(t),
    Au = (e, t) => {
      const r = e.findIndex((n) => N_(n, t));
      return r >= 0 ? r : null;
    };
  function T_(e) {
    return T(p3, { elevation: 6, variant: "filled", ...e });
  }
  function R_({ isOpen: e, message: t, onClose: r = () => {} }) {
    return e ? T(T_, { onClose: r, severity: "error", children: t }) : null;
  }
  function A_({ error: e, clearError: t, hideAfterMs: r }) {
    const [n, o] = me.useState(!1),
      i = me.useCallback(() => {
        t(), o(!1);
      }, [t]);
    return (
      me.useEffect(() => {
        if (e) {
          if ((o(!0), r)) {
            const a = setTimeout(() => {
              i();
            }, r);
            return () => {
              clearTimeout(a);
            };
          }
        } else o(!1);
      }, [e, i, r]),
      () =>
        T(R_, {
          isOpen: n,
          message: e,
          onClose: () => {
            i();
          },
        })
    );
  }
  const Vv = "%[a-f0-9]{2}",
    Hv = new RegExp("(" + Vv + ")|([^%]+?)", "gi"),
    qv = new RegExp("(" + Vv + ")+", "gi");
  function Op(e, t) {
    try {
      return [decodeURIComponent(e.join(""))];
    } catch {}
    if (e.length === 1) return e;
    t = t || 1;
    const r = e.slice(0, t),
      n = e.slice(t);
    return Array.prototype.concat.call([], Op(r), Op(n));
  }
  function __(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      let t = e.match(Hv) || [];
      for (let r = 1; r < t.length; r++)
        (e = Op(t, r).join("")), (t = e.match(Hv) || []);
      return e;
    }
  }
  function I_(e) {
    const t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" };
    let r = qv.exec(e);
    for (; r; ) {
      try {
        t[r[0]] = decodeURIComponent(r[0]);
      } catch {
        const o = __(r[0]);
        o !== r[0] && (t[r[0]] = o);
      }
      r = qv.exec(e);
    }
    t["%C2"] = "\uFFFD";
    const n = Object.keys(t);
    for (const o of n) e = e.replace(new RegExp(o, "g"), t[o]);
    return e;
  }
  function P_(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`",
      );
    try {
      return decodeURIComponent(e);
    } catch {
      return I_(e);
    }
  }
  function Gv(e, t) {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "" || t === "") return [];
    const r = e.indexOf(t);
    return r === -1 ? [] : [e.slice(0, r), e.slice(r + t.length)];
  }
  function $_(e, t) {
    const r = {};
    if (Array.isArray(t))
      for (const n of t) {
        const o = Object.getOwnPropertyDescriptor(e, n);
        o != null && o.enumerable && Object.defineProperty(r, n, o);
      }
    else
      for (const n of Reflect.ownKeys(e)) {
        const o = Object.getOwnPropertyDescriptor(e, n);
        if (o.enumerable) {
          const i = e[n];
          t(n, i, e) && Object.defineProperty(r, n, o);
        }
      }
    return r;
  }
  const M_ = (e) => e == null,
    L_ = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`,
      ),
    Np = Symbol("encodeFragmentIdentifier");
  function B_(e) {
    switch (e.arrayFormat) {
      case "index":
        return (t) => (r, n) => {
          const o = r.length;
          return n === void 0 ||
            (e.skipNull && n === null) ||
            (e.skipEmptyString && n === "")
            ? r
            : n === null
            ? [...r, [Ze(t, e), "[", o, "]"].join("")]
            : [...r, [Ze(t, e), "[", Ze(o, e), "]=", Ze(n, e)].join("")];
        };
      case "bracket":
        return (t) => (r, n) =>
          n === void 0 ||
          (e.skipNull && n === null) ||
          (e.skipEmptyString && n === "")
            ? r
            : n === null
            ? [...r, [Ze(t, e), "[]"].join("")]
            : [...r, [Ze(t, e), "[]=", Ze(n, e)].join("")];
      case "colon-list-separator":
        return (t) => (r, n) =>
          n === void 0 ||
          (e.skipNull && n === null) ||
          (e.skipEmptyString && n === "")
            ? r
            : n === null
            ? [...r, [Ze(t, e), ":list="].join("")]
            : [...r, [Ze(t, e), ":list=", Ze(n, e)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (r) => (n, o) =>
          o === void 0 ||
          (e.skipNull && o === null) ||
          (e.skipEmptyString && o === "")
            ? n
            : ((o = o === null ? "" : o),
              n.length === 0
                ? [[Ze(r, e), t, Ze(o, e)].join("")]
                : [[n, Ze(o, e)].join(e.arrayFormatSeparator)]);
      }
      default:
        return (t) => (r, n) =>
          n === void 0 ||
          (e.skipNull && n === null) ||
          (e.skipEmptyString && n === "")
            ? r
            : n === null
            ? [...r, Ze(t, e)]
            : [...r, [Ze(t, e), "=", Ze(n, e)].join("")];
    }
  }
  function z_(e) {
    let t;
    switch (e.arrayFormat) {
      case "index":
        return (r, n, o) => {
          if (((t = /\[(\d*)]$/.exec(r)), (r = r.replace(/\[\d*]$/, "")), !t)) {
            o[r] = n;
            return;
          }
          o[r] === void 0 && (o[r] = {}), (o[r][t[1]] = n);
        };
      case "bracket":
        return (r, n, o) => {
          if (((t = /(\[])$/.exec(r)), (r = r.replace(/\[]$/, "")), !t)) {
            o[r] = n;
            return;
          }
          if (o[r] === void 0) {
            o[r] = [n];
            return;
          }
          o[r] = [...o[r], n];
        };
      case "colon-list-separator":
        return (r, n, o) => {
          if (((t = /(:list)$/.exec(r)), (r = r.replace(/:list$/, "")), !t)) {
            o[r] = n;
            return;
          }
          if (o[r] === void 0) {
            o[r] = [n];
            return;
          }
          o[r] = [...o[r], n];
        };
      case "comma":
      case "separator":
        return (r, n, o) => {
          const i = typeof n == "string" && n.includes(e.arrayFormatSeparator),
            a =
              typeof n == "string" &&
              !i &&
              Dr(n, e).includes(e.arrayFormatSeparator);
          n = a ? Dr(n, e) : n;
          const s =
            i || a
              ? n.split(e.arrayFormatSeparator).map((l) => Dr(l, e))
              : n === null
              ? n
              : Dr(n, e);
          o[r] = s;
        };
      case "bracket-separator":
        return (r, n, o) => {
          const i = /(\[])$/.test(r);
          if (((r = r.replace(/\[]$/, "")), !i)) {
            o[r] = n && Dr(n, e);
            return;
          }
          const a =
            n === null
              ? []
              : n.split(e.arrayFormatSeparator).map((s) => Dr(s, e));
          if (o[r] === void 0) {
            o[r] = a;
            return;
          }
          o[r] = [...o[r], ...a];
        };
      default:
        return (r, n, o) => {
          if (o[r] === void 0) {
            o[r] = n;
            return;
          }
          o[r] = [...[o[r]].flat(), n];
        };
    }
  }
  function Kv(e) {
    if (typeof e != "string" || e.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string",
      );
  }
  function Ze(e, t) {
    return t.encode ? (t.strict ? L_(e) : encodeURIComponent(e)) : e;
  }
  function Dr(e, t) {
    return t.decode ? P_(e) : e;
  }
  function Qv(e) {
    return Array.isArray(e)
      ? e.sort()
      : typeof e == "object"
      ? Qv(Object.keys(e))
          .sort((t, r) => Number(t) - Number(r))
          .map((t) => e[t])
      : e;
  }
  function Xv(e) {
    const t = e.indexOf("#");
    return t !== -1 && (e = e.slice(0, t)), e;
  }
  function F_(e) {
    let t = "";
    const r = e.indexOf("#");
    return r !== -1 && (t = e.slice(r)), t;
  }
  function Yv(e, t) {
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
  function Tp(e) {
    e = Xv(e);
    const t = e.indexOf("?");
    return t === -1 ? "" : e.slice(t + 1);
  }
  function Rp(e, t) {
    (t = {
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1,
      ...t,
    }),
      Kv(t.arrayFormatSeparator);
    const r = z_(t),
      n = Object.create(null);
    if (typeof e != "string" || ((e = e.trim().replace(/^[?#&]/, "")), !e))
      return n;
    for (const o of e.split("&")) {
      if (o === "") continue;
      const i = t.decode ? o.replace(/\+/g, " ") : o;
      let [a, s] = Gv(i, "=");
      a === void 0 && (a = i),
        (s =
          s === void 0
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                t.arrayFormat,
              )
            ? s
            : Dr(s, t)),
        r(Dr(a, t), s, n);
    }
    for (const [o, i] of Object.entries(n))
      if (typeof i == "object" && i !== null)
        for (const [a, s] of Object.entries(i)) i[a] = Yv(s, t);
      else n[o] = Yv(i, t);
    return t.sort === !1
      ? n
      : (t.sort === !0
          ? Object.keys(n).sort()
          : Object.keys(n).sort(t.sort)
        ).reduce((o, i) => {
          const a = n[i];
          return (
            a && typeof a == "object" && !Array.isArray(a)
              ? (o[i] = Qv(a))
              : (o[i] = a),
            o
          );
        }, Object.create(null));
  }
  function Jv(e, t) {
    if (!e) return "";
    (t = {
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...t,
    }),
      Kv(t.arrayFormatSeparator);
    const r = (a) =>
        (t.skipNull && M_(e[a])) || (t.skipEmptyString && e[a] === ""),
      n = B_(t),
      o = {};
    for (const [a, s] of Object.entries(e)) r(a) || (o[a] = s);
    const i = Object.keys(o);
    return (
      t.sort !== !1 && i.sort(t.sort),
      i
        .map((a) => {
          const s = e[a];
          return s === void 0
            ? ""
            : s === null
            ? Ze(a, t)
            : Array.isArray(s)
            ? s.length === 0 && t.arrayFormat === "bracket-separator"
              ? Ze(a, t) + "[]"
              : s.reduce(n(a), []).join("&")
            : Ze(a, t) + "=" + Ze(s, t);
        })
        .filter((a) => a.length > 0)
        .join("&")
    );
  }
  function Zv(e, t) {
    var o;
    t = { decode: !0, ...t };
    let [r, n] = Gv(e, "#");
    return (
      r === void 0 && (r = e),
      {
        url:
          ((o = r == null ? void 0 : r.split("?")) == null ? void 0 : o[0]) ??
          "",
        query: Rp(Tp(e), t),
        ...(t && t.parseFragmentIdentifier && n
          ? { fragmentIdentifier: Dr(n, t) }
          : {}),
      }
    );
  }
  function e1(e, t) {
    t = { encode: !0, strict: !0, [Np]: !0, ...t };
    const r = Xv(e.url).split("?")[0] || "",
      n = Tp(e.url),
      o = { ...Rp(n, { sort: !1 }), ...e.query };
    let i = Jv(o, t);
    i && (i = `?${i}`);
    let a = F_(e.url);
    if (e.fragmentIdentifier) {
      const s = new URL(r);
      (s.hash = e.fragmentIdentifier),
        (a = t[Np] ? s.hash : `#${e.fragmentIdentifier}`);
    }
    return `${r}${i}${a}`;
  }
  function t1(e, t, r) {
    r = { parseFragmentIdentifier: !0, [Np]: !1, ...r };
    const { url: n, query: o, fragmentIdentifier: i } = Zv(e, r);
    return e1({ url: n, query: $_(o, t), fragmentIdentifier: i }, r);
  }
  function j_(e, t, r) {
    const n = Array.isArray(t) ? (o) => !t.includes(o) : (o, i) => !t(o, i);
    return t1(e, n, r);
  }
  const r1 = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          exclude: j_,
          extract: Tp,
          parse: Rp,
          parseUrl: Zv,
          pick: t1,
          stringify: Jv,
          stringifyUrl: e1,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    n1 = "/caja-chica/assets/logo-992687eb.svg",
    U_ = "/caja-chica/assets/logoWithBuilding-3a468530.svg",
    D_ = Kl();
  function W_() {
    const { currentUser: e } = ni(),
      t = Zs(),
      r = ni();
    e && t("/admin");
    const [n, o] = S.useState(!1),
      i = () => {
        u(), o(Wv);
      },
      a = { email: null, password: null, other: null },
      [s, l] = S.useState(a),
      u = () => l(a),
      d = A_({
        error: s.other,
        clearError: () => {
          l((N) => ({ ...N, other: null }));
        },
      }),
      [f, h] = S.useState(!1),
      m = () => h(Wv),
      g = async ({ email: N, password: I }) => {
        console.log(`${N}@sanpedrosula.hn`), u();
        try {
          n &&
            (await r.emailPasswordAuth.registerUser({
              email: `${N}@sanpedrosula.hn`,
              password: I,
            }),
            console.log("Sending email to verify account.")),
            await r.logIn(rr.emailPassword(`${N}@sanpedrosula.hn`, I)),
            t("/admin");
        } catch (P) {
          V_(P, l);
        }
      };
    r1.parse(window.location.search);
    const [x, R] = S.useState(""),
      [b, y] = S.useState("");
    S.useCallback(async () => {
      try {
        const N = await r1.parse(window.location.search);
        N.token &&
          N.tokenId &&
          (R(N.token),
          y(N.tokenId),
          await r.emailPasswordAuth.confirmUser(N.token, N.tokenId));
      } catch (N) {
        console.error(N);
      }
    }, [r.emailPasswordAuth, x, b]);
    const v = localStorage.getItem("REACT_APP_NAME")
        ? localStorage.getItem("REACT_APP_NAME")
        : window.env.REACT_APP_NAME,
      [k, C] = S.useState(v || window.env.REACT_APP_NAME);
    S.useEffect(() => {
      const N = window.env.REACT_APP_PROJECTS.find((I) => I.id === k);
      N &&
        ((window.env.REACT_APP_NAME = N.name),
        localStorage.setItem("REACT_APP_NAME", N.name),
        localStorage.setItem("REACT_APP_DB", N.db),
        localStorage.setItem("REACT_APP_COLLECTION", N.collection));
    }, [k]);
    const A = (N) => {
      C(Number(N.target.value));
    };
    return T(vb, {
      theme: D_,
      children: de(Df, {
        container: !0,
        component: "main",
        sx: { height: "100vh" },
        children: [
          T(Df, {
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
            children: T(ha, {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              children: T("img", {
                src: U_,
                alt: "Example SVG",
                style: { width: "75%", height: "auto" },
              }),
            }),
          }),
          T(Df, {
            item: !0,
            xs: 12,
            sm: 8,
            md: 5,
            component: Uo,
            elevation: 10,
            square: !0,
            children: de(ha, {
              sx: {
                my: 1,
                mx: 13,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              children: [
                de(Jt, {
                  component: "h1",
                  variant: "h5",
                  children: [
                    de("div", {
                      children: [
                        T("img", { src: n1, alt: "Example SVG" }),
                        T("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 100 100",
                          style: { width: "10%", height: "10%" },
                          children: T("use", { xlinkHref: n1 }),
                        }),
                      ],
                    }),
                    window.env.REACT_APP_PROJECT_LIST &&
                      de(Xb, {
                        sx: { width: "100%" },
                        children: [
                          T(ay, {
                            id: "project-select-label",
                            children: "Project",
                          }),
                          T(Iy, {
                            labelId: "project-select-label",
                            id: "project-select",
                            value: k,
                            label: "Project",
                            onChange: A,
                            children: window.env.REACT_APP_PROJECTS.map((N) =>
                              T(y4, { value: N.id, children: N.name }, N.id),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                T(Uf, {
                  sx: { width: "100%" },
                  className: "main-container",
                  children: T(gO, {
                    className: "auth-card",
                    variant: "outlined",
                    children: de("form", {
                      className: "auth-form",
                      onSubmit: (N) => {
                        N.preventDefault();
                        const I = new FormData(N.target),
                          { email: P, password: z } = Object.fromEntries(
                            I.entries(),
                          );
                        g({ email: P, password: z });
                      },
                      children: [
                        T(Jt, {
                          gutterBottom: !0,
                          children: n
                            ? "Introduzca su correo sin @sanpedrosula.hn y una contrase\xF1a para crear una cuenta."
                            : "Introduzca su correo sin @sanpedrosula.hn y su contrase\xF1a para iniciar sesi\xF3n.",
                        }),
                        T(d, {}),
                        de("div", {
                          className: "email-and-domain",
                          children: [
                            T(fr, {
                              id: "input-email",
                              name: "email",
                              label: "Email Address",
                              variant: "outlined",
                              error: !!s.email,
                              helperText: s.email ?? "",
                            }),
                            de(Jt, {
                              variant: "caption",
                              gutterBottom: !0,
                              children: [T("br", {}), "@sanpedrosula.hn"],
                            }),
                          ],
                        }),
                        T(fr, {
                          id: "input-password",
                          "data-testid": "input-password",
                          type: f ? "text" : "password",
                          name: "password",
                          label: "Password",
                          variant: "outlined",
                          error: !!s.password,
                          helperText: s.password ?? "",
                          InputProps: {
                            endAdornment: T(HN, {
                              position: "end",
                              children: T(eu, {
                                "aria-label": "toggle password visibility",
                                onClick: m,
                                onMouseDown: (N) => {
                                  N.preventDefault();
                                },
                                size: "large",
                                children: f ? T(Uv, {}) : T(Dv, {}),
                              }),
                            }),
                          },
                        }),
                        T(Vo, {
                          id: "submit-button",
                          "data-testid": "submit-button",
                          type: "submit",
                          variant: "contained",
                          color: "primary",
                          children: n ? "Create Account" : "Log In",
                        }),
                        T("button", {
                          id: "toggle-auth-type-button",
                          type: "button",
                          className: "link-button",
                          onClick: () => i(),
                          children: n
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
    });
  }
  function V_(e, t) {
    const r = () => {
      t((n) => ({ ...n, other: "Verification email sent." })),
        console.warn(
          "Something went wrong with a login or signup request. See the following error for details.",
        ),
        console.error(e);
    };
    if (e instanceof Oa) {
      const { error: n, statusCode: o } = e;
      switch (n || o) {
        case "invalid username":
        case "email invalid":
          /[@]/.test(n.detail)
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
          r();
          break;
      }
    } else r();
    errorType === "name already in use" &&
      error.detail.endsWith("@sanpedrosula.hn") &&
      console.log("Sending email to verify account.");
  }
  var H_ = ".".charCodeAt(0),
    q_ = /\\(\\)?/g,
    G_ = RegExp(
      `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
      "g",
    ),
    K_ = function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === H_ && t.push(""),
        e.replace(G_, function (r, n, o, i) {
          var a = r;
          o ? (a = i.replace(q_, "$1")) : n && (a = n.trim()), t.push(a);
        }),
        t
      );
    },
    _u = {},
    Q_ = /[.[\]]+/,
    o1 = function (e) {
      if (e == null || !e.length) return [];
      if (typeof e != "string") throw new Error("toPath() expects a string");
      return (
        _u[e] == null &&
          (e.endsWith("[]")
            ? (_u[e] = e.split(Q_).filter(Boolean))
            : (_u[e] = K_(e))),
        _u[e]
      );
    },
    Ue = function (e, t) {
      for (var r = o1(t), n = e, o = 0; o < r.length; o++) {
        var i = r[o];
        if (n == null || typeof n != "object" || (Array.isArray(n) && isNaN(i)))
          return;
        n = n[i];
      }
      return n;
    };
  function X_(e) {
    var t = Y_(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function Y_(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  var J_ = function e(t, r, n, o, i) {
      if (r >= n.length) return o;
      var a = n[r];
      if (isNaN(a)) {
        var s;
        if (t == null) {
          var l,
            u = e(void 0, r + 1, n, o, i);
          return u === void 0 ? void 0 : ((l = {}), (l[a] = u), l);
        }
        if (Array.isArray(t))
          throw new Error("Cannot set a non-numeric property on an array");
        var d = e(t[a], r + 1, n, o, i);
        if (d === void 0) {
          var f = Object.keys(t).length;
          if (t[a] === void 0 && f === 0) return;
          if (t[a] !== void 0 && f <= 1)
            return !isNaN(n[r - 1]) && !i ? {} : void 0;
          t[a];
          var h = Z(t, [a].map(X_));
          return h;
        }
        return E({}, t, ((s = {}), (s[a] = d), s));
      }
      var m = Number(a);
      if (t == null) {
        var g = e(void 0, r + 1, n, o, i);
        if (g === void 0) return;
        var x = [];
        return (x[m] = g), x;
      }
      if (!Array.isArray(t))
        throw new Error("Cannot set a numeric property on an object");
      var R = t[m],
        b = e(R, r + 1, n, o, i),
        y = [].concat(t);
      if (i && b === void 0) {
        if ((y.splice(m, 1), y.length === 0)) return;
      } else y[m] = b;
      return y;
    },
    nr = function (e, t, r, n) {
      if ((n === void 0 && (n = !1), e == null))
        throw new Error("Cannot call setIn() with " + String(e) + " state");
      if (t == null)
        throw new Error("Cannot call setIn() with " + String(t) + " key");
      return J_(e, 0, o1(t), r, n);
    },
    i1 = "FINAL_FORM/form-error",
    Ra = "FINAL_FORM/array-error";
  function a1(e, t) {
    var r = e.errors,
      n = e.initialValues,
      o = e.lastSubmittedValues,
      i = e.submitErrors,
      a = e.submitFailed,
      s = e.submitSucceeded,
      l = e.submitting,
      u = e.values,
      d = t.active,
      f = t.blur,
      h = t.change,
      m = t.data,
      g = t.focus,
      x = t.modified,
      R = t.modifiedSinceLastSubmit,
      b = t.name,
      y = t.touched,
      v = t.validating,
      k = t.visited,
      C = Ue(u, b),
      A = Ue(r, b);
    A && A[Ra] && (A = A[Ra]);
    var N = i && Ue(i, b),
      I = n && Ue(n, b),
      P = t.isEqual(I, C),
      z = !!(o && !t.isEqual(Ue(o, b), C)),
      H = !A && !N;
    return {
      active: d,
      blur: f,
      change: h,
      data: m,
      dirty: !P,
      dirtySinceLastSubmit: z,
      error: A,
      focus: g,
      initial: I,
      invalid: !H,
      length: Array.isArray(C) ? C.length : void 0,
      modified: x,
      modifiedSinceLastSubmit: R,
      name: b,
      pristine: P,
      submitError: N,
      submitFailed: a,
      submitSucceeded: s,
      submitting: l,
      touched: y,
      valid: H,
      value: C,
      visited: k,
      validating: v,
    };
  }
  var s1 = [
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
    Tr = function (e, t) {
      if (e === t) return !0;
      if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
      var r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (
        var o = Object.prototype.hasOwnProperty.bind(t), i = 0;
        i < r.length;
        i++
      ) {
        var a = r[i];
        if (!o(a) || e[a] !== t[a]) return !1;
      }
      return !0;
    };
  function l1(e, t, r, n, o, i) {
    var a = !1;
    return (
      o.forEach(function (s) {
        n[s] &&
          ((e[s] = t[s]),
          (!r || (~i.indexOf(s) ? !Tr(t[s], r[s]) : t[s] !== r[s])) &&
            (a = !0));
      }),
      a
    );
  }
  var Z_ = ["data"],
    eI = function (e, t, r, n) {
      var o = { blur: e.blur, change: e.change, focus: e.focus, name: e.name },
        i = l1(o, e, t, r, s1, Z_) || !t;
      return i || n ? o : void 0;
    },
    u1 = [
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
    tI = ["touched", "visited"];
  function c1(e, t, r, n) {
    var o = {},
      i = l1(o, e, t, r, u1, tI) || !t;
    return i || n ? o : void 0;
  }
  var d1 = function (e) {
      var t, r;
      return function () {
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
          o[i] = arguments[i];
        return (
          (!t ||
            o.length !== t.length ||
            o.some(function (a, s) {
              return !Tr(t[s], a);
            })) &&
            ((t = o), (r = e.apply(void 0, o))),
          r
        );
      };
    },
    Ap = function (e) {
      return (
        !!e &&
        (typeof e == "object" || typeof e == "function") &&
        typeof e.then == "function"
      );
    },
    rI = "4.20.10",
    nI = function (e, t) {
      return e === t;
    },
    ii = function e(t) {
      return Object.keys(t).some(function (r) {
        var n = t[r];
        return n && typeof n == "object" && !(n instanceof Error)
          ? e(n)
          : typeof n < "u";
      });
    };
  function oI(e) {
    var t = e.active,
      r = e.dirtySinceLastSubmit,
      n = e.modifiedSinceLastSubmit,
      o = e.error,
      i = e.errors,
      a = e.initialValues,
      s = e.pristine,
      l = e.submitting,
      u = e.submitFailed,
      d = e.submitSucceeded,
      f = e.submitError,
      h = e.submitErrors,
      m = e.valid,
      g = e.validating,
      x = e.values;
    return {
      active: t,
      dirty: !s,
      dirtySinceLastSubmit: r,
      modifiedSinceLastSubmit: n,
      error: o,
      errors: i,
      hasSubmitErrors: !!(f || (h && ii(h))),
      hasValidationErrors: !!(o || ii(i)),
      invalid: !m,
      initialValues: a,
      pristine: s,
      submitting: l,
      submitFailed: u,
      submitSucceeded: d,
      submitError: f,
      submitErrors: h,
      valid: m,
      validating: g > 0,
      values: x,
    };
  }
  function f1(e, t, r, n, o, i) {
    var a = o(r, n, t, i);
    return a ? (e(a), !0) : !1;
  }
  function p1(e, t, r, n, o) {
    var i = e.entries;
    Object.keys(i).forEach(function (a) {
      var s = i[Number(a)];
      if (s) {
        var l = s.subscription,
          u = s.subscriber,
          d = s.notified;
        f1(u, l, t, r, n, o || !d) && (s.notified = !0);
      }
    });
  }
  function iI(e) {
    if (!e) throw new Error("No config specified");
    var t = e.debug,
      r = e.destroyOnUnregister,
      n = e.keepDirtyOnReinitialize,
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
      m = !1,
      g = 0,
      x = {},
      R = function (O) {
        return function (M) {
          return delete x[O], M;
        };
      },
      b = function (O, M, j) {
        var W = Ue(O.formState.values, M),
          X = j(W);
        O.formState.values = nr(O.formState.values, M, X) || {};
      },
      y = function (O, M, j) {
        if (O.fields[M]) {
          var W, X;
          (O.fields = E(
            {},
            O.fields,
            ((W = {}),
            (W[j] = E({}, O.fields[M], {
              name: j,
              blur: function () {
                return L.blur(j);
              },
              change: function (le) {
                return L.change(j, le);
              },
              focus: function () {
                return L.focus(j);
              },
              lastFieldState: void 0,
            })),
            W),
          )),
            delete O.fields[M],
            (O.fieldSubscribers = E(
              {},
              O.fieldSubscribers,
              ((X = {}), (X[j] = O.fieldSubscribers[M]), X),
            )),
            delete O.fieldSubscribers[M];
          var oe = Ue(O.formState.values, M);
          (O.formState.values = nr(O.formState.values, M, void 0) || {}),
            (O.formState.values = nr(O.formState.values, j, oe)),
            delete O.lastFormState;
        }
      },
      v = function (O) {
        return function () {
          if (i) {
            for (
              var M = {
                  formState: u.formState,
                  fields: u.fields,
                  fieldSubscribers: u.fieldSubscribers,
                  lastFormState: u.lastFormState,
                },
                j = arguments.length,
                W = new Array(j),
                X = 0;
              X < j;
              X++
            )
              W[X] = arguments[X];
            var oe = i[O](W, M, {
              changeValue: b,
              getIn: Ue,
              renameField: y,
              resetFieldState: L.resetFieldState,
              setIn: nr,
              shallowEqual: Tr,
            });
            return (
              (u.formState = M.formState),
              (u.fields = M.fields),
              (u.fieldSubscribers = M.fieldSubscribers),
              (u.lastFormState = M.lastFormState),
              I(void 0, function () {
                P(), Y();
              }),
              oe
            );
          }
        };
      },
      k = i
        ? Object.keys(i).reduce(function (O, M) {
            return (O[M] = v(M)), O;
          }, {})
        : {},
      C = function (O) {
        var M = [];
        if (s) {
          var j = s(E({}, u.formState.values));
          Ap(j)
            ? M.push(
                j.then(function (W) {
                  return O(W, !0);
                }),
              )
            : O(j, !1);
        }
        return M;
      },
      A = function (O) {
        return Object.keys(O.validators).reduce(function (M, j) {
          var W = O.validators[Number(j)]();
          return W && M.push(W), M;
        }, []);
      },
      N = function (O, M) {
        var j = [],
          W = A(O);
        if (W.length) {
          var X;
          W.forEach(function (oe) {
            var le = oe(
              Ue(u.formState.values, O.name),
              u.formState.values,
              oe.length === 0 || oe.length === 3
                ? a1(u.formState, u.fields[O.name])
                : void 0,
            );
            if (le && Ap(le)) {
              O.validating = !0;
              var ie = le.then(function (ce) {
                u.fields[O.name] && ((u.fields[O.name].validating = !1), M(ce));
              });
              j.push(ie);
            } else X || (X = le);
          }),
            M(X);
        }
        return j;
      },
      I = function (O, M) {
        if (f) {
          (h = !0), M();
          return;
        }
        var j = u.fields,
          W = u.formState,
          X = E({}, j),
          oe = Object.keys(X);
        if (
          !s &&
          !oe.some(function ($) {
            return A(X[$]).length;
          })
        ) {
          M();
          return;
        }
        var le = !1;
        if (O) {
          var ie = X[O];
          if (ie) {
            var ce = ie.validateFields;
            ce && ((le = !0), (oe = ce.length ? ce.concat(O) : [O]));
          }
        }
        var ae = {},
          be = {},
          xe = {},
          He = [].concat(
            C(function ($, F) {
              F ? (be = $ || {}) : (ae = $ || {});
            }),
            oe.reduce(function ($, F) {
              return $.concat(
                N(j[F], function (te) {
                  xe[F] = te;
                }),
              );
            }, []),
          ),
          Oe = He.length > 0,
          c = ++g,
          p = Promise.all(He).then(R(c));
        Oe && (x[c] = p);
        var w = function ($) {
          var F = E({}, le ? W.errors : {}, ae, $ ? be : W.asyncErrors),
            te = function (fe) {
              oe.forEach(function (he) {
                if (j[he]) {
                  var pe = Ue(ae, he),
                    ke = Ue(F, he),
                    $e = A(X[he]).length,
                    Ee = xe[he];
                  fe(he, ($e && Ee) || (s && pe) || (!pe && !le ? ke : void 0));
                }
              });
            };
          te(function (fe, he) {
            F = nr(F, fe, he) || {};
          }),
            te(function (fe, he) {
              if (he && he[Ra]) {
                var pe = Ue(F, fe),
                  ke = [].concat(pe);
                (ke[Ra] = he[Ra]), (F = nr(F, fe, ke));
              }
            }),
            Tr(W.errors, F) || (W.errors = F),
            $ && (W.asyncErrors = be),
            (W.error = ae[i1]);
        };
        if ((Oe && (u.formState.validating++, M()), w(!1), M(), Oe)) {
          var _ = function () {
            u.formState.validating--,
              M(),
              u.formState.validating === 0 && u.lastFormState.validating && Y();
          };
          p.then(function () {
            g > c || w(!0);
          }).then(_, _);
        }
      },
      P = function (O) {
        if (!d) {
          var M = u.fields,
            j = u.fieldSubscribers,
            W = u.formState,
            X = E({}, M),
            oe = function (le) {
              var ie = X[le],
                ce = a1(W, ie),
                ae = ie.lastFieldState;
              ie.lastFieldState = ce;
              var be = j[le];
              be && p1(be, ce, ae, eI, ae === void 0);
            };
          O ? oe(O) : Object.keys(X).forEach(oe);
        }
      },
      z = function () {
        Object.keys(u.fields).forEach(function (O) {
          u.fields[O].touched = !0;
        });
      },
      H = function () {
        return !!(u.formState.error || ii(u.formState.errors));
      },
      V = function () {
        var O = u.fields,
          M = u.formState,
          j = u.lastFormState,
          W = E({}, O),
          X = Object.keys(W),
          oe = !1,
          le = X.reduce(function (Oe, c) {
            var p = !W[c].isEqual(
              Ue(M.values, c),
              Ue(M.initialValues || {}, c),
            );
            return p && ((oe = !0), (Oe[c] = !0)), Oe;
          }, {}),
          ie = X.reduce(function (Oe, c) {
            var p = M.lastSubmittedValues || {};
            return W[c].isEqual(Ue(M.values, c), Ue(p, c)) || (Oe[c] = !0), Oe;
          }, {});
        (M.pristine = !oe),
          (M.dirtySinceLastSubmit = !!(
            M.lastSubmittedValues &&
            Object.values(ie).some(function (Oe) {
              return Oe;
            })
          )),
          (M.modifiedSinceLastSubmit = !!(
            M.lastSubmittedValues &&
            Object.keys(W).some(function (Oe) {
              return W[Oe].modifiedSinceLastSubmit;
            })
          )),
          (M.valid =
            !M.error &&
            !M.submitError &&
            !ii(M.errors) &&
            !(M.submitErrors && ii(M.submitErrors)));
        var ce = oI(M),
          ae = X.reduce(
            function (Oe, c) {
              return (
                (Oe.modified[c] = W[c].modified),
                (Oe.touched[c] = W[c].touched),
                (Oe.visited[c] = W[c].visited),
                Oe
              );
            },
            { modified: {}, touched: {}, visited: {} },
          ),
          be = ae.modified,
          xe = ae.touched,
          He = ae.visited;
        return (
          (ce.dirtyFields = j && Tr(j.dirtyFields, le) ? j.dirtyFields : le),
          (ce.dirtyFieldsSinceLastSubmit =
            j && Tr(j.dirtyFieldsSinceLastSubmit, ie)
              ? j.dirtyFieldsSinceLastSubmit
              : ie),
          (ce.modified = j && Tr(j.modified, be) ? j.modified : be),
          (ce.touched = j && Tr(j.touched, xe) ? j.touched : xe),
          (ce.visited = j && Tr(j.visited, He) ? j.visited : He),
          j && Tr(j, ce) ? j : ce
        );
      },
      Q = function () {
        return (
          t &&
          !0 &&
          t(
            V(),
            Object.keys(u.fields).reduce(function (O, M) {
              return (O[M] = u.fields[M]), O;
            }, {}),
          )
        );
      },
      U = !1,
      K = !1,
      Y = function O() {
        if (U) K = !0;
        else {
          if (((U = !0), Q(), !d && !(f && m))) {
            var M = u.lastFormState,
              j = V();
            j !== M && ((u.lastFormState = j), p1(u.subscribers, j, M, c1));
          }
          (U = !1), K && ((K = !1), O());
        }
      },
      J = function () {
        return Object.keys(u.fields).some(function (O) {
          return u.fields[O].beforeSubmit && u.fields[O].beforeSubmit() === !1;
        });
      },
      D = function () {
        return Object.keys(u.fields).forEach(function (O) {
          return u.fields[O].afterSubmit && u.fields[O].afterSubmit();
        });
      },
      B = function () {
        return Object.keys(u.fields).forEach(function (O) {
          return (u.fields[O].modifiedSinceLastSubmit = !1);
        });
      };
    I(void 0, function () {
      Y();
    });
    var L = {
      batch: function (O) {
        d++, O(), d--, P(), Y();
      },
      blur: function (O) {
        var M = u.fields,
          j = u.formState,
          W = M[O];
        W &&
          (delete j.active,
          (M[O] = E({}, W, { active: !1, touched: !0 })),
          l
            ? I(O, function () {
                P(), Y();
              })
            : (P(), Y()));
      },
      change: function (O, M) {
        var j = u.fields,
          W = u.formState;
        if (Ue(W.values, O) !== M) {
          b(u, O, function () {
            return M;
          });
          var X = j[O];
          X &&
            (j[O] = E({}, X, {
              modified: !0,
              modifiedSinceLastSubmit: !!W.lastSubmittedValues,
            })),
            l
              ? (P(), Y())
              : I(O, function () {
                  P(), Y();
                });
        }
      },
      get destroyOnUnregister() {
        return !!r;
      },
      set destroyOnUnregister(O) {
        r = O;
      },
      focus: function (O) {
        var M = u.fields[O];
        M &&
          !M.active &&
          ((u.formState.active = O),
          (M.active = !0),
          (M.visited = !0),
          P(),
          Y());
      },
      mutators: k,
      getFieldState: function (O) {
        var M = u.fields[O];
        return M && M.lastFieldState;
      },
      getRegisteredFields: function () {
        return Object.keys(u.fields);
      },
      getState: function () {
        return V();
      },
      initialize: function (O) {
        var M = u.fields,
          j = u.formState,
          W = E({}, M),
          X = typeof O == "function" ? O(j.values) : O;
        n || (j.values = X);
        var oe = n
          ? Object.keys(W).reduce(function (le, ie) {
              var ce = W[ie],
                ae = ce.isEqual(
                  Ue(j.values, ie),
                  Ue(j.initialValues || {}, ie),
                );
              return ae || (le[ie] = Ue(j.values, ie)), le;
            }, {})
          : {};
        (j.initialValues = X),
          (j.values = X),
          Object.keys(oe).forEach(function (le) {
            j.values = nr(j.values, le, oe[le]) || {};
          }),
          I(void 0, function () {
            P(), Y();
          });
      },
      isValidationPaused: function () {
        return f;
      },
      pauseValidation: function (O) {
        O === void 0 && (O = !0), (f = !0), (m = O);
      },
      registerField: function (O, M, j, W) {
        j === void 0 && (j = {}),
          u.fieldSubscribers[O] ||
            (u.fieldSubscribers[O] = { index: 0, entries: {} });
        var X = u.fieldSubscribers[O].index++;
        u.fieldSubscribers[O].entries[X] = {
          subscriber: d1(M),
          subscription: j,
          notified: !1,
        };
        var oe = u.fields[O] || {
          active: !1,
          afterSubmit: W && W.afterSubmit,
          beforeSubmit: W && W.beforeSubmit,
          data: (W && W.data) || {},
          isEqual: (W && W.isEqual) || nI,
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
        (oe.blur =
          oe.blur ||
          function () {
            return L.blur(O);
          }),
          (oe.change =
            oe.change ||
            function (be) {
              return L.change(O, be);
            }),
          (oe.focus =
            oe.focus ||
            function () {
              return L.focus(O);
            }),
          (u.fields[O] = oe);
        var le = !1,
          ie = W && W.silent,
          ce = function () {
            ie && u.fields[O] ? P(O) : (Y(), P());
          };
        if (W) {
          (le = !!(W.getValidator && W.getValidator())),
            W.getValidator && (u.fields[O].validators[X] = W.getValidator);
          var ae = Ue(u.formState.values, O) === void 0;
          W.initialValue !== void 0 &&
            (ae ||
              Ue(u.formState.values, O) === Ue(u.formState.initialValues, O)) &&
            ((u.formState.initialValues = nr(
              u.formState.initialValues || {},
              O,
              W.initialValue,
            )),
            (u.formState.values = nr(u.formState.values, O, W.initialValue)),
            I(void 0, ce)),
            W.defaultValue !== void 0 &&
              W.initialValue === void 0 &&
              Ue(u.formState.initialValues, O) === void 0 &&
              ae &&
              (u.formState.values = nr(u.formState.values, O, W.defaultValue));
        }
        return (
          le ? I(void 0, ce) : ce(),
          function () {
            var be = !1;
            u.fields[O] &&
              ((be = !!(
                u.fields[O].validators[X] && u.fields[O].validators[X]()
              )),
              delete u.fields[O].validators[X]);
            var xe = !!u.fieldSubscribers[O];
            xe && delete u.fieldSubscribers[O].entries[X];
            var He = xe && !Object.keys(u.fieldSubscribers[O].entries).length;
            He &&
              (delete u.fieldSubscribers[O],
              delete u.fields[O],
              be &&
                (u.formState.errors = nr(u.formState.errors, O, void 0) || {}),
              r &&
                (u.formState.values =
                  nr(u.formState.values, O, void 0, !0) || {})),
              ie ||
                (be
                  ? I(void 0, function () {
                      Y(), P();
                    })
                  : He && Y());
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
          L.initialize(O || {});
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
          I(void 0, function () {
            P(), Y();
          });
      },
      restart: function (O) {
        O === void 0 && (O = u.formState.initialValues),
          L.batch(function () {
            for (var M in u.fields)
              L.resetFieldState(M),
                (u.fields[M] = E({}, u.fields[M], {
                  active: !1,
                  lastFieldState: void 0,
                  modified: !1,
                  modifiedSinceLastSubmit: !1,
                  touched: !1,
                  valid: !0,
                  validating: !1,
                  visited: !1,
                }));
            L.reset(O);
          });
      },
      resumeValidation: function () {
        (f = !1),
          (m = !1),
          h &&
            I(void 0, function () {
              P(), Y();
            }),
          (h = !1);
      },
      setConfig: function (O, M) {
        switch (O) {
          case "debug":
            t = M;
            break;
          case "destroyOnUnregister":
            r = M;
            break;
          case "initialValues":
            L.initialize(M);
            break;
          case "keepDirtyOnReinitialize":
            n = M;
            break;
          case "mutators":
            (i = M),
              M
                ? (Object.keys(k).forEach(function (j) {
                    j in M || delete k[j];
                  }),
                  Object.keys(M).forEach(function (j) {
                    k[j] = v(j);
                  }))
                : Object.keys(k).forEach(function (j) {
                    delete k[j];
                  });
            break;
          case "onSubmit":
            a = M;
            break;
          case "validate":
            (s = M),
              I(void 0, function () {
                P(), Y();
              });
            break;
          case "validateOnBlur":
            l = M;
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
            z(), B(), (u.formState.submitFailed = !0), Y(), P();
            return;
          }
          var M = Object.keys(x);
          if (M.length) {
            Promise.all(
              M.map(function (ie) {
                return x[Number(ie)];
              }),
            ).then(L.submit, console.error);
            return;
          }
          var j = J();
          if (!j) {
            var W,
              X = !1,
              oe = function (ie) {
                O.submitting = !1;
                var ce = O.resetWhileSubmitting;
                return (
                  ce && (O.resetWhileSubmitting = !1),
                  ie && ii(ie)
                    ? ((O.submitFailed = !0),
                      (O.submitSucceeded = !1),
                      (O.submitErrors = ie),
                      (O.submitError = ie[i1]),
                      z())
                    : (ce || ((O.submitFailed = !1), (O.submitSucceeded = !0)),
                      D()),
                  Y(),
                  P(),
                  (X = !0),
                  W && W(ie),
                  ie
                );
              };
            (O.submitting = !0),
              (O.submitFailed = !1),
              (O.submitSucceeded = !1),
              (O.lastSubmittedValues = E({}, O.values)),
              B();
            var le = a(O.values, L, oe);
            if (!X) {
              if (le && Ap(le))
                return (
                  Y(),
                  P(),
                  le.then(oe, function (ie) {
                    throw (oe(), ie);
                  })
                );
              if (a.length >= 3)
                return (
                  Y(),
                  P(),
                  new Promise(function (ie) {
                    W = ie;
                  })
                );
              oe(le);
            }
          }
        }
      },
      subscribe: function (O, M) {
        if (!O) throw new Error("No callback given.");
        if (!M)
          throw new Error(
            "No subscription provided. What values do you want to listen to?",
          );
        var j = d1(O),
          W = u.subscribers,
          X = W.index++;
        W.entries[X] = { subscriber: j, subscription: M, notified: !1 };
        var oe = V();
        return (
          f1(j, M, oe, oe, c1, !0),
          function () {
            delete W.entries[X];
          }
        );
      },
    };
    return L;
  }
  var aI = ["render", "children", "component"];
  function h1(e, t, r) {
    var n = e.render,
      o = e.children,
      i = e.component,
      a = Z(e, aI);
    if (i)
      return S.createElement(
        i,
        Object.assign(t, a, { children: o, render: n }),
      );
    if (n)
      return n(
        o === void 0
          ? Object.assign(t, a)
          : Object.assign(t, a, { children: o }),
      );
    if (typeof o != "function")
      throw new Error(
        "Must specify either a render prop, a render function as children, or a component prop to " +
          r,
      );
    return o(Object.assign(t, a));
  }
  function gn(e, t, r) {
    r === void 0 &&
      (r = function (o, i) {
        return o === i;
      });
    var n = me.useRef(e);
    me.useEffect(function () {
      r(e, n.current) || (t(), (n.current = e));
    });
  }
  function sI(e) {
    var t = me.useRef();
    return t.current || (t.current = e()), t.current;
  }
  var m1 = function (e, t) {
      if (e === t) return !0;
      if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
      var r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (
        var o = Object.prototype.hasOwnProperty.bind(t), i = 0;
        i < r.length;
        i++
      ) {
        var a = r[i];
        if (!o(a) || e[a] !== t[a]) return !1;
      }
      return !0;
    },
    lI = function (e) {
      return !!(e && typeof e.stopPropagation == "function");
    },
    g1 = S.createContext();
  function b1(e) {
    var t = me.useRef(e);
    return (
      me.useEffect(function () {
        t.current = e;
      }),
      t
    );
  }
  var uI = "6.5.8",
    y1 = function (e, t, r) {
      r.forEach(function (n) {
        Object.defineProperty(e, n, {
          get: function () {
            return t[n];
          },
          enumerable: !0,
        });
      });
    },
    cI = function (e, t) {
      return y1(e, t, [
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
    dI = function (e, t) {
      return y1(e, t, [
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
    fI = [
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
    pI = { "final-form": rI, "react-final-form": uI },
    hI = u1.reduce(function (e, t) {
      return (e[t] = !0), e;
    }, {});
  function mI(e) {
    var t = e.debug,
      r = e.decorators,
      n = r === void 0 ? [] : r,
      o = e.destroyOnUnregister,
      i = e.form,
      a = e.initialValues,
      s = e.initialValuesEqual,
      l = e.keepDirtyOnReinitialize,
      u = e.mutators,
      d = e.onSubmit,
      f = e.subscription,
      h = f === void 0 ? hI : f,
      m = e.validate,
      g = e.validateOnBlur,
      x = Z(e, fI),
      R = {
        debug: t,
        destroyOnUnregister: o,
        initialValues: a,
        keepDirtyOnReinitialize: l,
        mutators: u,
        onSubmit: d,
        validate: m,
        validateOnBlur: g,
      },
      b = sI(function () {
        var I = i || iI(R);
        return I.pauseValidation(), I;
      }),
      y = S.useState(function () {
        var I = {};
        return (
          b.subscribe(function (P) {
            I = P;
          }, h)(),
          I
        );
      }),
      v = y[0],
      k = y[1],
      C = b1(v);
    S.useEffect(function () {
      b.isValidationPaused() && b.resumeValidation();
      var I = [
        b.subscribe(function (P) {
          m1(P, C.current) || k(P);
        }, h),
      ].concat(
        n
          ? n.map(function (P) {
              return P(b);
            })
          : [],
      );
      return function () {
        b.pauseValidation(),
          I.reverse().forEach(function (P) {
            return P();
          });
      };
    }, n),
      gn(t, function () {
        b.setConfig("debug", t);
      }),
      gn(o, function () {
        b.destroyOnUnregister = !!o;
      }),
      gn(l, function () {
        b.setConfig("keepDirtyOnReinitialize", l);
      }),
      gn(
        a,
        function () {
          b.setConfig("initialValues", a);
        },
        s || m1,
      ),
      gn(u, function () {
        b.setConfig("mutators", u);
      }),
      gn(d, function () {
        b.setConfig("onSubmit", d);
      }),
      gn(m, function () {
        b.setConfig("validate", m);
      }),
      gn(g, function () {
        b.setConfig("validateOnBlur", g);
      });
    var A = function (I) {
        return (
          I &&
            (typeof I.preventDefault == "function" && I.preventDefault(),
            typeof I.stopPropagation == "function" && I.stopPropagation()),
          b.submit()
        );
      },
      N = {
        form: E({}, b, {
          reset: function (I) {
            lI(I) ? b.reset() : b.reset(I);
          },
        }),
        handleSubmit: A,
      };
    return (
      cI(N, v),
      S.createElement(
        g1.Provider,
        { value: b },
        h1(E({}, x, { __versions: pI }), N, "ReactFinalForm"),
      )
    );
  }
  function gI(e) {
    var t = S.useContext(g1);
    if (!t)
      throw new Error(
        (e || "useForm") + " must be used inside of a <Form> component",
      );
    return t;
  }
  var bI =
      typeof window < "u" &&
      window.navigator &&
      window.navigator.product &&
      window.navigator.product === "ReactNative",
    yI = function (e) {
      var t = [];
      if (e)
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.selected && t.push(n.value);
        }
      return t;
    },
    vI = function (e, t, r, n) {
      if (
        (!n && e.nativeEvent && e.nativeEvent.text !== void 0) ||
        (n && e.nativeEvent)
      )
        return e.nativeEvent.text;
      var o = e,
        i = o.target,
        a = i.type,
        s = i.value,
        l = i.checked;
      switch (a) {
        case "checkbox":
          if (r !== void 0) {
            if (l) return Array.isArray(t) ? t.concat(r) : [r];
            if (!Array.isArray(t)) return t;
            var u = t.indexOf(r);
            return u < 0 ? t : t.slice(0, u).concat(t.slice(u + 1));
          } else return !!l;
        case "select-multiple":
          return yI(e.target.options);
        default:
          return s;
      }
    };
  function _p(e) {
    var t = S.useRef(e);
    return (
      S.useEffect(function () {
        t.current = e;
      }),
      S.useCallback(function () {
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return t.current.apply(null, n);
      }, [])
    );
  }
  var wI = s1.reduce(function (e, t) {
      return (e[t] = !0), e;
    }, {}),
    Ip = function (e, t) {
      return e === void 0 ? "" : e;
    },
    SI = function (e, t) {
      return e === "" ? void 0 : e;
    },
    xI = function (e, t) {
      return e === t;
    };
  function kI(e, t) {
    t === void 0 && (t = {});
    var r = t,
      n = r.afterSubmit,
      o = r.allowNull,
      i = r.component,
      a = r.data,
      s = r.defaultValue,
      l = r.format,
      u = l === void 0 ? Ip : l,
      d = r.formatOnBlur,
      f = r.initialValue,
      h = r.multiple,
      m = r.parse,
      g = m === void 0 ? SI : m,
      x = r.subscription,
      R = x === void 0 ? wI : x,
      b = r.type,
      y = r.validateFields,
      v = r.value,
      k = gI("useField"),
      C = b1(t),
      A = function (U, K) {
        return k.registerField(e, U, R, {
          afterSubmit: n,
          beforeSubmit: function () {
            var Y = C.current,
              J = Y.beforeSubmit,
              D = Y.formatOnBlur,
              B = Y.format,
              L = B === void 0 ? Ip : B;
            if (D) {
              var O = k.getFieldState(e),
                M = O.value,
                j = L(M, e);
              j !== M && k.change(e, j);
            }
            return J && J();
          },
          data: a,
          defaultValue: s,
          getValidator: function () {
            return C.current.validate;
          },
          initialValue: f,
          isEqual: function (Y, J) {
            return (C.current.isEqual || xI)(Y, J);
          },
          silent: K,
          validateFields: y,
        });
      },
      N = S.useRef(!0),
      I = S.useState(function () {
        var U = {},
          K = k.destroyOnUnregister;
        return (
          (k.destroyOnUnregister = !1),
          A(function (Y) {
            U = Y;
          }, !0)(),
          (k.destroyOnUnregister = K),
          U
        );
      }),
      P = I[0],
      z = I[1];
    S.useEffect(
      function () {
        return A(function (U) {
          N.current ? (N.current = !1) : z(U);
        }, !1);
      },
      [e, a, s, f],
    );
    var H = {};
    dI(H, P);
    var V = {
      name: e,
      get value() {
        var U = P.value;
        return (
          d ? i === "input" && (U = Ip(U)) : (U = u(U, e)),
          U === null && !o && (U = ""),
          b === "checkbox" || b === "radio"
            ? v
            : i === "select" && h
            ? U || []
            : U
        );
      },
      get checked() {
        var U = P.value;
        if (b === "checkbox")
          return (
            (U = u(U, e)),
            v === void 0 ? !!U : !!(Array.isArray(U) && ~U.indexOf(v))
          );
        if (b === "radio") return u(U, e) === v;
      },
      onBlur: _p(function (U) {
        if ((P.blur(), d)) {
          var K = k.getFieldState(P.name);
          P.change(u(K.value, P.name));
        }
      }),
      onChange: _p(function (U) {
        var K = U && U.target ? vI(U, P.value, v, bI) : U;
        P.change(g(K, e));
      }),
      onFocus: _p(function (U) {
        return P.focus();
      }),
    };
    h && (V.multiple = h), b !== void 0 && (V.type = b);
    var Q = { input: V, meta: H };
    return Q;
  }
  var EI = [
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
    Qn = S.forwardRef(function (e, t) {
      var r = e.afterSubmit,
        n = e.allowNull,
        o = e.beforeSubmit,
        i = e.children,
        a = e.component,
        s = e.data,
        l = e.defaultValue,
        u = e.format,
        d = e.formatOnBlur,
        f = e.initialValue,
        h = e.isEqual,
        m = e.multiple,
        g = e.name,
        x = e.parse,
        R = e.subscription,
        b = e.type,
        y = e.validate,
        v = e.validateFields,
        k = e.value,
        C = Z(e, EI),
        A = kI(g, {
          afterSubmit: r,
          allowNull: n,
          beforeSubmit: o,
          children: i,
          component: a,
          data: s,
          defaultValue: l,
          format: u,
          formatOnBlur: d,
          initialValue: f,
          isEqual: h,
          multiple: m,
          parse: x,
          subscription: R,
          type: b,
          validate: y,
          validateFields: v,
          value: k,
        });
      if (typeof i == "function") return i(E({}, A, C));
      if (typeof a == "string")
        return S.createElement(a, E({}, A.input, { children: i, ref: t }, C));
      if (!g)
        throw new Error("prop name cannot be undefined in <Field> component");
      return h1(
        E({ children: i, component: a, ref: t }, C),
        A,
        "Field(" + g + ")",
      );
    });
  function Pp({ cluster: e = "mongodb-atlas", db: t, collection: r }) {
    const n = ni();
    return me.useMemo(
      () => n.currentUser.mongoClient(e).db(t).collection(r),
      [n.currentUser, e, t, r],
    );
  }
  const { dataSourceName: CI } = Ta,
    OI = () => {
      const [e, t] = S.useState({}),
        r = Pp({
          cluster: CI,
          db: localStorage.getItem("REACT_APP_DB"),
          collection: localStorage.getItem("REACT_APP_COLLECTION"),
        }),
        n = (a) => new Promise((s) => setTimeout(s, a)),
        o = async (a) => {
          await n(300),
            (a.key = "key"),
            window.alert(JSON.stringify(a, 0, 2)),
            console.log(a);
          try {
            const s = await r.findOneAndUpdate(
              { key: "key" },
              { $set: a },
              { upsert: !0 },
            );
            console.log(
              `Inserted ${s.insertedCount} documents into the collection`,
            );
          } catch (s) {
            console.error(s);
          }
        };
      S.useEffect(() => {
        (async () => {
          try {
            const a = await r.findOne({ key: "key" });
            console.log(`Found a document : ${JSON.stringify(a, 0, 2)}`), t(a);
          } catch (a) {
            console.error(a);
          }
        })();
      }, []);
      const i = (a) => (a ? void 0 : "Required");
      return T("div", {
        children: T(
          ({ subscription: a }) =>
            T(mI, {
              onSubmit: o,
              subscription: a,
              initialValues: e,
              render: ({
                handleSubmit: s,
                form: l,
                submitting: u,
                pristine: d,
                values: f,
              }) =>
                T("form", {
                  onSubmit: s,
                  children: de(ha, {
                    sx: { flexDirection: "column", alignItems: "center" },
                    children: [
                      T(ha, {
                        sx: { display: "flex", marginBottom: 2 },
                        children: de(Jt, {
                          component: "h1",
                          variant: "h5",
                          children: [" ", "ADMINISTRACION DE CONTENIDO"],
                        }),
                      }),
                      de(ha, {
                        sx: { display: "flex", marginBottom: 2 },
                        children: [
                          T(Vo, {
                            type: "submit",
                            disabled: u,
                            variant: "contained",
                            sx: { mt: 3, mb: 2 },
                            children: "Submit",
                          }),
                          T(Vo, {
                            onClick: () => {
                              l.reset();
                            },
                            disabled: u || d,
                            color: "warning",
                            sx: { mt: 3, mb: 2 },
                            children: "Reset",
                          }),
                        ],
                      }),
                      T(Qn, {
                        name: "title",
                        validate: i,
                        children: ({ input: h, meta: m }) =>
                          T(fr, {
                            ...h,
                            label: "Subtitulo",
                            placeholder: "Subtitulo",
                            variant: "outlined",
                            error: m.touched && m.error,
                            helperText: m.touched && m.error,
                          }),
                      }),
                      T(Qn, {
                        name: "whatIs",
                        validate: i,
                        children: ({ input: h, meta: m }) =>
                          T(fr, {
                            ...h,
                            label: "Que es telehuertos",
                            placeholder: "Que es telehuertos",
                            variant: "outlined",
                            error: m.touched && m.error,
                            helperText: m.touched && m.error,
                          }),
                      }),
                      T(Qn, {
                        name: "howToMake",
                        validate: i,
                        children: ({ input: h, meta: m }) =>
                          T(fr, {
                            ...h,
                            label: "Como hacer telehuertos",
                            placeholder: "Como hacer telehuertos",
                            variant: "outlined",
                            error: m.touched && m.error,
                            helperText: m.touched && m.error,
                          }),
                      }),
                      T(Qn, {
                        name: "meetingTime",
                        validate: i,
                        children: ({ input: h, meta: m }) =>
                          T(fr, {
                            ...h,
                            label: "Horarios",
                            placeholder: "Horarios",
                            variant: "outlined",
                            error: m.touched && m.error,
                            helperText: m.touched && m.error,
                          }),
                      }),
                      T(Qn, {
                        name: "escuela",
                        validate: i,
                        children: ({ input: h, meta: m }) =>
                          T(fr, {
                            ...h,
                            label: "Ense\xF1ar de Teleturismo",
                            placeholder: "Ense\xF1ar de Teleturismo",
                            variant: "outlined",
                            error: m.touched && m.error,
                            helperText: m.touched && m.error,
                          }),
                      }),
                      T(Qn, {
                        name: "videoTutorial",
                        validate: i,
                        children: ({ input: h, meta: m }) =>
                          T(fr, {
                            ...h,
                            label: "Tutorial de video link",
                            placeholder: "Tutorial de video link",
                            variant: "outlined",
                            error: m.touched && m.error,
                            helperText: m.touched && m.error,
                          }),
                      }),
                      T(Qn, {
                        name: "gallery",
                        validate: i,
                        children: ({ input: h, meta: m }) =>
                          T(fr, {
                            ...h,
                            label: "Galeria de fotos",
                            placeholder: "Galeria de fotos",
                            variant: "outlined",
                            error: m.touched && m.error,
                            helperText: m.touched && m.error,
                          }),
                      }),
                    ],
                  }),
                }),
            }),
          { subscription: { submitting: !0, pristine: !0 } },
        ),
      });
    },
    { dataSourceName: NI } = Ta;
  function TI() {
    const [e, t] = S.useState(!0),
      r = Pp({
        cluster: NI,
        db: localStorage.getItem("REACT_APP_DB"),
        collection: localStorage.getItem("REACT_APP_COLLECTION"),
      }),
      [n, o] = S.useState({});
    S.useEffect(() => {
      i();
    }, [e, n]);
    const i = async () => {
      try {
        const a = await r.findOne({ key: "key" });
        o(a), t(!1);
      } catch (a) {
        console.error(a);
      }
    };
    return T(Uf, { children: e && n ? T(lT, {}) : T(OI, { data: n }) });
  }
  var $p = {},
    RI = oi;
  Object.defineProperty($p, "__esModule", { value: !0 });
  var v1 = ($p.default = void 0),
    AI = RI(Ou()),
    _I = Nu,
    II = (0, AI.default)(
      (0, _I.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
      "Add",
    );
  v1 = $p.default = II;
  const Iu = () => {},
    PI = { onInsert: Iu, onUpdate: Iu, onReplace: Iu, onDelete: Iu };
  function $I(e, t) {
    const r = me.useMemo(() => ({}), []),
      n = { ...PI, ...t },
      o = me.useRef(n);
    me.useEffect(() => {
      o.current = {
        onInsert: n.onInsert,
        onUpdate: n.onUpdate,
        onReplace: n.onReplace,
        onDelete: n.onDelete,
      };
    }, [n.onInsert, n.onUpdate, n.onReplace, n.onDelete]),
      me.useEffect(() => {
        let i;
        return (
          (async () => {
            i = e.watch({ filter: r });
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
      }, [e, r]);
  }
  const { dataSourceName: MI } = Ta;
  function LI() {
    const e = ni(),
      [t, r] = me.useState([]),
      [n, o] = me.useState(!0),
      i = Zs(),
      a = window.env.REACT_APP_NAME,
      s = window.env.REACT_APP_PROJECTS.find((f) => f.name === a);
    if (!s) {
      console.error(`Metadata not found for project: ${a}`);
      return;
    }
    const { db: l, collection: u } = s;
    let d;
    try {
      d = Pp({ cluster: MI, db: l, collection: u });
    } catch (f) {
      console.error("Error while creating the collection:", f),
        (d = null),
        i("/");
    }
    return (
      me.useEffect(() => {
        let f = !0;
        const h = d.find({});
        return (
          f &&
            h.then((m) => {
              r(m), o(!1);
            }),
          () => {
            f = !1;
          }
        );
      }, [d]),
      $I(d, {
        onInsert: (f) => {
          r((h) => {
            if (n) return h;
            const m = Au(h, f.fullDocument) ?? h.length;
            return m === h.length ? k_(h, m, f.fullDocument) : h;
          });
        },
        onUpdate: (f) => {
          r((h) => {
            if (n) return h;
            const m = Au(h, f.fullDocument);
            return C_(h, m, () => f.fullDocument);
          });
        },
        onReplace: (f) => {
          r((h) => {
            if (n) return h;
            const m = Au(h, f.fullDocument);
            return E_(h, m, f.fullDocument);
          });
        },
        onDelete: (f) => {
          r((h) => {
            if (n) return h;
            const m = Au(h, { _id: f.documentKey._id });
            return m >= 0 ? O_(h, m) : h;
          });
        },
      }),
      {
        loading: n,
        todos: t,
        saveTodo: async (f) => {
          if (f.data.summary && f.data.price) {
            (f.data.owner_id = e.currentUser.id), (f.data.isComplete = !1);
            try {
              console.log(f), await d.insertOne(f.data);
            } catch (h) {
              h.error.match(/^Duplicate key error/) &&
                console.warn(
                  "The following error means that this app tried to insert a todo multiple times (i.e. an existing todo has the same _id). In this app we just catch the error and move on. In your app, you might want to debounce the save input or implement an additional loading state to avoid sending the request in the first place.",
                ),
                console.error(h);
            }
          }
        },
        toggleTodo: async (f) => {
          await d.updateOne(
            { _id: f._id },
            { $set: { isComplete: !f.isComplete } },
          );
        },
        deleteTodo: async (f) => {
          await d.deleteOne({ _id: f._id });
        },
      }
    );
  }
  var Mp = {},
    BI = oi;
  Object.defineProperty(Mp, "__esModule", { value: !0 });
  var Lp = (Mp.default = void 0),
    zI = BI(Ou()),
    FI = Nu,
    jI = (0, zI.default)(
      (0, FI.jsx)("path", {
        d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Clear",
    );
  Lp = Mp.default = jI;
  function UI({ todo: e, todoActions: t }) {
    return de(my, {
      children: [
        T(LT, {
          children: T(LO, {
            "data-testid": "todo-checkbox",
            edge: "start",
            color: "primary",
            checked: e.isComplete,
            onClick: () => {
              t.toggleTodo(e);
            },
          }),
        }),
        T(uu, { children: e.summary }),
        T(uu, { children: e.price }),
        T(Gf, {
          children: T(eu, {
            "data-testid": "todo-delete-button",
            edge: "end",
            size: "small",
            onClick: () => {
              t.deleteTodo(e);
            },
            children: T(Lp, {}),
          }),
        }),
      ],
    });
  }
  function DI() {
    const [e, t] = me.useState([]);
    return {
      draftTodos: e,
      createDraftTodo: () => {
        const r = {
          data: { summary: "", price: 0, isComplete: !1, owner_id: "" },
        };
        t((n) => [...n, r]);
      },
      setDraftTodoSummary: (r, n) => {
        const o = { summary: n, price: r.data.price };
        t((i) => {
          const a = i.findIndex((s) => s._id === r._id);
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
      deleteDraftTodo: (r) => {
        t((n) => {
          const o = n.findIndex((i) => i._id === r._id);
          return [...n.slice(0, o), ...n.slice(o + 1)];
        });
      },
      setDraftTodoPrice: (r, n) => {
        const o = { summary: r.data.summary, price: n };
        t((i) => {
          const a = i.findIndex((s) => s._id === r._id);
          return [...i.slice(0, a), { ...i[a], data: o }, ...i.slice(a + 1)];
        });
      },
    };
  }
  const WI = Object.fromEntries
    ? Object.fromEntries
    : (e) => {
        if (!e || !e[Symbol.iterator])
          throw new Error(
            "Object.fromEntries() requires a single iterable argument",
          );
        const t = {};
        return (
          Object.keys(e).forEach((r) => {
            const [n, o] = e[r];
            t[n] = o;
          }),
          t
        );
      };
  function Pu(e) {
    return Object.keys(e);
  }
  function w1(e, t) {
    if (!e) throw new Error(t);
  }
  function S1(e, t) {
    return t;
  }
  const Bp = (e) => {
    const t = e.length;
    let r = 0,
      n = "";
    for (; r < t; r++) {
      const o = e[r];
      if (o == null) continue;
      let i;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o)) i = Bp(o);
          else {
            w1(!S1(o, !1)), (i = "");
            for (const a in o) o[a] && a && (i && (i += " "), (i += a));
          }
          break;
        }
        default:
          i = o;
      }
      i && (n && (n += " "), (n += i));
    }
    return n;
  };
  function VI(e, t) {
    const r = S.useRef();
    return (
      (!r.current ||
        t.length !== r.current.prevDeps.length ||
        r.current.prevDeps.map((n, o) => n === t[o]).indexOf(!1) >= 0) &&
        (r.current = { v: e(), prevDeps: [...t] }),
      r.current.v
    );
  }
  function HI(e) {
    return (
      e instanceof Object &&
      !("styles" in e) &&
      !("length" in e) &&
      !("__emotion_styles" in e)
    );
  }
  const { createCssAndCx: qI } = (() => {
    function e(r, n, o) {
      const i = [],
        a = K0(r, i, o);
      return i.length < 2 ? o : a + n(i);
    }
    function t(r) {
      const { cache: n } = r,
        o = (...i) => {
          const a = _l(i, n.registered);
          yf(n, a, !1);
          const s = `${n.key}-${a.name}`;
          e: {
            const l = i[0];
            if (!HI(l)) break e;
            x1.saveClassNameCSSObjectMapping(n, s, l);
          }
          return s;
        };
      return {
        css: o,
        cx: (...i) => {
          const a = Bp(i),
            s = x1.fixClassName(n, a, o);
          return e(n.registered, o, s);
        },
      };
    }
    return { createCssAndCx: t };
  })();
  function GI(e) {
    const { useCache: t } = e;
    function r() {
      const n = t(),
        { css: o, cx: i } = VI(() => qI({ cache: n }), [n]);
      return { css: o, cx: i };
    }
    return { useCssAndCx: r };
  }
  const x1 = (() => {
    const e = new WeakMap();
    return {
      saveClassNameCSSObjectMapping: (t, r, n) => {
        let o = e.get(t);
        o === void 0 && ((o = new Map()), e.set(t, o)), o.set(r, n);
      },
      fixClassName: (() => {
        function t(r) {
          let n = !1;
          return r.map(([o, i]) => {
            if (i === void 0) return o;
            let a;
            if (n) a = { "&&": i };
            else {
              a = o;
              for (const s in i)
                if (s.startsWith("@media")) {
                  n = !0;
                  break;
                }
            }
            return a;
          });
        }
        return (r, n, o) => {
          const i = e.get(r);
          return Bp(
            t(n.split(" ").map((a) => [a, i == null ? void 0 : i.get(a)])).map(
              (a) => (typeof a == "string" ? a : o(a)),
            ),
          );
        };
      })(),
    };
  })();
  function $u(e) {
    if (!(e instanceof Object) || typeof e == "function") return e;
    const t = [];
    for (const r in e) {
      const n = e[r],
        o = typeof n;
      if (
        !(
          o === "string" ||
          (o === "number" && !isNaN(n)) ||
          o === "boolean" ||
          n === void 0 ||
          n === null
        )
      )
        return e;
      t.push(`${r}:${o}_${n}`);
    }
    return "xSqLiJdLMd9s" + t.join("|");
  }
  function k1(e, t, r) {
    if (!(t instanceof Object)) return e;
    const n = {};
    return (
      Pu(e).forEach((o) => (n[o] = r(e[o], t[o]))),
      Pu(t).forEach((o) => {
        if (o in e) return;
        const i = t[o];
        typeof i == "string" && (n[o] = i);
      }),
      n
    );
  }
  let KI = 0;
  function E1(e) {
    const { useTheme: t, cache: r } = e;
    function n() {
      var s;
      const l = gk(),
        u = XI(),
        d = (s = r ?? u) !== null && s !== void 0 ? s : l;
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
    const { useCssAndCx: o } = GI({ useCache: n });
    function i(s) {
      const { name: l, uniqId: u = KI++ } = s ?? {},
        d = typeof l != "object" ? l : Object.keys(l)[0];
      return function (f) {
        const h = typeof f == "function" ? f : () => f;
        return function (m, g) {
          var x, R;
          const b = t(),
            { css: y, cx: v } = o(),
            k = n();
          let C = S.useMemo(() => {
            const N = {},
              I =
                typeof Proxy < "u" &&
                new Proxy(
                  {},
                  {
                    get: (H, V) => (
                      typeof V == "symbol" && w1(!1),
                      (N[V] = `${k.key}-${u}${
                        d !== void 0 ? `-${d}` : ""
                      }-${V}-ref`)
                    ),
                  },
                ),
              P = h(b, m, I || {}),
              z = WI(
                Pu(P).map((H) => {
                  const V = P[H];
                  return (
                    V.label || (V.label = `${d !== void 0 ? `${d}-` : ""}${H}`),
                    [H, `${y(V)}${S1(H, H in N) ? ` ${N[H]}` : ""}`]
                  );
                }),
              );
            return (
              Pu(N).forEach((H) => {
                H in z || (z[H] = N[H]);
              }),
              z
            );
          }, [k, y, v, b, $u(m)]);
          const A = g == null ? void 0 : g.props.classes;
          C = S.useMemo(() => k1(C, A, v), [C, $u(A), v]);
          {
            let N;
            try {
              N =
                d !== void 0
                  ? (R =
                      (x = b.components) === null || x === void 0
                        ? void 0
                        : x[d]) === null || R === void 0
                    ? void 0
                    : R.styleOverrides
                  : void 0;
            } catch {}
            const I = S.useMemo(() => {
              if (!N) return;
              const P = {};
              for (const z in N) {
                const H = N[z];
                H instanceof Object &&
                  (P[z] = y(
                    typeof H == "function"
                      ? H(
                          Object.assign(
                            {
                              theme: b,
                              ownerState: g == null ? void 0 : g.ownerState,
                            },
                            g == null ? void 0 : g.props,
                          ),
                        )
                      : H,
                  ));
              }
              return P;
            }, [
              N === void 0 ? void 0 : JSON.stringify(N),
              $u(g == null ? void 0 : g.props),
              $u(g == null ? void 0 : g.ownerState),
              y,
            ]);
            C = S.useMemo(() => k1(C, I, v), [C, I, v]);
          }
          return { classes: C, theme: b, css: y, cx: v };
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
  const QI = S.createContext(void 0);
  function XI() {
    return S.useContext(QI);
  }
  function C1(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var O1 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
          t.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
            (r[n[o]] = e[n[o]]);
      return r;
    };
  function YI(e) {
    const { useTheme: t, cache: r } = e,
      { makeStyles: n } = E1({ useTheme: t, cache: r });
    function o(i, a, s) {
      const l =
          typeof i == "string"
            ? (() => {
                const m = i,
                  g = function (x) {
                    var { children: R } = x,
                      b = O1(x, ["children"]);
                    return S.createElement(m, b, R);
                  };
                return Object.defineProperty(g, "name", { value: C1(m) }), g;
              })()
            : i,
        u = (() => {
          {
            const { name: m } = s ?? {};
            if (m !== void 0)
              return typeof m != "object" ? m : Object.keys(m)[0];
          }
          {
            const m = l.displayName;
            if (typeof m == "string" && m !== "") return m;
          }
          {
            const { name: m } = l;
            if (m) return m;
          }
        })(),
        d = n(Object.assign(Object.assign({}, s), { name: u }))(
          typeof a == "function" ? (m, g, x) => N1(a(m, g, x)) : N1(a),
        );
      function f(m) {
        for (const g in m) if (g !== "root") return !0;
        return !1;
      }
      const h = S.forwardRef(function (m, g) {
        const { className: x, classes: R } = m,
          b = O1(m, ["className", "classes"]),
          { classes: y, cx: v } = d(m, { props: m });
        return me.createElement(
          l,
          Object.assign(
            { ref: g, className: f(y) ? x : v(y.root, x) },
            typeof i == "string" ? {} : { classes: y },
            b,
          ),
        );
      });
      return (
        u !== void 0 &&
          ((h.displayName = `${C1(u)}WithStyles`),
          Object.defineProperty(h, "name", { value: h.displayName })),
        h
      );
    }
    return { withStyles: o };
  }
  function N1(e) {
    const t = {},
      r = {};
    return (
      Object.keys(e).forEach(
        (n) => ((n.startsWith("@media") ? r : t)[n] = e[n]),
      ),
      Object.keys(r).forEach((n) => {
        const o = r[n];
        Object.keys(o).forEach((i) => {
          var a;
          return (t[i] = Object.assign(
            Object.assign({}, (a = t[i]) !== null && a !== void 0 ? a : {}),
            { [n]: o[i] },
          ));
        });
      }),
      t
    );
  }
  function JI(e) {
    return Object.assign(Object.assign({}, E1(e)), YI(e));
  }
  const {
      makeStyles: v6,
      withStyles: ZI,
      useStyles: w6,
    } = JI({ useTheme: Bo }),
    e6 = ZI(my, { secondaryAction: { paddingRight: "120px" } });
  function t6({ todo: e, todoActions: t, draftTodoActions: r }) {
    return de(e6, {
      children: [
        T(uu, {
          inset: !0,
          children: T(fr, {
            style: { width: "100%" },
            placeholder: "Ingresar evento?",
            size: "small",
            value: e.data.summary,
            onChange: (n) => {
              r.setDraftTodoSummary(e, n.target.value);
            },
          }),
        }),
        T(uu, {
          inset: !0,
          children: T(fr, {
            style: { width: "100%" },
            placeholder: "Cuanto ocupamos?",
            size: "small",
            value: e.data.price,
            onChange: (n) => {
              r.setDraftTodoPrice(e, n.target.value);
            },
          }),
        }),
        de(Gf, {
          children: [
            T(Vo, {
              variant: "outlined",
              size: "small",
              onClick: async () => {
                await t.saveTodo(e), r.deleteDraftTodo(e);
              },
              children: "Save",
            }),
            T(eu, {
              edge: "end",
              size: "small",
              onClick: () => {
                r.deleteDraftTodo(e);
              },
              children: T(Lp, {}),
            }),
          ],
        }),
      ],
    });
  }
  function r6(e, t) {
    me.useEffect(() => {
      const r = setTimeout(() => {
        e();
      }, t);
      return () => clearTimeout(r);
    }, [e, t]);
  }
  function n6(e, t) {
    const [r, n] = me.useState(!1);
    return (
      r6(() => {
        e && n(!0);
      }, [t]),
      me.useEffect(() => {
        e || n(!1);
      }, [e]),
      r
    );
  }
  function o6() {
    const { loading: e, todos: t, ...r } = LI(),
      { draftTodos: n, ...o } = DI();
    return (
      n6(e, 200),
      de("div", {
        className: "todo-items-container",
        children: [
          T(Jt, {
            component: "p",
            variant: "h5",
            children: `You have ${t.length} To-Do Item${
              t.length === 1 ? "" : "s"
            }`,
          }),
          T(Vo, {
            variant: "contained",
            color: "primary",
            startIcon: T(v1, {}),
            onClick: () => o.createDraftTodo(),
            children: "Add To-Do",
          }),
          de(py, {
            style: { width: "100%" },
            children: [
              t.map((i) => T(UI, { todo: i, todoActions: r }, Ru(i))),
              n.map((i) =>
                T(t6, { todo: i, todoActions: r, draftTodoActions: o }, Ru(i)),
              ),
            ],
          }),
        ],
      })
    );
  }
  function i6({ project: e }) {
    const t = Zs(),
      { currentUser: r, logOut: n } = ni();
    return (
      r || t("/"),
      T(Jp, {
        children: r
          ? T(Uf, {
              className: "main-container",
              children: (() => {
                switch (e) {
                  case "caja-chica":
                    return T(o6, {});
                  case "telehuertos":
                    return T(TI, {});
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
  const T1 = {
      green: { ...Ln, 500: "#09804C", A400: "#B9EACD" },
      purple: { ...$n, 500: "#6200EE", A400: "#9795F9" },
      orange: _o,
      red: Pn,
      blue: Mn,
    },
    a6 = { palette: { primary: T1.green, secondary: T1.green } },
    s6 = Kl(a6);
  function l6({ children: e }) {
    return T(Ck, {
      injectFirst: !0,
      children: T(vb, { theme: s6, children: e }),
    });
  }
  function u6() {
    const e =
      window.env && window.env.REACT_APP_NAME
        ? window.env.REACT_APP_NAME.toUpperCase()
        : "APP NAME";
    return T(Jt, {
      className: "app-bar-title",
      component: "h1",
      variant: "h5",
      children: e,
    });
  }
  const c6 = "/caja-chica/assets/ESCUDO COLOR-6433e081.svg",
    { appId: d6 } = Ta;
  function f6() {
    return T(Yx, {
      basename: "/caja-chica",
      children: T(l6, { children: T(f_, { appId: d6, children: T(p6, {}) }) }),
    });
  }
  function p6() {
    window.env || alert("No se ha encontrado el archivo env.js");
    const { currentUser: e, logOut: t } = ni(),
      r = Zs();
    return de("div", {
      className: "App",
      children: [
        e &&
          T(O3, {
            position: "sticky",
            children: de(rR, {
              children: [
                T("img", {
                  src: c6,
                  alt: "Logo",
                  style: { width: "75px", height: "75px", marginRight: "10px" },
                }),
                T(u6, {}),
                T(Vo, {
                  variant: "contained",
                  color: "secondary",
                  onClick: async () => {
                    await t(), localStorage.clear(), r("/");
                  },
                  children: T(Jt, { variant: "button", children: "Log Out" }),
                }),
              ],
            }),
          }),
        de(Qx, {
          children: [
            T(Jd, { path: "/", element: T(W_, {}) }),
            T(Jd, {
              path: "/admin",
              element: T(i6, {
                project:
                  localStorage.getItem("REACT_APP_NAME") ||
                  window.env.REACT_APP_NAME,
              }),
            }),
          ],
        }),
      ],
    });
  }
  const h6 = "modulepreload",
    m6 = function (e) {
      return "/caja-chica/" + e;
    },
    R1 = {},
    g6 = function (e, t, r) {
      if (!t || t.length === 0) return e();
      const n = document.getElementsByTagName("link");
      return Promise.all(
        t.map((o) => {
          if (((o = m6(o)), o in R1)) return;
          R1[o] = !0;
          const i = o.endsWith(".css"),
            a = i ? '[rel="stylesheet"]' : "";
          if (r)
            for (let l = n.length - 1; l >= 0; l--) {
              const u = n[l];
              if (u.href === o && (!i || u.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${a}`)) return;
          const s = document.createElement("link");
          if (
            ((s.rel = i ? "stylesheet" : h6),
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
    b6 = (e) => {
      e &&
        e instanceof Function &&
        g6(() => import("./web-vitals-7b71ae84.js"), []).then(
          ({ getCLS: t, getFID: r, getFCP: n, getLCP: o, getTTFB: i }) => {
            t(e), r(e), n(e), o(e), i(e);
          },
        );
    };
  i0(document.getElementById("root")).render(
    T(me.StrictMode, { children: T(f6, {}) }),
  ),
    b6();
})();
