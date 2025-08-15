(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [709],
  {
    1052: function (o) {
      "use strict";
      /*!
       * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ o.exports = function (o, l) {
        if (null == o)
          throw TypeError("expected first argument to be an object.");
        if (
          void 0 === l ||
          "undefined" == typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return o;
        for (
          var c = Object.prototype.propertyIsEnumerable,
            u = Object(o),
            h = arguments.length,
            g = 0;
          ++g < h;

        )
          for (
            var _ = Object(arguments[g]),
              b = Object.getOwnPropertySymbols(_),
              y = 0;
            y < b.length;
            y++
          ) {
            var w = b[y];
            c.call(_, w) && (u[w] = _[w]);
          }
        return u;
      };
    },
    8363: function (o, l) {
      "use strict";
      l.Z = function (o, l) {
        if (o && l) {
          var c = Array.isArray(l) ? l : l.split(",");
          if (0 === c.length) return !0;
          var u = o.name || "",
            h = (o.type || "").toLowerCase(),
            g = h.replace(/\/.*$/, "");
          return c.some(function (o) {
            var l = o.trim().toLowerCase();
            return "." === l.charAt(0)
              ? u.toLowerCase().endsWith(l)
              : l.endsWith("/*")
              ? g === l.replace(/\/.*$/, "")
              : h === l;
          });
        }
        return !0;
      };
    },
    6919: function (o, l, c) {
      "use strict";
      var u = c(6104);
      o.exports = function (o) {
        u(o) || (o = {});
        for (var l = arguments.length, c = 1; c < l; c++) {
          var h = arguments[c];
          u(h) &&
            (function (o, l) {
              for (var c in l)
                Object.prototype.hasOwnProperty.call(l, c) && (o[c] = l[c]);
            })(o, h);
        }
        return o;
      };
    },
    6104: function (o) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ o.exports = function (o) {
        return null != o && ("object" == typeof o || "function" == typeof o);
      };
    },
    2561: function (o) {
      "use strict";
      /*!
       * for-in <https://github.com/jonschlinkert/for-in>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ o.exports = function (o, l, c) {
        for (var u in o) if (!1 === l.call(c, o[u], u, o)) break;
      };
    },
    3200: function (o) {
      /*!
       * get-value <https://github.com/jonschlinkert/get-value>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ o.exports = function (o, l, c, u, h) {
        var g;
        if (
          !(
            null !== (g = o) &&
            ("object" == typeof g || "function" == typeof g)
          ) ||
          !l
        )
          return o;
        if (
          ((l = toString(l)),
          c && (l += "." + toString(c)),
          u && (l += "." + toString(u)),
          h && (l += "." + toString(h)),
          l in o)
        )
          return o[l];
        for (var _ = l.split("."), b = _.length, y = -1; o && ++y < b; ) {
          for (var w = _[y]; "\\" === w[w.length - 1]; )
            w = w.slice(0, -1) + "." + _[++y];
          o = o[w];
        }
        return o;
      };
      function toString(o) {
        return o ? (Array.isArray(o) ? o.join(".") : o) : "";
      }
    },
    1833: function (o, l, c) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var u = c(5299);
      o.exports = function (o) {
        return u(o) || "function" == typeof o || Array.isArray(o);
      };
    },
    5299: function (o, l, c) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var u = c(7798);
      function isObjectObject(o) {
        return (
          !0 === u(o) && "[object Object]" === Object.prototype.toString.call(o)
        );
      }
      o.exports = function (o) {
        var l, c;
        return (
          !1 !== isObjectObject(o) &&
          "function" == typeof (l = o.constructor) &&
          !1 !== isObjectObject((c = l.prototype)) &&
          !1 !== c.hasOwnProperty("isPrototypeOf")
        );
      };
    },
    7798: function (o) {
      "use strict";
      /*!
       * isobject <https://github.com/jonschlinkert/isobject>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ o.exports = function (o) {
        return null != o && "object" == typeof o && !1 === Array.isArray(o);
      };
    },
    2709: function (o, l, c) {
      "use strict";
      let u, h, g, _;
      c.r(l),
        c.d(l, {
          Leva: function () {
            return Leva;
          },
          LevaInputs: function () {
            return _;
          },
          LevaPanel: function () {
            return LevaPanel;
          },
          LevaStoreProvider: function () {
            return LevaStoreProvider;
          },
          button: function () {
            return leva_esm_button;
          },
          buttonGroup: function () {
            return buttonGroup;
          },
          folder: function () {
            return folder;
          },
          levaStore: function () {
            return nV;
          },
          monitor: function () {
            return monitor;
          },
          useControls: function () {
            return useControls;
          },
          useCreateStore: function () {
            return useCreateStore;
          },
          useStoreContext: function () {
            return useStoreContext;
          },
        });
      var b = c(3935),
        y = c(7294),
        w = c.t(y, 2);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (o) {
              for (var l = 1; l < arguments.length; l++) {
                var c = arguments[l];
                for (var u in c)
                  ({}.hasOwnProperty.call(c, u) && (o[u] = c[u]));
              }
              return o;
            }).apply(null, arguments);
      }
      let T = (0, y.forwardRef)((o, l) => {
        let { children: c, ...u } = o,
          h = y.Children.toArray(c),
          g = h.find($5e63c961fc1ce211$var$isSlottable);
        if (g) {
          let o = g.props.children,
            c = h.map((l) =>
              l !== g
                ? l
                : y.Children.count(o) > 1
                ? y.Children.only(null)
                : (0, y.isValidElement)(o)
                ? o.props.children
                : null
            );
          return (0, y.createElement)(
            A,
            _extends({}, u, { ref: l }),
            (0, y.isValidElement)(o) ? (0, y.cloneElement)(o, void 0, c) : null
          );
        }
        return (0, y.createElement)(A, _extends({}, u, { ref: l }), c);
      });
      T.displayName = "Slot";
      let A = (0, y.forwardRef)((o, l) => {
        let { children: c, ...u } = o;
        return (0, y.isValidElement)(c)
          ? (0, y.cloneElement)(c, {
              ...(function (o, l) {
                let c = { ...l };
                for (let u in l) {
                  let h = o[u],
                    g = l[u],
                    _ = /^on[A-Z]/.test(u);
                  _
                    ? h && g
                      ? (c[u] = (...o) => {
                          g(...o), h(...o);
                        })
                      : h && (c[u] = h)
                    : "style" === u
                    ? (c[u] = { ...h, ...g })
                    : "className" === u &&
                      (c[u] = [h, g].filter(Boolean).join(" "));
                }
                return { ...o, ...c };
              })(u, c.props),
              ref: (function (...o) {
                return (l) =>
                  o.forEach((o) => {
                    "function" == typeof o
                      ? o(l)
                      : null != o && (o.current = l);
                  });
              })(l, c.ref),
            })
          : y.Children.count(c) > 1
          ? y.Children.only(null)
          : null;
      });
      A.displayName = "SlotClone";
      let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: o }) =>
        (0, y.createElement)(y.Fragment, null, o);
      function $5e63c961fc1ce211$var$isSlottable(o) {
        return (
          (0, y.isValidElement)(o) &&
          o.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
        );
      }
      let I = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((o, l) => {
          let c = (0, y.forwardRef)((o, c) => {
            let { asChild: u, ...h } = o,
              g = u ? T : l;
            return (
              (0, y.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, y.createElement)(g, _extends({}, h, { ref: c }))
            );
          });
          return (c.displayName = `Primitive.${l}`), { ...o, [l]: c };
        }, {}),
        N = (0, y.forwardRef)((o, l) => {
          var c;
          let {
            container: u = null == globalThis
              ? void 0
              : null === (c = globalThis.document) || void 0 === c
              ? void 0
              : c.body,
            ...h
          } = o;
          return u
            ? b.createPortal(
                (0, y.createElement)(I.div, _extends({}, h, { ref: l })),
                u
              )
            : null;
        });
      var W = Object.prototype.hasOwnProperty;
      function dequal(o, l) {
        var c, u;
        if (o === l) return !0;
        if (o && l && (c = o.constructor) === l.constructor) {
          if (c === Date) return o.getTime() === l.getTime();
          if (c === RegExp) return o.toString() === l.toString();
          if (c === Array) {
            if ((u = o.length) === l.length)
              for (; u-- && dequal(o[u], l[u]); );
            return -1 === u;
          }
          if (!c || "object" == typeof o) {
            for (c in ((u = 0), o))
              if (
                (W.call(o, c) && ++u && !W.call(l, c)) ||
                !(c in l) ||
                !dequal(o[c], l[c])
              )
                return !1;
            return Object.keys(l).length === u;
          }
        }
        return o != o && l != l;
      }
      function shallow(o, l) {
        if (Object.is(o, l)) return !0;
        if (
          "object" != typeof o ||
          null === o ||
          "object" != typeof l ||
          null === l
        )
          return !1;
        let c = Object.keys(o);
        if (c.length !== Object.keys(l).length) return !1;
        for (let u = 0; u < c.length; u++)
          if (
            !Object.prototype.hasOwnProperty.call(l, c[u]) ||
            !Object.is(o[c[u]], l[c[u]])
          )
            return !1;
        return !0;
      }
      var Rule = function (o, l, c, u) {
        (this.name = o), (this.fn = l), (this.args = c), (this.modifiers = u);
      };
      function pickFn(o, l) {
        return void 0 === l && (l = "simple"), "object" == typeof o ? o[l] : o;
      }
      function testAux(o, l, c) {
        if (!o.length) return pickFn(l);
        var u = o.shift(),
          h = testAux(o, l, c);
        return u.perform(h, c);
      }
      (Rule.prototype._test = function (o) {
        var l = this.fn;
        try {
          testAux(this.modifiers.slice(), l, this)(o);
        } catch (o) {
          l = function () {
            return !1;
          };
        }
        try {
          return testAux(this.modifiers.slice(), l, this)(o);
        } catch (o) {
          return !1;
        }
      }),
        (Rule.prototype._check = function (o) {
          try {
            testAux(this.modifiers.slice(), this.fn, this)(o);
          } catch (o) {
            if (
              testAux(
                this.modifiers.slice(),
                function (o) {
                  return o;
                },
                this
              )(!1)
            )
              return;
          }
          if (!testAux(this.modifiers.slice(), this.fn, this)(o)) throw null;
        }),
        (Rule.prototype._testAsync = function (o) {
          var l = this;
          return new Promise(function (c, u) {
            (function testAsyncAux(o, l, c) {
              if (!o.length)
                return function (o) {
                  return Promise.resolve(pickFn(l, "async")(o));
                };
              var u = o.shift(),
                h = testAsyncAux(o, l, c);
              return u.performAsync(h, c);
            })(
              l.modifiers.slice(),
              l.fn,
              l
            )(o)
              .then(function (l) {
                l ? c(o) : u(null);
              })
              .catch(function (o) {
                return u(o);
              });
          });
        });
      var Modifier = function (o, l, c) {
          (this.name = o), (this.perform = l), (this.performAsync = c);
        },
        B = (function (o) {
          function ValidationError(l, c, u, h) {
            for (var g = [], _ = arguments.length - 4; _-- > 0; )
              g[_] = arguments[_ + 4];
            o.call(this, g),
              o.captureStackTrace && o.captureStackTrace(this, ValidationError),
              (this.rule = l),
              (this.value = c),
              (this.cause = u),
              (this.target = h);
          }
          return (
            o && (ValidationError.__proto__ = o),
            (ValidationError.prototype = Object.create(o && o.prototype)),
            (ValidationError.prototype.constructor = ValidationError),
            ValidationError
          );
        })(Error),
        Context = function (o, l) {
          void 0 === o && (o = []),
            void 0 === l && (l = []),
            (this.chain = o),
            (this.nextRuleModifiers = l);
        };
      (Context.prototype._applyRule = function (o, l) {
        var c = this;
        return function () {
          for (var u = [], h = arguments.length; h--; ) u[h] = arguments[h];
          return (
            c.chain.push(new Rule(l, o.apply(c, u), u, c.nextRuleModifiers)),
            (c.nextRuleModifiers = []),
            c
          );
        };
      }),
        (Context.prototype._applyModifier = function (o, l) {
          return (
            this.nextRuleModifiers.push(new Modifier(l, o.simple, o.async)),
            this
          );
        }),
        (Context.prototype._clone = function () {
          return new Context(
            this.chain.slice(),
            this.nextRuleModifiers.slice()
          );
        }),
        (Context.prototype.test = function (o) {
          return this.chain.every(function (l) {
            return l._test(o);
          });
        }),
        (Context.prototype.testAll = function (o) {
          var l = [];
          return (
            this.chain.forEach(function (c) {
              try {
                c._check(o);
              } catch (u) {
                l.push(new B(c, o, u));
              }
            }),
            l
          );
        }),
        (Context.prototype.check = function (o) {
          this.chain.forEach(function (l) {
            try {
              l._check(o);
            } catch (c) {
              throw new B(l, o, c);
            }
          });
        }),
        (Context.prototype.testAsync = function (o) {
          var l = this;
          return new Promise(function (c, u) {
            (function executeAsyncRules(o, l, c, u) {
              if (l.length) {
                var h = l.shift();
                h._testAsync(o).then(
                  function () {
                    executeAsyncRules(o, l, c, u);
                  },
                  function (l) {
                    u(new B(h, o, l));
                  }
                );
              } else c(o);
            })(o, l.chain.slice(), c, u);
          });
        });
      var consideredEmpty = function (o, l) {
        return (
          (!!l && "string" == typeof o && 0 === o.trim().length) || null == o
        );
      };
      function v8n() {
        return "undefined" != typeof Proxy
          ? (function proxyContext(o) {
              return new Proxy(o, {
                get: function (l, c) {
                  if (c in l) return l[c];
                  var u = proxyContext(o._clone());
                  return c in H
                    ? u._applyModifier(H[c], c)
                    : c in F
                    ? u._applyRule(F[c], c)
                    : c in U
                    ? u._applyRule(U[c], c)
                    : void 0;
                },
              });
            })(new Context())
          : (function proxylessContext(o) {
              var addRuleSet = function (o, l) {
                  return (
                    Object.keys(o).forEach(function (c) {
                      l[c] = function () {
                        for (var u = [], h = arguments.length; h--; )
                          u[h] = arguments[h];
                        return proxylessContext(l._clone())
                          ._applyRule(o[c], c)
                          .apply(void 0, u);
                      };
                    }),
                    l
                  );
                },
                l = addRuleSet(U, o),
                c = addRuleSet(F, l);
              return (
                Object.keys(H).forEach(function (o) {
                  Object.defineProperty(c, o, {
                    get: function () {
                      return proxylessContext(c._clone())._applyModifier(
                        H[o],
                        o
                      );
                    },
                  });
                }),
                c
              );
            })(new Context());
      }
      var F = {};
      (v8n.extend = function (o) {
        Object.assign(F, o);
      }),
        (v8n.clearCustomRules = function () {
          F = {};
        });
      var H = {
        not: {
          simple: function (o) {
            return function (l) {
              return !o(l);
            };
          },
          async: function (o) {
            return function (l) {
              return Promise.resolve(o(l))
                .then(function (o) {
                  return !o;
                })
                .catch(function () {
                  return !0;
                });
            };
          },
        },
        some: {
          simple: function (o) {
            return function (l) {
              return split(l).some(function (l) {
                try {
                  return o(l);
                } catch (o) {
                  return !1;
                }
              });
            };
          },
          async: function (o) {
            return function (l) {
              return Promise.all(
                split(l).map(function (l) {
                  try {
                    return o(l).catch(function () {
                      return !1;
                    });
                  } catch (o) {
                    return !1;
                  }
                })
              ).then(function (o) {
                return o.some(Boolean);
              });
            };
          },
        },
        every: {
          simple: function (o) {
            return function (l) {
              return !1 !== l && split(l).every(o);
            };
          },
          async: function (o) {
            return function (l) {
              return Promise.all(split(l).map(o)).then(function (o) {
                return o.every(Boolean);
              });
            };
          },
        },
        strict: {
          simple: function (o, l) {
            return function (c) {
              return isSchemaRule(l) && c && "object" == typeof c
                ? Object.keys(l.args[0]).length === Object.keys(c).length &&
                    o(c)
                : o(c);
            };
          },
          async: function (o, l) {
            return function (c) {
              return Promise.resolve(o(c))
                .then(function (o) {
                  return isSchemaRule(l) && c && "object" == typeof c
                    ? Object.keys(l.args[0]).length === Object.keys(c).length &&
                        o
                    : o;
                })
                .catch(function () {
                  return !1;
                });
            };
          },
        },
      };
      function isSchemaRule(o) {
        return (
          o &&
          "schema" === o.name &&
          o.args.length > 0 &&
          "object" == typeof o.args[0]
        );
      }
      function split(o) {
        return "string" == typeof o ? o.split("") : o;
      }
      var U = {
        equal: function (o) {
          return function (l) {
            return l == o;
          };
        },
        exact: function (o) {
          return function (l) {
            return l === o;
          };
        },
        number: function (o) {
          return (
            void 0 === o && (o = !0),
            function (l) {
              return "number" == typeof l && (o || isFinite(l));
            }
          );
        },
        integer: function () {
          return function (o) {
            return (
              Number.isInteger ||
              function (o) {
                return (
                  "number" == typeof o && isFinite(o) && Math.floor(o) === o
                );
              }
            )(o);
          };
        },
        numeric: function () {
          return function (o) {
            return !isNaN(parseFloat(o)) && isFinite(o);
          };
        },
        string: function () {
          return testType("string");
        },
        boolean: function () {
          return testType("boolean");
        },
        undefined: function () {
          return testType("undefined");
        },
        null: function () {
          return testType("null");
        },
        array: function () {
          return testType("array");
        },
        object: function () {
          return testType("object");
        },
        instanceOf: function (o) {
          return function (l) {
            return l instanceof o;
          };
        },
        pattern: function (o) {
          return function (l) {
            return o.test(l);
          };
        },
        lowercase: function () {
          return function (o) {
            return (
              "boolean" == typeof o ||
              (o === o.toLowerCase() && "" !== o.trim())
            );
          };
        },
        uppercase: function () {
          return function (o) {
            return o === o.toUpperCase() && "" !== o.trim();
          };
        },
        vowel: function () {
          return function (o) {
            return /^[aeiou]+$/i.test(o);
          };
        },
        consonant: function () {
          return function (o) {
            return /^(?=[^aeiou])([a-z]+)$/i.test(o);
          };
        },
        first: function (o) {
          return function (l) {
            return l[0] == o;
          };
        },
        last: function (o) {
          return function (l) {
            return l[l.length - 1] == o;
          };
        },
        empty: function () {
          return function (o) {
            return 0 === o.length;
          };
        },
        length: function (o, l) {
          return function (c) {
            return c.length >= o && c.length <= (l || o);
          };
        },
        minLength: function (o) {
          return function (l) {
            return l.length >= o;
          };
        },
        maxLength: function (o) {
          return function (l) {
            return l.length <= o;
          };
        },
        negative: function () {
          return function (o) {
            return o < 0;
          };
        },
        positive: function () {
          return function (o) {
            return o >= 0;
          };
        },
        between: function (o, l) {
          return function (c) {
            return c >= o && c <= l;
          };
        },
        range: function (o, l) {
          return function (c) {
            return c >= o && c <= l;
          };
        },
        lessThan: function (o) {
          return function (l) {
            return l < o;
          };
        },
        lessThanOrEqual: function (o) {
          return function (l) {
            return l <= o;
          };
        },
        greaterThan: function (o) {
          return function (l) {
            return l > o;
          };
        },
        greaterThanOrEqual: function (o) {
          return function (l) {
            return l >= o;
          };
        },
        even: function () {
          return function (o) {
            return o % 2 == 0;
          };
        },
        odd: function () {
          return function (o) {
            return o % 2 != 0;
          };
        },
        includes: function (o) {
          return function (l) {
            return ~l.indexOf(o);
          };
        },
        schema: function (o) {
          return {
            simple: function (l) {
              var c = [];
              if (
                (Object.keys(o).forEach(function (u) {
                  var h = o[u];
                  try {
                    h.check((l || {})[u]);
                  } catch (o) {
                    (o.target = u), c.push(o);
                  }
                }),
                c.length > 0)
              )
                throw c;
              return !0;
            },
            async: function (l) {
              var c = [];
              return Promise.all(
                Object.keys(o).map(function (u) {
                  return o[u].testAsync((l || {})[u]).catch(function (o) {
                    (o.target = u), c.push(o);
                  });
                })
              ).then(function () {
                if (c.length > 0) throw c;
                return !0;
              });
            },
          };
        },
        passesAnyOf: function () {
          for (var o = [], l = arguments.length; l--; ) o[l] = arguments[l];
          return function (l) {
            return o.some(function (o) {
              return o.test(l);
            });
          };
        },
        optional: function (o, l) {
          return (
            void 0 === l && (l = !1),
            {
              simple: function (c) {
                return consideredEmpty(c, l) || void 0 === o.check(c);
              },
              async: function (c) {
                return consideredEmpty(c, l) || o.testAsync(c);
              },
            }
          );
        },
      };
      function testType(o) {
        return function (l) {
          return (
            (Array.isArray(l) && "array" === o) ||
            (null === l && "null" === o) ||
            typeof l === o
          );
        };
      }
      var K = "colors",
        G = "sizes",
        Y = "space",
        q = {
          gap: Y,
          gridGap: Y,
          columnGap: Y,
          gridColumnGap: Y,
          rowGap: Y,
          gridRowGap: Y,
          inset: Y,
          insetBlock: Y,
          insetBlockEnd: Y,
          insetBlockStart: Y,
          insetInline: Y,
          insetInlineEnd: Y,
          insetInlineStart: Y,
          margin: Y,
          marginTop: Y,
          marginRight: Y,
          marginBottom: Y,
          marginLeft: Y,
          marginBlock: Y,
          marginBlockEnd: Y,
          marginBlockStart: Y,
          marginInline: Y,
          marginInlineEnd: Y,
          marginInlineStart: Y,
          padding: Y,
          paddingTop: Y,
          paddingRight: Y,
          paddingBottom: Y,
          paddingLeft: Y,
          paddingBlock: Y,
          paddingBlockEnd: Y,
          paddingBlockStart: Y,
          paddingInline: Y,
          paddingInlineEnd: Y,
          paddingInlineStart: Y,
          top: Y,
          right: Y,
          bottom: Y,
          left: Y,
          scrollMargin: Y,
          scrollMarginTop: Y,
          scrollMarginRight: Y,
          scrollMarginBottom: Y,
          scrollMarginLeft: Y,
          scrollMarginX: Y,
          scrollMarginY: Y,
          scrollMarginBlock: Y,
          scrollMarginBlockEnd: Y,
          scrollMarginBlockStart: Y,
          scrollMarginInline: Y,
          scrollMarginInlineEnd: Y,
          scrollMarginInlineStart: Y,
          scrollPadding: Y,
          scrollPaddingTop: Y,
          scrollPaddingRight: Y,
          scrollPaddingBottom: Y,
          scrollPaddingLeft: Y,
          scrollPaddingX: Y,
          scrollPaddingY: Y,
          scrollPaddingBlock: Y,
          scrollPaddingBlockEnd: Y,
          scrollPaddingBlockStart: Y,
          scrollPaddingInline: Y,
          scrollPaddingInlineEnd: Y,
          scrollPaddingInlineStart: Y,
          fontSize: "fontSizes",
          background: K,
          backgroundColor: K,
          backgroundImage: K,
          borderImage: K,
          border: K,
          borderBlock: K,
          borderBlockEnd: K,
          borderBlockStart: K,
          borderBottom: K,
          borderBottomColor: K,
          borderColor: K,
          borderInline: K,
          borderInlineEnd: K,
          borderInlineStart: K,
          borderLeft: K,
          borderLeftColor: K,
          borderRight: K,
          borderRightColor: K,
          borderTop: K,
          borderTopColor: K,
          caretColor: K,
          color: K,
          columnRuleColor: K,
          fill: K,
          outline: K,
          outlineColor: K,
          stroke: K,
          textDecorationColor: K,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: G,
          minBlockSize: G,
          maxBlockSize: G,
          inlineSize: G,
          minInlineSize: G,
          maxInlineSize: G,
          width: G,
          minWidth: G,
          maxWidth: G,
          height: G,
          minHeight: G,
          maxHeight: G,
          flexBasis: G,
          gridTemplateColumns: G,
          gridTemplateRows: G,
          borderWidth: "borderWidths",
          borderTopWidth: "borderWidths",
          borderRightWidth: "borderWidths",
          borderBottomWidth: "borderWidths",
          borderLeftWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderTopStyle: "borderStyles",
          borderRightStyle: "borderStyles",
          borderBottomStyle: "borderStyles",
          borderLeftStyle: "borderStyles",
          borderRadius: "radii",
          borderTopLeftRadius: "radii",
          borderTopRightRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          boxShadow: "shadows",
          textShadow: "shadows",
          transition: "transitions",
          zIndex: "zIndices",
        },
        i = (o, l) =>
          "function" == typeof l
            ? { "()": Function.prototype.toString.call(l) }
            : l,
        dist_o = () => {
          let o = Object.create(null);
          return (l, c, ...u) => {
            let h = JSON.stringify(l, i);
            return h in o ? o[h] : (o[h] = c(l, ...u));
          };
        },
        X = Symbol.for("sxs.internal"),
        s = (o, l) =>
          Object.defineProperties(o, Object.getOwnPropertyDescriptors(l)),
        dist_a = (o) => {
          for (let l in o) return !0;
          return !1;
        },
        { hasOwnProperty: Z } = Object.prototype,
        d = (o) =>
          o.includes("-")
            ? o
            : o.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase()),
        Q = /\s+(?![^()]*\))/,
        p = (o) => (l) =>
          o(...("string" == typeof l ? String(l).split(Q) : [l])),
        ee = {
          appearance: (o) => ({ WebkitAppearance: o, appearance: o }),
          backfaceVisibility: (o) => ({
            WebkitBackfaceVisibility: o,
            backfaceVisibility: o,
          }),
          backdropFilter: (o) => ({
            WebkitBackdropFilter: o,
            backdropFilter: o,
          }),
          backgroundClip: (o) => ({
            WebkitBackgroundClip: o,
            backgroundClip: o,
          }),
          boxDecorationBreak: (o) => ({
            WebkitBoxDecorationBreak: o,
            boxDecorationBreak: o,
          }),
          clipPath: (o) => ({ WebkitClipPath: o, clipPath: o }),
          content: (o) => ({
            content:
              o.includes('"') ||
              o.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                o
              )
                ? o
                : `"${o}"`,
          }),
          hyphens: (o) => ({ WebkitHyphens: o, hyphens: o }),
          maskImage: (o) => ({ WebkitMaskImage: o, maskImage: o }),
          maskSize: (o) => ({ WebkitMaskSize: o, maskSize: o }),
          tabSize: (o) => ({ MozTabSize: o, tabSize: o }),
          textSizeAdjust: (o) => ({
            WebkitTextSizeAdjust: o,
            textSizeAdjust: o,
          }),
          userSelect: (o) => ({ WebkitUserSelect: o, userSelect: o }),
          marginBlock: p((o, l) => ({
            marginBlockStart: o,
            marginBlockEnd: l || o,
          })),
          marginInline: p((o, l) => ({
            marginInlineStart: o,
            marginInlineEnd: l || o,
          })),
          maxSize: p((o, l) => ({ maxBlockSize: o, maxInlineSize: l || o })),
          minSize: p((o, l) => ({ minBlockSize: o, minInlineSize: l || o })),
          paddingBlock: p((o, l) => ({
            paddingBlockStart: o,
            paddingBlockEnd: l || o,
          })),
          paddingInline: p((o, l) => ({
            paddingInlineStart: o,
            paddingInlineEnd: l || o,
          })),
        },
        et = /([\d.]+)([^]*)/,
        f = (o, l) =>
          o.length
            ? o.reduce(
                (o, c) => (
                  o.push(
                    ...l.map((o) =>
                      o.includes("&")
                        ? o.replace(
                            /&/g,
                            /[ +>|~]/.test(c) && /&.*&/.test(o)
                              ? `:is(${c})`
                              : c
                          )
                        : c + " " + o
                    )
                  ),
                  o
                ),
                []
              )
            : l,
        m = (o, l) =>
          o in er && "string" == typeof l
            ? l.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (l, c, u, h) =>
                  c +
                  ("stretch" === u
                    ? `-moz-available${h};${d(o)}:${c}-webkit-fill-available`
                    : `-moz-fit-content${h};${d(o)}:${c}fit-content`) +
                  h
              )
            : String(l),
        er = {
          blockSize: 1,
          height: 1,
          inlineSize: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          width: 1,
        },
        S = (o) => (o ? o + "-" : ""),
        k = (o, l, c) =>
          o.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (o, u, h, g, _) =>
              ("$" == g) == !!h
                ? o
                : (u || "--" == g ? "calc(" : "") +
                  "var(--" +
                  ("$" === g
                    ? S(l) +
                      (_.includes("$") ? "" : S(c)) +
                      _.replace(/\$/g, "-")
                    : _) +
                  ")" +
                  (u || "--" == g ? "*" + (u || "") + (h || "1") + ")" : "")
          ),
        en = /\s*,\s*(?![^()]*\))/,
        eo = Object.prototype.toString,
        $ = (o, l, c, u, h) => {
          let g, _, b;
          let a = (o, l, c) => {
            let y, w;
            let p = (o) => {
              var T;
              for (y in o) {
                let A = 64 === y.charCodeAt(0),
                  I = A && Array.isArray(o[y]) ? o[y] : [o[y]];
                for (w of I) {
                  let o = /[A-Z]/.test((T = y))
                      ? T
                      : T.replace(/-[^]/g, (o) => o[1].toUpperCase()),
                    I =
                      "object" == typeof w &&
                      w &&
                      w.toString === eo &&
                      (!u.utils[o] || !l.length);
                  if (o in u.utils && !I) {
                    let l = u.utils[o];
                    if (l !== _) {
                      (_ = l), p(l(w)), (_ = null);
                      continue;
                    }
                  } else if (o in ee) {
                    let l = ee[o];
                    if (l !== b) {
                      (b = l), p(l(w)), (b = null);
                      continue;
                    }
                  }
                  if (
                    (A &&
                      (y = (
                        y.slice(1) in u.media
                          ? "@media " + u.media[y.slice(1)]
                          : y
                      ).replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (o, l, c, u, h, g) => {
                          let _ = et.test(l),
                            b = 0.0625 * (_ ? -1 : 1),
                            [y, w] = _ ? [u, l] : [l, u];
                          return (
                            "(" +
                            ("=" === c[0]
                              ? ""
                              : (">" === c[0]) === _
                              ? "max-"
                              : "min-") +
                            y +
                            ":" +
                            ("=" !== c[0] && 1 === c.length
                              ? w.replace(
                                  et,
                                  (o, l, u) =>
                                    Number(l) + b * (">" === c ? 1 : -1) + u
                                )
                              : w) +
                            (h
                              ? ") and (" +
                                (">" === h[0] ? "min-" : "max-") +
                                y +
                                ":" +
                                (1 === h.length
                                  ? g.replace(
                                      et,
                                      (o, l, c) =>
                                        Number(l) + b * (">" === h ? -1 : 1) + c
                                    )
                                  : g)
                              : "") +
                            ")"
                          );
                        }
                      )),
                    I)
                  ) {
                    let o = A ? c.concat(y) : [...c],
                      u = A ? [...l] : f(l, y.split(en));
                    void 0 !== g && h(x(...g)), (g = void 0), a(w, u, o);
                  } else
                    void 0 === g && (g = [[], l, c]),
                      (y =
                        A || 36 !== y.charCodeAt(0)
                          ? y
                          : `--${S(u.prefix)}${y
                              .slice(1)
                              .replace(/\$/g, "-")}`),
                      (w = I
                        ? w
                        : "number" == typeof w
                        ? w && o in ei
                          ? String(w) + "px"
                          : String(w)
                        : k(m(o, null == w ? "" : w), u.prefix, u.themeMap[o])),
                      g[0].push(`${A ? `${y} ` : `${d(y)}:`}${w}`);
                }
              }
            };
            p(o), void 0 !== g && h(x(...g)), (g = void 0);
          };
          a(o, l, c);
        },
        x = (o, l, c) =>
          `${c.map((o) => `${o}{`).join("")}${
            l.length ? `${l.join(",")}{` : ""
          }${o.join(";")}${l.length ? "}" : ""}${Array(
            c.length ? c.length + 1 : 0
          ).join("}")}`,
        ei = {
          animationDelay: 1,
          animationDuration: 1,
          backgroundSize: 1,
          blockSize: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockEndWidth: 1,
          borderBlockStart: 1,
          borderBlockStartWidth: 1,
          borderBlockWidth: 1,
          borderBottom: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderBottomWidth: 1,
          borderEndEndRadius: 1,
          borderEndStartRadius: 1,
          borderInlineEnd: 1,
          borderInlineEndWidth: 1,
          borderInlineStart: 1,
          borderInlineStartWidth: 1,
          borderInlineWidth: 1,
          borderLeft: 1,
          borderLeftWidth: 1,
          borderRadius: 1,
          borderRight: 1,
          borderRightWidth: 1,
          borderSpacing: 1,
          borderStartEndRadius: 1,
          borderStartStartRadius: 1,
          borderTop: 1,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          bottom: 1,
          columnGap: 1,
          columnRule: 1,
          columnRuleWidth: 1,
          columnWidth: 1,
          containIntrinsicSize: 1,
          flexBasis: 1,
          fontSize: 1,
          gap: 1,
          gridAutoColumns: 1,
          gridAutoRows: 1,
          gridTemplateColumns: 1,
          gridTemplateRows: 1,
          height: 1,
          inlineSize: 1,
          inset: 1,
          insetBlock: 1,
          insetBlockEnd: 1,
          insetBlockStart: 1,
          insetInline: 1,
          insetInlineEnd: 1,
          insetInlineStart: 1,
          left: 1,
          letterSpacing: 1,
          margin: 1,
          marginBlock: 1,
          marginBlockEnd: 1,
          marginBlockStart: 1,
          marginBottom: 1,
          marginInline: 1,
          marginInlineEnd: 1,
          marginInlineStart: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          offsetDistance: 1,
          offsetRotate: 1,
          outline: 1,
          outlineOffset: 1,
          outlineWidth: 1,
          overflowClipMargin: 1,
          padding: 1,
          paddingBlock: 1,
          paddingBlockEnd: 1,
          paddingBlockStart: 1,
          paddingBottom: 1,
          paddingInline: 1,
          paddingInlineEnd: 1,
          paddingInlineStart: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          perspective: 1,
          right: 1,
          rowGap: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginBlockEnd: 1,
          scrollMarginBlockStart: 1,
          scrollMarginBottom: 1,
          scrollMarginInline: 1,
          scrollMarginInlineEnd: 1,
          scrollMarginInlineStart: 1,
          scrollMarginLeft: 1,
          scrollMarginRight: 1,
          scrollMarginTop: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingBlockEnd: 1,
          scrollPaddingBlockStart: 1,
          scrollPaddingBottom: 1,
          scrollPaddingInline: 1,
          scrollPaddingInlineEnd: 1,
          scrollPaddingInlineStart: 1,
          scrollPaddingLeft: 1,
          scrollPaddingRight: 1,
          scrollPaddingTop: 1,
          shapeMargin: 1,
          textDecoration: 1,
          textDecorationThickness: 1,
          textIndent: 1,
          textUnderlineOffset: 1,
          top: 1,
          transitionDelay: 1,
          transitionDuration: 1,
          verticalAlign: 1,
          width: 1,
          wordSpacing: 1,
        },
        R = (o) => String.fromCharCode(o + (o > 25 ? 39 : 97)),
        z = (o) =>
          ((o) => {
            let l,
              c = "";
            for (l = Math.abs(o); l > 52; l = (l / 52) | 0) c = R(l % 52) + c;
            return R(l % 52) + c;
          })(
            ((o, l) => {
              let c = l.length;
              for (; c; ) o = (33 * o) ^ l.charCodeAt(--c);
              return o;
            })(5381, JSON.stringify(o)) >>> 0
          ),
        ea = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        j = (o) => {
          if (o.href && !o.href.startsWith(location.origin)) return !1;
          try {
            return !!o.cssRules;
          } catch (o) {
            return !1;
          }
        },
        E = (o) => {
          let l;
          let r = () => {
              let { cssRules: o } = l.sheet;
              return [].map
                .call(o, (c, u) => {
                  let { cssText: h } = c,
                    g = "";
                  if (h.startsWith("--sxs")) return "";
                  if (o[u - 1] && (g = o[u - 1].cssText).startsWith("--sxs")) {
                    if (!c.cssRules.length) return "";
                    for (let o in l.rules)
                      if (l.rules[o].group === c)
                        return `--sxs{--sxs:${[...l.rules[o].cache].join(
                          " "
                        )}}${h}`;
                    return c.cssRules.length ? `${g}${h}` : "";
                  }
                  return h;
                })
                .join("");
            },
            n = () => {
              if (l) {
                let { rules: o, sheet: c } = l;
                if (!c.deleteRule) {
                  for (; 3 === Object(Object(c.cssRules)[0]).type; )
                    c.cssRules.splice(0, 1);
                  c.cssRules = [];
                }
                for (let l in o) delete o[l];
              }
              let c = Object(o).styleSheets || [];
              for (let o of c)
                if (j(o)) {
                  for (let c = 0, u = o.cssRules; u[c]; ++c) {
                    let h = Object(u[c]);
                    if (1 !== h.type) continue;
                    let g = Object(u[c + 1]);
                    if (4 !== g.type) continue;
                    ++c;
                    let { cssText: _ } = h;
                    if (!_.startsWith("--sxs")) continue;
                    let b = _.slice(14, -3).trim().split(/\s+/),
                      y = ea[b[0]];
                    y &&
                      (l ||
                        (l = { sheet: o, reset: n, rules: {}, toString: r }),
                      (l.rules[y] = { group: g, index: c, cache: new Set(b) }));
                  }
                  if (l) break;
                }
              if (!l) {
                let i = (o, l) => ({
                  type: l,
                  cssRules: [],
                  insertRule(o, l) {
                    this.cssRules.splice(
                      l,
                      0,
                      i(
                        o,
                        { import: 3, undefined: 1 }[
                          (o.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                        ] || 4
                      )
                    );
                  },
                  get cssText() {
                    return "@media{}" === o
                      ? `@media{${[].map
                          .call(this.cssRules, (o) => o.cssText)
                          .join("")}}`
                      : o;
                  },
                });
                l = {
                  sheet: o
                    ? (o.head || o).appendChild(document.createElement("style"))
                        .sheet
                    : i("", "text/css"),
                  rules: {},
                  reset: n,
                  toString: r,
                };
              }
              let { sheet: u, rules: h } = l;
              for (let o = ea.length - 1; o >= 0; --o) {
                let l = ea[o];
                if (!h[l]) {
                  let c = ea[o + 1],
                    g = h[c] ? h[c].index : u.cssRules.length;
                  u.insertRule("@media{}", g),
                    u.insertRule(`--sxs{--sxs:${o}}`, g),
                    (h[l] = {
                      group: u.cssRules[g + 1],
                      index: g,
                      cache: new Set([o]),
                    });
                }
                v(h[l]);
              }
            };
          return n(), l;
        },
        v = (o) => {
          let l = o.group,
            c = l.cssRules.length;
          o.apply = (o) => {
            try {
              l.insertRule(o, c), ++c;
            } catch (o) {}
          };
        },
        el = Symbol(),
        es = dist_o(),
        M = (o, l) =>
          es(o, () => (...c) => {
            let u = { type: null, composers: new Set() };
            for (let l of c)
              if (null != l) {
                if (l[X])
                  for (let o of (null == u.type && (u.type = l[X].type),
                  l[X].composers))
                    u.composers.add(o);
                else
                  l.constructor !== Object || l.$$typeof
                    ? null == u.type && (u.type = l)
                    : u.composers.add(C(l, o));
              }
            return (
              null == u.type && (u.type = "span"),
              u.composers.size || u.composers.add(["PJLV", {}, [], [], {}, []]),
              P(o, u, l)
            );
          }),
        C = (
          { variants: o, compoundVariants: l, defaultVariants: c, ...u },
          h
        ) => {
          let g = `${S(h.prefix)}c-${z(u)}`,
            _ = [],
            b = [],
            y = Object.create(null),
            w = [];
          for (let o in c) y[o] = String(c[o]);
          if ("object" == typeof o && o)
            for (let l in o) {
              Z.call(y, l) || (y[l] = "undefined");
              let c = o[l];
              for (let o in c) {
                let u = { [l]: String(o) };
                "undefined" === String(o) && w.push(l);
                let h = c[o],
                  g = [u, h, !dist_a(h)];
                _.push(g);
              }
            }
          if ("object" == typeof l && l)
            for (let o of l) {
              let { css: l, ...c } = o;
              for (let o in ((l = ("object" == typeof l && l) || {}), c))
                c[o] = String(c[o]);
              let u = [c, l, !dist_a(l)];
              b.push(u);
            }
          return [g, u, _, b, y, w];
        },
        P = (o, l, c) => {
          let [u, h, g, _] = L(l.composers),
            b =
              "function" == typeof l.type || l.type.$$typeof
                ? ((o) => {
                    function t() {
                      for (let l = 0; l < t[el].length; l++) {
                        let [c, u] = t[el][l];
                        o.rules[c].apply(u);
                      }
                      return (t[el] = []), null;
                    }
                    return (
                      (t[el] = []),
                      (t.rules = {}),
                      ea.forEach(
                        (o) =>
                          (t.rules[o] = { apply: (l) => t[el].push([o, l]) })
                      ),
                      t
                    );
                  })(c)
                : null,
            y = (b || c).rules,
            w = `.${u}${
              h.length > 1 ? `:where(.${h.slice(1).join(".")})` : ""
            }`,
            p = (T) => {
              T = ("object" == typeof T && T) || ec;
              let { css: A, ...I } = T,
                N = {};
              for (let o in g)
                if ((delete I[o], o in T)) {
                  let l = T[o];
                  "object" == typeof l && l
                    ? (N[o] = { "@initial": g[o], ...l })
                    : ((l = String(l)),
                      (N[o] = "undefined" !== l || _.has(o) ? l : g[o]));
                } else N[o] = g[o];
              let W = new Set([...h]);
              for (let [u, h, g, _] of l.composers) {
                c.rules.styled.cache.has(u) ||
                  (c.rules.styled.cache.add(u),
                  $(h, [`.${u}`], [], o, (o) => {
                    y.styled.apply(o);
                  }));
                let l = O(g, N, o.media),
                  b = O(_, N, o.media, !0);
                for (let h of l)
                  if (void 0 !== h)
                    for (let [l, g, _] of h) {
                      let h = `${u}-${z(g)}-${l}`;
                      W.add(h);
                      let b = (_ ? c.rules.resonevar : c.rules.onevar).cache,
                        w = _ ? y.resonevar : y.onevar;
                      b.has(h) ||
                        (b.add(h),
                        $(g, [`.${h}`], [], o, (o) => {
                          w.apply(o);
                        }));
                    }
                for (let l of b)
                  if (void 0 !== l)
                    for (let [h, g] of l) {
                      let l = `${u}-${z(g)}-${h}`;
                      W.add(l),
                        c.rules.allvar.cache.has(l) ||
                          (c.rules.allvar.cache.add(l),
                          $(g, [`.${l}`], [], o, (o) => {
                            y.allvar.apply(o);
                          }));
                    }
              }
              if ("object" == typeof A && A) {
                let l = `${u}-i${z(A)}-css`;
                W.add(l),
                  c.rules.inline.cache.has(l) ||
                    (c.rules.inline.cache.add(l),
                    $(A, [`.${l}`], [], o, (o) => {
                      y.inline.apply(o);
                    }));
              }
              for (let o of String(T.className || "")
                .trim()
                .split(/\s+/))
                o && W.add(o);
              let B = (I.className = [...W].join(" "));
              return {
                type: l.type,
                className: B,
                selector: w,
                props: I,
                toString: () => B,
                deferredInjector: b,
              };
            };
          return s(p, {
            className: u,
            selector: w,
            [X]: l,
            toString: () => (c.rules.styled.cache.has(u) || p(), u),
          });
        },
        L = (o) => {
          let l = "",
            c = [],
            u = {},
            h = [];
          for (let [g, , , , _, b] of o)
            for (let o in ("" === l && (l = g), c.push(g), h.push(...b), _)) {
              let l = _[o];
              (void 0 === u[o] || "undefined" !== l || b.includes(l)) &&
                (u[o] = l);
            }
          return [l, c, u, new Set(h)];
        },
        O = (o, l, c, u) => {
          let h = [];
          e: for (let [g, _, b] of o) {
            if (b) continue;
            let o,
              y = 0,
              w = !1;
            for (o in g) {
              let u = g[o],
                h = l[o];
              if (h !== u) {
                if ("object" != typeof h || !h) continue e;
                {
                  let o,
                    l,
                    g = 0;
                  for (let _ in h) {
                    if (u === String(h[_])) {
                      if ("@initial" !== _) {
                        let o = _.slice(1);
                        (l = l || []).push(
                          o in c ? c[o] : _.replace(/^@media ?/, "")
                        ),
                          (w = !0);
                      }
                      (y += g), (o = !0);
                    }
                    ++g;
                  }
                  if (
                    (l && l.length && (_ = { ["@media " + l.join(", ")]: _ }),
                    !o)
                  )
                    continue e;
                }
              }
            }
            (h[y] = h[y] || []).push([u ? "cv" : `${o}-${g[o]}`, _, w]);
          }
          return h;
        },
        ec = {},
        eu = dist_o(),
        D = (o, l) =>
          eu(o, () => (...c) => {
            let n = () => {
              for (let u of c) {
                let c = z((u = ("object" == typeof u && u) || {}));
                if (!l.rules.global.cache.has(c)) {
                  if ((l.rules.global.cache.add(c), "@import" in u)) {
                    let o =
                      [].indexOf.call(l.sheet.cssRules, l.rules.themed.group) -
                      1;
                    for (let c of [].concat(u["@import"]))
                      (c = c.includes('"') || c.includes("'") ? c : `"${c}"`),
                        l.sheet.insertRule(`@import ${c};`, o++);
                    delete u["@import"];
                  }
                  $(u, [], [], o, (o) => {
                    l.rules.global.apply(o);
                  });
                }
              }
              return "";
            };
            return s(n, { toString: n });
          }),
        ed = dist_o(),
        V = (o, l) =>
          ed(o, () => (c) => {
            let u = `${S(o.prefix)}k-${z(c)}`,
              i = () => {
                if (!l.rules.global.cache.has(u)) {
                  l.rules.global.cache.add(u);
                  let h = [];
                  $(c, [], [], o, (o) => h.push(o));
                  let g = `@keyframes ${u}{${h.join("")}}`;
                  l.rules.global.apply(g);
                }
                return u;
              };
            return s(i, {
              get name() {
                return i();
              },
              toString: i,
            });
          }),
        ef = class {
          constructor(o, l, c, u) {
            (this.token = null == o ? "" : String(o)),
              (this.value = null == l ? "" : String(l)),
              (this.scale = null == c ? "" : String(c)),
              (this.prefix = null == u ? "" : String(u));
          }
          get computedValue() {
            return "var(" + this.variable + ")";
          }
          get variable() {
            return "--" + S(this.prefix) + S(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        ep = dist_o(),
        J = (o, l) =>
          ep(o, () => (c, u) => {
            u = ("object" == typeof c && c) || Object(u);
            let h = `.${(c =
                (c = "string" == typeof c ? c : "") ||
                `${S(o.prefix)}t-${z(u)}`)}`,
              g = {},
              _ = [];
            for (let l in u)
              for (let c in ((g[l] = {}), u[l])) {
                let h = `--${S(o.prefix)}${l}-${c}`,
                  b = k(String(u[l][c]), o.prefix, l);
                (g[l][c] = new ef(c, b, l, o.prefix)), _.push(`${h}:${b}`);
              }
            let s = () => {
              if (_.length && !l.rules.themed.cache.has(c)) {
                l.rules.themed.cache.add(c);
                let h = `${u === o.theme ? ":root," : ""}.${c}{${_.join(";")}}`;
                l.rules.themed.apply(h);
              }
              return c;
            };
            return {
              ...g,
              get className() {
                return s();
              },
              selector: h,
              toString: s,
            };
          }),
        eh = dist_o(),
        eg = dist_o();
      let em = {
        toVector: (o, l) => (
          void 0 === o && (o = l), Array.isArray(o) ? o : [o, o]
        ),
        add: (o, l) => [o[0] + l[0], o[1] + l[1]],
        sub: (o, l) => [o[0] - l[0], o[1] - l[1]],
        addTo(o, l) {
          (o[0] += l[0]), (o[1] += l[1]);
        },
        subTo(o, l) {
          (o[0] -= l[0]), (o[1] -= l[1]);
        },
      };
      function rubberband(o, l, c) {
        return 0 === l || Math.abs(l) === 1 / 0
          ? Math.pow(o, 5 * c)
          : (o * l * c) / (l + c * o);
      }
      function rubberbandIfOutOfBounds(o, l, c, u = 0.15) {
        return 0 === u
          ? Math.max(l, Math.min(o, c))
          : o < l
          ? -rubberband(l - o, c - l, u) + l
          : o > c
          ? +rubberband(o - c, c - l, u) + c
          : o;
      }
      function _defineProperty(o, l, c) {
        var u;
        return (
          (l =
            "symbol" ==
            typeof (u = (function (o, l) {
              if ("object" != typeof o || null === o) return o;
              var c = o[Symbol.toPrimitive];
              if (void 0 !== c) {
                var u = c.call(o, l || "default");
                if ("object" != typeof u) return u;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === l ? String : Number)(o);
            })(l, "string"))
              ? u
              : String(u)) in o
            ? Object.defineProperty(o, l, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[l] = c),
          o
        );
      }
      function ownKeys(o, l) {
        var c = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(o);
          l &&
            (u = u.filter(function (l) {
              return Object.getOwnPropertyDescriptor(o, l).enumerable;
            })),
            c.push.apply(c, u);
        }
        return c;
      }
      function _objectSpread2(o) {
        for (var l = 1; l < arguments.length; l++) {
          var c = null != arguments[l] ? arguments[l] : {};
          l % 2
            ? ownKeys(Object(c), !0).forEach(function (l) {
                _defineProperty(o, l, c[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
            : ownKeys(Object(c)).forEach(function (l) {
                Object.defineProperty(
                  o,
                  l,
                  Object.getOwnPropertyDescriptor(c, l)
                );
              });
        }
        return o;
      }
      let e_ = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function capitalize(o) {
        return o ? o[0].toUpperCase() + o.slice(1) : "";
      }
      let eb = ["enter", "leave"],
        ev = ["gotpointercapture", "lostpointercapture"];
      function isTouch(o) {
        return "touches" in o;
      }
      function getPointerType(o) {
        return isTouch(o)
          ? "touch"
          : "pointerType" in o
          ? o.pointerType
          : "mouse";
      }
      function getValueEvent(o) {
        return isTouch(o)
          ? ("touchend" === o.type || "touchcancel" === o.type
              ? o.changedTouches
              : o.targetTouches)[0]
          : o;
      }
      function pointerId(o) {
        let l = getValueEvent(o);
        return isTouch(o) ? l.identifier : l.pointerId;
      }
      function pointerValues(o) {
        let l = getValueEvent(o);
        return [l.clientX, l.clientY];
      }
      function call(o, ...l) {
        return "function" == typeof o ? o(...l) : o;
      }
      function noop() {}
      function assignDefault(o, l) {
        return Object.assign({}, l, o || {});
      }
      let Engine = class Engine {
        constructor(o, l, c) {
          (this.ctrl = o),
            (this.args = l),
            (this.key = c),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(o) {
          this.ctrl.state[this.key] = o;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          let { state: o, shared: l, ingKey: c, args: u } = this;
          (l[c] = o._active = o.active = o._blocked = o._force = !1),
            (o._step = [!1, !1]),
            (o.intentional = !1),
            (o._movement = [0, 0]),
            (o._distance = [0, 0]),
            (o._direction = [0, 0]),
            (o._delta = [0, 0]),
            (o._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (o.args = u),
            (o.axis = void 0),
            (o.memo = void 0),
            (o.elapsedTime = o.timeDelta = 0),
            (o.direction = [0, 0]),
            (o.distance = [0, 0]),
            (o.overflow = [0, 0]),
            (o._movementBound = [!1, !1]),
            (o.velocity = [0, 0]),
            (o.movement = [0, 0]),
            (o.delta = [0, 0]),
            (o.timeStamp = 0);
        }
        start(o) {
          let l = this.state,
            c = this.config;
          l._active ||
            (this.reset(),
            this.computeInitial(),
            (l._active = !0),
            (l.target = o.target),
            (l.currentTarget = o.currentTarget),
            (l.lastOffset = c.from ? call(c.from, l) : l.offset),
            (l.offset = l.lastOffset),
            (l.startTime = l.timeStamp = o.timeStamp));
        }
        computeValues(o) {
          let l = this.state;
          (l._values = o), (l.values = this.config.transform(o));
        }
        computeInitial() {
          let o = this.state;
          (o._initial = o._values), (o.initial = o.values);
        }
        compute(o) {
          let { state: l, config: c, shared: u } = this;
          l.args = this.args;
          let h = 0;
          if (
            (o &&
              ((l.event = o),
              c.preventDefault && o.cancelable && l.event.preventDefault(),
              (l.type = o.type),
              (u.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (u.locked = !!document.pointerLockElement),
              Object.assign(
                u,
                (function (o) {
                  let l = {};
                  if (
                    ("buttons" in o && (l.buttons = o.buttons), "shiftKey" in o)
                  ) {
                    let { shiftKey: c, altKey: u, metaKey: h, ctrlKey: g } = o;
                    Object.assign(l, {
                      shiftKey: c,
                      altKey: u,
                      metaKey: h,
                      ctrlKey: g,
                    });
                  }
                  return l;
                })(o)
              ),
              (u.down = u.pressed = u.buttons % 2 == 1 || u.touches > 0),
              (h = o.timeStamp - l.timeStamp),
              (l.timeStamp = o.timeStamp),
              (l.elapsedTime = l.timeStamp - l.startTime)),
            l._active)
          ) {
            let o = l._delta.map(Math.abs);
            em.addTo(l._distance, o);
          }
          this.axisIntent && this.axisIntent(o);
          let [g, _] = l._movement,
            [b, y] = c.threshold,
            { _step: w, values: T } = l;
          if (
            (c.hasCustomTransform
              ? (!1 === w[0] && (w[0] = Math.abs(g) >= b && T[0]),
                !1 === w[1] && (w[1] = Math.abs(_) >= y && T[1]))
              : (!1 === w[0] && (w[0] = Math.abs(g) >= b && Math.sign(g) * b),
                !1 === w[1] && (w[1] = Math.abs(_) >= y && Math.sign(_) * y)),
            (l.intentional = !1 !== w[0] || !1 !== w[1]),
            !l.intentional)
          )
            return;
          let A = [0, 0];
          if (c.hasCustomTransform) {
            let [o, l] = T;
            (A[0] = !1 !== w[0] ? o - w[0] : 0),
              (A[1] = !1 !== w[1] ? l - w[1] : 0);
          } else
            (A[0] = !1 !== w[0] ? g - w[0] : 0),
              (A[1] = !1 !== w[1] ? _ - w[1] : 0);
          this.restrictToAxis && !l._blocked && this.restrictToAxis(A);
          let I = l.offset,
            N = (l._active && !l._blocked) || l.active;
          N &&
            ((l.first = l._active && !l.active),
            (l.last = !l._active && l.active),
            (l.active = u[this.ingKey] = l._active),
            o &&
              (l.first &&
                ("bounds" in c && (l._bounds = call(c.bounds, l)),
                this.setup && this.setup()),
              (l.movement = A),
              this.computeOffset()));
          let [W, B] = l.offset,
            [[F, H], [U, K]] = l._bounds;
          (l.overflow = [
            W < F ? -1 : W > H ? 1 : 0,
            B < U ? -1 : B > K ? 1 : 0,
          ]),
            (l._movementBound[0] =
              !!l.overflow[0] &&
              (!1 === l._movementBound[0]
                ? l._movement[0]
                : l._movementBound[0])),
            (l._movementBound[1] =
              !!l.overflow[1] &&
              (!1 === l._movementBound[1]
                ? l._movement[1]
                : l._movementBound[1]));
          let G = (l._active && c.rubberband) || [0, 0];
          if (
            ((l.offset = (function (o, [l, c], [u, h]) {
              let [[g, _], [b, y]] = o;
              return [
                rubberbandIfOutOfBounds(l, g, _, u),
                rubberbandIfOutOfBounds(c, b, y, h),
              ];
            })(l._bounds, l.offset, G)),
            (l.delta = em.sub(l.offset, I)),
            this.computeMovement(),
            N && (!l.last || h > 32))
          ) {
            l.delta = em.sub(l.offset, I);
            let o = l.delta.map(Math.abs);
            em.addTo(l.distance, o),
              (l.direction = l.delta.map(Math.sign)),
              (l._direction = l._delta.map(Math.sign)),
              !l.first &&
                h > 0 &&
                ((l.velocity = [o[0] / h, o[1] / h]), (l.timeDelta = h));
          }
        }
        emit() {
          let o = this.state,
            l = this.shared,
            c = this.config;
          if (
            (o._active || this.clean(),
            (o._blocked || !o.intentional) && !o._force && !c.triggerAllEvents)
          )
            return;
          let u = this.handler(
            _objectSpread2(
              _objectSpread2(_objectSpread2({}, l), o),
              {},
              { [this.aliasKey]: o.values }
            )
          );
          void 0 !== u && (o.memo = u);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      };
      let CoordinatesEngine = class CoordinatesEngine extends Engine {
        constructor(...o) {
          super(...o), _defineProperty(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = em.add(
            this.state.lastOffset,
            this.state.movement
          );
        }
        computeMovement() {
          this.state.movement = em.sub(
            this.state.offset,
            this.state.lastOffset
          );
        }
        axisIntent(o) {
          let l = this.state,
            c = this.config;
          if (!l.axis && o) {
            let u =
              "object" == typeof c.axisThreshold
                ? c.axisThreshold[getPointerType(o)]
                : c.axisThreshold;
            l.axis = (function ([o, l], c) {
              let u = Math.abs(o),
                h = Math.abs(l);
              return u > h && u > c ? "x" : h > u && h > c ? "y" : void 0;
            })(l._movement, u);
          }
          l._blocked =
            ((c.lockDirection || !!c.axis) && !l.axis) ||
            (!!c.axis && c.axis !== l.axis);
        }
        restrictToAxis(o) {
          if (this.config.axis || this.config.lockDirection)
            switch (this.state.axis) {
              case "x":
                o[1] = 0;
                break;
              case "y":
                o[0] = 0;
            }
        }
      };
      let identity = (o) => o,
        ey = {
          enabled: (o = !0) => o,
          eventOptions: (o, l, c) =>
            _objectSpread2(_objectSpread2({}, c.shared.eventOptions), o),
          preventDefault: (o = !1) => o,
          triggerAllEvents: (o = !1) => o,
          rubberband(o = 0) {
            switch (o) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return em.toVector(o);
            }
          },
          from: (o) =>
            "function" == typeof o ? o : null != o ? em.toVector(o) : void 0,
          transform(o, l, c) {
            let u = o || c.shared.transform;
            return (this.hasCustomTransform = !!u), u || identity;
          },
          threshold: (o) => em.toVector(o, 0),
        },
        ew = 0,
        ex = _objectSpread2(
          _objectSpread2({}, ey),
          {},
          {
            axis(o, l, { axis: c }) {
              if (((this.lockDirection = "lock" === c), !this.lockDirection))
                return c;
            },
            axisThreshold: (o = ew) => o,
            bounds(o = {}) {
              if ("function" == typeof o) return (l) => ex.bounds(o(l));
              if ("current" in o) return () => o.current;
              if ("function" == typeof HTMLElement && o instanceof HTMLElement)
                return o;
              let {
                left: l = -1 / 0,
                right: c = 1 / 0,
                top: u = -1 / 0,
                bottom: h = 1 / 0,
              } = o;
              return [
                [l, c],
                [u, h],
              ];
            },
          }
        ),
        eE = {
          ArrowRight: (o, l = 1) => [o * l, 0],
          ArrowLeft: (o, l = 1) => [-1 * o * l, 0],
          ArrowUp: (o, l = 1) => [0, -1 * o * l],
          ArrowDown: (o, l = 1) => [0, o * l],
        },
        eS =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement;
      function supportsTouchEvents() {
        return eS && "ontouchstart" in window;
      }
      let e$ = {
          isBrowser: eS,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (o) {
              return !1;
            }
          })(),
          touch: supportsTouchEvents(),
          touchscreen:
            supportsTouchEvents() ||
            (eS && window.navigator.maxTouchPoints > 1),
          pointer: eS && "onpointerdown" in window,
          pointerLock: eS && "exitPointerLock" in window.document,
        },
        ek = 10,
        eC = { mouse: 0, touch: 0, pen: 8 },
        eO = _objectSpread2(
          _objectSpread2({}, ex),
          {},
          {
            device(
              o,
              l,
              { pointer: { touch: c = !1, lock: u = !1, mouse: h = !1 } = {} }
            ) {
              return ((this.pointerLock = u && e$.pointerLock), e$.touch && c)
                ? "touch"
                : this.pointerLock
                ? "mouse"
                : e$.pointer && !h
                ? "pointer"
                : e$.touch
                ? "touch"
                : "mouse";
            },
            preventScrollAxis(o, l, { preventScroll: c }) {
              if (
                ((this.preventScrollDelay =
                  "number" == typeof c
                    ? c
                    : c || (void 0 === c && o)
                    ? 250
                    : void 0),
                e$.touchscreen && !1 !== c)
              )
                return o || (void 0 !== c ? "y" : void 0);
            },
            pointerCapture(
              o,
              l,
              {
                pointer: { capture: c = !0, buttons: u = 1, keys: h = !0 } = {},
              }
            ) {
              return (
                (this.pointerButtons = u),
                (this.keys = h),
                !this.pointerLock && "pointer" === this.device && c
              );
            },
            threshold(
              o,
              l,
              { filterTaps: c = !1, tapsThreshold: u = 3, axis: h }
            ) {
              let g = em.toVector(o, c ? u : h ? 1 : 0);
              return (this.filterTaps = c), (this.tapsThreshold = u), g;
            },
            swipe({
              velocity: o = 0.5,
              distance: l = 50,
              duration: c = 250,
            } = {}) {
              return {
                velocity: this.transform(em.toVector(o)),
                distance: this.transform(em.toVector(l)),
                duration: c,
              };
            },
            delay(o = 0) {
              switch (o) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return o;
              }
            },
            axisThreshold: (o) =>
              o ? _objectSpread2(_objectSpread2({}, eC), o) : eC,
            keyboardDisplacement: (o = ek) => o,
          }
        );
      _objectSpread2(
        _objectSpread2({}, ey),
        {},
        {
          device(o, l, { shared: c, pointer: { touch: u = !1 } = {} }) {
            if (c.target && !e$.touch && e$.gesture) return "gesture";
            if (e$.touch && u) return "touch";
            if (e$.touchscreen) {
              if (e$.pointer) return "pointer";
              if (e$.touch) return "touch";
            }
          },
          bounds(o, l, { scaleBounds: c = {}, angleBounds: u = {} }) {
            let _scaleBounds = (o) => {
                let l = assignDefault(call(c, o), { min: -1 / 0, max: 1 / 0 });
                return [l.min, l.max];
              },
              _angleBounds = (o) => {
                let l = assignDefault(call(u, o), { min: -1 / 0, max: 1 / 0 });
                return [l.min, l.max];
              };
            return "function" != typeof c && "function" != typeof u
              ? [_scaleBounds(), _angleBounds()]
              : (o) => [_scaleBounds(o), _angleBounds(o)];
          },
          threshold(o, l, c) {
            this.lockDirection = "lock" === c.axis;
            let u = em.toVector(o, this.lockDirection ? [0.1, 3] : 0);
            return u;
          },
          modifierKey: (o) => (void 0 === o ? "ctrlKey" : o),
          pinchOnWheel: (o = !0) => o,
        }
      ),
        _objectSpread2(
          _objectSpread2({}, ex),
          {},
          { mouseOnly: (o = !0) => o }
        ),
        _objectSpread2(
          _objectSpread2({}, ex),
          {},
          { mouseOnly: (o = !0) => o }
        );
      let ej = new Map(),
        eT = new Map(),
        eR = {
          key: "drag",
          engine: class extends CoordinatesEngine {
            constructor(...o) {
              super(...o), _defineProperty(this, "ingKey", "dragging");
            }
            reset() {
              super.reset();
              let o = this.state;
              (o._pointerId = void 0),
                (o._pointerActive = !1),
                (o._keyboardActive = !1),
                (o._preventScroll = !1),
                (o._delayed = !1),
                (o.swipe = [0, 0]),
                (o.tap = !1),
                (o.canceled = !1),
                (o.cancel = this.cancel.bind(this));
            }
            setup() {
              let o = this.state;
              if (o._bounds instanceof HTMLElement) {
                let l = o._bounds.getBoundingClientRect(),
                  c = o.currentTarget.getBoundingClientRect(),
                  u = {
                    left: l.left - c.left + o.offset[0],
                    right: l.right - c.right + o.offset[0],
                    top: l.top - c.top + o.offset[1],
                    bottom: l.bottom - c.bottom + o.offset[1],
                  };
                o._bounds = ex.bounds(u);
              }
            }
            cancel() {
              let o = this.state;
              o.canceled ||
                ((o.canceled = !0),
                (o._active = !1),
                setTimeout(() => {
                  this.compute(), this.emit();
                }, 0));
            }
            setActive() {
              this.state._active =
                this.state._pointerActive || this.state._keyboardActive;
            }
            clean() {
              this.pointerClean(),
                (this.state._pointerActive = !1),
                (this.state._keyboardActive = !1),
                super.clean();
            }
            pointerDown(o) {
              let l = this.config,
                c = this.state;
              if (
                null != o.buttons &&
                (Array.isArray(l.pointerButtons)
                  ? !l.pointerButtons.includes(o.buttons)
                  : -1 !== l.pointerButtons && l.pointerButtons !== o.buttons)
              )
                return;
              let u = this.ctrl.setEventIds(o);
              l.pointerCapture && o.target.setPointerCapture(o.pointerId),
                (u && u.size > 1 && c._pointerActive) ||
                  (this.start(o),
                  this.setupPointer(o),
                  (c._pointerId = pointerId(o)),
                  (c._pointerActive = !0),
                  this.computeValues(pointerValues(o)),
                  this.computeInitial(),
                  l.preventScrollAxis && "mouse" !== getPointerType(o)
                    ? ((c._active = !1), this.setupScrollPrevention(o))
                    : l.delay > 0
                    ? (this.setupDelayTrigger(o),
                      l.triggerAllEvents && (this.compute(o), this.emit()))
                    : this.startPointerDrag(o));
            }
            startPointerDrag(o) {
              let l = this.state;
              (l._active = !0),
                (l._preventScroll = !0),
                (l._delayed = !1),
                this.compute(o),
                this.emit();
            }
            pointerMove(o) {
              let l = this.state,
                c = this.config;
              if (!l._pointerActive) return;
              let u = pointerId(o);
              if (void 0 !== l._pointerId && u !== l._pointerId) return;
              let h = pointerValues(o);
              if (
                (document.pointerLockElement === o.target
                  ? (l._delta = [o.movementX, o.movementY])
                  : ((l._delta = em.sub(h, l._values)), this.computeValues(h)),
                em.addTo(l._movement, l._delta),
                this.compute(o),
                l._delayed && l.intentional)
              ) {
                this.timeoutStore.remove("dragDelay"),
                  (l.active = !1),
                  this.startPointerDrag(o);
                return;
              }
              if (c.preventScrollAxis && !l._preventScroll) {
                if (!l.axis) return;
                if (
                  l.axis === c.preventScrollAxis ||
                  "xy" === c.preventScrollAxis
                ) {
                  (l._active = !1), this.clean();
                  return;
                }
                this.timeoutStore.remove("startPointerDrag"),
                  this.startPointerDrag(o);
                return;
              }
              this.emit();
            }
            pointerUp(o) {
              this.ctrl.setEventIds(o);
              try {
                this.config.pointerCapture &&
                  o.target.hasPointerCapture(o.pointerId) &&
                  o.target.releasePointerCapture(o.pointerId);
              } catch (o) {}
              let l = this.state,
                c = this.config;
              if (!l._active || !l._pointerActive) return;
              let u = pointerId(o);
              if (void 0 !== l._pointerId && u !== l._pointerId) return;
              (this.state._pointerActive = !1),
                this.setActive(),
                this.compute(o);
              let [h, g] = l._distance;
              if (
                ((l.tap = h <= c.tapsThreshold && g <= c.tapsThreshold),
                l.tap && c.filterTaps)
              )
                l._force = !0;
              else {
                let [o, u] = l._delta,
                  [h, g] = l._movement,
                  [_, b] = c.swipe.velocity,
                  [y, w] = c.swipe.distance,
                  T = c.swipe.duration;
                if (l.elapsedTime < T) {
                  let c = Math.abs(o / l.timeDelta),
                    T = Math.abs(u / l.timeDelta);
                  c > _ && Math.abs(h) > y && (l.swipe[0] = Math.sign(o)),
                    T > b && Math.abs(g) > w && (l.swipe[1] = Math.sign(u));
                }
              }
              this.emit();
            }
            pointerClick(o) {
              !this.state.tap &&
                o.detail > 0 &&
                (o.preventDefault(), o.stopPropagation());
            }
            setupPointer(o) {
              let l = this.config,
                c = l.device;
              l.pointerLock && o.currentTarget.requestPointerLock(),
                l.pointerCapture ||
                  (this.eventStore.add(
                    this.sharedConfig.window,
                    c,
                    "change",
                    this.pointerMove.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    c,
                    "end",
                    this.pointerUp.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    c,
                    "cancel",
                    this.pointerUp.bind(this)
                  ));
            }
            pointerClean() {
              this.config.pointerLock &&
                document.pointerLockElement === this.state.currentTarget &&
                document.exitPointerLock();
            }
            preventScroll(o) {
              this.state._preventScroll && o.cancelable && o.preventDefault();
            }
            setupScrollPrevention(o) {
              (this.state._preventScroll = !1),
                "persist" in o && "function" == typeof o.persist && o.persist();
              let l = this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "change",
                this.preventScroll.bind(this),
                { passive: !1 }
              );
              this.eventStore.add(this.sharedConfig.window, "touch", "end", l),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "cancel",
                  l
                ),
                this.timeoutStore.add(
                  "startPointerDrag",
                  this.startPointerDrag.bind(this),
                  this.config.preventScrollDelay,
                  o
                );
            }
            setupDelayTrigger(o) {
              (this.state._delayed = !0),
                this.timeoutStore.add(
                  "dragDelay",
                  () => {
                    (this.state._step = [0, 0]), this.startPointerDrag(o);
                  },
                  this.config.delay
                );
            }
            keyDown(o) {
              let l = eE[o.key];
              if (l) {
                let c = this.state,
                  u = o.shiftKey ? 10 : o.altKey ? 0.1 : 1;
                this.start(o),
                  (c._delta = l(this.config.keyboardDisplacement, u)),
                  (c._keyboardActive = !0),
                  em.addTo(c._movement, c._delta),
                  this.compute(o),
                  this.emit();
              }
            }
            keyUp(o) {
              o.key in eE &&
                ((this.state._keyboardActive = !1),
                this.setActive(),
                this.compute(o),
                this.emit());
            }
            bind(o) {
              let l = this.config.device;
              o(l, "start", this.pointerDown.bind(this)),
                this.config.pointerCapture &&
                  (o(l, "change", this.pointerMove.bind(this)),
                  o(l, "end", this.pointerUp.bind(this)),
                  o(l, "cancel", this.pointerUp.bind(this)),
                  o("lostPointerCapture", "", this.pointerUp.bind(this))),
                this.config.keys &&
                  (o("key", "down", this.keyDown.bind(this)),
                  o("key", "up", this.keyUp.bind(this))),
                this.config.filterTaps &&
                  o("click", "", this.pointerClick.bind(this), {
                    capture: !0,
                    passive: !1,
                  });
            }
          },
          resolver: eO,
        },
        eP = {
          target(o) {
            if (o) return () => ("current" in o ? o.current : o);
          },
          enabled: (o = !0) => o,
          window: (o = e$.isBrowser ? window : void 0) => o,
          eventOptions: ({ passive: o = !0, capture: l = !1 } = {}) => ({
            passive: o,
            capture: l,
          }),
          transform: (o) => o,
        },
        eD = ["target", "eventOptions", "window", "enabled", "transform"];
      function resolveWith(o = {}, l) {
        let c = {};
        for (let [u, h] of Object.entries(l))
          switch (typeof h) {
            case "function":
              c[u] = h.call(c, o[u], u, o);
              break;
            case "object":
              c[u] = resolveWith(o[u], h);
              break;
            case "boolean":
              h && (c[u] = o[u]);
          }
        return c;
      }
      let EventStore = class EventStore {
        constructor(o, l) {
          _defineProperty(this, "_listeners", new Set()),
            (this._ctrl = o),
            (this._gestureKey = l);
        }
        add(o, l, c, u, h) {
          let g = this._listeners,
            _ = (function (o, l = "") {
              let c = e_[o],
                u = (c && c[l]) || l;
              return o + u;
            })(l, c),
            b = this._gestureKey
              ? this._ctrl.config[this._gestureKey].eventOptions
              : {},
            y = _objectSpread2(_objectSpread2({}, b), h);
          o.addEventListener(_, u, y);
          let remove = () => {
            o.removeEventListener(_, u, y), g.delete(remove);
          };
          return g.add(remove), remove;
        }
        clean() {
          this._listeners.forEach((o) => o()), this._listeners.clear();
        }
      };
      let TimeoutStore = class TimeoutStore {
        constructor() {
          _defineProperty(this, "_timeouts", new Map());
        }
        add(o, l, c = 140, ...u) {
          this.remove(o), this._timeouts.set(o, window.setTimeout(l, c, ...u));
        }
        remove(o) {
          let l = this._timeouts.get(o);
          l && window.clearTimeout(l);
        }
        clean() {
          this._timeouts.forEach((o) => void window.clearTimeout(o)),
            this._timeouts.clear();
        }
      };
      let Controller = class Controller {
        constructor(o) {
          _defineProperty(this, "gestures", new Set()),
            _defineProperty(this, "_targetEventStore", new EventStore(this)),
            _defineProperty(this, "gestureEventStores", {}),
            _defineProperty(this, "gestureTimeoutStores", {}),
            _defineProperty(this, "handlers", {}),
            _defineProperty(this, "config", {}),
            _defineProperty(this, "pointerIds", new Set()),
            _defineProperty(this, "touchIds", new Set()),
            _defineProperty(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            o.drag && setupGesture(this, "drag"),
            o.wheel && setupGesture(this, "wheel"),
            o.scroll && setupGesture(this, "scroll"),
            o.move && setupGesture(this, "move"),
            o.pinch && setupGesture(this, "pinch"),
            o.hover && setupGesture(this, "hover");
        }
        setEventIds(o) {
          return isTouch(o)
            ? ((this.touchIds = new Set(
                Array.from(o.touches)
                  .filter((l) => {
                    var c, u;
                    return (
                      l.target === o.currentTarget ||
                      (null === (c = o.currentTarget) ||
                      void 0 === c ||
                      null === (u = c.contains) ||
                      void 0 === u
                        ? void 0
                        : u.call(c, l.target))
                    );
                  })
                  .map((o) => o.identifier)
              )),
              this.touchIds)
            : "pointerId" in o
            ? ("pointerup" === o.type || "pointercancel" === o.type
                ? this.pointerIds.delete(o.pointerId)
                : "pointerdown" === o.type && this.pointerIds.add(o.pointerId),
              this.pointerIds)
            : void 0;
        }
        applyHandlers(o, l) {
          (this.handlers = o), (this.nativeHandlers = l);
        }
        applyConfig(o, l) {
          this.config = (function (o, l, c = {}) {
            let {
                target: u,
                eventOptions: h,
                window: g,
                enabled: _,
                transform: b,
              } = o,
              y = (function (o, l) {
                if (null == o) return {};
                var c,
                  u,
                  h = (function (o, l) {
                    if (null == o) return {};
                    var c,
                      u,
                      h = {},
                      g = Object.keys(o);
                    for (u = 0; u < g.length; u++)
                      (c = g[u]), l.indexOf(c) >= 0 || (h[c] = o[c]);
                    return h;
                  })(o, l);
                if (Object.getOwnPropertySymbols) {
                  var g = Object.getOwnPropertySymbols(o);
                  for (u = 0; u < g.length; u++)
                    (c = g[u]),
                      !(l.indexOf(c) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(o, c) &&
                        (h[c] = o[c]);
                }
                return h;
              })(o, eD);
            if (
              ((c.shared = resolveWith(
                {
                  target: u,
                  eventOptions: h,
                  window: g,
                  enabled: _,
                  transform: b,
                },
                eP
              )),
              l)
            ) {
              let o = eT.get(l);
              c[l] = resolveWith(_objectSpread2({ shared: c.shared }, y), o);
            } else
              for (let o in y) {
                let l = eT.get(o);
                l &&
                  (c[o] = resolveWith(
                    _objectSpread2({ shared: c.shared }, y[o]),
                    l
                  ));
              }
            return c;
          })(o, l, this.config);
        }
        clean() {
          for (let o of (this._targetEventStore.clean(), this.gestures))
            this.gestureEventStores[o].clean(),
              this.gestureTimeoutStores[o].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...o) {
          let l;
          let c = this.config.shared,
            u = {};
          if (!c.target || (l = c.target())) {
            if (c.enabled) {
              for (let c of this.gestures) {
                let h = this.config[c],
                  g = bindToProps(u, h.eventOptions, !!l);
                if (h.enabled) {
                  let l = ej.get(c);
                  new l(this, o, c).bind(g);
                }
              }
              let h = bindToProps(u, c.eventOptions, !!l);
              for (let l in this.nativeHandlers)
                h(
                  l,
                  "",
                  (c) =>
                    this.nativeHandlers[l](
                      _objectSpread2(
                        _objectSpread2({}, this.state.shared),
                        {},
                        { event: c, args: o }
                      )
                    ),
                  void 0,
                  !0
                );
            }
            for (let o in u)
              u[o] = (function (...o) {
                return 0 === o.length
                  ? noop
                  : 1 === o.length
                  ? o[0]
                  : function () {
                      let l;
                      for (let c of o) l = c.apply(this, arguments) || l;
                      return l;
                    };
              })(...u[o]);
            if (!l) return u;
            for (let o in u) {
              let {
                device: c,
                capture: h,
                passive: g,
              } = (function (o) {
                let l = o.substring(2).toLowerCase(),
                  c = !!~l.indexOf("passive");
                c && (l = l.replace("passive", ""));
                let u = ev.includes(l) ? "capturecapture" : "capture",
                  h = !!~l.indexOf(u);
                return (
                  h && (l = l.replace("capture", "")),
                  { device: l, capture: h, passive: c }
                );
              })(o);
              this._targetEventStore.add(l, c, "", u[o], {
                capture: h,
                passive: g,
              });
            }
          }
        }
      };
      function setupGesture(o, l) {
        o.gestures.add(l),
          (o.gestureEventStores[l] = new EventStore(o, l)),
          (o.gestureTimeoutStores[l] = new TimeoutStore());
      }
      let bindToProps =
        (o, l, c) =>
        (u, h, g, _ = {}, b = !1) => {
          var y, w;
          let T = null !== (y = _.capture) && void 0 !== y ? y : l.capture,
            A = null !== (w = _.passive) && void 0 !== w ? w : l.passive,
            I = b
              ? u
              : (function (o, l = "", c = !1) {
                  let u = e_[o],
                    h = (u && u[l]) || l;
                  return (
                    "on" +
                    capitalize(o) +
                    capitalize(h) +
                    (!(function (o = !1, l) {
                      return o && !eb.includes(l);
                    })(c, h)
                      ? ""
                      : "Capture")
                  );
                })(u, h, T);
          c && A && (I += "Passive"), (o[I] = o[I] || []), o[I].push(g);
        };
      function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        o,
        l,
        { checkForDefaultPrevented: c = !0 } = {}
      ) {
        return function (u) {
          if ((null == o || o(u), !1 === c || !u.defaultPrevented))
            return null == l ? void 0 : l(u);
        };
      }
      function index_module_$6ed0406888f73fc4$export$43e446d32b3d21af(...o) {
        return (l) =>
          o.forEach((o) => {
            "function" == typeof o ? o(l) : null != o && (o.current = l);
          });
      }
      function index_module_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(...o) {
        return (0, y.useCallback)(
          index_module_$6ed0406888f73fc4$export$43e446d32b3d21af(...o),
          o
        );
      }
      function $c512c27ab02ef895$export$50c7b4e9d9f19c1(o, l = []) {
        let c = [],
          createScope = () => {
            let l = c.map((o) => (0, y.createContext)(o));
            return function (c) {
              let u = (null == c ? void 0 : c[o]) || l;
              return (0, y.useMemo)(
                () => ({ [`__scope${o}`]: { ...c, [o]: u } }),
                [c, u]
              );
            };
          };
        return (
          (createScope.scopeName = o),
          [
            function (l, u) {
              let h = (0, y.createContext)(u),
                g = c.length;
              function Provider(l) {
                let { scope: c, children: u, ..._ } = l,
                  b = (null == c ? void 0 : c[o][g]) || h,
                  w = (0, y.useMemo)(() => _, Object.values(_));
                return (0, y.createElement)(b.Provider, { value: w }, u);
              }
              return (
                (c = [...c, u]),
                (Provider.displayName = l + "Provider"),
                [
                  Provider,
                  function (c, _) {
                    let b = (null == _ ? void 0 : _[o][g]) || h,
                      w = (0, y.useContext)(b);
                    if (w) return w;
                    if (void 0 !== u) return u;
                    throw Error(`\`${c}\` must be used within \`${l}\``);
                  },
                ]
              );
            },
            (function (...o) {
              let l = o[0];
              if (1 === o.length) return l;
              let createScope1 = () => {
                let c = o.map((o) => ({
                  useScope: o(),
                  scopeName: o.scopeName,
                }));
                return function (o) {
                  let u = c.reduce((l, { useScope: c, scopeName: u }) => {
                    let h = c(o),
                      g = h[`__scope${u}`];
                    return { ...l, ...g };
                  }, {});
                  return (0, y.useMemo)(
                    () => ({ [`__scope${l.scopeName}`]: u }),
                    [u]
                  );
                };
              };
              return (createScope1.scopeName = l.scopeName), createScope1;
            })(createScope, ...l),
          ]
        );
      }
      let eA = (0, y.forwardRef)((o, l) => {
        let { children: c, ...u } = o,
          h = y.Children.toArray(c),
          g = h.find(index_module_$5e63c961fc1ce211$var$isSlottable);
        if (g) {
          let o = g.props.children,
            c = h.map((l) =>
              l !== g
                ? l
                : y.Children.count(o) > 1
                ? y.Children.only(null)
                : (0, y.isValidElement)(o)
                ? o.props.children
                : null
            );
          return (0, y.createElement)(
            eI,
            _extends({}, u, { ref: l }),
            (0, y.isValidElement)(o) ? (0, y.cloneElement)(o, void 0, c) : null
          );
        }
        return (0, y.createElement)(eI, _extends({}, u, { ref: l }), c);
      });
      eA.displayName = "Slot";
      let eI = (0, y.forwardRef)((o, l) => {
        let { children: c, ...u } = o;
        return (0, y.isValidElement)(c)
          ? (0, y.cloneElement)(c, {
              ...(function (o, l) {
                let c = { ...l };
                for (let u in l) {
                  let h = o[u],
                    g = l[u],
                    _ = /^on[A-Z]/.test(u);
                  _
                    ? h && g
                      ? (c[u] = (...o) => {
                          g(...o), h(...o);
                        })
                      : h && (c[u] = h)
                    : "style" === u
                    ? (c[u] = { ...h, ...g })
                    : "className" === u &&
                      (c[u] = [h, g].filter(Boolean).join(" "));
                }
                return { ...o, ...c };
              })(u, c.props),
              ref: index_module_$6ed0406888f73fc4$export$43e446d32b3d21af(
                l,
                c.ref
              ),
            })
          : y.Children.count(c) > 1
          ? y.Children.only(null)
          : null;
      });
      eI.displayName = "SlotClone";
      let index_module_$5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({
        children: o,
      }) => (0, y.createElement)(y.Fragment, null, o);
      function index_module_$5e63c961fc1ce211$var$isSlottable(o) {
        return (
          (0, y.isValidElement)(o) &&
          o.type === index_module_$5e63c961fc1ce211$export$d9f1ccf0bdb05d45
        );
      }
      let eL = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((o, l) => {
        let c = (0, y.forwardRef)((o, c) => {
          let { asChild: u, ...h } = o,
            g = u ? eA : l;
          return (
            (0, y.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, y.createElement)(g, _extends({}, h, { ref: c }))
          );
        });
        return (c.displayName = `Primitive.${l}`), { ...o, [l]: c };
      }, {});
      function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(o) {
        let l = (0, y.useRef)(o);
        return (
          (0, y.useEffect)(() => {
            l.current = o;
          }),
          (0, y.useMemo)(
            () =>
              (...o) => {
                var c;
                return null === (c = l.current) || void 0 === c
                  ? void 0
                  : c.call(l, ...o);
              },
            []
          )
        );
      }
      let eM = "dismissableLayer.update",
        eN = (0, y.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        ez = (0, y.forwardRef)((o, l) => {
          var c;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: g,
              onPointerDownOutside: _,
              onFocusOutside: b,
              onInteractOutside: w,
              onDismiss: T,
              ...A
            } = o,
            I = (0, y.useContext)(eN),
            [N, W] = (0, y.useState)(null),
            B =
              null !== (c = null == N ? void 0 : N.ownerDocument) &&
              void 0 !== c
                ? c
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, F] = (0, y.useState)({}),
            H = index_module_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(l, (o) =>
              W(o)
            ),
            U = Array.from(I.layers),
            [K] = [...I.layersWithOutsidePointerEventsDisabled].slice(-1),
            G = U.indexOf(K),
            Y = N ? U.indexOf(N) : -1,
            q = I.layersWithOutsidePointerEventsDisabled.size > 0,
            X = Y >= G,
            Z = (function (
              o,
              l = null == globalThis ? void 0 : globalThis.document
            ) {
              let c = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(o),
                u = (0, y.useRef)(!1),
                h = (0, y.useRef)(() => {});
              return (
                (0, y.useEffect)(() => {
                  let handlePointerDown = (o) => {
                      if (o.target && !u.current) {
                        let u = { originalEvent: o };
                        function handleAndDispatchPointerDownOutsideEvent() {
                          $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                            "dismissableLayer.pointerDownOutside",
                            c,
                            u,
                            { discrete: !0 }
                          );
                        }
                        "touch" === o.pointerType
                          ? (l.removeEventListener("click", h.current),
                            (h.current =
                              handleAndDispatchPointerDownOutsideEvent),
                            l.addEventListener("click", h.current, {
                              once: !0,
                            }))
                          : handleAndDispatchPointerDownOutsideEvent();
                      }
                      u.current = !1;
                    },
                    o = window.setTimeout(() => {
                      l.addEventListener("pointerdown", handlePointerDown);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      l.removeEventListener("pointerdown", handlePointerDown),
                      l.removeEventListener("click", h.current);
                  };
                }, [l, c]),
                { onPointerDownCapture: () => (u.current = !0) }
              );
            })((o) => {
              let l = o.target,
                c = [...I.branches].some((o) => o.contains(l));
              !X ||
                c ||
                (null == _ || _(o),
                null == w || w(o),
                o.defaultPrevented || null == T || T());
            }, B),
            Q = (function (
              o,
              l = null == globalThis ? void 0 : globalThis.document
            ) {
              let c = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(o),
                u = (0, y.useRef)(!1);
              return (
                (0, y.useEffect)(() => {
                  let handleFocus = (o) => {
                    o.target &&
                      !u.current &&
                      $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                        "dismissableLayer.focusOutside",
                        c,
                        { originalEvent: o },
                        { discrete: !1 }
                      );
                  };
                  return (
                    l.addEventListener("focusin", handleFocus),
                    () => l.removeEventListener("focusin", handleFocus)
                  );
                }, [l, c]),
                {
                  onFocusCapture: () => (u.current = !0),
                  onBlurCapture: () => (u.current = !1),
                }
              );
            })((o) => {
              let l = o.target,
                c = [...I.branches].some((o) => o.contains(l));
              c ||
                (null == b || b(o),
                null == w || w(o),
                o.defaultPrevented || null == T || T());
            }, B);
          return (
            !(function (
              o,
              l = null == globalThis ? void 0 : globalThis.document
            ) {
              let c = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(o);
              (0, y.useEffect)(() => {
                let handleKeyDown = (o) => {
                  "Escape" === o.key && c(o);
                };
                return (
                  l.addEventListener("keydown", handleKeyDown),
                  () => l.removeEventListener("keydown", handleKeyDown)
                );
              }, [c, l]);
            })((o) => {
              let l = Y === I.layers.size - 1;
              l &&
                (null == g || g(o),
                !o.defaultPrevented && T && (o.preventDefault(), T()));
            }, B),
            (0, y.useEffect)(() => {
              if (N)
                return (
                  h &&
                    (0 === I.layersWithOutsidePointerEventsDisabled.size &&
                      ((u = B.body.style.pointerEvents),
                      (B.body.style.pointerEvents = "none")),
                    I.layersWithOutsidePointerEventsDisabled.add(N)),
                  I.layers.add(N),
                  $5cb92bef7577960e$var$dispatchUpdate(),
                  () => {
                    h &&
                      1 === I.layersWithOutsidePointerEventsDisabled.size &&
                      (B.body.style.pointerEvents = u);
                  }
                );
            }, [N, B, h, I]),
            (0, y.useEffect)(
              () => () => {
                N &&
                  (I.layers.delete(N),
                  I.layersWithOutsidePointerEventsDisabled.delete(N),
                  $5cb92bef7577960e$var$dispatchUpdate());
              },
              [N, I]
            ),
            (0, y.useEffect)(() => {
              let handleUpdate = () => F({});
              return (
                document.addEventListener(eM, handleUpdate),
                () => document.removeEventListener(eM, handleUpdate)
              );
            }, []),
            (0, y.createElement)(
              eL.div,
              _extends({}, A, {
                ref: H,
                style: {
                  pointerEvents: q ? (X ? "auto" : "none") : void 0,
                  ...o.style,
                },
                onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  o.onFocusCapture,
                  Q.onFocusCapture
                ),
                onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  o.onBlurCapture,
                  Q.onBlurCapture
                ),
                onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  o.onPointerDownCapture,
                  Z.onPointerDownCapture
                ),
              })
            )
          );
        });
      function $5cb92bef7577960e$var$dispatchUpdate() {
        let o = new CustomEvent(eM);
        document.dispatchEvent(o);
      }
      function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
        o,
        l,
        c,
        { discrete: u }
      ) {
        let h = c.originalEvent.target,
          g = new CustomEvent(o, { bubbles: !1, cancelable: !0, detail: c });
        (l && h.addEventListener(o, l, { once: !0 }), u)
          ? h && (0, b.flushSync)(() => h.dispatchEvent(g))
          : h.dispatchEvent(g);
      }
      let eW = (null == globalThis ? void 0 : globalThis.document)
          ? y.useLayoutEffect
          : () => {},
        eB = w["useId".toString()] || (() => void 0),
        eF = 0;
      function floating_ui_core_browser_min_t(o) {
        return o.split("-")[0];
      }
      function floating_ui_core_browser_min_e(o) {
        return o.split("-")[1];
      }
      function floating_ui_core_browser_min_n(o) {
        return ["top", "bottom"].includes(floating_ui_core_browser_min_t(o))
          ? "x"
          : "y";
      }
      function floating_ui_core_browser_min_r(o) {
        return "y" === o ? "height" : "width";
      }
      function floating_ui_core_browser_min_i(o, l, c) {
        let u,
          { reference: h, floating: g } = o,
          _ = h.x + h.width / 2 - g.width / 2,
          b = h.y + h.height / 2 - g.height / 2,
          y = floating_ui_core_browser_min_n(l),
          w = floating_ui_core_browser_min_r(y),
          T = h[w] / 2 - g[w] / 2,
          A = "x" === y;
        switch (floating_ui_core_browser_min_t(l)) {
          case "top":
            u = { x: _, y: h.y - g.height };
            break;
          case "bottom":
            u = { x: _, y: h.y + h.height };
            break;
          case "right":
            u = { x: h.x + h.width, y: b };
            break;
          case "left":
            u = { x: h.x - g.width, y: b };
            break;
          default:
            u = { x: h.x, y: h.y };
        }
        switch (floating_ui_core_browser_min_e(l)) {
          case "start":
            u[y] -= T * (c && A ? -1 : 1);
            break;
          case "end":
            u[y] += T * (c && A ? -1 : 1);
        }
        return u;
      }
      let floating_ui_core_browser_min_o = async (o, l, c) => {
        let {
            placement: u = "bottom",
            strategy: h = "absolute",
            middleware: g = [],
            platform: _,
          } = c,
          b = await (null == _.isRTL ? void 0 : _.isRTL(l)),
          y = await _.getElementRects({
            reference: o,
            floating: l,
            strategy: h,
          }),
          { x: w, y: T } = floating_ui_core_browser_min_i(y, u, b),
          A = u,
          I = {},
          N = 0;
        for (let c = 0; c < g.length; c++) {
          let { name: W, fn: B } = g[c],
            {
              x: F,
              y: H,
              data: U,
              reset: K,
            } = await B({
              x: w,
              y: T,
              initialPlacement: u,
              placement: A,
              strategy: h,
              middlewareData: I,
              rects: y,
              platform: _,
              elements: { reference: o, floating: l },
            });
          (w = null != F ? F : w),
            (T = null != H ? H : T),
            (I = { ...I, [W]: { ...I[W], ...U } }),
            K &&
              N <= 50 &&
              (N++,
              "object" == typeof K &&
                (K.placement && (A = K.placement),
                K.rects &&
                  (y =
                    !0 === K.rects
                      ? await _.getElementRects({
                          reference: o,
                          floating: l,
                          strategy: h,
                        })
                      : K.rects),
                ({ x: w, y: T } = floating_ui_core_browser_min_i(y, A, b))),
              (c = -1));
        }
        return { x: w, y: T, placement: A, strategy: h, middlewareData: I };
      };
      function floating_ui_core_browser_min_a(o) {
        return "number" != typeof o
          ? { top: 0, right: 0, bottom: 0, left: 0, ...o }
          : { top: o, right: o, bottom: o, left: o };
      }
      function floating_ui_core_browser_min_l(o) {
        return {
          ...o,
          top: o.y,
          left: o.x,
          right: o.x + o.width,
          bottom: o.y + o.height,
        };
      }
      async function floating_ui_core_browser_min_s(o, l) {
        var c;
        void 0 === l && (l = {});
        let { x: u, y: h, platform: g, rects: _, elements: b, strategy: y } = o,
          {
            boundary: w = "clippingAncestors",
            rootBoundary: T = "viewport",
            elementContext: A = "floating",
            altBoundary: I = !1,
            padding: N = 0,
          } = l,
          W = floating_ui_core_browser_min_a(N),
          B = b[I ? ("floating" === A ? "reference" : "floating") : A],
          F = floating_ui_core_browser_min_l(
            await g.getClippingRect({
              element:
                null ==
                  (c = await (null == g.isElement ? void 0 : g.isElement(B))) ||
                c
                  ? B
                  : B.contextElement ||
                    (await (null == g.getDocumentElement
                      ? void 0
                      : g.getDocumentElement(b.floating))),
              boundary: w,
              rootBoundary: T,
              strategy: y,
            })
          ),
          H = floating_ui_core_browser_min_l(
            g.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await g.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect:
                    "floating" === A
                      ? { ..._.floating, x: u, y: h }
                      : _.reference,
                  offsetParent: await (null == g.getOffsetParent
                    ? void 0
                    : g.getOffsetParent(b.floating)),
                  strategy: y,
                })
              : _[A]
          );
        return {
          top: F.top - H.top + W.top,
          bottom: H.bottom - F.bottom + W.bottom,
          left: F.left - H.left + W.left,
          right: H.right - F.right + W.right,
        };
      }
      let eH = Math.min,
        eV = Math.max,
        floating_ui_core_browser_min_m = (o) => ({
          name: "arrow",
          options: o,
          async fn(l) {
            let { element: c, padding: u = 0 } = null != o ? o : {},
              { x: h, y: g, placement: _, rects: b, platform: y } = l;
            if (null == c) return {};
            let w = floating_ui_core_browser_min_a(u),
              T = { x: h, y: g },
              A = floating_ui_core_browser_min_n(_),
              I = floating_ui_core_browser_min_e(_),
              N = floating_ui_core_browser_min_r(A),
              W = await y.getDimensions(c),
              B = "y" === A ? "top" : "left",
              F = "y" === A ? "bottom" : "right",
              H = b.reference[N] + b.reference[A] - T[A] - b.floating[N],
              U = T[A] - b.reference[A],
              K = await (null == y.getOffsetParent
                ? void 0
                : y.getOffsetParent(c)),
              G = K
                ? "y" === A
                  ? K.clientHeight || 0
                  : K.clientWidth || 0
                : 0;
            0 === G && (G = b.floating[N]);
            let Y = w[B],
              q = G - W[N] - w[F],
              X = G / 2 - W[N] / 2 + (H / 2 - U / 2),
              Z = eV(Y, eH(X, q)),
              Q =
                ("start" === I ? w[B] : w[F]) > 0 &&
                X !== Z &&
                b.reference[N] <= b.floating[N];
            return {
              [A]: T[A] - (Q ? (X < Y ? Y - X : q - X) : 0),
              data: { [A]: Z, centerOffset: X - Z },
            };
          },
        }),
        eU = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function floating_ui_core_browser_min_d(o) {
        return o.replace(/left|right|bottom|top/g, (o) => eU[o]);
      }
      let eK = { start: "end", end: "start" };
      function floating_ui_core_browser_min_y(o) {
        return o.replace(/start|end/g, (o) => eK[o]);
      }
      let eG = ["top", "right", "bottom", "left"];
      function floating_ui_core_browser_min_R(o, l) {
        return {
          top: o.top - l.height,
          right: o.right - l.width,
          bottom: o.bottom - l.height,
          left: o.left - l.width,
        };
      }
      function floating_ui_core_browser_min_A(o) {
        return eG.some((l) => o[l] >= 0);
      }
      eG.reduce((o, l) => o.concat(l, l + "-start", l + "-end"), []);
      let floating_ui_core_browser_min_P = function (o) {
        let { strategy: l = "referenceHidden", ...c } = void 0 === o ? {} : o;
        return {
          name: "hide",
          async fn(o) {
            let { rects: u } = o;
            switch (l) {
              case "referenceHidden": {
                let l = floating_ui_core_browser_min_R(
                  await floating_ui_core_browser_min_s(o, {
                    ...c,
                    elementContext: "reference",
                  }),
                  u.reference
                );
                return {
                  data: {
                    referenceHiddenOffsets: l,
                    referenceHidden: floating_ui_core_browser_min_A(l),
                  },
                };
              }
              case "escaped": {
                let l = floating_ui_core_browser_min_R(
                  await floating_ui_core_browser_min_s(o, {
                    ...c,
                    altBoundary: !0,
                  }),
                  u.floating
                );
                return {
                  data: {
                    escapedOffsets: l,
                    escaped: floating_ui_core_browser_min_A(l),
                  },
                };
              }
              default:
                return {};
            }
          },
        };
      };
      function floating_ui_core_browser_min_O(o) {
        return "x" === o ? "y" : "x";
      }
      function floating_ui_dom_browser_min_n(o) {
        return o && o.document && o.location && o.alert && o.setInterval;
      }
      function floating_ui_dom_browser_min_o(o) {
        if (null == o) return window;
        if (!floating_ui_dom_browser_min_n(o)) {
          let l = o.ownerDocument;
          return (l && l.defaultView) || window;
        }
        return o;
      }
      function floating_ui_dom_browser_min_i(o) {
        return floating_ui_dom_browser_min_o(o).getComputedStyle(o);
      }
      function floating_ui_dom_browser_min_r(o) {
        return floating_ui_dom_browser_min_n(o)
          ? ""
          : o
          ? (o.nodeName || "").toLowerCase()
          : "";
      }
      function floating_ui_dom_browser_min_l() {
        let o = navigator.userAgentData;
        return null != o && o.brands
          ? o.brands.map((o) => o.brand + "/" + o.version).join(" ")
          : navigator.userAgent;
      }
      function floating_ui_dom_browser_min_c(o) {
        return o instanceof floating_ui_dom_browser_min_o(o).HTMLElement;
      }
      function floating_ui_dom_browser_min_f(o) {
        return o instanceof floating_ui_dom_browser_min_o(o).Element;
      }
      function floating_ui_dom_browser_min_s(o) {
        return (
          "undefined" != typeof ShadowRoot &&
          (o instanceof floating_ui_dom_browser_min_o(o).ShadowRoot ||
            o instanceof ShadowRoot)
        );
      }
      function floating_ui_dom_browser_min_u(o) {
        let {
          overflow: l,
          overflowX: c,
          overflowY: u,
        } = floating_ui_dom_browser_min_i(o);
        return /auto|scroll|overlay|hidden/.test(l + u + c);
      }
      function floating_ui_dom_browser_min_h(o) {
        let l = /firefox/i.test(floating_ui_dom_browser_min_l()),
          c = floating_ui_dom_browser_min_i(o);
        return (
          "none" !== c.transform ||
          "none" !== c.perspective ||
          "paint" === c.contain ||
          ["transform", "perspective"].includes(c.willChange) ||
          (l && "filter" === c.willChange) ||
          (l && !!c.filter && "none" !== c.filter)
        );
      }
      function floating_ui_dom_browser_min_a() {
        return !/^((?!chrome|android).)*safari/i.test(
          floating_ui_dom_browser_min_l()
        );
      }
      let eY = Math.min,
        eq = Math.max,
        eX = Math.round;
      function floating_ui_dom_browser_min_w(o, l, c) {
        var u, h, g, _;
        void 0 === l && (l = !1), void 0 === c && (c = !1);
        let b = o.getBoundingClientRect(),
          y = 1,
          w = 1;
        l &&
          floating_ui_dom_browser_min_c(o) &&
          ((y = (o.offsetWidth > 0 && eX(b.width) / o.offsetWidth) || 1),
          (w = (o.offsetHeight > 0 && eX(b.height) / o.offsetHeight) || 1));
        let T = floating_ui_dom_browser_min_f(o)
            ? floating_ui_dom_browser_min_o(o)
            : window,
          A = !floating_ui_dom_browser_min_a() && c,
          I =
            (b.left +
              (A &&
              null !=
                (u = null == (h = T.visualViewport) ? void 0 : h.offsetLeft)
                ? u
                : 0)) /
            y,
          N =
            (b.top +
              (A &&
              null !=
                (g = null == (_ = T.visualViewport) ? void 0 : _.offsetTop)
                ? g
                : 0)) /
            w,
          W = b.width / y,
          B = b.height / w;
        return {
          width: W,
          height: B,
          top: N,
          right: I + W,
          bottom: N + B,
          left: I,
          x: I,
          y: N,
        };
      }
      function floating_ui_dom_browser_min_v(o) {
        return (
          (o instanceof floating_ui_dom_browser_min_o(o).Node
            ? o.ownerDocument
            : o.document) || window.document
        ).documentElement;
      }
      function floating_ui_dom_browser_min_y(o) {
        return floating_ui_dom_browser_min_f(o)
          ? { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop }
          : { scrollLeft: o.pageXOffset, scrollTop: o.pageYOffset };
      }
      function floating_ui_dom_browser_min_x(o) {
        return (
          floating_ui_dom_browser_min_w(floating_ui_dom_browser_min_v(o)).left +
          floating_ui_dom_browser_min_y(o).scrollLeft
        );
      }
      function floating_ui_dom_browser_min_L(o) {
        return "html" === floating_ui_dom_browser_min_r(o)
          ? o
          : o.assignedSlot ||
              o.parentNode ||
              (floating_ui_dom_browser_min_s(o) ? o.host : null) ||
              floating_ui_dom_browser_min_v(o);
      }
      function floating_ui_dom_browser_min_R(o) {
        return floating_ui_dom_browser_min_c(o) &&
          "fixed" !== getComputedStyle(o).position
          ? o.offsetParent
          : null;
      }
      function floating_ui_dom_browser_min_T(o) {
        let l = floating_ui_dom_browser_min_o(o),
          c = floating_ui_dom_browser_min_R(o);
        for (
          ;
          c &&
          ["table", "td", "th"].includes(floating_ui_dom_browser_min_r(c)) &&
          "static" === getComputedStyle(c).position;

        )
          c = floating_ui_dom_browser_min_R(c);
        return c &&
          ("html" === floating_ui_dom_browser_min_r(c) ||
            ("body" === floating_ui_dom_browser_min_r(c) &&
              "static" === getComputedStyle(c).position &&
              !floating_ui_dom_browser_min_h(c)))
          ? l
          : c ||
              (function (o) {
                let l = floating_ui_dom_browser_min_L(o);
                for (
                  floating_ui_dom_browser_min_s(l) && (l = l.host);
                  floating_ui_dom_browser_min_c(l) &&
                  !["html", "body"].includes(floating_ui_dom_browser_min_r(l));

                ) {
                  if (floating_ui_dom_browser_min_h(l)) return l;
                  l = l.parentNode;
                }
                return null;
              })(o) ||
              l;
      }
      function floating_ui_dom_browser_min_W(o) {
        if (floating_ui_dom_browser_min_c(o))
          return { width: o.offsetWidth, height: o.offsetHeight };
        let l = floating_ui_dom_browser_min_w(o);
        return { width: l.width, height: l.height };
      }
      function floating_ui_dom_browser_min_H(o, l) {
        var c;
        void 0 === l && (l = []);
        let u = (function floating_ui_dom_browser_min_E(o) {
            let l = floating_ui_dom_browser_min_L(o);
            return ["html", "body", "#document"].includes(
              floating_ui_dom_browser_min_r(l)
            )
              ? o.ownerDocument.body
              : floating_ui_dom_browser_min_c(l) &&
                floating_ui_dom_browser_min_u(l)
              ? l
              : floating_ui_dom_browser_min_E(l);
          })(o),
          h = u === (null == (c = o.ownerDocument) ? void 0 : c.body),
          g = floating_ui_dom_browser_min_o(u),
          _ = h
            ? [g].concat(
                g.visualViewport || [],
                floating_ui_dom_browser_min_u(u) ? u : []
              )
            : u,
          b = l.concat(_);
        return h ? b : b.concat(floating_ui_dom_browser_min_H(_));
      }
      function floating_ui_dom_browser_min_C(o, l, c) {
        return "viewport" === l
          ? floating_ui_core_browser_min_l(
              (function (o, l) {
                let c = floating_ui_dom_browser_min_o(o),
                  u = floating_ui_dom_browser_min_v(o),
                  h = c.visualViewport,
                  g = u.clientWidth,
                  _ = u.clientHeight,
                  b = 0,
                  y = 0;
                if (h) {
                  (g = h.width), (_ = h.height);
                  let o = floating_ui_dom_browser_min_a();
                  (o || (!o && "fixed" === l)) &&
                    ((b = h.offsetLeft), (y = h.offsetTop));
                }
                return { width: g, height: _, x: b, y: y };
              })(o, c)
            )
          : floating_ui_dom_browser_min_f(l)
          ? (function (o, l) {
              let c = floating_ui_dom_browser_min_w(o, !1, "fixed" === l),
                u = c.top + o.clientTop,
                h = c.left + o.clientLeft;
              return {
                top: u,
                left: h,
                x: h,
                y: u,
                right: h + o.clientWidth,
                bottom: u + o.clientHeight,
                width: o.clientWidth,
                height: o.clientHeight,
              };
            })(l, c)
          : floating_ui_core_browser_min_l(
              (function (o) {
                var l;
                let c = floating_ui_dom_browser_min_v(o),
                  u = floating_ui_dom_browser_min_y(o),
                  h = null == (l = o.ownerDocument) ? void 0 : l.body,
                  g = eq(
                    c.scrollWidth,
                    c.clientWidth,
                    h ? h.scrollWidth : 0,
                    h ? h.clientWidth : 0
                  ),
                  _ = eq(
                    c.scrollHeight,
                    c.clientHeight,
                    h ? h.scrollHeight : 0,
                    h ? h.clientHeight : 0
                  ),
                  b = -u.scrollLeft + floating_ui_dom_browser_min_x(o),
                  y = -u.scrollTop;
                return (
                  "rtl" === floating_ui_dom_browser_min_i(h || c).direction &&
                    (b += eq(c.clientWidth, h ? h.clientWidth : 0) - g),
                  { width: g, height: _, x: b, y: y }
                );
              })(floating_ui_dom_browser_min_v(o))
            );
      }
      let eZ = {
        getClippingRect: function (o) {
          let { element: l, boundary: c, rootBoundary: u, strategy: h } = o,
            g = [
              ...("clippingAncestors" === c
                ? (function (o) {
                    let l = floating_ui_dom_browser_min_H(o),
                      c =
                        ["absolute", "fixed"].includes(
                          floating_ui_dom_browser_min_i(o).position
                        ) && floating_ui_dom_browser_min_c(o)
                          ? floating_ui_dom_browser_min_T(o)
                          : o;
                    return floating_ui_dom_browser_min_f(c)
                      ? l.filter(
                          (o) =>
                            floating_ui_dom_browser_min_f(o) &&
                            (function (o, l) {
                              let c =
                                null == l.getRootNode
                                  ? void 0
                                  : l.getRootNode();
                              if (o.contains(l)) return !0;
                              if (c && floating_ui_dom_browser_min_s(c)) {
                                let c = l;
                                do {
                                  if (c && o === c) return !0;
                                  c = c.parentNode || c.host;
                                } while (c);
                              }
                              return !1;
                            })(o, c) &&
                            "body" !== floating_ui_dom_browser_min_r(o)
                        )
                      : [];
                  })(l)
                : [].concat(c)),
              u,
            ],
            _ = g[0],
            b = g.reduce((o, c) => {
              let u = floating_ui_dom_browser_min_C(l, c, h);
              return (
                (o.top = eq(u.top, o.top)),
                (o.right = eY(u.right, o.right)),
                (o.bottom = eY(u.bottom, o.bottom)),
                (o.left = eq(u.left, o.left)),
                o
              );
            }, floating_ui_dom_browser_min_C(l, _, h));
          return {
            width: b.right - b.left,
            height: b.bottom - b.top,
            x: b.left,
            y: b.top,
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (o) {
          let { rect: l, offsetParent: c, strategy: u } = o,
            h = floating_ui_dom_browser_min_c(c),
            g = floating_ui_dom_browser_min_v(c);
          if (c === g) return l;
          let _ = { scrollLeft: 0, scrollTop: 0 },
            b = { x: 0, y: 0 };
          if (
            (h || (!h && "fixed" !== u)) &&
            (("body" !== floating_ui_dom_browser_min_r(c) ||
              floating_ui_dom_browser_min_u(g)) &&
              (_ = floating_ui_dom_browser_min_y(c)),
            floating_ui_dom_browser_min_c(c))
          ) {
            let o = floating_ui_dom_browser_min_w(c, !0);
            (b.x = o.x + c.clientLeft), (b.y = o.y + c.clientTop);
          }
          return {
            ...l,
            x: l.x - _.scrollLeft + b.x,
            y: l.y - _.scrollTop + b.y,
          };
        },
        isElement: floating_ui_dom_browser_min_f,
        getDimensions: floating_ui_dom_browser_min_W,
        getOffsetParent: floating_ui_dom_browser_min_T,
        getDocumentElement: floating_ui_dom_browser_min_v,
        getElementRects: (o) => {
          let { reference: l, floating: c, strategy: u } = o;
          return {
            reference: (function (o, l, c) {
              let u = floating_ui_dom_browser_min_c(l),
                h = floating_ui_dom_browser_min_v(l),
                g = floating_ui_dom_browser_min_w(
                  o,
                  u &&
                    (function (o) {
                      let l = floating_ui_dom_browser_min_w(o);
                      return (
                        eX(l.width) !== o.offsetWidth ||
                        eX(l.height) !== o.offsetHeight
                      );
                    })(l),
                  "fixed" === c
                ),
                _ = { scrollLeft: 0, scrollTop: 0 },
                b = { x: 0, y: 0 };
              if (u || (!u && "fixed" !== c)) {
                if (
                  (("body" !== floating_ui_dom_browser_min_r(l) ||
                    floating_ui_dom_browser_min_u(h)) &&
                    (_ = floating_ui_dom_browser_min_y(l)),
                  floating_ui_dom_browser_min_c(l))
                ) {
                  let o = floating_ui_dom_browser_min_w(l, !0);
                  (b.x = o.x + l.clientLeft), (b.y = o.y + l.clientTop);
                } else h && (b.x = floating_ui_dom_browser_min_x(h));
              }
              return {
                x: g.left + _.scrollLeft - b.x,
                y: g.top + _.scrollTop - b.y,
                width: g.width,
                height: g.height,
              };
            })(l, floating_ui_dom_browser_min_T(c), u),
            floating: { ...floating_ui_dom_browser_min_W(c), x: 0, y: 0 },
          };
        },
        getClientRects: (o) => Array.from(o.getClientRects()),
        isRTL: (o) => "rtl" === floating_ui_dom_browser_min_i(o).direction,
      };
      function floating_ui_dom_browser_min_N(o, l, c, u) {
        void 0 === u && (u = {});
        let {
            ancestorScroll: h = !0,
            ancestorResize: g = !0,
            elementResize: _ = !0,
            animationFrame: b = !1,
          } = u,
          y = h && !b,
          w = g && !b,
          T =
            y || w
              ? [
                  ...(floating_ui_dom_browser_min_f(o)
                    ? floating_ui_dom_browser_min_H(o)
                    : []),
                  ...floating_ui_dom_browser_min_H(l),
                ]
              : [];
        T.forEach((o) => {
          y && o.addEventListener("scroll", c, { passive: !0 }),
            w && o.addEventListener("resize", c);
        });
        let A,
          I = null;
        if (_) {
          let u = !0;
          (I = new ResizeObserver(() => {
            u || c(), (u = !1);
          })),
            floating_ui_dom_browser_min_f(o) && !b && I.observe(o),
            I.observe(l);
        }
        let N = b ? floating_ui_dom_browser_min_w(o) : null;
        return (
          b &&
            (function e() {
              let l = floating_ui_dom_browser_min_w(o);
              N &&
                (l.x !== N.x ||
                  l.y !== N.y ||
                  l.width !== N.width ||
                  l.height !== N.height) &&
                c(),
                (N = l),
                (A = requestAnimationFrame(e));
            })(),
          c(),
          () => {
            var o;
            T.forEach((o) => {
              y && o.removeEventListener("scroll", c),
                w && o.removeEventListener("resize", c);
            }),
              null == (o = I) || o.disconnect(),
              (I = null),
              b && cancelAnimationFrame(A);
          }
        );
      }
      let floating_ui_dom_browser_min_z = (o, l, c) =>
        floating_ui_core_browser_min_o(o, l, { platform: eZ, ...c });
      var eJ = "undefined" != typeof document ? y.useLayoutEffect : y.useEffect;
      let floating_ui_react_dom_esm_arrow = (o) => {
          let { element: l, padding: c } = o;
          return {
            name: "arrow",
            options: o,
            fn(o) {
              if (Object.prototype.hasOwnProperty.call(l, "current")) {
                if (null != l.current)
                  return floating_ui_core_browser_min_m({
                    element: l.current,
                    padding: c,
                  }).fn(o);
              } else if (l)
                return floating_ui_core_browser_min_m({
                  element: l,
                  padding: c,
                }).fn(o);
              return {};
            },
          };
        },
        eQ = (0, y.forwardRef)((o, l) => {
          let { children: c, width: u = 10, height: h = 5, ...g } = o;
          return (0, y.createElement)(
            eL.svg,
            _extends({}, g, {
              ref: l,
              width: u,
              height: h,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            o.asChild
              ? c
              : (0, y.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        e0 = "Popper",
        [e1, e2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(e0),
        [e8, e9] = e1(e0),
        e6 = (0, y.forwardRef)((o, l) => {
          let { __scopePopper: c, virtualRef: u, ...h } = o,
            g = e9("PopperAnchor", c),
            _ = (0, y.useRef)(null),
            b = index_module_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(l, _);
          return (
            (0, y.useEffect)(() => {
              g.onAnchorChange((null == u ? void 0 : u.current) || _.current);
            }),
            u ? null : (0, y.createElement)(eL.div, _extends({}, h, { ref: b }))
          );
        }),
        e3 = "PopperContent",
        [e5, e4] = e1(e3),
        [e7, te] = e1(e3, { hasParent: !1, positionUpdateFns: new Set() }),
        tt = (0, y.forwardRef)((o, l) => {
          var c, u, h, g, _, w, T, A, I, N, W, B, F;
          let {
              __scopePopper: H,
              side: U = "bottom",
              sideOffset: K = 0,
              align: G = "center",
              alignOffset: Y = 0,
              arrowPadding: q = 0,
              collisionBoundary: X = [],
              collisionPadding: Z = 0,
              sticky: Q = "partial",
              hideWhenDetached: ee = !1,
              avoidCollisions: et = !0,
              onPlaced: er,
              ...en
            } = o,
            eo = e9(e3, H),
            [ei, ea] = (0, y.useState)(null),
            el = index_module_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(
              l,
              (o) => ea(o)
            ),
            [es, ec] = (0, y.useState)(null),
            eu = (function (o) {
              let [l, c] = (0, y.useState)(void 0);
              return (
                eW(() => {
                  if (o) {
                    c({ width: o.offsetWidth, height: o.offsetHeight });
                    let l = new ResizeObserver((l) => {
                      let u, h;
                      if (!Array.isArray(l) || !l.length) return;
                      let g = l[0];
                      if ("borderBoxSize" in g) {
                        let o = g.borderBoxSize,
                          l = Array.isArray(o) ? o[0] : o;
                        (u = l.inlineSize), (h = l.blockSize);
                      } else (u = o.offsetWidth), (h = o.offsetHeight);
                      c({ width: u, height: h });
                    });
                    return (
                      l.observe(o, { box: "border-box" }), () => l.unobserve(o)
                    );
                  }
                  c(void 0);
                }, [o]),
                l
              );
            })(es),
            ed =
              null !== (c = null == eu ? void 0 : eu.width) && void 0 !== c
                ? c
                : 0,
            ef =
              null !== (u = null == eu ? void 0 : eu.height) && void 0 !== u
                ? u
                : 0,
            ep =
              "number" == typeof Z
                ? Z
                : { top: 0, right: 0, bottom: 0, left: 0, ...Z },
            eh = Array.isArray(X) ? X : [X],
            eg = eh.length > 0,
            em = {
              padding: ep,
              boundary: eh.filter($cf1ac5d9fe0e8206$var$isNotNull),
              altBoundary: eg,
            },
            {
              reference: e_,
              floating: eb,
              strategy: ev,
              x: ey,
              y: ew,
              placement: ex,
              middlewareData: eE,
              update: eS,
            } = (function (o) {
              let {
                  middleware: l,
                  placement: c = "bottom",
                  strategy: u = "absolute",
                  whileElementsMounted: h,
                } = void 0 === o ? {} : o,
                g = y.useRef(null),
                _ = y.useRef(null),
                w = (function (o) {
                  let l = y.useRef(o);
                  return (
                    eJ(() => {
                      l.current = o;
                    }),
                    l
                  );
                })(h),
                T = y.useRef(null),
                [A, I] = y.useState({
                  x: null,
                  y: null,
                  strategy: u,
                  placement: c,
                  middlewareData: {},
                }),
                [N, W] = y.useState(l);
              !(function deepEqual(o, l) {
                let c, u, h;
                if (o === l) return !0;
                if (typeof o != typeof l) return !1;
                if ("function" == typeof o && o.toString() === l.toString())
                  return !0;
                if (o && l && "object" == typeof o) {
                  if (Array.isArray(o)) {
                    if ((c = o.length) != l.length) return !1;
                    for (u = c; 0 != u--; )
                      if (!deepEqual(o[u], l[u])) return !1;
                    return !0;
                  }
                  if (
                    (c = (h = Object.keys(o)).length) !== Object.keys(l).length
                  )
                    return !1;
                  for (u = c; 0 != u--; )
                    if (!Object.prototype.hasOwnProperty.call(l, h[u]))
                      return !1;
                  for (u = c; 0 != u--; ) {
                    let c = h[u];
                    if (
                      ("_owner" !== c || !o.$$typeof) &&
                      !deepEqual(o[c], l[c])
                    )
                      return !1;
                  }
                  return !0;
                }
                return o != o && l != l;
              })(
                null == N
                  ? void 0
                  : N.map((o) => {
                      let { options: l } = o;
                      return l;
                    }),
                null == l
                  ? void 0
                  : l.map((o) => {
                      let { options: l } = o;
                      return l;
                    })
              ) && W(l);
              let B = y.useCallback(() => {
                g.current &&
                  _.current &&
                  floating_ui_dom_browser_min_z(g.current, _.current, {
                    middleware: N,
                    placement: c,
                    strategy: u,
                  }).then((o) => {
                    F.current &&
                      b.flushSync(() => {
                        I(o);
                      });
                  });
              }, [N, c, u]);
              eJ(() => {
                F.current && B();
              }, [B]);
              let F = y.useRef(!1);
              eJ(
                () => (
                  (F.current = !0),
                  () => {
                    F.current = !1;
                  }
                ),
                []
              );
              let H = y.useCallback(() => {
                  if (
                    ("function" == typeof T.current &&
                      (T.current(), (T.current = null)),
                    g.current && _.current)
                  ) {
                    if (w.current) {
                      let o = w.current(g.current, _.current, B);
                      T.current = o;
                    } else B();
                  }
                }, [B, w]),
                U = y.useCallback(
                  (o) => {
                    (g.current = o), H();
                  },
                  [H]
                ),
                K = y.useCallback(
                  (o) => {
                    (_.current = o), H();
                  },
                  [H]
                ),
                G = y.useMemo(() => ({ reference: g, floating: _ }), []);
              return y.useMemo(
                () => ({ ...A, update: B, refs: G, reference: U, floating: K }),
                [A, B, G, U, K]
              );
            })({
              strategy: "fixed",
              placement: U + ("center" !== G ? "-" + G : ""),
              whileElementsMounted: floating_ui_dom_browser_min_N,
              middleware: [
                $cf1ac5d9fe0e8206$var$anchorCssProperties(),
                {
                  name: "offset",
                  options: (I = { mainAxis: K + ef, alignmentAxis: Y }),
                  async fn(o) {
                    let { x: l, y: c } = o,
                      u = await (async function (o, l) {
                        let { placement: c, platform: u, elements: h } = o,
                          g = await (null == u.isRTL
                            ? void 0
                            : u.isRTL(h.floating)),
                          _ = floating_ui_core_browser_min_t(c),
                          b = floating_ui_core_browser_min_e(c),
                          y = "x" === floating_ui_core_browser_min_n(c),
                          w = ["left", "top"].includes(_) ? -1 : 1,
                          T = g && y ? -1 : 1,
                          A = "function" == typeof l ? l(o) : l,
                          {
                            mainAxis: I,
                            crossAxis: N,
                            alignmentAxis: W,
                          } = "number" == typeof A
                            ? { mainAxis: A, crossAxis: 0, alignmentAxis: null }
                            : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...A,
                              };
                        return (
                          b &&
                            "number" == typeof W &&
                            (N = "end" === b ? -1 * W : W),
                          y ? { x: N * T, y: I * w } : { x: I * w, y: N * T }
                        );
                      })(o, I);
                    return { x: l + u.x, y: c + u.y, data: u };
                  },
                },
                et
                  ? {
                      name: "shift",
                      options: (W = {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter:
                          "partial" === Q
                            ? (void 0 === N && (N = {}),
                              {
                                options: N,
                                fn(o) {
                                  let {
                                      x: l,
                                      y: c,
                                      placement: u,
                                      rects: h,
                                      middlewareData: g,
                                    } = o,
                                    {
                                      offset: _ = 0,
                                      mainAxis: b = !0,
                                      crossAxis: y = !0,
                                    } = N,
                                    w = { x: l, y: c },
                                    T = floating_ui_core_browser_min_n(u),
                                    A = floating_ui_core_browser_min_O(T),
                                    I = w[T],
                                    W = w[A],
                                    B =
                                      "function" == typeof _
                                        ? _({ ...h, placement: u })
                                        : _,
                                    F =
                                      "number" == typeof B
                                        ? { mainAxis: B, crossAxis: 0 }
                                        : { mainAxis: 0, crossAxis: 0, ...B };
                                  if (b) {
                                    let o = "y" === T ? "height" : "width",
                                      l =
                                        h.reference[T] -
                                        h.floating[o] +
                                        F.mainAxis,
                                      c =
                                        h.reference[T] +
                                        h.reference[o] -
                                        F.mainAxis;
                                    I < l ? (I = l) : I > c && (I = c);
                                  }
                                  if (y) {
                                    var H, U, K, G;
                                    let o = "y" === T ? "width" : "height",
                                      l = ["top", "left"].includes(
                                        floating_ui_core_browser_min_t(u)
                                      ),
                                      c =
                                        h.reference[A] -
                                        h.floating[o] +
                                        (l &&
                                        null !=
                                          (H =
                                            null == (U = g.offset)
                                              ? void 0
                                              : U[A])
                                          ? H
                                          : 0) +
                                        (l ? 0 : F.crossAxis),
                                      _ =
                                        h.reference[A] +
                                        h.reference[o] +
                                        (l
                                          ? 0
                                          : null !=
                                            (K =
                                              null == (G = g.offset)
                                                ? void 0
                                                : G[A])
                                          ? K
                                          : 0) -
                                        (l ? F.crossAxis : 0);
                                    W < c ? (W = c) : W > _ && (W = _);
                                  }
                                  return { [T]: I, [A]: W };
                                },
                              })
                            : void 0,
                        ...em,
                      }),
                      async fn(o) {
                        let { x: l, y: c, placement: u } = o,
                          {
                            mainAxis: h = !0,
                            crossAxis: g = !1,
                            limiter: _ = {
                              fn: (o) => {
                                let { x: l, y: c } = o;
                                return { x: l, y: c };
                              },
                            },
                            ...b
                          } = W,
                          y = { x: l, y: c },
                          w = await floating_ui_core_browser_min_s(o, b),
                          T = floating_ui_core_browser_min_n(
                            floating_ui_core_browser_min_t(u)
                          ),
                          A = floating_ui_core_browser_min_O(T),
                          I = y[T],
                          N = y[A];
                        if (h) {
                          let o = "y" === T ? "bottom" : "right";
                          I = eV(
                            I + w["y" === T ? "top" : "left"],
                            eH(I, I - w[o])
                          );
                        }
                        g &&
                          (N = eV(
                            N + w["y" === A ? "top" : "left"],
                            eH(N, N - w["y" === A ? "bottom" : "right"])
                          ));
                        let B = _.fn({ ...o, [T]: I, [A]: N });
                        return { ...B, data: { x: B.x - l, y: B.y - c } };
                      },
                    }
                  : void 0,
                es
                  ? floating_ui_react_dom_esm_arrow({ element: es, padding: q })
                  : void 0,
                et
                  ? {
                      name: "flip",
                      options: (B = { ...em }),
                      async fn(o) {
                        var l, c, u, h;
                        let {
                            placement: g,
                            middlewareData: _,
                            rects: b,
                            initialPlacement: y,
                            platform: w,
                            elements: T,
                          } = o,
                          {
                            mainAxis: A = !0,
                            crossAxis: I = !0,
                            fallbackPlacements: N,
                            fallbackStrategy: W = "bestFit",
                            flipAlignment: F = !0,
                            ...H
                          } = B,
                          U = floating_ui_core_browser_min_t(g),
                          K =
                            N ||
                            (U !== y && F
                              ? (function (o) {
                                  let l = floating_ui_core_browser_min_d(o);
                                  return [
                                    floating_ui_core_browser_min_y(o),
                                    l,
                                    floating_ui_core_browser_min_y(l),
                                  ];
                                })(y)
                              : [floating_ui_core_browser_min_d(y)]),
                          G = [y, ...K],
                          Y = await floating_ui_core_browser_min_s(o, H),
                          q = [],
                          X =
                            (null == (l = _.flip) ? void 0 : l.overflows) || [];
                        if ((A && q.push(Y[U]), I)) {
                          let { main: o, cross: l } = (function (o, l, c) {
                            void 0 === c && (c = !1);
                            let u = floating_ui_core_browser_min_e(o),
                              h = floating_ui_core_browser_min_n(o),
                              g = floating_ui_core_browser_min_r(h),
                              _ =
                                "x" === h
                                  ? u === (c ? "end" : "start")
                                    ? "right"
                                    : "left"
                                  : "start" === u
                                  ? "bottom"
                                  : "top";
                            return (
                              l.reference[g] > l.floating[g] &&
                                (_ = floating_ui_core_browser_min_d(_)),
                              {
                                main: _,
                                cross: floating_ui_core_browser_min_d(_),
                              }
                            );
                          })(
                            g,
                            b,
                            await (null == w.isRTL
                              ? void 0
                              : w.isRTL(T.floating))
                          );
                          q.push(Y[o], Y[l]);
                        }
                        if (
                          ((X = [...X, { placement: g, overflows: q }]),
                          !q.every((o) => o <= 0))
                        ) {
                          let o =
                              (null !=
                              (c = null == (u = _.flip) ? void 0 : u.index)
                                ? c
                                : 0) + 1,
                            l = G[o];
                          if (l)
                            return {
                              data: { index: o, overflows: X },
                              reset: { placement: l },
                            };
                          let b = "bottom";
                          switch (W) {
                            case "bestFit": {
                              let o =
                                null ==
                                (h = X.map((o) => [
                                  o,
                                  o.overflows
                                    .filter((o) => o > 0)
                                    .reduce((o, l) => o + l, 0),
                                ]).sort((o, l) => o[1] - l[1])[0])
                                  ? void 0
                                  : h[0].placement;
                              o && (b = o);
                              break;
                            }
                            case "initialPlacement":
                              b = y;
                          }
                          if (g !== b) return { reset: { placement: b } };
                        }
                        return {};
                      },
                    }
                  : void 0,
                {
                  name: "size",
                  options: (F = {
                    ...em,
                    apply: ({
                      elements: o,
                      availableWidth: l,
                      availableHeight: c,
                    }) => {
                      o.floating.style.setProperty(
                        "--radix-popper-available-width",
                        `${l}px`
                      ),
                        o.floating.style.setProperty(
                          "--radix-popper-available-height",
                          `${c}px`
                        );
                    },
                  }),
                  async fn(o) {
                    let l, c;
                    let {
                        placement: u,
                        rects: h,
                        platform: g,
                        elements: _,
                      } = o,
                      { apply: b, ...y } = F,
                      w = await floating_ui_core_browser_min_s(o, y),
                      T = floating_ui_core_browser_min_t(u),
                      A = floating_ui_core_browser_min_e(u);
                    "top" === T || "bottom" === T
                      ? ((l = T),
                        (c =
                          A ===
                          ((await (null == g.isRTL
                            ? void 0
                            : g.isRTL(_.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((c = T), (l = "end" === A ? "top" : "bottom"));
                    let I = eV(w.left, 0),
                      N = eV(w.right, 0),
                      W = eV(w.top, 0),
                      B = eV(w.bottom, 0),
                      H = {
                        availableHeight:
                          h.floating.height -
                          (["left", "right"].includes(u)
                            ? 2 *
                              (0 !== W || 0 !== B ? W + B : eV(w.top, w.bottom))
                            : w[l]),
                        availableWidth:
                          h.floating.width -
                          (["top", "bottom"].includes(u)
                            ? 2 *
                              (0 !== I || 0 !== N ? I + N : eV(w.left, w.right))
                            : w[c]),
                      },
                      U = await g.getDimensions(_.floating);
                    null == b || b({ ...o, ...H });
                    let K = await g.getDimensions(_.floating);
                    return U.width !== K.width || U.height !== K.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                $cf1ac5d9fe0e8206$var$transformOrigin({
                  arrowWidth: ed,
                  arrowHeight: ef,
                }),
                ee
                  ? floating_ui_core_browser_min_P({
                      strategy: "referenceHidden",
                    })
                  : void 0,
              ].filter($cf1ac5d9fe0e8206$var$isDefined),
            });
          eW(() => {
            e_(eo.anchor);
          }, [e_, eo.anchor]);
          let e$ = null !== ey && null !== ew,
            [ek, eC] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(ex),
            eO = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(er);
          eW(() => {
            e$ && (null == eO || eO());
          }, [e$, eO]);
          let ej = null === (h = eE.arrow) || void 0 === h ? void 0 : h.x,
            eT = null === (g = eE.arrow) || void 0 === g ? void 0 : g.y,
            eR =
              (null === (_ = eE.arrow) || void 0 === _
                ? void 0
                : _.centerOffset) !== 0,
            [eP, eD] = (0, y.useState)();
          eW(() => {
            ei && eD(window.getComputedStyle(ei).zIndex);
          }, [ei]);
          let { hasParent: eA, positionUpdateFns: eI } = te(e3, H),
            eM = !eA;
          (0, y.useLayoutEffect)(() => {
            if (!eM)
              return (
                eI.add(eS),
                () => {
                  eI.delete(eS);
                }
              );
          }, [eM, eI, eS]),
            eW(() => {
              eM &&
                e$ &&
                Array.from(eI)
                  .reverse()
                  .forEach((o) => requestAnimationFrame(o));
            }, [eM, e$, eI]);
          let eN = {
            "data-side": ek,
            "data-align": eC,
            ...en,
            ref: el,
            style: {
              ...en.style,
              animation: e$ ? void 0 : "none",
              opacity:
                null !== (w = eE.hide) && void 0 !== w && w.referenceHidden
                  ? 0
                  : void 0,
            },
          };
          return (0, y.createElement)(
            "div",
            {
              ref: eb,
              "data-radix-popper-content-wrapper": "",
              style: {
                position: ev,
                left: 0,
                top: 0,
                transform: e$
                  ? `translate3d(${Math.round(ey)}px, ${Math.round(ew)}px, 0)`
                  : "translate3d(0, -200%, 0)",
                minWidth: "max-content",
                zIndex: eP,
                "--radix-popper-transform-origin": [
                  null === (T = eE.transformOrigin) || void 0 === T
                    ? void 0
                    : T.x,
                  null === (A = eE.transformOrigin) || void 0 === A
                    ? void 0
                    : A.y,
                ].join(" "),
              },
              dir: o.dir,
            },
            (0, y.createElement)(
              e5,
              {
                scope: H,
                placedSide: ek,
                onArrowChange: ec,
                arrowX: ej,
                arrowY: eT,
                shouldHideArrow: eR,
              },
              eM
                ? (0, y.createElement)(
                    e7,
                    { scope: H, hasParent: !0, positionUpdateFns: eI },
                    (0, y.createElement)(eL.div, eN)
                  )
                : (0, y.createElement)(eL.div, eN)
            )
          );
        }),
        tr = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tn = (0, y.forwardRef)(function (o, l) {
          let { __scopePopper: c, ...u } = o,
            h = e4("PopperArrow", c),
            g = tr[h.placedSide];
          return (0,
          y.createElement)("span", { ref: h.onArrowChange, style: { position: "absolute", left: h.arrowX, top: h.arrowY, [g]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[h.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[h.placedSide], visibility: h.shouldHideArrow ? "hidden" : void 0 } }, (0, y.createElement)(eQ, _extends({}, u, { ref: l, style: { ...u.style, display: "block" } })));
        });
      function $cf1ac5d9fe0e8206$var$isDefined(o) {
        return void 0 !== o;
      }
      function $cf1ac5d9fe0e8206$var$isNotNull(o) {
        return null !== o;
      }
      let $cf1ac5d9fe0e8206$var$anchorCssProperties = () => ({
          name: "anchorCssProperties",
          fn(o) {
            let { rects: l, elements: c } = o,
              { width: u, height: h } = l.reference;
            return (
              c.floating.style.setProperty(
                "--radix-popper-anchor-width",
                `${u}px`
              ),
              c.floating.style.setProperty(
                "--radix-popper-anchor-height",
                `${h}px`
              ),
              {}
            );
          },
        }),
        $cf1ac5d9fe0e8206$var$transformOrigin = (o) => ({
          name: "transformOrigin",
          options: o,
          fn(l) {
            var c, u, h, g, _;
            let { placement: b, rects: y, middlewareData: w } = l,
              T =
                (null === (c = w.arrow) || void 0 === c
                  ? void 0
                  : c.centerOffset) !== 0,
              A = T ? 0 : o.arrowWidth,
              I = T ? 0 : o.arrowHeight,
              [N, W] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(b),
              B = { start: "0%", center: "50%", end: "100%" }[W],
              F =
                (null !==
                  (u = null === (h = w.arrow) || void 0 === h ? void 0 : h.x) &&
                void 0 !== u
                  ? u
                  : 0) +
                A / 2,
              H =
                (null !==
                  (g = null === (_ = w.arrow) || void 0 === _ ? void 0 : _.y) &&
                void 0 !== g
                  ? g
                  : 0) +
                I / 2,
              U = "",
              K = "";
            return (
              "bottom" === N
                ? ((U = T ? B : `${F}px`), (K = `${-I}px`))
                : "top" === N
                ? ((U = T ? B : `${F}px`), (K = `${y.floating.height + I}px`))
                : "right" === N
                ? ((U = `${-I}px`), (K = T ? B : `${H}px`))
                : "left" === N &&
                  ((U = `${y.floating.width + I}px`), (K = T ? B : `${H}px`)),
              { data: { x: U, y: K } }
            );
          },
        });
      function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(o) {
        let [l, c = "center"] = o.split("-");
        return [l, c];
      }
      let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = (o) => {
          let { __scopePopper: l, children: c } = o,
            [u, h] = (0, y.useState)(null);
          return (0, y.createElement)(
            e8,
            { scope: l, anchor: u, onAnchorChange: h },
            c
          );
        },
        $921a889cee6df7e8$export$99c2b779aa4e8b8b = (o) => {
          let { present: l, children: c } = o,
            u = (function (o) {
              var l;
              let [c, u] = (0, y.useState)(),
                h = (0, y.useRef)({}),
                g = (0, y.useRef)(o),
                _ = (0, y.useRef)("none"),
                w = o ? "mounted" : "unmounted",
                [T, A] =
                  ((l = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  (0, y.useReducer)((o, c) => {
                    let u = l[o][c];
                    return null != u ? u : o;
                  }, w));
              return (
                (0, y.useEffect)(() => {
                  let o = $921a889cee6df7e8$var$getAnimationName(h.current);
                  _.current = "mounted" === T ? o : "none";
                }, [T]),
                eW(() => {
                  let l = h.current,
                    c = g.current,
                    u = c !== o;
                  if (u) {
                    let u = _.current,
                      h = $921a889cee6df7e8$var$getAnimationName(l);
                    o
                      ? A("MOUNT")
                      : "none" === h ||
                        (null == l ? void 0 : l.display) === "none"
                      ? A("UNMOUNT")
                      : c && u !== h
                      ? A("ANIMATION_OUT")
                      : A("UNMOUNT"),
                      (g.current = o);
                  }
                }, [o, A]),
                eW(() => {
                  if (c) {
                    let handleAnimationEnd = (o) => {
                        let l = $921a889cee6df7e8$var$getAnimationName(
                            h.current
                          ),
                          u = l.includes(o.animationName);
                        o.target === c &&
                          u &&
                          (0, b.flushSync)(() => A("ANIMATION_END"));
                      },
                      handleAnimationStart = (o) => {
                        o.target === c &&
                          (_.current = $921a889cee6df7e8$var$getAnimationName(
                            h.current
                          ));
                      };
                    return (
                      c.addEventListener(
                        "animationstart",
                        handleAnimationStart
                      ),
                      c.addEventListener("animationcancel", handleAnimationEnd),
                      c.addEventListener("animationend", handleAnimationEnd),
                      () => {
                        c.removeEventListener(
                          "animationstart",
                          handleAnimationStart
                        ),
                          c.removeEventListener(
                            "animationcancel",
                            handleAnimationEnd
                          ),
                          c.removeEventListener(
                            "animationend",
                            handleAnimationEnd
                          );
                      }
                    );
                  }
                  A("ANIMATION_END");
                }, [c, A]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(T),
                  ref: (0, y.useCallback)((o) => {
                    o && (h.current = getComputedStyle(o)), u(o);
                  }, []),
                }
              );
            })(l),
            h =
              "function" == typeof c
                ? c({ present: u.isPresent })
                : y.Children.only(c),
            g = index_module_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(
              u.ref,
              h.ref
            ),
            _ = "function" == typeof c;
          return _ || u.isPresent ? (0, y.cloneElement)(h, { ref: g }) : null;
        };
      function $921a889cee6df7e8$var$getAnimationName(o) {
        return (null == o ? void 0 : o.animationName) || "none";
      }
      $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
      let to = (0, y.forwardRef)((o, l) =>
          (0, y.createElement)(
            eL.span,
            _extends({}, o, {
              ref: l,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...o.style,
              },
            })
          )
        ),
        [ti, ta] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [e2]),
        tl = e2(),
        ts = "tooltip.open",
        [tc, tu] = ti("TooltipProvider"),
        td = "Tooltip",
        [tf, tp] = ti(td),
        th = "TooltipTrigger",
        tg = (0, y.forwardRef)((o, l) => {
          let { __scopeTooltip: c, ...u } = o,
            h = tp(th, c),
            g = tu(th, c),
            _ = tl(c),
            b = (0, y.useRef)(null),
            w = index_module_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(
              l,
              b,
              h.onTriggerChange
            ),
            T = (0, y.useRef)(!1),
            A = (0, y.useRef)(!1),
            I = (0, y.useCallback)(() => (T.current = !1), []);
          return (
            (0, y.useEffect)(
              () => () => document.removeEventListener("pointerup", I),
              [I]
            ),
            (0, y.createElement)(
              e6,
              _extends({ asChild: !0 }, _),
              (0, y.createElement)(
                eL.button,
                _extends(
                  {
                    "aria-describedby": h.open ? h.contentId : void 0,
                    "data-state": h.stateAttribute,
                  },
                  u,
                  {
                    ref: w,
                    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      o.onPointerMove,
                      (o) => {
                        "touch" === o.pointerType ||
                          A.current ||
                          g.isPointerInTransitRef.current ||
                          (h.onTriggerEnter(), (A.current = !0));
                      }
                    ),
                    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      o.onPointerLeave,
                      () => {
                        h.onTriggerLeave(), (A.current = !1);
                      }
                    ),
                    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      o.onPointerDown,
                      () => {
                        (T.current = !0),
                          document.addEventListener("pointerup", I, {
                            once: !0,
                          });
                      }
                    ),
                    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      o.onFocus,
                      () => {
                        T.current || h.onOpen();
                      }
                    ),
                    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      o.onBlur,
                      h.onClose
                    ),
                    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      o.onClick,
                      h.onClose
                    ),
                  }
                )
              )
            )
          );
        }),
        [tm, t_] = ti("TooltipPortal", { forceMount: void 0 }),
        tb = "TooltipContent",
        tv = (0, y.forwardRef)((o, l) => {
          let c = t_(tb, o.__scopeTooltip),
            { forceMount: u = c.forceMount, side: h = "top", ...g } = o,
            _ = tp(tb, o.__scopeTooltip);
          return (0, y.createElement)(
            $921a889cee6df7e8$export$99c2b779aa4e8b8b,
            { present: u || _.open },
            _.disableHoverableContent
              ? (0, y.createElement)(tE, _extends({ side: h }, g, { ref: l }))
              : (0, y.createElement)(ty, _extends({ side: h }, g, { ref: l }))
          );
        }),
        ty = (0, y.forwardRef)((o, l) => {
          let c = tp(tb, o.__scopeTooltip),
            u = tu(tb, o.__scopeTooltip),
            h = (0, y.useRef)(null),
            g = index_module_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(l, h),
            [_, b] = (0, y.useState)(null),
            { trigger: w, onClose: T } = c,
            A = h.current,
            { onPointerInTransitChange: I } = u,
            N = (0, y.useCallback)(() => {
              b(null), I(!1);
            }, [I]),
            W = (0, y.useCallback)(
              (o, l) => {
                let c = o.currentTarget,
                  u = { x: o.clientX, y: o.clientY },
                  h = (function (o, l) {
                    let c = Math.abs(l.top - o.y),
                      u = Math.abs(l.bottom - o.y),
                      h = Math.abs(l.right - o.x),
                      g = Math.abs(l.left - o.x);
                    switch (Math.min(c, u, h, g)) {
                      case g:
                        return "left";
                      case h:
                        return "right";
                      case c:
                        return "top";
                      case u:
                        return "bottom";
                      default:
                        return null;
                    }
                  })(u, c.getBoundingClientRect()),
                  g = "right" === h || "bottom" === h ? -5 : 5,
                  _ =
                    "right" === h || "left" === h
                      ? { x: o.clientX + g, y: o.clientY }
                      : { x: o.clientX, y: o.clientY + g },
                  y = (function (o) {
                    let { top: l, right: c, bottom: u, left: h } = o;
                    return [
                      { x: h, y: l },
                      { x: c, y: l },
                      { x: c, y: u },
                      { x: h, y: u },
                    ];
                  })(l.getBoundingClientRect()),
                  w = (function (o) {
                    let l = o.slice();
                    return (
                      l.sort((o, l) =>
                        o.x < l.x
                          ? -1
                          : o.x > l.x
                          ? 1
                          : o.y < l.y
                          ? -1
                          : o.y > l.y
                          ? 1
                          : 0
                      ),
                      (function (o) {
                        if (o.length <= 1) return o.slice();
                        let l = [];
                        for (let c = 0; c < o.length; c++) {
                          let u = o[c];
                          for (; l.length >= 2; ) {
                            let o = l[l.length - 1],
                              c = l[l.length - 2];
                            if (
                              (o.x - c.x) * (u.y - c.y) >=
                              (o.y - c.y) * (u.x - c.x)
                            )
                              l.pop();
                            else break;
                          }
                          l.push(u);
                        }
                        l.pop();
                        let c = [];
                        for (let l = o.length - 1; l >= 0; l--) {
                          let u = o[l];
                          for (; c.length >= 2; ) {
                            let o = c[c.length - 1],
                              l = c[c.length - 2];
                            if (
                              (o.x - l.x) * (u.y - l.y) >=
                              (o.y - l.y) * (u.x - l.x)
                            )
                              c.pop();
                            else break;
                          }
                          c.push(u);
                        }
                        return (c.pop(),
                        1 === l.length &&
                          1 === c.length &&
                          l[0].x === c[0].x &&
                          l[0].y === c[0].y)
                          ? l
                          : l.concat(c);
                      })(l)
                    );
                  })([_, ...y]);
                b(w), I(!0);
              },
              [I]
            );
          return (
            (0, y.useEffect)(() => () => N(), [N]),
            (0, y.useEffect)(() => {
              if (w && A) {
                let handleTriggerLeave = (o) => W(o, A),
                  handleContentLeave = (o) => W(o, w);
                return (
                  w.addEventListener("pointerleave", handleTriggerLeave),
                  A.addEventListener("pointerleave", handleContentLeave),
                  () => {
                    w.removeEventListener("pointerleave", handleTriggerLeave),
                      A.removeEventListener("pointerleave", handleContentLeave);
                  }
                );
              }
            }, [w, A, W, N]),
            (0, y.useEffect)(() => {
              if (_) {
                let handleTrackPointerGrace = (o) => {
                  let l = o.target,
                    c = { x: o.clientX, y: o.clientY },
                    u =
                      (null == w ? void 0 : w.contains(l)) ||
                      (null == A ? void 0 : A.contains(l)),
                    h = !(function (o, l) {
                      let { x: c, y: u } = o,
                        h = !1;
                      for (let o = 0, g = l.length - 1; o < l.length; g = o++) {
                        let _ = l[o].x,
                          b = l[o].y,
                          y = l[g].x,
                          w = l[g].y,
                          T =
                            b > u != w > u &&
                            c < ((y - _) * (u - b)) / (w - b) + _;
                        T && (h = !h);
                      }
                      return h;
                    })(c, _);
                  u ? N() : h && (N(), T());
                };
                return (
                  document.addEventListener(
                    "pointermove",
                    handleTrackPointerGrace
                  ),
                  () =>
                    document.removeEventListener(
                      "pointermove",
                      handleTrackPointerGrace
                    )
                );
              }
            }, [w, A, _, T, N]),
            (0, y.createElement)(tE, _extends({}, o, { ref: g }))
          );
        }),
        [tw, tx] = ti(td, { isInside: !1 }),
        tE = (0, y.forwardRef)((o, l) => {
          let {
              __scopeTooltip: c,
              children: u,
              "aria-label": h,
              onEscapeKeyDown: g,
              onPointerDownOutside: _,
              ...b
            } = o,
            w = tp(tb, c),
            T = tl(c),
            { onClose: A } = w;
          return (
            (0, y.useEffect)(
              () => (
                document.addEventListener(ts, A),
                () => document.removeEventListener(ts, A)
              ),
              [A]
            ),
            (0, y.useEffect)(() => {
              if (w.trigger) {
                let handleScroll = (o) => {
                  let l = o.target;
                  null != l && l.contains(w.trigger) && A();
                };
                return (
                  window.addEventListener("scroll", handleScroll, {
                    capture: !0,
                  }),
                  () =>
                    window.removeEventListener("scroll", handleScroll, {
                      capture: !0,
                    })
                );
              }
            }, [w.trigger, A]),
            (0, y.createElement)(
              ez,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: g,
                onPointerDownOutside: _,
                onFocusOutside: (o) => o.preventDefault(),
                onDismiss: A,
              },
              (0, y.createElement)(
                tt,
                _extends({ "data-state": w.stateAttribute }, T, b, {
                  ref: l,
                  style: {
                    ...b.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, y.createElement)(
                  index_module_$5e63c961fc1ce211$export$d9f1ccf0bdb05d45,
                  null,
                  u
                ),
                (0, y.createElement)(
                  tw,
                  { scope: c, isInside: !0 },
                  (0, y.createElement)(
                    to,
                    { id: w.contentId, role: "tooltip" },
                    h || u
                  )
                )
              )
            )
          );
        }),
        tS = (0, y.forwardRef)((o, l) => {
          let { __scopeTooltip: c, ...u } = o,
            h = tl(c),
            g = tx("TooltipArrow", c);
          return g.isInside
            ? null
            : (0, y.createElement)(tn, _extends({}, h, u, { ref: l }));
        }),
        $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = (o) => {
          let {
              __scopeTooltip: l,
              children: c,
              open: u,
              defaultOpen: h = !1,
              onOpenChange: g,
              disableHoverableContent: _,
              delayDuration: b,
            } = o,
            w = tu(td, o.__scopeTooltip),
            T = tl(l),
            [A, I] = (0, y.useState)(null),
            N = (function (o) {
              let [l, c] = y.useState(eB());
              return (
                eW(() => {
                  o || c((o) => (null != o ? o : String(eF++)));
                }, [o]),
                o || (l ? `radix-${l}` : "")
              );
            })(),
            W = (0, y.useRef)(0),
            B = null != _ ? _ : w.disableHoverableContent,
            F = null != b ? b : w.delayDuration,
            H = (0, y.useRef)(!1),
            [U = !1, K] = (function ({
              prop: o,
              defaultProp: l,
              onChange: c = () => {},
            }) {
              let [u, h] = (function ({ defaultProp: o, onChange: l }) {
                  let c = (0, y.useState)(o),
                    [u] = c,
                    h = (0, y.useRef)(u),
                    g = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(l);
                  return (
                    (0, y.useEffect)(() => {
                      h.current !== u && (g(u), (h.current = u));
                    }, [u, h, g]),
                    c
                  );
                })({ defaultProp: l, onChange: c }),
                g = void 0 !== o,
                _ = g ? o : u,
                b = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(c),
                w = (0, y.useCallback)(
                  (l) => {
                    if (g) {
                      let c = "function" == typeof l ? l(o) : l;
                      c !== o && b(c);
                    } else h(l);
                  },
                  [g, o, h, b]
                );
              return [_, w];
            })({
              prop: u,
              defaultProp: h,
              onChange: (o) => {
                o
                  ? (w.onOpen(), document.dispatchEvent(new CustomEvent(ts)))
                  : w.onClose(),
                  null == g || g(o);
              },
            }),
            G = (0, y.useMemo)(
              () =>
                U ? (H.current ? "delayed-open" : "instant-open") : "closed",
              [U]
            ),
            Y = (0, y.useCallback)(() => {
              window.clearTimeout(W.current), (H.current = !1), K(!0);
            }, [K]),
            q = (0, y.useCallback)(() => {
              window.clearTimeout(W.current), K(!1);
            }, [K]),
            X = (0, y.useCallback)(() => {
              window.clearTimeout(W.current),
                (W.current = window.setTimeout(() => {
                  (H.current = !0), K(!0);
                }, F));
            }, [F, K]);
          return (
            (0, y.useEffect)(() => () => window.clearTimeout(W.current), []),
            (0, y.createElement)(
              $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
              T,
              (0, y.createElement)(
                tf,
                {
                  scope: l,
                  contentId: N,
                  open: U,
                  stateAttribute: G,
                  trigger: A,
                  onTriggerChange: I,
                  onTriggerEnter: (0, y.useCallback)(() => {
                    w.isOpenDelayed ? X() : Y();
                  }, [w.isOpenDelayed, X, Y]),
                  onTriggerLeave: (0, y.useCallback)(() => {
                    B ? q() : window.clearTimeout(W.current);
                  }, [q, B]),
                  onOpen: Y,
                  onClose: q,
                  disableHoverableContent: B,
                },
                c
              )
            )
          );
        };
      function vector_plugin_6f82aee9_esm_objectWithoutProperties(o, l) {
        if (null == o) return {};
        var c,
          u,
          h = (function (o, l) {
            if (null == o) return {};
            var c,
              u,
              h = {},
              g = Object.keys(o);
            for (u = 0; u < g.length; u++)
              (c = g[u]), l.indexOf(c) >= 0 || (h[c] = o[c]);
            return h;
          })(o, l);
        if (Object.getOwnPropertySymbols) {
          var g = Object.getOwnPropertySymbols(o);
          for (u = 0; u < g.length; u++)
            (c = g[u]),
              !(l.indexOf(c) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(o, c) &&
                (h[c] = o[c]);
        }
        return h;
      }
      ((r0 = h || (h = {}))[(r0.UNSUPPORTED_INPUT = 0)] = "UNSUPPORTED_INPUT"),
        (r0[(r0.NO_COMPONENT_FOR_TYPE = 1)] = "NO_COMPONENT_FOR_TYPE"),
        (r0[(r0.UNKNOWN_INPUT = 2)] = "UNKNOWN_INPUT"),
        (r0[(r0.DUPLICATE_KEYS = 3)] = "DUPLICATE_KEYS"),
        (r0[(r0.ALREADY_REGISTERED_TYPE = 4)] = "ALREADY_REGISTERED_TYPE"),
        (r0[(r0.CLIPBOARD_ERROR = 5)] = "CLIPBOARD_ERROR"),
        (r0[(r0.THEME_ERROR = 6)] = "THEME_ERROR"),
        (r0[(r0.PATH_DOESNT_EXIST = 7)] = "PATH_DOESNT_EXIST"),
        (r0[(r0.INPUT_TYPE_OVERRIDE = 8)] = "INPUT_TYPE_OVERRIDE"),
        (r0[(r0.EMPTY_KEY = 9)] = "EMPTY_KEY");
      let t$ = {
        [h.UNSUPPORTED_INPUT]: (o, l) => [
          `An input with type \`${o}\` input was found at path \`${l}\` but it's not supported yet.`,
        ],
        [h.NO_COMPONENT_FOR_TYPE]: (o, l) => [
          `Type \`${o}\` found at path \`${l}\` can't be displayed in panel because no component supports it yet.`,
        ],
        [h.UNKNOWN_INPUT]: (o, l) => [
          `input at path \`${o}\` is not recognized.`,
          l,
        ],
        [h.DUPLICATE_KEYS]: (o, l, c) => [
          `Key \`${o}\` of path \`${l}\` already exists at path \`${c}\`. Even nested keys need to be unique. Rename one of the keys.`,
        ],
        [h.ALREADY_REGISTERED_TYPE]: (o) => [
          `Type ${o} has already been registered. You can't register a component with the same type.`,
        ],
        [h.CLIPBOARD_ERROR]: (o) => ["Error copying the value", o],
        [h.THEME_ERROR]: (o, l) => [
          `Error accessing the theme \`${o}.${l}\` value.`,
        ],
        [h.PATH_DOESNT_EXIST]: (o) => [
          `Error getting the value at path \`${o}\`. There is probably an error in your \`render\` function.`,
        ],
        [h.PATH_DOESNT_EXIST]: (o) => [
          `Error accessing the value at path \`${o}\``,
        ],
        [h.INPUT_TYPE_OVERRIDE]: (o, l, c) => [
          `Input at path \`${o}\` already exists with type: \`${l}\`. Its type cannot be overridden with type \`${c}\`.`,
        ],
        [h.EMPTY_KEY]: () => [
          "Keys can not be empty, if you want to hide a label use whitespace.",
        ],
      };
      function _log(o, l, ...c) {
        let [u, ...h] = t$[l](...c);
        console[o]("LEVA: " + u, ...h);
      }
      let tk = _log.bind(null, "warn"),
        tC = _log.bind(null, "log"),
        tO = ["value"],
        tj = ["schema"],
        tT = ["value"],
        tR = [],
        tP = {};
      function getValueType(o) {
        let { value: l } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, tO);
        for (let o of tR) {
          let u = o(l, c);
          if (u) return u;
        }
      }
      function register(o, l) {
        let { schema: c } = l,
          u = vector_plugin_6f82aee9_esm_objectWithoutProperties(l, tj);
        if (o in tP) {
          tk(h.ALREADY_REGISTERED_TYPE, o);
          return;
        }
        tR.push((l, u) => c(l, u) && o), (tP[o] = u);
      }
      function normalize$3(o, l, c, u) {
        let { normalize: h } = tP[o];
        if (h) return h(l, c, u);
        if ("object" != typeof l || !("value" in l)) return { value: l };
        let { value: g } = l,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(l, tT);
        return { value: g, settings: _ };
      }
      function format$2(o, l, c) {
        let { format: u } = tP[o];
        return u ? u(l, c) : l;
      }
      function vector_plugin_6f82aee9_esm_ownKeys(o, l) {
        var c = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(o);
          l &&
            (u = u.filter(function (l) {
              return Object.getOwnPropertyDescriptor(o, l).enumerable;
            })),
            c.push.apply(c, u);
        }
        return c;
      }
      function vector_plugin_6f82aee9_esm_objectSpread2(o) {
        for (var l = 1; l < arguments.length; l++) {
          var c = null != arguments[l] ? arguments[l] : {};
          l % 2
            ? vector_plugin_6f82aee9_esm_ownKeys(Object(c), !0).forEach(
                function (l) {
                  var u;
                  (u = c[l]),
                    l in o
                      ? Object.defineProperty(o, l, {
                          value: u,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[l] = u);
                }
              )
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
            : vector_plugin_6f82aee9_esm_ownKeys(Object(c)).forEach(function (
                l
              ) {
                Object.defineProperty(
                  o,
                  l,
                  Object.getOwnPropertyDescriptor(c, l)
                );
              });
        }
        return o;
      }
      let vector_plugin_6f82aee9_esm_clamp = (o, l, c) =>
          o > c ? c : o < l ? l : o,
        parseNumber = (o) => {
          if ("" === o || "number" == typeof o) return o;
          try {
            let l = (function evaluate(o) {
              if (isNaN(Number(o))) {
                if (tA.test(o)) {
                  let l = o.replace(tA, (o, l) => String(evaluate(l)));
                  return evaluate(l);
                }
                if (tI.test(o)) {
                  let l = o.replace(tI, (o, l, c) =>
                    String(Math.pow(Number(l), Number(c)))
                  );
                  return evaluate(l);
                }
                if (tL.test(o)) {
                  let l = o.replace(tL, (o, l, c) =>
                    String(Number(l) * Number(c))
                  );
                  return evaluate(l);
                }
                if (tM.test(o)) {
                  let l = o.replace(tM, (o, l, c) => {
                    if (0 != c) return String(Number(l) / Number(c));
                    throw Error("Division by zero");
                  });
                  return evaluate(l);
                } else if (tN.test(o)) {
                  let l = o.replace(tN, (o, l, c) =>
                    String(Number(l) + Number(c))
                  );
                  return evaluate(l);
                } else if (tz.test(o)) {
                  let l = o.replace(tz, (o, l, c) =>
                    String(Number(l) - Number(c))
                  );
                  return evaluate(l);
                }
              }
              return Number(o);
            })(o);
            if (!isNaN(l)) return l;
          } catch (o) {}
          return parseFloat(o);
        },
        tD = Math.log(10);
      function getStep(o) {
        let l = Math.abs(+String(o).replace(".", ""));
        if (0 === l) return 0.01;
        for (; 0 !== l && l % 10 == 0; ) l /= 10;
        let c = Math.floor(Math.log(l) / tD) + 1;
        return Math.max(
          Math.pow(10, Math.floor(Math.log10(Math.abs(o))) - c),
          0.001
        );
      }
      let range = (o, l, c) => {
          if (c === l) return 0;
          let u = vector_plugin_6f82aee9_esm_clamp(o, l, c);
          return (u - l) / (c - l);
        },
        invertedRange = (o, l, c) => o * (c - l) + l,
        getUid = () => "_" + Math.random().toString(36).substr(2, 9),
        tA = /\(([0-9+\-*/^ .]+)\)/,
        tI = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/,
        tL = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/,
        tM = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/,
        tN = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/,
        tz = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
      function isObject(o) {
        return "[object Object]" === Object.prototype.toString.call(o);
      }
      let isEmptyObject = (o) => isObject(o) && 0 === Object.keys(o).length;
      ((r1 = g || (g = {})).BUTTON = "BUTTON"),
        (r1.BUTTON_GROUP = "BUTTON_GROUP"),
        (r1.MONITOR = "MONITOR"),
        (r1.FOLDER = "FOLDER"),
        ((r2 = _ || (_ = {})).SELECT = "SELECT"),
        (r2.IMAGE = "IMAGE"),
        (r2.NUMBER = "NUMBER"),
        (r2.COLOR = "COLOR"),
        (r2.STRING = "STRING"),
        (r2.BOOLEAN = "BOOLEAN"),
        (r2.INTERVAL = "INTERVAL"),
        (r2.VECTOR3D = "VECTOR3D"),
        (r2.VECTOR2D = "VECTOR2D");
      let tW = ["type", "__customInput"],
        tB = [
          "render",
          "label",
          "optional",
          "order",
          "disabled",
          "hint",
          "onChange",
          "onEditStart",
          "onEditEnd",
          "transient",
        ],
        tF = ["type"];
      function updateInput(o, l, c, u, h) {
        let { value: g, type: _, settings: b } = o;
        (o.value = sanitizeValue({ type: _, value: g, settings: b }, l, c, u)),
          (o.fromPanel = h);
      }
      let ValueError = function (o, l, c) {
        (this.type = "LEVA_ERROR"),
          (this.message = "LEVA: " + o),
          (this.previousValue = l),
          (this.error = c);
      };
      function sanitizeValue({ type: o, value: l, settings: c }, u, h, g) {
        let _;
        let b = "SELECT" !== o && "function" == typeof u ? u(l) : u;
        try {
          _ = (function (o, l, c, u, h, g) {
            let { sanitize: _ } = tP[o];
            return _ ? _(l, c, u, h, g) : l;
          })(o, b, c, l, h, g);
        } catch (o) {
          throw new ValueError(
            `The value \`${u}\` did not result in a correct value.`,
            l,
            o
          );
        }
        return dequal(_, l) ? l : _;
      }
      let debounce = (o, l, c = !1) => {
          let u = 0;
          return function () {
            let h = arguments,
              g = c && !u,
              next = () => o.apply(this, h);
            window.clearTimeout(u),
              (u = window.setTimeout(next, l)),
              g && next();
          };
        },
        multiplyStep = (o) => (o.shiftKey ? 5 : o.altKey ? 0.2 : 1),
        tH = ["value"],
        tV = ["min", "max"],
        sanitize$3 = (o, { min: l = -1 / 0, max: c = 1 / 0, suffix: u }) => {
          let h = parseFloat(o);
          if ("" === o || isNaN(h)) throw Error("Invalid number");
          let g = vector_plugin_6f82aee9_esm_clamp(h, l, c);
          return u ? g + u : g;
        },
        normalize$2 = (o) => {
          let { value: l } = o,
            c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, tH),
            { min: u = -1 / 0, max: h = 1 / 0 } = c,
            g = vector_plugin_6f82aee9_esm_objectWithoutProperties(c, tV),
            _ = parseFloat(l),
            b = "string" == typeof l ? l.substring(("" + _).length) : void 0;
          _ = vector_plugin_6f82aee9_esm_clamp(_, u, h);
          let y = c.step;
          !y &&
            (Number.isFinite(u)
              ? (y = Number.isFinite(h)
                  ? +(Math.abs(h - u) / 100).toPrecision(1)
                  : +(Math.abs(_ - u) / 100).toPrecision(1))
              : Number.isFinite(h) &&
                (y = +(Math.abs(h - _) / 100).toPrecision(1)));
          let w = y ? 10 * getStep(y) : getStep(_);
          y = y || w / 10;
          let T = Math.round(
            vector_plugin_6f82aee9_esm_clamp(Math.log10(1 / w), 0, 2)
          );
          return {
            value: b ? _ + b : _,
            settings: vector_plugin_6f82aee9_esm_objectSpread2(
              { initialValue: _, step: y, pad: T, min: u, max: h, suffix: b },
              g
            ),
          };
        },
        sanitizeStep$1 = (o, { step: l, initialValue: c }) =>
          c + Math.round((o - c) / l) * l;
      var tU = Object.freeze({
        __proto__: null,
        schema: (o) => {
          if ("number" == typeof o) return !0;
          if ("string" == typeof o) {
            let l = parseFloat(o);
            if (isNaN(l)) return !1;
            let c = o.substring(("" + l).length).trim();
            return c.length < 4;
          }
          return !1;
        },
        sanitize: sanitize$3,
        format: (o, { pad: l = 0, suffix: c }) => {
          let u = parseFloat(o).toFixed(l);
          return c ? u + c : u;
        },
        normalize: normalize$2,
        sanitizeStep: sanitizeStep$1,
      });
      function vector_plugin_6f82aee9_esm_extends() {
        return (vector_plugin_6f82aee9_esm_extends = Object.assign
          ? Object.assign.bind()
          : function (o) {
              for (var l = 1; l < arguments.length; l++) {
                var c = arguments[l];
                for (var u in c)
                  Object.prototype.hasOwnProperty.call(c, u) && (o[u] = c[u]);
              }
              return o;
            }).apply(this, arguments);
      }
      let tK = (0, y.createContext)({});
      function useInputContext() {
        return (0, y.useContext)(tK);
      }
      let tG = (0, y.createContext)(null),
        tY = (0, y.createContext)(null),
        tq = (0, y.createContext)(null);
      function useStoreContext() {
        return (0, y.useContext)(tY);
      }
      function LevaStoreProvider({ children: o, store: l }) {
        return y.createElement(tY.Provider, { value: l }, o);
      }
      let getDefaultTheme = () => ({
        colors: {
          elevation1: "#292d39",
          elevation2: "#181c20",
          elevation3: "#373c4b",
          accent1: "#0066dc",
          accent2: "#007bff",
          accent3: "#3c93ff",
          highlight1: "#535760",
          highlight2: "#8c92a4",
          highlight3: "#fefefe",
          vivid1: "#ffcc00",
          folderWidgetColor: "$highlight2",
          folderTextColor: "$highlight3",
          toolTipBackground: "$highlight3",
          toolTipText: "$elevation2",
        },
        radii: { xs: "2px", sm: "3px", lg: "10px" },
        space: {
          xs: "3px",
          sm: "6px",
          md: "10px",
          rowGap: "7px",
          colGap: "7px",
        },
        fonts: {
          mono: "ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace",
          sans: "system-ui, sans-serif",
        },
        fontSizes: { root: "11px", toolTip: "$root" },
        sizes: {
          rootWidth: "280px",
          controlWidth: "160px",
          numberInputMinWidth: "38px",
          scrubberWidth: "8px",
          scrubberHeight: "16px",
          rowHeight: "24px",
          folderTitleHeight: "20px",
          checkboxSize: "16px",
          joystickWidth: "100px",
          joystickHeight: "100px",
          colorPickerWidth: "$controlWidth",
          colorPickerHeight: "100px",
          imagePreviewWidth: "$controlWidth",
          imagePreviewHeight: "100px",
          monitorHeight: "60px",
          titleBarHeight: "39px",
        },
        shadows: {
          level1: "0 0 9px 0 #00000088",
          level2: "0 4px 14px #00000033",
        },
        borderWidths: {
          root: "0px",
          input: "1px",
          focus: "1px",
          hover: "1px",
          active: "1px",
          folder: "1px",
        },
        fontWeights: { label: "normal", folder: "normal", button: "normal" },
      });
      function createStateClass(o, l) {
        let [c, u] = o.split(" "),
          h = {};
        return (
          "none" !== c &&
            (h.boxShadow = `${l.inset ? "inset " : ""}0 0 0 $borderWidths${[
              l.key,
            ]} $colors${("default" !== c && c) || l.borderColor}`),
          u && (h.backgroundColor = u),
          h
        );
      }
      let tX = {
          $inputStyle: () => (o) =>
            createStateClass(o, {
              key: "$input",
              borderColor: "$highlight1",
              inset: !0,
            }),
          $focusStyle: () => (o) =>
            createStateClass(o, { key: "$focus", borderColor: "$accent2" }),
          $hoverStyle: () => (o) =>
            createStateClass(o, {
              key: "$hover",
              borderColor: "$accent1",
              inset: !0,
            }),
          $activeStyle: () => (o) =>
            createStateClass(o, {
              key: "$active",
              borderColor: "$accent1",
              inset: !0,
            }),
        },
        {
          styled: tZ,
          css: tJ,
          createTheme: tQ,
          globalCss: t0,
          keyframes: t1,
        } = ((o) => {
          let l = ((o) => {
            let l = !1,
              c = eh(o, (o) => {
                l = !0;
                let c =
                    "prefix" in (o = ("object" == typeof o && o) || {})
                      ? String(o.prefix)
                      : "",
                  u = ("object" == typeof o.media && o.media) || {},
                  h =
                    "object" == typeof o.root
                      ? o.root || null
                      : globalThis.document || null,
                  g = ("object" == typeof o.theme && o.theme) || {},
                  _ = {
                    prefix: c,
                    media: u,
                    theme: g,
                    themeMap: ("object" == typeof o.themeMap && o.themeMap) || {
                      ...q,
                    },
                    utils: ("object" == typeof o.utils && o.utils) || {},
                  },
                  b = E(h),
                  y = {
                    css: M(_, b),
                    globalCss: D(_, b),
                    keyframes: V(_, b),
                    createTheme: J(_, b),
                    reset() {
                      b.reset(), y.theme.toString();
                    },
                    theme: {},
                    sheet: b,
                    config: _,
                    prefix: c,
                    getCssText: b.toString,
                    toString: b.toString,
                  };
                return String((y.theme = y.createTheme(g))), y;
              });
            return l || c.reset(), c;
          })(o);
          return (
            (l.styled = (({ config: o, sheet: l }) =>
              eg(o, () => {
                let c = M(o, l);
                return (...o) => {
                  let l = c(...o),
                    u = l[X].type,
                    h = y.forwardRef((o, c) => {
                      let h = (o && o.as) || u,
                        { props: g, deferredInjector: _ } = l(o);
                      return (
                        delete g.as,
                        (g.ref = c),
                        _
                          ? y.createElement(
                              y.Fragment,
                              null,
                              y.createElement(h, g),
                              y.createElement(_, null)
                            )
                          : y.createElement(h, g)
                      );
                    });
                  return (
                    (h.className = l.className),
                    (h.displayName = `Styled.${u.displayName || u.name || u}`),
                    (h.selector = l.selector),
                    (h.toString = () => l.selector),
                    (h[X] = l[X]),
                    h
                  );
                };
              }))(l)),
            l
          );
        })({
          prefix: "leva",
          theme: getDefaultTheme(),
          utils: vector_plugin_6f82aee9_esm_objectSpread2(
            vector_plugin_6f82aee9_esm_objectSpread2({}, tX),
            {},
            {
              $flex: () => ({ display: "flex", alignItems: "center" }),
              $flexCenter: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }),
              $reset: () => ({
                outline: "none",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                fontFamily: "inherit",
                border: "none",
                backgroundColor: "transparent",
                appearance: "none",
              }),
              $draggable: () => ({
                touchAction: "none",
                WebkitUserDrag: "none",
                userSelect: "none",
              }),
              $focus: (o) => ({ "&:focus": tX.$focusStyle()(o) }),
              $focusWithin: (o) => ({ "&:focus-within": tX.$focusStyle()(o) }),
              $hover: (o) => ({ "&:hover": tX.$hoverStyle()(o) }),
              $active: (o) => ({ "&:active": tX.$activeStyle()(o) }),
            }
          ),
        }),
        t2 = t0({
          ".leva__panel__dragged": {
            WebkitUserDrag: "none",
            userSelect: "none",
            input: { userSelect: "none" },
            "*": { cursor: "ew-resize !important" },
          },
        });
      function useTh(o, l) {
        let { theme: c } = (0, y.useContext)(tG);
        if (!(o in c) || !(l in c[o])) return tk(h.THEME_ERROR, o, l), "";
        let u = l;
        for (;;) {
          let l = c[o][u];
          if ("string" != typeof l || "$" !== l.charAt(0)) return l;
          u = l.substr(1);
        }
      }
      let t8 = tZ("input", {
          $reset: "",
          padding: "0 $sm",
          width: 0,
          minWidth: 0,
          flex: 1,
          height: "100%",
          variants: {
            levaType: { number: { textAlign: "right" } },
            as: { textarea: { padding: "$sm" } },
          },
        }),
        t9 = tZ("div", {
          $draggable: "",
          height: "100%",
          $flexCenter: "",
          position: "relative",
          padding: "0 $xs",
          fontSize: "0.8em",
          opacity: 0.8,
          cursor: "default",
          touchAction: "none",
          [`& + ${t8}`]: { paddingLeft: 0 },
        }),
        t6 = tZ(t9, {
          cursor: "ew-resize",
          marginRight: "-$xs",
          textTransform: "uppercase",
          opacity: 0.3,
          "&:hover": { opacity: 1 },
          variants: {
            dragging: { true: { backgroundColor: "$accent2", opacity: 1 } },
          },
        }),
        t3 = tZ("div", {
          $flex: "",
          position: "relative",
          borderRadius: "$sm",
          overflow: "hidden",
          color: "inherit",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          $inputStyle: "$elevation1",
          $hover: "",
          $focusWithin: "",
          variants: { textArea: { true: { height: "auto" } } },
        }),
        t5 = [
          "innerLabel",
          "value",
          "onUpdate",
          "onChange",
          "onKeyDown",
          "type",
          "id",
          "inputType",
          "rows",
        ],
        t4 = ["onUpdate"];
      function ValueInput(o) {
        let {
            innerLabel: l,
            value: c,
            onUpdate: u,
            onChange: h,
            onKeyDown: g,
            type: _,
            id: b,
            inputType: w = "text",
            rows: T = 0,
          } = o,
          A = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, t5),
          {
            id: I,
            emitOnEditStart: N,
            emitOnEditEnd: W,
            disabled: B,
          } = useInputContext(),
          F = (0, y.useRef)(null),
          H = T > 0,
          U = H ? "textarea" : "input",
          K = (0, y.useCallback)(
            (o) => (l) => {
              let c = l.currentTarget.value;
              o(c);
            },
            []
          );
        y.useEffect(() => {
          let o = F.current,
            l = K((o) => {
              u(o), W();
            });
          return (
            null == o || o.addEventListener("blur", l),
            () => (null == o ? void 0 : o.removeEventListener("blur", l))
          );
        }, [K, u, W]);
        let G = (0, y.useCallback)(
            (o) => {
              "Enter" === o.key && K(u)(o);
            },
            [K, u]
          ),
          Y = Object.assign({ as: U }, H ? { rows: T } : {}, A);
        return y.createElement(
          t3,
          { textArea: H },
          l && "string" == typeof l ? y.createElement(t9, null, l) : l,
          y.createElement(
            t8,
            vector_plugin_6f82aee9_esm_extends(
              {
                levaType: _,
                ref: F,
                id: b || I,
                type: w,
                autoComplete: "off",
                spellCheck: "false",
                value: c,
                onChange: K(h),
                onFocus: () => N(),
                onKeyPress: G,
                onKeyDown: g,
                disabled: B,
              },
              Y
            )
          )
        );
      }
      function NumberInput(o) {
        let { onUpdate: l } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, t4),
          u = (0, y.useCallback)((o) => l(parseNumber(o)), [l]),
          h = (0, y.useCallback)(
            (o) => {
              let c = "ArrowUp" === o.key ? 1 : "ArrowDown" === o.key ? -1 : 0;
              if (c) {
                o.preventDefault();
                let u = o.altKey ? 0.1 : o.shiftKey ? 10 : 1;
                l((o) => parseFloat(o) + c * u);
              }
            },
            [l]
          );
        return y.createElement(
          ValueInput,
          vector_plugin_6f82aee9_esm_extends({}, c, {
            onUpdate: u,
            onKeyDown: h,
            type: "number",
          })
        );
      }
      let t7 = tZ("div", {}),
        re = tZ("div", {
          position: "relative",
          background: "$elevation2",
          transition: "height 300ms ease",
          variants: {
            fill: { true: {}, false: {} },
            flat: { false: {}, true: {} },
            isRoot: {
              true: {},
              false: {
                paddingLeft: "$md",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "$borderWidths$folder",
                  height: "100%",
                  backgroundColor: "$folderWidgetColor",
                  opacity: 0.4,
                  transform: "translateX(-50%)",
                },
              },
            },
          },
          compoundVariants: [
            {
              isRoot: !0,
              fill: !1,
              css: {
                overflowY: "auto",
                maxHeight: "calc(100vh - 20px - $$titleBarHeight)",
              },
            },
            { isRoot: !0, flat: !1, css: { borderRadius: "$lg" } },
          ],
        }),
        rt = tZ("div", {
          $flex: "",
          color: "$folderTextColor",
          userSelect: "none",
          cursor: "pointer",
          height: "$folderTitleHeight",
          fontWeight: "$folder",
          "> svg": {
            marginLeft: -4,
            marginRight: 4,
            cursor: "pointer",
            fill: "$folderWidgetColor",
            opacity: 0.6,
          },
          "&:hover > svg": { fill: "$folderWidgetColor" },
          [`&:hover + ${re}::after`]: { opacity: 0.6 },
          [`${t7}:hover > & + ${re}::after`]: { opacity: 0.6 },
          [`${t7}:hover > & > svg`]: { opacity: 1 },
        }),
        rr = tZ("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "100%",
          rowGap: "$rowGap",
          transition: "opacity 250ms ease",
          variants: {
            toggled: {
              true: { opacity: 1, transitionDelay: "250ms" },
              false: {
                opacity: 0,
                transitionDelay: "0ms",
                pointerEvents: "none",
              },
            },
            isRoot: {
              true: {
                "& > div": { paddingLeft: "$md", paddingRight: "$md" },
                "& > div:first-of-type": { paddingTop: "$sm" },
                "& > div:last-of-type": { paddingBottom: "$sm" },
                [`> ${t7}:not(:first-of-type)`]: {
                  paddingTop: "$sm",
                  marginTop: "$md",
                  borderTop: "$borderWidths$folder solid $colors$elevation1",
                },
              },
            },
          },
        }),
        rn = tZ("div", {
          position: "relative",
          zIndex: 100,
          display: "grid",
          rowGap: "$rowGap",
          gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
          alignItems: "center",
          color: "$highlight2",
          [`${rr} > &`]: {
            "&:first-of-type": { marginTop: "$rowGap" },
            "&:last-of-type": { marginBottom: "$rowGap" },
          },
          variants: {
            disabled: {
              true: { pointerEvents: "none" },
              false: { "&:hover,&:focus-within": { color: "$highlight3" } },
            },
          },
        }),
        ro = tZ(rn, {
          gridTemplateColumns: "auto $sizes$controlWidth",
          columnGap: "$colGap",
        }),
        ri = tZ("div", {
          $flex: "",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          "& > div": { marginLeft: "$colGap", padding: "0 $xs", opacity: 0.4 },
          "& > div:hover": { opacity: 0.8 },
          "& > div > svg": {
            display: "none",
            cursor: "pointer",
            width: 13,
            minWidth: 13,
            height: 13,
            backgroundColor: "$elevation2",
          },
          "&:hover > div > svg": { display: "block" },
          variants: {
            align: {
              top: {
                height: "100%",
                alignItems: "flex-start",
                paddingTop: "$sm",
              },
            },
          },
        }),
        ra = tZ("input", {
          $reset: "",
          height: 0,
          width: 0,
          opacity: 0,
          margin: 0,
          "& + label": {
            position: "relative",
            $flexCenter: "",
            height: "100%",
            userSelect: "none",
            cursor: "pointer",
            paddingLeft: 2,
            paddingRight: "$sm",
            pointerEvents: "auto",
          },
          "& + label:after": {
            content: '""',
            width: 6,
            height: 6,
            backgroundColor: "$elevation3",
            borderRadius: "50%",
            $activeStyle: "",
          },
          "&:focus + label:after": { $focusStyle: "" },
          "& + label:active:after": {
            backgroundColor: "$accent1",
            $focusStyle: "",
          },
          "&:checked + label:after": { backgroundColor: "$accent1" },
        }),
        rl = tZ("label", {
          fontWeight: "$label",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          "& > svg": { display: "block" },
        }),
        rs = tZ("div", {
          opacity: 1,
          variants: {
            disabled: {
              true: {
                opacity: 0.6,
                pointerEvents: "none",
                [`& ${rl}`]: { pointerEvents: "auto" },
              },
            },
          },
        }),
        rc = tZ("div", {
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1e3,
          userSelect: "none",
        }),
        ru = tZ("div", {
          background: "$toolTipBackground",
          fontFamily: "$sans",
          fontSize: "$toolTip",
          padding: "$xs $sm",
          color: "$toolTipText",
          borderRadius: "$xs",
          boxShadow: "$level2",
          maxWidth: 260,
        }),
        rd = tZ(tS, { fill: "$toolTipBackground" });
      function Portal({ children: o }) {
        let { className: l } = (0, y.useContext)(tG);
        return y.createElement(N, { className: l }, o);
      }
      let rf = ["align"];
      function OptionalToggle() {
        let { id: o, disable: l, disabled: c } = useInputContext();
        return y.createElement(
          y.Fragment,
          null,
          y.createElement(ra, {
            id: o + "__disable",
            type: "checkbox",
            checked: !c,
            onChange: () => l(!c),
          }),
          y.createElement("label", { htmlFor: o + "__disable" })
        );
      }
      function RawLabel(o) {
        let { id: l, optional: c, hint: u } = useInputContext(),
          h = o.htmlFor || (l ? { htmlFor: l } : null),
          g = u || "string" != typeof o.children ? null : { title: o.children };
        return y.createElement(
          y.Fragment,
          null,
          c && y.createElement(OptionalToggle, null),
          void 0 !== u
            ? y.createElement(
                $a093c7e1ec25a057$export$be92b6f5f03c0fe9,
                null,
                y.createElement(
                  tg,
                  { asChild: !0 },
                  y.createElement(
                    rl,
                    vector_plugin_6f82aee9_esm_extends({}, h, o)
                  )
                ),
                y.createElement(
                  tv,
                  { side: "top", sideOffset: 2 },
                  y.createElement(ru, null, u, y.createElement(rd, null))
                )
              )
            : y.createElement(
                rl,
                vector_plugin_6f82aee9_esm_extends({}, h, g, o)
              )
        );
      }
      function Label(o) {
        let { align: l } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, rf),
          { value: u, label: g, key: _, disabled: b } = useInputContext(),
          { hideCopyButton: w } = (0, y.useContext)(tq),
          [T, A] = (0, y.useState)(!1),
          handleClick = async () => {
            try {
              await navigator.clipboard.writeText(
                JSON.stringify({ [_]: null != u ? u : "" })
              ),
                A(!0);
            } catch (o) {
              tk(h.CLIPBOARD_ERROR, { [_]: u });
            }
          };
        return y.createElement(
          ri,
          { align: l, onPointerLeave: () => A(!1) },
          y.createElement(RawLabel, c),
          !w &&
            void 0 !== _ &&
            !b &&
            y.createElement(
              "div",
              { title: `Click to copy ${"string" == typeof g ? g : _} value` },
              T
                ? y.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    y.createElement("path", {
                      d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                    }),
                    y.createElement("path", {
                      fillRule: "evenodd",
                      d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                      clipRule: "evenodd",
                    })
                  )
                : y.createElement(
                    "svg",
                    {
                      onClick: handleClick,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    y.createElement("path", {
                      d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                    }),
                    y.createElement("path", {
                      d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z",
                    })
                  )
            )
        );
      }
      let rp = ["toggled"],
        rh = tZ("svg", {
          fill: "currentColor",
          transition: "transform 350ms ease, fill 250ms ease",
        });
      function Chevron(o) {
        let { toggled: l } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, rp);
        return y.createElement(
          rh,
          vector_plugin_6f82aee9_esm_extends(
            {
              width: "9",
              height: "5",
              viewBox: "0 0 9 5",
              xmlns: "http://www.w3.org/2000/svg",
              style: { transform: `rotate(${l ? 0 : -90}deg)` },
            },
            c
          ),
          y.createElement("path", {
            d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z",
          })
        );
      }
      let rg = ["input"];
      function Row(o) {
        let { input: l } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, rg);
        return l ? y.createElement(ro, c) : y.createElement(rn, c);
      }
      function useInputSetters({
        value: o,
        type: l,
        settings: c,
        setValue: u,
      }) {
        let [h, g] = (0, y.useState)(format$2(l, o, c)),
          _ = (0, y.useRef)(o),
          b = (0, y.useRef)(c);
        b.current = c;
        let w = (0, y.useCallback)((o) => g(format$2(l, o, b.current)), [l]),
          T = (0, y.useCallback)(
            (o) => {
              try {
                u(o);
              } catch (c) {
                let { type: o, previousValue: l } = c;
                if ("LEVA_ERROR" !== o) throw c;
                w(l);
              }
            },
            [w, u]
          );
        return (
          (0, y.useEffect)(() => {
            dequal(o, _.current) || w(o), (_.current = o);
          }, [o, w]),
          { displayValue: h, onChange: g, onUpdate: T }
        );
      }
      function vector_plugin_6f82aee9_esm_useDrag(o, l) {
        let { emitOnEditStart: c, emitOnEditEnd: u } = useInputContext();
        return (
          ej.set(eR.key, eR.engine),
          eT.set(eR.key, eR.resolver),
          (function (o, l = {}, c, u) {
            let h = y.useMemo(() => new Controller(o), []);
            if (
              (h.applyHandlers(o, void 0),
              h.applyConfig(l, c),
              y.useEffect(h.effect.bind(h)),
              y.useEffect(() => h.clean.bind(h), []),
              void 0 === l.target)
            )
              return h.bind.bind(h);
          })(
            {
              drag: (l) => {
                l.first &&
                  (document.body.classList.add("leva__panel__dragged"),
                  null == c || c());
                let h = o(l);
                return (
                  l.last &&
                    (document.body.classList.remove("leva__panel__dragged"),
                    null == u || u()),
                  h
                );
              },
            },
            l || {},
            "drag"
          )
        );
      }
      function useTransform() {
        let o = (0, y.useRef)(null),
          l = (0, y.useRef)({ x: 0, y: 0 }),
          c = (0, y.useCallback)((c) => {
            Object.assign(l.current, c),
              o.current &&
                (o.current.style.transform = `translate3d(${l.current.x}px, ${l.current.y}px, 0)`);
          }, []);
        return [o, c];
      }
      let rm = ["__refCount"],
        getInputAtPath = (o, l) => {
          if (!o[l]) return null;
          let c = o[l],
            u = vector_plugin_6f82aee9_esm_objectWithoutProperties(c, rm);
          return u;
        },
        r_ = tZ("div", {
          variants: {
            hasRange: {
              true: {
                position: "relative",
                display: "grid",
                gridTemplateColumns: "auto $sizes$numberInputMinWidth",
                columnGap: "$colGap",
                alignItems: "center",
              },
            },
          },
        }),
        rb = tZ("div", {
          position: "relative",
          width: "100%",
          height: 2,
          borderRadius: "$xs",
          backgroundColor: "$elevation1",
        }),
        rv = tZ("div", {
          position: "absolute",
          width: "$scrubberWidth",
          height: "$scrubberHeight",
          borderRadius: "$xs",
          boxShadow: "0 0 0 2px $colors$elevation2",
          backgroundColor: "$accent2",
          cursor: "pointer",
          $active: "none $accent1",
          $hover: "none $accent3",
          variants: {
            position: {
              left: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                transform:
                  "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))",
              },
              right: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                transform:
                  "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))",
              },
            },
          },
        }),
        ry = tZ("div", {
          position: "relative",
          $flex: "",
          height: "100%",
          cursor: "pointer",
          touchAction: "none",
        }),
        rw = tZ("div", {
          position: "absolute",
          height: "100%",
          backgroundColor: "$accent2",
        });
      function RangeSlider({
        value: o,
        min: l,
        max: c,
        onDrag: u,
        step: h,
        initialValue: g,
      }) {
        let _ = (0, y.useRef)(null),
          b = (0, y.useRef)(null),
          w = (0, y.useRef)(0),
          T = useTh("sizes", "scrubberWidth"),
          A = vector_plugin_6f82aee9_esm_useDrag(
            ({ event: y, first: A, xy: [I], movement: [N], memo: W }) => {
              if (A) {
                let { width: u, left: h } = _.current.getBoundingClientRect();
                w.current = u - parseFloat(T);
                let g = (null == y ? void 0 : y.target) === b.current;
                W = g ? o : invertedRange((I - h) / u, l, c);
              }
              let B = W + invertedRange(N / w.current, 0, c - l);
              return u(sanitizeStep$1(B, { step: h, initialValue: g })), W;
            }
          ),
          I = range(o, l, c);
        return y.createElement(
          ry,
          vector_plugin_6f82aee9_esm_extends({ ref: _ }, A()),
          y.createElement(
            rb,
            null,
            y.createElement(rw, {
              style: { left: 0, right: `${(1 - I) * 100}%` },
            })
          ),
          y.createElement(rv, {
            ref: b,
            style: { left: `calc(${I} * (100% - ${T}))` },
          })
        );
      }
      let rx = y.memo(
        ({ label: o, onUpdate: l, step: c, innerLabelTrim: u }) => {
          let [h, g] = (0, y.useState)(!1),
            _ = vector_plugin_6f82aee9_esm_useDrag(
              ({ active: o, delta: [u], event: h, memo: _ = 0 }) => (
                g(o),
                Math.abs((_ += u / 2)) >= 1 &&
                  (l(
                    (o) => parseFloat(o) + Math.floor(_) * c * multiplyStep(h)
                  ),
                  (_ = 0)),
                _
              )
            );
          return y.createElement(
            t6,
            vector_plugin_6f82aee9_esm_extends(
              { dragging: h, title: o.length > 1 ? o : "" },
              _()
            ),
            o.slice(0, u)
          );
        }
      );
      function Number$1({
        label: o,
        id: l,
        displayValue: c,
        onUpdate: u,
        onChange: h,
        settings: g,
        innerLabelTrim: _ = 1,
      }) {
        let b =
          _ > 0 &&
          y.createElement(rx, {
            label: o,
            step: g.step,
            onUpdate: u,
            innerLabelTrim: _,
          });
        return y.createElement(NumberInput, {
          id: l,
          value: String(c),
          onUpdate: u,
          onChange: h,
          innerLabel: b,
        });
      }
      let { sanitizeStep: rE } = tU,
        rS = vector_plugin_6f82aee9_esm_objectWithoutProperties(tU, [
          "sanitizeStep",
        ]);
      var r$ = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let o = useInputContext(),
                { label: l, value: c, onUpdate: u, settings: h, id: g } = o,
                { min: _, max: b } = h,
                w = b !== 1 / 0 && _ !== -1 / 0;
              return y.createElement(
                Row,
                { input: !0 },
                y.createElement(Label, null, l),
                y.createElement(
                  r_,
                  { hasRange: w },
                  w &&
                    y.createElement(
                      RangeSlider,
                      vector_plugin_6f82aee9_esm_extends(
                        { value: parseFloat(c), onDrag: u },
                        h
                      )
                    ),
                  y.createElement(
                    Number$1,
                    vector_plugin_6f82aee9_esm_extends({}, o, {
                      id: g,
                      label: "value",
                      innerLabelTrim: w ? 0 : 1,
                    })
                  )
                )
              );
            },
          },
          rS
        ),
        rk = Object.freeze({
          __proto__: null,
          schema: (o, l) =>
            v8n()
              .schema({
                options: v8n().passesAnyOf(v8n().object(), v8n().array()),
              })
              .test(l),
          sanitize: (o, { values: l }) => {
            if (0 > l.indexOf(o))
              throw Error("Selected value doesn't match Select options");
            return o;
          },
          format: (o, { values: l }) => l.indexOf(o),
          normalize: (o) => {
            let l,
              c,
              { value: u, options: h } = o;
            return (
              Array.isArray(h)
                ? ((c = h), (l = h.map((o) => String(o))))
                : ((c = Object.values(h)), (l = Object.keys(h))),
              "value" in o
                ? c.includes(u) || (l.unshift(String(u)), c.unshift(u))
                : (u = c[0]),
              Object.values(h).includes(u) || (h[String(u)] = u),
              { value: u, settings: { keys: l, values: c } }
            );
          },
        });
      let rC = tZ("div", {
          $flexCenter: "",
          position: "relative",
          "> svg": {
            pointerEvents: "none",
            position: "absolute",
            right: "$md",
          },
        }),
        rO = tZ("select", {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
        }),
        rj = tZ("div", {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          padding: "0 $sm",
          cursor: "pointer",
          [`${rO}:focus + &`]: { $focusStyle: "" },
          [`${rO}:hover + &`]: { $hoverStyle: "" },
        });
      function Select({
        displayValue: o,
        value: l,
        onUpdate: c,
        id: u,
        settings: h,
        disabled: g,
      }) {
        let { keys: _, values: b } = h,
          w = (0, y.useRef)();
        return (
          l === b[o] && (w.current = _[o]),
          y.createElement(
            rC,
            null,
            y.createElement(
              rO,
              {
                id: u,
                value: o,
                onChange: (o) => c(b[Number(o.currentTarget.value)]),
                disabled: g,
              },
              _.map((o, l) =>
                y.createElement("option", { key: o, value: l }, o)
              )
            ),
            y.createElement(rj, null, w.current),
            y.createElement(Chevron, { toggled: !0 })
          )
        );
      }
      var rT = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                label: o,
                value: l,
                displayValue: c,
                onUpdate: u,
                id: h,
                disabled: g,
                settings: _,
              } = useInputContext();
              return y.createElement(
                Row,
                { input: !0 },
                y.createElement(Label, null, o),
                y.createElement(Select, {
                  id: h,
                  value: l,
                  displayValue: c,
                  onUpdate: u,
                  settings: _,
                  disabled: g,
                })
              );
            },
          },
          rk
        ),
        rR = Object.freeze({
          __proto__: null,
          schema: (o) => v8n().string().test(o),
          sanitize: (o) => {
            if ("string" != typeof o) throw Error("Invalid string");
            return o;
          },
          normalize: ({ value: o, editable: l = !0, rows: c = !1 }) => ({
            value: o,
            settings: {
              editable: l,
              rows: "number" == typeof c ? c : c ? 5 : 0,
            },
          }),
        });
      let rP = ["displayValue", "onUpdate", "onChange", "editable"],
        rD = tZ("div", { whiteSpace: "pre-wrap" });
      function String$1(o) {
        let { displayValue: l, onUpdate: c, onChange: u, editable: h = !0 } = o,
          g = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, rP);
        return h
          ? y.createElement(
              ValueInput,
              vector_plugin_6f82aee9_esm_extends(
                { value: l, onUpdate: c, onChange: u },
                g
              )
            )
          : y.createElement(rD, null, l);
      }
      var rA = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                label: o,
                settings: l,
                displayValue: c,
                onUpdate: u,
                onChange: h,
              } = useInputContext();
              return y.createElement(
                Row,
                { input: !0 },
                y.createElement(Label, null, o),
                y.createElement(
                  String$1,
                  vector_plugin_6f82aee9_esm_extends(
                    { displayValue: c, onUpdate: u, onChange: h },
                    l
                  )
                )
              );
            },
          },
          rR
        ),
        rI = Object.freeze({
          __proto__: null,
          schema: (o) => v8n().boolean().test(o),
          sanitize: (o) => {
            if ("boolean" != typeof o) throw Error("Invalid boolean");
            return o;
          },
        });
      let rL = tZ("div", {
        position: "relative",
        $flex: "",
        height: "$rowHeight",
        input: { $reset: "", height: 0, width: 0, opacity: 0, margin: 0 },
        label: {
          position: "relative",
          $flexCenter: "",
          userSelect: "none",
          cursor: "pointer",
          height: "$checkboxSize",
          width: "$checkboxSize",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          $hover: "",
        },
        "input:focus + label": { $focusStyle: "" },
        "input:focus:checked + label, input:checked + label:hover": {
          $hoverStyle: "$accent3",
        },
        "input + label:active": { backgroundColor: "$accent1" },
        "input:checked + label:active": { backgroundColor: "$accent1" },
        "label > svg": {
          display: "none",
          width: "90%",
          height: "90%",
          stroke: "$highlight3",
        },
        "input:checked + label": { backgroundColor: "$accent2" },
        "input:checked + label > svg": { display: "block" },
      });
      function vector_plugin_6f82aee9_esm_Boolean({
        value: o,
        onUpdate: l,
        id: c,
        disabled: u,
      }) {
        return y.createElement(
          rL,
          null,
          y.createElement("input", {
            id: c,
            type: "checkbox",
            checked: o,
            onChange: (o) => l(o.currentTarget.checked),
            disabled: u,
          }),
          y.createElement(
            "label",
            { htmlFor: c },
            y.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              y.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7",
              })
            )
          )
        );
      }
      var rM = vector_plugin_6f82aee9_esm_objectSpread2(
        {
          component: function () {
            let {
              label: o,
              value: l,
              onUpdate: c,
              disabled: u,
              id: h,
            } = useInputContext();
            return y.createElement(
              Row,
              { input: !0 },
              y.createElement(Label, null, o),
              y.createElement(vector_plugin_6f82aee9_esm_Boolean, {
                value: l,
                onUpdate: c,
                id: h,
                disabled: u,
              })
            );
          },
        },
        rI
      );
      let rN = ["locked"];
      function Coordinate({
        value: o,
        id: l,
        valueKey: c,
        settings: u,
        onUpdate: h,
        innerLabelTrim: g,
      }) {
        let _ = (0, y.useRef)(o[c]);
        _.current = o[c];
        let b = (0, y.useCallback)(
            (o) =>
              h({
                [c]: sanitizeValue(
                  { type: "NUMBER", value: _.current, settings: u },
                  o
                ),
              }),
            [h, u, c]
          ),
          w = useInputSetters({
            type: "NUMBER",
            value: o[c],
            settings: u,
            setValue: b,
          });
        return y.createElement(Number$1, {
          id: l,
          label: c,
          value: o[c],
          displayValue: w.displayValue,
          onUpdate: w.onUpdate,
          onChange: w.onChange,
          settings: u,
          innerLabelTrim: g,
        });
      }
      let rz = tZ("div", {
        display: "grid",
        columnGap: "$colGap",
        gridAutoFlow: "column dense",
        alignItems: "center",
        variants: {
          withLock: {
            true: {
              gridTemplateColumns: "10px auto",
              "> svg": { cursor: "pointer" },
            },
          },
        },
      });
      function Lock(o) {
        let { locked: l } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, rN);
        return y.createElement(
          "svg",
          vector_plugin_6f82aee9_esm_extends(
            {
              width: "10",
              height: "10",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            c
          ),
          l
            ? y.createElement("path", {
                d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              })
            : y.createElement("path", {
                d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              })
        );
      }
      function Vector({
        value: o,
        onUpdate: l,
        settings: c,
        innerLabelTrim: u,
      }) {
        let { id: h, setSettings: g } = useInputContext(),
          { lock: _, locked: b } = c;
        return y.createElement(
          rz,
          { withLock: _ },
          _ &&
            y.createElement(Lock, {
              locked: b,
              onClick: () => g({ locked: !b }),
            }),
          Object.keys(o).map((g, _) =>
            y.createElement(Coordinate, {
              id: 0 === _ ? h : `${h}.${g}`,
              key: g,
              valueKey: g,
              value: o,
              settings: c[g],
              onUpdate: l,
              innerLabelTrim: u,
            })
          )
        );
      }
      let normalizeKeyedNumberSettings = (o, l) => {
          let c = {},
            u = 0,
            h = 1 / 0;
          for (let g in (Object.entries(o).forEach(([o, g]) => {
            (c[o] = normalize$2(
              vector_plugin_6f82aee9_esm_objectSpread2({ value: g }, l[o])
            ).settings),
              (u = Math.max(u, c[o].step)),
              (h = Math.min(h, c[o].pad));
          }),
          c)) {
            let { step: o, min: _, max: b } = l[g] || {};
            isFinite(o) ||
              (isFinite(_) && isFinite(b)) ||
              ((c[g].step = u), (c[g].pad = h));
          }
          return c;
        },
        rW = ["lock"],
        rB = ["value"];
      function convert(o, l, c) {
        return (Array.isArray(o) ? "array" : "object") === l
          ? o
          : "array" === l
          ? Object.values(o)
          : o.reduce((o, l, u) => Object.assign(o, { [c[u]]: l }), {});
      }
      let sanitizeVector = (o, l, c) => {
          let u = convert(o, "object", l.keys);
          for (let o in u) u[o] = sanitize$3(u[o], l[o]);
          let h = Object.keys(u),
            g = {};
          if (h.length === l.keys.length) g = u;
          else {
            let o = convert(c, "object", l.keys);
            if (1 === h.length && l.locked) {
              let l = h[0],
                c = u[l],
                _ = o[l],
                b = 0 !== _ ? c / _ : 1;
              for (let u in o) u === l ? (g[l] = c) : (g[u] = o[u] * b);
            } else
              g = vector_plugin_6f82aee9_esm_objectSpread2(
                vector_plugin_6f82aee9_esm_objectSpread2({}, o),
                u
              );
          }
          return convert(g, l.format, l.keys);
        },
        formatVector = (o, l) => convert(o, "object", l.keys),
        isNumberSettings = (o) =>
          !!o && ("step" in o || "min" in o || "max" in o);
      function getVectorPlugin(o) {
        return {
          schema: (function (o) {
            let l = v8n().array().length(o).every.number(),
              isVectorObject = (l) => {
                if (!l || "object" != typeof l) return !1;
                let c = Object.values(l);
                return c.length === o && c.every((o) => isFinite(o));
              };
            return (o) => l.test(o) || isVectorObject(o);
          })(o.length),
          normalize: (l) => {
            let { value: c } = l;
            return (function (o, l, c = []) {
              let { lock: u = !1 } = l,
                h = vector_plugin_6f82aee9_esm_objectWithoutProperties(l, rW),
                g = Array.isArray(o) ? "array" : "object",
                _ = "object" === g ? Object.keys(o) : c,
                b = convert(o, "object", _),
                y = isNumberSettings(h)
                  ? _.reduce((o, l) => Object.assign(o, { [l]: h }), {})
                  : h,
                w = normalizeKeyedNumberSettings(b, y);
              return {
                value: "array" === g ? o : b,
                settings: vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2({}, w),
                  {},
                  { format: g, keys: _, lock: u, locked: !1 }
                ),
              };
            })(c, vector_plugin_6f82aee9_esm_objectWithoutProperties(l, rB), o);
          },
          format: (o, l) => formatVector(o, l),
          sanitize: (o, l, c) => sanitizeVector(o, l, c),
        };
      }
      var rF = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
        colord_t = function (o) {
          return "string" == typeof o ? o.length > 0 : "number" == typeof o;
        },
        colord_n = function (o, l, c) {
          return (
            void 0 === l && (l = 0),
            void 0 === c && (c = Math.pow(10, l)),
            Math.round(c * o) / c + 0
          );
        },
        colord_e = function (o, l, c) {
          return (
            void 0 === l && (l = 0),
            void 0 === c && (c = 1),
            o > c ? c : o > l ? o : l
          );
        },
        colord_u = function (o) {
          return (o = isFinite(o) ? o % 360 : 0) > 0 ? o : o + 360;
        },
        colord_a = function (o) {
          return {
            r: colord_e(o.r, 0, 255),
            g: colord_e(o.g, 0, 255),
            b: colord_e(o.b, 0, 255),
            a: colord_e(o.a),
          };
        },
        colord_o = function (o) {
          return {
            r: colord_n(o.r),
            g: colord_n(o.g),
            b: colord_n(o.b),
            a: colord_n(o.a, 3),
          };
        },
        rH = /^#([0-9a-f]{3,8})$/i,
        colord_s = function (o) {
          var l = o.toString(16);
          return l.length < 2 ? "0" + l : l;
        },
        colord_h = function (o) {
          var l = o.r,
            c = o.g,
            u = o.b,
            h = o.a,
            g = Math.max(l, c, u),
            _ = g - Math.min(l, c, u),
            b = _
              ? g === l
                ? (c - u) / _
                : g === c
                ? 2 + (u - l) / _
                : 4 + (l - c) / _
              : 0;
          return {
            h: 60 * (b < 0 ? b + 6 : b),
            s: g ? (_ / g) * 100 : 0,
            v: (g / 255) * 100,
            a: h,
          };
        },
        colord_b = function (o) {
          var l = o.h,
            c = o.s,
            u = o.v,
            h = o.a;
          (l = (l / 360) * 6), (c /= 100), (u /= 100);
          var g = Math.floor(l),
            _ = u * (1 - c),
            b = u * (1 - (l - g) * c),
            y = u * (1 - (1 - l + g) * c),
            w = g % 6;
          return {
            r: 255 * [u, b, _, _, y, u][w],
            g: 255 * [y, u, u, b, _, _][w],
            b: 255 * [_, _, y, u, u, b][w],
            a: h,
          };
        },
        colord_g = function (o) {
          return {
            h: colord_u(o.h),
            s: colord_e(o.s, 0, 100),
            l: colord_e(o.l, 0, 100),
            a: colord_e(o.a),
          };
        },
        colord_d = function (o) {
          return {
            h: colord_n(o.h),
            s: colord_n(o.s),
            l: colord_n(o.l),
            a: colord_n(o.a, 3),
          };
        },
        colord_f = function (o) {
          var l, c;
          return colord_b(
            ((l = o.s),
            {
              h: o.h,
              s:
                (l *= ((c = o.l) < 50 ? c : 100 - c) / 100) > 0
                  ? ((2 * l) / (c + l)) * 100
                  : 0,
              v: c + l,
              a: o.a,
            })
          );
        },
        colord_c = function (o) {
          var l, c, u, h;
          return {
            h: (l = colord_h(o)).h,
            s:
              (h = ((200 - (c = l.s)) * (u = l.v)) / 100) > 0 && h < 200
                ? ((c * u) / 100 / (h <= 100 ? h : 200 - h)) * 100
                : 0,
            l: h / 2,
            a: l.a,
          };
        },
        rV =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        rU =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        rK =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        rG =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        rY = {
          string: [
            [
              function (o) {
                var l = rH.exec(o);
                return l
                  ? (o = l[1]).length <= 4
                    ? {
                        r: parseInt(o[0] + o[0], 16),
                        g: parseInt(o[1] + o[1], 16),
                        b: parseInt(o[2] + o[2], 16),
                        a:
                          4 === o.length
                            ? colord_n(parseInt(o[3] + o[3], 16) / 255, 2)
                            : 1,
                      }
                    : 6 === o.length || 8 === o.length
                    ? {
                        r: parseInt(o.substr(0, 2), 16),
                        g: parseInt(o.substr(2, 2), 16),
                        b: parseInt(o.substr(4, 2), 16),
                        a:
                          8 === o.length
                            ? colord_n(parseInt(o.substr(6, 2), 16) / 255, 2)
                            : 1,
                      }
                    : null
                  : null;
              },
              "hex",
            ],
            [
              function (o) {
                var l = rK.exec(o) || rG.exec(o);
                return l
                  ? l[2] !== l[4] || l[4] !== l[6]
                    ? null
                    : colord_a({
                        r: Number(l[1]) / (l[2] ? 100 / 255 : 1),
                        g: Number(l[3]) / (l[4] ? 100 / 255 : 1),
                        b: Number(l[5]) / (l[6] ? 100 / 255 : 1),
                        a:
                          void 0 === l[7] ? 1 : Number(l[7]) / (l[8] ? 100 : 1),
                      })
                  : null;
              },
              "rgb",
            ],
            [
              function (o) {
                var l,
                  c,
                  u = rV.exec(o) || rU.exec(o);
                return u
                  ? colord_f(
                      colord_g({
                        h:
                          ((l = u[1]),
                          void 0 === (c = u[2]) && (c = "deg"),
                          Number(l) * (rF[c] || 1)),
                        s: Number(u[3]),
                        l: Number(u[4]),
                        a:
                          void 0 === u[5] ? 1 : Number(u[5]) / (u[6] ? 100 : 1),
                      })
                    )
                  : null;
              },
              "hsl",
            ],
          ],
          object: [
            [
              function (o) {
                var l = o.r,
                  c = o.g,
                  u = o.b,
                  h = o.a;
                return colord_t(l) && colord_t(c) && colord_t(u)
                  ? colord_a({
                      r: Number(l),
                      g: Number(c),
                      b: Number(u),
                      a: Number(void 0 === h ? 1 : h),
                    })
                  : null;
              },
              "rgb",
            ],
            [
              function (o) {
                var l = o.h,
                  c = o.s,
                  u = o.l,
                  h = o.a;
                return colord_t(l) && colord_t(c) && colord_t(u)
                  ? colord_f(
                      colord_g({
                        h: Number(l),
                        s: Number(c),
                        l: Number(u),
                        a: Number(void 0 === h ? 1 : h),
                      })
                    )
                  : null;
              },
              "hsl",
            ],
            [
              function (o) {
                var l,
                  c = o.h,
                  u = o.s,
                  h = o.v,
                  g = o.a;
                return colord_t(c) && colord_t(u) && colord_t(h)
                  ? colord_b({
                      h: colord_u(
                        (l = {
                          h: Number(c),
                          s: Number(u),
                          v: Number(h),
                          a: Number(void 0 === g ? 1 : g),
                        }).h
                      ),
                      s: colord_e(l.s, 0, 100),
                      v: colord_e(l.v, 0, 100),
                      a: colord_e(l.a),
                    })
                  : null;
              },
              "hsv",
            ],
          ],
        },
        colord_N = function (o, l) {
          for (var c = 0; c < l.length; c++) {
            var u = l[c][0](o);
            if (u) return [u, l[c][1]];
          }
          return [null, void 0];
        },
        colord_x = function (o) {
          return "string" == typeof o
            ? colord_N(o.trim(), rY.string)
            : "object" == typeof o && null !== o
            ? colord_N(o, rY.object)
            : [null, void 0];
        },
        colord_M = function (o, l) {
          var c = colord_c(o);
          return { h: c.h, s: colord_e(c.s + 100 * l, 0, 100), l: c.l, a: c.a };
        },
        colord_H = function (o) {
          return (299 * o.r + 587 * o.g + 114 * o.b) / 1e3 / 255;
        },
        colord_$ = function (o, l) {
          var c = colord_c(o);
          return { h: c.h, s: c.s, l: colord_e(c.l + 100 * l, 0, 100), a: c.a };
        },
        rq = (function () {
          function r(o) {
            (this.parsed = colord_x(o)[0]),
              (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
          }
          return (
            (r.prototype.isValid = function () {
              return null !== this.parsed;
            }),
            (r.prototype.brightness = function () {
              return colord_n(colord_H(this.rgba), 2);
            }),
            (r.prototype.isDark = function () {
              return 0.5 > colord_H(this.rgba);
            }),
            (r.prototype.isLight = function () {
              return colord_H(this.rgba) >= 0.5;
            }),
            (r.prototype.toHex = function () {
              var o, l, c, u, h, g;
              return (
                (l = (o = colord_o(this.rgba)).r),
                (c = o.g),
                (u = o.b),
                (g = (h = o.a) < 1 ? colord_s(colord_n(255 * h)) : ""),
                "#" + colord_s(l) + colord_s(c) + colord_s(u) + g
              );
            }),
            (r.prototype.toRgb = function () {
              return colord_o(this.rgba);
            }),
            (r.prototype.toRgbString = function () {
              var o, l, c, u, h;
              return (
                (l = (o = colord_o(this.rgba)).r),
                (c = o.g),
                (u = o.b),
                (h = o.a) < 1
                  ? "rgba(" + l + ", " + c + ", " + u + ", " + h + ")"
                  : "rgb(" + l + ", " + c + ", " + u + ")"
              );
            }),
            (r.prototype.toHsl = function () {
              return colord_d(colord_c(this.rgba));
            }),
            (r.prototype.toHslString = function () {
              var o, l, c, u, h;
              return (
                (l = (o = colord_d(colord_c(this.rgba))).h),
                (c = o.s),
                (u = o.l),
                (h = o.a) < 1
                  ? "hsla(" + l + ", " + c + "%, " + u + "%, " + h + ")"
                  : "hsl(" + l + ", " + c + "%, " + u + "%)"
              );
            }),
            (r.prototype.toHsv = function () {
              var o;
              return {
                h: colord_n((o = colord_h(this.rgba)).h),
                s: colord_n(o.s),
                v: colord_n(o.v),
                a: colord_n(o.a, 3),
              };
            }),
            (r.prototype.invert = function () {
              var o;
              return colord_w({
                r: 255 - (o = this.rgba).r,
                g: 255 - o.g,
                b: 255 - o.b,
                a: o.a,
              });
            }),
            (r.prototype.saturate = function (o) {
              return (
                void 0 === o && (o = 0.1), colord_w(colord_M(this.rgba, o))
              );
            }),
            (r.prototype.desaturate = function (o) {
              return (
                void 0 === o && (o = 0.1), colord_w(colord_M(this.rgba, -o))
              );
            }),
            (r.prototype.grayscale = function () {
              return colord_w(colord_M(this.rgba, -1));
            }),
            (r.prototype.lighten = function (o) {
              return (
                void 0 === o && (o = 0.1), colord_w(colord_$(this.rgba, o))
              );
            }),
            (r.prototype.darken = function (o) {
              return (
                void 0 === o && (o = 0.1), colord_w(colord_$(this.rgba, -o))
              );
            }),
            (r.prototype.rotate = function (o) {
              return void 0 === o && (o = 15), this.hue(this.hue() + o);
            }),
            (r.prototype.alpha = function (o) {
              var l;
              return "number" == typeof o
                ? colord_w({ r: (l = this.rgba).r, g: l.g, b: l.b, a: o })
                : colord_n(this.rgba.a, 3);
            }),
            (r.prototype.hue = function (o) {
              var l = colord_c(this.rgba);
              return "number" == typeof o
                ? colord_w({ h: o, s: l.s, l: l.l, a: l.a })
                : colord_n(l.h);
            }),
            (r.prototype.isEqual = function (o) {
              return this.toHex() === colord_w(o).toHex();
            }),
            r
          );
        })(),
        colord_w = function (o) {
          return o instanceof rq ? o : new rq(o);
        },
        rX = [];
      function dist_u() {
        return (dist_u =
          Object.assign ||
          function (o) {
            for (var l = 1; l < arguments.length; l++) {
              var c = arguments[l];
              for (var u in c)
                Object.prototype.hasOwnProperty.call(c, u) && (o[u] = c[u]);
            }
            return o;
          }).apply(this, arguments);
      }
      function dist_c(o, l) {
        if (null == o) return {};
        var c,
          u,
          h = {},
          g = Object.keys(o);
        for (u = 0; u < g.length; u++)
          l.indexOf((c = g[u])) >= 0 || (h[c] = o[c]);
        return h;
      }
      function dist_i(o) {
        var l = (0, y.useRef)(o),
          c = (0, y.useRef)(function (o) {
            l.current && l.current(o);
          });
        return (l.current = o), c.current;
      }
      var dist_s = function (o, l, c) {
          return (
            void 0 === l && (l = 0),
            void 0 === c && (c = 1),
            o > c ? c : o < l ? l : o
          );
        },
        dist_f = function (o) {
          return "touches" in o;
        },
        dist_v = function (o) {
          return (o && o.ownerDocument.defaultView) || self;
        },
        dist_d = function (o, l, c) {
          var u = o.getBoundingClientRect(),
            h = dist_f(l)
              ? (function (o, l) {
                  for (var c = 0; c < o.length; c++)
                    if (o[c].identifier === l) return o[c];
                  return o[0];
                })(l.touches, c)
              : l;
          return {
            left: dist_s(
              (h.pageX - (u.left + dist_v(o).pageXOffset)) / u.width
            ),
            top: dist_s((h.pageY - (u.top + dist_v(o).pageYOffset)) / u.height),
          };
        },
        dist_h = function (o) {
          dist_f(o) || o.preventDefault();
        },
        rZ = y.memo(function (o) {
          var l = o.onMove,
            c = o.onKey,
            u = dist_c(o, ["onMove", "onKey"]),
            h = (0, y.useRef)(null),
            g = dist_i(l),
            _ = dist_i(c),
            b = (0, y.useRef)(null),
            w = (0, y.useRef)(!1),
            T = (0, y.useMemo)(
              function () {
                var e = function (o) {
                    dist_h(o),
                      (dist_f(o) ? o.touches.length > 0 : o.buttons > 0) &&
                      h.current
                        ? g(dist_d(h.current, o, b.current))
                        : t(!1);
                  },
                  r = function () {
                    return t(!1);
                  };
                function t(o) {
                  var l = w.current,
                    c = dist_v(h.current),
                    u = o ? c.addEventListener : c.removeEventListener;
                  u(l ? "touchmove" : "mousemove", e),
                    u(l ? "touchend" : "mouseup", r);
                }
                return [
                  function (o) {
                    var l = o.nativeEvent,
                      c = h.current;
                    if (c && (dist_h(l), (!w.current || dist_f(l)) && c)) {
                      if (dist_f(l)) {
                        w.current = !0;
                        var u = l.changedTouches || [];
                        u.length && (b.current = u[0].identifier);
                      }
                      c.focus(), g(dist_d(c, l, b.current)), t(!0);
                    }
                  },
                  function (o) {
                    var l = o.which || o.keyCode;
                    l < 37 ||
                      l > 40 ||
                      (o.preventDefault(),
                      _({
                        left: 39 === l ? 0.05 : 37 === l ? -0.05 : 0,
                        top: 40 === l ? 0.05 : 38 === l ? -0.05 : 0,
                      }));
                  },
                  t,
                ];
              },
              [_, g]
            ),
            A = T[0],
            I = T[1],
            N = T[2];
          return (
            (0, y.useEffect)(
              function () {
                return N;
              },
              [N]
            ),
            y.createElement(
              "div",
              dist_u({}, u, {
                onTouchStart: A,
                onMouseDown: A,
                className: "react-colorful__interactive",
                ref: h,
                onKeyDown: I,
                tabIndex: 0,
                role: "slider",
              })
            )
          );
        }),
        dist_g = function (o) {
          return o.filter(Boolean).join(" ");
        },
        dist_p = function (o) {
          var l = o.color,
            c = o.left,
            u = o.top,
            h = dist_g(["react-colorful__pointer", o.className]);
          return y.createElement(
            "div",
            {
              className: h,
              style: {
                top: 100 * (void 0 === u ? 0.5 : u) + "%",
                left: 100 * c + "%",
              },
            },
            y.createElement("div", {
              className: "react-colorful__pointer-fill",
              style: { backgroundColor: l },
            })
          );
        },
        dist_b = function (o, l, c) {
          return (
            void 0 === l && (l = 0),
            void 0 === c && (c = Math.pow(10, l)),
            Math.round(c * o) / c
          );
        },
        dist_y = function (o) {
          var l = o.s,
            c = o.v,
            u = o.a,
            h = ((200 - l) * c) / 100;
          return {
            h: dist_b(o.h),
            s: dist_b(
              h > 0 && h < 200
                ? ((l * c) / 100 / (h <= 100 ? h : 200 - h)) * 100
                : 0
            ),
            l: dist_b(h / 2),
            a: dist_b(u, 2),
          };
        },
        dist_q = function (o) {
          var l = dist_y(o);
          return "hsl(" + l.h + ", " + l.s + "%, " + l.l + "%)";
        },
        dist_k = function (o) {
          var l = dist_y(o);
          return "hsla(" + l.h + ", " + l.s + "%, " + l.l + "%, " + l.a + ")";
        },
        dist_I = function (o) {
          var l = o.h,
            c = o.s,
            u = o.v,
            h = o.a;
          (l = (l / 360) * 6), (c /= 100), (u /= 100);
          var g = Math.floor(l),
            _ = u * (1 - c),
            b = u * (1 - (l - g) * c),
            y = u * (1 - (1 - l + g) * c),
            w = g % 6;
          return {
            r: dist_b(255 * [u, b, _, _, y, u][w]),
            g: dist_b(255 * [y, u, u, b, _, _][w]),
            b: dist_b(255 * [_, _, y, u, u, b][w]),
            a: dist_b(h, 2),
          };
        },
        dist_L = function (o) {
          var l = o.r,
            c = o.g,
            u = o.b,
            h = o.a,
            g = Math.max(l, c, u),
            _ = g - Math.min(l, c, u),
            b = _
              ? g === l
                ? (c - u) / _
                : g === c
                ? 2 + (u - l) / _
                : 4 + (l - c) / _
              : 0;
          return {
            h: dist_b(60 * (b < 0 ? b + 6 : b)),
            s: dist_b(g ? (_ / g) * 100 : 0),
            v: dist_b((g / 255) * 100),
            a: h,
          };
        },
        rJ = y.memo(function (o) {
          var l = o.hue,
            c = o.onChange,
            u = dist_g(["react-colorful__hue", o.className]);
          return y.createElement(
            "div",
            { className: u },
            y.createElement(
              rZ,
              {
                onMove: function (o) {
                  c({ h: 360 * o.left });
                },
                onKey: function (o) {
                  c({ h: dist_s(l + 360 * o.left, 0, 360) });
                },
                "aria-label": "Hue",
                "aria-valuenow": dist_b(l),
                "aria-valuemax": "360",
                "aria-valuemin": "0",
              },
              y.createElement(dist_p, {
                className: "react-colorful__hue-pointer",
                left: l / 360,
                color: dist_q({ h: l, s: 100, v: 100, a: 1 }),
              })
            )
          );
        }),
        rQ = y.memo(function (o) {
          var l = o.hsva,
            c = o.onChange,
            u = { backgroundColor: dist_q({ h: l.h, s: 100, v: 100, a: 1 }) };
          return y.createElement(
            "div",
            { className: "react-colorful__saturation", style: u },
            y.createElement(
              rZ,
              {
                onMove: function (o) {
                  c({ s: 100 * o.left, v: 100 - 100 * o.top });
                },
                onKey: function (o) {
                  c({
                    s: dist_s(l.s + 100 * o.left, 0, 100),
                    v: dist_s(l.v - 100 * o.top, 0, 100),
                  });
                },
                "aria-label": "Color",
                "aria-valuetext":
                  "Saturation " +
                  dist_b(l.s) +
                  "%, Brightness " +
                  dist_b(l.v) +
                  "%",
              },
              y.createElement(dist_p, {
                className: "react-colorful__saturation-pointer",
                top: 1 - l.v / 100,
                left: l.s / 100,
                color: dist_q(l),
              })
            )
          );
        }),
        dist_F = function (o, l) {
          if (o === l) return !0;
          for (var c in o) if (o[c] !== l[c]) return !1;
          return !0;
        };
      function dist_Y(o, l, c) {
        var u = dist_i(c),
          h = (0, y.useState)(function () {
            return o.toHsva(l);
          }),
          g = h[0],
          _ = h[1],
          b = (0, y.useRef)({ color: l, hsva: g });
        return (
          (0, y.useEffect)(
            function () {
              if (!o.equal(l, b.current.color)) {
                var c = o.toHsva(l);
                (b.current = { hsva: c, color: l }), _(c);
              }
            },
            [l, o]
          ),
          (0, y.useEffect)(
            function () {
              var l;
              dist_F(g, b.current.hsva) ||
                o.equal((l = o.fromHsva(g)), b.current.color) ||
                ((b.current = { hsva: g, color: l }), u(l));
            },
            [g, o, u]
          ),
          [
            g,
            (0, y.useCallback)(function (o) {
              _(function (l) {
                return Object.assign({}, l, o);
              });
            }, []),
          ]
        );
      }
      var r0,
        r1,
        r2,
        r8,
        r9 = "undefined" != typeof window ? y.useLayoutEffect : y.useEffect,
        r6 = new Map(),
        dist_Q = function (o) {
          r9(function () {
            var l = o.current ? o.current.ownerDocument : document;
            if (void 0 !== l && !r6.has(l)) {
              var u = l.createElement("style");
              (u.innerHTML =
                '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
                r6.set(l, u);
              var h = r8 || c.nc;
              h && u.setAttribute("nonce", h), l.head.appendChild(u);
            }
          }, []);
        },
        dist_U = function (o) {
          var l = o.className,
            c = o.colorModel,
            u = o.color,
            h = void 0 === u ? c.defaultColor : u,
            g = o.onChange,
            _ = dist_c(o, ["className", "colorModel", "color", "onChange"]),
            b = (0, y.useRef)(null);
          dist_Q(b);
          var w = dist_Y(c, h, g),
            T = w[0],
            A = w[1],
            I = dist_g(["react-colorful", l]);
          return y.createElement(
            "div",
            dist_u({}, _, { ref: b, className: I }),
            y.createElement(rQ, { hsva: T, onChange: A }),
            y.createElement(rJ, {
              hue: T.h,
              onChange: A,
              className: "react-colorful__last-control",
            })
          );
        },
        dist_ee = function (o) {
          var l = o.className,
            c = o.hsva,
            u = o.onChange,
            h = {
              backgroundImage:
                "linear-gradient(90deg, " +
                dist_k(Object.assign({}, c, { a: 0 })) +
                ", " +
                dist_k(Object.assign({}, c, { a: 1 })) +
                ")",
            },
            g = dist_g(["react-colorful__alpha", l]),
            _ = dist_b(100 * c.a);
          return y.createElement(
            "div",
            { className: g },
            y.createElement("div", {
              className: "react-colorful__alpha-gradient",
              style: h,
            }),
            y.createElement(
              rZ,
              {
                onMove: function (o) {
                  u({ a: o.left });
                },
                onKey: function (o) {
                  u({ a: dist_s(c.a + o.left) });
                },
                "aria-label": "Alpha",
                "aria-valuetext": _ + "%",
                "aria-valuenow": _,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
              },
              y.createElement(dist_p, {
                className: "react-colorful__alpha-pointer",
                left: c.a,
                color: dist_k(c),
              })
            )
          );
        },
        dist_re = function (o) {
          var l = o.className,
            c = o.colorModel,
            u = o.color,
            h = void 0 === u ? c.defaultColor : u,
            g = o.onChange,
            _ = dist_c(o, ["className", "colorModel", "color", "onChange"]),
            b = (0, y.useRef)(null);
          dist_Q(b);
          var w = dist_Y(c, h, g),
            T = w[0],
            A = w[1],
            I = dist_g(["react-colorful", l]);
          return y.createElement(
            "div",
            dist_u({}, _, { ref: b, className: I }),
            y.createElement(rQ, { hsva: T, onChange: A }),
            y.createElement(rJ, { hue: T.h, onChange: A }),
            y.createElement(dist_ee, {
              hsva: T,
              onChange: A,
              className: "react-colorful__last-control",
            })
          );
        },
        r3 = {
          defaultColor: { r: 0, g: 0, b: 0, a: 1 },
          toHsva: dist_L,
          fromHsva: dist_I,
          equal: dist_F,
        },
        Ce = function (o) {
          return y.createElement(dist_re, dist_u({}, o, { colorModel: r3 }));
        },
        r5 = {
          defaultColor: { r: 0, g: 0, b: 0 },
          toHsva: function (o) {
            return dist_L({ r: o.r, g: o.g, b: o.b, a: 1 });
          },
          fromHsva: function (o) {
            var l;
            return { r: (l = dist_I(o)).r, g: l.g, b: l.b };
          },
          equal: dist_F,
        },
        Ne = function (o) {
          return y.createElement(dist_U, dist_u({}, o, { colorModel: r5 }));
        },
        r4 = c(5697),
        r7 = c.n(r4);
      function __awaiter(o, l, c, u) {
        return new (c || (c = Promise))(function (h, g) {
          function fulfilled(o) {
            try {
              step(u.next(o));
            } catch (o) {
              g(o);
            }
          }
          function rejected(o) {
            try {
              step(u.throw(o));
            } catch (o) {
              g(o);
            }
          }
          function step(o) {
            var l;
            o.done
              ? h(o.value)
              : ((l = o.value) instanceof c
                  ? l
                  : new c(function (o) {
                      o(l);
                    })
                ).then(fulfilled, rejected);
          }
          step((u = u.apply(o, l || [])).next());
        });
      }
      function __generator(o, l) {
        var c,
          u,
          h,
          g = {
            label: 0,
            sent: function () {
              if (1 & h[0]) throw h[1];
              return h[1];
            },
            trys: [],
            ops: [],
          },
          _ = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (_.next = verb(0)),
          (_.throw = verb(1)),
          (_.return = verb(2)),
          "function" == typeof Symbol &&
            (_[Symbol.iterator] = function () {
              return this;
            }),
          _
        );
        function verb(b) {
          return function (y) {
            return (function (b) {
              if (c) throw TypeError("Generator is already executing.");
              for (; _ && ((_ = 0), b[0] && (g = 0)), g; )
                try {
                  if (
                    ((c = 1),
                    u &&
                      (h =
                        2 & b[0]
                          ? u.return
                          : b[0]
                          ? u.throw || ((h = u.return) && h.call(u), 0)
                          : u.next) &&
                      !(h = h.call(u, b[1])).done)
                  )
                    return h;
                  switch (((u = 0), h && (b = [2 & b[0], h.value]), b[0])) {
                    case 0:
                    case 1:
                      h = b;
                      break;
                    case 4:
                      return g.label++, { value: b[1], done: !1 };
                    case 5:
                      g.label++, (u = b[1]), (b = [0]);
                      continue;
                    case 7:
                      (b = g.ops.pop()), g.trys.pop();
                      continue;
                    default:
                      if (
                        !(h = (h = g.trys).length > 0 && h[h.length - 1]) &&
                        (6 === b[0] || 2 === b[0])
                      ) {
                        g = 0;
                        continue;
                      }
                      if (3 === b[0] && (!h || (b[1] > h[0] && b[1] < h[3]))) {
                        g.label = b[1];
                        break;
                      }
                      if (6 === b[0] && g.label < h[1]) {
                        (g.label = h[1]), (h = b);
                        break;
                      }
                      if (h && g.label < h[2]) {
                        (g.label = h[2]), g.ops.push(b);
                        break;
                      }
                      h[2] && g.ops.pop(), g.trys.pop();
                      continue;
                  }
                  b = l.call(o, g);
                } catch (o) {
                  (b = [6, o]), (u = 0);
                } finally {
                  c = h = 0;
                }
              if (5 & b[0]) throw b[1];
              return { value: b[0] ? b[1] : void 0, done: !0 };
            })([b, y]);
          };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
      var ne = new Map([
        ["aac", "audio/aac"],
        ["abw", "application/x-abiword"],
        ["arc", "application/x-freearc"],
        ["avif", "image/avif"],
        ["avi", "video/x-msvideo"],
        ["azw", "application/vnd.amazon.ebook"],
        ["bin", "application/octet-stream"],
        ["bmp", "image/bmp"],
        ["bz", "application/x-bzip"],
        ["bz2", "application/x-bzip2"],
        ["cda", "application/x-cdf"],
        ["csh", "application/x-csh"],
        ["css", "text/css"],
        ["csv", "text/csv"],
        ["doc", "application/msword"],
        [
          "docx",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
        ["eot", "application/vnd.ms-fontobject"],
        ["epub", "application/epub+zip"],
        ["gz", "application/gzip"],
        ["gif", "image/gif"],
        ["heic", "image/heic"],
        ["heif", "image/heif"],
        ["htm", "text/html"],
        ["html", "text/html"],
        ["ico", "image/vnd.microsoft.icon"],
        ["ics", "text/calendar"],
        ["jar", "application/java-archive"],
        ["jpeg", "image/jpeg"],
        ["jpg", "image/jpeg"],
        ["js", "text/javascript"],
        ["json", "application/json"],
        ["jsonld", "application/ld+json"],
        ["mid", "audio/midi"],
        ["midi", "audio/midi"],
        ["mjs", "text/javascript"],
        ["mp3", "audio/mpeg"],
        ["mp4", "video/mp4"],
        ["mpeg", "video/mpeg"],
        ["mpkg", "application/vnd.apple.installer+xml"],
        ["odp", "application/vnd.oasis.opendocument.presentation"],
        ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
        ["odt", "application/vnd.oasis.opendocument.text"],
        ["oga", "audio/ogg"],
        ["ogv", "video/ogg"],
        ["ogx", "application/ogg"],
        ["opus", "audio/opus"],
        ["otf", "font/otf"],
        ["png", "image/png"],
        ["pdf", "application/pdf"],
        ["php", "application/x-httpd-php"],
        ["ppt", "application/vnd.ms-powerpoint"],
        [
          "pptx",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        ],
        ["rar", "application/vnd.rar"],
        ["rtf", "application/rtf"],
        ["sh", "application/x-sh"],
        ["svg", "image/svg+xml"],
        ["swf", "application/x-shockwave-flash"],
        ["tar", "application/x-tar"],
        ["tif", "image/tiff"],
        ["tiff", "image/tiff"],
        ["ts", "video/mp2t"],
        ["ttf", "font/ttf"],
        ["txt", "text/plain"],
        ["vsd", "application/vnd.visio"],
        ["wav", "audio/wav"],
        ["weba", "audio/webm"],
        ["webm", "video/webm"],
        ["webp", "image/webp"],
        ["woff", "font/woff"],
        ["woff2", "font/woff2"],
        ["xhtml", "application/xhtml+xml"],
        ["xls", "application/vnd.ms-excel"],
        [
          "xlsx",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ],
        ["xml", "application/xml"],
        ["xul", "application/vnd.mozilla.xul+xml"],
        ["zip", "application/zip"],
        ["7z", "application/x-7z-compressed"],
        ["mkv", "video/x-matroska"],
        ["mov", "video/quicktime"],
        ["msg", "application/vnd.ms-outlook"],
      ]);
      function toFileWithPath(o, l) {
        var c = (function (o) {
          var l = o.name;
          if (l && -1 !== l.lastIndexOf(".") && !o.type) {
            var c = l.split(".").pop().toLowerCase(),
              u = ne.get(c);
            u &&
              Object.defineProperty(o, "type", {
                value: u,
                writable: !1,
                configurable: !1,
                enumerable: !0,
              });
          }
          return o;
        })(o);
        if ("string" != typeof c.path) {
          var u = o.webkitRelativePath;
          Object.defineProperty(c, "path", {
            value:
              "string" == typeof l
                ? l
                : "string" == typeof u && u.length > 0
                ? u
                : o.name,
            writable: !1,
            configurable: !1,
            enumerable: !0,
          });
        }
        return c;
      }
      var nt = [".DS_Store", "Thumbs.db"];
      function file_selector_isObject(o) {
        return "object" == typeof o && null !== o;
      }
      function noIgnoredFiles(o) {
        return o.filter(function (o) {
          return -1 === nt.indexOf(o.name);
        });
      }
      function fromList(o) {
        if (null === o) return [];
        for (var l = [], c = 0; c < o.length; c++) {
          var u = o[c];
          l.push(u);
        }
        return l;
      }
      function toFilePromises(o) {
        if ("function" != typeof o.webkitGetAsEntry)
          return fromDataTransferItem(o);
        var l = o.webkitGetAsEntry();
        return l && l.isDirectory ? fromDirEntry(l) : fromDataTransferItem(o);
      }
      function fromDataTransferItem(o) {
        var l = o.getAsFile();
        return l
          ? Promise.resolve(toFileWithPath(l))
          : Promise.reject(o + " is not a File");
      }
      function fromEntry(o) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (l) {
            return [
              2,
              o.isDirectory
                ? fromDirEntry(o)
                : (function (o) {
                    return __awaiter(this, void 0, void 0, function () {
                      return __generator(this, function (l) {
                        return [
                          2,
                          new Promise(function (l, c) {
                            o.file(
                              function (c) {
                                l(toFileWithPath(c, o.fullPath));
                              },
                              function (o) {
                                c(o);
                              }
                            );
                          }),
                        ];
                      });
                    });
                  })(o),
            ];
          });
        });
      }
      function fromDirEntry(o) {
        var l = o.createReader();
        return new Promise(function (o, c) {
          var u = [];
          !(function readEntries() {
            var h = this;
            l.readEntries(
              function (l) {
                return __awaiter(h, void 0, void 0, function () {
                  var h;
                  return __generator(this, function (g) {
                    switch (g.label) {
                      case 0:
                        if (l.length) return [3, 5];
                        g.label = 1;
                      case 1:
                        return g.trys.push([1, 3, , 4]), [4, Promise.all(u)];
                      case 2:
                        return o(g.sent()), [3, 4];
                      case 3:
                        return c(g.sent()), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (h = Promise.all(l.map(fromEntry))),
                          u.push(h),
                          readEntries(),
                          (g.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function (o) {
                c(o);
              }
            );
          })();
        });
      }
      var nr = c(8363);
      function utils_ownKeys(o, l) {
        var c = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(o);
          l &&
            (u = u.filter(function (l) {
              return Object.getOwnPropertyDescriptor(o, l).enumerable;
            })),
            c.push.apply(c, u);
        }
        return c;
      }
      function _objectSpread(o) {
        for (var l = 1; l < arguments.length; l++) {
          var c = null != arguments[l] ? arguments[l] : {};
          l % 2
            ? utils_ownKeys(Object(c), !0).forEach(function (l) {
                utils_defineProperty(o, l, c[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
            : utils_ownKeys(Object(c)).forEach(function (l) {
                Object.defineProperty(
                  o,
                  l,
                  Object.getOwnPropertyDescriptor(c, l)
                );
              });
        }
        return o;
      }
      function utils_defineProperty(o, l, c) {
        return (
          l in o
            ? Object.defineProperty(o, l, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[l] = c),
          o
        );
      }
      function _slicedToArray(o, l) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, l) {
            var c,
              u,
              h =
                null == o
                  ? null
                  : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                    o["@@iterator"];
            if (null != h) {
              var g = [],
                _ = !0,
                b = !1;
              try {
                for (
                  h = h.call(o);
                  !(_ = (c = h.next()).done) &&
                  (g.push(c.value), !l || g.length !== l);
                  _ = !0
                );
              } catch (o) {
                (b = !0), (u = o);
              } finally {
                try {
                  _ || null == h.return || h.return();
                } finally {
                  if (b) throw u;
                }
              }
              return g;
            }
          })(o, l) ||
          (function (o, l) {
            if (o) {
              if ("string" == typeof o) return _arrayLikeToArray(o, l);
              var c = Object.prototype.toString.call(o).slice(8, -1);
              if (
                ("Object" === c && o.constructor && (c = o.constructor.name),
                "Map" === c || "Set" === c)
              )
                return Array.from(o);
              if (
                "Arguments" === c ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
              )
                return _arrayLikeToArray(o, l);
            }
          })(o, l) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(o, l) {
        (null == l || l > o.length) && (l = o.length);
        for (var c = 0, u = Array(l); c < l; c++) u[c] = o[c];
        return u;
      }
      var getInvalidTypeRejectionErr = function (o) {
          var l = Array.isArray(
            (o = Array.isArray(o) && 1 === o.length ? o[0] : o)
          )
            ? "one of ".concat(o.join(", "))
            : o;
          return {
            code: "file-invalid-type",
            message: "File type must be ".concat(l),
          };
        },
        getTooLargeRejectionErr = function (o) {
          return {
            code: "file-too-large",
            message: "File is larger than "
              .concat(o, " ")
              .concat(1 === o ? "byte" : "bytes"),
          };
        },
        getTooSmallRejectionErr = function (o) {
          return {
            code: "file-too-small",
            message: "File is smaller than "
              .concat(o, " ")
              .concat(1 === o ? "byte" : "bytes"),
          };
        },
        nn = { code: "too-many-files", message: "Too many files" };
      function fileAccepted(o, l) {
        var c = "application/x-moz-file" === o.type || (0, nr.Z)(o, l);
        return [c, c ? null : getInvalidTypeRejectionErr(l)];
      }
      function fileMatchSize(o, l, c) {
        if (isDefined(o.size)) {
          if (isDefined(l) && isDefined(c)) {
            if (o.size > c) return [!1, getTooLargeRejectionErr(c)];
            if (o.size < l) return [!1, getTooSmallRejectionErr(l)];
          } else if (isDefined(l) && o.size < l)
            return [!1, getTooSmallRejectionErr(l)];
          else if (isDefined(c) && o.size > c)
            return [!1, getTooLargeRejectionErr(c)];
        }
        return [!0, null];
      }
      function isDefined(o) {
        return null != o;
      }
      function isPropagationStopped(o) {
        return "function" == typeof o.isPropagationStopped
          ? o.isPropagationStopped()
          : void 0 !== o.cancelBubble && o.cancelBubble;
      }
      function isEvtWithFiles(o) {
        return o.dataTransfer
          ? Array.prototype.some.call(o.dataTransfer.types, function (o) {
              return "Files" === o || "application/x-moz-file" === o;
            })
          : !!o.target && !!o.target.files;
      }
      function onDocumentDragOver(o) {
        o.preventDefault();
      }
      function composeEventHandlers() {
        for (var o = arguments.length, l = Array(o), c = 0; c < o; c++)
          l[c] = arguments[c];
        return function (o) {
          for (
            var c = arguments.length, u = Array(c > 1 ? c - 1 : 0), h = 1;
            h < c;
            h++
          )
            u[h - 1] = arguments[h];
          return l.some(function (l) {
            return (
              !isPropagationStopped(o) && l && l.apply(void 0, [o].concat(u)),
              isPropagationStopped(o)
            );
          });
        };
      }
      var no = ["children"],
        ni = ["open"],
        na = [
          "refKey",
          "role",
          "onKeyDown",
          "onFocus",
          "onBlur",
          "onClick",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop",
        ],
        nl = ["refKey", "onChange", "onClick"];
      function es_slicedToArray(o, l) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, l) {
            var c,
              u,
              h =
                null == o
                  ? null
                  : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                    o["@@iterator"];
            if (null != h) {
              var g = [],
                _ = !0,
                b = !1;
              try {
                for (
                  h = h.call(o);
                  !(_ = (c = h.next()).done) &&
                  (g.push(c.value), !l || g.length !== l);
                  _ = !0
                );
              } catch (o) {
                (b = !0), (u = o);
              } finally {
                try {
                  _ || null == h.return || h.return();
                } finally {
                  if (b) throw u;
                }
              }
              return g;
            }
          })(o, l) ||
          es_unsupportedIterableToArray(o, l) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function es_unsupportedIterableToArray(o, l) {
        if (o) {
          if ("string" == typeof o) return es_arrayLikeToArray(o, l);
          var c = Object.prototype.toString.call(o).slice(8, -1);
          if (
            ("Object" === c && o.constructor && (c = o.constructor.name),
            "Map" === c || "Set" === c)
          )
            return Array.from(o);
          if (
            "Arguments" === c ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return es_arrayLikeToArray(o, l);
        }
      }
      function es_arrayLikeToArray(o, l) {
        (null == l || l > o.length) && (l = o.length);
        for (var c = 0, u = Array(l); c < l; c++) u[c] = o[c];
        return u;
      }
      function es_ownKeys(o, l) {
        var c = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(o);
          l &&
            (u = u.filter(function (l) {
              return Object.getOwnPropertyDescriptor(o, l).enumerable;
            })),
            c.push.apply(c, u);
        }
        return c;
      }
      function es_objectSpread(o) {
        for (var l = 1; l < arguments.length; l++) {
          var c = null != arguments[l] ? arguments[l] : {};
          l % 2
            ? es_ownKeys(Object(c), !0).forEach(function (l) {
                es_defineProperty(o, l, c[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
            : es_ownKeys(Object(c)).forEach(function (l) {
                Object.defineProperty(
                  o,
                  l,
                  Object.getOwnPropertyDescriptor(c, l)
                );
              });
        }
        return o;
      }
      function es_defineProperty(o, l, c) {
        return (
          l in o
            ? Object.defineProperty(o, l, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[l] = c),
          o
        );
      }
      function es_objectWithoutProperties(o, l) {
        if (null == o) return {};
        var c,
          u,
          h = (function (o, l) {
            if (null == o) return {};
            var c,
              u,
              h = {},
              g = Object.keys(o);
            for (u = 0; u < g.length; u++)
              (c = g[u]), l.indexOf(c) >= 0 || (h[c] = o[c]);
            return h;
          })(o, l);
        if (Object.getOwnPropertySymbols) {
          var g = Object.getOwnPropertySymbols(o);
          for (u = 0; u < g.length; u++)
            (c = g[u]),
              !(l.indexOf(c) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(o, c) &&
                (h[c] = o[c]);
        }
        return h;
      }
      var ns = (0, y.forwardRef)(function (o, l) {
        var c = o.children,
          u = useDropzone(es_objectWithoutProperties(o, no)),
          h = u.open,
          g = es_objectWithoutProperties(u, ni);
        return (
          (0, y.useImperativeHandle)(
            l,
            function () {
              return { open: h };
            },
            [h]
          ),
          y.createElement(
            y.Fragment,
            null,
            c(es_objectSpread(es_objectSpread({}, g), {}, { open: h }))
          )
        );
      });
      ns.displayName = "Dropzone";
      var nc = {
        disabled: !1,
        getFilesFromEvent: function (o) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (l) {
              return file_selector_isObject(o) &&
                file_selector_isObject(o.dataTransfer)
                ? [
                    2,
                    (function (o, l) {
                      return __awaiter(this, void 0, void 0, function () {
                        var c;
                        return __generator(this, function (u) {
                          switch (u.label) {
                            case 0:
                              if (null === o) return [2, []];
                              if (!o.items) return [3, 2];
                              if (
                                ((c = fromList(o.items).filter(function (o) {
                                  return "file" === o.kind;
                                })),
                                "drop" !== l)
                              )
                                return [2, c];
                              return [4, Promise.all(c.map(toFilePromises))];
                            case 1:
                              return [
                                2,
                                noIgnoredFiles(
                                  (function flatten(o) {
                                    return o.reduce(function (o, l) {
                                      return (function () {
                                        for (
                                          var o = [], l = 0;
                                          l < arguments.length;
                                          l++
                                        )
                                          o = o.concat(
                                            (function (o, l) {
                                              var c =
                                                "function" == typeof Symbol &&
                                                o[Symbol.iterator];
                                              if (!c) return o;
                                              var u,
                                                h,
                                                g = c.call(o),
                                                _ = [];
                                              try {
                                                for (
                                                  ;
                                                  (void 0 === l || l-- > 0) &&
                                                  !(u = g.next()).done;

                                                )
                                                  _.push(u.value);
                                              } catch (o) {
                                                h = { error: o };
                                              } finally {
                                                try {
                                                  u &&
                                                    !u.done &&
                                                    (c = g.return) &&
                                                    c.call(g);
                                                } finally {
                                                  if (h) throw h.error;
                                                }
                                              }
                                              return _;
                                            })(arguments[l])
                                          );
                                        return o;
                                      })(
                                        o,
                                        Array.isArray(l) ? flatten(l) : [l]
                                      );
                                    }, []);
                                  })(u.sent())
                                ),
                              ];
                            case 2:
                              return [
                                2,
                                noIgnoredFiles(
                                  fromList(o.files).map(function (o) {
                                    return toFileWithPath(o);
                                  })
                                ),
                              ];
                          }
                        });
                      });
                    })(o.dataTransfer, o.type),
                  ]
                : file_selector_isObject(o) && file_selector_isObject(o.target)
                ? [
                    2,
                    fromList(o.target.files).map(function (o) {
                      return toFileWithPath(o);
                    }),
                  ]
                : Array.isArray(o) &&
                  o.every(function (o) {
                    return "getFile" in o && "function" == typeof o.getFile;
                  })
                ? [
                    2,
                    (function (o) {
                      return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (l) {
                          switch (l.label) {
                            case 0:
                              return [
                                4,
                                Promise.all(
                                  o.map(function (o) {
                                    return o.getFile();
                                  })
                                ),
                              ];
                            case 1:
                              return [
                                2,
                                l.sent().map(function (o) {
                                  return toFileWithPath(o);
                                }),
                              ];
                          }
                        });
                      });
                    })(o),
                  ]
                : [2, []];
            });
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !0,
      };
      (ns.defaultProps = nc),
        (ns.propTypes = {
          children: r7().func,
          accept: r7().oneOfType([r7().string, r7().arrayOf(r7().string)]),
          multiple: r7().bool,
          preventDropOnDocument: r7().bool,
          noClick: r7().bool,
          noKeyboard: r7().bool,
          noDrag: r7().bool,
          noDragEventsBubbling: r7().bool,
          minSize: r7().number,
          maxSize: r7().number,
          maxFiles: r7().number,
          disabled: r7().bool,
          getFilesFromEvent: r7().func,
          onFileDialogCancel: r7().func,
          onFileDialogOpen: r7().func,
          useFsAccessApi: r7().bool,
          onDragEnter: r7().func,
          onDragLeave: r7().func,
          onDragOver: r7().func,
          onDrop: r7().func,
          onDropAccepted: r7().func,
          onDropRejected: r7().func,
          validator: r7().func,
        });
      var nu = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: [],
      };
      function useDropzone() {
        var o,
          l,
          c,
          u,
          h,
          g,
          _,
          b =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          w = es_objectSpread(es_objectSpread({}, nc), b),
          T = w.accept,
          A = w.disabled,
          I = w.getFilesFromEvent,
          N = w.maxSize,
          W = w.minSize,
          B = w.multiple,
          F = w.maxFiles,
          H = w.onDragEnter,
          U = w.onDragLeave,
          K = w.onDragOver,
          G = w.onDrop,
          Y = w.onDropAccepted,
          q = w.onDropRejected,
          X = w.onFileDialogCancel,
          Z = w.onFileDialogOpen,
          Q = w.useFsAccessApi,
          ee = w.preventDropOnDocument,
          et = w.noClick,
          er = w.noKeyboard,
          en = w.noDrag,
          eo = w.noDragEventsBubbling,
          ei = w.validator,
          ea = (0, y.useMemo)(
            function () {
              return "function" == typeof Z ? Z : es_noop;
            },
            [Z]
          ),
          el = (0, y.useMemo)(
            function () {
              return "function" == typeof X ? X : es_noop;
            },
            [X]
          ),
          es = (0, y.useRef)(null),
          ec = (0, y.useRef)(null),
          eu = es_slicedToArray((0, y.useReducer)(reducer, nu), 2),
          ed = eu[0],
          ef = eu[1],
          ep = ed.isFocused,
          eh = ed.isFileDialogActive,
          eg = ed.draggedFiles,
          em = (0, y.useRef)(
            "undefined" != typeof window &&
              window.isSecureContext &&
              Q &&
              "showOpenFilePicker" in window
          ),
          onWindowFocus = function () {
            !em.current &&
              eh &&
              setTimeout(function () {
                ec.current &&
                  !ec.current.files.length &&
                  (ef({ type: "closeDialog" }), el());
              }, 300);
          };
        (0, y.useEffect)(
          function () {
            return (
              window.addEventListener("focus", onWindowFocus, !1),
              function () {
                window.removeEventListener("focus", onWindowFocus, !1);
              }
            );
          },
          [ec, eh, el, em]
        );
        var e_ = (0, y.useRef)([]),
          onDocumentDrop = function (o) {
            (es.current && es.current.contains(o.target)) ||
              (o.preventDefault(), (e_.current = []));
          };
        (0, y.useEffect)(
          function () {
            return (
              ee &&
                (document.addEventListener("dragover", onDocumentDragOver, !1),
                document.addEventListener("drop", onDocumentDrop, !1)),
              function () {
                ee &&
                  (document.removeEventListener("dragover", onDocumentDragOver),
                  document.removeEventListener("drop", onDocumentDrop));
              }
            );
          },
          [es, ee]
        );
        var eb = (0, y.useCallback)(
            function (o) {
              var l;
              o.preventDefault(),
                o.persist(),
                stopPropagation(o),
                (e_.current = [].concat(
                  (function (o) {
                    if (Array.isArray(o)) return es_arrayLikeToArray(o);
                  })((l = e_.current)) ||
                    (function (o) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != o[Symbol.iterator]) ||
                        null != o["@@iterator"]
                      )
                        return Array.from(o);
                    })(l) ||
                    es_unsupportedIterableToArray(l) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(),
                  [o.target]
                )),
                isEvtWithFiles(o) &&
                  Promise.resolve(I(o)).then(function (l) {
                    (!isPropagationStopped(o) || eo) &&
                      (ef({
                        draggedFiles: l,
                        isDragActive: !0,
                        type: "setDraggedFiles",
                      }),
                      H && H(o));
                  });
            },
            [I, H, eo]
          ),
          ev = (0, y.useCallback)(
            function (o) {
              o.preventDefault(), o.persist(), stopPropagation(o);
              var l = isEvtWithFiles(o);
              if (l && o.dataTransfer)
                try {
                  o.dataTransfer.dropEffect = "copy";
                } catch (o) {}
              return l && K && K(o), !1;
            },
            [K, eo]
          ),
          ey = (0, y.useCallback)(
            function (o) {
              o.preventDefault(), o.persist(), stopPropagation(o);
              var l = e_.current.filter(function (o) {
                  return es.current && es.current.contains(o);
                }),
                c = l.indexOf(o.target);
              -1 !== c && l.splice(c, 1),
                (e_.current = l),
                !(l.length > 0) &&
                  (ef({
                    isDragActive: !1,
                    type: "setDraggedFiles",
                    draggedFiles: [],
                  }),
                  isEvtWithFiles(o) && U && U(o));
            },
            [es, U, eo]
          ),
          ew = (0, y.useCallback)(
            function (o, l) {
              var c = [],
                u = [];
              o.forEach(function (o) {
                var l = es_slicedToArray(fileAccepted(o, T), 2),
                  h = l[0],
                  g = l[1],
                  _ = es_slicedToArray(fileMatchSize(o, W, N), 2),
                  b = _[0],
                  y = _[1],
                  w = ei ? ei(o) : null;
                if (h && b && !w) c.push(o);
                else {
                  var A = [g, y];
                  w && (A = A.concat(w)),
                    u.push({
                      file: o,
                      errors: A.filter(function (o) {
                        return o;
                      }),
                    });
                }
              }),
                ((!B && c.length > 1) || (B && F >= 1 && c.length > F)) &&
                  (c.forEach(function (o) {
                    u.push({ file: o, errors: [nn] });
                  }),
                  c.splice(0)),
                ef({ acceptedFiles: c, fileRejections: u, type: "setFiles" }),
                G && G(c, u, l),
                u.length > 0 && q && q(u, l),
                c.length > 0 && Y && Y(c, l);
            },
            [ef, B, T, W, N, F, G, Y, q, ei]
          ),
          ex = (0, y.useCallback)(
            function (o) {
              o.preventDefault(),
                o.persist(),
                stopPropagation(o),
                (e_.current = []),
                isEvtWithFiles(o) &&
                  Promise.resolve(I(o)).then(function (l) {
                    (!isPropagationStopped(o) || eo) && ew(l, o);
                  }),
                ef({ type: "reset" });
            },
            [I, ew, eo]
          ),
          eE = (0, y.useCallback)(
            function () {
              if (em.current) {
                ef({ type: "openDialog" }), ea();
                var o,
                  l = {
                    multiple: B,
                    types: [
                      {
                        description: "everything",
                        accept: Array.isArray(
                          (o = "string" == typeof (o = T) ? o.split(",") : o)
                        )
                          ? o
                              .filter(function (o) {
                                return (
                                  "audio/*" === o ||
                                  "video/*" === o ||
                                  "image/*" === o ||
                                  "text/*" === o ||
                                  /\w+\/[-+.\w]+/g.test(o)
                                );
                              })
                              .reduce(function (o, l) {
                                return _objectSpread(
                                  _objectSpread({}, o),
                                  {},
                                  utils_defineProperty({}, l, [])
                                );
                              }, {})
                          : {},
                      },
                    ],
                  };
                window
                  .showOpenFilePicker(l)
                  .then(function (o) {
                    return I(o);
                  })
                  .then(function (o) {
                    ew(o, null), ef({ type: "closeDialog" });
                  })
                  .catch(function (o) {
                    o instanceof DOMException &&
                    ("AbortError" === o.name || o.code === o.ABORT_ERR)
                      ? (el(o), ef({ type: "closeDialog" }))
                      : o instanceof DOMException &&
                        ("SecurityError" === o.name ||
                          o.code === o.SECURITY_ERR) &&
                        ((em.current = !1),
                        ec.current &&
                          ((ec.current.value = null), ec.current.click()));
                  });
                return;
              }
              ec.current &&
                (ef({ type: "openDialog" }),
                ea(),
                (ec.current.value = null),
                ec.current.click());
            },
            [ef, ea, el, Q, ew, T, B]
          ),
          eS = (0, y.useCallback)(
            function (o) {
              es.current &&
                es.current.isEqualNode(o.target) &&
                (" " === o.key ||
                  "Enter" === o.key ||
                  32 === o.keyCode ||
                  13 === o.keyCode) &&
                (o.preventDefault(), eE());
            },
            [es, eE]
          ),
          e$ = (0, y.useCallback)(function () {
            ef({ type: "focus" });
          }, []),
          ek = (0, y.useCallback)(function () {
            ef({ type: "blur" });
          }, []),
          eC = (0, y.useCallback)(
            function () {
              et ||
                ((function () {
                  var o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window.navigator.userAgent;
                  return (
                    -1 !== o.indexOf("MSIE") ||
                    -1 !== o.indexOf("Trident/") ||
                    -1 !== o.indexOf("Edge/")
                  );
                })()
                  ? setTimeout(eE, 0)
                  : eE());
            },
            [et, eE]
          ),
          composeHandler = function (o) {
            return A ? null : o;
          },
          composeKeyboardHandler = function (o) {
            return er ? null : composeHandler(o);
          },
          composeDragHandler = function (o) {
            return en ? null : composeHandler(o);
          },
          stopPropagation = function (o) {
            eo && o.stopPropagation();
          },
          eO = (0, y.useMemo)(
            function () {
              return function () {
                var o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  l = o.refKey,
                  c = void 0 === l ? "ref" : l,
                  u = o.role,
                  h = o.onKeyDown,
                  g = o.onFocus,
                  _ = o.onBlur,
                  b = o.onClick,
                  y = o.onDragEnter,
                  w = o.onDragOver,
                  T = o.onDragLeave,
                  I = o.onDrop,
                  N = es_objectWithoutProperties(o, na);
                return es_objectSpread(
                  es_objectSpread(
                    es_defineProperty(
                      {
                        onKeyDown: composeKeyboardHandler(
                          composeEventHandlers(h, eS)
                        ),
                        onFocus: composeKeyboardHandler(
                          composeEventHandlers(g, e$)
                        ),
                        onBlur: composeKeyboardHandler(
                          composeEventHandlers(_, ek)
                        ),
                        onClick: composeHandler(composeEventHandlers(b, eC)),
                        onDragEnter: composeDragHandler(
                          composeEventHandlers(y, eb)
                        ),
                        onDragOver: composeDragHandler(
                          composeEventHandlers(w, ev)
                        ),
                        onDragLeave: composeDragHandler(
                          composeEventHandlers(T, ey)
                        ),
                        onDrop: composeDragHandler(composeEventHandlers(I, ex)),
                        role: "string" == typeof u && "" !== u ? u : "button",
                      },
                      c,
                      es
                    ),
                    A || er ? {} : { tabIndex: 0 }
                  ),
                  N
                );
              };
            },
            [es, eS, e$, ek, eC, eb, ev, ey, ex, er, en, A]
          ),
          ej = (0, y.useCallback)(function (o) {
            o.stopPropagation();
          }, []),
          eT = (0, y.useMemo)(
            function () {
              return function () {
                var o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  l = o.refKey,
                  c = void 0 === l ? "ref" : l,
                  u = o.onChange,
                  h = o.onClick,
                  g = es_objectWithoutProperties(o, nl);
                return es_objectSpread(
                  es_objectSpread(
                    {},
                    es_defineProperty(
                      {
                        accept: T,
                        multiple: B,
                        type: "file",
                        style: { display: "none" },
                        onChange: composeHandler(composeEventHandlers(u, ex)),
                        onClick: composeHandler(composeEventHandlers(h, ej)),
                        tabIndex: -1,
                      },
                      c,
                      ec
                    )
                  ),
                  g
                );
              };
            },
            [ec, T, B, ex, A]
          ),
          eR = eg.length,
          eP =
            eR > 0 &&
            ((l = (o = {
              files: eg,
              accept: T,
              minSize: W,
              maxSize: N,
              multiple: B,
              maxFiles: F,
            }).files),
            (c = o.accept),
            (u = o.minSize),
            (h = o.maxSize),
            (g = o.multiple),
            (_ = o.maxFiles),
            (!!g || !(l.length > 1)) &&
              (!g || !(_ >= 1) || !(l.length > _)) &&
              l.every(function (o) {
                var l = _slicedToArray(fileAccepted(o, c), 1)[0],
                  g = _slicedToArray(fileMatchSize(o, u, h), 1)[0];
                return l && g;
              }));
        return es_objectSpread(
          es_objectSpread({}, ed),
          {},
          {
            isDragAccept: eP,
            isDragReject: eR > 0 && !eP,
            isFocused: ep && !A,
            getRootProps: eO,
            getInputProps: eT,
            rootRef: es,
            inputRef: ec,
            open: composeHandler(eE),
          }
        );
      }
      function reducer(o, l) {
        switch (l.type) {
          case "focus":
            return es_objectSpread(
              es_objectSpread({}, o),
              {},
              { isFocused: !0 }
            );
          case "blur":
            return es_objectSpread(
              es_objectSpread({}, o),
              {},
              { isFocused: !1 }
            );
          case "openDialog":
            return es_objectSpread(
              es_objectSpread({}, nu),
              {},
              { isFileDialogActive: !0 }
            );
          case "closeDialog":
            return es_objectSpread(
              es_objectSpread({}, o),
              {},
              { isFileDialogActive: !1 }
            );
          case "setDraggedFiles":
            var c = l.isDragActive,
              u = l.draggedFiles;
            return es_objectSpread(
              es_objectSpread({}, o),
              {},
              { draggedFiles: u, isDragActive: c }
            );
          case "setFiles":
            return es_objectSpread(
              es_objectSpread({}, o),
              {},
              {
                acceptedFiles: l.acceptedFiles,
                fileRejections: l.fileRejections,
              }
            );
          case "reset":
            return es_objectSpread({}, nu);
          default:
            return o;
        }
      }
      function es_noop() {}
      let nd =
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        nf = nd ? y.useEffect : y.useLayoutEffect;
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let subscribeWithSelector = (o) => (l, c, u) => {
        let h = u.subscribe;
        u.subscribe = (o, l, c) => {
          let g = o;
          if (l) {
            let h = (null == c ? void 0 : c.equalityFn) || Object.is,
              _ = o(u.getState());
            (g = (c) => {
              let u = o(c);
              if (!h(_, u)) {
                let o = _;
                l((_ = u), o);
              }
            }),
              (null == c ? void 0 : c.fireImmediately) && l(_, _);
          }
          return h(g);
        };
        let g = o(l, c, u);
        return g;
      };
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      var np = c(4529),
        nh = c.n(np);
      let join = (...o) => o.filter(Boolean).join(".");
      function useDeepMemo(o, l) {
        return (0, y.useMemo)(
          o,
          (function (o, l) {
            let c = (0, y.useRef)(),
              u = l ? dequal : shallow;
            return u(o, c.current) || (c.current = o), c.current;
          })(l, !0)
        );
      }
      let useVisiblePaths = (o) => {
        let [l, c] = (0, y.useState)(o.getVisiblePaths());
        return (
          (0, y.useEffect)(() => {
            c(o.getVisiblePaths());
            let l = o.useStore.subscribe(o.getVisiblePaths, c, {
              equalityFn: shallow,
            });
            return () => l();
          }, [o]),
          l
        );
      };
      function usePopin(o = 3) {
        let l = (0, y.useRef)(null),
          c = (0, y.useRef)(null),
          [u, h] = (0, y.useState)(!1),
          g = (0, y.useCallback)(() => h(!0), []),
          _ = (0, y.useCallback)(() => h(!1), []);
        return (
          (0, y.useLayoutEffect)(() => {
            if (u) {
              let {
                  bottom: u,
                  top: h,
                  left: g,
                } = l.current.getBoundingClientRect(),
                { height: _ } = c.current.getBoundingClientRect(),
                b = u + _ > window.innerHeight - 40 ? "up" : "down";
              (c.current.style.position = "fixed"),
                (c.current.style.zIndex = "10000"),
                (c.current.style.left = g + "px"),
                "down" === b
                  ? (c.current.style.top = u + o + "px")
                  : (c.current.style.bottom =
                      window.innerHeight - h + o + "px");
            }
          }, [o, u]),
          { popinRef: l, wrapperRef: c, shown: u, show: g, hide: _ }
        );
      }
      !(function (o) {
        o.forEach(function (o) {
          0 > rX.indexOf(o) && (o(rq, rY), rX.push(o));
        });
      })([
        function (o, l) {
          var c = {
              white: "#ffffff",
              bisque: "#ffe4c4",
              blue: "#0000ff",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              azure: "#f0ffff",
              whitesmoke: "#f5f5f5",
              papayawhip: "#ffefd5",
              plum: "#dda0dd",
              blanchedalmond: "#ffebcd",
              black: "#000000",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gainsboro: "#dcdcdc",
              cornsilk: "#fff8dc",
              cornflowerblue: "#6495ed",
              burlywood: "#deb887",
              aquamarine: "#7fffd4",
              beige: "#f5f5dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkkhaki: "#bdb76b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              peachpuff: "#ffdab9",
              darkmagenta: "#8b008b",
              darkred: "#8b0000",
              darkorchid: "#9932cc",
              darkorange: "#ff8c00",
              darkslateblue: "#483d8b",
              gray: "#808080",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              wheat: "#f5deb3",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              ghostwhite: "#f8f8ff",
              darkviolet: "#9400d3",
              magenta: "#ff00ff",
              green: "#008000",
              dodgerblue: "#1e90ff",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              blueviolet: "#8a2be2",
              forestgreen: "#228b22",
              lawngreen: "#7cfc00",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              fuchsia: "#ff00ff",
              brown: "#a52a2a",
              maroon: "#800000",
              mediumblue: "#0000cd",
              lightcoral: "#f08080",
              darkturquoise: "#00ced1",
              lightcyan: "#e0ffff",
              ivory: "#fffff0",
              lightyellow: "#ffffe0",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              linen: "#faf0e6",
              mediumaquamarine: "#66cdaa",
              lemonchiffon: "#fffacd",
              lime: "#00ff00",
              khaki: "#f0e68c",
              mediumseagreen: "#3cb371",
              limegreen: "#32cd32",
              mediumspringgreen: "#00fa9a",
              lightskyblue: "#87cefa",
              lightblue: "#add8e6",
              midnightblue: "#191970",
              lightpink: "#ffb6c1",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              mintcream: "#f5fffa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              navajowhite: "#ffdead",
              navy: "#000080",
              mediumvioletred: "#c71585",
              powderblue: "#b0e0e6",
              palegoldenrod: "#eee8aa",
              oldlace: "#fdf5e6",
              paleturquoise: "#afeeee",
              mediumturquoise: "#48d1cc",
              mediumorchid: "#ba55d3",
              rebeccapurple: "#663399",
              lightsteelblue: "#b0c4de",
              mediumslateblue: "#7b68ee",
              thistle: "#d8bfd8",
              tan: "#d2b48c",
              orchid: "#da70d6",
              mediumpurple: "#9370db",
              purple: "#800080",
              pink: "#ffc0cb",
              skyblue: "#87ceeb",
              springgreen: "#00ff7f",
              palegreen: "#98fb98",
              red: "#ff0000",
              yellow: "#ffff00",
              slateblue: "#6a5acd",
              lavenderblush: "#fff0f5",
              peru: "#cd853f",
              palevioletred: "#db7093",
              violet: "#ee82ee",
              teal: "#008080",
              slategray: "#708090",
              slategrey: "#708090",
              aliceblue: "#f0f8ff",
              darkseagreen: "#8fbc8f",
              darkolivegreen: "#556b2f",
              greenyellow: "#adff2f",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              tomato: "#ff6347",
              silver: "#c0c0c0",
              sienna: "#a0522d",
              lavender: "#e6e6fa",
              lightgreen: "#90ee90",
              orange: "#ffa500",
              orangered: "#ff4500",
              steelblue: "#4682b4",
              royalblue: "#4169e1",
              turquoise: "#40e0d0",
              yellowgreen: "#9acd32",
              salmon: "#fa8072",
              saddlebrown: "#8b4513",
              sandybrown: "#f4a460",
              rosybrown: "#bc8f8f",
              darksalmon: "#e9967a",
              lightgoldenrodyellow: "#fafad2",
              snow: "#fffafa",
              lightgrey: "#d3d3d3",
              lightgray: "#d3d3d3",
              dimgray: "#696969",
              dimgrey: "#696969",
              olivedrab: "#6b8e23",
              olive: "#808000",
            },
            u = {};
          for (var h in c) u[c[h]] = h;
          var g = {};
          (o.prototype.toName = function (l) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
              return "transparent";
            var h,
              _ = u[this.toHex()];
            if (_) return _;
            if (null == l ? void 0 : l.closest) {
              var b = this.toRgb(),
                y = 1 / 0,
                w = "black";
              if (!g.length) for (var T in c) g[T] = new o(c[T]).toRgb();
              for (var A in c) {
                var I =
                  ((h = g[A]),
                  Math.pow(b.r - h.r, 2) +
                    Math.pow(b.g - h.g, 2) +
                    Math.pow(b.b - h.b, 2));
                I < y && ((y = I), (w = A));
              }
              return w;
            }
          }),
            l.string.push([
              function (l) {
                var u = l.toLowerCase(),
                  h = "transparent" === u ? "#0000" : c[u];
                return h ? new o(h).toRgb() : null;
              },
              "name",
            ]);
        },
      ]);
      let ng = { rgb: "toRgb", hsl: "toHsl", hsv: "toHsv", hex: "toHex" };
      function leva_esm_convert(o, { format: l, hasAlpha: c, isString: u }) {
        let h = ng[l] + (u && "hex" !== l ? "String" : ""),
          g = o[h]();
        return "object" != typeof g || c
          ? g
          : (function (o, l) {
              let c = vector_plugin_6f82aee9_esm_objectSpread2({}, o);
              return l.forEach((l) => l in o && delete c[l]), c;
            })(g, ["a"]);
      }
      v8n.extend({ color: () => (o) => colord_w(o).isValid() });
      let leva_esm_sanitize$2 = (o, l) => {
        let c = colord_w(o);
        if (!c.isValid()) throw Error("Invalid color");
        return leva_esm_convert(c, l);
      };
      var nm = Object.freeze({
        __proto__: null,
        schema: (o) => v8n().color().test(o),
        sanitize: leva_esm_sanitize$2,
        format: (o, l) =>
          leva_esm_convert(
            colord_w(o),
            vector_plugin_6f82aee9_esm_objectSpread2(
              vector_plugin_6f82aee9_esm_objectSpread2({}, l),
              {},
              { isString: !0, format: "hex" }
            )
          ),
        normalize: ({ value: o }) => {
          let l = colord_x(o)[1],
            c =
              "object" == typeof o
                ? "a" in o
                : ("hex" === l && 8 === o.length) ||
                  /^(rgba)|(hsla)|(hsva)/.test(o),
            u = {
              format: "name" === l ? "hex" : l,
              hasAlpha: c,
              isString: "string" == typeof o,
            };
          return { value: leva_esm_sanitize$2(o, u), settings: u };
        },
      });
      let n_ = tZ("div", {
          position: "relative",
          boxSizing: "border-box",
          borderRadius: "$sm",
          overflow: "hidden",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          backgroundColor: "#fff",
          backgroundImage:
            'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
          $inputStyle: "",
          $hover: "",
          zIndex: 1,
          variants: { active: { true: { $inputStyle: "$accent1" } } },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "currentColor",
            zIndex: 1,
          },
        }),
        nb = tZ("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        nv = tZ("div", {
          width: "$colorPickerWidth",
          height: "$colorPickerHeight",
          ".react-colorful": {
            width: "100%",
            height: "100%",
            boxShadow: "$level2",
            cursor: "crosshair",
          },
          ".react-colorful__saturation": { borderRadius: "$sm $sm 0 0" },
          ".react-colorful__alpha, .react-colorful__hue": { height: 10 },
          ".react-colorful__last-control": { borderRadius: "0 0 $sm $sm" },
          ".react-colorful__pointer": { height: 12, width: 12 },
        });
      function convertToRgb(o, l) {
        return "rgb" !== l ? colord_w(o).toRgb() : o;
      }
      function Color({ value: o, displayValue: l, settings: c, onUpdate: u }) {
        let { emitOnEditStart: h, emitOnEditEnd: g } = useInputContext(),
          { format: _, hasAlpha: b } = c,
          {
            popinRef: w,
            wrapperRef: T,
            shown: A,
            show: I,
            hide: N,
          } = usePopin(),
          W = (0, y.useRef)(0),
          [B, F] = (0, y.useState)(() => convertToRgb(o, _)),
          H = b ? Ce : Ne,
          showPicker = () => {
            F(convertToRgb(o, _)), I(), h();
          },
          hidePicker = () => {
            N(), g(), window.clearTimeout(W.current);
          },
          hideAfterDelay = () => {
            W.current = window.setTimeout(hidePicker, 500);
          };
        return (
          (0, y.useEffect)(() => () => window.clearTimeout(W.current), []),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(n_, {
              ref: w,
              active: A,
              onClick: () => showPicker(),
              style: { color: l },
            }),
            A &&
              y.createElement(
                Portal,
                null,
                y.createElement(rc, { onPointerUp: hidePicker }),
                y.createElement(
                  nv,
                  {
                    ref: T,
                    onMouseEnter: () => window.clearTimeout(W.current),
                    onMouseLeave: (o) => 0 === o.buttons && hideAfterDelay(),
                  },
                  y.createElement(H, { color: B, onChange: u })
                )
              )
          )
        );
      }
      var ny = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                value: o,
                displayValue: l,
                label: c,
                onChange: u,
                onUpdate: h,
                settings: g,
              } = useInputContext();
              return y.createElement(
                Row,
                { input: !0 },
                y.createElement(Label, null, c),
                y.createElement(
                  nb,
                  null,
                  y.createElement(Color, {
                    value: o,
                    displayValue: l,
                    onChange: u,
                    onUpdate: h,
                    settings: g,
                  }),
                  y.createElement(ValueInput, {
                    value: l,
                    onChange: u,
                    onUpdate: h,
                  })
                )
              );
            },
          },
          nm
        ),
        nw = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                label: o,
                displayValue: l,
                onUpdate: c,
                settings: u,
              } = useInputContext();
              return y.createElement(
                Row,
                { input: !0 },
                y.createElement(Label, null, o),
                y.createElement(Vector, { value: l, settings: u, onUpdate: c })
              );
            },
          },
          getVectorPlugin(["x", "y", "z"])
        );
      let nx = tZ("div", {
          $flexCenter: "",
          position: "relative",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          touchAction: "none",
          $draggable: "",
          $hover: "",
          "&:active": { cursor: "none" },
          "&::after": {
            content: '""',
            backgroundColor: "$accent2",
            height: 4,
            width: 4,
            borderRadius: 2,
          },
        }),
        nE = tZ("div", {
          $flexCenter: "",
          width: "$joystickWidth",
          height: "$joystickHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          position: "fixed",
          zIndex: 1e4,
          overflow: "hidden",
          $draggable: "",
          transform: "translate(-50%, -50%)",
          variants: {
            isOutOfBounds: {
              true: { backgroundColor: "$elevation1" },
              false: { backgroundColor: "$elevation3" },
            },
          },
          "> div": {
            position: "absolute",
            $flexCenter: "",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "$highlight1",
            backgroundColor: "$elevation3",
            width: "80%",
            height: "80%",
            "&::after,&::before": {
              content: '""',
              position: "absolute",
              zindex: 10,
              backgroundColor: "$highlight1",
            },
            "&::before": { width: "100%", height: 1 },
            "&::after": { height: "100%", width: 1 },
          },
          "> span": {
            position: "relative",
            zindex: 100,
            width: 10,
            height: 10,
            backgroundColor: "$accent2",
            borderRadius: "50%",
          },
        });
      function Joystick({ value: o, settings: l, onUpdate: c }) {
        let u = (0, y.useRef)(),
          h = (0, y.useRef)(0),
          g = (0, y.useRef)(0),
          _ = (0, y.useRef)(1),
          [b, w] = (0, y.useState)(!1),
          [T, A] = (0, y.useState)(!1),
          [I, N] = useTransform(),
          W = (0, y.useRef)(null),
          B = (0, y.useRef)(null);
        (0, y.useLayoutEffect)(() => {
          if (b) {
            let {
              top: o,
              left: l,
              width: c,
              height: u,
            } = W.current.getBoundingClientRect();
            (B.current.style.left = l + c / 2 + "px"),
              (B.current.style.top = o + u / 2 + "px");
          }
        }, [b]);
        let {
            keys: [F, H],
            joystick: U,
          } = l,
          K = "invertY" === U ? 1 : -1,
          {
            [F]: { step: G },
            [H]: { step: Y },
          } = l,
          q = useTh("sizes", "joystickWidth"),
          X = useTh("sizes", "joystickHeight"),
          Z = (0.8 * parseFloat(q)) / 2,
          Q = (0.8 * parseFloat(X)) / 2,
          ee = (0, y.useCallback)(() => {
            u.current ||
              (A(!0),
              h.current && N({ x: h.current * Z }),
              g.current && N({ y: -(g.current * Q) }),
              (u.current = window.setInterval(() => {
                c((o) => {
                  let l = G * h.current * _.current,
                    c = K * Y * g.current * _.current;
                  return Array.isArray(o)
                    ? { [F]: o[0] + l, [H]: o[1] + c }
                    : { [F]: o[F] + l, [H]: o[H] + c };
                });
              }, 16)));
          }, [Z, Q, c, N, G, Y, F, H, K]),
          et = (0, y.useCallback)(() => {
            window.clearTimeout(u.current), (u.current = void 0), A(!1);
          }, []);
        (0, y.useEffect)(() => {
          function setStepMultiplier(o) {
            _.current = multiplyStep(o);
          }
          return (
            window.addEventListener("keydown", setStepMultiplier),
            window.addEventListener("keyup", setStepMultiplier),
            () => {
              window.clearTimeout(u.current),
                window.removeEventListener("keydown", setStepMultiplier),
                window.removeEventListener("keyup", setStepMultiplier);
            }
          );
        }, []);
        let er = vector_plugin_6f82aee9_esm_useDrag(
          ({ first: l, active: u, delta: [b, y], movement: [T, A] }) => {
            l && w(!0);
            let I = vector_plugin_6f82aee9_esm_clamp(T, -Z, Z),
              W = vector_plugin_6f82aee9_esm_clamp(A, -Q, Q);
            (h.current = Math.abs(T) > Math.abs(I) ? Math.sign(T - I) : 0),
              (g.current = Math.abs(A) > Math.abs(W) ? Math.sign(W - A) : 0);
            let B = o[F],
              U = o[H];
            u
              ? (h.current || ((B += b * G * _.current), N({ x: I })),
                g.current || ((U -= K * y * Y * _.current), N({ y: W })),
                h.current || g.current ? ee() : et(),
                c({ [F]: B, [H]: U }))
              : (w(!1),
                (h.current = 0),
                (g.current = 0),
                N({ x: 0, y: 0 }),
                et());
          }
        );
        return y.createElement(
          nx,
          vector_plugin_6f82aee9_esm_extends({ ref: W }, er()),
          b &&
            y.createElement(
              Portal,
              null,
              y.createElement(
                nE,
                { ref: B, isOutOfBounds: T },
                y.createElement("div", null),
                y.createElement("span", { ref: I })
              )
            )
        );
      }
      let nS = tZ("div", {
          display: "grid",
          columnGap: "$colGap",
          variants: {
            withJoystick: {
              true: { gridTemplateColumns: "$sizes$rowHeight auto" },
              false: { gridTemplateColumns: "auto" },
            },
          },
        }),
        n$ = ["joystick"],
        nk = getVectorPlugin(["x", "y"]);
      var nC = vector_plugin_6f82aee9_esm_objectSpread2(
          vector_plugin_6f82aee9_esm_objectSpread2(
            {
              component: function () {
                let {
                  label: o,
                  displayValue: l,
                  onUpdate: c,
                  settings: u,
                } = useInputContext();
                return y.createElement(
                  Row,
                  { input: !0 },
                  y.createElement(Label, null, o),
                  y.createElement(
                    nS,
                    { withJoystick: !!u.joystick },
                    u.joystick &&
                      y.createElement(Joystick, {
                        value: l,
                        settings: u,
                        onUpdate: c,
                      }),
                    y.createElement(Vector, {
                      value: l,
                      settings: u,
                      onUpdate: c,
                    })
                  )
                );
              },
            },
            nk
          ),
          {},
          {
            normalize: (o) => {
              let { joystick: l = !0 } = o,
                c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, n$),
                { value: u, settings: h } = nk.normalize(c);
              return {
                value: u,
                settings: vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2({}, h),
                  {},
                  { joystick: l }
                ),
              };
            },
          }
        ),
        nO = Object.freeze({
          __proto__: null,
          sanitize: (o) => {
            if (void 0 !== o) {
              if (o instanceof File)
                try {
                  return URL.createObjectURL(o);
                } catch (o) {
                  return;
                }
              if ("string" == typeof o && 0 === o.indexOf("blob:")) return o;
              throw Error(`Invalid image format [undefined | blob |\xa0File].`);
            }
          },
          schema: (o, l) => "object" == typeof l && "image" in l,
          normalize: ({ image: o }) => ({ value: o }),
        });
      let nj = tZ("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto 20px",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        nT = tZ("div", {
          $flexCenter: "",
          overflow: "hidden",
          height: "$rowHeight",
          background: "$elevation3",
          textAlign: "center",
          color: "inherit",
          borderRadius: "$sm",
          outline: "none",
          userSelect: "none",
          cursor: "pointer",
          $inputStyle: "",
          $hover: "",
          $focusWithin: "",
          $active: "$accent1 $elevation1",
          variants: {
            isDragAccept: {
              true: { $inputStyle: "$accent1", backgroundColor: "$elevation1" },
            },
          },
        }),
        nR = tZ("div", {
          boxSizing: "border-box",
          borderRadius: "$sm",
          height: "$rowHeight",
          width: "$rowHeight",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          variants: {
            hasImage: { true: { cursor: "pointer", $hover: "", $active: "" } },
          },
        }),
        nP = tZ("div", {
          $flexCenter: "",
          width: "$imagePreviewWidth",
          height: "$imagePreviewHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          pointerEvents: "none",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
        nD = tZ("div", {
          fontSize: "0.8em",
          height: "100%",
          padding: "$rowGap $md",
        }),
        nA = tZ("div", {
          $flexCenter: "",
          top: "0",
          right: "0",
          marginRight: "$sm",
          height: "100%",
          cursor: "pointer",
          variants: {
            disabled: { true: { color: "$elevation3", cursor: "default" } },
          },
          "&::after,&::before": {
            content: '""',
            position: "absolute",
            height: 2,
            width: 10,
            borderRadius: 1,
            backgroundColor: "currentColor",
          },
          "&::after": { transform: "rotate(45deg)" },
          "&::before": { transform: "rotate(-45deg)" },
        });
      var nI = vector_plugin_6f82aee9_esm_objectSpread2(
        {
          component: function () {
            let {
                label: o,
                value: l,
                onUpdate: c,
                disabled: u,
              } = useInputContext(),
              {
                popinRef: h,
                wrapperRef: g,
                shown: _,
                show: b,
                hide: w,
              } = usePopin(),
              T = (0, y.useCallback)(
                (o) => {
                  o.length && c(o[0]);
                },
                [c]
              ),
              A = (0, y.useCallback)(
                (o) => {
                  o.stopPropagation(), c(void 0);
                },
                [c]
              ),
              {
                getRootProps: I,
                getInputProps: N,
                isDragAccept: W,
              } = useDropzone({
                maxFiles: 1,
                accept: "image/*",
                onDrop: T,
                disabled: u,
              });
            return y.createElement(
              Row,
              { input: !0 },
              y.createElement(Label, null, o),
              y.createElement(
                nj,
                null,
                y.createElement(nR, {
                  ref: h,
                  hasImage: !!l,
                  onPointerDown: () => !!l && b(),
                  onPointerUp: w,
                  style: { backgroundImage: l ? `url(${l})` : "none" },
                }),
                _ &&
                  !!l &&
                  y.createElement(
                    Portal,
                    null,
                    y.createElement(rc, {
                      onPointerUp: w,
                      style: { cursor: "pointer" },
                    }),
                    y.createElement(nP, {
                      ref: g,
                      style: { backgroundImage: `url(${l})` },
                    })
                  ),
                y.createElement(
                  nT,
                  I({ isDragAccept: W }),
                  y.createElement("input", N()),
                  y.createElement(nD, null, W ? "drop image" : "click or drop")
                ),
                y.createElement(nA, { onClick: A, disabled: !l })
              )
            );
          },
        },
        nO
      );
      let nL = v8n().number(),
        leva_esm_format = (o) => ({ min: o[0], max: o[1] }),
        leva_esm_sanitize = (o, { bounds: [l, c] }, u) => {
          let h = Array.isArray(o) ? leva_esm_format(o) : o,
            g = { min: u[0], max: u[1] },
            { min: _, max: b } = vector_plugin_6f82aee9_esm_objectSpread2(
              vector_plugin_6f82aee9_esm_objectSpread2({}, g),
              h
            );
          return [
            vector_plugin_6f82aee9_esm_clamp(Number(_), l, Math.max(l, b)),
            vector_plugin_6f82aee9_esm_clamp(Number(b), Math.min(c, _), c),
          ];
        };
      var nM = Object.freeze({
        __proto__: null,
        schema: (o, l) =>
          v8n().array().length(2).every.number().test(o) &&
          v8n().schema({ min: nL, max: nL }).test(l),
        format: leva_esm_format,
        sanitize: leva_esm_sanitize,
        normalize: ({ value: o, min: l, max: c }) => {
          let u = { min: l, max: c },
            h = normalizeKeyedNumberSettings(leva_esm_format(o), {
              min: u,
              max: u,
            }),
            g = vector_plugin_6f82aee9_esm_objectSpread2(
              vector_plugin_6f82aee9_esm_objectSpread2({}, h),
              {},
              { bounds: [l, c] }
            ),
            _ = leva_esm_sanitize(leva_esm_format(o), g, o);
          return { value: _, settings: g };
        },
      });
      let nN = ["value", "bounds", "onDrag"],
        nz = ["bounds"],
        nW = tZ("div", {
          display: "grid",
          columnGap: "$colGap",
          gridTemplateColumns:
            "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)",
        });
      function IntervalSlider(o) {
        let {
            value: l,
            bounds: [c, u],
            onDrag: h,
          } = o,
          g = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, nN),
          _ = (0, y.useRef)(null),
          b = (0, y.useRef)(null),
          w = (0, y.useRef)(null),
          T = (0, y.useRef)(0),
          A = useTh("sizes", "scrubberWidth"),
          I = vector_plugin_6f82aee9_esm_useDrag(
            ({ event: o, first: y, xy: [I], movement: [N], memo: W = {} }) => {
              if (y) {
                let { width: h, left: g } = _.current.getBoundingClientRect();
                T.current = h - parseFloat(A);
                let y =
                  (null == o ? void 0 : o.target) === b.current ||
                  (null == o ? void 0 : o.target) === w.current;
                W.pos = invertedRange((I - g) / h, c, u);
                let N = Math.abs(W.pos - l.min) - Math.abs(W.pos - l.max);
                (W.key = N < 0 || (0 === N && W.pos <= l.min) ? "min" : "max"),
                  y && (W.pos = l[W.key]);
              }
              let B = W.pos + invertedRange(N / T.current, 0, u - c);
              return h({ [W.key]: rE(B, g[W.key]) }), W;
            }
          ),
          N = `calc(${range(l.min, c, u)} * (100% - ${A} - 8px) + 4px)`,
          W = `calc(${1 - range(l.max, c, u)} * (100% - ${A} - 8px) + 4px)`;
        return y.createElement(
          ry,
          vector_plugin_6f82aee9_esm_extends({ ref: _ }, I()),
          y.createElement(
            rb,
            null,
            y.createElement(rw, { style: { left: N, right: W } })
          ),
          y.createElement(rv, { position: "left", ref: b, style: { left: N } }),
          y.createElement(rv, {
            position: "right",
            ref: w,
            style: { right: W },
          })
        );
      }
      var nB = vector_plugin_6f82aee9_esm_objectSpread2(
        {
          component: function () {
            let {
                label: o,
                displayValue: l,
                onUpdate: c,
                settings: u,
              } = useInputContext(),
              h = vector_plugin_6f82aee9_esm_objectWithoutProperties(u, nz);
            return y.createElement(
              y.Fragment,
              null,
              y.createElement(
                Row,
                { input: !0 },
                y.createElement(Label, null, o),
                y.createElement(
                  nW,
                  null,
                  y.createElement(
                    IntervalSlider,
                    vector_plugin_6f82aee9_esm_extends({ value: l }, u, {
                      onDrag: c,
                    })
                  ),
                  y.createElement(Vector, {
                    value: l,
                    settings: h,
                    onUpdate: c,
                    innerLabelTrim: 0,
                  })
                )
              )
            );
          },
        },
        nM
      );
      let createEventEmitter = () => {
          let o = new Map();
          return {
            on: (l, c) => {
              let u = o.get(l);
              void 0 === u && ((u = new Set()), o.set(l, u)), u.add(c);
            },
            off: (l, c) => {
              let u = o.get(l);
              void 0 !== u && (u.delete(c), 0 === u.size && o.delete(l));
            },
            emit: (l, ...c) => {
              let u = o.get(l);
              if (void 0 !== u) for (let o of u) o(...c);
            },
          };
        },
        nF = ["type", "value"],
        nH = ["onChange", "transient", "onEditStart", "onEditEnd"],
        Store = function () {
          let o = (function (o) {
              let l =
                  "function" == typeof o
                    ? (function (o) {
                        let l;
                        let c = new Set(),
                          setState = (o, u) => {
                            let h = "function" == typeof o ? o(l) : o;
                            if (h !== l) {
                              let o = l;
                              (l = u ? h : Object.assign({}, l, h)),
                                c.forEach((c) => c(l, o));
                            }
                          },
                          getState = () => l,
                          subscribeWithSelector = (
                            o,
                            u = getState,
                            h = Object.is
                          ) => {
                            console.warn(
                              "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                            );
                            let g = u(l);
                            function listenerToAdd() {
                              let c = u(l);
                              if (!h(g, c)) {
                                let l = g;
                                o((g = c), l);
                              }
                            }
                            return (
                              c.add(listenerToAdd),
                              () => c.delete(listenerToAdd)
                            );
                          },
                          u = {
                            setState,
                            getState,
                            subscribe: (o, l, u) =>
                              l || u
                                ? subscribeWithSelector(o, l, u)
                                : (c.add(o), () => c.delete(o)),
                            destroy: () => c.clear(),
                          };
                        return (l = o(setState, getState, u)), u;
                      })(o)
                    : o,
                useStore = (o = l.getState, c = Object.is) => {
                  let u;
                  let [, h] = (0, y.useReducer)((o) => o + 1, 0),
                    g = l.getState(),
                    _ = (0, y.useRef)(g),
                    b = (0, y.useRef)(o),
                    w = (0, y.useRef)(c),
                    T = (0, y.useRef)(!1),
                    A = (0, y.useRef)();
                  void 0 === A.current && (A.current = o(g));
                  let I = !1;
                  (_.current !== g ||
                    b.current !== o ||
                    w.current !== c ||
                    T.current) &&
                    ((u = o(g)), (I = !c(A.current, u))),
                    nf(() => {
                      I && (A.current = u),
                        (_.current = g),
                        (b.current = o),
                        (w.current = c),
                        (T.current = !1);
                    });
                  let N = (0, y.useRef)(g);
                  nf(() => {
                    let listener = () => {
                        try {
                          let o = l.getState(),
                            c = b.current(o);
                          w.current(A.current, c) ||
                            ((_.current = o), (A.current = c), h());
                        } catch (o) {
                          (T.current = !0), h();
                        }
                      },
                      o = l.subscribe(listener);
                    return l.getState() !== N.current && listener(), o;
                  }, []);
                  let W = I ? u : A.current;
                  return (0, y.useDebugValue)(W), W;
                };
              return (
                Object.assign(useStore, l),
                (useStore[Symbol.iterator] = function () {
                  console.warn(
                    "[useStore, api] = create() is deprecated and will be removed in v4"
                  );
                  let o = [useStore, l];
                  return {
                    next() {
                      let l = o.length <= 0;
                      return { value: o.shift(), done: l };
                    },
                  };
                }),
                useStore
              );
            })(subscribeWithSelector(() => ({ data: {} }))),
            l = createEventEmitter();
          (this.storeId = getUid()), (this.useStore = o);
          let c = {},
            u = new Set();
          (this.getVisiblePaths = () => {
            let o = this.getData(),
              l = Object.keys(o),
              h = [];
            Object.entries(c).forEach(([o, c]) => {
              c.render &&
                l.some((l) => 0 === l.indexOf(o)) &&
                !c.render(this.get) &&
                h.push(o + ".");
            });
            let g = [];
            return (
              u.forEach((l) => {
                l in o &&
                  o[l].__refCount > 0 &&
                  h.every((o) => -1 === l.indexOf(o)) &&
                  (!o[l].render || o[l].render(this.get)) &&
                  g.push(l);
              }),
              g
            );
          }),
            (this.setOrderedPaths = (o) => {
              o.forEach((o) => u.add(o));
            }),
            (this.orderPaths = (o) => (this.setOrderedPaths(o), o)),
            (this.disposePaths = (l) => {
              o.setState((o) => {
                let c = o.data;
                return (
                  l.forEach((o) => {
                    if (o in c) {
                      let l = c[o];
                      l.__refCount--,
                        0 === l.__refCount && l.type in g && delete c[o];
                    }
                  }),
                  { data: c }
                );
              });
            }),
            (this.dispose = () => {
              o.setState(() => ({ data: {} }));
            }),
            (this.getFolderSettings = (o) => c[o] || {}),
            (this.getData = () => o.getState().data),
            (this.addData = (l, c) => {
              o.setState((o) => {
                let u = o.data;
                return (
                  Object.entries(l).forEach(([o, l]) => {
                    let g = u[o];
                    if (g) {
                      let { type: o, value: u } = l,
                        _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(
                          l,
                          nF
                        );
                      o !== g.type
                        ? tk(h.INPUT_TYPE_OVERRIDE, o)
                        : ((0 === g.__refCount || c) && Object.assign(g, _),
                          g.__refCount++);
                    } else
                      u[o] = vector_plugin_6f82aee9_esm_objectSpread2(
                        vector_plugin_6f82aee9_esm_objectSpread2({}, l),
                        {},
                        { __refCount: 1 }
                      );
                  }),
                  { data: u }
                );
              });
            }),
            (this.setValueAtPath = (l, c, u) => {
              o.setState((o) => {
                let h = o.data;
                return updateInput(h[l], c, l, this, u), { data: h };
              });
            }),
            (this.setSettingsAtPath = (l, c) => {
              o.setState((o) => {
                let u = o.data;
                return (
                  (u[l].settings = vector_plugin_6f82aee9_esm_objectSpread2(
                    vector_plugin_6f82aee9_esm_objectSpread2({}, u[l].settings),
                    c
                  )),
                  { data: u }
                );
              });
            }),
            (this.disableInputAtPath = (l, c) => {
              o.setState((o) => {
                let u = o.data;
                return (u[l].disabled = c), { data: u };
              });
            }),
            (this.set = (l, c) => {
              o.setState((o) => {
                let u = o.data;
                return (
                  Object.entries(l).forEach(([o, l]) => {
                    try {
                      updateInput(u[o], l, void 0, void 0, c);
                    } catch (o) {}
                  }),
                  { data: u }
                );
              });
            }),
            (this.getInput = (o) => {
              try {
                return this.getData()[o];
              } catch (l) {
                tk(h.PATH_DOESNT_EXIST, o);
              }
            }),
            (this.get = (o) => {
              var l;
              return null === (l = this.getInput(o)) || void 0 === l
                ? void 0
                : l.value;
            }),
            (this.emitOnEditStart = (o) => {
              l.emit(
                `onEditStart:${o}`,
                this.get(o),
                o,
                vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2(
                    {},
                    this.getInput(o)
                  ),
                  {},
                  { get: this.get }
                )
              );
            }),
            (this.emitOnEditEnd = (o) => {
              l.emit(
                `onEditEnd:${o}`,
                this.get(o),
                o,
                vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2(
                    {},
                    this.getInput(o)
                  ),
                  {},
                  { get: this.get }
                )
              );
            }),
            (this.subscribeToEditStart = (o, c) => {
              let u = `onEditStart:${o}`;
              return l.on(u, c), () => l.off(u, c);
            }),
            (this.subscribeToEditEnd = (o, c) => {
              let u = `onEditEnd:${o}`;
              return l.on(u, c), () => l.off(u, c);
            });
          let _getDataFromSchema = (o, l, u) => {
            let _ = {};
            return (
              Object.entries(o).forEach(([o, b]) => {
                if ("" === o) return tk(h.EMPTY_KEY);
                let y = join(l, o);
                if (b.type === g.FOLDER) {
                  let o = _getDataFromSchema(b.schema, y, u);
                  Object.assign(_, o), y in c || (c[y] = b.settings);
                } else if (o in u) tk(h.DUPLICATE_KEYS, o, y, u[o].path);
                else {
                  let l = (function (o, l, c, u) {
                    let h = (function parseOptions(o, l, c = {}, u) {
                        var h, _;
                        if ("object" != typeof o || Array.isArray(o))
                          return {
                            type: u,
                            input: o,
                            options: vector_plugin_6f82aee9_esm_objectSpread2(
                              {
                                key: l,
                                label: l,
                                optional: !1,
                                disabled: !1,
                                order: 0,
                              },
                              c
                            ),
                          };
                        if ("__customInput" in o) {
                          let { type: c, __customInput: u } = o,
                            h =
                              vector_plugin_6f82aee9_esm_objectWithoutProperties(
                                o,
                                tW
                              );
                          return parseOptions(u, l, h, c);
                        }
                        let {
                            render: b,
                            label: y,
                            optional: w,
                            order: T = 0,
                            disabled: A,
                            hint: I,
                            onChange: N,
                            onEditStart: W,
                            onEditEnd: B,
                            transient: F,
                          } = o,
                          H =
                            vector_plugin_6f82aee9_esm_objectWithoutProperties(
                              o,
                              tB
                            ),
                          U = vector_plugin_6f82aee9_esm_objectSpread2(
                            {
                              render: b,
                              key: l,
                              label: null != y ? y : l,
                              hint: I,
                              transient: null != F ? F : !!N,
                              onEditStart: W,
                              onEditEnd: B,
                              disabled: A,
                              optional: w,
                              order: T,
                            },
                            c
                          ),
                          { type: K } = H,
                          G =
                            vector_plugin_6f82aee9_esm_objectWithoutProperties(
                              H,
                              tF
                            );
                        return (K = null != u ? u : K) in g
                          ? { type: K, input: G, options: U }
                          : {
                              type: K,
                              input:
                                u && isObject(G) && "value" in G
                                  ? G.value
                                  : isEmptyObject(G)
                                  ? void 0
                                  : G,
                              options: vector_plugin_6f82aee9_esm_objectSpread2(
                                vector_plugin_6f82aee9_esm_objectSpread2({}, U),
                                {},
                                {
                                  onChange: N,
                                  optional:
                                    null !== (h = U.optional) &&
                                    void 0 !== h &&
                                    h,
                                  disabled:
                                    null !== (_ = U.disabled) &&
                                    void 0 !== _ &&
                                    _,
                                }
                              ),
                            };
                      })(o, l),
                      { type: _, input: b, options: y } = h;
                    if (_)
                      return _ in g
                        ? h
                        : {
                            type: _,
                            input: normalize$3(_, b, c, u),
                            options: y,
                          };
                    let w = getValueType(b);
                    return w
                      ? { type: w, input: normalize$3(w, b, c, u), options: y }
                      : !!(w = getValueType({ value: b })) && {
                          type: w,
                          input: normalize$3(w, { value: b }, c, u),
                          options: y,
                        };
                  })(b, o, y, _);
                  if (l) {
                    let { type: c, options: h, input: g } = l,
                      {
                        onChange: b,
                        transient: w,
                        onEditStart: T,
                        onEditEnd: A,
                      } = h,
                      I = vector_plugin_6f82aee9_esm_objectWithoutProperties(
                        h,
                        nH
                      );
                    (_[y] = vector_plugin_6f82aee9_esm_objectSpread2(
                      vector_plugin_6f82aee9_esm_objectSpread2(
                        vector_plugin_6f82aee9_esm_objectSpread2(
                          { type: c },
                          I
                        ),
                        g
                      ),
                      {},
                      { fromPanel: !0 }
                    )),
                      (u[o] = {
                        path: y,
                        onChange: b,
                        transient: w,
                        onEditStart: T,
                        onEditEnd: A,
                      });
                  } else tk(h.UNKNOWN_INPUT, y, b);
                }
              }),
              _
            );
          };
          this.getDataFromSchema = (o) => {
            let l = {},
              c = _getDataFromSchema(o, "", l);
            return [c, l];
          };
        },
        nV = new Store();
      function useCreateStore() {
        return (0, y.useMemo)(() => new Store(), []);
      }
      let nU = { collapsed: !1 };
      function folder(o, l) {
        return {
          type: g.FOLDER,
          schema: o,
          settings: vector_plugin_6f82aee9_esm_objectSpread2(
            vector_plugin_6f82aee9_esm_objectSpread2({}, nU),
            l
          ),
        };
      }
      let nK = { disabled: !1 };
      function leva_esm_button(o, l) {
        return {
          type: g.BUTTON,
          onClick: o,
          settings: vector_plugin_6f82aee9_esm_objectSpread2(
            vector_plugin_6f82aee9_esm_objectSpread2({}, nK),
            l
          ),
        };
      }
      function buttonGroup(o) {
        return { type: g.BUTTON_GROUP, opts: o };
      }
      let nG = { graph: !1, interval: 100 };
      function monitor(o, l) {
        return {
          type: g.MONITOR,
          objectOrFn: o,
          settings: vector_plugin_6f82aee9_esm_objectSpread2(
            vector_plugin_6f82aee9_esm_objectSpread2({}, nG),
            l
          ),
        };
      }
      let isInput = (o) => "__levaInput" in o,
        buildTree = (o, l) => {
          let c = {},
            u = l ? l.toLowerCase() : null;
          return (
            o.forEach((o) => {
              let [l, h] = (function (o) {
                let l = o.split(".");
                return [l.pop(), l.join(".") || void 0];
              })(o);
              (!u || l.toLowerCase().indexOf(u) > -1) &&
                nh()(c, h, { [l]: { __levaInput: !0, path: o } });
            }),
            c
          );
        },
        nY = [
          "type",
          "label",
          "path",
          "valueKey",
          "value",
          "settings",
          "setValue",
          "disabled",
        ];
      function ControlInput(o) {
        let {
            type: l,
            label: c,
            path: u,
            valueKey: g,
            value: _,
            settings: b,
            setValue: w,
            disabled: T,
          } = o,
          A = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, nY),
          {
            displayValue: I,
            onChange: N,
            onUpdate: W,
          } = useInputSetters({ type: l, value: _, settings: b, setValue: w }),
          B = tP[l].component;
        return B
          ? y.createElement(
              tK.Provider,
              {
                value: vector_plugin_6f82aee9_esm_objectSpread2(
                  {
                    key: g,
                    path: u,
                    id: "" + u,
                    label: c,
                    displayValue: I,
                    value: _,
                    onChange: N,
                    onUpdate: W,
                    settings: b,
                    setValue: w,
                    disabled: T,
                  },
                  A
                ),
              },
              y.createElement(rs, { disabled: T }, y.createElement(B, null))
            )
          : (tk(h.NO_COMPONENT_FOR_TYPE, l, u), null);
      }
      let nq = tZ("button", {
          display: "block",
          $reset: "",
          fontWeight: "$button",
          height: "$rowHeight",
          borderStyle: "none",
          borderRadius: "$sm",
          backgroundColor: "$elevation1",
          color: "$highlight1",
          "&:not(:disabled)": {
            color: "$highlight3",
            backgroundColor: "$accent2",
            cursor: "pointer",
            $hover: "$accent3",
            $active: "$accent3 $accent1",
            $focus: "",
          },
        }),
        nX = tZ("div", {
          $flex: "",
          justifyContent: "flex-end",
          gap: "$colGap",
        }),
        nZ = tZ("button", {
          $reset: "",
          cursor: "pointer",
          borderRadius: "$xs",
          "&:hover": { backgroundColor: "$elevation3" },
        }),
        getOpts = ({ label: o, opts: l }) => {
          let c = "string" == typeof o && "" === o.trim() ? null : o,
            u = l;
          return (
            "object" == typeof l.opts &&
              (void 0 !== u.label && (c = l.label), (u = l.opts)),
            { label: c, opts: u }
          );
        },
        nJ = tZ("canvas", {
          height: "$monitorHeight",
          width: "100%",
          display: "block",
          borderRadius: "$sm",
        }),
        nQ = (0, y.forwardRef)(function ({ initialValue: o }, l) {
          let c = useTh("colors", "highlight3"),
            u = useTh("colors", "elevation2"),
            h = useTh("colors", "highlight1"),
            [g, _] = (0, y.useMemo)(
              () => [
                colord_w(h).alpha(0.4).toRgbString(),
                colord_w(h).alpha(0.1).toRgbString(),
              ],
              [h]
            ),
            b = (0, y.useRef)([o]),
            w = (0, y.useRef)(o),
            T = (0, y.useRef)(o),
            A = (0, y.useRef)(),
            I = (0, y.useCallback)(
              (o, l) => {
                if (!o) return;
                let { width: h, height: y } = o,
                  A = new Path2D(),
                  I = h / 100,
                  N = 0.05 * y;
                for (let o = 0; o < b.current.length; o++) {
                  let l = range(b.current[o], w.current, T.current),
                    c = I * o,
                    u = y - l * (y - 2 * N) - N;
                  A.lineTo(c, u);
                }
                l.clearRect(0, 0, h, y);
                let W = new Path2D(A);
                W.lineTo(I * (b.current.length + 1), y),
                  W.lineTo(0, y),
                  W.lineTo(0, 0);
                let B = l.createLinearGradient(0, 0, 0, y);
                B.addColorStop(0, g),
                  B.addColorStop(1, _),
                  (l.fillStyle = B),
                  l.fill(W),
                  (l.strokeStyle = u),
                  (l.lineJoin = "round"),
                  (l.lineWidth = 14),
                  l.stroke(A),
                  (l.strokeStyle = c),
                  (l.lineWidth = 2),
                  l.stroke(A);
              },
              [c, u, g, _]
            ),
            [N, W] = (function (o) {
              let l = (0, y.useRef)(null),
                c = (0, y.useRef)(null),
                u = (0, y.useRef)(!1);
              return (
                (0, y.useEffect)(() => {
                  let h = debounce(() => {
                    (l.current.width =
                      l.current.offsetWidth * window.devicePixelRatio),
                      (l.current.height =
                        l.current.offsetHeight * window.devicePixelRatio),
                      o(l.current, c.current);
                  }, 250);
                  return (
                    window.addEventListener("resize", h),
                    u.current || (h(), (u.current = !0)),
                    () => window.removeEventListener("resize", h)
                  );
                }, [o]),
                (0, y.useEffect)(() => {
                  c.current = l.current.getContext("2d");
                }, []),
                [l, c]
              );
            })(I);
          return (
            (0, y.useImperativeHandle)(
              l,
              () => ({
                frame: (o) => {
                  var l;
                  (void 0 === w.current || o < w.current) && (w.current = o),
                    (void 0 === T.current || o > T.current) && (T.current = o),
                    (l = b.current).push(o),
                    l.length > 100 && l.shift(),
                    (A.current = requestAnimationFrame(() =>
                      I(N.current, W.current)
                    ));
                },
              }),
              [N, W, I]
            ),
            (0, y.useEffect)(() => () => cancelAnimationFrame(A.current), []),
            y.createElement(nJ, { ref: N })
          );
        }),
        leva_esm_parse = (o) =>
          Number.isFinite(o) ? o.toPrecision(2) : o.toString(),
        n0 = (0, y.forwardRef)(function ({ initialValue: o }, l) {
          let [c, u] = (0, y.useState)(leva_esm_parse(o));
          return (
            (0, y.useImperativeHandle)(
              l,
              () => ({ frame: (o) => u(leva_esm_parse(o)) }),
              []
            ),
            y.createElement("div", null, c)
          );
        });
      function getValue(o) {
        return "function" == typeof o ? o() : o.current;
      }
      let n1 = ["type", "label", "key"],
        n2 = {
          [g.BUTTON]: function ({ onClick: o, settings: l, label: c }) {
            let u = useStoreContext();
            return y.createElement(
              Row,
              null,
              y.createElement(
                nq,
                { disabled: l.disabled, onClick: () => o(u.get) },
                c
              )
            );
          },
          [g.BUTTON_GROUP]: function (o) {
            let { label: l, opts: c } = getOpts(o),
              u = useStoreContext();
            return y.createElement(
              Row,
              { input: !!l },
              l && y.createElement(Label, null, l),
              y.createElement(
                nX,
                null,
                Object.entries(c).map(([o, l]) =>
                  y.createElement(nZ, { key: o, onClick: () => l(u.get) }, o)
                )
              )
            );
          },
          [g.MONITOR]: function ({ label: o, objectOrFn: l, settings: c }) {
            let u = (0, y.useRef)(),
              h = (0, y.useRef)(getValue(l));
            return (
              (0, y.useEffect)(() => {
                let o = window.setInterval(() => {
                  var o;
                  document.hidden ||
                    null === (o = u.current) ||
                    void 0 === o ||
                    o.frame(getValue(l));
                }, c.interval);
                return () => window.clearInterval(o);
              }, [l, c.interval]),
              y.createElement(
                Row,
                { input: !0 },
                y.createElement(Label, { align: "top" }, o),
                c.graph
                  ? y.createElement(nQ, { ref: u, initialValue: h.current })
                  : y.createElement(n0, { ref: u, initialValue: h.current })
              )
            );
          },
        },
        n8 = y.memo(({ path: o }) => {
          let [
            l,
            {
              set: c,
              setSettings: u,
              disable: _,
              storeId: b,
              emitOnEditStart: w,
              emitOnEditEnd: T,
            },
          ] = (function (o) {
            let l = useStoreContext(),
              [c, u] = (0, y.useState)(getInputAtPath(l.getData(), o)),
              h = (0, y.useCallback)((c) => l.setValueAtPath(o, c, !0), [o, l]),
              g = (0, y.useCallback)((c) => l.setSettingsAtPath(o, c), [o, l]),
              _ = (0, y.useCallback)((c) => l.disableInputAtPath(o, c), [o, l]),
              b = (0, y.useCallback)(() => l.emitOnEditStart(o), [o, l]),
              w = (0, y.useCallback)(() => l.emitOnEditEnd(o), [o, l]);
            return (
              (0, y.useEffect)(() => {
                u(getInputAtPath(l.getData(), o));
                let c = l.useStore.subscribe(
                  (l) => getInputAtPath(l.data, o),
                  u,
                  { equalityFn: shallow }
                );
                return () => c();
              }, [l, o]),
              [
                c,
                {
                  set: h,
                  setSettings: g,
                  disable: _,
                  storeId: l.storeId,
                  emitOnEditStart: b,
                  emitOnEditEnd: w,
                },
              ]
            );
          })(o);
          if (!l) return null;
          let { type: A, label: I, key: N } = l,
            W = vector_plugin_6f82aee9_esm_objectWithoutProperties(l, n1);
          if (A in g) {
            let l = n2[A];
            return y.createElement(
              l,
              vector_plugin_6f82aee9_esm_extends({ label: I, path: o }, W)
            );
          }
          return A in tP
            ? y.createElement(
                ControlInput,
                vector_plugin_6f82aee9_esm_extends(
                  {
                    key: b + o,
                    type: A,
                    label: I,
                    storeId: b,
                    path: o,
                    valueKey: N,
                    setValue: c,
                    setSettings: u,
                    disable: _,
                    emitOnEditStart: w,
                    emitOnEditEnd: T,
                  },
                  W
                )
              )
            : (tC(h.UNSUPPORTED_INPUT, A, o), null);
        });
      function FolderTitle({ toggle: o, toggled: l, name: c }) {
        return y.createElement(
          rt,
          { onClick: () => o() },
          y.createElement(Chevron, { toggled: l }),
          y.createElement("div", null, c)
        );
      }
      let Folder = ({ name: o, path: l, tree: c }) => {
          let u = useStoreContext(),
            h = join(l, o),
            { collapsed: g, color: _ } = u.getFolderSettings(h),
            [b, w] = (0, y.useState)(!g),
            T = (0, y.useRef)(null),
            A = useTh("colors", "folderWidgetColor"),
            I = useTh("colors", "folderTextColor");
          return (
            (0, y.useLayoutEffect)(() => {
              T.current.style.setProperty(
                "--leva-colors-folderWidgetColor",
                _ || A
              ),
                T.current.style.setProperty(
                  "--leva-colors-folderTextColor",
                  _ || I
                );
            }, [_, A, I]),
            y.createElement(
              t7,
              { ref: T },
              y.createElement(FolderTitle, {
                name: o,
                toggled: b,
                toggle: () => w((o) => !o),
              }),
              y.createElement(n9, { parent: h, tree: c, toggled: b })
            )
          );
        },
        n9 = y.memo(
          ({
            isRoot: o = !1,
            fill: l = !1,
            flat: c = !1,
            parent: u,
            tree: h,
            toggled: g,
          }) => {
            let { wrapperRef: _, contentRef: b } = (function (o) {
                let l = (0, y.useRef)(null),
                  c = (0, y.useRef)(null),
                  u = (0, y.useRef)(!0);
                return (
                  (0, y.useLayoutEffect)(() => {
                    o ||
                      ((l.current.style.height = "0px"),
                      (l.current.style.overflow = "hidden"));
                  }, []),
                  (0, y.useEffect)(() => {
                    let h;
                    if (u.current) {
                      u.current = !1;
                      return;
                    }
                    let g = l.current,
                      fixHeight = () => {
                        o &&
                          (g.style.removeProperty("height"),
                          g.style.removeProperty("overflow"),
                          c.current.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          }));
                      };
                    g.addEventListener("transitionend", fixHeight, {
                      once: !0,
                    });
                    let { height: _ } = c.current.getBoundingClientRect();
                    return (
                      (g.style.height = _ + "px"),
                      o ||
                        ((g.style.overflow = "hidden"),
                        (h = window.setTimeout(
                          () => (g.style.height = "0px"),
                          50
                        ))),
                      () => {
                        g.removeEventListener("transitionend", fixHeight),
                          clearTimeout(h);
                      }
                    );
                  }, [o]),
                  { wrapperRef: l, contentRef: c }
                );
              })(g),
              w = useStoreContext(),
              getOrder = ([o, l]) => {
                var c;
                let h = isInput(l)
                  ? null === (c = w.getInput(l.path)) || void 0 === c
                    ? void 0
                    : c.order
                  : w.getFolderSettings(join(u, o)).order;
                return h || 0;
              },
              T = Object.entries(h).sort((o, l) => getOrder(o) - getOrder(l));
            return y.createElement(
              re,
              { ref: _, isRoot: o, fill: l, flat: c },
              y.createElement(
                rr,
                { ref: b, isRoot: o, toggled: g },
                T.map(([o, l]) =>
                  isInput(l)
                    ? y.createElement(n8, {
                        key: l.path,
                        valueKey: l.valueKey,
                        path: l.path,
                      })
                    : y.createElement(Folder, {
                        key: o,
                        name: o,
                        path: u,
                        tree: l,
                      })
                )
              )
            );
          }
        ),
        n6 = tZ("div", {
          position: "relative",
          fontFamily: "$mono",
          fontSize: "$root",
          color: "$rootText",
          backgroundColor: "$elevation1",
          variants: {
            fill: {
              false: {
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 1e3,
                width: "$rootWidth",
              },
              true: { position: "relative", width: "100%" },
            },
            flat: { false: { borderRadius: "$lg", boxShadow: "$level1" } },
            oneLineLabels: {
              true: {
                [`${ro}`]: {
                  gridTemplateColumns: "auto",
                  gridAutoColumns: "minmax(max-content, 1fr)",
                  gridAutoRows: "minmax($sizes$rowHeight), auto)",
                  rowGap: 0,
                  columnGap: 0,
                  marginTop: "$rowGap",
                },
              },
            },
            hideTitleBar: {
              true: { $$titleBarHeight: "0px" },
              false: { $$titleBarHeight: "$sizes$titleBarHeight" },
            },
          },
          "&,*,*:after,*:before": { boxSizing: "border-box" },
          "*::selection": { backgroundColor: "$accent2" },
        }),
        n3 = tZ("i", {
          $flexCenter: "",
          width: 40,
          userSelect: "none",
          cursor: "pointer",
          "> svg": {
            fill: "$highlight1",
            transition: "transform 350ms ease, fill 250ms ease",
          },
          "&:hover > svg": { fill: "$highlight3" },
          variants: { active: { true: { "> svg": { fill: "$highlight2" } } } },
        }),
        n5 = tZ("div", {
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: "$titleBarHeight",
          variants: { mode: { drag: { cursor: "grab" } } },
        }),
        n4 = tZ("div", {
          $flex: "",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          transition: "height 250ms ease",
          color: "$highlight3",
          paddingLeft: "$md",
          [`> ${n3}`]: { height: 30 },
          variants: { toggled: { true: { height: 30 }, false: { height: 0 } } },
        }),
        n7 = tZ("input", {
          $reset: "",
          flex: 1,
          position: "relative",
          height: 30,
          width: "100%",
          backgroundColor: "transparent",
          fontSize: "10px",
          borderRadius: "$root",
          "&:focus": {},
          "&::placeholder": { color: "$highlight2" },
        }),
        oe = tZ("div", {
          touchAction: "none",
          $flexCenter: "",
          flex: 1,
          "> svg": { fill: "$highlight1" },
          color: "$highlight1",
          variants: {
            drag: {
              true: {
                $draggable: "",
                "> svg": { transition: "fill 250ms ease" },
                "&:hover": { color: "$highlight3" },
                "&:hover > svg": { fill: "$highlight3" },
              },
            },
            filterEnabled: { false: { paddingRight: 40 } },
          },
        }),
        ot = y.forwardRef(({ setFilter: o, toggle: l }, c) => {
          let [u, h] = (0, y.useState)(""),
            g = (0, y.useMemo)(() => debounce(o, 250), [o]),
            clear = () => {
              o(""), h("");
            };
          return (
            (0, y.useEffect)(() => {
              g(u);
            }, [u, g]),
            y.createElement(
              y.Fragment,
              null,
              y.createElement(n7, {
                ref: c,
                value: u,
                placeholder: "[Open filter with CMD+SHIFT+L]",
                onPointerDown: (o) => o.stopPropagation(),
                onChange: (o) => {
                  let c = o.currentTarget.value;
                  l(!0), h(c);
                },
              }),
              y.createElement(
                n3,
                {
                  onClick: () => clear(),
                  style: { visibility: u ? "visible" : "hidden" },
                },
                y.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "14",
                    width: "14",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                  },
                  y.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    clipRule: "evenodd",
                  })
                )
              )
            )
          );
        });
      function TitleWithFilter({
        setFilter: o,
        onDrag: l,
        onDragStart: c,
        onDragEnd: u,
        toggle: h,
        toggled: g,
        title: _,
        drag: b,
        filterEnabled: w,
        from: T,
      }) {
        let [A, I] = (0, y.useState)(!1),
          N = (0, y.useRef)(null);
        (0, y.useEffect)(() => {
          var o, l;
          A
            ? null === (o = N.current) || void 0 === o || o.focus()
            : null === (l = N.current) || void 0 === l || l.blur();
        }, [A]);
        let W = vector_plugin_6f82aee9_esm_useDrag(
          ({ offset: [o, h], first: g, last: _ }) => {
            l({ x: o, y: h }), g && c({ x: o, y: h }), _ && u({ x: o, y: h });
          },
          {
            filterTaps: !0,
            from: ({ offset: [o, l] }) => [
              (null == T ? void 0 : T.x) || o,
              (null == T ? void 0 : T.y) || l,
            ],
          }
        );
        return (
          (0, y.useEffect)(() => {
            let handleShortcut = (o) => {
              "L" === o.key && o.shiftKey && o.metaKey && I((o) => !o);
            };
            return (
              window.addEventListener("keydown", handleShortcut),
              () => window.removeEventListener("keydown", handleShortcut)
            );
          }, []),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(
              n5,
              { mode: b ? "drag" : void 0 },
              y.createElement(
                n3,
                { active: !g, onClick: () => h() },
                y.createElement(Chevron, { toggled: g, width: 12, height: 8 })
              ),
              y.createElement(
                oe,
                vector_plugin_6f82aee9_esm_extends({}, b ? W() : {}, {
                  drag: b,
                  filterEnabled: w,
                }),
                void 0 === _ && b
                  ? y.createElement(
                      "svg",
                      {
                        width: "20",
                        height: "10",
                        viewBox: "0 0 28 14",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      y.createElement("circle", { cx: "2", cy: "2", r: "2" }),
                      y.createElement("circle", { cx: "14", cy: "2", r: "2" }),
                      y.createElement("circle", { cx: "26", cy: "2", r: "2" }),
                      y.createElement("circle", { cx: "2", cy: "12", r: "2" }),
                      y.createElement("circle", { cx: "14", cy: "12", r: "2" }),
                      y.createElement("circle", { cx: "26", cy: "12", r: "2" })
                    )
                  : _
              ),
              w &&
                y.createElement(
                  n3,
                  { active: A, onClick: () => I((o) => !o) },
                  y.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "20",
                      viewBox: "0 0 20 20",
                    },
                    y.createElement("path", {
                      d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z",
                    }),
                    y.createElement("path", {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
                      clipRule: "evenodd",
                    })
                  )
                )
            ),
            y.createElement(
              n4,
              { toggled: A },
              y.createElement(ot, { ref: N, setFilter: o, toggle: h })
            )
          )
        );
      }
      let or = ["store", "hidden", "theme", "collapsed"];
      function LevaRoot(o) {
        let { store: l, hidden: c = !1, theme: u, collapsed: h = !1 } = o,
          g = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, or),
          _ = useDeepMemo(
            () =>
              (function (o) {
                let l = getDefaultTheme();
                if (!o) return { theme: l, className: "" };
                Object.keys(o).forEach((c) => {
                  Object.assign(l[c], o[c]);
                });
                let c = tQ(l);
                return { theme: l, className: c.className };
              })(u),
            [u]
          ),
          [b, w] = (0, y.useState)(!h),
          T = "object" == typeof h ? !h.collapsed : b,
          A = (0, y.useMemo)(
            () =>
              "object" == typeof h
                ? (o) => {
                    "function" == typeof o
                      ? h.onChange(!o(!h.collapsed))
                      : h.onChange(!o);
                  }
                : w,
            [h]
          );
        return !l || c
          ? null
          : y.createElement(
              tG.Provider,
              { value: _ },
              y.createElement(
                on,
                vector_plugin_6f82aee9_esm_extends({ store: l }, g, {
                  toggled: T,
                  setToggle: A,
                  rootClass: _.className,
                })
              )
            );
      }
      let on = y.memo(
          ({
            store: o,
            rootClass: l,
            fill: c = !1,
            flat: u = !1,
            neverHide: h = !1,
            oneLineLabels: g = !1,
            titleBar: _ = {
              title: void 0,
              drag: !0,
              filter: !0,
              position: void 0,
              onDrag: void 0,
              onDragStart: void 0,
              onDragEnd: void 0,
            },
            hideCopyButton: b = !1,
            toggled: w,
            setToggle: T,
          }) => {
            var A, I;
            let N = useVisiblePaths(o),
              [W, B] = (0, y.useState)(""),
              F = (0, y.useMemo)(() => buildTree(N, W), [N, W]),
              [H, U] = useTransform(),
              K = h || N.length > 0,
              G = ("object" == typeof _ && _.title) || void 0,
              Y =
                "object" != typeof _ ||
                null === (A = _.drag) ||
                void 0 === A ||
                A,
              q =
                "object" != typeof _ ||
                null === (I = _.filter) ||
                void 0 === I ||
                I,
              X = ("object" == typeof _ && _.position) || void 0,
              Z = ("object" == typeof _ && _.onDrag) || void 0,
              Q = ("object" == typeof _ && _.onDragStart) || void 0,
              ee = ("object" == typeof _ && _.onDragEnd) || void 0;
            return (
              y.useEffect(() => {
                U({ x: null == X ? void 0 : X.x, y: null == X ? void 0 : X.y });
              }, [X, U]),
              t2(),
              y.createElement(
                tq.Provider,
                { value: { hideCopyButton: b } },
                y.createElement(
                  n6,
                  {
                    ref: H,
                    className: l,
                    fill: c,
                    flat: u,
                    oneLineLabels: g,
                    hideTitleBar: !_,
                    style: { display: K ? "block" : "none" },
                  },
                  _ &&
                    y.createElement(TitleWithFilter, {
                      onDrag: (o) => {
                        U(o), null == Z || Z(o);
                      },
                      onDragStart: (o) => (null == Q ? void 0 : Q(o)),
                      onDragEnd: (o) => (null == ee ? void 0 : ee(o)),
                      setFilter: B,
                      toggle: (o) => T((l) => (null != o ? o : !l)),
                      toggled: w,
                      title: G,
                      drag: Y,
                      filterEnabled: q,
                      from: X,
                    }),
                  K &&
                    y.createElement(
                      tY.Provider,
                      { value: o },
                      y.createElement(n9, {
                        isRoot: !0,
                        fill: c,
                        flat: u,
                        tree: F,
                        toggled: w,
                      })
                    )
                )
              )
            );
          }
        ),
        oo = ["isRoot"],
        oi = !1,
        oa = null;
      function Leva(o) {
        let { isRoot: l = !1 } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, oo);
        return (
          (0, y.useEffect)(
            () => (
              (oi = !0),
              !l && oa && (oa.remove(), (oa = null)),
              () => {
                l || (oi = !1);
              }
            ),
            [l]
          ),
          y.createElement(
            LevaRoot,
            vector_plugin_6f82aee9_esm_extends({ store: nV }, c)
          )
        );
      }
      let ol = ["store"];
      function LevaPanel(o) {
        let { store: l } = o,
          c = vector_plugin_6f82aee9_esm_objectWithoutProperties(o, ol),
          u = useStoreContext();
        return y.createElement(
          LevaRoot,
          vector_plugin_6f82aee9_esm_extends({ store: void 0 === l ? u : l }, c)
        );
      }
      function useControls(o, l, c, u, h) {
        let g, _, w, T, A;
        let {
            folderName: I,
            schema: N,
            folderSettings: W,
            hookSettings: B,
            deps: F,
          } = ("string" == typeof o
            ? ((A = o),
              (g = l),
              Array.isArray(c)
                ? (T = c)
                : c &&
                  ("store" in c
                    ? ((w = c), (T = u))
                    : ((_ = c),
                      Array.isArray(u) ? (T = u) : ((w = u), (T = h)))))
            : ((g = o), Array.isArray(l) ? (T = l) : ((w = l), (T = c))),
          {
            schema: g,
            folderName: A,
            folderSettings: _,
            hookSettings: w,
            deps: T || [],
          }),
          H = "function" == typeof N,
          U = (0, y.useRef)(!1),
          K = (0, y.useRef)(!0),
          G = useDeepMemo(() => {
            U.current = !0;
            let o = "function" == typeof N ? N() : N;
            return I ? { [I]: folder(o, W) } : o;
          }, F),
          Y = !(null != B && B.store);
        (0, y.useEffect)(() => {
          Y &&
            !oi &&
            (!oa &&
              ((oa =
                document.getElementById("leva__root") ||
                Object.assign(document.createElement("div"), {
                  id: "leva__root",
                })),
              document.body &&
                (document.body.appendChild(oa),
                (function (o, l) {
                  let c = console.error;
                  (console.error = () => {}),
                    b.render(o, l),
                    (console.error = c);
                })(y.createElement(Leva, { isRoot: !0 }), oa))),
            (oi = !0));
        }, [Y]);
        let [q] = (0, y.useState)(() => (null == B ? void 0 : B.store) || nV),
          [X, Z] = (0, y.useMemo)(() => q.getDataFromSchema(G), [q, G]),
          [Q, ee, et, er, en] = (0, y.useMemo)(() => {
            let o = [],
              l = [],
              c = {},
              u = {},
              h = {};
            return (
              Object.values(Z).forEach(
                ({
                  path: g,
                  onChange: _,
                  onEditStart: b,
                  onEditEnd: y,
                  transient: w,
                }) => {
                  o.push(g),
                    _ ? ((c[g] = _), w || l.push(g)) : l.push(g),
                    b && (u[g] = b),
                    y && (h[g] = y);
                }
              ),
              [o, l, c, u, h]
            );
          }, [Z]),
          eo = (0, y.useMemo)(() => q.orderPaths(Q), [Q, q]),
          ei = (function (o, l, c) {
            let u = o.useStore((o) => {
              let u = vector_plugin_6f82aee9_esm_objectSpread2(
                vector_plugin_6f82aee9_esm_objectSpread2({}, c),
                o.data
              );
              return Object.entries(
                l.reduce(
                  (o, l) => (u && u.hasOwnProperty(l) && (o[l] = u[l]), o),
                  {}
                )
              ).reduce(
                (o, [, { value: l, disabled: c, key: u }]) => (
                  (o[u] = c ? void 0 : l), o
                ),
                {}
              );
            }, shallow);
            return u;
          })(q, ee, X),
          ea = (0, y.useCallback)(
            (o) => {
              let l = Object.entries(o).reduce(
                (o, [l, c]) => Object.assign(o, { [Z[l].path]: c }),
                {}
              );
              q.set(l, !1);
            },
            [q, Z]
          ),
          el = (0, y.useCallback)((o) => q.get(Z[o].path), [q, Z]);
        return ((0, y.useEffect)(() => {
          let o = !K.current && U.current;
          return (
            q.addData(X, o),
            (K.current = !1),
            (U.current = !1),
            () => q.disposePaths(eo)
          );
        }, [q, eo, X]),
        (0, y.useEffect)(() => {
          let o = [];
          return (
            Object.entries(et).forEach(([l, c]) => {
              c(
                q.get(l),
                l,
                vector_plugin_6f82aee9_esm_objectSpread2(
                  { initial: !0, get: q.get },
                  q.getInput(l)
                )
              );
              let u = q.useStore.subscribe(
                (o) => {
                  let c = o.data[l],
                    u = c.disabled ? void 0 : c.value;
                  return [u, c];
                },
                ([o, u]) =>
                  c(
                    o,
                    l,
                    vector_plugin_6f82aee9_esm_objectSpread2(
                      { initial: !1, get: q.get },
                      u
                    )
                  ),
                { equalityFn: shallow }
              );
              o.push(u);
            }),
            () => o.forEach((o) => o())
          );
        }, [q, et]),
        (0, y.useEffect)(() => {
          let o = [];
          return (
            Object.entries(er).forEach(([l, c]) =>
              o.push(q.subscribeToEditStart(l, c))
            ),
            Object.entries(en).forEach(([l, c]) =>
              o.push(q.subscribeToEditEnd(l, c))
            ),
            () => o.forEach((o) => o())
          );
        }, [er, en, q]),
        H)
          ? [ei, ea, el]
          : ei;
      }
      register(_.SELECT, rT),
        register(_.IMAGE, nI),
        register(_.NUMBER, r$),
        register(_.COLOR, ny),
        register(_.STRING, rA),
        register(_.BOOLEAN, rM),
        register(_.INTERVAL, nB),
        register(_.VECTOR3D, nw),
        register(_.VECTOR2D, nC);
    },
    4529: function (o, l, c) {
      "use strict";
      var u = c(1833),
        h = c(9386),
        g = c(3200),
        _ = c(1086);
      o.exports = function (o, l, c) {
        if (!u(o)) throw TypeError("expected an object");
        if ("string" != typeof l || null == c) return h.apply(null, arguments);
        if ("string" == typeof c) return _(o, l, c), o;
        var b = g(o, l);
        return u(c) && u(b) && (c = h({}, b, c)), _(o, l, c), o;
      };
    },
    9386: function (o, l, c) {
      "use strict";
      var u = c(1833),
        h = c(2561);
      function mixinDeep(o, l) {
        for (var c = arguments.length, u = 0; ++u < c; ) {
          var g = arguments[u];
          isObject(g) && h(g, copy, o);
        }
        return o;
      }
      function copy(o, l) {
        if ("__proto__" !== l && "constructor" !== l && "prototype" !== l) {
          var c = this[l];
          isObject(o) && isObject(c) ? mixinDeep(c, o) : (this[l] = o);
        }
      }
      function isObject(o) {
        return u(o) && !Array.isArray(o);
      }
      o.exports = mixinDeep;
    },
    2703: function (o, l, c) {
      "use strict";
      var u = c(414);
      function emptyFunction() {}
      function emptyFunctionWithReset() {}
      (emptyFunctionWithReset.resetWarningCache = emptyFunction),
        (o.exports = function () {
          function shim(o, l, c, h, g, _) {
            if (_ !== u) {
              var b = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((b.name = "Invariant Violation"), b);
            }
          }
          function getShim() {
            return shim;
          }
          shim.isRequired = shim;
          var o = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction,
          };
          return (o.PropTypes = o), o;
        });
    },
    5697: function (o, l, c) {
      o.exports = c(2703)();
    },
    414: function (o) {
      "use strict";
      o.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    1086: function (o, l, c) {
      "use strict";
      /*!
       * set-value <https://github.com/jonschlinkert/set-value>
       *
       * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var u = c(7853),
        h = c(6919),
        g = c(5299),
        _ = c(4642);
      function isValidKey(o) {
        return "__proto__" !== o && "constructor" !== o && "prototype" !== o;
      }
      o.exports = function (o, l, c) {
        if (
          !_(o) ||
          (Array.isArray(l) && (l = [].concat.apply([], l).join(".")),
          "string" != typeof l)
        )
          return o;
        for (
          var b = u(l, { sep: ".", brackets: !0 }).filter(isValidKey),
            y = b.length,
            w = -1,
            T = o;
          ++w < y;

        ) {
          var A = b[w];
          if (w !== y - 1) {
            _(T[A]) || (T[A] = {}), (T = T[A]);
            continue;
          }
          g(T[A]) && g(c) ? (T[A] = h({}, T[A], c)) : (T[A] = c);
        }
        return o;
      };
    },
    4642: function (o) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ o.exports = function (o) {
        return null != o && ("object" == typeof o || "function" == typeof o);
      };
    },
    7853: function (o, l, c) {
      "use strict";
      /*!
       * split-string <https://github.com/jonschlinkert/split-string>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var u = c(8071);
      function getClosingQuote(o, l, c, u) {
        var h = o.indexOf(l, c);
        return "\\" === o.charAt(h - 1) ? getClosingQuote(o, l, h + 1) : h;
      }
      o.exports = function (o, l, c) {
        if ("string" != typeof o) throw TypeError("expected a string");
        "function" == typeof l && ((c = l), (l = null)),
          "string" == typeof l && (l = { sep: l });
        var h,
          g,
          _ = u({ sep: "." }, l),
          b = _.quotes || ['"', "'", "`"];
        !0 === _.brackets
          ? (h = { "<": ">", "(": ")", "[": "]", "{": "}" })
          : _.brackets && (h = _.brackets);
        var y = [],
          w = [],
          T = [""],
          A = _.sep,
          I = o.length,
          N = -1;
        function expected() {
          if (h && w.length) return h[w[w.length - 1]];
        }
        for (; ++N < I; ) {
          var W,
            B,
            F = o[N],
            H = o[N + 1],
            U = { val: F, idx: N, arr: T, str: o };
          if ((y.push(U), "\\" === F)) {
            (U.val =
              !0 ===
              ((W = N),
              "function" == typeof _.keepEscaping
                ? _.keepEscaping(o, W)
                : !0 === _.keepEscaping || "\\" === o[W + 1])
                ? F + H
                : H),
              (U.escaped = !0),
              "function" == typeof c && c(U),
              (T[T.length - 1] += U.val),
              N++;
            continue;
          }
          if (h && h[F]) {
            w.push(F);
            var K = expected(),
              G = N + 1;
            if (-1 !== o.indexOf(K, G + 1))
              for (; w.length && G < I; ) {
                var Y = o[++G];
                if ("\\" === Y) {
                  Y++;
                  continue;
                }
                if (-1 !== b.indexOf(Y)) {
                  G = getClosingQuote(o, Y, G + 1);
                  continue;
                }
                if (((K = expected()), w.length && -1 === o.indexOf(K, G + 1)))
                  break;
                if (h[Y]) {
                  w.push(Y);
                  continue;
                }
                K === Y && w.pop();
              }
            if (-1 === (g = G)) {
              T[T.length - 1] += F;
              continue;
            }
            (F = o.slice(N, g + 1)), (U.val = F), (U.idx = N = g);
          }
          if (-1 !== b.indexOf(F)) {
            if (-1 === (g = getClosingQuote(o, F, N + 1))) {
              T[T.length - 1] += F;
              continue;
            }
            (F =
              !0 ===
              ((B = F),
              (!0 === _.keepDoubleQuotes && '"' === B) ||
                (!0 === _.keepSingleQuotes && "'" === B) ||
                _.keepQuotes)
                ? o.slice(N, g + 1)
                : o.slice(N + 1, g)),
              (U.val = F),
              (U.idx = N = g);
          }
          if (
            ("function" == typeof c && (c(U, y), (F = U.val), (N = U.idx)),
            U.val === A && !1 !== U.split)
          ) {
            T.push("");
            continue;
          }
          T[T.length - 1] += U.val;
        }
        return T;
      };
    },
    8071: function (o, l, c) {
      "use strict";
      var u = c(1833),
        h = c(1052);
      function isObject(o) {
        return (o && "object" == typeof o) || u(o);
      }
      o.exports =
        Object.assign ||
        function (o) {
          if (null == o)
            throw TypeError("Cannot convert undefined or null to object");
          isObject(o) || (o = {});
          for (var l = 1; l < arguments.length; l++) {
            var c,
              u = arguments[l];
            (c = u) &&
              "string" == typeof c &&
              (u = (function (o) {
                var l = {};
                for (var c in o) l[c] = o[c];
                return l;
              })(u)),
              isObject(u) &&
                ((function (o, l) {
                  for (var c in l)
                    Object.prototype.hasOwnProperty.call(l, c) && (o[c] = l[c]);
                })(o, u),
                h(o, u));
          }
          return o;
        };
    },
  },
]);
