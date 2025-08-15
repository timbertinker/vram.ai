(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [803],
  {
    3803: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          HorizontalSlides: function () {
            return HorizontalSlides;
          },
        });
      var r = i(5893),
        t = i(7974),
        s = i(6010),
        o = i(6038),
        l = i(1443),
        d = i(8922),
        a = i(7294),
        h = i(6018),
        c = i(137),
        u = i.n(c);
      let HorizontalSlides = (e) => {
        let { children: n } = e,
          i = (0, a.useRef)(null),
          c = (0, t.ac)("(max-width: 800px)"),
          [_, w] = (0, t.EL)(),
          [f, p] = (0, t.EL)(),
          { height: z } = (0, h.Z)(),
          [v, m] = (0, a.useState)();
        return (
          (0, l.v)((e) => {
            let { scroll: n } = e;
            if (!p || !i.current) return;
            let r = w.top - z,
              t = w.top + w.height - z,
              s = (0, d.KK)(r, t, n, 0, 1);
            s = (0, d.uZ)(0, s, 1);
            let l = s * (p.width - v),
              a = [...i.current.children];
            o.ZP.to(a, { x: -l, stagger: 0.033, ease: "none", duration: 0 });
          }),
          (0, a.useEffect)(() => {
            let onResize = () => {
              m(
                Math.min(
                  window.innerWidth,
                  document.documentElement.offsetWidth
                )
              );
            };
            return (
              window.addEventListener("resize", onResize, !1),
              onResize(),
              () => {
                window.removeEventListener("resize", onResize, !1);
              }
            );
          }, []),
          (0, r.jsx)("div", {
            className: u().wrapper,
            ref: _,
            style: p && !1 === c ? { height: p.width + "px" } : {},
            children: (0, r.jsxs)("div", {
              className: u().inner,
              children: [
                (0, r.jsx)("div", {
                  ref: (e) => {
                    (i.current = e), f(e);
                  },
                  className: (0, s.Z)(u().overflow, "hide-on-mobile"),
                  children: n,
                }),
                (0, r.jsx)("div", {
                  className: (0, s.Z)(u().cards, "hide-on-desktop"),
                  children: n,
                }),
              ],
            }),
          })
        );
      };
    },
    137: function (e) {
      e.exports = {
        wrapper: "horizontal-slides_wrapper__TCBAC",
        inner: "horizontal-slides_inner__Oe_lH",
        overflow: "horizontal-slides_overflow___ZX6_",
        cards: "horizontal-slides_cards__eyTjj",
      };
    },
  },
]);
