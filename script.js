!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (d, x) {
  "use strict";
  var f = [],
    S = Object.getPrototypeOf,
    T = f.slice,
    U = f.flat
      ? function (a) {
          return f.flat.call(a);
        }
      : function (a) {
          return f.concat.apply([], a);
        },
    y = f.push,
    V = f.indexOf,
    q = {},
    W = q.toString,
    z = q.hasOwnProperty,
    A = z.toString,
    X = A.call(Object),
    c = {},
    B = function (a) {
      return "function" == typeof a && "number" != typeof a.nodeType;
    },
    C = function (a) {
      return null != a && a === a.window;
    },
    b = d.document,
    Y = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function Z(g, a, e) {
    var c,
      f,
      d = (e = e || b).createElement("script");
    if (((d.text = g), a))
      for (c in Y)
        (f = a[c] || (a.getAttribute && a.getAttribute(c))) &&
          d.setAttribute(c, f);
    e.head.appendChild(d).parentNode.removeChild(d);
  }
  function D(a) {
    return null == a
      ? a + ""
      : "object" == typeof a || "function" == typeof a
      ? q[W.call(a)] || "object"
      : typeof a;
  }
  var r = "3.5.1",
    a = function (b, c) {
      return new a.fn.init(b, c);
    };
  function aa(a) {
    var b = !!a && "length" in a && a.length,
      c = D(a);
    return (
      !B(a) &&
      !C(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && 0 < b && b - 1 in a))
    );
  }
  (a.fn = a.prototype =
    {
      jquery: r,
      constructor: a,
      length: 0,
      toArray: function () {
        return T.call(this);
      },
      get: function (a) {
        return null == a
          ? T.call(this)
          : a < 0
          ? this[a + this.length]
          : this[a];
      },
      pushStack: function (c) {
        var b = a.merge(this.constructor(), c);
        return (b.prevObject = this), b;
      },
      each: function (b) {
        return a.each(this, b);
      },
      map: function (b) {
        return this.pushStack(
          a.map(this, function (a, c) {
            return b.call(a, c, a);
          })
        );
      },
      slice: function () {
        return this.pushStack(T.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          a.grep(this, function (b, a) {
            return (a + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          a.grep(this, function (b, a) {
            return a % 2;
          })
        );
      },
      eq: function (b) {
        var c = this.length,
          a = +b + (b < 0 ? c : 0);
        return this.pushStack(0 <= a && a < c ? [this[a]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: y,
      sort: f.sort,
      splice: f.splice,
    }),
    (a.extend = a.fn.extend =
      function () {
        var h,
          e,
          f,
          c,
          g,
          j,
          b = arguments[0] || {},
          d = 1,
          k = arguments.length,
          i = !1;
        for (
          "boolean" == typeof b && ((i = b), (b = arguments[d] || {}), d++),
            "object" == typeof b || B(b) || (b = {}),
            d === k && ((b = this), d--);
          d < k;
          d++
        )
          if (null != (h = arguments[d]))
            for (e in h)
              (c = h[e]),
                "__proto__" !== e &&
                  b !== c &&
                  (i && c && (a.isPlainObject(c) || (g = Array.isArray(c)))
                    ? ((f = b[e]),
                      (j =
                        g && !Array.isArray(f)
                          ? []
                          : g || a.isPlainObject(f)
                          ? f
                          : {}),
                      (g = !1),
                      (b[e] = a.extend(i, j, c)))
                    : void 0 !== c && (b[e] = c));
        return b;
      }),
    a.extend({
      expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== W.call(a)) &&
          (!(b = S(a)) ||
            ("function" ==
              typeof (c = z.call(b, "constructor") && b.constructor) &&
              A.call(c) === X))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      globalEval: function (b, a, c) {
        Z(b, { nonce: a && a.nonce }, c);
      },
      each: function (b, c) {
        var d,
          a = 0;
        if (aa(b))
          for (d = b.length; a < d && !1 !== c.call(b[a], a, b[a]); a++);
        else for (a in b) if (!1 === c.call(b[a], a, b[a])) break;
        return b;
      },
      makeArray: function (b, d) {
        var c = d || [];
        return (
          null != b &&
            (aa(Object(b))
              ? a.merge(c, "string" == typeof b ? [b] : b)
              : y.call(c, b)),
          c
        );
      },
      inArray: function (b, a, c) {
        return null == a ? -1 : V.call(a, b, c);
      },
      merge: function (a, c) {
        for (var e = +c.length, b = 0, d = a.length; b < e; b++) a[d++] = c[b];
        return (a.length = d), a;
      },
      grep: function (b, d, e) {
        for (var c = [], a = 0, f = b.length, g = !e; a < f; a++)
          !d(b[a], a) !== g && c.push(b[a]);
        return c;
      },
      map: function (b, e, f) {
        var g,
          c,
          a = 0,
          d = [];
        if (aa(b))
          for (g = b.length; a < g; a++)
            null != (c = e(b[a], a, f)) && d.push(c);
        else for (a in b) null != (c = e(b[a], a, f)) && d.push(c);
        return U(d);
      },
      guid: 1,
      support: c,
    }),
    "function" == typeof Symbol && (a.fn[Symbol.iterator] = f[Symbol.iterator]),
    a.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (b, a) {
        q["[object " + a + "]"] = a.toLowerCase();
      }
    );
  var g = (function (u) {
    var g,
      h,
      c,
      v,
      w,
      x,
      y,
      z,
      G,
      H,
      A,
      m,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      n = "sizzle" + 1 * new Date(),
      k = u.document,
      P = 0,
      Q = 0,
      R = ar(),
      S = ar(),
      T = ar(),
      U = ar(),
      B = function (a, b) {
        return a === b && (A = !0), 0;
      },
      V = {}.hasOwnProperty,
      d = [],
      W = d.pop,
      X = d.push,
      o = d.push,
      C = d.slice,
      Y = function (b, c) {
        for (var a = 0, d = b.length; a < d; a++) if (b[a] === c) return a;
        return -1;
      },
      p =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      a = "[\\x20\\t\\r\\n\\f]",
      e =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        a +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      q =
        "\\[" +
        a +
        "*(" +
        e +
        ")(?:" +
        a +
        "*([*^$|!~]?=)" +
        a +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        e +
        "))|)" +
        a +
        "*\\]",
      r =
        ":(" +
        e +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        q +
        ")*)|.*)\\)|)",
      Z = new RegExp(a + "+", "g"),
      $ = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
      _ = new RegExp("^" + a + "*," + a + "*"),
      aa = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
      ab = new RegExp(a + "|>"),
      ac = new RegExp(r),
      ad = new RegExp("^" + e + "$"),
      D = {
        ID: new RegExp("^#(" + e + ")"),
        CLASS: new RegExp("^\\.(" + e + ")"),
        TAG: new RegExp("^(" + e + "|[*])"),
        ATTR: new RegExp("^" + q),
        PSEUDO: new RegExp("^" + r),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            a +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            a +
            "*(?:([+-]|)" +
            a +
            "*(\\d+)|))" +
            a +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + p + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            a +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            a +
            "*((?:-\\d)?\\d*)" +
            a +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      ae = /HTML$/i,
      af = /^(?:input|select|textarea|button)$/i,
      ag = /^h\d$/i,
      ah = /^[^{]+\{\s*\[native \w/,
      ai = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aj = /[+~]/,
      ak = new RegExp("\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])", "g"),
      al = function (b, c) {
        var a = "0x" + b.slice(1) - 65536;
        return (
          c ||
          (a < 0
            ? String.fromCharCode(a + 65536)
            : String.fromCharCode((a >> 10) | 55296, (1023 & a) | 56320))
        );
      },
      am = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      an = function (a, b) {
        return b
          ? "\0" === a
            ? "\uFFFD"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      ao = function () {
        m();
      },
      ap = av(
        function (a) {
          return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      o.apply((d = C.call(k.childNodes)), k.childNodes),
        d[k.childNodes.length].nodeType;
    } catch (aq) {
      o = {
        apply: d.length
          ? function (a, b) {
              X.apply(a, C.call(b));
            }
          : function (a, c) {
              for (var b = a.length, d = 0; (a[b++] = c[d++]); );
              a.length = b - 1;
            },
      };
    }
    function b(c, a, b, q) {
      var d,
        j,
        e,
        f,
        k,
        l,
        p,
        i = a && a.ownerDocument,
        g = a ? a.nodeType : 9;
      if (
        ((b = b || []),
        "string" != typeof c || !c || (1 !== g && 9 !== g && 11 !== g))
      )
        return b;
      if (!q && (m(a), (a = a || I), K)) {
        if (11 !== g && (k = ai.exec(c))) {
          if ((d = k[1])) {
            if (9 === g) {
              if (!(e = a.getElementById(d))) return b;
              if (e.id === d) return b.push(e), b;
            } else if (i && (e = i.getElementById(d)) && O(a, e) && e.id === d)
              return b.push(e), b;
          } else {
            if (k[2]) return o.apply(b, a.getElementsByTagName(c)), b;
            if (
              (d = k[3]) &&
              h.getElementsByClassName &&
              a.getElementsByClassName
            )
              return o.apply(b, a.getElementsByClassName(d)), b;
          }
        }
        if (
          h.qsa &&
          !U[c + " "] &&
          (!L || !L.test(c)) &&
          (1 !== g || "object" !== a.nodeName.toLowerCase())
        ) {
          if (((p = c), (i = a), 1 === g && (ab.test(c) || aa.test(c)))) {
            for (
              ((i = (aj.test(c) && at(a.parentNode)) || a) === a && h.scope) ||
                ((f = a.getAttribute("id"))
                  ? (f = f.replace(am, an))
                  : a.setAttribute("id", (f = n))),
                j = (l = x(c)).length;
              j--;

            )
              l[j] = (f ? "#" + f : ":scope") + " " + au(l[j]);
            p = l.join(",");
          }
          try {
            return o.apply(b, i.querySelectorAll(p)), b;
          } catch (r) {
            U(c, !0);
          } finally {
            f === n && a.removeAttribute("id");
          }
        }
      }
      return z(c.replace($, "$1"), a, b, q);
    }
    function ar() {
      var a = [];
      return function b(d, e) {
        return (
          a.push(d + " ") > c.cacheLength && delete b[a.shift()],
          (b[d + " "] = e)
        );
      };
    }
    function i(a) {
      return (a[n] = !0), a;
    }
    function j(b) {
      var a = I.createElement("fieldset");
      try {
        return !!b(a);
      } catch (c) {
        return !1;
      } finally {
        a.parentNode && a.parentNode.removeChild(a), (a = null);
      }
    }
    function l(d, e) {
      for (var a = d.split("|"), b = a.length; b--; ) c.attrHandle[a[b]] = e;
    }
    function as(b, c) {
      var a = c && b,
        d =
          a &&
          1 === b.nodeType &&
          1 === c.nodeType &&
          b.sourceIndex - c.sourceIndex;
      if (d) return d;
      if (a) {
        for (; (a = a.nextSibling); ) if (a === c) return -1;
      }
      return b ? 1 : -1;
    }
    function E(a) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }
    function F(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function s(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && !1 === b.disabled
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (!a !== b.isDisabled && ap(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function f(a) {
      return i(function (b) {
        return (
          (b = +b),
          i(function (c, g) {
            for (var d, e = a([], c.length, b), f = e.length; f--; )
              c[(d = e[f])] && (c[d] = !(g[d] = c[d]));
          })
        );
      });
    }
    function at(a) {
      return a && void 0 !== a.getElementsByTagName && a;
    }
    for (g in ((h = b.support = {}),
    (w = b.isXML =
      function (a) {
        var c = a.namespaceURI,
          b = (a.ownerDocument || a).documentElement;
        return !ae.test(c || (b && b.nodeName) || "HTML");
      }),
    (m = b.setDocument =
      function (e) {
        var f,
          b,
          d = e ? e.ownerDocument || e : k;
        return (
          d != I &&
            9 === d.nodeType &&
            d.documentElement &&
            ((J = (I = d).documentElement),
            (K = !w(I)),
            k != I &&
              (b = I.defaultView) &&
              b.top !== b &&
              (b.addEventListener
                ? b.addEventListener("unload", ao, !1)
                : b.attachEvent && b.attachEvent("onunload", ao)),
            (h.scope = j(function (a) {
              return (
                J.appendChild(a).appendChild(I.createElement("div")),
                void 0 !== a.querySelectorAll &&
                  !a.querySelectorAll(":scope fieldset div").length
              );
            })),
            (h.attributes = j(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (h.getElementsByTagName = j(function (a) {
              return (
                a.appendChild(I.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (h.getElementsByClassName = ah.test(I.getElementsByClassName)),
            (h.getById = j(function (a) {
              return (
                (J.appendChild(a).id = n),
                !I.getElementsByName || !I.getElementsByName(n).length
              );
            })),
            h.getById
              ? ((c.filter.ID = function (a) {
                  var b = a.replace(ak, al);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }),
                (c.find.ID = function (c, a) {
                  if (void 0 !== a.getElementById && K) {
                    var b = a.getElementById(c);
                    return b ? [b] : [];
                  }
                }))
              : ((c.filter.ID = function (a) {
                  var b = a.replace(ak, al);
                  return function (a) {
                    var c =
                      void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                }),
                (c.find.ID = function (b, d) {
                  if (void 0 !== d.getElementById && K) {
                    var c,
                      e,
                      f,
                      a = d.getElementById(b);
                    if (a) {
                      if ((c = a.getAttributeNode("id")) && c.value === b)
                        return [a];
                      for (f = d.getElementsByName(b), e = 0; (a = f[e++]); )
                        if ((c = a.getAttributeNode("id")) && c.value === b)
                          return [a];
                    }
                    return [];
                  }
                })),
            (c.find.TAG = h.getElementsByTagName
              ? function (b, a) {
                  return void 0 !== a.getElementsByTagName
                    ? a.getElementsByTagName(b)
                    : h.qsa
                    ? a.querySelectorAll(b)
                    : void 0;
                }
              : function (b, e) {
                  var a,
                    c = [],
                    f = 0,
                    d = e.getElementsByTagName(b);
                  if ("*" === b) {
                    for (; (a = d[f++]); ) 1 === a.nodeType && c.push(a);
                    return c;
                  }
                  return d;
                }),
            (c.find.CLASS =
              h.getElementsByClassName &&
              function (b, a) {
                if (void 0 !== a.getElementsByClassName && K)
                  return a.getElementsByClassName(b);
              }),
            (M = []),
            (L = []),
            (h.qsa = ah.test(I.querySelectorAll)) &&
              (j(function (b) {
                var c;
                (J.appendChild(b).innerHTML =
                  "<a id='" +
                  n +
                  "'></a><select id='" +
                  n +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  b.querySelectorAll("[msallowcapture^='']").length &&
                    L.push("[*^$]=" + a + "*(?:''|\"\")"),
                  b.querySelectorAll("[selected]").length ||
                    L.push("\\[" + a + "*(?:value|" + p + ")"),
                  b.querySelectorAll("[id~=" + n + "-]").length || L.push("~="),
                  (c = I.createElement("input")).setAttribute("name", ""),
                  b.appendChild(c),
                  b.querySelectorAll("[name='']").length ||
                    L.push("\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"),
                  b.querySelectorAll(":checked").length || L.push(":checked"),
                  b.querySelectorAll("a#" + n + "+*").length ||
                    L.push(".#.+[+~]"),
                  b.querySelectorAll("\\\f"),
                  L.push("[\\r\\n\\f]");
              }),
              j(function (b) {
                b.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var c = I.createElement("input");
                c.setAttribute("type", "hidden"),
                  b.appendChild(c).setAttribute("name", "D"),
                  b.querySelectorAll("[name=d]").length &&
                    L.push("name" + a + "*[*^$|!~]?="),
                  2 !== b.querySelectorAll(":enabled").length &&
                    L.push(":enabled", ":disabled"),
                  (J.appendChild(b).disabled = !0),
                  2 !== b.querySelectorAll(":disabled").length &&
                    L.push(":enabled", ":disabled"),
                  b.querySelectorAll("*,:x"),
                  L.push(",.*:");
              })),
            (h.matchesSelector = ah.test(
              (N =
                J.matches ||
                J.webkitMatchesSelector ||
                J.mozMatchesSelector ||
                J.oMatchesSelector ||
                J.msMatchesSelector)
            )) &&
              j(function (a) {
                (h.disconnectedMatch = N.call(a, "*")),
                  N.call(a, "[s!='']:x"),
                  M.push("!=", r);
              }),
            (L = L.length && new RegExp(L.join("|"))),
            (M = M.length && new RegExp(M.join("|"))),
            (f = ah.test(J.compareDocumentPosition)),
            (O =
              f || ah.test(J.contains)
                ? function (a, c) {
                    var d = 9 === a.nodeType ? a.documentElement : a,
                      b = c && c.parentNode;
                    return (
                      a === b ||
                      !(
                        !b ||
                        1 !== b.nodeType ||
                        !(d.contains
                          ? d.contains(b)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(b))
                      )
                    );
                  }
                : function (b, a) {
                    if (a) {
                      for (; (a = a.parentNode); ) if (a === b) return !0;
                    }
                    return !1;
                  }),
            (B = f
              ? function (a, b) {
                  if (a === b) return (A = !0), 0;
                  var c =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return (
                    c ||
                    (1 &
                      (c =
                        (a.ownerDocument || a) == (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1) ||
                    (!h.sortDetached && b.compareDocumentPosition(a) === c)
                      ? a == I || (a.ownerDocument == k && O(k, a))
                        ? -1
                        : b == I || (b.ownerDocument == k && O(k, b))
                        ? 1
                        : H
                        ? Y(H, a) - Y(H, b)
                        : 0
                      : 4 & c
                      ? -1
                      : 1)
                  );
                }
              : function (c, d) {
                  if (c === d) return (A = !0), 0;
                  var a,
                    b = 0,
                    g = c.parentNode,
                    h = d.parentNode,
                    e = [c],
                    f = [d];
                  if (!g || !h)
                    return c == I
                      ? -1
                      : d == I
                      ? 1
                      : g
                      ? -1
                      : h
                      ? 1
                      : H
                      ? Y(H, c) - Y(H, d)
                      : 0;
                  if (g === h) return as(c, d);
                  for (a = c; (a = a.parentNode); ) e.unshift(a);
                  for (a = d; (a = a.parentNode); ) f.unshift(a);
                  for (; e[b] === f[b]; ) b++;
                  return b
                    ? as(e[b], f[b])
                    : e[b] == k
                    ? -1
                    : f[b] == k
                    ? 1
                    : 0;
                })),
          I
        );
      }),
    (b.matches = function (a, c) {
      return b(a, null, null, c);
    }),
    (b.matchesSelector = function (c, a) {
      if (
        (m(c),
        h.matchesSelector &&
          K &&
          !U[a + " "] &&
          (!M || !M.test(a)) &&
          (!L || !L.test(a)))
      )
        try {
          var d = N.call(c, a);
          if (
            d ||
            h.disconnectedMatch ||
            (c.document && 11 !== c.document.nodeType)
          )
            return d;
        } catch (e) {
          U(a, !0);
        }
      return 0 < b(a, I, null, [c]).length;
    }),
    (b.contains = function (a, b) {
      return (a.ownerDocument || a) != I && m(a), O(a, b);
    }),
    (b.attr = function (a, b) {
      (a.ownerDocument || a) != I && m(a);
      var e = c.attrHandle[b.toLowerCase()],
        d = e && V.call(c.attrHandle, b.toLowerCase()) ? e(a, b, !K) : void 0;
      return void 0 !== d
        ? d
        : h.attributes || !K
        ? a.getAttribute(b)
        : (d = a.getAttributeNode(b)) && d.specified
        ? d.value
        : null;
    }),
    (b.escape = function (a) {
      return (a + "").replace(am, an);
    }),
    (b.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }),
    (b.uniqueSort = function (a) {
      var d,
        e = [],
        b = 0,
        c = 0;
      if (
        ((A = !h.detectDuplicates),
        (H = !h.sortStable && a.slice(0)),
        a.sort(B),
        A)
      ) {
        for (; (d = a[c++]); ) d === a[c] && (b = e.push(c));
        for (; b--; ) a.splice(e[b], 1);
      }
      return (H = null), a;
    }),
    (v = b.getText =
      function (a) {
        var d,
          c = "",
          e = 0,
          b = a.nodeType;
        if (b) {
          if (1 === b || 9 === b || 11 === b) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += v(a);
          } else if (3 === b || 4 === b) return a.nodeValue;
        } else for (; (d = a[e++]); ) c += v(d);
        return c;
      }),
    ((c = b.selectors =
      {
        cacheLength: 50,
        createPseudo: i,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(ak, al)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(ak, al)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || b.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && b.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var c,
              b = !a[6] && a[2];
            return D.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : b &&
                    ac.test(b) &&
                    (c = x(b, !0)) &&
                    (c = b.indexOf(")", b.length - c) - b.length) &&
                    ((a[0] = a[0].slice(0, c)), (a[2] = b.slice(0, c))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(ak, al).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (b) {
            var c = R[b + " "];
            return (
              c ||
              ((c = new RegExp("(^|" + a + ")" + b + "(" + a + "|$)")),
              R(b, function (a) {
                return c.test(
                  ("string" == typeof a.className && a.className) ||
                    (void 0 !== a.getAttribute && a.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function (a, c, d) {
            return function (f) {
              var e = b.attr(f, a);
              return null == e
                ? "!=" === c
                : !c ||
                    ((e += ""),
                    "=" === c
                      ? e === d
                      : "!=" === c
                      ? e !== d
                      : "^=" === c
                      ? d && 0 === e.indexOf(d)
                      : "*=" === c
                      ? d && -1 < e.indexOf(d)
                      : "$=" === c
                      ? d && e.slice(-d.length) === d
                      : "~=" === c
                      ? -1 < (" " + e.replace(Z, " ") + " ").indexOf(d)
                      : "|=" === c &&
                        (e === d || e.slice(0, d.length + 1) === d + "-"));
            };
          },
          CHILD: function (a, b, e, c, d) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === c && 0 === d
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (j, u, t) {
                  var l,
                    q,
                    k,
                    b,
                    i,
                    m,
                    o = f !== g ? "nextSibling" : "previousSibling",
                    p = j.parentNode,
                    s = h && j.nodeName.toLowerCase(),
                    r = !t && !h,
                    e = !1;
                  if (p) {
                    if (f) {
                      for (; o; ) {
                        for (b = j; (b = b[o]); )
                          if (
                            h
                              ? b.nodeName.toLowerCase() === s
                              : 1 === b.nodeType
                          )
                            return !1;
                        m = o = "only" === a && !m && "nextSibling";
                      }
                      return !0;
                    }
                    if (((m = [g ? p.firstChild : p.lastChild]), g && r)) {
                      for (
                        e =
                          (i =
                            (l =
                              (q =
                                (k = (b = p)[n] || (b[n] = {}))[b.uniqueID] ||
                                (k[b.uniqueID] = {}))[a] || [])[0] === P &&
                            l[1]) && l[2],
                          b = i && p.childNodes[i];
                        (b = (++i && b && b[o]) || (e = i = 0) || m.pop());

                      )
                        if (1 === b.nodeType && ++e && b === j) {
                          q[a] = [P, i, e];
                          break;
                        }
                    } else if (
                      (r &&
                        (e = i =
                          (l =
                            (q =
                              (k = (b = j)[n] || (b[n] = {}))[b.uniqueID] ||
                              (k[b.uniqueID] = {}))[a] || [])[0] === P && l[1]),
                      !1 === e)
                    )
                      for (
                        ;
                        (b = (++i && b && b[o]) || (e = i = 0) || m.pop()) &&
                        (!(
                          (h
                            ? b.nodeName.toLowerCase() === s
                            : 1 === b.nodeType) && ++e
                        ) ||
                          (r &&
                            ((q =
                              (k = b[n] || (b[n] = {}))[b.uniqueID] ||
                              (k[b.uniqueID] = {}))[a] = [P, e]),
                          b !== j));

                      );
                    return (e -= d) === c || (e % c == 0 && 0 <= e / c);
                  }
                };
          },
          PSEUDO: function (a, e) {
            var f,
              d =
                c.pseudos[a] ||
                c.setFilters[a.toLowerCase()] ||
                b.error("unsupported pseudo: " + a);
            return d[n]
              ? d(e)
              : 1 < d.length
              ? ((f = [a, a, "", e]),
                c.setFilters.hasOwnProperty(a.toLowerCase())
                  ? i(function (a, g) {
                      for (var f, b = d(a, e), c = b.length; c--; )
                        a[(f = Y(a, b[c]))] = !(g[f] = b[c]);
                    })
                  : function (a) {
                      return d(a, 0, f);
                    })
              : d;
          },
        },
        pseudos: {
          not: i(function (a) {
            var c = [],
              d = [],
              b = y(a.replace($, "$1"));
            return b[n]
              ? i(function (c, e, h, f) {
                  for (var d, g = b(c, null, f, []), a = c.length; a--; )
                    (d = g[a]) && (c[a] = !(e[a] = d));
                })
              : function (a, f, e) {
                  return (c[0] = a), b(c, null, e, d), (c[0] = null), !d.pop();
                };
          }),
          has: i(function (a) {
            return function (c) {
              return 0 < b(a, c).length;
            };
          }),
          contains: i(function (a) {
            return (
              (a = a.replace(ak, al)),
              function (b) {
                return -1 < (b.textContent || v(b)).indexOf(a);
              }
            );
          }),
          lang: i(function (a) {
            return (
              ad.test(a || "") || b.error("unsupported lang: " + a),
              (a = a.replace(ak, al).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = K
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var a = u.location && u.location.hash;
            return a && a.slice(1) === b.id;
          },
          root: function (a) {
            return a === J;
          },
          focus: function (a) {
            return (
              a === I.activeElement &&
              (!I.hasFocus || I.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: s(!1),
          disabled: s(!0),
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !c.pseudos.empty(a);
          },
          header: function (a) {
            return ag.test(a.nodeName);
          },
          input: function (a) {
            return af.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: f(function () {
            return [0];
          }),
          last: f(function (b, a) {
            return [a - 1];
          }),
          eq: f(function (c, b, a) {
            return [a < 0 ? a + b : a];
          }),
          even: f(function (b, c) {
            for (var a = 0; a < c; a += 2) b.push(a);
            return b;
          }),
          odd: f(function (b, c) {
            for (var a = 1; a < c; a += 2) b.push(a);
            return b;
          }),
          lt: f(function (c, b, a) {
            for (var d = a < 0 ? a + b : b < a ? b : a; 0 <= --d; ) c.push(d);
            return c;
          }),
          gt: f(function (b, c, a) {
            for (var d = a < 0 ? a + c : a; ++d < c; ) b.push(d);
            return b;
          }),
        },
      }).pseudos.nth = c.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      c.pseudos[g] = E(g);
    for (g in { submit: !0, reset: !0 }) c.pseudos[g] = F(g);
    function t() {}
    function au(b) {
      for (var a = 0, d = b.length, c = ""; a < d; a++) c += b[a].value;
      return c;
    }
    function av(f, a, b) {
      var c = a.dir,
        d = a.next,
        e = d || c,
        g = b && "parentNode" === e,
        h = Q++;
      return a.first
        ? function (a, b, d) {
            for (; (a = a[c]); ) if (1 === a.nodeType || g) return f(a, b, d);
            return !1;
          }
        : function (a, k, i) {
            var b,
              j,
              l,
              m = [P, h];
            if (i) {
              for (; (a = a[c]); )
                if ((1 === a.nodeType || g) && f(a, k, i)) return !0;
            } else
              for (; (a = a[c]); )
                if (1 === a.nodeType || g) {
                  if (
                    ((j =
                      (l = a[n] || (a[n] = {}))[a.uniqueID] ||
                      (l[a.uniqueID] = {})),
                    d && d === a.nodeName.toLowerCase())
                  )
                    a = a[c] || a;
                  else {
                    if ((b = j[e]) && b[0] === P && b[1] === h)
                      return (m[2] = b[2]);
                    if (((j[e] = m)[2] = f(a, k, i))) return !0;
                  }
                }
            return !1;
          };
    }
    function aw(a) {
      return 1 < a.length
        ? function (c, d, e) {
            for (var b = a.length; b--; ) if (!a[b](c, d, e)) return !1;
            return !0;
          }
        : a[0];
    }
    function ax(c, d, e, g, h) {
      for (var b, f = [], a = 0, i = c.length, j = null != d; a < i; a++)
        (b = c[a]) && ((e && !e(b, g, h)) || (f.push(b), j && d.push(a)));
      return f;
    }
    function ay(e, f, g, a, c, d) {
      return (
        a && !a[n] && (a = ay(a)),
        c && !c[n] && (c = ay(c, d)),
        i(function (k, l, m, n) {
          var i,
            h,
            j,
            r = [],
            q = [],
            s = l.length,
            t =
              k ||
              (function (e, c, d) {
                for (var a = 0, f = c.length; a < f; a++) b(e, c[a], d);
                return d;
              })(f || "*", m.nodeType ? [m] : m, []),
            p = e && (k || !f) ? ax(t, r, e, m, n) : t,
            d = g ? (c || (k ? e : s || a) ? [] : l) : p;
          if ((g && g(p, d, m, n), a))
            for (i = ax(d, q), a(i, [], m, n), h = i.length; h--; )
              (j = i[h]) && (d[q[h]] = !(p[q[h]] = j));
          if (k) {
            if (c || e) {
              if (c) {
                for (i = [], h = d.length; h--; )
                  (j = d[h]) && i.push((p[h] = j));
                c(null, (d = []), i, n);
              }
              for (h = d.length; h--; )
                (j = d[h]) &&
                  -1 < (i = c ? Y(k, j) : r[h]) &&
                  (k[i] = !(l[i] = j));
            }
          } else (d = ax(d === l ? d.splice(s, d.length) : d)), c ? c(null, l, d, n) : o.apply(l, d);
        })
      );
    }
    function az(a) {
      for (
        var j,
          e,
          d,
          g = a.length,
          h = c.relative[a[0].type],
          i = h || c.relative[" "],
          b = h ? 1 : 0,
          k = av(
            function (a) {
              return a === j;
            },
            i,
            !0
          ),
          l = av(
            function (a) {
              return -1 < Y(j, a);
            },
            i,
            !0
          ),
          f = [
            function (c, a, b) {
              var d =
                (!h && (b || a !== G)) ||
                ((j = a).nodeType ? k(c, a, b) : l(c, a, b));
              return (j = null), d;
            },
          ];
        b < g;
        b++
      )
        if ((e = c.relative[a[b].type])) f = [av(aw(f), e)];
        else {
          if ((e = c.filter[a[b].type].apply(null, a[b].matches))[n]) {
            for (d = ++b; d < g && !c.relative[a[d].type]; d++);
            return ay(
              1 < b && aw(f),
              1 < b &&
                au(
                  a
                    .slice(0, b - 1)
                    .concat({ value: " " === a[b - 2].type ? "*" : "" })
                ).replace($, "$1"),
              e,
              b < d && az(a.slice(b, d)),
              d < g && az((a = a.slice(d))),
              d < g && au(a)
            );
          }
          f.push(e);
        }
      return aw(f);
    }
    return (
      (t.prototype = c.filters = c.pseudos),
      (c.setFilters = new t()),
      (x = b.tokenize =
        function (g, k) {
          var e,
            d,
            h,
            f,
            a,
            i,
            j,
            l = S[g + " "];
          if (l) return k ? 0 : l.slice(0);
          for (a = g, i = [], j = c.preFilter; a; ) {
            for (f in ((!e || (d = _.exec(a))) &&
              (d && (a = a.slice(d[0].length) || a), i.push((h = []))),
            (e = !1),
            (d = aa.exec(a)) &&
              ((e = d.shift()),
              h.push({ value: e, type: d[0].replace($, " ") }),
              (a = a.slice(e.length))),
            c.filter))
              (d = D[f].exec(a)) &&
                (!j[f] || (d = j[f](d))) &&
                ((e = d.shift()),
                h.push({ value: e, type: f, matches: d }),
                (a = a.slice(e.length)));
            if (!e) break;
          }
          return k ? a.length : a ? b.error(g) : S(g, i).slice(0);
        }),
      (y = b.compile =
        function (d, e) {
          var f,
            h,
            p,
            j,
            q,
            g,
            k = [],
            l = [],
            a = T[d + " "];
          if (!a) {
            for (e || (e = x(d)), f = e.length; f--; )
              (a = az(e[f]))[n] ? k.push(a) : l.push(a);
            (a = T(
              d,
              ((h = l),
              (j = 0 < (p = k).length),
              (q = 0 < h.length),
              (g = function (g, i, t, n, f) {
                var a,
                  r,
                  k,
                  l = 0,
                  d = "0",
                  s = g && [],
                  e = [],
                  u = G,
                  v = g || (q && c.find.TAG("*", f)),
                  w = (P += null == u ? 1 : Math.random() || 0.1),
                  x = v.length;
                for (
                  f && (G = i == I || i || f);
                  d !== x && null != (a = v[d]);
                  d++
                ) {
                  if (q && a) {
                    for (
                      r = 0, i || a.ownerDocument == I || (m(a), (t = !K));
                      (k = h[r++]);

                    )
                      if (k(a, i || I, t)) {
                        n.push(a);
                        break;
                      }
                    f && (P = w);
                  }
                  j && ((a = !k && a) && l--, g && s.push(a));
                }
                if (((l += d), j && d !== l)) {
                  for (r = 0; (k = p[r++]); ) k(s, e, i, t);
                  if (g) {
                    if (0 < l) for (; d--; ) s[d] || e[d] || (e[d] = W.call(n));
                    e = ax(e);
                  }
                  o.apply(n, e),
                    f &&
                      !g &&
                      0 < e.length &&
                      1 < l + p.length &&
                      b.uniqueSort(n);
                }
                return f && ((P = w), (G = u)), s;
              }),
              j ? i(g) : g)
            )).selector = d;
          }
          return a;
        }),
      (z = b.select =
        function (b, a, e, f) {
          var h,
            d,
            g,
            k,
            l,
            j = "function" == typeof b && b,
            i = !f && x((b = j.selector || b));
          if (((e = e || []), 1 === i.length)) {
            if (
              2 < (d = i[0] = i[0].slice(0)).length &&
              "ID" === (g = d[0]).type &&
              9 === a.nodeType &&
              K &&
              c.relative[d[1].type]
            ) {
              if (!(a = (c.find.ID(g.matches[0].replace(ak, al), a) || [])[0]))
                return e;
              j && (a = a.parentNode), (b = b.slice(d.shift().value.length));
            }
            for (
              h = D.needsContext.test(b) ? 0 : d.length;
              h-- && ((g = d[h]), !c.relative[(k = g.type)]);

            )
              if (
                (l = c.find[k]) &&
                (f = l(
                  g.matches[0].replace(ak, al),
                  (aj.test(d[0].type) && at(a.parentNode)) || a
                ))
              ) {
                if ((d.splice(h, 1), !(b = f.length && au(d))))
                  return o.apply(e, f), e;
                break;
              }
          }
          return (
            (j || y(b, i))(
              f,
              a,
              !K,
              e,
              !a || (aj.test(b) && at(a.parentNode)) || a
            ),
            e
          );
        }),
      (h.sortStable = n.split("").sort(B).join("") === n),
      (h.detectDuplicates = !!A),
      m(),
      (h.sortDetached = j(function (a) {
        return 1 & a.compareDocumentPosition(I.createElement("fieldset"));
      })),
      j(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        l("type|href|height|width", function (b, a, c) {
          if (!c) return b.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2);
        }),
      (h.attributes &&
        j(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        l("value", function (a, c, b) {
          if (!b && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      j(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        l(p, function (c, a, d) {
          var b;
          if (!d)
            return !0 === c[a]
              ? a.toLowerCase()
              : (b = c.getAttributeNode(a)) && b.specified
              ? b.value
              : null;
        }),
      b
    );
  })(d);
  (a.find = g),
    (a.expr = g.selectors),
    (a.expr[":"] = a.expr.pseudos),
    (a.uniqueSort = a.unique = g.uniqueSort),
    (a.text = g.getText),
    (a.isXMLDoc = g.isXML),
    (a.contains = g.contains),
    (a.escapeSelector = g.escape);
  var ab = function (b, e, c) {
      for (var d = [], f = void 0 !== c; (b = b[e]) && 9 !== b.nodeType; )
        if (1 === b.nodeType) {
          if (f && a(b).is(c)) break;
          d.push(b);
        }
      return d;
    },
    ac = function (a, c) {
      for (var b = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== c && b.push(a);
      return b;
    },
    ad = a.expr.match.needsContext;
  function E(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function af(b, c, d) {
    return B(c)
      ? a.grep(b, function (a, b) {
          return !!c.call(a, b, a) !== d;
        })
      : c.nodeType
      ? a.grep(b, function (a) {
          return (a === c) !== d;
        })
      : "string" != typeof c
      ? a.grep(b, function (a) {
          return -1 < V.call(c, a) !== d;
        })
      : a.filter(c, b, d);
  }
  (a.filter = function (b, c, e) {
    var d = c[0];
    return (
      e && (b = ":not(" + b + ")"),
      1 === c.length && 1 === d.nodeType
        ? a.find.matchesSelector(d, b)
          ? [d]
          : []
        : a.find.matches(
            b,
            a.grep(c, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    a.fn.extend({
      find: function (d) {
        var b,
          c,
          e = this.length,
          f = this;
        if ("string" != typeof d)
          return this.pushStack(
            a(d).filter(function () {
              for (b = 0; b < e; b++) if (a.contains(f[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < e; b++) a.find(d, f[b], c);
        return 1 < e ? a.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(af(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(af(this, a || [], !0));
      },
      is: function (b) {
        return !!af(
          this,
          "string" == typeof b && ad.test(b) ? a(b) : b || [],
          !1
        ).length;
      },
    });
  var F,
    ag = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((a.fn.init = function (d, c, f) {
    var e, g;
    if (!d) return this;
    if (((f = f || F), "string" == typeof d)) {
      if (
        !(e =
          "<" === d[0] && ">" === d[d.length - 1] && 3 <= d.length
            ? [null, d, null]
            : ag.exec(d)) ||
        (!e[1] && c)
      )
        return !c || c.jquery ? (c || f).find(d) : this.constructor(c).find(d);
      if (e[1]) {
        if (
          ((c = c instanceof a ? c[0] : c),
          a.merge(
            this,
            a.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : b, !0)
          ),
          ae.test(e[1]) && a.isPlainObject(c))
        )
          for (e in c) B(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
        return this;
      }
      return (
        (g = b.getElementById(e[2])) && ((this[0] = g), (this.length = 1)), this
      );
    }
    return d.nodeType
      ? ((this[0] = d), (this.length = 1), this)
      : B(d)
      ? void 0 !== f.ready
        ? f.ready(d)
        : d(a)
      : a.makeArray(d, this);
  }).prototype = a.fn),
    (F = a(b));
  var ah = /^(?:parents|prev(?:Until|All))/,
    ai = { children: !0, contents: !0, next: !0, prev: !0 };
  function aj(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a;
  }
  a.fn.extend({
    has: function (b) {
      var c = a(b, this),
        d = c.length;
      return this.filter(function () {
        for (var b = 0; b < d; b++) if (a.contains(this, c[b])) return !0;
      });
    },
    closest: function (c, g) {
      var b,
        e = 0,
        h = this.length,
        d = [],
        f = "string" != typeof c && a(c);
      if (!ad.test(c)) {
        for (; e < h; e++)
          for (b = this[e]; b && b !== g; b = b.parentNode)
            if (
              b.nodeType < 11 &&
              (f
                ? -1 < f.index(b)
                : 1 === b.nodeType && a.find.matchesSelector(b, c))
            ) {
              d.push(b);
              break;
            }
      }
      return this.pushStack(1 < d.length ? a.uniqueSort(d) : d);
    },
    index: function (b) {
      return b
        ? "string" == typeof b
          ? V.call(a(b), this[0])
          : V.call(this, b.jquery ? b[0] : b)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (b, c) {
      return this.pushStack(a.uniqueSort(a.merge(this.get(), a(b, c))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  }),
    a.each(
      {
        parent: function (b) {
          var a = b.parentNode;
          return a && 11 !== a.nodeType ? a : null;
        },
        parents: function (a) {
          return ab(a, "parentNode");
        },
        parentsUntil: function (a, c, b) {
          return ab(a, "parentNode", b);
        },
        next: function (a) {
          return aj(a, "nextSibling");
        },
        prev: function (a) {
          return aj(a, "previousSibling");
        },
        nextAll: function (a) {
          return ab(a, "nextSibling");
        },
        prevAll: function (a) {
          return ab(a, "previousSibling");
        },
        nextUntil: function (a, c, b) {
          return ab(a, "nextSibling", b);
        },
        prevUntil: function (a, c, b) {
          return ab(a, "previousSibling", b);
        },
        siblings: function (a) {
          return ac((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return ac(a.firstChild);
        },
        contents: function (b) {
          return null != b.contentDocument && S(b.contentDocument)
            ? b.contentDocument
            : (E(b, "template") && (b = b.content || b),
              a.merge([], b.childNodes));
        },
      },
      function (b, c) {
        a.fn[b] = function (f, e) {
          var d = a.map(this, c, f);
          return (
            "Until" !== b.slice(-5) && (e = f),
            e && "string" == typeof e && (d = a.filter(e, d)),
            1 < this.length &&
              (ai[b] || a.uniqueSort(d), ah.test(b) && d.reverse()),
            this.pushStack(d)
          );
        };
      }
    );
  var ak = /[^\x20\t\r\n\f]+/g;
  function al(a) {
    return a;
  }
  function am(a) {
    throw a;
  }
  function an(a, c, d, e) {
    var b;
    try {
      a && B((b = a.promise))
        ? b.call(a).done(c).fail(d)
        : a && B((b = a.then))
        ? b.call(a, c, d)
        : c.apply(void 0, [a].slice(e));
    } catch (f) {
      d.apply(void 0, [f]);
    }
  }
  (a.Callbacks = function (b) {
    b =
      "string" == typeof b
        ? ((d = b),
          (e = {}),
          a.each(d.match(ak) || [], function (b, a) {
            e[a] = !0;
          }),
          e)
        : a.extend({}, b);
    var d,
      e,
      f,
      g,
      h,
      i,
      j = [],
      k = [],
      l = -1,
      m = function () {
        for (i = i || b.once, h = f = !0; k.length; l = -1)
          for (g = k.shift(); ++l < j.length; )
            !1 === j[l].apply(g[0], g[1]) &&
              b.stopOnFalse &&
              ((l = j.length), (g = !1));
        b.memory || (g = !1), (f = !1), i && (j = g ? [] : "");
      },
      c = {
        add: function () {
          return (
            j &&
              (g && !f && ((l = j.length - 1), k.push(g)),
              (function e(d) {
                a.each(d, function (d, a) {
                  B(a)
                    ? (b.unique && c.has(a)) || j.push(a)
                    : a && a.length && "string" !== D(a) && e(a);
                });
              })(arguments),
              g && !f && m()),
            this
          );
        },
        remove: function () {
          return (
            a.each(arguments, function (d, c) {
              for (var b; -1 < (b = a.inArray(c, j, b)); )
                j.splice(b, 1), b <= l && l--;
            }),
            this
          );
        },
        has: function (b) {
          return b ? -1 < a.inArray(b, j) : 0 < j.length;
        },
        empty: function () {
          return j && (j = []), this;
        },
        disable: function () {
          return (i = k = []), (j = g = ""), this;
        },
        disabled: function () {
          return !j;
        },
        lock: function () {
          return (i = k = []), g || f || (j = g = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (b, a) {
          return (
            i ||
              ((a = [b, (a = a || []).slice ? a.slice() : a]),
              k.push(a),
              f || m()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!h;
        },
      };
    return c;
  }),
    a.extend({
      Deferred: function (c) {
        var e = [
            [
              "notify",
              "progress",
              a.Callbacks("memory"),
              a.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          g = "pending",
          f = {
            state: function () {
              return g;
            },
            always: function () {
              return b.done(arguments).fail(arguments), this;
            },
            catch: function (a) {
              return f.then(null, a);
            },
            pipe: function () {
              var c = arguments;
              return a
                .Deferred(function (d) {
                  a.each(e, function (e, a) {
                    var f = B(c[a[4]]) && c[a[4]];
                    b[a[1]](function () {
                      var b = f && f.apply(this, arguments);
                      b && B(b.promise)
                        ? b
                            .promise()
                            .progress(d.notify)
                            .done(d.resolve)
                            .fail(d.reject)
                        : d[a[0] + "With"](this, f ? [b] : arguments);
                    });
                  }),
                    (c = null);
                })
                .promise();
            },
            then: function (b, c, f) {
              var g = 0;
              function h(b, c, e, f) {
                return function () {
                  var k = this,
                    l = arguments,
                    j = function () {
                      var a, d;
                      if (!(b < g)) {
                        if ((a = e.apply(k, l)) === c.promise())
                          throw new TypeError("Thenable self-resolution");
                        B(
                          (d =
                            a &&
                            ("object" == typeof a || "function" == typeof a) &&
                            a.then)
                        )
                          ? f
                            ? d.call(a, h(g, c, al, f), h(g, c, am, f))
                            : (g++,
                              d.call(
                                a,
                                h(g, c, al, f),
                                h(g, c, am, f),
                                h(g, c, al, c.notifyWith)
                              ))
                          : (e !== al && ((k = void 0), (l = [a])),
                            (f || c.resolveWith)(k, l));
                      }
                    },
                    i = f
                      ? j
                      : function () {
                          try {
                            j();
                          } catch (d) {
                            a.Deferred.exceptionHook &&
                              a.Deferred.exceptionHook(d, i.stackTrace),
                              g <= b + 1 &&
                                (e !== am && ((k = void 0), (l = [d])),
                                c.rejectWith(k, l));
                          }
                        };
                  b
                    ? i()
                    : (a.Deferred.getStackHook &&
                        (i.stackTrace = a.Deferred.getStackHook()),
                      d.setTimeout(i));
                };
              }
              return a
                .Deferred(function (a) {
                  e[0][3].add(h(0, a, B(f) ? f : al, a.notifyWith)),
                    e[1][3].add(h(0, a, B(b) ? b : al)),
                    e[2][3].add(h(0, a, B(c) ? c : am));
                })
                .promise();
            },
            promise: function (b) {
              return null != b ? a.extend(b, f) : f;
            },
          },
          b = {};
        return (
          a.each(e, function (d, a) {
            var c = a[2],
              h = a[5];
            (f[a[1]] = c.add),
              h &&
                c.add(
                  function () {
                    g = h;
                  },
                  e[3 - d][2].disable,
                  e[3 - d][3].disable,
                  e[0][2].lock,
                  e[0][3].lock
                ),
              c.add(a[3].fire),
              (b[a[0]] = function () {
                return (
                  b[a[0] + "With"](this === b ? void 0 : this, arguments), this
                );
              }),
              (b[a[0] + "With"] = c.fireWith);
          }),
          f.promise(b),
          c && c.call(b, b),
          b
        );
      },
      when: function (g) {
        var d = arguments.length,
          b = d,
          h = Array(b),
          e = T.call(arguments),
          c = a.Deferred(),
          f = function (a) {
            return function (b) {
              (h[a] = this),
                (e[a] = 1 < arguments.length ? T.call(arguments) : b),
                --d || c.resolveWith(h, e);
            };
          };
        if (
          d <= 1 &&
          (an(g, c.done(f(b)).resolve, c.reject, !d),
          "pending" === c.state() || B(e[b] && e[b].then))
        )
          return c.then();
        for (; b--; ) an(e[b], f(b), c.reject);
        return c.promise();
      },
    });
  var ao = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (a.Deferred.exceptionHook = function (a, b) {
    d.console &&
      d.console.warn &&
      a &&
      ao.test(a.name) &&
      d.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b);
  }),
    (a.readyException = function (a) {
      d.setTimeout(function () {
        throw a;
      });
    });
  var G = a.Deferred();
  function s() {
    b.removeEventListener("DOMContentLoaded", s),
      d.removeEventListener("load", s),
      a.ready();
  }
  (a.fn.ready = function (b) {
    return (
      G.then(b).catch(function (b) {
        a.readyException(b);
      }),
      this
    );
  }),
    a.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (c) {
        (!0 === c ? --a.readyWait : a.isReady) ||
          ((a.isReady = !0) !== c && 0 < --a.readyWait) ||
          G.resolveWith(b, [a]);
      },
    }),
    (a.ready.then = G.then),
    "complete" !== b.readyState &&
    ("loading" === b.readyState || b.documentElement.doScroll)
      ? (b.addEventListener("DOMContentLoaded", s),
        d.addEventListener("load", s))
      : d.setTimeout(a.ready);
  var $ = function (c, b, e, f, h, j, g) {
      var d = 0,
        k = c.length,
        i = null == e;
      if ("object" === D(e))
        for (d in ((h = !0), e)) $(c, b, d, e[d], !0, j, g);
      else if (
        void 0 !== f &&
        ((h = !0),
        B(f) || (g = !0),
        i &&
          (g
            ? (b.call(c, f), (b = null))
            : ((i = b),
              (b = function (b, d, c) {
                return i.call(a(b), c);
              }))),
        b)
      )
        for (; d < k; d++) b(c[d], e, g ? f : f.call(c[d], d, b(c[d], e)));
      return h ? c : i ? b.call(c) : k ? b(c[0], e) : j;
    },
    _ = /^-ms-/,
    ap = /-([a-z])/g;
  function aq(b, a) {
    return a.toUpperCase();
  }
  function H(a) {
    return a.replace(_, "ms-").replace(ap, aq);
  }
  var ar = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function k() {
    this.expando = a.expando + k.uid++;
  }
  (k.uid = 1),
    (k.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            ar(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (d, a, e) {
        var b,
          c = this.cache(d);
        if ("string" == typeof a) c[H(a)] = e;
        else for (b in a) c[H(b)] = a[b];
        return c;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][H(b)];
      },
      access: function (c, a, b) {
        return void 0 === a || (a && "string" == typeof a && void 0 === b)
          ? this.get(c, a)
          : (this.set(c, a, b), void 0 !== b ? b : a);
      },
      remove: function (c, b) {
        var e,
          d = c[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b)
            for (
              e = (b = Array.isArray(b)
                ? b.map(H)
                : ((b = H(b)) in d)
                ? [b]
                : b.match(ak) || []).length;
              e--;

            )
              delete d[b[e]];
          (void 0 === b || a.isEmptyObject(d)) &&
            (c.nodeType ? (c[this.expando] = void 0) : delete c[this.expando]);
        }
      },
      hasData: function (c) {
        var b = c[this.expando];
        return void 0 !== b && !a.isEmptyObject(b);
      },
    });
  var as = new k(),
    at = new k(),
    au = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    av = /[A-Z]/g;
  function aw(c, d, b) {
    var e, a;
    if (void 0 === b && 1 === c.nodeType) {
      if (
        ((e = "data-" + d.replace(av, "-$&").toLowerCase()),
        "string" == typeof (b = c.getAttribute(e)))
      ) {
        try {
          b =
            "true" === (a = b) ||
            ("false" !== a &&
              ("null" === a
                ? null
                : a === +a + ""
                ? +a
                : au.test(a)
                ? JSON.parse(a)
                : a));
        } catch (f) {}
        at.set(c, d, b);
      } else b = void 0;
    }
    return b;
  }
  a.extend({
    hasData: function (a) {
      return at.hasData(a) || as.hasData(a);
    },
    data: function (a, b, c) {
      return at.access(a, b, c);
    },
    removeData: function (a, b) {
      at.remove(a, b);
    },
    _data: function (a, b, c) {
      return as.access(a, b, c);
    },
    _removeData: function (a, b) {
      as.remove(a, b);
    },
  }),
    a.fn.extend({
      data: function (f, g) {
        var b,
          c,
          d,
          a = this[0],
          e = a && a.attributes;
        if (void 0 === f) {
          if (
            this.length &&
            ((d = at.get(a)), 1 === a.nodeType && !as.get(a, "hasDataAttrs"))
          ) {
            for (b = e.length; b--; )
              e[b] &&
                0 === (c = e[b].name).indexOf("data-") &&
                aw(a, (c = H(c.slice(5))), d[c]);
            as.set(a, "hasDataAttrs", !0);
          }
          return d;
        }
        return "object" == typeof f
          ? this.each(function () {
              at.set(this, f);
            })
          : $(
              this,
              function (c) {
                var b;
                if (a && void 0 === c)
                  return void 0 !== (b = at.get(a, f))
                    ? b
                    : void 0 !== (b = aw(a, f))
                    ? b
                    : void 0;
                this.each(function () {
                  at.set(this, f, c);
                });
              },
              null,
              g,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          at.remove(this, a);
        });
      },
    }),
    a.extend({
      queue: function (e, c, d) {
        var b;
        if (e)
          return (
            (c = (c || "fx") + "queue"),
            (b = as.get(e, c)),
            d &&
              (!b || Array.isArray(d)
                ? (b = as.access(e, c, a.makeArray(d)))
                : b.push(d)),
            b || []
          );
      },
      dequeue: function (f, b) {
        b = b || "fx";
        var c = a.queue(f, b),
          g = c.length,
          d = c.shift(),
          e = a._queueHooks(f, b);
        "inprogress" === d && ((d = c.shift()), g--),
          d &&
            ("fx" === b && c.unshift("inprogress"),
            delete e.stop,
            d.call(
              f,
              function () {
                a.dequeue(f, b);
              },
              e
            )),
          !g && e && e.empty.fire();
      },
      _queueHooks: function (b, d) {
        var c = d + "queueHooks";
        return (
          as.get(b, c) ||
          as.access(b, c, {
            empty: a.Callbacks("once memory").add(function () {
              as.remove(b, [d + "queue", c]);
            }),
          })
        );
      },
    }),
    a.fn.extend({
      queue: function (b, c) {
        var d = 2;
        return (
          "string" != typeof b && ((c = b), (b = "fx"), d--),
          arguments.length < d
            ? a.queue(this[0], b)
            : void 0 === c
            ? this
            : this.each(function () {
                var d = a.queue(this, b, c);
                a._queueHooks(this, b),
                  "fx" === b && "inprogress" !== d[0] && a.dequeue(this, b);
              })
        );
      },
      dequeue: function (b) {
        return this.each(function () {
          a.dequeue(this, b);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (b, d) {
        var c,
          g = 1,
          h = a.Deferred(),
          i = this,
          e = this.length,
          f = function () {
            --g || h.resolveWith(i, [i]);
          };
        for (
          "string" != typeof b && ((d = b), (b = void 0)), b = b || "fx";
          e--;

        )
          (c = as.get(i[e], b + "queueHooks")) &&
            c.empty &&
            (g++, c.empty.add(f));
        return f(), h.promise(d);
      },
    });
  var t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ax = new RegExp("^(?:([+-])=|)(" + t + ")([a-z%]*)$", "i"),
    I = ["Top", "Right", "Bottom", "Left"],
    J = b.documentElement,
    K = function (b) {
      return a.contains(b.ownerDocument, b);
    },
    ay = { composed: !0 };
  J.getRootNode &&
    (K = function (b) {
      return (
        a.contains(b.ownerDocument, b) || b.getRootNode(ay) === b.ownerDocument
      );
    });
  var az = function (b, c) {
    return (
      "none" === (b = c || b).style.display ||
      ("" === b.style.display && K(b) && "none" === a.css(b, "display"))
    );
  };
  function aA(h, e, c, f) {
    var i,
      j,
      k = 20,
      l = f
        ? function () {
            return f.cur();
          }
        : function () {
            return a.css(h, e, "");
          },
      g = l(),
      d = (c && c[3]) || (a.cssNumber[e] ? "" : "px"),
      b =
        h.nodeType &&
        (a.cssNumber[e] || ("px" !== d && +g)) &&
        ax.exec(a.css(h, e));
    if (b && b[3] !== d) {
      for (g /= 2, d = d || b[3], b = +g || 1; k--; )
        a.style(h, e, b + d),
          (1 - j) * (1 - (j = l() / g || 0.5)) <= 0 && (k = 0),
          (b /= j);
      (b *= 2), a.style(h, e, b + d), (c = c || []);
    }
    return (
      c &&
        ((b = +b || +g || 0),
        (i = c[1] ? b + (c[1] + 1) * c[2] : +c[2]),
        f && ((f.unit = d), (f.start = b), (f.end = i))),
      i
    );
  }
  var aB = {};
  function aC(g, m) {
    for (var h, c, k, f, i, j, d, e = [], b = 0, l = g.length; b < l; b++)
      (c = g[b]).style &&
        ((h = c.style.display),
        m
          ? ("none" === h &&
              ((e[b] = as.get(c, "display") || null),
              e[b] || (c.style.display = "")),
            "" === c.style.display &&
              az(c) &&
              (e[b] =
                ((d = i = f = void 0),
                (i = (k = c).ownerDocument),
                (j = k.nodeName),
                (d = aB[j]) ||
                  ((f = i.body.appendChild(i.createElement(j))),
                  (d = a.css(f, "display")),
                  f.parentNode.removeChild(f),
                  "none" === d && (d = "block"),
                  (aB[j] = d)))))
          : "none" !== h && ((e[b] = "none"), as.set(c, "display", h)));
    for (b = 0; b < l; b++) null != e[b] && (g[b].style.display = e[b]);
    return g;
  }
  a.fn.extend({
    show: function () {
      return aC(this, !0);
    },
    hide: function () {
      return aC(this);
    },
    toggle: function (b) {
      return "boolean" == typeof b
        ? b
          ? this.show()
          : this.hide()
        : this.each(function () {
            az(this) ? a(this).show() : a(this).hide();
          });
    },
  });
  var h,
    l,
    aD = /^(?:checkbox|radio)$/i,
    aE = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    aF = /^$|^module$|\/(?:java|ecma)script/i;
  (h = b.createDocumentFragment().appendChild(b.createElement("div"))),
    (l = b.createElement("input")).setAttribute("type", "radio"),
    l.setAttribute("checked", "checked"),
    l.setAttribute("name", "t"),
    h.appendChild(l),
    (c.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (h.innerHTML = "<textarea>x</textarea>"),
    (c.noCloneChecked = !!h.cloneNode(!0).lastChild.defaultValue),
    (h.innerHTML = "<option></option>"),
    (c.option = !!h.lastChild);
  var e = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function aG(b, c) {
    var d;
    return (
      (d =
        void 0 !== b.getElementsByTagName
          ? b.getElementsByTagName(c || "*")
          : void 0 !== b.querySelectorAll
          ? b.querySelectorAll(c || "*")
          : []),
      void 0 === c || (c && E(b, c)) ? a.merge([b], d) : d
    );
  }
  function aH(b, c) {
    for (var a = 0, d = b.length; a < d; a++)
      as.set(b[a], "globalEval", !c || as.get(c[a], "globalEval"));
  }
  (e.tbody = e.tfoot = e.colgroup = e.caption = e.thead),
    (e.th = e.td),
    c.option ||
      (e.optgroup = e.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var aI = /<|&#?\w+;/;
  function aJ(k, j, l, m, n) {
    for (
      var b,
        c,
        g,
        o,
        h,
        d = j.createDocumentFragment(),
        i = [],
        f = 0,
        p = k.length;
      f < p;
      f++
    )
      if ((b = k[f]) || 0 === b) {
        if ("object" === D(b)) a.merge(i, b.nodeType ? [b] : b);
        else if (aI.test(b)) {
          for (
            c = c || d.appendChild(j.createElement("div")),
              g = e[(aE.exec(b) || ["", ""])[1].toLowerCase()] || e._default,
              c.innerHTML = g[1] + a.htmlPrefilter(b) + g[2],
              h = g[0];
            h--;

          )
            c = c.lastChild;
          a.merge(i, c.childNodes), ((c = d.firstChild).textContent = "");
        } else i.push(j.createTextNode(b));
      }
    for (d.textContent = "", f = 0; (b = i[f++]); )
      if (m && -1 < a.inArray(b, m)) n && n.push(b);
      else if (
        ((o = K(b)), (c = aG(d.appendChild(b), "script")), o && aH(c), l)
      )
        for (h = 0; (b = c[h++]); ) aF.test(b.type || "") && l.push(b);
    return d;
  }
  var aK = /^key/,
    aL = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    aM = /^([^.]*)(?:\.(.+)|)/;
  function aN() {
    return !0;
  }
  function n() {
    return !1;
  }
  function aO(a, c) {
    return (
      (a ===
        (function () {
          try {
            return b.activeElement;
          } catch (a) {}
        })()) ==
      ("focus" === c)
    );
  }
  function aP(e, f, c, d, b, i) {
    var g, h;
    if ("object" == typeof f) {
      for (h in ("string" != typeof c && ((d = d || c), (c = void 0)), f))
        aP(e, h, c, d, f[h], i);
      return e;
    }
    if (
      (null == d && null == b
        ? ((b = c), (d = c = void 0))
        : null == b &&
          ("string" == typeof c
            ? ((b = d), (d = void 0))
            : ((b = d), (d = c), (c = void 0))),
      !1 === b)
    )
      b = n;
    else if (!b) return e;
    return (
      1 === i &&
        ((g = b),
        ((b = function (b) {
          return a().off(b), g.apply(this, arguments);
        }).guid = g.guid || (g.guid = a.guid++))),
      e.each(function () {
        a.event.add(this, f, b, d, c);
      })
    );
  }
  function aQ(b, c, d) {
    d
      ? (as.set(b, c, !1),
        a.event.add(b, c, {
          namespace: !1,
          handler: function (e) {
            var g,
              f,
              b = as.get(this, c);
            if (1 & e.isTrigger && this[c]) {
              if (b.length)
                (a.event.special[c] || {}).delegateType && e.stopPropagation();
              else if (
                ((b = T.call(arguments)),
                as.set(this, c, b),
                (g = d(this, c)),
                this[c](),
                b !== (f = as.get(this, c)) || g
                  ? as.set(this, c, !1)
                  : (f = {}),
                b !== f)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), f.value
                );
            } else
              b.length &&
                (as.set(this, c, {
                  value: a.event.trigger(
                    a.extend(b[0], a.Event.prototype),
                    b.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === as.get(b, c) && a.event.add(b, c, aN);
  }
  (a.event = {
    global: {},
    add: function (f, l, c, p, d) {
      var m,
        i,
        q,
        j,
        n,
        g,
        e,
        h,
        b,
        o,
        r,
        k = as.get(f);
      if (ar(f))
        for (
          c.handler && ((c = (m = c).handler), (d = m.selector)),
            d && a.find.matchesSelector(J, d),
            c.guid || (c.guid = a.guid++),
            (j = k.events) || (j = k.events = Object.create(null)),
            (i = k.handle) ||
              (i = k.handle =
                function (b) {
                  return a.event.triggered !== b.type
                    ? a.event.dispatch.apply(f, arguments)
                    : void 0;
                }),
            n = (l = (l || "").match(ak) || [""]).length;
          n--;

        )
          (b = r = (q = aM.exec(l[n]) || [])[1]),
            (o = (q[2] || "").split(".").sort()),
            b &&
              ((e = a.event.special[b] || {}),
              (b = (d ? e.delegateType : e.bindType) || b),
              (e = a.event.special[b] || {}),
              (g = a.extend(
                {
                  type: b,
                  origType: r,
                  data: p,
                  handler: c,
                  guid: c.guid,
                  selector: d,
                  needsContext: d && a.expr.match.needsContext.test(d),
                  namespace: o.join("."),
                },
                m
              )),
              (h = j[b]) ||
                (((h = j[b] = []).delegateCount = 0),
                (e.setup && !1 !== e.setup.call(f, p, o, i)) ||
                  (f.addEventListener && f.addEventListener(b, i))),
              e.add &&
                (e.add.call(f, g), g.handler.guid || (g.handler.guid = c.guid)),
              d ? h.splice(h.delegateCount++, 0, g) : h.push(g),
              (a.event.global[b] = !0));
    },
    remove: function (d, j, n, h, r) {
      var k,
        p,
        f,
        i,
        l,
        c,
        e,
        g,
        b,
        o,
        q,
        m = as.hasData(d) && as.get(d);
      if (m && (i = m.events)) {
        for (l = (j = (j || "").match(ak) || [""]).length; l--; )
          if (
            ((b = q = (f = aM.exec(j[l]) || [])[1]),
            (o = (f[2] || "").split(".").sort()),
            b)
          ) {
            for (
              e = a.event.special[b] || {},
                g = i[(b = (h ? e.delegateType : e.bindType) || b)] || [],
                f =
                  f[2] &&
                  new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                p = k = g.length;
              k--;

            )
              (c = g[k]),
                (!r && q !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (f && !f.test(c.namespace)) ||
                  (h && h !== c.selector && ("**" !== h || !c.selector)) ||
                  (g.splice(k, 1),
                  c.selector && g.delegateCount--,
                  e.remove && e.remove.call(d, c));
            p &&
              !g.length &&
              ((e.teardown && !1 !== e.teardown.call(d, o, m.handle)) ||
                a.removeEvent(d, b, m.handle),
              delete i[b]);
          } else for (b in i) a.event.remove(d, b + j[l], n, h, !0);
        a.isEmptyObject(i) && as.remove(d, "handle events");
      }
    },
    dispatch: function (k) {
      var c,
        h,
        i,
        e,
        d,
        j,
        g = new Array(arguments.length),
        b = a.event.fix(k),
        l = (as.get(this, "events") || Object.create(null))[b.type] || [],
        f = a.event.special[b.type] || {};
      for (g[0] = b, c = 1; c < arguments.length; c++) g[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !f.preDispatch || !1 !== f.preDispatch.call(this, b))
      ) {
        for (
          j = a.event.handlers.call(this, b, l), c = 0;
          (e = j[c++]) && !b.isPropagationStopped();

        )
          for (
            b.currentTarget = e.elem, h = 0;
            (d = e.handlers[h++]) && !b.isImmediatePropagationStopped();

          )
            (b.rnamespace &&
              !1 !== d.namespace &&
              !b.rnamespace.test(d.namespace)) ||
              ((b.handleObj = d),
              (b.data = d.data),
              void 0 !==
                (i = (
                  (a.event.special[d.origType] || {}).handle || d.handler
                ).apply(e.elem, g)) &&
                !1 === (b.result = i) &&
                (b.preventDefault(), b.stopPropagation()));
        return f.postDispatch && f.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (d, e) {
      var f,
        j,
        c,
        g,
        h,
        k = [],
        i = e.delegateCount,
        b = d.target;
      if (i && b.nodeType && !("click" === d.type && 1 <= d.button)) {
        for (; b !== this; b = b.parentNode || this)
          if (1 === b.nodeType && ("click" !== d.type || !0 !== b.disabled)) {
            for (g = [], h = {}, f = 0; f < i; f++)
              void 0 === h[(c = (j = e[f]).selector + " ")] &&
                (h[c] = j.needsContext
                  ? -1 < a(c, this).index(b)
                  : a.find(c, this, null, [b]).length),
                h[c] && g.push(j);
            g.length && k.push({ elem: b, handlers: g });
          }
      }
      return (
        (b = this), i < e.length && k.push({ elem: b, handlers: e.slice(i) }), k
      );
    },
    addProp: function (b, c) {
      Object.defineProperty(a.Event.prototype, b, {
        enumerable: !0,
        configurable: !0,
        get: B(c)
          ? function () {
              if (this.originalEvent) return c(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[b];
            },
        set: function (a) {
          Object.defineProperty(this, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a,
          });
        },
      });
    },
    fix: function (b) {
      return b[a.expando] ? b : new a.Event(b);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (b) {
          var a = this || b;
          return (
            aD.test(a.type) && a.click && E(a, "input") && aQ(a, "click", aN),
            !1
          );
        },
        trigger: function (b) {
          var a = this || b;
          return (
            aD.test(a.type) && a.click && E(a, "input") && aQ(a, "click"), !0
          );
        },
        _default: function (b) {
          var a = b.target;
          return (
            (aD.test(a.type) &&
              a.click &&
              E(a, "input") &&
              as.get(a, "click")) ||
            E(a, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (a.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (a.Event = function (b, c) {
      if (!(this instanceof a.Event)) return new a.Event(b, c);
      b && b.type
        ? ((this.originalEvent = b),
          (this.type = b.type),
          (this.isDefaultPrevented =
            b.defaultPrevented ||
            (void 0 === b.defaultPrevented && !1 === b.returnValue)
              ? aN
              : n),
          (this.target =
            b.target && 3 === b.target.nodeType
              ? b.target.parentNode
              : b.target),
          (this.currentTarget = b.currentTarget),
          (this.relatedTarget = b.relatedTarget))
        : (this.type = b),
        c && a.extend(this, c),
        (this.timeStamp = (b && b.timeStamp) || Date.now()),
        (this[a.expando] = !0);
    }),
    (a.Event.prototype = {
      constructor: a.Event,
      isDefaultPrevented: n,
      isPropagationStopped: n,
      isImmediatePropagationStopped: n,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = aN),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = aN),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = aN),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    a.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && aK.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && aL.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      a.event.addProp
    ),
    a.each({ focus: "focusin", blur: "focusout" }, function (b, c) {
      a.event.special[b] = {
        setup: function () {
          return aQ(this, b, aO), !1;
        },
        trigger: function () {
          return aQ(this, b), !0;
        },
        delegateType: c,
      };
    }),
    a.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (c, b) {
        a.event.special[c] = {
          delegateType: b,
          bindType: b,
          handle: function (c) {
            var e,
              d = c.relatedTarget,
              f = c.handleObj;
            return (
              (d && (d === this || a.contains(this, d))) ||
                ((c.type = f.origType),
                (e = f.handler.apply(this, arguments)),
                (c.type = b)),
              e
            );
          },
        };
      }
    ),
    a.fn.extend({
      on: function (a, b, c, d) {
        return aP(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return aP(this, a, b, c, d, 1);
      },
      off: function (b, d, e) {
        var c, f;
        if (b && b.preventDefault && b.handleObj)
          return (
            (c = b.handleObj),
            a(b.delegateTarget).off(
              c.namespace ? c.origType + "." + c.namespace : c.origType,
              c.selector,
              c.handler
            ),
            this
          );
        if ("object" == typeof b) {
          for (f in b) this.off(f, d, b[f]);
          return this;
        }
        return (
          (!1 !== d && "function" != typeof d) || ((e = d), (d = void 0)),
          !1 === e && (e = n),
          this.each(function () {
            a.event.remove(this, b, e, d);
          })
        );
      },
    });
  var aR = /<script|<style|<link/i,
    aS = /checked\s*(?:[^=]|=\s*.checked.)/i,
    aT = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function aU(b, c) {
    return (
      (E(b, "table") &&
        E(11 !== c.nodeType ? c : c.firstChild, "tr") &&
        a(b).children("tbody")[0]) ||
      b
    );
  }
  function aV(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function aW(a) {
    return (
      "true/" === (a.type || "").slice(0, 5)
        ? (a.type = a.type.slice(5))
        : a.removeAttribute("type"),
      a
    );
  }
  function aX(b, c) {
    var d, g, e, h, i, f;
    if (1 === c.nodeType) {
      if (as.hasData(b) && (f = as.get(b).events))
        for (e in (as.remove(c, "handle events"), f))
          for (d = 0, g = f[e].length; d < g; d++) a.event.add(c, e, f[e][d]);
      at.hasData(b) &&
        ((h = at.access(b)), (i = a.extend({}, h)), at.set(c, i));
    }
  }
  function aY(e, h, o, n) {
    h = U(h);
    var g,
      l,
      f,
      i,
      b,
      j,
      d = 0,
      k = e.length,
      p = k - 1,
      m = h[0],
      q = B(m);
    if (q || (1 < k && "string" == typeof m && !c.checkClone && aS.test(m)))
      return e.each(function (a) {
        var b = e.eq(a);
        q && (h[0] = m.call(this, a, b.html())), aY(b, h, o, n);
      });
    if (
      k &&
      ((l = (g = aJ(h, e[0].ownerDocument, !1, e, n)).firstChild),
      1 === g.childNodes.length && (g = l),
      l || n)
    ) {
      for (i = (f = a.map(aG(g, "script"), aV)).length; d < k; d++)
        (b = g),
          d !== p &&
            ((b = a.clone(b, !0, !0)), i && a.merge(f, aG(b, "script"))),
          o.call(e[d], b, d);
      if (i)
        for (j = f[f.length - 1].ownerDocument, a.map(f, aW), d = 0; d < i; d++)
          (b = f[d]),
            aF.test(b.type || "") &&
              !as.access(b, "globalEval") &&
              a.contains(j, b) &&
              (b.src && "module" !== (b.type || "").toLowerCase()
                ? a._evalUrl &&
                  !b.noModule &&
                  a._evalUrl(
                    b.src,
                    { nonce: b.nonce || b.getAttribute("nonce") },
                    j
                  )
                : Z(b.textContent.replace(aT, ""), b, j));
    }
    return e;
  }
  function aZ(c, d, e) {
    for (var b, g = d ? a.filter(d, c) : c, f = 0; null != (b = g[f]); f++)
      e || 1 !== b.nodeType || a.cleanData(aG(b)),
        b.parentNode &&
          (e && K(b) && aH(aG(b, "script")), b.parentNode.removeChild(b));
    return c;
  }
  a.extend({
    htmlPrefilter: function (a) {
      return a;
    },
    clone: function (d, l, m) {
      var b,
        h,
        f,
        e,
        i,
        j,
        k,
        g = d.cloneNode(!0),
        n = K(d);
      if (
        !(
          c.noCloneChecked ||
          (1 !== d.nodeType && 11 !== d.nodeType) ||
          a.isXMLDoc(d)
        )
      )
        for (e = aG(g), b = 0, h = (f = aG(d)).length; b < h; b++)
          (i = f[b]),
            (j = e[b]),
            "input" === (k = j.nodeName.toLowerCase()) && aD.test(i.type)
              ? (j.checked = i.checked)
              : ("input" !== k && "textarea" !== k) ||
                (j.defaultValue = i.defaultValue);
      if (l) {
        if (m)
          for (f = f || aG(d), e = e || aG(g), b = 0, h = f.length; b < h; b++)
            aX(f[b], e[b]);
        else aX(d, g);
      }
      return (
        0 < (e = aG(g, "script")).length && aH(e, !n && aG(d, "script")), g
      );
    },
    cleanData: function (f) {
      for (var c, b, d, g = a.event.special, e = 0; void 0 !== (b = f[e]); e++)
        if (ar(b)) {
          if ((c = b[as.expando])) {
            if (c.events)
              for (d in c.events)
                g[d] ? a.event.remove(b, d) : a.removeEvent(b, d, c.handle);
            b[as.expando] = void 0;
          }
          b[at.expando] && (b[at.expando] = void 0);
        }
    },
  }),
    a.fn.extend({
      detach: function (a) {
        return aZ(this, a, !0);
      },
      remove: function (a) {
        return aZ(this, a);
      },
      text: function (b) {
        return $(
          this,
          function (b) {
            return void 0 === b
              ? a.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = b);
                });
          },
          null,
          b,
          arguments.length
        );
      },
      append: function () {
        return aY(this, arguments, function (a) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            aU(this, a).appendChild(a);
        });
      },
      prepend: function () {
        return aY(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = aU(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return aY(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return aY(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var b, c = 0; null != (b = this[c]); c++)
          1 === b.nodeType && (a.cleanData(aG(b, !1)), (b.textContent = ""));
        return this;
      },
      clone: function (b, c) {
        return (
          (b = null != b && b),
          (c = null == c ? b : c),
          this.map(function () {
            return a.clone(this, b, c);
          })
        );
      },
      html: function (b) {
        return $(
          this,
          function (b) {
            var c = this[0] || {},
              d = 0,
              f = this.length;
            if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
            if (
              "string" == typeof b &&
              !aR.test(b) &&
              !e[(aE.exec(b) || ["", ""])[1].toLowerCase()]
            ) {
              b = a.htmlPrefilter(b);
              try {
                for (; d < f; d++)
                  1 === (c = this[d] || {}).nodeType &&
                    (a.cleanData(aG(c, !1)), (c.innerHTML = b));
                c = 0;
              } catch (g) {}
            }
            c && this.empty().append(b);
          },
          null,
          b,
          arguments.length
        );
      },
      replaceWith: function () {
        var b = [];
        return aY(
          this,
          arguments,
          function (d) {
            var c = this.parentNode;
            0 > a.inArray(this, b) &&
              (a.cleanData(aG(this)), c && c.replaceChild(d, this));
          },
          b
        );
      },
    }),
    a.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (b, c) {
        a.fn[b] = function (h) {
          for (var d, e = [], f = a(h), g = f.length - 1, b = 0; b <= g; b++)
            (d = b === g ? this : this.clone(!0)),
              a(f[b])[c](d),
              y.apply(e, d.get());
          return this.pushStack(e);
        };
      }
    );
  var a$ = new RegExp("^(" + t + ")(?!px)[a-z%]+$", "i"),
    a_ = function (b) {
      var a = b.ownerDocument.defaultView;
      return (a && a.opener) || (a = d), a.getComputedStyle(b);
    },
    a0 = function (b, c, f) {
      var d,
        a,
        e = {};
      for (a in c) (e[a] = b.style[a]), (b.style[a] = c[a]);
      for (a in ((d = f.call(b)), c)) b.style[a] = e[a];
      return d;
    },
    a1 = new RegExp(I.join("|"), "i");
  function a2(f, g, e) {
    var h,
      i,
      j,
      d,
      b = f.style;
    return (
      (e = e || a_(f)) &&
        ("" !== (d = e.getPropertyValue(g) || e[g]) ||
          K(f) ||
          (d = a.style(f, g)),
        !c.pixelBoxStyles() &&
          a$.test(d) &&
          a1.test(g) &&
          ((h = b.width),
          (i = b.minWidth),
          (j = b.maxWidth),
          (b.minWidth = b.maxWidth = b.width = d),
          (d = e.width),
          (b.width = h),
          (b.minWidth = i),
          (b.maxWidth = j))),
      void 0 !== d ? d + "" : d
    );
  }
  function L(a, b) {
    return {
      get: function () {
        if (!a()) return (this.get = b).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function f() {
      if (e) {
        (n.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (e.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(n).appendChild(e);
        var a = d.getComputedStyle(e);
        (h = "1%" !== a.top),
          (m = 12 === g(a.marginLeft)),
          (e.style.right = "60%"),
          (k = 36 === g(a.right)),
          (i = 36 === g(a.width)),
          (e.style.position = "absolute"),
          (j = 12 === g(e.offsetWidth / 3)),
          J.removeChild(n),
          (e = null);
      }
    }
    function g(a) {
      return Math.round(parseFloat(a));
    }
    var h,
      i,
      j,
      k,
      l,
      m,
      n = b.createElement("div"),
      e = b.createElement("div");
    e.style &&
      ((e.style.backgroundClip = "content-box"),
      (e.cloneNode(!0).style.backgroundClip = ""),
      (c.clearCloneStyle = "content-box" === e.style.backgroundClip),
      a.extend(c, {
        boxSizingReliable: function () {
          return f(), i;
        },
        pixelBoxStyles: function () {
          return f(), k;
        },
        pixelPosition: function () {
          return f(), h;
        },
        reliableMarginLeft: function () {
          return f(), m;
        },
        scrollboxSize: function () {
          return f(), j;
        },
        reliableTrDimensions: function () {
          var a, c, e, f;
          return (
            null == l &&
              ((a = b.createElement("table")),
              (c = b.createElement("tr")),
              (e = b.createElement("div")),
              (a.style.cssText = "position:absolute;left:-11111px"),
              (c.style.height = "1px"),
              (e.style.height = "9px"),
              J.appendChild(a).appendChild(c).appendChild(e),
              (f = d.getComputedStyle(c)),
              (l = 3 < parseInt(f.height)),
              J.removeChild(a)),
            l
          );
        },
      }));
  })();
  var a3 = ["Webkit", "Moz", "ms"],
    a4 = b.createElement("div").style,
    a5 = {};
  function a6(b) {
    return (
      a.cssProps[b] ||
      a5[b] ||
      (b in a4
        ? b
        : (a5[b] =
            (function (a) {
              for (
                var c = a[0].toUpperCase() + a.slice(1), b = a3.length;
                b--;

              )
                if ((a = a3[b] + c) in a4) return a;
            })(b) || b))
    );
  }
  var a7 = /^(none|table(?!-c[ea]).+)/,
    a8 = /^--/,
    a9 = { position: "absolute", visibility: "hidden", display: "block" },
    ba = { letterSpacing: "0", fontWeight: "400" };
  function bb(d, b, c) {
    var a = ax.exec(b);
    return a ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b;
  }
  function bc(d, g, e, h, f, i) {
    var b = "width" === g ? 1 : 0,
      j = 0,
      c = 0;
    if (e === (h ? "border" : "content")) return 0;
    for (; b < 4; b += 2)
      "margin" === e && (c += a.css(d, e + I[b], !0, f)),
        h
          ? ("content" === e && (c -= a.css(d, "padding" + I[b], !0, f)),
            "margin" !== e && (c -= a.css(d, "border" + I[b] + "Width", !0, f)))
          : ((c += a.css(d, "padding" + I[b], !0, f)),
            "padding" !== e
              ? (c += a.css(d, "border" + I[b] + "Width", !0, f))
              : (j += a.css(d, "border" + I[b] + "Width", !0, f)));
    return (
      !h &&
        0 <= i &&
        (c +=
          Math.max(
            0,
            Math.ceil(
              d["offset" + g[0].toUpperCase() + g.slice(1)] - i - c - j - 0.5
            )
          ) || 0),
      c
    );
  }
  function bd(b, f, h) {
    var e = a_(b),
      g =
        (!c.boxSizingReliable() || h) &&
        "border-box" === a.css(b, "boxSizing", !1, e),
      i = g,
      d = a2(b, f, e),
      j = "offset" + f[0].toUpperCase() + f.slice(1);
    if (a$.test(d)) {
      if (!h) return d;
      d = "auto";
    }
    return (
      ((!c.boxSizingReliable() && g) ||
        (!c.reliableTrDimensions() && E(b, "tr")) ||
        "auto" === d ||
        (!parseFloat(d) && "inline" === a.css(b, "display", !1, e))) &&
        b.getClientRects().length &&
        ((g = "border-box" === a.css(b, "boxSizing", !1, e)),
        (i = j in b) && (d = b[j])),
      (d = parseFloat(d) || 0) +
        bc(b, f, h || (g ? "border" : "content"), i, e, d) +
        "px"
    );
  }
  function i(a, b, c, d, e) {
    return new i.prototype.init(a, b, c, d, e);
  }
  a.extend({
    cssHooks: {
      opacity: {
        get: function (b, c) {
          if (c) {
            var a = a2(b, "opacity");
            return "" === a ? "1" : a;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, d, b, l) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var f,
          i,
          g,
          j = H(d),
          k = a8.test(d),
          h = e.style;
        if (
          (k || (d = a6(j)), (g = a.cssHooks[d] || a.cssHooks[j]), void 0 === b)
        )
          return g && "get" in g && void 0 !== (f = g.get(e, !1, l)) ? f : h[d];
        "string" == (i = typeof b) &&
          (f = ax.exec(b)) &&
          f[1] &&
          ((b = aA(e, d, f)), (i = "number")),
          null != b &&
            b == b &&
            ("number" !== i ||
              k ||
              (b += (f && f[3]) || (a.cssNumber[j] ? "" : "px")),
            c.clearCloneStyle ||
              "" !== b ||
              0 !== d.indexOf("background") ||
              (h[d] = "inherit"),
            (g && "set" in g && void 0 === (b = g.set(e, b, l))) ||
              (k ? h.setProperty(d, b) : (h[d] = b)));
      }
    },
    css: function (g, c, d, i) {
      var b,
        e,
        f,
        h = H(c);
      return (
        a8.test(c) || (c = a6(h)),
        (f = a.cssHooks[c] || a.cssHooks[h]) &&
          "get" in f &&
          (b = f.get(g, !0, d)),
        void 0 === b && (b = a2(g, c, i)),
        "normal" === b && c in ba && (b = ba[c]),
        "" === d || d
          ? ((e = parseFloat(b)), !0 === d || isFinite(e) ? e || 0 : b)
          : b
      );
    },
  }),
    a.each(["height", "width"], function (d, b) {
      a.cssHooks[b] = {
        get: function (c, d, e) {
          if (d)
            return !a7.test(a.css(c, "display")) ||
              (c.getClientRects().length && c.getBoundingClientRect().width)
              ? bd(c, b, e)
              : a0(c, a9, function () {
                  return bd(c, b, e);
                });
        },
        set: function (d, f, g) {
          var i,
            e = a_(d),
            j = !c.scrollboxSize() && "absolute" === e.position,
            k = (j || g) && "border-box" === a.css(d, "boxSizing", !1, e),
            h = g ? bc(d, b, g, k, e) : 0;
          return (
            k &&
              j &&
              (h -= Math.ceil(
                d["offset" + b[0].toUpperCase() + b.slice(1)] -
                  parseFloat(e[b]) -
                  bc(d, b, "border", !1, e) -
                  0.5
              )),
            h &&
              (i = ax.exec(f)) &&
              "px" !== (i[3] || "px") &&
              ((d.style[b] = f), (f = a.css(d, b))),
            bb(0, f, h)
          );
        },
      };
    }),
    (a.cssHooks.marginLeft = L(c.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(a2(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              a0(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    a.each({ margin: "", padding: "", border: "Width" }, function (b, c) {
      (a.cssHooks[b + c] = {
        expand: function (d) {
          for (
            var a = 0, f = {}, e = "string" == typeof d ? d.split(" ") : [d];
            a < 4;
            a++
          )
            f[b + I[a] + c] = e[a] || e[a - 2] || e[0];
          return f;
        },
      }),
        "margin" !== b && (a.cssHooks[b + c].set = bb);
    }),
    a.fn.extend({
      css: function (b, c) {
        return $(
          this,
          function (c, b, e) {
            var f,
              g,
              h = {},
              d = 0;
            if (Array.isArray(b)) {
              for (f = a_(c), g = b.length; d < g; d++)
                h[b[d]] = a.css(c, b[d], !1, f);
              return h;
            }
            return void 0 !== e ? a.style(c, b, e) : a.css(c, b);
          },
          b,
          c,
          1 < arguments.length
        );
      },
    }),
    (((a.Tween = i).prototype = {
      constructor: i,
      init: function (c, d, b, e, f, g) {
        (this.elem = c),
          (this.prop = b),
          (this.easing = f || a.easing._default),
          (this.options = d),
          (this.start = this.now = this.cur()),
          (this.end = e),
          (this.unit = g || (a.cssNumber[b] ? "" : "px"));
      },
      cur: function () {
        var a = i.propHooks[this.prop];
        return a && a.get ? a.get(this) : i.propHooks._default.get(this);
      },
      run: function (b) {
        var c,
          d = i.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = c =
                a.easing[this.easing](
                  b,
                  this.options.duration * b,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = c = b),
          (this.now = (this.end - this.start) * c + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          d && d.set ? d.set(this) : i.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = i.prototype),
    ((i.propHooks = {
      _default: {
        get: function (b) {
          var c;
          return 1 !== b.elem.nodeType ||
            (null != b.elem[b.prop] && null == b.elem.style[b.prop])
            ? b.elem[b.prop]
            : (c = a.css(b.elem, b.prop, "")) && "auto" !== c
            ? c
            : 0;
        },
        set: function (b) {
          a.fx.step[b.prop]
            ? a.fx.step[b.prop](b)
            : 1 === b.elem.nodeType &&
              (a.cssHooks[b.prop] || null != b.elem.style[a6(b.prop)])
            ? a.style(b.elem, b.prop, b.now + b.unit)
            : (b.elem[b.prop] = b.now);
        },
      },
    }).scrollTop = i.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (a.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (a.fx = i.prototype.init),
    (a.fx.step = {});
  var be,
    bf,
    j,
    u,
    bg = /^(?:toggle|show|hide)$/,
    bh = /queueHooks$/;
  function bi() {
    bf &&
      (!1 === b.hidden && d.requestAnimationFrame
        ? d.requestAnimationFrame(bi)
        : d.setTimeout(bi, a.fx.interval),
      a.fx.tick());
  }
  function bj() {
    return (
      d.setTimeout(function () {
        be = void 0;
      }),
      (be = Date.now())
    );
  }
  function o(c, b) {
    var e,
      d = 0,
      a = { height: c };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      a["margin" + (e = I[d])] = a["padding" + e] = c;
    return b && (a.opacity = a.width = c), a;
  }
  function bk(e, b, f) {
    for (
      var c,
        d = (M.tweeners[b] || []).concat(M.tweeners["*"]),
        a = 0,
        g = d.length;
      a < g;
      a++
    )
      if ((c = d[a].call(f, b, e))) return c;
  }
  function M(d, h, e) {
    var c,
      l,
      f = 0,
      i = M.prefilters.length,
      j = a.Deferred().always(function () {
        delete k.elem;
      }),
      k = function () {
        if (l) return !1;
        for (
          var g = be || bj(),
            a = Math.max(0, b.startTime + b.duration - g),
            c = 1 - (a / b.duration || 0),
            e = 0,
            f = b.tweens.length;
          e < f;
          e++
        )
          b.tweens[e].run(c);
        return (
          j.notifyWith(d, [b, c, a]),
          c < 1 && f
            ? a
            : (f || j.notifyWith(d, [b, 1, 0]), j.resolveWith(d, [b]), !1)
        );
      },
      b = j.promise({
        elem: d,
        props: a.extend({}, h),
        opts: a.extend(!0, { specialEasing: {}, easing: a.easing._default }, e),
        originalProperties: h,
        originalOptions: e,
        startTime: be || bj(),
        duration: e.duration,
        tweens: [],
        createTween: function (c, f) {
          var e = a.Tween(
            d,
            b.opts,
            c,
            f,
            b.opts.specialEasing[c] || b.opts.easing
          );
          return b.tweens.push(e), e;
        },
        stop: function (a) {
          var c = 0,
            e = a ? b.tweens.length : 0;
          if (l) return this;
          for (l = !0; c < e; c++) b.tweens[c].run(1);
          return (
            a
              ? (j.notifyWith(d, [b, 1, 0]), j.resolveWith(d, [b, a]))
              : j.rejectWith(d, [b, a]),
            this
          );
        },
      }),
      g = b.props;
    for (
      (function (d, g) {
        var b, e, f, c, h;
        for (b in d)
          if (
            ((f = g[(e = H(b))]),
            (c = d[b]),
            Array.isArray(c) && ((f = c[1]), (c = d[b] = c[0])),
            b !== e && ((d[e] = c), delete d[b]),
            (h = a.cssHooks[e]) && ("expand" in h))
          )
            for (b in ((c = h.expand(c)), delete d[e], c))
              (b in d) || ((d[b] = c[b]), (g[b] = f));
          else g[e] = f;
      })(g, b.opts.specialEasing);
      f < i;
      f++
    )
      if ((c = M.prefilters[f].call(b, d, g, b.opts)))
        return (
          B(c.stop) &&
            (a._queueHooks(b.elem, b.opts.queue).stop = c.stop.bind(c)),
          c
        );
    return (
      a.map(g, bk, b),
      B(b.opts.start) && b.opts.start.call(d, b),
      b
        .progress(b.opts.progress)
        .done(b.opts.done, b.opts.complete)
        .fail(b.opts.fail)
        .always(b.opts.always),
      a.fx.timer(a.extend(k, { elem: d, anim: b, queue: b.opts.queue })),
      b
    );
  }
  (a.Animation = a.extend(M, {
    tweeners: {
      "*": [
        function (b, c) {
          var a = this.createTween(b, c);
          return aA(a.elem, b, ax.exec(c), a), a;
        },
      ],
    },
    tweener: function (a, d) {
      B(a) ? ((d = a), (a = ["*"])) : (a = a.match(ak));
      for (var b, c = 0, e = a.length; c < e; c++)
        (b = a[c]),
          (M.tweeners[b] = M.tweeners[b] || []),
          M.tweeners[b].unshift(d);
    },
    prefilters: [
      function (b, i, n) {
        var d,
          k,
          o,
          l,
          q,
          f,
          e,
          g,
          r = "width" in i || "height" in i,
          m = this,
          p = {},
          j = b.style,
          h = b.nodeType && az(b),
          c = as.get(b, "fxshow");
        for (d in (n.queue ||
          (null == (l = a._queueHooks(b, "fx")).unqueued &&
            ((l.unqueued = 0),
            (q = l.empty.fire),
            (l.empty.fire = function () {
              l.unqueued || q();
            })),
          l.unqueued++,
          m.always(function () {
            m.always(function () {
              l.unqueued--, a.queue(b, "fx").length || l.empty.fire();
            });
          })),
        i))
          if (((k = i[d]), bg.test(k))) {
            if (
              (delete i[d],
              (o = o || "toggle" === k),
              k === (h ? "hide" : "show"))
            ) {
              if ("show" !== k || !c || void 0 === c[d]) continue;
              h = !0;
            }
            p[d] = (c && c[d]) || a.style(b, d);
          }
        if ((f = !a.isEmptyObject(i)) || !a.isEmptyObject(p))
          for (d in (r &&
            1 === b.nodeType &&
            ((n.overflow = [j.overflow, j.overflowX, j.overflowY]),
            null == (e = c && c.display) && (e = as.get(b, "display")),
            "none" === (g = a.css(b, "display")) &&
              (e
                ? (g = e)
                : (aC([b], !0),
                  (e = b.style.display || e),
                  (g = a.css(b, "display")),
                  aC([b]))),
            ("inline" === g || ("inline-block" === g && null != e)) &&
              "none" === a.css(b, "float") &&
              (f ||
                (m.done(function () {
                  j.display = e;
                }),
                null == e && (e = "none" === (g = j.display) ? "" : g)),
              (j.display = "inline-block"))),
          n.overflow &&
            ((j.overflow = "hidden"),
            m.always(function () {
              (j.overflow = n.overflow[0]),
                (j.overflowX = n.overflow[1]),
                (j.overflowY = n.overflow[2]);
            })),
          (f = !1),
          p))
            f ||
              (c
                ? "hidden" in c && (h = c.hidden)
                : (c = as.access(b, "fxshow", { display: e })),
              o && (c.hidden = !h),
              h && aC([b], !0),
              m.done(function () {
                for (d in (h || aC([b]), as.remove(b, "fxshow"), p))
                  a.style(b, d, p[d]);
              })),
              (f = bk(h ? c[d] : 0, d, m)),
              d in c ||
                ((c[d] = f.start), h && ((f.end = f.start), (f.start = 0)));
      },
    ],
    prefilter: function (a, b) {
      b ? M.prefilters.unshift(a) : M.prefilters.push(a);
    },
  })),
    (a.speed = function (c, d, e) {
      var b =
        c && "object" == typeof c
          ? a.extend({}, c)
          : {
              complete: e || (!e && d) || (B(c) && c),
              duration: c,
              easing: (e && d) || (d && !B(d) && d),
            };
      return (
        a.fx.off
          ? (b.duration = 0)
          : "number" != typeof b.duration &&
            (b.duration in a.fx.speeds
              ? (b.duration = a.fx.speeds[b.duration])
              : (b.duration = a.fx.speeds._default)),
        (null != b.queue && !0 !== b.queue) || (b.queue = "fx"),
        (b.old = b.complete),
        (b.complete = function () {
          B(b.old) && b.old.call(this), b.queue && a.dequeue(this, b.queue);
        }),
        b
      );
    }),
    a.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(az)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (d, e, f, g) {
        var h = a.isEmptyObject(d),
          c = a.speed(e, f, g),
          b = function () {
            var b = M(this, a.extend({}, d), c);
            (h || as.get(this, "finish")) && b.stop(!0);
          };
        return (
          (b.finish = b),
          h || !1 === c.queue ? this.each(b) : this.queue(c.queue, b)
        );
      },
      stop: function (b, c, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop, b(d);
        };
        return (
          "string" != typeof b && ((d = c), (c = b), (b = void 0)),
          c && this.queue(b || "fx", []),
          this.each(function () {
            var h = !0,
              c = null != b && b + "queueHooks",
              g = a.timers,
              f = as.get(this);
            if (c) f[c] && f[c].stop && e(f[c]);
            else for (c in f) f[c] && f[c].stop && bh.test(c) && e(f[c]);
            for (c = g.length; c--; )
              g[c].elem !== this ||
                (null != b && g[c].queue !== b) ||
                (g[c].anim.stop(d), (h = !1), g.splice(c, 1));
            (!h && d) || a.dequeue(this, b);
          })
        );
      },
      finish: function (b) {
        return (
          !1 !== b && (b = b || "fx"),
          this.each(function () {
            var c,
              f = as.get(this),
              d = f[b + "queue"],
              g = f[b + "queueHooks"],
              e = a.timers,
              h = d ? d.length : 0;
            for (
              f.finish = !0,
                a.queue(this, b, []),
                g && g.stop && g.stop.call(this, !0),
                c = e.length;
              c--;

            )
              e[c].elem === this &&
                e[c].queue === b &&
                (e[c].anim.stop(!0), e.splice(c, 1));
            for (c = 0; c < h; c++)
              d[c] && d[c].finish && d[c].finish.call(this);
            delete f.finish;
          })
        );
      },
    }),
    a.each(["toggle", "show", "hide"], function (c, b) {
      var d = a.fn[b];
      a.fn[b] = function (a, c, e) {
        return null == a || "boolean" == typeof a
          ? d.apply(this, arguments)
          : this.animate(o(b, !0), a, c, e);
      };
    }),
    a.each(
      {
        slideDown: o("show"),
        slideUp: o("hide"),
        slideToggle: o("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (b, c) {
        a.fn[b] = function (a, b, d) {
          return this.animate(c, a, b, d);
        };
      }
    ),
    (a.timers = []),
    (a.fx.tick = function () {
      var d,
        b = 0,
        c = a.timers;
      for (be = Date.now(); b < c.length; b++)
        (d = c[b])() || c[b] !== d || c.splice(b--, 1);
      c.length || a.fx.stop(), (be = void 0);
    }),
    (a.fx.timer = function (b) {
      a.timers.push(b), a.fx.start();
    }),
    (a.fx.interval = 13),
    (a.fx.start = function () {
      bf || ((bf = !0), bi());
    }),
    (a.fx.stop = function () {
      bf = null;
    }),
    (a.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (a.fn.delay = function (b, c) {
      return (
        (b = (a.fx && a.fx.speeds[b]) || b),
        (c = c || "fx"),
        this.queue(c, function (a, c) {
          var e = d.setTimeout(a, b);
          c.stop = function () {
            d.clearTimeout(e);
          };
        })
      );
    }),
    (j = b.createElement("input")),
    (u = b.createElement("select").appendChild(b.createElement("option"))),
    (j.type = "checkbox"),
    (c.checkOn = "" !== j.value),
    (c.optSelected = u.selected),
    ((j = b.createElement("input")).value = "t"),
    (j.type = "radio"),
    (c.radioValue = "t" === j.value);
  var N,
    bl = a.expr.attrHandle;
  a.fn.extend({
    attr: function (b, c) {
      return $(this, a.attr, b, c, 1 < arguments.length);
    },
    removeAttr: function (b) {
      return this.each(function () {
        a.removeAttr(this, b);
      });
    },
  }),
    a.extend({
      attr: function (b, c, e) {
        var f,
          d,
          g = b.nodeType;
        if (3 !== g && 8 !== g && 2 !== g)
          return void 0 === b.getAttribute
            ? a.prop(b, c, e)
            : ((1 === g && a.isXMLDoc(b)) ||
                (d =
                  a.attrHooks[c.toLowerCase()] ||
                  (a.expr.match.bool.test(c) ? N : void 0)),
              void 0 !== e
                ? null === e
                  ? void a.removeAttr(b, c)
                  : d && "set" in d && void 0 !== (f = d.set(b, e, c))
                  ? f
                  : (b.setAttribute(c, e + ""), e)
                : d && "get" in d && null !== (f = d.get(b, c))
                ? f
                : null == (f = a.find.attr(b, c))
                ? void 0
                : f);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!c.radioValue && "radio" === b && E(a, "input")) {
              var d = a.value;
              return a.setAttribute("type", b), d && (a.value = d), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          e = 0,
          d = b && b.match(ak);
        if (d && 1 === a.nodeType) for (; (c = d[e++]); ) a.removeAttribute(c);
      },
    }),
    (N = {
      set: function (c, d, b) {
        return !1 === d ? a.removeAttr(c, b) : c.setAttribute(b, b), b;
      },
    }),
    a.each(a.expr.match.bool.source.match(/\w+/g), function (c, b) {
      var d = bl[b] || a.find.attr;
      bl[b] = function (g, c, e) {
        var b,
          f,
          a = c.toLowerCase();
        return (
          e ||
            ((f = bl[a]),
            (bl[a] = b),
            (b = null != d(g, c, e) ? a : null),
            (bl[a] = f)),
          b
        );
      };
    });
  var bm = /^(?:input|select|textarea|button)$/i,
    bn = /^(?:a|area)$/i;
  function bo(a) {
    return (a.match(ak) || []).join(" ");
  }
  function bp(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  function bq(a) {
    return Array.isArray(a) ? a : ("string" == typeof a && a.match(ak)) || [];
  }
  a.fn.extend({
    prop: function (b, c) {
      return $(this, a.prop, b, c, 1 < arguments.length);
    },
    removeProp: function (b) {
      return this.each(function () {
        delete this[a.propFix[b] || b];
      });
    },
  }),
    a.extend({
      prop: function (d, b, g) {
        var e,
          c,
          f = d.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && a.isXMLDoc(d)) ||
              ((b = a.propFix[b] || b), (c = a.propHooks[b])),
            void 0 !== g
              ? c && "set" in c && void 0 !== (e = c.set(d, g, b))
                ? e
                : (d[b] = g)
              : c && "get" in c && null !== (e = c.get(d, b))
              ? e
              : d[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (b) {
            var c = a.find.attr(b, "tabindex");
            return c
              ? parseInt(c, 10)
              : bm.test(b.nodeName) || (bn.test(b.nodeName) && b.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    c.optSelected ||
      (a.propHooks.selected = {
        get: function (b) {
          var a = b.parentNode;
          return a && a.parentNode && a.parentNode.selectedIndex, null;
        },
        set: function (b) {
          var a = b.parentNode;
          a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
        },
      }),
    a.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        a.propFix[this.toLowerCase()] = this;
      }
    ),
    a.fn.extend({
      addClass: function (f) {
        var g,
          b,
          c,
          d,
          e,
          h,
          i,
          j = 0;
        if (B(f))
          return this.each(function (b) {
            a(this).addClass(f.call(this, b, bp(this)));
          });
        if ((g = bq(f)).length) {
          for (; (b = this[j++]); )
            if (((d = bp(b)), (c = 1 === b.nodeType && " " + bo(d) + " "))) {
              for (h = 0; (e = g[h++]); )
                0 > c.indexOf(" " + e + " ") && (c += e + " ");
              d !== (i = bo(c)) && b.setAttribute("class", i);
            }
        }
        return this;
      },
      removeClass: function (f) {
        var g,
          c,
          b,
          d,
          e,
          h,
          i,
          j = 0;
        if (B(f))
          return this.each(function (b) {
            a(this).removeClass(f.call(this, b, bp(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((g = bq(f)).length) {
          for (; (c = this[j++]); )
            if (((d = bp(c)), (b = 1 === c.nodeType && " " + bo(d) + " "))) {
              for (h = 0; (e = g[h++]); )
                for (; -1 < b.indexOf(" " + e + " "); )
                  b = b.replace(" " + e + " ", " ");
              d !== (i = bo(b)) && c.setAttribute("class", i);
            }
        }
        return this;
      },
      toggleClass: function (b, c) {
        var d = typeof b,
          e = "string" === d || Array.isArray(b);
        return "boolean" == typeof c && e
          ? c
            ? this.addClass(b)
            : this.removeClass(b)
          : B(b)
          ? this.each(function (d) {
              a(this).toggleClass(b.call(this, d, bp(this), c), c);
            })
          : this.each(function () {
              var c, g, f, h;
              if (e)
                for (g = 0, f = a(this), h = bq(b); (c = h[g++]); )
                  f.hasClass(c) ? f.removeClass(c) : f.addClass(c);
              else
                (void 0 !== b && "boolean" !== d) ||
                  ((c = bp(this)) && as.set(this, "__className__", c),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      c || !1 === b ? "" : as.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (c) {
        var b,
          a,
          d = 0;
        for (b = " " + c + " "; (a = this[d++]); )
          if (1 === a.nodeType && -1 < (" " + bo(bp(a)) + " ").indexOf(b))
            return !0;
        return !1;
      },
    });
  var br = /\r/g;
  a.fn.extend({
    val: function (e) {
      var d,
        b,
        f,
        c = this[0];
      return arguments.length
        ? ((f = B(e)),
          this.each(function (c) {
            var b;
            1 === this.nodeType &&
              (null == (b = f ? e.call(this, c, a(this).val()) : e)
                ? (b = "")
                : "number" == typeof b
                ? (b += "")
                : Array.isArray(b) &&
                  (b = a.map(b, function (a) {
                    return null == a ? "" : a + "";
                  })),
              ((d =
                a.valHooks[this.type] ||
                a.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in d &&
                void 0 !== d.set(this, b, "value")) ||
                (this.value = b));
          }))
        : c
        ? (d = a.valHooks[c.type] || a.valHooks[c.nodeName.toLowerCase()]) &&
          "get" in d &&
          void 0 !== (b = d.get(c, "value"))
          ? b
          : "string" == typeof (b = c.value)
          ? b.replace(br, "")
          : null == b
          ? ""
          : b
        : void 0;
    },
  }),
    a.extend({
      valHooks: {
        option: {
          get: function (b) {
            var c = a.find.attr(b, "value");
            return null != c ? c : bo(a.text(b));
          },
        },
        select: {
          get: function (f) {
            var g,
              b,
              c,
              h = f.options,
              d = f.selectedIndex,
              e = "select-one" === f.type,
              i = e ? null : [],
              j = e ? d + 1 : h.length;
            for (c = d < 0 ? j : e ? d : 0; c < j; c++)
              if (
                ((b = h[c]).selected || c === d) &&
                !b.disabled &&
                (!b.parentNode.disabled || !E(b.parentNode, "optgroup"))
              ) {
                if (((g = a(b).val()), e)) return g;
                i.push(g);
              }
            return i;
          },
          set: function (b, h) {
            for (
              var c, d, e = b.options, f = a.makeArray(h), g = e.length;
              g--;

            )
              ((d = e[g]).selected =
                -1 < a.inArray(a.valHooks.option.get(d), f)) && (c = !0);
            return c || (b.selectedIndex = -1), f;
          },
        },
      },
    }),
    a.each(["radio", "checkbox"], function () {
      (a.valHooks[this] = {
        set: function (b, c) {
          if (Array.isArray(c))
            return (b.checked = -1 < a.inArray(a(b).val(), c));
        },
      }),
        c.checkOn ||
          (a.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    (c.focusin = "onfocusin" in d);
  var bs = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (a) {
      a.stopPropagation();
    };
  a.extend(a.event, {
    trigger: function (c, j, f, m) {
      var q,
        g,
        h,
        r,
        k,
        l,
        i,
        n,
        o = [f || b],
        e = z.call(c, "type") ? c.type : c,
        p = z.call(c, "namespace") ? c.namespace.split(".") : [];
      if (
        ((g = n = h = f = f || b),
        3 !== f.nodeType &&
          8 !== f.nodeType &&
          !bs.test(e + a.event.triggered) &&
          (-1 < e.indexOf(".") && ((e = (p = e.split(".")).shift()), p.sort()),
          (k = 0 > e.indexOf(":") && "on" + e),
          ((c = c[a.expando]
            ? c
            : new a.Event(e, "object" == typeof c && c)).isTrigger = m ? 2 : 3),
          (c.namespace = p.join(".")),
          (c.rnamespace = c.namespace
            ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (c.result = void 0),
          c.target || (c.target = f),
          (j = null == j ? [c] : a.makeArray(j, [c])),
          (i = a.event.special[e] || {}),
          m || !i.trigger || !1 !== i.trigger.apply(f, j)))
      ) {
        if (!m && !i.noBubble && !C(f)) {
          for (
            r = i.delegateType || e, bs.test(r + e) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            o.push(g), (h = g);
          h === (f.ownerDocument || b) &&
            o.push(h.defaultView || h.parentWindow || d);
        }
        for (q = 0; (g = o[q++]) && !c.isPropagationStopped(); )
          (n = g),
            (c.type = 1 < q ? r : i.bindType || e),
            (l =
              (as.get(g, "events") || Object.create(null))[c.type] &&
              as.get(g, "handle")) && l.apply(g, j),
            (l = k && g[k]) &&
              l.apply &&
              ar(g) &&
              ((c.result = l.apply(g, j)),
              !1 === c.result && c.preventDefault());
        return (
          (c.type = e),
          m ||
            c.isDefaultPrevented() ||
            (i._default && !1 !== i._default.apply(o.pop(), j)) ||
            !ar(f) ||
            (k &&
              B(f[e]) &&
              !C(f) &&
              ((h = f[k]) && (f[k] = null),
              (a.event.triggered = e),
              c.isPropagationStopped() && n.addEventListener(e, bt),
              f[e](),
              c.isPropagationStopped() && n.removeEventListener(e, bt),
              (a.event.triggered = void 0),
              h && (f[k] = h))),
          c.result
        );
      }
    },
    simulate: function (b, c, d) {
      var e = a.extend(new a.Event(), d, { type: b, isSimulated: !0 });
      a.event.trigger(e, null, c);
    },
  }),
    a.fn.extend({
      trigger: function (b, c) {
        return this.each(function () {
          a.event.trigger(b, c, this);
        });
      },
      triggerHandler: function (c, d) {
        var b = this[0];
        if (b) return a.event.trigger(c, d, b, !0);
      },
    }),
    c.focusin ||
      a.each({ focus: "focusin", blur: "focusout" }, function (c, b) {
        var d = function (c) {
          a.event.simulate(b, c.target, a.event.fix(c));
        };
        a.event.special[b] = {
          setup: function () {
            var a = this.ownerDocument || this.document || this,
              e = as.access(a, b);
            e || a.addEventListener(c, d, !0), as.access(a, b, (e || 0) + 1);
          },
          teardown: function () {
            var a = this.ownerDocument || this.document || this,
              e = as.access(a, b) - 1;
            e
              ? as.access(a, b, e)
              : (a.removeEventListener(c, d, !0), as.remove(a, b));
          },
        };
      });
  var p = d.location,
    bu = { guid: Date.now() },
    bv = /\?/;
  a.parseXML = function (c) {
    var b;
    if (!c || "string" != typeof c) return null;
    try {
      b = new d.DOMParser().parseFromString(c, "text/xml");
    } catch (e) {
      b = void 0;
    }
    return (
      (b && !b.getElementsByTagName("parsererror").length) ||
        a.error("Invalid XML: " + c),
      b
    );
  };
  var bw = /\[\]$/,
    bx = /\r?\n/g,
    by = /^(?:submit|button|image|reset|file)$/i,
    bz = /^(?:input|select|textarea|keygen)/i;
  function bA(d, b, e, f) {
    var c;
    if (Array.isArray(b))
      a.each(b, function (b, a) {
        e || bw.test(d)
          ? f(d, a)
          : bA(
              d + "[" + ("object" == typeof a && null != a ? b : "") + "]",
              a,
              e,
              f
            );
      });
    else if (e || "object" !== D(b)) f(d, b);
    else for (c in b) bA(d + "[" + c + "]", b[c], e, f);
  }
  (a.param = function (b, d) {
    var c,
      e = [],
      f = function (c, a) {
        var b = B(a) ? a() : a;
        e[e.length] =
          encodeURIComponent(c) + "=" + encodeURIComponent(null == b ? "" : b);
      };
    if (null == b) return "";
    if (Array.isArray(b) || (b.jquery && !a.isPlainObject(b)))
      a.each(b, function () {
        f(this.name, this.value);
      });
    else for (c in b) bA(c, b[c], d, f);
    return e.join("&");
  }),
    a.fn.extend({
      serialize: function () {
        return a.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var b = a.prop(this, "elements");
          return b ? a.makeArray(b) : this;
        })
          .filter(function () {
            var b = this.type;
            return (
              this.name &&
              !a(this).is(":disabled") &&
              bz.test(this.nodeName) &&
              !by.test(b) &&
              (this.checked || !aD.test(b))
            );
          })
          .map(function (d, c) {
            var b = a(this).val();
            return null == b
              ? null
              : Array.isArray(b)
              ? a.map(b, function (a) {
                  return { name: c.name, value: a.replace(bx, "\r\n") };
                })
              : { name: c.name, value: b.replace(bx, "\r\n") };
          })
          .get();
      },
    });
  var bB = /%20/g,
    bC = /#.*$/,
    bD = /([?&])_=[^&]*/,
    bE = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    bF = /^(?:GET|HEAD)$/,
    bG = /^\/\//,
    O = {},
    P = {},
    Q = "*/".concat("*"),
    R = b.createElement("a");
  function v(a) {
    return function (c, d) {
      "string" != typeof c && ((d = c), (c = "*"));
      var b,
        e = 0,
        f = c.toLowerCase().match(ak) || [];
      if (B(d))
        for (; (b = f[e++]); )
          "+" === b[0]
            ? (a[(b = b.slice(1) || "*")] = a[b] || []).unshift(d)
            : (a[b] = a[b] || []).push(d);
    };
  }
  function bH(c, d, f, g) {
    var e = {},
      h = c === P;
    function b(i) {
      var j;
      return (
        (e[i] = !0),
        a.each(c[i] || [], function (i, c) {
          var a = c(d, f, g);
          return "string" != typeof a || h || e[a]
            ? h
              ? !(j = a)
              : void 0
            : (d.dataTypes.unshift(a), b(a), !1);
        }),
        j
      );
    }
    return b(d.dataTypes[0]) || (!e["*"] && b("*"));
  }
  function bI(d, e) {
    var b,
      c,
      f = a.ajaxSettings.flatOptions || {};
    for (b in e) void 0 !== e[b] && ((f[b] ? d : c || (c = {}))[b] = e[b]);
    return c && a.extend(!0, d, c), d;
  }
  (R.href = p.href),
    a.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: p.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            p.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Q,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": a.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (b, c) {
        return c ? bI(bI(b, a.ajaxSettings), c) : bI(a.ajaxSettings, b);
      },
      ajaxPrefilter: v(O),
      ajaxTransport: v(P),
      ajax: function (j, g) {
        "object" == typeof j && ((g = j), (j = void 0)), (g = g || {});
        var n,
          f,
          x,
          y,
          r,
          h,
          i,
          o,
          m,
          k,
          c = a.ajaxSetup({}, g),
          l = c.context || c,
          s = c.context && (l.nodeType || l.jquery) ? a(l) : a.event,
          t = a.Deferred(),
          u = a.Callbacks("once memory"),
          z = c.statusCode || {},
          v = {},
          A = {},
          w = "canceled",
          e = {
            readyState: 0,
            getResponseHeader: function (b) {
              var a;
              if (i) {
                if (!y)
                  for (y = {}; (a = bE.exec(x)); )
                    y[a[1].toLowerCase() + " "] = (
                      y[a[1].toLowerCase() + " "] || []
                    ).concat(a[2]);
                a = y[b.toLowerCase() + " "];
              }
              return null == a ? null : a.join(", ");
            },
            getAllResponseHeaders: function () {
              return i ? x : null;
            },
            setRequestHeader: function (a, b) {
              return (
                null == i &&
                  (v[(a = A[a.toLowerCase()] = A[a.toLowerCase()] || a)] = b),
                this
              );
            },
            overrideMimeType: function (a) {
              return null == i && (c.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a) {
                if (i) e.always(a[e.status]);
                else for (b in a) z[b] = [z[b], a[b]];
              }
              return this;
            },
            abort: function (b) {
              var a = b || w;
              return n && n.abort(a), C(0, a), this;
            },
          };
        if (
          (t.promise(e),
          (c.url = ((j || c.url || p.href) + "").replace(
            bG,
            p.protocol + "//"
          )),
          (c.type = g.method || g.type || c.method || c.type),
          (c.dataTypes = (c.dataType || "*").toLowerCase().match(ak) || [""]),
          null == c.crossDomain)
        ) {
          h = b.createElement("a");
          try {
            (h.href = c.url),
              (h.href = h.href),
              (c.crossDomain =
                R.protocol + "//" + R.host != h.protocol + "//" + h.host);
          } catch (B) {
            c.crossDomain = !0;
          }
        }
        if (
          (c.data &&
            c.processData &&
            "string" != typeof c.data &&
            (c.data = a.param(c.data, c.traditional)),
          bH(O, c, g, e),
          i)
        )
          return e;
        for (m in ((o = a.event && c.global) &&
          0 == a.active++ &&
          a.event.trigger("ajaxStart"),
        (c.type = c.type.toUpperCase()),
        (c.hasContent = !bF.test(c.type)),
        (f = c.url.replace(bC, "")),
        c.hasContent
          ? c.data &&
            c.processData &&
            0 ===
              (c.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (c.data = c.data.replace(bB, "+"))
          : ((k = c.url.slice(f.length)),
            c.data &&
              (c.processData || "string" == typeof c.data) &&
              ((f += (bv.test(f) ? "&" : "?") + c.data), delete c.data),
            !1 === c.cache &&
              ((f = f.replace(bD, "$1")),
              (k = (bv.test(f) ? "&" : "?") + "_=" + bu.guid++ + k)),
            (c.url = f + k)),
        c.ifModified &&
          (a.lastModified[f] &&
            e.setRequestHeader("If-Modified-Since", a.lastModified[f]),
          a.etag[f] && e.setRequestHeader("If-None-Match", a.etag[f])),
        ((c.data && c.hasContent && !1 !== c.contentType) || g.contentType) &&
          e.setRequestHeader("Content-Type", c.contentType),
        e.setRequestHeader(
          "Accept",
          c.dataTypes[0] && c.accepts[c.dataTypes[0]]
            ? c.accepts[c.dataTypes[0]] +
                ("*" !== c.dataTypes[0] ? ", " + Q + "; q=0.01" : "")
            : c.accepts["*"]
        ),
        c.headers))
          e.setRequestHeader(m, c.headers[m]);
        if (c.beforeSend && (!1 === c.beforeSend.call(l, e, c) || i))
          return e.abort();
        if (
          ((w = "abort"),
          u.add(c.complete),
          e.done(c.success),
          e.fail(c.error),
          (n = bH(P, c, g, e)))
        ) {
          if (((e.readyState = 1), o && s.trigger("ajaxSend", [e, c]), i))
            return e;
          c.async &&
            0 < c.timeout &&
            (r = d.setTimeout(function () {
              e.abort("timeout");
            }, c.timeout));
          try {
            (i = !1), n.send(v, C);
          } catch (q) {
            if (i) throw q;
            C(-1, q);
          }
        } else C(-1, "No Transport");
        function C(b, q, v, w) {
          var h,
            p,
            k,
            j,
            m,
            g = q;
          i ||
            ((i = !0),
            r && d.clearTimeout(r),
            (n = void 0),
            (x = w || ""),
            (e.readyState = 0 < b ? 4 : 0),
            (h = (200 <= b && b < 300) || 304 === b),
            v &&
              (j = (function (d, i, f) {
                for (
                  var e, b, c, g, h = d.contents, a = d.dataTypes;
                  "*" === a[0];

                )
                  a.shift(),
                    void 0 === e &&
                      (e = d.mimeType || i.getResponseHeader("Content-Type"));
                if (e) {
                  for (b in h)
                    if (h[b] && h[b].test(e)) {
                      a.unshift(b);
                      break;
                    }
                }
                if (a[0] in f) c = a[0];
                else {
                  for (b in f) {
                    if (!a[0] || d.converters[b + " " + a[0]]) {
                      c = b;
                      break;
                    }
                    g || (g = b);
                  }
                  c = c || g;
                }
                if (c) return c !== a[0] && a.unshift(c), f[c];
              })(c, e, v)),
            !h &&
              -1 < a.inArray("script", c.dataTypes) &&
              (c.converters["text script"] = function () {}),
            (j = (function (c, d, j, k) {
              var h,
                a,
                b,
                g,
                e,
                f = {},
                i = c.dataTypes.slice();
              if (i[1])
                for (b in c.converters) f[b.toLowerCase()] = c.converters[b];
              for (a = i.shift(); a; )
                if (
                  (c.responseFields[a] && (j[c.responseFields[a]] = d),
                  !e && k && c.dataFilter && (d = c.dataFilter(d, c.dataType)),
                  (e = a),
                  (a = i.shift()))
                ) {
                  if ("*" === a) a = e;
                  else if ("*" !== e && e !== a) {
                    if (!(b = f[e + " " + a] || f["* " + a])) {
                      for (h in f)
                        if (
                          (g = h.split(" "))[1] === a &&
                          (b = f[e + " " + g[0]] || f["* " + g[0]])
                        ) {
                          !0 === b
                            ? (b = f[h])
                            : !0 !== f[h] && ((a = g[0]), i.unshift(g[1]));
                          break;
                        }
                    }
                    if (!0 !== b) {
                      if (b && c.throws) d = b(d);
                      else
                        try {
                          d = b(d);
                        } catch (l) {
                          return {
                            state: "parsererror",
                            error: b
                              ? l
                              : "No conversion from " + e + " to " + a,
                          };
                        }
                    }
                  }
                }
              return { state: "success", data: d };
            })(c, j, e, h)),
            h
              ? (c.ifModified &&
                  ((m = e.getResponseHeader("Last-Modified")) &&
                    (a.lastModified[f] = m),
                  (m = e.getResponseHeader("etag")) && (a.etag[f] = m)),
                204 === b || "HEAD" === c.type
                  ? (g = "nocontent")
                  : 304 === b
                  ? (g = "notmodified")
                  : ((g = j.state), (p = j.data), (h = !(k = j.error))))
              : ((k = g), (!b && g) || ((g = "error"), b < 0 && (b = 0))),
            (e.status = b),
            (e.statusText = (q || g) + ""),
            h ? t.resolveWith(l, [p, g, e]) : t.rejectWith(l, [e, g, k]),
            e.statusCode(z),
            (z = void 0),
            o && s.trigger(h ? "ajaxSuccess" : "ajaxError", [e, c, h ? p : k]),
            u.fireWith(l, [e, g]),
            o &&
              (s.trigger("ajaxComplete", [e, c]),
              --a.active || a.event.trigger("ajaxStop")));
        }
        return e;
      },
      getJSON: function (b, c, d) {
        return a.get(b, c, d, "json");
      },
      getScript: function (b, c) {
        return a.get(b, void 0, c, "script");
      },
    }),
    a.each(["get", "post"], function (c, b) {
      a[b] = function (d, c, e, f) {
        return (
          B(c) && ((f = f || e), (e = c), (c = void 0)),
          a.ajax(
            a.extend(
              { url: d, type: b, dataType: f, data: c, success: e },
              a.isPlainObject(d) && d
            )
          )
        );
      };
    }),
    a.ajaxPrefilter(function (a) {
      var b;
      for (b in a.headers)
        "content-type" === b.toLowerCase() &&
          (a.contentType = a.headers[b] || "");
    }),
    (a._evalUrl = function (b, c, d) {
      return a.ajax({
        url: b,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (b) {
          a.globalEval(b, c, d);
        },
      });
    }),
    a.fn.extend({
      wrapAll: function (b) {
        var c;
        return (
          this[0] &&
            (B(b) && (b = b.call(this[0])),
            (c = a(b, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && c.insertBefore(this[0]),
            c
              .map(function () {
                for (var a = this; a.firstElementChild; )
                  a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (b) {
        return B(b)
          ? this.each(function (c) {
              a(this).wrapInner(b.call(this, c));
            })
          : this.each(function () {
              var c = a(this),
                d = c.contents();
              d.length ? d.wrapAll(b) : c.append(b);
            });
      },
      wrap: function (b) {
        var c = B(b);
        return this.each(function (d) {
          a(this).wrapAll(c ? b.call(this, d) : b);
        });
      },
      unwrap: function (b) {
        return (
          this.parent(b)
            .not("body")
            .each(function () {
              a(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (a.expr.pseudos.hidden = function (b) {
      return !a.expr.pseudos.visible(b);
    }),
    (a.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (a.ajaxSettings.xhr = function () {
      try {
        return new d.XMLHttpRequest();
      } catch (a) {}
    });
  var bJ = { 0: 200, 1223: 204 },
    m = a.ajaxSettings.xhr();
  (c.cors = !!m && "withCredentials" in m),
    (c.ajax = m = !!m),
    a.ajaxTransport(function (a) {
      var b, e;
      if (c.cors || (m && !a.crossDomain))
        return {
          send: function (g, i) {
            var f,
              c = a.xhr();
            if (
              (c.open(a.type, a.url, a.async, a.username, a.password),
              a.xhrFields)
            )
              for (f in a.xhrFields) c[f] = a.xhrFields[f];
            for (f in (a.mimeType &&
              c.overrideMimeType &&
              c.overrideMimeType(a.mimeType),
            a.crossDomain ||
              g["X-Requested-With"] ||
              (g["X-Requested-With"] = "XMLHttpRequest"),
            g))
              c.setRequestHeader(f, g[f]);
            (b = function (a) {
              return function () {
                b &&
                  ((b =
                    e =
                    c.onload =
                    c.onerror =
                    c.onabort =
                    c.ontimeout =
                    c.onreadystatechange =
                      null),
                  "abort" === a
                    ? c.abort()
                    : "error" === a
                    ? "number" != typeof c.status
                      ? i(0, "error")
                      : i(c.status, c.statusText)
                    : i(
                        bJ[c.status] || c.status,
                        c.statusText,
                        "text" !== (c.responseType || "text") ||
                          "string" != typeof c.responseText
                          ? { binary: c.response }
                          : { text: c.responseText },
                        c.getAllResponseHeaders()
                      ));
              };
            }),
              (c.onload = b()),
              (e = c.onerror = c.ontimeout = b("error")),
              void 0 !== c.onabort
                ? (c.onabort = e)
                : (c.onreadystatechange = function () {
                    4 === c.readyState &&
                      d.setTimeout(function () {
                        b && e();
                      });
                  }),
              (b = b("abort"));
            try {
              c.send((a.hasContent && a.data) || null);
            } catch (h) {
              if (b) throw h;
            }
          },
          abort: function () {
            b && b();
          },
        };
    }),
    a.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    a.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (b) {
          return a.globalEval(b), b;
        },
      },
    }),
    a.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    a.ajaxTransport("script", function (c) {
      var d, e;
      if (c.crossDomain || c.scriptAttrs)
        return {
          send: function (f, g) {
            (d = a("<script>")
              .attr(c.scriptAttrs || {})
              .prop({ charset: c.scriptCharset, src: c.url })
              .on(
                "load error",
                (e = function (a) {
                  d.remove(),
                    (e = null),
                    a && g("error" === a.type ? 404 : 200, a.type);
                })
              )),
              b.head.appendChild(d[0]);
          },
          abort: function () {
            e && e();
          },
        };
    });
  var w,
    bK = [],
    bL = /(=)\?(?=&|$)|\?\?/;
  a.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var b = bK.pop() || a.expando + "_" + bu.guid++;
      return (this[b] = !0), b;
    },
  }),
    a.ajaxPrefilter("json jsonp", function (b, h, f) {
      var c,
        g,
        i,
        e =
          !1 !== b.jsonp &&
          (bL.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              bL.test(b.data) &&
              "data");
      if (e || "jsonp" === b.dataTypes[0])
        return (
          (c = b.jsonpCallback =
            B(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
          e
            ? (b[e] = b[e].replace(bL, "$1" + c))
            : !1 !== b.jsonp &&
              (b.url += (bv.test(b.url) ? "&" : "?") + b.jsonp + "=" + c),
          (b.converters["script json"] = function () {
            return i || a.error(c + " was not called"), i[0];
          }),
          (b.dataTypes[0] = "json"),
          (g = d[c]),
          (d[c] = function () {
            i = arguments;
          }),
          f.always(function () {
            void 0 === g ? a(d).removeProp(c) : (d[c] = g),
              b[c] && ((b.jsonpCallback = h.jsonpCallback), bK.push(c)),
              i && B(g) && g(i[0]),
              (i = g = void 0);
          }),
          "script"
        );
    }),
    (c.createHTMLDocument =
      (((w = b.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === w.childNodes.length)),
    (a.parseHTML = function (g, d, h) {
      var i, f, e;
      return "string" != typeof g
        ? []
        : ("boolean" == typeof d && ((h = d), (d = !1)),
          d ||
            (c.createHTMLDocument
              ? (((i = (d =
                  b.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = b.location.href),
                d.head.appendChild(i))
              : (d = b)),
          (e = !h && []),
          (f = ae.exec(g))
            ? [d.createElement(f[1])]
            : ((f = aJ([g], d, e)),
              e && e.length && a(e).remove(),
              a.merge([], f.childNodes)));
    }),
    (a.fn.load = function (c, b, e) {
      var g,
        f,
        i,
        h = this,
        d = c.indexOf(" ");
      return (
        -1 < d && ((g = bo(c.slice(d))), (c = c.slice(0, d))),
        B(b)
          ? ((e = b), (b = void 0))
          : b && "object" == typeof b && (f = "POST"),
        0 < h.length &&
          a
            .ajax({ url: c, type: f || "GET", dataType: "html", data: b })
            .done(function (b) {
              (i = arguments),
                h.html(g ? a("<div>").append(a.parseHTML(b)).find(g) : b);
            })
            .always(
              e &&
                function (a, b) {
                  h.each(function () {
                    e.apply(this, i || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    (a.expr.pseudos.animated = function (b) {
      return a.grep(a.timers, function (a) {
        return b === a.elem;
      }).length;
    }),
    (a.offset = {
      setOffset: function (d, b, m) {
        var l,
          f,
          g,
          h,
          e,
          i,
          j = a.css(d, "position"),
          k = a(d),
          c = {};
        "static" === j && (d.style.position = "relative"),
          (e = k.offset()),
          (g = a.css(d, "top")),
          (i = a.css(d, "left")),
          ("absolute" === j || "fixed" === j) && -1 < (g + i).indexOf("auto")
            ? ((h = (l = k.position()).top), (f = l.left))
            : ((h = parseFloat(g) || 0), (f = parseFloat(i) || 0)),
          B(b) && (b = b.call(d, m, a.extend({}, e))),
          null != b.top && (c.top = b.top - e.top + h),
          null != b.left && (c.left = b.left - e.left + f),
          "using" in b
            ? b.using.call(d, c)
            : ("number" == typeof c.top && (c.top += "px"),
              "number" == typeof c.left && (c.left += "px"),
              k.css(c));
      },
    }),
    a.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (b) {
                a.offset.setOffset(this, e, b);
              });
        var c,
          d,
          b = this[0];
        return b
          ? b.getClientRects().length
            ? ((c = b.getBoundingClientRect()),
              (d = b.ownerDocument.defaultView),
              { top: c.top + d.pageYOffset, left: c.left + d.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var b,
            d,
            e,
            c = this[0],
            f = { top: 0, left: 0 };
          if ("fixed" === a.css(c, "position")) d = c.getBoundingClientRect();
          else {
            for (
              d = this.offset(),
                e = c.ownerDocument,
                b = c.offsetParent || e.documentElement;
              b &&
              (b === e.body || b === e.documentElement) &&
              "static" === a.css(b, "position");

            )
              b = b.parentNode;
            b &&
              b !== c &&
              1 === b.nodeType &&
              (((f = a(b).offset()).top += a.css(b, "borderTopWidth", !0)),
              (f.left += a.css(b, "borderLeftWidth", !0)));
          }
          return {
            top: d.top - f.top - a.css(c, "marginTop", !0),
            left: d.left - f.left - a.css(c, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var b = this.offsetParent;
            b && "static" === a.css(b, "position");

          )
            b = b.offsetParent;
          return b || J;
        });
      },
    }),
    a.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (b, c) {
        var d = "pageYOffset" === c;
        a.fn[b] = function (a) {
          return $(
            this,
            function (b, f, e) {
              var a;
              if (
                (C(b) ? (a = b) : 9 === b.nodeType && (a = b.defaultView),
                void 0 === e)
              )
                return a ? a[c] : b[f];
              a
                ? a.scrollTo(d ? a.pageXOffset : e, d ? e : a.pageYOffset)
                : (b[f] = e);
            },
            b,
            a,
            arguments.length
          );
        };
      }
    ),
    a.each(["top", "left"], function (d, b) {
      a.cssHooks[b] = L(c.pixelPosition, function (d, c) {
        if (c)
          return (c = a2(d, b)), a$.test(c) ? a(d).position()[b] + "px" : c;
      });
    }),
    a.each({ Height: "height", Width: "width" }, function (b, c) {
      a.each(
        { padding: "inner" + b, content: c, "": "outer" + b },
        function (e, d) {
          a.fn[d] = function (f, h) {
            var g = arguments.length && (e || "boolean" != typeof f),
              i = e || (!0 === f || !0 === h ? "margin" : "border");
            return $(
              this,
              function (c, f, g) {
                var e;
                return C(c)
                  ? 0 === d.indexOf("outer")
                    ? c["inner" + b]
                    : c.document.documentElement["client" + b]
                  : 9 === c.nodeType
                  ? ((e = c.documentElement),
                    Math.max(
                      c.body["scroll" + b],
                      e["scroll" + b],
                      c.body["offset" + b],
                      e["offset" + b],
                      e["client" + b]
                    ))
                  : void 0 === g
                  ? a.css(c, f, i)
                  : a.style(c, f, g, i);
              },
              c,
              g ? f : void 0,
              g
            );
          };
        }
      );
    }),
    a.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (c, b) {
        a.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    a.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    a.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (c, b) {
        a.fn[b] = function (a, c) {
          return 0 < arguments.length
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    );
  var bM = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (a.proxy = function (b, c) {
    var d, f, e;
    if (("string" == typeof c && ((d = b[c]), (c = b), (b = d)), B(b)))
      return (
        (f = T.call(arguments, 2)),
        ((e = function () {
          return b.apply(c || this, f.concat(T.call(arguments)));
        }).guid = b.guid =
          b.guid || a.guid++),
        e
      );
  }),
    (a.holdReady = function (b) {
      b ? a.readyWait++ : a.ready(!0);
    }),
    (a.isArray = Array.isArray),
    (a.parseJSON = JSON.parse),
    (a.nodeName = E),
    (a.isFunction = B),
    (a.isWindow = C),
    (a.camelCase = H),
    (a.type = D),
    (a.now = Date.now),
    (a.isNumeric = function (b) {
      var c = a.type(b);
      return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b));
    }),
    (a.trim = function (a) {
      return null == a ? "" : (a + "").replace(bM, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return a;
      });
  var bN = d.jQuery,
    bO = d.$;
  return (
    (a.noConflict = function (b) {
      return d.$ === a && (d.$ = bO), b && d.jQuery === a && (d.jQuery = bN), a;
    }),
    void 0 === x && (d.jQuery = d.$ = a),
    a
  );
}),
  (function (a, b) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = b(require("@popperjs/core")))
      : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], b)
      : ((a =
          "undefined" != typeof globalThis ? globalThis : a || self).bootstrap =
          b(a.Popper));
  })(this, function (q) {
    "use strict";
    var t = (function (a) {
      if (a && a.__esModule) return a;
      var b = Object.create(null);
      return (
        a &&
          Object.keys(a).forEach(function (c) {
            if ("default" !== c) {
              var d = Object.getOwnPropertyDescriptor(a, c);
              Object.defineProperty(
                b,
                c,
                d.get
                  ? d
                  : {
                      enumerable: !0,
                      get: function () {
                        return a[c];
                      },
                    }
              );
            }
          }),
        (b.default = a),
        Object.freeze(b)
      );
    })(q);
    function u(d, c) {
      for (var b = 0; b < c.length; b++) {
        var a = c[b];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(d, a.key, a);
      }
    }
    function v(a, b, c) {
      return b && u(a.prototype, b), c && u(a, c), a;
    }
    function i() {
      return (i =
        Object.assign ||
        function (d) {
          for (var a = 1; a < arguments.length; a++) {
            var b = arguments[a];
            for (var c in b)
              Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c]);
          }
          return d;
        }).apply(this, arguments);
    }
    function w(a, b) {
      var c, d;
      (a.prototype = Object.create(b.prototype)),
        (a.prototype.constructor = a),
        (c = a),
        (d = b),
        (
          Object.setPrototypeOf ||
          function (a, b) {
            return (a.__proto__ = b), a;
          }
        )(c, d);
    }
    var r,
      s,
      x = function (a) {
        do a += Math.floor(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      },
      y = function (c) {
        var b = c.getAttribute("data-bs-target");
        if (!b || "#" === b) {
          var a = c.getAttribute("href");
          if (!a || (!a.includes("#") && !a.startsWith("."))) return null;
          a.includes("#") && !a.startsWith("#") && (a = "#" + a.split("#")[1]),
            (b = a && "#" !== a ? a.trim() : null);
        }
        return b;
      },
      z = function (b) {
        var a = y(b);
        return a && document.querySelector(a) ? a : null;
      },
      A = function (b) {
        var a = y(b);
        return a ? document.querySelector(a) : null;
      },
      B = function (c) {
        if (!c) return 0;
        var d = window.getComputedStyle(c),
          a = d.transitionDuration,
          b = d.transitionDelay,
          e = Number.parseFloat(a),
          f = Number.parseFloat(b);
        return e || f
          ? ((a = a.split(",")[0]),
            (b = b.split(",")[0]),
            1e3 * (Number.parseFloat(a) + Number.parseFloat(b)))
          : 0;
      },
      C = function (a) {
        a.dispatchEvent(new Event("transitionend"));
      },
      D = function (a) {
        return (a[0] || a).nodeType;
      },
      E = function (a, b) {
        var c = !1;
        a.addEventListener("transitionend", function b() {
          (c = !0), a.removeEventListener("transitionend", b);
        }),
          setTimeout(function () {
            c || C(a);
          }, b + 5);
      },
      _ = function (b, c, a) {
        Object.keys(a).forEach(function (d) {
          var e,
            g = a[d],
            f = c[d],
            h =
              f && D(f)
                ? "element"
                : null == (e = f)
                ? "" + e
                : {}.toString
                    .call(e)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(g).test(h))
            throw new TypeError(
              b.toUpperCase() +
                ': Option "' +
                d +
                '" provided type "' +
                h +
                '" but expected type "' +
                g +
                '".'
            );
        });
      },
      F = function (a) {
        if (!a) return !1;
        if (a.style && a.parentNode && a.parentNode.style) {
          var b = getComputedStyle(a),
            c = getComputedStyle(a.parentNode);
          return (
            "none" !== b.display &&
            "none" !== c.display &&
            "hidden" !== b.visibility
          );
        }
        return !1;
      },
      G = function () {
        return function () {};
      },
      H = function (a) {
        return a.offsetHeight;
      },
      I = function () {
        var a = window.jQuery;
        return a && !document.body.hasAttribute("data-bs-no-jquery") ? a : null;
      },
      d = "rtl" === document.documentElement.dir,
      b = function (b, c) {
        var a;
        (a = function () {
          var a = I();
          if (a) {
            var d = a.fn[b];
            (a.fn[b] = c.jQueryInterface),
              (a.fn[b].Constructor = c),
              (a.fn[b].noConflict = function () {
                return (a.fn[b] = d), c.jQueryInterface;
              });
          }
        }),
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", a)
            : a();
      },
      J =
        ((r = {}),
        (s = 1),
        {
          set: function (a, b, c) {
            void 0 === a.bsKey && ((a.bsKey = { key: b, id: s }), s++),
              (r[a.bsKey.id] = c);
          },
          get: function (a, c) {
            if (!a || void 0 === a.bsKey) return null;
            var b = a.bsKey;
            return b.key === c ? r[b.id] : null;
          },
          delete: function (a, c) {
            if (void 0 !== a.bsKey) {
              var b = a.bsKey;
              b.key === c && (delete r[b.id], delete a.bsKey);
            }
          },
        }),
      K = function (a, b, c) {
        J.set(a, b, c);
      },
      L = function (a, b) {
        return J.get(a, b);
      },
      M = /[^.]*(?=\..*)\.|.*/,
      N = /\..*/,
      O = /::\d+$/,
      P = {},
      Q = 1,
      R = { mouseenter: "mouseover", mouseleave: "mouseout" },
      S = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function T(b, a) {
      return (a && a + "::" + Q++) || b.uidEvent || Q++;
    }
    function U(b) {
      var a = T(b);
      return (b.uidEvent = a), (P[a] = P[a] || {}), P[a];
    }
    function V(d, f, a) {
      void 0 === a && (a = null);
      for (var e = Object.keys(d), b = 0, g = e.length; b < g; b++) {
        var c = d[e[b]];
        if (c.originalHandler === f && c.delegationSelector === a) return c;
      }
      return null;
    }
    function W(b, c, f) {
      var d = "string" == typeof c,
        a = b.replace(N, ""),
        e = R[a];
      return e && (a = e), S.has(a) || (a = b), [d, d ? f : c, a];
    }
    function X(d, g, b, e, l) {
      if ("string" == typeof g && d) {
        b || ((b = e), (e = null));
        var h = W(g, b, e),
          f = h[0],
          i = h[1],
          j = h[2],
          m = U(d),
          n = m[j] || (m[j] = {}),
          k = V(n, i, f ? b : null);
        if (k) k.oneOff = k.oneOff && l;
        else {
          var p,
            q,
            r,
            s,
            t,
            o = T(i, g.replace(M, "")),
            c = f
              ? ((p = d),
                (q = b),
                (r = e),
                function f(c) {
                  for (
                    var d = p.querySelectorAll(q), b = c.target;
                    b && b !== this;
                    b = b.parentNode
                  )
                    for (var e = d.length; e--; )
                      if (d[e] === b)
                        return (
                          (c.delegateTarget = b),
                          f.oneOff && a.off(p, c.type, r),
                          r.apply(b, [c])
                        );
                  return null;
                })
              : ((s = d),
                (t = b),
                function c(b) {
                  return (
                    (b.delegateTarget = s),
                    c.oneOff && a.off(s, b.type, t),
                    t.apply(s, [b])
                  );
                });
          (c.delegationSelector = f ? b : null),
            (c.originalHandler = i),
            (c.oneOff = l),
            (c.uidEvent = o),
            (n[o] = c),
            d.addEventListener(j, c, f);
        }
      }
    }
    function Y(e, c, a, f, d) {
      var b = V(c[a], f, d);
      b && (e.removeEventListener(a, b, Boolean(d)), delete c[a][b.uidEvent]);
    }
    var a = {
        on: function (a, b, c, d) {
          X(a, b, c, d, !1);
        },
        one: function (a, b, c, d) {
          X(a, b, c, d, !0);
        },
        off: function (d, b, f, h) {
          if ("string" == typeof b && d) {
            var e = W(b, f, h),
              i = e[0],
              g = e[1],
              c = e[2],
              l = c !== b,
              a = U(d),
              j = b.startsWith(".");
            if (void 0 === g) {
              j &&
                Object.keys(a).forEach(function (g) {
                  var h, c, e, i, f;
                  (h = d),
                    (c = a),
                    (e = g),
                    (i = b.slice(1)),
                    (f = c[e] || {}),
                    Object.keys(f).forEach(function (a) {
                      if (a.includes(i)) {
                        var b = f[a];
                        Y(h, c, e, b.originalHandler, b.delegationSelector);
                      }
                    });
                });
              var k = a[c] || {};
              Object.keys(k).forEach(function (e) {
                var g = e.replace(O, "");
                if (!l || b.includes(g)) {
                  var f = k[e];
                  Y(d, a, c, f.originalHandler, f.delegationSelector);
                }
              });
            } else {
              if (!a || !a[c]) return;
              Y(d, a, c, g, i ? f : null);
            }
          }
        },
        trigger: function (d, c, e) {
          if ("string" != typeof c || !d) return null;
          var a,
            f = I(),
            g = c.replace(N, ""),
            k = c !== g,
            l = S.has(g),
            h = !0,
            i = !0,
            j = !1,
            b = null;
          return (
            k &&
              f &&
              ((a = f.Event(c, e)),
              f(d).trigger(a),
              (h = !a.isPropagationStopped()),
              (i = !a.isImmediatePropagationStopped()),
              (j = a.isDefaultPrevented())),
            l
              ? (b = document.createEvent("HTMLEvents")).initEvent(g, h, !0)
              : (b = new CustomEvent(c, { bubbles: h, cancelable: !0 })),
            void 0 !== e &&
              Object.keys(e).forEach(function (a) {
                Object.defineProperty(b, a, {
                  get: function () {
                    return e[a];
                  },
                });
              }),
            j && b.preventDefault(),
            i && d.dispatchEvent(b),
            b.defaultPrevented && void 0 !== a && a.preventDefault(),
            b
          );
        },
      },
      c = (function () {
        function a(a) {
          a && ((this._element = a), K(a, this.constructor.DATA_KEY, this));
        }
        return (
          (a.prototype.dispose = function () {
            var a, b;
            (a = this._element),
              (b = this.constructor.DATA_KEY),
              J.delete(a, b),
              (this._element = null);
          }),
          (a.getInstance = function (a) {
            return L(a, this.DATA_KEY);
          }),
          v(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "5.0.0-beta2";
              },
            },
          ]),
          a
        );
      })(),
      g = (function (d) {
        function b() {
          return d.apply(this, arguments) || this;
        }
        w(b, d);
        var c = b.prototype;
        return (
          (c.close = function (a) {
            var b = a ? this._getRootElement(a) : this._element,
              c = this._triggerCloseEvent(b);
            null === c || c.defaultPrevented || this._removeElement(b);
          }),
          (c._getRootElement = function (a) {
            return A(a) || a.closest(".alert");
          }),
          (c._triggerCloseEvent = function (b) {
            return a.trigger(b, "close.bs.alert");
          }),
          (c._removeElement = function (b) {
            var d = this;
            if ((b.classList.remove("show"), b.classList.contains("fade"))) {
              var c = B(b);
              a.one(b, "transitionend", function () {
                return d._destroyElement(b);
              }),
                E(b, c);
            } else this._destroyElement(b);
          }),
          (c._destroyElement = function (b) {
            b.parentNode && b.parentNode.removeChild(b),
              a.trigger(b, "closed.bs.alert");
          }),
          (b.jQueryInterface = function (a) {
            return this.each(function () {
              var c = L(this, "bs.alert");
              c || (c = new b(this)), "close" === a && c[a](this);
            });
          }),
          (b.handleDismiss = function (a) {
            return function (b) {
              b && b.preventDefault(), a.close(this);
            };
          }),
          v(b, null, [
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.alert";
              },
            },
          ]),
          b
        );
      })(c);
    a.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      g.handleDismiss(new g())
    ),
      b("alert", g);
    var j = (function (b) {
      function a() {
        return b.apply(this, arguments) || this;
      }
      return (
        w(a, b),
        (a.prototype.toggle = function () {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }),
        (a.jQueryInterface = function (b) {
          return this.each(function () {
            var c = L(this, "bs.button");
            c || (c = new a(this)), "toggle" === b && c[b]();
          });
        }),
        v(a, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.button";
            },
          },
        ]),
        a
      );
    })(c);
    function Z(a) {
      return (
        "true" === a ||
        ("false" !== a &&
          (a === Number(a).toString()
            ? Number(a)
            : "" === a || "null" === a
            ? null
            : a))
      );
    }
    function aa(a) {
      return a.replace(/[A-Z]/g, function (a) {
        return "-" + a.toLowerCase();
      });
    }
    a.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      function (b) {
        b.preventDefault();
        var c = b.target.closest('[data-bs-toggle="button"]'),
          a = L(c, "bs.button");
        a || (a = new j(c)), a.toggle();
      }
    ),
      b("button", j);
    var ab = {
        setDataAttribute: function (a, b, c) {
          a.setAttribute("data-bs-" + aa(b), c);
        },
        removeDataAttribute: function (a, b) {
          a.removeAttribute("data-bs-" + aa(b));
        },
        getDataAttributes: function (a) {
          if (!a) return {};
          var b = {};
          return (
            Object.keys(a.dataset)
              .filter(function (a) {
                return a.startsWith("bs");
              })
              .forEach(function (d) {
                var c = d.replace(/^bs/, "");
                b[(c = c.charAt(0).toLowerCase() + c.slice(1, c.length))] = Z(
                  a.dataset[d]
                );
              }),
            b
          );
        },
        getDataAttribute: function (a, b) {
          return Z(a.getAttribute("data-bs-" + aa(b)));
        },
        offset: function (b) {
          var a = b.getBoundingClientRect();
          return {
            top: a.top + document.body.scrollTop,
            left: a.left + document.body.scrollLeft,
          };
        },
        position: function (a) {
          return { top: a.offsetTop, left: a.offsetLeft };
        },
      },
      ac = function (c, a) {
        var b;
        return (
          void 0 === a && (a = document.documentElement),
          (b = []).concat.apply(
            b,
            Element.prototype.querySelectorAll.call(a, c)
          )
        );
      },
      ad = function (b, a) {
        return (
          void 0 === a && (a = document.documentElement),
          Element.prototype.querySelector.call(a, b)
        );
      },
      ae = function (b, c) {
        var a;
        return (a = []).concat.apply(a, b.children).filter(function (a) {
          return a.matches(c);
        });
      },
      $ = function (b, c) {
        for (var a = b.previousElementSibling; a; ) {
          if (a.matches(c)) return [a];
          a = a.previousElementSibling;
        }
        return [];
      },
      af = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      ag = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      h = (function (e) {
        function c(b, c) {
          var a;
          return (
            ((a = e.call(this, b) || this)._items = null),
            (a._interval = null),
            (a._activeElement = null),
            (a._isPaused = !1),
            (a._isSliding = !1),
            (a.touchTimeout = null),
            (a.touchStartX = 0),
            (a.touchDeltaX = 0),
            (a._config = a._getConfig(c)),
            (a._indicatorsElement = ad(".carousel-indicators", a._element)),
            (a._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (a._pointerEvent = Boolean(window.PointerEvent)),
            a._addEventListeners(),
            a
          );
        }
        w(c, e);
        var b = c.prototype;
        return (
          (b.next = function () {
            this._isSliding || this._slide("next");
          }),
          (b.nextWhenVisible = function () {
            !document.hidden && F(this._element) && this.next();
          }),
          (b.prev = function () {
            this._isSliding || this._slide("prev");
          }),
          (b.pause = function (a) {
            a || (this._isPaused = !0),
              ad(".carousel-item-next, .carousel-item-prev", this._element) &&
                (C(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (b.cycle = function (a) {
            a || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config &&
                this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (b.to = function (b) {
            var e = this;
            this._activeElement = ad(".active.carousel-item", this._element);
            var c = this._getItemIndex(this._activeElement);
            if (!(b > this._items.length - 1 || b < 0)) {
              if (this._isSliding)
                a.one(this._element, "slid.bs.carousel", function () {
                  return e.to(b);
                });
              else {
                if (c === b) return this.pause(), void this.cycle();
                var d = b > c ? "next" : "prev";
                this._slide(d, this._items[b]);
              }
            }
          }),
          (b.dispose = function () {
            e.prototype.dispose.call(this),
              a.off(this._element, ".bs.carousel"),
              (this._items = null),
              (this._config = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (b._getConfig = function (a) {
            return (a = i({}, af, a)), _("carousel", a, ag), a;
          }),
          (b._handleSwipe = function () {
            var a = Math.abs(this.touchDeltaX);
            if (!(a <= 40)) {
              var b = a / this.touchDeltaX;
              (this.touchDeltaX = 0),
                b > 0 && (d ? this.next() : this.prev()),
                b < 0 && (d ? this.prev() : this.next());
            }
          }),
          (b._addEventListeners = function () {
            var b = this;
            this._config.keyboard &&
              a.on(this._element, "keydown.bs.carousel", function (a) {
                return b._keydown(a);
              }),
              "hover" === this._config.pause &&
                (a.on(this._element, "mouseenter.bs.carousel", function (a) {
                  return b.pause(a);
                }),
                a.on(this._element, "mouseleave.bs.carousel", function (a) {
                  return b.cycle(a);
                })),
              this._config.touch &&
                this._touchSupported &&
                this._addTouchEventListeners();
          }),
          (b._addTouchEventListeners = function () {
            var b = this,
              c = function (a) {
                b._pointerEvent &&
                ("pen" === a.pointerType || "touch" === a.pointerType)
                  ? (b.touchStartX = a.clientX)
                  : b._pointerEvent || (b.touchStartX = a.touches[0].clientX);
              },
              d = function (a) {
                b._pointerEvent &&
                  ("pen" === a.pointerType || "touch" === a.pointerType) &&
                  (b.touchDeltaX = a.clientX - b.touchStartX),
                  b._handleSwipe(),
                  "hover" === b._config.pause &&
                    (b.pause(),
                    b.touchTimeout && clearTimeout(b.touchTimeout),
                    (b.touchTimeout = setTimeout(function (a) {
                      return b.cycle(a);
                    }, 500 + b._config.interval)));
              };
            ac(".carousel-item img", this._element).forEach(function (b) {
              a.on(b, "dragstart.bs.carousel", function (a) {
                return a.preventDefault();
              });
            }),
              this._pointerEvent
                ? (a.on(this._element, "pointerdown.bs.carousel", function (a) {
                    return c(a);
                  }),
                  a.on(this._element, "pointerup.bs.carousel", function (a) {
                    return d(a);
                  }),
                  this._element.classList.add("pointer-event"))
                : (a.on(this._element, "touchstart.bs.carousel", function (a) {
                    return c(a);
                  }),
                  a.on(this._element, "touchmove.bs.carousel", function (c) {
                    var a;
                    (a = c).touches && a.touches.length > 1
                      ? (b.touchDeltaX = 0)
                      : (b.touchDeltaX = a.touches[0].clientX - b.touchStartX);
                  }),
                  a.on(this._element, "touchend.bs.carousel", function (a) {
                    return d(a);
                  }));
          }),
          (b._keydown = function (a) {
            /input|textarea/i.test(a.target.tagName) ||
              ("ArrowLeft" === a.key
                ? (a.preventDefault(), d ? this.next() : this.prev())
                : "ArrowRight" === a.key &&
                  (a.preventDefault(), d ? this.prev() : this.next()));
          }),
          (b._getItemIndex = function (a) {
            return (
              (this._items =
                a && a.parentNode ? ac(".carousel-item", a.parentNode) : []),
              this._items.indexOf(a)
            );
          }),
          (b._getItemByDirection = function (a, c) {
            var b = this._getItemIndex(c),
              e = this._items.length - 1;
            if (
              (("prev" === a && 0 === b) || ("next" === a && b === e)) &&
              !this._config.wrap
            )
              return c;
            var d = (b + ("prev" === a ? -1 : 1)) % this._items.length;
            return -1 === d
              ? this._items[this._items.length - 1]
              : this._items[d];
          }),
          (b._triggerSlideEvent = function (b, c) {
            var d = this._getItemIndex(b),
              e = this._getItemIndex(
                ad(".active.carousel-item", this._element)
              );
            return a.trigger(this._element, "slide.bs.carousel", {
              relatedTarget: b,
              direction: c,
              from: e,
              to: d,
            });
          }),
          (b._setActiveIndicatorElement = function (d) {
            if (this._indicatorsElement) {
              var c = ad(".active", this._indicatorsElement);
              c.classList.remove("active"), c.removeAttribute("aria-current");
              for (
                var b = ac("[data-bs-target]", this._indicatorsElement), a = 0;
                a < b.length;
                a++
              )
                if (
                  Number.parseInt(b[a].getAttribute("data-bs-slide-to"), 10) ===
                  this._getItemIndex(d)
                ) {
                  b[a].classList.add("active"),
                    b[a].setAttribute("aria-current", "true");
                  break;
                }
            }
          }),
          (b._updateInterval = function () {
            var a =
              this._activeElement || ad(".active.carousel-item", this._element);
            if (a) {
              var b = Number.parseInt(a.getAttribute("data-bs-interval"), 10);
              b
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = b))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
            }
          }),
          (b._slide = function (d, h) {
            var m = this,
              c = ad(".active.carousel-item", this._element),
              i = this._getItemIndex(c),
              b = h || (c && this._getItemByDirection(d, c)),
              j = this._getItemIndex(b),
              e = Boolean(this._interval),
              f = "next" === d ? "carousel-item-start" : "carousel-item-end",
              k = "next" === d ? "carousel-item-next" : "carousel-item-prev",
              g = "next" === d ? "left" : "right";
            if (b && b.classList.contains("active")) this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(b, g).defaultPrevented &&
              c &&
              b
            ) {
              if (
                ((this._isSliding = !0),
                e && this.pause(),
                this._setActiveIndicatorElement(b),
                (this._activeElement = b),
                this._element.classList.contains("slide"))
              ) {
                b.classList.add(k),
                  H(b),
                  c.classList.add(f),
                  b.classList.add(f);
                var l = B(c);
                a.one(c, "transitionend", function () {
                  b.classList.remove(f, k),
                    b.classList.add("active"),
                    c.classList.remove("active", k, f),
                    (m._isSliding = !1),
                    setTimeout(function () {
                      a.trigger(m._element, "slid.bs.carousel", {
                        relatedTarget: b,
                        direction: g,
                        from: i,
                        to: j,
                      });
                    }, 0);
                }),
                  E(c, l);
              } else
                c.classList.remove("active"),
                  b.classList.add("active"),
                  (this._isSliding = !1),
                  a.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: b,
                    direction: g,
                    from: i,
                    to: j,
                  });
              e && this.cycle();
            }
          }),
          (c.carouselInterface = function (f, b) {
            var a = L(f, "bs.carousel"),
              d = i({}, af, ab.getDataAttributes(f));
            "object" == typeof b && (d = i({}, d, b));
            var e = "string" == typeof b ? b : d.slide;
            if ((a || (a = new c(f, d)), "number" == typeof b)) a.to(b);
            else if ("string" == typeof e) {
              if (void 0 === a[e])
                throw new TypeError('No method named "' + e + '"');
              a[e]();
            } else d.interval && d.ride && (a.pause(), a.cycle());
          }),
          (c.jQueryInterface = function (a) {
            return this.each(function () {
              c.carouselInterface(this, a);
            });
          }),
          (c.dataApiClickHandler = function (e) {
            var a = A(this);
            if (a && a.classList.contains("carousel")) {
              var d = i(
                  {},
                  ab.getDataAttributes(a),
                  ab.getDataAttributes(this)
                ),
                b = this.getAttribute("data-bs-slide-to");
              b && (d.interval = !1),
                c.carouselInterface(a, d),
                b && L(a, "bs.carousel").to(b),
                e.preventDefault();
            }
          }),
          v(c, null, [
            {
              key: "Default",
              get: function () {
                return af;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.carousel";
              },
            },
          ]),
          c
        );
      })(c);
    a.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      h.dataApiClickHandler
    ),
      a.on(window, "load.bs.carousel.data-api", function () {
        for (
          var b = ac('[data-bs-ride="carousel"]'), a = 0, c = b.length;
          a < c;
          a++
        )
          h.carouselInterface(b[a], L(b[a], "bs.carousel"));
      }),
      b("carousel", h);
    var ah = { toggle: !0, parent: "" },
      ai = { toggle: "boolean", parent: "(string|element)" },
      k = (function (d) {
        function c(b, h) {
          var a;
          ((a = d.call(this, b) || this)._isTransitioning = !1),
            (a._config = a._getConfig(h)),
            (a._triggerArray = ac(
              '[data-bs-toggle="collapse"][href="#' +
                b.id +
                '"],[data-bs-toggle="collapse"][data-bs-target="#' +
                b.id +
                '"]'
            ));
          for (
            var f = ac('[data-bs-toggle="collapse"]'), c = 0, i = f.length;
            c < i;
            c++
          ) {
            var g = f[c],
              e = z(g),
              j = ac(e).filter(function (a) {
                return a === b;
              });
            null !== e &&
              j.length &&
              ((a._selector = e), a._triggerArray.push(g));
          }
          return (
            (a._parent = a._config.parent ? a._getParent() : null),
            a._config.parent ||
              a._addAriaAndCollapsedClass(a._element, a._triggerArray),
            a._config.toggle && a.toggle(),
            a
          );
        }
        w(c, d);
        var b = c.prototype;
        return (
          (b.toggle = function () {
            this._element.classList.contains("show")
              ? this.hide()
              : this.show();
          }),
          (b.show = function () {
            var i = this;
            if (
              !this._isTransitioning &&
              !this._element.classList.contains("show")
            ) {
              this._parent &&
                0 ===
                  (b = ac(".show, .collapsing", this._parent).filter(function (
                    a
                  ) {
                    return "string" == typeof i._config.parent
                      ? a.getAttribute("data-bs-parent") === i._config.parent
                      : a.classList.contains("collapse");
                  })).length &&
                (b = null);
              var b,
                e,
                j = ad(this._selector);
              if (b) {
                var f = b.find(function (a) {
                  return j !== a;
                });
                if ((e = f ? L(f, "bs.collapse") : null) && e._isTransitioning)
                  return;
              }
              if (
                !a.trigger(this._element, "show.bs.collapse").defaultPrevented
              ) {
                b &&
                  b.forEach(function (a) {
                    j !== a && c.collapseInterface(a, "hide"),
                      e || K(a, "bs.collapse", null);
                  });
                var d = this._getDimension();
                this._element.classList.remove("collapse"),
                  this._element.classList.add("collapsing"),
                  (this._element.style[d] = 0),
                  this._triggerArray.length &&
                    this._triggerArray.forEach(function (a) {
                      a.classList.remove("collapsed"),
                        a.setAttribute("aria-expanded", !0);
                    }),
                  this.setTransitioning(!0);
                var g = "scroll" + (d[0].toUpperCase() + d.slice(1)),
                  h = B(this._element);
                a.one(this._element, "transitionend", function () {
                  i._element.classList.remove("collapsing"),
                    i._element.classList.add("collapse", "show"),
                    (i._element.style[d] = ""),
                    i.setTransitioning(!1),
                    a.trigger(i._element, "shown.bs.collapse");
                }),
                  E(this._element, h),
                  (this._element.style[d] = this._element[g] + "px");
              }
            }
          }),
          (b.hide = function () {
            var h = this;
            if (
              !this._isTransitioning &&
              this._element.classList.contains("show") &&
              !a.trigger(this._element, "hide.bs.collapse").defaultPrevented
            ) {
              var b = this._getDimension();
              (this._element.style[b] =
                this._element.getBoundingClientRect()[b] + "px"),
                H(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
              var e = this._triggerArray.length;
              if (e > 0)
                for (var c = 0; c < e; c++) {
                  var d = this._triggerArray[c],
                    f = A(d);
                  f &&
                    !f.classList.contains("show") &&
                    (d.classList.add("collapsed"),
                    d.setAttribute("aria-expanded", !1));
                }
              this.setTransitioning(!0), (this._element.style[b] = "");
              var g = B(this._element);
              a.one(this._element, "transitionend", function () {
                h.setTransitioning(!1),
                  h._element.classList.remove("collapsing"),
                  h._element.classList.add("collapse"),
                  a.trigger(h._element, "hidden.bs.collapse");
              }),
                E(this._element, g);
            }
          }),
          (b.setTransitioning = function (a) {
            this._isTransitioning = a;
          }),
          (b.dispose = function () {
            d.prototype.dispose.call(this),
              (this._config = null),
              (this._parent = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (b._getConfig = function (a) {
            return (
              ((a = i({}, ah, a)).toggle = Boolean(a.toggle)),
              _("collapse", a, ai),
              a
            );
          }),
          (b._getDimension = function () {
            return this._element.classList.contains("width")
              ? "width"
              : "height";
          }),
          (b._getParent = function () {
            var b = this,
              a = this._config.parent;
            return (
              D(a)
                ? (void 0 === a.jquery && void 0 === a[0]) || (a = a[0])
                : (a = ad(a)),
              ac(
                '[data-bs-toggle="collapse"][data-bs-parent="' + a + '"]',
                a
              ).forEach(function (a) {
                var c = A(a);
                b._addAriaAndCollapsedClass(c, [a]);
              }),
              a
            );
          }),
          (b._addAriaAndCollapsedClass = function (a, b) {
            if (a && b.length) {
              var c = a.classList.contains("show");
              b.forEach(function (a) {
                c
                  ? a.classList.remove("collapsed")
                  : a.classList.add("collapsed"),
                  a.setAttribute("aria-expanded", c);
              });
            }
          }),
          (c.collapseInterface = function (d, a) {
            var b = L(d, "bs.collapse"),
              e = i(
                {},
                ah,
                ab.getDataAttributes(d),
                "object" == typeof a && a ? a : {}
              );
            if (
              (!b &&
                e.toggle &&
                "string" == typeof a &&
                /show|hide/.test(a) &&
                (e.toggle = !1),
              b || (b = new c(d, e)),
              "string" == typeof a)
            ) {
              if (void 0 === b[a])
                throw new TypeError('No method named "' + a + '"');
              b[a]();
            }
          }),
          (c.jQueryInterface = function (a) {
            return this.each(function () {
              c.collapseInterface(this, a);
            });
          }),
          v(c, null, [
            {
              key: "Default",
              get: function () {
                return ah;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.collapse";
              },
            },
          ]),
          c
        );
      })(c);
    a.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (a) {
        ("A" === a.target.tagName ||
          (a.delegateTarget && "A" === a.delegateTarget.tagName)) &&
          a.preventDefault();
        var c = ab.getDataAttributes(this),
          b = z(this);
        ac(b).forEach(function (d) {
          var b,
            a = L(d, "bs.collapse");
          a
            ? (null === a._parent &&
                "string" == typeof c.parent &&
                ((a._config.parent = c.parent), (a._parent = a._getParent())),
              (b = "toggle"))
            : (b = c),
            k.collapseInterface(d, b);
        });
      }
    ),
      b("collapse", k);
    var aj = new RegExp("ArrowUp|ArrowDown|Escape"),
      ak = d ? "top-end" : "top-start",
      al = d ? "top-start" : "top-end",
      am = d ? "bottom-end" : "bottom-start",
      an = d ? "bottom-start" : "bottom-end",
      ao = d ? "left-start" : "right-start",
      ap = d ? "right-start" : "left-start",
      aq = {
        offset: [0, 2],
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      ar = {
        offset: "(array|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
      },
      e = (function (d) {
        function c(b, c) {
          var a;
          return (
            ((a = d.call(this, b) || this)._popper = null),
            (a._config = a._getConfig(c)),
            (a._menu = a._getMenuElement()),
            (a._inNavbar = a._detectNavbar()),
            a._addEventListeners(),
            a
          );
        }
        w(c, d);
        var b = c.prototype;
        return (
          (b.toggle = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled")
            ) {
              var a = this._element.classList.contains("show");
              c.clearMenus(), a || this.show();
            }
          }),
          (b.show = function () {
            if (
              !(
                this._element.disabled ||
                this._element.classList.contains("disabled") ||
                this._menu.classList.contains("show")
              )
            ) {
              var d = c.getParentFromElement(this._element),
                e = { relatedTarget: this._element };
              if (
                !a.trigger(this._element, "show.bs.dropdown", e)
                  .defaultPrevented
              ) {
                if (this._inNavbar)
                  ab.setDataAttribute(this._menu, "popper", "none");
                else {
                  if (void 0 === t)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  var f,
                    b = this._element;
                  "parent" === this._config.reference
                    ? (b = d)
                    : D(this._config.reference)
                    ? ((b = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (b = this._config.reference[0]))
                    : "object" == typeof this._config.reference &&
                      (b = this._config.reference);
                  var g = this._getPopperConfig(),
                    h = g.modifiers.find(function (a) {
                      return "applyStyles" === a.name && !1 === a.enabled;
                    });
                  (this._popper = q.createPopper(b, this._menu, g)),
                    h && ab.setDataAttribute(this._menu, "popper", "static");
                }
                "ontouchstart" in document.documentElement &&
                  !d.closest(".navbar-nav") &&
                  (f = []).concat
                    .apply(f, document.body.children)
                    .forEach(function (b) {
                      return a.on(b, "mouseover", null, function () {});
                    }),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.toggle("show"),
                  this._element.classList.toggle("show"),
                  a.trigger(this._element, "shown.bs.dropdown", e);
              }
            }
          }),
          (b.hide = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled") &&
              this._menu.classList.contains("show")
            ) {
              var b = { relatedTarget: this._element };
              a.trigger(this._element, "hide.bs.dropdown", b)
                .defaultPrevented ||
                (this._popper && this._popper.destroy(),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                ab.removeDataAttribute(this._menu, "popper"),
                a.trigger(this._element, "hidden.bs.dropdown", b));
            }
          }),
          (b.dispose = function () {
            d.prototype.dispose.call(this),
              a.off(this._element, ".bs.dropdown"),
              (this._menu = null),
              this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (b.update = function () {
            (this._inNavbar = this._detectNavbar()),
              this._popper && this._popper.update();
          }),
          (b._addEventListeners = function () {
            var b = this;
            a.on(this._element, "click.bs.dropdown", function (a) {
              a.preventDefault(), a.stopPropagation(), b.toggle();
            });
          }),
          (b._getConfig = function (a) {
            if (
              ((a = i(
                {},
                this.constructor.Default,
                ab.getDataAttributes(this._element),
                a
              )),
              _("dropdown", a, this.constructor.DefaultType),
              "object" == typeof a.reference &&
                !D(a.reference) &&
                "function" != typeof a.reference.getBoundingClientRect)
            )
              throw new TypeError(
                'DROPDOWN: Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
              );
            return a;
          }),
          (b._getMenuElement = function () {
            return (function (b, c) {
              for (var a = b.nextElementSibling; a; ) {
                if (a.matches(c)) return [a];
                a = a.nextElementSibling;
              }
              return [];
            })(this._element, ".dropdown-menu")[0];
          }),
          (b._getPlacement = function () {
            var a = this._element.parentNode;
            if (a.classList.contains("dropend")) return ao;
            if (a.classList.contains("dropstart")) return ap;
            var b =
              "end" ===
              getComputedStyle(this._menu)
                .getPropertyValue("--bs-position")
                .trim();
            return a.classList.contains("dropup") ? (b ? al : ak) : b ? an : am;
          }),
          (b._detectNavbar = function () {
            return null !== this._element.closest(".navbar");
          }),
          (b._getOffset = function () {
            var b = this,
              a = this._config.offset;
            return "string" == typeof a
              ? a.split(",").map(function (a) {
                  return Number.parseInt(a, 10);
                })
              : "function" == typeof a
              ? function (c) {
                  return a(c, b._element);
                }
              : a;
          }),
          (b._getPopperConfig = function () {
            var a = {
              placement: this._getPlacement(),
              modifiers: [
                {
                  name: "preventOverflow",
                  options: {
                    altBoundary: this._config.flip,
                    boundary: this._config.boundary,
                  },
                },
                { name: "offset", options: { offset: this._getOffset() } },
              ],
            };
            return (
              "static" === this._config.display &&
                (a.modifiers = [{ name: "applyStyles", enabled: !1 }]),
              i(
                {},
                a,
                "function" == typeof this._config.popperConfig
                  ? this._config.popperConfig(a)
                  : this._config.popperConfig
              )
            );
          }),
          (c.dropdownInterface = function (d, a) {
            var b = L(d, "bs.dropdown");
            if (
              (b || (b = new c(d, "object" == typeof a ? a : null)),
              "string" == typeof a)
            ) {
              if (void 0 === b[a])
                throw new TypeError('No method named "' + a + '"');
              b[a]();
            }
          }),
          (c.jQueryInterface = function (a) {
            return this.each(function () {
              c.dropdownInterface(this, a);
            });
          }),
          (c.clearMenus = function (b) {
            if (
              !b ||
              (2 !== b.button && ("keyup" !== b.type || "Tab" === b.key))
            )
              for (
                var d = ac('[data-bs-toggle="dropdown"]'), c = 0, i = d.length;
                c < i;
                c++
              ) {
                var e = L(d[c], "bs.dropdown"),
                  f = { relatedTarget: d[c] };
                if ((b && "click" === b.type && (f.clickEvent = b), e)) {
                  var h,
                    g = e._menu;
                  d[c].classList.contains("show") &&
                    !(
                      (b &&
                        (("click" === b.type &&
                          /input|textarea/i.test(b.target.tagName)) ||
                          ("keyup" === b.type && "Tab" === b.key)) &&
                        g.contains(b.target)) ||
                      a.trigger(d[c], "hide.bs.dropdown", f).defaultPrevented
                    ) &&
                    ("ontouchstart" in document.documentElement &&
                      (h = []).concat
                        .apply(h, document.body.children)
                        .forEach(function (b) {
                          return a.off(b, "mouseover", null, function () {});
                        }),
                    d[c].setAttribute("aria-expanded", "false"),
                    e._popper && e._popper.destroy(),
                    g.classList.remove("show"),
                    d[c].classList.remove("show"),
                    ab.removeDataAttribute(g, "popper"),
                    a.trigger(d[c], "hidden.bs.dropdown", f));
                }
              }
          }),
          (c.getParentFromElement = function (a) {
            return A(a) || a.parentNode;
          }),
          (c.dataApiKeydownHandler = function (a) {
            if (
              !(/input|textarea/i.test(a.target.tagName)
                ? "Space" === a.key ||
                  ("Escape" !== a.key &&
                    (("ArrowDown" !== a.key && "ArrowUp" !== a.key) ||
                      a.target.closest(".dropdown-menu")))
                : !aj.test(a.key)) &&
              (a.preventDefault(),
              a.stopPropagation(),
              !this.disabled && !this.classList.contains("disabled"))
            ) {
              var f = c.getParentFromElement(this),
                e = this.classList.contains("show");
              if ("Escape" === a.key)
                return (
                  (this.matches('[data-bs-toggle="dropdown"]')
                    ? this
                    : $(this, '[data-bs-toggle="dropdown"]')[0]
                  ).focus(),
                  void c.clearMenus()
                );
              if (e || ("ArrowUp" !== a.key && "ArrowDown" !== a.key)) {
                if (e && "Space" !== a.key) {
                  var d = ac(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    f
                  ).filter(F);
                  if (d.length) {
                    var b = d.indexOf(a.target);
                    "ArrowUp" === a.key && b > 0 && b--,
                      "ArrowDown" === a.key && b < d.length - 1 && b++,
                      d[(b = -1 === b ? 0 : b)].focus();
                  }
                } else c.clearMenus();
              } else
                (this.matches('[data-bs-toggle="dropdown"]')
                  ? this
                  : $(this, '[data-bs-toggle="dropdown"]')[0]
                ).click();
            }
          }),
          v(c, null, [
            {
              key: "Default",
              get: function () {
                return aq;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ar;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.dropdown";
              },
            },
          ]),
          c
        );
      })(c);
    a.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      e.dataApiKeydownHandler
    ),
      a.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        e.dataApiKeydownHandler
      ),
      a.on(document, "click.bs.dropdown.data-api", e.clearMenus),
      a.on(document, "keyup.bs.dropdown.data-api", e.clearMenus),
      a.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (a) {
          a.preventDefault(),
            a.stopPropagation(),
            e.dropdownInterface(this, "toggle");
        }
      ),
      a.on(
        document,
        "click.bs.dropdown.data-api",
        ".dropdown form",
        function (a) {
          return a.stopPropagation();
        }
      ),
      b("dropdown", e);
    var as = { backdrop: !0, keyboard: !0, focus: !0 },
      at = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      },
      l = (function (e) {
        function c(b, c) {
          var a;
          return (
            ((a = e.call(this, b) || this)._config = a._getConfig(c)),
            (a._dialog = ad(".modal-dialog", b)),
            (a._backdrop = null),
            (a._isShown = !1),
            (a._isBodyOverflowing = !1),
            (a._ignoreBackdropClick = !1),
            (a._isTransitioning = !1),
            (a._scrollbarWidth = 0),
            a
          );
        }
        w(c, e);
        var b = c.prototype;
        return (
          (b.toggle = function (a) {
            return this._isShown ? this.hide() : this.show(a);
          }),
          (b.show = function (b) {
            var d = this;
            if (!this._isShown && !this._isTransitioning) {
              this._element.classList.contains("fade") &&
                (this._isTransitioning = !0);
              var c = a.trigger(this._element, "show.bs.modal", {
                relatedTarget: b,
              });
              this._isShown ||
                c.defaultPrevented ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                a.on(
                  this._element,
                  "click.dismiss.bs.modal",
                  '[data-bs-dismiss="modal"]',
                  function (a) {
                    return d.hide(a);
                  }
                ),
                a.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
                  a.one(d._element, "mouseup.dismiss.bs.modal", function (a) {
                    a.target === d._element && (d._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return d._showElement(b);
                }));
            }
          }),
          (b.hide = function (b) {
            var e = this;
            if (
              (b && b.preventDefault(),
              this._isShown &&
                !this._isTransitioning &&
                !a.trigger(this._element, "hide.bs.modal").defaultPrevented)
            ) {
              this._isShown = !1;
              var c = this._element.classList.contains("fade");
              if (
                (c && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                a.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                a.off(this._element, "click.dismiss.bs.modal"),
                a.off(this._dialog, "mousedown.dismiss.bs.modal"),
                c)
              ) {
                var d = B(this._element);
                a.one(this._element, "transitionend", function (a) {
                  return e._hideModal(a);
                }),
                  E(this._element, d);
              } else this._hideModal();
            }
          }),
          (b.dispose = function () {
            [window, this._element, this._dialog].forEach(function (b) {
              return a.off(b, ".bs.modal");
            }),
              e.prototype.dispose.call(this),
              a.off(document, "focusin.bs.modal"),
              (this._config = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (b.handleUpdate = function () {
            this._adjustDialog();
          }),
          (b._getConfig = function (a) {
            return (a = i({}, as, a)), _("modal", a, at), a;
          }),
          (b._showElement = function (f) {
            var g = this,
              b = this._element.classList.contains("fade"),
              c = ad(".modal-body", this._dialog);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              (this._element.scrollTop = 0),
              c && (c.scrollTop = 0),
              b && H(this._element),
              this._element.classList.add("show"),
              this._config.focus && this._enforceFocus();
            var d = function () {
              g._config.focus && g._element.focus(),
                (g._isTransitioning = !1),
                a.trigger(g._element, "shown.bs.modal", { relatedTarget: f });
            };
            if (b) {
              var e = B(this._dialog);
              a.one(this._dialog, "transitionend", d), E(this._dialog, e);
            } else d();
          }),
          (b._enforceFocus = function () {
            var b = this;
            a.off(document, "focusin.bs.modal"),
              a.on(document, "focusin.bs.modal", function (a) {
                document === a.target ||
                  b._element === a.target ||
                  b._element.contains(a.target) ||
                  b._element.focus();
              });
          }),
          (b._setEscapeEvent = function () {
            var b = this;
            this._isShown
              ? a.on(this._element, "keydown.dismiss.bs.modal", function (a) {
                  b._config.keyboard && "Escape" === a.key
                    ? (a.preventDefault(), b.hide())
                    : b._config.keyboard ||
                      "Escape" !== a.key ||
                      b._triggerBackdropTransition();
                })
              : a.off(this._element, "keydown.dismiss.bs.modal");
          }),
          (b._setResizeEvent = function () {
            var b = this;
            this._isShown
              ? a.on(window, "resize.bs.modal", function () {
                  return b._adjustDialog();
                })
              : a.off(window, "resize.bs.modal");
          }),
          (b._hideModal = function () {
            var b = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                document.body.classList.remove("modal-open"),
                  b._resetAdjustments(),
                  b._resetScrollbar(),
                  a.trigger(b._element, "hidden.bs.modal");
              });
          }),
          (b._removeBackdrop = function () {
            this._backdrop.parentNode.removeChild(this._backdrop),
              (this._backdrop = null);
          }),
          (b._showBackdrop = function (c) {
            var g = this,
              b = this._element.classList.contains("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                b && this._backdrop.classList.add(b),
                document.body.appendChild(this._backdrop),
                a.on(this._element, "click.dismiss.bs.modal", function (a) {
                  g._ignoreBackdropClick
                    ? (g._ignoreBackdropClick = !1)
                    : a.target === a.currentTarget &&
                      ("static" === g._config.backdrop
                        ? g._triggerBackdropTransition()
                        : g.hide());
                }),
                b && H(this._backdrop),
                this._backdrop.classList.add("show"),
                !b)
              )
                return void c();
              var e = B(this._backdrop);
              a.one(this._backdrop, "transitionend", c), E(this._backdrop, e);
            } else if (!this._isShown && this._backdrop) {
              this._backdrop.classList.remove("show");
              var d = function () {
                g._removeBackdrop(), c();
              };
              if (this._element.classList.contains("fade")) {
                var f = B(this._backdrop);
                a.one(this._backdrop, "transitionend", d), E(this._backdrop, f);
              } else d();
            } else c();
          }),
          (b._triggerBackdropTransition = function () {
            var d = this;
            if (
              !a.trigger(this._element, "hidePrevented.bs.modal")
                .defaultPrevented
            ) {
              var b =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              b || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
              var c = B(this._dialog);
              a.off(this._element, "transitionend"),
                a.one(this._element, "transitionend", function () {
                  d._element.classList.remove("modal-static"),
                    b ||
                      (a.one(d._element, "transitionend", function () {
                        d._element.style.overflowY = "";
                      }),
                      E(d._element, c));
                }),
                E(this._element, c),
                this._element.focus();
            }
          }),
          (b._adjustDialog = function () {
            var a =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            ((!this._isBodyOverflowing && a && !d) ||
              (this._isBodyOverflowing && !a && d)) &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              ((this._isBodyOverflowing && !a && !d) ||
                (!this._isBodyOverflowing && a && d)) &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (b._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (b._checkScrollbar = function () {
            var a = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(a.left + a.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (b._setScrollbar = function () {
            var a = this;
            this._isBodyOverflowing &&
              (this._setElementAttributes(
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                "paddingRight",
                function (b) {
                  return b + a._scrollbarWidth;
                }
              ),
              this._setElementAttributes(
                ".sticky-top",
                "marginRight",
                function (b) {
                  return b - a._scrollbarWidth;
                }
              ),
              this._setElementAttributes("body", "paddingRight", function (b) {
                return b + a._scrollbarWidth;
              })),
              document.body.classList.add("modal-open");
          }),
          (b._setElementAttributes = function (a, b, c) {
            ac(a).forEach(function (a) {
              var d = a.style[b],
                e = window.getComputedStyle(a)[b];
              ab.setDataAttribute(a, b, d),
                (a.style[b] = c(Number.parseFloat(e)) + "px");
            });
          }),
          (b._resetScrollbar = function () {
            this._resetElementAttributes(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              "paddingRight"
            ),
              this._resetElementAttributes(".sticky-top", "marginRight"),
              this._resetElementAttributes("body", "paddingRight");
          }),
          (b._resetElementAttributes = function (a, b) {
            ac(a).forEach(function (a) {
              var c = ab.getDataAttribute(a, b);
              void 0 === c && a === document.body
                ? (a.style[b] = "")
                : (ab.removeDataAttribute(a, b), (a.style[b] = c));
            });
          }),
          (b._getScrollbarWidth = function () {
            var a = document.createElement("div");
            (a.className = "modal-scrollbar-measure"),
              document.body.appendChild(a);
            var b = a.getBoundingClientRect().width - a.clientWidth;
            return document.body.removeChild(a), b;
          }),
          (c.jQueryInterface = function (a, b) {
            return this.each(function () {
              var d = L(this, "bs.modal"),
                e = i(
                  {},
                  as,
                  ab.getDataAttributes(this),
                  "object" == typeof a && a ? a : {}
                );
              if ((d || (d = new c(this, e)), "string" == typeof a)) {
                if (void 0 === d[a])
                  throw new TypeError('No method named "' + a + '"');
                d[a](b);
              }
            });
          }),
          v(c, null, [
            {
              key: "Default",
              get: function () {
                return as;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.modal";
              },
            },
          ]),
          c
        );
      })(c);
    a.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (d) {
        var f = this,
          b = A(this);
        ("A" !== this.tagName && "AREA" !== this.tagName) || d.preventDefault(),
          a.one(b, "show.bs.modal", function (c) {
            c.defaultPrevented ||
              a.one(b, "hidden.bs.modal", function () {
                F(f) && f.focus();
              });
          });
        var c = L(b, "bs.modal");
        if (!c) {
          var e = i({}, ab.getDataAttributes(b), ab.getDataAttributes(this));
          c = new l(b, e);
        }
        c.toggle(this);
      }
    ),
      b("modal", l);
    var au = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      av = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      aw =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function ax(a, f, b) {
      var d;
      if (!a.length) return a;
      if (b && "function" == typeof b) return b(a);
      for (
        var e = new window.DOMParser().parseFromString(a, "text/html"),
          j = Object.keys(f),
          g = (d = []).concat.apply(d, e.body.querySelectorAll("*")),
          h = function (d, h) {
            var b,
              a = g[d],
              c = a.nodeName.toLowerCase();
            if (!j.includes(c)) return a.parentNode.removeChild(a), "continue";
            var e = (b = []).concat.apply(b, a.attributes),
              i = [].concat(f["*"] || [], f[c] || []);
            e.forEach(function (b) {
              (function (a, d) {
                var b = a.nodeName.toLowerCase();
                if (d.includes(b))
                  return (
                    !au.has(b) ||
                    Boolean(av.test(a.nodeValue) || aw.test(a.nodeValue))
                  );
                for (
                  var e = d.filter(function (a) {
                      return a instanceof RegExp;
                    }),
                    c = 0,
                    f = e.length;
                  c < f;
                  c++
                )
                  if (e[c].test(b)) return !0;
                return !1;
              })(b, i) || a.removeAttribute(b.nodeName);
            });
          },
          c = 0,
          i = g.length;
        c < i;
        c++
      )
        h(c);
      return e.body.innerHTML;
    }
    var ay = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      az = new Set(["sanitize", "allowList", "sanitizeFn"]),
      aA = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
      },
      aB = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: d ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: d ? "right" : "left",
      },
      aC = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      aD = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      },
      f = (function (d) {
        function c(b, c) {
          var a;
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          return (
            ((a = d.call(this, b) || this)._isEnabled = !0),
            (a._timeout = 0),
            (a._hoverState = ""),
            (a._activeTrigger = {}),
            (a._popper = null),
            (a.config = a._getConfig(c)),
            (a.tip = null),
            a._setListeners(),
            a
          );
        }
        w(c, d);
        var b = c.prototype;
        return (
          (b.enable = function () {
            this._isEnabled = !0;
          }),
          (b.disable = function () {
            this._isEnabled = !1;
          }),
          (b.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (b.toggle = function (b) {
            if (this._isEnabled) {
              if (b) {
                var a = this._initializeOnDelegatedTarget(b);
                (a._activeTrigger.click = !a._activeTrigger.click),
                  a._isWithActiveTrigger()
                    ? a._enter(null, a)
                    : a._leave(null, a);
              } else {
                if (this.getTipElement().classList.contains("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
            }
          }),
          (b.dispose = function () {
            clearTimeout(this._timeout),
              a.off(this._element, this.constructor.EVENT_KEY),
              a.off(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.tip &&
                this.tip.parentNode &&
                this.tip.parentNode.removeChild(this.tip),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.config = null),
              (this.tip = null),
              d.prototype.dispose.call(this);
          }),
          (b.show = function () {
            var n = this;
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
              var j = a.trigger(this._element, this.constructor.Event.SHOW),
                c = (function c(a) {
                  if (!document.documentElement.attachShadow) return null;
                  if ("function" == typeof a.getRootNode) {
                    var b = a.getRootNode();
                    return b instanceof ShadowRoot ? b : null;
                  }
                  return a instanceof ShadowRoot
                    ? a
                    : a.parentNode
                    ? c(a.parentNode)
                    : null;
                })(this._element),
                k =
                  null === c
                    ? this._element.ownerDocument.documentElement.contains(
                        this._element
                      )
                    : c.contains(this._element);
              if (!j.defaultPrevented && k) {
                var b = this.getTipElement(),
                  d = x(this.constructor.NAME);
                b.setAttribute("id", d),
                  this._element.setAttribute("aria-describedby", d),
                  this.setContent(),
                  this.config.animation && b.classList.add("fade");
                var l =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, b, this._element)
                      : this.config.placement,
                  e = this._getAttachment(l);
                this._addAttachmentClass(e);
                var m = this._getContainer();
                K(b, this.constructor.DATA_KEY, this),
                  this._element.ownerDocument.documentElement.contains(
                    this.tip
                  ) || m.appendChild(b),
                  a.trigger(this._element, this.constructor.Event.INSERTED),
                  (this._popper = q.createPopper(
                    this._element,
                    b,
                    this._getPopperConfig(e)
                  )),
                  b.classList.add("show");
                var f,
                  g,
                  h =
                    "function" == typeof this.config.customClass
                      ? this.config.customClass()
                      : this.config.customClass;
                h && (f = b.classList).add.apply(f, h.split(" ")),
                  "ontouchstart" in document.documentElement &&
                    (g = []).concat
                      .apply(g, document.body.children)
                      .forEach(function (b) {
                        a.on(b, "mouseover", function () {});
                      });
                var i = function () {
                  var b = n._hoverState;
                  (n._hoverState = null),
                    a.trigger(n._element, n.constructor.Event.SHOWN),
                    "out" === b && n._leave(null, n);
                };
                if (this.tip.classList.contains("fade")) {
                  var _ = B(this.tip);
                  a.one(this.tip, "transitionend", i), E(this.tip, _);
                } else i();
              }
            }
          }),
          (b.hide = function () {
            var f = this;
            if (this._popper) {
              var c,
                b = this.getTipElement(),
                d = function () {
                  "show" !== f._hoverState &&
                    b.parentNode &&
                    b.parentNode.removeChild(b),
                    f._cleanTipClass(),
                    f._element.removeAttribute("aria-describedby"),
                    a.trigger(f._element, f.constructor.Event.HIDDEN),
                    f._popper && (f._popper.destroy(), (f._popper = null));
                };
              if (
                !a.trigger(this._element, this.constructor.Event.HIDE)
                  .defaultPrevented
              ) {
                if (
                  (b.classList.remove("show"),
                  "ontouchstart" in document.documentElement &&
                    (c = []).concat
                      .apply(c, document.body.children)
                      .forEach(function (b) {
                        return a.off(b, "mouseover", G);
                      }),
                  (this._activeTrigger.click = !1),
                  (this._activeTrigger.focus = !1),
                  (this._activeTrigger.hover = !1),
                  this.tip.classList.contains("fade"))
                ) {
                  var e = B(b);
                  a.one(b, "transitionend", d), E(b, e);
                } else d();
                this._hoverState = "";
              }
            }
          }),
          (b.update = function () {
            null !== this._popper && this._popper.update();
          }),
          (b.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (b.getTipElement = function () {
            if (this.tip) return this.tip;
            var a = document.createElement("div");
            return (
              (a.innerHTML = this.config.template),
              (this.tip = a.children[0]),
              this.tip
            );
          }),
          (b.setContent = function () {
            var a = this.getTipElement();
            this.setElementContent(ad(".tooltip-inner", a), this.getTitle()),
              a.classList.remove("fade", "show");
          }),
          (b.setElementContent = function (b, a) {
            if (null !== b)
              return "object" == typeof a && D(a)
                ? (a.jquery && (a = a[0]),
                  void (this.config.html
                    ? a.parentNode !== b &&
                      ((b.innerHTML = ""), b.appendChild(a))
                    : (b.textContent = a.textContent)))
                : void (this.config.html
                    ? (this.config.sanitize &&
                        (a = ax(
                          a,
                          this.config.allowList,
                          this.config.sanitizeFn
                        )),
                      (b.innerHTML = a))
                    : (b.textContent = a));
          }),
          (b.getTitle = function () {
            var a = this._element.getAttribute("data-bs-original-title");
            return (
              a ||
                (a =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this._element)
                    : this.config.title),
              a
            );
          }),
          (b.updateAttachment = function (a) {
            return "right" === a ? "end" : "left" === a ? "start" : a;
          }),
          (b._initializeOnDelegatedTarget = function (b, a) {
            var c = this.constructor.DATA_KEY;
            return (
              (a = a || L(b.delegateTarget, c)) ||
                ((a = new this.constructor(
                  b.delegateTarget,
                  this._getDelegateConfig()
                )),
                K(b.delegateTarget, c, a)),
              a
            );
          }),
          (b._getOffset = function () {
            var b = this,
              a = this.config.offset;
            return "string" == typeof a
              ? a.split(",").map(function (a) {
                  return Number.parseInt(a, 10);
                })
              : "function" == typeof a
              ? function (c) {
                  return a(c, b._element);
                }
              : a;
          }),
          (b._getPopperConfig = function (b) {
            var c = this,
              a = {
                placement: b,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      altBoundary: !0,
                      fallbackPlacements: this.config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this.config.boundary },
                  },
                  {
                    name: "arrow",
                    options: {
                      element: "." + this.constructor.NAME + "-arrow",
                    },
                  },
                  {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function (a) {
                      return c._handlePopperPlacementChange(a);
                    },
                  },
                ],
                onFirstUpdate: function (a) {
                  a.options.placement !== a.placement &&
                    c._handlePopperPlacementChange(a);
                },
              };
            return i(
              {},
              a,
              "function" == typeof this.config.popperConfig
                ? this.config.popperConfig(a)
                : this.config.popperConfig
            );
          }),
          (b._addAttachmentClass = function (a) {
            this.getTipElement().classList.add(
              "bs-tooltip-" + this.updateAttachment(a)
            );
          }),
          (b._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : D(this.config.container)
              ? this.config.container
              : ad(this.config.container);
          }),
          (b._getAttachment = function (a) {
            return aB[a.toUpperCase()];
          }),
          (b._setListeners = function () {
            var b = this;
            this.config.trigger.split(" ").forEach(function (c) {
              if ("click" === c)
                a.on(
                  b._element,
                  b.constructor.Event.CLICK,
                  b.config.selector,
                  function (a) {
                    return b.toggle(a);
                  }
                );
              else if ("manual" !== c) {
                var d =
                    "hover" === c
                      ? b.constructor.Event.MOUSEENTER
                      : b.constructor.Event.FOCUSIN,
                  e =
                    "hover" === c
                      ? b.constructor.Event.MOUSELEAVE
                      : b.constructor.Event.FOCUSOUT;
                a.on(b._element, d, b.config.selector, function (a) {
                  return b._enter(a);
                }),
                  a.on(b._element, e, b.config.selector, function (a) {
                    return b._leave(a);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                b._element && b.hide();
              }),
              a.on(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.config.selector
                ? (this.config = i({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (b._fixTitle = function () {
            var a = this._element.getAttribute("title"),
              b = typeof this._element.getAttribute("data-bs-original-title");
            (a || "string" !== b) &&
              (this._element.setAttribute("data-bs-original-title", a || ""),
              !a ||
                this._element.getAttribute("aria-label") ||
                this._element.textContent ||
                this._element.setAttribute("aria-label", a),
              this._element.setAttribute("title", ""));
          }),
          (b._enter = function (b, a) {
            (a = this._initializeOnDelegatedTarget(b, a)),
              b &&
                (a._activeTrigger["focusin" === b.type ? "focus" : "hover"] =
                  !0),
              a.getTipElement().classList.contains("show") ||
              "show" === a._hoverState
                ? (a._hoverState = "show")
                : (clearTimeout(a._timeout),
                  (a._hoverState = "show"),
                  a.config.delay && a.config.delay.show
                    ? (a._timeout = setTimeout(function () {
                        "show" === a._hoverState && a.show();
                      }, a.config.delay.show))
                    : a.show());
          }),
          (b._leave = function (b, a) {
            (a = this._initializeOnDelegatedTarget(b, a)),
              b &&
                (a._activeTrigger["focusout" === b.type ? "focus" : "hover"] =
                  !1),
              a._isWithActiveTrigger() ||
                (clearTimeout(a._timeout),
                (a._hoverState = "out"),
                a.config.delay && a.config.delay.hide
                  ? (a._timeout = setTimeout(function () {
                      "out" === a._hoverState && a.hide();
                    }, a.config.delay.hide))
                  : a.hide());
          }),
          (b._isWithActiveTrigger = function () {
            for (var a in this._activeTrigger)
              if (this._activeTrigger[a]) return !0;
            return !1;
          }),
          (b._getConfig = function (a) {
            var b = ab.getDataAttributes(this._element);
            return (
              Object.keys(b).forEach(function (a) {
                az.has(a) && delete b[a];
              }),
              a &&
                "object" == typeof a.container &&
                a.container.jquery &&
                (a.container = a.container[0]),
              "number" ==
                typeof (a = i(
                  {},
                  this.constructor.Default,
                  b,
                  "object" == typeof a && a ? a : {}
                )).delay && (a.delay = { show: a.delay, hide: a.delay }),
              "number" == typeof a.title && (a.title = a.title.toString()),
              "number" == typeof a.content &&
                (a.content = a.content.toString()),
              _("tooltip", a, this.constructor.DefaultType),
              a.sanitize &&
                (a.template = ax(a.template, a.allowList, a.sanitizeFn)),
              a
            );
          }),
          (b._getDelegateConfig = function () {
            var b = {};
            if (this.config)
              for (var a in this.config)
                this.constructor.Default[a] !== this.config[a] &&
                  (b[a] = this.config[a]);
            return b;
          }),
          (b._cleanTipClass = function () {
            var b = this.getTipElement(),
              a = b.getAttribute("class").match(ay);
            null !== a &&
              a.length > 0 &&
              a
                .map(function (a) {
                  return a.trim();
                })
                .forEach(function (a) {
                  return b.classList.remove(a);
                });
          }),
          (b._handlePopperPlacementChange = function (b) {
            var a = b.state;
            a &&
              ((this.tip = a.elements.popper),
              this._cleanTipClass(),
              this._addAttachmentClass(this._getAttachment(a.placement)));
          }),
          (c.jQueryInterface = function (a) {
            return this.each(function () {
              var b = L(this, "bs.tooltip");
              if (
                (b || !/dispose|hide/.test(a)) &&
                (b || (b = new c(this, "object" == typeof a && a)),
                "string" == typeof a)
              ) {
                if (void 0 === b[a])
                  throw new TypeError('No method named "' + a + '"');
                b[a]();
              }
            });
          }),
          v(c, null, [
            {
              key: "Default",
              get: function () {
                return aC;
              },
            },
            {
              key: "NAME",
              get: function () {
                return "tooltip";
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.tooltip";
              },
            },
            {
              key: "Event",
              get: function () {
                return aD;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.tooltip";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return aA;
              },
            },
          ]),
          c
        );
      })(c);
    b("tooltip", f);
    var aE = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      aF = i({}, f.Default, {
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      aG = i({}, f.DefaultType, { content: "(string|element|function)" }),
      aH = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      },
      m = (function (c) {
        function a() {
          return c.apply(this, arguments) || this;
        }
        w(a, c);
        var b = a.prototype;
        return (
          (b.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (b.setContent = function () {
            var b = this.getTipElement();
            this.setElementContent(ad(".popover-header", b), this.getTitle());
            var a = this._getContent();
            "function" == typeof a && (a = a.call(this._element)),
              this.setElementContent(ad(".popover-body", b), a),
              b.classList.remove("fade", "show");
          }),
          (b._addAttachmentClass = function (a) {
            this.getTipElement().classList.add(
              "bs-popover-" + this.updateAttachment(a)
            );
          }),
          (b._getContent = function () {
            return (
              this._element.getAttribute("data-bs-content") ||
              this.config.content
            );
          }),
          (b._cleanTipClass = function () {
            var b = this.getTipElement(),
              a = b.getAttribute("class").match(aE);
            null !== a &&
              a.length > 0 &&
              a
                .map(function (a) {
                  return a.trim();
                })
                .forEach(function (a) {
                  return b.classList.remove(a);
                });
          }),
          (a.jQueryInterface = function (b) {
            return this.each(function () {
              var c = L(this, "bs.popover");
              if (
                (c || !/dispose|hide/.test(b)) &&
                (c ||
                  ((c = new a(this, "object" == typeof b ? b : null)),
                  K(this, "bs.popover", c)),
                "string" == typeof b)
              ) {
                if (void 0 === c[b])
                  throw new TypeError('No method named "' + b + '"');
                c[b]();
              }
            });
          }),
          v(a, null, [
            {
              key: "Default",
              get: function () {
                return aF;
              },
            },
            {
              key: "NAME",
              get: function () {
                return "popover";
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.popover";
              },
            },
            {
              key: "Event",
              get: function () {
                return aH;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.popover";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return aG;
              },
            },
          ]),
          a
        );
      })(f);
    b("popover", m);
    var aI = { offset: 10, method: "auto", target: "" },
      aJ = { offset: "number", method: "string", target: "(string|element)" },
      n = (function (d) {
        function c(c, e) {
          var b;
          return (
            ((b = d.call(this, c) || this)._scrollElement =
              "BODY" === c.tagName ? window : c),
            (b._config = b._getConfig(e)),
            (b._selector =
              b._config.target +
              " .nav-link, " +
              b._config.target +
              " .list-group-item, " +
              b._config.target +
              " .dropdown-item"),
            (b._offsets = []),
            (b._targets = []),
            (b._activeTarget = null),
            (b._scrollHeight = 0),
            a.on(b._scrollElement, "scroll.bs.scrollspy", function () {
              return b._process();
            }),
            b.refresh(),
            b._process(),
            b
          );
        }
        w(c, d);
        var b = c.prototype;
        return (
          (b.refresh = function () {
            var c = this,
              a =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : "position",
              b = "auto" === this._config.method ? a : this._config.method,
              d = "position" === b ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              ac(this._selector)
                .map(function (f) {
                  var a = z(f),
                    c = a ? ad(a) : null;
                  if (c) {
                    var e = c.getBoundingClientRect();
                    if (e.width || e.height) return [ab[b](c).top + d, a];
                  }
                  return null;
                })
                .filter(function (a) {
                  return a;
                })
                .sort(function (a, b) {
                  return a[0] - b[0];
                })
                .forEach(function (a) {
                  c._offsets.push(a[0]), c._targets.push(a[1]);
                });
          }),
          (b.dispose = function () {
            d.prototype.dispose.call(this),
              a.off(this._scrollElement, ".bs.scrollspy"),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (b._getConfig = function (a) {
            if (
              "string" !=
                typeof (a = i({}, aI, "object" == typeof a && a ? a : {}))
                  .target &&
              D(a.target)
            ) {
              var b = a.target.id;
              b || ((b = x("scrollspy")), (a.target.id = b)),
                (a.target = "#" + b);
            }
            return _("scrollspy", a, aJ), a;
          }),
          (b._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (b._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (b._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (b._process = function () {
            var b = this._getScrollTop() + this._config.offset,
              c = this._getScrollHeight(),
              e = this._config.offset + c - this._getOffsetHeight();
            if ((this._scrollHeight !== c && this.refresh(), b >= e)) {
              var d = this._targets[this._targets.length - 1];
              this._activeTarget !== d && this._activate(d);
            } else {
              if (
                this._activeTarget &&
                b < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var a = this._offsets.length; a--; )
                this._activeTarget !== this._targets[a] &&
                  b >= this._offsets[a] &&
                  (void 0 === this._offsets[a + 1] ||
                    b < this._offsets[a + 1]) &&
                  this._activate(this._targets[a]);
            }
          }),
          (b._activate = function (c) {
            (this._activeTarget = c), this._clear();
            var b = ad(
              this._selector
                .split(",")
                .map(function (a) {
                  return (
                    a +
                    '[data-bs-target="' +
                    c +
                    '"],' +
                    a +
                    '[href="' +
                    c +
                    '"]'
                  );
                })
                .join(",")
            );
            b.classList.contains("dropdown-item")
              ? (ad(".dropdown-toggle", b.closest(".dropdown")).classList.add(
                  "active"
                ),
                b.classList.add("active"))
              : (b.classList.add("active"),
                (function (c, d) {
                  for (
                    var b = [], a = c.parentNode;
                    a && a.nodeType === Node.ELEMENT_NODE && 3 !== a.nodeType;

                  )
                    a.matches(d) && b.push(a), (a = a.parentNode);
                  return b;
                })(b, ".nav, .list-group").forEach(function (a) {
                  $(a, ".nav-link, .list-group-item").forEach(function (a) {
                    return a.classList.add("active");
                  }),
                    $(a, ".nav-item").forEach(function (a) {
                      ae(a, ".nav-link").forEach(function (a) {
                        return a.classList.add("active");
                      });
                    });
                })),
              a.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: c,
              });
          }),
          (b._clear = function () {
            ac(this._selector)
              .filter(function (a) {
                return a.classList.contains("active");
              })
              .forEach(function (a) {
                return a.classList.remove("active");
              });
          }),
          (c.jQueryInterface = function (a) {
            return this.each(function () {
              var b = L(this, "bs.scrollspy");
              if (
                (b || (b = new c(this, "object" == typeof a && a)),
                "string" == typeof a)
              ) {
                if (void 0 === b[a])
                  throw new TypeError('No method named "' + a + '"');
                b[a]();
              }
            });
          }),
          v(c, null, [
            {
              key: "Default",
              get: function () {
                return aI;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.scrollspy";
              },
            },
          ]),
          c
        );
      })(c);
    a.on(window, "load.bs.scrollspy.data-api", function () {
      ac('[data-bs-spy="scroll"]').forEach(function (a) {
        return new n(a, ab.getDataAttributes(a));
      });
    }),
      b("scrollspy", n);
    var o = (function (d) {
      function b() {
        return d.apply(this, arguments) || this;
      }
      w(b, d);
      var c = b.prototype;
      return (
        (c.show = function () {
          var g = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains("active")) ||
              this._element.classList.contains("disabled")
            )
          ) {
            var b,
              d = A(this._element),
              c = this._element.closest(".nav, .list-group");
            c &&
              (b = (b = ac(
                "UL" === c.nodeName || "OL" === c.nodeName
                  ? ":scope > li > .active"
                  : ".active",
                c
              ))[b.length - 1]);
            var e = b
              ? a.trigger(b, "hide.bs.tab", { relatedTarget: this._element })
              : null;
            if (
              !(
                a.trigger(this._element, "show.bs.tab", { relatedTarget: b })
                  .defaultPrevented ||
                (null !== e && e.defaultPrevented)
              )
            ) {
              this._activate(this._element, c);
              var f = function () {
                a.trigger(b, "hidden.bs.tab", { relatedTarget: g._element }),
                  a.trigger(g._element, "shown.bs.tab", { relatedTarget: b });
              };
              d ? this._activate(d, d.parentNode, f) : f();
            }
          }
        }),
        (c._activate = function (h, c, e) {
          var i = this,
            b = (
              c && ("UL" === c.nodeName || "OL" === c.nodeName)
                ? ac(":scope > li > .active", c)
                : ae(c, ".active")
            )[0],
            f = e && b && b.classList.contains("fade"),
            d = function () {
              return i._transitionComplete(h, b, e);
            };
          if (b && f) {
            var g = B(b);
            b.classList.remove("show"), a.one(b, "transitionend", d), E(b, g);
          } else d();
        }),
        (c._transitionComplete = function (a, b, c) {
          if (b) {
            b.classList.remove("active");
            var d = ad(":scope > .dropdown-menu .active", b.parentNode);
            d && d.classList.remove("active"),
              "tab" === b.getAttribute("role") &&
                b.setAttribute("aria-selected", !1);
          }
          a.classList.add("active"),
            "tab" === a.getAttribute("role") &&
              a.setAttribute("aria-selected", !0),
            H(a),
            a.classList.contains("fade") && a.classList.add("show"),
            a.parentNode &&
              a.parentNode.classList.contains("dropdown-menu") &&
              (a.closest(".dropdown") &&
                ac(".dropdown-toggle").forEach(function (a) {
                  return a.classList.add("active");
                }),
              a.setAttribute("aria-expanded", !0)),
            c && c();
        }),
        (b.jQueryInterface = function (a) {
          return this.each(function () {
            var c = L(this, "bs.tab") || new b(this);
            if ("string" == typeof a) {
              if (void 0 === c[a])
                throw new TypeError('No method named "' + a + '"');
              c[a]();
            }
          });
        }),
        v(b, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tab";
            },
          },
        ]),
        b
      );
    })(c);
    a.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (a) {
        a.preventDefault(), (L(this, "bs.tab") || new o(this)).show();
      }
    ),
      b("tab", o);
    var aK = { animation: "boolean", autohide: "boolean", delay: "number" },
      aL = { animation: !0, autohide: !0, delay: 5e3 },
      p = (function (d) {
        function c(b, c) {
          var a;
          return (
            ((a = d.call(this, b) || this)._config = a._getConfig(c)),
            (a._timeout = null),
            a._setListeners(),
            a
          );
        }
        w(c, d);
        var b = c.prototype;
        return (
          (b.show = function () {
            var d = this;
            if (!a.trigger(this._element, "show.bs.toast").defaultPrevented) {
              this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
              var b = function () {
                d._element.classList.remove("showing"),
                  d._element.classList.add("show"),
                  a.trigger(d._element, "shown.bs.toast"),
                  d._config.autohide &&
                    (d._timeout = setTimeout(function () {
                      d.hide();
                    }, d._config.delay));
              };
              if (
                (this._element.classList.remove("hide"),
                H(this._element),
                this._element.classList.add("showing"),
                this._config.animation)
              ) {
                var c = B(this._element);
                a.one(this._element, "transitionend", b), E(this._element, c);
              } else b();
            }
          }),
          (b.hide = function () {
            var d = this;
            if (
              this._element.classList.contains("show") &&
              !a.trigger(this._element, "hide.bs.toast").defaultPrevented
            ) {
              var b = function () {
                d._element.classList.add("hide"),
                  a.trigger(d._element, "hidden.bs.toast");
              };
              if (
                (this._element.classList.remove("show"), this._config.animation)
              ) {
                var c = B(this._element);
                a.one(this._element, "transitionend", b), E(this._element, c);
              } else b();
            }
          }),
          (b.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains("show") &&
                this._element.classList.remove("show"),
              a.off(this._element, "click.dismiss.bs.toast"),
              d.prototype.dispose.call(this),
              (this._config = null);
          }),
          (b._getConfig = function (a) {
            return (
              (a = i(
                {},
                aL,
                ab.getDataAttributes(this._element),
                "object" == typeof a && a ? a : {}
              )),
              _("toast", a, this.constructor.DefaultType),
              a
            );
          }),
          (b._setListeners = function () {
            var b = this;
            a.on(
              this._element,
              "click.dismiss.bs.toast",
              '[data-bs-dismiss="toast"]',
              function () {
                return b.hide();
              }
            );
          }),
          (b._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (c.jQueryInterface = function (a) {
            return this.each(function () {
              var b = L(this, "bs.toast");
              if (
                (b || (b = new c(this, "object" == typeof a && a)),
                "string" == typeof a)
              ) {
                if (void 0 === b[a])
                  throw new TypeError('No method named "' + a + '"');
                b[a](this);
              }
            });
          }),
          v(c, null, [
            {
              key: "DefaultType",
              get: function () {
                return aK;
              },
            },
            {
              key: "Default",
              get: function () {
                return aL;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.toast";
              },
            },
          ]),
          c
        );
      })(c);
    return (
      b("toast", p),
      {
        Alert: g,
        Button: j,
        Carousel: h,
        Collapse: k,
        Dropdown: e,
        Modal: l,
        Popover: m,
        ScrollSpy: n,
        Tab: o,
        Toast: p,
        Tooltip: f,
      }
    );
  }),
  (function (a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "undefined" != typeof exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery);
  })(function ($) {
    "use strict";
    var b,
      a = window.Slick || {};
    ((a =
      ((b = 0),
      function (a, d) {
        var c,
          _ = this;
        (_.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: $(a),
          appendDots: $(a),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (b, a) {
            return $('<button type="button" />').text(a + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (_.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          $.extend(_, _.initials),
          (_.activeBreakpoint = null),
          (_.animType = null),
          (_.animProp = null),
          (_.breakpoints = []),
          (_.breakpointSettings = []),
          (_.cssTransitions = !1),
          (_.focussed = !1),
          (_.interrupted = !1),
          (_.hidden = "hidden"),
          (_.paused = !0),
          (_.positionProp = null),
          (_.respondTo = null),
          (_.rowCount = 1),
          (_.shouldClick = !0),
          (_.$slider = $(a)),
          (_.$slidesCache = null),
          (_.transformType = null),
          (_.transitionType = null),
          (_.visibilityChange = "visibilitychange"),
          (_.windowWidth = 0),
          (_.windowTimer = null),
          (c = $(a).data("slick") || {}),
          (_.options = $.extend({}, _.defaults, d, c)),
          (_.currentSlide = _.options.initialSlide),
          (_.originalSettings = _.options),
          void 0 !== document.mozHidden
            ? ((_.hidden = "mozHidden"),
              (_.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((_.hidden = "webkitHidden"),
              (_.visibilityChange = "webkitvisibilitychange")),
          (_.autoPlay = $.proxy(_.autoPlay, _)),
          (_.autoPlayClear = $.proxy(_.autoPlayClear, _)),
          (_.autoPlayIterator = $.proxy(_.autoPlayIterator, _)),
          (_.changeSlide = $.proxy(_.changeSlide, _)),
          (_.clickHandler = $.proxy(_.clickHandler, _)),
          (_.selectHandler = $.proxy(_.selectHandler, _)),
          (_.setPosition = $.proxy(_.setPosition, _)),
          (_.swipeHandler = $.proxy(_.swipeHandler, _)),
          (_.dragHandler = $.proxy(_.dragHandler, _)),
          (_.keyHandler = $.proxy(_.keyHandler, _)),
          (_.instanceUid = b++),
          (_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          _.registerBreakpoints(),
          _.init(!0);
      })).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (a.prototype.addSlide = a.prototype.slickAdd =
        function (b, a, c) {
          var _ = this;
          if ("boolean" == typeof a) (c = a), (a = null);
          else if (a < 0 || a >= _.slideCount) return !1;
          _.unload(),
            "number" == typeof a
              ? 0 === a && 0 === _.$slides.length
                ? $(b).appendTo(_.$slideTrack)
                : c
                ? $(b).insertBefore(_.$slides.eq(a))
                : $(b).insertAfter(_.$slides.eq(a))
              : !0 === c
              ? $(b).prependTo(_.$slideTrack)
              : $(b).appendTo(_.$slideTrack),
            (_.$slides = _.$slideTrack.children(this.options.slide)),
            _.$slideTrack.children(this.options.slide).detach(),
            _.$slideTrack.append(_.$slides),
            _.$slides.each(function (a, b) {
              $(b).attr("data-slick-index", a);
            }),
            (_.$slidesCache = _.$slides),
            _.reinit();
        }),
      (a.prototype.animateHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var a = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.animate({ height: a }, this.options.speed);
        }
      }),
      (a.prototype.animateSlide = function (a, b) {
        var c = {},
          _ = this;
        _.animateHeight(),
          !0 === _.options.rtl && !1 === _.options.vertical && (a = -a),
          !1 === _.transformsEnabled
            ? !1 === _.options.vertical
              ? _.$slideTrack.animate(
                  { left: a },
                  _.options.speed,
                  _.options.easing,
                  b
                )
              : _.$slideTrack.animate(
                  { top: a },
                  _.options.speed,
                  _.options.easing,
                  b
                )
            : !1 === _.cssTransitions
            ? (!0 === _.options.rtl && (_.currentLeft = -_.currentLeft),
              $({ animStart: _.currentLeft }).animate(
                { animStart: a },
                {
                  duration: _.options.speed,
                  easing: _.options.easing,
                  step: function (a) {
                    (a = Math.ceil(a)),
                      !1 === _.options.vertical
                        ? ((c[_.animType] = "translate(" + a + "px, 0px)"),
                          _.$slideTrack.css(c))
                        : ((c[_.animType] = "translate(0px," + a + "px)"),
                          _.$slideTrack.css(c));
                  },
                  complete: function () {
                    b && b.call();
                  },
                }
              ))
            : (_.applyTransition(),
              (a = Math.ceil(a)),
              !1 === _.options.vertical
                ? (c[_.animType] = "translate3d(" + a + "px, 0px, 0px)")
                : (c[_.animType] = "translate3d(0px," + a + "px, 0px)"),
              _.$slideTrack.css(c),
              b &&
                setTimeout(function () {
                  _.disableTransition(), b.call();
                }, _.options.speed));
      }),
      (a.prototype.getNavTarget = function () {
        var a = this.options.asNavFor;
        return a && null !== a && (a = $(a).not(this.$slider)), a;
      }),
      (a.prototype.asNavFor = function (b) {
        var a = this.getNavTarget();
        null !== a &&
          "object" == typeof a &&
          a.each(function () {
            var a = $(this).slick("getSlick");
            a.unslicked || a.slideHandler(b, !0);
          });
      }),
      (a.prototype.applyTransition = function (b) {
        var _ = this,
          a = {};
        !1 === _.options.fade
          ? (a[_.transitionType] =
              _.transformType +
              " " +
              _.options.speed +
              "ms " +
              _.options.cssEase)
          : (a[_.transitionType] =
              "opacity " + _.options.speed + "ms " + _.options.cssEase),
          !1 === _.options.fade ? _.$slideTrack.css(a) : _.$slides.eq(b).css(a);
      }),
      (a.prototype.autoPlay = function () {
        var _ = this;
        _.autoPlayClear(),
          _.slideCount > _.options.slidesToShow &&
            (_.autoPlayTimer = setInterval(
              _.autoPlayIterator,
              _.options.autoplaySpeed
            ));
      }),
      (a.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (a.prototype.autoPlayIterator = function () {
        var _ = this,
          a = _.currentSlide + _.options.slidesToScroll;
        _.paused ||
          _.interrupted ||
          _.focussed ||
          (!1 === _.options.infinite &&
            (1 === _.direction && _.currentSlide + 1 === _.slideCount - 1
              ? (_.direction = 0)
              : 0 === _.direction &&
                ((a = _.currentSlide - _.options.slidesToScroll),
                _.currentSlide - 1 == 0 && (_.direction = 1))),
          _.slideHandler(a));
      }),
      (a.prototype.buildArrows = function () {
        var _ = this;
        !0 === _.options.arrows &&
          ((_.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow")),
          (_.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow")),
          _.slideCount > _.options.slidesToShow
            ? (_.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              _.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              _.htmlExpr.test(_.options.prevArrow) &&
                _.$prevArrow.prependTo(_.options.appendArrows),
              _.htmlExpr.test(_.options.nextArrow) &&
                _.$nextArrow.appendTo(_.options.appendArrows),
              !0 !== _.options.infinite &&
                _.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : _.$prevArrow
                .add(_.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (a.prototype.buildDots = function () {
        var a,
          b,
          _ = this;
        if (!0 === _.options.dots) {
          for (
            _.$slider.addClass("slick-dotted"),
              b = $("<ul />").addClass(_.options.dotsClass),
              a = 0;
            a <= _.getDotCount();
            a += 1
          )
            b.append(
              $("<li />").append(_.options.customPaging.call(this, _, a))
            );
          (_.$dots = b.appendTo(_.options.appendDots)),
            _.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (a.prototype.buildOut = function () {
        var _ = this;
        (_.$slides = _.$slider
          .children(_.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (_.slideCount = _.$slides.length),
          _.$slides.each(function (b, a) {
            $(a)
              .attr("data-slick-index", b)
              .data("originalStyling", $(a).attr("style") || "");
          }),
          _.$slider.addClass("slick-slider"),
          (_.$slideTrack =
            0 === _.slideCount
              ? $('<div class="slick-track"/>').appendTo(_.$slider)
              : _.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (_.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          _.$slideTrack.css("opacity", 0),
          (!0 === _.options.centerMode || !0 === _.options.swipeToSlide) &&
            (_.options.slidesToScroll = 1),
          $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading"),
          _.setupInfinite(),
          _.buildArrows(),
          _.buildDots(),
          _.updateDots(),
          _.setSlideClasses(
            "number" == typeof _.currentSlide ? _.currentSlide : 0
          ),
          !0 === _.options.draggable && _.$list.addClass("draggable");
      }),
      (a.prototype.buildRows = function () {
        var a, b, c, e, g, d, f;
        if (
          ((e = document.createDocumentFragment()),
          (d = this.$slider.children()),
          this.options.rows > 1)
        ) {
          for (
            a = 0,
              f = this.options.slidesPerRow * this.options.rows,
              g = Math.ceil(d.length / f);
            a < g;
            a++
          ) {
            var h = document.createElement("div");
            for (b = 0; b < this.options.rows; b++) {
              var i = document.createElement("div");
              for (c = 0; c < this.options.slidesPerRow; c++) {
                var j = a * f + (b * this.options.slidesPerRow + c);
                d.get(j) && i.appendChild(d.get(j));
              }
              h.appendChild(i);
            }
            e.appendChild(h);
          }
          this.$slider.empty().append(e),
            this.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / this.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (a.prototype.checkResponsive = function (b, h) {
        var c,
          a,
          d,
          _ = this,
          e = !1,
          f = _.$slider.width(),
          g = window.innerWidth || $(window).width();
        if (
          ("window" === _.respondTo
            ? (d = g)
            : "slider" === _.respondTo
            ? (d = f)
            : "min" === _.respondTo && (d = Math.min(g, f)),
          _.options.responsive &&
            _.options.responsive.length &&
            null !== _.options.responsive)
        ) {
          for (c in ((a = null), _.breakpoints))
            _.breakpoints.hasOwnProperty(c) &&
              (!1 === _.originalSettings.mobileFirst
                ? d < _.breakpoints[c] && (a = _.breakpoints[c])
                : d > _.breakpoints[c] && (a = _.breakpoints[c]));
          null !== a
            ? null !== _.activeBreakpoint
              ? (a !== _.activeBreakpoint || h) &&
                ((_.activeBreakpoint = a),
                "unslick" === _.breakpointSettings[a]
                  ? _.unslick(a)
                  : ((_.options = $.extend(
                      {},
                      _.originalSettings,
                      _.breakpointSettings[a]
                    )),
                    !0 === b && (_.currentSlide = _.options.initialSlide),
                    _.refresh(b)),
                (e = a))
              : ((_.activeBreakpoint = a),
                "unslick" === _.breakpointSettings[a]
                  ? _.unslick(a)
                  : ((_.options = $.extend(
                      {},
                      _.originalSettings,
                      _.breakpointSettings[a]
                    )),
                    !0 === b && (_.currentSlide = _.options.initialSlide),
                    _.refresh(b)),
                (e = a))
            : null !== _.activeBreakpoint &&
              ((_.activeBreakpoint = null),
              (_.options = _.originalSettings),
              !0 === b && (_.currentSlide = _.options.initialSlide),
              _.refresh(b),
              (e = a)),
            b || !1 === e || _.$slider.trigger("breakpoint", [_, e]);
        }
      }),
      (a.prototype.changeSlide = function (b, e) {
        var c,
          d,
          a = $(b.currentTarget);
        switch (
          (a.is("a") && b.preventDefault(),
          a.is("li") || (a = a.closest("li")),
          (c =
            this.slideCount % this.options.slidesToScroll != 0
              ? 0
              : (this.slideCount - this.currentSlide) %
                this.options.slidesToScroll),
          b.data.message)
        ) {
          case "previous":
            (d =
              0 === c
                ? this.options.slidesToScroll
                : this.options.slidesToShow - c),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide - d, !1, e);
            break;
          case "next":
            (d = 0 === c ? this.options.slidesToScroll : c),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide + d, !1, e);
            break;
          case "index":
            var f =
              0 === b.data.index
                ? 0
                : b.data.index || a.index() * this.options.slidesToScroll;
            this.slideHandler(this.checkNavigable(f), !1, e),
              a.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (a.prototype.checkNavigable = function (b) {
        var a, c;
        if (((a = this.getNavigableIndexes()), (c = 0), b > a[a.length - 1]))
          b = a[a.length - 1];
        else
          for (var d in a) {
            if (b < a[d]) {
              b = c;
              break;
            }
            c = a[d];
          }
        return b;
      }),
      (a.prototype.cleanUpEvents = function () {
        this.options.dots &&
          null !== this.$dots &&
          ($("li", this.$dots)
            .off("click.slick", this.changeSlide)
            .off("mouseenter.slick", $.proxy(this.interrupt, this, !0))
            .off("mouseleave.slick", $.proxy(this.interrupt, this, !1)),
          !0 === this.options.accessibility &&
            this.$dots.off("keydown.slick", this.keyHandler)),
          this.$slider.off("focus.slick blur.slick"),
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow &&
              this.$prevArrow.off("click.slick", this.changeSlide),
            this.$nextArrow &&
              this.$nextArrow.off("click.slick", this.changeSlide),
            !0 === this.options.accessibility &&
              (this.$prevArrow &&
                this.$prevArrow.off("keydown.slick", this.keyHandler),
              this.$nextArrow &&
                this.$nextArrow.off("keydown.slick", this.keyHandler))),
          this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler),
          this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler),
          this.$list.off("touchend.slick mouseup.slick", this.swipeHandler),
          this.$list.off(
            "touchcancel.slick mouseleave.slick",
            this.swipeHandler
          ),
          this.$list.off("click.slick", this.clickHandler),
          $(document).off(this.visibilityChange, this.visibility),
          this.cleanUpSlideEvents(),
          !0 === this.options.accessibility &&
            this.$list.off("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            $(this.$slideTrack)
              .children()
              .off("click.slick", this.selectHandler),
          $(window).off(
            "orientationchange.slick.slick-" + this.instanceUid,
            this.orientationChange
          ),
          $(window).off("resize.slick.slick-" + this.instanceUid, this.resize),
          $("[draggable!=true]", this.$slideTrack).off(
            "dragstart",
            this.preventDefault
          ),
          $(window).off(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          );
      }),
      (a.prototype.cleanUpSlideEvents = function () {
        this.$list.off("mouseenter.slick", $.proxy(this.interrupt, this, !0)),
          this.$list.off("mouseleave.slick", $.proxy(this.interrupt, this, !1));
      }),
      (a.prototype.cleanUpRows = function () {
        var a;
        this.options.rows > 1 &&
          ((a = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(a));
      }),
      (a.prototype.clickHandler = function (a) {
        !1 === this.shouldClick &&
          (a.stopImmediatePropagation(),
          a.stopPropagation(),
          a.preventDefault());
      }),
      (a.prototype.destroy = function (a) {
        var _ = this;
        _.autoPlayClear(),
          (_.touchObject = {}),
          _.cleanUpEvents(),
          $(".slick-cloned", _.$slider).detach(),
          _.$dots && _.$dots.remove(),
          _.$prevArrow &&
            _.$prevArrow.length &&
            (_.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.remove()),
          _.$nextArrow &&
            _.$nextArrow.length &&
            (_.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.remove()),
          _.$slides &&
            (_.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                $(this).attr("style", $(this).data("originalStyling"));
              }),
            _.$slideTrack.children(this.options.slide).detach(),
            _.$slideTrack.detach(),
            _.$list.detach(),
            _.$slider.append(_.$slides)),
          _.cleanUpRows(),
          _.$slider.removeClass("slick-slider"),
          _.$slider.removeClass("slick-initialized"),
          _.$slider.removeClass("slick-dotted"),
          (_.unslicked = !0),
          a || _.$slider.trigger("destroy", [_]);
      }),
      (a.prototype.disableTransition = function (b) {
        var _ = this,
          a = {};
        (a[_.transitionType] = ""),
          !1 === _.options.fade ? _.$slideTrack.css(a) : _.$slides.eq(b).css(a);
      }),
      (a.prototype.fadeSlide = function (a, b) {
        var _ = this;
        !1 === _.cssTransitions
          ? (_.$slides.eq(a).css({ zIndex: _.options.zIndex }),
            _.$slides
              .eq(a)
              .animate({ opacity: 1 }, _.options.speed, _.options.easing, b))
          : (_.applyTransition(a),
            _.$slides.eq(a).css({ opacity: 1, zIndex: _.options.zIndex }),
            b &&
              setTimeout(function () {
                _.disableTransition(a), b.call();
              }, _.options.speed));
      }),
      (a.prototype.fadeSlideOut = function (a) {
        !1 === this.cssTransitions
          ? this.$slides
              .eq(a)
              .animate(
                { opacity: 0, zIndex: this.options.zIndex - 2 },
                this.options.speed,
                this.options.easing
              )
          : (this.applyTransition(a),
            this.$slides
              .eq(a)
              .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
      }),
      (a.prototype.filterSlides = a.prototype.slickFilter =
        function (a) {
          var _ = this;
          null !== a &&
            ((_.$slidesCache = _.$slides),
            _.unload(),
            _.$slideTrack.children(this.options.slide).detach(),
            _.$slidesCache.filter(a).appendTo(_.$slideTrack),
            _.reinit());
        }),
      (a.prototype.focusHandler = function () {
        var _ = this;
        _.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (a) {
            a.stopImmediatePropagation();
            var b = $(this);
            setTimeout(function () {
              _.options.pauseOnFocus &&
                ((_.focussed = b.is(":focus")), _.autoPlay());
            }, 0);
          });
      }),
      (a.prototype.getCurrent = a.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (a.prototype.getDotCount = function () {
        var b = 0,
          c = 0,
          a = 0;
        if (!0 === this.options.infinite) {
          if (this.slideCount <= this.options.slidesToShow) ++a;
          else
            for (; b < this.slideCount; )
              ++a,
                (b = c + this.options.slidesToScroll),
                (c +=
                  this.options.slidesToScroll <= this.options.slidesToShow
                    ? this.options.slidesToScroll
                    : this.options.slidesToShow);
        } else if (!0 === this.options.centerMode) a = this.slideCount;
        else if (this.options.asNavFor)
          for (; b < this.slideCount; )
            ++a,
              (b = c + this.options.slidesToScroll),
              (c +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
        else
          a =
            1 +
            Math.ceil(
              (this.slideCount - this.options.slidesToShow) /
                this.options.slidesToScroll
            );
        return a - 1;
      }),
      (a.prototype.getLeft = function (a) {
        var e,
          c,
          b,
          f,
          _ = this,
          d = 0;
        return (
          (_.slideOffset = 0),
          (c = _.$slides.first().outerHeight(!0)),
          !0 === _.options.infinite
            ? (_.slideCount > _.options.slidesToShow &&
                ((_.slideOffset = -(_.slideWidth * _.options.slidesToShow * 1)),
                (f = -1),
                !0 === _.options.vertical &&
                  !0 === _.options.centerMode &&
                  (2 === _.options.slidesToShow
                    ? (f = -1.5)
                    : 1 === _.options.slidesToShow && (f = -2)),
                (d = c * _.options.slidesToShow * f)),
              _.slideCount % _.options.slidesToScroll != 0 &&
                a + _.options.slidesToScroll > _.slideCount &&
                _.slideCount > _.options.slidesToShow &&
                (a > _.slideCount
                  ? ((_.slideOffset = -(
                      (_.options.slidesToShow - (a - _.slideCount)) *
                      _.slideWidth *
                      1
                    )),
                    (d = -(
                      (_.options.slidesToShow - (a - _.slideCount)) *
                      c *
                      1
                    )))
                  : ((_.slideOffset = -(
                      (_.slideCount % _.options.slidesToScroll) *
                      _.slideWidth *
                      1
                    )),
                    (d = -(
                      (_.slideCount % _.options.slidesToScroll) *
                      c *
                      1
                    )))))
            : a + _.options.slidesToShow > _.slideCount &&
              ((_.slideOffset =
                (a + _.options.slidesToShow - _.slideCount) * _.slideWidth),
              (d = (a + _.options.slidesToShow - _.slideCount) * c)),
          _.slideCount <= _.options.slidesToShow &&
            ((_.slideOffset = 0), (d = 0)),
          !0 === _.options.centerMode && _.slideCount <= _.options.slidesToShow
            ? (_.slideOffset =
                (_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 -
                (_.slideWidth * _.slideCount) / 2)
            : !0 === _.options.centerMode && !0 === _.options.infinite
            ? (_.slideOffset +=
                _.slideWidth * Math.floor(_.options.slidesToShow / 2) -
                _.slideWidth)
            : !0 === _.options.centerMode &&
              ((_.slideOffset = 0),
              (_.slideOffset +=
                _.slideWidth * Math.floor(_.options.slidesToShow / 2))),
          (e =
            !1 === _.options.vertical
              ? -(a * _.slideWidth * 1) + _.slideOffset
              : -(a * c * 1) + d),
          !0 === _.options.variableWidth &&
            ((b =
              _.slideCount <= _.options.slidesToShow ||
              !1 === _.options.infinite
                ? _.$slideTrack.children(".slick-slide").eq(a)
                : _.$slideTrack
                    .children(".slick-slide")
                    .eq(a + _.options.slidesToShow)),
            (e =
              !0 === _.options.rtl
                ? b[0]
                  ? -((_.$slideTrack.width() - b[0].offsetLeft - b.width()) * 1)
                  : 0
                : b[0]
                ? -1 * b[0].offsetLeft
                : 0),
            !0 === _.options.centerMode &&
              ((b =
                _.slideCount <= _.options.slidesToShow ||
                !1 === _.options.infinite
                  ? _.$slideTrack.children(".slick-slide").eq(a)
                  : _.$slideTrack
                      .children(".slick-slide")
                      .eq(a + _.options.slidesToShow + 1)),
              (e =
                !0 === _.options.rtl
                  ? b[0]
                    ? -(
                        (_.$slideTrack.width() - b[0].offsetLeft - b.width()) *
                        1
                      )
                    : 0
                  : b[0]
                  ? -1 * b[0].offsetLeft
                  : 0),
              (e += (_.$list.width() - b.outerWidth()) / 2))),
          e
        );
      }),
      (a.prototype.getOption = a.prototype.slickGetOption =
        function (a) {
          return this.options[a];
        }),
      (a.prototype.getNavigableIndexes = function () {
        var b,
          a = 0,
          c = 0,
          d = [];
        for (
          !1 === this.options.infinite
            ? (b = this.slideCount)
            : ((a = -1 * this.options.slidesToScroll),
              (c = -1 * this.options.slidesToScroll),
              (b = 2 * this.slideCount));
          a < b;

        )
          d.push(a),
            (a = c + this.options.slidesToScroll),
            (c +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
        return d;
      }),
      (a.prototype.getSlick = function () {
        return this;
      }),
      (a.prototype.getSlideCount = function () {
        var a,
          b,
          _ = this;
        return ((b =
          !0 === _.options.centerMode
            ? _.slideWidth * Math.floor(_.options.slidesToShow / 2)
            : 0),
        !0 === _.options.swipeToSlide)
          ? (_.$slideTrack.find(".slick-slide").each(function (d, c) {
              if (c.offsetLeft - b + $(c).outerWidth() / 2 > -1 * _.swipeLeft)
                return (a = c), !1;
            }),
            Math.abs($(a).attr("data-slick-index") - _.currentSlide) || 1)
          : _.options.slidesToScroll;
      }),
      (a.prototype.goTo = a.prototype.slickGoTo =
        function (a, b) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(a) } },
            b
          );
        }),
      (a.prototype.init = function (a) {
        var _ = this;
        $(_.$slider).hasClass("slick-initialized") ||
          ($(_.$slider).addClass("slick-initialized"),
          _.buildRows(),
          _.buildOut(),
          _.setProps(),
          _.startLoad(),
          _.loadSlider(),
          _.initializeEvents(),
          _.updateArrows(),
          _.updateDots(),
          _.checkResponsive(!0),
          _.focusHandler()),
          a && _.$slider.trigger("init", [_]),
          !0 === _.options.accessibility && _.initADA(),
          _.options.autoplay && ((_.paused = !1), _.autoPlay());
      }),
      (a.prototype.initADA = function () {
        var _ = this,
          c = Math.ceil(_.slideCount / _.options.slidesToShow),
          d = _.getNavigableIndexes().filter(function (a) {
            return a >= 0 && a < _.slideCount;
          });
        _.$slides
          .add(_.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== _.$dots &&
            (_.$slides
              .not(_.$slideTrack.find(".slick-cloned"))
              .each(function (a) {
                var b = d.indexOf(a);
                $(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + _.instanceUid + a,
                  tabindex: -1,
                }),
                  -1 !== b &&
                    $(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + _.instanceUid + b,
                    });
              }),
            _.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (a) {
                var b = d[a];
                $(this).attr({ role: "presentation" }),
                  $(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + _.instanceUid + a,
                      "aria-controls": "slick-slide" + _.instanceUid + b,
                      "aria-label": a + 1 + " of " + c,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(_.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var a = _.currentSlide, b = a + _.options.slidesToShow; a < b; a++)
          _.$slides.eq(a).attr("tabindex", 0);
        _.activateADA();
      }),
      (a.prototype.initArrowEvents = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, this.changeSlide),
          this.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, this.changeSlide),
          !0 === this.options.accessibility &&
            (this.$prevArrow.on("keydown.slick", this.keyHandler),
            this.$nextArrow.on("keydown.slick", this.keyHandler)));
      }),
      (a.prototype.initDotEvents = function () {
        !0 === this.options.dots &&
          ($("li", this.$dots).on(
            "click.slick",
            { message: "index" },
            this.changeSlide
          ),
          !0 === this.options.accessibility &&
            this.$dots.on("keydown.slick", this.keyHandler)),
          !0 === this.options.dots &&
            !0 === this.options.pauseOnDotsHover &&
            $("li", this.$dots)
              .on("mouseenter.slick", $.proxy(this.interrupt, this, !0))
              .on("mouseleave.slick", $.proxy(this.interrupt, this, !1));
      }),
      (a.prototype.initSlideEvents = function () {
        this.options.pauseOnHover &&
          (this.$list.on("mouseenter.slick", $.proxy(this.interrupt, this, !0)),
          this.$list.on("mouseleave.slick", $.proxy(this.interrupt, this, !1)));
      }),
      (a.prototype.initializeEvents = function () {
        this.initArrowEvents(),
          this.initDotEvents(),
          this.initSlideEvents(),
          this.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on("click.slick", this.clickHandler),
          $(document).on(this.visibilityChange, $.proxy(this.visibility, this)),
          !0 === this.options.accessibility &&
            this.$list.on("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            $(this.$slideTrack)
              .children()
              .on("click.slick", this.selectHandler),
          $(window).on(
            "orientationchange.slick.slick-" + this.instanceUid,
            $.proxy(this.orientationChange, this)
          ),
          $(window).on(
            "resize.slick.slick-" + this.instanceUid,
            $.proxy(this.resize, this)
          ),
          $("[draggable!=true]", this.$slideTrack).on(
            "dragstart",
            this.preventDefault
          ),
          $(window).on(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          ),
          $(this.setPosition);
      }),
      (a.prototype.initUI = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.show(), this.$nextArrow.show()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.show();
      }),
      (a.prototype.keyHandler = function (a) {
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === a.keyCode && !0 === this.options.accessibility
            ? this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "next" : "previous",
                },
              })
            : 39 === a.keyCode &&
              !0 === this.options.accessibility &&
              this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "previous" : "next",
                },
              }));
      }),
      (a.prototype.lazyLoad = function () {
        var c,
          a,
          b,
          _ = this;
        function d(a) {
          $("img[data-lazy]", a).each(function () {
            var c = $(this),
              b = $(this).attr("data-lazy"),
              d = $(this).attr("data-srcset"),
              e = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
              a = document.createElement("img");
            (a.onload = function () {
              c.animate({ opacity: 0 }, 100, function () {
                d && (c.attr("srcset", d), e && c.attr("sizes", e)),
                  c.attr("src", b).animate({ opacity: 1 }, 200, function () {
                    c.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  _.$slider.trigger("lazyLoaded", [_, c, b]);
              });
            }),
              (a.onerror = function () {
                c
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  _.$slider.trigger("lazyLoadError", [_, c, b]);
              }),
              (a.src = b);
          });
        }
        if (
          (!0 === _.options.centerMode
            ? !0 === _.options.infinite
              ? (b =
                  (a = _.currentSlide + (_.options.slidesToShow / 2 + 1)) +
                  _.options.slidesToShow +
                  2)
              : ((a = Math.max(
                  0,
                  _.currentSlide - (_.options.slidesToShow / 2 + 1)
                )),
                (b = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide))
            : ((b = Math.ceil(
                (a = _.options.infinite
                  ? _.options.slidesToShow + _.currentSlide
                  : _.currentSlide) + _.options.slidesToShow
              )),
              !0 === _.options.fade &&
                (a > 0 && a--, b <= _.slideCount && b++)),
          (c = _.$slider.find(".slick-slide").slice(a, b)),
          "anticipated" === _.options.lazyLoad)
        )
          for (
            var e = a - 1, f = b, g = _.$slider.find(".slick-slide"), h = 0;
            h < _.options.slidesToScroll;
            h++
          )
            e < 0 && (e = _.slideCount - 1),
              (c = (c = c.add(g.eq(e))).add(g.eq(f))),
              e--,
              f++;
        d(c),
          _.slideCount <= _.options.slidesToShow
            ? d(_.$slider.find(".slick-slide"))
            : _.currentSlide >= _.slideCount - _.options.slidesToShow
            ? d(
                _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow)
              )
            : 0 === _.currentSlide &&
              d(
                _.$slider
                  .find(".slick-cloned")
                  .slice(-1 * _.options.slidesToShow)
              );
      }),
      (a.prototype.loadSlider = function () {
        this.setPosition(),
          this.$slideTrack.css({ opacity: 1 }),
          this.$slider.removeClass("slick-loading"),
          this.initUI(),
          "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
      }),
      (a.prototype.next = a.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (a.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (a.prototype.pause = a.prototype.slickPause =
        function () {
          var _ = this;
          _.autoPlayClear(), (_.paused = !0);
        }),
      (a.prototype.play = a.prototype.slickPlay =
        function () {
          var _ = this;
          _.autoPlay(),
            (_.options.autoplay = !0),
            (_.paused = !1),
            (_.focussed = !1),
            (_.interrupted = !1);
        }),
      (a.prototype.postSlide = function (a) {
        var _ = this;
        !_.unslicked &&
          (_.$slider.trigger("afterChange", [_, a]),
          (_.animating = !1),
          _.slideCount > _.options.slidesToShow && _.setPosition(),
          (_.swipeLeft = null),
          _.options.autoplay && _.autoPlay(),
          !0 === _.options.accessibility &&
            (_.initADA(), _.options.focusOnChange)) &&
          $(_.$slides.get(_.currentSlide)).attr("tabindex", 0).focus();
      }),
      (a.prototype.prev = a.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (a.prototype.preventDefault = function (a) {
        a.preventDefault();
      }),
      (a.prototype.progressiveLazyLoad = function (c) {
        c = c || 1;
        var b,
          d,
          f,
          g,
          a,
          _ = this,
          e = $("img[data-lazy]", _.$slider);
        e.length
          ? ((d = (b = e.first()).attr("data-lazy")),
            (f = b.attr("data-srcset")),
            (g = b.attr("data-sizes") || _.$slider.attr("data-sizes")),
            (a = document.createElement("img")),
            (a.onload = function () {
              f && (b.attr("srcset", f), g && b.attr("sizes", g)),
                b
                  .attr("src", d)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === _.options.adaptiveHeight && _.setPosition(),
                _.$slider.trigger("lazyLoaded", [_, b, d]),
                _.progressiveLazyLoad();
            }),
            (a.onerror = function () {
              c < 3
                ? setTimeout(function () {
                    _.progressiveLazyLoad(c + 1);
                  }, 500)
                : (b
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  _.$slider.trigger("lazyLoadError", [_, b, d]),
                  _.progressiveLazyLoad());
            }),
            (a.src = d))
          : _.$slider.trigger("allImagesLoaded", [_]);
      }),
      (a.prototype.refresh = function (c) {
        var a,
          b,
          _ = this;
        (b = _.slideCount - _.options.slidesToShow),
          !_.options.infinite && _.currentSlide > b && (_.currentSlide = b),
          _.slideCount <= _.options.slidesToShow && (_.currentSlide = 0),
          (a = _.currentSlide),
          _.destroy(!0),
          $.extend(_, _.initials, { currentSlide: a }),
          _.init(),
          c || _.changeSlide({ data: { message: "index", index: a } }, !1);
      }),
      (a.prototype.registerBreakpoints = function () {
        var c,
          d,
          a,
          _ = this,
          b = _.options.responsive || null;
        if ("array" === $.type(b) && b.length) {
          for (c in ((_.respondTo = _.options.respondTo || "window"), b))
            if (((a = _.breakpoints.length - 1), b.hasOwnProperty(c))) {
              for (d = b[c].breakpoint; a >= 0; )
                _.breakpoints[a] &&
                  _.breakpoints[a] === d &&
                  _.breakpoints.splice(a, 1),
                  a--;
              _.breakpoints.push(d), (_.breakpointSettings[d] = b[c].settings);
            }
          _.breakpoints.sort(function (a, b) {
            return _.options.mobileFirst ? a - b : b - a;
          });
        }
      }),
      (a.prototype.reinit = function () {
        var _ = this;
        (_.$slides = _.$slideTrack
          .children(_.options.slide)
          .addClass("slick-slide")),
          (_.slideCount = _.$slides.length),
          _.currentSlide >= _.slideCount &&
            0 !== _.currentSlide &&
            (_.currentSlide = _.currentSlide - _.options.slidesToScroll),
          _.slideCount <= _.options.slidesToShow && (_.currentSlide = 0),
          _.registerBreakpoints(),
          _.setProps(),
          _.setupInfinite(),
          _.buildArrows(),
          _.updateArrows(),
          _.initArrowEvents(),
          _.buildDots(),
          _.updateDots(),
          _.initDotEvents(),
          _.cleanUpSlideEvents(),
          _.initSlideEvents(),
          _.checkResponsive(!1, !0),
          !0 === _.options.focusOnSelect &&
            $(_.$slideTrack).children().on("click.slick", _.selectHandler),
          _.setSlideClasses(
            "number" == typeof _.currentSlide ? _.currentSlide : 0
          ),
          _.setPosition(),
          _.focusHandler(),
          (_.paused = !_.options.autoplay),
          _.autoPlay(),
          _.$slider.trigger("reInit", [_]);
      }),
      (a.prototype.resize = function () {
        var _ = this;
        $(window).width() !== _.windowWidth &&
          (clearTimeout(_.windowDelay),
          (_.windowDelay = window.setTimeout(function () {
            (_.windowWidth = $(window).width()),
              _.checkResponsive(),
              _.unslicked || _.setPosition();
          }, 50)));
      }),
      (a.prototype.removeSlide = a.prototype.slickRemove =
        function (a, b, c) {
          var _ = this;
          if (
            ((a =
              "boolean" == typeof a
                ? !0 === (b = a)
                  ? 0
                  : _.slideCount - 1
                : !0 === b
                ? --a
                : a),
            _.slideCount < 1 || a < 0 || a > _.slideCount - 1)
          )
            return !1;
          _.unload(),
            !0 === c
              ? _.$slideTrack.children().remove()
              : _.$slideTrack.children(this.options.slide).eq(a).remove(),
            (_.$slides = _.$slideTrack.children(this.options.slide)),
            _.$slideTrack.children(this.options.slide).detach(),
            _.$slideTrack.append(_.$slides),
            (_.$slidesCache = _.$slides),
            _.reinit();
        }),
      (a.prototype.setCSS = function (b) {
        var c,
          d,
          _ = this,
          a = {};
        !0 === _.options.rtl && (b = -b),
          (c = "left" == _.positionProp ? Math.ceil(b) + "px" : "0px"),
          (d = "top" == _.positionProp ? Math.ceil(b) + "px" : "0px"),
          (a[_.positionProp] = b),
          !1 === _.transformsEnabled
            ? _.$slideTrack.css(a)
            : ((a = {}),
              !1 === _.cssTransitions
                ? ((a[_.animType] = "translate(" + c + ", " + d + ")"),
                  _.$slideTrack.css(a))
                : ((a[_.animType] = "translate3d(" + c + ", " + d + ", 0px)"),
                  _.$slideTrack.css(a)));
      }),
      (a.prototype.setDimensions = function () {
        var _ = this;
        !1 === _.options.vertical
          ? !0 === _.options.centerMode &&
            _.$list.css({ padding: "0px " + _.options.centerPadding })
          : (_.$list.height(
              _.$slides.first().outerHeight(!0) * _.options.slidesToShow
            ),
            !0 === _.options.centerMode &&
              _.$list.css({ padding: _.options.centerPadding + " 0px" })),
          (_.listWidth = _.$list.width()),
          (_.listHeight = _.$list.height()),
          !1 === _.options.vertical && !1 === _.options.variableWidth
            ? ((_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow)),
              _.$slideTrack.width(
                Math.ceil(
                  _.slideWidth * _.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === _.options.variableWidth
            ? _.$slideTrack.width(5e3 * _.slideCount)
            : ((_.slideWidth = Math.ceil(_.listWidth)),
              _.$slideTrack.height(
                Math.ceil(
                  _.$slides.first().outerHeight(!0) *
                    _.$slideTrack.children(".slick-slide").length
                )
              ));
        var a = _.$slides.first().outerWidth(!0) - _.$slides.first().width();
        !1 === _.options.variableWidth &&
          _.$slideTrack.children(".slick-slide").width(_.slideWidth - a);
      }),
      (a.prototype.setFade = function () {
        var a,
          _ = this;
        _.$slides.each(function (c, b) {
          (a = -(_.slideWidth * c * 1)),
            !0 === _.options.rtl
              ? $(b).css({
                  position: "relative",
                  right: a,
                  top: 0,
                  zIndex: _.options.zIndex - 2,
                  opacity: 0,
                })
              : $(b).css({
                  position: "relative",
                  left: a,
                  top: 0,
                  zIndex: _.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          _.$slides
            .eq(_.currentSlide)
            .css({ zIndex: _.options.zIndex - 1, opacity: 1 });
      }),
      (a.prototype.setHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var a = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.css("height", a);
        }
      }),
      (a.prototype.setOption = a.prototype.slickSetOption =
        function () {
          var c,
            d,
            e,
            a,
            b,
            _ = this,
            f = !1;
          if (
            ("object" === $.type(arguments[0])
              ? ((e = arguments[0]), (f = arguments[1]), (b = "multiple"))
              : "string" === $.type(arguments[0]) &&
                ((e = arguments[0]),
                (a = arguments[1]),
                (f = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === $.type(arguments[1])
                  ? (b = "responsive")
                  : void 0 !== arguments[1] && (b = "single")),
            "single" === b)
          )
            _.options[e] = a;
          else if ("multiple" === b)
            $.each(e, function (a, b) {
              _.options[a] = b;
            });
          else if ("responsive" === b)
            for (d in a)
              if ("array" !== $.type(_.options.responsive))
                _.options.responsive = [a[d]];
              else {
                for (c = _.options.responsive.length - 1; c >= 0; )
                  _.options.responsive[c].breakpoint === a[d].breakpoint &&
                    _.options.responsive.splice(c, 1),
                    c--;
                _.options.responsive.push(a[d]);
              }
          f && (_.unload(), _.reinit());
        }),
      (a.prototype.setPosition = function () {
        this.setDimensions(),
          this.setHeight(),
          !1 === this.options.fade
            ? this.setCSS(this.getLeft(this.currentSlide))
            : this.setFade(),
          this.$slider.trigger("setPosition", [this]);
      }),
      (a.prototype.setProps = function () {
        var _ = this,
          a = document.body.style;
        (_.positionProp = !0 === _.options.vertical ? "top" : "left"),
          "top" === _.positionProp
            ? _.$slider.addClass("slick-vertical")
            : _.$slider.removeClass("slick-vertical"),
          (void 0 !== a.WebkitTransition ||
            void 0 !== a.MozTransition ||
            void 0 !== a.msTransition) &&
            !0 === _.options.useCSS &&
            (_.cssTransitions = !0),
          _.options.fade &&
            ("number" == typeof _.options.zIndex
              ? _.options.zIndex < 3 && (_.options.zIndex = 3)
              : (_.options.zIndex = _.defaults.zIndex)),
          void 0 !== a.OTransform &&
            ((_.animType = "OTransform"),
            (_.transformType = "-o-transform"),
            (_.transitionType = "OTransition"),
            void 0 === a.perspectiveProperty &&
              void 0 === a.webkitPerspective &&
              (_.animType = !1)),
          void 0 !== a.MozTransform &&
            ((_.animType = "MozTransform"),
            (_.transformType = "-moz-transform"),
            (_.transitionType = "MozTransition"),
            void 0 === a.perspectiveProperty &&
              void 0 === a.MozPerspective &&
              (_.animType = !1)),
          void 0 !== a.webkitTransform &&
            ((_.animType = "webkitTransform"),
            (_.transformType = "-webkit-transform"),
            (_.transitionType = "webkitTransition"),
            void 0 === a.perspectiveProperty &&
              void 0 === a.webkitPerspective &&
              (_.animType = !1)),
          void 0 !== a.msTransform &&
            ((_.animType = "msTransform"),
            (_.transformType = "-ms-transform"),
            (_.transitionType = "msTransition"),
            void 0 === a.msTransform && (_.animType = !1)),
          void 0 !== a.transform &&
            !1 !== _.animType &&
            ((_.animType = "transform"),
            (_.transformType = "transform"),
            (_.transitionType = "transition")),
          (_.transformsEnabled =
            _.options.useTransform && null !== _.animType && !1 !== _.animType);
      }),
      (a.prototype.setSlideClasses = function (a) {
        var d, b, c, e;
        if (
          ((b = this.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          this.$slides.eq(a).addClass("slick-current"),
          !0 === this.options.centerMode)
        ) {
          var f = this.options.slidesToShow % 2 == 0 ? 1 : 0;
          (d = Math.floor(this.options.slidesToShow / 2)),
            !0 === this.options.infinite &&
              (a >= d && a <= this.slideCount - 1 - d
                ? this.$slides
                    .slice(a - d + f, a + d + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((c = this.options.slidesToShow + a),
                  b
                    .slice(c - d + 1 + f, c + d + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === a
                ? b
                    .eq(b.length - 1 - this.options.slidesToShow)
                    .addClass("slick-center")
                : a === this.slideCount - 1 &&
                  b.eq(this.options.slidesToShow).addClass("slick-center")),
            this.$slides.eq(a).addClass("slick-center");
        } else
          a >= 0 && a <= this.slideCount - this.options.slidesToShow
            ? this.$slides
                .slice(a, a + this.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : b.length <= this.options.slidesToShow
            ? b.addClass("slick-active").attr("aria-hidden", "false")
            : ((e = this.slideCount % this.options.slidesToShow),
              (c =
                !0 === this.options.infinite
                  ? this.options.slidesToShow + a
                  : a),
              this.options.slidesToShow == this.options.slidesToScroll &&
              this.slideCount - a < this.options.slidesToShow
                ? b
                    .slice(c - (this.options.slidesToShow - e), c + e)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : b
                    .slice(c, c + this.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" === this.options.lazyLoad ||
          "anticipated" === this.options.lazyLoad) &&
          this.lazyLoad();
      }),
      (a.prototype.setupInfinite = function () {
        var a,
          b,
          c,
          _ = this;
        if (
          (!0 === _.options.fade && (_.options.centerMode = !1),
          !0 === _.options.infinite &&
            !1 === _.options.fade &&
            ((b = null), _.slideCount > _.options.slidesToShow))
        ) {
          for (
            c =
              !0 === _.options.centerMode
                ? _.options.slidesToShow + 1
                : _.options.slidesToShow,
              a = _.slideCount;
            a > _.slideCount - c;
            a -= 1
          )
            (b = a - 1),
              $(_.$slides[b])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", b - _.slideCount)
                .prependTo(_.$slideTrack)
                .addClass("slick-cloned");
          for (a = 0; a < c + _.slideCount; a += 1)
            (b = a),
              $(_.$slides[b])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", b + _.slideCount)
                .appendTo(_.$slideTrack)
                .addClass("slick-cloned");
          _.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              $(this).attr("id", "");
            });
        }
      }),
      (a.prototype.interrupt = function (a) {
        var _ = this;
        a || _.autoPlay(), (_.interrupted = a);
      }),
      (a.prototype.selectHandler = function (b) {
        var c = $(b.target).is(".slick-slide")
            ? $(b.target)
            : $(b.target).parents(".slick-slide"),
          a = parseInt(c.attr("data-slick-index"));
        if ((a || (a = 0), this.slideCount <= this.options.slidesToShow)) {
          this.slideHandler(a, !1, !0);
          return;
        }
        this.slideHandler(a);
      }),
      (a.prototype.slideHandler = function (b, e, f) {
        var a,
          c,
          h,
          g,
          d,
          i = null,
          _ = this;
        if (
          ((e = e || !1),
          (!0 !== _.animating || !0 !== _.options.waitForAnimate) &&
            (!0 !== _.options.fade || _.currentSlide !== b))
        ) {
          if (
            (!1 === e && _.asNavFor(b),
            (a = b),
            (i = _.getLeft(a)),
            (g = _.getLeft(_.currentSlide)),
            (_.currentLeft = null === _.swipeLeft ? g : _.swipeLeft),
            (!1 === _.options.infinite &&
              !1 === _.options.centerMode &&
              (b < 0 || b > _.getDotCount() * _.options.slidesToScroll)) ||
              (!1 === _.options.infinite &&
                !0 === _.options.centerMode &&
                (b < 0 || b > _.slideCount - _.options.slidesToScroll)))
          ) {
            !1 === _.options.fade &&
              ((a = _.currentSlide),
              !0 !== f
                ? _.animateSlide(g, function () {
                    _.postSlide(a);
                  })
                : _.postSlide(a));
            return;
          }
          if (
            (_.options.autoplay && clearInterval(_.autoPlayTimer),
            (c =
              a < 0
                ? _.slideCount % _.options.slidesToScroll != 0
                  ? _.slideCount - (_.slideCount % _.options.slidesToScroll)
                  : _.slideCount + a
                : a >= _.slideCount
                ? _.slideCount % _.options.slidesToScroll != 0
                  ? 0
                  : a - _.slideCount
                : a),
            (_.animating = !0),
            _.$slider.trigger("beforeChange", [_, _.currentSlide, c]),
            (h = _.currentSlide),
            (_.currentSlide = c),
            _.setSlideClasses(_.currentSlide),
            _.options.asNavFor &&
              (d = (d = _.getNavTarget()).slick("getSlick")).slideCount <=
                d.options.slidesToShow &&
              d.setSlideClasses(_.currentSlide),
            _.updateDots(),
            _.updateArrows(),
            !0 === _.options.fade)
          ) {
            !0 !== f
              ? (_.fadeSlideOut(h),
                _.fadeSlide(c, function () {
                  _.postSlide(c);
                }))
              : _.postSlide(c),
              _.animateHeight();
            return;
          }
          !0 !== f
            ? _.animateSlide(i, function () {
                _.postSlide(c);
              })
            : _.postSlide(c);
        }
      }),
      (a.prototype.startLoad = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.hide(), this.$nextArrow.hide()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.hide(),
          this.$slider.addClass("slick-loading");
      }),
      (a.prototype.swipeDirection = function () {
        var b, c, a;
        return ((b = this.touchObject.startX - this.touchObject.curX),
        (c = Math.atan2(this.touchObject.startY - this.touchObject.curY, b)),
        (a = Math.round((180 * c) / Math.PI)),
        a < 0 && (a = 360 - Math.abs(a)),
        (a <= 45 && a >= 0) || (a <= 360 && a >= 315))
          ? !1 === this.options.rtl
            ? "left"
            : "right"
          : a >= 135 && a <= 225
          ? !1 === this.options.rtl
            ? "right"
            : "left"
          : !0 === this.options.verticalSwiping
          ? a >= 35 && a <= 135
            ? "down"
            : "up"
          : "vertical";
      }),
      (a.prototype.swipeEnd = function (c) {
        var a,
          b,
          _ = this;
        if (((_.dragging = !1), (_.swiping = !1), _.scrolling))
          return (_.scrolling = !1), !1;
        if (
          ((_.interrupted = !1),
          (_.shouldClick = !(_.touchObject.swipeLength > 10)),
          void 0 === _.touchObject.curX)
        )
          return !1;
        if (
          (!0 === _.touchObject.edgeHit &&
            _.$slider.trigger("edge", [_, _.swipeDirection()]),
          _.touchObject.swipeLength >= _.touchObject.minSwipe)
        ) {
          switch ((b = _.swipeDirection())) {
            case "left":
            case "down":
              (a = _.options.swipeToSlide
                ? _.checkNavigable(_.currentSlide + _.getSlideCount())
                : _.currentSlide + _.getSlideCount()),
                (_.currentDirection = 0);
              break;
            case "right":
            case "up":
              (a = _.options.swipeToSlide
                ? _.checkNavigable(_.currentSlide - _.getSlideCount())
                : _.currentSlide - _.getSlideCount()),
                (_.currentDirection = 1);
          }
          "vertical" != b &&
            (_.slideHandler(a),
            (_.touchObject = {}),
            _.$slider.trigger("swipe", [_, b]));
        } else
          _.touchObject.startX !== _.touchObject.curX &&
            (_.slideHandler(_.currentSlide), (_.touchObject = {}));
      }),
      (a.prototype.swipeHandler = function (a) {
        var _ = this;
        if (
          !1 !== _.options.swipe &&
          (!("ontouchend" in document) || !1 !== _.options.swipe) &&
          (!1 !== _.options.draggable || -1 === a.type.indexOf("mouse"))
        )
          switch (
            ((_.touchObject.fingerCount =
              a.originalEvent && void 0 !== a.originalEvent.touches
                ? a.originalEvent.touches.length
                : 1),
            (_.touchObject.minSwipe = _.listWidth / _.options.touchThreshold),
            !0 === _.options.verticalSwiping &&
              (_.touchObject.minSwipe =
                _.listHeight / _.options.touchThreshold),
            a.data.action)
          ) {
            case "start":
              _.swipeStart(a);
              break;
            case "move":
              _.swipeMove(a);
              break;
            case "end":
              _.swipeEnd(a);
          }
      }),
      (a.prototype.swipeMove = function (b) {
        var e,
          f,
          c,
          d,
          a,
          g,
          _ = this;
        return (
          (a = void 0 !== b.originalEvent ? b.originalEvent.touches : null),
          !!_.dragging &&
            !_.scrolling &&
            (!a || 1 === a.length) &&
            (((e = _.getLeft(_.currentSlide)),
            (_.touchObject.curX = void 0 !== a ? a[0].pageX : b.clientX),
            (_.touchObject.curY = void 0 !== a ? a[0].pageY : b.clientY),
            (_.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
            )),
            (g = Math.round(
              Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
            )),
            _.options.verticalSwiping || _.swiping || !(g > 4))
              ? (!0 === _.options.verticalSwiping &&
                  (_.touchObject.swipeLength = g),
                (f = _.swipeDirection()),
                void 0 !== b.originalEvent &&
                  _.touchObject.swipeLength > 4 &&
                  ((_.swiping = !0), b.preventDefault()),
                (d =
                  (!1 === _.options.rtl ? 1 : -1) *
                  (_.touchObject.curX > _.touchObject.startX ? 1 : -1)),
                !0 === _.options.verticalSwiping &&
                  (d = _.touchObject.curY > _.touchObject.startY ? 1 : -1),
                (c = _.touchObject.swipeLength),
                (_.touchObject.edgeHit = !1),
                !1 === _.options.infinite &&
                  ((0 === _.currentSlide && "right" === f) ||
                    (_.currentSlide >= _.getDotCount() && "left" === f)) &&
                  ((c = _.touchObject.swipeLength * _.options.edgeFriction),
                  (_.touchObject.edgeHit = !0)),
                !1 === _.options.vertical
                  ? (_.swipeLeft = e + c * d)
                  : (_.swipeLeft =
                      e + c * (_.$list.height() / _.listWidth) * d),
                !0 === _.options.verticalSwiping && (_.swipeLeft = e + c * d),
                !0 !== _.options.fade &&
                  !1 !== _.options.touchMove &&
                  (!0 === _.animating
                    ? ((_.swipeLeft = null), !1)
                    : void _.setCSS(_.swipeLeft)))
              : ((_.scrolling = !0), !1))
        );
      }),
      (a.prototype.swipeStart = function (a) {
        var b,
          _ = this;
        if (
          ((_.interrupted = !0),
          1 !== _.touchObject.fingerCount ||
            _.slideCount <= _.options.slidesToShow)
        )
          return (_.touchObject = {}), !1;
        void 0 !== a.originalEvent &&
          void 0 !== a.originalEvent.touches &&
          (b = a.originalEvent.touches[0]),
          (_.touchObject.startX = _.touchObject.curX =
            void 0 !== b ? b.pageX : a.clientX),
          (_.touchObject.startY = _.touchObject.curY =
            void 0 !== b ? b.pageY : a.clientY),
          (_.dragging = !0);
      }),
      (a.prototype.unfilterSlides = a.prototype.slickUnfilter =
        function () {
          null !== this.$slidesCache &&
            (this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.appendTo(this.$slideTrack),
            this.reinit());
        }),
      (a.prototype.unload = function () {
        $(".slick-cloned", this.$slider).remove(),
          this.$dots && this.$dots.remove(),
          this.$prevArrow &&
            this.htmlExpr.test(this.options.prevArrow) &&
            this.$prevArrow.remove(),
          this.$nextArrow &&
            this.htmlExpr.test(this.options.nextArrow) &&
            this.$nextArrow.remove(),
          this.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (a.prototype.unslick = function (a) {
        this.$slider.trigger("unslick", [this, a]), this.destroy();
      }),
      (a.prototype.updateArrows = function () {
        this.options.slidesToShow,
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            !this.options.infinite &&
            (this.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            this.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === this.currentSlide
              ? (this.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : this.currentSlide >=
                  this.slideCount - this.options.slidesToShow &&
                !1 === this.options.centerMode
              ? (this.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : this.currentSlide >= this.slideCount - 1 &&
                !0 === this.options.centerMode &&
                (this.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (a.prototype.updateDots = function () {
        null !== this.$dots &&
          (this.$dots.find("li").removeClass("slick-active").end(),
          this.$dots
            .find("li")
            .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (a.prototype.visibility = function () {
        var _ = this;
        _.options.autoplay &&
          (document[_.hidden] ? (_.interrupted = !0) : (_.interrupted = !1));
      }),
      ($.fn.slick = function () {
        var b,
          d,
          _ = this,
          c = arguments[0],
          e = Array.prototype.slice.call(arguments, 1),
          f = _.length;
        for (b = 0; b < f; b++)
          if (
            ("object" == typeof c || void 0 === c
              ? (_[b].slick = new a(_[b], c))
              : (d = _[b].slick[c].apply(_[b].slick, e)),
            void 0 !== d)
          )
            return d;
        return _;
      });
  });
var gallery = void 0;
function closeMenu() {
  $(".navbar-collapse").removeClass("show");
}
function highlightMenu(a) {
  $(".navbar .navbar-nav > .nav-item").removeClass("selected"),
    $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + a + "']")
      .parent()
      .addClass("selected");
}
function setupGallery() {
  gallery = $(".gallery-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: !0,
    arrows: !1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: !0,
          dots: !0,
        },
      },
      { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 575, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
  });
}
function openPage(a) {
  2 == a &&
    (void 0 == gallery || $(".gallery-slider").slick("unslick"),
    setupGallery()),
    $(".cd-hero-slider li").hide(),
    $('.cd-hero-slider li[data-page-no="' + a + '"]').fadeIn();
}
$(window).on("load", function () {
  $("body").addClass("loaded"), openPage(1);
}),
  jQuery(function () {
    $(".tm-page-link").on("click", function () {
      var a = $(this).data("page-no");
      openPage(a), highlightMenu(a);
    }),
      $(".navbar .navbar-nav > .nav-item > a.nav-link").on(
        "click",
        function (b) {
          var a = $(this).data("no");
          openPage(a), highlightMenu(a), closeMenu();
        }
      ),
      $("html").click(function (a) {
        closeMenu();
      });
  });
