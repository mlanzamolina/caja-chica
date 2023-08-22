(async () => {
  function Sx(e, t) {
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
  function qh(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function Kh(e) {
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
  var Ti = {},
    kx = {
      get exports() {
        return Ti;
      },
      set exports(e) {
        Ti = e;
      },
    },
    cs = {},
    x = {},
    Ex = {
      get exports() {
        return x;
      },
      set exports(e) {
        x = e;
      },
    },
    ve = {},
    Pi = Symbol.for("react.element"),
    Cx = Symbol.for("react.portal"),
    Ox = Symbol.for("react.fragment"),
    Tx = Symbol.for("react.strict_mode"),
    Px = Symbol.for("react.profiler"),
    Rx = Symbol.for("react.provider"),
    Nx = Symbol.for("react.context"),
    Ax = Symbol.for("react.forward_ref"),
    _x = Symbol.for("react.suspense"),
    Mx = Symbol.for("react.memo"),
    Ix = Symbol.for("react.lazy"),
    Gh = Symbol.iterator;
  function $x(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Gh && e[Gh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Jh = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Yh = Object.assign,
    Xh = {};
  function yo(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Xh),
      (this.updater = n || Jh);
  }
  (yo.prototype.isReactComponent = {}),
    (yo.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (yo.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  function Qh() {}
  Qh.prototype = yo.prototype;
  function kc(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Xh),
      (this.updater = n || Jh);
  }
  var Ec = (kc.prototype = new Qh());
  (Ec.constructor = kc), Yh(Ec, yo.prototype), (Ec.isPureReactComponent = !0);
  var Zh = Array.isArray,
    em = Object.prototype.hasOwnProperty,
    Cc = { current: null },
    tm = { key: !0, ref: !0, __self: !0, __source: !0 };
  function nm(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        em.call(t, r) && !tm.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
      for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
      o.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
    return {
      $$typeof: Pi,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: Cc.current,
    };
  }
  function Lx(e, t) {
    return {
      $$typeof: Pi,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Oc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Pi;
  }
  function Bx(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var rm = /\/+/g;
  function Tc(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Bx("" + e.key)
      : t.toString(36);
  }
  function ds(e, t, n, r, o) {
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
            case Pi:
            case Cx:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (o = o(a)),
        (e = r === "" ? "." + Tc(a, 0) : r),
        Zh(o)
          ? ((n = ""),
            e != null && (n = e.replace(rm, "$&/") + "/"),
            ds(o, t, n, "", function (u) {
              return u;
            }))
          : o != null &&
            (Oc(o) &&
              (o = Lx(
                o,
                n +
                  (!o.key || (a && a.key === o.key)
                    ? ""
                    : ("" + o.key).replace(rm, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((a = 0), (r = r === "" ? "." : r + ":"), Zh(e)))
      for (var s = 0; s < e.length; s++) {
        i = e[s];
        var l = r + Tc(i, s);
        a += ds(i, t, n, l, o);
      }
    else if (((l = $x(e)), typeof l == "function"))
      for (e = l.call(e), s = 0; !(i = e.next()).done; )
        (i = i.value), (l = r + Tc(i, s++)), (a += ds(i, t, n, l, o));
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
  function fs(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      ds(e, r, "", "", function (i) {
        return t.call(n, i, o++);
      }),
      r
    );
  }
  function zx(e) {
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
  var St = { current: null },
    ps = { transition: null },
    jx = {
      ReactCurrentDispatcher: St,
      ReactCurrentBatchConfig: ps,
      ReactCurrentOwner: Cc,
    };
  (ve.Children = {
    map: fs,
    forEach: function (e, t, n) {
      fs(
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
        fs(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        fs(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Oc(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  }),
    (ve.Component = yo),
    (ve.Fragment = Ox),
    (ve.Profiler = Px),
    (ve.PureComponent = kc),
    (ve.StrictMode = Tx),
    (ve.Suspense = _x),
    (ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jx),
    (ve.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var r = Yh({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((i = t.ref), (a = Cc.current)),
          t.key !== void 0 && (o = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps;
        for (l in t)
          em.call(t, l) &&
            !tm.hasOwnProperty(l) &&
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
        $$typeof: Pi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a,
      };
    }),
    (ve.createContext = function (e) {
      return (
        (e = {
          $$typeof: Nx,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: Rx, _context: e }),
        (e.Consumer = e)
      );
    }),
    (ve.createElement = nm),
    (ve.createFactory = function (e) {
      var t = nm.bind(null, e);
      return (t.type = e), t;
    }),
    (ve.createRef = function () {
      return { current: null };
    }),
    (ve.forwardRef = function (e) {
      return { $$typeof: Ax, render: e };
    }),
    (ve.isValidElement = Oc),
    (ve.lazy = function (e) {
      return { $$typeof: Ix, _payload: { _status: -1, _result: e }, _init: zx };
    }),
    (ve.memo = function (e, t) {
      return { $$typeof: Mx, type: e, compare: t === void 0 ? null : t };
    }),
    (ve.startTransition = function (e) {
      var t = ps.transition;
      ps.transition = {};
      try {
        e();
      } finally {
        ps.transition = t;
      }
    }),
    (ve.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ve.useCallback = function (e, t) {
      return St.current.useCallback(e, t);
    }),
    (ve.useContext = function (e) {
      return St.current.useContext(e);
    }),
    (ve.useDebugValue = function () {}),
    (ve.useDeferredValue = function (e) {
      return St.current.useDeferredValue(e);
    }),
    (ve.useEffect = function (e, t) {
      return St.current.useEffect(e, t);
    }),
    (ve.useId = function () {
      return St.current.useId();
    }),
    (ve.useImperativeHandle = function (e, t, n) {
      return St.current.useImperativeHandle(e, t, n);
    }),
    (ve.useInsertionEffect = function (e, t) {
      return St.current.useInsertionEffect(e, t);
    }),
    (ve.useLayoutEffect = function (e, t) {
      return St.current.useLayoutEffect(e, t);
    }),
    (ve.useMemo = function (e, t) {
      return St.current.useMemo(e, t);
    }),
    (ve.useReducer = function (e, t, n) {
      return St.current.useReducer(e, t, n);
    }),
    (ve.useRef = function (e) {
      return St.current.useRef(e);
    }),
    (ve.useState = function (e) {
      return St.current.useState(e);
    }),
    (ve.useSyncExternalStore = function (e, t, n) {
      return St.current.useSyncExternalStore(e, t, n);
    }),
    (ve.useTransition = function () {
      return St.current.useTransition();
    }),
    (ve.version = "18.2.0"),
    (function (e) {
      e.exports = ve;
    })(Ex);
  const pe = qh(x),
    hs = Sx({ __proto__: null, default: pe }, [x]);
  var Fx = x,
    Dx = Symbol.for("react.element"),
    Ux = Symbol.for("react.fragment"),
    Wx = Object.prototype.hasOwnProperty,
    Vx =
      Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Hx = { key: !0, ref: !0, __self: !0, __source: !0 };
  function om(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null;
    n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (r in t) Wx.call(t, r) && !Hx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: Dx,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: Vx.current,
    };
  }
  (cs.Fragment = Ux),
    (cs.jsx = om),
    (cs.jsxs = om),
    (function (e) {
      e.exports = cs;
    })(kx);
  const Pc = Ti.Fragment,
    C = Ti.jsx,
    te = Ti.jsxs,
    qx = Object.freeze(
      Object.defineProperty(
        { __proto__: null, Fragment: Pc, jsx: C, jsxs: te },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  var vo = {},
    Kx = {
      get exports() {
        return vo;
      },
      set exports(e) {
        vo = e;
      },
    },
    jt = {},
    Rc = {},
    Gx = {
      get exports() {
        return Rc;
      },
      set exports(e) {
        Rc = e;
      },
    },
    im = {};
  (function (e) {
    function t(L, I) {
      var z = L.length;
      L.push(I);
      e: for (; 0 < z; ) {
        var J = (z - 1) >>> 1,
          re = L[J];
        if (0 < o(re, I)) (L[J] = I), (L[z] = re), (z = J);
        else break e;
      }
    }
    function n(L) {
      return L.length === 0 ? null : L[0];
    }
    function r(L) {
      if (L.length === 0) return null;
      var I = L[0],
        z = L.pop();
      if (z !== I) {
        L[0] = z;
        e: for (var J = 0, re = L.length, ie = re >>> 1; J < ie; ) {
          var de = 2 * (J + 1) - 1,
            fe = L[de],
            ke = de + 1,
            ge = L[ke];
          if (0 > o(fe, z))
            ke < re && 0 > o(ge, fe)
              ? ((L[J] = ge), (L[ke] = z), (J = ke))
              : ((L[J] = fe), (L[de] = z), (J = de));
          else if (ke < re && 0 > o(ge, z)) (L[J] = ge), (L[ke] = z), (J = ke);
          else break e;
        }
      }
      return I;
    }
    function o(L, I) {
      var z = L.sortIndex - I.sortIndex;
      return z !== 0 ? z : L.id - I.id;
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
      p = 3,
      y = !1,
      m = !1,
      w = !1,
      P = typeof setTimeout == "function" ? setTimeout : null,
      b = typeof clearTimeout == "function" ? clearTimeout : null,
      g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(L) {
      for (var I = n(u); I !== null; ) {
        if (I.callback === null) r(u);
        else if (I.startTime <= L)
          r(u), (I.sortIndex = I.expirationTime), t(l, I);
        else break;
        I = n(u);
      }
    }
    function k(L) {
      if (((w = !1), v(L), !m))
        if (n(l) !== null) (m = !0), G(O);
        else {
          var I = n(u);
          I !== null && H(k, I.startTime - L);
        }
    }
    function O(L, I) {
      (m = !1), w && ((w = !1), b(A), (A = -1)), (y = !0);
      var z = p;
      try {
        for (
          v(I), f = n(l);
          f !== null && (!(f.expirationTime > I) || (L && !D()));

        ) {
          var J = f.callback;
          if (typeof J == "function") {
            (f.callback = null), (p = f.priorityLevel);
            var re = J(f.expirationTime <= I);
            (I = e.unstable_now()),
              typeof re == "function" ? (f.callback = re) : f === n(l) && r(l),
              v(I);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var ie = !0;
        else {
          var de = n(u);
          de !== null && H(k, de.startTime - I), (ie = !1);
        }
        return ie;
      } finally {
        (f = null), (p = z), (y = !1);
      }
    }
    var R = !1,
      T = null,
      A = -1,
      _ = 5,
      M = -1;
    function D() {
      return !(e.unstable_now() - M < _);
    }
    function U() {
      if (T !== null) {
        var L = e.unstable_now();
        M = L;
        var I = !0;
        try {
          I = T(!0, L);
        } finally {
          I ? B() : ((R = !1), (T = null));
        }
      } else R = !1;
    }
    var B;
    if (typeof g == "function")
      B = function () {
        g(U);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(),
        V = F.port2;
      (F.port1.onmessage = U),
        (B = function () {
          V.postMessage(null);
        });
    } else
      B = function () {
        P(U, 0);
      };
    function G(L) {
      (T = L), R || ((R = !0), B());
    }
    function H(L, I) {
      A = P(function () {
        L(e.unstable_now());
      }, I);
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
        m || y || ((m = !0), G(O));
      }),
      (e.unstable_forceFrameRate = function (L) {
        0 > L || 125 < L
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (_ = 0 < L ? Math.floor(1e3 / L) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return p;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (L) {
        switch (p) {
          case 1:
          case 2:
          case 3:
            var I = 3;
            break;
          default:
            I = p;
        }
        var z = p;
        p = I;
        try {
          return L();
        } finally {
          p = z;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (L, I) {
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
        var z = p;
        p = L;
        try {
          return I();
        } finally {
          p = z;
        }
      }),
      (e.unstable_scheduleCallback = function (L, I, z) {
        var J = e.unstable_now();
        switch (
          (typeof z == "object" && z !== null
            ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? J + z : J))
            : (z = J),
          L)
        ) {
          case 1:
            var re = -1;
            break;
          case 2:
            re = 250;
            break;
          case 5:
            re = 1073741823;
            break;
          case 4:
            re = 1e4;
            break;
          default:
            re = 5e3;
        }
        return (
          (re = z + re),
          (L = {
            id: d++,
            callback: I,
            priorityLevel: L,
            startTime: z,
            expirationTime: re,
            sortIndex: -1,
          }),
          z > J
            ? ((L.sortIndex = z),
              t(u, L),
              n(l) === null &&
                L === n(u) &&
                (w ? (b(A), (A = -1)) : (w = !0), H(k, z - J)))
            : ((L.sortIndex = re), t(l, L), m || y || ((m = !0), G(O))),
          L
        );
      }),
      (e.unstable_shouldYield = D),
      (e.unstable_wrapCallback = function (L) {
        var I = p;
        return function () {
          var z = p;
          p = I;
          try {
            return L.apply(this, arguments);
          } finally {
            p = z;
          }
        };
      });
  })(im),
    (function (e) {
      e.exports = im;
    })(Gx);
  var am = x,
    Ft = Rc;
  function q(e) {
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
  var sm = new Set(),
    Ri = {};
  function Ir(e, t) {
    bo(e, t), bo(e + "Capture", t);
  }
  function bo(e, t) {
    for (Ri[e] = t, e = 0; e < t.length; e++) sm.add(t[e]);
  }
  var Un = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Nc = Object.prototype.hasOwnProperty,
    Jx =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    lm = {},
    um = {};
  function Yx(e) {
    return Nc.call(um, e)
      ? !0
      : Nc.call(lm, e)
      ? !1
      : Jx.test(e)
      ? (um[e] = !0)
      : ((lm[e] = !0), !1);
  }
  function Xx(e, t, n, r) {
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
  function Qx(e, t, n, r) {
    if (t === null || typeof t > "u" || Xx(e, t, n, r)) return !0;
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
  function kt(e, t, n, r, o, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a);
  }
  var ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ct[e] = new kt(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      ct[t] = new kt(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        ct[e] = new kt(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      ct[e] = new kt(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        ct[e] = new kt(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ct[e] = new kt(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      ct[e] = new kt(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ct[e] = new kt(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      ct[e] = new kt(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Ac = /[\-:]([a-z])/g;
  function _c(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ac, _c);
      ct[t] = new kt(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ac, _c);
        ct[t] = new kt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ac, _c);
      ct[t] = new kt(
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
      ct[e] = new kt(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (ct.xlinkHref = new kt(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ct[e] = new kt(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Mc(e, t, n, r) {
    var o = ct.hasOwnProperty(t) ? ct[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Qx(t, n, o, r) && (n = null),
      r || o === null
        ? Yx(t) &&
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
  var Wn = am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ms = Symbol.for("react.element"),
    wo = Symbol.for("react.portal"),
    xo = Symbol.for("react.fragment"),
    Ic = Symbol.for("react.strict_mode"),
    $c = Symbol.for("react.profiler"),
    cm = Symbol.for("react.provider"),
    dm = Symbol.for("react.context"),
    Lc = Symbol.for("react.forward_ref"),
    Bc = Symbol.for("react.suspense"),
    zc = Symbol.for("react.suspense_list"),
    jc = Symbol.for("react.memo"),
    or = Symbol.for("react.lazy"),
    fm = Symbol.for("react.offscreen"),
    pm = Symbol.iterator;
  function Ni(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (pm && e[pm]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var We = Object.assign,
    Fc;
  function Ai(e) {
    if (Fc === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Fc = (t && t[1]) || "";
      }
    return (
      `
` +
      Fc +
      e
    );
  }
  var Dc = !1;
  function Uc(e, t) {
    if (!e || Dc) return "";
    Dc = !0;
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
      (Dc = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Ai(e) : "";
  }
  function Zx(e) {
    switch (e.tag) {
      case 5:
        return Ai(e.type);
      case 16:
        return Ai("Lazy");
      case 13:
        return Ai("Suspense");
      case 19:
        return Ai("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Uc(e.type, !1)), e;
      case 11:
        return (e = Uc(e.type.render, !1)), e;
      case 1:
        return (e = Uc(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Wc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case xo:
        return "Fragment";
      case wo:
        return "Portal";
      case $c:
        return "Profiler";
      case Ic:
        return "StrictMode";
      case Bc:
        return "Suspense";
      case zc:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case dm:
          return (e.displayName || "Context") + ".Consumer";
        case cm:
          return (e._context.displayName || "Context") + ".Provider";
        case Lc:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case jc:
          return (
            (t = e.displayName || null), t !== null ? t : Wc(e.type) || "Memo"
          );
        case or:
          (t = e._payload), (e = e._init);
          try {
            return Wc(e(t));
          } catch {}
      }
    return null;
  }
  function eS(e) {
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
        return Wc(t);
      case 8:
        return t === Ic ? "StrictMode" : "Mode";
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
  function ir(e) {
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
  function hm(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function tS(e) {
    var t = hm(e) ? "checked" : "value",
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
  function gs(e) {
    e._valueTracker || (e._valueTracker = tS(e));
  }
  function mm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = hm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function ys(e) {
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
  function Vc(e, t) {
    var n = t.checked;
    return We({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function gm(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ir(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ym(e, t) {
    (t = t.checked), t != null && Mc(e, "checked", t, !1);
  }
  function Hc(e, t) {
    ym(e, t);
    var n = ir(t.value),
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
      ? qc(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && qc(e, t.type, ir(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function vm(e, t, n) {
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
  function qc(e, t, n) {
    (t !== "number" || ys(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var _i = Array.isArray;
  function So(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ir(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(q(91));
    return We({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function bm(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(q(92));
        if (_i(n)) {
          if (1 < n.length) throw Error(q(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ir(n) };
  }
  function wm(e, t) {
    var n = ir(t.value),
      r = ir(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function xm(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Sm(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Sm(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var vs,
    km = (function (e) {
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
          vs = vs || document.createElement("div"),
            vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = vs.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Mi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ii = {
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
    nS = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ii).forEach(function (e) {
    nS.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ii[t] = Ii[e]);
    });
  });
  function Em(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Ii.hasOwnProperty(e) && Ii[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Cm(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Em(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var rS = We(
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
  function Jc(e, t) {
    if (t) {
      if (rS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(q(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(q(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(q(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(q(62));
    }
  }
  function Yc(e, t) {
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
  var Xc = null;
  function Qc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Zc = null,
    ko = null,
    Eo = null;
  function Om(e) {
    if ((e = na(e))) {
      if (typeof Zc != "function") throw Error(q(280));
      var t = e.stateNode;
      t && ((t = Ds(t)), Zc(e.stateNode, e.type, t));
    }
  }
  function Tm(e) {
    ko ? (Eo ? Eo.push(e) : (Eo = [e])) : (ko = e);
  }
  function Pm() {
    if (ko) {
      var e = ko,
        t = Eo;
      if (((Eo = ko = null), Om(e), t)) for (e = 0; e < t.length; e++) Om(t[e]);
    }
  }
  function Rm(e, t) {
    return e(t);
  }
  function Nm() {}
  var ed = !1;
  function Am(e, t, n) {
    if (ed) return e(t, n);
    ed = !0;
    try {
      return Rm(e, t, n);
    } finally {
      (ed = !1), (ko !== null || Eo !== null) && (Nm(), Pm());
    }
  }
  function $i(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ds(n);
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
    if (n && typeof n != "function") throw Error(q(231, t, typeof n));
    return n;
  }
  var td = !1;
  if (Un)
    try {
      var Li = {};
      Object.defineProperty(Li, "passive", {
        get: function () {
          td = !0;
        },
      }),
        window.addEventListener("test", Li, Li),
        window.removeEventListener("test", Li, Li);
    } catch {
      td = !1;
    }
  function oS(e, t, n, r, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (d) {
      this.onError(d);
    }
  }
  var Bi = !1,
    bs = null,
    ws = !1,
    nd = null,
    iS = {
      onError: function (e) {
        (Bi = !0), (bs = e);
      },
    };
  function aS(e, t, n, r, o, i, a, s, l) {
    (Bi = !1), (bs = null), oS.apply(iS, arguments);
  }
  function sS(e, t, n, r, o, i, a, s, l) {
    if ((aS.apply(this, arguments), Bi)) {
      if (Bi) {
        var u = bs;
        (Bi = !1), (bs = null);
      } else throw Error(q(198));
      ws || ((ws = !0), (nd = u));
    }
  }
  function $r(e) {
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
  function _m(e) {
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
  function Mm(e) {
    if ($r(e) !== e) throw Error(q(188));
  }
  function lS(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = $r(e)), t === null)) throw Error(q(188));
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
          if (i === n) return Mm(o), e;
          if (i === r) return Mm(o), t;
          i = i.sibling;
        }
        throw Error(q(188));
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
          if (!a) throw Error(q(189));
        }
      }
      if (n.alternate !== r) throw Error(q(190));
    }
    if (n.tag !== 3) throw Error(q(188));
    return n.stateNode.current === n ? e : t;
  }
  function Im(e) {
    return (e = lS(e)), e !== null ? $m(e) : null;
  }
  function $m(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = $m(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Lm = Ft.unstable_scheduleCallback,
    Bm = Ft.unstable_cancelCallback,
    uS = Ft.unstable_shouldYield,
    cS = Ft.unstable_requestPaint,
    Ye = Ft.unstable_now,
    dS = Ft.unstable_getCurrentPriorityLevel,
    rd = Ft.unstable_ImmediatePriority,
    zm = Ft.unstable_UserBlockingPriority,
    xs = Ft.unstable_NormalPriority,
    fS = Ft.unstable_LowPriority,
    jm = Ft.unstable_IdlePriority,
    Ss = null,
    Tn = null;
  function pS(e) {
    if (Tn && typeof Tn.onCommitFiberRoot == "function")
      try {
        Tn.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var hn = Math.clz32 ? Math.clz32 : gS,
    hS = Math.log,
    mS = Math.LN2;
  function gS(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((hS(e) / mS) | 0)) | 0;
  }
  var ks = 64,
    Es = 4194304;
  function zi(e) {
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
  function Cs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var s = a & ~o;
      s !== 0 ? (r = zi(s)) : ((i &= a), i !== 0 && (r = zi(i)));
    } else (a = n & ~o), a !== 0 ? (r = zi(a)) : i !== 0 && (r = zi(i));
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
        (n = 31 - hn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function yS(e, t) {
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
  function vS(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var a = 31 - hn(i),
        s = 1 << a,
        l = o[a];
      l === -1
        ? (!(s & n) || s & r) && (o[a] = yS(s, t))
        : l <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  }
  function od(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Fm() {
    var e = ks;
    return (ks <<= 1), !(ks & 4194240) && (ks = 64), e;
  }
  function id(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ji(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - hn(t)),
      (e[t] = n);
  }
  function bS(e, t) {
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
      var o = 31 - hn(n),
        i = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
  }
  function ad(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - hn(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var Ne = 0;
  function Dm(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Um,
    sd,
    Wm,
    Vm,
    Hm,
    ld = !1,
    Os = [],
    ar = null,
    sr = null,
    lr = null,
    Fi = new Map(),
    Di = new Map(),
    ur = [],
    wS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function qm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ar = null;
        break;
      case "dragenter":
      case "dragleave":
        sr = null;
        break;
      case "mouseover":
      case "mouseout":
        lr = null;
        break;
      case "pointerover":
      case "pointerout":
        Fi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Di.delete(t.pointerId);
    }
  }
  function Ui(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = na(t)), t !== null && sd(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function xS(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (ar = Ui(ar, e, t, n, r, o)), !0;
      case "dragenter":
        return (sr = Ui(sr, e, t, n, r, o)), !0;
      case "mouseover":
        return (lr = Ui(lr, e, t, n, r, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return Fi.set(i, Ui(Fi.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), Di.set(i, Ui(Di.get(i) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function Km(e) {
    var t = Lr(e.target);
    if (t !== null) {
      var n = $r(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = _m(n)), t !== null)) {
            (e.blockedOn = t),
              Hm(e.priority, function () {
                Wm(n);
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
  function Ts(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = cd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Xc = r), n.target.dispatchEvent(r), (Xc = null);
      } else return (t = na(n)), t !== null && sd(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Gm(e, t, n) {
    Ts(e) && n.delete(t);
  }
  function SS() {
    (ld = !1),
      ar !== null && Ts(ar) && (ar = null),
      sr !== null && Ts(sr) && (sr = null),
      lr !== null && Ts(lr) && (lr = null),
      Fi.forEach(Gm),
      Di.forEach(Gm);
  }
  function Wi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ld ||
        ((ld = !0),
        Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority, SS)));
  }
  function Vi(e) {
    function t(o) {
      return Wi(o, e);
    }
    if (0 < Os.length) {
      Wi(Os[0], e);
      for (var n = 1; n < Os.length; n++) {
        var r = Os[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      ar !== null && Wi(ar, e),
        sr !== null && Wi(sr, e),
        lr !== null && Wi(lr, e),
        Fi.forEach(t),
        Di.forEach(t),
        n = 0;
      n < ur.length;
      n++
    )
      (r = ur[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ur.length && ((n = ur[0]), n.blockedOn === null); )
      Km(n), n.blockedOn === null && ur.shift();
  }
  var Co = Wn.ReactCurrentBatchConfig,
    Ps = !0;
  function kS(e, t, n, r) {
    var o = Ne,
      i = Co.transition;
    Co.transition = null;
    try {
      (Ne = 1), ud(e, t, n, r);
    } finally {
      (Ne = o), (Co.transition = i);
    }
  }
  function ES(e, t, n, r) {
    var o = Ne,
      i = Co.transition;
    Co.transition = null;
    try {
      (Ne = 4), ud(e, t, n, r);
    } finally {
      (Ne = o), (Co.transition = i);
    }
  }
  function ud(e, t, n, r) {
    if (Ps) {
      var o = cd(e, t, n, r);
      if (o === null) Td(e, t, r, Rs, n), qm(e, r);
      else if (xS(o, e, t, n, r)) r.stopPropagation();
      else if ((qm(e, r), t & 4 && -1 < wS.indexOf(e))) {
        for (; o !== null; ) {
          var i = na(o);
          if (
            (i !== null && Um(i),
            (i = cd(e, t, n, r)),
            i === null && Td(e, t, r, Rs, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else Td(e, t, r, null, n);
    }
  }
  var Rs = null;
  function cd(e, t, n, r) {
    if (((Rs = null), (e = Qc(r)), (e = Lr(e)), e !== null))
      if (((t = $r(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = _m(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Rs = e), null;
  }
  function Jm(e) {
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
        switch (dS()) {
          case rd:
            return 1;
          case zm:
            return 4;
          case xs:
          case fS:
            return 16;
          case jm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var cr = null,
    dd = null,
    Ns = null;
  function Ym() {
    if (Ns) return Ns;
    var e,
      t = dd,
      n = t.length,
      r,
      o = "value" in cr ? cr.value : cr.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return (Ns = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function As(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function _s() {
    return !0;
  }
  function Xm() {
    return !1;
  }
  function Dt(e) {
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
          ? _s
          : Xm),
        (this.isPropagationStopped = Xm),
        this
      );
    }
    return (
      We(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = _s));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = _s));
        },
        persist: function () {},
        isPersistent: _s,
      }),
      t
    );
  }
  var Oo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fd = Dt(Oo),
    Hi = We({}, Oo, { view: 0, detail: 0 }),
    CS = Dt(Hi),
    pd,
    hd,
    qi,
    Ms = We({}, Hi, {
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
      getModifierState: gd,
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
          : (e !== qi &&
              (qi && e.type === "mousemove"
                ? ((pd = e.screenX - qi.screenX), (hd = e.screenY - qi.screenY))
                : (hd = pd = 0),
              (qi = e)),
            pd);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : hd;
      },
    }),
    Qm = Dt(Ms),
    OS = We({}, Ms, { dataTransfer: 0 }),
    TS = Dt(OS),
    PS = We({}, Hi, { relatedTarget: 0 }),
    md = Dt(PS),
    RS = We({}, Oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    NS = Dt(RS),
    AS = We({}, Oo, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _S = Dt(AS),
    MS = We({}, Oo, { data: 0 }),
    Zm = Dt(MS),
    IS = {
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
    $S = {
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
    LS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function BS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = LS[e])
      ? !!t[e]
      : !1;
  }
  function gd() {
    return BS;
  }
  var zS = We({}, Hi, {
      key: function (e) {
        if (e.key) {
          var t = IS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = As(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? $S[e.keyCode] || "Unidentified"
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
      getModifierState: gd,
      charCode: function (e) {
        return e.type === "keypress" ? As(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? As(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    jS = Dt(zS),
    FS = We({}, Ms, {
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
    eg = Dt(FS),
    DS = We({}, Hi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gd,
    }),
    US = Dt(DS),
    WS = We({}, Oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    VS = Dt(WS),
    HS = We({}, Ms, {
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
    qS = Dt(HS),
    KS = [9, 13, 27, 32],
    yd = Un && "CompositionEvent" in window,
    Ki = null;
  Un && "documentMode" in document && (Ki = document.documentMode);
  var GS = Un && "TextEvent" in window && !Ki,
    tg = Un && (!yd || (Ki && 8 < Ki && 11 >= Ki)),
    ng = String.fromCharCode(32),
    rg = !1;
  function og(e, t) {
    switch (e) {
      case "keyup":
        return KS.indexOf(t.keyCode) !== -1;
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
  function ig(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var To = !1;
  function JS(e, t) {
    switch (e) {
      case "compositionend":
        return ig(t);
      case "keypress":
        return t.which !== 32 ? null : ((rg = !0), ng);
      case "textInput":
        return (e = t.data), e === ng && rg ? null : e;
      default:
        return null;
    }
  }
  function YS(e, t) {
    if (To)
      return e === "compositionend" || (!yd && og(e, t))
        ? ((e = Ym()), (Ns = dd = cr = null), (To = !1), e)
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
        return tg && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var XS = {
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
  function ag(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!XS[e.type] : t === "textarea";
  }
  function sg(e, t, n, r) {
    Tm(r),
      (t = zs(t, "onChange")),
      0 < t.length &&
        ((n = new fd("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Gi = null,
    Ji = null;
  function QS(e) {
    Cg(e, 0);
  }
  function Is(e) {
    var t = _o(e);
    if (mm(t)) return e;
  }
  function ZS(e, t) {
    if (e === "change") return t;
  }
  var lg = !1;
  if (Un) {
    var vd;
    if (Un) {
      var bd = "oninput" in document;
      if (!bd) {
        var ug = document.createElement("div");
        ug.setAttribute("oninput", "return;"),
          (bd = typeof ug.oninput == "function");
      }
      vd = bd;
    } else vd = !1;
    lg = vd && (!document.documentMode || 9 < document.documentMode);
  }
  function cg() {
    Gi && (Gi.detachEvent("onpropertychange", dg), (Ji = Gi = null));
  }
  function dg(e) {
    if (e.propertyName === "value" && Is(Ji)) {
      var t = [];
      sg(t, Ji, e, Qc(e)), Am(QS, t);
    }
  }
  function e2(e, t, n) {
    e === "focusin"
      ? (cg(), (Gi = t), (Ji = n), Gi.attachEvent("onpropertychange", dg))
      : e === "focusout" && cg();
  }
  function t2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Is(Ji);
  }
  function n2(e, t) {
    if (e === "click") return Is(t);
  }
  function r2(e, t) {
    if (e === "input" || e === "change") return Is(t);
  }
  function o2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mn = typeof Object.is == "function" ? Object.is : o2;
  function Yi(e, t) {
    if (mn(e, t)) return !0;
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
      if (!Nc.call(t, o) || !mn(e[o], t[o])) return !1;
    }
    return !0;
  }
  function fg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function pg(e, t) {
    var n = fg(e);
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
      n = fg(n);
    }
  }
  function hg(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? hg(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function mg() {
    for (var e = window, t = ys(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ys(e.document);
    }
    return t;
  }
  function wd(e) {
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
  function i2(e) {
    var t = mg(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      hg(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && wd(n)) {
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
            (o = pg(n, i));
          var a = pg(n, r);
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
  var a2 = Un && "documentMode" in document && 11 >= document.documentMode,
    Po = null,
    xd = null,
    Xi = null,
    Sd = !1;
  function gg(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Sd ||
      Po == null ||
      Po !== ys(r) ||
      ((r = Po),
      "selectionStart" in r && wd(r)
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
      (Xi && Yi(Xi, r)) ||
        ((Xi = r),
        (r = zs(xd, "onSelect")),
        0 < r.length &&
          ((t = new fd("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Po))));
  }
  function $s(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ro = {
      animationend: $s("Animation", "AnimationEnd"),
      animationiteration: $s("Animation", "AnimationIteration"),
      animationstart: $s("Animation", "AnimationStart"),
      transitionend: $s("Transition", "TransitionEnd"),
    },
    kd = {},
    yg = {};
  Un &&
    ((yg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ro.animationend.animation,
      delete Ro.animationiteration.animation,
      delete Ro.animationstart.animation),
    "TransitionEvent" in window || delete Ro.transitionend.transition);
  function Ls(e) {
    if (kd[e]) return kd[e];
    if (!Ro[e]) return e;
    var t = Ro[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in yg) return (kd[e] = t[n]);
    return e;
  }
  var vg = Ls("animationend"),
    bg = Ls("animationiteration"),
    wg = Ls("animationstart"),
    xg = Ls("transitionend"),
    Sg = new Map(),
    kg =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function dr(e, t) {
    Sg.set(e, t), Ir(t, [e]);
  }
  for (var Ed = 0; Ed < kg.length; Ed++) {
    var Cd = kg[Ed],
      s2 = Cd.toLowerCase(),
      l2 = Cd[0].toUpperCase() + Cd.slice(1);
    dr(s2, "on" + l2);
  }
  dr(vg, "onAnimationEnd"),
    dr(bg, "onAnimationIteration"),
    dr(wg, "onAnimationStart"),
    dr("dblclick", "onDoubleClick"),
    dr("focusin", "onFocus"),
    dr("focusout", "onBlur"),
    dr(xg, "onTransitionEnd"),
    bo("onMouseEnter", ["mouseout", "mouseover"]),
    bo("onMouseLeave", ["mouseout", "mouseover"]),
    bo("onPointerEnter", ["pointerout", "pointerover"]),
    bo("onPointerLeave", ["pointerout", "pointerover"]),
    Ir(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ir(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ir(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ir(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ir(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Qi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    u2 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Qi),
    );
  function Eg(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), sS(r, t, void 0, e), (e.currentTarget = null);
  }
  function Cg(e, t) {
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
            Eg(o, s, u), (i = l);
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
            Eg(o, s, u), (i = l);
          }
      }
    }
    if (ws) throw ((e = nd), (ws = !1), (nd = null), e);
  }
  function Be(e, t) {
    var n = t[Md];
    n === void 0 && (n = t[Md] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Og(t, e, 2, !1), n.add(r));
  }
  function Od(e, t, n) {
    var r = 0;
    t && (r |= 4), Og(n, e, r, t);
  }
  var Bs = "_reactListening" + Math.random().toString(36).slice(2);
  function Zi(e) {
    if (!e[Bs]) {
      (e[Bs] = !0),
        sm.forEach(function (n) {
          n !== "selectionchange" && (u2.has(n) || Od(n, !1, e), Od(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bs] || ((t[Bs] = !0), Od("selectionchange", !1, t));
    }
  }
  function Og(e, t, n, r) {
    switch (Jm(t)) {
      case 1:
        var o = kS;
        break;
      case 4:
        o = ES;
        break;
      default:
        o = ud;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !td ||
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
  function Td(e, t, n, r, o) {
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
            if (((a = Lr(s)), a === null)) return;
            if (((l = a.tag), l === 5 || l === 6)) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Am(function () {
      var u = i,
        d = Qc(n),
        f = [];
      e: {
        var p = Sg.get(e);
        if (p !== void 0) {
          var y = fd,
            m = e;
          switch (e) {
            case "keypress":
              if (As(n) === 0) break e;
            case "keydown":
            case "keyup":
              y = jS;
              break;
            case "focusin":
              (m = "focus"), (y = md);
              break;
            case "focusout":
              (m = "blur"), (y = md);
              break;
            case "beforeblur":
            case "afterblur":
              y = md;
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
              y = Qm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = TS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = US;
              break;
            case vg:
            case bg:
            case wg:
              y = NS;
              break;
            case xg:
              y = VS;
              break;
            case "scroll":
              y = CS;
              break;
            case "wheel":
              y = qS;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = _S;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = eg;
          }
          var w = (t & 4) !== 0,
            P = !w && e === "scroll",
            b = w ? (p !== null ? p + "Capture" : null) : p;
          w = [];
          for (var g = u, v; g !== null; ) {
            v = g;
            var k = v.stateNode;
            if (
              (v.tag === 5 &&
                k !== null &&
                ((v = k),
                b !== null &&
                  ((k = $i(g, b)), k != null && w.push(ea(g, k, v)))),
              P)
            )
              break;
            g = g.return;
          }
          0 < w.length &&
            ((p = new y(p, m, null, n, d)), f.push({ event: p, listeners: w }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((p = e === "mouseover" || e === "pointerover"),
            (y = e === "mouseout" || e === "pointerout"),
            p &&
              n !== Xc &&
              (m = n.relatedTarget || n.fromElement) &&
              (Lr(m) || m[Vn]))
          )
            break e;
          if (
            (y || p) &&
            ((p =
              d.window === d
                ? d
                : (p = d.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
            y
              ? ((m = n.relatedTarget || n.toElement),
                (y = u),
                (m = m ? Lr(m) : null),
                m !== null &&
                  ((P = $r(m)), m !== P || (m.tag !== 5 && m.tag !== 6)) &&
                  (m = null))
              : ((y = null), (m = u)),
            y !== m)
          ) {
            if (
              ((w = Qm),
              (k = "onMouseLeave"),
              (b = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((w = eg),
                (k = "onPointerLeave"),
                (b = "onPointerEnter"),
                (g = "pointer")),
              (P = y == null ? p : _o(y)),
              (v = m == null ? p : _o(m)),
              (p = new w(k, g + "leave", y, n, d)),
              (p.target = P),
              (p.relatedTarget = v),
              (k = null),
              Lr(d) === u &&
                ((w = new w(b, g + "enter", m, n, d)),
                (w.target = v),
                (w.relatedTarget = P),
                (k = w)),
              (P = k),
              y && m)
            )
              t: {
                for (w = y, b = m, g = 0, v = w; v; v = No(v)) g++;
                for (v = 0, k = b; k; k = No(k)) v++;
                for (; 0 < g - v; ) (w = No(w)), g--;
                for (; 0 < v - g; ) (b = No(b)), v--;
                for (; g--; ) {
                  if (w === b || (b !== null && w === b.alternate)) break t;
                  (w = No(w)), (b = No(b));
                }
                w = null;
              }
            else w = null;
            y !== null && Tg(f, p, y, w, !1),
              m !== null && P !== null && Tg(f, P, m, w, !0);
          }
        }
        e: {
          if (
            ((p = u ? _o(u) : window),
            (y = p.nodeName && p.nodeName.toLowerCase()),
            y === "select" || (y === "input" && p.type === "file"))
          )
            var O = ZS;
          else if (ag(p))
            if (lg) O = r2;
            else {
              O = t2;
              var R = e2;
            }
          else
            (y = p.nodeName) &&
              y.toLowerCase() === "input" &&
              (p.type === "checkbox" || p.type === "radio") &&
              (O = n2);
          if (O && (O = O(e, u))) {
            sg(f, O, n, d);
            break e;
          }
          R && R(e, p, u),
            e === "focusout" &&
              (R = p._wrapperState) &&
              R.controlled &&
              p.type === "number" &&
              qc(p, "number", p.value);
        }
        switch (((R = u ? _o(u) : window), e)) {
          case "focusin":
            (ag(R) || R.contentEditable === "true") &&
              ((Po = R), (xd = u), (Xi = null));
            break;
          case "focusout":
            Xi = xd = Po = null;
            break;
          case "mousedown":
            Sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Sd = !1), gg(f, n, d);
            break;
          case "selectionchange":
            if (a2) break;
          case "keydown":
          case "keyup":
            gg(f, n, d);
        }
        var T;
        if (yd)
          e: {
            switch (e) {
              case "compositionstart":
                var A = "onCompositionStart";
                break e;
              case "compositionend":
                A = "onCompositionEnd";
                break e;
              case "compositionupdate":
                A = "onCompositionUpdate";
                break e;
            }
            A = void 0;
          }
        else
          To
            ? og(e, n) && (A = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (A = "onCompositionStart");
        A &&
          (tg &&
            n.locale !== "ko" &&
            (To || A !== "onCompositionStart"
              ? A === "onCompositionEnd" && To && (T = Ym())
              : ((cr = d),
                (dd = "value" in cr ? cr.value : cr.textContent),
                (To = !0))),
          (R = zs(u, A)),
          0 < R.length &&
            ((A = new Zm(A, e, null, n, d)),
            f.push({ event: A, listeners: R }),
            T ? (A.data = T) : ((T = ig(n)), T !== null && (A.data = T)))),
          (T = GS ? JS(e, n) : YS(e, n)) &&
            ((u = zs(u, "onBeforeInput")),
            0 < u.length &&
              ((d = new Zm("onBeforeInput", "beforeinput", null, n, d)),
              f.push({ event: d, listeners: u }),
              (d.data = T)));
      }
      Cg(f, t);
    });
  }
  function ea(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function zs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = $i(e, n)),
        i != null && r.unshift(ea(e, i, o)),
        (i = $i(e, t)),
        i != null && r.push(ea(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function No(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Tg(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var s = n,
        l = s.alternate,
        u = s.stateNode;
      if (l !== null && l === r) break;
      s.tag === 5 &&
        u !== null &&
        ((s = u),
        o
          ? ((l = $i(n, i)), l != null && a.unshift(ea(n, l, s)))
          : o || ((l = $i(n, i)), l != null && a.push(ea(n, l, s)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var c2 = /\r\n?/g,
    d2 = /\u0000|\uFFFD/g;
  function Pg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        c2,
        `
`,
      )
      .replace(d2, "");
  }
  function js(e, t, n) {
    if (((t = Pg(t)), Pg(e) !== t && n)) throw Error(q(425));
  }
  function Fs() {}
  var Pd = null,
    Rd = null;
  function Nd(e, t) {
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
  var Ad = typeof setTimeout == "function" ? setTimeout : void 0,
    f2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rg = typeof Promise == "function" ? Promise : void 0,
    p2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rg < "u"
        ? function (e) {
            return Rg.resolve(null).then(e).catch(h2);
          }
        : Ad;
  function h2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _d(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), Vi(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    Vi(t);
  }
  function fr(e) {
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
  function Ng(e) {
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
  var Ao = Math.random().toString(36).slice(2),
    Pn = "__reactFiber$" + Ao,
    ta = "__reactProps$" + Ao,
    Vn = "__reactContainer$" + Ao,
    Md = "__reactEvents$" + Ao,
    m2 = "__reactListeners$" + Ao,
    g2 = "__reactHandles$" + Ao;
  function Lr(e) {
    var t = e[Pn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Vn] || n[Pn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ng(e); e !== null; ) {
            if ((n = e[Pn])) return n;
            e = Ng(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function na(e) {
    return (
      (e = e[Pn] || e[Vn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function _o(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(q(33));
  }
  function Ds(e) {
    return e[ta] || null;
  }
  var Id = [],
    Mo = -1;
  function pr(e) {
    return { current: e };
  }
  function ze(e) {
    0 > Mo || ((e.current = Id[Mo]), (Id[Mo] = null), Mo--);
  }
  function $e(e, t) {
    Mo++, (Id[Mo] = e.current), (e.current = t);
  }
  var hr = {},
    gt = pr(hr),
    Nt = pr(!1),
    Br = hr;
  function Io(e, t) {
    var n = e.type.contextTypes;
    if (!n) return hr;
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
  function Us() {
    ze(Nt), ze(gt);
  }
  function Ag(e, t, n) {
    if (gt.current !== hr) throw Error(q(168));
    $e(gt, t), $e(Nt, n);
  }
  function _g(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(q(108, eS(e) || "Unknown", o));
    return We({}, n, r);
  }
  function Ws(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        hr),
      (Br = gt.current),
      $e(gt, e),
      $e(Nt, Nt.current),
      !0
    );
  }
  function Mg(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(q(169));
    n
      ? ((e = _g(e, t, Br)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ze(Nt),
        ze(gt),
        $e(gt, e))
      : ze(Nt),
      $e(Nt, n);
  }
  var Hn = null,
    Vs = !1,
    $d = !1;
  function Ig(e) {
    Hn === null ? (Hn = [e]) : Hn.push(e);
  }
  function y2(e) {
    (Vs = !0), Ig(e);
  }
  function mr() {
    if (!$d && Hn !== null) {
      $d = !0;
      var e = 0,
        t = Ne;
      try {
        var n = Hn;
        for (Ne = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Hn = null), (Vs = !1);
      } catch (o) {
        throw (Hn !== null && (Hn = Hn.slice(e + 1)), Lm(rd, mr), o);
      } finally {
        (Ne = t), ($d = !1);
      }
    }
    return null;
  }
  var $o = [],
    Lo = 0,
    Hs = null,
    qs = 0,
    Jt = [],
    Yt = 0,
    zr = null,
    qn = 1,
    Kn = "";
  function jr(e, t) {
    ($o[Lo++] = qs), ($o[Lo++] = Hs), (Hs = e), (qs = t);
  }
  function $g(e, t, n) {
    (Jt[Yt++] = qn), (Jt[Yt++] = Kn), (Jt[Yt++] = zr), (zr = e);
    var r = qn;
    e = Kn;
    var o = 32 - hn(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - hn(t) + o;
    if (30 < i) {
      var a = o - (o % 5);
      (i = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (o -= a),
        (qn = (1 << (32 - hn(t) + o)) | (n << o) | r),
        (Kn = i + e);
    } else (qn = (1 << i) | (n << o) | r), (Kn = e);
  }
  function Ld(e) {
    e.return !== null && (jr(e, 1), $g(e, 1, 0));
  }
  function Bd(e) {
    for (; e === Hs; )
      (Hs = $o[--Lo]), ($o[Lo] = null), (qs = $o[--Lo]), ($o[Lo] = null);
    for (; e === zr; )
      (zr = Jt[--Yt]),
        (Jt[Yt] = null),
        (Kn = Jt[--Yt]),
        (Jt[Yt] = null),
        (qn = Jt[--Yt]),
        (Jt[Yt] = null);
  }
  var Ut = null,
    Wt = null,
    je = !1,
    gn = null;
  function Lg(e, t) {
    var n = en(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Bg(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ut = e), (Wt = fr(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ut = e), (Wt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = zr !== null ? { id: qn, overflow: Kn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = en(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ut = e),
              (Wt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function zd(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jd(e) {
    if (je) {
      var t = Wt;
      if (t) {
        var n = t;
        if (!Bg(e, t)) {
          if (zd(e)) throw Error(q(418));
          t = fr(n.nextSibling);
          var r = Ut;
          t && Bg(e, t)
            ? Lg(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (je = !1), (Ut = e));
        }
      } else {
        if (zd(e)) throw Error(q(418));
        (e.flags = (e.flags & -4097) | 2), (je = !1), (Ut = e);
      }
    }
  }
  function zg(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ut = e;
  }
  function Ks(e) {
    if (e !== Ut) return !1;
    if (!je) return zg(e), (je = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Nd(e.type, e.memoizedProps))),
      t && (t = Wt))
    ) {
      if (zd(e)) throw (jg(), Error(q(418)));
      for (; t; ) Lg(e, t), (t = fr(t.nextSibling));
    }
    if ((zg(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(q(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Wt = fr(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Wt = null;
      }
    } else Wt = Ut ? fr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function jg() {
    for (var e = Wt; e; ) e = fr(e.nextSibling);
  }
  function Bo() {
    (Wt = Ut = null), (je = !1);
  }
  function Fd(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  var v2 = Wn.ReactCurrentBatchConfig;
  function yn(e, t) {
    if (e && e.defaultProps) {
      (t = We({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Gs = pr(null),
    Js = null,
    zo = null,
    Dd = null;
  function Ud() {
    Dd = zo = Js = null;
  }
  function Wd(e) {
    var t = Gs.current;
    ze(Gs), (e._currentValue = t);
  }
  function Vd(e, t, n) {
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
  function jo(e, t) {
    (Js = e),
      (Dd = zo = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (_t = !0), (e.firstContext = null));
  }
  function Xt(e) {
    var t = e._currentValue;
    if (Dd !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), zo === null)) {
        if (Js === null) throw Error(q(308));
        (zo = e), (Js.dependencies = { lanes: 0, firstContext: e });
      } else zo = zo.next = e;
    return t;
  }
  var Fr = null;
  function Hd(e) {
    Fr === null ? (Fr = [e]) : Fr.push(e);
  }
  function Fg(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), Hd(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Gn(e, r)
    );
  }
  function Gn(e, t) {
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
  var gr = !1;
  function qd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Dg(e, t) {
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
  function Jn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function yr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), Se & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Gn(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), Hd(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Gn(e, n)
    );
  }
  function Ys(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ad(e, n);
    }
  }
  function Ug(e, t) {
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
  function Xs(e, t, n, r) {
    var o = e.updateQueue;
    gr = !1;
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
        var p = s.lane,
          y = s.eventTime;
        if ((r & p) === p) {
          d !== null &&
            (d = d.next =
              {
                eventTime: y,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var m = e,
              w = s;
            switch (((p = t), (y = n), w.tag)) {
              case 1:
                if (((m = w.payload), typeof m == "function")) {
                  f = m.call(y, f, p);
                  break e;
                }
                f = m;
                break e;
              case 3:
                m.flags = (m.flags & -65537) | 128;
              case 0:
                if (
                  ((m = w.payload),
                  (p = typeof m == "function" ? m.call(y, f, p) : m),
                  p == null)
                )
                  break e;
                f = We({}, f, p);
                break e;
              case 2:
                gr = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (p = o.effects),
            p === null ? (o.effects = [s]) : p.push(s));
        } else
          (y = {
            eventTime: y,
            lane: p,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            d === null ? ((u = d = y), (l = f)) : (d = d.next = y),
            (a |= p);
        if (((s = s.next), s === null)) {
          if (((s = o.shared.pending), s === null)) break;
          (p = s),
            (s = p.next),
            (p.next = null),
            (o.lastBaseUpdate = p),
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
      (Wr |= a), (e.lanes = a), (e.memoizedState = f);
    }
  }
  function Wg(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(q(191, o));
          o.call(r);
        }
      }
  }
  var Vg = new am.Component().refs;
  function Kd(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : We({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Qs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? $r(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ct(),
        o = xr(e),
        i = Jn(r, o);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = yr(e, i, o)),
        t !== null && (wn(t, e, o, r), Ys(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ct(),
        o = xr(e),
        i = Jn(r, o);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = yr(e, i, o)),
        t !== null && (wn(t, e, o, r), Ys(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ct(),
        r = xr(e),
        o = Jn(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = yr(e, o, r)),
        t !== null && (wn(t, e, r, n), Ys(t, e, r));
    },
  };
  function Hg(e, t, n, r, o, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Yi(n, r) || !Yi(o, i)
        : !0
    );
  }
  function qg(e, t, n) {
    var r = !1,
      o = hr,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Xt(i))
        : ((o = At(t) ? Br : gt.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Io(e, o) : hr)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Qs),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Kg(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
  }
  function Gd(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = Vg), qd(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = Xt(i))
      : ((i = At(t) ? Br : gt.current), (o.context = Io(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Kd(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Qs.enqueueReplaceState(o, o.state, null),
        Xs(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ra(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(q(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(q(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var s = o.refs;
              s === Vg && (s = o.refs = {}),
                a === null ? delete s[i] : (s[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(q(284));
      if (!n._owner) throw Error(q(290, e));
    }
    return e;
  }
  function Zs(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        q(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Gg(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Jg(e) {
    function t(b, g) {
      if (e) {
        var v = b.deletions;
        v === null ? ((b.deletions = [g]), (b.flags |= 16)) : v.push(g);
      }
    }
    function n(b, g) {
      if (!e) return null;
      for (; g !== null; ) t(b, g), (g = g.sibling);
      return null;
    }
    function r(b, g) {
      for (b = new Map(); g !== null; )
        g.key !== null ? b.set(g.key, g) : b.set(g.index, g), (g = g.sibling);
      return b;
    }
    function o(b, g) {
      return (b = kr(b, g)), (b.index = 0), (b.sibling = null), b;
    }
    function i(b, g, v) {
      return (
        (b.index = v),
        e
          ? ((v = b.alternate),
            v !== null
              ? ((v = v.index), v < g ? ((b.flags |= 2), g) : v)
              : ((b.flags |= 2), g))
          : ((b.flags |= 1048576), g)
      );
    }
    function a(b) {
      return e && b.alternate === null && (b.flags |= 2), b;
    }
    function s(b, g, v, k) {
      return g === null || g.tag !== 6
        ? ((g = Af(v, b.mode, k)), (g.return = b), g)
        : ((g = o(g, v)), (g.return = b), g);
    }
    function l(b, g, v, k) {
      var O = v.type;
      return O === xo
        ? d(b, g, v.props.children, k, v.key)
        : g !== null &&
          (g.elementType === O ||
            (typeof O == "object" &&
              O !== null &&
              O.$$typeof === or &&
              Gg(O) === g.type))
        ? ((k = o(g, v.props)), (k.ref = ra(b, g, v)), (k.return = b), k)
        : ((k = vl(v.type, v.key, v.props, null, b.mode, k)),
          (k.ref = ra(b, g, v)),
          (k.return = b),
          k);
    }
    function u(b, g, v, k) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== v.containerInfo ||
        g.stateNode.implementation !== v.implementation
        ? ((g = _f(v, b.mode, k)), (g.return = b), g)
        : ((g = o(g, v.children || [])), (g.return = b), g);
    }
    function d(b, g, v, k, O) {
      return g === null || g.tag !== 7
        ? ((g = Kr(v, b.mode, k, O)), (g.return = b), g)
        : ((g = o(g, v)), (g.return = b), g);
    }
    function f(b, g, v) {
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return (g = Af("" + g, b.mode, v)), (g.return = b), g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ms:
            return (
              (v = vl(g.type, g.key, g.props, null, b.mode, v)),
              (v.ref = ra(b, null, g)),
              (v.return = b),
              v
            );
          case wo:
            return (g = _f(g, b.mode, v)), (g.return = b), g;
          case or:
            var k = g._init;
            return f(b, k(g._payload), v);
        }
        if (_i(g) || Ni(g))
          return (g = Kr(g, b.mode, v, null)), (g.return = b), g;
        Zs(b, g);
      }
      return null;
    }
    function p(b, g, v, k) {
      var O = g !== null ? g.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return O !== null ? null : s(b, g, "" + v, k);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ms:
            return v.key === O ? l(b, g, v, k) : null;
          case wo:
            return v.key === O ? u(b, g, v, k) : null;
          case or:
            return (O = v._init), p(b, g, O(v._payload), k);
        }
        if (_i(v) || Ni(v)) return O !== null ? null : d(b, g, v, k, null);
        Zs(b, v);
      }
      return null;
    }
    function y(b, g, v, k, O) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return (b = b.get(v) || null), s(g, b, "" + k, O);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ms:
            return (
              (b = b.get(k.key === null ? v : k.key) || null), l(g, b, k, O)
            );
          case wo:
            return (
              (b = b.get(k.key === null ? v : k.key) || null), u(g, b, k, O)
            );
          case or:
            var R = k._init;
            return y(b, g, v, R(k._payload), O);
        }
        if (_i(k) || Ni(k)) return (b = b.get(v) || null), d(g, b, k, O, null);
        Zs(g, k);
      }
      return null;
    }
    function m(b, g, v, k) {
      for (
        var O = null, R = null, T = g, A = (g = 0), _ = null;
        T !== null && A < v.length;
        A++
      ) {
        T.index > A ? ((_ = T), (T = null)) : (_ = T.sibling);
        var M = p(b, T, v[A], k);
        if (M === null) {
          T === null && (T = _);
          break;
        }
        e && T && M.alternate === null && t(b, T),
          (g = i(M, g, A)),
          R === null ? (O = M) : (R.sibling = M),
          (R = M),
          (T = _);
      }
      if (A === v.length) return n(b, T), je && jr(b, A), O;
      if (T === null) {
        for (; A < v.length; A++)
          (T = f(b, v[A], k)),
            T !== null &&
              ((g = i(T, g, A)),
              R === null ? (O = T) : (R.sibling = T),
              (R = T));
        return je && jr(b, A), O;
      }
      for (T = r(b, T); A < v.length; A++)
        (_ = y(T, b, A, v[A], k)),
          _ !== null &&
            (e && _.alternate !== null && T.delete(_.key === null ? A : _.key),
            (g = i(_, g, A)),
            R === null ? (O = _) : (R.sibling = _),
            (R = _));
      return (
        e &&
          T.forEach(function (D) {
            return t(b, D);
          }),
        je && jr(b, A),
        O
      );
    }
    function w(b, g, v, k) {
      var O = Ni(v);
      if (typeof O != "function") throw Error(q(150));
      if (((v = O.call(v)), v == null)) throw Error(q(151));
      for (
        var R = (O = null), T = g, A = (g = 0), _ = null, M = v.next();
        T !== null && !M.done;
        A++, M = v.next()
      ) {
        T.index > A ? ((_ = T), (T = null)) : (_ = T.sibling);
        var D = p(b, T, M.value, k);
        if (D === null) {
          T === null && (T = _);
          break;
        }
        e && T && D.alternate === null && t(b, T),
          (g = i(D, g, A)),
          R === null ? (O = D) : (R.sibling = D),
          (R = D),
          (T = _);
      }
      if (M.done) return n(b, T), je && jr(b, A), O;
      if (T === null) {
        for (; !M.done; A++, M = v.next())
          (M = f(b, M.value, k)),
            M !== null &&
              ((g = i(M, g, A)),
              R === null ? (O = M) : (R.sibling = M),
              (R = M));
        return je && jr(b, A), O;
      }
      for (T = r(b, T); !M.done; A++, M = v.next())
        (M = y(T, b, A, M.value, k)),
          M !== null &&
            (e && M.alternate !== null && T.delete(M.key === null ? A : M.key),
            (g = i(M, g, A)),
            R === null ? (O = M) : (R.sibling = M),
            (R = M));
      return (
        e &&
          T.forEach(function (U) {
            return t(b, U);
          }),
        je && jr(b, A),
        O
      );
    }
    function P(b, g, v, k) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === xo &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case ms:
            e: {
              for (var O = v.key, R = g; R !== null; ) {
                if (R.key === O) {
                  if (((O = v.type), O === xo)) {
                    if (R.tag === 7) {
                      n(b, R.sibling),
                        (g = o(R, v.props.children)),
                        (g.return = b),
                        (b = g);
                      break e;
                    }
                  } else if (
                    R.elementType === O ||
                    (typeof O == "object" &&
                      O !== null &&
                      O.$$typeof === or &&
                      Gg(O) === R.type)
                  ) {
                    n(b, R.sibling),
                      (g = o(R, v.props)),
                      (g.ref = ra(b, R, v)),
                      (g.return = b),
                      (b = g);
                    break e;
                  }
                  n(b, R);
                  break;
                } else t(b, R);
                R = R.sibling;
              }
              v.type === xo
                ? ((g = Kr(v.props.children, b.mode, k, v.key)),
                  (g.return = b),
                  (b = g))
                : ((k = vl(v.type, v.key, v.props, null, b.mode, k)),
                  (k.ref = ra(b, g, v)),
                  (k.return = b),
                  (b = k));
            }
            return a(b);
          case wo:
            e: {
              for (R = v.key; g !== null; ) {
                if (g.key === R)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === v.containerInfo &&
                    g.stateNode.implementation === v.implementation
                  ) {
                    n(b, g.sibling),
                      (g = o(g, v.children || [])),
                      (g.return = b),
                      (b = g);
                    break e;
                  } else {
                    n(b, g);
                    break;
                  }
                else t(b, g);
                g = g.sibling;
              }
              (g = _f(v, b.mode, k)), (g.return = b), (b = g);
            }
            return a(b);
          case or:
            return (R = v._init), P(b, g, R(v._payload), k);
        }
        if (_i(v)) return m(b, g, v, k);
        if (Ni(v)) return w(b, g, v, k);
        Zs(b, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          g !== null && g.tag === 6
            ? (n(b, g.sibling), (g = o(g, v)), (g.return = b), (b = g))
            : (n(b, g), (g = Af(v, b.mode, k)), (g.return = b), (b = g)),
          a(b))
        : n(b, g);
    }
    return P;
  }
  var Fo = Jg(!0),
    Yg = Jg(!1),
    oa = {},
    Rn = pr(oa),
    ia = pr(oa),
    aa = pr(oa);
  function Dr(e) {
    if (e === oa) throw Error(q(174));
    return e;
  }
  function Jd(e, t) {
    switch (($e(aa, t), $e(ia, e), $e(Rn, oa), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gc(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Gc(t, e));
    }
    ze(Rn), $e(Rn, t);
  }
  function Do() {
    ze(Rn), ze(ia), ze(aa);
  }
  function Xg(e) {
    Dr(aa.current);
    var t = Dr(Rn.current),
      n = Gc(t, e.type);
    t !== n && ($e(ia, e), $e(Rn, n));
  }
  function Yd(e) {
    ia.current === e && (ze(Rn), ze(ia));
  }
  var Ve = pr(0);
  function el(e) {
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
  var Xd = [];
  function Qd() {
    for (var e = 0; e < Xd.length; e++)
      Xd[e]._workInProgressVersionPrimary = null;
    Xd.length = 0;
  }
  var tl = Wn.ReactCurrentDispatcher,
    Zd = Wn.ReactCurrentBatchConfig,
    Ur = 0,
    He = null,
    nt = null,
    st = null,
    nl = !1,
    sa = !1,
    la = 0,
    b2 = 0;
  function yt() {
    throw Error(q(321));
  }
  function ef(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!mn(e[n], t[n])) return !1;
    return !0;
  }
  function tf(e, t, n, r, o, i) {
    if (
      ((Ur = i),
      (He = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (tl.current = e === null || e.memoizedState === null ? k2 : E2),
      (e = n(r, o)),
      sa)
    ) {
      i = 0;
      do {
        if (((sa = !1), (la = 0), 25 <= i)) throw Error(q(301));
        (i += 1),
          (st = nt = null),
          (t.updateQueue = null),
          (tl.current = C2),
          (e = n(r, o));
      } while (sa);
    }
    if (
      ((tl.current = il),
      (t = nt !== null && nt.next !== null),
      (Ur = 0),
      (st = nt = He = null),
      (nl = !1),
      t)
    )
      throw Error(q(300));
    return e;
  }
  function nf() {
    var e = la !== 0;
    return (la = 0), e;
  }
  function Nn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return st === null ? (He.memoizedState = st = e) : (st = st.next = e), st;
  }
  function Qt() {
    if (nt === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = nt.next;
    var t = st === null ? He.memoizedState : st.next;
    if (t !== null) (st = t), (nt = e);
    else {
      if (e === null) throw Error(q(310));
      (nt = e),
        (e = {
          memoizedState: nt.memoizedState,
          baseState: nt.baseState,
          baseQueue: nt.baseQueue,
          queue: nt.queue,
          next: null,
        }),
        st === null ? (He.memoizedState = st = e) : (st = st.next = e);
    }
    return st;
  }
  function ua(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function rf(e) {
    var t = Qt(),
      n = t.queue;
    if (n === null) throw Error(q(311));
    n.lastRenderedReducer = e;
    var r = nt,
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
        if ((Ur & d) === d)
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
            (He.lanes |= d),
            (Wr |= d);
        }
        u = u.next;
      } while (u !== null && u !== i);
      l === null ? (a = r) : (l.next = s),
        mn(r, t.memoizedState) || (_t = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (He.lanes |= i), (Wr |= i), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function of(e) {
    var t = Qt(),
      n = t.queue;
    if (n === null) throw Error(q(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = (o = o.next);
      do (i = e(i, a.action)), (a = a.next);
      while (a !== o);
      mn(i, t.memoizedState) || (_t = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Qg() {}
  function Zg(e, t) {
    var n = He,
      r = Qt(),
      o = t(),
      i = !mn(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (_t = !0)),
      (r = r.queue),
      af(n0.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (st !== null && st.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ca(9, t0.bind(null, n, r, o, t), void 0, null),
        lt === null)
      )
        throw Error(q(349));
      Ur & 30 || e0(n, t, o);
    }
    return o;
  }
  function e0(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = He.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (He.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function t0(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), r0(t) && o0(e);
  }
  function n0(e, t, n) {
    return n(function () {
      r0(t) && o0(e);
    });
  }
  function r0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mn(e, n);
    } catch {
      return !0;
    }
  }
  function o0(e) {
    var t = Gn(e, 1);
    t !== null && wn(t, e, 1, -1);
  }
  function i0(e) {
    var t = Nn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ua,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = S2.bind(null, He, e)),
      [t.memoizedState, e]
    );
  }
  function ca(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = He.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (He.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function a0() {
    return Qt().memoizedState;
  }
  function rl(e, t, n, r) {
    var o = Nn();
    (He.flags |= e),
      (o.memoizedState = ca(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ol(e, t, n, r) {
    var o = Qt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (nt !== null) {
      var a = nt.memoizedState;
      if (((i = a.destroy), r !== null && ef(r, a.deps))) {
        o.memoizedState = ca(t, n, i, r);
        return;
      }
    }
    (He.flags |= e), (o.memoizedState = ca(1 | t, n, i, r));
  }
  function s0(e, t) {
    return rl(8390656, 8, e, t);
  }
  function af(e, t) {
    return ol(2048, 8, e, t);
  }
  function l0(e, t) {
    return ol(4, 2, e, t);
  }
  function u0(e, t) {
    return ol(4, 4, e, t);
  }
  function c0(e, t) {
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
  function d0(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ol(4, 4, c0.bind(null, t, e), n)
    );
  }
  function sf() {}
  function f0(e, t) {
    var n = Qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ef(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function p0(e, t) {
    var n = Qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ef(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function h0(e, t, n) {
    return Ur & 21
      ? (mn(n, t) ||
          ((n = Fm()), (He.lanes |= n), (Wr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (_t = !0)), (e.memoizedState = n));
  }
  function w2(e, t) {
    var n = Ne;
    (Ne = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Zd.transition;
    Zd.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ne = n), (Zd.transition = r);
    }
  }
  function m0() {
    return Qt().memoizedState;
  }
  function x2(e, t, n) {
    var r = xr(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      g0(e))
    )
      y0(t, n);
    else if (((n = Fg(e, t, n, r)), n !== null)) {
      var o = Ct();
      wn(n, e, r, o), v0(n, t, r);
    }
  }
  function S2(e, t, n) {
    var r = xr(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (g0(e)) y0(t, o);
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
          if (((o.hasEagerState = !0), (o.eagerState = s), mn(s, a))) {
            var l = t.interleaved;
            l === null
              ? ((o.next = o), Hd(t))
              : ((o.next = l.next), (l.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = Fg(e, t, o, r)),
        n !== null && ((o = Ct()), wn(n, e, r, o), v0(n, t, r));
    }
  }
  function g0(e) {
    var t = e.alternate;
    return e === He || (t !== null && t === He);
  }
  function y0(e, t) {
    sa = nl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function v0(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ad(e, n);
    }
  }
  var il = {
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
    k2 = {
      readContext: Xt,
      useCallback: function (e, t) {
        return (Nn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Xt,
      useEffect: s0,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          rl(4194308, 4, c0.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return rl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return rl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Nn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Nn();
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
          (e = e.dispatch = x2.bind(null, He, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Nn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: i0,
      useDebugValue: sf,
      useDeferredValue: function (e) {
        return (Nn().memoizedState = e);
      },
      useTransition: function () {
        var e = i0(!1),
          t = e[0];
        return (e = w2.bind(null, e[1])), (Nn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = He,
          o = Nn();
        if (je) {
          if (n === void 0) throw Error(q(407));
          n = n();
        } else {
          if (((n = t()), lt === null)) throw Error(q(349));
          Ur & 30 || e0(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          s0(n0.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          ca(9, t0.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Nn(),
          t = lt.identifierPrefix;
        if (je) {
          var n = Kn,
            r = qn;
          (n = (r & ~(1 << (32 - hn(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = la++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = b2++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    E2 = {
      readContext: Xt,
      useCallback: f0,
      useContext: Xt,
      useEffect: af,
      useImperativeHandle: d0,
      useInsertionEffect: l0,
      useLayoutEffect: u0,
      useMemo: p0,
      useReducer: rf,
      useRef: a0,
      useState: function () {
        return rf(ua);
      },
      useDebugValue: sf,
      useDeferredValue: function (e) {
        var t = Qt();
        return h0(t, nt.memoizedState, e);
      },
      useTransition: function () {
        var e = rf(ua)[0],
          t = Qt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qg,
      useSyncExternalStore: Zg,
      useId: m0,
      unstable_isNewReconciler: !1,
    },
    C2 = {
      readContext: Xt,
      useCallback: f0,
      useContext: Xt,
      useEffect: af,
      useImperativeHandle: d0,
      useInsertionEffect: l0,
      useLayoutEffect: u0,
      useMemo: p0,
      useReducer: of,
      useRef: a0,
      useState: function () {
        return of(ua);
      },
      useDebugValue: sf,
      useDeferredValue: function (e) {
        var t = Qt();
        return nt === null ? (t.memoizedState = e) : h0(t, nt.memoizedState, e);
      },
      useTransition: function () {
        var e = of(ua)[0],
          t = Qt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qg,
      useSyncExternalStore: Zg,
      useId: m0,
      unstable_isNewReconciler: !1,
    };
  function Uo(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Zx(r)), (r = r.return);
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
  function lf(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function uf(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var O2 = typeof WeakMap == "function" ? WeakMap : Map;
  function b0(e, t, n) {
    (n = Jn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        fl || ((fl = !0), (kf = r)), uf(e, t);
      }),
      n
    );
  }
  function w0(e, t, n) {
    (n = Jn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          uf(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          uf(e, t),
            typeof r != "function" &&
              (br === null ? (br = new Set([this])) : br.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function x0(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new O2();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = F2.bind(null, e, t, n)), t.then(e, e));
  }
  function S0(e) {
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
  function k0(e, t, n, r, o) {
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
                : ((t = Jn(-1, 1)), (t.tag = 2), yr(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var T2 = Wn.ReactCurrentOwner,
    _t = !1;
  function Et(e, t, n, r) {
    t.child = e === null ? Yg(t, null, n, r) : Fo(t, e.child, n, r);
  }
  function E0(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      jo(t, o),
      (r = tf(e, t, n, r, i, o)),
      (n = nf()),
      e !== null && !_t
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Yn(e, t, o))
        : (je && n && Ld(t), (t.flags |= 1), Et(e, t, r, o), t.child)
    );
  }
  function C0(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Nf(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), O0(e, t, i, r, o))
        : ((e = vl(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var a = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Yi), n(a, r) && e.ref === t.ref)
      )
        return Yn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = kr(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function O0(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Yi(i, r) && e.ref === t.ref)
        if (((_t = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (_t = !0);
        else return (t.lanes = e.lanes), Yn(e, t, o);
    }
    return cf(e, t, n, r, o);
  }
  function T0(e, t, n) {
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
          $e(Vo, Vt),
          (Vt |= n);
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
            $e(Vo, Vt),
            (Vt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          $e(Vo, Vt),
          (Vt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        $e(Vo, Vt),
        (Vt |= r);
    return Et(e, t, o, n), t.child;
  }
  function P0(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function cf(e, t, n, r, o) {
    var i = At(n) ? Br : gt.current;
    return (
      (i = Io(t, i)),
      jo(t, o),
      (n = tf(e, t, n, r, i, o)),
      (r = nf()),
      e !== null && !_t
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Yn(e, t, o))
        : (je && r && Ld(t), (t.flags |= 1), Et(e, t, n, o), t.child)
    );
  }
  function R0(e, t, n, r, o) {
    if (At(n)) {
      var i = !0;
      Ws(t);
    } else i = !1;
    if ((jo(t, o), t.stateNode === null))
      sl(e, t), qg(t, n, r), Gd(t, n, r, o), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var l = a.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = Xt(u))
        : ((u = At(n) ? Br : gt.current), (u = Io(t, u)));
      var d = n.getDerivedStateFromProps,
        f =
          typeof d == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== r || l !== u) && Kg(t, a, r, u)),
        (gr = !1);
      var p = t.memoizedState;
      (a.state = p),
        Xs(t, r, a, o),
        (l = t.memoizedState),
        s !== r || p !== l || Nt.current || gr
          ? (typeof d == "function" && (Kd(t, n, d, r), (l = t.memoizedState)),
            (s = gr || Hg(t, n, s, r, p, l, u))
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
        Dg(e, t),
        (s = t.memoizedProps),
        (u = t.type === t.elementType ? s : yn(t.type, s)),
        (a.props = u),
        (f = t.pendingProps),
        (p = a.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = Xt(l))
          : ((l = At(n) ? Br : gt.current), (l = Io(t, l)));
      var y = n.getDerivedStateFromProps;
      (d =
        typeof y == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== f || p !== l) && Kg(t, a, r, l)),
        (gr = !1),
        (p = t.memoizedState),
        (a.state = p),
        Xs(t, r, a, o);
      var m = t.memoizedState;
      s !== f || p !== m || Nt.current || gr
        ? (typeof y == "function" && (Kd(t, n, y, r), (m = t.memoizedState)),
          (u = gr || Hg(t, n, u, r, p, m, l) || !1)
            ? (d ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, m, l),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, m, l)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (s === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = m)),
          (a.props = r),
          (a.state = m),
          (a.context = l),
          (r = u))
        : (typeof a.componentDidUpdate != "function" ||
            (s === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return df(e, t, n, r, i, o);
  }
  function df(e, t, n, r, o, i) {
    P0(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && Mg(t, n, !1), Yn(e, t, i);
    (r = t.stateNode), (T2.current = t);
    var s =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Fo(t, e.child, null, i)), (t.child = Fo(t, null, s, i)))
        : Et(e, t, s, i),
      (t.memoizedState = r.state),
      o && Mg(t, n, !0),
      t.child
    );
  }
  function N0(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ag(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ag(e, t.context, !1),
      Jd(e, t.containerInfo);
  }
  function A0(e, t, n, r, o) {
    return Bo(), Fd(o), (t.flags |= 256), Et(e, t, n, r), t.child;
  }
  var ff = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pf(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _0(e, t, n) {
    var r = t.pendingProps,
      o = Ve.current,
      i = !1,
      a = (t.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      s
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      $e(Ve, o & 1),
      e === null)
    )
      return (
        jd(t),
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
                  : (i = bl(a, r, 0, null)),
                (e = Kr(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = pf(n)),
                (t.memoizedState = ff),
                e)
              : hf(t, a))
      );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
      return P2(e, t, a, r, s, o, n);
    if (i) {
      (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(a & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = kr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        s !== null ? (i = kr(s, i)) : ((i = Kr(i, a, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? pf(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = ff),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = kr(i, { mode: "visible", children: r.children })),
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
  function hf(e, t) {
    return (
      (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function al(e, t, n, r) {
    return (
      r !== null && Fd(r),
      Fo(t, e.child, null, n),
      (e = hf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function P2(e, t, n, r, o, i, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = lf(Error(q(422)))), al(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = bl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Kr(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Fo(t, e.child, null, a),
          (t.child.memoizedState = pf(a)),
          (t.memoizedState = ff),
          i);
    if (!(t.mode & 1)) return al(e, t, a, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (i = Error(q(419))), (r = lf(i, r, void 0)), al(e, t, a, r)
      );
    }
    if (((s = (a & e.childLanes) !== 0), _t || s)) {
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
            ((i.retryLane = o), Gn(e, o), wn(r, e, o, -1));
      }
      return Rf(), (r = lf(Error(q(421)))), al(e, t, a, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = D2.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Wt = fr(o.nextSibling)),
        (Ut = t),
        (je = !0),
        (gn = null),
        e !== null &&
          ((Jt[Yt++] = qn),
          (Jt[Yt++] = Kn),
          (Jt[Yt++] = zr),
          (qn = e.id),
          (Kn = e.overflow),
          (zr = t)),
        (t = hf(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function M0(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vd(e.return, t, n);
  }
  function mf(e, t, n, r, o) {
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
  function I0(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((Et(e, t, r.children, n), (r = Ve.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && M0(e, n, t);
          else if (e.tag === 19) M0(e, n, t);
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
    if (($e(Ve, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && el(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            mf(t, !1, o, n, i);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && el(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          mf(t, !0, n, null, i);
          break;
        case "together":
          mf(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function sl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Yn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Wr |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(q(153));
    if (t.child !== null) {
      for (
        e = t.child, n = kr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = kr(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function R2(e, t, n) {
    switch (t.tag) {
      case 3:
        N0(t), Bo();
        break;
      case 5:
        Xg(t);
        break;
      case 1:
        At(t.type) && Ws(t);
        break;
      case 4:
        Jd(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        $e(Gs, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? ($e(Ve, Ve.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? _0(e, t, n)
            : ($e(Ve, Ve.current & 1),
              (e = Yn(e, t, n)),
              e !== null ? e.sibling : null);
        $e(Ve, Ve.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return I0(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          $e(Ve, Ve.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), T0(e, t, n);
    }
    return Yn(e, t, n);
  }
  var $0, gf, L0, B0;
  ($0 = function (e, t) {
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
    (gf = function () {}),
    (L0 = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), Dr(Rn.current);
        var i = null;
        switch (n) {
          case "input":
            (o = Vc(e, o)), (r = Vc(e, r)), (i = []);
            break;
          case "select":
            (o = We({}, o, { value: void 0 })),
              (r = We({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (o = Kc(e, o)), (r = Kc(e, r)), (i = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Fs);
        }
        Jc(n, r);
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
                (Ri.hasOwnProperty(u)
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
                  (Ri.hasOwnProperty(u)
                    ? (l != null && u === "onScroll" && Be("scroll", e),
                      i || s === l || (i = []))
                    : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    }),
    (B0 = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function da(e, t) {
    if (!je)
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
  function vt(e) {
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
  function N2(e, t, n) {
    var r = t.pendingProps;
    switch ((Bd(t), t.tag)) {
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
        return vt(t), null;
      case 1:
        return At(t.type) && Us(), vt(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Do(),
          ze(Nt),
          ze(gt),
          Qd(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ks(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), gn !== null && (Of(gn), (gn = null)))),
          gf(e, t),
          vt(t),
          null
        );
      case 5:
        Yd(t);
        var o = Dr(aa.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          L0(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(q(166));
            return vt(t), null;
          }
          if (((e = Dr(Rn.current)), Ks(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[Pn] = t), (r[ta] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Be("cancel", r), Be("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Qi.length; o++) Be(Qi[o], r);
                break;
              case "source":
                Be("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Be("error", r), Be("load", r);
                break;
              case "details":
                Be("toggle", r);
                break;
              case "input":
                gm(r, i), Be("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  Be("invalid", r);
                break;
              case "textarea":
                bm(r, i), Be("invalid", r);
            }
            Jc(n, i), (o = null);
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var s = i[a];
                a === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        js(r.textContent, s, e),
                      (o = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        js(r.textContent, s, e),
                      (o = ["children", "" + s]))
                  : Ri.hasOwnProperty(a) &&
                    s != null &&
                    a === "onScroll" &&
                    Be("scroll", r);
              }
            switch (n) {
              case "input":
                gs(r), vm(r, i, !0);
                break;
              case "textarea":
                gs(r), xm(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Fs);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Sm(n)),
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
              (e[Pn] = t),
              (e[ta] = r),
              $0(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = Yc(n, r)), n)) {
                case "dialog":
                  Be("cancel", e), Be("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Be("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Qi.length; o++) Be(Qi[o], e);
                  o = r;
                  break;
                case "source":
                  Be("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Be("error", e), Be("load", e), (o = r);
                  break;
                case "details":
                  Be("toggle", e), (o = r);
                  break;
                case "input":
                  gm(e, r), (o = Vc(e, r)), Be("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = We({}, r, { value: void 0 })),
                    Be("invalid", e);
                  break;
                case "textarea":
                  bm(e, r), (o = Kc(e, r)), Be("invalid", e);
                  break;
                default:
                  o = r;
              }
              Jc(n, o), (s = o);
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var l = s[i];
                  i === "style"
                    ? Cm(e, l)
                    : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && km(e, l))
                    : i === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Mi(e, l)
                      : typeof l == "number" && Mi(e, "" + l)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (Ri.hasOwnProperty(i)
                        ? l != null && i === "onScroll" && Be("scroll", e)
                        : l != null && Mc(e, i, l, a));
                }
              switch (n) {
                case "input":
                  gs(e), vm(e, r, !1);
                  break;
                case "textarea":
                  gs(e), xm(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ir(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? So(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        So(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Fs);
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
        return vt(t), null;
      case 6:
        if (e && t.stateNode != null) B0(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(q(166));
          if (((n = Dr(aa.current)), Dr(Rn.current), Ks(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Pn] = t),
              (i = r.nodeValue !== n) && ((e = Ut), e !== null))
            )
              switch (e.tag) {
                case 3:
                  js(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    js(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Pn] = t),
              (t.stateNode = r);
        }
        return vt(t), null;
      case 13:
        if (
          (ze(Ve),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && Wt !== null && t.mode & 1 && !(t.flags & 128))
            jg(), Bo(), (t.flags |= 98560), (i = !1);
          else if (((i = Ks(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(q(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(q(317));
              i[Pn] = t;
            } else
              Bo(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            vt(t), (i = !1);
          } else gn !== null && (Of(gn), (gn = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ve.current & 1 ? rt === 0 && (rt = 3) : Rf())),
            t.updateQueue !== null && (t.flags |= 4),
            vt(t),
            null);
      case 4:
        return (
          Do(),
          gf(e, t),
          e === null && Zi(t.stateNode.containerInfo),
          vt(t),
          null
        );
      case 10:
        return Wd(t.type._context), vt(t), null;
      case 17:
        return At(t.type) && Us(), vt(t), null;
      case 19:
        if ((ze(Ve), (i = t.memoizedState), i === null)) return vt(t), null;
        if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (r) da(i, !1);
          else {
            if (rt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = el(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      da(i, !1),
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
                  return $e(Ve, (Ve.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Ye() > Ho &&
              ((t.flags |= 128), (r = !0), da(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = el(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                da(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !je)
              )
                return vt(t), null;
            } else
              2 * Ye() - i.renderingStartTime > Ho &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), da(i, !1), (t.lanes = 4194304));
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
            (i.renderingStartTime = Ye()),
            (t.sibling = null),
            (n = Ve.current),
            $e(Ve, r ? (n & 1) | 2 : n & 1),
            t)
          : (vt(t), null);
      case 22:
      case 23:
        return (
          Pf(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Vt & 1073741824 &&
              (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(q(156, t.tag));
  }
  function A2(e, t) {
    switch ((Bd(t), t.tag)) {
      case 1:
        return (
          At(t.type) && Us(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Do(),
          ze(Nt),
          ze(gt),
          Qd(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Yd(t), null;
      case 13:
        if (
          (ze(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(q(340));
          Bo();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ze(Ve), null;
      case 4:
        return Do(), null;
      case 10:
        return Wd(t.type._context), null;
      case 22:
      case 23:
        return Pf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ll = !1,
    bt = !1,
    _2 = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function Wo(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          qe(e, t, r);
        }
      else n.current = null;
  }
  function z0(e, t, n) {
    try {
      n();
    } catch (r) {
      qe(e, t, r);
    }
  }
  var j0 = !1;
  function M2(e, t) {
    if (((Pd = Ps), (e = mg()), wd(e))) {
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
              p = null;
            t: for (;;) {
              for (
                var y;
                f !== n || (o !== 0 && f.nodeType !== 3) || (s = a + o),
                  f !== i || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                  f.nodeType === 3 && (a += f.nodeValue.length),
                  (y = f.firstChild) !== null;

              )
                (p = f), (f = y);
              for (;;) {
                if (f === e) break t;
                if (
                  (p === n && ++u === o && (s = a),
                  p === i && ++d === r && (l = a),
                  (y = f.nextSibling) !== null)
                )
                  break;
                (f = p), (p = f.parentNode);
              }
              f = y;
            }
            n = s === -1 || l === -1 ? null : { start: s, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Rd = { focusedElem: e, selectionRange: n }, Ps = !1, ee = t;
      ee !== null;

    )
      if (
        ((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ee = e);
      else
        for (; ee !== null; ) {
          t = ee;
          try {
            var m = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (m !== null) {
                    var w = m.memoizedProps,
                      P = m.memoizedState,
                      b = t.stateNode,
                      g = b.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? w : yn(t.type, w),
                        P,
                      );
                    b.__reactInternalSnapshotBeforeUpdate = g;
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
                  throw Error(q(163));
              }
          } catch (k) {
            qe(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ee = e);
            break;
          }
          ee = t.return;
        }
    return (m = j0), (j0 = !1), m;
  }
  function fa(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && z0(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function ul(e, t) {
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
  function yf(e) {
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
  function F0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), F0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Pn],
          delete t[ta],
          delete t[Md],
          delete t[m2],
          delete t[g2])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function D0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function U0(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || D0(e.return)) return null;
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
  function vf(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Fs));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (vf(e, t, n), e = e.sibling; e !== null; )
        vf(e, t, n), (e = e.sibling);
  }
  function bf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bf(e, t, n), e = e.sibling; e !== null; )
        bf(e, t, n), (e = e.sibling);
  }
  var dt = null,
    vn = !1;
  function vr(e, t, n) {
    for (n = n.child; n !== null; ) W0(e, t, n), (n = n.sibling);
  }
  function W0(e, t, n) {
    if (Tn && typeof Tn.onCommitFiberUnmount == "function")
      try {
        Tn.onCommitFiberUnmount(Ss, n);
      } catch {}
    switch (n.tag) {
      case 5:
        bt || Wo(n, t);
      case 6:
        var r = dt,
          o = vn;
        (dt = null),
          vr(e, t, n),
          (dt = r),
          (vn = o),
          dt !== null &&
            (vn
              ? ((e = dt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : dt.removeChild(n.stateNode));
        break;
      case 18:
        dt !== null &&
          (vn
            ? ((e = dt),
              (n = n.stateNode),
              e.nodeType === 8
                ? _d(e.parentNode, n)
                : e.nodeType === 1 && _d(e, n),
              Vi(e))
            : _d(dt, n.stateNode));
        break;
      case 4:
        (r = dt),
          (o = vn),
          (dt = n.stateNode.containerInfo),
          (vn = !0),
          vr(e, t, n),
          (dt = r),
          (vn = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !bt &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              a = i.destroy;
            (i = i.tag),
              a !== void 0 && (i & 2 || i & 4) && z0(n, t, a),
              (o = o.next);
          } while (o !== r);
        }
        vr(e, t, n);
        break;
      case 1:
        if (
          !bt &&
          (Wo(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (s) {
            qe(n, t, s);
          }
        vr(e, t, n);
        break;
      case 21:
        vr(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((bt = (r = bt) || n.memoizedState !== null), vr(e, t, n), (bt = r))
          : vr(e, t, n);
        break;
      default:
        vr(e, t, n);
    }
  }
  function V0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new _2()),
        t.forEach(function (r) {
          var o = U2.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function bn(e, t) {
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
                (dt = s.stateNode), (vn = !1);
                break e;
              case 3:
                (dt = s.stateNode.containerInfo), (vn = !0);
                break e;
              case 4:
                (dt = s.stateNode.containerInfo), (vn = !0);
                break e;
            }
            s = s.return;
          }
          if (dt === null) throw Error(q(160));
          W0(i, a, o), (dt = null), (vn = !1);
          var l = o.alternate;
          l !== null && (l.return = null), (o.return = null);
        } catch (u) {
          qe(o, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) H0(t, e), (t = t.sibling);
  }
  function H0(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((bn(t, e), An(e), r & 4)) {
          try {
            fa(3, e, e.return), ul(3, e);
          } catch (w) {
            qe(e, e.return, w);
          }
          try {
            fa(5, e, e.return);
          } catch (w) {
            qe(e, e.return, w);
          }
        }
        break;
      case 1:
        bn(t, e), An(e), r & 512 && n !== null && Wo(n, n.return);
        break;
      case 5:
        if (
          (bn(t, e),
          An(e),
          r & 512 && n !== null && Wo(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Mi(o, "");
          } catch (w) {
            qe(e, e.return, w);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            a = n !== null ? n.memoizedProps : i,
            s = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              s === "input" && i.type === "radio" && i.name != null && ym(o, i),
                Yc(s, a);
              var u = Yc(s, i);
              for (a = 0; a < l.length; a += 2) {
                var d = l[a],
                  f = l[a + 1];
                d === "style"
                  ? Cm(o, f)
                  : d === "dangerouslySetInnerHTML"
                  ? km(o, f)
                  : d === "children"
                  ? Mi(o, f)
                  : Mc(o, d, f, u);
              }
              switch (s) {
                case "input":
                  Hc(o, i);
                  break;
                case "textarea":
                  wm(o, i);
                  break;
                case "select":
                  var p = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var y = i.value;
                  y != null
                    ? So(o, !!i.multiple, y, !1)
                    : p !== !!i.multiple &&
                      (i.defaultValue != null
                        ? So(o, !!i.multiple, i.defaultValue, !0)
                        : So(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[ta] = i;
            } catch (w) {
              qe(e, e.return, w);
            }
        }
        break;
      case 6:
        if ((bn(t, e), An(e), r & 4)) {
          if (e.stateNode === null) throw Error(q(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (w) {
            qe(e, e.return, w);
          }
        }
        break;
      case 3:
        if (
          (bn(t, e), An(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Vi(t.containerInfo);
          } catch (w) {
            qe(e, e.return, w);
          }
        break;
      case 4:
        bn(t, e), An(e);
        break;
      case 13:
        bn(t, e),
          An(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Sf = Ye())),
          r & 4 && V0(e);
        break;
      case 22:
        if (
          ((d = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((bt = (u = bt) || d), bn(t, e), (bt = u)) : bn(t, e),
          An(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
          )
            for (ee = e, d = e.child; d !== null; ) {
              for (f = ee = d; ee !== null; ) {
                switch (((p = ee), (y = p.child), p.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fa(4, p, p.return);
                    break;
                  case 1:
                    Wo(p, p.return);
                    var m = p.stateNode;
                    if (typeof m.componentWillUnmount == "function") {
                      (r = p), (n = p.return);
                      try {
                        (t = r),
                          (m.props = t.memoizedProps),
                          (m.state = t.memoizedState),
                          m.componentWillUnmount();
                      } catch (w) {
                        qe(r, n, w);
                      }
                    }
                    break;
                  case 5:
                    Wo(p, p.return);
                    break;
                  case 22:
                    if (p.memoizedState !== null) {
                      G0(f);
                      continue;
                    }
                }
                y !== null ? ((y.return = p), (ee = y)) : G0(f);
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
                        (s.style.display = Em("display", a)));
                } catch (w) {
                  qe(e, e.return, w);
                }
              }
            } else if (f.tag === 6) {
              if (d === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (w) {
                  qe(e, e.return, w);
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
        bn(t, e), An(e), r & 4 && V0(e);
        break;
      case 21:
        break;
      default:
        bn(t, e), An(e);
    }
  }
  function An(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (D0(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(q(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Mi(o, ""), (r.flags &= -33));
            var i = U0(e);
            bf(e, i, o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              s = U0(e);
            vf(e, s, a);
            break;
          default:
            throw Error(q(161));
        }
      } catch (l) {
        qe(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function I2(e, t, n) {
    (ee = e), q0(e);
  }
  function q0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ee !== null; ) {
      var o = ee,
        i = o.child;
      if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || ll;
        if (!a) {
          var s = o.alternate,
            l = (s !== null && s.memoizedState !== null) || bt;
          s = ll;
          var u = bt;
          if (((ll = a), (bt = l) && !u))
            for (ee = o; ee !== null; )
              (a = ee),
                (l = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? J0(o)
                  : l !== null
                  ? ((l.return = a), (ee = l))
                  : J0(o);
          for (; i !== null; ) (ee = i), q0(i), (i = i.sibling);
          (ee = o), (ll = s), (bt = u);
        }
        K0(e);
      } else
        o.subtreeFlags & 8772 && i !== null
          ? ((i.return = o), (ee = i))
          : K0(e);
    }
  }
  function K0(e) {
    for (; ee !== null; ) {
      var t = ee;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                bt || ul(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !bt)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : yn(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && Wg(t, i, r);
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
                  Wg(t, a, n);
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
                      f !== null && Vi(f);
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
                throw Error(q(163));
            }
          bt || (t.flags & 512 && yf(t));
        } catch (p) {
          qe(t, t.return, p);
        }
      }
      if (t === e) {
        ee = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (ee = n);
        break;
      }
      ee = t.return;
    }
  }
  function G0(e) {
    for (; ee !== null; ) {
      var t = ee;
      if (t === e) {
        ee = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (ee = n);
        break;
      }
      ee = t.return;
    }
  }
  function J0(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ul(4, t);
            } catch (l) {
              qe(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                qe(t, o, l);
              }
            }
            var i = t.return;
            try {
              yf(t);
            } catch (l) {
              qe(t, i, l);
            }
            break;
          case 5:
            var a = t.return;
            try {
              yf(t);
            } catch (l) {
              qe(t, a, l);
            }
        }
      } catch (l) {
        qe(t, t.return, l);
      }
      if (t === e) {
        ee = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (ee = s);
        break;
      }
      ee = t.return;
    }
  }
  var $2 = Math.ceil,
    cl = Wn.ReactCurrentDispatcher,
    wf = Wn.ReactCurrentOwner,
    Zt = Wn.ReactCurrentBatchConfig,
    Se = 0,
    lt = null,
    Xe = null,
    ft = 0,
    Vt = 0,
    Vo = pr(0),
    rt = 0,
    pa = null,
    Wr = 0,
    dl = 0,
    xf = 0,
    ha = null,
    Mt = null,
    Sf = 0,
    Ho = 1 / 0,
    Xn = null,
    fl = !1,
    kf = null,
    br = null,
    pl = !1,
    wr = null,
    hl = 0,
    ma = 0,
    Ef = null,
    ml = -1,
    gl = 0;
  function Ct() {
    return Se & 6 ? Ye() : ml !== -1 ? ml : (ml = Ye());
  }
  function xr(e) {
    return e.mode & 1
      ? Se & 2 && ft !== 0
        ? ft & -ft
        : v2.transition !== null
        ? (gl === 0 && (gl = Fm()), gl)
        : ((e = Ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jm(e.type))),
          e)
      : 1;
  }
  function wn(e, t, n, r) {
    if (50 < ma) throw ((ma = 0), (Ef = null), Error(q(185)));
    ji(e, n, r),
      (!(Se & 2) || e !== lt) &&
        (e === lt && (!(Se & 2) && (dl |= n), rt === 4 && Sr(e, ft)),
        It(e, r),
        n === 1 &&
          Se === 0 &&
          !(t.mode & 1) &&
          ((Ho = Ye() + 500), Vs && mr()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    vS(e, t);
    var r = Cs(e, e === lt ? ft : 0);
    if (r === 0)
      n !== null && Bm(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bm(n), t === 1))
        e.tag === 0 ? y2(X0.bind(null, e)) : Ig(X0.bind(null, e)),
          p2(function () {
            !(Se & 6) && mr();
          }),
          (n = null);
      else {
        switch (Dm(r)) {
          case 1:
            n = rd;
            break;
          case 4:
            n = zm;
            break;
          case 16:
            n = xs;
            break;
          case 536870912:
            n = jm;
            break;
          default:
            n = xs;
        }
        n = iy(n, Y0.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Y0(e, t) {
    if (((ml = -1), (gl = 0), Se & 6)) throw Error(q(327));
    var n = e.callbackNode;
    if (qo() && e.callbackNode !== n) return null;
    var r = Cs(e, e === lt ? ft : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
    else {
      t = r;
      var o = Se;
      Se |= 2;
      var i = Z0();
      (lt !== e || ft !== t) && ((Xn = null), (Ho = Ye() + 500), Hr(e, t));
      do
        try {
          z2();
          break;
        } catch (s) {
          Q0(e, s);
        }
      while (1);
      Ud(),
        (cl.current = i),
        (Se = o),
        Xe !== null ? (t = 0) : ((lt = null), (ft = 0), (t = rt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = od(e)), o !== 0 && ((r = o), (t = Cf(e, o)))),
        t === 1)
      )
        throw ((n = pa), Hr(e, 0), Sr(e, r), It(e, Ye()), n);
      if (t === 6) Sr(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !L2(o) &&
            ((t = yl(e, r)),
            t === 2 && ((i = od(e)), i !== 0 && ((r = i), (t = Cf(e, i)))),
            t === 1))
        )
          throw ((n = pa), Hr(e, 0), Sr(e, r), It(e, Ye()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(q(345));
          case 2:
            qr(e, Mt, Xn);
            break;
          case 3:
            if (
              (Sr(e, r),
              (r & 130023424) === r && ((t = Sf + 500 - Ye()), 10 < t))
            ) {
              if (Cs(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                Ct(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Ad(qr.bind(null, e, Mt, Xn), t);
              break;
            }
            qr(e, Mt, Xn);
            break;
          case 4:
            if ((Sr(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var a = 31 - hn(r);
              (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
            }
            if (
              ((r = o),
              (r = Ye() - r),
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
                  : 1960 * $2(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ad(qr.bind(null, e, Mt, Xn), r);
              break;
            }
            qr(e, Mt, Xn);
            break;
          case 5:
            qr(e, Mt, Xn);
            break;
          default:
            throw Error(q(329));
        }
      }
    }
    return It(e, Ye()), e.callbackNode === n ? Y0.bind(null, e) : null;
  }
  function Cf(e, t) {
    var n = ha;
    return (
      e.current.memoizedState.isDehydrated && (Hr(e, t).flags |= 256),
      (e = yl(e, t)),
      e !== 2 && ((t = Mt), (Mt = n), t !== null && Of(t)),
      e
    );
  }
  function Of(e) {
    Mt === null ? (Mt = e) : Mt.push.apply(Mt, e);
  }
  function L2(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!mn(i(), o)) return !1;
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
  function Sr(e, t) {
    for (
      t &= ~xf,
        t &= ~dl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - hn(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function X0(e) {
    if (Se & 6) throw Error(q(327));
    qo();
    var t = Cs(e, 0);
    if (!(t & 1)) return It(e, Ye()), null;
    var n = yl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = od(e);
      r !== 0 && ((t = r), (n = Cf(e, r)));
    }
    if (n === 1) throw ((n = pa), Hr(e, 0), Sr(e, t), It(e, Ye()), n);
    if (n === 6) throw Error(q(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      qr(e, Mt, Xn),
      It(e, Ye()),
      null
    );
  }
  function Tf(e, t) {
    var n = Se;
    Se |= 1;
    try {
      return e(t);
    } finally {
      (Se = n), Se === 0 && ((Ho = Ye() + 500), Vs && mr());
    }
  }
  function Vr(e) {
    wr !== null && wr.tag === 0 && !(Se & 6) && qo();
    var t = Se;
    Se |= 1;
    var n = Zt.transition,
      r = Ne;
    try {
      if (((Zt.transition = null), (Ne = 1), e)) return e();
    } finally {
      (Ne = r), (Zt.transition = n), (Se = t), !(Se & 6) && mr();
    }
  }
  function Pf() {
    (Vt = Vo.current), ze(Vo);
  }
  function Hr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), f2(n)), Xe !== null))
      for (n = Xe.return; n !== null; ) {
        var r = n;
        switch ((Bd(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Us();
            break;
          case 3:
            Do(), ze(Nt), ze(gt), Qd();
            break;
          case 5:
            Yd(r);
            break;
          case 4:
            Do();
            break;
          case 13:
            ze(Ve);
            break;
          case 19:
            ze(Ve);
            break;
          case 10:
            Wd(r.type._context);
            break;
          case 22:
          case 23:
            Pf();
        }
        n = n.return;
      }
    if (
      ((lt = e),
      (Xe = e = kr(e.current, null)),
      (ft = Vt = t),
      (rt = 0),
      (pa = null),
      (xf = dl = Wr = 0),
      (Mt = ha = null),
      Fr !== null)
    ) {
      for (t = 0; t < Fr.length; t++)
        if (((n = Fr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var a = i.next;
            (i.next = o), (r.next = a);
          }
          n.pending = r;
        }
      Fr = null;
    }
    return e;
  }
  function Q0(e, t) {
    do {
      var n = Xe;
      try {
        if ((Ud(), (tl.current = il), nl)) {
          for (var r = He.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          nl = !1;
        }
        if (
          ((Ur = 0),
          (st = nt = He = null),
          (sa = !1),
          (la = 0),
          (wf.current = null),
          n === null || n.return === null)
        ) {
          (rt = 1), (pa = t), (Xe = null);
          break;
        }
        e: {
          var i = e,
            a = n.return,
            s = n,
            l = t;
          if (
            ((t = ft),
            (s.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              d = s,
              f = d.tag;
            if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var p = d.alternate;
              p
                ? ((d.updateQueue = p.updateQueue),
                  (d.memoizedState = p.memoizedState),
                  (d.lanes = p.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var y = S0(a);
            if (y !== null) {
              (y.flags &= -257),
                k0(y, a, s, i, t),
                y.mode & 1 && x0(i, u, t),
                (t = y),
                (l = u);
              var m = t.updateQueue;
              if (m === null) {
                var w = new Set();
                w.add(l), (t.updateQueue = w);
              } else m.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                x0(i, u, t), Rf();
                break e;
              }
              l = Error(q(426));
            }
          } else if (je && s.mode & 1) {
            var P = S0(a);
            if (P !== null) {
              !(P.flags & 65536) && (P.flags |= 256),
                k0(P, a, s, i, t),
                Fd(Uo(l, s));
              break e;
            }
          }
          (i = l = Uo(l, s)),
            rt !== 4 && (rt = 2),
            ha === null ? (ha = [i]) : ha.push(i),
            (i = a);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = b0(i, l, t);
                Ug(i, b);
                break e;
              case 1:
                s = l;
                var g = i.type,
                  v = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof g.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (br === null || !br.has(v))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var k = w0(i, s, t);
                  Ug(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ty(n);
      } catch (O) {
        (t = O), Xe === n && n !== null && (Xe = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Z0() {
    var e = cl.current;
    return (cl.current = il), e === null ? il : e;
  }
  function Rf() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
      lt === null || (!(Wr & 268435455) && !(dl & 268435455)) || Sr(lt, ft);
  }
  function yl(e, t) {
    var n = Se;
    Se |= 2;
    var r = Z0();
    (lt !== e || ft !== t) && ((Xn = null), Hr(e, t));
    do
      try {
        B2();
        break;
      } catch (o) {
        Q0(e, o);
      }
    while (1);
    if ((Ud(), (Se = n), (cl.current = r), Xe !== null)) throw Error(q(261));
    return (lt = null), (ft = 0), rt;
  }
  function B2() {
    for (; Xe !== null; ) ey(Xe);
  }
  function z2() {
    for (; Xe !== null && !uS(); ) ey(Xe);
  }
  function ey(e) {
    var t = oy(e.alternate, e, Vt);
    (e.memoizedProps = e.pendingProps),
      t === null ? ty(e) : (Xe = t),
      (wf.current = null);
  }
  function ty(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = A2(n, t)), n !== null)) {
          (n.flags &= 32767), (Xe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (rt = 6), (Xe = null);
          return;
        }
      } else if (((n = N2(n, t, Vt)), n !== null)) {
        Xe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Xe = t;
        return;
      }
      Xe = t = e;
    } while (t !== null);
    rt === 0 && (rt = 5);
  }
  function qr(e, t, n) {
    var r = Ne,
      o = Zt.transition;
    try {
      (Zt.transition = null), (Ne = 1), j2(e, t, n, r);
    } finally {
      (Zt.transition = o), (Ne = r);
    }
    return null;
  }
  function j2(e, t, n, r) {
    do qo();
    while (wr !== null);
    if (Se & 6) throw Error(q(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(q(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (bS(e, i),
      e === lt && ((Xe = lt = null), (ft = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        pl ||
        ((pl = !0),
        iy(xs, function () {
          return qo(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Zt.transition), (Zt.transition = null);
      var a = Ne;
      Ne = 1;
      var s = Se;
      (Se |= 4),
        (wf.current = null),
        M2(e, n),
        H0(n, e),
        i2(Rd),
        (Ps = !!Pd),
        (Rd = Pd = null),
        (e.current = n),
        I2(n),
        cS(),
        (Se = s),
        (Ne = a),
        (Zt.transition = i);
    } else e.current = n;
    if (
      (pl && ((pl = !1), (wr = e), (hl = o)),
      (i = e.pendingLanes),
      i === 0 && (br = null),
      pS(n.stateNode),
      It(e, Ye()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (fl) throw ((fl = !1), (e = kf), (kf = null), e);
    return (
      hl & 1 && e.tag !== 0 && qo(),
      (i = e.pendingLanes),
      i & 1 ? (e === Ef ? ma++ : ((ma = 0), (Ef = e))) : (ma = 0),
      mr(),
      null
    );
  }
  function qo() {
    if (wr !== null) {
      var e = Dm(hl),
        t = Zt.transition,
        n = Ne;
      try {
        if (((Zt.transition = null), (Ne = 16 > e ? 16 : e), wr === null))
          var r = !1;
        else {
          if (((e = wr), (wr = null), (hl = 0), Se & 6)) throw Error(q(331));
          var o = Se;
          for (Se |= 4, ee = e.current; ee !== null; ) {
            var i = ee,
              a = i.child;
            if (ee.flags & 16) {
              var s = i.deletions;
              if (s !== null) {
                for (var l = 0; l < s.length; l++) {
                  var u = s[l];
                  for (ee = u; ee !== null; ) {
                    var d = ee;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fa(8, d, i);
                    }
                    var f = d.child;
                    if (f !== null) (f.return = d), (ee = f);
                    else
                      for (; ee !== null; ) {
                        d = ee;
                        var p = d.sibling,
                          y = d.return;
                        if ((F0(d), d === u)) {
                          ee = null;
                          break;
                        }
                        if (p !== null) {
                          (p.return = y), (ee = p);
                          break;
                        }
                        ee = y;
                      }
                  }
                }
                var m = i.alternate;
                if (m !== null) {
                  var w = m.child;
                  if (w !== null) {
                    m.child = null;
                    do {
                      var P = w.sibling;
                      (w.sibling = null), (w = P);
                    } while (w !== null);
                  }
                }
                ee = i;
              }
            }
            if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (ee = a);
            else
              e: for (; ee !== null; ) {
                if (((i = ee), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fa(9, i, i.return);
                  }
                var b = i.sibling;
                if (b !== null) {
                  (b.return = i.return), (ee = b);
                  break e;
                }
                ee = i.return;
              }
          }
          var g = e.current;
          for (ee = g; ee !== null; ) {
            a = ee;
            var v = a.child;
            if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (ee = v);
            else
              e: for (a = g; ee !== null; ) {
                if (((s = ee), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ul(9, s);
                    }
                  } catch (O) {
                    qe(s, s.return, O);
                  }
                if (s === a) {
                  ee = null;
                  break e;
                }
                var k = s.sibling;
                if (k !== null) {
                  (k.return = s.return), (ee = k);
                  break e;
                }
                ee = s.return;
              }
          }
          if (
            ((Se = o),
            mr(),
            Tn && typeof Tn.onPostCommitFiberRoot == "function")
          )
            try {
              Tn.onPostCommitFiberRoot(Ss, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Ne = n), (Zt.transition = t);
      }
    }
    return !1;
  }
  function ny(e, t, n) {
    (t = Uo(n, t)),
      (t = b0(e, t, 1)),
      (e = yr(e, t, 1)),
      (t = Ct()),
      e !== null && (ji(e, 1, t), It(e, t));
  }
  function qe(e, t, n) {
    if (e.tag === 3) ny(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ny(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (br === null || !br.has(r)))
          ) {
            (e = Uo(n, e)),
              (e = w0(t, e, 1)),
              (t = yr(t, e, 1)),
              (e = Ct()),
              t !== null && (ji(t, 1, e), It(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function F2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ct()),
      (e.pingedLanes |= e.suspendedLanes & n),
      lt === e &&
        (ft & n) === n &&
        (rt === 4 || (rt === 3 && (ft & 130023424) === ft && 500 > Ye() - Sf)
          ? Hr(e, 0)
          : (xf |= n)),
      It(e, t);
  }
  function ry(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
        : (t = 1));
    var n = Ct();
    (e = Gn(e, t)), e !== null && (ji(e, t, n), It(e, n));
  }
  function D2(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), ry(e, n);
  }
  function U2(e, t) {
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
        throw Error(q(314));
    }
    r !== null && r.delete(t), ry(e, n);
  }
  var oy;
  oy = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Nt.current) _t = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (_t = !1), R2(e, t, n);
        _t = !!(e.flags & 131072);
      }
    else (_t = !1), je && t.flags & 1048576 && $g(t, qs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        sl(e, t), (e = t.pendingProps);
        var o = Io(t, gt.current);
        jo(t, n), (o = tf(null, t, r, e, o, n));
        var i = nf();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              At(r) ? ((i = !0), Ws(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              qd(t),
              (o.updater = Qs),
              (t.stateNode = o),
              (o._reactInternals = t),
              Gd(t, r, e, n),
              (t = df(null, t, r, !0, i, n)))
            : ((t.tag = 0), je && i && Ld(t), Et(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (sl(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = V2(r)),
            (e = yn(r, e)),
            o)
          ) {
            case 0:
              t = cf(null, t, r, e, n);
              break e;
            case 1:
              t = R0(null, t, r, e, n);
              break e;
            case 11:
              t = E0(null, t, r, e, n);
              break e;
            case 14:
              t = C0(null, t, r, yn(r.type, e), n);
              break e;
          }
          throw Error(q(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : yn(r, o)),
          cf(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : yn(r, o)),
          R0(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((N0(t), e === null)) throw Error(q(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            Dg(e, t),
            Xs(t, r, null, n);
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
              (o = Uo(Error(q(423)), t)), (t = A0(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = Uo(Error(q(424)), t)), (t = A0(e, t, r, n, o));
              break e;
            } else
              for (
                Wt = fr(t.stateNode.containerInfo.firstChild),
                  Ut = t,
                  je = !0,
                  gn = null,
                  n = Yg(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Bo(), r === o)) {
              t = Yn(e, t, n);
              break e;
            }
            Et(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Xg(t),
          e === null && jd(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = o.children),
          Nd(r, o) ? (a = null) : i !== null && Nd(r, i) && (t.flags |= 32),
          P0(e, t),
          Et(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && jd(t), null;
      case 13:
        return _0(e, t, n);
      case 4:
        return (
          Jd(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Fo(t, null, r, n)) : Et(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : yn(r, o)),
          E0(e, t, r, o, n)
        );
      case 7:
        return Et(e, t, t.pendingProps, n), t.child;
      case 8:
        return Et(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Et(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (a = o.value),
            $e(Gs, r._currentValue),
            (r._currentValue = a),
            i !== null)
          )
            if (mn(i.value, a)) {
              if (i.children === o.children && !Nt.current) {
                t = Yn(e, t, n);
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
                        (l = Jn(-1, n & -n)), (l.tag = 2);
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
                        Vd(i.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(q(341));
                  (a.lanes |= n),
                    (s = a.alternate),
                    s !== null && (s.lanes |= n),
                    Vd(a, n, t),
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
          Et(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          jo(t, n),
          (o = Xt(o)),
          (r = r(o)),
          (t.flags |= 1),
          Et(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = yn(r, t.pendingProps)),
          (o = yn(r.type, o)),
          C0(e, t, r, o, n)
        );
      case 15:
        return O0(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : yn(r, o)),
          sl(e, t),
          (t.tag = 1),
          At(r) ? ((e = !0), Ws(t)) : (e = !1),
          jo(t, n),
          qg(t, r, o),
          Gd(t, r, o, n),
          df(null, t, r, !0, e, n)
        );
      case 19:
        return I0(e, t, n);
      case 22:
        return T0(e, t, n);
    }
    throw Error(q(156, t.tag));
  };
  function iy(e, t) {
    return Lm(e, t);
  }
  function W2(e, t, n, r) {
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
  function en(e, t, n, r) {
    return new W2(e, t, n, r);
  }
  function Nf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function V2(e) {
    if (typeof e == "function") return Nf(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Lc)) return 11;
      if (e === jc) return 14;
    }
    return 2;
  }
  function kr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = en(e.tag, t, e.key, e.mode)),
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
  function vl(e, t, n, r, o, i) {
    var a = 2;
    if (((r = e), typeof e == "function")) Nf(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case xo:
          return Kr(n.children, o, i, t);
        case Ic:
          (a = 8), (o |= 8);
          break;
        case $c:
          return (
            (e = en(12, n, t, o | 2)), (e.elementType = $c), (e.lanes = i), e
          );
        case Bc:
          return (e = en(13, n, t, o)), (e.elementType = Bc), (e.lanes = i), e;
        case zc:
          return (e = en(19, n, t, o)), (e.elementType = zc), (e.lanes = i), e;
        case fm:
          return bl(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case cm:
                a = 10;
                break e;
              case dm:
                a = 9;
                break e;
              case Lc:
                a = 11;
                break e;
              case jc:
                a = 14;
                break e;
              case or:
                (a = 16), (r = null);
                break e;
            }
          throw Error(q(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = en(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function Kr(e, t, n, r) {
    return (e = en(7, e, r, t)), (e.lanes = n), e;
  }
  function bl(e, t, n, r) {
    return (
      (e = en(22, e, r, t)),
      (e.elementType = fm),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Af(e, t, n) {
    return (e = en(6, e, null, t)), (e.lanes = n), e;
  }
  function _f(e, t, n) {
    return (
      (t = en(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function H2(e, t, n, r, o) {
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
      (this.eventTimes = id(0)),
      (this.expirationTimes = id(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = id(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Mf(e, t, n, r, o, i, a, s, l) {
    return (
      (e = new H2(e, t, n, s, l)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = en(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      qd(i),
      e
    );
  }
  function q2(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: wo,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ay(e) {
    if (!e) return hr;
    e = e._reactInternals;
    e: {
      if ($r(e) !== e || e.tag !== 1) throw Error(q(170));
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
      throw Error(q(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (At(n)) return _g(e, n, t);
    }
    return t;
  }
  function sy(e, t, n, r, o, i, a, s, l) {
    return (
      (e = Mf(n, r, !0, e, o, i, a, s, l)),
      (e.context = ay(null)),
      (n = e.current),
      (r = Ct()),
      (o = xr(n)),
      (i = Jn(r, o)),
      (i.callback = t ?? null),
      yr(n, i, o),
      (e.current.lanes = o),
      ji(e, o, r),
      It(e, r),
      e
    );
  }
  function wl(e, t, n, r) {
    var o = t.current,
      i = Ct(),
      a = xr(o);
    return (
      (n = ay(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Jn(i, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = yr(o, t, a)),
      e !== null && (wn(e, o, a, i), Ys(e, o, a)),
      a
    );
  }
  function xl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ly(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function If(e, t) {
    ly(e, t), (e = e.alternate) && ly(e, t);
  }
  function K2() {
    return null;
  }
  var uy =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function $f(e) {
    this._internalRoot = e;
  }
  (Sl.prototype.render = $f.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(q(409));
      wl(e, t, null, null);
    }),
    (Sl.prototype.unmount = $f.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Vr(function () {
            wl(null, e, null, null);
          }),
            (t[Vn] = null);
        }
      });
  function Sl(e) {
    this._internalRoot = e;
  }
  Sl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ur.length && t !== 0 && t < ur[n].priority; n++);
      ur.splice(n, 0, e), n === 0 && Km(e);
    }
  };
  function Lf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function kl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function cy() {}
  function G2(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var u = xl(a);
          i.call(u);
        };
      }
      var a = sy(t, r, e, 0, null, !1, !1, "", cy);
      return (
        (e._reactRootContainer = a),
        (e[Vn] = a.current),
        Zi(e.nodeType === 8 ? e.parentNode : e),
        Vr(),
        a
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = xl(l);
        s.call(u);
      };
    }
    var l = Mf(e, 0, !1, null, null, !1, !1, "", cy);
    return (
      (e._reactRootContainer = l),
      (e[Vn] = l.current),
      Zi(e.nodeType === 8 ? e.parentNode : e),
      Vr(function () {
        wl(t, l, n, r);
      }),
      l
    );
  }
  function El(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof o == "function") {
        var s = o;
        o = function () {
          var l = xl(a);
          s.call(l);
        };
      }
      wl(t, a, e, o);
    } else a = G2(n, t, e, o, r);
    return xl(a);
  }
  (Um = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = zi(t.pendingLanes);
          n !== 0 &&
            (ad(t, n | 1), It(t, Ye()), !(Se & 6) && ((Ho = Ye() + 500), mr()));
        }
        break;
      case 13:
        Vr(function () {
          var r = Gn(e, 1);
          if (r !== null) {
            var o = Ct();
            wn(r, e, 1, o);
          }
        }),
          If(e, 1);
    }
  }),
    (sd = function (e) {
      if (e.tag === 13) {
        var t = Gn(e, 134217728);
        if (t !== null) {
          var n = Ct();
          wn(t, e, 134217728, n);
        }
        If(e, 134217728);
      }
    }),
    (Wm = function (e) {
      if (e.tag === 13) {
        var t = xr(e),
          n = Gn(e, t);
        if (n !== null) {
          var r = Ct();
          wn(n, e, t, r);
        }
        If(e, t);
      }
    }),
    (Vm = function () {
      return Ne;
    }),
    (Hm = function (e, t) {
      var n = Ne;
      try {
        return (Ne = e), t();
      } finally {
        Ne = n;
      }
    }),
    (Zc = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Hc(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var o = Ds(r);
                if (!o) throw Error(q(90));
                mm(r), Hc(r, o);
              }
            }
          }
          break;
        case "textarea":
          wm(e, n);
          break;
        case "select":
          (t = n.value), t != null && So(e, !!n.multiple, t, !1);
      }
    }),
    (Rm = Tf),
    (Nm = Vr);
  var J2 = { usingClientEntryPoint: !1, Events: [na, _o, Ds, Tm, Pm, Tf] },
    ga = {
      findFiberByHostInstance: Lr,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    Y2 = {
      bundleType: ga.bundleType,
      version: ga.version,
      rendererPackageName: ga.rendererPackageName,
      rendererConfig: ga.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Wn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Im(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ga.findFiberByHostInstance || K2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cl.isDisabled && Cl.supportsFiber)
      try {
        (Ss = Cl.inject(Y2)), (Tn = Cl);
      } catch {}
  }
  (jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J2),
    (jt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Lf(t)) throw Error(q(200));
      return q2(e, t, null, n);
    }),
    (jt.createRoot = function (e, t) {
      if (!Lf(e)) throw Error(q(299));
      var n = !1,
        r = "",
        o = uy;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Mf(e, 1, !1, null, null, n, !1, r, o)),
        (e[Vn] = t.current),
        Zi(e.nodeType === 8 ? e.parentNode : e),
        new $f(t)
      );
    }),
    (jt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(q(188))
          : ((e = Object.keys(e).join(",")), Error(q(268, e)));
      return (e = Im(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (jt.flushSync = function (e) {
      return Vr(e);
    }),
    (jt.hydrate = function (e, t, n) {
      if (!kl(t)) throw Error(q(200));
      return El(null, e, t, !0, n);
    }),
    (jt.hydrateRoot = function (e, t, n) {
      if (!Lf(e)) throw Error(q(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        a = uy;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = sy(t, null, e, 1, n ?? null, o, !1, i, a)),
        (e[Vn] = t.current),
        Zi(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new Sl(t);
    }),
    (jt.render = function (e, t, n) {
      if (!kl(t)) throw Error(q(200));
      return El(null, e, t, !1, n);
    }),
    (jt.unmountComponentAtNode = function (e) {
      if (!kl(e)) throw Error(q(40));
      return e._reactRootContainer
        ? (Vr(function () {
            El(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Vn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (jt.unstable_batchedUpdates = Tf),
    (jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!kl(n)) throw Error(q(200));
      if (e == null || e._reactInternals === void 0) throw Error(q(38));
      return El(e, t, n, !1, r);
    }),
    (jt.version = "18.2.0-next-9e3b772b8-20220608"),
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
      t(), (e.exports = jt);
    })(Kx);
  const Ol = qh(vo);
  var dy,
    fy = vo;
  (dy = fy.createRoot), fy.hydrateRoot;
  function ya() {
    return (
      (ya = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      ya.apply(this, arguments)
    );
  }
  var Er;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(Er || (Er = {}));
  const py = "popstate";
  function X2(e) {
    e === void 0 && (e = {});
    function t(r, o) {
      let { pathname: i, search: a, hash: s } = r.location;
      return zf(
        "",
        { pathname: i, search: a, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default",
      );
    }
    function n(r, o) {
      return typeof o == "string" ? o : my(o);
    }
    return Z2(t, n, null, e);
  }
  function ot(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function Bf(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function Q2() {
    return Math.random().toString(36).substr(2, 8);
  }
  function hy(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function zf(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      ya(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? Ko(t) : t,
        { state: n, key: (t && t.key) || r || Q2() },
      )
    );
  }
  function my(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function Ko(e) {
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
  function Z2(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
      a = o.history,
      s = Er.Pop,
      l = null,
      u = d();
    u == null && ((u = 0), a.replaceState(ya({}, a.state, { idx: u }), ""));
    function d() {
      return (a.state || { idx: null }).idx;
    }
    function f() {
      s = Er.Pop;
      let P = d(),
        b = P == null ? null : P - u;
      (u = P), l && l({ action: s, location: w.location, delta: b });
    }
    function p(P, b) {
      s = Er.Push;
      let g = zf(w.location, P, b);
      n && n(g, P), (u = d() + 1);
      let v = hy(g, u),
        k = w.createHref(g);
      try {
        a.pushState(v, "", k);
      } catch (O) {
        if (O instanceof DOMException && O.name === "DataCloneError") throw O;
        o.location.assign(k);
      }
      i && l && l({ action: s, location: w.location, delta: 1 });
    }
    function y(P, b) {
      s = Er.Replace;
      let g = zf(w.location, P, b);
      n && n(g, P), (u = d());
      let v = hy(g, u),
        k = w.createHref(g);
      a.replaceState(v, "", k),
        i && l && l({ action: s, location: w.location, delta: 0 });
    }
    function m(P) {
      let b =
          o.location.origin !== "null" ? o.location.origin : o.location.href,
        g = typeof P == "string" ? P : my(P);
      return (
        ot(
          b,
          "No window.location.(origin|href) available to create URL for href: " +
            g,
        ),
        new URL(g, b)
      );
    }
    let w = {
      get action() {
        return s;
      },
      get location() {
        return e(o, a);
      },
      listen(P) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(py, f),
          (l = P),
          () => {
            o.removeEventListener(py, f), (l = null);
          }
        );
      },
      createHref(P) {
        return t(o, P);
      },
      createURL: m,
      encodeLocation(P) {
        let b = m(P);
        return { pathname: b.pathname, search: b.search, hash: b.hash };
      },
      push: p,
      replace: y,
      go(P) {
        return a.go(P);
      },
    };
    return w;
  }
  var gy;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(gy || (gy = {}));
  function ek(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Ko(t) : t,
      o = wy(r.pathname || "/", n);
    if (o == null) return null;
    let i = yy(e);
    tk(i);
    let a = null;
    for (let s = 0; a == null && s < i.length; ++s) a = ck(i[s], pk(o));
    return a;
  }
  function yy(e, t, n, r) {
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
        (ot(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = Gr([r, l.relativePath]),
        d = n.concat(l);
      i.children &&
        i.children.length > 0 &&
        (ot(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".'),
        ),
        yy(i.children, t, d, u)),
        !(i.path == null && !i.index) &&
          t.push({ path: u, score: lk(u, i.index), routesMeta: d });
    };
    return (
      e.forEach((i, a) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
          o(i, a);
        else for (let l of vy(i.path)) o(i, a, l);
      }),
      t
    );
  }
  function vy(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      o = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let a = vy(r.join("/")),
      s = [];
    return (
      s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
      o && s.push(...a),
      s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function tk(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : uk(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex),
          ),
    );
  }
  const nk = /^:\w+$/,
    rk = 3,
    ok = 2,
    ik = 1,
    ak = 10,
    sk = -2,
    by = (e) => e === "*";
  function lk(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(by) && (r += sk),
      t && (r += ok),
      n
        .filter((o) => !by(o))
        .reduce((o, i) => o + (nk.test(i) ? rk : i === "" ? ik : ak), r)
    );
  }
  function uk(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, r) => n === t[r])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function ck(e, t) {
    let { routesMeta: n } = e,
      r = {},
      o = "/",
      i = [];
    for (let a = 0; a < n.length; ++a) {
      let s = n[a],
        l = a === n.length - 1,
        u = o === "/" ? t : t.slice(o.length) || "/",
        d = dk(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
          u,
        );
      if (!d) return null;
      Object.assign(r, d.params);
      let f = s.route;
      i.push({
        params: r,
        pathname: Gr([o, d.pathname]),
        pathnameBase: bk(Gr([o, d.pathnameBase])),
        route: f,
      }),
        d.pathnameBase !== "/" && (o = Gr([o, d.pathnameBase]));
    }
    return i;
  }
  function dk(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = fk(e.path, e.caseSensitive, e.end),
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
        return (l[u] = hk(s[d] || "", u)), l;
      }, {}),
      pathname: i,
      pathnameBase: a,
      pattern: e,
    };
  }
  function fk(e, t, n) {
    t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      Bf(
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
  function pk(e) {
    try {
      return decodeURI(e);
    } catch (t) {
      return (
        Bf(
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
  function hk(e, t) {
    try {
      return decodeURIComponent(e);
    } catch (n) {
      return (
        Bf(
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
  function wy(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function mk(e, t) {
    t === void 0 && (t = "/");
    let {
      pathname: n,
      search: r = "",
      hash: o = "",
    } = typeof e == "string" ? Ko(e) : e;
    return {
      pathname: n ? (n.startsWith("/") ? n : gk(n, t)) : t,
      search: wk(r),
      hash: xk(o),
    };
  }
  function gk(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((r) => {
        r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
      }),
      n.length > 1 ? n.join("/") : "/"
    );
  }
  function jf(e, t, n, r) {
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
  function yk(e) {
    return e.filter(
      (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
    );
  }
  function vk(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
      ? (o = Ko(e))
      : ((o = ya({}, e)),
        ot(
          !o.pathname || !o.pathname.includes("?"),
          jf("?", "pathname", "search", o),
        ),
        ot(
          !o.pathname || !o.pathname.includes("#"),
          jf("#", "pathname", "hash", o),
        ),
        ot(!o.search || !o.search.includes("#"), jf("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
      a = i ? "/" : o.pathname,
      s;
    if (r || a == null) s = n;
    else {
      let f = t.length - 1;
      if (a.startsWith("..")) {
        let p = a.split("/");
        for (; p[0] === ".."; ) p.shift(), (f -= 1);
        o.pathname = p.join("/");
      }
      s = f >= 0 ? t[f] : "/";
    }
    let l = mk(o, s),
      u = a && a !== "/" && a.endsWith("/"),
      d = (i || a === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
  }
  const Gr = (e) => e.join("/").replace(/\/\/+/g, "/"),
    bk = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    wk = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    xk = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function Sk(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  function Tl() {
    return (
      (Tl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Tl.apply(this, arguments)
    );
  }
  const Ff = x.createContext(null),
    kk = x.createContext(null),
    Pl = x.createContext(null),
    Rl = x.createContext(null),
    Go = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    xy = x.createContext(null);
  function Nl() {
    return x.useContext(Rl) != null;
  }
  function Sy() {
    return Nl() || ot(!1), x.useContext(Rl).location;
  }
  function ky(e) {
    x.useContext(Pl).static || x.useLayoutEffect(e);
  }
  function Al() {
    let { isDataRoute: e } = x.useContext(Go);
    return e ? Lk() : Ek();
  }
  function Ek() {
    Nl() || ot(!1);
    let e = x.useContext(Ff),
      { basename: t, navigator: n } = x.useContext(Pl),
      { matches: r } = x.useContext(Go),
      { pathname: o } = Sy(),
      i = JSON.stringify(yk(r).map((s) => s.pathnameBase)),
      a = x.useRef(!1);
    return (
      ky(() => {
        a.current = !0;
      }),
      x.useCallback(
        function (s, l) {
          if ((l === void 0 && (l = {}), !a.current)) return;
          if (typeof s == "number") {
            n.go(s);
            return;
          }
          let u = vk(s, JSON.parse(i), o, l.relative === "path");
          e == null &&
            t !== "/" &&
            (u.pathname = u.pathname === "/" ? t : Gr([t, u.pathname])),
            (l.replace ? n.replace : n.push)(u, l.state, l);
        },
        [t, n, i, o, e],
      )
    );
  }
  function Ck(e, t) {
    return Ok(e, t);
  }
  function Ok(e, t, n) {
    Nl() || ot(!1);
    let { navigator: r } = x.useContext(Pl),
      { matches: o } = x.useContext(Go),
      i = o[o.length - 1],
      a = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let l = Sy(),
      u;
    if (t) {
      var d;
      let w = typeof t == "string" ? Ko(t) : t;
      s === "/" || ((d = w.pathname) != null && d.startsWith(s)) || ot(!1),
        (u = w);
    } else u = l;
    let f = u.pathname || "/",
      p = s === "/" ? f : f.slice(s.length) || "/",
      y = ek(e, { pathname: p }),
      m = Ak(
        y &&
          y.map((w) =>
            Object.assign({}, w, {
              params: Object.assign({}, a, w.params),
              pathname: Gr([
                s,
                r.encodeLocation
                  ? r.encodeLocation(w.pathname).pathname
                  : w.pathname,
              ]),
              pathnameBase:
                w.pathnameBase === "/"
                  ? s
                  : Gr([
                      s,
                      r.encodeLocation
                        ? r.encodeLocation(w.pathnameBase).pathname
                        : w.pathnameBase,
                    ]),
            }),
          ),
        o,
        n,
      );
    return t && m
      ? x.createElement(
          Rl.Provider,
          {
            value: {
              location: Tl(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                u,
              ),
              navigationType: Er.Pop,
            },
          },
          m,
        )
      : m;
  }
  function Tk() {
    let e = $k(),
      t = Sk(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
      o = null;
    return x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? x.createElement("pre", { style: r }, n) : null,
      o,
    );
  }
  const Pk = x.createElement(Tk, null);
  class Rk extends x.Component {
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
        ? x.createElement(
            Go.Provider,
            { value: this.props.routeContext },
            x.createElement(xy.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  }
  function Nk(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = x.useContext(Ff);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      x.createElement(Go.Provider, { value: t }, r)
    );
  }
  function Ak(e, t, n) {
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
      s >= 0 || ot(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
    }
    return i.reduceRight((s, l, u) => {
      let d = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
        f = null;
      n && (f = l.route.errorElement || Pk);
      let p = t.concat(i.slice(0, u + 1)),
        y = () => {
          let m;
          return (
            d
              ? (m = f)
              : l.route.Component
              ? (m = x.createElement(l.route.Component, null))
              : l.route.element
              ? (m = l.route.element)
              : (m = s),
            x.createElement(Nk, {
              match: l,
              routeContext: { outlet: s, matches: p, isDataRoute: n != null },
              children: m,
            })
          );
        };
      return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
        ? x.createElement(Rk, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: d,
            children: y(),
            routeContext: { outlet: null, matches: p, isDataRoute: !0 },
          })
        : y();
    }, null);
  }
  var Df;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate");
  })(Df || (Df = {}));
  var va;
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
  })(va || (va = {}));
  function _k(e) {
    let t = x.useContext(Ff);
    return t || ot(!1), t;
  }
  function Mk(e) {
    let t = x.useContext(kk);
    return t || ot(!1), t;
  }
  function Ik(e) {
    let t = x.useContext(Go);
    return t || ot(!1), t;
  }
  function Ey(e) {
    let t = Ik(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || ot(!1), n.route.id;
  }
  function $k() {
    var e;
    let t = x.useContext(xy),
      n = Mk(va.UseRouteError),
      r = Ey(va.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
  }
  function Lk() {
    let { router: e } = _k(Df.UseNavigateStable),
      t = Ey(va.UseNavigateStable),
      n = x.useRef(!1);
    return (
      ky(() => {
        n.current = !0;
      }),
      x.useCallback(
        function (r, o) {
          o === void 0 && (o = {}),
            n.current &&
              (typeof r == "number"
                ? e.navigate(r)
                : e.navigate(r, Tl({ fromRouteId: t }, o)));
        },
        [e, t],
      )
    );
  }
  function Uf(e) {
    ot(!1);
  }
  function Bk(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = Er.Pop,
      navigator: i,
      static: a = !1,
    } = e;
    Nl() && ot(!1);
    let s = t.replace(/^\/*/, "/"),
      l = x.useMemo(
        () => ({ basename: s, navigator: i, static: a }),
        [s, i, a],
      );
    typeof r == "string" && (r = Ko(r));
    let {
        pathname: u = "/",
        search: d = "",
        hash: f = "",
        state: p = null,
        key: y = "default",
      } = r,
      m = x.useMemo(() => {
        let w = wy(u, s);
        return w == null
          ? null
          : {
              location: { pathname: w, search: d, hash: f, state: p, key: y },
              navigationType: o,
            };
      }, [s, u, d, f, p, y, o]);
    return m == null
      ? null
      : x.createElement(
          Pl.Provider,
          { value: l },
          x.createElement(Rl.Provider, { children: n, value: m }),
        );
  }
  function zk(e) {
    let { children: t, location: n } = e;
    return Ck(Wf(t), n);
  }
  var Cy;
  (function (e) {
    (e[(e.pending = 0)] = "pending"),
      (e[(e.success = 1)] = "success"),
      (e[(e.error = 2)] = "error");
  })(Cy || (Cy = {})),
    new Promise(() => {});
  function Wf(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
          n.push.apply(n, Wf(r.props.children, i));
          return;
        }
        r.type !== Uf && ot(!1), !r.props.index || !r.props.children || ot(!1);
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
        r.props.children && (a.children = Wf(r.props.children, i)), n.push(a);
      }),
      n
    );
  }
  const jk = "startTransition",
    Oy = hs[jk];
  function Fk(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      i = x.useRef();
    i.current == null && (i.current = X2({ window: o, v5Compat: !0 }));
    let a = i.current,
      [s, l] = x.useState({ action: a.action, location: a.location }),
      { v7_startTransition: u } = r || {},
      d = x.useCallback(
        (f) => {
          u && Oy ? Oy(() => l(f)) : l(f);
        },
        [l, u],
      );
    return (
      x.useLayoutEffect(() => a.listen(d), [a, d]),
      x.createElement(Bk, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: a,
      })
    );
  }
  var Ty;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher");
  })(Ty || (Ty = {}));
  var Py;
  (function (e) {
    (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(Py || (Py = {}));
  const Dk = { black: "#000", white: "#fff" },
    ba = Dk,
    Uk = {
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
    Jr = Uk,
    Wk = {
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
    Yr = Wk,
    Vk = {
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
    Xr = Vk,
    Hk = {
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
    Jo = Hk,
    qk = {
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
    Qr = qk,
    Kk = {
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
    Yo = Kk,
    Gk = {
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
    Jk = Gk;
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
  function Zr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object;
  }
  function Ry(e) {
    if (!Zr(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = Ry(e[n]);
      }),
      t
    );
  }
  function tn(e, t, n = { clone: !0 }) {
    const r = n.clone ? E({}, e) : e;
    return (
      Zr(e) &&
        Zr(t) &&
        Object.keys(t).forEach((o) => {
          o !== "__proto__" &&
            (Zr(t[o]) && o in e && Zr(e[o])
              ? (r[o] = tn(e[o], t[o], n))
              : n.clone
              ? (r[o] = Zr(t[o]) ? Ry(t[o]) : t[o])
              : (r[o] = t[o]));
        }),
      r
    );
  }
  var Vf = {},
    Yk = {
      get exports() {
        return Vf;
      },
      set exports(e) {
        Vf = e;
      },
    },
    Xk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Qk = Xk,
    Zk = Qk;
  function Ny() {}
  function Ay() {}
  Ay.resetWarningCache = Ny;
  var eE = function () {
    function e(r, o, i, a, s, l) {
      if (l !== Zk) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((u.name = "Invariant Violation"), u);
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Ay,
      resetWarningCache: Ny,
    };
    return (n.PropTypes = n), n;
  };
  Yk.exports = eE();
  function Cr(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
  }
  var _y = {},
    tE = {
      get exports() {
        return _y;
      },
      set exports(e) {
        _y = e;
      },
    },
    Ae = {},
    Hf = Symbol.for("react.element"),
    qf = Symbol.for("react.portal"),
    _l = Symbol.for("react.fragment"),
    Ml = Symbol.for("react.strict_mode"),
    Il = Symbol.for("react.profiler"),
    $l = Symbol.for("react.provider"),
    Ll = Symbol.for("react.context"),
    nE = Symbol.for("react.server_context"),
    Bl = Symbol.for("react.forward_ref"),
    zl = Symbol.for("react.suspense"),
    jl = Symbol.for("react.suspense_list"),
    Fl = Symbol.for("react.memo"),
    Dl = Symbol.for("react.lazy"),
    rE = Symbol.for("react.offscreen"),
    My;
  My = Symbol.for("react.module.reference");
  function nn(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Hf:
          switch (((e = e.type), e)) {
            case _l:
            case Il:
            case Ml:
            case zl:
            case jl:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case nE:
                case Ll:
                case Bl:
                case Dl:
                case Fl:
                case $l:
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
  (Ae.ContextConsumer = Ll),
    (Ae.ContextProvider = $l),
    (Ae.Element = Hf),
    (Ae.ForwardRef = Bl),
    (Ae.Fragment = _l),
    (Ae.Lazy = Dl),
    (Ae.Memo = Fl),
    (Ae.Portal = qf),
    (Ae.Profiler = Il),
    (Ae.StrictMode = Ml),
    (Ae.Suspense = zl),
    (Ae.SuspenseList = jl),
    (Ae.isAsyncMode = function () {
      return !1;
    }),
    (Ae.isConcurrentMode = function () {
      return !1;
    }),
    (Ae.isContextConsumer = function (e) {
      return nn(e) === Ll;
    }),
    (Ae.isContextProvider = function (e) {
      return nn(e) === $l;
    }),
    (Ae.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === Hf;
    }),
    (Ae.isForwardRef = function (e) {
      return nn(e) === Bl;
    }),
    (Ae.isFragment = function (e) {
      return nn(e) === _l;
    }),
    (Ae.isLazy = function (e) {
      return nn(e) === Dl;
    }),
    (Ae.isMemo = function (e) {
      return nn(e) === Fl;
    }),
    (Ae.isPortal = function (e) {
      return nn(e) === qf;
    }),
    (Ae.isProfiler = function (e) {
      return nn(e) === Il;
    }),
    (Ae.isStrictMode = function (e) {
      return nn(e) === Ml;
    }),
    (Ae.isSuspense = function (e) {
      return nn(e) === zl;
    }),
    (Ae.isSuspenseList = function (e) {
      return nn(e) === jl;
    }),
    (Ae.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === _l ||
        e === Il ||
        e === Ml ||
        e === zl ||
        e === jl ||
        e === rE ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Dl ||
            e.$$typeof === Fl ||
            e.$$typeof === $l ||
            e.$$typeof === Ll ||
            e.$$typeof === Bl ||
            e.$$typeof === My ||
            e.getModuleId !== void 0))
      );
    }),
    (Ae.typeOf = nn),
    (function (e) {
      e.exports = Ae;
    })(tE);
  function Y(e) {
    if (typeof e != "string") throw new Error(Cr(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function Kf(...e) {
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
  function Gf(e, t = 166) {
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
  function oE(e, t) {
    return () => null;
  }
  function wa(e, t) {
    return x.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
  }
  function wt(e) {
    return (e && e.ownerDocument) || document;
  }
  function Or(e) {
    return wt(e).defaultView || window;
  }
  function iE(e, t) {
    return () => null;
  }
  function Ul(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  const aE = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
    xn = aE;
  let Iy = 0;
  function sE(e) {
    const [t, n] = x.useState(e),
      r = e || t;
    return (
      x.useEffect(() => {
        t == null && ((Iy += 1), n(`mui-${Iy}`));
      }, [t]),
      r
    );
  }
  const $y = hs.useId;
  function xa(e) {
    if ($y !== void 0) {
      const t = $y();
      return e ?? t;
    }
    return sE(e);
  }
  function lE(e, t, n, r, o) {
    return null;
  }
  function Sa({ controlled: e, default: t, name: n, state: r = "value" }) {
    const { current: o } = x.useRef(e !== void 0),
      [i, a] = x.useState(t),
      s = o ? e : i,
      l = x.useCallback((u) => {
        o || a(u);
      }, []);
    return [s, l];
  }
  function Tr(e) {
    const t = x.useRef(e);
    return (
      xn(() => {
        t.current = e;
      }),
      x.useCallback((...n) => (0, t.current)(...n), [])
    );
  }
  function Qe(...e) {
    return x.useMemo(
      () =>
        e.every((t) => t == null)
          ? null
          : (t) => {
              e.forEach((n) => {
                Ul(n, t);
              });
            },
      e,
    );
  }
  let Wl = !0,
    Jf = !1,
    Ly;
  const uE = {
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
  function cE(e) {
    const { type: t, tagName: n } = e;
    return !!(
      (n === "INPUT" && uE[t] && !e.readOnly) ||
      (n === "TEXTAREA" && !e.readOnly) ||
      e.isContentEditable
    );
  }
  function dE(e) {
    e.metaKey || e.altKey || e.ctrlKey || (Wl = !0);
  }
  function Yf() {
    Wl = !1;
  }
  function fE() {
    this.visibilityState === "hidden" && Jf && (Wl = !0);
  }
  function pE(e) {
    e.addEventListener("keydown", dE, !0),
      e.addEventListener("mousedown", Yf, !0),
      e.addEventListener("pointerdown", Yf, !0),
      e.addEventListener("touchstart", Yf, !0),
      e.addEventListener("visibilitychange", fE, !0);
  }
  function hE(e) {
    const { target: t } = e;
    try {
      return t.matches(":focus-visible");
    } catch {}
    return Wl || cE(t);
  }
  function Xf() {
    const e = x.useCallback((o) => {
        o != null && pE(o.ownerDocument);
      }, []),
      t = x.useRef(!1);
    function n() {
      return t.current
        ? ((Jf = !0),
          window.clearTimeout(Ly),
          (Ly = window.setTimeout(() => {
            Jf = !1;
          }, 100)),
          (t.current = !1),
          !0)
        : !1;
    }
    function r(o) {
      return hE(o) ? ((t.current = !0), !0) : !1;
    }
    return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
  }
  function By(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  const mE = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px",
    },
    gE = mE;
  function Qf(e, t) {
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
                  n[r][a] = Qf(o[a], i[a]);
                }));
        } else n[r] === void 0 && (n[r] = e[r]);
      }),
      n
    );
  }
  function se(e, t, n) {
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
  const zy = (e) => e,
    yE = () => {
      let e = zy;
      return {
        configure(t) {
          e = t;
        },
        generate(t) {
          return e(t);
        },
        reset() {
          e = zy;
        },
      };
    },
    vE = yE(),
    Zf = vE,
    bE = {
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
    const r = bE[t];
    return r ? `${n}-${r}` : `${Zf.generate(e)}-${t}`;
  }
  function oe(e, t, n = "Mui") {
    const r = {};
    return (
      t.forEach((o) => {
        r[o] = ae(e, o, n);
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
  function jy(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var wE =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    xE = jy(function (e) {
      return (
        wE.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    });
  function SE(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function kE(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var EE = (function () {
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
            this._insertTag(kE(this));
          var r = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var o = SE(r);
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
    Vl = "-moz-",
    Ee = "-webkit-",
    Fy = "comm",
    ep = "rule",
    tp = "decl",
    CE = "@import",
    Dy = "@keyframes",
    OE = Math.abs,
    Hl = String.fromCharCode,
    TE = Object.assign;
  function PE(e, t) {
    return pt(e, 0) ^ 45
      ? (((((((t << 2) ^ pt(e, 0)) << 2) ^ pt(e, 1)) << 2) ^ pt(e, 2)) << 2) ^
          pt(e, 3)
      : 0;
  }
  function Uy(e) {
    return e.trim();
  }
  function RE(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function Te(e, t, n) {
    return e.replace(t, n);
  }
  function np(e, t) {
    return e.indexOf(t);
  }
  function pt(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function ka(e, t, n) {
    return e.slice(t, n);
  }
  function _n(e) {
    return e.length;
  }
  function rp(e) {
    return e.length;
  }
  function ql(e, t) {
    return t.push(e), e;
  }
  function NE(e, t) {
    return e.map(t).join("");
  }
  var Kl = 1,
    Xo = 1,
    Wy = 0,
    $t = 0,
    Ze = 0,
    Qo = "";
  function Gl(e, t, n, r, o, i, a) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: Kl,
      column: Xo,
      length: a,
      return: "",
    };
  }
  function Ea(e, t) {
    return TE(
      Gl("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t,
    );
  }
  function AE() {
    return Ze;
  }
  function _E() {
    return (
      (Ze = $t > 0 ? pt(Qo, --$t) : 0), Xo--, Ze === 10 && ((Xo = 1), Kl--), Ze
    );
  }
  function Ht() {
    return (
      (Ze = $t < Wy ? pt(Qo, $t++) : 0), Xo++, Ze === 10 && ((Xo = 1), Kl++), Ze
    );
  }
  function Mn() {
    return pt(Qo, $t);
  }
  function Jl() {
    return $t;
  }
  function Ca(e, t) {
    return ka(Qo, e, t);
  }
  function Oa(e) {
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
  function Vy(e) {
    return (Kl = Xo = 1), (Wy = _n((Qo = e))), ($t = 0), [];
  }
  function Hy(e) {
    return (Qo = ""), e;
  }
  function Yl(e) {
    return Uy(Ca($t - 1, op(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function ME(e) {
    for (; (Ze = Mn()) && Ze < 33; ) Ht();
    return Oa(e) > 2 || Oa(Ze) > 3 ? "" : " ";
  }
  function IE(e, t) {
    for (
      ;
      --t &&
      Ht() &&
      !(Ze < 48 || Ze > 102 || (Ze > 57 && Ze < 65) || (Ze > 70 && Ze < 97));

    );
    return Ca(e, Jl() + (t < 6 && Mn() == 32 && Ht() == 32));
  }
  function op(e) {
    for (; Ht(); )
      switch (Ze) {
        case e:
          return $t;
        case 34:
        case 39:
          e !== 34 && e !== 39 && op(Ze);
          break;
        case 40:
          e === 41 && op(e);
          break;
        case 92:
          Ht();
          break;
      }
    return $t;
  }
  function $E(e, t) {
    for (
      ;
      Ht() && e + Ze !== 47 + 10 && !(e + Ze === 42 + 42 && Mn() === 47);

    );
    return "/*" + Ca(t, $t - 1) + "*" + Hl(e === 47 ? e : Ht());
  }
  function LE(e) {
    for (; !Oa(Mn()); ) Ht();
    return Ca(e, $t);
  }
  function BE(e) {
    return Hy(Xl("", null, null, null, [""], (e = Vy(e)), 0, [0], e));
  }
  function Xl(e, t, n, r, o, i, a, s, l) {
    for (
      var u = 0,
        d = 0,
        f = a,
        p = 0,
        y = 0,
        m = 0,
        w = 1,
        P = 1,
        b = 1,
        g = 0,
        v = "",
        k = o,
        O = i,
        R = r,
        T = v;
      P;

    )
      switch (((m = g), (g = Ht()))) {
        case 40:
          if (m != 108 && pt(T, f - 1) == 58) {
            np((T += Te(Yl(g), "&", "&\f")), "&\f") != -1 && (b = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          T += Yl(g);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          T += ME(m);
          break;
        case 92:
          T += IE(Jl() - 1, 7);
          continue;
        case 47:
          switch (Mn()) {
            case 42:
            case 47:
              ql(zE($E(Ht(), Jl()), t, n), l);
              break;
            default:
              T += "/";
          }
          break;
        case 123 * w:
          s[u++] = _n(T) * b;
        case 125 * w:
        case 59:
        case 0:
          switch (g) {
            case 0:
            case 125:
              P = 0;
            case 59 + d:
              y > 0 &&
                _n(T) - f &&
                ql(
                  y > 32
                    ? Ky(T + ";", r, n, f - 1)
                    : Ky(Te(T, " ", "") + ";", r, n, f - 2),
                  l,
                );
              break;
            case 59:
              T += ";";
            default:
              if (
                (ql((R = qy(T, t, n, u, d, o, s, v, (k = []), (O = []), f)), i),
                g === 123)
              )
                if (d === 0) Xl(T, t, R, R, k, i, f, s, O);
                else
                  switch (p === 99 && pt(T, 3) === 110 ? 100 : p) {
                    case 100:
                    case 109:
                    case 115:
                      Xl(
                        e,
                        R,
                        R,
                        r && ql(qy(e, R, R, 0, 0, o, s, v, o, (k = []), f), O),
                        o,
                        O,
                        f,
                        s,
                        r ? k : O,
                      );
                      break;
                    default:
                      Xl(T, R, R, R, [""], O, 0, s, O);
                  }
          }
          (u = d = y = 0), (w = b = 1), (v = T = ""), (f = a);
          break;
        case 58:
          (f = 1 + _n(T)), (y = m);
        default:
          if (w < 1) {
            if (g == 123) --w;
            else if (g == 125 && w++ == 0 && _E() == 125) continue;
          }
          switch (((T += Hl(g)), g * w)) {
            case 38:
              b = d > 0 ? 1 : ((T += "\f"), -1);
              break;
            case 44:
              (s[u++] = (_n(T) - 1) * b), (b = 1);
              break;
            case 64:
              Mn() === 45 && (T += Yl(Ht())),
                (p = Mn()),
                (d = f = _n((v = T += LE(Jl())))),
                g++;
              break;
            case 45:
              m === 45 && _n(T) == 2 && (w = 0);
          }
      }
    return i;
  }
  function qy(e, t, n, r, o, i, a, s, l, u, d) {
    for (
      var f = o - 1, p = o === 0 ? i : [""], y = rp(p), m = 0, w = 0, P = 0;
      m < r;
      ++m
    )
      for (var b = 0, g = ka(e, f + 1, (f = OE((w = a[m])))), v = e; b < y; ++b)
        (v = Uy(w > 0 ? p[b] + " " + g : Te(g, /&\f/g, p[b]))) && (l[P++] = v);
    return Gl(e, t, n, o === 0 ? ep : s, l, u, d);
  }
  function zE(e, t, n) {
    return Gl(e, t, n, Fy, Hl(AE()), ka(e, 2, -2), 0);
  }
  function Ky(e, t, n, r) {
    return Gl(e, t, n, tp, ka(e, 0, r), ka(e, r + 1, -1), r);
  }
  function Zo(e, t) {
    for (var n = "", r = rp(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function jE(e, t, n, r) {
    switch (e.type) {
      case CE:
      case tp:
        return (e.return = e.return || e.value);
      case Fy:
        return "";
      case Dy:
        return (e.return = e.value + "{" + Zo(e.children, r) + "}");
      case ep:
        e.value = e.props.join(",");
    }
    return _n((n = Zo(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function FE(e) {
    var t = rp(e);
    return function (n, r, o, i) {
      for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
      return a;
    };
  }
  function DE(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  var UE = function (e, t, n) {
      for (
        var r = 0, o = 0;
        (r = o), (o = Mn()), r === 38 && o === 12 && (t[n] = 1), !Oa(o);

      )
        Ht();
      return Ca(e, $t);
    },
    WE = function (e, t) {
      var n = -1,
        r = 44;
      do
        switch (Oa(r)) {
          case 0:
            r === 38 && Mn() === 12 && (t[n] = 1), (e[n] += UE($t - 1, t, n));
            break;
          case 2:
            e[n] += Yl(r);
            break;
          case 4:
            if (r === 44) {
              (e[++n] = Mn() === 58 ? "&\f" : ""), (t[n] = e[n].length);
              break;
            }
          default:
            e[n] += Hl(r);
        }
      while ((r = Ht()));
      return e;
    },
    VE = function (e, t) {
      return Hy(WE(Vy(e), t));
    },
    Gy = new WeakMap(),
    HE = function (e) {
      if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          n.type !== "rule";

        )
          if (((n = n.parent), !n)) return;
        if (
          !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Gy.get(n)) &&
          !r
        ) {
          Gy.set(e, !0);
          for (
            var o = [], i = VE(t, o), a = n.props, s = 0, l = 0;
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
    qE = function (e) {
      if (e.type === "decl") {
        var t = e.value;
        t.charCodeAt(0) === 108 &&
          t.charCodeAt(2) === 98 &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function Jy(e, t) {
    switch (PE(e, t)) {
      case 5103:
        return Ee + "print-" + e + e;
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
        return Ee + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Ee + e + Vl + e + xt + e + e;
      case 6828:
      case 4268:
        return Ee + e + xt + e + e;
      case 6165:
        return Ee + e + xt + "flex-" + e + e;
      case 5187:
        return (
          Ee +
          e +
          Te(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + xt + "flex-$1$2") +
          e
        );
      case 5443:
        return Ee + e + xt + "flex-item-" + Te(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          Ee +
          e +
          xt +
          "flex-line-pack" +
          Te(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return Ee + e + xt + Te(e, "shrink", "negative") + e;
      case 5292:
        return Ee + e + xt + Te(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Ee +
          "box-" +
          Te(e, "-grow", "") +
          Ee +
          e +
          xt +
          Te(e, "grow", "positive") +
          e
        );
      case 4554:
        return Ee + Te(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
      case 6187:
        return (
          Te(
            Te(Te(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"),
            e,
            "",
          ) + e
        );
      case 5495:
      case 3959:
        return Te(e, /(image-set\([^]*)/, Ee + "$1$`$1");
      case 4968:
        return (
          Te(
            Te(
              e,
              /(.+:)(flex-)?(.*)/,
              Ee + "box-pack:$3" + xt + "flex-pack:$3",
            ),
            /s.+-b[^;]+/,
            "justify",
          ) +
          Ee +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return Te(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
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
        if (_n(e) - 1 - t > 6)
          switch (pt(e, t + 1)) {
            case 109:
              if (pt(e, t + 4) !== 45) break;
            case 102:
              return (
                Te(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Ee +
                    "$2-$3$1" +
                    Vl +
                    (pt(e, t + 3) == 108 ? "$3" : "$2-$3"),
                ) + e
              );
            case 115:
              return ~np(e, "stretch")
                ? Jy(Te(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (pt(e, t + 1) !== 115) break;
      case 6444:
        switch (pt(e, _n(e) - 3 - (~np(e, "!important") && 10))) {
          case 107:
            return Te(e, ":", ":" + Ee) + e;
          case 101:
            return (
              Te(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  Ee +
                  (pt(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  Ee +
                  "$2$3$1" +
                  xt +
                  "$2box$3",
              ) + e
            );
        }
        break;
      case 5936:
        switch (pt(e, t + 11)) {
          case 114:
            return Ee + e + xt + Te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Ee + e + xt + Te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Ee + e + xt + Te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return Ee + e + xt + e + e;
    }
    return e;
  }
  var KE = function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case tp:
            e.return = Jy(e.value, e.length);
            break;
          case Dy:
            return Zo([Ea(e, { value: Te(e.value, "@", "@" + Ee) })], r);
          case ep:
            if (e.length)
              return NE(e.props, function (o) {
                switch (RE(o, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return Zo(
                      [
                        Ea(e, {
                          props: [Te(o, /:(read-\w+)/, ":" + Vl + "$1")],
                        }),
                      ],
                      r,
                    );
                  case "::placeholder":
                    return Zo(
                      [
                        Ea(e, {
                          props: [Te(o, /:(plac\w+)/, ":" + Ee + "input-$1")],
                        }),
                        Ea(e, {
                          props: [Te(o, /:(plac\w+)/, ":" + Vl + "$1")],
                        }),
                        Ea(e, {
                          props: [Te(o, /:(plac\w+)/, xt + "input-$1")],
                        }),
                      ],
                      r,
                    );
                }
                return "";
              });
        }
    },
    GE = [KE],
    Yy = function (e) {
      var t = e.key;
      if (t === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (m) {
          var w = m.getAttribute("data-emotion");
          w.indexOf(" ") !== -1 &&
            (document.head.appendChild(m), m.setAttribute("data-s", ""));
        });
      }
      var r = e.stylisPlugins || GE,
        o = {},
        i,
        a = [];
      (i = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (m) {
            for (
              var w = m.getAttribute("data-emotion").split(" "), P = 1;
              P < w.length;
              P++
            )
              o[w[P]] = !0;
            a.push(m);
          },
        );
      var s,
        l = [HE, qE];
      {
        var u,
          d = [
            jE,
            DE(function (m) {
              u.insert(m);
            }),
          ],
          f = FE(l.concat(r, d)),
          p = function (m) {
            return Zo(BE(m), f);
          };
        s = function (m, w, P, b) {
          (u = P),
            p(m ? m + "{" + w.styles + "}" : w.styles),
            b && (y.inserted[w.name] = !0);
        };
      }
      var y = {
        key: t,
        sheet: new EE({
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
      return y.sheet.hydrate(a), y;
    },
    ip = {},
    JE = {
      get exports() {
        return ip;
      },
      set exports(e) {
        ip = e;
      },
    },
    _e = {},
    ut = typeof Symbol == "function" && Symbol.for,
    ap = ut ? Symbol.for("react.element") : 60103,
    sp = ut ? Symbol.for("react.portal") : 60106,
    Ql = ut ? Symbol.for("react.fragment") : 60107,
    Zl = ut ? Symbol.for("react.strict_mode") : 60108,
    eu = ut ? Symbol.for("react.profiler") : 60114,
    tu = ut ? Symbol.for("react.provider") : 60109,
    nu = ut ? Symbol.for("react.context") : 60110,
    lp = ut ? Symbol.for("react.async_mode") : 60111,
    ru = ut ? Symbol.for("react.concurrent_mode") : 60111,
    ou = ut ? Symbol.for("react.forward_ref") : 60112,
    iu = ut ? Symbol.for("react.suspense") : 60113,
    YE = ut ? Symbol.for("react.suspense_list") : 60120,
    au = ut ? Symbol.for("react.memo") : 60115,
    su = ut ? Symbol.for("react.lazy") : 60116,
    XE = ut ? Symbol.for("react.block") : 60121,
    QE = ut ? Symbol.for("react.fundamental") : 60117,
    ZE = ut ? Symbol.for("react.responder") : 60118,
    e5 = ut ? Symbol.for("react.scope") : 60119;
  function qt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ap:
          switch (((e = e.type), e)) {
            case lp:
            case ru:
            case Ql:
            case eu:
            case Zl:
            case iu:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case nu:
                case ou:
                case su:
                case au:
                case tu:
                  return e;
                default:
                  return t;
              }
          }
        case sp:
          return t;
      }
    }
  }
  function Xy(e) {
    return qt(e) === ru;
  }
  (_e.AsyncMode = lp),
    (_e.ConcurrentMode = ru),
    (_e.ContextConsumer = nu),
    (_e.ContextProvider = tu),
    (_e.Element = ap),
    (_e.ForwardRef = ou),
    (_e.Fragment = Ql),
    (_e.Lazy = su),
    (_e.Memo = au),
    (_e.Portal = sp),
    (_e.Profiler = eu),
    (_e.StrictMode = Zl),
    (_e.Suspense = iu),
    (_e.isAsyncMode = function (e) {
      return Xy(e) || qt(e) === lp;
    }),
    (_e.isConcurrentMode = Xy),
    (_e.isContextConsumer = function (e) {
      return qt(e) === nu;
    }),
    (_e.isContextProvider = function (e) {
      return qt(e) === tu;
    }),
    (_e.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === ap;
    }),
    (_e.isForwardRef = function (e) {
      return qt(e) === ou;
    }),
    (_e.isFragment = function (e) {
      return qt(e) === Ql;
    }),
    (_e.isLazy = function (e) {
      return qt(e) === su;
    }),
    (_e.isMemo = function (e) {
      return qt(e) === au;
    }),
    (_e.isPortal = function (e) {
      return qt(e) === sp;
    }),
    (_e.isProfiler = function (e) {
      return qt(e) === eu;
    }),
    (_e.isStrictMode = function (e) {
      return qt(e) === Zl;
    }),
    (_e.isSuspense = function (e) {
      return qt(e) === iu;
    }),
    (_e.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Ql ||
        e === ru ||
        e === eu ||
        e === Zl ||
        e === iu ||
        e === YE ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === su ||
            e.$$typeof === au ||
            e.$$typeof === tu ||
            e.$$typeof === nu ||
            e.$$typeof === ou ||
            e.$$typeof === QE ||
            e.$$typeof === ZE ||
            e.$$typeof === e5 ||
            e.$$typeof === XE))
      );
    }),
    (_e.typeOf = qt),
    (function (e) {
      e.exports = _e;
    })(JE);
  var Qy = ip,
    t5 = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    n5 = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Zy = {};
  (Zy[Qy.ForwardRef] = t5), (Zy[Qy.Memo] = n5);
  var r5 = !0;
  function ev(e, t, n) {
    var r = "";
    return (
      n.split(" ").forEach(function (o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
      }),
      r
    );
  }
  var tv = function (e, t, n) {
      var r = e.key + "-" + t.name;
      (n === !1 || r5 === !1) &&
        e.registered[r] === void 0 &&
        (e.registered[r] = t.styles);
    },
    up = function (e, t, n) {
      tv(e, t, n);
      var r = e.key + "-" + t.name;
      if (e.inserted[t.name] === void 0) {
        var o = t;
        do e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
        while (o !== void 0);
      }
    };
  function o5(e) {
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
  var i5 = {
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
    a5 = /[A-Z]|^ms/g,
    s5 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    nv = function (e) {
      return e.charCodeAt(1) === 45;
    },
    rv = function (e) {
      return e != null && typeof e != "boolean";
    },
    cp = jy(function (e) {
      return nv(e) ? e : e.replace(a5, "-$&").toLowerCase();
    }),
    ov = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if (typeof t == "string")
            return t.replace(s5, function (n, r, o) {
              return (In = { name: r, styles: o, next: In }), r;
            });
      }
      return i5[e] !== 1 && !nv(e) && typeof t == "number" && t !== 0
        ? t + "px"
        : t;
    };
  function Ta(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        if (n.anim === 1)
          return (In = { name: n.name, styles: n.styles, next: In }), n.name;
        if (n.styles !== void 0) {
          var r = n.next;
          if (r !== void 0)
            for (; r !== void 0; )
              (In = { name: r.name, styles: r.styles, next: In }), (r = r.next);
          var o = n.styles + ";";
          return o;
        }
        return l5(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var i = In,
            a = n(e);
          return (In = i), Ta(e, t, a);
        }
        break;
      }
    }
    if (t == null) return n;
    var s = t[n];
    return s !== void 0 ? s : n;
  }
  function l5(e, t, n) {
    var r = "";
    if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) r += Ta(e, t, n[o]) + ";";
    else
      for (var i in n) {
        var a = n[i];
        if (typeof a != "object")
          t != null && t[a] !== void 0
            ? (r += i + "{" + t[a] + "}")
            : rv(a) && (r += cp(i) + ":" + ov(i, a) + ";");
        else if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var s = 0; s < a.length; s++)
            rv(a[s]) && (r += cp(i) + ":" + ov(i, a[s]) + ";");
        else {
          var l = Ta(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += cp(i) + ":" + l + ";";
              break;
            }
            default:
              r += i + "{" + l + "}";
          }
        }
      }
    return r;
  }
  var iv = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    In,
    lu = function (e, t, n) {
      if (
        e.length === 1 &&
        typeof e[0] == "object" &&
        e[0] !== null &&
        e[0].styles !== void 0
      )
        return e[0];
      var r = !0,
        o = "";
      In = void 0;
      var i = e[0];
      i == null || i.raw === void 0
        ? ((r = !1), (o += Ta(n, t, i)))
        : (o += i[0]);
      for (var a = 1; a < e.length; a++)
        (o += Ta(n, t, e[a])), r && (o += i[a]);
      iv.lastIndex = 0;
      for (var s = "", l; (l = iv.exec(o)) !== null; ) s += "-" + l[1];
      var u = o5(o) + s;
      return { name: u, styles: o, next: In };
    },
    u5 = function (e) {
      return e();
    },
    av = hs.useInsertionEffect ? hs.useInsertionEffect : !1,
    c5 = av || u5,
    sv = av || x.useLayoutEffect,
    dp = x.createContext(typeof HTMLElement < "u" ? Yy({ key: "css" }) : null),
    d5 = dp.Provider,
    f5 = function () {
      return x.useContext(dp);
    },
    lv = function (e) {
      return x.forwardRef(function (t, n) {
        var r = x.useContext(dp);
        return e(t, r, n);
      });
    },
    fp = x.createContext({}),
    p5 = lv(function (e, t) {
      var n = e.styles,
        r = lu([n], void 0, x.useContext(fp)),
        o = x.useRef();
      return (
        sv(
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
        sv(
          function () {
            var i = o.current,
              a = i[0],
              s = i[1];
            if (s) {
              i[1] = !1;
              return;
            }
            if ((r.next !== void 0 && up(t, r.next, !0), a.tags.length)) {
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
  function uu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return lu(t);
  }
  var ei = function () {
      var e = uu.apply(void 0, arguments),
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
    h5 = xE,
    m5 = function (e) {
      return e !== "theme";
    },
    uv = function (e) {
      return typeof e == "string" && e.charCodeAt(0) > 96 ? h5 : m5;
    },
    cv = function (e, t, n) {
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
    g5 = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        tv(t, n, r),
        c5(function () {
          return up(t, n, r);
        }),
        null
      );
    },
    y5 = function e(t, n) {
      var r = t.__emotion_real === t,
        o = (r && t.__emotion_base) || t,
        i,
        a;
      n !== void 0 && ((i = n.label), (a = n.target));
      var s = cv(t, n, r),
        l = s || uv(o),
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
          for (var p = d.length, y = 1; y < p; y++) f.push(d[y], d[0][y]);
        }
        var m = lv(function (w, P, b) {
          var g = (u && w.as) || o,
            v = "",
            k = [],
            O = w;
          if (w.theme == null) {
            O = {};
            for (var R in w) O[R] = w[R];
            O.theme = x.useContext(fp);
          }
          typeof w.className == "string"
            ? (v = ev(P.registered, k, w.className))
            : w.className != null && (v = w.className + " ");
          var T = lu(f.concat(k), P.registered, O);
          (v += P.key + "-" + T.name), a !== void 0 && (v += " " + a);
          var A = u && s === void 0 ? uv(g) : l,
            _ = {};
          for (var M in w) (u && M === "as") || (A(M) && (_[M] = w[M]));
          return (
            (_.className = v),
            (_.ref = b),
            x.createElement(
              x.Fragment,
              null,
              x.createElement(g5, {
                cache: P,
                serialized: T,
                isStringTag: typeof g == "string",
              }),
              x.createElement(g, _),
            )
          );
        });
        return (
          (m.displayName =
            i !== void 0
              ? i
              : "Styled(" +
                (typeof o == "string"
                  ? o
                  : o.displayName || o.name || "Component") +
                ")"),
          (m.defaultProps = t.defaultProps),
          (m.__emotion_real = m),
          (m.__emotion_base = o),
          (m.__emotion_styles = f),
          (m.__emotion_forwardProp = s),
          Object.defineProperty(m, "toString", {
            value: function () {
              return "." + a;
            },
          }),
          (m.withComponent = function (w, P) {
            return e(w, E({}, n, P, { shouldForwardProp: cv(m, P, !0) })).apply(
              void 0,
              f,
            );
          }),
          m
        );
      };
    };
  const v5 = y5;
  var b5 = [
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
    pp = v5.bind();
  b5.forEach(function (e) {
    pp[e] = pp(e);
  });
  const w5 = pp;
  let hp;
  typeof document == "object" && (hp = Yy({ key: "css", prepend: !0 }));
  function x5(e) {
    const { injectFirst: t, children: n } = e;
    return t && hp ? C(d5, { value: hp, children: n }) : n;
  }
  function S5(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function k5(e) {
    const { styles: t, defaultTheme: n = {} } = e;
    return C(p5, {
      styles: typeof t == "function" ? (r) => t(S5(r) ? n : r) : t,
    });
  }
  function dv(e, t) {
    return w5(e, t);
  }
  const E5 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  };
  function Pa(e, t) {
    return t ? tn(e, t, { clone: !1 }) : e;
  }
  const mp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    fv = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${mp[e]}px)`,
    };
  function rn(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const o = r.breakpoints || fv;
      return t.reduce((i, a, s) => ((i[o.up(o.keys[s])] = n(t[s])), i), {});
    }
    if (typeof t == "object") {
      const o = r.breakpoints || fv;
      return Object.keys(t).reduce((i, a) => {
        if (Object.keys(o.values || mp).indexOf(a) !== -1) {
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
  function C5(e = {}) {
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
  function O5(e, t) {
    return e.reduce((n, r) => {
      const o = n[r];
      return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
  }
  function T5(e, t) {
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
  function cu({ values: e, breakpoints: t, base: n }) {
    const r = n || T5(e, t),
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
  function du(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
      const r = `vars.${t}`
        .split(".")
        .reduce((o, i) => (o && o[i] ? o[i] : null), e);
      if (r != null) return r;
    }
    return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
  }
  function fu(e, t, n, r = n) {
    let o;
    return (
      typeof e == "function"
        ? (o = e(n))
        : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = du(e, n) || r),
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
          u = du(l, r) || {};
        return rn(a, s, (d) => {
          let f = fu(u, o, d);
          return (
            d === f &&
              typeof d == "string" &&
              (f = fu(u, o, `${t}${d === "default" ? "" : Y(d)}`, d)),
            n === !1 ? f : { [n]: f }
          );
        });
      };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
  }
  function pu(...e) {
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
        Object.keys(r).reduce((o, i) => (t[i] ? Pa(o, t[i](r)) : o), {});
    return (
      (n.propTypes = {}),
      (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
      n
    );
  }
  function P5(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
  }
  const R5 = { m: "margin", p: "padding" },
    N5 = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    pv = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    A5 = P5((e) => {
      if (e.length > 2)
        if (pv[e]) e = pv[e];
        else return [e];
      const [t, n] = e.split(""),
        r = R5[t],
        o = N5[n] || "";
      return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    gp = [
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
    yp = [
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
  [...gp, ...yp];
  function Ra(e, t, n, r) {
    var o;
    const i = (o = du(e, t, !1)) != null ? o : n;
    return typeof i == "number"
      ? (a) => (typeof a == "string" ? a : i * a)
      : Array.isArray(i)
      ? (a) => (typeof a == "string" ? a : i[a])
      : typeof i == "function"
      ? i
      : () => {};
  }
  function hv(e) {
    return Ra(e, "spacing", 8);
  }
  function Na(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
      r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
  }
  function _5(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = Na(t, n)), r), {});
  }
  function M5(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = A5(n),
      i = _5(o, r),
      a = e[n];
    return rn(e, a, i);
  }
  function mv(e, t) {
    const n = hv(e.theme);
    return Object.keys(e)
      .map((r) => M5(e, t, r, n))
      .reduce(Pa, {});
  }
  function Ke(e) {
    return mv(e, gp);
  }
  (Ke.propTypes = {}), (Ke.filterProps = gp);
  function Ge(e) {
    return mv(e, yp);
  }
  (Ge.propTypes = {}), (Ge.filterProps = yp);
  function $n(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  const I5 = Pe({ prop: "border", themeKey: "borders", transform: $n }),
    $5 = Pe({ prop: "borderTop", themeKey: "borders", transform: $n }),
    L5 = Pe({ prop: "borderRight", themeKey: "borders", transform: $n }),
    B5 = Pe({ prop: "borderBottom", themeKey: "borders", transform: $n }),
    z5 = Pe({ prop: "borderLeft", themeKey: "borders", transform: $n }),
    j5 = Pe({ prop: "borderColor", themeKey: "palette" }),
    F5 = Pe({ prop: "borderTopColor", themeKey: "palette" }),
    D5 = Pe({ prop: "borderRightColor", themeKey: "palette" }),
    U5 = Pe({ prop: "borderBottomColor", themeKey: "palette" }),
    W5 = Pe({ prop: "borderLeftColor", themeKey: "palette" }),
    hu = (e) => {
      if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = Ra(e.theme, "shape.borderRadius", 4),
          n = (r) => ({ borderRadius: Na(t, r) });
        return rn(e, e.borderRadius, n);
      }
      return null;
    };
  (hu.propTypes = {}),
    (hu.filterProps = ["borderRadius"]),
    pu(I5, $5, L5, B5, z5, j5, F5, D5, U5, W5, hu);
  const mu = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = Ra(e.theme, "spacing", 8),
        n = (r) => ({ gap: Na(t, r) });
      return rn(e, e.gap, n);
    }
    return null;
  };
  (mu.propTypes = {}), (mu.filterProps = ["gap"]);
  const gu = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = Ra(e.theme, "spacing", 8),
        n = (r) => ({ columnGap: Na(t, r) });
      return rn(e, e.columnGap, n);
    }
    return null;
  };
  (gu.propTypes = {}), (gu.filterProps = ["columnGap"]);
  const yu = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = Ra(e.theme, "spacing", 8),
        n = (r) => ({ rowGap: Na(t, r) });
      return rn(e, e.rowGap, n);
    }
    return null;
  };
  (yu.propTypes = {}), (yu.filterProps = ["rowGap"]);
  const V5 = Pe({ prop: "gridColumn" }),
    H5 = Pe({ prop: "gridRow" }),
    q5 = Pe({ prop: "gridAutoFlow" }),
    K5 = Pe({ prop: "gridAutoColumns" }),
    G5 = Pe({ prop: "gridAutoRows" }),
    J5 = Pe({ prop: "gridTemplateColumns" }),
    Y5 = Pe({ prop: "gridTemplateRows" }),
    X5 = Pe({ prop: "gridTemplateAreas" }),
    Q5 = Pe({ prop: "gridArea" });
  pu(mu, gu, yu, V5, H5, q5, K5, G5, J5, Y5, X5, Q5);
  function ti(e, t) {
    return t === "grey" ? t : e;
  }
  const Z5 = Pe({ prop: "color", themeKey: "palette", transform: ti }),
    eC = Pe({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: ti,
    }),
    tC = Pe({ prop: "backgroundColor", themeKey: "palette", transform: ti });
  pu(Z5, eC, tC);
  function Kt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const nC = Pe({ prop: "width", transform: Kt }),
    vp = (e) => {
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
              mp[n] ||
              Kt(n),
          };
        };
        return rn(e, e.maxWidth, t);
      }
      return null;
    };
  vp.filterProps = ["maxWidth"];
  const rC = Pe({ prop: "minWidth", transform: Kt }),
    oC = Pe({ prop: "height", transform: Kt }),
    iC = Pe({ prop: "maxHeight", transform: Kt }),
    aC = Pe({ prop: "minHeight", transform: Kt });
  Pe({ prop: "size", cssProperty: "width", transform: Kt }),
    Pe({ prop: "size", cssProperty: "height", transform: Kt });
  const sC = Pe({ prop: "boxSizing" });
  pu(nC, vp, rC, oC, iC, aC, sC);
  const lC = {
      border: { themeKey: "borders", transform: $n },
      borderTop: { themeKey: "borders", transform: $n },
      borderRight: { themeKey: "borders", transform: $n },
      borderBottom: { themeKey: "borders", transform: $n },
      borderLeft: { themeKey: "borders", transform: $n },
      borderColor: { themeKey: "palette" },
      borderTopColor: { themeKey: "palette" },
      borderRightColor: { themeKey: "palette" },
      borderBottomColor: { themeKey: "palette" },
      borderLeftColor: { themeKey: "palette" },
      borderRadius: { themeKey: "shape.borderRadius", style: hu },
      color: { themeKey: "palette", transform: ti },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: ti,
      },
      backgroundColor: { themeKey: "palette", transform: ti },
      p: { style: Ge },
      pt: { style: Ge },
      pr: { style: Ge },
      pb: { style: Ge },
      pl: { style: Ge },
      px: { style: Ge },
      py: { style: Ge },
      padding: { style: Ge },
      paddingTop: { style: Ge },
      paddingRight: { style: Ge },
      paddingBottom: { style: Ge },
      paddingLeft: { style: Ge },
      paddingX: { style: Ge },
      paddingY: { style: Ge },
      paddingInline: { style: Ge },
      paddingInlineStart: { style: Ge },
      paddingInlineEnd: { style: Ge },
      paddingBlock: { style: Ge },
      paddingBlockStart: { style: Ge },
      paddingBlockEnd: { style: Ge },
      m: { style: Ke },
      mt: { style: Ke },
      mr: { style: Ke },
      mb: { style: Ke },
      ml: { style: Ke },
      mx: { style: Ke },
      my: { style: Ke },
      margin: { style: Ke },
      marginTop: { style: Ke },
      marginRight: { style: Ke },
      marginBottom: { style: Ke },
      marginLeft: { style: Ke },
      marginX: { style: Ke },
      marginY: { style: Ke },
      marginInline: { style: Ke },
      marginInlineStart: { style: Ke },
      marginInlineEnd: { style: Ke },
      marginBlock: { style: Ke },
      marginBlockStart: { style: Ke },
      marginBlockEnd: { style: Ke },
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
      gap: { style: mu },
      rowGap: { style: yu },
      columnGap: { style: gu },
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
      width: { transform: Kt },
      maxWidth: { style: vp },
      minWidth: { transform: Kt },
      height: { transform: Kt },
      maxHeight: { transform: Kt },
      minHeight: { transform: Kt },
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
    vu = lC;
  function uC(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
      n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
  }
  function cC(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function dC() {
    function e(n, r, o, i) {
      const a = { [n]: r, theme: o },
        s = i[n];
      if (!s) return { [n]: r };
      const { cssProperty: l = n, themeKey: u, transform: d, style: f } = s;
      if (r == null) return null;
      const p = du(o, u) || {};
      return f
        ? f(a)
        : rn(a, r, (y) => {
            let m = fu(p, d, y);
            return (
              y === m &&
                typeof y == "string" &&
                (m = fu(p, d, `${n}${y === "default" ? "" : Y(y)}`, y)),
              l === !1 ? m : { [l]: m }
            );
          });
    }
    function t(n) {
      var r;
      const { sx: o, theme: i = {} } = n || {};
      if (!o) return null;
      const a = (r = i.unstable_sxConfig) != null ? r : vu;
      function s(l) {
        let u = l;
        if (typeof l == "function") u = l(i);
        else if (typeof l != "object") return l;
        if (!u) return null;
        const d = C5(i.breakpoints),
          f = Object.keys(d);
        let p = d;
        return (
          Object.keys(u).forEach((y) => {
            const m = cC(u[y], i);
            if (m != null)
              if (typeof m == "object")
                if (a[y]) p = Pa(p, e(y, m, i, a));
                else {
                  const w = rn({ theme: i }, m, (P) => ({ [y]: P }));
                  uC(w, m) ? (p[y] = t({ sx: m, theme: i })) : (p = Pa(p, w));
                }
              else p = Pa(p, e(y, m, i, a));
          }),
          O5(f, p)
        );
      }
      return Array.isArray(o) ? o.map(s) : s(o);
    }
    return t;
  }
  const gv = dC();
  gv.filterProps = ["sx"];
  const bu = gv,
    fC = ["sx"],
    pC = (e) => {
      var t, n;
      const r = { systemProps: {}, otherProps: {} },
        o =
          (t =
            e == null || (n = e.theme) == null
              ? void 0
              : n.unstable_sxConfig) != null
            ? t
            : vu;
      return (
        Object.keys(e).forEach((i) => {
          o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
        }),
        r
      );
    };
  function bp(e) {
    const { sx: t } = e,
      n = X(e, fC),
      { systemProps: r, otherProps: o } = pC(n);
    let i;
    return (
      Array.isArray(t)
        ? (i = [r, ...t])
        : typeof t == "function"
        ? (i = (...a) => {
            const s = t(...a);
            return Zr(s) ? E({}, r, s) : r;
          })
        : (i = E({}, r, t)),
      E({}, o, { sx: i })
    );
  }
  function yv(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (n = yv(e[t])) && (r && (r += " "), (r += n));
      else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
  }
  function Q() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
      (e = arguments[n++]) && (t = yv(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const hC = ["values", "unit", "step"],
    mC = (e) => {
      const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
      return (
        t.sort((n, r) => n.val - r.val),
        t.reduce((n, r) => E({}, n, { [r.key]: r.val }), {})
      );
    };
  function gC(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
      } = e,
      o = X(e, hC),
      i = mC(t),
      a = Object.keys(i);
    function s(p) {
      return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
    }
    function l(p) {
      return `@media (max-width:${
        (typeof t[p] == "number" ? t[p] : p) - r / 100
      }${n})`;
    }
    function u(p, y) {
      const m = a.indexOf(y);
      return `@media (min-width:${
        typeof t[p] == "number" ? t[p] : p
      }${n}) and (max-width:${
        (m !== -1 && typeof t[a[m]] == "number" ? t[a[m]] : y) - r / 100
      }${n})`;
    }
    function d(p) {
      return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : s(p);
    }
    function f(p) {
      const y = a.indexOf(p);
      return y === 0
        ? s(a[1])
        : y === a.length - 1
        ? l(a[y])
        : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
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
  const yC = { borderRadius: 4 },
    vC = yC;
  function bC(e = 8) {
    if (e.mui) return e;
    const t = hv({ spacing: e }),
      n = (...r) =>
        (r.length === 0 ? [1] : r)
          .map((o) => {
            const i = t(o);
            return typeof i == "number" ? `${i}px` : i;
          })
          .join(" ");
    return (n.mui = !0), n;
  }
  const wC = ["breakpoints", "palette", "spacing", "shape"];
  function wu(e = {}, ...t) {
    const {
        breakpoints: n = {},
        palette: r = {},
        spacing: o,
        shape: i = {},
      } = e,
      a = X(e, wC),
      s = gC(n),
      l = bC(o);
    let u = tn(
      {
        breakpoints: s,
        direction: "ltr",
        components: {},
        palette: E({ mode: "light" }, r),
        spacing: l,
        shape: E({}, vC, i),
      },
      a,
    );
    return (
      (u = t.reduce((d, f) => tn(d, f), u)),
      (u.unstable_sxConfig = E(
        {},
        vu,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (u.unstable_sx = function (d) {
        return bu({ sx: d, theme: this });
      }),
      u
    );
  }
  const xC = x.createContext(null),
    vv = xC;
  function bv() {
    return x.useContext(vv);
  }
  const SC = typeof Symbol == "function" && Symbol.for,
    kC = SC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  function EC(e, t) {
    return typeof t == "function" ? t(e) : E({}, e, t);
  }
  function CC(e) {
    const { children: t, theme: n } = e,
      r = bv(),
      o = x.useMemo(() => {
        const i = r === null ? n : EC(r, n);
        return i != null && (i[kC] = r !== null), i;
      }, [n, r]);
    return C(vv.Provider, { value: o, children: t });
  }
  function OC(e) {
    return Object.keys(e).length === 0;
  }
  function wv(e = null) {
    const t = bv();
    return !t || OC(t) ? e : t;
  }
  const TC = wu();
  function xu(e = TC) {
    return wv(e);
  }
  const PC = ["className", "component"];
  function RC(e = {}) {
    const {
        defaultTheme: t,
        defaultClassName: n = "MuiBox-root",
        generateClassName: r,
      } = e,
      o = dv("div", {
        shouldForwardProp: (i) => i !== "theme" && i !== "sx" && i !== "as",
      })(bu);
    return x.forwardRef(function (i, a) {
      const s = xu(t),
        l = bp(i),
        { className: u, component: d = "div" } = l,
        f = X(l, PC);
      return C(
        o,
        E({ as: d, ref: a, className: Q(u, r ? r(n) : n), theme: s }, f),
      );
    });
  }
  const NC = ["variant"];
  function xv(e) {
    return e.length === 0;
  }
  function Sv(e) {
    const { variant: t } = e,
      n = X(e, NC);
    let r = t || "";
    return (
      Object.keys(n)
        .sort()
        .forEach((o) => {
          o === "color"
            ? (r += xv(r) ? e[o] : Y(e[o]))
            : (r += `${xv(r) ? o : Y(o)}${Y(e[o].toString())}`);
        }),
      r
    );
  }
  const AC = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
    ],
    _C = ["theme"],
    MC = ["theme"];
  function Aa(e) {
    return Object.keys(e).length === 0;
  }
  function IC(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  const $C = (e, t) =>
      t.components && t.components[e] && t.components[e].styleOverrides
        ? t.components[e].styleOverrides
        : null,
    LC = (e, t) => {
      let n = [];
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants);
      const r = {};
      return (
        n.forEach((o) => {
          const i = Sv(o.props);
          r[i] = o.style;
        }),
        r
      );
    },
    BC = (e, t, n, r) => {
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
              d && s.push(t[Sv(u.props)]);
          }),
        s
      );
    };
  function _a(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  const zC = wu();
  function kv(e = {}) {
    const {
        defaultTheme: t = zC,
        rootShouldForwardProp: n = _a,
        slotShouldForwardProp: r = _a,
      } = e,
      o = (i) => {
        const a = Aa(i.theme) ? t : i.theme;
        return bu(E({}, i, { theme: a }));
      };
    return (
      (o.__mui_systemSx = !0),
      (i, a = {}) => {
        E5(i, (v) => v.filter((k) => !(k != null && k.__mui_systemSx)));
        const {
            name: s,
            slot: l,
            skipVariantsResolver: u,
            skipSx: d,
            overridesResolver: f,
          } = a,
          p = X(a, AC),
          y = u !== void 0 ? u : (l && l !== "Root") || !1,
          m = d || !1;
        let w,
          P = _a;
        l === "Root" ? (P = n) : l ? (P = r) : IC(i) && (P = void 0);
        const b = dv(i, E({ shouldForwardProp: P, label: w }, p)),
          g = (v, ...k) => {
            const O = k
              ? k.map((A) =>
                  typeof A == "function" && A.__emotion_real !== A
                    ? (_) => {
                        let { theme: M } = _,
                          D = X(_, _C);
                        return A(E({ theme: Aa(M) ? t : M }, D));
                      }
                    : A,
                )
              : [];
            let R = v;
            s &&
              f &&
              O.push((A) => {
                const _ = Aa(A.theme) ? t : A.theme,
                  M = $C(s, _);
                if (M) {
                  const D = {};
                  return (
                    Object.entries(M).forEach(([U, B]) => {
                      D[U] =
                        typeof B == "function" ? B(E({}, A, { theme: _ })) : B;
                    }),
                    f(A, D)
                  );
                }
                return null;
              }),
              s &&
                !y &&
                O.push((A) => {
                  const _ = Aa(A.theme) ? t : A.theme;
                  return BC(A, LC(s, _), _, s);
                }),
              m || O.push(o);
            const T = O.length - k.length;
            if (Array.isArray(v) && T > 0) {
              const A = new Array(T).fill("");
              (R = [...v, ...A]), (R.raw = [...v.raw, ...A]);
            } else
              typeof v == "function" &&
                v.__emotion_real !== v &&
                (R = (A) => {
                  let { theme: _ } = A,
                    M = X(A, MC);
                  return v(E({ theme: Aa(_) ? t : _ }, M));
                });
            return b(R, ...O);
          };
        return b.withConfig && (g.withConfig = b.withConfig), g;
      }
    );
  }
  const jC = kv(),
    FC = jC;
  function DC(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
      !t.components ||
      !t.components[n] ||
      !t.components[n].defaultProps
      ? r
      : Qf(t.components[n].defaultProps, r);
  }
  function Ev({ props: e, name: t, defaultTheme: n }) {
    const r = xu(n);
    return DC({ theme: r, name: t, props: e });
  }
  function wp(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n);
  }
  function UC(e) {
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
  function eo(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return eo(UC(e));
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
      throw new Error(Cr(9, e));
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
        throw new Error(Cr(10, o));
    } else r = r.split(",");
    return (
      (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
  }
  function Su(e) {
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
  function WC(e) {
    e = eo(e);
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
      Su({ type: s, values: l })
    );
  }
  function Cv(e) {
    e = eo(e);
    let t = e.type === "hsl" || e.type === "hsla" ? eo(WC(e)).values : e.values;
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
  function VC(e, t) {
    const n = Cv(e),
      r = Cv(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  }
  function Le(e, t) {
    return (
      (e = eo(e)),
      (t = wp(t)),
      (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
      e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      Su(e)
    );
  }
  function ni(e, t) {
    if (((e = eo(e)), (t = wp(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return Su(e);
  }
  function ri(e, t) {
    if (((e = eo(e)), (t = wp(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return Su(e);
  }
  const HC = {};
  function qC(e) {
    const t = xu();
    return C(fp.Provider, {
      value: typeof t == "object" ? t : HC,
      children: e.children,
    });
  }
  function Ov(e) {
    const { children: t, theme: n } = e;
    return C(CC, { theme: n, children: C(qC, { children: t }) });
  }
  const KC = [
      "className",
      "component",
      "disableGutters",
      "fixed",
      "maxWidth",
      "classes",
    ],
    GC = wu(),
    JC = FC("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${Y(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    YC = (e) => Ev({ props: e, name: "MuiContainer", defaultTheme: GC }),
    XC = (e, t) => {
      const n = (l) => ae(t, l),
        { classes: r, fixed: o, disableGutters: i, maxWidth: a } = e,
        s = {
          root: [
            "root",
            a && `maxWidth${Y(String(a))}`,
            o && "fixed",
            i && "disableGutters",
          ],
        };
      return se(s, n, r);
    };
  function QC(e = {}) {
    const {
        createStyledComponent: t = JC,
        useThemeProps: n = YC,
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
    return x.forwardRef(function (i, a) {
      const s = n(i),
        {
          className: l,
          component: u = "div",
          disableGutters: d = !1,
          fixed: f = !1,
          maxWidth: p = "lg",
        } = s,
        y = X(s, KC),
        m = E({}, s, {
          component: u,
          disableGutters: d,
          fixed: f,
          maxWidth: p,
        }),
        w = XC(m, r);
      return C(
        o,
        E({ as: u, ownerState: m, className: Q(w.root, l), ref: a }, y),
      );
    });
  }
  function ZC(e, t) {
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
  const eO = ["mode", "contrastThreshold", "tonalOffset"],
    Tv = {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: ba.white, default: ba.white },
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
    xp = {
      text: {
        primary: ba.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: ba.white,
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
  function Pv(e, t, n, r) {
    const o = r.light || r,
      i = r.dark || r * 1.5;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : t === "light"
        ? (e.light = ri(e.main, o))
        : t === "dark" && (e.dark = ni(e.main, i)));
  }
  function tO(e = "light") {
    return e === "dark"
      ? { main: Xr[200], light: Xr[50], dark: Xr[400] }
      : { main: Xr[700], light: Xr[400], dark: Xr[800] };
  }
  function nO(e = "light") {
    return e === "dark"
      ? { main: Yr[200], light: Yr[50], dark: Yr[400] }
      : { main: Yr[500], light: Yr[300], dark: Yr[700] };
  }
  function rO(e = "light") {
    return e === "dark"
      ? { main: Jr[500], light: Jr[300], dark: Jr[700] }
      : { main: Jr[700], light: Jr[400], dark: Jr[800] };
  }
  function oO(e = "light") {
    return e === "dark"
      ? { main: Jo[400], light: Jo[300], dark: Jo[700] }
      : { main: Jo[700], light: Jo[500], dark: Jo[900] };
  }
  function iO(e = "light") {
    return e === "dark"
      ? { main: Qr[400], light: Qr[300], dark: Qr[700] }
      : { main: Qr[800], light: Qr[500], dark: Qr[900] };
  }
  function aO(e = "light") {
    return e === "dark"
      ? { main: Yo[400], light: Yo[300], dark: Yo[700] }
      : { main: "#ed6c02", light: Yo[500], dark: Yo[900] };
  }
  function sO(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
      } = e,
      o = X(e, eO),
      i = e.primary || tO(t),
      a = e.secondary || nO(t),
      s = e.error || rO(t),
      l = e.info || oO(t),
      u = e.success || iO(t),
      d = e.warning || aO(t);
    function f(m) {
      return VC(m, xp.text.primary) >= n ? xp.text.primary : Tv.text.primary;
    }
    const p = ({
        color: m,
        name: w,
        mainShade: P = 500,
        lightShade: b = 300,
        darkShade: g = 700,
      }) => {
        if (
          ((m = E({}, m)),
          !m.main && m[P] && (m.main = m[P]),
          !m.hasOwnProperty("main"))
        )
          throw new Error(Cr(11, w ? ` (${w})` : "", P));
        if (typeof m.main != "string")
          throw new Error(Cr(12, w ? ` (${w})` : "", JSON.stringify(m.main)));
        return (
          Pv(m, "light", b, r),
          Pv(m, "dark", g, r),
          m.contrastText || (m.contrastText = f(m.main)),
          m
        );
      },
      y = { dark: xp, light: Tv };
    return tn(
      E(
        {
          common: E({}, ba),
          mode: t,
          primary: p({ color: i, name: "primary" }),
          secondary: p({
            color: a,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700",
          }),
          error: p({ color: s, name: "error" }),
          warning: p({ color: d, name: "warning" }),
          info: p({ color: l, name: "info" }),
          success: p({ color: u, name: "success" }),
          grey: Jk,
          contrastThreshold: n,
          getContrastText: f,
          augmentColor: p,
          tonalOffset: r,
        },
        y[t],
      ),
      o,
    );
  }
  const lO = [
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
  function uO(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Rv = { textTransform: "uppercase" },
    Nv = '"Roboto", "Helvetica", "Arial", sans-serif';
  function cO(e, t) {
    const n = typeof t == "function" ? t(e) : t,
      {
        fontFamily: r = Nv,
        fontSize: o = 14,
        fontWeightLight: i = 300,
        fontWeightRegular: a = 400,
        fontWeightMedium: s = 500,
        fontWeightBold: l = 700,
        htmlFontSize: u = 16,
        allVariants: d,
        pxToRem: f,
      } = n,
      p = X(n, lO),
      y = o / 14,
      m = f || ((b) => `${(b / u) * y}rem`),
      w = (b, g, v, k, O) =>
        E(
          { fontFamily: r, fontWeight: b, fontSize: m(g), lineHeight: v },
          r === Nv ? { letterSpacing: `${uO(k / g)}em` } : {},
          O,
          d,
        ),
      P = {
        h1: w(i, 96, 1.167, -1.5),
        h2: w(i, 60, 1.2, -0.5),
        h3: w(a, 48, 1.167, 0),
        h4: w(a, 34, 1.235, 0.25),
        h5: w(a, 24, 1.334, 0),
        h6: w(s, 20, 1.6, 0.15),
        subtitle1: w(a, 16, 1.75, 0.15),
        subtitle2: w(s, 14, 1.57, 0.1),
        body1: w(a, 16, 1.5, 0.15),
        body2: w(a, 14, 1.43, 0.15),
        button: w(s, 14, 1.75, 0.4, Rv),
        caption: w(a, 12, 1.66, 0.4),
        overline: w(a, 12, 2.66, 1, Rv),
      };
    return tn(
      E(
        {
          htmlFontSize: u,
          pxToRem: m,
          fontFamily: r,
          fontSize: o,
          fontWeightLight: i,
          fontWeightRegular: a,
          fontWeightMedium: s,
          fontWeightBold: l,
        },
        P,
      ),
      p,
      { clone: !1 },
    );
  }
  const dO = 0.2,
    fO = 0.14,
    pO = 0.12;
  function Fe(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${dO})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${fO})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pO})`,
    ].join(",");
  }
  const hO = [
      "none",
      Fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      Fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      Fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      Fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      Fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      Fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      Fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      Fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      Fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      Fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      Fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      Fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      Fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      Fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      Fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      Fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      Fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      Fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      Fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      Fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      Fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      Fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      Fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      Fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    mO = hO,
    gO = ["duration", "easing", "delay"],
    yO = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    vO = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function Av(e) {
    return `${Math.round(e)}ms`;
  }
  function bO(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
  }
  function wO(e) {
    const t = E({}, yO, e.easing),
      n = E({}, vO, e.duration);
    return E(
      {
        getAutoHeightDuration: bO,
        create: (r = ["all"], o = {}) => {
          const {
            duration: i = n.standard,
            easing: a = t.easeInOut,
            delay: s = 0,
          } = o;
          return (
            X(o, gO),
            (Array.isArray(r) ? r : [r])
              .map(
                (l) =>
                  `${l} ${typeof i == "string" ? i : Av(i)} ${a} ${
                    typeof s == "string" ? s : Av(s)
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
  const xO = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    SO = xO,
    kO = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
    ];
  function ku(e = {}, ...t) {
    const {
        mixins: n = {},
        palette: r = {},
        transitions: o = {},
        typography: i = {},
      } = e,
      a = X(e, kO);
    if (e.vars) throw new Error(Cr(18));
    const s = sO(r),
      l = wu(e);
    let u = tn(l, {
      mixins: ZC(l.breakpoints, n),
      palette: s,
      shadows: mO.slice(),
      typography: cO(s, i),
      transitions: wO(o),
      zIndex: E({}, SO),
    });
    return (
      (u = tn(u, a)),
      (u = t.reduce((d, f) => tn(d, f), u)),
      (u.unstable_sxConfig = E(
        {},
        vu,
        a == null ? void 0 : a.unstable_sxConfig,
      )),
      (u.unstable_sx = function (d) {
        return bu({ sx: d, theme: this });
      }),
      u
    );
  }
  const EO = ku(),
    Eu = EO;
  function Pr() {
    return xu(Eu);
  }
  function ce({ props: e, name: t }) {
    return Ev({ props: e, name: t, defaultTheme: Eu });
  }
  const Sn = (e) => _a(e) && e !== "classes",
    CO = _a,
    OO = kv({ defaultTheme: Eu, rootShouldForwardProp: Sn }),
    K = OO,
    TO = (e) => {
      let t;
      return (
        e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
        (t / 100).toFixed(2)
      );
    },
    _v = TO;
  function to(e) {
    return typeof e == "string";
  }
  function Ma(e, t, n) {
    return e === void 0 || to(e)
      ? t
      : E({}, t, { ownerState: E({}, t.ownerState, n) });
  }
  function PO(e, t = []) {
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
  function Sp(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Mv(e) {
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
  function RO(e) {
    const {
      getSlotProps: t,
      additionalProps: n,
      externalSlotProps: r,
      externalForwardedProps: o,
      className: i,
    } = e;
    if (!t) {
      const y = Q(
          o == null ? void 0 : o.className,
          r == null ? void 0 : r.className,
          i,
          n == null ? void 0 : n.className,
        ),
        m = E(
          {},
          n == null ? void 0 : n.style,
          o == null ? void 0 : o.style,
          r == null ? void 0 : r.style,
        ),
        w = E({}, n, o, r);
      return (
        y.length > 0 && (w.className = y),
        Object.keys(m).length > 0 && (w.style = m),
        { props: w, internalRef: void 0 }
      );
    }
    const a = PO(E({}, o, r)),
      s = Mv(r),
      l = Mv(o),
      u = t(a),
      d = Q(
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
      p = E({}, u, n, l, s);
    return (
      d.length > 0 && (p.className = d),
      Object.keys(f).length > 0 && (p.style = f),
      { props: p, internalRef: u.ref }
    );
  }
  const NO = ["elementType", "externalSlotProps", "ownerState"];
  function kp(e) {
    var t;
    const { elementType: n, externalSlotProps: r, ownerState: o } = e,
      i = X(e, NO),
      a = Sp(r, o),
      { props: s, internalRef: l } = RO(E({}, i, { externalSlotProps: a })),
      u = Qe(
        l,
        a == null ? void 0 : a.ref,
        (t = e.additionalProps) == null ? void 0 : t.ref,
      );
    return Ma(n, E({}, s, { ref: u }), o);
  }
  const AO = [
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
  function _O(e) {
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
  function MO(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e;
  }
  function IO(e) {
    return !(
      e.disabled ||
      (e.tagName === "INPUT" && e.type === "hidden") ||
      MO(e)
    );
  }
  function $O(e) {
    const t = [],
      n = [];
    return (
      Array.from(e.querySelectorAll(AO)).forEach((r, o) => {
        const i = _O(r);
        i === -1 ||
          !IO(r) ||
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
  function LO() {
    return !0;
  }
  function BO(e) {
    const {
        children: t,
        disableAutoFocus: n = !1,
        disableEnforceFocus: r = !1,
        disableRestoreFocus: o = !1,
        getTabbable: i = $O,
        isEnabled: a = LO,
        open: s,
      } = e,
      l = x.useRef(!1),
      u = x.useRef(null),
      d = x.useRef(null),
      f = x.useRef(null),
      p = x.useRef(null),
      y = x.useRef(!1),
      m = x.useRef(null),
      w = Qe(t.ref, m),
      P = x.useRef(null);
    x.useEffect(() => {
      !s || !m.current || (y.current = !n);
    }, [n, s]),
      x.useEffect(() => {
        if (!s || !m.current) return;
        const v = wt(m.current);
        return (
          m.current.contains(v.activeElement) ||
            (m.current.hasAttribute("tabIndex") ||
              m.current.setAttribute("tabIndex", "-1"),
            y.current && m.current.focus()),
          () => {
            o ||
              (f.current &&
                f.current.focus &&
                ((l.current = !0), f.current.focus()),
              (f.current = null));
          }
        );
      }, [s]),
      x.useEffect(() => {
        if (!s || !m.current) return;
        const v = wt(m.current),
          k = (T) => {
            const { current: A } = m;
            if (A !== null) {
              if (!v.hasFocus() || r || !a() || l.current) {
                l.current = !1;
                return;
              }
              if (!A.contains(v.activeElement)) {
                if (
                  (T && p.current !== T.target) ||
                  v.activeElement !== p.current
                )
                  p.current = null;
                else if (p.current !== null) return;
                if (!y.current) return;
                let D = [];
                if (
                  ((v.activeElement === u.current ||
                    v.activeElement === d.current) &&
                    (D = i(m.current)),
                  D.length > 0)
                ) {
                  var _, M;
                  const U = !!(
                      (_ = P.current) != null &&
                      _.shiftKey &&
                      ((M = P.current) == null ? void 0 : M.key) === "Tab"
                    ),
                    B = D[0],
                    F = D[D.length - 1];
                  typeof B != "string" &&
                    typeof F != "string" &&
                    (U ? F.focus() : B.focus());
                } else A.focus();
              }
            }
          },
          O = (T) => {
            (P.current = T),
              !(r || !a() || T.key !== "Tab") &&
                v.activeElement === m.current &&
                T.shiftKey &&
                ((l.current = !0), d.current && d.current.focus());
          };
        v.addEventListener("focusin", k), v.addEventListener("keydown", O, !0);
        const R = setInterval(() => {
          v.activeElement && v.activeElement.tagName === "BODY" && k(null);
        }, 50);
        return () => {
          clearInterval(R),
            v.removeEventListener("focusin", k),
            v.removeEventListener("keydown", O, !0);
        };
      }, [n, r, o, a, s, i]);
    const b = (v) => {
        f.current === null && (f.current = v.relatedTarget),
          (y.current = !0),
          (p.current = v.target);
        const k = t.props.onFocus;
        k && k(v);
      },
      g = (v) => {
        f.current === null && (f.current = v.relatedTarget), (y.current = !0);
      };
    return te(x.Fragment, {
      children: [
        C("div", {
          tabIndex: s ? 0 : -1,
          onFocus: g,
          ref: u,
          "data-testid": "sentinelStart",
        }),
        x.cloneElement(t, { ref: w, onFocus: b }),
        C("div", {
          tabIndex: s ? 0 : -1,
          onFocus: g,
          ref: d,
          "data-testid": "sentinelEnd",
        }),
      ],
    });
  }
  var Lt = "top",
    on = "bottom",
    an = "right",
    Bt = "left",
    Ep = "auto",
    Ia = [Lt, on, an, Bt],
    oi = "start",
    $a = "end",
    zO = "clippingParents",
    Iv = "viewport",
    La = "popper",
    jO = "reference",
    $v = Ia.reduce(function (e, t) {
      return e.concat([t + "-" + oi, t + "-" + $a]);
    }, []),
    Lv = [].concat(Ia, [Ep]).reduce(function (e, t) {
      return e.concat([t, t + "-" + oi, t + "-" + $a]);
    }, []),
    FO = "beforeRead",
    DO = "read",
    UO = "afterRead",
    WO = "beforeMain",
    VO = "main",
    HO = "afterMain",
    qO = "beforeWrite",
    KO = "write",
    GO = "afterWrite",
    JO = [FO, DO, UO, WO, VO, HO, qO, KO, GO];
  function Ln(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function sn(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function no(e) {
    var t = sn(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function ln(e) {
    var t = sn(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Cp(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = sn(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function YO(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (n) {
      var r = t.styles[n] || {},
        o = t.attributes[n] || {},
        i = t.elements[n];
      !ln(i) ||
        !Ln(i) ||
        (Object.assign(i.style, r),
        Object.keys(o).forEach(function (a) {
          var s = o[a];
          s === !1
            ? i.removeAttribute(a)
            : i.setAttribute(a, s === !0 ? "" : s);
        }));
    });
  }
  function XO(e) {
    var t = e.state,
      n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(t.elements.popper.style, n.popper),
      (t.styles = n),
      t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
      function () {
        Object.keys(t.elements).forEach(function (r) {
          var o = t.elements[r],
            i = t.attributes[r] || {},
            a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
            s = a.reduce(function (l, u) {
              return (l[u] = ""), l;
            }, {});
          !ln(o) ||
            !Ln(o) ||
            (Object.assign(o.style, s),
            Object.keys(i).forEach(function (l) {
              o.removeAttribute(l);
            }));
        });
      }
    );
  }
  const QO = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: YO,
    effect: XO,
    requires: ["computeStyles"],
  };
  function Bn(e) {
    return e.split("-")[0];
  }
  var ro = Math.max,
    Cu = Math.min,
    ii = Math.round;
  function Op() {
    var e = navigator.userAgentData;
    return e != null && e.brands
      ? e.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Bv() {
    return !/^((?!chrome|android).)*safari/i.test(Op());
  }
  function ai(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
      o = 1,
      i = 1;
    t &&
      ln(e) &&
      ((o = (e.offsetWidth > 0 && ii(r.width) / e.offsetWidth) || 1),
      (i = (e.offsetHeight > 0 && ii(r.height) / e.offsetHeight) || 1));
    var a = no(e) ? sn(e) : window,
      s = a.visualViewport,
      l = !Bv() && n,
      u = (r.left + (l && s ? s.offsetLeft : 0)) / o,
      d = (r.top + (l && s ? s.offsetTop : 0)) / i,
      f = r.width / o,
      p = r.height / i;
    return {
      width: f,
      height: p,
      top: d,
      right: u + f,
      bottom: d + p,
      left: u,
      x: u,
      y: d,
    };
  }
  function Tp(e) {
    var t = ai(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function zv(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Cp(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function Qn(e) {
    return sn(e).getComputedStyle(e);
  }
  function ZO(e) {
    return ["table", "td", "th"].indexOf(Ln(e)) >= 0;
  }
  function Rr(e) {
    return ((no(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function Ou(e) {
    return Ln(e) === "html"
      ? e
      : e.assignedSlot || e.parentNode || (Cp(e) ? e.host : null) || Rr(e);
  }
  function jv(e) {
    return !ln(e) || Qn(e).position === "fixed" ? null : e.offsetParent;
  }
  function eT(e) {
    var t = /firefox/i.test(Op()),
      n = /Trident/i.test(Op());
    if (n && ln(e)) {
      var r = Qn(e);
      if (r.position === "fixed") return null;
    }
    var o = Ou(e);
    for (
      Cp(o) && (o = o.host);
      ln(o) && ["html", "body"].indexOf(Ln(o)) < 0;

    ) {
      var i = Qn(o);
      if (
        i.transform !== "none" ||
        i.perspective !== "none" ||
        i.contain === "paint" ||
        ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
        (t && i.willChange === "filter") ||
        (t && i.filter && i.filter !== "none")
      )
        return o;
      o = o.parentNode;
    }
    return null;
  }
  function Ba(e) {
    for (var t = sn(e), n = jv(e); n && ZO(n) && Qn(n).position === "static"; )
      n = jv(n);
    return n &&
      (Ln(n) === "html" || (Ln(n) === "body" && Qn(n).position === "static"))
      ? t
      : n || eT(e) || t;
  }
  function Pp(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function za(e, t, n) {
    return ro(e, Cu(t, n));
  }
  function tT(e, t, n) {
    var r = za(e, t, n);
    return r > n ? n : r;
  }
  function Fv() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function Dv(e) {
    return Object.assign({}, Fv(), e);
  }
  function Uv(e, t) {
    return t.reduce(function (n, r) {
      return (n[r] = e), n;
    }, {});
  }
  var nT = function (e, t) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e),
      Dv(typeof e != "number" ? e : Uv(e, Ia))
    );
  };
  function rT(e) {
    var t,
      n = e.state,
      r = e.name,
      o = e.options,
      i = n.elements.arrow,
      a = n.modifiersData.popperOffsets,
      s = Bn(n.placement),
      l = Pp(s),
      u = [Bt, an].indexOf(s) >= 0,
      d = u ? "height" : "width";
    if (!(!i || !a)) {
      var f = nT(o.padding, n),
        p = Tp(i),
        y = l === "y" ? Lt : Bt,
        m = l === "y" ? on : an,
        w =
          n.rects.reference[d] +
          n.rects.reference[l] -
          a[l] -
          n.rects.popper[d],
        P = a[l] - n.rects.reference[l],
        b = Ba(i),
        g = b ? (l === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
        v = w / 2 - P / 2,
        k = f[y],
        O = g - p[d] - f[m],
        R = g / 2 - p[d] / 2 + v,
        T = za(k, R, O),
        A = l;
      n.modifiersData[r] = ((t = {}), (t[A] = T), (t.centerOffset = T - R), t);
    }
  }
  function oT(e) {
    var t = e.state,
      n = e.options,
      r = n.element,
      o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null &&
      ((typeof o == "string" &&
        ((o = t.elements.popper.querySelector(o)), !o)) ||
        (zv(t.elements.popper, o) && (t.elements.arrow = o)));
  }
  const iT = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: rT,
    effect: oT,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function si(e) {
    return e.split("-")[1];
  }
  var aT = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function sT(e) {
    var t = e.x,
      n = e.y,
      r = window,
      o = r.devicePixelRatio || 1;
    return { x: ii(t * o) / o || 0, y: ii(n * o) / o || 0 };
  }
  function Wv(e) {
    var t,
      n = e.popper,
      r = e.popperRect,
      o = e.placement,
      i = e.variation,
      a = e.offsets,
      s = e.position,
      l = e.gpuAcceleration,
      u = e.adaptive,
      d = e.roundOffsets,
      f = e.isFixed,
      p = a.x,
      y = p === void 0 ? 0 : p,
      m = a.y,
      w = m === void 0 ? 0 : m,
      P = typeof d == "function" ? d({ x: y, y: w }) : { x: y, y: w };
    (y = P.x), (w = P.y);
    var b = a.hasOwnProperty("x"),
      g = a.hasOwnProperty("y"),
      v = Bt,
      k = Lt,
      O = window;
    if (u) {
      var R = Ba(n),
        T = "clientHeight",
        A = "clientWidth";
      if (
        (R === sn(n) &&
          ((R = Rr(n)),
          Qn(R).position !== "static" &&
            s === "absolute" &&
            ((T = "scrollHeight"), (A = "scrollWidth"))),
        (R = R),
        o === Lt || ((o === Bt || o === an) && i === $a))
      ) {
        k = on;
        var _ =
          f && R === O && O.visualViewport ? O.visualViewport.height : R[T];
        (w -= _ - r.height), (w *= l ? 1 : -1);
      }
      if (o === Bt || ((o === Lt || o === on) && i === $a)) {
        v = an;
        var M =
          f && R === O && O.visualViewport ? O.visualViewport.width : R[A];
        (y -= M - r.width), (y *= l ? 1 : -1);
      }
    }
    var D = Object.assign({ position: s }, u && aT),
      U = d === !0 ? sT({ x: y, y: w }) : { x: y, y: w };
    if (((y = U.x), (w = U.y), l)) {
      var B;
      return Object.assign(
        {},
        D,
        ((B = {}),
        (B[k] = g ? "0" : ""),
        (B[v] = b ? "0" : ""),
        (B.transform =
          (O.devicePixelRatio || 1) <= 1
            ? "translate(" + y + "px, " + w + "px)"
            : "translate3d(" + y + "px, " + w + "px, 0)"),
        B),
      );
    }
    return Object.assign(
      {},
      D,
      ((t = {}),
      (t[k] = g ? w + "px" : ""),
      (t[v] = b ? y + "px" : ""),
      (t.transform = ""),
      t),
    );
  }
  function lT(e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      o = r === void 0 ? !0 : r,
      i = n.adaptive,
      a = i === void 0 ? !0 : i,
      s = n.roundOffsets,
      l = s === void 0 ? !0 : s,
      u = {
        placement: Bn(t.placement),
        variation: si(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: o,
        isFixed: t.options.strategy === "fixed",
      };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        Wv(
          Object.assign({}, u, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: a,
            roundOffsets: l,
          }),
        ),
      )),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          Wv(
            Object.assign({}, u, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l,
            }),
          ),
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  }
  const uT = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: lT,
    data: {},
  };
  var Tu = { passive: !0 };
  function cT(e) {
    var t = e.state,
      n = e.instance,
      r = e.options,
      o = r.scroll,
      i = o === void 0 ? !0 : o,
      a = r.resize,
      s = a === void 0 ? !0 : a,
      l = sn(t.elements.popper),
      u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      i &&
        u.forEach(function (d) {
          d.addEventListener("scroll", n.update, Tu);
        }),
      s && l.addEventListener("resize", n.update, Tu),
      function () {
        i &&
          u.forEach(function (d) {
            d.removeEventListener("scroll", n.update, Tu);
          }),
          s && l.removeEventListener("resize", n.update, Tu);
      }
    );
  }
  const dT = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: cT,
    data: {},
  };
  var fT = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Pu(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
      return fT[t];
    });
  }
  var pT = { start: "end", end: "start" };
  function Vv(e) {
    return e.replace(/start|end/g, function (t) {
      return pT[t];
    });
  }
  function Rp(e) {
    var t = sn(e),
      n = t.pageXOffset,
      r = t.pageYOffset;
    return { scrollLeft: n, scrollTop: r };
  }
  function Np(e) {
    return ai(Rr(e)).left + Rp(e).scrollLeft;
  }
  function hT(e, t) {
    var n = sn(e),
      r = Rr(e),
      o = n.visualViewport,
      i = r.clientWidth,
      a = r.clientHeight,
      s = 0,
      l = 0;
    if (o) {
      (i = o.width), (a = o.height);
      var u = Bv();
      (u || (!u && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
    }
    return { width: i, height: a, x: s + Np(e), y: l };
  }
  function mT(e) {
    var t,
      n = Rr(e),
      r = Rp(e),
      o = (t = e.ownerDocument) == null ? void 0 : t.body,
      i = ro(
        n.scrollWidth,
        n.clientWidth,
        o ? o.scrollWidth : 0,
        o ? o.clientWidth : 0,
      ),
      a = ro(
        n.scrollHeight,
        n.clientHeight,
        o ? o.scrollHeight : 0,
        o ? o.clientHeight : 0,
      ),
      s = -r.scrollLeft + Np(e),
      l = -r.scrollTop;
    return (
      Qn(o || n).direction === "rtl" &&
        (s += ro(n.clientWidth, o ? o.clientWidth : 0) - i),
      { width: i, height: a, x: s, y: l }
    );
  }
  function Ap(e) {
    var t = Qn(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function Hv(e) {
    return ["html", "body", "#document"].indexOf(Ln(e)) >= 0
      ? e.ownerDocument.body
      : ln(e) && Ap(e)
      ? e
      : Hv(Ou(e));
  }
  function ja(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = Hv(e),
      o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
      i = sn(r),
      a = o ? [i].concat(i.visualViewport || [], Ap(r) ? r : []) : r,
      s = t.concat(a);
    return o ? s : s.concat(ja(Ou(a)));
  }
  function _p(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function gT(e, t) {
    var n = ai(e, !1, t === "fixed");
    return (
      (n.top = n.top + e.clientTop),
      (n.left = n.left + e.clientLeft),
      (n.bottom = n.top + e.clientHeight),
      (n.right = n.left + e.clientWidth),
      (n.width = e.clientWidth),
      (n.height = e.clientHeight),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function qv(e, t, n) {
    return t === Iv ? _p(hT(e, n)) : no(t) ? gT(t, n) : _p(mT(Rr(e)));
  }
  function yT(e) {
    var t = ja(Ou(e)),
      n = ["absolute", "fixed"].indexOf(Qn(e).position) >= 0,
      r = n && ln(e) ? Ba(e) : e;
    return no(r)
      ? t.filter(function (o) {
          return no(o) && zv(o, r) && Ln(o) !== "body";
        })
      : [];
  }
  function vT(e, t, n, r) {
    var o = t === "clippingParents" ? yT(e) : [].concat(t),
      i = [].concat(o, [n]),
      a = i[0],
      s = i.reduce(
        function (l, u) {
          var d = qv(e, u, r);
          return (
            (l.top = ro(d.top, l.top)),
            (l.right = Cu(d.right, l.right)),
            (l.bottom = Cu(d.bottom, l.bottom)),
            (l.left = ro(d.left, l.left)),
            l
          );
        },
        qv(e, a, r),
      );
    return (
      (s.width = s.right - s.left),
      (s.height = s.bottom - s.top),
      (s.x = s.left),
      (s.y = s.top),
      s
    );
  }
  function Kv(e) {
    var t = e.reference,
      n = e.element,
      r = e.placement,
      o = r ? Bn(r) : null,
      i = r ? si(r) : null,
      a = t.x + t.width / 2 - n.width / 2,
      s = t.y + t.height / 2 - n.height / 2,
      l;
    switch (o) {
      case Lt:
        l = { x: a, y: t.y - n.height };
        break;
      case on:
        l = { x: a, y: t.y + t.height };
        break;
      case an:
        l = { x: t.x + t.width, y: s };
        break;
      case Bt:
        l = { x: t.x - n.width, y: s };
        break;
      default:
        l = { x: t.x, y: t.y };
    }
    var u = o ? Pp(o) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (i) {
        case oi:
          l[u] = l[u] - (t[d] / 2 - n[d] / 2);
          break;
        case $a:
          l[u] = l[u] + (t[d] / 2 - n[d] / 2);
          break;
      }
    }
    return l;
  }
  function Fa(e, t) {
    t === void 0 && (t = {});
    var n = t,
      r = n.placement,
      o = r === void 0 ? e.placement : r,
      i = n.strategy,
      a = i === void 0 ? e.strategy : i,
      s = n.boundary,
      l = s === void 0 ? zO : s,
      u = n.rootBoundary,
      d = u === void 0 ? Iv : u,
      f = n.elementContext,
      p = f === void 0 ? La : f,
      y = n.altBoundary,
      m = y === void 0 ? !1 : y,
      w = n.padding,
      P = w === void 0 ? 0 : w,
      b = Dv(typeof P != "number" ? P : Uv(P, Ia)),
      g = p === La ? jO : La,
      v = e.rects.popper,
      k = e.elements[m ? g : p],
      O = vT(no(k) ? k : k.contextElement || Rr(e.elements.popper), l, d, a),
      R = ai(e.elements.reference),
      T = Kv({ reference: R, element: v, strategy: "absolute", placement: o }),
      A = _p(Object.assign({}, v, T)),
      _ = p === La ? A : R,
      M = {
        top: O.top - _.top + b.top,
        bottom: _.bottom - O.bottom + b.bottom,
        left: O.left - _.left + b.left,
        right: _.right - O.right + b.right,
      },
      D = e.modifiersData.offset;
    if (p === La && D) {
      var U = D[o];
      Object.keys(M).forEach(function (B) {
        var F = [an, on].indexOf(B) >= 0 ? 1 : -1,
          V = [Lt, on].indexOf(B) >= 0 ? "y" : "x";
        M[B] += U[V] * F;
      });
    }
    return M;
  }
  function bT(e, t) {
    t === void 0 && (t = {});
    var n = t,
      r = n.placement,
      o = n.boundary,
      i = n.rootBoundary,
      a = n.padding,
      s = n.flipVariations,
      l = n.allowedAutoPlacements,
      u = l === void 0 ? Lv : l,
      d = si(r),
      f = d
        ? s
          ? $v
          : $v.filter(function (m) {
              return si(m) === d;
            })
        : Ia,
      p = f.filter(function (m) {
        return u.indexOf(m) >= 0;
      });
    p.length === 0 && (p = f);
    var y = p.reduce(function (m, w) {
      return (
        (m[w] = Fa(e, {
          placement: w,
          boundary: o,
          rootBoundary: i,
          padding: a,
        })[Bn(w)]),
        m
      );
    }, {});
    return Object.keys(y).sort(function (m, w) {
      return y[m] - y[w];
    });
  }
  function wT(e) {
    if (Bn(e) === Ep) return [];
    var t = Pu(e);
    return [Vv(e), t, Vv(t)];
  }
  function xT(e) {
    var t = e.state,
      n = e.options,
      r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var o = n.mainAxis,
          i = o === void 0 ? !0 : o,
          a = n.altAxis,
          s = a === void 0 ? !0 : a,
          l = n.fallbackPlacements,
          u = n.padding,
          d = n.boundary,
          f = n.rootBoundary,
          p = n.altBoundary,
          y = n.flipVariations,
          m = y === void 0 ? !0 : y,
          w = n.allowedAutoPlacements,
          P = t.options.placement,
          b = Bn(P),
          g = b === P,
          v = l || (g || !m ? [Pu(P)] : wT(P)),
          k = [P].concat(v).reduce(function (de, fe) {
            return de.concat(
              Bn(fe) === Ep
                ? bT(t, {
                    placement: fe,
                    boundary: d,
                    rootBoundary: f,
                    padding: u,
                    flipVariations: m,
                    allowedAutoPlacements: w,
                  })
                : fe,
            );
          }, []),
          O = t.rects.reference,
          R = t.rects.popper,
          T = new Map(),
          A = !0,
          _ = k[0],
          M = 0;
        M < k.length;
        M++
      ) {
        var D = k[M],
          U = Bn(D),
          B = si(D) === oi,
          F = [Lt, on].indexOf(U) >= 0,
          V = F ? "width" : "height",
          G = Fa(t, {
            placement: D,
            boundary: d,
            rootBoundary: f,
            altBoundary: p,
            padding: u,
          }),
          H = F ? (B ? an : Bt) : B ? on : Lt;
        O[V] > R[V] && (H = Pu(H));
        var L = Pu(H),
          I = [];
        if (
          (i && I.push(G[U] <= 0),
          s && I.push(G[H] <= 0, G[L] <= 0),
          I.every(function (de) {
            return de;
          }))
        ) {
          (_ = D), (A = !1);
          break;
        }
        T.set(D, I);
      }
      if (A)
        for (
          var z = m ? 3 : 1,
            J = function (de) {
              var fe = k.find(function (ke) {
                var ge = T.get(ke);
                if (ge)
                  return ge.slice(0, de).every(function (me) {
                    return me;
                  });
              });
              if (fe) return (_ = fe), "break";
            },
            re = z;
          re > 0;
          re--
        ) {
          var ie = J(re);
          if (ie === "break") break;
        }
      t.placement !== _ &&
        ((t.modifiersData[r]._skip = !0), (t.placement = _), (t.reset = !0));
    }
  }
  const ST = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: xT,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Gv(e, t, n) {
    return (
      n === void 0 && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function Jv(e) {
    return [Lt, an, on, Bt].some(function (t) {
      return e[t] >= 0;
    });
  }
  function kT(e) {
    var t = e.state,
      n = e.name,
      r = t.rects.reference,
      o = t.rects.popper,
      i = t.modifiersData.preventOverflow,
      a = Fa(t, { elementContext: "reference" }),
      s = Fa(t, { altBoundary: !0 }),
      l = Gv(a, r),
      u = Gv(s, o, i),
      d = Jv(l),
      f = Jv(u);
    (t.modifiersData[n] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: u,
      isReferenceHidden: d,
      hasPopperEscaped: f,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": f,
      }));
  }
  const ET = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: kT,
  };
  function CT(e, t, n) {
    var r = Bn(e),
      o = [Bt, Lt].indexOf(r) >= 0 ? -1 : 1,
      i =
        typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
      a = i[0],
      s = i[1];
    return (
      (a = a || 0),
      (s = (s || 0) * o),
      [Bt, an].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
    );
  }
  function OT(e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      o = n.offset,
      i = o === void 0 ? [0, 0] : o,
      a = Lv.reduce(function (d, f) {
        return (d[f] = CT(f, t.rects, i)), d;
      }, {}),
      s = a[t.placement],
      l = s.x,
      u = s.y;
    t.modifiersData.popperOffsets != null &&
      ((t.modifiersData.popperOffsets.x += l),
      (t.modifiersData.popperOffsets.y += u)),
      (t.modifiersData[r] = a);
  }
  const TT = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: OT,
  };
  function PT(e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = Kv({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  }
  const RT = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: PT,
    data: {},
  };
  function NT(e) {
    return e === "x" ? "y" : "x";
  }
  function AT(e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      o = n.mainAxis,
      i = o === void 0 ? !0 : o,
      a = n.altAxis,
      s = a === void 0 ? !1 : a,
      l = n.boundary,
      u = n.rootBoundary,
      d = n.altBoundary,
      f = n.padding,
      p = n.tether,
      y = p === void 0 ? !0 : p,
      m = n.tetherOffset,
      w = m === void 0 ? 0 : m,
      P = Fa(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: d }),
      b = Bn(t.placement),
      g = si(t.placement),
      v = !g,
      k = Pp(b),
      O = NT(k),
      R = t.modifiersData.popperOffsets,
      T = t.rects.reference,
      A = t.rects.popper,
      _ =
        typeof w == "function"
          ? w(Object.assign({}, t.rects, { placement: t.placement }))
          : w,
      M =
        typeof _ == "number"
          ? { mainAxis: _, altAxis: _ }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, _),
      D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      U = { x: 0, y: 0 };
    if (R) {
      if (i) {
        var B,
          F = k === "y" ? Lt : Bt,
          V = k === "y" ? on : an,
          G = k === "y" ? "height" : "width",
          H = R[k],
          L = H + P[F],
          I = H - P[V],
          z = y ? -A[G] / 2 : 0,
          J = g === oi ? T[G] : A[G],
          re = g === oi ? -A[G] : -T[G],
          ie = t.elements.arrow,
          de = y && ie ? Tp(ie) : { width: 0, height: 0 },
          fe = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : Fv(),
          ke = fe[F],
          ge = fe[V],
          me = za(0, T[G], de[G]),
          De = v
            ? T[G] / 2 - z - me - ke - M.mainAxis
            : J - me - ke - M.mainAxis,
          le = v
            ? -T[G] / 2 + z + me + ge + M.mainAxis
            : re + me + ge + M.mainAxis,
          Me = t.elements.arrow && Ba(t.elements.arrow),
          Ie = Me ? (k === "y" ? Me.clientTop || 0 : Me.clientLeft || 0) : 0,
          tt = (B = D == null ? void 0 : D[k]) != null ? B : 0,
          it = H + De - tt - Ie,
          c = H + le - tt,
          h = za(y ? Cu(L, it) : L, H, y ? ro(I, c) : I);
        (R[k] = h), (U[k] = h - H);
      }
      if (s) {
        var S,
          N = k === "x" ? Lt : Bt,
          $ = k === "x" ? on : an,
          j = R[O],
          Z = O === "y" ? "height" : "width",
          he = j + P[N],
          be = j - P[$],
          ue = [Lt, Bt].indexOf(b) !== -1,
          xe = (S = D == null ? void 0 : D[O]) != null ? S : 0,
          Oe = ue ? he : j - T[Z] - A[Z] - xe + M.altAxis,
          ye = ue ? j + T[Z] + A[Z] - xe - M.altAxis : be,
          W = y && ue ? tT(Oe, j, ye) : za(y ? Oe : he, j, y ? ye : be);
        (R[O] = W), (U[O] = W - j);
      }
      t.modifiersData[r] = U;
    }
  }
  const _T = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: AT,
    requiresIfExists: ["offset"],
  };
  function MT(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function IT(e) {
    return e === sn(e) || !ln(e) ? Rp(e) : MT(e);
  }
  function $T(e) {
    var t = e.getBoundingClientRect(),
      n = ii(t.width) / e.offsetWidth || 1,
      r = ii(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function LT(e, t, n) {
    n === void 0 && (n = !1);
    var r = ln(t),
      o = ln(t) && $T(t),
      i = Rr(t),
      a = ai(e, o, n),
      s = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (r || (!r && !n)) &&
        ((Ln(t) !== "body" || Ap(i)) && (s = IT(t)),
        ln(t)
          ? ((l = ai(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
          : i && (l.x = Np(i))),
      {
        x: a.left + s.scrollLeft - l.x,
        y: a.top + s.scrollTop - l.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function BT(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    e.forEach(function (i) {
      t.set(i.name, i);
    });
    function o(i) {
      n.add(i.name);
      var a = [].concat(i.requires || [], i.requiresIfExists || []);
      a.forEach(function (s) {
        if (!n.has(s)) {
          var l = t.get(s);
          l && o(l);
        }
      }),
        r.push(i);
    }
    return (
      e.forEach(function (i) {
        n.has(i.name) || o(i);
      }),
      r
    );
  }
  function zT(e) {
    var t = BT(e);
    return JO.reduce(function (n, r) {
      return n.concat(
        t.filter(function (o) {
          return o.phase === r;
        }),
      );
    }, []);
  }
  function jT(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  function FT(e) {
    var t = e.reduce(function (n, r) {
      var o = n[r.name];
      return (
        (n[r.name] = o
          ? Object.assign({}, o, r, {
              options: Object.assign({}, o.options, r.options),
              data: Object.assign({}, o.data, r.data),
            })
          : r),
        n
      );
    }, {});
    return Object.keys(t).map(function (n) {
      return t[n];
    });
  }
  var Yv = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Xv() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function DT(e) {
    e === void 0 && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = n === void 0 ? [] : n,
      o = t.defaultOptions,
      i = o === void 0 ? Yv : o;
    return function (a, s, l) {
      l === void 0 && (l = i);
      var u = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Yv, i),
          modifiersData: {},
          elements: { reference: a, popper: s },
          attributes: {},
          styles: {},
        },
        d = [],
        f = !1,
        p = {
          state: u,
          setOptions: function (w) {
            var P = typeof w == "function" ? w(u.options) : w;
            m(),
              (u.options = Object.assign({}, i, u.options, P)),
              (u.scrollParents = {
                reference: no(a)
                  ? ja(a)
                  : a.contextElement
                  ? ja(a.contextElement)
                  : [],
                popper: ja(s),
              });
            var b = zT(FT([].concat(r, u.options.modifiers)));
            return (
              (u.orderedModifiers = b.filter(function (g) {
                return g.enabled;
              })),
              y(),
              p.update()
            );
          },
          forceUpdate: function () {
            if (!f) {
              var w = u.elements,
                P = w.reference,
                b = w.popper;
              if (Xv(P, b)) {
                (u.rects = {
                  reference: LT(P, Ba(b), u.options.strategy === "fixed"),
                  popper: Tp(b),
                }),
                  (u.reset = !1),
                  (u.placement = u.options.placement),
                  u.orderedModifiers.forEach(function (A) {
                    return (u.modifiersData[A.name] = Object.assign(
                      {},
                      A.data,
                    ));
                  });
                for (var g = 0; g < u.orderedModifiers.length; g++) {
                  if (u.reset === !0) {
                    (u.reset = !1), (g = -1);
                    continue;
                  }
                  var v = u.orderedModifiers[g],
                    k = v.fn,
                    O = v.options,
                    R = O === void 0 ? {} : O,
                    T = v.name;
                  typeof k == "function" &&
                    (u =
                      k({ state: u, options: R, name: T, instance: p }) || u);
                }
              }
            }
          },
          update: jT(function () {
            return new Promise(function (w) {
              p.forceUpdate(), w(u);
            });
          }),
          destroy: function () {
            m(), (f = !0);
          },
        };
      if (!Xv(a, s)) return p;
      p.setOptions(l).then(function (w) {
        !f && l.onFirstUpdate && l.onFirstUpdate(w);
      });
      function y() {
        u.orderedModifiers.forEach(function (w) {
          var P = w.name,
            b = w.options,
            g = b === void 0 ? {} : b,
            v = w.effect;
          if (typeof v == "function") {
            var k = v({ state: u, name: P, instance: p, options: g }),
              O = function () {};
            d.push(k || O);
          }
        });
      }
      function m() {
        d.forEach(function (w) {
          return w();
        }),
          (d = []);
      }
      return p;
    };
  }
  var UT = [dT, RT, uT, QO, TT, ST, _T, iT, ET],
    WT = DT({ defaultModifiers: UT });
  function VT(e) {
    return typeof e == "function" ? e() : e;
  }
  const HT = x.forwardRef(function (e, t) {
      const { children: n, container: r, disablePortal: o = !1 } = e,
        [i, a] = x.useState(null),
        s = Qe(x.isValidElement(n) ? n.ref : null, t);
      if (
        (xn(() => {
          o || a(VT(r) || document.body);
        }, [r, o]),
        xn(() => {
          if (i && !o)
            return (
              Ul(t, i),
              () => {
                Ul(t, null);
              }
            );
        }, [t, i, o]),
        o)
      ) {
        if (x.isValidElement(n)) {
          const l = { ref: s };
          return x.cloneElement(n, l);
        }
        return C(x.Fragment, { children: n });
      }
      return C(x.Fragment, { children: i && vo.createPortal(n, i) });
    }),
    Qv = HT;
  function qT(e) {
    return ae("MuiPopperUnstyled", e);
  }
  oe("MuiPopperUnstyled", ["root"]);
  const KT = [
      "anchorEl",
      "children",
      "component",
      "direction",
      "disablePortal",
      "modifiers",
      "open",
      "ownerState",
      "placement",
      "popperOptions",
      "popperRef",
      "slotProps",
      "slots",
      "TransitionProps",
    ],
    GT = [
      "anchorEl",
      "children",
      "container",
      "direction",
      "disablePortal",
      "keepMounted",
      "modifiers",
      "open",
      "placement",
      "popperOptions",
      "popperRef",
      "style",
      "transition",
      "slotProps",
      "slots",
    ];
  function JT(e, t) {
    if (t === "ltr") return e;
    switch (e) {
      case "bottom-end":
        return "bottom-start";
      case "bottom-start":
        return "bottom-end";
      case "top-end":
        return "top-start";
      case "top-start":
        return "top-end";
      default:
        return e;
    }
  }
  function Mp(e) {
    return typeof e == "function" ? e() : e;
  }
  function YT(e) {
    return e.nodeType !== void 0;
  }
  const XT = () => se({ root: ["root"] }, qT, {}),
    QT = {},
    ZT = x.forwardRef(function (e, t) {
      var n;
      const {
          anchorEl: r,
          children: o,
          component: i,
          direction: a,
          disablePortal: s,
          modifiers: l,
          open: u,
          ownerState: d,
          placement: f,
          popperOptions: p,
          popperRef: y,
          slotProps: m = {},
          slots: w = {},
          TransitionProps: P,
        } = e,
        b = X(e, KT),
        g = x.useRef(null),
        v = Qe(g, t),
        k = x.useRef(null),
        O = Qe(k, y),
        R = x.useRef(O);
      xn(() => {
        R.current = O;
      }, [O]),
        x.useImperativeHandle(y, () => k.current, []);
      const T = JT(f, a),
        [A, _] = x.useState(T),
        [M, D] = x.useState(Mp(r));
      x.useEffect(() => {
        k.current && k.current.forceUpdate();
      }),
        x.useEffect(() => {
          r && D(Mp(r));
        }, [r]),
        xn(() => {
          if (!M || !u) return;
          const G = (I) => {
            _(I.placement);
          };
          let H = [
            { name: "preventOverflow", options: { altBoundary: s } },
            { name: "flip", options: { altBoundary: s } },
            {
              name: "onUpdate",
              enabled: !0,
              phase: "afterWrite",
              fn: ({ state: I }) => {
                G(I);
              },
            },
          ];
          l != null && (H = H.concat(l)),
            p && p.modifiers != null && (H = H.concat(p.modifiers));
          const L = WT(M, g.current, E({ placement: T }, p, { modifiers: H }));
          return (
            R.current(L),
            () => {
              L.destroy(), R.current(null);
            }
          );
        }, [M, s, l, u, p, T]);
      const U = { placement: A };
      P !== null && (U.TransitionProps = P);
      const B = XT(),
        F = (n = i ?? w.root) != null ? n : "div",
        V = kp({
          elementType: F,
          externalSlotProps: m.root,
          externalForwardedProps: b,
          additionalProps: { role: "tooltip", ref: v },
          ownerState: E({}, e, d),
          className: B.root,
        });
      return C(F, E({}, V, { children: typeof o == "function" ? o(U) : o }));
    }),
    e3 = x.forwardRef(function (e, t) {
      const {
          anchorEl: n,
          children: r,
          container: o,
          direction: i = "ltr",
          disablePortal: a = !1,
          keepMounted: s = !1,
          modifiers: l,
          open: u,
          placement: d = "bottom",
          popperOptions: f = QT,
          popperRef: p,
          style: y,
          transition: m = !1,
          slotProps: w = {},
          slots: P = {},
        } = e,
        b = X(e, GT),
        [g, v] = x.useState(!0),
        k = () => {
          v(!1);
        },
        O = () => {
          v(!0);
        };
      if (!s && !u && (!m || g)) return null;
      let R;
      if (o) R = o;
      else if (n) {
        const _ = Mp(n);
        R = _ && YT(_) ? wt(_).body : wt(null).body;
      }
      const T = !u && s && (!m || g) ? "none" : void 0,
        A = m ? { in: u, onEnter: k, onExited: O } : void 0;
      return C(Qv, {
        disablePortal: a,
        container: R,
        children: C(
          ZT,
          E(
            {
              anchorEl: n,
              direction: i,
              disablePortal: a,
              modifiers: l,
              ref: t,
              open: m ? !g : u,
              placement: d,
              popperOptions: f,
              popperRef: p,
              slotProps: w,
              slots: P,
            },
            b,
            {
              style: E({ position: "fixed", top: 0, left: 0, display: T }, y),
              TransitionProps: A,
              children: r,
            },
          ),
        ),
      });
    }),
    t3 = e3;
  function n3(e) {
    const t = wt(e);
    return t.body === e
      ? Or(e).innerWidth > t.documentElement.clientWidth
      : e.scrollHeight > e.clientHeight;
  }
  function Da(e, t) {
    t
      ? e.setAttribute("aria-hidden", "true")
      : e.removeAttribute("aria-hidden");
  }
  function Zv(e) {
    return parseInt(Or(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function r3(e) {
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
  function eb(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, (a) => {
      const s = i.indexOf(a) === -1,
        l = !r3(a);
      s && l && Da(a, o);
    });
  }
  function Ip(e, t) {
    let n = -1;
    return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
  }
  function o3(e, t) {
    const n = [],
      r = e.container;
    if (!t.disableScrollLock) {
      if (n3(r)) {
        const i = By(wt(r));
        n.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r,
        }),
          (r.style.paddingRight = `${Zv(r) + i}px`);
        const a = wt(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          n.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s,
          }),
            (s.style.paddingRight = `${Zv(s) + i}px`);
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = wt(r).body;
      else {
        const i = r.parentElement,
          a = Or(r);
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
  function i3(e) {
    const t = [];
    return (
      [].forEach.call(e.children, (n) => {
        n.getAttribute("aria-hidden") === "true" && t.push(n);
      }),
      t
    );
  }
  class a3 {
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
        t.modalRef && Da(t.modalRef, !1);
      const o = i3(n);
      eb(n, t.mount, t.modalRef, o, !0);
      const i = Ip(this.containers, (a) => a.container === n);
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
      const r = Ip(this.containers, (i) => i.modals.indexOf(t) !== -1),
        o = this.containers[r];
      o.restore || (o.restore = o3(o, n));
    }
    remove(t, n = !0) {
      const r = this.modals.indexOf(t);
      if (r === -1) return r;
      const o = Ip(this.containers, (a) => a.modals.indexOf(t) !== -1),
        i = this.containers[o];
      if (
        (i.modals.splice(i.modals.indexOf(t), 1),
        this.modals.splice(r, 1),
        i.modals.length === 0)
      )
        i.restore && i.restore(),
          t.modalRef && Da(t.modalRef, n),
          eb(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
          this.containers.splice(o, 1);
      else {
        const a = i.modals[i.modals.length - 1];
        a.modalRef && Da(a.modalRef, !1);
      }
      return r;
    }
    isTopModal(t) {
      return (
        this.modals.length > 0 && this.modals[this.modals.length - 1] === t
      );
    }
  }
  function s3(e) {
    return ae("MuiModal", e);
  }
  oe("MuiModal", ["root", "hidden"]);
  const l3 = [
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
    u3 = (e) => {
      const { open: t, exited: n, classes: r } = e;
      return se(
        { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
        s3,
        r,
      );
    };
  function c3(e) {
    return typeof e == "function" ? e() : e;
  }
  function d3(e) {
    return e ? e.props.hasOwnProperty("in") : !1;
  }
  const f3 = new a3(),
    p3 = x.forwardRef(function (e, t) {
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
          disablePortal: p = !1,
          disableRestoreFocus: y = !1,
          disableScrollLock: m = !1,
          hideBackdrop: w = !1,
          keepMounted: P = !1,
          manager: b = f3,
          onBackdropClick: g,
          onClose: v,
          onKeyDown: k,
          open: O,
          onTransitionEnter: R,
          onTransitionExited: T,
          slotProps: A = {},
          slots: _ = {},
        } = e,
        M = X(e, l3),
        [D, U] = x.useState(!O),
        B = x.useRef({}),
        F = x.useRef(null),
        V = x.useRef(null),
        G = Qe(V, t),
        H = d3(o),
        L = (n = e["aria-hidden"]) != null ? n : !0,
        I = () => wt(F.current),
        z = () => (
          (B.current.modalRef = V.current),
          (B.current.mountNode = F.current),
          B.current
        ),
        J = () => {
          b.mount(z(), { disableScrollLock: m }),
            V.current && (V.current.scrollTop = 0);
        },
        re = Tr(() => {
          const S = c3(l) || I().body;
          b.add(z(), S), V.current && J();
        }),
        ie = x.useCallback(() => b.isTopModal(z()), [b]),
        de = Tr((S) => {
          (F.current = S),
            !(!S || !V.current) && (O && ie() ? J() : Da(V.current, L));
        }),
        fe = x.useCallback(() => {
          b.remove(z(), L);
        }, [b, L]);
      x.useEffect(
        () => () => {
          fe();
        },
        [fe],
      ),
        x.useEffect(() => {
          O ? re() : (!H || !a) && fe();
        }, [O, fe, H, a, re]);
      const ke = E({}, e, {
          classes: i,
          closeAfterTransition: a,
          disableAutoFocus: u,
          disableEnforceFocus: d,
          disableEscapeKeyDown: f,
          disablePortal: p,
          disableRestoreFocus: y,
          disableScrollLock: m,
          exited: D,
          hideBackdrop: w,
          keepMounted: P,
        }),
        ge = u3(ke),
        me = () => {
          U(!1), R && R();
        },
        De = () => {
          U(!0), T && T(), a && fe();
        },
        le = (S) => {
          S.target === S.currentTarget &&
            (g && g(S), v && v(S, "backdropClick"));
        },
        Me = (S) => {
          k && k(S),
            !(S.key !== "Escape" || !ie()) &&
              (f || (S.stopPropagation(), v && v(S, "escapeKeyDown")));
        },
        Ie = {};
      o.props.tabIndex === void 0 && (Ie.tabIndex = "-1"),
        H &&
          ((Ie.onEnter = Kf(me, o.props.onEnter)),
          (Ie.onExited = Kf(De, o.props.onExited)));
      const tt = (r = s ?? _.root) != null ? r : "div",
        it = kp({
          elementType: tt,
          externalSlotProps: A.root,
          externalForwardedProps: M,
          additionalProps: { ref: G, role: "presentation", onKeyDown: Me },
          className: ge.root,
          ownerState: ke,
        }),
        c = _.backdrop,
        h = kp({
          elementType: c,
          externalSlotProps: A.backdrop,
          additionalProps: { "aria-hidden": !0, onClick: le, open: O },
          className: ge.backdrop,
          ownerState: ke,
        });
      return !P && !O && (!H || D)
        ? null
        : C(Qv, {
            ref: de,
            container: l,
            disablePortal: p,
            children: te(
              tt,
              E({}, it, {
                children: [
                  !w && c ? C(c, E({}, h)) : null,
                  C(BO, {
                    disableEnforceFocus: d,
                    disableAutoFocus: u,
                    disableRestoreFocus: y,
                    isEnabled: ie,
                    open: O,
                    children: x.cloneElement(o, Ie),
                  }),
                ],
              }),
            ),
          });
    }),
    h3 = p3,
    m3 = ["onChange", "maxRows", "minRows", "style", "value"];
  function Ru(e, t) {
    return parseInt(e[t], 10) || 0;
  }
  const g3 = {
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
  function tb(e) {
    return e == null || Object.keys(e).length === 0;
  }
  const y3 = x.forwardRef(function (e, t) {
      const { onChange: n, maxRows: r, minRows: o = 1, style: i, value: a } = e,
        s = X(e, m3),
        { current: l } = x.useRef(a != null),
        u = x.useRef(null),
        d = Qe(t, u),
        f = x.useRef(null),
        p = x.useRef(0),
        [y, m] = x.useState({}),
        w = x.useCallback(() => {
          const k = u.current,
            O = Or(k).getComputedStyle(k);
          if (O.width === "0px") return {};
          const R = f.current;
          (R.style.width = O.width),
            (R.value = k.value || e.placeholder || "x"),
            R.value.slice(-1) ===
              `
` && (R.value += " ");
          const T = O["box-sizing"],
            A = Ru(O, "padding-bottom") + Ru(O, "padding-top"),
            _ = Ru(O, "border-bottom-width") + Ru(O, "border-top-width"),
            M = R.scrollHeight;
          R.value = "x";
          const D = R.scrollHeight;
          let U = M;
          o && (U = Math.max(Number(o) * D, U)),
            r && (U = Math.min(Number(r) * D, U)),
            (U = Math.max(U, D));
          const B = U + (T === "border-box" ? A + _ : 0),
            F = Math.abs(U - M) <= 1;
          return { outerHeightStyle: B, overflow: F };
        }, [r, o, e.placeholder]),
        P = (k, O) => {
          const { outerHeightStyle: R, overflow: T } = O;
          return p.current < 20 &&
            ((R > 0 && Math.abs((k.outerHeightStyle || 0) - R) > 1) ||
              k.overflow !== T)
            ? ((p.current += 1), { overflow: T, outerHeightStyle: R })
            : k;
        },
        b = x.useCallback(() => {
          const k = w();
          tb(k) || m((O) => P(O, k));
        }, [w]),
        g = () => {
          const k = w();
          tb(k) ||
            vo.flushSync(() => {
              m((O) => P(O, k));
            });
        };
      x.useEffect(() => {
        const k = Gf(() => {
            (p.current = 0), u.current && g();
          }),
          O = Or(u.current);
        O.addEventListener("resize", k);
        let R;
        return (
          typeof ResizeObserver < "u" &&
            ((R = new ResizeObserver(k)), R.observe(u.current)),
          () => {
            k.clear(), O.removeEventListener("resize", k), R && R.disconnect();
          }
        );
      }),
        xn(() => {
          b();
        }),
        x.useEffect(() => {
          p.current = 0;
        }, [a]);
      const v = (k) => {
        (p.current = 0), l || b(), n && n(k);
      };
      return te(x.Fragment, {
        children: [
          C(
            "textarea",
            E(
              {
                value: a,
                onChange: v,
                ref: d,
                rows: o,
                style: E(
                  {
                    height: y.outerHeightStyle,
                    overflow: y.overflow ? "hidden" : null,
                  },
                  i,
                ),
              },
              s,
            ),
          ),
          C("textarea", {
            "aria-hidden": !0,
            className: e.className,
            readOnly: !0,
            ref: f,
            tabIndex: -1,
            style: E({}, g3.shadow, i, { padding: 0 }),
          }),
        ],
      });
    }),
    v3 = y3;
  function b3(e) {
    return ae("MuiSvgIcon", e);
  }
  oe("MuiSvgIcon", [
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
  const w3 = [
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
    x3 = (e) => {
      const { color: t, fontSize: n, classes: r } = e,
        o = {
          root: ["root", t !== "inherit" && `color${Y(t)}`, `fontSize${Y(n)}`],
        };
      return se(o, b3, r);
    },
    S3 = K("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "inherit" && t[`color${Y(n.color)}`],
          t[`fontSize${Y(n.fontSize)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var n, r, o, i, a, s, l, u, d, f, p, y, m, w, P, b, g;
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
          (p =
            (y = (e.vars || e).palette) == null || (m = y[t.color]) == null
              ? void 0
              : m.main) != null
            ? p
            : {
                action:
                  (w = (e.vars || e).palette) == null || (P = w.action) == null
                    ? void 0
                    : P.active,
                disabled:
                  (b = (e.vars || e).palette) == null || (g = b.action) == null
                    ? void 0
                    : g.disabled,
                inherit: void 0,
              }[t.color],
      };
    }),
    nb = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiSvgIcon" }),
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
        p = X(n, w3),
        y = E({}, n, {
          color: i,
          component: a,
          fontSize: s,
          instanceFontSize: e.fontSize,
          inheritViewBox: u,
          viewBox: f,
        }),
        m = {};
      u || (m.viewBox = f);
      const w = x3(y);
      return te(
        S3,
        E(
          {
            as: a,
            className: Q(w.root, o),
            focusable: "false",
            color: l,
            "aria-hidden": d ? void 0 : !0,
            role: d ? "img" : void 0,
            ref: t,
          },
          m,
          p,
          {
            ownerState: y,
            children: [r, d ? C("title", { children: d }) : null],
          },
        ),
      );
    });
  nb.muiName = "SvgIcon";
  const rb = nb;
  function ht(e, t) {
    function n(r, o) {
      return C(
        rb,
        E({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
      );
    }
    return (n.muiName = rb.muiName), x.memo(x.forwardRef(n));
  }
  const k3 = {
      configure: (e) => {
        Zf.configure(e);
      },
    },
    E3 = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          capitalize: Y,
          createChainedFunction: Kf,
          createSvgIcon: ht,
          debounce: Gf,
          deprecatedPropType: oE,
          isMuiElement: wa,
          ownerDocument: wt,
          ownerWindow: Or,
          requirePropFactory: iE,
          setRef: Ul,
          unstable_ClassNameGenerator: k3,
          unstable_useEnhancedEffect: xn,
          unstable_useId: xa,
          unsupportedProp: lE,
          useControlled: Sa,
          useEventCallback: Tr,
          useForkRef: Qe,
          useIsFocusVisible: Xf,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  function $p(e, t) {
    return (
      ($p = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      $p(e, t)
    );
  }
  function ob(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      $p(e, t);
  }
  const ib = { disabled: !1 },
    Nu = pe.createContext(null);
  var C3 = function (e) {
      return e.scrollTop;
    },
    Ua = "unmounted",
    oo = "exited",
    io = "entering",
    li = "entered",
    Lp = "exiting",
    Zn = (function (e) {
      ob(t, e);
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
              ? ((l = oo), (i.appearStatus = io))
              : (l = li)
            : r.unmountOnExit || r.mountOnEnter
            ? (l = Ua)
            : (l = oo),
          (i.state = { status: l }),
          (i.nextCallback = null),
          i
        );
      }
      t.getDerivedStateFromProps = function (r, o) {
        var i = r.in;
        return i && o.status === Ua ? { status: oo } : null;
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
              ? i !== io && i !== li && (o = io)
              : (i === io || i === li) && (o = Lp);
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
            if ((this.cancelNextCallback(), o === io)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var i = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : Ol.findDOMNode(this);
                i && C3(i);
              }
              this.performEnter(r);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === oo &&
              this.setState({ status: Ua });
        }),
        (n.performEnter = function (r) {
          var o = this,
            i = this.props.enter,
            a = this.context ? this.context.isMounting : r,
            s = this.props.nodeRef ? [a] : [Ol.findDOMNode(this), a],
            l = s[0],
            u = s[1],
            d = this.getTimeouts(),
            f = a ? d.appear : d.enter;
          if ((!r && !i) || ib.disabled) {
            this.safeSetState({ status: li }, function () {
              o.props.onEntered(l);
            });
            return;
          }
          this.props.onEnter(l, u),
            this.safeSetState({ status: io }, function () {
              o.props.onEntering(l, u),
                o.onTransitionEnd(f, function () {
                  o.safeSetState({ status: li }, function () {
                    o.props.onEntered(l, u);
                  });
                });
            });
        }),
        (n.performExit = function () {
          var r = this,
            o = this.props.exit,
            i = this.getTimeouts(),
            a = this.props.nodeRef ? void 0 : Ol.findDOMNode(this);
          if (!o || ib.disabled) {
            this.safeSetState({ status: oo }, function () {
              r.props.onExited(a);
            });
            return;
          }
          this.props.onExit(a),
            this.safeSetState({ status: Lp }, function () {
              r.props.onExiting(a),
                r.onTransitionEnd(i.exit, function () {
                  r.safeSetState({ status: oo }, function () {
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
              : Ol.findDOMNode(this),
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
          if (r === Ua) return null;
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
          return pe.createElement(
            Nu.Provider,
            { value: null },
            typeof i == "function"
              ? i(r, a)
              : pe.cloneElement(pe.Children.only(i), a),
          );
        }),
        t
      );
    })(pe.Component);
  (Zn.contextType = Nu), (Zn.propTypes = {});
  function ui() {}
  (Zn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: ui,
    onEntering: ui,
    onEntered: ui,
    onExit: ui,
    onExiting: ui,
    onExited: ui,
  }),
    (Zn.UNMOUNTED = Ua),
    (Zn.EXITED = oo),
    (Zn.ENTERING = io),
    (Zn.ENTERED = li),
    (Zn.EXITING = Lp);
  const ab = Zn;
  function O3(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function Bp(e, t) {
    var n = function (o) {
        return t && x.isValidElement(o) ? t(o) : o;
      },
      r = Object.create(null);
    return (
      e &&
        x.Children.map(e, function (o) {
          return o;
        }).forEach(function (o) {
          r[o.key] = n(o);
        }),
      r
    );
  }
  function T3(e, t) {
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
  function ao(e, t, n) {
    return n[t] != null ? n[t] : e.props[t];
  }
  function P3(e, t) {
    return Bp(e.children, function (n) {
      return x.cloneElement(n, {
        onExited: t.bind(null, n),
        in: !0,
        appear: ao(n, "appear", e),
        enter: ao(n, "enter", e),
        exit: ao(n, "exit", e),
      });
    });
  }
  function R3(e, t, n) {
    var r = Bp(e.children),
      o = T3(t, r);
    return (
      Object.keys(o).forEach(function (i) {
        var a = o[i];
        if (x.isValidElement(a)) {
          var s = i in t,
            l = i in r,
            u = t[i],
            d = x.isValidElement(u) && !u.props.in;
          l && (!s || d)
            ? (o[i] = x.cloneElement(a, {
                onExited: n.bind(null, a),
                in: !0,
                exit: ao(a, "exit", e),
                enter: ao(a, "enter", e),
              }))
            : !l && s && !d
            ? (o[i] = x.cloneElement(a, { in: !1 }))
            : l &&
              s &&
              x.isValidElement(u) &&
              (o[i] = x.cloneElement(a, {
                onExited: n.bind(null, a),
                in: u.props.in,
                exit: ao(a, "exit", e),
                enter: ao(a, "enter", e),
              }));
        }
      }),
      o
    );
  }
  var N3 =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    A3 = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    },
    zp = (function (e) {
      ob(t, e);
      function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var a = i.handleExited.bind(O3(i));
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
          return { children: s ? P3(r, a) : R3(r, i, a), firstRender: !1 };
        }),
        (n.handleExited = function (r, o) {
          var i = Bp(this.props.children);
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
            a = X(r, ["component", "childFactory"]),
            s = this.state.contextValue,
            l = N3(this.state.children).map(i);
          return (
            delete a.appear,
            delete a.enter,
            delete a.exit,
            o === null
              ? pe.createElement(Nu.Provider, { value: s }, l)
              : pe.createElement(
                  Nu.Provider,
                  { value: s },
                  pe.createElement(o, a, l),
                )
          );
        }),
        t
      );
    })(pe.Component);
  (zp.propTypes = {}), (zp.defaultProps = A3);
  const _3 = zp,
    sb = (e) => e.scrollTop;
  function Au(e, t) {
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
  function M3(e) {
    return ae("MuiPaper", e);
  }
  oe("MuiPaper", [
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
  const I3 = ["className", "component", "elevation", "square", "variant"],
    $3 = (e) => {
      const { square: t, elevation: n, variant: r, classes: o } = e,
        i = {
          root: [
            "root",
            r,
            !t && "rounded",
            r === "elevation" && `elevation${n}`,
          ],
        };
      return se(i, M3, o);
    },
    L3 = K("div", {
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
                backgroundImage: `linear-gradient(${Le(
                  "#fff",
                  _v(t.elevation),
                )}, ${Le("#fff", _v(t.elevation))})`,
              },
            e.vars && {
              backgroundImage:
                (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
            },
          ),
      );
    }),
    B3 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiPaper" }),
        {
          className: r,
          component: o = "div",
          elevation: i = 1,
          square: a = !1,
          variant: s = "elevation",
        } = n,
        l = X(n, I3),
        u = E({}, n, { component: o, elevation: i, square: a, variant: s }),
        d = $3(u);
      return C(
        L3,
        E({ as: o, ownerState: u, className: Q(d.root, r), ref: t }, l),
      );
    }),
    so = B3;
  function z3(e) {
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
      [d, f] = x.useState(!1),
      p = Q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
      y = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
      m = Q(n.child, d && n.childLeaving, r && n.childPulsate);
    return (
      !s && !d && f(!0),
      x.useEffect(() => {
        if (!s && l != null) {
          const w = setTimeout(l, u);
          return () => {
            clearTimeout(w);
          };
        }
      }, [l, s, u]),
      C("span", {
        className: p,
        style: y,
        children: C("span", { className: m }),
      })
    );
  }
  const j3 = oe("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    un = j3,
    F3 = ["center", "classes", "className"];
  let _u = (e) => e,
    lb,
    ub,
    cb,
    db;
  const jp = 550,
    D3 = 80,
    U3 = ei(
      lb ||
        (lb = _u`
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
    W3 = ei(
      ub ||
        (ub = _u`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
    ),
    V3 = ei(
      cb ||
        (cb = _u`
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
    H3 = K("span", { name: "MuiTouchRipple", slot: "Root" })({
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
    q3 = K(z3, { name: "MuiTouchRipple", slot: "Ripple" })(
      db ||
        (db = _u`
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
      un.rippleVisible,
      U3,
      jp,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      un.ripplePulsate,
      ({ theme: e }) => e.transitions.duration.shorter,
      un.child,
      un.childLeaving,
      W3,
      jp,
      ({ theme: e }) => e.transitions.easing.easeInOut,
      un.childPulsate,
      V3,
      ({ theme: e }) => e.transitions.easing.easeInOut,
    ),
    K3 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTouchRipple" }),
        { center: r = !1, classes: o = {}, className: i } = n,
        a = X(n, F3),
        [s, l] = x.useState([]),
        u = x.useRef(0),
        d = x.useRef(null);
      x.useEffect(() => {
        d.current && (d.current(), (d.current = null));
      }, [s]);
      const f = x.useRef(!1),
        p = x.useRef(null),
        y = x.useRef(null),
        m = x.useRef(null);
      x.useEffect(
        () => () => {
          clearTimeout(p.current);
        },
        [],
      );
      const w = x.useCallback(
          (v) => {
            const {
              pulsate: k,
              rippleX: O,
              rippleY: R,
              rippleSize: T,
              cb: A,
            } = v;
            l((_) => [
              ..._,
              C(
                q3,
                {
                  classes: {
                    ripple: Q(o.ripple, un.ripple),
                    rippleVisible: Q(o.rippleVisible, un.rippleVisible),
                    ripplePulsate: Q(o.ripplePulsate, un.ripplePulsate),
                    child: Q(o.child, un.child),
                    childLeaving: Q(o.childLeaving, un.childLeaving),
                    childPulsate: Q(o.childPulsate, un.childPulsate),
                  },
                  timeout: jp,
                  pulsate: k,
                  rippleX: O,
                  rippleY: R,
                  rippleSize: T,
                },
                u.current,
              ),
            ]),
              (u.current += 1),
              (d.current = A);
          },
          [o],
        ),
        P = x.useCallback(
          (v = {}, k = {}, O = () => {}) => {
            const {
              pulsate: R = !1,
              center: T = r || k.pulsate,
              fakeElement: A = !1,
            } = k;
            if ((v == null ? void 0 : v.type) === "mousedown" && f.current) {
              f.current = !1;
              return;
            }
            (v == null ? void 0 : v.type) === "touchstart" && (f.current = !0);
            const _ = A ? null : m.current,
              M = _
                ? _.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let D, U, B;
            if (
              T ||
              v === void 0 ||
              (v.clientX === 0 && v.clientY === 0) ||
              (!v.clientX && !v.touches)
            )
              (D = Math.round(M.width / 2)), (U = Math.round(M.height / 2));
            else {
              const { clientX: F, clientY: V } =
                v.touches && v.touches.length > 0 ? v.touches[0] : v;
              (D = Math.round(F - M.left)), (U = Math.round(V - M.top));
            }
            if (T)
              (B = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3)),
                B % 2 === 0 && (B += 1);
            else {
              const F =
                  Math.max(Math.abs((_ ? _.clientWidth : 0) - D), D) * 2 + 2,
                V = Math.max(Math.abs((_ ? _.clientHeight : 0) - U), U) * 2 + 2;
              B = Math.sqrt(F ** 2 + V ** 2);
            }
            v != null && v.touches
              ? y.current === null &&
                ((y.current = () => {
                  w({
                    pulsate: R,
                    rippleX: D,
                    rippleY: U,
                    rippleSize: B,
                    cb: O,
                  });
                }),
                (p.current = setTimeout(() => {
                  y.current && (y.current(), (y.current = null));
                }, D3)))
              : w({ pulsate: R, rippleX: D, rippleY: U, rippleSize: B, cb: O });
          },
          [r, w],
        ),
        b = x.useCallback(() => {
          P({}, { pulsate: !0 });
        }, [P]),
        g = x.useCallback((v, k) => {
          if (
            (clearTimeout(p.current),
            (v == null ? void 0 : v.type) === "touchend" && y.current)
          ) {
            y.current(),
              (y.current = null),
              (p.current = setTimeout(() => {
                g(v, k);
              }));
            return;
          }
          (y.current = null),
            l((O) => (O.length > 0 ? O.slice(1) : O)),
            (d.current = k);
        }, []);
      return (
        x.useImperativeHandle(t, () => ({ pulsate: b, start: P, stop: g }), [
          b,
          P,
          g,
        ]),
        C(
          H3,
          E({ className: Q(un.root, o.root, i), ref: m }, a, {
            children: C(_3, { component: null, exit: !0, children: s }),
          }),
        )
      );
    }),
    G3 = K3;
  function J3(e) {
    return ae("MuiButtonBase", e);
  }
  const Y3 = oe("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    X3 = Y3,
    Q3 = [
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
    Z3 = (e) => {
      const {
          disabled: t,
          focusVisible: n,
          focusVisibleClassName: r,
          classes: o,
        } = e,
        i = se({ root: ["root", t && "disabled", n && "focusVisible"] }, J3, o);
      return n && r && (i.root += ` ${r}`), i;
    },
    eP = K("button", {
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
      [`&.${X3.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    }),
    tP = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiButtonBase" }),
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
          LinkComponent: p = "a",
          onBlur: y,
          onClick: m,
          onContextMenu: w,
          onDragLeave: P,
          onFocus: b,
          onFocusVisible: g,
          onKeyDown: v,
          onKeyUp: k,
          onMouseDown: O,
          onMouseLeave: R,
          onMouseUp: T,
          onTouchEnd: A,
          onTouchMove: _,
          onTouchStart: M,
          tabIndex: D = 0,
          TouchRippleProps: U,
          touchRippleRef: B,
          type: F,
        } = n,
        V = X(n, Q3),
        G = x.useRef(null),
        H = x.useRef(null),
        L = Qe(H, B),
        { isFocusVisibleRef: I, onFocus: z, onBlur: J, ref: re } = Xf(),
        [ie, de] = x.useState(!1);
      l && ie && de(!1),
        x.useImperativeHandle(
          r,
          () => ({
            focusVisible: () => {
              de(!0), G.current.focus();
            },
          }),
          [],
        );
      const [fe, ke] = x.useState(!1);
      x.useEffect(() => {
        ke(!0);
      }, []);
      const ge = fe && !u && !l;
      x.useEffect(() => {
        ie && f && !u && fe && H.current.pulsate();
      }, [u, f, ie, fe]);
      function me(W, Re, Ue = d) {
        return Tr(
          (at) => (Re && Re(at), !Ue && H.current && H.current[W](at), !0),
        );
      }
      const De = me("start", O),
        le = me("stop", w),
        Me = me("stop", P),
        Ie = me("stop", T),
        tt = me("stop", (W) => {
          ie && W.preventDefault(), R && R(W);
        }),
        it = me("start", M),
        c = me("stop", A),
        h = me("stop", _),
        S = me(
          "stop",
          (W) => {
            J(W), I.current === !1 && de(!1), y && y(W);
          },
          !1,
        ),
        N = Tr((W) => {
          G.current || (G.current = W.currentTarget),
            z(W),
            I.current === !0 && (de(!0), g && g(W)),
            b && b(W);
        }),
        $ = () => {
          const W = G.current;
          return s && s !== "button" && !(W.tagName === "A" && W.href);
        },
        j = x.useRef(!1),
        Z = Tr((W) => {
          f &&
            !j.current &&
            ie &&
            H.current &&
            W.key === " " &&
            ((j.current = !0),
            H.current.stop(W, () => {
              H.current.start(W);
            })),
            W.target === W.currentTarget &&
              $() &&
              W.key === " " &&
              W.preventDefault(),
            v && v(W),
            W.target === W.currentTarget &&
              $() &&
              W.key === "Enter" &&
              !l &&
              (W.preventDefault(), m && m(W));
        }),
        he = Tr((W) => {
          f &&
            W.key === " " &&
            H.current &&
            ie &&
            !W.defaultPrevented &&
            ((j.current = !1),
            H.current.stop(W, () => {
              H.current.pulsate(W);
            })),
            k && k(W),
            m &&
              W.target === W.currentTarget &&
              $() &&
              W.key === " " &&
              !W.defaultPrevented &&
              m(W);
        });
      let be = s;
      be === "button" && (V.href || V.to) && (be = p);
      const ue = {};
      be === "button"
        ? ((ue.type = F === void 0 ? "button" : F), (ue.disabled = l))
        : (!V.href && !V.to && (ue.role = "button"),
          l && (ue["aria-disabled"] = l));
      const xe = Qe(t, re, G),
        Oe = E({}, n, {
          centerRipple: o,
          component: s,
          disabled: l,
          disableRipple: u,
          disableTouchRipple: d,
          focusRipple: f,
          tabIndex: D,
          focusVisible: ie,
        }),
        ye = Z3(Oe);
      return te(
        eP,
        E(
          {
            as: be,
            className: Q(ye.root, a),
            ownerState: Oe,
            onBlur: S,
            onClick: m,
            onContextMenu: le,
            onFocus: N,
            onKeyDown: Z,
            onKeyUp: he,
            onMouseDown: De,
            onMouseLeave: tt,
            onMouseUp: Ie,
            onDragLeave: Me,
            onTouchEnd: c,
            onTouchMove: h,
            onTouchStart: it,
            ref: xe,
            tabIndex: l ? -1 : D,
            type: F,
          },
          ue,
          V,
          { children: [i, ge ? C(G3, E({ ref: L, center: o }, U)) : null] },
        ),
      );
    }),
    ci = tP;
  function nP(e) {
    return ae("MuiAlert", e);
  }
  const rP = oe("MuiAlert", [
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
    fb = rP;
  function oP(e) {
    return ae("MuiIconButton", e);
  }
  const iP = oe("MuiIconButton", [
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
    aP = iP,
    sP = [
      "edge",
      "children",
      "className",
      "color",
      "disabled",
      "disableFocusRipple",
      "size",
    ],
    lP = (e) => {
      const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
        a = {
          root: [
            "root",
            n && "disabled",
            r !== "default" && `color${Y(r)}`,
            o && `edge${Y(o)}`,
            `size${Y(i)}`,
          ],
        };
      return se(a, oP, t);
    },
    uP = K(ci, {
      name: "MuiIconButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "default" && t[`color${Y(n.color)}`],
          n.edge && t[`edge${Y(n.edge)}`],
          t[`size${Y(n.size)}`],
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
                : Le(e.palette.action.active, e.palette.action.hoverOpacity),
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
                      : Le(r.main, e.palette.action.hoverOpacity),
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
            [`&.${aP.disabled}`]: {
              backgroundColor: "transparent",
              color: (e.vars || e).palette.action.disabled,
            },
          },
        );
      },
    ),
    cP = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiIconButton" }),
        {
          edge: r = !1,
          children: o,
          className: i,
          color: a = "default",
          disabled: s = !1,
          disableFocusRipple: l = !1,
          size: u = "medium",
        } = n,
        d = X(n, sP),
        f = E({}, n, {
          edge: r,
          color: a,
          disabled: s,
          disableFocusRipple: l,
          size: u,
        }),
        p = lP(f);
      return C(
        uP,
        E(
          {
            className: Q(p.root, i),
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
    zn = cP,
    dP = ht(
      C("path", {
        d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
      }),
      "SuccessOutlined",
    ),
    fP = ht(
      C("path", {
        d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
      }),
      "ReportProblemOutlined",
    ),
    pP = ht(
      C("path", {
        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
      }),
      "ErrorOutline",
    ),
    hP = ht(
      C("path", {
        d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
      }),
      "InfoOutlined",
    ),
    mP = ht(
      C("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Close",
    ),
    gP = [
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
    yP = (e) => {
      const { variant: t, color: n, severity: r, classes: o } = e,
        i = {
          root: ["root", `${t}${Y(n || r)}`, `${t}`],
          icon: ["icon"],
          message: ["message"],
          action: ["action"],
        };
      return se(i, nP, o);
    },
    vP = K(so, {
      name: "MuiAlert",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${Y(n.color || n.severity)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      const n = e.palette.mode === "light" ? ni : ri,
        r = e.palette.mode === "light" ? ri : ni,
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
            [`& .${fb.icon}`]: e.vars
              ? { color: e.vars.palette.Alert[`${o}IconColor`] }
              : { color: e.palette[o].main },
          },
        o &&
          t.variant === "outlined" && {
            color: e.vars
              ? e.vars.palette.Alert[`${o}Color`]
              : n(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${fb.icon}`]: e.vars
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
    bP = K("div", {
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
    wP = K("div", {
      name: "MuiAlert",
      slot: "Message",
      overridesResolver: (e, t) => t.message,
    })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
    pb = K("div", {
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
    hb = {
      success: C(dP, { fontSize: "inherit" }),
      warning: C(fP, { fontSize: "inherit" }),
      error: C(pP, { fontSize: "inherit" }),
      info: C(hP, { fontSize: "inherit" }),
    },
    xP = x.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = ce({ props: e, name: "MuiAlert" }),
        {
          action: u,
          children: d,
          className: f,
          closeText: p = "Close",
          color: y,
          components: m = {},
          componentsProps: w = {},
          icon: P,
          iconMapping: b = hb,
          onClose: g,
          role: v = "alert",
          severity: k = "success",
          slotProps: O = {},
          slots: R = {},
          variant: T = "standard",
        } = l,
        A = X(l, gP),
        _ = E({}, l, { color: y, severity: k, variant: T }),
        M = yP(_),
        D =
          (n = (r = R.closeButton) != null ? r : m.CloseButton) != null
            ? n
            : zn,
        U = (o = (i = R.closeIcon) != null ? i : m.CloseIcon) != null ? o : mP,
        B = (a = O.closeButton) != null ? a : w.closeButton,
        F = (s = O.closeIcon) != null ? s : w.closeIcon;
      return te(
        vP,
        E(
          {
            role: v,
            elevation: 0,
            ownerState: _,
            className: Q(M.root, f),
            ref: t,
          },
          A,
          {
            children: [
              P !== !1
                ? C(bP, {
                    ownerState: _,
                    className: M.icon,
                    children: P || b[k] || hb[k],
                  })
                : null,
              C(wP, { ownerState: _, className: M.message, children: d }),
              u != null
                ? C(pb, { ownerState: _, className: M.action, children: u })
                : null,
              u == null && g
                ? C(pb, {
                    ownerState: _,
                    className: M.action,
                    children: C(
                      D,
                      E(
                        {
                          size: "small",
                          "aria-label": p,
                          title: p,
                          color: "inherit",
                          onClick: g,
                        },
                        B,
                        { children: C(U, E({ fontSize: "small" }, F)) },
                      ),
                    ),
                  })
                : null,
            ],
          },
        ),
      );
    }),
    SP = xP;
  function kP(e) {
    return ae("MuiTypography", e);
  }
  oe("MuiTypography", [
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
  const EP = [
      "align",
      "className",
      "component",
      "gutterBottom",
      "noWrap",
      "paragraph",
      "variant",
      "variantMapping",
    ],
    CP = (e) => {
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
            e.align !== "inherit" && `align${Y(t)}`,
            n && "gutterBottom",
            r && "noWrap",
            o && "paragraph",
          ],
        };
      return se(s, kP, a);
    },
    OP = K("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.variant && t[n.variant],
          n.align !== "inherit" && t[`align${Y(n.align)}`],
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
    mb = {
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
    TP = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main",
    },
    PP = (e) => TP[e] || e,
    RP = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTypography" }),
        r = PP(n.color),
        o = bp(E({}, n, { color: r })),
        {
          align: i = "inherit",
          className: a,
          component: s,
          gutterBottom: l = !1,
          noWrap: u = !1,
          paragraph: d = !1,
          variant: f = "body1",
          variantMapping: p = mb,
        } = o,
        y = X(o, EP),
        m = E({}, o, {
          align: i,
          color: r,
          className: a,
          component: s,
          gutterBottom: l,
          noWrap: u,
          paragraph: d,
          variant: f,
          variantMapping: p,
        }),
        w = s || (d ? "p" : p[f] || mb[f]) || "span",
        P = CP(m);
      return C(
        OP,
        E({ as: w, ref: t, ownerState: m, className: Q(P.root, a) }, y),
      );
    }),
    Ot = RP;
  function NP(e) {
    return ae("MuiAppBar", e);
  }
  oe("MuiAppBar", [
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
  const AP = ["className", "color", "enableColorOnDark", "position"],
    _P = (e) => {
      const { color: t, position: n, classes: r } = e,
        o = { root: ["root", `color${Y(t)}`, `position${Y(n)}`] };
      return se(o, NP, r);
    },
    Mu = (e, t) =>
      e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t,
    MP = K(so, {
      name: "MuiAppBar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, t[`position${Y(n.position)}`], t[`color${Y(n.color)}`]];
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
                : Mu(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette.AppBar.defaultBg,
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette.text.primary
                : Mu(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette.text.primary,
                  ),
            },
            t.color &&
              !t.color.match(/^(default|inherit|transparent)$/) && {
                "--AppBar-background": t.enableColorOnDark
                  ? e.vars.palette[t.color].main
                  : Mu(
                      e.vars.palette.AppBar.darkBg,
                      e.vars.palette[t.color].main,
                    ),
                "--AppBar-color": t.enableColorOnDark
                  ? e.vars.palette[t.color].contrastText
                  : Mu(
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
    IP = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiAppBar" }),
        {
          className: r,
          color: o = "primary",
          enableColorOnDark: i = !1,
          position: a = "fixed",
        } = n,
        s = X(n, AP),
        l = E({}, n, { color: o, position: a, enableColorOnDark: i }),
        u = _P(l);
      return C(
        MP,
        E(
          {
            square: !0,
            component: "header",
            ownerState: l,
            elevation: 4,
            className: Q(u.root, r, a === "fixed" && "mui-fixed"),
            ref: t,
          },
          s,
        ),
      );
    }),
    $P = IP,
    LP = ["components", "componentsProps", "slots", "slotProps"],
    BP = K(t3, {
      name: "MuiPopper",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    zP = x.forwardRef(function (e, t) {
      var n;
      const r = wv(),
        o = ce({ props: e, name: "MuiPopper" }),
        { components: i, componentsProps: a, slots: s, slotProps: l } = o,
        u = X(o, LP),
        d =
          (n = s == null ? void 0 : s.root) != null
            ? n
            : i == null
            ? void 0
            : i.Root;
      return C(
        BP,
        E(
          {
            direction: r == null ? void 0 : r.direction,
            slots: { root: d },
            slotProps: l ?? a,
          },
          u,
          { ref: t },
        ),
      );
    }),
    gb = zP;
  function lo({ props: e, states: t, muiFormControl: n }) {
    return t.reduce(
      (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
      {},
    );
  }
  const jP = x.createContext(void 0),
    Iu = jP;
  function er() {
    return x.useContext(Iu);
  }
  function FP(e) {
    return C(k5, E({}, e, { defaultTheme: Eu }));
  }
  function yb(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
  }
  function Fp(e, t = !1) {
    return (
      e &&
      ((yb(e.value) && e.value !== "") ||
        (t && yb(e.defaultValue) && e.defaultValue !== ""))
    );
  }
  function DP(e) {
    return e.startAdornment;
  }
  function UP(e) {
    return ae("MuiInputBase", e);
  }
  const WP = oe("MuiInputBase", [
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
    di = WP,
    VP = [
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
    $u = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.formControl && t.formControl,
        n.startAdornment && t.adornedStart,
        n.endAdornment && t.adornedEnd,
        n.error && t.error,
        n.size === "small" && t.sizeSmall,
        n.multiline && t.multiline,
        n.color && t[`color${Y(n.color)}`],
        n.fullWidth && t.fullWidth,
        n.hiddenLabel && t.hiddenLabel,
      ];
    },
    Lu = (e, t) => {
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
    HP = (e) => {
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
          size: p,
          startAdornment: y,
          type: m,
        } = e,
        w = {
          root: [
            "root",
            `color${Y(n)}`,
            r && "disabled",
            o && "error",
            l && "fullWidth",
            a && "focused",
            s && "formControl",
            p === "small" && "sizeSmall",
            d && "multiline",
            y && "adornedStart",
            i && "adornedEnd",
            u && "hiddenLabel",
            f && "readOnly",
          ],
          input: [
            "input",
            r && "disabled",
            m === "search" && "inputTypeSearch",
            d && "inputMultiline",
            p === "small" && "inputSizeSmall",
            u && "inputHiddenLabel",
            y && "inputAdornedStart",
            i && "inputAdornedEnd",
            f && "readOnly",
          ],
        };
      return se(w, UP, t);
    },
    Bu = K("div", {
      name: "MuiInputBase",
      slot: "Root",
      overridesResolver: $u,
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
          [`&.${di.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          E({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" },
      ),
    ),
    zu = K("input", {
      name: "MuiInputBase",
      slot: "Input",
      overridesResolver: Lu,
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
          [`label[data-shrink=false] + .${di.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": i,
            "&:focus::-moz-placeholder": i,
            "&:focus:-ms-input-placeholder": i,
            "&:focus::-ms-input-placeholder": i,
          },
          [`&.${di.disabled}`]: {
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
    qP = C(FP, {
      styles: {
        "@keyframes mui-auto-fill": { from: { display: "block" } },
        "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
      },
    }),
    KP = x.forwardRef(function (e, t) {
      var n;
      const r = ce({ props: e, name: "MuiInputBase" }),
        {
          "aria-describedby": o,
          autoComplete: i,
          autoFocus: a,
          className: s,
          components: l = {},
          componentsProps: u = {},
          defaultValue: d,
          disabled: f,
          disableInjectingGlobalStyles: p,
          endAdornment: y,
          fullWidth: m = !1,
          id: w,
          inputComponent: P = "input",
          inputProps: b = {},
          inputRef: g,
          maxRows: v,
          minRows: k,
          multiline: O = !1,
          name: R,
          onBlur: T,
          onChange: A,
          onClick: _,
          onFocus: M,
          onKeyDown: D,
          onKeyUp: U,
          placeholder: B,
          readOnly: F,
          renderSuffix: V,
          rows: G,
          slotProps: H = {},
          slots: L = {},
          startAdornment: I,
          type: z = "text",
          value: J,
        } = r,
        re = X(r, VP),
        ie = b.value != null ? b.value : J,
        { current: de } = x.useRef(ie != null),
        fe = x.useRef(),
        ke = x.useCallback((ye) => {}, []),
        ge = Qe(fe, g, b.ref, ke),
        [me, De] = x.useState(!1),
        le = er(),
        Me = lo({
          props: r,
          muiFormControl: le,
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
      (Me.focused = le ? le.focused : me),
        x.useEffect(() => {
          !le && f && me && (De(!1), T && T());
        }, [le, f, me, T]);
      const Ie = le && le.onFilled,
        tt = le && le.onEmpty,
        it = x.useCallback(
          (ye) => {
            Fp(ye) ? Ie && Ie() : tt && tt();
          },
          [Ie, tt],
        );
      xn(() => {
        de && it({ value: ie });
      }, [ie, it, de]);
      const c = (ye) => {
          if (Me.disabled) {
            ye.stopPropagation();
            return;
          }
          M && M(ye),
            b.onFocus && b.onFocus(ye),
            le && le.onFocus ? le.onFocus(ye) : De(!0);
        },
        h = (ye) => {
          T && T(ye),
            b.onBlur && b.onBlur(ye),
            le && le.onBlur ? le.onBlur(ye) : De(!1);
        },
        S = (ye, ...W) => {
          if (!de) {
            const Re = ye.target || fe.current;
            if (Re == null) throw new Error(Cr(1));
            it({ value: Re.value });
          }
          b.onChange && b.onChange(ye, ...W), A && A(ye, ...W);
        };
      x.useEffect(() => {
        it(fe.current);
      }, []);
      const N = (ye) => {
        fe.current && ye.currentTarget === ye.target && fe.current.focus(),
          _ && _(ye);
      };
      let $ = P,
        j = b;
      O &&
        $ === "input" &&
        (G
          ? (j = E({ type: void 0, minRows: G, maxRows: G }, j))
          : (j = E({ type: void 0, maxRows: v, minRows: k }, j)),
        ($ = v3));
      const Z = (ye) => {
        it(
          ye.animationName === "mui-auto-fill-cancel"
            ? fe.current
            : { value: "x" },
        );
      };
      x.useEffect(() => {
        le && le.setAdornedStart(!!I);
      }, [le, I]);
      const he = E({}, r, {
          color: Me.color || "primary",
          disabled: Me.disabled,
          endAdornment: y,
          error: Me.error,
          focused: Me.focused,
          formControl: le,
          fullWidth: m,
          hiddenLabel: Me.hiddenLabel,
          multiline: O,
          size: Me.size,
          startAdornment: I,
          type: z,
        }),
        be = HP(he),
        ue = L.root || l.Root || Bu,
        xe = H.root || u.root || {},
        Oe = L.input || l.Input || zu;
      return (
        (j = E({}, j, (n = H.input) != null ? n : u.input)),
        te(x.Fragment, {
          children: [
            !p && qP,
            te(
              ue,
              E(
                {},
                xe,
                !to(ue) && { ownerState: E({}, he, xe.ownerState) },
                { ref: t, onClick: N },
                re,
                {
                  className: Q(be.root, xe.className, s),
                  children: [
                    I,
                    C(Iu.Provider, {
                      value: null,
                      children: C(
                        Oe,
                        E(
                          {
                            ownerState: he,
                            "aria-invalid": Me.error,
                            "aria-describedby": o,
                            autoComplete: i,
                            autoFocus: a,
                            defaultValue: d,
                            disabled: Me.disabled,
                            id: w,
                            onAnimationStart: Z,
                            name: R,
                            placeholder: B,
                            readOnly: F,
                            required: Me.required,
                            rows: G,
                            value: ie,
                            onKeyDown: D,
                            onKeyUp: U,
                            type: z,
                          },
                          j,
                          !to(Oe) && {
                            as: $,
                            ownerState: E({}, he, j.ownerState),
                          },
                          {
                            ref: ge,
                            className: Q(be.input, j.className),
                            onBlur: h,
                            onChange: S,
                            onFocus: c,
                          },
                        ),
                      ),
                    }),
                    y,
                    V ? V(E({}, Me, { startAdornment: I })) : null,
                  ],
                },
              ),
            ),
          ],
        })
      );
    }),
    ju = KP;
  function GP(e) {
    return ae("MuiInput", e);
  }
  const JP = E({}, di, oe("MuiInput", ["root", "underline", "input"])),
    Wa = JP;
  function YP(e) {
    return ae("MuiOutlinedInput", e);
  }
  const XP = E(
      {},
      di,
      oe("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
    ),
    Nr = XP;
  function QP(e) {
    return ae("MuiFilledInput", e);
  }
  const ZP = E({}, di, oe("MuiFilledInput", ["root", "underline", "input"])),
    uo = ZP,
    eR = ht(C("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    tR = [
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
    nR = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    rR = x.forwardRef(function (e, t) {
      const n = Pr(),
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
          onExit: p,
          onExited: y,
          onExiting: m,
          style: w,
          timeout: P = r,
          TransitionComponent: b = ab,
        } = e,
        g = X(e, tR),
        v = x.useRef(null),
        k = Qe(v, a.ref, t),
        O = (U) => (B) => {
          if (U) {
            const F = v.current;
            B === void 0 ? U(F) : U(F, B);
          }
        },
        R = O(f),
        T = O((U, B) => {
          sb(U);
          const F = Au({ style: w, timeout: P, easing: s }, { mode: "enter" });
          (U.style.webkitTransition = n.transitions.create("opacity", F)),
            (U.style.transition = n.transitions.create("opacity", F)),
            u && u(U, B);
        }),
        A = O(d),
        _ = O(m),
        M = O((U) => {
          const B = Au({ style: w, timeout: P, easing: s }, { mode: "exit" });
          (U.style.webkitTransition = n.transitions.create("opacity", B)),
            (U.style.transition = n.transitions.create("opacity", B)),
            p && p(U);
        }),
        D = O(y);
      return C(
        b,
        E(
          {
            appear: i,
            in: l,
            nodeRef: v,
            onEnter: T,
            onEntered: A,
            onEntering: R,
            onExit: M,
            onExited: D,
            onExiting: _,
            addEndListener: (U) => {
              o && o(v.current, U);
            },
            timeout: P,
          },
          g,
          {
            children: (U, B) =>
              x.cloneElement(
                a,
                E(
                  {
                    style: E(
                      {
                        opacity: 0,
                        visibility: U === "exited" && !l ? "hidden" : void 0,
                      },
                      nR[U],
                      w,
                      a.props.style,
                    ),
                    ref: k,
                  },
                  B,
                ),
              ),
          },
        ),
      );
    }),
    oR = rR;
  function iR(e) {
    return ae("MuiBackdrop", e);
  }
  oe("MuiBackdrop", ["root", "invisible"]);
  const aR = [
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
    sR = (e) => {
      const { classes: t, invisible: n } = e;
      return se({ root: ["root", n && "invisible"] }, iR, t);
    },
    lR = K("div", {
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
    uR = x.forwardRef(function (e, t) {
      var n, r, o;
      const i = ce({ props: e, name: "MuiBackdrop" }),
        {
          children: a,
          component: s = "div",
          components: l = {},
          componentsProps: u = {},
          className: d,
          invisible: f = !1,
          open: p,
          slotProps: y = {},
          slots: m = {},
          transitionDuration: w,
          TransitionComponent: P = oR,
        } = i,
        b = X(i, aR),
        g = E({}, i, { component: s, invisible: f }),
        v = sR(g),
        k = (n = y.root) != null ? n : u.root;
      return C(
        P,
        E({ in: p, timeout: w }, b, {
          children: C(
            lR,
            E({ "aria-hidden": !0 }, k, {
              as: (r = (o = m.root) != null ? o : l.Root) != null ? r : s,
              className: Q(v.root, d, k == null ? void 0 : k.className),
              ownerState: E({}, g, k == null ? void 0 : k.ownerState),
              classes: v,
              ref: t,
              children: a,
            }),
          ),
        }),
      );
    }),
    cR = uR,
    dR = ku(),
    fR = RC({
      defaultTheme: dR,
      defaultClassName: "MuiBox-root",
      generateClassName: Zf.generate,
    }),
    Fu = fR;
  function pR(e) {
    return ae("MuiButton", e);
  }
  const hR = oe("MuiButton", [
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
    Du = hR,
    mR = x.createContext({}),
    gR = mR,
    yR = [
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
    vR = (e) => {
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
            `${i}${Y(t)}`,
            `size${Y(o)}`,
            `${i}Size${Y(o)}`,
            t === "inherit" && "colorInherit",
            n && "disableElevation",
            r && "fullWidth",
          ],
          label: ["label"],
          startIcon: ["startIcon", `iconSize${Y(o)}`],
          endIcon: ["endIcon", `iconSize${Y(o)}`],
        },
        l = se(s, pR, a);
      return E({}, a, l);
    },
    vb = (e) =>
      E(
        {},
        e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
        e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
        e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
      ),
    bR = K(ci, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${Y(n.color)}`],
          t[`size${Y(n.size)}`],
          t[`${n.variant}Size${Y(n.size)}`],
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
                  : Le(e.palette.text.primary, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              t.variant === "text" &&
                t.color !== "inherit" && {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                        e.vars.palette.action.hoverOpacity
                      })`
                    : Le(
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
                    : Le(
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
            [`&.${Du.focusVisible}`]: E(
              {},
              t.variant === "contained" && {
                boxShadow: (e.vars || e).shadows[6],
              },
            ),
            [`&.${Du.disabled}`]: E(
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
                : `1px solid ${Le(e.palette[t.color].main, 0.5)}`,
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
          [`&.${Du.focusVisible}`]: { boxShadow: "none" },
          "&:active": { boxShadow: "none" },
          [`&.${Du.disabled}`]: { boxShadow: "none" },
        },
    ),
    wR = K("span", {
      name: "MuiButton",
      slot: "StartIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.startIcon, t[`iconSize${Y(n.size)}`]];
      },
    })(({ ownerState: e }) =>
      E(
        { display: "inherit", marginRight: 8, marginLeft: -4 },
        e.size === "small" && { marginLeft: -2 },
        vb(e),
      ),
    ),
    xR = K("span", {
      name: "MuiButton",
      slot: "EndIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.endIcon, t[`iconSize${Y(n.size)}`]];
      },
    })(({ ownerState: e }) =>
      E(
        { display: "inherit", marginRight: -4, marginLeft: 8 },
        e.size === "small" && { marginRight: -2 },
        vb(e),
      ),
    ),
    SR = x.forwardRef(function (e, t) {
      const n = x.useContext(gR),
        r = Qf(n, e),
        o = ce({ props: r, name: "MuiButton" }),
        {
          children: i,
          color: a = "primary",
          component: s = "button",
          className: l,
          disabled: u = !1,
          disableElevation: d = !1,
          disableFocusRipple: f = !1,
          endIcon: p,
          focusVisibleClassName: y,
          fullWidth: m = !1,
          size: w = "medium",
          startIcon: P,
          type: b,
          variant: g = "text",
        } = o,
        v = X(o, yR),
        k = E({}, o, {
          color: a,
          component: s,
          disabled: u,
          disableElevation: d,
          disableFocusRipple: f,
          fullWidth: m,
          size: w,
          type: b,
          variant: g,
        }),
        O = vR(k),
        R = P && C(wR, { className: O.startIcon, ownerState: k, children: P }),
        T = p && C(xR, { className: O.endIcon, ownerState: k, children: p });
      return te(
        bR,
        E(
          {
            ownerState: k,
            className: Q(n.className, O.root, l),
            component: s,
            disabled: u,
            focusRipple: !f,
            focusVisibleClassName: Q(O.focusVisible, y),
            ref: t,
            type: b,
          },
          v,
          { classes: O, children: [R, i, T] },
        ),
      );
    }),
    Uu = SR;
  function kR(e) {
    return ae("MuiCard", e);
  }
  oe("MuiCard", ["root"]);
  const ER = ["className", "raised"],
    CR = (e) => {
      const { classes: t } = e;
      return se({ root: ["root"] }, kR, t);
    },
    OR = K(so, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })(() => ({ overflow: "hidden" })),
    TR = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiCard" }),
        { className: r, raised: o = !1 } = n,
        i = X(n, ER),
        a = E({}, n, { raised: o }),
        s = CR(a);
      return C(
        OR,
        E(
          {
            className: Q(s.root, r),
            elevation: o ? 8 : void 0,
            ref: t,
            ownerState: a,
          },
          i,
        ),
      );
    }),
    PR = TR;
  function RR(e) {
    return ae("PrivateSwitchBase", e);
  }
  oe("PrivateSwitchBase", [
    "root",
    "checked",
    "disabled",
    "input",
    "edgeStart",
    "edgeEnd",
  ]);
  const NR = [
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
    AR = (e) => {
      const { classes: t, checked: n, disabled: r, edge: o } = e,
        i = {
          root: ["root", n && "checked", r && "disabled", o && `edge${Y(o)}`],
          input: ["input"],
        };
      return se(i, RR, t);
    },
    _R = K(ci)(({ ownerState: e }) =>
      E(
        { padding: 9, borderRadius: "50%" },
        e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
        e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 },
      ),
    ),
    MR = K("input")({
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
    IR = x.forwardRef(function (e, t) {
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
          inputProps: p,
          inputRef: y,
          name: m,
          onBlur: w,
          onChange: P,
          onFocus: b,
          readOnly: g,
          required: v = !1,
          tabIndex: k,
          type: O,
          value: R,
        } = e,
        T = X(e, NR),
        [A, _] = Sa({
          controlled: r,
          default: !!a,
          name: "SwitchBase",
          state: "checked",
        }),
        M = er(),
        D = (L) => {
          b && b(L), M && M.onFocus && M.onFocus(L);
        },
        U = (L) => {
          w && w(L), M && M.onBlur && M.onBlur(L);
        },
        B = (L) => {
          if (L.nativeEvent.defaultPrevented) return;
          const I = L.target.checked;
          _(I), P && P(L, I);
        };
      let F = s;
      M && typeof F > "u" && (F = M.disabled);
      const V = O === "checkbox" || O === "radio",
        G = E({}, e, {
          checked: A,
          disabled: F,
          disableFocusRipple: l,
          edge: u,
        }),
        H = AR(G);
      return te(
        _R,
        E(
          {
            component: "span",
            className: Q(H.root, i),
            centerRipple: !0,
            focusRipple: !l,
            disabled: F,
            tabIndex: null,
            role: void 0,
            onFocus: D,
            onBlur: U,
            ownerState: G,
            ref: t,
          },
          T,
          {
            children: [
              C(
                MR,
                E(
                  {
                    autoFocus: n,
                    checked: r,
                    defaultChecked: a,
                    className: H.input,
                    disabled: F,
                    id: V && f,
                    name: m,
                    onChange: B,
                    readOnly: g,
                    ref: y,
                    required: v,
                    ownerState: G,
                    tabIndex: k,
                    type: O,
                  },
                  O === "checkbox" && R === void 0 ? {} : { value: R },
                  p,
                ),
              ),
              A ? o : d,
            ],
          },
        ),
      );
    }),
    bb = IR,
    $R = ht(
      C("path", {
        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
      }),
      "CheckBoxOutlineBlank",
    ),
    LR = ht(
      C("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      }),
      "CheckBox",
    ),
    BR = ht(
      C("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
      }),
      "IndeterminateCheckBox",
    );
  function zR(e) {
    return ae("MuiCheckbox", e);
  }
  const jR = oe("MuiCheckbox", [
      "root",
      "checked",
      "disabled",
      "indeterminate",
      "colorPrimary",
      "colorSecondary",
    ]),
    Dp = jR,
    FR = [
      "checkedIcon",
      "color",
      "icon",
      "indeterminate",
      "indeterminateIcon",
      "inputProps",
      "size",
      "className",
    ],
    DR = (e) => {
      const { classes: t, indeterminate: n, color: r } = e,
        o = { root: ["root", n && "indeterminate", `color${Y(r)}`] },
        i = se(o, zR, t);
      return E({}, t, i);
    },
    UR = K(bb, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiCheckbox",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.indeterminate && t.indeterminate,
          n.color !== "default" && t[`color${Y(n.color)}`],
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
              : Le(
                  t.color === "default"
                    ? e.palette.action.active
                    : e.palette[t.color].main,
                  e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${Dp.checked}, &.${Dp.indeterminate}`]: {
            color: (e.vars || e).palette[t.color].main,
          },
          [`&.${Dp.disabled}`]: {
            color: (e.vars || e).palette.action.disabled,
          },
        },
      ),
    ),
    WR = C(LR, {}),
    VR = C($R, {}),
    HR = C(BR, {}),
    qR = x.forwardRef(function (e, t) {
      var n, r;
      const o = ce({ props: e, name: "MuiCheckbox" }),
        {
          checkedIcon: i = WR,
          color: a = "primary",
          icon: s = VR,
          indeterminate: l = !1,
          indeterminateIcon: u = HR,
          inputProps: d,
          size: f = "medium",
          className: p,
        } = o,
        y = X(o, FR),
        m = l ? u : s,
        w = l ? u : i,
        P = E({}, o, { color: a, indeterminate: l, size: f }),
        b = DR(P);
      return C(
        UR,
        E(
          {
            type: "checkbox",
            inputProps: E({ "data-indeterminate": l }, d),
            icon: x.cloneElement(m, {
              fontSize: (n = m.props.fontSize) != null ? n : f,
            }),
            checkedIcon: x.cloneElement(w, {
              fontSize: (r = w.props.fontSize) != null ? r : f,
            }),
            ownerState: P,
            ref: t,
            className: Q(b.root, p),
          },
          y,
          { classes: b },
        ),
      );
    }),
    Up = qR,
    KR = QC({
      createStyledComponent: K("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, t) => {
          const { ownerState: n } = e;
          return [
            t.root,
            t[`maxWidth${Y(String(n.maxWidth))}`],
            n.fixed && t.fixed,
            n.disableGutters && t.disableGutters,
          ];
        },
      }),
      useThemeProps: (e) => ce({ props: e, name: "MuiContainer" }),
    }),
    Wp = KR,
    GR = [
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
    JR = (e) => e.classes,
    YR = K("div", {
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
    XR = K(cR, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    QR = x.forwardRef(function (e, t) {
      var n, r, o, i, a, s;
      const l = ce({ name: "MuiModal", props: e }),
        {
          BackdropComponent: u = XR,
          BackdropProps: d,
          closeAfterTransition: f = !1,
          children: p,
          component: y,
          components: m = {},
          componentsProps: w = {},
          disableAutoFocus: P = !1,
          disableEnforceFocus: b = !1,
          disableEscapeKeyDown: g = !1,
          disablePortal: v = !1,
          disableRestoreFocus: k = !1,
          disableScrollLock: O = !1,
          hideBackdrop: R = !1,
          keepMounted: T = !1,
          slotProps: A,
          slots: _,
          theme: M,
        } = l,
        D = X(l, GR),
        [U, B] = x.useState(!0),
        F = {
          closeAfterTransition: f,
          disableAutoFocus: P,
          disableEnforceFocus: b,
          disableEscapeKeyDown: g,
          disablePortal: v,
          disableRestoreFocus: k,
          disableScrollLock: O,
          hideBackdrop: R,
          keepMounted: T,
        },
        V = E({}, l, F, { exited: U }),
        G = JR(V),
        H =
          (n = (r = _ == null ? void 0 : _.root) != null ? r : m.Root) != null
            ? n
            : YR,
        L =
          (o =
            (i = _ == null ? void 0 : _.backdrop) != null ? i : m.Backdrop) !=
          null
            ? o
            : u,
        I = (a = A == null ? void 0 : A.root) != null ? a : w.root,
        z = (s = A == null ? void 0 : A.backdrop) != null ? s : w.backdrop;
      return C(
        h3,
        E(
          {
            slots: { root: H, backdrop: L },
            slotProps: {
              root: () => E({}, Sp(I, V), !to(H) && { as: y, theme: M }),
              backdrop: () => E({}, d, Sp(z, V)),
            },
            onTransitionEnter: () => B(!1),
            onTransitionExited: () => B(!0),
            ref: t,
          },
          D,
          { classes: G },
          F,
          { children: p },
        ),
      );
    }),
    ZR = QR,
    e4 = oe("MuiDivider", [
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
    wb = e4,
    t4 = [
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
    n4 = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = se({ root: ["root", !n && "underline"], input: ["input"] }, QP, t);
      return E({}, t, r);
    },
    r4 = K(Bu, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiFilledInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...$u(e, t), !n.disableUnderline && t.underline];
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
          [`&.${uo.focused}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
          [`&.${uo.disabled}`]: {
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
          [`&.${uo.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${uo.error}`]: {
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
          [`&:hover:not(.${uo.disabled}, .${uo.error}):before`]: {
            borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
          },
          [`&.${uo.disabled}:before`]: { borderBottomStyle: "dotted" },
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
    o4 = K(zu, {
      name: "MuiFilledInput",
      slot: "Input",
      overridesResolver: Lu,
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
    xb = x.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = ce({ props: e, name: "MuiFilledInput" }),
        {
          components: s = {},
          componentsProps: l,
          fullWidth: u = !1,
          inputComponent: d = "input",
          multiline: f = !1,
          slotProps: p,
          slots: y = {},
          type: m = "text",
        } = a,
        w = X(a, t4),
        P = E({}, a, {
          fullWidth: u,
          inputComponent: d,
          multiline: f,
          type: m,
        }),
        b = n4(a),
        g = { root: { ownerState: P }, input: { ownerState: P } },
        v = p ?? l ? tn(p ?? l, g) : g,
        k = (n = (r = y.root) != null ? r : s.Root) != null ? n : r4,
        O = (o = (i = y.input) != null ? i : s.Input) != null ? o : o4;
      return C(
        ju,
        E(
          {
            slots: { root: k, input: O },
            componentsProps: v,
            fullWidth: u,
            inputComponent: d,
            multiline: f,
            ref: t,
            type: m,
          },
          w,
          { classes: b },
        ),
      );
    });
  xb.muiName = "Input";
  const Sb = xb;
  function i4(e) {
    return ae("MuiFormControl", e);
  }
  oe("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
  ]);
  const a4 = [
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
    s4 = (e) => {
      const { classes: t, margin: n, fullWidth: r } = e,
        o = {
          root: ["root", n !== "none" && `margin${Y(n)}`, r && "fullWidth"],
        };
      return se(o, i4, t);
    },
    l4 = K("div", {
      name: "MuiFormControl",
      slot: "Root",
      overridesResolver: ({ ownerState: e }, t) =>
        E({}, t.root, t[`margin${Y(e.margin)}`], e.fullWidth && t.fullWidth),
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
    u4 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiFormControl" }),
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
          margin: p = "none",
          required: y = !1,
          size: m = "medium",
          variant: w = "outlined",
        } = n,
        P = X(n, a4),
        b = E({}, n, {
          color: i,
          component: a,
          disabled: s,
          error: l,
          fullWidth: d,
          hiddenLabel: f,
          margin: p,
          required: y,
          size: m,
          variant: w,
        }),
        g = s4(b),
        [v, k] = x.useState(() => {
          let U = !1;
          return (
            r &&
              x.Children.forEach(r, (B) => {
                if (!wa(B, ["Input", "Select"])) return;
                const F = wa(B, ["Select"]) ? B.props.input : B;
                F && DP(F.props) && (U = !0);
              }),
            U
          );
        }),
        [O, R] = x.useState(() => {
          let U = !1;
          return (
            r &&
              x.Children.forEach(r, (B) => {
                wa(B, ["Input", "Select"]) && Fp(B.props, !0) && (U = !0);
              }),
            U
          );
        }),
        [T, A] = x.useState(!1);
      s && T && A(!1);
      const _ = u !== void 0 && !s ? u : T;
      let M;
      const D = x.useMemo(
        () => ({
          adornedStart: v,
          setAdornedStart: k,
          color: i,
          disabled: s,
          error: l,
          filled: O,
          focused: _,
          fullWidth: d,
          hiddenLabel: f,
          size: m,
          onBlur: () => {
            A(!1);
          },
          onEmpty: () => {
            R(!1);
          },
          onFilled: () => {
            R(!0);
          },
          onFocus: () => {
            A(!0);
          },
          registerEffect: M,
          required: y,
          variant: w,
        }),
        [v, i, s, l, O, _, d, f, M, y, m, w],
      );
      return C(Iu.Provider, {
        value: D,
        children: C(
          l4,
          E({ as: a, ownerState: b, className: Q(g.root, o), ref: t }, P, {
            children: r,
          }),
        ),
      });
    }),
    kb = u4;
  function c4(e) {
    return ae("MuiFormControlLabel", e);
  }
  const d4 = oe("MuiFormControlLabel", [
      "root",
      "labelPlacementStart",
      "labelPlacementTop",
      "labelPlacementBottom",
      "disabled",
      "label",
      "error",
    ]),
    Wu = d4,
    f4 = [
      "checked",
      "className",
      "componentsProps",
      "control",
      "disabled",
      "disableTypography",
      "inputRef",
      "label",
      "labelPlacement",
      "name",
      "onChange",
      "slotProps",
      "value",
    ],
    p4 = (e) => {
      const { classes: t, disabled: n, labelPlacement: r, error: o } = e,
        i = {
          root: [
            "root",
            n && "disabled",
            `labelPlacement${Y(r)}`,
            o && "error",
          ],
          label: ["label", n && "disabled"],
        };
      return se(i, c4, t);
    },
    h4 = K("label", {
      name: "MuiFormControlLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Wu.label}`]: t.label },
          t.root,
          t[`labelPlacement${Y(n.labelPlacement)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          verticalAlign: "middle",
          WebkitTapHighlightColor: "transparent",
          marginLeft: -11,
          marginRight: 16,
          [`&.${Wu.disabled}`]: { cursor: "default" },
        },
        t.labelPlacement === "start" && {
          flexDirection: "row-reverse",
          marginLeft: 16,
          marginRight: -11,
        },
        t.labelPlacement === "top" && {
          flexDirection: "column-reverse",
          marginLeft: 16,
        },
        t.labelPlacement === "bottom" && {
          flexDirection: "column",
          marginLeft: 16,
        },
        {
          [`& .${Wu.label}`]: {
            [`&.${Wu.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
          },
        },
      ),
    ),
    m4 = x.forwardRef(function (e, t) {
      var n;
      const r = ce({ props: e, name: "MuiFormControlLabel" }),
        {
          className: o,
          componentsProps: i = {},
          control: a,
          disabled: s,
          disableTypography: l,
          label: u,
          labelPlacement: d = "end",
          slotProps: f = {},
        } = r,
        p = X(r, f4),
        y = er();
      let m = s;
      typeof m > "u" && typeof a.props.disabled < "u" && (m = a.props.disabled),
        typeof m > "u" && y && (m = y.disabled);
      const w = { disabled: m };
      ["checked", "name", "onChange", "value", "inputRef"].forEach((O) => {
        typeof a.props[O] > "u" && typeof r[O] < "u" && (w[O] = r[O]);
      });
      const P = lo({ props: r, muiFormControl: y, states: ["error"] }),
        b = E({}, r, { disabled: m, labelPlacement: d, error: P.error }),
        g = p4(b),
        v = (n = f.typography) != null ? n : i.typography;
      let k = u;
      return (
        k != null &&
          k.type !== Ot &&
          !l &&
          (k = C(
            Ot,
            E({ component: "span" }, v, {
              className: Q(g.label, v == null ? void 0 : v.className),
              children: k,
            }),
          )),
        te(
          h4,
          E({ className: Q(g.root, o), ownerState: b, ref: t }, p, {
            children: [x.cloneElement(a, w), k],
          }),
        )
      );
    }),
    g4 = m4;
  function y4(e) {
    return ae("MuiFormHelperText", e);
  }
  const v4 = oe("MuiFormHelperText", [
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
    Eb = v4;
  var Cb;
  const b4 = [
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
    w4 = (e) => {
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
            r && `size${Y(r)}`,
            n && "contained",
            s && "focused",
            a && "filled",
            l && "required",
          ],
        };
      return se(u, y4, t);
    },
    x4 = K("p", {
      name: "MuiFormHelperText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.size && t[`size${Y(n.size)}`],
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
          [`&.${Eb.disabled}`]: { color: (e.vars || e).palette.text.disabled },
          [`&.${Eb.error}`]: { color: (e.vars || e).palette.error.main },
        },
        t.size === "small" && { marginTop: 4 },
        t.contained && { marginLeft: 14, marginRight: 14 },
      ),
    ),
    S4 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiFormHelperText" }),
        { children: r, className: o, component: i = "p" } = n,
        a = X(n, b4),
        s = er(),
        l = lo({
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
        d = w4(u);
      return C(
        x4,
        E({ as: i, ownerState: u, className: Q(d.root, o), ref: t }, a, {
          children:
            r === " "
              ? Cb ||
                (Cb = C("span", {
                  className: "notranslate",
                  children: "\u200B",
                }))
              : r,
        }),
      );
    }),
    k4 = S4;
  function E4(e) {
    return ae("MuiFormLabel", e);
  }
  const C4 = oe("MuiFormLabel", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "error",
      "filled",
      "required",
      "asterisk",
    ]),
    Va = C4,
    O4 = [
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
    T4 = (e) => {
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
            `color${Y(n)}`,
            o && "disabled",
            i && "error",
            a && "filled",
            r && "focused",
            s && "required",
          ],
          asterisk: ["asterisk", i && "error"],
        };
      return se(l, E4, t);
    },
    P4 = K("label", {
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
        [`&.${Va.focused}`]: { color: (e.vars || e).palette[t.color].main },
        [`&.${Va.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Va.error}`]: { color: (e.vars || e).palette.error.main },
      }),
    ),
    R4 = K("span", {
      name: "MuiFormLabel",
      slot: "Asterisk",
      overridesResolver: (e, t) => t.asterisk,
    })(({ theme: e }) => ({
      [`&.${Va.error}`]: { color: (e.vars || e).palette.error.main },
    })),
    N4 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiFormLabel" }),
        { children: r, className: o, component: i = "label" } = n,
        a = X(n, O4),
        s = er(),
        l = lo({
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
        d = T4(u);
      return te(
        P4,
        E({ as: i, ownerState: u, className: Q(d.root, o), ref: t }, a, {
          children: [
            r,
            l.required &&
              te(R4, {
                ownerState: u,
                "aria-hidden": !0,
                className: d.asterisk,
                children: ["\u2009", "*"],
              }),
          ],
        }),
      );
    }),
    A4 = N4,
    _4 = x.createContext(),
    Ob = _4;
  function M4(e) {
    return ae("MuiGrid", e);
  }
  const I4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    $4 = ["column-reverse", "column", "row-reverse", "row"],
    L4 = ["nowrap", "wrap-reverse", "wrap"],
    Ha = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    B4 = oe("MuiGrid", [
      "root",
      "container",
      "item",
      "zeroMinWidth",
      ...I4.map((e) => `spacing-xs-${e}`),
      ...$4.map((e) => `direction-xs-${e}`),
      ...L4.map((e) => `wrap-xs-${e}`),
      ...Ha.map((e) => `grid-xs-${e}`),
      ...Ha.map((e) => `grid-sm-${e}`),
      ...Ha.map((e) => `grid-md-${e}`),
      ...Ha.map((e) => `grid-lg-${e}`),
      ...Ha.map((e) => `grid-xl-${e}`),
    ]),
    qa = B4,
    z4 = [
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
  function fi(e) {
    const t = parseFloat(e);
    return `${t}${String(e).replace(String(t), "") || "px"}`;
  }
  function j4({ theme: e, ownerState: t }) {
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
        const a = cu({ values: t.columns, breakpoints: e.breakpoints.values }),
          s = typeof a == "object" ? a[o] : a;
        if (s == null) return r;
        const l = `${Math.round((n / s) * 1e8) / 1e6}%`;
        let u = {};
        if (t.container && t.item && t.columnSpacing !== 0) {
          const d = e.spacing(t.columnSpacing);
          if (d !== "0px") {
            const f = `calc(${l} + ${fi(d)})`;
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
  function F4({ theme: e, ownerState: t }) {
    const n = cu({ values: t.direction, breakpoints: e.breakpoints.values });
    return rn({ theme: e }, n, (r) => {
      const o = { flexDirection: r };
      return (
        r.indexOf("column") === 0 &&
          (o[`& > .${qa.item}`] = { maxWidth: "none" }),
        o
      );
    });
  }
  function Tb({ breakpoints: e, values: t }) {
    let n = "";
    Object.keys(t).forEach((o) => {
      n === "" && t[o] !== 0 && (n = o);
    });
    const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
    return r.slice(0, r.indexOf(n));
  }
  function D4({ theme: e, ownerState: t }) {
    const { container: n, rowSpacing: r } = t;
    let o = {};
    if (n && r !== 0) {
      const i = cu({ values: r, breakpoints: e.breakpoints.values });
      let a;
      typeof i == "object" &&
        (a = Tb({ breakpoints: e.breakpoints.values, values: i })),
        (o = rn({ theme: e }, i, (s, l) => {
          var u;
          const d = e.spacing(s);
          return d !== "0px"
            ? {
                marginTop: `-${fi(d)}`,
                [`& > .${qa.item}`]: { paddingTop: fi(d) },
              }
            : (u = a) != null && u.includes(l)
            ? {}
            : { marginTop: 0, [`& > .${qa.item}`]: { paddingTop: 0 } };
        }));
    }
    return o;
  }
  function U4({ theme: e, ownerState: t }) {
    const { container: n, columnSpacing: r } = t;
    let o = {};
    if (n && r !== 0) {
      const i = cu({ values: r, breakpoints: e.breakpoints.values });
      let a;
      typeof i == "object" &&
        (a = Tb({ breakpoints: e.breakpoints.values, values: i })),
        (o = rn({ theme: e }, i, (s, l) => {
          var u;
          const d = e.spacing(s);
          return d !== "0px"
            ? {
                width: `calc(100% + ${fi(d)})`,
                marginLeft: `-${fi(d)}`,
                [`& > .${qa.item}`]: { paddingLeft: fi(d) },
              }
            : (u = a) != null && u.includes(l)
            ? {}
            : {
                width: "100%",
                marginLeft: 0,
                [`& > .${qa.item}`]: { paddingLeft: 0 },
              };
        }));
    }
    return o;
  }
  function W4(e, t, n = {}) {
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
  const V4 = K("div", {
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
      r && (d = W4(a, u, t));
      const f = [];
      return (
        u.forEach((p) => {
          const y = n[p];
          y && f.push(t[`grid-${p}-${String(y)}`]);
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
    F4,
    D4,
    U4,
    j4,
  );
  function H4(e, t) {
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
  const q4 = (e) => {
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
      n && (u = H4(i, l));
      const d = [];
      l.forEach((p) => {
        const y = e[p];
        y && d.push(`grid-${p}-${String(y)}`);
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
      return se(f, M4, t);
    },
    K4 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiGrid" }),
        { breakpoints: r } = Pr(),
        o = bp(n),
        {
          className: i,
          columns: a,
          columnSpacing: s,
          component: l = "div",
          container: u = !1,
          direction: d = "row",
          item: f = !1,
          rowSpacing: p,
          spacing: y = 0,
          wrap: m = "wrap",
          zeroMinWidth: w = !1,
        } = o,
        P = X(o, z4),
        b = p || y,
        g = s || y,
        v = x.useContext(Ob),
        k = u ? a || 12 : v,
        O = {},
        R = E({}, P);
      r.keys.forEach((_) => {
        P[_] != null && ((O[_] = P[_]), delete R[_]);
      });
      const T = E(
          {},
          o,
          {
            columns: k,
            container: u,
            direction: d,
            item: f,
            rowSpacing: b,
            columnSpacing: g,
            wrap: m,
            zeroMinWidth: w,
            spacing: y,
          },
          O,
          { breakpoints: r.keys },
        ),
        A = q4(T);
      return C(Ob.Provider, {
        value: k,
        children: C(
          V4,
          E({ ownerState: T, className: Q(A.root, i), as: l, ref: t }, R),
        ),
      });
    }),
    Vp = K4,
    G4 = [
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
  function Hp(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  const J4 = {
      entering: { opacity: 1, transform: Hp(1) },
      entered: { opacity: 1, transform: "none" },
    },
    qp =
      typeof navigator < "u" &&
      /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
      /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    Pb = x.forwardRef(function (e, t) {
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
          onExiting: p,
          style: y,
          timeout: m = "auto",
          TransitionComponent: w = ab,
        } = e,
        P = X(e, G4),
        b = x.useRef(),
        g = x.useRef(),
        v = Pr(),
        k = x.useRef(null),
        O = Qe(k, o.ref, t),
        R = (F) => (V) => {
          if (F) {
            const G = k.current;
            V === void 0 ? F(G) : F(G, V);
          }
        },
        T = R(u),
        A = R((F, V) => {
          sb(F);
          const {
            duration: G,
            delay: H,
            easing: L,
          } = Au({ style: y, timeout: m, easing: i }, { mode: "enter" });
          let I;
          m === "auto"
            ? ((I = v.transitions.getAutoHeightDuration(F.clientHeight)),
              (g.current = I))
            : (I = G),
            (F.style.transition = [
              v.transitions.create("opacity", { duration: I, delay: H }),
              v.transitions.create("transform", {
                duration: qp ? I : I * 0.666,
                delay: H,
                easing: L,
              }),
            ].join(",")),
            s && s(F, V);
        }),
        _ = R(l),
        M = R(p),
        D = R((F) => {
          const {
            duration: V,
            delay: G,
            easing: H,
          } = Au({ style: y, timeout: m, easing: i }, { mode: "exit" });
          let L;
          m === "auto"
            ? ((L = v.transitions.getAutoHeightDuration(F.clientHeight)),
              (g.current = L))
            : (L = V),
            (F.style.transition = [
              v.transitions.create("opacity", { duration: L, delay: G }),
              v.transitions.create("transform", {
                duration: qp ? L : L * 0.666,
                delay: qp ? G : G || L * 0.333,
                easing: H,
              }),
            ].join(",")),
            (F.style.opacity = 0),
            (F.style.transform = Hp(0.75)),
            d && d(F);
        }),
        U = R(f),
        B = (F) => {
          m === "auto" && (b.current = setTimeout(F, g.current || 0)),
            n && n(k.current, F);
        };
      return (
        x.useEffect(
          () => () => {
            clearTimeout(b.current);
          },
          [],
        ),
        C(
          w,
          E(
            {
              appear: r,
              in: a,
              nodeRef: k,
              onEnter: A,
              onEntered: _,
              onEntering: T,
              onExit: D,
              onExited: U,
              onExiting: M,
              addEndListener: B,
              timeout: m === "auto" ? null : m,
            },
            P,
            {
              children: (F, V) =>
                x.cloneElement(
                  o,
                  E(
                    {
                      style: E(
                        {
                          opacity: 0,
                          transform: Hp(0.75),
                          visibility: F === "exited" && !a ? "hidden" : void 0,
                        },
                        J4[F],
                        y,
                        o.props.style,
                      ),
                      ref: O,
                    },
                    V,
                  ),
                ),
            },
          ),
        )
      );
    });
  Pb.muiSupportAuto = !0;
  const Kp = Pb,
    Y4 = [
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
    X4 = (e) => {
      const { classes: t, disableUnderline: n } = e,
        r = se({ root: ["root", !n && "underline"], input: ["input"] }, GP, t);
      return E({}, t, r);
    },
    Q4 = K(Bu, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...$u(e, t), !n.disableUnderline && t.underline];
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
            [`&.${Wa.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
            [`&.${Wa.error}`]: {
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
            [`&:hover:not(.${Wa.disabled}, .${Wa.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": { borderBottom: `1px solid ${n}` },
            },
            [`&.${Wa.disabled}:before`]: { borderBottomStyle: "dotted" },
          },
        )
      );
    }),
    Z4 = K(zu, { name: "MuiInput", slot: "Input", overridesResolver: Lu })({}),
    Rb = x.forwardRef(function (e, t) {
      var n, r, o, i;
      const a = ce({ props: e, name: "MuiInput" }),
        {
          disableUnderline: s,
          components: l = {},
          componentsProps: u,
          fullWidth: d = !1,
          inputComponent: f = "input",
          multiline: p = !1,
          slotProps: y,
          slots: m = {},
          type: w = "text",
        } = a,
        P = X(a, Y4),
        b = X4(a),
        g = { root: { ownerState: { disableUnderline: s } } },
        v = y ?? u ? tn(y ?? u, g) : g,
        k = (n = (r = m.root) != null ? r : l.Root) != null ? n : Q4,
        O = (o = (i = m.input) != null ? i : l.Input) != null ? o : Z4;
      return C(
        ju,
        E(
          {
            slots: { root: k, input: O },
            slotProps: v,
            fullWidth: d,
            inputComponent: f,
            multiline: p,
            ref: t,
            type: w,
          },
          P,
          { classes: b },
        ),
      );
    });
  Rb.muiName = "Input";
  const Nb = Rb;
  function eN(e) {
    return ae("MuiInputAdornment", e);
  }
  const tN = oe("MuiInputAdornment", [
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
    Ab = tN;
  var _b;
  const nN = [
      "children",
      "className",
      "component",
      "disablePointerEvents",
      "disableTypography",
      "position",
      "variant",
    ],
    rN = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`position${Y(n.position)}`],
        n.disablePointerEvents === !0 && t.disablePointerEvents,
        t[n.variant],
      ];
    },
    oN = (e) => {
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
            o && `position${Y(o)}`,
            a,
            r && "hiddenLabel",
            i && `size${Y(i)}`,
          ],
        };
      return se(s, eN, t);
    },
    iN = K("div", {
      name: "MuiInputAdornment",
      slot: "Root",
      overridesResolver: rN,
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
          [`&.${Ab.positionStart}&:not(.${Ab.hiddenLabel})`]: { marginTop: 16 },
        },
        t.position === "start" && { marginRight: 8 },
        t.position === "end" && { marginLeft: 8 },
        t.disablePointerEvents === !0 && { pointerEvents: "none" },
      ),
    ),
    aN = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiInputAdornment" }),
        {
          children: r,
          className: o,
          component: i = "div",
          disablePointerEvents: a = !1,
          disableTypography: s = !1,
          position: l,
          variant: u,
        } = n,
        d = X(n, nN),
        f = er() || {};
      let p = u;
      u && f.variant, f && !p && (p = f.variant);
      const y = E({}, n, {
          hiddenLabel: f.hiddenLabel,
          size: f.size,
          disablePointerEvents: a,
          position: l,
          variant: p,
        }),
        m = oN(y);
      return C(Iu.Provider, {
        value: null,
        children: C(
          iN,
          E({ as: i, ownerState: y, className: Q(m.root, o), ref: t }, d, {
            children:
              typeof r == "string" && !s
                ? C(Ot, { color: "text.secondary", children: r })
                : te(x.Fragment, {
                    children: [
                      l === "start"
                        ? _b ||
                          (_b = C("span", {
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
    sN = aN;
  function lN(e) {
    return ae("MuiInputLabel", e);
  }
  oe("MuiInputLabel", [
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
  const uN = ["disableAnimation", "margin", "shrink", "variant", "className"],
    cN = (e) => {
      const {
          classes: t,
          formControl: n,
          size: r,
          shrink: o,
          disableAnimation: i,
          variant: a,
          required: s,
        } = e,
        l = se(
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
          lN,
          t,
        );
      return E({}, t, l);
    },
    dN = K(A4, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiInputLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Va.asterisk}`]: t.asterisk },
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
    fN = x.forwardRef(function (e, t) {
      const n = ce({ name: "MuiInputLabel", props: e }),
        { disableAnimation: r = !1, shrink: o, className: i } = n,
        a = X(n, uN),
        s = er();
      let l = o;
      typeof l > "u" && s && (l = s.filled || s.focused || s.adornedStart);
      const u = lo({
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
        f = cN(d);
      return C(
        dN,
        E(
          { "data-shrink": l, ownerState: d, ref: t, className: Q(f.root, i) },
          a,
          { classes: f },
        ),
      );
    }),
    Mb = fN;
  function pN(e) {
    return ae("MuiLinearProgress", e);
  }
  oe("MuiLinearProgress", [
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
  const hN = ["className", "color", "value", "valueBuffer", "variant"];
  let pi = (e) => e,
    Ib,
    $b,
    Lb,
    Bb,
    zb,
    jb;
  const Gp = 4,
    mN = ei(
      Ib ||
        (Ib = pi`
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
    gN = ei(
      $b ||
        ($b = pi`
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
    yN = ei(
      Lb ||
        (Lb = pi`
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
    vN = (e) => {
      const { classes: t, variant: n, color: r } = e,
        o = {
          root: ["root", `color${Y(r)}`, n],
          dashed: ["dashed", `dashedColor${Y(r)}`],
          bar1: [
            "bar",
            `barColor${Y(r)}`,
            (n === "indeterminate" || n === "query") && "bar1Indeterminate",
            n === "determinate" && "bar1Determinate",
            n === "buffer" && "bar1Buffer",
          ],
          bar2: [
            "bar",
            n !== "buffer" && `barColor${Y(r)}`,
            n === "buffer" && `color${Y(r)}`,
            (n === "indeterminate" || n === "query") && "bar2Indeterminate",
            n === "buffer" && "bar2Buffer",
          ],
        };
      return se(o, pN, t);
    },
    Jp = (e, t) =>
      t === "inherit"
        ? "currentColor"
        : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === "light"
        ? ri(e.palette[t].main, 0.62)
        : ni(e.palette[t].main, 0.5),
    bN = K("span", {
      name: "MuiLinearProgress",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, t[`color${Y(n.color)}`], t[n.variant]];
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
          backgroundColor: Jp(t, e.color),
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
    wN = K("span", {
      name: "MuiLinearProgress",
      slot: "Dashed",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.dashed, t[`dashedColor${Y(n.color)}`]];
      },
    })(
      ({ ownerState: e, theme: t }) => {
        const n = Jp(t, e.color);
        return E(
          { position: "absolute", marginTop: 0, height: "100%", width: "100%" },
          e.color === "inherit" && { opacity: 0.3 },
          {
            backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,
            backgroundSize: "10px 10px",
            backgroundPosition: "0 -23px",
          },
        );
      },
      uu(
        Bb ||
          (Bb = pi`
    animation: ${0} 3s infinite linear;
  `),
        yN,
      ),
    ),
    xN = K("span", {
      name: "MuiLinearProgress",
      slot: "Bar1",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.bar,
          t[`barColor${Y(n.color)}`],
          (n.variant === "indeterminate" || n.variant === "query") &&
            t.bar1Indeterminate,
          n.variant === "determinate" && t.bar1Determinate,
          n.variant === "buffer" && t.bar1Buffer,
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
            transition: `transform .${Gp}s linear`,
          },
          e.variant === "buffer" && {
            zIndex: 1,
            transition: `transform .${Gp}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        uu(
          zb ||
            (zb = pi`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
          mN,
        ),
    ),
    SN = K("span", {
      name: "MuiLinearProgress",
      slot: "Bar2",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.bar,
          t[`barColor${Y(n.color)}`],
          (n.variant === "indeterminate" || n.variant === "query") &&
            t.bar2Indeterminate,
          n.variant === "buffer" && t.bar2Buffer,
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
            backgroundColor: Jp(t, e.color),
            transition: `transform .${Gp}s linear`,
          },
        ),
      ({ ownerState: e }) =>
        (e.variant === "indeterminate" || e.variant === "query") &&
        uu(
          jb ||
            (jb = pi`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
          gN,
        ),
    ),
    kN = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiLinearProgress" }),
        {
          className: r,
          color: o = "primary",
          value: i,
          valueBuffer: a,
          variant: s = "indeterminate",
        } = n,
        l = X(n, hN),
        u = E({}, n, { color: o, variant: s }),
        d = vN(u),
        f = Pr(),
        p = {},
        y = { bar1: {}, bar2: {} };
      if ((s === "determinate" || s === "buffer") && i !== void 0) {
        (p["aria-valuenow"] = Math.round(i)),
          (p["aria-valuemin"] = 0),
          (p["aria-valuemax"] = 100);
        let m = i - 100;
        f.direction === "rtl" && (m = -m),
          (y.bar1.transform = `translateX(${m}%)`);
      }
      if (s === "buffer" && a !== void 0) {
        let m = (a || 0) - 100;
        f.direction === "rtl" && (m = -m),
          (y.bar2.transform = `translateX(${m}%)`);
      }
      return te(
        bN,
        E(
          { className: Q(d.root, r), ownerState: u, role: "progressbar" },
          p,
          { ref: t },
          l,
          {
            children: [
              s === "buffer"
                ? C(wN, { className: d.dashed, ownerState: u })
                : null,
              C(xN, { className: d.bar1, ownerState: u, style: y.bar1 }),
              s === "determinate"
                ? null
                : C(SN, { className: d.bar2, ownerState: u, style: y.bar2 }),
            ],
          },
        ),
      );
    }),
    EN = kN,
    CN = x.createContext({}),
    tr = CN;
  function ON(e) {
    return ae("MuiList", e);
  }
  oe("MuiList", ["root", "padding", "dense", "subheader"]);
  const TN = [
      "children",
      "className",
      "component",
      "dense",
      "disablePadding",
      "subheader",
    ],
    PN = (e) => {
      const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
      return se(
        { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
        ON,
        t,
      );
    },
    RN = K("ul", {
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
    NN = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiList" }),
        {
          children: r,
          className: o,
          component: i = "ul",
          dense: a = !1,
          disablePadding: s = !1,
          subheader: l,
        } = n,
        u = X(n, TN),
        d = x.useMemo(() => ({ dense: a }), [a]),
        f = E({}, n, { component: i, dense: a, disablePadding: s }),
        p = PN(f);
      return C(tr.Provider, {
        value: d,
        children: te(
          RN,
          E({ as: i, className: Q(p.root, o), ref: t, ownerState: f }, u, {
            children: [l, r],
          }),
        ),
      });
    }),
    Fb = NN;
  function AN(e) {
    return ae("MuiListItem", e);
  }
  const _N = oe("MuiListItem", [
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
    hi = _N,
    MN = oe("MuiListItemButton", [
      "root",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    IN = MN;
  function $N(e) {
    return ae("MuiListItemSecondaryAction", e);
  }
  oe("MuiListItemSecondaryAction", ["root", "disableGutters"]);
  const LN = ["className"],
    BN = (e) => {
      const { disableGutters: t, classes: n } = e;
      return se({ root: ["root", t && "disableGutters"] }, $N, n);
    },
    zN = K("div", {
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
    Db = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiListItemSecondaryAction" }),
        { className: r } = n,
        o = X(n, LN),
        i = x.useContext(tr),
        a = E({}, n, { disableGutters: i.disableGutters }),
        s = BN(a);
      return C(zN, E({ className: Q(s.root, r), ownerState: a, ref: t }, o));
    });
  Db.muiName = "ListItemSecondaryAction";
  const Yp = Db,
    jN = ["className"],
    FN = [
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
    DN = (e, t) => {
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
    UN = (e) => {
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
      return se(
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
        AN,
        r,
      );
    },
    WN = K("div", { name: "MuiListItem", slot: "Root", overridesResolver: DN })(
      ({ theme: e, ownerState: t }) =>
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
          !!t.secondaryAction && { [`& > .${IN.root}`]: { paddingRight: 48 } },
          {
            [`&.${hi.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus,
            },
            [`&.${hi.selected}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
              [`&.${hi.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                  : Le(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity +
                        e.palette.action.focusOpacity,
                    ),
              },
            },
            [`&.${hi.disabled}`]: {
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
            [`&.${hi.selected}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                : Le(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.hoverOpacity,
                  ),
              "@media (hover: none)": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                  : Le(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity,
                    ),
              },
            },
          },
          t.hasSecondaryAction && { paddingRight: 48 },
        ),
    ),
    VN = K("li", {
      name: "MuiListItem",
      slot: "Container",
      overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    HN = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiListItem" }),
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
          ContainerProps: { className: p } = {},
          dense: y = !1,
          disabled: m = !1,
          disableGutters: w = !1,
          disablePadding: P = !1,
          divider: b = !1,
          focusVisibleClassName: g,
          secondaryAction: v,
          selected: k = !1,
          slotProps: O = {},
          slots: R = {},
        } = n,
        T = X(n.ContainerProps, jN),
        A = X(n, FN),
        _ = x.useContext(tr),
        M = x.useMemo(
          () => ({
            dense: y || _.dense || !1,
            alignItems: r,
            disableGutters: w,
          }),
          [r, _.dense, y, w],
        ),
        D = x.useRef(null);
      xn(() => {
        o && D.current && D.current.focus();
      }, [o]);
      const U = x.Children.toArray(a),
        B = U.length && wa(U[U.length - 1], ["ListItemSecondaryAction"]),
        F = E({}, n, {
          alignItems: r,
          autoFocus: o,
          button: i,
          dense: M.dense,
          disabled: m,
          disableGutters: w,
          disablePadding: P,
          divider: b,
          hasSecondaryAction: B,
          selected: k,
        }),
        V = UN(F),
        G = Qe(D, t),
        H = R.root || u.Root || WN,
        L = O.root || d.root || {},
        I = E({ className: Q(V.root, L.className, s), disabled: m }, A);
      let z = l || "li";
      return (
        i &&
          ((I.component = l || "div"),
          (I.focusVisibleClassName = Q(hi.focusVisible, g)),
          (z = ci)),
        B
          ? ((z = !I.component && !l ? "div" : z),
            f === "li" &&
              (z === "li"
                ? (z = "div")
                : I.component === "li" && (I.component = "div")),
            C(tr.Provider, {
              value: M,
              children: te(
                VN,
                E(
                  {
                    as: f,
                    className: Q(V.container, p),
                    ref: G,
                    ownerState: F,
                  },
                  T,
                  {
                    children: [
                      C(
                        H,
                        E(
                          {},
                          L,
                          !to(H) && {
                            as: z,
                            ownerState: E({}, F, L.ownerState),
                          },
                          I,
                          { children: U },
                        ),
                      ),
                      U.pop(),
                    ],
                  },
                ),
              ),
            }))
          : C(tr.Provider, {
              value: M,
              children: te(
                H,
                E(
                  {},
                  L,
                  { as: z, ref: G },
                  !to(H) && { ownerState: E({}, F, L.ownerState) },
                  I,
                  { children: [U, v && C(Yp, { children: v })] },
                ),
              ),
            })
      );
    }),
    Ub = HN;
  function qN(e) {
    return ae("MuiListItemIcon", e);
  }
  const KN = oe("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
    Wb = KN,
    GN = ["className"],
    JN = (e) => {
      const { alignItems: t, classes: n } = e;
      return se(
        { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
        qN,
        n,
      );
    },
    YN = K("div", {
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
    XN = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiListItemIcon" }),
        { className: r } = n,
        o = X(n, GN),
        i = x.useContext(tr),
        a = E({}, n, { alignItems: i.alignItems }),
        s = JN(a);
      return C(YN, E({ className: Q(s.root, r), ownerState: a, ref: t }, o));
    }),
    QN = XN;
  function ZN(e) {
    return ae("MuiListItemText", e);
  }
  const eA = oe("MuiListItemText", [
      "root",
      "multiline",
      "dense",
      "inset",
      "primary",
      "secondary",
    ]),
    Vu = eA,
    tA = [
      "children",
      "className",
      "disableTypography",
      "inset",
      "primary",
      "primaryTypographyProps",
      "secondary",
      "secondaryTypographyProps",
    ],
    nA = (e) => {
      const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
      return se(
        {
          root: ["root", n && "inset", i && "dense", r && o && "multiline"],
          primary: ["primary"],
          secondary: ["secondary"],
        },
        ZN,
        t,
      );
    },
    rA = K("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Vu.primary}`]: t.primary },
          { [`& .${Vu.secondary}`]: t.secondary },
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
    oA = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiListItemText" }),
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
        f = X(n, tA),
        { dense: p } = x.useContext(tr);
      let y = s ?? r,
        m = u;
      const w = E({}, n, {
          disableTypography: i,
          inset: a,
          primary: !!y,
          secondary: !!m,
          dense: p,
        }),
        P = nA(w);
      return (
        y != null &&
          y.type !== Ot &&
          !i &&
          (y = C(
            Ot,
            E(
              {
                variant: p ? "body2" : "body1",
                className: P.primary,
                component: l != null && l.variant ? void 0 : "span",
                display: "block",
              },
              l,
              { children: y },
            ),
          )),
        m != null &&
          m.type !== Ot &&
          !i &&
          (m = C(
            Ot,
            E(
              {
                variant: "body2",
                className: P.secondary,
                color: "text.secondary",
                display: "block",
              },
              d,
              { children: m },
            ),
          )),
        te(
          rA,
          E({ className: Q(P.root, o), ownerState: w, ref: t }, f, {
            children: [y, m],
          }),
        )
      );
    }),
    Hu = oA,
    iA = [
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
  function Xp(e, t, n) {
    return e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
      ? null
      : e.firstChild;
  }
  function Vb(e, t, n) {
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
  function Hb(e, t) {
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
  function Ka(e, t, n, r, o, i) {
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
      if (!s.hasAttribute("tabindex") || !Hb(s, i) || l) s = o(e, s, n);
      else return s.focus(), !0;
    }
    return !1;
  }
  const aA = x.forwardRef(function (e, t) {
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
        f = X(e, iA),
        p = x.useRef(null),
        y = x.useRef({
          keys: [],
          repeating: !0,
          previousKeyMatched: !0,
          lastTime: null,
        });
      xn(() => {
        r && p.current.focus();
      }, [r]),
        x.useImperativeHandle(
          n,
          () => ({
            adjustStyleForScrollbar: (g, v) => {
              const k = !p.current.style.width;
              if (g.clientHeight < p.current.clientHeight && k) {
                const O = `${By(wt(g))}px`;
                (p.current.style[
                  v.direction === "rtl" ? "paddingLeft" : "paddingRight"
                ] = O),
                  (p.current.style.width = `calc(100% + ${O})`);
              }
              return p.current;
            },
          }),
          [],
        );
      const m = (g) => {
          const v = p.current,
            k = g.key,
            O = wt(v).activeElement;
          if (k === "ArrowDown") g.preventDefault(), Ka(v, O, l, s, Xp);
          else if (k === "ArrowUp") g.preventDefault(), Ka(v, O, l, s, Vb);
          else if (k === "Home") g.preventDefault(), Ka(v, null, l, s, Xp);
          else if (k === "End") g.preventDefault(), Ka(v, null, l, s, Vb);
          else if (k.length === 1) {
            const R = y.current,
              T = k.toLowerCase(),
              A = performance.now();
            R.keys.length > 0 &&
              (A - R.lastTime > 500
                ? ((R.keys = []),
                  (R.repeating = !0),
                  (R.previousKeyMatched = !0))
                : R.repeating && T !== R.keys[0] && (R.repeating = !1)),
              (R.lastTime = A),
              R.keys.push(T);
            const _ = O && !R.repeating && Hb(O, R);
            R.previousKeyMatched && (_ || Ka(v, O, !1, s, Xp, R))
              ? g.preventDefault()
              : (R.previousKeyMatched = !1);
          }
          u && u(g);
        },
        w = Qe(p, t);
      let P = -1;
      x.Children.forEach(i, (g, v) => {
        x.isValidElement(g) &&
          (g.props.disabled ||
            (((d === "selectedMenu" && g.props.selected) || P === -1) &&
              (P = v)));
      });
      const b = x.Children.map(i, (g, v) => {
        if (v === P) {
          const k = {};
          return (
            o && (k.autoFocus = !0),
            g.props.tabIndex === void 0 &&
              d === "selectedMenu" &&
              (k.tabIndex = 0),
            x.cloneElement(g, k)
          );
        }
        return g;
      });
      return C(
        Fb,
        E(
          {
            role: "menu",
            ref: w,
            className: a,
            onKeyDown: m,
            tabIndex: r ? 0 : -1,
          },
          f,
          { children: b },
        ),
      );
    }),
    sA = aA;
  function lA(e) {
    return ae("MuiPopover", e);
  }
  oe("MuiPopover", ["root", "paper"]);
  const uA = ["onEntering"],
    cA = [
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
  function qb(e, t) {
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
  function Kb(e, t) {
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
  function Gb(e) {
    return [e.horizontal, e.vertical]
      .map((t) => (typeof t == "number" ? `${t}px` : t))
      .join(" ");
  }
  function Qp(e) {
    return typeof e == "function" ? e() : e;
  }
  const dA = (e) => {
      const { classes: t } = e;
      return se({ root: ["root"], paper: ["paper"] }, lA, t);
    },
    fA = K(ZR, {
      name: "MuiPopover",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    pA = K(so, {
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
    hA = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiPopover" }),
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
          marginThreshold: p = 16,
          open: y,
          PaperProps: m = {},
          transformOrigin: w = { vertical: "top", horizontal: "left" },
          TransitionComponent: P = Kp,
          transitionDuration: b = "auto",
          TransitionProps: { onEntering: g } = {},
        } = n,
        v = X(n.TransitionProps, uA),
        k = X(n, cA),
        O = x.useRef(),
        R = Qe(O, m.ref),
        T = E({}, n, {
          anchorOrigin: i,
          anchorReference: s,
          elevation: f,
          marginThreshold: p,
          PaperProps: m,
          transformOrigin: w,
          TransitionComponent: P,
          transitionDuration: b,
          TransitionProps: v,
        }),
        A = dA(T),
        _ = x.useCallback(() => {
          if (s === "anchorPosition") return a;
          const I = Qp(o),
            z = (
              I && I.nodeType === 1 ? I : wt(O.current).body
            ).getBoundingClientRect();
          return {
            top: z.top + qb(z, i.vertical),
            left: z.left + Kb(z, i.horizontal),
          };
        }, [o, i.horizontal, i.vertical, a, s]),
        M = x.useCallback(
          (I) => ({
            vertical: qb(I, w.vertical),
            horizontal: Kb(I, w.horizontal),
          }),
          [w.horizontal, w.vertical],
        ),
        D = x.useCallback(
          (I) => {
            const z = { width: I.offsetWidth, height: I.offsetHeight },
              J = M(z);
            if (s === "none")
              return { top: null, left: null, transformOrigin: Gb(J) };
            const re = _();
            let ie = re.top - J.vertical,
              de = re.left - J.horizontal;
            const fe = ie + z.height,
              ke = de + z.width,
              ge = Or(Qp(o)),
              me = ge.innerHeight - p,
              De = ge.innerWidth - p;
            if (ie < p) {
              const le = ie - p;
              (ie -= le), (J.vertical += le);
            } else if (fe > me) {
              const le = fe - me;
              (ie -= le), (J.vertical += le);
            }
            if (de < p) {
              const le = de - p;
              (de -= le), (J.horizontal += le);
            } else if (ke > De) {
              const le = ke - De;
              (de -= le), (J.horizontal += le);
            }
            return {
              top: `${Math.round(ie)}px`,
              left: `${Math.round(de)}px`,
              transformOrigin: Gb(J),
            };
          },
          [o, s, _, M, p],
        ),
        [U, B] = x.useState(y),
        F = x.useCallback(() => {
          const I = O.current;
          if (!I) return;
          const z = D(I);
          z.top !== null && (I.style.top = z.top),
            z.left !== null && (I.style.left = z.left),
            (I.style.transformOrigin = z.transformOrigin),
            B(!0);
        }, [D]),
        V = (I, z) => {
          g && g(I, z), F();
        },
        G = () => {
          B(!1);
        };
      x.useEffect(() => {
        y && F();
      }),
        x.useImperativeHandle(
          r,
          () =>
            y
              ? {
                  updatePosition: () => {
                    F();
                  },
                }
              : null,
          [y, F],
        ),
        x.useEffect(() => {
          if (!y) return;
          const I = Gf(() => {
              F();
            }),
            z = Or(o);
          return (
            z.addEventListener("resize", I),
            () => {
              I.clear(), z.removeEventListener("resize", I);
            }
          );
        }, [o, y, F]);
      let H = b;
      b === "auto" && !P.muiSupportAuto && (H = void 0);
      const L = d || (o ? wt(Qp(o)).body : void 0);
      return C(
        fA,
        E(
          {
            BackdropProps: { invisible: !0 },
            className: Q(A.root, u),
            container: L,
            open: y,
            ref: t,
            ownerState: T,
          },
          k,
          {
            children: C(
              P,
              E(
                { appear: !0, in: y, onEntering: V, onExited: G, timeout: H },
                v,
                {
                  children: C(
                    pA,
                    E(
                      { elevation: f },
                      m,
                      { ref: R, className: Q(A.paper, m.className) },
                      U ? void 0 : { style: E({}, m.style, { opacity: 0 }) },
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
    mA = hA;
  function gA(e) {
    return ae("MuiMenu", e);
  }
  oe("MuiMenu", ["root", "paper", "list"]);
  const yA = ["onEntering"],
    vA = [
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
    bA = { vertical: "top", horizontal: "right" },
    wA = { vertical: "top", horizontal: "left" },
    xA = (e) => {
      const { classes: t } = e;
      return se({ root: ["root"], paper: ["paper"], list: ["list"] }, gA, t);
    },
    SA = K(mA, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiMenu",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    kA = K(so, {
      name: "MuiMenu",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    EA = K(sA, {
      name: "MuiMenu",
      slot: "List",
      overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    CA = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiMenu" }),
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
          TransitionProps: { onEntering: p } = {},
          variant: y = "selectedMenu",
        } = n,
        m = X(n.TransitionProps, yA),
        w = X(n, vA),
        P = Pr(),
        b = P.direction === "rtl",
        g = E({}, n, {
          autoFocus: r,
          disableAutoFocusItem: i,
          MenuListProps: a,
          onEntering: p,
          PaperProps: u,
          transitionDuration: f,
          TransitionProps: m,
          variant: y,
        }),
        v = xA(g),
        k = r && !i && l,
        O = x.useRef(null),
        R = (_, M) => {
          O.current && O.current.adjustStyleForScrollbar(_, P), p && p(_, M);
        },
        T = (_) => {
          _.key === "Tab" && (_.preventDefault(), s && s(_, "tabKeyDown"));
        };
      let A = -1;
      return (
        x.Children.map(o, (_, M) => {
          x.isValidElement(_) &&
            (_.props.disabled ||
              (((y === "selectedMenu" && _.props.selected) || A === -1) &&
                (A = M)));
        }),
        C(
          SA,
          E(
            {
              onClose: s,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: b ? "right" : "left",
              },
              transformOrigin: b ? bA : wA,
              PaperProps: E({ component: kA }, u, {
                classes: E({}, u.classes, { root: v.paper }),
              }),
              className: v.root,
              open: l,
              ref: t,
              transitionDuration: f,
              TransitionProps: E({ onEntering: R }, m),
              ownerState: g,
            },
            w,
            {
              classes: d,
              children: C(
                EA,
                E(
                  {
                    onKeyDown: T,
                    actions: O,
                    autoFocus: r && (A === -1 || i),
                    autoFocusItem: k,
                    variant: y,
                  },
                  a,
                  { className: Q(v.list, a.className), children: o },
                ),
              ),
            },
          ),
        )
      );
    }),
    OA = CA;
  function TA(e) {
    return ae("MuiMenuItem", e);
  }
  const PA = oe("MuiMenuItem", [
      "root",
      "focusVisible",
      "dense",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    Ga = PA,
    RA = [
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
    NA = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.dense && t.dense,
        n.divider && t.divider,
        !n.disableGutters && t.gutters,
      ];
    },
    AA = (e) => {
      const {
          disabled: t,
          dense: n,
          divider: r,
          disableGutters: o,
          selected: i,
          classes: a,
        } = e,
        s = se(
          {
            root: [
              "root",
              n && "dense",
              t && "disabled",
              !o && "gutters",
              r && "divider",
              i && "selected",
            ],
          },
          TA,
          a,
        );
      return E({}, a, s);
    },
    _A = K(ci, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiMenuItem",
      slot: "Root",
      overridesResolver: NA,
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
          [`&.${Ga.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${Ga.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : Le(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity,
                  ),
            },
          },
          [`&.${Ga.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Le(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity,
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
          [`&.${Ga.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${Ga.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
          [`& + .${wb.root}`]: {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
          [`& + .${wb.inset}`]: { marginLeft: 52 },
          [`& .${Vu.root}`]: { marginTop: 0, marginBottom: 0 },
          [`& .${Vu.inset}`]: { paddingLeft: 36 },
          [`& .${Wb.root}`]: { minWidth: 36 },
        },
        !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
        t.dense &&
          E(
            { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
            e.typography.body2,
            { [`& .${Wb.root} svg`]: { fontSize: "1.25rem" } },
          ),
      ),
    ),
    MA = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiMenuItem" }),
        {
          autoFocus: r = !1,
          component: o = "li",
          dense: i = !1,
          divider: a = !1,
          disableGutters: s = !1,
          focusVisibleClassName: l,
          role: u = "menuitem",
          tabIndex: d,
          className: f,
        } = n,
        p = X(n, RA),
        y = x.useContext(tr),
        m = x.useMemo(
          () => ({ dense: i || y.dense || !1, disableGutters: s }),
          [y.dense, i, s],
        ),
        w = x.useRef(null);
      xn(() => {
        r && w.current && w.current.focus();
      }, [r]);
      const P = E({}, n, { dense: m.dense, divider: a, disableGutters: s }),
        b = AA(n),
        g = Qe(w, t);
      let v;
      return (
        n.disabled || (v = d !== void 0 ? d : -1),
        C(tr.Provider, {
          value: m,
          children: C(
            _A,
            E(
              {
                ref: g,
                role: u,
                tabIndex: v,
                component: o,
                focusVisibleClassName: Q(b.focusVisible, l),
                className: Q(b.root, f),
              },
              p,
              { ownerState: P, classes: b },
            ),
          ),
        })
      );
    }),
    Jb = MA;
  function IA(e) {
    return ae("MuiNativeSelect", e);
  }
  const $A = oe("MuiNativeSelect", [
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
    Zp = $A,
    LA = ["className", "disabled", "IconComponent", "inputRef", "variant"],
    BA = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${Y(n)}`, i && "iconOpen", r && "disabled"],
        };
      return se(a, IA, t);
    },
    Yb = ({ ownerState: e, theme: t }) =>
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
          [`&.${Zp.disabled}`]: { cursor: "default" },
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
    zA = K("select", {
      name: "MuiNativeSelect",
      slot: "Select",
      shouldForwardProp: Sn,
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.select, t[n.variant], { [`&.${Zp.multiple}`]: t.multiple }];
      },
    })(Yb),
    Xb = ({ ownerState: e, theme: t }) =>
      E(
        {
          position: "absolute",
          right: 0,
          top: "calc(50% - .5em)",
          pointerEvents: "none",
          color: (t.vars || t).palette.action.active,
          [`&.${Zp.disabled}`]: {
            color: (t.vars || t).palette.action.disabled,
          },
        },
        e.open && { transform: "rotate(180deg)" },
        e.variant === "filled" && { right: 7 },
        e.variant === "outlined" && { right: 7 },
      ),
    jA = K("svg", {
      name: "MuiNativeSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${Y(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })(Xb),
    FA = x.forwardRef(function (e, t) {
      const {
          className: n,
          disabled: r,
          IconComponent: o,
          inputRef: i,
          variant: a = "standard",
        } = e,
        s = X(e, LA),
        l = E({}, e, { disabled: r, variant: a }),
        u = BA(l);
      return te(x.Fragment, {
        children: [
          C(
            zA,
            E(
              {
                ownerState: l,
                className: Q(u.select, n),
                disabled: r,
                ref: i || t,
              },
              s,
            ),
          ),
          e.multiple
            ? null
            : C(jA, { as: o, ownerState: l, className: u.icon }),
        ],
      });
    }),
    DA = FA;
  var Qb;
  const UA = ["children", "classes", "className", "label", "notched"],
    WA = K("fieldset")({
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
    VA = K("legend")(({ ownerState: e, theme: t }) =>
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
  function HA(e) {
    const { className: t, label: n, notched: r } = e,
      o = X(e, UA),
      i = n != null && n !== "",
      a = E({}, e, { notched: r, withLabel: i });
    return C(
      WA,
      E({ "aria-hidden": !0, className: t, ownerState: a }, o, {
        children: C(VA, {
          ownerState: a,
          children: i
            ? C("span", { children: n })
            : Qb ||
              (Qb = C("span", {
                className: "notranslate",
                children: "\u200B",
              })),
        }),
      }),
    );
  }
  const qA = [
      "components",
      "fullWidth",
      "inputComponent",
      "label",
      "multiline",
      "notched",
      "slots",
      "type",
    ],
    KA = (e) => {
      const { classes: t } = e,
        n = se(
          {
            root: ["root"],
            notchedOutline: ["notchedOutline"],
            input: ["input"],
          },
          YP,
          t,
        );
      return E({}, t, n);
    },
    GA = K(Bu, {
      shouldForwardProp: (e) => Sn(e) || e === "classes",
      name: "MuiOutlinedInput",
      slot: "Root",
      overridesResolver: $u,
    })(({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return E(
        {
          position: "relative",
          borderRadius: (e.vars || e).shape.borderRadius,
          [`&:hover .${Nr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.text.primary,
          },
          "@media (hover: none)": {
            [`&:hover .${Nr.notchedOutline}`]: {
              borderColor: e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : n,
            },
          },
          [`&.${Nr.focused} .${Nr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette[t.color].main,
            borderWidth: 2,
          },
          [`&.${Nr.error} .${Nr.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.error.main,
          },
          [`&.${Nr.disabled} .${Nr.notchedOutline}`]: {
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
    JA = K(HA, {
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
    YA = K(zu, {
      name: "MuiOutlinedInput",
      slot: "Input",
      overridesResolver: Lu,
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
    Zb = x.forwardRef(function (e, t) {
      var n, r, o, i, a;
      const s = ce({ props: e, name: "MuiOutlinedInput" }),
        {
          components: l = {},
          fullWidth: u = !1,
          inputComponent: d = "input",
          label: f,
          multiline: p = !1,
          notched: y,
          slots: m = {},
          type: w = "text",
        } = s,
        P = X(s, qA),
        b = KA(s),
        g = er(),
        v = lo({ props: s, muiFormControl: g, states: ["required"] }),
        k = E({}, s, {
          color: v.color || "primary",
          disabled: v.disabled,
          error: v.error,
          focused: v.focused,
          formControl: g,
          fullWidth: u,
          hiddenLabel: v.hiddenLabel,
          multiline: p,
          size: v.size,
          type: w,
        }),
        O = (n = (r = m.root) != null ? r : l.Root) != null ? n : GA,
        R = (o = (i = m.input) != null ? i : l.Input) != null ? o : YA;
      return C(
        ju,
        E(
          {
            slots: { root: O, input: R },
            renderSuffix: (T) =>
              C(JA, {
                ownerState: k,
                className: b.notchedOutline,
                label:
                  f != null && f !== "" && v.required
                    ? a || (a = te(x.Fragment, { children: [f, "\xA0", "*"] }))
                    : f,
                notched:
                  typeof y < "u"
                    ? y
                    : !!(T.startAdornment || T.filled || T.focused),
              }),
            fullWidth: u,
            inputComponent: d,
            multiline: p,
            ref: t,
            type: w,
          },
          P,
          { classes: E({}, b, { notchedOutline: null }) },
        ),
      );
    });
  Zb.muiName = "Input";
  const e1 = Zb,
    t1 = ht(
      C("path", {
        d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z",
      }),
      "FirstPage",
    ),
    n1 = ht(
      C("path", {
        d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z",
      }),
      "LastPage",
    );
  function XA(e) {
    return ae("MuiSelect", e);
  }
  const QA = oe("MuiSelect", [
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
    qu = QA;
  var r1;
  const ZA = [
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
    e_ = K("div", {
      name: "MuiSelect",
      slot: "Select",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`&.${qu.select}`]: t.select },
          { [`&.${qu.select}`]: t[n.variant] },
          { [`&.${qu.multiple}`]: t.multiple },
        ];
      },
    })(Yb, {
      [`&.${qu.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }),
    t_ = K("svg", {
      name: "MuiSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${Y(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })(Xb),
    n_ = K("input", {
      shouldForwardProp: (e) => CO(e) && e !== "classes",
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
  function o1(e, t) {
    return typeof t == "object" && t !== null
      ? e === t
      : String(e) === String(t);
  }
  function r_(e) {
    return e == null || (typeof e == "string" && !e.trim());
  }
  const o_ = (e) => {
      const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
        a = {
          select: ["select", n, r && "disabled", o && "multiple"],
          icon: ["icon", `icon${Y(n)}`, i && "iconOpen", r && "disabled"],
          nativeInput: ["nativeInput"],
        };
      return se(a, XA, t);
    },
    i_ = x.forwardRef(function (e, t) {
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
          IconComponent: p,
          inputRef: y,
          labelId: m,
          MenuProps: w = {},
          multiple: P,
          name: b,
          onBlur: g,
          onChange: v,
          onClose: k,
          onFocus: O,
          onOpen: R,
          open: T,
          readOnly: A,
          renderValue: _,
          SelectDisplayProps: M = {},
          tabIndex: D,
          value: U,
          variant: B = "standard",
        } = e,
        F = X(e, ZA),
        [V, G] = Sa({ controlled: U, default: u, name: "Select" }),
        [H, L] = Sa({ controlled: T, default: l, name: "Select" }),
        I = x.useRef(null),
        z = x.useRef(null),
        [J, re] = x.useState(null),
        { current: ie } = x.useRef(T != null),
        [de, fe] = x.useState(),
        ke = Qe(t, y),
        ge = x.useCallback((W) => {
          (z.current = W), W && re(W);
        }, []),
        me = J == null ? void 0 : J.parentNode;
      x.useImperativeHandle(
        ke,
        () => ({
          focus: () => {
            z.current.focus();
          },
          node: I.current,
          value: V,
        }),
        [V],
      ),
        x.useEffect(() => {
          l &&
            H &&
            J &&
            !ie &&
            (fe(i ? null : me.clientWidth), z.current.focus());
        }, [J, i]),
        x.useEffect(() => {
          o && z.current.focus();
        }, [o]),
        x.useEffect(() => {
          if (!m) return;
          const W = wt(z.current).getElementById(m);
          if (W) {
            const Re = () => {
              getSelection().isCollapsed && z.current.focus();
            };
            return (
              W.addEventListener("click", Re),
              () => {
                W.removeEventListener("click", Re);
              }
            );
          }
        }, [m]);
      const De = (W, Re) => {
          W ? R && R(Re) : k && k(Re),
            ie || (fe(i ? null : me.clientWidth), L(W));
        },
        le = (W) => {
          W.button === 0 && (W.preventDefault(), z.current.focus(), De(!0, W));
        },
        Me = (W) => {
          De(!1, W);
        },
        Ie = x.Children.toArray(a),
        tt = (W) => {
          const Re = Ie.map((at) => at.props.value).indexOf(W.target.value);
          if (Re === -1) return;
          const Ue = Ie[Re];
          G(Ue.props.value), v && v(W, Ue);
        },
        it = (W) => (Re) => {
          let Ue;
          if (Re.currentTarget.hasAttribute("tabindex")) {
            if (P) {
              Ue = Array.isArray(V) ? V.slice() : [];
              const at = V.indexOf(W.props.value);
              at === -1 ? Ue.push(W.props.value) : Ue.splice(at, 1);
            } else Ue = W.props.value;
            if (
              (W.props.onClick && W.props.onClick(Re), V !== Ue && (G(Ue), v))
            ) {
              const at = Re.nativeEvent || Re,
                Mr = new at.constructor(at.type, at);
              Object.defineProperty(Mr, "target", {
                writable: !0,
                value: { value: Ue, name: b },
              }),
                v(Mr, W);
            }
            P || De(!1, Re);
          }
        },
        c = (W) => {
          A ||
            ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(W.key) !== -1 &&
              (W.preventDefault(), De(!0, W)));
        },
        h = J !== null && H,
        S = (W) => {
          !h &&
            g &&
            (Object.defineProperty(W, "target", {
              writable: !0,
              value: { value: V, name: b },
            }),
            g(W));
        };
      delete F["aria-invalid"];
      let N, $;
      const j = [];
      let Z = !1;
      (Fp({ value: V }) || f) && (_ ? (N = _(V)) : (Z = !0));
      const he = Ie.map((W, Re, Ue) => {
        var at, Mr, go, Oi;
        if (!x.isValidElement(W)) return null;
        let Cn;
        if (P) {
          if (!Array.isArray(V)) throw new Error(Cr(2));
          (Cn = V.some((rr) => o1(rr, W.props.value))),
            Cn && Z && j.push(W.props.children);
        } else (Cn = o1(V, W.props.value)), Cn && Z && ($ = W.props.children);
        if (W.props.value === void 0)
          return x.cloneElement(W, { "aria-readonly": !0, role: "option" });
        const xc = () => {
          if (V) return Cn;
          const rr = Ue.find((is) => {
            var Sc;
            return (
              (is == null || (Sc = is.props) == null ? void 0 : Sc.value) !==
                void 0 && is.props.disabled !== !0
            );
          });
          return W === rr ? !0 : Cn;
        };
        return x.cloneElement(W, {
          "aria-selected": Cn ? "true" : "false",
          onClick: it(W),
          onKeyUp: (rr) => {
            rr.key === " " && rr.preventDefault(),
              W.props.onKeyUp && W.props.onKeyUp(rr);
          },
          role: "option",
          selected:
            ((at = Ue[0]) == null || (Mr = at.props) == null
              ? void 0
              : Mr.value) === void 0 ||
            ((go = Ue[0]) == null || (Oi = go.props) == null
              ? void 0
              : Oi.disabled) === !0
              ? xc()
              : Cn,
          value: void 0,
          "data-value": W.props.value,
        });
      });
      Z &&
        (P
          ? j.length === 0
            ? (N = null)
            : (N = j.reduce(
                (W, Re, Ue) => (
                  W.push(Re), Ue < j.length - 1 && W.push(", "), W
                ),
                [],
              ))
          : (N = $));
      let be = de;
      !i && ie && J && (be = me.clientWidth);
      let ue;
      typeof D < "u" ? (ue = D) : (ue = d ? null : 0);
      const xe = M.id || (b ? `mui-component-select-${b}` : void 0),
        Oe = E({}, e, { variant: B, value: V, open: h }),
        ye = o_(Oe);
      return te(x.Fragment, {
        children: [
          C(
            e_,
            E(
              {
                ref: ge,
                tabIndex: ue,
                role: "button",
                "aria-disabled": d ? "true" : void 0,
                "aria-expanded": h ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": r,
                "aria-labelledby": [m, xe].filter(Boolean).join(" ") || void 0,
                "aria-describedby": n,
                onKeyDown: c,
                onMouseDown: d || A ? null : le,
                onBlur: S,
                onFocus: O,
              },
              M,
              {
                ownerState: Oe,
                className: Q(M.className, ye.select, s),
                id: xe,
                children: r_(N)
                  ? r1 ||
                    (r1 = C("span", {
                      className: "notranslate",
                      children: "\u200B",
                    }))
                  : N,
              },
            ),
          ),
          C(
            n_,
            E(
              {
                value: Array.isArray(V) ? V.join(",") : V,
                name: b,
                ref: I,
                "aria-hidden": !0,
                onChange: tt,
                tabIndex: -1,
                disabled: d,
                className: ye.nativeInput,
                autoFocus: o,
                ownerState: Oe,
              },
              F,
            ),
          ),
          C(t_, { as: p, className: ye.icon, ownerState: Oe }),
          C(
            OA,
            E(
              {
                id: `menu-${b || ""}`,
                anchorEl: me,
                open: h,
                onClose: Me,
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformOrigin: { vertical: "top", horizontal: "center" },
              },
              w,
              {
                MenuListProps: E(
                  {
                    "aria-labelledby": m,
                    role: "listbox",
                    disableListWrap: !0,
                  },
                  w.MenuListProps,
                ),
                PaperProps: E({}, w.PaperProps, {
                  style: E(
                    { minWidth: be },
                    w.PaperProps != null ? w.PaperProps.style : null,
                  ),
                }),
                children: he,
              },
            ),
          ),
        ],
      });
    }),
    a_ = i_;
  var i1, a1;
  const s_ = [
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
    l_ = (e) => {
      const { classes: t } = e;
      return t;
    },
    eh = {
      name: "MuiSelect",
      overridesResolver: (e, t) => t.root,
      shouldForwardProp: (e) => Sn(e) && e !== "variant",
      slot: "Root",
    },
    u_ = K(Nb, eh)(""),
    c_ = K(e1, eh)(""),
    d_ = K(Sb, eh)(""),
    s1 = x.forwardRef(function (e, t) {
      const n = ce({ name: "MuiSelect", props: e }),
        {
          autoWidth: r = !1,
          children: o,
          classes: i = {},
          className: a,
          defaultOpen: s = !1,
          displayEmpty: l = !1,
          IconComponent: u = eR,
          id: d,
          input: f,
          inputProps: p,
          label: y,
          labelId: m,
          MenuProps: w,
          multiple: P = !1,
          native: b = !1,
          onClose: g,
          onOpen: v,
          open: k,
          renderValue: O,
          SelectDisplayProps: R,
          variant: T = "outlined",
        } = n,
        A = X(n, s_),
        _ = b ? DA : a_,
        M = er(),
        D =
          lo({ props: n, muiFormControl: M, states: ["variant"] }).variant || T,
        U =
          f ||
          {
            standard: i1 || (i1 = C(u_, {})),
            outlined: C(c_, { label: y }),
            filled: a1 || (a1 = C(d_, {})),
          }[D],
        B = E({}, n, { variant: D, classes: i }),
        F = l_(B),
        V = Qe(t, U.ref);
      return C(x.Fragment, {
        children: x.cloneElement(
          U,
          E(
            {
              inputComponent: _,
              inputProps: E(
                {
                  children: o,
                  IconComponent: u,
                  variant: D,
                  type: void 0,
                  multiple: P,
                },
                b
                  ? { id: d }
                  : {
                      autoWidth: r,
                      defaultOpen: s,
                      displayEmpty: l,
                      labelId: m,
                      MenuProps: w,
                      onClose: g,
                      onOpen: v,
                      open: k,
                      renderValue: O,
                      SelectDisplayProps: E({ id: d }, R),
                    },
                p,
                { classes: p ? tn(F, p.classes) : F },
                f ? f.props.inputProps : {},
              ),
            },
            P && b && D === "outlined" ? { notched: !0 } : {},
            { ref: V, className: Q(U.props.className, a) },
            !f && { variant: D },
            A,
          ),
        ),
      });
    });
  s1.muiName = "Select";
  const th = s1;
  function f_(e) {
    return ae("MuiTooltip", e);
  }
  const p_ = oe("MuiTooltip", [
      "popper",
      "popperInteractive",
      "popperArrow",
      "popperClose",
      "tooltip",
      "tooltipArrow",
      "touch",
      "tooltipPlacementLeft",
      "tooltipPlacementRight",
      "tooltipPlacementTop",
      "tooltipPlacementBottom",
      "arrow",
    ]),
    Ar = p_,
    h_ = [
      "arrow",
      "children",
      "classes",
      "components",
      "componentsProps",
      "describeChild",
      "disableFocusListener",
      "disableHoverListener",
      "disableInteractive",
      "disableTouchListener",
      "enterDelay",
      "enterNextDelay",
      "enterTouchDelay",
      "followCursor",
      "id",
      "leaveDelay",
      "leaveTouchDelay",
      "onClose",
      "onOpen",
      "open",
      "placement",
      "PopperComponent",
      "PopperProps",
      "slotProps",
      "slots",
      "title",
      "TransitionComponent",
      "TransitionProps",
    ];
  function m_(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const g_ = (e) => {
      const {
          classes: t,
          disableInteractive: n,
          arrow: r,
          touch: o,
          placement: i,
        } = e,
        a = {
          popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
          tooltip: [
            "tooltip",
            r && "tooltipArrow",
            o && "touch",
            `tooltipPlacement${Y(i.split("-")[0])}`,
          ],
          arrow: ["arrow"],
        };
      return se(a, f_, t);
    },
    y_ = K(gb, {
      name: "MuiTooltip",
      slot: "Popper",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.popper,
          !n.disableInteractive && t.popperInteractive,
          n.arrow && t.popperArrow,
          !n.open && t.popperClose,
        ];
      },
    })(({ theme: e, ownerState: t, open: n }) =>
      E(
        { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: "none" },
        !t.disableInteractive && { pointerEvents: "auto" },
        !n && { pointerEvents: "none" },
        t.arrow && {
          [`&[data-popper-placement*="bottom"] .${Ar.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": { transformOrigin: "0 100%" },
          },
          [`&[data-popper-placement*="top"] .${Ar.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": { transformOrigin: "100% 0" },
          },
          [`&[data-popper-placement*="right"] .${Ar.arrow}`]: E(
            {},
            t.isRtl
              ? { right: 0, marginRight: "-0.71em" }
              : { left: 0, marginLeft: "-0.71em" },
            {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "100% 100%" },
            },
          ),
          [`&[data-popper-placement*="left"] .${Ar.arrow}`]: E(
            {},
            t.isRtl
              ? { left: 0, marginLeft: "-0.71em" }
              : { right: 0, marginRight: "-0.71em" },
            {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "0 0" },
            },
          ),
        },
      ),
    ),
    v_ = K("div", {
      name: "MuiTooltip",
      slot: "Tooltip",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.tooltip,
          n.touch && t.touch,
          n.arrow && t.tooltipArrow,
          t[`tooltipPlacement${Y(n.placement.split("-")[0])}`],
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          backgroundColor: e.vars
            ? e.vars.palette.Tooltip.bg
            : Le(e.palette.grey[700], 0.92),
          borderRadius: (e.vars || e).shape.borderRadius,
          color: (e.vars || e).palette.common.white,
          fontFamily: e.typography.fontFamily,
          padding: "4px 8px",
          fontSize: e.typography.pxToRem(11),
          maxWidth: 300,
          margin: 2,
          wordWrap: "break-word",
          fontWeight: e.typography.fontWeightMedium,
        },
        t.arrow && { position: "relative", margin: 0 },
        t.touch && {
          padding: "8px 16px",
          fontSize: e.typography.pxToRem(14),
          lineHeight: `${m_(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular,
        },
        {
          [`.${Ar.popper}[data-popper-placement*="left"] &`]: E(
            { transformOrigin: "right center" },
            t.isRtl
              ? E({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
              : E({ marginRight: "14px" }, t.touch && { marginRight: "24px" }),
          ),
          [`.${Ar.popper}[data-popper-placement*="right"] &`]: E(
            { transformOrigin: "left center" },
            t.isRtl
              ? E({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
              : E({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" }),
          ),
          [`.${Ar.popper}[data-popper-placement*="top"] &`]: E(
            { transformOrigin: "center bottom", marginBottom: "14px" },
            t.touch && { marginBottom: "24px" },
          ),
          [`.${Ar.popper}[data-popper-placement*="bottom"] &`]: E(
            { transformOrigin: "center top", marginTop: "14px" },
            t.touch && { marginTop: "24px" },
          ),
        },
      ),
    ),
    b_ = K("span", {
      name: "MuiTooltip",
      slot: "Arrow",
      overridesResolver: (e, t) => t.arrow,
    })(({ theme: e }) => ({
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em",
      boxSizing: "border-box",
      color: e.vars ? e.vars.palette.Tooltip.bg : Le(e.palette.grey[700], 0.9),
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)",
      },
    }));
  let Ku = !1,
    nh = null,
    Ja = { x: 0, y: 0 };
  function Gu(e, t) {
    return (n) => {
      t && t(n), e(n);
    };
  }
  const w_ = x.forwardRef(function (e, t) {
      var n, r, o, i, a, s, l, u, d, f, p, y, m, w, P, b, g, v, k;
      const O = ce({ props: e, name: "MuiTooltip" }),
        {
          arrow: R = !1,
          children: T,
          components: A = {},
          componentsProps: _ = {},
          describeChild: M = !1,
          disableFocusListener: D = !1,
          disableHoverListener: U = !1,
          disableInteractive: B = !1,
          disableTouchListener: F = !1,
          enterDelay: V = 100,
          enterNextDelay: G = 0,
          enterTouchDelay: H = 700,
          followCursor: L = !1,
          id: I,
          leaveDelay: z = 0,
          leaveTouchDelay: J = 1500,
          onClose: re,
          onOpen: ie,
          open: de,
          placement: fe = "bottom",
          PopperComponent: ke,
          PopperProps: ge = {},
          slotProps: me = {},
          slots: De = {},
          title: le,
          TransitionComponent: Me = Kp,
          TransitionProps: Ie,
        } = O,
        tt = X(O, h_),
        it = Pr(),
        c = it.direction === "rtl",
        [h, S] = x.useState(),
        [N, $] = x.useState(null),
        j = x.useRef(!1),
        Z = B || L,
        he = x.useRef(),
        be = x.useRef(),
        ue = x.useRef(),
        xe = x.useRef(),
        [Oe, ye] = Sa({
          controlled: de,
          default: !1,
          name: "Tooltip",
          state: "open",
        });
      let W = Oe;
      const Re = xa(I),
        Ue = x.useRef(),
        at = x.useCallback(() => {
          Ue.current !== void 0 &&
            ((document.body.style.WebkitUserSelect = Ue.current),
            (Ue.current = void 0)),
            clearTimeout(xe.current);
        }, []);
      x.useEffect(
        () => () => {
          clearTimeout(he.current),
            clearTimeout(be.current),
            clearTimeout(ue.current),
            at();
        },
        [at],
      );
      const Mr = (we) => {
          clearTimeout(nh), (Ku = !0), ye(!0), ie && !W && ie(we);
        },
        go = Tr((we) => {
          clearTimeout(nh),
            (nh = setTimeout(() => {
              Ku = !1;
            }, 800 + z)),
            ye(!1),
            re && W && re(we),
            clearTimeout(he.current),
            (he.current = setTimeout(() => {
              j.current = !1;
            }, it.transitions.duration.shortest));
        }),
        Oi = (we) => {
          (j.current && we.type !== "touchstart") ||
            (h && h.removeAttribute("title"),
            clearTimeout(be.current),
            clearTimeout(ue.current),
            V || (Ku && G)
              ? (be.current = setTimeout(
                  () => {
                    Mr(we);
                  },
                  Ku ? G : V,
                ))
              : Mr(we));
        },
        Cn = (we) => {
          clearTimeout(be.current),
            clearTimeout(ue.current),
            (ue.current = setTimeout(() => {
              go(we);
            }, z));
        },
        { isFocusVisibleRef: xc, onBlur: rr, onFocus: is, ref: Sc } = Xf(),
        [, fx] = x.useState(!1),
        px = (we) => {
          rr(we), xc.current === !1 && (fx(!1), Cn(we));
        },
        hx = (we) => {
          h || S(we.currentTarget),
            is(we),
            xc.current === !0 && (fx(!0), Oi(we));
        },
        mx = (we) => {
          j.current = !0;
          const Gt = T.props;
          Gt.onTouchStart && Gt.onTouchStart(we);
        },
        gx = Oi,
        yx = Cn,
        $L = (we) => {
          mx(we),
            clearTimeout(ue.current),
            clearTimeout(he.current),
            at(),
            (Ue.current = document.body.style.WebkitUserSelect),
            (document.body.style.WebkitUserSelect = "none"),
            (xe.current = setTimeout(() => {
              (document.body.style.WebkitUserSelect = Ue.current), Oi(we);
            }, H));
        },
        LL = (we) => {
          T.props.onTouchEnd && T.props.onTouchEnd(we),
            at(),
            clearTimeout(ue.current),
            (ue.current = setTimeout(() => {
              go(we);
            }, J));
        };
      x.useEffect(() => {
        if (!W) return;
        function we(Gt) {
          (Gt.key === "Escape" || Gt.key === "Esc") && go(Gt);
        }
        return (
          document.addEventListener("keydown", we),
          () => {
            document.removeEventListener("keydown", we);
          }
        );
      }, [go, W]);
      const BL = Qe(T.ref, Sc, S, t);
      !le && le !== 0 && (W = !1);
      const Wh = x.useRef(),
        zL = (we) => {
          const Gt = T.props;
          Gt.onMouseMove && Gt.onMouseMove(we),
            (Ja = { x: we.clientX, y: we.clientY }),
            Wh.current && Wh.current.update();
        },
        as = {},
        Vh = typeof le == "string";
      M
        ? ((as.title = !W && Vh && !U ? le : null),
          (as["aria-describedby"] = W ? Re : null))
        : ((as["aria-label"] = Vh ? le : null),
          (as["aria-labelledby"] = W && !Vh ? Re : null));
      const On = E(
          {},
          as,
          tt,
          T.props,
          {
            className: Q(tt.className, T.props.className),
            onTouchStart: mx,
            ref: BL,
          },
          L ? { onMouseMove: zL } : {},
        ),
        ss = {};
      F || ((On.onTouchStart = $L), (On.onTouchEnd = LL)),
        U ||
          ((On.onMouseOver = Gu(gx, On.onMouseOver)),
          (On.onMouseLeave = Gu(yx, On.onMouseLeave)),
          Z || ((ss.onMouseOver = gx), (ss.onMouseLeave = yx))),
        D ||
          ((On.onFocus = Gu(hx, On.onFocus)),
          (On.onBlur = Gu(px, On.onBlur)),
          Z || ((ss.onFocus = hx), (ss.onBlur = px)));
      const jL = x.useMemo(() => {
          var we;
          let Gt = [
            {
              name: "arrow",
              enabled: !!N,
              options: { element: N, padding: 4 },
            },
          ];
          return (
            (we = ge.popperOptions) != null &&
              we.modifiers &&
              (Gt = Gt.concat(ge.popperOptions.modifiers)),
            E({}, ge.popperOptions, { modifiers: Gt })
          );
        }, [N, ge]),
        ls = E({}, O, {
          isRtl: c,
          arrow: R,
          disableInteractive: Z,
          placement: fe,
          PopperComponentProp: ke,
          touch: j.current,
        }),
        Hh = g_(ls),
        vx = (n = (r = De.popper) != null ? r : A.Popper) != null ? n : y_,
        bx =
          (o =
            (i = (a = De.transition) != null ? a : A.Transition) != null
              ? i
              : Me) != null
            ? o
            : Kp,
        wx = (s = (l = De.tooltip) != null ? l : A.Tooltip) != null ? s : v_,
        xx = (u = (d = De.arrow) != null ? d : A.Arrow) != null ? u : b_,
        FL = Ma(
          vx,
          E({}, ge, (f = me.popper) != null ? f : _.popper, {
            className: Q(
              Hh.popper,
              ge == null ? void 0 : ge.className,
              (p = (y = me.popper) != null ? y : _.popper) == null
                ? void 0
                : p.className,
            ),
          }),
          ls,
        ),
        DL = Ma(
          bx,
          E({}, Ie, (m = me.transition) != null ? m : _.transition),
          ls,
        ),
        UL = Ma(
          wx,
          E({}, (w = me.tooltip) != null ? w : _.tooltip, {
            className: Q(
              Hh.tooltip,
              (P = (b = me.tooltip) != null ? b : _.tooltip) == null
                ? void 0
                : P.className,
            ),
          }),
          ls,
        ),
        WL = Ma(
          xx,
          E({}, (g = me.arrow) != null ? g : _.arrow, {
            className: Q(
              Hh.arrow,
              (v = (k = me.arrow) != null ? k : _.arrow) == null
                ? void 0
                : v.className,
            ),
          }),
          ls,
        );
      return te(x.Fragment, {
        children: [
          x.cloneElement(T, On),
          C(
            vx,
            E(
              {
                as: ke ?? gb,
                placement: fe,
                anchorEl: L
                  ? {
                      getBoundingClientRect: () => ({
                        top: Ja.y,
                        left: Ja.x,
                        right: Ja.x,
                        bottom: Ja.y,
                        width: 0,
                        height: 0,
                      }),
                    }
                  : h,
                popperRef: Wh,
                open: h ? W : !1,
                id: Re,
                transition: !0,
              },
              ss,
              FL,
              {
                popperOptions: jL,
                children: ({ TransitionProps: we }) =>
                  C(
                    bx,
                    E({ timeout: it.transitions.duration.shorter }, we, DL, {
                      children: te(
                        wx,
                        E({}, UL, {
                          children: [
                            le,
                            R ? C(xx, E({}, WL, { ref: $ })) : null,
                          ],
                        }),
                      ),
                    }),
                  ),
              },
            ),
          ),
        ],
      });
    }),
    l1 = w_;
  function x_(e) {
    return ae("MuiSwitch", e);
  }
  const S_ = oe("MuiSwitch", [
      "root",
      "edgeStart",
      "edgeEnd",
      "switchBase",
      "colorPrimary",
      "colorSecondary",
      "sizeSmall",
      "sizeMedium",
      "checked",
      "disabled",
      "input",
      "thumb",
      "track",
    ]),
    Tt = S_,
    k_ = ["className", "color", "edge", "size", "sx"],
    E_ = (e) => {
      const {
          classes: t,
          edge: n,
          size: r,
          color: o,
          checked: i,
          disabled: a,
        } = e,
        s = {
          root: ["root", n && `edge${Y(n)}`, `size${Y(r)}`],
          switchBase: [
            "switchBase",
            `color${Y(o)}`,
            i && "checked",
            a && "disabled",
          ],
          thumb: ["thumb"],
          track: ["track"],
          input: ["input"],
        },
        l = se(s, x_, t);
      return E({}, t, l);
    },
    C_ = K("span", {
      name: "MuiSwitch",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.edge && t[`edge${Y(n.edge)}`], t[`size${Y(n.size)}`]];
      },
    })(({ ownerState: e }) =>
      E(
        {
          display: "inline-flex",
          width: 34 + 12 * 2,
          height: 14 + 12 * 2,
          overflow: "hidden",
          padding: 12,
          boxSizing: "border-box",
          position: "relative",
          flexShrink: 0,
          zIndex: 0,
          verticalAlign: "middle",
          "@media print": { colorAdjust: "exact" },
        },
        e.edge === "start" && { marginLeft: -8 },
        e.edge === "end" && { marginRight: -8 },
        e.size === "small" && {
          width: 40,
          height: 24,
          padding: 7,
          [`& .${Tt.thumb}`]: { width: 16, height: 16 },
          [`& .${Tt.switchBase}`]: {
            padding: 4,
            [`&.${Tt.checked}`]: { transform: "translateX(16px)" },
          },
        },
      ),
    ),
    O_ = K(bb, {
      name: "MuiSwitch",
      slot: "SwitchBase",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.switchBase,
          { [`& .${Tt.input}`]: t.input },
          n.color !== "default" && t[`color${Y(n.color)}`],
        ];
      },
    })(
      ({ theme: e }) => ({
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        color: e.vars
          ? e.vars.palette.Switch.defaultColor
          : `${
              e.palette.mode === "light"
                ? e.palette.common.white
                : e.palette.grey[300]
            }`,
        transition: e.transitions.create(["left", "transform"], {
          duration: e.transitions.duration.shortest,
        }),
        [`&.${Tt.checked}`]: { transform: "translateX(20px)" },
        [`&.${Tt.disabled}`]: {
          color: e.vars
            ? e.vars.palette.Switch.defaultDisabledColor
            : `${
                e.palette.mode === "light"
                  ? e.palette.grey[100]
                  : e.palette.grey[600]
              }`,
        },
        [`&.${Tt.checked} + .${Tt.track}`]: { opacity: 0.5 },
        [`&.${Tt.disabled} + .${Tt.track}`]: {
          opacity: e.vars
            ? e.vars.opacity.switchTrackDisabled
            : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
        },
        [`& .${Tt.input}`]: { left: "-100%", width: "300%" },
      }),
      ({ theme: e, ownerState: t }) =>
        E(
          {
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Le(e.palette.action.active, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
          t.color !== "default" && {
            [`&.${Tt.checked}`]: {
              color: (e.vars || e).palette[t.color].main,
              "&:hover": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Le(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              [`&.${Tt.disabled}`]: {
                color: e.vars
                  ? e.vars.palette.Switch[`${t.color}DisabledColor`]
                  : `${
                      e.palette.mode === "light"
                        ? ri(e.palette[t.color].main, 0.62)
                        : ni(e.palette[t.color].main, 0.55)
                    }`,
              },
            },
            [`&.${Tt.checked} + .${Tt.track}`]: {
              backgroundColor: (e.vars || e).palette[t.color].main,
            },
          },
        ),
    ),
    T_ = K("span", {
      name: "MuiSwitch",
      slot: "Track",
      overridesResolver: (e, t) => t.track,
    })(({ theme: e }) => ({
      height: "100%",
      width: "100%",
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: e.transitions.create(["opacity", "background-color"], {
        duration: e.transitions.duration.shortest,
      }),
      backgroundColor: e.vars
        ? e.vars.palette.common.onBackground
        : `${
            e.palette.mode === "light"
              ? e.palette.common.black
              : e.palette.common.white
          }`,
      opacity: e.vars
        ? e.vars.opacity.switchTrack
        : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
    })),
    P_ = K("span", {
      name: "MuiSwitch",
      slot: "Thumb",
      overridesResolver: (e, t) => t.thumb,
    })(({ theme: e }) => ({
      boxShadow: (e.vars || e).shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%",
    })),
    R_ = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiSwitch" }),
        {
          className: r,
          color: o = "primary",
          edge: i = !1,
          size: a = "medium",
          sx: s,
        } = n,
        l = X(n, k_),
        u = E({}, n, { color: o, edge: i, size: a }),
        d = E_(u),
        f = C(P_, { className: d.thumb, ownerState: u });
      return te(C_, {
        className: Q(d.root, r),
        sx: s,
        ownerState: u,
        children: [
          C(
            O_,
            E(
              {
                type: "checkbox",
                icon: f,
                checkedIcon: f,
                ref: t,
                ownerState: u,
              },
              l,
              { classes: E({}, d, { root: d.switchBase }) },
            ),
          ),
          C(T_, { className: d.track, ownerState: u }),
        ],
      });
    }),
    N_ = R_,
    A_ = x.createContext(),
    u1 = A_;
  function __(e) {
    return ae("MuiTable", e);
  }
  oe("MuiTable", ["root", "stickyHeader"]);
  const M_ = ["className", "component", "padding", "size", "stickyHeader"],
    I_ = (e) => {
      const { classes: t, stickyHeader: n } = e;
      return se({ root: ["root", n && "stickyHeader"] }, __, t);
    },
    $_ = K("table", {
      name: "MuiTable",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.stickyHeader && t.stickyHeader];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          display: "table",
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: 0,
          "& caption": E({}, e.typography.body2, {
            padding: e.spacing(2),
            color: (e.vars || e).palette.text.secondary,
            textAlign: "left",
            captionSide: "bottom",
          }),
        },
        t.stickyHeader && { borderCollapse: "separate" },
      ),
    ),
    c1 = "table",
    L_ = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTable" }),
        {
          className: r,
          component: o = c1,
          padding: i = "normal",
          size: a = "medium",
          stickyHeader: s = !1,
        } = n,
        l = X(n, M_),
        u = E({}, n, { component: o, padding: i, size: a, stickyHeader: s }),
        d = I_(u),
        f = x.useMemo(
          () => ({ padding: i, size: a, stickyHeader: s }),
          [i, a, s],
        );
      return C(u1.Provider, {
        value: f,
        children: C(
          $_,
          E(
            {
              as: o,
              role: o === c1 ? null : "table",
              ref: t,
              className: Q(d.root, r),
              ownerState: u,
            },
            l,
          ),
        ),
      });
    }),
    B_ = L_,
    z_ = x.createContext(),
    Ju = z_;
  function j_(e) {
    return ae("MuiTableBody", e);
  }
  oe("MuiTableBody", ["root"]);
  const F_ = ["className", "component"],
    D_ = (e) => {
      const { classes: t } = e;
      return se({ root: ["root"] }, j_, t);
    },
    U_ = K("tbody", {
      name: "MuiTableBody",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ display: "table-row-group" }),
    W_ = { variant: "body" },
    d1 = "tbody",
    V_ = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTableBody" }),
        { className: r, component: o = d1 } = n,
        i = X(n, F_),
        a = E({}, n, { component: o }),
        s = D_(a);
      return C(Ju.Provider, {
        value: W_,
        children: C(
          U_,
          E(
            {
              className: Q(s.root, r),
              as: o,
              ref: t,
              role: o === d1 ? null : "rowgroup",
              ownerState: a,
            },
            i,
          ),
        ),
      });
    }),
    H_ = V_;
  function q_(e) {
    return ae("MuiTableCell", e);
  }
  const K_ = oe("MuiTableCell", [
      "root",
      "head",
      "body",
      "footer",
      "sizeSmall",
      "sizeMedium",
      "paddingCheckbox",
      "paddingNone",
      "alignLeft",
      "alignCenter",
      "alignRight",
      "alignJustify",
      "stickyHeader",
    ]),
    G_ = K_,
    J_ = [
      "align",
      "className",
      "component",
      "padding",
      "scope",
      "size",
      "sortDirection",
      "variant",
    ],
    Y_ = (e) => {
      const {
          classes: t,
          variant: n,
          align: r,
          padding: o,
          size: i,
          stickyHeader: a,
        } = e,
        s = {
          root: [
            "root",
            n,
            a && "stickyHeader",
            r !== "inherit" && `align${Y(r)}`,
            o !== "normal" && `padding${Y(o)}`,
            `size${Y(i)}`,
          ],
        };
      return se(s, q_, t);
    },
    X_ = K("td", {
      name: "MuiTableCell",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`size${Y(n.size)}`],
          n.padding !== "normal" && t[`padding${Y(n.padding)}`],
          n.align !== "inherit" && t[`align${Y(n.align)}`],
          n.stickyHeader && t.stickyHeader,
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {},
        e.typography.body2,
        {
          display: "table-cell",
          verticalAlign: "inherit",
          borderBottom: e.vars
            ? `1px solid ${e.vars.palette.TableCell.border}`
            : `1px solid
    ${
      e.palette.mode === "light"
        ? ri(Le(e.palette.divider, 1), 0.88)
        : ni(Le(e.palette.divider, 1), 0.68)
    }`,
          textAlign: "left",
          padding: 16,
        },
        t.variant === "head" && {
          color: (e.vars || e).palette.text.primary,
          lineHeight: e.typography.pxToRem(24),
          fontWeight: e.typography.fontWeightMedium,
        },
        t.variant === "body" && { color: (e.vars || e).palette.text.primary },
        t.variant === "footer" && {
          color: (e.vars || e).palette.text.secondary,
          lineHeight: e.typography.pxToRem(21),
          fontSize: e.typography.pxToRem(12),
        },
        t.size === "small" && {
          padding: "6px 16px",
          [`&.${G_.paddingCheckbox}`]: {
            width: 24,
            padding: "0 12px 0 16px",
            "& > *": { padding: 0 },
          },
        },
        t.padding === "checkbox" && { width: 48, padding: "0 0 0 4px" },
        t.padding === "none" && { padding: 0 },
        t.align === "left" && { textAlign: "left" },
        t.align === "center" && { textAlign: "center" },
        t.align === "right" && {
          textAlign: "right",
          flexDirection: "row-reverse",
        },
        t.align === "justify" && { textAlign: "justify" },
        t.stickyHeader && {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (e.vars || e).palette.background.default,
        },
      ),
    ),
    Q_ = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTableCell" }),
        {
          align: r = "inherit",
          className: o,
          component: i,
          padding: a,
          scope: s,
          size: l,
          sortDirection: u,
          variant: d,
        } = n,
        f = X(n, J_),
        p = x.useContext(u1),
        y = x.useContext(Ju),
        m = y && y.variant === "head";
      let w;
      i ? (w = i) : (w = m ? "th" : "td");
      let P = s;
      w === "td" ? (P = void 0) : !P && m && (P = "col");
      const b = d || (y && y.variant),
        g = E({}, n, {
          align: r,
          component: w,
          padding: a || (p && p.padding ? p.padding : "normal"),
          size: l || (p && p.size ? p.size : "medium"),
          sortDirection: u,
          stickyHeader: b === "head" && p && p.stickyHeader,
          variant: b,
        }),
        v = Y_(g);
      let k = null;
      return (
        u && (k = u === "asc" ? "ascending" : "descending"),
        C(
          X_,
          E(
            {
              as: w,
              ref: t,
              className: Q(v.root, o),
              "aria-sort": k,
              scope: P,
              ownerState: g,
            },
            f,
          ),
        )
      );
    }),
    Pt = Q_;
  function Z_(e) {
    return ae("MuiTableContainer", e);
  }
  oe("MuiTableContainer", ["root"]);
  const e6 = ["className", "component"],
    t6 = (e) => {
      const { classes: t } = e;
      return se({ root: ["root"] }, Z_, t);
    },
    n6 = K("div", {
      name: "MuiTableContainer",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ width: "100%", overflowX: "auto" }),
    r6 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTableContainer" }),
        { className: r, component: o = "div" } = n,
        i = X(n, e6),
        a = E({}, n, { component: o }),
        s = t6(a);
      return C(
        n6,
        E({ ref: t, as: o, className: Q(s.root, r), ownerState: a }, i),
      );
    }),
    o6 = r6;
  function i6(e) {
    return ae("MuiTableHead", e);
  }
  oe("MuiTableHead", ["root"]);
  const a6 = ["className", "component"],
    s6 = (e) => {
      const { classes: t } = e;
      return se({ root: ["root"] }, i6, t);
    },
    l6 = K("thead", {
      name: "MuiTableHead",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ display: "table-header-group" }),
    u6 = { variant: "head" },
    f1 = "thead",
    c6 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTableHead" }),
        { className: r, component: o = f1 } = n,
        i = X(n, a6),
        a = E({}, n, { component: o }),
        s = s6(a);
      return C(Ju.Provider, {
        value: u6,
        children: C(
          l6,
          E(
            {
              as: o,
              className: Q(s.root, r),
              ref: t,
              role: o === f1 ? null : "rowgroup",
              ownerState: a,
            },
            i,
          ),
        ),
      });
    }),
    d6 = c6;
  function f6(e) {
    return ae("MuiToolbar", e);
  }
  oe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
  const p6 = ["className", "component", "disableGutters", "variant"],
    h6 = (e) => {
      const { classes: t, disableGutters: n, variant: r } = e;
      return se({ root: ["root", !n && "gutters", r] }, f6, t);
    },
    m6 = K("div", {
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
    g6 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiToolbar" }),
        {
          className: r,
          component: o = "div",
          disableGutters: i = !1,
          variant: a = "regular",
        } = n,
        s = X(n, p6),
        l = E({}, n, { component: o, disableGutters: i, variant: a }),
        u = h6(l);
      return C(
        m6,
        E({ as: o, className: Q(u.root, r), ref: t, ownerState: l }, s),
      );
    }),
    rh = g6,
    p1 = ht(
      C("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }),
      "KeyboardArrowLeft",
    ),
    h1 = ht(
      C("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }),
      "KeyboardArrowRight",
    );
  var m1, g1, y1, v1, b1, w1, x1, S1;
  const y6 = [
      "backIconButtonProps",
      "count",
      "getItemAriaLabel",
      "nextIconButtonProps",
      "onPageChange",
      "page",
      "rowsPerPage",
      "showFirstButton",
      "showLastButton",
    ],
    v6 = x.forwardRef(function (e, t) {
      const {
          backIconButtonProps: n,
          count: r,
          getItemAriaLabel: o,
          nextIconButtonProps: i,
          onPageChange: a,
          page: s,
          rowsPerPage: l,
          showFirstButton: u,
          showLastButton: d,
        } = e,
        f = X(e, y6),
        p = Pr(),
        y = (b) => {
          a(b, 0);
        },
        m = (b) => {
          a(b, s - 1);
        },
        w = (b) => {
          a(b, s + 1);
        },
        P = (b) => {
          a(b, Math.max(0, Math.ceil(r / l) - 1));
        };
      return te(
        "div",
        E({ ref: t }, f, {
          children: [
            u &&
              C(zn, {
                onClick: y,
                disabled: s === 0,
                "aria-label": o("first", s),
                title: o("first", s),
                children:
                  p.direction === "rtl"
                    ? m1 || (m1 = C(n1, {}))
                    : g1 || (g1 = C(t1, {})),
              }),
            C(
              zn,
              E(
                {
                  onClick: m,
                  disabled: s === 0,
                  color: "inherit",
                  "aria-label": o("previous", s),
                  title: o("previous", s),
                },
                n,
                {
                  children:
                    p.direction === "rtl"
                      ? y1 || (y1 = C(h1, {}))
                      : v1 || (v1 = C(p1, {})),
                },
              ),
            ),
            C(
              zn,
              E(
                {
                  onClick: w,
                  disabled: r !== -1 ? s >= Math.ceil(r / l) - 1 : !1,
                  color: "inherit",
                  "aria-label": o("next", s),
                  title: o("next", s),
                },
                i,
                {
                  children:
                    p.direction === "rtl"
                      ? b1 || (b1 = C(p1, {}))
                      : w1 || (w1 = C(h1, {})),
                },
              ),
            ),
            d &&
              C(zn, {
                onClick: P,
                disabled: s >= Math.ceil(r / l) - 1,
                "aria-label": o("last", s),
                title: o("last", s),
                children:
                  p.direction === "rtl"
                    ? x1 || (x1 = C(t1, {}))
                    : S1 || (S1 = C(n1, {})),
              }),
          ],
        }),
      );
    }),
    b6 = v6;
  function w6(e) {
    return ae("MuiTablePagination", e);
  }
  const x6 = oe("MuiTablePagination", [
      "root",
      "toolbar",
      "spacer",
      "selectLabel",
      "selectRoot",
      "select",
      "selectIcon",
      "input",
      "menuItem",
      "displayedRows",
      "actions",
    ]),
    Ya = x6;
  var k1;
  const S6 = [
      "ActionsComponent",
      "backIconButtonProps",
      "className",
      "colSpan",
      "component",
      "count",
      "getItemAriaLabel",
      "labelDisplayedRows",
      "labelRowsPerPage",
      "nextIconButtonProps",
      "onPageChange",
      "onRowsPerPageChange",
      "page",
      "rowsPerPage",
      "rowsPerPageOptions",
      "SelectProps",
      "showFirstButton",
      "showLastButton",
    ],
    k6 = K(Pt, {
      name: "MuiTablePagination",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })(({ theme: e }) => ({
      overflow: "auto",
      color: (e.vars || e).palette.text.primary,
      fontSize: e.typography.pxToRem(14),
      "&:last-child": { padding: 0 },
    })),
    E6 = K(rh, {
      name: "MuiTablePagination",
      slot: "Toolbar",
      overridesResolver: (e, t) =>
        E({ [`& .${Ya.actions}`]: t.actions }, t.toolbar),
    })(({ theme: e }) => ({
      minHeight: 52,
      paddingRight: 2,
      [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
        minHeight: 52,
      },
      [e.breakpoints.up("sm")]: { minHeight: 52, paddingRight: 2 },
      [`& .${Ya.actions}`]: { flexShrink: 0, marginLeft: 20 },
    })),
    C6 = K("div", {
      name: "MuiTablePagination",
      slot: "Spacer",
      overridesResolver: (e, t) => t.spacer,
    })({ flex: "1 1 100%" }),
    O6 = K("p", {
      name: "MuiTablePagination",
      slot: "SelectLabel",
      overridesResolver: (e, t) => t.selectLabel,
    })(({ theme: e }) => E({}, e.typography.body2, { flexShrink: 0 })),
    T6 = K(th, {
      name: "MuiTablePagination",
      slot: "Select",
      overridesResolver: (e, t) =>
        E(
          {
            [`& .${Ya.selectIcon}`]: t.selectIcon,
            [`& .${Ya.select}`]: t.select,
          },
          t.input,
          t.selectRoot,
        ),
    })({
      color: "inherit",
      fontSize: "inherit",
      flexShrink: 0,
      marginRight: 32,
      marginLeft: 8,
      [`& .${Ya.select}`]: {
        paddingLeft: 8,
        paddingRight: 24,
        textAlign: "right",
        textAlignLast: "right",
      },
    }),
    P6 = K(Jb, {
      name: "MuiTablePagination",
      slot: "MenuItem",
      overridesResolver: (e, t) => t.menuItem,
    })({}),
    R6 = K("p", {
      name: "MuiTablePagination",
      slot: "DisplayedRows",
      overridesResolver: (e, t) => t.displayedRows,
    })(({ theme: e }) => E({}, e.typography.body2, { flexShrink: 0 }));
  function N6({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function A6(e) {
    return `Go to ${e} page`;
  }
  const _6 = (e) => {
      const { classes: t } = e;
      return se(
        {
          root: ["root"],
          toolbar: ["toolbar"],
          spacer: ["spacer"],
          selectLabel: ["selectLabel"],
          select: ["select"],
          input: ["input"],
          selectIcon: ["selectIcon"],
          menuItem: ["menuItem"],
          displayedRows: ["displayedRows"],
          actions: ["actions"],
        },
        w6,
        t,
      );
    },
    M6 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTablePagination" }),
        {
          ActionsComponent: r = b6,
          backIconButtonProps: o,
          className: i,
          colSpan: a,
          component: s = Pt,
          count: l,
          getItemAriaLabel: u = A6,
          labelDisplayedRows: d = N6,
          labelRowsPerPage: f = "Rows per page:",
          nextIconButtonProps: p,
          onPageChange: y,
          onRowsPerPageChange: m,
          page: w,
          rowsPerPage: P,
          rowsPerPageOptions: b = [10, 25, 50, 100],
          SelectProps: g = {},
          showFirstButton: v = !1,
          showLastButton: k = !1,
        } = n,
        O = X(n, S6),
        R = n,
        T = _6(R),
        A = g.native ? "option" : P6;
      let _;
      (s === Pt || s === "td") && (_ = a || 1e3);
      const M = xa(g.id),
        D = xa(g.labelId),
        U = () =>
          l === -1 ? (w + 1) * P : P === -1 ? l : Math.min(l, (w + 1) * P);
      return C(
        k6,
        E(
          { colSpan: _, ref: t, as: s, ownerState: R, className: Q(T.root, i) },
          O,
          {
            children: te(E6, {
              className: T.toolbar,
              children: [
                C(C6, { className: T.spacer }),
                b.length > 1 &&
                  C(O6, { className: T.selectLabel, id: D, children: f }),
                b.length > 1 &&
                  C(
                    T6,
                    E(
                      { variant: "standard" },
                      !g.variant && { input: k1 || (k1 = C(ju, {})) },
                      { value: P, onChange: m, id: M, labelId: D },
                      g,
                      {
                        classes: E({}, g.classes, {
                          root: Q(
                            T.input,
                            T.selectRoot,
                            (g.classes || {}).root,
                          ),
                          select: Q(T.select, (g.classes || {}).select),
                          icon: Q(T.selectIcon, (g.classes || {}).icon),
                        }),
                        children: b.map((B) =>
                          x.createElement(
                            A,
                            E({}, !to(A) && { ownerState: R }, {
                              className: T.menuItem,
                              key: B.label ? B.label : B,
                              value: B.value ? B.value : B,
                            }),
                            B.label ? B.label : B,
                          ),
                        ),
                      },
                    ),
                  ),
                C(R6, {
                  className: T.displayedRows,
                  children: d({
                    from: l === 0 ? 0 : w * P + 1,
                    to: U(),
                    count: l === -1 ? -1 : l,
                    page: w,
                  }),
                }),
                C(r, {
                  className: T.actions,
                  backIconButtonProps: o,
                  count: l,
                  nextIconButtonProps: p,
                  onPageChange: y,
                  page: w,
                  rowsPerPage: P,
                  showFirstButton: v,
                  showLastButton: k,
                  getItemAriaLabel: u,
                }),
              ],
            }),
          },
        ),
      );
    }),
    I6 = M6;
  function $6(e) {
    return ae("MuiTableRow", e);
  }
  const L6 = oe("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
    E1 = L6,
    B6 = ["className", "component", "hover", "selected"],
    z6 = (e) => {
      const { classes: t, selected: n, hover: r, head: o, footer: i } = e;
      return se(
        {
          root: [
            "root",
            n && "selected",
            r && "hover",
            o && "head",
            i && "footer",
          ],
        },
        $6,
        t,
      );
    },
    j6 = K("tr", {
      name: "MuiTableRow",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.head && t.head, n.footer && t.footer];
      },
    })(({ theme: e }) => ({
      color: "inherit",
      display: "table-row",
      verticalAlign: "middle",
      outline: 0,
      [`&.${E1.hover}:hover`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
      },
      [`&.${E1.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Le(
                e.palette.primary.main,
                e.palette.action.selectedOpacity +
                  e.palette.action.hoverOpacity,
              ),
        },
      },
    })),
    C1 = "tr",
    F6 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTableRow" }),
        {
          className: r,
          component: o = C1,
          hover: i = !1,
          selected: a = !1,
        } = n,
        s = X(n, B6),
        l = x.useContext(Ju),
        u = E({}, n, {
          component: o,
          hover: i,
          selected: a,
          head: l && l.variant === "head",
          footer: l && l.variant === "footer",
        }),
        d = z6(u);
      return C(
        j6,
        E(
          {
            as: o,
            ref: t,
            className: Q(d.root, r),
            role: o === C1 ? null : "row",
            ownerState: u,
          },
          s,
        ),
      );
    }),
    oh = F6,
    D6 = ht(
      C("path", {
        d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
      }),
      "ArrowDownward",
    );
  function U6(e) {
    return ae("MuiTableSortLabel", e);
  }
  const W6 = oe("MuiTableSortLabel", [
      "root",
      "active",
      "icon",
      "iconDirectionDesc",
      "iconDirectionAsc",
    ]),
    ih = W6,
    V6 = [
      "active",
      "children",
      "className",
      "direction",
      "hideSortIcon",
      "IconComponent",
    ],
    H6 = (e) => {
      const { classes: t, direction: n, active: r } = e,
        o = {
          root: ["root", r && "active"],
          icon: ["icon", `iconDirection${Y(n)}`],
        };
      return se(o, U6, t);
    },
    q6 = K(ci, {
      name: "MuiTableSortLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.active && t.active];
      },
    })(({ theme: e }) => ({
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "flex-start",
      flexDirection: "inherit",
      alignItems: "center",
      "&:focus": { color: (e.vars || e).palette.text.secondary },
      "&:hover": {
        color: (e.vars || e).palette.text.secondary,
        [`& .${ih.icon}`]: { opacity: 0.5 },
      },
      [`&.${ih.active}`]: {
        color: (e.vars || e).palette.text.primary,
        [`& .${ih.icon}`]: {
          opacity: 1,
          color: (e.vars || e).palette.text.secondary,
        },
      },
    })),
    K6 = K("span", {
      name: "MuiTableSortLabel",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.icon, t[`iconDirection${Y(n.direction)}`]];
      },
    })(({ theme: e, ownerState: t }) =>
      E(
        {
          fontSize: 18,
          marginRight: 4,
          marginLeft: 4,
          opacity: 0,
          transition: e.transitions.create(["opacity", "transform"], {
            duration: e.transitions.duration.shorter,
          }),
          userSelect: "none",
        },
        t.direction === "desc" && { transform: "rotate(0deg)" },
        t.direction === "asc" && { transform: "rotate(180deg)" },
      ),
    ),
    G6 = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTableSortLabel" }),
        {
          active: r = !1,
          children: o,
          className: i,
          direction: a = "asc",
          hideSortIcon: s = !1,
          IconComponent: l = D6,
        } = n,
        u = X(n, V6),
        d = E({}, n, {
          active: r,
          direction: a,
          hideSortIcon: s,
          IconComponent: l,
        }),
        f = H6(d);
      return te(
        q6,
        E(
          {
            className: Q(f.root, i),
            component: "span",
            disableRipple: !0,
            ownerState: d,
            ref: t,
          },
          u,
          {
            children: [
              o,
              s && !r
                ? null
                : C(K6, { as: l, className: Q(f.icon), ownerState: d }),
            ],
          },
        ),
      );
    }),
    J6 = G6;
  function Y6(e) {
    return ae("MuiTextField", e);
  }
  oe("MuiTextField", ["root"]);
  const X6 = [
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
    Q6 = { standard: Nb, filled: Sb, outlined: e1 },
    Z6 = (e) => {
      const { classes: t } = e;
      return se({ root: ["root"] }, Y6, t);
    },
    eM = K(kb, {
      name: "MuiTextField",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    tM = x.forwardRef(function (e, t) {
      const n = ce({ props: e, name: "MuiTextField" }),
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
          fullWidth: p = !1,
          helperText: y,
          id: m,
          InputLabelProps: w,
          inputProps: P,
          InputProps: b,
          inputRef: g,
          label: v,
          maxRows: k,
          minRows: O,
          multiline: R = !1,
          name: T,
          onBlur: A,
          onChange: _,
          onFocus: M,
          placeholder: D,
          required: U = !1,
          rows: B,
          select: F = !1,
          SelectProps: V,
          type: G,
          value: H,
          variant: L = "outlined",
        } = n,
        I = X(n, X6),
        z = E({}, n, {
          autoFocus: o,
          color: s,
          disabled: u,
          error: d,
          fullWidth: p,
          multiline: R,
          required: U,
          select: F,
          variant: L,
        }),
        J = Z6(z),
        re = {};
      L === "outlined" &&
        (w && typeof w.shrink < "u" && (re.notched = w.shrink), (re.label = v)),
        F &&
          ((!V || !V.native) && (re.id = void 0),
          (re["aria-describedby"] = void 0));
      const ie = xa(m),
        de = y && ie ? `${ie}-helper-text` : void 0,
        fe = v && ie ? `${ie}-label` : void 0,
        ke = Q6[L],
        ge = C(
          ke,
          E(
            {
              "aria-describedby": de,
              autoComplete: r,
              autoFocus: o,
              defaultValue: l,
              fullWidth: p,
              multiline: R,
              name: T,
              rows: B,
              maxRows: k,
              minRows: O,
              type: G,
              value: H,
              id: ie,
              inputRef: g,
              onBlur: A,
              onChange: _,
              onFocus: M,
              placeholder: D,
              inputProps: P,
            },
            re,
            b,
          ),
        );
      return te(
        eM,
        E(
          {
            className: Q(J.root, a),
            disabled: u,
            error: d,
            fullWidth: p,
            ref: t,
            required: U,
            color: s,
            variant: L,
            ownerState: z,
          },
          I,
          {
            children: [
              v != null &&
                v !== "" &&
                C(Mb, E({ htmlFor: ie, id: fe }, w, { children: v })),
              F
                ? C(
                    th,
                    E(
                      {
                        "aria-describedby": de,
                        id: ie,
                        labelId: fe,
                        value: H,
                        input: ge,
                      },
                      V,
                      { children: i },
                    ),
                  )
                : ge,
              y && C(k4, E({ id: de }, f, { children: y })),
            ],
          },
        ),
      );
    }),
    Yu = tM;
  function nM(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
  }
  for (
    var rM = lM,
      oM = cM,
      iM = pM,
      jn = [],
      cn = [],
      aM = typeof Uint8Array < "u" ? Uint8Array : Array,
      ah = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      mi = 0,
      sM = ah.length;
    mi < sM;
    ++mi
  )
    (jn[mi] = ah[mi]), (cn[ah.charCodeAt(mi)] = mi);
  (cn["-".charCodeAt(0)] = 62), (cn["_".charCodeAt(0)] = 63);
  function O1(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    n === -1 && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
  }
  function lM(e) {
    var t = O1(e),
      n = t[0],
      r = t[1];
    return ((n + r) * 3) / 4 - r;
  }
  function uM(e, t, n) {
    return ((t + n) * 3) / 4 - n;
  }
  function cM(e) {
    var t,
      n = O1(e),
      r = n[0],
      o = n[1],
      i = new aM(uM(e, r, o)),
      a = 0,
      s = o > 0 ? r - 4 : r,
      l;
    for (l = 0; l < s; l += 4)
      (t =
        (cn[e.charCodeAt(l)] << 18) |
        (cn[e.charCodeAt(l + 1)] << 12) |
        (cn[e.charCodeAt(l + 2)] << 6) |
        cn[e.charCodeAt(l + 3)]),
        (i[a++] = (t >> 16) & 255),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255);
    return (
      o === 2 &&
        ((t = (cn[e.charCodeAt(l)] << 2) | (cn[e.charCodeAt(l + 1)] >> 4)),
        (i[a++] = t & 255)),
      o === 1 &&
        ((t =
          (cn[e.charCodeAt(l)] << 10) |
          (cn[e.charCodeAt(l + 1)] << 4) |
          (cn[e.charCodeAt(l + 2)] >> 2)),
        (i[a++] = (t >> 8) & 255),
        (i[a++] = t & 255)),
      i
    );
  }
  function dM(e) {
    return (
      jn[(e >> 18) & 63] + jn[(e >> 12) & 63] + jn[(e >> 6) & 63] + jn[e & 63]
    );
  }
  function fM(e, t, n) {
    for (var r, o = [], i = t; i < n; i += 3)
      (r =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        o.push(dM(r));
    return o.join("");
  }
  function pM(e) {
    for (
      var t, n = e.length, r = n % 3, o = [], i = 16383, a = 0, s = n - r;
      a < s;
      a += i
    )
      o.push(fM(e, a, a + i > s ? s : a + i));
    return (
      r === 1
        ? ((t = e[n - 1]), o.push(jn[t >> 2] + jn[(t << 4) & 63] + "=="))
        : r === 2 &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          o.push(jn[t >> 10] + jn[(t >> 4) & 63] + jn[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
  var sh = { byteLength: rM, toByteArray: oM, fromByteArray: iM },
    hM = function (e, t, n, r, o) {
      var i,
        a,
        s = o * 8 - r - 1,
        l = (1 << s) - 1,
        u = l >> 1,
        d = -7,
        f = n ? o - 1 : 0,
        p = n ? -1 : 1,
        y = e[t + f];
      for (
        f += p, i = y & ((1 << -d) - 1), y >>= -d, d += s;
        d > 0;
        i = i * 256 + e[t + f], f += p, d -= 8
      );
      for (
        a = i & ((1 << -d) - 1), i >>= -d, d += r;
        d > 0;
        a = a * 256 + e[t + f], f += p, d -= 8
      );
      if (i === 0) i = 1 - u;
      else {
        if (i === l) return a ? NaN : (y ? -1 : 1) * (1 / 0);
        (a = a + Math.pow(2, r)), (i = i - u);
      }
      return (y ? -1 : 1) * a * Math.pow(2, i - r);
    },
    mM = function (e, t, n, r, o, i) {
      var a,
        s,
        l,
        u = i * 8 - o - 1,
        d = (1 << u) - 1,
        f = d >> 1,
        p = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        y = r ? 0 : i - 1,
        m = r ? 1 : -1,
        w = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
      for (
        t = Math.abs(t),
          isNaN(t) || t === 1 / 0
            ? ((s = isNaN(t) ? 1 : 0), (a = d))
            : ((a = Math.floor(Math.log(t) / Math.LN2)),
              t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
              a + f >= 1 ? (t += p / l) : (t += p * Math.pow(2, 1 - f)),
              t * l >= 2 && (a++, (l /= 2)),
              a + f >= d
                ? ((s = 0), (a = d))
                : a + f >= 1
                ? ((s = (t * l - 1) * Math.pow(2, o)), (a = a + f))
                : ((s = t * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
        o >= 8;
        e[n + y] = s & 255, y += m, s /= 256, o -= 8
      );
      for (
        a = (a << o) | s, u += o;
        u > 0;
        e[n + y] = a & 255, y += m, a /= 256, u -= 8
      );
      e[n + y - m] |= w * 128;
    },
    gi = { read: hM, write: mM },
    Xu = nM(function (e, t) {
      var n =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
      (t.Buffer = a), (t.SlowBuffer = b), (t.INSPECT_MAX_BYTES = 50);
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
            h = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(h, Uint8Array.prototype),
            Object.setPrototypeOf(c, h),
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
        var h = new Uint8Array(c);
        return Object.setPrototypeOf(h, a.prototype), h;
      }
      function a(c, h, S) {
        if (typeof c == "number") {
          if (typeof h == "string")
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return d(c);
        }
        return s(c, h, S);
      }
      a.poolSize = 8192;
      function s(c, h, S) {
        if (typeof c == "string") return f(c, h);
        if (ArrayBuffer.isView(c)) return y(c);
        if (c == null)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              babelHelpers.typeof(c),
          );
        if (
          Ie(c, ArrayBuffer) ||
          (c && Ie(c.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (Ie(c, SharedArrayBuffer) ||
              (c && Ie(c.buffer, SharedArrayBuffer))))
        )
          return m(c, h, S);
        if (typeof c == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        var N = c.valueOf && c.valueOf();
        if (N != null && N !== c) return a.from(N, h, S);
        var $ = w(c);
        if ($) return $;
        if (
          typeof Symbol < "u" &&
          Symbol.toPrimitive != null &&
          typeof c[Symbol.toPrimitive] == "function"
        )
          return a.from(c[Symbol.toPrimitive]("string"), h, S);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            babelHelpers.typeof(c),
        );
      }
      (a.from = function (c, h, S) {
        return s(c, h, S);
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
      function u(c, h, S) {
        return (
          l(c),
          c <= 0
            ? i(c)
            : h !== void 0
            ? typeof S == "string"
              ? i(c).fill(h, S)
              : i(c).fill(h)
            : i(c)
        );
      }
      a.alloc = function (c, h, S) {
        return u(c, h, S);
      };
      function d(c) {
        return l(c), i(c < 0 ? 0 : P(c) | 0);
      }
      (a.allocUnsafe = function (c) {
        return d(c);
      }),
        (a.allocUnsafeSlow = function (c) {
          return d(c);
        });
      function f(c, h) {
        if (
          ((typeof h != "string" || h === "") && (h = "utf8"), !a.isEncoding(h))
        )
          throw new TypeError("Unknown encoding: " + h);
        var S = g(c, h) | 0,
          N = i(S),
          $ = N.write(c, h);
        return $ !== S && (N = N.slice(0, $)), N;
      }
      function p(c) {
        for (
          var h = c.length < 0 ? 0 : P(c.length) | 0, S = i(h), N = 0;
          N < h;
          N += 1
        )
          S[N] = c[N] & 255;
        return S;
      }
      function y(c) {
        if (Ie(c, Uint8Array)) {
          var h = new Uint8Array(c);
          return m(h.buffer, h.byteOffset, h.byteLength);
        }
        return p(c);
      }
      function m(c, h, S) {
        if (h < 0 || c.byteLength < h)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (c.byteLength < h + (S || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var N;
        return (
          h === void 0 && S === void 0
            ? (N = new Uint8Array(c))
            : S === void 0
            ? (N = new Uint8Array(c, h))
            : (N = new Uint8Array(c, h, S)),
          Object.setPrototypeOf(N, a.prototype),
          N
        );
      }
      function w(c) {
        if (a.isBuffer(c)) {
          var h = P(c.length) | 0,
            S = i(h);
          return S.length === 0 || c.copy(S, 0, 0, h), S;
        }
        if (c.length !== void 0)
          return typeof c.length != "number" || tt(c.length) ? i(0) : p(c);
        if (c.type === "Buffer" && Array.isArray(c.data)) return p(c.data);
      }
      function P(c) {
        if (c >= r)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r.toString(16) +
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
        (a.compare = function (c, h) {
          if (
            (Ie(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
            Ie(h, Uint8Array) && (h = a.from(h, h.offset, h.byteLength)),
            !a.isBuffer(c) || !a.isBuffer(h))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (c === h) return 0;
          for (
            var S = c.length, N = h.length, $ = 0, j = Math.min(S, N);
            $ < j;
            ++$
          )
            if (c[$] !== h[$]) {
              (S = c[$]), (N = h[$]);
              break;
            }
          return S < N ? -1 : N < S ? 1 : 0;
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
        (a.concat = function (c, h) {
          if (!Array.isArray(c))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (c.length === 0) return a.alloc(0);
          var S;
          if (h === void 0)
            for (h = 0, S = 0; S < c.length; ++S) h += c[S].length;
          var N = a.allocUnsafe(h),
            $ = 0;
          for (S = 0; S < c.length; ++S) {
            var j = c[S];
            if (Ie(j, Uint8Array))
              $ + j.length > N.length
                ? a.from(j).copy(N, $)
                : Uint8Array.prototype.set.call(N, j, $);
            else if (a.isBuffer(j)) j.copy(N, $);
            else
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            $ += j.length;
          }
          return N;
        });
      function g(c, h) {
        if (a.isBuffer(c)) return c.length;
        if (ArrayBuffer.isView(c) || Ie(c, ArrayBuffer)) return c.byteLength;
        if (typeof c != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              babelHelpers.typeof(c),
          );
        var S = c.length,
          N = arguments.length > 2 && arguments[2] === !0;
        if (!N && S === 0) return 0;
        for (var $ = !1; ; )
          switch (h) {
            case "ascii":
            case "latin1":
            case "binary":
              return S;
            case "utf8":
            case "utf-8":
              return ge(c).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return S * 2;
            case "hex":
              return S >>> 1;
            case "base64":
              return le(c).length;
            default:
              if ($) return N ? -1 : ge(c).length;
              (h = ("" + h).toLowerCase()), ($ = !0);
          }
      }
      a.byteLength = g;
      function v(c, h, S) {
        var N = !1;
        if (
          ((h === void 0 || h < 0) && (h = 0),
          h > this.length ||
            ((S === void 0 || S > this.length) && (S = this.length), S <= 0) ||
            ((S >>>= 0), (h >>>= 0), S <= h))
        )
          return "";
        for (c || (c = "utf8"); ; )
          switch (c) {
            case "hex":
              return L(this, h, S);
            case "utf8":
            case "utf-8":
              return B(this, h, S);
            case "ascii":
              return G(this, h, S);
            case "latin1":
            case "binary":
              return H(this, h, S);
            case "base64":
              return U(this, h, S);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, h, S);
            default:
              if (N) throw new TypeError("Unknown encoding: " + c);
              (c = (c + "").toLowerCase()), (N = !0);
          }
      }
      a.prototype._isBuffer = !0;
      function k(c, h, S) {
        var N = c[h];
        (c[h] = c[S]), (c[S] = N);
      }
      (a.prototype.swap16 = function () {
        var c = this.length;
        if (c % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var h = 0; h < c; h += 2) k(this, h, h + 1);
        return this;
      }),
        (a.prototype.swap32 = function () {
          var c = this.length;
          if (c % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var h = 0; h < c; h += 4)
            k(this, h, h + 3), k(this, h + 1, h + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var c = this.length;
          if (c % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var h = 0; h < c; h += 8)
            k(this, h, h + 7),
              k(this, h + 1, h + 6),
              k(this, h + 2, h + 5),
              k(this, h + 3, h + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          var c = this.length;
          return c === 0
            ? ""
            : arguments.length === 0
            ? B(this, 0, c)
            : v.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (c) {
          if (!a.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
          return this === c ? !0 : a.compare(this, c) === 0;
        }),
        (a.prototype.inspect = function () {
          var c = "",
            h = t.INSPECT_MAX_BYTES;
          return (
            (c = this.toString("hex", 0, h)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > h && (c += " ... "),
            "<Buffer " + c + ">"
          );
        }),
        n && (a.prototype[n] = a.prototype.inspect),
        (a.prototype.compare = function (c, h, S, N, $) {
          if (
            (Ie(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
            !a.isBuffer(c))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                babelHelpers.typeof(c),
            );
          if (
            (h === void 0 && (h = 0),
            S === void 0 && (S = c ? c.length : 0),
            N === void 0 && (N = 0),
            $ === void 0 && ($ = this.length),
            h < 0 || S > c.length || N < 0 || $ > this.length)
          )
            throw new RangeError("out of range index");
          if (N >= $ && h >= S) return 0;
          if (N >= $) return -1;
          if (h >= S) return 1;
          if (((h >>>= 0), (S >>>= 0), (N >>>= 0), ($ >>>= 0), this === c))
            return 0;
          for (
            var j = $ - N,
              Z = S - h,
              he = Math.min(j, Z),
              be = this.slice(N, $),
              ue = c.slice(h, S),
              xe = 0;
            xe < he;
            ++xe
          )
            if (be[xe] !== ue[xe]) {
              (j = be[xe]), (Z = ue[xe]);
              break;
            }
          return j < Z ? -1 : Z < j ? 1 : 0;
        });
      function O(c, h, S, N, $) {
        if (c.length === 0) return -1;
        if (
          (typeof S == "string"
            ? ((N = S), (S = 0))
            : S > 2147483647
            ? (S = 2147483647)
            : S < -2147483648 && (S = -2147483648),
          (S = +S),
          tt(S) && (S = $ ? 0 : c.length - 1),
          S < 0 && (S = c.length + S),
          S >= c.length)
        ) {
          if ($) return -1;
          S = c.length - 1;
        } else if (S < 0)
          if ($) S = 0;
          else return -1;
        if ((typeof h == "string" && (h = a.from(h, N)), a.isBuffer(h)))
          return h.length === 0 ? -1 : R(c, h, S, N, $);
        if (typeof h == "number")
          return (
            (h = h & 255),
            typeof Uint8Array.prototype.indexOf == "function"
              ? $
                ? Uint8Array.prototype.indexOf.call(c, h, S)
                : Uint8Array.prototype.lastIndexOf.call(c, h, S)
              : R(c, [h], S, N, $)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function R(c, h, S, N, $) {
        var j = 1,
          Z = c.length,
          he = h.length;
        if (
          N !== void 0 &&
          ((N = String(N).toLowerCase()),
          N === "ucs2" || N === "ucs-2" || N === "utf16le" || N === "utf-16le")
        ) {
          if (c.length < 2 || h.length < 2) return -1;
          (j = 2), (Z /= 2), (he /= 2), (S /= 2);
        }
        function be(W, Re) {
          return j === 1 ? W[Re] : W.readUInt16BE(Re * j);
        }
        var ue;
        if ($) {
          var xe = -1;
          for (ue = S; ue < Z; ue++)
            if (be(c, ue) === be(h, xe === -1 ? 0 : ue - xe)) {
              if ((xe === -1 && (xe = ue), ue - xe + 1 === he)) return xe * j;
            } else xe !== -1 && (ue -= ue - xe), (xe = -1);
        } else
          for (S + he > Z && (S = Z - he), ue = S; ue >= 0; ue--) {
            for (var Oe = !0, ye = 0; ye < he; ye++)
              if (be(c, ue + ye) !== be(h, ye)) {
                Oe = !1;
                break;
              }
            if (Oe) return ue;
          }
        return -1;
      }
      (a.prototype.includes = function (c, h, S) {
        return this.indexOf(c, h, S) !== -1;
      }),
        (a.prototype.indexOf = function (c, h, S) {
          return O(this, c, h, S, !0);
        }),
        (a.prototype.lastIndexOf = function (c, h, S) {
          return O(this, c, h, S, !1);
        });
      function T(c, h, S, N) {
        S = Number(S) || 0;
        var $ = c.length - S;
        N ? ((N = Number(N)), N > $ && (N = $)) : (N = $);
        var j = h.length;
        N > j / 2 && (N = j / 2);
        for (var Z = 0; Z < N; ++Z) {
          var he = parseInt(h.substr(Z * 2, 2), 16);
          if (tt(he)) return Z;
          c[S + Z] = he;
        }
        return Z;
      }
      function A(c, h, S, N) {
        return Me(ge(h, c.length - S), c, S, N);
      }
      function _(c, h, S, N) {
        return Me(me(h), c, S, N);
      }
      function M(c, h, S, N) {
        return Me(le(h), c, S, N);
      }
      function D(c, h, S, N) {
        return Me(De(h, c.length - S), c, S, N);
      }
      (a.prototype.write = function (c, h, S, N) {
        if (h === void 0) (N = "utf8"), (S = this.length), (h = 0);
        else if (S === void 0 && typeof h == "string")
          (N = h), (S = this.length), (h = 0);
        else if (isFinite(h))
          (h = h >>> 0),
            isFinite(S)
              ? ((S = S >>> 0), N === void 0 && (N = "utf8"))
              : ((N = S), (S = void 0));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported",
          );
        var $ = this.length - h;
        if (
          ((S === void 0 || S > $) && (S = $),
          (c.length > 0 && (S < 0 || h < 0)) || h > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        N || (N = "utf8");
        for (var j = !1; ; )
          switch (N) {
            case "hex":
              return T(this, c, h, S);
            case "utf8":
            case "utf-8":
              return A(this, c, h, S);
            case "ascii":
            case "latin1":
            case "binary":
              return _(this, c, h, S);
            case "base64":
              return M(this, c, h, S);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return D(this, c, h, S);
            default:
              if (j) throw new TypeError("Unknown encoding: " + N);
              (N = ("" + N).toLowerCase()), (j = !0);
          }
      }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function U(c, h, S) {
        return h === 0 && S === c.length
          ? sh.fromByteArray(c)
          : sh.fromByteArray(c.slice(h, S));
      }
      function B(c, h, S) {
        S = Math.min(c.length, S);
        for (var N = [], $ = h; $ < S; ) {
          var j = c[$],
            Z = null,
            he = j > 239 ? 4 : j > 223 ? 3 : j > 191 ? 2 : 1;
          if ($ + he <= S) {
            var be, ue, xe, Oe;
            switch (he) {
              case 1:
                j < 128 && (Z = j);
                break;
              case 2:
                (be = c[$ + 1]),
                  (be & 192) === 128 &&
                    ((Oe = ((j & 31) << 6) | (be & 63)), Oe > 127 && (Z = Oe));
                break;
              case 3:
                (be = c[$ + 1]),
                  (ue = c[$ + 2]),
                  (be & 192) === 128 &&
                    (ue & 192) === 128 &&
                    ((Oe = ((j & 15) << 12) | ((be & 63) << 6) | (ue & 63)),
                    Oe > 2047 && (Oe < 55296 || Oe > 57343) && (Z = Oe));
                break;
              case 4:
                (be = c[$ + 1]),
                  (ue = c[$ + 2]),
                  (xe = c[$ + 3]),
                  (be & 192) === 128 &&
                    (ue & 192) === 128 &&
                    (xe & 192) === 128 &&
                    ((Oe =
                      ((j & 15) << 18) |
                      ((be & 63) << 12) |
                      ((ue & 63) << 6) |
                      (xe & 63)),
                    Oe > 65535 && Oe < 1114112 && (Z = Oe));
            }
          }
          Z === null
            ? ((Z = 65533), (he = 1))
            : Z > 65535 &&
              ((Z -= 65536),
              N.push(((Z >>> 10) & 1023) | 55296),
              (Z = 56320 | (Z & 1023))),
            N.push(Z),
            ($ += he);
        }
        return V(N);
      }
      var F = 4096;
      function V(c) {
        var h = c.length;
        if (h <= F) return String.fromCharCode.apply(String, c);
        for (var S = "", N = 0; N < h; )
          S += String.fromCharCode.apply(String, c.slice(N, (N += F)));
        return S;
      }
      function G(c, h, S) {
        var N = "";
        S = Math.min(c.length, S);
        for (var $ = h; $ < S; ++$) N += String.fromCharCode(c[$] & 127);
        return N;
      }
      function H(c, h, S) {
        var N = "";
        S = Math.min(c.length, S);
        for (var $ = h; $ < S; ++$) N += String.fromCharCode(c[$]);
        return N;
      }
      function L(c, h, S) {
        var N = c.length;
        (!h || h < 0) && (h = 0), (!S || S < 0 || S > N) && (S = N);
        for (var $ = "", j = h; j < S; ++j) $ += it[c[j]];
        return $;
      }
      function I(c, h, S) {
        for (var N = c.slice(h, S), $ = "", j = 0; j < N.length - 1; j += 2)
          $ += String.fromCharCode(N[j] + N[j + 1] * 256);
        return $;
      }
      a.prototype.slice = function (c, h) {
        var S = this.length;
        (c = ~~c),
          (h = h === void 0 ? S : ~~h),
          c < 0 ? ((c += S), c < 0 && (c = 0)) : c > S && (c = S),
          h < 0 ? ((h += S), h < 0 && (h = 0)) : h > S && (h = S),
          h < c && (h = c);
        var N = this.subarray(c, h);
        return Object.setPrototypeOf(N, a.prototype), N;
      };
      function z(c, h, S) {
        if (c % 1 !== 0 || c < 0) throw new RangeError("offset is not uint");
        if (c + h > S)
          throw new RangeError("Trying to access beyond buffer length");
      }
      (a.prototype.readUintLE = a.prototype.readUIntLE =
        function (c, h, S) {
          (c = c >>> 0), (h = h >>> 0), S || z(c, h, this.length);
          for (var N = this[c], $ = 1, j = 0; ++j < h && ($ *= 256); )
            N += this[c + j] * $;
          return N;
        }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (c, h, S) {
            (c = c >>> 0), (h = h >>> 0), S || z(c, h, this.length);
            for (var N = this[c + --h], $ = 1; h > 0 && ($ *= 256); )
              N += this[c + --h] * $;
            return N;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (c, h) {
            return (c = c >>> 0), h || z(c, 1, this.length), this[c];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (c, h) {
            return (
              (c = c >>> 0),
              h || z(c, 2, this.length),
              this[c] | (this[c + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (c, h) {
            return (
              (c = c >>> 0),
              h || z(c, 2, this.length),
              (this[c] << 8) | this[c + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (c, h) {
            return (
              (c = c >>> 0),
              h || z(c, 4, this.length),
              (this[c] | (this[c + 1] << 8) | (this[c + 2] << 16)) +
                this[c + 3] * 16777216
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (c, h) {
            return (
              (c = c >>> 0),
              h || z(c, 4, this.length),
              this[c] * 16777216 +
                ((this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3])
            );
          }),
        (a.prototype.readIntLE = function (c, h, S) {
          (c = c >>> 0), (h = h >>> 0), S || z(c, h, this.length);
          for (var N = this[c], $ = 1, j = 0; ++j < h && ($ *= 256); )
            N += this[c + j] * $;
          return ($ *= 128), N >= $ && (N -= Math.pow(2, 8 * h)), N;
        }),
        (a.prototype.readIntBE = function (c, h, S) {
          (c = c >>> 0), (h = h >>> 0), S || z(c, h, this.length);
          for (var N = h, $ = 1, j = this[c + --N]; N > 0 && ($ *= 256); )
            j += this[c + --N] * $;
          return ($ *= 128), j >= $ && (j -= Math.pow(2, 8 * h)), j;
        }),
        (a.prototype.readInt8 = function (c, h) {
          return (
            (c = c >>> 0),
            h || z(c, 1, this.length),
            this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]
          );
        }),
        (a.prototype.readInt16LE = function (c, h) {
          (c = c >>> 0), h || z(c, 2, this.length);
          var S = this[c] | (this[c + 1] << 8);
          return S & 32768 ? S | 4294901760 : S;
        }),
        (a.prototype.readInt16BE = function (c, h) {
          (c = c >>> 0), h || z(c, 2, this.length);
          var S = this[c + 1] | (this[c] << 8);
          return S & 32768 ? S | 4294901760 : S;
        }),
        (a.prototype.readInt32LE = function (c, h) {
          return (
            (c = c >>> 0),
            h || z(c, 4, this.length),
            this[c] |
              (this[c + 1] << 8) |
              (this[c + 2] << 16) |
              (this[c + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (c, h) {
          return (
            (c = c >>> 0),
            h || z(c, 4, this.length),
            (this[c] << 24) |
              (this[c + 1] << 16) |
              (this[c + 2] << 8) |
              this[c + 3]
          );
        }),
        (a.prototype.readFloatLE = function (c, h) {
          return (
            (c = c >>> 0),
            h || z(c, 4, this.length),
            gi.read(this, c, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (c, h) {
          return (
            (c = c >>> 0),
            h || z(c, 4, this.length),
            gi.read(this, c, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (c, h) {
          return (
            (c = c >>> 0),
            h || z(c, 8, this.length),
            gi.read(this, c, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (c, h) {
          return (
            (c = c >>> 0),
            h || z(c, 8, this.length),
            gi.read(this, c, !1, 52, 8)
          );
        });
      function J(c, h, S, N, $, j) {
        if (!a.isBuffer(c))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (h > $ || h < j)
          throw new RangeError('"value" argument is out of bounds');
        if (S + N > c.length) throw new RangeError("Index out of range");
      }
      (a.prototype.writeUintLE = a.prototype.writeUIntLE =
        function (c, h, S, N) {
          if (((c = +c), (h = h >>> 0), (S = S >>> 0), !N)) {
            var $ = Math.pow(2, 8 * S) - 1;
            J(this, c, h, S, $, 0);
          }
          var j = 1,
            Z = 0;
          for (this[h] = c & 255; ++Z < S && (j *= 256); )
            this[h + Z] = (c / j) & 255;
          return h + S;
        }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (c, h, S, N) {
            if (((c = +c), (h = h >>> 0), (S = S >>> 0), !N)) {
              var $ = Math.pow(2, 8 * S) - 1;
              J(this, c, h, S, $, 0);
            }
            var j = S - 1,
              Z = 1;
            for (this[h + j] = c & 255; --j >= 0 && (Z *= 256); )
              this[h + j] = (c / Z) & 255;
            return h + S;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (c, h, S) {
            return (
              (c = +c),
              (h = h >>> 0),
              S || J(this, c, h, 1, 255, 0),
              (this[h] = c & 255),
              h + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (c, h, S) {
            return (
              (c = +c),
              (h = h >>> 0),
              S || J(this, c, h, 2, 65535, 0),
              (this[h] = c & 255),
              (this[h + 1] = c >>> 8),
              h + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (c, h, S) {
            return (
              (c = +c),
              (h = h >>> 0),
              S || J(this, c, h, 2, 65535, 0),
              (this[h] = c >>> 8),
              (this[h + 1] = c & 255),
              h + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (c, h, S) {
            return (
              (c = +c),
              (h = h >>> 0),
              S || J(this, c, h, 4, 4294967295, 0),
              (this[h + 3] = c >>> 24),
              (this[h + 2] = c >>> 16),
              (this[h + 1] = c >>> 8),
              (this[h] = c & 255),
              h + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (c, h, S) {
            return (
              (c = +c),
              (h = h >>> 0),
              S || J(this, c, h, 4, 4294967295, 0),
              (this[h] = c >>> 24),
              (this[h + 1] = c >>> 16),
              (this[h + 2] = c >>> 8),
              (this[h + 3] = c & 255),
              h + 4
            );
          }),
        (a.prototype.writeIntLE = function (c, h, S, N) {
          if (((c = +c), (h = h >>> 0), !N)) {
            var $ = Math.pow(2, 8 * S - 1);
            J(this, c, h, S, $ - 1, -$);
          }
          var j = 0,
            Z = 1,
            he = 0;
          for (this[h] = c & 255; ++j < S && (Z *= 256); )
            c < 0 && he === 0 && this[h + j - 1] !== 0 && (he = 1),
              (this[h + j] = (((c / Z) >> 0) - he) & 255);
          return h + S;
        }),
        (a.prototype.writeIntBE = function (c, h, S, N) {
          if (((c = +c), (h = h >>> 0), !N)) {
            var $ = Math.pow(2, 8 * S - 1);
            J(this, c, h, S, $ - 1, -$);
          }
          var j = S - 1,
            Z = 1,
            he = 0;
          for (this[h + j] = c & 255; --j >= 0 && (Z *= 256); )
            c < 0 && he === 0 && this[h + j + 1] !== 0 && (he = 1),
              (this[h + j] = (((c / Z) >> 0) - he) & 255);
          return h + S;
        }),
        (a.prototype.writeInt8 = function (c, h, S) {
          return (
            (c = +c),
            (h = h >>> 0),
            S || J(this, c, h, 1, 127, -128),
            c < 0 && (c = 255 + c + 1),
            (this[h] = c & 255),
            h + 1
          );
        }),
        (a.prototype.writeInt16LE = function (c, h, S) {
          return (
            (c = +c),
            (h = h >>> 0),
            S || J(this, c, h, 2, 32767, -32768),
            (this[h] = c & 255),
            (this[h + 1] = c >>> 8),
            h + 2
          );
        }),
        (a.prototype.writeInt16BE = function (c, h, S) {
          return (
            (c = +c),
            (h = h >>> 0),
            S || J(this, c, h, 2, 32767, -32768),
            (this[h] = c >>> 8),
            (this[h + 1] = c & 255),
            h + 2
          );
        }),
        (a.prototype.writeInt32LE = function (c, h, S) {
          return (
            (c = +c),
            (h = h >>> 0),
            S || J(this, c, h, 4, 2147483647, -2147483648),
            (this[h] = c & 255),
            (this[h + 1] = c >>> 8),
            (this[h + 2] = c >>> 16),
            (this[h + 3] = c >>> 24),
            h + 4
          );
        }),
        (a.prototype.writeInt32BE = function (c, h, S) {
          return (
            (c = +c),
            (h = h >>> 0),
            S || J(this, c, h, 4, 2147483647, -2147483648),
            c < 0 && (c = 4294967295 + c + 1),
            (this[h] = c >>> 24),
            (this[h + 1] = c >>> 16),
            (this[h + 2] = c >>> 8),
            (this[h + 3] = c & 255),
            h + 4
          );
        });
      function re(c, h, S, N, $, j) {
        if (S + N > c.length) throw new RangeError("Index out of range");
        if (S < 0) throw new RangeError("Index out of range");
      }
      function ie(c, h, S, N, $) {
        return (
          (h = +h),
          (S = S >>> 0),
          $ || re(c, h, S, 4),
          gi.write(c, h, S, N, 23, 4),
          S + 4
        );
      }
      (a.prototype.writeFloatLE = function (c, h, S) {
        return ie(this, c, h, !0, S);
      }),
        (a.prototype.writeFloatBE = function (c, h, S) {
          return ie(this, c, h, !1, S);
        });
      function de(c, h, S, N, $) {
        return (
          (h = +h),
          (S = S >>> 0),
          $ || re(c, h, S, 8),
          gi.write(c, h, S, N, 52, 8),
          S + 8
        );
      }
      (a.prototype.writeDoubleLE = function (c, h, S) {
        return de(this, c, h, !0, S);
      }),
        (a.prototype.writeDoubleBE = function (c, h, S) {
          return de(this, c, h, !1, S);
        }),
        (a.prototype.copy = function (c, h, S, N) {
          if (!a.isBuffer(c))
            throw new TypeError("argument should be a Buffer");
          if (
            (S || (S = 0),
            !N && N !== 0 && (N = this.length),
            h >= c.length && (h = c.length),
            h || (h = 0),
            N > 0 && N < S && (N = S),
            N === S || c.length === 0 || this.length === 0)
          )
            return 0;
          if (h < 0) throw new RangeError("targetStart out of bounds");
          if (S < 0 || S >= this.length)
            throw new RangeError("Index out of range");
          if (N < 0) throw new RangeError("sourceEnd out of bounds");
          N > this.length && (N = this.length),
            c.length - h < N - S && (N = c.length - h + S);
          var $ = N - S;
          return (
            this === c && typeof Uint8Array.prototype.copyWithin == "function"
              ? this.copyWithin(h, S, N)
              : Uint8Array.prototype.set.call(c, this.subarray(S, N), h),
            $
          );
        }),
        (a.prototype.fill = function (c, h, S, N) {
          if (typeof c == "string") {
            if (
              (typeof h == "string"
                ? ((N = h), (h = 0), (S = this.length))
                : typeof S == "string" && ((N = S), (S = this.length)),
              N !== void 0 && typeof N != "string")
            )
              throw new TypeError("encoding must be a string");
            if (typeof N == "string" && !a.isEncoding(N))
              throw new TypeError("Unknown encoding: " + N);
            if (c.length === 1) {
              var $ = c.charCodeAt(0);
              ((N === "utf8" && $ < 128) || N === "latin1") && (c = $);
            }
          } else
            typeof c == "number"
              ? (c = c & 255)
              : typeof c == "boolean" && (c = Number(c));
          if (h < 0 || this.length < h || this.length < S)
            throw new RangeError("Out of range index");
          if (S <= h) return this;
          (h = h >>> 0),
            (S = S === void 0 ? this.length : S >>> 0),
            c || (c = 0);
          var j;
          if (typeof c == "number") for (j = h; j < S; ++j) this[j] = c;
          else {
            var Z = a.isBuffer(c) ? c : a.from(c, N),
              he = Z.length;
            if (he === 0)
              throw new TypeError(
                'The value "' + c + '" is invalid for argument "value"',
              );
            for (j = 0; j < S - h; ++j) this[j + h] = Z[j % he];
          }
          return this;
        });
      var fe = /[^+/0-9A-Za-z-_]/g;
      function ke(c) {
        if (
          ((c = c.split("=")[0]), (c = c.trim().replace(fe, "")), c.length < 2)
        )
          return "";
        for (; c.length % 4 !== 0; ) c = c + "=";
        return c;
      }
      function ge(c, h) {
        h = h || 1 / 0;
        for (var S, N = c.length, $ = null, j = [], Z = 0; Z < N; ++Z) {
          if (((S = c.charCodeAt(Z)), S > 55295 && S < 57344)) {
            if (!$) {
              if (S > 56319) {
                (h -= 3) > -1 && j.push(239, 191, 189);
                continue;
              } else if (Z + 1 === N) {
                (h -= 3) > -1 && j.push(239, 191, 189);
                continue;
              }
              $ = S;
              continue;
            }
            if (S < 56320) {
              (h -= 3) > -1 && j.push(239, 191, 189), ($ = S);
              continue;
            }
            S = ((($ - 55296) << 10) | (S - 56320)) + 65536;
          } else $ && (h -= 3) > -1 && j.push(239, 191, 189);
          if ((($ = null), S < 128)) {
            if ((h -= 1) < 0) break;
            j.push(S);
          } else if (S < 2048) {
            if ((h -= 2) < 0) break;
            j.push((S >> 6) | 192, (S & 63) | 128);
          } else if (S < 65536) {
            if ((h -= 3) < 0) break;
            j.push((S >> 12) | 224, ((S >> 6) & 63) | 128, (S & 63) | 128);
          } else if (S < 1114112) {
            if ((h -= 4) < 0) break;
            j.push(
              (S >> 18) | 240,
              ((S >> 12) & 63) | 128,
              ((S >> 6) & 63) | 128,
              (S & 63) | 128,
            );
          } else throw new Error("Invalid code point");
        }
        return j;
      }
      function me(c) {
        for (var h = [], S = 0; S < c.length; ++S)
          h.push(c.charCodeAt(S) & 255);
        return h;
      }
      function De(c, h) {
        for (var S, N, $, j = [], Z = 0; Z < c.length && !((h -= 2) < 0); ++Z)
          (S = c.charCodeAt(Z)),
            (N = S >> 8),
            ($ = S % 256),
            j.push($),
            j.push(N);
        return j;
      }
      function le(c) {
        return sh.toByteArray(ke(c));
      }
      function Me(c, h, S, N) {
        for (var $ = 0; $ < N && !($ + S >= h.length || $ >= c.length); ++$)
          h[$ + S] = c[$];
        return $;
      }
      function Ie(c, h) {
        return (
          c instanceof h ||
          (c != null &&
            c.constructor != null &&
            c.constructor.name != null &&
            c.constructor.name === h.name)
        );
      }
      function tt(c) {
        return c !== c;
      }
      var it = (function () {
        for (var c = "0123456789abcdef", h = new Array(256), S = 0; S < 16; ++S)
          for (var N = S * 16, $ = 0; $ < 16; ++$) h[N + $] = c[S] + c[$];
        return h;
      })();
    }),
    Ce = Xu.Buffer;
  Xu.SlowBuffer, Xu.INSPECT_MAX_BYTES, Xu.kMaxLength;
  var lh = function (e, t) {
    return (
      (lh =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
        }),
      lh(e, t)
    );
  };
  function Qu(e, t) {
    lh(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var co = (function (e) {
      Qu(t, e);
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
    Je = (function (e) {
      Qu(t, e);
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
  function Zu(e) {
    return e && e.Math == Math && e;
  }
  function T1() {
    return (
      Zu(typeof globalThis == "object" && globalThis) ||
      Zu(typeof window == "object" && window) ||
      Zu(typeof self == "object" && self) ||
      Zu(typeof global == "object" && global) ||
      Function("return this")()
    );
  }
  function gM() {
    var e = T1();
    return (
      typeof e.navigator == "object" && e.navigator.product === "ReactNative"
    );
  }
  var yM = function (e) {
      var t = gM()
        ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values."
        : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
      console.warn(t);
      for (var n = Ce.alloc(e), r = 0; r < e; ++r)
        n[r] = Math.floor(Math.random() * 256);
      return n;
    },
    vM = function () {
      {
        if (typeof window < "u") {
          var e = window.crypto || window.msCrypto;
          if (e && e.getRandomValues)
            return function (t) {
              return e.getRandomValues(Ce.alloc(t));
            };
        }
        return typeof global < "u" &&
          global.crypto &&
          global.crypto.getRandomValues
          ? function (t) {
              return global.crypto.getRandomValues(Ce.alloc(t));
            }
          : yM;
      }
    },
    P1 = vM();
  function bM(e) {
    return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(
      Object.prototype.toString.call(e),
    );
  }
  function uh(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  function wM(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  function xM(e) {
    return Xa(e) && Object.prototype.toString.call(e) === "[object Date]";
  }
  function Xa(e) {
    return typeof e == "object" && e !== null;
  }
  function ec(e, t) {
    var n = !1;
    function r() {
      for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
      return n || (console.warn(t), (n = !0)), e.apply(this, o);
    }
    return r;
  }
  function tc(e) {
    if (ArrayBuffer.isView(e))
      return Ce.from(e.buffer, e.byteOffset, e.byteLength);
    if (bM(e)) return Ce.from(e);
    throw new Je("Must use either Buffer or TypedArray");
  }
  var SM =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i,
    R1 = function (e) {
      return typeof e == "string" && SM.test(e);
    },
    ch = function (e) {
      if (!R1(e))
        throw new Je(
          'UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".',
        );
      var t = e.replace(/-/g, "");
      return Ce.from(t, "hex");
    },
    N1 = function (e, t) {
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
    kM = Math.pow(2, 53),
    EM = -Math.pow(2, 53),
    A1 = 4,
    fo = (function () {
      function e(t, n) {
        if (!(this instanceof e)) return new e(t, n);
        if (
          t != null &&
          typeof t != "string" &&
          !ArrayBuffer.isView(t) &&
          !(t instanceof ArrayBuffer) &&
          !Array.isArray(t)
        )
          throw new Je(
            "Binary can only be constructed from string, Buffer, TypedArray, or Array<number>",
          );
        (this.sub_type = n ?? e.BSON_BINARY_SUBTYPE_DEFAULT),
          t == null
            ? ((this.buffer = Ce.alloc(e.BUFFER_SIZE)), (this.position = 0))
            : (typeof t == "string"
                ? (this.buffer = Ce.from(t, "binary"))
                : Array.isArray(t)
                ? (this.buffer = Ce.from(t))
                : (this.buffer = tc(t)),
              (this.position = this.buffer.byteLength));
      }
      return (
        (e.prototype.put = function (t) {
          if (typeof t == "string" && t.length !== 1)
            throw new Je("only accepts single character String");
          if (typeof t != "number" && t.length !== 1)
            throw new Je("only accepts single character Uint8Array or Array");
          var n;
          if (
            (typeof t == "string"
              ? (n = t.charCodeAt(0))
              : typeof t == "number"
              ? (n = t)
              : (n = t[0]),
            n < 0 || n > 255)
          )
            throw new Je(
              "only accepts number in a valid unsigned byte range 0-255",
            );
          if (this.buffer.length > this.position)
            this.buffer[this.position++] = n;
          else {
            var r = Ce.alloc(e.BUFFER_SIZE + this.buffer.length);
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
            var r = Ce.alloc(this.buffer.length + t.length);
            this.buffer.copy(r, 0, 0, this.buffer.length), (this.buffer = r);
          }
          ArrayBuffer.isView(t)
            ? (this.buffer.set(tc(t), n),
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
            return new _1(this.buffer.slice(0, this.position));
          throw new co(
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
                  (r = Ce.from(t.$binary, "base64")))
                : typeof t.$binary != "string" &&
                  ((o = t.$binary.subType
                    ? parseInt(t.$binary.subType, 16)
                    : 0),
                  (r = Ce.from(t.$binary.base64, "base64")))
              : "$uuid" in t && ((o = 4), (r = ch(t.$uuid))),
            !r)
          )
            throw new Je(
              "Unexpected Binary Extended JSON format ".concat(
                JSON.stringify(t),
              ),
            );
          return o === A1 ? new _1(r) : new e(r, o);
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
  Object.defineProperty(fo.prototype, "_bsontype", { value: "Binary" });
  var dh = 16,
    _1 = (function (e) {
      Qu(t, e);
      function t(n) {
        var r = this,
          o,
          i;
        if (n == null) o = t.generate();
        else if (n instanceof t) (o = Ce.from(n.buffer)), (i = n.__id);
        else if (ArrayBuffer.isView(n) && n.byteLength === dh) o = tc(n);
        else if (typeof n == "string") o = ch(n);
        else
          throw new Je(
            "Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).",
          );
        return (r = e.call(this, o, A1) || this), (r.__id = i), r;
      }
      return (
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this.buffer;
          },
          set: function (n) {
            (this.buffer = n), t.cacheHexString && (this.__id = N1(n));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toHexString = function (n) {
          if ((n === void 0 && (n = !0), t.cacheHexString && this.__id))
            return this.__id;
          var r = N1(this.id, n);
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
          return new fo(this.id, fo.SUBTYPE_UUID);
        }),
        (t.generate = function () {
          var n = P1(dh);
          return (
            (n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), Ce.from(n)
          );
        }),
        (t.isValid = function (n) {
          return n
            ? n instanceof t
              ? !0
              : typeof n == "string"
              ? R1(n)
              : uh(n)
              ? n.length !== dh
                ? !1
                : (n[6] & 240) === 64 && (n[8] & 128) === 128
              : !1
            : !1;
        }),
        (t.createFromHexString = function (n) {
          var r = ch(n);
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
    })(fo),
    nc = (function () {
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
  Object.defineProperty(nc.prototype, "_bsontype", { value: "Code" });
  function CM(e) {
    return (
      Xa(e) &&
      e.$id != null &&
      typeof e.$ref == "string" &&
      (e.$db == null || typeof e.$db == "string")
    );
  }
  var Qa = (function () {
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
  Object.defineProperty(Qa.prototype, "_bsontype", { value: "DBRef" });
  var dn = void 0;
  try {
    dn = new WebAssembly.Instance(
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
  var M1 = 1 << 16,
    OM = 1 << 24,
    yi = M1 * M1,
    I1 = yi * yi,
    $1 = I1 / 2,
    L1 = {},
    B1 = {},
    ne = (function () {
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
              (i = 0 <= t && t < 256) && ((o = B1[t]), o)
                ? o
                : ((r = e.fromBits(t, (t | 0) < 0 ? -1 : 0, !0)),
                  i && (B1[t] = r),
                  r))
            : ((t |= 0),
              (i = -128 <= t && t < 128) && ((o = L1[t]), o)
                ? o
                : ((r = e.fromBits(t, t < 0 ? -1 : 0, !1)),
                  i && (L1[t] = r),
                  r));
        }),
        (e.fromNumber = function (t, n) {
          if (isNaN(t)) return n ? e.UZERO : e.ZERO;
          if (n) {
            if (t < 0) return e.UZERO;
            if (t >= I1) return e.MAX_UNSIGNED_VALUE;
          } else {
            if (t <= -$1) return e.MIN_VALUE;
            if (t + 1 >= $1) return e.MAX_VALUE;
          }
          return t < 0
            ? e.fromNumber(-t, n).neg()
            : e.fromBits(t % yi | 0, (t / yi) | 0, n);
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
          return Xa(t) && t.__isLong__ === !0;
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
            p = 0,
            y = 0;
          return (
            (y += i + u),
            (p += y >>> 16),
            (y &= 65535),
            (p += o + l),
            (f += p >>> 16),
            (p &= 65535),
            (f += r + s),
            (d += f >>> 16),
            (f &= 65535),
            (d += n + a),
            (d &= 65535),
            e.fromBits((p << 16) | y, (d << 16) | f, this.unsigned)
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
          if (dn) {
            if (
              !this.unsigned &&
              this.high === -2147483648 &&
              t.low === -1 &&
              t.high === -1
            )
              return this;
            var n = (this.unsigned ? dn.div_u : dn.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, dn.get_high(), this.unsigned);
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
          if ((e.isLong(t) || (t = e.fromValue(t)), dn)) {
            var n = (this.unsigned ? dn.rem_u : dn.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return e.fromBits(n, dn.get_high(), this.unsigned);
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
          if ((e.isLong(t) || (t = e.fromValue(t)), dn)) {
            var n = dn.mul(this.low, this.high, t.low, t.high);
            return e.fromBits(n, dn.get_high(), this.unsigned);
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
            p = 0,
            y = 0,
            m = 0;
          return (
            (m += a * d),
            (y += m >>> 16),
            (m &= 65535),
            (y += i * d),
            (p += y >>> 16),
            (y &= 65535),
            (y += a * u),
            (p += y >>> 16),
            (y &= 65535),
            (p += o * d),
            (f += p >>> 16),
            (p &= 65535),
            (p += i * u),
            (f += p >>> 16),
            (p &= 65535),
            (p += a * l),
            (f += p >>> 16),
            (p &= 65535),
            (f += r * d + o * u + i * l + a * s),
            (f &= 65535),
            e.fromBits((y << 16) | m, (f << 16) | p, this.unsigned)
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
            ? (this.high >>> 0) * yi + (this.low >>> 0)
            : this.high * yi + (this.low >>> 0);
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
        (e.TWO_PWR_24 = e.fromInt(OM)),
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
  Object.defineProperty(ne.prototype, "__isLong__", { value: !0 }),
    Object.defineProperty(ne.prototype, "_bsontype", { value: "Long" });
  var TM = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
    PM = /^(\+|-)?(Infinity|inf)$/i,
    RM = /^(\+|-)?NaN$/i,
    Za = 6111,
    fh = -6176,
    z1 = 6176,
    NM = 34,
    ph = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    j1 = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    F1 = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
    AM = /^([-+])?(\d+)?$/,
    _M = 31,
    D1 = 16383,
    MM = 30,
    IM = 31;
  function U1(e) {
    return !isNaN(parseInt(e, 10));
  }
  function $M(e) {
    var t = ne.fromNumber(1e9),
      n = ne.fromNumber(0);
    if (!e.parts[0] && !e.parts[1] && !e.parts[2] && !e.parts[3])
      return { quotient: e, rem: n };
    for (var r = 0; r <= 3; r++)
      (n = n.shiftLeft(32)),
        (n = n.add(new ne(e.parts[r], 0))),
        (e.parts[r] = n.div(t).low),
        (n = n.modulo(t));
    return { quotient: e, rem: n };
  }
  function LM(e, t) {
    if (!e && !t) return { high: ne.fromNumber(0), low: ne.fromNumber(0) };
    var n = e.shiftRightUnsigned(32),
      r = new ne(e.getLowBits(), 0),
      o = t.shiftRightUnsigned(32),
      i = new ne(t.getLowBits(), 0),
      a = n.multiply(o),
      s = n.multiply(i),
      l = r.multiply(o),
      u = r.multiply(i);
    return (
      (a = a.add(s.shiftRightUnsigned(32))),
      (s = new ne(s.getLowBits(), 0).add(l).add(u.shiftRightUnsigned(32))),
      (a = a.add(s.shiftRightUnsigned(32))),
      (u = s.shiftLeft(32).add(new ne(u.getLowBits(), 0))),
      { high: a, low: u }
    );
  }
  function BM(e, t) {
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
  function vi(e, t) {
    throw new Je(
      '"'.concat(e, '" is not a valid Decimal128 string - ').concat(t),
    );
  }
  var hh = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      if (typeof t == "string") this.bytes = e.fromString(t).bytes;
      else if (uh(t)) {
        if (t.byteLength !== 16)
          throw new Je("Decimal128 must take a Buffer of 16 bytes");
        this.bytes = t;
      } else throw new Je("Decimal128 must take a Buffer or string");
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
          p = 0,
          y = 0,
          m = 0,
          w = 0,
          P = 0,
          b = new ne(0, 0),
          g = new ne(0, 0),
          v = 0,
          k = 0;
        if (t.length >= 7e3)
          throw new Je("" + t + " not a valid Decimal128 string");
        var O = t.match(TM),
          R = t.match(PM),
          T = t.match(RM);
        if ((!O && !R && !T) || t.length === 0)
          throw new Je("" + t + " not a valid Decimal128 string");
        if (O) {
          var A = O[2],
            _ = O[4],
            M = O[5],
            D = O[6];
          _ && D === void 0 && vi(t, "missing exponent power"),
            _ && A === void 0 && vi(t, "missing exponent base"),
            _ === void 0 && (M || D) && vi(t, "missing e before exponent");
        }
        if (
          ((t[k] === "+" || t[k] === "-") && (n = t[k++] === "-"),
          !U1(t[k]) && t[k] !== ".")
        ) {
          if (t[k] === "i" || t[k] === "I") return new e(Ce.from(n ? j1 : F1));
          if (t[k] === "N") return new e(Ce.from(ph));
        }
        for (; U1(t[k]) || t[k] === "."; ) {
          if (t[k] === ".") {
            r && vi(t, "contains multiple periods"), (r = !0), (k = k + 1);
            continue;
          }
          f < 34 &&
            (t[k] !== "0" || o) &&
            (o || (u = a),
            (o = !0),
            (d[p++] = parseInt(t[k], 10)),
            (f = f + 1)),
            o && (s = s + 1),
            r && (l = l + 1),
            (a = a + 1),
            (k = k + 1);
        }
        if (r && !a) throw new Je("" + t + " not a valid Decimal128 string");
        if (t[k] === "e" || t[k] === "E") {
          var U = t.substr(++k).match(AM);
          if (!U || !U[2]) return new e(Ce.from(ph));
          (w = parseInt(U[0], 10)), (k = k + U[0].length);
        }
        if (t[k]) return new e(Ce.from(ph));
        if (((y = 0), !f))
          (y = 0), (m = 0), (d[0] = 0), (s = 1), (f = 1), (i = 0);
        else if (((m = f - 1), (i = s), i !== 1))
          for (; d[u + i - 1] === 0; ) i = i - 1;
        for (w <= l && l - w > 1 << 14 ? (w = fh) : (w = w - l); w > Za; ) {
          if (((m = m + 1), m - y > NM)) {
            var B = d.join("");
            if (B.match(/^0+$/)) {
              w = Za;
              break;
            }
            vi(t, "overflow");
          }
          w = w - 1;
        }
        for (; w < fh || f < s; ) {
          if (m === 0 && i < f) {
            (w = fh), (i = 0);
            break;
          }
          if ((f < s ? (s = s - 1) : (m = m - 1), w < Za)) w = w + 1;
          else {
            var B = d.join("");
            if (B.match(/^0+$/)) {
              w = Za;
              break;
            }
            vi(t, "overflow");
          }
        }
        if (m - y + 1 < i) {
          var F = a;
          r && ((u = u + 1), (F = F + 1)), n && ((u = u + 1), (F = F + 1));
          var V = parseInt(t[u + m + 1], 10),
            G = 0;
          if (V >= 5 && ((G = 1), V === 5)) {
            for (G = d[m] % 2 === 1 ? 1 : 0, P = u + m + 2; P < F; P++)
              if (parseInt(t[P], 10)) {
                G = 1;
                break;
              }
          }
          if (G) {
            for (var H = m; H >= 0; H--)
              if (++d[H] > 9 && ((d[H] = 0), H === 0))
                if (w < Za) (w = w + 1), (d[H] = 1);
                else return new e(Ce.from(n ? j1 : F1));
          }
        }
        if (((b = ne.fromNumber(0)), (g = ne.fromNumber(0)), i === 0))
          (b = ne.fromNumber(0)), (g = ne.fromNumber(0));
        else if (m - y < 17) {
          var H = y;
          for (g = ne.fromNumber(d[H++]), b = new ne(0, 0); H <= m; H++)
            (g = g.multiply(ne.fromNumber(10))),
              (g = g.add(ne.fromNumber(d[H])));
        } else {
          var H = y;
          for (b = ne.fromNumber(d[H++]); H <= m - 17; H++)
            (b = b.multiply(ne.fromNumber(10))),
              (b = b.add(ne.fromNumber(d[H])));
          for (g = ne.fromNumber(d[H++]); H <= m; H++)
            (g = g.multiply(ne.fromNumber(10))),
              (g = g.add(ne.fromNumber(d[H])));
        }
        var L = LM(b, ne.fromString("100000000000000000"));
        (L.low = L.low.add(g)),
          BM(L.low, g) && (L.high = L.high.add(ne.fromNumber(1))),
          (v = w + z1);
        var I = { low: ne.fromNumber(0), high: ne.fromNumber(0) };
        L.high
          .shiftRightUnsigned(49)
          .and(ne.fromNumber(1))
          .equals(ne.fromNumber(1))
          ? ((I.high = I.high.or(ne.fromNumber(3).shiftLeft(61))),
            (I.high = I.high.or(
              ne.fromNumber(v).and(ne.fromNumber(16383).shiftLeft(47)),
            )),
            (I.high = I.high.or(L.high.and(ne.fromNumber(0x7fffffffffff)))))
          : ((I.high = I.high.or(ne.fromNumber(v & 16383).shiftLeft(49))),
            (I.high = I.high.or(L.high.and(ne.fromNumber(562949953421311))))),
          (I.low = L.low),
          n && (I.high = I.high.or(ne.fromString("9223372036854775808")));
        var z = Ce.alloc(16);
        return (
          (k = 0),
          (z[k++] = I.low.low & 255),
          (z[k++] = (I.low.low >> 8) & 255),
          (z[k++] = (I.low.low >> 16) & 255),
          (z[k++] = (I.low.low >> 24) & 255),
          (z[k++] = I.low.high & 255),
          (z[k++] = (I.low.high >> 8) & 255),
          (z[k++] = (I.low.high >> 16) & 255),
          (z[k++] = (I.low.high >> 24) & 255),
          (z[k++] = I.high.low & 255),
          (z[k++] = (I.high.low >> 8) & 255),
          (z[k++] = (I.high.low >> 16) & 255),
          (z[k++] = (I.high.low >> 24) & 255),
          (z[k++] = I.high.high & 255),
          (z[k++] = (I.high.high >> 8) & 255),
          (z[k++] = (I.high.high >> 16) & 255),
          (z[k++] = (I.high.high >> 24) & 255),
          new e(z)
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
        var p = this.bytes,
          y = p[i++] | (p[i++] << 8) | (p[i++] << 16) | (p[i++] << 24),
          m = p[i++] | (p[i++] << 8) | (p[i++] << 16) | (p[i++] << 24),
          w = p[i++] | (p[i++] << 8) | (p[i++] << 16) | (p[i++] << 24),
          P = p[i++] | (p[i++] << 8) | (p[i++] << 16) | (p[i++] << 24);
        i = 0;
        var b = { low: new ne(y, m), high: new ne(w, P) };
        b.high.lessThan(ne.ZERO) && f.push("-");
        var g = (P >> 26) & _M;
        if (g >> 3 === 3) {
          if (g === MM) return f.join("") + "Infinity";
          if (g === IM) return "NaN";
          (t = (P >> 15) & D1), (s = 8 + ((P >> 14) & 1));
        } else (s = (P >> 14) & 7), (t = (P >> 17) & D1);
        var v = t - z1;
        if (
          ((l.parts[0] = (P & 16383) + ((s & 15) << 14)),
          (l.parts[1] = w),
          (l.parts[2] = m),
          (l.parts[3] = y),
          l.parts[0] === 0 &&
            l.parts[1] === 0 &&
            l.parts[2] === 0 &&
            l.parts[3] === 0)
        )
          a = !0;
        else
          for (d = 3; d >= 0; d--) {
            var k = 0,
              O = $M(l);
            if (((l = O.quotient), (k = O.rem.low), !!k))
              for (u = 8; u >= 0; u--)
                (r[d * 9 + u] = k % 10), (k = Math.floor(k / 10));
          }
        if (a) (n = 1), (r[i] = 0);
        else for (n = 36; !r[i]; ) (n = n - 1), (i = i + 1);
        var R = n - 1 + v;
        if (R >= 34 || R <= -7 || v > 0) {
          if (n > 34)
            return (
              f.push("".concat(0)),
              v > 0 ? f.push("E+".concat(v)) : v < 0 && f.push("E".concat(v)),
              f.join("")
            );
          f.push("".concat(r[i++])), (n = n - 1), n && f.push(".");
          for (var o = 0; o < n; o++) f.push("".concat(r[i++]));
          f.push("E"), R > 0 ? f.push("+".concat(R)) : f.push("".concat(R));
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
  Object.defineProperty(hh.prototype, "_bsontype", { value: "Decimal128" });
  var rc = (function () {
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
  Object.defineProperty(rc.prototype, "_bsontype", { value: "Double" });
  var oc = (function () {
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
  Object.defineProperty(oc.prototype, "_bsontype", { value: "Int32" });
  var mh = (function () {
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
  Object.defineProperty(mh.prototype, "_bsontype", { value: "MaxKey" });
  var gh = (function () {
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
  Object.defineProperty(gh.prototype, "_bsontype", { value: "MinKey" });
  var zM = new RegExp("^[0-9a-fA-F]{24}$"),
    po = null,
    Fn = Symbol("id"),
    zt = (function () {
      function e(t) {
        if (!(this instanceof e)) return new e(t);
        var n;
        if (typeof t == "object" && t && "id" in t) {
          if (typeof t.id != "string" && !ArrayBuffer.isView(t.id))
            throw new Je(
              "Argument passed in must have an id that is of type string or Buffer",
            );
          "toHexString" in t && typeof t.toHexString == "function"
            ? (n = Ce.from(t.toHexString(), "hex"))
            : (n = t.id);
        } else n = t;
        if (n == null || typeof n == "number")
          this[Fn] = e.generate(typeof n == "number" ? n : void 0);
        else if (ArrayBuffer.isView(n) && n.byteLength === 12)
          this[Fn] = n instanceof Ce ? n : tc(n);
        else if (typeof n == "string")
          if (n.length === 12) {
            var r = Ce.from(n);
            if (r.byteLength === 12) this[Fn] = r;
            else
              throw new Je("Argument passed in must be a string of 12 bytes");
          } else if (n.length === 24 && zM.test(n))
            this[Fn] = Ce.from(n, "hex");
          else
            throw new Je(
              "Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer",
            );
        else
          throw new Je("Argument passed in does not match the accepted types");
        e.cacheHexString && (this.__id = this.id.toString("hex"));
      }
      return (
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this[Fn];
          },
          set: function (t) {
            (this[Fn] = t), e.cacheHexString && (this.__id = t.toString("hex"));
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
            r = Ce.alloc(12);
          return (
            r.writeUInt32BE(t, 0),
            po === null && (po = P1(5)),
            (r[4] = po[0]),
            (r[5] = po[1]),
            (r[6] = po[2]),
            (r[7] = po[3]),
            (r[8] = po[4]),
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
            return this[Fn][11] === t[Fn][11] && this[Fn].equals(t[Fn]);
          if (
            typeof t == "string" &&
            e.isValid(t) &&
            t.length === 12 &&
            uh(this.id)
          )
            return t === Ce.prototype.toString.call(this.id, "latin1");
          if (typeof t == "string" && e.isValid(t) && t.length === 24)
            return t.toLowerCase() === this.toHexString();
          if (typeof t == "string" && e.isValid(t) && t.length === 12)
            return Ce.from(t).equals(this.id);
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
          var n = Ce.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          return n.writeUInt32BE(t, 0), new e(n);
        }),
        (e.createFromHexString = function (t) {
          if (typeof t > "u" || (t != null && t.length !== 24))
            throw new Je(
              "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
            );
          return new e(Ce.from(t, "hex"));
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
  Object.defineProperty(zt.prototype, "generate", {
    value: ec(function (e) {
      return zt.generate(e);
    }, "Please use the static `ObjectId.generate(time)` instead"),
  }),
    Object.defineProperty(zt.prototype, "getInc", {
      value: ec(function () {
        return zt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(zt.prototype, "get_inc", {
      value: ec(function () {
        return zt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(zt, "get_inc", {
      value: ec(function () {
        return zt.getInc();
      }, "Please use the static `ObjectId.getInc()` instead"),
    }),
    Object.defineProperty(zt.prototype, "_bsontype", { value: "ObjectID" });
  function jM(e) {
    return e.split("").sort().join("");
  }
  var es = (function () {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      if (
        ((this.pattern = t),
        (this.options = jM(n ?? "")),
        this.pattern.indexOf("\0") !== -1)
      )
        throw new co(
          "BSON Regex patterns cannot contain null bytes, found: ".concat(
            JSON.stringify(this.pattern),
          ),
        );
      if (this.options.indexOf("\0") !== -1)
        throw new co(
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
          throw new co(
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
        throw new Je(
          "Unexpected BSONRegExp EJSON object form: ".concat(JSON.stringify(t)),
        );
      }),
      e
    );
  })();
  Object.defineProperty(es.prototype, "_bsontype", { value: "BSONRegExp" });
  var yh = (function () {
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
  Object.defineProperty(yh.prototype, "_bsontype", { value: "Symbol" });
  var FM = ne,
    W1 = (function (e) {
      Qu(t, e);
      function t(n, r) {
        var o = this;
        return o instanceof t
          ? (ne.isLong(n)
              ? (o = e.call(this, n.low, n.high, !0) || this)
              : Xa(n) && typeof n.t < "u" && typeof n.i < "u"
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
          return new t(ne.fromInt(n, !0));
        }),
        (t.fromNumber = function (n) {
          return new t(ne.fromNumber(n, !0));
        }),
        (t.fromBits = function (n, r) {
          return new t(n, r);
        }),
        (t.fromString = function (n, r) {
          return new t(ne.fromString(n, !0, r));
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
        (t.MAX_VALUE = ne.MAX_UNSIGNED_VALUE),
        t
      );
    })(FM);
  function DM(e) {
    return (
      Xa(e) && Reflect.has(e, "_bsontype") && typeof e._bsontype == "string"
    );
  }
  var V1 = 2147483647,
    H1 = -2147483648,
    q1 = 9223372036854776e3,
    K1 = -9223372036854776e3,
    UM = {
      $oid: zt,
      $binary: fo,
      $uuid: fo,
      $symbol: yh,
      $numberInt: oc,
      $numberDecimal: hh,
      $numberDouble: rc,
      $numberLong: ne,
      $minKey: gh,
      $maxKey: mh,
      $regex: es,
      $regularExpression: es,
      $timestamp: W1,
    };
  function G1(e, t) {
    if ((t === void 0 && (t = {}), typeof e == "number")) {
      if (t.relaxed || t.legacy) return e;
      if (Math.floor(e) === e) {
        if (e >= H1 && e <= V1) return new oc(e);
        if (e >= K1 && e <= q1) return ne.fromNumber(e);
      }
      return new rc(e);
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
      var o = UM[n[r]];
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
          : ne.isLong(i)
          ? a.setTime(i.toNumber())
          : typeof i == "number" && t.relaxed && a.setTime(i),
        a
      );
    }
    if (e.$code != null) {
      var s = Object.assign({}, e);
      return e.$scope && (s.$scope = G1(e.$scope)), nc.fromExtendedJSON(e);
    }
    if (CM(e) || e.$dbPointer) {
      var l = e.$ref ? e : e.$dbPointer;
      if (l instanceof Qa) return l;
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
        return Qa.fromExtendedJSON(l);
    }
    return e;
  }
  function WM(e, t) {
    return e.map(function (n, r) {
      t.seenObjects.push({ propertyName: "index ".concat(r), obj: null });
      try {
        return _r(n, t);
      } finally {
        t.seenObjects.pop();
      }
    });
  }
  function J1(e) {
    var t = e.toISOString();
    return e.getUTCMilliseconds() !== 0 ? t : t.slice(0, -5) + "Z";
  }
  function _r(e, t) {
    if ((typeof e == "object" || typeof e == "function") && e !== null) {
      var n = t.seenObjects.findIndex(function (b) {
        return b.obj === e;
      });
      if (n !== -1) {
        var r = t.seenObjects.map(function (b) {
            return b.propertyName;
          }),
          o = r
            .slice(0, n)
            .map(function (b) {
              return "".concat(b, " -> ");
            })
            .join(""),
          i = r[n],
          a =
            " -> " +
            r
              .slice(n + 1, r.length - 1)
              .map(function (b) {
                return "".concat(b, " -> ");
              })
              .join(""),
          s = r[r.length - 1],
          l = " ".repeat(o.length + i.length / 2),
          u = "-".repeat(a.length + (i.length + s.length) / 2 - 1);
        throw new Je(
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
    if (Array.isArray(e)) return WM(e, t);
    if (e === void 0) return null;
    if (e instanceof Date || xM(e)) {
      var d = e.getTime(),
        f = d > -1 && d < 2534023188e5;
      return t.legacy
        ? t.relaxed && f
          ? { $date: e.getTime() }
          : { $date: J1(e) }
        : t.relaxed && f
        ? { $date: J1(e) }
        : { $date: { $numberLong: e.getTime().toString() } };
    }
    if (typeof e == "number" && (!t.relaxed || !isFinite(e))) {
      if (Math.floor(e) === e) {
        var p = e >= H1 && e <= V1,
          y = e >= K1 && e <= q1;
        if (p) return { $numberInt: e.toString() };
        if (y) return { $numberLong: e.toString() };
      }
      return { $numberDouble: e.toString() };
    }
    if (e instanceof RegExp || wM(e)) {
      var m = e.flags;
      if (m === void 0) {
        var w = e.toString().match(/[gimuy]*$/);
        w && (m = w[0]);
      }
      var P = new es(e.source, m);
      return P.toExtendedJSON(t);
    }
    return e != null && typeof e == "object" ? HM(e, t) : e;
  }
  var VM = {
    Binary: function (e) {
      return new fo(e.value(), e.sub_type);
    },
    Code: function (e) {
      return new nc(e.code, e.scope);
    },
    DBRef: function (e) {
      return new Qa(e.collection || e.namespace, e.oid, e.db, e.fields);
    },
    Decimal128: function (e) {
      return new hh(e.bytes);
    },
    Double: function (e) {
      return new rc(e.value);
    },
    Int32: function (e) {
      return new oc(e.value);
    },
    Long: function (e) {
      return ne.fromBits(
        e.low != null ? e.low : e.low_,
        e.low != null ? e.high : e.high_,
        e.low != null ? e.unsigned : e.unsigned_,
      );
    },
    MaxKey: function () {
      return new mh();
    },
    MinKey: function () {
      return new gh();
    },
    ObjectID: function (e) {
      return new zt(e);
    },
    ObjectId: function (e) {
      return new zt(e);
    },
    BSONRegExp: function (e) {
      return new es(e.pattern, e.options);
    },
    Symbol: function (e) {
      return new yh(e.value);
    },
    Timestamp: function (e) {
      return W1.fromBits(e.low, e.high);
    },
  };
  function HM(e, t) {
    if (e == null || typeof e != "object")
      throw new co("not an object instance");
    var n = e._bsontype;
    if (typeof n > "u") {
      var r = {};
      for (var o in e) {
        t.seenObjects.push({ propertyName: o, obj: null });
        try {
          var i = _r(e[o], t);
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
    } else if (DM(e)) {
      var a = e;
      if (typeof a.toExtendedJSON != "function") {
        var s = VM[e._bsontype];
        if (!s)
          throw new Je("Unrecognized or invalid _bsontype: " + e._bsontype);
        a = s(a);
      }
      return (
        n === "Code" && a.scope
          ? (a = new nc(a.code, _r(a.scope, t)))
          : n === "DBRef" &&
            a.oid &&
            (a = new Qa(
              _r(a.collection, t),
              _r(a.oid, t),
              _r(a.db, t),
              _r(a.fields, t),
            )),
        a.toExtendedJSON(t)
      );
    } else throw new co("_bsontype must be a string, but was: " + typeof n);
  }
  var ho;
  (function (e) {
    function t(i, a) {
      var s = Object.assign({}, { relaxed: !0, legacy: !1 }, a);
      return (
        typeof s.relaxed == "boolean" && (s.strict = !s.relaxed),
        typeof s.strict == "boolean" && (s.relaxed = !s.strict),
        JSON.parse(i, function (l, u) {
          if (l.indexOf("\0") !== -1)
            throw new co(
              "BSON Document field names cannot contain null bytes, found: ".concat(
                JSON.stringify(l),
              ),
            );
          return G1(u, s);
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
        d = _r(i, u);
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
  })(ho || (ho = {}));
  var Y1 = T1();
  Y1.Map
    ? Y1.Map
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
    ne.fromNumber(kM),
    ne.fromNumber(EM);
  var vh = new Uint8Array(8);
  new DataView(vh.buffer, vh.byteOffset, vh.byteLength);
  var qM = 1024 * 1024 * 17;
  Ce.alloc(qM);
  var X1 = function (e, t, n) {
      if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
          (i || !(r in t)) &&
            (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
      return e.concat(i || Array.prototype.slice.call(t));
    },
    KM = (function () {
      function e(t, n, r) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.type = "browser");
      }
      return e;
    })(),
    GM = (function () {
      function e(t) {
        (this.version = t),
          (this.type = "node"),
          (this.name = "node"),
          (this.os = process.platform);
      }
      return e;
    })(),
    JM = (function () {
      function e(t, n, r, o) {
        (this.name = t),
          (this.version = n),
          (this.os = r),
          (this.bot = o),
          (this.type = "bot-device");
      }
      return e;
    })(),
    YM = (function () {
      function e() {
        (this.type = "bot"),
          (this.bot = !0),
          (this.name = "bot"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    XM = (function () {
      function e() {
        (this.type = "react-native"),
          (this.name = "react-native"),
          (this.version = null),
          (this.os = null);
      }
      return e;
    })(),
    QM =
      /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    ZM =
      /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    Q1 = 3,
    eI = [
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
      ["searchbot", QM],
    ],
    Z1 = [
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
  function tI(e) {
    return e
      ? ew(e)
      : typeof document > "u" &&
        typeof navigator < "u" &&
        navigator.product === "ReactNative"
      ? new XM()
      : typeof navigator < "u"
      ? ew(navigator.userAgent)
      : oI();
  }
  function nI(e) {
    return (
      e !== "" &&
      eI.reduce(function (t, n) {
        var r = n[0],
          o = n[1];
        if (t) return t;
        var i = o.exec(e);
        return !!i && [r, i];
      }, !1)
    );
  }
  function ew(e) {
    var t = nI(e);
    if (!t) return null;
    var n = t[0],
      r = t[1];
    if (n === "searchbot") return new YM();
    var o = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
    o
      ? o.length < Q1 && (o = X1(X1([], o, !0), iI(Q1 - o.length), !0))
      : (o = []);
    var i = o.join("."),
      a = rI(e),
      s = ZM.exec(e);
    return s && s[1] ? new JM(n, i, a, s[1]) : new KM(n, i, a);
  }
  function rI(e) {
    for (var t = 0, n = Z1.length; t < n; t++) {
      var r = Z1[t],
        o = r[0],
        i = r[1],
        a = i.exec(e);
      if (a) return o;
    }
    return null;
  }
  function oI() {
    var e = typeof process < "u" && process.version;
    return e ? new GM(process.version.slice(1)) : null;
  }
  function iI(e) {
    for (var t = [], n = 0; n < e; n++) t.push("0");
    return t;
  }
  class Dn {
    constructor() {
      if (!Dn.fetch)
        throw new Error(
          "DefaultNetworkTransport.fetch must be set before it's used",
        );
      if (!Dn.AbortController)
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
        return await Dn.fetch(r, { ...Dn.extraFetchOptions, signal: i, ...o });
      } finally {
        a();
      }
    }
    createTimeoutSignal(t) {
      if (typeof t == "number") {
        const n = new Dn.AbortController(),
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
  Dn.DEFAULT_HEADERS = { "Content-Type": "application/json" };
  const aI = (e) => {},
    ic = function (e) {
      return e && e.Math == Math && e;
    },
    ac =
      ic(typeof globalThis == "object" && globalThis) ||
      ic(typeof window == "object" && window) ||
      ic(typeof self == "object" && self) ||
      ic(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  aI(typeof __DEV__ < "u" && __DEV__),
    (Dn.fetch = ac.fetch.bind(ac)),
    (Dn.AbortController = ac.AbortController.bind(ac));
  const tw = "3.7.2",
    sI = tw,
    lI = typeof atob == "function",
    uI = typeof btoa == "function",
    bi = typeof Buffer == "function",
    nw = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
    rw = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
    cI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ts = Array.prototype.slice.call(cI),
    sc = ((e) => {
      let t = {};
      return e.forEach((n, r) => (t[n] = r)), t;
    })(ts),
    dI =
      /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    mt = String.fromCharCode.bind(String),
    ow =
      typeof Uint8Array.from == "function"
        ? Uint8Array.from.bind(Uint8Array)
        : (e, t = (n) => n) =>
            new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
    iw = (e) =>
      e.replace(/=/g, "").replace(/[+\/]/g, (t) => (t == "+" ? "-" : "_")),
    aw = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
    sw = (e) => {
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
            ts[(t >> 18) & 63] +
            ts[(t >> 12) & 63] +
            ts[(t >> 6) & 63] +
            ts[t & 63]);
      }
      return a ? i.slice(0, a - 3) + "===".substring(a) : i;
    },
    bh = uI
      ? (e) => btoa(e)
      : bi
      ? (e) => Buffer.from(e, "binary").toString("base64")
      : sw,
    wh = bi
      ? (e) => Buffer.from(e).toString("base64")
      : (e) => {
          let t = [];
          for (let n = 0, r = e.length; n < r; n += 4096)
            t.push(mt.apply(null, e.subarray(n, n + 4096)));
          return bh(t.join(""));
        },
    lc = (e, t = !1) => (t ? iw(wh(e)) : wh(e)),
    fI = (e) => {
      if (e.length < 2) {
        var t = e.charCodeAt(0);
        return t < 128
          ? e
          : t < 2048
          ? mt(192 | (t >>> 6)) + mt(128 | (t & 63))
          : mt(224 | ((t >>> 12) & 15)) +
            mt(128 | ((t >>> 6) & 63)) +
            mt(128 | (t & 63));
      } else {
        var t =
          65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
        return (
          mt(240 | ((t >>> 18) & 7)) +
          mt(128 | ((t >>> 12) & 63)) +
          mt(128 | ((t >>> 6) & 63)) +
          mt(128 | (t & 63))
        );
      }
    },
    pI = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    lw = (e) => e.replace(pI, fI),
    uw = bi
      ? (e) => Buffer.from(e, "utf8").toString("base64")
      : rw
      ? (e) => wh(rw.encode(e))
      : (e) => bh(lw(e)),
    wi = (e, t = !1) => (t ? iw(uw(e)) : uw(e)),
    cw = (e) => wi(e, !0),
    hI =
      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    mI = (e) => {
      switch (e.length) {
        case 4:
          var t =
              ((7 & e.charCodeAt(0)) << 18) |
              ((63 & e.charCodeAt(1)) << 12) |
              ((63 & e.charCodeAt(2)) << 6) |
              (63 & e.charCodeAt(3)),
            n = t - 65536;
          return mt((n >>> 10) + 55296) + mt((n & 1023) + 56320);
        case 3:
          return mt(
            ((15 & e.charCodeAt(0)) << 12) |
              ((63 & e.charCodeAt(1)) << 6) |
              (63 & e.charCodeAt(2)),
          );
        default:
          return mt(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
      }
    },
    dw = (e) => e.replace(hI, mI),
    fw = (e) => {
      if (((e = e.replace(/\s+/g, "")), !dI.test(e)))
        throw new TypeError("malformed base64.");
      e += "==".slice(2 - (e.length & 3));
      let t,
        n = "",
        r,
        o;
      for (let i = 0; i < e.length; )
        (t =
          (sc[e.charAt(i++)] << 18) |
          (sc[e.charAt(i++)] << 12) |
          ((r = sc[e.charAt(i++)]) << 6) |
          (o = sc[e.charAt(i++)])),
          (n +=
            r === 64
              ? mt((t >> 16) & 255)
              : o === 64
              ? mt((t >> 16) & 255, (t >> 8) & 255)
              : mt((t >> 16) & 255, (t >> 8) & 255, t & 255));
      return n;
    },
    xh = lI
      ? (e) => atob(aw(e))
      : bi
      ? (e) => Buffer.from(e, "base64").toString("binary")
      : fw,
    pw = bi
      ? (e) => ow(Buffer.from(e, "base64"))
      : (e) => ow(xh(e), (t) => t.charCodeAt(0)),
    hw = (e) => pw(mw(e)),
    gI = bi
      ? (e) => Buffer.from(e, "base64").toString("utf8")
      : nw
      ? (e) => nw.decode(pw(e))
      : (e) => dw(xh(e)),
    mw = (e) => aw(e.replace(/[-_]/g, (t) => (t == "-" ? "+" : "/"))),
    Sh = (e) => gI(mw(e)),
    yI = (e) => {
      if (typeof e != "string") return !1;
      const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
    },
    gw = (e) => ({ value: e, enumerable: !1, writable: !0, configurable: !0 }),
    yw = function () {
      const e = (t, n) => Object.defineProperty(String.prototype, t, gw(n));
      e("fromBase64", function () {
        return Sh(this);
      }),
        e("toBase64", function (t) {
          return wi(this, t);
        }),
        e("toBase64URI", function () {
          return wi(this, !0);
        }),
        e("toBase64URL", function () {
          return wi(this, !0);
        }),
        e("toUint8Array", function () {
          return hw(this);
        });
    },
    vw = function () {
      const e = (t, n) => Object.defineProperty(Uint8Array.prototype, t, gw(n));
      e("toBase64", function (t) {
        return lc(this, t);
      }),
        e("toBase64URI", function () {
          return lc(this, !0);
        }),
        e("toBase64URL", function () {
          return lc(this, !0);
        });
    },
    vI = () => {
      yw(), vw();
    },
    uc = {
      version: tw,
      VERSION: sI,
      atob: xh,
      atobPolyfill: fw,
      btoa: bh,
      btoaPolyfill: sw,
      fromBase64: Sh,
      toBase64: wi,
      encode: wi,
      encodeURI: cw,
      encodeURL: cw,
      utob: lw,
      btou: dw,
      decode: Sh,
      isValid: yI,
      fromUint8Array: lc,
      toUint8Array: hw,
      extendString: yw,
      extendUint8Array: vw,
      extendBuiltins: vI,
    },
    bI = { relaxed: !1 };
  function bw(e) {
    return ho.serialize(e, bI);
  }
  function ww(e) {
    return Array.isArray(e)
      ? e.map((t) => ho.deserialize(t))
      : ho.deserialize(e);
  }
  var kh;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(kh || (kh = {}));
  var kn;
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
  })(kn || (kn = {}));
  const xw = {
    [kn.NAME]: "name",
    [kn.EMAIL]: "email",
    [kn.PICTURE]: "pictureUrl",
    [kn.FIRST_NAME]: "firstName",
    [kn.LAST_NAME]: "lastName",
    [kn.GENDER]: "gender",
    [kn.BIRTHDAY]: "birthday",
    [kn.MIN_AGE]: "minAge",
    [kn.MAX_AGE]: "maxAge",
  };
  class Sw {
    constructor(t) {
      if (
        ((this.type = kh.Normal),
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
            Object.entries(o).map(([a, s]) => (a in xw ? [xw[a], s] : [a, s])),
          );
          this.data = ww(i);
        } else throw new Error("Expected 'data' in the response body");
      } else this.data = {};
    }
  }
  class En {
    constructor(t, n) {
      (this.storage = t), (this.keyPart = n);
    }
    get(t) {
      return this.storage.get(this.keyPart + En.PART_SEPARATOR + t);
    }
    set(t, n) {
      return this.storage.set(this.keyPart + En.PART_SEPARATOR + t, n);
    }
    remove(t) {
      return this.storage.remove(this.keyPart + En.PART_SEPARATOR + t);
    }
    prefix(t) {
      return new En(this, t);
    }
    clear(t = "") {
      return this.storage.clear(this.keyPart + En.PART_SEPARATOR + t);
    }
    addListener(t) {
      return this.storage.addListener(t);
    }
    removeListener(t) {
      return this.storage.addListener(t);
    }
  }
  En.PART_SEPARATOR = ":";
  class wI {
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
      return new En(this, t);
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
  const Eh = "accessToken",
    Ch = "refreshToken",
    Oh = "profile",
    Th = "providerType";
  class xI extends En {
    constructor(t, n) {
      super(t, `user(${n})`);
    }
    get accessToken() {
      return this.get(Eh);
    }
    set accessToken(t) {
      t === null ? this.remove(Eh) : this.set(Eh, t);
    }
    get refreshToken() {
      return this.get(Ch);
    }
    set refreshToken(t) {
      t === null ? this.remove(Ch) : this.set(Ch, t);
    }
    get profile() {
      const t = this.get(Oh);
      if (t) {
        const n = new Sw();
        return Object.assign(n, JSON.parse(t)), n;
      }
    }
    set profile(t) {
      t ? this.set(Oh, JSON.stringify(t)) : this.remove(Oh);
    }
    get providerType() {
      const t = this.get(Th);
      if (t) return t;
    }
    set providerType(t) {
      t ? this.set(Th, t) : this.remove(Th);
    }
  }
  function Ph(e) {
    return Object.fromEntries(
      Object.entries(e).filter((t) => typeof t[1] < "u"),
    );
  }
  function SI(e, t) {
    let n = "";
    for (let r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)];
    return n;
  }
  function kw(e, t = !0) {
    const n = Ph(e);
    return (
      (t && Object.keys(n).length > 0 ? "?" : "") +
      Object.entries(n)
        .map(([r, o]) => `${r}=${encodeURIComponent(o)}`)
        .join("&")
    );
  }
  function kI(e) {
    const t = e[0] === "?" ? e.substr(1) : e;
    return Object.fromEntries(
      t
        .split("&")
        .filter((n) => n.length > 0)
        .map((n) => n.split("="))
        .map(([n, r]) => [n, decodeURIComponent(r)]),
    );
  }
  const EI = [
    "inspect",
    "callFunction",
    "callFunctionStreaming",
    ...Object.getOwnPropertyNames(Object.prototype),
  ];
  function CI(e) {
    for (const t of e)
      if (typeof t == "object" && t)
        for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n];
    return e;
  }
  function OI(e) {
    return CI(e).map((t) => (typeof t == "object" ? bw(t) : t));
  }
  class cc {
    constructor(t, n = {}) {
      (this.fetcher = t),
        (this.serviceName = n.serviceName),
        (this.argsTransformation = n.argsTransformation || OI);
    }
    static create(t, n = {}) {
      const r = new cc(t, n);
      return new Proxy(r, {
        get(o, i, a) {
          if (typeof i == "string" && EI.indexOf(i) === -1)
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
        i = kw({ baas_request: uc.encode(JSON.stringify(r)) });
      return this.fetcher.fetchStream({
        method: "GET",
        path: o.functionsCall().path + i,
      });
    }
  }
  class TI {
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
  function PI() {
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
  var fn = { api: PI };
  class RI {
    constructor(t) {
      this.fetcher = t;
    }
    create(t) {
      return this.fetcher.fetchJSON({
        method: "POST",
        body: { name: t },
        path: fn.api().auth().apiKeys().path,
        tokenType: "refresh",
      });
    }
    fetch(t) {
      return this.fetcher.fetchJSON({
        method: "GET",
        path: fn.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    fetchAll() {
      return this.fetcher.fetchJSON({
        method: "GET",
        tokenType: "refresh",
        path: fn.api().auth().apiKeys().path,
      });
    }
    async delete(t) {
      await this.fetcher.fetchJSON({
        method: "DELETE",
        path: fn.api().auth().apiKeys().key(t).path,
        tokenType: "refresh",
      });
    }
    async enable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: fn.api().auth().apiKeys().key(t).enable().path,
        tokenType: "refresh",
      });
    }
    async disable(t) {
      await this.fetcher.fetchJSON({
        method: "PUT",
        path: fn.api().auth().apiKeys().key(t).disable().path,
        tokenType: "refresh",
      });
    }
  }
  let Rh = null;
  function NI(e) {
    Rh = e;
  }
  function ns() {
    if (Rh) return Rh;
    throw new Error("Cannot get environment before it's set");
  }
  class Nh extends Error {
    constructor({ message: t, code: n }) {
      super(t), (this.name = "WatchError"), (this.code = n);
    }
  }
  var Rt;
  (function (e) {
    (e.NEED_DATA = "NEED_DATA"),
      (e.HAVE_EVENT = "HAVE_EVENT"),
      (e.HAVE_ERROR = "HAVE_ERROR");
  })(Rt || (Rt = {}));
  class AI {
    constructor() {
      (this._state = Rt.NEED_DATA),
        (this._error = null),
        (this._textDecoder = new (ns().TextDecoder)()),
        (this._buffer = ""),
        (this._bufferOffset = 0),
        (this._eventType = ""),
        (this._dataBuffer = "");
    }
    feedBuffer(t) {
      this.assertState(Rt.NEED_DATA),
        (this._buffer += this._textDecoder.decode(t, { stream: !0 })),
        this.advanceBufferState();
    }
    feedLine(t) {
      if (
        (this.assertState(Rt.NEED_DATA),
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
      this.assertState(Rt.NEED_DATA);
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
          const r = ho.parse(t.data);
          if (typeof r == "object") {
            (this._nextEvent = r), (this._state = Rt.HAVE_EVENT);
            return;
          }
        } catch {}
        (this._state = Rt.HAVE_ERROR),
          (this._error = new Nh({
            message: "server returned malformed event: " + t.data,
            code: "bad bson parse",
          }));
      } else if (t.eventType === "error") {
        (this._state = Rt.HAVE_ERROR),
          (this._error = new Nh({ message: t.data, code: "unknown" }));
        try {
          const { error_code: r, error: o } = ho.parse(t.data);
          if (typeof r != "string" || typeof o != "string") return;
          this._error = new Nh({ message: o, code: r });
        } catch {
          return;
        }
      }
    }
    get state() {
      return this._state;
    }
    nextEvent() {
      this.assertState(Rt.HAVE_EVENT);
      const t = this._nextEvent;
      return (this._state = Rt.NEED_DATA), this.advanceBufferState(), t;
    }
    get error() {
      return this._error;
    }
    advanceBufferState() {
      for (this.assertState(Rt.NEED_DATA); this.state === Rt.NEED_DATA; ) {
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
  class _I {
    constructor(t, n, r, o) {
      (this.functions = cc.create(t, { serviceName: n })),
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
      const n = new AI(),
        r = t.then((o) => ({ [Symbol.asyncIterator]: () => o }));
      for await (const o of await r)
        if (o) {
          for (n.feedBuffer(o); n.state == Rt.HAVE_EVENT; ) yield n.nextEvent();
          if (n.state == Rt.HAVE_ERROR) throw n.error;
        }
    }
  }
  function MI(e, t, n, r) {
    return new _I(e, t, n, r);
  }
  function II(e, t, n) {
    return { collection: MI.bind(null, e, t, n) };
  }
  function $I(e, t = "mongo-db") {
    return { db: II.bind(null, e, t) };
  }
  const LI = "000000000000000000000000";
  var mo;
  (function (e) {
    (e.Active = "active"),
      (e.LoggedOut = "logged-out"),
      (e.Removed = "removed");
  })(mo || (mo = {}));
  var Ew;
  (function (e) {
    (e.Normal = "normal"), (e.Server = "server");
  })(Ew || (Ew = {}));
  class Cw {
    constructor(t) {
      if (
        ((this.app = t.app),
        (this.id = t.id),
        (this.storage = new xI(this.app.storage, this.id)),
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
        (this.apiKeys = new RI(this.fetcher)),
        (this.functions = cc.create(this.fetcher));
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
          ? mo.LoggedOut
          : mo.Active
        : mo.Removed;
    }
    get isLoggedIn() {
      return this.state === mo.Active;
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
          const n = JSON.parse(uc.decode(t)).baas_device_id;
          if (typeof n == "string" && n !== LI) return n;
        }
      }
      return null;
    }
    async refreshProfile() {
      const t = await this.fetcher.fetchJSON({
        method: "GET",
        path: fn.api().auth().profile().path,
      });
      (this._profile = new Sw(t)), (this.storage.profile = this._profile);
    }
    async logOut() {
      try {
        this._refreshToken !== null &&
          (await this.fetcher.fetchJSON({
            method: "DELETE",
            path: fn.api().auth().session().path,
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
          path: fn.api().auth().session().path,
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
      return $I(this.fetcher, t);
    }
    decodeAccessToken() {
      if (this.accessToken) {
        const t = this.accessToken.split(".");
        if (t.length !== 3)
          throw new Error("Expected an access token with three parts");
        const n = t[1],
          r = uc.decode(n),
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
  class pn {
    constructor(t, n, r) {
      (this.providerName = t), (this.providerType = n), (this.payload = r);
    }
    static anonymous() {
      return new pn("anon-user", "anon-user", {});
    }
    static apiKey(t) {
      return new pn("api-key", "api-key", { key: t });
    }
    static emailPassword(t, n) {
      return new pn("local-userpass", "local-userpass", {
        username: t,
        password: n,
      });
    }
    static function(t) {
      return new pn("custom-function", "custom-function", t);
    }
    static jwt(t) {
      return new pn("custom-token", "custom-token", { token: t });
    }
    static google(t) {
      return new pn("oauth2-google", "oauth2-google", pn.derivePayload(t));
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
      return new pn(
        "oauth2-facebook",
        "oauth2-facebook",
        t.includes("://") ? { redirectUrl: t } : { accessToken: t },
      );
    }
    static apple(t) {
      return new pn(
        "oauth2-apple",
        "oauth2-apple",
        t.includes("://") ? { redirectUrl: t } : { id_token: t },
      );
    }
  }
  const Ow = "userIds",
    Tw = "deviceId";
  class BI extends En {
    constructor(t, n) {
      super(t, `app(${n})`);
    }
    getUserIds() {
      const t = this.get(Ow),
        n = t ? JSON.parse(t) : [];
      if (Array.isArray(n)) return [...new Set(n)];
      throw new Error("Expected the user ids to be an array");
    }
    setUserIds(t, n) {
      if (n) {
        const r = this.getUserIds();
        for (const o of r) t.indexOf(o) === -1 && t.push(o);
      }
      this.set(Ow, JSON.stringify(t));
    }
    removeUserId(t) {
      const n = this.getUserIds().filter((r) => r !== t);
      this.setUserIds(n, !1);
    }
    getDeviceId() {
      return this.get(Tw);
    }
    setDeviceId(t) {
      this.set(Tw, t);
    }
  }
  const zI = "abcdefghijklmnopqrstuvwxyz",
    jI = 100,
    FI = {
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
  class xi {
    constructor(t, n = ns().openWindow) {
      (this.storage = t.prefix("oauth2")), (this.openWindow = n);
    }
    static parseRedirectLocation(t) {
      const n = kI(t),
        r = {};
      for (const [o, i] of Object.entries(FI)) {
        const a = n[o];
        a && (r[i] = a);
      }
      return r;
    }
    static handleRedirect(t, n = ns().defaultStorage) {
      const r = xi.parseRedirectLocation(t),
        { state: o, error: i } = r;
      if (typeof o == "string") {
        const a = n.prefix("oauth2");
        xi.getStateStorage(a, o).set("result", JSON.stringify(r));
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
      const r = xi.getStateStorage(this.storage, n);
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
          }, jI));
      });
    }
    generateState() {
      return SI(12, zI);
    }
  }
  const Pw = "x-baas-location";
  class DI {
    constructor(t, n, r) {
      (this.fetcher = t),
        (this.oauth2 = new xi(n)),
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
          ).headers.get(Pw);
          if (s) return this.openWindowAndWaitForAuthResponse(s, i);
          throw new Error(`Missing ${Pw} header`);
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
        i = kw({ link: n ? "true" : void 0, ...r });
      return (await this.fetcher.locationUrl) + o.path + i;
    }
    async openWindowAndWaitForAuthResponse(t, n) {
      const r = await this.oauth2.openWindowAndWaitForRedirect(t, n);
      return xi.decodeAuthInfo(r.userAuth);
    }
  }
  class rs extends Error {
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
          return new rs(
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
      return new rs(i, o, a, s);
    }
  }
  function UI(e) {
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
  class Si {
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
        if (typeof t == "object" && t !== null) return JSON.stringify(bw(t));
        if (typeof t == "string") return t;
        throw (console.log("body is", t), new Error("Unexpected type of body"));
      } else return;
    }
    static buildJsonHeader(t) {
      return t && t.length > 0 ? { "Content-Type": "application/json" } : {};
    }
    clone(t) {
      return new Si({
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
          headers: { ...Si.buildAuthorizationHeader(i, o), ...t.headers },
        });
        if (s.ok) return s;
        if (i && s.status === 401 && o === "access")
          return await i.refreshAccessToken(), this.fetch({ ...t, user: i });
        throw (
          (i &&
            s.status === 401 &&
            o === "refresh" &&
            ((i.accessToken = null), (i.refreshToken = null)),
          await rs.fromRequestAndResponse(t, s))
        );
      } else throw new Error("Expected either 'url' or 'path'");
    }
    async fetchJSON(t) {
      const { body: n } = t,
        r = Si.buildBody(n),
        o = Si.buildJsonHeader(r),
        i = await this.fetch({
          ...t,
          body: r,
          headers: { Accept: "application/json", ...o, ...t.headers },
        }),
        a = i.headers.get("content-type");
      if (a != null && a.startsWith("application/json")) {
        const s = await i.json();
        return ww(s);
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
      return UI(n);
    }
    get appRoute() {
      return fn.api().app(this.appId);
    }
    get locationUrl() {
      return this.locationUrlContext.locationUrl;
    }
  }
  const WI = "deviceId";
  var Rw;
  (function (e) {
    (e.DEVICE_ID = "deviceId"),
      (e.APP_ID = "appId"),
      (e.APP_VERSION = "appVersion"),
      (e.PLATFORM = "platform"),
      (e.PLATFORM_VERSION = "platformVersion"),
      (e.SDK_VERSION = "sdkVersion");
  })(Rw || (Rw = {}));
  class VI {
    constructor({ appId: t, appVersion: n, deviceId: r }) {
      this.sdkVersion = "2.0.0";
      const o = ns();
      (this.platform = o.platform),
        (this.platformVersion = o.platformVersion),
        (this.appId = t),
        (this.appVersion = n),
        (this.deviceId = r);
    }
    encode() {
      const t = Ph(this);
      return uc.encode(JSON.stringify(t));
    }
    toJSON() {
      return Ph(this);
    }
  }
  const HI = "https://realm.mongodb.com";
  let Ah = class us {
    constructor(t) {
      (this.users = []), (this._locationUrl = null);
      const n = typeof t == "string" ? { id: t } : t;
      if (typeof n == "object" && typeof n.id == "string") this.id = n.id;
      else throw new Error("Missing an Atlas App Services app-id");
      (this.baseUrl = n.baseUrl || HI),
        n.skipLocationRequest &&
          (this._locationUrl = Promise.resolve(this.baseUrl)),
        (this.localApp = n.app);
      const { storage: r, transport: o = new Dn() } = n;
      (this.fetcher = new Si({
        appId: this.id,
        userContext: this,
        locationUrlContext: this,
        transport: o,
      })),
        (this.emailPasswordAuth = new TI(this.fetcher));
      const i = r || ns().defaultStorage;
      (this.storage = new BI(i, this.id)),
        (this.authenticator = new DI(
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
      if (t in us.appCache) return us.appCache[t];
      {
        const n = new us(t);
        return (us.appCache[t] = n), n;
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
        i && i !== "000000000000000000000000" && this.storage.set(WI, i), o
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
        path: fn.api().auth().delete().path,
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
      const t = this.users.filter((n) => n.state === mo.Active);
      return t.length === 0 ? null : t[0];
    }
    get allUsers() {
      return Object.fromEntries(this.users.map((t) => [t.id, t]));
    }
    get locationUrl() {
      if (!this._locationUrl) {
        const t = fn.api().app(this.id).location().path;
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
            ? new zt(t)
            : void 0;
      return new VI({
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
        const o = new Cw({
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
      this.users = t.map((n) => new Cw({ app: this, id: n }));
    }
  };
  (Ah.appCache = {}), (Ah.Credentials = pn);
  const qI = (e) => {},
    dc = function (e) {
      return e && e.Math == Math && e;
    },
    os =
      dc(typeof globalThis == "object" && globalThis) ||
      dc(typeof window == "object" && window) ||
      dc(typeof self == "object" && self) ||
      dc(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  qI(typeof __DEV__ < "u" && __DEV__);
  class KI {
    constructor() {
      if (typeof os.localStorage == "object") this.global = os;
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
      return new En(this, t);
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
  const ki = tI(),
    GI = "localStorage" in os ? KI : wI;
  function JI(e) {
    return typeof os.open == "function"
      ? os.open(e)
      : (console.log(`Please open ${e}`), null);
  }
  const YI = {
    defaultStorage: new GI().prefix("realm-web"),
    openWindow: JI,
    platform: (ki == null ? void 0 : ki.name) || "web",
    platformVersion: (ki == null ? void 0 : ki.version) || "0.0.0",
    TextDecoder,
  };
  NI(YI);
  const XI = "caja-chica-pqain",
    QI =
      "https://realm.mongodb.com/groups/64c439eb9473f01fba108aaf/apps/64c43b5f13aa56de3f40739a",
    ZI = "https://realm.mongodb.com",
    e$ = "https://eastus2.azure.realm.mongodb.com",
    t$ = "https://eastus2.azure.data.mongodb-api.com",
    n$ =
      "https://cloud.mongodb.com/links/64c439eb9473f01fba108aaf/explorer/Cluster0/database/collection/find",
    r$ = "mongodb-atlas",
    fc = {
      appId: XI,
      appUrl: QI,
      baseUrl: ZI,
      clientApiBaseUrl: e$,
      dataApiBaseUrl: t$,
      dataExplorerLink: n$,
      dataSourceName: r$,
    },
    { baseUrl: o$ } = fc;
  function Nw(e) {
    return new Ah({ id: e, baseUrl: o$ });
  }
  const Aw = pe.createContext(null);
  function i$({ appId: e, children: t }) {
    const [n, r] = pe.useState(Nw(e));
    pe.useEffect(() => {
      r(Nw(e));
    }, [e]);
    const [o, i] = pe.useState(n.currentUser),
      a = pe.useCallback(
        async (u) => {
          await n.logIn(u), i(n.currentUser);
        },
        [n],
      ),
      s = pe.useCallback(async () => {
        try {
          const u = n.currentUser;
          await (u == null ? void 0 : u.logOut()), await n.removeUser(u);
        } catch (u) {
          console.error(u);
        }
        i(n.currentUser);
      }, [n]),
      l = pe.useMemo(
        () => ({ ...n, currentUser: o, logIn: a, logOut: s }),
        [n, o, a, s],
      );
    return C(Aw.Provider, { value: l, children: t });
  }
  function Ei() {
    const e = pe.useContext(Aw);
    if (!e)
      throw new Error(
        "No App Services App found. Make sure to call useApp() inside of a <AppProvider />.",
      );
    return e;
  }
  var _h = {},
    Ci = {},
    a$ = {
      get exports() {
        return Ci;
      },
      set exports(e) {
        Ci = e;
      },
    };
  (function (e) {
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    (e.exports = t),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(a$);
  var _w = {};
  const s$ = Kh(E3);
  var Mw;
  function pc() {
    return (
      Mw ||
        ((Mw = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function () {
                return t.createSvgIcon;
              },
            });
          var t = s$;
        })(_w)),
      _w
    );
  }
  const hc = Kh(qx);
  var l$ = Ci;
  Object.defineProperty(_h, "__esModule", { value: !0 });
  var Iw = (_h.default = void 0),
    u$ = l$(pc()),
    c$ = hc,
    d$ = (0, u$.default)(
      (0, c$.jsx)("path", {
        d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
      }),
      "Visibility",
    );
  Iw = _h.default = d$;
  var Mh = {},
    f$ = Ci;
  Object.defineProperty(Mh, "__esModule", { value: !0 });
  var $w = (Mh.default = void 0),
    p$ = f$(pc()),
    h$ = hc,
    m$ = (0, p$.default)(
      (0, h$.jsx)("path", {
        d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
      }),
      "VisibilityOff",
    );
  $w = Mh.default = m$;
  const Lw = (e) => !e,
    mc = (e, t) => !(t < 0 || t >= e.length);
  function g$(e, t, n) {
    if (!mc(e, t) && t !== e.length)
      throw new Error("Cannot add value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t)];
  }
  function y$(e, t, n) {
    if (!mc(e, t))
      throw new Error("Cannot replace value. Array index out of bounds.");
    return [...e.slice(0, t), n, ...e.slice(t + 1)];
  }
  function v$(e, t, n) {
    if (!mc(e, t))
      throw new Error("Cannot update value. Array index out of bounds.");
    return [...e.slice(0, t), n(e[t]), ...e.slice(t + 1)];
  }
  function b$(e, t) {
    if (!mc(e, t))
      throw new Error("Cannot remove value. Array index out of bounds.");
    return [...e.slice(0, t), ...e.slice(t + 1)];
  }
  const gc = (e) => (e._id instanceof zt ? e._id.toHexString() : e._id),
    w$ = (e, t) => gc(e) === gc(t),
    yc = (e, t) => {
      const n = e.findIndex((r) => w$(r, t));
      return n >= 0 ? n : null;
    };
  function x$(e) {
    return C(SP, { elevation: 6, variant: "filled", ...e });
  }
  function S$({ isOpen: e, message: t, onClose: n = () => {} }) {
    return e ? C(x$, { onClose: n, severity: "error", children: t }) : null;
  }
  function k$({ error: e, clearError: t, hideAfterMs: n }) {
    const [r, o] = pe.useState(!1),
      i = pe.useCallback(() => {
        t(), o(!1);
      }, [t]);
    return (
      pe.useEffect(() => {
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
        C(S$, {
          isOpen: r,
          message: e,
          onClose: () => {
            i();
          },
        })
    );
  }
  const Bw = "%[a-f0-9]{2}",
    zw = new RegExp("(" + Bw + ")|([^%]+?)", "gi"),
    jw = new RegExp("(" + Bw + ")+", "gi");
  function Ih(e, t) {
    try {
      return [decodeURIComponent(e.join(""))];
    } catch {}
    if (e.length === 1) return e;
    t = t || 1;
    const n = e.slice(0, t),
      r = e.slice(t);
    return Array.prototype.concat.call([], Ih(n), Ih(r));
  }
  function E$(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      let t = e.match(zw) || [];
      for (let n = 1; n < t.length; n++)
        (e = Ih(t, n).join("")), (t = e.match(zw) || []);
      return e;
    }
  }
  function C$(e) {
    const t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" };
    let n = jw.exec(e);
    for (; n; ) {
      try {
        t[n[0]] = decodeURIComponent(n[0]);
      } catch {
        const o = E$(n[0]);
        o !== n[0] && (t[n[0]] = o);
      }
      n = jw.exec(e);
    }
    t["%C2"] = "\uFFFD";
    const r = Object.keys(t);
    for (const o of r) e = e.replace(new RegExp(o, "g"), t[o]);
    return e;
  }
  function O$(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`",
      );
    try {
      return decodeURIComponent(e);
    } catch {
      return C$(e);
    }
  }
  function Fw(e, t) {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "" || t === "") return [];
    const n = e.indexOf(t);
    return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
  }
  function T$(e, t) {
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
  const P$ = (e) => e == null,
    R$ = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`,
      ),
    $h = Symbol("encodeFragmentIdentifier");
  function N$(e) {
    switch (e.arrayFormat) {
      case "index":
        return (t) => (n, r) => {
          const o = n.length;
          return r === void 0 ||
            (e.skipNull && r === null) ||
            (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [et(t, e), "[", o, "]"].join("")]
            : [...n, [et(t, e), "[", et(o, e), "]=", et(r, e)].join("")];
        };
      case "bracket":
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [et(t, e), "[]"].join("")]
            : [...n, [et(t, e), "[]=", et(r, e)].join("")];
      case "colon-list-separator":
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, [et(t, e), ":list="].join("")]
            : [...n, [et(t, e), ":list=", et(r, e)].join("")];
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
                ? [[et(n, e), t, et(o, e)].join("")]
                : [[r, et(o, e)].join(e.arrayFormatSeparator)]);
      }
      default:
        return (t) => (n, r) =>
          r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
            ? n
            : r === null
            ? [...n, et(t, e)]
            : [...n, [et(t, e), "=", et(r, e)].join("")];
    }
  }
  function A$(e) {
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
              nr(r, e).includes(e.arrayFormatSeparator);
          r = a ? nr(r, e) : r;
          const s =
            i || a
              ? r.split(e.arrayFormatSeparator).map((l) => nr(l, e))
              : r === null
              ? r
              : nr(r, e);
          o[n] = s;
        };
      case "bracket-separator":
        return (n, r, o) => {
          const i = /(\[])$/.test(n);
          if (((n = n.replace(/\[]$/, "")), !i)) {
            o[n] = r && nr(r, e);
            return;
          }
          const a =
            r === null
              ? []
              : r.split(e.arrayFormatSeparator).map((s) => nr(s, e));
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
  function Dw(e) {
    if (typeof e != "string" || e.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string",
      );
  }
  function et(e, t) {
    return t.encode ? (t.strict ? R$(e) : encodeURIComponent(e)) : e;
  }
  function nr(e, t) {
    return t.decode ? O$(e) : e;
  }
  function Uw(e) {
    return Array.isArray(e)
      ? e.sort()
      : typeof e == "object"
      ? Uw(Object.keys(e))
          .sort((t, n) => Number(t) - Number(n))
          .map((t) => e[t])
      : e;
  }
  function Ww(e) {
    const t = e.indexOf("#");
    return t !== -1 && (e = e.slice(0, t)), e;
  }
  function _$(e) {
    let t = "";
    const n = e.indexOf("#");
    return n !== -1 && (t = e.slice(n)), t;
  }
  function Vw(e, t) {
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
  function Lh(e) {
    e = Ww(e);
    const t = e.indexOf("?");
    return t === -1 ? "" : e.slice(t + 1);
  }
  function Bh(e, t) {
    (t = {
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1,
      ...t,
    }),
      Dw(t.arrayFormatSeparator);
    const n = A$(t),
      r = Object.create(null);
    if (typeof e != "string" || ((e = e.trim().replace(/^[?#&]/, "")), !e))
      return r;
    for (const o of e.split("&")) {
      if (o === "") continue;
      const i = t.decode ? o.replace(/\+/g, " ") : o;
      let [a, s] = Fw(i, "=");
      a === void 0 && (a = i),
        (s =
          s === void 0
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                t.arrayFormat,
              )
            ? s
            : nr(s, t)),
        n(nr(a, t), s, r);
    }
    for (const [o, i] of Object.entries(r))
      if (typeof i == "object" && i !== null)
        for (const [a, s] of Object.entries(i)) i[a] = Vw(s, t);
      else r[o] = Vw(i, t);
    return t.sort === !1
      ? r
      : (t.sort === !0
          ? Object.keys(r).sort()
          : Object.keys(r).sort(t.sort)
        ).reduce((o, i) => {
          const a = r[i];
          return (
            a && typeof a == "object" && !Array.isArray(a)
              ? (o[i] = Uw(a))
              : (o[i] = a),
            o
          );
        }, Object.create(null));
  }
  function Hw(e, t) {
    if (!e) return "";
    (t = {
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...t,
    }),
      Dw(t.arrayFormatSeparator);
    const n = (a) =>
        (t.skipNull && P$(e[a])) || (t.skipEmptyString && e[a] === ""),
      r = N$(t),
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
            ? et(a, t)
            : Array.isArray(s)
            ? s.length === 0 && t.arrayFormat === "bracket-separator"
              ? et(a, t) + "[]"
              : s.reduce(r(a), []).join("&")
            : et(a, t) + "=" + et(s, t);
        })
        .filter((a) => a.length > 0)
        .join("&")
    );
  }
  function qw(e, t) {
    var o;
    t = { decode: !0, ...t };
    let [n, r] = Fw(e, "#");
    return (
      n === void 0 && (n = e),
      {
        url:
          ((o = n == null ? void 0 : n.split("?")) == null ? void 0 : o[0]) ??
          "",
        query: Bh(Lh(e), t),
        ...(t && t.parseFragmentIdentifier && r
          ? { fragmentIdentifier: nr(r, t) }
          : {}),
      }
    );
  }
  function Kw(e, t) {
    t = { encode: !0, strict: !0, [$h]: !0, ...t };
    const n = Ww(e.url).split("?")[0] || "",
      r = Lh(e.url),
      o = { ...Bh(r, { sort: !1 }), ...e.query };
    let i = Hw(o, t);
    i && (i = `?${i}`);
    let a = _$(e.url);
    if (e.fragmentIdentifier) {
      const s = new URL(n);
      (s.hash = e.fragmentIdentifier),
        (a = t[$h] ? s.hash : `#${e.fragmentIdentifier}`);
    }
    return `${n}${i}${a}`;
  }
  function Gw(e, t, n) {
    n = { parseFragmentIdentifier: !0, [$h]: !1, ...n };
    const { url: r, query: o, fragmentIdentifier: i } = qw(e, n);
    return Kw({ url: r, query: T$(o, t), fragmentIdentifier: i }, n);
  }
  function M$(e, t, n) {
    const r = Array.isArray(t) ? (o) => !t.includes(o) : (o, i) => !t(o, i);
    return Gw(e, r, n);
  }
  const Jw = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          exclude: M$,
          extract: Lh,
          parse: Bh,
          parseUrl: qw,
          pick: Gw,
          stringify: Hw,
          stringifyUrl: Kw,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    Yw = "/caja-chica/assets/logo-992687eb.svg",
    I$ = "/caja-chica/assets/logoWithBuilding-3a468530.svg",
    $$ = ku();
  function L$() {
    const { currentUser: e } = Ei(),
      t = Al(),
      n = Ei();
    e && t("/admin");
    const [r, o] = x.useState(!1),
      i = () => {
        u(), o(Lw);
      },
      a = { email: null, password: null, other: null },
      [s, l] = x.useState(a),
      u = () => l(a),
      d = k$({
        error: s.other,
        clearError: () => {
          l((T) => ({ ...T, other: null }));
        },
      }),
      [f, p] = x.useState(!1),
      y = () => p(Lw),
      m = async ({ email: T, password: A }) => {
        console.log(`${T}@sanpedrosula.hn`), u();
        try {
          r &&
            (await n.emailPasswordAuth.registerUser({
              email: `${T}@sanpedrosula.hn`,
              password: A,
            }),
            console.log("Sending email to verify account.")),
            await n.logIn(pn.emailPassword(`${T}@sanpedrosula.hn`, A)),
            t("/admin");
        } catch (_) {
          B$(_, l);
        }
      };
    Jw.parse(window.location.search);
    const [w, P] = x.useState(""),
      [b, g] = x.useState("");
    x.useCallback(async () => {
      try {
        const T = await Jw.parse(window.location.search);
        T.token &&
          T.tokenId &&
          (P(T.token),
          g(T.tokenId),
          await n.emailPasswordAuth.confirmUser(T.token, T.tokenId));
      } catch (T) {
        console.error(T);
      }
    }, [n.emailPasswordAuth, w, b]);
    const v = localStorage.getItem("REACT_APP_NAME")
        ? localStorage.getItem("REACT_APP_NAME")
        : window.env.REACT_APP_NAME,
      [k, O] = x.useState(v || window.env.REACT_APP_NAME);
    x.useEffect(() => {
      const T = window.env.REACT_APP_PROJECTS.find((A) => A.id === k);
      T &&
        ((window.env.REACT_APP_NAME = T.name),
        localStorage.setItem("REACT_APP_NAME", T.name),
        localStorage.setItem("REACT_APP_DB", T.db),
        localStorage.setItem("REACT_APP_COLLECTION", T.collection));
    }, [k]);
    const R = (T) => {
      O(Number(T.target.value));
    };
    return C(Ov, {
      theme: $$,
      children: te(Vp, {
        container: !0,
        component: "main",
        sx: { height: "100vh" },
        children: [
          C(Vp, {
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
            children: C(Fu, {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              children: C("img", {
                src: I$,
                alt: "Example SVG",
                style: { width: "75%", height: "auto" },
              }),
            }),
          }),
          C(Vp, {
            item: !0,
            xs: 12,
            sm: 8,
            md: 5,
            component: so,
            elevation: 10,
            square: !0,
            children: te(Fu, {
              sx: {
                my: 1,
                mx: 13,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              children: [
                te(Ot, {
                  component: "h1",
                  variant: "h5",
                  children: [
                    te("div", {
                      children: [
                        C("img", { src: Yw, alt: "Example SVG" }),
                        C("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 100 100",
                          style: { width: "10%", height: "10%" },
                          children: C("use", { xlinkHref: Yw }),
                        }),
                      ],
                    }),
                    window.env.REACT_APP_PROJECT_LIST &&
                      te(kb, {
                        sx: { width: "100%" },
                        children: [
                          C(Mb, {
                            id: "project-select-label",
                            children: "Project",
                          }),
                          C(th, {
                            labelId: "project-select-label",
                            id: "project-select",
                            value: k,
                            label: "Project",
                            onChange: R,
                            children: window.env.REACT_APP_PROJECTS.map((T) =>
                              C(Jb, { value: T.id, children: T.name }, T.id),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                C(Wp, {
                  sx: { width: "100%" },
                  className: "main-container",
                  children: C(PR, {
                    className: "auth-card",
                    variant: "outlined",
                    children: te("form", {
                      className: "auth-form",
                      onSubmit: (T) => {
                        T.preventDefault();
                        const A = new FormData(T.target),
                          { email: _, password: M } = Object.fromEntries(
                            A.entries(),
                          );
                        m({ email: _, password: M });
                      },
                      children: [
                        C(Ot, {
                          gutterBottom: !0,
                          children: r
                            ? "Introduzca su correo sin @sanpedrosula.hn y una contrase\xF1a para crear una cuenta."
                            : "Introduzca su correo sin @sanpedrosula.hn y su contrase\xF1a para iniciar sesi\xF3n.",
                        }),
                        C(d, {}),
                        te("div", {
                          className: "email-and-domain",
                          children: [
                            C(Yu, {
                              id: "input-email",
                              name: "email",
                              label: "Email Address",
                              variant: "outlined",
                              error: !!s.email,
                              helperText: s.email ?? "",
                            }),
                            te(Ot, {
                              variant: "caption",
                              gutterBottom: !0,
                              children: [C("br", {}), "@sanpedrosula.hn"],
                            }),
                          ],
                        }),
                        C(Yu, {
                          id: "input-password",
                          "data-testid": "input-password",
                          type: f ? "text" : "password",
                          name: "password",
                          label: "Password",
                          variant: "outlined",
                          error: !!s.password,
                          helperText: s.password ?? "",
                          InputProps: {
                            endAdornment: C(sN, {
                              position: "end",
                              children: C(zn, {
                                "aria-label": "toggle password visibility",
                                onClick: y,
                                onMouseDown: (T) => {
                                  T.preventDefault();
                                },
                                size: "large",
                                children: f ? C(Iw, {}) : C($w, {}),
                              }),
                            }),
                          },
                        }),
                        C(Uu, {
                          id: "submit-button",
                          "data-testid": "submit-button",
                          type: "submit",
                          variant: "contained",
                          color: "primary",
                          children: r ? "Create Account" : "Log In",
                        }),
                        C("button", {
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
    });
  }
  function B$(e, t) {
    const n = () => {
      t((r) => ({ ...r, other: "Verification email sent." })),
        console.warn(
          "Something went wrong with a login or signup request. See the following error for details.",
        ),
        console.error(e);
    };
    if (e instanceof rs) {
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
  var z$ = [
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
    j$ = [
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
    ];
  j$.reduce(function (e, t) {
    return (e[t] = !0), e;
  }, {}),
    z$.reduce(function (e, t) {
      return (e[t] = !0), e;
    }, {});
  function zh({ cluster: e = "mongodb-atlas", db: t, collection: n }) {
    const r = Ei();
    return pe.useMemo(
      () => r.currentUser.mongoClient(e).db(t).collection(n),
      [r.currentUser, e, t, n],
    );
  }
  const F$ = ht(
      C("path", {
        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
      }),
      "Delete",
    ),
    D$ = ht(
      C("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }),
      "FilterList",
    );
  function Xw(e, t, n) {
    return t[n] < e[n] ? -1 : t[n] > e[n] ? 1 : 0;
  }
  function U$(e, t) {
    return e === "desc" ? (n, r) => Xw(n, r, t) : (n, r) => -Xw(n, r, t);
  }
  function W$(e, t) {
    const n = e.map((r, o) => [r, o]);
    return (
      n.sort((r, o) => {
        const i = t(r[0], o[0]);
        return i !== 0 ? i : r[1] - o[1];
      }),
      n.map((r) => r[0])
    );
  }
  const Qw = [
    { id: "name", numeric: !1, disablePadding: !0, label: "Nombre" },
    { id: "url", numeric: !1, disablePadding: !1, label: "Link del archivo" },
    {
      id: "created_date",
      numeric: !1,
      disablePadding: !1,
      label: "Fecha de creacion",
    },
    { id: "created_by", numeric: !1, disablePadding: !1, label: "Creado por" },
    {
      id: "modified_date",
      numeric: !1,
      disablePadding: !1,
      label: "Fecha de modificacion",
    },
    {
      id: "modified_by",
      numeric: !1,
      disablePadding: !1,
      label: "Modificado por",
    },
    { id: "is_active", numeric: !1, disablePadding: !1, label: "Activo" },
    {
      id: "file_type",
      numeric: !1,
      disablePadding: !1,
      label: "Tipo de archivo",
    },
  ];
  function Zw(e) {
    const { numSelected: t } = e;
    return te(rh, {
      sx: {
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(t > 0 && {
          bgcolor: (n) =>
            Le(n.palette.primary.main, n.palette.action.activatedOpacity),
        }),
      },
      children: [
        t > 0
          ? te(Ot, {
              sx: { flex: "1 1 100%" },
              color: "inherit",
              variant: "subtitle1",
              component: "div",
              children: [t, " selected"],
            })
          : C(Ot, {
              sx: { flex: "1 1 100%" },
              variant: "h6",
              id: "tableTitle",
              component: "div",
              children: "Administracion de datos",
            }),
        t > 0
          ? C(l1, { title: "Delete", children: C(zn, { children: C(F$, {}) }) })
          : C(l1, {
              title: "Filter list",
              children: C(zn, { children: C(D$, {}) }),
            }),
      ],
    });
  }
  Zw.propTypes = { numSelected: Vf.number.isRequired };
  const V$ = ({ huertosData: e, huertosFileType: t }) => {
      const n = e,
        r = t,
        [o, i] = pe.useState("asc"),
        [a, s] = pe.useState("name"),
        [l, u] = pe.useState([]),
        [d, f] = pe.useState(0),
        [p, y] = pe.useState(!1),
        [m, w] = pe.useState(5),
        [P, b] = pe.useState({}),
        g = (B, F) => {
          B.stopPropagation();
          const { value: V } = B.target;
          b((G) => ({ ...G, [F]: V }));
        };
      function v(B) {
        const {
            onSelectAllClick: F,
            order: V,
            orderBy: G,
            numSelected: H,
            rowCount: L,
            onRequestSort: I,
          } = B,
          z = (J) => (re) => {
            re.stopPropagation(), I(re, J);
          };
        return C(d6, {
          children: te(oh, {
            children: [
              C(Pt, {
                padding: "checkbox",
                children: C(Up, {
                  color: "primary",
                  indeterminate: H > 0 && H < L,
                  checked: L > 0 && H === L,
                  onChange: F,
                  inputProps: { "aria-label": "select all desserts" },
                }),
              }),
              Qw.map((J) =>
                te(
                  Pt,
                  {
                    align: (J.numeric, "center"),
                    padding: J.disablePadding ? "none" : "normal",
                    sortDirection: G === J.id ? V : !1,
                    children: [
                      te(J6, {
                        active: G === J.id,
                        direction: G === J.id ? V : "asc",
                        onClick: z(J.id),
                        children: [
                          J.label,
                          G === J.id
                            ? C(Fu, {
                                component: "span",
                                sx: gE,
                                children:
                                  V === "desc"
                                    ? "sorted descending"
                                    : "sorted ascending",
                              })
                            : null,
                        ],
                      }),
                      C("input", {
                        type: "text",
                        value: P[J.id],
                        onChange: (re) => g(re, J.id),
                        placeholder: "",
                      }),
                    ],
                  },
                  J.id,
                ),
              ),
            ],
          }),
        });
      }
      const k = (B, F) => {
          B.stopPropagation(), i(a === F && o === "asc" ? "desc" : "asc"), s(F);
        },
        O = (B) => {
          if ((B.stopPropagation(), B.target.checked)) {
            const F = n.map((V) => V.name);
            u(F);
            return;
          }
          u([]);
        },
        R = (B, F) => {
          B.stopPropagation();
          const V = l.indexOf(F);
          let G = [];
          V === -1
            ? (G = G.concat(l, F))
            : V === 0
            ? (G = G.concat(l.slice(1)))
            : V === l.length - 1
            ? (G = G.concat(l.slice(0, -1)))
            : V > 0 && (G = G.concat(l.slice(0, V), l.slice(V + 1))),
            u(G);
        },
        T = (B, F) => {
          f(F);
        },
        A = (B) => {
          w(parseInt(B.target.value, 10)), f(0);
        },
        _ = (B) => {
          y(B.target.checked);
        },
        M = (B) => l.indexOf(B) !== -1,
        D = d > 0 ? Math.max(0, (1 + d) * m - n.length) : 0,
        U = pe.useMemo(() => {
          const B = n.filter((F) =>
            Object.keys(P).every((V) =>
              P[V]
                ? V === "is_active"
                  ? F[V] === (P[V] === "activo")
                  : String(F[V]).toLowerCase().includes(P[V].toLowerCase())
                : !0,
            ),
          );
          return W$(B, U$(o, a)).slice(d * m, d * m + m);
        }, [o, a, d, m, n, P]);
      return te(Fu, {
        sx: { width: "100%" },
        children: [
          te(so, {
            sx: { width: "100%", mb: 2 },
            children: [
              C(Zw, { numSelected: l.length }),
              C(o6, {
                children: te(B_, {
                  sx: { minWidth: 750 },
                  "aria-labelledby": "tableTitle",
                  size: p ? "small" : "medium",
                  children: [
                    C(v, {
                      numSelected: l.length,
                      order: o,
                      orderBy: a,
                      onSelectAllClick: O,
                      onRequestSort: k,
                      rowCount: n.length,
                      searchValues: P,
                    }),
                    te(H_, {
                      children: [
                        U.map((B, F) => {
                          var H;
                          const V = M(B.name),
                            G = `enhanced-table-checkbox-${F}`;
                          return te(
                            oh,
                            {
                              hover: !0,
                              onClick: (L) => R(L, B.name),
                              role: "checkbox",
                              "aria-checked": V,
                              tabIndex: -1,
                              selected: V,
                              sx: { cursor: "pointer" },
                              children: [
                                C(Pt, {
                                  padding: "checkbox",
                                  children: C(Up, {
                                    color: "primary",
                                    checked: V,
                                    inputProps: { "aria-labelledby": G },
                                  }),
                                }),
                                C(Pt, {
                                  component: "th",
                                  id: G,
                                  scope: "row",
                                  padding: "none",
                                  children: B.name,
                                }),
                                C(Pt, {
                                  align: "center",
                                  children: C("a", {
                                    href: B.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: B.url,
                                  }),
                                }),
                                C(Pt, {
                                  align: "center",
                                  children: B.created_date,
                                }),
                                C(Pt, {
                                  align: "center",
                                  children: B.created_by,
                                }),
                                C(Pt, {
                                  align: "center",
                                  children: B.modified_date,
                                }),
                                C(Pt, {
                                  align: "center",
                                  children: B.modified_by,
                                }),
                                C(Pt, {
                                  align: "center",
                                  children: B.is_active
                                    ? C("p", { children: "activo" })
                                    : C("p", { children: "inactivo" }),
                                }),
                                C(Pt, {
                                  align: "center",
                                  children:
                                    ((H = r.find(
                                      (L) => L._id.toString() === B.file_type,
                                    )) == null
                                      ? void 0
                                      : H.name) || "Default Value",
                                }),
                              ],
                            },
                            B.name,
                          );
                        }),
                        D > 0 &&
                          C(oh, {
                            style: { height: (p ? 33 : 53) * D },
                            children: C(Pt, { colSpan: Qw.length + 1 }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              C(I6, {
                rowsPerPageOptions: [5, 10, 25],
                component: "div",
                count: n.length,
                rowsPerPage: m,
                page: d,
                onPageChange: T,
                onRowsPerPageChange: A,
              }),
            ],
          }),
          C(g4, {
            control: C(N_, { checked: p, onChange: _ }),
            label: "Dense padding",
          }),
        ],
      });
    },
    { dataSourceName: ex } = fc;
  function H$() {
    const [e, t] = x.useState(!0),
      [n, r] = x.useState([]),
      [o, i] = x.useState([]),
      a = zh({
        cluster: ex,
        db: localStorage.getItem("REACT_APP_DB"),
        collection: localStorage.getItem("REACT_APP_COLLECTION"),
      }),
      s = zh({ cluster: ex, db: "Telehuertos", collection: "file_type" });
    x.useEffect(() => {
      l();
    }, []);
    async function l() {
      try {
        const u = await a.find({}),
          d = await s.find({});
        console.log(`Found a document : ${JSON.stringify(u, 0, 2)}`),
          console.log(`Found a document : ${JSON.stringify(d, 0, 2)}`),
          r(u),
          i(d),
          t(!1);
      } catch (u) {
        console.error(u);
      }
    }
    return C(Wp, {
      children: e
        ? C(EN, {})
        : C(Pc, { children: C(V$, { huertosData: n, huertosFileType: o }) }),
    });
  }
  var jh = {},
    q$ = Ci;
  Object.defineProperty(jh, "__esModule", { value: !0 });
  var tx = (jh.default = void 0),
    K$ = q$(pc()),
    G$ = hc,
    J$ = (0, K$.default)(
      (0, G$.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
      "Add",
    );
  tx = jh.default = J$;
  const vc = () => {},
    Y$ = { onInsert: vc, onUpdate: vc, onReplace: vc, onDelete: vc };
  function X$(e, t) {
    const n = pe.useMemo(() => ({}), []),
      r = { ...Y$, ...t },
      o = pe.useRef(r);
    pe.useEffect(() => {
      o.current = {
        onInsert: r.onInsert,
        onUpdate: r.onUpdate,
        onReplace: r.onReplace,
        onDelete: r.onDelete,
      };
    }, [r.onInsert, r.onUpdate, r.onReplace, r.onDelete]),
      pe.useEffect(() => {
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
  const { dataSourceName: Q$ } = fc;
  function Z$() {
    const e = Ei(),
      [t, n] = pe.useState([]),
      [r, o] = pe.useState(!0),
      i = Al(),
      a = window.env.REACT_APP_NAME,
      s = window.env.REACT_APP_PROJECTS.find((f) => f.name === a);
    if (!s) {
      console.error(`Metadata not found for project: ${a}`);
      return;
    }
    const { db: l, collection: u } = s;
    let d;
    try {
      d = zh({ cluster: Q$, db: l, collection: u });
    } catch (f) {
      console.error("Error while creating the collection:", f),
        (d = null),
        i("/");
    }
    return (
      pe.useEffect(() => {
        let f = !0;
        const p = d.find({});
        return (
          f &&
            p.then((y) => {
              n(y), o(!1);
            }),
          () => {
            f = !1;
          }
        );
      }, [d]),
      X$(d, {
        onInsert: (f) => {
          n((p) => {
            if (r) return p;
            const y = yc(p, f.fullDocument) ?? p.length;
            return y === p.length ? g$(p, y, f.fullDocument) : p;
          });
        },
        onUpdate: (f) => {
          n((p) => {
            if (r) return p;
            const y = yc(p, f.fullDocument);
            return v$(p, y, () => f.fullDocument);
          });
        },
        onReplace: (f) => {
          n((p) => {
            if (r) return p;
            const y = yc(p, f.fullDocument);
            return y$(p, y, f.fullDocument);
          });
        },
        onDelete: (f) => {
          n((p) => {
            if (r) return p;
            const y = yc(p, { _id: f.documentKey._id });
            return y >= 0 ? b$(p, y) : p;
          });
        },
      }),
      {
        loading: r,
        todos: t,
        saveTodo: async (f) => {
          if (f.data.summary && f.data.price) {
            (f.data.owner_id = e.currentUser.id), (f.data.isComplete = !1);
            try {
              console.log(f), await d.insertOne(f.data);
            } catch (p) {
              p.error.match(/^Duplicate key error/) &&
                console.warn(
                  "The following error means that this app tried to insert a todo multiple times (i.e. an existing todo has the same _id). In this app we just catch the error and move on. In your app, you might want to debounce the save input or implement an additional loading state to avoid sending the request in the first place.",
                ),
                console.error(p);
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
  var Fh = {},
    eL = Ci;
  Object.defineProperty(Fh, "__esModule", { value: !0 });
  var Dh = (Fh.default = void 0),
    tL = eL(pc()),
    nL = hc,
    rL = (0, tL.default)(
      (0, nL.jsx)("path", {
        d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      }),
      "Clear",
    );
  Dh = Fh.default = rL;
  function oL({ todo: e, todoActions: t }) {
    return te(Ub, {
      children: [
        C(QN, {
          children: C(Up, {
            "data-testid": "todo-checkbox",
            edge: "start",
            color: "primary",
            checked: e.isComplete,
            onClick: () => {
              t.toggleTodo(e);
            },
          }),
        }),
        C(Hu, { children: e.summary }),
        C(Hu, { children: e.price }),
        C(Yp, {
          children: C(zn, {
            "data-testid": "todo-delete-button",
            edge: "end",
            size: "small",
            onClick: () => {
              t.deleteTodo(e);
            },
            children: C(Dh, {}),
          }),
        }),
      ],
    });
  }
  function iL() {
    const [e, t] = pe.useState([]);
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
  const aL = Object.fromEntries
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
  function bc(e) {
    return Object.keys(e);
  }
  function nx(e, t) {
    if (!e) throw new Error(t);
  }
  function rx(e, t) {
    return t;
  }
  const Uh = (e) => {
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
          if (Array.isArray(o)) i = Uh(o);
          else {
            nx(!rx(o, !1)), (i = "");
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
  function sL(e, t) {
    const n = x.useRef();
    return (
      (!n.current ||
        t.length !== n.current.prevDeps.length ||
        n.current.prevDeps.map((r, o) => r === t[o]).indexOf(!1) >= 0) &&
        (n.current = { v: e(), prevDeps: [...t] }),
      n.current.v
    );
  }
  function lL(e) {
    return (
      e instanceof Object &&
      !("styles" in e) &&
      !("length" in e) &&
      !("__emotion_styles" in e)
    );
  }
  const { createCssAndCx: uL } = (() => {
    function e(n, r, o) {
      const i = [],
        a = ev(n, i, o);
      return i.length < 2 ? o : a + r(i);
    }
    function t(n) {
      const { cache: r } = n,
        o = (...i) => {
          const a = lu(i, r.registered);
          up(r, a, !1);
          const s = `${r.key}-${a.name}`;
          e: {
            const l = i[0];
            if (!lL(l)) break e;
            ox.saveClassNameCSSObjectMapping(r, s, l);
          }
          return s;
        };
      return {
        css: o,
        cx: (...i) => {
          const a = Uh(i),
            s = ox.fixClassName(r, a, o);
          return e(r.registered, o, s);
        },
      };
    }
    return { createCssAndCx: t };
  })();
  function cL(e) {
    const { useCache: t } = e;
    function n() {
      const r = t(),
        { css: o, cx: i } = sL(() => uL({ cache: r }), [r]);
      return { css: o, cx: i };
    }
    return { useCssAndCx: n };
  }
  const ox = (() => {
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
          return Uh(
            t(r.split(" ").map((a) => [a, i == null ? void 0 : i.get(a)])).map(
              (a) => (typeof a == "string" ? a : o(a)),
            ),
          );
        };
      })(),
    };
  })();
  function wc(e) {
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
  function ix(e, t, n) {
    if (!(t instanceof Object)) return e;
    const r = {};
    return (
      bc(e).forEach((o) => (r[o] = n(e[o], t[o]))),
      bc(t).forEach((o) => {
        if (o in e) return;
        const i = t[o];
        typeof i == "string" && (r[o] = i);
      }),
      r
    );
  }
  let dL = 0;
  function ax(e) {
    const { useTheme: t, cache: n } = e;
    function r() {
      var s;
      const l = f5(),
        u = pL(),
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
    const { useCssAndCx: o } = cL({ useCache: r });
    function i(s) {
      const { name: l, uniqId: u = dL++ } = s ?? {},
        d = typeof l != "object" ? l : Object.keys(l)[0];
      return function (f) {
        const p = typeof f == "function" ? f : () => f;
        return function (y, m) {
          var w, P;
          const b = t(),
            { css: g, cx: v } = o(),
            k = r();
          let O = x.useMemo(() => {
            const T = {},
              A =
                typeof Proxy < "u" &&
                new Proxy(
                  {},
                  {
                    get: (D, U) => (
                      typeof U == "symbol" && nx(!1),
                      (T[U] = `${k.key}-${u}${
                        d !== void 0 ? `-${d}` : ""
                      }-${U}-ref`)
                    ),
                  },
                ),
              _ = p(b, y, A || {}),
              M = aL(
                bc(_).map((D) => {
                  const U = _[D];
                  return (
                    U.label || (U.label = `${d !== void 0 ? `${d}-` : ""}${D}`),
                    [D, `${g(U)}${rx(D, D in T) ? ` ${T[D]}` : ""}`]
                  );
                }),
              );
            return (
              bc(T).forEach((D) => {
                D in M || (M[D] = T[D]);
              }),
              M
            );
          }, [k, g, v, b, wc(y)]);
          const R = m == null ? void 0 : m.props.classes;
          O = x.useMemo(() => ix(O, R, v), [O, wc(R), v]);
          {
            let T;
            try {
              T =
                d !== void 0
                  ? (P =
                      (w = b.components) === null || w === void 0
                        ? void 0
                        : w[d]) === null || P === void 0
                    ? void 0
                    : P.styleOverrides
                  : void 0;
            } catch {}
            const A = x.useMemo(() => {
              if (!T) return;
              const _ = {};
              for (const M in T) {
                const D = T[M];
                D instanceof Object &&
                  (_[M] = g(
                    typeof D == "function"
                      ? D(
                          Object.assign(
                            {
                              theme: b,
                              ownerState: m == null ? void 0 : m.ownerState,
                            },
                            m == null ? void 0 : m.props,
                          ),
                        )
                      : D,
                  ));
              }
              return _;
            }, [
              T === void 0 ? void 0 : JSON.stringify(T),
              wc(m == null ? void 0 : m.props),
              wc(m == null ? void 0 : m.ownerState),
              g,
            ]);
            O = x.useMemo(() => ix(O, A, v), [O, A, v]);
          }
          return { classes: O, theme: b, css: g, cx: v };
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
  const fL = x.createContext(void 0);
  function pL() {
    return x.useContext(fL);
  }
  function sx(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var lx =
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
  function hL(e) {
    const { useTheme: t, cache: n } = e,
      { makeStyles: r } = ax({ useTheme: t, cache: n });
    function o(i, a, s) {
      const l =
          typeof i == "string"
            ? (() => {
                const y = i,
                  m = function (w) {
                    var { children: P } = w,
                      b = lx(w, ["children"]);
                    return x.createElement(y, b, P);
                  };
                return Object.defineProperty(m, "name", { value: sx(y) }), m;
              })()
            : i,
        u = (() => {
          {
            const { name: y } = s ?? {};
            if (y !== void 0)
              return typeof y != "object" ? y : Object.keys(y)[0];
          }
          {
            const y = l.displayName;
            if (typeof y == "string" && y !== "") return y;
          }
          {
            const { name: y } = l;
            if (y) return y;
          }
        })(),
        d = r(Object.assign(Object.assign({}, s), { name: u }))(
          typeof a == "function" ? (y, m, w) => ux(a(y, m, w)) : ux(a),
        );
      function f(y) {
        for (const m in y) if (m !== "root") return !0;
        return !1;
      }
      const p = x.forwardRef(function (y, m) {
        const { className: w, classes: P } = y,
          b = lx(y, ["className", "classes"]),
          { classes: g, cx: v } = d(y, { props: y });
        return pe.createElement(
          l,
          Object.assign(
            { ref: m, className: f(g) ? w : v(g.root, w) },
            typeof i == "string" ? {} : { classes: g },
            b,
          ),
        );
      });
      return (
        u !== void 0 &&
          ((p.displayName = `${sx(u)}WithStyles`),
          Object.defineProperty(p, "name", { value: p.displayName })),
        p
      );
    }
    return { withStyles: o };
  }
  function ux(e) {
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
  function mL(e) {
    return Object.assign(Object.assign({}, ax(e)), hL(e));
  }
  const {
      makeStyles: VL,
      withStyles: gL,
      useStyles: HL,
    } = mL({ useTheme: Pr }),
    yL = gL(Ub, { secondaryAction: { paddingRight: "120px" } });
  function vL({ todo: e, todoActions: t, draftTodoActions: n }) {
    return te(yL, {
      children: [
        C(Hu, {
          inset: !0,
          children: C(Yu, {
            style: { width: "100%" },
            placeholder: "Ingresar evento?",
            size: "small",
            value: e.data.summary,
            onChange: (r) => {
              n.setDraftTodoSummary(e, r.target.value);
            },
          }),
        }),
        C(Hu, {
          inset: !0,
          children: C(Yu, {
            style: { width: "100%" },
            placeholder: "Cuanto ocupamos?",
            size: "small",
            value: e.data.price,
            onChange: (r) => {
              n.setDraftTodoPrice(e, r.target.value);
            },
          }),
        }),
        te(Yp, {
          children: [
            C(Uu, {
              variant: "outlined",
              size: "small",
              onClick: async () => {
                await t.saveTodo(e), n.deleteDraftTodo(e);
              },
              children: "Save",
            }),
            C(zn, {
              edge: "end",
              size: "small",
              onClick: () => {
                n.deleteDraftTodo(e);
              },
              children: C(Dh, {}),
            }),
          ],
        }),
      ],
    });
  }
  function bL(e, t) {
    pe.useEffect(() => {
      const n = setTimeout(() => {
        e();
      }, t);
      return () => clearTimeout(n);
    }, [e, t]);
  }
  function wL(e, t) {
    const [n, r] = pe.useState(!1);
    return (
      bL(() => {
        e && r(!0);
      }, [t]),
      pe.useEffect(() => {
        e || r(!1);
      }, [e]),
      n
    );
  }
  function xL() {
    const { loading: e, todos: t, ...n } = Z$(),
      { draftTodos: r, ...o } = iL();
    return (
      wL(e, 200),
      te("div", {
        className: "todo-items-container",
        children: [
          C(Ot, {
            component: "p",
            variant: "h5",
            children: `You have ${t.length} To-Do Item${
              t.length === 1 ? "" : "s"
            }`,
          }),
          C(Uu, {
            variant: "contained",
            color: "primary",
            startIcon: C(tx, {}),
            onClick: () => o.createDraftTodo(),
            children: "Add To-Do",
          }),
          te(Fb, {
            style: { width: "100%" },
            children: [
              t.map((i) => C(oL, { todo: i, todoActions: n }, gc(i))),
              r.map((i) =>
                C(vL, { todo: i, todoActions: n, draftTodoActions: o }, gc(i)),
              ),
            ],
          }),
        ],
      })
    );
  }
  function SL({ project: e }) {
    const t = Al(),
      { currentUser: n, logOut: r } = Ei();
    return (
      n || t("/"),
      C(Pc, {
        children: n
          ? C(Wp, {
              className: "main-container",
              children: (() => {
                switch (e) {
                  case "caja-chica":
                    return C(xL, {});
                  case "telehuertos":
                    return C(H$, {});
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
  const cx = {
      green: { ...Qr, 500: "#09804C", A400: "#B9EACD" },
      purple: { ...Yr, 500: "#6200EE", A400: "#9795F9" },
      orange: Yo,
      red: Jr,
      blue: Xr,
    },
    kL = { palette: { primary: cx.green, secondary: cx.green } },
    EL = ku(kL);
  function CL({ children: e }) {
    return C(x5, {
      injectFirst: !0,
      children: C(Ov, { theme: EL, children: e }),
    });
  }
  function OL() {
    const e =
      window.env && window.env.REACT_APP_NAME
        ? window.env.REACT_APP_NAME.toUpperCase()
        : "APP NAME";
    return C(Ot, {
      className: "app-bar-title",
      component: "h1",
      variant: "h5",
      children: e,
    });
  }
  const TL = "/caja-chica/assets/ESCUDO COLOR-6433e081.svg",
    { appId: PL } = fc;
  function RL() {
    return C(Fk, {
      basename: "/caja-chica",
      children: C(CL, { children: C(i$, { appId: PL, children: C(NL, {}) }) }),
    });
  }
  function NL() {
    window.env || alert("No se ha encontrado el archivo env.js");
    const { currentUser: e, logOut: t } = Ei(),
      n = Al();
    return te("div", {
      className: "App",
      children: [
        e &&
          C($P, {
            position: "sticky",
            children: te(rh, {
              children: [
                C("img", {
                  src: TL,
                  alt: "Logo",
                  style: { width: "75px", height: "75px", marginRight: "10px" },
                }),
                C(OL, {}),
                C(Uu, {
                  variant: "contained",
                  color: "secondary",
                  onClick: async () => {
                    await t(), localStorage.clear(), n("/");
                  },
                  children: C(Ot, { variant: "button", children: "Log Out" }),
                }),
              ],
            }),
          }),
        te(zk, {
          children: [
            C(Uf, { path: "/", element: C(L$, {}) }),
            C(Uf, {
              path: "/admin",
              element: C(SL, {
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
  const AL = "modulepreload",
    _L = function (e) {
      return "/caja-chica/" + e;
    },
    dx = {},
    ML = function (e, t, n) {
      if (!t || t.length === 0) return e();
      const r = document.getElementsByTagName("link");
      return Promise.all(
        t.map((o) => {
          if (((o = _L(o)), o in dx)) return;
          dx[o] = !0;
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
            ((s.rel = i ? "stylesheet" : AL),
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
    IL = (e) => {
      e &&
        e instanceof Function &&
        ML(() => import("./web-vitals-7b71ae84.js"), []).then(
          ({ getCLS: t, getFID: n, getFCP: r, getLCP: o, getTTFB: i }) => {
            t(e), n(e), r(e), o(e), i(e);
          },
        );
    };
  dy(document.getElementById("root")).render(
    C(pe.StrictMode, { children: C(RL, {}) }),
  ),
    IL();
})();
