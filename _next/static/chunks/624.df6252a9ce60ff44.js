(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [624],
  {
    9624: function (t, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          Stats: function () {
            return Stats;
          },
        });
      var l = r(7974),
        a = r(7294),
        i = r(3466),
        c = r.n(i);
      let Stats = () => {
        let t = (0, a.useRef)(null),
          n = (0, a.useRef)(!1);
        return (
          (0, a.useEffect)(() => {
            try {
              return (
                (t.current = new (c())()),
                (n.current = !0),
                () => {
                  var r;
                  (null === (r = t.current) || void 0 === r ? void 0 : r.dom) &&
                    document.body.contains(t.current.dom) &&
                    document.body.removeChild(t.current.dom),
                    (t.current = null),
                    (n.current = !1);
                }
              );
            } catch (t) {}
          }, []),
          (0, l.xQ)(() => {
            if (n.current && t.current)
              try {
                t.current.begin();
              } catch (t) {}
          }, -1 / 0),
          (0, l.xQ)(() => {
            if (n.current && t.current)
              try {
                t.current.end();
              } catch (t) {}
          }, 1 / 0),
          null
        );
      };
    },
    3466: function (t) {
      var n;
      t.exports =
        (((n = function () {
          function e(t) {
            return r.appendChild(t.dom), t;
          }
          function u(n) {
            for (var l = 0; l < r.children.length; l++)
              r.children[l].style.display = l === n ? "block" : "none";
            t = n;
          }
          var t = 0,
            r = document.createElement("div");
          (r.style.cssText =
            "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
            r.addEventListener(
              "click",
              function (n) {
                n.preventDefault(), u(++t % r.children.length);
              },
              !1
            );
          var l = (performance || Date).now(),
            a = l,
            i = 0,
            c = e(new n.Panel("FPS", "#0ff", "#002")),
            o = e(new n.Panel("MS", "#0f0", "#020"));
          if (self.performance && self.performance.memory)
            var f = e(new n.Panel("MB", "#f08", "#201"));
          return (
            u(0),
            {
              REVISION: 16,
              dom: r,
              addPanel: e,
              showPanel: u,
              begin: function () {
                l = (performance || Date).now();
              },
              end: function () {
                i++;
                var t = (performance || Date).now();
                if (
                  (o.update(t - l, 200),
                  t > a + 1e3 &&
                    (c.update((1e3 * i) / (t - a), 100), (a = t), (i = 0), f))
                ) {
                  var n = performance.memory;
                  f.update(
                    n.usedJSHeapSize / 1048576,
                    n.jsHeapSizeLimit / 1048576
                  );
                }
                return t;
              },
              update: function () {
                l = this.end();
              },
              domElement: r,
              setMode: u,
            }
          );
        }).Panel = function (t, n, r) {
          var l = 1 / 0,
            a = 0,
            i = Math.round,
            c = i(window.devicePixelRatio || 1),
            o = 80 * c,
            f = 48 * c,
            d = 3 * c,
            s = 2 * c,
            p = 3 * c,
            m = 15 * c,
            h = 74 * c,
            v = 30 * c,
            y = document.createElement("canvas");
          (y.width = o),
            (y.height = f),
            (y.style.cssText = "width:80px;height:48px");
          var x = y.getContext("2d");
          return (
            (x.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif"),
            (x.textBaseline = "top"),
            (x.fillStyle = r),
            x.fillRect(0, 0, o, f),
            (x.fillStyle = n),
            x.fillText(t, d, s),
            x.fillRect(p, m, h, v),
            (x.fillStyle = r),
            (x.globalAlpha = 0.9),
            x.fillRect(p, m, h, v),
            {
              dom: y,
              update: function (f, w) {
                (l = Math.min(l, f)),
                  (a = Math.max(a, f)),
                  (x.fillStyle = r),
                  (x.globalAlpha = 1),
                  x.fillRect(0, 0, o, m),
                  (x.fillStyle = n),
                  x.fillText(
                    i(f) + " " + t + " (" + i(l) + "-" + i(a) + ")",
                    d,
                    s
                  ),
                  x.drawImage(y, p + c, m, h - c, v, p, m, h - c, v),
                  x.fillRect(p + h - c, m, c, v),
                  (x.fillStyle = r),
                  (x.globalAlpha = 0.9),
                  x.fillRect(p + h - c, m, c, i((1 - f / w) * v));
              },
            }
          );
        }),
        n);
    },
  },
]);
