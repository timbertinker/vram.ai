(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [338],
  {
    3338: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          Cursor: function () {
            return Cursor;
          },
        });
      var r = o(5893),
        n = o(6010),
        s = o(6038),
        u = o(7294),
        a = o(6577),
        c = o.n(a);
      let Cursor = () => {
        let e = (0, u.useRef)(),
          [t, o] = (0, u.useState)(!1),
          [a, i] = (0, u.useState)(!1),
          [l, v] = (0, u.useState)(!1),
          m = (0, u.useCallback)(
            (t) => {
              let { clientX: o, clientY: r } = t;
              s.ZP.to(e.current, {
                x: o,
                y: r,
                duration: l ? 0.6 : 0,
                ease: "expo.out",
              }),
                v(!0);
            },
            [l]
          );
        return (
          (0, u.useEffect)(
            () => (
              window.addEventListener("mousemove", m, !1),
              () => {
                window.removeEventListener("mousemove", m, !1);
              }
            ),
            [l]
          ),
          (0, u.useEffect)(
            () => (
              document.documentElement.classList.add("has-custom-cursor"),
              () => {
                document.documentElement.classList.remove("has-custom-cursor");
              }
            ),
            []
          ),
          (0, u.useEffect)(() => {
            let e = [],
              onMouseEnter = () => {
                i(!0);
              },
              onMouseLeave = () => {
                i(!1);
              };
            return (
              (e = [
                ...document.querySelectorAll(
                  "button,a,input,label,[data-cursor='pointer']"
                ),
              ]).forEach((e) => {
                e.addEventListener("mouseenter", onMouseEnter, !1),
                  e.addEventListener("mouseleave", onMouseLeave, !1);
              }),
              () => {
                e.forEach((e) => {
                  e.removeEventListener("mouseenter", onMouseEnter, !1),
                    e.removeEventListener("mouseleave", onMouseLeave, !1);
                });
              }
            );
          }, []),
          (0, u.useEffect)(() => {
            let e = [],
              onMouseEnter = () => {
                o(!0);
              },
              onMouseLeave = () => {
                o(!1);
              };
            return (
              (e = [
                ...document.querySelectorAll(
                  "button,a,input,label,[data-cursor='pointer']"
                ),
              ]).forEach((e) => {
                e.addEventListener("mouseenter", onMouseEnter, !1),
                  e.addEventListener("mouseleave", onMouseLeave, !1);
              }),
              () => {
                e.forEach((e) => {
                  e.removeEventListener("mouseenter", onMouseEnter, !1),
                    e.removeEventListener("mouseleave", onMouseLeave, !1);
                });
              }
            );
          }, []),
          (0, r.jsx)("div", {
            style: { opacity: l ? 1 : 0 },
            className: c().container,
            children: (0, r.jsx)("div", {
              ref: e,
              children: (0, r.jsx)("div", {
                className: (0, n.Z)(
                  c().cursor,
                  t && c().grab,
                  a && c().pointer
                ),
              }),
            }),
          })
        );
      };
    },
    6577: function (e) {
      e.exports = {
        container: "cursor_container__fjuY_",
        cursor: "cursor_cursor__VAfFJ",
        pointer: "cursor_pointer__Rz3O4",
      };
    },
  },
]);
