(function (D, P) {
  typeof exports == "object" && typeof module < "u"
    ? P(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], P)
    : ((D = typeof globalThis < "u" ? globalThis : D || self), P((D.mdb = {})));
})(this, function (D) {
  "use strict";
  var fh = Object.defineProperty;
  var ph = (D, P, V) =>
    P in D
      ? fh(D, P, { enumerable: !0, configurable: !0, writable: !0, value: V })
      : (D[P] = V);
  var Rn = (D, P, V) => (ph(D, typeof P != "symbol" ? P + "" : P, V), V);
  /*!
   * MDB5
   * Version: FREE 7.1.0
   *
   *
   * Copyright: Material Design for Bootstrap
   * https://mdbootstrap.com/
   *
   * Read the license: https://mdbootstrap.com/general/license/
   *
   *
   * Documentation: https://mdbootstrap.com/docs/standard/
   *
   * Support: https://mdbootstrap.com/support/
   *
   * Contact: contact@mdbootstrap.com
   *
   */ const P = (() => {
      const n = {};
      let t = 1;
      return {
        set(e, i, s) {
          typeof e[i] > "u" && ((e[i] = { key: i, id: t }), t++),
            (n[e[i].id] = s);
        },
        get(e, i) {
          if (!e || typeof e[i] > "u") return null;
          const s = e[i];
          return s.key === i ? n[s.id] : null;
        },
        delete(e, i) {
          if (typeof e[i] > "u") return;
          const s = e[i];
          s.key === i && (delete n[s.id], delete e[i]);
        },
      };
    })(),
    V = {
      setData(n, t, e) {
        P.set(n, t, e);
      },
      getData(n, t) {
        return P.get(n, t);
      },
      removeData(n, t) {
        P.delete(n, t);
      },
    },
    Br = (n) =>
      n == null
        ? `${n}`
        : {}.toString
            .call(n)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    kn = (n) => {
      let t = n.getAttribute("data-mdb-target");
      if (!t || t === "#") {
        const e = n.getAttribute("href");
        t = e && e !== "#" ? e.trim() : null;
      }
      return t;
    },
    Re = (n) => {
      const t = kn(n);
      return t && document.querySelector(t) ? t : null;
    },
    xt = (n) => {
      const t = kn(n);
      return t ? document.querySelector(t) : null;
    },
    Hn = (n) =>
      !n || typeof n != "object"
        ? !1
        : (typeof n.jquery < "u" && (n = n[0]), typeof n.nodeType < "u"),
    Vn = (n) =>
      Hn(n)
        ? n.jquery
          ? n[0]
          : n
        : typeof n == "string" && n.length > 0
        ? document.querySelector(n)
        : null,
    Bn = (n, t, e) => {
      Object.keys(e).forEach((i) => {
        const s = e[i],
          r = t[i],
          o = r && Hn(r) ? "element" : Br(r);
        if (!new RegExp(s).test(o))
          throw new Error(
            `${n.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`
          );
      });
    },
    Wn = (n) => {
      if (!n) return !1;
      if (n.style && n.parentNode && n.parentNode.style) {
        const t = getComputedStyle(n),
          e = getComputedStyle(n.parentNode);
        return (
          t.display !== "none" &&
          e.display !== "none" &&
          t.visibility !== "hidden"
        );
      }
      return !1;
    },
    jn = (n) =>
      !n || n.nodeType !== Node.ELEMENT_NODE || n.classList.contains("disabled")
        ? !0
        : typeof n.disabled < "u"
        ? n.disabled
        : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false",
    Kn = () => {
      const { jQuery: n } = window;
      return n && !document.body.hasAttribute("data-mdb-no-jquery") ? n : null;
    },
    Yn = (n) => {
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", n)
        : n();
    };
  document.documentElement.dir;
  const mt = (n) => document.createElement(n),
    Wr = (n) => {
      Yn(() => {
        const t = Kn();
        if (t) {
          const e = n.NAME,
            i = t.fn[e];
          (t.fn[e] = n.jQueryInterface),
            (t.fn[e].Constructor = n),
            (t.fn[e].noConflict = () => ((t.fn[e] = i), n.jQueryInterface));
        }
      });
    },
    Pe = Kn(),
    jr = /[^.]*(?=\..*)\.|.*/,
    Fn = /\..*/,
    Kr = /::\d+$/,
    xe = {};
  let Un = 1;
  const Yr = { mouseenter: "mouseover", mouseleave: "mouseout" },
    zn = [
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
    ];
  function Gn(n, t) {
    return (t && `${t}::${Un++}`) || n.uidEvent || Un++;
  }
  function qn(n) {
    const t = Gn(n);
    return (n.uidEvent = t), (xe[t] = xe[t] || {}), xe[t];
  }
  function Fr(n, t) {
    return function e(i) {
      return (
        (i.delegateTarget = n), e.oneOff && u.off(n, i.type, t), t.apply(n, [i])
      );
    };
  }
  function Ur(n, t, e) {
    return function i(s) {
      const r = n.querySelectorAll(t);
      for (let { target: o } = s; o && o !== this; o = o.parentNode)
        for (let a = r.length; a--; "")
          if (r[a] === o)
            return (
              (s.delegateTarget = o),
              i.oneOff && u.off(n, s.type, e),
              e.apply(o, [s])
            );
      return null;
    };
  }
  function Xn(n, t, e = null) {
    const i = Object.keys(n);
    for (let s = 0, r = i.length; s < r; s++) {
      const o = n[i[s]];
      if (o.originalHandler === t && o.delegationSelector === e) return o;
    }
    return null;
  }
  function Qn(n, t, e) {
    const i = typeof t == "string",
      s = i ? e : t;
    let r = n.replace(Fn, "");
    const o = Yr[r];
    return o && (r = o), zn.indexOf(r) > -1 || (r = n), [i, s, r];
  }
  function Zn(n, t, e, i, s) {
    if (typeof t != "string" || !n) return;
    e || ((e = i), (i = null));
    const [r, o, a] = Qn(t, e, i),
      l = qn(n),
      d = l[a] || (l[a] = {}),
      c = Xn(d, o, r ? e : null);
    if (c) {
      c.oneOff = c.oneOff && s;
      return;
    }
    const f = Gn(o, t.replace(jr, "")),
      g = r ? Ur(n, e, i) : Fr(n, e);
    (g.delegationSelector = r ? e : null),
      (g.originalHandler = o),
      (g.oneOff = s),
      (g.uidEvent = f),
      (d[f] = g),
      n.addEventListener(a, g, r);
  }
  function ke(n, t, e, i, s) {
    const r = Xn(t[e], i, s);
    r && (n.removeEventListener(e, r, !!s), delete t[e][r.uidEvent]);
  }
  function zr(n, t, e, i) {
    const s = t[e] || {};
    Object.keys(s).forEach((r) => {
      if (r.indexOf(i) > -1) {
        const o = s[r];
        ke(n, t, e, o.originalHandler, o.delegationSelector);
      }
    });
  }
  const u = {
    on(n, t, e, i) {
      Zn(n, t, e, i, !1);
    },
    one(n, t, e, i) {
      Zn(n, t, e, i, !0);
    },
    extend(n, t, e) {
      t.forEach((i) => {
        u.on(n, `${i.name}.bs.${e}`, (s) => {
          const r = {};
          i.parametersToCopy &&
            i.parametersToCopy.forEach((a) => {
              r[a] = s[a];
            }),
            u.trigger(n, `${i.name}.mdb.${e}`, r).defaultPrevented &&
              s.preventDefault();
        });
      });
    },
    off(n, t, e, i) {
      if (typeof t != "string" || !n) return;
      const [s, r, o] = Qn(t, e, i),
        a = o !== t,
        l = qn(n),
        d = t.charAt(0) === ".";
      if (typeof r < "u") {
        if (!l || !l[o]) return;
        ke(n, l, o, r, s ? e : null);
        return;
      }
      d &&
        Object.keys(l).forEach((f) => {
          zr(n, l, f, t.slice(1));
        });
      const c = l[o] || {};
      Object.keys(c).forEach((f) => {
        const g = f.replace(Kr, "");
        if (!a || t.indexOf(g) > -1) {
          const b = c[f];
          ke(n, l, o, b.originalHandler, b.delegationSelector);
        }
      });
    },
    trigger(n, t, e) {
      if (typeof t != "string" || !n) return null;
      const i = t.replace(Fn, ""),
        s = t !== i,
        r = zn.indexOf(i) > -1;
      let o,
        a = !0,
        l = !0,
        d = !1,
        c = null;
      return (
        s &&
          Pe &&
          ((o = Pe.Event(t, e)),
          Pe(n).trigger(o),
          (a = !o.isPropagationStopped()),
          (l = !o.isImmediatePropagationStopped()),
          (d = o.isDefaultPrevented())),
        r
          ? ((c = document.createEvent("HTMLEvents")), c.initEvent(i, a, !0))
          : (c = new CustomEvent(t, { bubbles: a, cancelable: !0 })),
        typeof e < "u" &&
          Object.keys(e).forEach((f) => {
            Object.defineProperty(c, f, {
              get() {
                return e[f];
              },
            });
          }),
        d && c.preventDefault(),
        l && n.dispatchEvent(c),
        c.defaultPrevented && typeof o < "u" && o.preventDefault(),
        c
      );
    },
  };
  function Jn(n) {
    return n === "true"
      ? !0
      : n === "false"
      ? !1
      : n === Number(n).toString()
      ? Number(n)
      : n === "" || n === "null"
      ? null
      : n;
  }
  function He(n) {
    return n.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const _ = {
      setDataAttribute(n, t, e) {
        n.setAttribute(`data-mdb-${He(t)}`, e);
      },
      removeDataAttribute(n, t) {
        n.removeAttribute(`data-mdb-${He(t)}`);
      },
      getDataAttributes(n) {
        if (!n) return {};
        const t = { ...n.dataset };
        return (
          Object.keys(t)
            .filter((e) => e.startsWith("mdb"))
            .forEach((e) => {
              let i = e.replace(/^mdb/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (t[i] = Jn(t[e]));
            }),
          t
        );
      },
      getDataAttribute(n, t) {
        return Jn(n.getAttribute(`data-mdb-${He(t)}`));
      },
      offset(n) {
        const t = n.getBoundingClientRect();
        return {
          top: t.top + document.body.scrollTop,
          left: t.left + document.body.scrollLeft,
        };
      },
      position(n) {
        return { top: n.offsetTop, left: n.offsetLeft };
      },
      style(n, t) {
        Object.assign(n.style, t);
      },
      toggleClass(n, t) {
        n &&
          (n.classList.contains(t)
            ? n.classList.remove(t)
            : n.classList.add(t));
      },
      addClass(n, t) {
        n.classList.contains(t) || n.classList.add(t);
      },
      addStyle(n, t) {
        Object.keys(t).forEach((e) => {
          n.style[e] = t[e];
        });
      },
      removeClass(n, t) {
        n.classList.contains(t) && n.classList.remove(t);
      },
      hasClass(n, t) {
        return n.classList.contains(t);
      },
    },
    Gr = 3,
    v = {
      closest(n, t) {
        return n.closest(t);
      },
      matches(n, t) {
        return n.matches(t);
      },
      find(n, t = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(t, n));
      },
      findOne(n, t = document.documentElement) {
        return Element.prototype.querySelector.call(t, n);
      },
      children(n, t) {
        return [].concat(...n.children).filter((i) => i.matches(t));
      },
      parents(n, t) {
        const e = [];
        let i = n.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== Gr; )
          this.matches(i, t) && e.push(i), (i = i.parentNode);
        return e;
      },
      prev(n, t) {
        let e = n.previousElementSibling;
        for (; e; ) {
          if (e.matches(t)) return [e];
          e = e.previousElementSibling;
        }
        return [];
      },
      next(n, t) {
        let e = n.nextElementSibling;
        for (; e; ) {
          if (this.matches(e, t)) return [e];
          e = e.nextElementSibling;
        }
        return [];
      },
    },
    nt = new Map(),
    Ve = {
      set(n, t, e) {
        nt.has(n) || nt.set(n, new Map());
        const i = nt.get(n);
        if (!i.has(t) && i.size !== 0) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(i.keys())[0]
            }.`
          );
          return;
        }
        i.set(t, e);
      },
      get(n, t) {
        return (nt.has(n) && nt.get(n).get(t)) || null;
      },
      remove(n, t) {
        if (!nt.has(n)) return;
        const e = nt.get(n);
        e.delete(t), e.size === 0 && nt.delete(n);
      },
    },
    qr = 1e6,
    Xr = 1e3,
    Be = "transitionend",
    ti = (n) => (
      n &&
        window.CSS &&
        window.CSS.escape &&
        (n = n.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
      n
    ),
    Qr = (n) =>
      n == null
        ? `${n}`
        : Object.prototype.toString
            .call(n)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    Zr = (n) => {
      do n += Math.floor(Math.random() * qr);
      while (document.getElementById(n));
      return n;
    },
    Jr = (n) => {
      if (!n) return 0;
      let { transitionDuration: t, transitionDelay: e } =
        window.getComputedStyle(n);
      const i = Number.parseFloat(t),
        s = Number.parseFloat(e);
      return !i && !s
        ? 0
        : ((t = t.split(",")[0]),
          (e = e.split(",")[0]),
          (Number.parseFloat(t) + Number.parseFloat(e)) * Xr);
    },
    ei = (n) => {
      n.dispatchEvent(new Event(Be));
    },
    J = (n) =>
      !n || typeof n != "object"
        ? !1
        : (typeof n.jquery < "u" && (n = n[0]), typeof n.nodeType < "u"),
    it = (n) =>
      J(n)
        ? n.jquery
          ? n[0]
          : n
        : typeof n == "string" && n.length > 0
        ? document.querySelector(ti(n))
        : null,
    qt = (n) => {
      if (!J(n) || n.getClientRects().length === 0) return !1;
      const t =
          getComputedStyle(n).getPropertyValue("visibility") === "visible",
        e = n.closest("details:not([open])");
      if (!e) return t;
      if (e !== n) {
        const i = n.closest("summary");
        if ((i && i.parentNode !== e) || i === null) return !1;
      }
      return t;
    },
    Et = (n) =>
      !n || n.nodeType !== Node.ELEMENT_NODE || n.classList.contains("disabled")
        ? !0
        : typeof n.disabled < "u"
        ? n.disabled
        : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false",
    ni = (n) => {
      if (!document.documentElement.attachShadow) return null;
      if (typeof n.getRootNode == "function") {
        const t = n.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return n instanceof ShadowRoot
        ? n
        : n.parentNode
        ? ni(n.parentNode)
        : null;
    },
    Xt = () => {},
    kt = (n) => {
      n.offsetHeight;
    },
    to = () =>
      window.jQuery && !document.body.hasAttribute("data-mdb-no-jquery")
        ? window.jQuery
        : null,
    U = () => document.documentElement.dir === "rtl",
    B = (n, t = [], e = n) => (typeof n == "function" ? n(...t) : e),
    ii = (n, t, e = !0) => {
      if (!e) {
        B(n);
        return;
      }
      const i = 5,
        s = Jr(t) + i;
      let r = !1;
      const o = ({ target: a }) => {
        a === t && ((r = !0), t.removeEventListener(Be, o), B(n));
      };
      t.addEventListener(Be, o),
        setTimeout(() => {
          r || ei(t);
        }, s);
    },
    We = (n, t, e, i) => {
      const s = n.length;
      let r = n.indexOf(t);
      return r === -1
        ? !e && i
          ? n[s - 1]
          : n[0]
        : ((r += e ? 1 : -1),
          i && (r = (r + s) % s),
          n[Math.max(0, Math.min(r, s - 1))]);
    },
    eo = /[^.]*(?=\..*)\.|.*/,
    no = /\..*/,
    io = /::\d+$/,
    je = {};
  let si = 1;
  const ri = { mouseenter: "mouseover", mouseleave: "mouseout" },
    so = new Set([
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
  function oi(n, t) {
    return (t && `${t}::${si++}`) || n.uidEvent || si++;
  }
  function ai(n) {
    const t = oi(n);
    return (n.uidEvent = t), (je[t] = je[t] || {}), je[t];
  }
  function ro(n, t) {
    return function e(i) {
      return (
        Ye(i, { delegateTarget: n }),
        e.oneOff && h.off(n, i.type, t),
        t.apply(n, [i])
      );
    };
  }
  function oo(n, t, e) {
    return function i(s) {
      const r = n.querySelectorAll(t);
      for (let { target: o } = s; o && o !== this; o = o.parentNode)
        for (const a of r)
          if (a === o)
            return (
              Ye(s, { delegateTarget: o }),
              i.oneOff && h.off(n, s.type, t, e),
              e.apply(o, [s])
            );
    };
  }
  function li(n, t, e = null) {
    return Object.values(n).find(
      (i) => i.callable === t && i.delegationSelector === e
    );
  }
  function ci(n, t, e) {
    const i = typeof t == "string",
      s = i ? e : t || e;
    let r = di(n);
    return so.has(r) || (r = n), [i, s, r];
  }
  function ui(n, t, e, i, s) {
    if (typeof t != "string" || !n) return;
    let [r, o, a] = ci(t, e, i);
    t in ri &&
      (o = ((O) =>
        function (N) {
          if (
            !N.relatedTarget ||
            (N.relatedTarget !== N.delegateTarget &&
              !N.delegateTarget.contains(N.relatedTarget))
          )
            return O.call(this, N);
        })(o));
    const l = ai(n),
      d = l[a] || (l[a] = {}),
      c = li(d, o, r ? e : null);
    if (c) {
      c.oneOff = c.oneOff && s;
      return;
    }
    const f = oi(o, t.replace(eo, "")),
      g = r ? oo(n, e, o) : ro(n, o);
    (g.delegationSelector = r ? e : null),
      (g.callable = o),
      (g.oneOff = s),
      (g.uidEvent = f),
      (d[f] = g),
      n.addEventListener(a, g, r);
  }
  function Ke(n, t, e, i, s) {
    const r = li(t[e], i, s);
    r && (n.removeEventListener(e, r, !!s), delete t[e][r.uidEvent]);
  }
  function ao(n, t, e, i) {
    const s = t[e] || {};
    for (const [r, o] of Object.entries(s))
      r.includes(i) && Ke(n, t, e, o.callable, o.delegationSelector);
  }
  function di(n) {
    return (n = n.replace(no, "")), ri[n] || n;
  }
  const h = {
    on(n, t, e, i) {
      ui(n, t, e, i, !1);
    },
    one(n, t, e, i) {
      ui(n, t, e, i, !0);
    },
    off(n, t, e, i) {
      if (typeof t != "string" || !n) return;
      const [s, r, o] = ci(t, e, i),
        a = o !== t,
        l = ai(n),
        d = l[o] || {},
        c = t.startsWith(".");
      if (typeof r < "u") {
        if (!Object.keys(d).length) return;
        Ke(n, l, o, r, s ? e : null);
        return;
      }
      if (c) for (const f of Object.keys(l)) ao(n, l, f, t.slice(1));
      for (const [f, g] of Object.entries(d)) {
        const b = f.replace(io, "");
        (!a || t.includes(b)) && Ke(n, l, o, g.callable, g.delegationSelector);
      }
    },
    trigger(n, t, e) {
      if (typeof t != "string" || !n) return null;
      const i = to(),
        s = di(t),
        r = t !== s;
      let o = null,
        a = !0,
        l = !0,
        d = !1;
      r &&
        i &&
        ((o = i.Event(t, e)),
        i(n).trigger(o),
        (a = !o.isPropagationStopped()),
        (l = !o.isImmediatePropagationStopped()),
        (d = o.isDefaultPrevented()));
      const c = Ye(new Event(t, { bubbles: a, cancelable: !0 }), e);
      return (
        d && c.preventDefault(),
        l && n.dispatchEvent(c),
        c.defaultPrevented && o && o.preventDefault(),
        c
      );
    },
  };
  function Ye(n, t = {}) {
    for (const [e, i] of Object.entries(t))
      try {
        n[e] = i;
      } catch {
        Object.defineProperty(n, e, {
          configurable: !0,
          get() {
            return i;
          },
        });
      }
    return n;
  }
  function hi(n) {
    if (n === "true") return !0;
    if (n === "false") return !1;
    if (n === Number(n).toString()) return Number(n);
    if (n === "" || n === "null") return null;
    if (typeof n != "string") return n;
    try {
      return JSON.parse(decodeURIComponent(n));
    } catch {
      return n;
    }
  }
  function Fe(n) {
    return n.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const st = {
    setDataAttribute(n, t, e) {
      n.setAttribute(`data-mdb-${Fe(t)}`, e);
    },
    removeDataAttribute(n, t) {
      n.removeAttribute(`data-mdb-${Fe(t)}`);
    },
    getDataAttributes(n) {
      if (!n) return {};
      const t = {},
        e = Object.keys(n.dataset).filter(
          (i) => i.startsWith("mdb") && !i.startsWith("mdbConfig")
        );
      for (const i of e) {
        let s = i.replace(/^mdb/, "");
        (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)),
          (t[s] = hi(n.dataset[i]));
      }
      return t;
    },
    getDataAttribute(n, t) {
      return hi(n.getAttribute(`data-mdb-${Fe(t)}`));
    },
  };
  class Ht {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = J(e) ? st.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...(typeof i == "object" ? i : {}),
        ...(J(e) ? st.getDataAttributes(e) : {}),
        ...(typeof t == "object" ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [i, s] of Object.entries(e)) {
        const r = t[i],
          o = J(r) ? "element" : Qr(r);
        if (!new RegExp(s).test(o))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`
          );
      }
    }
  }
  const lo = "5.3.2";
  let G = class extends Ht {
    constructor(t, e) {
      super(),
        (t = it(t)),
        t &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          Ve.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      Ve.remove(this._element, this.constructor.DATA_KEY),
        h.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      ii(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return Ve.get(it(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, typeof e == "object" ? e : null)
      );
    }
    static get VERSION() {
      return lo;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  };
  const co = "button",
    uo = "active";
  let ho = class Ir extends G {
    static get NAME() {
      return co;
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle(uo)
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ir.getOrCreateInstance(this);
        t === "toggle" && e[t]();
      });
    }
  };
  const fi = (() => {
      const n = [];
      return {
        set(t) {
          n.push(t);
        },
        get(t) {
          return n.includes(t);
        },
      };
    })(),
    Qt = {
      set(n) {
        fi.set(n);
      },
      get(n) {
        return fi.get(n);
      },
    },
    fo = (n) => Qt.get(n),
    W = (n) => {
      fo(n.NAME) || pi(n, !0);
    },
    pi = (n, t = !1) => {
      if (!n || Qt.get(n.NAME)) return;
      Qt.set(n.NAME);
      const e = gt[n.NAME] || null,
        i = (e == null ? void 0 : e.isToggler) || !1;
      if ((Wr(n), e != null && e.advanced)) {
        e.advanced(n, e == null ? void 0 : e.selector);
        return;
      }
      if (i) {
        e.callback(n, e == null ? void 0 : e.selector);
        return;
      }
      t ||
        v.find(e == null ? void 0 : e.selector).forEach((s) => {
          let r = n.getInstance(s);
          r || ((r = new n(s)), e != null && e.onInit && r[e.onInit]());
        });
    };
  let gt;
  class po {
    constructor(t) {
      Rn(this, "init", (t) => {
        t.forEach((e) => pi(e));
      });
      Rn(this, "initMDB", (t, e = !1) => {
        const i = Object.keys(gt).map((s) => {
          if (!!document.querySelector(gt[s].selector)) {
            const o = t[gt[s].name];
            return (
              !o &&
                !Qt.get(s) &&
                e &&
                console.warn(
                  `Please import ${gt[s].name} from "MDB" package and add it to a object parameter inside "initMDB" function`
                ),
              o
            );
          }
          return null;
        });
        this.init(i);
      });
      gt = t;
    }
  }
  const _i = "button",
    Ue = `mdb.${_i}`,
    Vt = `.${Ue}`,
    mi = `click${Vt}`,
    bt = "transitionend",
    Ei = "mouseenter",
    gi = "mouseleave",
    _o = `hide${Vt}`,
    mo = `hidden${Vt}`,
    Eo = `show${Vt}`,
    go = `shown${Vt}`,
    bi = "active",
    bo = "shown",
    Zt = "fixed-action-btn",
    vo = ".fixed-action-btn:not(.smooth-scroll) > .btn-floating",
    To = "ul .btn",
    Ao = "ul";
  class Jt extends ho {
    constructor(t) {
      super(t),
        (this._fn = {}),
        this._element &&
          (V.setData(this._element, Ue, this),
          this._init(),
          _.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          W(this.constructor));
    }
    static get NAME() {
      return _i;
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let i = V.getData(this, Ue);
        const s = typeof t == "object" && t;
        if (
          !(!i && /dispose/.test(t)) &&
          (i || (i = new Jt(this, s)), typeof t == "string")
        ) {
          if (typeof i[t] > "u") throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
    get _actionButton() {
      return v.findOne(vo, this._element);
    }
    get _buttonListElements() {
      return v.find(To, this._element);
    }
    get _buttonList() {
      return v.findOne(Ao, this._element);
    }
    get _isTouchDevice() {
      return "ontouchstart" in document.documentElement;
    }
    show() {
      _.hasClass(this._element, Zt) &&
        (u.off(this._buttonList, bt),
        u.trigger(this._element, Eo),
        this._bindListOpenTransitionEnd(),
        _.addStyle(this._element, { height: `${this._fullContainerHeight}px` }),
        this._toggleVisibility(!0));
    }
    hide() {
      _.hasClass(this._element, Zt) &&
        (u.off(this._buttonList, bt),
        u.trigger(this._element, _o),
        this._bindListHideTransitionEnd(),
        this._toggleVisibility(!1));
    }
    dispose() {
      _.hasClass(this._element, Zt) &&
        (u.off(this._actionButton, mi),
        this._actionButton.removeEventListener(Ei, this._fn.mouseenter),
        this._element.removeEventListener(gi, this._fn.mouseleave)),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _init() {
      _.hasClass(this._element, Zt) &&
        (this._saveInitialHeights(),
        this._setInitialStyles(),
        this._bindInitialEvents());
    }
    _bindMouseEnter() {
      this._actionButton.addEventListener(
        Ei,
        (this._fn.mouseenter = () => {
          this._isTouchDevice || this.show();
        })
      );
    }
    _bindMouseLeave() {
      this._element.addEventListener(
        gi,
        (this._fn.mouseleave = () => {
          this.hide();
        })
      );
    }
    _bindClick() {
      u.on(this._actionButton, mi, () => {
        _.hasClass(this._element, bi) ? this.hide() : this.show();
      });
    }
    _bindListHideTransitionEnd() {
      u.on(this._buttonList, bt, (t) => {
        t.propertyName === "transform" &&
          (u.off(this._buttonList, bt),
          (this._element.style.height = `${this._initialContainerHeight}px`),
          u.trigger(this._element, mo));
      });
    }
    _bindListOpenTransitionEnd() {
      u.on(this._buttonList, bt, (t) => {
        t.propertyName === "transform" &&
          (u.off(this._buttonList, bt), u.trigger(this._element, go));
      });
    }
    _toggleVisibility(t) {
      const e = t ? "addClass" : "removeClass",
        i = t ? "translate(0)" : `translateY(${this._fullContainerHeight}px)`;
      _.addStyle(this._buttonList, { transform: i }),
        this._buttonListElements &&
          this._buttonListElements.forEach((s) => _[e](s, bo)),
        _[e](this._element, bi);
    }
    _getHeight(t) {
      const e = window.getComputedStyle(t);
      return parseFloat(e.getPropertyValue("height"));
    }
    _saveInitialHeights() {
      (this._initialContainerHeight = this._getHeight(this._element)),
        (this._initialListHeight = this._getHeight(this._buttonList)),
        (this._fullContainerHeight =
          this._initialContainerHeight + this._initialListHeight);
    }
    _bindInitialEvents() {
      this._bindClick(), this._bindMouseEnter(), this._bindMouseLeave();
    }
    _setInitialStyles() {
      (this._buttonList.style.marginBottom = `${this._initialContainerHeight}px`),
        (this._buttonList.style.transform = `translateY(${this._fullContainerHeight}px)`),
        (this._element.style.height = `${this._initialContainerHeight}px`);
    }
  }
  const ze = (n) => {
      let t = n.getAttribute("data-mdb-target");
      if (!t || t === "#") {
        let e = n.getAttribute("href");
        if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
        e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`),
          (t = e && e !== "#" ? ti(e.trim()) : null);
      }
      return t;
    },
    y = {
      find(n, t = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(t, n));
      },
      findOne(n, t = document.documentElement) {
        return Element.prototype.querySelector.call(t, n);
      },
      children(n, t) {
        return [].concat(...n.children).filter((e) => e.matches(t));
      },
      parents(n, t) {
        const e = [];
        let i = n.parentNode.closest(t);
        for (; i; ) e.push(i), (i = i.parentNode.closest(t));
        return e;
      },
      prev(n, t) {
        let e = n.previousElementSibling;
        for (; e; ) {
          if (e.matches(t)) return [e];
          e = e.previousElementSibling;
        }
        return [];
      },
      next(n, t) {
        let e = n.nextElementSibling;
        for (; e; ) {
          if (e.matches(t)) return [e];
          e = e.nextElementSibling;
        }
        return [];
      },
      focusableChildren(n) {
        const t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(",");
        return this.find(t, n).filter((e) => !Et(e) && qt(e));
      },
      getSelectorFromElement(n) {
        const t = ze(n);
        return t && y.findOne(t) ? t : null;
      },
      getElementFromSelector(n) {
        const t = ze(n);
        return t ? y.findOne(t) : null;
      },
      getMultipleElementsFromSelector(n) {
        const t = ze(n);
        return t ? y.find(t) : [];
      },
    },
    vi = "backdrop",
    yo = "fade",
    Ti = "show",
    Ai = `mousedown.bs.${vi}`,
    No = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    Co = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class yi extends Ht {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return No;
    }
    static get DefaultType() {
      return Co;
    }
    static get NAME() {
      return vi;
    }
    show(t) {
      if (!this._config.isVisible) {
        B(t);
        return;
      }
      this._append();
      const e = this._getElement();
      this._config.isAnimated && kt(e),
        e.classList.add(Ti),
        this._emulateAnimation(() => {
          B(t);
        });
    }
    hide(t) {
      if (!this._config.isVisible) {
        B(t);
        return;
      }
      this._getElement().classList.remove(Ti),
        this._emulateAnimation(() => {
          this.dispose(), B(t);
        });
    }
    dispose() {
      this._isAppended &&
        (h.off(this._element, Ai),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add(yo),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = it(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        h.on(t, Ai, () => {
          B(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      ii(t, this._getElement(), this._config.isAnimated);
    }
  }
  const te = (n, t = "hide") => {
      const e = `click.dismiss${n.EVENT_KEY}`,
        i = n.NAME;
      h.on(document, e, `[data-mdb-dismiss="${i}"]`, function (s) {
        if (
          (["A", "AREA"].includes(this.tagName) && s.preventDefault(), Et(this))
        )
          return;
        const r = y.getElementFromSelector(this) || this.closest(`.${i}`);
        n.getOrCreateInstance(r)[t]();
      });
    },
    So = "focustrap",
    ee = ".bs.focustrap",
    wo = `focusin${ee}`,
    Oo = `keydown.tab${ee}`,
    Do = "Tab",
    Lo = "forward",
    Ni = "backward",
    $o = { autofocus: !0, trapElement: null },
    Io = { autofocus: "boolean", trapElement: "element" };
  class Ci extends Ht {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return $o;
    }
    static get DefaultType() {
      return Io;
    }
    static get NAME() {
      return So;
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        h.off(document, ee),
        h.on(document, wo, (t) => this._handleFocusin(t)),
        h.on(document, Oo, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), h.off(document, ee));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = y.focusableChildren(e);
      i.length === 0
        ? e.focus()
        : this._lastTabNavDirection === Ni
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      t.key === Do && (this._lastTabNavDirection = t.shiftKey ? Ni : Lo);
    }
  }
  const Si = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    wi = ".sticky-top",
    ne = "padding-right",
    Oi = "margin-right";
  class Ge {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, ne, (e) => e + t),
        this._setElementAttributes(Si, ne, (e) => e + t),
        this._setElementAttributes(wi, Oi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, ne),
        this._resetElementAttributes(Si, ne),
        this._resetElementAttributes(wi, Oi);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const s = this.getWidth(),
        r = (o) => {
          if (o !== this._element && window.innerWidth > o.clientWidth + s)
            return;
          this._saveInitialAttribute(o, e);
          const a = window.getComputedStyle(o).getPropertyValue(e);
          o.style.setProperty(e, `${i(Number.parseFloat(a))}px`);
        };
      this._applyManipulationCallback(t, r);
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && st.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      const i = (s) => {
        const r = st.getDataAttribute(s, e);
        if (r === null) {
          s.style.removeProperty(e);
          return;
        }
        st.removeDataAttribute(s, e), s.style.setProperty(e, r);
      };
      this._applyManipulationCallback(t, i);
    }
    _applyManipulationCallback(t, e) {
      if (J(t)) {
        e(t);
        return;
      }
      for (const i of y.find(t, this._element)) e(i);
    }
  }
  const Mo = "offcanvas",
    vt = ".bs.offcanvas",
    Ro = "Escape",
    Di = "show",
    Li = "showing",
    $i = "hiding",
    Po = "offcanvas-backdrop",
    xo = `show${vt}`,
    ko = `shown${vt}`,
    Ho = `hide${vt}`,
    Ii = `hidePrevented${vt}`,
    Vo = `hidden${vt}`,
    Bo = `keydown.dismiss${vt}`,
    Wo = { backdrop: !0, keyboard: !0, scroll: !1 },
    jo = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class ie extends G {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return Wo;
    }
    static get DefaultType() {
      return jo;
    }
    static get NAME() {
      return Mo;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (
        this._isShown ||
        h.trigger(this._element, xo, { relatedTarget: t }).defaultPrevented
      )
        return;
      (this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new Ge().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Li);
      const i = () => {
        (!this._config.scroll || this._config.backdrop) &&
          this._focustrap.activate(),
          this._element.classList.add(Di),
          this._element.classList.remove(Li),
          h.trigger(this._element, ko, { relatedTarget: t });
      };
      this._queueCallback(i, this._element, !0);
    }
    hide() {
      if (!this._isShown || h.trigger(this._element, Ho).defaultPrevented)
        return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.add($i),
        this._backdrop.hide();
      const e = () => {
        this._element.classList.remove(Di, $i),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          this._config.scroll || new Ge().reset(),
          h.trigger(this._element, Vo);
      };
      this._queueCallback(e, this._element, !0);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = () => {
          if (this._config.backdrop === "static") {
            h.trigger(this._element, Ii);
            return;
          }
          this.hide();
        },
        e = !!this._config.backdrop;
      return new yi({
        className: Po,
        isVisible: e,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: e ? t : null,
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _addEventListeners() {
      h.on(this._element, Bo, (t) => {
        if (t.key === Ro) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          h.trigger(this._element, Ii);
        }
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ie.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  const Ko = "alert",
    Mi = ".bs.alert",
    Yo = `close${Mi}`,
    Fo = `closed${Mi}`,
    Uo = "fade",
    zo = "show";
  let Go = class Mr extends G {
    static get NAME() {
      return Ko;
    }
    close() {
      if (h.trigger(this._element, Yo).defaultPrevented) return;
      this._element.classList.remove(zo);
      const e = this._element.classList.contains(Uo);
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(), h.trigger(this._element, Fo), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Mr.getOrCreateInstance(this);
        if (typeof t == "string") {
          if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  };
  const Ri = "alert",
    qo = "close.bs.alert",
    Xo = "closed.bs.alert",
    Qo = [{ name: "close" }, { name: "closed" }];
  class Pi extends Go {
    constructor(t, e = {}) {
      super(t, e),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, qo),
        u.off(this._element, Xo),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Ri;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      u.extend(this._element, Qo, Ri);
    }
  }
  const Zo = "swipe",
    Tt = ".bs.swipe",
    Jo = `touchstart${Tt}`,
    ta = `touchmove${Tt}`,
    ea = `touchend${Tt}`,
    na = `pointerdown${Tt}`,
    ia = `pointerup${Tt}`,
    sa = "touch",
    ra = "pen",
    oa = "pointer-event",
    aa = 40,
    la = { endCallback: null, leftCallback: null, rightCallback: null },
    ca = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class se extends Ht {
    constructor(t, e) {
      super(),
        (this._element = t),
        !(!t || !se.isSupported()) &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = !!window.PointerEvent),
          this._initEvents());
    }
    static get Default() {
      return la;
    }
    static get DefaultType() {
      return ca;
    }
    static get NAME() {
      return Zo;
    }
    dispose() {
      h.off(this._element, Tt);
    }
    _start(t) {
      if (!this._supportPointerEvents) {
        this._deltaX = t.touches[0].clientX;
        return;
      }
      this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        B(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= aa) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && B(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (h.on(this._element, na, (t) => this._start(t)),
          h.on(this._element, ia, (t) => this._end(t)),
          this._element.classList.add(oa))
        : (h.on(this._element, Jo, (t) => this._start(t)),
          h.on(this._element, ta, (t) => this._move(t)),
          h.on(this._element, ea, (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        (t.pointerType === ra || t.pointerType === sa)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const ua = "carousel",
    At = ".bs.carousel",
    da = "ArrowLeft",
    ha = "ArrowRight",
    fa = 500,
    Bt = "next",
    yt = "prev",
    Nt = "left",
    re = "right",
    pa = `slide${At}`,
    qe = `slid${At}`,
    _a = `keydown${At}`,
    ma = `mouseenter${At}`,
    Ea = `mouseleave${At}`,
    ga = `dragstart${At}`,
    ba = "carousel",
    oe = "active",
    va = "slide",
    Ta = "carousel-item-end",
    Aa = "carousel-item-start",
    ya = "carousel-item-next",
    Na = "carousel-item-prev",
    xi = ".active",
    ki = ".carousel-item",
    Ca = xi + ki,
    Sa = ".carousel-item img",
    wa = ".carousel-indicators",
    Oa = { [da]: re, [ha]: Nt },
    Da = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    La = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  let $a = class Rr extends G {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = y.findOne(wa, this._element)),
        this._addEventListeners(),
        this._config.ride === ba && this.cycle();
    }
    static get Default() {
      return Da;
    }
    static get DefaultType() {
      return La;
    }
    static get NAME() {
      return ua;
    }
    next() {
      this._slide(Bt);
    }
    nextWhenVisible() {
      !document.hidden && qt(this._element) && this.next();
    }
    prev() {
      this._slide(yt);
    }
    pause() {
      this._isSliding && ei(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      if (this._config.ride) {
        if (this._isSliding) {
          h.one(this._element, qe, () => this.cycle());
          return;
        }
        this.cycle();
      }
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding) {
        h.one(this._element, qe, () => this.to(t));
        return;
      }
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const s = t > i ? Bt : yt;
      this._slide(s, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard && h.on(this._element, _a, (t) => this._keydown(t)),
        this._config.pause === "hover" &&
          (h.on(this._element, ma, () => this.pause()),
          h.on(this._element, Ea, () => this._maybeEnableCycle())),
        this._config.touch &&
          se.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const i of y.find(Sa, this._element))
        h.on(i, ga, (s) => s.preventDefault());
      const e = {
        leftCallback: () => this._slide(this._directionToOrder(Nt)),
        rightCallback: () => this._slide(this._directionToOrder(re)),
        endCallback: () => {
          this._config.pause === "hover" &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              fa + this._config.interval
            )));
        },
      };
      this._swipeHelper = new se(this._element, e);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = Oa[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = y.findOne(xi, this._indicatorsElement);
      e.classList.remove(oe), e.removeAttribute("aria-current");
      const i = y.findOne(
        `[data-mdb-slide-to="${t}"]`,
        this._indicatorsElement
      );
      i && (i.classList.add(oe), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-mdb-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        s = t === Bt,
        r = e || We(this._getItems(), i, s, this._config.wrap);
      if (r === i) return;
      const o = this._getItemIndex(r),
        a = (b) =>
          h.trigger(this._element, b, {
            relatedTarget: r,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (a(pa).defaultPrevented || !i || !r) return;
      const d = !!this._interval;
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = r);
      const c = s ? Aa : Ta,
        f = s ? ya : Na;
      r.classList.add(f), kt(r), i.classList.add(c), r.classList.add(c);
      const g = () => {
        r.classList.remove(c, f),
          r.classList.add(oe),
          i.classList.remove(oe, f, c),
          (this._isSliding = !1),
          a(qe);
      };
      this._queueCallback(g, i, this._isAnimated()), d && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains(va);
    }
    _getActive() {
      return y.findOne(Ca, this._element);
    }
    _getItems() {
      return y.find(ki, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return U() ? (t === Nt ? yt : Bt) : t === Nt ? Bt : yt;
    }
    _orderToDirection(t) {
      return U() ? (t === yt ? Nt : re) : t === yt ? re : Nt;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Rr.getOrCreateInstance(this, t);
        if (typeof t == "number") {
          e.to(t);
          return;
        }
        if (typeof t == "string") {
          if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  };
  const Hi = "carousel",
    Ia = "slide.bs.carousel",
    Ma = "slid.bs.carousel",
    Ra = [
      {
        name: "slide",
        parametersToCopy: ["relatedTarget", "direction", "from", "to"],
      },
      {
        name: "slid",
        parametersToCopy: ["relatedTarget", "direction", "from", "to"],
      },
    ];
  class Vi extends $a {
    constructor(t, e) {
      super(t, e),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, Ia),
        u.off(this._element, Ma),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Hi;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      u.extend(this._element, Ra, Hi);
    }
  }
  const Pa = "modal",
    q = ".bs.modal",
    xa = "Escape",
    ka = `hide${q}`,
    Ha = `hidePrevented${q}`,
    Va = `hidden${q}`,
    Ba = `show${q}`,
    Wa = `shown${q}`,
    ja = `resize${q}`,
    Ka = `click.dismiss${q}`,
    Ya = `mousedown.dismiss${q}`,
    Fa = `keydown.dismiss${q}`,
    Bi = "modal-open",
    Ua = "fade",
    Wi = "show",
    Xe = "modal-static",
    za = ".modal-dialog",
    Ga = ".modal-body",
    qa = { backdrop: !0, focus: !0, keyboard: !0 },
    Xa = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  let Qa = class Pr extends G {
    constructor(t, e) {
      super(t, e),
        (this._dialog = y.findOne(za, this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Ge()),
        this._addEventListeners();
    }
    static get Default() {
      return qa;
    }
    static get DefaultType() {
      return Xa;
    }
    static get NAME() {
      return Pa;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        h.trigger(this._element, Ba, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Bi),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      !this._isShown ||
        this._isTransitioning ||
        h.trigger(this._element, ka).defaultPrevented ||
        ((this._isShown = !1),
        (this._isTransitioning = !0),
        this._focustrap.deactivate(),
        this._element.classList.remove(Wi),
        this._queueCallback(
          () => this._hideModal(),
          this._element,
          this._isAnimated()
        ));
    }
    dispose() {
      h.off(window, q),
        h.off(this._dialog, q),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new yi({
        isVisible: !!this._config.backdrop && !this._config.modalNonInvasive,
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = y.findOne(Ga, this._dialog);
      e && (e.scrollTop = 0),
        kt(this._element),
        this._element.classList.add(Wi);
      const i = () => {
        this._config.focus && this._focustrap.activate(),
          (this._isTransitioning = !1),
          h.trigger(this._element, Wa, { relatedTarget: t });
      };
      this._queueCallback(i, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      h.on(this._element, Fa, (t) => {
        if (t.key === xa) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          this._triggerBackdropTransition();
        }
      }),
        h.on(window, ja, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        h.on(this._element, Ya, (t) => {
          h.one(this._element, Ka, (e) => {
            if (!(this._element !== t.target || this._element !== e.target)) {
              if (this._config.backdrop === "static") {
                this._triggerBackdropTransition();
                return;
              }
              this._config.backdrop && this.hide();
            }
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Bi),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            h.trigger(this._element, Va);
        });
    }
    _isAnimated() {
      return this._element.classList.contains(Ua);
    }
    _triggerBackdropTransition() {
      if (h.trigger(this._element, Ha).defaultPrevented) return;
      const e =
          this._element.scrollHeight > document.documentElement.clientHeight,
        i = this._element.style.overflowY;
      i === "hidden" ||
        this._element.classList.contains(Xe) ||
        (e || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Xe),
        this._queueCallback(() => {
          this._element.classList.remove(Xe),
            this._queueCallback(() => {
              this._element.style.overflowY = i;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const s = U() ? "paddingLeft" : "paddingRight";
        this._element.style[s] = `${e}px`;
      }
      if (!i && t) {
        const s = U() ? "paddingRight" : "paddingLeft";
        this._element.style[s] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Pr.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (typeof i[t] > "u") throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  };
  const ji = "modal",
    Za = "hide.bs.modal",
    Ja = "hidePrevented.bs.modal",
    tl = "hidden.bs.modal",
    el = "show.bs.modal",
    nl = "shown.bs.modal",
    il = [
      { name: "show", parametersToCopy: ["relatedTarget"] },
      { name: "shown", parametersToCopy: ["relatedTarget"] },
      { name: "hide" },
      { name: "hidePrevented" },
      { name: "hidden" },
    ];
  class Ki extends Qa {
    constructor(t, e) {
      super(t, e),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, el),
        u.off(this._element, nl),
        u.off(this._element, Za),
        u.off(this._element, tl),
        u.off(this._element, Ja),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return ji;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      u.extend(this._element, il, ji);
    }
  }
  var x = "top",
    j = "bottom",
    K = "right",
    k = "left",
    ae = "auto",
    Ct = [x, j, K, k],
    lt = "start",
    St = "end",
    Yi = "clippingParents",
    Qe = "viewport",
    wt = "popper",
    Fi = "reference",
    Ze = Ct.reduce(function (n, t) {
      return n.concat([t + "-" + lt, t + "-" + St]);
    }, []),
    Je = [].concat(Ct, [ae]).reduce(function (n, t) {
      return n.concat([t, t + "-" + lt, t + "-" + St]);
    }, []),
    Ui = "beforeRead",
    zi = "read",
    Gi = "afterRead",
    qi = "beforeMain",
    Xi = "main",
    Qi = "afterMain",
    Zi = "beforeWrite",
    Ji = "write",
    ts = "afterWrite",
    es = [Ui, zi, Gi, qi, Xi, Qi, Zi, Ji, ts];
  function Q(n) {
    return n ? (n.nodeName || "").toLowerCase() : null;
  }
  function Y(n) {
    if (n == null) return window;
    if (n.toString() !== "[object Window]") {
      var t = n.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return n;
  }
  function ct(n) {
    var t = Y(n).Element;
    return n instanceof t || n instanceof Element;
  }
  function z(n) {
    var t = Y(n).HTMLElement;
    return n instanceof t || n instanceof HTMLElement;
  }
  function tn(n) {
    if (typeof ShadowRoot > "u") return !1;
    var t = Y(n).ShadowRoot;
    return n instanceof t || n instanceof ShadowRoot;
  }
  function sl(n) {
    var t = n.state;
    Object.keys(t.elements).forEach(function (e) {
      var i = t.styles[e] || {},
        s = t.attributes[e] || {},
        r = t.elements[e];
      !z(r) ||
        !Q(r) ||
        (Object.assign(r.style, i),
        Object.keys(s).forEach(function (o) {
          var a = s[o];
          a === !1
            ? r.removeAttribute(o)
            : r.setAttribute(o, a === !0 ? "" : a);
        }));
    });
  }
  function rl(n) {
    var t = n.state,
      e = {
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
      Object.assign(t.elements.popper.style, e.popper),
      (t.styles = e),
      t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow),
      function () {
        Object.keys(t.elements).forEach(function (i) {
          var s = t.elements[i],
            r = t.attributes[i] || {},
            o = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]),
            a = o.reduce(function (l, d) {
              return (l[d] = ""), l;
            }, {});
          !z(s) ||
            !Q(s) ||
            (Object.assign(s.style, a),
            Object.keys(r).forEach(function (l) {
              s.removeAttribute(l);
            }));
        });
      }
    );
  }
  const en = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: sl,
    effect: rl,
    requires: ["computeStyles"],
  };
  function Z(n) {
    return n.split("-")[0];
  }
  var ut = Math.max,
    le = Math.min,
    Ot = Math.round;
  function nn() {
    var n = navigator.userAgentData;
    return n != null && n.brands && Array.isArray(n.brands)
      ? n.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function ns() {
    return !/^((?!chrome|android).)*safari/i.test(nn());
  }
  function Dt(n, t, e) {
    t === void 0 && (t = !1), e === void 0 && (e = !1);
    var i = n.getBoundingClientRect(),
      s = 1,
      r = 1;
    t &&
      z(n) &&
      ((s = (n.offsetWidth > 0 && Ot(i.width) / n.offsetWidth) || 1),
      (r = (n.offsetHeight > 0 && Ot(i.height) / n.offsetHeight) || 1));
    var o = ct(n) ? Y(n) : window,
      a = o.visualViewport,
      l = !ns() && e,
      d = (i.left + (l && a ? a.offsetLeft : 0)) / s,
      c = (i.top + (l && a ? a.offsetTop : 0)) / r,
      f = i.width / s,
      g = i.height / r;
    return {
      width: f,
      height: g,
      top: c,
      right: d + f,
      bottom: c + g,
      left: d,
      x: d,
      y: c,
    };
  }
  function sn(n) {
    var t = Dt(n),
      e = n.offsetWidth,
      i = n.offsetHeight;
    return (
      Math.abs(t.width - e) <= 1 && (e = t.width),
      Math.abs(t.height - i) <= 1 && (i = t.height),
      { x: n.offsetLeft, y: n.offsetTop, width: e, height: i }
    );
  }
  function is(n, t) {
    var e = t.getRootNode && t.getRootNode();
    if (n.contains(t)) return !0;
    if (e && tn(e)) {
      var i = t;
      do {
        if (i && n.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function tt(n) {
    return Y(n).getComputedStyle(n);
  }
  function ol(n) {
    return ["table", "td", "th"].indexOf(Q(n)) >= 0;
  }
  function rt(n) {
    return (
      (ct(n) ? n.ownerDocument : n.document) || window.document
    ).documentElement;
  }
  function ce(n) {
    return Q(n) === "html"
      ? n
      : n.assignedSlot || n.parentNode || (tn(n) ? n.host : null) || rt(n);
  }
  function ss(n) {
    return !z(n) || tt(n).position === "fixed" ? null : n.offsetParent;
  }
  function al(n) {
    var t = /firefox/i.test(nn()),
      e = /Trident/i.test(nn());
    if (e && z(n)) {
      var i = tt(n);
      if (i.position === "fixed") return null;
    }
    var s = ce(n);
    for (tn(s) && (s = s.host); z(s) && ["html", "body"].indexOf(Q(s)) < 0; ) {
      var r = tt(s);
      if (
        r.transform !== "none" ||
        r.perspective !== "none" ||
        r.contain === "paint" ||
        ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
        (t && r.willChange === "filter") ||
        (t && r.filter && r.filter !== "none")
      )
        return s;
      s = s.parentNode;
    }
    return null;
  }
  function Wt(n) {
    for (var t = Y(n), e = ss(n); e && ol(e) && tt(e).position === "static"; )
      e = ss(e);
    return e &&
      (Q(e) === "html" || (Q(e) === "body" && tt(e).position === "static"))
      ? t
      : e || al(n) || t;
  }
  function rn(n) {
    return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
  }
  function jt(n, t, e) {
    return ut(n, le(t, e));
  }
  function ll(n, t, e) {
    var i = jt(n, t, e);
    return i > e ? e : i;
  }
  function rs() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function os(n) {
    return Object.assign({}, rs(), n);
  }
  function as(n, t) {
    return t.reduce(function (e, i) {
      return (e[i] = n), e;
    }, {});
  }
  var cl = function (t, e) {
    return (
      (t =
        typeof t == "function"
          ? t(Object.assign({}, e.rects, { placement: e.placement }))
          : t),
      os(typeof t != "number" ? t : as(t, Ct))
    );
  };
  function ul(n) {
    var t,
      e = n.state,
      i = n.name,
      s = n.options,
      r = e.elements.arrow,
      o = e.modifiersData.popperOffsets,
      a = Z(e.placement),
      l = rn(a),
      d = [k, K].indexOf(a) >= 0,
      c = d ? "height" : "width";
    if (!(!r || !o)) {
      var f = cl(s.padding, e),
        g = sn(r),
        b = l === "y" ? x : k,
        O = l === "y" ? j : K,
        N =
          e.rects.reference[c] +
          e.rects.reference[l] -
          o[l] -
          e.rects.popper[c],
        w = o[l] - e.rects.reference[l],
        L = Wt(r),
        M = L ? (l === "y" ? L.clientHeight || 0 : L.clientWidth || 0) : 0,
        E = N / 2 - w / 2,
        p = f[b],
        m = M - g[c] - f[O],
        T = M / 2 - g[c] / 2 + E,
        A = jt(p, T, m),
        S = l;
      e.modifiersData[i] = ((t = {}), (t[S] = A), (t.centerOffset = A - T), t);
    }
  }
  function dl(n) {
    var t = n.state,
      e = n.options,
      i = e.element,
      s = i === void 0 ? "[data-popper-arrow]" : i;
    s != null &&
      ((typeof s == "string" &&
        ((s = t.elements.popper.querySelector(s)), !s)) ||
        (is(t.elements.popper, s) && (t.elements.arrow = s)));
  }
  const ls = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: ul,
    effect: dl,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Lt(n) {
    return n.split("-")[1];
  }
  var hl = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function fl(n, t) {
    var e = n.x,
      i = n.y,
      s = t.devicePixelRatio || 1;
    return { x: Ot(e * s) / s || 0, y: Ot(i * s) / s || 0 };
  }
  function cs(n) {
    var t,
      e = n.popper,
      i = n.popperRect,
      s = n.placement,
      r = n.variation,
      o = n.offsets,
      a = n.position,
      l = n.gpuAcceleration,
      d = n.adaptive,
      c = n.roundOffsets,
      f = n.isFixed,
      g = o.x,
      b = g === void 0 ? 0 : g,
      O = o.y,
      N = O === void 0 ? 0 : O,
      w = typeof c == "function" ? c({ x: b, y: N }) : { x: b, y: N };
    (b = w.x), (N = w.y);
    var L = o.hasOwnProperty("x"),
      M = o.hasOwnProperty("y"),
      E = k,
      p = x,
      m = window;
    if (d) {
      var T = Wt(e),
        A = "clientHeight",
        S = "clientWidth";
      if (
        (T === Y(e) &&
          ((T = rt(e)),
          tt(T).position !== "static" &&
            a === "absolute" &&
            ((A = "scrollHeight"), (S = "scrollWidth"))),
        (T = T),
        s === x || ((s === k || s === K) && r === St))
      ) {
        p = j;
        var C =
          f && T === m && m.visualViewport ? m.visualViewport.height : T[A];
        (N -= C - i.height), (N *= l ? 1 : -1);
      }
      if (s === k || ((s === x || s === j) && r === St)) {
        E = K;
        var $ =
          f && T === m && m.visualViewport ? m.visualViewport.width : T[S];
        (b -= $ - i.width), (b *= l ? 1 : -1);
      }
    }
    var I = Object.assign({ position: a }, d && hl),
      H = c === !0 ? fl({ x: b, y: N }, Y(e)) : { x: b, y: N };
    if (((b = H.x), (N = H.y), l)) {
      var R;
      return Object.assign(
        {},
        I,
        ((R = {}),
        (R[p] = M ? "0" : ""),
        (R[E] = L ? "0" : ""),
        (R.transform =
          (m.devicePixelRatio || 1) <= 1
            ? "translate(" + b + "px, " + N + "px)"
            : "translate3d(" + b + "px, " + N + "px, 0)"),
        R)
      );
    }
    return Object.assign(
      {},
      I,
      ((t = {}),
      (t[p] = M ? N + "px" : ""),
      (t[E] = L ? b + "px" : ""),
      (t.transform = ""),
      t)
    );
  }
  function pl(n) {
    var t = n.state,
      e = n.options,
      i = e.gpuAcceleration,
      s = i === void 0 ? !0 : i,
      r = e.adaptive,
      o = r === void 0 ? !0 : r,
      a = e.roundOffsets,
      l = a === void 0 ? !0 : a,
      d = {
        placement: Z(t.placement),
        variation: Lt(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: s,
        isFixed: t.options.strategy === "fixed",
      };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        cs(
          Object.assign({}, d, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: o,
            roundOffsets: l,
          })
        )
      )),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          cs(
            Object.assign({}, d, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  }
  const on = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: pl,
    data: {},
  };
  var ue = { passive: !0 };
  function _l(n) {
    var t = n.state,
      e = n.instance,
      i = n.options,
      s = i.scroll,
      r = s === void 0 ? !0 : s,
      o = i.resize,
      a = o === void 0 ? !0 : o,
      l = Y(t.elements.popper),
      d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      r &&
        d.forEach(function (c) {
          c.addEventListener("scroll", e.update, ue);
        }),
      a && l.addEventListener("resize", e.update, ue),
      function () {
        r &&
          d.forEach(function (c) {
            c.removeEventListener("scroll", e.update, ue);
          }),
          a && l.removeEventListener("resize", e.update, ue);
      }
    );
  }
  const an = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: _l,
    data: {},
  };
  var ml = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function de(n) {
    return n.replace(/left|right|bottom|top/g, function (t) {
      return ml[t];
    });
  }
  var El = { start: "end", end: "start" };
  function us(n) {
    return n.replace(/start|end/g, function (t) {
      return El[t];
    });
  }
  function ln(n) {
    var t = Y(n),
      e = t.pageXOffset,
      i = t.pageYOffset;
    return { scrollLeft: e, scrollTop: i };
  }
  function cn(n) {
    return Dt(rt(n)).left + ln(n).scrollLeft;
  }
  function gl(n, t) {
    var e = Y(n),
      i = rt(n),
      s = e.visualViewport,
      r = i.clientWidth,
      o = i.clientHeight,
      a = 0,
      l = 0;
    if (s) {
      (r = s.width), (o = s.height);
      var d = ns();
      (d || (!d && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
    }
    return { width: r, height: o, x: a + cn(n), y: l };
  }
  function bl(n) {
    var t,
      e = rt(n),
      i = ln(n),
      s = (t = n.ownerDocument) == null ? void 0 : t.body,
      r = ut(
        e.scrollWidth,
        e.clientWidth,
        s ? s.scrollWidth : 0,
        s ? s.clientWidth : 0
      ),
      o = ut(
        e.scrollHeight,
        e.clientHeight,
        s ? s.scrollHeight : 0,
        s ? s.clientHeight : 0
      ),
      a = -i.scrollLeft + cn(n),
      l = -i.scrollTop;
    return (
      tt(s || e).direction === "rtl" &&
        (a += ut(e.clientWidth, s ? s.clientWidth : 0) - r),
      { width: r, height: o, x: a, y: l }
    );
  }
  function un(n) {
    var t = tt(n),
      e = t.overflow,
      i = t.overflowX,
      s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(e + s + i);
  }
  function ds(n) {
    return ["html", "body", "#document"].indexOf(Q(n)) >= 0
      ? n.ownerDocument.body
      : z(n) && un(n)
      ? n
      : ds(ce(n));
  }
  function Kt(n, t) {
    var e;
    t === void 0 && (t = []);
    var i = ds(n),
      s = i === ((e = n.ownerDocument) == null ? void 0 : e.body),
      r = Y(i),
      o = s ? [r].concat(r.visualViewport || [], un(i) ? i : []) : i,
      a = t.concat(o);
    return s ? a : a.concat(Kt(ce(o)));
  }
  function dn(n) {
    return Object.assign({}, n, {
      left: n.x,
      top: n.y,
      right: n.x + n.width,
      bottom: n.y + n.height,
    });
  }
  function vl(n, t) {
    var e = Dt(n, !1, t === "fixed");
    return (
      (e.top = e.top + n.clientTop),
      (e.left = e.left + n.clientLeft),
      (e.bottom = e.top + n.clientHeight),
      (e.right = e.left + n.clientWidth),
      (e.width = n.clientWidth),
      (e.height = n.clientHeight),
      (e.x = e.left),
      (e.y = e.top),
      e
    );
  }
  function hs(n, t, e) {
    return t === Qe ? dn(gl(n, e)) : ct(t) ? vl(t, e) : dn(bl(rt(n)));
  }
  function Tl(n) {
    var t = Kt(ce(n)),
      e = ["absolute", "fixed"].indexOf(tt(n).position) >= 0,
      i = e && z(n) ? Wt(n) : n;
    return ct(i)
      ? t.filter(function (s) {
          return ct(s) && is(s, i) && Q(s) !== "body";
        })
      : [];
  }
  function Al(n, t, e, i) {
    var s = t === "clippingParents" ? Tl(n) : [].concat(t),
      r = [].concat(s, [e]),
      o = r[0],
      a = r.reduce(function (l, d) {
        var c = hs(n, d, i);
        return (
          (l.top = ut(c.top, l.top)),
          (l.right = le(c.right, l.right)),
          (l.bottom = le(c.bottom, l.bottom)),
          (l.left = ut(c.left, l.left)),
          l
        );
      }, hs(n, o, i));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function fs(n) {
    var t = n.reference,
      e = n.element,
      i = n.placement,
      s = i ? Z(i) : null,
      r = i ? Lt(i) : null,
      o = t.x + t.width / 2 - e.width / 2,
      a = t.y + t.height / 2 - e.height / 2,
      l;
    switch (s) {
      case x:
        l = { x: o, y: t.y - e.height };
        break;
      case j:
        l = { x: o, y: t.y + t.height };
        break;
      case K:
        l = { x: t.x + t.width, y: a };
        break;
      case k:
        l = { x: t.x - e.width, y: a };
        break;
      default:
        l = { x: t.x, y: t.y };
    }
    var d = s ? rn(s) : null;
    if (d != null) {
      var c = d === "y" ? "height" : "width";
      switch (r) {
        case lt:
          l[d] = l[d] - (t[c] / 2 - e[c] / 2);
          break;
        case St:
          l[d] = l[d] + (t[c] / 2 - e[c] / 2);
          break;
      }
    }
    return l;
  }
  function $t(n, t) {
    t === void 0 && (t = {});
    var e = t,
      i = e.placement,
      s = i === void 0 ? n.placement : i,
      r = e.strategy,
      o = r === void 0 ? n.strategy : r,
      a = e.boundary,
      l = a === void 0 ? Yi : a,
      d = e.rootBoundary,
      c = d === void 0 ? Qe : d,
      f = e.elementContext,
      g = f === void 0 ? wt : f,
      b = e.altBoundary,
      O = b === void 0 ? !1 : b,
      N = e.padding,
      w = N === void 0 ? 0 : N,
      L = os(typeof w != "number" ? w : as(w, Ct)),
      M = g === wt ? Fi : wt,
      E = n.rects.popper,
      p = n.elements[O ? M : g],
      m = Al(ct(p) ? p : p.contextElement || rt(n.elements.popper), l, c, o),
      T = Dt(n.elements.reference),
      A = fs({ reference: T, element: E, strategy: "absolute", placement: s }),
      S = dn(Object.assign({}, E, A)),
      C = g === wt ? S : T,
      $ = {
        top: m.top - C.top + L.top,
        bottom: C.bottom - m.bottom + L.bottom,
        left: m.left - C.left + L.left,
        right: C.right - m.right + L.right,
      },
      I = n.modifiersData.offset;
    if (g === wt && I) {
      var H = I[s];
      Object.keys($).forEach(function (R) {
        var dt = [K, j].indexOf(R) >= 0 ? 1 : -1,
          ht = [x, j].indexOf(R) >= 0 ? "y" : "x";
        $[R] += H[ht] * dt;
      });
    }
    return $;
  }
  function yl(n, t) {
    t === void 0 && (t = {});
    var e = t,
      i = e.placement,
      s = e.boundary,
      r = e.rootBoundary,
      o = e.padding,
      a = e.flipVariations,
      l = e.allowedAutoPlacements,
      d = l === void 0 ? Je : l,
      c = Lt(i),
      f = c
        ? a
          ? Ze
          : Ze.filter(function (O) {
              return Lt(O) === c;
            })
        : Ct,
      g = f.filter(function (O) {
        return d.indexOf(O) >= 0;
      });
    g.length === 0 && (g = f);
    var b = g.reduce(function (O, N) {
      return (
        (O[N] = $t(n, {
          placement: N,
          boundary: s,
          rootBoundary: r,
          padding: o,
        })[Z(N)]),
        O
      );
    }, {});
    return Object.keys(b).sort(function (O, N) {
      return b[O] - b[N];
    });
  }
  function Nl(n) {
    if (Z(n) === ae) return [];
    var t = de(n);
    return [us(n), t, us(t)];
  }
  function Cl(n) {
    var t = n.state,
      e = n.options,
      i = n.name;
    if (!t.modifiersData[i]._skip) {
      for (
        var s = e.mainAxis,
          r = s === void 0 ? !0 : s,
          o = e.altAxis,
          a = o === void 0 ? !0 : o,
          l = e.fallbackPlacements,
          d = e.padding,
          c = e.boundary,
          f = e.rootBoundary,
          g = e.altBoundary,
          b = e.flipVariations,
          O = b === void 0 ? !0 : b,
          N = e.allowedAutoPlacements,
          w = t.options.placement,
          L = Z(w),
          M = L === w,
          E = l || (M || !O ? [de(w)] : Nl(w)),
          p = [w].concat(E).reduce(function (Pt, at) {
            return Pt.concat(
              Z(at) === ae
                ? yl(t, {
                    placement: at,
                    boundary: c,
                    rootBoundary: f,
                    padding: d,
                    flipVariations: O,
                    allowedAutoPlacements: N,
                  })
                : at
            );
          }, []),
          m = t.rects.reference,
          T = t.rects.popper,
          A = new Map(),
          S = !0,
          C = p[0],
          $ = 0;
        $ < p.length;
        $++
      ) {
        var I = p[$],
          H = Z(I),
          R = Lt(I) === lt,
          dt = [x, j].indexOf(H) >= 0,
          ht = dt ? "width" : "height",
          F = $t(t, {
            placement: I,
            boundary: c,
            rootBoundary: f,
            altBoundary: g,
            padding: d,
          }),
          X = dt ? (R ? K : k) : R ? j : x;
        m[ht] > T[ht] && (X = de(X));
        var Oe = de(X),
          ft = [];
        if (
          (r && ft.push(F[H] <= 0),
          a && ft.push(F[X] <= 0, F[Oe] <= 0),
          ft.every(function (Pt) {
            return Pt;
          }))
        ) {
          (C = I), (S = !1);
          break;
        }
        A.set(I, ft);
      }
      if (S)
        for (
          var De = O ? 3 : 1,
            Ln = function (at) {
              var Gt = p.find(function ($e) {
                var pt = A.get($e);
                if (pt)
                  return pt.slice(0, at).every(function ($n) {
                    return $n;
                  });
              });
              if (Gt) return (C = Gt), "break";
            },
            zt = De;
          zt > 0;
          zt--
        ) {
          var Le = Ln(zt);
          if (Le === "break") break;
        }
      t.placement !== C &&
        ((t.modifiersData[i]._skip = !0), (t.placement = C), (t.reset = !0));
    }
  }
  const ps = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Cl,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function _s(n, t, e) {
    return (
      e === void 0 && (e = { x: 0, y: 0 }),
      {
        top: n.top - t.height - e.y,
        right: n.right - t.width + e.x,
        bottom: n.bottom - t.height + e.y,
        left: n.left - t.width - e.x,
      }
    );
  }
  function ms(n) {
    return [x, K, j, k].some(function (t) {
      return n[t] >= 0;
    });
  }
  function Sl(n) {
    var t = n.state,
      e = n.name,
      i = t.rects.reference,
      s = t.rects.popper,
      r = t.modifiersData.preventOverflow,
      o = $t(t, { elementContext: "reference" }),
      a = $t(t, { altBoundary: !0 }),
      l = _s(o, i),
      d = _s(a, s, r),
      c = ms(l),
      f = ms(d);
    (t.modifiersData[e] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: d,
      isReferenceHidden: c,
      hasPopperEscaped: f,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": f,
      }));
  }
  const Es = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Sl,
  };
  function wl(n, t, e) {
    var i = Z(n),
      s = [k, x].indexOf(i) >= 0 ? -1 : 1,
      r =
        typeof e == "function" ? e(Object.assign({}, t, { placement: n })) : e,
      o = r[0],
      a = r[1];
    return (
      (o = o || 0),
      (a = (a || 0) * s),
      [k, K].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
  }
  function Ol(n) {
    var t = n.state,
      e = n.options,
      i = n.name,
      s = e.offset,
      r = s === void 0 ? [0, 0] : s,
      o = Je.reduce(function (c, f) {
        return (c[f] = wl(f, t.rects, r)), c;
      }, {}),
      a = o[t.placement],
      l = a.x,
      d = a.y;
    t.modifiersData.popperOffsets != null &&
      ((t.modifiersData.popperOffsets.x += l),
      (t.modifiersData.popperOffsets.y += d)),
      (t.modifiersData[i] = o);
  }
  const gs = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Ol,
  };
  function Dl(n) {
    var t = n.state,
      e = n.name;
    t.modifiersData[e] = fs({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  }
  const hn = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Dl,
    data: {},
  };
  function Ll(n) {
    return n === "x" ? "y" : "x";
  }
  function $l(n) {
    var t = n.state,
      e = n.options,
      i = n.name,
      s = e.mainAxis,
      r = s === void 0 ? !0 : s,
      o = e.altAxis,
      a = o === void 0 ? !1 : o,
      l = e.boundary,
      d = e.rootBoundary,
      c = e.altBoundary,
      f = e.padding,
      g = e.tether,
      b = g === void 0 ? !0 : g,
      O = e.tetherOffset,
      N = O === void 0 ? 0 : O,
      w = $t(t, { boundary: l, rootBoundary: d, padding: f, altBoundary: c }),
      L = Z(t.placement),
      M = Lt(t.placement),
      E = !M,
      p = rn(L),
      m = Ll(p),
      T = t.modifiersData.popperOffsets,
      A = t.rects.reference,
      S = t.rects.popper,
      C =
        typeof N == "function"
          ? N(Object.assign({}, t.rects, { placement: t.placement }))
          : N,
      $ =
        typeof C == "number"
          ? { mainAxis: C, altAxis: C }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
      I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      H = { x: 0, y: 0 };
    if (T) {
      if (r) {
        var R,
          dt = p === "y" ? x : k,
          ht = p === "y" ? j : K,
          F = p === "y" ? "height" : "width",
          X = T[p],
          Oe = X + w[dt],
          ft = X - w[ht],
          De = b ? -S[F] / 2 : 0,
          Ln = M === lt ? A[F] : S[F],
          zt = M === lt ? -S[F] : -A[F],
          Le = t.elements.arrow,
          Pt = b && Le ? sn(Le) : { width: 0, height: 0 },
          at = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : rs(),
          Gt = at[dt],
          $e = at[ht],
          pt = jt(0, A[F], Pt[F]),
          $n = E
            ? A[F] / 2 - De - pt - Gt - $.mainAxis
            : Ln - pt - Gt - $.mainAxis,
          ah = E
            ? -A[F] / 2 + De + pt + $e + $.mainAxis
            : zt + pt + $e + $.mainAxis,
          In = t.elements.arrow && Wt(t.elements.arrow),
          lh = In ? (p === "y" ? In.clientTop || 0 : In.clientLeft || 0) : 0,
          yr = (R = I == null ? void 0 : I[p]) != null ? R : 0,
          ch = X + $n - yr - lh,
          uh = X + ah - yr,
          Nr = jt(b ? le(Oe, ch) : Oe, X, b ? ut(ft, uh) : ft);
        (T[p] = Nr), (H[p] = Nr - X);
      }
      if (a) {
        var Cr,
          dh = p === "x" ? x : k,
          hh = p === "x" ? j : K,
          _t = T[m],
          Ie = m === "y" ? "height" : "width",
          Sr = _t + w[dh],
          wr = _t - w[hh],
          Mn = [x, k].indexOf(L) !== -1,
          Or = (Cr = I == null ? void 0 : I[m]) != null ? Cr : 0,
          Dr = Mn ? Sr : _t - A[Ie] - S[Ie] - Or + $.altAxis,
          Lr = Mn ? _t + A[Ie] + S[Ie] - Or - $.altAxis : wr,
          $r = b && Mn ? ll(Dr, _t, Lr) : jt(b ? Dr : Sr, _t, b ? Lr : wr);
        (T[m] = $r), (H[m] = $r - _t);
      }
      t.modifiersData[i] = H;
    }
  }
  const bs = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: $l,
    requiresIfExists: ["offset"],
  };
  function Il(n) {
    return { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
  }
  function Ml(n) {
    return n === Y(n) || !z(n) ? ln(n) : Il(n);
  }
  function Rl(n) {
    var t = n.getBoundingClientRect(),
      e = Ot(t.width) / n.offsetWidth || 1,
      i = Ot(t.height) / n.offsetHeight || 1;
    return e !== 1 || i !== 1;
  }
  function Pl(n, t, e) {
    e === void 0 && (e = !1);
    var i = z(t),
      s = z(t) && Rl(t),
      r = rt(t),
      o = Dt(n, s, e),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (i || (!i && !e)) &&
        ((Q(t) !== "body" || un(r)) && (a = Ml(t)),
        z(t)
          ? ((l = Dt(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
          : r && (l.x = cn(r))),
      {
        x: o.left + a.scrollLeft - l.x,
        y: o.top + a.scrollTop - l.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function xl(n) {
    var t = new Map(),
      e = new Set(),
      i = [];
    n.forEach(function (r) {
      t.set(r.name, r);
    });
    function s(r) {
      e.add(r.name);
      var o = [].concat(r.requires || [], r.requiresIfExists || []);
      o.forEach(function (a) {
        if (!e.has(a)) {
          var l = t.get(a);
          l && s(l);
        }
      }),
        i.push(r);
    }
    return (
      n.forEach(function (r) {
        e.has(r.name) || s(r);
      }),
      i
    );
  }
  function kl(n) {
    var t = xl(n);
    return es.reduce(function (e, i) {
      return e.concat(
        t.filter(function (s) {
          return s.phase === i;
        })
      );
    }, []);
  }
  function Hl(n) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (e) {
            Promise.resolve().then(function () {
              (t = void 0), e(n());
            });
          })),
        t
      );
    };
  }
  function Vl(n) {
    var t = n.reduce(function (e, i) {
      var s = e[i.name];
      return (
        (e[i.name] = s
          ? Object.assign({}, s, i, {
              options: Object.assign({}, s.options, i.options),
              data: Object.assign({}, s.data, i.data),
            })
          : i),
        e
      );
    }, {});
    return Object.keys(t).map(function (e) {
      return t[e];
    });
  }
  var vs = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Ts() {
    for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
      t[e] = arguments[e];
    return !t.some(function (i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function he(n) {
    n === void 0 && (n = {});
    var t = n,
      e = t.defaultModifiers,
      i = e === void 0 ? [] : e,
      s = t.defaultOptions,
      r = s === void 0 ? vs : s;
    return function (a, l, d) {
      d === void 0 && (d = r);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, vs, r),
          modifiersData: {},
          elements: { reference: a, popper: l },
          attributes: {},
          styles: {},
        },
        f = [],
        g = !1,
        b = {
          state: c,
          setOptions: function (L) {
            var M = typeof L == "function" ? L(c.options) : L;
            N(),
              (c.options = Object.assign({}, r, c.options, M)),
              (c.scrollParents = {
                reference: ct(a)
                  ? Kt(a)
                  : a.contextElement
                  ? Kt(a.contextElement)
                  : [],
                popper: Kt(l),
              });
            var E = kl(Vl([].concat(i, c.options.modifiers)));
            return (
              (c.orderedModifiers = E.filter(function (p) {
                return p.enabled;
              })),
              O(),
              b.update()
            );
          },
          forceUpdate: function () {
            if (!g) {
              var L = c.elements,
                M = L.reference,
                E = L.popper;
              if (Ts(M, E)) {
                (c.rects = {
                  reference: Pl(M, Wt(E), c.options.strategy === "fixed"),
                  popper: sn(E),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function ($) {
                    return (c.modifiersData[$.name] = Object.assign(
                      {},
                      $.data
                    ));
                  });
                for (var p = 0; p < c.orderedModifiers.length; p++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (p = -1);
                    continue;
                  }
                  var m = c.orderedModifiers[p],
                    T = m.fn,
                    A = m.options,
                    S = A === void 0 ? {} : A,
                    C = m.name;
                  typeof T == "function" &&
                    (c =
                      T({ state: c, options: S, name: C, instance: b }) || c);
                }
              }
            }
          },
          update: Hl(function () {
            return new Promise(function (w) {
              b.forceUpdate(), w(c);
            });
          }),
          destroy: function () {
            N(), (g = !0);
          },
        };
      if (!Ts(a, l)) return b;
      b.setOptions(d).then(function (w) {
        !g && d.onFirstUpdate && d.onFirstUpdate(w);
      });
      function O() {
        c.orderedModifiers.forEach(function (w) {
          var L = w.name,
            M = w.options,
            E = M === void 0 ? {} : M,
            p = w.effect;
          if (typeof p == "function") {
            var m = p({ state: c, name: L, instance: b, options: E }),
              T = function () {};
            f.push(m || T);
          }
        });
      }
      function N() {
        f.forEach(function (w) {
          return w();
        }),
          (f = []);
      }
      return b;
    };
  }
  var Bl = he(),
    Wl = [an, hn, on, en],
    jl = he({ defaultModifiers: Wl }),
    Kl = [an, hn, on, en, gs, ps, bs, ls, Es],
    fn = he({ defaultModifiers: Kl });
  const As = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          afterMain: Qi,
          afterRead: Gi,
          afterWrite: ts,
          applyStyles: en,
          arrow: ls,
          auto: ae,
          basePlacements: Ct,
          beforeMain: qi,
          beforeRead: Ui,
          beforeWrite: Zi,
          bottom: j,
          clippingParents: Yi,
          computeStyles: on,
          createPopper: fn,
          createPopperBase: Bl,
          createPopperLite: jl,
          detectOverflow: $t,
          end: St,
          eventListeners: an,
          flip: ps,
          hide: Es,
          left: k,
          main: Xi,
          modifierPhases: es,
          offset: gs,
          placements: Je,
          popper: wt,
          popperGenerator: he,
          popperOffsets: hn,
          preventOverflow: bs,
          read: zi,
          reference: Fi,
          right: K,
          start: lt,
          top: x,
          variationPlacements: Ze,
          viewport: Qe,
          write: Ji,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    ys = {
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
    Yl = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Fl = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    Ul = (n, t) => {
      const e = n.nodeName.toLowerCase();
      return t.includes(e)
        ? Yl.has(e)
          ? !!Fl.test(n.nodeValue)
          : !0
        : t.filter((i) => i instanceof RegExp).some((i) => i.test(e));
    };
  function zl(n, t, e) {
    if (!n.length) return n;
    if (e && typeof e == "function") return e(n);
    const s = new window.DOMParser().parseFromString(n, "text/html"),
      r = [].concat(...s.body.querySelectorAll("*"));
    for (const o of r) {
      const a = o.nodeName.toLowerCase();
      if (!Object.keys(t).includes(a)) {
        o.remove();
        continue;
      }
      const l = [].concat(...o.attributes),
        d = [].concat(t["*"] || [], t[a] || []);
      for (const c of l) Ul(c, d) || o.removeAttribute(c.nodeName);
    }
    return s.body.innerHTML;
  }
  const Gl = "TemplateFactory",
    ql = {
      allowList: ys,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Xl = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Ql = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class Zl extends Ht {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return ql;
    }
    static get DefaultType() {
      return Xl;
    }
    static get NAME() {
      return Gl;
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [s, r] of Object.entries(this._config.content))
        this._setContent(t, r, s);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Ql);
    }
    _setContent(t, e, i) {
      const s = y.findOne(i, t);
      if (s) {
        if (((e = this._resolvePossibleFunction(e)), !e)) {
          s.remove();
          return;
        }
        if (J(e)) {
          this._putElementInTemplate(it(e), s);
          return;
        }
        if (this._config.html) {
          s.innerHTML = this._maybeSanitize(e);
          return;
        }
        s.textContent = e;
      }
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? zl(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return B(t, [this]);
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) {
        (e.innerHTML = ""), e.append(t);
        return;
      }
      e.textContent = t.textContent;
    }
  }
  const Jl = "tooltip",
    tc = new Set(["sanitize", "allowList", "sanitizeFn"]),
    pn = "fade",
    ec = "modal",
    fe = "show",
    nc = ".tooltip-inner",
    Ns = `.${ec}`,
    Cs = "hide.bs.modal",
    Yt = "hover",
    _n = "focus",
    ic = "click",
    sc = "manual",
    rc = "hide",
    oc = "hidden",
    ac = "show",
    lc = "shown",
    cc = "inserted",
    uc = "click",
    dc = "focusin",
    hc = "focusout",
    fc = "mouseenter",
    pc = "mouseleave",
    _c = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: U() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: U() ? "right" : "left",
    },
    mc = {
      allowList: ys,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    Ec = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  let pe = class xr extends G {
    constructor(t, e) {
      if (typeof As > "u")
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return mc;
    }
    static get DefaultType() {
      return Ec;
    }
    static get NAME() {
      return Jl;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (this._isEnabled) {
        if (
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown())
        ) {
          this._leave();
          return;
        }
        this._enter();
      }
    }
    dispose() {
      clearTimeout(this._timeout),
        h.off(this._element.closest(Ns), Cs, this._hideModalHandler),
        this._element.getAttribute("data-mdb-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-mdb-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if (this._element.style.display === "none")
        throw new Error("Please use show on visible elements");
      if (!(this._isWithContent() && this._isEnabled)) return;
      const t = h.trigger(this._element, this.constructor.eventName(ac)),
        i = (
          ni(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !i) return;
      this._disposePopper();
      const s = this._getTipElement();
      this._element.setAttribute("aria-describedby", s.getAttribute("id"));
      const { container: r } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (r.append(s),
          h.trigger(this._element, this.constructor.eventName(cc))),
        (this._popper = this._createPopper(s)),
        s.classList.add(fe),
        "ontouchstart" in document.documentElement)
      )
        for (const a of [].concat(...document.body.children))
          h.on(a, "mouseover", Xt);
      const o = () => {
        h.trigger(this._element, this.constructor.eventName(lc)),
          this._isHovered === !1 && this._leave(),
          (this._isHovered = !1);
      };
      this._queueCallback(o, this.tip, this._isAnimated());
    }
    hide() {
      if (
        !this._isShown() ||
        h.trigger(this._element, this.constructor.eventName(rc))
          .defaultPrevented
      )
        return;
      if (
        (this._getTipElement().classList.remove(fe),
        "ontouchstart" in document.documentElement)
      )
        for (const s of [].concat(...document.body.children))
          h.off(s, "mouseover", Xt);
      (this._activeTrigger[ic] = !1),
        (this._activeTrigger[_n] = !1),
        (this._activeTrigger[Yt] = !1),
        (this._isHovered = null);
      const i = () => {
        this._isWithActiveTrigger() ||
          (this._isHovered || this._disposePopper(),
          this._element.removeAttribute("aria-describedby"),
          h.trigger(this._element, this.constructor.eventName(oc)));
      };
      this._queueCallback(i, this.tip, this._isAnimated());
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return !!this._getTitle();
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(pn, fe),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = Zr(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(pn), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Zl({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { [nc]: this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-mdb-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(pn))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(fe);
    }
    _createPopper(t) {
      const e = B(this._config.placement, [this, t, this._element]),
        i = _c[e.toUpperCase()];
      return fn(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return typeof t == "string"
        ? t.split(",").map((e) => Number.parseInt(e, 10))
        : typeof t == "function"
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return B(t, [this._element]);
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (i) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                i.state.placement
              );
            },
          },
        ],
      };
      return { ...e, ...B(this._config.popperConfig, [e]) };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if (e === "click")
          h.on(
            this._element,
            this.constructor.eventName(uc),
            this._config.selector,
            (i) => {
              this._initializeOnDelegatedTarget(i).toggle();
            }
          );
        else if (e !== sc) {
          const i =
              e === Yt
                ? this.constructor.eventName(fc)
                : this.constructor.eventName(dc),
            s =
              e === Yt
                ? this.constructor.eventName(pc)
                : this.constructor.eventName(hc);
          h.on(this._element, i, this._config.selector, (r) => {
            const o = this._initializeOnDelegatedTarget(r);
            (o._activeTrigger[r.type === "focusin" ? _n : Yt] = !0), o._enter();
          }),
            h.on(this._element, s, this._config.selector, (r) => {
              const o = this._initializeOnDelegatedTarget(r);
              (o._activeTrigger[r.type === "focusout" ? _n : Yt] =
                o._element.contains(r.relatedTarget)),
                o._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        h.on(this._element.closest(Ns), Cs, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (!this._element.getAttribute("aria-label") &&
          !this._element.textContent.trim() &&
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-mdb-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = !0;
        return;
      }
      (this._isHovered = !0),
        this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show);
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = st.getDataAttributes(this._element);
      for (const i of Object.keys(e)) tc.has(i) && delete e[i];
      return (
        (t = { ...e, ...(typeof t == "object" && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = t.container === !1 ? document.body : it(t.container)),
        typeof t.delay == "number" &&
          (t.delay = { show: t.delay, hide: t.delay }),
        typeof t.title == "number" && (t.title = t.title.toString()),
        typeof t.content == "number" && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = xr.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  };
  const gc = "popover",
    bc = ".popover-header",
    vc = ".popover-body",
    Tc = {
      ...pe.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    Ac = { ...pe.DefaultType, content: "(null|string|element|function)" };
  let yc = class kr extends pe {
    static get Default() {
      return Tc;
    }
    static get DefaultType() {
      return Ac;
    }
    static get NAME() {
      return gc;
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { [bc]: this._getTitle(), [vc]: this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = kr.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  };
  const Ss = "popover",
    Nc = "show.bs.popover",
    Cc = "shown.bs.popover",
    Sc = "hide.bs.popover",
    wc = "hidden.bs.popover",
    Oc = "inserted.bs.popover",
    Dc = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
      { name: "inserted" },
    ];
  class ws extends yc {
    constructor(t, e) {
      super(t, e),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this.element, Nc),
        u.off(this.element, Cc),
        u.off(this.element, Sc),
        u.off(this.element, wc),
        u.off(this.element, Oc),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Ss;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      u.extend(this._element, Dc, Ss);
    }
  }
  const Lc = "scrollspy",
    Os = ".bs.scrollspy",
    $c = `activate${Os}`,
    Ds = `click${Os}`,
    Ic = "dropdown-item",
    It = "active",
    mn = "[href]",
    Mc = ".nav, .list-group",
    Ls = ".nav-link",
    Rc = `${Ls}, .nav-item > ${Ls}, .list-group-item`,
    Pc = ".dropdown",
    xc = ".dropdown-toggle",
    kc = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    Hc = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  let Vc = class Hr extends G {
    constructor(t, e) {
      super(t, e),
        this._config.target &&
          ((this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh());
    }
    static get Default() {
      return kc;
    }
    static get DefaultType() {
      return Hc;
    }
    static get NAME() {
      return Lc;
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer && this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = it(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        typeof t.threshold == "string" &&
          (t.threshold = t.threshold
            .split(",")
            .map((e) => Number.parseFloat(e))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (h.off(this._config.target, Ds),
        h.on(this._config.target, Ds, mn, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              s = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo) {
              i.scrollTo({ top: s, behavior: "smooth" });
              return;
            }
            i.scrollTop = s;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((e) => this._observerCallback(e), t);
    }
    _observerCallback(t) {
      const e = (o) => this._targetLinks.get(`#${o.target.id}`),
        i = (o) => {
          (this._previousScrollData.visibleEntryTop = o.target.offsetTop),
            this._process(e(o));
        },
        s = (this._rootElement || document.documentElement).scrollTop,
        r = s >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const a =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (r && a) {
          if ((i(o), !s)) return;
          continue;
        }
        !r && !a && i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = y.find(mn, this._config.target);
      for (const e of t) {
        if (!e.hash || Et(e)) continue;
        const i = y.findOne(decodeURI(e.hash), this._element);
        qt(i) &&
          (this._targetLinks.set(decodeURI(e.hash), e),
          this._observableSections.set(e.hash, i));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(It),
        this._activateParents(t),
        h.trigger(this._element, $c, { relatedTarget: t }));
    }
    _activateParents(t) {
      if (t.classList.contains(Ic)) {
        y.findOne(xc, t.closest(Pc)).classList.add(It);
        return;
      }
      for (const e of y.parents(t, Mc))
        for (const i of y.prev(e, Rc)) i.classList.add(It);
    }
    _clearActiveClass(t) {
      t.classList.remove(It);
      const e = y.find(`${mn}.${It}`, t);
      for (const i of e) i.classList.remove(It);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Hr.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  };
  const $s = "scrollspy",
    Bc = `.${`mdb.${$s}`}`,
    Is = "activate.bs.scrollspy",
    Wc = `activate${Bc}`,
    Ms = "collapsible-scrollspy",
    jc = "active",
    En = "ul",
    Kc = `.${jc}`,
    Rs = `.${Ms}`;
  class Ps extends Vc {
    constructor(t, e) {
      super(t, e),
        (this._collapsibles = []),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._scrollElement, Is),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return $s;
    }
    _init() {
      this._bindActivateEvent(),
        this._getCollapsibles(),
        this._collapsibles.length !== 0 &&
          (this._showSubsection(), this._hideSubsection());
    }
    _getHeight(t) {
      return t.offsetHeight;
    }
    _hide(t) {
      const e = v.findOne(En, t.parentNode);
      (e.style.overflow = "hidden"), (e.style.height = "0px");
    }
    _show(t, e) {
      t.style.height = e;
    }
    _getCollapsibles() {
      const t = v.find(Rs);
      t &&
        t.forEach((e) => {
          const i = e.parentNode,
            s = v.findOne(En, i),
            r = s.offsetHeight;
          this._collapsibles.push({
            element: s,
            relatedTarget: e.getAttribute("href"),
            height: `${r}px`,
          });
        });
    }
    _showSubsection() {
      v.find(Kc)
        .filter((i) => _.hasClass(i, Ms))
        .forEach((i) => {
          const s = v.findOne(En, i.parentNode),
            r = this._collapsibles.find(
              (o) => (o.relatedTarget = i.getAttribute("href"))
            ).height;
          this._show(s, r);
        });
    }
    _hideSubsection() {
      v.find(Rs)
        .filter((e) => _.hasClass(e, "active") === !1)
        .forEach((e) => {
          this._hide(e);
        });
    }
    _bindActivateEvent() {
      u.on(this._element, Is, (t) => {
        this._showSubsection(),
          this._hideSubsection(),
          u.trigger(this._element, Wc, { relatedTarget: t.relatedTarget });
      });
    }
  }
  const Yc = "tab",
    Ft = ".bs.tab",
    Fc = `hide${Ft}`,
    Uc = `hidden${Ft}`,
    zc = `show${Ft}`,
    Gc = `shown${Ft}`,
    qc = `keydown${Ft}`,
    Xc = "ArrowLeft",
    xs = "ArrowRight",
    Qc = "ArrowUp",
    ks = "ArrowDown",
    gn = "Home",
    Hs = "End",
    _e = "active",
    Vs = "fade",
    bn = "show",
    Zc = "dropdown",
    Bs = ".dropdown-toggle",
    Jc = ".dropdown-menu",
    vn = `:not(${Bs})`,
    tu = '.list-group, .nav, [role="tablist"]',
    eu = ".nav-item, .list-group-item",
    Tn = `${`.nav-link${vn}, .list-group-item${vn}, [role="tab"]${vn}`}, [data-mdb-tab-initialized]`;
  let nu = class Pn extends G {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(tu)),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          h.on(this._element, qc, (e) => this._keydown(e)));
    }
    static get NAME() {
      return Yc;
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? h.trigger(e, Fc, { relatedTarget: t }) : null;
      h.trigger(t, zc, { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      if (!t) return;
      t.classList.add(_e), this._activate(y.getElementFromSelector(t));
      const i = () => {
        if (t.getAttribute("role") !== "tab") {
          t.classList.add(bn);
          return;
        }
        t.removeAttribute("tabindex"),
          t.setAttribute("aria-selected", !0),
          this._toggleDropDown(t, !0),
          h.trigger(t, Gc, { relatedTarget: e });
      };
      this._queueCallback(i, t, t.classList.contains(Vs));
    }
    _deactivate(t, e) {
      if (!t) return;
      t.classList.remove(_e),
        t.blur(),
        this._deactivate(y.getElementFromSelector(t));
      const i = () => {
        if (t.getAttribute("role") !== "tab") {
          t.classList.remove(bn);
          return;
        }
        t.setAttribute("aria-selected", !1),
          t.setAttribute("tabindex", "-1"),
          this._toggleDropDown(t, !1),
          h.trigger(t, Uc, { relatedTarget: e });
      };
      this._queueCallback(i, t, t.classList.contains(Vs));
    }
    _keydown(t) {
      if (![Xc, xs, Qc, ks, gn, Hs].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = this._getChildren().filter((s) => !Et(s));
      let i;
      if ([gn, Hs].includes(t.key)) i = e[t.key === gn ? 0 : e.length - 1];
      else {
        const s = [xs, ks].includes(t.key);
        i = We(e, t.target, s, !0);
      }
      i && (i.focus({ preventScroll: !0 }), Pn.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return y.find(Tn, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const i of e) this._setInitialAttributesOnChild(i);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = y.getElementFromSelector(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains(Zc)) return;
      const s = (r, o) => {
        const a = y.findOne(r, i);
        a && a.classList.toggle(o, e);
      };
      s(Bs, _e), s(Jc, bn), i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(_e);
    }
    _getInnerElement(t) {
      return t.matches(Tn) ? t : y.findOne(Tn, t);
    }
    _getOuterElement(t) {
      return t.closest(eu) || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Pn.getOrCreateInstance(this);
        if (typeof t == "string") {
          if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  };
  const Ws = "tab",
    me = `.${`mdb.${Ws}`}`,
    js = "show.bs.tab",
    Ks = "shown.bs.tab",
    iu = "hide.bs.tab",
    su = "hidden.bs.tab",
    ru = `show${me}`,
    ou = `shown${me}`,
    au = `hide${me}`,
    lu = `hidden${me}`,
    Ys = "active",
    Fs = "fade",
    Us = "show";
  class zs extends nu {
    constructor(t) {
      super(t),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, js),
        u.off(this._element, Ks),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Ws;
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem();
      let i = null,
        s = null;
      e &&
        ((i = u.trigger(e, iu, { relatedTarget: t })),
        (s = u.trigger(e, au, { relatedTarget: t })));
      const r = u.trigger(t, js, { relatedTarget: e }),
        o = u.trigger(t, ru, { relatedTarget: e });
      r.defaultPrevented ||
        o.defaultPrevented ||
        (i && i.defaultPrevented) ||
        (s && s.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      if (!t) return;
      t.classList.add(Ys), this._activate(xt(t));
      const i = () => {
        if (t.getAttribute("role") !== "tab") {
          t.classList.add(Us);
          return;
        }
        t.focus(),
          t.removeAttribute("tabindex"),
          t.setAttribute("aria-selected", !0),
          this._toggleDropDown(t, !0),
          u.trigger(t, Ks, { relatedTarget: e }),
          u.trigger(t, ou, { relatedTarget: e });
      };
      this._queueCallback(i, t, t.classList.contains(Fs));
    }
    _deactivate(t, e) {
      if (!t) return;
      t.classList.remove(Ys), t.blur(), this._deactivate(xt(t));
      const i = () => {
        if (t.getAttribute("role") !== "tab") {
          t.classList.remove(Us);
          return;
        }
        t.setAttribute("aria-selected", !1),
          t.setAttribute("tabindex", "-1"),
          this._toggleDropDown(t, !1),
          u.trigger(t, su, { relatedTarget: e }),
          u.trigger(t, lu, { relatedTarget: e });
      };
      this._queueCallback(i, t, t.classList.contains(Fs));
    }
  }
  const Gs = "tooltip",
    cu = "hide.bs.tooltip",
    uu = "hidden.bs.tooltip",
    du = "show.bs.tooltip",
    hu = "shown.bs.tooltip",
    fu = "inserted.bs.tooltip",
    pu = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
      { name: "inserted" },
    ];
  class qs extends pe {
    constructor(t, e) {
      super(t, e),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, du),
        u.off(this._element, hu),
        u.off(this._element, cu),
        u.off(this._element, uu),
        u.off(this._element, fu),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Gs;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      u.extend(this._element, pu, Gs);
    }
  }
  const _u = "toast",
    ot = ".bs.toast",
    mu = `mouseover${ot}`,
    Eu = `mouseout${ot}`,
    gu = `focusin${ot}`,
    bu = `focusout${ot}`,
    vu = `hide${ot}`,
    Tu = `hidden${ot}`,
    Au = `show${ot}`,
    yu = `shown${ot}`,
    Nu = "fade",
    Xs = "hide",
    Ee = "show",
    ge = "showing",
    Cu = { animation: "boolean", autohide: "boolean", delay: "number" },
    Su = { animation: !0, autohide: !0, delay: 5e3 };
  let wu = class Vr extends G {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return Su;
    }
    static get DefaultType() {
      return Cu;
    }
    static get NAME() {
      return _u;
    }
    show() {
      if (h.trigger(this._element, Au).defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add(Nu);
      const e = () => {
        this._element.classList.remove(ge),
          h.trigger(this._element, yu),
          this._maybeScheduleHide();
      };
      this._element.classList.remove(Xs),
        kt(this._element),
        this._element.classList.add(Ee, ge),
        this._queueCallback(e, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown() || h.trigger(this._element, vu).defaultPrevented)
        return;
      const e = () => {
        this._element.classList.add(Xs),
          this._element.classList.remove(ge, Ee),
          h.trigger(this._element, Tu);
      };
      this._element.classList.add(ge),
        this._queueCallback(e, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Ee),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Ee);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = e;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = e;
          break;
        }
      }
      if (e) {
        this._clearTimeout();
        return;
      }
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      h.on(this._element, mu, (t) => this._onInteraction(t, !0)),
        h.on(this._element, Eu, (t) => this._onInteraction(t, !1)),
        h.on(this._element, gu, (t) => this._onInteraction(t, !0)),
        h.on(this._element, bu, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Vr.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  };
  const Qs = "toast",
    Ou = "show.bs.toast",
    Du = "shown.bs.toast",
    Lu = "hide.bs.toast",
    $u = "hidden.bs.toast",
    Iu = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
    ];
  class Zs extends wu {
    constructor(t, e) {
      super(t, e),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, Ou),
        u.off(this._element, Du),
        u.off(this._element, Lu),
        u.off(this._element, $u),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Qs;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      u.extend(this._element, Iu, Qs);
    }
  }
  (() => {
    var n = {
        454: (i, s, r) => {
          r.d(s, { Z: () => l });
          var o = r(645),
            a = r.n(o)()(function (d) {
              return d[1];
            });
          a.push([
            i.id,
            "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}",
            "",
          ]);
          const l = a;
        },
        645: (i) => {
          i.exports = function (s) {
            var r = [];
            return (
              (r.toString = function () {
                return this.map(function (o) {
                  var a = s(o);
                  return o[2] ? "@media ".concat(o[2], " {").concat(a, "}") : a;
                }).join("");
              }),
              (r.i = function (o, a, l) {
                typeof o == "string" && (o = [[null, o, ""]]);
                var d = {};
                if (l)
                  for (var c = 0; c < this.length; c++) {
                    var f = this[c][0];
                    f != null && (d[f] = !0);
                  }
                for (var g = 0; g < o.length; g++) {
                  var b = [].concat(o[g]);
                  (l && d[b[0]]) ||
                    (a &&
                      (b[2]
                        ? (b[2] = "".concat(a, " and ").concat(b[2]))
                        : (b[2] = a)),
                    r.push(b));
                }
              }),
              r
            );
          };
        },
        810: () => {
          (function () {
            if (typeof window < "u")
              try {
                var i = new window.CustomEvent("test", { cancelable: !0 });
                if ((i.preventDefault(), i.defaultPrevented !== !0))
                  throw new Error("Could not prevent default");
              } catch {
                var s = function (o, a) {
                  var l, d;
                  return (
                    ((a = a || {}).bubbles = !!a.bubbles),
                    (a.cancelable = !!a.cancelable),
                    (l = document.createEvent("CustomEvent")).initCustomEvent(
                      o,
                      a.bubbles,
                      a.cancelable,
                      a.detail
                    ),
                    (d = l.preventDefault),
                    (l.preventDefault = function () {
                      d.call(this);
                      try {
                        Object.defineProperty(this, "defaultPrevented", {
                          get: function () {
                            return !0;
                          },
                        });
                      } catch {
                        this.defaultPrevented = !0;
                      }
                    }),
                    l
                  );
                };
                (s.prototype = window.Event.prototype),
                  (window.CustomEvent = s);
              }
          })();
        },
        379: (i, s, r) => {
          var o,
            a = (function () {
              var E = {};
              return function (p) {
                if (E[p] === void 0) {
                  var m = document.querySelector(p);
                  if (
                    window.HTMLIFrameElement &&
                    m instanceof window.HTMLIFrameElement
                  )
                    try {
                      m = m.contentDocument.head;
                    } catch {
                      m = null;
                    }
                  E[p] = m;
                }
                return E[p];
              };
            })(),
            l = [];
          function d(E) {
            for (var p = -1, m = 0; m < l.length; m++)
              if (l[m].identifier === E) {
                p = m;
                break;
              }
            return p;
          }
          function c(E, p) {
            for (var m = {}, T = [], A = 0; A < E.length; A++) {
              var S = E[A],
                C = p.base ? S[0] + p.base : S[0],
                $ = m[C] || 0,
                I = "".concat(C, " ").concat($);
              m[C] = $ + 1;
              var H = d(I),
                R = { css: S[1], media: S[2], sourceMap: S[3] };
              H !== -1
                ? (l[H].references++, l[H].updater(R))
                : l.push({ identifier: I, updater: M(R, p), references: 1 }),
                T.push(I);
            }
            return T;
          }
          function f(E) {
            var p = document.createElement("style"),
              m = E.attributes || {};
            if (m.nonce === void 0) {
              var T = r.nc;
              T && (m.nonce = T);
            }
            if (
              (Object.keys(m).forEach(function (S) {
                p.setAttribute(S, m[S]);
              }),
              typeof E.insert == "function")
            )
              E.insert(p);
            else {
              var A = a(E.insert || "head");
              if (!A)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              A.appendChild(p);
            }
            return p;
          }
          var g,
            b =
              ((g = []),
              function (E, p) {
                return (
                  (g[E] = p),
                  g.filter(Boolean).join(`
`)
                );
              });
          function O(E, p, m, T) {
            var A = m
              ? ""
              : T.media
              ? "@media ".concat(T.media, " {").concat(T.css, "}")
              : T.css;
            if (E.styleSheet) E.styleSheet.cssText = b(p, A);
            else {
              var S = document.createTextNode(A),
                C = E.childNodes;
              C[p] && E.removeChild(C[p]),
                C.length ? E.insertBefore(S, C[p]) : E.appendChild(S);
            }
          }
          function N(E, p, m) {
            var T = m.css,
              A = m.media,
              S = m.sourceMap;
            if (
              (A ? E.setAttribute("media", A) : E.removeAttribute("media"),
              S &&
                typeof btoa < "u" &&
                (T += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
                  " */"
                )),
              E.styleSheet)
            )
              E.styleSheet.cssText = T;
            else {
              for (; E.firstChild; ) E.removeChild(E.firstChild);
              E.appendChild(document.createTextNode(T));
            }
          }
          var w = null,
            L = 0;
          function M(E, p) {
            var m, T, A;
            if (p.singleton) {
              var S = L++;
              (m = w || (w = f(p))),
                (T = O.bind(null, m, S, !1)),
                (A = O.bind(null, m, S, !0));
            } else
              (m = f(p)),
                (T = N.bind(null, m, p)),
                (A = function () {
                  (function (C) {
                    if (C.parentNode === null) return !1;
                    C.parentNode.removeChild(C);
                  })(m);
                });
            return (
              T(E),
              function (C) {
                if (C) {
                  if (
                    C.css === E.css &&
                    C.media === E.media &&
                    C.sourceMap === E.sourceMap
                  )
                    return;
                  T((E = C));
                } else A();
              }
            );
          }
          i.exports = function (E, p) {
            (p = p || {}).singleton ||
              typeof p.singleton == "boolean" ||
              (p.singleton =
                (o === void 0 &&
                  (o = !!(window && document && document.all && !window.atob)),
                o));
            var m = c((E = E || []), p);
            return function (T) {
              if (
                ((T = T || []),
                Object.prototype.toString.call(T) === "[object Array]")
              ) {
                for (var A = 0; A < m.length; A++) {
                  var S = d(m[A]);
                  l[S].references--;
                }
                for (var C = c(T, p), $ = 0; $ < m.length; $++) {
                  var I = d(m[$]);
                  l[I].references === 0 && (l[I].updater(), l.splice(I, 1));
                }
                m = C;
              }
            };
          };
        },
      },
      t = {};
    function e(i) {
      var s = t[i];
      if (s !== void 0) return s.exports;
      var r = (t[i] = { id: i, exports: {} });
      return n[i](r, r.exports, e), r.exports;
    }
    (e.n = (i) => {
      var s = i && i.__esModule ? () => i.default : () => i;
      return e.d(s, { a: s }), s;
    }),
      (e.d = (i, s) => {
        for (var r in s)
          e.o(s, r) &&
            !e.o(i, r) &&
            Object.defineProperty(i, r, { enumerable: !0, get: s[r] });
      }),
      (e.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s)),
      (() => {
        var i = e(379),
          s = e.n(i),
          r = e(454);
        function o(l) {
          if (!l.hasAttribute("autocompleted")) {
            l.setAttribute("autocompleted", "");
            var d = new window.CustomEvent("onautocomplete", {
              bubbles: !0,
              cancelable: !0,
              detail: null,
            });
            l.dispatchEvent(d) || (l.value = "");
          }
        }
        function a(l) {
          l.hasAttribute("autocompleted") &&
            (l.removeAttribute("autocompleted"),
            l.dispatchEvent(
              new window.CustomEvent("onautocomplete", {
                bubbles: !0,
                cancelable: !1,
                detail: null,
              })
            ));
        }
        s()(r.Z, { insert: "head", singleton: !1 }),
          r.Z.locals,
          e(810),
          document.addEventListener(
            "animationstart",
            function (l) {
              l.animationName === "onautofillstart" ? o(l.target) : a(l.target);
            },
            !0
          ),
          document.addEventListener(
            "input",
            function (l) {
              l.inputType !== "insertReplacementText" && "data" in l
                ? a(l.target)
                : o(l.target);
            },
            !0
          );
      })();
  })();
  class An {
    constructor(t) {
      (t = Vn(t)),
        t &&
          ((this._element = t),
          V.setData(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      V.removeData(this._element, this.constructor.DATA_KEY),
        u.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    static getInstance(t) {
      return V.getData(Vn(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, typeof e == "object" ? e : null)
      );
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `mdb.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const Mu = "input",
    Ru = "mdb.input",
    be = "active",
    Js = "form-notch",
    tr = "form-notch-leading",
    er = "form-notch-middle",
    Pu = "form-notch-trailing",
    xu = "placeholder-active",
    ku = "form-helper",
    Hu = "form-counter",
    nr = `.${Js}`,
    ir = `.${tr}`,
    Vu = `.${er}`,
    Bu = `.${ku}`;
  class ve extends An {
    constructor(t) {
      super(t),
        (this._label = null),
        (this._labelWidth = 0),
        (this._labelMarginLeft = 0),
        (this._notchLeading = null),
        (this._notchMiddle = null),
        (this._notchTrailing = null),
        (this._initiated = !1),
        (this._helper = null),
        (this._counter = !1),
        (this._counterElement = null),
        (this._maxLength = 0),
        (this._leadingIcon = null),
        this._element &&
          (this.init(),
          _.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          W(this.constructor));
    }
    static get NAME() {
      return Mu;
    }
    get input() {
      return (
        v.findOne("input", this._element) ||
        v.findOne("textarea", this._element)
      );
    }
    init() {
      this._initiated ||
        (this._getLabelData(),
        this._applyDivs(),
        this._applyNotch(),
        this._activate(),
        this._getHelper(),
        this._getCounter(),
        (this._initiated = !0));
    }
    update() {
      this._getLabelData(),
        this._getNotchData(),
        this._applyNotch(),
        this._activate(),
        this._getHelper(),
        this._getCounter();
    }
    forceActive() {
      _.addClass(this.input, be);
    }
    forceInactive() {
      _.removeClass(this.input, be);
    }
    dispose() {
      this._removeBorder(),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _getLabelData() {
      (this._label = v.findOne("label", this._element)),
        this._label === null
          ? this._showPlaceholder()
          : (this._getLabelWidth(),
            this._getLabelPositionInInputGroup(),
            this._toggleDefaultDatePlaceholder());
    }
    _getHelper() {
      this._helper = v.findOne(Bu, this._element);
    }
    _getCounter() {
      (this._counter = _.getDataAttribute(this.input, "showcounter")),
        this._counter &&
          ((this._maxLength = this.input.maxLength), this._showCounter());
    }
    _showCounter() {
      if (v.find(".form-counter", this._element).length > 0) return;
      (this._counterElement = document.createElement("div")),
        _.addClass(this._counterElement, Hu);
      const e = this.input.value.length;
      (this._counterElement.innerHTML = `${e} / ${this._maxLength}`),
        this._helper.appendChild(this._counterElement),
        this._bindCounter();
    }
    _bindCounter() {
      u.on(this.input, "input", () => {
        const t = this.input.value.length;
        this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
      });
    }
    _toggleDefaultDatePlaceholder(t = this.input) {
      if (!(t.getAttribute("type") === "date")) return;
      !(document.activeElement === t) && !t.value
        ? (t.style.opacity = 0)
        : (t.style.opacity = 1);
    }
    _showPlaceholder() {
      _.addClass(this.input, xu);
    }
    _getNotchData() {
      (this._notchMiddle = v.findOne(Vu, this._element)),
        (this._notchLeading = v.findOne(ir, this._element));
    }
    _getLabelWidth() {
      this._labelWidth = this._label.clientWidth * 0.8 + 8;
    }
    _getLabelPositionInInputGroup() {
      if (
        ((this._labelMarginLeft = 0),
        !this._element.classList.contains("input-group"))
      )
        return;
      const t = this.input,
        e = v.prev(t, ".input-group-text")[0];
      e === void 0
        ? (this._labelMarginLeft = 0)
        : (this._labelMarginLeft = e.offsetWidth - 1);
    }
    _applyDivs() {
      const t = v.find(nr, this._element),
        e = mt("div");
      _.addClass(e, Js),
        (this._notchLeading = mt("div")),
        _.addClass(this._notchLeading, tr),
        (this._notchMiddle = mt("div")),
        _.addClass(this._notchMiddle, er),
        (this._notchTrailing = mt("div")),
        _.addClass(this._notchTrailing, Pu),
        !(t.length >= 1) &&
          (e.append(this._notchLeading),
          e.append(this._notchMiddle),
          e.append(this._notchTrailing),
          this._element.append(e));
    }
    _applyNotch() {
      (this._notchMiddle.style.width = `${this._labelWidth}px`),
        (this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`),
        this._label !== null &&
          (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
    }
    _removeBorder() {
      const t = v.findOne(nr, this._element);
      t && t.remove();
    }
    _activate(t) {
      Yn(() => {
        this._getElements(t);
        const e = t ? t.target : this.input;
        e.value !== "" && _.addClass(e, be),
          this._toggleDefaultDatePlaceholder(e);
      });
    }
    _getElements(t) {
      if (
        (t &&
          ((this._element = t.target.parentNode),
          (this._label = v.findOne("label", this._element))),
        t && this._label)
      ) {
        const e = this._labelWidth;
        this._getLabelData(),
          e !== this._labelWidth &&
            ((this._notchMiddle = v.findOne(
              ".form-notch-middle",
              t.target.parentNode
            )),
            (this._notchLeading = v.findOne(ir, t.target.parentNode)),
            this._applyNotch());
      }
    }
    _deactivate(t) {
      const e = t ? t.target : this.input;
      e.value === "" && e.classList.remove(be),
        this._toggleDefaultDatePlaceholder(e);
    }
    static activate(t) {
      return function (e) {
        t._activate(e);
      };
    }
    static deactivate(t) {
      return function (e) {
        t._deactivate(e);
      };
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let i = V.getData(this, Ru);
        const s = typeof t == "object" && t;
        if (
          !(!i && /dispose/.test(t)) &&
          (i || (i = new ve(this, s)), typeof t == "string")
        ) {
          if (typeof i[t] > "u") throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  const Wu = "collapse",
    Te = ".bs.collapse",
    ju = `show${Te}`,
    Ku = `shown${Te}`,
    Yu = `hide${Te}`,
    Fu = `hidden${Te}`,
    yn = "show",
    Mt = "collapse",
    Ae = "collapsing",
    Uu = "collapsed",
    zu = `:scope .${Mt} .${Mt}`,
    Gu = "collapse-horizontal",
    qu = "width",
    Xu = "height",
    Qu = ".collapse.show, .collapse.collapsing",
    sr = "[data-mdb-collapse-init]",
    Zu = { parent: null, toggle: !0 },
    Ju = { parent: "(null|element)", toggle: "boolean" };
  let td = class xn extends G {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const i = y.find(sr);
      for (const s of i) {
        const r = y.getSelectorFromElement(s),
          o = y.find(r).filter((a) => a === this._element);
        r !== null && o.length && this._triggerArray.push(s);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return Zu;
    }
    static get DefaultType() {
      return Ju;
    }
    static get NAME() {
      return Wu;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(Qu)
            .filter((a) => a !== this._element)
            .map((a) => xn.getOrCreateInstance(a, { toggle: !1 }))),
        (t.length && t[0]._isTransitioning) ||
          h.trigger(this._element, ju).defaultPrevented)
      )
        return;
      for (const a of t) a.hide();
      const i = this._getDimension();
      this._element.classList.remove(Mt),
        this._element.classList.add(Ae),
        (this._element.style[i] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(Ae),
            this._element.classList.add(Mt, yn),
            (this._element.style[i] = ""),
            h.trigger(this._element, Ku);
        },
        o = `scroll${i[0].toUpperCase() + i.slice(1)}`;
      this._queueCallback(s, this._element, !0),
        (this._element.style[i] = `${this._element[o]}px`);
    }
    hide() {
      if (
        this._isTransitioning ||
        !this._isShown() ||
        h.trigger(this._element, Yu).defaultPrevented
      )
        return;
      const e = this._getDimension();
      (this._element.style[e] = `${
        this._element.getBoundingClientRect()[e]
      }px`),
        kt(this._element),
        this._element.classList.add(Ae),
        this._element.classList.remove(Mt, yn);
      for (const s of this._triggerArray) {
        const r = y.getElementFromSelector(s);
        r && !this._isShown(r) && this._addAriaAndCollapsedClass([s], !1);
      }
      this._isTransitioning = !0;
      const i = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(Ae),
          this._element.classList.add(Mt),
          h.trigger(this._element, Fu);
      };
      (this._element.style[e] = ""), this._queueCallback(i, this._element, !0);
    }
    _isShown(t = this._element) {
      return t.classList.contains(yn);
    }
    _configAfterMerge(t) {
      return (t.toggle = !!t.toggle), (t.parent = it(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains(Gu) ? qu : Xu;
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(sr);
      for (const e of t) {
        const i = y.getElementFromSelector(e);
        i && this._addAriaAndCollapsedClass([e], this._isShown(i));
      }
    }
    _getFirstLevelChildren(t) {
      const e = y.find(zu, this._config.parent);
      return y.find(t, this._config.parent).filter((i) => !e.includes(i));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle(Uu, !e), i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = xn.getOrCreateInstance(this, e);
          if (typeof t == "string") {
            if (typeof i[t] > "u")
              throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  };
  const rr = "collapse",
    ed = "show.bs.collapse",
    nd = "shown.bs.collapse",
    id = "hide.bs.collapse",
    sd = "hidden.bs.collapse",
    rd = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
    ];
  class or extends td {
    constructor(t, e = {}) {
      super(t, e),
        this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, ed),
        u.off(this._element, nd),
        u.off(this._element, id),
        u.off(this._element, sd),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return rr;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      u.extend(this._element, rd, rr);
    }
  }
  const ar = "dropdown",
    ye = ".bs.dropdown",
    od = "Escape",
    lr = "Tab",
    ad = "ArrowUp",
    cr = "ArrowDown",
    ld = 2,
    cd = `hide${ye}`,
    ud = `hidden${ye}`,
    dd = `show${ye}`,
    hd = `shown${ye}`,
    Rt = "show",
    fd = "dropup",
    pd = "dropend",
    _d = "dropstart",
    md = "dropup-center",
    Ed = "dropdown-center",
    Ut = "[data-mdb-dropdown-initialized]:not(.disabled):not(:disabled)",
    gd = `${Ut}.${Rt}`,
    Nn = ".dropdown-menu",
    bd = ".navbar",
    vd = ".navbar-nav",
    Td = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Ad = U() ? "top-end" : "top-start",
    yd = U() ? "top-start" : "top-end",
    Nd = U() ? "bottom-end" : "bottom-start",
    Cd = U() ? "bottom-start" : "bottom-end",
    Sd = U() ? "left-start" : "right-start",
    wd = U() ? "right-start" : "left-start",
    Od = "top",
    Dd = "bottom",
    Ld = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    $d = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  let Id = class Me extends G {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          y.next(this._element, Nn)[0] ||
          y.prev(this._element, Nn)[0] ||
          y.findOne(Nn, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return Ld;
    }
    static get DefaultType() {
      return $d;
    }
    static get NAME() {
      return ar;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (Et(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!h.trigger(this._element, dd, t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(vd))
        )
          for (const i of [].concat(...document.body.children))
            h.on(i, "mouseover", Xt);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(Rt),
          this._element.classList.add(Rt),
          h.trigger(this._element, hd, t);
      }
    }
    hide() {
      if (Et(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!h.trigger(this._element, cd, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const i of [].concat(...document.body.children))
            h.off(i, "mouseover", Xt);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Rt),
          this._element.classList.remove(Rt),
          this._element.setAttribute("aria-expanded", "false"),
          st.removeDataAttribute(this._menu, "popper"),
          h.trigger(this._element, ud, t);
      }
    }
    _getConfig(t) {
      if (
        ((t = super._getConfig(t)),
        typeof t.reference == "object" &&
          !J(t.reference) &&
          typeof t.reference.getBoundingClientRect != "function")
      )
        throw new TypeError(
          `${ar.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (typeof As > "u")
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      this._config.reference === "parent"
        ? (t = this._parent)
        : J(this._config.reference)
        ? (t = it(this._config.reference))
        : typeof this._config.reference == "object" &&
          (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = fn(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(Rt);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains(pd)) return Sd;
      if (t.classList.contains(_d)) return wd;
      if (t.classList.contains(md)) return Od;
      if (t.classList.contains(Ed)) return Dd;
      const e =
        getComputedStyle(this._menu)
          .getPropertyValue("--mdb-position")
          .trim() === "end";
      return t.classList.contains(fd) ? (e ? yd : Ad) : e ? Cd : Nd;
    }
    _detectNavbar() {
      return this._element.closest(bd) !== null;
    }
    _getOffset() {
      const { offset: t } = this._config;
      return typeof t == "string"
        ? t.split(",").map((e) => Number.parseInt(e, 10))
        : typeof t == "function"
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || this._config.display === "static") &&
          (st.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        { ...t, ...B(this._config.popperConfig, [t]) }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = y.find(Td, this._menu).filter((s) => qt(s));
      i.length && We(i, e, t === cr, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Me.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t.button === ld || (t.type === "keyup" && t.key !== lr)) return;
      const e = y.find(gd);
      for (const i of e) {
        const s = Me.getInstance(i);
        if (!s || s._config.autoClose === !1) continue;
        const r = t.composedPath(),
          o = r.includes(s._menu);
        if (
          r.includes(s._element) ||
          (s._config.autoClose === "inside" && !o) ||
          (s._config.autoClose === "outside" && o) ||
          (s._menu.contains(t.target) &&
            ((t.type === "keyup" && t.key === lr) ||
              /input|select|option|textarea|form/i.test(t.target.tagName)))
        )
          continue;
        const a = { relatedTarget: s._element };
        t.type === "click" && (a.clickEvent = t), s._completeHide(a);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = t.key === od,
        s = [ad, cr].includes(t.key);
      if ((!s && !i) || (e && !i)) return;
      t.preventDefault();
      const r = this.matches(Ut)
          ? this
          : y.prev(this, Ut)[0] ||
            y.next(this, Ut)[0] ||
            y.findOne(Ut, t.delegateTarget.parentNode),
        o = Me.getOrCreateInstance(r);
      if (s) {
        t.stopPropagation(), o.show(), o._selectMenuItem(t);
        return;
      }
      o._isShown() && (t.stopPropagation(), o.hide(), r.focus());
    }
  };
  const Cn = "dropdown",
    Ne = `.${`mdb.${Cn}`}`,
    Md = {
      offset: [0, 2],
      flip: !0,
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      dropdownAnimation: "on",
    },
    Rd = {
      offset: "(array|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      dropdownAnimation: "string",
    },
    ur = "hide.bs.dropdown",
    dr = "hidden.bs.dropdown",
    hr = "show.bs.dropdown",
    fr = "shown.bs.dropdown",
    Pd = `hide${Ne}`,
    xd = `hidden${Ne}`,
    kd = `show${Ne}`,
    Hd = `shown${Ne}`,
    Sn = "animation",
    wn = "fade-in",
    On = "fade-out";
  class pr extends Id {
    constructor(t, e) {
      super(t, e),
        (this._config = this._getConfig(e)),
        (this._menuStyle = ""),
        (this._popperPlacement = ""),
        (this._mdbPopperConfig = "");
      const i = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      this._config.dropdownAnimation === "on" && !i && this._init(),
        _.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        W(this.constructor);
    }
    dispose() {
      u.off(this._element, hr),
        u.off(this._parent, fr),
        u.off(this._parent, ur),
        u.off(this._parent, dr),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Cn;
    }
    _init() {
      this._bindShowEvent(),
        this._bindShownEvent(),
        this._bindHideEvent(),
        this._bindHiddenEvent();
    }
    _getConfig(t) {
      const e = { ...Md, ..._.getDataAttributes(this._element), ...t };
      return Bn(Cn, e, Rd), e;
    }
    _getOffset() {
      const { offset: t } = this._config;
      return typeof t == "string"
        ? t.split(",").map((e) => Number.parseInt(e, 10))
        : typeof t == "function"
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
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
        this._config.display === "static" &&
          (_.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        {
          ...t,
          ...(typeof this._config.popperConfig == "function"
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _bindShowEvent() {
      u.on(this._element, hr, (t) => {
        if (
          u.trigger(this._element, kd, { relatedTarget: t.relatedTarget })
            .defaultPrevented
        ) {
          t.preventDefault();
          return;
        }
        this._dropdownAnimationStart("show");
      });
    }
    _bindShownEvent() {
      u.on(this._parent, fr, (t) => {
        if (
          u.trigger(this._parent, Hd, { relatedTarget: t.relatedTarget })
            .defaultPrevented
        ) {
          t.preventDefault();
          return;
        }
      });
    }
    _bindHideEvent() {
      u.on(this._parent, ur, (t) => {
        if (
          u.trigger(this._parent, Pd, { relatedTarget: t.relatedTarget })
            .defaultPrevented
        ) {
          t.preventDefault();
          return;
        }
        (this._menuStyle = this._menu.style.cssText),
          (this._popperPlacement = this._menu.getAttribute(
            "data-popper-placement"
          )),
          (this._mdbPopperConfig = this._menu.getAttribute("data-mdb-popper"));
      });
    }
    _bindHiddenEvent() {
      u.on(this._parent, dr, (t) => {
        if (
          u.trigger(this._parent, xd, { relatedTarget: t.relatedTarget })
            .defaultPrevented
        ) {
          t.preventDefault();
          return;
        }
        this._config.display !== "static" &&
          this._menuStyle !== "" &&
          (this._menu.style.cssText = this._menuStyle),
          this._menu.setAttribute(
            "data-popper-placement",
            this._popperPlacement
          ),
          this._menu.setAttribute("data-mdb-popper", this._mdbPopperConfig),
          this._dropdownAnimationStart("hide");
      });
    }
    _dropdownAnimationStart(t) {
      switch (t) {
        case "show":
          this._menu.classList.add(Sn, wn), this._menu.classList.remove(On);
          break;
        default:
          this._menu.classList.add(Sn, On), this._menu.classList.remove(wn);
          break;
      }
      this._bindAnimationEnd();
    }
    _bindAnimationEnd() {
      u.one(this._menu, "animationend", () => {
        this._menu.classList.remove(Sn, On, wn);
      });
    }
  }
  const Dn = "ripple",
    Vd = "mdb.ripple",
    et = "ripple-surface",
    _r = "ripple-wave",
    mr = "input-wrapper",
    Bd = [".btn", `[data-mdb-${Dn}-init]`],
    Er = "ripple-surface-unbound",
    Wd =
      "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%",
    Ce = [0, 0, 0],
    jd = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ],
    gr = 0.5,
    Kd = {
      rippleCentered: !1,
      rippleColor: "",
      rippleDuration: "500ms",
      rippleRadius: 0,
      rippleUnbound: !1,
    },
    Yd = {
      rippleCentered: "boolean",
      rippleColor: "string",
      rippleDuration: "string",
      rippleRadius: "number",
      rippleUnbound: "boolean",
    };
  class Se extends An {
    constructor(t, e) {
      super(t),
        (this._options = this._getConfig(e)),
        this._element &&
          (_.addClass(this._element, et),
          _.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          W(this.constructor)),
        (this._clickHandler = this._createRipple.bind(this)),
        (this._rippleTimer = null),
        (this._isMinWidthSet = !1),
        (this._rippleInSpan = !1),
        this.init();
    }
    static get NAME() {
      return Dn;
    }
    init() {
      this._addClickEvent(this._element);
    }
    dispose() {
      u.off(this._element, "mousedown", this._clickHandler),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _autoInit(t) {
      Bd.forEach((i) => {
        v.closest(t.target, i) && (this._element = v.closest(t.target, i));
      });
      const e = _.getDataAttributes(this._element);
      if (!(this._element.classList.contains("btn") && e.rippleInit === !1)) {
        if (
          ((this._options = this._getConfig()),
          this._element.tagName.toLowerCase() === "input")
        ) {
          const i = this._element.parentNode;
          if (
            ((this._rippleInSpan = !0),
            i.tagName.toLowerCase() === "span" && i.classList.contains(et))
          )
            this._element = i;
          else {
            const s = getComputedStyle(this._element).boxShadow,
              r = this._element,
              o = document.createElement("span");
            r.classList.contains("btn-block") && (o.style.display = "block"),
              u.one(o, "mouseup", (a) => {
                a.button === 0 && r.click();
              }),
              o.classList.add(et, mr),
              _.addStyle(o, { border: 0, "box-shadow": s }),
              i.replaceChild(o, this._element),
              o.appendChild(this._element),
              (this._element = o);
          }
          this._element.focus();
        }
        this._element.style.minWidth ||
          (_.style(this._element, {
            "min-width": `${getComputedStyle(this._element).width}`,
          }),
          (this._isMinWidthSet = !0)),
          _.addClass(this._element, et),
          this._createRipple(t);
      }
    }
    _addClickEvent(t) {
      u.on(t, "mousedown", this._clickHandler);
    }
    _getEventLayer(t) {
      const e = Math.round(t.clientX - t.target.getBoundingClientRect().x),
        i = Math.round(t.clientY - t.target.getBoundingClientRect().y);
      return { layerX: e, layerY: i };
    }
    _createRipple(t) {
      if (this._element === null) return;
      _.hasClass(this._element, et) || _.addClass(this._element, et);
      const { layerX: e, layerY: i } = this._getEventLayer(t),
        s = e,
        r = i,
        o = this._element.offsetHeight,
        a = this._element.offsetWidth,
        l = this._durationToMsNumber(this._options.rippleDuration),
        d = {
          offsetX: this._options.rippleCentered ? o / 2 : s,
          offsetY: this._options.rippleCentered ? a / 2 : r,
          height: o,
          width: a,
        },
        c = this._getDiameter(d),
        f = this._options.rippleRadius || c / 2,
        g = { delay: l * gr, duration: l - l * gr },
        b = {
          left: this._options.rippleCentered ? `${a / 2 - f}px` : `${s - f}px`,
          top: this._options.rippleCentered ? `${o / 2 - f}px` : `${r - f}px`,
          height: `${this._options.rippleRadius * 2 || c}px`,
          width: `${this._options.rippleRadius * 2 || c}px`,
          transitionDelay: `0s, ${g.delay}ms`,
          transitionDuration: `${l}ms, ${g.duration}ms`,
        },
        O = mt("div");
      this._createHTMLRipple({ wrapper: this._element, ripple: O, styles: b }),
        this._removeHTMLRipple({ ripple: O, duration: l });
    }
    _createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
      Object.keys(i).forEach((s) => (e.style[s] = i[s])),
        e.classList.add(_r),
        this._options.rippleColor !== "" &&
          (this._removeOldColorClasses(t), this._addColor(e, t)),
        this._toggleUnbound(t),
        this._appendRipple(e, t);
    }
    _removeHTMLRipple({ ripple: t, duration: e }) {
      this._rippleTimer &&
        (clearTimeout(this._rippleTimer), (this._rippleTimer = null)),
        (this._rippleTimer = setTimeout(() => {
          t &&
            (t.remove(),
            this._element &&
              (v.find(`.${_r}`, this._element).forEach((i) => {
                i.remove();
              }),
              this._isMinWidthSet &&
                (_.style(this._element, { "min-width": "" }),
                (this._isMinWidthSet = !1)),
              this._rippleInSpan && this._element.classList.contains(mr)
                ? this._removeWrapperSpan()
                : _.removeClass(this._element, et)));
        }, e));
    }
    _removeWrapperSpan() {
      const t = this._element.firstChild;
      this._element.replaceWith(t),
        (this._element = t),
        this._element.focus(),
        (this._rippleInSpan = !1);
    }
    _durationToMsNumber(t) {
      return Number(t.replace("ms", "").replace("s", "000"));
    }
    _getConfig(t = {}) {
      const e = _.getDataAttributes(this._element);
      return (t = { ...Kd, ...e, ...t }), Bn(Dn, t, Yd), t;
    }
    _getDiameter({ offsetX: t, offsetY: e, height: i, width: s }) {
      const r = e <= i / 2,
        o = t <= s / 2,
        a = (g, b) => Math.sqrt(g ** 2 + b ** 2),
        l = e === i / 2 && t === s / 2,
        d = {
          first: r === !0 && o === !1,
          second: r === !0 && o === !0,
          third: r === !1 && o === !0,
          fourth: r === !1 && o === !1,
        },
        c = {
          topLeft: a(t, e),
          topRight: a(s - t, e),
          bottomLeft: a(t, i - e),
          bottomRight: a(s - t, i - e),
        };
      let f = 0;
      return (
        l || d.fourth
          ? (f = c.topLeft)
          : d.third
          ? (f = c.topRight)
          : d.second
          ? (f = c.bottomRight)
          : d.first && (f = c.bottomLeft),
        f * 2
      );
    }
    _appendRipple(t, e) {
      e.appendChild(t),
        setTimeout(() => {
          _.addClass(t, "active");
        }, 50);
    }
    _toggleUnbound(t) {
      this._options.rippleUnbound === !0
        ? _.addClass(t, Er)
        : t.classList.remove(Er);
    }
    _addColor(t, e) {
      if (jd.find((s) => s === this._options.rippleColor.toLowerCase()))
        _.addClass(e, `${et}-${this._options.rippleColor.toLowerCase()}`);
      else {
        const s = this._colorToRGB(this._options.rippleColor).join(","),
          r = Wd.split("{{color}}").join(`${s}`);
        t.style.backgroundImage = `radial-gradient(circle, ${r})`;
      }
    }
    _removeOldColorClasses(t) {
      const e = new RegExp(`${et}-[a-z]+`, "gi");
      (t.classList.value.match(e) || []).forEach((s) => {
        t.classList.remove(s);
      });
    }
    _colorToRGB(t) {
      function e(r) {
        return (
          r.length < 7 && (r = `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`),
          [
            parseInt(r.substr(1, 2), 16),
            parseInt(r.substr(3, 2), 16),
            parseInt(r.substr(5, 2), 16),
          ]
        );
      }
      function i(r) {
        const o = document.body.appendChild(document.createElement("fictum")),
          a = "rgb(1, 2, 3)";
        return (
          (o.style.color = a),
          o.style.color !== a ||
          ((o.style.color = r), o.style.color === a || o.style.color === "")
            ? Ce
            : ((r = getComputedStyle(o).color), document.body.removeChild(o), r)
        );
      }
      function s(r) {
        return (
          (r = r.match(/[.\d]+/g).map((o) => +Number(o))), (r.length = 3), r
        );
      }
      return t.toLowerCase() === "transparent"
        ? Ce
        : t[0] === "#"
        ? e(t)
        : (t.indexOf("rgb") === -1 && (t = i(t)),
          t.indexOf("rgb") === 0 ? s(t) : Ce);
    }
    static autoInitial(t) {
      return function (e) {
        t._autoInit(e);
      };
    }
    static jQueryInterface(t) {
      return this.each(function () {
        return V.getData(this, Vd) ? null : new Se(this, t);
      });
    }
  }
  const Fd = "range",
    Ud = "mdb.range",
    br = "thumb",
    vr = "thumb-active",
    zd = ".thumb-value",
    Gd = `.${br}`;
  class we extends An {
    constructor(t) {
      super(t),
        (this._initiated = !1),
        (this._thumb = null),
        this._element &&
          (this.init(),
          _.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          W(this.constructor));
    }
    static get NAME() {
      return Fd;
    }
    get rangeInput() {
      return v.findOne("input[type=range]", this._element);
    }
    init() {
      this._initiated ||
        (this._addThumb(),
        this._thumbUpdate(),
        this._handleEvents(),
        (this._initiated = !0));
    }
    dispose() {
      this._disposeEvents(),
        _.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _addThumb() {
      const t = mt("span");
      _.addClass(t, br),
        (t.innerHTML = '<span class="thumb-value"></span>'),
        this._element.append(t),
        (this._thumb = v.findOne(Gd, this._element));
    }
    _handleEvents() {
      u.on(this.rangeInput, "mousedown", () => this._showThumb()),
        u.on(this.rangeInput, "mouseup", () => this._hideThumb()),
        u.on(this.rangeInput, "touchstart", () => this._showThumb()),
        u.on(this.rangeInput, "touchend", () => this._hideThumb()),
        u.on(this.rangeInput, "input", () => this._thumbUpdate());
    }
    _disposeEvents() {
      u.off(this.rangeInput, "mousedown"),
        u.off(this.rangeInput, "mouseup"),
        u.off(this.rangeInput, "touchstart"),
        u.off(this.rangeInput, "touchend"),
        u.off(this.rangeInput, "input");
    }
    _showThumb() {
      _.addClass(this._thumb, vr);
    }
    _hideThumb() {
      _.removeClass(this._thumb, vr);
    }
    _thumbUpdate() {
      const t = this.rangeInput,
        e = t.value,
        i = t.min ? t.min : 0,
        s = t.max ? t.max : 100,
        r = v.findOne(zd, this._thumb);
      r.textContent = e;
      const o = Number(((e - i) * 100) / (s - i));
      _.style(this._thumb, { left: `calc(${o}% + (${8 - o * 0.15}px))` });
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let i = V.getData(this, Ud);
        const s = typeof t == "object" && t;
        if (
          !(!i && /dispose/.test(t)) &&
          (i || (i = new we(this, s)), typeof t == "string")
        ) {
          if (typeof i[t] > "u") throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  const qd = (n, t) => {
      const e = n;
      te(e, "close"), v.find(t).forEach((i) => e.getOrCreateInstance(i));
    },
    Xd = (n, t) => {
      const e = n,
        i = `click.bs.${n.name}.data-api`;
      u.on(document, i, t, (s) => {
        s.preventDefault();
        const r = s.target.closest(t);
        e.getOrCreateInstance(r).toggle();
      }),
        v.find(t).forEach((s) => e.getOrCreateInstance(s));
    },
    Qd = (n, t) => {
      const e = `click.bs.${n.name}.data-api`,
        i = "[data-mdb-slide], [data-mdb-slide-to]",
        s = "carousel",
        r = n,
        o = `load.bs.${n.name}.data-api`,
        a = t;
      u.on(document, e, i, function (l) {
        const d = xt(this);
        if (!d || !d.classList.contains(s)) return;
        l.preventDefault();
        const c = r.getOrCreateInstance(d),
          f = this.getAttribute("data-mdb-slide-to");
        if (f) {
          c.to(f), c._maybeEnableCycle();
          return;
        }
        if (_.getDataAttribute(this, "slide") === "next") {
          c.next(), c._maybeEnableCycle();
          return;
        }
        c.prev(), c._maybeEnableCycle();
      }),
        u.on(window, o, () => {
          v.find(a).forEach((d) => {
            r.getOrCreateInstance(d);
          });
        });
    },
    Zd = (n, t) => {
      const e = `click.bs.${n.name}.data-api`,
        i = t,
        s = n;
      u.on(document, e, i, function (r) {
        (r.target.tagName === "A" ||
          (r.delegateTarget && r.delegateTarget.tagName === "A")) &&
          r.preventDefault();
        const o = Re(this);
        v.find(o).forEach((l) => {
          s.getOrCreateInstance(l, { toggle: !1 }).toggle();
        });
      }),
        v.find(i).forEach((r) => {
          const o = Re(r);
          v.find(o).forEach((l) => {
            s.getOrCreateInstance(l, { toggle: !1 });
          });
        });
    },
    Jd = (n, t) => {
      const e = `click.bs.${n.name}.data-api`,
        i = `keydown.bs.${n.name}.data-api`,
        s = `keyup.bs.${n.name}.data-api`,
        r = ".dropdown-menu",
        o = `[data-mdb-${n.NAME}-initialized]`,
        a = n;
      u.on(document, i, o, a.dataApiKeydownHandler),
        u.on(document, i, r, a.dataApiKeydownHandler),
        u.on(document, e, a.clearMenus),
        u.on(document, s, a.clearMenus),
        u.on(document, e, o, function (l) {
          l.preventDefault(), a.getOrCreateInstance(this).toggle();
        }),
        v.find(t).forEach((l) => {
          a.getOrCreateInstance(l);
        });
    },
    th = (n, t) => {
      const e = t,
        i = `${e} input`,
        s = `${e} textarea`,
        r = n;
      u.on(document, "focus", i, r.activate(new r())),
        u.on(document, "input", i, r.activate(new r())),
        u.on(document, "blur", i, r.deactivate(new r())),
        u.on(document, "focus", s, r.activate(new r())),
        u.on(document, "input", s, r.activate(new r())),
        u.on(document, "blur", s, r.deactivate(new r())),
        u.on(window, "shown.bs.modal", (o) => {
          v.find(i, o.target).forEach((a) => {
            const l = r.getInstance(a.parentNode);
            l && l.update();
          }),
            v.find(s, o.target).forEach((a) => {
              const l = r.getInstance(a.parentNode);
              l && l.update();
            });
        }),
        u.on(window, "shown.bs.dropdown", (o) => {
          const a = o.target.parentNode.querySelector(".dropdown-menu");
          a &&
            (v.find(i, a).forEach((l) => {
              const d = r.getInstance(l.parentNode);
              d && d.update();
            }),
            v.find(s, a).forEach((l) => {
              const d = r.getInstance(l.parentNode);
              d && d.update();
            }));
        }),
        u.on(window, "shown.bs.tab", (o) => {
          let a;
          o.target.href
            ? (a = o.target.href.split("#")[1])
            : (a = _.getDataAttribute(o.target, "target").split("#")[1]);
          const l = v.findOne(`#${a}`);
          v.find(i, l).forEach((d) => {
            const c = r.getInstance(d.parentNode);
            c && c.update();
          }),
            v.find(s, l).forEach((d) => {
              const c = r.getInstance(d.parentNode);
              c && c.update();
            });
        }),
        v.find(e).map((o) => new r(o)),
        u.on(window, "reset", (o) => {
          v.find(i, o.target).forEach((a) => {
            const l = r.getInstance(a.parentNode);
            l && l.forceInactive();
          }),
            v.find(s, o.target).forEach((a) => {
              const l = r.getInstance(a.parentNode);
              l && l.forceInactive();
            });
        }),
        u.on(window, "onautocomplete", (o) => {
          const a = r.getInstance(o.target.parentNode);
          !a || !o.cancelable || a.forceActive();
        });
    },
    eh = (n, t) => {
      const e = `click.bs.${n.name}.data-api`,
        i = ".modal.show",
        s = n,
        r = `show.bs.${n.name}`,
        o = `hidden.bs.${n.name}`;
      u.on(document, e, t, function (a) {
        const l = xt(this);
        ["A", "AREA"].includes(this.tagName) && a.preventDefault(),
          u.one(l, r, (f) => {
            f.defaultPrevented ||
              u.one(l, o, () => {
                Wn(this) && this.focus();
              });
          }),
          v.find(i).forEach((f) => {
            f.classList.contains("modal-non-invasive-show") ||
              s.getInstance(f).hide();
          }),
          s.getOrCreateInstance(l).toggle(this);
      }),
        te(s),
        v.find(t).forEach((a) => {
          const l = Re(a),
            d = v.findOne(l);
          s.getOrCreateInstance(d);
        });
    },
    nh = (n, t) => {
      const e = `click.bs.${n.name}.data-api`,
        i = ".offcanvas.show",
        s = n,
        r = `hidden.bs.${n.name}`,
        o = `load.bs.${n.name}.data-api`,
        a = `resize.bs.${n.name}`;
      u.on(document, e, t, function (l) {
        const d = xt(this);
        if (
          (["A", "AREA"].includes(this.tagName) && l.preventDefault(), jn(this))
        )
          return;
        u.one(d, r, () => {
          Wn(this) && this.focus();
        });
        const c = v.findOne(i);
        c && c !== d && s.getInstance(c).hide(),
          s.getOrCreateInstance(d).toggle(this);
      }),
        u.on(window, o, () => {
          v.find(i).forEach((l) => {
            s.getOrCreateInstance(l).show();
          });
        }),
        u.on(window, a, () => {
          v.find("[aria-modal][class*=show][class*=offcanvas-]").forEach(
            (l) => {
              getComputedStyle(l).position !== "fixed" &&
                s.getOrCreateInstance(l).hide();
            }
          );
        }),
        te(s);
    },
    ih = (n, t) => {
      const e = `load.bs.${n.name}.data-api`,
        i = n;
      u.on(window, e, () => {
        v.find(t).forEach((s) => {
          i.getOrCreateInstance(s);
        });
      });
    },
    sh = (n, t) => {
      const e = `load.bs.${n.name}.data-api`,
        i = `click.bs.${n.name}.data-api`,
        s = "active",
        r = `.${s}[data-mdb-tab-init], .${s}[data-mdb-pill-init], .${s}[data-mdb-toggle="list"]`,
        o = n;
      u.on(document, i, t, function (a) {
        ["A", "AREA"].includes(this.tagName) && a.preventDefault(),
          !jn(this) && o.getOrCreateInstance(this).show();
      }),
        u.on(window, e, () => {
          v.find(r).forEach((a) => {
            o.getOrCreateInstance(a);
          });
        });
    },
    rh = (n, t) => {
      const e = n;
      te(e), v.find(t).forEach((i) => e.getOrCreateInstance(i));
    },
    Tr = (n, t) => {
      const e = n;
      u.one(document, "mousedown", t, e.autoInitial(new e()));
    },
    oh = {
      alert: {
        name: "Alert",
        selector: "[data-mdb-alert-init]",
        isToggler: !0,
        callback: qd,
      },
      button: {
        name: "Button",
        selector: "[data-mdb-button-init]",
        isToggler: !0,
        callback: Xd,
      },
      carousel: {
        name: "Carousel",
        selector: "[data-mdb-carousel-init]",
        isToggler: !0,
        callback: Qd,
      },
      collapse: {
        name: "Collapse",
        selector: "[data-mdb-collapse-init]",
        isToggler: !0,
        callback: Zd,
      },
      dropdown: {
        name: "Dropdown",
        selector: "[data-mdb-dropdown-init]",
        isToggler: !0,
        callback: Jd,
      },
      modal: {
        name: "Modal",
        selector: "[data-mdb-modal-init]",
        isToggler: !0,
        callback: eh,
      },
      offcanvas: {
        name: "Offcanvas",
        selector: "[data-mdb-offcanvas-init]",
        isToggler: !0,
        callback: nh,
      },
      scrollspy: {
        name: "ScrollSpy",
        selector: "[data-mdb-scrollspy-init]",
        isToggler: !0,
        callback: ih,
      },
      tab: {
        name: "Tab",
        selector:
          "[data-mdb-tab-init], [data-mdb-pill-init], [data-mdb-list-init]",
        isToggler: !0,
        callback: sh,
      },
      toast: {
        name: "Toast",
        selector: "[data-mdb-toast-init]",
        isToggler: !0,
        callback: rh,
      },
      tooltip: {
        name: "Tooltip",
        selector: "[data-mdb-tooltip-init]",
        isToggler: !1,
      },
      input: {
        name: "Input",
        selector: "[data-mdb-input-init]",
        isToggler: !0,
        callback: th,
      },
      range: {
        name: "Range",
        selector: "[data-mdb-range-init]",
        isToggler: !1,
      },
      ripple: {
        name: "Ripple",
        selector: "[data-mdb-ripple-init]",
        isToggler: !0,
        callback: Tr,
      },
      popover: {
        name: "Popover",
        selector: "[data-mdb-popover-init]",
        isToggler: !1,
        callback: Tr,
      },
    },
    Ar = new po(oh).initMDB;
  Ar({
    Alert: Pi,
    Button: Jt,
    Carousel: Vi,
    Collapse: or,
    Offcanvas: ie,
    Dropdown: pr,
    Input: ve,
    Modal: Ki,
    Popover: ws,
    Ripple: Se,
    ScrollSpy: Ps,
    Tab: zs,
    Toast: Zs,
    Tooltip: qs,
    Range: we,
  }),
    (D.Alert = Pi),
    (D.Button = Jt),
    (D.Carousel = Vi),
    (D.Collapse = or),
    (D.Dropdown = pr),
    (D.Input = ve),
    (D.Modal = Ki),
    (D.Offcanvas = ie),
    (D.Popover = ws),
    (D.Range = we),
    (D.Ripple = Se),
    (D.ScrollSpy = Ps),
    (D.Tab = zs),
    (D.Toast = Zs),
    (D.Tooltip = qs),
    (D.initMDB = Ar),
    Object.defineProperty(D, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=mdb.umd.min.js.map
