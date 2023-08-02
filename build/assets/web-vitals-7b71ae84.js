var v,
  E,
  _,
  b,
  D,
  z = -1,
  m = function (n) {
    addEventListener(
      "pageshow",
      function (t) {
        t.persisted && ((z = t.timeStamp), n(t));
      },
      !0,
    );
  },
  k = function () {
    return (
      window.performance &&
      performance.getEntriesByType &&
      performance.getEntriesByType("navigation")[0]
    );
  },
  I = function () {
    var n = k();
    return (n && n.activationStart) || 0;
  },
  d = function (n, t) {
    var e = k(),
      a = "navigate";
    return (
      z >= 0
        ? (a = "back-forward-cache")
        : e &&
          (a =
            document.prerendering || I() > 0
              ? "prerender"
              : document.wasDiscarded
              ? "restore"
              : e.type.replace(/_/g, "-")),
      {
        name: n,
        value: t === void 0 ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v3-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: a,
      }
    );
  },
  y = function (n, t, e) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(n)) {
        var a = new PerformanceObserver(function (i) {
          Promise.resolve().then(function () {
            t(i.getEntries());
          });
        });
        return a.observe(Object.assign({ type: n, buffered: !0 }, e || {})), a;
      }
    } catch {}
  },
  l = function (n, t, e, a) {
    var i, r;
    return function (o) {
      t.value >= 0 &&
        (o || a) &&
        ((r = t.value - (i || 0)) || i === void 0) &&
        ((i = t.value),
        (t.delta = r),
        (t.rating = (function (s, u) {
          return s > u[1] ? "poor" : s > u[0] ? "needs-improvement" : "good";
        })(t.value, e)),
        n(t));
    };
  },
  x = function (n) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return n();
      });
    });
  },
  P = function (n) {
    var t = function (e) {
      (e.type !== "pagehide" && document.visibilityState !== "hidden") || n(e);
    };
    addEventListener("visibilitychange", t, !0),
      addEventListener("pagehide", t, !0);
  },
  B = function (n) {
    var t = !1;
    return function (e) {
      t || (n(e), (t = !0));
    };
  },
  g = -1,
  H = function () {
    return document.visibilityState !== "hidden" || document.prerendering
      ? 1 / 0
      : 0;
  },
  w = function (n) {
    document.visibilityState === "hidden" &&
      g > -1 &&
      ((g = n.type === "visibilitychange" ? n.timeStamp : 0), V());
  },
  N = function () {
    addEventListener("visibilitychange", w, !0),
      addEventListener("prerenderingchange", w, !0);
  },
  V = function () {
    removeEventListener("visibilitychange", w, !0),
      removeEventListener("prerenderingchange", w, !0);
  },
  R = function () {
    return (
      g < 0 &&
        ((g = H()),
        N(),
        m(function () {
          setTimeout(function () {
            (g = H()), N();
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return g;
        },
      }
    );
  },
  C = function (n) {
    document.prerendering
      ? addEventListener(
          "prerenderingchange",
          function () {
            return n();
          },
          !0,
        )
      : n();
  },
  W = function (n, t) {
    (t = t || {}),
      C(function () {
        var e,
          a = [1800, 3e3],
          i = R(),
          r = d("FCP"),
          o = y("paint", function (s) {
            s.forEach(function (u) {
              u.name === "first-contentful-paint" &&
                (o.disconnect(),
                u.startTime < i.firstHiddenTime &&
                  ((r.value = Math.max(u.startTime - I(), 0)),
                  r.entries.push(u),
                  e(!0)));
            });
          });
        o &&
          ((e = l(n, r, a, t.reportAllChanges)),
          m(function (s) {
            (r = d("FCP")),
              (e = l(n, r, a, t.reportAllChanges)),
              x(function () {
                (r.value = performance.now() - s.timeStamp), e(!0);
              });
          }));
      });
  },
  nt = function (n, t) {
    (t = t || {}),
      W(
        B(function () {
          var e,
            a = [0.1, 0.25],
            i = d("CLS", 0),
            r = 0,
            o = [],
            s = function (c) {
              c.forEach(function (f) {
                if (!f.hadRecentInput) {
                  var h = o[0],
                    L = o[o.length - 1];
                  r &&
                  f.startTime - L.startTime < 1e3 &&
                  f.startTime - h.startTime < 5e3
                    ? ((r += f.value), o.push(f))
                    : ((r = f.value), (o = [f]));
                }
              }),
                r > i.value && ((i.value = r), (i.entries = o), e());
            },
            u = y("layout-shift", s);
          u &&
            ((e = l(n, i, a, t.reportAllChanges)),
            P(function () {
              s(u.takeRecords()), e(!0);
            }),
            m(function () {
              (r = 0),
                (i = d("CLS", 0)),
                (e = l(n, i, a, t.reportAllChanges)),
                x(function () {
                  return e();
                });
            }),
            setTimeout(e, 0));
        }),
      );
  },
  T = { passive: !0, capture: !0 },
  X = new Date(),
  O = function (n, t) {
    v || ((v = t), (E = n), (_ = new Date()), J(removeEventListener), G());
  },
  G = function () {
    if (E >= 0 && E < _ - X) {
      var n = {
        entryType: "first-input",
        name: v.type,
        target: v.target,
        cancelable: v.cancelable,
        startTime: v.timeStamp,
        processingStart: v.timeStamp + E,
      };
      b.forEach(function (t) {
        t(n);
      }),
        (b = []);
    }
  },
  Y = function (n) {
    if (n.cancelable) {
      var t =
        (n.timeStamp > 1e12 ? new Date() : performance.now()) - n.timeStamp;
      n.type == "pointerdown"
        ? (function (e, a) {
            var i = function () {
                O(e, a), o();
              },
              r = function () {
                o();
              },
              o = function () {
                removeEventListener("pointerup", i, T),
                  removeEventListener("pointercancel", r, T);
              };
            addEventListener("pointerup", i, T),
              addEventListener("pointercancel", r, T);
          })(t, n)
        : O(t, n);
    }
  },
  J = function (n) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
      return n(t, Y, T);
    });
  },
  et = function (n, t) {
    (t = t || {}),
      C(function () {
        var e,
          a = [100, 300],
          i = R(),
          r = d("FID"),
          o = function (c) {
            c.startTime < i.firstHiddenTime &&
              ((r.value = c.processingStart - c.startTime),
              r.entries.push(c),
              e(!0));
          },
          s = function (c) {
            c.forEach(o);
          },
          u = y("first-input", s);
        (e = l(n, r, a, t.reportAllChanges)),
          u &&
            P(
              B(function () {
                s(u.takeRecords()), u.disconnect();
              }),
            ),
          u &&
            m(function () {
              var c;
              (r = d("FID")),
                (e = l(n, r, a, t.reportAllChanges)),
                (b = []),
                (E = -1),
                (v = null),
                J(addEventListener),
                (c = o),
                b.push(c),
                G();
            });
      });
  },
  K = 0,
  A = 1 / 0,
  S = 0,
  Z = function (n) {
    n.forEach(function (t) {
      t.interactionId &&
        ((A = Math.min(A, t.interactionId)),
        (S = Math.max(S, t.interactionId)),
        (K = S ? (S - A) / 7 + 1 : 0));
    });
  },
  Q = function () {
    return D ? K : performance.interactionCount || 0;
  },
  $ = function () {
    "interactionCount" in performance ||
      D ||
      (D = y("event", Z, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  U = 0,
  q = function () {
    return Q() - U;
  },
  p = [],
  F = {},
  j = function (n) {
    var t = p[p.length - 1],
      e = F[n.interactionId];
    if (e || p.length < 10 || n.duration > t.latency) {
      if (e) e.entries.push(n), (e.latency = Math.max(e.latency, n.duration));
      else {
        var a = { id: n.interactionId, latency: n.duration, entries: [n] };
        (F[a.id] = a), p.push(a);
      }
      p.sort(function (i, r) {
        return r.latency - i.latency;
      }),
        p.splice(10).forEach(function (i) {
          delete F[i.id];
        });
    }
  },
  rt = function (n, t) {
    (t = t || {}),
      C(function () {
        var e = [200, 500];
        $();
        var a,
          i = d("INP"),
          r = function (s) {
            s.forEach(function (f) {
              f.interactionId && j(f),
                f.entryType === "first-input" &&
                  !p.some(function (h) {
                    return h.entries.some(function (L) {
                      return (
                        f.duration === L.duration && f.startTime === L.startTime
                      );
                    });
                  }) &&
                  j(f);
            });
            var u,
              c = ((u = Math.min(p.length - 1, Math.floor(q() / 50))), p[u]);
            c &&
              c.latency !== i.value &&
              ((i.value = c.latency), (i.entries = c.entries), a());
          },
          o = y("event", r, { durationThreshold: t.durationThreshold || 40 });
        (a = l(n, i, e, t.reportAllChanges)),
          o &&
            (o.observe({ type: "first-input", buffered: !0 }),
            P(function () {
              r(o.takeRecords()),
                i.value < 0 && q() > 0 && ((i.value = 0), (i.entries = [])),
                a(!0);
            }),
            m(function () {
              (p = []),
                (U = Q()),
                (i = d("INP")),
                (a = l(n, i, e, t.reportAllChanges));
            }));
      });
  },
  M = {},
  it = function (n, t) {
    (t = t || {}),
      C(function () {
        var e,
          a = [2500, 4e3],
          i = R(),
          r = d("LCP"),
          o = function (c) {
            var f = c[c.length - 1];
            if (f) {
              var h = Math.max(f.startTime - I(), 0);
              h < i.firstHiddenTime && ((r.value = h), (r.entries = [f]), e());
            }
          },
          s = y("largest-contentful-paint", o);
        if (s) {
          e = l(n, r, a, t.reportAllChanges);
          var u = B(function () {
            M[r.id] ||
              (o(s.takeRecords()), s.disconnect(), (M[r.id] = !0), e(!0));
          });
          ["keydown", "click"].forEach(function (c) {
            addEventListener(c, u, !0);
          }),
            P(u),
            m(function (c) {
              (r = d("LCP")),
                (e = l(n, r, a, t.reportAllChanges)),
                x(function () {
                  (r.value = performance.now() - c.timeStamp),
                    (M[r.id] = !0),
                    e(!0);
                });
            });
        }
      });
  },
  tt = function n(t) {
    document.prerendering
      ? C(function () {
          return n(t);
        })
      : document.readyState !== "complete"
      ? addEventListener(
          "load",
          function () {
            return n(t);
          },
          !0,
        )
      : setTimeout(t, 0);
  },
  at = function (n, t) {
    t = t || {};
    var e = [800, 1800],
      a = d("TTFB"),
      i = l(n, a, e, t.reportAllChanges);
    tt(function () {
      var r = k();
      if (r) {
        var o = r.responseStart;
        if (o <= 0 || o > performance.now()) return;
        (a.value = Math.max(o - I(), 0)),
          (a.entries = [r]),
          i(!0),
          m(function () {
            (a = d("TTFB", 0)), (i = l(n, a, e, t.reportAllChanges))(!0);
          });
      }
    });
  };
export {
  nt as getCLS,
  W as getFCP,
  et as getFID,
  rt as getINP,
  it as getLCP,
  at as getTTFB,
  nt as onCLS,
  W as onFCP,
  et as onFID,
  rt as onINP,
  it as onLCP,
  at as onTTFB,
};
