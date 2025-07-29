(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    4176: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 8885));
    },
    4357: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      let r = (0, s(9946).A)("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    5339: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      let r = (0, s(9946).A)("CircleAlert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    8885: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => d });
      var r = s(5155),
        o = s(2115),
        n = s(9946);
      let l = (0, n.A)("Link", [
          [
            "path",
            {
              d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
              key: "1cjeqo",
            },
          ],
          [
            "path",
            {
              d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
              key: "19qd67",
            },
          ],
        ]),
        i = (0, n.A)("ChevronDown", [
          ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
        ]);
      var a = s(5339),
        c = s(4357);
      function d() {
        let [e, t] = (0, o.useState)("546464656555"),
          [s, n] = (0, o.useState)(""),
          [d, m] = (0, o.useState)("is.gd"),
          [p, x] = (0, o.useState)(!1),
          [h, u] = (0, o.useState)(""),
          [b, k] = (0, o.useState)(""),
          [f, w] = (0, o.useState)(!1),
          [v, g] = (0, o.useState)(!1),
          [j, N] = (0, o.useState)(""),
          [y, C] = (0, o.useState)(""),
          [S, L] = (0, o.useState)("is.gd"),
          [A, E] = (0, o.useState)(!1),
          [P, z] = (0, o.useState)(""),
          [R, F] = (0, o.useState)(""),
          [G, U] = (0, o.useState)(!1),
          [D, I] = (0, o.useState)(!1),
          [O, _] = (0, o.useState)(""),
          [T, M] = (0, o.useState)(""),
          [q, B] = (0, o.useState)("Community"),
          [W, J] = (0, o.useState)(""),
          [V, $] = (0, o.useState)("is.gd"),
          [Z, H] = (0, o.useState)(!1),
          [K, Q] = (0, o.useState)(""),
          [X, Y] = (0, o.useState)(""),
          [ee, et] = (0, o.useState)(!1),
          [es, er] = (0, o.useState)(!1),
          [eo, en] = (0, o.useState)(!1),
          [el, ei] = (0, o.useState)(""),
          ea = ["is.gd"];
        (0, o.useEffect)(() => {
          e &&
            (u("https://www.roblox.com/users/".concat(e, "/profile")),
            k("[https*:*//www.roblox.com/users/".concat(e, "/profile]()"))),
            z(
              "https://www.roblox.com/share?code=26060ea909726140825b51c47c6897c7&type=Server"
            ),
            F(
              "[https*:*//www.roblox.com/share?code=26060ea909726140825b51c47c6897c7&type=Server]()"
            ),
            T &&
              (er(!1),
              Q(
                "https://www.roblox.com/communities/"
                  .concat(T, "/")
                  .concat(q || "Community")
              ),
              Y(
                "[https*:*//www.roblox.com/communities/"
                  .concat(T, "/")
                  .concat(q || "Community", "]()")
              ));
        }, [e, T, q]);
        let ec = async (e) => {
            N(""), _(""), ei("");
            let t = e;
            t.startsWith("http://") ||
              t.startsWith("https://") ||
              (t = "https://" + t);
            try {
              console.log("Attempting to shorten URL: ".concat(t));
              let e = await fetch("/api/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: t }),
              });
              if (!e.ok) {
                let t = await e.json();
                throw (
                  (console.error("API error response:", t),
                  Error(t.error || "Failed to shorten URL"))
                );
              }
              let s = await e.json();
              return console.log("API success response:", s), s.shortenedUrl;
            } catch (e) {
              throw (console.error("Error shortening URL:", e), e);
            }
          },
          ed = async () => {
            if (e && s) {
              g(!0), N("");
              try {
                let t = await ec(s);
                k(
                  "[https*:*//www.roblox.com/users/"
                    .concat(e, "/profile](")
                    .concat(t, ")")
                );
              } catch (e) {
                console.error("Error in profile generation:", e),
                  N(
                    e instanceof Error
                      ? e.message
                      : "Failed to shorten URL. Please try again."
                  );
              } finally {
                g(!1);
              }
            }
          },
          em = async () => {
            if (y) {
              I(!0), _("");
              try {
                let e = await ec(y);
                F(
                  "[https*:*//www.roblox.com/share?code=26060ea909726140825b51c47c6897c7&type=Server](".concat(
                    e,
                    ")"
                  )
                );
              } catch (e) {
                console.error("Error in server generation:", e),
                  _(
                    e instanceof Error
                      ? e.message
                      : "Failed to shorten URL. Please try again."
                  );
              } finally {
                I(!1);
              }
            }
          },
          ep = async () => {
            if (!T || !q || !W) {
              T || er(!0);
              return;
            }
            en(!0), ei("");
            try {
              let e = await ec(W);
              Y(
                "[https*:*//www.roblox.com/communities/"
                  .concat(T, "/")
                  .concat(q, "](")
                  .concat(e, ")")
              );
            } catch (e) {
              console.error("Error in group generation:", e),
                ei(
                  e instanceof Error
                    ? e.message
                    : "Failed to shorten URL. Please try again."
                );
            } finally {
              en(!1);
            }
          };
        return (
          (0, o.useEffect)(() => {
            let e = () => {
              x(!1), E(!1), H(!1);
            };
            return (
              document.addEventListener("click", e),
              () => {
                document.removeEventListener("click", e);
              }
            );
          }, []),
          (0, r.jsx)("div", {
            className:
              "min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-4 md:p-8",
            children: (0, r.jsxs)("div", {
              className: "max-w-7xl mx-auto",
              children: [
                (0, r.jsx)("h1", {
                  className:
                    "text-pink-600 text-4xl font-bold text-center mb-2",
                  children: "RobloxLinks",
                }),
                (0, r.jsx)("p", {
                  className: "text-pink-500 text-center mb-8 max-w-2xl mx-auto",
                  children:
                    "Create Fake roblox links for Discord to prevent warning messages or suspicions",
                }),
                (0, r.jsx)("div", {
                  className: "flex justify-center mb-8",
                  children: (0, r.jsxs)("a", {
                    href: "https://discord.com/invite/robloxlinks",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center bg-[#5865F2] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#4752c4] transition-colors shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200",
                    children: [
                      (0, r.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "mr-2",
                        children: (0, r.jsx)("path", {
                          d: "M19.952 5.672c-1.904-1.531-4.916-1.79-5.044-1.801-0.201-0.017-0.392 0.097-0.474 0.281-0.006 0.012-0.072 0.163-0.145 0.398 1.259 0.212 2.806 0.64 4.206 1.509 0.224 0.139 0.293 0.434 0.154 0.659-0.09 0.146-0.247 0.226-0.407 0.226-0.086 0-0.173-0.023-0.252-0.072C15.584 5.38 12.578 5.305 12 5.305S8.415 5.38 6.011 6.872c-0.225 0.14-0.519 0.07-0.659-0.154-0.14-0.225-0.07-0.519 0.154-0.659 1.4-0.868 2.947-1.297 4.206-1.509-0.074-0.236-0.14-0.386-0.145-0.398-0.083-0.184-0.273-0.298-0.474-0.281-0.128 0.01-3.139 0.269-5.069 1.822C3.015 6.625 1 12.073 1 17.003c0 0.109 0.029 0.219 0.085 0.314 0.84 1.438 3.129 3.133 5.452 3.371 0.178 0.019 0.356-0.05 0.464-0.185l1.045-1.33c-1.642-0.365-2.855-0.938-3.514-1.387-0.226-0.154-0.302-0.434-0.187-0.671 0.099-0.199 0.31-0.294 0.511-0.294 0.099 0 0.198 0.023 0.291 0.073 2.054 1.386 6.099 1.386 8.148 0 0.197-0.134 0.457-0.161 0.691-0.073 0.231 0.089 0.391 0.311 0.41 0.561 0.015 0.197-0.079 0.377-0.205 0.461-0.658 0.449-1.873 1.021-3.511 1.386l1.042 1.33c0.108 0.135 0.287 0.205 0.464 0.185 2.324-0.238 4.613-1.933 5.452-3.371 0.057-0.095 0.085-0.205 0.085-0.314 0-4.93-2.015-10.378-3.068-11.356zM8.5 15.003c-0.828 0-1.5-0.895-1.5-2s0.672-2 1.5-2 1.5 0.895 1.5 2-0.672 2-1.5 2zM15.5 15.003c-0.828 0-1.5-0.895-1.5-2s0.672-2 1.5-2 1.5 0.895 1.5 2-0.672 2-1.5 2z",
                          fill: "white",
                        }),
                      }),
                      "Join Discord",
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-200",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center mb-4",
                          children: [
                            (0, r.jsx)(l, {
                              className: "text-pink-500 mr-2",
                              size: 20,
                            }),
                            (0, r.jsx)("h2", {
                              className: "text-pink-600 text-xl font-semibold",
                              children: "Fake Profile",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsxs)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: [
                                "Account ID (Numbers Only) ",
                                (0, r.jsx)("span", {
                                  className: "text-pink-400",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              value: e,
                              onChange: (e) =>
                                t(e.target.value.replace(/\D/g, "")),
                              placeholder: "546464656555",
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Beaming Link",
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              value: s,
                              onChange: (e) => n(e.target.value),
                              placeholder: "Enter your link to shorten",
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "URL Shortener Service",
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, r.jsxs)("button", {
                                  type: "button",
                                  className:
                                    "flex items-center justify-between w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors",
                                  onClick: (e) => {
                                    e.stopPropagation(), x(!p), E(!1), H(!1);
                                  },
                                  children: [
                                    (0, r.jsx)("span", { children: d }),
                                    (0, r.jsx)(i, {
                                      size: 16,
                                      className: "ml-2",
                                    }),
                                  ],
                                }),
                                p &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute z-10 w-full mt-1 bg-white border border-pink-200 rounded-xl overflow-hidden shadow-lg",
                                    children: ea.map((e) =>
                                      (0, r.jsx)(
                                        "button",
                                        {
                                          className:
                                            "block w-full text-left p-3 text-pink-700 hover:bg-pink-50 transition-colors",
                                          onClick: (t) => {
                                            t.stopPropagation(), m(e), x(!1);
                                          },
                                          children: e,
                                        },
                                        e
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        j &&
                          (0, r.jsxs)("div", {
                            className:
                              "mb-4 text-red-500 flex items-start bg-red-50 p-3 rounded-md",
                            children: [
                              (0, r.jsx)(a.A, {
                                className: "mr-2 h-5 w-5 flex-shrink-0 mt-0.5",
                              }),
                              (0, r.jsx)("span", { children: j }),
                            ],
                          }),
                        (0, r.jsx)("button", {
                          onClick: ed,
                          disabled: !e || !s || v,
                          className:
                            "w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mb-6 hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99]",
                          children: v ? "Generating..." : "Generate Link",
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Preview",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 break-all",
                              children: (0, r.jsx)("a", {
                                href: "#",
                                className: "text-blue-500 hover:underline",
                                children:
                                  h ||
                                  "https://www.roblox.com/users/".concat(
                                    e || "546464656555",
                                    "/profile"
                                  ),
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Formatted Link",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 break-all font-mono",
                              children:
                                b ||
                                "[https*:*//www.roblox.com/users/".concat(
                                  e || "546464656555",
                                  "/profile]()"
                                ),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("button", {
                          onClick: () => {
                            b &&
                              (navigator.clipboard.writeText(b),
                              w(!0),
                              setTimeout(() => w(!1), 2e3));
                          },
                          className:
                            "w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-200 hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99]",
                          children: [
                            (0, r.jsx)(c.A, { className: "mr-2", size: 16 }),
                            f ? "Copied!" : "Copy to Clipboard",
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-200",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center mb-4",
                          children: [
                            (0, r.jsx)(l, {
                              className: "text-pink-500 mr-2",
                              size: 20,
                            }),
                            (0, r.jsx)("h2", {
                              className: "text-pink-600 text-xl font-semibold",
                              children: "Fake VIP Server",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Beaming Link",
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              value: y,
                              onChange: (e) => C(e.target.value),
                              placeholder: "Enter your link to shorten",
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "URL Shortener Service",
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, r.jsxs)("button", {
                                  type: "button",
                                  className:
                                    "flex items-center justify-between w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors",
                                  onClick: (e) => {
                                    e.stopPropagation(), E(!A), x(!1), H(!1);
                                  },
                                  children: [
                                    (0, r.jsx)("span", { children: S }),
                                    (0, r.jsx)(i, {
                                      size: 16,
                                      className: "ml-2",
                                    }),
                                  ],
                                }),
                                A &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute z-10 w-full mt-1 bg-white border border-pink-200 rounded-xl overflow-hidden shadow-lg",
                                    children: ea.map((e) =>
                                      (0, r.jsx)(
                                        "button",
                                        {
                                          className:
                                            "block w-full text-left p-3 text-pink-700 hover:bg-pink-50 transition-colors",
                                          onClick: (t) => {
                                            t.stopPropagation(), L(e), E(!1);
                                          },
                                          children: e,
                                        },
                                        e
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        O &&
                          (0, r.jsxs)("div", {
                            className:
                              "mb-4 text-red-500 flex items-start bg-red-50 p-3 rounded-md",
                            children: [
                              (0, r.jsx)(a.A, {
                                className: "mr-2 h-5 w-5 flex-shrink-0 mt-0.5",
                              }),
                              (0, r.jsx)("span", { children: O }),
                            ],
                          }),
                        (0, r.jsx)("button", {
                          onClick: em,
                          disabled: !y || D,
                          className:
                            "w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mb-6 hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99]",
                          children: D ? "Generating..." : "Generate Link",
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Preview",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 break-all",
                              children: (0, r.jsx)("a", {
                                href: "#",
                                className: "text-blue-500 hover:underline",
                                children:
                                  "https://www.roblox.com/share?code=26060ea909726140825b51c47c6897c7&type=Server",
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Formatted Link",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 break-all font-mono",
                              children:
                                R ||
                                "[https*:*//www.roblox.com/share?code=26060ea909726140825b51c47c6897c7&type=Server]()",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("button", {
                          onClick: () => {
                            R &&
                              (navigator.clipboard.writeText(R),
                              U(!0),
                              setTimeout(() => U(!1), 2e3));
                          },
                          className:
                            "w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-200 hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99]",
                          children: [
                            (0, r.jsx)(c.A, { className: "mr-2", size: 16 }),
                            G ? "Copied!" : "Copy to Clipboard",
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-200",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center mb-4",
                          children: [
                            (0, r.jsx)(l, {
                              className: "text-pink-500 mr-2",
                              size: 20,
                            }),
                            (0, r.jsx)("h2", {
                              className: "text-pink-600 text-xl font-semibold",
                              children: "Fake Group (Community)",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsxs)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: [
                                "Group ID (Numbers Only) ",
                                (0, r.jsx)("span", {
                                  className: "text-pink-400",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              value: T,
                              onChange: (e) => {
                                M(e.target.value.replace(/\D/g, "")), er(!1);
                              },
                              placeholder: "Enter Roblox group ID",
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors",
                            }),
                            es &&
                              (0, r.jsxs)("div", {
                                className:
                                  "flex items-center mt-1 text-pink-500 text-xs",
                                children: [
                                  (0, r.jsx)(a.A, {
                                    size: 12,
                                    className: "mr-1",
                                  }),
                                  "Group ID is required",
                                ],
                              }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsxs)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: [
                                "Group Name ",
                                (0, r.jsx)("span", {
                                  className: "text-pink-400",
                                  children: "*",
                                }),
                              ],
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              value: q,
                              onChange: (e) => B(e.target.value),
                              placeholder: "Community",
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Beaming Link",
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              value: W,
                              onChange: (e) => J(e.target.value),
                              placeholder: "Enter your link to shorten",
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "URL Shortener Service",
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, r.jsxs)("button", {
                                  type: "button",
                                  className:
                                    "flex items-center justify-between w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors",
                                  onClick: (e) => {
                                    e.stopPropagation(), H(!Z), x(!1), E(!1);
                                  },
                                  children: [
                                    (0, r.jsx)("span", { children: V }),
                                    (0, r.jsx)(i, {
                                      size: 16,
                                      className: "ml-2",
                                    }),
                                  ],
                                }),
                                Z &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute z-10 w-full mt-1 bg-white border border-pink-200 rounded-xl overflow-hidden shadow-lg",
                                    children: ea.map((e) =>
                                      (0, r.jsx)(
                                        "button",
                                        {
                                          className:
                                            "block w-full text-left p-3 text-pink-700 hover:bg-pink-50 transition-colors",
                                          onClick: (t) => {
                                            t.stopPropagation(), $(e), H(!1);
                                          },
                                          children: e,
                                        },
                                        e
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        el &&
                          (0, r.jsxs)("div", {
                            className:
                              "mb-4 text-red-500 flex items-start bg-red-50 p-3 rounded-md",
                            children: [
                              (0, r.jsx)(a.A, {
                                className: "mr-2 h-5 w-5 flex-shrink-0 mt-0.5",
                              }),
                              (0, r.jsx)("span", { children: el }),
                            ],
                          }),
                        (0, r.jsx)("button", {
                          onClick: ep,
                          disabled: !T || !q || !W || eo,
                          className:
                            "w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mb-6 hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99]",
                          children: eo ? "Generating..." : "Generate Link",
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Preview",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 break-all",
                              children: T
                                ? (0, r.jsxs)("a", {
                                    href: "#",
                                    className: "text-blue-500 hover:underline",
                                    children: [
                                      "https://www.roblox.com/communities/",
                                      T,
                                      "/",
                                      q || "Community",
                                    ],
                                  })
                                : (0, r.jsx)("a", {
                                    href: "#",
                                    className: "text-blue-500 hover:underline",
                                    children:
                                      "https://www.roblox.com/communities/GROUP_ID/Community",
                                  }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-pink-700 mb-1 text-sm",
                              children: "Formatted Link",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "w-full bg-pink-50 border border-pink-200 rounded-xl p-3 text-pink-700 break-all font-mono",
                              children: T
                                ? "[https*:*//www.roblox.com/communities/"
                                    .concat(T, "/")
                                    .concat(q || "Community", "]()")
                                : "[https*:*//www.roblox.com/communities/GROUP_ID/Community]()",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("button", {
                          onClick: () => {
                            X &&
                              (navigator.clipboard.writeText(X),
                              et(!0),
                              setTimeout(() => et(!1), 2e3));
                          },
                          className:
                            "w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-200 hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99]",
                          children: [
                            (0, r.jsx)(c.A, { className: "mr-2", size: 16 }),
                            ee ? "Copied!" : "Copy to Clipboard",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    9946: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      var r = s(2115);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        n = function () {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          return t
            .filter((e, t, s) => !!e && "" !== e.trim() && s.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var l = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let i = (0, r.forwardRef)((e, t) => {
          let {
            color: s = "currentColor",
            size: o = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: a,
            className: c = "",
            children: d,
            iconNode: m,
            ...p
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...l,
              width: o,
              height: o,
              stroke: s,
              strokeWidth: a ? (24 * Number(i)) / Number(o) : i,
              className: n("lucide", c),
              ...p,
            },
            [
              ...m.map((e) => {
                let [t, s] = e;
                return (0, r.createElement)(t, s);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        a = (e, t) => {
          let s = (0, r.forwardRef)((s, l) => {
            let { className: a, ...c } = s;
            return (0, r.createElement)(i, {
              ref: l,
              iconNode: t,
              className: n("lucide-".concat(o(e)), a),
              ...c,
            });
          });
          return (s.displayName = "".concat(e)), s;
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [441, 684, 358], () => t(4176)), (_N_E = e.O());
  },
]);
