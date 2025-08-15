(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [319],
  {
    4138: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Card;
        },
      });
      var n = s(5893),
        a = s(6010),
        o = s(6097),
        r = s.n(o);
      let Card = (e) => {
        let {
          number: t,
          text: s,
          className: o,
          inverted: i,
          background: l,
          image: c,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, a.Z)(o, r().wrapper, i && r().inverted),
          style: { "--background": l },
          children: [
            c &&
              (0, n.jsx)("div", {
                className: r().imageWrapper,
                children: (0, n.jsx)("img", {
                  src: c,
                  alt: s,
                  className: r().cardImage,
                }),
              }),
            (0, n.jsxs)("div", {
              className: r().content,
              children: [
                t &&
                  (0, n.jsx)("p", {
                    className: r().number,
                    children: t.toString().padStart(2, "0"),
                  }),
                s && (0, n.jsx)("p", { className: r().text, children: s }),
              ],
            }),
          ],
        });
      };
    },
    8922: function (e, t, s) {
      "use strict";
      function clamp(e, t, s) {
        return Math.max(e, Math.min(t, s));
      }
      function mapRange(e, t, s, n, a) {
        return ((s - e) * (a - n)) / (t - e) + n;
      }
      s.d(t, {
        KK: function () {
          return mapRange;
        },
        uZ: function () {
          return clamp;
        },
      });
    },
    7319: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return er;
          },
          default: function () {
            return home;
          },
        });
      var n = s(5893),
        a = s(7974),
        o = s(6010),
        r = s(7294),
        i = s(1160),
        l = s(1664),
        c = s.n(l);
      let d = (0, r.forwardRef)((e, t) => {
        var s;
        let {
            href: a,
            onClick: o = () => {},
            onMouseEnter: r = () => {},
            onMouseLeave: l = () => {},
            children: d,
            className: h,
            style: m,
          } = e,
          u = {
            ref: t,
            onClick: o,
            onMouseEnter: r,
            onMouseLeave: l,
            className: h,
            style: m,
          },
          _ = (0, i.o)((e) => {
            let { setTriggerTransition: t } = e;
            return t;
          });
        if ("string" != typeof a)
          return (0, n.jsx)("button", { ...u, children: d });
        let p =
          (null == a ? void 0 : a.startsWith("mailto:")) ||
          (null == a ? void 0 : a.startsWith("tel:"));
        if (p)
          return (0, n.jsx)("a", {
            ...u,
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: d,
          });
        let x = null == a ? void 0 : a.startsWith("#"),
          g = null == a ? void 0 : a.startsWith("http");
        g || (null == a ? void 0 : a.startsWith("/")) || (a = "/".concat(a));
        let noTransition = (e) => !!["gsap"].find((t) => e.includes(t));
        return (0, n.jsx)(c(), {
          href: a,
          passHref: g || x,
          shallow: ((s = a), !!["?demo=true"].find((e) => s.includes(e))),
          ...u,
          onClick: (e) => {
            g || x || (noTransition(a) || (e.preventDefault(), _(a)), o());
          },
          ...(g && { target: "_blank", rel: "noopener noreferrer" }),
          children: d,
        });
      });
      d.displayName = "Link";
      var h = s(5152),
        m = s.n(h),
        u = s(4185),
        _ = s.n(u);
      let p = m()(() => s.e(303).then(s.bind(s, 2303)), {
          loadableGenerated: { webpack: () => [2303] },
          ssr: !1,
        }),
        Button = (e) => {
          let {
            icon: t,
            arrow: s,
            children: a,
            href: r,
            onClick: i,
            className: l,
            style: c,
          } = e;
          return r
            ? (0, n.jsxs)(d, {
                href: r,
                className: (0, o.Z)(_().button, l, t && _()["has-icon"]),
                style: c,
                children: [
                  t && (0, n.jsx)("span", { className: _().icon, children: t }),
                  (0, n.jsxs)("span", {
                    className: _().text,
                    children: [
                      (0, n.jsxs)("span", {
                        className: _().visible,
                        children: [
                          a,
                          " ",
                          s && (0, n.jsx)(p, { className: _().arrow }),
                        ],
                      }),
                      (0, n.jsxs)("span", {
                        "aria-hidden": "true",
                        className: _().hidden,
                        children: [
                          a,
                          " ",
                          s && (0, n.jsx)(p, { className: _().arrow }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, n.jsxs)("button", {
                className: (0, o.Z)(_().button, l, t && _()["has-icon"]),
                style: c,
                onClick: i,
                children: [
                  t && (0, n.jsx)("span", { className: _().icon, children: t }),
                  (0, n.jsxs)("span", {
                    className: _().text,
                    children: [
                      (0, n.jsxs)("span", {
                        className: _().visible,
                        children: [
                          a,
                          " ",
                          s && (0, n.jsx)(p, { className: _().arrow }),
                        ],
                      }),
                      (0, n.jsxs)("span", {
                        "aria-hidden": "true",
                        className: _().hidden,
                        children: [
                          a,
                          " ",
                          s && (0, n.jsx)(p, { className: _().arrow }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        };
      var x = s(4138),
        g = s(7018),
        f = s.n(g);
      function Popup(e) {
        let { message: t, isOpen: s, onClose: a } = e;
        return ((0, r.useEffect)(() => {
          if (s) {
            let e = setTimeout(() => {
              a();
            }, 3e3);
            return () => clearTimeout(e);
          }
        }, [s, a]),
        s)
          ? (0, n.jsx)("div", {
              className: (0, o.Z)(f().popup, s && f().visible),
              children: (0, n.jsx)("div", {
                className: f().content,
                children: t,
              }),
            })
          : null;
      }
      var j = s(2601),
        v = s.n(j),
        b = s(9883);
      function WalletVerificationPopup(e) {
        let { isOpen: t, onClose: s } = e,
          [a, i] = (0, r.useState)(""),
          [l, c] = (0, r.useState)(null),
          [d, h] = (0, r.useState)(!1),
          [m, u] = (0, r.useState)(!1),
          fireConfetti = () => {
            if (m) return;
            let e = Date.now() + 3e3,
              t = ["#4CAF50", "#2196F3", "#FF9800", "#E91E63"];
            !(function frame() {
              (0, b.Z)({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: t,
              }),
                (0, b.Z)({
                  particleCount: 4,
                  angle: 120,
                  spread: 55,
                  origin: { x: 1 },
                  colors: t,
                }),
                Date.now() < e && requestAnimationFrame(frame);
            })(),
              u(!0);
          },
          handleVerify = async () => {
            try {
              let e = a.trim().startsWith("0x")
                  ? a.trim()
                  : "0x".concat(a.trim()),
                t = await fetch("/api/verify-wallet", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ walletAddress: e }),
                }),
                s = await t.json();
              if (!t.ok) {
                c(!1);
                return;
              }
              c(s.isVerified), s.isVerified && (h(!0), fireConfetti());
            } catch (e) {
              c(!1);
            }
          };
        return t
          ? (0, n.jsx)("div", {
              className: v().overlay,
              onClick: s,
              children: (0, n.jsxs)("div", {
                className: (0, o.Z)(v().popup, d && v().success),
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, n.jsx)("button", {
                    className: v().closeButton,
                    onClick: s,
                    children: "\xd7",
                  }),
                  (0, n.jsxs)("div", {
                    className: v().content,
                    children: [
                      (0, n.jsx)("h2", { children: "Genesis Core Whitelist" }),
                      (0, n.jsx)("p", { children: "Verify Your Sui Wallet" }),
                      (0, n.jsx)("input", {
                        type: "text",
                        value: a,
                        onChange: (e) => i(e.target.value),
                        placeholder: "Enter your Sui wallet address",
                        className: v().input,
                      }),
                      (0, n.jsx)("div", {
                        className: v().buttons,
                        children: (0, n.jsx)(Button, {
                          onClick: handleVerify,
                          className: (0, o.Z)(v().verifyButton, "primary"),
                          disabled: !a.trim(),
                          children: "Verify",
                        }),
                      }),
                      null !== l &&
                        (0, n.jsx)("div", {
                          className: (0, o.Z)(
                            v().status,
                            l ? v().success : v().error
                          ),
                          children: l
                            ? (0, n.jsxs)("div", {
                                className: v().successMessage,
                                children: [
                                  (0, n.jsx)("h3", {
                                    children: "Congratulations!",
                                  }),
                                  (0, n.jsx)("p", {
                                    children:
                                      "You are eligible for the Genesis Core NFT!",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: v().keyMessage,
                                    children: [
                                      (0, n.jsx)("strong", {
                                        children:
                                          "\uD83D\uDD25 WHITELIST EXCLUSIVE:",
                                      }),
                                      " You can mint 1 hour early at 6PM PST (April 3rd)!",
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className: v().keyMessage,
                                    children:
                                      "Public mint begins at 7PM PST. Don't miss your early access window!",
                                  }),
                                  (0, n.jsx)("div", {
                                    className: v().walletDisplay,
                                    children: a,
                                  }),
                                ],
                              })
                            : "❌ Sorry, this wallet is not eligible for the Genesis Core NFT whitelist.",
                        }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      }
      var N = s(5675),
        w = s.n(N),
        y = s(8633),
        k = s.n(y);
      let A = (0, r.forwardRef)((e, t) => {
        let { isAtTop: s = !0 } = e,
          [a, i] = (0, r.useState)(!1),
          [l, c] = (0, r.useState)(!1),
          [d, h] = (0, r.useState)(""),
          [m, u] = (0, r.useState)(!1),
          _ = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let checkWhitelistTime = () => {};
            checkWhitelistTime();
            let e = setInterval(checkWhitelistTime, 6e4);
            return () => clearInterval(e);
          }, []),
          (0, r.useEffect)(() => {
            let handleClickOutside = (e) => {
              _.current && !_.current.contains(e.target) && u(!1);
            };
            return (
              document.addEventListener("mousedown", handleClickOutside),
              () => {
                document.removeEventListener("mousedown", handleClickOutside);
              }
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("header", {
                className: (0, o.Z)(k().header, s && k()["at-top"]),
                ref: t,
                children: (0, n.jsxs)("div", {
                  className: k().navbar,
                  children: [
                    (0, n.jsx)("div", { className: k().blurBackground }),
                    (0, n.jsxs)("div", {
                      className: (0, o.Z)("layout-block", k().head),
                      children: [
                        (0, n.jsx)("div", {
                          className: k().logoWrapper,
                          children: (0, n.jsx)(w(), {
                            src: "/vram-text-logo.webp",
                            alt: "VRAM.AI Logo",
                            width: 180,
                            height: 60,
                            className: k().logo,
                            fetchpriority: "high",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: k().rightSection,
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://app.uniswap.org/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: k().openApp,
                              children: "Buy now",
                            }),
                            (0, n.jsx)("a", {
                              href: "https://x.com/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: k().openApp,
                              children: "Twitter",
                            }),
                            (0, n.jsx)("a", {
                              href: "https://t.me/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: k().openApp,
                              children: "Telegram",
                            }),
                            (0, n.jsx)("button", {
                              className: k().menuButton,
                              onClick: () => {
                                u(!m);
                              },
                              "aria-label": "Navigation menu",
                              children: (0, n.jsxs)("div", {
                                className: (0, o.Z)(
                                  k().hamburger,
                                  m && k().active
                                ),
                                children: [
                                  (0, n.jsx)("span", {}),
                                  (0, n.jsx)("span", {}),
                                  (0, n.jsx)("span", {}),
                                ],
                              }),
                            }),
                            (0, n.jsx)("div", {
                              ref: _,
                              className: (0, o.Z)(
                                k().navigationMenu,
                                m && k().open
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(Popup, {
                message: d,
                isOpen: a,
                onClose: () => i(!1),
              }),
              (0, n.jsx)(WalletVerificationPopup, {
                isOpen: l,
                onClose: () => c(!1),
              }),
            ],
          })
        );
      });
      A.displayName = "Header";
      var I = s(1673),
        C = s(7597),
        M = s(5319),
        T = s(9095),
        S = s(1443),
        R = s(2709),
        E = s(8922),
        L = s(4250);
      function Raf(e) {
        let { render: t = !0 } = e,
          { advance: s } = (0, M.D)();
        (0, a.xQ)((e) => {
          t && s(e / 1e3);
        });
      }
      let Z = [
          {
            position: [-0.1, -1.75, 0],
            scale: 0.045,
            rotation: [0, 0.5 * Math.PI, 0],
            type: 1,
          },
          {
            position: [0.15, -0.4, 0],
            scale: 0.02,
            rotation: [
              L.M8C.degToRad(-45),
              L.M8C.degToRad(-135),
              L.M8C.degToRad(-45),
            ],
            type: 1,
          },
          {
            position: [0.15, -0.4, 0],
            scale: 0.02,
            rotation: [
              L.M8C.degToRad(45),
              L.M8C.degToRad(-315),
              L.M8C.degToRad(-45),
            ],
            type: 1,
          },
          {
            position: [-0.2, -0.35, 0],
            scale: 0.02,
            rotation: [
              L.M8C.degToRad(-90),
              L.M8C.degToRad(-405),
              L.M8C.degToRad(-45),
            ],
            type: 1,
          },
          {
            position: [-1.2, -0.6, 0],
            scale: 0.05,
            rotation: [
              L.M8C.degToRad(-90),
              L.M8C.degToRad(-405),
              L.M8C.degToRad(-45),
            ],
            type: 1,
          },
          {
            position: [-1.6, -0.6, 0],
            scale: 0.05,
            rotation: [
              L.M8C.degToRad(-90),
              L.M8C.degToRad(-405),
              L.M8C.degToRad(-45),
            ],
            type: 1,
          },
          {
            position: [0.16, -1.38, 0],
            scale: 0.05,
            rotation: [
              L.M8C.degToRad(0),
              L.M8C.degToRad(200),
              L.M8C.degToRad(-16),
            ],
            type: 2,
          },
          {
            position: [0, -0.68, 0],
            scale: 0.04,
            rotation: [
              L.M8C.degToRad(0),
              L.M8C.degToRad(-14),
              L.M8C.degToRad(-16),
            ],
            type: 2,
          },
          {
            position: [-0.22, -0.61, 0],
            scale: 0.03,
            rotation: [
              L.M8C.degToRad(0),
              L.M8C.degToRad(-517),
              L.M8C.degToRad(-16),
            ],
            type: 2,
          },
          {
            position: [0.2, -0.46, 0],
            scale: 0.03,
            rotation: [
              L.M8C.degToRad(0),
              L.M8C.degToRad(-700),
              L.M8C.degToRad(-16),
            ],
            type: 2,
          },
        ],
        P = new L.EJi({
          color: new L.Ilk("#FF98A2"),
          metalness: 1,
          roughness: 0.4,
          wireframe: !0,
          side: L.ehD,
        });
      function Arm() {
        let { scene: e } = (0, I.L)("/models/arm.glb"),
          { scene: t } = (0, I.L)("/models/arm2.glb"),
          [s, a] = (0, r.useState)(1),
          [{ color: o, roughness: l, metalness: c, wireframe: d }, h] = (0,
          R.useControls)(
            () => ({
              color: "#ffffff",
              roughness: { min: 0, value: 0.2, max: 1 },
              metalness: { min: 0, value: 0.8, max: 1 },
              wireframe: !1,
            }),
            []
          ),
          [
            {
              lightsColor: m,
              light1: u,
              light2: _,
              light1Intensity: p,
              light2Intensity: x,
              ambientColor: g,
              arm2LightsColor: f,
              arm2AmbientColor: j,
            },
            v,
          ] = (0, R.useControls)(
            "lights",
            () => ({
              light1: { step: 1, value: [-200, 150, 50] },
              light2: { step: 1, value: [300, -100, 150] },
              light1Intensity: { min: 0, value: 1, max: 1 },
              light2Intensity: { min: 0, value: 1, max: 1 },
              lightsColor: "#FF98A2",
              ambientColor: "#0E0E0E",
              arm2LightsColor: "#90EE90",
              arm2AmbientColor: "#4CBB17",
            }),
            []
          ),
          [
            { custom: b, scale: N, modelScale: w, position: y, rotation: k },
            A,
          ] = (0, R.useControls)("model", () => ({
            custom: !1,
            scale: { min: 0, value: 0.75, max: 1, step: 0.001 },
            modelScale: {
              min: 0.01,
              value: 100,
              max: 300,
              step: 0.01,
              label: "Model Scale",
            },
            position: { value: [0, 0, 100] },
            rotation: { step: 1, min: -360, value: [0, 0, 0], max: 360 },
          })),
          [{ modelOffset: T }, V] = (0, R.useControls)(
            "model position",
            () => ({
              modelOffset: { value: [0, 0, 0], step: 1, label: "Model Offset" },
            })
          );
        (0, R.useControls)(
          "model",
          () => ({
            export: (0, R.button)(() => {
              alert(
                JSON.stringify({
                  scale: N.toFixed(3),
                  position: y,
                  rotation: k,
                  type: s,
                })
              );
            }),
          }),
          [N, y, k, s]
        ),
          (0, r.useEffect)(() => {
            (P.color = new L.Ilk(o)),
              (P.roughness = l),
              (P.metalness = c),
              (P.wireframe = d);
          }, [o, l, c, d, P]),
          (0, r.useEffect)(() => {
            e &&
              e.traverse((e) => {
                e.material && (e.material = P);
              });
          }, [e, P]),
          (0, r.useEffect)(() => {
            t &&
              (t.traverse((e) => {
                e.material && (e.material = P);
              }),
              t.position.set(0, 0, 0));
          }, [t, P]);
        let W = (0, r.useRef)(),
          { viewport: D } = (0, M.D)(),
          F = (0, i.o)((e) => {
            let { thresholds: t } = e;
            return t;
          }),
          B = (0, r.useMemo)(() => Object.values(F).sort((e, t) => e - t), [F]);
        return (
          (0, S.v)(
            (e) => {
              let { scroll: t } = e;
              t < F["light-start"]
                ? (v({
                    light1Intensity: 0.35,
                    light2Intensity: 0.15,
                    lightsColor: 1 === s ? "#FF98A2" : "#90EE90",
                    ambientColor: 1 === s ? "#FF98A2" : "#4CBB17",
                  }),
                  h({
                    color: 1 === s ? "#b0b0b0" : "#90EE90",
                    roughness: 0.4,
                    metalness: 1 === s ? 1 : 0.8,
                  }))
                : (v({
                    light1Intensity: 1,
                    light2Intensity: 1,
                    lightsColor: 1 === s ? "#efefef" : "#90EE90",
                    ambientColor: 1 === s ? "#b0B0B0" : "#4CBB17",
                  }),
                  h({
                    color: 1 === s ? "#efefef" : "#90EE90",
                    roughness: 0.4,
                    metalness: 1 === s ? 0.6 : 0.8,
                  }));
            },
            [F, s]
          ),
          (0, S.v)((e) => {
            let { scroll: t } = e;
            if (!W.current) return;
            if (b) {
              W.current.scale.setScalar(D.height * N),
                W.current.position.set(D.width * y[0], D.height * y[1], 0),
                W.current.rotation.fromArray(k.map((e) => L.M8C.degToRad(e)));
              return;
            }
            let s = B.findIndex((e) => t < e) - 1,
              n = B[s],
              o = B[s + 1],
              r = (0, E.KK)(n, o, t, 0, 1),
              i = Z[s],
              l = Z[s + 1];
            if (
              (W.current &&
                (W.current.visible =
                  (null == i ? void 0 : i.type) ===
                  (null == l ? void 0 : l.type)),
              !l)
            )
              return;
            let c = (0, E.KK)(0, 1, r, i.scale, l.scale),
              d = new L.Pa4(
                D.width * (0, E.KK)(0, 1, r, i.position[0], l.position[0]),
                D.height * (0, E.KK)(0, 1, r, i.position[1], l.position[1]),
                0
              ),
              h = new L.USm().fromArray(
                [, , ,]
                  .fill(0)
                  .map((e, t) =>
                    (0, E.KK)(0, 1, r, i.rotation[t], l.rotation[t])
                  )
              );
            W.current.scale.setScalar(D.height * c),
              W.current.position.copy(d),
              W.current.rotation.copy(h),
              a(l.type);
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("ambientLight", {
                args: [new L.Ilk(1 === s ? g : j)],
              }),
              (0, n.jsx)("group", {
                position: u,
                children: (0, n.jsx)("directionalLight", {
                  args: [new L.Ilk(1 === s ? m : f), p],
                }),
              }),
              (0, n.jsx)("group", {
                position: _,
                children: (0, n.jsx)("directionalLight", {
                  args: [new L.Ilk(1 === s ? m : f), x],
                }),
              }),
              (0, n.jsx)(C.b, {
                floatIntensity: b ? 0 : 1,
                rotationIntensity: b ? 0 : 1,
                children: (0, n.jsxs)("group", {
                  ref: W,
                  children: [
                    1 === s &&
                      (0, n.jsx)("primitive", { object: e, scale: [w, w, w] }),
                    2 === s &&
                      (0, n.jsx)("primitive", {
                        object: t,
                        scale: [w, w, w],
                        position: T,
                      }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function WebGL(e) {
        let { render: t = !0 } = e;
        return (0, n.jsxs)(T.Xz, {
          gl: { powerPreference: "high-performance", antialias: !0, alpha: !0 },
          dpr: [1, 2],
          frameloop: "always",
          orthographic: !0,
          camera: { near: 0.01, far: 1e4, position: [0, 200, -100], zoom: 100 },
          children: [
            (0, n.jsxs)(r.Suspense, {
              fallback: null,
              children: [
                (0, n.jsx)("ambientLight", { intensity: 2 }),
                (0, n.jsx)("directionalLight", {
                  position: [10, 10, 5],
                  intensity: 3,
                }),
                (0, n.jsx)(Arm, {}),
              ],
            }),
            (0, n.jsx)(Raf, { render: t }),
          ],
        });
      }
      var V = s(2962),
        W = s(9008),
        D = s.n(W);
      function CustomHead(e) {
        let {
            title: t = "VRAM - Pioneering SocialAI Development",
            description:
              s = "VRAM is revolutionizing AI development by blending DeFi mechanics and social elements to create SocialAI - a new paradigm where AI agents collaborate and share value in a decentralized ecosystem.",
            image: a = "/og-image.jpg",
            keywords: o = [
              "SocialAI",
              "DeFi",
              "SocialFi",
              "AI agents",
              "decentralized AI",
              "community-driven AI",
              "VRAM.ai",
              "collaborative AI",
              "Web3",
              "blockchain AI",
              "Sui blockchain",
            ],
          } = e,
          r = "https://vram.ai";
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(D(), {
              children: [
                (0, n.jsx)("meta", {
                  httpEquiv: "x-ua-compatible",
                  content: "ie=edge",
                }),
                (0, n.jsx)("meta", {
                  httpEquiv: "x-dns-prefetch-control",
                  content: "off",
                }),
                (0, n.jsx)("meta", {
                  httpEquiv: "Window-Target",
                  content: "_value",
                }),
                (0, n.jsx)("title", { children: t }),
                (0, n.jsx)("meta", { name: "description", content: s }),
                (0, n.jsx)("meta", { name: "robots", content: "index,follow" }),
                (0, n.jsx)("meta", {
                  name: "googlebot",
                  content: "index,follow",
                }),
                (0, n.jsx)("meta", {
                  name: "keywords",
                  content: o && o.length ? o.join(",") : o,
                }),
                (0, n.jsx)("meta", { name: "author", content: "VRAM" }),
                (0, n.jsx)("meta", {
                  name: "referrer",
                  content: "no-referrer",
                }),
                (0, n.jsx)("meta", {
                  name: "format-detection",
                  content: "telephone=no",
                }),
                (0, n.jsx)("meta", { name: "geo.region", content: "US" }),
                (0, n.jsx)("meta", { property: "og:title", content: t }),
                (0, n.jsx)("meta", { property: "og:description", content: s }),
                (0, n.jsx)("meta", {
                  property: "og:image",
                  content: "".concat(r).concat(a),
                }),
                (0, n.jsx)("meta", { property: "og:url", content: r }),
                (0, n.jsx)("meta", { property: "og:type", content: "website" }),
                (0, n.jsx)("meta", {
                  property: "og:site_name",
                  content: "VRAM.ai",
                }),
                (0, n.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, n.jsx)("meta", {
                  name: "twitter:site",
                  content: "@vramxai",
                }),
                (0, n.jsx)("meta", {
                  name: "twitter:creator",
                  content: "@vramxai",
                }),
                (0, n.jsx)("meta", { name: "twitter:title", content: t }),
                (0, n.jsx)("meta", { name: "twitter:description", content: s }),
                (0, n.jsx)("meta", {
                  name: "twitter:image",
                  content: "".concat(r).concat(a),
                }),
                (0, n.jsx)("link", {
                  rel: "manifest",
                  href: "/site.webmanifest",
                }),
                (0, n.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: "/apple-touch-icon.png",
                }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: "/favicon-32x32.png",
                }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: "/favicon-16x16.png",
                }),
                (0, n.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
                (0, n.jsx)("link", {
                  rel: "shortcut icon",
                  href: "/favicon.ico",
                }),
              ],
            }),
            (0, n.jsx)(V.PB, {
              title: t,
              description: s,
              openGraph: {
                title: t,
                description: s,
                images: [
                  {
                    url: "".concat(r).concat(a),
                    width: 1200,
                    height: 630,
                    alt: "VRAM.ai - The Future of SocialAI",
                  },
                ],
                site_name: "VRAM.ai",
              },
              twitter: {
                handle: "@vramxai",
                site: "@vramxai",
                cardType: "summary_large_image",
              },
            }),
          ],
        });
      }
      var F = s(7871),
        B = s.n(F);
      let Footer = () =>
        (0, n.jsxs)("footer", {
          className: (0, o.Z)("theme-light", B().footer),
          children: [
            (0, n.jsxs)("div", {
              className: (0, o.Z)(B().top, "layout-grid hide-on-mobile"),
              children: [
                (0, n.jsxs)("p", {
                  className: (0, o.Z)(B()["first-line"], "h1"),
                  children: [
                    "DEEPRAM is ",
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("span", {
                      className: "contrast",
                      children: "an AI platform",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: B()["shameless-plug"],
                  children: [
                    (0, n.jsx)("p", {
                      className: "p-s",
                      children: "The smarter the AI,",
                    }),
                    (0, n.jsx)("p", {
                      className: "h4",
                      children: "The bigger the DEEPRAM",
                    }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  className: (0, o.Z)(B()["last-line"], "h1"),
                  children: [
                    "to create, ",
                    (0, n.jsx)("br", {}),
                    " trade and build AI agents",
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("br", {}),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: (0, o.Z)(B().top, "layout-block hide-on-desktop"),
              children: [
                (0, n.jsxs)("div", {
                  className: B()["shameless-plug"],
                  children: [
                    (0, n.jsx)("p", { className: "h4", children: "VRAM" }),
                    (0, n.jsxs)("p", {
                      className: "p-s",
                      children: [
                        "a platform to create, trade ",
                        (0, n.jsx)("br", {}),
                        " and build AI agents",
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  className: (0, o.Z)(B()["first-line"], "h1"),
                  children: [
                    "DEEPRAM is ",
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("span", {
                      className: "contrast",
                      children:
                        "a platform to create, trade and build AI agents",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: B().bottom,
              children: [
                (0, n.jsxs)("div", {
                  className: B().links,
                  children: [
                    (0, n.jsxs)(d, {
                      className: B().profile,
                      href: "https://x.com/0x0sid",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        (0, n.jsx)("img", {
                          src: "/images/twitter-profile.jpg",
                          alt: "VRAM CEO",
                          className: B().profileImage,
                        }),
                        (0, n.jsxs)("div", {
                          className: B().profileInfo,
                          children: [
                            (0, n.jsx)("span", {
                              className: B().name,
                              children: "Sid",
                            }),
                            (0, n.jsx)("span", {
                              className: B().title,
                              children: "CEO",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(d, {
                      className: (0, o.Z)(B().link, "p-xs"),
                      href: "https://t.me/",
                      children: "Telegram",
                    }),
                    (0, n.jsx)(d, {
                      className: (0, o.Z)(B().link, "p-xs"),
                      href: "https://x.com/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Twitter",
                    }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  className: (0, o.Z)("p-xs", B().tm),
                  children: [
                    (0, n.jsx)("span", { children: " " }),
                    " ",
                    new Date().getFullYear(),
                    " VRAM",
                  ],
                }),
                (0, n.jsx)(Button, {
                  className: (0, o.Z)(B().cta, "hide-on-desktop"),
                  arrow: !0,
                  href: "https://t.me/",
                  children: "Join VRAM.AI",
                }),
              ],
            }),
          ],
        });
      var z = s(3377),
        G = s.n(z);
      let Intro = () => {
        let e = (0, a.ac)("(max-width: 800px)"),
          [t, s] = (0, r.useState)(!1),
          [l, c] = (0, r.useState)(!1);
        (0, i.o)((e) => {
          let { introOut: t } = e;
          return t;
        });
        let d = (0, i.o)((e) => {
            let { setIntroOut: t } = e;
            return t;
          }),
          h = (0, i.o)((e) => {
            let { lenis: t } = e;
            return t;
          });
        return (
          (0, r.useEffect)(() => {
            setTimeout(() => {
              s(!0);
            }, 1e3);
          }, []),
          (0, r.useEffect)(() => {
            if (e) {
              document.documentElement.classList.toggle("intro", !1);
              return;
            }
            l || document.documentElement.classList.toggle("intro", !0),
              h &&
                (l
                  ? (h.start(),
                    document.documentElement.classList.toggle("intro", !1))
                  : (setTimeout(() => {
                      h.stop();
                    }, 0),
                    document.documentElement.classList.toggle("intro", !0)));
          }, [l, h, e]),
          (0, n.jsx)("div", {
            className: (0, o.Z)(G().wrapper, t && G().out),
            onTransitionEnd: (e) => {
              e.target.classList.forEach((e) => {
                e.includes("out") && c(!0), e.includes("show") && d(!0);
              });
            },
            children: (0, n.jsx)("div", {
              className: (0, o.Z)(G().relative),
              children: (0, n.jsx)("div", {
                className: (0, o.Z)(G().textWrapper, t && G().show),
              }),
            }),
          })
        );
      };
      var O = s(6018),
        q = s(6397),
        Q = s.n(q);
      function Scrollbar(e) {
        let {} = e,
          t = (0, r.useRef)(),
          { width: s, height: a } = (0, O.Z)(),
          o = (0, i.o)((e) => {
            let { lenis: t } = e;
            return t;
          });
        (0, S.v)((e) => {
          let { scroll: s, limit: n } = e;
          t.current.style.transform = "scaleX(".concat(s / n, ")");
        });
        let [l, c] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (l)
              return (
                window.addEventListener("pointermove", onPointerMove, !1),
                window.addEventListener("pointerup", onPointerUp, !1),
                () => {
                  window.removeEventListener("pointermove", onPointerMove, !1),
                    window.removeEventListener("pointerup", onPointerUp, !1);
                }
              );
            function onPointerMove(e) {
              e.preventDefault();
              let t = (a - innerHeight) / 2,
                s = (0, E.KK)(0, a, e.clientY, -t, innerHeight + t),
                n = (0, E.uZ)(0, s / innerHeight, 1),
                r = o.limit * n;
              "vertical" === o.direction
                ? window.scrollTo(0, r)
                : window.scrollTo(r, 0);
            }
            function onPointerUp() {
              c(!1);
            }
          }, [l, a, s, o]),
          (0, n.jsx)("div", {
            className: Q().scrollbar,
            children: (0, n.jsx)("div", { ref: t, className: Q().inner }),
          })
        );
      }
      var Y = s(1163),
        K = s(2172).Z,
        H = s(5187),
        U = s.n(H);
      let X = m()(
          () =>
            s
              .e(338)
              .then(s.bind(s, 3338))
              .then((e) => e.Cursor),
          { loadableGenerated: { webpack: () => [3338] }, ssr: !1 }
        ),
        J = m()(
          () =>
            s
              .e(359)
              .then(s.bind(s, 5359))
              .then((e) => e.PageTransition),
          { loadableGenerated: { webpack: () => [5359] }, ssr: !1 }
        );
      function Layout(e) {
        let {
            seo: t = { title: "", description: "", image: "", keywords: "" },
            children: s,
            theme: l = "light",
            className: c,
          } = e,
          [d, h] = (0, i.o)((e) => [e.lenis, e.setLenis]),
          m = (0, Y.useRouter)();
        (0, a.bt)(() => {
          window.scrollTo(0, 0);
          let e = new K({
            duration: 1,
            easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            orientation: "vertical",
            smoothWheel: !0,
            wheelMultiplier: 1.5,
            smoothTouch: !1,
            touchMultiplier: 2,
          });
          return (
            (window.lenis = e),
            h(e),
            () => {
              e.destroy(), h(null);
            }
          );
        }, []);
        let [u, _] = (0, r.useState)();
        return (
          (0, a.bt)(() => {
            if (d && u && "#" !== u) {
              let e = document.querySelector(u);
              e && d.scrollTo(e, { offset: 0 });
            }
          }, [d, u]),
          (0, a.bt)(() => {
            if (m.asPath.includes("#")) {
              let e = m.asPath.split("#").pop();
              e && _("#" + e);
            }
          }, [m]),
          (0, a.bt)(() => {
            function onClick(e) {
              let t = e.currentTarget,
                s = t.href.split("#").pop();
              s &&
                (e.preventDefault(),
                _("#" + s),
                setTimeout(() => {
                  window.location.hash = s;
                }, 0));
            }
            let e = [...document.querySelectorAll("[href]")].filter((e) => {
              let t = e.getAttribute("href");
              return (
                t &&
                "string" == typeof t &&
                t.includes(m.pathname + "#") &&
                t.split("#").pop()
              );
            });
            return (
              e.forEach((e) => {
                e.addEventListener("click", onClick, !1);
              }),
              () => {
                e.forEach((e) => {
                  e.removeEventListener("click", onClick, !1);
                });
              }
            );
          }, []),
          (0, a.xQ)((e) => {
            null == d || d.raf(e);
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(CustomHead, { ...t }),
              (0, n.jsxs)("div", {
                className: (0, o.Z)("theme-".concat(l), U().layout, c),
                children: [
                  (0, n.jsx)(J, {}),
                  (0, n.jsx)(Intro, {}),
                  (0, n.jsx)(X, {}),
                  (0, n.jsx)(Scrollbar, {}),
                  (0, n.jsx)("main", { className: U().main, children: s }),
                  (0, n.jsx)(Footer, {}),
                ],
              }),
            ],
          })
        );
      }
      var $ = s(621),
        ee = s(7466),
        et = s.n(ee);
      let es = m()(() => s.e(707).then(s.bind(s, 6707)), {
        loadableGenerated: { webpack: () => [6707] },
        ssr: !1,
      });
      m()(() => s.e(483).then(s.bind(s, 4483)), {
        loadableGenerated: { webpack: () => [4483] },
        ssr: !1,
      }),
        m()(() => s.e(166).then(s.bind(s, 1166)), {
          loadableGenerated: { webpack: () => [1166] },
          ssr: !1,
        });
      let en = m()(() => s.e(389).then(s.bind(s, 1389)), {
          loadableGenerated: { webpack: () => [1389] },
          ssr: !1,
        }),
        ea = m()(
          () =>
            s
              .e(508)
              .then(s.bind(s, 2508))
              .then((e) => e.Parallax),
          { loadableGenerated: { webpack: () => [2508] }, ssr: !1 }
        ),
        eo = m()(
          () =>
            s
              .e(803)
              .then(s.bind(s, 3803))
              .then((e) => e.HorizontalSlides),
          { loadableGenerated: { webpack: () => [3803] }, ssr: !1 }
        );
      m()(
        () =>
          s
            .e(478)
            .then(s.bind(s, 3478))
            .then((e) => e.FeatureCards),
        { loadableGenerated: { webpack: () => [3478] }, ssr: !1 }
      );
      var er = !0,
        home = () => {
          let [e, t] = (0, r.useState)(!1),
            s = (0, r.useRef)(null),
            [l, c] = (0, a.EL)(),
            { height: h } = (0, O.Z)();
          (0, i.o)((e) => {
            let { introOut: t } = e;
            return t;
          });
          let m = (0, r.useRef)(null),
            [u, _] = (0, r.useState)("dark"),
            p = (0, i.o)((e) => {
              let { lenis: t } = e;
              return t;
            });
          (0, R.useControls)(
            "lenis",
            () => ({
              stop: (0, R.button)(() => {
                p.stop();
              }),
              start: (0, R.button)(() => {
                p.start();
              }),
            }),
            [p]
          ),
            (0, R.useControls)(
              "scrollTo",
              () => ({
                immediate: (0, R.button)(() => {
                  p.scrollTo(3e4, { immediate: !0 });
                }),
                smoothDuration: (0, R.button)(() => {
                  p.scrollTo(3e4, { lock: !0, duration: 10 });
                }),
                smooth: (0, R.button)(() => {
                  p.scrollTo(3e4);
                }),
                forceScrollTo: (0, R.button)(() => {
                  p.scrollTo(3e4, { force: !0 });
                }),
              }),
              [p]
            ),
            (0, S.v)((e) => {
              let { scroll: n } = e;
              if ((t(n > 10), !c.top)) return;
              let a = c.top + 0.3 * h,
                o = c.top + c.height - 0.8 * h,
                r = (0, E.uZ)(0, (0, E.KK)(a, o, n, 0, 1), 1),
                i = (0, E.uZ)(0, (0, E.KK)(0, 0.4, r, 0, 1), 1),
                l = (0, E.uZ)(0, (0, E.KK)(0.37, 0.8, r, 0, 1), 1);
              _(1 === l ? "light" : "dark"),
                s.current.style.setProperty("--progress1", i),
                s.current.style.setProperty("--progress2", l),
                1 === r
                  ? s.current.style.setProperty(
                      "background-color",
                      "currentColor"
                    )
                  : s.current.style.removeProperty("background-color");
            });
          let [g, f] = (0, a.EL)(),
            [j, v] = (0, a.EL)(),
            [b, N] = (0, a.EL)(),
            [w, y] = (0, a.EL)(),
            [k, I] = (0, a.EL)(),
            C = (0, i.o)((e) => {
              let { addThreshold: t } = e;
              return t;
            });
          (0, a.bt)(() => {
            C({ id: "top", value: 0 });
          }, []),
            (0, a.bt)(() => {
              let e = f.top - h / 2;
              C({ id: "why-start", value: e }),
                C({ id: "why-end", value: e + f.height });
            }, [f]),
            (0, a.bt)(() => {
              let e = v.top - h / 2;
              C({ id: "cards-start", value: e }),
                C({ id: "cards-end", value: e + v.height }),
                C({ id: "red-end", value: e + v.height + h });
            }, [v]),
            (0, a.bt)(() => {
              let e = N.top - h;
              C({ id: "light-start", value: e });
            }, [N]),
            (0, a.bt)(() => {
              let e = y.top;
              C({ id: "features", value: e });
            }, [y]),
            (0, a.bt)(() => {
              let e = I.top;
              C({ id: "in-use", value: e });
            }, [I]),
            (0, a.bt)(() => {
              let e = null == p ? void 0 : p.limit;
              C({ id: "end", value: e });
            }, [null == p ? void 0 : p.limit]),
            (0, S.v)((e) => {});
          let M = (0, r.useRef)(),
            [T, L] = (0, r.useState)(!1),
            Z = (0, $.Z)(M, { threshold: 0.2 });
          (0, r.useEffect)(() => {
            (null == Z ? void 0 : Z.isIntersecting) && L(!0);
          }, [Z]),
            (0, Y.useRouter)();
          let [P, V] = (0, r.useState)(!1),
            [W, D] = (0, r.useState)(!1),
            F = (0, r.useRef)(null),
            [B, z] = (0, r.useState)(!0),
            G = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            showControlsTemporarily();
          }, []);
          let showControlsTemporarily = () => {
              z(!0),
                G.current && clearTimeout(G.current),
                (G.current = setTimeout(() => {
                  z(!1);
                }, 2500));
            },
            handleVideoInteraction = () => {
              showControlsTemporarily();
            };
          return (
            (0, r.useEffect)(
              () => () => {
                G.current && clearTimeout(G.current);
              },
              []
            ),
            (0, n.jsxs)(Layout, {
              theme: u,
              seo: {
                title:
                  "VRAM.AI — The All-in-One Decentralized Launchpad for AI Agents",
                description:
                  "VRAM is revolutionizing AI development by blending DeFi mechanics and social elements to create SocialAI - a new paradigm where AI agents collaborate and share value in a decentralized ecosystem.",
                keywords: [
                  "VRAM",
                  "AI Agents",
                  "SocialFi",
                  "Sui network",
                  "AI Launchpad",
                  "blockchain",
                  "machine learning",
                  "Web3 AI",
                  "SocialAI",
                  "Decentralized AI",
                  "Community-driven AI",
                  "AI Agents",
                  "AI Agents Framework",
                  "AI Agents Launchpad",
                  "AI Agents Marketplace",
                ],
                image: "/vram-text-logo.webp",
              },
              className: et().home,
              children: [
                (0, n.jsx)(A, { ref: m, isAtTop: !e }),
                (0, n.jsx)("div", {
                  className: et().canvas,
                  children: (0, n.jsx)(WebGL, {}),
                }),
                (0, n.jsxs)("section", {
                  className: et().hero,
                  children: [
                    (0, n.jsxs)("div", {
                      className: "layout-grid-inner",
                      children: [
                        (0, n.jsx)(es, {
                          className: (0, o.Z)(et().icon, {
                            "white-background": "light" === u,
                          }),
                        }),
                        (0, n.jsxs)("span", {
                          className: et().sub,
                          children: [
                            (0, n.jsx)("h2", {
                              className: (0, o.Z)("h3", et().subtitle),
                              children: "Intelligence Collective Economy",
                            }),
                            (0, n.jsx)("h3", {
                              className: (0, o.Z)("h2", et().subtitle),
                              children: "POWERED BY $DEEPRAM",
                            }),
                            (0, n.jsx)("div", {
                              className: et().buyButtonContainer,
                              children: (0, n.jsx)(Button, {
                                className: (0, o.Z)(et().buyButton, "contrast"),
                                arrow: !0,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "CA: 0x Coming Soon!",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: et().scrollArrow,
                              children: (0, n.jsx)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0, n.jsx)("path", {
                                  d: "M12 4L12 20M12 20L18 14M12 20L6 14",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: (0, o.Z)(et().bottom, "layout-grid"),
                      children: [
                        (0, n.jsx)("div", {
                          className: (0, o.Z)(
                            "hide-on-mobile",
                            et()["scroll-hint"],
                            e && et().hide
                          ),
                          children: (0, n.jsxs)("div", {
                            className: et().text,
                            children: [
                              (0, n.jsx)("p", {
                                children: "Welcome to Genesis Core",
                              }),
                              (0, n.jsx)("p", {
                                children: "Explore the future of AI Agents",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsxs)("h1", {
                          className: (0, o.Z)(et().description, "p-s"),
                          children: [
                            (0, n.jsx)("p", {
                              className: "p-s",
                              children: "A new era of AI Agents on Eth",
                            }),
                            (0, n.jsxs)("p", {
                              className: "p-s",
                              children: [
                                "TGE Coming Soon -",
                                " ",
                                (0, n.jsx)(d, {
                                  href: "https://twitter.com/vramxai",
                                  className: "contrast",
                                  children: "Follow us",
                                }),
                                " ",
                                "to be notified",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)(Button, {
                          className: (0, o.Z)(et().cta, "contrast"),
                          arrow: !0,
                          href: "https://t.me/",
                          children: "Register for TGE",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("section", {
                  className: et().why,
                  "data-lenis-scroll-snap-align": "start",
                  children: (0, n.jsxs)("div", {
                    className: "layout-grid",
                    children: [
                      (0, n.jsx)("h2", {
                        className: (0, o.Z)(et().sticky, "h2"),
                        children: "What Makes DEEPRAM Unique?",
                      }),
                      (0, n.jsxs)("aside", {
                        className: et().features,
                        ref: g,
                        children: [
                          (0, n.jsxs)("div", {
                            className: et().feature,
                            children: [
                              (0, n.jsx)("h3", {
                                className: (0, o.Z)(et().title, "h4"),
                                children: "AI Agents Framework",
                              }),
                              (0, n.jsxs)("p", {
                                className: "p",
                                children: [
                                  "A modular framework for creating autonomous AI agents.",
                                  (0, n.jsx)("br", {}),
                                  "Build, upgrade, and interconnect AI models seamlessly.",
                                  (0, n.jsx)("br", {}),
                                  "Open-source development for continuous improvement.",
                                  (0, n.jsx)("br", {}),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: et().feature,
                            children: [
                              (0, n.jsx)("h3", {
                                className: (0, o.Z)(et().title, "h4"),
                                children: "Create the next AI Agents",
                              }),
                              (0, n.jsxs)("p", {
                                className: "p",
                                children: [
                                  "Decentralized incubator for launching AI models.",
                                  (0, n.jsx)("br", {}),
                                  "Community-funded and supported development.",
                                  (0, n.jsx)("br", {}),
                                  "Transparent and fair launch mechanism.",
                                  (0, n.jsx)("br", {}),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: et().feature,
                            children: [
                              (0, n.jsx)("h3", {
                                className: (0, o.Z)(et().title, "h4"),
                                children: "SocialFi-Driven Ecosystem",
                              }),
                              (0, n.jsxs)("p", {
                                className: "p",
                                children: [
                                  "Earn rewards for improving AI agents.",
                                  (0, n.jsx)("br", {}),
                                  "Collaborative development through community contributions.",
                                  (0, n.jsx)("br", {}),
                                  "True decentralization in AI development.",
                                  (0, n.jsx)("br", {}),
                                  "Share profits from successful AI models.",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: et().feature,
                            children: [
                              (0, n.jsx)("h3", {
                                className: (0, o.Z)(et().title, "h4"),
                                children: "Interconnected Intelligence",
                              }),
                              (0, n.jsxs)("p", {
                                className: "p",
                                children: [
                                  "AI agents that collaborate and learn from each other.",
                                  (0, n.jsx)("br", {}),
                                  "Integration with Web3 & Web2 APIs.",
                                  (0, n.jsx)("br", {}),
                                  "Self-improving ecosystem of AI models.",
                                  (0, n.jsx)("br", {}),
                                  "Cross-chain functionality for maximum reach.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("section", {
                  className: et().rethink,
                  children: [
                    (0, n.jsxs)("div", {
                      className: (0, o.Z)("layout-grid", et().pre),
                      children: [
                        (0, n.jsx)("div", {
                          className: et().highlight,
                          "data-lenis-scroll-snap-align": "start",
                          children: (0, n.jsx)(ea, {
                            speed: -0.5,
                            children: (0, n.jsx)("p", {
                              className: "h2",
                              children: "Rethinking the AI futures",
                            }),
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: et().comparison,
                          children: (0, n.jsx)(ea, {
                            speed: 0.5,
                            children: (0, n.jsxs)("p", {
                              className: "p",
                              children: [
                                "The rise of AI has been explosive, yet flawed. Centralized models control innovation, closed AI systems stifle collaboration, and existing Web3 AI projects barely scratch the surface. DEEPRAM changes this by creating a truly decentralized, community-driven AI development ecosystem.",
                                (0, n.jsx)("br", {}),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: et().cards,
                      ref: j,
                      children: (0, n.jsxs)(eo, {
                        children: [
                          (0, n.jsx)(x.Z, {
                            className: et().card,
                            number: "Create",
                            text: "Build Autonomous AI Agents",
                            image: "/images/trading.jpeg",
                          }),
                          (0, n.jsx)(x.Z, {
                            className: et().card,
                            number: "Deploy",
                            text: "Launch Your AI Models",
                            image: "/images/portfolio.jpeg",
                          }),
                          (0, n.jsx)(x.Z, {
                            className: et().card,
                            number: "Earn",
                            text: "Monetize AI Development",
                            image: "/images/music.jpeg",
                          }),
                          (0, n.jsx)(x.Z, {
                            className: et().card,
                            number: "Evolve",
                            text: "Continuous AI Improvement",
                            image: "/images/drama.jpeg",
                          }),
                          (0, n.jsx)(x.Z, {
                            className: et().card,
                            number: "Connect",
                            text: "Cross-Platform Integration",
                            image: "/images/army.jpeg",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("section", {
                  ref: (e) => {
                    l(e), (s.current = e);
                  },
                  className: et().solution,
                  children: (0, n.jsx)("div", {
                    className: et().inner,
                    children: (0, n.jsxs)("div", {
                      className: et().zoom,
                      children: [
                        (0, n.jsxs)("h2", {
                          className: (0, o.Z)(et().first, "h1 vh"),
                          children: [
                            "Pre-TGE Phase",
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)("span", {
                              className: "contrast",
                              children: "HOW TO GET",
                            }),
                          ],
                        }),
                        (0, n.jsx)("h2", {
                          className: (0, o.Z)(et().enter, "h2 vh"),
                          children: (0, n.jsx)("span", {
                            className: et().getText,
                            children: "$DEEPRAM",
                          }),
                        }),
                        (0, n.jsx)("h2", {
                          className: (0, o.Z)(et().second, "h1 vh"),
                          children: "You are early!",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, n.jsx)("section", {
                  className: (0, o.Z)("theme-light", et().featuring),
                  ref: b,
                  children: (0, n.jsxs)("div", {
                    className: et().inner,
                    children: [
                      (0, n.jsxs)("div", {
                        className: et().manifestoSection,
                        children: [
                          (0, n.jsxs)("blockquote", {
                            className: et().quote,
                            children: [
                              (0, n.jsx)("p", {
                                className: et().quoteText,
                                children:
                                  '"Like fire that empowered humanity, AI should be a tool that everyone can harness"',
                              }),
                              (0, n.jsx)("cite", {
                                className: et().quoteCite,
                                children: "Sid, CEO of DEEPRAM",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: et().manifestoContent,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: et().agentNetwork,
                        children: [
                          (0, n.jsxs)("div", {
                            className: et().networkTitle,
                            children: [
                              (0, n.jsx)("h3", {
                                children: "Interconnected Intelligence",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "A new paradigm of AI agent collaboration",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: et().networkVisual,
                            children: (0, n.jsxs)("div", {
                              className: et().agentGroup,
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    et().agentNode + " " + et().superAgent,
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: et().agentIcon,
                                      children: "◉",
                                    }),
                                    (0, n.jsx)("span", {
                                      className: et().agentLabel,
                                      children: "Super Agents",
                                    }),
                                    (0, n.jsx)("span", {
                                      className: et().agentDesc,
                                      children: "Orchestrate & Delegate",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className: et().connections,
                                  children: (0, n.jsxs)("svg", {
                                    className: et().connectionLines,
                                    viewBox: "0 0 400 300",
                                    children: [
                                      (0, n.jsxs)("defs", {
                                        children: [
                                          (0, n.jsx)("path", {
                                            id: "path1",
                                            d: "M200,50 L200,120 L200,180 Q150,215 100,250",
                                          }),
                                          (0, n.jsx)("path", {
                                            id: "path2",
                                            d: "M200,50 L200,120 L200,180 L200,250",
                                          }),
                                          (0, n.jsx)("path", {
                                            id: "path3",
                                            d: "M200,50 L200,120 L200,180 Q250,215 300,250",
                                          }),
                                          (0, n.jsx)("path", {
                                            id: "horizontalPath",
                                            d: "M100,250 Q150,250 200,250 Q250,250 300,250",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)("path", {
                                        className: et().mainPath,
                                        d: "M200,50 L200,120",
                                      }),
                                      (0, n.jsx)("path", {
                                        className: et().agentPath1,
                                        d: "M200,180 Q150,215 100,250",
                                      }),
                                      (0, n.jsx)("path", {
                                        className: et().agentPath2,
                                        d: "M200,180 L200,250",
                                      }),
                                      (0, n.jsx)("path", {
                                        className: et().agentPath3,
                                        d: "M200,180 Q250,215 300,250",
                                      }),
                                      (0, n.jsx)("path", {
                                        className: et().horizontalPath1,
                                        d: "M100,250 Q150,250 200,250",
                                      }),
                                      (0, n.jsx)("path", {
                                        className: et().horizontalPath2,
                                        d: "M200,250 Q250,250 300,250",
                                      }),
                                      (0, n.jsx)("circle", {
                                        className:
                                          et().movingDot + " " + et().dot1,
                                        r: "4",
                                        children: (0, n.jsx)("animateMotion", {
                                          dur: "4s",
                                          repeatCount: "indefinite",
                                          children: (0, n.jsx)("mpath", {
                                            href: "#path1",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("circle", {
                                        className:
                                          et().movingDot + " " + et().dot2,
                                        r: "4",
                                        children: (0, n.jsx)("animateMotion", {
                                          dur: "4s",
                                          repeatCount: "indefinite",
                                          children: (0, n.jsx)("mpath", {
                                            href: "#path2",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("circle", {
                                        className:
                                          et().movingDot + " " + et().dot3,
                                        r: "4",
                                        children: (0, n.jsx)("animateMotion", {
                                          dur: "4s",
                                          repeatCount: "indefinite",
                                          children: (0, n.jsx)("mpath", {
                                            href: "#path3",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("circle", {
                                        className:
                                          et().movingDot + " " + et().dot4,
                                        r: "4",
                                        children: (0, n.jsx)("animateMotion", {
                                          dur: "3s",
                                          repeatCount: "indefinite",
                                          children: (0, n.jsx)("mpath", {
                                            href: "#horizontalPath",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("circle", {
                                        cx: "200",
                                        cy: "180",
                                        r: "6",
                                        className: et().connectionPoint,
                                      }),
                                      (0, n.jsx)("circle", {
                                        cx: "100",
                                        cy: "250",
                                        r: "6",
                                        className: et().connectionPoint,
                                      }),
                                      (0, n.jsx)("circle", {
                                        cx: "200",
                                        cy: "250",
                                        r: "6",
                                        className: et().connectionPoint,
                                      }),
                                      (0, n.jsx)("circle", {
                                        cx: "300",
                                        cy: "250",
                                        r: "6",
                                        className: et().connectionPoint,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className: et().serviceFramework,
                                  children: (0, n.jsxs)("div", {
                                    className:
                                      et().agentNode + " " + et().frameworkNode,
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: et().agentIcon,
                                        children: "⚡",
                                      }),
                                      (0, n.jsx)("span", {
                                        className: et().agentLabel,
                                        children: "Service Framework",
                                      }),
                                      (0, n.jsx)("span", {
                                        className: et().agentDesc,
                                        children: "Monetize & Connect APIs",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className: et().subAgents,
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        et().agentNode + " " + et().taskAgent,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: et().agentIcon,
                                          children: "◉",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: et().agentLabel,
                                          children: "Task Agents",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: et().agentDesc,
                                          children: "Execute & Report",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        et().agentNode +
                                        " " +
                                        et().assistantAgent,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: et().agentIcon,
                                          children: "◉",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: et().agentLabel,
                                          children: "Assistant Agents",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: et().agentDesc,
                                          children: "Support & Enhance",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        et().agentNode + " " + et().apiAgent,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: et().agentIcon,
                                          children: "◉",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: et().agentLabel,
                                          children: "API Agents",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: et().agentDesc,
                                          children: "Connect & Monetize",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("section", {
                  className: et().nftVideoSection,
                  children: (0, n.jsx)("div", {
                    className: (0, o.Z)("layout-grid", et().nftContent),
                    children: (0, n.jsxs)("div", {
                      className: et().nftVideoWrapper,
                      children: [
                        (0, n.jsx)("h2", {
                          className: (0, o.Z)("h1", et().nftTitle),
                          children: "DEEPRAM GENESIS CORE",
                        }),
                        (0, n.jsxs)("div", {
                          className: et().videoContainer,
                          children: [
                            (0, n.jsx)("video", {
                              ref: F,
                              className: et().nftVideo,
                              src: "/Labo1V92.mp4",
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              onMouseEnter: handleVideoInteraction,
                              onMouseLeave: handleVideoInteraction,
                            }),
                            (0, n.jsx)("div", {
                              className: et().videoOverlay,
                              onClick: () => {
                                F.current &&
                                  (W
                                    ? (F.current.pause(), D(!1))
                                    : (F.current.play(), D(!0)),
                                  showControlsTemporarily());
                              },
                              children: (0, n.jsx)("button", {
                                className: (0, o.Z)(et().playToggle, {
                                  [et().playing]: W,
                                  [et().visible]: B,
                                }),
                                "aria-label": W ? "Pause video" : "Play video",
                                children: (0, n.jsx)("div", {
                                  className: et().playIcon,
                                  children: W
                                    ? (0, n.jsxs)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: [
                                          (0, n.jsx)("rect", {
                                            x: "6",
                                            y: "4",
                                            width: "4",
                                            height: "16",
                                          }),
                                          (0, n.jsx)("rect", {
                                            x: "14",
                                            y: "4",
                                            width: "4",
                                            height: "16",
                                          }),
                                        ],
                                      })
                                    : (0, n.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: (0, n.jsx)("polygon", {
                                          points: "5,3 19,12 5,21",
                                        }),
                                      }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, n.jsx)("section", {
                  className: et().suiSection,
                  children: (0, n.jsxs)("div", {
                    className: (0, o.Z)("layout-grid", et().suiContent),
                    children: [
                      (0, n.jsx)("h2", {
                        className: (0, o.Z)("h1", et().suiTitle),
                        children: "BUILT on ETH",
                      }),
                      // (0, n.jsx)("div", {
                      //   className: et().suiLogo,
                      //   children: (0, n.jsx)(en, {}),
                      // }),
                      (0, n.jsx)("p", {
                        className: (0, o.Z)("h3", et().suiSubtitle),
                        children: "Fastest reliable secure blockchain",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("section", {
                  ref: (e) => {
                    k(e), (M.current = e);
                  },
                  className: (0, o.Z)(
                    "theme-light",
                    et()["in-use"],
                    T && et().visible
                  ),
                  children: (0, n.jsx)("div", {
                    className: et().content,
                    children: (0, n.jsx)("div", { className: et().intro }),
                  }),
                }),
              ],
            })
          );
        };
    },
    4185: function (e) {
      e.exports = {
        button: "button_button__dZRSb",
        text: "button_text__YzV8X",
        visible: "button_visible__JooQN",
        hidden: "button_hidden__95QJi",
        arrow: "button_arrow__e89hI",
        icon: "button_icon__eZOV7",
      };
    },
    6097: function (e) {
      e.exports = {
        wrapper: "card_wrapper__80Ntc",
        inverted: "card_inverted__qE_BX",
        imageWrapper: "card_imageWrapper__2R6is",
        cardImage: "card_cardImage__uZr6S",
        content: "card_content__iVqcu",
        number: "card_number____g_e",
        text: "card_text__hXVyg",
      };
    },
    7871: function (e) {
      e.exports = {
        footer: "footer_footer__3kcQj",
        top: "footer_top__Wxu9Z",
        "first-line": "footer_first-line__H0iQt",
        "shameless-plug": "footer_shameless-plug__eobJb",
        cta: "footer_cta__CkaHZ",
        "last-line": "footer_last-line__XC5ob",
        bottom: "footer_bottom__FFkQv",
        links: "footer_links__1iZto",
        profile: "footer_profile__yI919",
        title: "footer_title__QcupS",
        profileImage: "footer_profileImage__Gd1Ft",
        profileInfo: "footer_profileInfo__X880f",
        name: "footer_name__tZAVY",
        link: "footer_link__pjK7O",
        socialIcon: "footer_socialIcon__Io8zu",
        tm: "footer_tm__XnVwQ",
      };
    },
    8633: function (e) {
      e.exports = {
        header: "header_header__pwrbs",
        navbar: "header_navbar__kkst0",
        blurBackground: "header_blurBackground__j5xSk",
        head: "header_head__1IIxT",
        logoWrapper: "header_logoWrapper__tSXEH",
        logo: "header_logo__AqbZa",
        rightSection: "header_rightSection__wX1VY",
        hamburger: "header_hamburger__0y19Y",
        active: "header_active__6Yj05",
        navigationMenu: "header_navigationMenu__gG4Ir",
        open: "header_open__PuuRT",
        navLinks: "header_navLinks__W66Dp",
        navItem: "header_navItem__TxmnB",
        navTitle: "header_navTitle__bHj6t",
        subMenu: "header_subMenu__IKE_D",
        navLink: "header_navLink__7a1ot",
        exploreProtocol: "header_exploreProtocol__c4rBv",
        checkWallet: "header_checkWallet__XV49q",
        openApp: "header_openApp__2MYbi",
        "at-top": "header_at-top__S13j1",
      };
    },
    3377: function (e) {
      e.exports = {
        wrapper: "intro_wrapper__NJqQ6",
        out: "intro_out__XJLVd",
        logo: "intro_logo__LpPOV",
        relative: "intro_relative__6mAOC",
        backgroundLogo: "intro_backgroundLogo__RZt2w",
        logoFixed: "intro_logoFixed__7r0Qs",
        text: "intro_text__lh6bt",
        glow: "intro_glow__AQRgF",
        "white-background": "intro_white-background__bneI7",
        textWrapper: "intro_textWrapper___623n",
        vram: "intro_vram__flShY",
        ai: "intro_ai__18rr9",
        show: "intro_show__kiHh0",
        title: "intro_title__Q8lJH",
        pulse: "intro_pulse__ZgkZC",
      };
    },
    7018: function (e) {
      e.exports = {
        popup: "popup_popup__q1CVw",
        visible: "popup_visible__qH_wi",
        content: "popup_content__xqgle",
      };
    },
    6397: function (e) {
      e.exports = {
        scrollbar: "scrollbar_scrollbar__uEd_s",
        inner: "scrollbar_inner__GHrz8",
      };
    },
    2601: function (e) {
      e.exports = {
        overlay: "wallet-verification-popup_overlay__cI85M",
        popup: "wallet-verification-popup_popup__gnYT5",
        success: "wallet-verification-popup_success__cQUV8",
        successPulse: "wallet-verification-popup_successPulse__F14zr",
        closeButton: "wallet-verification-popup_closeButton__54iVh",
        content: "wallet-verification-popup_content__72pS_",
        input: "wallet-verification-popup_input__kvNLa",
        buttons: "wallet-verification-popup_buttons__PmDgn",
        status: "wallet-verification-popup_status__yc7NG",
        slideIn: "wallet-verification-popup_slideIn___68GA",
        error: "wallet-verification-popup_error__nAd3_",
        successMessage: "wallet-verification-popup_successMessage__iFZ0V",
        bounce: "wallet-verification-popup_bounce__cIFkn",
        keyMessage: "wallet-verification-popup_keyMessage__2vCPm",
        glow: "wallet-verification-popup_glow__MNtT8",
        walletDisplay: "wallet-verification-popup_walletDisplay__6kNTE",
        countdownWrapper: "wallet-verification-popup_countdownWrapper__oqiSm",
      };
    },
    5187: function (e) {
      e.exports = {
        layout: "layout_layout__yd6mS",
        main: "layout_main__k8zJI",
      };
    },
    7466: function (e) {
      e.exports = {
        home: "home_home__89URD",
        canvas: "home_canvas___mpnG",
        hidden: "home_hidden__835rM",
        "hide-text": "home_hide-text__f_n1u",
        "show-text": "home_show-text__V4L76",
        hero: "home_hero__t3cdJ",
        title: "home_title__6mRaH",
        icon: "home_icon__DTlhI",
        sub: "home_sub__rPkPr",
        subtitle: "home_subtitle__YOQzO",
        presaleLiveContainer: "home_presaleLiveContainer__0BYvq",
        presaleLiveMessage: "home_presaleLiveMessage__Iy2HG",
        float: "home_float__l8r2d",
        pulse: "home_pulse__qf2xb",
        "pulse-animation": "home_pulse-animation__cI1fi",
        ripple: "home_ripple__wUK3o",
        tm: "home_tm__hGJDU",
        scrollArrow: "home_scrollArrow__zrzc8",
        buyButtonContainer: "home_buyButtonContainer__fyq9E",
        buyButton: "home_buyButton__qCTmR",
        bottom: "home_bottom__qqR9H",
        "scroll-hint": "home_scroll-hint__29yxX",
        text: "home_text__HsYX8",
        hide: "home_hide__uMrvE",
        description: "home_description__kwr1f",
        cta: "home_cta__0eyhx",
        why: "home_why__RpOwf",
        sticky: "home_sticky__Ksr1B",
        features: "home_features__f2_l_",
        feature: "home_feature__MWe1P",
        p: "home_p__7E7CK",
        rethink: "home_rethink__KpV6u",
        pre: "home_pre__hGMlY",
        highlight: "home_highlight__fOVGO",
        comparison: "home_comparison__kpFxP",
        cards: "home_cards__hN50I",
        card: "home_card__fX45x",
        tokenomicsWrapper: "home_tokenomicsWrapper__QReMw",
        h2: "home_h2__UnFh0",
        table: "home_table__liOD0",
        total: "home_total__vak3w",
        announcement: "home_announcement__Y4RNy",
        solution: "home_solution__aGWbh",
        inner: "home_inner__mUUcX",
        zoom: "home_zoom__azRJ_",
        getText: "home_getText__t1XYw",
        first: "home_first__xDBmo",
        second: "home_second__YthlW",
        enter: "home_enter__rmsLd",
        featuring: "home_featuring__63A5g",
        grid: "home_grid__rUmFh",
        item: "home_item__psXoO",
        tokenomicsSection: "home_tokenomicsSection__4ZAW9",
        "in-use": "home_in-use__rrB__",
        list: "home_list__xmZ9G",
        temp: "home_temp__O2X36",
        animate: "home_animate__zjWVw",
        manifestoSection: "home_manifestoSection__Rk9Qv",
        quote: "home_quote__88Qm0",
        quoteText: "home_quoteText__Ru0yx",
        quoteCite: "home_quoteCite__IcSHu",
        manifestoContent: "home_manifestoContent__aINW3",
        manifestoText: "home_manifestoText__kaQ9g",
        manifestoSubtext: "home_manifestoSubtext__Msuew",
        sectionTitle: "home_sectionTitle__AoJxO",
        transitionSection: "home_transitionSection__Rla_y",
        circuitLines: "home_circuitLines___g7cq",
        dash: "home_dash__1e_yp",
        agentNetwork: "home_agentNetwork__Tkpi4",
        networkTitle: "home_networkTitle__STylT",
        networkVisual: "home_networkVisual__Y35Ns",
        agentGroup: "home_agentGroup__CLJQD",
        connections: "home_connections__tx126",
        mainPath: "home_mainPath__K8ao2",
        horizontalPath1: "home_horizontalPath1__E_wYA",
        horizontalPath2: "home_horizontalPath2__UObPM",
        connectionPoint: "home_connectionPoint__Y5wYS",
        glow: "home_glow__clI8g",
        movingDot: "home_movingDot__Fi1SW",
        fadeInOut: "home_fadeInOut__145iR",
        dot1: "home_dot1__Nc3RZ",
        dot2: "home_dot2__RZxYN",
        dot3: "home_dot3__KJKWx",
        dot4: "home_dot4__BZ3eR",
        serviceFramework: "home_serviceFramework__1Tr1i",
        subAgents: "home_subAgents__Ijh1i",
        agentNode: "home_agentNode__HsJ2Q",
        frameworkNode: "home_frameworkNode__eUBKz",
        agentIcon: "home_agentIcon___UtoE",
        superAgent: "home_superAgent__07e_4",
        taskAgent: "home_taskAgent__d1au9",
        assistantAgent: "home_assistantAgent__W8vh6",
        apiAgent: "home_apiAgent__QE0Qq",
        agentLabel: "home_agentLabel__TUGUf",
        agentDesc: "home_agentDesc__yo6_y",
        suiSection: "home_suiSection__sgyoa",
        suiContent: "home_suiContent__5L_YE",
        suiLogo: "home_suiLogo__LCHdh",
        suiTitle: "home_suiTitle__MsOcg",
        suiSubtitle: "home_suiSubtitle__MfjcM",
        nftVideoSection: "home_nftVideoSection__Z_5b5",
        nftContent: "home_nftContent__h3VPh",
        nftVideoWrapper: "home_nftVideoWrapper__Q5L4k",
        nftTitle: "home_nftTitle__tOM_v",
        videoContainer: "home_videoContainer__XL2Ge",
        nftVideo: "home_nftVideo__M3twO",
        videoOverlay: "home_videoOverlay__tgIfg",
        playing: "home_playing__oh8z6",
        playToggle: "home_playToggle__GgJpV",
        visible: "home_visible__hKJ4d",
        playIcon: "home_playIcon__unmRn",
        scrollBounce: "home_scrollBounce___Emyg",
      };
    },
  },
]);
