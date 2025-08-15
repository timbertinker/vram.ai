(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [359],
  {
    5359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PageTransition: function () {
            return PageTransition;
          },
        });
      var r = n(5893),
        o = n(7974),
        a = n(6038),
        u = n(1160),
        s = n(1163),
        i = n(7294),
        p = n(6834),
        c = n.n(p);
      let PageTransition = () => {
        let e = (0, i.useRef)(),
          t = (0, s.useRouter)(),
          [n, p] = (0, i.useState)(!1),
          [l, f] = (0, i.useState)(!1),
          g = (0, u.o)((e) => {
            let { triggerTransition: t } = e;
            return t;
          }),
          C = (0, u.o)((e) => {
            let { setTriggerTransition: t } = e;
            return t;
          }),
          _ = (0, i.useRef)(a.ZP.timeline());
        return (
          (0, i.useEffect)(() => {
            if (!l) return;
            let changeRouteComplete = () => {
              p(!0);
            };
            return (
              t.events.on("routeChangeComplete", changeRouteComplete),
              () => {
                t.events.off("routeChangeComplete", changeRouteComplete);
              }
            );
          }, [l]),
          (0, o.bt)(() => {
            "" !== g &&
              _.current.to(e.current, {
                x: 0,
                duration: 0.7,
                startAt: { x: "-100%" },
                onComplete: () => {
                  t.push(g), f(!0);
                },
                ease: "circ.out",
              });
          }, [g]),
          (0, o.bt)(() => {
            n &&
              _.current.to(e.current, {
                x: "100%",
                paused: !n,
                duration: 0.7,
                startAt: { x: 0 },
                onComplete: () => {
                  C(""), f(!1), p(!1);
                },
                ease: "circ.out",
              });
          }, [n]),
          (0, r.jsx)("div", { className: c().transition, ref: e })
        );
      };
    },
    6834: function (e) {
      e.exports = {
        transition: "page-transition_transition__nisdz",
        "page-wrapper": "page-transition_page-wrapper__14I7s",
      };
    },
  },
]);
