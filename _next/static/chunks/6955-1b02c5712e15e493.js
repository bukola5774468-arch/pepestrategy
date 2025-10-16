(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6955],
  {
    890: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vw: () => m,
        DO: () => o,
        CC: () => s,
        sd: () => a,
        Fe: () => i,
        Ht: () => c,
        uH: () => u,
        Id: () => b,
        qj: () => y,
        O8: () => d,
        po: () => g,
        Ow: () => f,
        fd: () => h,
        ZJ: () => p,
        DH: () => l,
      });
      let r =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function o(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function a(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        i(e.outputLen), i(e.blockLen);
      }
      function s(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        o(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      function l(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function u(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function d(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function f(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let h =
        68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
          ? (e) => e
          : function (e) {
              for (let n = 0; n < e.length; n++) {
                var t;
                e[n] =
                  (((t = e[n]) << 24) & 0xff000000) |
                  ((t << 8) & 0xff0000) |
                  ((t >>> 8) & 65280) |
                  ((t >>> 24) & 255);
              }
              return e;
            };
      function p(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          o(e),
          e
        );
      }
      function b(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          o(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      class m {}
      function y(e) {
        let t = (t) => e().update(p(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function g(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        if (r && "function" == typeof r.randomBytes)
          return Uint8Array.from(r.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    940: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { Z: () => w });
      var i = n(95089);
      let o = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => o(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => o(t)(e),
            };
          }
        },
        a = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach((n) => n(t, e));
              }
            },
            i = () => t,
            o = {
              setState: r,
              getState: i,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, i, o));
          return o;
        },
        s = (e) => (e ? a(e) : a);
      var c = n(63036),
        l = n(68463);
      class u {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new l.b(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function d(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function f(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function h(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function p(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              i = [],
              o = [];
            return function (a, s) {
              if ("object" == typeof s)
                if (i.length) {
                  let e = h(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), o.splice(e)),
                    (o[o.length] = a);
                  let n = h(i, s);
                  if (0 !== n)
                    return r ? t.call(this, a, s, f(o, n)) : `[ref=${f(o, n)}]`;
                } else (i[0] = s), (o[0] = a);
              return n ? e.call(this, a, s) : s;
            };
          })((e, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      let b = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var m = n(43159);
      let y = 256;
      var g = n(46465);
      function w(e) {
        let t,
          n,
          a,
          {
            multiInjectedProviderDiscovery: l = !0,
            storage: f = (function (e) {
              let {
                deserialize: t = d,
                key: n = "wagmi",
                serialize: r = p,
                storage: i = b,
              } = e;
              function o(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...i,
                key: n,
                async getItem(e, r) {
                  let a = i.getItem(`${n}.${e}`),
                    s = await o(a);
                  return s ? t(s) ?? null : r ?? null;
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t
                    ? await o(i.removeItem(a))
                    : await o(i.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await o(i.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : b;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, n) {
                    try {
                      e.setItem(t, n);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: h = !0,
            ssr: w = !1,
            ...v
          } = e,
          A =
            "undefined" != typeof window && l
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]),
                          e.forEach((e) => e(t, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), r?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), r?.(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      e.add(n), r && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          x = s(() => v.chains),
          C = s(() => {
            let e = [],
              t = new Set();
            for (let n of v.connectors ?? []) {
              let r = E(n);
              if ((e.push(r), !w && r.rdns))
                for (let e of "string" == typeof r.rdns ? [r.rdns] : r.rdns)
                  t.add(e);
            }
            if (!w && A)
              for (let n of A.getProviders())
                t.has(n.info.rdns) || e.push(E(I(n)));
            return e;
          });
        function E(e) {
          let t = new u(
              (function (e = 11) {
                if (!r || y + e > 512) {
                  (r = ""), (y = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(y, y++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: x.getState(),
                storage: f,
                transports: v.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", R), n.setup?.(), n;
        }
        function I(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, c.b)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let B = new Map();
        function P() {
          return {
            chainId: x.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let k = "0.0.0-canary-";
        t = g.r.startsWith(k)
          ? Number.parseInt(g.r.replace(k, ""), 10)
          : Number.parseInt(g.r.split(".")[0] ?? "0", 10);
        let S = s(
          ((a = f
            ? ((n = {
                migrate(e, n) {
                  if (n === t) return e;
                  let r = P(),
                    i = O(e, r.chainId);
                  return { ...r, chainId: i };
                },
                name: "store",
                partialize: (e) => ({
                  connections: {
                    __type: "Map",
                    value: Array.from(e.connections.entries()).map(([e, t]) => {
                      let { id: n, name: r, type: i, uid: o } = t.connector;
                      return [
                        e,
                        {
                          ...t,
                          connector: { id: n, name: r, type: i, uid: o },
                        },
                      ];
                    }),
                  },
                  chainId: e.chainId,
                  current: e.current,
                }),
                merge(e, t) {
                  "object" == typeof e && e && "status" in e && delete e.status;
                  let n = O(e, t.chainId);
                  return { ...t, ...e, chainId: n };
                },
                skipHydration: w,
                storage: f,
                version: t,
              }),
              (e, t, r) => {
                let i,
                  a = {
                    storage: (function (e, t) {
                      let n;
                      try {
                        n = e();
                      } catch (e) {
                        return;
                      }
                      return {
                        getItem: (e) => {
                          var t;
                          let r = (e) =>
                              null === e ? null : JSON.parse(e, void 0),
                            i = null != (t = n.getItem(e)) ? t : null;
                          return i instanceof Promise ? i.then(r) : r(i);
                        },
                        setItem: (e, t) =>
                          n.setItem(e, JSON.stringify(t, void 0)),
                        removeItem: (e) => n.removeItem(e),
                      };
                    })(() => localStorage),
                    partialize: (e) => e,
                    version: 0,
                    merge: (e, t) => ({ ...t, ...e }),
                    ...n,
                  },
                  s = !1,
                  c = new Set(),
                  l = new Set(),
                  u = a.storage;
                if (!u)
                  return P(
                    (...t) => {
                      console.warn(
                        `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                      ),
                        e(...t);
                    },
                    t,
                    r
                  );
                let d = () => {
                    let e = a.partialize({ ...t() });
                    return u.setItem(a.name, { state: e, version: a.version });
                  },
                  f = r.setState;
                r.setState = (e, t) => {
                  f(e, t), d();
                };
                let h = P(
                  (...t) => {
                    e(...t), d();
                  },
                  t,
                  r
                );
                r.getInitialState = () => h;
                let p = () => {
                  var n, r;
                  if (!u) return;
                  (s = !1),
                    c.forEach((e) => {
                      var n;
                      return e(null != (n = t()) ? n : h);
                    });
                  let f =
                    (null == (r = a.onRehydrateStorage)
                      ? void 0
                      : r.call(a, null != (n = t()) ? n : h)) || void 0;
                  return o(u.getItem.bind(u))(a.name)
                    .then((e) => {
                      if (e)
                        if (
                          "number" != typeof e.version ||
                          e.version === a.version
                        )
                          return [!1, e.state];
                        else {
                          if (a.migrate)
                            return [!0, a.migrate(e.state, e.version)];
                          console.error(
                            "State loaded from storage couldn't be migrated since no migrate function was provided"
                          );
                        }
                      return [!1, void 0];
                    })
                    .then((n) => {
                      var r;
                      let [o, s] = n;
                      if (
                        (e((i = a.merge(s, null != (r = t()) ? r : h)), !0), o)
                      )
                        return d();
                    })
                    .then(() => {
                      null == f || f(i, void 0),
                        (i = t()),
                        (s = !0),
                        l.forEach((e) => e(i));
                    })
                    .catch((e) => {
                      null == f || f(void 0, e);
                    });
                };
                return (
                  (r.persist = {
                    setOptions: (e) => {
                      (a = { ...a, ...e }), e.storage && (u = e.storage);
                    },
                    clearStorage: () => {
                      null == u || u.removeItem(a.name);
                    },
                    getOptions: () => a,
                    rehydrate: () => p(),
                    hasHydrated: () => s,
                    onHydrate: (e) => (
                      c.add(e),
                      () => {
                        c.delete(e);
                      }
                    ),
                    onFinishHydration: (e) => (
                      l.add(e),
                      () => {
                        l.delete(e);
                      }
                    ),
                  }),
                  a.skipHydration || p(),
                  i || h
                );
              })
            : P),
          (e, t, n) => {
            let r = n.subscribe;
            return (
              (n.subscribe = (e, t, i) => {
                let o = e;
                if (t) {
                  let r = (null == i ? void 0 : i.equalityFn) || Object.is,
                    a = e(n.getState());
                  (o = (n) => {
                    let i = e(n);
                    if (!r(a, i)) {
                      let e = a;
                      t((a = i), e);
                    }
                  }),
                    (null == i ? void 0 : i.fireImmediately) && t(a, a);
                }
                return r(o);
              }),
              a(e, t, n)
            );
          })
        );
        function O(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            x.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function M(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function R(e) {
          "connecting" !== S.getState().status &&
            "reconnecting" !== S.getState().status &&
            S.setState((t) => {
              let n = C.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount("connect") &&
                    n.emitter.off("connect", M),
                  n.emitter.listenerCount("change") ||
                    n.emitter.on("change", M),
                  n.emitter.listenerCount("disconnect") ||
                    n.emitter.on("disconnect", T),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function T(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount("change") &&
                n.connector.emitter.off("change", M),
                e.emitter.listenerCount("disconnect") &&
                  n.connector.emitter.off("disconnect", T),
                e.emitter.listenerCount("connect") ||
                  n.connector.emitter.on("connect", R);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let r = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: r.connector.uid,
            };
          });
        }
        return (
          S.setState(P()),
          h &&
            S.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (x.getState().some((t) => t.id === e))
                  return S.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          A?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of C.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  n.add(t);
            let r = [];
            for (let i of e) {
              if (n.has(i.info.rdns)) continue;
              let e = E(I(i));
              t.has(e.id) || r.push(e);
            }
            (!f || S.persist.hasHydrated()) &&
              C.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return x.getState();
            },
            get connectors() {
              return C.getState();
            },
            storage: f,
            getClient: function (e = {}) {
              let t,
                n = e.chainId ?? S.getState().chainId,
                r = x.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new m.nk();
              {
                let e = B.get(S.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new m.nk();
              }
              {
                let e = B.get(n);
                if (e) return e;
              }
              if (v.client) t = v.client({ chain: r });
              else {
                let e = r.id,
                  n = x.getState().map((e) => e.id),
                  o = {};
                for (let [t, r] of Object.entries(v))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof r)
                      if (e in r) o[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        o[t] = r;
                      }
                    else o[t] = r;
                t = (0, i.U)({
                  ...o,
                  chain: r,
                  batch: o.batch ?? { multicall: !0 },
                  transport: (t) => v.transports[e]({ ...t, connectors: C }),
                });
              }
              return B.set(n, t), t;
            },
            get state() {
              return S.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(S.getState()) : e;
              let n = P();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                S.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              S.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: A,
              async revalidate() {
                let e = S.getState(),
                  t = e.connections,
                  n = e.current;
                for (let [, e] of t) {
                  let r = e.connector;
                  (r.isAuthorized && (await r.isAuthorized())) ||
                    (t.delete(r.uid), n === r.uid && (n = null));
                }
                S.setState((e) => ({ ...e, connections: t, current: n }));
              },
              store: S,
              ssr: !!w,
              syncConnectedChain: h,
              transports: v.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(x.getState()) : e;
                  if (0 !== t.length) return x.setState(t, !0);
                },
                subscribe: (e) => x.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: I,
                setup: E,
                setState: (e) =>
                  C.setState("function" == typeof e ? e(C.getState()) : e, !0),
                subscribe: (e) => C.subscribe(e),
              },
              events: { change: M, connect: R, disconnect: T },
            },
          }
        );
      }
    },
    1347: (e, t, n) => {
      "use strict";
      n.d(t, { iY: () => c });
      var r = n(97525),
        i = n(60587),
        o = n(24784),
        a = n(33704),
        s = n(88878);
      function c(e) {
        let t,
          { abi: n, args: c = [], name: l } = e,
          u = (0, i.q)(l, { strict: !1 }),
          d = n.filter((e) =>
            u
              ? "function" === e.type
                ? (0, s.V)(e) === l
                : "event" === e.type && (0, a.h)(e) === l
              : "name" in e && e.name === l
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d) {
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        i = n.type;
                      switch (i) {
                        case "address":
                          return (0, o.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === i && "components" in n)
                            return Object.values(n.components).every((n, r) =>
                              e(Object.values(t)[r], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              i
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let i in t) {
                      let a = t[i],
                        s = n[i];
                      if (
                        "tuple" === a.type &&
                        "tuple" === s.type &&
                        "components" in a &&
                        "components" in s
                      )
                        return e(a.components, s.components, r[i]);
                      let c = [a.type, s.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, o.P)(r[i], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (n)
                    throw new r.nM(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || d[0];
        }
      }
    },
    1588: (e, t, n) => {
      "use strict";
      n.d(t, { BD: () => i, D5: () => r, Ge: () => o });
      let r = /^(.*)\[([0-9]*)\]$/,
        i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    1595: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => l });
      var r = n(41718),
        i = n(21681),
        o = n(47575),
        a = n(75575),
        s = n(99941),
        c = n(86475);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: l, query: u = {} } = n,
          d = (0, c.U)(n),
          f = (0, s.i)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: o, ...a } = t[1];
                if (!n) throw Error("name is required");
                let { chainId: s, ...c } = { ...a, name: n },
                  l = e.getClient({ chainId: s });
                return (0, i.T)(l, r.i, "getEnsAvatar")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, o.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : f }),
          p = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...h, enabled: p });
      }
    },
    1761: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => o });
      var r = n(50879),
        i = n(90523);
      async function o(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new r.Kc({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || i.uL)(n);
      }
    },
    2350: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => E });
      var r = n(20413),
        i = n(890);
      let o = BigInt(0),
        a = BigInt(1),
        s = BigInt(2),
        c = BigInt(7),
        l = BigInt(256),
        u = BigInt(113),
        d = [],
        f = [],
        h = [];
      for (let e = 0, t = a, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          d.push(2 * (5 * r + n)),
          f.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = o;
        for (let e = 0; e < 7; e++)
          (t = ((t << a) ^ ((t >> c) * u)) % l) & s &&
            (i ^= a << ((a << BigInt(e)) - a));
        h.push(i);
      }
      let p = (0, r.lD)(h, !0),
        b = p[0],
        m = p[1],
        y = (e, t, n) => (n > 32 ? (0, r.WM)(e, t, n) : (0, r.P5)(e, t, n)),
        g = (e, t, n) => (n > 32 ? (0, r.im)(e, t, n) : (0, r.B4)(e, t, n));
      class w extends i.Vw {
        constructor(e, t, n, r = !1, o = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = r),
            (this.rounds = o),
            (0, i.Fe)(n),
            !(0 < e && e < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, i.DH)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, i.fd)(this.state32),
            (function (e, t = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    i = (t + 2) % 10,
                    o = n[i],
                    a = n[i + 1],
                    s = y(o, a, 1) ^ n[r],
                    c = g(o, a, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10)
                    (e[t + n] ^= s), (e[t + n + 1] ^= c);
                }
                let t = e[2],
                  i = e[3];
                for (let n = 0; n < 24; n++) {
                  let r = f[n],
                    o = y(t, i, r),
                    a = g(t, i, r),
                    s = d[n];
                  (t = e[s]), (i = e[s + 1]), (e[s] = o), (e[s + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) n[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (e[0] ^= b[r]), (e[1] ^= m[r]);
              }
              (0, i.uH)(n);
            })(this.state32, this.rounds),
            (0, i.fd)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, i.CC)(this), (e = (0, i.ZJ)(e)), (0, i.DO)(e);
          let { blockLen: t, state: n } = this,
            r = e.length;
          for (let i = 0; i < r; ) {
            let o = Math.min(t - this.pos, r - i);
            for (let t = 0; t < o; t++) n[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, i.CC)(this, !1), (0, i.DO)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let o = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, i.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, i.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, i.uH)(this.state);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            e || (e = new w(t, n, r, o, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = o),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let v = (() => (0, i.qj)(() => new w(136, 1, 32)))();
      var A = n(60587),
        x = n(55563),
        C = n(34561);
      function E(e, t) {
        let n = v((0, A.q)(e, { strict: !1 }) ? (0, x.ZJ)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, C.nj)(n);
      }
    },
    2535: (e, t, n) => {
      "use strict";
      function r(e) {
        return e;
      }
      n.d(t, { U: () => r });
    },
    2821: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = function () {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (n = 0; n < o; n++)
                    t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                } else for (r in t) t[r] && (i && (i += " "), (i += r));
              return i;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
    3063: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => u });
      var r = n(61405),
        i = n(96748),
        o = n(86475),
        a = n(86161),
        s = n(12115),
        c = n(8828);
      let l = (e) => "object" == typeof e && !Array.isArray(e);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.U)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.b,
            i = (0, s.useRef)([]),
            o = (0, c.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (l(e) && l(t) && i.current.length) {
                  for (let n of i.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          return (0, s.useMemo)(() => {
            if (l(o)) {
              let e = { ...o },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (i.current.includes(n) || i.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return o;
          }, [o]);
        })(
          (e) => (0, r.F)(t, { onChange: e }),
          () => (0, i.s)(t)
        );
      }
    },
    3602: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => l });
      var r = n(3629),
        i = n(21681),
        o = n(47575),
        a = n(75575),
        s = n(99941),
        c = n(86475);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: l, query: u = {} } = n,
          d = (0, c.U)(n),
          f = (0, s.i)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: o, ...a } = t[1];
                if (!n) throw Error("address is required");
                let { chainId: s, ...c } = { ...a, address: n },
                  l = e.getClient({ chainId: s });
                return (0, i.T)(l, r.s, "getEnsName")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, o.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : f }),
          p = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...h, enabled: p });
      }
    },
    3629: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => l });
      var r = n(4486),
        i = n(71552),
        o = n(92987),
        a = n(38092),
        s = n(72757),
        c = n(25157);
      async function l(e, t) {
        let {
            address: n,
            blockNumber: l,
            blockTag: u,
            coinType: d = 60n,
            gatewayUrls: f,
            strict: h,
          } = t,
          { chain: p } = e,
          b = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!p)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, i.M)({
              blockNumber: l,
              chain: p,
              contract: "ensUniversalResolver",
            });
          })();
        try {
          let t = {
              address: b,
              abi: r.oX,
              args: [n, d, f ?? [a.J]],
              functionName: "reverseWithGateways",
              blockNumber: l,
              blockTag: u,
            },
            i = (0, s.T)(e, c.J, "readContract"),
            [o] = await i(t);
          return o || null;
        } catch (e) {
          if (h) throw e;
          if ((0, o.J)(e)) return null;
          throw e;
        }
      }
    },
    3917: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => h });
      var r = n(2535),
        i = n(97171),
        o = n(93420),
        a = n(43159),
        s = n(77608),
        c = n(73168),
        l = n(34561),
        u = n(37407),
        d = n(56674),
        f = n(11914);
      function h(e = {}) {
        let t, p, b, m, y, g, w, v;
        return (0, r.U)((r) => ({
          id: "metaMaskSDK",
          name: "MetaMask",
          rdns: ["io.metamask", "io.metamask.mobile"],
          type: h.type,
          async setup() {
            let e = await this.getProvider();
            e?.on &&
              (g || ((g = this.onConnect.bind(this)), e.on("connect", g)),
              m ||
                ((m = this.onAccountsChanged.bind(this)),
                e.on("accountsChanged", m)));
          },
          async connect({
            chainId: n,
            isReconnecting: r,
            withCapabilities: i,
          } = {}) {
            let o = await this.getProvider();
            w || ((w = this.onDisplayUri), o.on("display_uri", w));
            let a = [];
            r && (a = await this.getAccounts().catch(() => []));
            try {
              let r, l;
              a?.length ||
                (e.connectAndSign || e.connectWith
                  ? (e.connectAndSign
                      ? (r = await t.connectAndSign({ msg: e.connectAndSign }))
                      : e.connectWith &&
                        (l = await t.connectWith({
                          method: e.connectWith.method,
                          params: e.connectWith.params,
                        })),
                    (a = await this.getAccounts()))
                  : (a = (await t.connect()).map((e) => (0, s.b)(e))));
              let u = await this.getChainId();
              if (n && u !== n) {
                let e = await this.switchChain({ chainId: n }).catch((e) => {
                  if (e.code === c.vx.code) throw e;
                  return { id: u };
                });
                u = e?.id ?? u;
              }
              return (
                w && (o.removeListener("display_uri", w), (w = void 0)),
                r
                  ? o.emit("connectAndSign", {
                      accounts: a,
                      chainId: u,
                      signResponse: r,
                    })
                  : l &&
                    o.emit("connectWith", {
                      accounts: a,
                      chainId: u,
                      connectWithResponse: l,
                    }),
                g && (o.removeListener("connect", g), (g = void 0)),
                m ||
                  ((m = this.onAccountsChanged.bind(this)),
                  o.on("accountsChanged", m)),
                y ||
                  ((y = this.onChainChanged.bind(this)),
                  o.on("chainChanged", y)),
                v ||
                  ((v = this.onDisconnect.bind(this)), o.on("disconnect", v)),
                {
                  accounts: i
                    ? a.map((e) => ({ address: e, capabilities: {} }))
                    : a,
                  chainId: u,
                }
              );
            } catch (e) {
              if (e.code === c.vx.code) throw new c.vx(e);
              if (e.code === c.qZ.code) throw new c.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            y && (e.removeListener("chainChanged", y), (y = void 0)),
              v && (e.removeListener("disconnect", v), (v = void 0)),
              g || ((g = this.onConnect.bind(this)), e.on("connect", g)),
              await t.terminate();
          },
          async getAccounts() {
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, s.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            return Number(
              e.getChainId() || (await e?.request({ method: "eth_chainId" }))
            );
          },
          async getProvider() {
            async function a() {
              let a = await (async () => {
                  let { default: e } = await Promise.all([
                    n.e(1577),
                    n.e(2659),
                  ]).then(n.bind(n, 64470));
                  return "function" != typeof e &&
                    "function" == typeof e.default
                    ? e.default
                    : e;
                })(),
                s = {};
              for (let e of r.chains)
                s[(0, l.cK)(e.id)] = (0, i.R)({
                  chain: e,
                  transports: r.transports,
                })?.[0];
              t = new a({
                _source: "wagmi",
                forceDeleteProvider: !1,
                forceInjectProvider: !1,
                injectProvider: !1,
                ...e,
                readonlyRPCMap: s,
                dappMetadata: {
                  ...e.dappMetadata,
                  name: e.dappMetadata?.name ? e.dappMetadata?.name : "wagmi",
                  url: e.dappMetadata?.url
                    ? e.dappMetadata?.url
                    : "undefined" != typeof window
                    ? window.location.origin
                    : "https://wagmi.sh",
                },
                useDeeplink: e.useDeeplink ?? !0,
              });
              let c = await t.init(),
                u = c?.activeProvider ? c.activeProvider : t.getProvider();
              if (!u) throw new o.N();
              return u;
            }
            return p || (b || (b = a()), (p = await b)), p;
          },
          async isAuthorized() {
            try {
              return !!(
                await (0, u.b)(
                  () => (0, d.w)(() => this.getAccounts(), { timeout: 200 }),
                  { delay: 201, retryCount: 3 }
                )
              ).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider(),
              i = r.chains.find((e) => e.id === t);
            if (!i) throw new c.ch(new a.nk());
            try {
              return (
                await n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, l.cK)(t) }],
                }),
                await o(),
                await s(t),
                i
              );
            } catch (r) {
              if (r.code === c.vx.code) throw new c.vx(r);
              if (4902 === r.code || r?.data?.originalError?.code === 4902)
                try {
                  return (
                    await n.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          blockExplorerUrls: (() => {
                            let { default: t, ...n } = i.blockExplorers ?? {};
                            return e?.blockExplorerUrls
                              ? e.blockExplorerUrls
                              : t
                              ? [t.url, ...Object.values(n).map((e) => e.url)]
                              : void 0;
                          })(),
                          chainId: (0, l.cK)(t),
                          chainName: e?.chainName ?? i.name,
                          iconUrls: e?.iconUrls,
                          nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                          rpcUrls: e?.rpcUrls?.length
                            ? e.rpcUrls
                            : [i.rpcUrls.default?.http[0] ?? ""],
                        },
                      ],
                    }),
                    await o(),
                    await s(t),
                    i
                  );
                } catch (e) {
                  if (e.code === c.vx.code) throw new c.vx(e);
                  throw new c.ch(e);
                }
              throw new c.ch(r);
            }
            async function o() {
              await (0, u.b)(
                async () => {
                  let e = (0, f.ME)(await n.request({ method: "eth_chainId" }));
                  if (e !== t)
                    throw Error("User rejected switch after adding network.");
                  return e;
                },
                { delay: 50, retryCount: 20 }
              );
            }
            async function s(e) {
              await new Promise((t) => {
                let n = (i) => {
                  "chainId" in i &&
                    i.chainId === e &&
                    (r.emitter.off("change", n), t());
                };
                r.emitter.on("change", n),
                  r.emitter.emit("change", { chainId: e });
              });
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length)
              if (!t.isExtensionActive()) return;
              else this.onDisconnect();
            else if (r.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e });
            } else
              r.emitter.emit("change", { accounts: e.map((e) => (0, s.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = await this.getAccounts();
            if (0 === t.length) return;
            let n = Number(e.chainId);
            r.emitter.emit("connect", { accounts: t, chainId: n });
            let i = await this.getProvider();
            g && (i.removeListener("connect", g), (g = void 0)),
              m ||
                ((m = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", m)),
              y ||
                ((y = this.onChainChanged.bind(this)), i.on("chainChanged", y)),
              v || ((v = this.onDisconnect.bind(this)), i.on("disconnect", v));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (r.emitter.emit("disconnect"),
              y && (t.removeListener("chainChanged", y), (y = void 0)),
              v && (t.removeListener("disconnect", v), (v = void 0)),
              g || ((g = this.onConnect.bind(this)), t.on("connect", g)));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
        }));
      }
      h.type = "metaMask";
    },
    3972: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => x });
      var r = n(68836),
        i = n(84500),
        o = n(97152),
        a = n(4486),
        s = n(54560),
        c = n(13933),
        l = n(29454),
        u = n(35326),
        d = n(32733),
        f = n(6867),
        h = n(30931),
        p = n(71552),
        b = n(34561),
        m = n(96565),
        y = n(44332),
        g = n(74750),
        w = n(67550),
        v = n(4274),
        A = n(5691);
      async function x(e, t) {
        let {
            account: a = e.account,
            authorizationList: d,
            batch: h = !!e.batch?.multicall,
            blockNumber: p,
            blockTag: w = e.experimental_blockTag ?? "latest",
            accessList: x,
            blobs: I,
            blockOverrides: B,
            code: P,
            data: k,
            factory: S,
            factoryData: O,
            gas: M,
            gasPrice: R,
            maxFeePerBlobGas: T,
            maxFeePerGas: F,
            maxPriorityFeePerGas: j,
            nonce: N,
            to: U,
            value: D,
            stateOverride: L,
            ...q
          } = t,
          W = a ? (0, o.J)(a) : void 0;
        if (P && (S || O))
          throw new c.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (P && U)
          throw new c.C("Cannot provide both `code` & `to` as parameters.");
        let Q = P && k,
          z = S && O && U && k,
          $ = Q || z,
          G = Q
            ? E({ code: P, data: k })
            : z
            ? (function (e) {
                let { data: t, factory: n, factoryData: i, to: o } = e;
                return (0, f.m)({
                  abi: (0, r.U)([
                    "constructor(address, bytes, address, bytes)",
                  ]),
                  bytecode: s.WN,
                  args: [o, t, n, i],
                });
              })({ data: k, factory: S, factoryData: O, to: U })
            : k;
        try {
          (0, A.c)(t);
          let n = ("bigint" == typeof p ? (0, b.cK)(p) : void 0) || w,
            r = B ? i.J(B) : void 0,
            o = (0, v.yH)(L),
            a = e.chain?.formatters?.transactionRequest?.format,
            s = (a || g.Bv)({
              ...(0, y.o)(q, { format: a }),
              from: W?.address,
              accessList: x,
              authorizationList: d,
              blobs: I,
              data: G,
              gas: M,
              gasPrice: R,
              maxFeePerBlobGas: T,
              maxFeePerGas: F,
              maxPriorityFeePerGas: j,
              nonce: N,
              to: $ ? void 0 : U,
              value: D,
            });
          if (
            h &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: s }) &&
            !o &&
            !r
          )
            try {
              return await C(e, { ...s, blockNumber: p, blockTag: w });
            } catch (e) {
              if (!(e instanceof l.YE) && !(e instanceof l.rj)) throw e;
            }
          let c = (() => {
              let e = [s, n];
              return o && r
                ? [...e, o, r]
                : o
                ? [...e, o]
                : r
                ? [...e, {}, r]
                : e;
            })(),
            u = await e.request({ method: "eth_call", params: c });
          if ("0x" === u) return { data: void 0 };
          return { data: u };
        } catch (a) {
          let r = (function (e) {
              if (!(e instanceof c.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(a),
            { offchainLookup: i, offchainLookupSignature: o } = await n
              .e(6514)
              .then(n.bind(n, 16514));
          if (!1 !== e.ccipRead && r?.slice(0, 10) === o && U)
            return { data: await i(e, { data: r, to: U }) };
          if ($ && r?.slice(0, 10) === "0x101bb98d")
            throw new u.Po({ factory: S });
          throw (0, m.d)(a, { ...t, account: W, chain: e.chain });
        }
      }
      async function C(e, t) {
        let {
            batchSize: n = 1024,
            deployless: r = !1,
            wait: i = 0,
          } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: o,
            blockTag: c = e.experimental_blockTag ?? "latest",
            data: f,
            to: m,
          } = t,
          y = (() => {
            if (r) return null;
            if (t.multicallAddress) return t.multicallAddress;
            if (e.chain)
              return (0, p.M)({
                blockNumber: o,
                chain: e.chain,
                contract: "multicall3",
              });
            throw new l.YE();
          })(),
          g = ("bigint" == typeof o ? (0, b.cK)(o) : void 0) || c,
          { schedule: v } = (0, w.u)({
            id: `${e.uid}.${g}`,
            wait: i,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, h.p)({
                  abi: a.v2,
                  args: [n],
                  functionName: "aggregate3",
                }),
                i = await e.request({
                  method: "eth_call",
                  params: [
                    {
                      ...(null === y
                        ? { data: E({ code: s.Ez, data: r }) }
                        : { to: y, data: r }),
                    },
                    g,
                  ],
                });
              return (0, d.e)({
                abi: a.v2,
                args: [n],
                functionName: "aggregate3",
                data: i || "0x",
              });
            },
          }),
          [{ returnData: A, success: x }] = await v({ data: f, to: m });
        if (!x) throw new u.$S({ data: A });
        return "0x" === A ? { data: void 0 } : { data: A };
      }
      function E(e) {
        let { code: t, data: n } = e;
        return (0, f.m)({
          abi: (0, r.U)(["constructor(bytes, bytes)"]),
          bytecode: s.LX,
          args: [t, n],
        });
      }
    },
    4058: (e, t, n) => {
      "use strict";
      n.d(t, { Ci: () => a, J8: () => s, MU: () => c });
      var r = n(59350),
        i = n(13933),
        o = n(24250);
      class a extends i.C {
        constructor({
          body: e,
          cause: t,
          details: n,
          headers: i,
          status: a,
          url: s,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: n,
            metaMessages: [
              a && `Status: ${a}`,
              `URL: ${(0, o.I)(s)}`,
              e && `Request body: ${(0, r.A)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = i),
            (this.status = a),
            (this.url = s);
        }
      }
      i.C;
      class s extends i.C {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, o.I)(n)}`,
              `Request body: ${(0, r.A)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code),
            (this.data = t.data);
        }
      }
      i.C;
      class c extends i.C {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, o.I)(t)}`,
              `Request body: ${(0, r.A)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    4274: (e, t, n) => {
      "use strict";
      n.d(t, { yH: () => l });
      var r = n(76115),
        i = n(66969),
        o = n(35674),
        a = n(24784),
        s = n(34561);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new i.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new i.NV({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function l(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...i } of e) {
          if (!(0, a.P)(n, { strict: !1 })) throw new r.M({ address: n });
          if (t[n]) throw new o.Hi({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: r, stateDiff: i, code: a } = e,
              l = {};
            if (
              (void 0 !== a && (l.code = a),
              void 0 !== t && (l.balance = (0, s.cK)(t)),
              void 0 !== n && (l.nonce = (0, s.cK)(n)),
              void 0 !== r && (l.state = c(r)),
              void 0 !== i)
            ) {
              if (l.state) throw new o.ft();
              l.stateDiff = c(i);
            }
            return l;
          })(i);
        }
        return t;
      }
    },
    4486: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ag: () => a,
        E5: () => d,
        Rm: () => l,
        SJ: () => c,
        UW: () => u,
        b2: () => i,
        oX: () => s,
        v2: () => r,
        xw: () => f,
      });
      let r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getCurrentBlockTimestamp",
            outputs: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        i = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        o = [
          {
            inputs: [{ name: "dns", type: "bytes" }],
            name: "DNSDecodingFailed",
            type: "error",
          },
          {
            inputs: [{ name: "ens", type: "string" }],
            name: "DNSEncodingFailed",
            type: "error",
          },
          { inputs: [], name: "EmptyAddress", type: "error" },
          {
            inputs: [
              { name: "status", type: "uint16" },
              { name: "message", type: "string" },
            ],
            name: "HttpError",
            type: "error",
          },
          { inputs: [], name: "InvalidBatchGatewayResponse", type: "error" },
          {
            inputs: [{ name: "errorData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              { name: "name", type: "bytes" },
              { name: "resolver", type: "address" },
            ],
            name: "ResolverNotContract",
            type: "error",
          },
          {
            inputs: [{ name: "name", type: "bytes" }],
            name: "ResolverNotFound",
            type: "error",
          },
          {
            inputs: [
              { name: "primary", type: "string" },
              { name: "primaryAddress", type: "bytes" },
            ],
            name: "ReverseAddressMismatch",
            type: "error",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "selector", type: "bytes4" },
            ],
            name: "UnsupportedResolverProfile",
            type: "error",
          },
        ],
        a = [
          ...o,
          {
            name: "resolveWithGateways",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        s = [
          ...o,
          {
            name: "reverseWithGateways",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "uint256", name: "coinType" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolver" },
              { type: "address", name: "reverseResolver" },
            ],
          },
        ],
        c = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        l = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        u = [
          {
            name: "isValidSignature",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "hash", type: "bytes32" },
              { name: "signature", type: "bytes" },
            ],
            outputs: [{ name: "", type: "bytes4" }],
          },
        ],
        d = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ],
        f = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    4697: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i });
      var r = n(60587);
      function i(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, r.q)(t) ? t : null;
      }
    },
    4896: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => c });
      var r = n(97525),
        i = n(44352),
        o = n(88878),
        a = n(80897),
        s = n(23222);
      function c(e) {
        let { abi: t, data: n } = e,
          c = (0, i.di)(n, 0, 4),
          l = t.find(
            (e) => "function" === e.type && c === (0, o.V)((0, s.B)(e))
          );
        if (!l)
          throw new r.EB(c, { docsPath: "/docs/contract/decodeFunctionData" });
        return {
          functionName: l.name,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, a.n)(l.inputs, (0, i.di)(n, 4))
              : void 0,
        };
      }
    },
    5691: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => l });
      var r = n(97152);
      let i = 2n ** 256n - 1n;
      var o = n(76115),
        a = n(88737),
        s = n(50879),
        c = n(24784);
      function l(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: l,
            maxPriorityFeePerGas: u,
            to: d,
          } = e,
          f = t ? (0, r.J)(t) : void 0;
        if (f && !(0, c.P)(f.address)) throw new o.M({ address: f.address });
        if (d && !(0, c.P)(d)) throw new o.M({ address: d });
        if (void 0 !== n && (void 0 !== l || void 0 !== u)) throw new s.n3();
        if (l && l > i) throw new a.BG({ maxFeePerGas: l });
        if (u && l && u > l)
          throw new a.lN({ maxFeePerGas: l, maxPriorityFeePerGas: u });
      }
    },
    5766: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => l });
      var r = n(11914),
        i = n(72757),
        o = n(87639),
        a = n(94788),
        s = n(59350),
        c = n(70054);
      function l(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: n = !1,
          onBlockNumber: l,
          onError: u,
          poll: d,
          pollingInterval: f = e.pollingInterval,
        }
      ) {
        let h;
        return (
          void 0 !== d
            ? d
            : "webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type))
        )
          ? (() => {
              let r = (0, s.A)(["watchBlockNumber", e.uid, t, n, f]);
              return (0, o.lB)(r, { onBlockNumber: l, onError: u }, (r) =>
                (0, a.w)(
                  async () => {
                    try {
                      let t = await (0, i.T)(
                        e,
                        c.G,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (void 0 !== h) {
                        if (t === h) return;
                        if (t - h > 1 && n)
                          for (let e = h + 1n; e < t; e++)
                            r.onBlockNumber(e, h), (h = e);
                      }
                      (void 0 === h || t > h) &&
                        (r.onBlockNumber(t, h), (h = t));
                    } catch (e) {
                      r.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: f }
                )
              );
            })()
          : (() => {
              let i = (0, s.A)(["watchBlockNumber", e.uid, t, n]);
              return (0, o.lB)(i, { onBlockNumber: l, onError: u }, (t) => {
                let n = !0,
                  i = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let o = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await o.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!n) return;
                            let i = (0, r.uU)(e.result?.number);
                            t.onBlockNumber(i, h), (h = i);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (i = a), n || i();
                    } catch (e) {
                      u?.(e);
                    }
                  })(),
                  () => i()
                );
              });
            })();
      }
    },
    5935: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => l, b: () => c });
      var r = n(32915),
        i = n(11914),
        o = n(72757),
        a = n(60186),
        s = n(32395);
      async function c(e, t) {
        return l(e, t);
      }
      async function l(e, t) {
        let { block: n, chain: c = e.chain, request: l } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let r = n || (await (0, o.T)(e, a.g, "getBlock")({})),
              i = await t({ block: r, client: e, request: l });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== t) return t;
          let r = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, i.uU)(r);
        } catch {
          let [t, i] = await Promise.all([
            n ? Promise.resolve(n) : (0, o.T)(e, a.g, "getBlock")({}),
            (0, o.T)(e, s.L, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new r.pw();
          let c = i - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    6434: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => o });
      var r = n(11914),
        i = n(34561);
      async function o(
        e,
        { address: t, blockTag: n = "latest", blockNumber: o }
      ) {
        let a = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, "bigint" == typeof o ? (0, i.cK)(o) : n],
          },
          { dedupe: !!o }
        );
        return (0, r.ME)(a);
      }
    },
    6867: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => s });
      var r = n(97525),
        i = n(40290),
        o = n(41706);
      let a = "/docs/contract/encodeDeployData";
      function s(e) {
        let { abi: t, args: n, bytecode: s } = e;
        if (!n || 0 === n.length) return s;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new r.YW({ docsPath: a });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new r.YF({ docsPath: a });
        let l = (0, o.h)(c.inputs, n);
        return (0, i.aP)([s, l]);
      }
    },
    8828: (e, t, n) => {
      "use strict";
      e.exports = n(83654);
    },
    9729: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => c });
      var r = n(2535),
        i = n(43159),
        o = n(77608),
        a = n(73168),
        s = n(34561);
      function c(e = {}) {
        var t, l;
        let u, d, f, h, p, b, m, y, g;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e, withCapabilities: t } = {}) {
                try {
                  let n = await this.getProvider(),
                    r = (
                      await n.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, o.b)(e));
                  f ||
                    ((f = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", f)),
                    h ||
                      ((h = this.onChainChanged.bind(this)),
                      n.on("chainChanged", h)),
                    p ||
                      ((p = this.onDisconnect.bind(this)),
                      n.on("disconnect", p));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: i };
                      }
                    );
                    i = t?.id ?? i;
                  }
                  return {
                    accounts: t
                      ? r.map((e) => ({ address: e, capabilities: {} }))
                      : r,
                    chainId: i,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                f && (e.removeListener("accountsChanged", f), (f = void 0)),
                  h && (e.removeListener("chainChanged", h), (h = void 0)),
                  p && (e.removeListener("disconnect", p), (p = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!d) {
                  u = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(1029),
                      n.e(2183),
                      n.e(9466),
                    ]).then(n.t.bind(n, 2183, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let r = u.walletExtension?.getChainId(),
                    i =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === r
                      ) || e.chains[0],
                    o = t.chainId || i?.id,
                    a = t.jsonRpcUrl || i?.rpcUrls.default.http[0];
                  d = u.makeWeb3Provider(a, o);
                }
                return d;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, i;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (i = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, o.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                f && (n.removeListener("accountsChanged", f), (f = void 0)),
                  h && (n.removeListener("chainChanged", h), (h = void 0)),
                  p && (n.removeListener("disconnect", p), (p = void 0));
              },
            })))
          : ((l = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e, withCapabilities: t, ...n } = {}) {
                try {
                  let r = await this.getProvider(),
                    i = (
                      await r.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in n && n.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, o.b)(e));
                  m ||
                    ((m = this.onAccountsChanged.bind(this)),
                    r.on("accountsChanged", m)),
                    y ||
                      ((y = this.onChainChanged.bind(this)),
                      r.on("chainChanged", y)),
                    g ||
                      ((g = this.onDisconnect.bind(this)),
                      r.on("disconnect", g));
                  let s = await this.getChainId();
                  if (e && s !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: s };
                      }
                    );
                    s = t?.id ?? s;
                  }
                  return {
                    accounts: t
                      ? i.map((e) => ({ address: e, capabilities: {} }))
                      : i,
                    chainId: s,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener("accountsChanged", m), (m = void 0)),
                  y && (e.removeListener("chainChanged", y), (y = void 0)),
                  g && (e.removeListener("disconnect", g), (g = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!b) {
                  let t =
                      "string" == typeof l.preference
                        ? { options: l.preference }
                        : {
                            ...l.preference,
                            options: l.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: r } = await Promise.all([
                      n.e(1029),
                      n.e(3290),
                    ]).then(n.bind(n, 83290));
                  b = r({
                    ...l,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return b;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, i;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (i = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, o.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                m && (n.removeListener("accountsChanged", m), (m = void 0)),
                  y && (n.removeListener("chainChanged", y), (y = void 0)),
                  g && (n.removeListener("disconnect", g), (g = void 0));
              },
            })));
      }
      c.type = "coinbaseWallet";
    },
    11914: (e, t, n) => {
      "use strict";
      n.d(t, {
        IQ: () => d,
        ME: () => u,
        Nx: () => l,
        Sl: () => s,
        uU: () => c,
      });
      var r = n(35276),
        i = n(16871),
        o = n(42438),
        a = n(55563);
      function s(e, { size: t }) {
        if ((0, i.E)(e) > t)
          throw new r.u({ givenSize: (0, i.E)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: n } = t;
        t.size && s(e, { size: t.size });
        let r = BigInt(e);
        if (!n) return r;
        let i = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function l(e, t = {}) {
        let n = e;
        if (
          (t.size && (s(n, { size: t.size }), (n = (0, o.B)(n))),
          "0x00" === (0, o.B)(n))
        )
          return !1;
        if ("0x01" === (0, o.B)(n)) return !0;
        throw new r.H2(n);
      }
      function u(e, t = {}) {
        return Number(c(e, t));
      }
      function d(e, t = {}) {
        let n = (0, a.aT)(e);
        return (
          t.size &&
            (s(n, { size: t.size }), (n = (0, o.B)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    13933: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => o });
      let r = "2.37.9",
        i = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) =>
            t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
          version: `viem@${r}`,
        };
      class o extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof o
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof o && t.cause.docsPath) || t.docsPath,
            s = i.getDocsUrl?.({ ...t, docsPath: a });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(s ? [`Docs: ${s}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              ...(i.version ? [`Version: ${i.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = n),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = r);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    14358: (e, t, n) => {
      "use strict";
      n.d(t, { Zh: () => y });
      var r = n(41706),
        i = n(40290),
        o = n(34561),
        a = n(2350),
        s = n(97525),
        c = n(76115),
        l = n(59350),
        u = n(13933);
      class d extends u.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, l.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class f extends u.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class h extends u.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var p = n(24784),
        b = n(16871),
        m = n(1588);
      function y(e) {
        let { domain: t = {}, message: n, primaryType: r } = e,
          l = {
            EIP712Domain: (function ({ domain: e }) {
              return [
                "string" == typeof e?.name && { name: "name", type: "string" },
                e?.version && { name: "version", type: "string" },
                ("number" == typeof e?.chainId ||
                  "bigint" == typeof e?.chainId) && {
                  name: "chainId",
                  type: "uint256",
                },
                e?.verifyingContract && {
                  name: "verifyingContract",
                  type: "address",
                },
                e?.salt && { name: "salt", type: "bytes32" },
              ].filter(Boolean);
            })({ domain: t }),
            ...e.types,
          },
          {
            domain: u,
            message: y,
            primaryType: w,
            types: v,
          } = { domain: t, message: n, primaryType: r, types: l },
          A = (e, t) => {
            for (let n of e) {
              let { name: e, type: r } = n,
                i = t[e],
                a = r.match(m.Ge);
              if (a && ("number" == typeof i || "bigint" == typeof i)) {
                let [e, t, n] = a;
                (0, o.cK)(i, {
                  signed: "int" === t,
                  size: Number.parseInt(n, 10) / 8,
                });
              }
              if ("address" === r && "string" == typeof i && !(0, p.P)(i))
                throw new c.M({ address: i });
              let l = r.match(m.BD);
              if (l) {
                let [e, t] = l;
                if (t && (0, b.E)(i) !== Number.parseInt(t, 10))
                  throw new s.BI({
                    expectedSize: Number.parseInt(t, 10),
                    givenSize: (0, b.E)(i),
                  });
              }
              let u = v[r];
              u &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new h({ type: e });
                })(r),
                A(u, i));
            }
          };
        if (v.EIP712Domain && u) {
          if ("object" != typeof u) throw new d({ domain: u });
          A(v.EIP712Domain, u);
        }
        if ("EIP712Domain" !== w)
          if (v[w]) A(v[w], y);
          else throw new f({ primaryType: w, types: v });
        let x = ["0x1901"];
        return (
          t &&
            x.push(
              (function ({ domain: e, types: t }) {
                return g({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: l })
            ),
          "EIP712Domain" !== r &&
            x.push(g({ data: n, primaryType: r, types: l })),
          (0, a.S)((0, i.xW)(x))
        );
      }
      function g({ data: e, primaryType: t, types: n }) {
        let i = (function e({ data: t, primaryType: n, types: i }) {
          let s = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, o.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let i = t.match(/^\w*/u),
                          o = i?.[0];
                        if (r.has(o) || void 0 === n[o]) return r;
                        for (let t of (r.add(o), n[o]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let i of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, a.S)(n);
              })({ primaryType: n, types: i }),
            ];
          for (let l of i[n]) {
            let [n, u] = (function t({ types: n, name: i, type: s, value: c }) {
              if (void 0 !== n[s])
                return [
                  { type: "bytes32" },
                  (0, a.S)(e({ data: c, primaryType: s, types: n })),
                ];
              if ("bytes" === s) {
                let e = c.length % 2 ? "0" : "";
                return (
                  (c = `0x${e + c.slice(2)}`),
                  [{ type: "bytes32" }, (0, a.S)(c)]
                );
              }
              if ("string" === s)
                return [{ type: "bytes32" }, (0, a.S)((0, o.nj)(c))];
              if (s.lastIndexOf("]") === s.length - 1) {
                let e = s.slice(0, s.lastIndexOf("[")),
                  o = c.map((r) => t({ name: i, type: e, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, a.S)(
                    (0, r.h)(
                      o.map(([e]) => e),
                      o.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: s }, c];
            })({ types: i, name: l.name, type: l.type, value: t[l.name] });
            s.push(n), c.push(u);
          }
          return (0, r.h)(s, c);
        })({ data: e, primaryType: t, types: n });
        return (0, a.S)(i);
      }
    },
    14432: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => G });
      var r,
        i,
        o = n(71450),
        a = n(12115),
        s = "right-scroll-bar-position",
        c = "width-before-scroll-bar";
      function l(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var u = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        d = new WeakMap();
      function f(e) {
        return e;
      }
      var h = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            i =
              (void 0 === t && (t = f),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var i = t(e, r);
                  return (
                    n.push(i),
                    function () {
                      n = n.filter(function (e) {
                        return e !== i;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var i = n;
                    (n = []), i.forEach(e), (t = n);
                  }
                  var o = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(o);
                    };
                  a(),
                    (n = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (i.options = (0, o.__assign)({ async: !0, ssr: !1 }, e)), i;
        })(),
        p = function () {},
        b = a.forwardRef(function (e, t) {
          var n,
            r,
            i,
            s,
            c = a.useRef(null),
            f = a.useState({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: p,
            }),
            b = f[0],
            m = f[1],
            y = e.forwardProps,
            g = e.children,
            w = e.className,
            v = e.removeScrollBar,
            A = e.enabled,
            x = e.shards,
            C = e.sideCar,
            E = e.noIsolation,
            I = e.inert,
            B = e.allowPinchZoom,
            P = e.as,
            k = e.gapMode,
            S = (0, o.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            O =
              ((n = [c, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return l(t, e);
                });
              }),
              ((i = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return i.value;
                    },
                    set current(value) {
                      var e = i.value;
                      e !== value && ((i.value = value), i.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (s = i.facade),
              u(
                function () {
                  var e = d.get(s);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      i = s.current;
                    t.forEach(function (e) {
                      r.has(e) || l(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || l(e, i);
                      });
                  }
                  d.set(s, n);
                },
                [n]
              ),
              s),
            M = (0, o.__assign)((0, o.__assign)({}, S), b);
          return a.createElement(
            a.Fragment,
            null,
            A &&
              a.createElement(C, {
                sideCar: h,
                removeScrollBar: v,
                shards: x,
                noIsolation: E,
                inert: I,
                setCallbacks: m,
                allowPinchZoom: !!B,
                lockRef: c,
                gapMode: k,
              }),
            y
              ? a.cloneElement(
                  a.Children.only(g),
                  (0, o.__assign)((0, o.__assign)({}, M), { ref: O })
                )
              : a.createElement(
                  void 0 === P ? "div" : P,
                  (0, o.__assign)({}, M, { className: w, ref: O }),
                  g
                )
          );
        });
      (b.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (b.classNames = { fullWidth: c, zeroRight: s });
      var m = function (e) {
        var t = e.sideCar,
          n = (0, o.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, (0, o.__assign)({}, n));
      };
      m.isSideCarExport = !0;
      var y = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = i || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, a;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        g = function () {
          var e = y();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        w = function () {
          var e = g();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        v = { left: 0, top: 0, right: 0, gap: 0 },
        A = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        x = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [A(n), A(r), A(i)];
        },
        C = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return v;
          var t = x(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        E = w(),
        I = "data-scroll-locked",
        B = function (e, t, n, r) {
          var i = e.left,
            o = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(I, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(o, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(I, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        P = function () {
          var e = parseInt(document.body.getAttribute(I) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        k = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(I, (P() + 1).toString()),
              function () {
                var e = P() - 1;
                e <= 0
                  ? document.body.removeAttribute(I)
                  : document.body.setAttribute(I, e.toString());
              }
            );
          }, []);
        },
        S = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? "margin" : r;
          k();
          var o = a.useMemo(
            function () {
              return C(i);
            },
            [i]
          );
          return a.createElement(E, {
            styles: B(o, !t, i, n ? "" : "!important"),
          });
        },
        O = !1;
      if ("undefined" != typeof window)
        try {
          var M = Object.defineProperty({}, "passive", {
            get: function () {
              return (O = !0), !0;
            },
          });
          window.addEventListener("test", M, M),
            window.removeEventListener("test", M, M);
        } catch (e) {
          O = !1;
        }
      var R = !!O && { passive: !1 },
        T = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        F = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              j(e, r))
            ) {
              var i = N(e, r);
              if (i[1] > i[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        j = function (e, t) {
          return "v" === e ? T(t, "overflowY") : T(t, "overflowX");
        },
        N = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        U = function (e, t, n, r, i) {
          var o,
            a =
              ((o = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === o ? -1 : 1),
            s = a * r,
            c = n.target,
            l = t.contains(c),
            u = !1,
            d = s > 0,
            f = 0,
            h = 0;
          do {
            var p = N(e, c),
              b = p[0],
              m = p[1] - p[2] - a * b;
            (b || m) && j(e, c) && ((f += m), (h += b)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((i && 1 > Math.abs(f)) || (!i && s > f))
              ? (u = !0)
              : !d && ((i && 1 > Math.abs(h)) || (!i && -s > h)) && (u = !0),
            u
          );
        },
        D = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        L = function (e) {
          return [e.deltaX, e.deltaY];
        },
        q = function (e) {
          return e && "current" in e ? e.current : e;
        },
        W = 0,
        Q = [];
      let z =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            i = a.useState(W++)[0],
            s = a.useState(w)[0],
            c = a.useRef(e);
          a.useEffect(
            function () {
              c.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, o.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(q),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !c.current.allowPinchZoom;
              var i,
                o = D(e),
                a = n.current,
                s = "deltaX" in e ? e.deltaX : a[0] - o[0],
                l = "deltaY" in e ? e.deltaY : a[1] - o[1],
                u = e.target,
                d = Math.abs(s) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === u.type) return !1;
              var f = F(d, u);
              if (!f) return !0;
              if (
                (f ? (i = d) : ((i = "v" === d ? "h" : "v"), (f = F(d, u))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || l) &&
                  (r.current = i),
                !i)
              )
                return !0;
              var h = r.current || i;
              return U(h, t, e, "h" === h ? s : l, !0);
            }, []),
            u = a.useCallback(function (e) {
              if (Q.length && Q[Q.length - 1] === s) {
                var n = "deltaY" in e ? L(e) : D(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var i = (c.current.shards || [])
                    .map(q)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (i.length > 0 ? l(e, i[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            d = a.useCallback(function (e, n, r, i) {
              var o = {
                name: e,
                delta: n,
                target: r,
                should: i,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(o),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== o;
                  });
                }, 1);
            }, []),
            f = a.useCallback(function (e) {
              (n.current = D(e)), (r.current = void 0);
            }, []),
            h = a.useCallback(function (t) {
              d(t.type, L(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              d(t.type, D(t), t.target, l(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              Q.push(s),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", u, R),
              document.addEventListener("touchmove", u, R),
              document.addEventListener("touchstart", f, R),
              function () {
                (Q = Q.filter(function (e) {
                  return e !== s;
                })),
                  document.removeEventListener("wheel", u, R),
                  document.removeEventListener("touchmove", u, R),
                  document.removeEventListener("touchstart", f, R);
              }
            );
          }, []);
          var b = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(s, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            b ? a.createElement(S, { gapMode: e.gapMode }) : null
          );
        }),
        h.useMedium(r),
        m);
      var $ = a.forwardRef(function (e, t) {
        return a.createElement(
          b,
          (0, o.__assign)({}, e, { ref: t, sideCar: z })
        );
      });
      $.classNames = b.classNames;
      let G = $;
    },
    14806: (e, t, n) => {
      "use strict";
      e.exports = n(30125);
    },
    15514: function (e, t, n) {
      var r;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          l = "string",
          u = "major",
          d = "model",
          f = "name",
          h = "type",
          p = "vendor",
          b = "version",
          m = "architecture",
          y = "console",
          g = "mobile",
          w = "tablet",
          v = "smarttv",
          A = "wearable",
          x = "embedded",
          C = "Amazon",
          E = "Apple",
          I = "ASUS",
          B = "BlackBerry",
          P = "Browser",
          k = "Chrome",
          S = "Firefox",
          O = "Google",
          M = "Honor",
          R = "Huawei",
          T = "Microsoft",
          F = "Motorola",
          j = "Nvidia",
          N = "OnePlus",
          U = "Opera",
          D = "OPPO",
          L = "Samsung",
          q = "Sharp",
          W = "Sony",
          Q = "Xiaomi",
          z = "Zebra",
          $ = "Facebook",
          G = "Chromium OS",
          H = "Mac OS",
          K = " Browser",
          J = function (e, t) {
            var n = {};
            for (var r in e)
              t[r] && t[r].length % 2 == 0
                ? (n[r] = t[r].concat(e[r]))
                : (n[r] = e[r]);
            return n;
          },
          V = function (e) {
            for (var t = {}, n = 0; n < e.length; n++)
              t[e[n].toUpperCase()] = e[n];
            return t;
          },
          _ = function (e, t) {
            return typeof e === l && -1 !== Z(t).indexOf(Z(e));
          },
          Z = function (e) {
            return e.toLowerCase();
          },
          Y = function (e, t) {
            if (typeof e === l)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          X = function (e, t) {
            for (var n, r, i, s, l, u, d = 0; d < t.length && !l; ) {
              var f = t[d],
                h = t[d + 1];
              for (n = r = 0; n < f.length && !l && f[n]; )
                if ((l = f[n++].exec(e)))
                  for (i = 0; i < h.length; i++)
                    (u = l[++r]),
                      typeof (s = h[i]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = u
                                ? s[1].call(this, u, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : o)
                        : (this[s] = u || o);
              d += 2;
            }
          },
          ee = function (e, t) {
            for (var n in t)
              if (typeof t[n] === c && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (_(t[n][r], e)) return "?" === n ? o : n;
              } else if (_(t[n], e)) return "?" === n ? o : n;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          et = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          en = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [b, [f, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [b, [f, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [f, b],
              [/opios[\/ ]+([\w\.]+)/i],
              [b, [f, U + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [b, [f, U + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [b, [f, U]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [b, [f, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [b, [f, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [f, b],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [b, [f, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [b, [f, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [b, [f, "UC" + P]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [b, [f, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [b, [f, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [b, [f, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [b, [f, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [b, [f, "Smart Lenovo " + P]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[f, /(.+)/, "$1 Secure " + P], b],
              [/\bfocus\/([\w\.]+)/i],
              [b, [f, S + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [b, [f, U + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [b, [f, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [b, [f, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [b, [f, U + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [b, [f, "MIUI" + K]],
              [/fxios\/([\w\.-]+)/i],
              [b, [f, S]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [b, [f, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[f, /(.+)/, "$1Browser"], b],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[f, /(.+)/, "$1" + K], b],
              [/samsungbrowser\/([\w\.]+)/i],
              [b, [f, L + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [b, [f, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[f, "Sogou Mobile"], b],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [f, b],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [f],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [b, f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[f, $], b],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /(daum)apps[\/ ]([\w\.]+)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [f, b],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [b, [f, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [b, [f, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [b, [f, k + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[f, k + " WebView"], b],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [b, [f, "Android " + P]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, b],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [b, [f, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [b, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                f,
                [
                  b,
                  ee,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, b],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[f, "Netscape"], b],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [f, b],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [b, [f, S + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /\b(links) \(([\w\.]+)/i,
              ],
              [f, [b, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [f, [b, /master.|lts./, ""]],
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [[m, "arm"]],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [[m, /ower/, "", Z]],
              [/ sun4\w[;\)]/i],
              [[m, "sparc"]],
              [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
              ],
              [[m, Z]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [p, L], [h, w]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [p, L], [h, g]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [p, E], [h, g]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [p, E], [h, w]],
              [/(macintosh);/i],
              [d, [p, E]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [p, q], [h, g]],
              [
                /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
              ],
              [d, [p, M], [h, w]],
              [/honor([-\w ]+)[;\)]/i],
              [d, [p, M], [h, g]],
              [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
              ],
              [d, [p, R], [h, w]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [p, R], [h, g]],
              [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [p, Q],
                [h, w],
              ],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i,
              ],
              [
                [d, /_/g, " "],
                [p, Q],
                [h, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [p, D], [h, g]],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [d, [p, ee, { OnePlus: ["304", "403", "203"], "*": D }], [h, w]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [p, "Vivo"], [h, g]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [p, "Realme"], [h, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [p, F], [h, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [p, F], [h, w]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [p, "LG"], [h, w]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [p, "LG"], [h, g]],
              [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
              ],
              [d, [p, "Lenovo"], [h, w]],
              [/(nokia) (t[12][01])/i],
              [p, d, [h, w]],
              [
                /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                /nokia[-_ ]?(([-\w\. ]*))/i,
              ],
              [
                [d, /_/g, " "],
                [h, g],
                [p, "Nokia"],
              ],
              [/(pixel (c|tablet))\b/i],
              [d, [p, O], [h, w]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [p, O], [h, g]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [p, W], [h, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [p, W],
                [h, w],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [p, N], [h, g]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [p, C], [h, w]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [p, C],
                [h, g],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, p, [h, w]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [p, B], [h, g]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [p, I], [h, w]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [p, I], [h, g]],
              [/(nexus 9)/i],
              [d, [p, "HTC"], [h, w]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [d, /_/g, " "], [h, g]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [p, "TCL"], [h, w]],
              [/(itel) ((\w+))/i],
              [
                [p, Z],
                d,
                [h, ee, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [p, "Acer"], [h, w]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [p, "Meizu"], [h, g]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [p, "Ulefone"], [h, g]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [d, [p, "Energizer"], [h, g]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [p, "Cat"], [h, g]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [p, "Smartfren"], [h, g]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [p, "Nothing"], [h, g]],
              [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
              ],
              [d, [p, "Archos"], [h, w]],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [d, [p, "Archos"], [h, g]],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [p, d, [h, w]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, d, [h, g]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [p, d, [h, w]],
              [/(surface duo)/i],
              [d, [p, T], [h, w]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [p, "Fairphone"], [h, g]],
              [/(u304aa)/i],
              [d, [p, "AT&T"], [h, g]],
              [/\bsie-(\w*)/i],
              [d, [p, "Siemens"], [h, g]],
              [/\b(rct\w+) b/i],
              [d, [p, "RCA"], [h, w]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [p, "Dell"], [h, w]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [p, "Verizon"], [h, w]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [p, "Barnes & Noble"], [h, w]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [p, "NuVision"], [h, w]],
              [/\b(k88) b/i],
              [d, [p, "ZTE"], [h, w]],
              [/\b(nx\d{3}j) b/i],
              [d, [p, "ZTE"], [h, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [p, "Swiss"], [h, g]],
              [/\b(zur\d{3}) b/i],
              [d, [p, "Swiss"], [h, w]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [p, "Zeki"], [h, w]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], d, [h, w]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [p, "Insignia"], [h, w]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [p, "NextBook"], [h, w]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], d, [h, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], d, [h, g]],
              [/\b(ph-1) /i],
              [d, [p, "Essential"], [h, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [p, "Envizen"], [h, w]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [p, "MachSpeed"], [h, w]],
              [/\btu_(1491) b/i],
              [d, [p, "Rotor"], [h, w]],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [d, [p, j], [h, w]],
              [/(sprint) (\w+)/i],
              [p, d, [h, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [p, T],
                [h, g],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [p, z], [h, w]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [p, z], [h, g]],
              [/smart-tv.+(samsung)/i],
              [p, [h, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [p, L],
                [h, v],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, "LG"],
                [h, v],
              ],
              [/(apple) ?tv/i],
              [p, [d, E + " TV"], [h, v]],
              [/crkey/i],
              [
                [d, k + "cast"],
                [p, O],
                [h, v],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [p, C], [h, v]],
              [/(shield \w+ tv)/i],
              [d, [p, j], [h, v]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [p, q], [h, v]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [p, W], [h, v]],
              [/(mi(tv|box)-?\w+) bui/i],
              [d, [p, Q], [h, v]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, d, [h, v]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, Y],
                [d, Y],
                [h, v],
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [d, [h, v]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[h, v]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, d, [h, y]],
              [/droid.+; (shield)( bui|\))/i],
              [d, [p, j], [h, y]],
              [/(playstation \w+)/i],
              [d, [p, W], [h, y]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [p, T], [h, y]],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [d, [p, L], [h, A]],
              [
                /((pebble))app/i,
                /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
              ],
              [p, d, [h, A]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [d, [p, D], [h, A]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [p, E], [h, A]],
              [/(opwwe\d{3})/i],
              [d, [p, N], [h, A]],
              [/(moto 360)/i],
              [d, [p, F], [h, A]],
              [/(smartwatch 3)/i],
              [d, [p, W], [h, A]],
              [/(g watch r)/i],
              [d, [p, "LG"], [h, A]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [p, z], [h, A]],
              [/droid.+; (glass) \d/i],
              [d, [p, O], [h, A]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, d, [h, A]],
              [/; (quest( \d| pro)?)/i],
              [d, [p, $], [h, A]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [h, x]],
              [/(aeobc)\b/i],
              [d, [p, C], [h, x]],
              [/(homepod).+mac os/i],
              [d, [p, E], [h, x]],
              [/windows iot/i],
              [[h, x]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [h, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [h, w]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[h, w]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[h, g]],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [d, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [b, [f, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [f, b],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [b, [f, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [f, b],
              [/ladybird\//i],
              [[f, "LibWeb"]],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [b, f],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, b],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [f, [b, ee, et]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [b, ee, et],
                [f, "Windows"],
              ],
              [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [b, /_/g, "."],
                [f, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [f, H],
                [b, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [b, f],
              [/(ubuntu) ([\w\.]+) like android/i],
              [[f, /(.+)/, "$1 Touch"], b],
              [
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
              ],
              [f, b],
              [/\(bb(10);/i],
              [b, [f, B]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [b, [f, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [b, [f, S + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [b, [f, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [b, [f, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [b, [f, k + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[f, G], b],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [f, b],
              [/(sunos) ?([\w\.\d]*)/i],
              [[f, "Solaris"], b],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [f, b],
            ],
          },
          er = function (e, t) {
            if ((typeof e === c && ((t = e), (e = o)), !(this instanceof er)))
              return new er(e, t).getResult();
            var n = typeof i !== s && i.navigator ? i.navigator : o,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              y = n && n.userAgentData ? n.userAgentData : o,
              v = t ? J(en, t) : en,
              A = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[f] = o),
                  (t[b] = o),
                  X.call(t, r, v.browser),
                  (t[u] =
                    typeof (e = t[b]) === l
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  A &&
                    n &&
                    n.brave &&
                    typeof n.brave.isBrave == a &&
                    (t[f] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = o), X.call(e, r, v.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[p] = o),
                  (e[d] = o),
                  (e[h] = o),
                  X.call(e, r, v.device),
                  A && !e[h] && y && y.mobile && (e[h] = g),
                  A &&
                    "Macintosh" == e[d] &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[d] = "iPad"), (e[h] = w)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[f] = o), (e[b] = o), X.call(e, r, v.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[f] = o),
                  (e[b] = o),
                  X.call(e, r, v.os),
                  A &&
                    !e[f] &&
                    y &&
                    y.platform &&
                    "Unknown" != y.platform &&
                    (e[f] = y.platform
                      .replace(/chrome os/i, G)
                      .replace(/macos/i, H)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (
                  (r = typeof e === l && e.length > 500 ? Y(e, 500) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        (er.VERSION = "1.0.41"),
          (er.BROWSER = V([f, b, u])),
          (er.CPU = V([m])),
          (er.DEVICE = V([d, p, h, y, g, v, w, A, x])),
          (er.ENGINE = er.OS = V([f, b])),
          typeof t !== s
            ? (e.exports && (t = e.exports = er), (t.UAParser = er))
            : n.amdO
            ? o ===
                (r = function () {
                  return er;
                }.call(t, n, t, e)) || (e.exports = r)
            : typeof i !== s && (i.UAParser = er);
        var ei = typeof i !== s && (i.jQuery || i.Zepto);
        if (ei && !ei.ua) {
          var eo = new er();
          (ei.ua = eo.getResult()),
            (ei.ua.get = function () {
              return eo.getUA();
            }),
            (ei.ua.set = function (e) {
              eo.setUA(e);
              var t = eo.getResult();
              for (var n in t) ei.ua[n] = t[n];
            });
        }
      })("object" == typeof window ? window : this);
    },
    15885: (e, t, n) => {
      "use strict";
      n.d(t, { b4: () => i, uP: () => o });
      var r = n(11914);
      let i = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function o(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, r.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, r.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? i[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return +(t.v % 2n === 0n);
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
    },
    16871: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => i });
      var r = n(60587);
      function i(e) {
        return (0, r.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    20390: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      class r extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
    },
    20413: (e, t, n) => {
      "use strict";
      n.d(t, {
        B4: () => h,
        CQ: () => v,
        CW: () => w,
        Ei: () => d,
        F8: () => A,
        P5: () => f,
        TH: () => x,
        Vl: () => y,
        Vr: () => g,
        WM: () => p,
        WQ: () => m,
        im: () => b,
        jm: () => s,
        lD: () => o,
        qh: () => u,
        rE: () => c,
        ry: () => l,
        xn: () => a,
      });
      let r = BigInt(0x100000000 - 1),
        i = BigInt(32);
      function o(e, t = !1) {
        let n = e.length,
          a = new Uint32Array(n),
          s = new Uint32Array(n);
        for (let o = 0; o < n; o++) {
          let { h: n, l: c } = (function (e, t = !1) {
            return t
              ? { h: Number(e & r), l: Number((e >> i) & r) }
              : { h: 0 | Number((e >> i) & r), l: 0 | Number(e & r) };
          })(e[o], t);
          [a[o], s[o]] = [n, c];
        }
        return [a, s];
      }
      let a = (e, t, n) => e >>> n,
        s = (e, t, n) => (e << (32 - n)) | (t >>> n),
        c = (e, t, n) => (e >>> n) | (t << (32 - n)),
        l = (e, t, n) => (e << (32 - n)) | (t >>> n),
        u = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        d = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        f = (e, t, n) => (e << n) | (t >>> (32 - n)),
        h = (e, t, n) => (t << n) | (e >>> (32 - n)),
        p = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        b = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function m(e, t, n, r) {
        let i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
      }
      let y = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        g = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0,
        w = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        v = (e, t, n, r, i) => (t + n + r + i + ((e / 0x100000000) | 0)) | 0,
        A = (e, t, n, r, i) =>
          (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        x = (e, t, n, r, i, o) =>
          (t + n + r + i + o + ((e / 0x100000000) | 0)) | 0;
    },
    20795: (e, t, n) => {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                !(function (e, t, n) {
                  var r;
                  (t =
                    "symbol" ==
                    typeof (r = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? r
                      : String(r)) in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
                })(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      n.d(t, { U: () => a });
      var o = (e) => e,
        a = function () {
          return (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = Object.assign({}, ...t.map((e) => e.styles)),
              a = Object.keys(r),
              s = a.filter((e) => "mappings" in r[e]);
            return Object.assign(
              (e) => {
                var t = [],
                  n = {},
                  a = i({}, e),
                  c = !1;
                for (var l of s) {
                  var u = e[l];
                  if (null != u)
                    for (var d of ((c = !0), r[l].mappings))
                      (n[d] = u), null == a[d] && delete a[d];
                }
                var f = c ? i(i({}, n), a) : e;
                for (var h in f)
                  if (
                    (function () {
                      var e = f[h],
                        n = r[h];
                      try {
                        if (n.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          t.push(n.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var i = 0; i < e.length; i++) {
                            var o = e[i];
                            if (null != o) {
                              var a = n.responsiveArray[i];
                              t.push(n.values[o].conditions[a]);
                            }
                          }
                        else
                          for (var s in e) {
                            var c = e[s];
                            null != c && t.push(n.values[c].conditions[s]);
                          }
                      } catch (e) {
                        throw e;
                      }
                    })()
                  )
                    continue;
                return o(t.join(" "));
              },
              { properties: new Set(a) }
            );
          })(...arguments);
        };
    },
    20837: (e, t, n) => {
      "use strict";
      n.d(t, { secp256k1: () => eE });
      var r = n(60869),
        i = n(890);
      class o extends i.Vw {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, i.sd)(e);
          let n = (0, i.ZJ)(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            o = new Uint8Array(r);
          o.set(n.length > r ? e.create().update(n).digest() : n);
          for (let e = 0; e < o.length; e++) o[e] ^= 54;
          this.iHash.update(o), (this.oHash = e.create());
          for (let e = 0; e < o.length; e++) o[e] ^= 106;
          this.oHash.update(o), (0, i.uH)(o);
        }
        update(e) {
          return (0, i.CC)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, i.CC)(this),
            (0, i.DO)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: n,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: a,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let a = (e, t, n) => new o(e, t).update(n).digest();
      a.create = (e, t) => new o(e, t);
      let s = BigInt(0),
        c = BigInt(1);
      function l(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function u(e) {
        if (!l(e)) throw Error("Uint8Array expected");
      }
      function d(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      function f(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function h(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? s : BigInt("0x" + e);
      }
      let p =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        b = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function m(e) {
        if ((u(e), p)) return e.toHex();
        let t = "";
        for (let n = 0; n < e.length; n++) t += b[e[n]];
        return t;
      }
      let y = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function g(e) {
        return e >= y._0 && e <= y._9
          ? e - y._0
          : e >= y.A && e <= y.F
          ? e - (y.A - 10)
          : e >= y.a && e <= y.f
          ? e - (y.a - 10)
          : void 0;
      }
      function w(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (p) return Uint8Array.fromHex(e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(n);
        for (let t = 0, i = 0; t < n; t++, i += 2) {
          let n = g(e.charCodeAt(i)),
            o = g(e.charCodeAt(i + 1));
          if (void 0 === n || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i
            );
          r[t] = 16 * n + o;
        }
        return r;
      }
      function v(e) {
        return h(m(e));
      }
      function A(e) {
        return u(e), h(m(Uint8Array.from(e).reverse()));
      }
      function x(e, t) {
        return w(e.toString(16).padStart(2 * t, "0"));
      }
      function C(e, t) {
        return x(e, t).reverse();
      }
      function E(e, t, n) {
        let r;
        if ("string" == typeof t)
          try {
            r = w(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (l(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let i = r.length;
        if ("number" == typeof n && i !== n)
          throw Error(e + " of length " + n + " expected, got " + i);
        return r;
      }
      function I(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          u(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      let B = (e) => "bigint" == typeof e && s <= e;
      function P(e, t, n) {
        return B(e) && B(t) && B(n) && t <= e && e < n;
      }
      function k(e, t, n, r) {
        if (!P(t, n, r))
          throw Error(
            "expected valid " + e + ": " + n + " <= n < " + r + ", got " + t
          );
      }
      let S = (e) => (c << BigInt(e)) - c,
        O = (e) => new Uint8Array(e),
        M = (e) => Uint8Array.from(e),
        R = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || l(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function T(e, t, n = {}) {
        let r = (t, n, r) => {
          let i = R[n];
          if ("function" != typeof i) throw Error("invalid validator function");
          let o = e[t];
          if ((!r || void 0 !== o) && !i(o, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + n + ", got " + o
            );
        };
        for (let [e, n] of Object.entries(t)) r(e, n, !1);
        for (let [e, t] of Object.entries(n)) r(e, t, !0);
        return e;
      }
      function F(e) {
        let t = new WeakMap();
        return (n, ...r) => {
          let i = t.get(n);
          if (void 0 !== i) return i;
          let o = e(n, ...r);
          return t.set(n, o), o;
        };
      }
      let j = BigInt(0),
        N = BigInt(1),
        U = BigInt(2),
        D = BigInt(3),
        L = BigInt(4),
        q = BigInt(5),
        W = BigInt(8);
      function Q(e, t) {
        let n = e % t;
        return n >= j ? n : t + n;
      }
      function z(e, t, n) {
        let r = e;
        for (; t-- > j; ) (r *= r), (r %= n);
        return r;
      }
      function $(e, t) {
        if (e === j) throw Error("invert: expected non-zero number");
        if (t <= j) throw Error("invert: expected positive modulus, got " + t);
        let n = Q(e, t),
          r = t,
          i = j,
          o = N,
          a = N,
          s = j;
        for (; n !== j; ) {
          let e = r / n,
            t = r % n,
            c = i - a * e,
            l = o - s * e;
          (r = n), (n = t), (i = a), (o = s), (a = c), (s = l);
        }
        if (r !== N) throw Error("invert: does not exist");
        return Q(i, t);
      }
      function G(e, t) {
        let n = (e.ORDER + N) / L,
          r = e.pow(t, n);
        if (!e.eql(e.sqr(r), t)) throw Error("Cannot find square root");
        return r;
      }
      function H(e, t) {
        let n = (e.ORDER - q) / W,
          r = e.mul(t, U),
          i = e.pow(r, n),
          o = e.mul(t, i),
          a = e.mul(e.mul(o, U), i),
          s = e.mul(o, e.sub(a, e.ONE));
        if (!e.eql(e.sqr(s), t)) throw Error("Cannot find square root");
        return s;
      }
      let K = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function J(e, t, n = !1) {
        let r = Array(t.length).fill(n ? e.ZERO : void 0),
          i = t.reduce(
            (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
            e.ONE
          ),
          o = e.inv(i);
        return (
          t.reduceRight(
            (t, n, i) =>
              e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
            o
          ),
          r
        );
      }
      function V(e, t) {
        let n = (e.ORDER - N) / U,
          r = e.pow(t, n),
          i = e.eql(r, e.ONE),
          o = e.eql(r, e.ZERO),
          a = e.eql(r, e.neg(e.ONE));
        if (!i && !o && !a) throw Error("invalid Legendre symbol result");
        return i ? 1 : o ? 0 : -1;
      }
      function _(e, t) {
        void 0 !== t && (0, i.Fe)(t);
        let n = void 0 !== t ? t : e.toString(2).length,
          r = Math.ceil(n / 8);
        return { nBitLength: n, nByteLength: r };
      }
      function Z(e, t, n = !1, r = {}) {
        let i;
        if (e <= j) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: o, nByteLength: a } = _(e, t);
        if (a > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let s = Object.freeze({
          ORDER: e,
          isLE: n,
          BITS: o,
          BYTES: a,
          MASK: S(o),
          ZERO: j,
          ONE: N,
          create: (t) => Q(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return j <= t && t < e;
          },
          is0: (e) => e === j,
          isOdd: (e) => (e & N) === N,
          neg: (t) => Q(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => Q(t * t, e),
          add: (t, n) => Q(t + n, e),
          sub: (t, n) => Q(t - n, e),
          mul: (t, n) => Q(t * n, e),
          pow: (e, t) =>
            (function (e, t, n) {
              if (n < j) throw Error("invalid exponent, negatives unsupported");
              if (n === j) return e.ONE;
              if (n === N) return t;
              let r = e.ONE,
                i = t;
              for (; n > j; )
                n & N && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= N);
              return r;
            })(s, e, t),
          div: (t, n) => Q(t * $(n, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => $(t, e),
          sqrt:
            r.sqrt ||
            ((t) => (
              i ||
                (i =
                  e % L === D
                    ? G
                    : e % W === q
                    ? H
                    : (function (e) {
                        if (e < BigInt(3))
                          throw Error("sqrt is not defined for small field");
                        let t = e - N,
                          n = 0;
                        for (; t % U === j; ) (t /= U), n++;
                        let r = U,
                          i = Z(e);
                        for (; 1 === V(i, r); )
                          if (r++ > 1e3)
                            throw Error(
                              "Cannot find square root: probably non-prime P"
                            );
                        if (1 === n) return G;
                        let o = i.pow(r, t),
                          a = (t + N) / U;
                        return function (e, r) {
                          if (e.is0(r)) return r;
                          if (1 !== V(e, r))
                            throw Error("Cannot find square root");
                          let i = n,
                            s = e.mul(e.ONE, o),
                            c = e.pow(r, t),
                            l = e.pow(r, a);
                          for (; !e.eql(c, e.ONE); ) {
                            if (e.is0(c)) return e.ZERO;
                            let t = 1,
                              n = e.sqr(c);
                            for (; !e.eql(n, e.ONE); )
                              if ((t++, (n = e.sqr(n)), t === i))
                                throw Error("Cannot find square root");
                            let r = N << BigInt(i - t - 1),
                              o = e.pow(s, r);
                            (i = t),
                              (s = e.sqr(o)),
                              (c = e.mul(c, s)),
                              (l = e.mul(l, o));
                          }
                          return l;
                        };
                      })(e)),
              i(s, t)
            )),
          toBytes: (e) => (n ? C(e, a) : x(e, a)),
          fromBytes: (e) => {
            if (e.length !== a)
              throw Error(
                "Field.fromBytes: expected " + a + " bytes, got " + e.length
              );
            return n ? A(e) : v(e);
          },
          invertBatch: (e) => J(s, e),
          cmov: (e, t, n) => (n ? t : e),
        });
        return Object.freeze(s);
      }
      function Y(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function X(e) {
        let t = Y(e);
        return t + Math.ceil(t / 2);
      }
      let ee = BigInt(0),
        et = BigInt(1);
      function en(e, t) {
        let n = t.negate();
        return e ? n : t;
      }
      function er(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function ei(e, t) {
        er(e, t);
        let n = Math.ceil(t / e) + 1,
          r = 2 ** (e - 1),
          i = 2 ** e;
        return {
          windows: n,
          windowSize: r,
          mask: S(e),
          maxNumber: i,
          shiftBy: BigInt(e),
        };
      }
      function eo(e, t, n) {
        let { windowSize: r, mask: i, maxNumber: o, shiftBy: a } = n,
          s = Number(e & i),
          c = e >> a;
        s > r && ((s -= o), (c += et));
        let l = t * r,
          u = l + Math.abs(s) - 1,
          d = 0 === s;
        return {
          nextN: c,
          offset: u,
          isZero: d,
          isNeg: s < 0,
          isNegF: t % 2 != 0,
          offsetF: l,
        };
      }
      let ea = new WeakMap(),
        es = new WeakMap();
      function ec(e) {
        return es.get(e) || 1;
      }
      function el(e) {
        return (
          T(
            e.Fp,
            K.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          T(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ..._(e.n, e.nBitLength), ...e, ...{ p: e.Fp.ORDER } })
        );
      }
      function eu(e) {
        void 0 !== e.lowS && d("lowS", e.lowS),
          void 0 !== e.prehash && d("prehash", e.prehash);
      }
      class ed extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let ef = {
          Err: ed,
          _tlv: {
            encode: (e, t) => {
              let { Err: n } = ef;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (1 & t.length) throw new n("tlv.encode: unpadded data");
              let r = t.length / 2,
                i = f(r);
              if ((i.length / 2) & 128)
                throw new n("tlv.encode: long form length too big");
              let o = r > 127 ? f((i.length / 2) | 128) : "";
              return f(e) + o + i + t;
            },
            decode(e, t) {
              let { Err: n } = ef,
                r = 0;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (t.length < 2 || t[r++] !== e)
                throw new n("tlv.decode: wrong tlv");
              let i = t[r++],
                o = 0;
              if (128 & i) {
                let e = 127 & i;
                if (!e)
                  throw new n(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new n("tlv.decode(long): byte length is too big");
                let a = t.subarray(r, r + e);
                if (a.length !== e)
                  throw new n("tlv.decode: length bytes not complete");
                if (0 === a[0])
                  throw new n("tlv.decode(long): zero leftmost byte");
                for (let e of a) o = (o << 8) | e;
                if (((r += e), o < 128))
                  throw new n("tlv.decode(long): not minimal encoding");
              } else o = i;
              let a = t.subarray(r, r + o);
              if (a.length !== o) throw new n("tlv.decode: wrong value length");
              return { v: a, l: t.subarray(r + o) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = ef;
              if (e < eh)
                throw new t("integer: negative integers are not allowed");
              let n = f(e);
              if (
                (8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return n;
            },
            decode(e) {
              let { Err: t } = ef;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return v(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: n, _tlv: r } = ef,
              i = E("signature", e),
              { v: o, l: a } = r.decode(48, i);
            if (a.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: s, l: c } = r.decode(2, o),
              { v: l, l: u } = r.decode(2, c);
            if (u.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: n.decode(s), s: n.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: n } = ef,
              r = t.encode(2, n.encode(e.r)),
              i = t.encode(2, n.encode(e.s));
            return t.encode(48, r + i);
          },
        },
        eh = BigInt(0),
        ep = BigInt(1),
        eb = (BigInt(2), BigInt(3)),
        em = BigInt(4),
        ey = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        eg = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        ew = BigInt(0),
        ev = BigInt(1),
        eA = BigInt(2),
        ex = (e, t) => (e + t / eA) / t,
        eC = Z(ey, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              n = BigInt(6),
              r = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              a = BigInt(44),
              s = BigInt(88),
              c = (e * e * e) % ey,
              l = (c * c * e) % ey,
              u = (z(l, t, ey) * l) % ey,
              d = (z(u, t, ey) * l) % ey,
              f = (z(d, eA, ey) * c) % ey,
              h = (z(f, r, ey) * f) % ey,
              p = (z(h, i, ey) * h) % ey,
              b = (z(p, a, ey) * p) % ey,
              m = (z(b, s, ey) * b) % ey,
              y = (z(m, a, ey) * p) % ey,
              g = (z(y, t, ey) * l) % ey,
              w = (z(g, o, ey) * h) % ey,
              v = (z(w, n, ey) * c) % ey,
              A = z(v, eA, ey);
            if (!eC.eql(eC.sqr(A), e)) throw Error("Cannot find square root");
            return A;
          },
        }),
        eE = (function (e, t) {
          let n = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = el(e);
                  return (
                    T(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: n, n: r, nByteLength: i, nBitLength: o } = t,
                a = n.BYTES + 1,
                u = 2 * n.BYTES + 1;
              function f(e) {
                return Q(e, r);
              }
              let {
                  ProjectivePoint: h,
                  normPrivateKeyToScalar: p,
                  weierstrassEquation: b,
                  isWithinCurveOrder: y,
                } = (function (e) {
                  var t;
                  let n = (function (e) {
                      let t = el(e);
                      T(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowInfinityPoint: "boolean",
                          allowedPrivateKeyLengths: "array",
                          clearCofactor: "function",
                          fromBytes: "function",
                          isTorsionFree: "function",
                          toBytes: "function",
                          wrapPrivateKey: "boolean",
                        }
                      );
                      let { endo: n, Fp: r, a: i } = t;
                      if (n) {
                        if (!r.eql(i, r.ZERO))
                          throw Error("invalid endo: CURVE.a must be 0");
                        if (
                          "object" != typeof n ||
                          "bigint" != typeof n.beta ||
                          "function" != typeof n.splitScalar
                        )
                          throw Error(
                            'invalid endo: expected "beta": bigint and "splitScalar": function'
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = n,
                    i = Z(n.n, n.nBitLength),
                    o =
                      n.toBytes ||
                      ((e, t, n) => {
                        let i = t.toAffine();
                        return I(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    a =
                      n.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function u(e) {
                    let { a: t, b: i } = n,
                      o = r.sqr(e),
                      a = r.mul(o, e);
                    return r.add(r.add(a, r.mul(e, t)), i);
                  }
                  function f(e, t) {
                    let n = r.sqr(t),
                      i = u(e);
                    return r.eql(n, i);
                  }
                  if (!f(n.Gx, n.Gy))
                    throw Error("bad curve params: generator point");
                  let h = r.mul(r.pow(n.a, eb), em),
                    p = r.mul(r.sqr(n.b), BigInt(27));
                  if (r.is0(r.add(h, p)))
                    throw Error("bad curve params: a or b");
                  function b(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: r,
                        nByteLength: i,
                        wrapPrivateKey: o,
                        n: a,
                      } = n;
                    if (r && "bigint" != typeof e) {
                      if (
                        (l(e) && (e = m(e)),
                        "string" != typeof e || !r.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      t = "bigint" == typeof e ? e : v(E("private key", e, i));
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return o && (t = Q(t, a)), k("private key", t, ep, a), t;
                  }
                  function y(e) {
                    if (!(e instanceof A))
                      throw Error("ProjectivePoint expected");
                  }
                  let g = F((e, t) => {
                      let { px: n, py: i, pz: o } = e;
                      if (r.eql(o, r.ONE)) return { x: n, y: i };
                      let a = e.is0();
                      null == t && (t = a ? r.ONE : r.inv(o));
                      let s = r.mul(n, t),
                        c = r.mul(i, t),
                        l = r.mul(o, t);
                      if (a) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: s, y: c };
                    }),
                    w = F((e) => {
                      if (e.is0()) {
                        if (n.allowInfinityPoint && !r.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: i } = e.toAffine();
                      if (!r.isValid(t) || !r.isValid(i))
                        throw Error("bad point: x or y not FE");
                      if (!f(t, i))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class A {
                    constructor(e, t, n) {
                      if (null == e || !r.isValid(e)) throw Error("x required");
                      if (null == t || !r.isValid(t) || r.is0(t))
                        throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                      (this.px = e),
                        (this.py = t),
                        (this.pz = n),
                        Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: n } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (e instanceof A)
                        throw Error("projective point not allowed");
                      let i = (e) => r.eql(e, r.ZERO);
                      return i(t) && i(n) ? A.ZERO : new A(t, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = J(
                        r,
                        e.map((e) => e.pz)
                      );
                      return e
                        .map((e, n) => e.toAffine(t[n]))
                        .map(A.fromAffine);
                    }
                    static fromHex(e) {
                      let t = A.fromAffine(a(E("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return A.BASE.multiply(b(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, n, r) {
                        if (!Array.isArray(n)) throw Error("array expected");
                        n.forEach((t, n) => {
                          if (!(t instanceof e))
                            throw Error("invalid point at index " + n);
                        });
                        if (!Array.isArray(r))
                          throw Error("array of scalars expected");
                        r.forEach((e, n) => {
                          if (!t.isValid(e))
                            throw Error("invalid scalar at index " + n);
                        });
                        let i = n.length,
                          o = r.length;
                        if (i !== o)
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let a = e.ZERO,
                          l = (function (e) {
                            let t;
                            for (t = 0; e > s; e >>= c, t += 1);
                            return t;
                          })(BigInt(i)),
                          u = 1;
                        l > 12
                          ? (u = l - 3)
                          : l > 4
                          ? (u = l - 2)
                          : l > 0 && (u = 2);
                        let d = S(u),
                          f = Array(Number(d) + 1).fill(a),
                          h = Math.floor((t.BITS - 1) / u) * u,
                          p = a;
                        for (let e = h; e >= 0; e -= u) {
                          f.fill(a);
                          for (let t = 0; t < o; t++) {
                            let i = Number((r[t] >> BigInt(e)) & d);
                            f[i] = f[i].add(n[t]);
                          }
                          let t = a;
                          for (let e = f.length - 1, n = a; e > 0; e--)
                            (n = n.add(f[e])), (t = t.add(n));
                          if (((p = p.add(t)), 0 !== e))
                            for (let e = 0; e < u; e++) p = p.double();
                        }
                        return p;
                      })(A, i, e, t);
                    }
                    _setWindowSize(e) {
                      B.setWindowSize(this, e);
                    }
                    assertValidity() {
                      w(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      y(e);
                      let { px: t, py: n, pz: i } = this,
                        { px: o, py: a, pz: s } = e,
                        c = r.eql(r.mul(t, s), r.mul(o, i)),
                        l = r.eql(r.mul(n, s), r.mul(a, i));
                      return c && l;
                    }
                    negate() {
                      return new A(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = n,
                        i = r.mul(t, eb),
                        { px: o, py: a, pz: s } = this,
                        c = r.ZERO,
                        l = r.ZERO,
                        u = r.ZERO,
                        d = r.mul(o, o),
                        f = r.mul(a, a),
                        h = r.mul(s, s),
                        p = r.mul(o, a);
                      return (
                        (p = r.add(p, p)),
                        (u = r.mul(o, s)),
                        (u = r.add(u, u)),
                        (c = r.mul(e, u)),
                        (l = r.mul(i, h)),
                        (l = r.add(c, l)),
                        (c = r.sub(f, l)),
                        (l = r.add(f, l)),
                        (l = r.mul(c, l)),
                        (c = r.mul(p, c)),
                        (u = r.mul(i, u)),
                        (h = r.mul(e, h)),
                        (p = r.sub(d, h)),
                        (p = r.mul(e, p)),
                        (p = r.add(p, u)),
                        (u = r.add(d, d)),
                        (d = r.add(u, d)),
                        (d = r.add(d, h)),
                        (d = r.mul(d, p)),
                        (l = r.add(l, d)),
                        (h = r.mul(a, s)),
                        (h = r.add(h, h)),
                        (d = r.mul(h, p)),
                        (c = r.sub(c, d)),
                        (u = r.mul(h, f)),
                        (u = r.add(u, u)),
                        new A(c, l, (u = r.add(u, u)))
                      );
                    }
                    add(e) {
                      y(e);
                      let { px: t, py: i, pz: o } = this,
                        { px: a, py: s, pz: c } = e,
                        l = r.ZERO,
                        u = r.ZERO,
                        d = r.ZERO,
                        f = n.a,
                        h = r.mul(n.b, eb),
                        p = r.mul(t, a),
                        b = r.mul(i, s),
                        m = r.mul(o, c),
                        g = r.add(t, i),
                        w = r.add(a, s);
                      (g = r.mul(g, w)),
                        (w = r.add(p, b)),
                        (g = r.sub(g, w)),
                        (w = r.add(t, o));
                      let v = r.add(a, c);
                      return (
                        (w = r.mul(w, v)),
                        (v = r.add(p, m)),
                        (w = r.sub(w, v)),
                        (v = r.add(i, o)),
                        (l = r.add(s, c)),
                        (v = r.mul(v, l)),
                        (l = r.add(b, m)),
                        (v = r.sub(v, l)),
                        (d = r.mul(f, w)),
                        (l = r.mul(h, m)),
                        (d = r.add(l, d)),
                        (l = r.sub(b, d)),
                        (d = r.add(b, d)),
                        (u = r.mul(l, d)),
                        (b = r.add(p, p)),
                        (b = r.add(b, p)),
                        (m = r.mul(f, m)),
                        (w = r.mul(h, w)),
                        (b = r.add(b, m)),
                        (m = r.sub(p, m)),
                        (m = r.mul(f, m)),
                        (w = r.add(w, m)),
                        (p = r.mul(b, w)),
                        (u = r.add(u, p)),
                        (p = r.mul(v, w)),
                        (l = r.mul(g, l)),
                        (l = r.sub(l, p)),
                        (p = r.mul(g, b)),
                        (d = r.mul(v, d)),
                        new A(l, u, (d = r.add(d, p)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(A.ZERO);
                    }
                    wNAF(e) {
                      return B.wNAFCached(this, e, A.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: i } = n;
                      k("scalar", e, eh, i);
                      let o = A.ZERO;
                      if (e === eh) return o;
                      if (this.is0() || e === ep) return this;
                      if (!t || B.hasPrecomputes(this))
                        return B.wNAFCachedUnsafe(this, e, A.normalizeZ);
                      let {
                          k1neg: a,
                          k1: s,
                          k2neg: c,
                          k2: l,
                        } = t.splitScalar(e),
                        u = o,
                        d = o,
                        f = this;
                      for (; s > eh || l > eh; )
                        s & ep && (u = u.add(f)),
                          l & ep && (d = d.add(f)),
                          (f = f.double()),
                          (s >>= ep),
                          (l >>= ep);
                      return (
                        a && (u = u.negate()),
                        c && (d = d.negate()),
                        (d = new A(r.mul(d.px, t.beta), d.py, d.pz)),
                        u.add(d)
                      );
                    }
                    multiply(e) {
                      let t,
                        i,
                        { endo: o, n: a } = n;
                      if ((k("scalar", e, ep, a), o)) {
                        let {
                            k1neg: n,
                            k1: a,
                            k2neg: s,
                            k2: c,
                          } = o.splitScalar(e),
                          { p: l, f: u } = this.wNAF(a),
                          { p: d, f: f } = this.wNAF(c);
                        (l = B.constTimeNegate(n, l)),
                          (d = B.constTimeNegate(s, d)),
                          (d = new A(r.mul(d.px, o.beta), d.py, d.pz)),
                          (t = l.add(d)),
                          (i = u.add(f));
                      } else {
                        let { p: n, f: r } = this.wNAF(e);
                        (t = n), (i = r);
                      }
                      return A.normalizeZ([t, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, n) {
                      let r = A.BASE,
                        i = (e, t) =>
                          t !== eh && t !== ep && e.equals(r)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        o = i(this, t).add(i(e, n));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(e) {
                      return g(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = n;
                      if (e === ep) return !0;
                      if (t) return t(A, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = n;
                      return e === ep
                        ? this
                        : t
                        ? t(A, this)
                        : this.multiplyUnsafe(n.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        d("isCompressed", e),
                        this.assertValidity(),
                        o(A, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return d("isCompressed", e), m(this.toRawBytes(e));
                    }
                  }
                  (A.BASE = new A(n.Gx, n.Gy, r.ONE)),
                    (A.ZERO = new A(r.ZERO, r.ONE, r.ZERO));
                  let { endo: x, nBitLength: C } = n,
                    B =
                      ((t = x ? Math.ceil(C / 2) : C),
                      {
                        constTimeNegate: en,
                        hasPrecomputes: (e) => 1 !== ec(e),
                        unsafeLadder(e, t, n = A.ZERO) {
                          let r = e;
                          for (; t > ee; )
                            t & et && (n = n.add(r)),
                              (r = r.double()),
                              (t >>= et);
                          return n;
                        },
                        precomputeWindow(e, n) {
                          let { windows: r, windowSize: i } = ei(n, t),
                            o = [],
                            a = e,
                            s = a;
                          for (let e = 0; e < r; e++) {
                            (s = a), o.push(s);
                            for (let e = 1; e < i; e++)
                              (s = s.add(a)), o.push(s);
                            a = s.double();
                          }
                          return o;
                        },
                        wNAF(e, n, r) {
                          let i = A.ZERO,
                            o = A.BASE,
                            a = ei(e, t);
                          for (let e = 0; e < a.windows; e++) {
                            let {
                              nextN: t,
                              offset: s,
                              isZero: c,
                              isNeg: l,
                              isNegF: u,
                              offsetF: d,
                            } = eo(r, e, a);
                            (r = t),
                              c
                                ? (o = o.add(en(u, n[d])))
                                : (i = i.add(en(l, n[s])));
                          }
                          return { p: i, f: o };
                        },
                        wNAFUnsafe(e, n, r, i = A.ZERO) {
                          let o = ei(e, t);
                          for (let e = 0; e < o.windows && r !== ee; e++) {
                            let {
                              nextN: t,
                              offset: a,
                              isZero: s,
                              isNeg: c,
                            } = eo(r, e, o);
                            if (((r = t), !s)) {
                              let e = n[a];
                              i = i.add(c ? e.negate() : e);
                            }
                          }
                          return i;
                        },
                        getPrecomputes(e, t, n) {
                          let r = ea.get(t);
                          return (
                            r ||
                              ((r = this.precomputeWindow(t, e)),
                              1 !== e && ea.set(t, n(r))),
                            r
                          );
                        },
                        wNAFCached(e, t, n) {
                          let r = ec(e);
                          return this.wNAF(r, this.getPrecomputes(r, e, n), t);
                        },
                        wNAFCachedUnsafe(e, t, n, r) {
                          let i = ec(e);
                          return 1 === i
                            ? this.unsafeLadder(e, t, r)
                            : this.wNAFUnsafe(
                                i,
                                this.getPrecomputes(i, e, n),
                                t,
                                r
                              );
                        },
                        setWindowSize(e, n) {
                          er(n, t), es.set(e, n), ea.delete(e);
                        },
                      });
                  return {
                    CURVE: n,
                    ProjectivePoint: A,
                    normPrivateKeyToScalar: b,
                    weierstrassEquation: u,
                    isWithinCurveOrder: function (e) {
                      return P(e, ep, n.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, r) {
                    let i = t.toAffine(),
                      o = n.toBytes(i.x);
                    return (d("isCompressed", r), r)
                      ? I(Uint8Array.from([t.hasEvenY() ? 2 : 3]), o)
                      : I(Uint8Array.from([4]), o, n.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      i = e.subarray(1);
                    if (t === a && (2 === r || 3 === r)) {
                      let e,
                        t = v(i);
                      if (!P(t, ep, n.ORDER))
                        throw Error("Point is not on curve");
                      let o = b(t);
                      try {
                        e = n.sqrt(o);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & r) == 1) != ((e & ep) === ep) && (e = n.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === u && 4 === r)
                      return {
                        x: n.fromBytes(i.subarray(0, n.BYTES)),
                        y: n.fromBytes(i.subarray(n.BYTES, 2 * n.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        a +
                        ", or uncompressed " +
                        u +
                        ", got " +
                        t
                    );
                  },
                }),
                g = (e, t, n) => v(e.slice(t, n));
              class B {
                constructor(e, t, n) {
                  k("r", e, ep, r),
                    k("s", t, ep, r),
                    (this.r = e),
                    (this.s = t),
                    null != n && (this.recovery = n),
                    Object.freeze(this);
                }
                static fromCompact(e) {
                  return new B(
                    g((e = E("compactSignature", e, 2 * i)), 0, i),
                    g(e, i, 2 * i)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: n } = ef.toSig(E("DER", e));
                  return new B(t, n);
                }
                assertValidity() {}
                addRecoveryBit(e) {
                  return new B(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s: o, recovery: a } = this,
                    s = U(E("msgHash", e));
                  if (null == a || ![0, 1, 2, 3].includes(a))
                    throw Error("recovery id invalid");
                  let c = 2 === a || 3 === a ? i + t.n : i;
                  if (c >= n.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let l = (1 & a) == 0 ? "02" : "03",
                    u = h.fromHex(l + m(x(c, n.BYTES))),
                    d = $(c, r),
                    p = f(-s * d),
                    b = f(o * d),
                    y = h.BASE.multiplyAndAddUnsafe(u, p, b);
                  if (!y) throw Error("point at infinify");
                  return y.assertValidity(), y;
                }
                hasHighS() {
                  return this.s > r >> ep;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new B(this.r, f(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return w(this.toDERHex());
                }
                toDERHex() {
                  return ef.hexFromSig(this);
                }
                toCompactRawBytes() {
                  return w(this.toCompactHex());
                }
                toCompactHex() {
                  return m(x(this.r, i)) + m(x(this.s, i));
                }
              }
              function R(e) {
                if ("bigint" == typeof e) return !1;
                if (e instanceof h) return !0;
                let r = E("key", e).length,
                  o = n.BYTES,
                  a = o + 1;
                if (!t.allowedPrivateKeyLengths && i !== a)
                  return r === a || r === 2 * o + 1;
              }
              let j =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let t = v(e),
                      n = 8 * e.length - o;
                    return n > 0 ? t >> BigInt(n) : t;
                  },
                U =
                  t.bits2int_modN ||
                  function (e) {
                    return f(j(e));
                  },
                D = S(o);
              function L(e) {
                return k("num < 2^" + o, e, eh, D), x(e, i);
              }
              let q = { lowS: t.lowS, prehash: !1 },
                W = { lowS: t.lowS, prehash: !1 };
              return (
                h.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return h.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, n = !0) {
                    if (!0 === R(e))
                      throw Error("first arg must be private key");
                    if (!1 === R(t))
                      throw Error("second arg must be public key");
                    return h.fromHex(t).multiply(p(e)).toRawBytes(n);
                  },
                  sign: function (e, i, o = q) {
                    let { seed: a, k2sig: s } = (function (e, i, o = q) {
                      if (["recovered", "canonical"].some((e) => e in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: a, randomBytes: s } = t,
                        { lowS: c, prehash: l, extraEntropy: u } = o;
                      null == c && (c = !0),
                        (e = E("msgHash", e)),
                        eu(o),
                        l && (e = E("prehashed msgHash", a(e)));
                      let d = U(e),
                        b = p(i),
                        m = [L(b), L(d)];
                      if (null != u && !1 !== u) {
                        let e = !0 === u ? s(n.BYTES) : u;
                        m.push(E("extraEntropy", e));
                      }
                      return {
                        seed: I(...m),
                        k2sig: function (e) {
                          var t;
                          let n = j(e);
                          if (!y(n)) return;
                          let i = $(n, r),
                            o = h.BASE.multiply(n).toAffine(),
                            a = f(o.x);
                          if (a === eh) return;
                          let s = f(i * f(d + a * b));
                          if (s === eh) return;
                          let l = (2 * (o.x !== a)) | Number(o.y & ep),
                            u = s;
                          return (
                            c &&
                              s > r >> ep &&
                              ((u = (t = s) > r >> ep ? f(-t) : t), (l ^= 1)),
                            new B(a, u, l)
                          );
                        },
                      };
                    })(e, i, o);
                    return (function (e, t, n) {
                      if ("number" != typeof e || e < 2)
                        throw Error("hashLen must be a number");
                      if ("number" != typeof t || t < 2)
                        throw Error("qByteLen must be a number");
                      if ("function" != typeof n)
                        throw Error("hmacFn must be a function");
                      let r = O(e),
                        i = O(e),
                        o = 0,
                        a = () => {
                          r.fill(1), i.fill(0), (o = 0);
                        },
                        s = (...e) => n(i, r, ...e),
                        c = (e = O(0)) => {
                          (i = s(M([0]), e)),
                            (r = s()),
                            0 !== e.length && ((i = s(M([1]), e)), (r = s()));
                        },
                        l = () => {
                          if (o++ >= 1e3)
                            throw Error("drbg: tried 1000 values");
                          let e = 0,
                            n = [];
                          for (; e < t; ) {
                            let t = (r = s()).slice();
                            n.push(t), (e += r.length);
                          }
                          return I(...n);
                        };
                      return (e, t) => {
                        let n;
                        for (a(), c(e); !(n = t(l())); ) c();
                        return a(), n;
                      };
                    })(
                      t.hash.outputLen,
                      t.nByteLength,
                      t.hmac
                    )(a, s);
                  },
                  verify: function (e, n, i, o = W) {
                    let a, s;
                    (n = E("msgHash", n)), (i = E("publicKey", i));
                    let { lowS: c, prehash: u, format: d } = o;
                    if ((eu(o), "strict" in o))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== d && "compact" !== d && "der" !== d)
                      throw Error("format must be compact or der");
                    let p = "string" == typeof e || l(e),
                      b =
                        !p &&
                        !d &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!p && !b)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((b && (s = new B(e.r, e.s)), p)) {
                        try {
                          "compact" !== d && (s = B.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof ef.Err)) throw e;
                        }
                        s || "der" === d || (s = B.fromCompact(e));
                      }
                      a = h.fromHex(i);
                    } catch (e) {
                      return !1;
                    }
                    if (!s || (c && s.hasHighS())) return !1;
                    u && (n = t.hash(n));
                    let { r: m, s: y } = s,
                      g = U(n),
                      w = $(y, r),
                      v = f(g * w),
                      A = f(m * w),
                      x = h.BASE.multiplyAndAddUnsafe(a, v, A)?.toAffine();
                    return !!x && f(x.x) === m;
                  },
                  ProjectivePoint: h,
                  Signature: B,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return p(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: p,
                    randomPrivateKey: () => {
                      let e = X(t.n);
                      return (function (e, t, n = !1) {
                        let r = e.length,
                          i = Y(t),
                          o = X(t);
                        if (r < 16 || r < o || r > 1024)
                          throw Error(
                            "expected " + o + "-1024 bytes of input, got " + r
                          );
                        let a = Q(n ? A(e) : v(e), t - N) + N;
                        return n ? C(a, i) : x(a, i);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = h.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              ...{
                hash: t,
                hmac: (e, ...n) => a(t, e, (0, i.Id)(...n)),
                randomBytes: i.po,
              },
            });
          return { ...n(t), create: n };
        })(
          {
            a: ew,
            b: BigInt(7),
            Fp: eC,
            n: eg,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  n = -ev * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = ex(t * e, eg),
                  a = ex(-n * e, eg),
                  s = Q(e - o * t - a * r, eg),
                  c = Q(-o * n - a * t, eg),
                  l = s > i,
                  u = c > i;
                if ((l && (s = eg - s), u && (c = eg - c), s > i || c > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: l, k1: s, k2neg: u, k2: c };
              },
            },
          },
          r.sc
        );
    },
    21681: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let i = e[n];
        return "function" == typeof i ? i : (n) => t(e, n);
      }
      n.d(t, { T: () => r });
    },
    22454: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => v });
      var r = n(56195),
        i = n(74268),
        o = n(31668),
        a = n(38445),
        s = n(83515),
        c = n(34049),
        l = n(37126),
        u = class extends a.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#e = e),
              (this.#t = null),
              (this.#n = (0, s.T)()),
              this.bindMethods(),
              this.setOptions(t);
          }
          #e;
          #r = void 0;
          #i = void 0;
          #o = void 0;
          #a;
          #s;
          #n;
          #t;
          #c;
          #l;
          #u;
          #d;
          #f;
          #h;
          #p = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#r.addObserver(this),
              d(this.#r, this.options) ? this.#b() : this.updateResult(),
              this.#m());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return f(this.#r, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return f(this.#r, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#y(),
              this.#g(),
              this.#r.removeObserver(this);
          }
          setOptions(e) {
            let t = this.options,
              n = this.#r;
            if (
              ((this.options = this.#e.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, c.Eh)(this.options.enabled, this.#r))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#w(),
              this.#r.setOptions(this.options),
              t._defaulted &&
                !(0, c.f8)(this.options, t) &&
                this.#e
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#r,
                    observer: this,
                  });
            let r = this.hasListeners();
            r && h(this.#r, n, this.options, t) && this.#b(),
              this.updateResult(),
              r &&
                (this.#r !== n ||
                  (0, c.Eh)(this.options.enabled, this.#r) !==
                    (0, c.Eh)(t.enabled, this.#r) ||
                  (0, c.d2)(this.options.staleTime, this.#r) !==
                    (0, c.d2)(t.staleTime, this.#r)) &&
                this.#v();
            let i = this.#A();
            r &&
              (this.#r !== n ||
                (0, c.Eh)(this.options.enabled, this.#r) !==
                  (0, c.Eh)(t.enabled, this.#r) ||
                i !== this.#h) &&
              this.#x(i);
          }
          getOptimisticResult(e) {
            var t, n;
            let r = this.#e.getQueryCache().build(this.#e, e),
              i = this.createResult(r, e);
            return (
              (t = this),
              (n = i),
              (0, c.f8)(t.getCurrentResult(), n) ||
                ((this.#o = i),
                (this.#s = this.options),
                (this.#a = this.#r.state)),
              i
            );
          }
          getCurrentResult() {
            return this.#o;
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, n) => (
                this.trackProp(n),
                t?.(n),
                "promise" !== n ||
                  this.options.experimental_prefetchInRender ||
                  "pending" !== this.#n.status ||
                  this.#n.reject(
                    Error(
                      "experimental_prefetchInRender feature flag is not enabled"
                    )
                  ),
                Reflect.get(e, n)
              ),
            });
          }
          trackProp(e) {
            this.#p.add(e);
          }
          getCurrentQuery() {
            return this.#r;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#e.defaultQueryOptions(e),
              n = this.#e.getQueryCache().build(this.#e, t);
            return n.fetch().then(() => this.createResult(n, t));
          }
          fetch(e) {
            return this.#b({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#o)
            );
          }
          #b(e) {
            this.#w();
            let t = this.#r.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(c.lQ)), t;
          }
          #v() {
            this.#y();
            let e = (0, c.d2)(this.options.staleTime, this.#r);
            if (c.S$ || this.#o.isStale || !(0, c.gn)(e)) return;
            let t = (0, c.j3)(this.#o.dataUpdatedAt, e);
            this.#d = l.zs.setTimeout(() => {
              this.#o.isStale || this.updateResult();
            }, t + 1);
          }
          #A() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#r)
                : this.options.refetchInterval) ?? !1
            );
          }
          #x(e) {
            this.#g(),
              (this.#h = e),
              !c.S$ &&
                !1 !== (0, c.Eh)(this.options.enabled, this.#r) &&
                (0, c.gn)(this.#h) &&
                0 !== this.#h &&
                (this.#f = l.zs.setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    r.m.isFocused()) &&
                    this.#b();
                }, this.#h));
          }
          #m() {
            this.#v(), this.#x(this.#A());
          }
          #y() {
            this.#d && (l.zs.clearTimeout(this.#d), (this.#d = void 0));
          }
          #g() {
            this.#f && (l.zs.clearInterval(this.#f), (this.#f = void 0));
          }
          createResult(e, t) {
            let n,
              r = this.#r,
              i = this.options,
              a = this.#o,
              l = this.#a,
              u = this.#s,
              f = e !== r ? e.state : this.#i,
              { state: b } = e,
              m = { ...b },
              y = !1;
            if (t._optimisticResults) {
              let n = this.hasListeners(),
                a = !n && d(e, t),
                s = n && h(e, r, t, i);
              (a || s) && (m = { ...m, ...(0, o.k)(b.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (m.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: w, status: v } = m;
            n = m.data;
            let A = !1;
            if (
              void 0 !== t.placeholderData &&
              void 0 === n &&
              "pending" === v
            ) {
              let e;
              a?.isPlaceholderData && t.placeholderData === u?.placeholderData
                ? ((e = a.data), (A = !0))
                : (e =
                    "function" == typeof t.placeholderData
                      ? t.placeholderData(this.#u?.state.data, this.#u)
                      : t.placeholderData),
                void 0 !== e &&
                  ((v = "success"), (n = (0, c.pl)(a?.data, e, t)), (y = !0));
            }
            if (t.select && void 0 !== n && !A)
              if (a && n === l?.data && t.select === this.#c) n = this.#l;
              else
                try {
                  (this.#c = t.select),
                    (n = t.select(n)),
                    (n = (0, c.pl)(a?.data, n, t)),
                    (this.#l = n),
                    (this.#t = null);
                } catch (e) {
                  this.#t = e;
                }
            this.#t &&
              ((g = this.#t), (n = this.#l), (w = Date.now()), (v = "error"));
            let x = "fetching" === m.fetchStatus,
              C = "pending" === v,
              E = "error" === v,
              I = C && x,
              B = void 0 !== n,
              P = {
                status: v,
                fetchStatus: m.fetchStatus,
                isPending: C,
                isSuccess: "success" === v,
                isError: E,
                isInitialLoading: I,
                isLoading: I,
                data: n,
                dataUpdatedAt: m.dataUpdatedAt,
                error: g,
                errorUpdatedAt: w,
                failureCount: m.fetchFailureCount,
                failureReason: m.fetchFailureReason,
                errorUpdateCount: m.errorUpdateCount,
                isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
                isFetchedAfterMount:
                  m.dataUpdateCount > f.dataUpdateCount ||
                  m.errorUpdateCount > f.errorUpdateCount,
                isFetching: x,
                isRefetching: x && !C,
                isLoadingError: E && !B,
                isPaused: "paused" === m.fetchStatus,
                isPlaceholderData: y,
                isRefetchError: E && B,
                isStale: p(e, t),
                refetch: this.refetch,
                promise: this.#n,
                isEnabled: !1 !== (0, c.Eh)(t.enabled, e),
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === P.status
                    ? e.reject(P.error)
                    : void 0 !== P.data && e.resolve(P.data);
                },
                n = () => {
                  t((this.#n = P.promise = (0, s.T)()));
                },
                i = this.#n;
              switch (i.status) {
                case "pending":
                  e.queryHash === r.queryHash && t(i);
                  break;
                case "fulfilled":
                  ("error" === P.status || P.data !== i.value) && n();
                  break;
                case "rejected":
                  ("error" !== P.status || P.error !== i.reason) && n();
              }
            }
            return P;
          }
          updateResult() {
            let e = this.#o,
              t = this.createResult(this.#r, this.options);
            if (
              ((this.#a = this.#r.state),
              (this.#s = this.options),
              void 0 !== this.#a.data && (this.#u = this.#r),
              (0, c.f8)(t, e))
            )
              return;
            this.#o = t;
            let n = () => {
              if (!e) return !0;
              let { notifyOnChangeProps: t } = this.options,
                n = "function" == typeof t ? t() : t;
              if ("all" === n || (!n && !this.#p.size)) return !0;
              let r = new Set(n ?? this.#p);
              return (
                this.options.throwOnError && r.add("error"),
                Object.keys(this.#o).some(
                  (t) => this.#o[t] !== e[t] && r.has(t)
                )
              );
            };
            this.#C({ listeners: n() });
          }
          #w() {
            let e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#r) return;
            let t = this.#r;
            (this.#r = e),
              (this.#i = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#m();
          }
          #C(e) {
            i.jG.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#o);
                }),
                this.#e
                  .getQueryCache()
                  .notify({ query: this.#r, type: "observerResultsUpdated" });
            });
          }
        };
      function d(e, t) {
        return (
          (!1 !== (0, c.Eh)(t.enabled, e) &&
            void 0 === e.state.data &&
            ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
          (void 0 !== e.state.data && f(e, t, t.refetchOnMount))
        );
      }
      function f(e, t, n) {
        if (
          !1 !== (0, c.Eh)(t.enabled, e) &&
          "static" !== (0, c.d2)(t.staleTime, e)
        ) {
          let r = "function" == typeof n ? n(e) : n;
          return "always" === r || (!1 !== r && p(e, t));
        }
        return !1;
      }
      function h(e, t, n, r) {
        return (
          (e !== t || !1 === (0, c.Eh)(r.enabled, e)) &&
          (!n.suspense || "error" !== e.state.status) &&
          p(e, n)
        );
      }
      function p(e, t) {
        return (
          !1 !== (0, c.Eh)(t.enabled, e) &&
          e.isStaleByTime((0, c.d2)(t.staleTime, e))
        );
      }
      var b = n(12115),
        m = n(99776);
      n(95155);
      var y = b.createContext(
          (function () {
            let e = !1;
            return {
              clearReset: () => {
                e = !1;
              },
              reset: () => {
                e = !0;
              },
              isReset: () => e,
            };
          })()
        ),
        g = b.createContext(!1);
      g.Provider;
      var w = (e, t, n) =>
        t.fetchOptimistic(e).catch(() => {
          n.clearReset();
        });
      function v(e, t) {
        return (function (e, t, n) {
          var r, o, a, s, l;
          let u = b.useContext(g),
            d = b.useContext(y),
            f = (0, m.jE)(n),
            h = f.defaultQueryOptions(e);
          if (
            (null == (o = f.getDefaultOptions().queries) ||
              null == (r = o._experimental_beforeQuery) ||
              r.call(o, h),
            (h._optimisticResults = u ? "isRestoring" : "optimistic"),
            h.suspense)
          ) {
            let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
              t = h.staleTime;
            (h.staleTime =
              "function" == typeof t ? (...n) => e(t(...n)) : e(t)),
              "number" == typeof h.gcTime &&
                (h.gcTime = Math.max(h.gcTime, 1e3));
          }
          (h.suspense || h.throwOnError || h.experimental_prefetchInRender) &&
            !d.isReset() &&
            (h.retryOnMount = !1),
            b.useEffect(() => {
              d.clearReset();
            }, [d]);
          let p = !f.getQueryCache().get(h.queryHash),
            [v] = b.useState(() => new t(f, h)),
            A = v.getOptimisticResult(h),
            x = !u && !1 !== e.subscribed;
          if (
            (b.useSyncExternalStore(
              b.useCallback(
                (e) => {
                  let t = x ? v.subscribe(i.jG.batchCalls(e)) : c.lQ;
                  return v.updateResult(), t;
                },
                [v, x]
              ),
              () => v.getCurrentResult(),
              () => v.getCurrentResult()
            ),
            b.useEffect(() => {
              v.setOptions(h);
            }, [h, v]),
            h?.suspense && A.isPending)
          )
            throw w(h, v, d);
          if (
            ((e) => {
              let {
                result: t,
                errorResetBoundary: n,
                throwOnError: r,
                query: i,
                suspense: o,
              } = e;
              return (
                t.isError &&
                !n.isReset() &&
                !t.isFetching &&
                i &&
                ((o && void 0 === t.data) || (0, c.GU)(r, [t.error, i]))
              );
            })({
              result: A,
              errorResetBoundary: d,
              throwOnError: h.throwOnError,
              query: f.getQueryCache().get(h.queryHash),
              suspense: h.suspense,
            })
          )
            throw A.error;
          if (
            (null == (s = f.getDefaultOptions().queries) ||
              null == (a = s._experimental_afterQuery) ||
              a.call(s, h, A),
            h.experimental_prefetchInRender &&
              !c.S$ &&
              A.isLoading &&
              A.isFetching &&
              !u)
          ) {
            let e = p
              ? w(h, v, d)
              : null == (l = f.getQueryCache().get(h.queryHash))
              ? void 0
              : l.promise;
            null == e ||
              e.catch(c.lQ).finally(() => {
                v.updateResult();
              });
          }
          return h.notifyOnChangeProps ? A : v.trackResult(A);
        })(e, u, t);
      }
    },
    23222: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o, B: () => i });
      var r = n(97525);
      function i(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.d_(e.type);
        return `${e.name}(${o(e.inputs, { includeName: t })})`;
      }
      function o(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${o(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    24250: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => i, R: () => r });
      let r = (e) => e,
        i = (e) => e;
    },
    24784: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => s });
      var r = n(20390),
        i = n(77608);
      let o = /^0x[a-fA-F0-9]{40}$/,
        a = new r.A(8192);
      function s(e, t) {
        let { strict: n = !0 } = t ?? {},
          r = `${e}.${n}`;
        if (a.has(r)) return a.get(r);
        let s =
          !!o.test(e) && (e.toLowerCase() === e || !n || (0, i.o)(e) === e);
        return a.set(r, s), s;
      }
    },
    25157: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => c });
      var r = n(32733),
        i = n(30931),
        o = n(93527),
        a = n(72757),
        s = n(3972);
      async function c(e, t) {
        let { abi: n, address: c, args: l, functionName: u, ...d } = t,
          f = (0, i.p)({ abi: n, args: l, functionName: u });
        try {
          let { data: t } = await (0, a.T)(
            e,
            s.T,
            "call"
          )({ ...d, data: f, to: c });
          return (0, r.e)({
            abi: n,
            args: l,
            functionName: u,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, o.j)(e, {
            abi: n,
            address: c,
            args: l,
            docsPath: "/docs/contract/readContract",
            functionName: u,
          });
        }
      }
    },
    26709: (e, t, n) => {
      "use strict";
      n.d(t, { MM: () => E, ft: () => B });
      var r = n(97152),
        i = n(98292),
        o = n(34897),
        a = n(60186),
        s = n(6434),
        c = n(32915),
        l = n(55563),
        u = n(34561);
      function d(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, l.aT)(e))
              : e.blobs,
          i = [];
        for (let e of r) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === n ? i : i.map((e) => (0, u.My)(e));
      }
      function f(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, l.aT)(e))
              : e.blobs,
          i =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, l.aT)(e))
              : e.commitments,
          o = [];
        for (let e = 0; e < r.length; e++) {
          let n = r[e],
            a = i[e];
          o.push(Uint8Array.from(t.computeBlobKzgProof(n, a)));
        }
        return "bytes" === n ? o : o.map((e) => (0, u.My)(e));
      }
      let h = n(60869).sc;
      var p = n(60587),
        b = n(13933);
      class m extends b.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class y extends b.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      b.C, b.C;
      var g = n(82427),
        w = n(16871),
        v = n(72757),
        A = n(5691),
        x = n(50879),
        C = n(35471);
      let E = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        I = new Map();
      async function B(e, t) {
        let n,
          b,
          {
            account: B = e.account,
            blobs: P,
            chain: k,
            gas: S,
            kzg: O,
            nonce: M,
            nonceManager: R,
            parameters: T = E,
            type: F,
          } = t,
          j = B ? (0, r.J)(B) : B,
          N = { ...t, ...(j ? { from: j?.address } : {}) };
        async function U() {
          return (
            n ||
            (n = await (0, v.T)(e, a.g, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function D() {
          return (
            b ||
            (k
              ? k.id
              : void 0 !== t.chainId
              ? t.chainId
              : (b = await (0, v.T)(e, C.T, "getChainId")({})))
          );
        }
        if (T.includes("nonce") && void 0 === M && j)
          if (R) {
            let t = await D();
            N.nonce = await R.consume({
              address: j.address,
              chainId: t,
              client: e,
            });
          } else
            N.nonce = await (0, v.T)(
              e,
              s.y,
              "getTransactionCount"
            )({ address: j.address, blockTag: "pending" });
        if (
          (T.includes("blobVersionedHashes") || T.includes("sidecars")) &&
          P &&
          O
        ) {
          let e = d({ blobs: P, kzg: O });
          if (
            (T.includes("blobVersionedHashes") &&
              (N.blobVersionedHashes = (function (e) {
                let { commitments: t, version: n } = e,
                  r = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                  i = [];
                for (let e of t)
                  i.push(
                    (function (e) {
                      let { commitment: t, version: n = 1 } = e,
                        r = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                        i = (function (e, t) {
                          let n = h(
                            (0, p.q)(e, { strict: !1 }) ? (0, l.ZJ)(e) : e
                          );
                          return "bytes" === (t || "hex") ? n : (0, u.nj)(n);
                        })(t, "bytes");
                      return i.set([n], 0), "bytes" === r ? i : (0, u.My)(i);
                    })({ commitment: e, to: r, version: n })
                  );
                return i;
              })({ commitments: e, to: "hex" })),
            T.includes("sidecars"))
          ) {
            let t = f({ blobs: P, commitments: e, kzg: O });
            N.sidecars = (function (e) {
              let { data: t, kzg: n, to: r } = e,
                i =
                  e.blobs ??
                  (function (e) {
                    let t =
                        e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                      n =
                        "string" == typeof e.data ? (0, l.aT)(e.data) : e.data,
                      r = (0, w.E)(n);
                    if (!r) throw new y();
                    if (r > 761855) throw new m({ maxSize: 761855, size: r });
                    let i = [],
                      o = !0,
                      a = 0;
                    for (; o; ) {
                      let e = (0, g.l)(new Uint8Array(131072)),
                        t = 0;
                      for (; t < 4096; ) {
                        let r = n.slice(a, a + 31);
                        if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
                          e.pushByte(128), (o = !1);
                          break;
                        }
                        t++, (a += 31);
                      }
                      i.push(e);
                    }
                    return "bytes" === t
                      ? i.map((e) => e.bytes)
                      : i.map((e) => (0, u.My)(e.bytes));
                  })({ data: t, to: r }),
                o = e.commitments ?? d({ blobs: i, kzg: n, to: r }),
                a = e.proofs ?? f({ blobs: i, commitments: o, kzg: n, to: r }),
                s = [];
              for (let e = 0; e < i.length; e++)
                s.push({ blob: i[e], commitment: o[e], proof: a[e] });
              return s;
            })({ blobs: P, commitments: e, proofs: t, to: "hex" });
          }
        }
        if (
          (T.includes("chainId") && (N.chainId = await D()),
          (T.includes("fees") || T.includes("type")) && void 0 === F)
        )
          try {
            N.type = (function (e) {
              if (e.type) return e.type;
              if (void 0 !== e.authorizationList) return "eip7702";
              if (
                void 0 !== e.blobs ||
                void 0 !== e.blobVersionedHashes ||
                void 0 !== e.maxFeePerBlobGas ||
                void 0 !== e.sidecars
              )
                return "eip4844";
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new x.Vg({ transaction: e });
            })(N);
          } catch {
            let t = I.get(e.uid);
            if (void 0 === t) {
              let n = await U();
              (t = "bigint" == typeof n?.baseFeePerGas), I.set(e.uid, t);
            }
            N.type = t ? "eip1559" : "legacy";
          }
        if (T.includes("fees"))
          if ("legacy" !== N.type && "eip2930" !== N.type) {
            if (
              void 0 === N.maxFeePerGas ||
              void 0 === N.maxPriorityFeePerGas
            ) {
              let n = await U(),
                { maxFeePerGas: r, maxPriorityFeePerGas: o } = await (0, i.O)(
                  e,
                  { block: n, chain: k, request: N }
                );
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < o
              )
                throw new c.RR({ maxPriorityFeePerGas: o });
              (N.maxPriorityFeePerGas = o), (N.maxFeePerGas = r);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.pw();
            if (void 0 === t.gasPrice) {
              let t = await U(),
                { gasPrice: n } = await (0, i.O)(e, {
                  block: t,
                  chain: k,
                  request: N,
                  type: "legacy",
                });
              N.gasPrice = n;
            }
          }
        return (
          T.includes("gas") &&
            void 0 === S &&
            (N.gas = await (0, v.T)(
              e,
              o.Q,
              "estimateGas"
            )({
              ...N,
              account: j ? { address: j.address, type: "json-rpc" } : j,
            })),
          (0, A.c)(N),
          delete N.parameters,
          N
        );
      }
    },
    27321: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => p });
      var r = n(4486),
        i = n(32733),
        o = n(30931),
        a = n(71552),
        s = n(34561),
        c = n(92987),
        l = n(38092),
        u = n(71971),
        d = n(38647),
        f = n(72757),
        h = n(25157);
      async function p(e, t) {
        let {
            blockNumber: n,
            blockTag: p,
            key: b,
            name: m,
            gatewayUrls: y,
            strict: g,
          } = t,
          { chain: w } = e,
          v = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!w)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: w,
              contract: "ensUniversalResolver",
            });
          })(),
          A = w?.ensTlds;
        if (A && !A.some((e) => m.endsWith(e))) return null;
        try {
          let t = {
              address: v,
              abi: r.Ag,
              args: [
                (0, s.nj)((0, d.F)(m)),
                (0, o.p)({
                  abi: r.SJ,
                  functionName: "text",
                  args: [(0, u.k)(m), b],
                }),
                y ?? [l.J],
              ],
              functionName: "resolveWithGateways",
              blockNumber: n,
              blockTag: p,
            },
            a = (0, f.T)(e, h.J, "readContract"),
            c = await a(t);
          if ("0x" === c[0]) return null;
          let g = (0, i.e)({ abi: r.SJ, functionName: "text", data: c[0] });
          return "" === g ? null : g;
        } catch (e) {
          if (g) throw e;
          if ((0, c.J)(e)) return null;
          throw e;
        }
      }
    },
    27747: (e, t, n) => {
      "use strict";
      n.d(t, { B4: () => i, SK: () => o, hX: () => a });
      var r = n(13933);
      class i extends r.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class o extends r.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class a extends r.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    28245: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => o });
      var r = n(62023),
        i = n(30598);
      function o(e, t = "wei") {
        return (0, i.J)(e, r.eL[t]);
      }
    },
    28698: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => s });
      var r,
        i,
        o = n(46465),
        a = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        };
      class s extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return `@wagmi/core@${o.r}`;
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof s
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof s && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return a(this, r, "m", i).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (i = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? a(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    29454: (e, t, n) => {
      "use strict";
      n.d(t, { EH: () => o, YE: () => s, jF: () => a, rj: () => i });
      var r = n(13933);
      class i extends r.C {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class o extends r.C {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class a extends r.C {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class s extends r.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      r.C;
    },
    29899: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => c });
      var r = n(95089),
        i = n(53473),
        o = n(97152),
        a = n(77608),
        s = n(43159);
      async function c(e, t = {}) {
        let n,
          { assertChainId: l = !0 } = t;
        if (t.connector) {
          let { connector: r } = t;
          if (
            "reconnecting" === e.state.status &&
            !r.getAccounts &&
            !r.getChainId
          )
            throw new s.HF({ connector: r });
          let [i, o] = await Promise.all([
            r.getAccounts().catch((e) => {
              if (null === t.account) return [];
              throw e;
            }),
            r.getChainId(),
          ]);
          n = { accounts: i, chainId: o, connector: r };
        } else n = e.state.connections.get(e.state.current);
        if (!n) throw new s.gC();
        let u = t.chainId ?? n.chainId,
          d = await n.connector.getChainId();
        if (l && d !== u)
          throw new s.xU({ connectionChainId: u, connectorChainId: d });
        let f = n.connector;
        if (f.getClient) return f.getClient({ chainId: u });
        let h = (0, o.J)(t.account ?? n.accounts[0]);
        if (
          (h && (h.address = (0, a.b)(h.address)),
          t.account &&
            !n.accounts.some(
              (e) => e.toLowerCase() === h.address.toLowerCase()
            ))
        )
          throw new s.aj({ address: h.address, connector: f });
        let p = e.chains.find((e) => e.id === u),
          b = await n.connector.getProvider({ chainId: u });
        return (0, r.U)({
          account: h,
          chain: p,
          name: "Connector Client",
          transport: (e) =>
            (function (e, t = {}) {
              let {
                key: n = "custom",
                methods: r,
                name: o = "Custom Provider",
                retryDelay: a,
              } = t;
              return ({ retryCount: s }) =>
                (0, i.o)({
                  key: n,
                  methods: r,
                  name: o,
                  request: e.request.bind(e),
                  retryCount: t.retryCount ?? s,
                  retryDelay: a,
                  type: "custom",
                });
            })(b)({ ...e, retryCount: 0 }),
        });
      }
    },
    30125: (e, t, n) => {
      "use strict";
      var r = n(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        c = r.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                u = r[1];
              return (
                s(
                  function () {
                    (i.value = n), (i.getSnapshot = t), l(i) && u({ inst: i });
                  },
                  [e, n, t]
                ),
                a(
                  function () {
                    return (
                      l(i) && u({ inst: i }),
                      e(function () {
                        l(i) && u({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
    30598: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [i, o] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (o = o.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${i || "0"}${o ? `.${o}` : ""}`
        );
      }
      n.d(t, { J: () => r });
    },
    30753: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => u });
      var r = n(2535),
        i = n(93420),
        o = n(97171),
        a = n(43159),
        s = n(77608),
        c = n(73168),
        l = n(34561);
      function u(e) {
        let t,
          d,
          f,
          h,
          p,
          b,
          m,
          y,
          g = e.isNewChainsStale ?? !0;
        return (0, r.U)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: u.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (p || ((p = this.onConnect.bind(this)), e.on("connect", p)),
              m ||
                ((m = this.onSessionDelete.bind(this)),
                e.on("session_delete", m)));
          },
          async connect({ chainId: e, withCapabilities: t, ...n } = {}) {
            try {
              let o = await this.getProvider();
              if (!o) throw new i.N();
              b || ((b = this.onDisplayUri), o.on("display_uri", b));
              let a = e;
              if (!a) {
                let e = (await r.storage?.getItem("state")) ?? {};
                a = r.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : r.chains[0]?.id;
              }
              if (!a) throw Error("No chains found on connector.");
              let l = await this.isChainsStale();
              if ((o.session && l && (await o.disconnect()), !o.session || l)) {
                let e = r.chains.filter((e) => e.id !== a).map((e) => e.id);
                await o.connect({
                  optionalChains: [a, ...e],
                  ...("pairingTopic" in n
                    ? { pairingTopic: n.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((e) => e.id));
              }
              let u = (await o.enable()).map((e) => (0, s.b)(e)),
                d = await this.getChainId();
              if (e && d !== e) {
                let t = await this.switchChain({ chainId: e }).catch((e) => {
                  if (
                    e.code === c.vx.code &&
                    e.cause?.message !==
                      "Missing or invalid. request() method: wallet_addEthereumChain"
                  )
                    throw e;
                  return { id: d };
                });
                d = t?.id ?? d;
              }
              return (
                b && (o.removeListener("display_uri", b), (b = void 0)),
                p && (o.removeListener("connect", p), (p = void 0)),
                f ||
                  ((f = this.onAccountsChanged.bind(this)),
                  o.on("accountsChanged", f)),
                h ||
                  ((h = this.onChainChanged.bind(this)),
                  o.on("chainChanged", h)),
                y ||
                  ((y = this.onDisconnect.bind(this)), o.on("disconnect", y)),
                m ||
                  ((m = this.onSessionDelete.bind(this)),
                  o.on("session_delete", m)),
                {
                  accounts: t
                    ? u.map((e) => ({ address: e, capabilities: {} }))
                    : u,
                  chainId: d,
                }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new c.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              h && (e?.removeListener("chainChanged", h), (h = void 0)),
                y && (e?.removeListener("disconnect", y), (y = void 0)),
                p || ((p = this.onConnect.bind(this)), e?.on("connect", p)),
                f && (e?.removeListener("accountsChanged", f), (f = void 0)),
                m && (e?.removeListener("session_delete", m), (m = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, s.b)(e));
          },
          async getProvider({ chainId: i } = {}) {
            async function a() {
              let t = r.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: i } = await Promise.all([
                n.e(1029),
                n.e(8458),
              ]).then(n.bind(n, 48458));
              return await i.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  r.chains.map((e) => {
                    let [t] = (0, o.R)({ chain: e, transports: r.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (d || (d = a()),
                (t = await d),
                t?.events.setMaxListeners(1 / 0)),
              i && (await this.switchChain?.({ chainId: i })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new i.N();
            let o = r.chains.find((e) => e.id === t);
            if (!o) throw new c.ch(new a.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: i }) => {
                    i === t && (r.emitter.off("change", n), e());
                  };
                  r.emitter.on("change", n);
                }),
                n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, l.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), o;
            } catch (r) {
              if (/(user rejected)/i.test(r.message)) throw new c.vx(r);
              try {
                let r, i;
                (r = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : o.blockExplorers?.default.url
                  ? [o.blockExplorers?.default.url]
                  : []),
                  (i = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...o.rpcUrls.default.http]);
                let a = {
                  blockExplorerUrls: r,
                  chainId: (0, l.cK)(t),
                  chainName: e?.chainName ?? o.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? o.nativeCurrency,
                  rpcUrls: i,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [a],
                });
                let s = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...s, t]), o;
              } catch (e) {
                throw new c.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, s.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            r.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
            let t = await this.getProvider();
            f && (t.removeListener("accountsChanged", f), (f = void 0)),
              h && (t.removeListener("chainChanged", h), (h = void 0)),
              y && (t.removeListener("disconnect", y), (y = void 0)),
              m && (t.removeListener("session_delete", m), (m = void 0)),
              p || ((p = this.onConnect.bind(this)), t.on("connect", p));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "", 10)
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await r.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!g) return !1;
            let e = r.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await r.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      u.type = "walletConnect";
    },
    30931: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => u });
      var r = n(40290),
        i = n(41706),
        o = n(97525),
        a = n(88878),
        s = n(23222),
        c = n(1347);
      let l = "/docs/contract/encodeFunctionData";
      function u(e) {
        let { args: t } = e,
          { abi: n, functionName: u } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: n, functionName: r } = e,
              i = t[0];
            if (r) {
              let e = (0, c.iY)({ abi: t, args: n, name: r });
              if (!e) throw new o.Iz(r, { docsPath: l });
              i = e;
            }
            if ("function" !== i.type) throw new o.Iz(void 0, { docsPath: l });
            return { abi: [i], functionName: (0, a.V)((0, s.B)(i)) };
          })(),
          d = n[0],
          f = "inputs" in d && d.inputs ? (0, i.h)(d.inputs, t ?? []) : void 0;
        return (0, r.aP)([u, f ?? "0x"]);
      }
    },
    31668: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => s, k: () => c });
      var r = n(34049),
        i = n(74268),
        o = n(93049),
        a = n(69781),
        s = class extends a.k {
          #E;
          #I;
          #B;
          #e;
          #P;
          #k;
          #S;
          constructor(e) {
            super(),
              (this.#S = !1),
              (this.#k = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#e = e.client),
              (this.#B = this.#e.getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#E = l(this.options)),
              (this.state = e.state ?? this.#E),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#P?.promise;
          }
          setOptions(e) {
            if (
              ((this.options = { ...this.#k, ...e }),
              this.updateGcTime(this.options.gcTime),
              this.state && void 0 === this.state.data)
            ) {
              let e = l(this.options);
              void 0 !== e.data &&
                (this.setData(e.data, {
                  updatedAt: e.dataUpdatedAt,
                  manual: !0,
                }),
                (this.#E = e));
            }
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#B.remove(this);
          }
          setData(e, t) {
            let n = (0, r.pl)(this.state.data, e, this.options);
            return (
              this.#O({
                data: n,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              n
            );
          }
          setState(e, t) {
            this.#O({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#P?.promise;
            return (
              this.#P?.cancel(e),
              t ? t.then(r.lQ).catch(r.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#E);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== (0, r.Eh)(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === r.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some(
                (e) => "static" === (0, r.d2)(e.options.staleTime, this)
              )
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((e) => e.getCurrentResult().isStale)
              : void 0 === this.state.data || this.state.isInvalidated;
          }
          isStaleByTime(e = 0) {
            return (
              void 0 === this.state.data ||
              ("static" !== e &&
                (!!this.state.isInvalidated ||
                  !(0, r.j3)(this.state.dataUpdatedAt, e)))
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#P?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#P?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#B.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#P &&
                  (this.#S
                    ? this.#P.cancel({ revert: !0 })
                    : this.#P.cancelRetry()),
                this.scheduleGc()),
              this.#B.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#O({ type: "invalidate" });
          }
          async fetch(e, t) {
            if (
              "idle" !== this.state.fetchStatus &&
              this.#P?.status() !== "rejected"
            ) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#P) return this.#P.continueRetry(), this.#P.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let n = new AbortController(),
              i = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#S = !0), n.signal),
                });
              },
              a = () => {
                let e = (0, r.ZM)(this.options, t),
                  n = (() => {
                    let e = {
                      client: this.#e,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                    return i(e), e;
                  })();
                return ((this.#S = !1), this.options.persister)
                  ? this.options.persister(e, n, this)
                  : e(n);
              },
              s = (() => {
                let e = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#e,
                  state: this.state,
                  fetchFn: a,
                };
                return i(e), e;
              })();
            this.options.behavior?.onFetch(s, this),
              (this.#I = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== s.fetchOptions?.meta) &&
                this.#O({ type: "fetch", meta: s.fetchOptions?.meta }),
              (this.#P = (0, o.II)({
                initialPromise: t?.initialPromise,
                fn: s.fetchFn,
                onCancel: (e) => {
                  e instanceof o.cc &&
                    e.revert &&
                    this.setState({ ...this.#I, fetchStatus: "idle" }),
                    n.abort();
                },
                onFail: (e, t) => {
                  this.#O({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#O({ type: "pause" });
                },
                onContinue: () => {
                  this.#O({ type: "continue" });
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0,
              }));
            try {
              let e = await this.#P.start();
              if (void 0 === e)
                throw Error(`${this.queryHash} data is undefined`);
              return (
                this.setData(e),
                this.#B.config.onSuccess?.(e, this),
                this.#B.config.onSettled?.(e, this.state.error, this),
                e
              );
            } catch (e) {
              if (e instanceof o.cc) {
                if (e.silent) return this.#P.promise;
                else if (e.revert) {
                  if (void 0 === this.state.data) throw e;
                  return this.state.data;
                }
              }
              throw (
                (this.#O({ type: "error", error: e }),
                this.#B.config.onError?.(e, this),
                this.#B.config.onSettled?.(this.state.data, e, this),
                e)
              );
            } finally {
              this.scheduleGc();
            }
          }
          #O(e) {
            let t = (t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...t,
                    ...c(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  let n = {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                  return (this.#I = e.manual ? n : void 0), n;
                case "error":
                  let r = e.error;
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            };
            (this.state = t(this.state)),
              i.jG.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#B.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function c(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, o.v_)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
      function l(e) {
        let t =
            "function" == typeof e.initialData
              ? e.initialData()
              : e.initialData,
          n = void 0 !== t,
          r = n
            ? "function" == typeof e.initialDataUpdatedAt
              ? e.initialDataUpdatedAt()
              : e.initialDataUpdatedAt
            : 0;
        return {
          data: t,
          dataUpdateCount: 0,
          dataUpdatedAt: n ? r ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: n ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
    },
    32108: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => o });
      var r = n(76115),
        i = n(24784);
      function o(e, t) {
        if (!(0, i.P)(e, { strict: !1 })) throw new r.M({ address: e });
        if (!(0, i.P)(t, { strict: !1 })) throw new r.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    32395: (e, t, n) => {
      "use strict";
      async function r(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
      n.d(t, { L: () => r });
    },
    32733: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => s });
      var r = n(97525),
        i = n(80897),
        o = n(1347);
      let a = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: c } = e,
          l = t[0];
        if (s) {
          let e = (0, o.iY)({ abi: t, args: n, name: s });
          if (!e) throw new r.Iz(s, { docsPath: a });
          l = e;
        }
        if ("function" !== l.type) throw new r.Iz(void 0, { docsPath: a });
        if (!l.outputs) throw new r.MR(l.name, { docsPath: a });
        let u = (0, i.n)(l.outputs, c);
        return u && u.length > 1 ? u : u && 1 === u.length ? u[0] : void 0;
      }
    },
    32915: (e, t, n) => {
      "use strict";
      n.d(t, { RR: () => s, pw: () => a, sM: () => o });
      var r = n(42503),
        i = n(13933);
      class o extends i.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class a extends i.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class s extends i.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            r.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    33704: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => r });
      let r = n(72997).k;
    },
    33791: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => r });
      let r = (0, n(91053).x)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        blockTime: 12e3,
        rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensUniversalResolver: {
            address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee",
            blockCreated: 0x16041f6,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      });
    },
    34049: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cp: () => b,
        EN: () => p,
        Eh: () => u,
        F$: () => h,
        GU: () => P,
        MK: () => d,
        S$: () => i,
        ZM: () => B,
        ZZ: () => E,
        Zw: () => a,
        d2: () => l,
        f8: () => y,
        gn: () => s,
        hT: () => I,
        j3: () => c,
        lQ: () => o,
        nJ: () => f,
        pl: () => x,
        y9: () => C,
        yy: () => A,
      });
      var r = n(37126),
        i = "undefined" == typeof window || "Deno" in globalThis;
      function o() {}
      function a(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function s(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function c(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function l(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function d(e, t) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: i,
          predicate: o,
          queryKey: a,
          stale: s,
        } = e;
        if (a) {
          if (r) {
            if (t.queryHash !== h(a, t.options)) return !1;
          } else if (!b(t.queryKey, a)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof s || t.isStale() === s) &&
          (!i || i === t.state.fetchStatus) &&
          (!o || !!o(t))
        );
      }
      function f(e, t) {
        let { exact: n, status: r, predicate: i, mutationKey: o } = e;
        if (o) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (p(t.options.mutationKey) !== p(o)) return !1;
          } else if (!b(t.options.mutationKey, o)) return !1;
        }
        return (!r || t.state.status === r) && (!i || !!i(t));
      }
      function h(e, t) {
        return (t?.queryKeyHashFn || p)(e);
      }
      function p(e) {
        return JSON.stringify(e, (e, t) =>
          w(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function b(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            Object.keys(t).every((n) => b(e[n], t[n])))
        );
      }
      var m = Object.prototype.hasOwnProperty;
      function y(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function g(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function w(e) {
        if (!v(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return (
          !!v(n) &&
          !!n.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function v(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function A(e) {
        return new Promise((t) => {
          r.zs.setTimeout(t, e);
        });
      }
      function x(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? (function e(t, n) {
              if (t === n) return t;
              let r = g(t) && g(n);
              if (!r && !(w(t) && w(n))) return n;
              let i = (r ? t : Object.keys(t)).length,
                o = r ? n : Object.keys(n),
                a = o.length,
                s = r ? Array(a) : {},
                c = 0;
              for (let l = 0; l < a; l++) {
                let a = r ? l : o[l],
                  u = t[a],
                  d = n[a];
                if (u === d) {
                  (s[a] = u), (r ? l < i : m.call(t, a)) && c++;
                  continue;
                }
                if (
                  null === u ||
                  null === d ||
                  "object" != typeof u ||
                  "object" != typeof d
                ) {
                  s[a] = d;
                  continue;
                }
                let f = e(u, d);
                (s[a] = f), f === u && c++;
              }
              return i === a && c === i ? t : s;
            })(e, t)
          : t;
      }
      function C(e, t, n = 0) {
        let r = [...e, t];
        return n && r.length > n ? r.slice(1) : r;
      }
      function E(e, t, n = 0) {
        let r = [t, ...e];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var I = Symbol();
      function B(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== I
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function P(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
    },
    34561: (e, t, n) => {
      "use strict";
      n.d(t, {
        $P: () => c,
        My: () => l,
        cK: () => u,
        i3: () => f,
        nj: () => s,
      });
      var r = n(35276),
        i = n(72427),
        o = n(11914);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function s(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? u(e, t)
          : "string" == typeof e
          ? f(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : l(e, t);
      }
      function c(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, o.Sl)(n, { size: t.size }), (0, i.eV)(n, { size: t.size }))
          : n;
      }
      function l(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += a[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size
          ? ((0, o.Sl)(r, { size: t.size }),
            (0, i.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
      function u(e, t = {}) {
        let n,
          { signed: o, size: a } = t,
          s = BigInt(e);
        a
          ? (n = o
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof n && o ? -n - 1n : 0;
        if ((n && s > n) || s < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new r.Ty({
            max: n ? `${n}${t}` : void 0,
            min: `${c}${t}`,
            signed: o,
            size: a,
            value: `${e}${t}`,
          });
        }
        let l = `0x${(o && s < 0
          ? (1n << BigInt(8 * a)) + BigInt(s)
          : s
        ).toString(16)}`;
        return a ? (0, i.eV)(l, { size: a }) : l;
      }
      let d = new TextEncoder();
      function f(e, t = {}) {
        return l(d.encode(e), t);
      }
    },
    34897: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => g });
      var r = n(97152),
        i = n(13933),
        o = n(51255),
        a = n(34561),
        s = n(28245),
        c = n(42503),
        l = n(50879);
      class u extends i.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: r,
            data: i,
            gas: o,
            gasPrice: a,
            maxFeePerGas: u,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, l.aO)({
                from: t?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, s.c)(p)} ${r?.nativeCurrency?.symbol || "ETH"}`,
                data: i,
                gas: o,
                gasPrice: void 0 !== a && `${(0, c.Q)(a)} gwei`,
                maxFeePerGas: void 0 !== u && `${(0, c.Q)(u)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, c.Q)(d)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var d = n(88737),
        f = n(61829),
        h = n(44332),
        p = n(74750),
        b = n(4274),
        m = n(5691),
        y = n(26709);
      async function g(e, t) {
        let { account: n = e.account } = t,
          s = n ? (0, r.J)(n) : void 0;
        try {
          let {
              accessList: n,
              authorizationList: r,
              blobs: c,
              blobVersionedHashes: l,
              blockNumber: u,
              blockTag: d,
              data: f,
              gas: g,
              gasPrice: w,
              maxFeePerBlobGas: v,
              maxFeePerGas: A,
              maxPriorityFeePerGas: x,
              nonce: C,
              value: E,
              stateOverride: I,
              ...B
            } = await (0, y.ft)(e, {
              ...t,
              parameters:
                s?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            P = ("bigint" == typeof u ? (0, a.cK)(u) : void 0) || d,
            k = (0, b.yH)(I),
            S = await (async () =>
              B.to
                ? B.to
                : r && r.length > 0
                ? await (0, o.g)({ authorization: r[0] }).catch(() => {
                    throw new i.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, m.c)(t);
          let O = e.chain?.formatters?.transactionRequest?.format,
            M = (O || p.Bv)({
              ...(0, h.o)(B, { format: O }),
              from: s?.address,
              accessList: n,
              authorizationList: r,
              blobs: c,
              blobVersionedHashes: l,
              data: f,
              gas: g,
              gasPrice: w,
              maxFeePerBlobGas: v,
              maxFeePerGas: A,
              maxPriorityFeePerGas: x,
              nonce: C,
              to: S,
              value: E,
            });
          return BigInt(
            await e.request({
              method: "eth_estimateGas",
              params: k
                ? [M, P ?? e.experimental_blockTag ?? "latest", k]
                : P
                ? [M, P]
                : [M],
            })
          );
        } catch (n) {
          throw (function (e, { docsPath: t, ...n }) {
            return new u(
              (() => {
                let t = (0, f.l)(e, n);
                return t instanceof d.RM ? e : t;
              })(),
              { docsPath: t, ...n }
            );
          })(n, { ...t, account: s, chain: e.chain });
        }
      }
    },
    35276: (e, t, n) => {
      "use strict";
      n.d(t, { H2: () => a, Ty: () => i, u: () => s, xO: () => o });
      var r = n(13933);
      class i extends r.C {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class o extends r.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class a extends r.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      r.C;
      class s extends r.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    35326: (e, t, n) => {
      "use strict";
      n.d(t, {
        zX: () => y,
        bG: () => g,
        M: () => w,
        rR: () => v,
        Po: () => A,
        $S: () => x,
      });
      var r = n(97152),
        i = n(44964),
        o = n(41343),
        a = n(23222),
        s = n(59350);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, s.A)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var l = n(1347),
        u = n(28245),
        d = n(42503),
        f = n(97525),
        h = n(13933),
        p = n(35674),
        b = n(50879),
        m = n(24250);
      class y extends h.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: i,
            data: o,
            gas: a,
            gasPrice: s,
            maxFeePerGas: c,
            maxPriorityFeePerGas: l,
            nonce: f,
            to: h,
            value: m,
            stateOverride: y,
          }
        ) {
          let g = t ? (0, r.J)(t) : void 0,
            w = (0, b.aO)({
              from: g?.address,
              to: h,
              value:
                void 0 !== m &&
                `${(0, u.c)(m)} ${i?.nativeCurrency?.symbol || "ETH"}`,
              data: o,
              gas: a,
              gasPrice: void 0 !== s && `${(0, d.Q)(s)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== l && `${(0, d.Q)(l)} gwei`,
              nonce: f,
            });
          y &&
            (w += `
${(0, p.uj)(y)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends h.C {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: i,
            functionName: o,
            sender: s,
          }
        ) {
          let u = (0, l.iY)({ abi: t, args: n, name: o }),
            d = u
              ? c({
                  abiItem: u,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            f = u ? (0, a.B)(u, { includeName: !0 }) : void 0,
            h = (0, b.aO)({
              address: r && (0, m.R)(r),
              function: f,
              args:
                d &&
                "()" !== d &&
                `${[...Array(o?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: s,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${o}".`,
            {
              cause: e,
              docsPath: i,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                h && "Contract Call:",
                h,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = o),
            (this.sender = s);
        }
      }
      class w extends h.C {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let s, l, u, d, h;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: s,
              } = (l = (0, o.W)({ abi: e, data: t }));
              if ("Error" === r) d = s[0];
              else if ("Panic" === r) {
                let [e] = s;
                d = i.fD[e];
              } else {
                let e = n ? (0, a.B)(n, { includeName: !0 }) : void 0,
                  t =
                    n && s
                      ? c({
                          abiItem: n,
                          args: s,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              s = e;
            }
          else r && (d = r);
          s instanceof f.Wq &&
            ((h = s.signature),
            (u = [
              `Unable to decode signature "${h}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${h}.`,
            ])),
            super(
              (d && "execution reverted" !== d) || h
                ? [
                    `The contract function "${n}" reverted with the following ${
                      h ? "signature" : "reason"
                    }:`,
                    d || h,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: s,
                metaMessages: u,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = l),
            (this.raw = t),
            (this.reason = d),
            (this.signature = h);
        }
      }
      class v extends h.C {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class A extends h.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class x extends h.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    35471: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => i });
      var r = n(11914);
      async function i(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, r.ME)(t);
      }
    },
    35674: (e, t, n) => {
      "use strict";
      n.d(t, { Hi: () => i, ft: () => o, uj: () => s });
      var r = n(13933);
      class i extends r.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class o extends r.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function a(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function s(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && ((r += "      state:\n"), (r += a(n.state))),
              n.stateDiff &&
                ((r += "      stateDiff:\n"), (r += a(n.stateDiff))),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    35891: (e, t, n) => {
      "use strict";
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function i(e, t) {
        var n = {};
        if ("object" == typeof t)
          !(function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              i = {};
            for (var o in t) {
              var a = t[o],
                s = [...r, o];
              "string" == typeof a || "number" == typeof a || null == a
                ? (i[o] = n(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (i[o] = e(a, n, s));
            }
            return i;
          })(t, (t, i) => {
            null != t &&
              (n[
                r(
                  (function (e, t) {
                    var n = e;
                    for (var r of t) {
                      if (!(r in n))
                        throw Error(
                          "Path ".concat(
                            t.join(" -> "),
                            " does not exist in object"
                          )
                        );
                      n = n[r];
                    }
                    return n;
                  })(e, i)
                )
              ] = String(t));
          });
        else
          for (var i in e) {
            var o = e[i];
            null != o && (n[r(i)] = o);
          }
        return (
          Object.defineProperty(n, "toString", {
            value: function () {
              return Object.keys(this)
                .map((e) => "".concat(e, ":").concat(this[e]))
                .join(";");
            },
            writable: !1,
          }),
          n
        );
      }
      n.d(t, { D: () => i });
    },
    37126: (e, t, n) => {
      "use strict";
      n.d(t, { Zq: () => o, zs: () => i });
      var r = {
          setTimeout: (e, t) => setTimeout(e, t),
          clearTimeout: (e) => clearTimeout(e),
          setInterval: (e, t) => setInterval(e, t),
          clearInterval: (e) => clearInterval(e),
        },
        i = new (class {
          #M = r;
          #R = !1;
          setTimeoutProvider(e) {
            this.#M = e;
          }
          setTimeout(e, t) {
            return this.#M.setTimeout(e, t);
          }
          clearTimeout(e) {
            this.#M.clearTimeout(e);
          }
          setInterval(e, t) {
            return this.#M.setInterval(e, t);
          }
          clearInterval(e) {
            this.#M.clearInterval(e);
          }
        })();
      function o(e) {
        setTimeout(e, 0);
      }
    },
    37407: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => i });
      var r = n(78140);
      function i(
        e,
        { delay: t = 100, retryCount: n = 2, shouldRetry: o = () => !0 } = {}
      ) {
        return new Promise((i, a) => {
          let s = async ({ count: c = 0 } = {}) => {
            let l = async ({ error: e }) => {
              let n = "function" == typeof t ? t({ count: c, error: e }) : t;
              n && (await (0, r.u)(n)), s({ count: c + 1 });
            };
            try {
              let t = await e();
              i(t);
            } catch (e) {
              if (c < n && (await o({ count: c, error: e })))
                return l({ error: e });
              a(e);
            }
          };
          s();
        });
      }
    },
    38092: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => m, J: () => b });
      var r = n(4486),
        i = n(44964),
        o = n(4896),
        a = n(97525),
        s = n(40290),
        c = n(88878),
        l = n(41706),
        u = n(23222),
        d = n(1347);
      let f = "/docs/contract/encodeErrorResult";
      function h(e) {
        let { abi: t, errorName: n, args: r } = e,
          i = t[0];
        if (n) {
          let e = (0, d.iY)({ abi: t, args: r, name: n });
          if (!e) throw new a.yy(n, { docsPath: f });
          i = e;
        }
        if ("error" !== i.type) throw new a.yy(void 0, { docsPath: f });
        let o = (0, u.B)(i),
          h = (0, c.V)(o),
          p = "0x";
        if (r && r.length > 0) {
          if (!i.inputs) throw new a.ZP(i.name, { docsPath: f });
          p = (0, l.h)(i.inputs, r);
        }
        return (0, s.aP)([h, p]);
      }
      let p = "/docs/contract/encodeFunctionResult",
        b = "x-batch-gateway:true";
      async function m(e) {
        let { data: t, ccipRequest: n } = e,
          {
            args: [s],
          } = (0, o.J)({ abi: r.b2, data: t }),
          c = [],
          u = [];
        return (
          await Promise.all(
            s.map(async (e, t) => {
              try {
                (u[t] = e.urls.includes(b)
                  ? await m({ data: e.data, ccipRequest: n })
                  : await n(e)),
                  (c[t] = !1);
              } catch (e) {
                var o;
                (c[t] = !0),
                  (u[t] =
                    "HttpRequestError" === (o = e).name && o.status
                      ? h({
                          abi: r.b2,
                          errorName: "HttpError",
                          args: [o.status, o.shortMessage],
                        })
                      : h({
                          abi: [i.Mc],
                          errorName: "Error",
                          args: [
                            "shortMessage" in o ? o.shortMessage : o.message,
                          ],
                        }));
              }
            })
          ),
          (function (e) {
            let { abi: t, functionName: n, result: r } = e,
              i = t[0];
            if (n) {
              let e = (0, d.iY)({ abi: t, name: n });
              if (!e) throw new a.Iz(n, { docsPath: p });
              i = e;
            }
            if ("function" !== i.type) throw new a.Iz(void 0, { docsPath: p });
            if (!i.outputs) throw new a.MR(i.name, { docsPath: p });
            let o = (() => {
              if (0 === i.outputs.length) return [];
              if (1 === i.outputs.length) return [r];
              if (Array.isArray(r)) return r;
              throw new a.dm(r);
            })();
            return (0, l.h)(i.outputs, o);
          })({ abi: r.b2, functionName: "query", result: [c, u] })
        );
      }
    },
    38445: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => r });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    38559: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => s, s: () => a });
      var r = n(74268),
        i = n(69781),
        o = n(93049),
        a = class extends i.k {
          #e;
          #T;
          #F;
          #P;
          constructor(e) {
            super(),
              (this.#e = e.client),
              (this.mutationId = e.mutationId),
              (this.#F = e.mutationCache),
              (this.#T = []),
              (this.state = e.state || s()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#T.includes(e) ||
              (this.#T.push(e),
              this.clearGcTimeout(),
              this.#F.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#T = this.#T.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#F.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#T.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#F.remove(this));
          }
          continue() {
            return this.#P?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
                this.#O({ type: "continue" });
              },
              n = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#P = (0, o.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e, n)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#O({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#O({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#F.canRun(this),
            });
            let r = "pending" === this.state.status,
              i = !this.#P.canStart();
            try {
              if (r) t();
              else {
                this.#O({ type: "pending", variables: e, isPaused: i }),
                  await this.#F.config.onMutate?.(e, this, n);
                let t = await this.options.onMutate?.(e, n);
                t !== this.state.context &&
                  this.#O({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: i,
                  });
              }
              let o = await this.#P.start();
              return (
                await this.#F.config.onSuccess?.(
                  o,
                  e,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSuccess?.(o, e, this.state.context, n),
                await this.#F.config.onSettled?.(
                  o,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSettled?.(
                  o,
                  null,
                  e,
                  this.state.context,
                  n
                ),
                this.#O({ type: "success", data: o }),
                o
              );
            } catch (t) {
              try {
                throw (
                  (await this.#F.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onError?.(t, e, this.state.context, n),
                  await this.#F.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context,
                    n
                  ),
                  t)
                );
              } finally {
                this.#O({ type: "error", error: t });
              }
            } finally {
              this.#F.runNext(this);
            }
          }
          #O(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.jG.batch(() => {
                this.#T.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#F.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function s() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    38647: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => s });
      var r = n(55563),
        i = n(34561),
        o = n(2350),
        a = n(4697);
      function s(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, r.Af)(t).byteLength + 2),
          s = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          var l;
          let t = (0, r.Af)(c[e]);
          t.byteLength > 255 &&
            (t = (0, r.Af)(
              ((l = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.q)(e) || (0, o.S)((0, r.Af)(e)) : (0, i.My)(t);
              })(c[e])),
              `[${l.slice(2)}]`)
            )),
            (n[s] = t.length),
            n.set(t, s + 1),
            (s += t.length + 1);
        }
        return n.byteLength !== s + 1 ? n.slice(0, s + 1) : n;
      }
    },
    39382: (e, t, n) => {
      "use strict";
      n.d(t, { _o: () => y, Pj: () => b, uT: () => d, NV: () => m });
      var r = n(89709),
        i = n(98782),
        o = n(91136),
        a = n(54029),
        s = n(63542);
      class c extends s.C {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let l = new Map([
        ["address", { type: "address" }],
        ["bool", { type: "bool" }],
        ["bytes", { type: "bytes" }],
        ["bytes32", { type: "bytes32" }],
        ["int", { type: "int256" }],
        ["int256", { type: "int256" }],
        ["string", { type: "string" }],
        ["uint", { type: "uint256" }],
        ["uint8", { type: "uint8" }],
        ["uint16", { type: "uint16" }],
        ["uint24", { type: "uint24" }],
        ["uint32", { type: "uint32" }],
        ["uint64", { type: "uint64" }],
        ["uint96", { type: "uint96" }],
        ["uint112", { type: "uint112" }],
        ["uint160", { type: "uint160" }],
        ["uint192", { type: "uint192" }],
        ["uint256", { type: "uint256" }],
        ["address owner", { type: "address", name: "owner" }],
        ["address to", { type: "address", name: "to" }],
        ["bool approved", { type: "bool", name: "approved" }],
        ["bytes _data", { type: "bytes", name: "_data" }],
        ["bytes data", { type: "bytes", name: "data" }],
        ["bytes signature", { type: "bytes", name: "signature" }],
        ["bytes32 hash", { type: "bytes32", name: "hash" }],
        ["bytes32 r", { type: "bytes32", name: "r" }],
        ["bytes32 root", { type: "bytes32", name: "root" }],
        ["bytes32 s", { type: "bytes32", name: "s" }],
        ["string name", { type: "string", name: "name" }],
        ["string symbol", { type: "string", name: "symbol" }],
        ["string tokenURI", { type: "string", name: "tokenURI" }],
        ["uint tokenId", { type: "uint256", name: "tokenId" }],
        ["uint8 v", { type: "uint8", name: "v" }],
        ["uint256 balance", { type: "uint256", name: "balance" }],
        ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
        ["uint256 value", { type: "uint256", name: "value" }],
        [
          "event:address indexed from",
          { type: "address", name: "from", indexed: !0 },
        ],
        [
          "event:address indexed to",
          { type: "address", name: "to", indexed: !0 },
        ],
        [
          "event:uint indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
        [
          "event:uint256 indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
      ]);
      var u = n(98957);
      function d(e, t = {}) {
        if ((0, u.Ji)(e))
          return (function (e, t = {}) {
            let n = (0, u.ej)(e);
            if (!n) throw new a.s7({ signature: e, type: "function" });
            let r = m(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(
                b(r[e], { modifiers: u.v7, structs: t, type: "function" })
              );
            let s = [];
            if (n.returns) {
              let e = m(n.returns),
                r = e.length;
              for (let n = 0; n < r; n++)
                s.push(
                  b(e[n], { modifiers: u.v7, structs: t, type: "function" })
                );
            }
            return {
              name: n.name,
              type: "function",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: i,
              outputs: s,
            };
          })(e, t);
        if ((0, u.Rv)(e))
          return (function (e, t = {}) {
            let n = (0, u.iB)(e);
            if (!n) throw new a.s7({ signature: e, type: "event" });
            let r = m(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(b(r[e], { modifiers: u.fC, structs: t, type: "event" }));
            return { name: n.name, type: "event", inputs: i };
          })(e, t);
        if ((0, u.pc)(e))
          return (function (e, t = {}) {
            let n = (0, u.kz)(e);
            if (!n) throw new a.s7({ signature: e, type: "error" });
            let r = m(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(b(r[e], { structs: t, type: "error" }));
            return { name: n.name, type: "error", inputs: i };
          })(e, t);
        if ((0, u.l9)(e))
          return (function (e, t = {}) {
            let n = (0, u.Yo)(e);
            if (!n) throw new a.s7({ signature: e, type: "constructor" });
            let r = m(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(b(r[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: i,
            };
          })(e, t);
        if ((0, u.v8)(e)) {
          var n = e;
          let t = (0, u.If)(n);
          if (!t) throw new a.s7({ signature: n, type: "fallback" });
          return {
            type: "fallback",
            stateMutability: t.stateMutability ?? "nonpayable",
          };
        }
        if ((0, u.sP)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new a.x8({ signature: e });
      }
      let f =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        h =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p = /^u?int$/;
      function b(e, t) {
        var n, a;
        let s,
          c = (function (e, t, n) {
            let r = "";
            if (n)
              for (let e of Object.entries(n)) {
                if (!e) continue;
                let t = "";
                for (let n of e[1])
                  t += `[${n.type}${n.name ? `:${n.name}` : ""}]`;
                r += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${r}` : e;
          })(e, t?.type, t?.structs);
        if (l.has(c)) return l.get(c);
        let d = r.wj.test(e),
          w = (0, r.Yv)(d ? h : f, e);
        if (!w) throw new o.dV({ param: e });
        if (
          w.name &&
          ("address" === (n = w.name) ||
            "bool" === n ||
            "function" === n ||
            "string" === n ||
            "tuple" === n ||
            r.BD.test(n) ||
            r.Ge.test(n) ||
            g.test(n))
        )
          throw new o.zd({ param: e, name: w.name });
        let v = w.name ? { name: w.name } : {},
          A = "indexed" === w.modifier ? { indexed: !0 } : {},
          x = t?.structs ?? {},
          C = {};
        if (d) {
          s = "tuple";
          let e = m(w.type),
            t = [],
            n = e.length;
          for (let r = 0; r < n; r++) t.push(b(e[r], { structs: x }));
          C = { components: t };
        } else if (w.type in x) (s = "tuple"), (C = { components: x[w.type] });
        else if (p.test(w.type)) s = `${w.type}256`;
        else if ("address payable" === w.type) s = "address";
        else if (((s = w.type), t?.type !== "struct" && !y(s)))
          throw new i.UG({ type: s });
        if (w.modifier) {
          if (!t?.modifiers?.has?.(w.modifier))
            throw new o.NO({ param: e, type: t?.type, modifier: w.modifier });
          if (
            u.v7.has(w.modifier) &&
            ((a = s),
            !w.array && "bytes" !== a && "string" !== a && "tuple" !== a)
          )
            throw new o.Pj({ param: e, type: t?.type, modifier: w.modifier });
        }
        let E = { type: `${s}${w.array ?? ""}`, ...v, ...A, ...C };
        return l.set(c, E), E;
      }
      function m(e, t = [], n = "", r = 0) {
        let i = e.trim().length;
        for (let o = 0; o < i; o++) {
          let i = e[o],
            a = e.slice(o + 1);
          switch (i) {
            case ",":
              return 0 === r ? m(a, [...t, n.trim()]) : m(a, t, `${n}${i}`, r);
            case "(":
              return m(a, t, `${n}${i}`, r + 1);
            case ")":
              return m(a, t, `${n}${i}`, r - 1);
            default:
              return m(a, t, `${n}${i}`, r);
          }
        }
        if ("" === n) return t;
        if (0 !== r) throw new c({ current: n, depth: r });
        return t.push(n.trim()), t;
      }
      function y(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          r.BD.test(e) ||
          r.Ge.test(e)
        );
      }
      let g =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    40290: (e, t, n) => {
      "use strict";
      function r(e) {
        return "string" == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                r = 0;
              for (let t of e) n.set(t, r), (r += t.length);
              return n;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, { aP: () => i, xW: () => r });
    },
    41343: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => l });
      var r = n(44964),
        i = n(97525),
        o = n(44352),
        a = n(88878),
        s = n(80897),
        c = n(23222);
      function l(e) {
        let { abi: t, data: n } = e,
          l = (0, o.di)(n, 0, 4);
        if ("0x" === l) throw new i.O();
        let u = [...(t || []), r.Mc, r.J9].find(
          (e) => "error" === e.type && l === (0, a.V)((0, c.B)(e))
        );
        if (!u)
          throw new i.Wq(l, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: u,
          args:
            "inputs" in u && u.inputs && u.inputs.length > 0
              ? (0, s.n)(u.inputs, (0, o.di)(n, 4))
              : void 0,
          errorName: u.name,
        };
      }
    },
    41706: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => p, k: () => m });
      var r = n(97525),
        i = n(76115),
        o = n(13933),
        a = n(35276),
        s = n(24784),
        c = n(40290),
        l = n(72427),
        u = n(16871),
        d = n(44352),
        f = n(34561),
        h = n(1588);
      function p(e, t) {
        if (e.length !== t.length)
          throw new r.YE({ expectedLength: e.length, givenLength: t.length });
        let n = b(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let p = 0; p < e.length; p++)
              n.push(
                (function e({ param: t, value: n }) {
                  let p = m(t.type);
                  if (p) {
                    let [i, o] = p;
                    return (function (t, { length: n, param: i }) {
                      let o = null === n;
                      if (!Array.isArray(t)) throw new r.dm(t);
                      if (!o && t.length !== n)
                        throw new r.Nc({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${i.type}[${n}]`,
                        });
                      let a = !1,
                        s = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: i, value: t[n] });
                        r.dynamic && (a = !0), s.push(r);
                      }
                      if (o || a) {
                        let e = b(s);
                        if (o) {
                          let t = (0, f.cK)(s.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: s.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (a) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(s.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: i, param: { ...t, type: o } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        i = [];
                      for (let o = 0; o < n.components.length; o++) {
                        let a = n.components[o],
                          s = Array.isArray(t) ? o : a.name,
                          c = e({ param: a, value: t[s] });
                        i.push(c), c.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? b(i)
                          : (0, c.xW)(i.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type) {
                    var y = n;
                    if (!(0, s.P)(y)) throw new i.M({ address: y });
                    return { dynamic: !1, encoded: (0, l.db)(y.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var g = n;
                    if ("boolean" != typeof g)
                      throw new o.C(
                        `Invalid boolean value: "${g}" (type: ${typeof g}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, l.db)((0, f.$P)(g)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , r = "256"] = h.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: n = 256 }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          i = t ? -r - 1n : 0n;
                        if (e > r || e < i)
                          throw new a.Ty({
                            max: r.toString(),
                            min: i.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, f.cK)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(r) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        i = (0, u.E)(e);
                      if (!n) {
                        let t = e;
                        return (
                          i % 32 != 0 &&
                            (t = (0, l.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, l.db)((0, f.cK)(i, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (i !== Number.parseInt(n, 10))
                        throw new r.gH({
                          expectedSize: Number.parseInt(n, 10),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, l.db)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type) {
                    var w = n;
                    let e = (0, f.i3)(w),
                      t = Math.ceil((0, u.E)(e) / 32),
                      r = [];
                    for (let n = 0; n < t; n++)
                      r.push(
                        (0, l.db)((0, d.di)(e, 32 * n, (n + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, l.db)((0, f.cK)((0, u.E)(e), { size: 32 })),
                        ...r,
                      ]),
                    };
                  }
                  throw new r.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function b(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += (0, u.E)(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: s } = e[o];
          a
            ? (n.push((0, f.cK)(t + i, { size: 32 })),
              r.push(s),
              (i += (0, u.E)(s)))
            : n.push(s);
        }
        return (0, c.xW)([...n, ...r]);
      }
      function m(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    41718: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => E });
      var r = n(25157),
        i = n(13933);
      class o extends i.C {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class a extends i.C {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class s extends i.C {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class c extends i.C {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      i.C;
      let l =
          /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        u =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function h(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !Object.hasOwn(globalThis, "Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function p(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function b({ uri: e, gatewayUrls: t }) {
        let n = d.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = p(t?.ipfs, "https://ipfs.io"),
          i = p(t?.arweave, "https://arweave.net"),
          o = e.match(l),
          {
            protocol: a,
            subpath: c,
            target: h,
            subtarget: b = "",
          } = o?.groups || {},
          m = "ipns:/" === a || "ipns/" === c,
          y = "ipfs:/" === a || "ipfs/" === c || u.test(e);
        if (e.startsWith("http") && !m && !y) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((m || y) && h)
          return {
            uri: `${r}/${m ? "ipns" : "ipfs"}/${h}${b}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && h)
          return { uri: `${i}/${h}${b || ""}`, isOnChain: !1, isEncoded: !1 };
        let g = e.replace(f, "");
        if (
          (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`),
          g.startsWith("data:") || g.startsWith("{"))
        )
          return { uri: g, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: e });
      }
      function m(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new o({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function y({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await g({ gatewayUrls: e, uri: m(n) });
        } catch {
          throw new s({ uri: t });
        }
      }
      async function g({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = b({ uri: t, gatewayUrls: e });
        if (r || (await h(n))) return n;
        throw new s({ uri: t });
      }
      async function w(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new c({ namespace: t.namespace });
      }
      async function v(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? A(e, { gatewayUrls: t, record: n })
          : g({ uri: n, gatewayUrls: t });
      }
      async function A(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, i] = t.split("/"),
              [o, s] = n.split(":"),
              [c, l] = r.split(":");
            if (!o || "eip155" !== o.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!s) throw new a({ reason: "Chain ID not found" });
            if (!l) throw new a({ reason: "Contract address not found" });
            if (!i) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(s, 10),
              namespace: c.toLowerCase(),
              contractAddress: l,
              tokenID: i,
            };
          })(n),
          {
            uri: i,
            isOnChain: o,
            isEncoded: s,
          } = b({ uri: await w(e, { nft: r }), gatewayUrls: t });
        if (
          o &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return g({
            uri: m(
              JSON.parse(
                s ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: t,
          });
        let c = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          y({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, c) })
        );
      }
      var x = n(72757),
        C = n(27321);
      async function E(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: i,
          gatewayUrls: o,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = await (0, x.T)(
          e,
          C.m,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: i,
          universalResolverAddress: s,
          gatewayUrls: o,
          strict: a,
        });
        if (!c) return null;
        try {
          return await v(e, { record: c, gatewayUrls: r });
        } catch {
          return null;
        }
      }
    },
    42351: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => A });
      var r = n(11914),
        i = n(42438),
        o = n(30598),
        a = n(90707),
        s = n(21681),
        c = n(62023);
      function l(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(c.pj[e]);
      }
      var u = n(35326),
        d = n(61812);
      async function f(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: i, ...o } = t,
          a = e.getClient({ chainId: r });
        return (0, s.T)(
          a,
          d.C,
          "multicall"
        )({ allowFailure: n, contracts: i, ...o });
      }
      var h = n(25157);
      async function p(e, t) {
        let { allowFailure: n = !0, blockNumber: r, blockTag: i, ...o } = t,
          a = t.contracts;
        try {
          let t = {};
          for (let [n, r] of a.entries()) {
            let i = r.chainId ?? e.state.chainId;
            t[i] || (t[i] = []), t[i]?.push({ contract: r, index: n });
          }
          let s = (
              await Promise.all(
                Object.entries(t).map(([t, a]) =>
                  f(e, {
                    ...o,
                    allowFailure: n,
                    blockNumber: r,
                    blockTag: i,
                    chainId: Number.parseInt(t, 10),
                    contracts: a.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            c = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return s.reduce((e, t, n) => (e && (e[c[n]] = t), e), []);
        } catch (o) {
          if (o instanceof u.bG) throw o;
          let t = () =>
            a.map((t) =>
              (function (e, t) {
                let { chainId: n, ...r } = t,
                  i = e.getClient({ chainId: n });
                return (0, s.T)(i, h.J, "readContract")(r);
              })(e, { ...t, blockNumber: r, blockTag: i })
            );
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
      async function b(e, t) {
        let {
          address: n,
          blockNumber: c,
          blockTag: u,
          chainId: d,
          token: f,
          unit: h = "ether",
        } = t;
        if (f)
          try {
            return await m(e, {
              balanceAddress: n,
              chainId: d,
              symbolType: "string",
              tokenAddress: f,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await m(e, {
                  balanceAddress: n,
                  chainId: d,
                  symbolType: "bytes32",
                  tokenAddress: f,
                }),
                o = (0, r.IQ)((0, i.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: o };
            }
            throw t;
          }
        let p = e.getClient({ chainId: d }),
          b = (0, s.T)(p, a.r, "getBalance"),
          y = await b(
            c ? { address: n, blockNumber: c } : { address: n, blockTag: u }
          ),
          g = e.chains.find((e) => e.id === d) ?? p.chain;
        return {
          decimals: g.nativeCurrency.decimals,
          formatted: (0, o.J)(y, l(h)),
          symbol: g.nativeCurrency.symbol,
          value: y,
        };
      }
      async function m(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: i,
            tokenAddress: a,
            unit: s,
          } = t,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: a,
          },
          [u, d, f] = await p(e, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [n], chainId: r },
              { ...c, functionName: "decimals", chainId: r },
              { ...c, functionName: "symbol", chainId: r },
            ],
          }),
          h = (0, o.J)(u ?? "0", l(s ?? d));
        return { decimals: d, formatted: h, symbol: f, value: u };
      }
      var y = n(47575),
        g = n(75575),
        w = n(99941),
        v = n(86475);
      function A() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          o = (0, v.U)(n),
          a = (0, w.i)({ config: o }),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (await b(e, { ...i, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, y.xO)(e)];
              })(t),
            };
          })(o, { ...n, chainId: null != (e = n.chainId) ? e : a }),
          c = !!(r && (null == (t = i.enabled) || t));
        return (0, g.IT)({ ...i, ...s, enabled: c });
      }
    },
    42438: (e, t, n) => {
      "use strict";
      function r(e, { dir: t = "left" } = {}) {
        let n = "string" == typeof e ? e.replace("0x", "") : e,
          i = 0;
        for (let e = 0; e < n.length - 1; e++)
          if ("0" === n["left" === t ? e : n.length - e - 1].toString()) i++;
          else break;
        return ((n = "left" === t ? n.slice(i) : n.slice(0, n.length - i)),
        "string" == typeof e)
          ? (1 === n.length && "right" === t && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
      n.d(t, { B: () => r });
    },
    42503: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => o });
      var r = n(62023),
        i = n(30598);
      function o(e, t = "wei") {
        return (0, i.J)(e, r.sz[t]);
      }
    },
    43159: (e, t, n) => {
      "use strict";
      n.d(t, {
        HF: () => l,
        aj: () => s,
        gC: () => a,
        nM: () => o,
        nk: () => i,
        xU: () => c,
      });
      var r = n(28698);
      class i extends r.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class o extends r.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends r.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      r.C;
      class s extends r.C {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends r.C {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class l extends r.C {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    43249: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => n$ });
      var r = n(4486),
        i = n(32733),
        o = n(30931),
        a = n(71552),
        s = n(42438),
        c = n(34561),
        l = n(92987),
        u = n(38092),
        d = n(71971),
        f = n(38647),
        h = n(72757),
        p = n(25157);
      async function b(e, t) {
        let {
            blockNumber: n,
            blockTag: b,
            coinType: m,
            name: y,
            gatewayUrls: g,
            strict: w,
          } = t,
          { chain: v } = e,
          A = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!v)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: v,
              contract: "ensUniversalResolver",
            });
          })(),
          x = v?.ensTlds;
        if (x && !x.some((e) => y.endsWith(e))) return null;
        let C = null != m ? [(0, d.k)(y), BigInt(m)] : [(0, d.k)(y)];
        try {
          let t = (0, o.p)({ abi: r.Rm, functionName: "addr", args: C }),
            a = {
              address: A,
              abi: r.Ag,
              functionName: "resolveWithGateways",
              args: [(0, c.nj)((0, f.F)(y)), t, g ?? [u.J]],
              blockNumber: n,
              blockTag: b,
            },
            l = (0, h.T)(e, p.J, "readContract"),
            d = await l(a);
          if ("0x" === d[0]) return null;
          let m = (0, i.e)({
            abi: r.Rm,
            args: C,
            functionName: "addr",
            data: d[0],
          });
          if ("0x" === m || "0x00" === (0, s.B)(m)) return null;
          return m;
        } catch (e) {
          if (w) throw e;
          if ((0, l.J)(e)) return null;
          throw e;
        }
      }
      var m = n(41718),
        y = n(3629);
      async function g(e, t) {
        let { blockNumber: n, blockTag: r, name: i } = t,
          { chain: o } = e,
          s = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!o)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: o,
              contract: "ensUniversalResolver",
            });
          })(),
          l = o?.ensTlds;
        if (l && !l.some((e) => i.endsWith(e)))
          throw Error(
            `${i} is not a valid ENS TLD (${l?.join(", ")}) for chain "${
              o.name
            }" (id: ${o.id}).`
          );
        let [u] = await (0, h.T)(
          e,
          p.J,
          "readContract"
        )({
          address: s,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [
                { type: "address" },
                { type: "bytes32" },
                { type: "uint256" },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, c.nj)((0, f.F)(i))],
          blockNumber: n,
          blockTag: r,
        });
        return u;
      }
      var w = n(27321),
        v = n(3972),
        A = n(97152),
        x = n(96565),
        C = n(44332),
        E = n(74750),
        I = n(5691);
      async function B(e, t) {
        let {
            account: n = e.account,
            blockNumber: r,
            blockTag: i = "latest",
            blobs: o,
            data: a,
            gas: s,
            gasPrice: l,
            maxFeePerBlobGas: u,
            maxFeePerGas: d,
            maxPriorityFeePerGas: f,
            to: h,
            value: p,
            ...b
          } = t,
          m = n ? (0, A.J)(n) : void 0;
        try {
          (0, I.c)(t);
          let n = "bigint" == typeof r ? (0, c.cK)(r) : void 0,
            y = e.chain?.formatters?.transactionRequest?.format,
            g = (y || E.Bv)({
              ...(0, C.o)(b, { format: y }),
              from: m?.address,
              blobs: o,
              data: a,
              gas: s,
              gasPrice: l,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: h,
              value: p,
            }),
            w = await e.request({
              method: "eth_createAccessList",
              params: [g, n || i],
            });
          return { accessList: w.accessList, gasUsed: BigInt(w.gasUsed) };
        } catch (n) {
          throw (0, x.d)(n, { ...t, account: m, chain: e.chain });
        }
      }
      function P(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: i, transport: o }) => {
                "success" === i && t === e && (n[r] = o.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      async function k(e) {
        let t = P(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var S = n(97525),
        O = n(13933);
      class M extends O.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var R = n(55563),
        T = n(2350),
        F = n(33704),
        j = n(41706),
        N = n(23222),
        U = n(1347);
      let D = "/docs/contract/encodeEventTopics";
      function L(e) {
        let { abi: t, eventName: n, args: r } = e,
          i = t[0];
        if (n) {
          let e = (0, U.iY)({ abi: t, name: n });
          if (!e) throw new S.M_(n, { docsPath: D });
          i = e;
        }
        if ("event" !== i.type) throw new S.M_(void 0, { docsPath: D });
        let o = (0, N.B)(i),
          a = (0, F.h)(o),
          s = [];
        if (r && "inputs" in i) {
          let e = i.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(r)
              ? r
              : Object.values(r).length > 0
              ? e?.map((e) => r[e.name]) ?? []
              : [];
          t.length > 0 &&
            (s =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, i) => q({ param: e, value: t[n][i] }))
                  : void 0 !== t[n] && null !== t[n]
                  ? q({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [a, ...s];
      }
      function q({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, T.S)((0, R.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new M(e.type);
        return (0, j.h)([e], [t]);
      }
      async function W(e, t) {
        let {
            address: n,
            abi: r,
            args: i,
            eventName: o,
            fromBlock: a,
            strict: s,
            toBlock: l,
          } = t,
          u = P(e, { method: "eth_newFilter" }),
          d = o ? L({ abi: r, args: i, eventName: o }) : void 0,
          f = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof a ? (0, c.cK)(a) : a,
                toBlock: "bigint" == typeof l ? (0, c.cK)(l) : l,
                topics: d,
              },
            ],
          });
        return {
          abi: r,
          args: i,
          eventName: o,
          id: f,
          request: u(f),
          strict: !!s,
          type: "event",
        };
      }
      async function Q(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: i,
          fromBlock: o,
          strict: a,
          toBlock: s,
        } = {}
      ) {
        let l = i ?? (r ? [r] : void 0),
          u = P(e, { method: "eth_newFilter" }),
          d = [];
        l &&
          ((d = [
            l.flatMap((e) => L({ abi: [e], eventName: e.name, args: n })),
          ]),
          r && (d = d[0]));
        let f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof o ? (0, c.cK)(o) : o,
              toBlock: "bigint" == typeof s ? (0, c.cK)(s) : s,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: o,
          id: f,
          request: u(f),
          strict: !!a,
          toBlock: s,
          type: "event",
        };
      }
      async function z(e) {
        let t = P(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var $ = n(93527),
        G = n(34897);
      async function H(e, t) {
        let {
            abi: n,
            address: r,
            args: i,
            functionName: a,
            dataSuffix: s,
            ...c
          } = t,
          l = (0, o.p)({ abi: n, args: i, functionName: a });
        try {
          return await (0, h.T)(
            e,
            G.Q,
            "estimateGas"
          )({ data: `${l}${s ? s.replace("0x", "") : ""}`, to: r, ...c });
        } catch (t) {
          let e = c.account ? (0, A.J)(c.account) : void 0;
          throw (0, $.j)(t, {
            abi: n,
            address: r,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: a,
            sender: e?.address,
          });
        }
      }
      var K = n(98292),
        J = n(5935),
        V = n(90707);
      async function _(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var Z = n(60186),
        Y = n(70054),
        X = n(11914);
      async function ee(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let i,
          o = void 0 !== n ? (0, c.cK)(n) : void 0;
        return (
          (i = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [o || r],
                },
                { dedupe: !!o }
              )),
          (0, X.ME)(i)
        );
      }
      var et = n(35471),
        en = n(53108),
        er = n(32108),
        ei = n(27747),
        eo = n(16871),
        ea = n(80897);
      let es = "/docs/contract/decodeEventLog";
      function ec(e) {
        let { abi: t, data: n, strict: r, topics: i } = e,
          o = r ?? !0,
          [a, ...s] = i;
        if (!a) throw new S._z({ docsPath: es });
        let c = t.find(
          (e) => "event" === e.type && a === (0, F.h)((0, N.B)(e))
        );
        if (!(c && "name" in c) || "event" !== c.type)
          throw new S.kE(a, { docsPath: es });
        let { name: l, inputs: u } = c,
          d = u?.some((e) => !("name" in e && e.name)),
          f = d ? [] : {},
          h = u
            .map((e, t) => [e, t])
            .filter(([e]) => "indexed" in e && e.indexed);
        for (let e = 0; e < h.length; e++) {
          let [t, n] = h[e],
            r = s[e];
          if (!r) throw new S.l3({ abiItem: c, param: t });
          f[d ? n : t.name || n] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, ea.n)([e], t) || [])[0];
          })({ param: t, value: r });
        }
        let p = u.filter((e) => !("indexed" in e && e.indexed));
        if (p.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, ea.n)(p, n);
              if (e)
                if (d)
                  for (let t = 0; t < u.length; t++) f[t] = f[t] ?? e.shift();
                else for (let t = 0; t < p.length; t++) f[p[t].name] = e[t];
            } catch (e) {
              if (o) {
                if (e instanceof S.Iy || e instanceof ei.SK)
                  throw new S.fo({
                    abiItem: c,
                    data: n,
                    params: p,
                    size: (0, eo.E)(n),
                  });
                throw e;
              }
            }
          else if (o)
            throw new S.fo({ abiItem: c, data: "0x", params: p, size: 0 });
        }
        return { eventName: l, args: Object.values(f).length > 0 ? f : void 0 };
      }
      function el(e) {
        let { abi: t, args: n, logs: r, strict: i = !0 } = e,
          o = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return r
          .map((e) => {
            try {
              let r = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, F.h)(t)
              );
              if (!r) return null;
              let a = ec({ ...e, abi: [r], strict: i });
              if (
                (o && !o.includes(a.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: n, matchArgs: r } = e;
                  if (!r) return !0;
                  if (!t) return !1;
                  function i(e, t, n) {
                    try {
                      if ("address" === e.type) return (0, er.h)(t, n);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, T.S)((0, R.ZJ)(t)) === n;
                      return t === n;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(r)
                    ? r.every((e, r) => {
                        if (null == e) return !0;
                        let o = n[r];
                        return (
                          !!o &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            i(o, e, t[r])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof r ||
                        Array.isArray(r)
                      ) &&
                        Object.entries(r).every(([e, r]) => {
                          if (null == r) return !0;
                          let o = n.find((t) => t.name === e);
                          return (
                            !!o &&
                            (Array.isArray(r) ? r : [r]).some((n) =>
                              i(o, n, t[e])
                            )
                          );
                        });
                })({ args: a.args, inputs: r.inputs, matchArgs: n })
              )
                return null;
              return { ...a, ...e };
            } catch (r) {
              let t, n;
              if (r instanceof S.kE) return null;
              if (r instanceof S.fo || r instanceof S.l3) {
                if (i) return null;
                (t = r.abiItem.name),
                  (n = r.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
      var eu = n(52623);
      async function ed(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: i,
          event: o,
          events: a,
          args: s,
          strict: l,
        } = {}
      ) {
        let u = a ?? (o ? [o] : void 0),
          d = [];
        u &&
          ((d = [
            u.flatMap((e) =>
              L({ abi: [e], eventName: e.name, args: a ? void 0 : s })
            ),
          ]),
          o && (d = d[0]));
        let f = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: d, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: d,
                    fromBlock: "bigint" == typeof r ? (0, c.cK)(r) : r,
                    toBlock: "bigint" == typeof i ? (0, c.cK)(i) : i,
                  },
                ],
              })
        ).map((e) => (0, eu.e)(e));
        return u ? el({ abi: u, args: s, logs: f, strict: l ?? !1 }) : f;
      }
      async function ef(e, t) {
        let {
            abi: n,
            address: r,
            args: i,
            blockHash: o,
            eventName: a,
            fromBlock: s,
            toBlock: c,
            strict: l,
          } = t,
          u = a ? (0, U.iY)({ abi: n, name: a }) : void 0,
          d = u ? void 0 : n.filter((e) => "event" === e.type);
        return (0, h.T)(
          e,
          ed,
          "getLogs"
        )({
          address: r,
          args: i,
          blockHash: o,
          event: u,
          events: d,
          fromBlock: s,
          toBlock: c,
          strict: l,
        });
      }
      class eh extends O.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function ep(e, t) {
        let { address: n, factory: r, factoryData: i } = t;
        try {
          let [t, o, a, s, c, l, u] = await (0, h.T)(
            e,
            p.J,
            "readContract"
          )({
            abi: eb,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: i,
          });
          return {
            domain: {
              name: o,
              version: a,
              chainId: Number(s),
              verifyingContract: c,
              salt: l,
            },
            extensions: u,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new eh({ address: n });
          throw e;
        }
      }
      let eb = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function em(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: i,
        }
      ) {
        var o;
        let a = "bigint" == typeof n ? (0, c.cK)(n) : void 0;
        return {
          baseFeePerGas: (o = await e.request(
            { method: "eth_feeHistory", params: [(0, c.cK)(t), a || r, i] },
            { dedupe: !!a }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: o.gasUsedRatio,
          oldestBlock: BigInt(o.oldestBlock),
          reward: o.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function ey(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof r[0]) return r;
        let i = r.map((e) => (0, eu.e)(e));
        return "abi" in t && t.abi ? el({ abi: t.abi, logs: i, strict: n }) : i;
      }
      async function eg(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, eu.e)(e));
        return t.abi ? el({ abi: t.abi, logs: r, strict: n }) : r;
      }
      var ew = n(32395);
      async function ev(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: i }
      ) {
        let o = void 0 !== n ? (0, c.cK)(n) : void 0;
        var a = await e.request({
          method: "eth_getProof",
          params: [t, i, o || (r ?? "latest")],
        });
        return {
          ...a,
          balance: a.balance ? BigInt(a.balance) : void 0,
          nonce: a.nonce ? (0, X.ME)(a.nonce) : void 0,
          storageProof: a.storageProof
            ? a.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function eA(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: i }
      ) {
        let o = void 0 !== n ? (0, c.cK)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, i, o || r],
        });
      }
      var ex = n(83759);
      async function eC(e, { hash: t, transactionReceipt: n }) {
        let [r, i] = await Promise.all([
            (0, h.T)(e, Y.G, "getBlockNumber")({}),
            t ? (0, h.T)(e, ex.x, "getTransaction")({ hash: t }) : void 0,
          ]),
          o = n?.blockNumber || i?.blockNumber;
        return o ? r - o + 1n : 0n;
      }
      var eE = n(6434),
        eI = n(1761),
        eB = n(61812),
        eP = n(84500),
        ek = n(35326),
        eS = n(88737),
        eO = n(40290),
        eM = n(61829),
        eR = n(61936),
        eT = n(4274);
      async function eF(e, t) {
        let {
          blockNumber: n,
          blockTag: r = e.experimental_blockTag ?? "latest",
          blocks: a,
          returnFullTransactions: s,
          traceTransfers: l,
          validation: u,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            let n = e.blockOverrides ? eP.J(e.blockOverrides) : void 0,
              r = e.calls.map((e) => {
                let t = e.account ? (0, A.J)(e.account) : void 0,
                  n = e.abi ? (0, o.p)(e) : e.data,
                  r = {
                    ...e,
                    data: e.dataSuffix
                      ? (0, eO.xW)([n || "0x", e.dataSuffix])
                      : n,
                    from: e.from ?? t?.address,
                  };
                return (0, I.c)(r), (0, E.Bv)(r);
              }),
              i = e.stateOverrides ? (0, eT.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: i });
          }
          let d = "bigint" == typeof n ? (0, c.cK)(n) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: l,
                  validation: u,
                },
                d || r,
              ],
            })
          ).map((e, t) => ({
            ...(0, eR.$)(e),
            calls: e.calls.map((e, n) => {
              let { abi: r, args: o, functionName: s, to: c } = a[t].calls[n],
                l = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                d = e.logs?.map((e) => (0, eu.e)(e)),
                f = "0x1" === e.status ? "success" : "failure",
                h =
                  r && "success" === f && "0x" !== l
                    ? (0, i.e)({ abi: r, data: l, functionName: s })
                    : null,
                p = (() => {
                  let t;
                  if (
                    "success" !== f &&
                    (e.error?.data === "0x"
                      ? (t = new S.O())
                      : e.error && (t = new ek.$S(e.error)),
                    t)
                  )
                    return (0, $.j)(t, {
                      abi: r ?? [],
                      address: c ?? "0x",
                      args: o,
                      functionName: s ?? "<unknown>",
                    });
                })();
              return {
                data: l,
                gasUsed: u,
                logs: d,
                status: f,
                ...("success" === f ? { result: h } : { error: p }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, eM.l)(t, {});
          if (e instanceof eS.RM) throw t;
          throw e;
        }
      }
      var ej = n(98782),
        eN = n(98957),
        eU = n(53560),
        eD = n(39382),
        eL = n(80197),
        eq = n(82115);
      let eW = BigInt(0x100000000 - 1),
        eQ = BigInt(32);
      function ez(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function e$(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function eG(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function eH(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let eK =
        68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
          ? (e) => e
          : function (e) {
              for (let n = 0; n < e.length; n++) {
                var t;
                e[n] =
                  (((t = e[n]) << 24) & 0xff000000) |
                  ((t << 8) & 0xff0000) |
                  ((t >>> 8) & 65280) |
                  ((t >>> 24) & 255);
              }
              return e;
            };
      function eJ(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          e$(e),
          e
        );
      }
      class eV {}
      let e_ = BigInt(0),
        eZ = BigInt(1),
        eY = BigInt(2),
        eX = BigInt(7),
        e0 = BigInt(256),
        e1 = BigInt(113),
        e5 = [],
        e6 = [],
        e2 = [];
      for (let e = 0, t = eZ, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          e5.push(2 * (5 * r + n)),
          e6.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = e_;
        for (let e = 0; e < 7; e++)
          (t = ((t << eZ) ^ ((t >> eX) * e1)) % e0) & eY &&
            (i ^= eZ << ((eZ << BigInt(e)) - eZ));
        e2.push(i);
      }
      let e8 = (function (e, t = !1) {
          let n = e.length,
            r = new Uint32Array(n),
            i = new Uint32Array(n);
          for (let o = 0; o < n; o++) {
            let { h: n, l: a } = (function (e, t = !1) {
              return t
                ? { h: Number(e & eW), l: Number((e >> eQ) & eW) }
                : { h: 0 | Number((e >> eQ) & eW), l: 0 | Number(e & eW) };
            })(e[o], t);
            [r[o], i[o]] = [n, a];
          }
          return [r, i];
        })(e2, !0),
        e3 = e8[0],
        e9 = e8[1],
        e4 = (e, t, n) =>
          n > 32
            ? ((e, t, n) => (t << (n - 32)) | (e >>> (64 - n)))(e, t, n)
            : ((e, t, n) => (e << n) | (t >>> (32 - n)))(e, t, n),
        e7 = (e, t, n) =>
          n > 32
            ? ((e, t, n) => (e << (n - 32)) | (t >>> (64 - n)))(e, t, n)
            : ((e, t, n) => (t << n) | (e >>> (32 - n)))(e, t, n);
      class te extends eV {
        constructor(e, t, n, r = !1, i = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = r),
            (this.rounds = i),
            ez(n),
            !(0 < e && e < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(
                e.buffer,
                e.byteOffset,
                Math.floor(e.byteLength / 4)
              );
            })(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          eK(this.state32),
            (function (e, t = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    i = (t + 2) % 10,
                    o = n[i],
                    a = n[i + 1],
                    s = e4(o, a, 1) ^ n[r],
                    c = e7(o, a, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10)
                    (e[t + n] ^= s), (e[t + n + 1] ^= c);
                }
                let t = e[2],
                  i = e[3];
                for (let n = 0; n < 24; n++) {
                  let r = e6[n],
                    o = e4(t, i, r),
                    a = e7(t, i, r),
                    s = e5[n];
                  (t = e[s]), (i = e[s + 1]), (e[s] = o), (e[s + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) n[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (e[0] ^= e3[r]), (e[1] ^= e9[r]);
              }
              eH(n);
            })(this.state32, this.rounds),
            eK(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          eG(this), e$((e = eJ(e)));
          let { blockLen: t, state: n } = this,
            r = e.length;
          for (let i = 0; i < r; ) {
            let o = Math.min(t - this.pos, r - i);
            for (let t = 0; t < o; t++) n[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          eG(this, !1), e$(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let o = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return ez(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          e$(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              "digestInto() expects output buffer of length at least " + t
            );
          if (this.finished) throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), eH(this.state);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            e || (e = new te(t, n, r, o, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = o),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let tt = (() =>
        (function (e) {
          let t = (t) => e().update(eJ(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new te(136, 1, 32)))();
      var tn = n(96382);
      function tr(e, t) {
        if (tf(e) > t) throw new tm({ givenSize: tf(e), maxSize: t });
      }
      let ti = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function to(e) {
        return e >= ti.zero && e <= ti.nine
          ? e - ti.zero
          : e >= ti.A && e <= ti.F
          ? e - (ti.A - 10)
          : e >= ti.a && e <= ti.f
          ? e - (ti.a - 10)
          : void 0;
      }
      function ta(e, t = {}) {
        let { dir: n = "left" } = t,
          r = e,
          i = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === n ? e : r.length - e - 1].toString()) i++;
          else break;
        return "left" === n ? r.slice(i) : r.slice(0, r.length - i);
      }
      var ts = n(69698),
        tc = n(71607);
      let tl = new TextDecoder(),
        tu = new TextEncoder();
      function td(e, t = {}) {
        let { size: n } = t,
          r = e;
        n && (ts.Sl(e, n), (r = tn.M7(e, n)));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let o = i.length / 2,
          a = new Uint8Array(o);
        for (let e = 0, t = 0; e < o; e++) {
          let n = to(i.charCodeAt(t++)),
            r = to(i.charCodeAt(t++));
          if (void 0 === n || void 0 === r)
            throw new eq.C(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          a[e] = 16 * n + r;
        }
        return a;
      }
      function tf(e) {
        return e.length;
      }
      function th(e, t = {}) {
        let { size: n } = t;
        void 0 !== n && tr(e, n);
        let r = tn.uK(e, t);
        return tn.Ro(r, t);
      }
      function tp(e) {
        return ta(e, { dir: "left" });
      }
      class tb extends eq.C {
        constructor(e) {
          super(`Bytes value \`${e}\` is not a valid boolean.`, {
            metaMessages: [
              "The bytes array must contain a single byte of either a `0` or `1` value.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.InvalidBytesBooleanError",
            });
        }
      }
      eq.C;
      class tm extends eq.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class ty extends eq.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class tg extends eq.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
      function tw(e, t = {}) {
        var n;
        let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
          i = tt(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? td(e)
              : (n = e) instanceof Uint8Array
              ? n
              : new Uint8Array(n)
          );
        return "Bytes" === r ? i : tn.uK(i);
      }
      class tv extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let tA = { checksum: new tv(8192) }.checksum,
        tx = /^0x[a-fA-F0-9]{40}$/;
      function tC(e, t = {}) {
        let { strict: n = !0 } = t;
        if (!tx.test(e)) throw new tB({ address: e, cause: new tP() });
        if (n) {
          if (e.toLowerCase() === e) return;
          if (tE(e) !== e) throw new tB({ address: e, cause: new tk() });
        }
      }
      function tE(e) {
        if (tA.has(e)) return tA.get(e);
        tC(e, { strict: !1 });
        let t = e.substring(2).toLowerCase(),
          n = tw(
            (function (e, t = {}) {
              let { size: n } = t,
                r = tu.encode(e);
              return "number" == typeof n
                ? (tr(r, n),
                  (function (e, t = {}) {
                    let { dir: n, size: r = 32 } = t;
                    if (0 === r) return e;
                    if (e.length > r)
                      throw new tg({
                        size: e.length,
                        targetSize: r,
                        type: "Bytes",
                      });
                    let i = new Uint8Array(r);
                    for (let t = 0; t < r; t++) {
                      let o = "right" === n;
                      i[o ? t : r - t - 1] = e[o ? t : e.length - t - 1];
                    }
                    return i;
                  })(r, { dir: "right", size: n }))
                : r;
            })(t),
            { as: "Bytes" }
          ),
          r = t.split("");
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 &&
              r[e + 1] &&
              (r[e + 1] = r[e + 1].toUpperCase());
        let i = `0x${r.join("")}`;
        return tA.set(e, i), i;
      }
      function tI(e, t = {}) {
        let { strict: n = !0 } = t ?? {};
        try {
          return tC(e, { strict: n }), !0;
        } catch {
          return !1;
        }
      }
      class tB extends eq.C {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class tP extends eq.C {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class tk extends eq.C {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      function tS(e) {
        let t = !0,
          n = "",
          r = 0,
          i = "",
          o = !1;
        for (let a = 0; a < e.length; a++) {
          let s = e[a];
          if (
            (["(", ")", ","].includes(s) && (t = !0),
            "(" === s && r++,
            ")" === s && r--,
            t)
          ) {
            if (0 === r) {
              if (" " === s && ["event", "function", "error", ""].includes(i))
                i = "";
              else if (((i += s), ")" === s)) {
                o = !0;
                break;
              }
              continue;
            }
            if (" " === s) {
              "," !== e[a - 1] &&
                "," !== n &&
                ",(" !== n &&
                ((n = ""), (t = !1));
              continue;
            }
            (i += s), (n += s);
          }
        }
        if (!o) throw new eq.C("Unable to normalize signature.");
        return i;
      }
      function tO(e, t = {}) {
        let { prepare: n = !0 } = t,
          r =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, eD.uT)(e);
                  else {
                    let n = (0, eU.e)(e),
                      r = e.length;
                    for (let i = 0; i < r; i++) {
                      let r = e[i];
                      if (!(0, eN.WL)(r)) {
                        t = (0, eD.uT)(r, n);
                        break;
                      }
                    }
                  }
                  if (!t) throw new ej.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...r, ...(n ? { hash: tT(r) } : {}) };
      }
      function tM(e, t, n) {
        let r,
          { args: i = [], prepare: o = !0 } = n ?? {},
          a = tn.tf(t, { strict: !1 }),
          s = e.filter((e) =>
            a
              ? "function" === e.type || "error" === e.type
                ? tR(e) === tn.di(t, 0, 4)
                : "event" === e.type && tT(e) === t
              : "name" in e && e.name === t
          );
        if (0 === s.length) throw new tj({ name: t });
        if (1 === s.length)
          return { ...s[0], ...(o ? { hash: tT(s[0]) } : {}) };
        for (let e of s) {
          if ("inputs" in e) {
            if (!i || 0 === i.length) {
              if (!e.inputs || 0 === e.inputs.length)
                return { ...e, ...(o ? { hash: tT(e) } : {}) };
              continue;
            }
            if (
              e.inputs &&
              0 !== e.inputs.length &&
              e.inputs.length === i.length &&
              i.every((t, n) => {
                let r = "inputs" in e && e.inputs[n];
                return (
                  !!r &&
                  (function e(t, n) {
                    let r = typeof t,
                      i = n.type;
                    switch (i) {
                      case "address":
                        return tI(t, { strict: !1 });
                      case "bool":
                        return "boolean" === r;
                      case "function":
                      case "string":
                        return "string" === r;
                      default:
                        if ("tuple" === i && "components" in n)
                          return Object.values(n.components).every((n, r) =>
                            e(Object.values(t)[r], n)
                          );
                        if (
                          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                            i
                          )
                        )
                          return "number" === r || "bigint" === r;
                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                          return "string" === r || t instanceof Uint8Array;
                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                          return (
                            Array.isArray(t) &&
                            t.every((t) =>
                              e(t, {
                                ...n,
                                type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                              })
                            )
                          );
                        return !1;
                    }
                  })(t, r)
                );
              })
            ) {
              if (r && "inputs" in r && r.inputs) {
                let t = (function e(t, n, r) {
                  for (let i in t) {
                    let o = t[i],
                      a = n[i];
                    if (
                      "tuple" === o.type &&
                      "tuple" === a.type &&
                      "components" in o &&
                      "components" in a
                    )
                      return e(o.components, a.components, r[i]);
                    let s = [o.type, a.type];
                    if (
                      (s.includes("address") && s.includes("bytes20")) ||
                      (((s.includes("address") && s.includes("string")) ||
                        (s.includes("address") && s.includes("bytes"))) &&
                        tI(r[i], { strict: !1 }))
                    )
                      return s;
                  }
                })(e.inputs, r.inputs, i);
                if (t)
                  throw new tF(
                    { abiItem: e, type: t[0] },
                    { abiItem: r, type: t[1] }
                  );
              }
              r = e;
            }
          }
        }
        let c = (() => {
          if (r) return r;
          let [e, ...t] = s;
          return { ...e, overloads: t };
        })();
        if (!c) throw new tj({ name: t });
        return { ...c, ...(o ? { hash: tT(c) } : {}) };
      }
      function tR(...e) {
        let t = (() => {
          if (Array.isArray(e[0])) {
            let [t, n] = e;
            return tM(t, n);
          }
          return e[0];
        })();
        return tn.di(tT(t), 0, 4);
      }
      function tT(...e) {
        let t = (() => {
          if (Array.isArray(e[0])) {
            let [t, n] = e;
            return tM(t, n);
          }
          return e[0];
        })();
        return "string" != typeof t && "hash" in t && t.hash
          ? t.hash
          : tw(
              tn.sH(
                (function (...e) {
                  let t = (() => {
                    if (Array.isArray(e[0])) {
                      let [t, n] = e;
                      return tM(t, n);
                    }
                    return e[0];
                  })();
                  return tS("string" == typeof t ? t : eL.B(t));
                })(t)
              )
            );
      }
      class tF extends eq.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${tS(eL.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${tS(eL.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class tj extends eq.C {
        constructor({ name: e, data: t, type: n = "item" }) {
          super(
            `ABI ${n}${
              e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      eq.C;
      var tN = n(91136),
        tU = n(56538);
      let tD = /^(.*)\[([0-9]*)\]$/,
        tL = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        tq =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        tW = 2n ** 256n - 1n;
      function tQ(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += tn.Ej(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: s } = e[o];
          a
            ? (n.push(tn.oB(t + i, { size: 32 })), r.push(s), (i += tn.Ej(s)))
            : n.push(s);
        }
        return tn.xW(...n, ...r);
      }
      function tz(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function t$(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(t$);
        let n = tz(e.type);
        return !!(n && t$({ ...e, type: n[1] }));
      }
      let tG = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new tJ({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new tK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new tH({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new tH({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      class tH extends eq.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.NegativeOffsetError",
            });
        }
      }
      class tK extends eq.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.PositionOutOfBoundsError",
            });
        }
      }
      class tJ extends eq.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.RecursiveReadLimitExceededError",
            });
        }
      }
      function tV(e, t, n) {
        let { checksumAddress: r = !1 } = n ?? {};
        if (e.length !== t.length)
          throw new t5({ expectedLength: e.length, givenLength: t.length });
        let i = tQ(
          (function ({ checksumAddress: e, parameters: t, values: n }) {
            let r = [];
            for (let i = 0; i < t.length; i++)
              r.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: n,
                  value: r,
                }) {
                  let i = tz(n.type);
                  if (i) {
                    let [o, a] = i;
                    return (function (t, n) {
                      let { checksumAddress: r, length: i, parameter: o } = n,
                        a = null === i;
                      if (!Array.isArray(t)) throw new t6(t);
                      if (!a && t.length !== i)
                        throw new t0({
                          expectedLength: i,
                          givenLength: t.length,
                          type: `${o.type}[${i}]`,
                        });
                      let s = !1,
                        c = [];
                      for (let n = 0; n < t.length; n++) {
                        let i = e({
                          checksumAddress: r,
                          parameter: o,
                          value: t[n],
                        });
                        i.dynamic && (s = !0), c.push(i);
                      }
                      if (a || s) {
                        let e = tQ(c);
                        if (a) {
                          let t = tn.oB(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? tn.xW(t, e) : t,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: tn.xW(...c.map(({ encoded: e }) => e)),
                      };
                    })(r, {
                      checksumAddress: t,
                      length: o,
                      parameter: { ...n, type: a },
                    });
                  }
                  if ("tuple" === n.type)
                    return (function (t, n) {
                      let { checksumAddress: r, parameter: i } = n,
                        o = !1,
                        a = [];
                      for (let n = 0; n < i.components.length; n++) {
                        let s = i.components[n],
                          c = Array.isArray(t) ? n : s.name,
                          l = e({
                            checksumAddress: r,
                            parameter: s,
                            value: t[c],
                          });
                        a.push(l), l.dynamic && (o = !0);
                      }
                      return {
                        dynamic: o,
                        encoded: o
                          ? tQ(a)
                          : tn.xW(...a.map(({ encoded: e }) => e)),
                      };
                    })(r, { checksumAddress: t, parameter: n });
                  if ("address" === n.type) {
                    var o = r,
                      a = { checksum: t };
                    let { checksum: e = !1 } = a;
                    return (
                      tC(o, { strict: e }),
                      { dynamic: !1, encoded: tn.Ho(o.toLowerCase()) }
                    );
                  }
                  if ("bool" === n.type) {
                    var s = r;
                    if ("boolean" != typeof s)
                      throw new eq.C(
                        `Invalid boolean value: "${s}" (type: ${typeof s}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: tn.Ho(tn.xb(s)) };
                  }
                  if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                    let e = n.type.startsWith("int"),
                      [, , t = "256"] = tq.exec(n.type) ?? [];
                    return (function (e, { signed: t, size: n }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          i = t ? -r - 1n : 0n;
                        if (e > r || e < i)
                          throw new tn.Ty({
                            max: r.toString(),
                            min: i.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: tn.oB(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(t) });
                  }
                  if (n.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, n] = t.split("bytes"),
                        r = tn.Ej(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 &&
                            (t = tn.M7(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: tn.xW(tn.Ho(tn.oB(r, { size: 32 })), t),
                          }
                        );
                      }
                      if (r !== Number.parseInt(n, 10))
                        throw new t1({
                          expectedSize: Number.parseInt(n, 10),
                          value: e,
                        });
                      return { dynamic: !1, encoded: tn.M7(e) };
                    })(r, { type: n.type });
                  if ("string" === n.type) {
                    var c = r;
                    let e = tn.sH(c),
                      t = Math.ceil(tn.Ej(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(tn.M7(tn.di(e, 32 * r, (r + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: tn.xW(
                        tn.M7(tn.oB(tn.Ej(e), { size: 32 })),
                        ...n
                      ),
                    };
                  }
                  throw new t2(n.type);
                })({ checksumAddress: e, parameter: t[i], value: n[i] })
              );
            return r;
          })({ checksumAddress: r, parameters: e, values: t })
        );
        return 0 === i.length ? "0x" : i;
      }
      function t_(e, t) {
        if (e.length !== t.length)
          throw new t5({ expectedLength: e.length, givenLength: t.length });
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let i = e[r],
            o = t[r];
          n.push(t_.encode(i, o));
        }
        return tn.xW(...n);
      }
      function tZ(e) {
        return (Array.isArray(e) && "string" == typeof e[0]) ||
          "string" == typeof e
          ? (function (e) {
              let t = [];
              if ("string" == typeof e) {
                let n = (0, eD.NV)(e),
                  r = n.length;
                for (let e = 0; e < r; e++)
                  t.push((0, eD.Pj)(n[e], { modifiers: eN.Dv }));
              } else {
                let n = (0, eU.e)(e),
                  r = e.length;
                for (let i = 0; i < r; i++) {
                  let r = e[i];
                  if ((0, eN.WL)(r)) continue;
                  let o = (0, eD.NV)(r),
                    a = o.length;
                  for (let e = 0; e < a; e++)
                    t.push((0, eD.Pj)(o[e], { modifiers: eN.Dv, structs: n }));
                }
              }
              if (0 === t.length) throw new tN.A9({ params: e });
              return t;
            })(e)
          : e;
      }
      (t_ || (t_ = {})).encode = function e(t, n, r = !1) {
        if ("address" === t) return tC(n), tn.Ho(n.toLowerCase(), 32 * !!r);
        if ("string" === t) return tn.sH(n);
        if ("bytes" === t) return n;
        if ("bool" === t) return tn.Ho(tn.xb(n), r ? 32 : 1);
        let i = t.match(tq);
        if (i) {
          let [e, t, o = "256"] = i,
            a = Number.parseInt(o, 10) / 8;
          return tn.oB(n, { size: r ? 32 : a, signed: "int" === t });
        }
        let o = t.match(tL);
        if (o) {
          let [e, t] = o;
          if (Number.parseInt(t, 10) !== (n.length - 2) / 2)
            throw new t1({ expectedSize: Number.parseInt(t, 10), value: n });
          return tn.M7(n, 32 * !!r);
        }
        let a = t.match(tD);
        if (a && Array.isArray(n)) {
          let [t, r] = a,
            i = [];
          for (let t = 0; t < n.length; t++) i.push(e(r, n[t], !0));
          return 0 === i.length ? "0x" : tn.xW(...i);
        }
        throw new t2(t);
      };
      class tY extends eq.C {
        constructor({ data: e, parameters: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [`Params: (${tU.Q(t)})`, `Data:   ${e} (${n} bytes)`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.DataSizeTooSmallError",
            });
        }
      }
      class tX extends eq.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ZeroDataError",
            });
        }
      }
      class t0 extends eq.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class t1 extends eq.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${tn.Ej(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class t5 extends eq.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class t6 extends eq.C {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class t2 extends eq.C {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function t8(e, t = {}) {
        return tO(e, t);
      }
      function t3(e, t, n) {
        let r = tM(e, t, n);
        if ("function" !== r.type) throw new tj({ name: t, type: "function" });
        return r;
      }
      let t9 = "0x0000000000000000000000000000000000000000";
      var t4 = n(54560);
      async function t7(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            calls: i,
            stateOverrides: a,
            traceAssetChanges: s,
            traceTransfers: c,
            validation: l,
          } = t,
          u = t.account ? (0, A.J)(t.account) : void 0;
        if (s && !u)
          throw new O.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = u
            ? (function (...e) {
                let [t, n] = (() => {
                    if (Array.isArray(e[0])) {
                      let [t, n] = e;
                      return [
                        (function (e) {
                          let t = e.find((e) => "constructor" === e.type);
                          if (!t) throw new tj({ name: "constructor" });
                          return t;
                        })(t),
                        n,
                      ];
                    }
                    return e;
                  })(),
                  { bytecode: r, args: i } = n;
                return tn.xW(
                  r,
                  t.inputs?.length && i?.length ? tV(t.inputs, i) : "0x"
                );
              })(tO("constructor(bytes, bytes)"), {
                bytecode: t4.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (...e) {
                    let [t, n = []] = (() => {
                        if (Array.isArray(e[0])) {
                          let [t, n, r] = e;
                          return [t3(t, n, { args: r }), r];
                        }
                        let [t, n] = e;
                        return [t, n];
                      })(),
                      { overloads: r } = t,
                      i = r ? t3([t, ...r], t.name, { args: n }) : t,
                      o = tR(i),
                      a = n.length > 0 ? tV(i.inputs, n) : void 0;
                    return a ? tn.xW(o, a) : o;
                  })(t8("function getBalance(address)"), [u.address]),
                ],
              })
            : void 0,
          f = s
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: n } = await B(e, {
                    account: u.address,
                    ...t,
                    data: t.abi ? (0, o.p)(t) : t.data,
                  });
                  return n.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          h = await eF(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [
              ...(s
                ? [
                    { calls: [{ data: d }], stateOverrides: a },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          t8("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: t9,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t9, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...i, {}].map((e) => ({ ...e, from: u?.address })),
                stateOverrides: a,
              },
              ...(s
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          t8("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: t9,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t9, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [t8("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: t9,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t9, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [
                          t8("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: t9,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t9, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [t8("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: t9,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t9, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: c,
            validation: l,
          }),
          p = s ? h[2] : h[0],
          [b, m, , y, g, w, v, x] = s ? h : [],
          { calls: C, ...E } = p,
          I = C.slice(0, -1) ?? [],
          P = [...(b?.calls ?? []), ...(m?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, X.uU)(e.data) : null
          ),
          k = [...(y?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, X.uU)(e.data) : null
          ),
          S = (w?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          M = (x?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          R = (v?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          T = [];
        for (let [e, t] of k.entries()) {
          let n = P[e];
          if ("bigint" != typeof t || "bigint" != typeof n) continue;
          let r = S[e - 1],
            i = M[e - 1],
            o = R[e - 1],
            a =
              0 === e
                ? {
                    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    decimals: 18,
                    symbol: "ETH",
                  }
                : {
                    address: f[e - 1],
                    decimals: o || r ? Number(r ?? 1) : void 0,
                    symbol: i ?? void 0,
                  };
          T.some((e) => e.token.address === a.address) ||
            T.push({ token: a, value: { pre: n, post: t, diff: t - n } });
        }
        return { assetChanges: T, block: E, results: I };
      }
      async function ne(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            dataSuffix: s,
            functionName: c,
            ...l
          } = t,
          u = l.account ? (0, A.J)(l.account) : e.account,
          d = (0, o.p)({ abi: n, args: a, functionName: c });
        try {
          let { data: o } = await (0, h.T)(
              e,
              v.T,
              "call"
            )({
              batch: !1,
              data: `${d}${s ? s.replace("0x", "") : ""}`,
              to: r,
              ...l,
              account: u,
            }),
            f = (0, i.e)({ abi: n, args: a, functionName: c, data: o || "0x" }),
            p = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: f,
            request: {
              abi: p,
              address: r,
              args: a,
              dataSuffix: s,
              functionName: c,
              ...l,
              account: u,
            },
          };
        } catch (e) {
          throw (0, $.j)(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/simulateContract",
            functionName: c,
            sender: u?.address,
          });
        }
      }
      async function nt(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      let nn =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      class nr extends eq.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc6492.InvalidWrappedSignatureError",
            });
        }
      }
      function ni(e, t = {}) {
        let { recovered: n } = t;
        if (void 0 === e.r || void 0 === e.s || (n && void 0 === e.yParity))
          throw new nc({ signature: e });
        if (e.r < 0n || e.r > tW) throw new nl({ value: e.r });
        if (e.s < 0n || e.s > tW) throw new nu({ value: e.s });
        if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
          throw new nd({ value: e.yParity });
      }
      function no(e) {
        if (130 !== e.length && 132 !== e.length)
          throw new ns({ signature: e });
        let t = BigInt(tn.di(e, 0, 32)),
          n = BigInt(tn.di(e, 32, 64)),
          r = (() => {
            let t = Number(`0x${e.slice(130)}`);
            if (!Number.isNaN(t))
              try {
                return na(t);
              } catch {
                throw new nd({ value: t });
              }
          })();
        return void 0 === r ? { r: t, s: n } : { r: t, s: n, yParity: r };
      }
      function na(e) {
        if (0 === e || 27 === e) return 0;
        if (1 === e || 28 === e) return 1;
        if (e >= 35) return +(e % 2 == 0);
        throw new nf({ value: e });
      }
      class ns extends eq.C {
        constructor({ signature: e }) {
          super(`Value \`${e}\` is an invalid signature size.`, {
            metaMessages: [
              "Expected: 64 bytes or 65 bytes.",
              `Received ${tn.Ej(tn.HT(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSerializedSizeError",
            });
        }
      }
      class nc extends eq.C {
        constructor({ signature: e }) {
          super(
            `Signature \`${tc.A(
              e
            )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.MissingPropertiesError",
            });
        }
      }
      class nl extends eq.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidRError",
            });
        }
      }
      class nu extends eq.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSError",
            });
        }
      }
      class nd extends eq.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidYParityError",
            });
        }
      }
      class nf extends eq.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidVError",
            });
        }
      }
      let nh = tZ(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
      function np(e) {
        if ("string" == typeof e) {
          if (
            "0x8010801080108010801080108010801080108010801080108010801080108010" !==
            tn.di(e, -32)
          )
            throw new nb(e);
        } else ni(e.authorization);
      }
      class nb extends eq.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc8010.InvalidWrappedSignatureError",
            });
        }
      }
      var nm = n(6867),
        ny = n(77608),
        ng = n(51255);
      async function nw({ address: e, authorization: t, signature: n }) {
        return (0, er.h)(
          (0, ny.b)(e),
          await (0, ng.g)({ authorization: t, signature: n })
        );
      }
      var nv = n(60587),
        nA = n(88423),
        nx = n(20837);
      async function nC(e, t) {
        let {
            address: n,
            hash: r,
            erc6492VerifierAddress: i = t.universalSignatureVerifierAddress ??
              e.chain?.contracts?.erc6492Verifier?.address,
            multicallAddress: o = t.multicallAddress ??
              e.chain?.contracts?.multicall3?.address,
          } = t,
          a = (() => {
            let e = t.signature;
            return (0, nv.q)(e)
              ? e
              : "object" == typeof e && "r" in e && "s" in e
              ? (function ({ r: e, s: t, to: n = "hex", v: r, yParity: i }) {
                  let o = (() => {
                      if (0 === i || 1 === i) return i;
                      if (r && (27n === r || 28n === r || r >= 35n))
                        return +(r % 2n === 0n);
                      throw Error("Invalid `v` or `yParity` value");
                    })(),
                    a = `0x${new nx.secp256k1.Signature(
                      (0, X.uU)(e),
                      (0, X.uU)(t)
                    ).toCompactHex()}${0 === o ? "1b" : "1c"}`;
                  return "hex" === n ? a : (0, R.aT)(a);
                })(e)
              : (0, c.My)(e);
          })();
        try {
          if (
            (function (e) {
              try {
                return np(e), !0;
              } catch {
                return !1;
              }
            })(a)
          )
            return await nE(e, { ...t, multicallAddress: o, signature: a });
          return await nI(e, { ...t, verifierAddress: i, signature: a });
        } catch (e) {
          try {
            if (
              (0, er.h)(
                (0, ny.b)(n),
                await (0, nA.x)({ hash: r, signature: a })
              )
            )
              return !0;
          } catch {}
          if (e instanceof nP) return !1;
          throw e;
        }
      }
      async function nE(e, t) {
        let {
            address: n,
            blockNumber: i,
            blockTag: a,
            hash: s,
            multicallAddress: l,
          } = t,
          {
            authorization: u,
            data: d,
            signature: f,
            to: b,
          } = (function (e) {
            np(e);
            let t = tn.Ro(tn.di(e, -64, -32)),
              n = tn.di(e, -t - 64, -64),
              r = tn.di(e, 0, -t - 64),
              [i, o, a] = (function (e, t, n = {}) {
                let { as: r = "Array", checksumAddress: i = !1 } = n,
                  o = "string" == typeof t ? td(t) : t,
                  a = (function (e, { recursiveReadLimit: t = 8192 } = {}) {
                    let n = Object.create(tG);
                    return (
                      (n.bytes = e),
                      (n.dataView = new DataView(
                        e.buffer,
                        e.byteOffset,
                        e.byteLength
                      )),
                      (n.positionReadCount = new Map()),
                      (n.recursiveReadLimit = t),
                      n
                    );
                  })(o);
                if (0 === tf(o) && e.length > 0) throw new tX();
                if (tf(o) && 32 > tf(o))
                  throw new tY({
                    data: "string" == typeof t ? t : tn.uK(t),
                    parameters: e,
                    size: tf(o),
                  });
                let s = 0,
                  c = "Array" === r ? [] : {};
                for (let t = 0; t < e.length; ++t) {
                  let n = e[t];
                  a.setPosition(s);
                  let [o, l] = (function e(t, n, r) {
                    let { checksumAddress: i, staticPosition: o } = r,
                      a = tz(n.type);
                    if (a) {
                      let [r, s] = a;
                      return (function (t, n, r) {
                        let {
                          checksumAddress: i,
                          length: o,
                          staticPosition: a,
                        } = r;
                        if (!o) {
                          let r = a + th(t.readBytes(32)),
                            o = r + 32;
                          t.setPosition(r);
                          let s = th(t.readBytes(32)),
                            c = t$(n),
                            l = 0,
                            u = [];
                          for (let r = 0; r < s; ++r) {
                            t.setPosition(o + (c ? 32 * r : l));
                            let [a, s] = e(t, n, {
                              checksumAddress: i,
                              staticPosition: o,
                            });
                            (l += s), u.push(a);
                          }
                          return t.setPosition(a + 32), [u, 32];
                        }
                        if (t$(n)) {
                          let r = a + th(t.readBytes(32)),
                            s = [];
                          for (let a = 0; a < o; ++a) {
                            t.setPosition(r + 32 * a);
                            let [o] = e(t, n, {
                              checksumAddress: i,
                              staticPosition: r,
                            });
                            s.push(o);
                          }
                          return t.setPosition(a + 32), [s, 32];
                        }
                        let s = 0,
                          c = [];
                        for (let r = 0; r < o; ++r) {
                          let [r, o] = e(t, n, {
                            checksumAddress: i,
                            staticPosition: a + s,
                          });
                          (s += o), c.push(r);
                        }
                        return [c, s];
                      })(
                        t,
                        { ...n, type: s },
                        { checksumAddress: i, length: r, staticPosition: o }
                      );
                    }
                    if ("tuple" === n.type)
                      return (function (t, n, r) {
                        let { checksumAddress: i, staticPosition: o } = r,
                          a =
                            0 === n.components.length ||
                            n.components.some(({ name: e }) => !e),
                          s = a ? [] : {},
                          c = 0;
                        if (t$(n)) {
                          let r = o + th(t.readBytes(32));
                          for (let o = 0; o < n.components.length; ++o) {
                            let l = n.components[o];
                            t.setPosition(r + c);
                            let [u, d] = e(t, l, {
                              checksumAddress: i,
                              staticPosition: r,
                            });
                            (c += d), (s[a ? o : l?.name] = u);
                          }
                          return t.setPosition(o + 32), [s, 32];
                        }
                        for (let r = 0; r < n.components.length; ++r) {
                          let l = n.components[r],
                            [u, d] = e(t, l, {
                              checksumAddress: i,
                              staticPosition: o,
                            });
                          (s[a ? r : l?.name] = u), (c += d);
                        }
                        return [s, c];
                      })(t, n, { checksumAddress: i, staticPosition: o });
                    if ("address" === n.type)
                      return (function (e, t = {}) {
                        let n,
                          { checksum: r = !1 } = t,
                          i = e.readBytes(32);
                        return [
                          ((n = tn.uK(
                            (function (e, t, n, r = {}) {
                              let { strict: i } = r;
                              !1;
                              let o = e.slice(-20, void 0);
                              return (
                                i &&
                                  (function (e, t, n) {
                                    if (
                                      "number" == typeof t &&
                                      "number" == typeof n &&
                                      tf(e) !== n - t
                                    )
                                      throw new ty({
                                        offset: n,
                                        position: "end",
                                        size: tf(e),
                                      });
                                  })(o, -20, void 0),
                                o
                              );
                            })(i, -20)
                          )),
                          r ? tE(n) : n),
                          32,
                        ];
                      })(t, { checksum: i });
                    if ("bool" === n.type)
                      return [
                        (function (e, t = {}) {
                          let { size: n } = t,
                            r = e;
                          if (
                            (void 0 !== n && (tr(r, n), (r = tp(r))),
                            r.length > 1 || r[0] > 1)
                          )
                            throw new tb(r);
                          return !!r[0];
                        })(t.readBytes(32), { size: 32 }),
                        32,
                      ];
                    if (n.type.startsWith("bytes"))
                      return (function (e, t, { staticPosition: n }) {
                        let [r, i] = t.type.split("bytes");
                        if (!i) {
                          let t = th(e.readBytes(32));
                          e.setPosition(n + t);
                          let r = th(e.readBytes(32));
                          if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                          let i = e.readBytes(r);
                          return e.setPosition(n + 32), [tn.uK(i), 32];
                        }
                        return [
                          tn.uK(e.readBytes(Number.parseInt(i, 10), 32)),
                          32,
                        ];
                      })(t, n, { staticPosition: o });
                    if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                      var s = t,
                        c = n;
                      let e = c.type.startsWith("int"),
                        r = Number.parseInt(
                          c.type.split("int")[1] || "256",
                          10
                        ),
                        i = s.readBytes(32);
                      return [
                        r > 48
                          ? (function (e, t = {}) {
                              let { size: n } = t;
                              void 0 !== n && tr(e, n);
                              let r = tn.uK(e, t);
                              return tn.Dg(r, t);
                            })(i, { signed: e })
                          : th(i, { signed: e }),
                        32,
                      ];
                    }
                    if ("string" === n.type)
                      return (function (e, { staticPosition: t }) {
                        let n = th(e.readBytes(32));
                        e.setPosition(t + n);
                        let r = th(e.readBytes(32));
                        if (0 === r) return e.setPosition(t + 32), ["", 32];
                        let i = (function (e, t = {}) {
                          let { size: n } = t,
                            r = e;
                          return (
                            void 0 !== n &&
                              (tr(r, n), (r = ta(r, { dir: "right" }))),
                            tl.decode(r)
                          );
                        })(tp(e.readBytes(r, 32)));
                        return e.setPosition(t + 32), [i, 32];
                      })(t, { staticPosition: o });
                    throw new t2(n.type);
                  })(a, n, { checksumAddress: i, staticPosition: 0 });
                  (s += l), "Array" === r ? c.push(o) : (c[n.name ?? t] = o);
                }
                return c;
              })(nh, n);
            return {
              authorization: (function (e, t = {}) {
                return "string" == typeof e.chainId
                  ? (function (e) {
                      let { address: t, chainId: n, nonce: r } = e,
                        i = (function (e) {
                          if (void 0 !== e.r && void 0 !== e.s) {
                            var t = e;
                            let n = (() => {
                              var e;
                              if ("string" == typeof t) return no(t);
                              if (t instanceof Uint8Array) return no(tn.uK(t));
                              return "string" == typeof t.r
                                ? (function (e) {
                                    let t = (() => {
                                      let t = e.v ? Number(e.v) : void 0,
                                        n = e.yParity
                                          ? Number(e.yParity)
                                          : void 0;
                                      if (
                                        ("number" == typeof t &&
                                          "number" != typeof n &&
                                          (n = na(t)),
                                        "number" != typeof n)
                                      )
                                        throw new nd({ value: e.yParity });
                                      return n;
                                    })();
                                    return {
                                      r: BigInt(e.r),
                                      s: BigInt(e.s),
                                      yParity: t,
                                    };
                                  })(t)
                                : t.v
                                ? { r: (e = t).r, s: e.s, yParity: na(e.v) }
                                : {
                                    r: t.r,
                                    s: t.s,
                                    ...(void 0 !== t.yParity
                                      ? { yParity: t.yParity }
                                      : {}),
                                  };
                            })();
                            return ni(n), n;
                          }
                        })(e);
                      return {
                        address: t,
                        chainId: Number(n),
                        nonce: BigInt(r),
                        ...i,
                      };
                    })(e)
                  : { ...e, ...t.signature };
              })({
                address: i.delegation,
                chainId: Number(i.chainId),
                nonce: i.nonce,
                yParity: i.yParity,
                r: i.r,
                s: i.s,
              }),
              signature: r,
              ...(a && "0x" !== a ? { data: a, to: o } : {}),
            };
          })(t.signature);
        if (
          (await (0, en.Q)(e, { address: n, blockNumber: i, blockTag: a })) ===
          (0, eO.aP)(["0xef0100", u.address])
        )
          return await nB(e, {
            address: n,
            blockNumber: i,
            blockTag: a,
            hash: s,
            signature: f,
          });
        let m = {
          address: u.address,
          chainId: Number(u.chainId),
          nonce: Number(u.nonce),
          r: (0, c.cK)(u.r, { size: 32 }),
          s: (0, c.cK)(u.s, { size: 32 }),
          yParity: u.yParity,
        };
        if (!(await nw({ address: n, authorization: m }))) throw new nP();
        let y = await (0, h.T)(
            e,
            p.J,
            "readContract"
          )({
            ...(l ? { address: l } : { code: t4.Ez }),
            authorizationList: [m],
            abi: r.v2,
            blockNumber: i,
            blockTag: "pending",
            functionName: "aggregate3",
            args: [
              [
                ...(d
                  ? [{ allowFailure: !0, target: b ?? n, callData: d }]
                  : []),
                {
                  allowFailure: !0,
                  target: n,
                  callData: (0, o.p)({
                    abi: r.UW,
                    functionName: "isValidSignature",
                    args: [s, f],
                  }),
                },
              ],
            ],
          }),
          g = y[y.length - 1]?.returnData;
        if (g?.startsWith("0x1626ba7e")) return !0;
        throw new nP();
      }
      async function nI(e, t) {
        let {
            address: n,
            factory: i,
            factoryData: a,
            hash: s,
            signature: c,
            verifierAddress: l,
            ...u
          } = t,
          d = await (async () => {
            if (
              (!i && !a) ||
              (function (e) {
                try {
                  if (tn.di(e, -32) !== nn) throw new nr(e);
                  return !0;
                } catch {
                  return !1;
                }
              })(c)
            )
              return c;
            let {
              data: e,
              signature: t,
              to: n,
            } = { data: a, signature: c, to: i };
            return tn.xW(tV(tZ("address, bytes, bytes"), [n, e, t]), nn);
          })(),
          f = l
            ? {
                to: l,
                data: (0, o.p)({
                  abi: r.E5,
                  functionName: "isValidSig",
                  args: [n, s, d],
                }),
                ...u,
              }
            : {
                data: (0, nm.m)({
                  abi: r.E5,
                  args: [n, s, d],
                  bytecode: t4.fT,
                }),
                ...u,
              },
          { data: p } = await (0, h.T)(
            e,
            v.T,
            "call"
          )(f).catch((e) => {
            if (e instanceof ek.zX) throw new nP();
            throw e;
          });
        if ((0, X.Nx)(p ?? "0x0")) return !0;
        throw new nP();
      }
      async function nB(e, t) {
        let {
          address: n,
          blockNumber: i,
          blockTag: o,
          hash: a,
          signature: s,
        } = t;
        if (
          (
            await (0, h.T)(
              e,
              p.J,
              "readContract"
            )({
              address: n,
              abi: r.UW,
              args: [a, s],
              blockNumber: i,
              blockTag: o,
              functionName: "isValidSignature",
            }).catch((e) => {
              if (e instanceof ek.bG) throw new nP();
              throw e;
            })
          ).startsWith("0x1626ba7e")
        )
          return !0;
        throw new nP();
      }
      class nP extends Error {}
      var nk = n(82323);
      async function nS(
        e,
        {
          address: t,
          message: n,
          factory: r,
          factoryData: i,
          signature: o,
          ...a
        }
      ) {
        return nC(e, {
          address: t,
          factory: r,
          factoryData: i,
          hash: (0, nk.A)(n),
          signature: o,
          ...a,
        });
      }
      var nO = n(14358);
      async function nM(e, t) {
        let {
          address: n,
          factory: r,
          factoryData: i,
          signature: o,
          message: a,
          primaryType: s,
          types: c,
          domain: l,
          ...u
        } = t;
        return nC(e, {
          address: n,
          factory: r,
          factoryData: i,
          hash: (0, nO.Zh)({ message: a, primaryType: s, types: c, domain: l }),
          signature: o,
          ...u,
        });
      }
      var nR = n(52497),
        nT = n(5766),
        nF = n(87639),
        nj = n(94788),
        nN = n(59350),
        nU = n(73168);
      let nD =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        nL =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var nq = n(24784);
      async function nW(e, t) {
        let {
            address: n,
            domain: r,
            message: i,
            nonce: o,
            scheme: a,
            signature: s,
            time: c = new Date(),
            ...l
          } = t,
          u = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(nD)?.groups ?? {},
              {
                chainId: i,
                expirationTime: o,
                issuedAt: a,
                notBefore: s,
                requestId: c,
                ...l
              } = e.match(nL)?.groups ?? {},
              u = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...l,
              ...(i ? { chainId: Number(i) } : {}),
              ...(o ? { expirationTime: new Date(o) } : {}),
              ...(a ? { issuedAt: new Date(a) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(u ? { resources: u } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(i);
        if (
          !u.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: i,
              scheme: o,
              time: a = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (i && r.nonce !== i) ||
              (o && r.scheme !== o) ||
              (r.expirationTime && a >= r.expirationTime) ||
              (r.notBefore && a < r.notBefore)
            )
              return !1;
            try {
              if (
                !r.address ||
                !(0, nq.P)(r.address, { strict: !1 }) ||
                (t && !(0, er.h)(r.address, t))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: u,
            nonce: o,
            scheme: a,
            time: c,
          })
        )
          return !1;
        let d = (0, nk.A)(i);
        return nC(e, { address: u.address, hash: d, signature: s, ...l });
      }
      var nQ = n(26709),
        nz = n(72707);
      function n$(e) {
        return {
          call: (t) => (0, v.T)(e, t),
          createAccessList: (t) => B(e, t),
          createBlockFilter: () => k(e),
          createContractEventFilter: (t) => W(e, t),
          createEventFilter: (t) => Q(e, t),
          createPendingTransactionFilter: () => z(e),
          estimateContractGas: (t) => H(e, t),
          estimateGas: (t) => (0, G.Q)(e, t),
          getBalance: (t) => (0, V.r)(e, t),
          getBlobBaseFee: () => _(e),
          getBlock: (t) => (0, Z.g)(e, t),
          getBlockNumber: (t) => (0, Y.G)(e, t),
          getBlockTransactionCount: (t) => ee(e, t),
          getBytecode: (t) => (0, en.Q)(e, t),
          getChainId: () => (0, et.T)(e),
          getCode: (t) => (0, en.Q)(e, t),
          getContractEvents: (t) => ef(e, t),
          getEip712Domain: (t) => ep(e, t),
          getEnsAddress: (t) => b(e, t),
          getEnsAvatar: (t) => (0, m.i)(e, t),
          getEnsName: (t) => (0, y.s)(e, t),
          getEnsResolver: (t) => g(e, t),
          getEnsText: (t) => (0, w.m)(e, t),
          getFeeHistory: (t) => em(e, t),
          estimateFeesPerGas: (t) => (0, K._)(e, t),
          getFilterChanges: (t) => ey(e, t),
          getFilterLogs: (t) => eg(e, t),
          getGasPrice: () => (0, ew.L)(e),
          getLogs: (t) => ed(e, t),
          getProof: (t) => ev(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, J.b)(e, t),
          getStorageAt: (t) => eA(e, t),
          getTransaction: (t) => (0, ex.x)(e, t),
          getTransactionConfirmations: (t) => eC(e, t),
          getTransactionCount: (t) => (0, eE.y)(e, t),
          getTransactionReceipt: (t) => (0, eI.h)(e, t),
          multicall: (t) => (0, eB.C)(e, t),
          prepareTransactionRequest: (t) => (0, nQ.ft)(e, t),
          readContract: (t) => (0, p.J)(e, t),
          sendRawTransaction: (t) => (0, nz.L)(e, t),
          simulate: (t) => eF(e, t),
          simulateBlocks: (t) => eF(e, t),
          simulateCalls: (t) => t7(e, t),
          simulateContract: (t) => ne(e, t),
          verifyHash: (t) => nC(e, t),
          verifyMessage: (t) => nS(e, t),
          verifySiweMessage: (t) => nW(e, t),
          verifyTypedData: (t) => nM(e, t),
          uninstallFilter: (t) => nt(e, t),
          waitForTransactionReceipt: (t) => (0, nR.n)(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = e.experimental_blockTag ?? "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: i,
                onError: o,
                includeTransactions: a,
                poll: s,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let l,
                u,
                d,
                f,
                p =
                  void 0 !== s
                    ? s
                    : "webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type)),
                b = a ?? !1;
              return p
                ? (() => {
                    let a = (0, nN.A)(["watchBlocks", e.uid, t, n, r, b, c]);
                    return (0, nF.lB)(a, { onBlock: i, onError: o }, (i) =>
                      (0, nj.w)(
                        async () => {
                          try {
                            let r = await (0, h.T)(
                              e,
                              Z.g,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: b });
                            if (null !== r.number && l?.number != null) {
                              if (r.number === l.number) return;
                              if (r.number - l.number > 1 && n)
                                for (
                                  let t = l?.number + 1n;
                                  t < r.number;
                                  t++
                                ) {
                                  let n = await (0, h.T)(
                                    e,
                                    Z.g,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: b });
                                  i.onBlock(n, l), (l = n);
                                }
                            }
                            (l?.number == null ||
                              ("pending" === t && r?.number == null) ||
                              (null !== r.number && r.number > l.number)) &&
                              (i.onBlock(r, l), (l = r));
                          } catch (e) {
                            i.onError?.(e);
                          }
                        },
                        { emitOnBegin: r, interval: c }
                      )
                    );
                  })()
                : ((u = !0),
                  (d = !0),
                  (f = () => (u = !1)),
                  (async () => {
                    try {
                      r &&
                        (0, h.T)(
                          e,
                          Z.g,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: b })
                          .then((e) => {
                            u && d && (i(e, void 0), (d = !1));
                          })
                          .catch(o);
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await n.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!u) return;
                            let n = await (0, h.T)(
                              e,
                              Z.g,
                              "getBlock"
                            )({
                              blockNumber: t.result?.number,
                              includeTransactions: b,
                            }).catch(() => {});
                            u && (i(n, l), (d = !1), (l = n));
                          },
                          onError(e) {
                            o?.(e);
                          },
                        });
                      (f = a), u || f();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => f());
            })(e, t),
          watchBlockNumber: (t) => (0, nT.q)(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: n,
                address: r,
                args: i,
                batch: o = !0,
                eventName: a,
                fromBlock: s,
                onError: c,
                onLogs: l,
                poll: u,
                pollingInterval: d = e.pollingInterval,
                strict: f,
              } = t;
              return (
                void 0 !== u
                  ? u
                  : "bigint" == typeof s ||
                    ("webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type)))
              )
                ? (() => {
                    let t = f ?? !1,
                      u = (0, nN.A)([
                        "watchContractEvent",
                        r,
                        i,
                        o,
                        e.uid,
                        a,
                        d,
                        t,
                        s,
                      ]);
                    return (0, nF.lB)(u, { onLogs: l, onError: c }, (c) => {
                      let l, u;
                      void 0 !== s && (l = s - 1n);
                      let f = !1,
                        p = (0, nj.w)(
                          async () => {
                            if (!f) {
                              try {
                                u = await (0, h.T)(
                                  e,
                                  W,
                                  "createContractEventFilter"
                                )({
                                  abi: n,
                                  address: r,
                                  args: i,
                                  eventName: a,
                                  strict: t,
                                  fromBlock: s,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let s;
                              if (u)
                                s = await (0, h.T)(
                                  e,
                                  ey,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let o = await (0, h.T)(
                                  e,
                                  Y.G,
                                  "getBlockNumber"
                                )({});
                                (s =
                                  l && l < o
                                    ? await (0, h.T)(
                                        e,
                                        ef,
                                        "getContractEvents"
                                      )({
                                        abi: n,
                                        address: r,
                                        args: i,
                                        eventName: a,
                                        fromBlock: l + 1n,
                                        toBlock: o,
                                        strict: t,
                                      })
                                    : []),
                                  (l = o);
                              }
                              if (0 === s.length) return;
                              if (o) c.onLogs(s);
                              else for (let e of s) c.onLogs([e]);
                            } catch (e) {
                              u && e instanceof nU.Di && (f = !1),
                                c.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: d }
                        );
                      return async () => {
                        u &&
                          (await (0, h.T)(
                            e,
                            nt,
                            "uninstallFilter"
                          )({ filter: u })),
                          p();
                      };
                    });
                  })()
                : (() => {
                    let t = (0, nN.A)([
                        "watchContractEvent",
                        r,
                        i,
                        o,
                        e.uid,
                        a,
                        d,
                        f ?? !1,
                      ]),
                      s = !0,
                      u = () => (s = !1);
                    return (0, nF.lB)(
                      t,
                      { onLogs: l, onError: c },
                      (t) => (
                        (async () => {
                          try {
                            let o = (() => {
                                if ("fallback" === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) =>
                                      "webSocket" === e.config.type ||
                                      "ipc" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              c = a ? L({ abi: n, eventName: a, args: i }) : [],
                              { unsubscribe: l } = await o.subscribe({
                                params: ["logs", { address: r, topics: c }],
                                onData(e) {
                                  if (!s) return;
                                  let r = e.result;
                                  try {
                                    let { eventName: e, args: i } = ec({
                                        abi: n,
                                        data: r.data,
                                        topics: r.topics,
                                        strict: f,
                                      }),
                                      o = (0, eu.e)(r, {
                                        args: i,
                                        eventName: e,
                                      });
                                    t.onLogs([o]);
                                  } catch (o) {
                                    let e, n;
                                    if (
                                      o instanceof S.fo ||
                                      o instanceof S.l3
                                    ) {
                                      if (f) return;
                                      (e = o.abiItem.name),
                                        (n = o.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let i = (0, eu.e)(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([i]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (u = l), s || u();
                          } catch (e) {
                            c?.(e);
                          }
                        })(),
                        () => u()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: i,
                events: o,
                fromBlock: a,
                onError: s,
                onLogs: c,
                poll: l,
                pollingInterval: u = e.pollingInterval,
                strict: d,
              }
            ) {
              let f,
                p,
                b =
                  void 0 !== l
                    ? l
                    : "bigint" == typeof a ||
                      ("webSocket" !== e.transport.type &&
                        "ipc" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          ("webSocket" !==
                            e.transport.transports[0].config.type &&
                            "ipc" !== e.transport.transports[0].config.type))),
                m = d ?? !1;
              return b
                ? (() => {
                    let l = (0, nN.A)(["watchEvent", t, n, r, e.uid, i, u, a]);
                    return (0, nF.lB)(l, { onLogs: c, onError: s }, (s) => {
                      let c, l;
                      void 0 !== a && (c = a - 1n);
                      let d = !1,
                        f = (0, nj.w)(
                          async () => {
                            if (!d) {
                              try {
                                l = await (0, h.T)(
                                  e,
                                  Q,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: i,
                                  events: o,
                                  strict: m,
                                  fromBlock: a,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let a;
                              if (l)
                                a = await (0, h.T)(
                                  e,
                                  ey,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                let r = await (0, h.T)(
                                  e,
                                  Y.G,
                                  "getBlockNumber"
                                )({});
                                (a =
                                  c && c !== r
                                    ? await (0, h.T)(
                                        e,
                                        ed,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: i,
                                        events: o,
                                        fromBlock: c + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (c = r);
                              }
                              if (0 === a.length) return;
                              if (r) s.onLogs(a);
                              else for (let e of a) s.onLogs([e]);
                            } catch (e) {
                              l && e instanceof nU.Di && (d = !1),
                                s.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: u }
                        );
                      return async () => {
                        l &&
                          (await (0, h.T)(
                            e,
                            nt,
                            "uninstallFilter"
                          )({ filter: l })),
                          f();
                      };
                    });
                  })()
                : ((f = !0),
                  (p = () => (f = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        a = o ?? (i ? [i] : void 0),
                        l = [];
                      a &&
                        ((l = [
                          a.flatMap((e) =>
                            L({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        i && (l = l[0]));
                      let { unsubscribe: u } = await r.subscribe({
                        params: ["logs", { address: t, topics: l }],
                        onData(e) {
                          if (!f) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = ec({
                                abi: a ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              r = (0, eu.e)(t, { args: n, eventName: e });
                            c([r]);
                          } catch (i) {
                            let e, n;
                            if (i instanceof S.fo || i instanceof S.l3) {
                              if (d) return;
                              (e = i.abiItem.name),
                                (n = i.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, eu.e)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            c([r]);
                          }
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (p = u), f || p();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: i,
                pollingInterval: o = e.pollingInterval,
              }
            ) {
              let a, s;
              return (
                void 0 !== i
                  ? i
                  : "webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type
              )
                ? (() => {
                    let i = (0, nN.A)([
                      "watchPendingTransactions",
                      e.uid,
                      t,
                      o,
                    ]);
                    return (0, nF.lB)(
                      i,
                      { onTransactions: r, onError: n },
                      (n) => {
                        let r,
                          i = (0, nj.w)(
                            async () => {
                              try {
                                if (!r)
                                  try {
                                    r = await (0, h.T)(
                                      e,
                                      z,
                                      "createPendingTransactionFilter"
                                    )({});
                                    return;
                                  } catch (e) {
                                    throw (i(), e);
                                  }
                                let o = await (0, h.T)(
                                  e,
                                  ey,
                                  "getFilterChanges"
                                )({ filter: r });
                                if (0 === o.length) return;
                                if (t) n.onTransactions(o);
                                else for (let e of o) n.onTransactions([e]);
                              } catch (e) {
                                n.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: o }
                          );
                        return async () => {
                          r &&
                            (await (0, h.T)(
                              e,
                              nt,
                              "uninstallFilter"
                            )({ filter: r })),
                            i();
                        };
                      }
                    );
                  })()
                : ((a = !0),
                  (s = () => (a = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!a) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (s = t), a || s();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => s());
            })(e, t),
        };
      }
    },
    44191: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => r });
      var r =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "gate": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Gate app",\n          "description": "We recommend putting Gate on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Gate extension",\n          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xportal": {\n      "qr_code": {\n        "step1": {\n          "description": "Put xPortal on your home screen for faster access to your wallet.",\n          "title": "Open the xPortal app"\n        },\n        "step2": {\n          "description": "Create a wallet or import an existing one.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "mew": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",\n          "title": "Open the MEW Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    }\n  },\n\n  "zilpay": {\n    "qr_code": {\n      "step1": {\n        "title": "Open the ZilPay app",\n        "description": "Add ZilPay to your home screen for faster access to your wallet."\n      },\n      "step2": {\n        "title": "Create or Import a Wallet",\n        "description": "Create a new wallet or import an existing one."\n      },\n      "step3": {\n        "title": "Tap the scan button",\n        "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n      }\n    }\n  }\n}\n';
    },
    44332: (e, t, n) => {
      "use strict";
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let i of Object.keys(r))
              i in e && (n[i] = e[i]),
                r[i] &&
                  "object" == typeof r[i] &&
                  !Array.isArray(r[i]) &&
                  t(r[i]);
          })(t(e || {})),
          n
        );
      }
      n.d(t, { o: () => r });
    },
    44352: (e, t, n) => {
      "use strict";
      n.d(t, { A1: () => l, di: () => a, iN: () => u });
      var r = n(66969),
        i = n(60587),
        o = n(16871);
      function a(e, t, n, { strict: r } = {}) {
        return (0, i.q)(e, { strict: !1 })
          ? u(e, t, n, { strict: r })
          : l(e, t, n, { strict: r });
      }
      function s(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, o.E)(e) - 1)
          throw new r.ii({ offset: t, position: "start", size: (0, o.E)(e) });
      }
      function c(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, o.E)(e) !== n - t
        )
          throw new r.ii({ offset: n, position: "end", size: (0, o.E)(e) });
      }
      function l(e, t, n, { strict: r } = {}) {
        s(e, t);
        let i = e.slice(t, n);
        return r && c(i, t, n), i;
      }
      function u(e, t, n, { strict: r } = {}) {
        s(e, t);
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return r && c(i, t, n), i;
      }
    },
    44457: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => s });
      var r = n(43249);
      function i(e, t = {}) {
        let n = (function (e, t = {}) {
          try {
            return e.getClient(t);
          } catch {
            return;
          }
        })(e, t);
        return n?.extend(r.$);
      }
      var o = n(8828),
        a = n(86475);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, a.U)(e);
        return (0, o.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => i(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => i(t, e),
          () => i(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    44964: (e, t, n) => {
      "use strict";
      n.d(t, { J9: () => o, Mc: () => i, fD: () => r });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        i = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    46465: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => r });
      let r = "2.21.2";
    },
    47575: (e, t, n) => {
      "use strict";
      function r(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!i(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!i(n) && !!n.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function i(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: o,
          maxPages: a,
          meta: s,
          networkMode: c,
          queryFn: l,
          queryHash: u,
          queryKey: d,
          queryKeyHashFn: f,
          retry: h,
          retryDelay: p,
          structuralSharing: b,
          getPreviousPageParam: m,
          getNextPageParam: y,
          initialPageParam: g,
          _optimisticResults: w,
          enabled: v,
          notifyOnChangeProps: A,
          placeholderData: x,
          refetchInterval: C,
          refetchIntervalInBackground: E,
          refetchOnMount: I,
          refetchOnReconnect: B,
          refetchOnWindowFocus: P,
          retryOnMount: k,
          select: S,
          staleTime: O,
          suspense: M,
          throwOnError: R,
          config: T,
          connector: F,
          query: j,
          ...N
        } = e;
        return N;
      }
      n.d(t, { Zi: () => r, xO: () => o });
    },
    50879: (e, t, n) => {
      "use strict";
      n.d(t, {
        $s: () => l,
        Kc: () => d,
        Kz: () => u,
        Vg: () => c,
        WA: () => f,
        aO: () => a,
        n3: () => s,
      });
      var r = n(28245),
        i = n(42503),
        o = n(13933);
      function a(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class s extends o.C {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      o.C;
      class c extends o.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      o.C, o.C, o.C;
      class l extends o.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: o,
            data: s,
            gas: c,
            gasPrice: l,
            maxFeePerGas: u,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              a({
                chain: o && `${o?.name} (id: ${o?.id})`,
                from: t?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, r.c)(p)} ${o?.nativeCurrency?.symbol || "ETH"}`,
                data: s,
                gas: c,
                gasPrice: void 0 !== l && `${(0, i.Q)(l)} gwei`,
                maxFeePerGas: void 0 !== u && `${(0, i.Q)(u)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, i.Q)(d)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class u extends o.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: i,
        }) {
          let o = "Transaction";
          n &&
            void 0 !== i &&
            (o = `Transaction at block time "${n}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (o = `Transaction at block hash "${e}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (o = `Transaction at block number "${t}" at index "${i}"`),
            r && (o = `Transaction with hash "${r}"`),
            super(`${o} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends o.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class f extends o.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    51255: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => d });
      var r = n(88423),
        i = n(40290),
        o = n(55563),
        a = n(34561),
        s = n(13933),
        c = n(82427);
      function l(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new s.C("Length is too large.");
      }
      var u = n(2350);
      async function d(e) {
        let { authorization: t, signature: n } = e;
        return (0, r.x)({
          hash: (function (e) {
            let { chainId: t, nonce: n, to: r } = e,
              s = e.contractAddress ?? e.address,
              d = (0, u.S)(
                (0, i.aP)([
                  "0x05",
                  (function (e, t = "hex") {
                    let n = (function e(t) {
                        return Array.isArray(t)
                          ? (function (e) {
                              let t = e.reduce((e, t) => e + t.length, 0),
                                n = l(t);
                              return {
                                length: t <= 55 ? 1 + t : 1 + n + t,
                                encode(r) {
                                  for (let { encode: i } of (t <= 55
                                    ? r.pushByte(192 + t)
                                    : (r.pushByte(247 + n),
                                      1 === n
                                        ? r.pushUint8(t)
                                        : 2 === n
                                        ? r.pushUint16(t)
                                        : 3 === n
                                        ? r.pushUint24(t)
                                        : r.pushUint32(t)),
                                  e))
                                    i(r);
                                },
                              };
                            })(t.map((t) => e(t)))
                          : (function (e) {
                              let t = "string" == typeof e ? (0, o.aT)(e) : e,
                                n = l(t.length);
                              return {
                                length:
                                  1 === t.length && t[0] < 128
                                    ? 1
                                    : t.length <= 55
                                    ? 1 + t.length
                                    : 1 + n + t.length,
                                encode(e) {
                                  (1 === t.length && t[0] < 128) ||
                                    (t.length <= 55
                                      ? e.pushByte(128 + t.length)
                                      : (e.pushByte(183 + n),
                                        1 === n
                                          ? e.pushUint8(t.length)
                                          : 2 === n
                                          ? e.pushUint16(t.length)
                                          : 3 === n
                                          ? e.pushUint24(t.length)
                                          : e.pushUint32(t.length))),
                                    e.pushBytes(t);
                                },
                              };
                            })(t);
                      })(e),
                      r = (0, c.l)(new Uint8Array(n.length));
                    return (n.encode(r), "hex" === t)
                      ? (0, a.My)(r.bytes)
                      : r.bytes;
                  })([t ? (0, a.cK)(t) : "0x", s, n ? (0, a.cK)(n) : "0x"]),
                ])
              );
            return "bytes" === r ? (0, o.aT)(d) : d;
          })(t),
          signature: n ?? t,
        });
      }
    },
    52497: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => p });
      var r = n(86186),
        i = n(50879),
        o = n(72757),
        a = n(87639),
        s = n(98722),
        c = n(37407),
        l = n(59350),
        u = n(60186),
        d = n(83759),
        f = n(1761),
        h = n(5766);
      async function p(e, t) {
        let n,
          p,
          b,
          m,
          y,
          {
            checkReplacement: g = !0,
            confirmations: w = 1,
            hash: v,
            onReplaced: A,
            retryCount: x = 6,
            retryDelay: C = ({ count: e }) => 200 * ~~(1 << e),
            timeout: E = 18e4,
          } = t,
          I = (0, l.A)(["waitForTransactionReceipt", e.uid, v]),
          B = t.pollingInterval
            ? t.pollingInterval
            : e.chain?.experimental_preconfirmationTime
            ? e.chain.experimental_preconfirmationTime
            : e.pollingInterval,
          P = !1,
          { promise: k, resolve: S, reject: O } = (0, s.Y)(),
          M = E
            ? setTimeout(() => {
                y?.(), m?.(), O(new i.WA({ hash: v }));
              }, E)
            : void 0;
        return (
          (m = (0, a.lB)(
            I,
            { onReplaced: A, resolve: S, reject: O },
            async (t) => {
              if (
                (b = await (0, o.T)(
                  e,
                  f.h,
                  "getTransactionReceipt"
                )({ hash: v }).catch(() => void 0)) &&
                w <= 1
              ) {
                clearTimeout(M), t.resolve(b), m?.();
                return;
              }
              y = (0, o.T)(
                e,
                h.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: B,
                async onBlockNumber(a) {
                  let s = (e) => {
                      clearTimeout(M), y?.(), e(), m?.();
                    },
                    l = a;
                  if (!P)
                    try {
                      if (b) {
                        if (
                          w > 1 &&
                          (!b.blockNumber || l - b.blockNumber + 1n < w)
                        )
                          return;
                        s(() => t.resolve(b));
                        return;
                      }
                      if (
                        (g &&
                          !n &&
                          ((P = !0),
                          await (0, c.b)(
                            async () => {
                              (n = await (0, o.T)(
                                e,
                                d.x,
                                "getTransaction"
                              )({ hash: v })).blockNumber &&
                                (l = n.blockNumber);
                            },
                            { delay: C, retryCount: x }
                          ),
                          (P = !1)),
                        (b = await (0, o.T)(
                          e,
                          f.h,
                          "getTransactionReceipt"
                        )({ hash: v })),
                        w > 1 && (!b.blockNumber || l - b.blockNumber + 1n < w))
                      )
                        return;
                      s(() => t.resolve(b));
                    } catch (a) {
                      if (a instanceof i.Kz || a instanceof i.Kc) {
                        if (!n) {
                          P = !1;
                          return;
                        }
                        try {
                          (p = n), (P = !0);
                          let i = await (0, c.b)(
                            () =>
                              (0, o.T)(
                                e,
                                u.g,
                                "getBlock"
                              )({ blockNumber: l, includeTransactions: !0 }),
                            {
                              delay: C,
                              retryCount: x,
                              shouldRetry: ({ error: e }) => e instanceof r.l,
                            }
                          );
                          P = !1;
                          let a = i.transactions.find(
                            ({ from: e, nonce: t }) =>
                              e === p.from && t === p.nonce
                          );
                          if (
                            !a ||
                            ((b = await (0, o.T)(
                              e,
                              f.h,
                              "getTransactionReceipt"
                            )({ hash: a.hash })),
                            w > 1 &&
                              (!b.blockNumber || l - b.blockNumber + 1n < w))
                          )
                            return;
                          let d = "replaced";
                          a.to === p.to &&
                          a.value === p.value &&
                          a.input === p.input
                            ? (d = "repriced")
                            : a.from === a.to &&
                              0n === a.value &&
                              (d = "cancelled"),
                            s(() => {
                              t.onReplaced?.({
                                reason: d,
                                replacedTransaction: p,
                                transaction: a,
                                transactionReceipt: b,
                              }),
                                t.resolve(b);
                            });
                        } catch (e) {
                          s(() => t.reject(e));
                        }
                      } else s(() => t.reject(a));
                    }
                },
              });
            }
          )),
          k
        );
      }
    },
    52623: (e, t, n) => {
      "use strict";
      function r(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      n.d(t, { e: () => r });
    },
    53108: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => i });
      var r = n(34561);
      async function i(
        e,
        { address: t, blockNumber: n, blockTag: i = "latest" }
      ) {
        let o = void 0 !== n ? (0, r.cK)(n) : void 0,
          a = await e.request(
            { method: "eth_getCode", params: [t, o || i] },
            { dedupe: !!o }
          );
        if ("0x" !== a) return a;
      }
    },
    53473: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => d });
      var r = n(13933),
        i = n(4058),
        o = n(73168),
        a = n(34561);
      let s = new (n(20390).A)(8192);
      var c = n(37407),
        l = n(59350),
        u = n(95789);
      function d(
        {
          key: e,
          methods: t,
          name: n,
          request: d,
          retryCount: f = 3,
          retryDelay: h = 150,
          timeout: p,
          type: b,
        },
        m
      ) {
        return {
          config: {
            key: e,
            methods: t,
            name: n,
            request: d,
            retryCount: f,
            retryDelay: h,
            timeout: p,
            type: b,
          },
          request: (function (e, t = {}) {
            return async (n, u = {}) => {
              let {
                  dedupe: d = !1,
                  methods: f,
                  retryDelay: h = 150,
                  retryCount: p = 3,
                  uid: b,
                } = { ...t, ...u },
                { method: m } = n;
              if (
                f?.exclude?.includes(m) ||
                (f?.include && !f.include.includes(m))
              )
                throw new o.ab(Error("method not supported"), { method: m });
              let y = d ? (0, a.i3)(`${b}.${(0, l.A)(n)}`) : void 0;
              return (function (e, { enabled: t = !0, id: n }) {
                if (!t || !n) return e();
                if (s.get(n)) return s.get(n);
                let r = e().finally(() => s.delete(n));
                return s.set(n, r), r;
              })(
                () =>
                  (0, c.b)(
                    async () => {
                      try {
                        return await e(n);
                      } catch (e) {
                        switch (e.code) {
                          case o.XU.code:
                            throw new o.XU(e);
                          case o.CL.code:
                            throw new o.CL(e);
                          case o.Gi.code:
                            throw new o.Gi(e, { method: n.method });
                          case o.D5.code:
                            throw new o.D5(e);
                          case o.bq.code:
                            throw new o.bq(e);
                          case o.Di.code:
                            throw new o.Di(e);
                          case o.hA.code:
                            throw new o.hA(e);
                          case o.qZ.code:
                            throw new o.qZ(e);
                          case o.YW.code:
                            throw new o.YW(e);
                          case o.ab.code:
                            throw new o.ab(e, { method: n.method });
                          case o.s0.code:
                            throw new o.s0(e);
                          case o.xQ.code:
                            throw new o.xQ(e);
                          case o.vx.code:
                            throw new o.vx(e);
                          case o.sV.code:
                            throw new o.sV(e);
                          case o.Sf.code:
                            throw new o.Sf(e);
                          case o.RV.code:
                            throw new o.RV(e);
                          case o.xq.code:
                            throw new o.xq(e);
                          case o.ch.code:
                            throw new o.ch(e);
                          case o.L5.code:
                            throw new o.L5(e);
                          case o.WT.code:
                            throw new o.WT(e);
                          case o.hl.code:
                            throw new o.hl(e);
                          case o.cg.code:
                            throw new o.cg(e);
                          case o.uL.code:
                            throw new o.uL(e);
                          case o.G1.code:
                            throw new o.G1(e);
                          case o.jz.code:
                            throw new o.jz(e);
                          case 5e3:
                            throw new o.vx(e);
                          default:
                            if (e instanceof r.C) throw e;
                            throw new o.MI(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof i.Ci) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/))
                            return 1e3 * Number.parseInt(e, 10);
                        }
                        return ~~(1 << e) * h;
                      },
                      retryCount: p,
                      shouldRetry: ({ error: e }) => {
                        var t;
                        return "code" in (t = e) && "number" == typeof t.code
                          ? -1 === t.code ||
                              t.code === o.s0.code ||
                              t.code === o.bq.code
                          : !(t instanceof i.Ci) ||
                              !t.status ||
                              403 === t.status ||
                              408 === t.status ||
                              413 === t.status ||
                              429 === t.status ||
                              500 === t.status ||
                              502 === t.status ||
                              503 === t.status ||
                              504 === t.status ||
                              !1;
                      },
                    }
                  ),
                { enabled: d, id: y }
              );
            };
          })(d, { methods: t, retryCount: f, retryDelay: h, uid: (0, u.L)() }),
          value: m,
        };
      }
    },
    53560: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => d });
      var r = n(89709),
        i = n(98782),
        o = n(91136),
        a = n(54029),
        s = n(63542);
      class c extends s.C {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      var l = n(98957),
        u = n(39382);
      function d(e) {
        let t = {},
          n = e.length;
        for (let r = 0; r < n; r++) {
          let n = e[r];
          if (!(0, l.WL)(n)) continue;
          let i = (0, l.FO)(n);
          if (!i) throw new a.s7({ signature: n, type: "struct" });
          let o = i.properties.split(";"),
            s = [],
            c = o.length;
          for (let e = 0; e < c; e++) {
            let t = o[e].trim();
            if (!t) continue;
            let n = (0, u.Pj)(t, { type: "struct" });
            s.push(n);
          }
          if (!s.length) throw new a.X9({ signature: n });
          t[i.name] = s;
        }
        let s = {},
          d = Object.entries(t),
          h = d.length;
        for (let e = 0; e < h; e++) {
          let [n, a] = d[e];
          s[n] = (function e(t, n, a = new Set()) {
            let s = [],
              l = t.length;
            for (let d = 0; d < l; d++) {
              let l = t[d];
              if (r.wj.test(l.type)) s.push(l);
              else {
                let t = (0, r.Yv)(f, l.type);
                if (!t?.type) throw new o.nx({ abiParameter: l });
                let { array: d, type: h } = t;
                if (h in n) {
                  if (a.has(h)) throw new c({ type: h });
                  s.push({
                    ...l,
                    type: `tuple${d ?? ""}`,
                    components: e(n[h] ?? [], n, new Set([...a, h])),
                  });
                } else if ((0, u._o)(h)) s.push(l);
                else throw new i.zz({ type: h });
              }
            }
            return s;
          })(a, t);
        }
        return s;
      }
      let f = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    54029: (e, t, n) => {
      "use strict";
      n.d(t, { X9: () => a, s7: () => i, x8: () => o });
      var r = n(63542);
      class i extends r.C {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class o extends r.C {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class a extends r.C {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    54560: (e, t, n) => {
      "use strict";
      n.d(t, { Ez: () => a, LX: () => r, WN: () => i, fT: () => o });
      let r =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        i =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        o =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        a =
          "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033";
    },
    55563: (e, t, n) => {
      "use strict";
      n.d(t, { Af: () => h, ZJ: () => l, aT: () => f });
      var r = n(13933),
        i = n(60587),
        o = n(72427),
        a = n(11914),
        s = n(34561);
      let c = new TextEncoder();
      function l(e, t = {}) {
        var n, r;
        return "number" == typeof e || "bigint" == typeof e
          ? ((n = e), (r = t), f((0, s.cK)(n, r)))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let n = new Uint8Array(1);
              return ((n[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Sl)(n, { size: t.size }),
                  (0, o.eV)(n, { size: t.size }))
                : n;
            })(e, t)
          : (0, i.q)(e)
          ? f(e, t)
          : h(e, t);
      }
      let u = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= u.zero && e <= u.nine
          ? e - u.zero
          : e >= u.A && e <= u.F
          ? e - (u.A - 10)
          : e >= u.a && e <= u.f
          ? e - (u.a - 10)
          : void 0;
      }
      function f(e, t = {}) {
        let n = e;
        t.size &&
          ((0, a.Sl)(n, { size: t.size }),
          (n = (0, o.eV)(n, { dir: "right", size: t.size })));
        let i = n.slice(2);
        i.length % 2 && (i = `0${i}`);
        let s = i.length / 2,
          c = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let n = d(i.charCodeAt(t++)),
            o = d(i.charCodeAt(t++));
          if (void 0 === n || void 0 === o)
            throw new r.C(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          c[e] = 16 * n + o;
        }
        return c;
      }
      function h(e, t = {}) {
        let n = c.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Sl)(n, { size: t.size }),
            (0, o.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    56195: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => o });
      var r = n(38445),
        i = n(34049),
        o = new (class extends r.Q {
          #j;
          #N;
          #U;
          constructor() {
            super(),
              (this.#U = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#N || this.setEventListener(this.#U);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#N?.(), (this.#N = void 0));
          }
          setEventListener(e) {
            (this.#U = e),
              this.#N?.(),
              (this.#N = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#j !== e && ((this.#j = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#j
              ? this.#j
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    56538: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => o });
      var r = n(89709);
      let i = /^tuple(?<array>(\[(\d*)\])*)$/;
      function o(e) {
        let t = "",
          n = e.length;
        for (let o = 0; o < n; o++)
          (t += (function e(t) {
            let n = t.type;
            if (i.test(t.type) && "components" in t) {
              n = "(";
              let o = t.components.length;
              for (let r = 0; r < o; r++)
                (n += e(t.components[r])), r < o - 1 && (n += ", ");
              let a = (0, r.Yv)(i, t.type);
              return (n += `)${a?.array ?? ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[o])),
            o !== n - 1 && (t += ", ");
        return t;
      }
    },
    56674: (e, t, n) => {
      "use strict";
      function r(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: r }
      ) {
        return new Promise((i, o) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              n > 0 &&
                (a = setTimeout(() => {
                  r ? s.abort() : o(t);
                }, n)),
                i(await e({ signal: s?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && o(t), o(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      n.d(t, { w: () => r });
    },
    59350: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            let r = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof t ? t(e, r) : r;
          },
          n
        );
    },
    60186: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => a });
      var r = n(86186),
        i = n(34561),
        o = n(61936);
      async function a(
        e,
        {
          blockHash: t,
          blockNumber: n,
          blockTag: s = e.experimental_blockTag ?? "latest",
          includeTransactions: c,
        } = {}
      ) {
        let l = c ?? !1,
          u = void 0 !== n ? (0, i.cK)(n) : void 0,
          d = null;
        if (
          !(d = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, l] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: "eth_getBlockByNumber", params: [u || s, l] },
                { dedupe: !!u }
              ))
        )
          throw new r.l({ blockHash: t, blockNumber: n });
        return (e.chain?.formatters?.block?.format || o.$)(d);
      }
    },
    60587: (e, t, n) => {
      "use strict";
      function r(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      n.d(t, { q: () => r });
    },
    60869: (e, t, n) => {
      "use strict";
      n.d(t, { sc: () => u });
      var r = n(890);
      class i extends r.Vw {
        constructor(e, t, n, i) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = i),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, r.O8)(this.buffer));
        }
        update(e) {
          (0, r.CC)(this), (e = (0, r.ZJ)(e)), (0, r.DO)(e);
          let { view: t, buffer: n, blockLen: i } = this,
            o = e.length;
          for (let a = 0; a < o; ) {
            let s = Math.min(i - this.pos, o - a);
            if (s === i) {
              let t = (0, r.O8)(e);
              for (; i <= o - a; a += i) this.process(t, a);
              continue;
            }
            n.set(e.subarray(a, a + s), this.pos),
              (this.pos += s),
              (a += s),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, r.CC)(this), (0, r.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: i, isLE: o } = this,
            { pos: a } = this;
          (t[a++] = 128),
            (0, r.uH)(this.buffer.subarray(a)),
            this.padOffset > i - a && (this.process(n, 0), (a = 0));
          for (let e = a; e < i; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let i = BigInt(32),
              o = BigInt(0xffffffff),
              a = Number((n >> i) & o),
              s = Number(n & o),
              c = 4 * !!r,
              l = 4 * !r;
            e.setUint32(t + c, a, r), e.setUint32(t + l, s, r);
          })(n, i - 8, BigInt(8 * this.length), o),
            this.process(n, 0);
          let s = (0, r.O8)(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = c / 4,
            u = this.get();
          if (l > u.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) s.setUint32(4 * e, u[e], o);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: a,
          } = this;
          return (
            (e.destroyed = o),
            (e.finished = i),
            (e.length = r),
            (e.pos = a),
            r % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let o = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]);
      var a = n(20413);
      let s = Uint32Array.from([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        c = new Uint32Array(64);
      class l extends i {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: i, F: o, G: a, H: s } = this;
          return [e, t, n, r, i, o, a, s];
        }
        set(e, t, n, r, i, o, a, s) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | a),
            (this.H = 0 | s);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) c[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              n = c[e - 2],
              i = (0, r.Ow)(t, 7) ^ (0, r.Ow)(t, 18) ^ (t >>> 3),
              o = (0, r.Ow)(n, 17) ^ (0, r.Ow)(n, 19) ^ (n >>> 10);
            c[e] = (o + c[e - 7] + i + c[e - 16]) | 0;
          }
          let { A: n, B: i, C: o, D: a, E: l, F: u, G: d, H: f } = this;
          for (let e = 0; e < 64; e++) {
            var h, p, b, m;
            let t =
                (f +
                  ((0, r.Ow)(l, 6) ^ (0, r.Ow)(l, 11) ^ (0, r.Ow)(l, 25)) +
                  (((h = l) & u) ^ (~h & d)) +
                  s[e] +
                  c[e]) |
                0,
              y =
                (((0, r.Ow)(n, 2) ^ (0, r.Ow)(n, 13) ^ (0, r.Ow)(n, 22)) +
                  (((p = n) & (b = i)) ^ (p & (m = o)) ^ (b & m))) |
                0;
            (f = d),
              (d = u),
              (u = l),
              (l = (a + t) | 0),
              (a = o),
              (o = i),
              (i = n),
              (n = (t + y) | 0);
          }
          (n = (n + this.A) | 0),
            (i = (i + this.B) | 0),
            (o = (o + this.C) | 0),
            (a = (a + this.D) | 0),
            (l = (l + this.E) | 0),
            (u = (u + this.F) | 0),
            (d = (d + this.G) | 0),
            (f = (f + this.H) | 0),
            this.set(n, i, o, a, l, u, d, f);
        }
        roundClean() {
          (0, r.uH)(c);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, r.uH)(this.buffer);
        }
      }
      a.lD(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((e) => BigInt(e))
      );
      let u = (0, r.qj)(() => new l());
    },
    61405: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => o });
      var r = n(86161),
        i = n(96748);
      function o(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, i.s)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...i } = e,
              { connector: o, ...a } = t;
            return (0, r.b)(i, a) && n?.id === o?.id && n?.uid === o?.uid;
          },
        });
      }
    },
    61812: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => p });
      var r = n(4486),
        i = n(54560),
        o = n(97525),
        a = n(13933),
        s = n(35326),
        c = n(32733),
        l = n(30931),
        u = n(71552),
        d = n(93527),
        f = n(72757),
        h = n(25157);
      async function p(e, t) {
        let {
            account: n,
            authorizationList: p,
            allowFailure: b = !0,
            blockNumber: m,
            blockOverrides: y,
            blockTag: g,
            stateOverride: w,
          } = t,
          v = t.contracts,
          {
            batchSize: A = t.batchSize ?? 1024,
            deployless: x = t.deployless ?? !1,
          } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          C = (() => {
            if (t.multicallAddress) return t.multicallAddress;
            if (x) return null;
            if (e.chain)
              return (0, u.M)({
                blockNumber: m,
                chain: e.chain,
                contract: "multicall3",
              });
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          })(),
          E = [[]],
          I = 0,
          B = 0;
        for (let e = 0; e < v.length; e++) {
          let { abi: t, address: r, args: i, functionName: o } = v[e];
          try {
            let e = (0, l.p)({ abi: t, args: i, functionName: o });
            (B += (e.length - 2) / 2),
              A > 0 &&
                B > A &&
                E[I].length > 0 &&
                (I++, (B = (e.length - 2) / 2), (E[I] = [])),
              (E[I] = [...E[I], { allowFailure: !0, callData: e, target: r }]);
          } catch (a) {
            let e = (0, d.j)(a, {
              abi: t,
              address: r,
              args: i,
              docsPath: "/docs/contract/multicall",
              functionName: o,
              sender: n,
            });
            if (!b) throw e;
            E[I] = [...E[I], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let P = await Promise.allSettled(
            E.map((t) =>
              (0, f.T)(
                e,
                h.J,
                "readContract"
              )({
                ...(null === C ? { code: i.Ez } : { address: C }),
                abi: r.v2,
                account: n,
                args: [t],
                authorizationList: p,
                blockNumber: m,
                blockOverrides: y,
                blockTag: g,
                functionName: "aggregate3",
                stateOverride: w,
              })
            )
          ),
          k = [];
        for (let e = 0; e < P.length; e++) {
          let t = P[e];
          if ("rejected" === t.status) {
            if (!b) throw t.reason;
            for (let n = 0; n < E[e].length; n++)
              k.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let n = t.value;
          for (let t = 0; t < n.length; t++) {
            let { returnData: r, success: i } = n[t],
              { callData: a } = E[e][t],
              { abi: l, address: u, functionName: f, args: h } = v[k.length];
            try {
              if ("0x" === a) throw new o.O();
              if (!i) throw new s.$S({ data: r });
              let e = (0, c.e)({ abi: l, args: h, data: r, functionName: f });
              k.push(b ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, d.j)(t, {
                abi: l,
                address: u,
                args: h,
                docsPath: "/docs/contract/multicall",
                functionName: f,
              });
              if (!b) throw e;
              k.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (k.length !== v.length) throw new a.C("multicall results mismatch");
        return k;
      }
    },
    61829: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => o });
      var r = n(13933),
        i = n(88737);
      function o(e, t) {
        let n = (e.details || "").toLowerCase(),
          o = e instanceof r.C ? e.walk((e) => e?.code === i.A7.code) : e;
        return o instanceof r.C
          ? new i.A7({ cause: e, message: o.details })
          : i.A7.nodeMessage.test(n)
          ? new i.A7({ cause: e, message: e.details })
          : i.BG.nodeMessage.test(n)
          ? new i.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.jj.nodeMessage.test(n)
          ? new i.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.K0.nodeMessage.test(n)
          ? new i.K0({ cause: e, nonce: t?.nonce })
          : i.Oh.nodeMessage.test(n)
          ? new i.Oh({ cause: e, nonce: t?.nonce })
          : i.vW.nodeMessage.test(n)
          ? new i.vW({ cause: e, nonce: t?.nonce })
          : i.k5.nodeMessage.test(n)
          ? new i.k5({ cause: e })
          : i.lY.nodeMessage.test(n)
          ? new i.lY({ cause: e, gas: t?.gas })
          : i.Fo.nodeMessage.test(n)
          ? new i.Fo({ cause: e, gas: t?.gas })
          : i.uC.nodeMessage.test(n)
          ? new i.uC({ cause: e })
          : i.lN.nodeMessage.test(n)
          ? new i.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new i.RM({ cause: e });
      }
    },
    61841: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var r = n(61405),
        i = n(12115),
        o = n(86475);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          a = (0, o.U)(e);
        (0, i.useEffect)(
          () =>
            (0, r.F)(a, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: i,
                      chain: o,
                      chainId: a,
                      connector: s,
                    } = e,
                    c = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: i,
                      chain: o,
                      chainId: a,
                      connector: s,
                      isReconnected: c,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [a, t, n]
        );
      }
    },
    61936: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => i });
      var r = n(15885);
      function i(e) {
        let t = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : (0, r.uP)(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
    },
    62023: (e, t, n) => {
      "use strict";
      n.d(t, { eL: () => r, pj: () => o, sz: () => i });
      let r = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        o = { ether: -18, gwei: -9 };
    },
    63036: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => d });
      var r = n(77608),
        i = n(73168),
        o = n(56674),
        a = n(37407),
        s = n(34561),
        c = n(43159),
        l = n(93420),
        u = n(2535);
      function d(e = {}) {
        let t,
          n,
          p,
          b,
          { shimDisconnect: m = !0, unstable_shimAsyncInject: y } = e;
        function g() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(f[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, u.U)((u) => ({
          get icon() {
            return g().icon;
          },
          get id() {
            return g().id;
          },
          get name() {
            return g().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: d.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (p || ((p = this.onConnect.bind(this)), n.on("connect", p)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({
            chainId: o,
            isReconnecting: a,
            withCapabilities: s,
          } = {}) {
            let c = await this.getProvider();
            if (!c) throw new l.N();
            let d = [];
            if (a) d = await this.getAccounts().catch(() => []);
            else if (m)
              try {
                let e = await c.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (d = e[0]?.caveats?.[0]?.value?.map((e) => (0, r.b)(e)))
                  .length > 0 && (d = await this.getAccounts());
              } catch (e) {
                if (e.code === i.vx.code) throw new i.vx(e);
                if (e.code === i.qZ.code) throw e;
              }
            try {
              d?.length ||
                a ||
                (d = (await c.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.b)(e)
                )),
                p && (c.removeListener("connect", p), (p = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  c.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  c.on("chainChanged", n)),
                b ||
                  ((b = this.onDisconnect.bind(this)), c.on("disconnect", b));
              let l = await this.getChainId();
              if (o && l !== o) {
                let e = await this.switchChain({ chainId: o }).catch((e) => {
                  if (e.code === i.vx.code) throw e;
                  return { id: l };
                });
                l = e?.id ?? l;
              }
              return (
                m && (await u.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await u.storage?.setItem("injected.connected", !0)),
                {
                  accounts: s
                    ? d.map((e) => ({ address: e, capabilities: {} }))
                    : d,
                  chainId: l,
                }
              );
            } catch (e) {
              if (e.code === i.vx.code) throw new i.vx(e);
              if (e.code === i.qZ.code) throw new i.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new l.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              b && (t.removeListener("disconnect", b), (b = void 0)),
              p || ((p = this.onConnect.bind(this)), t.on("connect", p));
            try {
              await (0, o.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            m && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await u.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, r.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = g();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? h(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (m && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await u.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== y && !1 !== y) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof y ? y : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new l.N();
              }
              return !!(await (0, a.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new l.N();
            let r = u.chains.find((e) => e.id === t);
            if (!r) throw new i.ch(new c.nk());
            let o = new Promise((e) => {
              let n = (r) => {
                "chainId" in r &&
                  r.chainId === t &&
                  (u.emitter.off("change", n), e());
              };
              u.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        u.emitter.emit("change", { chainId: t });
                    }),
                  o,
                ]),
                r
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    c,
                    { default: l, ...d } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : l && (a = [l.url, ...Object.values(d).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [r.rpcUrls.default?.http[0] ?? ""]);
                  let f = {
                    blockExplorerUrls: a,
                    chainId: (0, s.cK)(t),
                    chainName: e?.chainName ?? r.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                    rpcUrls: c,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [f],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            u.emitter.emit("change", { chainId: t });
                          else
                            throw new i.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      o,
                    ]),
                    r
                  );
                } catch (e) {
                  throw new i.vx(e);
                }
              if (a.code === i.vx.code) throw new i.vx(a);
              throw new i.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                m && (await u.storage?.removeItem(`${this.id}.disconnected`));
            } else
              u.emitter.emit("change", { accounts: e.map((e) => (0, r.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            u.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let r = await this.getAccounts();
            if (0 === r.length) return;
            let i = Number(e.chainId);
            u.emitter.emit("connect", { accounts: r, chainId: i });
            let o = await this.getProvider();
            o &&
              (p && (o.removeListener("connect", p), (p = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), o.on("chainChanged", n)),
              b || ((b = this.onDisconnect.bind(this)), o.on("disconnect", b)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (u.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                b && (t.removeListener("disconnect", b), (b = void 0)),
                p || ((p = this.onConnect.bind(this)), t.on("connect", p))));
          },
        }));
      }
      d.type = "injected";
      let f = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : h(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            h(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : h(e, "isPhantom"),
        },
      };
      function h(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers
          ? r.providers.find((e) => n(e))
          : r && n(r)
          ? r
          : void 0;
      }
    },
    63122: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => o });
      var r = n(38445),
        i = n(34049),
        o = new (class extends r.Q {
          #D = !0;
          #N;
          #U;
          constructor() {
            super(),
              (this.#U = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e(!0),
                    n = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#N || this.setEventListener(this.#U);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#N?.(), (this.#N = void 0));
          }
          setEventListener(e) {
            (this.#U = e),
              this.#N?.(),
              (this.#N = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#D !== e &&
              ((this.#D = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#D;
          }
        })();
    },
    63542: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => r });
      class r extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof r
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof r && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(i ? [`Docs: https://abitype.dev${i}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              "Version: abitype@1.1.0",
            ].join("\n")
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    64664: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => i, Z: () => o });
      var r = n(13933);
      class i extends r.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class o extends r.C {
        constructor({ docsPath: e, metaMessages: t, type: n }) {
          super(`Account type "${n}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    64935: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => u });
      var r = n(80549),
        i = n(43159);
      async function o(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new i.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: r, ...i } = t,
            o = await n.connect(i);
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: i.withCapabilities
                  ? o.accounts.map((e) =>
                      "object" == typeof e ? e.address : e
                    )
                  : o.accounts,
                chainId: o.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            {
              accounts: i.withCapabilities
                ? o.accounts.map((e) =>
                    "object" == typeof e ? e : { address: e, capabilities: {} }
                  )
                : o.accounts,
              chainId: o.chainId,
            }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var a = n(12115),
        s = n(86475);
      let c = [];
      function l(e) {
        let t = e.connectors;
        return c.length === t.length && c.every((e, n) => e === t[n])
          ? c
          : ((c = t), t);
      }
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, s.U)(e),
          i = { mutationFn: (e) => o(n, e), mutationKey: ["connect"] },
          { mutate: c, mutateAsync: u, ...d } = (0, r.n)({ ...t, ...i });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [n, d.reset]
          ),
          {
            ...d,
            connect: c,
            connectAsync: u,
            connectors: (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = (0, s.U)(e);
              return (0, a.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: n } = t;
                    return e._internal.connectors.subscribe((e, t) => {
                      n(Object.values(e), t);
                    });
                  })(t, { onChange: e }),
                () => l(t),
                () => l(t)
              );
            })({ config: n }),
          }
        );
      }
    },
    65465: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => s, x: () => c });
      var r = n(12115);
      let i = !1;
      async function o(e, t = {}) {
        let n;
        if (i) return [];
        (i = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let a = {};
        for (let [, t] of e.state.connections) a[t.connector.id] = 1;
        n && (a[n] = 0);
        let s =
            Object.keys(a).length > 0
              ? [...r].sort((e, t) => (a[e.id] ?? 10) - (a[t.id] ?? 10))
              : r,
          c = !1,
          l = [],
          u = [];
        for (let t of s) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || u.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: n };
            }),
            l.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            u.push(n),
            (c = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (c
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (i = !1),
          l
        );
      }
      function a(e) {
        let {
            children: t,
            config: n,
            initialState: i,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: s } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  chainId: e.chains.some((e) => e.id === n.chainId)
                    ? n.chainId
                    : e.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let n = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              n.add(t);
                        let r = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (n.has(t.info.rdns)) continue;
                          let i =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            o = e._internal.connectors.setup(i);
                          r.push(o);
                        }
                        return [...t, ...r];
                      })),
                    r
                      ? o(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: i, reconnectOnMount: a });
        n._internal.ssr || s();
        let c = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (c.current && n._internal.ssr)
              return (
                s(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let s = (0, r.createContext)(void 0);
      function c(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          a,
          e,
          (0, r.createElement)(s.Provider, { value: n }, t)
        );
      }
    },
    66969: (e, t, n) => {
      "use strict";
      n.d(t, { Fl: () => o, NV: () => a, ii: () => i });
      var r = n(13933);
      class i extends r.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class o extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class a extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    67550: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => o });
      var r = n(98722);
      let i = new Map();
      function o({ fn: e, id: t, shouldSplitBatch: n, wait: o = 0, sort: a }) {
        let s = async () => {
            let t = l();
            c();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  a && Array.isArray(e) && e.sort(a);
                  for (let n = 0; n < t.length; n++) {
                    let { resolve: r } = t[n];
                    r?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { reject: r } = t[n];
                    r?.(e);
                  }
                });
          },
          c = () => i.delete(t),
          l = () => i.get(t) || [],
          u = (e) => i.set(t, [...l(), e]);
        return {
          flush: c,
          async schedule(e) {
            let { promise: t, resolve: i, reject: a } = (0, r.Y)();
            return (
              (n?.([...l().map(({ args: e }) => e), e]) && s(), l().length > 0)
                ? u({ args: e, resolve: i, reject: a })
                : (u({ args: e, resolve: i, reject: a }), setTimeout(s, o)),
              t
            );
          },
        };
      }
    },
    68463: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => r });
      var r = n(94820);
    },
    68836: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var r = n(98957),
        i = n(53560),
        o = n(39382);
      function a(e) {
        let t = (0, i.e)(e),
          n = [],
          a = e.length;
        for (let i = 0; i < a; i++) {
          let a = e[i];
          (0, r.WL)(a) || n.push((0, o.uT)(a, t));
        }
        return n;
      }
    },
    69698: (e, t, n) => {
      "use strict";
      n.d(t, { Sl: () => i, X: () => a, eV: () => s, kK: () => o });
      var r = n(96382);
      function i(e, t) {
        if (r.Ej(e) > t) throw new r.u({ givenSize: r.Ej(e), maxSize: t });
      }
      function o(e, t) {
        if ("number" == typeof t && t > 0 && t > r.Ej(e) - 1)
          throw new r.ii({ offset: t, position: "start", size: r.Ej(e) });
      }
      function a(e, t, n) {
        if ("number" == typeof t && "number" == typeof n && r.Ej(e) !== n - t)
          throw new r.ii({ offset: n, position: "end", size: r.Ej(e) });
      }
      function s(e, t = {}) {
        let { dir: n, size: i = 32 } = t;
        if (0 === i) return e;
        let o = e.replace("0x", "");
        if (o.length > 2 * i)
          throw new r.Fl({
            size: Math.ceil(o.length / 2),
            targetSize: i,
            type: "Hex",
          });
        return `0x${o["right" === n ? "padEnd" : "padStart"](2 * i, "0")}`;
      }
    },
    69781: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => o });
      var r = n(37126),
        i = n(34049),
        o = class {
          #L;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, i.gn)(this.gcTime) &&
                (this.#L = r.zs.setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (i.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#L && (r.zs.clearTimeout(this.#L), (this.#L = void 0));
          }
        };
    },
    70054: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => a });
      let r = new Map(),
        i = new Map();
      async function o(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
        let o = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, r),
              o = t(e, i);
            return {
              clear: () => {
                n.clear(), o.clear();
              },
              promise: n,
              response: o,
            };
          })(t),
          a = o.response.get();
        if (a && n > 0 && Date.now() - a.created.getTime() < n) return a.data;
        let s = o.promise.get();
        s || ((s = e()), o.promise.set(s));
        try {
          let e = await s;
          return o.response.set({ created: new Date(), data: e }), e;
        } finally {
          o.promise.clear();
        }
      }
      async function a(e, { cacheTime: t = e.cacheTime } = {}) {
        let n;
        return BigInt(
          await o(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: ((n = e.uid), `blockNumber.${n}`),
            cacheTime: t,
          })
        );
      }
    },
    71450: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          __addDisposableResource: () => j,
          __assign: () => o,
          __asyncDelegator: () => I,
          __asyncGenerator: () => E,
          __asyncValues: () => B,
          __await: () => C,
          __awaiter: () => p,
          __classPrivateFieldGet: () => R,
          __classPrivateFieldIn: () => F,
          __classPrivateFieldSet: () => T,
          __createBinding: () => m,
          __decorate: () => s,
          __disposeResources: () => U,
          __esDecorate: () => l,
          __exportStar: () => y,
          __extends: () => i,
          __generator: () => b,
          __importDefault: () => M,
          __importStar: () => O,
          __makeTemplateObject: () => P,
          __metadata: () => h,
          __param: () => c,
          __propKey: () => d,
          __read: () => w,
          __rest: () => a,
          __rewriteRelativeImportExtension: () => D,
          __runInitializers: () => u,
          __setFunctionName: () => f,
          __spread: () => v,
          __spreadArray: () => x,
          __spreadArrays: () => A,
          __values: () => g,
          default: () => L,
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      function s(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function l(e, t, n, r, i, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var s,
            c = r.kind,
            l = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            u = !t && e ? (r.static ? e : e.prototype) : null,
            d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
            f = !1,
            h = n.length - 1;
          h >= 0;
          h--
        ) {
          var p = {};
          for (var b in r) p[b] = "access" === b ? {} : r[b];
          for (var b in r.access) p.access[b] = r.access[b];
          p.addInitializer = function (e) {
            if (f)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            o.push(a(e || null));
          };
          var m = (0, n[h])(
            "accessor" === c ? { get: d.get, set: d.set } : d[l],
            p
          );
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m)
              throw TypeError("Object expected");
            (s = a(m.get)) && (d.get = s),
              (s = a(m.set)) && (d.set = s),
              (s = a(m.init)) && i.unshift(s);
          } else (s = a(m)) && ("field" === c ? i.unshift(s) : (d[l] = s));
        }
        u && Object.defineProperty(u, r.name, d), (f = !0);
      }
      function u(e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++)
          n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function f(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function h(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function p(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function b(e, t) {
        var n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = s(0)),
          (a.throw = s(1)),
          (a.return = s(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (c) {
            var l = [s, c];
            if (n) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), l[0] && (o = 0)), o; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & l[0]
                        ? r.return
                        : l[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, l[1])).done)
                )
                  return i;
                switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                  case 0:
                  case 1:
                    i = l;
                    break;
                  case 4:
                    return o.label++, { value: l[1], done: !1 };
                  case 5:
                    o.label++, (r = l[1]), (l = [0]);
                    continue;
                  case 7:
                    (l = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                      (6 === l[0] || 2 === l[0])
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === l[0] && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                      o.label = l[1];
                      break;
                    }
                    if (6 === l[0] && o.label < i[1]) {
                      (o.label = i[1]), (i = l);
                      break;
                    }
                    if (i && o.label < i[2]) {
                      (o.label = i[2]), o.ops.push(l);
                      break;
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                l = t.call(e, o);
              } catch (e) {
                (l = [6, e]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & l[0]) throw l[1];
            return { value: l[0] ? l[1] : void 0, done: !0 };
          };
        }
      }
      var m = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            (!i ||
              ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, i);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function y(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            m(t, e, n);
      }
      function g(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function w(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function v() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(w(arguments[t]));
        return e;
      }
      function A() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      function x(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function C(e) {
        return this instanceof C ? ((this.v = e), this) : new C(e);
      }
      function E(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(e, t || []),
          o = [];
        return (
          (r = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, l);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(e, t) {
          i[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                o.push([e, t, n, r]) > 1 || s(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function s(e, t) {
          try {
            var n;
            (n = i[e](t)).value instanceof C
              ? Promise.resolve(n.value.v).then(c, l)
              : u(o[0][2], n);
          } catch (e) {
            u(o[0][3], e);
          }
        }
        function c(e) {
          s("next", e);
        }
        function l(e) {
          s("throw", e);
        }
        function u(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function I(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, i) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: C(e[r](t)), done: !1 }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function B(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = g(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, i) {
                var o, a, s;
                (o = r),
                  (a = i),
                  (s = (t = e[n](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    o({ value: e, done: s });
                  }, a);
              });
            };
        }
      }
      function P(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var k = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        S = function (e) {
          return (S =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            })(e);
        };
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = S(e), r = 0; r < n.length; r++)
            "default" !== n[r] && m(t, e, n[r]);
        return k(t, e), t;
      }
      function M(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function R(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function T(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
      }
      function F(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function j(e, t, n) {
        if (null != t) {
          var r, i;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (n) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (r = t[Symbol.dispose]), n && (i = r);
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          i &&
            (r = function () {
              try {
                i.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var N =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = e),
                (r.suppressed = t),
                r
              );
            };
      function U(e) {
        function t(t) {
          (e.error = e.hasError
            ? new N(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function i() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r)
                return (r = 0), e.stack.push(n), Promise.resolve().then(i);
              if (n.dispose) {
                var o = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(o).then(i, function (e) {
                      return t(e), i();
                    })
                  );
              } else r |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === r)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function D(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, n, r, i, o) {
                return n
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !r || (i && o)
                  ? r + i + "." + o.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let L = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: f,
        __metadata: h,
        __awaiter: p,
        __generator: b,
        __createBinding: m,
        __exportStar: y,
        __values: g,
        __read: w,
        __spread: v,
        __spreadArrays: A,
        __spreadArray: x,
        __await: C,
        __asyncGenerator: E,
        __asyncDelegator: I,
        __asyncValues: B,
        __makeTemplateObject: P,
        __importStar: O,
        __importDefault: M,
        __classPrivateFieldGet: R,
        __classPrivateFieldSet: T,
        __classPrivateFieldIn: F,
        __addDisposableResource: j,
        __disposeResources: U,
        __rewriteRelativeImportExtension: D,
      };
    },
    71552: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => i });
      var r = n(29454);
      function i({ blockNumber: e, chain: t, contract: n }) {
        let i = t?.contracts?.[n];
        if (!i) throw new r.rj({ chain: t, contract: { name: n } });
        if (e && i.blockCreated && i.blockCreated > e)
          throw new r.rj({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: i.blockCreated },
          });
        return i.address;
      }
    },
    71607: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        return JSON.stringify(
          e,
          (e, n) =>
            "function" == typeof t
              ? t(e, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
      n.d(t, { A: () => r });
    },
    71971: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => c });
      var r = n(40290),
        i = n(55563),
        o = n(34561),
        a = n(2350),
        s = n(4697);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, o.My)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let o = (0, s.q)(n[e]),
            c = o ? (0, i.ZJ)(o) : (0, a.S)((0, i.Af)(n[e]), "bytes");
          t = (0, a.S)((0, r.xW)([t, c]), "bytes");
        }
        return (0, o.My)(t);
      }
    },
    72427: (e, t, n) => {
      "use strict";
      n.d(t, { db: () => o, eV: () => i });
      var r = n(66969);
      function i(e, { dir: t, size: n = 32 } = {}) {
        return "string" == typeof e
          ? o(e, { dir: t, size: n })
          : (function (e, { dir: t, size: n = 32 } = {}) {
              if (null === n) return e;
              if (e.length > n)
                throw new r.Fl({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              let i = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                let o = "right" === t;
                i[o ? r : n - r - 1] = e[o ? r : e.length - r - 1];
              }
              return i;
            })(e, { dir: t, size: n });
      }
      function o(e, { dir: t, size: n = 32 } = {}) {
        if (null === n) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * n)
          throw new r.Fl({
            size: Math.ceil(i.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${i["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    72707: (e, t, n) => {
      "use strict";
      async function r(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
      n.d(t, { L: () => r });
    },
    72757: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let i = e[n];
        return "function" == typeof i ? i : (n) => t(e, n);
      }
      n.d(t, { T: () => r });
    },
    72997: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => s });
      var r = n(55563),
        i = n(2350),
        o = n(80197),
        a = n(13933);
      function s(e) {
        var t;
        return (
          (t = (function (e) {
            let t = !0,
              n = "",
              r = 0,
              i = "",
              o = !1;
            for (let a = 0; a < e.length; a++) {
              let s = e[a];
              if (
                (["(", ")", ","].includes(s) && (t = !0),
                "(" === s && r++,
                ")" === s && r--,
                t)
              ) {
                if (0 === r) {
                  if (" " === s && ["event", "function", ""].includes(i))
                    i = "";
                  else if (((i += s), ")" === s)) {
                    o = !0;
                    break;
                  }
                  continue;
                }
                if (" " === s) {
                  "," !== e[a - 1] &&
                    "," !== n &&
                    ",(" !== n &&
                    ((n = ""), (t = !1));
                  continue;
                }
                (i += s), (n += s);
              }
            }
            if (!o) throw new a.C("Unable to normalize signature.");
            return i;
          })("string" == typeof e ? e : (0, o.B)(e))),
          (0, i.S)((0, r.ZJ)(t))
        );
      }
    },
    73168: (e, t, n) => {
      "use strict";
      n.d(t, {
        CL: () => c,
        D5: () => u,
        Di: () => f,
        G1: () => O,
        Gi: () => l,
        L5: () => I,
        MI: () => R,
        RV: () => x,
        Sf: () => A,
        WT: () => B,
        XU: () => s,
        YW: () => b,
        ab: () => m,
        bq: () => d,
        cg: () => k,
        ch: () => E,
        hA: () => h,
        hl: () => P,
        jz: () => M,
        qZ: () => p,
        s0: () => y,
        sV: () => v,
        uL: () => S,
        vx: () => w,
        xQ: () => g,
        xq: () => C,
      });
      var r = n(13933),
        i = n(4058);
      class o extends r.C {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: r, name: o, shortMessage: a }
        ) {
          super(a, {
            cause: e,
            docsPath: n,
            metaMessages: r || e?.metaMessages,
            name: o || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = o || e.name),
            (this.code = e instanceof i.J8 ? e.code : t ?? -1);
        }
      }
      class a extends o {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class s extends o {
        constructor(e) {
          super(e, {
            code: s.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends o {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class l extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: l.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class u extends o {
        constructor(e) {
          super(e, {
            code: u.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends o {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class f extends o {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class h extends o {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends o {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class b extends o {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: m.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class y extends o {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends o {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class A extends a {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: A.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class x extends a {
        constructor(e) {
          super(e, {
            code: x.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class C extends a {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class I extends a {
        constructor(e) {
          super(e, {
            code: I.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage:
              "This Wallet does not support a capability that was not marked as optional.",
          });
        }
      }
      Object.defineProperty(I, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class B extends a {
        constructor(e) {
          super(e, {
            code: B.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(B, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class k extends a {
        constructor(e) {
          super(e, {
            code: k.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty(k, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class S extends a {
        constructor(e) {
          super(e, {
            code: S.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty(S, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class O extends a {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class M extends a {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "AtomicityNotSupportedError",
            shortMessage:
              "The wallet does not support atomic execution but the request requires it.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class R extends o {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    74268: (e, t, n) => {
      "use strict";
      n.d(t, { jG: () => i });
      var r = n(37126).Zq,
        i = (function () {
          let e = [],
            t = 0,
            n = (e) => {
              e();
            },
            i = (e) => {
              e();
            },
            o = r,
            a = (r) => {
              t
                ? e.push(r)
                : o(() => {
                    n(r);
                  });
            };
          return {
            batch: (r) => {
              let a;
              t++;
              try {
                a = r();
              } finally {
                --t ||
                  (() => {
                    let t = e;
                    (e = []),
                      t.length &&
                        o(() => {
                          i(() => {
                            t.forEach((e) => {
                              n(e);
                            });
                          });
                        });
                  })();
              }
              return a;
            },
            batchCalls:
              (e) =>
              (...t) => {
                a(() => {
                  e(...t);
                });
              },
            schedule: a,
            setNotifyFunction: (e) => {
              n = e;
            },
            setBatchNotifyFunction: (e) => {
              i = e;
            },
            setScheduler: (e) => {
              o = e;
            },
          };
        })();
    },
    74750: (e, t, n) => {
      "use strict";
      n.d(t, { Bv: () => o });
      var r = n(34561);
      let i = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function o(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, r.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, r.cK)(BigInt(e.s)) : e.s,
              chainId: (0, r.cK)(e.chainId),
              nonce: (0, r.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, r.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, r.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, r.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, r.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, r.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, r.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, r.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, r.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, r.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = i[e.type]),
          void 0 !== e.value && (t.value = (0, r.cK)(e.value)),
          t
        );
      }
    },
    75575: (e, t, n) => {
      "use strict";
      n.d(t, { IT: () => o });
      var r = n(22454),
        i = n(47575);
      function o(e) {
        let t = (0, r.I)({ ...e, queryKeyHashFn: i.Zi });
        return (t.queryKey = e.queryKey), t;
      }
    },
    76115: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => i });
      var r = n(13933);
      class i extends r.C {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    77608: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => u, o: () => l });
      var r = n(76115),
        i = n(55563),
        o = n(2350),
        a = n(20390),
        s = n(24784);
      let c = new a.A(8192);
      function l(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = (0, o.S)((0, i.Af)(n), "bytes"),
          a = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          r[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & r[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        let s = `0x${a.join("")}`;
        return c.set(`${e}.${t}`, s), s;
      }
      function u(e, t) {
        if (!(0, s.P)(e, { strict: !1 })) throw new r.M({ address: e });
        return l(e, t);
      }
    },
    78140: (e, t, n) => {
      "use strict";
      async function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      n.d(t, { u: () => r });
    },
    80082: (e, t, n) => {
      "use strict";
      let r, i, o, a, s, c, l, u, d, f, h, p, b, m, y;
      n.d(t, { S: () => H });
      let g = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function w(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              i = 1,
              o = [0, 1];
            for (let e = 1; e < r; e++) o.push((i += n()));
            let a = n(),
              s = t;
            t += a;
            let c = 0,
              l = 0;
            function u() {
              return (
                0 == c && ((l = (l << 8) | e[t++]), (c = 8)), (l >> --c) & 1
              );
            }
            let d = 0x80000000 - 1,
              f = 0;
            for (let e = 0; e < 31; e++) f = (f << 1) | u();
            let h = [],
              p = 0,
              b = 0x80000000;
            for (;;) {
              let e = Math.floor(((f - p + 1) * i - 1) / b),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < o[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              h.push(t);
              let a = p + Math.floor((b * o[t]) / i),
                s = p + Math.floor((b * o[t + 1]) / i) - 1;
              for (; ((a ^ s) & 0x40000000) == 0; )
                (f = ((f << 1) & d) | u()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 0x20000000; )
                (f = (0x40000000 & f) | ((f << 1) & (d >>> 1)) | u()),
                  (a = (a << 1) ^ 0x40000000),
                  (s = ((0x40000000 ^ s) << 1) | 0x40000001);
              (p = a), (b = 1 + s - a);
            }
            let m = r - 4;
            return h.map((t) => {
              switch (t - m) {
                case 3:
                  return m + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return m + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return m + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, n) => (t[e.charCodeAt(0)] = n));
              let n = e.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let i = 0, o = 0, a = 0, s = 0; i < n; i++)
                (s = (s << 6) | t[e.charCodeAt(i)]),
                  (a += 6) >= 8 && (r[o++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function v(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            i = e();
          if (!i) break;
          t += r;
          for (let e = 0; e < i; e++) n.push(t + e);
          t += i + 1;
        }
        return n;
      }
      function A(e) {
        return C(() => {
          let t = v(e);
          if (t.length) return t;
        });
      }
      function x(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                i = C(t);
              return E(i.length, 1 + e, t).flatMap((e, t) => {
                let [o, ...a] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * r;
                    return [o + t * n, a.map((e) => e + i)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          var n, r;
          let i = e() - 1;
          if (i < 0) break;
          t.push(
            ((n = i), E(1 + (r = e)(), 1 + n, r).map((e) => [e[0], e.slice(1)]))
          );
        }
        return t.flat();
      }
      function C(e) {
        let t = [];
        for (;;) {
          let n = e(t.length);
          if (!n) break;
          t.push(n);
        }
        return t;
      }
      function E(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let n = Array(e);
            for (let i = 0, o = 0; i < e; i++) {
              var r;
              n[i] = o += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function I(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function B(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function P(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let i = 0; 0 == r && i < n; i++) r = e[i] - t[i];
        return r;
      }
      let k = 55204;
      function S(e) {
        return (e >> 24) & 255;
      }
      function O(e) {
        return 0xffffff & e;
      }
      function M(e) {
        return e >= 44032 && e < k;
      }
      function R(e) {
        r ||
          (function () {
            let e = w(
              "AEUDWAHSCGYATwDVADIAdgAiADQAFAAtABQAIQAPACcADQASAAsAGQAJABIACQARAAUACwAFAAwABQAQAAMABwAEAAoABQAJAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACwANAA0AAwAKAAkABAAdAAYAZwDTAecDNACxCmIB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgPi89uj00MsvBXxEPAGPCDwBnQKoEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJEMAJpIBpob5AERSMAKNoAXqaQLRBMCzEiC+AZ4EWRJJFbEu7QDQLARtEbgECxDwAb/RyAk1AV4nD2cEQQKTAzsAGpobPgAahAGPCrysdy0OAKwAfFIcBAQFUmoA/PtZADkBIadVj2UMUgx5Il4ANQC9vLIBDAHUGVsQ8wCzfQIbGVcCHBZHAZ8CBAgXOhG7AqMZ4M7+1M0UAPDNAWsC+mcJDe8AAQA99zkEXLICyQozAo6lAobcP5JvjQLFzwKD9gU/OD8FEQCtEQL6bW+nAKUEvzjDHsuRyUvOFHcacUz5AqIFRSE2kzsBEQCuaQL5DQTlcgO6twSpTiUgCwIFCAUXBHQEqQV6swAVxUlmTmsCwjqsP/wKJQmXb793UgZBEBsnpRD3DDMBtQE7De1L2ATxBjsEyR99GRkPzZWcCKUt3QztJuMuoYBaI/UqgwXtS/Q83QtNUWgPWQtlCeM6Y4FOAyEBDSKLCt0NOQhtEPMKyWsN5RFFBzkD1UmaAKUHAQsRHTUVtSYQYqwLCTl3Bvsa9guPJq8TKXr8BdMaIQZNASka/wDPLueFsFoxXBxPXwYDCyUjxxSoUCANJUC3eEgaGwcVJakCkUNwSodRNh6TIfY8PQ1mLhNRfAf1PAUZTwuBPJ5Gq0UOEdI+jT1IIklMLAQ1fywvJ4sJzw+FDLl8cgFZCSEJsQxxEzERFzfFCDkHGS2XJCcVCCFGlWCaBPefA/MT0QMLBT8JQQcTA7UcLRMuFSkFDYEk1wLzNtUuswKPVoABFwXLDyUf3xBQR+AO6QibAmUDgyXrAC0VIQAXIpsIQ2MAX4/YUwUuywjHamwjdANnFOdhEXMHkQ5XB6ccMxW/HOFwyF4Lhggoo68JWwF1CZkBXwTjCAk1W4ygIEFnU4tYGJsgYUE/XfwCMQxlFZ9EvYd4AosPaxIbATUBcwc5DQECdxHtEWsQlQjrhgQ1tTP4OiUETyGDIBEKJwNPbM4LJyb5DPhpAaMSYgMMND137merYLYkF/0HGTLFQWAh8QuST80MnBrBGEJULhnkB78D8xrzJ+pBVwX/A6MDEzpNM+4EvQtpCIsJPwBJDqMXB9cYagpxjNABMYsBt5kDV5GDAm+PBjcHCwBnC4cFeeUAHQKnCKMABQDPA1cAOQKtB50AGQCFQQE9AycvASHlAo8DkwgxywGVLwHzKQQbwwwVAPc3bkoCw7ECgGpmogXdWAKOAkk1AU0lBAVOR1EDr3HhANsASwYT30cBFatKyxrjQwHfbysAxwD7AAU1BwVBAc0B820AtwFfCzEJorO1AU3pKQCDABVrAdcCiQDdADUAf/EBUwBNBVn5BdMCT0kBETEYK1dhAbsDHwEzAQ0AeQbLjaXJBx8EbQfTAhAbFeEC7y4HtQEDIt8TzULFAr3eVaFgAmSBAmJCW02vWzcgAqH3AmiYAmYJAp+EOBsLAmY7AmYmBG4EfwN/EwN+kjkGOXcXOYI6IyMCbB0CMjY4CgJtxwJtru+KM2dFKwFnAN4A4QBKBQeYDI0A/gvCAA21AncvAnaiPwJ5S0MCeLodXNtFrkbXAnw/AnrIAn0JAnzwBVkFIEgASH1jJAKBbQKAAAKABQJ/rklYSlsVF0rMAtEBAtDMSycDiE8Dh+ZExZEyAvKhXQMDA65LzkwtJQPPTUxNrwKLPwKK2MEbBx1DZwW3Ao43Ao5cQJeBAo7ZAo5ceFG0UzUKUtRUhQKT+wKTDADpABxVHlWvVdAGLBsplYYy4XhmRTs5ApefAu+yWCGoAFklApaPApZ8nACpWaxaCYFNADsClrUClk5cRFzRApnLAplkXMpdBxkCnJs5wjqdApwWAp+bAp64igAdDzEqDwKd8QKekgC1PWE0Ye8CntMCoG4BqQKenx8Cnk6lY8hkJyUrAievAiZ+AqD7AqBMAqLdAqHEAqYvAqXOAqf/AH0Cp/JofGixAANJahxq0QKs4wKsrgKtZwKtAgJXHQJV3AKx4dcDH05slwKyvQ0CsugXbOBtY21IXwMlzQK2XDs/bpADKUUCuF4CuUcVArkqd3A2cOECvRkCu9pwlgMyEQK+iHICAzNxAr4acyJzTwLDywLDBHOCdEs1RXTgAzynAzyaAz2/AsV8AsZHAsYQiQLIaVECyEQCyU8CyS4CZJ0C3dJ4eWF4rnklS9ADGKNnAgJh9BnzlSR7C16SXrsRAs9rAs9sL0tT0vMTnwDGrQLPcwEp6gNOEn5LBQLcJwLbigLSTwNSXANTXwEBA1WMgIk/AMsW7WBFghyC04LOg40C2scC2d6EEIRJpzwDhqUALwNkDoZxWfkAVQLfZQLeuHN3AuIv7RQB8zAnAfSbAfLShwLr8wLpcHkC6vkC6uQA+UcBuQLuiQLrnJaqlwMC7j8DheCYeXDgcaEC8wMAaQOOFpmTAvcTA5FuA5KHAveYAvnZAvhmmhyaq7s3mx4DnYMC/voBGwA5nxyfswMFjQOmagOm2QDRxQMGaqGIogUJAwxJAtQAPwMA4UEXUwER8wNrB5dnBQCTLSu3r73bAYmZFH8RBDkB+ykFIQ6dCZ8Akv0TtRQrxQL3LScApQC3BbmOkRc/xqdtQS4UJo0uAUMBgPwBtSYAdQMOBG0ALAIWDKEAAAoCPQJqA90DfgSRASBFBSF8CgAFAEQAEwA2EgJ3AQAF1QNr7wrFAgD3Cp8nv7G35QGRIUFCAekUfxE0wIkABAAbAFoCRQKEiwAGOlM6lI1tALg6jzrQAI04wTrcAKUA6ADLATqBOjs5/Dn5O3aJOls7nok6bzkYAVYBMwFsBS81XTWeNa01ZjV1NbY1xTWCNZE10jXhNZ41rTXuNf01sjXBNgI2ETXGNdU2FjYnNd417TYuNj02LjUtITY6Nj02PDbJNwgEkDxXNjg23TcgNw82yiA3iTcwCgSwPGc2JDcZN2w6jTchQtRDB0LgQwscDw8JmyhtKFFVBgDpfwDpsAD+mxQ91wLpNSMArQC9BbeOkRdLxptzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgELgEaJZkC7aMAoQCjBcGOmxdNxrsBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUHqSvAj5Gqwr7YrMUACT9AN3rpF27H7fsd/twPt4l+UW1yQYKBt2Cgy7qJpGiLcdE2P1cQSImUbqJ6ICH27H4knQMIRMrFkHu3sx6tC35Y+eLIh4e4CMKJ4DfyV+8mfta499RCAJ0xfeZR8PsoYOApva9pjGn4PhvyZS7/h5JLuhaucfjuU+Z584wwqNO4hWYmaBCcjgQPale1bjoHzMUbut/zTgxHxBnAyrdKpF4IRMASLBtD/jviyLeCgj8twWjAd3HchN/uqaeRYeHJgl7JEY9/cTrvtfybx/r3Y/NtxJ9dp+MTVmiS9bwBH73s8Di56/Ma+mTPMHq4T1yEG1fWcqr0u+hrGnJEvU1JJAm/maQSrKrazIyvSkDFkj8UUlfBq8baniTGPng6YZRL661rDNw4w/1g2figG0IhXnL7wosd/sVNo5dYSmMBTP5c7rYLjRdCwg8quwljOMPf63D8ICAL0r71XRiyFHdgwHbwfgnPOf4Lzjf2v+j+IiDHG2isp5yUnzSDyDRb4i/Vs0qHSHq8PiEQ/JnBP7PxnjN0j6gT4AVAeRx/1o9VnEUlUwvFrzJqHk9jxAw4sYxCnrxaeBdCFFKbnE7z+x54F5W7ZZsU6kx8Qocul6FoAHHy01FGL/nne61mn4+uYXfQ1Uccn+HMLKE+cZzT8BB1E3FRskOgJrRsq25rauLm8+uamXpkS/bTy6y1wDbCrW4eD532kTWrtNUmVVZOIn/C+/JR9KVR5iG9TY8iaT67ubm/whL1xbKZoqtY+a6fNxMJrg211bGYJDUkYMNWA0BMB++9zOm6Eik4roqs9CCEFW0lyAK0PbvlzvoxrZuY/OEhNW/l/63U15Od/RSvmDvXpGLiVmeGi5PDSH2bYz5o2g6wFDQ2FbZgYgTF8rPlvA1ifjZD3NLtFdXdpSIJvgKR7GpjJWG7GZGawPomIH8B5tUmtHH9LpM+/KQKunEPa1GiQkCXv4Cnm9DLORo2joicHdPDZ64obQrPZ5bgqckkj0G6/NEiPYBY4bCkL7W8G5YzsUb6GakFjykSPkT7JGeLeB6uJOGMm+x7N381BCDfbJFx0dtLgV9Q477BfL1fvitX5anV/oYfxeYl+eF5x5bB8+Ep/L2nsmd56aKF4aAD4GbJWsdKyBW22xEmAD3XdbtsMyAFoR5mOla0gEd9U/YVB7zvHGpHbQonay9Sv0bQ8iZ8piaXVrKc5AG1AmqqgaEvzHSP2Wux7aZTWh6quVDVU01JtMIVRdCFwlSbbqqhoFlyzsotQzRexFvZ/MqUSFu3OhRIuNBbufvBpdVgb8XdGJ48/lJPCZ7dsOujTTbKPSEvGXkOnG2Xdi8/nM3EMRqITd5QeU7iOjKqC7URJY6TnLsHij22xAHKnVRD5MDtBYnoGFqZGMDmXCW6Oj+BAWw14hESY/xLF6bLku06AHkiXTHPCFZ0f9YSqqo27eAhhS67OrA2Het4M9JM3jm/yRX6bYxnfmzYl5qQdHxN08FsNuWDrWd4vMUY2QD3hr8vS73SCTkFoXZR3xNzOQt8d/6HfjBmXqvrE6EGkLzK6YK2U2/ksU/iUH+LvVIsJI+ri2AL/klo+ShdDyfs5A83i2prkMs51IKR7ZcqjZJi5X3+bd8GlyWvtddxKEoEqSgEO7A8jIgf2nH0h8FjM7oB6yte3X5mpL0i/E4Rx0CotKnILJj/vJqo4VkPQ93jRtRVfaitQPqldl5xRYPq8387Z0DcnZvOeION0Ht1+P27kFLGQIcLBX4FG3sffccNHh5cPfzp9INoRtqVtdViJfg8RjnXiIz/MNqEN6zvzX3hMzyWC7oSoXIT14ubc0abPX8Rp9GVa5NI/8iv+6ela1oTncbdimRKnrbRffDR/X4nH+bgqAuHWl7hOaeXPWVzIeRl7ga+JzD4Sx3mlj/q6Ra/E2HhDf21eEzTLNGfCZsY+/yxZzQzIAuijG65ii4O/waAJCrEJaWd/DRAKMQ5678Dw5AT7RCKzdadIwd8LsD+DgPBASmWsUlf8R0k1w/2k4lO2Wpb4zMI6EJVJs0xk/wn8/fRUPqrDKhbjHR41SqgFMx5RGMPuduFwlu5lK89tW11sTqiX/5EfGs5nO+y9FKvgXKPOEmgE05EKNL6Sjb3xS40H3BVPhm0ESOZgAjZoymc8be0inDVo4JdJVf+NKd3tN/CaB7GShhH27qf95NoFZVX/6ZkR2lX+CgWrQ2INgkh+bbMz68+uJ3Clsh8HSMPEQtAt+BBE6fXDab7KIlsKxU1lIXW/KWVstpdPanJ0pdXpQinDyUQjtY7ZVcfiecRxRDMAUhHFU2cEaciQ+htiPMPx1kdvtWG9T44w3r037ljHBFJdYR0r55qvMRixtAEFJAqA4T1ES87FAx7UozXasytg8MftZYt0rjYgLe6EJ5aWvy2qscBSBQ7yehoJIA3wIIZ9ukfkyBb6qnue5ko8W50rpV4kXqWjI5nbGRXrNW0tBZHXlY48nSgcUXBHWT4GcgLZJoLlKJnV96kCYpq9eWHh7xJzkCAyrQuQ5AJ0qq/uZ3toJglNterev+Qm0KXxPg/+YbFRJdfhbp1wOnVOEYdVHTya6CtO0afhEaBhx3oHwCb5Kq6RwHDzFMl2vfjL8GwzcCoTj7wZe+UFnYDV2yKpPU9dba29gYBdNqJg/KXozO+CJTlKmlKhnqTf5doeS35DZFV+cYJQVjd+oVY/Gtc/6XPzUxb1gMqf6cEjNNoRC8AObrp+fx0cVtGu4ffC2TgXRC8zPl8moUHCB5HZ25d87mlsiiK0aNwBtcEQjRNBT/QrXbw/8aVXdKMHn9EqYEKEyxSGTpYQOaes1G1Qq8pDgqkZtlO2HRyCXpmeM7TSrRPkAh004BfisVpF6zP44n2Jvxz/gOVocNCyy9V6lkod28QM4pbaMvVJigD/w3BrsjSJrXlqc4ulBYOCceiBN4b/gHajYyupbhEt63a619Ay4wsL6a6w6B+A7TnoyE7BliWHJfzVxxIKM/W3M/J8Bx99Op863Q8eNuIMGRx++VbYfjm+VGYBA3Ap/KEu/wxBNBpJJncwHPG45V8Gh98ZIrGCc20MwijGowZbcS7d1nEgcOW5cddZpHL2XPAIRbColiheZzXTvBxZOY3iMSDSKDrICyJ/iQs1vdplVdH/JrLJsQ2jtTnfCrITIghq3KFX3qAgLWAIp8IffNSdTYptnbGfc8s+qcr3zyzyHp1aJg+jxTF4kD1ry5Wauv5V3xnOGwTFecNzXSLHBW20/pCQjk4uorD0plIhMSTc79+/r4RKPClRYTBYex1Ob5crtfvRQBBv6re/6FhtCqtduag67glqRA77/3ulblh9YRtMdDxkCyJDeNnAuCLPQFmdRRWJtH20Z8DstfJf+5oj5SSB64d0iF5/Ya4KfTWxfivj9Ap2/zbYaTo/1gO3tM6RYsCZharMBFr7Fm61mLSrQnEI4OF1gbVS4k/JE9UotOrnLJZuswoWodCSV8zbybkJSVIP7n8UaE9xCR39rJZmf27HOAPVOGc9pdkQUcRrI0qyVF9Z3j1RHDbxIfwbWzmPVjwIdPJvtmBYwEQIUsIW1S939hcVikK00ozPRI02cqhzVUNzpOxVdrwRPvlh1aIOf0xFEqD3YkGnCnFah/cFN3J2gB7N+bZSGawwkKFu1tpQMrp1W+27YNkyT0TpcFpTqgOqqLabrgcCUPxh97mREOGy4xItzQ9xSl6rq+8BZsHcrQFReS+QeMxJ3P6CnL9EP/eOLDjumLhvrcQrpPiknsofbzBv9gTP0lU+TIVwE6E7CcKfT36q+ZiEOHJ9ayf0dyUJLezAb2M8aNHwd0+OJmsVgTzRWA"
            );
            for (let [t, n] of ((r = new Map(
              A(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (i = new Set(v(e))),
            (o = new Map()),
            (a = new Map()),
            x(e))) {
              if (!i.has(t) && 2 == n.length) {
                let [e, r] = n,
                  i = a.get(e);
                i || ((i = new Map()), a.set(e, i)), i.set(r, t);
              }
              o.set(t, n.reverse());
            }
          })();
        let t = [],
          n = [],
          s = !1;
        function c(e) {
          let n = r.get(e);
          n && ((s = !0), (e |= n)), t.push(e);
        }
        for (let r of e)
          for (;;) {
            if (r < 128) t.push(r);
            else if (M(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                i = e % 28;
              c(4352 + t), c(4449 + n), i > 0 && c(4519 + i);
            } else {
              let e = o.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && t.length > 1) {
          let e = S(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = S(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let i = n - 1;
            for (;;) {
              let n = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = n), !i || (e = S(t[--i])) <= r))
                break;
            }
            e = S(t[n]);
          }
        }
        return t;
      }
      function T(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            i = 0;
          for (let o of e) {
            let e = S(o),
              s = O(o);
            if (-1 == r) 0 == e ? (r = s) : t.push(s);
            else if (i > 0 && i >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (i = e);
            else {
              let o = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (M(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let n = a.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, s);
              o >= 0
                ? (r = o)
                : 0 == i && 0 == e
                ? (t.push(r), (r = s))
                : (n.push(s), (i = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(R(e));
      }
      let F = (e) => Array.from(e);
      function j(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class N extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function U() {
        let e, t;
        if (s) return;
        let n = w(
            "AEkVMQnvDV0B0wKWAQYBQgDpATQAoQDcAIUApwBsAOMAcACTAEUAigBRAHkAPgA/ACwANwAoAGIAHgAvACsAJQAXAC8AHAAhACIALwAVACsAEQAiAAsAGwARABgAFwA7ACoAKwAsADQAFgAtABIAHAAhAA4AHQAdABUAFgAZAA0ADgAXABAAGQAUABIEtAYQASIUOjfDBdMAsQCuPwFnAKUBA10jAK5/Ly8vLwE/pwUJ6/0HPwbkMQVXBVgAPSs5APa2EQbIwQuUCkEDyJ4zAsUKLwKOoQKG2D+Ob4kCxcsCg/IBH98JAPKtAUECLY0KP48A4wDiChUAF9S5yAwLPZ0EG3cA/QI5GL0P6wkGKekFBIFnDRsHLQCrAGmR76WcfwBbBpMjBukAGwA7DJMAWxVbqft7uycM2yDPCLspA7EUOwD3LWujAKF9GAAXBCXXFgEdALkZzQT6CSBMNwmXCYgeG1ZZTOODQgATAAwAFQAOa1QAIQAOAEfuFdg98zlYypXmLgoQHV9NWD3sABMADAAVAA5rIFxAlwDD6wAbADkMxQAbFVup+3EB224cHQVbBeIC0J8CxLAKTBykZRRzGm1M9QC7DWcC4QALLTSJF8mRAoF7ARMbAL0NZwLhAAstAUhQJZFMCgMt+wUyCddpF60B10MASSsSdwIxFiEC6ye5N2sAOeEB9SUAxw7LtQEbY4EAsQUABQCK00kFG8MfBxcAqCfRAaErLQObAGcBChk+7Td0BBgXAKoBxwIhANMrEnM681CwBZA6dyc1SAX6JwVZBVivuAVpO11CEjpYQZd7k2ZfofgLEwPFByXxdyMEo0sCU1MCdRurJwGPo6U1WwNFFwSDYQkA0QarPy8jBykCOV0AawFhH3EAgx0ZAJUBSbcAJ2kXAa/FAzctIUNTAW9ZBmUCZQDxSRcDKQEFAElBAKsAXQBzACu1Bgfz7xmNfwAJIQApALMbRwHRAdsHCzGXeIHoAAoAEQA0AD0AODN3edPAEF8QXAFNCUxsOhULAqwPpgvlERUM0SrL09gANKkH6wNTB+sDUwNTB+sH6wNTB+sDUwNTA1MDUxwK8BrTwBBfD0gEbQWOBYsE1giDJkkRgQcoCNJUDXQeHEcDRQD8IyVJHDuTMwslQkwMTQMH/DZCbKd9OANHMatU9ZCiA8syTzlsAR5xEqAAKg9zHDW1Tn56R3GgCktPrrV/SWJOZwK+Oqg/+AohCZNvu3dOBj0QFyehEPMMLwGxATcN6UvUBO0GNwTFH3kZFQ/JlZgIoS3ZDOkm3y6dgFYj8Sp/BelL8DzZC0lRZA9VC2EJ3zpfgUoDHQEJIocK2Q01CGkQ7wrFZw3hEUEHNQPRSZYAoQb9Cw0dMRWxJgxiqAsFOXMG9xryC4smqxMlevgFzxodBkkBJRr7AMsu44WsWi1cGE9bBf8LISPDFKRQHA0hQLN4RBoXBxElpQKNQ2xKg1EyHo8h8jw5DWIuD1F4B/E8ARlLC308mkanRQoRzj6JPUQiRUwoBDF7LCsnhwnLD4EMtXxuAVUJHQmtDG0TLRETN8EINQcVKZcgJxEIHUaRYJYE85sD7xPNAwcFOwk9Bw8DsRwpEyoVJQUJgSDTAu820S6vAotWfAETBccPIR/bEExH3A7lCJcCYQN/JecAKRUdABMilwg/XwBbj9RTAS7HCMNqaCNwA2MU410RbweNDlMHoxwvFbsc3XDEXgeGBCifqwlXAXEJlQFbBN8IBTVXjJwgPWdPi1QYlyBdQTtd+AItDGEVm0S5h3QChw9nEhcBMQFvBzUM/QJzEekRZxCRCOeGADWxM/Q6IQRLIX8gDQojA0tsygsjJvUM9GUBnxJeAwg0OXfqZ6dgsiAX+QcVMsFBXCHtC45PyQyYGr0YPlQqGeAHuwPvGu8n5kFTBfsDnw86STPqBLkLZQiHCTsARQ6fEwfTGGYKbYzMAS2HAbOVA1ONfwJriwYzBwcAYweDBXXhABkCowifAAEAywNTADUCqQeZABUAgT0BOQMjKwEd4QKLA48ILccBkSsB7yUEF78MEQDzM25GAsOtAoBmZp4F2VQCigJFMQFJIQQBSkNNA6tt3QDXAEcGD9tDARGnRscW3z8B22snAMMA9wABMQcBPQHJAe9pALMBWwstCZ6vsQFJ5SUAfwARZwHTAoUA2QAxAHvtAU8ASQVV9QXPAktFAQ0tFCdTXQG3AxsBLwEJAHUGx4mhxQMbBGkHzwIQFxXdAu8qB7EDItsTyULBAr3aUQAyEgo0CrUKtB9f81wvAi1uPUwACh+kPsM/SgVNO087VDtPO1Q7TztUO087VDtPO1QDk7veu94KaF9BYecMog3QRMQ6RRPXYE1gLhPELbMUvRXKJVIZORq4JwEl4FUFDwAtz2YsCCg0cRe4ADspZIM9Y4IeLApHHONTjVT0LRcArUueM6sNqBsRRDwFQ3XpYiYWCgoeAmR9AmI+V0mrVzccAqHzAmiUAmYFAp+AOBcHAmY3AmYiBGoEewN/DwN+jjkCOXMTOX46Hx8CbBkCMjI4BgJtwwJtquuGL2NBJwFjANoA3QBGAQeUDIkA+ge+AAmxAncrAnaeOwJ5Rz8CeLYZWNdFqkbTAnw7AnrEAn0FAnzsBVUFHEf8SHlfIAAnEUlUSlcRE0rIAtD9AtDISyMDiEsDh+JEwZEuAvKdXP8DA6pLykwpIctNSE2rAos7AorUvRcDGT9jAbMCjjMCjlg8k30CjtUCjlh0UbBTMQZS0FSBApP3ApMIAOUAGFUaVatVzAIsFymRgjLdeGJFNzUCl5sC765YHaQAVSEClosClniYAKVZqFoFfUkANwKWsQKWSlxAXM0CmccCmWBcxl0DFQKclzm+OpkCnBICn5cCnrSGABkLLSYLAp3tAp6OALE5YTBh6wKezwKgagGlAp6bGwKeSqFjxGQjIScCJ6sCJnoCoPcCoEgCotkCocACpisCpcoCp/sAeQKn7mh4aK3/RWoYas0CrN8CrKoCrWMCrP4CVxkCVdgCsd3TAx9KbJMCsrkJArLkE2zcbV9tRFsDJckCtlg3O26MAylBArhaArlDEQK5JnNwMnDdAr0VArvWcJIDMg0CvoRx/gMzbQK+FnMec0sCw8cCwwBzfnRHMUF03AM8owM8lgM9uwLFeALGQwLGDIUCyGVNAshAAslLAskqAmSZAt3OeHVdeKp5IUvMAxifZv4CYfAZ75Ugewdejl63DQLPZwLPaCtHT87vD5sAwqkCz28BJeYDTg5+RwEC3CMC24YC0ksDUlgDU1sA/QNViICFO8cS6VxBghiCz4LKg4kC2sMC2dqEDIRFpzgDhqEAKwNkCoZtVfUAUQLfYQLetG9zAuIr7RAB8ywjAfSXAfLOgwLr7wLpbHUC6vUC6uAA9UMBtQLuhQLrmJamlv8C7jsDhdyYdXDccZ0C8v8AZQOOEpmPAvcPA5FqA5KDAveUAvnVAvhimhiap7czmxoDnX8C/vYBFwA1nxifrwMFiQOmZgOm1QDNwQMGZqGEogEFAwxFAQsBGwdpBl21YwEAtwRnuw2HHq8JABNxNQAfAy8SSQOFewFfIx0AjOsAHQDmnwObjQizBhufwQCnBRG76R09PhZ4BWg3PkArQiFCtF9xEV+8AJbFBTIAkEwZm7k7JmAyEbrPDi8YxhiJyfYFVwVYBVcFWAVjBVgFVwVYBVcFWAVXBVgFVwVYRhUI14VnAgICCmRe6SsEyQOxBi+7uwC7BKe7AOdAKRayBUY+aT5wQj9Ctl91N1/oAFgRM6sAjP7Ma8v8pudGej0mIwQrFic2NX5t32rB8RnCLGkBa9duMBcFXwVqycHJuAjPSVsAAAAKfF59i74AMz+BAAMW0QblrSMFAIzDCwMBDQDlZR09JB9KQrFCvEE4I18nYDYnOCMJwT0KRD9DPng+gT5wPnECiUK8SUI7X8tOT2pNCixrVC9qC24fX+AzOhsJZ5sKYiMrPB0mQqtCvCvMAcv8X8kOHy4JCAkifp3fajotShfJq8msCWXBy8wKYEFfD+UQoxEAk40dRUIlG6ltOc44CjM/Qz5wQj8cBwodTEdsWywtWuG8Egp97R0rQj8cXQhKCQ4zVENCNwQ7Q5wsCoEbLUI/G/UIUyIjGDAxAAWPYfBeCnFkyWALYC0jbkNgGTkCGx5gswYCaxBlTmBNEQFk52AVYJVgfWCzYEtgkWgWFwa1DtxVqbxaC0MWqwG7K83BAh8VABwDHgF5AmwvMJVSgAGKCrhHGgDkI3SOCsoNpk3qAZsCh5xPBUBfAPf3BwA0FlcMC6UMJB+6r0eAgQw0ABUTnyuCCHoC0gtLZREbANhOBnUECh5aADEAtritAJQnCxZvqyQ4nxkBWwGGCfwD2e0PBqoGSga5AB3LValaCbthE4kLLT8OuwG7ASICR1ooKCggHh8hLBImBiEMjQBUAm5XkEmVAW4fD3FHAdN1D85RIBmpsE3qBxEFTF8A9/cHAHoGJGwKKwulODAtx69WDQsAX7wLAGNAlQh6AOpN7yIbvwAxALa4rQCUJy07Ds4CkBh7ULtYyHRyjsOlmw/ZFUkb7AEpEFwSBh/lAccJOhCTBQ8rDDYLABEAs+AiAQIApADhAJiCCrJrOS8AFABbG8YubHYqDcEQAjskHNPhHB4LG30CewTBCqrxbAAnLQ6mLs6hHAe7CQAQOg+7GkcczaF3HgE9Kl8cLs4RGQB9q9ocAuugCAHCAULz5B9lAb4Jtwz6CDwKPgAFwAs9AksNuwi8DTwKvAk8DrsFmAEbawouzqEqD4sa4QHDAREWOwCgCzsLuxC7BBiqe9wAO2sMPAACpgm8BRvQ9QUBvgH6bsoGewG7D00RErwBAQDqAQAAdBVbBhbLFPxvF7sYOxjbL7ZtvgNIqLsAB7sALrsC6w5WAAq7BAAeuwJVICp/FTwVuwG+J+QAsloBvSjgo7vIAAFbAAG7AAJbAALjAAg7AA67AgAbu6VbDr/EAPQAaPuoOwMBu5UnSwDn3Rm7CBp7CKEFCv9wAN+7p7sau6OLeXIG+6mbgwASuwYbCwG8AACGAG27BgALu6c7ARo7ugihnMoBuwvtB8CpOwDhewG/AADlABW7AAb7AAm7AGmLABq7GLuOaRX7AA5rAC5LHgAGuwAXuwghAA1KAcIAt68mAcAAALQADpsAHBsBv/7hCqEABcYLFRXbAAebAEK7AQIAabsAC3sAHbsACLsJoQAFygBunxnVAJEIIQAFygABOwAH2wAdmwghAAaaAAl7ABsrAG0bAOa7gAAIWwAUuwkhAAbKAOOLAAk7C6EOxPtfAAc7AG6cQEgARwADOwAJrQM3AAcbABl7Abv/Aab7AAobAAo7AAn7p+sGuwAJGwADCwAQOwAIPAAUOwARawAPiwAN6wANuwAZCwYWGwAVOwBumxm7ALobLgATOwMAaSsKAOFLAAI7AARSABd7BRsABtAAGLsAC/sAX7sAa/sA5IsBuwAXdgG8AAFyC6EABUoAbXYAB/sA5XsAHGseAXsoUgA5RQD+Bw0McgAoKnABpAUIXgG8XiMMCQdvS2xfKokfPBRiLTYDoQq0AdgAFgLRA24BdnJHUhQhA08CFT4BLAYDc0a8e1J6QAApADEB+wBTCtsAe5AsASsAduUNETJGAUoAVwUAAVABB4rMAHg7BCClAFoA1hUAlWg3H4sAzWuxAM/UFgjCdXMbGFYdCdEBiJCrIlNTTUgSPMKJ+QB/HDdAKSvgEZdPAHIBKSwwKUIZDwMwVQT3xe4AS2XcAGoCcQI/EXo6x3guNdUGBQAQGx0KCAwqBB8dKU5TTgi5ugAKEs0AJgABGgCGAIkAjjUA7gC0AOAAnTwAuwCrAKYAoQDyAJ8A0wCcAOsBDAEHAMAAeQBaAMsAzQEHANcA6wCIAKIBNQDjANgA1QMBByoz1NTU1LbA3M3QzkMyFwFNAVcvRwFVAWQBYwFWAUdLQ0VoDQFOFQcIAzI2DAcAIg0kJiksODo6PT09Pj8OQB5RUVFRU1NSUylUVVdWVhxdYWFgYmEjZmhwb3JycnJycnR0dHR0dHR0dHR0dnZ3dnVbAEDsAEUAlgB0AC4AYvIAigBTAFMAMwJz6QCH//LyAGAAj+wAmwBLAF4AYPn5qgCBAIEAZQBSAK0AHgCyAH8CPAI/APgA4wD6APoA5AD7AOUA5QDkAOIAKQJ3AU0BPAE6AVABOgE6AToBNQE0ATQBNAEYAVQPACsIAABNFwoWAxUWDgCKAJIAogBLAGQYAi0AcABpAJEDEgMkKgMeQT5HKQCLAksAwwJTAqAAugKSApICkgKSApICkgKHApICkgKSApICkgKSApECkQKUApwCkwKSApICkAKQApACkAKOApECcQHQApMCmwKSApICkRZ5CwD6BQOnAl0CNhcBUBA1At4RCisTAUo3E02RAXekPAFlWQD/Az1HAQAAkykeGI9qAClgAGkALgCJA5TMi/CuhFoFuisOwhEBndV0KgsEIzFsATNabAGyAN5+gH9+gH6BgoJ+g4aEfoWIhoCHgoiCiX6Kfot+jIqNfo5+j4KQfpF+kn6TfpSDlYiWgpd+2gLabOEC2GwAgmwkbKAAg2xsBEkERgRIBEsESQRPBEwERwRNBE8ETgRKBEwETwCWZmwAowOIbAC0ZgEFbADJUWxsAM9sAgxsAPZabAD2ARkA9gD0APQA9QD0A31ebNSEI2XAAPYA9AD0APUA9BxsbACJWmwA9gCJARkA9gCJAL4A6AAIAPYAiQN9XmzUhCNlwBxsAPdabAEZAPYA9gD0APQA9QD0APcA9AD0APUA9AN9XmzUhCNlwBxsbACJWmwBGQD2AIkA9gCJAu0A9gCJAL4CNwD3AIkDfV5s1IQjZcAcbAJDATZsAkoBOWwCS8FsbAJXbGwDnwLtA58DnwOgA6ADoAOg1IQjZcAGA31ebBxsbACJWmwBGQOfAIkDnwCJAu0DnwCJAL4CNwOfAInUhCNlwAYDfV5sHGwEPmwAiQQ/AIkGjTFtIDFs1m4DKGwDrAJsbABVWv4VMgJsbACJAmwAVAEAul5sAmxebGwAiV5sAmxebD3YAEls1gJsbEbCxxP/x5BApA0KYFA89AsjTx97EHmJQPyocItC2JnNFRCEnFU6SFTDoI0PxeRNRoNRWkpzVnWW8pTagkNmgf+jGupqZ3eu50LAFnc+OzfJwdub1AdpOy76VnijWNR/CMEevikQkFyQuLuPajxWi9chqOoMJ7qpCN4sx3LJG4Myu8kD68wC6+iAwt+pU1JEeY13rpCVkXSZfinVKn4xZpxsI3Lp8bJLrJ9ujkrIalMRBAcv/GSKEtowzcEn5XmJw2BagB8V2UWJoJHZ14SXhM7p0XeGFOuw6mlvyq99WYp5XxrO6ru9nn4RHcOkJ7hx5UqWtman7yVMLzYXQefQRUdIY70RYQE8+aAzCNSGQkXiHfnHYRMi+xczKDdZLk3AV1gzxkkSHLjBwuq8shIJ+/RAbqjqQbugFhe0rqklu432EERkM5k9y1DXzds46oLqKAx6OhPT2WiqEfhaITn7OF9Y694AmKmUvbpWp0xJqDaf3jeNJXnK6NpnGcFOmbclbARC+5+5U52ufw5b0Hh+2LrrNimvZe4eYmApRsZnJE310SqB+1xB6rSJfnV1f2D0awB18Oc0sXAFqIlgHgWiaZGdvP5CJUSsCTCQUC335+iSkwPlLJJ5lwjTSn9Lw22NbK1Tu8w+bUpHtDRDPho7Gun8aw2Jzu9i+N0Ot/kPMbLAb/rUQ82kfpk85qLDkfxLl39QPDngo72GYh/Xigbpcm1pA23D2ywt3D8GgMOao040wDqkHxOEx0OhC+ZmHiIdjK7yRbfJD2ouZbAedhD3p7s8WDmCJfNforgDYPGAXSI08fTjPZ5B37lc5VXGzc1vJmibDwBNVzXuaUzg7N5H4BxqjhJ+kz9HLUJys7bpBDYAPvbut13AwJCWd059tS8YTYgC8HwrkewBfa1LSSpmMr9uR2EekTiAMH+Mx4AGzgbquccwBDlLmRhgXL/YiLPCEb6d2k5qJ6o800qddABkpqt7NG+sc2uvHZwZs57W1AHTFM1KkMShasADAh2FvzbzJOzVDMS3ZlT2BSFKdnkZFB6JyqJbhm6XANis9TrtzJdlPVp+rl8v3nIke6Jou7m2TKu53Vounupgkz2LzrQPhhatLIG7rfF/gUKWp15X3LKt+ZvuCDSqPUigF9yJntimC1HJR7Yj/dUrLAXWrT+1tnwPJJLGKAlQ5VeNDWRKCTt2vz3rJuo4+gIt75/Mkfl/gSZblZ9r/SEeeosZXneli/xNh1WVCvkRt2RnyyjtMkMqhzXh1PVOCbILqv0r7rGYm0CHIyKdhHL90cl9E1I6eEtQTCt6RXj8M0HHrHCHLVRpNM6WIbT5BCMGVnL0o5895qSRbCJz+5I8PGMhAN/Xrj4BgIdlKqlHtBHqTJwmK169toZ2IWxNzrAbIG7zh85Q/LG2A4yBcaBel52zdunokB0lv3A7kXnTI7M6ZnfZ7nwuj5lkGhqSpW+w5CI/FmRlplBEbnZy1ZxS3DL8rf1YWhO5XivWZBSRh1gFsjjyj3qRG1cm/6ors7WsEif6WRxns1MKDZa6KrbfMQ/swIb+2nb0tqxHeii6FcgVeAjE/Xwac1owx04dJKG8R5YQgHNnEfHf0qb8WOnU0eQSjazq+IK7cSuCqYzPEUB/x+QgGZqM3dBoYvNvZVOHDkbgdilWdagqO5bkybXfLpyMPuGq8mvAAEZGbR6RwXGlW9ErOWTfnjfx6dXFJqBj0OBSGFz4lWQasNOmVJeN4SFWSLfOGB/7ehV5YuoNNROHZEG9ElVuMnqbDMMuDleOt/cN/gsWxGw128mwU8/HxkOKqdTZnI7dHka67WCTf/FmBrxpNCaKJ1GxBTCSS7MNfhNj8S4Gtotg6Z3AM9cAeVROnppUMaiV5jjudLnNqoVrKO1/FijLlAc74kxydxKX1RQuMqHR63eecYr5o6MJ+B78VsLlCrpelWh6GOrCOBIoQmIcdpJL1pwE2zzZqBkecGTdK8KMOB6r1eNRURyrz6M899TZaoS/vNOxHf+5gORU+OyYIcIW6diP25GHF6u8TNjuL/GJzCnLLXd01KrsjRa51v4+O/VIAWXESJxfxWjv628J+cWUQpoD+Yytzs3jSMRJ23/XT+vUdtUMLDQq1vnIoeg/GjWh88MT6k9dRqDaQ+vodilFgvjuNw5pJpId9mfwyYeLCGb3BmHXdfQfhfPRQaupe/f8TG4Bk3eDKlYBaEK3kZYNN2Sdxz47m/vYBxvIOKtnqplB1pebzuXmAr/MuzQCknKe653dzaWQQ7MUhWYWvzIZwLe1v0rXxImLaz+AkAu+sYikhouNF3EW6w4crZ6MuUiDbIAx8XhAfegcvW6x9BPb3/sCxGWu9YyatqExB+TSm69qIkI9IwhjrcnzME+jWBx4mNQm5WwLzUjSyY4FZ0aMF5YFlXUD4hL4XfOeYv5rDe2s2D/Cn+28fZ9UCnOQvXFMnQqfc0G+ZqOWWD9l/liqUPaNQzZjxCHpUAD8Rcc90MniQ02ugHWsUupFUvhC9usY7zNPt5F2jO7qgzhafsQSd50jgLrC6Qx6bpHbXR3WNAu1BzGmwbz+ebGmwTjdy006Y6zipP7n/OJlvSmbq+SY+nefAVKK6EBMPbce5n3IdRI8+vbxCpN53rw3TvgNds1SuMiuLGxt89L71mxPDeanGhyHvOjmO56tnVpoHalQnL6TqNuqKsHjHCIKB4pCgj4WyYPvRvYvqi5EMr7lN3MotPR/KH7JUD1lZbU0QzfbrEBJnuQiVAyAC9vwXWp2TRU1/0aapyAH2cbglEHVAdl+1rb1u147uV0td1eNoQZsqHrIMIYVPXtLk2TIU3cJE08PjoYNDpfF/IcJnYQHl6nsplczX3Rgah4NbJJHl//5scUufqsSd//kbIS406ZWoMP//+jhGUswX/5nVNz/jAj9KmXPtAmMiK+khhbn1w/mELzZMT/WxcW//y/jsHaOM/61oAW/CjYhJtY622/TtMYuP7bilBvbiT3vB9n8IcFPnwM78H0KfhYDRdY5PhWJ4jWRQzB+HT5NVZV56LG82hcQms+jOTT/c9Y9sx5rPi1/wB7f/+c5UfUCKk3iwwCuywUc2MGnAwsXf1E5hoI55x1Q/Qby+sWH8NRjavZ8VaDsdi1NUVhH86BJHX1yaFt1w1OYeL5LVmdN+5Q+KuTvXEPDzUCg6xp0HhsUhTWSe7MZMM/6rsTUb0/nbUE3YQlGGt48kT1/6cnf6yHnvHtQx9EosOXN077yyEq/jE3YTiG/5SEJmXFeocJJ1EAd6vKeK6VEdJLOZ1km/EwOnZWCQpzCLKPHxrfh4yJhGq//2dos2E/3+MOcdW5EsgIdmTQUQetzRy5fQHhDBl37XbWzsqO/cASEDjyst1/8NEROqVAxWnddQV+umJ8IrKVgKvGaTc0GsQ4s8h0Osql5QKwlddPDjJhKInyWqYUKmmlIts+FIcXZ6yM6cljbsjUG2ksSOkuIw4sYHffRNgBOLApvD6XrR6Rt0rV2Uf8IpnIUVnb9Twt91QjAaD/dStSWDxg7aYY+VXIgnuowYdOkjywa2hlgrnI6PjaU3e3UjQ5Yk5mdIJGyHnv3/P+1EkMav1yFyF+FeJE/RXnWBw+Nh0aOo6TGlKX7d+dkP9+brvr79SdtXJtcD/aXBGiMNfG6/NQniQHYQlK78FEHDqOh+bDI0o+2Ub0h53EL/vlzjrBczVEZz2bOtvIL+DIzDkk9nCWt7tlqsq3l9JMtJk3r5HG2iJ9b/X11TG6wwMAjHLQ2oasaMEsydh88QPvI+hmqIHhvalpKoKOueJR0eZ9J8G2alNOIOy98jwvbc87Ewk9d+5G/tUijTmlbjFlDKXV05HalKxaRTrucc73On7yzAPS6f2v4ogiaWyWeV73dv/MsQT5HjRrsYV9dLAcI3T+zC2qEVINyNpEhoKV+xVSuWtT4AhBfpnZ7unIM+HX3msI0HiI+P+z2PFgkjGi5PqEbG/wNIWeRUjPtDEgbbubN+I4JaDLrW9borRBDob7ZFx+JdKeFVUKVeWqb/c88Ol7DhM0suLtuEd8tkDSMTD3DFx8UphPINHMHi51hAPttXL4Ektt/lKEUG/R4qZKohHjVpAcPIMiHyWr6xR8/EWnNJvBFET76yCdk5er7ADB/1bgoImhpSiZ/omZjPKPCEeZsOwvPmXL+1vlJNeGO3TzySmGA1X6e58gLrazDM71jywM1XL8zKHN6G3kB31Y8vLtP982N975SZXk2JwDvmv7AY/aDsFFk1v+nE7/hbvuOWhBH4kuemeYozPk2K22Vx/YGiDTLU7YilpOt29u3RZMBh4UJjlTP5ItxTzWv6ebL9b+GSU1Vsm2S8LMfVfJczaBSqE8J1A4YUjpsALL7++bwCPXFhaufdpDFtBlHb9makeYbqdg9ltvK/HwF/rNE6KrtWUkEcxmTB7Iyu5TiVaIgW/YxzQhpArliIMkOoK5L7ShVtF+DYqV01mk7fwop04hQRwg4KFmr5z9nYf05VVqkSe7gfnx5bxxlQ0qEV0jiwzf064qG11iEqjHcUgDWWsDs/LEGlzX31T5KVL+7D4EoKim7HBagiqRo5JI3WfDBgpKIruWz9j/J6Hp5Q/EJbMWB8NeSMuFarNw3AEYPBJtYQO/4oD/ZgPTSQ06di0EeumX5EbrdThO+fvYEVSxLtZ3AJkee0Xn0sDwNtiiZhJjJRDuG1YRKB1vOulfd9JjHeyu+UHTmrtra/pm+8Rixh4WKiLaLOCxIbZNoWRZSyyUGLPjAaAo+SQBpfO2uruWrzFxLlpvrXJNMCWtlJDKGAnlWK5xpU2tcxXbeD+sbdfwYXt/qTwDk6UqXR/aUt099DhSNl4Nk8mXwpw+b0nvjKOG6Mg1PRXjrMUMANvNgEArv8nMJs3vj1aHi8MHz/UfJWWzkcrSpZTNBhduXlGR7i+ip/THDp5R9KRNcDKECgtwgXg4EFN5HHfikP/XvsoCkHTg+NbsD8Gl6eknk4Arwn/BWGJ0hgW0/gUKrzuGZhub7igRP3abetpIm+24xEOlWl3YKpm2qTBFvX8ddDRvm1LcwnCJuEfZx12qPY9TrntMIQsv316zvpyWnyStX8VU4j6tQk+CWlLBUCJR6MdH9Cp7g2qdn2WM9qFbREmejH09dlWEPm8hPF0L7RxwRRdiCs0DP8ewk6ApoELkKU9hckSdbnXm8UHJmaNXjxv/q0fTTpu8rnl9lN0vQCpDRbCtcz12rGRFEA7Cfg7FhZn5QFkNmv1ZURKEsiZce1nS9K7HrwpC7yJV4Xt3eAVbLJfoXHrtwG60Z8gwaSnmxoL3s2ZlRqggZN/MHo1oUS4L+GwObFI596Ld4Mvi8l+cQmF1gJpkpnDio7TuO35npaMHiWzFqPSX3qNgkIPGuX0qGYnPIVsM901Yu8oZnOZOY1TbtIdFUNKNq2dP8SJ4F/VCEzIjF0/Rh+7UrZj80tC6rognVH3mqa8eCs/lcQU1Pjj98kBmAKDbZUTwosv02UunRR3n0X6c+f73mtwB7/WbQ16gO431EtwZbNG1SM4TZPBnsQSESlsfG2JLQXx5xWf4bmQ/xcVCPISAX5897JxHKLD/Xkgu57+ABR2+MMtEbX64+MNlBHpKC7sjlWVEShf5qA+dGc59LFVlZrX/Enq9z/v+wnZ1HErmxmjJjxOA+hAjVUWgtq6ygAi/8ewJDjUMFw3zhQFtbyTLDPFd21Ji5S5QPZo9nMSxdg1+DGFSN0wlWt7XeYPbHqLfliV0J1kOhQNp0VbUPy0MS2Ms66OxtSWvaULaWHnfAA+sieVVgtjDwN3nKonWapkSKRN8BKKJQpCfqo8RQI5udhfu5s5+7vwsppmAJDgz2GNA7d43VdbV2l/SrvEu4RYslmNJmfSOVbssxAhSYy6WxpIQdDB0FVBpZ6IM8yr81QN+XLZ3n/wed/R+s6LslkxKbzzst/GkRbe6rFmtvJCwr1T44ETM+IMgOnjUO0eG6a1n2w7lwM1oFBvzMUWRkNFOvKcx3oSb5XdenZ5dXsute6nkRypBiSdAtA2fxAd8UdLOZW/MB7fZoEuFheQXijdaF8kuaRZoSeWdKOkKsGYEGaXfaDKTu0WMTcLniQs7KRCz9iK3SP+Y2xIjkfVGqFLSQ6vh+A1u6FdfwXsv1VPMfi2cxmdM+/xTgMXEyo2ZGcQ2YmPsghnYdv2+z48JpGZA4tUK1p1q2VdVxyfypXEXcrxKKtmt8UdW7sHWmKMqDuBBM3J/JUQx8eUYN4pJ5oRqvdiPHU1o/WPjiKvnlCqOdyxlxF54L9PrtLD1NejZ9aZDivVr6ZfMFK1/psVygoPIAnphcJWWb9+5IKMKmgRQULsTPZi6Bw4wP32zVEoKcHpP73CkFAqS98nSaGoWDjDJiaACJn4p5o1jq9R4Q4VcibhXF//LHP0bdf63kRVZdRbbhGe7sDQcyWS5tpkfeYHnff25WK+4FpzLlAcbaKmHdIBqOw3fImx1uqQIADH0TyHzFlqTG6nMoY81svP0T6BIyELMS8tMe+E1p6TFP6sVpZa6VNaTumufD5aj9goRa9SAmdJT4HhI2r0egj8UrgFb8L59wGLnYlzkLAiUd3m/WWIIEU61kPoEjd3gIVy/fiBcgqQqHnoXpL0SqLGdGGgn7DQeVMSYWHfjno1FngIKP9cjYaTlcRP6bZunjHP13/lbVm4awti894pTf/ZNNqr4OR+tDVie/m+rC8QpVnRbsCMPukOH87B2jM4AG6pHuXl1x9SiKdhYJVOhfo/+SCaGjUW2CoogL1FFhFGN9o+acoVLl0SXs/3vrSccmZeAF3NewFuOg/P12QYKQF+SH+KYcNnsAhIAELPBUgre/KRUJEA+KPD0MHRjv+3J/j2Z23MuJmkfy7leWcMsti8wXLSHgXFJTaksx1Woi6oljwxFVIJG12SBSZLNJDbXMYPekmiXT4FclKI35BFgqnYpKfcsr+f8HUXQoHJ9UYZ4J5YMiHHyAxg6eidhodgqJ2Htf/xYEx+G0zXchuzlt8hcAl+AT8NCQ4orFc4DerabF1enA7NTLnvtZh3FUwqIOvY7Q4DYmoDHwXTSw5UNNh6r7j0B/ezMYJMDcw4+6gCTZX4YQ+7Xs8de72vsR3cmfpxIX64/6KR1p3VX4F6vfHEzxzarh8aDH4G1DFoBBM6npXFpK+Rh+WrcFclAeAxi0PoaR9CpOxxGLSdvxKVSw8oOOanG/soKImRopN38AdcUhhM2GT/PgQeSQrG12njuJJD5Z7vWfAZmFybYLdSA91kB4aoBhoj1Z//KNIVVujqaLLRwCkbyn4vh0739C9V9iSjybeOIeSOvNs7LW1a7EUtNoKAnOGML4U8KBXpfrw73WjAszJG4Qscq+Xr3kZWR4Omm0xT6qE9y6FNSpstV4onMZSqCEJ+3VX9qjvdx5QVrM0WXxmPZxejdfnihcFAjzv5PjlTl6ickDbHe6+Lch52pjOPqk+m3RZ+bh2JSMGtFBuODbMchrpRVlt16NTQ05Ps0IDtWlUmWfP2vX8M4YDynIuOZ4Ck91+591B98Gw9fw+yQogTR8CSg0zaJu+rlBo/mr3A+1NziF+kdubz+whc857AZt6DwIBIF5+5yiaaf3ByQp1Fm3sOkZDAzwsYSQTM/Kv6idkugF63FDobDdUY3huruU+sCaBuRR+HmOowvmZoBjZHNh77SXFtmY/oOUE7ifN7nBHAo83S/xvcS6H4Ci2u/9Id62Wv6Ui+zMNLAzhfkTkVcW2BwrnYvpur0ZDlzs+ZLsmGTWvd1892t78gx1YjEJusGcxphjLkV0UfAKlekfSBVWHE2ahk4AbbRmHyL7GYdtKfdlINwrcdJuf3Cee1nfUojDQn/YmItESOFhtLzrkEv4k2XpMU9oaJQ3VUC+1INh6BE68pkHameGJm4Gvdb24Q0fXWxd9Tp3A9mzFSe4qXDGGDIV4AAGV1jIDfveknH1TwWpUT6HiQxKP3AAHJNkJeRlj/mXBmS4S1j8FK6YmpK7jyyAiRbsMCCLoJcx01fvgpMvKQRxu9IOwymconQjD56g7ksOrcOeoTbius4JnGesAS1DtgdaophYsw1wGIsMS3P7K6doE3K5czznqPQLSRRF/Ylzb5NtSKsL33SgskFNCF4khn5LWaDxI23ZRi2hzqN8uW8UzZEBYy68+VtGLSymQrXGUlr2nO2BbBIT5Vh1RmGAyDXaW0FPrpx3wv2UYdFk9tSl+906bMxCuXQaKDQP/U19UEcVGK4gmksL8lAorxQSAOwpeYX9xrZsh6yoGaL/X5O3tgQC8OM+/GvxnW9XvAtu/JxAigydfSmZfqZfg1XOcHNOpLlN8j64OZ36l5qawDBJ62YaTvxeNmm5gowCdBosgcpHOgNgwA+sknN8XmsR2IYChcafl9bGNMZ/nB5guWuvEziv6QI2bP2DtyKWG/qUjZMaxy+wASkkVGtuwGtywkTYG6MYrZBo18vYcww48G/+f+eITA/qMwbLlJC0S3+/ai2pPvkOhRRVmGTuSupaxhIk0xoXLtixCxSAn4Z3OnUS3wBqVscLI4P3GP7i/6gxYsswsVmkvDXFLhO/OKcur8flegCSKiqmVpIRvCzgbjEA0mXPn+RExXY/2OE1f/BYuWpRQY8gCDpMOYBx9Gn4tL3hihSIR1ixh2PIIT7cr2gUJbfs76EKYG52Jk0UZF/PQkBxGuFCEWXnG6ue/hTIqjTRq1sotVrKrwIGHDrITyuanUzbIYdgdEeV88K1VD82TYB2B61Ft+tB1KqHPmT9+hWoaV+iF3SuvtJqvnoLaA8wxrD56AUMULEgzO9SvBcBAfqz/dzMYzwMt/YLszDbmGe1bcHHfFMcvGql9bf/tp+Hrj4q18aNnftGjmXTfws39emn7/5IBxog9MrmftAA5Oq4awenm8HimWO72dwVlHcHmutVMdrMHw+p2vzpzT+B0iIZ+IEpplwWhClcXlxhxAsF3CHRnnaUEqq3ByQ+cqhe5SvR4SFxh/LZoQwtj8QZQGT1BzY2EMpYnUcZWQEPlwFZw+7UryK9qV8KgruYsvyMoK16KI2sN4SOblrVwhyiL8+IBZ8cpUhsJQSU7TFHAi+L2F0sn0y+FtDODlnuif2Mba8QddPZYYxjTsIgkMe3M6+7kXxUfZvbCUlyq71J1eNczGk6Vqw6rSx2K3vM+DjLxDRGzWepTO2qTT/W8S7u0QXcyFUahcB4vq8xCYTpy8iswtnyz7Kx6lgTEQJ9RqkgEIN6DOUqB0uRdeYuDa7AP7Zy9z+ZlTsmVR5vtV71m3dmdtNeWghbr5PnPJtjXAzcvZjxyV96VEx/B1TA0IEQSI50ywGuIbmAYdQg/l/rxhQLX+6uOLyFsaUt6mtjpAJkLfehnB6MlOHnNOrWLvCBqVBS07jcM+4RzLEed3f3/0Xwp92U+nataNHyEgnnuYR6PXEjRLETz0xrt3UglfK7Bn4aNlXG7cZco4lMziLv5+Mh2JCww3mz69Z9ZMRR/xv5EKJ38IFxKd9dw5CgPIXja/gzAshMbF14/qBIgNkdUQeP8YE7SrICGtiTnAKTyA9cXa3OauDHxZOdTP7yuYBzD1UcHstIO16FxF1bRUAlSkszI83YufTchU8OPnnozDl9bS0y6CnnjGwgj9M61cXcZsljjhLeT/Vq+30ScN2PcT/dOoxUDqDS38+OpCCzLDdnwHQc3ECQVIkaxmdPaZTSdfp2jjGzSdNLM5yPQsgJDl+ZnhclDQi8ltUnkqWJ323IvTZPN8rn0+EshL1cx9PiaLTzUsryn9Zp2Nt/detUAh4N/2I3dlMQqjHFxSihv0uykzflq5clMy2ZBaxoEb0/QMp03IQQus3vnZd/NOmSsmgqXqKFP3ozyDgY7RQS+npabe/hNG+5sa5FtvL8v0uYuag2NewYkcol3TOTadpuncCnDgOGpmLnTQ1PEPUN2cNsrW8LYfIv+hzfb7vod+ipXHzmbgj5Fzc6RcT/5PD7VQ8nTJBNj1urkVUx9uJvTWmqY08OC80rGDLaWXv243VB16gjt4Xtwp5H2UDR0LiKW24Ed/sOO8jl1yEU/XAb3h7ScKnCFy/V3sICrkY1D0K9fSokHIL0s5/7DLShLAPXRbV7fbv4qj6OwHC9d5PlEOX3LRpQ3P7hcSAKlIKPDM83ypz56U5+rJeo0cyUtC7wltL8wqEiNSgZsDWzACc7RFoZqhlD0+sihIBQlkQTXmvUyIOZhkQX2zqME5VRC7ms1sa3CY+odMn3mMBiTvCMKnnCxg5ZPLq4GUDB4jF8Br2K4x4sxfWjGXQatJ25I1JyrIv2Z4bP1jKw5C+B2/s0v4dGUOsaS6IPIQV3ETQ+F2fSl2BPBXHzyYN8VmwWIrKeMX9pyGWuAOVXwkxJsRBaBVzLhZDP8ONGncknL5DpTxHN32GgFWMwsc0GmL0oRDmRT8u2lvjAKUIi0MmXhIHSlFeh3Qh5pP6ap4YUd6b569ZIaHgya2AyD12cPxY0In/PBjzDctTaKJCU+xc6m9RkNLDEE8guvxtJP8sl8N9bLqw0F/qejaBlcHYqw31zYpsutQp07hsP1vhGdl4hJ1wA7OCsAHnKj9879uSHILEmuZ6vI1lT4tvnWCVKZhhYrWHW9oPKPKpbOC6FTjf/OtUvwmiXr2ykvyLzHGQeyS7BenZpL3N/CaF5T7Gkml7JXN5cj0PKaDpZVImD61FuMgFHPqSHvt4Ej4KBdAfdcoO3AjQPLwwtKsgGM+ty4lNZMBEItJSRLunG5ckrM/BeoXWoPZVvEoIzLgFQYPupMwZCXis4W2SCJ2zsefZqCj+aTfSq1FYdUj2UeJALvVTf7vuuikOE1Hit3UIAGUi/sqgMum9vw218y1FlY/9XnOji9nqhGAcMYICc7BiqLZj5N+cKEuSAuiyWbMg81ZD1lHovy/we2eaCcCv4MzEW3O0mVA/t2xdA0cxTVbXmFhn+tARDpvDz5ftLr15OAAmvo2QiAky+feVO4bGibv2nlBmBzqx0lEDfEm4UnEs11pbnwZlJ/0Y73/wBPYfTNZiJKR73TzdCW1BffiJq9bLjQmaKnU0+gN8sfe25IKSUCooQwxePDrFn3a/zUgWxvPoTYVXfobY/GV2qqTkeVDV9D8657fhY0/wiaJ5NfLxhXbE/naxs34N0hd6vxNfdm1TCnozm/NKSCThchoYgMF7Z2tzXFovRfsNVkf86JjrM60r7UIuV3bsmfrMOqzjXjN6HPBG25zCJ3QLueySbj9oFvX/HxWBqh31PBPxduCVAxMqC9HK+YL3oBZqBruoh6LKvdMqoz0PYXUBrwbiioyE8Tj5ImjJmiOOWLbAZvIZ/l9rIPljx3T5glJ2ewlfuIT5GlodQsAf/IEtmYkML5SRQGxxwW+rlZkD8belJNu09Itwx9xDULTnemVDeojdbgcd2gKGM9aO00Jivtbs7ZyOSE8IPh98GfvatD8Ud5uHcZfAfMiPSlIxd4UqeSDzuNfbKDuFepkyC/s3j9fawmhY1b9NqDi0ZS5eP35l7rL2eK5QlWLlyCmxx8AFaFiTuD2pMUxZV5mBSJuJduOaq2ZrWpu28DE8jl/hisBz7bGWH6qLF0ayWNq1Sejtcs8KQrQqJk5P9QHDYHOIolgNsMDmEaWcTelghbfFCDqWrq6YLwDWy+m68ec5nShgq2fduUBpQUuKKKgnttaUX9PRfMmxqJyU7e0RLr1bev+ge1KK0bZyhHKKDE8gQX9Vf7rNHWOxBtZcxwwGusyMpH77qWZxXsQmbgIGhtiO+gSSRCyu/ek+OFsz1HMiQH0IHV7PjJi3dszYfFp8ue9h4+AfKte4MTiehPvxNcm/T1t9vsFZx8rHN5ie77r2jzZOq/Em4Q+H9sNcZakf9HnzCc1fJixppxP8FQABmVnqa6GbJhwaka7WH7Wdoz1WxOjSNV8N9sgW5S3Ppgkut+TTCkjA+AodUOk1KIR+8G8S3WrSZG4nyqfJ6FEjXl6a/LEoRMHZUqfPRWvwqrtXYy9IUsmUGzkqi76ib4NANCe5DnyOxnFRZ9d8FdBVBjra3iNuZhJuWW5Omi/hBigqDsg0mu2AhfJDXdwyMIJ33HHHPfS2JtjegRejX11m41TbNL+Qp7mR0g9CPKTj9PIjuSycGN/YPozXI4zarXuAeLv5CHKtKcJKRbd6R2oLNiEt0T8+QIVJH7zt9ncKMgd49vV2P1AyScZ9Qzbu3m3LBnuu6dw7aE0b6r4kzVkI/GUS88mA53L/rLtntkFlZXGtIoqNP2mD3eVv08AVVPT3wJn81zpbJV9SuqZ6Pd1ge0Zz2RFHeCdV5CLPftH9V5o9+VzFu4R0QeumqDwUhXn3IyYotdJnxr1l3BqWnQVAeDBEOtPyJQx1q5+mODiClXtYeBLTWtsJ42AMBcf/IFIhpfhYO08hsg0Ik+DpQFNOKReK3o3cudkxWX0soPtI5eSFOA6yNylS+IQjrQtYQ/5s4UcixJfokumBUjpH9ofSjUTwPCapGFndfqqG5IHeMMvfg+88SXm7bNyjk6pGKzL+WxDAdqKtQ72WWVbOk3I+ueGuammmB2pvFZvqIcU/lvW3n9+r2lycnQLE4OX9R1jIgW4cDjJ3v8dAa66mVcfC7ptCr5io6mCaA9qI9T9FFWqo1ZAaMxgxAu8aXqmaOYryMND2sTUfoHvxcYK7hEiJhCLYFDx3PBhE97c2a0ub1/ePJcyJOqr7UaTAPTJ+xvZtjb/40sloY1ltRnTkWILmIP2b7S3AdXCR+YiArMUHwdncpjpyDGfzqGOUoAuaamWzAMacQtb34/M32FEgR5lUEf8fRzFrZUhzQj0fR7/6gdzdnVVvcSneLmtqJ930VCCDORY8CVdQWdo/S3PNkX3pQsPVKWIYGAMrFZoq8bQ/OJBDSXP7KSBdL3QN0Zqd393p6VFc7DnlnFiN00SY5Nux7yadeIM0Upl2rVsu8/VAI"
          ),
          r = () => v(n),
          i = () => new Set(r()),
          o = (e, t) => t.forEach((t) => e.add(t));
        (s = new Map(x(n))),
          (c = i()),
          (l = r()),
          (u = new Set(r().map((e) => l[e]))),
          (l = new Set(l)),
          (d = i()),
          i();
        let a = A(n),
          g = n(),
          E = () => {
            let e = new Set();
            return r().forEach((t) => o(e, a[t])), o(e, r()), e;
          };
        (f = C((e) => {
          let t = C(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= g;
            (t[0] -= 32), (t = B(t)), r && (t = `Restricted[${t}]`);
            let i = E();
            return { N: t, P: i, Q: E(), M: !n(), R: r };
          }
        })),
          (h = i()),
          (p = new Map());
        let I = r()
          .concat(F(h))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (I.forEach((e, t) => {
          let r = n(),
            i = (I[t] = r ? I[t - r] : { V: [], M: new Map() });
          i.V.push(e), h.has(e) || p.set(e, i);
        }),
        new Set(p.values()))) {
          let n = [];
          for (let t of e) {
            let e = f.filter((e) => j(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              o(r.G, e);
          }
          let r = n.flatMap((e) => F(e.G));
          for (let { G: e, V: i } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of i) t.set(e, n);
          }
        }
        b = new Set();
        let k = new Set(),
          S = (e) => (b.has(e) ? k.add(e) : b.add(e));
        for (let e of f) {
          for (let t of e.P) S(t);
          for (let t of e.Q) S(t);
        }
        for (let e of b) p.has(e) || k.has(e) || p.set(e, 1);
        for (let r of (o(b, R(b).map(O)),
        (m = ((e = []),
        (t = v(n)),
        (function t({ S: n, B: r }, i, o) {
          if (!(4 & n) || o !== i[i.length - 1])
            for (let a of (2 & n && (o = i[i.length - 1]),
            1 & n && e.push(i),
            r))
              for (let e of a.Q) t(a, [...i, e], o);
        })(
          (function e(r) {
            return {
              S: n(),
              B: C(() => {
                let r = v(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => N.from(e))
          .sort(P)),
        (y = new Map()),
        m)) {
          let e = [y];
          for (let t of r) {
            let n = e.map((e) => {
              let n = e.get(t);
              return n || ((n = new Map()), e.set(t, n)), n;
            });
            65039 === t ? e.push(...n) : (e = n);
          }
          for (let t of e) t.V = r;
        }
      }
      function D(e) {
        return (W(e) ? "" : `${L(q([e]))} `) + I(e);
      }
      function L(e) {
        return `"${e}"\u200E`;
      }
      function q(e, t = 1 / 0, n = I) {
        var r;
        let i = [];
        (r = e[0]),
          U(),
          l.has(r) && i.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let o = 0,
          a = e.length;
        for (let t = 0; t < a; t++) {
          let r = e[t];
          W(r) && (i.push(B(e.slice(o, t))), i.push(n(r)), (o = t + 1));
        }
        return i.push(B(e.slice(o, a))), i.join("");
      }
      function W(e) {
        return U(), d.has(e);
      }
      function Q(e) {
        return Error(`disallowed character: ${D(e)}`);
      }
      function z(e, t) {
        let n = D(t),
          r = f.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function $(e) {
        return Error(`illegal placement: ${e}`);
      }
      function G(e) {
        return e.filter((e) => 65039 != e);
      }
      function H(e) {
        var t = (function (e, t, n) {
          if (!e) return [];
          U();
          let r = 0;
          return e.split(".").map((e) => {
            let i = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              o = { input: i, offset: r };
            r += i.length + 1;
            try {
              let e,
                r = (o.tokens = (function (e, t, n) {
                  let r = [],
                    i = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let o = (function (e, t) {
                      let n,
                        r = y,
                        i = e.length;
                      for (; i && (r = r.get(e[--i])); ) {
                        let { V: t } = r;
                        t && ((n = t), (e.length = i));
                      }
                      return n;
                    })(e);
                    if (o) i.length && (r.push(t(i)), (i = [])), r.push(n(o));
                    else {
                      let t = e.pop();
                      if (b.has(t)) i.push(t);
                      else {
                        let e = s.get(t);
                        if (e) i.push(...e);
                        else if (!c.has(t)) throw Q(t);
                      }
                    }
                  }
                  return i.length && r.push(t(i)), r;
                })(i, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let d = (o.output = r.flat());
              for (let e = d.lastIndexOf(95); e > 0; )
                if (95 !== d[--e])
                  throw Error("underscore allowed only at start");
              if (
                !(o.emoji = a > 1 || r[0].is_emoji) &&
                d.every((e) => e < 128)
              ) {
                if (d.length >= 4 && 45 == d[2] && 45 == d[3])
                  throw Error(`invalid label extension: "${B(d.slice(0, 4))}"`);
                e = "ASCII";
              } else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (l.has(d[0])) throw $("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && l.has(t[0]))
                      throw $(
                        `emoji + combining mark: "${B(r[e - 1])} + ${q([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = g.get(t);
                    if (n) throw $(`leading ${n}`);
                    let r = e.length,
                      i = -1;
                    for (let o = 1; o < r; o++) {
                      t = e[o];
                      let r = g.get(t);
                      if (r) {
                        if (i == o) throw $(`${n} + ${r}`);
                        (i = o + 1), (n = r);
                      }
                    }
                    if (i == r) throw $(`trailing ${n}`);
                  })(d);
                  let n = F(new Set(t)),
                    [i] = (function (e) {
                      let t = f;
                      for (let n of e) {
                        let e = t.filter((e) => j(e, n));
                        if (!e.length)
                          if (f.some((e) => j(e, n))) throw z(t[0], n);
                          else throw Q(n);
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!j(e, n)) throw z(e, n);
                    if (e.M) {
                      let e = R(t).map(O);
                      for (let t = 1, n = e.length; t < n; t++)
                        if (u.has(e[t])) {
                          let r = t + 1;
                          for (let i; r < n && u.has((i = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == i)
                                throw Error(
                                  `duplicate non-spacing marks: ${D(i)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${L(
                                q(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(i, t),
                    (function (e, t) {
                      let n,
                        r = [];
                      for (let e of t) {
                        let t = p.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : F(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => j(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(i, n),
                    (e = i.N);
                } else e = "Emoji";
              }
              o.type = e;
            } catch (e) {
              o.error = e;
            }
            return o;
          });
        })(e, T, G);
        return t
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(
                1 == t.length ? r : `Invalid label ${L(q(e, 63))}: ${r}`
              );
            }
            return B(r);
          })
          .join(".");
      }
    },
    80197: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => i });
      var r = n(56538);
      function i(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, r.Q)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, r.Q)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, r.Q)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, r.Q)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, r.Q)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    80549: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => u });
      var r = n(12115),
        i = n(38559),
        o = n(74268),
        a = n(38445),
        s = n(34049),
        c = class extends a.Q {
          #e;
          #o = void 0;
          #q;
          #W;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#Q();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, s.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#q,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, s.EN)(t.mutationKey) !== (0, s.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#q?.state.status === "pending" &&
                  this.#q.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#q?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#Q(), this.#C(e);
          }
          getCurrentResult() {
            return this.#o;
          }
          reset() {
            this.#q?.removeObserver(this),
              (this.#q = void 0),
              this.#Q(),
              this.#C();
          }
          mutate(e, t) {
            return (
              (this.#W = t),
              this.#q?.removeObserver(this),
              (this.#q = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#q.addObserver(this),
              this.#q.execute(e)
            );
          }
          #Q() {
            let e = this.#q?.state ?? (0, i.$)();
            this.#o = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #C(e) {
            o.jG.batch(() => {
              if (this.#W && this.hasListeners()) {
                let t = this.#o.variables,
                  n = this.#o.context,
                  r = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                e?.type === "success"
                  ? (this.#W.onSuccess?.(e.data, t, n, r),
                    this.#W.onSettled?.(e.data, null, t, n, r))
                  : e?.type === "error" &&
                    (this.#W.onError?.(e.error, t, n, r),
                    this.#W.onSettled?.(void 0, e.error, t, n, r));
              }
              this.listeners.forEach((e) => {
                e(this.#o);
              });
            });
          }
        },
        l = n(99776);
      function u(e, t) {
        let n = (0, l.jE)(t),
          [i] = r.useState(() => new c(n, e));
        r.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let a = r.useSyncExternalStore(
            r.useCallback((e) => i.subscribe(o.jG.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          u = r.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(s.lQ);
            },
            [i]
          );
        if (a.error && (0, s.GU)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: u, mutateAsync: a.mutate };
      }
    },
    80586: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => C });
      var r = n(95155),
        i = n(12115);
      let o = { newline: 10, reset: 27 };
      function a(e, t) {
        return e.toString(2).padStart(t, "0");
      }
      function s(e, t) {
        let n = e % t;
        return n >= 0 ? n : t + n;
      }
      function c(e, t) {
        return Array(e).fill(t);
      }
      function l(...e) {
        let t = 0;
        for (let n of e) t = Math.max(t, n.length);
        let n = [];
        for (let r = 0; r < t; r++)
          for (let t of e) r >= t.length || n.push(t[r]);
        return new Uint8Array(n);
      }
      function u(e, t, n) {
        if (n < 0 || n + t.length > e.length) return !1;
        for (let r = 0; r < t.length; r++) if (t[r] !== e[n + r]) return !1;
        return !0;
      }
      function d(e) {
        return {
          has: (t) => e.includes(t),
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0]))
              throw Error("alphabet.decode input should be array of strings");
            return t.map((t) => {
              if ("string" != typeof t)
                throw Error(`alphabet.decode: not string element=${t}`);
              let n = e.indexOf(t);
              if (-1 === n)
                throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return n;
            });
          },
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" != typeof t[0]))
              throw Error(
                "alphabet.encode input should be an array of numbers"
              );
            return t.map((t) => {
              if (!Number.isSafeInteger(t))
                throw Error(`integer expected: ${t}`);
              if (t < 0 || t >= e.length)
                throw Error(
                  `Digit index outside alphabet: ${t} (alphabet: ${e.length})`
                );
              return e[t];
            });
          },
        };
      }
      class f {
        static size(e, t) {
          if (
            ("number" == typeof e && (e = { height: e, width: e }),
            !Number.isSafeInteger(e.height) && e.height !== 1 / 0)
          )
            throw Error(
              `Bitmap: invalid height=${e.height} (${typeof e.height})`
            );
          if (!Number.isSafeInteger(e.width) && e.width !== 1 / 0)
            throw Error(`Bitmap: invalid width=${e.width} (${typeof e.width})`);
          return (
            void 0 !== t &&
              (e = {
                width: Math.min(e.width, t.width),
                height: Math.min(e.height, t.height),
              }),
            e
          );
        }
        static fromString(e) {
          let t,
            n = (e = e.replace(/^\n+/g, "").replace(/\n+$/g, "")).split(
              String.fromCharCode(o.newline)
            ),
            r = n.length,
            i = Array(r);
          for (let e of n) {
            let n = e.split("").map((e) => {
              if ("X" === e) return !0;
              if (" " === e) return !1;
              if ("?" !== e)
                throw Error(`Bitmap.fromString: unknown symbol=${e}`);
            });
            if (t && n.length !== t)
              throw Error(
                `Bitmap.fromString different row sizes: width=${t} cur=${n.length}`
              );
            (t = n.length), i.push(n);
          }
          return t || (t = 0), new f({ height: r, width: t }, i);
        }
        data;
        height;
        width;
        constructor(e, t) {
          let { height: n, width: r } = f.size(e);
          (this.data = t || Array.from({ length: n }, () => c(r, void 0))),
            (this.height = n),
            (this.width = r);
        }
        point(e) {
          return this.data[e.y][e.x];
        }
        isInside(e) {
          return 0 <= e.x && e.x < this.width && 0 <= e.y && e.y < this.height;
        }
        size(e) {
          if (!e) return { height: this.height, width: this.width };
          let { x: t, y: n } = this.xy(e);
          return { height: this.height - n, width: this.width - t };
        }
        xy(e) {
          if (
            ("number" == typeof e && (e = { x: e, y: e }),
            !Number.isSafeInteger(e.x))
          )
            throw Error(`Bitmap: invalid x=${e.x}`);
          if (!Number.isSafeInteger(e.y))
            throw Error(`Bitmap: invalid y=${e.y}`);
          return (e.x = s(e.x, this.width)), (e.y = s(e.y, this.height)), e;
        }
        rect(e, t, n) {
          let { x: r, y: i } = this.xy(e),
            { height: o, width: a } = f.size(t, this.size({ x: r, y: i }));
          for (let e = 0; e < o; e++)
            for (let t = 0; t < a; t++)
              this.data[i + e][r + t] =
                "function" == typeof n
                  ? n({ x: t, y: e }, this.data[i + e][r + t])
                  : n;
          return this;
        }
        rectRead(e, t, n) {
          return this.rect(e, t, (e, t) => (n(e, t), t));
        }
        hLine(e, t, n) {
          return this.rect(e, { width: t, height: 1 }, n);
        }
        vLine(e, t, n) {
          return this.rect(e, { width: 1, height: t }, n);
        }
        border(e = 2, t) {
          let n = this.height + 2 * e,
            r = this.width + 2 * e,
            i = c(e, t),
            o = Array.from({ length: e }, () => c(r, t));
          return new f({ height: n, width: r }, [
            ...o,
            ...this.data.map((e) => [...i, ...e, ...i]),
            ...o,
          ]);
        }
        embed(e, t) {
          return this.rect(e, t.size(), ({ x: e, y: n }) => t.data[n][e]);
        }
        rectSlice(e, t = this.size()) {
          let n = new f(f.size(t, this.size(this.xy(e))));
          return this.rect(e, t, ({ x: e, y: t }, r) => (n.data[t][e] = r)), n;
        }
        inverse() {
          let { height: e, width: t } = this;
          return new f({ height: t, width: e }).rect(
            { x: 0, y: 0 },
            1 / 0,
            ({ x: e, y: t }) => this.data[e][t]
          );
        }
        scale(e) {
          if (!Number.isSafeInteger(e) || e > 1024)
            throw Error(`invalid scale factor: ${e}`);
          let { height: t, width: n } = this;
          return new f({ height: e * t, width: e * n }).rect(
            { x: 0, y: 0 },
            1 / 0,
            ({ x: t, y: n }) => this.data[Math.floor(n / e)][Math.floor(t / e)]
          );
        }
        clone() {
          return new f(this.size()).rect(
            { x: 0, y: 0 },
            this.size(),
            ({ x: e, y: t }) => this.data[t][e]
          );
        }
        assertDrawn() {
          this.rectRead(0, 1 / 0, (e, t) => {
            if ("boolean" != typeof t)
              throw Error(`Invalid color type=${typeof t}`);
          });
        }
        toString() {
          return this.data
            .map((e) =>
              e.map((e) => (void 0 === e ? "?" : e ? "X" : " ")).join("")
            )
            .join(String.fromCharCode(o.newline));
        }
        toASCII() {
          let { height: e, width: t, data: n } = this,
            r = "";
          for (let i = 0; i < e; i += 2) {
            for (let o = 0; o < t; o++) {
              let t = n[i][o],
                a = i + 1 >= e || n[i + 1][o];
              t || a
                ? !t && a
                  ? (r += "▀")
                  : t && !a
                  ? (r += "▄")
                  : t && a && (r += " ")
                : (r += "█");
            }
            r += String.fromCharCode(o.newline);
          }
          return r;
        }
        toTerm() {
          let e = String.fromCharCode(o.reset),
            t = e + "[0m",
            n = e + "[1;47m  " + t,
            r = e + "[40m  " + t;
          return this.data
            .map((e) => e.map((e) => (e ? r : n)).join(""))
            .join(String.fromCharCode(o.newline));
        }
        toSVG(e = !0) {
          let t,
            n = `<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">`,
            r = "";
          return (
            this.rectRead(0, 1 / 0, (i, o) => {
              if (!o) return;
              let { x: a, y: s } = i;
              if (!e) {
                n += `<rect x="${a}" y="${s}" width="1" height="1" />`;
                return;
              }
              let c = `M${a} ${s}`;
              if (t) {
                let e = `m${a - t.x} ${s - t.y}`;
                e.length <= c.length && (c = e);
              }
              let l = a < 10 ? `H${a}` : "h-1";
              (r += `${c}h1v1${l}Z`), (t = i);
            }),
            e && (n += `<path d="${r}"/>`),
            (n += "</svg>")
          );
        }
        toGIF() {
          let e = (e) => [255 & e, (e >>> 8) & 255],
            t = [...e(this.width), ...e(this.height)],
            n = [];
          this.rectRead(0, 1 / 0, (e, t) => n.push(+(!0 === t)));
          let r = [
              71,
              73,
              70,
              56,
              55,
              97,
              ...t,
              246,
              0,
              0,
              255,
              255,
              255,
              ...c(381, 0),
              44,
              0,
              0,
              0,
              0,
              ...t,
              0,
              7,
            ],
            i = Math.floor(n.length / 126);
          for (let e = 0; e < i; e++)
            r.push(127, 128, ...n.slice(126 * e, 126 * (e + 1)).map((e) => +e));
          return (
            r.push(
              (n.length % 126) + 1,
              128,
              ...n.slice(126 * i).map((e) => +e)
            ),
            r.push(1, 129, 0, 59),
            new Uint8Array(r)
          );
        }
        toImage(e = !1) {
          let { height: t, width: n } = this.size(),
            r = new Uint8Array(t * n * (e ? 3 : 4)),
            i = 0;
          for (let o = 0; o < t; o++)
            for (let t = 0; t < n; t++) {
              let n = 255 * !this.data[o][t];
              (r[i++] = n), (r[i++] = n), (r[i++] = n), e || (r[i++] = 255);
            }
          return { height: t, width: n, data: r };
        }
      }
      let h = ["low", "medium", "quartile", "high"],
        p = ["numeric", "alphanumeric", "byte", "kanji", "eci"],
        b = [
          26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ],
        m = {
          low: [
            7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
            30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
          medium: [
            10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
            26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            28, 28, 28, 28, 28, 28,
          ],
          quartile: [
            13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
            28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
          high: [
            17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
            28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
        },
        y = {
          low: [
            1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
            10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
          ],
          medium: [
            1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
            17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43,
            45, 47, 49,
          ],
          quartile: [
            1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
            23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59,
            62, 65, 68,
          ],
          high: [
            1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
            25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66,
            70, 74, 77, 81,
          ],
        },
        g = {
          size: {
            encode: (e) => 21 + 4 * (e - 1),
            decode: (e) => (e - 17) / 4,
          },
          sizeType: (e) => Math.floor((e + 7) / 17),
          alignmentPatterns(e) {
            if (1 === e) return [];
            let t = g.size.encode(e) - 6 - 1,
              n = t - 6,
              r = Math.ceil(n / 28),
              i = Math.floor(n / r);
            i % 2 ? (i += 1) : (n % r) * 2 >= r && (i += 2);
            let o = [6];
            for (let e = 1; e < r; e++) o.push(t - (r - e) * i);
            return o.push(t), o;
          },
          ECCode: { low: 1, medium: 0, quartile: 3, high: 2 },
          formatMask: 21522,
          formatBits(e, t) {
            let n = (g.ECCode[e] << 3) | t,
              r = n;
            for (let e = 0; e < 10; e++) r = (r << 1) ^ ((r >> 9) * 1335);
            return ((n << 10) | r) ^ g.formatMask;
          },
          versionBits(e) {
            let t = e;
            for (let e = 0; e < 12; e++) t = (t << 1) ^ ((t >> 11) * 7973);
            return (e << 12) | t;
          },
          alphabet: {
            numeric: d("0123456789"),
            alphanumerc: d("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
          },
          lengthBits: (e, t) =>
            ({
              numeric: [10, 12, 14],
              alphanumeric: [9, 11, 13],
              byte: [8, 16, 16],
              kanji: [8, 10, 12],
              eci: [0, 0, 0],
            }[t][g.sizeType(e)]),
          modeBits: {
            numeric: "0001",
            alphanumeric: "0010",
            byte: "0100",
            kanji: "1000",
            eci: "0111",
          },
          capacity(e, t) {
            let n = b[e - 1],
              r = m[t][e - 1],
              i = y[t][e - 1],
              o = Math.floor(n / i) - r,
              a = i - (n % i);
            return {
              words: r,
              numBlocks: i,
              shortBlocks: a,
              blockLen: o,
              capacity: (n - r * i) * 8,
              total: (r + o) * i + i - a,
            };
          },
        },
        w = [
          (e, t) => (e + t) % 2 == 0,
          (e, t) => t % 2 == 0,
          (e, t) => e % 3 == 0,
          (e, t) => (e + t) % 3 == 0,
          (e, t) => (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0,
          (e, t) => ((e * t) % 2) + ((e * t) % 3) == 0,
          (e, t) => (((e * t) % 2) + ((e * t) % 3)) % 2 == 0,
          (e, t) => (((e + t) % 2) + ((e * t) % 3)) % 2 == 0,
        ],
        v = {
          tables: ((e) => {
            let t = c(256, 0),
              n = c(256, 0);
            for (let r = 0, i = 1; r < 256; r++)
              (t[r] = i), (n[i] = r), 256 & (i <<= 1) && (i ^= e);
            return { exp: t, log: n };
          })(285),
          exp: (e) => v.tables.exp[e],
          log(e) {
            if (0 === e) throw Error(`GF.log: invalid arg=${e}`);
            return v.tables.log[e] % 255;
          },
          mul: (e, t) =>
            0 === e || 0 === t
              ? 0
              : v.tables.exp[(v.tables.log[e] + v.tables.log[t]) % 255],
          add: (e, t) => e ^ t,
          pow: (e, t) => v.tables.exp[(v.tables.log[e] * t) % 255],
          inv(e) {
            if (0 === e) throw Error(`GF.inverse: invalid arg=${e}`);
            return v.tables.exp[255 - v.tables.log[e]];
          },
          polynomial(e) {
            if (0 == e.length) throw Error("GF.polymomial: invalid length");
            if (0 !== e[0]) return e;
            let t = 0;
            for (; t < e.length - 1 && 0 == e[t]; t++);
            return e.slice(t);
          },
          monomial(e, t) {
            if (e < 0) throw Error(`GF.monomial: invalid degree=${e}`);
            if (0 == t) return [0];
            let n = c(e + 1, 0);
            return (n[0] = t), v.polynomial(n);
          },
          degree: (e) => e.length - 1,
          coefficient: (e, t) => e[v.degree(e) - t],
          mulPoly(e, t) {
            if (0 === e[0] || 0 === t[0]) return [0];
            let n = c(e.length + t.length - 1, 0);
            for (let r = 0; r < e.length; r++)
              for (let i = 0; i < t.length; i++)
                n[r + i] = v.add(n[r + i], v.mul(e[r], t[i]));
            return v.polynomial(n);
          },
          mulPolyScalar(e, t) {
            if (0 == t) return [0];
            if (1 == t) return e;
            let n = c(e.length, 0);
            for (let r = 0; r < e.length; r++) n[r] = v.mul(e[r], t);
            return v.polynomial(n);
          },
          mulPolyMonomial(e, t, n) {
            if (t < 0) throw Error("GF.mulPolyMonomial: invalid degree");
            if (0 == n) return [0];
            let r = c(e.length + t, 0);
            for (let t = 0; t < e.length; t++) r[t] = v.mul(e[t], n);
            return v.polynomial(r);
          },
          addPoly(e, t) {
            if (0 === e[0]) return t;
            if (0 === t[0]) return e;
            let n = e,
              r = t;
            n.length > r.length && ([n, r] = [r, n]);
            let i = c(r.length, 0),
              o = r.length - n.length,
              a = r.slice(0, o);
            for (let e = 0; e < a.length; e++) i[e] = a[e];
            for (let e = o; e < r.length; e++) i[e] = v.add(n[e - o], r[e]);
            return v.polynomial(i);
          },
          remainderPoly(e, t) {
            let n = Array.from(e);
            for (let r = 0; r < e.length - t.length + 1; r++) {
              let e = n[r];
              if (0 !== e)
                for (let i = 1; i < t.length; i++)
                  0 !== t[i] && (n[r + i] = v.add(n[r + i], v.mul(t[i], e)));
            }
            return n.slice(e.length - t.length + 1, n.length);
          },
          divisorPoly(e) {
            let t = [1];
            for (let n = 0; n < e; n++) t = v.mulPoly(t, [1, v.pow(2, n)]);
            return t;
          },
          evalPoly(e, t) {
            if (0 == t) return v.coefficient(e, 0);
            let n = e[0];
            for (let r = 1; r < e.length; r++) n = v.add(v.mul(t, n), e[r]);
            return n;
          },
          euclidian(e, t, n) {
            v.degree(e) < v.degree(t) && ([e, t] = [t, e]);
            let r = e,
              i = t,
              o = [0],
              a = [1];
            for (; 2 * v.degree(i) >= n; ) {
              let e = r,
                t = o;
              if (((r = i), (o = a), 0 === r[0])) throw Error("rLast[0] === 0");
              i = e;
              let n = [0],
                s = v.inv(r[0]);
              for (; v.degree(i) >= v.degree(r) && 0 !== i[0]; ) {
                let e = v.degree(i) - v.degree(r),
                  t = v.mul(i[0], s);
                (n = v.addPoly(n, v.monomial(e, t))),
                  (i = v.addPoly(i, v.mulPolyMonomial(r, e, t)));
              }
              if (
                ((n = v.mulPoly(n, o)),
                (a = v.addPoly(n, t)),
                v.degree(i) >= v.degree(r))
              )
                throw Error(`Division failed r: ${i}, rLast: ${r}`);
            }
            let s = v.coefficient(a, 0);
            if (0 == s) throw Error("sigmaTilde(0) was zero");
            let c = v.inv(s);
            return [v.mulPolyScalar(a, c), v.mulPolyScalar(i, c)];
          },
        };
      function A(e, t, n, r) {
        let i = "",
          o = n.length;
        if ("numeric" === r) {
          let e = g.alphabet.numeric.decode(n.split("")),
            t = e.length;
          for (let n = 0; n < t - 2; n += 3)
            i += a(100 * e[n] + 10 * e[n + 1] + e[n + 2], 10);
          t % 3 == 1
            ? (i += a(e[t - 1], 4))
            : t % 3 == 2 && (i += a(10 * e[t - 2] + e[t - 1], 7));
        } else if ("alphanumeric" === r) {
          let e = g.alphabet.alphanumerc.decode(n.split("")),
            t = e.length;
          for (let n = 0; n < t - 1; n += 2) i += a(45 * e[n] + e[n + 1], 11);
          t % 2 == 1 && (i += a(e[t - 1], 6));
        } else if ("byte" === r) {
          let e = (function (e) {
            if ("string" != typeof e)
              throw Error(`utf8ToBytes expected string, got ${typeof e}`);
            return new Uint8Array(new TextEncoder().encode(e));
          })(n);
          (o = e.length),
            (i = Array.from(e)
              .map((e) => a(e, 8))
              .join(""));
        } else throw Error("encode: unsupported type");
        let { capacity: s } = g.capacity(e, t),
          u = a(o, g.lengthBits(e, r)),
          d = g.modeBits[r] + u + i;
        if (d.length > s) throw Error("Capacity overflow");
        (d += "0".repeat(Math.min(4, Math.max(0, s - d.length)))).length % 8 &&
          (d += "0".repeat(8 - (d.length % 8)));
        let f = "1110110000010001";
        for (let e = 0; d.length !== s; e++) d += f[e % f.length];
        let h = Uint8Array.from(
          d.match(/(.{8})/g).map((e) => Number(`0b${e}`))
        );
        return (function (e, t) {
          let {
              words: n,
              shortBlocks: r,
              numBlocks: i,
              blockLen: o,
              total: a,
            } = g.capacity(e, t),
            s = {
              encode(e) {
                let t = v.divisorPoly(n),
                  r = Array.from(e);
                return (
                  r.push(...t.slice(0, -1).fill(0)),
                  Uint8Array.from(v.remainderPoly(r, t))
                );
              },
              decode(e) {
                let t = e.slice(),
                  r = v.polynomial(Array.from(e)),
                  i = c(n, 0),
                  o = !1;
                for (let e = 0; e < n; e++) {
                  let t = v.evalPoly(r, v.exp(e));
                  (i[i.length - 1 - e] = t), 0 !== t && (o = !0);
                }
                if (!o) return t;
                i = v.polynomial(i);
                let a = v.monomial(n, 1),
                  [s, l] = v.euclidian(a, i, n),
                  u = c(v.degree(s), 0),
                  d = 0;
                for (let e = 1; e < 256 && d < u.length; e++)
                  0 === v.evalPoly(s, e) && (u[d++] = v.inv(e));
                if (d !== u.length)
                  throw Error("RS.decode: invalid errors number");
                for (let e = 0; e < u.length; e++) {
                  let n = t.length - 1 - v.log(u[e]);
                  if (n < 0) throw Error("RS.decode: invalid error location");
                  let r = v.inv(u[e]),
                    i = 1;
                  for (let t = 0; t < u.length; t++)
                    e !== t && (i = v.mul(i, v.add(1, v.mul(u[t], r))));
                  t[n] = v.add(t[n], v.mul(v.evalPoly(l, r), v.inv(i)));
                }
                return t;
              },
            };
          return {
            encode(e) {
              let t = [],
                n = [];
              for (let a = 0; a < i; a++) {
                let i = o + +!(a < r);
                t.push(e.subarray(0, i)),
                  n.push(s.encode(e.subarray(0, i))),
                  (e = e.subarray(i));
              }
              let a = l(...t),
                c = l(...n),
                u = new Uint8Array(a.length + c.length);
              return u.set(a), u.set(c, a.length), u;
            },
            decode(e) {
              if (e.length !== a)
                throw Error(
                  `interleave.decode: len(data)=${e.length}, total=${a}`
                );
              let t = [];
              for (let e = 0; e < i; e++) {
                let i = e < r;
                t.push(new Uint8Array(n + o + +!i));
              }
              let c = 0;
              for (let n = 0; n < o; n++)
                for (let r = 0; r < i; r++) t[r][n] = e[c++];
              for (let n = r; n < i; n++) t[n][o] = e[c++];
              for (let a = o; a < o + n; a++)
                for (let n = 0; n < i; n++) {
                  let i = n < r;
                  t[n][a + +!i] = e[c++];
                }
              let l = [];
              for (let e of t) l.push(...Array.from(s.decode(e)).slice(0, -n));
              return Uint8Array.from(l);
            },
          };
        })(e, t).encode(h);
      }
      function x(e, t, n, r, i = !1) {
        let o = (function (e, t, n, r = !1) {
            let i = g.size.encode(e),
              o = new f(i + 2),
              a = new f(3)
                .rect(0, 3, !0)
                .border(1, !1)
                .border(1, !0)
                .border(1, !1);
            o = (o = o
              .embed(0, a)
              .embed({ x: -a.width, y: 0 }, a)
              .embed({ x: 0, y: -a.height }, a)).rectSlice(1, i);
            let s = new f(1).rect(0, 1, !0).border(1, !1).border(1, !0),
              c = g.alignmentPatterns(e);
            for (let e of c)
              for (let t of c)
                void 0 === o.data[e][t] && o.embed({ x: t - 2, y: e - 2 }, s);
            o = o
              .hLine({ x: 0, y: 6 }, 1 / 0, ({ x: e }, t) =>
                void 0 === t ? e % 2 == 0 : t
              )
              .vLine({ x: 6, y: 0 }, 1 / 0, ({ y: e }, t) =>
                void 0 === t ? e % 2 == 0 : t
              );
            {
              let e = g.formatBits(t, n),
                a = (t) => !r && ((e >> t) & 1) == 1;
              for (let e = 0; e < 6; e++) o.data[e][8] = a(e);
              for (let e = 6; e < 8; e++) o.data[e + 1][8] = a(e);
              for (let e = 8; e < 15; e++) o.data[i - 15 + e][8] = a(e);
              for (let e = 0; e < 8; e++) o.data[8][i - e - 1] = a(e);
              for (let e = 8; e < 9; e++) o.data[8][15 - e - 1 + 1] = a(e);
              for (let e = 9; e < 15; e++) o.data[8][15 - e - 1] = a(e);
              o.data[i - 8][8] = !r;
            }
            if (e >= 7) {
              let t = g.versionBits(e);
              for (let e = 0; e < 18; e += 1) {
                let n = !r && ((t >> e) & 1) == 1,
                  a = Math.floor(e / 3),
                  s = (e % 3) + i - 8 - 3;
                (o.data[a][s] = n), (o.data[s][a] = n);
              }
            }
            return o;
          })(e, t, r, i),
          a = 0,
          s = 8 * n.length;
        if (
          (!(function (e, t, n) {
            let r = e.height,
              i = w[t],
              o = -1,
              a = r - 1;
            for (let t = r - 1; t > 0; t -= 2) {
              for (6 == t && (t = 5); ; a += o) {
                for (let r = 0; r < 2; r += 1) {
                  let o = t - r;
                  void 0 === e.data[a][o] && n(o, a, i(o, a));
                }
                if (a + o < 0 || a + o >= r) break;
              }
              o = -o;
            }
          })(o, r, (e, t, r) => {
            let i = !1;
            a < s && ((i = ((n[a >>> 3] >> ((7 - a) & 7)) & 1) != 0), a++),
              (o.data[t][e] = i !== r);
          }),
          a !== s)
        )
          throw Error("QR: bytes left after draw");
        return o;
      }
      function C(e) {
        let { arena: t, ...n } = e;
        return (0, r.jsxs)(C.Root, {
          ...n,
          children: [
            (0, r.jsx)(C.Finder, {}),
            (0, r.jsx)(C.Cells, {}),
            t &&
              (0, r.jsx)(C.Arena, {
                children:
                  "string" == typeof t
                    ? (0, r.jsx)("img", {
                        alt: "Arena",
                        src: t,
                        style: {
                          borderRadius: 1,
                          height: "100%",
                          objectFit: "cover",
                          width: "100%",
                        },
                      })
                    : t,
              }),
          ],
        });
      }
      !(function (e) {
        function t(t) {
          let { children: n, size: o = "100%", value: a, version: s, ...c } = t,
            l = i.useMemo(
              () =>
                (
                  i.Children.map(
                    n,
                    (e) =>
                      (i.isValidElement(e) &&
                        "string" != typeof e.type &&
                        "displayName" in e.type &&
                        "Arena" === e.type.displayName) ||
                      null
                  ) ?? []
                ).some(Boolean),
              [n]
            ),
            d = i.useMemo(() => {
              let e = t.errorCorrection;
              return (
                l && "low" === e && (e = "medium"),
                (function (e, t = {}) {
                  let { errorCorrection: n, version: r } = t,
                    i = (function (e, t = "raw", n = {}) {
                      let r = void 0 !== n.ecc ? n.ecc : "medium";
                      if (!h.includes(r))
                        throw Error(
                          `Invalid error correction mode=${r}. Expected: ${h}`
                        );
                      let i =
                        void 0 !== n.encoding
                          ? n.encoding
                          : (function (e) {
                              let t = "numeric";
                              for (let n of e)
                                if (
                                  !g.alphabet.numeric.has(n) &&
                                  ((t = "alphanumeric"),
                                  !g.alphabet.alphanumerc.has(n))
                                )
                                  return "byte";
                              return t;
                            })(e);
                      if (!p.includes(i))
                        throw Error(
                          `Encoding: invalid mode=${i}. Expected: ${p}`
                        );
                      if ("kanji" === i || "eci" === i)
                        throw Error(`Encoding: ${i} is not supported (yet?).`);
                      void 0 !== n.mask &&
                        (function (e) {
                          if (![0, 1, 2, 3, 4, 5, 6, 7].includes(e) || !w[e])
                            throw Error(
                              `Invalid mask=${e}. Expected number [0..7]`
                            );
                        })(n.mask);
                      let o = n.version,
                        a,
                        s = Error("Unknown error");
                      if (void 0 !== o) {
                        var c = o;
                        if (!Number.isSafeInteger(c) || c < 1 || c > 40)
                          throw Error(
                            `Invalid version=${c}. Expected number [1..40]`
                          );
                        a = A(o, r, e, i);
                      } else
                        for (let t = 1; t <= 40; t++)
                          try {
                            (a = A(t, r, e, i)), (o = t);
                            break;
                          } catch (e) {
                            s = e;
                          }
                      if (!o || !a) throw s;
                      let l = (function (e, t, n, r) {
                        if (void 0 === r) {
                          let i,
                            o,
                            a =
                              ((o = 1 / 0),
                              {
                                add(e, t) {
                                  e >= o || ((i = t), (o = e));
                                },
                                get: () => i,
                                score: () => o,
                              });
                          for (let r = 0; r < w.length; r++)
                            a.add(
                              (function (e) {
                                let t = e.inverse(),
                                  n = (e) => {
                                    let t = 0;
                                    for (let n = 0, r = 1, i; n < e.length; n++)
                                      (i !== e[n] ||
                                        (r++, n === e.length - 1)) &&
                                        (r >= 5 && (t += 3 + (r - 5)),
                                        (i = e[n]),
                                        (r = 1));
                                    return t;
                                  },
                                  r = 0;
                                e.data.forEach((e) => (r += n(e))),
                                  t.data.forEach((e) => (r += n(e)));
                                let i = 0,
                                  o = e.data,
                                  a = e.width - 1,
                                  s = e.height - 1;
                                for (let e = 0; e < a; e++)
                                  for (let t = 0; t < s; t++) {
                                    let n = e + 1,
                                      r = t + 1;
                                    o[e][t] === o[n][t] &&
                                      o[n][t] === o[e][r] &&
                                      o[n][t] === o[n][r] &&
                                      (i += 3);
                                  }
                                let c = (e) => {
                                    let t = [!0, !1, !0, !0, !0, !1, !0],
                                      n = [!1, !1, !1, !1],
                                      r = [...t, ...n],
                                      i = [...n, ...t],
                                      o = 0;
                                    for (let t = 0; t < e.length; t++)
                                      u(e, r, t) && (o += 40),
                                        u(e, i, t) && (o += 40);
                                    return o;
                                  },
                                  l = 0;
                                for (let t of e.data) l += c(t);
                                for (let e of t.data) l += c(e);
                                let d = 0;
                                e.rectRead(0, 1 / 0, (e, t) => (d += +!!t));
                                let f =
                                  10 *
                                  Math.floor(
                                    Math.abs(
                                      (d / (e.height * e.width)) * 100 - 50
                                    ) / 5
                                  );
                                return r + i + l + f;
                              })(x(e, t, n, r, !0)),
                              r
                            );
                          r = a.get();
                        }
                        if (void 0 === r) throw Error("Cannot find mask");
                        return x(e, t, n, r);
                      })(o, r, a, n.mask);
                      l.assertDrawn();
                      let d = void 0 === n.border ? 2 : n.border;
                      if (!Number.isSafeInteger(d))
                        throw Error(`invalid border type=${typeof d}`);
                      if (
                        ((l = l.border(d, !1)),
                        void 0 !== n.scale && (l = l.scale(n.scale)),
                        "raw" === t)
                      )
                        return l.data;
                      if ("ascii" === t) return l.toASCII();
                      if ("svg" === t) return l.toSVG(n.optimize);
                      if ("gif" === t) return l.toGIF();
                      if ("term" === t) return l.toTerm();
                      else throw Error(`Unknown output: ${t}`);
                    })(e, "raw", { border: 0, ecc: n, scale: 1, version: r });
                  return {
                    edgeLength: i.length,
                    finderLength: 7,
                    grid: i,
                    value: e,
                  };
                })(a, { errorCorrection: e, version: s })
              );
            }, [a, l, t.errorCorrection, s]),
            f = +d.edgeLength,
            b = d.finderLength / 2,
            m = l ? Math.floor(f / 4) : 0,
            y = i.useMemo(
              () => ({
                arenaSize: m,
                cellSize: 1,
                edgeSize: f,
                qrcode: d,
                finderSize: b,
              }),
              [m, f, d, b]
            );
          return (0, r.jsx)(e.Context.Provider, {
            value: y,
            children: (0, r.jsxs)("svg", {
              ...c,
              width: o,
              height: o,
              viewBox: `0 0 ${f} ${f}`,
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0, r.jsx)("title", { children: "QR Code" }), n],
            }),
          });
        }
        function n(t) {
          let {
              className: n,
              fill: o,
              innerClassName: a,
              radius: s = 0.25,
            } = t,
            {
              cellSize: c,
              edgeSize: l,
              finderSize: u,
            } = i.useContext(e.Context);
          function d({ position: e }) {
            let t = u - (u - c) - c / 2;
            "top-right" === e && (t = l - u - (u - c) - c / 2);
            let i = u - (u - c) - c / 2;
            "bottom-left" === e && (i = l - u - (u - c) - c / 2);
            let d = u - 1.5 * c;
            "top-right" === e && (d = l - u - 1.5 * c);
            let f = u - 1.5 * c;
            return (
              "bottom-left" === e && (f = l - u - 1.5 * c),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("rect", {
                    className: n,
                    stroke: o ?? "currentColor",
                    fill: "transparent",
                    x: t,
                    y: i,
                    width: c + (u - c) * 2,
                    height: c + (u - c) * 2,
                    rx: 2 * s * (u - c),
                    ry: 2 * s * (u - c),
                    strokeWidth: c,
                  }),
                  (0, r.jsx)("rect", {
                    className: a,
                    fill: o ?? "currentColor",
                    x: d,
                    y: f,
                    width: 3 * c,
                    height: 3 * c,
                    rx: 2 * s * c,
                    ry: 2 * s * c,
                  }),
                ],
              })
            );
          }
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(d, { position: "top-left" }),
              (0, r.jsx)(d, { position: "top-right" }),
              (0, r.jsx)(d, { position: "bottom-left" }),
            ],
          });
        }
        function o(t) {
          let {
              className: n,
              fill: o = "currentColor",
              inset: a = !0,
              radius: s = 1,
            } = t,
            { arenaSize: c, cellSize: l, qrcode: u } = i.useContext(e.Context),
            { edgeLength: d, finderLength: f } = u,
            h = i.useMemo(() => {
              let e = "";
              for (let t = 0; t < u.grid.length; t++) {
                let n = u.grid[t];
                if (n)
                  for (let r = 0; r < n.length; r++) {
                    if (!n[r]) continue;
                    let i = d / 2 - c / 2,
                      o = i + c;
                    if (t >= i && t <= o && r >= i && r <= o) continue;
                    let u = t < f && r < f,
                      h = t < f && r >= d - f,
                      p = t >= d - f && r < f;
                    if (u || h || p) continue;
                    let b = a ? 0.1 * l : 0,
                      m = (l - 2 * b) / 2,
                      y = r * l + l / 2,
                      g = t * l + l / 2,
                      w = y - m,
                      v = y + m,
                      A = g - m,
                      x = g + m,
                      C = s * m;
                    e += `M ${w + C},${A} L ${
                      v - C
                    },${A} A ${C},${C} 0 0,1 ${v},${A + C} L ${v},${
                      x - C
                    } A ${C},${C} 0 0,1 ${v - C},${x} L ${
                      w + C
                    },${x} A ${C},${C} 0 0,1 ${w},${x - C} L ${w},${
                      A + C
                    } A ${C},${C} 0 0,1 ${w + C},${A} z`;
                  }
              }
              return e;
            }, [c, l, d, f, u.grid, a, s]);
          return (0, r.jsx)("path", { className: n, d: h, fill: o });
        }
        function a(t) {
          let { children: n } = t,
            {
              arenaSize: o,
              cellSize: a,
              edgeSize: s,
            } = i.useContext(e.Context),
            c = Math.ceil(s / 2 - o / 2),
            l = o + (o % 2);
          return (0, r.jsx)("foreignObject", {
            x: c,
            y: c,
            width: l,
            height: l,
            children: (0, r.jsx)("div", {
              style: {
                alignItems: "center",
                display: "flex",
                fontSize: 1,
                justifyContent: "center",
                height: "100%",
                overflow: "hidden",
                width: "100%",
                padding: a / 2,
                boxSizing: "border-box",
              },
              children: n,
            }),
          });
        }
        (e.Context = i.createContext(null)),
          (e.Root = t),
          ((t = e.Root || (e.Root = {})).displayName = "Root"),
          (e.Finder = n),
          ((n = e.Finder || (e.Finder = {})).displayName = "Finder"),
          (e.Cells = o),
          ((o = e.Cells || (e.Cells = {})).displayName = "Cells"),
          (e.Arena = a),
          ((a = e.Arena || (e.Arena = {})).displayName = "Arena");
      })(C || (C = {}));
    },
    80766: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => o, f: () => i });
      var r = function (e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      };
      function i(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        return r(
          function (e) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return { [t.defaultCondition]: e };
            }
            if (Array.isArray(e)) {
              if (!("responsiveArray" in t))
                throw Error("Responsive arrays are not supported");
              var n = {};
              for (var r in t.responsiveArray)
                null != e[r] && (n[t.responsiveArray[r]] = e[r]);
              return n;
            }
            return e;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createNormalizeValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var n = i(e);
        return r(
          function (e, r) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return r(e, t.defaultCondition);
            }
            var i = Array.isArray(e) ? n(e) : e,
              o = {};
            for (var a in i) null != i[a] && (o[a] = r(i[a], a));
            return o;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
    },
    80897: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => b });
      var r = n(97525),
        i = n(77608),
        o = n(82427),
        a = n(16871),
        s = n(44352),
        c = n(42438),
        l = n(35276),
        u = n(11914),
        d = n(34561);
      function f(e, t = {}) {
        void 0 !== t.size && (0, u.Sl)(e, { size: t.size });
        let n = (0, d.My)(e, t);
        return (0, u.ME)(n, t);
      }
      var h = n(55563),
        p = n(41706);
      function b(e, t) {
        let n = "string" == typeof t ? (0, h.aT)(t) : t,
          b = (0, o.l)(n);
        if (0 === (0, a.E)(n) && e.length > 0) throw new r.O();
        if ((0, a.E)(t) && 32 > (0, a.E)(t))
          throw new r.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, a.E)(t),
          });
        let y = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          b.setPosition(y);
          let [o, a] = (function e(t, n, { staticPosition: o }) {
            let a = (0, p.k)(n.type);
            if (a) {
              let [r, i] = a;
              return (function (t, n, { length: r, staticPosition: i }) {
                if (!r) {
                  let r = i + f(t.readBytes(32)),
                    o = r + 32;
                  t.setPosition(r);
                  let a = f(t.readBytes(32)),
                    s = m(n),
                    c = 0,
                    l = [];
                  for (let r = 0; r < a; ++r) {
                    t.setPosition(o + (s ? 32 * r : c));
                    let [i, a] = e(t, n, { staticPosition: o });
                    (c += a), l.push(i);
                  }
                  return t.setPosition(i + 32), [l, 32];
                }
                if (m(n)) {
                  let o = i + f(t.readBytes(32)),
                    a = [];
                  for (let i = 0; i < r; ++i) {
                    t.setPosition(o + 32 * i);
                    let [r] = e(t, n, { staticPosition: o });
                    a.push(r);
                  }
                  return t.setPosition(i + 32), [a, 32];
                }
                let o = 0,
                  a = [];
                for (let s = 0; s < r; ++s) {
                  let [r, s] = e(t, n, { staticPosition: i + o });
                  (o += s), a.push(r);
                }
                return [a, o];
              })(t, { ...n, type: i }, { length: r, staticPosition: o });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let i =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  o = i ? [] : {},
                  a = 0;
                if (m(n)) {
                  let s = r + f(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let c = n.components[r];
                    t.setPosition(s + a);
                    let [l, u] = e(t, c, { staticPosition: s });
                    (a += u), (o[i ? r : c?.name] = l);
                  }
                  return t.setPosition(r + 32), [o, 32];
                }
                for (let s = 0; s < n.components.length; ++s) {
                  let c = n.components[s],
                    [l, u] = e(t, c, { staticPosition: r });
                  (o[i ? s : c?.name] = l), (a += u);
                }
                return [o, a];
              })(t, n, { staticPosition: o });
            if ("address" === n.type) {
              var h = t;
              let e = h.readBytes(32);
              return [(0, i.o)((0, d.My)((0, s.A1)(e, -20))), 32];
            }
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, u.Sl)(n, { size: t.size }), (n = (0, c.B)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new l.xO(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, i] = t.type.split("bytes");
                if (!i) {
                  let t = f(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = f(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let i = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, d.My)(i), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(i, 10), 32)), 32];
              })(t, n, { staticPosition: o });
            if (n.type.startsWith("uint") || n.type.startsWith("int")) {
              var b = t,
                y = n;
              let e = y.type.startsWith("int"),
                r = Number.parseInt(y.type.split("int")[1] || "256", 10),
                i = b.readBytes(32);
              return [
                r > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, u.Sl)(e, { size: t.size });
                      let n = (0, d.My)(e, t);
                      return (0, u.uU)(n, t);
                    })(i, { signed: e })
                  : f(i, { signed: e }),
                32,
              ];
            }
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = f(e.readBytes(32));
                e.setPosition(t + n);
                let r = f(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let i = e.readBytes(r, 32),
                  o = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, u.Sl)(n, { size: t.size }),
                        (n = (0, c.B)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, c.B)(i));
                return e.setPosition(t + 32), [o, 32];
              })(t, { staticPosition: o });
            throw new r.j(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(b, n, { staticPosition: 0 });
          (y += a), g.push(o);
        }
        return g;
      }
      function m(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(m);
        let n = (0, p.k)(e.type);
        return !!(n && m({ ...e, type: n[1] }));
      }
    },
    82050: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => d });
      var r = n(4058),
        i = n(13933);
      class o extends i.C {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = n(67550),
        s = n(56674),
        c = n(59350);
      let l = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var u = n(53473);
      function d(e, t = {}) {
        let {
          batch: n,
          fetchFn: i,
          fetchOptions: f,
          key: h = "http",
          methods: p,
          name: b = "HTTP JSON-RPC",
          onFetchRequest: m,
          onFetchResponse: y,
          retryDelay: g,
          raw: w,
        } = t;
        return ({ chain: d, retryCount: v, timeout: A }) => {
          let { batchSize: x = 1e3, wait: C = 0 } =
              "object" == typeof n ? n : {},
            E = t.retryCount ?? v,
            I = A ?? t.timeout ?? 1e4,
            B = e || d?.rpcUrls.default.http[0];
          if (!B) throw new o();
          let P = (function (e, t = {}) {
            return {
              async request(n) {
                let {
                    body: i,
                    fetchFn: o = t.fetchFn ?? fetch,
                    onRequest: a = t.onRequest,
                    onResponse: u = t.onResponse,
                    timeout: d = t.timeout ?? 1e4,
                  } = n,
                  f = { ...(t.fetchOptions ?? {}), ...(n.fetchOptions ?? {}) },
                  { headers: h, method: p, signal: b } = f;
                try {
                  let t,
                    n = await (0, s.w)(
                      async ({ signal: t }) => {
                        let n = {
                            ...f,
                            body: Array.isArray(i)
                              ? (0, c.A)(
                                  i.map((e) => ({
                                    jsonrpc: "2.0",
                                    id: e.id ?? l.take(),
                                    ...e,
                                  }))
                                )
                              : (0, c.A)({
                                  jsonrpc: "2.0",
                                  id: i.id ?? l.take(),
                                  ...i,
                                }),
                            headers: {
                              "Content-Type": "application/json",
                              ...h,
                            },
                            method: p || "POST",
                            signal: b || (d > 0 ? t : null),
                          },
                          r = new Request(e, n),
                          s = (await a?.(r, n)) ?? { ...n, url: e };
                        return await o(s.url ?? e, s);
                      },
                      {
                        errorInstance: new r.MU({ body: i, url: e }),
                        timeout: d,
                        signal: !0,
                      }
                    );
                  if (
                    (u && (await u(n)),
                    n.headers
                      .get("Content-Type")
                      ?.startsWith("application/json"))
                  )
                    t = await n.json();
                  else {
                    t = await n.text();
                    try {
                      t = JSON.parse(t || "{}");
                    } catch (e) {
                      if (n.ok) throw e;
                      t = { error: t };
                    }
                  }
                  if (!n.ok)
                    throw new r.Ci({
                      body: i,
                      details: (0, c.A)(t.error) || n.statusText,
                      headers: n.headers,
                      status: n.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof r.Ci || t instanceof r.MU) throw t;
                  throw new r.Ci({ body: i, cause: t, url: e });
                }
              },
            };
          })(B, {
            fetchFn: i,
            fetchOptions: f,
            onRequest: m,
            onResponse: y,
            timeout: I,
          });
          return (0, u.o)(
            {
              key: h,
              methods: p,
              name: b,
              async request({ method: e, params: t }) {
                let i = { method: e, params: t },
                  { schedule: o } = (0, a.u)({
                    id: B,
                    wait: C,
                    shouldSplitBatch: (e) => e.length > x,
                    fn: (e) => P.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  s = async (e) => (n ? o(e) : [await P.request({ body: e })]),
                  [{ error: c, result: l }] = await s(i);
                if (w) return { error: c, result: l };
                if (c) throw new r.J8({ body: i, error: c, url: B });
                return l;
              },
              retryCount: E,
              retryDelay: g,
              timeout: I,
              type: "http",
            },
            { fetchOptions: f, url: B }
          );
        };
      }
    },
    82115: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => r });
      class r extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof r) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause &&
                "details" in t.cause &&
                "string" == typeof t.cause.details
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details;
            })(),
            i = (t.cause instanceof r && t.cause.docsPath) || t.docsPath,
            o = `https://oxlib.sh${i ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || i
                ? ["", n ? `Details: ${n}` : void 0, i ? `See: ${o}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = o),
            (this.docsPath = i),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    82323: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var r = n(2350),
        i = n(40290),
        o = n(16871),
        a = n(34561);
      function s(e, t) {
        return (0, r.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, a.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, a.My)(e.raw),
              n = (0, a.i3)(`\x19Ethereum Signed Message:
${(0, o.E)(t)}`);
            return (0, i.xW)([n, t]);
          })(e),
          t
        );
      }
    },
    82427: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => o });
      var r = n(27747);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function o(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(i);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    83515: (e, t, n) => {
      "use strict";
      function r() {
        let e,
          t,
          n = new Promise((n, r) => {
            (e = n), (t = r);
          });
        function r(e) {
          Object.assign(n, e), delete n.resolve, delete n.reject;
        }
        return (
          (n.status = "pending"),
          n.catch(() => {}),
          (n.resolve = (t) => {
            r({ status: "fulfilled", value: t }), e(t);
          }),
          (n.reject = (e) => {
            r({ status: "rejected", reason: e }), t(e);
          }),
          n
        );
      }
      n.d(t, { T: () => r });
    },
    83654: (e, t, n) => {
      "use strict";
      var r = n(12115),
        i = n(14806),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        s = r.useRef,
        c = r.useEffect,
        l = r.useMemo,
        u = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var d = s(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = a(
          e,
          (d = l(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = r(e)), void 0 !== i && f.hasValue)
                  ) {
                    var t = f.value;
                    if (i(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), o(a, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n)
                  ? ((a = e), t)
                  : ((a = e), (s = n));
              }
              var a,
                s,
                c = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return e(l());
                    },
              ];
            },
            [t, n, r, i]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h]
          ),
          u(h),
          h
        );
      };
    },
    83759: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => a });
      var r = n(50879),
        i = n(34561),
        o = n(15885);
      async function a(
        e,
        { blockHash: t, blockNumber: n, blockTag: a, hash: s, index: c }
      ) {
        let l = a || "latest",
          u = void 0 !== n ? (0, i.cK)(n) : void 0,
          d = null;
        if (
          (s
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [s] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, i.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (u || l) &&
              (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [u || l, (0, i.cK)(c)],
                },
                { dedupe: !!u }
              )),
          !d)
        )
          throw new r.Kz({
            blockHash: t,
            blockNumber: n,
            blockTag: l,
            hash: s,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || o.uP)(d);
      }
    },
    84045: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => u });
      var r = n(80549);
      async function i(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            i = t.get(r);
          n = i?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var o = n(86475),
        a = n(86161);
      let s = [];
      function c(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, a.b)(s, t)
          ? s
          : ((s = t), t);
      }
      var l = n(12115);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.U)(e),
          s = { mutationFn: (e) => i(n, e), mutationKey: ["disconnect"] },
          { mutate: u, mutateAsync: d, ...f } = (0, r.n)({ ...t, ...s });
        return {
          ...f,
          connectors: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, o.U)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => c(e), n, { equalityFn: a.b });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: u,
          disconnectAsync: d,
        };
      }
    },
    84500: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => o });
      var r = n(96382);
      function i(e) {
        return {
          address: e.address,
          amount: r.oB(e.amount),
          index: r.oB(e.index),
          validatorIndex: r.oB(e.validatorIndex),
        };
      }
      function o(e) {
        return {
          ...("bigint" == typeof e.baseFeePerGas && {
            baseFeePerGas: r.oB(e.baseFeePerGas),
          }),
          ...("bigint" == typeof e.blobBaseFee && {
            blobBaseFee: r.oB(e.blobBaseFee),
          }),
          ...("string" == typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" == typeof e.gasLimit && { gasLimit: r.oB(e.gasLimit) }),
          ...("bigint" == typeof e.number && { number: r.oB(e.number) }),
          ...("bigint" == typeof e.prevRandao && {
            prevRandao: r.oB(e.prevRandao),
          }),
          ...("bigint" == typeof e.time && { time: r.oB(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(i) }),
        };
      }
    },
    85737: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var r = n(2535),
        i = n(93420),
        o = n(77608),
        a = n(56674);
      function s(e = {}) {
        let t,
          c,
          { shimDisconnect: l = !1 } = e;
        return (0, r.U)((r) => ({
          id: "safe",
          name: "Safe",
          type: s.type,
          async connect({ withCapabilities: e } = {}) {
            let t = await this.getProvider();
            if (!t) throw new i.N();
            let n = await this.getAccounts(),
              o = await this.getChainId();
            return (
              c || ((c = this.onDisconnect.bind(this)), t.on("disconnect", c)),
              l && (await r.storage?.removeItem("safe.disconnected")),
              {
                accounts: e
                  ? n.map((e) => ({ address: e, capabilities: {} }))
                  : n,
                chainId: o,
              }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            c && (e.removeListener("disconnect", c), (c = void 0)),
              l && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            return (await e.request({ method: "eth_accounts" })).map(o.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: r } = await Promise.all([
                    n.e(7607),
                    n.e(1762),
                  ]).then(n.bind(n, 21762)),
                  i = new r(e),
                  o = await (0, a.w)(() => i.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!o) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let e = await Promise.all([n.e(7607), n.e(5912)]).then(
                    n.t.bind(n, 15912, 19)
                  );
                  return "function" != typeof e.SafeAppProvider &&
                    "function" == typeof e.default.SafeAppProvider
                    ? e.default.SafeAppProvider
                    : e.SafeAppProvider;
                })())(o, i);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (l && (await r.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            r.emitter.emit("disconnect");
          },
        }));
      }
      s.type = "safe";
    },
    86161: (e, t, n) => {
      "use strict";
      n.d(t, {
        b: () =>
          function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, i;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
                return !0;
              }
              if (
                "function" == typeof t.valueOf &&
                t.valueOf !== Object.prototype.valueOf
              )
                return t.valueOf() === n.valueOf();
              if (
                "function" == typeof t.toString &&
                t.toString !== Object.prototype.toString
              )
                return t.toString() === n.toString();
              let o = Object.keys(t);
              if ((r = o.length) !== Object.keys(n).length) return !1;
              for (i = r; 0 != i--; ) if (!Object.hasOwn(n, o[i])) return !1;
              for (i = r; 0 != i--; ) {
                let r = o[i];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          },
      });
    },
    86186: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => i });
      var r = n(13933);
      class i extends r.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let n = "Block";
          e && (n = `Block at hash "${e}"`),
            t && (n = `Block at number "${t}"`),
            super(`${n} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    86475: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => c });
      var r = n(12115),
        i = n(65465),
        o = n(28698);
      class a extends o.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return "wagmi@2.17.5";
        }
      }
      class s extends a {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = null != (e = t.config) ? e : (0, r.useContext)(i.R);
        if (!n) throw new s();
        return n;
      }
    },
    86669: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => s });
      var r =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        i = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
          system: r,
        },
        o = {
          large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px",
          },
          medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px",
          },
          none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px",
          },
          small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px",
          },
        },
        a = {
          large: { modalOverlay: "blur(20px)" },
          none: { modalOverlay: "blur(0px)" },
          small: { modalOverlay: "blur(4px)" },
        },
        s = (e) => {
          let {
            borderRadius: t = "large",
            fontStack: n = "rounded",
            overlayBlur: r = "none",
          } = e;
          return {
            blurs: { modalOverlay: a[r].modalOverlay },
            fonts: { body: i[n] },
            radii: {
              actionButton: o[t].actionButton,
              connectButton: o[t].connectButton,
              menuButton: o[t].connectButton,
              modal: o[t].modal,
              modalMobile: o[t].modalMobile,
            },
          };
        };
    },
    87639: (e, t, n) => {
      "use strict";
      n.d(t, { lB: () => a });
      let r = new Map(),
        i = new Map(),
        o = 0;
      function a(e, t, n) {
        let a = ++o,
          s = () => r.get(e) || [],
          c = () => {
            let t = s();
            if (!t.some((e) => e.id === a)) return;
            let n = i.get(e);
            if (1 === t.length && n) {
              let e = n();
              e instanceof Promise && e.catch(() => {});
            }
            let o = s();
            r.set(
              e,
              o.filter((e) => e.id !== a)
            );
          },
          l = s();
        if ((r.set(e, [...l, { id: a, fns: t }]), l && l.length > 0)) return c;
        let u = {};
        for (let e in t)
          u[e] = (...t) => {
            let n = s();
            if (0 !== n.length) for (let r of n) r.fns[e]?.(...t);
          };
        let d = n(u);
        return "function" == typeof d && i.set(e, d), c;
      }
    },
    88423: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => d });
      var r = n(77608),
        i = n(2350),
        o = n(60587),
        a = n(16871),
        s = n(11914),
        c = n(34561);
      async function l({ hash: e, signature: t }) {
        let r = (0, o.q)(e) ? e : (0, c.nj)(e),
          { secp256k1: i } = await Promise.resolve().then(n.bind(n, 20837)),
          l = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: n, v: r, yParity: o } = t,
                a = u(Number(o ?? r));
              return new i.Signature((0, s.uU)(e), (0, s.uU)(n)).addRecoveryBit(
                a
              );
            }
            let e = (0, o.q)(t) ? t : (0, c.nj)(t);
            if (65 !== (0, a.E)(e)) throw Error("invalid signature length");
            let n = u((0, s.ME)(`0x${e.slice(130)}`));
            return i.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              n
            );
          })()
            .recoverPublicKey(r.substring(2))
            .toHex(!1);
        return `0x${l}`;
      }
      function u(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function d({ hash: e, signature: t }) {
        var n = await l({ hash: e, signature: t });
        let o = (0, i.S)(`0x${n.substring(4)}`).substring(26);
        return (0, r.o)(`0x${o}`);
      }
    },
    88737: (e, t, n) => {
      "use strict";
      n.d(t, {
        A7: () => o,
        BG: () => a,
        Fo: () => h,
        K0: () => c,
        Oh: () => l,
        RM: () => m,
        jj: () => s,
        k5: () => d,
        lN: () => b,
        lY: () => f,
        uC: () => p,
        vW: () => u,
      });
      var r = n(42503),
        i = n(13933);
      class o extends i.C {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(o, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class s extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class l extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class u extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends i.C {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class f extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class h extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends i.C {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends i.C {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              n ? ` = ${(0, r.Q)(n)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class m extends i.C {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    88878: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => o });
      var r = n(44352),
        i = n(72997);
      let o = (e) => (0, r.di)((0, i.k)(e), 0, 4);
    },
    89474: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => f });
      var r = n(80549),
        i = n(97152),
        o = n(64664),
        a = n(34561);
      async function s(e, { account: t = e.account, message: n }) {
        if (!t) throw new o.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let r = (0, i.J)(t);
        if (r.signMessage) return r.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, a.i3)(n)
            : n.raw instanceof Uint8Array
            ? (0, a.nj)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [s, r.address] },
          { retryCount: 0 }
        );
      }
      var c = n(21681),
        l = n(29899);
      async function u(e, t) {
        let n,
          { account: r, connector: i, ...o } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, l.r)(e, { account: r, connector: i })),
          (0, c.T)(n, s, "signMessage")({ ...o, ...(r ? { account: r } : {}) })
        );
      }
      var d = n(86475);
      function f() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, d.U)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["signMessage"] }),
          { mutate: o, mutateAsync: a, ...s } = (0, r.n)({ ...n, ...i });
        return { ...s, signMessage: o, signMessageAsync: a };
      }
    },
    89709: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, { BD: () => i, Ge: () => o, Yv: () => r, wj: () => a });
      let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        a = /^\(.+?\).*?$/;
    },
    90523: (e, t, n) => {
      "use strict";
      n.d(t, { Lj: () => a, uL: () => s });
      var r = n(11914),
        i = n(52623),
        o = n(15885);
      let a = { "0x0": "reverted", "0x1": "success" };
      function s(e) {
        let t = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, i.e)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, r.ME)(e.transactionIndex)
            : null,
          status: e.status ? a[e.status] : null,
          type: e.type ? o.b4[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
          t
        );
      }
    },
    90707: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => i });
      var r = n(34561);
      async function i(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: i = e.experimental_blockTag ?? "latest",
        }
      ) {
        let o = "bigint" == typeof n ? (0, r.cK)(n) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, o || i] })
        );
      }
    },
    91053: (e, t, n) => {
      "use strict";
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      n.d(t, { x: () => r });
    },
    91136: (e, t, n) => {
      "use strict";
      n.d(t, {
        A9: () => i,
        NO: () => s,
        Pj: () => c,
        dV: () => o,
        nx: () => l,
        zd: () => a,
      });
      var r = n(63542);
      r.C;
      class i extends r.C {
        constructor({ params: e }) {
          super("Failed to parse ABI parameters.", {
            details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiparameters-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiParametersError",
            });
        }
      }
      class o extends r.C {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class a extends r.C {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class s extends r.C {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class c extends r.C {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class l extends r.C {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
    92987: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => o });
      var r = n(13933),
        i = n(35326);
      function o(e) {
        if (!(e instanceof r.C)) return !1;
        let t = e.walk((e) => e instanceof i.M);
        return (
          t instanceof i.M &&
          (t.data?.errorName === "HttpError" ||
            t.data?.errorName === "ResolverError" ||
            t.data?.errorName === "ResolverNotContract" ||
            t.data?.errorName === "ResolverNotFound" ||
            t.data?.errorName === "ReverseAddressMismatch" ||
            t.data?.errorName === "UnsupportedResolverProfile")
        );
      }
    },
    93049: (e, t, n) => {
      "use strict";
      n.d(t, { II: () => u, cc: () => l, v_: () => c });
      var r = n(56195),
        i = n(63122),
        o = n(83515),
        a = n(34049);
      function s(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function c(e) {
        return (e ?? "online") !== "online" || i.t.isOnline();
      }
      var l = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function u(e) {
        let t,
          n = !1,
          u = 0,
          d = (0, o.T)(),
          f = () =>
            r.m.isFocused() &&
            ("always" === e.networkMode || i.t.isOnline()) &&
            e.canRun(),
          h = () => c(e.networkMode) && e.canRun(),
          p = (e) => {
            "pending" === d.status && (t?.(), d.resolve(e));
          },
          b = (e) => {
            "pending" === d.status && (t?.(), d.reject(e));
          },
          m = () =>
            new Promise((n) => {
              (t = (e) => {
                ("pending" !== d.status || f()) && n(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), "pending" === d.status && e.onContinue?.();
            }),
          y = () => {
            let t;
            if ("pending" !== d.status) return;
            let r = 0 === u ? e.initialPromise : void 0;
            try {
              t = r ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(p)
              .catch((t) => {
                if ("pending" !== d.status) return;
                let r = e.retry ?? 3 * !a.S$,
                  i = e.retryDelay ?? s,
                  o = "function" == typeof i ? i(u, t) : i,
                  c =
                    !0 === r ||
                    ("number" == typeof r && u < r) ||
                    ("function" == typeof r && r(u, t));
                if (n || !c) return void b(t);
                u++,
                  e.onFail?.(u, t),
                  (0, a.yy)(o)
                    .then(() => (f() ? void 0 : m()))
                    .then(() => {
                      n ? b(t) : y();
                    });
              });
          };
        return {
          promise: d,
          status: () => d.status,
          cancel: (t) => {
            if ("pending" === d.status) {
              let n = new l(t);
              b(n), e.onCancel?.(n);
            }
          },
          continue: () => (t?.(), d),
          cancelRetry: () => {
            n = !0;
          },
          continueRetry: () => {
            n = !1;
          },
          canStart: h,
          start: () => (h() ? y() : m().then(y), d),
        };
      }
    },
    93195: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => f });
      var r = n(80549),
        i = n(43159),
        o = n(93420);
      async function a(e, t) {
        let { addEthereumChainParameter: n, chainId: r } = t,
          a = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (a) {
          let e = a.connector;
          if (!e.switchChain) throw new o.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: r,
          });
        }
        let s = e.chains.find((e) => e.id === r);
        if (!s) throw new i.nk();
        return e.setState((e) => ({ ...e, chainId: r })), s;
      }
      var s = n(86161);
      let c = [];
      function l(e) {
        let t = e.chains;
        return (0, s.b)(c, t) ? c : ((c = t), t);
      }
      var u = n(12115),
        d = n(86475);
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, d.U)(e),
          i = { mutationFn: (e) => a(n, e), mutationKey: ["switchChain"] },
          { mutate: o, mutateAsync: s, ...c } = (0, r.n)({ ...t, ...i });
        return {
          ...c,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, d.U)(e);
            return (0, u.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => l(t),
              () => l(t)
            );
          })({ config: n }),
          switchChain: o,
          switchChainAsync: s,
        };
      }
    },
    93420: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => i, V: () => o });
      var r = n(28698);
      class i extends r.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class o extends r.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    93527: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => c });
      var r = n(97525),
        i = n(13933),
        o = n(35326),
        a = n(4058),
        s = n(73168);
      function c(
        e,
        { abi: t, address: n, args: c, docsPath: l, functionName: u, sender: d }
      ) {
        let f =
            e instanceof o.$S
              ? e
              : e instanceof i.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: h, data: p, details: b, message: m, shortMessage: y } = f,
          g =
            e instanceof r.O
              ? new o.rR({ functionName: u })
              : [3, s.bq.code].includes(h) && (p || b || m || y)
              ? new o.M({
                  abi: t,
                  data: "object" == typeof p ? p.data : p,
                  functionName: u,
                  message: f instanceof a.J8 ? b : y ?? m,
                })
              : e;
        return new o.bG(g, {
          abi: t,
          args: c,
          contractAddress: n,
          docsPath: l,
          functionName: u,
          sender: d,
        });
      }
    },
    94788: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => i });
      var r = n(78140);
      function i(e, { emitOnBegin: t, initialWaitTime: n, interval: i }) {
        let o = !0,
          a = () => (o = !1);
        return (
          (async () => {
            let s;
            t && (s = await e({ unpoll: a }));
            let c = (await n?.(s)) ?? i;
            await (0, r.u)(c);
            let l = async () => {
              o && (await e({ unpoll: a }), await (0, r.u)(i), l());
            };
            l();
          })(),
          a
        );
      }
    },
    94820: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, r, o, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new i(r, o || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (e = this._events))
            t.call(e, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = Array(o); i < o; i++)
            a[i] = r[i].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, i, o, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            l,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, i), !0;
              case 5:
                return u.fn.call(u.context, t, r, i, o), !0;
              case 6:
                return u.fn.call(u.context, t, r, i, o, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var f,
              h = u.length;
            for (l = 0; l < h; l++)
              switch (
                (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)
              ) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t, r);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t, r, i);
                  break;
                default:
                  if (!c)
                    for (f = 1, c = Array(d - 1); f < d; f++)
                      c[f - 1] = arguments[f];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, i) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn)
            s.fn !== t ||
              (i && !s.once) ||
              (r && s.context !== r) ||
              a(this, o);
          else {
            for (var c = 0, l = [], u = s.length; c < u; c++)
              (s[c].fn !== t ||
                (i && !s[c].once) ||
                (r && s[c].context !== r)) &&
                l.push(s[c]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : a(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    95089: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => o });
      var r = n(97152),
        i = n(95789);
      function o(e) {
        let {
            batch: t,
            chain: n,
            ccipRead: o,
            key: a = "base",
            name: s = "Base Client",
            type: c = "base",
          } = e,
          l =
            e.experimental_blockTag ??
            ("number" == typeof n?.experimental_preconfirmationTime
              ? "pending"
              : void 0),
          u = Math.min(
            Math.max(Math.floor((n?.blockTime ?? 12e3) / 2), 500),
            4e3
          ),
          d = e.pollingInterval ?? u,
          f = e.cacheTime ?? d,
          h = e.account ? (0, r.J)(e.account) : void 0,
          {
            config: p,
            request: b,
            value: m,
          } = e.transport({ chain: n, pollingInterval: d }),
          y = {
            account: h,
            batch: t,
            cacheTime: f,
            ccipRead: o,
            chain: n,
            key: a,
            name: s,
            pollingInterval: d,
            request: b,
            transport: { ...p, ...m },
            type: c,
            uid: (0, i.L)(),
            ...(l ? { experimental_blockTag: l } : {}),
          };
        return Object.assign(y, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in y) delete r[e];
              let i = { ...t, ...r };
              return Object.assign(i, { extend: e(i) });
            };
          })(y),
        });
      }
    },
    95789: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { L: () => o });
      let i = 256;
      function o(e = 11) {
        if (!r || i + e > 512) {
          (r = ""), (i = 0);
          for (let e = 0; e < 256; e++)
            r += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return r.substring(i, i++ + e);
      }
    },
    96382: (e, t, n) => {
      "use strict";
      n.d(t, {
        Dg: () => g,
        Ej: () => y,
        Fl: () => B,
        HT: () => l,
        Ho: () => p,
        M7: () => b,
        Ro: () => w,
        Ty: () => A,
        di: () => m,
        ii: () => I,
        oB: () => f,
        sH: () => h,
        tf: () => v,
        u: () => E,
        uK: () => d,
        xW: () => c,
        xb: () => u,
      });
      var r = n(82115),
        i = n(69698),
        o = n(71607);
      let a = new TextEncoder(),
        s = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function c(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function l(e) {
        return e instanceof Uint8Array
          ? d(e)
          : Array.isArray(e)
          ? d(new Uint8Array(e))
          : e;
      }
      function u(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size ? (i.Sl(n, t.size), p(n, t.size)) : n;
      }
      function d(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += s[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (i.Sl(r, t.size), b(r, t.size)) : r;
      }
      function f(e, t = {}) {
        let n,
          { signed: r, size: i } = t,
          o = BigInt(e);
        i
          ? (n = r
              ? (1n << (8n * BigInt(i) - 1n)) - 1n
              : 2n ** (8n * BigInt(i)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let a = "bigint" == typeof n && r ? -n - 1n : 0;
        if ((n && o > n) || o < a) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new A({
            max: n ? `${n}${t}` : void 0,
            min: `${a}${t}`,
            signed: r,
            size: i,
            value: `${e}${t}`,
          });
        }
        let s = (r && o < 0 ? (1n << BigInt(8 * i)) + BigInt(o) : o).toString(
            16
          ),
          c = `0x${s}`;
        return i ? p(c, i) : c;
      }
      function h(e, t = {}) {
        return d(a.encode(e), t);
      }
      function p(e, t) {
        return i.eV(e, { dir: "left", size: t });
      }
      function b(e, t) {
        return i.eV(e, { dir: "right", size: t });
      }
      function m(e, t, n, r = {}) {
        let { strict: o } = r;
        i.kK(e, t);
        let a = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return o && i.X(a, t, n), a;
      }
      function y(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function g(e, t = {}) {
        let { signed: n } = t;
        t.size && i.Sl(e, t.size);
        let r = BigInt(e);
        if (!n) return r;
        let o = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
        return r <= o >> 1n ? r : r - o - 1n;
      }
      function w(e, t = {}) {
        let { signed: n, size: r } = t;
        return n || r ? Number(g(e, t)) : Number(e);
      }
      function v(e, t = {}) {
        let { strict: n = !1 } = t;
        try {
          return (
            !(function (e, t = {}) {
              let { strict: n = !1 } = t;
              if (!e || "string" != typeof e) throw new x(e);
              if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                throw new C(e);
            })(e, { strict: n }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class A extends r.C {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number \`${i}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      r.C;
      class x extends r.C {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? o.A(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class C extends r.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      r.C;
      class E extends r.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class I extends r.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class B extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    96565: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => a });
      var r = n(35326),
        i = n(88737),
        o = n(61829);
      function a(e, { docsPath: t, ...n }) {
        let a = (() => {
          let t = (0, o.l)(e, n);
          return t instanceof i.RM ? e : t;
        })();
        return new r.zX(a, { docsPath: t, ...n });
      }
    },
    96748: (e, t, n) => {
      "use strict";
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          i = r?.[0],
          o = e.chains.find((e) => e.id === n?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
      n.d(t, { s: () => r });
    },
    97152: (e, t, n) => {
      "use strict";
      function r(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
      n.d(t, { J: () => r });
    },
    97171: (e, t, n) => {
      "use strict";
      function r(e) {
        let { chain: t } = e,
          n = t.rpcUrls.default.http[0];
        if (!e.transports) return [n];
        let r = e.transports?.[t.id]?.({ chain: t });
        return (r?.value?.transports || [r]).map(({ value: e }) => e?.url || n);
      }
      n.d(t, { R: () => r });
    },
    97525: (e, t, n) => {
      "use strict";
      n.d(t, {
        BI: () => C,
        EB: () => A,
        Iy: () => c,
        Iz: () => w,
        MR: () => v,
        M_: () => g,
        Nc: () => u,
        O: () => l,
        Wl: () => O,
        Wq: () => b,
        YE: () => f,
        YF: () => s,
        YW: () => a,
        ZP: () => h,
        _z: () => m,
        d_: () => S,
        dm: () => k,
        fo: () => E,
        gH: () => d,
        j: () => P,
        kE: () => y,
        l3: () => I,
        nK: () => B,
        nM: () => x,
        yy: () => p,
      });
      var r = n(23222),
        i = n(16871),
        o = n(13933);
      class a extends o.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class s extends o.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      o.C;
      class c extends o.C {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class l extends o.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class u extends o.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends o.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, i.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class f extends o.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class h extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class p extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class b extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class m extends o.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class y extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class g extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class w extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class v extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class A extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class x extends o.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class C extends o.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class E extends o.C {
        constructor({ abiItem: e, data: t, params: n, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.A)(n, { includeName: !0 })})`,
                `Data:   ${t} (${i} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = i);
        }
      }
      class I extends o.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class B extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class P extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class k extends o.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class S extends o.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      class O extends o.C {
        constructor(e) {
          super(`Type "${e}" is not supported for packed encoding.`, {
            name: "UnsupportedPackedAbiType",
          });
        }
      }
    },
    98292: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => l, _: () => c });
      var r = n(32915),
        i = n(72757),
        o = n(5935),
        a = n(60186),
        s = n(32395);
      async function c(e, t) {
        return l(e, t);
      }
      async function l(e, t) {
        let {
            block: n,
            chain: c = e.chain,
            request: l,
            type: u = "eip1559",
          } = t || {},
          d = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: n, client: e, request: l })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (d < 1) throw new r.sM();
        let f = d.toString().split(".")[1]?.length ?? 0,
          h = 10 ** f,
          p = (e) => (e * BigInt(Math.ceil(d * h))) / BigInt(h),
          b = n || (await (0, i.T)(e, a.g, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: p,
            request: l,
            type: u,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === u) {
          if ("bigint" != typeof b.baseFeePerGas) throw new r.pw();
          let t =
              "bigint" == typeof l?.maxPriorityFeePerGas
                ? l.maxPriorityFeePerGas
                : await (0, o.N)(e, { block: b, chain: c, request: l }),
            n = p(b.baseFeePerGas);
          return {
            maxFeePerGas: l?.maxFeePerGas ?? n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: l?.gasPrice ?? p(await (0, i.T)(e, s.L, "getGasPrice")({})),
        };
      }
    },
    98722: (e, t, n) => {
      "use strict";
      function r() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((n, r) => {
            (e = n), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
      n.d(t, { Y: () => r });
    },
    98782: (e, t, n) => {
      "use strict";
      n.d(t, { UG: () => a, xo: () => i, zz: () => o });
      var r = n(63542);
      class i extends r.C {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class o extends r.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class a extends r.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    98957: (e, t, n) => {
      "use strict";
      n.d(t, {
        Dv: () => E,
        FO: () => b,
        If: () => A,
        Ji: () => d,
        Rv: () => c,
        WL: () => p,
        Yo: () => g,
        ej: () => f,
        fC: () => I,
        iB: () => l,
        kz: () => a,
        l9: () => y,
        pc: () => o,
        sP: () => C,
        v7: () => B,
        v8: () => v,
      });
      var r = n(89709);
      let i = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function o(e) {
        return i.test(e);
      }
      function a(e) {
        return (0, r.Yv)(i, e);
      }
      let s = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function c(e) {
        return s.test(e);
      }
      function l(e) {
        return (0, r.Yv)(s, e);
      }
      let u =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function d(e) {
        return u.test(e);
      }
      function f(e) {
        return (0, r.Yv)(u, e);
      }
      let h =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function p(e) {
        return h.test(e);
      }
      function b(e) {
        return (0, r.Yv)(h, e);
      }
      let m =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function y(e) {
        return m.test(e);
      }
      function g(e) {
        return (0, r.Yv)(m, e);
      }
      let w = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function v(e) {
        return w.test(e);
      }
      function A(e) {
        return (0, r.Yv)(w, e);
      }
      let x = /^receive\(\) external payable$/;
      function C(e) {
        return x.test(e);
      }
      let E = new Set(["memory", "indexed", "storage", "calldata"]),
        I = new Set(["indexed"]),
        B = new Set(["calldata", "memory", "storage"]);
    },
    99776: (e, t, n) => {
      "use strict";
      n.d(t, { Ht: () => s, jE: () => a });
      var r = n(12115),
        i = n(95155),
        o = r.createContext(void 0),
        a = (e) => {
          let t = r.useContext(o);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        s = (e) => {
          let { client: t, children: n } = e;
          return (
            r.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, i.jsx)(o.Provider, { value: t, children: n })
          );
        };
    },
    99896: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => a });
      var r = n(86669),
        i = {
          blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
          green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
          orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
          pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
          purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
          red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
        },
        o = i.blue,
        a = function () {
          let {
            accentColor: e = o.accentColor,
            accentColorForeground: t = o.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, r.$)(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      a.accentColors = i;
    },
    99941: (e, t, n) => {
      "use strict";
      function r(e) {
        return e.state.chainId;
      }
      n.d(t, { i: () => a });
      var i = n(12115),
        o = n(86475);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.U)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => r(t),
          () => r(t)
        );
      }
    },
  },
]);
