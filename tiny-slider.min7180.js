var tns = (function () {
  function vc() {
    for (
      var b, c, d, e = arguments[0] || {}, u = 1, r = arguments.length;
      u < r;
      u++
    )
      if (null !== (b = arguments[u]))
        for (c in b) (d = b[c]), e !== d && void 0 !== d && (e[c] = d);
    return e;
  }
  function U(b) {
    return 0 <= ["true", "false"].indexOf(b) ? JSON.parse(b) : b;
  }
  function ca(b, c, d, e) {
    if (e)
      try {
        b.setItem(c, d);
      } catch (u) {}
    return d;
  }
  function Rd() {
    var b = window.tnsId;
    window.tnsId = b ? b + 1 : 1;
    return "tns" + window.tnsId;
  }
  function gb() {
    var b = document,
      c = b.body;
    c || ((c = b.createElement("body")), (c.fake = !0));
    return c;
  }
  function Da(b) {
    var c = "";
    b.fake &&
      ((c = Ea.style.overflow),
      (b.style.background = ""),
      (b.style.overflow = Ea.style.overflow = "hidden"),
      Ea.appendChild(b));
    return c;
  }
  function Xa(b, c) {
    b.fake && (b.remove(), (Ea.style.overflow = c), Ea.offsetHeight);
  }
  function Sd() {
    var b = document,
      c = gb(),
      d = Da(c);
    b = b.createElement("div");
    var e = !1;
    c.appendChild(b);
    try {
      for (
        var u = [
            "calc(10px * 10)",
            "-moz-calc(10px * 10)",
            "-webkit-calc(10px * 10)",
          ],
          r,
          E = 0;
        3 > E;
        E++
      )
        if (((r = u[E]), (b.style.width = r), 100 === b.offsetWidth)) {
          e = r.replace("(10px * 10)", "");
          break;
        }
    } catch (ee) {}
    c.fake ? Xa(c, d) : b.remove();
    return e;
  }
  function Td() {
    var b = document,
      c = gb(),
      d = Da(c),
      e = b.createElement("div");
    b = b.createElement("div");
    var u = "";
    e.className = "tns-t-subp2";
    b.className = "tns-t-ct";
    for (var r = 0; 70 > r; r++) u += "<div></div>";
    b.innerHTML = u;
    e.appendChild(b);
    c.appendChild(e);
    b =
      2 >
      Math.abs(
        e.getBoundingClientRect().left -
          b.children[67].getBoundingClientRect().left
      );
    c.fake ? Xa(c, d) : e.remove();
    return b;
  }
  function Ud() {
    var b = document,
      c = gb(),
      d = Da(c),
      e = b.createElement("div"),
      u = b.createElement("style");
    u.type = "text/css";
    e.className = "tns-mq-test";
    c.appendChild(u);
    c.appendChild(e);
    u.styleSheet
      ? (u.styleSheet.cssText =
          "@media all and (min-width:1px){.tns-mq-test{position:absolute}}")
      : u.appendChild(
          b.createTextNode(
            "@media all and (min-width:1px){.tns-mq-test{position:absolute}}"
          )
        );
    b = window.getComputedStyle
      ? window.getComputedStyle(e).position
      : e.currentStyle.position;
    c.fake ? Xa(c, d) : e.remove();
    return "absolute" === b;
  }
  function Vd(b) {
    var c = document.createElement("style");
    b && c.setAttribute("media", b);
    document.querySelector("head").appendChild(c);
    return c.sheet ? c.sheet : c.styleSheet;
  }
  function Fa(b, c, d, e) {
    "insertRule" in b ? b.insertRule(c + "{" + d + "}", e) : b.addRule(c, d, e);
  }
  function Ca(b) {
    return ("insertRule" in b ? b.cssRules : b.rules).length;
  }
  function Ga(b, c, d) {
    for (var e = 0, u = b.length; e < u; e++) c.call(d, b[e], e);
  }
  function M(b, c) {
    b = "undefined" !== typeof b.item || b instanceof Array ? b : [b];
    if ("[object Object]" === Object.prototype.toString.call(c))
      for (var d = b.length; d--; ) for (var e in c) b[d].setAttribute(e, c[e]);
  }
  function Ha(b, c) {
    b = "undefined" !== typeof b.item || b instanceof Array ? b : [b];
    c = c instanceof Array ? c : [c];
    for (var d = c.length, e = b.length; e--; )
      for (var u = d; u--; ) b[e].removeAttribute(c[u]);
  }
  function $c(b) {
    for (var c = [], d = 0, e = b.length; d < e; d++) c.push(b[d]);
    return c;
  }
  function V(b, c) {
    "none" !== b.style.display && (b.style.display = "none");
  }
  function ja(b, c) {
    "none" === b.style.display && (b.style.display = "");
  }
  function rb(b) {
    if ("string" === typeof b) {
      var c = [b],
        d = b.charAt(0).toUpperCase() + b.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function (e) {
        ("ms" === e && "transform" !== b) || c.push(e + d);
      });
      b = c;
    }
    for (
      var e = document.createElement("fakeelement"), u = 0;
      u < b.length;
      u++
    ) {
      var r = b[u];
      if (void 0 !== e.style[r]) return r;
    }
    return !1;
  }
  function Wd(b) {
    if (!b || !window.getComputedStyle) return !1;
    var c = document,
      d = gb(),
      e = Da(d);
    c = c.createElement("p");
    var u = 9 < b.length ? "-" + b.slice(0, -9).toLowerCase() + "-" : "";
    u += "transform";
    d.insertBefore(c, null);
    c.style[b] = "translate3d(1px,1px,1px)";
    b = window.getComputedStyle(c).getPropertyValue(u);
    d.fake ? Xa(d, e) : c.remove();
    return void 0 !== b && 0 < b.length && "none" !== b;
  }
  function ad(b, c) {
    var d = !1;
    /^Webkit/.test(b)
      ? (d = "webkit" + c + "End")
      : /^O/.test(b)
      ? (d = "o" + c + "End")
      : b && (d = c.toLowerCase() + "end");
    return d;
  }
  function r(b, c, d) {
    for (var e in c) {
      var u = 0 <= ["touchstart", "touchmove"].indexOf(e) && !d ? sb : !1;
      b.addEventListener(e, c[e], u);
    }
  }
  function D(b, c) {
    for (var d in c) {
      var e = 0 <= ["touchstart", "touchmove"].indexOf(d) ? sb : !1;
      b.removeEventListener(d, c[d], e);
    }
  }
  function Xd() {
    return {
      topics: {},
      on: function (b, c) {
        this.topics[b] = this.topics[b] || [];
        this.topics[b].push(c);
      },
      off: function (b, c) {
        if (this.topics[b])
          for (var d = 0; d < this.topics[b].length; d++)
            if (this.topics[b][d] === c) {
              this.topics[b].splice(d, 1);
              break;
            }
      },
      emit: function (b, c) {
        c.type = b;
        this.topics[b] &&
          this.topics[b].forEach(function (d) {
            d(c, b);
          });
      },
    };
  }
  function Yd(b, c, d, e, u, r, E) {
    function D() {
      r -= N;
      V += ja;
      b.style[c] = d + V + M + e;
      0 < r ? setTimeout(D, N) : E();
    }
    var N = Math.min(r, 10),
      M = 0 <= u.indexOf("%") ? "%" : "px";
    u = u.replace(M, "");
    var V = Number(b.style[c].replace(d, "").replace(e, "").replace(M, "")),
      ja = ((u - V) / r) * N;
    setTimeout(D, N);
  }
  var W = window,
    Ia =
      W.requestAnimationFrame ||
      W.webkitRequestAnimationFrame ||
      W.mozRequestAnimationFrame ||
      W.msRequestAnimationFrame ||
      function (b) {
        return setTimeout(b, 16);
      };
  W = window;
  var wc =
      W.cancelAnimationFrame ||
      W.mozCancelAnimationFrame ||
      function (b) {
        clearTimeout(b);
      },
    Ea = document.documentElement,
    hb = (W = "classList" in document.createElement("_"))
      ? function (b, c) {
          return b.classList.contains(c);
        }
      : function (b, c) {
          return 0 <= b.className.indexOf(c);
        },
    E = W
      ? function (b, c) {
          hb(b, c) || b.classList.add(c);
        }
      : function (b, c) {
          hb(b, c) || (b.className += " " + c);
        },
    N = W
      ? function (b, c) {
          hb(b, c) && b.classList.remove(c);
        }
      : function (b, c) {
          hb(b, c) && (b.className = b.className.replace(c, ""));
        },
    tb = !1;
  try {
    var xc = Object.defineProperty({}, "passive", {
      get: function () {
        tb = !0;
      },
    });
    window.addEventListener("test", null, xc);
  } catch (b) {}
  var sb = tb ? { passive: !0 } : !1;
  Object.keys ||
    (Object.keys = function (b) {
      var c = [],
        d;
      for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(d);
      return c;
    });
  "remove" in Element.prototype ||
    (Element.prototype.remove = function () {
      this.parentNode && this.parentNode.removeChild(this);
    });
  var Qd = function (b) {
    function c(a) {
      for (var b in a)
        l ||
          ("slideBy" === b && (a[b] = "page"),
          "edgePadding" === b && (a[b] = !1),
          "autoHeight" === b && (a[b] = !1)),
          "responsive" === b && c(a[b]);
    }
    function d(a) {
      a && (ya = za = Ja = Ka = La = da = Ma = Na = !1);
    }
    function e() {
      for (var a = l ? f - X : f; 0 > a; ) a += p;
      return (a % p) + 1;
    }
    function u(a) {
      a = a ? Math.max(0, Math.min(Y ? p - 1 : p - v, a)) : 0;
      return l ? a + X : a;
    }
    function W(a) {
      null == a && (a = f);
      for (l && (a -= X); 0 > a; ) a += p;
      return Math.floor(a % p);
    }
    function Ea() {
      var a = W();
      a = ub
        ? a
        : m || t
        ? Math.ceil(((a + 1) * ta) / p - 1)
        : Math.floor(a / v);
      !Y && l && f === qa && (a = ta - 1);
      return a;
    }
    function gb() {
      if (t || (m && !yc)) var a = p - 1;
      else {
        a = m ? "fixedWidth" : "items";
        var g = [];
        (m || b[a] < p) && g.push(b[a]);
        if (G)
          for (var h in G) {
            var c = G[h][a];
            c && (m || c < p) && g.push(c);
          }
        g.length || g.push(0);
        a = Math.ceil(
          m ? yc / Math.min.apply(null, g) : Math.max.apply(null, g)
        );
      }
      g = l ? Math.ceil((5 * a - p) / 2) : 4 * a - p;
      g = Math.max(a, g);
      return sa("edgePadding") ? g + 1 : g;
    }
    function Da(a) {
      return "top" === a ? "afterbegin" : "beforeend";
    }
    function Xa(a) {
      if (null != a) {
        var b = O.createElement("div");
        a.appendChild(b);
        var h = b.getBoundingClientRect();
        h = h.right - h.left;
        b.remove();
        return h || Xa(a.parentNode);
      }
    }
    function sb() {
      var a = J ? 2 * J - w : 0;
      return Xa(zc) - a;
    }
    function sa(a) {
      if (b[a]) return !0;
      if (G) for (var g in G) if (G[g][a]) return !0;
      return !1;
    }
    function q(a, g) {
      null == g && (g = Ub);
      if ("items" === a && m && "pages" === Oa)
        return Math.floor((P + w) / (m + w)) || 1;
      var h = b[a];
      if (G) for (var c in G) g >= parseInt(c) && a in G[c] && (h = G[c][a]);
      "slideBy" === a && "page" === h && (h = q("items"));
      l || ("slideBy" !== a && "items" !== a) || (h = Math.floor(h));
      return h;
    }
    function Vb(a, b, h, c, f) {
      var g = "";
      void 0 !== a
        ? ((h = a),
          b && (h -= b),
          (g = A
            ? "margin: 0 " + h + "px 0 " + a + "px;"
            : "margin: " + a + "px 0 " + h + "px 0;"))
        : b &&
          !h &&
          ((a = "-" + b + "px"),
          (g = "margin: 0 " + (A ? a + " 0 0" : "0 " + a + " 0") + ";"));
      !l && f && H && c && (g += Ya(c));
      return g;
    }
    function Wb(a, b, h) {
      return a
        ? (a + b) * y + "px"
        : Za
        ? Za + "(" + 100 * y + "% / " + h + ")"
        : (100 * y) / h + "%";
    }
    function Xb(a, b, h) {
      a
        ? (a = a + b + "px")
        : (l || (h = Math.floor(h)),
          (a = l ? y : h),
          (a = Za ? Za + "(100% / " + a + ")" : 100 / a + "%"));
      a = "width:" + a;
      return "inner" !== ib ? a + ";" : a + " !important;";
    }
    function Yb(a) {
      var b = "";
      !1 !== a &&
        (b =
          (A ? "padding-" : "margin-") +
          (A ? "right" : "bottom") +
          ": " +
          a +
          "px;");
      return b;
    }
    function tb(a, b) {
      var g = a.substring(0, a.length - b).toLowerCase();
      g && (g = "-" + g + "-");
      return g;
    }
    function Ya(a) {
      return tb(H, 18) + "transition-duration:" + a / 1e3 + "s;";
    }
    function bd(a) {
      return tb(Zb, 17) + "animation-duration:" + a / 1e3 + "s;";
    }
    function cd() {
      if (sa("autoHeight") || t || !A) {
        var a = k.querySelectorAll("img");
        Ga(a, function (a) {
          var b = a.src;
          vb ||
            (b && 0 > b.indexOf("data:image")
              ? ((a.src = ""), r(a, $b), E(a, "loading"), (a.src = b))
              : (E(a, "loaded"), ac(a)));
        });
        Ia(function () {
          bc($c(a), function () {
            Ac = !0;
          });
        });
        sa("autoHeight") && (a = Bc(f, Math.min(f + v - 1, y - 1)));
        vb
          ? dd()
          : Ia(function () {
              bc($c(a), dd);
            });
      } else l && wb(), ed(), fd();
    }
    function dd() {
      if (t) {
        var a = Y ? f : p - 1;
        (function h() {
          var b = x[a].getBoundingClientRect().left,
            c = x[a - 1].getBoundingClientRect().right;
          1 >= Math.abs(b - c)
            ? gd()
            : setTimeout(function () {
                h();
              }, 16);
        })();
      } else gd();
    }
    function gd() {
      if (!A || t)
        hd(),
          t ? ((jb = Cc()), cc && (ua = Dc()), (qa = xb()), d(na || ua)) : Ec();
      l && wb();
      ed();
      fd();
    }
    function ed() {
      Fc();
      Z.insertAdjacentHTML(
        "afterbegin",
        '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
          id() +
          "</span>  of " +
          p +
          "</div>"
      );
      Gc = Z.querySelector(".tns-liveregion .current");
      if (Hc) {
        var a = da ? "stop" : "start";
        F
          ? M(F, { "data-action": a })
          : b.autoplayButtonOutput &&
            (Z.insertAdjacentHTML(
              Da(b.autoplayPosition),
              '<button type="button" data-action="' +
                a +
                '">' +
                yb[0] +
                a +
                yb[1] +
                Pa[0] +
                "</button>"
            ),
            (F = Z.querySelector("[data-action]")));
        F && r(F, { click: jd });
        da && (dc(), Ma && r(k, zb), Na && r(k, Ab));
      }
      if (Ic) {
        if (aa)
          M(aa, { "aria-label": "Carousel Pagination" }),
            (ka = aa.children),
            Ga(ka, function (a, b) {
              M(a, {
                "data-nav": b,
                tabindex: "-1",
                "aria-label": kb + (b + 1),
                "aria-controls": K,
              });
            });
        else {
          a = "";
          for (var g = ub ? "" : 'style="display:none"', h = 0; h < p; h++)
            a +=
              '<button type="button" data-nav="' +
              h +
              '" tabindex="-1" aria-controls="' +
              K +
              '" ' +
              g +
              ' aria-label="' +
              kb +
              (h + 1) +
              '"></button>';
          a =
            '<div class="tns-nav" aria-label="Carousel Pagination">' +
            a +
            "</div>";
          Z.insertAdjacentHTML(Da(b.navPosition), a);
          aa = Z.querySelector(".tns-nav");
          ka = aa.children;
        }
        kd();
        H &&
          ((a = H.substring(0, H.length - 18).toLowerCase()),
          (g = "transition: all " + va / 1e3 + "s"),
          a && (g = "-" + a + "-" + g),
          Fa(C, "[aria-controls^=" + K + "-item]", g, Ca(C)));
        M(ka[la], { "aria-label": kb + (la + 1) + Jc });
        Ha(ka[la], "tabindex");
        E(ka[la], ec);
        r(aa, Kc);
      }
      if (fc) {
        L ||
          (B && z) ||
          (Z.insertAdjacentHTML(
            Da(b.controlsPosition),
            '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
              K +
              '">' +
              Qa[0] +
              '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
              K +
              '">' +
              Qa[1] +
              "</button></div>"
          ),
          (L = Z.querySelector(".tns-controls")));
        (B && z) || ((B = L.children[0]), (z = L.children[1]));
        b.controlsContainer &&
          M(L, { "aria-label": "Carousel Navigation", tabindex: "0" });
        (b.controlsContainer || (b.prevButton && b.nextButton)) &&
          M([B, z], { "aria-controls": K, tabindex: "-1" });
        if (b.controlsContainer || (b.prevButton && b.nextButton))
          M(B, { "data-controls": "prev" }), M(z, { "data-controls": "next" });
        Bb = "button" === B.nodeName.toLowerCase();
        Cb = "button" === z.nodeName.toLowerCase();
        ld();
        L ? r(L, Db) : (r(B, Db), r(z, Db));
      }
      Lc();
    }
    function fd() {
      if (l && $a) {
        var a = {};
        a[$a] = ea;
        r(k, a);
      }
      Ja && r(k, Eb, b.preventScrollOnTouch);
      Ka && r(k, Fb);
      La && r(O, Gb);
      if ("inner" === ib)
        Q.on("outerResized", function () {
          md();
          Q.emit("innerLoaded", fa());
        });
      else (G || m || t || oa || !A) && r(Aa, { resize: nd });
      if (oa)
        if ("outer" === ib) Q.on("innerLoaded", gc);
        else na || gc();
      Mc();
      na ? od() : ua && pd();
      Q.on("indexChanged", qd);
      "inner" === ib && Q.emit("innerLoaded", fa());
      "function" === typeof Nc && Nc(fa());
      Hb = !0;
    }
    function nd(a) {
      Ia(function () {
        try {
          md(xa(a));
        } catch (e) {}
      });
    }
    function md(a) {
      if (Hb) {
        "outer" === ib && Q.emit("outerResized", fa(a));
        Ub =
          Aa.innerWidth || O.documentElement.clientWidth || O.body.clientWidth;
        var g,
          h = Ib,
          c = !1;
        G && (rd(), (g = h !== Ib) && Q.emit("newBreakpointStart", fa(a)));
        var e,
          wa = v,
          n = na,
          H = ua,
          I = La,
          M = ya,
          R = za,
          S = Ja,
          W = Ka,
          Z = da,
          ka = Ma,
          la = Na;
        h = f;
        if (g) {
          var T = m,
            U = oa,
            ca = Qa,
            ra = ba;
          var ea = Pa;
          if (!lb)
            var ia = w,
              ma = J;
        }
        La = q("arrowKeys");
        ya = q("controls");
        za = q("nav");
        Ja = q("touch");
        ba = q("center");
        Ka = q("mouseDrag");
        da = q("autoplay");
        Ma = q("autoplayHoverPause");
        Na = q("autoplayResetOnVisibility");
        g &&
          ((na = q("disable")),
          (m = q("fixedWidth")),
          (va = q("speed")),
          (oa = q("autoHeight")),
          (Qa = q("controlsText")),
          (Pa = q("autoplayText")),
          (Oc = q("autoplayTimeout")),
          lb || ((J = q("edgePadding")), (w = q("gutter"))));
        d(na);
        P = sb();
        (A && !t) || na || (hd(), A || (Ec(), (c = !0)));
        if (m || t) (jb = Cc()), (qa = xb());
        if (g || m)
          if (((v = q("items")), (Oa = q("slideBy")), (e = v !== wa)))
            m || t || (qa = xb()), Pc();
        if (g && na !== n)
          if (na) od();
          else if (Jb) {
            C.disabled = !1;
            k.className += Ra;
            wb();
            if (Y) for (wa = X; wa--; ) l && ja(x[wa]), ja(x[y - wa - 1]);
            if (!l)
              for (wa = f, n = f + p; wa < n; wa++) {
                var sa = x[wa],
                  xa = wa < f + v ? Sa : Ba;
                sa.style.left = (100 * (wa - f)) / v + "%";
                E(sa, xa);
              }
            sd();
            Jb = !1;
          }
        if (cc && (g || m || t) && ((ua = Dc()), ua !== H))
          if (ua) Qc(hc(u(0))), pd();
          else {
            if (Kb) {
              J && lb && (ha.style.margin = "");
              if (X)
                for (c = X; c--; )
                  l && N(x[c], "tns-transparent"),
                    N(x[y - c - 1], "tns-transparent");
              sd();
              Kb = !1;
            }
            c = !0;
          }
        d(na || ua);
        da || (Ma = Na = !1);
        La !== I && (La ? r(O, Gb) : D(O, Gb));
        ya !== M &&
          (ya
            ? L
              ? ja(L)
              : (B && ja(B), z && ja(z))
            : L
            ? V(L)
            : (B && V(B), z && V(z)));
        za !== R && (za ? ja(aa) : V(aa));
        Ja !== S && (Ja ? r(k, Eb, b.preventScrollOnTouch) : D(k, Eb));
        Ka !== W && (Ka ? r(k, Fb) : D(k, Fb));
        da !== Z &&
          (da ? (F && ja(F), pa || mb || dc()) : (F && V(F), pa && Lb()));
        Ma !== ka && (Ma ? r(k, zb) : D(k, zb));
        Na !== la && (Na ? r(O, Ab) : D(O, Ab));
        if (g) {
          if (m !== T || ba !== ra) c = !0;
          oa === U || oa || (ha.style.height = "");
          ya && Qa !== ca && ((B.innerHTML = Qa[0]), (z.innerHTML = Qa[1]));
          F &&
            Pa !== ea &&
            ((T = da ? 1 : 0),
            (U = F.innerHTML),
            (ca = U.length - ea[T].length),
            U.substring(ca) === ea[T] &&
              (F.innerHTML = U.substring(0, ca) + Pa[T]));
        } else ba && (m || t) && (c = !0);
        if (e || (m && !t)) (ta = td()), kd();
        if ((ea = f !== h)) Q.emit("indexChanged", fa()), (c = !0);
        else if (e) ea || qd();
        else if (m || t) Mc(), Fc(), ud();
        e && !l && xc();
        if (!na && !ua) {
          if (g && !lb) {
            if (J !== ma || w !== ia) ha.style.cssText = Vb(J, w, m, va, oa);
            A &&
              (l && (k.style.width = Wb(m, w, v)),
              (e = Xb(m, w, v) + Yb(w)),
              (ia = C),
              (ma = Ca(C) - 1),
              "deleteRule" in ia ? ia.deleteRule(ma) : ia.removeRule(ma),
              Fa(C, "#" + K + " > .tns-item", e, Ca(C)));
          }
          oa && gc();
          c && (wb(), (Ta = f));
        }
        g && Q.emit("newBreakpointEnd", fa(a));
      }
    }
    function Dc() {
      if (!m && !t) return p <= (ba ? v - (v - 1) / 2 : v);
      var a = m ? (m + w) * p : I[p],
        b = J ? P + 2 * J : P + w;
      ba && (b -= m ? (P - m) / 2 : (P - (I[f + 1] - I[f] - w)) / 2);
      return a <= b;
    }
    function rd() {
      Ib = 0;
      for (var a in G) (a = parseInt(a)), Ub >= a && (Ib = a);
    }
    function Lc() {
      !da && F && V(F);
      !za && aa && V(aa);
      ya || (L ? V(L) : (B && V(B), z && V(z)));
    }
    function sd() {
      da && F && ja(F);
      za && aa && ja(aa);
      ya && (L ? ja(L) : (B && ja(B), z && ja(z)));
    }
    function pd() {
      if (!Kb) {
        J && (ha.style.margin = "0px");
        if (X)
          for (var a = X; a--; )
            l && E(x[a], "tns-transparent"), E(x[y - a - 1], "tns-transparent");
        Lc();
        Kb = !0;
      }
    }
    function od() {
      if (!Jb) {
        C.disabled = !0;
        k.className = k.className.replace(Ra.substring(1), "");
        Ha(k, ["style"]);
        if (Y) for (var a = X; a--; ) l && V(x[a]), V(x[y - a - 1]);
        (A && l) || Ha(ha, ["style"]);
        if (!l) {
          a = f;
          for (var b = f + p; a < b; a++) {
            var h = x[a];
            Ha(h, ["style"]);
            N(h, Sa);
            N(h, Ba);
          }
        }
        Lc();
        Jb = !0;
      }
    }
    function ud() {
      var a = id();
      Gc.innerHTML !== a && (Gc.innerHTML = a);
    }
    function id() {
      var a = ic(),
        b = a[0] + 1;
      a = a[1] + 1;
      return b === a ? b + "" : b + " to " + a;
    }
    function ic(a) {
      null == a && (a = hc());
      var b = f;
      if (ba || J) {
        if (t || m) {
          var h = -(parseFloat(a) + J);
          var c = h + P + 2 * J;
        }
      } else t && ((h = I[f]), (c = h + P));
      if (t)
        I.forEach(function (a, g) {
          g < y &&
            ((ba || J) && a <= h + 0.5 && (b = g), 0.5 <= c - a && (d = g));
        });
      else {
        if (m)
          if (((a = m + w), ba || J)) {
            b = Math.floor(h / a);
            var d = Math.ceil(c / a - 1);
          } else d = b + Math.ceil(P / a) - 1;
        else
          ba || J
            ? ((a = v - 1),
              ba ? ((b -= a / 2), (d = f + a / 2)) : (d = f + a),
              J && ((a = (J * v) / P), (b -= a), (d += a)),
              (b = Math.floor(b)),
              (d = Math.ceil(d)))
            : (d = b + v - 1);
        b = Math.max(b, 0);
        d = Math.min(d, y - 1);
      }
      return [b, d];
    }
    function Mc() {
      if (vb && !na) {
        var a = ic();
        a.push($d);
        Bc.apply(null, a).forEach(function (a) {
          if (!hb(a, jc)) {
            var b = {};
            b[$a] = function (a) {
              a.stopPropagation();
            };
            r(a, b);
            r(a, $b);
            a.src = a.getAttribute("data-src");
            if ((b = a.getAttribute("data-srcset"))) a.srcset = b;
            E(a, "loading");
          }
        });
      }
    }
    function ac(a) {
      E(a, jc);
      N(a, "loading");
      D(a, $b);
    }
    function Bc(a, b, h) {
      var g = [];
      for (h || (h = "img"); a <= b; )
        Ga(x[a].querySelectorAll(h), function (a) {
          g.push(a);
        }),
          a++;
      return g;
    }
    function gc() {
      var a = Bc.apply(null, ic());
      Ia(function () {
        bc(a, vd);
      });
    }
    function bc(a, b) {
      if (Ac) return b();
      a.forEach(function (b, g) {
        !vb && b.complete && ac(b);
        hb(b, jc) && a.splice(g, 1);
      });
      if (!a.length) return b();
      Ia(function () {
        bc(a, b);
      });
    }
    function qd() {
      Mc();
      Fc();
      ud();
      ld();
      if (za && ((la = 0 <= ab ? ab : Ea()), (ab = -1), la !== nb)) {
        var a = ka[nb],
          b = ka[la];
        M(a, { tabindex: "-1", "aria-label": kb + (nb + 1) });
        N(a, ec);
        M(b, { "aria-label": kb + (la + 1) + Jc });
        Ha(b, "tabindex");
        E(b, ec);
        nb = la;
      }
    }
    function wd(a, b) {
      for (var g = [], c = a, d = Math.min(a + b, y); c < d; c++)
        g.push(x[c].offsetHeight);
      return Math.max.apply(null, g);
    }
    function vd() {
      var a = oa ? wd(f, v) : wd(X, p),
        b = S ? S : ha;
      b.style.height !== a && (b.style.height = a + "px");
    }
    function hd() {
      try {
        I = [0];
        var a = A ? "left" : "top",
          b = A ? "right" : "bottom",
          c = x[0].getBoundingClientRect()[a];
        Ga(x, function (g, h) {
          h && I.push(g.getBoundingClientRect()[a] - c);
          h === y - 1 && I.push(g.getBoundingClientRect()[b] - c);
        });
      } catch (e) {}
    }
    function Fc() {
      var a = ic(),
        b = a[0],
        c = a[1];
      Ga(x, function (a, g) {
        g >= b && g <= c
          ? a.hasAttribute("aria-hidden") &&
            (Ha(a, ["aria-hidden", "tabindex"]), E(a, Rc))
          : a.hasAttribute("aria-hidden") ||
            (M(a, { "aria-hidden": "true", tabindex: "-1" }), N(a, Rc));
      });
    }
    function xc() {
      for (var a = f + Math.min(p, v), b = y; b--; ) {
        var c = x[b];
        b >= f && b < a
          ? (E(c, "tns-moving"),
            (c.style.left = (100 * (b - f)) / v + "%"),
            E(c, Sa),
            N(c, Ba))
          : c.style.left && ((c.style.left = ""), E(c, Ba), N(c, Sa));
        N(c, kc);
      }
      setTimeout(function () {
        Ga(x, function (a) {
          N(a, "tns-moving");
        });
      }, 300);
    }
    function lc(a, b, c) {
      a ? (b.disabled = c) : b.setAttribute("aria-disabled", c.toString());
    }
    function ld() {
      if (ya && !Mb && !Y) {
        var a = Bb ? B.disabled : "true" === B.getAttribute("aria-disabled"),
          b = Cb ? z.disabled : "true" === z.getAttribute("aria-disabled"),
          c = f <= ia ? !0 : !1,
          d = !Mb && f >= qa ? !0 : !1;
        c && !a && lc(Bb, B, !0);
        !c && a && lc(Bb, B, !1);
        d && !b && lc(Cb, z, !0);
        !d && b && lc(Cb, z, !1);
      }
    }
    function Nb(a) {
      null == a && (a = f);
      var b = J ? w : 0;
      return t
        ? (P - b - (I[a + 1] - I[a] - w)) / 2
        : m
        ? (P - m) / 2
        : (v - 1) / 2;
    }
    function Cc() {
      var a = P + (J ? w : 0) - (m ? (m + w) * y : I[y]);
      ba && !Y && (a = m ? -(m + w) * (y - 1) - Nb() : Nb(y - 1) - I[y - 1]);
      0 < a && (a = 0);
      return a;
    }
    function hc(a) {
      null == a && (a = f);
      if (A && !t)
        if (m) (a *= -(m + w)), ba && (a += Nb());
        else {
          var b = Ob ? y : v;
          ba && (a -= Nb());
          a = (100 * -a) / b;
        }
      else (a = -I[a]), ba && t && (a += Nb());
      xd && (a = Math.max(a, jb));
      return (a += !A || t || m ? "px" : "%");
    }
    function wb(a) {
      H && (k.style[H] = "0s");
      Qc(a);
    }
    function Qc(a) {
      null == a && (a = hc());
      k.style[bb] = Ua + a + ob;
    }
    function yd(a, b, c, d) {
      var g = a + v;
      Y || (g = Math.min(g, y));
      for (var h = a; h < g; h++) {
        var e = x[h];
        d || (e.style.left = (100 * (h - f)) / v + "%");
        Sc && mc && (e.style[mc] = e.style[Tc] = (Sc * (h - a)) / 1e3 + "s");
        N(e, b);
        E(e, c);
        d && pb.push(e);
      }
    }
    function Uc(a, b) {
      Vc && Pc();
      if (f !== Ta || b)
        Q.emit("indexChanged", fa()),
          Q.emit("transitionStart", fa()),
          oa && gc(),
          pa && a && 0 <= ["click", "keydown"].indexOf(a.type) && Lb(),
          (Va = !0),
          ae();
    }
    function ea(a) {
      if (l || Va) {
        Q.emit("transitionEnd", fa(a));
        if (!l && 0 < pb.length)
          for (var b = 0; b < pb.length; b++) {
            var c = pb[b];
            c.style.left = "";
            Tc && mc && ((c.style[Tc] = ""), (c.style[mc] = ""));
            N(c, kc);
            E(c, Ba);
          }
        if (
          !a ||
          (!l && a.target.parentNode === k) ||
          (a.target === k &&
            a.propertyName.toLowerCase().replace(/-/g, "") ===
              bb.toLowerCase().replace(/-/g, ""))
        )
          Vc ||
            ((a = f), Pc(), f !== a && (Q.emit("indexChanged", fa()), wb())),
            "inner" === ib && Q.emit("innerLoaded", fa()),
            (Va = !1),
            (Ta = f);
      }
    }
    function Pb(a, b) {
      if (!ua)
        if ("prev" === a) Wa(b, -1);
        else if ("next" === a) Wa(b, 1);
        else {
          if (Va) {
            if (nc) return;
            ea();
          }
          var c = W(),
            g = 0;
          "first" === a
            ? (g = -c)
            : "last" === a
            ? (g = l ? p - v - c : p - 1 - c)
            : ("number" !== typeof a && (a = parseInt(a)),
              isNaN(a) ||
                (b || (a = Math.max(0, Math.min(p - 1, a))), (g = a - c)));
          !l &&
            g &&
            Math.abs(g) < v &&
            ((c = 0 < g ? 1 : -1),
            (g += f + g - p >= ia ? p * c : 2 * p * c * -1));
          f += g;
          l && Y && (f < ia && (f += p), f > qa && (f -= p));
          W(f) !== W(Ta) && Uc(b);
        }
    }
    function Wa(a, b) {
      if (Va) {
        if (nc) return;
        ea();
      }
      if (!b) {
        a = xa(a);
        for (var c = qb(a); c !== L && 0 > [B, z].indexOf(c); )
          c = c.parentNode;
        c = [B, z].indexOf(c);
        if (0 <= c) {
          var g = !0;
          b = 0 === c ? -1 : 1;
        }
      }
      if (Mb) {
        if (f === ia && -1 === b) {
          Pb("last", a);
          return;
        }
        if (f === qa && 1 === b) {
          Pb("first", a);
          return;
        }
      }
      b &&
        ((f += Oa * b),
        t && (f = Math.floor(f)),
        Uc(g || (a && "keydown" === a.type) ? a : null));
    }
    function oc() {
      pc = setInterval(function () {
        Wa(null, zd);
      }, Oc);
      pa = !0;
    }
    function qc() {
      clearInterval(pc);
      pa = !1;
    }
    function Ad(a, b) {
      M(F, { "data-action": a });
      F.innerHTML = yb[0] + a + yb[1] + b;
    }
    function dc() {
      oc();
      F && Ad("stop", Pa[1]);
    }
    function Lb() {
      qc();
      F && Ad("start", Pa[0]);
    }
    function jd() {
      pa ? (Lb(), (mb = !0)) : (dc(), (mb = !1));
    }
    function xa(a) {
      a = a || Aa.event;
      return cb(a) ? a.changedTouches[0] : a;
    }
    function qb(a) {
      return a.target || Aa.event.srcElement;
    }
    function cb(a) {
      return 0 <= a.type.indexOf("touch");
    }
    function Bd() {
      var a = !1,
        c = Math.abs(
          90 - Math.abs((180 / Math.PI) * Math.atan2(ra.y - db.y, ra.x - db.x))
        );
      c >= 90 - Qb ? (a = "horizontal") : c <= Qb && (a = "vertical");
      return a === b.axis;
    }
    function Cd(a) {
      if (Va) {
        if (nc) return;
        ea();
      }
      da && pa && qc();
      eb = !0;
      T && (wc(T), (T = null));
      var b = xa(a);
      Q.emit(cb(a) ? "touchStart" : "dragStart", fa(a));
      !cb(a) &&
        0 <= ["img", "a"].indexOf(qb(a).nodeName.toLowerCase()) &&
        (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      ra.x = db.x = b.clientX;
      ra.y = db.y = b.clientY;
      l &&
        ((rc = parseFloat(k.style[bb].replace(Ua, ""))),
        H && (k.style[H] = "0s"));
    }
    function Dd(a) {
      if (eb) {
        var b = xa(a);
        ra.x = b.clientX;
        ra.y = b.clientY;
        l
          ? T ||
            (T = Ia(function () {
              Ed(a);
            }))
          : ("?" === ma && (ma = Bd()), ma && (Rb = !0));
        ("boolean" !== typeof a.cancelable || a.cancelable) &&
          Rb &&
          a.preventDefault();
      }
    }
    function Ed(a) {
      if (ma) {
        if (
          (wc(T),
          eb &&
            (T = Ia(function () {
              Ed(a);
            })),
          "?" === ma && (ma = Bd()),
          ma)
        ) {
          !Rb && cb(a) && (Rb = !0);
          try {
            a.type && Q.emit(cb(a) ? "touchMove" : "dragMove", fa(a));
          } catch (fe) {}
          var b = rc,
            c = Wc(ra, db);
          !A || m || t
            ? (b = b + c + "px")
            : ((b += Ob ? (c * v * 100) / ((P + w) * y) : (100 * c) / (P + w)),
              (b += "%"));
          k.style[bb] = Ua + b + ob;
        }
      } else eb = !1;
    }
    function sc(a) {
      if (eb) {
        T && (wc(T), (T = null));
        l && H && (k.style[H] = "");
        eb = !1;
        var c = xa(a);
        ra.x = c.clientX;
        ra.y = c.clientY;
        var h = Wc(ra, db);
        if (Math.abs(h)) {
          if (!cb(a)) {
            var d = qb(a);
            r(d, {
              click: function Zd(a) {
                a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
                D(d, { click: Zd });
              },
            });
          }
          l
            ? (T = Ia(function () {
                if (A && !t) {
                  var b = (-h * v) / (P + w);
                  b = 0 < h ? Math.floor(b) : Math.ceil(b);
                  f += b;
                } else if (((b = -(rc + h)), 0 >= b)) f = ia;
                else if (b >= I[y - 1]) f = qa;
                else
                  for (var c = 0; c < y && b >= I[c]; )
                    (f = c), b > I[c] && 0 > h && (f += 1), c++;
                Uc(a, h);
                Q.emit(cb(a) ? "touchEnd" : "dragEnd", fa(a));
              }))
            : ma && Wa(a, 0 < h ? -1 : 1);
        }
      }
      "auto" === b.preventScrollOnTouch && (Rb = !1);
      Qb && (ma = "?");
      da && !pa && oc();
    }
    function Ec() {
      (S ? S : ha).style.height = I[f + v] - I[f] + "px";
    }
    function td() {
      return Math.min(
        Math.ceil(m && "pages" === Oa ? ((m + w) * p) / P : p / v),
        p
      );
    }
    function kd() {
      if (za && !ub && ta !== fb) {
        var a = fb,
          b = ta,
          c = ja;
        fb > ta && ((a = ta), (b = fb), (c = V));
        for (; a < b; ) c(ka[a]), a++;
        fb = ta;
      }
    }
    function fa(a) {
      return {
        container: k,
        slideItems: x,
        navContainer: aa,
        navItems: ka,
        controlsContainer: L,
        hasControls: fc,
        prevButton: B,
        nextButton: z,
        items: v,
        slideBy: Oa,
        cloneCount: X,
        slideCount: p,
        slideCountNew: y,
        index: f,
        indexCached: Ta,
        displayIndex: e(),
        navCurrentIndex: la,
        navCurrentIndexCached: nb,
        pages: ta,
        pagesCached: fb,
        sheet: C,
        isOn: Hb,
        event: a || {},
      };
    }
    b = vc(
      {
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: !1,
        autoWidth: !1,
        viewportMax: !1,
        slideBy: 1,
        center: !1,
        controls: !0,
        controlsPosition: "top",
        controlsText: ["prev", "next"],
        controlsContainer: !1,
        prevButton: !1,
        nextButton: !1,
        nav: !0,
        navPosition: "top",
        navContainer: !1,
        navAsThumbnails: !1,
        arrowKeys: !1,
        speed: 300,
        autoplay: !1,
        autoplayPosition: "top",
        autoplayTimeout: 5e3,
        autoplayDirection: "forward",
        autoplayText: ["start", "stop"],
        autoplayHoverPause: !1,
        autoplayButton: !1,
        autoplayButtonOutput: !0,
        autoplayResetOnVisibility: !0,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: !1,
        loop: !0,
        rewind: !1,
        autoHeight: !1,
        responsive: !1,
        lazyload: !1,
        lazyloadSelector: ".tns-lazy-img",
        touch: !0,
        mouseDrag: !1,
        swipeAngle: 15,
        nested: !1,
        preventActionWhenRunning: !1,
        preventScrollOnTouch: !1,
        freezable: !0,
        onInit: !1,
        useLocalStorage: !0,
      },
      b || {}
    );
    var O = document,
      Aa = window,
      n = {},
      R = b.useLocalStorage;
    if (R) {
      var Fd = navigator.userAgent,
        Sb = new Date();
      try {
        (n = Aa.localStorage)
          ? (n.setItem(Sb, Sb), (R = n.getItem(Sb) == Sb), n.removeItem(Sb))
          : (R = !1),
          R || (n = {});
      } catch (a) {
        R = !1;
      }
      R &&
        (n.tnsApp &&
          n.tnsApp !== Fd &&
          "tC tPL tMQ tTf t3D tTDu tTDe tADu tADe tTE tAE"
            .split(" ")
            .forEach(function (a) {
              n.removeItem(a);
            }),
        (localStorage.tnsApp = Fd));
    }
    var Za = n.tC ? U(n.tC) : ca(n, "tC", Sd(), R),
      Gd = n.tPL ? U(n.tPL) : ca(n, "tPL", Td(), R),
      lb = n.tMQ ? U(n.tMQ) : ca(n, "tMQ", Ud(), R),
      Ob = n.tTf ? U(n.tTf) : ca(n, "tTf", rb("transform"), R),
      be = n.t3D ? U(n.t3D) : ca(n, "t3D", Wd(Ob), R),
      H = n.tTDu ? U(n.tTDu) : ca(n, "tTDu", rb("transitionDuration"), R),
      mc = n.tTDe ? U(n.tTDe) : ca(n, "tTDe", rb("transitionDelay"), R),
      Zb = n.tADu ? U(n.tADu) : ca(n, "tADu", rb("animationDuration"), R),
      Tc = n.tADe ? U(n.tADe) : ca(n, "tADe", rb("animationDelay"), R),
      $a = n.tTE ? U(n.tTE) : ca(n, "tTE", ad(H, "Transition"), R),
      Hd = n.tAE ? U(n.tAE) : ca(n, "tAE", ad(Zb, "Animation"), R),
      Id = Aa.console && "function" === typeof Aa.console.warn,
      Xc =
        "container controlsContainer prevButton nextButton navContainer autoplayButton".split(
          " "
        ),
      Jd = {};
    Xc.forEach(function (a) {
      if ("string" === typeof b[a]) {
        var c = b[a],
          h = O.querySelector(c);
        Jd[a] = c;
        h && h.nodeName ? (b[a] = h) : Id && console.warn("Can't find", b[a]);
      }
    });
    if (1 > b.container.children.length)
      Id && console.warn("No slides found in", b.container);
    else {
      var G = b.responsive,
        ib = b.nested,
        l = "carousel" === b.mode ? !0 : !1;
      if (G) {
        0 in G && ((b = vc(b, G[0])), delete G[0]);
        var Yc = {},
          Zc;
        for (Zc in G) {
          var Tb = G[Zc];
          Tb = "number" === typeof Tb ? { items: Tb } : Tb;
          Yc[Zc] = Tb;
        }
        G = Yc;
        Yc = null;
      }
      l || c(b);
      if (!l) {
        b.axis = "horizontal";
        b.slideBy = "page";
        b.edgePadding = !1;
        var Sa = b.animateIn,
          kc = b.animateOut,
          Sc = b.animateDelay,
          Ba = b.animateNormal;
      }
      var A = "horizontal" === b.axis ? !0 : !1,
        Z = O.createElement("div"),
        ha = O.createElement("div"),
        S,
        k = b.container,
        zc = k.parentNode,
        Kd = k.outerHTML,
        x = k.children,
        p = x.length,
        Ib,
        Ub =
          Aa.innerWidth || O.documentElement.clientWidth || O.body.clientWidth,
        Hb = !1;
      G && rd();
      l && (k.className += " tns-vpfix");
      var t = b.autoWidth,
        m = q("fixedWidth"),
        J = q("edgePadding"),
        w = q("gutter"),
        P = sb(),
        ba = q("center"),
        v = t ? 1 : Math.floor(q("items")),
        Oa = q("slideBy"),
        yc = b.viewportMax || b.fixedWidthViewportWidth,
        La = q("arrowKeys"),
        va = q("speed"),
        Mb = b.rewind,
        Y = Mb ? !1 : b.loop,
        oa = q("autoHeight"),
        ya = q("controls"),
        Qa = q("controlsText"),
        za = q("nav"),
        Ja = q("touch"),
        Ka = q("mouseDrag"),
        da = q("autoplay"),
        Oc = q("autoplayTimeout"),
        Pa = q("autoplayText"),
        Ma = q("autoplayHoverPause"),
        Na = q("autoplayResetOnVisibility"),
        C = Vd(),
        vb = b.lazyload,
        $d = b.lazyloadSelector,
        I,
        pb = [],
        X = Y ? gb() : 0,
        y = l ? p + 2 * X : p + X,
        xd = (!m && !t) || Y ? !1 : !0,
        jb = m ? Cc() : null,
        Vc = l && Y ? !1 : !0,
        bb = A ? "left" : "top",
        Ua = "",
        ob = "",
        xb = (function () {
          return m
            ? function () {
                return ba && !Y ? p - 1 : Math.ceil(-jb / (m + w));
              }
            : t
            ? function () {
                for (var a = y; a--; ) if (I[a] >= -jb) return a;
              }
            : function () {
                return ba && l && !Y
                  ? p - 1
                  : Y || l
                  ? Math.max(0, y - Math.ceil(v))
                  : y - 1;
              };
        })(),
        f = u(q("startIndex")),
        Ta = f;
      e();
      var ia = 0,
        qa = t ? null : xb(),
        nc = b.preventActionWhenRunning,
        Qb = b.swipeAngle,
        ma = Qb ? "?" : !0,
        Va = !1,
        Nc = b.onInit,
        Q = new Xd(),
        Ra = " tns-slider tns-" + b.mode,
        K = k.id || Rd(),
        na = q("disable"),
        Jb = !1,
        cc = b.freezable,
        ua = cc && !t ? Dc() : !1,
        Kb = !1,
        Db = {
          click: Wa,
          keydown: function (a) {
            a = xa(a);
            var b = [37, 39].indexOf(a.keyCode);
            0 <= b &&
              (0 === b ? B.disabled || Wa(a, -1) : z.disabled || Wa(a, 1));
          },
        },
        Kc = {
          click: function (a) {
            if (Va) {
              if (nc) return;
              ea();
            }
            a = xa(a);
            for (var b = qb(a); b !== aa && !b.hasAttribute("data-nav"); )
              b = b.parentNode;
            if (b.hasAttribute("data-nav")) {
              b = ab = Number(b.getAttribute("data-nav"));
              var c = m || t ? (b * p) / ta : b * v;
              Pb(ub ? b : Math.min(Math.ceil(c), p - 1), a);
              la === b && (pa && Lb(), (ab = -1));
            }
          },
          keydown: function (a) {
            a = xa(a);
            var b = O.activeElement;
            if (b.hasAttribute("data-nav")) {
              var c = [37, 39, 13, 32].indexOf(a.keyCode);
              b = Number(b.getAttribute("data-nav"));
              0 <= c &&
                (0 === c
                  ? 0 < b && ka[b - 1].focus()
                  : 1 === c
                  ? b < ta - 1 && ka[b + 1].focus()
                  : ((ab = b), Pb(b, a)));
            }
          },
        },
        zb = {
          mouseover: function () {
            pa && (qc(), (tc = !0));
          },
          mouseout: function () {
            tc && (oc(), (tc = !1));
          },
        },
        Ab = {
          visibilitychange: function () {
            O.hidden ? pa && (qc(), (uc = !0)) : uc && (oc(), (uc = !1));
          },
        },
        Gb = {
          keydown: function (a) {
            a = xa(a);
            var b = [37, 39].indexOf(a.keyCode);
            0 <= b && Wa(a, 0 === b ? -1 : 1);
          },
        },
        Eb = { touchstart: Cd, touchmove: Dd, touchend: sc, touchcancel: sc },
        Fb = { mousedown: Cd, mousemove: Dd, mouseup: sc, mouseleave: sc },
        fc = sa("controls"),
        Ic = sa("nav"),
        ub = t ? !0 : b.navAsThumbnails,
        Hc = sa("autoplay"),
        Ld = sa("touch"),
        Md = sa("mouseDrag"),
        Rc = "tns-slide-active",
        jc = "tns-complete",
        $b = {
          load: function (a) {
            a = qb(a);
            E(a, "loaded");
            ac(a);
          },
          error: function (a) {
            a = qb(a);
            E(a, "failed");
            ac(a);
          },
        },
        Ac,
        Gc,
        Rb = "force" === b.preventScrollOnTouch ? !0 : !1;
      if (fc)
        var L = b.controlsContainer,
          Nd = b.controlsContainer ? b.controlsContainer.outerHTML : "",
          B = b.prevButton,
          z = b.nextButton,
          ce = b.prevButton ? b.prevButton.outerHTML : "",
          de = b.nextButton ? b.nextButton.outerHTML : "",
          Bb,
          Cb;
      if (Ic)
        var aa = b.navContainer,
          Od = b.navContainer ? b.navContainer.outerHTML : "",
          ka,
          ta = t ? p : td(),
          fb = 0,
          ab = -1,
          la = Ea(),
          nb = la,
          ec = "tns-nav-active",
          kb = "Carousel Page ",
          Jc = " (Current Slide)";
      if (Hc)
        var zd = "forward" === b.autoplayDirection ? 1 : -1,
          F = b.autoplayButton,
          Pd = b.autoplayButton ? b.autoplayButton.outerHTML : "",
          yb = ["<span class='tns-visually-hidden'>", " animation</span>"],
          pc,
          pa,
          tc,
          mb,
          uc;
      if (Ld || Md)
        var db = {},
          ra = {},
          rc,
          eb = !1,
          T,
          Wc = A
            ? function (a, b) {
                return a.x - b.x;
              }
            : function (a, b) {
                return a.y - b.y;
              };
      t || d(na || ua);
      Ob &&
        ((bb = Ob),
        (Ua = "translate"),
        be
          ? ((Ua += A ? "3d(" : "3d(0px, "),
            (ob = A ? ", 0px, 0px)" : ", 0px)"))
          : ((Ua += A ? "X(" : "Y("), (ob = ")")));
      l && (k.className = k.className.replace("tns-vpfix", ""));
      (function () {
        sa("gutter");
        Z.className = "tns-outer";
        ha.className = "tns-inner";
        Z.id = K + "-ow";
        ha.id = K + "-iw";
        "" === k.id && (k.id = K);
        Ra += Gd || t ? " tns-subpixel" : " tns-no-subpixel";
        Ra += Za ? " tns-calc" : " tns-no-calc";
        t && (Ra += " tns-autowidth");
        Ra += " tns-" + b.axis;
        k.className += Ra;
        l
          ? ((S = O.createElement("div")),
            (S.id = K + "-mw"),
            (S.className = "tns-ovh"),
            Z.appendChild(S),
            S.appendChild(ha))
          : Z.appendChild(ha);
        oa && ((S ? S : ha).className += " tns-ah");
        zc.insertBefore(Z, k);
        ha.appendChild(k);
        Ga(x, function (a, b) {
          E(a, "tns-item");
          a.id || (a.id = K + "-item" + b);
          !l && Ba && E(a, Ba);
          M(a, { "aria-hidden": "true", tabindex: "-1" });
        });
        if (X) {
          for (
            var a = O.createDocumentFragment(),
              c = O.createDocumentFragment(),
              d = X;
            d--;

          ) {
            var f = d % p,
              e = x[f].cloneNode(!0);
            Ha(e, "id");
            c.insertBefore(e, c.firstChild);
            l &&
              ((f = x[p - 1 - f].cloneNode(!0)), Ha(f, "id"), a.appendChild(f));
          }
          k.insertBefore(a, k.firstChild);
          k.appendChild(c);
          x = k.children;
        }
      })();
      (function () {
        if (!l)
          for (var a = f, c = f + Math.min(p, v); a < c; a++) {
            var d = x[a];
            d.style.left = (100 * (a - f)) / v + "%";
            E(d, Sa);
            N(d, Ba);
          }
        A &&
          (Gd || t
            ? (Fa(
                C,
                "#" + K + " > .tns-item",
                "font-size:" + Aa.getComputedStyle(x[0]).fontSize + ";",
                Ca(C)
              ),
              Fa(C, "#" + K, "font-size:0;", Ca(C)))
            : l &&
              Ga(x, function (a, b) {
                a.style.marginLeft = Za
                  ? Za + "(" + 100 * b + "% / " + y + ")"
                  : (100 * b) / y + "%";
              }));
        lb
          ? (H &&
              ((c = S && b.autoHeight ? Ya(b.speed) : ""),
              Fa(C, "#" + K + "-mw", c, Ca(C))),
            (c = Vb(
              b.edgePadding,
              b.gutter,
              b.fixedWidth,
              b.speed,
              b.autoHeight
            )),
            Fa(C, "#" + K + "-iw", c, Ca(C)),
            l &&
              ((c =
                A && !t
                  ? "width:" + Wb(b.fixedWidth, b.gutter, b.items) + ";"
                  : ""),
              H && (c += Ya(va)),
              Fa(C, "#" + K, c, Ca(C))),
            (c = A && !t ? Xb(b.fixedWidth, b.gutter, b.items) : ""),
            b.gutter && (c += Yb(b.gutter)),
            l || (H && (c += Ya(va)), Zb && (c += bd(va))))
          : (l && oa && (S.style[H] = va / 1e3 + "s"),
            (ha.style.cssText = Vb(J, w, m, oa)),
            l && A && !t && (k.style.width = Wb(m, w, v)),
            (c = A && !t ? Xb(m, w, v) : ""),
            w && (c += Yb(w)));
        c && Fa(C, "#" + K + " > .tns-item", c, Ca(C));
        if (G && lb)
          for (var e in G) {
            e = parseInt(e);
            a = G[e];
            var n = (d = c = c = ""),
              r = "",
              u = t ? null : q("items", e),
              B = q("fixedWidth", e),
              z = q("speed", e),
              F = q("edgePadding", e),
              I = q("autoHeight", e),
              D = q("gutter", e);
            H &&
              S &&
              q("autoHeight", e) &&
              "speed" in a &&
              (c = "#" + K + "-mw{" + Ya(z) + "}");
            if ("edgePadding" in a || "gutter" in a)
              d = "#" + K + "-iw{" + Vb(F, D, B, z, I) + "}";
            l &&
              A &&
              !t &&
              ("fixedWidth" in a || "items" in a || (m && "gutter" in a)) &&
              (n = "width:" + Wb(B, D, u) + ";");
            H && "speed" in a && (n += Ya(z));
            n && (n = "#" + K + "{" + n + "}");
            if (
              "fixedWidth" in a ||
              (m && "gutter" in a) ||
              (!l && "items" in a)
            )
              r += Xb(B, D, u);
            "gutter" in a && (r += Yb(D));
            !l && "speed" in a && (H && (r += Ya(z)), Zb && (r += bd(z)));
            r && (r = "#" + K + " > .tns-item{" + r + "}");
            (c = c + d + n + r) &&
              C.insertRule(
                "@media (min-width: " + e / 16 + "em) {" + c + "}",
                C.cssRules.length
              );
          }
      })();
      cd();
      var Pc = (function () {
          return Y
            ? l
              ? function () {
                  var a = ia,
                    b = qa;
                  a += Oa;
                  b -= Oa;
                  J ? ((a += 1), --b) : m && (P + w) % (m + w) && --b;
                  X && (f > b ? (f -= p) : f < a && (f += p));
                }
              : function () {
                  if (f > qa) for (; f >= ia + p; ) f -= p;
                  else if (f < ia) for (; f <= qa - p; ) f += p;
                }
            : function () {
                f = Math.max(ia, Math.min(qa, f));
              };
        })(),
        ae = (function () {
          return l
            ? function () {
                H && (k.style[H] = "");
                H || !va
                  ? (Qc(),
                    (va && "none" !== window.getComputedStyle(k).display) ||
                      ea())
                  : Yd(k, bb, Ua, ob, hc(), va, ea);
                A || Ec();
              }
            : function () {
                pb = [];
                var a = {};
                a[$a] = a[Hd] = ea;
                D(x[Ta], a);
                r(x[f], a);
                yd(Ta, Sa, kc, !0);
                yd(f, Ba, Sa);
                ($a &&
                  Hd &&
                  va &&
                  "none" !== window.getComputedStyle(k).display) ||
                  ea();
              };
        })();
      return {
        version: "2.9.2",
        getInfo: fa,
        events: Q,
        goTo: Pb,
        play: function () {
          da && !pa && (dc(), (mb = !1));
        },
        pause: function () {
          pa && (Lb(), (mb = !0));
        },
        isOn: Hb,
        updateSliderHeight: vd,
        refresh: cd,
        destroy: function () {
          C.disabled = !0;
          C.ownerNode && C.ownerNode.remove();
          D(Aa, { resize: nd });
          La && D(O, Gb);
          L && D(L, Db);
          aa && D(aa, Kc);
          D(k, zb);
          D(k, Ab);
          F && D(F, { click: jd });
          da && clearInterval(pc);
          if (l && $a) {
            var a = {};
            a[$a] = ea;
            D(k, a);
          }
          Ja && D(k, Eb);
          Ka && D(k, Fb);
          var c = [Kd, Nd, ce, de, Od, Pd];
          Xc.forEach(function (a, d) {
            var e = "container" === a ? Z : b[a];
            if ("object" === typeof e && e) {
              var f = e.previousElementSibling ? e.previousElementSibling : !1,
                g = e.parentNode;
              e.outerHTML = c[d];
              b[a] = f ? f.nextElementSibling : g.firstElementChild;
            }
          });
          Xc =
            Sa =
            kc =
            Sc =
            Ba =
            A =
            Z =
            ha =
            k =
            zc =
            Kd =
            x =
            p =
            Ib =
            Ub =
            t =
            m =
            J =
            w =
            P =
            v =
            Oa =
            yc =
            La =
            va =
            Mb =
            Y =
            oa =
            C =
            vb =
            I =
            pb =
            X =
            y =
            xd =
            jb =
            Vc =
            bb =
            Ua =
            ob =
            xb =
            f =
            Ta =
            ia =
            qa =
            Qb =
            ma =
            Va =
            Nc =
            Q =
            Ra =
            K =
            na =
            Jb =
            cc =
            ua =
            Kb =
            Db =
            Kc =
            zb =
            Ab =
            Gb =
            Eb =
            Fb =
            fc =
            Ic =
            ub =
            Hc =
            Ld =
            Md =
            Rc =
            jc =
            $b =
            Ac =
            ya =
            Qa =
            L =
            Nd =
            B =
            z =
            Bb =
            Cb =
            za =
            aa =
            Od =
            ka =
            ta =
            fb =
            ab =
            la =
            nb =
            ec =
            kb =
            Jc =
            da =
            Oc =
            zd =
            Pa =
            Ma =
            F =
            Pd =
            Na =
            yb =
            pc =
            pa =
            tc =
            mb =
            uc =
            db =
            ra =
            rc =
            eb =
            T =
            Wc =
            Ja =
            Ka =
              null;
          for (var d in this) "rebuild" !== d && (this[d] = null);
          Hb = !1;
        },
        rebuild: function () {
          return Qd(vc(b, Jd));
        },
      };
    }
  };
  return Qd;
})();
