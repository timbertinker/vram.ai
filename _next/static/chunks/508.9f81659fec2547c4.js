"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [508],
  {
    2508: function (r, e, t) {
      t.r(e),
        t.d(e, {
          Parallax: function () {
            return Parallax;
          },
        });
      var s = t(5893),
        l = t(7974),
        a = t(6038),
        n = t(8922),
        u = t(7294),
        c = t(6018);
      function Parallax(r) {
        let {
            className: e,
            children: t,
            speed: i = 1,
            id: o = "parallax",
            position: p,
          } = r,
          f = (0, u.useRef)(),
          d = (0, u.useRef)(),
          { width: g } = (0, c.Z)();
        return (
          (0, l.bt)(() => {
            let r = g * i * 0.1,
              e = a.p8.quickSetter(d.current, "y", "px"),
              t = a.p8.quickSetter(d.current, "force3D"),
              s = a.p8.timeline({
                scrollTrigger: {
                  id: o,
                  trigger: f.current,
                  scrub: !0,
                  start: "top bottom",
                  end: "bottom top",
                  onUpdate: (s) => {
                    "top" === p
                      ? e(s.progress * r)
                      : e(-(0, n.KK)(0, 1, s.progress, -r, r)),
                      t(s.progress > 0 && s.progress < 1);
                  },
                },
              });
            return () => {
              s.kill();
            };
          }, [o, i, p, g]),
          (0, s.jsx)("div", {
            ref: f,
            children: (0, s.jsx)("div", { ref: d, className: e, children: t }),
          })
        );
      }
    },
  },
]);
